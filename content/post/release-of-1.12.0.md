---
date: 2020-06-18T11:00:00+00:00
authors: "jolheiser"
title: "Gitea 1.12.0 and 1.12.1 are released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.12.0, and subsequently 1.12.1 with some hotfixes.

In this release we merged a whopping [673](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.12.0+is%3Amerged) pull requests! That's the highest number *ever* in a release!  
We cannot express enough gratitude to those who support us, big or small.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.12.1/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

:exclamation: One of the features added in 1.12 is [language stats](#language-statistics-bar-for-repositories-8037-https-github-com-go-gitea-gitea-issues-8037).  
Users upgrading should note that the initial calculation of repositories may take some time, so plan accordingly.

:exclamation: Drone users, due to pagination updates, please use, at minimum, version 1.8.1 of Drone.

<!-- Security -->
We would like to give a special thanks to the Competence Center for IT security, FZI Research Center for Information Technology
for reporting the notice about Git Hooks.  
Thanks to [@jolheiser](https://github.com/jolheiser) for fixing in [#11030](https://github.com/go-gitea/gitea/pull/11030)


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

With that out of the way, we are excited to show you what's new in Gitea version 1.12:

<!--more-->

## Code editor has been switched to Monaco ([#11366](https://github.com/go-gitea/gitea/issues/11366))

![monaco](/demos/11366/1.png)

_Thanks to [**@silverwind**](https://github.com/silverwind)_

## Prevent merge of outdated PRs on protected branches ([#11012](https://github.com/go-gitea/gitea/issues/11012))

![protected](/demos/11012/1.png)

_Thanks to [**@6543**](https://github.com/6543)_

## Organization wide labels ([#10814](https://github.com/go-gitea/gitea/issues/10814))

![labels](/demos/10814/1.png)

_Thanks to [**@mrsdizzie**](https://github.com/mrsdizzie)_

## Request reviews in a pull request ([#10756](https://github.com/go-gitea/gitea/issues/10756))

![request_review](/demos/10756/1.png)

_Thanks to [**@a1012112796**](https://github.com/a1012112796)_

## System-wide webhooks ([#10546](https://github.com/go-gitea/gitea/issues/10546))

![webhooks](/demos/10546/1.png)

_Thanks to [**@jamesorlakin**](https://github.com/jamesorlakin)_

## Add detected file language to code search ([#10256](https://github.com/go-gitea/gitea/issues/10256))

![search](/demos/10256/1.png)

_Thanks to [**@lafriks**](https://github.com/lafriks)_

## Feishu webhook support ([#10229](https://github.com/go-gitea/gitea/issues/10229))

Gitea now supports sending webhooks to [Feishu](https://www.feishu.cn/).

_Thanks to [**@lunny**](https://github.com/lunny)_

## `embedded` command to extract static resources ([#9982](https://github.com/go-gitea/gitea/issues/9982))

A new CLI command to extract static assets from the Gitea binary.

_Thanks to [**@guillep2k**](https://github.com/guillep2k)_

## Issue/PR Context Popups ([#9822](https://github.com/go-gitea/gitea/issues/9822))

![context](/demos/9822/1.png)

_Thanks to [**@jolheiser**](https://github.com/jolheiser)_

## "Update Branch" buttons on Pull Requests ([#9784](https://github.com/go-gitea/gitea/issues/9784))

![update](/demos/9784/1.png)

_Thanks to [**@6543**](https://github.com/6543)_

## Require signed commits for protected branches ([#9708](https://github.com/go-gitea/gitea/issues/9708))

![signed](/demos/9708/1.png)

_Thanks to [**@zeripath**](https://github.com/zeripath)_

## Granular webhook events ([#9626](https://github.com/go-gitea/gitea/issues/9626))

![events](/demos/9626/1.png)

_Thanks to [**@jolheiser**](https://github.com/jolheiser)_

## Top author stats on activity page ([#9615](https://github.com/go-gitea/gitea/issues/9615))

![stats](/demos/9615/1.png)

_Thanks to [**@lafriks**](https://github.com/lafriks)_

## Repo admin can merge PR regardless of review status ([#9611](https://github.com/go-gitea/gitea/issues/9611))

![merge](/demos/9611/1.png)

_Thanks to [**@davidsvantesson**](https://github.com/davidsvantesson)_

## Mark PR reviews as stale at push and dismiss stale approvals ([#9532](https://github.com/go-gitea/gitea/issues/9532))

![stale](/demos/9532/1.png)

_Thanks to [**@davidsvantesson**](https://github.com/davidsvantesson)_

## New doctor command ([#9095](https://github.com/go-gitea/gitea/issues/9095))

![doctor](/demos/9095/1.png)

_Thanks to [**@lunny**](https://github.com/lunny)_

## Support for migrating from Gitlab ([#9084](https://github.com/go-gitea/gitea/issues/9084))

Gitea now supports migrating from [GitLab](https://gitlab.com)!

_Thanks to [**@aqtrans**](https://github.com/aqtrans)_

## Language statistics bar for repositories ([#8037](https://github.com/go-gitea/gitea/issues/8037))

![stats](/demos/8037/1.png)

_Thanks to [**@lafriks**](https://github.com/lafriks)_

## Restricted users ([#6274](https://github.com/go-gitea/gitea/issues/6274))

Special users with limited access to repositories. Check out the PR for more info!

_Thanks to [**@mnsh**](https://github.com/mnsh)_

## Changelog

## [1.12.1](https://github.com/go-gitea/gitea/releases/tag/v1.12.1) - 2020-06-21

* BUGFIXES
  * Handle multiple merges in gitgraph.js (#11996) (#12000)
  * Add serviceworker.js to KnownPublicEntries (#11992) (#11994)
  * For language detection do not try to analyze big files by content (#11971) (#11975)
* ENHANCEMENTS
  * Fix scrollable header on dropdowns (#11893) (#11965)

## [1.12.0](https://github.com/go-gitea/gitea/releases/tag/v1.12.0) - 2020-06-18

* BREAKING
  * When using API CreateRelease set created_unix to the tag commit time ([#11218](https://github.com/go-gitea/gitea/pull/11218))
  * Enable ENABLE_HARD_LINE_BREAK by default for rendering markdown ([#11162](https://github.com/go-gitea/gitea/pull/11162))
  * Fix sanitizer config - multiple rules ([#11133](https://github.com/go-gitea/gitea/pull/11133))
  * Remove check on username when using AccessToken authentication for the API ([#11015](https://github.com/go-gitea/gitea/pull/11015))
  * Return 404 from Contents API when items don't exist ([#10323](https://github.com/go-gitea/gitea/pull/10323))
  * Notification API should always return a JSON object with the current count of notifications ([#10059](https://github.com/go-gitea/gitea/pull/10059))
  * Remove migration support from versions earlier than 1.6.0 ([#10026](https://github.com/go-gitea/gitea/pull/10026))
* SECURITY
  * Use -1 to disable key algorithm type in ssh.minimum_key_sizes ([#11635](https://github.com/go-gitea/gitea/pull/11635)) ([#11662](https://github.com/go-gitea/gitea/pull/11662))
* FEATURES
  * Improve config logging when WrappedQueue times out (#11174)
  * Add branch delete to API (#11112)
  * Use markdown frontmatter to provide Table of contents, language and frontmatter rendering (#11047)
  * Add a way to mark Conversation (code comment) resolved (#11037)
  * Handle yaml frontmatter in markdown (#11016)
  * Cache PullRequest Divergence (#10914)
  * Make `gitea admin auth list` formatting configurable (#10844)
  * Add Matrix webhook (#10831)
  * Add Organization Wide Labels (#10814)
  * Allow to set protected file patterns for files that can not be changed under no conditions (#10806)
  * Option to set default branch at repository creation (#10803)
  * Add request review from specific reviewers feature in pull request (#10756)
  * Add NextCloud oauth (#10562)
  * System-wide webhooks (#10546)
  * Relax sanitization as per https://github.com/jch/html-pipeline (#10527)
  * Use media links for img in post-process (#10515)
  * Add API endpoints to manage OAuth2 Application (list/create/delete) (#10437)
  * Render READMEs in docs/ .gitea or .github from root (#10361)
  * Add feishu webhook support (#10229)
  * Cache last commit to accelerate the repository directory page visit (#10069)
  * Implement basic app.ini and path checks to doctor cmd (#10064)
  * Make WorkerPools and Queues flushable (#10001)
  * Implement "embedded" command to extract static resources (#9982)
  * Add API endpoint for repo transfer (#9947)
  * Make archive prefixing configurable with a global setting (#9943)
  * Add Unique Queue infrastructure and move TestPullRequests to this (#9856)
  * Issue/PR Context Popups (#9822)
  * Add "Update Branch" button to Pull Requests (#9784)
  * Add require signed commit for protected branch (#9708)
  * Mark PR reviews as stale at push and allow to dismiss stale approvals (#9532)
  * Add API notification endpoints (#9488)
  * Issue search support elasticsearch (#9428)
  * Add API branch protection endpoint (#9311)
  * Add a new command doctor to check if some wrong configurations on gitea instance (#9095)
  * Add support for migrating from Gitlab (#9084)
  * Add support for database schema in PostgreSQL (#8819)
  * Add setting to set default and global disabled repository units. (#8788)
  * Language statistics bar for repositories (#8037)
  * Restricted users (#6274)
* BUGFIXES
  * Fix commenting on non-utf8 encoded files (#11916) (#11950)
  * Use google/uuid to instead satori/go.uuid (#11943) (#11946)
  * Align show/hide outdated button on code review block (#11932) (#11944)
  * Update to go-git v5.1.0 (#11936) (#11941)
  * Use ID or Where to instead directly use Get when load object from database (#11925) (#11934)
  * Update CommitsAhead CommitsBehind on Pull BaseBranch Change too (#11912) (#11915)
  * Invalidate comments when file is shortened (#11882) (#11884)
  * Rework api/user/repos for pagination (#11827) (#11877)
  * Handle more pathological branch and tag names (#11843) (#11863)
  * Add doctor check to set IsArchived false if it is null (partial #11853) (#11859)
  * Prevent panic on empty HOST for mysql (#11850) (#11856)
  * Use DEFAULT_PAGING_NUM instead of MAX_RESPONSE_ITEMS in ListOptions (#11831) (#11836)
  * Fix reply octicon (#11821) (#11822)
  * Honor DEFAULT_PAGING_NUM for API (#11805) (#11813)
  * Ensure rejected push to refs/pull/index/head fails nicely (#11724) (#11809)
  * In File Create/Update API return 404 if Branch does not exist (#11791) (#11795)
  * Fix doer of rename repo (#11789) (#11794)
  * Initialize SimpleMDE when making a code comment (#11749) (#11785)
  * Fix timezone on issue deadline (#11697) (#11784)
  * Fix to allow comment poster to edit or delete his own comments (#11671) (#11774)
  * Show full 500 error in API when Gitea in dev mode (#11641) (#11753)
  * Add missing templates for Matrix system webhooks (#11729) (#11748)
  * Fix verification of subkeys of default gpg key (#11713) (#11747)
  * Fix styling for commiter on diff view (#11715) (#11744)
  * Properly truncate system notices (#11714) (#11742)
  * Handle expected errors in FileCreate & FileUpdate API (#11643) (#11718)
  * Fix missing authorization check on pull for public repos of private/limited org (#11656) (#11682)
  * Doctor check & fix db consistency (#11111) (#11676)
  * Exclude generated files from language statistics (#11653) (#11670)
  * Return json on 500 error from API (#11574) (#11659)
  * When must change password only show Signout (#11600) (#11637)
  * Backport various styling fixes (#11619)
  * Fix wrong milestone in webhook message (#11596) (#11611)
  * Fix serviceworker output file and misc improvements (#11562) (#11610)
  * When initialising repositories ensure that the user doing the creation is the initializer (#11601) (#11608)
  * Prevent empty query parameter being set on dashboard (#11561) (#11604)
  * Fix images in wiki edit preview (#11546) (#11602)
  * Prevent (caught) panic on login (#11590) (#11597)
  * Prevent transferring repos to invisible orgs (#11517) (#11549)
  * Move serviceworker to workbox and fix SSE interference (#11538) (#11547)
  * API PullReviewComment HTMLPullURL should return the HTMLURL (#11501) (#11533)
  * Fix repo-list private and total count bugs (#11500) (#11532)
  * Fix form action template substitutions on admin pages (backport #11519) (#11531)
  * Fix a bug where the reaction emoji doesn't disappear. (#11489) (#11530)
  * TrimSpace when reading InternalToken from a file (#11502) (#11524)
  * Fix selected line color in arc-green (#11492) (#11520)
  * Make localstorage read ssh or https correctly (#11483) (#11490)
  * Check branch protection on IsUserAllowedToUpdate (#11448)
  * Fix margin on attached segment headers when they are separated by other element (#11425)
  * Fix webhook template when validation errors occur (#11421)
  * Fix NPE in template due to missing signing key on commit page (#11392)
  * Restore active background to Register button on Register page (#11390)
  * Fix hook failure due to relative LFS_CONTENT_PATH (#11362)
  * Correctly set the organization num repos (#11339)
  * Prevent 500 with badly formed task list (#11328)
  * Allow compare page to look up base, head, own-fork, forkbase-of-head (#11327)
  * Handle panics that percolate up to the graceful module (#11291)
  * Don't allow registration via the web form, when AllowOnlyExternalRegistration is True (#11248)
  * Patch fomantic-ui to workaround build issue (#11244)
  * Prevent panic during wrappedConn close at hammertime (#11219)
  * On logout force redirect to start page (#11202)
  * Fix creation of Organization repos by Users with max created personal repos (#11183)
  * Add option to increase provided OAuth2 token maximum size (#11180)
  * Log the indexer path on failure (#11172)
  * Ensure that relative paths in edit preview work (#11143)
  * Make API EditIssue and EditPullRequest issue notifications (#11123)
  * Send 404 immediately for known public requests (#11117)
  * Remove nil inserts in models (#11096)
  * Add GetReviews() to RetryDownloader (#11093)
  * Remove nonexistent serviceworker entries (#11091)
  * Simplify and fix GetApprovalCounts (#11086)
  * Fix wiki revision template and simplify some tmpl conditions (#11080)
  * Make branch parameter optional for /api/v1/repos/{owner}/{repo}/contents/{filepath} (#11067)
  * Align review-item svg octicons (#11065)
  * Automatically remove Watches, Assignments, etc if user loses access due to being removed as collaborator or from a team (#10997)
  * Users should not be able to prohibit their own login (#10970)
  * Fix scrollbar issues in dropdowns (#10897)
  * Change the order of issues.closed_by to list opening user first (#10876)
  * Allow site admin to check /api/v1/orgs endpoints (#10867)
  * Avoid logging []byte in queue failures - convert to string first (#10865)
  * Use ErrKeyUnableToVerify if fail to calc fingerprint in ssh-keygen (#10863)
  * Fix assignees double load bug (#10856)
  * Handle push rejection in branch and upload (#10854)
  * In authorized_keys use double-quote for windows compatibility (#10841)
  * Fix milestone template (#10824)
  * log.Fatal on failure to listen to SSH port (#10795)
  * Fix forked repo has no icon and language stat. (#10791)
  * Fix tag/release deletion (#10663)
  * Fix webhook migration (#10641)
  * Migration for deleting orphaned dependencies (#10617)
  * Add migration to fix the old broken merge-bases (#10604)
  * Update templates for Go 1.14 (#10596)
  * Remove unnecessary parentheses in wiki/view template (#10583)
  * Change default value of DefaultCommandExecutionTimeout to match docs (#10581)
  * Handle panic in indexer initialisation better (#10534)
  * Set correct content_type value for Gogs/Gitea webhooks (#9504) (#10456)
  * Fixed wrong AppSubUrl in multiple templates (#10447)
  * Fix profile page CSS (#10406)
  * Inject SVG sprite via ajax (#10320)
  * Fix migration information update bug when linked github account (#10310)
  * Allow admin to check org membership by API for other users (#10201)
  * Fix topics dropdown (#10167)
  * Ensure DeleteUser is not allowed to Delete Orgs and visa versa (#10134)
  * Fix IsErrPullClosed (#10093)
  * Accept punctuation after simple+cross repository issue references (#10091)
  * On merge of already closed PR redirect back to the pulls page (#10010)
  * Fix crowdin update script (#9969)
  * Fix pull view when head repository or head branch missed and close related pull requests when delete head repository or head branch (#9927)
  * Add option to prevent LDAP from deactivating everything on empty search (#9879)
  * Fix admin handling at merge of PR (#9749)
  * err_admin_name_pattern_not_allowed String Clarification (#9731)
  * Fix wrong original git service type on a migrated repository (#9693)
  * Fix ref links in issue overviews for tags (#8742)
* ENHANCEMENTS
  * Fix search form button overlap (#11840) (#11864)
  * Make tabular menu styling consistent for arc-green (#11570) (#11798)
  * Add option to API to update PullRequest base branch (#11666) (#11796)
  * Increase maximum SQLite variables count to 32766 (#11696) (#11783)
  * Update emoji dataset with skin tone variants (#11678) (#11763)
  * Add logging to long migrations (#11647) (#11691)
  * Change language statistics to save size instead of percentage (#11681) (#11690)
  * Allow different HardBreaks settings for documents and comments (#11515) (#11599)
  * Fix alignment for commits on dashboard (#11595) (#11680)
  * Default MSSQL port 0 to allow automatic detection by default (#11642) (#11673)
  * Handle expected errors in AddGPGkey API  (#11644) (#11661)
  * Close EventSource before unloading the page (#11539) (#11557)
  * Ensure emoji render with regular font-weight (#11541) (#11545)
  * Fix webpack chunk loading with STATIC_URL_PREFIX (#11526) (#11542)
  * Tweak reaction buttons (#11516)
  * Use more toned colors for selected line (#11493) (#11511)
  * Increase width for authors on commit view (#11441)
  * Hide archived repos by default in repo-list (#11440)
  * Better styling for code review comment textarea (#11428)
  * Support view individual commit for wiki pages (#11415)
  * Fix yellow background on active elements in code review (#11414)
  * Better styling for code review comment form (#11413)
  * Change install description on homepage (#11395)
  * Ensure search action button is coalesced to adjacent input (#11385)
  * Switch code editor to Monaco (#11366)
  * Add paging and archive/private repository filtering to dashboard list (#11321)
  * Changed image of openid-connect logo for better look on arc-green theme (#11312)
  * Load Repo Topics on blame view too (#11307)
  * Change the style in admin notice content view from `<p>` to `<pre>` (#11301)
  * Allow log.xxx.default to set logging settings for the default logger only (#11292)
  * Automatically attempt auto recovery of broken disk queues (Update lunny/levelqueue to 0.3.0) (#11285)
  * Make sendmail a Process and have default timeout (#11256)
  * Check value of skip-repository flag in dump command (#11254)
  * Fix submit review form (#11252)
  * Allow unauthenticated users to compare (#11240)
  * Add EventSource support (#11235)
  * Refactor Milestone related (#11225)
  * Add pull review API endpoints (#11224)
  * Add a 'this' to issue close/reopened messages (#11204)
  * When migrating from Gitlab map Approvals to approving Reviews (#11147)
  * Improve representation of attachments in issues (#11141)
  * Protect default branch against deletion (#11115)
  * Add X-Total-Count on /repos/{owner]/{repo}/pulls API endpoint (#11113)
  * Fix status label on branches list vertical alignment (#11109)
  * Add single release page and latest redirect (#11102)
  * Add missing commit states to PR checks template (#11085)
  * Change icon on title for merged PR to git-merge (#11064)
  * Add MergePull comment type instead of close for merge PR (#11058)
  * Upgrade jQuery to 3.5.0, remove jQuery-Migrate, fix deprecations (#11055)
  * Consolidate author name across timeline (#11053)
  * Refactor UpdateOAuth2Application (#11034)
  * Support unicode emojis and remove emojify.js (#11032)
  * Add git hook "warning" to admin panel (#11030)
  * Add flash notify for email preference setting success (#11027)
  * Remove package code.gitea.io/gitea/modules/git import out of models (#11025)
  * Match arc-green code tag color to code blocks (#11023)
  * Move syntax highlighting to web worker (#11017)
  * Prevent merge of outdated PRs on protected branches (#11012)
  * Add Get/Update for api/v1/user/applications/oauth2 (#11008)
  * Upgrade to most recent bluemonday (#11007)
  * Tweak code tags in markdown (#11000)
  * Reject duplicate AccessToken names (#10994)
  * Fix Ctrl-Enter shortcut for issues (#10986)
  * Provide `OwnerName` field for README template (#10981)
  * Prettify Timeline (#10972)
  * Add issue subscription check to API (#10967)
  * Use AJAX for notifications table (#10961)
  * Adjust label padding (#10957)
  * Avoiding directory execution on hook (#10954) (#10955)
  * Migrate ActivityHeatmap to Vue SFC (#10953)
  * Change merge strategy： do not check write access if user in merge white list (#10951)
  * Enable GO111MODULE=on globally in Makefile (#10939)
  * API endpoint to get single commit via SHA and Ref (#10915)
  * Add accordion to release list and hide non-latest (#10910)
  * Split dashboard elements into separate template files (#10885)
  * Add more message on sidebar menus (#10872)
  * Set MySQL rowtype to dynamic for new tables (#10833)
  * Completely fix task-list checkbox styling (#10798)
  * Hide gear icon for user who can't use them on sidebar (#10750)
  * Refactor Cron and merge dashboard tasks (#10745)
  * Change review status icons on pr view style to github style (#10737)
  * Make pagination optional for API list notification endpoints (#10714)
  * Fix tab indentation in code view (#10671)
  * Fix task-list checkbox styling (#10668)
  * Multiple LFS improvements (#10667)
  * Make PR message on pushes configurable (#10664)
  * Move dropzone.js to npm/webpack (#10645)
  * Ensure Update button is enabled even when CI has failed (#10640)
  * Add restricted user filter to LDAP authentication (#10600)
  * Add Yandex OAuth2 provider (#8335) (#10564)
  * Make avatar lookup occur at image request (#10540)
  * Prevent accidential selection of language stats bar (#10537)
  * Add fluid-icon (#10491)
  * Inform participants on UI too (#10473)
  * Build with go 1.14 (and raise minimum go version to 1.12) (#10467)
  * Add max-file-size to LFS (#10463)
  * Enable paggination for ListRepoTags API (#10454)
  * Update JS dependencies (#10450)
  * Show the username as a fallback on feeds if full name is blank (#10438)
  * Various dark theme fixes (#10416)
  * Display pull request head branch even the branch deleted or repository deleted (#10413)
  * Prevent Firefox from using apple-touch-icon (#10402)
  * Fix input[type=file] on dark theme (#10382)
  * Improve mobile review-box sizing (#10297)
  * Notification: queue ui.go notification-service (#10281)
  * Add detected file language to code search (#10256)
  * Index code and stats only for non-empty repositories (#10251)
  * Add Approval Counts to pulls list (#10238)
  * Limit label list height on edit issue page (#10216)
  * Improve 404 error message (#10214)
  * Tweak locale to respect singular conflicting file message in PR list (#10177)
  * Fix commit view (#10169)
  * Reorganize frontend files and tooling (#10168)
  * Allow emoji on popup label (#10166)
  * ListIssues add filter for milestones API (#10148)
  * Show if a PR has conflicting files on the PR lists (#10130)
  * Fix inconsistent label color format in API (#10129)
  * Show download count info in release list (#10124)
  * Add Octicon SVG spritemap (#10107)
  * Update aria-fixed semantic-dropdown to fomantic master (#10096)
  * Fix apple-touch-icon, regenerate images (#10065)(#10006)
  * Style blockquote for default issue mail template (#10024)
  * More expansions in template repositories (#10021)
  * Allow list collaborators for users with Read access to repo (#9995)
  * Add explicit dimensions to navbar avatar (#9986)
  * Remove loadCSS and preload woff2 icon fonts (#9976)
  * Fix commit view JS features, reimplement folding (#9968)
  * Fix review avatar image (#9962)
  * Improve notification pager (#9821)
  * Move jquery and jquery-migrate to npm/webpack (#9813)
  * Change font to Roboto to support more charsets (#9803)
  * Move mailer to use a queue (#9789)
  * Issue search on my related repositories (#9758)
  * Add "before" query to ListIssueComments and ListRepoIssueComments API (#9685)
  * Move tracked time api convert to convert package (#9665)
  * Improve PR info in default merge message (#9635)
  * Granular webhook events (#9626)
  * Add Reviewed-on in commit message (#9623)
  * Add top author stats to activity page (#9615)
  * Allow repo admin to merge PR regardless of review status (#9611)
  * Migrate reactions when migrating repository from github (#9599)
  * API orgEditTeam make Fields optional (#9556)
  * Move create/fork repository from models to modules/repository (#9489)
  * Migrate reviews when migrating repository from github (#9463)
  * Times API add filters (#9373)
  * Move push commits from models to modules/repository (#9370)
  * Add API endpoint to check notifications [Extend #9488] (#9595)
  * Add GET /orgs API endpoint (#9560)
  * API add/generalize pagination (#9452)
  * Make create org repo API call same as github (#9186)
* BUILD
  * Turn off go modules for xgo and gxz (#10963)
  * Add gitea-vet (#10948)
  * Rename scripts to build and add revive command as a new build tool command (#10942)
  * Add 'make lint', restructure 'compliance' pipeline (#10861)
  * Move JS build dependencies to 'dependencies' (#10763)
  * Use whitelist to find go files, run find only once (#10594)
  * Move vue and vue-calendar-heatmap to npm/webpack (#10188)
  * Move jquery.are-you-sure to npm/webpack (#10063)
  * Move highlight.js to npm/webpack (#10011)
  * Generate Bindata if TAGS="bindata" and not up-to-date (#10004)
  * Move CSS build to webpack (#9983)
  * Move fomantic target, update 'make help' (#9945)
  * Add css extraction and minification to webpack (#9944)
  * Misc webpack tweaks (#9924)
  * Make node_modules a order-only prerequisite (#9923)
  * Update documentation for the go module era (#9751)
  * Move swagger-ui to webpack/npm and update it to 3.24.3 (#9714)
  * Use npm to manage fomantic and only build needed components (#9561)
* MISC
  * Add gnupg to Dockerfile (#11365)
  * Update snapcraft.yaml for core18 and latest features (#11300)
  * Update JS dependencies, min Node.js version 10.13 (#11246)
  * Change default charset for MySQL on install to utf8mb4 (#10989)
  * Return issue subscription status from API subscribe (#10966)
  * Fix queue log param (#10733)
  * Add warning when using relative path to app.ini (#10104)
