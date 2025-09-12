---
date: 2025-08-13T11:43:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.24.6 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.24.6
---

We are excited to announce the release of **Gitea version 1.24.6**!

This release includes [17 merged pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.24.6+is%3Amerged), thanks to the amazing contributions from our community.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.24.6/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.24.6](https://github.com/go-gitea/gitea/releases/tag/v1.24.6) - 2025-08-12

* SECURITY
  * Upgrade xz to v0.5.15 ([#35385](https://github.com/go-gitea/gitea/pull/35385))
* BUGFIXES
  * Fix a compare page 404 bug when the pull request disabled ([#35441](https://github.com/go-gitea/gitea/pull/35441)) ([#35453](https://github.com/go-gitea/gitea/pull/35453))
  * Fix bug when issue disabled, pull request number in the commit message cannot be redirected ([#35420](https://github.com/go-gitea/gitea/pull/35420)) ([#35442](https://github.com/go-gitea/gitea/pull/35442))
  * Add author.name field to Swift Package Registry API response ([#35410](https://github.com/go-gitea/gitea/pull/35410)) ([#35431](https://github.com/go-gitea/gitea/pull/35431))
  * Remove usernames when empty in discord webhook ([#35412](https://github.com/go-gitea/gitea/pull/35412)) ([#35417](https://github.com/go-gitea/gitea/pull/35417))
  * Allow foreachref parser to grow its buffer ([#35365](https://github.com/go-gitea/gitea/pull/35365)) ([#35376](https://github.com/go-gitea/gitea/pull/35376))
  * Allow deleting comment with content via API like web did ([#35346](https://github.com/go-gitea/gitea/pull/35346)) ([#35354](https://github.com/go-gitea/gitea/pull/35354))
  * Fix atom/rss mixed error ([#35345](https://github.com/go-gitea/gitea/pull/35345)) ([#35347](https://github.com/go-gitea/gitea/pull/35347))
  * Fix review request webhook bug ([#35339](https://github.com/go-gitea/gitea/pull/35339))
  * Remove duplicate html IDs ([#35210](https://github.com/go-gitea/gitea/pull/35210)) ([#35325](https://github.com/go-gitea/gitea/pull/35325))
  * Fix LFS range size header response ([#35277](https://github.com/go-gitea/gitea/pull/35277)) ([#35293](https://github.com/go-gitea/gitea/pull/35293))
  * Fix GitHub release assets URL validation ([#35287](https://github.com/go-gitea/gitea/pull/35287)) ([#35290](https://github.com/go-gitea/gitea/pull/35290))
  * Fix token lifetime, closes #35230 ([#35271](https://github.com/go-gitea/gitea/pull/35271)) ([#35281](https://github.com/go-gitea/gitea/pull/35281))
  * Fix push commits comments when changing the pull request target branch ([#35386](https://github.com/go-gitea/gitea/pull/35386)) ([#35443](https://github.com/go-gitea/gitea/pull/35443))

## Contributors

* [@ahanoff](https://github.com/ahanoff)
* [@alexblackie](https://github.com/alexblackie)
* [@LePau](https://github.com/LePau)
* [@lunny](https://github.com/lunny)
* [@meyfa-lawo](https://github.com/meyfa-lawo)
* [@silverwind](https://github.com/silverwind)
* [@TimB87](https://github.com/TimB87)
* [@ulnanlu](https://github.com/ulnanlu)
