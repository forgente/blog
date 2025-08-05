---
date: 2025-08-04T17:18:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.24.4 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.24.4
---

We are excited to announce the release of **Gitea version 1.24.4**!

This release includes [9 merged pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.24.4+is%3Amerged), thanks to the amazing contributions from our community.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.24.4/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.24.4](https://github.com/go-gitea/gitea/releases/tag/1.24.4) - 2025-08-03

* BUGFIXES
  * Fix various bugs (1.24) (#35186)
  * Fix migrate input box bug (#35166) (#35171)
  * Only hide dropzone when no files have been uploaded (#35156) (#35167)
  * Fix review comment/dimiss comment x reference can be refereced back (#35094) (#35099)
  * Fix submodule nil check (#35096) (#35098)
* MISC
  * Don't use full-file highlight when there is a git diff textconv (#35114) (#35119)
  * Increase gap on latest commit (#35104) (#35113)

## Contributors

* [@bartvdbraak](https://github.com/bartvdbraak)
* [@lunny](https://github.com/lunny)
* [@silverwind](https://github.com/silverwind)
* [@techknowlogick](https://github.com/techknowlogick)
* [@wxiaoguang](https://github.com/wxiaoguang)
