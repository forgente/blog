---
date: 2022-01-02T19:16:06+07:00
authors: "6543"
title: "Gitea 1.15.9 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.15.9"
---

We are proud to present the release of Gitea version 1.15.9.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [15](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.15.9+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.15.9/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.15.9](https://github.com/go-gitea/gitea/releases/tag/v1.15.9) - 2022-01-02

* BUGFIXES
  * Fix wrong redirect on org labels ([#18128](https://github.com/go-gitea/gitea/pull/18128)) ([#18134](https://github.com/go-gitea/gitea/pull/18134))
  * Fix: unstable sort skips/duplicates issues across pages ([#18094](https://github.com/go-gitea/gitea/pull/18094)) ([#18095](https://github.com/go-gitea/gitea/pull/18095))
  * Revert "Fix delete u2f keys bug ([#18042](https://github.com/go-gitea/gitea/pull/18042))" ([#18107](https://github.com/go-gitea/gitea/pull/18107))
  * Migrating wiki don't require token, so we should move it out of the require form ([#17645](https://github.com/go-gitea/gitea/pull/17645)) ([#18104](https://github.com/go-gitea/gitea/pull/18104))
  * Prevent NPE if gitea uploader fails to open url ([#18080](https://github.com/go-gitea/gitea/pull/18080)) ([#18101](https://github.com/go-gitea/gitea/pull/18101))
  * Reset locale on login ([#17734](https://github.com/go-gitea/gitea/pull/17734)) ([#18100](https://github.com/go-gitea/gitea/pull/18100))
  * Correctly handle failed migrations ([#17575](https://github.com/go-gitea/gitea/pull/17575)) ([#18099](https://github.com/go-gitea/gitea/pull/18099))
  * Instead of using routerCtx just escape the url before routing ([#18086](https://github.com/go-gitea/gitea/pull/18086)) ([#18098](https://github.com/go-gitea/gitea/pull/18098))
  * Quote references to the user table in consistency checks ([#18072](https://github.com/go-gitea/gitea/pull/18072)) ([#18073](https://github.com/go-gitea/gitea/pull/18073))
  * Add NotFound handler ([#18062](https://github.com/go-gitea/gitea/pull/18062)) ([#18067](https://github.com/go-gitea/gitea/pull/18067))
  * Ensure that git repository is closed before transfer ([#18049](https://github.com/go-gitea/gitea/pull/18049)) ([#18057](https://github.com/go-gitea/gitea/pull/18057))
  * Use common sessioner for API and web routes ([#18114](https://github.com/go-gitea/gitea/pull/18114))
* TRANSLATION
  * Fix code search result hint on zh-CN ([#18053](https://github.com/go-gitea/gitea/pull/18053))
