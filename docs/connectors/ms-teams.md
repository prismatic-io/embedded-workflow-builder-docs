---
title: Microsoft Teams Connector
sidebar_label: Microsoft Teams
description: Manage the teams, groups, channels, and messages associated with your Microsoft Teams account
---

![Microsoft Teams](./assets/ms-teams.png#connector-icon)
Manage the teams, groups, channels, and messages associated with your Microsoft Teams account

## Connections

### Incoming Webhook {#webhook}

Use Incoming Webhooks to send messages to Microsoft Teams.

| Input       | Comments                                      | Default |
| ----------- | --------------------------------------------- | ------- |
| Webhook URL | The Incoming Webhook URL for a Teams channel. |         |

### OAuth 2.0 Admin Consent Client Credentials {#adminconsent}

OAuth 2.0 Client Credentials Connectivity with admin consent screen for Microsoft Teams

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                         | Default                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Admin Consent URL   | Replace {tenant} with the directory tenant that you want to request permission from                                                                              | https://login.microsoftonline.com/{tenant}/adminconsent                                    |
| Token URL           | Replace {tenant} with the directory tenant that you want to request permission from                                                                              | https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token?grant_type=client_credentials |
| Scopes              | Microsoft Teams permission scopes are set on the OAuth application; defaults to using `.default` to automatically use all admin consented permissions on the app | https://graph.microsoft.com/.default                                                       |
| Client ID           |                                                                                                                                                                  |                                                                                            |
| Client secret value |                                                                                                                                                                  |                                                                                            |

### OAuth 2.0 Authorization Code {#oauth}

OAuth 2.0 Authorization Code Connectivity for Microsoft Teams

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                           | Default                                                                                                                                                                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL       | The OAuth 2.0 Authorization URL for Microsoft Teams                | https://login.microsoftonline.com/common/oauth2/v2.0/authorize                                                                                                                                                                                                                                                    |
| Token URL           | The OAuth 2.0 Token URL for Microsoft Teams                        | https://login.microsoftonline.com/common/oauth2/v2.0/token                                                                                                                                                                                                                                                        |
| Scopes              | Microsoft Teams permission scopes are set on the OAuth application | https://graph.microsoft.com/Team.ReadBasic.All https://graph.microsoft.com/Team.Create https://graph.microsoft.com/Group.ReadWrite.All https://graph.microsoft.com/TeamMember.ReadWrite.All https://graph.microsoft.com/ChannelMessage.Read.All https://graph.microsoft.com/VirtualEvent.ReadWrite offline_access |
| Client ID           |                                                                    |                                                                                                                                                                                                                                                                                                                   |
| Client secret value |                                                                    |                                                                                                                                                                                                                                                                                                                   |

### OAuth 2.0 Client Credentials {#clientcredentials}

OAuth 2.0 Client Credentials Connectivity for Microsoft Teams

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                    | Default                                                    |
| ------------------- | ------------------------------------------- | ---------------------------------------------------------- |
| Token URL           | The OAuth 2.0 Token URL for Microsoft Teams | https://login.microsoftonline.com/common/oauth2/v2.0/token |
| Client ID           |                                             |                                                            |
| Client secret value |                                             |                                                            |

## Triggers

### Webhook {#webhook}

Receive and validate webhook requests from Microsoft Teams for webhooks you configure.

| Input                                | Comments                                                          | Default                                                          |
| ------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| Signing Secrets                      | Can be a single secret or a list of secrets for HMAC verification |                                                                  |
| Trigger Response                     |                                                                   | <br /> {<br /> "text": "Request Received..."<br /> }<br />       |
| Failed Verification Trigger Response |                                                                   | <br /> {<br /> "text": "Request Not Authorized..."<br /> }<br /> |
| Debug HMAC Verification              |                                                                   | false                                                            |

## Actions

### Add Team Member {#addmember}

Add a new member to the team

| Input      | Comments                                                                                   | Default |
| ---------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                            |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                       |         |
| Roles      | For each item, provide a string value containing a role you would like to assign the user. |         |
| User Id    | Provide a string value for the Id of the user.                                             |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms)      |         |

### Archive Team {#archiveteam}

