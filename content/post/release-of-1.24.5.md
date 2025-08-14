---
date: 2025-08-13T11:43:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.24.5 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.24.5
---

We are excited to announce the release of **Gitea version 1.24.5**!

This release includes [9 merged pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.24.5+is%3Amerged), thanks to the amazing contributions from our community.

## Security

In this release, the official binaries and images have been compiled with Golang 1.24.6, addressing the following security vulnerabilities:

- CVE-2025-4790 os/exec: LookPath may return unexpected paths
- CVE-2025-47907 database/sql: incorrect results returned from Rows.Scan

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.24.5/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.24.5](https://github.com/go-gitea/gitea/releases/tag/v1.24.5) - 2025-08-12

* BUGFIXES
  * Fix a bug where lfs gc never worked. ([#35198](https://github.com/go-gitea/gitea/pull/35198)) ([#35255](https://github.com/go-gitea/gitea/pull/35255))
  * Reload issue when sending webhook to make num comments is right. ([#35243](https://github.com/go-gitea/gitea/pull/35243)) ([#35248](https://github.com/go-gitea/gitea/pull/35248))
  * Fix bug when review pull request commits ([#35192](https://github.com/go-gitea/gitea/pull/35192)) ([#35246](https://github.com/go-gitea/gitea/pull/35246))
* MISC
  * Vertically center "Show Resolved" ([#35211](https://github.com/go-gitea/gitea/pull/35211)) ([#35218](https://github.com/go-gitea/gitea/pull/35218))

## Contributors

* [@lunny](https://github.com/lunny)
* [@silverwind](https://github.com/silverwind)
