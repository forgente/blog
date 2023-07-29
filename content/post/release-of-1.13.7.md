---
date: 2021-04-09T10:37:25+08:00
authors: "lunny"
title: "Gitea 1.13.7 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.13.7.

We highly encourage users to update to this version for some very important bug-fixes.


We have merged [8](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.13.7+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->
We would like to give a special thanks to [Kevin Chung](https://blog.kchung.co/) and [a-codingkiwi](https://github.com/a-codingkiwi) for both independently reporting a security issue that was patched in this release.
Thanks to [bluemonday](https://github.com/microcosm-cc/bluemonday) and [@zeripath](https://github.com/zeripath) for fixing [#15294](https://github.com/go-gitea/gitea/pull/15294), Thanks to [@zeripath](https://github.com/zeripath) for another one in [#15160](https://github.com/go-gitea/gitea/pull/15160)

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.13.7/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.13.7](https://github.com/go-gitea/gitea/releases/tag/v1.13.7) - 2021-04-09

* SECURITY
  * Update to bluemonday-1.0.6 ([#15294](https://github.com/go-gitea/gitea/pull/15294)) ([#15298](https://github.com/go-gitea/gitea/pull/15298))
  * Clusterfuzz found another way ([#15160](https://github.com/go-gitea/gitea/pull/15160)) ([#15169](https://github.com/go-gitea/gitea/pull/15169))
* API
  * Fix wrong user returned in API ([#15139](https://github.com/go-gitea/gitea/pull/15139)) ([#15150](https://github.com/go-gitea/gitea/pull/15150))
* BUGFIXES
  * Add 'fonts' into 'KnownPublicEntries' ([#15188](https://github.com/go-gitea/gitea/pull/15188)) ([#15317](https://github.com/go-gitea/gitea/pull/15317))
  * Speed up `enry.IsVendor` ([#15213](https://github.com/go-gitea/gitea/pull/15213)) ([#15246](https://github.com/go-gitea/gitea/pull/15246))
  * Response 404 for diff/patch of a commit that not exist ([#15221](https://github.com/go-gitea/gitea/pull/15221)) ([#15238](https://github.com/go-gitea/gitea/pull/15238))
  * Prevent NPE in CommentMustAsDiff if no hunk header ([#15199](https://github.com/go-gitea/gitea/pull/15199)) ([#15201](https://github.com/go-gitea/gitea/pull/15201))
* MISC
  * Add size to Save function ([#15264](https://github.com/go-gitea/gitea/pull/15264)) ([#15271](https://github.com/go-gitea/gitea/pull/15271))
