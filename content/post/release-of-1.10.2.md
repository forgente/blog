---
date: "2020-01-02T12:30:00+00:00"
author: "6543"
title: "Gitea 1.10.2 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.10.2.

We have merged [18](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.10.2+is%3Aclosed) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.10.2/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

* BUGFIXES
  * Allow only specific Columns to be updated on Issue via API ([#9539](https://github.com/go-gitea/gitea/pull/9539)) ([#9580](https://github.com/go-gitea/gitea/pull/9580))
  * Add ErrReactionAlreadyExist error ([#9550](https://github.com/go-gitea/gitea/pull/9550)) ([#9564](https://github.com/go-gitea/gitea/pull/9564))
  * Fix bug when migrating from API ([#8631](https://github.com/go-gitea/gitea/pull/8631)) ([#9563](https://github.com/go-gitea/gitea/pull/9563))
  * Use default avatar for ghost user ([#9536](https://github.com/go-gitea/gitea/pull/9536)) ([#9537](https://github.com/go-gitea/gitea/pull/9537))
  * Fix repository issues pagination bug when filtering by more than one label ([#9512](https://github.com/go-gitea/gitea/pull/9512)) ([#9528](https://github.com/go-gitea/gitea/pull/9528))
  * Fix deleted branch not removed when pushing the branch again ([#9516](https://github.com/go-gitea/gitea/pull/9516)) ([#9524](https://github.com/go-gitea/gitea/pull/9524))
  * Fix missing repository status when migrating repository via API ([#9511](https://github.com/go-gitea/gitea/pull/9511))
  * Trigger webhook when deleting a branch after merging a PR ([#9510](https://github.com/go-gitea/gitea/pull/9510))
  * Fix pagination on /repos/{owner}/{repo}/git/trees/{sha} API endpoint ([#9482](https://github.com/go-gitea/gitea/pull/9482))
  * Fix NewCommitStatus ([#9434](https://github.com/go-gitea/gitea/pull/9434)) ([#9435](https://github.com/go-gitea/gitea/pull/9435))
  * Use OriginalURL instead of CloneAddr in migration logging ([#9418](https://github.com/go-gitea/gitea/pull/9418)) ([#9420](https://github.com/go-gitea/gitea/pull/9420))
  * Fix Slack webhook payload title generation to work with Mattermost ([#9404](https://github.com/go-gitea/gitea/pull/9404))
  * DefaultBranch needs to be prefixed by BranchPrefix ([#9356](https://github.com/go-gitea/gitea/pull/9356)) ([#9359](https://github.com/go-gitea/gitea/pull/9359))
  * Fix issue indexer not triggered when migrating a repository ([#9333](https://github.com/go-gitea/gitea/pull/9333))
  * Fix bug that release attachment files not deleted when deleting repository ([#9322](https://github.com/go-gitea/gitea/pull/9322)) ([#9329](https://github.com/go-gitea/gitea/pull/9329))
  * Fix migration releases ([#9319](https://github.com/go-gitea/gitea/pull/9319)) ([#9326](https://github.com/go-gitea/gitea/pull/9326)) ([#9328](https://github.com/go-gitea/gitea/pull/9328))
  * Fix File Edit: Author/Committer interchanged ([#9297](https://github.com/go-gitea/gitea/pull/9297)) ([#9300](https://github.com/go-gitea/gitea/pull/9300))
