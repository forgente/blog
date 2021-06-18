---
date: "2021-06-18T18:15:09+07:00"
author: "6543"
title: "Gitea 1.14.3 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.14.3.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [45](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.14.3+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.14.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.14.3](https://github.com/go-gitea/gitea/releases/tag/v1.14.3) - 2021-06-18

* SECURITY
  * Encrypt migration credentials at rest ([#15895](https://github.com/go-gitea/gitea/pull/15895)) ([#16187](https://github.com/go-gitea/gitea/pull/16187))
  * Only check access tokens if they are likely to be tokens ([#16164](https://github.com/go-gitea/gitea/pull/16164)) ([#16171](https://github.com/go-gitea/gitea/pull/16171))
  * Add missing SameSite settings for the i_like_gitea cookie ([#16037](https://github.com/go-gitea/gitea/pull/16037)) ([#16039](https://github.com/go-gitea/gitea/pull/16039))
  * Fix setting of SameSite on cookies ([#15989](https://github.com/go-gitea/gitea/pull/15989)) ([#15991](https://github.com/go-gitea/gitea/pull/15991))
* API
  * Repository object only count releases as releases ([#16184](https://github.com/go-gitea/gitea/pull/16184)) ([#16190](https://github.com/go-gitea/gitea/pull/16190))
  * EditOrg respect RepoAdminChangeTeamAccess option ([#16184](https://github.com/go-gitea/gitea/pull/16184)) ([#16190](https://github.com/go-gitea/gitea/pull/16190))
  * Fix overly strict edit pr permissions ([#15900](https://github.com/go-gitea/gitea/pull/15900)) ([#16081](https://github.com/go-gitea/gitea/pull/16081))
* BUGFIXES
  * Run processors on whole of text ([#16155](https://github.com/go-gitea/gitea/pull/16155)) ([#16185](https://github.com/go-gitea/gitea/pull/16185))
  * Class `issue-keyword` is being incorrectly stripped off spans ([#16163](https://github.com/go-gitea/gitea/pull/16163)) ([#16172](https://github.com/go-gitea/gitea/pull/16172))
  * Fix language switch for install page ([#16043](https://github.com/go-gitea/gitea/pull/16043)) ([#16128](https://github.com/go-gitea/gitea/pull/16128))
  * Fix bug on getIssueIDsByRepoID ([#16119](https://github.com/go-gitea/gitea/pull/16119)) ([#16124](https://github.com/go-gitea/gitea/pull/16124))
  * Set self-adjusting deadline for connection writing ([#16068](https://github.com/go-gitea/gitea/pull/16068)) ([#16123](https://github.com/go-gitea/gitea/pull/16123))
  * Fix http path bug ([#16117](https://github.com/go-gitea/gitea/pull/16117)) ([#16120](https://github.com/go-gitea/gitea/pull/16120))
  * Fix data URI scramble ([#16098](https://github.com/go-gitea/gitea/pull/16098)) ([#16118](https://github.com/go-gitea/gitea/pull/16118))
  * Merge all deleteBranch as one function and also fix bug when delete branch don't close related PRs ([#16067](https://github.com/go-gitea/gitea/pull/16067)) ([#16097](https://github.com/go-gitea/gitea/pull/16097))
  * git migration: don't prompt interactively for clone credentials ([#15902](https://github.com/go-gitea/gitea/pull/15902)) ([#16082](https://github.com/go-gitea/gitea/pull/16082))
  * Fix case change in ownernames ([#16045](https://github.com/go-gitea/gitea/pull/16045)) ([#16050](https://github.com/go-gitea/gitea/pull/16050))
  * Don't manipulate input params in email notification ([#16011](https://github.com/go-gitea/gitea/pull/16011)) ([#16033](https://github.com/go-gitea/gitea/pull/16033))
  * Remove branch URL before IssueRefURL ([#15968](https://github.com/go-gitea/gitea/pull/15968)) ([#15970](https://github.com/go-gitea/gitea/pull/15970))
  * Fix layout of milestone view ([#15927](https://github.com/go-gitea/gitea/pull/15927)) ([#15940](https://github.com/go-gitea/gitea/pull/15940))
  * GitHub Migration, migrate draft releases too ([#15884](https://github.com/go-gitea/gitea/pull/15884)) ([#15888](https://github.com/go-gitea/gitea/pull/15888))
  * Close the gitrepo when deleting the repository ([#15876](https://github.com/go-gitea/gitea/pull/15876)) ([#15887](https://github.com/go-gitea/gitea/pull/15887))
  * Upgrade xorm to v1.1.0 ([#15869](https://github.com/go-gitea/gitea/pull/15869)) ([#15885](https://github.com/go-gitea/gitea/pull/15885))
  * Fix blame row height alignment ([#15863](https://github.com/go-gitea/gitea/pull/15863)) ([#15883](https://github.com/go-gitea/gitea/pull/15883))
  * Fix error message when saving generated LOCAL_ROOT_URL config ([#15880](https://github.com/go-gitea/gitea/pull/15880)) ([#15882](https://github.com/go-gitea/gitea/pull/15882))
  * Backport Fix LFS commit finder not working ([#15856](https://github.com/go-gitea/gitea/pull/15856)) ([#15874](https://github.com/go-gitea/gitea/pull/15874))
  * Stop calling WriteHeader in Write ([#15862](https://github.com/go-gitea/gitea/pull/15862)) ([#15873](https://github.com/go-gitea/gitea/pull/15873))
  * Add timeout to writing to responses ([#15831](https://github.com/go-gitea/gitea/pull/15831)) ([#15872](https://github.com/go-gitea/gitea/pull/15872))
  * Return go-get info on subdirs ([#15642](https://github.com/go-gitea/gitea/pull/15642)) ([#15871](https://github.com/go-gitea/gitea/pull/15871))
  * Restore PAM user autocreation functionality ([#15825](https://github.com/go-gitea/gitea/pull/15825)) ([#15867](https://github.com/go-gitea/gitea/pull/15867))
  * Fix truncate utf8 string ([#15828](https://github.com/go-gitea/gitea/pull/15828)) ([#15854](https://github.com/go-gitea/gitea/pull/15854))
  * Fix bound address/port for caddy's certmagic library ([#15758](https://github.com/go-gitea/gitea/pull/15758)) ([#15848](https://github.com/go-gitea/gitea/pull/15848))
  * Upgrade unrolled/render to v1.1.1 ([#15845](https://github.com/go-gitea/gitea/pull/15845)) ([#15846](https://github.com/go-gitea/gitea/pull/15846))
  * Queue manager FlushAll can loop rapidly - add delay ([#15733](https://github.com/go-gitea/gitea/pull/15733)) ([#15840](https://github.com/go-gitea/gitea/pull/15840))
  * Tagger can be empty, as can Commit and Author - tolerate this ([#15835](https://github.com/go-gitea/gitea/pull/15835)) ([#15839](https://github.com/go-gitea/gitea/pull/15839))
  * Set autocomplete off on branches selector ([#15809](https://github.com/go-gitea/gitea/pull/15809)) ([#15833](https://github.com/go-gitea/gitea/pull/15833))
  * Add missing error to Doctor log ([#15813](https://github.com/go-gitea/gitea/pull/15813)) ([#15824](https://github.com/go-gitea/gitea/pull/15824))
  * Move restore repo to internal router and invoke from command to avoid open the same db file or queues files ([#15790](https://github.com/go-gitea/gitea/pull/15790)) ([#15816](https://github.com/go-gitea/gitea/pull/15816))
* ENHANCEMENTS
  * Removable media support to snap package ([#16136](https://github.com/go-gitea/gitea/pull/16136)) ([#16138](https://github.com/go-gitea/gitea/pull/16138))
  * Move sans-serif fallback font higher than emoji fonts ([#15855](https://github.com/go-gitea/gitea/pull/15855)) ([#15892](https://github.com/go-gitea/gitea/pull/15892))
* DOCKER
  * Only write config in environment-to-ini if there are changes ([#15861](https://github.com/go-gitea/gitea/pull/15861)) ([#15868](https://github.com/go-gitea/gitea/pull/15868))
  * Only offer hostcertificates if they exist ([#15849](https://github.com/go-gitea/gitea/pull/15849)) ([#15853](https://github.com/go-gitea/gitea/pull/15853))
