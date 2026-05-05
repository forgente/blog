---
date: 2024-03-11T12:00:00+00:00
authors:
  - "lunny"
  - "techknowlogick"
  - "wolfogre"
title: "CommitGo Launches Gitea Enterprise"
tags: ["announcement"]
coverImage: /demos/gitea-enterprise/cover.png
---

CommitGo, a company founded by the creators of Gitea as a subsidiary of Gitea Ltd, is happy to announce the release of Gitea Enterprise.

Gitea Enterprise is a premium offering designed to take your collaboration and code management to new heights.

## What's Inside Gitea Enterprise

To be able to fulfill corporate needs, useful new features are included in Gitea Enterprise that aren't (yet) part of Gitea. Some of these have been developed by CommitGo specifically for our clients; others have already been submitted as PRs to the Gitea project and not yet merged into a stable Gitea release.

The features currently included in Gitea Enterprise are:

1. **Branch Protection Inheritance**:
   With branch protection inheritance features, you keep your codebase secure.

2. **Dependency Scanning**:
   Identify and address vulnerabilities in project open source dependencies automatically.

3. **IP Allowlist**:
   Control access to your repositories by specifying approved IP addresses.

4. **Enterprise Themes**:
   Customize your Gitea experience with themes tailored for enterprises.

5. **Mandatory 2FA Authentication**:
   Strengthen account security with mandatory two-factor authentication.

6. **Audit Log ([PR #24257](https://github.com/go-gitea/gitea/pull/24257))**:
   Gain insights into user actions and system events with a comprehensive audit log.

7. **SAML Integration ([PR #29403](https://github.com/go-gitea/gitea/pull/29403))**:
   Simplify user authentication and authorization with seamless SAML integration.

8. **Consistent Release Schedule and Long-Term Support versions**

To explore the enhanced experience of Gitea Enterprise, visit the [Enterprise page](https://about.gitea.com/products/gitea-enterprise). You can also contact [CommitGo](mailto:support@gitea.com) if you have any questions or need assistance.

## FAQ

- Does this mean Gitea is now Open-Core?

No, the Gitea project governance charter prohibits the inclusion of proprietary code, and we adhere to the project standards. **Gitea Enterprise is an offering of CommitGo, not the Technical Oversight Committee of Gitea or the Gitea project itself**. CommitGo remains committed to contributing back functionality to Gitea under the MIT license.

- Why isn't this in Gitea itself?

Functionality previously commissioned for development by customers may include internal information. Submission to the Gitea project must be vetted before submission to ensure not to leak sensitive information or trade secrets. This model has already allowed CommitGo to build and contribute the widely-used Gitea Actions functionality and other not yet merged features like [SAML authentication](https://github.com/go-gitea/gitea/pull/29403) or [GCP storage](https://github.com/go-gitea/gitea/pull/26963).

- How will this change Gitea development?

Nothing changes for the Gitea project, as it has a robust governance charter to ensure that the project is self-sufficient, and this does not propose any changes to it. Each subscription includes a support contract to ensure that reports or support requests do not overwhelm the community tracker. As functionality is built and contributed back to the Gitea project under the MIT license, it will still be required to undergo the review process as all other pull-requests. This will allow Gitea to include high-quality, enterprise-ready functionality.

- Why is this a paid offering?

The open-source Gitea project can be found for no cost, and provides pre-built binaries you can use with community-provided support channels.

CommitGo is fortunate that there are customers who commission custom functionality, allow us to license the code as MIT, and submit it to the Gitea project.

Many features and enhancements are prevented from being built for the Gitea project due to high upfront costs and a lack of resources to maintain them. This leads to them not being developed or accepted into the project. With this offering, CommitGo can provide a version to paying customers with a support contract, allowing us to develop and maintain these features to contribute them to the Gitea project.

This model has already allowed us to contribute and maintain several features in the Gitea project, including Gitea Actions, which was dogfooded and provided to customers. At the same time, it awaited review for inclusion in the Gitea project itself.

Features and enhancements commissioned by customers may include knowledge of internal company information or trade secrets, and so they require analysis to ensure that no sensitive information is included prior to submission of functionality to the Gitea project.

## What comes next?

Although we - CommitGo - are tightly coupled to the Gitea project, a better distinction between our products and the Gitea project itself is on its way. Building up an identity, new infrastructure and resources takes time, so we publish our updates here on blog.gitea.com. We are working with the community as we establish ourselves and are thankful for their input and feedback.

The Gitea project is built by a globally diverse group of maintainers, contributors, companies, and end-users who invested in continued success of Gitea. We are very happy to be able to do our best to make the Gitea project benefit from our developments and to ensure sustainability.

Thank you for being part of the Gitea journey. We look forward to serving you even more to ensure your success.

---

> :exclamation: Disclaimer
>
> This post was updated to provide additional clarity and add context. We are thankful to all the feedback from the Gitea community..
