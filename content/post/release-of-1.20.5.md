---
date: 2023-10-03T21:19:00+08:00
authors: 
  - "lunny"
title: "Gitea 1.20.5 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.20.5
---

We are proud to present the release of Gitea version 1.20.5.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [24](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.20.5+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.20.5/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

<!--more-->

## Changelog

## [1.20.5](https://github.com/go-gitea/gitea/releases/tag/v1.20.5) - 2023-10-03

* ENHANCEMENTS
  * Fix z-index on markdown completion ([#27237](https://github.com/go-gitea/gitea/pull/27237)) (#27242 & [#27238](https://github.com/go-gitea/gitea/pull/27238))
  * Use secure cookie for HTTPS sites ([#26999](https://github.com/go-gitea/gitea/pull/26999)) ([#27013](https://github.com/go-gitea/gitea/pull/27013))
* BUGFIXES
  * Fix git 2.11 error when checking IsEmpty ([#27393](https://github.com/go-gitea/gitea/pull/27393)) ([#27396](https://github.com/go-gitea/gitea/pull/27396))
  * Allow get release download files and lfs files with oauth2 token format ([#26430](https://github.com/go-gitea/gitea/pull/26430)) ([#27378](https://github.com/go-gitea/gitea/pull/27378))
  * Fix orphan check for deleted branch ([#27310](https://github.com/go-gitea/gitea/pull/27310)) ([#27320](https://github.com/go-gitea/gitea/pull/27320))
  * Quote table `release` in sql queries ([#27205](https://github.com/go-gitea/gitea/pull/27205)) ([#27219](https://github.com/go-gitea/gitea/pull/27219))
  * Fix release URL in webhooks ([#27182](https://github.com/go-gitea/gitea/pull/27182)) ([#27184](https://github.com/go-gitea/gitea/pull/27184))
  * Fix successful return value for `SyncAndGetUserSpecificDiff` ([#27152](https://github.com/go-gitea/gitea/pull/27152)) ([#27156](https://github.com/go-gitea/gitea/pull/27156))
  * fix pagination for followers and following ([#27127](https://github.com/go-gitea/gitea/pull/27127)) ([#27138](https://github.com/go-gitea/gitea/pull/27138))
  * Fix issue templates when blank isses are disabled ([#27061](https://github.com/go-gitea/gitea/pull/27061)) ([#27082](https://github.com/go-gitea/gitea/pull/27082))
  * Fix context cache bug & enable context cache for dashabord commits' authors([#26991](https://github.com/go-gitea/gitea/pull/26991)) ([#27017](https://github.com/go-gitea/gitea/pull/27017))
  * Fix INI parsing for value with trailing slash ([#26995](https://github.com/go-gitea/gitea/pull/26995)) ([#27001](https://github.com/go-gitea/gitea/pull/27001))
  * Fix PushEvent NullPointerException jenkinsci/github-plugin ([#27203](https://github.com/go-gitea/gitea/pull/27203)) ([#27249](https://github.com/go-gitea/gitea/pull/27249))
  * Fix organization field being null in POST /orgs/{orgid}/teams ([#27150](https://github.com/go-gitea/gitea/pull/27150)) (#27167 & [#27162](https://github.com/go-gitea/gitea/pull/27162))
  * Fix bug of review request number ([#27406](https://github.com/go-gitea/gitea/pull/27406)) ([#27104](https://github.com/go-gitea/gitea/pull/27104))
* TESTING
  * services/wiki: Close() after error handling ([#27129](https://github.com/go-gitea/gitea/pull/27129)) ([#27137](https://github.com/go-gitea/gitea/pull/27137))
* DOCS
  * Improve actions docs related to `pull_request` event ([#27126](https://github.com/go-gitea/gitea/pull/27126)) ([#27145](https://github.com/go-gitea/gitea/pull/27145))
* MISC
  * Add logs for data broken of comment review ([#27326](https://github.com/go-gitea/gitea/pull/27326)) ([#27344](https://github.com/go-gitea/gitea/pull/27344))
  * Load reviewer before sending notification ([#27063](https://github.com/go-gitea/gitea/pull/27063)) ([#27064](https://github.com/go-gitea/gitea/pull/27064))

<!-- Changelog Details -->

## Contributors to this release

* [@Infinoid](https://github.com/Infinoid)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@lunny](https://github.com/lunny)
* [@sebastian-sauer](https://github.com/sebastian-sauer)
* [@wxiaoguang](https://github.com/wxiaoguang)
