---
date: 2023-07-22T11:35:00+02:00
authors:
  - "delvh"
  - "jolheiser"
title: "Gitea 1.20.1 is released"
tags: ["release"]
draft: false
coverImage: /article-logo/1.20.1-release.webp
---

Gitea 1.20.1 is now released including [21](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.20.1+is%3Aclosed) merged PRs.

We urge you to update **as soon as possible**.  
1.20.0 has a critical security bug related to one of the new changes:

> ### :warning: Any URL scheme may be used for links ([#24805](https://github.com/go-gitea/gitea/pull/24805))

It was even possible to use the `javascript:`, `vbscript:` and `data:` URL schemes, which can directly execute code on your computer.  
This should not be possible as it means clicking on a link by a user you don't trust can compromise your entire system (although the latter two schemes are only a risk in older browsers).

<!-- Security Thanks! -->
Thanks to Holger Just for discovering and disclosing the issue to us!

You can download Gitea 1.20.1 for example from our [downloads page](https://dl.gitea.com/gitea/1.20.1/). Please read our [installation guide](https://docs.gitea.com/1.20/installation/install-from-binary) for more information on installation.

## Changelog

* SECURITY
  * Disallow dangerous URL schemes (#25960) (#25964)
* ENHANCEMENTS
  * Show the mismatched ROOT_URL warning on the sign-in page if OAuth2 is enabled (#25947) (#25972)
  * Make pending commit status yellow again (#25935) (#25968)
* BUGFIXES
  * Fix version in rpm repodata/primary.xml.gz (#26009) (#26048)
  * Fix env config parsing for "GITEA____APP_NAME" (#26001) (#26013)
  * ParseScope with owner/repo always sets owner to zero (#25987) (#25989)
  * Fix SSPI auth panic (#25955) (#25969)
  * Avoid creating directories when loading config (#25944) (#25957)
  * Make environment-to-ini work with INSTALL_LOCK=true (#25926) (#25937)
  * Ignore `runs-on` with expressions when warning no matched runners (#25917) (#25933)
  * Avoid opening/closing PRs which are already merged (#25883) (#25903)
* DOCS
  * RPM Registry: Show zypper commands for SUSE based distros as well (#25981) (#26020)
  * Correctly refer to dev tags as nightly in the docker docs (#26004) (#26019)
  * Update path related documents (#25417) (#25982)
* MISC
  * Adding remaining enum for migration repo model type. (#26021) (#26034)
  * Fix the route for pull-request's authors (#26016) (#26018)
  * Fix commit status color on dashboard repolist (#25993) (#25998)
  * Avoid hard-coding height in language dropdown menu (#25986) (#25997)
  * Add shutting down notice (#25920) (#25922)
  * Fix incorrect milestone count when provide a keyword (#25880) (#25904)

## Contributors to this release

* [@KN4CK3R](https://github.com/KN4CK3R)
* [@shollander](https://github.com/shollander)
* [@wxiaoguang](https://github.com/wxiaoguang)

