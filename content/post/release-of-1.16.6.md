---
date: "2022-04-21T02:40:29+07:00"
author: "6543"
title: "Gitea 1.16.6 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.16.6.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [31](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.16.6+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.16.6/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.16.6](https://github.com/go-gitea/gitea/releases/tag/v1.16.6) - 2022-04-21

<!-- Changelog Details -->

* ENHANCEMENTS
  * Only request write when necessary ([#18657](https://github.com/go-gitea/gitea/pull/18657)) ([#19422](https://github.com/go-gitea/gitea/pull/19422))
  * Disable service worker by default ([#18914](https://github.com/go-gitea/gitea/pull/18914)) ([#19342](https://github.com/go-gitea/gitea/pull/19342))
* BUGFIXES
  * When dumping trim the standard suffices instead of a random suffix ([#19440](https://github.com/go-gitea/gitea/pull/19440)) ([#19447](https://github.com/go-gitea/gitea/pull/19447))
  * Fix DELETE request for non-existent public key ([#19443](https://github.com/go-gitea/gitea/pull/19443)) ([#19444](https://github.com/go-gitea/gitea/pull/19444))
  * Don't panic on ErrEmailInvalid ([#19441](https://github.com/go-gitea/gitea/pull/19441)) ([#19442](https://github.com/go-gitea/gitea/pull/19442))
  * Add uploadpack.allowAnySHA1InWant to allow --filter=blob:none with older git clients ([#19430](https://github.com/go-gitea/gitea/pull/19430)) ([#19438](https://github.com/go-gitea/gitea/pull/19438))
  * Warn on SSH connection for incorrect configuration ([#19317](https://github.com/go-gitea/gitea/pull/19317)) ([#19437](https://github.com/go-gitea/gitea/pull/19437))
  * Search Issues via API, dont show 500 if filter result in empty list ([#19244](https://github.com/go-gitea/gitea/pull/19244)) ([#19436](https://github.com/go-gitea/gitea/pull/19436))
  * When updating mirror repo intervals by API reschedule next update too ([#19429](https://github.com/go-gitea/gitea/pull/19429)) ([#19433](https://github.com/go-gitea/gitea/pull/19433))
  * Fix nil error when some pages are rendered outside request context ([#19427](https://github.com/go-gitea/gitea/pull/19427)) ([#19428](https://github.com/go-gitea/gitea/pull/19428))
  * Fix double blob-hunk on diff page ([#19404](https://github.com/go-gitea/gitea/pull/19404)) ([#19405](https://github.com/go-gitea/gitea/pull/19405))
  * Don't allow merging PR's which are being conflict checked ([#19357](https://github.com/go-gitea/gitea/pull/19357)) ([#19358](https://github.com/go-gitea/gitea/pull/19358))
  * Fix middleware function's placements ([#19377](https://github.com/go-gitea/gitea/pull/19377)) ([#19378](https://github.com/go-gitea/gitea/pull/19378))
  * Fix invalid CSRF token bug, make sure CSRF tokens can be up-to-date ([#19338](https://github.com/go-gitea/gitea/pull/19338))
  * Restore user autoregistration with email addresses ([#19261](https://github.com/go-gitea/gitea/pull/19261)) ([#19312](https://github.com/go-gitea/gitea/pull/19312))
  * Move checks for pulls before merge into own function ([#19271](https://github.com/go-gitea/gitea/pull/19271)) ([#19277](https://github.com/go-gitea/gitea/pull/19277))
  * Granular webhook events in editHook ([#19251](https://github.com/go-gitea/gitea/pull/19251)) ([#19257](https://github.com/go-gitea/gitea/pull/19257))
  * Only send webhook events to active system webhooks and only deliver to active hooks ([#19234](https://github.com/go-gitea/gitea/pull/19234)) ([#19248](https://github.com/go-gitea/gitea/pull/19248))
  * Use full output of git show-ref --tags to get tags for PushUpdateAddTag ([#19235](https://github.com/go-gitea/gitea/pull/19235)) ([#19236](https://github.com/go-gitea/gitea/pull/19236))
  * Touch mirrors on even on fail to update ([#19217](https://github.com/go-gitea/gitea/pull/19217)) ([#19233](https://github.com/go-gitea/gitea/pull/19233))
  * Hide sensitive content on admin panel progress monitor (#19218 & [#19226](https://github.com/go-gitea/gitea/pull/19226)) ([#19231](https://github.com/go-gitea/gitea/pull/19231))
  * Fix clone url JS error for the empty repo page ([#19209](https://github.com/go-gitea/gitea/pull/19209))
  * Bump goldmark to v1.4.11 ([#19201](https://github.com/go-gitea/gitea/pull/19201)) ([#19203](https://github.com/go-gitea/gitea/pull/19203))
* TESTING
  * Prevent intermittent failures in RepoIndexerTest (#19225 [#19229](https://github.com/go-gitea/gitea/pull/19229)) ([#19228](https://github.com/go-gitea/gitea/pull/19228))
* BUILD
  * Revert the minimal golang version requirement from 1.17 to 1.16 and add a warning in Makefile ([#19319](https://github.com/go-gitea/gitea/pull/19319))
* MISC
  * Performance improvement for add team user when org has more than 1000 repositories ([#19227](https://github.com/go-gitea/gitea/pull/19227)) ([#19289](https://github.com/go-gitea/gitea/pull/19289))
  * Check go and nodejs version by go.mod and package.json ([#19197](https://github.com/go-gitea/gitea/pull/19197)) ([#19254](https://github.com/go-gitea/gitea/pull/19254))
