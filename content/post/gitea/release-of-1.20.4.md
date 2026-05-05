---
date: 2023-09-08T16:20:28+08:00
authors: 
  - "lunny"
title: "Gitea 1.20.4 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.20.4
---

We are proud to present the release of Gitea version 1.20.4.

We highly encourage users to update to this version for some important bug-fixes. This release is built with the latest released version of Golang resolve the announced CVEs with Golang.

We have merged [34](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.20.4+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.20.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.20.4](https://github.com/go-gitea/gitea/releases/tag/v1.20.4) - 2023-09-08

* SECURITY
  * Check blocklist for emails when adding them to account ([#26812](https://github.com/go-gitea/gitea/pull/26812)) ([#26831](https://github.com/go-gitea/gitea/pull/26831))
* ENHANCEMENTS
  * Add `branch_filter` to hooks API endpoints ([#26599](https://github.com/go-gitea/gitea/pull/26599)) ([#26632](https://github.com/go-gitea/gitea/pull/26632))
  * Fix incorrect "tabindex" attributes ([#26733](https://github.com/go-gitea/gitea/pull/26733)) ([#26734](https://github.com/go-gitea/gitea/pull/26734))
  * Use line-height: normal by default ([#26635](https://github.com/go-gitea/gitea/pull/26635)) ([#26708](https://github.com/go-gitea/gitea/pull/26708))
  * Fix unable to display individual-level project ([#26198](https://github.com/go-gitea/gitea/pull/26198)) ([#26636](https://github.com/go-gitea/gitea/pull/26636))
* BUGFIXES
  * Fix wrong review requested number ([#26784](https://github.com/go-gitea/gitea/pull/26784)) ([#26880](https://github.com/go-gitea/gitea/pull/26880))
  * Avoid double-unescaping of form value ([#26853](https://github.com/go-gitea/gitea/pull/26853)) ([#26863](https://github.com/go-gitea/gitea/pull/26863))
  * Redirect from `{repo}/issues/new` to `{repo}/issues/new/choose` when blank issues are disabled ([#26813](https://github.com/go-gitea/gitea/pull/26813)) ([#26847](https://github.com/go-gitea/gitea/pull/26847))
  * Sync tags when adopting repos ([#26816](https://github.com/go-gitea/gitea/pull/26816)) ([#26834](https://github.com/go-gitea/gitea/pull/26834))
  * Fix verifyCommits error when push a new branch ([#26664](https://github.com/go-gitea/gitea/pull/26664)) ([#26810](https://github.com/go-gitea/gitea/pull/26810))
  * Include the GITHUB_TOKEN/GITEA_TOKEN secret for fork pull requests ([#26759](https://github.com/go-gitea/gitea/pull/26759)) ([#26806](https://github.com/go-gitea/gitea/pull/26806))
  * Fix some slice append usages ([#26778](https://github.com/go-gitea/gitea/pull/26778)) ([#26798](https://github.com/go-gitea/gitea/pull/26798))
  * Add fix incorrect can_create_org_repo for org owner team ([#26683](https://github.com/go-gitea/gitea/pull/26683)) ([#26791](https://github.com/go-gitea/gitea/pull/26791))
  * Fix bug for ctx usage ([#26763](https://github.com/go-gitea/gitea/pull/26763))
  * Make issue template field template access correct template data ([#26698](https://github.com/go-gitea/gitea/pull/26698)) ([#26709](https://github.com/go-gitea/gitea/pull/26709))
  * Use correct minio error ([#26634](https://github.com/go-gitea/gitea/pull/26634)) ([#26639](https://github.com/go-gitea/gitea/pull/26639))
  * Ignore the trailing slashes when comparing oauth2 redirect_uri ([#26597](https://github.com/go-gitea/gitea/pull/26597)) ([#26618](https://github.com/go-gitea/gitea/pull/26618))
  * Set errwriter for urfave/cli v1 ([#26616](https://github.com/go-gitea/gitea/pull/26616))
  * Fix reopen logic for agit flow pull request ([#26399](https://github.com/go-gitea/gitea/pull/26399)) ([#26613](https://github.com/go-gitea/gitea/pull/26613))
  * Fix context filter has no effect in dashboard ([#26695](https://github.com/go-gitea/gitea/pull/26695)) ([#26811](https://github.com/go-gitea/gitea/pull/26811))
  * Fix being unable to use a repo that prohibits accepting PRs as a PR source. ([#26785](https://github.com/go-gitea/gitea/pull/26785)) ([#26790](https://github.com/go-gitea/gitea/pull/26790))
  * Fix Page Not Found error ([#26768](https://github.com/go-gitea/gitea/pull/26768))

<!-- Changelog Details -->
