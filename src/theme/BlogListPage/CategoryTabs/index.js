import clsx from "clsx";
import React from "react";
import Link from "@docusaurus/Link";
import { ensureTrailingSlash } from "@site/src/utils/ensureTrailingSlash.js";
import styles from "./styles.module.css";

export const CategoryTabs = ({ items, activeKey, allHref = "/", showAll = true }) => (
  <nav className={styles.root} aria-label="Filter posts by category">
    <ul className={styles.list}>
      {showAll && (
        <li className={styles.item}>
          <Link
            to={ensureTrailingSlash(allHref)}
            className={clsx(styles.tab, {
              [styles.active]: activeKey == null,
            })}
          >
            All
          </Link>
        </li>
      )}
      {items.map(({ key, label, permalink }) => (
        <li key={key} className={styles.item}>
          <Link
            to={ensureTrailingSlash(permalink)}
            className={clsx(styles.tab, {
              [styles.active]: activeKey === key,
            })}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
