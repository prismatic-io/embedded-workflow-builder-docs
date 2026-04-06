---
title: Azure Service Bus Connector
sidebar_label: Azure Service Bus
description: Interact with message queues and publish-subscribe topics (in a namespace)
---

![Azure Service Bus](./assets/azureservicebus.png#connector-icon)
Interact with message queues and publish-subscribe topics (in a namespace)

## Connections

### Connection String {#connection-string}

Connection String

| Input             | Comments                                                                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection String | The connection string for your Azure Service Bus namespace. You can find this in the Azure Portal under the 'Shared access policies' tab. |         |

### OAuth 2.0 {#oauth}

OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                      | Default                                                               |
| ------------- | ------------------------------------------------------------- | --------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Azure Service Bus         | https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize |
| Token URL     | The OAuth 2.0 Token URL for Azure Service Bus                 | https://login.microsoftonline.com/organizations/oauth2/v2.0/token     |
| Scopes        |                                                               | https://management.azure.com/.default                                 |
| Client ID     | Generate this value when you create your Active Directory App |                                                                       |
| Client Secret | Generate this value when you create your Active Directory App |                                                                       |
| Tenant ID     | Generate this value when you create your Active Directory App |                                                                       |

## Triggers

### Webhook {#subscriptionmessagewebhook}

Receive and validate webhook requests from Azure Service Bus for webhooks you configure.

## Actions

### Create or Update Namespaces {#createorupdatenamespaces}

Creates or updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.

| Input                             | Comments                                                                                                                                          | Default |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                        |                                                                                                                                                   |         |
| Namespace Name                    | The namespace name                                                                                                                                |         |
| Resource Group Name               | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Subscription ID                   | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Location                          | The geo-location where the resource lives                                                                                                         |         |
| Identity Type                     | Type of managed service identity.                                                                                                                 |         |
| Identity User Assigned Identities | Properties for User Assigned Identities                                                                                                           |         |
| Alternate Name                    | Alternate name for the namespace.                                                                                                                 |         |
| Disable Local Auth                | This property disables SAS authentication for the Service Bus namespace.                                                                          | false   |
| Key Source                        | Enumerates the possible value of keySource for Encryption                                                                                         |         |
| Key Vault Properties              | Properties of the Key Vault                                                                                                                       |         |
| Require Infrastructure Encryption | Enable Infrastructure Encryption (Double Encryption)                                                                                              | false   |
| Private Endpoint Connections      | List of private endpoint connections.                                                                                                             |         |
| Zone Redundant                    | Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones.                                           | false   |
| SKU                               | SKU of the namespace.                                                                                                                             |         |
| Tags                              | Resource tags.                                                                                                                                    |         |

### Create or Update Queue {#createorupdatequeue}

Creates or updates a Service Bus queue. This operation is idempotent.

| Input                                   | Comments                                                                                                                                                                                                                                     | Default |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                              |                                                                                                                                                                                                                                              |         |
| Namespace Name                          | The namespace name                                                                                                                                                                                                                           |         |
| Queue Name                              | The queue name.                                                                                                                                                                                                                              |         |
| Resource Group Name                     | Name of the Resource group within the Azure subscription.                                                                                                                                                                                    |         |
| Subscription ID                         | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.                                                                                            |         |
| Auto Delete On Idle                     | ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.                                                                                                                           |         |
| Dead Lettering On Message Expiration    | Value that indicates whether a subscription has dead letter support when a message expires.                                                                                                                                                  | false   |
| Default Message Time To Live            | ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. |         |
| Duplicate Detection History Time Window | ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.                                                                                                                    |         |
| Enable Batched Operations               | Value that indicates whether server-side batched operations are enabled.                                                                                                                                                                     | false   |
| Enable Express                          | Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.                                                                                   | false   |
| Enable Partitioning                     | Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.                                                                                                                                         | false   |
| Forward Dead Lettered Messages To       | Queue/Topic name to forward the Dead Letter message.                                                                                                                                                                                         |         |
| Forward To                              | Queue/Topic name to forward the messages.                                                                                                                                                                                                    |         |
| Lock Duration                           | ISO 8601 lock duration timespan for the subscription. The default value is 1 minute.                                                                                                                                                         |         |
| Max Delivery Count                      | Number of maximum deliveries.                                                                                                                                                                                                                |         |
| Max Message Size in Kilobytes           | Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today, and the default is 1024.                                                                                         |         |
| Max Size in Megabytes                   | Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.                                                                                                                            |         |
| Requires Duplicate Detection            | Value indicating if this topic requires duplicate detection.                                                                                                                                                                                 | false   |
| Requires Session                        | Value indicating if a subscription supports the concept of sessions.                                                                                                                                                                         | false   |
| Status                                  | Status of the messaging entity.                                                                                                                                                                                                              |         |

### Create or Update Rules {#createorupdaterules}

Creates a new rule and updates an existing rule

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Namespace Name      | The namespace name                                                                                                                                |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Topic Name          | The topic name.                                                                                                                                   |         |
| Subscription Name   | The subscription name.                                                                                                                            |         |
| Rule Name           | The rule name.                                                                                                                                    |         |
| Action              | Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.                |         |
| Correlation Filter  | Represents the correlation filter expression.                                                                                                     |         |
| Filter Type         | Filter type that is evaluated against a BrokeredMessage.                                                                                          |         |
| SQL Filter          | Represents a filter which is a composition of an expression and an action that is executed in the pub/sub pipeline.                               |         |

### Create or Update Subscription {#createorupdatesubscription}

Creates a topic subscription.

| Input                                          | Comments                                                                                                                                                                                                                                     | Default |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                                     |                                                                                                                                                                                                                                              |         |
| Namespace Name                                 | The namespace name                                                                                                                                                                                                                           |         |
| Resource Group Name                            | Name of the Resource group within the Azure subscription.                                                                                                                                                                                    |         |
| Subscription ID                                | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.                                                                                            |         |
| Topic Name                                     | The topic name.                                                                                                                                                                                                                              |         |
| Subscription Name                              | The subscription name.                                                                                                                                                                                                                       |         |
| Auto Delete On Idle                            | ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.                                                                                                                           |         |
| Dead Lettering On Filter Evaluation Exceptions | Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.                                                                                                                                         | false   |
| Dead Lettering On Message Expiration           | Value that indicates whether a subscription has dead letter support when a message expires.                                                                                                                                                  | false   |
| Default Message Time To Live                   | ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. |         |
| Duplicate Detection History Time Window        | ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.                                                                                                                    |         |
| Enable Batched Operations                      | Value that indicates whether server-side batched operations are enabled.                                                                                                                                                                     | false   |
| Forward Dead Lettered Messages To              | Queue/Topic name to forward the Dead Letter message.                                                                                                                                                                                         |         |
| Forward To                                     | Queue/Topic name to forward the messages.                                                                                                                                                                                                    |         |
| Is Client Affine                               | Value that indicates whether the subscription has an affinity to the client id.                                                                                                                                                              | false   |
| Lock Duration                                  | ISO 8601 lock duration timespan for the subscription. The default value is 1 minute.                                                                                                                                                         |         |
| Max Delivery Count                             | Number of maximum deliveries.                                                                                                                                                                                                                |         |
| Requires Session                               | Value indicating if a subscription supports the concept of sessions.                                                                                                                                                                         | false   |
| Status                                         | Status of the messaging entity.                                                                                                                                                                                                              |         |
| Client ID                                      | Indicates the Client ID of the application that created the client-affine subscription.                                                                                                                                                      |         |
| Is Durable                                     | For client-affine subscriptions, this value indicates whether the subscription is durable or not.                                                                                                                                            | false   |
| Is Shared                                      | For client-affine subscriptions, this value indicates whether the subscription is shared or not.                                                                                                                                             | false   |

### Create or Update Topic {#createorupdatetopic}

Creates or updates a topic in the specified namespace.

| Input                                   | Comments                                                                                                                                                                                                                                     | Default |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                              |                                                                                                                                                                                                                                              |         |
| Namespace Name                          | The namespace name                                                                                                                                                                                                                           |         |
| Resource Group Name                     | Name of the Resource group within the Azure subscription.                                                                                                                                                                                    |         |
| Subscription ID                         | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.                                                                                            |         |
| Topic Name                              | The topic name.                                                                                                                                                                                                                              |         |
| Auto Delete On Idle                     | ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.                                                                                                                           |         |
| Default Message Time To Live            | ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. |         |
| Duplicate Detection History Time Window | ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.                                                                                                                    |         |
| Enable Batched Operations               | Value that indicates whether server-side batched operations are enabled.                                                                                                                                                                     | false   |
| Enable Express                          | Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.                                                                                   | false   |
| Enable Partitioning                     | Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.                                                                                                                                         | false   |
| Max Message Size in Kilobytes           | Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today, and the default is 1024.                                                                                         |         |
| Max Size in Megabytes                   | Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.                                                                                                                            |         |
| Requires Duplicate Detection            | Value indicating if this topic requires duplicate detection.                                                                                                                                                                                 | false   |
| Status                                  | Status of the messaging entity.                                                                                                                                                                                                              |         |
| Support Ordering                        | Value that indicates whether the topic supports ordering.                                                                                                                                                                                    | false   |

### Delete Namespace {#deletenamespace}

Deletes an existing namespace. This operation also removes all associated resources under the namespace.

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Namespace Name      | The namespace name                                                                                                                                |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |

### Delete Queue {#deletequeue}

Deletes a queue from the specified namespace in a resource group.

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Namespace Name      | The namespace name                                                                                                                                |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Queue Name          | The queue name.                                                                                                                                   |         |

### Delete Rule {#deleterule}

Deletes an existing rule.

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Namespace Name      | The namespace name                                                                                                                                |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Topic Name          | The topic name.                                                                                                                                   |         |
| Subscription Name   | The subscription name.                                                                                                                            |         |
| Rule Name           | The rule name.                                                                                                                                    |         |

### Delete Subscriptions {#deletesubscriptions}

Deletes a subscription from the specified topic.

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Namespace Name      | The namespace name                                                                                                                                |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Topic Name          | The topic name.                                                                                                                                   |         |
| Subscription Name   | The subscription name.                                                                                                                            |         |

### Delete Topic {#deletetopic}

Deletes a topic from the specified namespace and resource group.

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Namespace Name      | The namespace name                                                                                                                                |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Topic Name          | The topic name.                                                                                                                                   |         |

### Get Namespaces {#getnamespaces}

Gets a description for the specified namespace.

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Namespace Name      | The namespace name                                                                                                                                |         |

### Get Queue {#getqueue}

Returns a description for the specified queue.

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Namespace Name      | The namespace name                                                                                                                                |         |
| Queue Name          | The queue name.                                                                                                                                   |         |

### Get Rule {#getrule}

Retrieves the description for the specified rule.

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Namespace Name      | The namespace name                                                                                                                                |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Topic Name          | The topic name.                                                                                                                                   |         |
| Subscription Name   | The subscription name.                                                                                                                            |         |
| Rule Name           | The rule name.                                                                                                                                    |         |

### Get Subscriptions {#getsubscriptions}

Returns a subscription description for the specified topic.

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Namespace Name      | The namespace name                                                                                                                                |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Topic Name          | The topic name.                                                                                                                                   |         |
| Subscription Name   | The subscription name.                                                                                                                            |         |

### Get Topic {#gettopic}

Gets all the topics in a namespace

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Namespace Name      | The namespace name                                                                                                                                |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Topic Name          | The topic name.                                                                                                                                   |         |

### List Namespaces {#listnamespaces}

Gets all the available namespaces within the subscription, irrespective of the resource groups.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                   |         |
| Subscription ID | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |

### List Namespaces By Resource Group {#listnamespacesbyresourcegroup}

Gets the available namespaces within a resource group.

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |

### List Queues {#listqueues}

Gets the queues within a namespace.

| Input               | Comments                                                                                                                                                                                                                                              | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                       |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.                                                                                                     |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                                                                                                                             |         |
| Namespace Name      | The namespace name                                                                                                                                                                                                                                    |         |
| Skip                | Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. |         |
| Top                 | May be used to limit the number of results to the most recent N usageDetails.                                                                                                                                                                         |         |

### List Rules {#listrules}

List all the rules within given topic-subscription

| Input               | Comments                                                                                                                                                                                                                                              | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                       |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.                                                                                                     |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                                                                                                                             |         |
| Namespace Name      | The namespace name                                                                                                                                                                                                                                    |         |
| Topic Name          | The topic name.                                                                                                                                                                                                                                       |         |
| Subscription Name   | The subscription name.                                                                                                                                                                                                                                |         |
| Skip                | Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. |         |
| Top                 | May be used to limit the number of results to the most recent N usageDetails.                                                                                                                                                                         |         |

### List Subscriptions {#listsubscriptions}

List all the subscriptions

| Input      | Comments            | Default    |
| ---------- | ------------------- | ---------- |
| Connection |                     |            |
| Version    | Version of the API. | 2016-06-01 |

### List Subscriptions By Topic {#listsubscriptionsbytopic}

List all the subscriptions under a specified topic.

| Input               | Comments                                                                                                                                                                                                                                              | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                       |         |
| Namespace Name      | The namespace name                                                                                                                                                                                                                                    |         |
| Queue Name          | The queue name.                                                                                                                                                                                                                                       |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                                                                                                                             |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.                                                                                                     |         |
| Skip                | Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. |         |
| Top                 | May be used to limit the number of results to the most recent N usageDetails.                                                                                                                                                                         |         |
| Topic Name          | The topic name.                                                                                                                                                                                                                                       |         |

### List Topics By Namespace {#listtopicsbynamespace}

Gets all the topics in a namespace

| Input               | Comments                                                                                                                                                                                                                                              | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                       |         |
| Namespace Name      | The namespace name                                                                                                                                                                                                                                    |         |
| Queue Name          | The queue name.                                                                                                                                                                                                                                       |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                                                                                                                             |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.                                                                                                     |         |
| Skip                | Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. |         |
| Top                 | May be used to limit the number of results to the most recent N usageDetails.                                                                                                                                                                         |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Azure Service Bus

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |         |
| URL                     | Input the path only (/{subscriptionId}/providers/Microsoft.ServiceBus/namespaces?api-version=2021-11-01), The base URL is already included (https://management.azure.com/subscriptions). For example, to connect to https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.ServiceBus/namespaces?api-version=2021-11-01, only /{subscriptionId}/providers/Microsoft.ServiceBus/namespaces?api-version=2021-11-01 is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                                                                                                                                                           |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                                                                                                |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                                                                                                                                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                                                                                                                                                 |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                                                                                                                                                         |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                                                                                                                                                            | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                                                                                                                | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                                                                                                                                                 | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                                                                                                                                                    | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                                                                                                                                                 | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                                                                                                                                                       | false   |

### Receive Messages from Queue {#receivemessagesfromqueue}

Receive messages from a queue. Receive messages from a queue will remove the message from the queue.

| Input                | Comments                                                                                                                                                                                                                                 | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                                                          |         |
| Subscription ID      | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.                                                                                        |         |
| Resource Group Name  | Name of the Resource group within the Azure subscription.                                                                                                                                                                                |         |
| Namespace Name       | The namespace name                                                                                                                                                                                                                       |         |
| Queue Name           | The queue name.                                                                                                                                                                                                                          |         |
| Amount of Messages   | Amount of messages to receive from the queue.                                                                                                                                                                                            |         |
| Max Time To Wait     | Max time to wait (in seconds) for messages to receive from the queue. Default is 60 seconds.                                                                                                                                             | 60      |
| Return Full Messages | If true, the full message objects will be returned including message ID, sequence number, delivery metadata, etc. If false, only the messages bodies will be returned.                                                                   | false   |
| Peek                 | If true, the messages will be peeked from the queue, which doesn't alter the visibility of the message. If false, the messages will be received from the queue. https://learn.microsoft.com/en-us/rest/api/storageservices/peek-messages | false   |

### Send Message to Queue {#sendmessagetoqueue}

Send a single message to a queue.

| Input                      | Comments                                                                                                                                                                 | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                 |                                                                                                                                                                          |         |
| Subscription ID            | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.                        |         |
| Resource Group Name        | Name of the Resource group within the Azure subscription.                                                                                                                |         |
| Namespace Name             | The namespace name                                                                                                                                                       |         |
| Queue Name                 | The queue name.                                                                                                                                                          |         |
| Body                       | The body of the message.                                                                                                                                                 |         |
| Content Type               | The content type of the message.                                                                                                                                         |         |
| Message ID                 | An optional unique ID of the message to be used for deduplication. If omitted, a unique ID will be generated by Microsoft.                                               |         |
| Partition Key              | An optional partition key https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusmessage.partitionkey                                         |         |
| Reply To                   | An optional address that the receiver can use to reply to the message. https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusmessage.replyto |         |
| Scheduled Enqueue Time UTC | An optional time at which the message should be enqueued. If omitted, the message will be enqueued immediately.                                                          |         |
| Subject                    | An optional subject for the message.                                                                                                                                     |         |
| To                         | An optional address that specifies the intended recipient of the message. https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusmessage.to   |         |

### Send Multiple Messages to Queue {#sendmessagestoqueue}

Send multiple plain text messages to a queue.

| Input               | Comments                                                                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                   |         |
| Subscription ID     | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. |         |
| Resource Group Name | Name of the Resource group within the Azure subscription.                                                                                         |         |
| Namespace Name      | The namespace name                                                                                                                                |         |
| Queue Name          | The queue name.                                                                                                                                   |         |
| Messages            | List of messages to send to the queue.                                                                                                            |         |
