---
date: 2021-02-01T17:42:53+07:00
authors: "jolheiser"
title: "Gitea 1.13.2 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.13.2"
---

We are proud to present the release of Gitea version 1.13.2.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [28](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.13.2+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.13.2/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.13.2](https://github.com/go-gitea/gitea/releases/tag/v1.13.2) - 2021-02-01

* SECURITY
    * Prevent panic on fuzzer provided string ([#14405](https://github.com/go-gitea/gitea/pull/14405)) ([#14409](https://github.com/go-gitea/gitea/pull/14409))
    * Add secure/httpOnly attributes to the lang cookie ([#14279](https://github.com/go-gitea/gitea/pull/14279)) ([#14280](https://github.com/go-gitea/gitea/pull/14280))
* API
    * If release publisher is deleted use ghost user ([#14375](https://github.com/go-gitea/gitea/pull/14375))
* BUGFIXES
    * Internal ssh server respect Ciphers, MACs and KeyExchanges settings ([#14523](https://github.com/go-gitea/gitea/pull/14523)) ([#14530](https://github.com/go-gitea/gitea/pull/14530))
    * Set the name Mapper in migrations ([#14526](https://github.com/go-gitea/gitea/pull/14526)) ([#14529](https://github.com/go-gitea/gitea/pull/14529))
    * Fix wiki preview ([#14515](https://github.com/go-gitea/gitea/pull/14515))
    * Update code.gitea.io/sdk/gitea v0.13.1 -> v0.13.2 ([#14497](https://github.com/go-gitea/gitea/pull/14497))
    * ChangeUserName: rename user files back on DB issue ([#14447](https://github.com/go-gitea/gitea/pull/14447))
    * Fix lfs preview bug ([#14428](https://github.com/go-gitea/gitea/pull/14428)) ([#14433](https://github.com/go-gitea/gitea/pull/14433))
    * Ensure timeout error is shown on u2f timeout ([#14417](https://github.com/go-gitea/gitea/pull/14417)) ([#14431](https://github.com/go-gitea/gitea/pull/14431))
    * Fix Deadlock & Delete affected reactions on comment deletion ([#14392](https://github.com/go-gitea/gitea/pull/14392)) ([#14425](https://github.com/go-gitea/gitea/pull/14425))
    * Use path not filepath in routers/editor ([#14390](https://github.com/go-gitea/gitea/pull/14390)) ([#14396](https://github.com/go-gitea/gitea/pull/14396))
    * Check if label template exist first ([#14384](https://github.com/go-gitea/gitea/pull/14384)) ([#14389](https://github.com/go-gitea/gitea/pull/14389))
    * Fix migration v141 ([#14387](https://github.com/go-gitea/gitea/pull/14387)) ([#14388](https://github.com/go-gitea/gitea/pull/14388))
    * Use Request.URL.RequestURI() for fcgi ([#14347](https://github.com/go-gitea/gitea/pull/14347))
    * Use ServerError provided by Context ([#14333](https://github.com/go-gitea/gitea/pull/14333)) ([#14345](https://github.com/go-gitea/gitea/pull/14345))
    * Fix edit-label form init ([#14337](https://github.com/go-gitea/gitea/pull/14337))
    * Fix mailIssueCommentBatch for pull request ([#14252](https://github.com/go-gitea/gitea/pull/14252)) ([#14296](https://github.com/go-gitea/gitea/pull/14296))
    * Render links for commit hashes followed by comma ([#14224](https://github.com/go-gitea/gitea/pull/14224)) ([#14227](https://github.com/go-gitea/gitea/pull/14227))
    * Send notifications for mentions in pulls, issues, (code-)comments ([#14218](https://github.com/go-gitea/gitea/pull/14218)) ([#14221](https://github.com/go-gitea/gitea/pull/14221))
    * Fix avatar bugs ([#14217](https://github.com/go-gitea/gitea/pull/14217)) ([#14220](https://github.com/go-gitea/gitea/pull/14220))
    * Ensure that schema search path is set with every connection on postgres ([#14131](https://github.com/go-gitea/gitea/pull/14131)) ([#14216](https://github.com/go-gitea/gitea/pull/14216))
    * Fix dashboard issues labels filter bug ([#14210](https://github.com/go-gitea/gitea/pull/14210)) ([#14214](https://github.com/go-gitea/gitea/pull/14214))
    * When visit /favicon.ico but the static file is not exist return 404 but not continue to handle the route ([#14211](https://github.com/go-gitea/gitea/pull/14211)) ([#14213](https://github.com/go-gitea/gitea/pull/14213))
    * Fix branch selector on new issue page ([#14194](https://github.com/go-gitea/gitea/pull/14194)) ([#14207](https://github.com/go-gitea/gitea/pull/14207))
    * Check for notExist on profile repository page ([#14197](https://github.com/go-gitea/gitea/pull/14197)) ([#14203](https://github.com/go-gitea/gitea/pull/14203))
