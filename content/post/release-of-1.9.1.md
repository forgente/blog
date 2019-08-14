---
date: "2019-08-14T10:50:00+01:00" 
author: "jolheiser"
title: "Gitea 1.9.1 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.9.1. 

We have merged [22](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.9.1+is%3Aclosed) pull requests to release this version. 

**This release contains two security fixes, so we highly recommend updating.**

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.9.1/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would like to give a special thanks to [zeripath](https://github.com/zeripath) for the security fix in this release.

We'd like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

* BREAKING
  * Add pagination for admin api get orgs and fix only list public orgs bug ([#7742](https://github.com/go-gitea/gitea/pull/7742)) ([#7752](https://github.com/go-gitea/gitea/pull/7752))
* SECURITY
  * Be more strict with git arguments ([#7715](https://github.com/go-gitea/gitea/pull/7715)) ([#7762](https://github.com/go-gitea/gitea/pull/7762))
  * Release built with go 1.12.8 to fix security fixes in golang std lib, ref: [https://groups.google.com/forum/#!topic/golang-nuts/fCQWxqxP8aA](https://groups.google.com/forum/#!topic/golang-nuts/fCQWxqxP8aA)
* BUGFIXES
  * Fix local runs of ssh-requiring integration tests ([#7855](https://github.com/go-gitea/gitea/pull/7855)) ([#7857](https://github.com/go-gitea/gitea/pull/7857))
  * Fix hook problem ([#7856](https://github.com/go-gitea/gitea/pull/7856)) ([#7754](https://github.com/go-gitea/gitea/pull/7754))
  * Use .ExpiredUnix.IsZero to display green color of forever valid gpg key ([#7850](https://github.com/go-gitea/gitea/pull/7850)) ([#7846](https://github.com/go-gitea/gitea/pull/7846))
  * Do not fetch all refs ([#7797](https://github.com/go-gitea/gitea/pull/7797)) ([#7837](https://github.com/go-gitea/gitea/pull/7837))
  * Fix duplicate call of webhook ([#7824](https://github.com/go-gitea/gitea/pull/7824)) ([#7821](https://github.com/go-gitea/gitea/pull/7821))
  * Enable switching to a different source branch when PR already exists ([#7823](https://github.com/go-gitea/gitea/pull/7823))
  * Rewrite existing repo units if setting is not included in api body ([#7811](https://github.com/go-gitea/gitea/pull/7811))
  * Prevent Commit Status and Message From Overflowing On Branch Page ([#7800](https://github.com/go-gitea/gitea/pull/7800)) ([#7808](https://github.com/go-gitea/gitea/pull/7808))
  * API: fix multiple bugs with statuses endpoints (Backport #7785) ([#7807](https://github.com/go-gitea/gitea/pull/7807))
  * Fix Slack webhook fork message (1.9 release backport) ([#7783](https://github.com/go-gitea/gitea/pull/7783))
  * Fix approvals counting ([#7757](https://github.com/go-gitea/gitea/pull/7757)) ([#7777](https://github.com/go-gitea/gitea/pull/7777))
  * Fix rename failed when rewrite public keys ([#7761](https://github.com/go-gitea/gitea/pull/7761)) ([#7769](https://github.com/go-gitea/gitea/pull/7769))
  * Fix dropTableColumns sqlite implementation ([#7710](https://github.com/go-gitea/gitea/pull/7710)) ([#7765](https://github.com/go-gitea/gitea/pull/7765))
  * Fix repo_index_status lingering when deleting a repository ([#7738](https://github.com/go-gitea/gitea/pull/7738))
  * Fix milestone completness calculation when migrating ([#7725](https://github.com/go-gitea/gitea/pull/7725)) ([#7732](https://github.com/go-gitea/gitea/pull/7732))
  * Fixes indexed repos keeping outdated indexes when files grow too large ([#7731](https://github.com/go-gitea/gitea/pull/7731))
  * Skip non-regular files (e.g. submodules) on repo indexing ([#7717](https://github.com/go-gitea/gitea/pull/7717))
  * Improve branches list performance and fix protected branch icon when no-login ([#7695](https://github.com/go-gitea/gitea/pull/7695)) ([#7704](https://github.com/go-gitea/gitea/pull/7704))
  * Correct wrong datetime format for git ([#7689](https://github.com/go-gitea/gitea/pull/7689)) ([#7690](https://github.com/go-gitea/gitea/pull/7690))
