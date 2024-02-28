---
date: 2024-02-26T17:33:47+07:00
authors: 
  - "lunny"
title: "Gitea 1.21.7 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.21.7.

We highly encourage users to update to this version for some important bug-fixes, notably [#29354](https://github.com/go-gitea/gitea/pull/29354) which can cause issues with larger files.

We have merged [11](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.7+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.21.7/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

<!--more-->

## Changelog

## [1.21.7](https://github.com/go-gitea/gitea/releases/tag/v1.21.7) - 2024-02-26

<!-- Changelog Details -->
* ENHANCEMENTS
  * Users with `read` permission of pull requests can be assigned too ([#27263](https://github.com/go-gitea/gitea/pull/27263)) ([#29372](https://github.com/go-gitea/gitea/pull/29372))
* BUGFIXES
  * Do not double close reader ([#29354](https://github.com/go-gitea/gitea/pull/29354)) ([#29370](https://github.com/go-gitea/gitea/pull/29370))
  * Display friendly error message ([#29105](https://github.com/go-gitea/gitea/pull/29105)) ([#29363](https://github.com/go-gitea/gitea/pull/29363))
  * Fix project counter in organization/individual profile ([#28068](https://github.com/go-gitea/gitea/pull/28068)) ([#29361](https://github.com/go-gitea/gitea/pull/29361))
  * Fix validity of the FROM email address not being checked ([#29347](https://github.com/go-gitea/gitea/pull/29347)) ([#29360](https://github.com/go-gitea/gitea/pull/29360))
  * Fix tarball/zipball download bug ([#29342](https://github.com/go-gitea/gitea/pull/29342)) ([#29352](https://github.com/go-gitea/gitea/pull/29352))
* DOCS
  * Docker Tag Information in Docs ([#29047](https://github.com/go-gitea/gitea/pull/29047)) ([#29362](https://github.com/go-gitea/gitea/pull/29362))
* MISC
  * Enforce maxlength in frontend ([#29389](https://github.com/go-gitea/gitea/pull/29389)) ([#29396](https://github.com/go-gitea/gitea/pull/29396))
