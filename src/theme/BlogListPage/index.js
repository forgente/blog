// Ejected unsafe, need to check if this changes and maintain this component
// https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/BlogListPage/index.tsx
import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
// import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
// import BlogPostItems from "@theme/BlogPostItems";
import { ListItem } from "./ListItem";
import { Chips } from "./Chips";
import { CategoryTabs } from "./CategoryTabs";
import styles from "./styles.module.css";
import useGlobalData from "@docusaurus/useGlobalData";

// customized:
// - Layout
// - Tags list page
function BlogListPageMetadata(props) {
  const isTagsPage = props.tag !== undefined;
  const isCategoryPage = props.category !== undefined;
  const metadata = isTagsPage || isCategoryPage ? props.listMetadata: props.metadata;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}
function BlogListPageContent(props) {
  const isTagsPage = props.tag !== undefined;
  const isCategoryPage = props.category !== undefined;
  let tagPageCount = -1;
  const metadata = isTagsPage || isCategoryPage ? props.listMetadata: props.metadata;
  // No official api to get all tags right now: https://github.com/facebook/docusaurus/discussions/5856
  // So used customized blog plugin which extends original blog plugin
  const globalData = useGlobalData();
  const myPluginData = globalData["docusaurus-plugin-content-blog"]["default"];
  const tags = [];
  for (const {items, label, permalink} of Object.values(myPluginData.tags)) {
    tags.push({label, permalink});
    if (isTagsPage && props.tag.label === label) {
      tagPageCount = items.length;
    }
  }
  tags.sort((a,b) => a.label.localeCompare(b.label) );
  const categories = Object.values(myPluginData.categories).map(
    ({items, key, label, permalink}) => ({
      key,
      label,
      permalink,
      count: items.length,
    }),
  ).sort((a, b) => {
    if (a.key === "others") return 1;
    if (b.key === "others") return -1;
    return a.label.localeCompare(b.label);
  });
  const activeCategoryKey = isCategoryPage ? props.category.key : null;
  const {items, sidebar} = props;
  const postsTitle = isTagsPage
    ? `${tagPageCount !== -1 ? `${tagPageCount} posts`: "Posts"} tagged with "${props.tag.label}"`
    : isCategoryPage
      ? `${props.category.count} posts in "${props.category.label}"`
      : "Blog Posts";

  return (
    // <BlogLayout sidebar={sidebar}>
    //   <BlogPostItems items={items} />
    //   <BlogListPaginator metadata={metadata} />
    // </BlogLayout>
    <Layout title="Blog">
      <main className={styles.root}>
        <div className={styles.tagSection}>
          <span className={styles.eyebrow}>Browse by tag</span>
          <div className={styles.chipRow}>
            <Chips
              activeChipLabel={isTagsPage? props.tag.label: null}
              items={tags}
            />
          </div>
        </div>
        <CategoryTabs
          items={categories}
          activeKey={activeCategoryKey}
        />
        <h2 className={styles.title}>{postsTitle}</h2>
        <div className={styles.posts}>
          {items.map(({ content }, i) => (
            <ListItem
              key={content.metadata.permalink}
              content={content}
              belowFold={i > 5}
            />
          ))}
        </div>

        {metadata && <BlogListPaginator metadata={metadata} />}
      </main>
    </Layout>
  );
}
export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
