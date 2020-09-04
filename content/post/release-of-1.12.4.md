---
date: "2020-09-4T04:00:00+00:00"
author: "6543"
title: "Gitea 1.12.4 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.12.4.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [24](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.12.4+is%3Amerged+) pull requests to release this version.

We would like to give a special thanks to Jeffrey C. Ollie ([@jcollie](https://github.com/jcollie)), Osama Hamad ([@osamahamad](https://github.com/osamahamad)) and [RedTeam Pentesting GmbH](https://www.redteam-pentesting.de/) for reporting security issues that have been patched in this release.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.12.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).



We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

<!--more-->

## Changelog

## [1.12.4](https://github.com/go-gitea/gitea/releases/tag/v1.12.4) - 2020-09-03

* SECURITY
  * Escape provider name in oauth2 provider redirect ([#12648](https://github.com/go-gitea/gitea/pull/12648)) ([#12650](https://github.com/go-gitea/gitea/pull/12650))
  * Escape Email on password reset page ([#12610](https://github.com/go-gitea/gitea/pull/12610)) ([#12612](https://github.com/go-gitea/gitea/pull/12612))
  * When reading expired sessions - expire them ([#12686](https://github.com/go-gitea/gitea/pull/12686)) ([#12690](https://github.com/go-gitea/gitea/pull/12690))
* ENHANCEMENTS
  * StaticRootPath configurable at compile time ([#12371](https://github.com/go-gitea/gitea/pull/12371)) ([#12652](https://github.com/go-gitea/gitea/pull/12652))
* BUGFIXES
  * Fix to show an issue that is related to a deleted issue ([#12651](https://github.com/go-gitea/gitea/pull/12651)) ([#12692](https://github.com/go-gitea/gitea/pull/12692))
  * Expire time acknowledged for cache ([#12605](https://github.com/go-gitea/gitea/pull/12605)) ([#12611](https://github.com/go-gitea/gitea/pull/12611))
  * Fix diff path unquoting ([#12554](https://github.com/go-gitea/gitea/pull/12554)) ([#12575](https://github.com/go-gitea/gitea/pull/12575))
  * Improve HTML escaping helper ([#12562](https://github.com/go-gitea/gitea/pull/12562))
  * models: break out of loop ([#12386](https://github.com/go-gitea/gitea/pull/12386)) ([#12561](https://github.com/go-gitea/gitea/pull/12561))
  * Default empty merger list to those with write permissions ([#12535](https://github.com/go-gitea/gitea/pull/12535)) ([#12560](https://github.com/go-gitea/gitea/pull/12560))
  * Skip SSPI authentication attempts for /api/internal ([#12556](https://github.com/go-gitea/gitea/pull/12556)) ([#12559](https://github.com/go-gitea/gitea/pull/12559))
  * Prevent NPE on commenting on lines with invalidated comments ([#12549](https://github.com/go-gitea/gitea/pull/12549)) ([#12550](https://github.com/go-gitea/gitea/pull/12550))
  * Remove hardcoded ES indexername ([#12521](https://github.com/go-gitea/gitea/pull/12521)) ([#12526](https://github.com/go-gitea/gitea/pull/12526))
  * Fix bug preventing transfer to private organization ([#12497](https://github.com/go-gitea/gitea/pull/12497)) ([#12501](https://github.com/go-gitea/gitea/pull/12501))
  * Keys should not verify revoked email addresses ([#12486](https://github.com/go-gitea/gitea/pull/12486)) ([#12495](https://github.com/go-gitea/gitea/pull/12495))
  * Do not add prefix on http/https submodule links ([#12477](https://github.com/go-gitea/gitea/pull/12477)) ([#12479](https://github.com/go-gitea/gitea/pull/12479))
  * Fix ignored login on compare ([#12476](https://github.com/go-gitea/gitea/pull/12476)) ([#12478](https://github.com/go-gitea/gitea/pull/12478))
  * Fix incorrect error logging in Stats indexer and OAuth2 ([#12387](https://github.com/go-gitea/gitea/pull/12387)) ([#12422](https://github.com/go-gitea/gitea/pull/12422))
  * Upgrade google/go-github to v32.1.0 ([#12361](https://github.com/go-gitea/gitea/pull/12361)) ([#12390](https://github.com/go-gitea/gitea/pull/12390))
  * Render emoji's of Commit message on feed-page ([#12373](https://github.com/go-gitea/gitea/pull/12373))
  * Fix handling of diff on unrelated branches when Git 2.28 used ([#12370](https://github.com/go-gitea/gitea/pull/12370))
