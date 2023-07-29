---
date: 2022-07-31T12:00:00+02:00
authors: 
  - "noerw"
  - "Gusted"
  - "delvh"
title: "Gitea 1.17.0 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.17.0, a relatively big release with a lot of new and exciting features and plenty breaking changes.
We highly encourage users to update to this version after carefully reading about the breaking changes for some important bug-fixes.

[645](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.17.0+is%3Amerged) Pull Requests were merged to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.17.0/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).
  
We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

Read on to learn about major new features and breaking changes.

<!-- this is the indicator for the static site generator for where to stop the preview in the post list -->
<!--more-->

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

---

## Major New Features

### :rocket: Package Registry ([#16510](https://github.com/go-gitea/gitea/pull/16510))

Thanks to [@KN4CK3R](https://github.com/KN4CK3R), Gitea now includes a package registry for various package managers (Composer, Conan, Generic, Helm, Maven, npm, NuGet, OCI Containers (Docker), PyPI and RubyGems).
This will be very useful for teams that want to deploy their software from their own infrastructure.

To start using it, head over to the extensive [documentation for this feature](https://docs.gitea.io/en-us/packages/overview/).

### :rocket: Cherry-pick, revert, apply-patch from the Web UI ([#17902](https://github.com/go-gitea/gitea/pull/17902))

Thanks to [@zeripath](https://github.com/zeripath), you no longer need to switch to your local checkout to do common git operations like `cherry-pick`, `revert`, `apply-patch`.
Instead, Gitea now provides a handy UI for these tasks!

| | |
|-|-|
| ![screenshot 1](/demos/17902/2.png) | ![screenshot 2](/demos/17902/1.png) |

### :rocket: Better Mobile Experience ([#19546](https://github.com/go-gitea/gitea/pull/19546) et al.)

[@Gusted](https://github.com/Gusted) worked to significantly improve the mobile experience of Gitea:
A lot of the frontend has been refactored without making major changes to the current UI.

It now has a more responsive design, hence making browsing Gitea on mobile phones a more pleasant experience!

Check out the linked Pull Request for a demo & comparison of the updated layouts.

### :rocket: Improved file navigation ([#19007](https://github.com/go-gitea/gitea/pull/19007) & [#15028](https://github.com/go-gitea/gitea/pull/15028))

Navigating many files is often a struggle.
This release features some workflow improvements you may already know from other forges:

- During PR review, you can now mark changed files as reviewed and be informed about later changes to them ([#19007](https://github.com/go-gitea/gitea/pull/19007)).
  You can watch a demo in the linked Pull Request

- [@rogerluo410](https://github.com/rogerluo410) and [@wxiaoguang](https://github.com/wxiaoguang) implemented a *Go to file* feature for the repo code listing ([#15028](https://github.com/go-gitea/gitea/pull/15028))
  ![go to file demo](/demos/15028/1.gif)

### :rocket: More RSS feeds ([#17714](https://github.com/go-gitea/gitea/pull/17714) & [#19055](https://github.com/go-gitea/gitea/pull/19055))

RSS-users will appreciate the new feeds for organizations and repositories that were added by [@6543](https://github.com/6543).

### :rocket: Auto merge pull requests when all checks succeeded ([#19648](https://github.com/go-gitea/gitea/pull/19648) & [#9307](https://github.com/go-gitea/gitea/pull/9307))

Thanks to [@6543](https://github.com/6543) & [@kolaente](https://github.com/kolaente), Gitea now allows you to merge a Pull request when all required checks have passed, either via the WebUI or via the API.
Note that this feature will only be enabled when the target branch has branch protection.

| | |
|-|-|
| ![screenshot 1](/demos/19648/1.png) | ![screenshot 2](/demos/19648/2.png) |

### :rocket: Allow edits by maintainers ([#18002](https://github.com/go-gitea/gitea/pull/18002))

Thanks to [@qwerty287](https://github.com/qwerty287), Gitea now allows you to decide if maintainers of the upstream 
repository can push to the head branch of your PR when creating a Pull Request from a fork.
This enables a workflow similar to how Gitea itself is maintained currently and can simplify the PR workflow for open source development.

### :rocket: Permanent issue (and PR) deletion ([#19032](https://github.com/go-gitea/gitea/pull/19032))

Thanks to [@fnetX](https://codeberg.org/fnetX), to combat spam and confidential information, issues (and subsequently PRs) can now be permanently deleted.  
A repository admin or instance admin can find the delete button at the bottom of the sidebar of the issue or pull reuqest.

### :rocket: Generate table of contents in wikis ([#19873](https://github.com/go-gitea/gitea/pull/19873))

Thanks to [@zeripath](https://github.com/zeripath), wiki pages now show their logical structure automatically in the sidebar. This removes the need to manually maintain a ToC and helps you to skim for the most important sections.

### :rocket: Customizing the default commit messages ([#18177](https://github.com/go-gitea/gitea/pull/18177))

Thanks to [@lunny](https://github.com/lunny), you can now set the default merge message used for merging PRs.  
The customization files must be in `.gitea/default_merge_message/<uppercase_merge_style>_TEMPLATE.md`.  
More information on the file names and possible variables can be found [here](https://docs.gitea.io/en-us/issue-pull-request-templates/).

### :rocket: Keeping the original ID of issues ([#18446](https://github.com/go-gitea/gitea/pull/18446))

When you migrate a repository including its issues, their original ID will be persisted.
This is only the first step to allow complete mirroring of issues and Pull Requests from other (Gitea, GitHub, GitLab, ...) instances, with more to come in later releases.

### :rocket: Federation Progress ([#19561](https://github.com/go-gitea/gitea/pull/19561) & [#19462](https://github.com/go-gitea/gitea/pull/19462))

Gitea 1.17 lays the foundation to allow instances to communicate with each other in the future:  
A new API path to allow basic communication of statistics between each other was added ([#19561](https://github.com/go-gitea/gitea/pull/19561)).  
Additionally, with [#19462](https://github.com/go-gitea/gitea/pull/19462), basic global data about users such as the preferred avatar can now be communicated.  

Federation is under active development, and it will be interesting to see what will be achieved in the next few releases.  
Stay tuned for what is yet to come!

---

## Breaking Changes

### :exclamation: Internal Gitconfig ([#19732](https://github.com/go-gitea/gitea/pull/19732))

Previously, Gitea used the users gitconfig (`$HOME/.gitconfig`) in addition to the system gitconfig (`/etc/gitconfig`).  
Now, Gitea uses the system gitconfig (`/etc/gitconfig`) combined with an internal gitconfig located in `{[git].HOME_PATH}/.gitconfig`.
If you customized your user gitconfig for Gitea, you should add these customizations to one of the available gitconfigs. Additional git-relevant files that are normally in your user home directory, like `$HOME/.gnupg`, should be moved/ copied to `{[git].HOME_PATH}/` as well.

### :exclamation: Email address validation restricted ([#17688](https://github.com/go-gitea/gitea/pull/17688))

With this release, Gitea restricts what is seen as a valid email:  
Emails must only contain characters in ``a-zA-Z0-9.!#$%&'*+-/=?^_{|}`~``. Additionally, the first letter must be in `a-zA-Z0-9`, and after the `@`, only characters in `a-zA-Z0-9.` can follow.

### :exclamation: Renamed configuration options for ACME / Let's Encrypt ([#18340](https://github.com/go-gitea/gitea/pull/18340))

Configuration settings have been renamed from `LETSENCRYPT` to `ACME`. The old settings are deprecated and will be removed in 1.18, you should migrate now.

- `ENABLE_LETSENCRYPT` → `ENABLE_ACME`
- `LETSENCRYPT_URL` → `ACME_URL`
- `LETSENCRYPT_ACCEPTTOS` → `ACME_ACCEPTTOS`
- `LETSENCRYPT_DIRECTORY` → `ACME_DIRECTORY`
- `LETSENCRYPT_EMAIL` → `ACME_EMAIL`

### :exclamation: New logger format and configuration ([#17308](https://github.com/go-gitea/gitea/pull/17308))

This PR substantially changes the logging format of the router logger.  
If you use this logging for monitoring (e.g. fail2ban) you will need to update this to match the new format.  
Refer to the documentation on the [router logger](https://docs.gitea.io/en-us/logging-configuration/#the-router-logger) for new configuration options.
<!-- FIXME: what exactly is the new format?! -->

### :exclamation: `main` as default branch ([#19354](https://github.com/go-gitea/gitea/pull/19354))

The default value of the setting `repository.DEFAULT_BRANCH` was switched from `master` to `main`.  
If you want to continue using `master` as default branch name, set this setting.  
This change is especially relevant for third party tools that assume the default branch of a repository.

### :exclamation: Change initial trust model to `committer` ([#18335](https://github.com/go-gitea/gitea/pull/18335))

Previously, Gitea would by default use the `collaborator` trust model.  
This means only verified commits of collaborators can be trusted.  
This was quite an aggressive trust model, and now it has changed to match GitHub's behavior of trusting the commiter.
This means verified commits in a repository from non-collaborators won't be marked as unverified.

If you rely on the old behavior, you must set `DEFAULT_TRUST_MODEL` to `collaborator`.

### :exclamation: Require Git >= 2.0 ([#19577](https://github.com/go-gitea/gitea/pull/19577))
The minimal required Git version has been raised to **2.0**.  
Versions below that are now unsupported and will prevent the application from starting.  
In general, it is recommended to stay up-to-date with your Git version as some Gitea features or optimizations can only be used once they are available in Git.

### :exclamation: Require docker version >= 20.10.6 ([#18050](https://github.com/go-gitea/gitea/pull/18050))

This is due to an issue with libc of the new base image alpine 3.15.

### :exclamation: Require Go >= 1.18 to compile ([#19918](https://github.com/go-gitea/gitea/pull/19918),  [#19099](https://github.com/go-gitea/gitea/pull/19099))

The minimum version of Go needed to compile Gitea has been increased to **1.18**.

### :exclamation: Changed handling of custom logo ([#18542](https://github.com/go-gitea/gitea/pull/18542))

It is now not only possible to set a custom logo, but also a custom favicon.
If you are currently using a custom logo, you need to re-run the steps described [here](https://github.com/go-gitea/gitea/blob/main/docs/content/doc/advanced/customizing-gitea.en-us.md#changing-the-logo).

### :exclamation: `RequireHighlightJS` removed from templates ([#19615](https://github.com/go-gitea/gitea/pull/19615))

If you use custom templates, check that they do not use `RequireHighlightJS` anymore as this was outdated already and has now been removed.

### :exclamation: Reserved usernames updated ([#18438](https://github.com/go-gitea/gitea/pull/18438))

The following usernames are now newly reserved: `avatar`, `ssh_info`, and `swagger_v1.json`.  
The following usernames are **no longer** reserved: `help`, `install`, `less`, `plugins`, `stars`, and `template`.

If you want to check if you're affected, please run the following Gitea doctor command:
```
gitea doctor --run check-user-names
```
Note that this command is only available after upgrading to 1.17.1.

### :exclamation: Deprecated SSH ciphers removed from default setting ([#18697](https://github.com/go-gitea/gitea/pull/18697))

This only affects Gitea instances that have enabled the internal SSH server.  
Previously, Gitea allowed unsecured algorithms to be used for an SSH connection.  
Older versions of OpenSSH might not be able to connect to Gitea anymore.

### :exclamation: Display messages for users if the ROOT_URL is wrong, show JavaScript errors ([#18971](https://github.com/go-gitea/gitea/pull/18971))

<!-- FIXME: is this really a breaking change? -->
Previously, Gitea would allow an incorrect `ROOT_URL` to be set in the settings. This caused unexpected issues when people don't use that URL to visit Gitea.  
Therefore, Gitea will now show an error in the UI when this is the case.  
Please check if your `ROOT_URL` is set correctly and avoid accessing the instance using other URLs to avoid the error message.

### :exclamation: `/api/v1/notifications` does not include repo permissions ([#19761](https://github.com/go-gitea/gitea/pull/19761))

Previously, `/api/v1/notifications` returned `repository.permissions` but the permissions were calculated incorrectly.  
Due to this and the fact that there exists another route to get the repo permissions, this field will always be `null` from now on.

### :exclamation: HTTP status codes updated: `302 → 307` and `301 → 308` ([#18063](https://github.com/go-gitea/gitea/pull/18063))

Previously, Gitea often returned the incorrect status codes `Found` (302) and `Moved Permanently` (301).  
All occurrences of such status code were now changed to `Temporary Redirect` (307) and `Permanent Redirect` (308) respectively.

### :exclamation: No more admin notice about successful cron tasks ([#19221](https://github.com/go-gitea/gitea/pull/19221))

Successful cron task no longer emit a notification by default.  
This breaks `NO_SUCCESS_NOTICE` settings.  
If you want notices on success, you must set `NOTICE_ON_SUCCESS=true`.

## Changelog

## [1.17.0](https://github.com/go-gitea/gitea/releases/tag/v1.17.0) - 2022-07-30

<!-- Changelog Details -->

* BREAKING
  * Require go1.18 for Gitea 1.17 ([#19918](https://github.com/go-gitea/gitea/pull/19918))
  * Make AppDataPath absolute against the AppWorkPath if it is not ([#19815](https://github.com/go-gitea/gitea/pull/19815))
  * Nuke the incorrect permission report on /api/v1/notifications ([#19761](https://github.com/go-gitea/gitea/pull/19761))
  * Refactor git module, make Gitea use internal git config ([#19732](https://github.com/go-gitea/gitea/pull/19732))
  * Remove `RequireHighlightJS` field, update plantuml example. ([#19615](https://github.com/go-gitea/gitea/pull/19615))
  * Increase minimal required git version to 2.0 ([#19577](https://github.com/go-gitea/gitea/pull/19577))
  * Add a directory prefix `gitea-src-VERSION` to release-tar-file ([#19396](https://github.com/go-gitea/gitea/pull/19396))
  * Use "main" as default branch name ([#19354](https://github.com/go-gitea/gitea/pull/19354))
  * Make cron task no notice on success ([#19221](https://github.com/go-gitea/gitea/pull/19221))
  * Add pam account authorization check ([#19040](https://github.com/go-gitea/gitea/pull/19040))
  * Show messages for users if the ROOT_URL is wrong, show JavaScript errors ([#18971](https://github.com/go-gitea/gitea/pull/18971))
  * Refactor mirror code & fix StartToMirror ([#18904](https://github.com/go-gitea/gitea/pull/18904))
  * Remove deprecated SSH ciphers from default ([#18697](https://github.com/go-gitea/gitea/pull/18697))
  * Add the possibility to allow the user to have a favicon which differs from the main logo ([#18542](https://github.com/go-gitea/gitea/pull/18542))
  * Update reserved usernames list ([#18438](https://github.com/go-gitea/gitea/pull/18438))
  * Support custom ACME provider ([#18340](https://github.com/go-gitea/gitea/pull/18340))
  * Change initial TrustModel to committer ([#18335](https://github.com/go-gitea/gitea/pull/18335))
  * Update HTTP status codes ([#18063](https://github.com/go-gitea/gitea/pull/18063))
  * Upgrade Alpine from 3.13 to 3.15 ([#18050](https://github.com/go-gitea/gitea/pull/18050))
  * Restrict email address validation ([#17688](https://github.com/go-gitea/gitea/pull/17688)) 
  * Refactor Router Logger ([#17308](https://github.com/go-gitea/gitea/pull/17308))
* SECURITY
  * Use git.HOME_PATH for Git HOME directory ([#20114](https://github.com/go-gitea/gitea/pull/20114)) ([#20293](https://github.com/go-gitea/gitea/pull/20293))
  * Add write check for creating Commit Statuses ([#20332](https://github.com/go-gitea/gitea/pull/20332)) ([#20333](https://github.com/go-gitea/gitea/pull/20333))
  * Remove deprecated SSH ciphers from default ([#18697](https://github.com/go-gitea/gitea/pull/18697))
* FEDERATION
  * Return statistic information for nodeinfo ([#19561](https://github.com/go-gitea/gitea/pull/19561))
  * Add Webfinger endpoint ([#19462](https://github.com/go-gitea/gitea/pull/19462))
  * Store the foreign ID of issues during migration ([#18446](https://github.com/go-gitea/gitea/pull/18446))
* FEATURES
  * Automatically render wiki TOC ([#19873](https://github.com/go-gitea/gitea/pull/19873))
  * Adding button to link accounts from user settings ([#19792](https://github.com/go-gitea/gitea/pull/19792))
  * Allow set default merge style while creating repo ([#19751](https://github.com/go-gitea/gitea/pull/19751))
  * Auto merge pull requests when all checks succeeded ([#9307]((https://github.com/go-gitea/gitea/pull/9307)) & [#19648](https://github.com/go-gitea/gitea/pull/19648))
  * Improve reviewing PR UX ([#19612](https://github.com/go-gitea/gitea/pull/19612))
  * Add support for rendering console output with colors ([#19497](https://github.com/go-gitea/gitea/pull/19497))
  * Add Helm Chart registry ([#19406](https://github.com/go-gitea/gitea/pull/19406))
  * Add Goroutine stack inspector to admin/monitor ([#19207](https://github.com/go-gitea/gitea/pull/19207))
  * RSS/Atom support for Orgs & Repos ([#17714](https://github.com/go-gitea/gitea/pull/17714) & [#19055](https://github.com/go-gitea/gitea/pull/19055))
  * Add button for issue deletion ([#19032](https://github.com/go-gitea/gitea/pull/19032))
  * Allow to mark files in a PR as viewed ([#19007](https://github.com/go-gitea/gitea/pull/19007))
  * Add Index to comment for migrations and mirroring ([#18806](https://github.com/go-gitea/gitea/pull/18806))
  * Add health check endpoint ([#18465](https://github.com/go-gitea/gitea/pull/18465))
  * Add packagist webhook ([#18224](https://github.com/go-gitea/gitea/pull/18224))
  * Add "Allow edits from maintainer" feature ([#18002](https://github.com/go-gitea/gitea/pull/18002))
  * Add apply-patch, basic revert and cherry-pick functionality ([#17902](https://github.com/go-gitea/gitea/pull/17902))
  * Add Package Registry ([#16510](https://github.com/go-gitea/gitea/pull/16510))
  * Add LDAP group sync to Teams ([#16299](https://github.com/go-gitea/gitea/pull/16299))
  * Pause queues ([#15928](https://github.com/go-gitea/gitea/pull/15928))
  * Added auto-save whitespace behavior if it changed manually ([#15566](https://github.com/go-gitea/gitea/pull/15566))
  * Find files in repo ([#15028](https://github.com/go-gitea/gitea/pull/15028))
  * Provide configuration to allow camo-media proxying ([#12802](https://github.com/go-gitea/gitea/pull/12802))
  * Allow custom default merge message with `.gitea/default_merge_message/<merge_style>_TEMPLATE.md` ([#18177](https://github.com/go-gitea/gitea/pull/18177))
* API
  * Add endpoint to serve blob or LFS file content ([#19689](https://github.com/go-gitea/gitea/pull/19689))
  * Add endpoint to check if team has repo access ([#19540](https://github.com/go-gitea/gitea/pull/19540))
  * More commit info ([#19252](https://github.com/go-gitea/gitea/pull/19252))
  * Allow to create file on empty repo ([#19224](https://github.com/go-gitea/gitea/pull/19224))
  * Allow removing issues ([#18879](https://github.com/go-gitea/gitea/pull/18879))
  * Add endpoint to query collaborators permission for a repository ([#18761](https://github.com/go-gitea/gitea/pull/18761))
  * Return primary language and repository language stats API URL ([#18396](https://github.com/go-gitea/gitea/pull/18396))
  * Implement http signatures support for the API ([#17565](https://github.com/go-gitea/gitea/pull/17565))
* ENHANCEMENTS
  * Make notification bell more prominent on mobile ([#20108](https://github.com/go-gitea/gitea/pull/20108), [#20236](https://github.com/go-gitea/gitea/pull/20236), [#20251](https://github.com/go-gitea/gitea/pull/20251)) ([#20269](https://github.com/go-gitea/gitea/pull/20269))
  * Adjust max-widths for the repository file table ([#20243](https://github.com/go-gitea/gitea/pull/20243)) ([#20247](https://github.com/go-gitea/gitea/pull/20247))
  * Display full name ([#20171](https://github.com/go-gitea/gitea/pull/20171)) ([#20246](https://github.com/go-gitea/gitea/pull/20246))
  * Add dbconsistency checks for Stopwatches ([#20010](https://github.com/go-gitea/gitea/pull/20010))
  * Add fetch.writeCommitGraph to gitconfig ([#20006](https://github.com/go-gitea/gitea/pull/20006))
  * Add fgprof pprof profiler ([#20005](https://github.com/go-gitea/gitea/pull/20005))
  * Move agit dependency ([#19998](https://github.com/go-gitea/gitea/pull/19998))
  * Empty log queue on flush and close ([#19994](https://github.com/go-gitea/gitea/pull/19994))
  * Remove tab/TabName usage where it's not needed ([#19973](https://github.com/go-gitea/gitea/pull/19973))
  * Improve file header on mobile ([#19945](https://github.com/go-gitea/gitea/pull/19945))
  * Move issues related files into models/issues ([#19931](https://github.com/go-gitea/gitea/pull/19931))
  * Add breaking email restrictions checker in doctor ([#19903](https://github.com/go-gitea/gitea/pull/19903))
  * Improve UX on modal for deleting an access token ([#19894](https://github.com/go-gitea/gitea/pull/19894))
  * Add alt text to logo ([#19892](https://github.com/go-gitea/gitea/pull/19892))
  * Move some code into models/git ([#19879](https://github.com/go-gitea/gitea/pull/19879))
  * Remove customized (unmaintained) dropdown, improve aria a11y for dropdown ([#19861](https://github.com/go-gitea/gitea/pull/19861))
  * Make user profile image show full image on mobile ([#19840](https://github.com/go-gitea/gitea/pull/19840))
  * Replace blue button and label classes with primary ([#19763](https://github.com/go-gitea/gitea/pull/19763))
  * Remove fomantic progress module ([#19760](https://github.com/go-gitea/gitea/pull/19760))
  * Allows repo search to match against "owner/repo" pattern strings ([#19754](https://github.com/go-gitea/gitea/pull/19754))
  * Move org functions ([#19753](https://github.com/go-gitea/gitea/pull/19753))
  * Move almost all functions' parameter db.Engine to context.Context ([#19748](https://github.com/go-gitea/gitea/pull/19748))
  * Show source/target branches on PR's list ([#19747](https://github.com/go-gitea/gitea/pull/19747))
  * Use http.StatusTemporaryRedirect(307) when serve avatar directly ([#19739](https://github.com/go-gitea/gitea/pull/19739))
  * Add doctor orphan check for orphaned pull requests without an existing base repo  ([#19731](https://github.com/go-gitea/gitea/pull/19731))
  * Make Ctrl+Enter (quick submit) work for issue comment and wiki editor ([#19729](https://github.com/go-gitea/gitea/pull/19729))
  * Update go-chi/cache to utilize Ping() ([#19719](https://github.com/go-gitea/gitea/pull/19719))
  * Improve commit list/view on mobile ([#19712](https://github.com/go-gitea/gitea/pull/19712))
  * Move some repository related code into sub package ([#19711](https://github.com/go-gitea/gitea/pull/19711))
  * Use a better OlderThan for DeleteInactiveUsers ([#19693](https://github.com/go-gitea/gitea/pull/19693))
  * Introduce eslint-plugin-jquery ([#19690](https://github.com/go-gitea/gitea/pull/19690))
  * Tidy up `<head>` template ([#19678](https://github.com/go-gitea/gitea/pull/19678))
  * Calculate filename hash only once ([#19654](https://github.com/go-gitea/gitea/pull/19654))
  * Simplify `IsVendor` ([#19626](https://github.com/go-gitea/gitea/pull/19626))
  * Add "Reference" section to Issue view sidebar ([#19609](https://github.com/go-gitea/gitea/pull/19609))
  * Only set CanColorStdout / CanColorStderr to true if the stdout/stderr is a terminal ([#19581](https://github.com/go-gitea/gitea/pull/19581))
  * Use for a repo action one database transaction ([#19576](https://github.com/go-gitea/gitea/pull/19576))
  * Simplify loops to copy ([#19569](https://github.com/go-gitea/gitea/pull/19569))
  * Added X-Mailer header to outgoing emails ([#19562](https://github.com/go-gitea/gitea/pull/19562))
  * use middleware to open gitRepo ([#19559](https://github.com/go-gitea/gitea/pull/19559))
  * Mute link in diff header ([#19556](https://github.com/go-gitea/gitea/pull/19556))
  * Improve UI on mobile ([#19546](https://github.com/go-gitea/gitea/pull/19546))
  * Fix Pull Request comment filename word breaks ([#19535](https://github.com/go-gitea/gitea/pull/19535))
  * Permalink files In PR diff ([#19534](https://github.com/go-gitea/gitea/pull/19534))
  * PullService lock via pullID ([#19520](https://github.com/go-gitea/gitea/pull/19520))
  * Make repository file list useable on mobile ([#19515](https://github.com/go-gitea/gitea/pull/19515))
  * more context for models  ([#19511](https://github.com/go-gitea/gitea/pull/19511))
  * Refactor readme file renderer ([#19502](https://github.com/go-gitea/gitea/pull/19502))
  * By default force vertical tabs on mobile ([#19486](https://github.com/go-gitea/gitea/pull/19486))
  * Github style following followers ([#19482](https://github.com/go-gitea/gitea/pull/19482))
  * Improve action table indices ([#19472](https://github.com/go-gitea/gitea/pull/19472))
  * Use horizontal tabs for repo header on mobile ([#19468](https://github.com/go-gitea/gitea/pull/19468))
  * pass gitRepo down since its used for main repo and wiki ([#19461](https://github.com/go-gitea/gitea/pull/19461))
  * Admin should not delete himself ([#19423](https://github.com/go-gitea/gitea/pull/19423))
  * Use queue instead of memory queue in webhook send service ([#19390](https://github.com/go-gitea/gitea/pull/19390))
  * Simplify the code to get issue count ([#19380](https://github.com/go-gitea/gitea/pull/19380))
  * Add commit status popup to issuelist ([#19375](https://github.com/go-gitea/gitea/pull/19375))
  * Add RSS Feed buttons to Repo, User and Org pages ([#19370](https://github.com/go-gitea/gitea/pull/19370))
  * Add logic to switch between source/rendered on Markdown ([#19356](https://github.com/go-gitea/gitea/pull/19356))
  * Move some helper files out of models ([#19355](https://github.com/go-gitea/gitea/pull/19355))
  * Move access and repo permission to models/perm/access ([#19350](https://github.com/go-gitea/gitea/pull/19350))
  * Disallow selecting the text of buttons ([#19330](https://github.com/go-gitea/gitea/pull/19330))
  * Allow custom redirect for landing page ([#19324](https://github.com/go-gitea/gitea/pull/19324))
  * Remove dependent on session auth for api/v1 routers ([#19321](https://github.com/go-gitea/gitea/pull/19321))
  * Never use /api/v1 from Gitea UI Pages ([#19318](https://github.com/go-gitea/gitea/pull/19318))
  * Remove legacy unmaintained packages, refactor to support change default locale ([#19308](https://github.com/go-gitea/gitea/pull/19308))
  * Move milestone to models/issues/ ([#19278](https://github.com/go-gitea/gitea/pull/19278))
  * Configure OpenSSH log level via Environment in Docker ([#19274](https://github.com/go-gitea/gitea/pull/19274))
  * Move reaction to models/issues/ ([#19264](https://github.com/go-gitea/gitea/pull/19264))
  * Make git.OpenRepository accept Context ([#19260](https://github.com/go-gitea/gitea/pull/19260))
  * Move some issue methods as functions ([#19255](https://github.com/go-gitea/gitea/pull/19255))
  * Show last cron messages on monitor page ([#19223](https://github.com/go-gitea/gitea/pull/19223))
  * New cron task: delete old system notices ([#19219](https://github.com/go-gitea/gitea/pull/19219))
  * Add Redis Sentinel Authentication Support ([#19213](https://github.com/go-gitea/gitea/pull/19213))
  * Add auto logging of goroutine pid label ([#19212](https://github.com/go-gitea/gitea/pull/19212))
  * Set OpenGraph title to DisplayName in profile pages  ([#19206](https://github.com/go-gitea/gitea/pull/19206))
  * Add pprof labels in processes and for lifecycles ([#19202](https://github.com/go-gitea/gitea/pull/19202))
  * Let web and API routes have different auth methods group ([#19168](https://github.com/go-gitea/gitea/pull/19168))
  * Move init repository related functions to modules ([#19159](https://github.com/go-gitea/gitea/pull/19159))
  * Feeds: render markdown to html ([#19058](https://github.com/go-gitea/gitea/pull/19058))
  * Allow users to self-request a PR review ([#19030](https://github.com/go-gitea/gitea/pull/19030))
  * Allow render HTML with css/js external links ([#19017](https://github.com/go-gitea/gitea/pull/19017))
  * Fix script compatiable with OpenWrt ([#19000](https://github.com/go-gitea/gitea/pull/19000))
  * Support ignore all santize for external renderer ([#18984](https://github.com/go-gitea/gitea/pull/18984))
  * Add note to GPG key response if user has no keys ([#18961](https://github.com/go-gitea/gitea/pull/18961))
  * Improve Stopwatch behavior ([#18930](https://github.com/go-gitea/gitea/pull/18930))
  * Improve mirror iterator ([#18928](https://github.com/go-gitea/gitea/pull/18928))
  * Uncapitalize errors ([#18915](https://github.com/go-gitea/gitea/pull/18915))
  * Prevent Stats Indexer reporting error if repo dir missing ([#18870](https://github.com/go-gitea/gitea/pull/18870))
  * Refactor SecToTime() function ([#18863](https://github.com/go-gitea/gitea/pull/18863))
  * Replace deprecated String.prototype.substr() with String.prototype.slice() ([#18796](https://github.com/go-gitea/gitea/pull/18796))
  * Move deletebeans into models/db ([#18781](https://github.com/go-gitea/gitea/pull/18781))
  * Fix display time of milestones ([#18753](https://github.com/go-gitea/gitea/pull/18753))
  * Add config option to disable "Update branch by rebase" ([#18745](https://github.com/go-gitea/gitea/pull/18745))
  * Display template path of current page in dev mode ([#18717](https://github.com/go-gitea/gitea/pull/18717))
  * Add number in queue status to monitor page ([#18712](https://github.com/go-gitea/gitea/pull/18712))
  * Change git.cmd to RunWithContext ([#18693](https://github.com/go-gitea/gitea/pull/18693))
  * Refactor i18n, use Locale to provide i18n/translation related functions ([#18648](https://github.com/go-gitea/gitea/pull/18648))
  * Delete old git.NewCommand() and use it as git.NewCommandContext() ([#18552](https://github.com/go-gitea/gitea/pull/18552))
  * Move organization related structs into sub package ([#18518](https://github.com/go-gitea/gitea/pull/18518))
  * Warn at startup if the provided `SCRIPT_TYPE` is not on the PATH ([#18467](https://github.com/go-gitea/gitea/pull/18467))
  * Use `CryptoRandomBytes` instead of `CryptoRandomString` ([#18439](https://github.com/go-gitea/gitea/pull/18439))
  * Use explicit jQuery import, remove unused eslint globals ([#18435](https://github.com/go-gitea/gitea/pull/18435))
  * Allow to filter repositories by language in explore, user and organization repositories lists ([#18430](https://github.com/go-gitea/gitea/pull/18430))
  * Use base32 for 2FA scratch token ([#18384](https://github.com/go-gitea/gitea/pull/18384))
  * Unexport var git.GlobalCommandArgs ([#18376](https://github.com/go-gitea/gitea/pull/18376))
  * Don't underline commit status icon on hover ([#18372](https://github.com/go-gitea/gitea/pull/18372))
  * Always use git command but not os.Command ([#18363](https://github.com/go-gitea/gitea/pull/18363))
  * Switch to non-deprecation setting ([#18358](https://github.com/go-gitea/gitea/pull/18358))
  * Set the LastModified header for raw files ([#18356](https://github.com/go-gitea/gitea/pull/18356))
  * Refactor jwt.StandardClaims to RegisteredClaims ([#18344](https://github.com/go-gitea/gitea/pull/18344))
  * Enable deprecation error for v1.17.0 ([#18341](https://github.com/go-gitea/gitea/pull/18341))
  * Refactor httplib ([#18338](https://github.com/go-gitea/gitea/pull/18338))
  * Limit max-height of CodeMirror editors for issue comment and wiki ([#18271](https://github.com/go-gitea/gitea/pull/18271))
  * Validate migration files ([#18203](https://github.com/go-gitea/gitea/pull/18203))
  * Format with gofumpt ([#18184](https://github.com/go-gitea/gitea/pull/18184))
  * Prettify number of issues ([#17760](https://github.com/go-gitea/gitea/pull/17760))
  * Add a "admin user generate-access-token" subcommand ([#17722](https://github.com/go-gitea/gitea/pull/17722))
  * Custom regexp external issues ([#17624](https://github.com/go-gitea/gitea/pull/17624))
  * Add smtp password to install page ([#17564](https://github.com/go-gitea/gitea/pull/17564))
  * Add config options to hide issue events ([#17414](https://github.com/go-gitea/gitea/pull/17414))
  * Prevent double click new issue/pull/comment button ([#16157](https://github.com/go-gitea/gitea/pull/16157))
  * Show issue assignee on project board ([#15232](https://github.com/go-gitea/gitea/pull/15232))
* BUGFIXES
  * WebAuthn CredentialID field needs to be increased in size ([#20530](https://github.com/go-gitea/gitea/pull/20530)) ([#20555](https://github.com/go-gitea/gitea/pull/20555))
  * Ensure that all unmerged files are merged when conflict checking ([#20528](https://github.com/go-gitea/gitea/pull/20528)) ([#20536](https://github.com/go-gitea/gitea/pull/20536))
  * Stop logging EOFs and exit(1)s in ssh handler ([#20476](https://github.com/go-gitea/gitea/pull/20476)) ([#20529](https://github.com/go-gitea/gitea/pull/20529))
  * Add labels to two buttons that were missing them ([#20419](https://github.com/go-gitea/gitea/pull/20419)) ([#20524](https://github.com/go-gitea/gitea/pull/20524))
  * Fix ROOT_URL detection for URLs without trailing slash ([#20502](https://github.com/go-gitea/gitea/pull/20502)) ([#20503](https://github.com/go-gitea/gitea/pull/20503))
  * Dismiss prior pull reviews if done via web in review dismiss ([#20197](https://github.com/go-gitea/gitea/pull/20197)) ([#20407](https://github.com/go-gitea/gitea/pull/20407))
  * Allow RSA 2047 bit keys ([#20272](https://github.com/go-gitea/gitea/pull/20272)) ([#20396](https://github.com/go-gitea/gitea/pull/20396))
  * Add missing return for when topic isn't found ([#20351](https://github.com/go-gitea/gitea/pull/20351)) ([#20395](https://github.com/go-gitea/gitea/pull/20395))
  * Fix commit status icon when in subdirectory ([#20285](https://github.com/go-gitea/gitea/pull/20285)) ([#20385](https://github.com/go-gitea/gitea/pull/20385))
  * Initialize cron last ([#20373](https://github.com/go-gitea/gitea/pull/20373)) ([#20384](https://github.com/go-gitea/gitea/pull/20384))
  * Set target on create release with existing tag ([#20381](https://github.com/go-gitea/gitea/pull/20381)) ([#20382](https://github.com/go-gitea/gitea/pull/20382))
  * Update xorm.io/xorm to fix a interpreting db column sizes issue on 32bit systems ([#20371](https://github.com/go-gitea/gitea/pull/20371)) ([#20372](https://github.com/go-gitea/gitea/pull/20372))
  * Make sure `repo_dir` is an empty directory or doesn't exist before 'dump-repo' ([#20205](https://github.com/go-gitea/gitea/pull/20205)) ([#20370](https://github.com/go-gitea/gitea/pull/20370))
  * Prevent context deadline error propagation in GetCommitsInfo ([#20346](https://github.com/go-gitea/gitea/pull/20346)) ([#20361](https://github.com/go-gitea/gitea/pull/20361))
  * Correctly handle draft releases without a tag ([#20314](https://github.com/go-gitea/gitea/pull/20314)) ([#20335](https://github.com/go-gitea/gitea/pull/20335))
  * Prevent "empty" scrollbars on Firefox ([#20294](https://github.com/go-gitea/gitea/pull/20294)) ([#20308](https://github.com/go-gitea/gitea/pull/20308))
  * Refactor SSH init code, fix directory creation for TrustedUserCAKeys file ([#20299](https://github.com/go-gitea/gitea/pull/20299)) ([#20306](https://github.com/go-gitea/gitea/pull/20306))
  * Bump goldmark to v1.4.13 ([#20300](https://github.com/go-gitea/gitea/pull/20300)) ([#20301](https://github.com/go-gitea/gitea/pull/20301))
  * Do not create empty ".ssh" directory when loading config ([#20289](https://github.com/go-gitea/gitea/pull/20289)) ([#20298](https://github.com/go-gitea/gitea/pull/20298))
  * Fix NPE when using non-numeric ([#20277](https://github.com/go-gitea/gitea/pull/20277)) ([#20278](https://github.com/go-gitea/gitea/pull/20278))
  * Store read access in access for team repositories ([#20275](https://github.com/go-gitea/gitea/pull/20275)) ([#20276](https://github.com/go-gitea/gitea/pull/20276))
  * EscapeFilter the group dn membership ([#20200](https://github.com/go-gitea/gitea/pull/20200)) ([#20254](https://github.com/go-gitea/gitea/pull/20254))
  * Only show Followers that current user can access ([#20220](https://github.com/go-gitea/gitea/pull/20220)) ([#20252](https://github.com/go-gitea/gitea/pull/20252))
  * Update Bluemonday to v1.0.19 ([#20199](https://github.com/go-gitea/gitea/pull/20199)) ([#20209](https://github.com/go-gitea/gitea/pull/20209))
  * Refix indices on actions table ([#20158](https://github.com/go-gitea/gitea/pull/20158)) ([#20198](https://github.com/go-gitea/gitea/pull/20198))
  * Check if project has the same repository id with issue when assign project to issue ([#20133](https://github.com/go-gitea/gitea/pull/20133)) ([#20188](https://github.com/go-gitea/gitea/pull/20188))
  * Fix remove file on initial comment ([#20127](https://github.com/go-gitea/gitea/pull/20127)) ([#20128](https://github.com/go-gitea/gitea/pull/20128))
  * Catch the error before the response is processed by goth ([#20000](https://github.com/go-gitea/gitea/pull/20000)) ([#20102](https://github.com/go-gitea/gitea/pull/20102))
  * Dashboard feed respect setting.UI.FeedPagingNum again ([#20094](https://github.com/go-gitea/gitea/pull/20094)) ([#20099](https://github.com/go-gitea/gitea/pull/20099))
  * Alter hook_task TEXT fields to LONGTEXT ([#20038](https://github.com/go-gitea/gitea/pull/20038)) ([#20041](https://github.com/go-gitea/gitea/pull/20041))
  * Respond with a 401 on git push when password isn't changed yet ([#20026](https://github.com/go-gitea/gitea/pull/20026)) ([#20027](https://github.com/go-gitea/gitea/pull/20027))
  * Return 404 when tag is broken ([#20017](https://github.com/go-gitea/gitea/pull/20017)) ([#20024](https://github.com/go-gitea/gitea/pull/20024))
  * Alter hook_task TEXT fields to LONGTEXT ([#20038](https://github.com/go-gitea/gitea/pull/20038)) ([#20041](https://github.com/go-gitea/gitea/pull/20041))
  * Respond with a 401 on git push when password isn't changed yet ([#20026](https://github.com/go-gitea/gitea/pull/20026)) ([#20027](https://github.com/go-gitea/gitea/pull/20027))
  * Return 404 when tag is broken ([#20017](https://github.com/go-gitea/gitea/pull/20017)) ([#20024](https://github.com/go-gitea/gitea/pull/20024))
  * Write Commit-Graphs in RepositoryDumper ([#20004](https://github.com/go-gitea/gitea/pull/20004))
  * Use DisplayName() instead of FullName in Oauth Provider ([#19991](https://github.com/go-gitea/gitea/pull/19991))
  * Don't buffer doctor logger ([#19982](https://github.com/go-gitea/gitea/pull/19982))
  * Always try to fetch repo for mirrors ([#19975](https://github.com/go-gitea/gitea/pull/19975))
  * Uppercase first languages letters ([#19965](https://github.com/go-gitea/gitea/pull/19965))
  * Fix cli command restore-repo: "units" should be parsed as StringSlice ([#19953](https://github.com/go-gitea/gitea/pull/19953))
  * Ensure minimum mirror interval is reported on settings page ([#19895](https://github.com/go-gitea/gitea/pull/19895))
  * Exclude Archived repos from Dashboard Milestones ([#19882](https://github.com/go-gitea/gitea/pull/19882))
  * gitconfig: set safe.directory = * ([#19870](https://github.com/go-gitea/gitea/pull/19870))
  * Prevent NPE on update mirror settings ([#19864](https://github.com/go-gitea/gitea/pull/19864))
  * Only return valid stopwatches to the EventSource ([#19863](https://github.com/go-gitea/gitea/pull/19863))
  * Prevent NPE whilst migrating if there is a team request review ([#19855](https://github.com/go-gitea/gitea/pull/19855))
  * Fix inconsistency in doctor output ([#19836](https://github.com/go-gitea/gitea/pull/19836))
  * Fix release tag for webhook ([#19830](https://github.com/go-gitea/gitea/pull/19830))
  * Add title attribute to dependencies in sidebar ([#19807](https://github.com/go-gitea/gitea/pull/19807))
  * Estimate Action Count in Statistics ([#19775](https://github.com/go-gitea/gitea/pull/19775))
  * Do not update user stars numbers unless fix is specified ([#19750](https://github.com/go-gitea/gitea/pull/19750))
  * Improved ref comment link when origin is body/title ([#19741](https://github.com/go-gitea/gitea/pull/19741))
  * Fix nodeinfo caching and prevent NPE if cache non-existent ([#19721](https://github.com/go-gitea/gitea/pull/19721))
  * Fix duplicate entry error when add team member ([#19702](https://github.com/go-gitea/gitea/pull/19702))
  * Fix sending empty notifications ([#19589](https://github.com/go-gitea/gitea/pull/19589))
  * Update image URL for Discord webhook ([#19536](https://github.com/go-gitea/gitea/pull/19536))
  * Don't let repo clone URL overflow ([#19517](https://github.com/go-gitea/gitea/pull/19517))
  * Allow commit status popup on /pulls page ([#19507](https://github.com/go-gitea/gitea/pull/19507))
  * Fix two UI bugs: JS error in imagediff.js, 500 error in diff/compare.tmpl ([#19494](https://github.com/go-gitea/gitea/pull/19494))
  * Fix logging of Transfer API ([#19456](https://github.com/go-gitea/gitea/pull/19456))
  * Fix panic in teams API when requesting members ([#19360](https://github.com/go-gitea/gitea/pull/19360))
  * Refactor CSRF protection modules, make sure CSRF tokens can be up-to-date. ([#19337](https://github.com/go-gitea/gitea/pull/19337))
  * An attempt to sync a non-mirror repo must give 400 (Bad Request) ([#19300](https://github.com/go-gitea/gitea/pull/19300))
  * Move checks for pulls before merge into own function ([#19271](https://github.com/go-gitea/gitea/pull/19271))
  * Fix `contrib/upgrade.sh` ([#19222](https://github.com/go-gitea/gitea/pull/19222))
  * Set the default branch for repositories generated from templates ([#19136](https://github.com/go-gitea/gitea/pull/19136))
  * Fix EasyMDE error when input Enter ([#19004](https://github.com/go-gitea/gitea/pull/19004))
  * Don't clean up hardcoded `tmp` ([#18983](https://github.com/go-gitea/gitea/pull/18983))
  * Delete related notifications on issue deletion too ([#18953](https://github.com/go-gitea/gitea/pull/18953))
  * Fix trace log to show value instead of pointers ([#18926](https://github.com/go-gitea/gitea/pull/18926))
  * Fix behavior or checkbox submission. ([#18851](https://github.com/go-gitea/gitea/pull/18851))
  * Add `ContextUser` ([#18798](https://github.com/go-gitea/gitea/pull/18798))
  * Fix some mirror bugs ([#18649](https://github.com/go-gitea/gitea/pull/18649))
  * Quote MAKE to prevent path expansion with space error ([#18622](https://github.com/go-gitea/gitea/pull/18622))
  * Preserve users if restoring a repository on the same Gitea instance ([#18604](https://github.com/go-gitea/gitea/pull/18604))
  * Fix non-ASCII search on database  ([#18437](https://github.com/go-gitea/gitea/pull/18437))
  * Automatically pause queue if index service is unavailable ([#15066](https://github.com/go-gitea/gitea/pull/15066))
* TESTING
  * Allow postgres integration tests to run over unix pipe ([#19875](https://github.com/go-gitea/gitea/pull/19875))
  * Prevent intermittent NPE in queue tests ([#19301](https://github.com/go-gitea/gitea/pull/19301))
  * Add test for importing pull requests in gitea uploader for migrations ([#18752](https://github.com/go-gitea/gitea/pull/18752))
  * Remove redundant comparison in repo dump/restore ([#18660](https://github.com/go-gitea/gitea/pull/18660))
  * More repo dump/restore tests, including pull requests  ([#18621](https://github.com/go-gitea/gitea/pull/18621))
  * Add test coverage for original author conversion during migrations ([#18506](https://github.com/go-gitea/gitea/pull/18506))
* TRANSLATION
  * Update issue_no_dependencies description ([#19112](https://github.com/go-gitea/gitea/pull/19112))
  * Refactor webhooks i18n ([#18380](https://github.com/go-gitea/gitea/pull/18380))
* BUILD
  * Use alpine 3.16 ([#19797](https://github.com/go-gitea/gitea/pull/19797))
  * Require node 14.0 ([#19451](https://github.com/go-gitea/gitea/pull/19451))
* DOCS
  * Update documents (git/fomantic/db, etc) ([#19868](https://github.com/go-gitea/gitea/pull/19868))
  * Update the ROOT documentation and error messages ([#19832](https://github.com/go-gitea/gitea/pull/19832))
  * Update document to use FHS `/usr/local/bin/gitea` instead of `/app/...` for Docker ([#19794](https://github.com/go-gitea/gitea/pull/19794))
  * Update documentation to disable duration settings with -1 instead of 0 ([#19647](https://github.com/go-gitea/gitea/pull/19647))
  * Add warning to set SENDMAIL_ARGS to --  ([#19102](https://github.com/go-gitea/gitea/pull/19102))
  * Update nginx reverse proxy docs ([#18922](https://github.com/go-gitea/gitea/pull/18922))
  * Add example to render html files ([#18736](https://github.com/go-gitea/gitea/pull/18736))
  * Make SSH passtrough documentation better ([#18687](https://github.com/go-gitea/gitea/pull/18687))
  * Changelog 1.16.0 & 1.15.11 (#18468 & [#18455](https://github.com/go-gitea/gitea/pull/18455))  ([#18470](https://github.com/go-gitea/gitea/pull/18470))
  * Update the SSH passthrough documentation ([#18366](https://github.com/go-gitea/gitea/pull/18366))
  * Add `contrib/upgrade.sh` ([#18286](https://github.com/go-gitea/gitea/pull/18286))
* MISC
  * Fix aria for logo ([#19955](https://github.com/go-gitea/gitea/pull/19955))
  * In code search, get code unit accessible repos in one (main) query ([#19764](https://github.com/go-gitea/gitea/pull/19764))
  * Add tooltip to pending PR comments ([#19662](https://github.com/go-gitea/gitea/pull/19662))
  * Improve sync performance for pull-mirrors ([#19125](https://github.com/go-gitea/gitea/pull/19125))
  * Improve dashboard's repo list performance ([#18963](https://github.com/go-gitea/gitea/pull/18963))
  * Avoid database lookups for `DescriptionHTML` ([#18924](https://github.com/go-gitea/gitea/pull/18924))
  * Remove CodeMirror dependencies ([#18911](https://github.com/go-gitea/gitea/pull/18911))
  * Disable unnecessary mirroring elements ([#18527](https://github.com/go-gitea/gitea/pull/18527))
  * Disable unnecessary OpenID/OAuth2 elements ([#18491](https://github.com/go-gitea/gitea/pull/18491))
  * Disable unnecessary GitHooks elements ([#18485](https://github.com/go-gitea/gitea/pull/18485))
  * Change some logging levels ([#18421](https://github.com/go-gitea/gitea/pull/18421))
  * Prevent showing webauthn error for every time visiting `/user/settings/security` ([#18385](https://github.com/go-gitea/gitea/pull/18385))
  * Use correct translation key for errors ([#18342](https://github.com/go-gitea/gitea/pull/18342))
