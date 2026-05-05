---
date: 2025-10-25T21:04:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.24.7 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.24.7
---

We are excited to announce the release of **Gitea version 1.24.7**! We strongly recommend all users upgrade to this version for improved stability and security.

This release includes [7 merged pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.24.7+is%3Amerged), thanks to the amazing contributions from our community.

## Security

This release addresses several important security vulnerabilities:

- LFS Authentication Bypass

A user without valid credentials could upload or download LFS files by submitting a malformed JWT token.
Thanks to Scott Tolley from Black Duck for reporting this issue, and to @wxiaoguang for the fix in https://github.com/go-gitea/gitea/pull/35708.

- Arbitrary File Access via Malicious Template Repositories

An authenticated user could create a crafted template repository that processes arbitrary files on the filesystem.
Thanks to [Clément Hamada](https://github.com/ClemaX) for reporting this issue, and to @wxiaoguang for the fix in https://github.com/go-gitea/gitea/pull/35708.

- Invalidated OAuth2 Tokens Still Accepted

An invalidated OAuth2 token could incorrectly pass validation. Thanks to TIA for reporting this issue, and to @lunny for the fix in https://github.com/go-gitea/gitea/pull/35655.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.24.7/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.24.7](https://github.com/go-gitea/gitea/releases/tag/v1.24.7) - 2025-09-12

* SECURITY
  * Refactor legacy code, fix LFS auth bypass, fix symlink bypass ([#35708](https://github.com/go-gitea/gitea/pull/35708)) ([#35713](https://github.com/go-gitea/gitea/pull/35713))
  * Fix password leak in log messages ([#35584](https://github.com/go-gitea/gitea/pull/35584)) ([#35665](https://github.com/go-gitea/gitea/pull/35665))
  * Fix a missed return in OAuth2 ([#35655](https://github.com/go-gitea/gitea/pull/35655)) ([#35671](https://github.com/go-gitea/gitea/pull/35671))
* BUGFIXES
  * Fix inputing review comment will remove reviewer ([#35591](https://github.com/go-gitea/gitea/pull/35591)) ([#35664](https://github.com/go-gitea/gitea/pull/35664))
* TESTING
  * Mock external service in hcaptcha TestCaptcha ([#35604](https://github.com/go-gitea/gitea/pull/35604)) ([#35663](https://github.com/go-gitea/gitea/pull/35663))
  * Fix build ([#35669](https://github.com/go-gitea/gitea/pull/35669))

## Contributors

* [@lunny](https://github.com/lunny)
* [@lynxplay](https://github.com/lynxplay)
* [@shashank-netapp](https://github.com/shashank-netapp)
* [@silverwind](https://github.com/silverwind)
* [@wxiaoguang](https://github.com/wxiaoguang)
