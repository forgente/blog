---
date: 2021-08-22T15:50:00+08:00
authors: "zeripath"
title: "Gitea 1.15.0 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.15.0.

We have merged [488](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.15.0+is%3Amerged) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.15.0/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**  
Sample images below.

<!--more-->

|![shirt](/demos/shop/shirt.png)|![hoodie](/demos/shop/hoodie.png)|![ladies](/demos/shop/ladies.png)|
|-|-|-| 
<!-- Do it in markdown, they said. It will be fun, they said. -->


Now, on to the changes!

## Breaking Changes (or potentially breaking)

### :exclamation: Upgrade to the latest version of golang-jwt and increase minimum go to 1.16 ([#16590](https://github.com/go-gitea/gitea/pull/16590)) ([#16606](https://github.com/go-gitea/gitea/pull/16606)) ([#16710](https://github.com/go-gitea/gitea/pull/16710))

The minimum version of Go Gitea can be compiled with has been increased to 1.16 as Go 1.14 and Go 1.15 are no longer supported by the go developers.

### :exclamation: Changed mapping of `:latest` on docker [#16421](https://github.com/go-gitea/gitea/pull/16421) 

The docker tag logic has changed to map `:latest` to match the latest tag on the 1.15 branch and `:dev` to represent the latest build on the `main` branch. Users who wish to use the development version of Gitea - with all its latest features
should switch to use the `:dev` tag for docker. We would like to encourage at least some users to
consider using `:dev`.

### :exclamation: More restrictive app.ini permissions [#16266](https://github.com/go-gitea/gitea/pull/16266) 

The default file permissions mode for `app.ini` has changed to `-rw-------` when Gitea creates this file.

### :exclamation: Webhook Refactors [#16176](https://github.com/go-gitea/gitea/pull/16176) 

Webhook payloads have been changed so that the `Secret` field is no longer passed as part of the payload and the history shows the real URL that was sent in the webhook.

### :exclamation: Asymmetric JWT Signing Key [#16010](https://github.com/go-gitea/gitea/pull/16010) 

We have added asymmetric JWT signing and Gitea will use an asymmetric keypair for JWT signing by default.

