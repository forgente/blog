---
date: "2021-03-12T22:03:27+07:00"
author: "6543"
title: "Tea 0.7.0 is released"
tags: ["release", "tea"]
draft: false
---

We are proud to present the release of `tea` version 0.7.0,
a CLI tool that allows you to work with pull requests, issues and more in your terminal.

You can download prebuilt binaries from [dl.gitea.io/tea](https://dl.gitea.io/tea/0.7.0),
for more options look at the [README.md](https://gitea.com/gitea/tea#installation).

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Demo

![demo gif](/demos/13972/1.gif)

## Review Feature

![review gif](/demos/13972/2.gif)

_Thanks to [@noerw](https://github.com/noerw)_

## Changelog

## [v0.7.0](https://gitea.com/gitea/tea/releases/tag/v0.7.0) - 2021-03-12

* BREAKING
  * `tea issue create`: move `-b` flag to `-d` ([#331](https://gitea.com/gitea/tea/pulls/331))
  * Drop `tea notif` shorthand in favor of `tea n` ([#307](https://gitea.com/gitea/tea/pulls/307))
* FEATURES
  * Add commands for reviews ([#315](https://gitea.com/gitea/tea/pulls/315))
  * Add `tea comment` and show comments of issues/pulls ([#313](https://gitea.com/gitea/tea/pulls/313))
  * Add interactive mode for `tea milestone create` ([#310](https://gitea.com/gitea/tea/pulls/310))
  * Add command to install shell completion ([#309](https://gitea.com/gitea/tea/pulls/309))
  * Implement PR closing and reopening ([#304](https://gitea.com/gitea/tea/pulls/304))
  * Add interactive mode for `tea issue create` ([#302](https://gitea.com/gitea/tea/pulls/302))
* BUGFIXES
  * Introduce workaround for missing pull head sha ([#340](https://gitea.com/gitea/tea/pulls/340))
  * Don't exit if we can't find a local repo with a remote matching to a login ([#336](https://gitea.com/gitea/tea/pulls/336))
  * Don't push before creating a pull ([#334](https://gitea.com/gitea/tea/pulls/334))
  * InitCommand() robustness ([#327](https://gitea.com/gitea/tea/pulls/327))
  * `tea comment`: handle piped stdin ([#322](https://gitea.com/gitea/tea/pulls/322))
* ENHANCEMENTS
  * Allow checking out PRs with deleted head branch ([#341](https://gitea.com/gitea/tea/pulls/341))
  * Markdown renderer: detect terminal width, resolve relative URLs ([#332](https://gitea.com/gitea/tea/pulls/332))
  * Add more issue / pr creation parameters ([#331](https://gitea.com/gitea/tea/pulls/331))
  * Improve `tea time` ([#319](https://gitea.com/gitea/tea/pulls/319))
  * `tea pr checkout`: dont create local branches ([#314](https://gitea.com/gitea/tea/pulls/314))
  * Add `tea issues --fields`, allow printing labels ([#312](https://gitea.com/gitea/tea/pulls/312))
  * Add more command shorthands ([#307](https://gitea.com/gitea/tea/pulls/307))
  * Show PR CI status ([#306](https://gitea.com/gitea/tea/pulls/306))
  * Make PR workflow helpers more robust ([#300](https://gitea.com/gitea/tea/pulls/300))
