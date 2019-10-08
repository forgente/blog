---
date: "2019-010-08T12:00:00+00:00" 
author: "jolheiser"
title: "Gitea 1.9.4 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.9.4. 

We have merged [24](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.9.4+is%3Aclosed) pull requests to release this version. 

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.9.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

* BUGFIXES
  * Highlight issue references ([#8101](https://github.com/go-gitea/gitea/pull/8101)) ([#8404](https://github.com/go-gitea/gitea/pull/8404))
  * Fix bug when migrating a private repository ([#7917](https://github.com/go-gitea/gitea/pull/7917)) ([#8403](https://github.com/go-gitea/gitea/pull/8403))
  * Change general form binding to gogs form ([#8334](https://github.com/go-gitea/gitea/pull/8334)) ([#8402](https://github.com/go-gitea/gitea/pull/8402))
  * Fix editor commit to new branch if PR disabled ([#8375](https://github.com/go-gitea/gitea/pull/8375)) ([#8401](https://github.com/go-gitea/gitea/pull/8401))
  * Fix milestone num_issues ([#8221](https://github.com/go-gitea/gitea/pull/8221)) ([#8400](https://github.com/go-gitea/gitea/pull/8400))
  * Allow users with explicit read access to give approvals ([#8398](https://github.com/go-gitea/gitea/pull/8398))
  * Fix commit status in PR #8316 and PR #8321 ([#8339](https://github.com/go-gitea/gitea/pull/8339))
  * Fix API for edit and delete release attachment ([#8290](https://github.com/go-gitea/gitea/pull/8290))
  * Fix assets on release webhook ([#8283](https://github.com/go-gitea/gitea/pull/8283))
  * Fix release API URL generation ([#8239](https://github.com/go-gitea/gitea/pull/8239))
  * Allow registration when button is hidden ([#8238](https://github.com/go-gitea/gitea/pull/8238))
  * MS Teams webhook misses commit messages (backport v1.9) ([#8225](https://github.com/go-gitea/gitea/pull/8225))
  * Fix data race ([#8206](https://github.com/go-gitea/gitea/pull/8206))
  * Fix pull merge 500 error caused by git-fetch breaking behaviors ([#8194](https://github.com/go-gitea/gitea/pull/8194))
  * Fix the SSH config specification in the authorized_keys template ([#8193](https://github.com/go-gitea/gitea/pull/8193))
  * Fix reading git notes from nested trees ([#8189](https://github.com/go-gitea/gitea/pull/8189))
  * Fix team user api ([#8172](https://github.com/go-gitea/gitea/pull/8172)) ([#8188](https://github.com/go-gitea/gitea/pull/8188))
  * Add reviewers as participants ([#8124](https://github.com/go-gitea/gitea/pull/8124))
* BUILD
  * Use vendored go-swagger ([#8087](https://github.com/go-gitea/gitea/pull/8087)) ([#8165](https://github.com/go-gitea/gitea/pull/8165))
  * Fix version-validation for GO 1.13 (go-macaron/cors) ([#8389](https://github.com/go-gitea/gitea/pull/8389))
* MISC
  * Make show private icon when repo avatar set ([#8144](https://github.com/go-gitea/gitea/pull/8144)) ([#8175](https://github.com/go-gitea/gitea/pull/8175))
