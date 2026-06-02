---
title: Microsoft Bot Framework Connector
sidebar_label: Microsoft Bot Framework
description: Manage conversations, messages, and activities in Microsoft Bot Framework.
---

![Microsoft Bot Framework](./assets/ms-bot-framework.png#connector-icon)
Manage conversations, messages, and activities in Microsoft Bot Framework.

## Connections

### Direct Line {#directline}

Direct Line connection for Microsoft Bot Framework

| Input              | Comments                                   | Default |
| ------------------ | ------------------------------------------ | ------- |
| Direct Line Secret | The Direct Line secret value for your bot. |         |

### OAuth 2.0 Client Credentials {#clientcredentials}

OAuth 2.0 Client Credentials Connectivity for Microsoft Bot Framework

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                                            | Default                                                              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Token URL           | The OAuth 2.0 Token URL for Microsoft Bot Framework. Use the default for Multi-Tenant bots and `https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token` for Single-Tenant. | https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token |
| Client ID           | The Client ID (Application ID) from your Azure Bot registration.                                                                                                                    |                                                                      |
| Client Secret Value | The Client Secret value from your Azure Bot registration under 'Certificates & Secrets'.                                                                                            |                                                                      |

## Triggers

### Bot Framework Trigger {#bottrigger}

Trigger that validates incoming requests as coming from Bot Framework

| Input            | Comments                                                       | Default |
| ---------------- | -------------------------------------------------------------- | ------- |
| Microsoft App ID | Microsoft App ID found in the Azure Bot's Configuration blade. |         |

## Actions

### Create Conversation {#createconversation}

Create a new Conversation

| Input              | Comments                                                                                                                                                                                       | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The connection to use for authenticating requests to Microsoft Bot Framework.                                                                                                                  |         |
| Service URL        | The Service URL (also referred to as Base URI) to send requests to the Bot Framework. Varies per bot channel and region. Use https://directline.botframework.com/ for Direct Line connections. |         |
| API Version        | The version of the Bot Framework API to call.                                                                                                                                                  | 3       |
| Bot ID             | The unique identifier of the bot receiving requests.                                                                                                                                           |         |
| Channel Account ID | The unique identifier of the channel account (refers to conversation members such as bots and users).                                                                                          |         |
| Tenant ID          | The tenant ID associated with the channel account.                                                                                                                                             |         |

### Get Conversation Members {#getconversationmembers}

Get list of members of the conversation

| Input           | Comments                                                                                                                                                                                       | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The connection to use for authenticating requests to Microsoft Bot Framework.                                                                                                                  |         |
| Service URL     | The Service URL (also referred to as Base URI) to send requests to the Bot Framework. Varies per bot channel and region. Use https://directline.botframework.com/ for Direct Line connections. |         |
| API Version     | The version of the Bot Framework API to call.                                                                                                                                                  | 3       |
| Conversation ID | The unique identifier of the conversation (refers to a channel, team, or direct message).                                                                                                      |         |

### Raw Request {#rawrequest}

Issue a raw HTTP request

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
| URL                     | This is the URL to call.                                                                                                                                                                         |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Send Adaptive Card Message {#sendadaptivecardmessage}

Send an adaptive card message

| Input           | Comments                                                                                                                                                                                       | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The connection to use for authenticating requests to Microsoft Bot Framework.                                                                                                                  |         |
| Service URL     | The Service URL (also referred to as Base URI) to send requests to the Bot Framework. Varies per bot channel and region. Use https://directline.botframework.com/ for Direct Line connections. |         |
| API Version     | The version of the Bot Framework API to call.                                                                                                                                                  | 3       |
| Conversation ID | The unique identifier of the conversation (refers to a channel, team, or direct message).                                                                                                      |         |
| From ID         | The unique identifier of the user sending the message.                                                                                                                                         |         |
| From Name       | The name of the user sending the message.                                                                                                                                                      |         |
| Card Payload    | Adaptive Card payload to send                                                                                                                                                                  |         |

### Send Message {#sendmessage}

Create a message to a Conversation

| Input           | Comments                                                                                                                                                                                       | Default  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection      | The connection to use for authenticating requests to Microsoft Bot Framework.                                                                                                                  |          |
| Service URL     | The Service URL (also referred to as Base URI) to send requests to the Bot Framework. Varies per bot channel and region. Use https://directline.botframework.com/ for Direct Line connections. |          |
| API Version     | The version of the Bot Framework API to call.                                                                                                                                                  | 3        |
| Conversation ID | The unique identifier of the conversation (refers to a channel, team, or direct message).                                                                                                      |          |
| From ID         | The unique identifier of the user sending the message.                                                                                                                                         |          |
| From Name       | The name of the user sending the message.                                                                                                                                                      |          |
| Text            | The text content of the message to send.                                                                                                                                                       |          |
| Text Format     | Text Format of the message to send                                                                                                                                                             | markdown |
