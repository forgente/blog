---
date: "2023-07-05T15:02:48+07:00"
author: "6543"
title: "Gitea 1.19.4 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.19.4.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [62](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.19.4+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.19.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.19.4](https://github.com/go-gitea/gitea/releases/tag/v1.19.4) - 2023-07-04

* SECURITY
  * Fix open redirect check for more cases (https://github.com/go-gitea/gitea/pull/25143) (https://github.com/go-gitea/gitea/pull/25155)
* API
  * Return `404` in the API if the requested webhooks were not found (https://github.com/go-gitea/gitea/pull/24823) (https://github.com/go-gitea/gitea/pull/24830)
  * Fix `organization` field being `null` in `GET /api/v1/teams/{id}` (https://github.com/go-gitea/gitea/pull/24694) (https://github.com/go-gitea/gitea/pull/24696)
* ENHANCEMENTS
  * Set `--font-weight-bold` to 600 (https://github.com/go-gitea/gitea/pull/24840)
  * Make mailer SMTP check have timed context (https://github.com/go-gitea/gitea/pull/24751) (https://github.com/go-gitea/gitea/pull/24759)
  * Do not select line numbers when selecting text from the action run logs (https://github.com/go-gitea/gitea/pull/24594) (https://github.com/go-gitea/gitea/pull/24596)
* BUGFIXES
  * Fix bug when change user name (https://github.com/go-gitea/gitea/pull/25637) (https://github.com/go-gitea/gitea/pull/25645)
  * Fix task list checkbox toggle to work with YAML front matter (https://github.com/go-gitea/gitea/pull/25184) (https://github.com/go-gitea/gitea/pull/25236)
  * Hide limited users if viewed by anonymous ghost (https://github.com/go-gitea/gitea/pull/25214) (https://github.com/go-gitea/gitea/pull/25224)
  * Add `WithPullRequest` for `actionsNotifier` (https://github.com/go-gitea/gitea/pull/25144) (https://github.com/go-gitea/gitea/pull/25196)
  * Fix parallelly generating index failure with Mysql (https://github.com/go-gitea/gitea/pull/24567) (https://github.com/go-gitea/gitea/pull/25081)
  * GitLab migration: Sanitize response for reaction list (https://github.com/go-gitea/gitea/pull/25054) (https://github.com/go-gitea/gitea/pull/25059)
  * Fix users cannot visit issue attachment bug (https://github.com/go-gitea/gitea/pull/25019) (https://github.com/go-gitea/gitea/pull/25027)
  * Fix missing reference prefix of commits when sync mirror repository (https://github.com/go-gitea/gitea/pull/24994)
  * Only validate changed columns when update user (https://github.com/go-gitea/gitea/pull/24867) (https://github.com/go-gitea/gitea/pull/24903)
  * Make DeleteIssue use correct context (https://github.com/go-gitea/gitea/pull/24885)
  * Fix topics deleted via API not being deleted in org page (https://github.com/go-gitea/gitea/pull/24825) (https://github.com/go-gitea/gitea/pull/24829)
  * Fix Actions being enabled accidentally (https://github.com/go-gitea/gitea/pull/24802) (https://github.com/go-gitea/gitea/pull/24810)
  * Fix missed table name on iterate lfs meta objects (https://github.com/go-gitea/gitea/pull/24768) (https://github.com/go-gitea/gitea/pull/24774)
  * Fix safari cookie session bug (https://github.com/go-gitea/gitea/pull/24772)
  * Respect original content when creating secrets (https://github.com/go-gitea/gitea/pull/24745) (https://github.com/go-gitea/gitea/pull/24746)
  * Fix Pull Mirror out-of-sync bugs (https://github.com/go-gitea/gitea/pull/24732) (https://github.com/go-gitea/gitea/pull/24733)
  * Fix run list broken when trigger user deleted (https://github.com/go-gitea/gitea/pull/24706) (https://github.com/go-gitea/gitea/pull/24709)
  * Fix issues list page multiple selection update milestones (https://github.com/go-gitea/gitea/pull/24660) (https://github.com/go-gitea/gitea/pull/24663)
  * Fix: release page for empty or non-existing target (https://github.com/go-gitea/gitea/pull/24659)
  * Fix close org projects (https://github.com/go-gitea/gitea/pull/24588) (https://github.com/go-gitea/gitea/pull/24591)
  * Refresh the refernce of the closed PR when reopening (https://github.com/go-gitea/gitea/pull/24231) (https://github.com/go-gitea/gitea/pull/24587)
  * Fix the permission of team's `Actions` unit issue (https://github.com/go-gitea/gitea/pull/24536) (https://github.com/go-gitea/gitea/pull/24545)
  * Bump go.etcd.io/bbolt and blevesearch deps (https://github.com/go-gitea/gitea/pull/23062) (https://github.com/go-gitea/gitea/pull/24519)
  * Fix new wiki page mirror (https://github.com/go-gitea/gitea/pull/24518)
  * Match unqualified references when syncing pulls as well (https://github.com/go-gitea/gitea/pull/23070)
* DOCS
  * Change branch name from master to main in some documents' links (https://github.com/go-gitea/gitea/pull/25126) (https://github.com/go-gitea/gitea/pull/25139)
  * Remove unnecessary content on docs (https://github.com/go-gitea/gitea/pull/24976) (https://github.com/go-gitea/gitea/pull/25001)
  * Unify doc links to use paths relative to doc folder (https://github.com/go-gitea/gitea/pull/24979) (https://github.com/go-gitea/gitea/pull/25000)
  * Fix docs documenting invalid `@every` for `OLDER_THAN` cron settings (https://github.com/go-gitea/gitea/pull/24695) (https://github.com/go-gitea/gitea/pull/24698)
* MISC
  * Merge different languages for language stats (https://github.com/go-gitea/gitea/pull/24900) (https://github.com/go-gitea/gitea/pull/24921)
  * Hiding Secrets options when Actions feature is disabled (https://github.com/go-gitea/gitea/pull/24792)
  * Improve decryption failure message (https://github.com/go-gitea/gitea/pull/24573) (https://github.com/go-gitea/gitea/pull/24575)
  * Makefile: Use portable !, not GNUish -not, with find(1). (https://github.com/go-gitea/gitea/pull/24565) (https://github.com/go-gitea/gitea/pull/24572)
