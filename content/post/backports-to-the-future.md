---
date: 2023-04-23T10:10:00+00:00
authors: "techknowlogick"
title: "Back(ports) to the future!"
tags: ["backporter"]
draft: false
---

In working towards maintaining an LTS version of Gitea, one of the blockers was to be able to efficiently backport pull requests, for bug fixes and other changes.
One of Gitea's maintainers, [yardenshoham](https://github.com/yardenshoham), in an effort to improve their development workflow created a tool to help automate backports.
A side-effect of this effort is that this tool can not only be used to backport just for his pull-requests, but most pull requests that need a backport too.

We are enormously thankful for his effort in creating this tool, as it has allowed numerous (a few hundred at last count) backports, and increased development velocity.
As well, with the tool being open source it has allowed others to provide enhancements.

Feel free to check out [the backporter repo](https://github.com/GiteaBot/gitea-backporter).
You might even want to adapt and use it for your own (open source) project.
