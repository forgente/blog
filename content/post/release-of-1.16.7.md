---
date: "2022-05-02T13:14:52+07:00"
author: "jolheiser"
title: "Gitea 1.16.7 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.16.7.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [20](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.16.7+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->
We would like to give a special thanks to [E99p1ant](https://github.com/wuhan005) and [Li4n0](https://github.com/li4n0) from **Vidar-Team** 
and thanks to [@6543](https://gitea.com/6543) for submitting the security patch for this release.


You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.16.7/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.16.7](https://github.com/go-gitea/gitea/releases/tag/v1.16.7) - 2022-05-02

<!-- Changelog Details -->
* SECURITY
    * Escape git fetch remote ([#19487](https://github.com/go-gitea/gitea/pull/19487)) ([#19490](https://github.com/go-gitea/gitea/pull/19490))
* BUGFIXES
    * Don't overwrite err with nil ([#19572](https://github.com/go-gitea/gitea/pull/19572)) ([#19574](https://github.com/go-gitea/gitea/pull/19574))
    * On Migrations, only write commit-graph if wiki clone was successful ([#19563](https://github.com/go-gitea/gitea/pull/19563)) ([#19568](https://github.com/go-gitea/gitea/pull/19568))
    * Respect DefaultUserIsRestricted system default when creating new user ([#19310](https://github.com/go-gitea/gitea/pull/19310)) ([#19560](https://github.com/go-gitea/gitea/pull/19560))
    * Don't error when branch's commit doesn't exist ([#19547](https://github.com/go-gitea/gitea/pull/19547)) ([#19548](https://github.com/go-gitea/gitea/pull/19548))
    * Support `hostname:port` to pass host matcher's check ([#19543](https://github.com/go-gitea/gitea/pull/19543)) ([#19544](https://github.com/go-gitea/gitea/pull/19544))
    * Prevent intermittent race in attribute reader close ([#19537](https://github.com/go-gitea/gitea/pull/19537)) ([#19539](https://github.com/go-gitea/gitea/pull/19539))
    * Fix 64-bit atomic operations on 32-bit machines ([#19531](https://github.com/go-gitea/gitea/pull/19531)) ([#19532](https://github.com/go-gitea/gitea/pull/19532))
    * Prevent dangling archiver goroutine ([#19516](https://github.com/go-gitea/gitea/pull/19516)) ([#19526](https://github.com/go-gitea/gitea/pull/19526))
    * Fix migrate release from github ([#19510](https://github.com/go-gitea/gitea/pull/19510)) ([#19523](https://github.com/go-gitea/gitea/pull/19523))
    * When view _Siderbar or _Footer, just display once ([#19501](https://github.com/go-gitea/gitea/pull/19501)) ([#19522](https://github.com/go-gitea/gitea/pull/19522))
    * Fix blame page select range error and some typos ([#19503](https://github.com/go-gitea/gitea/pull/19503))
    * Fix name of doctor fix "authorized-keys" in hints ([#19464](https://github.com/go-gitea/gitea/pull/19464)) ([#19484](https://github.com/go-gitea/gitea/pull/19484))
    * User specific repoID or xorm builder conditions for issue search ([#19475](https://github.com/go-gitea/gitea/pull/19475)) ([#19476](https://github.com/go-gitea/gitea/pull/19476))
    * Prevent dangling cat-file calls (goroutine alternative) ([#19454](https://github.com/go-gitea/gitea/pull/19454)) ([#19466](https://github.com/go-gitea/gitea/pull/19466))
    * RepoAssignment ensure to close before overwrite ([#19449](https://github.com/go-gitea/gitea/pull/19449)) ([#19460](https://github.com/go-gitea/gitea/pull/19460))
    * Set correct PR status on 3way on conflict checking ([#19457](https://github.com/go-gitea/gitea/pull/19457)) ([#19458](https://github.com/go-gitea/gitea/pull/19458))
    * Mark TemplateLoading error as "UnprocessableEntity" ([#19445](https://github.com/go-gitea/gitea/pull/19445)) ([#19446](https://github.com/go-gitea/gitea/pull/19446))
