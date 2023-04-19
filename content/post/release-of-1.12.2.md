---
date: "2020-07-11T20:00:00+00:00"
author: "lafriks"
title: "Gitea 1.12.2 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.12.2.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [15](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.12.2+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.12.2/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

<!--more-->

## Changelog

## [1.12.2](https://github.com/go-gitea/gitea/releases/tag/v1.12.2) - 2020-07-12

* BUGFIXES
  * When deleting repository decrese user repositry count in cache ([#11954](https://github.com/go-gitea/gitea/pull/11954)) ([#12188](https://github.com/go-gitea/gitea/pull/12188))
  * Gitea commits API again returns commit summaries, not full messages ([#12186](https://github.com/go-gitea/gitea/pull/12186)) ([#12187](https://github.com/go-gitea/gitea/pull/12187))
  * Properly set HEAD when a repo is created with a non-master default branch ([#12135](https://github.com/go-gitea/gitea/pull/12135)) ([#12182](https://github.com/go-gitea/gitea/pull/12182))
  * Ensure Subkeys are verified ([#12155](https://github.com/go-gitea/gitea/pull/12155)) ([#12168](https://github.com/go-gitea/gitea/pull/12168))
  * Fix failing to cache last commit with key being to long ([#12151](https://github.com/go-gitea/gitea/pull/12151)) ([#12161](https://github.com/go-gitea/gitea/pull/12161))
  * Multiple small admin dashboard fixes ([#12153](https://github.com/go-gitea/gitea/pull/12153)) ([#12156](https://github.com/go-gitea/gitea/pull/12156))
  * Remove spurious logging ([#12139](https://github.com/go-gitea/gitea/pull/12139)) ([#12148](https://github.com/go-gitea/gitea/pull/12148))
  * Fix repository setup instructions when default branch is not master ([#12122](https://github.com/go-gitea/gitea/pull/12122)) ([#12147](https://github.com/go-gitea/gitea/pull/12147))
  * Move EventSource to SharedWorker ([#12095](https://github.com/go-gitea/gitea/pull/12095)) ([#12130](https://github.com/go-gitea/gitea/pull/12130))
  * Fix ui bug in wiki commit page ([#12089](https://github.com/go-gitea/gitea/pull/12089)) ([#12125](https://github.com/go-gitea/gitea/pull/12125))
  * Fix gitgraph branch continues after merge ([#12044](https://github.com/go-gitea/gitea/pull/12044)) ([#12105](https://github.com/go-gitea/gitea/pull/12105))
  * Set the base url when migrating from Gitlab using access token or username without password ([#11852](https://github.com/go-gitea/gitea/pull/11852)) ([#12104](https://github.com/go-gitea/gitea/pull/12104))
  * Ensure BlameReaders close at end of request ([#12102](https://github.com/go-gitea/gitea/pull/12102)) ([#12103](https://github.com/go-gitea/gitea/pull/12103))
  * Fix comments webhook panic backport ([#12058](https://github.com/go-gitea/gitea/pull/12058))
* ENHANCEMENTS
  * Disable dropzone's timeout ([#12024](https://github.com/go-gitea/gitea/pull/12024)) ([#12032](https://github.com/go-gitea/gitea/pull/12032))
