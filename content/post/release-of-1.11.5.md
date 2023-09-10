---
date: 2020-05-10T10:00:00+00:00
authors: "guillep2k"
title: "Gitea 1.11.5 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.11.5"
---

We are proud to present the release of Gitea version 1.11.5.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [25](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.11.5+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.11.5/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

## [1.11.5](https://github.com/go-gitea/gitea/releases/tag/v1.11.5) - 2020-05-09

* BUGFIXES
  * Prevent timer leaks in Workerpool and others ([#11333](https://github.com/go-gitea/gitea/pull/11333)) ([#11340](https://github.com/go-gitea/gitea/pull/11340))
  * Fix tracked time issues ([#11349](https://github.com/go-gitea/gitea/pull/11349)) ([#11354](https://github.com/go-gitea/gitea/pull/11354))
  * Add NotifySyncPushCommits to indexer notifier ([#11309](https://github.com/go-gitea/gitea/pull/11309)) ([#11338](https://github.com/go-gitea/gitea/pull/11338))
  * Allow X in addition to x in tasks ([#10979](https://github.com/go-gitea/gitea/pull/10979)) ([#11335](https://github.com/go-gitea/gitea/pull/11335))
  * When delete tracked time through the API return 404 not 500 ([#11319](https://github.com/go-gitea/gitea/pull/11319)) ([#11326](https://github.com/go-gitea/gitea/pull/11326))
  * Prevent duplicate records in organizations list when creating a repository ([#11303](https://github.com/go-gitea/gitea/pull/11303)) ([#11325](https://github.com/go-gitea/gitea/pull/11325))
  * Manage port in submodule refurl ([#11305](https://github.com/go-gitea/gitea/pull/11305)) ([#11323](https://github.com/go-gitea/gitea/pull/11323))
  * api.Context.NotFound(...) should tolerate nil ([#11288](https://github.com/go-gitea/gitea/pull/11288)) ([#11306](https://github.com/go-gitea/gitea/pull/11306))
  * Show pull request selection even when unrelated branches ([#11239](https://github.com/go-gitea/gitea/pull/11239)) ([#11283](https://github.com/go-gitea/gitea/pull/11283))
  * Repo: milestone: make /milestone/:id endpoint accessible ([#11264](https://github.com/go-gitea/gitea/pull/11264)) ([#11282](https://github.com/go-gitea/gitea/pull/11282))
  * Fix GetContents(): Dont't ignore Executables ([#11192](https://github.com/go-gitea/gitea/pull/11192)) ([#11209](https://github.com/go-gitea/gitea/pull/11209))
  * Fix submodule paths when AppSubUrl is not root ([#11098](https://github.com/go-gitea/gitea/pull/11098)) ([#11176](https://github.com/go-gitea/gitea/pull/11176))
  * Prevent clones and pushes to disabled wiki ([#11131](https://github.com/go-gitea/gitea/pull/11131)) ([#11134](https://github.com/go-gitea/gitea/pull/11134))
  * Remove errant third closing curly-bracket from account.tmpl and send account ID in account.tmpl ([#11130](https://github.com/go-gitea/gitea/pull/11130))
  * On Repo Deletion: Delete related TrackedTimes too ([#11110](https://github.com/go-gitea/gitea/pull/11110)) ([#11125](https://github.com/go-gitea/gitea/pull/11125))
  * Refresh codemirror on show pull comment tab ([#11100](https://github.com/go-gitea/gitea/pull/11100)) ([#11122](https://github.com/go-gitea/gitea/pull/11122))
  * Fix merge dialog on protected branch with missing required statuses ([#11074](https://github.com/go-gitea/gitea/pull/11074)) ([#11084](https://github.com/go-gitea/gitea/pull/11084))
  * Load pr Issue Poster on API too ([#11033](https://github.com/go-gitea/gitea/pull/11033)) ([#11039](https://github.com/go-gitea/gitea/pull/11039))
  * Fix release counter on API repository info ([#10968](https://github.com/go-gitea/gitea/pull/10968)) ([#10996](https://github.com/go-gitea/gitea/pull/10996))
  * Generate Diff and Patch direct from Pull head ([#10936](https://github.com/go-gitea/gitea/pull/10936)) ([#10938](https://github.com/go-gitea/gitea/pull/10938))
  * Fix rebase conflict detection in git 2.26 ([#10929](https://github.com/go-gitea/gitea/pull/10929)) ([#10930](https://github.com/go-gitea/gitea/pull/10930))
* ENHANCEMENTS
  * Fix 404 and 500 image size in small size screen ([#11043](https://github.com/go-gitea/gitea/pull/11043)) ([#11049](https://github.com/go-gitea/gitea/pull/11049))
  * Multiple Gitea Doctor improvements ([#10943](https://github.com/go-gitea/gitea/pull/10943)) ([#10990](https://github.com/go-gitea/gitea/pull/10990)) ([#10064](https://github.com/go-gitea/gitea/pull/10064)) ([#9095](https://github.com/go-gitea/gitea/pull/9095)) ([#10991](https://github.com/go-gitea/gitea/pull/10991))
