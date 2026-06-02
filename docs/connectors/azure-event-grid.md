---
title: Azure Event Grid Connector
sidebar_label: Azure Event Grid
description: Azure Event Grid is an event routing service that can be used to build event driven applications by distributing events from various sources to subscribers.
---

![Azure Event Grid](./assets/azure-event-grid.png#connector-icon)
Azure Event Grid is an event routing service that can be used to build event driven applications by distributing events from various sources to subscribers.

## Connections

### OAuth 2.0 {#azure-event-grid-oauth2}

Authenticate using OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                       | Default                                                        |
| ------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for your Microsoft Event Grid. | https://login.microsoftonline.com/common/oauth2/v2.0/authorize |
| Token URL     | The OAuth 2.0 Token URL for your Microsoft Event Grid          | https://login.microsoftonline.com/common/oauth2/v2.0/token     |
| Client ID     | Get this value from your App Registration in the Azure Portal  |                                                                |
| Client Secret | Get this value from your App Registration in the Azure Portal  |                                                                |

## Triggers

### Event Grid Trigger {#mytrigger}

Handle validation and delivery of Event Grid events

| Input                      | Comments                           | Default |
| -------------------------- | ---------------------------------- | ------- |
| Event Topics to Listen For | The topics to listen for events on |         |

## Actions

### Create or Update Event Subscription {#createorupdateeventsubscription}

Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.

| Input                   | Comments                                                                                            | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Azure Event Grid connection to use.                                                             |         |
| Subscription ID         | The ID of the subscription to use.                                                                  |         |
| Topic                   | The name of the topic to subscribe to.                                                              |         |
| Resource Group Name     | The name of the resource group to use.                                                              |         |
| Event Subscription Name | The name of the event subscription to use.                                                          |         |
| Event Delivery Schema   | The event delivery schema for the event subscription.                                               |         |
| Webhook URL             | The URL to send the event to. If not provided, the event will be sent to the current flow endpoint. |         |
| Body Fields             | Extra fields to include in the body of the request.                                                 |         |

### Delete Event Subscription {#deleteeventsubscription}

Delete an existing event subscription.

| Input                   | Comments                                   | Default |
| ----------------------- | ------------------------------------------ | ------- |
| Connection              | The Azure Event Grid connection to use.    |         |
| Subscription ID         | The ID of the subscription to use.         |         |
| Topic                   | The name of the topic to subscribe to.     |         |
| Resource Group Name     | The name of the resource group to use.     |         |
| Event Subscription Name | The name of the event subscription to use. |         |

### Get Event Subscription {#geteventsubscription}

Get properties of an event subscription.

| Input                   | Comments                                   | Default |
| ----------------------- | ------------------------------------------ | ------- |
| Connection              | The Azure Event Grid connection to use.    |         |
| Subscription ID         | The ID of the subscription to use.         |         |
| Topic                   | The name of the topic to subscribe to.     |         |
| Resource Group Name     | The name of the resource group to use.     |         |
| Event Subscription Name | The name of the event subscription to use. |         |

### List Event Subscriptions {#listeventsubscriptions}

List all event subscriptions that have been created for a specific topic.

| Input               | Comments                                                                                                                                                                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Azure Event Grid connection to use.                                                                                                                                                                                                                             |         |
| Subscription ID     | The ID of the subscription to use.                                                                                                                                                                                                                                  |         |
| Topic               | The name of the topic to subscribe to.                                                                                                                                                                                                                              |         |
| Resource Group Name | The name of the resource group to use.                                                                                                                                                                                                                              |         |
| Fetch All           | When true, fetches all pages of results.                                                                                                                                                                                                                            | false   |
| Top                 | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.                                                                    |         |
| Filter              | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. |         |
| Next Link           | The next link to fetch the next page of results.                                                                                                                                                                                                                    |         |

### Publish Events {#publishevents}

Publishes a batch of events to an Azure Event Grid topic.

| Input            | Comments                                                              | Default |
| ---------------- | --------------------------------------------------------------------- | ------- |
| Connection       | The Azure Event Grid connection to use.                               |         |
| Topic Host Name  | The host name of the topic.                                           |         |
| Topic Access Key | The access key of the topic.                                          |         |
| Events           | The events to publish. The events must match the schema of the topic. |         |

### Update Event Subscription {#updateeventsubscription}

Asynchronously updates an existing event subscription.

| Input                   | Comments                                                                                            | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Azure Event Grid connection to use.                                                             |         |
| Subscription ID         | The ID of the subscription to use.                                                                  |         |
| Topic                   | The name of the topic to subscribe to.                                                              |         |
| Resource Group Name     | The name of the resource group to use.                                                              |         |
| Event Subscription Name | The name of the event subscription to use.                                                          |         |
| Event Delivery Schema   | The event delivery schema for the event subscription.                                               |         |
| Webhook URL             | The URL to send the event to. If not provided, the event will be sent to the current flow endpoint. |         |
| Body Fields             | Extra fields to include in the body of the request.                                                 |         |
