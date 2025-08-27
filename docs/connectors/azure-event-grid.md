---
title: Azure Event Grid Connector
sidebar_label: Azure Event Grid
description: Azure Event Grid is an event routing service that can be used to build event driven applications by distributing events from various sources to subscribers.
---

![Azure Event Grid](./assets/azure-event-grid.png#connector-icon)
Azure Event Grid is an event routing service that can be used to build event driven applications by distributing events from various sources to subscribers.

## Connections

### Microsoft Event Grid OAuth Connection

Connect to Microsoft Event Grid

This authentication method may be used when an App requires granting admin consent to API permissions, in addition to authorizing the integration with the App's configured client credentials.

The Microsoft Event Grid component authenticates requests through the [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/use-the-api).

### Creating an App Registration

To configure OAuth 2.0 you must first create an App through Active Directory in the [Microsoft Azure Portal](https://portal.azure.com/#home).

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

Supply the following values to the **OAuth 2.0 Authorization Code** connection in your integration:

- **Client ID** enter the **Application (client) ID**
- **Client Secret** enter the **Value** provided (Do not use **Secret ID**)
- If you didn't select Multitenant when creating the App, you will need to replace the **Authorize URL** and **Token URL** with ones specific to your tenant.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                       | Default                                                        |
| ------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for your Microsoft Event Grid. | https://login.microsoftonline.com/common/oauth2/v2.0/authorize |
| Token URL     | The OAuth 2.0 Token URL for your Microsoft Event Grid          | https://login.microsoftonline.com/common/oauth2/v2.0/token     |
| Client ID     | Get this value from your App Registration in the Azure Portal  |                                                                |
| Client Secret | Get this value from your App Registration in the Azure Portal  |                                                                |

## Triggers

### Event Grid Trigger

Handle validation and delivery of Event Grid events

| Input                      | Comments                           | Default |
| -------------------------- | ---------------------------------- | ------- |
| Event Topics to Listen For | The topics to listen for events on |         |

## Actions

### Create or Update Event Subscription

Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.

| Input                   | Comments                                                                                            | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                     |         |
| Subscription ID         | The ID of the subscription to use.                                                                  |         |
| Topic                   | The name of the topic to subscribe to.                                                              |         |
| Resource Group Name     | The name of the resource group to use.                                                              |         |
| Event Subscription Name | The name of the event subscription to use.                                                          |         |
| Event Delivery Schema   | The event delivery schema for the event subscription.                                               |         |
| Webhook URL             | The URL to send the event to. If not provided, the event will be sent to the current flow endpoint. |         |
| Body Fields             | Extra fields to include in the body of the request.                                                 |         |
| Debug Request           | Enabling this flag will log out the current request.                                                | false   |

### Delete Event Subscription

Delete an existing event subscription.

| Input                   | Comments                                             | Default |
| ----------------------- | ---------------------------------------------------- | ------- |
| Connection              |                                                      |         |
| Subscription ID         | The ID of the subscription to use.                   |         |
| Topic                   | The name of the topic to subscribe to.               |         |
| Resource Group Name     | The name of the resource group to use.               |         |
| Event Subscription Name | The name of the event subscription to use.           |         |
| Debug Request           | Enabling this flag will log out the current request. | false   |

### Get Event Subscription

Get properties of an event subscription.

| Input                   | Comments                                             | Default |
| ----------------------- | ---------------------------------------------------- | ------- |
| Connection              |                                                      |         |
| Subscription ID         | The ID of the subscription to use.                   |         |
| Topic                   | The name of the topic to subscribe to.               |         |
| Resource Group Name     | The name of the resource group to use.               |         |
| Event Subscription Name | The name of the event subscription to use.           |         |
| Debug Request           | Enabling this flag will log out the current request. | false   |

### List Event Subscriptions

List all event subscriptions that have been created for a specific topic.

| Input               | Comments                                                                                                                                                                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                                     |         |
| Subscription ID     | The ID of the subscription to use.                                                                                                                                                                                                                                  |         |
| Topic               | The name of the topic to subscribe to.                                                                                                                                                                                                                              |         |
| Resource Group Name | The name of the resource group to use.                                                                                                                                                                                                                              |         |
| Fetch All           | If true, fetch all results. If false, fetch only the first page.                                                                                                                                                                                                    | false   |
| Top                 | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.                                                                    |         |
| Filter              | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. |         |
| Next Link           | The next link to fetch the next page of results.                                                                                                                                                                                                                    |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                                                                                                                | false   |

### Publish Events

Publishes a batch of events to an Azure Event Grid topic.

| Input            | Comments                                                              | Default |
| ---------------- | --------------------------------------------------------------------- | ------- |
| Connection       |                                                                       |         |
| Topic Host Name  | The host name of the topic.                                           |         |
| Topic Access Key | The access key of the topic.                                          |         |
| Events           | The events to publish. The events must match the schema of the topic. |         |
| Debug Request    | Enabling this flag will log out the current request.                  | false   |

### Update Event Subscription

Asynchronously updates an existing event subscription.

| Input                   | Comments                                                                                            | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                     |         |
| Subscription ID         | The ID of the subscription to use.                                                                  |         |
| Topic                   | The name of the topic to subscribe to.                                                              |         |
| Resource Group Name     | The name of the resource group to use.                                                              |         |
| Event Subscription Name | The name of the event subscription to use.                                                          |         |
| Event Delivery Schema   | The event delivery schema for the event subscription.                                               |         |
| Webhook URL             | The URL to send the event to. If not provided, the event will be sent to the current flow endpoint. |         |
| Body Fields             | Extra fields to include in the body of the request.                                                 |         |
| Debug Request           | Enabling this flag will log out the current request.                                                | false   |
