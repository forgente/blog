---
date: "2023-02-21T10:01:40+07:00"
author: "jolheiser"
title: "Gitea 1.18.5 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.18.5.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [8](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.18.5+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.18.5/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.18.5](https://github.com/go-gitea/gitea/releases/tag/v1.18.5) - 2023-02-21

<!-- Changelog Details -->
* ENHANCEMENTS
  * Hide 2FA status from other members in organization members list ([#22999](https://github.com/go-gitea/gitea/pull/22999)) ([#23023](https://github.com/go-gitea/gitea/pull/23023))
* BUGFIXES
  * Add force_merge to merge request and fix checking mergable ([#23010](https://github.com/go-gitea/gitea/pull/23010)) ([#23032](https://github.com/go-gitea/gitea/pull/23032))
  * Use `--message=%s` for git commit message ([#23028](https://github.com/go-gitea/gitea/pull/23028)) ([#23029](https://github.com/go-gitea/gitea/pull/23029))
  * Render access log template as text instead of HTML ([#23013](https://github.com/go-gitea/gitea/pull/23013)) ([#23025](https://github.com/go-gitea/gitea/pull/23025))
  * Fix the Manually Merged form ([#23015](https://github.com/go-gitea/gitea/pull/23015)) ([#23017](https://github.com/go-gitea/gitea/pull/23017))
  * Use beforeCommit instead of baseCommit ([#22949](https://github.com/go-gitea/gitea/pull/22949)) ([#22996](https://github.com/go-gitea/gitea/pull/22996))
  * Display attachments of review comment when comment content is blank ([#23035](https://github.com/go-gitea/gitea/pull/23035)) ([#23046](https://github.com/go-gitea/gitea/pull/23046))
  * Return empty url for submodule tree entries ([#23043](https://github.com/go-gitea/gitea/pull/23043)) ([#23048](https://github.com/go-gitea/gitea/pull/23048)) 