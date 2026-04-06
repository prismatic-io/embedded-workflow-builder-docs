---
title: Microsoft Entra ID Connector
sidebar_label: Microsoft Entra ID
description: Manage users, groups, and applications in Microsoft Entra ID (formerly Azure Active Directory).
---

![Microsoft Entra ID](./assets/ms-entra-id.png#connector-icon)
[Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) (formerly Azure Active Directory) is a cloud-based identity and access management service from Microsoft that helps employees sign in and access resources.

Use the Microsoft Entra ID component to manage users, groups, and applications.

## API Documentation

This component was built using the [Microsoft Graph REST API v1.0](https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0&preserve-view=true).

## Connections

### OAuth 2.0 {#msentraidoauth2}

Authenticate using OAuth 2.0

This authentication method may be used when an App requires granting admin consent to API permissions, in addition to authorizing the integration with the App's configured client credentials.

The **Microsoft Entra ID** component authenticates requests through the [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/use-the-api).

#### Prerequisites

- A Microsoft Azure account with access to the [Microsoft Entra Admin Center](https://entra.microsoft.com/#home) or [Microsoft Azure Portal](https://portal.azure.com/#home)
- Permissions to create App Registrations in the tenant

#### Setup Steps

1. Navigate to **App Registrations**.
2. When creating the application, select **Supported account types**.
3. Select **Accounts in any organizational directory (Any Azure AD directory - Multitenant)**.
4. Navigate to **Redirect URI** and add the **Web** platform. Enter the redirect URI as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
5. Select **Register** to complete.
6. In the App, navigate to **Certificates & Secrets** and select **New client secret**. Copy and save the **Value** for use in the connection configuration of the integration (the value will not be shown again).
7. Next, navigate to the **Overview** section and copy the **Application (client) ID**.
8. Navigate to the **API Permissions** section to assign the proper permissions for the integration. Select **Add Permission** and select all permissions that are required for the desired integration. A full list of scopes can be found on the [Microsoft Graph API documentation](https://learn.microsoft.com/en-us/graph/permissions-reference).
   - Recommended scopes for Active Directory can be found in Microsoft Graph > Delegated permissions:
   - `Group.ReadWrite.All GroupMember.ReadWrite.All Application.ReadWrite.All User.Read.All offline_access`

#### Configure the Connection

Supply the following values to the **OAuth 2.0** connection:

- **Client ID**: The **Application (client) ID** from the App Registration.
- **Client Secret**: The **Value** provided from Certificates & Secrets (not the **Secret ID**).
- **Scopes**: The assigned API permissions. The default value is set to: `Group.ReadWrite.All GroupMember.ReadWrite.All Application.ReadWrite.All User.Read.All offline_access`
- **Authorize URL**: The OAuth 2.0 authorization endpoint. Defaults to `https://login.microsoftonline.com/common/oauth2/v2.0/authorize`. If Multitenant was not selected when creating the App, replace with a tenant-specific URL.
- **Token URL**: The OAuth 2.0 token endpoint. Defaults to `https://login.microsoftonline.com/common/oauth2/v2.0/token`. If Multitenant was not selected, replace with a tenant-specific URL.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                         | Default                                                                                              |
| ------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 authorization endpoint for Microsoft Entra ID.     | https://login.microsoftonline.com/common/oauth2/v2.0/authorize                                       |
| Token URL     | The OAuth 2.0 token endpoint for Microsoft Entra ID.             | https://login.microsoftonline.com/common/oauth2/v2.0/token                                           |
| Scopes        | Space-separated list of OAuth permission scopes to request.      | Group.ReadWrite.All GroupMember.ReadWrite.All Application.ReadWrite.All User.Read.All offline_access |
| Client ID     | The Client ID from the App Registration in the Azure Portal.     |                                                                                                      |
| Client Secret | The Client Secret from the App Registration in the Azure Portal. |                                                                                                      |

## Triggers

### Group Changes {#grouptrigger}

Receive group change notifications from Microsoft Entra ID. Automatically creates and manages a webhook subscription for groups when the instance is deployed, and removes the subscription when the instance is deleted.

| Input                | Comments                                                                                                                                                                                                          | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft Entra ID connection to use.                                                                                                                                                                         |         |
| Change Type          | The type of change on the subscribed resource that triggers a notification. 'Created / Updated / Soft Deleted' covers created, updated, and soft-deleted events. 'Permanently Deleted' covers permanent deletion. |         |
| Expiration Date Time | The date and time when the trigger subscription expires. If not specified, the subscription defaults to 29 days from the current date and time. This trigger must be reactivated after expiration.                |         |

### User Changes {#usertrigger}

Receive user change notifications from Microsoft Entra ID. Automatically creates and manages a webhook subscription for users when the instance is deployed, and removes the subscription when the instance is deleted.

| Input                | Comments                                                                                                                                                                                                          | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft Entra ID connection to use.                                                                                                                                                                         |         |
| Change Type          | The type of change on the subscribed resource that triggers a notification. 'Created / Updated / Soft Deleted' covers created, updated, and soft-deleted events. 'Permanently Deleted' covers permanent deletion. |         |
| Expiration Date Time | The date and time when the trigger subscription expires. If not specified, the subscription defaults to 29 days from the current date and time. This trigger must be reactivated after expiration.                |         |

### Webhook {#webhook}

Receive and validate webhook requests from Microsoft Entra ID for manually configured webhook subscriptions.

## Actions

### Add Member to Group {#addmembertogroup}

Add a member to a group.

| Input                 | Comments                                                                               | Default |
| --------------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection            | The Microsoft Entra ID connection to use.                                              |         |
| Group ID              | The ID of the group to add the member to.                                              |         |
| Group Member OData ID | The @odata.id property with a reference by ID to a supported group member object type. |         |

### Create Application {#createapplication}

Creates (registers) a new application.

| Input                 | Comments                                                                                                                                                                                                                                        | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Microsoft Entra ID connection to use.                                                                                                                                                                                                       |         |
| Display Name          | The display name of the application.                                                                                                                                                                                                            |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. See [Create Application API](https://learn.microsoft.com/en-us/graph/api/application-post-applications). |         |

### Create Group {#creategroup}

Create a new group. It can be a Microsoft 365 group, dynamic group, or security group.

| Input                 | Comments                                                                                                                                                                                                                      | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Microsoft Entra ID connection to use.                                                                                                                                                                                     |         |
| Display Name          | The name to display in the address book for the group.                                                                                                                                                                        |         |
| Mail Enabled          | When true, the group is mail-enabled.                                                                                                                                                                                         | true    |
| Mail Nickname         | The mail alias for the group, unique for Microsoft 365 groups in the organization. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () \ [] " ; : <> , SPACE.             |         |
| Security Enabled      | When true, the group is security-enabled, including Microsoft 365 groups. Groups created using the Microsoft Entra admin center or the Azure portal always have securityEnabled initially set to true.                        | true    |
| Group Types           | The type of group and its membership.                                                                                                                                                                                         |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. See [Create Group API](https://learn.microsoft.com/en-us/graph/api/group-post-groups). |         |

### Create Subscription {#createsubscription}

Create a subscription to receive notifications when changes occur in the specified object.

| Input                 | Comments                                                                                                                                                                                                                                           | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Microsoft Entra ID connection to use.                                                                                                                                                                                                          |         |
| Change Type           | Indicates the type of change in the subscribed resource that raises a change notification. The supported values are: created, updated, deleted. Multiple values can be combined using a comma-separated list.                                      |         |
| Notification URL      | The URL of the endpoint that receives the change notifications.                                                                                                                                                                                    |         |
| Resource              | The resource that will be monitored for changes. See [supported resources](https://learn.microsoft.com/en-us/graph/api/resources/change-notifications-api-overview?view=graph-rest-1.0) for a full list.                                           |         |
| Expiration Date Time  | Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to. Format: ISO 8601 (e.g., 2016-11-20T18:23:45.9356913Z).  |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. See [Create Subscription API](https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions). |         |
| Header                | A list of headers to send with the request.                                                                                                                                                                                                        |         |

### Create User {#createuser}

Create a new user.

| Input                              | Comments                                                                                                                                                                                                                   | Default |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                         | The Microsoft Entra ID connection to use.                                                                                                                                                                                  |         |
| Account Enabled                    | When true, the account is enabled.                                                                                                                                                                                         | true    |
| Display Name                       | The display name of the user.                                                                                                                                                                                              |         |
| Force Change Password Next Sign In | When true, the user is required to change their password on the next sign-in.                                                                                                                                              | true    |
| Password                           | The initial password for the user account. Must meet the tenant's password complexity requirements.                                                                                                                        |         |
| User Principal Name                | The user principal name (UPN) for the account, in the format alias@domain. The domain must be a verified domain in the tenant.                                                                                             |         |
| Domain                             | The domain for the user, this must be an existing domain in the tenant.                                                                                                                                                    |         |
| Additional Properties              | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. See [Create User API](https://learn.microsoft.com/en-us/graph/api/user-post-users). |         |

### Delete Application {#deleteapplication}

Deletes an application object.

| Input                 | Comments                                  | Default |
| --------------------- | ----------------------------------------- | ------- |
| Connection            | The Microsoft Entra ID connection to use. |         |
| Application Object ID | The ID of the application to delete.      |         |

### Delete Group {#deletegroup}

Deletes a group object.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Microsoft Entra ID connection to use. |         |
| Group ID   | The ID of the group to delete.            |         |

### Delete Instanced Subscriptions {#deleteinstancedsubscriptions}

Delete all webhooks that point to a flow in this instance.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Microsoft Entra ID connection to use. |         |

### Delete Subscription {#deletesubscription}

Deletes a subscription object.

| Input           | Comments                                  | Default |
| --------------- | ----------------------------------------- | ------- |
| Connection      | The Microsoft Entra ID connection to use. |         |
| Subscription ID | The ID of the subscription to delete.     |         |

### Delete User {#deleteuser}

Deletes a user.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Entra ID connection to use.                                                 |         |
| User ID    | Unique Identifier for the user to delete. This can be the user's id or userPrincipalName. |         |

### Get Application {#getapplication}

Read properties of an application object.

| Input                 | Comments                                  | Default |
| --------------------- | ----------------------------------------- | ------- |
| Connection            | The Microsoft Entra ID connection to use. |         |
| Application Object ID | The ID of the application to read.        |         |

### Get Group {#getgroup}

Read properties of a group object.

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Entra ID connection to use.                                                     |         |
| Group ID   | The unique identifier of the group.                                                           |         |
| Select     | A comma-separated list of OData properties to include in the response, reducing payload size. |         |

### Get Subscription {#getsubscription}

Read properties of a subscription object.

| Input           | Comments                                  | Default |
| --------------- | ----------------------------------------- | ------- |
| Connection      | The Microsoft Entra ID connection to use. |         |
| Subscription ID | The ID of the subscription to read.       |         |

### Get User {#getuser}

Reads the properties and relationships of a user object.

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Entra ID connection to use.                                                     |         |
| User ID    | Unique Identifier for the user to get. This can be the user's id or userPrincipalName.        |         |
| Select     | A comma-separated list of OData properties to include in the response, reducing payload size. |         |

### List Applications {#listapplications}

Retrieve the list of applications in the organization.

| Input                             | Comments                                                                                                                                   | Default |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                        | The Microsoft Entra ID connection to use.                                                                                                  |         |
| Count                             | When true, retrieves the total count of matching resources. Requires 'Eventual Consistency Level Header' to be enabled.                    | false   |
| Expand                            | A comma-separated list of OData relationships to expand and include in the response.                                                       |         |
| Filter                            | An OData filter expression to narrow results. For example: startswith(givenName,'J').                                                      |         |
| Order By                          | An OData expression to sort results, such as 'displayName desc' or 'createdDateTime asc'.                                                  |         |
| Search                            | An OData search expression to return results matching the criteria. Requires Eventual Consistency Level Header.                            |         |
| Select                            | A comma-separated list of OData properties to include in the response, reducing payload size.                                              |         |
| Top                               | The maximum number of items to return in the result set (OData $top).                                                                      |         |
| Get All Paginated Results         | When true, automatically fetches all pages of results using pagination. Ignores the 'Top' input.                                           | false   |
| Eventual Consistency Level Header | When true, adds the ConsistencyLevel: eventual header to the request. Required for some OData query parameters such as $count and $search. | false   |

### List Changes {#listchanges}

Retrieves a list of changes in an object and its children over time.

| Input          | Comments                                                                                                                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Microsoft Entra ID connection to use.                                                                                                                                        |         |
| Delta URL      | The URL to track changes in an object and its children over time. Use @odata.nextLink or @odata.deltaLink to get the next set of changes.                                        |         |
| Skip Token     | A state token returned in the @odata.nextLink URL of the previous delta function call, indicating there are further changes to be tracked in the same user collection.           |         |
| Delta Token    | A state token returned in the @odata.deltaLink URL of the previous delta function call for the same user collection, indicating the completion of that round of change tracking. |         |
| Select         | A comma-separated list of OData properties to include in the response, reducing payload size.                                                                                    |         |
| Filter         | An OData filter expression to narrow results. For example: startswith(givenName,'J').                                                                                            |         |
| Return Minimal | When true, returns only the object properties that have changed since the last round when using @odata.deltaLink.                                                                | false   |

### List Group Members {#listgroupmembers}

Retrieves the direct members of a group.

| Input                             | Comments                                                                                                                                   | Default |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                        | The Microsoft Entra ID connection to use.                                                                                                  |         |
| Group ID                          | The unique identifier of the group.                                                                                                        |         |
| Filter                            | An OData filter expression to narrow results. For example: startswith(givenName,'J').                                                      |         |
| Count                             | When true, retrieves the total count of matching resources. Requires 'Eventual Consistency Level Header' to be enabled.                    | false   |
| Select                            | A comma-separated list of OData properties to include in the response, reducing payload size.                                              |         |
| Search                            | An OData search expression to return results matching the criteria. Requires Eventual Consistency Level Header.                            |         |
| Top                               | The maximum number of items to return in the result set (OData $top).                                                                      |         |
| Get All Paginated Results         | When true, automatically fetches all pages of results using pagination. Ignores the 'Top' input.                                           | false   |
| Expand                            | A comma-separated list of OData relationships to expand and include in the response.                                                       |         |
| Eventual Consistency Level Header | When true, adds the ConsistencyLevel: eventual header to the request. Required for some OData query parameters such as $count and $search. | false   |

### List Groups {#listgroup}

List group objects and their properties.

| Input                             | Comments                                                                                                                                   | Default |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                        | The Microsoft Entra ID connection to use.                                                                                                  |         |
| Count                             | When true, retrieves the total count of matching resources. Requires 'Eventual Consistency Level Header' to be enabled.                    | false   |
| Expand                            | A comma-separated list of OData relationships to expand and include in the response.                                                       |         |
| Filter                            | An OData filter expression to narrow results. For example: startswith(givenName,'J').                                                      |         |
| Order By                          | An OData expression to sort results, such as 'displayName desc' or 'createdDateTime asc'.                                                  |         |
| Search                            | An OData search expression to return results matching the criteria. Requires Eventual Consistency Level Header.                            |         |
| Select                            | A comma-separated list of OData properties to include in the response, reducing payload size.                                              |         |
| Top                               | The maximum number of items to return in the result set (OData $top).                                                                      |         |
| Get All Paginated Results         | When true, automatically fetches all pages of results using pagination. Ignores the 'Top' input.                                           | false   |
| Eventual Consistency Level Header | When true, adds the ConsistencyLevel: eventual header to the request. Required for some OData query parameters such as $count and $search. | false   |

### List Subscriptions {#listsubscriptions}

Retrieves a list of active subscriptions.

| Input                     | Comments                                                     | Default |
| ------------------------- | ------------------------------------------------------------ | ------- |
| Connection                | The Microsoft Entra ID connection to use.                    |         |
| Get All Paginated Results | When true, automatically fetches all pages of subscriptions. | false   |

### List Users {#listusers}

Retrieve a list of user objects.

| Input                             | Comments                                                                                                                                   | Default |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                        | The Microsoft Entra ID connection to use.                                                                                                  |         |
| Count                             | When true, retrieves the total count of matching resources. Requires 'Eventual Consistency Level Header' to be enabled.                    | false   |
| Expand                            | A comma-separated list of OData relationships to expand and include in the response.                                                       |         |
| Filter                            | An OData filter expression to narrow results. For example: startswith(givenName,'J').                                                      |         |
| Order By                          | An OData expression to sort results, such as 'displayName desc' or 'createdDateTime asc'.                                                  |         |
| Search                            | An OData search expression to return results matching the criteria. Requires Eventual Consistency Level Header.                            |         |
| Select                            | A comma-separated list of OData properties to include in the response, reducing payload size.                                              |         |
| Top                               | The maximum number of items to return in the result set (OData $top).                                                                      |         |
| Get All Paginated Results         | When true, automatically fetches all pages of results using pagination. Ignores the 'Top' input.                                           | false   |
| Eventual Consistency Level Header | When true, adds the ConsistencyLevel: eventual header to the request. Required for some OData query parameters such as $count and $search. | false   |

### Raw Request {#rawrequest}

Send raw HTTP request to Microsoft Entra ID.

| Input                   | Comments                                                                                                                                                                                                    | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Microsoft Entra ID connection to use.                                                                                                                                                                   |         |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                        | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                               | false   |

### Remove Member From Group {#removememberofgroup}

Removes a member from a Microsoft 365 group or a security group.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Microsoft Entra ID connection to use.      |         |
| Group ID   | The ID of the group to remove the member from. |         |
| Member ID  | The ID of the member to remove from the group. |         |

### Update Subscription {#updatesubscription}

Updates a subscription expiration time for renewal and/or updates the notificationUrl for delivery.

| Input                | Comments                                                                                                                                                                                                                                          | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft Entra ID connection to use.                                                                                                                                                                                                         |         |
| Subscription ID      | The ID of the subscription to update.                                                                                                                                                                                                             |         |
| Notification URL     | The URL of the endpoint that receives the change notifications.                                                                                                                                                                                   |         |
| Expiration Date Time | Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to. Format: ISO 8601 (e.g., 2016-11-20T18:23:45.9356913Z). |         |

### Update User {#updateuser}

Update the properties of a User object.

| Input                 | Comments                                                                                                                                                                                                               | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Microsoft Entra ID connection to use.                                                                                                                                                                              |         |
| User ID               | Unique Identifier for the user to update. This can be the user's id or userPrincipalName.                                                                                                                              |         |
| Account Enabled       | When true, the account is enabled.                                                                                                                                                                                     |         |
| Display Name          | The display name of the user.                                                                                                                                                                                          |         |
| User Principal Name   | The updated user principal name of the user. Required if 'Domain' input is provided.                                                                                                                                   |         |
| Domain                | The updated domain for the user, this must be an existing domain in the tenant. Required if 'User Principal Name' input is provided.                                                                                   |         |
| First Name            | The updated first name of the user.                                                                                                                                                                                    |         |
| Last Name             | The updated last name of the user.                                                                                                                                                                                     |         |
| Job Title             | The updated job title of the user.                                                                                                                                                                                     |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. See [Update User API](https://learn.microsoft.com/en-us/graph/api/user-update). |         |

### Upsert Application {#upsertapplication}

Create a new application if it doesn't exist, or update the properties of an existing application.

| Input                 | Comments                                                                                                                                                                                                                             | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection            | The Microsoft Entra ID connection to use.                                                                                                                                                                                            |         |
| Unique Name           | The unique name of the application to update or create.                                                                                                                                                                              |         |
| Use as Upsert         | When true, creates a new application if it does not exist. When false, only updates an existing application.                                                                                                                         | true    |
| Display Name          | The display name of the application.                                                                                                                                                                                                 |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. See [Upsert Application API](https://learn.microsoft.com/en-us/graph/api/application-upsert). |         |

### Upsert Group {#upsertgroup}

Create a new group if it doesn't exist, or update the properties of an existing group.

| Input                 | Comments                                                                                                                                                                                                                 | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection            | The Microsoft Entra ID connection to use.                                                                                                                                                                                |         |
| Unique Name           | The unique name of the group to update or create.                                                                                                                                                                        |         |
| Use as Upsert         | When true, creates a new group if it does not exist. When false, only updates an existing group.                                                                                                                         | true    |
| Display Name          | The name to display in the address book for the group.                                                                                                                                                                   |         |
| Mail Enabled          | When true, the group is mail-enabled.                                                                                                                                                                                    |         |
| Mail Nickname         | The mail alias for the group, unique for Microsoft 365 groups in the organization. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () \ [] " ; : <> , SPACE.        |         |
| Security Enabled      | When true, the group is security-enabled, including Microsoft 365 groups. Groups created using the Microsoft Entra admin center or the Azure portal always have securityEnabled initially set to true.                   |         |
| Group Types           | The type of group and its membership.                                                                                                                                                                                    |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. See [Upsert Group API](https://learn.microsoft.com/en-us/graph/api/group-upsert). |         |
