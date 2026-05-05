---
date: 2025-03-24T15:35:00-8:00
authors: 
  - "lunny"
title: "Gitea 1.23.6 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.23.6
---

We are proud to present the release of **Gitea version 1.23.6**.

This update addresses three critical security issues, so we strongly recommend all users upgrade as soon as possible.

We have merged [18](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.23.6+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

The pure SSH implementation now uses internal router endpoints instead of external routers. Thanks to @florolf for reporting the issue and to @wxiaoguang for providing the fix.

This release also addresses the following security vulnerabilities:

- CVE-2025-30204 in jwt and CVE-2025-29923 in go-redis – thanks to @TheFox0x7 for the fix.
-CVE-2025-22870 in golang.org/x/crypto and golang.org/x/net – fixed for security hardening. Thanks again to @wxiaoguang for the contribution.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.23.6/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.23.6](https://github.com/go-gitea/gitea/releases/tag/v1.23.6) - 2025-03-24

* SECURITY
  * Fix LFS URL ([#33840](https://github.com/go-gitea/gitea/pull/33840)) ([#33843](https://github.com/go-gitea/gitea/pull/33843))
  * Update jwt and redis packages ([#33984](https://github.com/go-gitea/gitea/pull/33984)) ([#33987](https://github.com/go-gitea/gitea/pull/33987))
  * Update golang crypto and net ([#33989](https://github.com/go-gitea/gitea/pull/33989))
* BUGFIXES
  * Drop timeout for requests made to the internal hook api ([#33947](https://github.com/go-gitea/gitea/pull/33947)) ([#33970](https://github.com/go-gitea/gitea/pull/33970))
  * Fix maven panic when no package exists ([#33888](https://github.com/go-gitea/gitea/pull/33888)) ([#33889](https://github.com/go-gitea/gitea/pull/33889))
  * Fix markdown render ([#33870](https://github.com/go-gitea/gitea/pull/33870)) ([#33875](https://github.com/go-gitea/gitea/pull/33875))
  * Fix auto concurrency cancellation skips commit status updates ([#33764](https://github.com/go-gitea/gitea/pull/33764)) ([#33849](https://github.com/go-gitea/gitea/pull/33849))
  * Fix oauth2 auth ([#33961](https://github.com/go-gitea/gitea/pull/33961)) ([#33962](https://github.com/go-gitea/gitea/pull/33962))
  * Fix incorrect 1.23 translations ([#33932](https://github.com/go-gitea/gitea/pull/33932))
  * Try to figure out attribute checker problem ([#33901](https://github.com/go-gitea/gitea/pull/33901)) ([#33902](https://github.com/go-gitea/gitea/pull/33902))
  * Ignore trivial errors when updating push data ([#33864](https://github.com/go-gitea/gitea/pull/33864)) ([#33887](https://github.com/go-gitea/gitea/pull/33887))
  * Fix some UI problems for 1.23 ([#33856](https://github.com/go-gitea/gitea/pull/33856))
  * Removing unwanted ui container ([#33833](https://github.com/go-gitea/gitea/pull/33833)) ([#33835](https://github.com/go-gitea/gitea/pull/33835))
  * Support disable passkey auth ([#33348](https://github.com/go-gitea/gitea/pull/33348)) ([#33819](https://github.com/go-gitea/gitea/pull/33819))
  * Do not call "git diff" when listing PRs ([#33817](https://github.com/go-gitea/gitea/pull/33817))
  * Try to fix ACME (3rd) ([#33807](https://github.com/go-gitea/gitea/pull/33807)) ([#33808](https://github.com/go-gitea/gitea/pull/33808))
  * Fix incorrect code search indexer options ([#33992](https://github.com/go-gitea/gitea/pull/33992)) #33999


## Contributors

* [@ChristopherHX](https://github.com/ChristopherHX)
* [@lunny](https://github.com/lunny)
* [@Mik4sa](https://github.com/Mik4sa)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@Vinoth-kumar-Ganesan](https://github.com/Vinoth-kumar-Ganesan)
* [@wxiaoguang](https://github.com/wxiaoguang)
