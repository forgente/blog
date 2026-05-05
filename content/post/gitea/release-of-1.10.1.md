---
date: 2019-12-05T12:00:00+00:00
authors: "jolheiser"
title: "Gitea 1.10.1 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.10.1"
---

We are proud to present the release of Gitea version 1.10.1. 

We have merged [19](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.10.1+is%3Aclosed) pull requests to release this version. 

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.10.1/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

* BUGFIXES
  * Fix max length check and limit in multiple repo forms ([#9148](https://github.com/go-gitea/gitea/pull/9148)) ([#9204](https://github.com/go-gitea/gitea/pull/9204))
  * Properly fix displaying virtual session provider in admin panel ([#9137](https://github.com/go-gitea/gitea/pull/9137)) ([#9203](https://github.com/go-gitea/gitea/pull/9203))
  * Upgrade levelqueue to 0.1.0 ([#9192](https://github.com/go-gitea/gitea/pull/9192)) ([#9199](https://github.com/go-gitea/gitea/pull/9199))
  * Fix panic when diff ([#9187](https://github.com/go-gitea/gitea/pull/9187)) ([#9193](https://github.com/go-gitea/gitea/pull/9193))
  * Smtp logger configuration sendTos should be an array ([#9154](https://github.com/go-gitea/gitea/pull/9154)) ([#9157](https://github.com/go-gitea/gitea/pull/9157))
  * Always Show Password Field on Link Account Sign-in Page ([#9150](https://github.com/go-gitea/gitea/pull/9150))
  * Create PR on Current Repository by Default ([#8670](https://github.com/go-gitea/gitea/pull/8670)) ([#9141](https://github.com/go-gitea/gitea/pull/9141))
  * Fix race on indexer ([#9136](https://github.com/go-gitea/gitea/pull/9136)) ([#9139](https://github.com/go-gitea/gitea/pull/9139))
  * Fix reCAPTCHA URL ([#9119](https://github.com/go-gitea/gitea/pull/9119))
  * Hide migrated credentials ([#9098](https://github.com/go-gitea/gitea/pull/9098))
  * Update golang.org/x/crypto vendor to use acme v2 ([#9056](https://github.com/go-gitea/gitea/pull/9056)) ([#9085](https://github.com/go-gitea/gitea/pull/9085))
  * Fix password checks on admin create/edit user ([#9076](https://github.com/go-gitea/gitea/pull/9076)) ([#9081](https://github.com/go-gitea/gitea/pull/9081))
  * Fix add search as a reserved username ([#9063](https://github.com/go-gitea/gitea/pull/9063)) ([#9065](https://github.com/go-gitea/gitea/pull/9065))
  * Fix permission checks for close/reopen from commit ([#8875](https://github.com/go-gitea/gitea/pull/8875)) ([#9033](https://github.com/go-gitea/gitea/pull/9033))
  * Ensure Written is set in GZIP ProxyResponseWriter ([#9018](https://github.com/go-gitea/gitea/pull/9018)) ([#9025](https://github.com/go-gitea/gitea/pull/9025))
  * Fix broken link to branch from issue list ([#9003](https://github.com/go-gitea/gitea/pull/9003)) ([#9021](https://github.com/go-gitea/gitea/pull/9021))
  * Fix wrong system notice when repository is empty ([#9020](https://github.com/go-gitea/gitea/pull/9020))
  * Shadow password correctly for session config ([#8984](https://github.com/go-gitea/gitea/pull/8984)) ([#9002](https://github.com/go-gitea/gitea/pull/9002))
