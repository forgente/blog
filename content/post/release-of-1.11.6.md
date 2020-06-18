---
date: "2020-05-30T10:00:00+00:00"
author: "jolheiser"
title: "Gitea 1.11.6 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.11.6.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [18](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.11.6+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.11.6/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

## [1.11.6](https://github.com/go-gitea/gitea/releases/tag/v1.11.6) - 2020-05-30

* SECURITY
  * Fix missing authorization check on pull for public repos of private/limited org ([#11656](https://github.com/go-gitea/gitea/pull/11656)) ([#11683](https://github.com/go-gitea/gitea/pull/11683))
  * Use session for retrieving org teams ([#11438](https://github.com/go-gitea/gitea/pull/11438)) ([#11439](https://github.com/go-gitea/gitea/pull/11439))
* BUGFIXES
  * Return json on 500 error from API ([#11574](https://github.com/go-gitea/gitea/pull/11574)) ([#11660](https://github.com/go-gitea/gitea/pull/11660))
  * Fix wrong milestone in webhook message ([#11596](https://github.com/go-gitea/gitea/pull/11596)) ([#11612](https://github.com/go-gitea/gitea/pull/11612))
  * Prevent (caught) panic on login ([#11590](https://github.com/go-gitea/gitea/pull/11590)) ([#11598](https://github.com/go-gitea/gitea/pull/11598))
  * Fix commit page js error ([#11527](https://github.com/go-gitea/gitea/pull/11527))
  * Use media links for img in post-process ([#10515](https://github.com/go-gitea/gitea/pull/10515)) ([#11504](https://github.com/go-gitea/gitea/pull/11504))
  * Ensure public repositories in private organizations are visible and fix admin organizations list ([#11465](https://github.com/go-gitea/gitea/pull/11465)) ([#11475](https://github.com/go-gitea/gitea/pull/11475))
  * Set correct Content-Type value for Gogs/Gitea webhooks ([#9504](https://github.com/go-gitea/gitea/pull/9504)) ([#10456](https://github.com/go-gitea/gitea/pull/10456)) ([#11461](https://github.com/go-gitea/gitea/pull/11461))
  * Allow all members of private orgs to see public repos ([#11442](https://github.com/go-gitea/gitea/pull/11442)) ([#11459](https://github.com/go-gitea/gitea/pull/11459))
  * Whenever the ctx.Session is updated, release it to save it before sending the redirect ([#11456](https://github.com/go-gitea/gitea/pull/11456)) ([#11457](https://github.com/go-gitea/gitea/pull/11457))
  * Forcibly clean and destroy the session on logout ([#11447](https://github.com/go-gitea/gitea/pull/11447)) ([#11451](https://github.com/go-gitea/gitea/pull/11451))
  * Fix /api/v1/orgs/* endpoints by changing parameter to :org from :orgname ([#11381](https://github.com/go-gitea/gitea/pull/11381))
  * Add tracked time fix to doctor (part of [#11111](https://github.com/go-gitea/gitea/pull/11111)) ([#11138](https://github.com/go-gitea/gitea/pull/11138))
  * Fix webpack chunk loading with STATIC_URL_PREFIX ([#11526](https://github.com/go-gitea/gitea/pull/11526)) ([#11544](https://github.com/go-gitea/gitea/pull/11544))
  * Remove unnecessary parentheses in wiki/revision.tmpl to allow 1.11 to build on go1.14  ([#11481](https://github.com/go-gitea/gitea/pull/11481))
