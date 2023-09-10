---
date: 2021-03-21T17:34:25+07:00
authors: "6543"
title: "Gitea 1.13.5 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.13.5"
---

We are proud to present the release of Gitea version 1.13.5.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [17](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.13.5+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.13.5/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.13.5](https://github.com/go-gitea/gitea/releases/tag/v1.13.5) - 2021-03-21

* SECURITY
  * Update to goldmark 1.3.3 ([#15059](https://github.com/go-gitea/gitea/pull/15059)) ([#15061](https://github.com/go-gitea/gitea/pull/15061))
  * Fix another clusterfuzz spotted issue ([#15032](https://github.com/go-gitea/gitea/pull/15032)) ([#15034](https://github.com/go-gitea/gitea/pull/15034))
* API
  * Fix set milestone on PR creation ([#14981](https://github.com/go-gitea/gitea/pull/14981)) ([#15001](https://github.com/go-gitea/gitea/pull/15001))
  * Prevent panic when editing forked repos by API ([#14960](https://github.com/go-gitea/gitea/pull/14960)) ([#14963](https://github.com/go-gitea/gitea/pull/14963))
* BUGFIXES
  * Fix bug when upload on web ([#15042](https://github.com/go-gitea/gitea/pull/15042)) ([#15055](https://github.com/go-gitea/gitea/pull/15055))
  * Delete Labels & IssueLabels on Repo Delete too ([#15039](https://github.com/go-gitea/gitea/pull/15039)) ([#15051](https://github.com/go-gitea/gitea/pull/15051))
  * Fix postgres ID sequences broken by recreate-table ([#15015](https://github.com/go-gitea/gitea/pull/15015)) ([#15029](https://github.com/go-gitea/gitea/pull/15029))
  * Fix several render issues ([#14986](https://github.com/go-gitea/gitea/pull/14986)) ([#15013](https://github.com/go-gitea/gitea/pull/15013))
  * Make sure sibling images get a link too ([#14979](https://github.com/go-gitea/gitea/pull/14979)) ([#14995](https://github.com/go-gitea/gitea/pull/14995))
  * Fix Anchor jumping with escaped query components ([#14969](https://github.com/go-gitea/gitea/pull/14969)) ([#14977](https://github.com/go-gitea/gitea/pull/14977))
  * Fix release mail html template ([#14976](https://github.com/go-gitea/gitea/pull/14976))
  * Fix excluding more than two labels on issues list ([#14962](https://github.com/go-gitea/gitea/pull/14962)) ([#14973](https://github.com/go-gitea/gitea/pull/14973))
  * Don't mark each comment poster as OP ([#14971](https://github.com/go-gitea/gitea/pull/14971)) ([#14972](https://github.com/go-gitea/gitea/pull/14972))
  * Add "captcha" to list of reserved usernames ([#14930](https://github.com/go-gitea/gitea/pull/14930))
  * Re-enable import local paths after reversion from #13610 ([#14925](https://github.com/go-gitea/gitea/pull/14925)) ([#14927](https://github.com/go-gitea/gitea/pull/14927))
