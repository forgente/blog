---
date: 2025-06-04T10:16:00-07:00
authors:
  - "lunny"
  - "techknowlogick"
  - "denyskon"
title: "Gitea 1.24.0 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.24.0"
---

We are thrilled to announce the latest release of Gitea **v1.24.0**.

Gitea 1.24 is packed with new features, improvements, and significant performance increases. Here are some notable changes and features in Gitea 1.24; for the full list, refer to the full release notes.

We are very thankful for the many people who have contributed to the project from sending code patches, reporting issues, translating, and in supporting us in many other ways too.

## How to Update

You can download it for example from our [downloads page](https://dl.gitea.com/gitea/1.24.0/). Please read our [installation guide](https://docs.gitea.com/1.24/category/installation) for more information on installation. For upgrade, as always, backup your data and then replace the binary or docker container and restart.

## Special Thanks

We would like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain the project financially.

As always, the changes are sorted descending by what we deem most important for users and admins, so the most important change comes first.

> **Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Major Breaking changes

### :warning: Make Gitea always use its internal config, ignore `/etc/gitconfig` ([#33076](https://github.com/go-gitea/gitea/pull/33076))

Historically, Gitea has been able to use the system config under `/etc/gitconfig` to support some edge-case customizations. However, it sometimes causes conflicts, which have arisen multiple times lately. Therefore, we decided to switch away from this practice, adding `GIT_CONFIG_NOSYSTEM=1` to all git commands.

If you have made changes to `/etc/gitconfig` to affect Gitea's behavior, you need to move these config options to Gitea's internal git config file, it is usually in Gitea's `{AppDataPath}/home/.gitconfig`.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

### :warning: Improve log format ([#33814](https://github.com/go-gitea/gitea/pull/33814))

The router log format was changed from

```log
2025/03/06 22:21:12 ...eb/routing/logger.go:102:func1() [I] router: completed GET / for [::1]:52693, 200 OK in 15.9ms @ web/home.go:32(web.Home)
```

to

```log
2025/03/06 22:20:35 HTTPRequest [I] router: completed GET / for [::1]:52631, 200 OK in 7.5ms @ web/home.go:32(web.Home)
```

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

### :warning: Fix markdown render behaviors ([#34122](https://github.com/go-gitea/gitea/pull/34122))

Add config options `MATH_CODE_BLOCK_DETECTION`, problematic syntaxes are disabled by default.

Some markdown rendering behaviors are improved to match GitHub, please refer to the latest document's "Markdown" page to see the details.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

### :warning: Add package version api endpoints ([#34173](https://github.com/go-gitea/gitea/pull/34173))

Two new API endpoints to list versions of a package and to get the latest version of a package were added.

The size field for this endpoint changes case from `Size` to `size` for consistency.

Thank you to [**@KN4CK3R**](https://github.com/KN4CK3R) for contributing this feature.

## Major Highlights (Security)

### :rocket: Enforce two-factor auth (2FA: TOTP or WebAuthn) ([#34187](https://github.com/go-gitea/gitea/pull/34187))

A global setting `security.TWO_FACTOR_AUTH` has been introduced to require 2FA for all the users. Users login without 2FA can login and visit explore but can NOT read or write to any repositories via API/web.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

![Two Factor Auth global](/demos/34187/1.png)

## Major Highlights (Code)

### :rocket: Add anonymous access support for private/unlisted repositories ([#33127](https://github.com/go-gitea/gitea/pull/33127), [#34051](https://github.com/go-gitea/gitea/pull/34051))

Admins of private repositories are now able to allow limited public access to code, issues and wikis.

![anonymous access for private repositories](/demos/32213/1.png)

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

### :rocket: Add file tree to file view page ([#32721](https://github.com/go-gitea/gitea/pull/32721))

When reviewing the files of a repository, there now is a file tree on the left side of the page.

![File Tree](/demos/32721/1.png)

Thank you to [**@kerwin612**](https://github.com/kerwin612) for contributing this feature.

### :rocket: Add material icons for file list ([#33837](https://github.com/go-gitea/gitea/pull/33837))

Icon themes have been introduced, with the Material icon theme set as the default. To switch to the Basic icon theme, update your app.ini configuration by setting:

```ini
[ui]
; The icons for file list (basic/material)
FILE_ICON_THEME = basic
```

![File Tree](/demos/33837/1.png)

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature, and [**yardenshoham**](https://github.com/yardenshoham) for their work on the inital PR.

### :rocket: Support choose email when creating a commit via web UI ([#33432](https://github.com/go-gitea/gitea/pull/33432))

If users have multiple emails, they are now able to choose which email address to use for committing when updating files via web UI.

![Choose email](/demos/33432/1.png)

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

### :rocket: Add basic auth support to rss/atom feeds ([#33371](https://github.com/go-gitea/gitea/pull/33371))

![Basic Auth rss/atom feeds](/demos/33371/1.png)

Thank you to [**@misthios**](https://github.com/wxiaoguamisthiosng) for contributing this feature.

### :rocket: Private README.md for organization ([#32872](https://github.com/go-gitea/gitea/pull/32872))

We now support two types of organization README repositories: `.profile` and `.profile-private`.

`.profile-private` is the private version, accessible only to organization members.

![private README for organization](/demos/32872/1.png)

Thank you to [**@changchaishi**](https://github.com/changchaishi) for contributing this feature.

### :rocket: Email option to embed images as base64 instead of link ([#32061](https://github.com/go-gitea/gitea/pull/32061))

A new configuration option `mailer.EMBED_ATTACHMENT_IMAGES` has been introduced to allow the images to be embedded.

![Email option to embed images](/demos/32061/1.png)

Thank you to [**@sommerf-lf**](https://github.com/sommerf-lf) for contributing this feature.

## Major Highlights (Issues)

### :rocket: Add sorting by exclusive labels (issue priority) ([#33206](https://github.com/go-gitea/gitea/pull/33206))

When creating or updating exclusive labels, you can specify a `Sort Order` to enable sorting issues by priority based on their assigned exclusive labels.

![Sorting by exclusive labels 1](/demos/33206/1.png)
![Sorting by exclusive labels 2](/demos/33206/2.png)

Thank you to [**@telackey**](https://github.com/telackey) for contributing this feature.

### :rocket: Add sub issue list support ([#32940](https://github.com/go-gitea/gitea/pull/32940))

When listing issues with a markdown syntax in issue, pull request or comment content, the issues will be expanded with titles.

![Sub issue list](/demos/32940/1.png)

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

## Major Highlights (Pull Requests)

### :rocket: Option to delay conflict checking of old pull requests until page view ([#27779](https://github.com/go-gitea/gitea/pull/27779))

`[repository.pull-request] DELAY_CHECK_FOR_INACTIVE_DAYS` is a new setting to delay the mergeable check for pull requests that have been inactive for the specified number of days.

This avoids potentially long delays for big repositories with many pull requests and reduces system load overall when there are many repositories or pull requests.

When viewing the PR, checking will start immediately and the PR merge box will automatically reload when complete. Accessing the PR through the API will also start checking immediately.

![delay conflict checking of pull request](/demos/27779/1.png)

Thank you to [**@brechtvl**](https://github.com/brechtvl) for contributing this feature.

## Major Highlights (Actions)

### :rocket: Artifacts download api for artifact actions v4 [#33510](https://github.com/go-gitea/gitea/pull/33510)

The following API endpoints for retrieving and managing actions artifacts have been added:
- *GET* `/runs/{run}/artifacts`
- *GET* `/artifacts`
- *GET* + *DELETE* `/artifacts/{artifact_id}`
- *GET* `/artifacts/{artifact_id}/zip`

Thank you to [**@ChristopherHX**](https://github.com/ChristopherHX) for contributing this feature.

### :rocket: Actions Runner rest APIs [#33873](https://github.com/go-gitea/gitea/pull/33873)

New API endpoints for generating registration tokens and managing action runners have been added.

Thank you to [**@ChristopherHX**](https://github.com/ChristopherHX) for contributing this feature.

### :rocket: Support workflow event dispatch via API [#33545](https://github.com/go-gitea/gitea/pull/33545)

Now the `workflow_dispatch` event can be triggered via API.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

## Major Highlights (Projects)

### :rocket: Add fullscreen mode as a more efficient operation way to view projects ([#34081](https://github.com/go-gitea/gitea/pull/34081))

A fullscreen mode has been introduced for project kanban view.

![fullscreen of project kanban](/demos/34081/1.gif)

Thank you to [**@kerwin612**](https://github.com/kerwin612) for contributing this feature.

### :rocket: Worktime tracking for the organization level ([#19808](https://github.com/go-gitea/gitea/pull/19808))

A worktime summary tab has been added on organization level, enabling better assessment of spent time for organization admins. It can also filtered by time, repositories, milestones and members.

![worktime summary for the organization](/demos/19808/1.png)

Thank you to [**@kkovacs**](https://github.com/kkovacs) for contributing this feature.

## Major Highlights (Others)

### :rocket: Add cli flags LDAP group configuration ([#33933](https://github.com/go-gitea/gitea/pull/33933))

Add 7 new flags to ldap subcommands corresponding to UI options

Thank you to [**@TheFox0x7**](https://github.com/TheFox0x7) for contributing this feature.

### :rocket: Add middleware for request prioritization ([#33951](https://github.com/go-gitea/gitea/pull/33951))

This adds a middleware for overload protection, that is intended to help protecting against malicious scrapers.

Thank you to [**@bohde**](https://github.com/bohde) for contributing this feature.

## Improved Performance

As more and more big instances are reporting performances issues, some performance improvements have been achieved in this version.

### :rocket: Improve commits list performance to reduce unnecessary database queries ([#33528](https://github.com/go-gitea/gitea/pull/33528))

When listing commits, Gitea attempts to retrieve the actual user based on the commit email. Querying users one by one from the database is inefficient. This PR optimized the process by batch querying users by email, reducing the number of database queries.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this feature.

### :rocket: Cache GPG keys, emails and users when list commits ([#34086](https://github.com/go-gitea/gitea/pull/34086))

When listing commits, some of the commits authors are the same at many situations, but current logic will always fetch GPG keys from database. This PR enables caching GPG keys, emails and users for the context, thus reducing the database queries.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this feature.

### :rocket: Optimize total count of feed when loading activities in user dashboard. ([#33841](https://github.com/go-gitea/gitea/pull/33841))

Two SQL queries were very slow when `action` table has over 5M records.

```
database duration=1.8881s db.sql="SELECT created_unix DIV 900 * 900 AS timestamp, count(user_id) as contributions FROM `action` WHERE user_id=? AND act_user_id=? AND (created_unix > ?) GROUP BY timestamp ORDER BY timestamp"

database duration=1.5408s db.sql="SELECT count(*) FROM `action` WHERE (user_id = ?) AND (is_deleted = ?)"
```

Now the count is being cached for the first loading or when the activities changed.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this feature.

### :rocket: Optimize heatmap query ([#33853](https://github.com/go-gitea/gitea/pull/33853))

When there are over 5M records in `action` table, the heatmap on dashboard was very slow per below SQL.
```
database duration=1.8881s db.sql="SELECT created_unix DIV 900 * 900 AS timestamp, count(user_id) as contributions FROM `action` WHERE user_id=? AND act_user_id=? AND (created_unix > ?) GROUP BY timestamp ORDER BY timestamp"
```

This PR added a new index for `action` table with columns `user_id`, `act_user_id` and `created_unix` so that this query will became about 6 times faster than before.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this feature.

### :rocket: Only use prev and next buttons for pagination on user dashboard ([#33981](https://github.com/go-gitea/gitea/pull/33981))

The pagination on the user dashboard was unnecessary from a UX standpoint and was changed to prev/next buttons. For instances with around `10 million` records in the action table, this option affects how the user dashboard is loaded on first visit.

Thank you to [**@lunny**](https://github.com/lunny) and [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

### :rocket: Add cache for common package queries ([#22491](https://github.com/go-gitea/gitea/pull/22491))

A cache for common package queries was added in `GetPackageDescriptor`. Code which needs to process a list of packages benefits from this change. This skips 350 queries in the package integration tests for example.

Thank you to [**@KN4CK3R**](https://github.com/KN4CK3R) and [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

### :rocket: Move issue pin to an standalone table for querying performance ([#33452](https://github.com/go-gitea/gitea/pull/33452))

Both `is_pull` and `pin_order` were not indexed columns in the database, making the following SQL query have additional load.

```SQL
SELECT `id`, `repo_id`, `index`, `poster_id`, `original_author`, `original_author_id`, `name`, `content`, `content_version`, `milestone_id`, `priority`, `is_closed`, `is_pull`, `num_comments`, `ref`, `pin_order`, `deadline_unix`, `created_unix`, `updated_unix`, `closed_unix`, `is_locked`, `time_estimate` FROM `issue` WHERE (repo_id =?) AND (is_pull = 0) AND (pin_order > 0) ORDER BY pin_order
```

Based on this, this PR migrated all issue and pull request pin data from the `issue` table to the `issue_pin` table. This change benefits larger Gitea instances by improving scalability and performance.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this feature.

### :rocket: Improve pull request list API performance ([#34052](https://github.com/go-gitea/gitea/pull/34052))

The pull request list API was slow, needing to open a git repository for every pull request. Assuming 30 records, there were 30 sub-processes because every repository opened a `git cat-file --batch` sub-process. This PR uses a base git repository to get the head commit id rather than reading it from head repository to avoid opening any head git repository.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this feature.

### :rocket: Refactor Git Attribute & performance optimization ([#34154](https://github.com/go-gitea/gitea/pull/34154))

This PR introduced a performance improvement using `git check-attr --source`, which can be run in a bare git repository so that we don't need to create a git index file. The new parameter needs a git version >= 2.40 . If git version less than 2.40, it will fall back to previous implementation.

Before:
```
git-run duration=1.2684s func.caller=git.(*Repository).readTreeToIndex git.command="/opt/homebrew/bin/git ...global... read-tree 70187f7727d4ddd8282b576ece93ca233e88b19e"
git-run duration=0.1633s func.caller=git.(*CheckAttributeReader).Run git.command="/opt/homebrew/bin/git ...global... check-attr --stdin -z --cached linguist-vendored linguist-generated linguist-documentation linguist-detectable linguist-language gitlab-language"
```

After:
```
git-run duration=0.1271s func.caller=attribute.(*BatchChecker).run git.command="/opt/homebrew/bin/git ...global... check-attr -z --source 70187f7727d4ddd8282b576ece93ca233e88b19e linguist-vendored linguist-generated linguist-language gitlab-language --stdin"
```

Thank you to [**@lunny**](https://github.com/lunny) for contributing this feature.

## Changelog

* BREAKING
  * Make Gitea always use its internal config, ignore `/etc/gitconfig` ([#33076](https://github.com/go-gitea/gitea/pull/33076))
  * Improve log format ([#33814](https://github.com/go-gitea/gitea/pull/33814))
  * Fix markdown render behaviors ([#34122](https://github.com/go-gitea/gitea/pull/34122))
  * Add package version api endpoints ([#34173](https://github.com/go-gitea/gitea/pull/34173))

* FEATURES
  * Enforce two-factor auth (2FA: TOTP or WebAuthn) ([#34187](https://github.com/go-gitea/gitea/pull/34187))
  * Add fullscreen mode as a more efficient operation way to view projects ([#34081](https://github.com/go-gitea/gitea/pull/34081))
  * Add anonymous access support for private/unlisted repositories ([#34051](https://github.com/go-gitea/gitea/pull/34051))
  * Support public code/issue access for private repositories ([#33127](https://github.com/go-gitea/gitea/pull/33127))
  * Add middleware for request prioritization ([#33951](https://github.com/go-gitea/gitea/pull/33951))
  * Add cli flags LDAP group configuration ([#33933](https://github.com/go-gitea/gitea/pull/33933))
  * Add file tree to file view page ([#32721](https://github.com/go-gitea/gitea/pull/32721))
  * Add material icons for file list ([#33837](https://github.com/go-gitea/gitea/pull/33837))
  * Artifacts download api for artifact actions v4 ([#33510](https://github.com/go-gitea/gitea/pull/33510))
  * Support choose email when creating a commit via web UI ([#33432](https://github.com/go-gitea/gitea/pull/33432))
  * Add basic auth support to rss/atom feeds ([#33371](https://github.com/go-gitea/gitea/pull/33371))
  * Add sorting by exclusive labels (issue priority) ([#33206](https://github.com/go-gitea/gitea/pull/33206))
  * Add sub issue list support ([#32940](https://github.com/go-gitea/gitea/pull/32940))
  * Private README.md for organization ([#32872](https://github.com/go-gitea/gitea/pull/32872))
  * Email option to embed images as base64 instead of link ([#32061](https://github.com/go-gitea/gitea/pull/32061))
  * Option to delay conflict checking of old pull requests until page view ([#27779](https://github.com/go-gitea/gitea/pull/27779))
  * Worktime tracking for the organization level ([#19808](https://github.com/go-gitea/gitea/pull/19808))

* PERFORMANCE
  * Add cache for common package queries ([#22491](https://github.com/go-gitea/gitea/pull/22491))
  * Move issue pin to an standalone table for querying performance ([#33452](https://github.com/go-gitea/gitea/pull/33452))
  * Improve commits list performance to reduce unnecessary database queries ([#33528](https://github.com/go-gitea/gitea/pull/33528))
  * Optimize total count of feed when loading activities in user dashboard. ([#33841](https://github.com/go-gitea/gitea/pull/33841))
  * Optimize heatmap query ([#33853](https://github.com/go-gitea/gitea/pull/33853))
  * Only use prev and next buttons for pagination on user dashboard ([#33981](https://github.com/go-gitea/gitea/pull/33981))
  * Improve pull request list API performance ([#34052](https://github.com/go-gitea/gitea/pull/34052))
  * Cache GPG keys, emails and users when list commits ([#34086](https://github.com/go-gitea/gitea/pull/34086))
  * Refactor Git Attribute & performance optimization ([#34154](https://github.com/go-gitea/gitea/pull/34154))
  * Performance optimization for tags synchronization ([#34355](https://github.com/go-gitea/gitea/pull/34355)) #34522

* ENHANCEMENTS
  * Code
    * Display when a release attachment was uploaded ([#34261](https://github.com/go-gitea/gitea/pull/34261))
    * Support creating relative link to raw path in markdown ([#34105](https://github.com/go-gitea/gitea/pull/34105))
    * Improve code block readability and isolate copy button ([#34009](https://github.com/go-gitea/gitea/pull/34009))
    * Improve repository commit view ([#33877](https://github.com/go-gitea/gitea/pull/33877))
    * Full-file syntax highlighting for diff pages ([#33766](https://github.com/go-gitea/gitea/pull/33766))
    * Clone repository with Tea CLI ([#33725](https://github.com/go-gitea/gitea/pull/33725))
    * Improve sync fork behavior ([#33319](https://github.com/go-gitea/gitea/pull/33319))
    * Make git clone URL could use current signed-in user ([#33091](https://github.com/go-gitea/gitea/pull/33091))
    * Add submodule diff links ([#33097](https://github.com/go-gitea/gitea/pull/33097))
    * Link to tree views of submodules if possible ([#33424](https://github.com/go-gitea/gitea/pull/33424))
    * Only keep popular licenses ([#33832](https://github.com/go-gitea/gitea/pull/33832))
    * De-emphasize signed commits ([#31160](https://github.com/go-gitea/gitea/pull/31160))

  * Actions
    * Add flat-square action badge style ([#34062](https://github.com/go-gitea/gitea/pull/34062))
    * Update action status badge layout ([#34018](https://github.com/go-gitea/gitea/pull/34018))
    * Download actions job logs from API ([#33858](https://github.com/go-gitea/gitea/pull/33858))
    * Always show the "rerun" button for action jobs ([#33692](https://github.com/go-gitea/gitea/pull/33692))
    * Add auto-expanding running actions step ([#30058](https://github.com/go-gitea/gitea/pull/30058))
    * Update status check for all supported on.pull_request.types in Gitea ([#33117](https://github.com/go-gitea/gitea/pull/33117))
    * Workflow_dispatch use workflow from trigger branch ([#33098](https://github.com/go-gitea/gitea/pull/33098))
    * Add action auto-scroll ([#30057](https://github.com/go-gitea/gitea/pull/30057))
    * Add workflow_job webhook ([#33694](https://github.com/go-gitea/gitea/pull/33694))
    * Add a button editing action secret ([#34462](https://github.com/go-gitea/gitea/pull/34462))

  * Pull Request
    * Auto expand "New PR" form ([#33971](https://github.com/go-gitea/gitea/pull/33971))
    * Mark parent directory as viewed when all files are viewed ([#33958](https://github.com/go-gitea/gitea/pull/33958))
    * Show info about maintainers are allowed to edit a PR ([#33738](https://github.com/go-gitea/gitea/pull/33738))
    * Automerge supports deleting branch automatically after merging ([#32343](https://github.com/go-gitea/gitea/pull/32343))
    * Add additional command hints for PowerShell & CMD ([#33548](https://github.com/go-gitea/gitea/pull/33548))

  * Issues
    * Allow filtering issues by any assignee ([#33343](https://github.com/go-gitea/gitea/pull/33343))
    * Show warning on navigation if currently editing comment or title ([#32920](https://github.com/go-gitea/gitea/pull/32920))
    * Make tracked time representation display as hours ([#33315](https://github.com/go-gitea/gitea/pull/33315))
    * Add No Results Prompt Message on Issue List Page ([#33699](https://github.com/go-gitea/gitea/pull/33699))
    * Add sort option recentclose for issues and pulls ([#34525](https://github.com/go-gitea/gitea/pull/34525)) #34539

  * Packages
    * Link to nuget dependencies ([#26554](https://github.com/go-gitea/gitea/pull/26554))
    * Add composor source field ([#33502](https://github.com/go-gitea/gitea/pull/33502))

  * Administration
    * Improve navbar: add "admin" tip, add "active" style ([#32927](https://github.com/go-gitea/gitea/pull/32927))
    * Add a option "--user-type bot" to admin user create, improve role display ([#27885](https://github.com/go-gitea/gitea/pull/27885))
    * Improve admin user view page ([#33735](https://github.com/go-gitea/gitea/pull/33735))
    * Support performance trace ([#32973](https://github.com/go-gitea/gitea/pull/32973))
    * Change pprof labels to be prometheus compatible ([#32865](https://github.com/go-gitea/gitea/pull/32865))
    * Allow admins and org owners to change org member public status ([#28294](https://github.com/go-gitea/gitea/pull/28294))
    * Optimize the installation page ([#32994](https://github.com/go-gitea/gitea/pull/32994))
    * Make public URL generation configurable ([#34250](https://github.com/go-gitea/gitea/pull/34250))
    * Add a --fullname arg to gitea admin user create. ([#34241](https://github.com/go-gitea/gitea/pull/34241))

  * Others
    * Improve oauth2 error handling ([#33969](https://github.com/go-gitea/gitea/pull/33969))
    * Fail mirroring more gracefully ([#34002](https://github.com/go-gitea/gitea/pull/34002))
    * Align User Details Page Header Layout with Design Specifications ([#34192](https://github.com/go-gitea/gitea/pull/34192))
    * Webhook add X-Gitea-Hook-Installation-Target-Type Header ([#33752](https://github.com/go-gitea/gitea/pull/33752))
    * Optimize the dashboard ([#32990](https://github.com/go-gitea/gitea/pull/32990))
    * Improve button layout on small screens ([#33633](https://github.com/go-gitea/gitea/pull/33633))
    * Add cropping support when modifying the user/org/repo avatar ([#33498](https://github.com/go-gitea/gitea/pull/33498))
    * Make ROOT_URL support using request Host header ([#32564](https://github.com/go-gitea/gitea/pull/32564))
    * Add `show more` organizations icon in user's profile ([#32986](https://github.com/go-gitea/gitea/pull/32986))
    * Introduce `--page-space-bottom` at 64px ([#30692](https://github.com/go-gitea/gitea/pull/30692))
    * Improve theme display ([#30671](https://github.com/go-gitea/gitea/pull/30671))
    * Add alphabetical project sorting ([#33504](https://github.com/go-gitea/gitea/pull/33504))
    * Add global lock for migrations to make upgrade more safe with multiple replications ([#33706](https://github.com/go-gitea/gitea/pull/33706))
    * Add descriptions for private repo public access settings and improve the UI ([#34057](https://github.com/go-gitea/gitea/pull/34057))

* API
  * Actions Runner rest api ([#33873](https://github.com/go-gitea/gitea/pull/33873))
  * Inclusion of rename organization api ([#33303](https://github.com/go-gitea/gitea/pull/33303))
  * Add API to support link package to repository and unlink it ([#33481](https://github.com/go-gitea/gitea/pull/33481))
  * Add API endpoint to request contents of multiple files simultaniously ([#34139](https://github.com/go-gitea/gitea/pull/34139))
  * Actions artifacts API list/download check status upload confirmed ([#34273](https://github.com/go-gitea/gitea/pull/34273))
  * Add API routes to lock and unlock issues ([#34165](https://github.com/go-gitea/gitea/pull/34165))
  * Fix some user name usages ([#33689](https://github.com/go-gitea/gitea/pull/33689))
  * Allow filtering /repos/\{owner\}/\{repo\}/pulls by target base branch queryparam ([#33684](https://github.com/go-gitea/gitea/pull/33684))
  * Improve swagger generation ([#33664](https://github.com/go-gitea/gitea/pull/33664))
  * Support Ephemeral action runners ([#33570](https://github.com/go-gitea/gitea/pull/33570))
  * Support workflow event dispatch via API ([#33545](https://github.com/go-gitea/gitea/pull/33545))
  * Support workflow event dispatch via API ([#32059](https://github.com/go-gitea/gitea/pull/32059))
  * Added Description Field for Secrets and Variables  ([#33526](https://github.com/go-gitea/gitea/pull/33526))
  * Reject star-related requests if stars are disabled ([#33208](https://github.com/go-gitea/gitea/pull/33208))
  * Let API create and edit system webhooks, attempt 2 ([#33180](https://github.com/go-gitea/gitea/pull/33180))
  * Use `Project-URL` metadata field to get a PyPI package's homepage URL ([#33089](https://github.com/go-gitea/gitea/pull/33089))
  * Add `last_committer_date` and `last_author_date` for file contents API ([#32921](https://github.com/go-gitea/gitea/pull/32921))

* REFACTORS
  * Remove context from git struct ([#33793](https://github.com/go-gitea/gitea/pull/33793))
  * Refactor admin/common.ts ([#33788](https://github.com/go-gitea/gitea/pull/33788))
  * Refactor repo-settings.ts ([#33785](https://github.com/go-gitea/gitea/pull/33785))
  * Refactor repo-issue.ts ([#33784](https://github.com/go-gitea/gitea/pull/33784))
  * Small refactor to reduce unnecessary database queries and remove duplicated functions ([#33779](https://github.com/go-gitea/gitea/pull/33779))
  * Refactor initRepoBranchTagSelector to use new init framework ([#33776](https://github.com/go-gitea/gitea/pull/33776))
  * Refactor buttons to use new init framework ([#33774](https://github.com/go-gitea/gitea/pull/33774))
  * Refactor markup and pdf-viewer to use new init framework ([#33772](https://github.com/go-gitea/gitea/pull/33772))
  * Refactor error system ([#33771](https://github.com/go-gitea/gitea/pull/33771))
  * Refactor mail code ([#33768](https://github.com/go-gitea/gitea/pull/33768))
  * Update TypeScript types ([#33799](https://github.com/go-gitea/gitea/pull/33799))
  * Refactor older tests to use testify ([#33140](https://github.com/go-gitea/gitea/pull/33140))
  * Move notifywatch to service layer ([#33825](https://github.com/go-gitea/gitea/pull/33825))
  * Decouple context from repository related structs ([#33823](https://github.com/go-gitea/gitea/pull/33823))
  * Remove context from mail struct ([#33811](https://github.com/go-gitea/gitea/pull/33811))
  * Refactor dropdown ellipsis ([#34123](https://github.com/go-gitea/gitea/pull/34123))
  * Refactor functions to reduce repopath expose ([#33892](https://github.com/go-gitea/gitea/pull/33892))
  * Refactor repo-diff.ts ([#33746](https://github.com/go-gitea/gitea/pull/33746))
  * Refactor web route handler ([#33488](https://github.com/go-gitea/gitea/pull/33488))
  * Refactor user & avatar ([#33433](https://github.com/go-gitea/gitea/pull/33433))
  * Refactor user package ([#33423](https://github.com/go-gitea/gitea/pull/33423))
  * Refactor decouple context from migration structs ([#33399](https://github.com/go-gitea/gitea/pull/33399))
  * Refactor context flash msg and global variables ([#33375](https://github.com/go-gitea/gitea/pull/33375))
  * Refactor response writer & access logger ([#33323](https://github.com/go-gitea/gitea/pull/33323))
  * Refactor ref type ([#33242](https://github.com/go-gitea/gitea/pull/33242))
  * Refactor context repository ([#33202](https://github.com/go-gitea/gitea/pull/33202))
  * Refactor legacy JS ([#33115](https://github.com/go-gitea/gitea/pull/33115))
  * Refactor legacy line-number and scroll code ([#33094](https://github.com/go-gitea/gitea/pull/33094))
  * Refactor env var related code ([#33075](https://github.com/go-gitea/gitea/pull/33075))
  * Move SetMerged to service layer ([#33045](https://github.com/go-gitea/gitea/pull/33045))
  * Merge updatecommentattachment functions ([#33044](https://github.com/go-gitea/gitea/pull/33044))
  * Refactor pull-request compare&create page ([#33071](https://github.com/go-gitea/gitea/pull/33071))
  * Refactor repo-new.ts ([#33070](https://github.com/go-gitea/gitea/pull/33070))
  * Refactor pagination ([#33037](https://github.com/go-gitea/gitea/pull/33037))
  * Refactor tests ([#33021](https://github.com/go-gitea/gitea/pull/33021))
  * Refactor markup render to fix various path problems ([#34114](https://github.com/go-gitea/gitea/pull/34114))
  * Refactor Branch struct in package modules/git ([#33980](https://github.com/go-gitea/gitea/pull/33980))
  * Don't create duplicated functions for code repositories and wiki repositories ([#33924](https://github.com/go-gitea/gitea/pull/33924))
  * Move git references checking to gitrepo packages to reduce expose of repository path ([#33891](https://github.com/go-gitea/gitea/pull/33891))
  * Refactor cache-control ([#33861](https://github.com/go-gitea/gitea/pull/33861))
  * Decouple diff stats query from actual diffing ([#33810](https://github.com/go-gitea/gitea/pull/33810))
  * Move part of updating protected branch logic to service layer ([#33742](https://github.com/go-gitea/gitea/pull/33742))
  * Decouple Batch from git.Repository to simplify usage without requiring the creation of a Repository struct. ([#34001](https://github.com/go-gitea/gitea/pull/34001))
  * Refactor tmpl and blob_excerpt ([#32967](https://github.com/go-gitea/gitea/pull/32967))
  * Refactor template & test related code ([#32938](https://github.com/go-gitea/gitea/pull/32938))
  * Refactor db package and remove unnecessary `DumpTables` ([#32930](https://github.com/go-gitea/gitea/pull/32930))
  * Refactor pprof labels and process desc ([#32909](https://github.com/go-gitea/gitea/pull/32909))
  * Refactor repo-projects.ts ([#32892](https://github.com/go-gitea/gitea/pull/32892))
  * Refactor getpatch/getdiff functions and remove unnecessary fallback ([#32817](https://github.com/go-gitea/gitea/pull/32817))
  * Uniform all temporary directories and allow customizing temp path ([#32352](https://github.com/go-gitea/gitea/pull/32352))
  * Remove context from retry downloader ([#33871](https://github.com/go-gitea/gitea/pull/33871))
  * Refactor global init code and add more comments ([#33755](https://github.com/go-gitea/gitea/pull/33755))
  * Remove some unnecessary template helpers ([#33069](https://github.com/go-gitea/gitea/pull/33069))
  * Move and rename UpdateRepository ([#34136](https://github.com/go-gitea/gitea/pull/34136))
  * Move hooks function to gitrepo and reduce expose repopath ([#33890](https://github.com/go-gitea/gitea/pull/33890))
  * Add abstraction layer to delete repository from disk ([#33879](https://github.com/go-gitea/gitea/pull/33879))
  * Add abstraction layer to check if the repository exists on disk ([#33874](https://github.com/go-gitea/gitea/pull/33874))
  * Move ParseCommitWithSSHSignature to service layer ([#34087](https://github.com/go-gitea/gitea/pull/34087))
  * Move duplicated functions ([#33977](https://github.com/go-gitea/gitea/pull/33977))
  * Extract code to their own functions for push update ([#33944](https://github.com/go-gitea/gitea/pull/33944))
  * Move gitgraph from modules to services layer ([#33527](https://github.com/go-gitea/gitea/pull/33527))
  * Move commits signature and verify functions to service layers ([#33605](https://github.com/go-gitea/gitea/pull/33605))
  * Use `CloseIssue` and `ReopenIssue` instead of `ChangeStatus` ([#32467](https://github.com/go-gitea/gitea/pull/32467))
  * Refactor arch route handlers ([#32993](https://github.com/go-gitea/gitea/pull/32993))
  * Refactor "string truncate" ([#32984](https://github.com/go-gitea/gitea/pull/32984))
  * Refactor arch route handlers ([#32972](https://github.com/go-gitea/gitea/pull/32972))
  * Clarify path param naming ([#32969](https://github.com/go-gitea/gitea/pull/32969))
  * Refactor request context ([#32956](https://github.com/go-gitea/gitea/pull/32956))
  * Move some errors to their own sub packages ([#32880](https://github.com/go-gitea/gitea/pull/32880))
  * Move RepoTransfer from models to models/repo sub package ([#32506](https://github.com/go-gitea/gitea/pull/32506))
  * Move delete deploy keys into service layer ([#32201](https://github.com/go-gitea/gitea/pull/32201))
  * Refactor webhook events ([#33337](https://github.com/go-gitea/gitea/pull/33337))
  * Move some Actions related functions from `routers` to `services` ([#33280](https://github.com/go-gitea/gitea/pull/33280))
  * Refactor RefName ([#33234](https://github.com/go-gitea/gitea/pull/33234))
  * Refactor context RefName and RepoAssignment ([#33226](https://github.com/go-gitea/gitea/pull/33226))
  * Refactor repository transfer ([#33211](https://github.com/go-gitea/gitea/pull/33211))
  * Refactor error system ([#33626](https://github.com/go-gitea/gitea/pull/33626))
  * Refactor error system ([#33610](https://github.com/go-gitea/gitea/pull/33610))
  * Refactor package (routes and error handling, npm peer dependency) ([#33111](https://github.com/go-gitea/gitea/pull/33111))
  * Use test context in tests and new loop system in benchmarks ([#33648](https://github.com/go-gitea/gitea/pull/33648))
  * Some small refactors ([#33144](https://github.com/go-gitea/gitea/pull/33144))
  * Simplify context ref name ([#33267](https://github.com/go-gitea/gitea/pull/33267))

* BUGFIXES
  * Fix some dropdown problems on the issue sidebar ([#34308](https://github.com/go-gitea/gitea/pull/34308)) #34327
  * Do not return archive download URLs in API if downloads are disabled ([#34324](https://github.com/go-gitea/gitea/pull/34324)) #34338
  * Fix LFS files being editable in web UI ([#34356](https://github.com/go-gitea/gitea/pull/34356)) #34362
  * Fix only text/* being viewable in web UI ([#34374](https://github.com/go-gitea/gitea/pull/34374)) #34378
  * Fix LFS file not stored in LFS when uploaded/edited via API or web UI ([#34367](https://github.com/go-gitea/gitea/pull/34367))
  * Grey out expired artifact on Artifacts list ([#34314](https://github.com/go-gitea/gitea/pull/34314)) #34404
  * Fix incorrect divergence cache after switching default branch ([#34370](https://github.com/go-gitea/gitea/pull/34370)) #34406
  * Refactor commit message rendering and fix bugs ([#34412](https://github.com/go-gitea/gitea/pull/34412)) #34414
  * Merge and tweak markup editor expander CSS ([#34409](https://github.com/go-gitea/gitea/pull/34409)) #34415
  * Fix GetUsersByEmails ([#34423](https://github.com/go-gitea/gitea/pull/34423)) #34425
  * Only git operations should update last changed of a repository ([#34388](https://github.com/go-gitea/gitea/pull/34388)) #34427
  * Fix comment textarea scroll issue in Firefox ([#34438](https://github.com/go-gitea/gitea/pull/34438)) #34446
  * Fix repo broken check ([#34444](https://github.com/go-gitea/gitea/pull/34444)) #34452
  * Fix remove org user failure on mssql ([#34449](https://github.com/go-gitea/gitea/pull/34449)) #34453
  * Fix Workflow run Not Found page ([#34459](https://github.com/go-gitea/gitea/pull/34459)) #34466
  * When updating comment, if the content is the same, just return and not update the database ([#34422](https://github.com/go-gitea/gitea/pull/34422)) #34464
  * Fix project board view ([#34470](https://github.com/go-gitea/gitea/pull/34470)) #34475
  * Fix get / delete runner to use consistent http 404 and 500 status ([#34480](https://github.com/go-gitea/gitea/pull/34480)) #34488
  * Fix url validation in webhook add/edit API ([#34492](https://github.com/go-gitea/gitea/pull/34492)) #34496
  * Fix edithook api can not update package, status and workflow_job events ([#34495](https://github.com/go-gitea/gitea/pull/34495)) #34499
  * Fix ephemeral runner deletion ([#34447](https://github.com/go-gitea/gitea/pull/34447)) #34513
  * Don't display error log when .git-blame-ignore-revs doesn't exist ([#34457](https://github.com/go-gitea/gitea/pull/34457))
  * Only allow admins to rename default/protected branches ([#33276](https://github.com/go-gitea/gitea/pull/33276))
  * Improve "lock conversation" UI ([#34207](https://github.com/go-gitea/gitea/pull/34207))
  * Fix incorrect file links ([#34189](https://github.com/go-gitea/gitea/pull/34189))
  * Optimize Overflow Menu ([#34183](https://github.com/go-gitea/gitea/pull/34183))
  * Check user/org repo limit instead of doer ([#34147](https://github.com/go-gitea/gitea/pull/34147))
  * Make markdown render match GitHub's behavior ([#34129](https://github.com/go-gitea/gitea/pull/34129))
  * Fix team permission ([#34128](https://github.com/go-gitea/gitea/pull/34128))
  * Correctly handle submodule view and avoid throwing 500 error ([#34121](https://github.com/go-gitea/gitea/pull/34121))
  * Fix users being able bypass limits with repo transfers ([#34031](https://github.com/go-gitea/gitea/pull/34031))
  * Avoid creating unnecessary temporary cat file sub process ([#33942](https://github.com/go-gitea/gitea/pull/33942))
  * Refactor organization menu ([#33928](https://github.com/go-gitea/gitea/pull/33928))
  * Fix various Fomantic UI and htmx problems ([#33851](https://github.com/go-gitea/gitea/pull/33851))
  * Fix 500 error when error occurred in migration page ([#33256](https://github.com/go-gitea/gitea/pull/33256))
  * Validate that the tag doesn't exist when creating a tag via the web ([#33241](https://github.com/go-gitea/gitea/pull/33241))
  * Add missed transaction on setmerged ([#33079](https://github.com/go-gitea/gitea/pull/33079))
  * Rework create/fork/adopt/generate repository to make sure resources will be cleanup once failed ([#31035](https://github.com/go-gitea/gitea/pull/31035))
  * Valid email address should only start with alphanumeric ([#28174](https://github.com/go-gitea/gitea/pull/28174))
  * Fix webhook url ([#34186](https://github.com/go-gitea/gitea/pull/34186))
  * Fix "toAbsoluteLocaleDate" test when system locale is not en-US ([#33939](https://github.com/go-gitea/gitea/pull/33939))
  * Fix file name could not be searched if the file was not a text file when using the Bleve indexer ([#33959](https://github.com/go-gitea/gitea/pull/33959))
  * Fix cannot delete runners via the modal dialog ([#33895](https://github.com/go-gitea/gitea/pull/33895))
  * Fix unpin hint on the pinned pull requests ([#33207](https://github.com/go-gitea/gitea/pull/33207))
  * Fix parentCommit invalid memory address or nil pointer dereference. ([#33204](https://github.com/go-gitea/gitea/pull/33204))
  * Fix comment header padding ([#33377](https://github.com/go-gitea/gitea/pull/33377))
  * Fix some migration and repo name problems ([#33986](https://github.com/go-gitea/gitea/pull/33986))
  * Fix various trivial frontend problems ([#34263](https://github.com/go-gitea/gitea/pull/34263))
  * Fix Set Email Preference dropdown and button placement ([#34255](https://github.com/go-gitea/gitea/pull/34255))
  * Fix quoted replies incorrectly render user input as part of the quote ([#34216](https://github.com/go-gitea/gitea/pull/34216))
  * Fix button alignments and remove unnecessary styles ([#34206](https://github.com/go-gitea/gitea/pull/34206))
  * Restore form inputs on organization create error ([#34201](https://github.com/go-gitea/gitea/pull/34201))
  * Try to fix ACME (3rd) ([#33807](https://github.com/go-gitea/gitea/pull/33807))
  * Fix incorrect ref "blob" ([#33240](https://github.com/go-gitea/gitea/pull/33240))
  * Fix dynamic content loading init problem ([#33748](https://github.com/go-gitea/gitea/pull/33748))
  * Fix git empty check and HEAD request ([#33690](https://github.com/go-gitea/gitea/pull/33690))
  * Fix Untranslated Text on Actions Page ([#33635](https://github.com/go-gitea/gitea/pull/33635))
  * Fix issue label delete incorrect labels webhook payload ([#34575](https://github.com/go-gitea/gitea/pull/34575))
  * Fix incorrect page navigation with up and down arrow on last item of dashboard repos ([#34570](https://github.com/go-gitea/gitea/pull/34570))
  * Fix/improve avatar sync from LDAP ([#34573](https://github.com/go-gitea/gitea/pull/34573))
  * Fix some trivial problems ([#34579](https://github.com/go-gitea/gitea/pull/34579))
  * Retain issue sort type when a keyword search is introduced ([#34559](https://github.com/go-gitea/gitea/pull/34559))
  * Always use an empty line to separate the commit message and trailer ([#34512](https://github.com/go-gitea/gitea/pull/34512))
  * Fix line-button issue after file selection in file tree ([#34574](https://github.com/go-gitea/gitea/pull/34574))
  * Fix doctor deleting orphaned issues attachments ([#34142](https://github.com/go-gitea/gitea/pull/34142))
  * Add webhook assigning test and fix possible bug ([#34420](https://github.com/go-gitea/gitea/pull/34420))
  * Fix possible nil description of pull request when migrating from CodeCommit ([#34541](https://github.com/go-gitea/gitea/pull/34541))
  * Refactor commit reader ([#34542](https://github.com/go-gitea/gitea/pull/34542))
  * Fix possible pull request broken when leave the page immediately after clicking the update button #34509

* MISC

  * Make pull request and issue history more compact ([#34588](https://github.com/go-gitea/gitea/pull/34588))
  * Run integration tests against postgres 14 ([#34514](https://github.com/go-gitea/gitea/pull/34514)) #34536
  * Enable addtional linters ([#34085](https://github.com/go-gitea/gitea/pull/34085))
  * Enable testifylint rules ([#34075](https://github.com/go-gitea/gitea/pull/34075))
  * Enable staticcheck QFxxxx rules ([#34064](https://github.com/go-gitea/gitea/pull/34064))
  * Improve Actions test ([#32883](https://github.com/go-gitea/gitea/pull/32883))
  * Drop fomantic build ([#33845](https://github.com/go-gitea/gitea/pull/33845))
  * Go1.24 ([#33562](https://github.com/go-gitea/gitea/pull/33562))
  * Run yamllint with strict mode, fix issue ([#33551](https://github.com/go-gitea/gitea/pull/33551))
  * Disable cron task to update license ([#33486](https://github.com/go-gitea/gitea/pull/33486))
  * Optimize makefile help information generation ([#33390](https://github.com/go-gitea/gitea/pull/33390))
  * Convert github.com/xanzy/go-gitlab into gitlab.com/gitlab-org/api/client-go ([#33126](https://github.com/go-gitea/gitea/pull/33126))
  * Add missed changelogs ([#33649](https://github.com/go-gitea/gitea/pull/33649))
  * Update .changelog file to add performance label group ([#33472](https://github.com/go-gitea/gitea/pull/33472))
  * Add missing POPULATE_SQUASH_COMMENT_WITH_COMMIT_MESSAGES in app.example.ini ([#33363](https://github.com/go-gitea/gitea/pull/33363))
  * Update README screenshots ([#33347](https://github.com/go-gitea/gitea/pull/33347))
  * Update unrs-resolver ([#34279](https://github.com/go-gitea/gitea/pull/34279))
  * Update go&js dependencies ([#34262](https://github.com/go-gitea/gitea/pull/34262))
  * Optimize the calling code of queryElems ([#34235](https://github.com/go-gitea/gitea/pull/34235))
  * Update protected_branch.tmpl ([#34193](https://github.com/go-gitea/gitea/pull/34193))
  * Feat/optimize span svg layout ([#34185](https://github.com/go-gitea/gitea/pull/34185))
  * Set MERMAID_MAX_SOURCE_CHARACTERS to 50000 ([#34152](https://github.com/go-gitea/gitea/pull/34152))
  * Update JS and PY deps ([#34143](https://github.com/go-gitea/gitea/pull/34143))
  * Add Chinese translations for README files ([#34132](https://github.com/go-gitea/gitea/pull/34132))
  * Use `overflow-wrap: anywhere` to replace `word-break: break-all` ([#34126](https://github.com/go-gitea/gitea/pull/34126))
  * Clarify ownership in password change error messages ([#34092](https://github.com/go-gitea/gitea/pull/34092))
  * Add toggleClass function in dom.ts ([#34063](https://github.com/go-gitea/gitea/pull/34063))
  * Update to golangci-lint v2 ([#34054](https://github.com/go-gitea/gitea/pull/34054))
  * Update Makefile test comments ([#34013](https://github.com/go-gitea/gitea/pull/34013))
  * Update go mod dependencies ([#33988](https://github.com/go-gitea/gitea/pull/33988))
  * Use filepath.Join instead of path.Join for file system file operations ([#33978](https://github.com/go-gitea/gitea/pull/33978))
  * Prepare common tmpl functions in a middleware ([#33957](https://github.com/go-gitea/gitea/pull/33957))
  * Remove unused or abused styles ([#33918](https://github.com/go-gitea/gitea/pull/33918))
  * Update JS and PY deps, misc tweaks ([#33903](https://github.com/go-gitea/gitea/pull/33903))
  * Try to figure out attribute checker problem ([#33901](https://github.com/go-gitea/gitea/pull/33901))
  * Add lock for a repository pull mirror ([#33876](https://github.com/go-gitea/gitea/pull/33876))
  * Fine tune push mirror UI ([#33866](https://github.com/go-gitea/gitea/pull/33866))
  * Improve issue & code search ([#33860](https://github.com/go-gitea/gitea/pull/33860))
  * Use pullrequestlist instead of []*pullrequest ([#33765](https://github.com/go-gitea/gitea/pull/33765))
  * Upgrade act to 0.261.4 and actions-proto-go to v0.4.1 ([#33760](https://github.com/go-gitea/gitea/pull/33760))
  * Align sidebar gears to the right ([#33721](https://github.com/go-gitea/gitea/pull/33721))
  * Update Go dependencies (skip blevesearch, meilisearch) ([#33655](https://github.com/go-gitea/gitea/pull/33655))
  * Add migrations and doctor fixes ([#33556](https://github.com/go-gitea/gitea/pull/33556))
  * Remove "class-name" from svg icon ([#33540](https://github.com/go-gitea/gitea/pull/33540))
  * Update MAINTAINERS ([#33529](https://github.com/go-gitea/gitea/pull/33529))
  * Add "No data available" display when list is empty ([#33517](https://github.com/go-gitea/gitea/pull/33517))
  * Use `git diff-tree` for `DiffFileTree` on diff pages ([#33514](https://github.com/go-gitea/gitea/pull/33514))
  * Give organisation members access to organisation feeds ([#33508](https://github.com/go-gitea/gitea/pull/33508))
  * Update feishu icon ([#33470](https://github.com/go-gitea/gitea/pull/33470))
  * Hide/disable unusable UI elements when a repository is archived ([#33459](https://github.com/go-gitea/gitea/pull/33459))
  * Update `@github/text-expander-element` to 2.9.0 ([#33435](https://github.com/go-gitea/gitea/pull/33435))
  * Do not access GitRepo when a repo is being created ([#33380](https://github.com/go-gitea/gitea/pull/33380))
  * Fix incorrect ref usages ([#33301](https://github.com/go-gitea/gitea/pull/33301))
  * Prepare for support performance trace ([#33286](https://github.com/go-gitea/gitea/pull/33286))
  * Enable Typescript `noImplicitThis` ([#33250](https://github.com/go-gitea/gitea/pull/33250))
  * Remove unused CSS styles and move some styles to proper files ([#33217](https://github.com/go-gitea/gitea/pull/33217))
  * Add .run to gitignore ([#33175](https://github.com/go-gitea/gitea/pull/33175))
  * Fix typo in gitea downloader test and add missing codebase in `ToGitServiceType` ([#33146](https://github.com/go-gitea/gitea/pull/33146))
  * Remove extended glob pattern from branch protection UI ([#33125](https://github.com/go-gitea/gitea/pull/33125))
  * Clean up legacy form CSS styles ([#33081](https://github.com/go-gitea/gitea/pull/33081))
  * Unset XDG_HOME_CONFIG as gitea manages configuration locations ([#33067](https://github.com/go-gitea/gitea/pull/33067))
  * Add IntelliJ Gateway's .uuid to gitignore ([#33052](https://github.com/go-gitea/gitea/pull/33052))
  * User facing messages for AGit errors ([#33012](https://github.com/go-gitea/gitea/pull/33012))
  * Always show assignees on right ([#33006](https://github.com/go-gitea/gitea/pull/33006))
  * Fix eslint ([#33002](https://github.com/go-gitea/gitea/pull/33002))
  * Update JS dependencies ([#32914](https://github.com/go-gitea/gitea/pull/32914))
  * Bump x/net ([#32896](https://github.com/go-gitea/gitea/pull/32896)) ([#32900](https://github.com/go-gitea/gitea/pull/32900))

## Contributors for this release

* [@6543](https://github.com/6543)
* [@BlenderDefender](https://github.com/BlenderDefender)
* [@ChristopherHX](https://github.com/ChristopherHX)
* [@DrMaxNix](https://github.com/DrMaxNix)
* [@ExplodingDragon](https://github.com/ExplodingDragon)
* [@HeCorr](https://github.com/HeCorr)
* [@GWDx](https://github.com/GWDx)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@LaoQi](https://github.com/LaoQi)
* [@ManInDark](https://github.com/ManInDark)
* [@MarkusAmshove](https://github.com/MarkusAmshove)
* [@McRaeAlex](https://github.com/McRaeAlex)
* [@Mik4sa](https://github.com/Mik4sa)
* [@Mopcho](https://github.com/Mopcho)
* [@NorthRealm](https://github.com/NorthRealm)
* [@SimonPistache](https://github.com/SimonPistache)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@TimsDevCorner](https://github.com/TimsDevCorner)
* [@Tomeamis](https://github.com/Tomeamis)
* [@Vinoth-kumar-Ganesan](https://github.com/Vinoth-kumar-Ganesan)
* [@YaFou](https://github.com/YaFou)
* [@Zettat123](https://github.com/Zettat123)
* [@a1012112796](https://github.com/a1012112796)
* [@a1994sc](https://github.com/a1994sc)
* [@aindriu80](https://github.com/aindriu80)
* [@appleboy](https://github.com/appleboy)
* [@arifer612](https://github.com/arifer612)
* [@asvanberg](https://github.com/asvanberg)
* [@badhezi](https://github.com/badhezi)
* [@bencurio](https://github.com/bencurio)
* [@bigdeejay](https://github.com/bigdeejay)
* [@bohde](https://github.com/bohde)
* [@brechtvl](https://github.com/brechtvl)
* [@bsofiato](https://github.com/bsofiato)
* [@bytedream](https://github.com/bytedream)
* [@cassiozareck](https://github.com/cassiozareck)
* [@changchaishi](https://github.com/changchaishi)
* [@charles7668](https://github.com/charles7668)
* [@darren](https://github.com/darren)
* [@dek5troza](https://github.com/dek5troza)
* [@denyskon](https://github.com/denyskon)
* [@dfirebaugh](https://github.com/dfirebaugh)
* [@dianaStr7](https://github.com/dianaStr7)
* [@eeyrjmr](https://github.com/eeyrjmr)
* [@ericLemanissier](https://github.com/ericLemanissier)
* [@ghost](https://github.com/ghost)
* [@gsvd](https://github.com/gsvd)
* [@hakonharnes](https://github.com/hakonharnes)
* [@harryvince](https://github.com/harryvince)
* [@hawicz](https://github.com/hawicz)
* [@henrygoodman](https://github.com/henrygoodman)
* [@hiifong](https://github.com/hiifong)
* [@jannispl](https://github.com/jannispl)
* [@jason19970210](https://github.com/jason19970210)
* [@job79](https://github.com/job79)
* [@jubalh](https://github.com/jubalh)
* [@katsusan](https://github.com/katsusan)
* [@kemzeb](https://github.com/kemzeb)
* [@kerwin612](https://github.com/kerwin612)
* [@khs-alt](https://github.com/khs-alt)
* [@kkovacs](https://github.com/kkovacs)
* [@lonix1](https://github.com/lonix1)
* [@lunny](https://github.com/lunny)
* [@mbollmann-v](https://github.com/mbollmann-v)
* [@mengzhuo](https://github.com/mengzhuo)
* [@metiftikci](https://github.com/metiftikci)
* [@misthios](https://github.com/misthios)
* [@mscherer](https://github.com/mscherer)
* [@quentinguidee](https://github.com/quentinguidee)
* [@rafaelDev0ps](https://github.com/rafaelDev0ps)
* [@raucao](https://github.com/raucao)
* [@rremer](https://github.com/rremer)
* [@silverwind](https://github.com/silverwind)
* [@sommerf-lf](https://github.com/sommerf-lf)
* [@sschroe](https://github.com/sschroe)
* [@strk](https://github.com/strk)
* [@stuzer05](https://github.com/stuzer05)
* [@sveinnthorarins](https://github.com/sveinnthorarins)
* [@tclin914](https://github.com/tclin914)
* [@techknowlogick](https://github.com/techknowlogick)
* [@telackey](https://github.com/telackey)
* [@tobiasbp](https://github.com/tobiasbp)
* [@typed-sigterm](https://github.com/typed-sigterm)
* [@vsysoev](https://github.com/vsysoev)
* [@wgr1984](https://github.com/wgr1984)
* [@wkelly17](https://github.com/wkelly17)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yp05327](https://github.com/yp05327)

We will thank all original contributors of backport pull requests on next release.
