---
title: Gmail Connector
sidebar_label: Gmail
description: Manage Messages in Google's email service
---

![Gmail](./assets/google-gmail.png#connector-icon)
Manage Messages in Google&#x27;s email service

## Connections

### OAuth2

OAuth2 Connection

The Gmail component authenticates requests through the Google Cloud Platform (GCP) OAuth 2.0 service.
You'll need to create a GCP OAuth 2.0 app so your integration can authenticate and perform Gmail tasks on your customers' behalf.

To create a Gmail OAuth 2.0 app, first make sure you have a Google Developer account - you can sign up at [https://console.cloud.google.com/](https://console.cloud.google.com/).
Then:

1. Open up the Gmail API console - [https://console.cloud.google.com/marketplace/product/google/gmail.googleapis.com](https://console.cloud.google.com/marketplace/product/google/gmail.googleapis.com)
1. You will be prompted to enable **Gmail API** for your project. Click **ENABLE**.
1. On the sidebar, select **APIs & Services** and then **Credentials**.
1. An OAuth 2.0 app includes a "Consent Screen" (the page that asks "Do you want to allow (Your Company) to access Gmail on your behalf?"). Click **CONFIGURE CONSENT SCREEN**.
   1. Your app will be externally available to your customers, so choose a **User Type** of **External**.
   1. Fill out the OAuth consent screen with an app name (your company or product's name), support email, app logo, domain, etc.
   1. You can ignore domains for now.
   1. On the next page, add any scopes relevant to your integration, like `https://www.googleapis.com/auth/gmail.readonly` and `https://www.googleapis.com/auth/gmail.send`.
   1. Enter some **test users** for your testing purposes.
      Your app will only work for those testing users until it is "verified" by Google.
      When you are ready for verification (they verify your privacy policy statement, etc), click **PUBLISH APP** on the **OAuth consent screen**.
      That'll allow your customers to authorize your integration to access their Gmail account.
1. Once your "Consent Screen" is configured open the **Credentials** page from the sidebar again.
1. Click **+CREATE CREDENTIALS** and select **OAuth Client ID**.
   1. Under **Application type** select **Web application**.
   1. Under **Authorized redirect URIs** enter the OAuth 2.0 callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
   1. Click **CREATE**.
1. Take note of the **Client ID** and **Client Secret** that are generated.

:::info
Make sure to **publish** your OAuth 2.0 app after you've tested it so users outside of your _test users_ can authorize your integration to interact with Gmail on their behalf.
:::

Now that you have a **Client ID** and **Client Secret**, add Gmail step to your workflow.
Open the **Configuration Wizard Designer** by clicking **Configuration Wizard**, select your **Gmail Connection** and enter your client ID and secret.

:::info A note on scopes
You can keep the default [Gmail scope](https://developers.google.com/gmail/api/auth/scopes), `https://mail.google.com/`.
This will grant you full permission over your users' Gmail accounts.

If you would like to limit permissions, you can select a subset of scopes, like `https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send`.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                   | Default                  |
| ------------- | ------------------------------------------------------------------------------------------ | ------------------------ |
| Scopes        | Space delimited listing of scopes. See https://developers.google.com/gmail/api/auth/scopes | https://mail.google.com/ |
| Client ID     | Your Gmail app's Client ID                                                                 |                          |
| Client Secret | Your Gmail app's Client Secret                                                             |                          |

### Service Account

Service Account Connection

In order to use the **Service Account** Authentication method for Gmail, you'll need to:

1. Create a Service Account in the Google Cloud Platform (GCP) Console.
   This can be done [here](https://console.cloud.google.com/) and then navigating to **Service Accounts**
2. Once a Service Account is created, you will need to generate a Service Account Key
   This can be done by clicking on the Service Account's options, navigating to the **Key** tab, and clicking **Add Key** to create a new key.
3. After creating the key, you will be able to download a JSON file that contains the key information. This key **contains sensible data** and should be used with caution.
4. Use the key downloaded in the previous step as input for the Gmail 'Service Account' connection.
5. Lastly, if needed, specify a granular scope, take into account that the connection defaults to the **https://mail.google.com/** scope, which gives full access to the Gmail API on your behalf.

| Input                    | Comments                                                                                   | Default                  |
| ------------------------ | ------------------------------------------------------------------------------------------ | ------------------------ |
| Service Account Key File | The Key File for your Google Service Account.                                              |                          |
| Scopes                   | Space delimited listing of scopes. See https://developers.google.com/gmail/api/auth/scopes | https://mail.google.com/ |

## Triggers

### Push Notification Webhook

Receive and validate webhook requests from Gmail for webhooks you configure.

## Actions

### Create Push Notification (Watch Request)

Enables the ability to send update notifications like new messages received.

| Input                    | Comments                                                                                                 | Default |
| ------------------------ | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for authorization.                                                                 |         |
| Gmail User ID (optional) | A user whose account to query (defaults to currently authenticated user)                                 |         |
| Topic Name               |                                                                                                          |         |
| Label ID                 | System labels typically correspond to pre-defined elements in the Gmail web interface such as the inbox. |         |

### Delete Push Notification (Stop Mailbox Updates)

Calls a stop notification.

| Input                    | Comments                                                                 | Default |
| ------------------------ | ------------------------------------------------------------------------ | ------- |
| Connection               | The Connection to use for authorization.                                 |         |
| Gmail User ID (optional) | A user whose account to query (defaults to currently authenticated user) |         |

### Get Current User

Get metadata about the authenticated user

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Connection to use for authorization. |         |

### Get Event History

Fetch events that have occurred in the mailbox since the specified startHistoryId.

| Input                    | Comments                                                                 | Default |
| ------------------------ | ------------------------------------------------------------------------ | ------- |
| Connection               | The Connection to use for authorization.                                 |         |
| Gmail User ID (optional) | A user whose account to query (defaults to currently authenticated user) |         |
| History ID               | The history ID to start history from.                                    |         |

### Get Label by Name

Get a label (including ID) by its name

| Input                    | Comments                                                                 | Default |
| ------------------------ | ------------------------------------------------------------------------ | ------- |
| Connection               | The Connection to use for authorization.                                 |         |
| Label Name               |                                                                          |         |
| Gmail User ID (optional) | A user whose account to query (defaults to currently authenticated user) |         |

### Get Message

Get a message by ID

| Input                    | Comments                                                                 | Default |
| ------------------------ | ------------------------------------------------------------------------ | ------- |
| Connection               | The Connection to use for authorization.                                 |         |
| Message ID               |                                                                          |         |
| Gmail User ID (optional) | A user whose account to query (defaults to currently authenticated user) |         |

### List Labels

List all labels within this account

| Input                    | Comments                                                                 | Default |
| ------------------------ | ------------------------------------------------------------------------ | ------- |
| Connection               | The Connection to use for authorization.                                 |         |
| Gmail User ID (optional) | A user whose account to query (defaults to currently authenticated user) |         |

### List Messages

Get a list of messages

| Input                    | Comments                                                                                                              | Default |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for authorization.                                                                              |         |
| Gmail User ID (optional) | A user whose account to query (defaults to currently authenticated user)                                              |         |
| Page Token               | If you're looping over pages of results, this is the page token from the result of the previous 'list messages' step. |         |
| Fetch All                | Turn this On to fetch all pages of results.                                                                           | false   |
| Query String             | Only return messages matching the specified query. Supports the same query format as the Gmail search box.            |         |
| Max Results              | The maximum number of results to return.                                                                              |         |
| Labels                   | Show only messages with labels that match these label IDs                                                             |         |
| Add Metadata             | Turn this On to add metadata to the messages. This will slow down the response time.                                  | false   |

### Raw Request

Send raw HTTP request to Google Gmail

| Input                   | Comments                                                                                                                                                                                                                                                                       | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Connection to use for authorization.                                                                                                                                                                                                                                       |         |
| URL                     | Input the path only (/v1/users/{userId}/messages), The base URL is already included (https://gmail.googleapis.com/gmail). For example, to connect to https://gmail.googleapis.com/gmail/v1/users/{userId}/messages, only /v1/users/{userId}/messages is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                        |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                      |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                           |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                               |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                         |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                            |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                    |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                       | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                            |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                           | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                            | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                               | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                            | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                  | false   |

### Send Message

Send a new message

| Input                    | Comments                                                                                                                                                                                                                                                                                                             | Default |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for authorization.                                                                                                                                                                                                                                                                             |         |
| To                       |                                                                                                                                                                                                                                                                                                                      |         |
| From                     | Alias of the sender email address. This is the email address that will be used to send the email.                                                                                                                                                                                                                    |         |
| CC                       |                                                                                                                                                                                                                                                                                                                      |         |
| BCC                      |                                                                                                                                                                                                                                                                                                                      |         |
| Subject                  |                                                                                                                                                                                                                                                                                                                      |         |
| Plain text body          | For email clients that do not support HTML                                                                                                                                                                                                                                                                           |         |
| HTML body                | For email clients that support HTML                                                                                                                                                                                                                                                                                  |         |
| Attachments              | Specify a file name as the key (i.e. 'my-file.pdf'), and the file as the value                                                                                                                                                                                                                                       |         |
| Dynamic Attachments      | An array of objects with 'key' and 'value' properties, where 'key' is the file name and 'value' is the binary file data. Typically used as a reference from a previous step. Ex. [{key: "my-attachment.pdf", value: <BINARY FILE DATA TO ATTACH>},{key: "another-attachment.xlsx", value: <BINARY EXCEL FILE DATA>}] |         |
| Gmail User ID (optional) | A user whose account to query (defaults to currently authenticated user)                                                                                                                                                                                                                                             |         |

### Trash Message

Send a message to the trash

| Input                    | Comments                                                                 | Default |
| ------------------------ | ------------------------------------------------------------------------ | ------- |
| Connection               | The Connection to use for authorization.                                 |         |
| Message ID               |                                                                          |         |
| Gmail User ID (optional) | A user whose account to query (defaults to currently authenticated user) |         |

### Untrash Message

Remove a message from the trash

| Input                    | Comments                                                                 | Default |
| ------------------------ | ------------------------------------------------------------------------ | ------- |
| Connection               | The Connection to use for authorization.                                 |         |
| Message ID               |                                                                          |         |
| Gmail User ID (optional) | A user whose account to query (defaults to currently authenticated user) |         |

### Update Message Labels

Add or remove labels from a message

| Input                    | Comments                                                                 | Default |
| ------------------------ | ------------------------------------------------------------------------ | ------- |
| Connection               | The Connection to use for authorization.                                 |         |
| Message ID               |                                                                          |         |
| Gmail User ID (optional) | A user whose account to query (defaults to currently authenticated user) |         |
| Labels to Add            | A list of labels to add (optional)                                       |         |
| Labels to Remove         | A list of labels to add (optional)                                       |         |
