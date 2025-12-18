---
date: 2025-12-18T11:31:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.25.3 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.25.3
---

We’re excited to announce the release of Gitea 1.25.3! We strongly recommend all users upgrade to this version, as it includes important security fixes, numerous bug fixes, and overall stability improvements.

In this release, Gitea has been upgraded to Go 1.25.5, which addresses two security vulnerabilities in crypto/x509: GO-2025-4175 and GO-2025-4155. We would like to thank @silverwind for providing the patches.

This release includes [23 merged pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.25.3+is%3Amerged), thanks to the amazing contributions from our community.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.25.3/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

* SECURITY
  * Bump toolchain to go1.25.5, misc fixes ([#36082](https://github.com/go-gitea/gitea/pull/36082))
* ENHANCEMENTS
  * Add strikethrough button to markdown editor ([#36087](https://github.com/go-gitea/gitea/pull/36087)) ([#36104](https://github.com/go-gitea/gitea/pull/36104))
  * Add "site admin" back to profile menu ([#36010](https://github.com/go-gitea/gitea/pull/36010)) ([#36013](https://github.com/go-gitea/gitea/pull/36013))
  * Improve math rendering ([#36124](https://github.com/go-gitea/gitea/pull/36124)) ([#36125](https://github.com/go-gitea/gitea/pull/36125))
* BUGFIXES
  * Check user visibility when redirecting to a renamed user ([#36148](https://github.com/go-gitea/gitea/pull/36148)) ([#36159](https://github.com/go-gitea/gitea/pull/36159))
  * Fix various bugs ([#36139](https://github.com/go-gitea/gitea/pull/36139)) ([#36151](https://github.com/go-gitea/gitea/pull/36151))
  * Fix bug when viewing the commit diff page with non-ANSI files ([#36149](https://github.com/go-gitea/gitea/pull/36149)) ([#36150](https://github.com/go-gitea/gitea/pull/36150))
  * Hide RSS icon when viewing a file not under a branch ([#36135](https://github.com/go-gitea/gitea/pull/36135)) ([#36141](https://github.com/go-gitea/gitea/pull/36141))
  * Fix SVG size calulation, only use `style` attribute ([#36133](https://github.com/go-gitea/gitea/pull/36133)) ([#36134](https://github.com/go-gitea/gitea/pull/36134))
  * Make Golang correctly delete temp files during uploading ([#36128](https://github.com/go-gitea/gitea/pull/36128)) ([#36129](https://github.com/go-gitea/gitea/pull/36129))
  * Fix the bug when ssh clone with redirect user or repository ([#36039](https://github.com/go-gitea/gitea/pull/36039)) ([#36090](https://github.com/go-gitea/gitea/pull/36090))
  * Use Golang net/smtp instead of gomail's smtp to send email ([#36055](https://github.com/go-gitea/gitea/pull/36055)) ([#36083](https://github.com/go-gitea/gitea/pull/36083))
  * Fix edit user email bug in API ([#36068](https://github.com/go-gitea/gitea/pull/36068)) ([#36081](https://github.com/go-gitea/gitea/pull/36081))
  * Fix bug when updating user email ([#36058](https://github.com/go-gitea/gitea/pull/36058)) ([#36066](https://github.com/go-gitea/gitea/pull/36066))
  * Fix incorrect viewed files counter if file has changed ([#36009](https://github.com/go-gitea/gitea/pull/36009)) ([#36047](https://github.com/go-gitea/gitea/pull/36047))
  * Fix container registry error handling ([#36021](https://github.com/go-gitea/gitea/pull/36021)) ([#36037](https://github.com/go-gitea/gitea/pull/36037))
  * Fix webAuthn insecure error view ([#36165](https://github.com/go-gitea/gitea/pull/36165)) ([#36179](https://github.com/go-gitea/gitea/pull/36179))
  * Fix some file icon ui ([#36078](https://github.com/go-gitea/gitea/pull/36078)) ([#36088](https://github.com/go-gitea/gitea/pull/36088))
  * Fix Actions `pull_request.paths` being triggered incorrectly by rebase ([#36045](https://github.com/go-gitea/gitea/pull/36045)) ([#36054](https://github.com/go-gitea/gitea/pull/36054))
  * Fix error handling in mailer and wiki services ([#36041](https://github.com/go-gitea/gitea/pull/36041)) ([#36053](https://github.com/go-gitea/gitea/pull/36053))
  * Fix bugs when comparing and creating pull request ([#36166](https://github.com/go-gitea/gitea/pull/36166)) ([#36144](https://github.com/go-gitea/gitea/pull/36144))

## Contributors

* [@a1012112796](https://github.com/a1012112796)
* [@bytedream](https://github.com/bytedream)
* [@hamkido](https://github.com/hamkido)
* [@lunny](https://github.com/lunny)
* [@schinkelg](https://github.com/schinkelg)
* [@silverwind](https://github.com/silverwind)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@Zettat123](https://github.com/Zettat123)
