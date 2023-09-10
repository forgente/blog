---
date: 2022-05-24T14:48:58+07:00
authors: "lunny"
title: "Gitea 1.16.8 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.16.8"
---

We are proud to present the release of Gitea version 1.16.8.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [17](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.16.8+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.16.8/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.16.8](https://github.com/go-gitea/gitea/releases/tag/v1.16.8) - 2022-05-24

* ENHANCEMENTS
  * Add doctor check/fix for bogus action rows ([#19656](https://github.com/go-gitea/gitea/pull/19656)) ([#19669](https://github.com/go-gitea/gitea/pull/19669))
  * Make .cs highlighting legible on dark themes. ([#19604](https://github.com/go-gitea/gitea/pull/19604)) ([#19605](https://github.com/go-gitea/gitea/pull/19605))
* BUGFIXES
  * Fix oauth setting list bug ([#19681](https://github.com/go-gitea/gitea/pull/19681))
  * Delete user related oauth stuff on user deletion too ([#19677](https://github.com/go-gitea/gitea/pull/19677)) ([#19680](https://github.com/go-gitea/gitea/pull/19680))
  * Fix new release from tags list UI ([#19670](https://github.com/go-gitea/gitea/pull/19670)) ([#19673](https://github.com/go-gitea/gitea/pull/19673))
  * Prevent NPE when checking repo units if the user is nil ([#19625](https://github.com/go-gitea/gitea/pull/19625)) ([#19630](https://github.com/go-gitea/gitea/pull/19630))
  * GetFeeds must always discard actions with dangling repo_id ([#19598](https://github.com/go-gitea/gitea/pull/19598)) ([#19629](https://github.com/go-gitea/gitea/pull/19629))
  * Call MultipartForm.RemoveAll when request finishes ([#19606](https://github.com/go-gitea/gitea/pull/19606)) ([#19607](https://github.com/go-gitea/gitea/pull/19607))
  * Avoid MoreThanOne error when creating a branch whose name conflicts with other ref names ([#19557](https://github.com/go-gitea/gitea/pull/19557)) ([#19591](https://github.com/go-gitea/gitea/pull/19591))
  * Fix sending empty notifications ([#19589](https://github.com/go-gitea/gitea/pull/19589)) ([#19590](https://github.com/go-gitea/gitea/pull/19590))
  * Ignore DNS error when doing migration allow/block check ([#19566](https://github.com/go-gitea/gitea/pull/19566)) ([#19567](https://github.com/go-gitea/gitea/pull/19567))
  * Fix issue overview for teams ([#19652](https://github.com/go-gitea/gitea/pull/19652)) ([#19653](https://github.com/go-gitea/gitea/pull/19653))

<!-- Changelog Details -->
