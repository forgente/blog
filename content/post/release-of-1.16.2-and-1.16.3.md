---
date: 2022-03-03T20:10:00+08:00
authors: "lunny"
title: "Gitea 1.16.2 and 1.16.3 released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.16.3, (and 1.16.2)

We have merged [24](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.16.3+is%3Amerged) pull requests to release version 1.16.3 and [42](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.16.2+is%3Amerged) to release version 1.16.2.

<!-- Security Thanks! -->
We would like to give a special thanks to starlabs.sg to report the security problem and thanks to [@6543](https://gitea.com/6543) for submitting the security patches for this release.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.16.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelogs

## [1.16.3](https://github.com/go-gitea/gitea/releases/tag/v1.16.3) - 2022-03-02

* SECURITY
  * Git backend ignore replace objects (#18979) (#18980) 
* ENHANCEMENTS
  * Adjust error for already locked db and prevent level db lock on malformed connstr (#18923) (#18938)
* BUGFIXES
  * Set max text height to prevent overflow (#18862) (#18977)
  * Fix newAttachmentPaths deletion for DeleteRepository() (#18973) (#18974)
  * Accounts with WebAuthn only (no TOTP) now exist ... fix code to handle that case (#18897) (#18964)
  * Send 404 on `/{org}.gpg` (#18959) (#18962)
  * Fix admin user list pagination (#18957) (#18960)
  * Fix lfs management setting (#18947) (#18946)
  * Fix login with email panic when email is not exist (#18942)
  * Update go-org to v1.6.1 (#18932) (#18933)
  * Fix `<strong>` html in translation (#18929) (#18931)
  * Fix page and missing return on unadopted repos API (#18848) (#18927)
  * Allow adminstrator teams members to see other teams (#18918) (#18919)
  * Don't treat BOM escape sequence as hidden character. (#18909) (#18910)
  * Correctly link URLs to users/repos with dashes, dots or underscores (… (#18908)
  * Fix redirect when using lowercase repo name (#18775) (#18902)
  * Fix migration v210 (#18893) (#18892)
  * Fix team management UI (#18887) (18886)
  * BeforeSourcePath should point to base commit (#18880) (#18799)
* TRANSLATION
  * Backport locales from master (#18944)
* MISC
  * Don't update email for organisation (#18905) (#18906)

## [1.16.2](https://github.com/go-gitea/gitea/releases/tag/v1.16.2) - 2022-02-24

* ENHANCEMENTS
  * Show fullname on issue edits and gpg/ssh signing info (#18828)
  * Immediately Hammer if second kill is sent (#18823) (#18826)
  * Allow mermaid render error to wrap (#18791)
* BUGFIXES
  * Fix ldap user sync missed email in email_address table (#18786) (#18876) 
  * Update assignees check to include any writing team and change org sidebar (#18680) (#18873)
  * Don't report signal: killed errors in serviceRPC (#18850) (#18865)
  * Fix bug where certain LDAP settings were reverted (#18859)
  * Update go-org to 1.6.0 (#18824) (#18839)
  * Fix login with email for ldap users (#18800) (#18836)
  * Fix bug for get user by email (#18834)
  * Fix panic in EscapeReader (#18820) (#18821)
  * Fix ldap loginname (#18789) (#18804)
  * Remove redundant call to UpdateRepoStats during migration (#18591) (#18794)
  * In disk_channel queues synchronously push to disk on shutdown (#18415) (#18788)
  * Fix template bug of LFS lock (#18784) (#18787)
  * Attempt to fix the webauthn migration again - part 3 (#18770) (#18771)
  * Send mail to issue/pr assignee/reviewer also when OnMention is set (#18707) (#18765)
  * Fix a broken link in commits_list_small.tmpl (#18763) (#18764)
  * Increase the size of the webauthn_credential credential_id field (#18739) (#18756)
  * Prevent dangling GetAttribute calls (#18754) (#18755)
  * Fix isempty detection of git repository (#18746) (#18750)
  * Fix source code line highlighting on external tracker (#18729) (#18740)
  * Prevent double encoding of branch names in delete branch (#18714) (#18738)
  * Always set PullRequestWorkInProgressPrefixes in PrepareViewPullInfo (#18713) (#18737)
  * Fix forked repositories missed tags (#18719) (#18735)
  * Fix release typo (#18728) (#18731)
  * Separate the details links of commit-statuses in headers (#18661) (#18730)
  * Update object repo with the migrated repository (#18684) (#18726)
  * Fix bug for version update hint (#18701) (#18705)
  * Fix issue with docker-rootless shimming script (#18690) (#18699)
  * Let `MinUnitAccessMode` return correct perm (#18675) (#18689)
  * Prevent security failure due to bad APP_ID (#18678) (#18682)
  * Restart zero worker if there is still work to do (#18658) (#18672)
  * If rendering has failed due to a net.OpError stop rendering (#18642) (#18645)
* TESTING
  * Ensure git tag tests and others create test repos in tmpdir (#18447) (#18767)
* BUILD
  * Reduce CI go module downloads, add make targets (#18708, #18475, #18443) (#18741)
* MISC
  * Put buttons back in org dashboard (#18817) (#18825)
  * Various Mermaid improvements (#18776) (#18780)
  * C preprocessor colors improvement (#18671) (#18696)
  * Fix the missing i18n key for update checker (#18646) (#18665)

## Thanks

This release would not have been  possible without the pull requests from the following people:

* [@42wim](https://github.com/42wim)
* [@6543](https://github.com/6543)
* [@Gusted](https://github.com/Gusted)
* [@fnetX](https://github.com/fnetX)
* [@jpraet](https://github.com/jpraet)
* [@lunny](https://github.com/lunny)
* [@qwerty287](https://github.com/qwerty287)
* [@silverwind](https://github.com/silverwind)
* [@singuliere](https://github.com/singuliere)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@zeripath](https://github.com/zeripath)
