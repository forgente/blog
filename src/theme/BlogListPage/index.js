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
import styles from "./styles.module.css";
import useGlobalData from "@docusaurus/useGlobalData";

// customized:
// - Layout
// - Tags list page
function BlogListPageMetadata(props) {
  const isTagsPage = props.tag !== undefined;
  const metadata = isTagsPage ? props.listMetadata: props.metadata;
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
  let tagPageCount = -1;
  const metadata = isTagsPage ? props.listMetadata: props.metadata;
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
  const {items, sidebar} = props;
  return (
    // <BlogLayout sidebar={sidebar}>
    //   <BlogPostItems items={items} />
    //   <BlogListPaginator metadata={metadata} />
    // </BlogLayout>
    <Layout title="Blog">
      <main className={styles.root}>
        <h2 className={styles.title}>Filter by Tag</h2>
        <div className={styles.categories}>
          <Chips
            activeChipLabel={isTagsPage? props.tag.label: null}
            items={tags}
          />
        </div>
        <a className={styles.link} href="/">Show all posts</a>
        <h2 className={styles.title}>{isTagsPage? `${tagPageCount !== -1 ? `${tagPageCount} posts`: "Posts"} tagged with "${props.tag.label}"`: "Blog Posts"}</h2>
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
