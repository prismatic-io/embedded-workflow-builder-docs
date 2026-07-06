---
title: Twilio Connector
sidebar_label: Twilio
description: Send SMS messages through Twilio
---

![Twilio](./assets/twilio.png#connector-icon)
[Twilio](https://www.twilio.com/) is a cloud communications platform for sending SMS text messages and other programmable messaging.
This component allows sending SMS messages, retrieving message records, and reacting to Twilio events from within an integration.

## API Documentation

This component was built using the [Twilio Programmable Messaging API](https://www.twilio.com/docs/messaging/api) (API version `2010-04-01`).

## Connections

### API Key {#apikeysecret}

Authenticate requests to Twilio using an API key and secret.

This component authenticates with Twilio using an API key and secret pair generated from the Twilio console.

#### Prerequisites

- A Twilio account with access to the [Twilio Console](https://console.twilio.com/)
- Permissions to create API keys for the account

#### Setup Steps

1. Sign in to the [Twilio Console](https://console.twilio.com/)
2. In the top-right of the screen, click **Account** -> **API Keys & Tokens**
3. Select **Create API Key**
4. Enter a descriptive name for the key and select **Standard** for **Key type**
5. Take note of the API key's **SID** and **Secret** (the secret is only shown once)
6. From the Twilio console, locate the **Account SID** (it starts with `AC`)

#### Configure the Connection

Create a connection of type **API Key** and enter the following values:

- **Account SID**: The Twilio Account SID, which starts with `AC` (for example, `ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)
- **API Key SID**: The API Key SID created in the previous step, which starts with `SK` (for example, `SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)
- **API Key Secret**: The secret generated when the API key was created

:::warning[Store the Secret Securely]
The API key secret is only displayed once at creation time. Save it in a secure location before leaving the page.
:::

| Input          | Comments                                               | Default |
| -------------- | ------------------------------------------------------ | ------- |
| Account SID    | The Twilio Account SID (starts with AC).               |         |
| API Key SID    | The API Key SID (starts with SK).                      |         |
| API Key Secret | The API secret generated when the API key was created. |         |

### Basic Authentication {#basic}

Authenticate requests to Twilio using an Account SID and Auth Token.

When a Twilio account is created, an **Account String Identifier** (Account SID) and **Auth Token** are generated automatically.
The Account SID and Auth Token can be used to authenticate with Twilio and send SMS messages.

#### Prerequisites

- A Twilio account with access to the [Twilio Console](https://console.twilio.com/)

#### Setup Steps

1. Sign in to the [Twilio Console](https://console.twilio.com/)
2. From the **Account Info** panel on the dashboard, locate the **Account SID** (starts with `AC`) and the **Auth Token**
3. Copy both values for use in the connection configuration

#### Configure the Connection

Create a connection of type **Basic Authentication** and enter the following values:

- **Account SID**: The Twilio Account SID, which starts with `AC`
- **Auth Token**: The Auth Token shown in the Twilio Console

:::caution[Consider API Keys instead]
For security reasons, the [API Key Connection](#apikeysecret) is recommended over Basic Authentication.
API keys can be revoked independently, and auth tokens generated using API keys are short-lived.
:::

| Input       | Comments                                                               | Default |
| ----------- | ---------------------------------------------------------------------- | ------- |
| Account SID | The Twilio Account SID (starts with AC).                               |         |
| Auth Token  | The Auth Token from the [Twilio Console](https://console.twilio.com/). |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for newly sent Twilio messages on a configured schedule. Returned messages appear in the created bucket; the updated bucket is preserved for shape parity but is always empty because Twilio polling does not detect status changes to already-sent messages.

| Input                | Comments                                                                                                                                                                                                                 | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection           | The Twilio connection to use.                                                                                                                                                                                            |         |
| From Filter          | The sender phone number to filter polled messages by, in E.164 format. Leave blank to include all senders.                                                                                                               |         |
| To Filter            | The recipient phone number to filter polled messages by, in E.164 format. Leave blank to include all recipients.                                                                                                         |         |
| Show New Records     | When true, newly sent messages are included in the trigger output.                                                                                                                                                       | true    |
| Show Updated Records | Reserved for shape consistency with other polling triggers. Twilio polling does not detect status changes to already-sent messages (use the webhook trigger for status callbacks). The 'updated' bucket is always empty. | true    |

### Webhook {#webhook}

Receive and validate webhook requests from Twilio for manually configured webhook subscriptions.

## Actions

### Get SMS {#getsms}

Retrieve an SMS message by SID.

| Input       | Comments                                   | Default |
| ----------- | ------------------------------------------ | ------- |
| Connection  | The Twilio connection to use.              |         |
| Message SID | The unique identifier for the SMS message. |         |

### List SMS Messages {#listmessages}

List SMS messages from the Twilio account.

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Twilio connection to use. |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to Twilio.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                     | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Twilio connection to use.                                                                                                                                                                                                                                                                                                |         |
| URL                     | Input the path only (/Accounts/$TWILIO_ACCOUNT_SID/Messages.json), The base URL is already included (https://api.twilio.com/2010-04-01). For example, to connect to https://api.twilio.com/2010-04-01/Accounts/$TWILIO_ACCOUNT_SID/Messages.json, only /Accounts/$TWILIO_ACCOUNT_SID/Messages.json is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                      |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                    |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                         |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                             |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                       |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                          |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                  |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                     | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                          |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                             | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                          | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                | false   |

### Send SMS {#sendsms}

Send an SMS message via Twilio.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Twilio connection to use.                     |         |
| To         | The SMS recipient's phone number in E.164 format. |         |
| From       | The SMS sender's phone number in E.164 format.    |         |
| Message    | The text content of the SMS message to send.      |         |
