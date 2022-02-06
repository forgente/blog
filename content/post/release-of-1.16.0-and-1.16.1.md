---
date: "2022-02-03T18:08:00+00:00"
author: "zeripath"
title: "Gitea 1.16.0 and 1.16.1 released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.16.1, (and 1.16.0)

We have merged [19](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.16.1+is%3Amerged) pull requests to release version 1.16.1 and [617](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.16.0+is%3Amerged) to release version 1.16.0.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.16.1/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

Now on to the changes!

## Breaking Changes (or potentially breaking)

### :exclamation: Only allow webhook to send requests to allowed hosts ([#17482](https://github.com/go-gitea/gitea/pull/17482))

For security reasons, the webhook should only send requests to allowed hosts.

This PR introduced `ALLOWED_HOST_LIST` with default value of  **external** meaning that Webhooks by default can only call external hosts for security reasons.

Although `ALLOWED_HOST_LIST` was backported to 1.15 the default value is different between 1.15 and 1.16 and is more strict. If you need to allow Webhooks to call local network hosts you must explicitly allow those IPs/Hosts.

### :exclamation: Remove golang vendored directory ([#18277](https://github.com/go-gitea/gitea/pull/18277))

We no longer store the vendored directory within git. Users building directly from git checkouts should run `make vendor` on pulls or when changing branches.

### :exclamation: Paginate releases page & set default page size to 10 ([#16857](https://github.com/go-gitea/gitea/pull/16857))

We have reduced the number of releases shown on the releases page from 30 to 10 and add paging.

Users may change the default value by setting

```ini
[repository.release]
DEFAULT_PAGING_NUM=10
```

### :exclamation: Use shadowing script for docker ([#17846](https://github.com/go-gitea/gitea/pull/17846))

Too many docker users are caught out by the default location for the
app.ini file being environment dependent so that when they docker exec
into the container the gitea commands do not work properly and require
additional `-c` arguments to correctly pick up the configuration.

This PR simply shadows the gitea binary using variants of the FHS
compatible script to make the command gitea have the default locations
by default.

Although this PR should be non-breaking for most configurations and
should make things simpler for docker users in general, there was a
slightly unforeseen issue in that SSH passthrough configurations that
rely on the path of the gitea binary being `/app/gitea/gitea` will
need to update this to `/usr/local/bin/gitea` (likely including moving
their host shim from `/app/gitea/gitea` to `/usr/local/bin/gitea`)

Users should use `/usr/local/bin/gitea` in preference to
`/app/gitea/gitea` when executing on the docker as this will
automatically set the correct paths and environment for them.

### :exclamation: Support webauthn ([#17957](https://github.com/go-gitea/gitea/pull/17957))

U2F support has been deprecated by major browsers and therefore we've had to migrate to WebAuthn. We've attempted to create a backwards compatible migration however, the website relying party ID used for webauthentication is not the same as that used by U2F.

In order to support old u2f keys previously registered Gitea will use the app_id extension and will send the contents of [U2F] APP_ID as this app_id. This will need to match your original u2f configuration.

## Major Features

### Add agit workflow support ([#14295](https://github.com/go-gitea/gitea/pull/14295))

agit workflow is a new feature of new Git version. ref: https://git-repo.info/en/2020/03/agit-flow-and-git-repo/

![agit](/demos/14295/1.gif)

