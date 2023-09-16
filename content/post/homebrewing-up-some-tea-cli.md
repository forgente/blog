---
date: 2023-09-15T10:10:00+00:00
authors: "techknowlogick"
title: "(Home)brewing up some Tea (CLI)"
tags: ["tools", "cli", "brew", "homebrew", "tea"]
draft: false
---

Thanks to our homebrew tap maintainer [chenrui](https://gitea.com/chenrui), both Gitea and the tea cli have been added to the upstream official [homebrew-core](https://github.com/homebrew/homebrew-core) repository. This means that you can now install Gitea and the tea cli with a simple `brew install gitea` or `brew install tea` without first having to add our tap.

A pointer has been added to our tap so that homebrew will automatically redirect to the official homebrew-core formulae for Gitea and tea cli.

There are still some tools that remain in our tap, such as `act_runner` and our `changelog` tool.