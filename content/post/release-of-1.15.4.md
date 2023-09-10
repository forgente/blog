---
date: 2021-10-08T17:04:26+07:00
authors: "jolheiser"
title: "Gitea 1.15.4 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.15.4"
---

We are proud to present the release of Gitea version 1.15.4.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [20](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.15.4+is%3Amerged) pull requests to release this version.

:exclamation: We remind users that a bug was discovered with `gitea dump` in 1.14.3–1.14.6 and 1.15.0. Database dumps from these versions cause
broken fields in the `repo_unit` and `login_source` tables causing the issue identified in [#16961](https://github.com/go-gitea/gitea/pull/16961). 
Users on 1.14.x must upgrade to 1.14.7 before running `gitea dump`. If this is not possible and you are affected [#17137](https://github.com/go-gitea/gitea/pull/17137)
provides a new `gitea doctor` command to fix the `repo_unit` issue:

```
gitea doctor --fix --run fix-broken-repo-units
```

A command to provide an automatic fix for problems with the `login_source` table does not appear definitely possible and if you are affected please contact the maintainers.
 
<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.15.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.15.4](https://github.com/go-gitea/gitea/releases/tag/v1.15.4) - 2021-10-08
* BUGFIXES
    * Raw file API: don't try to interpret 40char filenames as commit SHA ([#17185](https://github.com/go-gitea/gitea/pull/17185)) ([#17272](https://github.com/go-gitea/gitea/pull/17272))
    * Don't allow merged PRs to be reopened ([#17192](https://github.com/go-gitea/gitea/pull/17192)) ([#17271](https://github.com/go-gitea/gitea/pull/17271))
    * Fix incorrect repository count on organization tab of dashboard ([#17256](https://github.com/go-gitea/gitea/pull/17256)) ([#17266](https://github.com/go-gitea/gitea/pull/17266))
    * Fix unwanted team review request deletion ([#17257](https://github.com/go-gitea/gitea/pull/17257)) ([#17264](https://github.com/go-gitea/gitea/pull/17264))
    * Fix broken Activities link in team dashboard ([#17255](https://github.com/go-gitea/gitea/pull/17255)) ([#17258](https://github.com/go-gitea/gitea/pull/17258))
    * API pull's head/base have correct permission([#17214](https://github.com/go-gitea/gitea/pull/17214)) ([#17245](https://github.com/go-gitea/gitea/pull/17245))
    * Fix stange behavior of DownloadPullDiffOrPatch in incorect index ([#17223](https://github.com/go-gitea/gitea/pull/17223)) ([#17227](https://github.com/go-gitea/gitea/pull/17227))
    * Upgrade xorm to v1.2.5 ([#17177](https://github.com/go-gitea/gitea/pull/17177)) ([#17188](https://github.com/go-gitea/gitea/pull/17188))
    * Fix missing repo link in issue/pull assigned emails ([#17183](https://github.com/go-gitea/gitea/pull/17183)) ([#17184](https://github.com/go-gitea/gitea/pull/17184))
    * Fix bug of get context user ([#17169](https://github.com/go-gitea/gitea/pull/17169)) ([#17172](https://github.com/go-gitea/gitea/pull/17172))
    * Nicely handle missing user in collaborations ([#17049](https://github.com/go-gitea/gitea/pull/17049)) ([#17166](https://github.com/go-gitea/gitea/pull/17166))
    * Add Horizontal scrollbar to inner menu on Chrome ([#17086](https://github.com/go-gitea/gitea/pull/17086)) ([#17164](https://github.com/go-gitea/gitea/pull/17164))
    * Fix wrong i18n keys ([#17150](https://github.com/go-gitea/gitea/pull/17150)) ([#17153](https://github.com/go-gitea/gitea/pull/17153))
    * Fix Archive Creation: correct transaction ending ([#17151](https://github.com/go-gitea/gitea/pull/17151))
    * Prevent panic in Org mode HighlightCodeBlock ([#17140](https://github.com/go-gitea/gitea/pull/17140)) ([#17141](https://github.com/go-gitea/gitea/pull/17141))
    * Create doctor command to fix repo_units broken by dumps from 1.14.3-1.14.6 ([#17136](https://github.com/go-gitea/gitea/pull/17136)) ([#17137](https://github.com/go-gitea/gitea/pull/17137))
* ENHANCEMENT
    * Check user instead of organization when creating a repo from a template via API ([#16346](https://github.com/go-gitea/gitea/pull/16346)) ([#17195](https://github.com/go-gitea/gitea/pull/17195))
* TRANSLATION
    * v1.15 fix Sprintf format 'verbs' in locale files ([#17187](https://github.com/go-gitea/gitea/pull/17187))
