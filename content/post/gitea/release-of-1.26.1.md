---
date: 2026-04-21T10:36:00-8:00
authors: 
  - "bircni"
title: "Gitea 1.26.1 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.26.1
---

We are excited to announce the release of **Gitea 1.26.1**! We strongly recommend all users upgrade to this version, as it includes important fixes that address several significant issues since 1.26.0 and improves overall stability.

This release includes [22 merged pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.26.1+is%3Amerged), thanks to the amazing contributions from our community.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.26.1/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.26.1](https://github.com/go-gitea/gitea/releases/tag/v1.26.1) - 2026-04-21

* BUGFIXES
  * Enhance GetActionWorkflow to support fallback references ([#37283](https://github.com/go-gitea/gitea/pull/37283))
  * Fix container auth for public instance ([#37294](https://github.com/go-gitea/gitea/pull/37294))
  * Fix Mermaid diagrams failing when node labels contain line breaks ([#37299](https://github.com/go-gitea/gitea/pull/37299))
  * Fix vite manifest update masking build errors ([#37310](https://github.com/go-gitea/gitea/pull/37310))
  * Fix button layout shift when collapsing file tree in editor ([#37375](https://github.com/go-gitea/gitea/pull/37375))
  * fix: commit status reporting ([#37386](https://github.com/go-gitea/gitea/pull/37386))
  * Fix org team assignee/reviewer lookups for team member permissions ([#37391](https://github.com/go-gitea/gitea/pull/37391))
  * Fix repo init README EOL ([#37399](https://github.com/go-gitea/gitea/pull/37399))
  * fix: dump with default zip type produces uncompressed zip ([#37402](https://github.com/go-gitea/gitea/pull/37402))
  * Fix AppFullLink ([#37328](https://github.com/go-gitea/gitea/pull/37328))
  * Fix bug when accessing user badges ([#37329](https://github.com/go-gitea/gitea/pull/37329))
  * Fix actions concurrency groups cross-branch leak ([#37331](https://github.com/go-gitea/gitea/pull/37331))
  * Fix an issue where changing an organization‘s visibility caused problems when users had forked its repositories. ([#37344](https://github.com/go-gitea/gitea/pull/37344))
  * fix(oauth): Error on auth sources with spaces ([#37332](https://github.com/go-gitea/gitea/pull/37332))
  * When the requested arch rpm is missing fall back to noarch ([#37339](https://github.com/go-gitea/gitea/pull/37339))
  * Fix URL related escaping for oauth2 ([#37340](https://github.com/go-gitea/gitea/pull/37340))
  * Use modern `git update-index --cacheinfo` syntax to support more file names ([#37343](https://github.com/go-gitea/gitea/pull/37343))
  * fix: use TriggerEvent instead of Event in workflow runs API response for scheduled runs ([#37360](https://github.com/go-gitea/gitea/pull/37360))

* ENHANCEMENTS
  * Add event.schedule context for schedule actions task ([#37348](https://github.com/go-gitea/gitea/pull/37348))

* DOCS
  * Add URL to `Learn more about blocking a user.` ([#37367](https://github.com/go-gitea/gitea/pull/37367))

## Contributors

* [@bircni](https://github.com/bircni)
* [@bytedream](https://github.com/bytedream)
* [@chethenry](https://github.com/chethenry)
* [@lunny](https://github.com/lunny)
* [@prettysunflower](https://github.com/prettysunflower)
* [@KalashThakare](https://github.com/KalashThakare)
* [@pisarz77](https://github.com/pisarz77)
* [@silverwind](https://github.com/silverwind)
* [@wxiaoguang](https://github.com/wxiaoguang)

