---
title: Google Cloud Pub/Sub Connector
sidebar_label: Google Cloud Pub/Sub
description: Manage topics, subscriptions, and messages in Google Cloud Pub/Sub.
---

![Google Cloud Pub/Sub](./assets/google-cloud-pub-sub.png#connector-icon)
Manage topics, subscriptions, and messages in Google Cloud Pub/Sub.

## Connections

### Google Pub/Sub Private Key {#privatekey}

Authenticate requests to Google Cloud Storage using values obtained from the Google Cloud Platform.

| Input        | Comments                                                                                                                                                                      | Default                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Client Email | The service account email address from the Google Cloud service account JSON key file.                                                                                        |                                                                                       |
| Private Key  | The private key from the Google Cloud service account JSON key file. This should be the entire key value including the BEGIN and END markers.                                 |                                                                                       |
| Project ID   | The Google Cloud project ID that contains the Pub/Sub resources.                                                                                                              |                                                                                       |
| Scopes       | Space-delimited list of OAuth 2.0 scopes. See [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes#pubsub) for more information. | https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/pubsub |

### OAuth2 {#oauth2}

OAuth2 Connection

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                      | Default                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Scopes        | Space-delimited list of OAuth 2.0 scopes. See [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes#pubsub) for more information. | https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/pubsub |
| Client ID     | The Client ID from the Google Cloud OAuth 2.0 credentials.                                                                                                                    |                                                                                       |
| Client Secret | The Client Secret from the Google Cloud OAuth 2.0 credentials.                                                                                                                |                                                                                       |

## Triggers

### PubSub Notification {#mytrigger}

PubSub Notification Trigger Settings

## Actions

### Create Subscription {#createsubscription}

Creates a subscription to a given topic.

| Input                            | Comments                                                                                                                                                                                                                         | Default |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                       | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                                                                                       |         |
| Project ID                       | The Google Cloud project ID containing the Pub/Sub resources.                                                                                                                                                                    |         |
| Subscription                     | The name of the subscription to create.                                                                                                                                                                                          |         |
| Topic                            | The name of the topic from which this subscription is receiving messages. The value of this field will be _deleted-topic_ if the topic has been deleted.                                                                         |         |
| Topic Name or Full Format        | Select whether the topic input is a full resource path (e.g., 'projects/my-project/topics/my-topic') or just the topic name (e.g., 'my-topic').                                                                                  |         |
| Push Config                      | Configuration for push delivery. See [PushConfig](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions#PushConfig) for more information.                                                                |         |
| BigQuery Config                  | Configuration for BigQuery delivery. See [BigQueryConfig](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions#BigQueryConfig) for more information.                                                    |         |
| Ack Deadline Seconds             | The time (in seconds) Pub/Sub waits for acknowledgment before resending the message. Must be between 10 and 600 seconds. Default is 10 seconds if not specified.                                                                 |         |
| Retain Acked Messages            | When true, acknowledged messages are retained in the subscription's backlog until they fall outside the messageRetentionDuration window. Required for seeking to past timestamps.                                                | false   |
| Message Retention Duration       | The minimum duration to retain a message after publication. Must be between 10 minutes (600s) and 31 days (2678400s). Format: duration in seconds with up to nine fractional digits, ending with 's' (e.g., '3600s' for 1 hour). |         |
| Labels                           | Labels to organize and group resources. See [Creating and Updating Labels](https://cloud.google.com/pubsub/docs/labels) for more information.                                                                                    |         |
| Enable Message Ordering          | When true, messages with the same orderingKey are delivered to subscribers in the order they are received by Pub/Sub.                                                                                                            | false   |
| Expiration Policy                | Policy specifying when the subscription expires. Default TTL is 31 days if not set. See [ExpirationPolicy](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions#ExpirationPolicy) for more information. |         |
| Filter                           | A filter expression to select which messages are delivered. See [Filtering Messages](https://cloud.google.com/pubsub/docs/filtering) for syntax.                                                                                 |         |
| Dead Letter Policy               | Policy for dead lettering undeliverable messages. See [Dead Letter Topics](https://cloud.google.com/pubsub/docs/dead-letter-topics) for more information.                                                                        |         |
| Retry Policy                     | Policy for retrying message delivery. See [RetryPolicy](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions#RetryPolicy) for more information.                                                         |         |
| Detached                         | When true, the subscription is detached from its topic and will not receive messages or retain backlog.                                                                                                                          | false   |
| Enable Exactly Once Delivery     | When true, Pub/Sub guarantees exactly-once delivery semantics for messages on this subscription.                                                                                                                                 | false   |
| Topic Message Retention Duration | Output-only field indicating the minimum duration messages are retained in the topic. Format: duration in seconds ending with 's' (e.g., '86400s').                                                                              |         |
| State                            | Output-only field indicating whether the subscription can receive messages.                                                                                                                                                      |         |

### Create Topic {#createtopic}

Creates the given topic with the given name.

| Input                      | Comments                                                                                                                                                                                                                         | Default |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                                                                                       |         |
| Project ID                 | The Google Cloud project ID containing the Pub/Sub resources.                                                                                                                                                                    |         |
| Topic                      | Name of the new topic                                                                                                                                                                                                            |         |
| Labels                     | Labels to organize and group resources. See [Creating and Updating Labels](https://cloud.google.com/pubsub/docs/labels) for more information.                                                                                    |         |
| Message Storage Policy     | Policy constraining the Google Cloud regions where messages may be stored. See [Message Storage Policy](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#MessageStoragePolicy) for more information.       |         |
| KMS Key Name               | The resource name of the Cloud KMS CryptoKey used to protect access to messages published on this topic. See [Customer-Managed Encryption Keys](https://cloud.google.com/pubsub/docs/cmek) for more information.                 |         |
| Schema Settings            | Settings for validating messages against a schema. See [Schema Settings](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#SchemaSettings) for more information.                                            |         |
| Satisfies PZS              | When true, indicates the topic satisfies physical zone separation. This is an output-only field reserved for future use.                                                                                                         | false   |
| Message Retention Duration | The minimum duration to retain a message after publication. Must be between 10 minutes (600s) and 31 days (2678400s). Format: duration in seconds with up to nine fractional digits, ending with 's' (e.g., '3600s' for 1 hour). |         |

### Create Webhook Subscription {#createwebhooksubscription}

Creates a webhook subscription to a given topic.

| Input                     | Comments                                                                                                                                        | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                      |         |
| Project ID                | The Google Cloud project ID containing the Pub/Sub resources.                                                                                   |         |
| Subscription Name         | The name of the subscription to create.                                                                                                         |         |
| Topic                     | The name of the topic. Can be either the topic name (e.g., 'my-topic') or the full resource path (e.g., 'projects/my-project/topics/my-topic'). |         |
| Topic Name or Full Format | Select whether the topic input is a full resource path (e.g., 'projects/my-project/topics/my-topic') or just the topic name (e.g., 'my-topic'). |         |
| Webhook URL               | The URL endpoint to which messages are sent. This is typically the webhook URL of a sibling flow.                                               |         |

### Delete Subscription {#deletesubscription}

Deletes an existing subscription.

| Input                            | Comments                                                                                                                                                                           | Default |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                       | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                                         |         |
| Project ID                       | The Google Cloud project ID containing the Pub/Sub resources.                                                                                                                      |         |
| Subscription                     | The name of the subscription. Can be either the subscription name (e.g., 'my-subscription') or the full resource path (e.g., 'projects/my-project/subscriptions/my-subscription'). |         |
| Subscription Name or Full Format | Select whether the subscription input is a full resource path (e.g., 'projects/my-project/subscriptions/my-subscription') or just the subscription name (e.g., 'my-subscription'). |         |

### Delete Topic {#deletetopic}

Deletes the topic with the given name.

| Input                     | Comments                                                                                                                                        | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                      |         |
| Project ID                | The Google Cloud project ID containing the Pub/Sub resources.                                                                                   |         |
| Topic                     | The name of the topic. Can be either the topic name (e.g., 'my-topic') or the full resource path (e.g., 'projects/my-project/topics/my-topic'). |         |
| Topic Name or Full Format | Select whether the topic input is a full resource path (e.g., 'projects/my-project/topics/my-topic') or just the topic name (e.g., 'my-topic'). |         |

### Get Policy {#getpolicy}

Gets the access control policy for a resource.

| Input                    | Comments                                                                                                                                                   | Default |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                 |         |
| Resource                 | The resource name for which the policy is being requested. See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more information. |         |
| Requested Policy Version | The maximum policy version to use for formatting the policy. Valid values are 0, 1, and 3. Policies with conditional bindings must use version 3.          |         |

### Get Subscription {#getsubscription}

Gets the configuration details of a subscription.

| Input                            | Comments                                                                                                                                                                           | Default |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                       | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                                         |         |
| Project ID                       | The Google Cloud project ID containing the Pub/Sub resources.                                                                                                                      |         |
| Subscription                     | The name of the subscription. Can be either the subscription name (e.g., 'my-subscription') or the full resource path (e.g., 'projects/my-project/subscriptions/my-subscription'). |         |
| Subscription Name or Full Format | Select whether the subscription input is a full resource path (e.g., 'projects/my-project/subscriptions/my-subscription') or just the subscription name (e.g., 'my-subscription'). |         |

### Get Topic {#gettopic}

Gets the configuration of a topic.

| Input                     | Comments                                                                                                                                        | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                      |         |
| Project ID                | The Google Cloud project ID containing the Pub/Sub resources.                                                                                   |         |
| Topic                     | The name of the topic. Can be either the topic name (e.g., 'my-topic') or the full resource path (e.g., 'projects/my-project/topics/my-topic'). |         |
| Topic Name or Full Format | Select whether the topic input is a full resource path (e.g., 'projects/my-project/topics/my-topic') or just the topic name (e.g., 'my-topic'). |         |

### List Subscriptions {#listsubscriptions}

Lists matching Subscriptions.

| Input      | Comments                                                                                                                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                                                   |         |
| Project ID | The Google Cloud project ID containing the Pub/Sub resources.                                                                                                                                |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                                                                                                                    | false   |
| Page Token | The value returned by the last ListSubscriptionsResponse; indicates that this is a continuation of a prior subscriptions.list call, and that the system should return the next page of data. |         |
| Page Size  | Maximum number of subscriptions to return.                                                                                                                                                   |         |

### List Topics {#listtopics}

Lists matching topics.

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| Connection | The connection to use for authenticating requests to Google Cloud Pub/Sub.           |         |
| Project ID | The Google Cloud project ID containing the Pub/Sub resources.                        |         |
| Fetch All  | When true, fetches all pages of results using pagination.                            | false   |
| Page Token | The page token returned by a previous list call to request the next page of results. |         |
| Page Size  | The maximum number of results to return per page.                                    |         |

### Pull Messages {#pullmessages}

Pulls messages from the server.

| Input                            | Comments                                                                                                                                                                           | Default |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                       | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                                         |         |
| Project ID                       | The Google Cloud project ID containing the Pub/Sub resources.                                                                                                                      |         |
| Subscription                     | The name of the subscription. Can be either the subscription name (e.g., 'my-subscription') or the full resource path (e.g., 'projects/my-project/subscriptions/my-subscription'). |         |
| Subscription Name or Full Format | Select whether the subscription input is a full resource path (e.g., 'projects/my-project/subscriptions/my-subscription') or just the subscription name (e.g., 'my-subscription'). |         |
| Max Messages                     | The maximum number of messages to return. Must be a positive integer. Pub/Sub may return fewer messages than specified.                                                            |         |
| Return Immediately               | When true, the system responds immediately even if no messages are available. <strong>Warning:</strong> Setting this to true adversely impacts performance and is discouraged.     | false   |

### Raw Request {#rawrequest}

Send raw HTTP request to Google Cloud Pub/Sub

| Input                   | Comments                                                                                                                                                                                                                                                                             | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                                                                                                                                           |         |
| API Version             | The API version to use for constructing the base URL for requests.                                                                                                                                                                                                                   | v1      |
| URL                     | Input the path only (/projects/{projectId}/topics), The base URL is already included (https://pubsub.googleapis.com/{version}). For example, to connect to https://pubsub.googleapis.com/v1/projects/{projectId}/topics, only /projects/{projectId}/topics is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                  |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                        | false   |

### Set Gmail IAM Policy for Topic {#settopiciampolicy}

Configure a topic to allow publish notifications from Gmail.

| Input      | Comments                                                                   | Default |
| ---------- | -------------------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to Google Cloud Pub/Sub. |         |
| Topic      | The full name of the topic to set the IAM policy for                       |         |

### Set Policy {#setpolicy}

Sets the access control policy on the specified resource.

| Input      | Comments                                                                                                                                                   | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                 |         |
| Resource   | The resource name for which the policy is being requested. See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more information. |         |
| Policy     | The complete IAM policy to apply to the resource. See [Policy](https://cloud.google.com/pubsub/docs/reference/rest/v1/Policy) for more information.        |         |

### Update Push Config {#updatepushconfig}

This may be used to change a push subscription to a pull one (signified by an empty PushConfig) or vice versa, or change the endpoint URL and other attributes of a push subscription.

| Input                            | Comments                                                                                                                                                                                                              | Default |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                       | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                                                                            |         |
| Project ID                       | The Google Cloud project ID containing the Pub/Sub resources.                                                                                                                                                         |         |
| Subscription                     | The name of the subscription. Can be either the subscription name (e.g., 'my-subscription') or the full resource path (e.g., 'projects/my-project/subscriptions/my-subscription').                                    |         |
| Subscription Name or Full Format | Select whether the subscription input is a full resource path (e.g., 'projects/my-project/subscriptions/my-subscription') or just the subscription name (e.g., 'my-subscription').                                    |         |
| Push Endpoint                    | The URL endpoint to which messages should be pushed.                                                                                                                                                                  |         |
| Attributes                       | Endpoint configuration attributes for message delivery. The x-goog-version attribute controls the push message format. See [Push Delivery](https://cloud.google.com/pubsub/docs/push) for more information.           |         |
| OIDC Token                       | Configuration for generating an OIDC JWT token as an Authorization header for push requests. See [Authentication](https://cloud.google.com/pubsub/docs/push#setting_up_for_push_authentication) for more information. |         |

### Update Subscription {#updatesubscription}

Updates an existing subscription.

| Input                            | Comments                                                                                                                                                                                                                         | Default |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                       | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                                                                                       |         |
| Project ID                       | The Google Cloud project ID containing the Pub/Sub resources.                                                                                                                                                                    |         |
| Subscription                     | The name of the subscription. Can be either the subscription name (e.g., 'my-subscription') or the full resource path (e.g., 'projects/my-project/subscriptions/my-subscription').                                               |         |
| Topic                            | The name of the topic from which this subscription is receiving messages. The value of this field will be _deleted-topic_ if the topic has been deleted.                                                                         |         |
| Subscription Name or Full Format | Select whether the subscription input is a full resource path (e.g., 'projects/my-project/subscriptions/my-subscription') or just the subscription name (e.g., 'my-subscription').                                               |         |
| Update Mask                      | Comma-separated list of field paths to update. See [Field Masks](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/patch#query-parameters) for more information.                                            |         |
| Push Config                      | Configuration for push delivery. See [PushConfig](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions#PushConfig) for more information.                                                                |         |
| BigQuery Config                  | Configuration for BigQuery delivery. See [BigQueryConfig](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions#BigQueryConfig) for more information.                                                    |         |
| Ack Deadline Seconds             | The time (in seconds) Pub/Sub waits for acknowledgment before resending the message. Must be between 10 and 600 seconds. Default is 10 seconds if not specified.                                                                 |         |
| Retain Acked Messages            | When true, acknowledged messages are retained in the subscription's backlog until they fall outside the messageRetentionDuration window. Required for seeking to past timestamps.                                                | false   |
| Message Retention Duration       | The minimum duration to retain a message after publication. Must be between 10 minutes (600s) and 31 days (2678400s). Format: duration in seconds with up to nine fractional digits, ending with 's' (e.g., '3600s' for 1 hour). |         |
| Labels                           | Labels to organize and group resources. See [Creating and Updating Labels](https://cloud.google.com/pubsub/docs/labels) for more information.                                                                                    |         |
| Enable Message Ordering          | When true, messages with the same orderingKey are delivered to subscribers in the order they are received by Pub/Sub.                                                                                                            | false   |
| Expiration Policy                | Policy specifying when the subscription expires. Default TTL is 31 days if not set. See [ExpirationPolicy](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions#ExpirationPolicy) for more information. |         |
| Filter                           | A filter expression to select which messages are delivered. See [Filtering Messages](https://cloud.google.com/pubsub/docs/filtering) for syntax.                                                                                 |         |
| Dead Letter Policy               | Policy for dead lettering undeliverable messages. See [Dead Letter Topics](https://cloud.google.com/pubsub/docs/dead-letter-topics) for more information.                                                                        |         |
| Retry Policy                     | Policy for retrying message delivery. See [RetryPolicy](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions#RetryPolicy) for more information.                                                         |         |
| Detached                         | When true, the subscription is detached from its topic and will not receive messages or retain backlog.                                                                                                                          | false   |
| Enable Exactly Once Delivery     | When true, Pub/Sub guarantees exactly-once delivery semantics for messages on this subscription.                                                                                                                                 | false   |
| Topic Message Retention Duration | Output-only field indicating the minimum duration messages are retained in the topic. Format: duration in seconds ending with 's' (e.g., '86400s').                                                                              |         |
| State                            | Output-only field indicating whether the subscription can receive messages.                                                                                                                                                      |         |

### Update Topic {#updatetopic}

Updates an existing topic.

| Input                      | Comments                                                                                                                                                                                                                         | Default |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The connection to use for authenticating requests to Google Cloud Pub/Sub.                                                                                                                                                       |         |
| Project ID                 | The Google Cloud project ID containing the Pub/Sub resources.                                                                                                                                                                    |         |
| Topic                      | Name of the topic                                                                                                                                                                                                                |         |
| Topic Name or Full Format  | Select whether the topic input is a full resource path (e.g., 'projects/my-project/topics/my-topic') or just the topic name (e.g., 'my-topic').                                                                                  |         |
| Update Mask                | Comma-separated list of field paths to update. See [Field Masks](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/patch#query-parameters) for more information.                                            |         |
| Labels                     | Labels to organize and group resources. See [Creating and Updating Labels](https://cloud.google.com/pubsub/docs/labels) for more information.                                                                                    |         |
| Message Storage Policy     | Policy constraining the Google Cloud regions where messages may be stored. See [Message Storage Policy](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#MessageStoragePolicy) for more information.       |         |
| KMS Key Name               | The resource name of the Cloud KMS CryptoKey used to protect access to messages published on this topic. See [Customer-Managed Encryption Keys](https://cloud.google.com/pubsub/docs/cmek) for more information.                 |         |
| Schema Settings            | Settings for validating messages against a schema. See [Schema Settings](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#SchemaSettings) for more information.                                            |         |
| Satisfies PZS              | When true, indicates the topic satisfies physical zone separation. This is an output-only field reserved for future use.                                                                                                         | false   |
| Message Retention Duration | The minimum duration to retain a message after publication. Must be between 10 minutes (600s) and 31 days (2678400s). Format: duration in seconds with up to nine fractional digits, ending with 's' (e.g., '3600s' for 1 hour). |         |
