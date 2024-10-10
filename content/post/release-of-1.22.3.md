---
date: 2024-10-08T23:45:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.22.3 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.22.3
---

We are proud to present the release of Gitea version 1.22.3.

We highly encourage users to update to this version for one security bug-fixes.

We have merged [36](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.22.3+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

We would like to give a special thanks to dankar for reporting the access token scope security issue which is fixed by [#32218](https://github.com/go-gitea/gitea/pull/32218).Thanks to [@lunny](https://github.com/lunny) for fixing the problem.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.22.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

<!--more-->

## Changelog

## [1.22.3](https://github.com/go-gitea/gitea/releases/tag/v1.22.3) - 2024-10-08

<!-- Changelog Details -->

* SECURITY
  * Fix bug when a token is given public only ([#32204](https://github.com/go-gitea/gitea/pull/32204)) ([#32218](https://github.com/go-gitea/gitea/pull/32218))
* PERFORMANCE
  * Increase `cacheContextLifetime` to reduce false reports ([#32011](https://github.com/go-gitea/gitea/pull/32011)) ([#32023](https://github.com/go-gitea/gitea/pull/32023))
  * Don't join repository when loading action table data ([#32127](https://github.com/go-gitea/gitea/pull/32127)) ([#32143](https://github.com/go-gitea/gitea/pull/32143))
* BUGFIXES
  * Fix javascript error when an anonymous user visits migration page ([#32144](https://github.com/go-gitea/gitea/pull/32144)) ([#32179](https://github.com/go-gitea/gitea/pull/32179))
  * Don't init signing keys if oauth2 provider is disabled ([#32177](https://github.com/go-gitea/gitea/pull/32177))
  * Fix wrong status of `Set up Job` when first step is skipped ([#32120](https://github.com/go-gitea/gitea/pull/32120)) ([#32125](https://github.com/go-gitea/gitea/pull/32125))
  * Fix bug when deleting a migrated branch ([#32075](https://github.com/go-gitea/gitea/pull/32075)) ([#32123](https://github.com/go-gitea/gitea/pull/32123))
  * Truncate commit message during Discord webhook push events ([#31970](https://github.com/go-gitea/gitea/pull/31970)) ([#32121](https://github.com/go-gitea/gitea/pull/32121))
  * Allow to set branch protection in an empty repository ([#32095](https://github.com/go-gitea/gitea/pull/32095)) ([#32119](https://github.com/go-gitea/gitea/pull/32119))
  * Fix panic when cloning with wrong ssh format. ([#32076](https://github.com/go-gitea/gitea/pull/32076)) ([#32118](https://github.com/go-gitea/gitea/pull/32118))
  * Fix rename branch permission bug ([#32066](https://github.com/go-gitea/gitea/pull/32066)) ([#32108](https://github.com/go-gitea/gitea/pull/32108))
  * Fix: database not update release when using `git push --tags --force` ([#32040](https://github.com/go-gitea/gitea/pull/32040)) ([#32074](https://github.com/go-gitea/gitea/pull/32074))
  * Add missing comment reply handling ([#32050](https://github.com/go-gitea/gitea/pull/32050)) ([#32065](https://github.com/go-gitea/gitea/pull/32065))
  * Do not escape relative path in RPM primary index ([#32038](https://github.com/go-gitea/gitea/pull/32038)) ([#32054](https://github.com/go-gitea/gitea/pull/32054))
  * Fix `/repos/{owner}/{repo}/pulls/{index}/files` endpoint not populating `previous_filename` ([#32017](https://github.com/go-gitea/gitea/pull/32017)) ([#32028](https://github.com/go-gitea/gitea/pull/32028))
  * Support allowed hosts for migrations to work with proxy ([#32025](https://github.com/go-gitea/gitea/pull/32025)) ([#32026](https://github.com/go-gitea/gitea/pull/32026))
  * Fix the logic of finding the latest pull review commit ID ([#32139](https://github.com/go-gitea/gitea/pull/32139)) ([#32165](https://github.com/go-gitea/gitea/pull/32165))
  * Fix bug in getting merged pull request by commit ([#32079](https://github.com/go-gitea/gitea/pull/32079)) ([#32117](https://github.com/go-gitea/gitea/pull/32117))
  * Fix wrong last modify time ([#32102](https://github.com/go-gitea/gitea/pull/32102)) ([#32104](https://github.com/go-gitea/gitea/pull/32104))
  * Fix incorrect `/tokens` api ([#32085](https://github.com/go-gitea/gitea/pull/32085)) ([#32092](https://github.com/go-gitea/gitea/pull/32092))
  * Handle invalid target when creating releases using API ([#31841](https://github.com/go-gitea/gitea/pull/31841)) ([#32043](https://github.com/go-gitea/gitea/pull/32043))
  * Check if the `due_date` is nil when editing issues ([#32035](https://github.com/go-gitea/gitea/pull/32035)) ([#32042](https://github.com/go-gitea/gitea/pull/32042))
  * Fix container parallel upload bugs ([#32022](https://github.com/go-gitea/gitea/pull/32022))
  * Fixed race condition when deleting documents by repoId in ElasticSearch ([#32185](https://github.com/go-gitea/gitea/pull/32185)) ([#32188](https://github.com/go-gitea/gitea/pull/32188))
  * Refactor CSRF protector ([#32057](https://github.com/go-gitea/gitea/pull/32057)) ([#32069](https://github.com/go-gitea/gitea/pull/32069))
  * Fix Bug in Issue/pulls list ([#32081](https://github.com/go-gitea/gitea/pull/32081)) ([#32115](https://github.com/go-gitea/gitea/pull/32115))
  * Include collaboration repositories on dashboard source/forks/mirrors list ([#31946](https://github.com/go-gitea/gitea/pull/31946)) ([#32122](https://github.com/go-gitea/gitea/pull/32122))
  * Add null check for responseData.invalidTopics ([#32212](https://github.com/go-gitea/gitea/pull/32212)) ([#32217](https://github.com/go-gitea/gitea/pull/32217))
* TESTING
  * Fix mssql ci with a new mssql version on ci ([#32094](https://github.com/go-gitea/gitea/pull/32094))
* MISC
  * Upgrade some dependencies include minio-go ([#32166](https://github.com/go-gitea/gitea/pull/32166))
  * Add bin to Composer Metadata ([#32099](https://github.com/go-gitea/gitea/pull/32099)) ([#32106](https://github.com/go-gitea/gitea/pull/32106))
  * Lazy load avatar images ([#32051](https://github.com/go-gitea/gitea/pull/32051)) ([#32063](https://github.com/go-gitea/gitea/pull/32063))
  * Upgrade cache to v0.2.1 ([#32003](https://github.com/go-gitea/gitea/pull/32003)) ([#32009](https://github.com/go-gitea/gitea/pull/32009))

## Contributors

* [@bsofiato](https://github.com/bsofiato)
* [@charles-plutohealth](https://github.com/charles-plutohealth)
* [@cloudchamb3r](https://github.com/cloudchamb3r)
* [@ExplodingDragon](https://github.com/ExplodingDragon)
* [@hiifong](https://github.com/hiifong)
* [@kemzeb](https://github.com/kemzeb)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@lunny](https://github.com/lunny)
* [@maantje](https://github.com/maantje)
* [@techknowlogick](https://github.com/techknowlogick)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)
