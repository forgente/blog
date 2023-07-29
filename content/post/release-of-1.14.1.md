---
date: 2021-04-16T17:09:04+07:00
authors: "lunny"
title: "Gitea 1.14.1 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.14.1.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [25](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.14.1+is%3Amerged) pull requests to release this version.

In this release, we switch back to go-git for windows binaries because of [#15482](https://github.com/go-gitea/gitea/pull/15482).

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.14.1/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.14.1](https://github.com/go-gitea/gitea/releases/tag/v1.14.1) - 2021-04-15

* BUGFIXES
  * Fix bug clone wiki ([#15499](https://github.com/go-gitea/gitea/pull/15499)) ([#15502](https://github.com/go-gitea/gitea/pull/15502))
  * Github Migration ignore rate limit, if not enabled ([#15490](https://github.com/go-gitea/gitea/pull/15490)) ([#15495](https://github.com/go-gitea/gitea/pull/15495))
  * Use subdir for URL ([#15446](https://github.com/go-gitea/gitea/pull/15446)) ([#15493](https://github.com/go-gitea/gitea/pull/15493))
  * Query the DB for the hash before inserting in to email_hash ([#15457](https://github.com/go-gitea/gitea/pull/15457)) ([#15491](https://github.com/go-gitea/gitea/pull/15491))
  * Ensure review dismissal only dismisses the correct review ([#15477](https://github.com/go-gitea/gitea/pull/15477)) ([#15489](https://github.com/go-gitea/gitea/pull/15489))
  * Use index of the supported tags to choose user lang ([#15452](https://github.com/go-gitea/gitea/pull/15452)) ([#15488](https://github.com/go-gitea/gitea/pull/15488))
  * Fix wrong file link in code search page ([#15466](https://github.com/go-gitea/gitea/pull/15466)) ([#15486](https://github.com/go-gitea/gitea/pull/15486))
  * Quick template fix for built-in SSH server in admin config ([#15464](https://github.com/go-gitea/gitea/pull/15464)) ([#15481](https://github.com/go-gitea/gitea/pull/15481))
  * Prevent superfluous response.WriteHeader ([#15456](https://github.com/go-gitea/gitea/pull/15456)) ([#15476](https://github.com/go-gitea/gitea/pull/15476))
  * Fix ambiguous argument error on tags ([#15432](https://github.com/go-gitea/gitea/pull/15432)) ([#15474](https://github.com/go-gitea/gitea/pull/15474))
  * Add created_unix instead of expiry to migration ([#15458](https://github.com/go-gitea/gitea/pull/15458)) ([#15463](https://github.com/go-gitea/gitea/pull/15463))
  * Fix repository search ([#15428](https://github.com/go-gitea/gitea/pull/15428)) ([#15442](https://github.com/go-gitea/gitea/pull/15442))
  * Prevent NPE on avatar direct rendering if federated avatars disabled ([#15434](https://github.com/go-gitea/gitea/pull/15434)) ([#15439](https://github.com/go-gitea/gitea/pull/15439))
  * Fix wiki clone urls ([#15430](https://github.com/go-gitea/gitea/pull/15430)) ([#15431](https://github.com/go-gitea/gitea/pull/15431))
  * Fix dingtalk icon url at webhook ([#15417](https://github.com/go-gitea/gitea/pull/15417)) ([#15426](https://github.com/go-gitea/gitea/pull/15426))
  * Standardise icon on projects PR page ([#15387](https://github.com/go-gitea/gitea/pull/15387)) ([#15408](https://github.com/go-gitea/gitea/pull/15408))
* ENHANCEMENTS
  * Add option to skip LFS/attachment files for `dump` ([#15407](https://github.com/go-gitea/gitea/pull/15407)) ([#15492](https://github.com/go-gitea/gitea/pull/15492))
  * Clone panel fixes ([#15436](https://github.com/go-gitea/gitea/pull/15436))
  * Use semantic dropdown for code search query type ([#15276](https://github.com/go-gitea/gitea/pull/15276)) ([#15364](https://github.com/go-gitea/gitea/pull/15364))
* BUILD
  * Build go-git variants for windows ([#15482](https://github.com/go-gitea/gitea/pull/15482)) ([#15487](https://github.com/go-gitea/gitea/pull/15487))
  * Lock down build-images dependencies (Partial [#15479](https://github.com/go-gitea/gitea/pull/15479)) ([#15480](https://github.com/go-gitea/gitea/pull/15480))
* MISC
  * Performance improvement for list pull requests ([#15447](https://github.com/go-gitea/gitea/pull/15447)) ([#15500](https://github.com/go-gitea/gitea/pull/15500))
  * Fix potential copy lfs records failure when fork a repository ([#15441](https://github.com/go-gitea/gitea/pull/15441)) ([#15485](https://github.com/go-gitea/gitea/pull/15485))
