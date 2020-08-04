---
date: "2020-07-28T20:00:00+00:00"
author: "techknowlogick"
title: "Gitea 1.12.3 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.12.3.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [6](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.12.3+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.12.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

<!--more-->

## Changelog

## [1.12.3](https://github.com/go-gitea/gitea/releases/tag/v1.12.3) - 2020-07-28

* BUGFIXES
  * Don't change creation date when updating Release ([#12343](https://github.com/go-gitea/gitea/pull/12343)) ([#12351](https://github.com/go-gitea/gitea/pull/12351))
  * Show 404 page when release not found ([#12328](https://github.com/go-gitea/gitea/pull/12328)) ([#12332](https://github.com/go-gitea/gitea/pull/12332))
  * Fix emoji detection in certain cases ([#12320](https://github.com/go-gitea/gitea/pull/12320)) ([#12327](https://github.com/go-gitea/gitea/pull/12327))
  * Reduce emoji size ([#12317](https://github.com/go-gitea/gitea/pull/12317)) ([#12327](https://github.com/go-gitea/gitea/pull/12327))
  * Fix double-indirection bug in logging IDs ([#12294](https://github.com/go-gitea/gitea/pull/12294)) ([#12308](https://github.com/go-gitea/gitea/pull/12308))
  * Link to pull list page on sidebar when view pr ([#12256](https://github.com/go-gitea/gitea/pull/12256)) ([#12263](https://github.com/go-gitea/gitea/pull/12263))
  * Extend Notifications API and return pinned notifications by default ([#12164](https://github.com/go-gitea/gitea/pull/12164)) ([#12232](https://github.com/go-gitea/gitea/pull/12232))
