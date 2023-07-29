---
date: 2021-03-05T02:59:08+07:00
authors: "6543"
title: "Gitea 1.13.3 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.13.3.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [21](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.13.3+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.13.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

:exclamation: Password hashing algorithm default has changed back to pbkdf2 from argon2. ([#14673](https://github.com/go-gitea/gitea/pull/14673))

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.13.3](https://github.com/go-gitea/gitea/releases/tag/v1.13.3) - 2021-03-05

* BREAKING & SECURITY
  * Turn default hash password algorithm back to pbkdf2 from argon2 until we find a better one ([#14673](https://github.com/go-gitea/gitea/pull/14673)) ([#14675](https://github.com/go-gitea/gitea/pull/14675))
* BUGFIXES
  * Fix paging of file commit logs ([#14831](https://github.com/go-gitea/gitea/pull/14831)) ([#14879](https://github.com/go-gitea/gitea/pull/14879))
  * Print useful error if SQLite is used in settings but not supported ([#14476](https://github.com/go-gitea/gitea/pull/14476)) ([#14874](https://github.com/go-gitea/gitea/pull/14874))
  * Fix display since time round ([#14226](https://github.com/go-gitea/gitea/pull/14226)) ([#14873](https://github.com/go-gitea/gitea/pull/14873))
  * When Deleting Repository only explicitly close PRs whose base is not this repository ([#14823](https://github.com/go-gitea/gitea/pull/14823)) ([#14842](https://github.com/go-gitea/gitea/pull/14842))
  * Set HCaptchaSiteKey on Link Account pages ([#14834](https://github.com/go-gitea/gitea/pull/14834)) ([#14839](https://github.com/go-gitea/gitea/pull/14839))
  * Fix a couple of CommentAsPatch issues.  ([#14804](https://github.com/go-gitea/gitea/pull/14804)) ([#14820](https://github.com/go-gitea/gitea/pull/14820))
  * Disable broken OAuth2 providers at startup ([#14802](https://github.com/go-gitea/gitea/pull/14802)) ([#14811](https://github.com/go-gitea/gitea/pull/14811))
  * Repo Transfer permission checks ([#14792](https://github.com/go-gitea/gitea/pull/14792)) ([#14794](https://github.com/go-gitea/gitea/pull/14794))
  * Fix double alert in oauth2 application edit view ([#14764](https://github.com/go-gitea/gitea/pull/14764)) ([#14768](https://github.com/go-gitea/gitea/pull/14768))
  * Fix broken spans in diffs ([#14678](https://github.com/go-gitea/gitea/pull/14678)) ([#14683](https://github.com/go-gitea/gitea/pull/14683))
  * Prevent race in PersistableChannelUniqueQueue.Has ([#14651](https://github.com/go-gitea/gitea/pull/14651)) ([#14676](https://github.com/go-gitea/gitea/pull/14676))
  * HasPreviousCommit causes recursive load of commits unnecessarily ([#14598](https://github.com/go-gitea/gitea/pull/14598)) ([#14649](https://github.com/go-gitea/gitea/pull/14649))
  * Do not assume all 40 char strings are SHA1s ([#14624](https://github.com/go-gitea/gitea/pull/14624)) ([#14648](https://github.com/go-gitea/gitea/pull/14648))
  * Allow org labels to be set with issue templates ([#14593](https://github.com/go-gitea/gitea/pull/14593)) ([#14647](https://github.com/go-gitea/gitea/pull/14647))
  * Accept multiple SSH keys in single LDAP SSHPublicKey attribute ([#13989](https://github.com/go-gitea/gitea/pull/13989)) ([#14607](https://github.com/go-gitea/gitea/pull/14607))
  * Fix bug about ListOptions and stars/watchers pagnation ([#14556](https://github.com/go-gitea/gitea/pull/14556)) ([#14573](https://github.com/go-gitea/gitea/pull/14573))
  * Fix GPG key deletion during account deletion ([#14561](https://github.com/go-gitea/gitea/pull/14561)) ([#14569](https://github.com/go-gitea/gitea/pull/14569))
