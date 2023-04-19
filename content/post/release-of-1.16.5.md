---
date: "2022-03-24T02:04:15+01:00"
author: "zeripath"
title: "Gitea 1.16.5 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.16.5.

We strongly advise users to update to this version for some important bug-fixes and several security fixes.

We have merged [23](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.16.5+is%3Amerged) pull requests to release this version.

We would like to give a special thanks to [@kdumont](https://gitea.com/kdumont), [@zeripath](https://gitea.com/zeripath), [@rajbabai8](https://github.com/rajbabai8) for reporting the security problems from huntr and internally, and thanks to [@zeripath](https://gitea.com/zeripath) for submitting the security patches for this release.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.16.5/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

## Breaking Change: Bump to build with go1.18 ([#19120](https://github.com/go-gitea/gitea/pull/19120) et al) ([#19127](https://github.com/go-gitea/gitea/pull/19127))

Go 1.18 has been released and with its release 1.16 has been deprecated.
In order to be able to build with 1.18 several packages have had to be
updated. This PR collates these together and changes our build process
to build with 1.18.

<!--more-->

## Changelog


## [1.16.5](https://github.com/go-gitea/gitea/releases/tag/v1.16.5) - 2022-03-23

* BREAKING
  * Bump to build with go1.18 ([#19120](https://github.com/go-gitea/gitea/pull/19120) et al) ([#19127](https://github.com/go-gitea/gitea/pull/19127))
* SECURITY
  * Prevent redirect to Host (2) ([#19175](https://github.com/go-gitea/gitea/pull/19175)) ([#19186](https://github.com/go-gitea/gitea/pull/19186))
  * Try to prevent autolinking of displaynames by email readers ([#19169](https://github.com/go-gitea/gitea/pull/19169)) ([#19183](https://github.com/go-gitea/gitea/pull/19183))
  * Clean paths when looking in Storage ([#19124](https://github.com/go-gitea/gitea/pull/19124)) ([#19179](https://github.com/go-gitea/gitea/pull/19179))
  * Do not send notification emails to inactive users ([#19131](https://github.com/go-gitea/gitea/pull/19131)) ([#19139](https://github.com/go-gitea/gitea/pull/19139))
  * Do not send activation email if manual confirm is set ([#19119](https://github.com/go-gitea/gitea/pull/19119)) ([#19122](https://github.com/go-gitea/gitea/pull/19122))
* ENHANCEMENTS
  * Use the new/choose link for New Issue on project page ([#19172](https://github.com/go-gitea/gitea/pull/19172)) ([#19176](https://github.com/go-gitea/gitea/pull/19176))
* BUGFIXES
  * Fix showing issues in your repositories ([#18916](https://github.com/go-gitea/gitea/pull/18916)) ([#19191](https://github.com/go-gitea/gitea/pull/19191))
  * Fix compare link in active feeds for new branch ([#19149](https://github.com/go-gitea/gitea/pull/19149)) ([#19185](https://github.com/go-gitea/gitea/pull/19185))
  * Redirect .wiki/* ui link to /wiki ([#18831](https://github.com/go-gitea/gitea/pull/18831)) ([#19184](https://github.com/go-gitea/gitea/pull/19184))
  * Ensure deploy keys with write access can push ([#19010](https://github.com/go-gitea/gitea/pull/19010)) ([#19182](https://github.com/go-gitea/gitea/pull/19182))
  * Ensure that setting.LocalURL always has a trailing slash ([#19171](https://github.com/go-gitea/gitea/pull/19171)) ([#19177](https://github.com/go-gitea/gitea/pull/19177))
  * Cleanup protected branches when deleting users & teams ([#19158](https://github.com/go-gitea/gitea/pull/19158)) ([#19174](https://github.com/go-gitea/gitea/pull/19174))
  * Use IterateBufferSize whilst querying repositories during adoption check ([#19140](https://github.com/go-gitea/gitea/pull/19140)) ([#19160](https://github.com/go-gitea/gitea/pull/19160))
  * Fix NPE /repos/issues/search when not signed in ([#19154](https://github.com/go-gitea/gitea/pull/19154)) ([#19155](https://github.com/go-gitea/gitea/pull/19155))
  * Use custom favicon when viewing static files if it exists ([#19130](https://github.com/go-gitea/gitea/pull/19130)) ([#19152](https://github.com/go-gitea/gitea/pull/19152))
  * Fix the editor height in review box ([#19003](https://github.com/go-gitea/gitea/pull/19003)) ([#19147](https://github.com/go-gitea/gitea/pull/19147))
  * Ensure isSSH is set whenever DISABLE_HTTP_GIT is set ([#19028](https://github.com/go-gitea/gitea/pull/19028)) ([#19146](https://github.com/go-gitea/gitea/pull/19146))
  * Fix wrong scopes caused by empty scope input ([#19029](https://github.com/go-gitea/gitea/pull/19029)) ([#19145](https://github.com/go-gitea/gitea/pull/19145))
  * Make migrations SKIP_TLS_VERIFY apply to git too ([#19132](https://github.com/go-gitea/gitea/pull/19132)) ([#19141](https://github.com/go-gitea/gitea/pull/19141))
  * Handle email address not exist ([#19089](https://github.com/go-gitea/gitea/pull/19089)) ([#19121](https://github.com/go-gitea/gitea/pull/19121))
* MISC
  * Update json-iterator to allow compilation with go1.18 ([#18644](https://github.com/go-gitea/gitea/pull/18644)) ([#19100](https://github.com/go-gitea/gitea/pull/19100))
  * Update golang.org/x/crypto ([#19097](https://github.com/go-gitea/gitea/pull/19097)) ([#19098](https://github.com/go-gitea/gitea/pull/19098))
