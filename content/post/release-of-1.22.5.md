---
date: 2024-12-11T13:07:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.22.5 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.22.5
---

We are excited to announce the release of **Gitea version 1.22.5**.

This update addresses two critical security issues, so we strongly recommend all users upgrade as soon as possible.

To deliver this release, we have successfully merged [13 pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.22.5+is%3Amerged).

<!-- Security Thanks! -->

Gitea was significantly impacted by the recently disclosed vulnerability in the Golang crypto library, identified as CVE-2024-45337. The announcement and details of the issue can be found in the [Golang Announce group](https://groups.google.com/g/golang-announce/c/ZA1tNV10Mcs).

We extend our gratitude to the Golang team for addressing this critical security flaw, which has been resolved in Gitea through [PR #32791](https://github.com/go-gitea/gitea/pull/32791).

Additionally, another important security issue was identified and resolved: branch deletion permissions were not adequately enforced after merging a pull request. This vulnerability has been patched in [PR #32654](https://github.com/go-gitea/gitea/pull/32654).

A special thanks to [@lunny](https://github.com/lunny) for their prompt efforts in addressing these issues and ensuring the security of Gitea users.

## How to Update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.22.5/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.22.5](https://github.com/go-gitea/gitea/releases/tag/v1.22.5) - 2024-12-11

* SECURITY
  * Upgrade crypto library ([#32791](https://github.com/go-gitea/gitea/pull/32791))
  * Fix delete branch perm checking ([#32654](https://github.com/go-gitea/gitea/pull/32654)) ([#32707](https://github.com/go-gitea/gitea/pull/32707))
* BUGFIXES
  * Add standard-compliant route to serve outdated R packages ([#32783](https://github.com/go-gitea/gitea/pull/32783)) ([#32789](https://github.com/go-gitea/gitea/pull/32789))
  * Fix internal server error when updating labels without write permission ([#32776](https://github.com/go-gitea/gitea/pull/32776)) ([#32785](https://github.com/go-gitea/gitea/pull/32785))
  * Add Swift login endpoint ([#32693](https://github.com/go-gitea/gitea/pull/32693)) ([#32701](https://github.com/go-gitea/gitea/pull/32701))
  * Fix fork page branch selection ([#32711](https://github.com/go-gitea/gitea/pull/32711)) ([#32725](https://github.com/go-gitea/gitea/pull/32725))
  * Fix word overflow in file search page ([#32695](https://github.com/go-gitea/gitea/pull/32695)) ([#32699](https://github.com/go-gitea/gitea/pull/32699))
  * Fix gogit `GetRefCommitID` ([#32705](https://github.com/go-gitea/gitea/pull/32705)) ([#32712](https://github.com/go-gitea/gitea/pull/32712))
  * Fix race condition in mermaid observer ([#32599](https://github.com/go-gitea/gitea/pull/32599)) ([#32673](https://github.com/go-gitea/gitea/pull/32673))
  * Fixe a keystring misuse and refactor duplicates keystrings ([#32668](https://github.com/go-gitea/gitea/pull/32668)) ([#32792](https://github.com/go-gitea/gitea/pull/32792))
  * Bump relative-time-element to v4.4.4 ([#32739](https://github.com/go-gitea/gitea/pull/32739))
* PERFORMANCE
  * Make wiki pages visit fast ([#32732](https://github.com/go-gitea/gitea/pull/32732)) ([#32745](https://github.com/go-gitea/gitea/pull/32745))
* MISC
  * Don't create action when syncing mirror pull refs ([#32659](https://github.com/go-gitea/gitea/pull/32659)) ([#32664](https://github.com/go-gitea/gitea/pull/32664))

## Contributors

* [@KN4CK3R](https://github.com/KN4CK3R)
* [@lunny](https://github.com/lunny)
* [@silverwind](https://github.com/silverwind)
* [@SimonPistache](https://github.com/SimonPistache)
* [@Sebastian-T-T](https://github.com/Sebastian-T-T)
* [@william-allspice](https://github.com/william-allspice)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)
