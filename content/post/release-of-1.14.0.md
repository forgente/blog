---
date: "2021-04-11T10:33:02+07:00"
author: "zeripath"
title: "Gitea 1.14.0 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.14.0.

We have merged an incredible [641](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.14.0+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.14.0/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**  
Sample images below.

<!--more-->

|![shirt](/demos/shop/shirt.png)|![hoodie](/demos/shop/hoodie.png)|![ladies](/demos/shop/ladies.png)|
|-|-|-| 
<!-- Do it in markdown, they said. It will be fun, they said. -->


Now, on to the changes!

## Breaking Changes (or potentially breaking)

:exclamation: Tag webhooks are now only sent once - you may need to check your CI webhooks to ensure that they are correctly firing. ([#15078](https://github.com/go-gitea/gitea/pull/15078))

:exclamation: The access logger no longer logs accesses to `/api/internal` ([#14475](https://github.com/go-gitea/gitea/pull/14475))

:exclamation: We have migrated from [Macaron](https://go-macaron.com/) to the [Chi](https://github.com/go-chi/chi) framework. ([#14293](https://github.com/go-gitea/gitea/pull/14293))

:exclamation: We no longer provide binary builds for MIPS architectures as it appears that they are not being used. ([#14174](https://github.com/go-gitea/gitea/pull/14174)) Instead we now provide binary builds for the M1 architecture. ([#14951](https://github.com/go-gitea/gitea/pull/14951))

:exclamation: We have improved the mechanism for [customizing the default logo](https://docs.gitea.io/en-us/customizing-gitea/#changing-the-default-logo) ([#13974](https://github.com/go-gitea/gitea/pull/13974)) ([#14136](https://github.com/go-gitea/gitea/pull/14136))

:exclamation: We now inline the `manifest.json` - users that expect to see requests for this file should adjust templates as necessary. ([#14038](https://github.com/go-gitea/gitea/pull/14038))

:exclamation: The default location for repository data (`[repository]` `ROOT`) will now be in a subdirectory of the `APP_DATA_PATH` path. ([#13991](https://github.com/go-gitea/gitea/pull/13991))

:exclamation: The logging of failed attempts in the internal SSH has been changed to make them a little more consistent. Users with fail2ban set-ups may need to adjust their configuration. ([#13962](https://github.com/go-gitea/gitea/pull/13962))

:exclamation: Organization descriptions now support markdown. There may be some presentational differences. ([#13549](https://github.com/go-gitea/gitea/pull/13549))

:exclamation: There has been a few changes of how the CLI for user management works. ([#6001](https://github.com/go-gitea/gitea/pull/6001)) ([#10492](https://github.com/go-gitea/gitea/pull/10492))

:exclamation: We now default to using a pure Git backend. The Go-Git backend remains in place and can be built using the build tag `gogit`. ([#13673](https://github.com/go-gitea/gitea/pull/13673))

:exclamation: We have integrated the environment-to-ini command in to the docker - this allows override of any app.ini setting with [specially constructed environment variables](https://docs.gitea.io/en-us/install-with-docker/#managing-deployments-with-environment-variables). ([#14762](https://github.com/go-gitea/gitea/pull/14762))

## Major Features

### Repository Transfer Confirmation ([#14792](https://github.com/go-gitea/gitea/pull/14792))

Transfer of repositories to other owners now needs to be confirmed by the new owner.

_Thanks to [**@6543**](https://github.com/6543)_

### Migration support from Gogs ([#14342](https://github.com/go-gitea/gitea/pull/14342))

We can now do (partial) migration from Gogs. Pull requests are unfortunately not supported due to Gogs' lack of API support.

_Thanks to [**@6543**](https://github.com/6543), [**@lunny**](https://github.com/lunny) &amp; [**@zeripath**](https://github.com/zeripath)_

### Minimal OpenID Connect implementation ([#14139](https://github.com/go-gitea/gitea/pull/14139))

Gitea can now be used as an OpenIDC SSO.

_Thanks to [**@ojohnny**](https://github.com/ojohnny)_

### Display current stopwatch in navbar ([#14122](https://github.com/go-gitea/gitea/pull/14122))

The current stopwatch timer is now displayed in the navbar.

_Thanks to [**@noerw**](https://github.com/noerw)_

### Display SVG files as images instead of text ([#14101](https://github.com/go-gitea/gitea/pull/14101))

SVG files will now be rendered in the UI.

_Thanks to [**@jtran**](https://github.com/jtran)_

### Reviews can now be dismissed ([#12674](https://github.com/go-gitea/gitea/pull/12674))

Pull Request Reviews can now be dismissed.

_Thanks to [**@a1012112796**](https://github.com/a1012112796)_

### Pull requests can now be marked as manually merged manually ([#12543](https://github.com/go-gitea/gitea/pull/12543))

Pull requests can be marked as merged manually by setting the SHA of the merge commit and automatic detection of merged PRs can be switched off.

_Thanks to [**@a1012112796**](https://github.com/a1012112796)_

### Dump github/gitlab/gitea repository data to a local directory and restore to gitea ([#12244](https://github.com/go-gitea/gitea/pull/12244))

Currently online migrating is possible but in fact, it depends on the internet network status what's a mess. This PR makes it possible to dump a repository on GitHub/GitLab/Gitea to a disk directory and then transfer it to another Gitea instance via the possible transfer method. And then restore the repository on the target Gitea instance.

i.e. Gitea repository itself in GitHub spent about 80 GB but transfer 80GB online is almost impossible. Then we can dump the repository to a host nearby Github's host and then compress it and transfer it to another host.

A new Gitea command has been added to do this.

_Thanks to [**@lunny**](https://github.com/lunny)_

### Create DB session provider ([#13031](https://github.com/go-gitea/gitea/pull/13031))

It is now possible to simplify configuration of the database sessioning and just use the common database configuration. Simply set `[session]` `PROVIDER = db` and the database will be used.

_Thanks to [**@zeripath**](https://github.com/zeripath)_

### Rootless Docker ([#10154](https://github.com/go-gitea/gitea/pull/10154))

We now have a rootless docker.

_Thanks to [**@sapk**](https://github.com/sapk)_

## Changelog

## [1.14.0](https://github.com/go-gitea/gitea/releases/tag/v1.14.0) - 2021-04-11

* SECURITY
  * Respect approved email domain list for externally validated user registration ([#15014](https://github.com/go-gitea/gitea/pull/15014))
  * Add reverse proxy configuration support for remote IP address detection ([#14959](https://github.com/go-gitea/gitea/pull/14959))
  * Ensure validation occurs on clone addresses too ([#14994](https://github.com/go-gitea/gitea/pull/14994))
  * Fix several render issues highlighted during fuzzing ([#14986](https://github.com/go-gitea/gitea/pull/14986))
* BREAKING
  * Fix double 'push tag' action feed ([#15078](https://github.com/go-gitea/gitea/pull/15078)) ([#15083](https://github.com/go-gitea/gitea/pull/15083))
  * Remove possible resource leak ([#15067](https://github.com/go-gitea/gitea/pull/15067)) ([#15082](https://github.com/go-gitea/gitea/pull/15082))
  * Handle unauthorized user events gracefully ([#15071](https://github.com/go-gitea/gitea/pull/15071)) ([#15074](https://github.com/go-gitea/gitea/pull/15074))
  * Restore Access.log following migration to Chi framework (Stops access logging of /api/internal routes) ([#14475](https://github.com/go-gitea/gitea/pull/14475))
  * Migrate from Macaron to Chi framework ([#14293](https://github.com/go-gitea/gitea/pull/14293))
  * Deprecate building for mips ([#14174](https://github.com/go-gitea/gitea/pull/14174))
  * Consolidate Logos and update README header ([#14136](https://github.com/go-gitea/gitea/pull/14136))
  * Inline manifest.json ([#14038](https://github.com/go-gitea/gitea/pull/14038))
  * Store repository data in data path if not previously set ([#13991](https://github.com/go-gitea/gitea/pull/13991))
  * Rename "gitea" png to "logo" ([#13974](https://github.com/go-gitea/gitea/pull/13974))
  * Standardise logging of failed authentication attempts in internal SSH ([#13962](https://github.com/go-gitea/gitea/pull/13962))
  * Add markdown support in organization description ([#13549](https://github.com/go-gitea/gitea/pull/13549))
  * Improve users management through the CLI ([#6001](https://github.com/go-gitea/gitea/pull/6001)) ([#10492](https://github.com/go-gitea/gitea/pull/10492))
* FEATURES
  * Create a new issue with reference to lines of code from file view ([#14863](https://github.com/go-gitea/gitea/pull/14863))
  * Repository transfer has to be confirmed, if user can not create repo for new owner ([#14792](https://github.com/go-gitea/gitea/pull/14792))
  * Allow blocking some email domains from registering an account ([#14667](https://github.com/go-gitea/gitea/pull/14667))
  * Create a new issue based on reference to an issue comment ([#14366](https://github.com/go-gitea/gitea/pull/14366))
  * Add support to migrate from gogs ([#14342](https://github.com/go-gitea/gitea/pull/14342))
  * Add pager to the branches page ([#14202](https://github.com/go-gitea/gitea/pull/14202))
  * Minimal OpenID Connect implementation ([#14139](https://github.com/go-gitea/gitea/pull/14139))
  * Display current stopwatch in navbar ([#14122](https://github.com/go-gitea/gitea/pull/14122))
  * Display SVG files as images instead of text ([#14101](https://github.com/go-gitea/gitea/pull/14101))
  * Disable SSH key deletion of externally managed Keys ([#13985](https://github.com/go-gitea/gitea/pull/13985))
  * Add support for ed25519_sk and ecdsa_sk SSH keys ([#13462](https://github.com/go-gitea/gitea/pull/13462))
  * Add support for Mastodon OAuth2 provider ([#13293](https://github.com/go-gitea/gitea/pull/13293))
  * Add gitea sendmail command ([#13079](https://github.com/go-gitea/gitea/pull/13079))
  * Create DB session provider(based on xorm) ([#13031](https://github.com/go-gitea/gitea/pull/13031))
  * Add dismiss review feature ([#12674](https://github.com/go-gitea/gitea/pull/12674))
  * Make manual merge autodetection optional and add manual merge as merge method ([#12543](https://github.com/go-gitea/gitea/pull/12543))
  * Dump github/gitlab/gitea repository data to a local directory and restore to gitea ([#12244](https://github.com/go-gitea/gitea/pull/12244))
  * Create Rootless Docker image ([#10154](https://github.com/go-gitea/gitea/pull/10154))
* API
  * Speedup issue search ([#15179](https://github.com/go-gitea/gitea/pull/15179)) ([#15192](https://github.com/go-gitea/gitea/pull/15192))
  * Get pull, return head branch sha, even if deleted ([#14931](https://github.com/go-gitea/gitea/pull/14931))
  * Export LFS & TimeTracking function status ([#14753](https://github.com/go-gitea/gitea/pull/14753))
  * Show Gitea version in swagger ([#14654](https://github.com/go-gitea/gitea/pull/14654))
  * Fix PATCH /repos/{owner}/{repo} panic ([#14637](https://github.com/go-gitea/gitea/pull/14637))
  * Add Restricted Field to User ([#14630](https://github.com/go-gitea/gitea/pull/14630))
  * Add support for ref parameter to get raw file API ([#14602](https://github.com/go-gitea/gitea/pull/14602))
  * Add affected files of commits to commit struct ([#14579](https://github.com/go-gitea/gitea/pull/14579))
  * Fix CJK fonts again and misc. font issues ([#14575](https://github.com/go-gitea/gitea/pull/14575))
  * Add delete release by tag & delete tag ([#14563](https://github.com/go-gitea/gitea/pull/14563)) & ([#13358](https://github.com/go-gitea/gitea/pull/13358))
  * Add pagination to ListBranches ([#14524](https://github.com/go-gitea/gitea/pull/14524))
  * Add signoff option in commit form ([#14516](https://github.com/go-gitea/gitea/pull/14516))
  * GetRelease by tag only return release ([#14397](https://github.com/go-gitea/gitea/pull/14397))
  * Add MirrorInterval to the API ([#14163](https://github.com/go-gitea/gitea/pull/14163))
  * Make BasicAuth Prefix case insensitive ([#14106](https://github.com/go-gitea/gitea/pull/14106))
  * Add user filter to issueTrackedTimes, enable usage for issue managers ([#14081](https://github.com/go-gitea/gitea/pull/14081))
  * Add ref to create/edit issue options & deprecated assignee ([#13992](https://github.com/go-gitea/gitea/pull/13992))
  * Add Ref to Issue ([#13946](https://github.com/go-gitea/gitea/pull/13946))
  * Expose default theme in meta and API ([#13809](https://github.com/go-gitea/gitea/pull/13809))
  * Send error message when CSRF token is missing ([#13676](https://github.com/go-gitea/gitea/pull/13676))
  * List, Check, Add & delete endpoints for repository teams ([#13630](https://github.com/go-gitea/gitea/pull/13630))
  * Admin EditUser: Make FullName, Email, Website & Location optional ([#13562](https://github.com/go-gitea/gitea/pull/13562))
  * Add more filters to issues search ([#13514](https://github.com/go-gitea/gitea/pull/13514))
  * Add review request api ([#11355](https://github.com/go-gitea/gitea/pull/11355))
* BUGFIXES
  * Fix delete nonexist oauth application 500 and prevent deadlock ([#15384](https://github.com/go-gitea/gitea/pull/15384)) ([#15396](https://github.com/go-gitea/gitea/pull/15396))
  * Always set the merge base used to merge the commit ([#15352](https://github.com/go-gitea/gitea/pull/15352)) ([#15385](https://github.com/go-gitea/gitea/pull/15385))
  * Upgrade to bluemonday 1.0.7 ([#15379](https://github.com/go-gitea/gitea/pull/15379)) ([#15380](https://github.com/go-gitea/gitea/pull/15380))
  * Turn RepoRef and RepoAssignment back into func(*Context) ([#15372](https://github.com/go-gitea/gitea/pull/15372)) ([#15377](https://github.com/go-gitea/gitea/pull/15377))
  * Move FCGI req.URL.Path fix-up to the FCGI listener ([#15292](https://github.com/go-gitea/gitea/pull/15292)) ([#15361](https://github.com/go-gitea/gitea/pull/15361))
  * Show diff on rename with diff changes ([#15338](https://github.com/go-gitea/gitea/pull/15338)) ([#15339](https://github.com/go-gitea/gitea/pull/15339))
  * Fix handling of logout event ([#15323](https://github.com/go-gitea/gitea/pull/15323)) ([#15337](https://github.com/go-gitea/gitea/pull/15337))
  * Fix CanCreateRepo check ([#15311](https://github.com/go-gitea/gitea/pull/15311)) ([#15321](https://github.com/go-gitea/gitea/pull/15321))
  * Fix xorm log stack level ([#15285](https://github.com/go-gitea/gitea/pull/15285)) ([#15316](https://github.com/go-gitea/gitea/pull/15316))
  * Fix bug in Wrap ([#15302](https://github.com/go-gitea/gitea/pull/15302)) ([#15309](https://github.com/go-gitea/gitea/pull/15309))
  * Drop the event source if we are unauthorized ([#15275](https://github.com/go-gitea/gitea/pull/15275)) ([#15280](https://github.com/go-gitea/gitea/pull/15280))
  * Backport Fix graph pagination ([#15225](https://github.com/go-gitea/gitea/pull/15225))  ([#15249](https://github.com/go-gitea/gitea/pull/15249))
  * Prevent NPE in CommentMustAsDiff if no hunk header ([#15199](https://github.com/go-gitea/gitea/pull/15199)) ([#15200](https://github.com/go-gitea/gitea/pull/15200))
  * should run RetrieveRepoMetas() for empty pr ([#15187](https://github.com/go-gitea/gitea/pull/15187)) ([#15190](https://github.com/go-gitea/gitea/pull/15190))
  * Move setting to enable closing issue via commit in non default branch to repo settings ([#14965](https://github.com/go-gitea/gitea/pull/14965))
  * Show correct issues for team dashboard ([#14952](https://github.com/go-gitea/gitea/pull/14952))
  * Ensure that new pull request button works on forked forks owned by owner of the root and reduce ambiguity ([#14932](https://github.com/go-gitea/gitea/pull/14932))
  * Only allow issue labels from owner repository or organization ([#14928](https://github.com/go-gitea/gitea/pull/14928))
  * Fix alignment of People and Teams right arrow on org homepage ([#14924](https://github.com/go-gitea/gitea/pull/14924))
  * Fix overdue marking of closed issues and milestones ([#14923](https://github.com/go-gitea/gitea/pull/14923))
  * Prevent panic when empty MilestoneID in repo/issue/list ([#14911](https://github.com/go-gitea/gitea/pull/14911))
  * Fix migration context data ([#14910](https://github.com/go-gitea/gitea/pull/14910))
  * Handle URLs with trailing slash ([#14852](https://github.com/go-gitea/gitea/pull/14852))
  * Add CORS config on to /login/oauth/access_token endpoint ([#14850](https://github.com/go-gitea/gitea/pull/14850))
  * Make searching issues by keyword case insensitive on DB ([#14848](https://github.com/go-gitea/gitea/pull/14848))
  * Prevent use of double sub-path and incorrect asset path in manifest ([#14827](https://github.com/go-gitea/gitea/pull/14827))
  * Fix link account ui ([#14763](https://github.com/go-gitea/gitea/pull/14763))
  * Fix preview status switch button on wiki editor ([#14742](https://github.com/go-gitea/gitea/pull/14742))
  * Fix github download on migration ([#14703](https://github.com/go-gitea/gitea/pull/14703))
  * Fix svg spacing ([#14638](https://github.com/go-gitea/gitea/pull/14638))
  * Prevent adding nil label to .AddedLabels or .RemovedLabels ([#14623](https://github.com/go-gitea/gitea/pull/14623))
  * Truncated organizations name ([#14615](https://github.com/go-gitea/gitea/pull/14615))
  * Exclude the current dump file from the dump ([#14606](https://github.com/go-gitea/gitea/pull/14606))
  * Use OldRef instead of CommitSHA for DeleteBranch comments ([#14604](https://github.com/go-gitea/gitea/pull/14604))
  * Ensure memcache caching works when TTL greater than 30 days ([#14592](https://github.com/go-gitea/gitea/pull/14592))
  * Remove NULs byte arrays passed to PostProcess ([#14587](https://github.com/go-gitea/gitea/pull/14587))
  * Restore detection of branches are equal on compare page ([#14586](https://github.com/go-gitea/gitea/pull/14586))
  * Fix incorrect key name so registerManualConfirm works ([#14455](https://github.com/go-gitea/gitea/pull/14455))
  * Fix close/reopen with comment ([#14436](https://github.com/go-gitea/gitea/pull/14436))
  * Allow passcode invalid error to appear ([#14371](https://github.com/go-gitea/gitea/pull/14371))
  * Escape branch names in compare url ([#14364](https://github.com/go-gitea/gitea/pull/14364))
  * Label and milestone webhooks on issue/pull creation ([#14363](https://github.com/go-gitea/gitea/pull/14363))
  * Handle NotifyCreateRef as create branch in feeds ([#14245](https://github.com/go-gitea/gitea/pull/14245))
  * Prevent clipping input text in Chrome + Segoe UI Font ([#14179](https://github.com/go-gitea/gitea/pull/14179))
  * Fix UI on edit auth source page ([#14137](https://github.com/go-gitea/gitea/pull/14137))
  * Fix git.parseTagData ([#14105](https://github.com/go-gitea/gitea/pull/14105))
  * Refactor get tag to remove unnecessary steps ([#14058](https://github.com/go-gitea/gitea/pull/14058))
  * Fix integrations test error with space in CURDIR path ([#14056](https://github.com/go-gitea/gitea/pull/14056))
  * Dropdown triangle fixes ([#14028](https://github.com/go-gitea/gitea/pull/14028))
  * Fix label of --id in admin delete user ([#14005](https://github.com/go-gitea/gitea/pull/14005))
  * Cause NotifyMigrateRepository to emit a repo create webhook ([#14004](https://github.com/go-gitea/gitea/pull/14004))
  * Update HEAD to match defaultBranch in template generation ([#13948](https://github.com/go-gitea/gitea/pull/13948))
  * Fix action avatar loading ([#13909](https://github.com/go-gitea/gitea/pull/13909))
  * Fix issue participants ([#13893](https://github.com/go-gitea/gitea/pull/13893))
  * Fix avatar template error ([#13833](https://github.com/go-gitea/gitea/pull/13833))
  * Fix review request notification email links when external issue tracker is enabled ([#13723](https://github.com/go-gitea/gitea/pull/13723))
  * Fix blame line alignment ([#13542](https://github.com/go-gitea/gitea/pull/13542))
  * Include OriginalAuthor in Reaction constraint ([#13505](https://github.com/go-gitea/gitea/pull/13505))
  * Comments on review should have the same sha ([#13448](https://github.com/go-gitea/gitea/pull/13448))
  * Fix whitespace rendering in diff ([#13415](https://github.com/go-gitea/gitea/pull/13415))
  * Fixed git args duplication ([#13411](https://github.com/go-gitea/gitea/pull/13411))
  * Fix bug on release publisherid migrations ([#13410](https://github.com/go-gitea/gitea/pull/13410))
  * Fix --port setting ([#13288](https://github.com/go-gitea/gitea/pull/13288))
  * Keep database transactions not too big ([#13254](https://github.com/go-gitea/gitea/pull/13254))
  * Git version check, ignore pre-releases constraints ([#13234](https://github.com/go-gitea/gitea/pull/13234))
  * Handle and propagate errors when checking if paths are Dirs, Files or Exist ([#13186](https://github.com/go-gitea/gitea/pull/13186))
  * Update Mirror IsEmpty status on synchronize ([#13185](https://github.com/go-gitea/gitea/pull/13185))
  * Use GO variable in go-check target ([#13146](https://github.com/go-gitea/gitea/pull/13146)) ([#13147](https://github.com/go-gitea/gitea/pull/13147))
* ENHANCEMENTS
  * UI style improvements
  * Dropzone styling improvements ([#15291](https://github.com/go-gitea/gitea/pull/15291)) ([#15374](https://github.com/go-gitea/gitea/pull/15374))
  * Add size to Save function ([#15264](https://github.com/go-gitea/gitea/pull/15264)) ([#15270](https://github.com/go-gitea/gitea/pull/15270))
  * Monaco improvements ([#15333](https://github.com/go-gitea/gitea/pull/15333)) ([#15345](https://github.com/go-gitea/gitea/pull/15345))
  * Support .mailmap in code activity stats ([#15009](https://github.com/go-gitea/gitea/pull/15009))
  * Sort release attachments by name ([#15008](https://github.com/go-gitea/gitea/pull/15008))  
  * Add ui.explore settings to control view of explore pages ([#14094](https://github.com/go-gitea/gitea/pull/14094))
  * Make internal SSH server host key path configurable ([#14918](https://github.com/go-gitea/gitea/pull/14918))
  * Hide resync all ssh principals when using internal ssh server ([#14904](https://github.com/go-gitea/gitea/pull/14904))
  * Add SameSite setting for cookies ([#14900](https://github.com/go-gitea/gitea/pull/14900))
  * Move Bleve and Elastic code indexers to use a common cat-file --batch ([#14781](https://github.com/go-gitea/gitea/pull/14781))
  * Add environment-to-ini to docker image ([#14762](https://github.com/go-gitea/gitea/pull/14762))
  * Add preview support for wiki editor when disable simpleMDE ([#14757](https://github.com/go-gitea/gitea/pull/14757))
  * Add easyMDE(simpleMDE) support for release content editor ([#14744](https://github.com/go-gitea/gitea/pull/14744))
  * Organization removal confirmation using name not password ([#14738](https://github.com/go-gitea/gitea/pull/14738))
  * Make branch names in PR description clickable ([#14716](https://github.com/go-gitea/gitea/pull/14716))
  * Add Password Algorithm option to install page ([#14701](https://github.com/go-gitea/gitea/pull/14701))
  * Add fullTextSearch to dropdowns by default ([#14694](https://github.com/go-gitea/gitea/pull/14694))
  * Fix truncated organization names ([#14655](https://github.com/go-gitea/gitea/pull/14655))
  * Whitespace in commits ([#14650](https://github.com/go-gitea/gitea/pull/14650))
  * Sort / move project boards ([#14634](https://github.com/go-gitea/gitea/pull/14634))
  * Make fileheader sticky in diffs ([#14616](https://github.com/go-gitea/gitea/pull/14616))
  * Add helper descriptions on new repo page ([#14591](https://github.com/go-gitea/gitea/pull/14591))
  * Move the stopwatches to the eventsource stream ([#14588](https://github.com/go-gitea/gitea/pull/14588))
  * Add Content-Length header to HEAD requests ([#14542](https://github.com/go-gitea/gitea/pull/14542))
  * Add Image Diff options in Diff view ([#14450](https://github.com/go-gitea/gitea/pull/14450))
  * Improve Description in new/ edit Project template ([#14429](https://github.com/go-gitea/gitea/pull/14429))
  * Allow ssh-keygen on Windows to detect ssh key type ([#14413](https://github.com/go-gitea/gitea/pull/14413))
  * Display error if twofaSecret cannot be retrieved ([#14372](https://github.com/go-gitea/gitea/pull/14372))
  * Sort issue search results by revelance ([#14353](https://github.com/go-gitea/gitea/pull/14353))
  * Implement ghost comment mitigation ([#14349](https://github.com/go-gitea/gitea/pull/14349))
  * Upgrade blevesearch dependency to v2.0.1 ([#14346](https://github.com/go-gitea/gitea/pull/14346))
  * Add edit, delete and reaction support to code review comments on issue page ([#14339](https://github.com/go-gitea/gitea/pull/14339))
  * Merge default and system webhooks under one menu ([#14244](https://github.com/go-gitea/gitea/pull/14244))
  * Add option for administrator to reset user 2FA ([#14243](https://github.com/go-gitea/gitea/pull/14243))
  * Add option to change username to the admin panel ([#14229](https://github.com/go-gitea/gitea/pull/14229))
  * Check for 'main' as potential default branch name ([#14193](https://github.com/go-gitea/gitea/pull/14193))
  * Project: show referenced PRs in issue cards ([#14183](https://github.com/go-gitea/gitea/pull/14183))
  * Use caddy's certmagic library for extensible/robust ACME handling ([#14177](https://github.com/go-gitea/gitea/pull/14177))
  * CLI support for OAuth sources custom icons ([#14166](https://github.com/go-gitea/gitea/pull/14166))
  * Custom icons for OAuth sources ([#14161](https://github.com/go-gitea/gitea/pull/14161))
  * Team dashboards ([#14159](https://github.com/go-gitea/gitea/pull/14159))
  * KanBan: be able to set default board ([#14147](https://github.com/go-gitea/gitea/pull/14147))
  * Disable Fomantic's custom scrollbars ([#14109](https://github.com/go-gitea/gitea/pull/14109))
  * Add UI to delete tracked times ([#14100](https://github.com/go-gitea/gitea/pull/14100))
  * Rework heatmap permissions ([#14080](https://github.com/go-gitea/gitea/pull/14080))
  * Issue and pull request filters on organization dashboard ([#14072](https://github.com/go-gitea/gitea/pull/14072))
  * Fix webhook list styling ([#14001](https://github.com/go-gitea/gitea/pull/14001))
  * Show dropdown with all statuses for commit ([#13977](https://github.com/go-gitea/gitea/pull/13977))
  * Show status check for merged PRs ([#13975](https://github.com/go-gitea/gitea/pull/13975))
  * Diff stat improvements ([#13954](https://github.com/go-gitea/gitea/pull/13954))
  * Report permissions denied in internal SSH ([#13953](https://github.com/go-gitea/gitea/pull/13953))
  * Markdown task list improvements ([#13952](https://github.com/go-gitea/gitea/pull/13952))
  * Heatmap days clickable ([#13935](https://github.com/go-gitea/gitea/pull/13935))
  * chore: use octicon-mirror for feeds display ([#13928](https://github.com/go-gitea/gitea/pull/13928))
  * Move diff split code into own template file ([#13919](https://github.com/go-gitea/gitea/pull/13919))
  * Markdown: Enable wrapping in code blocks and a color tweak ([#13894](https://github.com/go-gitea/gitea/pull/13894))
  * Do not reload page after adding comments in Pull Request reviews ([#13877](https://github.com/go-gitea/gitea/pull/13877))
  * Add pull request manually merge instruction ([#13840](https://github.com/go-gitea/gitea/pull/13840))
  * add thumbnail preview section to issue attachments ([#13826](https://github.com/go-gitea/gitea/pull/13826))
  * Move Repo APIFormat to convert package ([#13787](https://github.com/go-gitea/gitea/pull/13787))
  * Move notification APIFormat ([#13783](https://github.com/go-gitea/gitea/pull/13783))
  * Swap swagger-ui with swagger-ui-dist ([#13777](https://github.com/go-gitea/gitea/pull/13777))
  * User Settings: Ignore empty language codes & validate ([#13755](https://github.com/go-gitea/gitea/pull/13755))
  * Improve migrate page and add card CSS ([#13751](https://github.com/go-gitea/gitea/pull/13751))
  * Add block on official review requests branch protection ([#13705](https://github.com/go-gitea/gitea/pull/13705))
  * Add review requested filter on pull request overview ([#13701](https://github.com/go-gitea/gitea/pull/13701))
  * Use chronological commit order in default squash message ([#13696](https://github.com/go-gitea/gitea/pull/13696))
  * Clickable links in pull request (and issue) titles ([#13695](https://github.com/go-gitea/gitea/pull/13695))
  * Support shortened commit SHAs in URLs ([#13686](https://github.com/go-gitea/gitea/pull/13686))
  * Use native git variants by default with go-git variants as build tag ([#13673](https://github.com/go-gitea/gitea/pull/13673))
  * Don't render dropdown when only 1 merge style is available ([#13670](https://github.com/go-gitea/gitea/pull/13670))
  * Move webhook type from int to string ([#13664](https://github.com/go-gitea/gitea/pull/13664))
  * Direct avatar rendering ([#13649](https://github.com/go-gitea/gitea/pull/13649))
  * Verify password for local-account activation ([#13631](https://github.com/go-gitea/gitea/pull/13631))
  * Prevent clone protocol button flash on page load ([#13626](https://github.com/go-gitea/gitea/pull/13626))
  * Remove fetch request from heatmap ([#13623](https://github.com/go-gitea/gitea/pull/13623))
  * Refactor combine label comments with tests ([#13619](https://github.com/go-gitea/gitea/pull/13619))
  * Move metrics from macaron to chi ([#13601](https://github.com/go-gitea/gitea/pull/13601))
  * Issue and Pulls lists rework ([#13594](https://github.com/go-gitea/gitea/pull/13594))
  * HTTP cache rework and enable caching for storage assets ([#13569](https://github.com/go-gitea/gitea/pull/13569))
  * Use mount but not register for chi routes ([#13555](https://github.com/go-gitea/gitea/pull/13555))
  * Use monaco for the git hook editor ([#13552](https://github.com/go-gitea/gitea/pull/13552))
  * Make heatmap colors more distinct ([#13533](https://github.com/go-gitea/gitea/pull/13533))
  * Lazy-load issue reviewers and assignees avatars ([#13526](https://github.com/go-gitea/gitea/pull/13526))
  * Change search and filter icons to SVG ([#13473](https://github.com/go-gitea/gitea/pull/13473))
  * Create tag on ui ([#13467](https://github.com/go-gitea/gitea/pull/13467))
  * updateSize when create a repo with init commit ([#13441](https://github.com/go-gitea/gitea/pull/13441))
  * Added title and action buttons to Project view page ([#13437](https://github.com/go-gitea/gitea/pull/13437))
  * Override fomantic monospace fonts and set size ([#13435](https://github.com/go-gitea/gitea/pull/13435))
  * Rework focused comment styling ([#13434](https://github.com/go-gitea/gitea/pull/13434))
  * Tags cleanup ([#13428](https://github.com/go-gitea/gitea/pull/13428))
  * Various style tweaks ([#13418](https://github.com/go-gitea/gitea/pull/13418))
  * Refactor push update ([#13381](https://github.com/go-gitea/gitea/pull/13381))
  * Comment box tweaks and SVG dropdown triangles ([#13376](https://github.com/go-gitea/gitea/pull/13376))
  * Various style fixes ([#13372](https://github.com/go-gitea/gitea/pull/13372))
  * Change repo home page icons to SVG ([#13364](https://github.com/go-gitea/gitea/pull/13364))
  * Use CSS Vars for primary color ([#13361](https://github.com/go-gitea/gitea/pull/13361))
  * Refactor image paste code ([#13354](https://github.com/go-gitea/gitea/pull/13354))
  * Switch from SimpleMDE to EasyMDE ([#13333](https://github.com/go-gitea/gitea/pull/13333))
  * Group Label Changed Comments in timeline ([#13304](https://github.com/go-gitea/gitea/pull/13304))
  * Make the logger an interface ([#13294](https://github.com/go-gitea/gitea/pull/13294))
  * Fix PR/Issue titles on mobile ([#13292](https://github.com/go-gitea/gitea/pull/13292))
  * Rearrange the order of the merged by etc. in locale ([#13284](https://github.com/go-gitea/gitea/pull/13284))
  * Replace footer and modal icons with SVG ([#13245](https://github.com/go-gitea/gitea/pull/13245))
  * Issues overview should not show issues from archived repos ([#13220](https://github.com/go-gitea/gitea/pull/13220))
  * Show stale label for stale code comment which is marked as resolved ([#13213](https://github.com/go-gitea/gitea/pull/13213))
  * Use CSS Variables for fonts, remove postcss-loader ([#13204](https://github.com/go-gitea/gitea/pull/13204))
  * Add mentionable teams to tributeValues and change team mention rules to gh's style ([#13198](https://github.com/go-gitea/gitea/pull/13198))
  * Move install pages out of main macaron routes ([#13195](https://github.com/go-gitea/gitea/pull/13195))
  * Update outdated label to use Fomantic UI style ([#13181](https://github.com/go-gitea/gitea/pull/13181))
  * Added option to disable webhooks ([#13176](https://github.com/go-gitea/gitea/pull/13176))
  * Change order of possible-owner organizations to alphabetical ([#13160](https://github.com/go-gitea/gitea/pull/13160))
  * Log IP on SSH authentication failure for Built-in SSH server ([#13150](https://github.com/go-gitea/gitea/pull/13150))
  * Added option to disable migrations ([#13114](https://github.com/go-gitea/gitea/pull/13114))
  * New "Add Mirror" Button in the Organization view ([#13105](https://github.com/go-gitea/gitea/pull/13105))
  * Manually approve new registration ([#13083](https://github.com/go-gitea/gitea/pull/13083))
  * Cron job to cleanup hook_task table ([#13080](https://github.com/go-gitea/gitea/pull/13080))
  * Use the headline comment of pull-request as the squash commit's message ([#13071](https://github.com/go-gitea/gitea/pull/13071))
  * Clarify the suffices and prefixes of setting.AppSubURL and setting.AppURL ([#12999](https://github.com/go-gitea/gitea/pull/12999))
  * Slightly simplify the queue settings code to help reduce the risk of problems ([#12976](https://github.com/go-gitea/gitea/pull/12976))
  * Add precise search type for Elastic Search ([#12869](https://github.com/go-gitea/gitea/pull/12869))
  * Move APIFormat functions into convert package ([#12856](https://github.com/go-gitea/gitea/pull/12856))
  * Multiple GitGraph improvements: Exclude PR heads, Add branch/PR links, Show only certain branches, ([#12766](https://github.com/go-gitea/gitea/pull/12766))
  * Add TrN for repository limit ([#12492](https://github.com/go-gitea/gitea/pull/12492))
  * Refactor doctor ([#12264](https://github.com/go-gitea/gitea/pull/12264))
  * Add the tag list page to the release page ([#12096](https://github.com/go-gitea/gitea/pull/12096))
  * Redirect on changed user and org name ([#11649](https://github.com/go-gitea/gitea/pull/11649))
  * load U2F js only on pages which need it ([#11585](https://github.com/go-gitea/gitea/pull/11585))
  * Make archival asynchronous ([#11296](https://github.com/go-gitea/gitea/pull/11296))
  * Introduce go chi web framework as frontend of macaron, so that we can move routes from macaron to chi step by step ([#7420](https://github.com/go-gitea/gitea/pull/7420))
  * Improve vfsgen to not unzip bindata files but send to browser directly ([#7109](https://github.com/go-gitea/gitea/pull/7109))
  * Enhance release list ([#6025](https://github.com/go-gitea/gitea/pull/6025))
* DOCS
  * Swagger show models by default ([#14880](https://github.com/go-gitea/gitea/pull/14880))
  * Add missing repo.projects unit into swagger ([#14876](https://github.com/go-gitea/gitea/pull/14876))
  * Update docs and comments to remove macaron ([#14491](https://github.com/go-gitea/gitea/pull/14491))
  * Issue template addition: Are you using Gitea behind CloudFlare? ([#14098](https://github.com/go-gitea/gitea/pull/14098))
  * Generate man pages ([#13901](https://github.com/go-gitea/gitea/pull/13901))
  * Reformat/fine-tune docs ([#13897](https://github.com/go-gitea/gitea/pull/13897))
  * Added Table of Contents to long documentation pages ([#13890](https://github.com/go-gitea/gitea/pull/13890))
  * Add docs command ([#13429](https://github.com/go-gitea/gitea/pull/13429))
  * Update external-renderers.en-us.md ([#13165](https://github.com/go-gitea/gitea/pull/13165))
* MISC
  * Add builds for apple M1 (darwin arm64) ([#14951](https://github.com/go-gitea/gitea/pull/14951))
  * Migrate to use jsoniter instead of encoding/json ([#14841](https://github.com/go-gitea/gitea/pull/14841))
  * Reduce make verbosity ([#13803](https://github.com/go-gitea/gitea/pull/13803))
  * Add git command error directory on log ([#13194](https://github.com/go-gitea/gitea/pull/13194))
