---
date: 2021-09-23T14:03:27+02:00
authors: "norwin"
title: "Tea 0.8.0 is released"
tags: ["release", "tea"]
draft: false
---

We are proud to present the release of `tea` version 0.8.0,
a CLI tool that allows you to work with pull requests, issues and more in your terminal.

You can download prebuilt binaries from [dl.gitea.io/tea](https://dl.gitea.io/tea/0.8.0),
for more options look at the [README.md](https://gitea.com/gitea/tea#installation).

<!--more-->

This release mostly contains bugfixes and changes to consolidate flag names between commands, but also ships a major new feature:

### Interaction with Notifications
- Notifications can now be listed with more fine-grained selection filters than what Gitea's web UI provides.
  Want to get all notifications about updated PRs in this repo? Easy!
  ```
  tea notifications --repo gitea/tea --types commit
  ```

  Need an overview over all pinned notifications across repos?
  ```
  tea notifications --mine --states pinned
  ```

  Get back on that notification you accidentally marked as read?
  ```
  tea notifications --states=read
  ```

- Additionally, there are now actions to mark notifications as (un)read & to (un)pin them.
  Want to mark all notifications in a single repo as read? Easy!
  ```
  tea notifications read --repo gitea/tea
  ```

## Changelog

### [v0.8.0](https://gitea.com/gitea/tea/releases/tag/v0.8.0) - 2021-09-22

* BREAKING
  * `tea notifications --all` has moved to `tea notifications --mine` ([#389](https://gitea.com/gitea/tea/pulls/389))
  * `tea notifications` now only works with the context of a remote repo. ([#389](https://gitea.com/gitea/tea/pulls/389))
    To run this outside of a local git dir, run either tea n `--mine` or `tea n --repo <my/repo>`
* FEATURES
  * Add notifications subcommands ([#389](https://gitea.com/gitea/tea/pulls/389))
  * Add `tea pr merge` ([#348](https://gitea.com/gitea/tea/pulls/348))
* BUGFIXES
  * Don't skip reading the local repo when `--repo` specifies a repo slug ([#398](https://gitea.com/gitea/tea/pulls/398))
  * Fix adding login without token on private instances ([#392](https://gitea.com/gitea/tea/pulls/392))
  * Correctly match login by ssh host with port ([#391](https://gitea.com/gitea/tea/pulls/391))
  * Fix printing issue deadline ([#388](https://gitea.com/gitea/tea/pulls/388))
  * Return useful error on wrong sshkey path ([#374](https://gitea.com/gitea/tea/pulls/374))
  * Fix parsing of `--description` for issue/pr create ([#371](https://gitea.com/gitea/tea/pulls/371))
  * Add missing flags ([#369](https://gitea.com/gitea/tea/pulls/369))
  * Check negative limit command parameter ([#358](https://gitea.com/gitea/tea/pulls/358)) ([#359](https://gitea.com/gitea/tea/pulls/359))
  * Add missing flags to org & labels subcommands ([#357](https://gitea.com/gitea/tea/pulls/357))
* ENHANCEMENTS
  * Don't require a body for comment PR reviews ([#399](https://gitea.com/gitea/tea/pulls/399))
  * Accept more main branch names for login detection ([#396](https://gitea.com/gitea/tea/pulls/396))
  * Make local repo optional for `tea pr create`([#393](https://gitea.com/gitea/tea/pulls/393))
  * Notifications Add State Field ([#384](https://gitea.com/gitea/tea/pulls/384))
  * Improve error messages ([#370](https://gitea.com/gitea/tea/pulls/370))
  * Add tab completion for fish shell ([#364](https://gitea.com/gitea/tea/pulls/364))
  * Text editor selection: follow unix defacto standards ([#356](https://gitea.com/gitea/tea/pulls/356))
* BUILD
  * Enable release builds for darwin/arm64 ([#360](https://gitea.com/gitea/tea/pulls/360))
* MISC
  * Update Dependencies ([#390](https://gitea.com/gitea/tea/pulls/390))

---

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

