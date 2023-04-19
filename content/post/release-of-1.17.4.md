---
date: "2022-12-21T15:59:56+07:00"
author: "jolheiser"
title: "Gitea 1.17.4 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.17.4.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [51](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.17.4+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->
Thanks to [@KN4CK3R](https://gitea.com/KN4CK3R) for the security patches in this release!

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.17.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

:eyes: Keep an eye out for Gitea version 1.18.0, we are closing in on a release!

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.17.4](https://github.com/go-gitea/gitea/releases/tag/v1.17.4) - 2022-12-21

<!-- Changelog Details -->
* SECURITY
  * Do not allow Ghost access to limited visible user/org ([#21849](https://github.com/go-gitea/gitea/pull/21849)) ([#21875](https://github.com/go-gitea/gitea/pull/21875))
  * Fix package access for admins and inactive users ([#21580](https://github.com/go-gitea/gitea/pull/21580)) ([#21592](https://github.com/go-gitea/gitea/pull/21592))
* ENHANCEMENTS
  * Fix button in branch list, avoid unexpected page jump before restore branch actually done ([#21562](https://github.com/go-gitea/gitea/pull/21562)) ([#21927](https://github.com/go-gitea/gitea/pull/21927))
  * Fix vertical align of committer avatar rendered by email address ([#21884](https://github.com/go-gitea/gitea/pull/21884)) ([#21919](https://github.com/go-gitea/gitea/pull/21919))
  * Fix setting HTTP headers after write ([#21833](https://github.com/go-gitea/gitea/pull/21833)) ([#21874](https://github.com/go-gitea/gitea/pull/21874))
  * Ignore line anchor links with leading zeroes ([#21728](https://github.com/go-gitea/gitea/pull/21728)) ([#21777](https://github.com/go-gitea/gitea/pull/21777))
  * Enable Monaco automaticLayout ([#21516](https://github.com/go-gitea/gitea/pull/21516))
* BUGFIXES
  * Do not list active repositories as unadopted ([#22034](https://github.com/go-gitea/gitea/pull/22034)) ([#22167](https://github.com/go-gitea/gitea/pull/22167))
  * Correctly handle moved files in apply patch ([#22118](https://github.com/go-gitea/gitea/pull/22118)) ([#22136](https://github.com/go-gitea/gitea/pull/22136))
  * Fix condition for is_internal ([#22095](https://github.com/go-gitea/gitea/pull/22095)) ([#22131](https://github.com/go-gitea/gitea/pull/22131))
  * Fix permission check on issue/pull lock ([#22114](https://github.com/go-gitea/gitea/pull/22114))
  * Fix sorting admin user list by last login ([#22081](https://github.com/go-gitea/gitea/pull/22081)) ([#22106](https://github.com/go-gitea/gitea/pull/22106))
  * Workaround for container registry push/pull errors ([#21862](https://github.com/go-gitea/gitea/pull/21862)) ([#22069](https://github.com/go-gitea/gitea/pull/22069))
  * Fix issue/PR numbers ([#22037](https://github.com/go-gitea/gitea/pull/22037)) ([#22045](https://github.com/go-gitea/gitea/pull/22045))
  * Handle empty author names ([#21902](https://github.com/go-gitea/gitea/pull/21902)) ([#22028](https://github.com/go-gitea/gitea/pull/22028))
  * Fix ListBranches to handle empty case ([#21921](https://github.com/go-gitea/gitea/pull/21921)) ([#22025](https://github.com/go-gitea/gitea/pull/22025))
  * Fix enabling partial clones on 1.17 ([#21809](https://github.com/go-gitea/gitea/pull/21809))
  * Prevent panic in doctor command when running default checks ([#21791](https://github.com/go-gitea/gitea/pull/21791)) ([#21808](https://github.com/go-gitea/gitea/pull/21808))
  * Upgrade golang.org/x/crypto ([#21792](https://github.com/go-gitea/gitea/pull/21792)) ([#21794](https://github.com/go-gitea/gitea/pull/21794))
  * Init git module before database migration ([#21764](https://github.com/go-gitea/gitea/pull/21764)) ([#21766](https://github.com/go-gitea/gitea/pull/21766))
  * Set last login when activating account ([#21731](https://github.com/go-gitea/gitea/pull/21731)) ([#21754](https://github.com/go-gitea/gitea/pull/21754))
  * Add HEAD fix to gitea doctor ([#21352](https://github.com/go-gitea/gitea/pull/21352)) ([#21751](https://github.com/go-gitea/gitea/pull/21751))
  * Fix UI language switching bug ([#21597](https://github.com/go-gitea/gitea/pull/21597)) ([#21748](https://github.com/go-gitea/gitea/pull/21748))
  * Remove semver compatible flag and change pypi to an array of test cases ([#21708](https://github.com/go-gitea/gitea/pull/21708)) ([#21729](https://github.com/go-gitea/gitea/pull/21729))
  * Allow local package identifiers for PyPI packages ([#21690](https://github.com/go-gitea/gitea/pull/21690)) ([#21726](https://github.com/go-gitea/gitea/pull/21726))
  * Fix repository adoption on Windows ([#21646](https://github.com/go-gitea/gitea/pull/21646)) ([#21651](https://github.com/go-gitea/gitea/pull/21651))
  * Sync git hooks when config file path changed ([#21619](https://github.com/go-gitea/gitea/pull/21619)) ([#21625](https://github.com/go-gitea/gitea/pull/21625))
  * Added check for disabled Packages ([#21540](https://github.com/go-gitea/gitea/pull/21540)) ([#21614](https://github.com/go-gitea/gitea/pull/21614))
  * Fix `Timestamp.IsZero` ([#21593](https://github.com/go-gitea/gitea/pull/21593)) ([#21604](https://github.com/go-gitea/gitea/pull/21604))
  * Fix issues count bug ([#21600](https://github.com/go-gitea/gitea/pull/21600))
  * Support binary deploy in npm packages ([#21589](https://github.com/go-gitea/gitea/pull/21589))
  * Update milestone counters when issue is deleted ([#21459](https://github.com/go-gitea/gitea/pull/21459)) ([#21586](https://github.com/go-gitea/gitea/pull/21586))
  * SessionUser protection against nil pointer dereference ([#21581](https://github.com/go-gitea/gitea/pull/21581))
  * Case-insensitive NuGet symbol file GUID ([#21409](https://github.com/go-gitea/gitea/pull/21409)) ([#21575](https://github.com/go-gitea/gitea/pull/21575))
  * Suppress `ExternalLoginUserNotExist` error ([#21504](https://github.com/go-gitea/gitea/pull/21504)) ([#21572](https://github.com/go-gitea/gitea/pull/21572))
  * Prevent Authorization header for presigned LFS urls ([#21531](https://github.com/go-gitea/gitea/pull/21531)) ([#21569](https://github.com/go-gitea/gitea/pull/21569))
  * Update binding to fix bugs ([#21560](https://github.com/go-gitea/gitea/pull/21560))
  * Fix generating compare link ([#21519](https://github.com/go-gitea/gitea/pull/21519)) ([#21530](https://github.com/go-gitea/gitea/pull/21530))
  * Ignore error when retrieving changed PR review files ([#21487](https://github.com/go-gitea/gitea/pull/21487)) ([#21524](https://github.com/go-gitea/gitea/pull/21524))
  * Fix incorrect notification commit url ([#21479](https://github.com/go-gitea/gitea/pull/21479)) ([#21483](https://github.com/go-gitea/gitea/pull/21483))
  * Display total commit count in hook message ([#21400](https://github.com/go-gitea/gitea/pull/21400)) ([#21481](https://github.com/go-gitea/gitea/pull/21481))
  * Enforce grouped NuGet search results ([#21442](https://github.com/go-gitea/gitea/pull/21442)) ([#21480](https://github.com/go-gitea/gitea/pull/21480))
  * Return 404 when user is not found on avatar ([#21476](https://github.com/go-gitea/gitea/pull/21476)) ([#21477](https://github.com/go-gitea/gitea/pull/21477))
  * Normalize NuGet package version on upload ([#22186](https://github.com/go-gitea/gitea/pull/22186)) ([#22201](https://github.com/go-gitea/gitea/pull/22201)) 
* MISC
  * Check for zero time instant in TimeStamp.IsZero() ([#22171](https://github.com/go-gitea/gitea/pull/22171)) ([#22173](https://github.com/go-gitea/gitea/pull/22173))
  * Fix warn in database structs sync ([#22111](https://github.com/go-gitea/gitea/pull/22111))
  * Allow for resolution of NPM registry paths that match upstream ([#21568](https://github.com/go-gitea/gitea/pull/21568)) ([#21723](https://github.com/go-gitea/gitea/pull/21723))