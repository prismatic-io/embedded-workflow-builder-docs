---
title: Okta Connector
sidebar_label: Okta
description: Manage users, groups, applications, and authentication policies in Okta.
---

![Okta](./assets/okta-management-api.png#connector-icon)
Manage users, groups, applications, and authentication policies in Okta.

## Connections

### API Token {#oktaapitokenconnection}

Authenticate using an API token

| Input       | Comments                                                                                                                                                            | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Okta Domain | The base URL for the Okta API. Depending on your cloud environment, you can choose the correct one [here](https://developer.okta.com/docs/reference/api-overview/). |         |
| API Token   | API Token generated in your Okta Admin Console. [Learn more](https://developer.okta.com/docs/guides/create-an-api-token/main/).                                     |         |

### OAuth 2.0 {#oktaoauth2authorizationcode}

Authenticate using OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Okta Domain         | The base URL for the Okta API. Depending on your cloud environment, you can choose the correct one [here](https://developer.okta.com/docs/reference/api-overview/). |         |
| Scopes              | Okta API permission scopes are set on the OAuth application.                                                                                                        |         |
| Client ID           | Client Id of your Okta's application. [Learn more](https://developer.okta.com/docs/guides/implement-grant-type/authcode/main/)                                      |         |
| Client secret value | Client Secret generated in your Okta's application. [Learn more](https://developer.okta.com/docs/guides/implement-grant-type/authcode/main/).                       |         |

### OAuth 2.0 Client Credentials {#oktaclientcredentialsorg}

Authenticate using OAuth 2.0 Client Credentials with private_key_jwt method

| Input                    | Comments                                                                                                                                                                                                                                                                                    | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Okta Domain              | The base URL for the Okta API. Depending on your cloud environment, you can choose the correct one [here](https://developer.okta.com/docs/reference/api-overview/).                                                                                                                         |         |
| Client ID                | Client Id of your Okta service application. The application must have the appropriate OAuth 2.0 scopes granted and admin roles assigned. [Learn more](https://developer.okta.com/docs/guides/implement-oauth-for-okta-serviceapp/main/)                                                     |         |
| Private Key (PEM format) | The private key in PEM format used to sign the JWT assertion. Generate a key pair and register the public key with your Okta service app. [Learn more](https://developer.okta.com/docs/guides/implement-oauth-for-okta-serviceapp/main/#create-and-register-a-public-private-key-pair)      |         |
| Scopes                   | Space-separated list of Okta API permission scopes. Common scopes include okta.users.read, okta.users.manage, okta.groups.read, okta.groups.manage, okta.apps.read, etc. [Learn more](https://developer.okta.com/docs/guides/implement-oauth-for-okta/main/#scopes-and-supported-endpoints) |         |

## Triggers

### Event Hook {#eventhook}

Receive event hooks from Okta when a specified event occurs.

| Input                    | Comments                                                | Default |
| ------------------------ | ------------------------------------------------------- | ------- |
| Event Hook Items         | The list of event types to subscribe to.                |         |
| Dynamic Event Hook Items | The list of event types to subscribe to in code format. |         |
| Event Hook URL Headers   | Optional headers to include in the webhook request.     |         |
| Event Hook Filters       | The optional filter defined on a specific event type.   |         |
| Connection               | The Okta connection to use.                             |         |

### New System Logs {#newsystemlogspollingtrigger}

Fetches system logs created on a recurring schedule.

| Input      | Comments                                                                                                                                                                                                                                                               | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Filter     | A filter string to narrow down results. See Okta's documentation for supported filter fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=filter&t=request). |         |
| Connection | The Okta connection to use.                                                                                                                                                                                                                                            |         |

### New Users {#newuserspollingtrigger}

Fetches users created on a recurring schedule.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Okta connection to use. |         |

### Updated Users {#updateduserspollingtrigger}

Fetches users updated on a recurring schedule.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Okta connection to use. |         |

## Actions

### Activate Event Hook {#activateeventhook}

Activate a specific event hook.

| Input         | Comments                    | Default |
| ------------- | --------------------------- | ------- |
| Event Hook ID | The ID of the event hook.   |         |
| Connection    | The Okta connection to use. |         |

### Activate User {#activateuser}

Activate a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email | When true, sends a deactivation email to the admin.                                                  | false   |
| Connection | The Okta connection to use.                                                                          |         |

### Add User to Group {#addusertogroup}

Add a user to a group.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Group ID   | The unique identifier for the group. |         |
| User ID    | ID of an existing Okta user.         |         |
| Connection | The Okta connection to use.          |         |

### Assign Application to User {#assignapplicationtouser}

Assigns an application to a user with app-specific profile and credentials.

| Input          | Comments                                                           | Default |
| -------------- | ------------------------------------------------------------------ | ------- |
| Application ID | The unique identifier for the application.                         |         |
| User ID        | ID of an existing Okta user.                                       |         |
| Username       | The username of the user to whom the application will be assigned. |         |
| Password       | The user's password.                                               |         |
| Scope          | Specifies the scope of the application.                            |         |
| Profile        | The app-specific profile for the user.                             |         |
| Connection     | The Okta connection to use.                                        |         |

### Clear User Sessions {#clearusersessions}

Clears all active sessions for a user, forcing re-authentication on next access.

| Input          | Comments                                                           | Default |
| -------------- | ------------------------------------------------------------------ | ------- |
| User ID        | ID of an existing Okta user.                                       |         |
| OAuth Tokens   | Revokes issued OpenID Connect and OAuth refresh and access tokens. | false   |
| Forget Devices | Clears the user's remembered factors for all devices.              | false   |
| Connection     | The Okta connection to use.                                        |         |

### Create Event Hook {#createeventhook}

Create a new event hook.

| Input                     | Comments                                                                                     | Default |
| ------------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Event Hook Name           | The name of the event hook.                                                                  |         |
| Event Hook URL            | The URL of the event hook.                                                                   |         |
| Do Not Activate on Create | When true, the event hook will not be activated and a verification request will not be sent. | false   |
| Event Hook Items          | The list of event types to subscribe to.                                                     |         |
| Dynamic Event Hook Items  | The list of event types to subscribe to in code format.                                      |         |
| Event Hook URL Headers    | Optional headers to include in the webhook request.                                          |         |
| Event Hook Filters        | The optional filter defined on a specific event type.                                        |         |
| Event Hook Description    | The description of the event hook.                                                           |         |
| Connection                | The Okta connection to use.                                                                  |         |

### Create Group {#creategroup}

Create a group in Okta.

| Input             | Comments                          | Default |
| ----------------- | --------------------------------- | ------- |
| Group Name        | The name of the group.            |         |
| Group Description | A brief description of the group. |         |
| Connection        | The Okta connection to use.       |         |

### Create User {#createuser}

Create a new user.

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                                               | Default |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Login                    | The unique identifier for the user (username).                                                                                                                                                                                                                                                                                                                         |         |
| Email                    | The user's email address.                                                                                                                                                                                                                                                                                                                                              |         |
| Department               | The user's department.                                                                                                                                                                                                                                                                                                                                                 |         |
| Employee Number          | The user's employee number.                                                                                                                                                                                                                                                                                                                                            |         |
| Locale                   | The user's default location for purposes of localizing items such as currency, date time format, numerical representations, and so on. A locale value is a concatenation of the ISO 639-1 two-letter language code, an underscore, and the ISO 3166-1 two-letter country code.                                                                                         | en_US   |
| First Name               | The user's first name.                                                                                                                                                                                                                                                                                                                                                 |         |
| Last Name                | The user's last name.                                                                                                                                                                                                                                                                                                                                                  |         |
| Mobile Phone             | The user's mobile phone number.                                                                                                                                                                                                                                                                                                                                        |         |
| Password                 | The user's password. If not provided, an activation email will be sent to the user.                                                                                                                                                                                                                                                                                    |         |
| Hash Password            | The user's password hash.                                                                                                                                                                                                                                                                                                                                              |         |
| Question                 | The user's recovery question.                                                                                                                                                                                                                                                                                                                                          |         |
| Answer                   | The user's recovery answer.                                                                                                                                                                                                                                                                                                                                            |         |
| Provider Name            | The name of the provider for the user.                                                                                                                                                                                                                                                                                                                                 |         |
| Provider Type            | The type of the provider for the user.                                                                                                                                                                                                                                                                                                                                 |         |
| Group IDs                | List of group IDs to assign the user to.                                                                                                                                                                                                                                                                                                                               |         |
| Realm ID                 | The ID of the realm to which the user belongs.                                                                                                                                                                                                                                                                                                                         |         |
| Type                     | The type of the user.                                                                                                                                                                                                                                                                                                                                                  |         |
| Next Login               | With activate=true, if nextLogin=changePassword, a user is created, activated, and the password is set to EXPIRED. The user must change it the next time they sign in.                                                                                                                                                                                                 |         |
| Provider                 | Indicates whether to create a user with a specified authentication provider.                                                                                                                                                                                                                                                                                           | false   |
| Activate                 | When true, executes an activation lifecycle operation when creating the user.                                                                                                                                                                                                                                                                                          | true    |
| Profile Extra Attributes | List of additional profile attributes to include in the request. This can be used to include attributes that are not explicitly supported by this component. See [Okta's API documentation](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/updateUser!path=profile&t=request) for a list of supported attributes. |         |
| Connection               | The Okta connection to use.                                                                                                                                                                                                                                                                                                                                            |         |

### Deactivate Event Hook {#deactivateeventhook}

Deactivate a specific event hook.

| Input         | Comments                    | Default |
| ------------- | --------------------------- | ------- |
| Event Hook ID | The ID of the event hook.   |         |
| Connection    | The Okta connection to use. |         |

### Deactivate User {#deactivateuser}

Deactivate a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email | When true, sends a deactivation email to the admin.                                                  | false   |
| Connection | The Okta connection to use.                                                                          |         |

### Delete All Event Hooks {#deletealleventhooks}

Delete an event hook by ID.

| Input          | Comments                                                                                                       | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Event Hook URL | If provided, only event hooks with this URL will be deleted. If not provided, all event hooks will be deleted. |         |
| Connection     | The Okta connection to use.                                                                                    |         |

### Delete Event Hook {#deleteeventhook}

Delete an event hook by ID.

| Input         | Comments                    | Default |
| ------------- | --------------------------- | ------- |
| Event Hook ID | The ID of the event hook.   |         |
| Connection    | The Okta connection to use. |         |

### Delete Group {#deletegroup}

Delete a group by ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Group ID   | The unique identifier for the group. |         |
| Connection | The Okta connection to use.          |         |

### Delete User {#deleteuser}

Delete a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email | When true, sends a deactivation email to the admin.                                                  | false   |
| Connection | The Okta connection to use.                                                                          |         |

### Get Application {#getapplication}

Retrieve an application by ID.

| Input          | Comments                                                                                                            | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Application ID | The unique identifier for the application.                                                                          |         |
| Expand         | Indicates whether to expand the credentials for the user. By default, credentials are not returned in the response. |         |
| Connection     | The Okta connection to use.                                                                                         |         |

### Get Application User Assignment {#getapplicationuserassignment}

Retrieves a specific user assignment for a specific app.

| Input          | Comments                                                                                                            | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Application ID | The unique identifier for the application.                                                                          |         |
| User ID        | ID of an existing Okta user.                                                                                        |         |
| Expand         | Indicates whether to expand the credentials for the user. By default, credentials are not returned in the response. |         |
| Connection     | The Okta connection to use.                                                                                         |         |

### Get Event Hook {#geteventhook}

Get an event hook by ID.

| Input         | Comments                    | Default |
| ------------- | --------------------------- | ------- |
| Event Hook ID | The ID of the event hook.   |         |
| Connection    | The Okta connection to use. |         |

### Get Group {#getgroup}

Retrieve a group by ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Group ID   | The unique identifier for the group. |         |
| Connection | The Okta connection to use.          |         |

### Get System Logs {#getsystemlogs}

Retrieves system log events for security monitoring and compliance auditing. Max 10000 records can be fetched at once.

| Input      | Comments                                                                                                                                                                                                                                                               | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All  | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |
| Since      | Filters the lower time bound of the log events published property for bounded queries or persistence time for polling queries.                                                                                                                                         |         |
| Until      | Filters the upper time bound of the log events published property for bounded queries or persistence time for polling queries.                                                                                                                                         |         |
| Filter     | A filter string to narrow down results. See Okta's documentation for supported filter fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=filter&t=request). |         |
| q          | Searches for apps with name or label properties that starts with the q value using the startsWith operation.                                                                                                                                                           |         |
| After      | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                                                                                                |         |
| Limit      | Specifies the number of results returned. Defaults to 200.                                                                                                                                                                                                             |         |
| Sort Order | Specifies the sort order: asc or desc (for search queries only). Sorting is done in ASCII sort order (that is, by ASCII character value), but isn't case sensitive. sortOrder is ignored if sortBy isn't present.                                                      |         |
| Connection | The Okta connection to use.                                                                                                                                                                                                                                            |         |

### Get User {#getuser}

Retrieve a user by ID or login.

| Input      | Comments                                                                                                            | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user.                |         |
| Expand     | Indicates whether to expand the credentials for the user. By default, credentials are not returned in the response. |         |
| Connection | The Okta connection to use.                                                                                         |         |

### List Applications {#listapplications}

List applications with optional search and filtering.

| Input               | Comments                                                                                                                                                                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All           | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |
| q                   | Searches for apps with name or label properties that starts with the q value using the startsWith operation.                                                                                                                                                           |         |
| After               | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                                                                                                |         |
| Limit               | Specifies the number of results returned. Defaults to 200.                                                                                                                                                                                                             |         |
| Use Optimization    | When true, the response will be optimized for faster retrieval. This may exclude some properties from the response.                                                                                                                                                    | false   |
| Filter              | A filter string to narrow down results. See Okta's documentation for supported filter fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=filter&t=request). |         |
| Expand              | Indicates whether to expand the credentials for the user. By default, credentials are not returned in the response.                                                                                                                                                    |         |
| Include Non-Deleted | When true, both deleted and non-deleted applications are returned.                                                                                                                                                                                                     | false   |
| Connection          | The Okta connection to use.                                                                                                                                                                                                                                            |         |

### List Event Hooks {#listeventhooks}

List all event hooks.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Okta connection to use. |         |

### List Group Members {#listgroupmembers}

Retrieves all users who are members of the specified group.

| Input      | Comments                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Group ID   | The unique identifier for the group.                                                                    |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                               | false   |
| After      | The cursor for the next page of results. This value is obtained from the `Link` header of the response. |         |
| Limit      | Specifies the number of results returned. Defaults to 200.                                              |         |
| Connection | The Okta connection to use.                                                                             |         |

### List Groups {#listgroups}

List groups with optional search and filtering.

| Input            | Comments                                                                                                                                                                                                                                                               | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All        | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |
| Search           | A search string to filter results. See Okta's documentation for supported search fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=search&t=request).      |         |
| Filter           | A filter string to narrow down results. See Okta's documentation for supported filter fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=filter&t=request). |         |
| q                | Searches for apps with name or label properties that starts with the q value using the startsWith operation.                                                                                                                                                           |         |
| After            | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                                                                                                |         |
| Limit            | Specifies the number of results returned. Defaults to 200.                                                                                                                                                                                                             |         |
| Sort By          | Specifies field to sort by (for search queries only). This can be any single property, for example sortBy=profile.lastName. Users with the same value for the sortBy property will be ordered by id.                                                                   |         |
| Sort Order       | Specifies the sort order: asc or desc (for search queries only). Sorting is done in ASCII sort order (that is, by ASCII character value), but isn't case sensitive. sortOrder is ignored if sortBy isn't present.                                                      |         |
| Extra Parameters | List of additional parameters to include in the request. This can be used to include parameters that are not explicitly supported by this component. See Okta's API documentation for a list of supported parameters.                                                  |         |
| Connection       | The Okta connection to use.                                                                                                                                                                                                                                            |         |

### List Policies {#listpolicies}

List policies with optional search and filtering.

| Input       | Comments                                                                                                                                                                                             | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Type        | Specifies the type of policy to return. The following policy types are available only with the Okta Identity Engine.                                                                                 |         |
| Status      | Specifies the status of the policies to return.                                                                                                                                                      |         |
| Fetch All   | When true, fetches all pages of results using pagination.                                                                                                                                            | false   |
| q           | Searches for apps with name or label properties that starts with the q value using the startsWith operation.                                                                                         |         |
| Expand      | Indicates whether to expand the credentials for the user. By default, credentials are not returned in the response.                                                                                  |         |
| Sort By     | Specifies field to sort by (for search queries only). This can be any single property, for example sortBy=profile.lastName. Users with the same value for the sortBy property will be ordered by id. |         |
| Limit       | Specifies the number of results returned. Defaults to 200.                                                                                                                                           |         |
| After       | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                              |         |
| Resource ID | Reference to the associated authorization server.                                                                                                                                                    |         |
| Connection  | The Okta connection to use.                                                                                                                                                                          |         |

### List Realms {#listrealms}

Lists all realms in your org.

| Input      | Comments                                                                                                                                                                                                                                                          | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All  | When true, fetches all pages of results using pagination.                                                                                                                                                                                                         | false   |
| Limit      | Specifies the number of results returned. Defaults to 200.                                                                                                                                                                                                        |         |
| After      | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                                                                                           |         |
| Search     | A search string to filter results. See Okta's documentation for supported search fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=search&t=request). |         |
| Sort By    | Specifies field to sort by (for search queries only). This can be any single property, for example sortBy=profile.lastName. Users with the same value for the sortBy property will be ordered by id.                                                              |         |
| Sort Order | Specifies the sort order: asc or desc (for search queries only). Sorting is done in ASCII sort order (that is, by ASCII character value), but isn't case sensitive. sortOrder is ignored if sortBy isn't present.                                                 |         |
| Connection | The Okta connection to use.                                                                                                                                                                                                                                       |         |

### List User Applications {#listuserapplications}

List applications for a specific user.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Connection | The Okta connection to use.                                                                          |         |

### List User Factors {#listuserfactors}

Lists all enrolled factors for the specified user that are included in the highest priority authenticator enrollment policy that applies to the user.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| User ID    | ID of an existing Okta user. |         |
| Connection | The Okta connection to use.  |         |

### List User Groups {#listusergroups}

List groups for a specific user.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Connection | The Okta connection to use.                                                                          |         |

### List Users {#listusers}

List users with optional search and filtering.

| Input            | Comments                                                                                                                                                                                                                                                               | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All        | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |
| Search           | A search string to filter results. See Okta's documentation for supported search fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=search&t=request).      |         |
| Filter           | A filter string to narrow down results. See Okta's documentation for supported filter fields and operators [click here](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!in=query&path=filter&t=request). |         |
| q                | Searches for apps with name or label properties that starts with the q value using the startsWith operation.                                                                                                                                                           |         |
| After            | The cursor for the next page of results. This value is obtained from the `Link` header of the response.                                                                                                                                                                |         |
| Limit            | Specifies the number of results returned. Defaults to 200.                                                                                                                                                                                                             |         |
| Sort By          | Specifies field to sort by (for search queries only). This can be any single property, for example sortBy=profile.lastName. Users with the same value for the sortBy property will be ordered by id.                                                                   |         |
| Sort Order       | Specifies the sort order: asc or desc (for search queries only). Sorting is done in ASCII sort order (that is, by ASCII character value), but isn't case sensitive. sortOrder is ignored if sortBy isn't present.                                                      |         |
| Extra Parameters | List of additional parameters to include in the request. This can be used to include parameters that are not explicitly supported by this component. See Okta's API documentation for a list of supported parameters.                                                  |         |
| Connection       | The Okta connection to use.                                                                                                                                                                                                                                            |         |

### List User Types {#listusertypes}

Lists all user types in your org.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Okta connection to use. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Okta.

| Input                   | Comments                                                                                                                                                                                                          | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Okta connection to use.                                                                                                                                                                                       |         |
| URL                     | Input the path only (/users), The base URL is already included (https://{yourOktaDomain}.com/api/v1). For example, to connect to https://{yourOktaDomain}.com/api/v1/users, only /users is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                           |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                         |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                              |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                  |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                            |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                               |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                       |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                          | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                               |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                               | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                  | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                               | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                     | false   |

### Reactivate User {#reactivateuser}

Reactivate a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email | When true, sends a deactivation email to the admin.                                                  | false   |
| Connection | The Okta connection to use.                                                                          |         |

### Remove Application User Assignment {#removeapplicationuserassignment}

Removes an application assignment from a user, revoking access to the application.

| Input          | Comments                                            | Default |
| -------------- | --------------------------------------------------- | ------- |
| Application ID | The unique identifier for the application.          |         |
| User ID        | ID of an existing Okta user.                        |         |
| Send Email     | When true, sends a deactivation email to the admin. | false   |
| Connection     | The Okta connection to use.                         |         |

### Remove User from Group {#removeuserfromgroup}

Remove a user from a group.

| Input      | Comments                                                         | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| Group ID   | The unique identifier for the group.                             |         |
| User ID    | The unique identifier for the user to be removed from the group. |         |
| Connection | The Okta connection to use.                                      |         |

### Reset User Password {#resetuserpassword}

Reset a user's password by ID or login.

| Input           | Comments                                                                                             | Default |
| --------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID              | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email      | When true, sends a deactivation email to the admin.                                                  | true    |
| Revoke Sessions | When true, revokes all of the user's active sessions.                                                | false   |
| Connection      | The Okta connection to use.                                                                          |         |

### Set User Password {#setuserpassword}

Set a user's password by ID or login.

| Input             | Comments                                              | Default |
| ----------------- | ----------------------------------------------------- | ------- |
| User ID           | ID of an existing Okta user.                          |         |
| New Password      | The new password for the user.                        |         |
| New Hash Password | The new password hash for the user.                   |         |
| Old Password      | The old password for the user.                        |         |
| Old Hash Password | The old password hash for the user.                   |         |
| Revoke Sessions   | When true, revokes all of the user's active sessions. | false   |
| Connection        | The Okta connection to use.                           |         |

### Suspend User {#suspenduser}

Suspend a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Connection | The Okta connection to use.                                                                          |         |

### Unenroll User Factor {#unenrolluserfactor}

Unenrolls a specific factor for the specified user.

| Input                      | Comments                                                                                                                              | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| User ID                    | ID of an existing Okta user.                                                                                                          |         |
| Factor ID                  | ID of an existing user factor.                                                                                                        |         |
| Remove Recovery Enrollment | When true, removes the phone number as both a recovery method and a factor. This parameter is only used for the sms and call factors. | false   |
| Connection                 | The Okta connection to use.                                                                                                           |         |

### Unlock User {#unlockuser}

Unlock a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Send Email | When true, sends a deactivation email to the admin.                                                  | false   |
| Connection | The Okta connection to use.                                                                          |         |

### Unsuspend User {#unsuspenduser}

Unsuspend a user by ID or login.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ID         | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user. |         |
| Connection | The Okta connection to use.                                                                          |         |

### Update Application User Assignment {#updateapplicationuserassignment}

Updates the app-specific profile and credentials for a user's application assignment.

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Application ID | The unique identifier for the application.                                                       |         |
| User ID        | ID of an existing Okta user.                                                                     |         |
| Profile        | The app-specific profile for the user. Either the profile or password/username must be provided. |         |
| Username       | The username of the user to whom the application will be assigned.                               |         |
| Password       | The user's password.                                                                             |         |
| Connection     | The Okta connection to use.                                                                      |         |

### Update Group {#updategroup}

Updates profile information for an existing group.

| Input             | Comments                             | Default |
| ----------------- | ------------------------------------ | ------- |
| Group ID          | The unique identifier for the group. |         |
| Group Name        | The name of the group.               |         |
| Group Description | A brief description of the group.    |         |
| Connection        | The Okta connection to use.          |         |

### Update User {#updateuser}

Update a user by ID or login.

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                                               | Default |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| ID                       | An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user.                                                                                                                                                                                                                                                                   |         |
| Login                    | The unique identifier for the user (username).                                                                                                                                                                                                                                                                                                                         |         |
| Email                    | The user's email address.                                                                                                                                                                                                                                                                                                                                              |         |
| Department               | The user's department.                                                                                                                                                                                                                                                                                                                                                 |         |
| Employee Number          | The user's employee number.                                                                                                                                                                                                                                                                                                                                            |         |
| Locale                   | The user's default location for purposes of localizing items such as currency, date time format, numerical representations, and so on. A locale value is a concatenation of the ISO 639-1 two-letter language code, an underscore, and the ISO 3166-1 two-letter country code.                                                                                         | en_US   |
| First Name               | The user's first name.                                                                                                                                                                                                                                                                                                                                                 |         |
| Last Name                | The user's last name.                                                                                                                                                                                                                                                                                                                                                  |         |
| Mobile Phone             | The user's mobile phone number.                                                                                                                                                                                                                                                                                                                                        |         |
| Password                 | The user's password. If not provided, an activation email will be sent to the user.                                                                                                                                                                                                                                                                                    |         |
| Hash Password            | The user's password hash.                                                                                                                                                                                                                                                                                                                                              |         |
| Question                 | The user's recovery question.                                                                                                                                                                                                                                                                                                                                          |         |
| Answer                   | The user's recovery answer.                                                                                                                                                                                                                                                                                                                                            |         |
| Realm ID                 | The ID of the realm to which the user belongs.                                                                                                                                                                                                                                                                                                                         |         |
| Profile Extra Attributes | List of additional profile attributes to include in the request. This can be used to include attributes that are not explicitly supported by this component. See [Okta's API documentation](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/updateUser!path=profile&t=request) for a list of supported attributes. |         |
| Connection               | The Okta connection to use.                                                                                                                                                                                                                                                                                                                                            |         |

### Verify Event Hook {#verifyeventhook}

Verify a specific event hook.

| Input         | Comments                    | Default |
| ------------- | --------------------------- | ------- |
| Event Hook ID | The ID of the event hook.   |         |
| Connection    | The Okta connection to use. |         |
