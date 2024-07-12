---
date: 2024-05-23T20:00:00+02:00
authors:
  - "delvh"
  - "lunny"
  - "yardenshoham"
  - "wxiaoguang"
title: "Gitea 1.22.0 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.22.0"
---

We are thrilled to announce the latest release of Gitea **v1.22.0**.

This release stands as a monumental milestone in our development journey with a record-breaking incorporation of [1481](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.22.0+is%3Amerged) pull requests. It marks the most extensive update in Gitea's history, showcasing a plethora of new features and infrastructure improvements.

Noteworthy advancements in this release include the introduction of `HTMX` and `Tailwind`, signaling a strategic shift as we gradually phase out `jquery` and `Fomantic UI`. These changes reflect our commitment to embracing modern technologies and enhancing the user experience. Especially thanks to [**@silverwind**](https://github.com/silverwind) and [**@yardenshoham**](https://github.com/yardenshoham) for their contributions to this work.

<!-- Security Thanks! -->

You can download it for example from our [downloads page](https://dl.gitea.com/gitea/1.22.0/). Please read our [installation guide](https://docs.gitea.com/next/category/installation) for more information on installation.

We would like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.<!-- Didn't OpenCollective shut down? -->

As always, the changes are sorted descending by what we deem most important for users and admins, so the most important change comes first.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Breaking Changes

### :warning: Increased DB requirements ([#27337](https://github.com/go-gitea/gitea/pull/27337))

Gitea only officially supports DBs that have not reached EOL. There are many database versions that have reached End of Life.

* Ref: [https://endoflife.date/mysql](https://endoflife.date/mysql)
* Ref: [https://endoflife.date/postgresql](https://endoflife.date/postgresql)
* Ref: [https://endoflife.date/mssqlserver](https://endoflife.date/mssqlserver)

As such, we have increased the DB requirements as follows:

* `MySQL 5.7` → `MySQL 8.0`
* `PostgreSQL 10` → `PostgreSQL 12`
* `MSSQL 2008` → `MSSQL 2012`

:::warning

Support for `MySQL 5.7`, `PostgreSQL 10/11`, and `MSSQL 2008` is dropped. You are encouraged to upgrade to supported versions.

:::

If you have to use an unsupported database version, please [get in touch with us](https://docs.gitea.com/help/support) for information on our Extended Support Contracts. We can provide testing and support for older databases and integrate those fixes into the Gitea codebase.

### :warning: MySQL/MSSQL DBs should be case sensitive ([#28662](https://github.com/go-gitea/gitea/pull/28662))

`MySQL` (including `MariaDB`) and `MSSQL` create databases **case-insensitively** by default, meaning for example that `gitea` is equal to `GITea`.

Historically, this led to many bug reports of functionality behaving unexpectedly, i.e. branches not being able to be inserted because a new branch only differed in casing compared to an existing branch.
Gitea was never intended to be used in a case-insensitive DB.

Now, Gitea will explicitly warn you if it detects being run in a case-insensitive DB.
If you haven't done so already, please convert your DB to a case-sensitive one.

:::info
`Postgres` and `SQLite` users are most likely unaffected as those DBs are already case-sensitive by default.
:::

### :warning: Breaking summary for template refactoring ([#29395](https://github.com/go-gitea/gitea/pull/29395))

The template system has been refactored, and some template functions may have been changed or removed.

* `Safe` is renamed to `SafeHTML`, and in most cases it shouldn't be used.
* `Escape` is renamed to `HTMLEscape`, and in most cases it shouldn't be used. The template should escape most variables automatically.
* `Str2html` is renamed to `SanitizeHTML`, only use it when necessary, it only "sanitizes" the input by pre-defined rules, but it doesn't "render" or "convert" the content.
* Use `HTMLFormat` instead of `printf` when processing HTML-related contents.

:::warning
If you use custom templates (either for the UI or for emails), please read through [#29395](https://github.com/go-gitea/gitea/pull/29395) to ensure your custom templates will work again.
:::

### :warning: Default theme change ([#27419](https://github.com/go-gitea/gitea/pull/27419))

Gitea simplified its theme naming in this release.

The available themes are now `gitea-light` (previously `gitea`), `gitea-dark` (previously `arc-green`), `gitea-auto` (previously `auto`).

This has multiple effects:

* If you have any custom themes named like that, please rename them to continue using them.

* It is now possible to check which theme is active by querying the attribute
`html[data-theme]` instead of the previous `html.theme-<theme>` when expressing the query as a CSS selector.
This change is especially important for third-party tooling whose behavior depends on which theme is active.

* If you set `[ui].DEFAULT_THEME` previously, you need to change it to the new theme name.
If you see a black-and-white UI after the update, it is likely that you need to update this setting as the theme cannot be found.

### :warning: Changed markdown highlighting syntax ([#29121](https://github.com/go-gitea/gitea/pull/29121))

As we will explain in more detail in the new features, Gitea is now capable of additional alert types using a new syntax.

At the same time, the old syntax `> **Note** A note`/`> **Warning** A warning` has been removed, so please rewrite your existing markdown documents to the new syntax where applicable.

If you used:

```markdown
> **Note** My note
```

or

```markdown
> **Warning** My warning
```

Rewrite these as:

```markdown
> [!NOTE]
> My note
```

or

```markdown
> [!WARNING]
> My warning
```

### :warning: Only minimal markdown allowed in repo descriptions ([#28141](https://github.com/go-gitea/gitea/pull/28141))

Previously, the repository description accepted any sort of markdown.
Now, you can only use basic markdown features such as **bold**, *italic*, or `highlighted` text.

### :warning: Breaking API changes ([#27153](https://github.com/go-gitea/gitea/pull/27153), [#28339](https://github.com/go-gitea/gitea/pull/28339))

There were two minor breaking changes to the API in this release:

* Previously, the push mirror API returned timestamps in an incorrect format. This has now been updated to behave exactly like any other timestamp.
* The already deprecated (and due to a bug, unusable) pagination parameter `per_page` has been removed from the `list releases` endpoint. Instead, you should use the `limit` parameter.

### :warning: Login is now remembered for a month by default ([#30150](https://github.com/go-gitea/gitea/pull/30150))

Previously, your login was only remembered for a week by default.
However, many instances don't set the setting and have no explicit security requirements, so having such a short interval is not user-friendly.

If your instance requires a high level of security, you may want to set

```ini title="app.ini" title="app.ini"
[security]
// highlight-next-line
LOGIN_REMEMBER_DAYS = 7
```

or something similar again.

### :warning: Removed configurations ([#27606](https://github.com/go-gitea/gitea/pull/27606), [#28527](https://github.com/go-gitea/gitea/pull/28527))

Some settings are no longer used. If you previously set any of them, you can now safely remove them from your config:

* ~~`[security].COOKIE_USERNAME`~~
* ~~`[cache].ENABLED`~~
* ~~`[cache.last_commit].ENABLED`~~

:::warning
Caches are now enabled by default and cannot be disabled. The default adapter is `memory`, you can change it to `redis`, etc. More details are in https://docs.gitea.com/administration/config-cheat-sheet#cache-cache
:::

### :warning: Support storage base path as prefix ([#27827](https://github.com/go-gitea/gitea/pull/27827))

This PR will affect all configurations having `base_path` in the `storage` section but no `base_path` in the derived storage configuration sections. The `base_path` on `[storage]` will become a prefix for them but will not share the same `base_path`.

```ini title="app.ini"
[storage]
; Now it becomes a prefix of derived base_path but not share the name
// highlight-next-line
base_path = xxx 
```

### :warning: No Gravatar by default ([#28548](https://github.com/go-gitea/gitea/pull/28548))

The default value of `[server].OFFLINE_MODE` has been changed to `true`, so Gitea will not allow Gravatar queries by default.

However, most existing instances won't be affected by this, as this setting is only used as the **default value** for the Gravatar settings, not the actual value.

Additionally, it is saved into the config when you install Gitea.

## Hightlight Features

### :rocket: New themes ([#29283](https://github.com/go-gitea/gitea/pull/29283), [#30625](https://github.com/go-gitea/gitea/pull/30625))

As we pre-announced in **[1.21.0](https://blog.gitea.com/release-of-1.21.0/)**, Gitea's dark theme has been completely rewritten.

Instead of the previous green-gray mix, it is now a more blue-black mix.

![new repo layout](/demos/29283/1.png)

We hope you like the new design, even though it is completely different from the previous experience.

Gitea also introduced initial support for colorblindness-friendly themes. Now, users are able to select an alternative theme, which would be easier for them to use should they need the different themes.

Thanks to [**@silverwind**](https://github.com/silverwind) for the refactoring of the dark theme, and to [**@wxiaoguang**](https://github.com/wxiaoguang) for introducing the new colorblindness-friendly themes.

### :rocket: Profiles also for organizations ([#27955](https://github.com/go-gitea/gitea/pull/27955))

Previously, only users were able to customize their profiles.
Now, organizations have gained this ability as well.

![profiles for organizations](/demos/27955/1.png)

Thanks to [**@6543**](https://github.com/6543) for their work on adding profiles to organizations.

### :rocket: Code search without indexer ([#29998](https://github.com/go-gitea/gitea/pull/29998))

By using git's ability, end users (especially small instance users) do not need to enable the indexer, they could also benefit from the code searching feature.

![search code without indexer](/demos/29998/1.png)

Thanks to [**@wxiaoguang**](https://github.com/wxiaoguang) for adding this functionality.

### :rocket: Support for SHA256 repositories ([#23894](https://github.com/go-gitea/gitea/pull/23894))

When creating a repository, you can now choose `SHA1` or `SHA256` as the method used to create a Commit ID if your server git supports it (`git >= 2.29`, released in October of 2020).

:::info
Both that **this decision is irreversible** once the repo has been created and that clients wanting to download a SHA256-repo need `git >= 2.29` themselves.
:::

:::warning
Additionally, note that the Gitea `GoGit` version does not support SHA256.
:::

Why would you want to use a `SHA256` repo nonetheless?
`SHA1`, the predecessor of and only competitor to `SHA256` for git, is outdated by now and no longer considered safe, while `SHA256` is not yet known to be unsafe.

:::success
Fun Fact: As far as we know at the time of writing, Gitea is the first hoster that allows for storing SHA256 repos.
:::

![sha256](/demos/23894/sha256.png)

Thank you to [**@AdamMajer**](https://github.com/AdamMajer) for their work in contributing this functionality.

### :rocket: Put an Edit File button on Pull Request files to allow a quick online operation ([#29697](https://github.com/go-gitea/gitea/pull/29697))

This PR put an `Edit File` button on pull request files to allow a quick edit for a file in the pull request. After the edit is finished, it will return to the viewed file position on the pull request files tab.

It also uses a branch view file link instead of a commit link when it's a non-commit pull request files view.

![allow quick online operation](/demos/29697/1.png)

Thank you to [**@lunny**](https://github.com/lunny) for contributing this enhancement.

### :rocket: Allow everyone to read or write a wiki by a repo unit setting (Experimental) ([#30495](https://github.com/go-gitea/gitea/pull/30495))

Now you can set the wiki as public for a **private/limit** repository.

This is very useful for those repositories that would like to keep communication with users but keep code private. And you don't need another place to write your wiki. The public users can be allowed to **read** or **write** the wiki, which depends on the wiki part in the repository setting.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this PR.

### :rocket: Markdown code preview ([#30249](https://github.com/go-gitea/gitea/pull/30249))

When you embed a link to code in Markdown, the referenced code at the given commit will now be displayed.

![embedded code preview](/demos/30249/1.png)

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this functionality.

### :rocket: Support pasting URLs over markdown text ([#29566](https://github.com/go-gitea/gitea/pull/29566))

Support pasting URLs over selection text in the textarea editor. Image paste works as usual in both Textarea and EasyMDE.

:::warning
This does not work in EasyMDE and I don't intend to support it.
:::

![pasting URLs over markdown](/demos/29566/1.gif)

Thank you to [**@silverwind**](https://github.com/silverwind) for contributing this enhancement.

### :rocket: New markdown highlighting syntax ([#29121](https://github.com/go-gitea/gitea/pull/29121))

As we already teased above in the breaking changes, Gitea is now able to display Markdown alerts, just like GitHub. In fact, you can learn more about this feature in the [GitHub documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts).

![Alert blocks](/demos/29121/1.png)

Thank you to [**@yardenshoham**](https://github.com/yardenshoham) for contributing this enhancement.

### :rocket: Customizable `Open with <IDE>` menu ([#29320](https://github.com/go-gitea/gitea/pull/29320))

Gitea already offered the option to `Clone repo with VS Code` for quite some time.

However, there are other editors out there that support something like that as well.

To keep the list of editors manageable, you can now freely define **instance-wide** which editors will be shown in this list.

:::info
However, at the moment, it is not possible to display the logo of an editor.
For now, only `VSCode`, `VSCodium`, and `IntelliJ Idea` have icons.
:::

All other editors are displayed with a generic icon.

You can define these editors under `Site Administration` \> `Configuration` \> `Settings` \> `Repository`:
![Configuration screen](/demos/29320/configuration.png)

This results in the menu looking like

![default menu screenshot](/demos/29320/default.png)

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this enhancement.

### :rocket: Better repo statistics ([#27882](https://github.com/go-gitea/gitea/pull/27882), [#29191](https://github.com/go-gitea/gitea/pull/29191), [#29210](https://github.com/go-gitea/gitea/pull/29210))

After many years, Gitea has finally gotten a decent `Activity` tab for repos.
This includes the following:

* An overview of which persons contributed how much to a repo

![commit graph screenshot](/demos/27882/1.png)

* An overview of when a project was how active, both in terms of when and how much code was changed

![code frequency screenshot](/demos/29191/1.png)

* As well as when and how many commits were pushed

![recent commits screenshot](/demos/29210/1.png)

Thank you to [**@sahinakkaya**](https://github.com/sahinakkaya) for contributing these brilliant features.

### :rocket: Add user blocking ([#29028](https://github.com/go-gitea/gitea/pull/29028))

Adds the ability to block a user from a personal account or organization to restrict how the blocked user can interact with the blocker.

* You can block a user from their profile page:

![block user in profile](/demos/29028/block-user.png)

* You can also block a user from an issue or pull request:

![menu](/demos/29028/menu.png)

* You can check the blocked users list in user settings:

![user settings](/demos/29028/user-settings.png)

Thank you to [**@KN4CK3R**](https://github.com/KN4CK3R) for contributing this new feature.

## Actions Improvements

Since v1.19, Gitea has introduced Actions. It becomes more and more welcome. We are continuously improving Gitea Actions. In this release, you can now use the official runner images [runner-images](https://gitea.com/gitea/runner-images) and more features listed below.

### :rocket: Actions Artifacts v4 backend ([#28965](https://github.com/go-gitea/gitea/pull/28965))

Now you can use the actions [`actions/upload-artifact@v4`](https://github.com/actions/upload-artifact) / [`actions/download-artifact@v4`](https://github.com/actions/download-artifact) to upload/download artifacts.

Thank you to [**@ChristopherHX**](https://github.com/ChristopherHX) for contributing this new protocol implementation.

::: warning
The feature needs patched `actions/upload-artifact@v4` / `actions/download-artifact@v4`, like `christopherhx/gitea-upload-artifact@v4` and `christopherhx/gitea-download-artifact@v4`, to not return errors due to GHES not being supported yet.
:::

### :rocket: Artifact deletion in Actions UI ([#27172](https://github.com/go-gitea/gitea/pull/27172))

Now you can delete artifacts from the UI.

Thank you to [**@fuxiaohei**](https://github.com/fuxiaohei) for contributing this enhancement.

![artifact deletion](/demos/27172/1.png)

### :rocket: Implement actions badge SVGs ([#28102](https://github.com/go-gitea/gitea/pull/28102))

If one repository enabled actions, now a url like `https://<GITEA_INSTANCE>/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg` can be used to display a badge to indicate the commit status of the default branch.

* Success Badge

![actions badge](/demos/28102/badge-success.svg)

* Waiting Badge

![actions badge](/demos/28102/badge-waiting.svg)

* Running Badge

![actions badge](/demos/28102/badge-running.svg)

* Failure Badge

![actions badge](/demos/28102/badge-failure.svg)

Thank you to [**@lng2020**](https://github.com/lng2020) for contributing this feature.

### :rocket: Add skip ci functionality ([#28075](https://github.com/go-gitea/gitea/pull/28075), [#29774](https://github.com/go-gitea/gitea/pull/29774))

Adds the possibility to skip workflow execution if the commit message contains a string like `[skip ci]` or similar. You can also `[skip ci]` inside pull request titles.

Thank you to [**@denyskon**](https://github.com/denyskon) for contributing these enhancements.

### :rocket: Add get actions runner registration token for API routes, repo, org, user and global level ([#27144](https://github.com/go-gitea/gitea/pull/27144))

This API `/admin/runners/registration-token` could be used to get the registration token to create runners dynamically.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this enhancement.

### :rocket: Cancel previous actions runs of the same PR automatically ([#29961](https://github.com/go-gitea/gitea/pull/29961))

This will cancel previous runs for `pull_request_sync` events, so when a new push is made to the pull request, previous runs will be cancelled automatically.

Thank you to [**@wolfogre**](https://github.com/wolfogre) for contributing this enhancement.

### :rocket: Support instance-level actions variables ([#28115](https://github.com/go-gitea/gitea/pull/28115))

Now you can define instance-level variables so that every `organization` and `repository` can reuse them. The repository-level same-name variables will override organization-level variables, and organization-level variables will override instance-level variables.

![instance variables](/demos/28115/1.png)

Thank you to [**@jbgomond**](https://github.com/jbgomond) for contributing this feature.

## Administration Improvements

### :rocket: Allow options to disable user features on app.ini ([#29275](https://github.com/go-gitea/gitea/pull/29275), [#29447](https://github.com/go-gitea/gitea/pull/29447), [#29486](https://github.com/go-gitea/gitea/pull/29486))

A new option

```ini title="app.ini"
[admin]
// highlight-next-line
USER_DISABLED_FEATURES =
```

has been added to `app.ini` to allow the site administrator to deny certain user actions. Three values can be used:

* `deletion`: User cannot delete their own account.
* `manage_ssh_keys`: User cannot configure ssh keys.
* `manage_gpg_keys`: User cannot configure gpg keys.

Thank you to [**@lunny**](https://github.com/lunny) for contributing these features.

### :rocket: Allow to sync tags from admin dashboard ([#28045](https://github.com/go-gitea/gitea/pull/28045))

Now you can manually run a task to keep the consistency of git tags between git data and database.

Thank you to [**@JakobDev**](https://github.com/JakobDev) for contributing this enhancement.

### :rocket: Add global setting how timestamps should be rendered ([#28657](https://github.com/go-gitea/gitea/pull/28657))

Some admins prefer all timestamps to display the full date instead of relative time. They can do that now by setting

```ini title="app.ini"
[ui]
// highlight-next-line
PREFERRED_TIMESTAMP_TENSE = absolute
```

![Homepage](/demos/28657/homepage.png)

![Repository](/demos/28657/repository.png)

![Explore](/demos/28657/explore.png)

Thank you to [**@yardenshoham**](https://github.com/yardenshoham) for contributing this enhancement.

### :rocket: Add admin API route for managing user's badges ([#23106](https://github.com/go-gitea/gitea/pull/23106))

Administration API can now manage user's badges.

Thank you to [**@techknowlogick**](https://github.com/techknowlogick) for contributing this API enhancement.

## Improved performance

### :rocket: The loading performance of commit status from repository's default branch ([#29444](https://github.com/go-gitea/gitea/pull/29444), [#30223](https://github.com/go-gitea/gitea/pull/30223), [#30700](https://github.com/go-gitea/gitea/pull/30700))

Now the commit status of a repository's default branch in the repositories list will be very fast, even on a busy public site.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this optimization work.

### :rocket: The branch list page divergence loading improvements for those repositories with over thousands of branches ([#29577](https://github.com/go-gitea/gitea/pull/29577))

Previously, the branch list page on a repository that has many branches would take seconds. Now it should be under 200ms.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this optimization work.

### :rocket: The issues and pulls page loading performance ([#29900](https://github.com/go-gitea/gitea/pull/29900), [#29515](https://github.com/go-gitea/gitea/pull/29515))

Use batch loading instead of loading one by one to improve the performance of issues/pulls list page.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this optimization work.

### :rocket: Dashboard loading performance improvements ([#29010](https://github.com/go-gitea/gitea/pull/29010))

Do some loading speed optimization for feed user interface pages.

Thank you to [**@lunny**](https://github.com/lunny) for contributing this optimization work.

### :rocket: Improve package list performance ([#30520](https://github.com/go-gitea/gitea/pull/30520))

Improve the performance issue when viewing all packages of an organization.

Thank you to [**@KN4CK3R**](https://github.com/KN4CK3R) for contributing this optimization work.

## Changelog

## [1.22.0](https://github.com/go-gitea/gitea/releases/tag/v1.22.0) - 2024-05-27

* BREAKING
  * Improve reverse proxy documents and clarify the AppURL guessing behavior (#31003) (#31020)
  * Remember log in for a month by default (#30150)
  * Breaking summary for template refactoring (#29395)
    * All custom templates need to follow these changes
  * Recommend/convert to use case-sensitive collation for MySQL/MSSQL (#28662)
  * Make offline mode as default to not connect external avatar service by default (#28548)
  * Include public repos in the doer's dashboard for issue search (#28304)
  * Use restricted sanitizer for repository description (#28141)
  * Support storage base path as prefix (#27827)
  * Enhanced auth token / remember me (#27606)
  * Rename the default themes to `gitea-light`, `gitea-dark`, `gitea-auto` (#27419)
    * If you didn't see the new themes, please remove the `[ui].THEMES` config option from `app.ini`
  * Require MySQL 8.0, PostgreSQL 12, MSSQL 2012 (#27337)
* FEATURES
  * Allow everyone to read or write a wiki by a repo unit setting (#30495)
  * Use raw Wiki links for non-renderable Wiki files (#30273)
  * Render embedded code preview by permalink in markdown (#30234) (#30249)
  * Support repo code search without setting up an indexer (#29998)
  * Support pasting URLs over markdown text (#29566)
  * Allow to change primary email before account activation (#29412)
  * Customizable "Open with" applications for repository clone (#29320)
  * Allow options to disable user deletion from the interface on app.ini (#29275)
  * Extend issue template YAML engine (#29274)
  * Add support for `linguist-detectable` and `linguist-documentation` (#29267)
  * Implement code frequency graph (#29191)
  * Show commit status for releases (#29149)
  * Add user blocking (#29028)
  * Actions Artifacts v4 backend (#28965)
  * Add merge style `fast-forward-only` (#28954)
  * Retarget depending pulls when the parent branch is deleted (#28686)
  * Add global setting on how timestamps should be rendered (#28657)
  * Implement actions badge SVGs (#28102)
  * Add skip ci functionality (#28075)
  * Show latest commit for file (#28067)
  * Allow to sync tags from the admin dashboard (#28045)
  * Add Profile Readme for Organisations (#27955)
  * Implement contributors graph (#27882)
  * Artifact deletion in actions ui (#27172)
  * Add API routes to get runner registration token (#27144)
  * Add support for forking single branch (#25821)
  * Add support for sha256 repositories (#23894)
  * Add admin API route for managing user's badges (#23106)
* ENHANCEMENTS
  * Make gitea webhooks openproject compatible (#28435) (#31081)
  * Support using label names when changing issue labels (#30943) (#30958)
  * Fix various problems around project board view (#30696) (#30902)
  * Improve context popup rendering (#30824) (#30829)
  * Allow to save empty comment (#30706)
  * Prevent allow/reject reviews on merged/closed PRs (#30686)
  * Initial support for colorblindness-friendly themes (#30625)
  * Some NuGet package enhancements (#30280) (#30324)
  * Markup color and font size fixes (#30282) (#30310)
  * Show 12 lines in markup code preview (#30255) (#30257)
  * Add `[other].SHOW_FOOTER_POWERED_BY` setting to hide `Powered by` (#30253)
  * Pulse page improvements (#30149)
  * Render code tags in commit messages (#30146)
  * Prevent re-review and dismiss review actions on closed and merged PRs (#30065)
  * Cancel previous runs of the same PR automatically (#29961)
  * Drag-and-drop improvements for projects and issue pins (#29875)
  * Add default board to new projects, remove uncategorized pseudo-board (#29874)
  * Prevent layout shift in `<overflow-menu>` items (#29831)
  * Add skip ci support for pull request title (#29774)
  * Add more stats tables (#29730)
  * Update API to return 'source_id' for users (#29718)
  * Determine fuzziness of bleve indexer by keyword length (#29706)
  * Expose fuzzy search for issues/pulls (#29701)
  * Put an edit file button on pull request files to allow a quick operation (#29697)
  * Fix action runner offline label padding (#29691)
  * Update allowed attachment types (#29688)
  * Completely style the webkit autofill (#29683)
  * Highlight archived labels (#29680)
  * Add a warning for disallowed email domains (#29658)
  * Set user's 24h preference from their current OS locale (#29651)
  * Add setting to disable user features when user login type is not plain (#29615)
  * Improve natural sort (#29611)
  * Make wiki default branch name changeable (#29603)
  * Unify search boxes (#29530)
  * Add support for API blob upload of release attachments (#29507)
  * Detect broken git hooks (#29494)
  * Sync branches to DB immediately when handling git hook calling (#29493)
  * Allow options to disable user GPG key configuration from the interface on app.ini (#29486)
  * Allow options to disable user SSH key configuration from the interface on app.ini (#29447)
  * Use relative links for commits, mentions, and issues in markdown (#29427)
  * Add `<overflow-menu>`, rename webcomponents (#29400)
  * Include resource state events in Gitlab downloads (#29382)
  * Properly migrate target branch change GitLab comment (#29340)
  * Recolor dark theme to blue shade (#29283)
  * Partially enable MSSQL case-sensitive collation support (#29238)
  * Auto-update the system status in the admin dashboard (#29163)
  * Integrate alpine `noarch` packages into other architectures index (#29137)
  * Document how the TOC election process works (#29135)
  * Tweak repo header (#29134)
  * Make blockquote border size less aggressive (#29124)
  * Downscale pasted PNG images based on metadata (#29123)
  * Show `View at this point in history` for every commit (#29122)
  * Add support for action artifact serve direct (#29120)
  * Change webhook-type in create-view (#29114)
  * Drop "@" from the email sender to avoid spam filters (#29109)
  * Allow non-admin users to delete review requests (#29057)
  * Improve user search display name (#29002)
  * Include username in email headers (#28981)
  * Show whether a PR is WIP inside popups (#28975)
  * Also match weakly validated ETags (#28957)
  * Support nuspec manifest download for Nuget packages (#28921)
  * Fix hardcoded GitHub icon used as migrated release avatar (#28910)
  * Propagate install_if and provider_priority to APKINDEX (#28899)
  * Add artifacts v4 JWT to job message and accept it (#28885)
  * Enable/disable owner and repo projects independently (#28805)
  * Add non-JS fallback for reaction tooltips (#28785)
  * Add the ability to see open and closed issues at the same time (#28757)
  * Move sign-in labels to be above inputs (#28753)
  * Display the latest sync time for pull mirrors on the repo page (#28712)
  * Show in Web UI if the file is vendored and generated (#28620)
  * Add orphaned topic consistency check (#28507)
  * Add branch protection setting for ignoring stale approvals (#28498)
  * Add option to set language in admin user view (#28449)
  * Fix incorrect run order of action jobs (#28367)
  * Add missing exclusive in advanced label options (#28322)
  * Added instance-level variables (#28115)
  * Add edit option for README.md (#28071)
  * Fix link to `Code` tab on wiki commits (#28041)
  * Allow to set explore page default sort (#27951)
  * Improve PR diff view on mobile (#27883)
  * Properly migrate automatic merge GitLab comments (#27873)
  * Display issue task list on project cards (#27865)
  * Add Index to pull_auto_merge.doer_id (#27811)
  * Fix display member unit in the menu bar if there are no hidden members in public org (#27795)
  * List all Debian package versions in `Packages` (#27786)
  * Allow pull requests Manually Merged option to be used by non-admins (#27780)
  * Only show diff file tree when more than one file changed (#27775)
  * Show placeholder email in privacy popup (#27770)
  * Revamp repo header (#27760)
  * Add `must-change-password` command line parameter (#27626)
  * Unify password changing and invalidate auth tokens (#27625)
  * Add border to file tree 'sub-items' and add padding to 'item-file' (#27593)
  * Add slow SQL query warning (#27545)
  * Pre-register OAuth application for tea (#27509)
  * Differentiate between `push` and `pull` `mirror sync in progress` (#27390)
  * Link to file from its history (#27354)
  * Add a shortcut to user's profile page to admin user details (#27299)
  * Doctor: delete action entries without existing user (#27292)
  * Show total TrackedTime on issue/pull/milestone lists (#26672)
  * Don't show the new pull request button when the page is not compare pull (#26431)
  * Add `Hide/Show all checks` button to commit status check (#26284)
  * Improvements of releases list and tags list (#25859)
* PERFORMANCE
  * Fix package list performance (#30520) (#30616)
  * Add commit status summary table to reduce query from commit status table (#30223)
  * Refactor markup/csv: don't read all to memory (#29760)
  * Lazy load object format with command line and don't do it in OpenRepository (#29712)
  * Add cache for branch divergence on branch list page (#29577)
  * Do some performance optimization for issues list and view issue/pull (#29515)
  * Cache repository default branch commit status to reduce query on commit status table (#29444)
  * Use `crypto/sha256` (#29386)
  * Some performance optimization on the dashboard and issues page (#29010)
  * Add combined index for issue_user.uid and issue_id (#28080)

## Contributors for this release

* [@6543](https://github.com/6543)
* [@AdamMajer](https://github.com/AdamMajer)
* [@Adrian-Hirt](https://github.com/Adrian-Hirt)
* [@Andre601](https://github.com/Andre601)
* [@Anthony-Jhoiro](https://github.com/Anthony-Jhoiro)
* [@Avey777](https://github.com/Avey777)
* [@BLumia](https://github.com/BLumia)
* [@C0rn3j](https://github.com/C0rn3j)
* [@CEnnis91](https://github.com/CEnnis91)
* [@CaiCandong](https://github.com/CaiCandong)
* [@ChengenH](https://github.com/ChengenH)
* [@ChristopherHX](https://github.com/ChristopherHX)
* [@CodeShakingSheep](https://github.com/CodeShakingSheep)
* [@DanielMatiasCarvalho](https://github.com/DanielMatiasCarvalho)
* [@DrMaxNix](https://github.com/DrMaxNix)
* [@Equationzhao](https://github.com/Equationzhao)
* [@ExplodingDragon](https://github.com/ExplodingDragon)
* [@GiteaBot](https://github.com/GiteaBot)
* [@HEREYUA](https://github.com/HEREYUA)
* [@HoshinoRei](https://github.com/HoshinoRei)
* [@JakobDev](https://github.com/JakobDev)
* [@JensTimmerman](https://github.com/JensTimmerman)
* [@Juneezee](https://github.com/Juneezee)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@KazzmanK](https://github.com/KazzmanK)
* [@KiritaniAyaka](https://github.com/KiritaniAyaka)
* [@LucaZulberti](https://github.com/LucaZulberti)
* [@M4n5ter](https://github.com/M4n5ter)
* [@MarkusAmshove](https://github.com/MarkusAmshove)
* [@MichaelHinrichs](https://github.com/MichaelHinrichs)
* [@MiloCubed](https://github.com/MiloCubed)
* [@Nabapadma-sarker](https://github.com/Nabapadma-sarker)
* [@Nuyube](https://github.com/Nuyube)
* [@Origami404](https://github.com/Origami404)
* [@RightFS](https://github.com/RightFS)
* [@ShalokShalom](https://github.com/ShalokShalom)
* [@Sharaf5](https://github.com/Sharaf5)
* [@SimonErm](https://github.com/SimonErm)
* [@Sirherobrine23](https://github.com/Sirherobrine23)
* [@Sonic853](https://github.com/Sonic853)
* [@TheMagician23](https://github.com/TheMagician23)
* [@VovaStelmashchuk](https://github.com/VovaStelmashchuk)
* [@Yakov5776](https://github.com/Yakov5776)
* [@Zettat123](https://github.com/Zettat123)
* [@alirezaalavi87](https://github.com/alirezaalavi87)
* [@andrewimeson](https://github.com/andrewimeson)
* [@ankitrgadiya](https://github.com/ankitrgadiya)
* [@anudeepreddy](https://github.com/anudeepreddy)
* [@appleboy](https://github.com/appleboy)
* [@arnaudmorin](https://github.com/arnaudmorin)
* [@bilogic](https://github.com/bilogic)
* [@bramhaag](https://github.com/bramhaag)
* [@brechtvl](https://github.com/brechtvl)
* [@bt90](https://github.com/bt90)
* [@buckybytes](https://github.com/buckybytes)
* [@bugaevc](https://github.com/bugaevc)
* [@capvor](https://github.com/capvor)
* [@carlosfelgueiras](https://github.com/carlosfelgueiras)
* [@cchangwen](https://github.com/cchangwen)
* [@charles7668](https://github.com/charles7668)
* [@chenrui333](https://github.com/chenrui333)
* [@chrisnc](https://github.com/chrisnc)
* [@crapStone](https://github.com/crapStone)
* [@crazeteam](https://github.com/crazeteam)
* [@darrinsmart](https://github.com/darrinsmart)
* [@davidhulick](https://github.com/davidhulick)
* [@delvh](https://github.com/delvh)
* [@denyskon](https://github.com/denyskon)
* [@dlintw](https://github.com/dlintw)
* [@dsseng](https://github.com/dsseng)
* [@earl-warren](https://github.com/earl-warren)
* [@edwardzhanged](https://github.com/edwardzhanged)
* [@evantobin](https://github.com/evantobin)
* [@fantognazza](https://github.com/fantognazza)
* [@fashberg](https://github.com/fashberg)
* [@flyingstar16](https://github.com/flyingstar16)
* [@fnetX](https://github.com/fnetX)
* [@forsaken628](https://github.com/forsaken628)
* [@framitdavid](https://github.com/framitdavid)
* [@fuxiaohei](https://github.com/fuxiaohei)
* [@ghost](https://github.com/ghost)
* [@gszy](https://github.com/gszy)
* [@gwymor](https://github.com/gwymor)
* [@hakito](https://github.com/hakito)
* [@harryzcy](https://github.com/harryzcy)
* [@hickford](https://github.com/hickford)
* [@inferno-umar](https://github.com/inferno-umar)
* [@invliD](https://github.com/invliD)
* [@jackHay22](https://github.com/jackHay22)
* [@jbgomond](https://github.com/jbgomond)
* [@johanvdw](https://github.com/johanvdw)
* [@jolheiser](https://github.com/jolheiser)
* [@jpraet](https://github.com/jpraet)
* [@jwetzell](https://github.com/jwetzell)
* [@jxshin](https://github.com/jxshin)
* [@katsusan](https://github.com/katsusan)
* [@kdumontnu](https://github.com/kdumontnu)
* [@kemzeb](https://github.com/kemzeb)
* [@kerwin612](https://github.com/kerwin612)
* [@kgdev](https://github.com/kgdev)
* [@kilimnik](https://github.com/kilimnik)
* [@kralo](https://github.com/kralo)
* [@kvaster](https://github.com/kvaster)
* [@lafriks](https://github.com/lafriks)
* [@layonferreira](https://github.com/layonferreira)
* [@lng2020](https://github.com/lng2020)
* [@lolo32](https://github.com/lolo32)
* [@lunny](https://github.com/lunny)
* [@macifell](https://github.com/macifell)
* [@marcinkuzminski](https://github.com/marcinkuzminski)
* [@mariusrugan](https://github.com/mariusrugan)
* [@me-heer](https://github.com/me-heer)
* [@me2seeks](https://github.com/me2seeks)
* [@mei-rune](https://github.com/mei-rune)
* [@memphis88](https://github.com/memphis88)
* [@merlleu](https://github.com/merlleu)
* [@metiftikci](https://github.com/metiftikci)
* [@milahu](https://github.com/milahu)
* [@mjl-](https://github.com/mjl-)
* [@mohammedahmed18](https://github.com/mohammedahmed18)
* [@morphelinho](https://github.com/morphelinho)
* [@mpldr](https://github.com/mpldr)
* [@msantos](https://github.com/msantos)
* [@n0toose](https://github.com/n0toose)
* [@nekrondev](https://github.com/nekrondev)
* [@nfsec](https://github.com/nfsec)
* [@nodiscc](https://github.com/nodiscc)
* [@norohind](https://github.com/norohind)
* [@oliverpool](https://github.com/oliverpool)
* [@panangam](https://github.com/panangam)
* [@pboguslawski](https://github.com/pboguslawski)
* [@pengqiseven](https://github.com/pengqiseven)
* [@picsel2](https://github.com/picsel2)
* [@pitpalme](https://github.com/pitpalme)
* [@plashenkov](https://github.com/plashenkov)
* [@psa](https://github.com/psa)
* [@pulltheflower](https://github.com/pulltheflower)
* [@puni9869](https://github.com/puni9869)
* [@qwerty287](https://github.com/qwerty287)
* [@rafaelsgirao](https://github.com/rafaelsgirao)
* [@rafh](https://github.com/rafh)
* [@rbhz](https://github.com/rbhz)
* [@rdwz](https://github.com/rdwz)
* [@rmie](https://github.com/rmie)
* [@rschoon](https://github.com/rschoon)
* [@sahinakkaya](https://github.com/sahinakkaya)
* [@scottyeager](https://github.com/scottyeager)
* [@sdvcrx](https://github.com/sdvcrx)
* [@sebastian-sauer](https://github.com/sebastian-sauer)
* [@sillyguodong](https://github.com/sillyguodong)
* [@silverwind](https://github.com/silverwind)
* [@sonjek](https://github.com/sonjek)
* [@sryze](https://github.com/sryze)
* [@stevapple](https://github.com/stevapple)
* [@successgo](https://github.com/successgo)
* [@techknowlogick](https://github.com/techknowlogick)
* [@thenaterhood](https://github.com/thenaterhood)
* [@tobiasbp](https://github.com/tobiasbp)
* [@tomholford](https://github.com/tomholford)
* [@viceice](https://github.com/viceice)
* [@wackbyte](https://github.com/wackbyte)
* [@wienans](https://github.com/wienans)
* [@wiktor-k](https://github.com/wiktor-k)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@xkcdstickfigure](https://github.com/xkcdstickfigure)
* [@xor-gate](https://github.com/xor-gate)
* [@yardenshoham](https://github.com/yardenshoham)
* [@yekanchi](https://github.com/yekanchi)
* [@yp05327](https://github.com/yp05327)
* [@zeripath](https://github.com/zeripath)
* [@zhangnew](https://github.com/zhangnew)
* [@zokkis](https://github.com/zokkis)

We will thank all original contributors of backport pull requests on next release.