Archive the specified team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Cancel Webinar {#cancelwebinar}

Cancel a webinar

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webinar ID |          |         |

### Cancel Webinar Registration {#cancelwebinarregistration}

Cancel a Registration for a given Webinar

| Input           | Comments | Default |
| --------------- | -------- | ------- |
| Connection      |          |         |
| Webinar ID      |          |         |
| Registration ID |          |         |

### Create Channel {#createchannel}

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

### Create Team {#createteam}

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

### Create Webinar {#createwebinar}

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

### Create Webinar Registration {#createwebinarregistration}

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

### Delete Channel {#deletechannel}

Delete the information and metadata of a given channel

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Channel Id | Provide a string value for the channel Id                                             |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Delete User {#deleteuser}

Delete the information and metadata of an existing user

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| User Id    | Provide a string value for the Id of the user.                                        |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Get Channel {#getchannel}

Retrieve the information and metadata of a given channel

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Channel Id | Provide a string value for the channel Id                                             |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Get Current Or Existing User {#getcurrentuser}

Get the information and metadata of the current user or an existing user

| Input               | Comments                                                                                  | Default |
| ------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                           |         |
| User Principal Name | Provide the principal name or ID of the user. Required for non-delegated App connections. |         |
| Timeout             | The maximum time a client will await a response in milliseconds (defaults to 30000ms)     |         |

### Get Member {#getmember}

Get information or metadata about a team member

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Member     | Provide the identifier of a given member. This value should be a memberId.            |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Get Team {#getteam}

Get information or metadata of a team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Get User {#getuser}

Get the information and metadata of an existing user

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| User Id    | Provide a string value for the Id of the user.                                        |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Get Webinar {#getwebinar}

Get a webinar

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webinar ID |          |         |

### Get Webinar Registration {#getwebinarregistration}

Get a Registration for a given Webinar

| Input           | Comments | Default |
| --------------- | -------- | ------- |
| Connection      |          |         |
| Webinar ID      |          |         |
| Registration ID |          |         |

### Get Webinar Session {#getwebinarsession}

Get a webinar

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webinar ID |          |         |
| Session ID |          |         |

### Get Webinar Session Attendance Report {#getsessionattendancereport}

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

### Install App {#addinstalledapp}

Add an Installed App to given team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| App ID     | Provide the ID of the app to install.                                                 |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### List Attendance Records {#listattendancerecords}

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

### List Catalog Apps {#listcatalogapps}

Retrieve the list of apps in the catalog

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Fetch All  | Set to true to retrieve all results.                                                  | false   |
| Filter     | Filters results (rows), uses the OData V4 query language.                             |         |
| Select     | Filters properties (columns), uses the OData V4 query language.                       |         |
| Expand     | Expand returned entities, uses the OData V4 query language.                           |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### List Channel Messages {#listchannelmessages}

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

### List Channels {#listchannels}

Retrieve the list of channels in a given team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Fetch All  | Set to true to retrieve all results.                                                  | false   |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |
| Filter     | Filters results (rows), uses the OData V4 query language.                             |         |
| Select     | Filters properties (columns), uses the OData V4 query language.                       |         |

### List Installed Apps {#listinstalledapps}

Retrieve the list of installed apps in a given team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Filter     | Filters results (rows), uses the OData V4 query language.                             |         |
| Select     | Filters properties (columns), uses the OData V4 query language.                       |         |
| Expand     | Expand returned entities, uses the OData V4 query language.                           |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### List Joined Teams {#listjoinedteams}

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

### List Team Members {#listmembers}

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

### List Teams {#listteams}

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

### List Teams Apps {#listteamsapps}

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

### List Users {#listusers}

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

### List User's Teams {#listusersteams}

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

### List Webinar Registrations {#listwebinarregistrations}

List all Registrations for a given Webinar

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webinar ID |          |         |

### List Webinars {#listwebinars}

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

### List Webinar Session Attendance Reports {#listsessionattendancereports}

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

### List Webinar Sessions {#listwebinarsessions}

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

### Publish Webinar {#publishwebinar}

Publish a webinar

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webinar ID |          |         |

### Raw Request {#rawrequest}

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

### Remove Installed App {#removeinstalledapp}

Remove an Installed App from the given team

| Input               | Comments                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                       |         |
| Team                | Provide an identifier of the given team. This value should be an Id.                  |         |
| App Installation ID | Provide the Installation ID of the app to remove.                                     |         |
| Timeout             | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Remove Team Member {#removemember}

Remove a user from a provided team

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Team       | Provide an identifier of the given team. This value should be an Id.                  |         |
| Member     | Provide the identifier of a given member. This value should be a memberId.            |         |
| Timeout    | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Send Adaptive Card To Channel {#sendchanneladaptivecard}

Send an adaptive card message to a given channel

| Input        | Comments                                                                              | Default |
| ------------ | ------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                       |         |
| Team         | Provide an identifier of the given team. This value should be an Id.                  |         |
| Channel Id   | Provide a string value for the channel Id                                             |         |
| Card Payload | Adaptive Card payload to send                                                         |         |
| Importance   |                                                                                       | normal  |
| Timeout      | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |

### Send Incoming Webhook Adaptive Card {#sendincomingwebhookadaptivecard}

Send an adaptive card message to an Incoming Webhook

| Input        | Comments                      | Default |
| ------------ | ----------------------------- | ------- |
| Connection   |                               |         |
| Card Payload | Adaptive Card payload to send |         |

### Send Incoming Webhook Message {#sendincomingwebhookmessage}

Send a text message to an Incoming Webhook

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection |                                         |         |
| Message    | Message to send to the Incoming Webhook |         |

### Send Message To Channel {#sendchannelmessage}

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

### Update Channel {#updatechannel}

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

### Update Team {#updateteam}

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

### Upgrade Installed App {#upgradeinstalledapp}

Upgrade an Installed App to the latest version for given team

| Input               | Comments                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                       |         |
| Team                | Provide an identifier of the given team. This value should be an Id.                  |         |
| App Installation ID | Provide the Installation ID of the app to remove.                                     |         |
| Timeout             | The maximum time a client will await a response in milliseconds (defaults to 30000ms) |         |
