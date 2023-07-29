---
date: 2020-12-28T14:52:46+07:00
authors: "techknowlogick"
title: "Gitea 1.13.1 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.13.1.

We highly encourage users to update to this version for some important security fixes.

We have merged [33](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.13.1+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->
We would like to give a special thanks to Sebastian Goettsch ([@sgoettsch](https://github.com/sgoettsch)) for reporting a security issue that was patched in this release.  
Thanks to [@zeripath](https://github.com/zeripath) for fixing in [#14154](https://github.com/go-gitea/gitea/pull/14154), and [@6543](https://github.com/6543) for fixing another one in [#14031](https://github.com/go-gitea/gitea/pull/14031).


You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.13.1/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**  

<!--more-->

## Changelog

## [1.13.1](https://github.com/go-gitea/gitea/releases/tag/v1.13.1) - 2020-12-28

* SECURITY
  * Hide private participation in Orgs ([#13994](https://github.com/go-gitea/gitea/pull/13994)) ([#14031](https://github.com/go-gitea/gitea/pull/14031))
  * Fix escaping issue in diff ([#14153](https://github.com/go-gitea/gitea/pull/14153)) ([#14154](https://github.com/go-gitea/gitea/pull/14154))
* BUGFIXES
  * Fix bug of link query order on markdown render ([#14156](https://github.com/go-gitea/gitea/pull/14156)) ([#14171](https://github.com/go-gitea/gitea/pull/14171))
  * Drop long repo topics during migration ([#14152](https://github.com/go-gitea/gitea/pull/14152)) ([#14155](https://github.com/go-gitea/gitea/pull/14155))
  * Ensure that search term and page are not lost on adoption page-turn ([#14133](https://github.com/go-gitea/gitea/pull/14133)) ([#14143](https://github.com/go-gitea/gitea/pull/14143))
  * Fix storage config implementation ([#14091](https://github.com/go-gitea/gitea/pull/14091)) ([#14095](https://github.com/go-gitea/gitea/pull/14095))
  * Fix panic in BasicAuthDecode ([#14046](https://github.com/go-gitea/gitea/pull/14046)) ([#14048](https://github.com/go-gitea/gitea/pull/14048))
  * Always wait for the cmd to finish ([#14006](https://github.com/go-gitea/gitea/pull/14006)) ([#14039](https://github.com/go-gitea/gitea/pull/14039))
  * Don't use simpleMDE editor on mobile devices for 1.13 ([#14029](https://github.com/go-gitea/gitea/pull/14029))
  * Fix incorrect review comment diffs ([#14002](https://github.com/go-gitea/gitea/pull/14002)) ([#14011](https://github.com/go-gitea/gitea/pull/14011))
  * Trim the branch prefix from action.GetBranch ([#13981](https://github.com/go-gitea/gitea/pull/13981)) ([#13986](https://github.com/go-gitea/gitea/pull/13986))
  * Ensure template renderer is available before storage handler ([#13164](https://github.com/go-gitea/gitea/pull/13164)) ([#13982](https://github.com/go-gitea/gitea/pull/13982))
  * Whenever the password is updated ensure that the hash algorithm is too ([#13966](https://github.com/go-gitea/gitea/pull/13966)) ([#13967](https://github.com/go-gitea/gitea/pull/13967))
  * Enforce setting HEAD in wiki to master ([#13950](https://github.com/go-gitea/gitea/pull/13950)) ([#13961](https://github.com/go-gitea/gitea/pull/13961))
  * Fix feishu webhook caused by API changed ([#13938](https://github.com/go-gitea/gitea/pull/13938))
  * Fix Quote Reply button on review diff ([#13830](https://github.com/go-gitea/gitea/pull/13830)) ([#13898](https://github.com/go-gitea/gitea/pull/13898))
  * Fix Pull Merge when tag with same name as base branch exist ([#13882](https://github.com/go-gitea/gitea/pull/13882)) ([#13896](https://github.com/go-gitea/gitea/pull/13896))
  * Fix mermaid chart size ([#13865](https://github.com/go-gitea/gitea/pull/13865))
  * Fix branch/tag notifications in mirror sync ([#13855](https://github.com/go-gitea/gitea/pull/13855)) ([#13862](https://github.com/go-gitea/gitea/pull/13862))
  * Fix crash in short link processor ([#13839](https://github.com/go-gitea/gitea/pull/13839)) ([#13841](https://github.com/go-gitea/gitea/pull/13841))
  * Update font stack to bootstrap's latest ([#13834](https://github.com/go-gitea/gitea/pull/13834)) ([#13837](https://github.com/go-gitea/gitea/pull/13837))
  * Make sure email recipients can see issue ([#13820](https://github.com/go-gitea/gitea/pull/13820)) ([#13827](https://github.com/go-gitea/gitea/pull/13827))
  * Reply button is not removed when deleting a code review comment ([#13824](https://github.com/go-gitea/gitea/pull/13824))
  * When reinitialising DBConfig reset the database use flags ([#13796](https://github.com/go-gitea/gitea/pull/13796)) ([#13811](https://github.com/go-gitea/gitea/pull/13811))
* ENHANCEMENTS
  * Add emoji in label to project boards ([#13978](https://github.com/go-gitea/gitea/pull/13978)) ([#14021](https://github.com/go-gitea/gitea/pull/14021))
  * Send webhook when tag is removed via Web UI ([#14015](https://github.com/go-gitea/gitea/pull/14015)) ([#14019](https://github.com/go-gitea/gitea/pull/14019))
  * Use Process Manager to create own Context ([#13792](https://github.com/go-gitea/gitea/pull/13792)) ([#13793](https://github.com/go-gitea/gitea/pull/13793))
* API
  * GetCombinedCommitStatusByRef always return json & swagger doc fixes ([#14047](https://github.com/go-gitea/gitea/pull/14047))
  * Return original URL of Repositories ([#13885](https://github.com/go-gitea/gitea/pull/13885)) ([#13886](https://github.com/go-gitea/gitea/pull/13886))


