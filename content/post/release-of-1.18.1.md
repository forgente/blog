---
date: 2023-01-17T09:07:13+07:00
authors: "jolheiser"
title: "Gitea 1.18.1 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.18.1"
---

We are proud to present the release of Gitea version 1.18.1.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [37](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.18.1+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.18.1/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.18.1](https://github.com/go-gitea/gitea/releases/tag/v1.18.1) - 2023-01-17

<!-- Changelog Details -->
* API
  * Add `sync_on_commit` option for push mirrors api ([#22271](https://github.com/go-gitea/gitea/pull/22271)) ([#22292](https://github.com/go-gitea/gitea/pull/22292))
* BUGFIXES
  * Update `github.com/zeripath/zapx/v15` ([#22485](https://github.com/go-gitea/gitea/pull/22485))
  * Fix pull request API field `closed_at` always being `null` ([#22482](https://github.com/go-gitea/gitea/pull/22482)) ([#22483](https://github.com/go-gitea/gitea/pull/22483))
  * Fix container blob mount ([#22226](https://github.com/go-gitea/gitea/pull/22226)) ([#22476](https://github.com/go-gitea/gitea/pull/22476))
  * Fix error when calculating repository size ([#22392](https://github.com/go-gitea/gitea/pull/22392)) ([#22474](https://github.com/go-gitea/gitea/pull/22474))
  * Fix Operator does not exist bug on explore page with ONLY_SHOW_RELEVANT_REPOS ([#22454](https://github.com/go-gitea/gitea/pull/22454)) ([#22472](https://github.com/go-gitea/gitea/pull/22472))
  * Fix environments for KaTeX and error reporting ([#22453](https://github.com/go-gitea/gitea/pull/22453)) ([#22473](https://github.com/go-gitea/gitea/pull/22473))
  * Remove the netgo tag for Windows build ([#22467](https://github.com/go-gitea/gitea/pull/22467)) ([#22468](https://github.com/go-gitea/gitea/pull/22468))
  * Fix migration from GitBucket ([#22477](https://github.com/go-gitea/gitea/pull/22477)) ([#22465](https://github.com/go-gitea/gitea/pull/22465))
  * Prevent panic on looking at api "git" endpoints for empty repos ([#22457](https://github.com/go-gitea/gitea/pull/22457)) ([#22458](https://github.com/go-gitea/gitea/pull/22458))
  * Fix PR status layout on mobile ([#21547](https://github.com/go-gitea/gitea/pull/21547)) ([#22441](https://github.com/go-gitea/gitea/pull/22441))
  * Fix wechatwork webhook sends empty content in PR review ([#21762](https://github.com/go-gitea/gitea/pull/21762)) ([#22440](https://github.com/go-gitea/gitea/pull/22440))
  * Remove duplicate "Actions" label in mobile view ([#21974](https://github.com/go-gitea/gitea/pull/21974)) ([#22439](https://github.com/go-gitea/gitea/pull/22439))
  * Fix leaving organization bug on user settings -> orgs ([#21983](https://github.com/go-gitea/gitea/pull/21983)) ([#22438](https://github.com/go-gitea/gitea/pull/22438))
  * Fixed colour transparency regex matching in project board sorting ([#22092](https://github.com/go-gitea/gitea/pull/22092)) ([#22437](https://github.com/go-gitea/gitea/pull/22437))
  * Correctly handle select on multiple channels in Queues ([#22146](https://github.com/go-gitea/gitea/pull/22146)) ([#22428](https://github.com/go-gitea/gitea/pull/22428))
  * Prepend refs/heads/ to issue template refs ([#20461](https://github.com/go-gitea/gitea/pull/20461)) ([#22427](https://github.com/go-gitea/gitea/pull/22427))
  * Restore function to "Show more" buttons ([#22399](https://github.com/go-gitea/gitea/pull/22399)) ([#22426](https://github.com/go-gitea/gitea/pull/22426))
  * Continue GCing other repos on error in one repo ([#22422](https://github.com/go-gitea/gitea/pull/22422)) ([#22425](https://github.com/go-gitea/gitea/pull/22425))
  * Allow HOST has no port ([#22280](https://github.com/go-gitea/gitea/pull/22280)) ([#22409](https://github.com/go-gitea/gitea/pull/22409))
  * Fix omit avatar_url in discord payload when empty ([#22393](https://github.com/go-gitea/gitea/pull/22393)) ([#22394](https://github.com/go-gitea/gitea/pull/22394))
  * Don't display stop watch top bar icon when disabled and hidden when click other place ([#22374](https://github.com/go-gitea/gitea/pull/22374)) ([#22387](https://github.com/go-gitea/gitea/pull/22387))
  * Don't lookup mail server when using sendmail ([#22300](https://github.com/go-gitea/gitea/pull/22300)) ([#22383](https://github.com/go-gitea/gitea/pull/22383))
  * Fix gravatar disable bug ([#22337](https://github.com/go-gitea/gitea/pull/22337))
  * Fix update settings table on install ([#22326](https://github.com/go-gitea/gitea/pull/22326)) ([#22327](https://github.com/go-gitea/gitea/pull/22327))
  * Fix sitemap ([#22272](https://github.com/go-gitea/gitea/pull/22272)) ([#22320](https://github.com/go-gitea/gitea/pull/22320))
  * Fix code search title translation ([#22285](https://github.com/go-gitea/gitea/pull/22285)) ([#22316](https://github.com/go-gitea/gitea/pull/22316))
  * Fix due date rendering the wrong date in issue ([#22302](https://github.com/go-gitea/gitea/pull/22302)) ([#22306](https://github.com/go-gitea/gitea/pull/22306))
  * Fix get system setting bug when enabled redis cache ([#22298](https://github.com/go-gitea/gitea/pull/22298))
  * Fix bug of DisableGravatar default value ([#22297](https://github.com/go-gitea/gitea/pull/22297))
  * Fix key signature error page ([#22229](https://github.com/go-gitea/gitea/pull/22229)) ([#22230](https://github.com/go-gitea/gitea/pull/22230))
* TESTING
  * Remove test session cache to reduce possible concurrent problem ([#22199](https://github.com/go-gitea/gitea/pull/22199)) ([#22429](https://github.com/go-gitea/gitea/pull/22429))
* MISC
  * Restore previous official review when an official review is deleted ([#22449](https://github.com/go-gitea/gitea/pull/22449)) ([#22460](https://github.com/go-gitea/gitea/pull/22460))
  * Log STDERR of external renderer when it fails ([#22442](https://github.com/go-gitea/gitea/pull/22442)) ([#22444](https://github.com/go-gitea/gitea/pull/22444))