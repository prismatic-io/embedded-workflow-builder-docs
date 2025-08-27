---
title: Microsoft Teams Connector
sidebar_label: Microsoft Teams
description: Manage the teams, groups, channels, and messages associated with your Microsoft Teams account
---

![Microsoft Teams](./assets/ms-teams.png#connector-icon)
Manage the teams, groups, channels, and messages associated with your Microsoft Teams account

## Connections

### Incoming Webhook

Use Incoming Webhooks to send messages to Microsoft Teams.

[Incoming Webhooks](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook) can be used for sending [adaptive cards](https://adaptivecards.io/) or plain text messages to individual chats or channels.

| Input       | Comments                                      | Default |
| ----------- | --------------------------------------------- | ------- |
| Webhook URL | The Incoming Webhook URL for a Teams channel. |         |

### OAuth 2.0 Admin Consent Client Credentials

OAuth 2.0 Client Credentials Connectivity with admin consent screen for Microsoft Teams

This authentication method may be used when an App requires granting admin consent to API permissions, in addition to authorizing the integration with the App's configured client credentials.

The Microsoft Teams component authenticates requests through the [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/use-the-api).

#### Creating an App Registration

To configure OAuth 2.0 you must first create an App through Active Directory in the [Microsoft Entra Admin Center](https://entra.microsoft.com/#home) or [Microsoft Azure Portal](https://portal.azure.com/#home).

1. Navigate to **App Registrations**
1. When creating the application you will be prompted to select **Supported account types**.
1. Select **Accounts in any organizational directory (Any Azure AD directory - Multitenant)**.
1. Navigate to **Redirect URI** and add the **Web** platform. Now enter the redirect URI as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` for US based integrations.
1. Select **Register** to complete.
1. In the App, navigate to **Certificates & Secrets** and select **New client secret**. Copy/save the **Value** for use in the connection configuration of your integration (the value will not be shown again).
1. Next, navigate to the **Overview** section and copy the **Application (client) ID**
1. Navigate to the **API Permissions** section to assign the proper permissions for the integration. Select **Add Permission**, select all permissions that are required for your desired integration and save these values for later. A full list of scopes can be found on the [Microsoft Graph API documentation](https://learn.microsoft.com/en-us/graph/permissions-reference)
   1. Recommended scopes for Teams can be found in Microsoft Graph > Application permissions:
      `AppCatalog.Read.All`
      `TeamsAppInstallation.Read.Group`
      `TeamsAppInstallation.ReadWriteSelfForTeam.All`
      `TeamsAppInstallation.ReadWriteForTeam.All`
      `TeamsAppInstallation.ReadWriteAndConsentForTeam.All`
      `TeamsAppInstallation.ReadWriteAndConsentSelfForTeam.All`
      `Group.ReadWrite.All`
      `Directory.ReadWrite.All`
      `ChannelSettings.Read.Group`
      `Channel.ReadBasic.All`
      `Channel.Delete.Group`
      `Channel.Create.Group`
      `ChannelSettings.ReadWrite.Group`
      `Teamwork.Migrate.All`
      `ChannelMessage.Read.Group`
      `GroupMember.Read.All`
      `Team.ReadBasic.All`
      `TeamMember.Read.Group`
      `TeamMember.ReadWrite.All`
      `TeamSettings.ReadWrite.Group`
      `Team.Create`
      `TeamSettings.Read.Group`
      `User.Read.All`
      `User.ReadWrite.All`

For more information regarding authenticating against the Microsoft Graph API refer to the [Microsoft documentation](https://docs.microsoft.com/en-us/graph/auth-v2-user).

#### Configuring the Integration

Supply the following values to the **OAuth 2.0 Admin Consent Client Credentials** connection:

- **Client ID** enter the **Application (client) ID**
- **Client Secret** enter the **Value** provided (Do not use **Secret ID**)
- In the **Admin Consent URL** `https://login.microsoftonline.com/{tenant}/adminconsent`, replace `{tenant}` with the **Directory (tenant) ID** from the App.
- In the **Token URL** `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token?grant_type=client_credentials`, replace `{tenant}` with the **Directory (tenant) ID** from the App.
- Provide the assigned API permissions as **Scopes** you assigned to your App. The default value will be set to `https://graph.microsoft.com/.default` which will use all admin consented permissions assigned to the App.
- If you didn't select Multitenant when creating the App, you will need to replace the **Authorize URL** and **Token URL** with ones specific to your tenant.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                         | Default                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Admin Consent URL   | Replace {tenant} with the directory tenant that you want to request permission from                                                                              | https://login.microsoftonline.com/{tenant}/adminconsent                                    |
| Token URL           | Replace {tenant} with the directory tenant that you want to request permission from                                                                              | https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token?grant_type=client_credentials |
| Scopes              | Microsoft Teams permission scopes are set on the OAuth application; defaults to using `.default` to automatically use all admin consented permissions on the app | https://graph.microsoft.com/.default                                                       |
| Client ID           |                                                                                                                                                                  |                                                                                            |
| Client secret value |                                                                                                                                                                  |                                                                                            |

### OAuth 2.0 Authorization Code

OAuth 2.0 Authorization Code Connectivity for Microsoft Teams

Begin by following the steps in [Creating an App Registration](#creating-an-app-registration).

Recommended API permissions for Authorization Code Authentication:

1. Navigate to the **API Permissions** section. Select **Add Permission**, select all permissions that are required for your desired integration. A full list of scopes can be found on the [Microsoft Graph API documentation](https://learn.microsoft.com/en-us/graph/permissions-reference).
   1. Recommended scopes for Teams can be found in Microsoft Graph > Delegated permissions:
      `Team.ReadBasic.All`
      `Team.Create`
      `TeamMember.ReadWrite.All`
      `ChannelMessage.Read.All`
      `offline_access`

When an App is created, supply the following values to the **OAuth 2.0 Authorization Code** connection:

- **Client ID** enter the **Application (client) ID**
- **Client Secret** enter the **Value** provided (Do not use **Secret ID**)
- Provide the **Scopes** you assigned to your Azure application permissions. The default value will match the recommended scopes. `https://graph.microsoft.com/Team.ReadBasic.All https://graph.microsoft.com/Team.Create https://graph.microsoft.com/Group.ReadWrite.All https://graph.microsoft.com/TeamMember.ReadWrite.All https://graph.microsoft.com/ChannelMessage.Read.All offline_access`
- Additionally, ensure the `offline_access` scope is included in your app registration. It is essential to maintain your OAuth connection and receive refresh tokens. Without it, users will need to re-authenticate every hour.
- If you didn't select Multitenant when creating the App, you will need to replace the **Authorize URL** and **Token URL** with ones specific to your tenant.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                           | Default                                                                                                                                                                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL       | The OAuth 2.0 Authorization URL for Microsoft Teams                | https://login.microsoftonline.com/common/oauth2/v2.0/authorize                                                                                                                                                                                                                                                    |
| Token URL           | The OAuth 2.0 Token URL for Microsoft Teams                        | https://login.microsoftonline.com/common/oauth2/v2.0/token                                                                                                                                                                                                                                                        |
| Scopes              | Microsoft Teams permission scopes are set on the OAuth application | https://graph.microsoft.com/Team.ReadBasic.All https://graph.microsoft.com/Team.Create https://graph.microsoft.com/Group.ReadWrite.All https://graph.microsoft.com/TeamMember.ReadWrite.All https://graph.microsoft.com/ChannelMessage.Read.All https://graph.microsoft.com/VirtualEvent.ReadWrite offline_access |
| Client ID           |                                                                    |                                                                                                                                                                                                                                                                                                                   |
| Client secret value |                                                                    |                                                                                                                                                                                                                                                                                                                   |

### OAuth 2.0 Client Credentials

OAuth 2.0 Client Credentials Connectivity for Microsoft Teams

Begin by following the steps in [Creating an App Registration](#creating-an-app-registration).

When App is created, supply the following values to the **OAuth 2.0 Client Credentials** connection:

- **Client ID** enter the **Application (client) ID**
- **Client Secret** enter the **Value** provided (Do not use **Secret ID**)
- If you didn't select Multitenant when creating the App, you will need to replace the **Authorize URL** and **Token URL** with ones specific to your tenant.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                    | Default                                                    |
| ------------------- | ------------------------------------------- | ---------------------------------------------------------- |
| Token URL           | The OAuth 2.0 Token URL for Microsoft Teams | https://login.microsoftonline.com/common/oauth2/v2.0/token |
| Client ID           |                                             |                                                            |
| Client secret value |                                             |                                                            |

## Triggers

### Webhook

Receive and validate webhook requests from Microsoft Teams for webhooks you configure.

| Input                                | Comments                                                          | Default                                                          |
| ------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| Signing Secrets                      | Can be a single secret or a list of secrets for HMAC verification |                                                                  |
| Trigger Response                     |                                                                   | <br /> {<br /> "text": "Request Received..."<br /> }<br />       |
| Failed Verification Trigger Response |                                                                   | <br /> {<br /> "text": "Request Not Authorized..."<br /> }<br /> |
| Debug HMAC Verification              |                                                                   | false                                                            |

## Actions

### Add Team Member

Add a new member to the team

| Input      | Comments                                                                                   | Default |
| ---------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                            |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                       |         |
| Roles      | For each item, provide a string value containing a role you would like to assign the user. |         |
| User Id    | Provide a string value for the Id of the user.                                             |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms)      |         |

### Archive Team

Archive the specified team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Cancel Webinar

Cancel a webinar

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webinar ID |          |         |

### Cancel Webinar Registration

Cancel a Registration for a given Webinar

| Input           | Comments | Default |
| --------------- | -------- | ------- |
| Connection      |          |         |
| Webinar ID      |          |         |
| Registration ID |          |         |

### Create Channel

Create a channel inside a team

| Input               | Comments                                                                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                                |         |
| Team                | Provide an identifier of the given team. This value should be an Id.                                                                                                                                                                                           |         |
| Channel Name        | Provide a string value for the channel name.                                                                                                                                                                                                                   |         |
| Channel Description | Provide a string value for the channel description.                                                                                                                                                                                                            |         |
| Membership Type     | The type of the channel. Can be set during creation and can't be changed. Possible values are: standard - Channel inherits the list of members of the parent team; private - Channel can have members that are a subset of all the members on the parent team. |         |
| Visibility          | The visibility of the group and team. Defaults to Public.                                                                                                                                                                                                      | public  |
| Timeout             | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                                                                                                                                                                          |         |

### Create Team

Create a new team

| Input                                 | Comments                                                                              | Default |
| ------------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection                            |                                                                                       |         |
| Visibility                            | The visibility of the group and team. Defaults to Public.                             | public  |
| Team Name                             | Provide a string value for the team name.                                             |         |
| Channel Name                          | Provide a string value for the channel name.                                          |         |
| Channel Description                   | Provide a string value for the channel description.                                   |         |
| Team Description                      | Provide a string value for the description.                                           |         |
| Allow users to create/update channels | This flag will give users the permission to create/update channels.                   | false   |
| Allow users to delete messages        | This flag will give users the permission to delete messages.                          | false   |
| Allow users to edit messages          | This flag will give users the permission to edit messages.                            | false   |
| Allow Giphy                           | This flag will enable the use of Giphy content in your team.                          | false   |
| Giphy Content Rating                  |                                                                                       |         |
| Timeout                               | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Create Webinar

Create a new Microsoft Teams Webinar.

| Input                               | Comments                                                        | Default |
| ----------------------------------- | --------------------------------------------------------------- | ------- |
| Connection                          |                                                                 |         |
| Display Name                        | Provide a string value for the display name of the webinar.     |         |
| Description Content Type            | The content type for the webinar description.                   |         |
| Description Content                 | The description content for the webinar.                        |         |
| Start Date                          | The start date and time for the webinar.                        |         |
| End Date                            | The end date and time for the webinar.                          |         |
| Time Zone                           | The time zone for the webinar.                                  |         |
| Audience                            |                                                                 |         |
| Co-Organizers                       |                                                                 |         |
| Attendee Email Notification Enabled | Enable or disable attendee email notifications for the webinar. | false   |

### Create Webinar Registration

Create a new Registration for a given Webinar

| Input                             | Comments | Default |
| --------------------------------- | -------- | ------- |
| Connection                        |          |         |
| Webinar ID                        |          |         |
| First Name                        |          |         |
| Last Name                         |          |         |
| Email                             |          |         |
| External Registration Information |          |         |
| Registration Question Answers     |          |         |
| Preferred Language                |          | en-us   |
| Preferred Timezone                |          |         |

### Delete Channel

Delete the information and metadata of a given channel

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Channel Id | Provide a string value for the channel Id                                             |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Delete User

Delete the information and metadata of an existing user

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| User Id    | Provide a string value for the Id of the user.                                        |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Get Channel

Retrieve the information and metadata of a given channel

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Channel Id | Provide a string value for the channel Id                                             |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Get Current Or Existing User

Get the information and metadata of the current user or an existing user

| Input               | Comments                                                                                  | Default |
| ------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                           |         |
| User Principal Name | Provide the principal name or ID of the user. Required for non-delegated App connections. |         |
| Timeout             | The maximum time a client will await a response in milliseconds (defaults to 30000ms)     |         |

### Get Member

Get information or metadata about a team member

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Member     | Provide the identifier of a given member. This value should be a memberId.            |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Get Team

Get information or metadata of a team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Get User

Get the information and metadata of an existing user

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| User Id    | Provide a string value for the Id of the user.                                        |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Get Webinar

Get a webinar

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webinar ID |          |         |

### Get Webinar Registration

Get a Registration for a given Webinar

| Input           | Comments | Default |
| --------------- | -------- | ------- |
| Connection      |          |         |
| Webinar ID      |          |         |
| Registration ID |          |         |

### Get Webinar Session

Get a webinar

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webinar ID |          |         |
| Session ID |          |         |

### Get Webinar Session Attendance Report

Get a Session Attendance Report for a given Webinar

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| Webinar ID  |                                                                                                                  |         |
| Session ID  |                                                                                                                  |         |
| Report ID   |                                                                                                                  |         |
| Timeout     | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                     |         |
| Filter      | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Order By    | Order results (rows), uses the OData V4 query language.                                                          |         |
| Search      | Returns results based on search criteria.                                                                        |         |
| Select      | Filters properties (columns), uses the OData V4 query language.                                                  |         |
| Expand      | Expand returned entities, uses the OData V4 query language.                                                      |         |

### Install App

Add an Installed App to given team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| App ID     | Provide the ID of the app to install.                                                 |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### List Attendance Records

List all Attendance Records for a given Attendance Report

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| Fetch All   | Set to true to retrieve all results.                                                                             | false   |
| Webinar ID  |                                                                                                                  |         |
| Session ID  |                                                                                                                  |         |
| Report ID   |                                                                                                                  |         |
| Timeout     | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                     |         |
| Filter      | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Order By    | Order results (rows), uses the OData V4 query language.                                                          |         |
| Search      | Returns results based on search criteria.                                                                        |         |
| Select      | Filters properties (columns), uses the OData V4 query language.                                                  |         |
| Expand      | Expand returned entities, uses the OData V4 query language.                                                      |         |

### List Catalog Apps

Retrieve the list of apps in the catalog

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Fetch All  | Set to true to retrieve all results.                                                  | false   |
| Filter     | Filters results (rows), uses the OData V4 query language.                             |         |
| Select     | Filters properties (columns), uses the OData V4 query language.                       |         |
| Expand     | Expand returned entities, uses the OData V4 query language.                           |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### List Channel Messages

List all of the messages in a given channel

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| Team        | Provide an identifier of the given team. This value should be an Id.                                             |         |
| Channel Id  | Provide a string value for the channel Id                                                                        |         |
| Timeout     | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                     |         |
| Filter      | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Order By    | Order results (rows), uses the OData V4 query language.                                                          |         |
| Search      | Returns results based on search criteria.                                                                        |         |
| Select      | Filters properties (columns), uses the OData V4 query language.                                                  |         |

### List Channels

Retrieve the list of channels in a given team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Fetch All  | Set to true to retrieve all results.                                                  | false   |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |
| Filter     | Filters results (rows), uses the OData V4 query language.                             |         |
| Select     | Filters properties (columns), uses the OData V4 query language.                       |         |

### List Installed Apps

Retrieve the list of installed apps in a given team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Filter     | Filters results (rows), uses the OData V4 query language.                             |         |
| Select     | Filters properties (columns), uses the OData V4 query language.                       |         |
| Expand     | Expand returned entities, uses the OData V4 query language.                           |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### List Joined Teams

List the teams you have joined

| Input               | Comments                                                                                                         | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                  |         |
| Fetch All           | Set to true to retrieve all results.                                                                             | false   |
| User Principal Name | Provide the principal name or ID of the user. Required for non-delegated App connections.                        |         |
| Timeout             | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Filter              | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Top                 | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset         | Provide an integer value for the page offset for the given object's results.                                     |         |
| Select              | Filters properties (columns), uses the OData V4 query language.                                                  |         |

### List Team Members

List all the members in a team

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| Fetch All   | Set to true to retrieve all results.                                                                             | false   |
| Team        | Provide an identifier of the given team. This value should be an Id.                                             |         |
| Timeout     | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Filter      | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                     |         |
| Select      | Filters properties (columns), uses the OData V4 query language.                                                  |         |

### List Teams

List all teams

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| Fetch All   | Set to true to retrieve all results.                                                                             | false   |
| Timeout     | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Filter      | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                     |         |
| Order By    | Order results (rows), uses the OData V4 query language.                                                          |         |
| Select      | Filters properties (columns), uses the OData V4 query language.                                                  |         |

### List Teams Apps

List apps from the Microsoft Teams app catalog

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| Timeout     | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                     |         |
| Filter      | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Order By    | Order results (rows), uses the OData V4 query language.                                                          |         |
| Select      | Filters properties (columns), uses the OData V4 query language.                                                  |         |

### List Users

List all users

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| Fetch All   | Set to true to retrieve all results.                                                                             | false   |
| Timeout     | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Filter      | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                     |         |
| Order By    | Order results (rows), uses the OData V4 query language.                                                          |         |
| Search      | Returns results based on search criteria.                                                                        |         |
| Select      | Filters properties (columns), uses the OData V4 query language.                                                  |         |

### List User's Teams

List all teams containing the provided user

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| Fetch All   | Set to true to retrieve all results.                                                                             | false   |
| User Id     | Provide a string value for the Id of the user.                                                                   |         |
| Timeout     | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Filter      | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                     |         |
| Order By    | Order results (rows), uses the OData V4 query language.                                                          |         |
| Search      | Returns results based on search criteria.                                                                        |         |
| Select      | Filters properties (columns), uses the OData V4 query language.                                                  |         |

### List Webinar Registrations

List all Registrations for a given Webinar

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webinar ID |          |         |

### List Webinars

List all webinars

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| Role        |                                                                                                                  |         |
| Timeout     | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                     |         |
| Filter      | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Order By    | Order results (rows), uses the OData V4 query language.                                                          |         |
| Search      | Returns results based on search criteria.                                                                        |         |
| Select      | Filters properties (columns), uses the OData V4 query language.                                                  |         |
| Expand      | Expand returned entities, uses the OData V4 query language.                                                      |         |

### List Webinar Session Attendance Reports

List all Session Attendance Reports for a given Webinar

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| Fetch All   | Set to true to retrieve all results.                                                                             | false   |
| Webinar ID  |                                                                                                                  |         |
| Session ID  |                                                                                                                  |         |
| Timeout     | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                     |         |
| Filter      | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Order By    | Order results (rows), uses the OData V4 query language.                                                          |         |
| Search      | Returns results based on search criteria.                                                                        |         |
| Select      | Filters properties (columns), uses the OData V4 query language.                                                  |         |

### List Webinar Sessions

List all Sessions for a given Webinar

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| Webinar ID  |                                                                                                                  |         |
| Timeout     | The maximum time a client will await a response in milliseconds (defaults to 30000ms)                            |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 100. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                     |         |
| Filter      | Filters results (rows), uses the OData V4 query language.                                                        |         |
| Order By    | Order results (rows), uses the OData V4 query language.                                                          |         |
| Search      | Returns results based on search criteria.                                                                        |         |
| Select      | Filters properties (columns), uses the OData V4 query language.                                                  |         |
| Expand      | Expand returned entities, uses the OData V4 query language.                                                      |         |

### Publish Webinar

Publish a webinar

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webinar ID |          |         |

### Raw Request

Send raw HTTP request to Microsoft Teams

| Input                   | Comments                                                                                                                                                                                                    | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                             |         |
| URL                     | Input the path only (/users), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/users, only /users is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                     |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                   |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                        |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                            |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                      |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                         |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                 |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                    | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                         |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                               | false   |

### Remove Installed App

Remove an Installed App from the given team

| Input               | Comments                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                       |         |
| Team                | Provide an identifier of the given team. This value should be an Id.                  |         |
| App Installation ID | Provide the Installation ID of the app to remove.                                     |         |
| Timeout             | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Remove Team Member

Remove a user from a provided team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Member     | Provide the identifier of a given member. This value should be a memberId.            |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Send Adaptive Card To Channel

Send an adaptive card message to a given channel

| Input        | Comments                                                                              | Default |
| ------------ | ------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                       |         |
| Team         | Provide an identifier of the given team. This value should be an Id.                  |         |
| Channel Id   | Provide a string value for the channel Id                                             |         |
| Card Payload | Adaptive Card payload to send                                                         |         |
| Importance   |                                                                                       | normal  |
| Timeout      | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Send Incoming Webhook Adaptive Card

Send an adaptive card message to an Incoming Webhook

| Input        | Comments                      | Default |
| ------------ | ----------------------------- | ------- |
| Connection   |                               |         |
| Card Payload | Adaptive Card payload to send |         |

### Send Incoming Webhook Message

Send a text message to an Incoming Webhook

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection |                                         |         |
| Message    | Message to send to the Incoming Webhook |         |

### Send Message To Channel

Send a message to a given channel

| Input        | Comments                                                                              | Default |
| ------------ | ------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                       |         |
| Team         | Provide an identifier of the given team. This value should be an Id.                  |         |
| Channel Id   | Provide a string value for the channel Id                                             |         |
| Message      | Provide a string value for the message to send.                                       |         |
| Content Type | Provide a value for the content type of the message                                   | text    |
| Timeout      | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |
| Importance   |                                                                                       | normal  |

### Update Channel

Update an existing channel inside a team

| Input               | Comments                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                       |         |
| Team                | Provide an identifier of the given team. This value should be an Id.                  |         |
| Channel Id          | Provide a string value for the channel Id                                             |         |
| Channel Name        | Provide a string value for the channel name.                                          |         |
| Channel Description | Provide a string value for the channel description.                                   |         |
| Visibility          | The visibility of the group and team. Defaults to Public.                             | public  |
| Timeout             | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Update Team

Update an existing team

| Input                                 | Comments                                                                              | Default |
| ------------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection                            |                                                                                       |         |
| Team                                  | Provide an identifier of the given team. This value should be an Id.                  |         |
| Visibility                            | The visibility of the group and team. Defaults to Public.                             | public  |
| Team Name                             | Provide a string value for the team name.                                             |         |
| Team Description                      | Provide a string value for the description.                                           |         |
| Allow users to create/update channels | This flag will give users the permission to create/update channels.                   | false   |
| Allow users to delete messages        | This flag will give users the permission to delete messages.                          | false   |
| Allow users to edit messages          | This flag will give users the permission to edit messages.                            | false   |
| Allow Giphy                           | This flag will enable the use of Giphy content in your team.                          | false   |
| Giphy Content Rating                  |                                                                                       |         |
| Timeout                               | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Upgrade Installed App

Upgrade an Installed App to the latest version for given team

| Input               | Comments                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                       |         |
| Team                | Provide an identifier of the given team. This value should be an Id.                  |         |
| App Installation ID | Provide the Installation ID of the app to remove.                                     |         |
| Timeout             | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |
