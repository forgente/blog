---
date: 2021-03-10T00:02:08+08:00
authors: "lunny"
title: "Gitea 1.13.4 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.13.4"
---

We are proud to present the release of Gitea version 1.13.4.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [8](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.13.4+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.13.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would like to give a special thanks to Septatrix for reporting a security issue that was patched in this release.

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.13.4](https://github.com/go-gitea/gitea/releases/tag/v1.13.4) - 2021-03-09

* SECURITY
  * Fix issue popups ([#14898](https://github.com/go-gitea/gitea/pull/14898)) ([#14899](https://github.com/go-gitea/gitea/pull/14899))
* BUGFIXES
  * Fix race in LFS ContentStore.Put(...) ([#14895](https://github.com/go-gitea/gitea/pull/14895)) ([#14913](https://github.com/go-gitea/gitea/pull/14913))
  * Fix a couple of issues with a feeds ([#14897](https://github.com/go-gitea/gitea/pull/14897)) ([#14903](https://github.com/go-gitea/gitea/pull/14903))
  * When transfering repository and database transaction failed, rollback the renames ([#14864](https://github.com/go-gitea/gitea/pull/14864)) ([#14902](https://github.com/go-gitea/gitea/pull/14902))
  * Fix race in local storage ([#14888](https://github.com/go-gitea/gitea/pull/14888)) ([#14901](https://github.com/go-gitea/gitea/pull/14901))
  * Fix 500 on pull view page if user is not loged in ([#14885](https://github.com/go-gitea/gitea/pull/14885)) ([#14886](https://github.com/go-gitea/gitea/pull/14886))
* DOCS
  * Fix how lfs data path is set ([#14855](https://github.com/go-gitea/gitea/pull/14855)) ([#14884](https://github.com/go-gitea/gitea/pull/14884))
