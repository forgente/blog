---
date: 2023-11-12T23:00:00+02:00
authors: 
  - "delvh"
  - "denyskon"
  - "puni9869"
  - "lunny"
title: "Gitea 1.21 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.21
---

Gitea 1.21.0 is now released.

It includes [962](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.0+is%3Amerged) pull requests, many new features, and Gitea Actions have now left the experimental state.

You can download 1.21 for example from our [downloads page](https://dl.gitea.com/gitea/1.21.0/). Please read our [installation guide](https://docs.gitea.com/1.21/installation/install-from-binary) for more information on installation.

We would like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

## Breaking Changes

These changes are likely to affect the way Gitea works for at least some users. These changes are sorted by importance, with the top ones likely requiring some actions from you, and the bottom ones mostly not affecting anyone.

### ⚠️ Move public asset files to the proper directory ([#25907](https://github.com/go-gitea/gitea/pull/25907))

At some point, a folder structure emerged for Gitea where files stored in `custom/public/*` have been served under `https://gitea.example.com/assets/*`, which lead to a lot of confusion for new users trying to customize their instances.
To correct this behavior, we changed the default assets folder to `custom/public/assets/*`.

If you have custom asset files, e. g. custom themes, inside `custom/public/*`, you **need to transfer these files** to `custom/public/assets/*` for them to be detected by Gitea v1.21.

### ⚠️ Set `SSH_AUTHORIZED_KEYS_BACKUP` to `false` ([#25412](https://github.com/go-gitea/gitea/pull/25412))

Previously, the configuration option `[server].SSH_AUTHORIZED_KEYS_BACKUP`, which makes Gitea automatically create backups of the `authorized_keys` file every time a new SSH key is added by a user, was set to `true` by default. However, this lead to the backup folder getting enormously large on instances with many users.

As a consequence, we decided to change the default value of this parameter to `false`. Please ensure to set it to `true` manually inside your `app.ini` if you want for Gitea to continue creating backups of this file.

### ⚠️ Remove `CHARSET` config option for MySQL, always use `utf8mb4` ([#25413](https://github.com/go-gitea/gitea/pull/25413))

Using `utf8` as a charset for MySQL may result in issues, e. g. with emoji characters, however a new installation can still end up using it through the `[database].CHARSET` configuration option. The superior `utf8mb4` character set is being supported since MySQL v5.5, and as Gitea only supports MySQL v5.7+, support for `utf8` is no longer needed in Gitea. To eliminate such issues, we decided to remove this configuration option completely.

Existing `utf8` databases will continue to work without modifications, however we **strongly recommend** you to convert them to `utf8mb4` using the [`gitea doctor convert`](https://docs.gitea.com/1.21/administration/command-line#doctor-convert) command.

### ⚠️ Refactor Gitea cli ([#25959](https://github.com/go-gitea/gitea/pull/25959))

A refactoring of Gitea's cli package lead to some changes in the way it treats command options:

- `gitea` without subcommands no longer accepts `gitea web` options.
    - `--install-port`, `--pid`, `--port`, `--quiet`, and `--verbose` belong to the `web` sub-command
    - use `./gitea web --pid …` instead
    - `./gitea` can still run the `web` sub-command as shorthand, with default options
- The sub-command's options must follow the sub-command
    - before: `./gitea --sub-opt subcmd` might equal to `./gitea subcmd --sub-opt`
    - after: only `./gitea subcmd --sub-opt` can be used
    - global options like `--config` are not affected

### ⚠️ Restrict certificate type for builtin SSH server ([#26789](https://github.com/go-gitea/gitea/pull/26789))

When using certificate authentication, the OpenSSH server automatically rejects host certificates which are being used as client certificates.
Similarly to OpenSSH, Gitea's built-in SSH server now also requires you to use proper client certificates when connecting.
Most users should be unaffected by this change.

### ⚠️ Remove commit status running to align with GitHub ([#25839](https://github.com/go-gitea/gitea/pull/25839))

When implementing Gitea Actions, the additional commit status "running" was introduced in Gitea v1.19, which resulted in partially confusing aggregated commit status  behavior if compared to GitHub. We decided to remove "running" with this release to simplify the commit status and make it more consistent with GitHub.

## Notable Improvements

### :rocket: Select specific commit range when reviewing a PR ([#25528](https://github.com/go-gitea/gitea/pull/25528))

One of the major pain points for anyone, who has ever reviewed a PR on Gitea, was always that it is only possible to see the current state of the PR and not previous commits, or even a range of commits.

This has now changed, as you can now select to review all changes, the changes of a single commit, the changes of any commit range, or even all changes since your last review.

![Screenshot showing the selection of commits](/demos/25528/1.png)

### :rocket: Recently pushed branches notification ([#25715](https://github.com/go-gitea/gitea/pull/25715))

Gitea has finally gotten the ability to inform you when you've recently pushed changes to open a PR for the changes.

![Screenshot showing the notification of creating a PR for some changes](/demos/25715/1.png)


The exact rules for this notification are as follows at the moment:

- You must be the pusher on a branch that still exists and that is not the default branch
- The push must have occurred within the last 6 hours
- There is no open PR for this branch at the moment
- You are on the repository start page

You will see at most three notifications at the same time.

### :rocket: Codeowners ([#24910](https://github.com/go-gitea/gitea/pull/24910))

Gitea now supports `CODEOWNERS` files as explained by GitHub in their [docs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners). Currently, the only supported functionality is automatically assigning code reviewers to PRs which change specific files.

The CODEOWNERS file is loaded from these paths in this order:

- `./CODEOWNERS`
- `./docs/CODEOWNERS`
- `./.gitea/CODEOWNERS`

### :rocket: Pre-register OAuth2 applications for git credential helpers ([#26291](https://github.com/go-gitea/gitea/pull/26291))

Storing credentials for Git repositories safely can be a nightmare - that's where [Git credential helpers](https://git-scm.com/doc/credential-helpers) come in to make developers' lives easier.

To allow for them to be used without any additional server-side configuration, starting from Gitea 1.21, OAuth applications for [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager) and [git-credential-oauth](https://github.com/hickford/git-credential-oauth) will be pre-registered in Gitea by default.

This can be disabled by setting the `[oauth2].DEFAULT_APPLICATIONS` parameter in `app.ini`.

The underlying functionality would also allow to pre-register OAuth applications for other applications, i. e. GitNex or Tea, in future releases.

### :rocket: Show branches and tags that contain a commit ([#25180](https://github.com/go-gitea/gitea/pull/25180))

Any commit can now show exactly which branches and tags it is contained in:

![Screenshot showing the branches and tags of a given commit](/demos/25180/1.png)

As such, you can now easily understand where a commit will be present, i.e. to check if a given release contains a feature or bugfix. 

### :rocket: Archived labels ([#26478](https://github.com/go-gitea/gitea/pull/26478), [#26741](https://github.com/go-gitea/gitea/pull/26741), [#26820](https://github.com/go-gitea/gitea/pull/26820))

Gitea 1.21 introduces a new concept that (to the best of our knowledge) no one else offers yet:
Archived labels.

Archived labels work a bit like closed milestones and projects, but specifically for labels.

![Screenshot of label menu showing an archived label](/demos/26478/1.png)

When you archive a label:
* The label **won't show up** as a suggestion when you're adding/editing labels on issues or pull requests.
* You **can't assign** the archived label to any new issues or pull requests.

However:
* Any issues or pull requests that already have the archived label **will keep it**. Nothing changes for them.

This feature is particularly useful for larger projects or organizations.
It often happens that you only need a specific label for a limited period, like for a single project release.
After that, you don't want it constantly appearing as a suggestion when you're labeling new tasks or issues. So, archived labels allow you to retain the label's information without cluttering up your label suggestions when you're working on new items.

You should use this feature when you want to "retire" a label.

Before, you only had two suboptimal choices: Either delete the label and lose all the info linked to it, or deal with lots of unneeded label suggestions. Archived labels give you a better solution.

**Note:** It's important to be aware that while the essential working parts of the system behind archived labels are already in operation, the way these labels are shown on your screen or displayed may still see alterations in upcoming releases. So, while the functionality is there, the actual appearance and how you interact with archived labels might change.

### :rocket: Gitea Actions Enhancements

Gitea Actions have received various new features, and these additions have brought it to a point where we now consider Actions to be a mature component. 

Some of these new features include:

- **Scheduled Workflows ([#26655](https://github.com/go-gitea/gitea/pull/26655))**: It is now possible to run a workflow on a given cron schedule
- **Disable Workflow ([#26413](https://github.com/go-gitea/gitea/pull/26413))**: It is now possible to disable workflows to stop them from running. This is especially useful in forks that cannot get rid of/change the parent workflows.
- **Download raw task logs ([#24451](https://github.com/go-gitea/gitea/pull/24451))**: You can now download the logs of a task
- **Configuration variables ([#24724](https://github.com/go-gitea/gitea/pull/24724))**: It is now possible to access non-sensitive information from a variable. Variables behave like de-obfuscated secrets.
- **UI filters ([#25118](https://github.com/go-gitea/gitea/pull/25118))**: Filter workflows by who triggered a workflow and/or the state of an workflow (running, pending, failed, …)
- **Artifact cleanup rules ([#26131](https://github.com/go-gitea/gitea/pull/26131))**: You can now define cleanup rules for Action artifacts to reclaim storage after some specified amount of time
- **Auto-cancellation of jobs ([#25716](https://github.com/go-gitea/gitea/pull/25716))**: Running workflows that are triggered on push are now auto-cancelled on the next push to the same branch
- **Multiple-file artifacts ([#24874](https://github.com/go-gitea/gitea/pull/24874))**: Actions Artifacts support uploading multiple files and directories

### :rocket: Admin page improvements ([#26546](https://github.com/go-gitea/gitea/pull/26546), [#26713](https://github.com/go-gitea/gitea/pull/26713))

The admin page has gained new capabilities, making lives a bit easier for Gitea administrators!

Among them are the following:

- Rebuilding issue index manually from the cron task list
![Screenshot of the cron task list with highlighted option](/demos/26546/1.png)

- A details page for every user (accessible from the user list) showing all the important information available about a user like email addresses, organizations and repositories.
![Screenshot of the user details page](/demos/26713/1.png)



### :rocket: Simplified blame view ([#26395](https://github.com/go-gitea/gitea/pull/26395))

By default, the blame view will now filter out any commit that is defined in the `.git-blame-ignore-revs` file in the repository root directory.

![Screenshot showing a blame view with hidden revisions](/demos/26395/1.png)

Such a file should follow the format
```bash
# Comment why this commit is ignored
commitsha
…
```
so for example
```bash
# Move `.c` files to `.cpp`
1abcdefabcdef
# Remove semicolons everywhere
fedcbafedcba1
```

As such, it helps to ignore commits that didn't change a file in a meaningful way.
Of course, it is also possible to show the full blame view by clicking on the respective link:

![Screenshot showing blame view without hidden revisions](/demos/26395/2.png)

### :rocket: Allow retrying for failed pull mirror creations ([#26228](https://github.com/go-gitea/gitea/pull/26228))

Previously, whenever creating a pull mirror failed, you were forced to delete the mirror and recreate it.
This redundant step has now been removed as you can simply retry creating it.
![Screenshot showing the retry-pull-mirror creation](/demos/26228/1.png)


In a similar fashion, it is now possible to edit the sync interval of **push** mirrors after its creation.

### :rocket: All branches now show if the CI is currently successful ([#25608](https://github.com/go-gitea/gitea/pull/25608))

Now, you can quickly see when listing all branches which branch currently passes the CI and which doesn't.

![Screenshot showing the CI statues of different branches](/demos/25608/1.png)

### :rocket: Less database deadlocks

Gitea **1.22** already went through a large refactoring to ensure that requests will produce far less database deadlocks.
About half of this work has been backported to 1.21.
As a result, the performance of several requests will be substantially faster/possible at all, especially for large instances where you expect multiple simulaneous requests.

## :exclamation: Outlook: Pending changes in Gitea 1.22

### Default theme change

At the time of writing this blog, we have already decided to change the default themes.
As such, the `gitea` theme will be renamed to `gitea-light`, and `auto` will be renamed to `gitea-auto`. Apart from that, nothing will change for these themes.
`arc-green`, however, will be replaced with a more _blue_ instead of _green_ dark theme, similar to Discord or the [Blender theme](https://projects.blender.org/blender/blender).
The new dark theme will be called `gitea-dark`.

We expect that Gitea 1.22 will ship with the new themes.

### Dropping support for older databases

As of the time being, MySQL 5.7, PostgreSQL 10/11 and MSSQL 2008 have all reached the end-of-life state. Thus, Gitea 1.22 will no longer officially support these database versions.

We encourage every user to update to a new database version ASAP to ensure compatibility and security.

If you use an unsupported database version and cannot update, please [get in touch](https://docs.gitea.com/help/support) with us for information on our Extended Support Contracts. We can provide testing and support for older databases and integrate those fixes into the Gitea codebase.

## Changelog

## [1.21.0](https://github.com/go-gitea/gitea/releases/tag/v1.21.0) - 2023-11-14

* BREAKING
  * Restrict certificate type for builtin SSH server (#26789)
  * Refactor to use urfave/cli/v2 (#25959)
  * Move public asset files to the proper directory (#25907)
  * Remove commit status running and warning to align GitHub (#25839) (partially reverted: Restore warning commit status (#27504) (#27529))
  * Remove "CHARSET" config option for MySQL, always use "utf8mb4" (#25413)
  * Set SSH_AUTHORIZED_KEYS_BACKUP to false (#25412)
* FEATURES
  * User details page (#26713)
  * Chore(actions): support cron schedule task (#26655)
  * Support rebuilding issue indexer manually (#26546)
  * Allow to archive labels (#26478)
  * Add disable workflow feature (#26413)
  * Support `.git-blame-ignore-revs` file (#26395)
  * Pre-register OAuth2 applications for git credential helpers (#26291)
  * Add `Retry` button when creating a mirror-repo fails (#26228)
  * Artifacts retention and auto clean up (#26131)
  * Serve pre-defined files in "public", add "security.txt", add CORS header for ".well-known" (#25974)
  * Implement auto-cancellation of concurrent jobs if the event is push (#25716)
  * Newly pushed branches hints on repository home page (#25715)
  * Display branch commit status (#25608)
  * Add direct serving of package content (#25543)
  * Add commits dropdown in PR files view and allow commit by commit review (#25528)
  * Allow package cleanup from admin page (#25307)
  * Batch delete issue and improve tippy opts (#25253)
  * Show branches and tags that contain a commit (#25180)
  * Add actor and status dropdowns to run list (#25118)
  * Allow Organisations to have a E-Mail (#25082)
  * Add codeowners feature (#24910)
  * Actions Artifacts support uploading multiple files and directories (#24874)
  * Support configuration variables on Gitea Actions (#24724)
  * Support downloading raw task logs (#24451)
* API
  * Unify two factor check (#27915) (#27929)
  * Fix package webhook (#27839) (#27855)
  * Fix/upload artifact error windows (#27802) (#27840)
  * Fix bad method call when deleting user secrets via API (#27829) (#27831)
  * Do not force creation of _cargo-index repo on publish (#27266) (#27765)
  * Delete repos of org when purge delete user (#27273) (#27728)
  * Fix org team endpoint (#27721) (#27727)
  * Api: GetPullRequestCommits: return file list (#27483) (#27539)
  * Don't let API add 2 exclusive labels from same scope (#27433) (#27460)
  * Redefine the meaning of column is_active to make Actions Registration Token generation easier (#27143) (#27304)
  * Fix PushEvent NullPointerException jenkinsci/github-plugin (#27203) (#27251)
  * Fix organization field being null in POST `/orgs/{orgid}/teams` (#27150) (#27163)
  * Allow empty Conan files (#27092)
  * Fix token endpoints ignore specified account (#27080)
  * Reduce usage of `db.DefaultContext` (#27073) (#27083) (#27089) (#27103) (#27262) (#27265) (#27347) (#26076)
  * Make SSPI auth mockable (#27036)
  * Extract auth middleware from service (#27028)
  * Add `RemoteAddress` to mirrors (#26952)
  * Feat(API): add routes and functions for managing user's secrets (#26909)
  * Feat(API): add secret deletion functionality for repository (#26808)
  * Feat(API): add route and implementation for creating/updating repository secret (#26766)
  * Add Upload URL to release API (#26663)
  * Feat(API): update and delete secret for managing organization secrets (#26660)
  * Feat: implement organization secret creation API (#26566)
  * Add API route to list org secrets (#26485)
  * Set commit id when ref used explicitly (#26447)
  * PATCH branch-protection updates check list even when checks are disabled (#26351)
  * Add file status for API "Get a single commit from a repository" (#16205) (#25831)
  * Add API for changing Avatars (#25369)
* BUGFIXES
  * Fix viewing wiki commit on empty repo (#28040) (#28044)
  * Enable system users for comment.LoadPoster (#28014) (#28032)
  * Fixed duplicate attachments on dump on windows (#28019) (#28031)
  * Fix wrong xorm Delete usage(backport for 1.21) (#28002)
  * Add word-break to repo description in home page (#27924) (#27957)
  * Fix rendering assignee changed comments without assignee (#27927) (#27952)
  * Add word break to release title (#27942) (#27947)
  * Fix JS NPE when viewing specific range of PR commits (#27912) (#27923)
  * Show correct commit sha when viewing single commit diff (#27916) (#27921)
  * Fix 500 when deleting a dismissed review (#27903) (#27910)
  * Fix DownloadFunc when migrating releases (#27887) (#27890)
  * Fix http protocol auth (#27875) (#27876)
  * Refactor postgres connection string building (#27723) (#27869)
  * Close all hashed buffers (#27787) (#27790)
  * Fix label render containing invalid HTML (#27752) (#27762)
  * Fix duplicate project board when hitting `enter` key (#27746) (#27751)
  * Fix `link-action` redirect network error (#27734) (#27749)
  * Fix sticky diff header background (#27697) (#27712)
  * Always delete existing scheduled action tasks (#27662) (#27688)
  * Support allowed hosts for webhook to work with proxy (#27655) (#27675)
  * Fix poster is not loaded in get default merge message (#27657) (#27666)
  * Improve dropdown button alignment and fix hover bug (#27632) (#27637)
  * Improve retrying index issues (#27554) (#27634)
  * Fix 404 when deleting Docker package with an internal version (#27615) (#27630)
  * Backport manually for a tmpl issue in v1.21 (#27612)
  * Don't show Link to TOTP if not set up (#27585) (#27588)
  * Fix data-race bug when accessing task.LastRun (#27584) (#27586)
  * Fix attachment download bug (#27486) (#27571)
  * Respect SSH.KeygenPath option when calculating ssh key fingerprints (#27536) (#27551)
  * Improve dropdown's behavior when there is a search input in menu (#27526) (#27534)
  * Fix panic in storageHandler (#27446) (#27479)
  * When comparing with an non-exist repository, return 404 but 500 (#27437) (#27442)
  * Fix pr template (#27436) (#27440)
  * Fix git 2.11 error when checking IsEmpty (#27393) (#27397)
  * Allow get release download files and lfs files with oauth2 token format (#26430) (#27379)
  * Fix missing ctx for GetRepoLink in dashboard (#27372) (#27375)
  * Absolute positioned checkboxes  overlay floated elements (#26870) (#27366)
  * Introduce fixes and more rigorous tests for 'Show on a map' feature (#26803) (#27365)
  * Fix repo count in org action settings (#27245) (#27353)
  * Add logs for data broken of comment review (#27326) (#27345)
  * Fix the approval count of PR when there is no protection branch rule (#27272) (#27343)
  * Fix Bug in Issue Config when only contact links are set (#26521) (#27334)
  * Improve issue history dialog and make poster can delete their own history (#27323) (#27327)
  * Fix orphan check for deleted branch (#27310) (#27321)
  * Fix protected branch icon location (#26576) (#27317)
  * Fix yaml test (#27297) (#27303)
  * Fix some animation bugs (#27287) (#27294)
  * Fix incorrect change from #27231 (#27275) (#27282)
  * Add missing public user visibility in user details page (#27246) (#27250)
  * Fix EOL handling in web editor (#27141) (#27234)
  * Fix issues on action runners page (#27226) (#27233)
  * Quote table `release` in sql queries (#27205) (#27218)
  * Fix release URL in webhooks (#27182) (#27185)
  * Fix review request number and add more tests (#27104) (#27168)
  * Fix the variable regexp pattern on web page (#27161) (#27164)
  * Fix: treat tab "overview" as "repositories" in user profiles without readme (#27124)
  * Fix NPE when editing OAuth2 applications (#27078)
  * Fix the incorrect route path in the user edit page. (#27007)
  * Fix the secret regexp pattern on web page (#26910)
  * Allow users with write permissions for issues to add attachments with API (#26837)
  * Make "link-action" backend code respond correct JSON content (#26680)
  * Use line-height: normal by default (#26635)
  * Fix NPM packages name validation (#26595)
  * Rewrite the DiffFileTreeItem and fix misalignment (#26565)
  * Return empty when searching issues with no repos (#26545)
  * Explain SearchOptions and fix ToSearchOptions (#26542)
  * Add missing triggers to update issue indexer (#26539)
  * Handle base64 decoding correctly to avoid panic (#26483)
  * Avoiding accessing undefined mentionValues (#26461)
  * Fix incorrect redirection in new issue using references (#26440)
  * Fix the bug when getting files changed for `pull_request_target` event (#26320)
  * Remove IsWarning in  tmpl (#26120)
  * Fix loading `LFS_JWT_SECRET` from wrong section (#26109)
  * Fixing redirection issue for logged-in users (#26105)
  * Improve "gitea doctor" sub-command and fix "help" commands (#26072)
  * Fix the truncate and alignment problem for some admin tables (#26042)
  * Update minimum password length requirements (#25946)
  * Do not "guess" the file encoding/BOM when using API to upload files (#25828)
  * Restructure issue list template, styles (#25750)
  * Fix `ref` for workflows triggered by `pull_request_target` (#25743)
  * Fix issues indexer document mapping (#25619)
  * Use JSON response for "user/logout" (#25522)
  * Fix migrate page layout on mobile (#25507)
  * Link to existing PR when trying to open a new PR on the same branches (#25494)
  * Do not publish docker release images on `-dev` tags (#25471)
  * Support `pull_request_target` event (#25229)
  * Modify the content format of the Feishu webhook (#25106)
* ENHANCEMENTS
  * Render email addresses as such if followed by punctuation (#27987) (#27992)
  * Show error toast when file size exceeds the limits (#27985) (#27986)
  * Fix citation error when the file size is larger than 1024 bytes (#27958) (#27965)
  * Remove action runners on user deletion (#27902) (#27908)
  * Remove set tabindex on view issue (#27892) (#27896)
  * Reduce margin/padding on flex-list items and divider (#27872) (#27874)
  * Change katex limits (#27823) (#27868)
  * Clean up template locale usage (#27856) (#27857)
  * Add dedicated class for empty placeholders (#27788) (#27792)
  * Add gap between diff boxes (#27776) (#27781)
  * Fix incorrect "tab" parameter for repo search sub-template (#27755) (#27764)
  * Enable followCursor for language stats bar (#27713) (#27739)
  * Improve diff tree spacing (#27714) (#27719)
  * Feed UI Improvements (#27356) (#27717)
  * Improve feed icons and feed merge text color (#27498) (#27716)
  * [FIX] resolve confusing colors in languages stats by insert a gap (#27704) (#27715)
  * Add doctor dbconsistency fix to delete repos with no owner (#27290) (#27693)
  * Fix required checkboxes in issue forms (#27592) (#27692)
  * Hide archived labels by default from the suggestions when assigning labels for an issue (#27451) (#27661)
  * Cleanup repo details icons/labels (#27644) (#27654)
  * Keep filter when showing unfiltered results on explore page (#27192) (#27589)
  * Show manual cron run's last time (#27544) (#27577)
  * Revert "Fix pr template (#27436)" (#27567)
  * Increase queue length (#27555) (#27562)
  * Avoid run change title process when the title is same (#27467) (#27558)
  * Remove max-width and add hide text overflow (#27359) (#27550)
  * Add hover background to wiki list page (#27507) (#27521)
  * Fix mermaid flowchart margin issue (#27503) (#27516)
  * Refactor system setting (#27000) (#27452)
  * Fix  missing `ctx`  in new_form.tmpl  (#27434) (#27438)
  * Add Index to `action.user_id` (#27403) (#27425)
  * Don't use subselect in `DeleteIssuesByRepoID` (#27332) (#27408)
  * Add support for HEAD ref in /src/branch and /src/commit routes (#27384) (#27407)
  * Make Actions tasks/jobs timeouts configurable by the user (#27400) (#27402)
  * Hide archived labels when filtering by labels on the issue list (#27115) (#27381)
  * Highlight user details link (#26998) (#27376)
  * Add protected branch name description (#27257) (#27351)
  * Improve tree not found page (#26570) (#27346)
  * Add Index to `comment.dependent_issue_id` (#27325) (#27340)
  * Improve branch list UI (#27319) (#27324)
  * Fix divider in subscription page (#27298) (#27301)
  * Add missed return to actions view fetch (#27289) (#27293)
  * Backport ctx locale refactoring manually (#27231) (#27259) (#27260)
  * Disable `Test Delivery` and `Replay` webhook buttons when webhook is inactive (#27211) (#27253)
  * Use mask-based fade-out effect for `.new-menu` (#27181) (#27243)
  * Cleanup locale function usage (#27227) (#27240)
  * Fix z-index on markdown completion (#27237) (#27239)
  * Fix Fomantic UI dropdown icon bug when there is a search input in menu (#27225) (#27228)
  * Allow copying issue comment link on archived repos and when not logged in (#27193) (#27210)
  * Fix: text decorator on issue sidebar menu label (#27206) (#27209)
  * Fix dropdown icon position (#27175) (#27177)
  * Add index to `issue_user.issue_id` (#27154) (#27158)
  * Increase auth provider icon size on login page (#27122)
  * Remove a `gt-float-right` and some unnecessary helpers (#27110)
  * Change green buttons to primary color (#27099)
  * Use db.WithTx for AddTeamMember to avoid ctx abuse (#27095)
  * Use `print` instead of `printf` (#27093)
  * Remove the useless function `GetUserIssueStats` and move relevant tests to `indexer_test.go` (#27067)
  * Search branches (#27055)
  * Display all user types and org types on admin management UI (#27050)
  * Ui correction in mobile view nav bar left aligned items. (#27046)
  * Chroma color tweaks (#26978)
  * Move some functions to service layer (#26969)
  * Improve "language stats" UI (#26968)
  * Replace `util.SliceXxx`  with `slices.Xxx` (#26958)
  * Refactor dashboard/feed.tmpl (#26956)
  * Move repository deletion to service layer (#26948)
  * Fix the missing repo count (#26942)
  * Improve hint when uploading a too large avatar (#26935)
  * Extract common code to new template (#26933)
  * Move createrepository from module to service layer (#26927)
  * Move notification interface to services layer (#26915)
  * Move feed notification service layer (#26908)
  * Move ui notification to service layer (#26907)
  * Move indexer notification to service layer (#26906)
  * Move mail notification logic to service layer (#26905)
  * Extract common code to new template (#26903)
  * Show queue's active worker number (#26896)
  * Fix media description render for orgmode (#26895)
  * Remove CSS `has` selector and improve various styles (#26891)
  * Relocate the `RSS user feed` button (#26882)
  * Refactor "shortsha" (#26877)
  * Refactor `og:description` to limit the max length (#26876)
  * Move web/api context related testing function into a separate package (#26859)
  * Redable error on S3 storage connection failure (#26856)
  * Improve opengraph previews (#26851)
  * Add more descriptive error on forgot password page (#26848)
  * Show always repo count in header (#26842)
  * Remove "TODO" tasks from CSS file (#26835)
  * Render code blocks in repo description (#26830)
  * Minor dashboard tweaks, fix flex-list margins (#26829)
  * Remove polluted `.ui.right` (#26825)
  * Display archived labels specially when listing labels (#26820)
  * Remove polluted ".ui.left" style (#26809)
  * Make it posible to customize nav text color via css var (#26807)
  * Refactor lfs requests (#26783)
  * Improve flex list item padding (#26779)
  * Remove fomantic `text` module (#26777)
  * Remove fomantic `item` module (#26775)
  * Remove redundant nil check in `WalkGitLog` (#26773)
  * Reduce some allocations in type conversion (#26772)
  * Refactor some CSS styles and simplify code (#26771)
  * Unify `border-radius` behavior (#26770)
  * Improve modal dialog UI (#26764)
  * Allow "latest" to be used in release vTag when downloading file (#26748)
  * Adding hint `Archived` to archive label. (#26741)
  * Move `modules/mirror` to `services` (#26737)
  * Add "dir=auto" for input/textarea elements by default (#26735)
  * Add auth-required to config.json for Cargo http registry (#26729)
  * Simplify helper CSS classes and avoid abuse (#26728)
  * Make web context initialize correctly for different cases (#26726)
  * Focus editor on "Write" tab click (#26714)
  * Remove incorrect CSS helper classes (#26712)
  * Fix review bar misalignment (#26711)
  * Add reverseproxy auth for API back with default disabled (#26703)
  * Add default label in branch select list (#26697)
  * Improve Image Diff UI (#26696)
  * Fixed text overflow in dropdown menu (#26694)
  * [Refactor] getIssueStatsChunk to move inner function into own one (#26671)
  * Remove fomantic loader module (#26670)
  * Add `member`, `collaborator`, `contributor`, and `first-time contributor` roles and tooltips (#26658)
  * Improve some flex layouts (#26649)
  * Improve the branch selector tab UI (#26631)
  * Improve show role (#26621)
  * Remove avatarHTML from template helpers (#26598)
  * Allow text selection in actions step header (#26588)
  * Improve translation of milestone filters (#26569)
  * Add optimistic lock to ActionRun table (#26563)
  * Update team invitation email link (#26550)
  * Differentiate better between user settings and admin settings (#26538)
  * Check disabled workflow when rerun jobs (#26535)
  * Improve deadline icon location in milestone list page (#26532)
  * Improve repo sub menu (#26531)
  * Fix the display of org level badges (#26504)
  * Rename `Sync2` -> `Sync` (#26479)
  * Fix stderr usages (#26477)
  * Remove fomantic transition module (#26469)
  * Refactor tests (#26464)
  * Refactor project templates (#26448)
  * Fall back to esbuild for css minify (#26445)
  * Always show usernames in reaction tooltips (#26444)
  * Use correct pull request commit link instead of a generic commit link (#26434)
  * Refactor "editorconfig" (#26391)
  * Make `user-content-* ` consistent with github (#26388)
  * Remove unnecessary template helper repoAvatar (#26387)
  * Remove unnecessary template helper DisableGravatar (#26386)
  * Use template context function for avatar rendering (#26385)
  * Rename code_langauge.go to code_language.go (#26377)
  * Use more `IssueList` instead of `[]*Issue` (#26369)
  * Do not highlight `#number` in documents (#26365)
  * Fix display problems of members and teams unit (#26363)
  * Fix 404 error when remove self from an organization (#26362)
  * Improve CLI and messages (#26341)
  * Refactor backend SVG package and add tests (#26335)
  * Add link to job details and tooltip to commit status in repo list in dashboard (#26326)
  * Use yellow if an approved review is stale (#26312)
  * Remove commit load branches and tags in wiki repo (#26304)
  * Add highlight to selected repos in milestone dashboard (#26300)
  * Delete `issue_service.CreateComment` (#26298)
  * Do not show Profile README when repository is private (#26295)
  * Tweak actions menu (#26278)
  * Start using template context function (#26254)
  * Use calendar icon for `Joined on...` in profiles (#26215)
  * Add 'Show on a map' button to Location in profile, fix layout (#26214)
  * Render plaintext task list items for markdown files (#26186)
  * Add tooltip to describe LFS table column and color `delete LFS file` button red (#26181)
  * Release attachments duplicated check (#26176)
  * De-emphasize issue sidebar buttons (#26171)
  * Fixing the align of commit stats in commit_page template. (#26161)
  * Allow editing push mirrors after creation (#26151)
  * Move web JSON functions to web context and simplify code (#26132)
  * Refactor improve NoBetterThan (#26126)
  * Improve clickable area in repo action view page (#26115)
  * Add context parameter to some database functions (#26055)
  * Docusaurus-ify (#26051)
  * Improve text for empty issue/pr description (#26047)
  * Categorize admin settings sidebar panel (#26030)
  * Remove redundant "RouteMethods" method (#26024)
  * Refactor and enhance issue indexer to support both searching, filtering and paging (#26012)
  * Add a link to OpenID Issuer URL in WebFinger response (#26000)
  * Fix UI for release tag page / wiki page / subscription page (#25948)
  * Support copy protected branch from template repository (#25889)
  * Improve display of Labels/Projects/Assignees sort options (#25886)
  * Fix margin on the new/edit project page. (#25885)
  * Show image size on view page (#25884)
  * Remove ref name in PR commits page (#25876)
  * Allow the use of alternative net.Listener implementations by downstreams (#25855)
  * Refactor "Content" for file uploading (#25851)
  * Add error info if no user can fork the repo (#25820)
  * Show edit title button on commits tab of PR, too (#25791)
  * Introduce `flex-list` & `flex-item` elements for Gitea UI (#25790)
  * Don't stack PR tab menu on small screens (#25789)
  * Repository Archived text title center align (#25767)
  * Make route middleware/handler mockable (#25766)
  * Move issue filters to shared template (#25729)
  * Use frontend fetch for branch dropdown component (#25719)
  * Add open/closed field support for issue index (#25708)
  * Some less naked returns (#25682)
  * Fix inconsistent user profile layout across tabs (#25625)
  * Get latest commit statuses from database instead of git data on dashboard for repositories (#25605)
  * Adding  branch-name copy  to clipboard branches screen. (#25596)
  * Update emoji set to Unicode 15 (#25595)
  * Move some files under repo/setting (#25585)
  * Add custom ansi colors and CSS variables for them (#25546)
  * Add log line anchor for action logs (#25532)
  * Use flex instead of float for sort button and search input (#25519)
  * Update octicons and use `octicon-file-directory-symlink` (#25453)
  * Add toasts to UI (#25449)
  * Fine tune project board label colors and modal content background (#25419)
  * Import additional secrets via file uri (#25408)
  * Switch to ansi_up for ansi rendering in actions (#25401)
  * Store and use seconds for timeline time comments (#25392)
  * Support displaying diff stats in PR tab bar (#25387)
  * Use fetch form action for lock/unlock/pin/unpin on sidebar (#25380)
  * Refactor: TotalTimes return seconds (#25370)
  * Navbar styling rework (#25343)
  * Introduce shared template for search inputs (#25338)
  * Only show 'Manage Account Links' when necessary (#25311)
  * Improve 'Privacy' section in profile settings (#25309)
  * Substitute variables in path names of template repos too (#25294)
  * Fix tags line no margin see #25255 (#25280)
  * Use fetch to send requests to create issues/comments (#25258)
  * Change form actions to fetch for submit review box (#25219)
  * Improve AJAX link and modal confirm dialog (#25210)
  * Reduce unnecessary DB queries for Actions tasks (#25199)
  * Disable `Create column` button while the column name is empty (#25192)
  * Refactor indexer (#25174)
  * Adjust style for action run list (align icons, adjust padding) (#25170)
  * Remove duplicated functions when deleting a branch (#25128)
  * Make confusable character warning less jarring (#25069)
  * Highlight viewed files differently in the PR filetree (#24956)
  * Support changing labels of Actions runner without re-registration (#24806)
  * Fix duplicate Reviewed-by trailers (#24796)
  * Resolve issue with sort icons on admin/users and admin/runners (#24360)
  * Split lfs size from repository size (#22900)
  * Sync branches into databases (#22743)
  * Disable run user change in installation page (#22499)
  * Add merge files files to GetCommitFileStatus (#20515)
  * Show OpenID Connect and OAuth on signup page (#20242)
* SECURITY
  * Dont leak private users via extensions (#28023) (#28029)
  * Expanded minimum RSA Keylength to 3072 (#26604)
* TESTING
  * Add user secrets API integration tests (#27832) (#27852)
  * Add tests for db indexer in indexer_test.go (#27087)
  * Speed up TestEventSourceManagerRun (#26262)
  * Add unit test for user renaming (#26261)
  * Add some Wiki unit tests (#26260)
  * Improve unit test for caching (#26185)
  * Add unit test for `HashAvatar` (#25662)
* TRANSLATION
  * Backport translations to v1.21 (#27899)
  * Fix issues in translation file (#27699) (#27737)
  * Add locale for deleted head branch (#26296)
  * Improve multiple strings in en-US locale (#26213)
  * Fix broken translations for package documantion (#25742)
  * Correct translation wrong format (#25643)
* BUILD
  * Dockerfile small refactor (#27757) (#27826)
  * Fix build errors on BSD (in BSDMakefile) (#27594) (#27608)
  * Fully replace drone with actions (#27556) (#27575)
  * Enable markdownlint `no-duplicate-header` (#27500) (#27506)
  * Enable production source maps for index.js, fix CSS sourcemaps (#27291) (#27295)
  * Update snap package (#27021)
  * Bump go to 1.21 (#26608)
  * Bump xgo to go-1.21.x and node to 20 in release-version (#26589)
  * Add template linting via djlint (#25212)
* DOCS
  * Change default size of issue/pr attachments and repo file (#27946) (#28017)
  * Remove `known issue` section in Gitea Actions Doc (#27930) (#27938)
  * Remove outdated paragraphs when comparing Gitea Actions to GitHub Actions (#27119)
  * Update brew installation documentation since gitea moved to brew core package (#27070)
  * Actions are no longer experimental, so enable them by default (#27054)
  * Add a documentation note for Windows Service (#26938)
  * Add sparse url in cargo package guide (#26937)
  * Update nginx recommendations (#26924)
  * Update backup instructions to align with archive structure (#26902)
  * Expanding documentation in queue.go (#26889)
  * Update info regarding internet connection for build (#26776)
  * Docs: template variables (#26547)
  * Update index doc (#26455)
  * Update zh-cn documentation (#26406)
  * Fix typos and grammer problems for actions documentation (#26328)
  * Update documentation for 1.21 actions (#26317)
  * Doc update swagger doc for POST `/orgs/{org}/teams` (#26155)
  * Doc sync authentication.md to zh-cn (#26117)
  * Doc guide the user to create the appropriate level runner (#26091)
  * Make organization redirect warning more clear (#26077)
  * Update blog links (#25843)
  * Fix default value for LocalURL (#25426)
  * Update `from-source.zh-cn.md` & `from-source.en-us.md` - Cross Compile Using Zig (#25194)
* MISC
  * Replace deprecated `elliptic.Marshal` (#26800)
  * Add elapsed time on debug for slow git commands (#25642)

## Contributors to this release

* [@6543](https://github.com/6543)
* [@CaiCandong](https://github.com/CaiCandong)
* [@Duke1715](https://github.com/Duke1715)
* [@ExplodingDragon](https://github.com/ExplodingDragon)
* [@GeorgDangl](https://github.com/GeorgDangl)
* [@GiteaBot](https://github.com/GiteaBot)
* [@HesterG](https://github.com/HesterG)
* [@Infinoid](https://github.com/Infinoid)
* [@JakobDev](https://github.com/JakobDev)
* [@Juneezee](https://github.com/Juneezee)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@KazzmanK](https://github.com/KazzmanK)
* [@LAX18](https://github.com/LAX18)
* [@Makonike](https://github.com/Makonike)
* [@Maks1mS](https://github.com/Maks1mS)
* [@MomentQYC](https://github.com/MomentQYC)
* [@POPSuL](https://github.com/POPSuL)
* [@TimberBro](https://github.com/TimberBro)
* [@Track3](https://github.com/Track3)
* [@Zettat123](https://github.com/Zettat123)
* [@a1012112796](https://github.com/a1012112796)
* [@appleboy](https://github.com/appleboy)
* [@asdil12](https://github.com/asdil12)
* [@cassiozareck](https://github.com/cassiozareck)
* [@chenrui333](https://github.com/chenrui333)
* [@cl-bvl](https://github.com/cl-bvl)
* [@corytodd](https://github.com/corytodd)
* [@delvh](https://github.com/delvh)
* [@denyskon](https://github.com/denyskon)
* [@derelm](https://github.com/derelm)
* [@devioa](https://github.com/devioa)
* [@earl-warren](https://github.com/earl-warren)
* [@editfund-founder](https://github.com/editfund-founder)
* [@eeyrjmr](https://github.com/eeyrjmr)
* [@elzapp](https://github.com/elzapp)
* [@eyedeekay](https://github.com/eyedeekay)
* [@felixvictor](https://github.com/felixvictor)
* [@fuxiaohei](https://github.com/fuxiaohei)
* [@harryzcy](https://github.com/harryzcy)
* [@hazycora](https://github.com/hazycora)
* [@hickford](https://github.com/hickford)
* [@hiifong](https://github.com/hiifong)
* [@jackHay22](https://github.com/jackHay22)
* [@jasugun](https://github.com/jasugun)
* [@jeremiepozzigithub](https://github.com/jeremiepozzigithub)
* [@jladbrook](https://github.com/jladbrook)
* [@jolheiser](https://github.com/jolheiser)
* [@js6pak](https://github.com/js6pak)
* [@jtran](https://github.com/jtran)
* [@kdumontnu](https://github.com/kdumontnu)
* [@kerwin612](https://github.com/kerwin612)
* [@lafriks](https://github.com/lafriks)
* [@leavesster](https://github.com/leavesster)
* [@linusg](https://github.com/linusg)
* [@lng2020](https://github.com/lng2020)
* [@lonix1](https://github.com/lonix1)
* [@lunny](https://github.com/lunny)
* [@luwol03](https://github.com/luwol03)
* [@mainboarder](https://github.com/mainboarder)
* [@merlleu](https://github.com/merlleu)
* [@minijaws](https://github.com/minijaws)
* [@mrsdizzie](https://github.com/mrsdizzie)
* [@mxplusb](https://github.com/mxplusb)
* [@n0toose](https://github.com/n0toose)
* [@nekrondev](https://github.com/nekrondev)
* [@nephatrine](https://github.com/nephatrine)
* [@nikohoffren](https://github.com/nikohoffren)
* [@peeley](https://github.com/peeley)
* [@peterverraedt](https://github.com/peterverraedt)
* [@pmig](https://github.com/pmig)
* [@puni9869](https://github.com/puni9869)
* [@saegl5](https://github.com/saegl5)
* [@sebastian-sauer](https://github.com/sebastian-sauer)
* [@sgabenov](https://github.com/sgabenov)
* [@sh7dm](https://github.com/sh7dm)
* [@shyim](https://github.com/shyim)
* [@sillyguodong](https://github.com/sillyguodong)
* [@silverwind](https://github.com/silverwind)
* [@sonjek](https://github.com/sonjek)
* [@svenseeberg](https://github.com/svenseeberg)
* [@techknowlogick](https://github.com/techknowlogick)
* [@thezzisu](https://github.com/thezzisu)
* [@thigg](https://github.com/thigg)
* [@thomas-mc-work](https://github.com/thomas-mc-work)
* [@tomaswarynyca](https://github.com/tomaswarynyca)
* [@uvulpos](https://github.com/uvulpos)
* [@vitalif](https://github.com/vitalif)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yardenshoham](https://github.com/yardenshoham)
* [@yp05327](https://github.com/yp05327)
