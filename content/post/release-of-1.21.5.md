---
date: 2024-02-01T21:04:00+08:00
authors:
  - "lunny"
title: "Gitea 1.21.5 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.21.5"
---

Gitea 1.21.5 is now released. It contains [27](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.5+is%3Amerged) merged PRs and fixes for a security vulnerability.

We highly encourage users to update to this version for some important bug-fixes. There are two security bug fixed in this release. Thanks to [@Shuenhoy](https://github.com/Shuenhoy) for reporting the issue.

<!-- Security Thanks! -->
Thanks to [@KN4CK3R](https://github.com/KN4CK3R) and [@wxiaoguang](https://github.com/wxiaoguang) for fixing the problems.

You can download Gitea 1.21.5 from our [downloads page](https://dl.gitea.com/gitea/1.21.5/), [release page](https://github.com/go-gitea/gitea/releases/tag/v1.21.5) or pull images with `docker pull gitea/gitea:1.21.5`. Please read our [installation guide](https://docs.gitea.com/installation/install-from-binary) for more information on installation.

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Changelog

## [1.21.5](https://github.com/go-gitea/gitea/releases/tag/1.21.5) - 2024-01-31

* SECURITY
  * Prevent anonymous container access if `RequireSignInView` is enabled ([#28877](https://github.com/go-gitea/gitea/pull/28877)) ([#28882](https://github.com/go-gitea/gitea/pull/28882))
  * Update go dependencies and fix go-git ([#28893](https://github.com/go-gitea/gitea/pull/28893)) ([#28934](https://github.com/go-gitea/gitea/pull/28934))
* BUGFIXES
  * Revert "Speed up loading the dashboard on mysql/mariadb ([#28546](https://github.com/go-gitea/gitea/pull/28546))" ([#29006](https://github.com/go-gitea/gitea/pull/29006)) ([#29007](https://github.com/go-gitea/gitea/pull/29007))
  * Fix an actions schedule bug ([#28942](https://github.com/go-gitea/gitea/pull/28942)) ([#28999](https://github.com/go-gitea/gitea/pull/28999))
  * Fix update enable_prune even if mirror_interval is not provided ([#28905](https://github.com/go-gitea/gitea/pull/28905)) ([#28929](https://github.com/go-gitea/gitea/pull/28929))
  * Fix uploaded artifacts should be overwritten ([#28726](https://github.com/go-gitea/gitea/pull/28726)) backport v1.21 ([#28832](https://github.com/go-gitea/gitea/pull/28832))
  * Preserve BOM in web editor ([#28935](https://github.com/go-gitea/gitea/pull/28935)) ([#28959](https://github.com/go-gitea/gitea/pull/28959))
  * Strip `/` from relative links ([#28932](https://github.com/go-gitea/gitea/pull/28932)) ([#28952](https://github.com/go-gitea/gitea/pull/28952))
  * Don't remove all mirror repository's releases when mirroring ([#28817](https://github.com/go-gitea/gitea/pull/28817)) ([#28939](https://github.com/go-gitea/gitea/pull/28939))
  * Implement `MigrateRepository` for the actions notifier ([#28920](https://github.com/go-gitea/gitea/pull/28920)) ([#28923](https://github.com/go-gitea/gitea/pull/28923))
  * Respect branch info for relative links ([#28909](https://github.com/go-gitea/gitea/pull/28909)) ([#28922](https://github.com/go-gitea/gitea/pull/28922))
  * Don't reload timeline page when (un)resolving or replying conversation ([#28654](https://github.com/go-gitea/gitea/pull/28654)) ([#28917](https://github.com/go-gitea/gitea/pull/28917))
  * Only migrate the first 255 chars of a Github issue title ([#28902](https://github.com/go-gitea/gitea/pull/28902)) ([#28912](https://github.com/go-gitea/gitea/pull/28912))
  * Fix sort bug on repository issues list ([#28897](https://github.com/go-gitea/gitea/pull/28897)) ([#28901](https://github.com/go-gitea/gitea/pull/28901))
  * Fix `DeleteCollaboration` transaction behaviour ([#28886](https://github.com/go-gitea/gitea/pull/28886)) ([#28889](https://github.com/go-gitea/gitea/pull/28889))
  * Fix schedule not trigger bug because matching full ref name with short ref name ([#28874](https://github.com/go-gitea/gitea/pull/28874)) ([#28888](https://github.com/go-gitea/gitea/pull/28888))
  * Fix migrate storage bug ([#28830](https://github.com/go-gitea/gitea/pull/28830)) ([#28867](https://github.com/go-gitea/gitea/pull/28867))
  * Fix archive creating LFS hooks and breaking pull requests ([#28848](https://github.com/go-gitea/gitea/pull/28848)) ([#28851](https://github.com/go-gitea/gitea/pull/28851))
  * Fix reverting a merge commit failing ([#28794](https://github.com/go-gitea/gitea/pull/28794)) ([#28825](https://github.com/go-gitea/gitea/pull/28825))
  * Upgrade xorm to v1.3.7 to fix a resource leak problem caused by Iterate ([#28891](https://github.com/go-gitea/gitea/pull/28891)) ([#28895](https://github.com/go-gitea/gitea/pull/28895))
  * Fix incorrect PostgreSQL connection string for Unix sockets ([#28865](https://github.com/go-gitea/gitea/pull/28865)) ([#28870](https://github.com/go-gitea/gitea/pull/28870))
* ENHANCEMENTS
  * Make loading animation less aggressive ([#28955](https://github.com/go-gitea/gitea/pull/28955)) ([#28956](https://github.com/go-gitea/gitea/pull/28956))
  * Avoid duplicate JS error messages on UI ([#28873](https://github.com/go-gitea/gitea/pull/28873)) ([#28881](https://github.com/go-gitea/gitea/pull/28881))
  * Bump `@github/relative-time-element` to 4.3.1 ([#28819](https://github.com/go-gitea/gitea/pull/28819)) ([#28826](https://github.com/go-gitea/gitea/pull/28826))
* MISC
  * Warn that `DISABLE_QUERY_AUTH_TOKEN` is false only if it's explicitly defined ([#28783](https://github.com/go-gitea/gitea/pull/28783)) ([#28868](https://github.com/go-gitea/gitea/pull/28868))
  * Remove duplicated checkinit on git module ([#28824](https://github.com/go-gitea/gitea/pull/28824)) ([#28831](https://github.com/go-gitea/gitea/pull/28831))

## Contributors for 1.21.5

* [@6543](https://github.com/6543)
* [@AdamMajer](https://github.com/AdamMajer)
* [@Anthony-Jhoiro](https://github.com/Anthony-Jhoiro)
* [@brechtvl](https://github.com/brechtvl)
* [@fuxiaohei](https://github.com/fuxiaohei)
* [@JakobDev](https://github.com/JakobDev)
* [@jpraet](https://github.com/jpraet)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@lunny](https://github.com/lunny)
* [@me-heer](https://github.com/me-heer)
* [@sdvcrx](https://github.com/sdvcrx)
* [@silverwind](https://github.com/silverwind)
* [@yardenshoham](https://github.com/yardenshoham)
* [@Zettat123](https://github.com/Zettat123)
