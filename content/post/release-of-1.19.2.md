---
date: 2023-04-27T18:59:47+07:00
authors: "jolheiser"
title: "Gitea 1.19.2 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.19.2.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [42](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.19.2+is%3Amerged) pull requests to release this version.

In this release, we introduced a database conversion tool via `./gitea admin convert` to help convert MSSQL columns from `VARCHAR` to `NVARCHAR`. Any Gitea instances set up with MSSQL before 1.13.0 may need this tool.

This release also includes an update to the `go-redis` library used by Gitea which adds support for `redis-cluster` (in combination with [#23869](https://github.com/go-gitea/gitea/issues/23869) from the 1.19.1 release). Gitea configured with `redis-cluster` allows for high-availability in Kubernetes environments. (PS: We are currently working on switching to `redis-cluster` (from `memcached`) in the helm chart and providing detailed HA documentation - stay tuned!)

<!-- Security Thanks! -->

Thanks to [@KN4CK3R](https://gitea.com/KN4CK3R) for reporting both security issues patched in this release, and thanks to him and [@lunny](https://gitea.com/lunny) for the subsequent fixes!

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.19.2/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.19.2](https://github.com/go-gitea/gitea/releases/tag/v1.19.2) - 2023-04-27

<!-- Changelog Details -->
* SECURITY
  * Require repo scope for PATs for private repos and basic authentication ([#24362](https://github.com/go-gitea/gitea/pull/24362)) ([#24364](https://github.com/go-gitea/gitea/pull/24364))
  * Only delete secrets belonging to its owner ([#24284](https://github.com/go-gitea/gitea/pull/24284)) ([#24286](https://github.com/go-gitea/gitea/pull/24286))
* API
  * Fix typo in API route ([#24310](https://github.com/go-gitea/gitea/pull/24310)) ([#24332](https://github.com/go-gitea/gitea/pull/24332))
  * Fix access token issue on some public endpoints ([#24194](https://github.com/go-gitea/gitea/pull/24194)) ([#24259](https://github.com/go-gitea/gitea/pull/24259))
* ENHANCEMENTS
  * Fix broken clone script on an empty archived repo ([#24339](https://github.com/go-gitea/gitea/pull/24339)) ([#24348](https://github.com/go-gitea/gitea/pull/24348))
  * Fix Monaco IOS keyboard button ([#24341](https://github.com/go-gitea/gitea/pull/24341)) ([#24347](https://github.com/go-gitea/gitea/pull/24347))
  * Don't set meta `theme-color` by default ([#24340](https://github.com/go-gitea/gitea/pull/24340)) ([#24346](https://github.com/go-gitea/gitea/pull/24346))
  * Wrap too long push mirror addresses ([#21120](https://github.com/go-gitea/gitea/pull/21120)) ([#24334](https://github.com/go-gitea/gitea/pull/24334))
  * Add --font-weight-bold and set previous bold to 601 ([#24307](https://github.com/go-gitea/gitea/pull/24307)) ([#24331](https://github.com/go-gitea/gitea/pull/24331))
  * Unify nightly naming across binaries and docker images ([#24116](https://github.com/go-gitea/gitea/pull/24116)) ([#24308](https://github.com/go-gitea/gitea/pull/24308))
  * Fix footer display ([#24251](https://github.com/go-gitea/gitea/pull/24251)) ([#24269](https://github.com/go-gitea/gitea/pull/24269))
  * Fix label color, fix divider in dropdown ([#24215](https://github.com/go-gitea/gitea/pull/24215)) ([#24244](https://github.com/go-gitea/gitea/pull/24244))
  * Vertical widths of containers removed ([#24184](https://github.com/go-gitea/gitea/pull/24184)) ([#24211](https://github.com/go-gitea/gitea/pull/24211))
  * Use correct locale key for forks page ([#24172](https://github.com/go-gitea/gitea/pull/24172)) ([#24175](https://github.com/go-gitea/gitea/pull/24175))
  * Sort repo topic labels by name ([#24123](https://github.com/go-gitea/gitea/pull/24123)) ([#24153](https://github.com/go-gitea/gitea/pull/24153))
  * Highlight selected file in the PR file tree ([#23947](https://github.com/go-gitea/gitea/pull/23947)) ([#24126](https://github.com/go-gitea/gitea/pull/24126))
* BUGFIXES
  * Fix auth check bug ([#24382](https://github.com/go-gitea/gitea/pull/24382)) ([#24387](https://github.com/go-gitea/gitea/pull/24387))
  * Add tags list for repos whose release setting is disabled ([#23465](https://github.com/go-gitea/gitea/pull/23465)) ([#24369](https://github.com/go-gitea/gitea/pull/24369))
  * Fix wrong error info in RepoRefForAPI ([#24344](https://github.com/go-gitea/gitea/pull/24344)) ([#24351](https://github.com/go-gitea/gitea/pull/24351))
  * Fix no edit/close/delete button in org repo project view page ([#24349](https://github.com/go-gitea/gitea/pull/24349))
  * Respect the REGISTER_MANUAL_CONFIRM setting when registering via OIDC ([#24035](https://github.com/go-gitea/gitea/pull/24035)) ([#24333](https://github.com/go-gitea/gitea/pull/24333))
  * Remove org users who belong to no teams ([#24247](https://github.com/go-gitea/gitea/pull/24247)) ([#24313](https://github.com/go-gitea/gitea/pull/24313))
  * Fix bug when deleting wiki with no code write permission ([#24274](https://github.com/go-gitea/gitea/pull/24274)) ([#24295](https://github.com/go-gitea/gitea/pull/24295))
  * Handle canceled workflow as a warning instead of a fail ([#24282](https://github.com/go-gitea/gitea/pull/24282)) ([#24292](https://github.com/go-gitea/gitea/pull/24292))
  * Load reviewer for comments when dismissing a review ([#24281](https://github.com/go-gitea/gitea/pull/24281)) ([#24288](https://github.com/go-gitea/gitea/pull/24288))
  * Show commit history for closed/merged PRs ([#24238](https://github.com/go-gitea/gitea/pull/24238)) ([#24261](https://github.com/go-gitea/gitea/pull/24261))
  * Fix owner team access mode value in team_unit table ([#24224](https://github.com/go-gitea/gitea/pull/24224))
  * Fix issue attachment handling ([#24202](https://github.com/go-gitea/gitea/pull/24202)) ([#24221](https://github.com/go-gitea/gitea/pull/24221))
  * Fix incorrect CORS default values ([#24206](https://github.com/go-gitea/gitea/pull/24206)) ([#24217](https://github.com/go-gitea/gitea/pull/24217))
  * Fix template error in pull request with deleted head repo ([#24192](https://github.com/go-gitea/gitea/pull/24192)) ([#24216](https://github.com/go-gitea/gitea/pull/24216))
  * Don't list root repository on compare page if pulls not allowed ([#24183](https://github.com/go-gitea/gitea/pull/24183)) ([#24210](https://github.com/go-gitea/gitea/pull/24210))
  * Fix calReleaseNumCommitsBehind ([#24148](https://github.com/go-gitea/gitea/pull/24148)) ([#24197](https://github.com/go-gitea/gitea/pull/24197))
  * Fix Org edit page bugs: renaming detection, maxlength ([#24161](https://github.com/go-gitea/gitea/pull/24161)) ([#24171](https://github.com/go-gitea/gitea/pull/24171))
  * Update redis library to support redis v7 ([#24114](https://github.com/go-gitea/gitea/pull/24114)) ([#24156](https://github.com/go-gitea/gitea/pull/24156))
  * Use 1.18's aria role for dropdown menus ([#24144](https://github.com/go-gitea/gitea/pull/24144)) ([#24155](https://github.com/go-gitea/gitea/pull/24155))
  * Fix 2-dot direct compare to use the right base commit ([#24133](https://github.com/go-gitea/gitea/pull/24133)) ([#24150](https://github.com/go-gitea/gitea/pull/24150))
  * Fix incorrect server error content in RunnersList ([#24118](https://github.com/go-gitea/gitea/pull/24118)) ([#24121](https://github.com/go-gitea/gitea/pull/24121))
  * Fix mismatch between hook events and github event types ([#24048](https://github.com/go-gitea/gitea/pull/24048)) ([#24091](https://github.com/go-gitea/gitea/pull/24091))
* BUILD
  * Support converting varchar to nvarchar for mssql database ([#24105](https://github.com/go-gitea/gitea/pull/24105)) ([#24168](https://github.com/go-gitea/gitea/pull/24168))