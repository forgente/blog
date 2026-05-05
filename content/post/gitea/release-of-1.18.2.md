---
date: 2023-01-19T14:30:54+07:00
authors: "jolheiser"
title: "Gitea 1.18.2 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.18.2"
---

We are proud to present the release of Gitea version 1.18.2.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [8](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.18.2+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->
Thanks to everyone who reported the git vulnerability, which should naturally be patched in the `1.18.2` docker images by virtue of alpine having a patched version of git available.  

:exclamation: :exclamation: :exclamation: For anyone who doesn't use docker, you will need to update your version of git to a version with the security patch applied.

> The patched versions are the following:  
\>= `v2.30.7`, `v2.31.6`, `v2.32.5`, `v2.33.6`, `v2.34.6`, `v2.35.6`, `v2.36.4`, `v2.37.5`, `v2.38.3`, `v2.39.1`

More information can be found at https://github.com/git/git/security/advisories/GHSA-c738-c5qq-xg89


You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.18.2/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.18.2](https://github.com/go-gitea/gitea/releases/tag/v1.18.2) - 2023-01-19

<!-- Changelog Details -->
* BUGFIXES
  * When updating by rebase we need to set the environment for head repo ([#22535](https://github.com/go-gitea/gitea/pull/22535)) ([#22536](https://github.com/go-gitea/gitea/pull/22536))
  * Fix issue not auto-closing when it includes a reference to a branch ([#22514](https://github.com/go-gitea/gitea/pull/22514)) ([#22521](https://github.com/go-gitea/gitea/pull/22521))
  * Fix invalid issue branch reference if not specified in template ([#22513](https://github.com/go-gitea/gitea/pull/22513)) ([#22520](https://github.com/go-gitea/gitea/pull/22520))
  * Fix 500 error viewing pull request when fork has pull requests disabled ([#22512](https://github.com/go-gitea/gitea/pull/22512)) ([#22515](https://github.com/go-gitea/gitea/pull/22515))
  * Reliable selection of admin user ([#22509](https://github.com/go-gitea/gitea/pull/22509)) ([#22511](https://github.com/go-gitea/gitea/pull/22511))
  * Set disable_gravatar/enable_federated_avatar when offline mode is true ([#22479](https://github.com/go-gitea/gitea/pull/22479)) ([#22496](https://github.com/go-gitea/gitea/pull/22496))
* BUILD
  * cgo cross-compile for freebsd ([#22397](https://github.com/go-gitea/gitea/pull/22397)) ([#22519](https://github.com/go-gitea/gitea/pull/22519))