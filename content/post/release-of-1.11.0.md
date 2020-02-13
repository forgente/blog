---
date: "2020-02-10T00:30:00-03:00" 
author: "jolheiser"
title: "Gitea 1.11.0 is released"
tags: ["release"]
draft: false
---

It's time for another major release! We are proud to present Gitea 1.11.0 to the world.

In this release, we've merged
[481 pull requests](https://github.com/go-gitea/gitea/pulls?utf8=%E2%9C%93&q=is:pr+milestone:1.11.0+is:merged). That's the highest amount since 1.2.0 (483)!  
Special thanks to everyone, past and present, who have contributed and made this possible.

You can download one of our pre-built binaries from our
[downloads page](https://dl.gitea.io/gitea/1.11.0/) - make sure to select the
correct platform! For further details on how to install, follow our
[installation guide](https://docs.gitea.io/en-us/install-from-binary/).

<!-- raspi https://github.com/raspberrypi/linux/issues/3271 -->
Unfortunately, there is still no ARMv7 build, but using ARMv6 has worked for many users, so please try that in the meantime.

<!-- Security -->
We would like to give a special thanks to Alf-Ivar Holm from [mnemonic AS](https://mnemonic.no/) for reporting a security flaw in Semantic.  
Thanks to [@techknowlogick](https://github.com/techknowlogick) for fixing in [#9374](https://github.com/go-gitea/gitea/pull/9374)

We'd like to thank all of our backers on
[Open Collective](https://opencollective.com/gitea), who are helping us deliver
a better piece of software.

With that out of the way, we are excited to show you what's new in Gitea version 1.11.0:

<!--more-->

## Markdown is rendered using [goldmark](https://github.com/yuin/goldmark) ([9533](https://github.com/go-gitea/gitea/pull/9533))  
[blackfriday](https://github.com/russross/blackfriday) has served us well for a long time, but we are excited to move forward with goldmark, which aims to be compliant with [CommonMark](https://commonmark.org/)!

_Thanks to [**@zeripath**](https://github.com/zeripath)_

## New contrib command for mapping environment variables to a configuration ([#9519](https://github.com/go-gitea/gitea/pull/9519))
[Official README](https://github.com/go-gitea/gitea/blob/master/contrib/environment-to-ini/README)

_Thanks to [**@zeripath**](https://github.com/zeripath)_

## Preview the labels that will be added to a repository for a selected label set ([#9251](https://github.com/go-gitea/gitea/pull/9251))

![label set](/demos/9251/1.png)

_Thanks to [**@oscarcosta**](https://github.com/oscarcosta)_

## The Gitea logo is available as an emoji ([#8950](https://github.com/go-gitea/gitea/pull/8950))

![gitea emoji](/demos/8950/1.png)

_Thanks to [**@6543**](https://github.com/6543)_

## Diffs can be expanded ([#8924](https://github.com/go-gitea/gitea/pull/8924))

<video src="/demos/8924/1.mp4" type="video/mp4" controls>Your browser does not support embedded video</video>

_Thanks to [**@blueworrybear**](https://github.com/blueworrybear)_

## Issues can be closed/re-opened from pull requests ([#8866](https://github.com/go-gitea/gitea/pull/8866))

![reopen issue](/demos/8866/1.png)

_Thanks to [**@guillep2k**](https://github.com/guillep2k)_

## Template Repositories ([#8768](https://github.com/go-gitea/gitea/pull/8768))

![template repo](/demos/8768/1.png)

_Thanks to [**@jolheiser**](https://github.com/jolheiser)_

## Add option to select multiple repositories in Issues page ([#8741](https://github.com/go-gitea/gitea/pull/8741))

![multi select](/demos/8741/1.png)

_Thanks to [**@oscarlofwenhamn**](https://github.com/oscarlofwenhamn) and [**@6543**](https://github.com/6543)_

## Teams have an option to grant rights to all organization repositories ([#8688](https://github.com/go-gitea/gitea/pull/8688))

![team rights](/demos/8688/1.png)

_Thanks to [**@ngourdon**](https://github.com/ngourdon) and [**@davidsvantesson**](https://github.com/davidsvantesson)_

## Single sign-on support via SSPI on Windows ([#8463](https://github.com/go-gitea/gitea/pull/8463))

![sspi](/demos/8463/1.png)

_Thanks to [**@quasoft**](https://github.com/quasoft)_

## Pushing to create a repository ([#8419](https://github.com/go-gitea/gitea/pull/8419))

Now instead of having to create a bare repository from the web UI, you can just push to a namespace where you have rights to create a repository.  
This requires some [config setting](https://docs.gitea.io/en-us/config-cheat-sheet/#repository-repository) changes.

_Thanks to [**@jolheiser**](https://github.com/jolheiser)_

## Filtering issues/pull requests by _excluding_ labels using 'Alt + click' ([#8199](https://github.com/go-gitea/gitea/pull/8199))

![exclude labels](/demos/8199/1.gif)

_Thanks to [**@jaqra**](https://github.com/jaqra)_

## Signing merges, CRUD, Wiki and Repository initialisation with a GPG key ([#7631](https://github.com/go-gitea/gitea/pull/7631))

Gitea can now sign web UI actions with a GPG key as "verified".  
This requires some [config setting](https://docs.gitea.io/en-us/config-cheat-sheet/#repository-signing-repository-signing) changes.

_Thanks to [**@zeripath**](https://github.com/zeripath)_

## Graceful Restarting & Socket Activation ([#7274](https://github.com/go-gitea/gitea/pull/7274))

This is a handful of changes related to Gitea being able to gracefully stop/restart.

_Thanks to [**@zeripath**](https://github.com/zeripath)_

## Basic repository LFS management ([#7199](https://github.com/go-gitea/gitea/pull/7199))

![lfs](/demos/7199/1.png)

_Thanks to [**@zeripath**](https://github.com/zeripath)_

## Changelog

## 1.11.0
* BREAKING
  * Fix followers and following tabs in profile (#10202) (#10203)
  * Make CertFile and KeyFile relative to CustomPath (#9868) (#9874)
  * Remove unused endpoints (#9538)
  * Prefix all user-generated IDs in markup (#9477)
  * Enforce Gitea environment for pushes (#8982)
  * Hide some user information via API if user have not enough permissions (#8655)
  * Move startpage/homepage translation to crowdin (#8596)
* SECURITY
  * Never allow an empty password to validate (#9682) (#9683)
  * Prevent redirect to Host (#9678) (#9679)
  * Swagger hide search field (#9554)
  * Add "search" to reserved usernames (#9063)
  * Switch to fomantic-ui (#9374)
  * Only serve attachments when linked to issue/release and if accessible by user (#9340)
* FEATURES
  * Webhooks should only show sender if it makes sense (#9601)
  * Provide Default messages for merges (#9393)
  * Add description to labels on create issue (#9392)
  * Graceful Queues: Issue Indexing and Tasks (#9363)
  * Default NO_REPLY_ADDRESS to DOMAIN (#9325)
  * Allow FCGI over unix sockets (#9298)
  * Graceful: Xorm, RepoIndexer, Cron and Others (#9282)
  * Add API for Reactions (#9220)
  * Graceful: Cancel Process on monitor pages & HammerTime (#9213)
  * Graceful: Allow graceful restart for unix sockets (#9113)
  * Graceful: Allow graceful restart for fcgi (#9112)
  * Sign protected branches (#8993)
  * Add Graceful shutdown for Windows and hooks for shutdown of goroutines (#8964)
  * Add Gitea icon to Emojis (#8950)
  * Expand/Collapse Files and Blob Excerpt while Reviewing/Comparing code (#8924)
  * Allow Custom Reactions (#8886)
  * Close/reopen issues by keywords in titles and comments (#8866)
  * Allow incompletely specified Time Formats (#8816)
  * Prevent upload (overwrite) of lfs locked file (#8769)
  * Template Repositories (#8768)
  * Add /milestones endpoint (#8733)
  * Make repository management section handle lfs locks (#8726)
  * Respect LFS File Lock on UI (#8719)
  * Add team option to grant rights for all organization repositories (#8688)
  * Enabling and disabling the commit button to prevent empty commits (web editor) (#8590)
  * Add setting to disable BASIC authentication (#8586)
  * Expose db.SetMaxOpenConns and allow non MySQL dbs to set conn pool params (#8528)
  * Allow Protected Branches to Whitelist Deploy Keys (#8483)
  * Push to create repo (#8419)
  * Sign merges, CRUD, Wiki and Repository initialisation with gpg key (#7631)
  * Add basic repository lfs management (#7199)
* BUGFIXES
  * Fix code-expansion arc-green theme bug (#10180) (#10185)
  * Prevent double wait-group decrement (#10170) (#10175)
  * Allow emoji on review head comments (#10159) (#10174)
  * Fix issue/pull link (#10158) (#10173)
  * Fix push-create SSH bugs (#10145) (#10151)
  * Prevent DeleteUser API abuse (#10125) (#10128)
  * Fix issues/pulls dashboard paging error (#10114) (#10115)
  * Add button to revert SimpleMDE to plain textarea (#10099) (#10102)
  * Fix branch page pull request title and link error (#10092) (#10097)
  * Fix PR API: Only try to get HeadBranch if HeadRepo exist (#10029) (#10088)
  * Update topics repo count when deleting repository (#10051) (#10081)
  * Show pull icon on pull requests (#10061) (#10062)
  * Fix milestone API state parameter unhandled (#10049) (#10052)
  * Move to using a temporary repo for pushing new PRs (#10009) (#10042)
  * Fix wiki raw view on sub path (#10002) (#10040)
  * Ensure that feeds are appropriately restricted (#10018) (#10019)
  * Sanitize credentials in mirror form (#9975) (#9991)
  * Close related pull requests when deleting head repository or head branch (#9927) (#9974)
  * Switch to use -f instead of -F for sendmail (#9961) (#9970)
  * Fix file rename/copy not supported by indexer (#9965) (#9967)
  * Fix repo indexer not updating upon push (#9957) (#9963)
  * Don't convert ellipsis in markdown (#9905) (#9937)
  * Fixed repo link in generated comment for cross repository dependency (#9863) (#9935)
  * Check if diff actually contains sections when rendering (#9926) (#9933)
  * Fix wrong hint when status checking is running on pull request view (#9886) (#9928)
  * Fix RocketChat (#9908) (#9921)
  * Do not try to recreate ldap user if they are already created (#9900) (#9919)
  * Create terminated channel in queue_redis (#9910) (#9911)
  * Prevent empty LDAP search result from deactivating all users (#9879) (#9896)
  * Fix wrong permissions check when issues/prs shared operations (#9885) (#9889)
  * Check user != nil before checking values (#9881) (#9883)
  * Allow hyphen in language name (#9873) (#9880)
  * Ensure that 2fa is checked on reset-password (#9857) (#9876)
  * Fix issues/pulls dependencies problems (#9842) (#9864)
  * Fix markdown anchor links (#9673) (#9840)
  * Allow assignee on Pull Creation when Issue Unit is deactivated (#9836) (#9837)
  * Fix download file wrong content-type (#9825) (#9834)
  * Fix wrong poster identity on a migrated pull request when submit review (#9827) (#9830)
  * Fix database dump when log directory is missing (#9818) (#9819)
  * Fix compare (#9808) (#9814)
  * Fix push-to-create (#9772) (#9797)
  * Fix missing msteam webhook on organization (#9781) (#9794)
  * Fix missing unlock in uniquequeue (#9790) (#9791)
  * Fix add team on collaborator page when same name as organization (#9778)
  * DeleteRepoFile incorrectly handles Delete to new branch (#9769) (#9775)
  * Fix milestones page (#9771)
  * Fix SimpleMDE quote reply (#9757) (#9768)
  * Fix missing updated time on migrated issues and comments (#9744) (#9764)
  * Move Errored PRs out of StatusChecking (#9675) (#9726)
  * Make hook status printing configurable with delay (#9641) (#9725)
  * ​Fix /repos​/issues​/search (#9698) (#9724)
  * Silence fomantic error regarding tabs (#9713) (#9718)
  * Remove unused lock (#9709) (#9710)
  * Remove q.lock.Unlock() in setInternal to prevent panic (#9705) (#9706)
  * Load milestone in API PR list (#9671) (#9700)
  * Don't attempt to close issue if already closed (#9696) (#9699)
  * Remove google font call (#9668) (#9681)
  * Eliminate horizontal scroll caused by footer (#9674)
  * Fix nil reference in repo generation (#9660) (#9666)
  * Add HTML URL to API Issues (#9654) (#9661)
  * Add PR review webhook to Telegram (#9653) (#9655)
  * Use filepath.IsAbs instead of path.IsAbs (#9651) (#9652)
  * Disable remove button on repository teams when have access to all (#9640)
  * Clean up old references on branch delete (#9614)
  * Hide public repos owned by private orgs (#9609)
  * Fix access issues on milestone and issue overview pages. (#9603)
  * Fix error logged when repos qs is empty (#9591)
  * Dont trigger notification twice on issue assignee change (#9582)
  * Fix mirror pushed commit actions (#9572)
  * Allow only specific columns to be updated on issue via API (#9189) (#9539)
  * Fix default avatar for ghost user (#9536)
  * Fix download of release attachments with same name (#9529)
  * Resolve deprecated INI conversion (#9525)
  * Ignore empty avatars during database migration (#9520)
  * Fix deleted branch isn't removed when push the branch again (#9516)
  * Fix repository issues pagination bug when there are more than one label filter (#9512)
  * Fix SetExpr failed (#9506)
  * Remove obsolete file private/push_update.go (#9503)
  * When recreating hooks, delete them first so they are recreated with the umask (#9502)
  * Properly enforce gitea environment for pushes (#9501)
  * Fix datarace on repo indexer queue (#9490)
  * Add call to load repo prior to redirect in add/remove dependency code (#9484)
  * Wrap the code indexer (#9476)
  * Use Req.URL.RequestURI() to cope with FCGI urls (#9473)
  * Set default ssh.minimum_key_sizes (#9466)
  * Fixed issue with paging in /repos/{owner}/{repo}/git/trees/{sha} api (#9459)
  * Fix wrong notification on merge (#9450)
  * Issue with Migration rule v111 (#9449)
  * Trigger webhook when deleting a branch after merging a PR (#9424)
  * Add migration to sanitize repository original_url (#9423)
  * Use OriginalURL instead of CloneAddr in migration logging (#9418)
  * Push update after branch is restored (#9416)
  * Fix wrong migration (#9381)
  * Fix show repositories filter (#9234) (#9379)
  * Fix Slack webhook payload title generation to work with Mattermost (#9378)
  * Fix double webhook for new PR (#9375)
  * AuthorizedKeysCommand should not query db directly (#9371)
  * Fix missed change to GetManager() (#9361)
  * Fix cache problem on dashboard (#9358)
  * RepoIndexer: DefaultBranch needs to be prefixed by BranchPrefix (#9356)
  * Fix protected branch using IssueID (#9348)
  * Fix nondeterministic behavior (#9341)
  * Fix PR/issue redirects when having external tracker (#9339)
  * Remove release attachments which repository has been deleted (#9334)
  * Fix issue indexer not triggered when migrating a repository (#9332)
  * Add SyncTags to uploader interface (#9326)
  * Fix bug that release attachment files not deleted when deleting repository (#9322)
  * Only sync tags after all migration release batches are completed (#9319)
  * File Edit: Author/Committer interchanged (#9297)
  * prebuild CSS/JS before xgo release binaries (#9293)
  * Log: Ensure FLAGS=none shows no flags (#9287)
  * Make Diff Detail on Pull Request Changed File UI always on Top (#9280)
  * Switch CSS minifier to cssnano (#9260)
  * Fix latest docker image haven't include static files. (#9252)
  * Don't link wiki revision to commit (#9244)
  * Change review content column to type text in db (#9229)
  * Fixed topic regex pattern and added search by topic links after save (#9219)
  * Add language to user API responce (#9215)
  * Correct tooltip message blocked by dependencies (#9211)
  * Add SimpleMDE and Fix Image Paste for Issue/Comment Editor (#9197)
  * Fix panic when diff (#9187)
  * Fix #9151 - smtp logger configuration sendTos should be an array (#9154)
  * Fix max length check and limit in multiple repo forms (#9148)
  * Always Show Password Field on Link Account Sign-in Page (#9147)
  * Properly fix displaying virtual session provider in admin panel (#9137)
  * Fix race condition on indexer (#9136)
  * Fix team links in HTML rendering (#9127)
  * Fix race condition in ReplaceSanitizer (#9123)
  * Fix what information is shown about user in API (#9115)
  * Fix nil context user for template repositories (#9099)
  * Hide given credentials for migrated repos. (#9097)
  * Fix reCAPTCHA API URL (#9083)
  * Fix password checks on admin create/edit user (#9076)
  * Update golang.org/x/crypto vendor to use acme v2 (#9056)
  * Ensure Written is set in GZIP ProxyResponseWriter (#9018)
  * Fix wrong system notice when repository is empty (#9010)
  * Fix broken link to branch from issue list (#9003)
  * Fix bug when pack js (#8992)
  * New review approvals shouldn't require a message (#8991)
  * Shadow password correctly for session config (#8984)
  * Don't send notification on pending reviews (#8943)
  * Fix Notify Create Ref Error on tag creation (#8936)
  * Convert EOL to UNIX-style to render MD properly (#8925)
  * Migrate temp_repo.go to use git.NewCommand  (#8918)
  * Fix issue with user.fullname (#8902)
  * Add Close() method to gogitRepository (#8901)
  * Enable punctuations ending mentions (#8889)
  * Fix password complexity check on registration (#8887)
  * Fix require external registration password (#8885)
  * Fix edit content button on migrated issue content (#8877)
  * Fix permission checks for close/reopen from commit (#8875)
  * Fix API Bug (fail on empty assignees) (#8873)
  * Stop using git count-objects and use raw directory size for repository (#8848)
  * Fix count for commit graph last page (#8843)
  * Fix to close opened io resources as soon as not needed (#8839)
  * Improve notification (#8835)
  * Fix new user form for non-local users (#8826)
  * Fix: remove duplicated signed commit icons (#8820)
  * Fix (open/closed) issue count when label excluded (#8815)
  * Fix SSH2 conditional in key parsing code (#8806)
  * Fix 500 when edit hook (#8782)
  * On windows set core.longpaths true (#8776)
  * Fix commit expand button to not go to commit link (#8745)
  * Avoid re-issuing redundant cross-references. (#8734)
  * Fix milestone close timestamp function (#8728)
  * Move webhook codes from service to webhook notification (#8712)
  * Show zero lines on the line counter if the file empty (#8700)
  * Fix deadline on update issue or PR via API (#8696)
  * make call createMilestoneComment on newIssue func (#8678)
  * Send tag create and push webhook when release created on UI (#8671)
  * Prevent chrome download page as html with alt + click (#8669)
  * Fix 500 when getting user as unauthenticated user (#8653)
  * Graceful fixes (#8645)
  * Add SubURL to redirect path (#8632) (#8634)
  * Fix extra columns from `label` table (#8633)
  * Add SubURL to redirect path for transferred/renamed repos (#8632)
  * Fix bug when migrate from API (#8631)
  * Allow to merge if file path contains " or \ (#8629)
  * Prevent removal of non-empty emoji panel following selection of duplicate (#8609)
  * Ensure default gpg settings not nil and found commits have reference to repo (#8604)
  * Set webhook Content-Type for application/x-www-form-urlencoded (#8599)
  * Fix #8582 by handling empty repos (#8587)
  * Fix of the diff statistics view on pull request's (#8581)
  * Fix bug on pull requests when transfer head repository (#8564)
  * Fix template error on account page (#8562)
  * Allow externalID to be UUID (#8551)
  * Fix ignored error on editorconfig api (#8550)
  * Fix user avatar name (#8547)
  * Ensure that GitRepo is set on Empty repositories (#8539)
  * Add missed close in ServeBlobLFS (#8527)
  * Fix migrate mirror 500 bug (#8526)
  * Fix password complexity regex for special characters (on master) (#8525)
* ENHANCEMENTS
  * Explicitly refer to PR in squash-merge commit message in case of external tracker (#9844) (#9855)
  * Add a /user/login landing page option (#9622)
  * Some more e-mail notification fixes (#9596)
  * Add branch protection option to block merge on requested changes. (#9592)
  * Add footer extra links template (#9576)
  * Fix for a wrong URL in activity page of repository.  (#9571)
  * Update default issue template (#9568)
  * Change markdown rendering from blackfriday to goldmark  (#9533)
  * Extend file create api with dates (#9464)
  * Add ActionCommentPull action (#9456)
  * Response for context on retry database connection (#9444)
  * Refactor webhooks to reduce code duplication (#9422)
  * update couchbase deps for new license (#9419)
  * Add .ignore file for search tools (#9417)
  * Remove unsued struct (#9405)
  * Hide not allowed Reactions (#9387)
  * Remove text from action-only webhooks (#9377)
  * Move PushToBaseRepo from models to services/pull (#9352)
  * Site admin could view org's members (#9346)
  * Sleep longer if request speed is over github limitation (#9335)
  * Refactor comment (#9330)
  * Refactor code indexer (#9313)
  * Remove SavePatch and generate patches on the fly (#9302)
  * Move some pull request functions from models to services (#9266)
  * Update JS dependencies (#9255)
  * Show label list on label set (#9251)
  * Redirect issue if repo has configured external tracker. (#9247)
  * Allow kbd tags (#9245)
  * Remove unused comment actions (#9222)
  * Fixed errors logging in dump.go (#9218)
  * Expose release counter to repo API response (#9214)
  * Make consistent links to repository in the Slack/Mattermost notificiations (#9205)
  * Expose pull request counter to repo API response (#9202)
  * Extend TrackedTimes API (#9200)
  * Extend StopWatch API (#9196)
  * Move code indexer related code to a new package (#9191)
  * Docker: ask s6 to stop all service when gitea stop (#9171)
  * Variable expansion in repository templates (#9163)
  * Add avatar and issue labels to template repositories (#9149)
  * Show single review comments in the PR conversation tab (#9143)
  * Extract createComment (#9125)
  * Move PushUpdateOptions from models to repofiles (#9124)
  * Alternate syntax for cross references (#9116)
  * Add USE_SERVICE_WORKER setting (#9110)
  * Only show part of members on orgnization dashboard and add paging for orgnization members page (#9092)
  * Explore page: Add topic param to pagination (#9077) (#9078)
  * Markdown: Sanitizier Configuration (#9075)
  * Add password requirement info on error (#9074)
  * Allow authors to use act keywords in PR content (#9059)
  * Move modules/gzip to gitea.com/macaron/gzip (#9058)
  * Branch protection: Possibility to not use whitelist but allow anyone with write access (#9055)
  * Context menus for comments, add quote reply (#9043)
  * Update branch API endpoint to show effective branch protection. (#9031)
  * Move git graph from models to modules/graph (#9027)
  * Move merge actions to notification (#9024)
  * Move mirror sync actions to notification (#9022)
  * Add retry for migration http/https requests (#9019)
  * Rewrite delivery of issue and comment mails (#9009)
  * Add review comments to mail notifications (#8996)
  * Refactor pull request review (#8954)
  * Githook highlighter (#8932)
  * Add git hooks and webhooks to template repositories; move to services (#8926)
  * Only view branch or tag if it match refType requested. (#8899)
  * Drop Admin attribute based on LDAP when login (continue #1743) (#8849)
  * Add additional periods to activity page (#8829)
  * Update go-org to optimize code (#8824)
  * Move some actions to notification/action (#8779)
  * Webhook support custom proxy (#8760)
  * Fix API deadline removal (#8759)
  * Mark review comment as invalidated when file is deleted (#8751)
  * Move pull list code to a separate file (#8748)
  * Move webhook to a standalone package under modules (#8747)
  * Multi repo select on issue page (#8741)
  * apply exclude label on milestone issue list (#8739)
  * Move issue notifications and assignee man (#8713)
  * Move issue change content from models to service (#8711)
  * Move issue change status from models to service (#8691)
  * Move more issue assignee code from models to issue service (#8690)
  * Create PR on Current Repository by Default (#8670)
  * Improve Open Graph Protocol (#8637)
  * Batch hook pre- and post-receive calls (#8602)
  * Improve webhooks (#8583)
  * Move transfer repository and rename repository on a service package and start action notification (#8573)
  * Implement/Fix PR review webhooks (#8570)
  * Rewrite markdown rendering to blackfriday v2 and rewrite orgmode rendering to go-org (#8560)
  * Move some repositories' operations to a standalone service package (#8557)
  * Allow more than 255 characters for tokens in external_login_user table (#8554)
  * Move issue label operations to issue service package (#8553)
  * Adjust error reporting from merge failures and use LC_ALL=C for git (#8548)
  * Mail assignee when issue/pull request is assigned (#8546)
  * Allow committing / adding empty files using the web ui (#8420) (#8532)
  * Move sync mirror actions to mirror service package (#8518)
  * Remove arrows on numeric inputs (#8516)
  * Support inline rendering of CUSTOM_URL_SCHEMES (#8496)
  * Recalculate repository access only for specific user (#8481)
  * Add download button for rull request diff- and patch-file (#8470)
  * Add single sign-on support via SSPI on Windows (#8463)
  * Move change issue title from models to issue service package (#8456)
  * Add included tag on  branch view (#8449)
  * Make static resouces web browser cache time customized on app.ini (#8442)
  * Enable Uploading/Removing Attachments When Editing an Issue/Comment (#8426)
  * Add pagination to commit graph page (#8360)
  * Use templates for issue e-mail subject and body (#8329)
  * Move clearlabels from models to issue service (#8326)
  * Move AddTestPullRequestTask to pull service package from models (#8324)
  * Team permission to create repository in organization (#8312)
  * Allows external rendering of other filetypes (#8300)
  * Add 'Alt + click' feature to exclude labels (#8199)
  * Configurable close and reopen keywords for PRs (#8120)
  * Configurable URL for static resources (#7911)
  * Unifies commit list in repository commit table and wiki revision page (#7907)
  * Allow cross-repository dependencies on issues (#7901)
  * Auto-subscribe user to repository when they commit/tag to it (#7657)
  * Restore Graceful Restarting & Socket Activation (#7274)
  * wiki - add 'write' 'preview' buttons to wiki edit like in issues (#7241)
  * Change target branch for pull request (#6488)
  * Display PR commits and diffs using base repo rather than forked (#3648)
* TESTING
  * Add debug option to serv to help debug problems (#9492)
  * Fix the intermittent TestGPGGit failures (#9360)
  * Testing: Update postgres sequences (#9304)
  * Missed defer prepareTestEnv (#9285)
  * Fix "data race" in testlogger (#9159)
  * Yet another attempt to fix the intermittent failure of gpg git test (#9146)
  * integrations: Fix Dropped Test Errors (#9040)
  * services/mirror: fix dropped test errors (#9007)
  * Fix intermittent GPG Git test failure (#8968)
  * Update Github Migration Tests (#8893) (#8938)
  * Update heatmap fixtures to restore tests (#8615)
* TRANSLATION
  * Fix Korean locales (#9761) (#9780)
  * Fix placeholders in the error message (#9060)
  * Fix spelling of admin.users.max_repo_creation (#8934)
  * Improve german translation of homepage (#8549)
* BUILD
  * Fix webpack polyfills (#9735) (#9738)
  * Update gitea.com/macaron to 1.4.0 (#9608)
  * Upgrade lato fonts to v16. (#9498)
  * Update alpine to 3.11 (#9440)
  * Upgrade blevesearch (#9177)
  * Remove built js/css files from git (#9114)
  * Move semantic.dropdown.custom.js to webpack (#9064)
  * Check compiled files during build (#9042)
  * Enable lazy-loading of gitgraph.js (#9036)
  * Pack web_src/js/draw.js to public/js/index.js (#8975)
  * Modernize js and use babel (#8973)
  * Move index.js to web_src and use webpack to pack them (#8598)
  * Restrict modules/graceful to non-windows build and shim IsChild (#8537)
  * Upgrade gopkg.in/editorconfig/editorconfig-core-go.v1 (#8501)
* MISC
  * Backport Locales (2020-01-14) (#9773)
  * Add translatable Powered by Gitea text in footer (#9600)
  * Add contrib/environment-to-ini (#9519)
  * Remove unnecessary loading of settings in update hook (#9496)
  * Update gitignore list (#9437)
  * Update license list (#9436)
  * Fix background reactions in the arc-green theme (#9421)
  * Update and fix chardet import (#9351)
  * Ensure LF on checkouts and in editors (#9259)
  * Fixed topics margin (#9248)
  * Add comment to exported function WindowsServiceName (make revive) (#9241)
  * Remove empty lines on issues/pulls page (#9232)
  * Fix Add Comment Button's "+" Position (#9140)
  * Add first issue comment hashtag (#9052)
  * Change some label colors (#9051)
  * Fix double scroll in branch dropdown (#9048)
  * Add comment highlight when target from url (#9047)
  * Update display of reactions to issues and comments (#9038)
  * Button tooltip formatting under Branches (#9034)
  * Allow setting default branch via API (#9030)
  * Update dashboard context for PR reviews (#8995)
  * Show repository size in repo home page and settings (#8940)
  * Allow to add and remove all repositories to/from team. (#8867)
  * Show due date in dashboard issues list (#8860)
  * Theme arc-green: reverse heatmap colors (#8840)
  * Project files table style update (#8757)
  * gitignore debugging file from vscode (#8740)
  * Add API for Issue set Subscription (#8729)
  * Make 100% width search bar (#8710)
  * Update color theme for heatmap (#8709)
  * Add margin to title_wip_desc (#8705)
  * Improve visibility of "Pending" indicator (#8685)
  * Improve accessibility of dropdown menus (#8638)
  * Make /users/{username}/repos list private repos the current user has access to (#8621)
  * Prevent .code-view from overriding font on icon fonts (#8614)
  * Add id references on all issue events to allow internal linking (#8608)
  * Upgrade xorm to v0.8.0 (#8536)
  * Upgrade gopkg.in/ini.v1 (#8500)
  * Update CodeMirror to version 5.49.0 (#8381)
  * Wiki editor: enable side-by-side button (#7242)

To see all user-facing changes that went into the release, check out our
[full changelog](https://github.com/go-gitea/gitea/blob/master/CHANGELOG.md#1110---2020-02-10).

## Help us out!

Gitea is focused on community input and contributions. To keep a project like
Gitea going we need people. **_LOTS_** of people. You can help in the
following areas:

### Programming

If you know Go or HTML/CSS/JavaScript, you may be interested in working on the
code. Working on OSS may seem scary, but the best way is to try! Read the
[Gitea contribution guide](https://github.com/go-gitea/gitea/blob/master/CONTRIBUTING.md),
and then [find an itch to scratch](https://github.com/go-gitea/gitea/issues),
or scratch your own!

### Translating

Want to translate Gitea in your own language? Awesome! Join the Gitea project
on [Crowdin](https://crowdin.com/project/gitea). As soon as your translation is
approved, it will be pushed to the Gitea project to be used in future releases!

### Documentation

Documentation is important, but also time consuming. If you enjoy writing and
have a pretty good knowledge of English, or you would like to translate the
English version to your native language, you're very welcome to do so. Find our
documentation on the main git repository
[here](https://github.com/go-gitea/gitea/tree/master/docs). Just fork, update
the documentation and then create a pull request!

### Support

Do you like people? Can you give calm and thought-out responses to users needing
help? Then you can spend some time providing support to those who need it. Most
answers can really be found in the documentation, so make sure to take some time
to read it. Then, either join our chat or forums (linked below), or simply
help us sort out issues and answer questions on the
[Gitea repository](https://github.com/go-gitea/gitea/issues).

### Donations

If you, or your company, want to help us out sustain our financial expenses, you
can do so by donating on [Open Collective](https://opencollective.com/gitea#).

<a href="https://opencollective.com/gitea#backers" target="_blank"><img src="https://opencollective.com/gitea/backers.svg?width=890"></a>

<a href="https://opencollective.com/gitea/sponsor/0/website" target="_blank"><img src="https://opencollective.com/gitea/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/gitea/sponsor/1/website" target="_blank"><img src="https://opencollective.com/gitea/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/gitea/sponsor/2/website" target="_blank"><img src="https://opencollective.com/gitea/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/gitea/sponsor/3/website" target="_blank"><img src="https://opencollective.com/gitea/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/gitea/sponsor/4/website" target="_blank"><img src="https://opencollective.com/gitea/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/gitea/sponsor/5/website" target="_blank"><img src="https://opencollective.com/gitea/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/gitea/sponsor/6/website" target="_blank"><img src="https://opencollective.com/gitea/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/gitea/sponsor/7/website" target="_blank"><img src="https://opencollective.com/gitea/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/gitea/sponsor/8/website" target="_blank"><img src="https://opencollective.com/gitea/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/gitea/sponsor/9/website" target="_blank"><img src="https://opencollective.com/gitea/sponsor/9/avatar.svg"></a>

### … or reporting bugs

If you lack the time or knowledge to do any of the above, just using Gitea and sharing the word is enough to make us happy! One thing you can always do is to report any bugs you find on the [Gitea issue tracker](https://github.com/go-gitea/gitea/issues).

Before opening an issue, read the [contribution guidelines about reporting bugs](https://github.com/go-gitea/gitea/blob/master/CONTRIBUTING.md#bug-reports). After opening an issue, try to stick around a while to answer any questions we might have. Replies greatly help us find the root cause of an issue.

## Thanks

This release would not have been possible without the pull requests from the following people:

* [@6543](https://github.com/6543)
* [@7FM](https://github.com/7FM)
* [@8ctopus](https://github.com/8ctopus)
* [@Cherrg](https://github.com/Cherrg)
* [@Flutterlice](https://github.com/Flutterlice)
* [@FullofQuarks](https://github.com/FullofQuarks)
* [@HarvsG](https://github.com/HarvsG)
* [@Ilya33](https://github.com/Ilya33)
* [@Jookia](https://github.com/Jookia)
* [@Konctantin](https://github.com/Konctantin)
* [@LukBukkit](https://github.com/LukBukkit)
* [@MarcelHillmann](https://github.com/MarcelHillmann)
* [@MayMeow](https://github.com/MayMeow)
* [@Rychu-Pawel](https://github.com/Rychu-Pawel)
* [@alrs](https://github.com/alrs)
* [@anthonyvdotbe](https://github.com/anthonyvdotbe)
* [@aqtrans](https://github.com/aqtrans)
* [@axifive](https://github.com/axifive)
* [@bagasme](https://github.com/bagasme)
* [@bhalbright](https://github.com/bhalbright)
* [@bkmgit](https://github.com/bkmgit)
* [@blueworrybear](https://github.com/blueworrybear)
* [@carnott-snap](https://github.com/carnott-snap)
* [@cdlm](https://github.com/cdlm)
* [@chrissexton](https://github.com/chrissexton)
* [@cipherboy](https://github.com/cipherboy)
* [@connyduck](https://github.com/connyduck)
* [@cornelk](https://github.com/cornelk)
* [@das7pad](https://github.com/das7pad)
* [@davidsvantesson](https://github.com/davidsvantesson)
* [@emonty](https://github.com/emonty)
* [@gary-kim](https://github.com/gary-kim)
* [@gnat](https://github.com/gnat)
* [@guillep2k](https://github.com/guillep2k)
* [@iyzana](https://github.com/iyzana)
* [@jaqra](https://github.com/jaqra)
* [@jolheiser](https://github.com/jolheiser)
* [@jonasfranz](https://github.com/jonasfranz)
* [@keks24](https://github.com/keks24)
* [@kolaente](https://github.com/kolaente)
* [@krrutkow](https://github.com/krrutkow)
* [@kzmi](https://github.com/kzmi)
* [@lafriks](https://github.com/lafriks)
* [@lunny](https://github.com/lunny)
* [@masudur-rahman](https://github.com/masudur-rahman)
* [@mohe2015](https://github.com/mohe2015)
* [@mrsdizzie](https://github.com/mrsdizzie)
* [@mzch](https://github.com/mzch)
* [@oscarcosta](https://github.com/oscarcosta)
* [@oscarlofwenhamn](https://github.com/oscarlofwenhamn)
* [@palytoxin](https://github.com/palytoxin)
* [@programkode](https://github.com/programkode)
* [@quasoft](https://github.com/quasoft)
* [@saitho](https://github.com/saitho)
* [@sapk](https://github.com/sapk)
* [@sd1998](https://github.com/sd1998)
* [@silverwind](https://github.com/silverwind)
* [@techknowlogick](https://github.com/techknowlogick)
* [@timonegk](https://github.com/timonegk)
* [@typeless](https://github.com/typeless)
* [@vedranMv](https://github.com/vedranMv)
* [@vizv](https://github.com/vizv)
* [@vszakats](https://github.com/vszakats)
* [@zeripath](https://github.com/zeripath)

[PRs](https://github.com/go-gitea/gitea/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+milestone%3A1.11.0)
and [issues](https://github.com/go-gitea/gitea/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+milestone%3A1.11.0)
merged in 1.11.0.

# Get in touch

Need help with anything?
You can come on our [Discord server,](https://discord.gg/gitea) or if you're
more old-fashioned you can also use our [forums](https://discourse.gitea.io/).
