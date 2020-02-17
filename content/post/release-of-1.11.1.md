---
date: "2020-02-17T12:30:00+00:00"
author: "jolheiser"
title: "Gitea 1.11.1 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.11.1.

There is a known high priority bug that will be fixed in `1.11.2` ([#10318](https://github.com/go-gitea/gitea/pull/10318)).  
If anyone experiences this problem, you may want to use the [1.11 branch download](https://dl.gitea.io/gitea/1.11/) until `1.11.2` is released.

This release fixes a serious bug in the worker pool that leads to a deadlock. ([#10284](https://github.com/go-gitea/gitea/pull/10284))

We have merged [14](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.11.1+is%3Aclosed) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.11.1/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

<!--more-->

## Changelog

* BUGFIXES
  * Repo name added to automatically generated commit message when merging ([#9997](https://github.com/go-gitea/gitea/pull/9997)) ([#10285](https://github.com/go-gitea/gitea/pull/10285))
  * Fix Workerpool deadlock ([#10283](https://github.com/go-gitea/gitea/pull/10283)) ([#10284](https://github.com/go-gitea/gitea/pull/10284))
  * Divide GetIssueStats query in smaller chunks ([#10176](https://github.com/go-gitea/gitea/pull/10176)) ([#10282](https://github.com/go-gitea/gitea/pull/10282))
  * Fix reply on code review ([#10257](https://github.com/go-gitea/gitea/pull/10257))
  * Stop hanging issue indexer initialisation from preventing shutdown ([#10243](https://github.com/go-gitea/gitea/pull/10243)) ([#10249](https://github.com/go-gitea/gitea/pull/10249))
  * Fix filter label emoji width ([#10241](https://github.com/go-gitea/gitea/pull/10241)) ([#10244](https://github.com/go-gitea/gitea/pull/10244))
  * Fix issue sidebar menus having an infinite height ([#10239](https://github.com/go-gitea/gitea/pull/10239)) ([#10240](https://github.com/go-gitea/gitea/pull/10240))
  * Fix commit between two commits calculation if there is only last commit ([#10225](https://github.com/go-gitea/gitea/pull/10225)) ([#10226](https://github.com/go-gitea/gitea/pull/10226))
  * Only check for conflicts/merging if the PR has not been merged in the interim ([#10132](https://github.com/go-gitea/gitea/pull/10132)) ([#10206](https://github.com/go-gitea/gitea/pull/10206))
  * Blacklist manifest.json & milestones user ([#10292](https://github.com/go-gitea/gitea/pull/10292)) ([#10293](https://github.com/go-gitea/gitea/pull/10293))
