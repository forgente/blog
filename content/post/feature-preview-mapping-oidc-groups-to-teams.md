---
date: "2023-03-09T01:00:00+01:00"
author: "13tm3nt3r"
title: "Feature Preview: Mapping OIDC Groups to Teams"
draft: false
---

The upcoming release of Gitea 1.19 adds the ability to map OIDC groups to organization teams.
Gitea is often used in combination with the Azure Active Directory for authentication.
Now, with OIDC group mapping you can map a user's Active Directory groups to Gitea organization teams.
This allows for a more centralized user access management for repositories and organizations.

<!-- more -->

<!-- instructions sourced originally from: https://github.com/go-gitea/gitea/pull/21441#issuecomment-1429706883 -->

To use this feature, you'll need to create an Azure Active Directory app, configure Gitea to use that app, and then map Azure Active Directory groups to Gitea teams. This post will walk you through the steps to get this working.

Below I'll explain all the required steps to achieve the mapping of Azure user groups to different teams in Gitea, without having on-premise AD.

## Azure configuration

Create an application in App Registrations. You don't need the `Redirect URI` at this point.

![Azure screenshot showing how to register an app allowing accounts in organization only](/demos/oidcmapping/1.png)

As you can see, there is one Enterprise Application that has been created linked to this App Registration.

![Azure screenshot showing the newly created app registration](/demos/oidcmapping/2.png)

In the registered app, in the Authentication section, enable public client flows:

![Azure screenshot showing what it is like to enable public client flows](/demos/oidcmapping/3.png)

In the registered app, in the Certificates & secrets section, create a new secret and SAVE the Secret ID given, as this will disappear when you close this section.

![Azure screenshot showing how to copy secrets](/demos/oidcmapping/4.png)

In the registered app, in the Token configuration section, click on Add groups claim and select the option that will assign only groups that are assigned to the application (this step will be completed in the step 7).

![Azure screenshot showing group claims](/demos/oidcmapping/5.png)

In the registered app, in the API permissions section, add a delegated permission called `Group.Read.All`. You will have to grant admin consent.

![Azure screenshot adding a new delegated permission](/demos/oidcmapping/6.png)

In the Enterprise Application created, in Properties, change the Assignment requirement? option to YES. This will allow every user to sign in or register without admin permission.

![Azure screenshot enabling assignment requirement](/demos/oidcmapping/7.png)

In the Enterprise Application created, in Users and groups section, add the group/groups that you want to map to teams in Gitea. In our case, the group is called `ce-operations`.

![Azure screenshot showing adding/removing groups to use for mapping](/demos/oidcmapping/8.png)

## Gitea configuration

In the site configuration, under Authentication Sources section, create a new OAuth2 authentication source.
Give it an Authentication Name and use OpenID Connect as the OAuth2 Provider.
Take the `Application (client) ID` of the registered app from Azure and put it in the Client ID (Key) option.
Use the secret that you created previously and put it in the Client Secret option.
![Gitea screenshot of adding a new Auth Source](/demos/oidcmapping/9.png)

For the `OpenID Connect Auto Discovery URL` option, go to Azure and in the registered app Overview, click on `Endpoints` and copy the OpenID Connect metadata document.
![Azure screenshot showing the metadata document of the endpoints](/demos/oidcmapping/10.png)

In `Additional Scopes` you can add `openid email profile`.

In `Claim name providing group names for this source.`, type `groups`.

And finally, in `Map claimed groups to Organization teams.`, write the Object ID of the group that you want to map from Azure (in our case, the Object ID of the Azure group `ce-operations`), the name of the organization where you want users to be added automatically (in our case `creamteam`), and the team of the organization (in our case `Developers`). *Note*: the organization and team need to be already created.
![Azure screenshot copying OIDC Auto discovery URL](/demos/oidcmapping/11.png)

Update the Authentication Source and test it with OpenID login option. Your user should now be a member of the organization and team.

![Gitea screenshot copying in the OIDC Auto discovery URL and adding in the mapping](/demos/oidcmapping/12.png)

Finally, a big thank you to [KN4CK3R](https://gitea.com/KN4CK3R) for their work on the PR that made this possible.

Hope this helps anyone that wants to use SSO with Azure and add automatically their users to an organization team 😃. If you do use this, and find any issues, please feel free to open up an issue on the [Gitea issue tracker](https://github.com/go-gitea/gitea/issues).