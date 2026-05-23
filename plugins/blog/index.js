import blogPlugin from '@docusaurus/plugin-content-blog';
import fs from 'fs';
import path from 'path';
import {normalizeUrl} from '@docusaurus/utils';

/*
* This plugin enhances the default '@docusaurus/plugin-content-blog' plugin with
* `tags` and first-folder `categories` added to `globalData`.
* They are later consumed in `src/theme/BlogListPage`.
*/
async function blogPluginEnhanced(context, options) {
  const categoryLabels = getCategoryLabels(context, options);

  const pluginOptions = {
    ...options,
    async processBlogPosts({blogPosts}) {
      return blogPosts.map((blogPost) => {
        const slugParts = blogPost.id.split('/').filter(Boolean);
        const categoryKey = slugParts[0];
        if (!categoryLabels[categoryKey]) {
          if (slugParts.length === 1) {
            console.warn(
              `[blog] "${blogPost.id}" lives directly under ${options.path}; ` +
              `it will be reachable at its permalink but absent from category pages. ` +
              `Move it into a category subfolder to expose it on /categories/<key>.`,
            );
          }
          return blogPost;
        }

        const slug = `/${slugParts.slice(1).join('/')}`;
        const permalink = normalizeUrl([
          context.siteConfig.baseUrl,
          options.routeBasePath,
          slug,
        ]);

        return {
          ...blogPost,
          id: slug,
          metadata: {
            ...blogPost.metadata,
            permalink,
            category: {
              key: categoryKey,
              label: categoryLabels[categoryKey],
              permalink: normalizeUrl([
                context.siteConfig.baseUrl,
                options.routeBasePath,
                'categories',
                categoryKey,
              ]),
            },
          },
        };
      });
    },
  };

  const blogPluginInstance = await blogPlugin(context, pluginOptions);
  return {
    ...blogPluginInstance,

    async contentLoaded(...contentLoadedArgs) {
      await blogPluginInstance.contentLoaded(...contentLoadedArgs);
      const { actions, content } = contentLoadedArgs[0];
      const { addRoute, setGlobalData } = actions;
      const { blogDescription, blogPosts, blogTags, blogTitle } = content;
      const listedBlogPosts = blogPosts.filter((post) => !post.metadata.unlisted);
      const blogBasePath = normalizeUrl([
        context.siteConfig.baseUrl,
        pluginOptions.routeBasePath,
      ]);

      const categories = Object.fromEntries(
        Object.entries(categoryLabels).map(([key, label]) => {
          const categoryPosts = listedBlogPosts.filter(
            (post) => post.metadata.category?.key === key,
          );
          const permalink = normalizeUrl([blogBasePath, 'categories', key]);
          return [
            key,
            {
              key,
              label,
              permalink,
              items: categoryPosts.map((post) => post.id),
              pages: paginateCategoryPosts({
                blogPosts: categoryPosts,
                basePageUrl: permalink,
                blogDescription,
                blogTitle,
                pageBasePath: pluginOptions.pageBasePath,
                postsPerPageOption: pluginOptions.postsPerPage,
              }),
            },
          ];
        }),
      );

      Object.values(categories).forEach((category) => {
        category.pages.forEach((paginated) => {
          addRoute({
            path: paginated.metadata.permalink,
            component: pluginOptions.blogTagsPostsComponent,
            exact: true,
            modules: {
              items: paginated.items.map((id) => ({
                content: {
                  __import: true,
                  path: blogPosts.find((post) => post.id === id).metadata.source,
                  query: {
                    truncated: true,
                  },
                },
              })),
            },
            props: {
              category: {
                key: category.key,
                label: category.label,
                permalink: category.permalink,
                count: category.items.length,
              },
              listMetadata: paginated.metadata,
            },
          });
        });
      });

      setGlobalData({tags: blogTags, categories});
    }
  };
}

function paginateCategoryPosts({
  blogPosts,
  basePageUrl,
  blogTitle,
  blogDescription,
  postsPerPageOption,
  pageBasePath,
}) {
  const totalCount = blogPosts.length;
  const postsPerPage = postsPerPageOption === 'ALL'
    ? Math.max(1, totalCount)
    : postsPerPageOption;
  const numberOfPages = Math.max(1, Math.ceil(totalCount / postsPerPage));

  return Array.from({length: numberOfPages}, (_, page) => {
    const permalink = page > 0
      ? normalizeUrl([basePageUrl, pageBasePath, `${page + 1}`])
      : basePageUrl;

    return {
      items: blogPosts
        .slice(page * postsPerPage, (page + 1) * postsPerPage)
        .map((post) => post.id),
      metadata: {
        permalink,
        page: page + 1,
        postsPerPage,
        totalPages: numberOfPages,
        totalCount,
        previousPage: page !== 0
          ? (page === 1
            ? basePageUrl
            : normalizeUrl([basePageUrl, pageBasePath, `${page}`]))
          : undefined,
        nextPage: page < numberOfPages - 1
          ? normalizeUrl([basePageUrl, pageBasePath, `${page + 2}`])
          : undefined,
        blogDescription,
        blogTitle,
      },
    };
  });
}

// Read once at plugin construction. Adding a new category folder while
// `pnpm start` is running requires a dev-server restart to be picked up.
function getCategoryLabels(context, options) {
  const contentPath = path.join(context.siteDir, options.path);
  if (!fs.existsSync(contentPath)) {
    return {};
  }

  return Object.fromEntries(
    fs.readdirSync(contentPath, {withFileTypes: true})
      .filter((entry) => entry.isDirectory())
      .map((entry) => [entry.name, labelFromCategoryKey(entry.name)]),
  );
}

function labelFromCategoryKey(key) {
  return key
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export {validateOptions} from '@docusaurus/plugin-content-blog';
export default blogPluginEnhanced;
