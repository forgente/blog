---
date: 2023-07-28T29:14:00+02:00
authors: 
  - "delvh"
  - "techknowlogick"
  - "jolheiser"
title: "Gitea 1.20.2 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.20.2
---

Gitea 1.20.2 is now released including [26](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.20.2+is%3Amerged) merged PRs.

You can download Gitea 1.20.2 for example from our [downloads page](https://dl.gitea.com/gitea/1.20.2/). Please read our [installation guide](https://docs.gitea.com/1.20/installation/install-from-binary) for more information on installation.
 
We recommend that you upgrade. However, the Golang team has already pre-announced a security patch which makes it likely that Gitea 1.20.3 will be released in the near future.

## Changelog

* ENHANCEMENTS
  * Calculate MAX_WORKERS default value by CPU number ([#26177](https://github.com/go-gitea/gitea/pull/26177)) ([#26183](https://github.com/go-gitea/gitea/pull/26183))
  * Display deprecated warning in admin panel pages as well as in the log file ([#26094](https://github.com/go-gitea/gitea/pull/26094)) ([#26154](https://github.com/go-gitea/gitea/pull/26154))
* BUGFIXES
  * Fix allowed user types setting problem ([#26200](https://github.com/go-gitea/gitea/pull/26200)) ([#26206](https://github.com/go-gitea/gitea/pull/26206)) 
  * Fix LFS object list style ([#26133](https://github.com/go-gitea/gitea/pull/26133)) ([#26147](https://github.com/go-gitea/gitea/pull/26147))
  * Fix handling of plenty Nuget package versions ([#26075](https://github.com/go-gitea/gitea/pull/26075)) ([#26173](https://github.com/go-gitea/gitea/pull/26173))
  * Fix UI regression of asciinema player ([#26159](https://github.com/go-gitea/gitea/pull/26159)) ([#26162](https://github.com/go-gitea/gitea/pull/26162))
  * Prevent primary key update on migration ([#26192](https://github.com/go-gitea/gitea/pull/26192)) ([#26199](https://github.com/go-gitea/gitea/pull/26199))
  * Fix bug when pushing to a pull request which enabled dismiss approval automatically ([#25882](https://github.com/go-gitea/gitea/pull/25882)) ([#26158](https://github.com/go-gitea/gitea/pull/26158))
  * Fix bugs in LFS meta garbage collection ([#26122](https://github.com/go-gitea/gitea/pull/26122)) ([#26157](https://github.com/go-gitea/gitea/pull/26157))
  * Update xorm version ([#26128](https://github.com/go-gitea/gitea/pull/26128)) ([#26150](https://github.com/go-gitea/gitea/pull/26150))
  * Remove "misc" scope check from public API endpoints ([#26134](https://github.com/go-gitea/gitea/pull/26134)) ([#26149](https://github.com/go-gitea/gitea/pull/26149))
  * Fix CLI allowing creation of access tokens with existing name ([#26071](https://github.com/go-gitea/gitea/pull/26071)) ([#26144](https://github.com/go-gitea/gitea/pull/26144))
  * Fix incorrect router logger ([#26137](https://github.com/go-gitea/gitea/pull/26137)) ([#26143](https://github.com/go-gitea/gitea/pull/26143))
  * Improve commit graph alignment and truncating ([#26112](https://github.com/go-gitea/gitea/pull/26112)) ([#26127](https://github.com/go-gitea/gitea/pull/26127))
  * Avoid writing config file if not installed ([#26107](https://github.com/go-gitea/gitea/pull/26107)) ([#26113](https://github.com/go-gitea/gitea/pull/26113))
  * Fix escape problems in the branch selector ([#25875](https://github.com/go-gitea/gitea/pull/25875)) ([#26103](https://github.com/go-gitea/gitea/pull/26103))
  * Fix handling of Debian files with trailing slash ([#26087](https://github.com/go-gitea/gitea/pull/26087)) ([#26098](https://github.com/go-gitea/gitea/pull/26098))
  * Fix Missing 404 swagger response docs for /admin/users/{username} ([#26086](https://github.com/go-gitea/gitea/pull/26086)) ([#26089](https://github.com/go-gitea/gitea/pull/26089))
  * Use stderr as fallback if the log file can't be opened ([#26074](https://github.com/go-gitea/gitea/pull/26074)) ([#26083](https://github.com/go-gitea/gitea/pull/26083))
  * Fix wrong workflow status when rerun a job in an already finished workflow ([#26119](https://github.com/go-gitea/gitea/pull/26119)) ([#26124](https://github.com/go-gitea/gitea/pull/26124))
  * Fix duplicated url prefix on issue context menu ([#26066](https://github.com/go-gitea/gitea/pull/26066)) ([#26067](https://github.com/go-gitea/gitea/pull/26067))

## Contributors to this release

* [@Lifeismana](https://github.com/Lifeismana)
* [@dusatvoj](https://github.com/dusatvoj)
* [@eeyrjmr](https://github.com/eeyrjmr)
* [@jolheiser](https://github.com/jolheiser)
* [@lunny](https://github.com/lunny)

