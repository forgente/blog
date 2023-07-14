// Ejected unsafe, need to check if this changes and maintain this component
// https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/BlogLayout/index.tsx
import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";
import { ActionFooter } from "@site/src/components/ActionFooter";
import { Section } from "@site/src/components/Section";

// customized:
// - Use "col--9" for `main` if there is no toc
// - Addded subscribe and community card to the bottom
export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx("col", {
              "col--7": hasSidebar,
              "col--9 col--offset-1": !hasSidebar,
              "col--9": !toc,
            })}
            itemScope
            itemType="http://schema.org/Blog">
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
        <Section>
          <ActionFooter />
        </Section>
      </div>
    </Layout>
  );
}
