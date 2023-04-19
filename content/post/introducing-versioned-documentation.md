---
date: "2023-03-27T13:00:00+01:00"
author: "techknowlogick"
title: "Introducing Versioned Documentation"
tags: ["docs"]
draft: false
---

The [documentation site](https://docs.gitea.io) has hosted the nightly documentation for the project for a long time now.
This works in the majority of cases when someone is referring to the docs to support their Gitea instance.
However, sometimes when a highly anticipated feature is merged into the development branch and the documentation is included, users who may not keep up with the release cycle run into problems when attempting to activate or configure functionality that isn't yet in a stable release.
For example, as new package registries have been added, some didn't have hints as to which version they were added in, and we subsequently became swamped with questions why the newly added package registry was not present in their instance.

We have been working on versioned documentation for the past year, so that users can access the documentation that matches the version of Gitea they are using, ensuring that they get accurate and up-to-date information.

The new documentation site is built using [Docusaurus](https://docusaurus.io/), and is deployed through Gitea Actions. Thanks to the Docusaurus team for their work building docusaurus. Docusaurus is one of the upstream projects that Gitea sponsors, and you can also sponsor them on [Open Collective](https://opencollective.com/docusaurus).

Translations are currently a work in progress.
We are working with the translators on adding the documentation to the translation tool, so that translated documentation can be kept up to date.

Please browse the [new documentation site](https://docs.gitea.com) at https://docs.gitea.com, and report any errors/issues to the [repo](https://gitea.com/gitea/gitea-docusaurus). Redirects from the old documentation site will be put in place over the next month.
