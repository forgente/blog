---
date: "2020-03-06T10:00:00+00:00"
author: "zeripath"
title: "Gitea 1.11.2 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.11.2. 

This release contains several important security fixes and multiple critical bug fixes. All users of Gitea are recommended to upgrade to this release.

(Further, there was a critical bug in our upgrade process present in versions v1.10.0 through v1.10.4, and v1.11.0 through v1.11.1 which could cause data loss. This bug was fixed in 1.11.2 and 1.10.5, should users require to upgrade via v1.10.)

We have merged [40](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.11.2+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.11.2/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

<!--more-->

## Breaking Change: Various fixes in login sources ([#10428](https://github.com/go-gitea/gitea/pull/10428))

This PR has two major components:

* A breaking change whereby users from external login sources (eg. PAM and SMTP authentication) will only be autoregistered if the username is valid i.e. `[A-Za-z0-9_.-]+`.
* For PAM authentication `pam_get_item(PAM_USER)` will be called to allow PAM pipelines to adjust the username.

## Critical Bugfix: Fix release attachments being deleted while upgrading ([#10572](https://github.com/go-gitea/gitea/pull/10572)) ([#10573](https://github.com/go-gitea/gitea/pull/10573))

This PR fixes a critical error in migration `models/migrations/v96.go` first reported as [#10526](https://github.com/go-gitea/gitea/issues/10526). This migration caused the permanent deletion of release attachments whilst upgrading to 1.10-rc1+. Unfortunately users affected by this bug will have had their release attachments deleted.

Users who have not upgraded to 1.10 or 1.11 yet should upgrade straight to 1.10.5 or 1.11.2. (In general users should always upgrade to the last patch version available for each minor version and not iterate through each patch version.)

## Changelog

## [1.11.2](https://github.com/go-gitea/gitea/releases/tag/v1.11.2) - 2020-03-06

* BREAKING
  * Various fixes in login sources ([#10428](https://github.com/go-gitea/gitea/pull/10428)) ([#10429](https://github.com/go-gitea/gitea/pull/10429))
* SECURITY
  * Ensure only own addresses are updated ([#10397](https://github.com/go-gitea/gitea/pull/10397)) ([#10399](https://github.com/go-gitea/gitea/pull/10399))
  * Logout POST action ([#10582](https://github.com/go-gitea/gitea/pull/10582)) ([#10585](https://github.com/go-gitea/gitea/pull/10585))
  * Org action fixes and form cleanup ([#10512](https://github.com/go-gitea/gitea/pull/10512)) ([#10514](https://github.com/go-gitea/gitea/pull/10514))
  * Change action GETs to POST ([#10462](https://github.com/go-gitea/gitea/pull/10462)) ([#10464](https://github.com/go-gitea/gitea/pull/10464))
  * Fix admin notices ([#10480](https://github.com/go-gitea/gitea/pull/10480)) ([#10483](https://github.com/go-gitea/gitea/pull/10483))
  * Change admin dashboard to POST ([#10465](https://github.com/go-gitea/gitea/pull/10465)) ([#10466](https://github.com/go-gitea/gitea/pull/10466))
  * Update markbates/goth ([#10444](https://github.com/go-gitea/gitea/pull/10444)) ([#10445](https://github.com/go-gitea/gitea/pull/10445))
  * Update crypto vendors ([#10385](https://github.com/go-gitea/gitea/pull/10385)) ([#10398](https://github.com/go-gitea/gitea/pull/10398))
* BUGFIXES
  * Allow users with write permissions to modify issue descriptions and comments. ([#10623](https://github.com/go-gitea/gitea/pull/10623)) ([#10626](https://github.com/go-gitea/gitea/pull/10626))
  * Handle deleted base branch in PR ([#10618](https://github.com/go-gitea/gitea/pull/10618)) ([#10619](https://github.com/go-gitea/gitea/pull/10619))
  * Delete dependencies when deleting a repository ([#10608](https://github.com/go-gitea/gitea/pull/10608)) ([#10616](https://github.com/go-gitea/gitea/pull/10616))
  * Ensure executable bit is kept on the web editor ([#10607](https://github.com/go-gitea/gitea/pull/10607)) ([#10614](https://github.com/go-gitea/gitea/pull/10614))
  * Update mergebase in pr checker ([#10586](https://github.com/go-gitea/gitea/pull/10586)) ([#10605](https://github.com/go-gitea/gitea/pull/10605))
  * Fix release attachments being deleted while upgrading ([#10572](https://github.com/go-gitea/gitea/pull/10572)) ([#10573](https://github.com/go-gitea/gitea/pull/10573))
  * Fix redirection path if Slack webhook channel is invalid ([#10566](https://github.com/go-gitea/gitea/pull/10566))
  * Fix head.tmpl og:image picture location ([#10531](https://github.com/go-gitea/gitea/pull/10531)) ([#10556](https://github.com/go-gitea/gitea/pull/10556))
  * Fix 404 after activating secondary email ([#10547](https://github.com/go-gitea/gitea/pull/10547)) ([#10553](https://github.com/go-gitea/gitea/pull/10553))
  * Show Signer in commit lists and add basic trust ([#10425](https://github.com/go-gitea/gitea/pull/10425) & [#10511](https://github.com/go-gitea/gitea/pull/10511)) ([#10524](https://github.com/go-gitea/gitea/pull/10524))
  * Fix potential bugs ([#10513](https://github.com/go-gitea/gitea/pull/10513)) ([#10518](https://github.com/go-gitea/gitea/pull/10518))
  * Use \[:space:\] instead of \\s ([#10508](https://github.com/go-gitea/gitea/pull/10508)) ([#10509](https://github.com/go-gitea/gitea/pull/10509))
  * Avoid mailing users that have explicitly unwatched an issue ([#10475](https://github.com/go-gitea/gitea/pull/10475)) ([#10500](https://github.com/go-gitea/gitea/pull/10500))
  * Handle push rejection message in Merge & Web Editor ([#10373](https://github.com/go-gitea/gitea/pull/10373)) ([#10497](https://github.com/go-gitea/gitea/pull/10497))
  * Fix SQLite concurrency problems by using BEGIN IMMEDIATE ([#10368](https://github.com/go-gitea/gitea/pull/10368)) ([#10493](https://github.com/go-gitea/gitea/pull/10493))
  * Fix double PR notification from API ([#10482](https://github.com/go-gitea/gitea/pull/10482)) ([#10486](https://github.com/go-gitea/gitea/pull/10486))
  * Show the username as a fallback on feeds if full name is blank ([#10461](https://github.com/go-gitea/gitea/pull/10461))
  * Trigger webhooks on issue label-change via API too ([#10421](https://github.com/go-gitea/gitea/pull/10421)) ([#10439](https://github.com/go-gitea/gitea/pull/10439))
  * Fix git reference type in webhooks ([#10427](https://github.com/go-gitea/gitea/pull/10427)) ([#10432](https://github.com/go-gitea/gitea/pull/10432))
  * Prevent panic on merge to PR ([#10403](https://github.com/go-gitea/gitea/pull/10403)) ([#10408](https://github.com/go-gitea/gitea/pull/10408))
  * Fix wrong num closed issues on repository when close issue via commit… ([#10364](https://github.com/go-gitea/gitea/pull/10364)) ([#10380](https://github.com/go-gitea/gitea/pull/10380))
  * Reading pull attachments should depend on read UnitTypePullRequests ([#10346](https://github.com/go-gitea/gitea/pull/10346)) ([#10354](https://github.com/go-gitea/gitea/pull/10354))
  * Set max-width on review-box comment box ([#10348](https://github.com/go-gitea/gitea/pull/10348)) ([#10353](https://github.com/go-gitea/gitea/pull/10353))
  * Prevent nil pointer in GetPullRequestCommitStatusState ([#10342](https://github.com/go-gitea/gitea/pull/10342)) ([#10344](https://github.com/go-gitea/gitea/pull/10344))
  * Fix protected branch status check settings ([#10341](https://github.com/go-gitea/gitea/pull/10341)) ([#10343](https://github.com/go-gitea/gitea/pull/10343))
  * Truncate long commit message header ([#10301](https://github.com/go-gitea/gitea/pull/10301)) ([#10319](https://github.com/go-gitea/gitea/pull/10319))
  * Set the initial commit status to Success otherwise it will always be Pending ([#10317](https://github.com/go-gitea/gitea/pull/10317)) ([#10318](https://github.com/go-gitea/gitea/pull/10318))
  * Don't manually replace whitespace during render ([#10291](https://github.com/go-gitea/gitea/pull/10291)) ([#10315](https://github.com/go-gitea/gitea/pull/10315))
* ENHANCEMENT
  * Admin page for managing user e-mail activation ([#10557](https://github.com/go-gitea/gitea/pull/10557)) ([#10579](https://github.com/go-gitea/gitea/pull/10579))