_Thanks to [**@a1012112796**](https://github.com/a1012112796)_

### Add bundle download for repository ([#14538](https://github.com/go-gitea/gitea/pull/14538))

Adds another download type for repositories [bundle](https://git-scm.com/book/en/v2/Git-Tools-Bundling).

_Thanks to [**@jolheiser**](https://github.com/jolheiser)_

### Add support for corporate WeChat webhooks ([#15910](https://github.com/go-gitea/gitea/pull/15910))

Suport corporate WeChat webhooks.

_Thanks to [**@lengyuqu**](https://github.com/lengyuqu)_

### Add RSS/Atom feed support for user actions ([#16002](https://github.com/go-gitea/gitea/pull/16002))

Add RSS/Atom feed support for user actions.

_Thanks to [**@6543**](https://github.com/6543)_

### Migrate from OneDev ([#16356](https://github.com/go-gitea/gitea/pull/16356)), GitBucket ([#16767](https://github.com/go-gitea/gitea/pull/16767)), CodeBase ([#16768](https://github.com/go-gitea/gitea/pull/16768))

Support to migrate issues/comments/pull requests and etc. from OneDev, GitBucket and CodeBase.

_Thanks to [**@KN4CK3R**](https://github.com/KN4CK3R)_

### Support unprotected file patterns ([#16395](https://github.com/go-gitea/gitea/pull/16395))

Support unprotected file patterns in a protected branch.

_Thanks to [**@jpraet**](https://github.com/jpraet)_

### Add microsoft oauth2 providers ([#16544](https://github.com/go-gitea/gitea/pull/16544))

Users commonly want to be able to use their AzureAD or MicrosoftOnline accounts with Gitea.

_Thanks to [**@zeripath**](https://github.com/zeripath)_

### Add proxy settings and support for migration and webhook ([#16704](https://github.com/go-gitea/gitea/pull/16704))

Add proxy supports which should be applied to every request to external http/https URL.

_Thanks to [**@lunny**](https://github.com/lunny)_

### Save and view issue/comment content history ([#16909](https://github.com/go-gitea/gitea/pull/16909))

The change history of an issue or comment could be review now.

![issue/comment history](/demos/16909/1.png)

_Thanks to [**@wxiaoguang**](https://github.com/wxiaoguang)_

### Basic Support for federation ([#16953](https://github.com/go-gitea/gitea/pull/16953)), ([#17071](https://github.com/go-gitea/gitea/pull/17071))

_Thanks to [**@techknowlogick**](https://github.com/techknowlogick)_

### Add copy button to markdown code blocks ([#17638](https://github.com/go-gitea/gitea/pull/17638))

![copy button](/demos/17638/1.png)

_Thanks to [**@silverwind**](https://github.com/silverwind)_

### Use git attributes to determine language, generated & vendored status for language stats and diffs,  blame, and render ([#17590](https://github.com/go-gitea/gitea/pull/17590)) & ([#16773](https://github.com/go-gitea/gitea/pull/16773))

Detection of vendored, generated and language detection using .gitattributes is now supported on the blame, diff and render pages.

_Thanks to [**@zeripath**](https://github.com/zeripath)_

### Load suppressed large diffs and incomplete diffs ([#17739](https://github.com/go-gitea/gitea/pull/17739)) & ([#16829](https://github.com/go-gitea/gitea/pull/16829))

Large diffs (more than `MAX_GIT_DIFF_LINES` long) are suppressed by default in Gitea. This PR now adds a load button to allow
these to be loaded and rendered. Similarly for incomplete diffs.

_Thanks to [**@zeripath**](https://github.com/zeripath)_

### Defer Last Commit Info ([#16467](https://github.com/go-gitea/gitea/pull/16467))

One of the biggest reasons for slow repository browsing is that we used to 
wait until the last commit information was generated for all files in the
repository.

This PR means that Gitea now defers this generation to a new POST endpoint that
does the look up outside of the main page request.

_Thanks to [**@zeripath**](https://github.com/zeripath)_

### Add support for ssh commit signing ([#17743](https://github.com/go-gitea/gitea/pull/17743))

This feature needs git 2.34+ and openssh 8.1+. You can sign/verify your commits with your SSH keys.

![ssh commit signing](/demos/17743/1.png)

_Thanks to [**@42wim**](https://github.com/42wim)_

### Team permission allow different unit has different permission ([#17811](https://github.com/go-gitea/gitea/pull/17811))

Now team permission setting allow different unit has different permission.

![team permission](/demos/17811/1.png)

_Thanks to [**@lunny**](https://github.com/lunny)_

### Support webauthn ([#17957](https://github.com/go-gitea/gitea/pull/17957))

Since major web browser will drop support to U2F, so we now support webauthn instead of U2F.

_Thanks to [**@e3b0c442**](https://github.com/e3b0c442), [**@lunny**](https://github.com/lunny), [**@zeripath**](https://github.com/zeripath)_

### More API Supports ([#17963](https://github.com/go-gitea/gitea/pull/17963)), ([#17652](https://github.com/go-gitea/gitea/pull/17652)), ([#17403](https://github.com/go-gitea/gitea/pull/17403)), ([#17278](https://github.com/go-gitea/gitea/pull/17278)), ([#17095](https://github.com/go-gitea/gitea/pull/17095)), ([#17232](https://github.com/go-gitea/gitea/pull/17232)), ([#16649](https://github.com/go-gitea/gitea/pull/16649))

_Thanks to [**@nitul1991**](https://github.com/nitul1991), [**@qwerty287**](https://github.com/qwerty287), [**@romdum**](https://github.com/romdum)_

## Changelogs

## [1.16.1](https://github.com/go-gitea/gitea/releases/tag/v1.16.1) - 2022-02-06

* SECURITY
  * Update JS dependencies, fix lint ([#18389](https://github.com/go-gitea/gitea/pull/18389)) ([#18540](https://github.com/go-gitea/gitea/pull/18540))
* ENHANCEMENTS
  * Add dropdown icon to label set template dropdown ([#18564](https://github.com/go-gitea/gitea/pull/18564)) ([#18571](https://github.com/go-gitea/gitea/pull/18571))
* BUGFIXES
  * Comments on migrated issues/prs must link to the comment ID ([#18630](https://github.com/go-gitea/gitea/pull/18630)) ([#18637](https://github.com/go-gitea/gitea/pull/18637))
  * Stop logging an error when notes are not found ([#18626](https://github.com/go-gitea/gitea/pull/18626)) ([#18635](https://github.com/go-gitea/gitea/pull/18635))
  * Ensure that blob-excerpt links work for wiki ([#18587](https://github.com/go-gitea/gitea/pull/18587)) ([#18624](https://github.com/go-gitea/gitea/pull/18624))
  * Only attempt to flush queue if the underlying worker pool is not finished ([#18593](https://github.com/go-gitea/gitea/pull/18593)) ([#18620](https://github.com/go-gitea/gitea/pull/18620))
  * Ensure commit-statuses box is sized correctly in headers ([#18538](https://github.com/go-gitea/gitea/pull/18538)) ([#18606](https://github.com/go-gitea/gitea/pull/18606))
  * Prevent merge messages from being sorted to the top of email chains ([#18566](https://github.com/go-gitea/gitea/pull/18566)) ([#18588](https://github.com/go-gitea/gitea/pull/18588))
  * Prevent panic on prohibited user login with oauth2 ([#18562](https://github.com/go-gitea/gitea/pull/18562)) ([#18563](https://github.com/go-gitea/gitea/pull/18563))
  * Collaborator trust model should trust collaborators ([#18539](https://github.com/go-gitea/gitea/pull/18539)) ([#18557](https://github.com/go-gitea/gitea/pull/18557))
  * Detect conflicts with 3way merge ([#18536](https://github.com/go-gitea/gitea/pull/18536)) ([#18537](https://github.com/go-gitea/gitea/pull/18537))
  * In docker rootless use $GITEA_APP_INI if provided ([#18524](https://github.com/go-gitea/gitea/pull/18524)) ([#18535](https://github.com/go-gitea/gitea/pull/18535))
  * Add `GetUserTeams` ([#18499](https://github.com/go-gitea/gitea/pull/18499)) ([#18531](https://github.com/go-gitea/gitea/pull/18531))
  * Fix review excerpt ([#18502](https://github.com/go-gitea/gitea/pull/18502)) ([#18530](https://github.com/go-gitea/gitea/pull/18530))
  * Fix for AvatarURL database type ([#18487](https://github.com/go-gitea/gitea/pull/18487)) ([#18529](https://github.com/go-gitea/gitea/pull/18529))
  * Use `ImagedProvider` for gplus oauth2 provider ([#18504](https://github.com/go-gitea/gitea/pull/18504)) ([#18505](https://github.com/go-gitea/gitea/pull/18505))
  * Fix OAuth Source Edit Page ([#18495](https://github.com/go-gitea/gitea/pull/18495)) ([#18503](https://github.com/go-gitea/gitea/pull/18503))
  * Use "read" value for General Access ([#18496](https://github.com/go-gitea/gitea/pull/18496)) ([#18500](https://github.com/go-gitea/gitea/pull/18500))
  * Prevent NPE on partial match of compare URL and allow short SHA1 compare URLs ([#18472](https://github.com/go-gitea/gitea/pull/18472)) ([#18473](https://github.com/go-gitea/gitea/pull/18473))
* BUILD
  * Make docker gitea/gitea:v1.16-dev etc refer to the latest build on that branch ([#18551](https://github.com/go-gitea/gitea/pull/18551)) ([#18569](https://github.com/go-gitea/gitea/pull/18569))
* DOCS
  * Update 1.16.0 changelog to set #17846 as breaking ([#18533](https://github.com/go-gitea/gitea/pull/18533)) ([#18534](https://github.com/go-gitea/gitea/pull/18534))

## [1.16.0](https://github.com/go-gitea/gitea/releases/tag/v1.16.0) - 2022-01-30

* BREAKING
  * Remove golang vendored directory ([#18277](https://github.com/go-gitea/gitea/pull/18277))
  * Paginate releases page & set default page size to 10 ([#16857](https://github.com/go-gitea/gitea/pull/16857))
  * Use shadowing script for docker ([#17846](https://github.com/go-gitea/gitea/pull/17846))
  * Only allow webhook to send requests to allowed hosts ([#17482](https://github.com/go-gitea/gitea/pull/17482))
* SECURITY
  * Disable content sniffing on `PlainTextBytes` ([#18359](https://github.com/go-gitea/gitea/pull/18359)) ([#18365](https://github.com/go-gitea/gitea/pull/18365))
  * Only view milestones from current repo ([#18414](https://github.com/go-gitea/gitea/pull/18414)) ([#18417](https://github.com/go-gitea/gitea/pull/18417))
  * Sanitize user-input on file name ([#17666](https://github.com/go-gitea/gitea/pull/17666))
  * Use `hostmatcher` to replace `matchlist` to improve blocking of bad hosts in Webhooks ([#17605](https://github.com/go-gitea/gitea/pull/17605))
* FEATURES
  * Add/update SMTP auth providers via cli ([#18197](https://github.com/go-gitea/gitea/pull/18197))
  * Support webauthn ([#17957](https://github.com/go-gitea/gitea/pull/17957))
  * Team permission allow different unit has different permission ([#17811](https://github.com/go-gitea/gitea/pull/17811))
  * Implement Well-Known URL for password change ([#17777](https://github.com/go-gitea/gitea/pull/17777))
  * Add support for ssh commit signing ([#17743](https://github.com/go-gitea/gitea/pull/17743))
  * Allow Loading of Diffs that are too large ([#17739](https://github.com/go-gitea/gitea/pull/17739))
  * Add copy button to markdown code blocks ([#17638](https://github.com/go-gitea/gitea/pull/17638))
  * Add .gitattribute assisted language detection to blame, diff and render ([#17590](https://github.com/go-gitea/gitea/pull/17590))
  * Add `PULL_LIMIT` and `PUSH_LIMIT` to cron.update_mirror task ([#17568](https://github.com/go-gitea/gitea/pull/17568))
  * Add Reindex buttons to repository settings page ([#17494](https://github.com/go-gitea/gitea/pull/17494))
  * Make SSL cipher suite configurable ([#17440](https://github.com/go-gitea/gitea/pull/17440))
  * Add groups scope/claim to OIDC/OAuth2 Provider ([#17367](https://github.com/go-gitea/gitea/pull/17367))
  * Add simple update checker to Gitea ([#17212](https://github.com/go-gitea/gitea/pull/17212))
  * Migrated Repository will show modifications when possible ([#17191](https://github.com/go-gitea/gitea/pull/17191))
  * Create pub/priv keypair for federation ([#17071](https://github.com/go-gitea/gitea/pull/17071))
  * Make LDAP be able to skip local 2FA ([#16954](https://github.com/go-gitea/gitea/pull/16954))
  * Add nodeinfo endpoint for federation purposes ([#16953](https://github.com/go-gitea/gitea/pull/16953))
  * Save and view issue/comment content history ([#16909](https://github.com/go-gitea/gitea/pull/16909))
  * Use git attributes to determine generated and vendored status for language stats and diffs ([#16773](https://github.com/go-gitea/gitea/pull/16773))
  * Add migrate from Codebase ([#16768](https://github.com/go-gitea/gitea/pull/16768))
  * Add migration from GitBucket ([#16767](https://github.com/go-gitea/gitea/pull/16767))
  * Add OAuth2 introspection endpoint ([#16752](https://github.com/go-gitea/gitea/pull/16752))
  * Add proxy settings and support for migration and webhook ([#16704](https://github.com/go-gitea/gitea/pull/16704))
  * Add microsoft oauth2 providers ([#16544](https://github.com/go-gitea/gitea/pull/16544))
  * Send registration email on user autoregistration ([#16523](https://github.com/go-gitea/gitea/pull/16523))
  * Defer Last Commit Info ([#16467](https://github.com/go-gitea/gitea/pull/16467))
  * Support unprotected file patterns ([#16395](https://github.com/go-gitea/gitea/pull/16395))
  * Add migrate from OneDev ([#16356](https://github.com/go-gitea/gitea/pull/16356))
  * Add option to update pull request by `rebase` ([#16125](https://github.com/go-gitea/gitea/pull/16125))
  * Add RSS/Atom feed support for user actions ([#16002](https://github.com/go-gitea/gitea/pull/16002))
  * Add support for corporate WeChat webhooks ([#15910](https://github.com/go-gitea/gitea/pull/15910))
  * Add a simple way to rename branch like gh ([#15870](https://github.com/go-gitea/gitea/pull/15870))
  * Add bundle download for repository ([#14538](https://github.com/go-gitea/gitea/pull/14538))
  * Add agit flow support in gitea ([#14295](https://github.com/go-gitea/gitea/pull/14295))
* API
  * Add MirrorUpdated field to Repository API type ([#18267](https://github.com/go-gitea/gitea/pull/18267))
  * Adjust Fork API to allow setting a custom repository name ([#18066](https://github.com/go-gitea/gitea/pull/18066))
  * Add API to manage repo tranfers ([#17963](https://github.com/go-gitea/gitea/pull/17963))
  * Add API to get file commit history ([#17652](https://github.com/go-gitea/gitea/pull/17652))
  * Add API to get issue/pull comments and events (timeline) ([#17403](https://github.com/go-gitea/gitea/pull/17403))
  * Add API to get/edit wiki ([#17278](https://github.com/go-gitea/gitea/pull/17278))
  * Add API for get user org permissions ([#17232](https://github.com/go-gitea/gitea/pull/17232))
  * Add HTML urls to notification API ([#17178](https://github.com/go-gitea/gitea/pull/17178))
  * Add API to get commit diff/patch ([#17095](https://github.com/go-gitea/gitea/pull/17095))
  * Respond with updated notifications in API ([#17064](https://github.com/go-gitea/gitea/pull/17064))
  * Add API to fetch git notes ([#16649](https://github.com/go-gitea/gitea/pull/16649))
  * Generalize list header for API ([#16551](https://github.com/go-gitea/gitea/pull/16551))
  * Add API Token Cache ([#16547](https://github.com/go-gitea/gitea/pull/16547))
  * Allow Token API calls be authorized using the reverse-proxy header ([#15119](https://github.com/go-gitea/gitea/pull/15119))
* ENHANCEMENTS
  * Make the height of the editor in Review Box smaller (4 lines as GitHub) ([#18319](https://github.com/go-gitea/gitea/pull/18319))
  * Return nicer error if trying to pull from non-existent user ([#18288](https://github.com/go-gitea/gitea/pull/18288))
  * Show pull link for agit pull request also ([#18235](https://github.com/go-gitea/gitea/pull/18235))
  * Enable partial clone by default ([#18195](https://github.com/go-gitea/gitea/pull/18195))
  * Added replay of webhooks ([#18191](https://github.com/go-gitea/gitea/pull/18191))
  * Show OAuth callback error message ([#18185](https://github.com/go-gitea/gitea/pull/18185))
  * Increase Salt randomness ([#18179](https://github.com/go-gitea/gitea/pull/18179))
  * Add MP4 as default allowed attachment type ([#18170](https://github.com/go-gitea/gitea/pull/18170))
  * Include folders into size cost ([#18158](https://github.com/go-gitea/gitea/pull/18158))
  * Remove `/email2user` endpoint ([#18127](https://github.com/go-gitea/gitea/pull/18127))
  * Handle invalid issues ([#18111](https://github.com/go-gitea/gitea/pull/18111))
  * Load EasyMDE/CodeMirror dynamically, remove RequireEasyMDE ([#18069](https://github.com/go-gitea/gitea/pull/18069))
  * Support open compare page directly ([#17975](https://github.com/go-gitea/gitea/pull/17975))
  * Prefer "Hiragino Kaku Gothic ProN" in system-ui-ja ([#17954](https://github.com/go-gitea/gitea/pull/17954))
  * Clean legacy SimpleMDE code ([#17926](https://github.com/go-gitea/gitea/pull/17926))
  * Refactor install page (db type) ([#17919](https://github.com/go-gitea/gitea/pull/17919))
  * Improve interface when comparing a branch which has created a pull request ([#17911](https://github.com/go-gitea/gitea/pull/17911))
  * Allow default branch to be inferred on compare page ([#17908](https://github.com/go-gitea/gitea/pull/17908))
  * Display issue/comment role even if repo archived ([#17907](https://github.com/go-gitea/gitea/pull/17907))
  * Always set a message-id on mails ([#17900](https://github.com/go-gitea/gitea/pull/17900))
  * Change `<a>` elements to underline on hover ([#17898](https://github.com/go-gitea/gitea/pull/17898))
  * Render issue references in file table ([#17897](https://github.com/go-gitea/gitea/pull/17897))
  * Handle relative unix socket paths ([#17836](https://github.com/go-gitea/gitea/pull/17836))
  * Move accessmode into models/perm ([#17828](https://github.com/go-gitea/gitea/pull/17828))
  * Fix some org style problems ([#17807](https://github.com/go-gitea/gitea/pull/17807))
  * Add List-Unsubscribe header ([#17804](https://github.com/go-gitea/gitea/pull/17804))
  * Create menus for organization pages ([#17802](https://github.com/go-gitea/gitea/pull/17802))
  * Switch archive URL code back to href attributes ([#17796](https://github.com/go-gitea/gitea/pull/17796))
  * Refactor "refs/*" string usage by using constants ([#17784](https://github.com/go-gitea/gitea/pull/17784))
  * Allow forks to org if you can create repos ([#17783](https://github.com/go-gitea/gitea/pull/17783))
  * Improve install code to avoid low-level mistakes. ([#17779](https://github.com/go-gitea/gitea/pull/17779))
  * Improve ellipsis buttons ([#17773](https://github.com/go-gitea/gitea/pull/17773))
  * Add restrict and no-user-rc to authorized_keys ([#17772](https://github.com/go-gitea/gitea/pull/17772))
  * Add copy Commit ID button in commits list ([#17759](https://github.com/go-gitea/gitea/pull/17759))
  * Make `bind` error more readable ([#17750](https://github.com/go-gitea/gitea/pull/17750))
  * Fix navbar on project view ([#17749](https://github.com/go-gitea/gitea/pull/17749))
  * More pleasantly handle broken or missing git repositories ([#17747](https://github.com/go-gitea/gitea/pull/17747))
  * Use `*PushUpdateOptions` as receiver ([#17724](https://github.com/go-gitea/gitea/pull/17724))
  * Remove unused `user` paramater ([#17723](https://github.com/go-gitea/gitea/pull/17723))
  * Better builtin avatar generator ([#17707](https://github.com/go-gitea/gitea/pull/17707))
  * Cleanup and use global style on popups ([#17674](https://github.com/go-gitea/gitea/pull/17674))
  * Move user/org deletion to services ([#17673](https://github.com/go-gitea/gitea/pull/17673))
  * Added comment for changing issue ref ([#17672](https://github.com/go-gitea/gitea/pull/17672))
  * Allow admins to change user avatars ([#17661](https://github.com/go-gitea/gitea/pull/17661))
  * Only set `data-path` once for each file in diff pages ([#17657](https://github.com/go-gitea/gitea/pull/17657))
  * Add icon to vscode clone link ([#17641](https://github.com/go-gitea/gitea/pull/17641))
  * Add download button for file viewer ([#17640](https://github.com/go-gitea/gitea/pull/17640))
  * Add pagination to fork list ([#17639](https://github.com/go-gitea/gitea/pull/17639))
  * Use a standalone struct name for Organization ([#17632](https://github.com/go-gitea/gitea/pull/17632))
  * Minor readability patch. ([#17627](https://github.com/go-gitea/gitea/pull/17627))
  * Add context support for GetUserByID ([#17602](https://github.com/go-gitea/gitea/pull/17602))
  * Move merge-section to `> .content` ([#17582](https://github.com/go-gitea/gitea/pull/17582))
  * Remove NewSession method from db.Engine interface ([#17577](https://github.com/go-gitea/gitea/pull/17577))
  * Move unit into models/unit/ ([#17576](https://github.com/go-gitea/gitea/pull/17576))
  * Restrict GetDeletedBranchByID to the repositories deleted branches ([#17570](https://github.com/go-gitea/gitea/pull/17570))
  * Refactor commentTags functionality ([#17558](https://github.com/go-gitea/gitea/pull/17558))
  * Make Repo Code Indexer an Unique Queue ([#17515](https://github.com/go-gitea/gitea/pull/17515))
  * Simplify Gothic to use our session store instead of creating a different store ([#17507](https://github.com/go-gitea/gitea/pull/17507))
  * Add settings to allow different SMTP envelope from address ([#17479](https://github.com/go-gitea/gitea/pull/17479))
  * Properly determine CSV delimiter ([#17459](https://github.com/go-gitea/gitea/pull/17459))
  * Hide label comments if labels were added and removed immediately ([#17455](https://github.com/go-gitea/gitea/pull/17455))
  * Tune UI alignment for nav bar notification icon, avatar image, issue label ([#17438](https://github.com/go-gitea/gitea/pull/17438))
  * Add appearance section in settings ([#17433](https://github.com/go-gitea/gitea/pull/17433))
  * Move key forms before list and add cancel button ([#17432](https://github.com/go-gitea/gitea/pull/17432))
  * When copying executables to the docker chmod them ([#17423](https://github.com/go-gitea/gitea/pull/17423))
  * Remove deprecated `extendDefaultPlugins` method of svgo ([#17399](https://github.com/go-gitea/gitea/pull/17399))
  * Fix the click behavior for <tr> and <td> with [data-href] ([#17388](https://github.com/go-gitea/gitea/pull/17388))
  * Refactor update checker to use AppState ([#17387](https://github.com/go-gitea/gitea/pull/17387))
  * Improve async/await usage, and sort init calls in `index.js` ([#17386](https://github.com/go-gitea/gitea/pull/17386))
  * Use a variable but a function for IsProd because of a slight performance increment ([#17368](https://github.com/go-gitea/gitea/pull/17368))
  * Frontend refactor, PascalCase to camelCase, remove unused code ([#17365](https://github.com/go-gitea/gitea/pull/17365))
  * Hide command line merge instructions when user can't push ([#17339](https://github.com/go-gitea/gitea/pull/17339))
  * Move session to models/login ([#17338](https://github.com/go-gitea/gitea/pull/17338))
  * Sync gitea app path for git hooks and authorized keys when starting ([#17335](https://github.com/go-gitea/gitea/pull/17335))
  * Make the Mirror Queue a queue ([#17326](https://github.com/go-gitea/gitea/pull/17326))
  * Add "Copy branch name" button to pull request page ([#17323](https://github.com/go-gitea/gitea/pull/17323))
  * Fix repository summary on mobile ([#17322](https://github.com/go-gitea/gitea/pull/17322))
  * Split `index.js` to separate files ([#17315](https://github.com/go-gitea/gitea/pull/17315))
  * Show direct match on top for user search ([#17303](https://github.com/go-gitea/gitea/pull/17303))
  * Frontend refactor: move Vue related code from `index.js` to `components` dir, and remove unused codes. ([#17301](https://github.com/go-gitea/gitea/pull/17301))
  * Upgrade chi to v5 ([#17298](https://github.com/go-gitea/gitea/pull/17298))
  * Disable form autofill ([#17291](https://github.com/go-gitea/gitea/pull/17291))
  * Improve behavior of "Fork" button ([#17288](https://github.com/go-gitea/gitea/pull/17288))
  * Open markdown image links in new window ([#17287](https://github.com/go-gitea/gitea/pull/17287))
  * Add hints for special Wiki pages ([#17283](https://github.com/go-gitea/gitea/pull/17283))
  * Move add deploy key form before the list and add a cancel button ([#17228](https://github.com/go-gitea/gitea/pull/17228))
  * Allow adding multiple issues to a project  ([#17226](https://github.com/go-gitea/gitea/pull/17226))
  * Add metrics to get issues by repository ([#17225](https://github.com/go-gitea/gitea/pull/17225))
  * Add specific event type to header ([#17222](https://github.com/go-gitea/gitea/pull/17222))
  * Redirect on project after issue created ([#17211](https://github.com/go-gitea/gitea/pull/17211))
  * Reference in new issue modal: dont pre-populate issue title ([#17208](https://github.com/go-gitea/gitea/pull/17208))
  * Always set a unique Message-ID header ([#17206](https://github.com/go-gitea/gitea/pull/17206))
  * Add projects and project boards in exposed metrics ([#17202](https://github.com/go-gitea/gitea/pull/17202))
  * Add metrics to get issues by label ([#17201](https://github.com/go-gitea/gitea/pull/17201))
  * Add protection to disable Gitea when run as root ([#17168](https://github.com/go-gitea/gitea/pull/17168))
  * Don't return binary file changes in raw PR diffs by default ([#17158](https://github.com/go-gitea/gitea/pull/17158))
  * Support sorting for project board issuses ([#17152](https://github.com/go-gitea/gitea/pull/17152))
  * Force color-adjust for markdown checkboxes ([#17146](https://github.com/go-gitea/gitea/pull/17146))
  * Add option to copy line permalink ([#17145](https://github.com/go-gitea/gitea/pull/17145))
  * Move twofactor to models/login ([#17143](https://github.com/go-gitea/gitea/pull/17143))
  * Multiple tokens support for migrating from github ([#17134](https://github.com/go-gitea/gitea/pull/17134))
  * Unify issue and PR subtitles ([#17133](https://github.com/go-gitea/gitea/pull/17133))
  * Make Requests Processes and create process hierarchy. Associate OpenRepository with context. ([#17125](https://github.com/go-gitea/gitea/pull/17125))
  * Fix problem when database id is not increment as expected ([#17124](https://github.com/go-gitea/gitea/pull/17124))
  * Avatar refactor, move avatar code from `models` to `models.avatars`, remove duplicated code ([#17123](https://github.com/go-gitea/gitea/pull/17123))
  * Re-allow clipboard copy on non-https sites ([#17118](https://github.com/go-gitea/gitea/pull/17118))
  * DBContext is just a Context ([#17100](https://github.com/go-gitea/gitea/pull/17100))
  * Move login related structs and functions to models/login ([#17093](https://github.com/go-gitea/gitea/pull/17093))
  * Add SkipLocal2FA option to pam and smtp sources ([#17078](https://github.com/go-gitea/gitea/pull/17078))
  * Move db related basic functions to models/db ([#17075](https://github.com/go-gitea/gitea/pull/17075))
  * Fixes username tagging in "Reference in new issue" ([#17074](https://github.com/go-gitea/gitea/pull/17074))
  * Use light/dark theme based on system preference ([#17051](https://github.com/go-gitea/gitea/pull/17051))
  * Always emit the configuration path ([#17036](https://github.com/go-gitea/gitea/pull/17036))
  * Add `AbsoluteListOptions` ([#17028](https://github.com/go-gitea/gitea/pull/17028))
  * Use common sessioner for API and Web ([#17027](https://github.com/go-gitea/gitea/pull/17027))
  * Fix overflow label in small view ([#17020](https://github.com/go-gitea/gitea/pull/17020))
  * Report the associated filter if there is an error in LDAP ([#17014](https://github.com/go-gitea/gitea/pull/17014))
  * Add "new issue" btn on project ([#17001](https://github.com/go-gitea/gitea/pull/17001))
  * Add doctor dbconsistency check for release and attachment ([#16978](https://github.com/go-gitea/gitea/pull/16978))
  * Disable Fomantic's CSS tooltips ([#16974](https://github.com/go-gitea/gitea/pull/16974))
  * Add Cache-Control to avatar redirects ([#16973](https://github.com/go-gitea/gitea/pull/16973))
  * Make mirror feature more configurable ([#16957](https://github.com/go-gitea/gitea/pull/16957))
  * Add skip and limit to git.GetTags ([#16897](https://github.com/go-gitea/gitea/pull/16897))
  * Remove ParseQueueConnStr as it is unused ([#16878](https://github.com/go-gitea/gitea/pull/16878))
  * Remove unused Fomantic sidebar module ([#16853](https://github.com/go-gitea/gitea/pull/16853))
  * Allow LDAP Sources to provide Avatars ([#16851](https://github.com/go-gitea/gitea/pull/16851))
  * Remove Dashboard/Home button from the navbar ([#16844](https://github.com/go-gitea/gitea/pull/16844))
  * Use conditions but not repo ids as query condition ([#16839](https://github.com/go-gitea/gitea/pull/16839))
  * Add user settings key/value DB table ([#16834](https://github.com/go-gitea/gitea/pull/16834))
  * Add buttons to allow loading of incomplete diffs ([#16829](https://github.com/go-gitea/gitea/pull/16829))
  * Add information for migrate failure ([#16803](https://github.com/go-gitea/gitea/pull/16803))
  * Add EdDSA JWT signing algorithm ([#16786](https://github.com/go-gitea/gitea/pull/16786))
  * Add user status filter to admin user management page ([#16770](https://github.com/go-gitea/gitea/pull/16770))
  * Add Option to synchronize Admin & Restricted states from OIDC/OAuth2 along with Setting Scopes ([#16766](https://github.com/go-gitea/gitea/pull/16766))
  * Do not use thin scrollbars on Firefox ([#16738](https://github.com/go-gitea/gitea/pull/16738))
  * Download LFS in git and web workflow from minio/s3 directly (SERVE_DIRECT) ([#16731](https://github.com/go-gitea/gitea/pull/16731))
  * Compute proper foreground color for labels ([#16729](https://github.com/go-gitea/gitea/pull/16729))
  * Add edit button to wiki sidebar and footer ([#16719](https://github.com/go-gitea/gitea/pull/16719))
  * Fix migration svg color ([#16715](https://github.com/go-gitea/gitea/pull/16715))
  * Add link to vscode to repo header ([#16664](https://github.com/go-gitea/gitea/pull/16664))
  * Add filter by owner and team to issue/pulls search endpoint ([#16662](https://github.com/go-gitea/gitea/pull/16662))
  * Kanban colored boards ([#16647](https://github.com/go-gitea/gitea/pull/16647))
  * Allow setting X-FRAME-OPTIONS ([#16643](https://github.com/go-gitea/gitea/pull/16643))
  * Separate open and closed issue in metrics ([#16637](https://github.com/go-gitea/gitea/pull/16637))
  * Support direct comparison (git diff a..b) as well merge comparison (a…b) ([#16635](https://github.com/go-gitea/gitea/pull/16635))
  * Add setting to OAuth handlers to skip local 2FA authentication ([#16594](https://github.com/go-gitea/gitea/pull/16594))
  * Make PR merge options more intuitive ([#16582](https://github.com/go-gitea/gitea/pull/16582))
  * Show correct text when comparing commits on empty pull request ([#16569](https://github.com/go-gitea/gitea/pull/16569))
  * Pre-fill suggested New File 'name' and 'content' with Query Params ([#16556](https://github.com/go-gitea/gitea/pull/16556))
  * Add an abstract json layout to make it's easier to change json library ([#16528](https://github.com/go-gitea/gitea/pull/16528))
  * Make Mermaid.js limit configurable ([#16519](https://github.com/go-gitea/gitea/pull/16519))
  * Improve 2FA autofill ([#16473](https://github.com/go-gitea/gitea/pull/16473))
  * Add modals to Organization and Team remove/leave ([#16471](https://github.com/go-gitea/gitea/pull/16471))
  * Show tag name on dashboard items list ([#16466](https://github.com/go-gitea/gitea/pull/16466))
  * Change default cron schedules from @every 24h to @midnight ([#16431](https://github.com/go-gitea/gitea/pull/16431))
  * Prevent double sanitize ([#16386](https://github.com/go-gitea/gitea/pull/16386))
  * Replace `list.List` with slices ([#16311](https://github.com/go-gitea/gitea/pull/16311))
  * Add configuration option to restrict users by default ([#16256](https://github.com/go-gitea/gitea/pull/16256))
  * Move login out of models ([#16199](https://github.com/go-gitea/gitea/pull/16199))
  * Support pagination of organizations on user settings pages ([#16083](https://github.com/go-gitea/gitea/pull/16083))
  * Switch migration icon to svg ([#15954](https://github.com/go-gitea/gitea/pull/15954))
  * Add left padding for chunk header of split diff view ([#13397](https://github.com/go-gitea/gitea/pull/13397))
  * Allow U2F 2FA without TOTP ([#11573](https://github.com/go-gitea/gitea/pull/11573))
* BUGFIXES
  * GitLab reviews may not have the updated_at field set ([#18450](https://github.com/go-gitea/gitea/pull/18450)) ([#18461](https://github.com/go-gitea/gitea/pull/18461))
  * Fix detection of no commits when the default branch is not master ([#18422](https://github.com/go-gitea/gitea/pull/18422)) ([#18423](https://github.com/go-gitea/gitea/pull/18423))
  * Fix broken oauth2 authentication source edit page ([#18412](https://github.com/go-gitea/gitea/pull/18412)) ([#18419](https://github.com/go-gitea/gitea/pull/18419))
  * Place inline diff comment dialogs on split diff in 4th and 8th columns ([#18403](https://github.com/go-gitea/gitea/pull/18403)) ([#18404](https://github.com/go-gitea/gitea/pull/18404))
  * Fix restore without topic failure ([#18387](https://github.com/go-gitea/gitea/pull/18387)) ([#18400](https://github.com/go-gitea/gitea/pull/18400))
  * Fix commit's time ([#18375](https://github.com/go-gitea/gitea/pull/18375)) ([#18392](https://github.com/go-gitea/gitea/pull/18392))
  * Fix partial cloning a repo ([#18373](https://github.com/go-gitea/gitea/pull/18373)) ([#18377](https://github.com/go-gitea/gitea/pull/18377))
  * Stop trimming preceding and suffixing spaces from editor filenames ([#18334](https://github.com/go-gitea/gitea/pull/18334))
  * Prevent showing webauthn error for every time visiting `/user/settings/security` ([#18386](https://github.com/go-gitea/gitea/pull/18386))
  * Fix mime-type detection for HTTP server ([#18370](https://github.com/go-gitea/gitea/pull/18370)) ([#18371](https://github.com/go-gitea/gitea/pull/18371))
  * Stop trimming preceding and suffixing spaces from editor filenames ([#18334](https://github.com/go-gitea/gitea/pull/18334))
  * Restore propagation of ErrDependenciesLeft ([#18325](https://github.com/go-gitea/gitea/pull/18325))
  * Fix PR comments UI ([#18323](https://github.com/go-gitea/gitea/pull/18323))
  * Use indirect comparison when showing pull requests ([#18313](https://github.com/go-gitea/gitea/pull/18313))
  * Replace satori/go.uuid with gofrs/uuid ([#18311](https://github.com/go-gitea/gitea/pull/18311))
  * Fix commit links on compare page ([#18310](https://github.com/go-gitea/gitea/pull/18310))
  * Don't show double error response in git hook ([#18292](https://github.com/go-gitea/gitea/pull/18292))
  * Handle missing default branch better in owner/repo/branches page ([#18290](https://github.com/go-gitea/gitea/pull/18290))
  * Fix CheckRepoStats and reuse it during migration ([#18264](https://github.com/go-gitea/gitea/pull/18264))
  * Prevent underline hover on cards ([#18259](https://github.com/go-gitea/gitea/pull/18259))
  * Don't delete branch if other PRs with this branch are open ([#18164](https://github.com/go-gitea/gitea/pull/18164))
  * Require codereview to have content ([#18156](https://github.com/go-gitea/gitea/pull/18156))
  * Allow admin to associate missing LFS objects for repositories ([#18143](https://github.com/go-gitea/gitea/pull/18143))
  * When attempting to subscribe other user to issue report why access denied ([#18091](https://github.com/go-gitea/gitea/pull/18091))
  * Add option to convert CRLF to LF line endings for sendmail ([#18075](https://github.com/go-gitea/gitea/pull/18075))
  * Only create pprof files for gitea serv if explicitly asked for ([#18068](https://github.com/go-gitea/gitea/pull/18068))
  * Abort merge if head has been updated before pressing merge ([#18032](https://github.com/go-gitea/gitea/pull/18032))
  * Improve TestPatch to use git read-tree -m and implement git-merge-one-file functionality ([#18004](https://github.com/go-gitea/gitea/pull/18004))
  * Use JSON module instead of stdlib json ([#18003](https://github.com/go-gitea/gitea/pull/18003))
  * Fixed issue merged/closed wording ([#17973](https://github.com/go-gitea/gitea/pull/17973))
  * Return nicer error for ForcePrivate ([#17971](https://github.com/go-gitea/gitea/pull/17971))
  * Fix overflow in commit graph ([#17947](https://github.com/go-gitea/gitea/pull/17947))
  * Prevent services/mailer/mailer_test.go tests from deleteing data directory ([#17941](https://github.com/go-gitea/gitea/pull/17941))
  * Use disable_form_autofill on Codebase and Gitbucket ([#17936](https://github.com/go-gitea/gitea/pull/17936))
  * Fix a panic in NotifyCreateIssueComment (caused by string truncation) ([#17928](https://github.com/go-gitea/gitea/pull/17928))
  * Fix markdown URL parsing ([#17924](https://github.com/go-gitea/gitea/pull/17924))
  * Apply CSS Variables to all message elements ([#17920](https://github.com/go-gitea/gitea/pull/17920))
  * Improve checkBranchName ([#17901](https://github.com/go-gitea/gitea/pull/17901))
  * Update chi/middleware to chi/v5/middleware ([#17888](https://github.com/go-gitea/gitea/pull/17888))
  * Fix position of label color picker colors ([#17866](https://github.com/go-gitea/gitea/pull/17866))
  * Fix ListUnadoptedRepositories incorrect total count ([#17865](https://github.com/go-gitea/gitea/pull/17865))
  * Remove whitespace inside rendered code `<td>` ([#17859](https://github.com/go-gitea/gitea/pull/17859))
  * Make Co-committed-by and co-authored-by trailers optional ([#17848](https://github.com/go-gitea/gitea/pull/17848))
  * Fix value of User.IsRestricted when oauth2 user registration ([#17839](https://github.com/go-gitea/gitea/pull/17839))
  * Use new OneDev /milestones endpoint ([#17782](https://github.com/go-gitea/gitea/pull/17782))
  * Prevent deadlock in TestPersistableChannelQueue ([#17717](https://github.com/go-gitea/gitea/pull/17717))
  * Simplify code for writing SHA to name-rev ([#17696](https://github.com/go-gitea/gitea/pull/17696))
  * Fix database deadlock when update issue labels ([#17649](https://github.com/go-gitea/gitea/pull/17649))
  * Add warning for BIDI characters in page renders and in diffs ([#17562](https://github.com/go-gitea/gitea/pull/17562))
  * Fix ipv6 parsing for builtin ssh server ([#17561](https://github.com/go-gitea/gitea/pull/17561))
  * Multiple Escaping Improvements ([#17551](https://github.com/go-gitea/gitea/pull/17551))
  * Fixes #16559 - Do not trim leading spaces for tab delimited ([#17442](https://github.com/go-gitea/gitea/pull/17442))
  * Show client-side error if wiki page is empty ([#17415](https://github.com/go-gitea/gitea/pull/17415))
  * Fix context popup error ([#17398](https://github.com/go-gitea/gitea/pull/17398))
  * Stop sanitizing full name in API ([#17396](https://github.com/go-gitea/gitea/pull/17396))
  * Fix issue close/comment buttons on mobile ([#17317](https://github.com/go-gitea/gitea/pull/17317))
  * Fix navbar UI ([#17235](https://github.com/go-gitea/gitea/pull/17235))
  * Fix problem when database id is not increment as expected ([#17229](https://github.com/go-gitea/gitea/pull/17229))
  * Open the DingTalk link in browser ([#17084](https://github.com/go-gitea/gitea/pull/17084))
  * Remove heads pointing to missing old refs ([#17076](https://github.com/go-gitea/gitea/pull/17076))
  * Fix commit status index problem ([#17061](https://github.com/go-gitea/gitea/pull/17061))
  * Handle broken references in mirror sync ([#17013](https://github.com/go-gitea/gitea/pull/17013))
  * Fix for create repo page layout ([#17012](https://github.com/go-gitea/gitea/pull/17012))
  * Improve LDAP synchronization efficiency ([#16994](https://github.com/go-gitea/gitea/pull/16994))
  * Add repo_id for attachment ([#16958](https://github.com/go-gitea/gitea/pull/16958))
  * Clean-up HookPreReceive and restore functionality for pushing non-standard refs ([#16705](https://github.com/go-gitea/gitea/pull/16705))
  * Remove duplicate csv import in modules/csv/csv.go ([#16631](https://github.com/go-gitea/gitea/pull/16631))
  * Improve SMTP authentication and Fix user creation bugs  ([#16612](https://github.com/go-gitea/gitea/pull/16612))
  * Fixed emoji alias not parsed in links ([#16221](https://github.com/go-gitea/gitea/pull/16221))
  * Calculate label URL on API  ([#16186](https://github.com/go-gitea/gitea/pull/16186))
* TRANSLATION
  * Fix mispelling of starred as stared ([#17465](https://github.com/go-gitea/gitea/pull/17465))
  * Re-separate the color translation strings ([#17390](https://github.com/go-gitea/gitea/pull/17390))
  * Enable Malayalam, Greek, Persian, Hungarian & Indonesian by default ([#16998](https://github.com/go-gitea/gitea/pull/16998))
* BUILD
  * Add lockfile-check ([#18285](https://github.com/go-gitea/gitea/pull/18285))
  * Don't store assets modified time into generated files ([#18193](https://github.com/go-gitea/gitea/pull/18193))
* MISC
  * Update JS dependencies ([#17611](https://github.com/go-gitea/gitea/pull/17611))

## Thanks

This release would not have been  possible without the pull requests from the following people:

* [@42wim](https://github.com/42wim)
* [@6543](https://github.com/6543)
* [@99rgosse](https://github.com/99rgosse)
* [@ABNER-1](https://github.com/ABNER-1)
* [@BLumia](https://github.com/BLumia)
* [@Dexus](https://github.com/Dexus)
* [@DuckDuckWhale](https://github.com/DuckDuckWhale)
* [@Exagone313](https://github.com/Exagone313)
* [@Garionion](https://github.com/Garionion)
* [@Gusted](https://github.com/Gusted)
* [@Hakermann420](https://github.com/Hakermann420)
* [@Jonher937](https://github.com/Jonher937)
* [@Juneezee](https://github.com/Juneezee)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@MrGussio](https://github.com/MrGussio)
* [@PotatoesFall](https://github.com/PotatoesFall)
* [@Tchoupinax](https://github.com/Tchoupinax)
* [@Theta-Dev](https://github.com/Theta-Dev)
* [@Tiscs](https://github.com/Tiscs)
* [@a1012112796](https://github.com/a1012112796)
* [@aaribaud](https://github.com/aaribaud)
* [@amenzhinsky](https://github.com/amenzhinsky)
* [@anbraten](https://github.com/anbraten)
* [@arkamar](https://github.com/arkamar)
* [@axifive](https://github.com/axifive)
* [@bagasme](https://github.com/bagasme)
* [@capvor](https://github.com/capvor)
* [@clarfonthey](https://github.com/clarfonthey)
* [@coolaj86](https://github.com/coolaj86)
* [@crapStone](https://github.com/crapStone)
* [@delvh](https://github.com/delvh)
* [@dependabot[bot]](https://github.com/dependabot[bot])
* [@dvejmz](https://github.com/dvejmz)
* [@eeyrjmr](https://github.com/eeyrjmr)
* [@finga](https://github.com/finga)
* [@fnetX](https://github.com/fnetX)
* [@gwymor](https://github.com/gwymor)
* [@ibigbug](https://github.com/ibigbug)
* [@ijaureguialzo](https://github.com/ijaureguialzo)
* [@jolheiser](https://github.com/jolheiser)
* [@jpraet](https://github.com/jpraet)
* [@justusbunsi](https://github.com/justusbunsi)
* [@kdomanski](https://github.com/kdomanski)
* [@kolaente](https://github.com/kolaente)
* [@kvaster](https://github.com/kvaster)
* [@larshp](https://github.com/larshp)
* [@lengyuqu](https://github.com/lengyuqu)
* [@lunny](https://github.com/lunny)
* [@mashirozx](https://github.com/mashirozx)
* [@maweil](https://github.com/maweil)
* [@michaelgrigoryan25](https://github.com/michaelgrigoryan25)
* [@mscherer](https://github.com/mscherer)
* [@n194](https://github.com/n194)
* [@nitul1991](https://github.com/nitul1991)
* [@noerw](https://github.com/noerw)
* [@odahoda](https://github.com/odahoda)
* [@pboguslawski](https://github.com/pboguslawski)
* [@petergardfjall](https://github.com/petergardfjall)
* [@prasadkatti](https://github.com/prasadkatti)
* [@pricly-yellow](https://github.com/pricly-yellow)
* [@qwerty287](https://github.com/qwerty287)
* [@realaravinth](https://github.com/realaravinth)
* [@richmahn](https://github.com/richmahn)
* [@rinsuki](https://github.com/rinsuki)
* [@rjnienaber](https://github.com/rjnienaber)
* [@rmsc](https://github.com/rmsc)
* [@romdum](https://github.com/romdum)
* [@saitho](https://github.com/saitho)
* [@sebastian-sauer](https://github.com/sebastian-sauer)
* [@silverwind](https://github.com/silverwind)
* [@singuliere](https://github.com/singuliere)
* [@stanthetiger](https://github.com/stanthetiger)
* [@tech-meppem](https://github.com/tech-meppem)
* [@techknowlogick](https://github.com/techknowlogick)
* [@thetechnick](https://github.com/thetechnick)
* [@typeless](https://github.com/typeless)
* [@velengel](https://github.com/velengel)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yarg-kane](https://github.com/yarg-kane)
* [@zeripath](https://github.com/zeripath)
* [@zpericic](https://github.com/zpericic)
