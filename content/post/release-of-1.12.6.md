---
date: "2020-11-16T15:00:00+00:00"
author: "gary-kim"
title: "Gitea 1.12.6 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.12.6.

We highly encourage users to update to this version as it contains some important security and bug fixes.

We have merged [27](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.12.6+is%3Amerged) pull requests to release this version.

We would like to give a special thanks to [stypr](https://github.com/stypr) of Flatt Security Inc. for reporting security issues that have been patched in this release.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.12.6/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

<!--more-->

## Changelog

## [1.12.6](https://github.com/go-gitea/gitea/releases/tag/v1.12.6) - 2020-11-11

* SECURITY
  * Prevent git operations for inactive users ([#13527](https://github.com/go-gitea/gitea/pull/13527)) ([#13537](https://github.com/go-gitea/gitea/pull/13537))
  * Disallow urlencoded new lines in git protocol paths if there is a port ([#13521](https://github.com/go-gitea/gitea/pull/13521)) ([#13525](https://github.com/go-gitea/gitea/pull/13525))
* BUGFIXES
  * API should only return Json ([#13511](https://github.com/go-gitea/gitea/pull/13511)) ([#13564](https://github.com/go-gitea/gitea/pull/13564))
  * Fix before and since query arguments at API ([#13559](https://github.com/go-gitea/gitea/pull/13559)) ([#13560](https://github.com/go-gitea/gitea/pull/13560))
  * Prevent panic on git blame by limiting lines to 4096 bytes at most ([#13470](https://github.com/go-gitea/gitea/pull/13470)) ([#13492](https://github.com/go-gitea/gitea/pull/13492))
  * Fix link detection in repository description with tailing '_' ([#13407](https://github.com/go-gitea/gitea/pull/13407)) ([#13408](https://github.com/go-gitea/gitea/pull/13408))
  * Remove obsolete change of email on profile page ([#13341](https://github.com/go-gitea/gitea/pull/13341)) ([#13348](https://github.com/go-gitea/gitea/pull/13348))
  * Fix permission check on get Reactions API endpoints ([#13344](https://github.com/go-gitea/gitea/pull/13344)) ([#13346](https://github.com/go-gitea/gitea/pull/13346))
  * Add migrated pulls to pull request task queue ([#13331](https://github.com/go-gitea/gitea/pull/13331)) ([#13335](https://github.com/go-gitea/gitea/pull/13335))
  * API deny wrong pull creation options ([#13308](https://github.com/go-gitea/gitea/pull/13308)) ([#13327](https://github.com/go-gitea/gitea/pull/13327)) 
  * Fix initial commit page & binary munching problem ([#13249](https://github.com/go-gitea/gitea/pull/13249)) ([#13259](https://github.com/go-gitea/gitea/pull/13259))
  * Fix diff parsing ([#13157](https://github.com/go-gitea/gitea/pull/13157)) ([#13136](https://github.com/go-gitea/gitea/pull/13136)) ([#13139](https://github.com/go-gitea/gitea/pull/13139))
  * Return error 404 not 500 from API if team does not exist ([#13118](https://github.com/go-gitea/gitea/pull/13118)) ([#13119](https://github.com/go-gitea/gitea/pull/13119))
  * Prohibit automatic downgrades ([#13108](https://github.com/go-gitea/gitea/pull/13108)) ([#13111](https://github.com/go-gitea/gitea/pull/13111))
  * Fix GitLab Migration Option AuthToken ([#13101](https://github.com/go-gitea/gitea/pull/13101))
  * GitLab Label Color Normalizer ([#12793](https://github.com/go-gitea/gitea/pull/12793)) ([#13100](https://github.com/go-gitea/gitea/pull/13100))
  * Log the underlying panic in runMigrateTask ([#13096](https://github.com/go-gitea/gitea/pull/13096)) ([#13098](https://github.com/go-gitea/gitea/pull/13098))
  * Fix attachments list in edit comment ([#13036](https://github.com/go-gitea/gitea/pull/13036)) ([#13097](https://github.com/go-gitea/gitea/pull/13097))
  * Fix deadlock when deleting team user ([#13093](https://github.com/go-gitea/gitea/pull/13093))
  * Fix error create comment on outdated file ([#13041](https://github.com/go-gitea/gitea/pull/13041)) ([#13042](https://github.com/go-gitea/gitea/pull/13042))
  * Fix repository create/delete event webhooks ([#13008](https://github.com/go-gitea/gitea/pull/13008)) ([#13027](https://github.com/go-gitea/gitea/pull/13027))
  * Fix internal server error on README in submodule ([#13006](https://github.com/go-gitea/gitea/pull/13006)) ([#13016](https://github.com/go-gitea/gitea/pull/13016))
