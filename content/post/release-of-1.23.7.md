---
date: 2025-04-07T21:29:00-8:00
authors: 
  - "lunny"
title: "Gitea 1.23.7 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.23.7
---

We are proud to present the release of **Gitea version 1.23.7**.

This update fixed some bugs with a new Golang upgrade, so we strongly recommend all users upgrade as soon as possible.

We have merged [22](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.23.7+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

This release addresses the following security vulnerabilities:

- CVE-2025-22871 in Golang net/http: reject bare LF in chunked encoding

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.23.7/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.23.7](https://github.com/go-gitea/gitea/releases/tag/v1.23.7) - 2025-04-07

* SECURITY
  * Compile with Go 1.23.8
* Enhancements
  * Add a config option to block "expensive" pages for anonymous users ([#34024](https://github.com/go-gitea/gitea/pull/34024)) ([#34071](https://github.com/go-gitea/gitea/pull/34071))
  * Also check default ssh-cert location for host ([#34099](https://github.com/go-gitea/gitea/pull/34099)) ([#34100](https://github.com/go-gitea/gitea/pull/34100)) ([#34116](https://github.com/go-gitea/gitea/pull/34116))
* BUGFIXES
  * Fix discord webhook 400 status code when description limit is exceeded ([#34084](https://github.com/go-gitea/gitea/pull/34084)) ([#34124](https://github.com/go-gitea/gitea/pull/34124))
  * Get changed files based on merge base when checking `pull_request` actions trigger ([#34106](https://github.com/go-gitea/gitea/pull/34106)) ([#34120](https://github.com/go-gitea/gitea/pull/34120))
  * Fix invalid version in RPM package path ([#34112](https://github.com/go-gitea/gitea/pull/34112)) ([#34115](https://github.com/go-gitea/gitea/pull/34115))
  * Return default avatar url when user id is zero rather than updating database ([#34094](https://github.com/go-gitea/gitea/pull/34094)) ([#34095](https://github.com/go-gitea/gitea/pull/34095))
  * Add additional ReplaceAll in pathsep to cater for different pathsep ([#34061](https://github.com/go-gitea/gitea/pull/34061)) ([#34070](https://github.com/go-gitea/gitea/pull/34070))
  * Try to fix check-attr bug ([#34029](https://github.com/go-gitea/gitea/pull/34029)) ([#34033](https://github.com/go-gitea/gitea/pull/34033))
  * Git client will follow 301 but 307 ([#34005](https://github.com/go-gitea/gitea/pull/34005)) ([#34010](https://github.com/go-gitea/gitea/pull/34010))
  * Fix block expensive for 1.23 ([#34127](https://github.com/go-gitea/gitea/pull/34127))
  * Fix markdown frontmatter rendering ([#34102](https://github.com/go-gitea/gitea/pull/34102)) ([#34107](https://github.com/go-gitea/gitea/pull/34107))
  * Add new CLI flags to set name and scopes when creating a user with access token ([#34080](https://github.com/go-gitea/gitea/pull/34080)) ([#34103](https://github.com/go-gitea/gitea/pull/34103))
  * Do not show 500 error when default branch doesn't exist ([#34096](https://github.com/go-gitea/gitea/pull/34096)) ([#34097](https://github.com/go-gitea/gitea/pull/34097))
  * Hide activity contributors, recent commits and code frequrency left tabs if there is no code permission ([#34053](https://github.com/go-gitea/gitea/pull/34053)) ([#34065](https://github.com/go-gitea/gitea/pull/34065))
  * Simplify emoji rendering ([#34048](https://github.com/go-gitea/gitea/pull/34048)) ([#34049](https://github.com/go-gitea/gitea/pull/34049))
  * Adjust the layout of the toolbar on the Issues/Projects page ([#33667](https://github.com/go-gitea/gitea/pull/33667)) ([#34047](https://github.com/go-gitea/gitea/pull/34047))
  * Pull request updates will also trigger code owners review requests ([#33744](https://github.com/go-gitea/gitea/pull/33744)) ([#34045](https://github.com/go-gitea/gitea/pull/34045))
  * Fix org repo creation being limited by user limits ([#34030](https://github.com/go-gitea/gitea/pull/34030)) ([#34044](https://github.com/go-gitea/gitea/pull/34044))
  * Fix git client accessing renamed repo ([#34034](https://github.com/go-gitea/gitea/pull/34034)) ([#34043](https://github.com/go-gitea/gitea/pull/34043))
  * Fix the issue with error message logging for the `check-attr` command on Windows OS. ([#34035](https://github.com/go-gitea/gitea/pull/34035)) ([#34036](https://github.com/go-gitea/gitea/pull/34036))
  * Polyfill WeakRef ([#34025](https://github.com/go-gitea/gitea/pull/34025)) ([#34028](https://github.com/go-gitea/gitea/pull/34028))

## Contributors

* [@charles7668](https://github.com/charles7668)
* [@eeyrjmr](https://github.com/eeyrjmr)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@lunny](https://github.com/lunny)
* [@ManInDark](https://github.com/ManInDark)
* [@Mopcho](https://github.com/Mopcho)
* [@silverwind](https://github.com/silverwind)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@Zetta123](https://github.com/Zetta123)
