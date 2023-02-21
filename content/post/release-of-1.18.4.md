---
date: "2023-02-20T09:11:48+07:00"
author: "jolheiser"
title: "Gitea 1.18.4 is released"
tags: ["release"]
draft: false
---

Attention please.

Due to an Admin Merge / Auto Merge regression bug found in 1.18.4, we are going to release 1.18.5 soon. If you are affected by that bug, you could downgrade to 1.18.3 safely and wait for 1.18.5.

---

We are proud to present the release of Gitea version 1.18.4.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [32](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.18.4+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->
Thanks to [@Gusted](https://gusted.xyz) for the report about the default hashing algorithm and the starting patch, and thanks to [@zeripath](https://gitea.com/zeripath) and [@boppy](https://github.com/boppy) for the further enhancements and fix!

Thanks to [@zeripath](https://gitea.com/zeripath) as well for the new admin command to force multiple users to change their password.

:exclamation: This release will also contain an updated `git` binary in the docker images to fix the recent CVEs. Anyone not using docker will need to update their `git` binary manually! More information can be found at <https://cve.circl.lu/cve/CVE-2023-22490> and <https://cve.circl.lu/cve/CVE-2023-23946>.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.18.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.18.4](https://github.com/go-gitea/gitea/releases/tag/v1.18.4) - 2023-02-20

<!-- Changelog Details -->
* SECURITY
  * Provide the ability to set password hash algorithm parameters ([#22942](https://github.com/go-gitea/gitea/pull/22942)) ([#22943](https://github.com/go-gitea/gitea/pull/22943))
  * Add command to bulk set must-change-password ([#22823](https://github.com/go-gitea/gitea/pull/22823)) ([#22928](https://github.com/go-gitea/gitea/pull/22928))
* ENHANCEMENTS
  * Use import of OCI structs ([#22765](https://github.com/go-gitea/gitea/pull/22765)) ([#22805](https://github.com/go-gitea/gitea/pull/22805))
  * Fix color of tertiary button on dark theme ([#22739](https://github.com/go-gitea/gitea/pull/22739)) ([#22744](https://github.com/go-gitea/gitea/pull/22744))
  * Link issue and pull requests status change in UI notifications directly to their event in the timelined view. ([#22627](https://github.com/go-gitea/gitea/pull/22627)) ([#22642](https://github.com/go-gitea/gitea/pull/22642))
* BUGFIXES
  * Notify on container image create ([#22806](https://github.com/go-gitea/gitea/pull/22806)) ([#22965](https://github.com/go-gitea/gitea/pull/22965))
  * Fix blame view missing lines ([#22826](https://github.com/go-gitea/gitea/pull/22826)) ([#22929](https://github.com/go-gitea/gitea/pull/22929))
  * Fix incorrect role labels for migrated issues and comments ([#22914](https://github.com/go-gitea/gitea/pull/22914)) ([#22923](https://github.com/go-gitea/gitea/pull/22923))
  * Fix PR file tree folders no longer collapsing ([#22864](https://github.com/go-gitea/gitea/pull/22864)) ([#22872](https://github.com/go-gitea/gitea/pull/22872))
  * Escape filename when assemble URL ([#22850](https://github.com/go-gitea/gitea/pull/22850)) ([#22871](https://github.com/go-gitea/gitea/pull/22871))
  * Fix isAllowed of escapeStreamer ([#22814](https://github.com/go-gitea/gitea/pull/22814)) ([#22837](https://github.com/go-gitea/gitea/pull/22837))
  * Load issue before accessing index in merge message ([#22822](https://github.com/go-gitea/gitea/pull/22822)) ([#22830](https://github.com/go-gitea/gitea/pull/22830))
  * Improve trace logging for pulls and processes ([#22633](https://github.com/go-gitea/gitea/pull/22633)) ([#22812](https://github.com/go-gitea/gitea/pull/22812))
  * Fix restore repo bug, clarify the problem of ForeignIndex ([#22776](https://github.com/go-gitea/gitea/pull/22776)) ([#22794](https://github.com/go-gitea/gitea/pull/22794))
  * Add default user visibility to cli command "admin user create" ([#22750](https://github.com/go-gitea/gitea/pull/22750)) ([#22760](https://github.com/go-gitea/gitea/pull/22760))
  * Escape path for the file list ([#22741](https://github.com/go-gitea/gitea/pull/22741)) ([#22757](https://github.com/go-gitea/gitea/pull/22757))
  * Fix bugs with WebAuthn preventing sign in and registration. ([#22651](https://github.com/go-gitea/gitea/pull/22651)) ([#22721](https://github.com/go-gitea/gitea/pull/22721))
  * Add missing close bracket in imagediff ([#22710](https://github.com/go-gitea/gitea/pull/22710)) ([#22712](https://github.com/go-gitea/gitea/pull/22712))
  * Move code comments to a standalone file and fix the bug when adding a reply to an outdated review appears to not post([#20821](https://github.com/go-gitea/gitea/pull/20821)) ([#22707](https://github.com/go-gitea/gitea/pull/22707))
  * Fix line spacing for plaintext previews ([#22699](https://github.com/go-gitea/gitea/pull/22699)) ([#22701](https://github.com/go-gitea/gitea/pull/22701))
  * Fix wrong hint when deleting a branch successfully from pull request UI ([#22673](https://github.com/go-gitea/gitea/pull/22673)) ([#22698](https://github.com/go-gitea/gitea/pull/22698))
  * Fix README TOC links ([#22577](https://github.com/go-gitea/gitea/pull/22577)) ([#22677](https://github.com/go-gitea/gitea/pull/22677))
  * Fix missing message in git hook when pull requests disabled on fork ([#22625](https://github.com/go-gitea/gitea/pull/22625)) ([#22658](https://github.com/go-gitea/gitea/pull/22658))
  * Improve checkIfPRContentChanged ([#22611](https://github.com/go-gitea/gitea/pull/22611)) ([#22644](https://github.com/go-gitea/gitea/pull/22644))
  * Prevent duplicate labels when importing more than 99 ([#22591](https://github.com/go-gitea/gitea/pull/22591)) ([#22598](https://github.com/go-gitea/gitea/pull/22598))
  * Don't return duplicated users who can create org repo ([#22560](https://github.com/go-gitea/gitea/pull/22560)) ([#22562](https://github.com/go-gitea/gitea/pull/22562))
* BUILD
  * Upgrade golangcilint to v1.51.0 ([#22764](https://github.com/go-gitea/gitea/pull/22764))
* MISC
  * Use proxy for pull mirror ([#22771](https://github.com/go-gitea/gitea/pull/22771)) ([#22772](https://github.com/go-gitea/gitea/pull/22772))
  * Use `--index-url` in PyPi description ([#22620](https://github.com/go-gitea/gitea/pull/22620)) ([#22636](https://github.com/go-gitea/gitea/pull/22636))