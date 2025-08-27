---
title: Microsoft Entra ID Connector
sidebar_label: Microsoft Entra ID
description: Microsoft Entra ID (Formerly Azure Active Directory) is a cloud-based identity and access management service from Microsoft that helps employees sign in and access resources. Use the Microsoft Entra ID component to manage your users, groups, and applications.
---

![Microsoft Entra ID](./assets/ms-entra-id.png#connector-icon)
Microsoft Entra ID (Formerly Azure Active Directory) is a cloud-based identity and access management service from Microsoft that helps employees sign in and access resources. Use the Microsoft Entra ID component to manage your users, groups, and applications.

## Connections

### OAuth 2.0

OAuth 2.0 Connectivity for Microsoft Entra ID

This authentication method may be used when an App requires granting admin consent to API permissions, in addition to authorizing the integration with the App's configured client credentials.

The Microsoft Azure Active Directory component authenticates requests through the [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/use-the-api).

### Creating an App Registration

To configure OAuth 2.0 you must first create an App through Active Directory in the [Microsoft Entra Admin Center](https://entra.microsoft.com/#home) or [Microsoft Azure Portal](https://portal.azure.com/#home).

1. Navigate to **App Registrations**
2. When creating the application you will be prompted to select **Supported account types**.
3. Select **Accounts in any organizational directory (Any Azure AD directory - Multitenant)**.
4. Navigate to **Redirect URI** and add the **Web** platform. Now enter the redirect URI as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
5. Select **Register** to complete.
6. In the App, navigate to **Certificates & Secrets** and select **New client secret**. Copy/save the **Value** for use in the connection configuration of your integration (the value will not be shown again).
7. Next, navigate to the **Overview** section and copy the **Application (client) ID**
8. Navigate to the **API Permissions** section to assign the proper permissions for the integration. Select **Add Permission**, select all permissions that are required for your desired integration
   and save these values for later. A full list of scopes can be found on
   the [Microsoft Graph API documentation](https://learn.microsoft.com/en-us/graph/permissions-reference) 1. Recommended scopes for Active Directory can be found in Microsoft Graph > Delegated permissions: 1. `Group.ReadWrite.All GroupMember.ReadWrite.All Application.ReadWrite.All User.Read.All offline_access`

### Configuring the Integration

Supply the following values to the **OAuth 2.0 Authorization Code** connection:

- **Client ID** enter the **Application (client) ID**
- **Client Secret** enter the **Value** provided (Do not use **Secret ID**)
- Provide the assigned API permissions as **Scopes** you assigned to your App. The default value will be set to the following:
  - Default example: `Group.ReadWrite.All GroupMember.ReadWrite.All Application.ReadWrite.All User.Read.All offline_access`
- If you didn't select Multitenant when creating the App, you will need to replace the **Authorize URL** and **Token URL** with ones specific to your tenant.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                      | Default                                                                                              |
| ------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Scopes        | Microsoft Entra ID Scopes.                                    | Group.ReadWrite.All GroupMember.ReadWrite.All Application.ReadWrite.All User.Read.All offline_access |
| Client ID     | Get this value from your App Registration in the Azure Portal |                                                                                                      |
| Client Secret | Get this value from your App Registration in the Azure Portal |                                                                                                      |

## Triggers

### Group Trigger

Get notified to this flow when a group changes.

| Input                | Comments                                                                                                                                                                                           | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                    |         |
| Change Type          | Indicates the type of change that raises a notification.                                                                                                                                           |         |
| Expiration Date Time | The date and time when the trigger subscription expires. If not specified, the subscription defaults to 29 days from the current date and time. This trigger must be reactivated after expiration. |         |

### User Trigger

Get notified to this flow when a user changes.

| Input                | Comments                                                                                                                                                                                           | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                    |         |
| Change Type          | Indicates the type of change that raises a notification.                                                                                                                                           |         |
| Expiration Date Time | The date and time when the trigger subscription expires. If not specified, the subscription defaults to 29 days from the current date and time. This trigger must be reactivated after expiration. |         |

### Webhook

Receive and validate webhook requests from Microsoft Entra ID for webhooks you configure.

## Actions

### Add Member to Group

Add a member to a group.

| Input                 | Comments                                                                               | Default |
| --------------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                        |         |
| Group Id              | The ID of the group to add the member to.                                              |         |
| Group Member OData ID | The @odata.id property with a reference by ID to a supported group member object type. |         |
| Debug Request         | Enabling this flag will log out the current request.                                   | false   |

### Create Application

Creates (registers) a new application.

| Input                 | Comments                                                                                                                                                                                                         | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                                  |         |
| Display Name          | The display name of the application.                                                                                                                                                                             |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. https://learn.microsoft.com/en-us/graph/api/application-post-applications |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                                                             | false   |

### Create Group

Create a new group. It can be a Microsoft 365 group, dynamic group, or security group.

| Input                 | Comments                                                                                                                                                                                                          | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                                   |         |
| Display Name          | The name to display in the address book for the group.                                                                                                                                                            |         |
| Mail Enabled          | Set to true for mail-enabled groups.                                                                                                                                                                              | true    |
| Mail Nickname         | The mail alias for the group, unique for Microsoft 365 groups in the organization. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () \ [] " ; : <> , SPACE. |         |
| Security Enabled      | Set to true for security-enabled groups, including Microsoft 365 groups. Note: Groups created using the Microsoft Entra admin center or the Azure portal always have securityEnabled initially set to true.       | true    |
| Group Types           | The type of group and its membership.                                                                                                                                                                             |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. https://learn.microsoft.com/en-us/graph/api/group-post-groups              |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                                                              | false   |

### Create Subscription

Create a subscription to receive notifications when changes occur in the specified object.

| Input                 | Comments                                                                                                                                                                                                           | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection            |                                                                                                                                                                                                                    |         |
| Change Type           | Indicates the type of change in the subscribed resource that raises a change notification. The supported values are: created, updated, deleted. Multiple values can be combined using a comma-separated list.      |         |
| Notification URL      | The URL of the endpoint that receives the change notifications.                                                                                                                                                    |         |
| Resource              | The resource that will be monitored for changes. See https://learn.microsoft.com/en-us/graph/api/resources/change-notifications-api-overview?view=graph-rest-1.0                                                   |         |
| Expiration Date Time  | Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to.                         |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions |         |
| Header                | A list of headers to send with the request.                                                                                                                                                                        |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                                                               | false   |

### Create User

Create a new user.

| Input                              | Comments                                                                                                                                                                                           | Default |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                         |                                                                                                                                                                                                    |         |
| Account Enabled                    | Indicates if the account is enabled.                                                                                                                                                               | true    |
| Display Name                       | The display name of the user.                                                                                                                                                                      |         |
| Force Change Password Next Sign In | Indicates if the user is forced to change their password on next sign in.                                                                                                                          | true    |
| Password                           | The password of the user.                                                                                                                                                                          |         |
| User Principal Name                | The user principal name of the user.                                                                                                                                                               |         |
| Domain                             | The domain for the user, this must be an existing domain in the tenant.                                                                                                                            |         |
| Additional Properties              | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. https://learn.microsoft.com/en-us/graph/api/user-post-users |         |
| Debug Request                      | Enabling this flag will log out the current request.                                                                                                                                               | false   |

### Delete Application

Delete application object.

| Input                 | Comments                                             | Default |
| --------------------- | ---------------------------------------------------- | ------- |
| Connection            |                                                      |         |
| Application Object ID | The ID of the application to delete.                 |         |
| Debug Request         | Enabling this flag will log out the current request. | false   |

### Delete Group

Delete group object.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Group Id      | The ID of the group to delete.                       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Instanced Subscriptions

Delete all webhooks that point to a flow in this instance.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Subscription

Deletes a subscription object.

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      |                                                      |         |
| Subscription ID | The ID of the subscription to delete.                |         |
| Debug Request   | Enabling this flag will log out the current request. | false   |

### Delete User

Deletes a User.

| Input         | Comments                                                                                  | Default |
| ------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                           |         |
| User Id       | Unique Identifier for the user to delete. This can be the user's id or userPrincipalName. |         |
| Debug Request | Enabling this flag will log out the current request.                                      | false   |

### Get Application

Read properties of an application object.

| Input                 | Comments                                             | Default |
| --------------------- | ---------------------------------------------------- | ------- |
| Connection            |                                                      |         |
| Application Object ID | The ID of the application to read.                   |         |
| Debug Request         | Enabling this flag will log out the current request. | false   |

### Get Group

Read properties of a group object.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Group Id      |                                                      |         |
| Select        | Filters properties (columns).                        |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Subscription

Read properties of a subscription object.

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      |                                                      |         |
| Subscription ID | The ID of the subscription to read.                  |         |
| Debug Request   | Enabling this flag will log out the current request. | false   |

### Get User

Read properties and relationships of the User object.

| Input         | Comments                                                                               | Default |
| ------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                        |         |
| User Id       | Unique Identifier for the user to get. This can be the user's id or userPrincipalName. |         |
| Select        | Filters properties (columns).                                                          |         |
| Debug Request | Enabling this flag will log out the current request.                                   | false   |

### List Applications

Retrieve the list of applications in the organization.

| Input                             | Comments                                                                                                         | Default |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                        |                                                                                                                  |         |
| Count                             | Retrieves the total count of matching resources. Requires 'Eventual Consistency Level Header' turned on to work. | false   |
| Expand                            | Retrieves related resources.                                                                                     |         |
| Filter                            | Filters results (rows).                                                                                          |         |
| Order By                          | Orders results.                                                                                                  |         |
| Search                            | Returns results based on search criteria.                                                                        |         |
| Select                            | Filters properties (columns).                                                                                    |         |
| Top                               | Sets the page size of results.                                                                                   |         |
| Get All Paginated Results         | Retrieves all paginated results. Ignores the 'Top' input and retrieves all results.                              | false   |
| Eventual Consistency Level Header | Add the header to the request to specify the eventual consistency level. Required for some OData properties.     | false   |
| Debug Request                     | Enabling this flag will log out the current request.                                                             | false   |

### List Changes

Track changes in an object and its children over time.

| Input                  | Comments                                                                                                                                                                         | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                  |         |
| URL to fetch for delta | The URL to track changes in an object and its children over time. You can use @odata.nextLink or @odata.deltaLink here to get the next set of changes.                           |         |
| Skip Token             | A state token returned in the @odata.nextLink URL of the previous delta function call, indicating there are further changes to be tracked in the same user collection.           |         |
| Delta Token            | A state token returned in the @odata.deltaLink URL of the previous delta function call for the same user collection, indicating the completion of that round of change tracking. |         |
| Select                 | Filters properties (columns).                                                                                                                                                    |         |
| Filter                 | Filters results (rows).                                                                                                                                                          |         |
| Return Minimal         | Returns only the object properties that have changed since the last round when using @odata.deltaLink.                                                                           | false   |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                                             | false   |

### List Group

List group objects and their properties.

| Input                             | Comments                                                                                                         | Default |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                        |                                                                                                                  |         |
| Count                             | Retrieves the total count of matching resources. Requires 'Eventual Consistency Level Header' turned on to work. | false   |
| Expand                            | Retrieves related resources.                                                                                     |         |
| Filter                            | Filters results (rows).                                                                                          |         |
| Order By                          | Orders results.                                                                                                  |         |
| Search                            | Returns results based on search criteria.                                                                        |         |
| Select                            | Filters properties (columns).                                                                                    |         |
| Top                               | Sets the page size of results.                                                                                   |         |
| Get All Paginated Results         | Retrieves all paginated results. Ignores the 'Top' input and retrieves all results.                              | false   |
| Eventual Consistency Level Header | Add the header to the request to specify the eventual consistency level. Required for some OData properties.     | false   |
| Debug Request                     | Enabling this flag will log out the current request.                                                             | false   |

### List Group Members

Get the direct members of this group from the members navigation property.

| Input                             | Comments                                                                                                         | Default |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                        |                                                                                                                  |         |
| Group Id                          |                                                                                                                  |         |
| Filter                            | Filters results (rows).                                                                                          |         |
| Count                             | Retrieves the total count of matching resources. Requires 'Eventual Consistency Level Header' turned on to work. | false   |
| Select                            | Filters properties (columns).                                                                                    |         |
| Search                            | Returns results based on search criteria.                                                                        |         |
| Top                               | Sets the page size of results.                                                                                   |         |
| Get All Paginated Results         | Retrieves all paginated results. Ignores the 'Top' input and retrieves all results.                              | false   |
| Expand                            | Retrieves related resources.                                                                                     |         |
| Eventual Consistency Level Header | Add the header to the request to specify the eventual consistency level. Required for some OData properties.     | false   |
| Debug Request                     | Enabling this flag will log out the current request.                                                             | false   |

### List Subscriptions

Lists active subscriptions.

| Input                     | Comments                                             | Default |
| ------------------------- | ---------------------------------------------------- | ------- |
| Connection                |                                                      |         |
| Get All Paginated Results | Set to true to retrieve all subscriptions.           | false   |
| Debug Request             | Enabling this flag will log out the current request. | false   |

### List Users

Retrieve a list of user objects.

| Input                             | Comments                                                                                                         | Default |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                        |                                                                                                                  |         |
| Count                             | Retrieves the total count of matching resources. Requires 'Eventual Consistency Level Header' turned on to work. | false   |
| Expand                            | Retrieves related resources.                                                                                     |         |
| Filter                            | Filters results (rows).                                                                                          |         |
| Order By                          | Orders results.                                                                                                  |         |
| Search                            | Returns results based on search criteria.                                                                        |         |
| Select                            | Filters properties (columns).                                                                                    |         |
| Top                               | Sets the page size of results.                                                                                   |         |
| Get All Paginated Results         | Retrieves all paginated results. Ignores the 'Top' input and retrieves all results.                              | false   |
| Eventual Consistency Level Header | Add the header to the request to specify the eventual consistency level. Required for some OData properties.     | false   |
| Debug Request                     | Enabling this flag will log out the current request.                                                             | false   |

### Raw Request

Send raw HTTP request to Microsoft Entra ID.

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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                        | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                               | false   |

### Remove Member of Group

Remove a member from a Microsoft 365 group or a security group through the members navigation property.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Group Id      | The ID of the group to remove the member from.       |         |
| Member ID     | The ID of the member to remove from the group.       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Subscription

Updates a subscription expiration time for renewal and/or updates the notificationUrl for delivery.

| Input                | Comments                                                                                                                                                                                   | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection           |                                                                                                                                                                                            |         |
| Subscription ID      | The ID of the subscription to update.                                                                                                                                                      |         |
| Notification URL     | The URL of the endpoint that receives the change notifications.                                                                                                                            |         |
| Expiration Date Time | Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to. |         |
| Debug Request        | Enabling this flag will log out the current request.                                                                                                                                       | false   |

### Update User

Update the properties of a User object.

| Input                 | Comments                                                                                                                                                                                       | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                |         |
| User Id               | Unique Identifier for the user to update. This can be the user's id or userPrincipalName.                                                                                                      |         |
| Account Enabled       | Indicates if the account is enabled.                                                                                                                                                           |         |
| Display Name          | The display name of the user.                                                                                                                                                                  |         |
| User Principal Name   | The updated user principal name of the user. Required if 'Domain' input is provided.                                                                                                           |         |
| Domain                | The updated domain for the user, this must be an existing domain in the tenant. Required if 'User Principal Name' input is provided.                                                           |         |
| First Name            | The updated first name of the user.                                                                                                                                                            |         |
| Last Name             | The updated last name of the user.                                                                                                                                                             |         |
| Job Title             | The updated job title of the user.                                                                                                                                                             |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. https://learn.microsoft.com/en-us/graph/api/user-update |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                                           | false   |

### Upsert Application

Create a new application if it doesn't exist, or update the properties of an existing application.

| Input                 | Comments                                                                                                                                                                                              | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                       |         |
| Unique Name           | The unique name of the application to update or create.                                                                                                                                               |         |
| Use as Upsert         | Set to true to create a new application if it doesn't exist. Set to false to only update an existing application.                                                                                     | true    |
| Display Name          | The display name of the application.                                                                                                                                                                  |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. https://learn.microsoft.com/en-us/graph/api/application-upsert |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                                                  | false   |

### Upsert Group

Create a new group if it doesn't exist, or update the properties of an existing group.

| Input                 | Comments                                                                                                                                                                                                          | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                                   |         |
| Unique Name           | The unique name of the group to update or create.                                                                                                                                                                 |         |
| Use as Upsert         | Set to true to create a new group if it doesn't exist. Set to false to only update an existing group.                                                                                                             | true    |
| Display Name          | The name to display in the address book for the group.                                                                                                                                                            |         |
| Mail Enabled          | Set to true for mail-enabled groups.                                                                                                                                                                              |         |
| Mail Nickname         | The mail alias for the group, unique for Microsoft 365 groups in the organization. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () \ [] " ; : <> , SPACE. |         |
| Security Enabled      | Set to true for security-enabled groups, including Microsoft 365 groups. Note: Groups created using the Microsoft Entra admin center or the Azure portal always have securityEnabled initially set to true.       |         |
| Group Types           | The type of group and its membership.                                                                                                                                                                             |         |
| Additional Properties | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. https://learn.microsoft.com/en-us/graph/api/group-upsert                   |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                                                              | false   |
