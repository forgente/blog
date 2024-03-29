---
date: 2024-03-28T10:10:00+00:00
authors: "techknowlogick"
title: "So long jQuery, and thanks for all the fish"
tags: ["roadmap", "frontend"]
draft: false
---

As part of our extended roadmap to reduce technical debt and unify frontend technologies, many pull requests are being made to achieve this. We would like to celebrate the significant work done to remove a significant portion of jQuery in our codebase and the start of the switch to using Tailwind CSS. You'll start to see a significant amount of this work in the upcoming 1.22 release of Gitea.

The project would like to thank maintainers [yardenshoham](https://gitea.com/yardenshoham) and [silverwind](https://gitea.com/silverwind) specifically for their leadership and significant effort in achieving these goals. Also, a big thank you to the other maintainers who have reviewed the many pull requests.

We would also like to thank the creators and maintainers of jQuery, Fomantic-UI, and Semantic-UI which we have used for many years, and while the usage of these projects in Gitea will be going away, they have powered Gitea's interface for almost an entire decade.

Switching away from using jQuery will allow Gitea to utilize native browser functionality for javascript without having to have the additional code included to shim functionality for browsers that are no longer supported by the project. Removing Fomantic-UI entirely will save us ~500kB of JS, which will give us massive speed gains.

As a part of our frontend refactoring, another change that will come in 1.22 is the integration of [HTMX](https://htmx.org/) into the user interface to allow for server-side rendering of dynamic HTML elements. This means that we can rely on the server for rendering templates without having the JavaScript frameworks having to keep track of state in addition to the backend.