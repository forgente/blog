---
date: 2020-06-18T10:00:00+00:00
authors: "jolheiser"
title: "Gitea 1.11.7 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.11.7"
---

We are proud to present the release of Gitea version 1.11.7.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [6](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.11.7+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.11.7/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

## [1.11.7](https://github.com/go-gitea/gitea/releases/tag/v1.11.7) - 2020-06-18

* BUGFIXES
  * Use ID or Where to instead directly use Get when load object from database ([#11925](https://github.com/go-gitea/gitea/pull/11925)) ([#11935](https://github.com/go-gitea/gitea/pull/11935))
  * Fix \_\_webpack_public_path\_\_ for 1.11 ([#11907](https://github.com/go-gitea/gitea/pull/11907))
  * Fix verification of subkeys of default gpg key ([#11713](https://github.com/go-gitea/gitea/pull/11713)) ([#11902](https://github.com/go-gitea/gitea/pull/11902))
  * Remove unnecessary parentheses in wiki/view template ([#11781](https://github.com/go-gitea/gitea/pull/11781))
  * Doctor fix xorm.Count nil on sqlite error ([#11741](https://github.com/go-gitea/gitea/pull/11741))
  
