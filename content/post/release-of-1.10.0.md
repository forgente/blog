---
date: "2019-11-14T00:30:00+00:00" 
author: "guillep2k"
title: "Gitea 1.10.0 is released"
tags: ["release", "gitea"]
draft: false
---

It's time for another major release! We are proud to present Gitea 1.10.0 to the world.

In this release, we've merged
[322 pull requests](https://github.com/go-gitea/gitea/pulls?utf8=%E2%9C%93&q=is:pr+milestone:1.10.0+is:merged).
The list includes 97 features and enhancements, and more than 150 bug fixes and documentation improvements.

You can download one of our pre-built binaries from our
[downloads page](https://dl.gitea.io/gitea/1.10.0/) - make sure to select the
correct platform! For further details on how to install, follow our
[installation guide](https://docs.gitea.io/en-us/install-from-binary/).

If you are running Raspbian and you are having problems starting Gitea, please check [raspberrypi/linux/issues/#3271](https://github.com/raspberrypi/linux/issues/3271) for a possible fix. Unfortunately, there is still no armv7 build, but using armv6 has worked for many users, so please try that in the meantime.

Several improvements have been made to the repository indexer. Please expect temporary increased resource usage the first time you start Gitea after upgrading as it rebuilds the indexes.

Please note that go 1.13 is now required for building the project.

We would like to give a special thanks to Ilya Pavlov (https://github.com/Ilya33) for reporting the security issue that has been patched in this release.

We'd like to thank all of our backers on
[Open Collective](https://opencollective.com/gitea), who are helping us deliver
a better piece of software.

With that out of the way, we are excited to show you what's new in Gitea version 1.10.0:

<!--more-->

## Webhooks can now be triggered with a branch filter ([#7791](https://github.com/go-gitea/gitea/pull/7791))

Now you can specify a [glob pattern](https://godoc.org/github.com/gobwas/glob#Compile) to filter which branches
will trigger a webhook.

![branch filter](/demos/7791/1.png)

_Thanks to [**@WGH-**](https://github.com/WGH-)_

## Branches can now be protected from merging until all required status checks have passed ([#7481](https://github.com/go-gitea/gitea/pull/7481))

Now CI/CD tests can be enforced for a protected branch. Check this out:

![require CI/CD pass](/demos/7481/1.png)

_Thanks to [**@lunny**](https://github.com/lunny)_

## A page revision list was added for wikis ([#7369](https://github.com/go-gitea/gitea/pull/7369))

Clicking the new page revision icon to the left of the page title, we can now check the list of changes for the page.

![wiki page revision icon](/demos/7369/1.png)

![wiki page revision page](/demos/7369/2.png)

_Thanks to [**@Cherrg**](https://github.com/Cherrg)_

## Gitea now shows images side-by-side when comparing changes ([#6784](https://github.com/go-gitea/gitea/pull/6784))

Now images can be compared side by side in commits, with useful information like changes in resolution and size.

![image diff side-by-side](/demos/6784/1.png)

_Thanks to [**@saitho**](https://github.com/saitho)_

## Label sets can be now chosen at repository creation ([#6061](https://github.com/go-gitea/gitea/pull/6061))

Now the label set used for issues and pull requests can be specified when the repository is created.

![initalize with labels](/demos/6061/1.png)

_Thanks to [**@jolheiser**](https://github.com/jolheiser)_

## Removed legacy handling of drone token ([#8191](https://github.com/go-gitea/gitea/pull/8191))

Please note that legacy support for the "drone" token has been removed,
as drone has removed support for `Basic` user/password authentication.

## Changelog

## 1.10.0
* BREAKING
  * Fix deadline on update issue or PR via API (#8698)
  * Hide some user information via API if user doesn't have enough permission (#8655) (#8657)
  * Remove legacy handling of drone token (#8191)
  * Change repo search to use exact match for topic search (#7941)
  * Add pagination for admin API get orgs and fix only list public orgs bug (#7742)
  * Implement the ability to change the ssh port to match what is in the gitea config (#7286)
* FEATURE
  * Org/Members: display 2FA members states + optimize sql requests (#7621)
  * SetDefaultBranch on pushing to empty repository (#7610)
  * Add side-by-side diff for images (#6784)
  * Add API method to list all commits of a repository (#6408)
  * Password Complexity Checks  (#6230)
  * Add option to initialize repository with labels (#6061)
  * Add additional password hash algorithms (#6023)
* BUGFIXES
  * Allow to merge if file path contains " or \ (#8629) (#8771)
  * On Windows, set core.longpaths true to support longer paths (#8776) (#8786)
  * Fix 500 when edit hook (#8782) (#8789)
  * Fix Checkbox at RepoSettings Protected Branch (#8799) (#8801)
  * Fix SSH2 conditional in key parsing code (#8806) (#8810)
  * Fix commit expand button to not go to commit link (#8745) (#8825)
  * Fix new user form for non-local users (#8826) (#8828)
  * Fix to close opened io resources as soon as not needed (#8839) (#8846)
  * Fix edit content button on migrated issue content (#8877) (#8884)
  * Fix require external registration password (#8885) (#8890)
  * Fix password complexity check on registration (#8887) (#8888)
  * Enable punctuations ending mentions (#8889) (#8894)
  * Add Close() method to gogitRepository (#8901) (#8956)
  * Fix for review actions and notifications (#8965)
  * Fix milestone close timestamp (#8728) (#8730)
  * Fix 500 when getting user as unauthenticated user (#8653) (#8663)
  * Fix 'New Issue Missing Milestone Comment' (#8678) (#8681)
  * Use AppSubUrl for more redirections (#8647) (#8651)
  * Add SubURL to redirect path (#8632) (#8634)
  * Fix template error on account page (#8562) (#8622)
  * Allow externalID to be UUID (#8551) (#8624)
  * Prevent removal of non-empty emoji panel following selection of duplicate (#8609) (#8623)
  * Update heatmap fixtures to restore tests (#8615) (#8616)
  * Ensure that diff stats can scroll independently of the diff (#8581) (#8621)
  * Webhook: set Content-Type for application/x-www-form-urlencoded (#8600)
  * Fix #8582 by handling empty repos (#8587) (#8594)
  * Fix bug on pull requests when transfer head repository (#8564) (#8569)
  * Add missed close in ServeBlobLFS (#8527) (#8542)
  * Ensure that GitRepo is set on Empty repositories (#8539) (#8541)
  * Fix migrate mirror 500 bug (#8526) (#8530)
  * Fix errors in create org UI regarding team access permission (#8506)
  * Fix bug on FindExternalUsersByProvider (#8504)
  * Create .ssh dir as necessary (#8486)
  * IsBranchExist: return false if provided name is empty (#8485)
  * Making openssh listen on SSH_LISTEN_PORT not SSH_PORT (#8477)
  * Add check for empty set when dropping indexes during migration (#8471)
  * LFS files are relative to LFS content path, ensure that when deleting they are made relative to this (#8455)
  * Ensure Request Body Readers are closed in LFS server (#8454)
  * Fix template bug on mirror repository setting page (#8438)
  * Fix migration v96 to keep issue attachments (#8435)
  * Update strk.kbt.io/projects/go/libravatar to latest (#8429)
  * Singular form for files that have only one line (#8416)
  * Check for either escaped or unescaped wiki filenames (#8408)
  * Allow users with explicit read access to give approvals (#8382)
  * Fix editor commit to new branch if PR disabled (#8375)
  * Re-add .markdown class to all markup renderers (#8357)
  * Upgrade xorm to v0.7.9 to fix some bugs (#8354)
  * Fix column name ambiguity in GetUserIssueStats() (#8347)
  * Change general form binding to gogs form (#8334)
  * Fix pull request commit status in user dashboard list (#8321)
  * Fix repo_admin_change_team_access always checked in org settings (#8319)
  * Update to github.com/lafriks/xormstore@v1.3.0 (#8317)
  * Show correct commit status in PR list (#8316)
  * Bugfix for image compare and minor improvements to image compare (#8289)
  * Fix API for edit and delete release attachment (#8285)
  * Fix nil object access in some conditions when parsing cross references (#8281)
  * Fix label count (#8267)
  * Only show teams access for organization repositories on collaboration setting page (#8265)
  * Test more reserved usernames (#8263)
  * Rewrite reference processing code in preparation for opening/closing from comment references (#8261)
  * Fix assets key on release webhook (#8253)
  * Allow registration when button is hidden (#8237)
  * Fix release API URL generation (#8234)
  * Fix milestone num_issues (#8221)
  * MS Teams webhook misses commit messages (#8209)
  * Fix data race (#8204)
  * Fix team user api (#8172)
  * Fix pull merge 500 error caused by git-fetch breaking behaviors (#8161)
  * Make show private icon when repo avatar set (#8144)
  * Add reviewers as participants (#8121)
  * Fix Go 1.13 private repository go get issue (#8112)
  * Highlight issue references with : (#8101)
  * Make AllowedUsers configurable in sshd_config (#8094)
  * Strict name matching for Repository.GetTagID() (#8074)
  * Avoid ambiguity of branch/directory names for the git-diff-tree command (#8066)
  * Add change title notification for issues (#8061)
  * Fixes deformed emoji in pull request reviews (#8047)
  * [ssh] Fix the config specification in the authorized_keys template (#8031)
  * Fix reading git notes from nested trees (#8026)
  * Keep blame view buttons sequence consistent with normal view when view a file (#8007)
  * Move line number to :before attr to hide from search on browser (#8002)
  * Fixes synchronize tags to releases for repository - makes sure we are only getting tag refs (#7990)
  * [Branch View] show "New Pull Request" Button only if posible (#7977)
  * Fix adding default Telegram webhook (#7972)
  * Run CORS handler first for /api routes (#7967)
  * Abort synchronization from LDAP source if there is some error (#7960)
  * Fix wrong sender when send slack webhook (#7918)
  * Fix bug when migrating a private repository (#7917)
  * Evaluate emojis in commit messages in list view (#7906)
  * Fix upload file type check (#7890)
  * lfs/lock: round locked_at timestamp to second (#7872)
  * Fix non existent milestone with 500 error instead of 404 (#7867)
  * Fix hook problem by only setting the git environment variables if we are passed them (#7854)
  * gpg/bugfix: Use .ExpiredUnix.IsZero to display green color of forever valid gpg key (#7846)
  * Fix duplicate call of webhook (#7821)
  * Enable switching to a different source branch when PR already exists (#7819)
  * Convert files to utf-8 for indexing (#7814)
  * Prevent Commit Status and Message From Overflowing On Branch Page (#7800)
  * Do not fetch all refs in pull-request compare (#7797)
  * Fix global search result CSS, misc CSS tweaks (#7789)
  * Fix multiple bugs with statuses endpoints at API (#7785)
  * Restore functionality for early gits (#7775)
  * Fix Slack webhook fork message (#7774)
  * Rewrite existing repo units if setting is not included in api body (#7763)
  * Fix rename failed when rewrite public keys (#7761)
  * Fix approvals counting (#7757)
  * Add migration step to remove old repo_indexer_status orphaned records (#7746)
  * Fix repo_index_status lingering when deleting a repository (#7734)
  * Remove camel case tokenization from repo indexer (#7733)
  * Fix milestone completness calculation when migrating (#7725)
  * Fixes indexed repos keeping outdated indexes when files grow too large (#7712)
  * Skip non-regular files (e.g. submodules) on repo indexing (#7711)
  * Fix dropTableColumns sqlite implementation (#7710)
  * Fix create menu item widths (#7708)
  * Update gopkg.in/src-d/go-git.v4 to v4.13.1 (#7705)
  * improve branches list performance and fix protected branch icon when no-login (#7695)
  * Correct wrong datetime format for git (#7689)
  * Move add to hook queue for created repo to outside xorm session. (#7675)
  * Sugestion to use range .Branches (#7674)
  * Fix bug on migrating milestone from github (#7665)
  * Hide delete/restore button on archived repos (#7658)
  * [css] Use flex to fix floating paginate (#7656)
  * [Branch View] Delete duplicate protection symbol (#7624)
  * Fix syntax highlight initialization (#7617)
  * Fix panic on push at - Merging pull request causes 500 error (#7615)
  * Make PKCS8, PEM and SSH2 keys work (#7600)
  * Fix mistake in arc-green.less split-diff css code. (#7587)
  * Handle ErrUserProhibitLogin in http git (#7586)
  * Fix bug create/edit wiki pages when code master branch protected (#7580)
  * Fixes Malformed URLs in API git/commits response (#7565)
  * Fix file header overflow in file and blame views (#7562)
  * Improve SSH key parser to handle newlines in keys (#7522)
  * Fix empty commits now showing in repo overview (#7521)
  * Fix repository's pull request count error (#7518)
  * Fix markdown invoke sequence (#7513)
  * Remove duplicated webhook trigger (#7511)
  * Update User.NumRepos atomically in createRepository (#7493)
  * Fix settings page of repo you aren't admin print error - Settings pages giving UnitType error message (#7482)
  * Fix redirection after file edit - Handles all redirects for Web UI File CRUD (#7478)
  * cmd/serv: actually exit after fatal errors (#7458)
  * Fix an issue with some pages throwing 'not defined' js exceptions (#7450)
  * Fix Dropzone.js integration (#7445)
  * Fix regex for issues in commit messages (#7444)
  * Diff: Fix indentation on unhighlighted code (#7435)
  * Only show "New Pull Request" button if repo allows pulls (#7426)
  * Upgrade macaron/captcha to fix random error problem (#7407)
  * Create class for inline positioned lists (#7393)
  * Fetch refs for successful testing for tag (#7388)
  * Add missing template variable on organisation settings (#7385)
  * Fix post parameter - on issue list - unset assignee (#7380)
  * UI fixes - compare view and archieved repo issues (#7345)
  * Fix/define autochecked checkboxes on issue list in firefox (#7320)
  * Only return head: null if source branch was deleted (#6705)
* ENHANCEMENT
  * Expose db.SetMaxOpenConns and allow non MySQL dbs to set conn pool params (#8528) (#8618)
  * Add nofollow to sign in links (#8509)
  * vendor: update mvdan.cc/xurls/v2 to v2.1.0 (#8495)
  * Update milestone issues numbers when save milestone and other code improvements (#8411)
  * Add file line count info on UI (#8396)
  * Make issues page left menu 100% width and add reponame as title attribute (#8359)
  * Add extra user information when migrating release (#8331)
  * Require overall success if no context is given for status check (#8318)
  * Transaction-aware retry create issue to cope with duplicate keys (#8307)
  * Change link on issue milestone (#8246)
  * Always return local url for users avatar (#8245)
  * Move some milestone functions to a standalone package (#8213)
  * Move create issue comment to comments package (#8212)
  * Disable max height property of comment textarea (#8203)
  * Add 'Mentioning you' group to /issues page (#8201)
  * Apply emoji on dashboard issue list labels (#8156)
  * Oauth2 with remote Gitea (#8149)
  * Reference issues from pull requests and other issues (#8137)
  * Fix webhooks to use proxy from environment (#8116)
  * Take up the full width when viewing the diff in split view (#1148) (#8114)
  * Add merged commit id on pull view when it's merged (#8062)
  * Add teams to repo on collaboration page. (#8045)
  * Update swagger to 0.20.1  (#8010)
  * Make link last commit massages in repository home page and commit tables (#8006)
  * Add API endpoint for accessing repo topics (#7963)
  * Include description in repository search (#7942)
  * Use gitea forked macaron (#7933)
  * Fix pull creation with empty changes (#7920)
  * Allow token as authorization for accessing attachments (#7909)
  * Retry create issue to cope with duplicate keys (#7898)
  * Move git diff codes from models to services/gitdiff (#7889)
  * Migrate gplus to google oauth2 provider (#7885)
  * Remove unique filter from repo indexer analyzer. (#7878)
  * Detect delimiter in CSV rendering (#7869)
  * Import topics during migration (#7851)
  * Move CreateReview to modules/pull (#7841)
  * vendor: update pdf.js to v2.1.266 (#7834)
  * Support SSH_LISTEN_PORT env var in docker app.ini template (#7829)
  * Add Ability for User to Customize Email Notification Frequency (#7813)
  * Move database settings from models to setting (#7806)
  * Display UI time with customize time location (#7792)
  * Implement webhook branch filter (#7791)
  * Restrict repository indexing by glob match (#7767)
  * [api] Advanced settings for repository (external wiki, issue tracker etc.) (#7756)
  * Update migrated repositories' issues/comments/prs poster id if user has a github external user saved (#7751)
  * Upgrade gopkg.in/editorconfig/editorconfig-core-go.v1 (#7749)
  * Apply emoji on commit graph page (#7743)
  * Add a lot of extension to language mappings for syntax highlights (#7741)
  * Add SQL execution on log and indexes on table repository and comment (#7740)
  * Set DB connection error level to error (#7724)
  * Check commit message hashes before making links (#7713)
  * Remove unnecessary fmt on generate bindata (#7706)
  * Fix specific highlighting (CMakeLists.txt ...) (#7686)
  * Add file status on API (#7671)
  * Add support for DEFAULT_ORG_MEMBER_VISIBLE (#7669)
  * Provide links in commit summaries in commits table/view list (#7659)
  * Change length of some repository's columns (#7652)
  * Move commit repo action from models to repofiles package (#7645)
  * fix wrong email when use gitea as OAuth2 provider (#7640)
  * [Branch View] add download button (#7604)
  * Use 403 instead of 401 for ErrUserProhibitLogin (#7591)
  * Removed unnecessary conversions (#7557)
  * Un-lambda base.FileSize (#7556)
  * Added missing error checks in tests (#7554)
  * Move create release from models to a standalone package (#7539)
  * Make default branch name link to default branch (#7519)
  * Added total count of contributions to heatmap (#7517)
  * Move mirror to a standalone package from models (#7486)
  * Move models.PushUpdate to repofiles.PushUpdate (#7485)
  * Include thread related headers in issue/coment mail (#7484)
  * Refuse merge until all required status checks success (#7481)
  * Convert all js var to let/const (#7464)
  * Only create branches for opened pull requestes when migrating from github (#7463)
  * Add Extra Info to Branches Page (#7461)
  * jQuery 3 (#7425)
  * Add notification placeholder (#7409)
  * Search Commits via Commit Hash (#7400)
  * Wiki history improvements (#7391)
  * Move status table to cron package (#7370)
  * Wiki - page revisions list  (#7369)
  * Display original author and URL information when showing migrated issues/comments (#7352)
  * Refactor filetype is not allowed errors (#7309)
  * Switch to use gliderlabs/ssh for builtin server (#7250)
  * Wiki editor: add buttons 'inline code', 'empty checkbox', 'checked checkbox' (#7243)
  * Remove settting dependency on modules/session (#7237)
  * Move all mail related codes from models to services/mailer (#7200)
  * Fix Statuses API only shows first 10 statuses: Add paging and extend API GetCommitStatuses (#7141)
  * Support git.PATH entry in app.ini (#6772)
  * Support setting cookie domain (#6288)
  * Move migrating repository from frontend to backend (#6200)
  * Delete releases attachments if release is deleted (#6068)
* SECURITY
  * Fix issue with user.fullname (#8903)
  * Ignore mentions for users with no access (#8395)
  * Be more strict with git arguments (#7715)
  * Extract the username and password from the mirror url (#7651)
  * Reserve .well-known username (#7637)
* TRANSLATION
  * Latvian translation for home page (#8468)
  * Add home template italian translation (#8352)
  * Fix misprint (#7452)
* BUILD
  * Use go 1.13 (#8088)
* MISC
  * Add file line count info on UI (#8396)
  * Make issues page left menu 100% width and add reponame as title attribute (#8359)
  * [arc-green] White on hover for active menu items (#8344)
  * Move ref (branch or tag) location on issue list page (#8157)
  * Display description of 'make this repo private' as help text, not as tooltip (#8097)
  * Add strike to old header on comment (#8046)
  * Add tooltip for the visibility checkbox in /repo/create (#8025)
  * Use "Pull Request" instead of "Merge Request" (#8003)
  * Changed black color to white for (read) number label on issue list page (#8000)
  * Tweak label border CSS (#7739)
  * [Branch View] Delete Table Header (#7622)
  * [Branch View] icons to buttons (#7602)
  * Update js dependencies (#7462)
  * Bump lodash from 4.17.11 to 4.17.14 (#7459)
  * Dark theme scrollbars (#7269)
* TESTING
  * Update Github Migration Tests (#8896) (#8938) (#8945)

To see all user-facing changes that went into the release, check out our
[full changelog](https://github.com/go-gitea/gitea/blob/master/CHANGELOG.md#1100---2019-11-13).

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
* [@8ctopus](https://github.com/8ctopus)
* [@Cherrg](https://github.com/Cherrg)
* [@EpicCoder](https://github.com/EpicCoder)
* [@FeodorFitsner](https://github.com/FeodorFitsner)
* [@FlorianBen](https://github.com/FlorianBen)
* [@Mikescher](https://github.com/Mikescher)
* [@Sr4l](https://github.com/Sr4l)
* [@T-M-A](https://github.com/T-M-A)
* [@Tekaoh](https://github.com/Tekaoh)
* [@WGH-](https://github.com/WGH-)
* [@aamsur](https://github.com/aamsur)
* [@adelowo](https://github.com/adelowo)
* [@ashimokawa](https://github.com/ashimokawa)
* [@aswild](https://github.com/aswild)
* [@bkmgit](https://github.com/bkmgit)
* [@bpetri](https://github.com/bpetri)
* [@camlafit](https://github.com/camlafit)
* [@christhomas](https://github.com/christhomas)
* [@danielflira](https://github.com/danielflira)
* [@das7pad](https://github.com/das7pad)
* [@davidsvantesson](https://github.com/davidsvantesson)
* [@emonty](https://github.com/emonty)
* [@filipnavara](https://github.com/filipnavara)
* [@gary-kim](https://github.com/gary-kim)
* [@grinat](https://github.com/grinat)
* [@guillep2k](https://github.com/guillep2k)
* [@jaqra](https://github.com/jaqra)
* [@jolheiser](https://github.com/jolheiser)
* [@jpellegrini](https://github.com/jpellegrini)
* [@kolaente](https://github.com/kolaente)
* [@lafriks](https://github.com/lafriks)
* [@lunny](https://github.com/lunny)
* [@micw](https://github.com/micw)
* [@mrsdizzie](https://github.com/mrsdizzie)
* [@muesli](https://github.com/muesli)
* [@noerw](https://github.com/noerw)
* [@nuno-andre](https://github.com/nuno-andre)
* [@pmdematagoda](https://github.com/pmdematagoda)
* [@quantonganh](https://github.com/quantonganh)
* [@renothing](https://github.com/renothing)
* [@richmahn](https://github.com/richmahn)
* [@sabinich](https://github.com/sabinich)
* [@saitho](https://github.com/saitho)
* [@sapk](https://github.com/sapk)
* [@silverwind](https://github.com/silverwind)
* [@spaeps](https://github.com/spaeps)
* [@stealthybox](https://github.com/stealthybox)
* [@strk](https://github.com/strk)
* [@tamalsaha](https://github.com/tamalsaha)
* [@techknowlogick](https://github.com/techknowlogick)
* [@typeless](https://github.com/typeless)
* [@vszakats](https://github.com/vszakats)
* [@yzzyx](https://github.com/yzzyx)
* [@zeripath](https://github.com/zeripath)

[PRs](https://github.com/go-gitea/gitea/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+milestone%3A1.10.0)
and [issues](https://github.com/go-gitea/gitea/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+milestone%3A1.10.0)
merged in 1.10.0.

# Get in touch

Need help with anything?
You can come on our [Discord server,](https://discord.gg/gitea) or if you're
more old-fashioned you can also use our [forums](https://discourse.gitea.io/).