* Asymmetric algorithms require a secret asymmetric key pair to be in `JWT_SIGNING_PRIVATE_KEY_FILE` (by default `APP_DATA_PATH/jwt`), a pair will be generated if it is not present. (NB: this was originally in `CUSTOM_PATH` but was changed by [#16227](https://github.com/go-gitea/gitea/pull/16227))
* The original symmetric `JWT_SECRET` will only be used if `JWT_SIGNING_ALGORITHM` is set to `HS256` (previous default), `HS384` or `HS512`.
* As a result of the change of algorithm gitea OAuth2 tokens (and potentially the client secret) will need to be regenerated unless you change your `JWT_SIGNING_ALGORITHM` back to `HS256`.
* Legacy installations of Drone assume a short key length, however as no automated migrations are run by Drone you'll need to do them manually if the column type for `user_oauth_token` and `user_oauth_refresh` are limited to 500 characters.

```sql
-- an example manual migration for Drone database connected to postgresql
alter table users alter column user_oauth_token type bytea using convert_to(user_oauth_token, 'LATIN1');
alter table users alter column user_oauth_refresh type bytea using convert_to(user_oauth_refresh, 'LATIN1');
```

### :exclamation: Clean-up the settings hierarchy for issue_indexer queue [#16001](https://github.com/go-gitea/gitea/pull/16001) 

We have changed the priority of settings below:

* `[queue.issue_indexer]` `TYPE` now overrides `[indexers]` `ISSUE_INDEXER_QUEUE_TYPE`
* `[queue.issue_indexer]` `DATADIR` overrides `[indexers]` `ISSUE_INDEXER_QUEUE_DIR`
* `[queue.issue_indexer]` `CONN_STR` overrides `[indexers]` `ISSUE_INDEXER_QUEUE_CONN_STR`
* `[queue.issue_indexer]` `BATCH_LENGTH` overrides `[indexers]` `ISSUE_INDEXER_QUEUE_BATCH_NUMBER`
* `[queue.issue_indexer]` `LENGTH` overrides `[indexers]` `UPDATE_BUFFER_LEN`

It is not expected that many people will experience effects from this change.

### :exclamation: Change default queue settings to be low go-routines [#15964](https://github.com/go-gitea/gitea/pull/15964) 

We have changed the default configuration for queues to make them low goroutines by default:

* As a result of this PR instead of each queue having their own level db by default, the queues will use a common level db. It is recommended to ensure that queues are empty before upgrading using `gitea manager flush-queues` or on the admin pages.
* Starting workers are now 0 with boost workers at 1. If you have explicitly set BOOST_WORKERS = 0 you will need to explicitly set `WORKERS` to at least 1. Administrators of busy sites should tune their WORKERS, BOOST_WORKERS, & DATADIR parameters as needed.

### :exclamation: Merged assets handler middleware [#15961](https://github.com/go-gitea/gitea/pull/15961)

This PR merges two assets handler
middleware as one and move it before session middleware to reduce unnecessary memory usage. The
additional support for CORS on assets may cause some breakage for sites using CDN assets.
Administrators should change `[cors]` section in the app.ini to add the domains if enabled.

### :exclamation: Rename `StaticUrlPrefix` to `AssetUrlPrefix` [#15779](https://github.com/go-gitea/gitea/pull/15779)

This PR renames the template variable `StaticUrlPrefix` to `AssetUrlPrefix`. Administrators with Custom templates that use the
`StaticUrlPrefix` will need update these to use `AssetUrlPrefix`.

### :exclamation: Use `markup` class for rendering External markup [#15735](https://github.com/go-gitea/gitea/pull/15735) 

This PR essentially changes the `markdown`
css class to `markup`. Administrators with css/less customization targeting the  `.markdown` class
should update these to use `.markup`.

### :exclamation: Update Node to v12 [#15315](https://github.com/go-gitea/gitea/pull/15315) 

This PR increases the minimum required node version for compiling the frontend to v12.

### :exclamation: Add `/assets` as root dir of public files [#15219](https://github.com/go-gitea/gitea/pull/15219) 

This PR moves root directory of public files from `/` to `/assets`.

All pages and resources rendered from `custom/public` will now be rendered at `/assets` instead of `/`. This means that if you have a `impressum.html` - you need to update links to this to `/assets/impressum.html`. Similarly for users of STL renderers and external markup renderers. 

Administrators should check custom templates to ensure that these are correct.

If you have previously placed `robots.txt` within `custom/public` you must move it to `custom` instead.

### :exclamation: Inherit log level in sub log section [#15176](https://github.com/go-gitea/gitea/pull/15176)

Sub loggers will inherit their log level from the main log level - previously these would default to `info`. Administrators should check their log configuration.

### :exclamation: Make links in markdown absolute to the repository not the server [#15088](https://github.com/go-gitea/gitea/pull/15088)

This PR changes the rendering of links in
markdown to make them absolute to the current repository in keeping with Github. This may change
rendering of some pages however, the previous behaviour was not compatible with Github so was a bug.

## Major Features

### OAuth2 auto-register ([#5123](https://github.com/go-gitea/gitea/pull/5123))

auto-registration for OAuth2 users

_Thanks to [**@mgjm**](https://github.com/mgjm)_

### GPG Key Ownership verification with Signed Token ([#14054](https://github.com/go-gitea/gitea/pull/14054))

Prior to this PR, Gitea would only allow a key to be added to a user if one (or more) of the key's identities
match an activated email address for that user. Gitea will then only verify commits if the committer email address
matches an activated email address in the key. This PR provides a slightly different mechanism: if
the user provides a signature for automatically generated token the key will be marked as verified.
Following verification of ownership of a key, commits signed by this key where the committer email address matches an
activated email address for the user will be verified.

Further, the identities that a key will match are now shown on the GPG key page. These are the
identities that are present in the key and were activated for the user at the time of addition of the key to the user.

Thanks to [__@zeripath__](https://github.com/zeripath) for this feature.

### Add LFS Migration and Mirror ([#14726](https://github.com/go-gitea/gitea/pull/14726))

Implemented downloading of remote LFS files with a custom HTTP/Filesystem client. 

![commits](/demos/14726/migrate_lfs.gif)

_Thanks to [**@KN4CK3R**](https://github.com/KN4CK3R)_

### Add Image Diff for SVG files ([#14867](https://github.com/go-gitea/gitea/pull/14867))

Added support for diffing svg images. 

![commits](/demos/14867/svg_diff.png)

_Thanks to [**@KN4CK3R**](https://github.com/KN4CK3R)_

### Add push to remote mirror repository ([#15157](https://github.com/go-gitea/gitea/pull/15157))

Adds the ability to push-mirror a repository to a remote destination.

![commits](/demos/15157/push_mirror.png)

_Thanks to [**@KN4CK3R**](https://github.com/KN4CK3R)_

### Add tag protection ([#15629](https://github.com/go-gitea/gitea/pull/15629))

Protected tags allow control over who has permission to create and update tags.

![commits](/demos/15629/tag_protection.png)

_Thanks to [**@KN4CK3R**](https://github.com/KN4CK3R)_

### Add Tabular Diff for CSV files ([#14661](https://github.com/go-gitea/gitea/pull/14661))

The rendering of csv files does match the diff style.

![commits](/demos/14661/toggle_view.gif)

_Thanks to [**@KN4CK3R**](https://github.com/KN4CK3R)_

### Make tasklist checkboxes clickable ([#15791](https://github.com/go-gitea/gitea/pull/15791))

This PR makes tasklist checkboxes clickable. 

![commits](/demos/15791/tasklist.gif)

_Thanks to [**@KN4CK3R**](https://github.com/KN4CK3R)_

### Email Templates Localization ([#16200](https://github.com/go-gitea/gitea/pull/16200))

Emails are now sent localized to the user's chosen locale. 

Thanks to [__@6543__](https://github.com/6543) for this feature.

### Link to previous blames in file blame page ([#16259](https://github.com/go-gitea/gitea/pull/16259))

Adds a link to each blame hunk, to view the blame of an earlier version of the file

![commits](/demos/16259/link_blame.gif)

_Thanks to [**@noerw**](https://github.com/noerw)_

### Add previous/next buttons to review comments ([#16273](https://github.com/go-gitea/gitea/pull/16273))

Adds buttons to navigate to the previous / next unresolved review comments

![commits](/demos/16273/review_buttons.png)

_Thanks to [**@jpraet**](https://github.com/jpraet)_

## Changelog

### [1.15.0](https://github.com/go-gitea/gitea/releases/tag/v1.15.0) - 2021-08-21

* BREAKING
  * Make app.ini permissions more restrictive ([#16266](https://github.com/go-gitea/gitea/pull/16266))
  * Refactor Webhook + Add X-Hub-Signature ([#16176](https://github.com/go-gitea/gitea/pull/16176))
  * Add asymmetric JWT signing ([#16010](https://github.com/go-gitea/gitea/pull/16010))
  * Clean-up the settings hierarchy for issue_indexer queue ([#16001](https://github.com/go-gitea/gitea/pull/16001))
  * Change default queue settings to be low go-routines ([#15964](https://github.com/go-gitea/gitea/pull/15964))
  * Improve assets handler middleware ([#15961](https://github.com/go-gitea/gitea/pull/15961))
  * Rename StaticUrlPrefix to AssetUrlPrefix ([#15779](https://github.com/go-gitea/gitea/pull/15779))
  * Use a generic markup class to display externally rendered files and diffs ([#15735](https://github.com/go-gitea/gitea/pull/15735))
  * Add frontend testing, require node 12 ([#15315](https://github.com/go-gitea/gitea/pull/15315))
  * Move (custom) assets into subpath `/assets` ([#15219](https://github.com/go-gitea/gitea/pull/15219))
  * Use level config in log section when sub log section not set level ([#15176](https://github.com/go-gitea/gitea/pull/15176))
  * Links in markdown should be absolute to the repository not the server ([#15088](https://github.com/go-gitea/gitea/pull/15088))
  * Upgrade to the latest version of golang-jwt ([#16590](https://github.com/go-gitea/gitea/pull/16590)) ([#16606](https://github.com/go-gitea/gitea/pull/16606))
  * Set minimum supported version of go to 1.16 ([#16710](https://github.com/go-gitea/gitea/pull/16710))
* SECURITY
  * Encrypt LDAP bind password in db with SECRET_KEY ([#15547](https://github.com/go-gitea/gitea/pull/15547))
  * Remove random password in Dockerfiles ([#15362](https://github.com/go-gitea/gitea/pull/15362))
  * Upgrade to the latest version of golang-jwt and increase minimum go to 1.15 ([#16590](https://github.com/go-gitea/gitea/pull/16590)) ([#16606](https://github.com/go-gitea/gitea/pull/16606))
  * Correctly create of git-daemon-export-ok files ([#16508](https://github.com/go-gitea/gitea/pull/16508)) ([#16514](https://github.com/go-gitea/gitea/pull/16514))
  * Don't show private user's repo in explore view ([#16550](https://github.com/go-gitea/gitea/pull/16550)) ([#16554](https://github.com/go-gitea/gitea/pull/16554))
  * Update node tar dependency to 6.1.6 ([#16622](https://github.com/go-gitea/gitea/pull/16622)) ([#16623](https://github.com/go-gitea/gitea/pull/16623))
* FEATURES
  * Update Go-Git to take advantage of LargeObjectThreshold ([#16316](https://github.com/go-gitea/gitea/pull/16316))
  * Support custom mime type mapping for text files ([#16304](https://github.com/go-gitea/gitea/pull/16304))
  * Link to previous blames in file blame page ([#16259](https://github.com/go-gitea/gitea/pull/16259))
  * Add LRU mem cache implementation ([#16226](https://github.com/go-gitea/gitea/pull/16226))
  * Localize Email Templates ([#16200](https://github.com/go-gitea/gitea/pull/16200))
  * Make command in authorized keys a template ([#16003](https://github.com/go-gitea/gitea/pull/16003))
  * Add possibility to make branch in branch page ([#15960](https://github.com/go-gitea/gitea/pull/15960))
  * Add email headers ([#15939](https://github.com/go-gitea/gitea/pull/15939))
  * Make tasklist checkboxes clickable ([#15791](https://github.com/go-gitea/gitea/pull/15791))
  * Add selecting tags on the compare page ([#15723](https://github.com/go-gitea/gitea/pull/15723))
  * Add cron job to delete old actions from database ([#15688](https://github.com/go-gitea/gitea/pull/15688))
  * On open repository open common cat file batch and batch-check ([#15667](https://github.com/go-gitea/gitea/pull/15667))
  * Add tag protection ([#15629](https://github.com/go-gitea/gitea/pull/15629))
  * Add push to remote mirror repository ([#15157](https://github.com/go-gitea/gitea/pull/15157))
  * Add Image Diff for SVG files ([#14867](https://github.com/go-gitea/gitea/pull/14867))
  * Add dashboard milestone search and repo milestone search by name. ([#14866](https://github.com/go-gitea/gitea/pull/14866))
  * Add LFS Migration and Mirror ([#14726](https://github.com/go-gitea/gitea/pull/14726))
  * Improve notifications for WIP draft PR's ([#14663](https://github.com/go-gitea/gitea/pull/14663))
  * Disable Stars config option ([#14653](https://github.com/go-gitea/gitea/pull/14653))
  * GPG Key Ownership verification with Signed Token ([#14054](https://github.com/go-gitea/gitea/pull/14054))
  * OAuth2 auto-register ([#5123](https://github.com/go-gitea/gitea/pull/5123))
* API
  * Return updated repository when changing repository using API ([#16420](https://github.com/go-gitea/gitea/pull/16420))
  * Let branch/tag name be a valid ref to get CI status ([#16400](https://github.com/go-gitea/gitea/pull/16400))
  * Add endpoint to get commits of PR ([#16300](https://github.com/go-gitea/gitea/pull/16300))
  * Allow COMMENT reviews to not specify a body ([#16229](https://github.com/go-gitea/gitea/pull/16229))
  * Add subject-type filter to list notification API endpoints ([#16177](https://github.com/go-gitea/gitea/pull/16177))
  * ListReleases add filter for draft and pre-releases ([#16175](https://github.com/go-gitea/gitea/pull/16175))
  * ListIssues add more filters ([#16174](https://github.com/go-gitea/gitea/pull/16174))
  * Issue Search Add filter for MilestoneNames ([#16173](https://github.com/go-gitea/gitea/pull/16173))
  * GET / SET User Settings ([#16169](https://github.com/go-gitea/gitea/pull/16169))
  * Expose repo.GetReviewers() & repo.GetAssignees() ([#16168](https://github.com/go-gitea/gitea/pull/16168))
  * User expose counters ([#16167](https://github.com/go-gitea/gitea/pull/16167))
  * Add repoGetTag ([#16166](https://github.com/go-gitea/gitea/pull/16166))
  * Add repoCreateTag ([#16165](https://github.com/go-gitea/gitea/pull/16165))
  * Creating a repo from a template repo via API ([#15958](https://github.com/go-gitea/gitea/pull/15958))
  * Add Active and ProhibitLogin to API ([#15689](https://github.com/go-gitea/gitea/pull/15689))
  * Add Location, Website and Description to API ([#15675](https://github.com/go-gitea/gitea/pull/15675))
  * Expose resolver via API ([#15167](https://github.com/go-gitea/gitea/pull/15167))
  * Swagger AccessToken fixes ([#16574](https://github.com/go-gitea/gitea/pull/16574)) ([#16597](https://github.com/go-gitea/gitea/pull/16597))
  * Set AllowedHeaders on API CORS handler ([#16524](https://github.com/go-gitea/gitea/pull/16524)) ([#16618](https://github.com/go-gitea/gitea/pull/16618))
* ENHANCEMENTS
  * Support HTTP/2 in Let's Encrypt ([#16371](https://github.com/go-gitea/gitea/pull/16371))
  * Introduce NotifySubjectType ([#16320](https://github.com/go-gitea/gitea/pull/16320))
  * Add forge emojies ([#16296](https://github.com/go-gitea/gitea/pull/16296))
  * Implemented head_commit for webhooks ([#16282](https://github.com/go-gitea/gitea/pull/16282))
  * Upgrade Gliderlabs SSH to 0.3.3 and add FailedConnectionCallback ([#16278](https://github.com/go-gitea/gitea/pull/16278))
  * Add previous/next buttons to review comments ([#16273](https://github.com/go-gitea/gitea/pull/16273))
  * Review comments: break-word for long file names ([#16272](https://github.com/go-gitea/gitea/pull/16272))
  * Add configuration to restrict allowed user visibility modes ([#16271](https://github.com/go-gitea/gitea/pull/16271))
  * Add scroll-margin-top to account for sticky header ([#16269](https://github.com/go-gitea/gitea/pull/16269))
  * Add --quiet and --verbose to gitea web to control initial logging ([#16260](https://github.com/go-gitea/gitea/pull/16260))
  * Use gitea logging module for git module ([#16243](https://github.com/go-gitea/gitea/pull/16243))
  * Add tests for all webhooks ([#16214](https://github.com/go-gitea/gitea/pull/16214))
  * Add button to delete undeleted repositories from failed migrations ([#16197](https://github.com/go-gitea/gitea/pull/16197))
  * Speed up git diff highlight generation ([#16180](https://github.com/go-gitea/gitea/pull/16180))
  * Add OpenID claims "profile" and "email". ([#16141](https://github.com/go-gitea/gitea/pull/16141))
  * Reintroduce squash merge default comment as a config setting ([#16134](https://github.com/go-gitea/gitea/pull/16134))
  * Add sanitizer rules per renderer ([#16110](https://github.com/go-gitea/gitea/pull/16110))
  * Improve performance of dashboard list orgs ([#16099](https://github.com/go-gitea/gitea/pull/16099))
  * Refactor assert statements in tests ([#16089](https://github.com/go-gitea/gitea/pull/16089))
  * Add sso.Group, context.Auth, context.APIAuth to allow auth special routes ([#16086](https://github.com/go-gitea/gitea/pull/16086))
  * Remove unnecessary goroutine ([#16080](https://github.com/go-gitea/gitea/pull/16080))
  * Add attachments for PR reviews ([#16075](https://github.com/go-gitea/gitea/pull/16075))
  * Make the github migration less rate limit waiting to get comment per page from repository but not per issue ([#16070](https://github.com/go-gitea/gitea/pull/16070))
  * Add Visible modes function from Organisation to Users too ([#16069](https://github.com/go-gitea/gitea/pull/16069))
  * Add checkbox to delete pull branch after successful merge ([#16049](https://github.com/go-gitea/gitea/pull/16049))
  * Make commit info cancelable ([#16032](https://github.com/go-gitea/gitea/pull/16032))
  * Make modules/context.Context a context.Context ([#16031](https://github.com/go-gitea/gitea/pull/16031))
  * Unified custom config creation ([#16012](https://github.com/go-gitea/gitea/pull/16012))
  * Make sshd_config more flexible regarding connections ([#16009](https://github.com/go-gitea/gitea/pull/16009))
  * Append to existing trailers in generated squash commit message ([#15980](https://github.com/go-gitea/gitea/pull/15980))
  * Always store primary email address into email_address table and also the state ([#15956](https://github.com/go-gitea/gitea/pull/15956))
  * Load issue/PR context popup data only when needed ([#15955](https://github.com/go-gitea/gitea/pull/15955))
  * Remove remaining fontawesome usage in templates ([#15952](https://github.com/go-gitea/gitea/pull/15952))
  * Remove fomantic accordion module ([#15951](https://github.com/go-gitea/gitea/pull/15951))
  * Small refactoring of modules/private ([#15947](https://github.com/go-gitea/gitea/pull/15947))
  * Double the avatar size factor ([#15941](https://github.com/go-gitea/gitea/pull/15941))
  * Add curl to rootless docker image ([#15908](https://github.com/go-gitea/gitea/pull/15908))
  * Replace clipboard.js with async clipboard api ([#15899](https://github.com/go-gitea/gitea/pull/15899))
  * Allow custom highlight mapping beyond file extensions ([#15808](https://github.com/go-gitea/gitea/pull/15808))
  * Add trace logging to SSO methods ([#15803](https://github.com/go-gitea/gitea/pull/15803))
  * Refactor routers directory ([#15800](https://github.com/go-gitea/gitea/pull/15800))
  * Allow only internal registration ([#15795](https://github.com/go-gitea/gitea/pull/15795))
  * Add a new internal hook to save ssh log ([#15787](https://github.com/go-gitea/gitea/pull/15787))
  * Respect default merge message syntax when parsing item references ([#15772](https://github.com/go-gitea/gitea/pull/15772))
  * OAuth2 login: Set account link to "login" as default behavior ([#15768](https://github.com/go-gitea/gitea/pull/15768))
  * Use single shared random string generation function ([#15741](https://github.com/go-gitea/gitea/pull/15741))
  * Hold the event source when there are no listeners ([#15725](https://github.com/go-gitea/gitea/pull/15725))
  * Code comments improvements ([#15722](https://github.com/go-gitea/gitea/pull/15722))
  * Provide OIDC compliant user info endpoint ([#15721](https://github.com/go-gitea/gitea/pull/15721))
  * Fix webkit calendar icon color on arc-green ([#15713](https://github.com/go-gitea/gitea/pull/15713))
  * Improve Light Chroma style ([#15699](https://github.com/go-gitea/gitea/pull/15699))
  * Only use boost workers for leveldb shadow queues ([#15696](https://github.com/go-gitea/gitea/pull/15696))
  * Add compare tag dropdown to releases page ([#15695](https://github.com/go-gitea/gitea/pull/15695))
  * Add caret styling CSS ([#15651](https://github.com/go-gitea/gitea/pull/15651))
  * Remove x-ua-compatible meta tag ([#15640](https://github.com/go-gitea/gitea/pull/15640))
  * Refactor of link creation ([#15619](https://github.com/go-gitea/gitea/pull/15619))
  * Add a new table issue_index to store the max issue index so that issue could be deleted with no duplicated index ([#15599](https://github.com/go-gitea/gitea/pull/15599))
  * Rewrite of the LFS server ([#15523](https://github.com/go-gitea/gitea/pull/15523))
  * Display more repository type on admin repository management ([#15440](https://github.com/go-gitea/gitea/pull/15440))
  * Remove usage of some JS globals ([#15378](https://github.com/go-gitea/gitea/pull/15378))
  * SHA in merged commit comment should be rendered ui sha ([#15376](https://github.com/go-gitea/gitea/pull/15376))
  * Add well-known config for OIDC ([#15355](https://github.com/go-gitea/gitea/pull/15355))
  * Use route rather than use thus reducing the number of stack frames ([#15301](https://github.com/go-gitea/gitea/pull/15301))
  * Code Formats, Nits & Unused Func/Var deletions ([#15286](https://github.com/go-gitea/gitea/pull/15286))
  * Let package git depend on setting but not opposite ([#15241](https://github.com/go-gitea/gitea/pull/15241))
  * Fixed sanitize errors ([#15240](https://github.com/go-gitea/gitea/pull/15240))
  * response simple text message for not html request when 404 ([#15229](https://github.com/go-gitea/gitea/pull/15229))
  * Remove file-loader dependency ([#15196](https://github.com/go-gitea/gitea/pull/15196))
  * Refactor renders ([#15175](https://github.com/go-gitea/gitea/pull/15175))
  * Add mimetype mapping settings ([#15133](https://github.com/go-gitea/gitea/pull/15133))
  * Add Status Updates whilst Gitea migrations are occurring ([#15076](https://github.com/go-gitea/gitea/pull/15076))
  * Reload locales in initialisation if needed by utilizing i18n.Reset ([#15073](https://github.com/go-gitea/gitea/pull/15073))
  * Counterwork seemingly unclickable repo button labels ([#15064](https://github.com/go-gitea/gitea/pull/15064))
  * Add DefaultMergeStyle option to repository ([#14789](https://github.com/go-gitea/gitea/pull/14789))
  * Added support for gopher URLs. ([#14749](https://github.com/go-gitea/gitea/pull/14749))
  * Rework repository archive ([#14723](https://github.com/go-gitea/gitea/pull/14723))
  * Add links to toggle WIP status ([#14677](https://github.com/go-gitea/gitea/pull/14677))
  * Add Tabular Diff for CSV files ([#14661](https://github.com/go-gitea/gitea/pull/14661))
  * Use milestone deadline when sorting issues ([#14551](https://github.com/go-gitea/gitea/pull/14551))
* BUGFIXES
  * Fix invalid params and typo of email templates ([#16394](https://github.com/go-gitea/gitea/pull/16394))
  * Fix activation of primary email addresses ([#16385](https://github.com/go-gitea/gitea/pull/16385))
  * Fix calculation for finalPage in repo-search component ([#16382](https://github.com/go-gitea/gitea/pull/16382))
  * Specify user in rootless container numerically ([#16361](https://github.com/go-gitea/gitea/pull/16361))
  * Detect encoding changes while parsing diff ([#16330](https://github.com/go-gitea/gitea/pull/16330))
  * Fix U2F error reasons always hidden ([#16327](https://github.com/go-gitea/gitea/pull/16327))
  * Prevent zombie processes ([#16314](https://github.com/go-gitea/gitea/pull/16314))
  * Escape reference to `user` table in models.SearchEmails ([#16313](https://github.com/go-gitea/gitea/pull/16313))
  * Fix default push instructions on empty repos ([#16302](https://github.com/go-gitea/gitea/pull/16302))
  * Fix modified files list in webhooks when there is a space ([#16288](https://github.com/go-gitea/gitea/pull/16288))
  * Fix webhook commits wrong hash on HEAD reset ([#16283](https://github.com/go-gitea/gitea/pull/16283))
  * Fuzzer finds an NPE due to incorrect URLPrefix ([#16249](https://github.com/go-gitea/gitea/pull/16249))
  * Don't WARN log UserNotExist errors on ExternalUserLogin failure ([#16238](https://github.com/go-gitea/gitea/pull/16238))
  * Do not show No match found for tribute ([#16231](https://github.com/go-gitea/gitea/pull/16231))
  * Fix "Copy Link" for pull requests ([#16230](https://github.com/go-gitea/gitea/pull/16230))
  * Fix diff expansion is missing final line in a file ([#16222](https://github.com/go-gitea/gitea/pull/16222))
  * Fix private repo permission problem ([#16142](https://github.com/go-gitea/gitea/pull/16142))
  * Fix not able to update local created non-urlencoded wiki pages ([#16139](https://github.com/go-gitea/gitea/pull/16139))
  * More efficiently parse shas for shaPostProcessor ([#16101](https://github.com/go-gitea/gitea/pull/16101))
  * Fix `doctor --run check-db-consistency --fix` with label fix ([#16094](https://github.com/go-gitea/gitea/pull/16094))
  * Prevent webhook action buttons from shifting ([#16087](https://github.com/go-gitea/gitea/pull/16087))
  * Change default TMPDIR path in rootless containers ([#16077](https://github.com/go-gitea/gitea/pull/16077))
  * Fix typo and add TODO notice ([#16064](https://github.com/go-gitea/gitea/pull/16064))
  * Use git log name-status in get last commit ([#16059](https://github.com/go-gitea/gitea/pull/16059))
  * Fix 500 Error with branch and tag sharing the same name ([#16040](https://github.com/go-gitea/gitea/pull/16040))
  * Fix get tag when migration ([#16014](https://github.com/go-gitea/gitea/pull/16014))
  * Add custom emoji support ([#16004](https://github.com/go-gitea/gitea/pull/16004))
  * Use filepath.ToSlash and Join in indexer defaults and queues ([#15971](https://github.com/go-gitea/gitea/pull/15971))
  * Add permission check for ``GenerateRepository`` ([#15946](https://github.com/go-gitea/gitea/pull/15946))
  * Ensure settings for Service and Mailer are read on the install page ([#15943](https://github.com/go-gitea/gitea/pull/15943))
  * Fix layout of milestone view ([#15927](https://github.com/go-gitea/gitea/pull/15927))
  * Unregister non-matching serviceworkers ([#15834](https://github.com/go-gitea/gitea/pull/15834))
  * Multiple Queue improvements: LevelDB Wait on empty, shutdown empty shadow level queue, reduce goroutines etc ([#15693](https://github.com/go-gitea/gitea/pull/15693))
  * Attachment support repository route ([#15580](https://github.com/go-gitea/gitea/pull/15580))
  * Fix missing icons and colorpicker when mounted on suburl ([#15501](https://github.com/go-gitea/gitea/pull/15501))
  * Create a session on ReverseProxy and ensure that ReverseProxy users cannot change username ([#15304](https://github.com/go-gitea/gitea/pull/15304))
  * Prevent double-login for Git HTTP and LFS and simplify login ([#15303](https://github.com/go-gitea/gitea/pull/15303))
  * Resolve Object { type: "error", data: undefined } in stopwatch.js ([#15278](https://github.com/go-gitea/gitea/pull/15278))
  * Fix heatmap activity ([#15252](https://github.com/go-gitea/gitea/pull/15252))
  * Remove vendored copy of fomantic-dropdown ([#15193](https://github.com/go-gitea/gitea/pull/15193))
  * Update repository size on cron gc task ([#15177](https://github.com/go-gitea/gitea/pull/15177))
  * Add NeedPostProcess for Parser interface to improve performance of csv parser and some external parser ([#15153](https://github.com/go-gitea/gitea/pull/15153))
  * Add code block highlight to orgmode back ([#14222](https://github.com/go-gitea/gitea/pull/14222))
  * Remove User.GetOrganizations() ([#14032](https://github.com/go-gitea/gitea/pull/14032))
  * Restore Accessibility for Dropdown ([#16576](https://github.com/go-gitea/gitea/pull/16576)) ([#16617](https://github.com/go-gitea/gitea/pull/16617))
  * Pass down SignedUserName down to AccessLogger context ([#16605](https://github.com/go-gitea/gitea/pull/16605)) ([#16616](https://github.com/go-gitea/gitea/pull/16616))
  * Fix table alignment in markdown ([#16596](https://github.com/go-gitea/gitea/pull/16596)) ([#16602](https://github.com/go-gitea/gitea/pull/16602))
  * Fix 500 on first wiki page ([#16586](https://github.com/go-gitea/gitea/pull/16586)) ([#16598](https://github.com/go-gitea/gitea/pull/16598))
  * Lock goth/gothic and Re-attempt OAuth2 registration on login if registration failed at startup ([#16564](https://github.com/go-gitea/gitea/pull/16564)) ([#16570](https://github.com/go-gitea/gitea/pull/16570))
  * Upgrade levelqueue to v0.4.0 ([#16560](https://github.com/go-gitea/gitea/pull/16560)) ([#16561](https://github.com/go-gitea/gitea/pull/16561))
  * Handle too long PR titles correctly ([#16517](https://github.com/go-gitea/gitea/pull/16517)) ([#16549](https://github.com/go-gitea/gitea/pull/16549))
  * Fix data race in bleve indexer ([#16474](https://github.com/go-gitea/gitea/pull/16474)) ([#16509](https://github.com/go-gitea/gitea/pull/16509))
  * Restore CORS on git smart http protocol ([#16496](https://github.com/go-gitea/gitea/pull/16496)) ([#16506](https://github.com/go-gitea/gitea/pull/16506))
  * Fix race in log ([#16490](https://github.com/go-gitea/gitea/pull/16490)) ([#16505](https://github.com/go-gitea/gitea/pull/16505))
  * Fix prepareWikiFileName to respect existing unescaped files ([#16487](https://github.com/go-gitea/gitea/pull/16487)) ([#16498](https://github.com/go-gitea/gitea/pull/16498))
  * Make cancel from CatFileBatch and CatFileBatchCheck wait for the command to end ([#16479](https://github.com/go-gitea/gitea/pull/16479)) ([#16480](https://github.com/go-gitea/gitea/pull/16480))
  * Update notification table with only latest data ([#16445](https://github.com/go-gitea/gitea/pull/16445)) ([#16469](https://github.com/go-gitea/gitea/pull/16469))
  * Fix crash following ldap authentication update ([#16447](https://github.com/go-gitea/gitea/pull/16447)) ([#16448](https://github.com/go-gitea/gitea/pull/16448))
  * Fix direct creation of external users on admin page (partial [#16612](https://github.com/go-gitea/gitea/pull/16612)) ([#16613](https://github.com/go-gitea/gitea/pull/16613))
  * Prevent 500 on draft releases without tag ([#16634](https://github.com/go-gitea/gitea/pull/16634)) ([#16636](https://github.com/go-gitea/gitea/pull/16636))
  * Restore creation of git-daemon-export-ok files ([#16508](https://github.com/go-gitea/gitea/pull/16508)) ([#16514](https://github.com/go-gitea/gitea/pull/16514))
  * Fix data race in bleve indexer ([#16474](https://github.com/go-gitea/gitea/pull/16474)) ([#16509](https://github.com/go-gitea/gitea/pull/16509))
  * Restore CORS on git smart http protocol ([#16496](https://github.com/go-gitea/gitea/pull/16496)) ([#16506](https://github.com/go-gitea/gitea/pull/16506))
  * Fix race in log ([#16490](https://github.com/go-gitea/gitea/pull/16490)) ([#16505](https://github.com/go-gitea/gitea/pull/16505))
  * Fix prepareWikiFileName to respect existing unescaped files ([#16487](https://github.com/go-gitea/gitea/pull/16487)) ([#16498](https://github.com/go-gitea/gitea/pull/16498))
  * Make cancel from CatFileBatch and CatFileBatchCheck wait for the command to end ([#16479](https://github.com/go-gitea/gitea/pull/16479)) ([#16480](https://github.com/go-gitea/gitea/pull/16480))
  * Update notification table with only latest data ([#16445](https://github.com/go-gitea/gitea/pull/16445)) ([#16469](https://github.com/go-gitea/gitea/pull/16469))
  * Fix crash following ldap authentication update ([#16447](https://github.com/go-gitea/gitea/pull/16447)) ([#16448](https://github.com/go-gitea/gitea/pull/16448))
  * Restore compatibility with SQLServer 2008 R2 in migrations ([#16638](https://github.com/go-gitea/gitea/pull/16638))
  * Fix direct creation of external users on admin page ([#16613](https://github.com/go-gitea/gitea/pull/16613))
  * Fix go-git implementation of GetNote when passed a non-existent commit ([#16658](https://github.com/go-gitea/gitea/pull/16658)) ([#16659](https://github.com/go-gitea/gitea/pull/16659))
  * Fix NPE in fuzzer ([#16680](https://github.com/go-gitea/gitea/pull/16680)) ([#16682](https://github.com/go-gitea/gitea/pull/16682))
  * Set issue_index when finishing migration ([#16685](https://github.com/go-gitea/gitea/pull/16685)) ([#16687](https://github.com/go-gitea/gitea/pull/16687))
  * Skip patch download when no patch file exists ([#16356](https://github.com/go-gitea/gitea/pull/16356)) ([#16681](https://github.com/go-gitea/gitea/pull/16681))
  * Ensure empty lines are copiable and final new line too ([#16678](https://github.com/go-gitea/gitea/pull/16678)) ([#16692](https://github.com/go-gitea/gitea/pull/16692))
  * Fix wrong user in OpenID response ([#16736](https://github.com/go-gitea/gitea/pull/16736)) ([#16741](https://github.com/go-gitea/gitea/pull/16741))
  * Do not use thin scrollbars on Firefox ([#16738](https://github.com/go-gitea/gitea/pull/16738)) ([#16745](https://github.com/go-gitea/gitea/pull/16745))
  * Recreate Tables should Recreate indexes on MySQL ([#16718](https://github.com/go-gitea/gitea/pull/16718)) ([#16739](https://github.com/go-gitea/gitea/pull/16739))
  * Keep attachments on tasklist update ([#16750](https://github.com/go-gitea/gitea/pull/16750)) ([#16757](https://github.com/go-gitea/gitea/pull/16757))
* TESTING
  * Bump `postgres` and `mysql` versions ([#15710](https://github.com/go-gitea/gitea/pull/15710))
  * Add tests for clone from wiki ([#15513](https://github.com/go-gitea/gitea/pull/15513))
  * Fix Benchmark tests, remove a broken one & add two new  ([#15250](https://github.com/go-gitea/gitea/pull/15250))
  * Create Proper Migration tests ([#15116](https://github.com/go-gitea/gitea/pull/15116))
* TRANSLATION
  * Use a special name for update default branch on repository setting ([#15893](https://github.com/go-gitea/gitea/pull/15893))
  * Fix mirror_lfs source string in en-US locale ([#15369](https://github.com/go-gitea/gitea/pull/15369))
* BUILD
  * Upgrade xorm to v1.1.1 ([#16339](https://github.com/go-gitea/gitea/pull/16339))
  * Disable legal comments in esbuild ([#15929](https://github.com/go-gitea/gitea/pull/15929))
  * Switch to Node 16 to build fronted  ([#15804](https://github.com/go-gitea/gitea/pull/15804))
  * Use esbuild to minify CSS ([#15756](https://github.com/go-gitea/gitea/pull/15756))
  * Use binary version of revive linter ([#15739](https://github.com/go-gitea/gitea/pull/15739))
  * Fix: npx webpack make: *** [Makefile:699: public/js/index.js] Error -… ([#15465](https://github.com/go-gitea/gitea/pull/15465))
  * Stop packaging node_modules in release tarballs ([#15273](https://github.com/go-gitea/gitea/pull/15273))
  * Introduce esbuild on webpack ([#14578](https://github.com/go-gitea/gitea/pull/14578))
* DOCS
  * Update queue workers documentation ([#15999](https://github.com/go-gitea/gitea/pull/15999))
  * Comment out app.example.ini ([#15807](https://github.com/go-gitea/gitea/pull/15807))
  * Improve logo customization docs ([#15754](https://github.com/go-gitea/gitea/pull/15754))
  * Add some response status on api docs ([#15399](https://github.com/go-gitea/gitea/pull/15399))
  * Rework Token API comments ([#15162](https://github.com/go-gitea/gitea/pull/15162))
  * Add better errors for disabled account recovery ([#15117](https://github.com/go-gitea/gitea/pull/15117))
* MISC
  * Remove utf8 option from installation page ([#16126](https://github.com/go-gitea/gitea/pull/16126))
  * Use Wants= over Requires= in systemd file ([#15897](https://github.com/go-gitea/gitea/pull/15897))

### … or reporting bugs

If you lack the time or knowledge to do any of the above, just using Gitea and sharing the word is enough to make us happy! One thing you can always do is to report any bugs you find on the [Gitea issue tracker](https://github.com/go-gitea/gitea/issues).

Before opening an issue, read the [contribution guidelines about reporting bugs](https://github.com/go-gitea/gitea/blob/master/CONTRIBUTING.md#bug-reports). After opening an issue, try to stick around a while to answer any questions we might have. Replies greatly help us find the root cause of an issue.

## Thanks

This release would not have been possible without the pull requests from the following people:

* [@4y8](https://github.com/4y8)
* [@6543](https://github.com/6543)
* [@BLumia](https://github.com/BLumia)
* [@BjoernAkAManf](https://github.com/BjoernAkAManf)
* [@CL-Jeremy](https://github.com/CL-Jeremy)
* [@EndrII](https://github.com/EndrII)
* [@Exagone313](https://github.com/Exagone313)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@Meano](https://github.com/Meano)
* [@NLH-Software](https://github.com/NLH-Software)
* [@Run2948](https://github.com/Run2948)
* [@Viktor-Yakovchuk](https://github.com/Viktor-Yakovchuk)
* [@a1012112796](https://github.com/a1012112796)
* [@adyanth](https://github.com/adyanth)
* [@bminer](https://github.com/bminer)
* [@delvh](https://github.com/delvh)
* [@fnetX](https://github.com/fnetX)
* [@ianw](https://github.com/ianw)
* [@ibotty](https://github.com/ibotty)
* [@jhult](https://github.com/jhult)
* [@johanvdw](https://github.com/johanvdw)
* [@jolheiser](https://github.com/jolheiser)
* [@jpraet](https://github.com/jpraet)
* [@jtran](https://github.com/jtran)
* [@justusbunsi](https://github.com/justusbunsi)
* [@kdumontnu](https://github.com/kdumontnu)
* [@koalp](https://github.com/koalp)
* [@lafriks](https://github.com/lafriks)
* [@louzadod](https://github.com/louzadod)
* [@lunny](https://github.com/lunny)
* [@mayswind](https://github.com/mayswind)
* [@mgjm](https://github.com/mgjm)
* [@mlpo](https://github.com/mlpo)
* [@nek0bit](https://github.com/nek0bit)
* [@nils91](https://github.com/nils91)
* [@nitul1991](https://github.com/nitul1991)
* [@noerw](https://github.com/noerw)
* [@nsmith5](https://github.com/nsmith5)
* [@parnic](https://github.com/parnic)
* [@pat-s](https://github.com/pat-s)
* [@rogerluo410](https://github.com/rogerluo410)
* [@sebastian-sauer](https://github.com/sebastian-sauer)
* [@sergey-dryabzhinsky](https://github.com/sergey-dryabzhinsky)
* [@siddweiker](https://github.com/siddweiker)
* [@silverwind](https://github.com/silverwind)
* [@sotho](https://github.com/sotho)
* [@stanthetiger](https://github.com/stanthetiger)
* [@stecman](https://github.com/stecman)
* [@szatyinadam](https://github.com/szatyinadam)
* [@techknowlogick](https://github.com/techknowlogick)
* [@tiqwab](https://github.com/tiqwab)
* [@tomaswarynyca](https://github.com/tomaswarynyca)
* [@typeless](https://github.com/typeless)
* [@zeripath](https://github.com/zeripath)
