---
date: 2021-07-06T16:02:22+03:00
authors: "zeripath"
title: "Gitea 1.14.4 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.14.4.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [11](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.14.3+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.14.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.14.4](https://github.com/go-gitea/gitea/releases/tag/v1.14.4) - 2021-07-06

* BUGFIXES
  * Fix relative links in postprocessed images ([#16334](https://github.com/go-gitea/gitea/pull/16334)) ([#16340](https://github.com/go-gitea/gitea/pull/16340))
  * Fix list_options GetStartEnd ([#16303](https://github.com/go-gitea/gitea/pull/16303)) ([#16305](https://github.com/go-gitea/gitea/pull/16305))
  * Fix API to use author for commits instead of committer ([#16276](https://github.com/go-gitea/gitea/pull/16276)) ([#16277](https://github.com/go-gitea/gitea/pull/16277))
  * Handle misencoding of login_source cfg in mssql ([#16268](https://github.com/go-gitea/gitea/pull/16268)) ([#16275](https://github.com/go-gitea/gitea/pull/16275))
  * Fixed issues not updated by commits ([#16254](https://github.com/go-gitea/gitea/pull/16254)) ([#16261](https://github.com/go-gitea/gitea/pull/16261))
  * Improve efficiency in FindRenderizableReferenceNumeric and getReference ([#16251](https://github.com/go-gitea/gitea/pull/16251)) ([#16255](https://github.com/go-gitea/gitea/pull/16255))
  * Use html.Parse rather than html.ParseFragment ([#16223](https://github.com/go-gitea/gitea/pull/16223)) ([#16225](https://github.com/go-gitea/gitea/pull/16225))
  * Fix milestone counters on new issue ([#16183](https://github.com/go-gitea/gitea/pull/16183)) ([#16224](https://github.com/go-gitea/gitea/pull/16224))
  * reqOrgMembership calls need to be preceded by reqToken ([#16198](https://github.com/go-gitea/gitea/pull/16198)) ([#16219](https://github.com/go-gitea/gitea/pull/16219))
