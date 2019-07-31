---
date: "2019-07-31T10:40:00+01:00" 
author: "jolheiser"
title: "Gitea 1.9.0 is released"
tags: ["release"]
draft: false
---

It's time for another major release! We are proud to present Gitea
1.9.0 to the world.  
In this release, we merged
[370 pull requests](https://github.com/go-gitea/gitea/pulls?utf8=%E2%9C%93&q=is:pr+milestone:1.9.0+is:merged) 
-- This is more than 1.8.0 (245) and 1.7.0 (158)!  
  
**This version of Gitea contains security fixes that could not be backported to 1.8. For this reason, we strongly recommend updating.**

You can download one of our pre-built binaries from our
[downloads page](https://dl.gitea.io/gitea/1.9.0/) - make sure to select the
correct platform! For further details on how to install, follow our
[installation guide](https://docs.gitea.io/en-us/install-from-binary/).  
Unfortunately, there is a known issue with our prebuilt images on armv7, see [#6700](https://github.com/go-gitea/gitea/issues/6700). 
Using armv6 has worked for many users, so please try that in the meantime.

We'd like to thank all of our backers on
[Open Collective](https://opencollective.com/gitea), who are helping us deliver
a better piece of software.

A few things we would like to mention with this release:  

* We are in the process of moving Gitea's development to https://gitea.com 
  * Currently the only repository left on GitHub is Gitea itself.
  * We are hoping to be able to migrate completely before the next release.
* We have changed our Docker tagging!
  * Starting now the `:1` and `:1.9` tags will only be updated on tagged release like `1.9.0` and not on every commit to a release branch. This means that those tags will be more stable. Release candidate tags will be ignored.
  * For example, the `:1` tag will follow `:1.10` that itself will only be created for the first stable release of `1.10.0`.
* Logging has been overhauled (thanks [**@zeripath**](https://github.com/zeripath)!) ([#6038](https://github.com/go-gitea/gitea/pull/6038))
  * For a more complete overview, check out [the documentation](https://docs.gitea.io/en-us/logging-configuration/).
   
   
With that out of the way, we are excited to show you what's new in Gitea version 1.9.0:

<!--more-->

## Repository avatars ([#6986](https://github.com/go-gitea/gitea/pull/6986))

Repositories can now have their own avatar

![repository avatar](/demos/6986/1.png)

_Thanks to [**@sergey-dryabzhinsky**](https://github.com/sergey-dryabzhinsky)_

## Show git-notes ([#6984](https://github.com/go-gitea/gitea/pull/6984))

Support for displaying notes created by [git notes](https://git-scm.com/docs/git-notes)

![git-notes](/demos/6984/1.png)

_Thanks to [**@CyberShadow**](https://github.com/CyberShadow)_

## Commit status reports on pull request view ([#6845](https://github.com/go-gitea/gitea/pull/6845))

![commit status report](/demos/6845/1.png)

_Thanks to [**@lunny**](https://github.com/lunny)_

## Number of commits ahead/behind in branch overview ([#6695](https://github.com/go-gitea/gitea/pull/6695))

Branch overview page now shows how many commits ahead/behind a particular branch is compared to the default branch.

![commits ahead/behind](/demos/6695/1.png)

_Thanks to [**@saitho**](https://github.com/saitho)_

## Support search operators for commits search ([#6479](https://github.com/go-gitea/gitea/pull/6479))

Gitea now supports `author:`, `committer:`, `after:`, and `before:` search operators.  
  
Example: `author:alice author:bob`  
Result: All commits authored by Alice OR Bob

_Thanks to [**@typeless**](https://github.com/typeless)_

## API endpoints for creating, updating, and deleting files ([#6314](https://github.com/go-gitea/gitea/pull/6314))

Adds new API endpoints as follows:
```text
POST   /api/v1/repos/{owner}/{repo}/contents/{filepath} - Create a file in a repository
PUT    /api/v1/repos/{owner}/{repo}/contents/{filepath} - Update a file in a repository
DELETE /api/v1/repos/{owner}/{repo}/contents/{filepath} - Delete a file in a repository
GET    /api/v1/repos/{owner}/{repo}/contents/{filepath} - Gets the contents of a file or directory in a repository
GET    /api/v1/repos/{owner}/{repo}/git/blobs/{sha}     - Gets the blob of a repository.
```

_Thanks to [**@richmahn**](https://github.com/richmahn)_

## API endpoint for repo edit ([#7006](https://github.com/go-gitea/gitea/pull/7006))

Users can now edit repository settings via the API

_Thanks to [**@richmahn**](https://github.com/richmahn)_

## Support migrating milestones/labels/issues/comments/pull requests ([#6290](https://github.com/go-gitea/gitea/pull/6290))

Gitea will start supporting complete migrations from other Git services.  
**For now, only migrating from GitHub or another Gitea instance is supported. More can be added going forward.**

![migration ui](/demos/6290/1.png)

_Thanks to [**@lunny**](https://github.com/lunny)_

## Add option to blame files ([#5721](https://github.com/go-gitea/gitea/pull/5721))

Introduces option to blame text files.

![blame](/demos/5721/1.png)

_Thanks to [**@jereksel**](https://github.com/jereksel)_

## Git statistics in Activity tab ([#4724](https://github.com/go-gitea/gitea/pull/4724))

![statistics](/demos/4724/1.png)

_Thanks to [**@lafriks**](https://github.com/lafriks)_

## Telegram webhook support ([#4227](https://github.com/go-gitea/gitea/pull/4227))

Gitea now supports Telegram webhooks

_Thanks to [**@techknowlogick**](https://github.com/techknowlogick)_

## Changelog

* BREAKING
  * Better logging (#6038) (#6095)
* SECURITY
  * Shadow the password on cache and session config on admin panel (#7300)
  * Fix markdown invoke sequence (#7513) (#7560)
  * Reserve .well-known username (#7638)
  * Do not leak secrets via timing side channel (#7364)
  * Ensure that decryption of cookie actually suceeds (#7363)
* FEATURE
  * Content API for Creating, Updating, Deleting Files (#6314)
  * Enable tls-alpn-01: Use certmanager provided TLSConfig for LetsEncrypt (#7229)
  * Add command to convert mysql database from utf8 to utf8mb4 (#7144)
  * Fixes #2738 - Adds the /git/tags API endpoint (#7138)
  * Compare branches, commits and tags with each other (#6991)
  * Show Pull Request button or status of latest PR in branch list (#6990)
  * Repository avatars (#6986)
  * Show git-notes (#6984)
  * Add commit statuses reports on pull request view (#6845)
  * Number of commits ahead/behind in branch overview (#6695)
  * Add CLI commands to manage LDAP authentication source (#6681)
  * Add support for MS Teams webhooks (#6632)
  * OAuth2 Grant UI (#6625)
  * Add SUBJECT_PREFIX mailer config option (#6605)
  * Include custom configuration file in dump (#6516)
  * Add API for manipulating Git hooks (#6436)
  * Improve migrations to support migrating milestones/labels/issues/comments/pullrequests (#6290)
  * Add option to blame files (#5721)
  * Implement Default Webhooks (#4299)
  * Telegram webhook (#4227)
* BUGFIXES
  * Send webhook after commit when creating issue with assignees (#7681) (#7684)
  * Upgrade macaron/captcha to fix random error problem (#7407) (#7683)
  * Move add to hook queue for created repo to outside xorm session. (#7682) (#7675)
  * Show protection symbol if needed on default branch (#7660) (#7668)
  * Hide delete/restore button on archived repos (#7660)
  * Fix bug on migrating milestone from github (#7665) (#7666) 
  * Use flex to fix floating paginate (#7656) (#7662)
  * Change length of some repository's columns (#7652) (#7655)
  * Fix wrong email when use gitea as OAuth2 provider (#7640) (#7647)
  * Fix syntax highlight initialization (#7617) (#7626) 
  * Fix bug create/edit wiki pages when code master branch protected (#7580) (#7623)
  * Fix panic on push at #7611 (#7615) (#7618)
  * Handle ErrUserProhibitLogin in http git (#7586, #7591) (#7590) 
  * Fix color of split-diff view in dark theme (#7587) (#7589)
  * Fix file header overflow in file and blame views (#7562) (#7579) 
  * Malformed URLs in API git/commits response (#7565) (#7567)
  * Fix empty commits now showing in repo overview (#7521) (#7563)
  * Fix repository's pull request count error (#7518) (#7524) 
  * Remove duplicated webhook trigger (#7511) (#7516) 
  * Handles all redirects for Web UI File CRUD (#7478) (#7507)
  * Fix regex for issues in commit messages (#7444) (#7466)
  * cmd/serv: actually exit after fatal errors (#7458) (#7460)
  * Fix an issue with some pages throwing 'not defined' js exceptions #7450 (#7453)
  * Fix Dropzone.js integration (#7445) (#7448)
  * Create class for inline positioned lists (#7439) (#7393)
  * Diff: Fix indentation on unhighlighted code (#7435) (#7443)
  * jQuery 3 (#7442) (#7425)
  * Only show "New Pull Request" button if repo allows pulls (#7426) (#7432)
  * Fix vendor references (#7394) (#7396)
  * Only return head: null if source branch was deleted (#6705) (#7376)
  * Add missing template variable on organisation settings (#7386) (#7385)
  * Fix post parameter on issue list which had unset assignee (#7380) (#7383)
  * Fix migration tests due to issue 7 being resolved (#7375) (#7381)
  * Correctly adjust mirror url (#6593)
  * Handle early git version's lack of get-url (#7065)
  * Fix icon position in issue view (#7354)
  * Cut timeline length with last element on issue view (#7355)
  * Fix mirror repository webhooks (#7366)
  * Fix api route for hooks (#7346)
  * Fix bug conflict between SyncReleasesWithTags and InsertReleases (#7337)
  * Fix pull view ui merge section (#7335)
  * Fix 7303 - remove unnessesary buttons on archived repos (#7326)
  * Fix topic bar to allow prefixes (#7325)
  * Fixes #7152 - Allow create/update/delete message to be empty, use default message (#7324)
  * Fixes #7238 - Annotated tag commit ID incorrect (#7321)
  * Dark theme fixes (#7319)
  * Gitea own dark codemirror theme (#7317)
  * Fixes #7292 - API File Contents bug (#7301)
  * Fix API link header (#7298)
  * Fix extra newlines when copying from diff in Firefox (#7288)
  * Make diff line-marker non-selectable (#7279)
  * Fix Submodule dection in subdir (#7275)
  * Fix error log when loading issues caused by a xorm bug (#7271)
  * Add .fa icon margin like .octicon (#7258)
  * Fix hljs unintenionally highlighting commit links (#7244)
  * Only check and config git on web subcommand but not others (#7236)
  * Fix migration panic when Head.User is not exist (#7226)
  * Only warn on errors in deleting LFS orphaned files during repo deletion (#7213)
  * Fix duplicated file on pull request conflicted files (#7211)
  * Allow colon between fixing word and issue (#7207)
  * Fix overflow issues in repo (#7190)
  * API error cleanup (#7186)
  * Add error for fork already existing (#7185)
  * Fixes diff on merged pull requests (#7171)
  * If milestone id is zero don't get it from database (#7169)
  * Fix pusher name via ssh push (#7167)
  * Fix database lock when use random repository fallback image (#7166)
  * Various fixes for issue mail notifications (#7165)
  * Allow archived repos to be (un)starred and (un)watched (#7163)
  * Fix GCArgs load from ini (#7156)
  * Detect noreply email address as user (#7133)
  * Avoid arbitrary format strings upon calling fail() function (#7112)
  * Validate External Tracker URL Format (#7089)
  * Repository avatar fallback configuration (#7087)
  * Fix #732: Add LFS objects to base repository on merging  (#7082)
  * Install page - Handle invalid administrator username better (#7060)
  * Workaround for posting single comments in split diff view (#7052)
  * Fix possbile mysql invalid connnection error (#7051)
  * Fix charset was not saved after installation finished (#7048)
  * Handle insecure and ports in go get (#7041)
  * Avoid bad database state after failed migration (#7040)
  * Fix wrong init dependency on markup extensions (#7038)
  * Fix default for allowing new organization creation for new users (#7017)
  * Fix content download and /verify LFS handler expecting wrong content-type (#7015)
  * Fix missing repo description when migrating (#7000)
  * Fix LFS Locks over SSH (#6999)
  * Do not attempt to return blob on submodule (#6996)
  * Fix U2F for Chrome >= 74 (#6980)
  * Fix index produces problem when issues/pulls deleted (#6973)
  * Allow collaborators to view repo owned by private org (#6965)
  * Stop running hooks on pr merge (#6963)
  * Run hooks on merge/edit and cope with protected branches (#6961)
  * Webhook Logs show proper HTTP Method, and allow change HTTP method in form (#6953)
  * Stop colorizing log files by default (#6949)
  * Rotate serv.log, http.log and hook logs and stop stacktracing in these (#6935)
  * Fix plain text overflow line wrap (#6915)
  * Fix input size for dependency select (#6913)
  * Change drone token name to let users know to use oauth2 (#6912)
  * Fix syntax highlight in blame view #6895 (#6909)
  * Use AppURL for Oauth user link (#6894)
  * Fixes #6881 - API users search fix (#6882)
  * Fix 404 when send pull request some situation  (#6871)
  * Enforce osusergo build tag for releases (#6862)
  * Fix 500 when reviewer is deleted with integration tests (#6856)
  * Fix v85.go (#6851)
  * Make dropTableColumns drop columns on sqlite and constraints on all (#6849)
  * Fix double-generation of scratch token (#6832) (#6833)
  * When mirroring we should set the remote to mirror (#6824)
  * Fix the v78 migration "Drop is_bare" on MSSQL #6707 (#6823)
  * Change verbose flag in dump command to avoid colliding with global version flag (#6822)
  * Fix #6813: Allow git.GetTree to take both commit and tree names (#6816)
  * Remove `seen` map from `getLastCommitForPaths` (#6807)
  * Show scrollbar only when needed (#6802)
  * Restore IsWindows variable assignment (#6722) (#6790)
  * Service worker js is a missing comma (#6788)
  * Fix team edit API panic (#6780)
  * Set user search base field optional in LDAP (simple auth) edit page (#6779)
  * Ignore already existing public keys after ldap sync (#6766)
  * Fix pulls broken when fork repository deleted (#6754)
  * Fix missing return (#6751)
  * Fix new team 500 (#6749)
  * OAuth2 token can be used in basic auth (#6747)
  * Fix org visibility bug when git cloning (#6743)
  * Fix bug when sort repos on org home page login with non-admin (#6741)
  * Stricter domain name pattern in email regex (#6739)
  * Fix admin template error (#6737)
  * Drop is_bare IDX only when it exists for MySQL and MariaDB (#6736)
  * UI: Detect and restore encoding and BOM in content  (#6727)
  * Load issue attributes when editing an issue with API (#6723)
  * Fix team members API (#6714)
  * Unfortunately MemProvider Init does not actually Init properly (#6692)
  * Fix partial reversion of #6657 caused by #6314 (#6685)
  * Prevent creating empty sessions (#6677)
  * Fixes #6659 - Swagger schemes selection default to page's protocol (#6660)
  * Update highlight.js to 9.15.6 (#6658)
  * Properly escape on the redirect from the web editor (#6657)
  * Fix #6655 - Don't EscapePound .Link as it is already escaped (#6656)
  * Use ctx.metas for SHA hash links (#6645)
  * Fix wrong GPG expire date (#6643)
  * upgrade version of lib/pq to v1.1.0 (#6640)
  * Fix forking an empty repository (#6637)
  * Fix issuer of OTP URI should be URI-encoded. (#6634)
  * Return a UserList from /api/v1/admin/users (#6629)
  * Add json tags for oauth2 form (#6627)
  * Remove extra slash from twitter card (#6619)
  * remove bash requirement in makefile (#6617)
  * Fix Open Graph og:image link (#6612)
  * Fix cross-compile builds (#6609)
  * Change commit summary to full message in API (#6591)
  * Fix bug user search API pagesize didn't obey ExplorePagingNum (#6579)
  * Prevent server 500 on compare branches with no common history (#6555)
  * Properly escape release attachment URL (#6512)
  * Delete local branch when repo branch is deleted (#6497)
  * Fix bug when user login and want to resend register confirmation email (#6482)
  * Fix upload attachments (#6481)
  * Avoid multi-clicks in oauth2 login (#6467)
  * Hacky fix for alignment of the create-organization dialog (#6455)
  * Change order that PostProcess Processors are run (#6445)
  * Clean up ref name rules (#6437)
  * Fix Hook & HookList in Swagger (#6432)
  * Fixed unitTypeCode not being used in accessLevelUnit (#6419)
  * Display correct error for invalid mirror interval (#6414)
  * Don't Unescape redirect_to cookie value (#6399)
  * Fix dump table name error and add some test for dump database (#6394)
  * Fix migrations 82 to ignore unsynced tags between database and git data and missing is_archived on repository table (#6387)
  * Make sure units of a team are returned (#6379)
  * Fix bug manifest.json will not request with cookie so that session will created every request (#6372)
  * Disable benchmarking during tag events on DroneIO (#6365)
  * Comments list performance optimization (#5305)
* ENHANCEMENT
  * Update Drone docker generation to standard format (#7480) (#7496) (#7504)
  * Add API Endpoint for Repo Edit (#7006)
  * Add state param to milestone listing API (#7131)
  * Make captcha and password optional for external accounts (#6606)
  * Detect migrating batch size (#7353)
  * Fix 7255 - wrap long texts on user profile info (#7333)
  * Use commit graph files for listing pages (#7314)
  * Add git command line commitgraph support global default true when git version >= 2.18 (#7313)
  * Add LFS_START_SERVER option to control git-lfs support (#7281)
  * Dark theme markdown fixes (#7260)
  * Update go-git to v4.12.0 (#7249)
  * Show lfs config on admin panel (#7220)
  * Disable same user check for internal SSH (#7215)
  * Add LastLogin to the User API (#7196)
  * Add missing description of label on API (#7159)
  * Use go method to calculate ssh key fingerprint (#7128)
  * Enable Rust highlighting (#7125)
  * Refactor submodule URL parsing (#7100)
  * Change issue mail title. (#7064)
  * Use batch insert on migrating repository to make the process faster (#7050)
  * Improve github downloader on migrations (#7049)
  * When git version >= 2.18, git command could run with git wire protocol version 2 param if enabled (#7047)
  * Fix Erlang and Elixir highlight mappings (#7044)
  * API Org Visibility (#7028)
  * Improve handling of non-square avatars (#7025)
  * Bugfix: Align comment label and actions to the right (#7024)
  * Change UpdateRepoIndex api to include watchers (#7012)
  * Move serv hook functionality & drop GitLogger (#6993)
  * Add support of utf8mb4 for mysql (#6992)
  * Make webhook http connections resuable (#6976)
  * Move xorm logger bridge from log to models so that log module could be a standalone package (#6944)
  * Refactor models.NewRepoContext to extract git related codes to modules/git (#6941)
  * Remove macaron dependent on models (#6940)
  * Add less linter via npx (#6936)
  * Remove macaron dependent on modules/log (#6933)
  * Remove macaron dependent on models/mail.go (#6931)
  * Clean less files (#6921)
  * Fix code overflow (#6914)
  * Style orgs list in user profile (#6911)
  * Improve description of branch protection (fix #6886) (#6906)
  * Move sdk structs to modules/structs (#6905)
  * update sdk to latest (#6903)
  * Escape the commit message on issues update and title in telegram hook (#6901)
  * SearchRepositoryByName improvements and unification (#6897)
  * Change the color of issues/pulls list, merged is purple and closed is red (#6874)
  * Refactor table width to have more info shown in file list (#6867)
  * Monitor all git commands; move blame to git package and replace git as a variable (#6864)
  * Fix config ui error about cache ttl (#6861)
  * Improve localization of git activity stats (#6848)
  * Generate access token in admin cli (#6847)
  * Update github.com/urfave/cli to version 1.2.0 (#6838)
  * Rename LFS_JWT_SECRET cli option to include OAUTH2 as well (#6826)
  * internal/ssh: ignore env command totally (#6825)
  * Allow Recaptcha service url to be configured (#6820)
  * update github.com/mcuadros/go-version to v0.0.0-20190308113854-92cdf37c5b75 (#6815)
  * Use modules/git for git commands (#6775)
  * Add GET requests to webhook (#6771)
  * Move PushUpdate dependency from models to repofiles (#6763)
  * Tweak tab text and icon colors (#6760)
  * Ignore non-standard refs in git push (#6758)
  * Disable web preview for telegram webhook (#6719)
  * Show full name if DEFAULT_SHOW_FULL_NAME setting enabled (#6710)
  * Reorder file actions (#6706)
  * README WordPress the code is overflowing #6679 (#6696)
  * Improve issue reference on commit (#6694)
  * Handle redirects for git clone commands (#6688)
  * Fix one performance/correctness regression in #6478 found on Rails repository. (#6686)
  * API OTP Context (#6674)
  * Remove local clones & make hooks run on merge/edit/upload (#6672)
  * Bump github.com/stretchr/testify from 1.2.2 to 1.3.0 (#6663)
  * Bump gopkg.in/src-d/go-git.v4 from 4.8.0 to 4.10.0 (#6662)
  * Fix dropdown icon padding (#6651)
  * Add more title attributes on shortened names (#6647)
  * Update UI for topics labels on projects (#6639)
  * Trace Logging on Permission Denied & ColorFormat (#6618)
  * Add .gpg url (match github behaviour) (#6610)
  * Support for custom GITEA_CUSTOM env var in docker(#6608)
  * Show "delete branch" button on closed pull requests (#6570) (#6601)
  * Add option to disable refresh token invalidation (#6584)
  * Fix new repo dropdown alignment (#6583)
  * Fix mail notification when close/reopen issue (#6581)
  * Pre-calculate the absolute path of git (#6575)
  * Minor CSS cleanup for the navbar (#6553)
  * Render SHA1 links as code blocks (#6546)
  * Add username flag in create-user command (#6534)
  * Unifies pagination template usage (#6531) (#6533)
  * Fixes pagination width on mobile view (#5711) (#6532)
  * Improve SHA1 link detection (#6526)
  * Fixes #6446 - Sort team members and team's repositories (#6525)
  * Use stricter boundaries for auto-link detection (#6522)
  * Use regular line-height on frontpage entries (#6518)
  * Fixes #6514 - New Pull Request on files and pulls pages the same (#6515)
  * Make distinction between DisplayName and Username in email templates (#6495)
  * Add X-Auto-Response-Suppress header to outgoing messages (#6492)
  * Cleaned permission checks for API -> site admin can now do anything (#6483)
  * Support search operators for commits search (#6479)
  * Improve listing performance by using go-git (#6478)
  * Fix repo sub_menu font color in arc-green (#6477)
  * Show last commit status in pull request lists (#6465)
  * Add signatures to webhooks (#6428)
  * Optimize all images in public/img (#6427)
  * Add golangci (#6418)
  * Make "Ghost" not link to 404 page (#6410)
  * Include more variables on admin/config page (#6378)
  * Markdown: enable some more extensions (#6362)
  * Include repo name in page title tag (#6343)
  * Show locale string on timestamp (#6324)
  * Handle CORS requests (#6289)
  * Improve issue autolinks (#6273)
  * Migration Tweaks (#6260)
  * Add title attributes to all items in the repo list viewer (#6258)
  * Issue indexer queue redis support (#6218)
  * Add bio field for user (#6113)
  * Make the version within makefile overwriteable (#6080)
  * Updates to API 404 responses (#6077)
  * Use Go1.11 module (#5743)
  * UX + Security current user password reset (#5042)
  * Refactor: append, build variable and type switch (#4940)
  * Git statistics in Activity tab (#4724)
  * Drop the bits argument when generating an ed25519 key (#6504)
* TESTING
  * Exclude pull_request from fetch-tags step, fixes #7108 (#7120)
  * Refactor and improve git test (#7086)
  * Fix TestSearchRepo by waiting till indexing is done (#7004)
  * Add mssql migration tests (needs #6823) (#6852)
  * Add tests for Org API (#6731)
  * Context.ServerError and NotFound should log from their caller (#6550)
* TRANSLATION
  * Add french specific rule for translating plural texts (#6846)
* BUILD
  * Update mssql driver to last working version 20180314172330-6a30f4e59a44 (#7306)
  * Alpine 3.10 (#7256)
  * Use vfsgen instead of go-bindata (#7080)
  * remove and disable package-lock (#6969)
  * add make targets for js and css, add js linter (#6952)
  * Added tags pull step to drone config to show correct version hashes i… (#6836)
  * Make CustomPath, CustomConf and AppWorkPath configurable at build (#6631)
  * chore: update drone format to 1.0 (#6602)
  * Fix race in integration testlogger (#6556)
  * Quieter Integration Tests (#6513)
  * Drop the docker Makefile from the image (#6507)
  * Add make version on gitea version (#6485)
  * Fix #6468 - Uses space match and adds newline for all sed flavors (#6473)
  * Move code.gitea.io/git to code.gitea.io/gitea/modules/git (#6364)
  * Update npm dependencies and various tweaks (#7344)
  * Fix updated drone file (#7336)
  * Add 'npm' and 'npm-update' make targets and lockfile (#7246)
* DOCS
  * Add work path CLI option (#6922)
  * Fix logging documentation (#6904)
  * Some logging documentation (#6498)
  * Fix link to Hacking on Gitea on From-Source doc page (#6471)
  * Fix typos in docs command-line examples (#6466)
  * Added docker example for backup (#5846)

To see all user-facing changes that went into the release, check out our
[full changelog](https://github.com/go-gitea/gitea/blob/master/CHANGELOG.md#190---2019-07-30).

We would like to thank those who reported and/or fixed security issues in this
release:

* Kristian Bremberg at [Detectify](https://detectify.com/) ([#7513](https://github.com/go-gitea/gitea/pull/7513))
* Andreas Shimokawa ([@ashimokawa](https://github.com/ashimokawa)) ([#7637](https://github.com/go-gitea/gitea/pull/7637))
* [@leonklingele](https://github.com/leonklingele) ([#7364](https://github.com/go-gitea/gitea/pull/7364)) and ([#7363](https://github.com/go-gitea/gitea/pull/7363))
* [@vpr-ossteam](https://github.com/vpr-ossteam) for reporting [#7147](https://github.com/go-gitea/gitea/pull/7147)
  * With special thanks to [@lunny](https://github.com/lunny) for fixing in [#7300](https://github.com/go-gitea/gitea/pull/7300)

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

* [@42wim](https://github.com/42wim)
* [@6543](https://github.com/6543)
* [@BetaCat0](https://github.com/BetaCat0)
* [@Cherrg](https://github.com/Cherrg)
* [@CoolGoose](https://github.com/CoolGoose)
* [@CyberShadow](https://github.com/CyberShadow)
* [@Ilya33](https://github.com/Ilya33)
* [@MayMeow](https://github.com/MayMeow)
* [@NateScarlet](https://github.com/NateScarlet)
* [@SagePtr](https://github.com/SagePtr)
* [@Tekaoh](https://github.com/Tekaoh)
* [@ZerooCool](https://github.com/ZerooCool)
* [@adelowo](https://github.com/adelowo)
* [@akkowal2](https://github.com/akkowal2)
* [@anicolaides](https://github.com/anicolaides)
* [@appleboy](https://github.com/appleboy)
* [@ashimokawa](https://github.com/ashimokawa)
* [@aswild](https://github.com/aswild)
* [@aunger](https://github.com/aunger)
* [@dangrier](https://github.com/dangrier)
* [@das7pad](https://github.com/das7pad)
* [@davidsvantesson](https://github.com/davidsvantesson)
* [@daviian](https://github.com/daviian)
* [@e3b0c442](https://github.com/e3b0c442)
* [@eldiaboloz](https://github.com/eldiaboloz)
* [@filipnavara](https://github.com/filipnavara)
* [@gary-kim](https://github.com/gary-kim)
* [@huihuimoe](https://github.com/huihuimoe)
* [@jbeyerstedt](https://github.com/jbeyerstedt)
* [@jeblair](https://github.com/jeblair)
* [@jereksel](https://github.com/jereksel)
* [@jolheiser](https://github.com/jolheiser)
* [@jonasfranz](https://github.com/jonasfranz)
* [@jpicht](https://github.com/jpicht)
* [@kolaente](https://github.com/kolaente)
* [@lafriks](https://github.com/lafriks)
* [@leonklingele](https://github.com/leonklingele)
* [@lunny](https://github.com/lunny)
* [@markainick](https://github.com/markainick)
* [@mrsdizzie](https://github.com/mrsdizzie)
* [@ngourdon](https://github.com/ngourdon)
* [@oscarlofwenhamn](https://github.com/oscarlofwenhamn)
* [@quantonganh](https://github.com/quantonganh)
* [@renothing](https://github.com/renothing)
* [@rfwatson](https://github.com/rfwatson)
* [@richmahn](https://github.com/richmahn)
* [@rkoe](https://github.com/rkoe)
* [@rnowak](https://github.com/rnowak)
* [@saitho](https://github.com/saitho)
* [@sapk](https://github.com/sapk)
* [@segevfiner](https://github.com/segevfiner)
* [@sergey-dryabzhinsky](https://github.com/sergey-dryabzhinsky)
* [@shilch](https://github.com/shilch)
* [@shmibs](https://github.com/shmibs)
* [@silverwind](https://github.com/silverwind)
* [@slonopotamus](https://github.com/slonopotamus)
* [@solderjs](https://github.com/solderjs)
* [@strk](https://github.com/strk)
* [@tamalsaha](https://github.com/tamalsaha)
* [@techknowlogick](https://github.com/techknowlogick)
* [@typeless](https://github.com/typeless)
* [@vakabus](https://github.com/vakabus)
* [@webjoel](https://github.com/webjoel)
* [@xf-](https://github.com/xf-)
* [@yzzyx](https://github.com/yzzyx)
* [@zeripath](https://github.com/zeripath)
* [@zyclonite](https://github.com/zyclonite)


[PRs](https://github.com/go-gitea/gitea/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+milestone%3A1.9.0)
and [issues](https://github.com/go-gitea/gitea/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+milestone%3A1.9.0)
merged in 1.9.0.

# Get in touch

Need help with anything?
You can come on our [Discord server,](https://discord.gg/gitea) or if you're
more old-fashioned you can also use our [forums](https://discourse.gitea.io/).
