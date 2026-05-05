---
date: 2025-05-13T09:52:00-8:00
authors: 
  - "lunny"
title: "Gitea 1.23.8 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.23.8
image: /img/logo.svg
---

We are pleased to announce the release of **Gitea version 1.23.8**.

This update includes critical bug fixes and a Go version upgrade that addresses multiple security vulnerabilities. We strongly recommend all users upgrade as soon as possible to benefit from these important improvements.

A total of [23 pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.23.8+is%3Amerged) were merged in this release.

## Notable Changes

- riscv64 Support: Official Linux binaries and Docker images for riscv64 will now be provided starting with this version. Special thanks to [@mengzhuo](https://github.com/mengzhuo) for the contribution.

- New Docker Registry: Docker images will now also be published to GitHub Container Registry (GHCR). You can find the new official docker image from this blog https://blog.gitea.com/docker-registry-update/ . Thanks to [@a1994sc](https://github.com/a1994sc) for this enhancement.

## Security Fixes

This release addresses the following vulnerabilities:

- Fixed a bug when uploading files via the LFS SSH command (affects 1.23) - [#34408](https://github.com/go-gitea/gitea/pull/34408)

- Resolved CVE-2025-22873 in the Go os package, which previously allowed improper access to parent directories under certain conditions

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.23.8/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.23.8](https://github.com/go-gitea/gitea/releases/tag/v1.23.8) - 2025-05-11

* SECURITY
  * Fix a bug when uploading file via lfs ssh command ([#34408](https://github.com/go-gitea/gitea/pull/34408)) ([#34411](https://github.com/go-gitea/gitea/pull/34411))
  * Update net package ([#34228](https://github.com/go-gitea/gitea/pull/34228)) ([#34232](https://github.com/go-gitea/gitea/pull/34232))
* BUGFIXES
  * Fix releases sidebar navigation link ([#34436](https://github.com/go-gitea/gitea/pull/34436)) #34439
  * Fix bug webhook milestone is not right. ([#34419](https://github.com/go-gitea/gitea/pull/34419)) #34429
  * Fix two missed null value checks on the wiki page. ([#34205](https://github.com/go-gitea/gitea/pull/34205)) ([#34215](https://github.com/go-gitea/gitea/pull/34215))
  * Swift files can be passed either as file or as form value ([#34068](https://github.com/go-gitea/gitea/pull/34068)) ([#34236](https://github.com/go-gitea/gitea/pull/34236))
  * Fix bug when API get pull changed files for deleted head repository ([#34333](https://github.com/go-gitea/gitea/pull/34333)) ([#34368](https://github.com/go-gitea/gitea/pull/34368))
  * Upgrade github v61 -> v71 to fix migrating bug ([#34389](https://github.com/go-gitea/gitea/pull/34389))
  * Fix bug when visiting comparation page ([#34334](https://github.com/go-gitea/gitea/pull/34334)) ([#34364](https://github.com/go-gitea/gitea/pull/34364))
  * Fix wrong review requests when updating the pull request ([#34286](https://github.com/go-gitea/gitea/pull/34286)) ([#34304](https://github.com/go-gitea/gitea/pull/34304))
  * Fix github migration error when using multiple tokens ([#34144](https://github.com/go-gitea/gitea/pull/34144)) ([#34302](https://github.com/go-gitea/gitea/pull/34302))
  * Explicitly not update indexes when sync database schemas ([#34281](https://github.com/go-gitea/gitea/pull/34281)) ([#34295](https://github.com/go-gitea/gitea/pull/34295))
  * Fix panic when comment is nil ([#34257](https://github.com/go-gitea/gitea/pull/34257)) ([#34277](https://github.com/go-gitea/gitea/pull/34277))
  * Fix project board links to related Pull Requests ([#34213](https://github.com/go-gitea/gitea/pull/34213)) ([#34222](https://github.com/go-gitea/gitea/pull/34222))
  * Don't assume the default wiki branch is master in the wiki API ([#34244](https://github.com/go-gitea/gitea/pull/34244)) ([#34245](https://github.com/go-gitea/gitea/pull/34245))
* DOCUMENTATION
  * Update token creation API swagger documentation ([#34288](https://github.com/go-gitea/gitea/pull/34288)) ([#34296](https://github.com/go-gitea/gitea/pull/34296))
* MISC
  * Fix CI Build ([#34315](https://github.com/go-gitea/gitea/pull/34315))
  * Add riscv64 support ([#34199](https://github.com/go-gitea/gitea/pull/34199)) ([#34204](https://github.com/go-gitea/gitea/pull/34204))
  * Bump go version in go.mod ([#34160](https://github.com/go-gitea/gitea/pull/34160))
  * remove hardcoded 'code' string in clone_panel.tmpl ([#34153](https://github.com/go-gitea/gitea/pull/34153)) ([#34158](https://github.com/go-gitea/gitea/pull/34158))

## Contributors

* [@a1994sc](https://github.com/a1994sc)
* [@badhezi](https://github.com/badhezi)
* [@kemzeb](https://github.com/kemzeb)
* [@kerwin612](https://github.com/kerwin612)
* [@lunny](https://github.com/lunny)
* [@ManInDark](https://github.com/ManInDark)
* [@mengzhuo](https://github.com/mengzhuo)
* [@NorthRealm](https://github.com/NorthRealm)
* [@silverwind](https://github.com/silverwind)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@wkelly17](https://github.com/wkelly17)
* [@wgr1984](https://github.com/wgr1984)
* [@wxiaoguang](https://github.com/wxiaoguang)
