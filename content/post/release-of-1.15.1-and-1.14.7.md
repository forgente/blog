---
date: "2021-09-02T20:30:55+01:00"
author: "zeripath"
title: "Gitea 1.15.1 and 1.14.7 are released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.15.1 (and v1.14.7). We have specially released v1.14.7 as it contains an important fix for an issue with `gitea dump` on versions 1.14.3-1.14.6 and version 1.15.0.

We highly encourage users on versions v1.14.3-v1.14.7 to update to v1.14.7 before creating their backup dump files, and then update to v1.15.1 for some important bug-fixes.

We have merged [26](https://github.com/go-gitea/gitea/pulls?q=is:pr+milestone:1.15.1+is:merged) pull requests to release version 1.15.1 and [6](https://github.com/go-gitea/gitea/pulls?q=is:pr+milestone:1.14.7+is:merged) pull requests to release version 1.14.7.

You can download one of our pre-built binaries for 1.15.1 from our [downloads page](https://dl.gitea.io/gitea/1.15.1/) ([1.14.7](https://dl.gitea.io/gitea/1.14.7/)) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

### [1.15.1](https://github.com/go-gitea/gitea/releases/tag/v1.15.1) - 2021-09-02

* BUGFIXES
  * Allow BASIC authentication access to `/:owner/:repo/releases/download/*` ([#16916](https://github.com/go-gitea/gitea/pull/16916)) ([#16923](https://github.com/go-gitea/gitea/pull/16923))
  * Prevent leave changes dialogs due to autofill fields ([#16912](https://github.com/go-gitea/gitea/pull/16912)) ([#16920](https://github.com/go-gitea/gitea/pull/16920))
  * Ignore review comment when ref commit is missed ([#16905](https://github.com/go-gitea/gitea/pull/16905)) ([#16919](https://github.com/go-gitea/gitea/pull/16919))
  * Fix wrong attachment removal ([#16915](https://github.com/go-gitea/gitea/pull/16915)) ([#16917](https://github.com/go-gitea/gitea/pull/16917))
  * Gitlab Migrator: dont ignore reactions of last request ([#16903](https://github.com/go-gitea/gitea/pull/16903)) ([#16913](https://github.com/go-gitea/gitea/pull/16913))
  * Correctly return the number of Repositories for Organizations ([#16807](https://github.com/go-gitea/gitea/pull/16807)) ([#16911](https://github.com/go-gitea/gitea/pull/16911))
  * Test if LFS object is accessible ([#16865](https://github.com/go-gitea/gitea/pull/16865)) ([#16904](https://github.com/go-gitea/gitea/pull/16904))
  * Fix git.Blob.DataAsync(): close pipe since we return a NopCloser ([#16899](https://github.com/go-gitea/gitea/pull/16899)) ([#16900](https://github.com/go-gitea/gitea/pull/16900))
  * Fix dump and restore respository ([#16698](https://github.com/go-gitea/gitea/pull/16698)) ([#16898](https://github.com/go-gitea/gitea/pull/16898))
  * Repair and Improve GetDiffRangeWithWhitespaceBehavior ([#16894](https://github.com/go-gitea/gitea/pull/16894)) ([#16895](https://github.com/go-gitea/gitea/pull/16895))
  * Fix wiki raw commit diff/patch view ([#16891](https://github.com/go-gitea/gitea/pull/16891)) ([#16892](https://github.com/go-gitea/gitea/pull/16892))
  * Ensure wiki repos are all closed ([#16886](https://github.com/go-gitea/gitea/pull/16886)) ([#16888](https://github.com/go-gitea/gitea/pull/16888))
  * List limited and private orgs if authenticated on API ([#16866](https://github.com/go-gitea/gitea/pull/16866)) ([#16879](https://github.com/go-gitea/gitea/pull/16879))
  * Simplify split diff view generation and remove JS dependency ([#16775](https://github.com/go-gitea/gitea/pull/16775)) ([#16863](https://github.com/go-gitea/gitea/pull/16863))
  * Ensure that the default visibility is set on the user create page ([#16845](https://github.com/go-gitea/gitea/pull/16845)) ([#16862](https://github.com/go-gitea/gitea/pull/16862))
  * In Render tolerate not being passed a context ([#16842](https://github.com/go-gitea/gitea/pull/16842)) ([#16858](https://github.com/go-gitea/gitea/pull/16858))
  * Upgrade xorm to v1.2.2 ([#16663](https://github.com/go-gitea/gitea/pull/16663)) & Add test to ensure that dumping of login sources remains correct ([#16847](https://github.com/go-gitea/gitea/pull/16847)) ([#16848](https://github.com/go-gitea/gitea/pull/16848))
  * Report the correct number of pushes on the feeds ([#16811](https://github.com/go-gitea/gitea/pull/16811)) ([#16822](https://github.com/go-gitea/gitea/pull/16822))
  * Add primary_key to issue_index ([#16813](https://github.com/go-gitea/gitea/pull/16813)) ([#16820](https://github.com/go-gitea/gitea/pull/16820))
  * Prevent NPE on empty commit ([#16812](https://github.com/go-gitea/gitea/pull/16812)) ([#16819](https://github.com/go-gitea/gitea/pull/16819))
  * Fix branch pagination error ([#16805](https://github.com/go-gitea/gitea/pull/16805)) ([#16816](https://github.com/go-gitea/gitea/pull/16816))
  * Add missing return to handleSettingRemoteAddrError ([#16794](https://github.com/go-gitea/gitea/pull/16794)) ([#16795](https://github.com/go-gitea/gitea/pull/16795))
  * Remove spurious / from issues.opened_by ([#16793](https://github.com/go-gitea/gitea/pull/16793))
  * Ensure that template compilation panics are sent to the logs ([#16788](https://github.com/go-gitea/gitea/pull/16788)) ([#16792](https://github.com/go-gitea/gitea/pull/16792))
  * Update caddyserver/certmagic ([#16789](https://github.com/go-gitea/gitea/pull/16789)) ([#16790](https://github.com/go-gitea/gitea/pull/16790))

### [1.14.7](https://github.com/go-gitea/gitea/releases/tag/v1.14.7) - 2021-09-02

* BUGFIXES
  * Add missing gitRepo close at GetDiffRangeWithWhitespaceBehavior (Partial #16894) ([#16896](https://github.com/go-gitea/gitea/pull/16896))
  * Fix wiki raw commit diff/patch view ([#16891](https://github.com/go-gitea/gitea/pull/16891)) ([#16893](https://github.com/go-gitea/gitea/pull/16893))
  * Ensure wiki repos are all closed ([#16886](https://github.com/go-gitea/gitea/pull/16886)) ([#16889](https://github.com/go-gitea/gitea/pull/16889))
  * Upgrade xorm to v1.2.2 ([#16663](https://github.com/go-gitea/gitea/pull/16663)) & Add test to ensure that dumping of login sources remains correct ([#16847](https://github.com/go-gitea/gitea/pull/16847)) ([#16849](https://github.com/go-gitea/gitea/pull/16849))
  * Recreate Tables should Recreate indexes on MySQL ([#16718](https://github.com/go-gitea/gitea/pull/16718)) ([#16740](https://github.com/go-gitea/gitea/pull/16740))
