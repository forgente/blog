---
date: 2023-12-12T15:46:00+08:00
authors:
  - "lunny"
title: "Gitea 1.21.2 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.21.2"
---

Gitea 1.21.2 are now released. 1.21.2 includs [35](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.2+is%3Amerged) merged PRs and fixes for security vulnerability. You are highly recommanded to upgrade to this version ASAP.

The problems were about private user's projects should not be visited by anonymous users and issue/comment history should be checked restrictly to follow their repositoy context.

<!-- Security Thanks! -->
We would like to give a special thanks to Kim Endisch for reporting the security issue that was patched in this release.
Thanks to [@lunny](https://gitea.com/lunny) for fixing the problem.

You can download Gitea 1.21.2 for example from our [downloads page](https://dl.gitea.com/gitea/1.21.2/). Please read our [installation guide](https://docs.gitea.com/installation/install-from-binary) for more information on installation.

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Changelog

## [1.21.2](https://github.com/go-gitea/gitea/releases/tag/v1.21.2) - 2023-12-12

* SECURITY
  * Rebuild with recently released golang version
  * Fix missing check (#28406) (#28411)
  * Do some missing checks (#28423) (#28432)
* BUGFIXES
  * Fix margin in server signed signature verification view (#28379) (#28381)
  * Fix object does not exist error when checking citation file (#28314) (#28369)
  * Use `filepath` instead of `path` to create SQLite3 database file (#28374) (#28378)
  * Fix the runs will not be displayed bug when the main branch have no workflows but other branches have (#28359) (#28365)
  * Handle repository.size column being NULL in migration v263 (#28336) (#28363)
  * Convert git commit summary to valid UTF8. (#28356) (#28358)
  * Fix migration panic due to an empty review comment diff (#28334) (#28362)
  * Add `HEAD` support for rpm repo files (#28309) (#28360)
  * Fix RPM/Debian signature key creation (#28352) (#28353)
  * Keep profile tab when clicking on Language (#28320) (#28331)
  * Fix missing issue search index update when changing status (#28325) (#28330)
  * Fix wrong link in `protect_branch_name_pattern_desc` (#28313) (#28315)
  * Read `previous` info from git blame (#28306) (#28310)
  * Ignore "non-existing" errors when getDirectorySize calculates the size (#28276) (#28285)
  * Use appSubUrl for OAuth2 callback URL tip (#28266) (#28275)
  * Meilisearch: require all query terms to be matched (#28293) (#28296)
  * Fix required error for token name (#28267) (#28284)
  * Fix issue will be detected as pull request when checking `First-time contributor` (#28237) (#28271)
  * Use full width for project boards (#28225) (#28245)
  * Increase "version" when update the setting value to a same value as before (#28243) (#28244)
  * Also sync DB branches on push if necessary (#28361) (#28403)
  * Make gogit Repository.GetBranchNames consistent (#28348) (#28386)
  * Recover from panic in cron task (#28409) (#28425)
  * Deprecate query string auth tokens (#28390) (#28430)
* ENHANCEMENTS
  * Improve doctor cli behavior (#28422) (#28424)
  * Fix margin in server signed signature verification view (#28379) (#28381)
  * Refactor template empty checks (#28351) (#28354)
  * Read `previous` info from git blame (#28306) (#28310)
  * Use full width for project boards (#28225) (#28245)
  * Enable system users search via the API (#28013) (#28018)
