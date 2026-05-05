---
date: 2025-02-05T11:31:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.23.2 & 1.23.3 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.23.3
---

We are proud to present the release of **Gitea version 1.23.2 & 1.23.3**.

We highly encourage users to update to this version for many bug-fixes.

We have merged [38](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.23.2+is%3Amerged) pull requests to release this version. After that, we fixed two urgent bugs in [v1.23.3](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.23.3+is%3Amerged).

<!-- Security Thanks! -->

This release build with latest Golang v1.23.6 to fix important security updates. This is CVE-2025-22866 and Go issue [https://go.dev/issue/71383](https://go.dev/issue/71383).

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.23.3/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.23.3](https://github.com/go-gitea/gitea/releases/tag/v1.23.2) - 2025-02-05

* Security
  * Build Gitea with Golang v1.23.6 to fix security bugs
* BUGFIXES
  * Fix a bug caused by status webhook template #33512

## [1.23.2](https://github.com/go-gitea/gitea/releases/tag/v1.23.2) - 2025-02-04

* BREAKING
  * Add tests for webhook and fix some webhook bugs (#33396) (#33442)
    * Package webhook’s Organization was incorrectly used as the User struct. This PR fixes the issue.
    * This changelog is just a hint. The change is not really breaking because most fields are the same, most users are not affected.
* ENHANCEMENTS
  * Clone button enhancements (#33362) (#33404)
  * Repo homepage styling tweaks (#33289) (#33381)
  * Add a confirm dialog for "sync fork" (#33270) (#33273)
  * Make tracked time representation display as hours (#33315) (#33334)
  * Improve sync fork behavior (#33319) (#33332)
* BUGFIXES
  * Fix code button alignment (#33345) (#33351)
  * Correct bot label `vertical-align` (#33477) (#33480)
  * Fix SSH LFS memory usage (#33455) (#33460)
  * Fix issue sidebar dropdown keyboard support (#33447) (#33450)
  * Fix user avatar (#33439)
  * Fix `GetCommitBranchStart` bug (#33298) (#33421)
  * Add pubdate for repository rss and add some tests (#33411) (#33416)
  * Add missed auto merge feed message on dashboard (#33309) (#33405)
  * Fix issue suggestion bug (#33389) (#33391)
  * Make issue suggestion work for all editors (#33340) (#33342)
  * Fix issue count (#33338) (#33341)
  * Fix Account linking page (#33325) (#33327)
  * Fix closed dependency title (#33285) (#33287)
  * Fix sidebar milestone link (#33269) (#33272)
  * Fix missing license when sync mirror (#33255) (#33258)
  * Fix upload file form (#33230) (#33233)
  * Fix mirror bug (#33224) (#33225)
  * Fix system admin cannot fork or get private fork with API (#33401) (#33417)
  * Fix push message behavior (#33215) (#33317)
  * Trivial fixes (#33304) (#33312)
  * Fix "stop time tracking button" on navbar (#33084) (#33300)
  * Fix tag route and empty repo (#33253)
  * Fix cache test triggered by non memory cache (#33220) (#33221)
  * Revert empty lfs ref name (#33454) (#33457)
  * Fix flex width (#33414) (#33418)
  * Fix commit status events (#33320) #33493
  * Fix unnecessary comment when moving issue on the same project column (#33496) #33499
  * Add timetzdata build tag to binary releases (#33463) #33503
* MISC
  * Use ProtonMail/go-crypto to replace keybase/go-crypto (#33402) (#33410)
  * Update katex to latest version (#33361)
  * Update go tool dependencies (#32916) (#33355)

## Contributors

* [@CrimsonEdgeHope](https://github.com/CrimsonEdgeHope)
* [@lunny](https://github.com/lunny)
* [@silverwind](https://github.com/silverwind)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@typed-sigterm](https://github.com/typed-sigterm)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)
