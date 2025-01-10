---
date: 2024-12-24T20:00:00+02:00
authors:
  - "lunny"
title: "Gitea 1.23.0(and 1.23.1) is released"
tags: ["release"]
draft: false
coverImageRelease: "1.23.0"
---

We are thrilled to announce the latest release of Gitea **v1.23.0**.

Due to the discovery of two critical bugs in v1.23.0, we promptly released v1.23.1 within a day. As a result, this blog post will cover both v1.23.0 and v1.23.1.

This release stands as a monumental milestone in our development journey with a record-breaking incorporation of [878](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.23.0+is%3Amerged) pull requests. It marks the second most extensive update in Gitea's history, showcasing a plethora of new features and infrastructure improvements.

Following v1.22.0, this release convert most frontend code from javascript to typescript, it also includes many refactors to phase out `jquery` and `Fomantic UI`. These changes reflect our commitment to embracing modern technologies and enhancing the user experience. Especially thanks to [**@wxiaoguang**](https://github.com/wxiaoguang), [**@silverwind**](https://github.com/silverwind) and [**@yardenshoham**](https://github.com/yardenshoham) for their contributions to this work.

<!-- Security Thanks! -->
## Security

This release incorporates all security fixes from v1.22, along with an additional security-related fix that has not been backported to v1.22.

- Include file extension checks in attachment API ([#32151](https://github.com/go-gitea/gitea/pull/32151))

## How to Update

You can download it for example from our [downloads page](https://dl.gitea.com/gitea/1.23.0/). Please read our [installation guide](https://docs.gitea.com/1.23/category/installation) for more information on installation. For upgrade, as always, backup your data and then replace the binary or docker container and restart.

## Special Thanks

We would like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.<!-- Didn't OpenCollective shut down? -->

As always, the changes are sorted descending by what we deem most important for users and admins, so the most important change comes first.

---

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Major Breaking changes

### :warning: Actions logs expired will be cleaned up in background. ([#31735](https://github.com/go-gitea/gitea/pull/31735))

A new configuration `[actions].LOG_RETENTION_DAYS = 365` was introduced to control how long the logs should be deleted. The default value is `365` days. If you want to keep the logs longer, you need to change the configurations once you upgrade.

### :warning: Configuration `[camo].Allways` was corrected to `[camo].Always` ([#32097](https://github.com/go-gitea/gitea/pull/32097))

The configuration setting [camo].Allways contained a typo and has been corrected to [camo].Always. Users should update their configuration files to reflect this change to ensure compatibility with the latest version. This adjustment improves clarity and prevents potential misconfigurations caused by the incorrect spelling.

### :warning: Make OIDC introspection authentication strictly require Client ID and secret ([#31632](https://github.com/go-gitea/gitea/pull/31632))

OIDC introspection authentication now strictly requires a Client ID and secret, enhancing security. Update your configuration to ensure compatibility.

### :warning: Remove SHA1 for support for ssh rsa signing ([#31857](https://github.com/go-gitea/gitea/pull/31857))

Support for SHA1 in SSH RSA signing has been removed due to security concerns. Users should ensure their environments and keys are updated to use more secure algorithms.

### :warning: Use UTC as default timezone when schedule Actions cron tasks ([#31742](https://github.com/go-gitea/gitea/pull/31742))

Actions cron tasks now default to UTC for scheduling, ensuring consistency across environments. If the server's local time zone is not UTC, a scheduled task would run at a different time after upgrading Gitea to this version.

### :warning: Administration URL changed from `/admin` to `/-/admin` to allow accounts named `admin`. ([#32189](https://github.com/go-gitea/gitea/pull/32189)) This maybe a break change for those instances which have customized site header.

The administration URL has been updated to /-/admin to allow accounts named admin. This change may affect instances with customized site headers. Update your configurations or customizations accordingly to prevent disruptions.

## Major Highlights (Code)

### :rocket: GitHub-like repository home page ([#32213](https://github.com/go-gitea/gitea/pull/32213) & [#32847](https://github.com/go-gitea/gitea/pull/32847))

The repository home page has been redesigned to resemble GitHub’s layout, providing a more familiar and user-friendly interface. This includes improved navigation, better information display, and a cleaner overall design to enhance the user experience.

Thank you to [**@yp05327**](https://github.com/yp05327) for contributing this feature.

![Github-like repository homepage](/demos/32213/1.png)

### :rocket: Rearrange Clone Panel ([#31142](https://github.com/go-gitea/gitea/pull/31142))

The Clone Panel has been redesigned for improved usability, featuring a cleaner layout and better organization of clone options. This enhances user experience by making cloning repositories more intuitive and efficient.

Thank you to [**@BlenderDefender**](https://github.com/yp05327) for contributing this feature.

![Rearrange Clone Panel](/demos/31142/1.png)

### :rocket: Support repository license ([#24872](https://github.com/go-gitea/gitea/pull/24872))

Repositories can now specify and display their licenses directly within the interface.

Thank you to [**@yp05327**](https://github.com/yp05327) for contributing this feature.

![repository license](/demos/24872/1.jpg)

### :rocket: Support "merge upstream branch" (Sync fork) ([#32741](https://github.com/go-gitea/gitea/pull/32741))

Forked repositories now include a “Merge Upstream Branch” feature, allowing users to sync their forks with the upstream repository easily. This simplifies keeping forks up to date with the latest changes.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

![merge upstream branch](/demos/32741/1.png)

### :rocket: Included tag search capabilities ([#32045](https://github.com/go-gitea/gitea/pull/32045))

Repositories now support tag search, allowing users to quickly find specific tags. This feature enhances navigation and improves efficiency when working with tagged versions.

Thank you to [**@bsofiato**](https://github.com/bsofiato) for contributing this feature.

![tag search](/demos/32045/1.png)

### :rocket: Support migration from AWS CodeCommit ([#31981](https://github.com/go-gitea/gitea/pull/31981))

Gitea now supports repository migration from AWS CodeCommit, enabling users to seamlessly transfer their projects and maintain version history. This simplifies moving to Gitea from AWS CodeCommit.

Thank you to [**@Zettat123**](https://github.com/Zettat123) for contributing this feature.

![migration from codecommit](/demos/31981/1.png)

### :rocket: Add pure SSH LFS support ([#31516](https://github.com/go-gitea/gitea/pull/31516))

Gitea now supports Git LFS (Large File Storage) over pure SSH, providing a secure and efficient method to handle large files without relying on HTTPS. This enhancement streamlines workflows for users who prefer SSH-based interactions.

Thank you to [**@ConcurrentCrab**](https://github.com/ConcurrentCrab) for contributing this feature.

### :rocket: Allow to fork repository into the same owner ([#32819](https://github.com/go-gitea/gitea/pull/32819))

Users can now fork a repository under the same owner, enabling better organization and experimentation within the same account or organization.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

![fork into the same owner](/demos/32819/1.png)

## Major Highlights (Issues)

### :rocket: Suggestions for issues ([#32327](https://github.com/go-gitea/gitea/pull/32327))

Gitea now provides suggestions for issues, making it easier for users to find relevant or similar issues while creating or browsing them. 

Thank you to [**@anbraten**](https://github.com/anbraten) for contributing this feature.

![suggestions for issues](/demos/32327/1.png)

### :rocket: Issue time estimate, meaningful time tracking ([#23113](https://github.com/go-gitea/gitea/pull/23113))

Gitea now supports setting time estimates for issues and provides improved time tracking capabilities. This helps teams better plan and monitor progress, enhancing project management efficiency.

Thank you to [**@stuzer05**](https://github.com/stuzer05) for contributing this feature.

![Issuee time estimate](/demos/23113/1.png)

### :rocket: Support quote selected comments to reply ([#32431](https://github.com/go-gitea/gitea/pull/32431))

Users can now quote specific portions of comments when replying, making discussions clearer and more focused. This feature improves communication and context in issue and pull request conversations.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

![quote selected comments to reply](/demos/32431/1.png)

## Major Highlights (Pull Requests)

### :rocket: Add reviewers selection to new pull request ([#32403](https://github.com/go-gitea/gitea/pull/32403))

When creating a new pull request, users can now select reviewers directly. This streamlines the review process by allowing users to assign reviewers during pull request creation.

Thank you to [**@CalK16**](https://github.com/CalK16) for contributing this feature.

![add reviewers when creating pull request](/demos/32403/1.png)

### :rocket: Add priority to protected branch ([#32286](https://github.com/go-gitea/gitea/pull/32286))

Protected branches now support priority settings, allowing more granular control over branch protection rules. This ensures that higher-priority rules take precedence, improving flexibility and repository management.

Thank you to [**@6543**](https://github.com/6543) for contributing this feature.

<video controls width="90%">
  <source src="/demos/32286/1.mp4"/>
</video>

## Major Highlights (Actions)

### :rocket: Actions support workflow dispatch event ([#28163](https://github.com/go-gitea/gitea/pull/28163))

Gitea Actions now supports the workflow_dispatch event, enabling users to manually trigger workflows on demand. This feature enhances flexibility and control over workflow execution.

Thank you to [**@pangliang**](https://github.com/pangliang) for contributing this feature.

![workflow dispatch event](/demos/28163/1.png)

Now you can use Actions workflow as below, you can trigger the workflow with parameters from the UI manually.

```yaml
name: Docker Image CI

on:
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'
        required: true
        default: 'warning'
        type: choice
        options:
        - info
        - warning
        - debug
      tags:
        description: 'Test scenario tags'
        required: false
        type: boolean
      boolean_default_true:
        description: 'Test scenario tags'
        required: true
        type: boolean
        default: true
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true
        default: 'environment values'
      number_required_1:
        description: 'number '
        type: number
        required: true
        default: '100'
      number_1:
        description: 'number'
        type: number
        required: false

env:
  inputs_logLevel:              ${{ inputs.logLevel }}
  inputs_tags:                  ${{ inputs.tags }}
  inputs_boolean_default_true:  ${{ inputs.boolean_default_true }}
  inputs_environment:           ${{ inputs.environment }}
  inputs_number_1:              ${{ inputs.number_1  }}
  inputs_number_required_1:     ${{ inputs.number_required_1  }}

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: ls -la
      - run: env | grep inputs
      - run: echo ${{ inputs.logLevel }}
      - run: echo ${{ inputs.boolean_default_true }}
```

### :rocket: Support compression for Actions logs & enable by default ([#31761](https://github.com/go-gitea/gitea/pull/31761) & [#32013](https://github.com/go-gitea/gitea/pull/32013))

Gitea Actions now supports log compression, which is enabled by default. This reduces storage usage and improves performance when managing large volumes of workflow logs.

Thank you to [**@wolfogre**](https://github.com/wolfogre) for contributing this feature.

![compression for actions logs](/demos/31761/1.png)

## Major Highlights (Packages)

### :rocket: Add Arch package registry ([#32692](https://github.com/go-gitea/gitea/pull/32692))

Gitea now includes support for an Arch Linux package registry, allowing users to publish, manage, and distribute Arch packages directly within their repositories.

Thank you to [**@KN4CK3R**](https://github.com/KN4CK3R) and [**@ExplodingDragon**](https://github.com/ExplodingDragon) for contributing this feature.

![Add arch package registry](/demos/32692/1.png)

## Major Highlights (Projects)

### :rocket: Add option to filter board cards by labels and assignees ([#31999](https://github.com/go-gitea/gitea/pull/31999))

Users can now filter cards on project boards by labels and assignees, making it easier to focus on specific tasks and manage workloads more effectively.

Thank you to [**@lafriks**](https://github.com/lafriks) for contributing this feature.

![add option to filter board cards](/demos/31999/1.png)

## Major Highlights (Others)

### :rocket: Add some handy markdown editor features ([#32400](https://github.com/go-gitea/gitea/pull/32400))

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

![Add some handy markdown editor features](/demos/32400/1.png)

### :rocket: Allow cropping an avatar before setting it ([#32565](https://github.com/go-gitea/gitea/pull/32565))

Thank you to [**@kerwin612**](https://github.com/kerwin612) for contributing this feature.

![allow cropping an avatar before setting it](/demos/32565/1.gif)

### :rocket: Add automatic light/dark option for the colorblind theme ([#31997](https://github.com/go-gitea/gitea/pull/31997))

The normal themes already have a variant which automatically chooses light/dark mode based on the browser.
This PR adds the same variant, but for the colorblind themes.

Thank you to [**@lucasoethe**](https://github.com/lucasoethe) for contributing this feature.

### :rocket: Introduce globallock as distributed locks ([#31908](https://github.com/go-gitea/gitea/pull/31908) & [#31813](https://github.com/go-gitea/gitea/pull/31813))

A lock machism has been introduced to allow cluster mode locks.

Thank you to [**@lucasoethe**](https://github.com/lucasoethe) for contributing this feature.

### :rocket: Allow to disable the password-based login (sign-in) form ([#32687](https://github.com/go-gitea/gitea/pull/32687))

Now enterprise/organization users would like to only allow OAuth2 login.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

### :rocket: Add Passkey login support ([#31504](https://github.com/go-gitea/gitea/pull/31504))

After adding a passkey, you can now simply login with it directly by clicking Sign in with a passkey.

Thank you to [**@anbraten**](https://github.com/anbraten) for contributing this feature.

### :rocket: Enhancing Gitea OAuth2 Provider with Granular Scopes for Resource Access ([#32573](https://github.com/go-gitea/gitea/pull/32573))

Adds granular scopes, allowing third-party apps to request specific permissions for improved security and access control.

Thank you to [**@marcellmars**](https://github.com/marcellmars) for contributing this feature.

## Improved Performance

As more and more big instances are reporting performances issues, some performances
improvements have been resolved in this version.

### :rocket: Perf: add extra index to notification table ([#32395](https://github.com/go-gitea/gitea/pull/32395))

Added an additional index to the notification table to speed up query performance, especially for large datasets, improving notification retrieval times.

Thank you to [**@BoYanZh**](https://github.com/BoYanZh) for contributing this feature.

### :rocket: Introduce OrgList and add LoadTeams, optimaze Load teams for orgs ([#32543](https://github.com/go-gitea/gitea/pull/32543))

Use batch queries instead of multiple database queries.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this feature.

### :rocket: Improve performance of diffs ([#32393](https://github.com/go-gitea/gitea/pull/32393))

Optimized how diffs are generated and displayed, reducing processing time and improving load speeds for large diffs.

Thank you to [**@bohde**](https://github.com/bohde) for contributing this feature.

### :rocket: Make LFS http_client parallel within a batch. ([#32369](https://github.com/go-gitea/gitea/pull/32369))

Improved LFS (Large File Storage) performance by enabling parallel requests within a batch, speeding up file uploads and downloads during batch operations.

Thank you to [**@rremer**](https://github.com/rremer) for contributing this feature.

### :rocket: Add new index for action to resolve the performance problem ([#32333](https://github.com/go-gitea/gitea/pull/32333)) & Improve get feed with pagination ([#31821](https://github.com/go-gitea/gitea/pull/31821))

Added a new database index and Enhanced feed retrieval by optimizing pagination to improve the performance of actions, resolving slow query issues in large datasets.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this feature.

### :rocket: Performance improvements for pull request list API ([#30490](https://github.com/go-gitea/gitea/pull/30490)) & Use batch database operations instead of one by one to optimze api pulls ([#32680](https://github.com/go-gitea/gitea/pull/32680))

Improved performance of the pull request list API by optimizing how database queries are handled, making responses faster for repositories with many PRs.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this feature.

## Changelog

### [1.23.1](https://github.com/go-gitea/gitea/releases/tag/v1.23.1) - 2025-01-09

* ENHANCEMENTS
  * Move repo size to sidebar (#33155) (#33182)
* BUGFIXES
  * Use updated path to s6-svscan after alpine upgrade (#33185) (#33188)
  * Fix fuzz test (#33156) (#33158)
  * Fix raw file API ref handling (#33172) (#33189)
  * Fix ACME panic (#33178) (#33186)
  * Fix branch dropdown not display ref name (#33159) (#33183)
  * Fix assignee list overlapping in Issue sidebar (#33176) (#33181)
  * Fix sync fork for consistency (#33147) #33192
  * Fix editor markdown not incrementing in a numbered list (#33187) #33193

### [1.23.0](https://github.com/go-gitea/gitea/releases/tag/v1.23.0) - 2025-01-08

* BREAKING
  * Rename config option `[camo].Allways` to `[camo].Always` (#32097)
  * Remove SHA1 for support for ssh rsa signing (#31857)
  * Use UTC as default timezone when schedule Actions cron tasks (#31742)
  * Delete Actions logs older than 1 year by default (#31735)
  * Make OIDC introspection authentication strictly require Client ID and secret (#31632)

* SECURITY
  * Include file extension checks in attachment API (#32151)
  * Include all security fixes which have been backported to v1.22

* FEATURES
  * Allow to fork repository into the same owner (#32819)
  * Support "merge upstream branch" (Sync fork) (#32741)
  * Add Arch package registry (#32692)
  * Allow to disable the password-based login (sign-in) form (#32687)
  * Allow cropping an avatar before setting it (#32565)
  * Support quote selected comments to reply (#32431)
  * Add reviewers selection to new pull request (#32403)
  * Suggestions for issues (#32327)
  * Add priority to protected branch (#32286)
  * Included tag search capabilities (#32045)
  * Add option to filter board cards by labels and assignees (#31999)
  * Add automatic light/dark option for the colorblind theme (#31997)
  * Support migration from AWS CodeCommit (#31981)
  * Introduce globallock as distributed locks (#31908 & #31813)
  * Support compression for Actions logs & enable by default (#31761 & #32013)
  * Add pure SSH LFS support (#31516)
  * Add Passkey login support (#31504)
  * Actions support workflow dispatch event (#28163)
  * Support repo license (#24872)
  * Issue time estimate, meaningful time tracking (#23113)
  * GitHub like repo home page (#32213 & #32847)
  * Rearrange Clone Panel (#31142)
  * Enhancing Gitea OAuth2 Provider with Granular Scopes for Resource Access (#32573)
  * Use env GITEA_RUNNER_REGISTRATION_TOKEN as global runner token (#32946) #32964
  * Update i18n.go - Language Picker (#32933) #32935

* PERFORMANCE
  * Perf: add extra index to notification table (#32395)
  * Introduce OrgList and add LoadTeams, optimaze Load teams for orgs (#32543)
  * Improve performance of diffs (#32393)
  * Make LFS http_client parallel within a batch. (#32369)
  * Add new index for action to resolve the performance problem (#32333)
  * Improve get feed with pagination (#31821)
  * Performance improvements for pull request list API (#30490)
  * Use batch database operations instead of one by one to optimze api pulls (#32680)
  * Use gitrepo.GetTreePathLatestCommit to get file lastest commit instead from latest commit cache (#32987) #33046

* ENHANCEMENTS
  * Code
    * Remove unnecessary border in repo home page sidebar (#32767)
    * Add 'Copy path' button to file view (#32584)
    * Improve diff file tree (#32658)
    * Add new [lfs_client].BATCH_SIZE and [server].LFS_MAX_BATCH_SIZE config settings. (#32307)
    * Updated tokenizer to better matching when search for code snippets (#32261)
    * Change the code search to sort results by relevance (#32134)
    * Support migrating GitHub/GitLab PR draft status (#32242)
    * Move lock icon position and add additional tooltips to branch list page (#31839)
    * Add tag name in the commits list (#31082)
    * Add `MAX_ROWS` option for CSV rendering (#30268)
    * Allow code search by filename (#32210)
    * Make git push options accept short name (#32245)
    * Repo file list enhancements (#32835)

  * Markdown & Editor
    * Refactor markdown math render, add dollor-backquote syntax support (#32831)
    * Make Monaco theme follow browser, fully type codeeditor.ts (#32756)
    * Refactor markdown editor and use it for milestone description editor (#32688)
    * Add some handy markdown editor features (#32400)
    * Improve markdown textarea for indentation and lists (#31406)

  * Issue
    * Add label/author/assignee filters to the user/org home issue list (#32779)
    * Refactor issue filter (labels, poster, assignee) (#32771)
    * Style unification for the issue_management area (#32605)
    * Add "View all branches/tags" entry to Branch Selector (#32653)
    * Improve textarea paste (#31948)
    * Add avif image file support (#32508)
    * Prevent from submitting issue/comment on uploading (#32263)
    * Issue Templates: add option to have dropdown printed list (#31577)
    * Allow searching issues by ID (#31479)
    * Add `is_archived` option for issue indexer (#32735)
    * Improve attachment upload methods (#30513)
    * Support issue template assignees (#31083)
    * Prevent simultaneous editing of comments and issues (#31053)
    * Add issue comment when moving issues from one column to another of the project (#29311)

  * Pull Request
    * Display head branch more comfortable on pull request view (#32000)
    * Simplify review UI (#31062)
    * Allow force push to protected branches (#28086)
    * Add line-through for deleted branch on pull request view page (#32500)
    * Support requested_reviewers data in comment webhook events (#26178)
    * Allow maintainers to view and edit files of private repos when "Allow maintainers to edit" is enabled (#32215)
    * Allow including `Reviewed-on`/`Reviewed-by` lines for custom merge messages (#31211)

  * Actions
    * Render job title as commit message (#32748)
    * Refactor RepoActionView.vue, add `::group::` support (#32713)
    * Make RepoActionView.vue support `##[group]` (#32770)
    * Support `pull_request_target` event for commit status (#31703)
    * Detect whether action view branch was deleted (#32764)
    * Allow users with write permission to run actions (#32644)
    * Show latest run when visit /run/latest (#31808)

  * Packages
    * Improve rubygems package registry (#31357)
    * Add support for npm bundleDependencies (#30751)
    * Add signature support for the RPM module (#27069)
    * Extract and display readme and comments for Composer packages (#30927)

  * Project
    * Add title to project view page (#32747)
    * Set the columns height to hug all its contents (#31726)
    * Rename project `board` -> `column` to make the UI less confusing (#30170)

  * User & Organazition
    * Use better name for userinfo structure (#32544)
    * Use user.FullName in Oauth2 id_token response (#32542)
    * Limit org member view of restricted users (#32211)
    * Allow disabling authentication related user features (#31535)
    * Add option to change mail from user display name (#31528)
    * Use FullName in Emails to address the recipient if possible (#31527)

  * Administration
    * Add support for a credentials chain for minio access (#31051)
    * Move admin routers from /admin to /-/admin (#32189)
    * Add cache test for admins (#31265)
    * Add option for mailer to override mail headers (#27860)
    * Azure blob storage support (#30995)
    * Supports forced use of S3 virtual-hosted style (#30969)
    * Move repository visibility to danger zone in the settings area (#31126)

  * Others
    * Remove urls from translations (#31950)
    * Simplify 404/500 page (#31409)
    * Optimize installation-page experience (#32558)
    * Refactor login page (#31530)
    * Add new event commit status creation and webhook implementation (#27151)
    * Repo Activity: count new issues that were closed (#31776)
    * Set manual `tabindex`es on login page (#31689)
    * Add `YEAR`, `MONTH`, `MONTH_ENGLISH`, `DAY` variables for template repos (#31584)
    * Add typescript guideline and typescript-specific eslint plugins and fix issues (#31521)
    * Make toast support preventDuplicates (#31501)
    * Fix tautological conditions (#30735)
    * Issue change title notifications (#33050) #33065

* API
  * Implement update branch API (#32433)
  * Fix missing outputs for jobs with matrix (#32823)
  * Make API "compare" accept commit IDs (#32801)
  * Add github compatible tarball download API endpoints (#32572)
  * Harden runner updateTask and updateLog api (#32462)
  * Add `DISABLE_ORGANIZATIONS_PAGE` and `DISABLE_CODE_PAGE` settings for explore pages and fix an issue related to user search (#32288)
  * Make admins adhere to branch protection rules (#32248)
  * Calculate `PublicOnly` for org membership only once (#32234)
  * Allow filtering PRs by poster in the ListPullRequests API (#32209)
  * Return 404 instead of error when commit not exist (#31977)
  * Save initial signup information for users to aid in spam prevention (#31852)
  * Fix upload maven pacakge parallelly (#31851)
  * Fix null requested_reviewer from API (#31773)
  * Add permission description for API to add repo collaborator (#31744)
  * Add return type to GetRawFileOrLFS and GetRawFile (#31680)
  * Add skip secondary authorization option for public oauth2 clients (#31454)
  * Add tag protection via rest api #17862 (#31295)
  * Document possible action types for the user activity feed API (#31196)
  * Add topics for repository API (#31127)
  * Add support for searching users by email (#30908)
  * Add API endpoints for getting action jobs status (#26673)

* REFACTOR
  * Update JS and PY dependencies (#31940)
  * Enable `no-jquery/no-parse-html-literal` and fix violation (#31684)
  * Refactor image diff (#31444)
  * Refactor CSRF token (#32216)
  * Fix some typescript issues (#32586)
  * Refactor names (#31405)
  * Use per package global lock for container uploads instead of memory lock (#31860)
  * Move team related functions to service layer (#32537)
  * Move GetFeeds to service layer (#32526)
  * Resolve lint for unused parameter and unnecessary type arguments (#30750)
  * Reimplement GetUserOrgsList to make it simple and clear (#32486)
  * Move some functions from issue.go to standalone files (#32468)
  * Refactor sidebar assignee&milestone&project selectors (#32465)
  * Refactor sidebar label selector (#32460)
  * Fix a number of typescript issues (#32459)
  * Refactor language menu and dom utils (#32450)
  * Refactor issue page info (#32445)
  * Split issue sidebar into small templates (#32444)
  * Refactor template ctx and render utils (#32422)
  * Refactor repo legacy (#32404)
  * Refactor markup package (#32399)
  * Refactor markup render system (#32533 & #32589 & #32612)
  * Refactor the DB migration system slightly (#32344)
  * Remove jQuery import from some files (#32512)
  * Strict pagination check (#32548)
  * Split mail sender sub package from mailer service package (#32618)
  * Remove outdated code about fixture generation (#32708)
  * Refactor RepoBranchTagSelector (#32681)
  * Refactor issue list (#32755)
  * Refactor LabelEdit (#32752)
  * Split issue/pull view router function as multiple smaller functions (#32749)
  * Refactor some LDAP code (#32849)
  * Unify repo search order by logic (#30876)
  * Remove duplicate empty repo check in delete branch API (#32569)
  * Replace deprecated `math/rand` functions (#30733)
  * Remove fomantic dimmer module (#30723)
  * Add types to fetch,toast,bootstrap,svg (#31627)
  * Refactor webhook (#31587)
  * Move AddCollabrator and CreateRepositoryByExample to service layer (#32419)
  * Refactor RepoRefByType (#32413)
  * Refactor: remove redundant err declarations (#32381)
  * Refactor markup code (#31399)
  * Refactor render system (orgmode) (#32671)
  * Refactor render system (#32492)
  * Refactor markdown render (#32736 & #32728)
  * Refactor repo unit "disabled" check (#31389)
  * Refactor route path normalization (#31381)
  * Refactor to use UnsafeStringToBytes (#31358)
  * Migrate vue components to setup (#32329)
  * Refactor globallock (#31933)
  * Use correct function name (#31887)
  * Use a common message template instead of a special one (#31878)
  * Fix a number of Typescript issues (#31877)
  * Refactor dropzone (#31482)
  * Move custom `tw-` helpers to tailwind plugin (#31184)
  * Replace `gt-word-break` with `tw-break-anywhere` (#31183)
  * Drop `IDOrderDesc` for listing Actions task and always order by `id DESC` (#31150)
  * Split common-global.js into separate files (#31438)
  * Improve detecting empty files (#31332)
  * Use `querySelector` over alternative DOM methods (#31280)
  * Remove jQuery `.text()` (#30506)
  * Use repo as of renderctx's member rather than a repoPath on metas (#29222)
  * Refactor some frontend problems (#32646)
  * Refactor DateUtils and merge TimeSince (#32409)
  * Replace DateTime with proper functions (#32402)
  * Replace DateTime with DateUtils (#32383)
  * Convert frontend code to typescript (#31559)
  * Refactor maven package registry (#33049) #33057
  * Refactor testfixtures #33028

* BUGFIXES
  * Fix issues with inconsistent spacing in areas (#32607)
  * Fix incomplete Actions status aggregations (#32859)
  * In some lfs server implementations, they require the ref attribute. (#32838)
  * Update the list of watchers and stargazers when clicking watch/unwatch or star/unstar (#32570)
  * Fix `recentupdate` sorting bugs (#32505)
  * Fix incorrect "Target branch does not exist" in PR title (#32222)
  * Handle "close" actionable references for manual merges (#31879)
  * render plain text file if the LFS object doesn't exist (#31812)
  * Fix Null Pointer error for CommitStatusesHideActionsURL (#31731)
  * Fix loadRepository error when access user dashboard (#31719)
  * Hide the "Details" link of commit status when the user cannot access actions (#30156)
  * Fix duplicate dropdown dividers (#32760)
  * Fix SSPI button visibility when SSPI is the only enabled method (#32841)
  * Fix overflow on org header (#32837)
  * Exclude protected branches from recently pushed (#31748)
  * Fix large image overflow in comment page (#31740)
  * Fix milestone deadline and date related problems (#32339)
  * Fix markdown preview $$ support (#31514)
  * Fix a compilation error in the Gitpod environment (#32559)
  * Fix PR diff review form submit (#32596)
  * Fix a number of typescript issues (#32308)
  * Fix some function names in comment (#32300)
  * Fix absolute-date (#32375)
  * Clarify Actions resources ownership (#31724)
  * Try to fix ACME directory problem (#33072) #33077
  * Inherit submodules from template repository content (#16237) #33068
  * Use project's redirect url instead of composing url (#33058) #33064
  * Fix toggle commit body button ui when latest commit message is long (#32997) #33034
  * Fix package error handling and npm meta and empty repo guide #33112
  * Fix empty git repo handling logic and fix mobile view (#33101) #33102
  * Fix line-number and scroll bugs (#33094) #33095
  * Fix bleve fuzziness search (#33078) #33087
  * Fix broken forms #33082
  * Fix empty repo updated time (#33120) #33124
  * Add missing transaction when set merge #33113
  * Fix issue comment number (#30556) #33055
  * Fix duplicate co-author in squashed merge commit messages (#33020) #33054
  * Fix Agit pull request permission check (#32999) #33005
  * Fix scoped label ui when contains emoji (#33007) #33014
  * Fix bug on activities (#33008) #33016
  * Fix review code comment avatar alignment (#33031) #33032
  * Fix templating in pull request comparison (#33025) #33038
  * Fix bug automerge cannot be chosed when there is only 1 merge style (#33040) #33043
  * Fix settings not being loaded at CLI (#26402) #33048
  * Support for email addresses containing uppercase characters when activating user account (#32998) #33001
  * Support org labels when adding labels by label names (#32988) #32996
  * Do not render truncated links in markdown (#32980) #32983
  * Demilestone should not include milestone (#32923) #32979
  * Fix Azure blob object Seek (#32974) #32975
  * Fix maven pom inheritance (#32943) #32976
  * Fix textarea newline handle (#32966) #32977
  * Fix outdated tmpl code (#32953) #32961
  * Fix commit range paging (#32944) #32962
  * Fix repo avatar conflict (#32958) #32960
  * Fix trailing comma not matched in the case of alphanumeric issue (#32945)
  * Relax the version checking for Arch packages (#32908) #32913
  * Add more load functions to make sure the reference object loaded (#32901) #32912
  * Filter reviews of one pull request in memory instead of database to reduce slow response because of lacking database index (#33106) #33128
  * Fix git remote error check, fix dependencies, fix js error (#33129) #33133

* MISC
  * Optimize branch protection rule loading (#32280)
  * Bump to go 1.23 (#31855)
  * Remove unused call to $.HeadRepo in view_title template (#32317)
  * Do not display `attestation-manifest` and use short sha256 instead of full sha256 (#32851)
  * Upgrade htmx to 2.0.4 (#32834)
  * Improve JSX/TSX support in code editor (#32833)
  * Add User-Agent for gitea's self-implemented lfs client. (#32832)
  * Use errors.New to replace fmt.Errorf with no parameters (#32800)
  * Add "n commits" link to contributors in contributors graph page (#32799)
  * Update dependencies, tweak eslint (#32719)
  * Remove all "floated" CSS styles (#32691)
  * Show tag name on branch/tag selector if repo shown from tag ref (#32689)
  * Use new mail package instead of an unmintained one (#32682)
  * Optimize the styling of icon buttons within file-header-right (#32675)
  * Validate OAuth Redirect URIs (#32643)
  * Support optional/configurable IAMEndpoint for Minio Client (#32581) (#32581)
  * Make search box in issue sidebar dropdown list always show when scrolling (#32576)
  * Bump CI,Flake and Snap to Node 22 (#32487)
  * Update `github.com/meilisearch/meilisearch-go` (#32484)
  * Add `DEFAULT_MIRROR_REPO_UNITS` and `DEFAULT_TEMPLATE_REPO_UNITS` options (#32416)
  * Update go dependencies (#32389)
  * Update JS and PY dependencies (#32388)
  * Upgrade rollup to 4.24.0 (#32312)
  * Upgrade vue to 3.5.12 (#32311)
  * Improve the maintainblity of the reserved username list (#32229)
  * Upgrade htmx to 2.0.3 (#32192)
  * Count typescript files as frontend for labeling (#32088)
  * Only use Host header from reverse proxy (#32060)
  * Failed authentications are logged to level Warning (#32016)
  * Enhance USER_DISABLED_FEATURES to allow disabling change username or full name (#31959)
  * Distinguish official vs non-official reviews, add tool tips, and upgr… (#31924)
  * Update mermaid to v11 (#31913)
  * Bump relative-time-element to v4.4.3 (#31910)
  * Upgrade `htmx` to `2.0.2` (#31847)
  * Add warning message in merge instructions when `AutodetectManualMerge` was not enabled (#31805)
  * Add types to various low-level functions (#31781)
  * Update JS dependencies (#31766)
  * Remove unused code from models/repos/release.go (#31756)
  * Support delete user email in admin panel (#31690)
  * Add `username` to OIDC introspection response (#31688)
  * Use GetDisplayName() instead of DisplayName() to generate rss feeds (#31687)
  * Code editor theme enhancements (#31629)
  * Update JS dependencies (#31616)
  * Add types for js globals (#31586)
  * Add back esbuild-loader for .js files (#31585)
  * Don't show hidden labels when filling out an issue template (#31576)
  * Allow synchronizing user status from OAuth2 login providers (#31572)
  * Display app name in the registration email title (#31562)
  * Use stable version of fabric (#31526)
  * Support legacy _links LFS batch responses (#31513)
  * Fix JS error with disabled attachment and easymde (#31511)
  * Always use HTML attributes for avatar size (#31509)
  * Use nolyfill to remove some polyfills (#31468)
  * Disable issue/PR comment button given empty input (#31463)
  * Add simple JS init performance trace (#31459)
  * Bump htmx to 2.0.0 (#31413)
  * Update JS dependencies, remove `eslint-plugin-jquery` (#31402)
  * Split org Propfile README to a new tab `overview` (#31373)
  * Update nix flake and add gofumpt (#31320)
  * Code optimization (#31315)
  * Enable poetry non-package mode (#31282)
  * Optimize profile layout to enhance visual experience (#31278)
  * Update `golang.org/x/net` (#31260)
  * Bump `@github/relative-time-element` to v4.4.1 (#31232)
  * Remove unnecessary inline style for tab-size (#31224)
  * Update golangci-lint to v1.59.0 (#31221)
  * Update chroma to v2.14.0 (#31177)
  * Update JS dependencies (#31120)
  * Improve the handling of `jobs.<job_id>.if` (#31070)
  * Clean up revive linter config, tweak golangci output (#30980)
  * Use CSS `inset` shorthand (#30939)
  * Forbid deprecated `break-word` in CSS (#30934)
  * Remove obsolete monaco workaround (#30893)
  * Update JS dependencies, add new eslint rules (#30840)
  * Fix body margin shifting with modals, fix error on project column edit (#30831)
  * Remove disk-clean workflow (#30741)
  * Bump `github.com/google/go-github` to v61 (#30738)
  * Add built js files to eslint ignore (#30737)
  * Use `ProtonMail/go-crypto` for `opengpg` in tests (#30736)
  * Upgrade xorm to v1.3.9 and improve some migrations Sync (#29899)
  * Added default sorting milestones by name (#27084)
  * Enable `unparam` linter (#31277)
  * Use Alpine 3.21 for the docker images (#32924) #32951
  * Bump x/net (#32896) #32899
  * Use -s -w ldflags for release artifacts (#33041) #33042
  * Remove aws go sdk package dependency (#33029) #33047

## Contributors for this release

* [@42wim](https://github.com/42wim)
* [@6543](https://github.com/6543)
* [@a1012112796](https://github.com/a1012112796)
* [@AdamMajer](https://github.com/AdamMajer)
* [@Adrian-Hirt](https://github.com/Adrian-Hirt)
* [@aindriu80](https://github.com/aindriu80)
* [@BElluu](https://github.com/BElluu)
* [@BlenderDefender](https://github.com/BlenderDefender)
* [@BoYanZh](https://github.com/BoYanZh)
* [@CalK16](https://github.com/CalK16)
* [@Chief-Detektor](https://github.com/Chief-Detektor)
* [@ChristopherHX](https://github.com/ChristopherHX)
* [@ConcurrentCrab](https://github.com/ConcurrentCrab)
* [@CyberFlameGO](https://github.com/CyberFlameGO)
* [@ExplodingDragon](https://github.com/ExplodingDragon)
* [@Frankkkkk](https://github.com/Frankkkkk)
* [@GiteaBot](https://github.com/GiteaBot)
* [@HEREYUA](https://github.com/HEREYUA)
* [@HenriquerPimentel](https://github.com/HenriquerPimentel)
* [@HorlogeSkynet](https://github.com/HorlogeSkynet)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@KnudH](https://github.com/KnudH)
* [@LordChunk](https://github.com/LordChunk)
* [@Makonike](https://github.com/Makonike)
* [@MaxWipfli](https://github.com/MaxWipfli)
* [@Mic92](https://github.com/Mic92)
* [@NishiyamaPedro](https://github.com/NishiyamaPedro)
* [@RiceChuan](https://github.com/RiceChuan)
* [@Sebastian-T-T](https://github.com/Sebastian-T-T)
* [@SimonPistache](https://github.com/SimonPistache)
* [@StanleySweet](https://github.com/StanleySweet)
* [@Sumit189](https://github.com/Sumit189)
* [@SunnyWan59](https://github.com/SunnyWan59)
* [@TheBrokenRail](https://github.com/TheBrokenRail)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@Zettat123](https://github.com/Zettat123)
* [@Zoupers](https://github.com/Zoupers)
* [@a1012112796](https://github.com/a1012112796)
* [@alexandear](https://github.com/alexandear)
* [@anbraten](https://github.com/anbraten)
* [@appleboy](https://github.com/appleboy)
* [@archer-321](https://github.com/archer-321)
* [@baltitenger](https://github.com/baltitenger)
* [@bohde](https://github.com/bohde)
* [@brechtvl](https://github.com/brechtvl)
* [@bsofiato](https://github.com/bsofiato)
* [@cassiozareck](https://github.com/cassiozareck)
* [@changchaishi](https://github.com/changchaishi)
* [@charles-plutohealth](https://github.com/charles-plutohealth)
* [@charles7668](https://github.com/charles7668)
* [@chesteripz](https://github.com/chesteripz)
* [@cloudchamb3r](https://github.com/cloudchamb3r)
* [@delvh](https://github.com/delvh)
* [@denyskon](https://github.com/denyskon)
* [@dicarne](https://github.com/dicarne)
* [@emrebdr](https://github.com/emrebdr)
* [@enko](https://github.com/enko)
* [@eshirvana](https://github.com/eshirvana)
* [@fabiobarkoski](https://github.com/fabiobarkoski)
* [@fuxiaohei](https://github.com/fuxiaohei)
* [@harryzcy](https://github.com/harryzcy)
* [@henrygoodman](https://github.com/henrygoodman)
* [@hiifong](https://github.com/hiifong)
* [@itzonban](https://github.com/itzonban)
* [@jam7](https://github.com/jam7)
* [@jmlt2002](https://github.com/jmlt2002)
* [@jtran](https://github.com/jtran)
* [@katsusan](https://github.com/katsusan)
* [@kdumontnu](https://github.com/kdumontnu)
* [@kemzeb](https://github.com/kemzeb)
* [@kerwin612](https://github.com/kerwin612)
* [@kiatt210](https://github.com/kiatt210)
* [@lafriks](https://github.com/lafriks)
* [@llxlr](https://github.com/llxlr)
* [@lucasoethe](https://github.com/lucasoethe)
* [@lunny](https://github.com/lunny)
* [@maantje](https://github.com/maantje)
* [@madneal](https://github.com/madneal)
* [@mainboarder](https://github.com/mainboarder)
* [@manvalls](https://github.com/manvalls)
* [@marcellmars](https://github.com/marcellmars)
* [@metiftikci](https://github.com/metiftikci)
* [@mevius4](https://github.com/mevius4)
* [@micash545](https://github.com/micash545)
* [@mowoc-ocp](https://github.com/mowoc-ocp)
* [@mzroot](https://github.com/mzroot)
* [@pangliang](https://github.com/pangliang)
* [@rremer](https://github.com/rremer)
* [@s4uliu5](https://github.com/s4uliu5)
* [@sangcheol12](https://github.com/sangcheol12)
* [@scribblemaniac](https://github.com/scribblemaniac)
* [@sebastian-sauer](https://github.com/sebastian-sauer)
* [@sebluy](https://github.com/sebluy)
* [@sergeyvfx](https://github.com/sergeyvfx)
* [@silkentrance](https://github.com/silkentrance)
* [@sillyguodong](https://github.com/sillyguodong)
* [@silverwind](https://github.com/silverwind)
* [@slingamn](https://github.com/slingamn)
* [@sommerf-lf](https://github.com/sommerf-lf)
* [@sryze](https://github.com/sryze)
* [@stevapple](https://github.com/stevapple)
* [@stuzer05](https://github.com/stuzer05)
* [@tdesveaux](https://github.com/tdesveaux)
* [@techknowlogick](https://github.com/techknowlogick)
* [@testwill](https://github.com/testwill)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@thezzisu](https://github.com/thezzisu)
* [@tmnvanderberg](https://github.com/tmnvanderberg)
* [@tobiasbp](https://github.com/tobiasbp)
* [@tyroneyeh](https://github.com/tyroneyeh)
* [@usbalbin](https://github.com/usbalbin)
* [@wangjingcun](https://github.com/wangjingcun)
* [@william-allspice](https://github.com/william-allspice)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@xlii-chl](https://github.com/xlii-chl)
* [@yardenshoham](https://github.com/yardenshoham)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)

We will thank all original contributors of backport pull requests on next release.
