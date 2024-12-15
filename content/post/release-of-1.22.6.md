---
date: 2024-12-12T23:43:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.22.6 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.22.6
---

We are excited to announce the release of **Gitea version 1.22.6**.

This is an urgent update because the security bug fixes in version [1.22.5](https://blog.gitea.com/release-of-1.22.5) released yesterday, which only addressed the Golang crypto library upgrade, are not sufficient. We strongly recommend all users upgrade to the latest version as soon as possible to ensure full protection.

To deliver this release, we have successfully merged [4 pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.22.6+is%3Amerged).

<!-- Security Thanks! -->

As mentioned, the security fixes in 1.22.5 is not enough. More context: Patching PublicKeyCallback for CVE-2024-45337  https://github.com/gliderlabs/ssh/issues/242 .

A special thanks to [@wxiaoguang](https://github.com/wxiaoguang) for their prompt efforts in addressing these issues and ensuring the security of Gitea users.

## How to Update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.22.6/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.22.6](https://github.com/go-gitea/gitea/releases/tag/v1.22.6) - 2024-12-12

* SECURITY
  * Fix misuse of PublicKeyCallback([#32810](https://github.com/go-gitea/gitea/pull/32810))
* BUGFIXES
  * Fix lfs migration ([#32812](https://github.com/go-gitea/gitea/pull/32812)) ([#32818](https://github.com/go-gitea/gitea/pull/32818))
  * Add missing two sync feed for refs/pull ([#32815](https://github.com/go-gitea/gitea/pull/32815))
* TESTING
  * Avoid MacOS keychain dialog in integration tests ([#32813](https://github.com/go-gitea/gitea/pull/32813)) ([#32816](https://github.com/go-gitea/gitea/pull/32816))

## Contributors

* [@bohde](https://github.com/hiifong)
* [@hiifong](https://github.com/hiifong)
* [@lunny](https://github.com/lunny)
* [@wxiaoguang](https://github.com/wxiaoguang)
