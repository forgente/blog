---
date: 2019-10-30T12:00:00+00:00
authors: "jolheiser"
title: "Gitea 1.9.5 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.9.5"
---

We are proud to present the release of Gitea version 1.9.5. 

We have merged [19](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.9.5+is%3Aclosed) pull requests to release this version. 

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.9.5/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

* BREAKING
  * Hide some user information via API if user doesn't have enough permission ([#8655](https://github.com/go-gitea/gitea/pull/8655)) ([#8658](https://github.com/go-gitea/gitea/pull/8658))
* BUGFIXES
  * Fix milestone close timestamp ([#8728](https://github.com/go-gitea/gitea/pull/8728)) ([#8731](https://github.com/go-gitea/gitea/pull/8731))
  * Fix deadline on update issue or PR via API ([#8699](https://github.com/go-gitea/gitea/pull/8699))
  * Fix 'New Issue Missing Milestone Comment' ([#8678](https://github.com/go-gitea/gitea/pull/8678)) ([#8682](https://github.com/go-gitea/gitea/pull/8682))
  * Fix 500 when getting user as unauthenticated user ([#8653](https://github.com/go-gitea/gitea/pull/8653)) ([#8662](https://github.com/go-gitea/gitea/pull/8662))
  * Use AppSubUrl for more redirections ([#8647](https://github.com/go-gitea/gitea/pull/8647)) ([#8652](https://github.com/go-gitea/gitea/pull/8652))
  * Add SubURL to redirect path ([#8632](https://github.com/go-gitea/gitea/pull/8632)) ([#8634](https://github.com/go-gitea/gitea/pull/8634)) ([#8640](https://github.com/go-gitea/gitea/pull/8640))
  * Fix #8582 by handling empty repos ([#8587](https://github.com/go-gitea/gitea/pull/8587)) ([#8593](https://github.com/go-gitea/gitea/pull/8593))
  * Fix bug on pull requests when transfer head repository ([#8571](https://github.com/go-gitea/gitea/pull/8571))
  * Add missed close in ServeBlobLFS ([#8527](https://github.com/go-gitea/gitea/pull/8527)) ([#8543](https://github.com/go-gitea/gitea/pull/8543))
  * Return false if provided branch name is empty for IsBranchExist ([#8485](https://github.com/go-gitea/gitea/pull/8485)) ([#8492](https://github.com/go-gitea/gitea/pull/8492))
  * Create .ssh dir as necessary ([#8369](https://github.com/go-gitea/gitea/pull/8369)) ([#8486](https://github.com/go-gitea/gitea/pull/8486)) ([#8489](https://github.com/go-gitea/gitea/pull/8489))
  * Restore functionality for early gits ([#7775](https://github.com/go-gitea/gitea/pull/7775)) ([#8476](https://github.com/go-gitea/gitea/pull/8476))
  * Add check for empty set when dropping indexes during migration ([#8475](https://github.com/go-gitea/gitea/pull/8475))
  * Ensure Request Body Readers are closed in LFS server ([#8454](https://github.com/go-gitea/gitea/pull/8454)) ([#8459](https://github.com/go-gitea/gitea/pull/8459))
  * Ensure that LFS files are relative to the LFS content path ([#8455](https://github.com/go-gitea/gitea/pull/8455)) ([#8458](https://github.com/go-gitea/gitea/pull/8458))
* SECURITY
  * Ignore mentions for users with no access ([#8395](https://github.com/go-gitea/gitea/pull/8395)) ([#8484](https://github.com/go-gitea/gitea/pull/8484))
* TESTING
  * Update heatmap fixtures to restore tests ([#8615](https://github.com/go-gitea/gitea/pull/8615)) ([#8617](https://github.com/go-gitea/gitea/pull/8617))
