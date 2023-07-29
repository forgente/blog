---
date: 2021-05-09T11:58:17+07:00
authors: "6543"
title: "Gitea 1.14.2 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.14.2.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [44](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.14.2+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.14.2/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.14.2](https://github.com/go-gitea/gitea/releases/tag/v1.14.2) - 2021-05-09

* API
  * Make change repo settings work on empty repos ([#15778](https://github.com/go-gitea/gitea/pull/15778)) ([#15789](https://github.com/go-gitea/gitea/pull/15789))
  * Add pull "merged" notification subject status to API ([#15344](https://github.com/go-gitea/gitea/pull/15344)) ([#15654](https://github.com/go-gitea/gitea/pull/15654))
* BUGFIXES
  * Ensure that ctx.Written is checked after issues(...) calls ([#15797](https://github.com/go-gitea/gitea/pull/15797)) ([#15798](https://github.com/go-gitea/gitea/pull/15798))
  * Use pulls in commit graph unless pulls are disabled (#15734 & #15740 & [#15774](https://github.com/go-gitea/gitea/pull/15774)) ([#15775](https://github.com/go-gitea/gitea/pull/15775))
  * Set GIT_DIR correctly if it is not set ([#15751](https://github.com/go-gitea/gitea/pull/15751)) ([#15769](https://github.com/go-gitea/gitea/pull/15769))
  * Fix bug where repositories appear unadopted ([#15757](https://github.com/go-gitea/gitea/pull/15757)) ([#15767](https://github.com/go-gitea/gitea/pull/15767))
  * Not show `ref-in-new-issue` pop when issue was disabled ([#15761](https://github.com/go-gitea/gitea/pull/15761)) ([#15765](https://github.com/go-gitea/gitea/pull/15765))
  * Drop back to use IsAnInteractiveSession for SVC ([#15749](https://github.com/go-gitea/gitea/pull/15749)) ([#15762](https://github.com/go-gitea/gitea/pull/15762))
  * Fix setting version table in dump ([#15753](https://github.com/go-gitea/gitea/pull/15753)) ([#15759](https://github.com/go-gitea/gitea/pull/15759))
  * Fix close button change on delete in simplemde area ([#15737](https://github.com/go-gitea/gitea/pull/15737)) ([#15747](https://github.com/go-gitea/gitea/pull/15747))
  * Defer closing the gitrepo until the end of the wrapped context functions ([#15653](https://github.com/go-gitea/gitea/pull/15653)) ([#15746](https://github.com/go-gitea/gitea/pull/15746))
  * Fix some ui bug about draft release ([#15137](https://github.com/go-gitea/gitea/pull/15137)) ([#15745](https://github.com/go-gitea/gitea/pull/15745))
  * Only log Error on getLastCommitStatus error to let pull list still be visible ([#15716](https://github.com/go-gitea/gitea/pull/15716)) ([#15715](https://github.com/go-gitea/gitea/pull/15715))
  * Move tooltip down to allow selection of Remove File on error ([#15672](https://github.com/go-gitea/gitea/pull/15672)) ([#15714](https://github.com/go-gitea/gitea/pull/15714))
  * Fix setting redis db path ([#15698](https://github.com/go-gitea/gitea/pull/15698)) ([#15708](https://github.com/go-gitea/gitea/pull/15708))
  * Fix DB session cleanup ([#15697](https://github.com/go-gitea/gitea/pull/15697)) ([#15700](https://github.com/go-gitea/gitea/pull/15700))
  * Fixed several activation bugs ([#15473](https://github.com/go-gitea/gitea/pull/15473)) ([#15685](https://github.com/go-gitea/gitea/pull/15685))
  * Delete references if repository gets deleted ([#15681](https://github.com/go-gitea/gitea/pull/15681)) ([#15684](https://github.com/go-gitea/gitea/pull/15684))
  * Fix orphaned objects deletion bug ([#15657](https://github.com/go-gitea/gitea/pull/15657)) ([#15683](https://github.com/go-gitea/gitea/pull/15683))
  * Delete protected branch if repository gets removed ([#15658](https://github.com/go-gitea/gitea/pull/15658)) ([#15676](https://github.com/go-gitea/gitea/pull/15676))
  * Remove spurious set name from eventsource.sharedworker.js ([#15643](https://github.com/go-gitea/gitea/pull/15643)) ([#15652](https://github.com/go-gitea/gitea/pull/15652))
  * Not update updated uinx for `git gc` ([#15637](https://github.com/go-gitea/gitea/pull/15637)) ([#15641](https://github.com/go-gitea/gitea/pull/15641))
  * Fix commit graph author link ([#15627](https://github.com/go-gitea/gitea/pull/15627)) ([#15630](https://github.com/go-gitea/gitea/pull/15630))
  * Fix webhook timeout bug ([#15613](https://github.com/go-gitea/gitea/pull/15613)) ([#15621](https://github.com/go-gitea/gitea/pull/15621))
  * Resolve panic on failed interface conversion in migration v156 ([#15604](https://github.com/go-gitea/gitea/pull/15604)) ([#15610](https://github.com/go-gitea/gitea/pull/15610))
  * Fix missing storage init ([#15589](https://github.com/go-gitea/gitea/pull/15589)) ([#15598](https://github.com/go-gitea/gitea/pull/15598))
  * If the default branch is not present do not report error on stats indexing (#15546 & [#15583](https://github.com/go-gitea/gitea/pull/15583)) ([#15594](https://github.com/go-gitea/gitea/pull/15594))
  * Fix lfs management find ([#15537](https://github.com/go-gitea/gitea/pull/15537)) ([#15578](https://github.com/go-gitea/gitea/pull/15578))
  * Fix NPE on view commit with notes ([#15561](https://github.com/go-gitea/gitea/pull/15561)) ([#15573](https://github.com/go-gitea/gitea/pull/15573))
  * Fix bug on commit graph ([#15517](https://github.com/go-gitea/gitea/pull/15517)) ([#15530](https://github.com/go-gitea/gitea/pull/15530))
  * Send size to /avatars if requested ([#15459](https://github.com/go-gitea/gitea/pull/15459)) ([#15528](https://github.com/go-gitea/gitea/pull/15528))
  * Prevent migration 156 failure if tag commit missing ([#15519](https://github.com/go-gitea/gitea/pull/15519)) ([#15527](https://github.com/go-gitea/gitea/pull/15527))
* ENHANCEMENTS
  * Display conflict-free merge messages for pull requests ([#15773](https://github.com/go-gitea/gitea/pull/15773)) ([#15796](https://github.com/go-gitea/gitea/pull/15796))
  * Exponential Backoff for ByteFIFO ([#15724](https://github.com/go-gitea/gitea/pull/15724)) ([#15793](https://github.com/go-gitea/gitea/pull/15793))
  * Issue list alignment tweaks ([#15483](https://github.com/go-gitea/gitea/pull/15483)) ([#15766](https://github.com/go-gitea/gitea/pull/15766))
  * Implement delete release attachments and update release attachments' name ([#14130](https://github.com/go-gitea/gitea/pull/14130)) ([#15666](https://github.com/go-gitea/gitea/pull/15666))
  * Add placeholder text to deploy key textarea ([#15575](https://github.com/go-gitea/gitea/pull/15575)) ([#15576](https://github.com/go-gitea/gitea/pull/15576))
  * Project board improvements ([#15429](https://github.com/go-gitea/gitea/pull/15429)) ([#15560](https://github.com/go-gitea/gitea/pull/15560))
  * Repo branch page: label size, PR ref, new PR button alignment ([#15363](https://github.com/go-gitea/gitea/pull/15363)) ([#15365](https://github.com/go-gitea/gitea/pull/15365))
* MISC
  * Fix webkit calendar icon color on arc-green ([#15713](https://github.com/go-gitea/gitea/pull/15713)) ([#15728](https://github.com/go-gitea/gitea/pull/15728))
  * Performance improvement for last commit cache and show-ref ([#15455](https://github.com/go-gitea/gitea/pull/15455)) ([#15701](https://github.com/go-gitea/gitea/pull/15701))
  * Bump unrolled/render to v1.1.0 ([#15581](https://github.com/go-gitea/gitea/pull/15581)) ([#15608](https://github.com/go-gitea/gitea/pull/15608))
  * Add ETag header ([#15370](https://github.com/go-gitea/gitea/pull/15370)) ([#15552](https://github.com/go-gitea/gitea/pull/15552))
