---
date: 2017-10-16T17:22:30+01:00
authors: "daviian"
title: "Release of 1.2.1"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.2.1"
---

We proudly present the bugfix release of Gitea version 1.2.1. We have merged [5](https://github.com/go-gitea/gitea/milestone/15?closed=1) pull requests to release this version. You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.2.1/), you just need to select the correct platform. For further details of the installation follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

<!--more-->

## Changelog

* BUGFIXES
  * Fix PR, milestone and label functionality if issue unit is disabled (#2710) (#2714)
  * Fix plain readme didn't render correctly on repo home page (#2705) (#2712)
  * Fix so that user can still fork his own repository to his organizations (#2699) (#2707)
  * Fix .netrc authentication (#2700) (#2708)
  * Fix slice out of bounds error in mailer (#2479) (#2696)