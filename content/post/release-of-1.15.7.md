---
date: 2021-12-03T22:43:54+07:00
authors: "lunny"
title: "Gitea 1.15.7 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.15.7"
---

We are proud to present the release of Gitea version 1.15.7.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [28](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.15.7+is%3Amerged) pull requests to release this version.

:exclamation: We remind users that a bug was discovered with `gitea dump` in 1.14.3–1.14.6 and 1.15.0. Database dumps from these versions cause
broken fields in the `repo_unit` and `login_source` tables causing the issue identified in [#16961](https://github.com/go-gitea/gitea/pull/16961). 
Users on 1.14.x must upgrade to 1.14.7 before running `gitea dump`. If this is not possible and you are affected [#17137](https://github.com/go-gitea/gitea/pull/17137)
provides a new `gitea doctor` command to fix the `repo_unit` issue:

```
gitea doctor --fix --run fix-broken-repo-units
```

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.15.7/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.15.7](https://github.com/go-gitea/gitea/releases/tag/v1.15.7) - 2021-12-03

* ENHANCEMENTS
  * Only allow webhook to send requests to allowed hosts ([#17482](https://github.com/go-gitea/gitea/pull/17482)) ([#17510](https://github.com/go-gitea/gitea/pull/17510))
  * Fix login redirection links ([#17451](https://github.com/go-gitea/gitea/pull/17451)) ([#17473](https://github.com/go-gitea/gitea/pull/17473))
* BUGFIXES
  * Fix database inconsistent when admin change user email ([#17549](https://github.com/go-gitea/gitea/pull/17549)) ([#17840](https://github.com/go-gitea/gitea/pull/17840))
  * Use correct user on releases ([#17806](https://github.com/go-gitea/gitea/pull/17806)) ([#17818](https://github.com/go-gitea/gitea/pull/17818))
  * Fix commit count in tag view ([#17698](https://github.com/go-gitea/gitea/pull/17698)) ([#17790](https://github.com/go-gitea/gitea/pull/17790))
  * Fix close issue but time watcher still running ([#17643](https://github.com/go-gitea/gitea/pull/17643)) ([#17761](https://github.com/go-gitea/gitea/pull/17761))
  * Fix Migrate Description ([#17692](https://github.com/go-gitea/gitea/pull/17692)) ([#17727](https://github.com/go-gitea/gitea/pull/17727))
  * Fix bug when project board get open issue number ([#17703](https://github.com/go-gitea/gitea/pull/17703)) ([#17726](https://github.com/go-gitea/gitea/pull/17726))
  * Return 400 but not 500 when request archive with wrong format ([#17691](https://github.com/go-gitea/gitea/pull/17691)) ([#17700](https://github.com/go-gitea/gitea/pull/17700))
  * Fix bug when read mysql database max lifetime ([#17682](https://github.com/go-gitea/gitea/pull/17682)) ([#17690](https://github.com/go-gitea/gitea/pull/17690))
  * Fix database deadlock when update issue labels ([#17649](https://github.com/go-gitea/gitea/pull/17649)) ([#17665](https://github.com/go-gitea/gitea/pull/17665))
  * Fix bug on detect issue/comment writer ([#17592](https://github.com/go-gitea/gitea/pull/17592))
  * Remove appSubUrl from pasted images ([#17572](https://github.com/go-gitea/gitea/pull/17572)) ([#17588](https://github.com/go-gitea/gitea/pull/17588))
  * Make `ParsePatch` more robust ([#17573](https://github.com/go-gitea/gitea/pull/17573)) ([#17580](https://github.com/go-gitea/gitea/pull/17580))
  * Fix stats upon searching issues ([#17566](https://github.com/go-gitea/gitea/pull/17566)) ([#17578](https://github.com/go-gitea/gitea/pull/17578))
  * Escape issue titles in comments list ([#17555](https://github.com/go-gitea/gitea/pull/17555)) ([#17556](https://github.com/go-gitea/gitea/pull/17556))
  * Fix zero created time bug on commit api ([#17546](https://github.com/go-gitea/gitea/pull/17546)) ([#17547](https://github.com/go-gitea/gitea/pull/17547))
  * Fix database keyword quote problem on migration v161 ([#17522](https://github.com/go-gitea/gitea/pull/17522)) ([#17523](https://github.com/go-gitea/gitea/pull/17523))
  * Fix email with + when active ([#17518](https://github.com/go-gitea/gitea/pull/17518)) ([#17520](https://github.com/go-gitea/gitea/pull/17520))
  * Stop double encoding blame commit messages ([#17498](https://github.com/go-gitea/gitea/pull/17498)) ([#17500](https://github.com/go-gitea/gitea/pull/17500))
  * Quote the table name in CountOrphanedObjects ([#17487](https://github.com/go-gitea/gitea/pull/17487)) ([#17488](https://github.com/go-gitea/gitea/pull/17488))
  * Run Migrate in Install rather than just SyncTables ([#17475](https://github.com/go-gitea/gitea/pull/17475)) ([#17486](https://github.com/go-gitea/gitea/pull/17486))
* BUILD
  * Fix golangci-lint warnings (#17598 et al) ([#17668](https://github.com/go-gitea/gitea/pull/17668))
* MISC
  * Preserve color when inverting emojis ([#17797](https://github.com/go-gitea/gitea/pull/17797)) ([#17799](https://github.com/go-gitea/gitea/pull/17799))

<!-- Changelog Details -->
