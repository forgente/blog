---
date: 2025-06-19T14:14:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.24.1 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.24.1
---

We are excited to announce the release of **Gitea version 1.24.1**!

This update includes important bug fixes and improvements. We strongly recommend all users upgrade to this version to ensure optimal stability and performance.

A total of [17](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.24.1+is%3Amerged) pull requests have been merged into this release, thanks to the continued contributions from our community.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.24.1/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.24.1](https://github.com/go-gitea/gitea/releases/tag/v1.24.1) - 2025-06-19

* ENHANCEMENTS   

  * Improve alignment of commit status icon on commit page (#34750) (#34757)  
  * Support title and body query parameters for new PRs (#34537) (#34752)

* BUGFIXES
  * When using rules to delete packages, remove unclean bugs (#34632) (#34761)
  * Fix ghost user in feeds when pushing in an actions, it should be gitea-actions (#34703) (#34756)
  * Prevent double markdown link brackets when pasting URL (#34745) (#34748)
  * Prevent duplicate form submissions when creating forks (#34714) (#34735)
  * Fix markdown wrap (#34697) (#34702)
  * Fix pull requests API convert panic when head repository is deleted. (#34685) (#34687)
  * Fix commit message rendering and some UI problems (#34680) (#34683)
  * Fix container range bug (#34725) (#34732)
  * Fix incorrect cli default values (#34765) (#34766)
  * Fix dropdown filter (#34708) (#34711)
  * Hide href attribute of a tag if there is no target_url (#34556) (#34684)
  * Fix tag target (#34781) #34783

## Contributors

* [@anthony-zh](https://github.com/anthony-zh)
* [@endo0911engineer](https://github.com/endo0911engineer)
* [@kerwin612](https://github.com/kerwin612)
* [@lunny](https://github.com/lunny)
* [@MaxWebZ](https://github.com/MaxWebZ)
* [@silverwind](https://github.com/silverwind)
* [@wxiaoguang](https://github.com/wxiaoguang)
