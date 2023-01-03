---
date: "2022-12-29T13:45:40+07:00"
authors:
  - "jolheiser"
  - "delvh"
title: "Gitea 1.18.0 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.18.0.

We highly encourage users to update to this version for some important bug-fixes, but make sure to check out the breaking changes.

We have merged [535](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.18.0+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->
We would like to thank [@pboguslawski](https://github.com/pboguslawski) for reporting the reverse proxy authentication issue, and [@zeripath](https://gitea.com/zeripath) for the subsequent fix.  
We would also like to thank [@appleboy](https://gitea.com/appleboy) and [@silverwind](https://gitea.com/silverwind) for the other security fixes in this release.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.18.0/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

Now, let's get into the changes!

## Breaking Changes

### :exclamation: Mailing: Rework mailer settings ([#18982](https://github.com/go-gitea/gitea/pull/18982))

* If you specify credentials for sending emails but the server doesn't support using them, Gitea will fail to start instead of sending mails unauthenticated.
* Use unique `mailer.PROTOCOL` for different mailers (SMTP family, sendmail, dummy), instead of `MAILER_TYPE`+`PROTOCOL`.
* The combined `mailer.HOST` option has been deprecated in favor of the new `mailer.SMTP_ADDR` and `mailer.SMTP_PORT` options.
* The `mailer.IS_TLS_ENABLED` option has been deprecated in favor of using the new `mailer.PROTOCOL` option, which accepts `smtp`, `smtps`, `smtp+startls`, or `smtp+unix` explicitly. If you don't know what protocol your provider uses but provide a port, you can leave it blank and it will be inferred by the given port. See the non-breaking changes section for more details on the new `smtp+unix` protocol.
* The `mailer.DISABLE_HELO` (default false) option has been replaced with `mailer.ENABLE_HELO` (default true). It still does the same thing, but the option was negated to be less confusing.
* The `mailer.SKIP_VERIFY` option has been replaced with `mailer.FORCE_TRUST_SERVER_CERT` to sound scarier, and to clarify what it does.
* The `mailer.USE_CERTIFICATE`, `mailer.CERT_FILE`, and `mailer.KEY_FILE` have been deprecated and renamed to `mailer.USE_CLIENT_CERT`, `mailer.CLIENT_CERT_FILE`, and `mailer.CLIENT_KEY_FILE`.

### :exclamation: Some configuration moved from config file to database ([#18058](https://github.com/go-gitea/gitea/pull/18058))

Two configurations, `picture.DISABLE_GRAVATAR` and `picture.ENABLE_FEDERATED_AVATAR`, have been copied to database config setting table so that admins can change them in the admin panel without restarting the gitea service.  
The existing config settings in `app.ini` will be migrated to the database on first run after upgrading, then the database settings will take precedence. 

### :exclamation: Authentication: Remove U2F support ([#20141](https://github.com/go-gitea/gitea/pull/20141))

Gitea 1.18 completelely removes U2F support. Users should migrate to webauthn if they haven't already.

### :exclamation: Templates: Refactor `i18n` to `locale` ([#20153](https://github.com/go-gitea/gitea/pull/20153))

Any user with custom templates will be affected by this and will need to replace `.i18n` with `.locale`.

### :exclamation: Templates: Remove MD5 function  ([#20813](https://github.com/go-gitea/gitea/pull/20813))

The `MD5` function was removed due being insecure, and due to being unused with the new approach.  
Any user with custom templates will be affected by this and will need to remove any occurrence of the `MD5` function.

---

## Feature Highlights

### :rocket: Add color previews in markdown ([#21474](https://github.com/go-gitea/gitea/pull/21474))

It is now possible to see what a given color will look like in markdown, given you wrap the color inside `` ` ` ``:

![color preview screenshot 1](/demos/21474/1.png)

### :rocket: Package registry: Support for more registries ([#21393](https://github.com/go-gitea/gitea/pull/21393),[#20930](https://github.com/go-gitea/gitea/pull/20930),[#20688](https://github.com/go-gitea/gitea/pull/20688),[#20560](https://github.com/go-gitea/gitea/pull/20560))

With Gitea 1.18, the following new registries/functionalities are supported:

- Chocolatey/NuGet v2 API (.NET)
- Vagrant packages (language agnostic)
- npm unpublish (JS/TS)
- Pub packages (Dart)

This means that at the moment, the following languages/types can be stored as a package:

- Composer (PHP)
- Conan (C++)
- Container Images
- Generic (raw binaries)
- Helm Charts
- Maven (Java)
- npm (JavaScript)
- NuGet (.NET, C#/VB)
- Pub (Dart)
- PyPI (Python)
- RubyGems (Ruby)
- Vagrant Boxes


### :rocket: Add API endpoint to get changed files of a PR ([#21177](https://github.com/go-gitea/gitea/pull/21177))

The Gitea API now allows you to get a list of files that were changed in a given PR.

### :rocket: File tree on PRs ([#21012](https://github.com/go-gitea/gitea/pull/21012))

It is now easier than ever before to navigate inside the changes of a Pull Request:

![file tree screenshot 1](/demos/21012/1.png)

As you can see in the screenshot on the left, this tree represents the file structure of the changes, and can be used to navigate quickly to wherever you want to look.

Tip: The tree is sorted alphabetically, so if you know what you want to find, you'll be quickly able to.

### :rocket: Issue forms and PR forms ([#20987](https://github.com/go-gitea/gitea/pull/20987))

Gitea now supports issue and PR forms as an alternative to free-form markdown.

![issue forms screenshot 1](/demos/20987/1.png)

As you can see above, you can require with these forms that certain standards are being met, while being more user-friendly and intuitive at the same time.

### :rocket: LaTeX math rendering for Markdown ([#20571](https://github.com/go-gitea/gitea/pull/20571))

Gitea can now render mathematical formulas using latex syntax inside `$…$`, `$$…$$`, `\[…\]`, and `\(…\)` in markdown content.

![math rendering screenshot 1](/demos/20571/1.png)

### :rocket: Show localized README ([#20508](https://github.com/go-gitea/gitea/pull/20508))

Gitea now tries to match a user's language setting with specially named READMEs to determine which to display.

For example, if a user is using `zh-CN` as language, then the following READMEs will be considered in that order:

1. `README.zh-CN.md`
2. `README.zh_CN.md`
3. `README.zh.md`
4. `README.md`

### :rocket: Add team member invite by email ([#20307](https://github.com/go-gitea/gitea/pull/20307))

You can now send a request to someone (who has no account on your instance yet) to join a team via email.  
Once they are invited, they can register and join the team via link.

### :rocket: Different Unicode Detection/Escaping Mechanism ([#19990](https://github.com/go-gitea/gitea/pull/19990))

Previously, Gitea used a rather erroneous system to detect invisible/confusable characters.  
The algorithm was now updated to a version that resembles the behavior of Visual Studio Code, which should hopefully produce fewer errors.

### :rocket: User/organization code search ([#19977](https://github.com/go-gitea/gitea/pull/19977))

Users can now enable and use code search across an entire user or organization.  
Say goodbye to having to guess if, and where, some text might be located inside the specific repos.  
To use this feature, you need to have an indexer configured.

### :rocket: Sitemap support ([#18407](https://github.com/go-gitea/gitea/pull/18407))

Gitea can now serve a sitemap automatically, to let search engines know what content is available.

### :rocket: System setting table ([#18058](https://github.com/go-gitea/gitea/pull/18058))

Previously, all configurations were done inside your `app.ini`. \
This isn't necessarily the case anymore, as Gitea now also has a database table `system_setting` that can be used to store settings.  
This table has two benefits:
1. The app.ini won't grow as much anymore as it did previously
2. Settings inside the database can also be updated while the instance is running, even from the UI where set up

At the moment, only two settings (`picture.disable_gravatar` and `picture.enable_federated_avatar`) have been migrated to the database table.

### :rocket: Sync push mirror on commit ([#19411](https://github.com/go-gitea/gitea/pull/19411))

Gitea can now sync push mirrors whenever a new commit is pushed.  
Look for the new checkbox in `Mirror Settings` to enable it.

### :rocket: Purge users ([#18064](https://github.com/go-gitea/gitea/pull/18064))

As many admins of instances with open registration will have noticed already:  
From time to time, spam users will register.  
Previously, admins had a hard time removing such a user.  
This is now much easier, as you can purge any trace of a user simply by executing `gitea admin user delete --purge $USER`. \
Alternatively, you can also check `Purge User` inside the UI when deleting that user from the admin dashboard.

## Changelog

## [1.18.0](https://github.com/go-gitea/gitea/releases/tag/v1.18.0) - 2022-12-29

<!-- Changelog Details -->
* SECURITY
  * Remove ReverseProxy authentication from the API ([#22219](https://github.com/go-gitea/gitea/pull/22219)) ([#22251](https://github.com/go-gitea/gitea/pull/22251))
  * Support Go Vulnerability Management ([#21139](https://github.com/go-gitea/gitea/pull/21139))
  * Forbid HTML string tooltips ([#20935](https://github.com/go-gitea/gitea/pull/20935))
* BREAKING
  * Rework mailer settings ([#18982](https://github.com/go-gitea/gitea/pull/18982))
  * Remove U2F support ([#20141](https://github.com/go-gitea/gitea/pull/20141))
  * Refactor `i18n` to `locale` ([#20153](https://github.com/go-gitea/gitea/pull/20153))
  * Enable contenthash in filename for dynamic assets ([#20813](https://github.com/go-gitea/gitea/pull/20813))
* FEATURES
  * Add color previews in markdown ([#21474](https://github.com/go-gitea/gitea/pull/21474))
  * Allow package version sorting ([#21453](https://github.com/go-gitea/gitea/pull/21453))
  * Add support for Chocolatey/NuGet v2 API ([#21393](https://github.com/go-gitea/gitea/pull/21393))
  * Add API endpoint to get changed files of a PR ([#21177](https://github.com/go-gitea/gitea/pull/21177))
  * Add filetree on left of diff view ([#21012](https://github.com/go-gitea/gitea/pull/21012))
  * Support Issue forms and PR forms ([#20987](https://github.com/go-gitea/gitea/pull/20987))
  * Add support for Vagrant packages ([#20930](https://github.com/go-gitea/gitea/pull/20930))
  * Add support for `npm unpublish` ([#20688](https://github.com/go-gitea/gitea/pull/20688))
  * Add badge capabilities to users ([#20607](https://github.com/go-gitea/gitea/pull/20607))
  * Add issue filter for Author ([#20578](https://github.com/go-gitea/gitea/pull/20578))
  * Add KaTeX rendering to Markdown. ([#20571](https://github.com/go-gitea/gitea/pull/20571))
  * Add support for Pub packages ([#20560](https://github.com/go-gitea/gitea/pull/20560))
  * Support localized README ([#20508](https://github.com/go-gitea/gitea/pull/20508))
  * Add support mCaptcha as captcha provider ([#20458](https://github.com/go-gitea/gitea/pull/20458))
  * Add team member invite by email ([#20307](https://github.com/go-gitea/gitea/pull/20307))
  * Added email notification option to receive all own messages ([#20179](https://github.com/go-gitea/gitea/pull/20179))
  * Switch Unicode Escaping to a VSCode-like system ([#19990](https://github.com/go-gitea/gitea/pull/19990))
  * Add user/organization code search ([#19977](https://github.com/go-gitea/gitea/pull/19977))
  * Only show relevant repositories on explore page ([#19361](https://github.com/go-gitea/gitea/pull/19361))
  * User keypairs and HTTP signatures for ActivityPub federation using go-ap ([#19133](https://github.com/go-gitea/gitea/pull/19133))
  * Add sitemap support ([#18407](https://github.com/go-gitea/gitea/pull/18407))
  * Allow creation of OAuth2 applications for orgs ([#18084](https://github.com/go-gitea/gitea/pull/18084))
  * Add system setting table with cache and also add cache supports for user setting ([#18058](https://github.com/go-gitea/gitea/pull/18058))
  * Add pages to view watched repos and subscribed issues/PRs ([#17156](https://github.com/go-gitea/gitea/pull/17156))
  * Support Proxy protocol ([#12527](https://github.com/go-gitea/gitea/pull/12527))
  * Implement sync push mirror on commit ([#19411](https://github.com/go-gitea/gitea/pull/19411))
* API
  * Allow empty assignees on pull request edit ([#22150](https://github.com/go-gitea/gitea/pull/22150)) ([#22214](https://github.com/go-gitea/gitea/pull/22214))
  * Make external issue tracker regexp configurable via API ([#21338](https://github.com/go-gitea/gitea/pull/21338))
  * Add name field for org api ([#21270](https://github.com/go-gitea/gitea/pull/21270))
  * Show teams with no members if user is admin ([#21204](https://github.com/go-gitea/gitea/pull/21204))
  * Add latest commit's SHA to content response ([#20398](https://github.com/go-gitea/gitea/pull/20398))
  * Add allow_rebase_update, default_delete_branch_after_merge to repository api response ([#20079](https://github.com/go-gitea/gitea/pull/20079))
  * Add new endpoints for push mirrors management ([#19841](https://github.com/go-gitea/gitea/pull/19841))
* ENHANCEMENTS
  * Add setting to disable the git apply step in test patch ([#22130](https://github.com/go-gitea/gitea/pull/22130)) ([#22170](https://github.com/go-gitea/gitea/pull/22170))
  * Multiple improvements for comment edit diff ([#21990](https://github.com/go-gitea/gitea/pull/21990)) ([#22007](https://github.com/go-gitea/gitea/pull/22007))
  * Fix button in branch list, avoid unexpected page jump before restore branch actually done ([#21562](https://github.com/go-gitea/gitea/pull/21562)) ([#21928](https://github.com/go-gitea/gitea/pull/21928))
  * Fix flex layout for repo list icons ([#21896](https://github.com/go-gitea/gitea/pull/21896)) ([#21920](https://github.com/go-gitea/gitea/pull/21920))
  * Fix vertical align of committer avatar rendered by email address ([#21884](https://github.com/go-gitea/gitea/pull/21884)) ([#21918](https://github.com/go-gitea/gitea/pull/21918))
  * Fix setting HTTP headers after write ([#21833](https://github.com/go-gitea/gitea/pull/21833)) ([#21877](https://github.com/go-gitea/gitea/pull/21877))
  * Color and Style enhancements (#21784, [#21799](https://github.com/go-gitea/gitea/pull/21799)) ([#21868](https://github.com/go-gitea/gitea/pull/21868))
  * Ignore line anchor links with leading zeroes ([#21728](https://github.com/go-gitea/gitea/pull/21728)) ([#21776](https://github.com/go-gitea/gitea/pull/21776))
  * Quick fixes monaco-editor error: "vs.editor.nullLanguage" ([#21734](https://github.com/go-gitea/gitea/pull/21734)) ([#21738](https://github.com/go-gitea/gitea/pull/21738))
  * Use CSS color-scheme instead of invert ([#21616](https://github.com/go-gitea/gitea/pull/21616)) ([#21623](https://github.com/go-gitea/gitea/pull/21623))
  * Respect user's locale when rendering the date range in the repo activity page ([#21410](https://github.com/go-gitea/gitea/pull/21410))
  * Change `commits-table` column width ([#21564](https://github.com/go-gitea/gitea/pull/21564))
  * Refactor git command arguments and make all arguments to be safe to be used ([#21535](https://github.com/go-gitea/gitea/pull/21535))
  * CSS color enhancements ([#21534](https://github.com/go-gitea/gitea/pull/21534))
  * Add link to user profile in markdown mention only if user exists (#21533, [#21554](https://github.com/go-gitea/gitea/pull/21554))
  * Add option to skip index dirs ([#21501](https://github.com/go-gitea/gitea/pull/21501))
  * Diff file tree tweaks ([#21446](https://github.com/go-gitea/gitea/pull/21446))
  * Localize all timestamps ([#21440](https://github.com/go-gitea/gitea/pull/21440))
  * Add `code` highlighting in issue titles ([#21432](https://github.com/go-gitea/gitea/pull/21432))
  * Use Name instead of DisplayName in LFS Lock ([#21415](https://github.com/go-gitea/gitea/pull/21415))
  * Consolidate more CSS colors into variables ([#21402](https://github.com/go-gitea/gitea/pull/21402))
  * Redirect to new repository owner ([#21398](https://github.com/go-gitea/gitea/pull/21398))
  * Use ISO date format instead of hard-coded English date format for date range in repo activity page ([#21396](https://github.com/go-gitea/gitea/pull/21396))
  * Use weighted algorithm for string matching when finding files in repo ([#21370](https://github.com/go-gitea/gitea/pull/21370))
  * Show private data in feeds ([#21369](https://github.com/go-gitea/gitea/pull/21369))
  * Refactor parseTreeEntries, speed up tree list ([#21368](https://github.com/go-gitea/gitea/pull/21368))
  * Add GET and DELETE endpoints for Docker blob uploads ([#21367](https://github.com/go-gitea/gitea/pull/21367))
  * Add nicer error handling on template compile errors ([#21350](https://github.com/go-gitea/gitea/pull/21350))
  * Add `stat` to `ToCommit` function for speed ([#21337](https://github.com/go-gitea/gitea/pull/21337))
  * Support instance-wide OAuth2 applications ([#21335](https://github.com/go-gitea/gitea/pull/21335))
  * Record OAuth client type at registration ([#21316](https://github.com/go-gitea/gitea/pull/21316))
  * Add new CSS variables --color-accent and --color-small-accent ([#21305](https://github.com/go-gitea/gitea/pull/21305))
  * Improve error descriptions for unauthorized_client ([#21292](https://github.com/go-gitea/gitea/pull/21292))
  * Case-insensitive "find files in repo" ([#21269](https://github.com/go-gitea/gitea/pull/21269))
  * Consolidate more CSS rules, fix inline code on arc-green ([#21260](https://github.com/go-gitea/gitea/pull/21260))
  * Log real ip of requests from ssh ([#21216](https://github.com/go-gitea/gitea/pull/21216))
  * Save files in local storage as group readable ([#21198](https://github.com/go-gitea/gitea/pull/21198))
  * Enable fluid page layout on medium size viewports ([#21178](https://github.com/go-gitea/gitea/pull/21178))
  * File header tweaks ([#21175](https://github.com/go-gitea/gitea/pull/21175))
  * Added missing headers on user packages page ([#21172](https://github.com/go-gitea/gitea/pull/21172))
  * Display image digest for container packages ([#21170](https://github.com/go-gitea/gitea/pull/21170))
  * Skip dirty check for team forms ([#21154](https://github.com/go-gitea/gitea/pull/21154))
  * Keep path when creating a new branch ([#21153](https://github.com/go-gitea/gitea/pull/21153))
  * Remove fomantic image module ([#21145](https://github.com/go-gitea/gitea/pull/21145))
  * Make labels clickable in the comments section. ([#21137](https://github.com/go-gitea/gitea/pull/21137))
  * Sort branches and tags by date descending ([#21136](https://github.com/go-gitea/gitea/pull/21136))
  * Better repo API unit checks ([#21130](https://github.com/go-gitea/gitea/pull/21130))
  * Improve commit status icons ([#21124](https://github.com/go-gitea/gitea/pull/21124))
  * Limit length of repo description and repo url input fields ([#21119](https://github.com/go-gitea/gitea/pull/21119))
  * Show .editorconfig errors in frontend ([#21088](https://github.com/go-gitea/gitea/pull/21088))
  * Allow poster to choose reviewers ([#21084](https://github.com/go-gitea/gitea/pull/21084))
  * Remove black labels and CSS cleanup ([#21003](https://github.com/go-gitea/gitea/pull/21003))
  * Make e-mail sanity check more precise ([#20991](https://github.com/go-gitea/gitea/pull/20991))
  * Use native inputs in whitespace dropdown ([#20980](https://github.com/go-gitea/gitea/pull/20980))
  * Enhance package date display ([#20928](https://github.com/go-gitea/gitea/pull/20928))
  * Display total blob size of a package version ([#20927](https://github.com/go-gitea/gitea/pull/20927))
  * Show language name on hover ([#20923](https://github.com/go-gitea/gitea/pull/20923))
  * Show instructions for all generic package files ([#20917](https://github.com/go-gitea/gitea/pull/20917))
  * Refactor AssertExistsAndLoadBean to use generics ([#20797](https://github.com/go-gitea/gitea/pull/20797))
  * Move the official website link at the footer of gitea ([#20777](https://github.com/go-gitea/gitea/pull/20777))
  * Add support for full name in reverse proxy auth ([#20776](https://github.com/go-gitea/gitea/pull/20776))
  * Remove useless JS operation for relative time tooltips ([#20756](https://github.com/go-gitea/gitea/pull/20756))
  * Replace some icons with SVG ([#20741](https://github.com/go-gitea/gitea/pull/20741))
  * Change commit status icons to SVG ([#20736](https://github.com/go-gitea/gitea/pull/20736))
  * Improve single repo action for issue and pull requests ([#20730](https://github.com/go-gitea/gitea/pull/20730))
  * Allow multiple files in generic packages ([#20661](https://github.com/go-gitea/gitea/pull/20661))
  * Add option to create new issue from /issues page ([#20650](https://github.com/go-gitea/gitea/pull/20650))
  * Background color of private list-items updated ([#20630](https://github.com/go-gitea/gitea/pull/20630))
  * Added search input field to issue filter ([#20623](https://github.com/go-gitea/gitea/pull/20623))
  * Increase default item listing size `ISSUE_PAGING_NUM` to 20 ([#20547](https://github.com/go-gitea/gitea/pull/20547))
  * Modify milestone search keywords to be case insensitive again ([#20513](https://github.com/go-gitea/gitea/pull/20513))
  * Show hint to link package to repo when viewing empty repo package list ([#20504](https://github.com/go-gitea/gitea/pull/20504))
  * Add Tar ZSTD support ([#20493](https://github.com/go-gitea/gitea/pull/20493))
  * Make code review checkboxes clickable ([#20481](https://github.com/go-gitea/gitea/pull/20481))
  * Add "X-Gitea-Object-Type" header for GET `/raw/` & `/media/` API ([#20438](https://github.com/go-gitea/gitea/pull/20438))
  * Display project in issue list ([#20434](https://github.com/go-gitea/gitea/pull/20434))
  * Prepend commit message to template content when opening a new PR ([#20429](https://github.com/go-gitea/gitea/pull/20429))
  * Replace fomantic popup module with tippy.js ([#20428](https://github.com/go-gitea/gitea/pull/20428))
  * Allow to specify colors for text in markup ([#20363](https://github.com/go-gitea/gitea/pull/20363))
  * Allow access to the Public Organization Member lists with minimal permissions ([#20330](https://github.com/go-gitea/gitea/pull/20330))
  * Use default values when provided values are empty ([#20318](https://github.com/go-gitea/gitea/pull/20318))
  * Vertical align navbar avatar at middle ([#20302](https://github.com/go-gitea/gitea/pull/20302))
  * Delete cancel button in repo creation page ([#21381](https://github.com/go-gitea/gitea/pull/21381))
  * Include login_name in adminCreateUser response ([#20283](https://github.com/go-gitea/gitea/pull/20283))
  * fix: icon margin in user/settings/repos ([#20281](https://github.com/go-gitea/gitea/pull/20281))
  * Remove blue text on migrate page ([#20273](https://github.com/go-gitea/gitea/pull/20273))
  * Modify milestone search keywords to be case insensitive ([#20266](https://github.com/go-gitea/gitea/pull/20266))
  * Move some files into models' sub packages ([#20262](https://github.com/go-gitea/gitea/pull/20262))
  * Add tooltip to repo icons in explore page ([#20241](https://github.com/go-gitea/gitea/pull/20241))
  * Remove deprecated licenses ([#20222](https://github.com/go-gitea/gitea/pull/20222))
  * Webhook for Wiki changes ([#20219](https://github.com/go-gitea/gitea/pull/20219))
  * Share HTML template renderers and create a watcher framework ([#20218](https://github.com/go-gitea/gitea/pull/20218))
  * Allow enable LDAP source and disable user sync via CLI ([#20206](https://github.com/go-gitea/gitea/pull/20206))
  * Adds a checkbox to select all issues/PRs ([#20177](https://github.com/go-gitea/gitea/pull/20177))
  * Refactor `i18n` to `locale` ([#20153](https://github.com/go-gitea/gitea/pull/20153))
  * Disable status checks in template if none found ([#20088](https://github.com/go-gitea/gitea/pull/20088))
  * Allow manager logging to set SQL ([#20064](https://github.com/go-gitea/gitea/pull/20064))
  * Add order by for assignee no sort issue ([#20053](https://github.com/go-gitea/gitea/pull/20053))
  * Take a stab at porting existing components to Vue3 ([#20044](https://github.com/go-gitea/gitea/pull/20044))
  * Add doctor command to write commit-graphs ([#20007](https://github.com/go-gitea/gitea/pull/20007))
  * Add support for authentication based on reverse proxy email ([#19949](https://github.com/go-gitea/gitea/pull/19949))
  * Enable spellcheck for EasyMDE, use contenteditable mode ([#19776](https://github.com/go-gitea/gitea/pull/19776))
  * Allow specifying SECRET_KEY_URI, similar to INTERNAL_TOKEN_URI ([#19663](https://github.com/go-gitea/gitea/pull/19663))
  * Rework mailer settings ([#18982](https://github.com/go-gitea/gitea/pull/18982))
  * Add option to purge users ([#18064](https://github.com/go-gitea/gitea/pull/18064))
  * Add author search input ([#21246](https://github.com/go-gitea/gitea/pull/21246))
  * Make rss/atom identifier globally unique ([#21550](https://github.com/go-gitea/gitea/pull/21550))
* BUGFIXES
  * Auth interface return error when verify failure ([#22119](https://github.com/go-gitea/gitea/pull/22119)) ([#22259](https://github.com/go-gitea/gitea/pull/22259))
  * Use complete SHA to create and query commit status ([#22244](https://github.com/go-gitea/gitea/pull/22244)) ([#22257](https://github.com/go-gitea/gitea/pull/22257))
  * Update bleve and zapx to fix unaligned atomic ([#22031](https://github.com/go-gitea/gitea/pull/22031)) ([#22218](https://github.com/go-gitea/gitea/pull/22218))
  * Prevent panic in doctor command when running default checks ([#21791](https://github.com/go-gitea/gitea/pull/21791)) ([#21807](https://github.com/go-gitea/gitea/pull/21807))
  * Load GitRepo in API before deleting issue ([#21720](https://github.com/go-gitea/gitea/pull/21720)) ([#21796](https://github.com/go-gitea/gitea/pull/21796))
  * Ignore line anchor links with leading zeroes ([#21728](https://github.com/go-gitea/gitea/pull/21728)) ([#21776](https://github.com/go-gitea/gitea/pull/21776))
  * Set last login when activating account ([#21731](https://github.com/go-gitea/gitea/pull/21731)) ([#21755](https://github.com/go-gitea/gitea/pull/21755))
  * Fix UI language switching bug ([#21597](https://github.com/go-gitea/gitea/pull/21597)) ([#21749](https://github.com/go-gitea/gitea/pull/21749))
  * Quick fixes monaco-editor error: "vs.editor.nullLanguage" ([#21734](https://github.com/go-gitea/gitea/pull/21734)) ([#21738](https://github.com/go-gitea/gitea/pull/21738))
  * Allow local package identifiers for PyPI packages ([#21690](https://github.com/go-gitea/gitea/pull/21690)) ([#21727](https://github.com/go-gitea/gitea/pull/21727))
  * Deal with markdown template without metadata ([#21639](https://github.com/go-gitea/gitea/pull/21639)) ([#21654](https://github.com/go-gitea/gitea/pull/21654))
  * Fix opaque background on mermaid diagrams ([#21642](https://github.com/go-gitea/gitea/pull/21642)) ([#21652](https://github.com/go-gitea/gitea/pull/21652))
  * Fix repository adoption on Windows ([#21646](https://github.com/go-gitea/gitea/pull/21646)) ([#21650](https://github.com/go-gitea/gitea/pull/21650))
  * Sync git hooks when config file path changed ([#21619](https://github.com/go-gitea/gitea/pull/21619)) ([#21626](https://github.com/go-gitea/gitea/pull/21626))
  * Fix 500 on PR files API ([#21602](https://github.com/go-gitea/gitea/pull/21602)) ([#21607](https://github.com/go-gitea/gitea/pull/21607))
  * Fix `Timestamp.IsZero` ([#21593](https://github.com/go-gitea/gitea/pull/21593)) ([#21603](https://github.com/go-gitea/gitea/pull/21603))
  * Fix viewing user subscriptions ([#21482](https://github.com/go-gitea/gitea/pull/21482))
  * Fix mermaid-related bugs ([#21431](https://github.com/go-gitea/gitea/pull/21431))
  * Fix branch dropdown shifting on page load ([#21428](https://github.com/go-gitea/gitea/pull/21428))
  * Fix default theme-auto selector when nologin ([#21346](https://github.com/go-gitea/gitea/pull/21346))
  * Fix and improve incorrect error messages ([#21342](https://github.com/go-gitea/gitea/pull/21342))
  * Fix formatted link for PR review notifications to matrix ([#21319](https://github.com/go-gitea/gitea/pull/21319))
  * Center-aligning content of WebAuthN page ([#21127](https://github.com/go-gitea/gitea/pull/21127))
  * Remove follow from commits by file ([#20765](https://github.com/go-gitea/gitea/pull/20765))
  * Fix commit status popup ([#20737](https://github.com/go-gitea/gitea/pull/20737))
  * Fix init mail render logic ([#20704](https://github.com/go-gitea/gitea/pull/20704))
  * Use correct page size for link header pagination ([#20546](https://github.com/go-gitea/gitea/pull/20546))
  * Preserve unix socket file ([#20499](https://github.com/go-gitea/gitea/pull/20499))
  * Use tippy.js for context popup ([#20393](https://github.com/go-gitea/gitea/pull/20393))
  * Add missing parameter for error in log message ([#20144](https://github.com/go-gitea/gitea/pull/20144))
  * Do not allow organisation owners add themselves as collaborator ([#20043](https://github.com/go-gitea/gitea/pull/20043))
  * Rework file highlight rendering and fix yaml copy-paste ([#19967](https://github.com/go-gitea/gitea/pull/19967))
  * Improve code diff highlight, fix incorrect rendered diff result ([#19958](https://github.com/go-gitea/gitea/pull/19958))
* TESTING
  * Improve OAuth integration tests ([#21390](https://github.com/go-gitea/gitea/pull/21390))
  * Add playwright tests ([#20123](https://github.com/go-gitea/gitea/pull/20123))
* BUILD
  * Switch to building with go1.19 ([#20695](https://github.com/go-gitea/gitea/pull/20695))
  * Update JS dependencies, adjust eslint ([#20659](https://github.com/go-gitea/gitea/pull/20659))
  * Add more linters to improve code readability ([#19989](https://github.com/go-gitea/gitea/pull/19989))
