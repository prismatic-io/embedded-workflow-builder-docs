---
title: Microsoft Bot Framework Connector
sidebar_label: Microsoft Bot Framework
description: Manage conversations, messages, and activities in Microsoft Bot Framework.
---

![Microsoft Bot Framework](./assets/ms-bot-framework.png#connector-icon)
Manage conversations, messages, and activities in Microsoft Bot Framework.

## Connections

### Direct Line

Direct Line connection for Microsoft Bot Framework

The Microsoft Bot Framework component supports Direct Line connectivity for direct communication with an Azure Bot.

Direct Line is a channel that allows integrating a bot directly into a client application. It provides a simple REST API for exchanging messages with the bot.

#### Prerequisites

- An Azure Bot resource configured in the Azure Portal
- Permissions to manage channels for the Azure Bot

#### Setup Steps

1. Navigate to the Azure Bot resource in the [Azure Portal](https://portal.azure.com).

2. Select the **Channels** blade from the left-hand menu.

3. Click on **Direct Line** from the available channels list to enable it.

4. Once enabled, two secret keys will be presented. These keys are used to authenticate the application with the Direct Line service.

5. Copy one of the secret keys - this is the **Direct Line Secret**.

#### Configure the Connection

- For **Direct Line Secret**, enter the secret key copied from the Direct Line channel configuration in the Azure Bot.

| Input              | Comments                                   | Default |
| ------------------ | ------------------------------------------ | ------- |
| Direct Line Secret | The Direct Line secret value for your bot. |         |

### OAuth 2.0 Client Credentials

OAuth 2.0 Client Credentials Connectivity for Microsoft Bot Framework

The Microsoft Bot Framework component authenticates using OAuth 2.0 Client Credentials associated with an Azure Bot's App Registration.

#### Prerequisites

- An Azure account with permissions to create and manage Azure Bots
- An Azure Bot resource (or ability to create one)
- Appropriate channels enabled and configured for the intended use case

#### Setup Steps

1. [Create a new Azure Bot](https://learn.microsoft.com/en-us/composer/quickstart-create-bot-with-azure) or retrieve the app ID and app password (client secret) for an existing bot. When creating a new bot, set its type to **Multi Tenant** to allow using the bot across tenants.

2. Open the Azure Bot and ensure that [appropriate channels are enabled and configured](https://learn.microsoft.com/en-us/azure/bot-service/bot-service-manage-channels) for the intended use case. Each channel requires additional configuration - [Microsoft Teams](https://learn.microsoft.com/en-us/azure/bot-service/channel-connect-teams), for example, requires a [Teams app](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/deploy-and-publish/apps-publish-overview) containing a manifest file specifying the bot's configuration with Teams.

3. Navigate to the **Configuration** blade of the bot and click **Manage** next to **Microsoft App ID**. This will navigate to the Azure AD App Registration for the bot.

4. From the App Registration, navigate to the **Certificates & secrets** blade and create a new **Client Secret**. Copy the secret value immediately - this is the **Client Secret** (also referred to as the "app password" in some Microsoft documentation).

5. Navigate to the **Overview** blade to retrieve:
   - **Application (client) ID** - This is the **Client ID**
   - **Directory (tenant) ID** - Required for Single Tenant bots

#### Configure the Connection

- For **Client ID**, enter the value for **Microsoft App ID** or the **Client ID** from the app registration.
- For **Client Secret**, enter the secret value from the **Certificates & secrets** blade of the app registration.
- If the bot is configured as **Single Tenant**, update the **Token URL** to: `https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/token` and replace `TENANT_ID` with the tenant ID from the **Overview** blade.

:::note Multi-Tenant vs Single-Tenant Bots
The default **Token URL** (`https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token`) is configured for Multi-Tenant bots. For Single-Tenant bots, the Token URL must be updated to use the specific tenant ID.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                                            | Default                                                              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Token URL           | The OAuth 2.0 Token URL for Microsoft Bot Framework. Use the default for Multi-Tenant bots and `https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token` for Single-Tenant. | https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token |
| Client ID           | The Client ID (Application ID) from your Azure Bot registration.                                                                                                                    |                                                                      |
| Client Secret Value | The Client Secret value from your Azure Bot registration under 'Certificates & Secrets'.                                                                                            |                                                                      |

## Triggers

### Bot Framework Trigger

Trigger that validates incoming requests as coming from Bot Framework

| Input            | Comments                                                       | Default |
| ---------------- | -------------------------------------------------------------- | ------- |
| Microsoft App ID | Microsoft App ID found in the Azure Bot's Configuration blade. |         |

## Actions

### Create Conversation

Create a new Conversation

| Input              | Comments                                                                                                                                                                                       | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The connection to use for authenticating requests to Microsoft Bot Framework.                                                                                                                  |         |
| Service URL        | The Service URL (also referred to as Base URI) to send requests to the Bot Framework. Varies per bot channel and region. Use https://directline.botframework.com/ for Direct Line connections. |         |
| API Version        | The version of the Bot Framework API to call.                                                                                                                                                  | 3       |
| Bot ID             | The unique identifier of the bot receiving requests.                                                                                                                                           |         |
| Channel Account ID | The unique identifier of the channel account (refers to conversation members such as bots and users).                                                                                          |         |
| Tenant ID          | The tenant ID associated with the channel account.                                                                                                                                             |         |

### Get Conversation Members

Get list of members of the conversation

| Input           | Comments                                                                                                                                                                                       | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The connection to use for authenticating requests to Microsoft Bot Framework.                                                                                                                  |         |
| Service URL     | The Service URL (also referred to as Base URI) to send requests to the Bot Framework. Varies per bot channel and region. Use https://directline.botframework.com/ for Direct Line connections. |         |
| API Version     | The version of the Bot Framework API to call.                                                                                                                                                  | 3       |
| Conversation ID | The unique identifier of the conversation (refers to a channel, team, or direct message).                                                                                                      |         |

### Raw Request

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

### Send Adaptive Card Message

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

### Send Message

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
