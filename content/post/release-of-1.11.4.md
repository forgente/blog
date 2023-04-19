---
date: "2020-04-01T10:00:00+00:00"
author: "jolheiser"
title: "Gitea 1.11.4 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.11.4. (No, this isn't an April Fool's joke! :wink: )

We highly encourage users to update to this version for some important bug-fixes.

We have merged [12](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.11.4+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.11.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

## [1.11.4](https://github.com/go-gitea/gitea/releases/tag/v1.11.4) - 2020-04-01

* BUGFIXES
  * Only update merge_base if not already merged ([#10909](https://github.com/go-gitea/gitea/pull/10909))
  * Fix milestones too many SQL variables bug ([#10880](https://github.com/go-gitea/gitea/pull/10880)) ([#10904](https://github.com/go-gitea/gitea/pull/10904))
  * Protect against NPEs in notifications list ([#10879](https://github.com/go-gitea/gitea/pull/10879)) ([#10883](https://github.com/go-gitea/gitea/pull/10883))
  * Convert plumbing.ErrObjectNotFound to git.ErrNotExist in getCommit ([#10862](https://github.com/go-gitea/gitea/pull/10862)) ([#10868](https://github.com/go-gitea/gitea/pull/10868))
  * Convert plumbing.ErrReferenceNotFound to git.ErrNotExist in GetRefCommitID ([#10676](https://github.com/go-gitea/gitea/pull/10676)) ([#10797](https://github.com/go-gitea/gitea/pull/10797))
  * Account for empty lines in receive-hook message ([#10773](https://github.com/go-gitea/gitea/pull/10773)) ([#10784](https://github.com/go-gitea/gitea/pull/10784))
  * Fix bug on branch API ([#10767](https://github.com/go-gitea/gitea/pull/10767)) ([#10775](https://github.com/go-gitea/gitea/pull/10775))
  * Migrate to go-git/go-git v5.0.0 ([#10735](https://github.com/go-gitea/gitea/pull/10735)) ([#10753](https://github.com/go-gitea/gitea/pull/10753))
  * Fix hiding of fields in authorization source page ([#10734](https://github.com/go-gitea/gitea/pull/10734)) ([#10752](https://github.com/go-gitea/gitea/pull/10752))
  * Prevent default for linkAction ([#10742](https://github.com/go-gitea/gitea/pull/10742)) ([#10743](https://github.com/go-gitea/gitea/pull/10743))
