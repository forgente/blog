---
date: 2024-09-05T20:36:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.22.2 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.22.2
---

We are proud to present the release of Gitea version 1.22.2.

We highly encourage users to update to this version for two security bug-fixes.

We have merged [52](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.22.2+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

We would like to give a special thanks to LRQA Nettitude for reporting the XSS security issue which is fixed by [#31973](https://github.com/go-gitea/gitea/pull/31973).Thanks to [@techknowlogick](https://github.com/techknowlogick), [@wxiaoguang](https://github.com/wxiaoguang) and [@lunny](https://github.com/lunny) for fixing the problem. 
Another special thanks to jinnatar for reporting the packages upload scopes missed checking issue which is fixed by [#31982](https://github.com/go-gitea/gitea/pull/31982). Thanks to [@lunny](https://github.com/lunny) for fixing the problem.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.22.2/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

<!--more-->

## Changelog

## [1.22.2](https://github.com/go-gitea/gitea/releases/tag/v1.22.2) - 2024-09-05

<!-- Changelog Details -->

* Security
  * Replace v-html with v-text in search inputbox ([#31966](https://github.com/go-gitea/gitea/pull/31966)) ([#31973](https://github.com/go-gitea/gitea/pull/31973))
  * Fix nuget/conan/container packages upload bugs ([#31967](https://github.com/go-gitea/gitea/pull/31967)) ([#31982](https://github.com/go-gitea/gitea/pull/31982))
* PERFORMANCE
  * Refactor the usage of batch catfile ([#31754](https://github.com/go-gitea/gitea/pull/31754)) ([#31889](https://github.com/go-gitea/gitea/pull/31889))
* BUGFIXES
  * Fix overflowing content in action run log ([#31842](https://github.com/go-gitea/gitea/pull/31842)) ([#31853](https://github.com/go-gitea/gitea/pull/31853))
  * Scroll images in project issues separately from the remaining issue ([#31683](https://github.com/go-gitea/gitea/pull/31683)) ([#31823](https://github.com/go-gitea/gitea/pull/31823))
  * Add `:focus-visible` style to buttons ([#31799](https://github.com/go-gitea/gitea/pull/31799)) ([#31819](https://github.com/go-gitea/gitea/pull/31819))
  * Fix the display of project type for deleted projects ([#31732](https://github.com/go-gitea/gitea/pull/31732)) ([#31734](https://github.com/go-gitea/gitea/pull/31734))
  * Fix API owner ID should be zero when created repo secret ([#31715](https://github.com/go-gitea/gitea/pull/31715)) ([#31811](https://github.com/go-gitea/gitea/pull/31811))
  * Set owner id to zero when GetRegistrationToken for repo ([#31725](https://github.com/go-gitea/gitea/pull/31725)) ([#31729](https://github.com/go-gitea/gitea/pull/31729))
  * Fix API endpoint for registration-token ([#31722](https://github.com/go-gitea/gitea/pull/31722)) ([#31728](https://github.com/go-gitea/gitea/pull/31728))
  * Add permission check when creating PR ([#31033](https://github.com/go-gitea/gitea/pull/31033)) ([#31720](https://github.com/go-gitea/gitea/pull/31720))
  * Don't return 500 if mirror url contains special chars ([#31859](https://github.com/go-gitea/gitea/pull/31859)) ([#31895](https://github.com/go-gitea/gitea/pull/31895))
  * Fix agit automerge ([#31207](https://github.com/go-gitea/gitea/pull/31207)) ([#31881](https://github.com/go-gitea/gitea/pull/31881))
  * Add CfTurnstileSitekey context data to all captcha templates ([#31874](https://github.com/go-gitea/gitea/pull/31874)) ([#31876](https://github.com/go-gitea/gitea/pull/31876))
  * Avoid returning without written ctx when posting PR ([#31843](https://github.com/go-gitea/gitea/pull/31843)) ([#31848](https://github.com/go-gitea/gitea/pull/31848))
  * Fix raw wiki links ([#31825](https://github.com/go-gitea/gitea/pull/31825)) ([#31845](https://github.com/go-gitea/gitea/pull/31845))
  * Fix panic of ssh public key page after deletion of auth source ([#31829](https://github.com/go-gitea/gitea/pull/31829)) ([#31836](https://github.com/go-gitea/gitea/pull/31836))
  * Fixes for unreachable project issues when transfer repository from organization ([#31770](https://github.com/go-gitea/gitea/pull/31770)) ([#31828](https://github.com/go-gitea/gitea/pull/31828))
  * Show lock owner instead of repo owner on LFS setting page ([#31788](https://github.com/go-gitea/gitea/pull/31788)) ([#31817](https://github.com/go-gitea/gitea/pull/31817))
  * Fix `IsObjectExist` with gogit ([#31790](https://github.com/go-gitea/gitea/pull/31790)) ([#31806](https://github.com/go-gitea/gitea/pull/31806))
  * Fix protected branch files detection on pre_receive hook ([#31778](https://github.com/go-gitea/gitea/pull/31778)) ([#31796](https://github.com/go-gitea/gitea/pull/31796))
  * Add `TAGS` to `TEST_TAGS` and fix bugs found with gogit ([#31791](https://github.com/go-gitea/gitea/pull/31791)) ([#31795](https://github.com/go-gitea/gitea/pull/31795))
  * Rename head branch of pull requests when renaming a branch ([#31759](https://github.com/go-gitea/gitea/pull/31759)) ([#31774](https://github.com/go-gitea/gitea/pull/31774))
  * Fix wiki revision pagination ([#31760](https://github.com/go-gitea/gitea/pull/31760)) ([#31772](https://github.com/go-gitea/gitea/pull/31772))
  * Bump vue-bar-graph ([#31705](https://github.com/go-gitea/gitea/pull/31705)) ([#31753](https://github.com/go-gitea/gitea/pull/31753))
  * Distinguish LFS object errors to ignore missing objects during migration ([#31702](https://github.com/go-gitea/gitea/pull/31702)) ([#31745](https://github.com/go-gitea/gitea/pull/31745))
  * Make GetRepositoryByName more safer ([#31712](https://github.com/go-gitea/gitea/pull/31712)) ([#31718](https://github.com/go-gitea/gitea/pull/31718))
  * Fix a branch divergence cache bug ([#31659](https://github.com/go-gitea/gitea/pull/31659)) ([#31661](https://github.com/go-gitea/gitea/pull/31661))
  * Allow org team names of length 255 in create team form ([#31564](https://github.com/go-gitea/gitea/pull/31564)) ([#31603](https://github.com/go-gitea/gitea/pull/31603))
  * Use old behavior for telegram webhook ([#31588](https://github.com/go-gitea/gitea/pull/31588))
  * Bug fix for translation in ru ([#31892](https://github.com/go-gitea/gitea/pull/31892))
  * Fix actions notify bug ([#31866](https://github.com/go-gitea/gitea/pull/31866)) ([#31875](https://github.com/go-gitea/gitea/pull/31875))
  * Fix the component of access token list not mounted ([#31824](https://github.com/go-gitea/gitea/pull/31824)) ([#31868](https://github.com/go-gitea/gitea/pull/31868))
  * Add missing repository type filter parameters to pager  ([#31832](https://github.com/go-gitea/gitea/pull/31832)) ([#31837](https://github.com/go-gitea/gitea/pull/31837))
  * Fix dates displaying in a wrong manner when we're close to the end of… ([#31750](https://github.com/go-gitea/gitea/pull/31750))
  * Fix "Filter by commit" Dropdown ([#31695](https://github.com/go-gitea/gitea/pull/31695)) ([#31696](https://github.com/go-gitea/gitea/pull/31696))
  * Properly filter issue list given no assignees filter ([#31522](https://github.com/go-gitea/gitea/pull/31522)) ([#31685](https://github.com/go-gitea/gitea/pull/31685))
  * Prevent update pull refs manually and will not affect other refs update ([#31931](https://github.com/go-gitea/gitea/pull/31931))([#31955](https://github.com/go-gitea/gitea/pull/31955))
  * Fix sort order for organization home and user profile page ([#31921](https://github.com/go-gitea/gitea/pull/31921)) ([#31922](https://github.com/go-gitea/gitea/pull/31922))
  * Fix search team ([#31923](https://github.com/go-gitea/gitea/pull/31923)) ([#31942](https://github.com/go-gitea/gitea/pull/31942))
  * Fix 500 error when state params is set when editing issue/PR by API ([#31880](https://github.com/go-gitea/gitea/pull/31880)) ([#31952](https://github.com/go-gitea/gitea/pull/31952))
  * Fix index too many file names bug ([#31903](https://github.com/go-gitea/gitea/pull/31903)) ([#31953](https://github.com/go-gitea/gitea/pull/31953))
  * Add lock for parallel maven upload ([#31851](https://github.com/go-gitea/gitea/pull/31851)) ([#31954](https://github.com/go-gitea/gitea/pull/31954))
* MISC
  * Remove "dsa-1024" testcases from Test_SSHParsePublicKey and Test_calcFingerprint ([#31905](https://github.com/go-gitea/gitea/pull/31905)) ([#31914](https://github.com/go-gitea/gitea/pull/31914))
  * Upgrade bleve to 2.4.2 ([#31894](https://github.com/go-gitea/gitea/pull/31894))
  * Remove unneccessary uses of `word-break: break-all` ([#31637](https://github.com/go-gitea/gitea/pull/31637)) ([#31652](https://github.com/go-gitea/gitea/pull/31652))
  * Return an empty string when a repo has no avatar in the repo API ([#31187](https://github.com/go-gitea/gitea/pull/31187)) ([#31567](https://github.com/go-gitea/gitea/pull/31567))
  * Upgrade micromatch to 4.0.8 ([#31944](https://github.com/go-gitea/gitea/pull/31944))
  * Update webpack to 5.94.0 ([#31941](https://github.com/go-gitea/gitea/pull/31941))

## Contributors

* [@aceArt-GmbH](https://github.com/aceArt-GmbH)
* [@Adrian-Hirt](https://github.com/Adrian-Hirt)
* [@appleboy](https://github.com/appleboy)
* [@bohde](https://github.com/bohde)
* [@emrebdr](https://github.com/emrebdr)
* [@jpraet](https://github.com/jpraet)
* [@kemzeb](https://github.com/kemzeb)
* [@lunny](https://github.com/lunny)
* [@s4uliu5](https://github.com/s4uliu5)
* [@SimonPistache](https://github.com/SimonPistache)
* [@sillyguodong](https://github.com/sillyguodong)
* [@silverwind](https://github.com/silverwind)
* [@techknowlogick](https://github.com/techknowlogick)
* [@tobiasbp](https://github.com/tobiasbp)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)
