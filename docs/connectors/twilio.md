---
title: Twilio Connector
sidebar_label: Twilio
description: Send SMS messages through Twilio
---

![Twilio](./assets/twilio.png#connector-icon)
Send SMS messages through Twilio

## Connections

### Twilio API Key Connection

Authenticate requests to Twilio using an API key

This component authenticates with Twilio using API key/secret pairs that can be generated from Twilio's app console.
To create a Twilio API key and secret pair:

- Go to the Twilio [console](https://console.twilio.com/)
- On the top-right of the screen click **Account** -> **API Keys & Tokens**
- Select **Create API Key**
- Give your key a name and select **Standard** for **Key type**
- Take note of the API key's **SID** and **Secret** - you will enter those in a moment

Now, when you create an integration that uses Twilio, a "Twilio API Key Connection" will automatically be generated.
Enter your **API Key SID** (starts with "SK..."), and its **Secret**.
Go back to your Twilio console to find your **Account SID** (starts with "AC..."), and enter that as well.

| Input          | Comments                                                      | Default |
| -------------- | ------------------------------------------------------------- | ------- |
| Account SID    | Your account SID (starts with AC)                             |         |
| API Key SID    | An API Key SID (starts with SK)                               |         |
| API Key Secret | The API secret that was generated when an API key was created |         |

### Twilio Auth Token Connection

Authenticate requests using account SID and auth token

When you create a Twilio account, an **Account String Identifier** (Account SID) and **Auth Token** are generated.
You can use the account SID and auth token to authenticate with Twilio and to send SMS messages.

:::caution Consider API Keys instead
For security reasons, we recommend using an [API Key Connection](#twilio-api-key-connection) instead.
API keys can be revoked and auth tokens generated using API keys are short-lived.
:::

| Input       | Comments                                    | Default |
| ----------- | ------------------------------------------- | ------- |
| Account SID | Your account SID (starts with AC)           |         |
| Auth Token  | Can be found on https://console.twilio.com/ |         |

## Triggers

### Webhook

Receive and validate webhook requests from Twilio for webhooks you configure.

## Actions

### Get SMS

Get an SMS message

| Input       | Comments | Default |
| ----------- | -------- | ------- |
| Message SID |          |         |
| Connection  |          |         |

### List SMS messages

Lists SMS messages

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send raw HTTP request to Twilio

| Input                   | Comments                                                                                                                                                                                                                                                                                                                     | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                              |         |
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

### Send SMS

Send an SMS message

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| To         | The SMS recipient's phone number.    |         |
| From       | The SMS sender's phone number.       |         |
| Message    | The message body of the SMS message. |         |
| Connection |                                      |         |
