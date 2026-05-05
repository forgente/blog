---
date: 2020-03-11T00:00:00+00:00
authors: "guillep2k"
title: "Gitea 1.11.3 and 1.10.6 released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.10.6/1.11.3"
---

We are proud to present the releases of Gitea versions 1.11.3 and 1.10.6.

These are maintenance releases, and replace their respective previous patch versions due to a few mishaps that occurred during their release.
Our current latest release is now Gitea [1.11.3](https://dl.gitea.com/gitea/1.11.3/), but if you are running Gitea 1.10 and don't wish to upgrade
to our 1.11 branch yet, please update your system to [1.10.6](https://dl.gitea.com/gitea/1.10.6/), the latest of the 1.10 branch.

Full disclosure, the following problems affected our recent releases:

* 1.11.2 (now replaced by 1.11.3) was mistakenly compiled with Go 1.14, which Gitea is not currently fully tested with and it's known to cause [a few issues](https://github.com/go-gitea/gitea/issues/10661).
* 1.10.5 (replaced by 1.10.6 if you need to keep using the 1.10 branch) was incorrectly tagged, and was in fact a snapshot of our development branch (1.12-dev). It was also compiled with Go 1.14.

When upgrading, please skip any intermediate patch versions (e.g., **don't** go 1.11.0 &rarr; 1.11.1 &rarr; 1.11.2) but go straight to the latest patch release instead (you can upgrade to 1.11.3 directly from versions as old as 1.6.0). If you need or wish to upgrade through the intermediate major versions, always do it via the latest patch available for each one (1.6.4 &rarr; 1.7.6 &rarr; 1.8.3 &rarr; 1.9.6 &rarr; 1.10.6 &rarr; 1.11.3).

In particular, **do not use** any of these versions, as a bug in the upgrade process will delete attachments from the releases on your repositories. The affected versions are: v1.10.0, v1.10.1, v1.10.2, v1.10.3, v1.10.4, v1.11.0, and v1.11.1. See [#10526](https://github.com/go-gitea/gitea/issues/10526) for more information.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.11.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

<!--more-->

## Changelogs

## [1.11.3](https://github.com/go-gitea/gitea/releases/tag/v1.11.3) - 2020-03-10

* BUGFIXES
  * Prevent panic in stopwatch ([#10670](https://github.com/go-gitea/gitea/pull/10670)) ([#10673](https://github.com/go-gitea/gitea/pull/10673))
  * Fix bug on pull view when required status check no ci result ([#10648](https://github.com/go-gitea/gitea/pull/10648)) ([#10651](https://github.com/go-gitea/gitea/pull/10651))
  * Build explicitly with Go 1.13 ([#10684](https://github.com/go-gitea/gitea/pull/10684))

-------------------------

## [1.10.6](https://github.com/go-gitea/gitea/releases/tag/v1.10.6) - 2020-03-10

No new features or fixes were added in this version. 1.10.6 is a re-tag of Gitea 1.10.5, compiled with Go 1.13.8.

## 1.10.5 - 2020-03-06

* BUGFIXES
  * Fix release attachments being deleted while upgrading ([#10572](https://github.com/go-gitea/gitea/pull/10572)) ([#10574](https://github.com/go-gitea/gitea/pull/10574))

## [1.10.4](https://github.com/go-gitea/gitea/releases/tag/v1.10.4) - 2020-02-16

* FEATURE
  * Prevent empty LDAP search from deactivating all users ([#9879](https://github.com/go-gitea/gitea/pull/9879)) ([#9890](https://github.com/go-gitea/gitea/pull/9890))
* BUGFIXES
  * Fix reply on code review ([#10261](https://github.com/go-gitea/gitea/pull/10261)) ([#10227](https://github.com/go-gitea/gitea/pull/10227))
  * Fix branch page pull request title and link error ([#10092](https://github.com/go-gitea/gitea/pull/10092)) ([#10098](https://github.com/go-gitea/gitea/pull/10098))
  * Fix milestone API state parameter unhandled ([#10049](https://github.com/go-gitea/gitea/pull/10049)) ([#10053](https://github.com/go-gitea/gitea/pull/10053))
  * Fix wiki raw view on sub path ([#10002](https://github.com/go-gitea/gitea/pull/10002)) ([#10041](https://github.com/go-gitea/gitea/pull/10041))
  * Fix RocketChat Webhook ([#9908](https://github.com/go-gitea/gitea/pull/9908)) ([#9921](https://github.com/go-gitea/gitea/pull/9921)) ([#9925](https://github.com/go-gitea/gitea/pull/9925))
  * Fix bug about wrong dependencies permissions check and other wrong permissions check ([#9884](https://github.com/go-gitea/gitea/pull/9884)) (Partial backport [#9842](https://github.com/go-gitea/gitea/pull/9842))
  * Ensure that 2fa is checked on reset-password ([#9857](https://github.com/go-gitea/gitea/pull/9857)) ([#9877](https://github.com/go-gitea/gitea/pull/9877))
