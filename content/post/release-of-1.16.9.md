---
date: "2022-07-12T13:47:07+07:00"
author: "jolheiser"
title: "Gitea 1.16.9 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.16.9.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [24](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.16.9+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

We would like to thank [usd AG](https://herolab.usd.de/en/security-advisories/) for reporting the user issues vulnerability, and [@lunny](https://gitea.com/lunny) for the subsequent fix!

We would also like to thank [@Gusted](https://codeberg.org/Gusted) for the other security patch in this release.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.16.9/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.16.9](https://github.com/go-gitea/gitea/releases/tag/v1.16.9) - 2022-07-12

<!-- Changelog Details -->
* SECURITY
  * Add write check for creating Commit status ([#20332](https://github.com/go-gitea/gitea/pull/20332)) ([#20334](https://github.com/go-gitea/gitea/pull/20334))
  * Check for permission when fetching user controlled issues ([#20133](https://github.com/go-gitea/gitea/pull/20133)) ([#20196](https://github.com/go-gitea/gitea/pull/20196))
* BUGFIXES
  * Hide notify mail setting ui if not enabled ([#20138](https://github.com/go-gitea/gitea/pull/20138)) ([#20337](https://github.com/go-gitea/gitea/pull/20337))
  * Add write check for creating Commit status ([#20332](https://github.com/go-gitea/gitea/pull/20332)) ([#20334](https://github.com/go-gitea/gitea/pull/20334))
  * Only show Followers that current user can access ([#20220](https://github.com/go-gitea/gitea/pull/20220)) ([#20253](https://github.com/go-gitea/gitea/pull/20253))
  * Release page show all tags in compare dropdown ([#20070](https://github.com/go-gitea/gitea/pull/20070)) ([#20071](https://github.com/go-gitea/gitea/pull/20071))
  * Fix permission check for delete tag ([#19985](https://github.com/go-gitea/gitea/pull/19985)) ([#20001](https://github.com/go-gitea/gitea/pull/20001))
  * Only log non ErrNotExist errors in git.GetNote  ([#19884](https://github.com/go-gitea/gitea/pull/19884)) ([#19905](https://github.com/go-gitea/gitea/pull/19905))
  * Use exact search instead of fuzzy search for branch filter dropdown ([#19885](https://github.com/go-gitea/gitea/pull/19885)) ([#19893](https://github.com/go-gitea/gitea/pull/19893))
  * Set Setpgid on child git processes ([#19865](https://github.com/go-gitea/gitea/pull/19865)) ([#19881](https://github.com/go-gitea/gitea/pull/19881))
  * Import git from alpine 3.16 repository as 2.30.4 is needed for `safe.directory = '*'` to work but alpine 3.13 has 2.30.3 ([#19876](https://github.com/go-gitea/gitea/pull/19876))
  * Ensure responses are context.ResponseWriters ([#19843](https://github.com/go-gitea/gitea/pull/19843)) ([#19859](https://github.com/go-gitea/gitea/pull/19859))
  * Fix incorrect usage of `Count` function ([#19850](https://github.com/go-gitea/gitea/pull/19850))
  * Fix raw endpoint PDF file headers ([#19825](https://github.com/go-gitea/gitea/pull/19825)) ([#19826](https://github.com/go-gitea/gitea/pull/19826))
  * Make WIP prefixes case insensitive, e.g. allow `Draft` as a WIP prefix ([#19780](https://github.com/go-gitea/gitea/pull/19780)) ([#19811](https://github.com/go-gitea/gitea/pull/19811))
  * Don't return 500 on NotificationUnreadCount ([#19802](https://github.com/go-gitea/gitea/pull/19802))
  * Prevent NPE when cache service is disabled ([#19703](https://github.com/go-gitea/gitea/pull/19703)) ([#19783](https://github.com/go-gitea/gitea/pull/19783))
  * Detect truncated utf-8 characters at the end of content as still representing utf-8 ([#19773](https://github.com/go-gitea/gitea/pull/19773)) ([#19774](https://github.com/go-gitea/gitea/pull/19774))
  * Fix doctor pq: syntax error at or near "." quote user table name ([#19765](https://github.com/go-gitea/gitea/pull/19765)) ([#19770](https://github.com/go-gitea/gitea/pull/19770))
  * Fix bug with assigneees ([#19757](https://github.com/go-gitea/gitea/pull/19757))
