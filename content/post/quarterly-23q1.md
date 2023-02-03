---
date: "2023-02-03T09:06:54+07:00"
author: "Gitea"
title: "Gitea Quarterly Report 23Q1"
tags: ["quarterly"]
draft: false
---

Happy new year! As is tradition, the Gitea project conducted its yearly election at the end of December to decide the ownership team for 2023.  
To ensure no one felt pressured to vote a certain way, this year's election utilized the [votesup.eu](https://votesup.eu/info) platform to conduct the voting.  
Thanks to votesUP, which allows for election observers, we were able to have enhanced oversight and verification of the vote.

## Election Results
The results of the ownership election yielded the same ownership team of the past year, where [@techknowlogick](https://gitea.com/techknowlogick), [@lunny](https://gitea.com/lunny), and [@zeripath](https://gitea.com/zeripath) were elected.  
As a followup from a [previous post](https://blog.gitea.io/2022/10/a-message-from-lunny-on-gitea-ltd.-and-the-gitea-project/), the maintainership team of the Gitea project has been in discussion over the past couple of months around what the future governance of the project looks like. These discussions resulted in the proposal of a governance charter for the project which was also voted on, and was passed with overwhelming support.  
We'd like to send a sincere thank you to everyone who reached out and provided assistance and their experience with this process.  
The governance charter proposed a technical oversight comittee (TOC) which expands the ownership team of the Gitea project from the current three elected positions to six positions, where three would be elected as it happened over past years, and the other three would consist of appointed members from the company.

With this new TOC in place, both [@lunny](https://gitea.com/lunny) and [@techknowlogick](https://gitea.com/techknowlogick) have transitioned from their elected positions to become company appointed members, with [@wolfogre](https://gitea.com/wolfogre) joining them.  
[@6543](https://gitea.com/6543) joined [@zeripath](https://gitea.com/zeripath) to fill one of the remaining elected seats, being the next highest voted candidate.  
For the final remaining elected seat, [@jolheiser](https://gitea.com/jolheiser) and [@delvh](https://gitea.com/delvh) tied for votes. In a subsequent runoff vote, [@jolheiser](https://gitea.com/jolheiser) was elected to fill the seat.

votesUP doesn't have a way to publicly share concluded vote results at the time of this post, so we have included images for them instead.  
Note that the first vote had some late voters and votesUP doesn't allow for that during an active vote, so the first set of results were updated by an election observer to ensure that everyone who wanted to vote was able to.

[Primary Vote](/quarterly/23q1/first-vote.png) (The proposal mentioned in the screenshot is reflected in the contents of this post)  
[Runoff Vote](/quarterly/23q1/second-vote.png)

TOC members, information about the TOC, and how it relates to the project will also be added to the `CONTRIBUTING.md` of the main repository.

👇 Read the full post for further details.

<!--more-->

## Governance Compensation

Considering the substantial effort that goes into releasing software, we want to fund the people who pour so much of their time and energy into an open-source project like Gitea.

Each member of the community elected TOC will be granted $500 each month as compensation for their work.

Furthermore, any community release manager for a specific release or LTS will be compensated $500 for the delivery of said release.

These funds will come from community sources like the OpenCollective rather than directly from the company.  
Only non-company members are eligible for this compensation, and if a member of the community TOC takes the responsibility of release manager, they would only be compensated for their TOC duties.  
Gitea Ltd employees are not eligible to receive any funds from the OpenCollective unless it is reimbursement for a purchase made for the Gitea project itself.

Gitea Ltd will be contributing to the OpenCollective and through other methods to help fund not only the above, but also so the project can sponsor bounties as well. The company is committed to backing the project and the community surrounding it.

## Mission Statement

As Gitea grew up, features were added as contributors suggested them. There wasn't much direction, which sometimes led to features that were only used by a small number of users, yet impacted the rest of the user base. Going forward, Gitea needs to have a consistent and cohesive vision.

Gitea shall help all the programmers, desktop developers, web developers, operators, AI/ML developers, LowCode developers, programming learners, etc. to help them quickly, efficiently, and easily complete their work.  
Gitea will develop features and integrate with external tools, but keep the principle of less is more.  
Gitea will strive to keep low resource usage and high performance to help those who have less machine resources to work together.

## Roadmap
To support this vision we need a short-term roadmap, something new to the project as we have never previously had a formal roadmap.

This roadmap will record which features Gitea should develop in the near future, it will be discussed with the entire Gitea maintainers team, and feedback will be solicited from various stakeholders. TOC members need to review the roadmap every year and work together on the direction of the project.

When voting, the vote of community elected TOC members count slightly more than the vote of company elected TOC members. With this approach, we both avoid ties and ensure that changes align with the mission statement and community opinion.

The TOC and other maintainers are currently discussing the roadmap, but here is a non-exhaustive list of some of the possible things to be included:

### Draft roadmap for 2023:

#### Buildability
* Reduce CI build times
* Allow for auto-updating/auto-merging PRs when they are ready
* Provide an LTS where security patches and some bug-fixes may be backported on a longer schedule than before
* A more consistent release cadence to allow users to more effectively manage their updates and upgrades

#### Readability
* Introduce an RFC process to be discussed with appropriate working groups and the TOC for large features
* Refactor UI to allow for improved accessiblity and usability
* Provide versioned documentation

#### Scalability
* Continue to work on performance improvements to ensure Gitea performs even better on low-powered hardware
* Implement a high-availability concept

#### CI/CD
* Polish and introduce/promote [Actions](https://blog.gitea.io/2022/12/feature-preview-gitea-actions/) to help ease migrations to Gitea and provide a small (but powerful!) optional CI
* Work on a better UX for third-party CI to be able to upload and view build logs in a unified interface

## TOC & Working groups

With Gitea covering many projects outside of the main repository, several groups will be created to help focus on specific areas instead of requiring maintainers to be a jack-of-all-trades. Maintainers are of course more than welcome to be part of multiple groups should they wish to contribute in multiple places.

The currently proposed groups are:
* Core Group: maintain the primary Gitea repository
* Integration Group: maintain the Gitea ecosystem's related tools, including go-sdk/tea/changelog/bots etc.
* Documentation Group: maintain related documents and repositories
* Translation Group: coordinate with translators and maintain translations
* Security Group: managed by TOC directly, members are decided by TOC, maintains security patches/responsible for security items

Each group can have a few of their own managers with merging rights for their area, as well as the members of the TOC. This should result in ~8 people with merge rights for a given repository. Some areas may require more or less as needed.

Besides these new groups, Gitea always welcomes any form of contributions from all of you - the community.

## Community scholarship and support
The project is looking at starting a community scholarship to be able to fund a person from an underrepresented community who may be prevented from contributing to open source as they need to focus on paid work or other commitments. This would allow them to be paid for their work, and build up their connections within open source.  
Also, enrolling the project in Google's Summer of Code and similar programs would allow us to mentor those new to the industry.

## Investing in the security and usability of Gitea
As Gitea is a large project, we need to seriously start thinking about audits, both security and accessibility. We plan to reach out and partner with companies also using Gitea to be able to fund this research to ensure that Gitea is secure and usable by everyone.  
If you are part of or know someone from these areas, please feel free to reach out to us.

## Closing Remarks

If you have any questions that haven't been answered, or would just like to chat with any of the people working on the project, please feel free to drop by in our chat spaces: [Discord](https://discord.gg/Gitea), [Matrix](https://matrix.to/#/#gitea-space:matrix.org), or [Discourse](https://discourse.gitea.io/)!

We're looking forward to the coming year and the continued growth of Gitea. We hope you'll join us in this journey. 🍵