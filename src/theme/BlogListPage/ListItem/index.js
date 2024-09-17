import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { Chip } from "../Chip";
import { ensureTrailingSlash } from "@site/src/utils/ensureTrailingSlash.js";
import BlogPostCoverImage from "@theme/BlogReleaseCoverImage";

export const ListItem = ({ content, belowFold }) => {
  const {metadata, frontMatter} = content;
  const {tags, permalink, authors, title} = metadata;
  const tag = tags[0] ?? {};
  const imageUrl = frontMatter.coverImage ?? "/img/blog_placeholder.png";
  const postUrl = ensureTrailingSlash(permalink);
  return (
    <div className={styles.root}>
      <div className={styles.imageBox}>
        <Link to={postUrl} className={styles.image}>
          {frontMatter.coverImageRelease ?
            BlogPostCoverImage({ version: frontMatter.coverImageRelease })
            : <img
              loading={belowFold ? "lazy" : "eager"}
              src={imageUrl}
              alt={`Banner for blog post with title "${title}"`}
              />}
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.tags}>
          <Chip
            label={tag.label}
            permalink={tag.permalink}
            skin="secondary"
            size="small"
          />
        </div>

        <h2 className={styles.title}>
          <Link to={postUrl}>{title}</Link>
        </h2>
        <div className={styles.authors}>
          by {authors.map((author, i) => (
            <a href={author.url} className={styles.author} key={i}>{author.name}</a>
          ))} on {frontMatter.date.toLocaleDateString()}
        </div>
      </div>
    </div>
  )
}
