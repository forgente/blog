---
date: 2019-09-08T10:53:00+01:00
authors: "lunny"
title: "Gitea 1.9.3 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.9.3. 

We have merged [11](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.9.3+is%3Aclosed) pull requests to release this version. 

**This release fixed go-get private repository bug with go1.13, so we highly recommend updating.**

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.9.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We'd like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

* BUGFIXES
  * Fix go get from a private repository with Go 1.13 ([#8100](https://github.com/go-gitea/gitea/pull/8100))
  * Strict name matching for Repository.GetTagID() ([#8082](https://github.com/go-gitea/gitea/pull/8082))
  * Avoid ambiguity of branch/directory names for the git-diff-tree command ([#8070](https://github.com/go-gitea/gitea/pull/8070))
  * Add change title notification for issues ([#8064](https://github.com/go-gitea/gitea/pull/8064))
  * Run CORS handler first for /api routes ([#7967](https://github.com/go-gitea/gitea/pull/7967)) ([#8053](https://github.com/go-gitea/gitea/pull/8053))
  * Evaluate emojis in commit messages in list view ([#8044](https://github.com/go-gitea/gitea/pull/8044))
  * Fix failed to synchronize tags to releases for repository ([#7990](https://github.com/go-gitea/gitea/pull/7900)) ([#7994](https://github.com/go-gitea/gitea/pull/7994))
  * Fix adding default Telegram webhook ([#7972](https://github.com/go-gitea/gitea/pull/7972)) ([#7992](https://github.com/go-gitea/gitea/pull/7992))
  * Abort synchronization from LDAP source if there is some error ([#7965](https://github.com/go-gitea/gitea/pull/7965))
  * Fix deformed emoji in commit message ([#8071](https://github.com/go-gitea/gitea/pull/8071))
* ENHANCEMENT
  * Keep blame view buttons sequence consistent with normal view when viewing a file ([#8007](https://github.com/go-gitea/gitea/pull/8007)) ([#8009](https://github.com/go-gitea/gitea/pull/8009))
