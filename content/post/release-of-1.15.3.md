---
date: 2021-09-23T13:31:00+02:00
authors: "noerw"
title: "Gitea 1.15.3 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.15.3.

[17](https://github.com/go-gitea/gitea/pulls?q=is:pr+milestone:1.15.3+is:merged) pull requests went into this patch release,
and we highly encourage users to update to this version for some important bug-fixes.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.15.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

### [1.15.3](https://github.com/go-gitea/gitea/releases/tag/v1.15.3) - 2021-09-19

* ENHANCEMENTS
  * Add fluid to ui container class to remove margin ([#16396](https://github.com/go-gitea/gitea/pull/16396)) ([#16976](https://github.com/go-gitea/gitea/pull/16976))
  * Add caller to cat-file batch calls ([#17082](https://github.com/go-gitea/gitea/pull/17082)) ([#17089](https://github.com/go-gitea/gitea/pull/17089))
* BUGFIXES
  * Render full plain readme. ([#17083](https://github.com/go-gitea/gitea/pull/17083)) ([#17090](https://github.com/go-gitea/gitea/pull/17090))
  * Upgrade xorm to v1.2.4 ([#17059](https://github.com/go-gitea/gitea/pull/17059))
  * Fix bug of migrate comments which only fetch one page ([#17055](https://github.com/go-gitea/gitea/pull/17055)) ([#17058](https://github.com/go-gitea/gitea/pull/17058))
  * Do not show issue context popup on external issues ([#17050](https://github.com/go-gitea/gitea/pull/17050)) ([#17054](https://github.com/go-gitea/gitea/pull/17054))
  * Decrement Fork Num when converting from Fork ([#17035](https://github.com/go-gitea/gitea/pull/17035)) ([#17046](https://github.com/go-gitea/gitea/pull/17046))
  * Correctly rollback in ForkRepository ([#17034](https://github.com/go-gitea/gitea/pull/17034)) ([#17045](https://github.com/go-gitea/gitea/pull/17045))
  * Fix missing close in WalkGitLog ([#17008](https://github.com/go-gitea/gitea/pull/17008)) ([#17009](https://github.com/go-gitea/gitea/pull/17009))
  * Add prefix to SVG id/class attributes ([#16997](https://github.com/go-gitea/gitea/pull/16997)) ([#17000](https://github.com/go-gitea/gitea/pull/17000))
  * Fix bug of migrated repository not index ([#16991](https://github.com/go-gitea/gitea/pull/16991)) ([#16996](https://github.com/go-gitea/gitea/pull/16996))
  * Skip AllowedUserVisibilityModes validation on update user if it is an organisation ([#16988](https://github.com/go-gitea/gitea/pull/16988)) ([#16990](https://github.com/go-gitea/gitea/pull/16990))
  * Fix storage Iterate bug and Add storage doctor to delete garbage attachments ([#16971](https://github.com/go-gitea/gitea/pull/16971)) ([#16977](https://github.com/go-gitea/gitea/pull/16977))
  * Fix issue with issue default mail template ([#16956](https://github.com/go-gitea/gitea/pull/16956)) ([#16975](https://github.com/go-gitea/gitea/pull/16975))
  * Ensure that rebase conflicts are handled in updates ([#16952](https://github.com/go-gitea/gitea/pull/16952)) ([#16960](https://github.com/go-gitea/gitea/pull/16960))
  * Prevent panic on diff generation ([#16950](https://github.com/go-gitea/gitea/pull/16950)) ([#16951](https://github.com/go-gitea/gitea/pull/16951))
  * Add fluid to ui container class to remove margin (https://github.com/go-gitea/gitea/pull/16396) (https://github.com/go-gitea/gitea/pull/16976)
  * Add caller to cat-file batch calls (https://github.com/go-gitea/gitea/pull/17082) (https://github.com/go-gitea/gitea/pull/17089)
