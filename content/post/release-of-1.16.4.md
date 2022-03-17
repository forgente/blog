---
date: "2022-03-14T23:54:02+07:00"
author: "6543"
title: "Gitea 1.16.4 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.16.4.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [17](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.16.4+is%3Amerged) pull requests to release this version.

We would like to give a special thanks to **Maxim Suslov** (independent security researcher), [@huntrdev](https://twitter.com/huntrdev) to report the security problems and thanks to [@lunny](https://gitea.com/lunny), [@zeripath](https://gitea.com/zeripath) and [@6543](https://gitea.com/6543) for submitting the security patches for this release.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.16.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

## Breaking Change: Refactor mirror code & fix StartToMirror ([#19075](https://github.com/go-gitea/gitea/pull/19075))

This PR will make old queue entrys unredable for the new version, make sure to flush the mirror sync queue before updating.

## Breaking Change: Restrict email address validation ([#19085](https://github.com/go-gitea/gitea/pull/19085))

Narrow the allowed chars a email address can have.

## Breaking Change: Add pam account authorization check ([#18904](https://github.com/go-gitea/gitea/pull/18904))

Users of the PAM module who rely on account modules not being checked will need to change their PAM configuration.

<!--more-->

## Changelog

## [1.16.4](https://github.com/go-gitea/gitea/releases/tag/v1.16.4) - 2022-03-14

* SECURITY
  * Restrict email address validation ([#17688](https://github.com/go-gitea/gitea/pull/17688)) ([#19085](https://github.com/go-gitea/gitea/pull/19085))
  * Fix lfs bug ([#19072](https://github.com/go-gitea/gitea/pull/19072)) ([#19080](https://github.com/go-gitea/gitea/pull/19080))
* ENHANCEMENTS
  * Improve SyncMirrors logging ([#19045](https://github.com/go-gitea/gitea/pull/19045)) ([#19050](https://github.com/go-gitea/gitea/pull/19050))
* BUGFIXES
  * Refactor mirror code & fix `StartToMirror` ([#18904](https://github.com/go-gitea/gitea/pull/18904)) ([#19075](https://github.com/go-gitea/gitea/pull/19075))
  * Update the webauthn_credential_id_sequence in Postgres ([#19048](https://github.com/go-gitea/gitea/pull/19048)) ([#19060](https://github.com/go-gitea/gitea/pull/19060))
  * Prevent 500 when there is an error during new auth source post ([#19041](https://github.com/go-gitea/gitea/pull/19041)) ([#19059](https://github.com/go-gitea/gitea/pull/19059))
  * If rendering has failed due to a net.OpError stop rendering (attempt 2) ([#19049](https://github.com/go-gitea/gitea/pull/19049)) ([#19056](https://github.com/go-gitea/gitea/pull/19056))
  * Fix flag validation ([#19046](https://github.com/go-gitea/gitea/pull/19046)) ([#19051](https://github.com/go-gitea/gitea/pull/19051))
  * Add pam account authorization check ([#19040](https://github.com/go-gitea/gitea/pull/19040)) ([#19047](https://github.com/go-gitea/gitea/pull/19047))
  * Ignore missing comment for user notifications ([#18954](https://github.com/go-gitea/gitea/pull/18954)) ([#19043](https://github.com/go-gitea/gitea/pull/19043))
  * Set `rel="nofollow noindex"` on new issue links ([#19023](https://github.com/go-gitea/gitea/pull/19023)) ([#19042](https://github.com/go-gitea/gitea/pull/19042))
  * Upgrading binding package ([#19034](https://github.com/go-gitea/gitea/pull/19034)) ([#19035](https://github.com/go-gitea/gitea/pull/19035))
  * Don't show context cancelled errors in attribute reader ([#19006](https://github.com/go-gitea/gitea/pull/19006)) ([#19027](https://github.com/go-gitea/gitea/pull/19027))
  * Fix update hint bug ([#18996](https://github.com/go-gitea/gitea/pull/18996)) ([#19002](https://github.com/go-gitea/gitea/pull/19002))
* MISC
  *  Fix potential assignee query for repo ([#18994](https://github.com/go-gitea/gitea/pull/18994)) ([#18999](https://github.com/go-gitea/gitea/pull/18999))
