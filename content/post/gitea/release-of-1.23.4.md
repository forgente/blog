---
date: 2025-02-19T11:06:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.23.4 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.23.4
---

We are proud to present the release of **Gitea version 1.23.4**.

This update addresses three critical security issues, so we strongly recommend all users upgrade as soon as possible.

We have merged [17](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.23.4+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

Gitea's routers for action variables and runners were not properly restricted, allowing users without the necessary permissions to operate other users' runners and access their variables. Thanks @wolfogre for the fix!

For organization-level projects, private repository issues may be included, but some team members might not have the required permissions to access them. #33619 resolves this issue by ensuring that inaccessible issues are now hidden from the project's issue list. Thanks @lunny for the fix.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.23.4/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.23.4](https://github.com/go-gitea/gitea/releases/tag/v1.23.4) - 2025-02-19

* SECURITY
  * Enhance routers for the Actions variable operations (#33547) (#33553)
  * Enhance routers for the Actions runner operations (#33549) (#33555)
  * Fix project issues list and counting (#33594) #33619
* PERFORMANCES
  * Performance optimization for pull request files loading comments attachments (#33585) (#33592)
* BUGFIXES
  * Add a transaction to `pickTask` (#33543) (#33563)
  * Fix mirror bug (#33597) (#33607)
  * Use default Git timeout when checking repo health (#33593) (#33598)
  * Fix PR's target branch dropdown (#33589) (#33591)
  * Fix various problems (artifact order, api empty slice, assignee check, fuzzy prompt, mirror proxy, adopt git) (#33569) (#33577)
  * Rework suggestion backend (#33538) (#33546)
  * Fix context usage (#33554) (#33557)
  * Only show the latest version in the Arch index (#33262) (#33580)
  * Skip deletion error for action artifacts (#33476) (#33568)
  * Make actions URL in commit status webhooks absolute (#33620) #33632
  * Add missing locale (#33641) #33642

## Contributors

* [@ericLemanissier](https://github.com/ericLemanissier)
* [@ExplodingDragon](https://github.com/ExplodingDragon)
* [@lunny](https://github.com/lunny)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@Zettat123](https://github.com/Zettat123)
