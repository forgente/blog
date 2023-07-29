---
date: 2023-07-16T20:00:00+02:00
authors:
  - "delvh"
  - "yardenshoham"
  - "denyskon"
  - "lunny"
  - "jolheiser"
title: "Gitea 1.20 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.20"
---

Gitea 1.20.0 is now released.

It includes [1091](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.20.0+is%3Amerged) pull requests, which makes it the largest release in Gitea's history!

<!-- Security Thanks! -->

You can download it for example from our [downloads page](https://dl.gitea.com/gitea/1.20.0/). Please read our [installation guide](https://docs.gitea.com/1.20/installation/install-from-binary) for more information on installation.

We would like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

:exclamation: This release blog has a slightly new format:
The changes are sorted descending by what we deem most important for users and admins, so the most important change comes first.

<!--more-->

## Breaking Changes

### :warning: Refactored scoped tokens mechanism ([#24767](https://github.com/go-gitea/gitea/pull/24767))
<!-- Should we talk about security implications here, or down below in the new features? -->
As will be described down below in more detail, the permissions for _Personal Access Tokens_ (PATs) have changed.  
While we have migrated all old tokens to the new format as close as possible, there are edge cases where an old token now has more/less permissions than before as the two systems have a completely different design.  
If that's the case for you, please consider regenerating your token to prevent API calls from failing or your token having a too broad scope.


### :warning: Removed/changed config entries ([#25010](https://github.com/go-gitea/gitea/pull/25010), [#24958](https://github.com/go-gitea/gitea/pull/24958), [#24754](https://github.com/go-gitea/gitea/pull/24754), [#24628](https://github.com/go-gitea/gitea/pull/24628), [#24505](https://github.com/go-gitea/gitea/pull/24505), [#24430](https://github.com/go-gitea/gitea/pull/24430/files), [#24270](https://github.com/go-gitea/gitea/pull/24270), [#23798](https://github.com/go-gitea/gitea/pull/23798), [#23733](https://github.com/go-gitea/gitea/pull/23733), [#23333](https://github.com/go-gitea/gitea/pull/23333), [#25604](https://github.com/go-gitea/gitea/pull/25604))

- We've removed the service worker functionality as it didn't bring any noticeable benefit, mostly added bugs, and was disabled since 1.17 by default already.  
Removed config key: `[ui].USE_SERVICE_WORKER`

- The default value of `[server].LFS_HTTP_AUTH_EXPIRY` has been increased from `20m` to `24h`.   
If you want to use the previous value, please set the setting.
    
- As will be described below, you can now set any git config also in your `app.ini`.
As such, we removed the section `[git.reflog]` and its keys have been moved to the following replacements:
  - `[git.reflog].ENABLED` → `[git.config].core.logAllRefUpdates`
  - `[git.reflog].EXPIRATION` → `[git.config].gc.reflogExpire`
  
- In addition to the already deprecated options inside `[queue]`, many options have been dropped as well.   
Those are `WRAP_IF_NECESSARY`, `MAX_ATTEMPTS`, `TIMEOUT`, `WORKERS`, `BLOCK_TIMEOUT`, `BOOST_TIMEOUT`, `BOOST_WORKERS`.   
You can remove them from your `app.ini` now.   
Additionally, some default values have changed in this section.

- The setting `[time].FORMAT` is no longer used

- The setting `[other].SHOW_FOOTER_BRANDING` was removed, as its intended purpose was superseded by `[other].SHOW_FOOTER_VERSION`
    
- The default value of `[server].SSH_KEYGEN_PATH` has changed from `ssh-keygen` to ` ` (empty), meaning that Gitea parses public keys by default itself rather than passing it to the system as previously.
    
- `[repository].DEFAULT_REPO_UNITS` and `[repository].DISABLED_REPO_UNITS` accepted the key `actions.actions` for a short time.  
However, the correct key should be `repo.actions`.
    
- `[repository.editor].PREVIEWABLE_FILE_MODES` was buggy and didn't work.  
As such, it is now removed.

- `[actions].DEFAULT_ACTIONS_URL` could previously be set to any custom URLs like https://gitea.com or http://your-git-server, and the default value was https://gitea.com. But now, `DEFAULT_ACTIONS_URL` only supports `github` (https://github.com) or `self` (the root url of current Gitea instance), and the default value is `github`. This change was made to make action names globally resolvable in most cases.

### :warning: Publication of `README.md` in `.profile` repos ([#23260](https://github.com/go-gitea/gitea/pull/23260))

As will be discussed below in the new features, Gitea now displays user profile READMEs.  
The displayed content is that of the `README.md` of a `.profile` repo.  
If you already have a repo with that name, its `README.md` will be publically accessible, **even if the repo is private**.  
If you don't want to leak that information, consider renaming your existing repo.


### :warning: Any URL scheme may be used for links ([#24805](https://github.com/go-gitea/gitea/pull/24805))

Previously, we would not render non-standard URLs (like `matrix:`) by default. We allowed adding custom URLs by modifying `markdown.CUSTOM_URL_SCHEMES` and these would then render as links in markdown, but there was no option to allow all schemes.

With this change in place, if `markdown.CUSTOM_URL_SCHEMES` is not configured, we will render all explicit markdown links (`[label](URL)`) as links.

#### Before

The `matrix:` and `cbthunderlink://` didn't render as links.

![Special links are not rendered](/demos/24805/before.png)

#### After

The `matrix:` and `cbthunderlink://` render as links, when we use the `[label](URL)` form.

![Special links are rendered](/demos/24805/after.png)


### :warning: Newly reserved usernames ([#23992](https://github.com/go-gitea/gitea/pull/23992))
    
User and organization names can no longer end with `.png`.

### :warning: Changed access log format ([#24085](https://github.com/go-gitea/gitea/pull/24085))

Logs from the access logger were previously escaped in unnecessary places.
Now, they no longer are.  
Furthermore, the field `{{.Ctx.RemoteAddr}}` has been renamed to `{{.Ctx.RemoteHost}}` to omit the port.
    
### :warning: Correct pagination in API route `teams/{id}/members` ([#24754](https://github.com/go-gitea/gitea/pull/24754))

Previously, this endpoint was 0-based paginated unlike all other routes.   
This bug has now been fixed.

### :warning: Refactored path and config system ([#25416](https://github.com/go-gitea/gitea/pull/25416))

The Gitea path system has been fairly complicated for a long time:  
It tried to guess paths quite often, which lead to countless problems.  
Instead, Gitea now automatically tries to store the path inside the config.  
If it fails to do so, it won't start. In that case, please do what the error message in the logs tells you to do and the issue should be resolved.

### :warning: `actions` table metrics collector was removed ([#25062](https://github.com/go-gitea/gitea/pull/25062))

The statistic of how many entries are in the `actions` table that records activities has always been rather useless as this table will always be (ridiculuously) large.
As such, we removed the metrics collector for promethues for them.  
Please do not rely on its output anymore.
This is not related to Gitea Actions.
    
### :warning: Rework storage settings ([#23911](https://github.com/go-gitea/gitea/pull/23911))

All storage settings should be stored in one section, and one section only.
You cannot use multiple sections anymore to override settings.  
The storage settings priority is now
1. `[attachment]`
2. `[storage.attachments]` | `[storage.<another>]`
3. `[storage]`
4. `default`

For extra override configuration items, currently only are `SERVE_DIRECT`, `MINIO_BASE_PATH`, `MINIO_BUCKET`, which could be configured in another section.
The prioioty of the override configuration is `[attachment]` > `[storage.attachments]` > `default`.

### :warning: Refactor ctx in templates ([#23105](https://github.com/go-gitea/gitea/pull/23105))

If you use custom templates, you may need to change them:  
We've changed all occurring `.ctx` inside parameters to `.ctxData`.  
Any custom template currently using `.ctx` will need to follow suit.

### :warning: Rewrite logger system ([#24726](https://github.com/go-gitea/gitea/pull/24726))

The `log.<mode>.<logger>` style config has been dropped. If you used it, please check the new config manual & app.example.ini to make your instance output logs as expected.

The SMTP logger is deleted because SMTP is not suitable to collect logs.


## Notable improvements

### :rocket: New package registries

Gitea now supports the following package registries as well:
- Alpine ([#23714](https://github.com/go-gitea/gitea/pull/23714))
- CRAN ([#22331](https://github.com/go-gitea/gitea/pull/22331))
- Debian ([#24426](https://github.com/go-gitea/gitea/pull/24426))
- Go ([#24687](https://github.com/go-gitea/gitea/pull/24687))
- RPM ([#23380](https://github.com/go-gitea/gitea/pull/23380))
- Swift ([#22404](https://github.com/go-gitea/gitea/pull/22404))

So, 
<details><summary>the complete list of supported package registries is now</summary>

|Name	|Language|	Package client|
|-------|--------|----------------|
|Alpine|-|`apk`|
|Cargo|Rust|`cargo`|
|Chef|-|`knife`|
|Composer|PHP|`composer`|
|Conan|C++|`conan`|
|Conda|-|`conda`|
|Container|-|any OCI compliant client|
|CRAN|R|-|
|Debian|-|`apt`|
|Generic|-|any HTTP client|
|Go|Go|`go`|
|Helm|-|any HTTP client, `cm-push`|
|Maven|Java|`mvn`, `gradle`|
|npm|JavaScript|`npm`, `yarn`, `pnpm`|
|NuGet|.NET|`nuget`|
|Pub|Dart|`dart`, `flutter`|
|PyPI|Python|`pip`, `twine`|
|RPM|-|`yum`, `dnf`|
|RubyGems|Ruby|`gem`, `Bundler`|
|Swift|Swift|`swift`|
|Vagrant|-|`vagrant`|

</details>

### :rocket: Gitea Actions

Gitea Actions has seen quite a number of new features since its initial launch in 1.19.0.  
Nevertheless, it is still in an experimental state.  
Here's what's new **on Gitea's side**:
- Gitea no longer crashes on an invalid workflow file :smiley: ([#23972](https://github.com/go-gitea/gitea/pull/23972))
- More available variables ([#24356T](https://github.com/go-gitea/gitea/pull/24356))
- `needs` and `outputs` support ([#24230](https://github.com/go-gitea/gitea/pull/24230))
- Registering runner tokens from the CLI ([#23762](https://github.com/go-gitea/gitea/pull/23762))
- Require approval for PRs from forks ([#22803](https://github.com/go-gitea/gitea/pull/22803))
- Reworked UI
- Upload Actions Artifacts ([#22738](https://github.com/go-gitea/gitea/pull/22738))

### :rocket: New API endpoints
    
Gitea 1.20 ships with many new API endpoints, including
- activity feed ([#23494](https://github.com/go-gitea/gitea/pull/23494))
- admin: rename user ([#22789](https://github.com/go-gitea/gitea/pull/22789))
- admin: show user email addresses ([#22792](https://github.com/go-gitea/gitea/pull/22792))
- changing multiple files at once ([#24887](https://github.com/go-gitea/gitea/pull/24887))
- gitignore templates ([#22783](https://github.com/go-gitea/gitea/pull/22783))
- issue dependencies ([#17935](https://github.com/go-gitea/gitea/pull/17935))
- issue pinning ([#24406](https://github.com/go-gitea/gitea/pull/24406))
- label templates ([#24602](https://github.com/go-gitea/gitea/pull/24602))
- license templates ([#23009](https://github.com/go-gitea/gitea/pull/23009))

### :rocket: Issue config ([#20956](https://github.com/go-gitea/gitea/pull/20956))

It is now possible to create an issue config by creating one of the files
1. `.gitea/ISSUE_TEMPLATE/config.y(a)ml`
1. `.gitea/issue_template/config.y(a)ml`
1. `.github/ISSUE_TEMPLATE/config.y(a)ml`
1. `.github/issue_template/config.y(a)ml`

(the files are queried in exactly this prioritization order).  
The issue config can be used to influence how users open issues.  
With it, you can force users to open issues from a template, or to display additional links, i.e. to nudge users to use another workflow such as sending an email to report security issues instead of reporting it publically.
```yaml
blank_issues_enabled: false
contact_links:
  - name: Gitea
    url: https://gitea.io
    about: Visit the Gitea Website
  - name: Security issues
    url: mailto:security@gitea.io
    about: Mail us a security issue instead of opening a public issue
```
for example results in the following output on the `new issue` page (assuming there is a `Bug Report` issue template):
![issue config screenshot](/demos/20956/issue-config.png)

You can find more information in the [documentation](https://docs.gitea.com/1.20/usage/issue-pull-request-templates#syntax-for-issue-config).

### :rocket: Better editor text area ([#23876](https://github.com/go-gitea/gitea/pull/23876))

Previously, Gitea used a Pseudo-_What-you-see-is-what-you-get_ editor to display text areas.
This meant that you would immediately see how the text you're writing would be displayed.
However, this had many disadvantages:
- as mentioned, it didn't use the actual result but rather computed its own. That meant the result could still be (and often was) different.
- missing accessibility: This editor was absolutely unusable both on smartphones and for visually impaired users.
- Focus-wise, you were trapped inside the editor once you tabbed in.
- bugs: There were **many**.

So, Gitea changed it to the following mechanism now:
- It's a normal textarea by default, so no more syntax highlighting but full accessibility
- If you want to see how your text will be rendered, click on the `Preview` tab
- You can still switch to the old legacy editor in the button bar above the textarea
- New features will only be added to the normal textarea and not the legacy editor
- We don't fix any bugs for the legacy editor anymore
- We plan to remove the legacy text editor in a future release, i.e. in a year or two

### :rocket: Scoped PAT rework ([#24767](https://github.com/go-gitea/gitea/pull/24767))

We noticed that the existing approach to create scoped _Personal Access Tokens_ (PATs) was pretty confusing, even if  you've created one previously.
Hence, we rewrote them so that they are much easier to use.  
This is the new design:
![screenshot of how to create a new scoped token](/demos/24767/scoped-access-token-creation.png)

Meanwhile, this is the API page:  
![screenshot of the API blocks](/demos/24767/api-scopes.png)
You can hopefully guess now what each of the new scopes mean.

### :rocket: User Profile README ([#23260](https://github.com/go-gitea/gitea/pull/23260))

If your user acount contains a `.profile` repository, its `README.md` file will be shown publically in your profile. This allows users to present more information about them on their profile page.

![Screenshot of a profile page with displayed profile README](/demos/23260/user-profile-page.png)

### :rocket: User webhooks ([#21563](https://github.com/go-gitea/gitea/pull/21563))

Now, you can not only add webhooks for organizations but also for users. 

### :rocket: Archival date of a repo ([#22664](https://github.com/go-gitea/gitea/pull/22664))

Archived repos now store **when** they were archived:
![archival timestamp screenshot](/demos/22664/repo-archival-date.png)

### :rocket: Cancelable repository migrations ([#24605](https://github.com/go-gitea/gitea/pull/24605))

Then waiting for a repository migration to finish, there now is a button to cancel the process.

![screenshot of a migration page with cancel button](/demos/24605/cancelable-migration.png)

### :rocket: Issue pinning ([#24406](https://github.com/go-gitea/gitea/pull/24406))

Repository maintainers can now pin issues and pull requests, so that they always appear on top. The maximum number of pinned issues/pull requests per repo can be set in your `app.ini`.

![A screenshot of the issue page with pinned issues](/demos/24406/issue-pinning.png)

### :rocket: Latest commit status on dashboard ([#24638](https://github.com/go-gitea/gitea/pull/24638))

We now show the status of the latest commit of the default branch for each repository in the dashboard repository list.

![A list showing repositories and their latest status](/demos/24638/latest-commit-status-dashboard.png)

### :rocket: Vertical instead of horizontal settings ([#24246](https://github.com/go-gitea/gitea/pull/24246))

We ran out of space to add new settings categories:  
It is not usable if you need to scroll endlessly to find a category.  
Hence, we switched the settings order around, so that the settings categories are now displayed on the left instead of at the top:
![vertical settings appearance](/demos/24246/vertical-settings.png)

### :rocket: Expand/collapse all files of a PR ([#23639](https://github.com/go-gitea/gitea/pull/23639))

When reviewing the files of a PR, it is now possible to show or hide all changes.  
This is especially useful when revisiting a PR you already reviewed to look for something.

![screenshot of the three-dot-menu showing the new options](/demos/23639/expand-collapse-files.png)

### :rocket: Switch textarea to Monospace font ([#24034](https://github.com/go-gitea/gitea/pull/24034))

When using a textarea, you can now switch to monospace font if you want.

![hovering on the "switch font" button](/demos/24034/monospace-textarea.png)


### :rocket: Predictable release download URLs ([#23891](https://github.com/go-gitea/gitea/pull/23891))

Download URLs for release files now have a predictable structure:

`<repo>/releases/download/<tag>/<filename>`

For example `https://gitea.com/gitea/act_runner/releases/download/v0.2.3/act_runner-0.2.3-linux-amd64` gets you the file `act_runner-0.2.3-linux-amd64` from the tag `v0.2.3` of Act Runner.

If there are multiple files with the same name, the old UUID-based URLs will be used.

### :rocket: Auto-updating and localized time stamps ([#23988](https://github.com/go-gitea/gitea/pull/23988))

Previously each rendered timestamp would be static, now we show the real time since an event happend. If a comment was added 2 minutes before the page rendered it would show as "2 minutes ago" on the initial render and if another 8 minutes have passed, without a page refresh you'd see "10 minutes ago".

![Auto-updating duration timestamp](/demos/23988/auto-updating-timestamp.gif)

Previously all timestamps would render in English, we now render these according to the user's chosen locale.

![German](/demos/23988/german-timestamp.png)

![Spanish](/demos/23988/spanish-timestamp.png)

### :rocket: Wildcards for required status checks in branch protection ([#24633](https://github.com/go-gitea/gitea/pull/24633))

If a protected branch requires status checks to pass before merging, the required checks can now be specified using wildcard patterns.

![screenshot of the status check setting](/demos/24633/wildcards-for-required-status-checks.png)


### :rocket: Systemd-notify support ([#21151](https://github.com/go-gitea/gitea/pull/21151))

Gitea can now notify `systemd` whenever it is ready.  
To enable it, your systemd service file should contain the key `[Service].Type=notify`,  
as you can see for example in the [provided example file](https://github.com/go-gitea/gitea/blob/main/contrib/systemd/gitea.service).
    
Sidenote: We are aware that we should only have updated the [example file](https://github.com/go-gitea/gitea/blob/main/contrib/systemd/gitea.service) once the release was released.  
Many people complained that systemd keeps restarting their (pre-1.20.0) Gitea after a few seconds as it expected status reports which previous Gitea versions obviously couldn't do.  
Apologies for any headaches this may have caused.

### :rocket: Configure Git through your `app.ini` ([#24860](https://github.com/go-gitea/gitea/pull/24860))

Any entries in your`app.ini` in the `[git.config]` section will now be used to customize the git internal behavior for Gitea.  
In other words,
```ini
[git.config]
a.key=value1
b.key=value2
```
is equal to
```sh 
git config a.key value1;
git config b.key value2;
```
for the gitconfig used by Gitea.  
This has the following benefits:
1. Gitea can set all options it needs itself
2. All config options declared in the config cheatsheet and example app.ini are values that Gitea will set itself if not overridden
3. You don't need to know where the gitconfig Gitea uses is, everything is done through the `app.ini`
4. Docker users don't need to mount a separate file for the gitconfig

### :rocket: Refactorings

Gitea 1.20 has underwent **a lot** of refactorings ([111](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.20.0+label%3Akind%2Frefactor) to be precise).
This both reduces the amount of bugs as well as ensures that Gitea will continue to be able to add new features.

## Changelog

## [1.20.0](https://github.com/go-gitea/gitea/releases/tag/v1.20.0) - 2023-07-16

* BREAKING
  * Fix WORK_DIR for docker (root) image ([#25738](https://github.com/go-gitea/gitea/pull/25738)) ([#25811](https://github.com/go-gitea/gitea/pull/25811))
  * Restrict `[actions].DEFAULT_ACTIONS_URL` to only `github` or `self` ([#25581](https://github.com/go-gitea/gitea/pull/25581)) ([#25604](https://github.com/go-gitea/gitea/pull/25604))
  * Refactor path & config system ([#25330](https://github.com/go-gitea/gitea/pull/25330)) ([#25416](https://github.com/go-gitea/gitea/pull/25416))
  * Fix all possible setting error related storages and added some tests ([#23911](https://github.com/go-gitea/gitea/pull/23911)) ([#25244](https://github.com/go-gitea/gitea/pull/25244))
  * Use a separate admin page to show global stats, remove `actions` stat ([#25062](https://github.com/go-gitea/gitea/pull/25062))
  * Remove the service worker ([#25010](https://github.com/go-gitea/gitea/pull/25010))
  * Remove meta tags `theme-color` and `default-theme` ([#24960](https://github.com/go-gitea/gitea/pull/24960))
  * Use `[git.config]` for reflog cleaning up ([#24958](https://github.com/go-gitea/gitea/pull/24958))
  * Allow all URL schemes in Markdown links by default ([#24805](https://github.com/go-gitea/gitea/pull/24805))
  * Redesign Scoped Access Tokens ([#24767](https://github.com/go-gitea/gitea/pull/24767))
  * Fix team members API endpoint pagination ([#24754](https://github.com/go-gitea/gitea/pull/24754))
  * Rewrite logger system ([#24726](https://github.com/go-gitea/gitea/pull/24726))
  * Increase default LFS auth timeout from 20m to 24h ([#24628](https://github.com/go-gitea/gitea/pull/24628))
  * Rewrite queue ([#24505](https://github.com/go-gitea/gitea/pull/24505))
  * Remove unused setting `time.FORMAT` ([#24430](https://github.com/go-gitea/gitea/pull/24430))
  * Refactor `setting.Other` and remove unused `SHOW_FOOTER_BRANDING` ([#24270](https://github.com/go-gitea/gitea/pull/24270))
  * Correct the access log format ([#24085](https://github.com/go-gitea/gitea/pull/24085))
  * Reserve ".png" suffix for user/org names ([#23992](https://github.com/go-gitea/gitea/pull/23992))
  * Prefer native parser for SSH public key parsing ([#23798](https://github.com/go-gitea/gitea/pull/23798))
  * Editor preview support for external renderers ([#23333](https://github.com/go-gitea/gitea/pull/23333))
  * Add Gitea Profile Readmes ([#23260](https://github.com/go-gitea/gitea/pull/23260))
  * Refactor `ctx` in templates ([#23105](https://github.com/go-gitea/gitea/pull/23105))
* SECURITY
  * Test if container blob is accessible before mounting ([#22759](https://github.com/go-gitea/gitea/pull/22759)) ([#25784](https://github.com/go-gitea/gitea/pull/25784))
  * Set type="password" on all auth_token fields ([#22175](https://github.com/go-gitea/gitea/pull/22175))
* FEATURES
  * Add button on diff header to copy file name, misc diff header tweaks ([#24986](https://github.com/go-gitea/gitea/pull/24986))
  * API endpoint for changing/creating/deleting multiple files ([#24887](https://github.com/go-gitea/gitea/pull/24887))
  * Support changing git config through `app.ini`, use `diff.algorithm=histogram` by default ([#24860](https://github.com/go-gitea/gitea/pull/24860))
  * Add up and down arrows to selected lookup repositories ([#24727](https://github.com/go-gitea/gitea/pull/24727))
  * Add Go package registry ([#24687](https://github.com/go-gitea/gitea/pull/24687))
  * Add status indicator on main home screen for each repo ([#24638](https://github.com/go-gitea/gitea/pull/24638))
  * Support for status check pattern ([#24633](https://github.com/go-gitea/gitea/pull/24633))
  * Implement Cargo HTTP index ([#24452](https://github.com/go-gitea/gitea/pull/24452))
  * Add Debian package registry ([#24426](https://github.com/go-gitea/gitea/pull/24426))
  * Add the ability to pin Issues ([#24406](https://github.com/go-gitea/gitea/pull/24406))
  * Add follow organization and fix the logic of following page ([#24345](https://github.com/go-gitea/gitea/pull/24345))
  * Allow `webp` images as avatars ([#24248](https://github.com/go-gitea/gitea/pull/24248))
  * Support upload `outputs` and use `needs` context on Actions ([#24230](https://github.com/go-gitea/gitea/pull/24230))
  * Allow adding new files to an empty repo ([#24164](https://github.com/go-gitea/gitea/pull/24164))
  * Make wiki title supports dashes and improve wiki name related features ([#24143](https://github.com/go-gitea/gitea/pull/24143))
  * Add monospace toggle button to textarea ([#24034](https://github.com/go-gitea/gitea/pull/24034))
  * Use auto-updating, natively hoverable, localized time elements ([#23988](https://github.com/go-gitea/gitea/pull/23988))
  * Add ntlm authentication support for mail ([#23811](https://github.com/go-gitea/gitea/pull/23811))
  * Add CLI command to register runner tokens ([#23762](https://github.com/go-gitea/gitea/pull/23762))
  * Add Alpine package registry ([#23714](https://github.com/go-gitea/gitea/pull/23714))
  * Expand/Collapse all changed files ([#23639](https://github.com/go-gitea/gitea/pull/23639))
  * Add unset default project column ([#23531](https://github.com/go-gitea/gitea/pull/23531))
  * Add activity feeds API ([#23494](https://github.com/go-gitea/gitea/pull/23494))
  * Add RPM registry ([#23380](https://github.com/go-gitea/gitea/pull/23380))
  * Add meilisearch support ([#23136](https://github.com/go-gitea/gitea/pull/23136))
  * Add API for License templates ([#23009](https://github.com/go-gitea/gitea/pull/23009))
  * Add admin API email endpoints ([#22792](https://github.com/go-gitea/gitea/pull/22792))
  * Add user rename endpoint to admin api ([#22789](https://github.com/go-gitea/gitea/pull/22789))
  * Add API for gitignore templates ([#22783](https://github.com/go-gitea/gitea/pull/22783))
  * Implement actions artifacts ([#22738](https://github.com/go-gitea/gitea/pull/22738))
  * Add RSS Feeds for branches and files ([#22719](https://github.com/go-gitea/gitea/pull/22719))
  * Display when a repo was archived ([#22664](https://github.com/go-gitea/gitea/pull/22664))
  * Add Swift package registry ([#22404](https://github.com/go-gitea/gitea/pull/22404))
  * Add CRAN package registry ([#22331](https://github.com/go-gitea/gitea/pull/22331))
  * Add user webhooks ([#21563](https://github.com/go-gitea/gitea/pull/21563))
  * Implement systemd-notify protocol ([#21151](https://github.com/go-gitea/gitea/pull/21151))
  * Implement Issue Config ([#20956](https://github.com/go-gitea/gitea/pull/20956))
  * Add API to manage issue dependencies ([#17935](https://github.com/go-gitea/gitea/pull/17935))
* API
  * Use correct response code in push mirror creation response in v1_json.tmpl ([#25476](https://github.com/go-gitea/gitea/pull/25476)) ([#25571](https://github.com/go-gitea/gitea/pull/25571))
  * Fix `Permission` in API returned repository struct ([#25388](https://github.com/go-gitea/gitea/pull/25388)) ([#25441](https://github.com/go-gitea/gitea/pull/25441))
  * Add API for Label templates ([#24602](https://github.com/go-gitea/gitea/pull/24602))
  * Filters for GetAllCommits ([#24568](https://github.com/go-gitea/gitea/pull/24568))
  * Add ability to specify '--not' from GetAllCommits ([#24409](https://github.com/go-gitea/gitea/pull/24409))
  * Support uploading file to empty repo by API ([#24357](https://github.com/go-gitea/gitea/pull/24357))
  * Add absent repounits to create/edit repo API ([#23500](https://github.com/go-gitea/gitea/pull/23500))
  * Add login name and source id for admin user searching API ([#23376](https://github.com/go-gitea/gitea/pull/23376))
  * Create a branch directly from commit on the create branch API ([#22956](https://github.com/go-gitea/gitea/pull/22956))
* ENHANCEMENTS
  * Make `add line comment` buttons focusable ([#25894](https://github.com/go-gitea/gitea/pull/25894)) ([#25896](https://github.com/go-gitea/gitea/pull/25896))
  * Always pass 6-digit hex color to monaco ([#25780](https://github.com/go-gitea/gitea/pull/25780)) ([#25782](https://github.com/go-gitea/gitea/pull/25782))
  * Clarify "text-align" CSS helpers, fix clone button padding ([#25763](https://github.com/go-gitea/gitea/pull/25763)) ([#25764](https://github.com/go-gitea/gitea/pull/25764))
  * Hide `add file` button for pull mirrors ([#25748](https://github.com/go-gitea/gitea/pull/25748)) ([#25751](https://github.com/go-gitea/gitea/pull/25751))
  * Allow/fix review (approve/reject) of empty PRs ([#25690](https://github.com/go-gitea/gitea/pull/25690)) ([#25732](https://github.com/go-gitea/gitea/pull/25732))
  * Fix tags header and pretty format numbers ([#25624](https://github.com/go-gitea/gitea/pull/25624)) ([#25694](https://github.com/go-gitea/gitea/pull/25694))
  * Actions list enhancements ([#25601](https://github.com/go-gitea/gitea/pull/25601)) ([#25678](https://github.com/go-gitea/gitea/pull/25678))
  * Fix show more for image on diff page ([#25672](https://github.com/go-gitea/gitea/pull/25672)) ([#25673](https://github.com/go-gitea/gitea/pull/25673))
  * Prevent SVG shrinking ([#25652](https://github.com/go-gitea/gitea/pull/25652)) ([#25669](https://github.com/go-gitea/gitea/pull/25669))
  * Fix UI misalignment on user setting page ([#25629](https://github.com/go-gitea/gitea/pull/25629)) ([#25656](https://github.com/go-gitea/gitea/pull/25656))
  * Use css on labels ([#25626](https://github.com/go-gitea/gitea/pull/25626)) ([#25636](https://github.com/go-gitea/gitea/pull/25636))
  * Read-only checkboxes don't appear and don't entirely act the way one might expect ([#25573](https://github.com/go-gitea/gitea/pull/25573)) ([#25602](https://github.com/go-gitea/gitea/pull/25602))
  * Redirect to package after version deletion ([#25594](https://github.com/go-gitea/gitea/pull/25594)) ([#25599](https://github.com/go-gitea/gitea/pull/25599))
  * Reduce table padding globally ([#25568](https://github.com/go-gitea/gitea/pull/25568)) ([#25577](https://github.com/go-gitea/gitea/pull/25577))
  * Change `Regenerate Secret` button display ([#25534](https://github.com/go-gitea/gitea/pull/25534)) ([#25541](https://github.com/go-gitea/gitea/pull/25541))
  * Fix rerun icon on action view component ([#25531](https://github.com/go-gitea/gitea/pull/25531)) ([#25536](https://github.com/go-gitea/gitea/pull/25536))
  * Move some regexp out of functions ([#25430](https://github.com/go-gitea/gitea/pull/25430)) ([#25445](https://github.com/go-gitea/gitea/pull/25445))
  * Diff page enhancements ([#25398](https://github.com/go-gitea/gitea/pull/25398)) ([#25437](https://github.com/go-gitea/gitea/pull/25437))
  * Various UI fixes ([#25264](https://github.com/go-gitea/gitea/pull/25264)) ([#25431](https://github.com/go-gitea/gitea/pull/25431))
  * Fix label list divider ([#25312](https://github.com/go-gitea/gitea/pull/25312)) ([#25372](https://github.com/go-gitea/gitea/pull/25372))
  * Fix UI on mobile view ([#25315](https://github.com/go-gitea/gitea/pull/25315)) ([#25340](https://github.com/go-gitea/gitea/pull/25340))
  * When viewing a file, hide the add button ([#25320](https://github.com/go-gitea/gitea/pull/25320)) ([#25339](https://github.com/go-gitea/gitea/pull/25339))
  * Show if File is Executable ([#25287](https://github.com/go-gitea/gitea/pull/25287)) ([#25300](https://github.com/go-gitea/gitea/pull/25300))
  * Fix edit OAuth application width ([#25262](https://github.com/go-gitea/gitea/pull/25262)) ([#25263](https://github.com/go-gitea/gitea/pull/25263))
  * Use flex to align SVG and text ([#25163](https://github.com/go-gitea/gitea/pull/25163)) ([#25260](https://github.com/go-gitea/gitea/pull/25260))
  * Revert overflow: overlay (revert [#21850](https://github.com/go-gitea/gitea/pull/21850)) ([#25231](https://github.com/go-gitea/gitea/pull/25231)) ([#25239](https://github.com/go-gitea/gitea/pull/25239))
  * Use inline SVG for built-in OAuth providers ([#25171](https://github.com/go-gitea/gitea/pull/25171)) ([#25234](https://github.com/go-gitea/gitea/pull/25234))
  * Change access token UI to select dropdowns ([#25109](https://github.com/go-gitea/gitea/pull/25109)) ([#25230](https://github.com/go-gitea/gitea/pull/25230))
  * Remove hacky patch for "safari emoji glitch fix"  ([#25208](https://github.com/go-gitea/gitea/pull/25208)) ([#25211](https://github.com/go-gitea/gitea/pull/25211))
  * Minor arc-green color tweaks ([#25175](https://github.com/go-gitea/gitea/pull/25175)) ([#25205](https://github.com/go-gitea/gitea/pull/25205))
  * Button and color enhancements ([#24989](https://github.com/go-gitea/gitea/pull/24989)) ([#25176](https://github.com/go-gitea/gitea/pull/25176))
  * Fix mobile navbar and misc cleanups ([#25134](https://github.com/go-gitea/gitea/pull/25134)) ([#25169](https://github.com/go-gitea/gitea/pull/25169))
  * Modify OAuth login ui and fix display name, iconurl related logic ([#25030](https://github.com/go-gitea/gitea/pull/25030)) ([#25161](https://github.com/go-gitea/gitea/pull/25161))
  * Improve notification icon and navbar  ([#25111](https://github.com/go-gitea/gitea/pull/25111)) ([#25124](https://github.com/go-gitea/gitea/pull/25124))
  * Add details summary for vertical menus in settings to allow toggling ([#25098](https://github.com/go-gitea/gitea/pull/25098))
  * Don't display `select all issues` checkbox when no issues are available ([#25086](https://github.com/go-gitea/gitea/pull/25086))
  * Use RepositoryList instead of []*Repository ([#25074](https://github.com/go-gitea/gitea/pull/25074))
  * Add ability to set multiple redirect URIs in OAuth application UI ([#25072](https://github.com/go-gitea/gitea/pull/25072))
  * Use git command instead of the ini package to remove the `origin` remote ([#25066](https://github.com/go-gitea/gitea/pull/25066))
  * Remove cancel button from branch protection form ([#25063](https://github.com/go-gitea/gitea/pull/25063))
  * Show file tree by default ([#25052](https://github.com/go-gitea/gitea/pull/25052))
  * Add Progressbar to Milestone Page ([#25050](https://github.com/go-gitea/gitea/pull/25050))
  * Minor UI improvements: logo alignment, auth map editor, auth name display ([#25043](https://github.com/go-gitea/gitea/pull/25043))
  * Allow for PKCE flow without client secret + add docs ([#25033](https://github.com/go-gitea/gitea/pull/25033))
  * Refactor INI package (first step) ([#25024](https://github.com/go-gitea/gitea/pull/25024))
  * Various style fixes ([#25008](https://github.com/go-gitea/gitea/pull/25008))
  * Fix delete user account modal ([#25004](https://github.com/go-gitea/gitea/pull/25004))
  * Refactor diffFileInfo / DiffTreeStore ([#24998](https://github.com/go-gitea/gitea/pull/24998))
  * Add user level action runners ([#24995](https://github.com/go-gitea/gitea/pull/24995))
  * Rename NotifyPullReviewRequest to NotifyPullRequestReviewRequest ([#24988](https://github.com/go-gitea/gitea/pull/24988))
  * Add step start time to `ViewStepLog` ([#24980](https://github.com/go-gitea/gitea/pull/24980))
  * Add dark mode to API Docs ([#24971](https://github.com/go-gitea/gitea/pull/24971))
  * Display file mode for new file and file mode changes ([#24966](https://github.com/go-gitea/gitea/pull/24966))
  * Make the 500 page load themes ([#24953](https://github.com/go-gitea/gitea/pull/24953))
  * Show `bot` label next to username when rendering autor link if the user is a bot ([#24943](https://github.com/go-gitea/gitea/pull/24943))
  * Repo list improvements, fix bold helper classes ([#24935](https://github.com/go-gitea/gitea/pull/24935))
  * Improve queue and logger context ([#24924](https://github.com/go-gitea/gitea/pull/24924))
  * Improve RunMode / dev mode ([#24886](https://github.com/go-gitea/gitea/pull/24886))
  * Improve some Forms ([#24878](https://github.com/go-gitea/gitea/pull/24878))
  * Add show timestamp/seconds and fullscreen options to action page ([#24876](https://github.com/go-gitea/gitea/pull/24876))
  * Fix double border and adjust width for user profile page ([#24870](https://github.com/go-gitea/gitea/pull/24870))
  * Improve Actions CSS ([#24864](https://github.com/go-gitea/gitea/pull/24864))
  * Fix `@font-face` overrides ([#24855](https://github.com/go-gitea/gitea/pull/24855))
  * Remove `In your repositories` link in milestones dashboard ([#24853](https://github.com/go-gitea/gitea/pull/24853))
  * Fix missing yes/no in delete time log modal ([#24851](https://github.com/go-gitea/gitea/pull/24851))
  * Show new pull request button also on subdirectories and files ([#24842](https://github.com/go-gitea/gitea/pull/24842))
  * Make environment-to-ini  support loading key value from file ([#24832](https://github.com/go-gitea/gitea/pull/24832))
  * Support wildcard in email domain allow/block list ([#24831](https://github.com/go-gitea/gitea/pull/24831))
  * Use `CommentList` instead of `[]*Comment` ([#24828](https://github.com/go-gitea/gitea/pull/24828))
  * Add RTL rendering support to Markdown ([#24816](https://github.com/go-gitea/gitea/pull/24816))
  * Rework notifications list ([#24812](https://github.com/go-gitea/gitea/pull/24812))
  * Mute repo names in dashboard repo list ([#24811](https://github.com/go-gitea/gitea/pull/24811))
  * Fix max width and margin of comment box on conversation page ([#24809](https://github.com/go-gitea/gitea/pull/24809))
  * Some refactors for issues stats ([#24793](https://github.com/go-gitea/gitea/pull/24793))
  * Rework label colors ([#24790](https://github.com/go-gitea/gitea/pull/24790))
  * Fix OAuth login loading state ([#24788](https://github.com/go-gitea/gitea/pull/24788))
  * Remove duplicated issues options and some more refactors ([#24787](https://github.com/go-gitea/gitea/pull/24787))
  * Decouple the different contexts from each other ([#24786](https://github.com/go-gitea/gitea/pull/24786))
  * Remove background on user dashboard filter bar ([#24779](https://github.com/go-gitea/gitea/pull/24779))
  * Improve and fix bugs surrounding reactions ([#24760](https://github.com/go-gitea/gitea/pull/24760))
  * Make the color of zero-contribution-squares in the activity heatmap more subtle ([#24758](https://github.com/go-gitea/gitea/pull/24758))
  * Fix WEBP image copying ([#24743](https://github.com/go-gitea/gitea/pull/24743))
  * Rework OAuth login buttons, swap github logo to monocolor ([#24740](https://github.com/go-gitea/gitea/pull/24740))
  * Consolidate the two review boxes into one ([#24738](https://github.com/go-gitea/gitea/pull/24738))
  * Unification of registration fields order ([#24737](https://github.com/go-gitea/gitea/pull/24737))
  * Refactor Pull Mirror and fix out-of-sync bugs ([#24732](https://github.com/go-gitea/gitea/pull/24732))
  * Improvements for action detail page ([#24718](https://github.com/go-gitea/gitea/pull/24718))
  * Fix flash of unstyled content in action view page ([#24712](https://github.com/go-gitea/gitea/pull/24712))
  * Don't filter action runs based on state ([#24711](https://github.com/go-gitea/gitea/pull/24711))
  * Optimize actions list by removing an unnecessary `git` call ([#24710](https://github.com/go-gitea/gitea/pull/24710))
  * Support no label/assignee filter and batch clearing labels/assignees ([#24707](https://github.com/go-gitea/gitea/pull/24707))
  * Add icon support for safari ([#24697](https://github.com/go-gitea/gitea/pull/24697))
  * Use standard HTTP library to serve files ([#24693](https://github.com/go-gitea/gitea/pull/24693))
  * Improve button-ghost, remove tertiary button ([#24692](https://github.com/go-gitea/gitea/pull/24692))
  * Only hide tooltip tippy instances ([#24688](https://github.com/go-gitea/gitea/pull/24688))
  * Support migrating storage for actions log via command line ([#24679](https://github.com/go-gitea/gitea/pull/24679))
  * Remove highlight in repo list ([#24675](https://github.com/go-gitea/gitea/pull/24675))
  * Add markdown preview to Submit Review Textarea ([#24672](https://github.com/go-gitea/gitea/pull/24672))
  * Update pin and add pin-slash ([#24669](https://github.com/go-gitea/gitea/pull/24669))
  * Improve empty notifications display ([#24668](https://github.com/go-gitea/gitea/pull/24668))
  * Support SSH for go get ([#24664](https://github.com/go-gitea/gitea/pull/24664))
  * Improve avatar uploading / resizing / compressing, remove Fomantic card module ([#24653](https://github.com/go-gitea/gitea/pull/24653))
  * Only show one tippy at a time ([#24648](https://github.com/go-gitea/gitea/pull/24648))
  * Notification list enhancements, fix striped tables on dark theme ([#24639](https://github.com/go-gitea/gitea/pull/24639))
  * Improve queue & process & stacktrace ([#24636](https://github.com/go-gitea/gitea/pull/24636))
  * Use the type RefName for all the needed places and fix pull mirror sync bugs ([#24634](https://github.com/go-gitea/gitea/pull/24634))
  * Remove fluid on compare diff page ([#24627](https://github.com/go-gitea/gitea/pull/24627))
  * Add a tooltip to the job rerun button ([#24617](https://github.com/go-gitea/gitea/pull/24617))
  * Attach a tooltip to the action status icon ([#24614](https://github.com/go-gitea/gitea/pull/24614))
  * Make the actions control button look like an actual button ([#24611](https://github.com/go-gitea/gitea/pull/24611))
  * Remove unnecessary code ([#24610](https://github.com/go-gitea/gitea/pull/24610))
  * Make repo migration cancelable and fix various bugs ([#24605](https://github.com/go-gitea/gitea/pull/24605))
  * Improve updating Actions tasks ([#24600](https://github.com/go-gitea/gitea/pull/24600))
  * Attach a tooltip to the action control button ([#24595](https://github.com/go-gitea/gitea/pull/24595))
  * Make repository response support HTTP range request ([#24592](https://github.com/go-gitea/gitea/pull/24592))
  * Improve Gitea's web context, decouple "issue template" code into service package ([#24590](https://github.com/go-gitea/gitea/pull/24590))
  * Modify luminance calculation and extract related functions into single files ([#24586](https://github.com/go-gitea/gitea/pull/24586))
  * Simplify template helper functions ([#24570](https://github.com/go-gitea/gitea/pull/24570))
  * Split "modules/context.go" to separate files ([#24569](https://github.com/go-gitea/gitea/pull/24569))
  * Add org visibility label to non-organization's dashboard ([#24558](https://github.com/go-gitea/gitea/pull/24558))
  * Update LDAP filters to include both username and email address ([#24547](https://github.com/go-gitea/gitea/pull/24547))
  * Review fixes and enhancements ([#24526](https://github.com/go-gitea/gitea/pull/24526))
  * Display warning when user try to rename default branch ([#24512](https://github.com/go-gitea/gitea/pull/24512))
  * Fix color for transfer related buttons when having no permission to act ([#24510](https://github.com/go-gitea/gitea/pull/24510))
  * Rework button coloring, add focus and active colors ([#24507](https://github.com/go-gitea/gitea/pull/24507))
  * New webhook trigger for receiving Pull Request review requests ([#24481](https://github.com/go-gitea/gitea/pull/24481))
  * Add goto issue id function ([#24479](https://github.com/go-gitea/gitea/pull/24479))
  * Fix incorrect webhook time and use relative-time to display it ([#24477](https://github.com/go-gitea/gitea/pull/24477))
  * RSS icon fixes ([#24476](https://github.com/go-gitea/gitea/pull/24476))
  * Replace `N/A` with `-` everywhere ([#24474](https://github.com/go-gitea/gitea/pull/24474))
  * Pass 'not' to commit count ([#24473](https://github.com/go-gitea/gitea/pull/24473))
  * Enhance stylelint rule config, remove dead CSS ([#24472](https://github.com/go-gitea/gitea/pull/24472))
  * Remove `font-awesome` and fomantic `icon` module ([#24471](https://github.com/go-gitea/gitea/pull/24471))
  * Improve "new-menu" ([#24465](https://github.com/go-gitea/gitea/pull/24465))
  * Remove fomantic breadcrumb module ([#24463](https://github.com/go-gitea/gitea/pull/24463))
  * Improve template system and panic recovery ([#24461](https://github.com/go-gitea/gitea/pull/24461))
  * Make Issue/PR/projects more compact, misc CSS tweaks ([#24459](https://github.com/go-gitea/gitea/pull/24459))
  * Replace remaining fontawesome dropdown icons with SVG ([#24455](https://github.com/go-gitea/gitea/pull/24455))
  * Remove all direct references to font-awesome ([#24448](https://github.com/go-gitea/gitea/pull/24448))
  * Move links out of translation ([#24446](https://github.com/go-gitea/gitea/pull/24446))
  * Add `ui-monospace` and `SF Mono` to `--fonts-monospace` ([#24442](https://github.com/go-gitea/gitea/pull/24442))
  * Hide 'Mirror Settings' when unneeded, improve hints ([#24433](https://github.com/go-gitea/gitea/pull/24433))
  * Add "Updated" column for admin repositories list ([#24429](https://github.com/go-gitea/gitea/pull/24429))
  * Improve issue list filter ([#24425](https://github.com/go-gitea/gitea/pull/24425))
  * Rework header bar on issue, pull requests and milestone ([#24420](https://github.com/go-gitea/gitea/pull/24420))
  * Improve template helper ([#24417](https://github.com/go-gitea/gitea/pull/24417))
  * Make repo size style matches others (commits/branches/tags) ([#24408](https://github.com/go-gitea/gitea/pull/24408))
  * Support markdown editor for issue template ([#24400](https://github.com/go-gitea/gitea/pull/24400))
  * Improve commit date in commit graph ([#24399](https://github.com/go-gitea/gitea/pull/24399))
  * Start cleaning the messy ".ui.left / .ui.right", improve label list page, fix stackable menu ([#24393](https://github.com/go-gitea/gitea/pull/24393))
  * Merge setting.InitXXX into one function with options ([#24389](https://github.com/go-gitea/gitea/pull/24389))
  * Move `Rename branch` from repo settings page to the page of branches list ([#24380](https://github.com/go-gitea/gitea/pull/24380))
  * Improve protected branch setting page ([#24379](https://github.com/go-gitea/gitea/pull/24379))
  * Display 'Unknown' when runner.version is empty ([#24378](https://github.com/go-gitea/gitea/pull/24378))
  * Display owner of a runner as a tooltip instead of static text ([#24377](https://github.com/go-gitea/gitea/pull/24377))
  * Fix incorrect last online time in runner_edit.tmpl ([#24376](https://github.com/go-gitea/gitea/pull/24376))
  * Fix unclear `IsRepositoryExist` logic ([#24374](https://github.com/go-gitea/gitea/pull/24374))
  * Add custom helm repo name generated from url ([#24363](https://github.com/go-gitea/gitea/pull/24363))
  * Replace placeholders in licenses ([#24354](https://github.com/go-gitea/gitea/pull/24354))
  * Add rerun workflow button and refactor to use SVG octicons ([#24350](https://github.com/go-gitea/gitea/pull/24350))
  * Fix runner button height ([#24338](https://github.com/go-gitea/gitea/pull/24338))
  * Restore bold on repolist ([#24337](https://github.com/go-gitea/gitea/pull/24337))
  * Improve RSS ([#24335](https://github.com/go-gitea/gitea/pull/24335))
  * Refactor "route" related code, fix Safari cookie bug ([#24330](https://github.com/go-gitea/gitea/pull/24330))
  * Alert error message if open dependencies are included in the issues that try to batch close ([#24329](https://github.com/go-gitea/gitea/pull/24329))
  * Add missed column title in runner management page ([#24328](https://github.com/go-gitea/gitea/pull/24328))
  * Automatically select the org when click create repo from org dashboard ([#24325](https://github.com/go-gitea/gitea/pull/24325))
  * Modify width of ui container, fine tune css for settings pages and org header ([#24315](https://github.com/go-gitea/gitea/pull/24315))
  * Fix config list overflow and layout ([#24312](https://github.com/go-gitea/gitea/pull/24312))
  * Improve some modal action buttons ([#24289](https://github.com/go-gitea/gitea/pull/24289))
  * Move code from module to service ([#24287](https://github.com/go-gitea/gitea/pull/24287))
  * Sort users and orgs on explore by recency by default ([#24279](https://github.com/go-gitea/gitea/pull/24279))
  * Allow using localized absolute date times within phrases with place holders and localize issue due date events ([#24275](https://github.com/go-gitea/gitea/pull/24275))
  * Show workflow config error on file view also ([#24267](https://github.com/go-gitea/gitea/pull/24267))
  * Improve template helper functions: string/slice ([#24266](https://github.com/go-gitea/gitea/pull/24266))
  * Use more specific test methods ([#24265](https://github.com/go-gitea/gitea/pull/24265))
  * Add `DumpVar` helper function to help debugging templates ([#24262](https://github.com/go-gitea/gitea/pull/24262))
  * Limit avatar upload to valid image files ([#24258](https://github.com/go-gitea/gitea/pull/24258))
  * Improve emoji and mention matching ([#24255](https://github.com/go-gitea/gitea/pull/24255))
  * Change to vertical navbar layout for secondary navbar for repo/user/admin settings ([#24246](https://github.com/go-gitea/gitea/pull/24246))
  * Refactor config provider ([#24245](https://github.com/go-gitea/gitea/pull/24245))
  * Improve test logger ([#24235](https://github.com/go-gitea/gitea/pull/24235))
  * Default show closed actions list if all actions was closed ([#24234](https://github.com/go-gitea/gitea/pull/24234))
  * Add missing badges in user profile for /projects and /packages ([#24232](https://github.com/go-gitea/gitea/pull/24232))
  * Add repository counter badge to repository tab ([#24205](https://github.com/go-gitea/gitea/pull/24205))
  * Move secrets and runners settings to actions settings ([#24200](https://github.com/go-gitea/gitea/pull/24200))
  * Require at least one unit to be enabled ([#24189](https://github.com/go-gitea/gitea/pull/24189))
  * Use same action status svg icons on actions list as on action page ([#24178](https://github.com/go-gitea/gitea/pull/24178))
  * Use secondary pointing menu for tabs on user/organization home page ([#24162](https://github.com/go-gitea/gitea/pull/24162))
  * Improve Wiki TOC ([#24137](https://github.com/go-gitea/gitea/pull/24137))
  * Refactor locale number ([#24134](https://github.com/go-gitea/gitea/pull/24134))
  * Localize activity heatmap (except tooltip) ([#24131](https://github.com/go-gitea/gitea/pull/24131))
  * Fix duplicate modals when clicking on "remove all" repository button ([#24129](https://github.com/go-gitea/gitea/pull/24129))
  * Add runner check in repo action page ([#24124](https://github.com/go-gitea/gitea/pull/24124))
  * Support triggering workflows by wiki related events ([#24119](https://github.com/go-gitea/gitea/pull/24119))
  * Refactor cookie ([#24107](https://github.com/go-gitea/gitea/pull/24107))
  * Remove untranslatable `on_date` key ([#24106](https://github.com/go-gitea/gitea/pull/24106))
  * Refactor delete_modal_actions template and use it for project column related actions ([#24097](https://github.com/go-gitea/gitea/pull/24097))
  * Improve git log for debugging ([#24095](https://github.com/go-gitea/gitea/pull/24095))
  * Add option to search for users is active join a team ([#24093](https://github.com/go-gitea/gitea/pull/24093))
  * Add PDF rendering via PDFObject ([#24086](https://github.com/go-gitea/gitea/pull/24086))
  * Refactor web route ([#24080](https://github.com/go-gitea/gitea/pull/24080))
  * Make more functions use ctx instead of db.DefaultContext ([#24068](https://github.com/go-gitea/gitea/pull/24068))
  * Make HTML template functions support context ([#24056](https://github.com/go-gitea/gitea/pull/24056))
  * Refactor rename user and rename organization ([#24052](https://github.com/go-gitea/gitea/pull/24052))
  * Localize milestone related time strings ([#24051](https://github.com/go-gitea/gitea/pull/24051))
  * Expand selected file when clicking file tree ([#24041](https://github.com/go-gitea/gitea/pull/24041))
  * Add popup to hashed comments/pull requests/issues in file editing/adding preview tab ([#24040](https://github.com/go-gitea/gitea/pull/24040))
  * Add placeholder and aria attributes to release and wiki edit page ([#24031](https://github.com/go-gitea/gitea/pull/24031))
  * Add new user types `reserved`, `bot`, and `remote` ([#24026](https://github.com/go-gitea/gitea/pull/24026))
  * Allow adding SSH keys even if SSH server is disabled ([#24025](https://github.com/go-gitea/gitea/pull/24025))
  * Use a general approach to access custom/static/builtin assets ([#24022](https://github.com/go-gitea/gitea/pull/24022))
  * Update github.com/google/go-github to v52 ([#24004](https://github.com/go-gitea/gitea/pull/24004))
  * Replace tribute with text-expander-element for textarea ([#23985](https://github.com/go-gitea/gitea/pull/23985))
  * Group template helper functions, remove `Printf`, improve template error messages ([#23982](https://github.com/go-gitea/gitea/pull/23982))
  * Drop "unrolled/render" package ([#23965](https://github.com/go-gitea/gitea/pull/23965))
  * Add job.duration in web ui ([#23963](https://github.com/go-gitea/gitea/pull/23963))
  * Tweak pull request branch delete ui ([#23951](https://github.com/go-gitea/gitea/pull/23951))
  * Merge template functions "dict/Dict/mergeinto" ([#23932](https://github.com/go-gitea/gitea/pull/23932))
  * Use a general Eval function for expressions in templates. ([#23927](https://github.com/go-gitea/gitea/pull/23927))
  * Clean template/helper.go ([#23922](https://github.com/go-gitea/gitea/pull/23922))
  * Actions: Use default branch as ref when a branch/tag delete occurs ([#23910](https://github.com/go-gitea/gitea/pull/23910))
  * Add tooltips for MD editor buttons and add `muted` class for buttons ([#23896](https://github.com/go-gitea/gitea/pull/23896))
  * Improve markdown editor: width, height, preferred ([#23895](https://github.com/go-gitea/gitea/pull/23895))
  * Make Release Download URLs predictable ([#23891](https://github.com/go-gitea/gitea/pull/23891))
  * Remove fomantic ".link" selector and styles ([#23888](https://github.com/go-gitea/gitea/pull/23888))
  * Added close/open button to details page of milestone ([#23877](https://github.com/go-gitea/gitea/pull/23877))
  * Introduce GitHub markdown editor, keep EasyMDE as fallback ([#23876](https://github.com/go-gitea/gitea/pull/23876))
  * Introduce GiteaLocaleNumber custom element to handle number localization on pages. ([#23861](https://github.com/go-gitea/gitea/pull/23861))
  * Make first section on home page full width ([#23854](https://github.com/go-gitea/gitea/pull/23854))
  * Use different SVG for pending and running actions ([#23836](https://github.com/go-gitea/gitea/pull/23836))
  * Display image size for multiarch container images ([#23821](https://github.com/go-gitea/gitea/pull/23821))
  * Improve action log display with control chars ([#23820](https://github.com/go-gitea/gitea/pull/23820))
  * Fix dropdown direction behavior ([#23806](https://github.com/go-gitea/gitea/pull/23806))
  * Fix incorrect/Improve error handle in edit user page ([#23805](https://github.com/go-gitea/gitea/pull/23805))
  * Use clippie module to copy to clipboard ([#23801](https://github.com/go-gitea/gitea/pull/23801))
  * Make minio package support legacy MD5 checksum ([#23768](https://github.com/go-gitea/gitea/pull/23768))
  * Add ONLY_SHOW_RELEVANT_REPOS back, fix explore page bug, make code more strict ([#23766](https://github.com/go-gitea/gitea/pull/23766))
  * Refactor docs ([#23752](https://github.com/go-gitea/gitea/pull/23752))
  * Fix markup background, improve wiki rendering ([#23750](https://github.com/go-gitea/gitea/pull/23750))
  * Make label templates have consistent behavior and priority ([#23749](https://github.com/go-gitea/gitea/pull/23749))
  * Improve LoadUnitConfig to handle invalid or duplicate units ([#23736](https://github.com/go-gitea/gitea/pull/23736))
  * Append `(comment)` when a link points at a comment rather than the whole issue ([#23734](https://github.com/go-gitea/gitea/pull/23734))
  * Clean some legacy files and move some build files ([#23699](https://github.com/go-gitea/gitea/pull/23699))
  * Refactor repo commit list ([#23690](https://github.com/go-gitea/gitea/pull/23690))
  * Refactor internal API for git commands, use meaningful messages instead of "Internal Server Error" ([#23687](https://github.com/go-gitea/gitea/pull/23687))
  * Add aria attributes to interactive time tooltips. ([#23661](https://github.com/go-gitea/gitea/pull/23661))
  * Fix long project name display in issue list and in related dropdown ([#23653](https://github.com/go-gitea/gitea/pull/23653))
  * Use data-tooltip-content for tippy tooltip ([#23649](https://github.com/go-gitea/gitea/pull/23649))
  * Fix new issue/pull request btn margin when it is next to sort ([#23647](https://github.com/go-gitea/gitea/pull/23647))
  * Fine tune more downdrop settings, use SVG for labels, improve Repo Topic Edit form ([#23626](https://github.com/go-gitea/gitea/pull/23626))
  * Allow new file and edit file preview if it has editable extension ([#23624](https://github.com/go-gitea/gitea/pull/23624))
  * Replace a few fontawesome icons with svg ([#23602](https://github.com/go-gitea/gitea/pull/23602))
  * `Publish Review` buttons should indicate why they are disabled ([#23598](https://github.com/go-gitea/gitea/pull/23598))
  * Convert issue list checkboxes to native ([#23596](https://github.com/go-gitea/gitea/pull/23596))
  * Set opaque background on markup and images ([#23578](https://github.com/go-gitea/gitea/pull/23578))
  * Use a general approach to show tooltip, fix temporary tooltip bug ([#23574](https://github.com/go-gitea/gitea/pull/23574))
  * Improve `<SvgIcon>` to make it output `svg` node and optimize performance ([#23570](https://github.com/go-gitea/gitea/pull/23570))
  * Enable color for consistency checks diffs ([#23563](https://github.com/go-gitea/gitea/pull/23563))
  * Fix dropdown icon misalignment when using fomantic icon ([#23558](https://github.com/go-gitea/gitea/pull/23558))
  * Decouple the issue-template code from comment_tab.tmpl ([#23556](https://github.com/go-gitea/gitea/pull/23556))
  * Remove `id="comment-form"` dead code, fix tag ([#23555](https://github.com/go-gitea/gitea/pull/23555))
  * Diff improvements ([#23553](https://github.com/go-gitea/gitea/pull/23553))
  * Sort Python package descriptors by version to mimic PyPI format ([#23550](https://github.com/go-gitea/gitea/pull/23550))
  * Use a general approch to improve a11y for all checkboxes and dropdowns. ([#23542](https://github.com/go-gitea/gitea/pull/23542))
  * Fix long name ui issues and label ui issue ([#23541](https://github.com/go-gitea/gitea/pull/23541))
  * Return `repository` in npm package metadata endpoint ([#23539](https://github.com/go-gitea/gitea/pull/23539))
  * Use `project.IconName` instead of repeated unreadable `if-else` chains ([#23538](https://github.com/go-gitea/gitea/pull/23538))
  * Remove stars in dashboard repo list ([#23530](https://github.com/go-gitea/gitea/pull/23530))
  * Update mini-css-extract-plugin, remove postcss ([#23520](https://github.com/go-gitea/gitea/pull/23520))
  * Change `Close` to either `Close issue` or `Close pull request` ([#23506](https://github.com/go-gitea/gitea/pull/23506))
  * Fix theme-auto loading ([#23504](https://github.com/go-gitea/gitea/pull/23504))
  * Fix tags sort by creation time (descending) on branch/tag dropdowns ([#23491](https://github.com/go-gitea/gitea/pull/23491))
  * Display the version of runner in the runner list ([#23490](https://github.com/go-gitea/gitea/pull/23490))
  * Replace Less with CSS ([#23481](https://github.com/go-gitea/gitea/pull/23481))
  * Fix `.locale.Tr` function not found in delete modal ([#23468](https://github.com/go-gitea/gitea/pull/23468))
  * Allow both fullname and username search when `DEFAULT_SHOW_FULL_NAME` is true ([#23463](https://github.com/go-gitea/gitea/pull/23463))
  * Add project type descriptions in issue badge and improve project icons ([#23437](https://github.com/go-gitea/gitea/pull/23437))
  * Use context for `RepositoryList.LoadAttributes` ([#23435](https://github.com/go-gitea/gitea/pull/23435))
  * Refactor branch/tag selector to Vue SFC ([#23421](https://github.com/go-gitea/gitea/pull/23421))
  * Keep (add if not existing) xmlns attribute for generated SVG images ([#23410](https://github.com/go-gitea/gitea/pull/23410))
  * Refactor dashboard repo list to Vue SFC ([#23405](https://github.com/go-gitea/gitea/pull/23405))
  * Add workflow error notification in ui ([#23404](https://github.com/go-gitea/gitea/pull/23404))
  * Refactor branch/tag selector dropdown (first step) ([#23394](https://github.com/go-gitea/gitea/pull/23394))
  * Reduce duplicate and useless code in options ([#23369](https://github.com/go-gitea/gitea/pull/23369))
  * Convert `<div class="button">` to `<button class="button">` ([#23337](https://github.com/go-gitea/gitea/pull/23337))
  * Add path prefix to ObjectStorage.Iterator ([#23332](https://github.com/go-gitea/gitea/pull/23332))
  * Improve cache context ([#23330](https://github.com/go-gitea/gitea/pull/23330))
  * Move pidfile creation from setting to web cmd package ([#23285](https://github.com/go-gitea/gitea/pull/23285))
  * Fix tags view ([#23243](https://github.com/go-gitea/gitea/pull/23243))
  * Add commit info in action page ([#23210](https://github.com/go-gitea/gitea/pull/23210))
  * Support paste treepath when creating a new file or updating the file name ([#23209](https://github.com/go-gitea/gitea/pull/23209))
  * Allow skipping forks and mirrors from being indexed ([#23187](https://github.com/go-gitea/gitea/pull/23187))
  * Use context parameter in services/repository ([#23186](https://github.com/go-gitea/gitea/pull/23186))
  * Hide target selector if tag exists when creating new release ([#23171](https://github.com/go-gitea/gitea/pull/23171))
  * Improve FindProjects ([#23085](https://github.com/go-gitea/gitea/pull/23085))
  * Clean Path in Options ([#23006](https://github.com/go-gitea/gitea/pull/23006))
  * Add margin top to the top of branches ([#23002](https://github.com/go-gitea/gitea/pull/23002))
  * Remove unnecessary and incorrect `find('.menu').toggle()` ([#22987](https://github.com/go-gitea/gitea/pull/22987))
  * Improve GetBoards and getDefaultBoard ([#22981](https://github.com/go-gitea/gitea/pull/22981))
  * Improve squash merge commit author and co-author with private emails ([#22977](https://github.com/go-gitea/gitea/pull/22977))
  * Add --quiet option to gitea dump ([#22969](https://github.com/go-gitea/gitea/pull/22969))
  * Add pagination for dashboard and user activity feeds ([#22937](https://github.com/go-gitea/gitea/pull/22937))
  * Handle files starting with colons in WalkGitLog ([#22935](https://github.com/go-gitea/gitea/pull/22935))
  * Add "Reviewed by you" filter for pull requests ([#22927](https://github.com/go-gitea/gitea/pull/22927))
  * Parse external request id from request headers, and print it in access log ([#22906](https://github.com/go-gitea/gitea/pull/22906))
  * Replace `repo.namedBlob` by `git.TreeEntry`. ([#22898](https://github.com/go-gitea/gitea/pull/22898))
  * Pull Requests: add button to compare force pushed commits ([#22857](https://github.com/go-gitea/gitea/pull/22857))
  * Fix pull request update showing too many commits with multiple branches ([#22856](https://github.com/go-gitea/gitea/pull/22856))
  * Require approval to run actions for fork pull request ([#22803](https://github.com/go-gitea/gitea/pull/22803))
  * Projects: rename Board to Column in interface and improve consistency ([#22767](https://github.com/go-gitea/gitea/pull/22767))
  * Add user visibility in dashboard navbar ([#22747](https://github.com/go-gitea/gitea/pull/22747))
  * Add .livemd as a markdown extension ([#22730](https://github.com/go-gitea/gitea/pull/22730))
  * Clean up WebAuthn javascript code and remove JQuery code ([#22697](https://github.com/go-gitea/gitea/pull/22697))
  * Merge message template support for rebase without merge commit ([#22669](https://github.com/go-gitea/gitea/pull/22669))
  * Show editorconfig warnings when viewing a malformed editorconfig ([#21257](https://github.com/go-gitea/gitea/pull/21257))
  * Npm packages: set repository link based on the url in package.json ([#20379](https://github.com/go-gitea/gitea/pull/20379))
* BUGFIXES
  * Add support for different Maven POM encoding ([#25873](https://github.com/go-gitea/gitea/pull/25873)) ([#25890](https://github.com/go-gitea/gitea/pull/25890))
  * Fix incorrect repo url when changed the case of ownername ([#25733](https://github.com/go-gitea/gitea/pull/25733)) ([#25881](https://github.com/go-gitea/gitea/pull/25881))
  * Fix empty project displayed in issue sidebar ([#25802](https://github.com/go-gitea/gitea/pull/25802)) ([#25854](https://github.com/go-gitea/gitea/pull/25854))
  * Show correct SSL Mode on "install page" ([#25818](https://github.com/go-gitea/gitea/pull/25818)) ([#25838](https://github.com/go-gitea/gitea/pull/25838))
  * Fix the error message when the token is incorrect ([#25701](https://github.com/go-gitea/gitea/pull/25701)) ([#25836](https://github.com/go-gitea/gitea/pull/25836))
  * Fix incorrect oldest sort in project list ([#25806](https://github.com/go-gitea/gitea/pull/25806)) ([#25835](https://github.com/go-gitea/gitea/pull/25835))
  * For API attachments, use API URL ([#25639](https://github.com/go-gitea/gitea/pull/25639)) ([#25814](https://github.com/go-gitea/gitea/pull/25814))
  * Avoid amending the Rebase and Fast-forward merge if there is no message template ([#25779](https://github.com/go-gitea/gitea/pull/25779)) ([#25809](https://github.com/go-gitea/gitea/pull/25809))
  * Make "install page" respect environment config ([#25648](https://github.com/go-gitea/gitea/pull/25648)) ([#25799](https://github.com/go-gitea/gitea/pull/25799))
  * Fix activity type match in `matchPullRequestEvent` ([#25746](https://github.com/go-gitea/gitea/pull/25746)) ([#25796](https://github.com/go-gitea/gitea/pull/25796))
  * Fix notification list bugs ([#25781](https://github.com/go-gitea/gitea/pull/25781)) ([#25787](https://github.com/go-gitea/gitea/pull/25787))
  * Revert package access change from [#23879](https://github.com/go-gitea/gitea/pull/23879) ([#25707](https://github.com/go-gitea/gitea/pull/25707)) ([#25785](https://github.com/go-gitea/gitea/pull/25785))
  * Check `ctx.Written()` for `GetActionIssue` ([#25698](https://github.com/go-gitea/gitea/pull/25698)) ([#25711](https://github.com/go-gitea/gitea/pull/25711))
  * Fix position of org follow button ([#25688](https://github.com/go-gitea/gitea/pull/25688)) ([#25692](https://github.com/go-gitea/gitea/pull/25692))
  * Fix the nil pointer when assigning issues to projects ([#25665](https://github.com/go-gitea/gitea/pull/25665)) ([#25677](https://github.com/go-gitea/gitea/pull/25677))
  * Log the real reason when authentication fails (but don't show the user) ([#25414](https://github.com/go-gitea/gitea/pull/25414)) ([#25660](https://github.com/go-gitea/gitea/pull/25660))
  * Fix bug when change user name ([#25637](https://github.com/go-gitea/gitea/pull/25637)) ([#25646](https://github.com/go-gitea/gitea/pull/25646))
  * Make "cancel" buttons have proper type in modal forms ([#25618](https://github.com/go-gitea/gitea/pull/25618)) ([#25641](https://github.com/go-gitea/gitea/pull/25641))
  * Use AfterCommitId to get commit for Viewed functionality ([#25529](https://github.com/go-gitea/gitea/pull/25529)) ([#25612](https://github.com/go-gitea/gitea/pull/25612))
  * Fix bug of branches API with tests([#25578](https://github.com/go-gitea/gitea/pull/25578)) ([#25579](https://github.com/go-gitea/gitea/pull/25579))
  * Fix content holes in Actions task logs file ([#25560](https://github.com/go-gitea/gitea/pull/25560)) ([#25566](https://github.com/go-gitea/gitea/pull/25566))
  * Fix bugs related to notification endpoints ([#25548](https://github.com/go-gitea/gitea/pull/25548)) ([#25562](https://github.com/go-gitea/gitea/pull/25562))
  * Add Adopt repository event and handler ([#25497](https://github.com/go-gitea/gitea/pull/25497)) ([#25518](https://github.com/go-gitea/gitea/pull/25518))
  * Improve wiki sidebar and TOC ([#25460](https://github.com/go-gitea/gitea/pull/25460)) ([#25477](https://github.com/go-gitea/gitea/pull/25477))
  * Make "dismiss" content shown correctly ([#25461](https://github.com/go-gitea/gitea/pull/25461)) ([#25465](https://github.com/go-gitea/gitea/pull/25465))
  * Change default email domain for LDAP users ([#25425](https://github.com/go-gitea/gitea/pull/25425)) ([#25434](https://github.com/go-gitea/gitea/pull/25434))
  * Fix missing commit message body when the message has leading newlines ([#25418](https://github.com/go-gitea/gitea/pull/25418)) ([#25422](https://github.com/go-gitea/gitea/pull/25422))
  * Fix LDAP sync when Username Attribute is empty ([#25278](https://github.com/go-gitea/gitea/pull/25278)) ([#25379](https://github.com/go-gitea/gitea/pull/25379))
  * Fetch all git data for embedding correct version in docker image ([#25361](https://github.com/go-gitea/gitea/pull/25361)) ([#25373](https://github.com/go-gitea/gitea/pull/25373))
  * Fix incorrect actions ref_name ([#25358](https://github.com/go-gitea/gitea/pull/25358)) ([#25367](https://github.com/go-gitea/gitea/pull/25367))
  * Write absolute AppDataPath to app.ini when installing ([#25331](https://github.com/go-gitea/gitea/pull/25331)) ([#25347](https://github.com/go-gitea/gitea/pull/25347))
  * Fix incorrect config argument position for builtin SSH server ([#25341](https://github.com/go-gitea/gitea/pull/25341))
  * Remove EasyMDE focus outline on text ([#25328](https://github.com/go-gitea/gitea/pull/25328)) ([#25332](https://github.com/go-gitea/gitea/pull/25332))
  * Fix displayed RPM repo url ([#25310](https://github.com/go-gitea/gitea/pull/25310)) ([#25313](https://github.com/go-gitea/gitea/pull/25313))
  * Fix index generation parallelly failure ([#25235](https://github.com/go-gitea/gitea/pull/25235)) ([#25269](https://github.com/go-gitea/gitea/pull/25269))
  * Fix panic when migrating a repo from GitHub with issues ([#25246](https://github.com/go-gitea/gitea/pull/25246)) ([#25247](https://github.com/go-gitea/gitea/pull/25247))
  * Fix task list checkbox toggle to work with YAML front matter ([#25184](https://github.com/go-gitea/gitea/pull/25184)) ([#25227](https://github.com/go-gitea/gitea/pull/25227))
  * Fix compatible for webhook ref type ([#25195](https://github.com/go-gitea/gitea/pull/25195)) ([#25223](https://github.com/go-gitea/gitea/pull/25223))
  * Hide limited users if viewed by anonymous ghost ([#25214](https://github.com/go-gitea/gitea/pull/25214)) ([#25220](https://github.com/go-gitea/gitea/pull/25220))
  * Do not overwrite the log mode when installing ([#25203](https://github.com/go-gitea/gitea/pull/25203)) ([#25209](https://github.com/go-gitea/gitea/pull/25209))
  * Fix fullscreen for action  ([#25200](https://github.com/go-gitea/gitea/pull/25200)) ([#25207](https://github.com/go-gitea/gitea/pull/25207))
  * Add `WithPullRequest` for `actionsNotifier` ([#25144](https://github.com/go-gitea/gitea/pull/25144)) ([#25197](https://github.com/go-gitea/gitea/pull/25197))
  * Fix `MilestoneIDs` when querying issues ([#25125](https://github.com/go-gitea/gitea/pull/25125)) ([#25141](https://github.com/go-gitea/gitea/pull/25141))
  * Fix incorrect git ignore rule and add missing license files ([#25135](https://github.com/go-gitea/gitea/pull/25135)) ([#25138](https://github.com/go-gitea/gitea/pull/25138))
  * Remove incorrect element ID on "post-install" page ([#25104](https://github.com/go-gitea/gitea/pull/25104)) ([#25129](https://github.com/go-gitea/gitea/pull/25129))
  * Fix 500 error caused by notifications without an issue such as repo transfers ([#25101](https://github.com/go-gitea/gitea/pull/25101))
  * Help to recover from corrupted levelqueue ([#24912](https://github.com/go-gitea/gitea/pull/24912))
  * Fix 500 error when select `No assignee` filter in issue list page ([#24854](https://github.com/go-gitea/gitea/pull/24854))
  * Add validations.required check to dropdown field ([#24849](https://github.com/go-gitea/gitea/pull/24849))
  * Reenable creating default webhooks. ([#24626](https://github.com/go-gitea/gitea/pull/24626))
  * Fix incorrect user visibility ([#24557](https://github.com/go-gitea/gitea/pull/24557))
  * Fix commits pushed with deploy keys not shown in dashboard ([#24521](https://github.com/go-gitea/gitea/pull/24521))
  * Check length of `LogIndexes` in case it is outdated ([#24516](https://github.com/go-gitea/gitea/pull/24516))
  * Fix incorrect CurrentUser check for docker rootless ([#24441](https://github.com/go-gitea/gitea/pull/24441))
  * Fix some mistakes when using `ignSignIn` ([#24415](https://github.com/go-gitea/gitea/pull/24415))
  * Fix incorrect CORS response in Http Git handler ([#24303](https://github.com/go-gitea/gitea/pull/24303))
  * Fix issue attachment handling ([#24202](https://github.com/go-gitea/gitea/pull/24202))
  * Make mention autocomplete case insensitive in new markdown editor ([#24190](https://github.com/go-gitea/gitea/pull/24190))
  * Use 1.18's aria role for dropdown menus ([#24144](https://github.com/go-gitea/gitea/pull/24144))
  * Fix internal sever error when visiting a PR that bound to the deleted team ([#24127](https://github.com/go-gitea/gitea/pull/24127))
  * Add migration to fix external unit access mode of owner/admin team ([#24117](https://github.com/go-gitea/gitea/pull/24117))
  * Show friendly 500 error page to users and developers ([#24110](https://github.com/go-gitea/gitea/pull/24110))
  * Fix meilisearch not working when searching across multiple repositories ([#24109](https://github.com/go-gitea/gitea/pull/24109))
  * Fix math and mermaid rendering bugs ([#24049](https://github.com/go-gitea/gitea/pull/24049))
  * Remove "inverted" class on creating new label and cancel buttons ([#24030](https://github.com/go-gitea/gitea/pull/24030))
  * Allow repo admins too to delete the repo ([#23940](https://github.com/go-gitea/gitea/pull/23940))
  * Disable editing tags ([#23883](https://github.com/go-gitea/gitea/pull/23883))
  * Fix review conversation reply ([#23846](https://github.com/go-gitea/gitea/pull/23846))
  * Fix incorrect CORS failure detection logic ([#23844](https://github.com/go-gitea/gitea/pull/23844))
  * Remove incorrect HTML self close tag ([#23748](https://github.com/go-gitea/gitea/pull/23748))
  * Fix incorrect `toggle` buttons ([#23676](https://github.com/go-gitea/gitea/pull/23676))
  * Introduce path Clean/Join helper functions ([#23495](https://github.com/go-gitea/gitea/pull/23495))
  * Fix missed migration in [#22235](https://github.com/go-gitea/gitea/pull/22235) ([#23482](https://github.com/go-gitea/gitea/pull/23482))
  * Do not store user projects as organization projects ([#23353](https://github.com/go-gitea/gitea/pull/23353))
  * Fix incorrect display for comment context menu ([#23343](https://github.com/go-gitea/gitea/pull/23343))
  * Make Ctrl+Enter submit a pending comment (starting review) instead of submitting a single comment ([#23245](https://github.com/go-gitea/gitea/pull/23245))
  * Fix submit button won't refresh in New Repository Fork page ([#22994](https://github.com/go-gitea/gitea/pull/22994))
  * Remove stars when repo goes private ([#19904](https://github.com/go-gitea/gitea/pull/19904))
* TESTING
  * Add unit test for repository collaboration ([#25640](https://github.com/go-gitea/gitea/pull/25640)) ([#25658](https://github.com/go-gitea/gitea/pull/25658))
  * Add missing test case and fix typo in tests ([#24915](https://github.com/go-gitea/gitea/pull/24915))
  * Kd/fix redis unit test ([#24650](https://github.com/go-gitea/gitea/pull/24650))
  * Add owner team permission check test ([#24096](https://github.com/go-gitea/gitea/pull/24096))
  * Test renderReadmeFile ([#23185](https://github.com/go-gitea/gitea/pull/23185))
  * Add default owner team to privated_org and limited_org in unit test ([#23109](https://github.com/go-gitea/gitea/pull/23109))
  * Speed up HasUserStopwatch & GetActiveStopwatch ([#23051](https://github.com/go-gitea/gitea/pull/23051))
  * Remove all package data after tests ([#22984](https://github.com/go-gitea/gitea/pull/22984))
* TRANSLATION
  * Backport locales to v1.20 ([#25899](https://github.com/go-gitea/gitea/pull/25899))
  * Translate untranslated string in issues list ([#25759](https://github.com/go-gitea/gitea/pull/25759)) ([#25761](https://github.com/go-gitea/gitea/pull/25761))
  * Remove broken translations ([#25737](https://github.com/go-gitea/gitea/pull/25737))
  * Show correct naming for 1 comment ([#25704](https://github.com/go-gitea/gitea/pull/25704)) ([#25712](https://github.com/go-gitea/gitea/pull/25712))
  * Add Chinese documentations for Actions ([#24902](https://github.com/go-gitea/gitea/pull/24902))
  * Change `valid_until` translation to `valid_until_date` and include placeholder for the date ([#24563](https://github.com/go-gitea/gitea/pull/24563))
  * Change `add_on` translation to `added_on` and include placeholder for the date ([#24562](https://github.com/go-gitea/gitea/pull/24562))
  * Change `join_on` translation to `joined_on` and include placeholder for the date ([#24550](https://github.com/go-gitea/gitea/pull/24550))
  * Use double quotes consistently in en-US ([#24141](https://github.com/go-gitea/gitea/pull/24141))
  * Clarify Gitea/Crowdin locale behaviors, add tests for LocaleStore, fix some strings with semicolons ([#23819](https://github.com/go-gitea/gitea/pull/23819))
  * Update localization.zh-cn.md ([#23448](https://github.com/go-gitea/gitea/pull/23448))
  * Fix grammar in error message ([#23273](https://github.com/go-gitea/gitea/pull/23273))
* BUILD
  * Correct permissions for `.ssh` and `authorized_keys` ([#25721](https://github.com/go-gitea/gitea/pull/25721)) ([#25730](https://github.com/go-gitea/gitea/pull/25730))
  * Upgrade snap to node 20 ([#24990](https://github.com/go-gitea/gitea/pull/24990))
  * Use Go 1.20 for next release ([#24859](https://github.com/go-gitea/gitea/pull/24859))
  * Ignore build for docs only ([#24761](https://github.com/go-gitea/gitea/pull/24761))
  * Update cron-translations.yml ([#24708](https://github.com/go-gitea/gitea/pull/24708))
  * Update to Alpine 3.18 ([#24700](https://github.com/go-gitea/gitea/pull/24700))
  * Check latest version on CI ([#24556](https://github.com/go-gitea/gitea/pull/24556))
  * Upgrade to Node 20 on CI, enable actions cancellation ([#24524](https://github.com/go-gitea/gitea/pull/24524))
  * Mark `/templates/swagger/v1_json.tmpl` as generated file ([#24306](https://github.com/go-gitea/gitea/pull/24306))
  * Enable forbidigo linter ([#24278](https://github.com/go-gitea/gitea/pull/24278))
  * Introduce lint-md and compliance-docs pipeline ([#24021](https://github.com/go-gitea/gitea/pull/24021))
  * Add eslint-plugin-custom-elements ([#23991](https://github.com/go-gitea/gitea/pull/23991))
  * Update eslints for Vue 3 ([#23935](https://github.com/go-gitea/gitea/pull/23935))
  * Improve backport-locales.go ([#23807](https://github.com/go-gitea/gitea/pull/23807))
  * Don't run unnecessary steps when only docs changed ([#23103](https://github.com/go-gitea/gitea/pull/23103))
* DOCS
  * Docs: rootless docker ssh's default port is 2222 ([#25771](https://github.com/go-gitea/gitea/pull/25771)) ([#25772](https://github.com/go-gitea/gitea/pull/25772))
  * Add documentation about supported workflow trigger events ([#25582](https://github.com/go-gitea/gitea/pull/25582)) ([#25589](https://github.com/go-gitea/gitea/pull/25589))
  * Document creating an API key from the CLI ([#25504](https://github.com/go-gitea/gitea/pull/25504))
  * Use the new download domain replace the old ([#25405](https://github.com/go-gitea/gitea/pull/25405)) ([#25409](https://github.com/go-gitea/gitea/pull/25409))
  * Add Exoscale to installation on cloud provider docs ([#25342](https://github.com/go-gitea/gitea/pull/25342)) ([#25346](https://github.com/go-gitea/gitea/pull/25346))
  * Improve some documents: release version, logging, NFS lock ([#25202](https://github.com/go-gitea/gitea/pull/25202)) ([#25204](https://github.com/go-gitea/gitea/pull/25204))
  * Change branch name from master to main in some documents' links ([#25126](https://github.com/go-gitea/gitea/pull/25126)) ([#25140](https://github.com/go-gitea/gitea/pull/25140))
  * Introduce how to configure cache when starting a Runner with Docker ([#25077](https://github.com/go-gitea/gitea/pull/25077))
  * Docs: remove an extraneous whitespace ([#24949](https://github.com/go-gitea/gitea/pull/24949))
  * Update Asciidoc markup example with safe defaults ([#24920](https://github.com/go-gitea/gitea/pull/24920))
  * Fix \<empty\> in administration/config-cheat-sheet.en-us.md ([#24905](https://github.com/go-gitea/gitea/pull/24905))
  * Rename docs packages title from xxx Packages Repository -> xxx Package Registry ([#24895](https://github.com/go-gitea/gitea/pull/24895))
  * Replace `drone exec` to `act_runner exec` in test README.md ([#24791](https://github.com/go-gitea/gitea/pull/24791))
  * Update packages overview page ([#24730](https://github.com/go-gitea/gitea/pull/24730))
  * Docs for creating a user to run Gitea on Fedora/RHEL/CentOS ([#24725](https://github.com/go-gitea/gitea/pull/24725))
  * Move actions as usage's subdirectory and update comparsion zh-cn version ([#24719](https://github.com/go-gitea/gitea/pull/24719))
  * Document `redis-cluster` explicitly in config ([#24717](https://github.com/go-gitea/gitea/pull/24717))
  * Improve reverse-proxy document and fix nginx config bug ([#24616](https://github.com/go-gitea/gitea/pull/24616))
  * Fix broken `README` link ([#24546](https://github.com/go-gitea/gitea/pull/24546))
  * Update `CONTRIBUTING.md` ([#24492](https://github.com/go-gitea/gitea/pull/24492))
  * Docs for Gitea Actions ([#24405](https://github.com/go-gitea/gitea/pull/24405))
  * Zh-cn support on doc pages ([#24166](https://github.com/go-gitea/gitea/pull/24166))
  * Fix https setup doc zh-cn ([#24015](https://github.com/go-gitea/gitea/pull/24015))
  * Adjust some documentations titles ([#23941](https://github.com/go-gitea/gitea/pull/23941))
  * More specific and unique feed name for NuGet install command template. ([#23889](https://github.com/go-gitea/gitea/pull/23889))
  * Clarify that Gitea requires JavaScript ([#23677](https://github.com/go-gitea/gitea/pull/23677))
  * Rename develop -> development, contribute -> contributing, administer -> administration ([#23662](https://github.com/go-gitea/gitea/pull/23662))
  * Update PR documentation ([#23620](https://github.com/go-gitea/gitea/pull/23620))
  * Add package registry architecture overview ([#23445](https://github.com/go-gitea/gitea/pull/23445))
  * Add gradle samples in maven doc of packages ([#23374](https://github.com/go-gitea/gitea/pull/23374))
  * Improve the frontend guideline ([#23298](https://github.com/go-gitea/gitea/pull/23298))
  * Add document for `webcomponents` ([#23261](https://github.com/go-gitea/gitea/pull/23261))
  * Add Gitea Community Code of Conduct ([#23188](https://github.com/go-gitea/gitea/pull/23188))
  * Avoid Hugo from adding quote to actions url ([#23097](https://github.com/go-gitea/gitea/pull/23097))
  * Improve reverse proxies documentation ([#23068](https://github.com/go-gitea/gitea/pull/23068))
  * Docs: HTTPS configuration for zh-cn ([#23039](https://github.com/go-gitea/gitea/pull/23039))
* MISC
  * Do not prepare oauth2 config if it is not enabled, do not write config in some sub-commands ([#25567](https://github.com/go-gitea/gitea/pull/25567)) ([#25576](https://github.com/go-gitea/gitea/pull/25576))
  * Align language menu icon and fit the footer area ([#25556](https://github.com/go-gitea/gitea/pull/25556)) ([#25563](https://github.com/go-gitea/gitea/pull/25563))
  * Fix sub-command log level ([#25537](https://github.com/go-gitea/gitea/pull/25537)) ([#25553](https://github.com/go-gitea/gitea/pull/25553))
  * Fix admin-dl-horizontal ([#25512](https://github.com/go-gitea/gitea/pull/25512)) ([#25535](https://github.com/go-gitea/gitea/pull/25535))
  * Fix input `line-height` cutting off `g` ([#25334](https://github.com/go-gitea/gitea/pull/25334)) ([#25533](https://github.com/go-gitea/gitea/pull/25533))
  * Clarify the reason why the user can't add a new email if there is a pending activation ([#25509](https://github.com/go-gitea/gitea/pull/25509)) ([#25514](https://github.com/go-gitea/gitea/pull/25514))
  * Improve loadprojects for issue list ([#25468](https://github.com/go-gitea/gitea/pull/25468)) ([#25493](https://github.com/go-gitea/gitea/pull/25493))
  * Use "utf8mb4" for MySQL by default ([#25432](https://github.com/go-gitea/gitea/pull/25432))
  * Show outdated comments in files changed tab ([#24936](https://github.com/go-gitea/gitea/pull/24936)) ([#25428](https://github.com/go-gitea/gitea/pull/25428))
  * Avoid polluting config file when "save" ([#25395](https://github.com/go-gitea/gitea/pull/25395)) ([#25406](https://github.com/go-gitea/gitea/pull/25406))
  * Fix blank dir message when uploading files from web editor ([#25391](https://github.com/go-gitea/gitea/pull/25391)) ([#25400](https://github.com/go-gitea/gitea/pull/25400))
  * Fix issue filters on mobile view ([#25368](https://github.com/go-gitea/gitea/pull/25368)) ([#25371](https://github.com/go-gitea/gitea/pull/25371))
  * Avoid polluting the config ([#25345](https://github.com/go-gitea/gitea/pull/25345)) ([#25354](https://github.com/go-gitea/gitea/pull/25354))
  * Fix action runner last online state on edit page ([#25337](https://github.com/go-gitea/gitea/pull/25337))
  * Remove fomantic inverted variations ([#25286](https://github.com/go-gitea/gitea/pull/25286)) ([#25289](https://github.com/go-gitea/gitea/pull/25289))
  * Show OAuth2 errors to end users ([#25261](https://github.com/go-gitea/gitea/pull/25261)) ([#25271](https://github.com/go-gitea/gitea/pull/25271))
  * Fix profile render when the README.md size is larger than 1024 bytes ([#25270](https://github.com/go-gitea/gitea/pull/25270))
  * Fix strange UI behavior of cancelling dismiss review modal ([#25172](https://github.com/go-gitea/gitea/pull/25172))
  * Update js dependencies ([#25137](https://github.com/go-gitea/gitea/pull/25137)) ([#25151](https://github.com/go-gitea/gitea/pull/25151))
  * Fix swagger documentation for multiple files API endpoint ([#25110](https://github.com/go-gitea/gitea/pull/25110))
  * Fix link to customizing-gitea ([#25056](https://github.com/go-gitea/gitea/pull/25056))
  * Add Link to Stars and Forks Page to Repo List ([#24931](https://github.com/go-gitea/gitea/pull/24931))
  * Improve confusable character string ([#24911](https://github.com/go-gitea/gitea/pull/24911))
  * Fix install page context, make the install page tests really test ([#24858](https://github.com/go-gitea/gitea/pull/24858))
  * Add gitea manager reload-templates command ([#24843](https://github.com/go-gitea/gitea/pull/24843))
  * Create pull request for base after editing file, if not enabled on fork ([#24841](https://github.com/go-gitea/gitea/pull/24841))
  * Fix video width overflow in markdown, and other changes to match img ([#24834](https://github.com/go-gitea/gitea/pull/24834))
  * Support Copy Link for video attachments ([#24833](https://github.com/go-gitea/gitea/pull/24833))
  * Improve accessibility when (re-)viewing files ([#24817](https://github.com/go-gitea/gitea/pull/24817))
  * Update JS dependencies ([#24815](https://github.com/go-gitea/gitea/pull/24815))
  * Bump vm2 from 3.9.17 to 3.9.18 ([#24742](https://github.com/go-gitea/gitea/pull/24742))
  * Add IsErrRepoFilesAlreadyExist check when fork repo ([#24678](https://github.com/go-gitea/gitea/pull/24678))
  * Fix typo in act-runner file ([#24652](https://github.com/go-gitea/gitea/pull/24652))
  * Do not send "registration success email" for external auth sources ([#24632](https://github.com/go-gitea/gitea/pull/24632))
  * Filter get single commit ([#24613](https://github.com/go-gitea/gitea/pull/24613))
  * Make diff view full width again ([#24598](https://github.com/go-gitea/gitea/pull/24598))
  * Add permission check for moving issue action in project view page ([#24589](https://github.com/go-gitea/gitea/pull/24589))
  * Revert "Prevent a user with a different email from accepting the team invite" ([#24531](https://github.com/go-gitea/gitea/pull/24531))
  * Temporarily disable PATs until next release ([#24527](https://github.com/go-gitea/gitea/pull/24527))
  * Clean up polluted styles and remove dead CSS code ([#24497](https://github.com/go-gitea/gitea/pull/24497))
  * Faster git.GetDivergingCommits ([#24482](https://github.com/go-gitea/gitea/pull/24482))
  * Fix test delivery button in repo webhook settings page ([#24478](https://github.com/go-gitea/gitea/pull/24478))
  * Use globally shared HTMLRender ([#24436](https://github.com/go-gitea/gitea/pull/24436))
  * Changelog 1.19.2 ([#24365](https://github.com/go-gitea/gitea/pull/24365)) ([#24403](https://github.com/go-gitea/gitea/pull/24403))
  * Fix layouts of admin table / adapt repo / email test ([#24370](https://github.com/go-gitea/gitea/pull/24370))
  * Gitea Actions add `base_ref`, `head_ref`, `api_url`, `ref_type` fields ([#24356](https://github.com/go-gitea/gitea/pull/24356))
  * Fix 404 error when leaving the last private org team ([#24322](https://github.com/go-gitea/gitea/pull/24322))
  * Improve External Wiki in Repo Header ([#24304](https://github.com/go-gitea/gitea/pull/24304))
  * Updated upgrade script that is informing user that Gitea service has to be running in order to upgrade it ([#24260](https://github.com/go-gitea/gitea/pull/24260))
  * Add run status in action view page ([#24223](https://github.com/go-gitea/gitea/pull/24223))
  * Update JS dependencies ([#24218](https://github.com/go-gitea/gitea/pull/24218))
  * Bump vm2 from 3.9.15 to 3.9.16 ([#24089](https://github.com/go-gitea/gitea/pull/24089))
  * Update github.com/google/go-github to v51 ([#23946](https://github.com/go-gitea/gitea/pull/23946))
  * Show visibility status of email in own profile ([#23900](https://github.com/go-gitea/gitea/pull/23900))
  * Refactor authors dropdown (send get request from frontend to avoid long wait time) ([#23890](https://github.com/go-gitea/gitea/pull/23890))
  * Add self to maintainers ([#23644](https://github.com/go-gitea/gitea/pull/23644))
  * Upgrade to npm lockfile v3 and explicitely set it ([#23561](https://github.com/go-gitea/gitea/pull/23561))
  * Improve indices for `action` table ([#23532](https://github.com/go-gitea/gitea/pull/23532))
  * Update JS dependencies, Require Node.js 16 ([#23528](https://github.com/go-gitea/gitea/pull/23528))
  * Add init file for Ubuntu ([#23362](https://github.com/go-gitea/gitea/pull/23362))
  * Update go.mod dependencies ([#23126](https://github.com/go-gitea/gitea/pull/23126))
  * Use minio/sha256-simd for accelerated SHA256 ([#23052](https://github.com/go-gitea/gitea/pull/23052))
  * More detailed branch delete message ([#22696](https://github.com/go-gitea/gitea/pull/22696))
  * Add tooltips to `Hide comment type` settings where necessary ([#21306](https://github.com/go-gitea/gitea/pull/21306))


## Contributors for this release

* [@21h](https://github.com/21h)
* [@42wim](https://github.com/42wim)
* [@6543](https://github.com/6543)
* [@AkarinLiu](https://github.com/AkarinLiu)
* [@BElluu](https://github.com/BElluu)
* [@Benjamin-Loison](https://github.com/Benjamin-Loison)
* [@BlenderDefender](https://github.com/BlenderDefender)
* [@ChristianSch](https://github.com/ChristianSch)
* [@ChristopherHX](https://github.com/ChristopherHX)
* [@Elara6331](https://github.com/Elara6331)
* [@EternalDeiwos](https://github.com/EternalDeiwos)
* [@GiteaBot](https://github.com/GiteaBot)
* [@Gunzinger](https://github.com/Gunzinger)
* [@HesterG](https://github.com/HesterG)
* [@HorlogeSkynet](https://github.com/HorlogeSkynet)
* [@Infinoid](https://github.com/Infinoid)
* [@InsanusMokrassar](https://github.com/InsanusMokrassar)
* [@JakobDev](https://github.com/JakobDev)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@Kroytz](https://github.com/Kroytz)
* [@LAX18](https://github.com/LAX18)
* [@LeenHawk](https://github.com/LeenHawk)
* [@LukeMauldin](https://github.com/LukeMauldin)
* [@Lycolia](https://github.com/Lycolia)
* [@Mai-Lapyst](https://github.com/Mai-Lapyst)
* [@Makonike](https://github.com/Makonike)
* [@Menelion](https://github.com/Menelion)
* [@SuperSandro2000](https://github.com/SuperSandro2000)
* [@Timmmm](https://github.com/Timmmm)
* [@YT315](https://github.com/YT315)
* [@Zettat123](https://github.com/Zettat123)
* [@a1012112796](https://github.com/a1012112796)
* [@appleboy](https://github.com/appleboy)
* [@atomaka](https://github.com/atomaka)
* [@baez90](https://github.com/baez90)
* [@balki](https://github.com/balki)
* [@bauermarkus](https://github.com/bauermarkus)
* [@bleuthoot-sven](https://github.com/bleuthoot-sven)
* [@bluPhy](https://github.com/bluPhy)
* [@bnabholz](https://github.com/bnabholz)
* [@brechtvl](https://github.com/brechtvl)
* [@bvandevliet](https://github.com/bvandevliet)
* [@contra-bit](https://github.com/contra-bit)
* [@d-lunyov](https://github.com/d-lunyov)
* [@delvh](https://github.com/delvh)
* [@denyskon](https://github.com/denyskon)
* [@dependabot](https://github.com/dependabot)
* [@derelm](https://github.com/derelm)
* [@drsybren](https://github.com/drsybren)
* [@earl-warren](https://github.com/earl-warren)
* [@eeyrjmr](https://github.com/eeyrjmr)
* [@enz1ey](https://github.com/enz1ey)
* [@ericLemanissier](https://github.com/ericLemanissier)
* [@evur](https://github.com/evur)
* [@fnetX](https://github.com/fnetX)
* [@fredrik-eriksson](https://github.com/fredrik-eriksson)
* [@fsologureng](https://github.com/fsologureng)
* [@fuxiaohei](https://github.com/fuxiaohei)
* [@garymoon](https://github.com/garymoon)
* [@ghost](https://github.com/ghost)
* [@greut](https://github.com/greut)
* [@h3xx](https://github.com/h3xx)
* [@harryzcy](https://github.com/harryzcy)
* [@jackHay22](https://github.com/jackHay22)
* [@jakob30061](https://github.com/jakob30061)
* [@jayczech23](https://github.com/jayczech23)
* [@jim-kirisame](https://github.com/jim-kirisame)
* [@jladbrook](https://github.com/jladbrook)
* [@jolheiser](https://github.com/jolheiser)
* [@jonkeim](https://github.com/jonkeim)
* [@jpraet](https://github.com/jpraet)
* [@jpts](https://github.com/jpts)
* [@jtran](https://github.com/jtran)
* [@kasuganosoras](https://github.com/kasuganosoras)
* [@kbolashev](https://github.com/kbolashev)
* [@kdumontnu](https://github.com/kdumontnu)
* [@kernie](https://github.com/kernie)
* [@kerwin612](https://github.com/kerwin612)
* [@kodermho](https://github.com/kodermho)
* [@kousu](https://github.com/kousu)
* [@krzysztofjeziorny](https://github.com/krzysztofjeziorny)
* [@lafriks](https://github.com/lafriks)
* [@lassebm](https://github.com/lassebm)
* [@lofidevops](https://github.com/lofidevops)
* [@lonix1](https://github.com/lonix1)
* [@lunny](https://github.com/lunny)
* [@marcospringer](https://github.com/marcospringer)
* [@mateusza](https://github.com/mateusza)
* [@mattwalo32](https://github.com/mattwalo32)
* [@mei-rune](https://github.com/mei-rune)
* [@metalmatze](https://github.com/metalmatze)
* [@mmarif4u](https://github.com/mmarif4u)
* [@n0toose](https://github.com/n0toose)
* [@oliverpool](https://github.com/oliverpool)
* [@omenos](https://github.com/omenos)
* [@pat-s](https://github.com/pat-s)
* [@philip-peterson](https://github.com/philip-peterson)
* [@puni9869](https://github.com/puni9869)
* [@qwerty287](https://github.com/qwerty287)
* [@riastradh](https://github.com/riastradh)
* [@roy9495](https://github.com/roy9495)
* [@sandyydk](https://github.com/sandyydk)
* [@schorsch13](https://github.com/schorsch13)
* [@sebastian-sauer](https://github.com/sebastian-sauer)
* [@sh7dm](https://github.com/sh7dm)
* [@sillyguodong](https://github.com/sillyguodong)
* [@silverwind](https://github.com/silverwind)
* [@sonjek](https://github.com/sonjek)
* [@steverusso](https://github.com/steverusso)
* [@sven-eliasen](https://github.com/sven-eliasen)
* [@team-epk](https://github.com/team-epk)
* [@teauxfu](https://github.com/teauxfu)
* [@techknowlogick](https://github.com/techknowlogick)
* [@tyroneyeh](https://github.com/tyroneyeh)
* [@uvulpos](https://github.com/uvulpos)
* [@viletyy](https://github.com/viletyy)
* [@wiktor-k](https://github.com/wiktor-k)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@xen0n](https://github.com/xen0n)
* [@yamadayutaka](https://github.com/yamadayutaka)
* [@yardenshoham](https://github.com/yardenshoham)
* [@yogo1212](https://github.com/yogo1212)
* [@yp05327](https://github.com/yp05327)
* [@yusifeng](https://github.com/yusifeng)
* [@zeripath](https://github.com/zeripath)

