---
date: "2020-12-02T10:49:02+07:00"
author: "jolheiser"
title: "Gitea 1.13.0 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.13.0.

As we approach Gitea's [4th birthday](https://blog.gitea.io/2016/12/release-of-1.0.0/), I just want to give a special thanks to everyone who has been a part of the project, whether it's the implementation of a feature, or just enjoying the software.  
Thank you all!

We have merged an incredible [649](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.13.0+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->
We would like to give a special thanks to Michael Scherer ([@mscherer](https://github.com/mscherer)) for reporting a security issue that was patched in this release.  
Thanks to [@zeripath](https://github.com/zeripath) for fixing in [#12685](https://github.com/go-gitea/gitea/pull/12685)


You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.13.0/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

:exclamation: As of this version, Gitea supports TLS version 1.2 at _minimum_. ([#12689](https://github.com/go-gitea/gitea/pull/12689))

:exclamation: Users with a custom favicon will need to provide a `favicon.svg`. ([#12437](https://github.com/go-gitea/gitea/pull/12437))

:exclamation: Password complexity checks now default to `off`. ([#12557](https://github.com/go-gitea/gitea/pull/12557))  
Alternative methods such as minimum length or checking against HaveIBeenPwned should be considered.

:exclamation: The Webhook shared secret inside the webhook payload has been deprecated and will be removed in 1.14.0: https://github.com/go-gitea/gitea/issues/11755 please use the secret header that uses an hmac signature to validate the webhook payload.

:exclamation: Git hooks now default to `off`! ([#13058](https://github.com/go-gitea/gitea/pull/13058))  
In your config, you can check the [security](https://docs.gitea.io/en-us/config-cheat-sheet/#security-security) section for
`DISABLE_GIT_HOOKS`. To enable them again, you must set the setting to `false`.  
**WARNING:** Custom git hooks can be used to perform arbitrary code execution on the host operating system. 
This enables the users to access and modify this config file and the Gitea database and interrupt the Gitea service. 
By modifying the Gitea database, users can gain Gitea administrator privileges. 
It also enables them to access other resources available to the user on the operating system that is running the Gitea instance and perform arbitrary actions in the name of the Gitea OS user. 
This may be harmful to you website or your operating system.

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**  
Sample images below.

<!--more-->

|![shirt](/demos/shop/shirt.png)|![hoodie](/demos/shop/hoodie.png)|![ladies](/demos/shop/ladies.png)|
|-|-|-| 
<!-- Do it in markdown, they said. It will be fun, they said. -->


Now, on to the changes!

## Adopt repositories ([#12920](https://github.com/go-gitea/gitea/pull/12920))

Administrators can now adopt repositories that are on disk, but not yet in Gitea's database.

An administrator can also allow users to adopt repositories from their settings.

_Thanks to [**@zeripath**](https://github.com/zeripath)_

## Check passwords against HaveIBeenPwned ([#12716](https://github.com/go-gitea/gitea/pull/12716))

A new, optional password policy to check new passwords against [HaveIBeenPwned](https://haveibeenpwned.com/Passwords).

_Thanks to [**@jolheiser**](https://github.com/jolheiser)_

## Add a migrate service type switch page ([#12697](https://github.com/go-gitea/gitea/pull/12697))

![migration](/demos/12697/1.png)

_Thanks to [**@lunny**](https://github.com/lunny)_  
_Thanks to [**@6543**](https://github.com/6543) for gitea2gitea migration ([#12657](https://github.com/go-gitea/gitea/pull/12657))_

## Mermaid JS renderer ([#12334](https://github.com/go-gitea/gitea/pull/12334))

![mermaid](/demos/12334/1.png)

_Thanks to [**@silverwind**](https://github.com/silverwind)_

## Add spent time to referenced issue in commit message ([#12220](https://github.com/go-gitea/gitea/pull/12220))

![time](/demos/12220/1.png)

_Thanks to [**@lafriks**](https://github.com/lafriks)_

## Enable cloning via Git Wire Protocol v2 over HTTP ([#12170](https://github.com/go-gitea/gitea/pull/12170))

![v2](/demos/12170/1.gif)

_Thanks to [**@wmhilton**](https://github.com/wmhilton)_

## Issue templates directory ([#11450](https://github.com/go-gitea/gitea/pull/11450))

|![raw](/demos/11450/1.png)|![preview](/demos/11450/2.png)|
|-|-|

_Thanks to [**@jolheiser**](https://github.com/jolheiser)_

## Storage layer for attachments / avatars / LFS ([#11387](https://github.com/go-gitea/gitea/pull/11387), [#11516](https://github.com/go-gitea/gitea/pull/12516), [#12518](https://github.com/go-gitea/gitea/pull/12518))

Attachments, user avatars, repo avatars and LFS files can now be saved to disk, or served via minio. (More S3-compatible integrations may become available in the future!). Now there is no storage layer only on git data.
See https://docs.gitea.io/en-us/config-cheat-sheet/#storage-storage about how to configure it.

_Thanks to [**@lunny**](https://github.com/lunny)_

And also thanks to _[**@zeripath**](https://github.com/zeripath)_ for simplifying the configuration [#12978](https://github.com/go-gitea/gitea/pull/12978)

## Push commits history comment on PR time-line ([#11167](https://github.com/go-gitea/gitea/pull/11167))

![commits](/demos/11167/1.png)

_Thanks to [**@a1012112796**](https://github.com/a1012112796)_

## Support elastic search for code search ([#10273](https://github.com/go-gitea/gitea/pull/10273))

Elastic search can now be used as the code search indexer.

_Thanks to [**@lunny**](https://github.com/lunny)_

## Kanban board ([#8346](https://github.com/go-gitea/gitea/pull/8346))

![kanban](/demos/8346/1.png)

_Thanks to [**@adelowo**](https://github.com/adelowo)_  
_Also thanks to [**@jaqra**](https://github.com/jaqra), [**@TsakiDev**](https://github.com/TsakiDev), [**@6543**](https://github.com/6543), and [**@zeripath**](https://github.com/zeripath) for additional support_

## Server-side syntax highlighting for all code ([#12047](https://github.com/go-gitea/gitea/pull/12047))

### Old

|![diff-old](/demos/12047/1o.png)|![diff-side-old](/demos/12047/2o.png)|
|-|-|

### New

|![diff-new](/demos/12047/1n.png)|![diff-side-new](/demos/12047/2n.png)|
|-|-|
|![blame](/demos/12047/3n.png)|![comment](/demos/12047/4n.png)|


_Thanks to [**@mrsdizzie**](https://github.com/mrsdizzie)_  
_Additional thanks to [**@silverwind**](https://github.com/silverwind) for a **ton** of UI improvements for highlighting_

## Changelog

## [1.13.0](https://github.com/go-gitea/gitea/releases/tag/v1.13.0) - 2020-12-01
* SECURITY
  * Add Allow-/Block-List for Migrate & Mirrors ([#13610](https://github.com/go-gitea/gitea/pull/13610)) ([#13776](https://github.com/go-gitea/gitea/pull/13776))
  * Prevent git operations for inactive users ([#13527](https://github.com/go-gitea/gitea/pull/13527)) ([#13536](https://github.com/go-gitea/gitea/pull/13536))
  * Disallow urlencoded new lines in git protocol paths if there is a port ([#13521](https://github.com/go-gitea/gitea/pull/13521)) ([#13524](https://github.com/go-gitea/gitea/pull/13524))
  * Mitigate Security vulnerability in the git hook feature ([#13058](https://github.com/go-gitea/gitea/pull/13058))
  * Disable DSA ssh keys by default ([#13056](https://github.com/go-gitea/gitea/pull/13056))
  * Set TLS minimum version to 1.2 ([#12689](https://github.com/go-gitea/gitea/pull/12689))
  * Use argon as default password hash algorithm ([#12688](https://github.com/go-gitea/gitea/pull/12688))
  * Escape failed highlighted files ([#12685](https://github.com/go-gitea/gitea/pull/12685))
* BREAKING
  * Set RUN_MODE prod by default ([#13765](https://github.com/go-gitea/gitea/pull/13765)) ([#13767](https://github.com/go-gitea/gitea/pull/13767))
  * Don't replace underscores in auto-generated IDs in goldmark ([#12805](https://github.com/go-gitea/gitea/pull/12805))
  * Add Primary Key to Topic and RepoTopic tables ([#12639](https://github.com/go-gitea/gitea/pull/12639))
  * Disable password complexity check default ([#12557](https://github.com/go-gitea/gitea/pull/12557))
  * Change PIDFile default from /var/run/gitea.pid to /run/gitea.pid ([#12500](https://github.com/go-gitea/gitea/pull/12500))
  * Add extension Support to Attachments (allow all types for releases) ([#12465](https://github.com/go-gitea/gitea/pull/12465))
  * Remove IE11 Support ([#11470](https://github.com/go-gitea/gitea/pull/11470))
* FEATURES
  * Adopt repositories (#12920)
  * Check passwords against HaveIBeenPwned (#12716)
  * Gitea 2 Gitea migration (#12657)
  * Support storing Avatars in minio  (#12516)
  * Allow addition of gpg keyring with multiple keys (#12487)
  * Add email notify for new release (#12463)
  * Add Access-Control-Expose-Headers (#12446)
  * UserProfile Page: Render Description (#12415)
  * Add command to recreate tables (#12407)
  * Add mermaid JS renderer (#12334)
  * Add ssh certificate support (#12281)
  * Add spent time to referenced issue in commit message (#12220)
  * Initial support for push options (#12169)
  * Provide option to unlink a fork (#11858)
  * Show exact tag for commit on diff view (#11846)
  * Pause, Resume, Release&Reopen, Add and Remove Logging from command line (#11777)
  * Issue templates directory (#11450)
  * Add a storage layer for attachments (#11387)
  * Add hide activity option (#11353)
  * Add push commits history comment on PR time-line (#11167)
  * Support elastic search for code search (#10273)
  * Kanban board (#8346)
* API
  * If User is Admin, show 500 error message on PROD mode too (#13115)
  * Add Timestamp to Tag list API (#13026)
  * Return sample message for login error in api context (#12994)
  * Add IsTemplate option in create repo ui and api (#12942)
  * GetReleaseByID return 404 if not found (#12933)
  * Get release by tags endpoint (#12932)
  * NotificationSubject show Issue/Pull State (#12901)
  * Expose its limitation settings (#12714)
  * Add Created & Updated to Milestone (#12662)
  * Milestone endpoints accept names too (#12649)
  * Expose Attachment Settings in the API (#12514)
  * Add Issue and Repo info to StopWatch (#12458)
  * Add cron running API (#12421)
  * Add Update Pull HeadBranch Function (#12419)
  * Add TOTP header to Swagger Documentation (#12402)
  * Delete Token accept names too (#12366)
  * Add name filter for GetMilestoneList (#12336)
  * Fixed count of filtered issues when api request. (#12275)
  * Do not override API issue pagination with UI settings (#12068)
  * Expose useful General Repo settings settings (#11758)
  * Return error when trying to create Mirrors but Mirrors are globally disabled (#11757)
  * Provide diff and patch API endpoints (#11751)
  * Allow to create closed milestones (#11745)
  * Add language Statistics endpoint (#11737)
  * Add Endpoint to get GetGeneralUI Settings (#11735) & (#11854)
  * Issue/Pull expose IsLocked Property on API (#11708)
  * Add endpoint for Branch Creation (#11607)
  * Add pagination headers on endpoints that support total count from database (#11145)
* BUGFIXES
  * Fix bogus http requests on diffs (#13760) (#13761)
  * Show 'owner' tag for real owner (#13689) (#13743)
  * Validate email before inserting/updating (#13475) (#13666)
  * Fix issue/pull request list assignee filter (#13647) (#13651)
  * Gitlab migration support for subdirectories (#13563) (#13591)
  * Fix logic for preferred license setting (#13550) (#13557)
  * Add missed sync branch/tag webhook (#13538) (#13556)
  * Migration won't fail on non-migrated reactions (#13507)
  * Fix Italian language file parsing error (#13156)
  * Show outdated comments in pull request (#13148) (#13162)
  * Fix parsing of pre-release git version (#13169) (#13172)
  * Fix diff skipping lines (#13154) (#13155)
  * When handling errors in storageHandler check underlying error (#13178) (#13193)
  * Fix size and clickable area on file table back link (#13205) (#13207)
  * Add better error checking for inline html diff code (#13251)
  * Fix initial commit page & binary munching problem (#13249) (#13258)
  * Fix migrations from remote Gitea instances when configuration not set (#13229) (#13273)
  * Store task errors following migrations and display them (#13246) (#13287)
  * Fix bug isEnd detection on getIssues/getPullRequests (#13299) (#13301)
  * When the git ref is unable to be found return broken pr (#13218) (#13303)
  * Ensure topics added using the API are added to the repository (#13285) (#13302)
  * Fix avatar autogeneration (#13233) (#13282)
  * Add migrated pulls to pull request task queue (#13331) (#13334)
  * Issue comment reactions should also check pull type on API (#13349) (#13350)
  * Fix links to repositories in /user/setting/repos (#13360) (#13362)
  * Remove obsolete change of email on profile page (#13341) (#13347)
  * Fix scrolling to resolved comment anchors (#13343) (#13371)
  * Storage configuration support `[storage]` (#13314) (#13379)
  * When creating line diffs do not split within an html entity (#13357) (#13375) (#13425) (#13427)
  * Fix reactions on code comments (#13390) (#13401) 
  * Add missing full names when DEFAULT_SHOW_FULL_NAME is enabled (#13424)
  * Replies to outdated code comments should also be outdated (#13217) (#13433)
  * Fix panic bug in handling multiple references in commit (#13486) (#13487)
  * Prevent panic on git blame by limiting lines to 4096 bytes at most (#13470) (#13491)
  * Show original author's reviews on pull summary box (#13127)
  * Update golangci-lint to version 1.31.0 (#13102)
  * Fix line break for MS teams webhook (#13081)
  * Fix Issue & Pull Request comment headers on mobile (#13039)
  * Avoid setting the CONN_STR in queues unless it is meant to be set (#13025)
  * Remove code-view class from diff view (#13011)
  * Fix the color of PR comment hyperlinks. (#13009)
  * (Re)Load issue labels when changing them (#13007)
  * Fix Media links in org files not liked to media files (#12997)
  * Always return a list from GetCommitsFromIDs (#12981)
  * Only set the user password if the password field would have been shown (#12980)
  * Fix admin/config page (#12979)
  * Changed width of commit signature avatar (#12961)
  * Completely quote AppPath and CustomConf paths (#12955)
  * Fix handling of migration errors (#12928)
  * Fix anonymous GL migration (#12862)
  * Fix git open close bug (#12834)
  * Fix markdown meta parsing (#12817)
  * Add default storage configurations (#12813)
  * Show PR settings on empty repos (#12808)
  * Disable watch and star if not signed in (#12807)
  * Whilst changing the character set to utf8mb4 we should set ROW_FORMAT=dynamic too (#12804)
  * Set opengraph attributes on org pages (#12803)
  * Return error when creating gitlabdownloader failed (#12790)
  * Add migration for password algorithm change (#12784)
  * Compare SSH_DOMAIN when parsing submodule URLs (#12753)
  * Fix editor.commit_empty_file_text locale string (#12744)
  * Fix wrong poster message for code comment on Pull view (#11721)
  * Ensure that all migration requests are cancellable (#12669)
  * Ensure RepoPath is lowercased in gitea serv (#12668)
  * Do not disable commit changes button on repost (#12644)
  * Dark theme for line numbers in blame view (#12632)
  * Fix message when deleting last owner from an organization (#12628)
  * Use shellquote to unpack arguments to gitea serv (#12624)
  * Fix signing.wont_sign.%!s(<nil>) if Require Signing commits but not signed in. (#12581)
  * Set utf8mb4 as the default charset on MySQL if CHARSET is unset (#12563)
  * Set context for running CreateArchive to that of the request (#12555)
  * Prevent redirect back to /user/events (#12462)
  * Re-attempt to delete temporary upload if the file is locked by another process (#12447)
  * Mirror System Notice reports are too frequent (#12438)
  * Do not show arrows on comment diffs on pull comment pages (#12434)
  * Fix milestone links (#12405)
  * Increase size of the language column in language_stat (#12396)
  * Use transaction in V102 migration (#12395)
  * Only use --exclude on name-rev with git >= 2.13 (#12347)
  * Add action feed for new release (#12324)
  * Set NoAutoTime when updating is_archived (#12266)
  * Support Force-update in Mirror and improve Tracing in mirror (#12242)
  * Avoid sending "0 new commits" webhooks (#12212)
  * Fix U2F button icon (#12167)
  * models/repo_sign.go: break out of loops (#12159)
  * Ensure that git commit tree continues properly over the page (#12142)
  * Rewrite GitGraph.js (#12137)
  * Fix repo API listing stability (#12057)
  * Add team support for review request (#12039)
  * Fix 500 error on repos with no tags (#11870)
  * Fix nil pointer in default issue mail template (#11862)
  * Fix commit search in all branches (#11849)
  * Don't consider tag refs as valid for branch name (#11847)
  * Don't add same line code comment box twice (#11837)
  * Fix visibility of forked public repos from private orgs (#11717)
  * Fix chardet test and add ordering option (#11621)
  * Fix number of files, total additions, and deletions on Diff pages (#11614)
  * Properly handle and return empty string for dangling commits in GetBranchName (#11587)
  * Include query in sign in redirect (#11579)
  * Fix Enter not working in SimpleMDE (#11564)
  * Fix bug about can't skip commits base on base branch (#11555)
* ENHANCEMENTS
  * Only Return JSON for responses (#13511) (#13565)
  * Use existing analyzer module for language detection for highlighting (#13522) (#13551)
  * Return the full rejection message and errors in flash errors (#13221) (#13237)
  * Remove PAM from auth dropdown when unavailable (#13276) (#13281)
  * Add HostCertificate to sshd_config in Docker image (#13143)
  * Save TimeStamps for Star, Label, Follow, Watch and Collaboration to Database (#13124)
  * Improve error feedback for duplicate deploy keys (#13112)
  * Set appropriate `autocomplete` attributes on password fields (#13078)
  * Adding visual cue for "Limited" & "Private" organizations. (#13040)
  * Fix Pull Request merge buttons on mobile (#13035)
  * Gitea serv, hooks, manager and the like should always display Fatals (#13032)
  * CSS tweaks to warning/error segments and misc fixes (#13024)
  * Fix formatting of branches ahead-behind on narrow windows (#12989)
  * Add config option to make create-on-push repositories public by default (#12936)
  * Disable migration items when mirror is selected (#12918)
  * Add the checkbox quick button to the comment tool bar also (#12885)
  * Support GH enterprise (#12863)
  * Simplify CheckUnitUser logic (#12854)
  * Fix background of signed-commits on arc-green of timeline commits (#12837)
  * Move git update-server-info to hooks (#12826)
  * Add ui style for "Open a blank issue" button (#12824)
  * Use a simple format for the big number on ui (#12822)
  * Make SVG size argument optional (#12814)
  * Add placeholder text for bio profile text form (#12792)
  * Set language via AJAX (#12785)
  * Show git-pull-request icon for closed pull request (#12742)
  * Migrate version parsing library to hashicorp/go-version (#12719)
  * Only use async pre-empt hack if go < 1.15 (#12718)
  * Inform user about meaning of an hourglass on reviews (#12713)
  * Add a migrate service type switch page (#12697)
  * Migrations: Gitlab Add Reactions Support for Issues & MergeRequests (#12695)
  * Remove duplicate logic in initListSubmits (#12660)
  * Set avatar image dimensions (#12654)
  * Rename models.ProtectedBranchRepoID/PRID to models.EnvRepoID/PRID and ensure EnvPusherEmail is set (#12646)
  * Set setting.AppURL as GITEA_ROOT_URL environment variable during pushes (#12752)
  * Add postgres schema to the search_path on database connection (#12634)
  * Git migration UX improvements (#12619)
  * Add link to home page on swagger ui (#12601)
  * hCaptcha Support (#12594)
  * OpenGraph: use repo avatar if exist (#12586)
  * Reaction picker display improvements (#12576)
  * Fix emoji replacements, make emoji images consistent (#12567)
  * Increase clickable area on files table links (#12553)
  * Set z-index for sticky diff box lower (#12537)
  * Report error if API merge is not allowed (#12528)
  * LFS support to be stored on minio (#12518)
  * Show 2FA info on Admin Pannel: Users List (#12515)
  * Milestone Issue/Pull List: Add octicons type (#12499)
  * Make dashboard newsfeed list length a configurable item (#12469)
  * Add placeholder text for send testing email button in admin/config (#12452)
  * Add SVG favicon (#12437)
  * In issue comments, put issue participants also in completion list when hitting @ (#12433)
  * Collapse Swagger UI tags by default (#12428)
  * Detect full references to issues and pulls in commit messages (#12399)
  * Allow common redis and leveldb connections (#12385)
  * Don't use legacy method to send Matrix Webhook (#12348)
  * Remove padding/border-radius on image diffs (#12346)
  * Render the git graph on the server (#12333)
  * Fix clone panel in wiki position not always align right (#12326)
  * Rework 'make generate-images' (#12316)
  * Refactor webhook payload convertion (#12310)
  * Move jquery-minicolors to npm/webpack (#12305)
  * Support use nvarchar for all varchar columns when using mssql (#12269)
  * Update Octicons to v10 (#12240)
  * Disable search box autofocus (#12229)
  * Replace code fold icons with octicons (#12222)
  * Ensure syntax highlighting is the same inside diffs (#12205)
  * Auto-init repo on license, .gitignore select (#12202)
  * Default to showing closed Issues/PR list when there are only closed issues/PRs (#12200)
  * Enable cloning via Git Wire Protocol v2 over HTTP (#12170)
  * Direct SVG rendering (#12157)
  * Improve arc-green code colors (#12111)
  * Allow admin to merge pr with protected file changes (#12078)
  * Show description on individual milestone view (#12055)
  * Update the wiki repository remote origin while update the mirror repository's Clone From URL (#12053)
  * Server-side syntax highlighting for all code (#12047)
  * Use Fomantic's fluid padded for blame full width (#12023)
  * Use custom SVGs for commit signing lock icon (#12017)
  * Make tabs smaller (#12003)
  * Fix sticky diff stats container (#12002)
  * Move fomantic and jQuery to main webpack bundle (#11997)
  * Use enry language type to detect special languages (#11974)
  * Use only first line of commit when creating referenced comment (#11960)
  * Rename custom/conf/app.ini.sample to custom/conf/app.example.ini for better syntax light on editor (#11926)
  * Fix double divider on issue sidebar (#11919)
  * Shorten markdown heading anchors links (#11903)
  * Add org avatar on top of internal repo icon (#11895)
  * Use label to describe repository type (#11891)
  * Make repository size unclickable on repo summary bar (#11887)
  * Rework blame template and styling (#11885)
  * Fix icon alignment for show/hide outdated link on resolved conversation (#11881)
  * Vertically align review icons on repository sidebar (#11880)
  * Better align items using flex within review request box (#11879)
  * Only write to global gitconfig if necessary (#11876)
  * Disable all typographic replacements in markdown renderer (#11871)
  * Improve label edit buttons labels (#11841)
  * Use crispEdges rendering for octicon-internal-repo (#11801)
  * Show update branch item in merge box when it's necessary (#11761)
  * Add compare link to releases (#11752)
  * Allow site admin to disable mirrors (#11740)
  * Export monaco editor on window.codeEditors (#11739)
  * Add configurable Trust Models (#11712)
  * Show full GPG commit status on PR commit history (#11702)
  * Fix align issues and decrease avatar size on PR timeline (#11689)
  * Replace jquery-datetimepicker with native date input (#11684)
  * Change Style of Tags on Comments (#11668)
  * Fix missing styling for shabox on PR commit history (#11625)
  * Apply padding to approval icons on PR list (#11622)
  * Fix message wrapping on PR commit list (#11616)
  * Right-align status icon on pull request commit history (#11594)
  * Add missing padding for multi-commit list on PR view (#11593)
  * Do not show avatar for "{{user}} added X commits" (#11591)
  * Fix styling and padding for commit list on PR view (#11588)
  * Style code review comment for arc-green (#11572)
  * Use default commit message for wiki edits (#11550)
  * Add internal-repo octicon for public repos of private org (#11529)
  * Fix dropzone color on arc-green (#11514)
  * Insert ui divider directly in templates instead of from inside heatmap vue component (#11508)
  * Move tributejs to npm/webpack (#11497)
  * Fix text-transform on wiki revisions page (#11486)
  * Do not show lock icon on repo list for public repos in private org (#11445)
  * Include LFS when calculating repo size (#11060)
  * Add check for LDAP group membership (#10869)
  * When starting new stopwatch stop previous if it is still running (#10533)
  * Add queue for code indexer (#10332)
  * Move all push update operations to a queue (#10133)
  * Cache last commit when pushing for big repository (#10109)
  * Change/remove a branch of an open issue (#9080)
  * Sortable Tables Header By Click (#7980)
* TESTING
  * Use community codecov drone plugin (#12468)
  * Add more tests for diff highlighting (#12467)
  * Don't put integration test data outside of test folder (#11746)
  * Add debug option to hooks (#11624)
  * Log slow tests (#11487)
* TRANSLATION
  * Translate two small lables on commit statuse list (#12821)
  * Make issues.force_push_codes message shorter (#11575)
* BUILD
  * Bump min required golang to 1.13 (#12717)
  * Add 'make watch' (#12636)
  * Extract Swagger CSS to its own file (#12616)
  * Update eslint config (#12609)
  * Avoid unnecessary system-ui expansion (#12522)
  * Make the default PID file compile-time settable (#12485)
  * Add 'watch-backend' (#12330)
  * Detect version of sed in Makefile (#12319)
  * Update gitea-vet to v0.2.1 (#12282)
  * Add logic to build stable and edge builds for gitea snap (#12052)
  * Fix missing CGO_EXTRA_FLAGS build arg for docker (#11782)
  * Alpine 3.12 (#11720)
  * Enable stylelint's shorthand-property-no-redundant-values (#11436)
* DOCS
  * Change default log configuration (#13088)
  * Add automatic JS license generation (#11810)
  * Remove page size limit comment from swagger (#11806)
  * Narrow down Edge version in browser support docs (#11640)
