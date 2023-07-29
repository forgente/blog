---
date: 2019-08-22T10:50:00+01:00
authors: "jolheiser"
title: "Gitea 1.9.2 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.9.2. 

We have merged [7](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.9.2+is%3Aclosed) pull requests to release this version. 

**This release contains two security fixes, so we highly recommend updating.**

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.9.2/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would like to give a special thanks to Bruno Pagani ([@ArchangeGabriel](https://github.com/ArchangeGabriel)) for reporting the security issue that has been patched in this release.

We'd like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

* BUGFIXES
  * Fix wrong sender when send slack webhook ([#7918](https://github.com/go-gitea/gitea/pull/7918)) ([#7924](https://github.com/go-gitea/gitea/pull/7924))
  * Upload support text/plain; charset=utf8 ([#7899](https://github.com/go-gitea/gitea/pull/7899))
  * Lfs/lock: round locked_at timestamp to second ([#7872](https://github.com/go-gitea/gitea/pull/7872)) ([#7875](https://github.com/go-gitea/gitea/pull/7875))
  * Fix non existent milestone with 500 error ([#7867](https://github.com/go-gitea/gitea/pull/7867)) ([#7873](https://github.com/go-gitea/gitea/pull/7873))
* SECURITY
  * Fix No PGP signature on 1.9.1 tag ([#7874](https://github.com/go-gitea/gitea/pull/7874))
  * Release built with go 1.12.9 to fix security fixes in golang std lib, ref: [https://groups.google.com/forum/#!msg/golang-announce/oeMaeUnkvVE/a49yvTLqAAAJ](https://groups.google.com/forum/#!msg/golang-announce/oeMaeUnkvVE/a49yvTLqAAAJ)
* ENHANCEMENT
  * Fix pull creation with empty changes ([#7920](https://github.com/go-gitea/gitea/pull/7920)) ([#7926](https://github.com/go-gitea/gitea/pull/7926))
* BUILD
  * Drone/docker: prepare multi-arch release + provide arm64 image ([#7571](https://github.com/go-gitea/gitea/pull/7571)) ([#7884](https://github.com/go-gitea/gitea/pull/7884))
