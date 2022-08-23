---
date: "2022-08-18T13:36:31+07:00"
author: "jolheiser"
title: "Gitea 1.17.1 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.17.1.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [35](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.17.1+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->
Thanks to Aleksey Solovev (Positive Technologies) for the security issue in this release, and [@zeripath](https://gitea.com/zeripath) for the fix!

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.17.1/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.17.1](https://github.com/go-gitea/gitea/releases/tag/v1.17.1) - 2022-08-18

<!-- Changelog Details -->
* SECURITY
  * Correctly escape within tribute.js ([#20831](https://github.com/go-gitea/gitea/pull/20831)) ([#20832](https://github.com/go-gitea/gitea/pull/20832))
* ENHANCEMENTS
  * Add support for NuGet API keys ([#20721](https://github.com/go-gitea/gitea/pull/20721)) ([#20734](https://github.com/go-gitea/gitea/pull/20734))
  * Display project in issue list ([#20583](https://github.com/go-gitea/gitea/pull/20583))
  * Add disable download source configuration ([#20548](https://github.com/go-gitea/gitea/pull/20548)) ([#20579](https://github.com/go-gitea/gitea/pull/20579))
  * Add username check to doctor ([#20140](https://github.com/go-gitea/gitea/pull/20140)) ([#20671](https://github.com/go-gitea/gitea/pull/20671))
  * Enable Wire 2 for Internal SSH Server ([#20616](https://github.com/go-gitea/gitea/pull/20616)) ([#20617](https://github.com/go-gitea/gitea/pull/20617))
* BUGFIXES
  * Use the total issue count for UI ([#20785](https://github.com/go-gitea/gitea/pull/20785)) ([#20827](https://github.com/go-gitea/gitea/pull/20827))
  * Add proxy host into allow list ([#20798](https://github.com/go-gitea/gitea/pull/20798)) ([#20819](https://github.com/go-gitea/gitea/pull/20819))
  * Add missing translation for queue flush workers ([#20791](https://github.com/go-gitea/gitea/pull/20791)) ([#20792](https://github.com/go-gitea/gitea/pull/20792))
  * Improve comment header for mobile ([#20781](https://github.com/go-gitea/gitea/pull/20781)) ([#20789](https://github.com/go-gitea/gitea/pull/20789))
  * Fix git.Init for doctor sub-command ([#20782](https://github.com/go-gitea/gitea/pull/20782)) ([#20783](https://github.com/go-gitea/gitea/pull/20783))
  * Check webhooks slice length before calling xorm ([#20642](https://github.com/go-gitea/gitea/pull/20642)) ([#20768](https://github.com/go-gitea/gitea/pull/20768))
  * Remove manual rollback for failed generated repositories ([#20639](https://github.com/go-gitea/gitea/pull/20639)) ([#20762](https://github.com/go-gitea/gitea/pull/20762))
  * Use correct field name in npm template ([#20675](https://github.com/go-gitea/gitea/pull/20675)) ([#20760](https://github.com/go-gitea/gitea/pull/20760))
  * Keep download count on Container tag overwrite ([#20728](https://github.com/go-gitea/gitea/pull/20728)) ([#20735](https://github.com/go-gitea/gitea/pull/20735))
  * Fix v220 migration to be compatible for MSSQL 2008 r2 ([#20702](https://github.com/go-gitea/gitea/pull/20702)) ([#20707](https://github.com/go-gitea/gitea/pull/20707))
  * Use request timeout for git service rpc ([#20689](https://github.com/go-gitea/gitea/pull/20689)) ([#20693](https://github.com/go-gitea/gitea/pull/20693))
  * Send correct NuGet status codes ([#20647](https://github.com/go-gitea/gitea/pull/20647)) ([#20677](https://github.com/go-gitea/gitea/pull/20677))
  * Use correct context to get package content ([#20673](https://github.com/go-gitea/gitea/pull/20673)) ([#20676](https://github.com/go-gitea/gitea/pull/20676))
  * Fix the JS error "EventSource is not defined" caused by some non-standard browsers ([#20584](https://github.com/go-gitea/gitea/pull/20584)) ([#20663](https://github.com/go-gitea/gitea/pull/20663))
  * Add default commit messages to PR for squash merge ([#20618](https://github.com/go-gitea/gitea/pull/20618)) ([#20645](https://github.com/go-gitea/gitea/pull/20645))
  * Fix package upload for files >32mb ([#20622](https://github.com/go-gitea/gitea/pull/20622)) ([#20635](https://github.com/go-gitea/gitea/pull/20635))
  * Fix the new-line copy-paste for rendered code ([#20612](https://github.com/go-gitea/gitea/pull/20612))
  * Clean up and fix clone button script (#20415 & [#20600](https://github.com/go-gitea/gitea/pull/20600)) ([#20599](https://github.com/go-gitea/gitea/pull/20599))
  * Fix default merge style ([#20564](https://github.com/go-gitea/gitea/pull/20564)) ([#20565](https://github.com/go-gitea/gitea/pull/20565))
  * Add repository condition for issue count ([#20454](https://github.com/go-gitea/gitea/pull/20454)) ([#20496](https://github.com/go-gitea/gitea/pull/20496))
  * Make branch icon stand out more ([#20726](https://github.com/go-gitea/gitea/pull/20726)) ([#20774](https://github.com/go-gitea/gitea/pull/20774))
  * Fix loading button with invalid form ([#20754](https://github.com/go-gitea/gitea/pull/20754)) ([#20759](https://github.com/go-gitea/gitea/pull/20759))
  * Fix SecToTime edge-cases ([#20610](https://github.com/go-gitea/gitea/pull/20610)) ([#20611](https://github.com/go-gitea/gitea/pull/20611))
  * Executable check always returns true for windows ([#20637](https://github.com/go-gitea/gitea/pull/20637)) ([#20835](https://github.com/go-gitea/gitea/pull/20835))
  * Check issue labels slice length before calling xorm Insert ([#20655](https://github.com/go-gitea/gitea/pull/20655)) ([#20836](https://github.com/go-gitea/gitea/pull/20836))
  * Fix owners cannot create organization repos bug ([#20841](https://github.com/go-gitea/gitea/pull/20841)) ([#20854](https://github.com/go-gitea/gitea/pull/20854))
  * Prevent 500 is head repo does not have PullRequest unit in IsUserAllowedToUpdate ([#20839](https://github.com/go-gitea/gitea/pull/20839)) ([#20848](https://github.com/go-gitea/gitea/pull/20848))
