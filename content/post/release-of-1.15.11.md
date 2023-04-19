---
date: "2022-01-30T18:08:00+00:00"
author: "zeripath"
title: "Gitea 1.15.11 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.15.11.

We highly encourage users to update to this version for some important bug-fixes and a security upgrade to the MermaidJS library.

We have merged [8](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.15.11+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.15.11/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.15.11](https://github.com/go-gitea/gitea/releases/tag/v1.15.11) - 2022-01-29

* SECURITY
  * Only view milestones from current repo (#18414) (#18418)
* BUGFIXES
  * Fix broken when no commits and default branch is not master (#18422) (#18424)
  * Fix commit's time (#18375) (#18409)
  * Fix restore without topic failure (#18387) (#18401)
  * Fix mermaid import in 1.15 (it uses ESModule now) (#18382)
  * Update to go/text 0.3.7 (#18336)
* MISC
  * Upgrade EasyMDE to 2.16.1 (#18278) (#18279)
