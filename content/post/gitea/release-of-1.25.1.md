---
date: 2025-11-04T10:24:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.25.1 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.25.1
---

We are excited to announce the release of **Gitea 1.25.1**! We strongly recommend all users upgrade to this version, as it includes important fixes that address several significant issues introduced in 1.25.0 and improves overall stability.

In particular, issue [#35832](https://github.com/go-gitea/gitea/issues/35832) has been resolved. A new doctor sub-command, introduced in [#35845](https://github.com/go-gitea/gitea/pull/35845), is now available to help automatically repair affected environments.

This release includes [15 merged pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.25.1+is%3Amerged), thanks to the amazing contributions from our community.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.25.1/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.25.1](https://github.com/go-gitea/gitea/releases/tag/v1.25.1) - 2025-11-04

* BUGFIXES
  * Make ACME email optional ([#35849](https://github.com/go-gitea/gitea/pull/35849)) #35857
  * Add a doctor command to fix inconsistent run status ([#35840](https://github.com/go-gitea/gitea/pull/35840)) ([#35845](https://github.com/go-gitea/gitea/pull/35845))
  * Remove wrong code ([#35846](https://github.com/go-gitea/gitea/pull/35846))
  * Fix viewed files number is not right if not all files loaded ([#35821](https://github.com/go-gitea/gitea/pull/35821)) ([#35844](https://github.com/go-gitea/gitea/pull/35844))
  * Fix incorrect pull request counter ([#35819](https://github.com/go-gitea/gitea/pull/35819)) ([#35841](https://github.com/go-gitea/gitea/pull/35841))
  * Upgrade go mail to 0.7.2 and fix the bug ([#35833](https://github.com/go-gitea/gitea/pull/35833)) ([#35837](https://github.com/go-gitea/gitea/pull/35837))
  * Revert gomail to v0.7.0 to fix sending mail failed ([#35816](https://github.com/go-gitea/gitea/pull/35816)) ([#35824](https://github.com/go-gitea/gitea/pull/35824))
  * Fix clone mixed bug ([#35810](https://github.com/go-gitea/gitea/pull/35810)) ([#35822](https://github.com/go-gitea/gitea/pull/35822))
  * Fix cli "Before" handling ([#35797](https://github.com/go-gitea/gitea/pull/35797)) ([#35808](https://github.com/go-gitea/gitea/pull/35808))
  * Improve and fix markup code preview rendering ([#35777](https://github.com/go-gitea/gitea/pull/35777)) ([#35787](https://github.com/go-gitea/gitea/pull/35787))
  * Fix actions rerun bug ([#35783](https://github.com/go-gitea/gitea/pull/35783)) ([#35784](https://github.com/go-gitea/gitea/pull/35784))
  * Fix actions schedule update issue ([#35767](https://github.com/go-gitea/gitea/pull/35767)) ([#35774](https://github.com/go-gitea/gitea/pull/35774))
  * Fix circular spin animation direction ([#35785](https://github.com/go-gitea/gitea/pull/35785)) ([#35823](https://github.com/go-gitea/gitea/pull/35823))
  * Fix file extension on gogs.png ([#35793](https://github.com/go-gitea/gitea/pull/35793)) ([#35799](https://github.com/go-gitea/gitea/pull/35799))
  * Add pnpm to Snapcraft ([#35778](https://github.com/go-gitea/gitea/pull/35778))

## Contributors

* [@lunny](https://github.com/lunny)
* [@lutinglt](https://github.com/lutinglt)
* [@silverwind](https://github.com/silverwind)
* [@techknowlogick](https://github.com/techknowlogick)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@Zettat123](https://github.com/Zettat123)
