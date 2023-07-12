---
date: 2020-10-01T04:00:00+00:00
authors: "jolheiser"
title: "Gitea 1.12.5 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.12.5.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [25](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.12.5+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.12.5/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

<!--more-->

## Changelog

## [1.12.5](https://github.com/go-gitea/gitea/releases/tag/v1.12.5) - 2020-10-01

* ENHANCEMENTS
  * gitea dump: include version & Check InstallLock ([#12760](https://github.com/go-gitea/gitea/pull/12760)) ([#12762](https://github.com/go-gitea/gitea/pull/12762))
* BUGFIXES
  * Allow U2F with default settings for gitea in subpath ([#12990](https://github.com/go-gitea/gitea/pull/12990)) ([#13001](https://github.com/go-gitea/gitea/pull/13001))
  * Prevent empty div when editing comment ([#12404](https://github.com/go-gitea/gitea/pull/12404)) ([#12991](https://github.com/go-gitea/gitea/pull/12991))
  * On mirror update also update address in DB ([#12964](https://github.com/go-gitea/gitea/pull/12964)) ([#12967](https://github.com/go-gitea/gitea/pull/12967))
  * Allow extended config on cron settings ([#12939](https://github.com/go-gitea/gitea/pull/12939)) ([#12943](https://github.com/go-gitea/gitea/pull/12943))
  * Open transaction when adding Avatar email-hash pairs to the DB ([#12577](https://github.com/go-gitea/gitea/pull/12577)) ([#12940](https://github.com/go-gitea/gitea/pull/12940))
  * Fix internal server error from ListUserOrgs API ([#12910](https://github.com/go-gitea/gitea/pull/12910)) ([#12915](https://github.com/go-gitea/gitea/pull/12915))
  * Update only the repository columns that need updating ([#12900](https://github.com/go-gitea/gitea/pull/12900)) ([#12912](https://github.com/go-gitea/gitea/pull/12912))
  * Fix panic when adding long comment ([#12892](https://github.com/go-gitea/gitea/pull/12892)) ([#12894](https://github.com/go-gitea/gitea/pull/12894))
  * Add size limit for content of comment on action ui ([#12881](https://github.com/go-gitea/gitea/pull/12881)) ([#12890](https://github.com/go-gitea/gitea/pull/12890))
  * Convert User expose ID each time ([#12855](https://github.com/go-gitea/gitea/pull/12855)) ([#12883](https://github.com/go-gitea/gitea/pull/12883))
  * Support slashes in release tags ([#12864](https://github.com/go-gitea/gitea/pull/12864)) ([#12882](https://github.com/go-gitea/gitea/pull/12882))
  * Add missing information to CreateRepo API endpoint ([#12848](https://github.com/go-gitea/gitea/pull/12848)) ([#12867](https://github.com/go-gitea/gitea/pull/12867))
  * On Migration respect old DefaultBranch ([#12843](https://github.com/go-gitea/gitea/pull/12843)) ([#12858](https://github.com/go-gitea/gitea/pull/12858))
  * Fix notifications page links ([#12838](https://github.com/go-gitea/gitea/pull/12838)) ([#12853](https://github.com/go-gitea/gitea/pull/12853))
  * Stop cloning unnecessarily on PR update ([#12839](https://github.com/go-gitea/gitea/pull/12839)) ([#12852](https://github.com/go-gitea/gitea/pull/12852))
  * Escape more things that are passed through str2html ([#12622](https://github.com/go-gitea/gitea/pull/12622)) ([#12850](https://github.com/go-gitea/gitea/pull/12850))
  * Remove double escape on labels addition in comments ([#12809](https://github.com/go-gitea/gitea/pull/12809)) ([#12810](https://github.com/go-gitea/gitea/pull/12810))
  * Fix "only mail on mention" bug ([#12775](https://github.com/go-gitea/gitea/pull/12775)) ([#12789](https://github.com/go-gitea/gitea/pull/12789))
  * Fix yet another bug with diff file names ([#12771](https://github.com/go-gitea/gitea/pull/12771)) ([#12776](https://github.com/go-gitea/gitea/pull/12776))
  * RepoInit Respect AlternateDefaultBranch ([#12746](https://github.com/go-gitea/gitea/pull/12746)) ([#12751](https://github.com/go-gitea/gitea/pull/12751))
  * Fix Avatar Resize (resize algo NearestNeighbor -> Bilinear) ([#12745](https://github.com/go-gitea/gitea/pull/12745)) ([#12750](https://github.com/go-gitea/gitea/pull/12750))
