---
title: Postmark Connector
sidebar_label: Postmark
description: Send transactional emails and manage delivery settings in Postmark.
---

![Postmark](./assets/postmark.png#connector-icon)
Send transactional emails and manage delivery settings in Postmark.

## Connections

### Postmark Token Authentication

Authenticate requests to Postmark using values obtained from the developer console.

To authenticate with Postmark, access tokens are required. Postmark provides two types of tokens: a **Server Token** for sending emails and server-related actions, and an **Account Token** for account-level management such as creating and managing servers.

#### Prerequisites

- An active Postmark account
- At least one server created in Postmark (required for Server Token)

#### Setup Steps

To generate access tokens:

1. Log in to [Postmark](https://account.postmarkapp.com/)
2. Navigate to **Servers** in the left sidebar
3. Select the server to generate tokens for (or create a new server if needed)
4. Click on the **API Tokens** tab in the server settings
5. Locate the **Server API Token** in the API Tokens section
6. Copy the **Server Token** value
7. To obtain the **Account Token**, click on **Account** in the top navigation
8. Select **API Tokens** from the account menu
9. Copy the **Account Token** value

#### Configure the Connection

- Enter the **Account Token** value into the **Account Token** field
- Enter the **Server Token** value into the **Server Token** field

The **Server Token** is required for email sending operations and server-level actions. The **Account Token** is required for account-level operations such as creating and managing servers.

| Input         | Comments                                                                                                                                                                       | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Account Token | Account level API token from the [Postmark API Tokens page](https://account.postmarkapp.com/api_tokens). Used for account management operations like creating servers.         |         |
| Server Token  | Server level API token from your Postmark server settings. Used for sending emails and managing server-specific resources. Find it under Servers > [Your Server] > API Tokens. |         |

## Triggers

### Webhook

Receive and validate webhook requests from Postmark for webhooks you configure.

## Actions

### Create Server

Create a new server

| Input              | Comments                                                                                                                                                                | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Postmark connection to use.                                                                                                                                         |         |
| Server Name        | Filter by a specific server name. <strong>Note:</strong> This is a partial match search - 'MyServer' will match 'MyServer', 'MyServer Production', and 'MyServer Test'. |         |
| Server Color       | Color label for the server in the Postmark interface.                                                                                                                   |         |
| SMTP API Activated | When true, SMTP is enabled on this server.                                                                                                                              | false   |
| Raw Email Enabled  | When true, raw email content will be included with inbound webhook payloads under the RawEmail key.                                                                     | false   |
| Delivery Type      | The type of environment for your server. Options: Live, Sandbox. Defaults to Live. <strong>Important:</strong> This cannot be changed after the server is created.      | Live    |
| Inbound Hook URL   | The URL to POST to whenever an inbound email event occurs.                                                                                                              |         |

### Create Webhook

Create a new webhook

| Input       | Comments                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection  | The Postmark connection to use.                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Webhook URL | The URL where webhook events will be sent.                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Triggers    | A JSON object specifying the triggers for the webhook. Use the default structure as a guideline. | <code>{<br /> "Open": {<br /> "Enabled": true,<br /> "PostFirstOpenOnly": false<br /> },<br /> "Click": {<br /> "Enabled": true<br /> },<br /> "Delivery": {<br /> "Enabled": true<br /> },<br /> "Bounce": {<br /> "Enabled": false,<br /> "IncludeContent": false<br /> },<br /> "SpamComplaint": {<br /> "Enabled": false,<br /> "IncludeContent": false<br /> },<br /> "SubscriptionChange": {<br /> "Enabled": false<br /> }<br />}</code> |

### Delete Instanced Webhooks

Delete all webhooks that point to this instance

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Postmark connection to use. |         |

### Delete Server

Delete an existing server

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Postmark connection to use.              |         |
| Server ID  | The unique numeric identifier of the server. |         |

### Delete Webhook

Delete a specific webhook

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Postmark connection to use.               |         |
| Webhook ID | The unique numeric identifier of the webhook. |         |

### Edit Server

Edit an existing server

| Input                       | Comments                                                                                                                                                                | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The Postmark connection to use.                                                                                                                                         |         |
| Server ID                   | The unique numeric identifier of the server.                                                                                                                            |         |
| Server Name                 | Filter by a specific server name. <strong>Note:</strong> This is a partial match search - 'MyServer' will match 'MyServer', 'MyServer Production', and 'MyServer Test'. |         |
| Server Color                | Color label for the server in the Postmark interface.                                                                                                                   |         |
| SMTP API Activated          | When true, SMTP is enabled on this server.                                                                                                                              | false   |
| Raw Email Enabled           | When true, raw email content will be included with inbound webhook payloads under the RawEmail key.                                                                     | false   |
| Inbound Hook URL            | The URL to POST to whenever an inbound email event occurs.                                                                                                              |         |
| Enable SMTP API Error Hooks | When true, SMTP API errors will be included with bounce webhooks.                                                                                                       | false   |

### Edit Server Using Server Token Account

Edit an existing server

| Input        | Comments                                                                                                                                                                | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Postmark connection to use.                                                                                                                                         |         |
| Server Name  | Filter by a specific server name. <strong>Note:</strong> This is a partial match search - 'MyServer' will match 'MyServer', 'MyServer Production', and 'MyServer Test'. |         |
| Server Color | Color label for the server in the Postmark interface.                                                                                                                   |         |

### Edit Webhook

Edit an existing webhook

| Input       | Comments                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection  | The Postmark connection to use.                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Webhook ID  | The unique numeric identifier of the webhook.                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Webhook URL | The URL where webhook events will be sent.                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Triggers    | A JSON object specifying the triggers for the webhook. Use the default structure as a guideline. | <code>{<br /> "Open": {<br /> "Enabled": true,<br /> "PostFirstOpenOnly": false<br /> },<br /> "Click": {<br /> "Enabled": true<br /> },<br /> "Delivery": {<br /> "Enabled": true<br /> },<br /> "Bounce": {<br /> "Enabled": false,<br /> "IncludeContent": false<br /> },<br /> "SpamComplaint": {<br /> "Enabled": false,<br /> "IncludeContent": false<br /> },<br /> "SubscriptionChange": {<br /> "Enabled": false<br /> }<br />}</code> |

### Get Server

Get an existing server by ID

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Server ID  | The unique numeric identifier of the server. |         |
| Connection | The Postmark connection to use.              |         |

### Get Server

Get server information

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Postmark connection to use. |         |

### Get Webhook

Retrieve a specific webhook

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Postmark connection to use.               |         |
| Webhook ID | The unique numeric identifier of the webhook. |         |

### List Servers

Get a list of all servers associated with the account

| Input       | Comments                                                                                                                                                                | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Postmark connection to use.                                                                                                                                         |         |
| Count       | Number of servers to return per request. Maximum 500.                                                                                                                   |         |
| Offset      | Number of servers to skip for pagination.                                                                                                                               |         |
| Server Name | Filter by a specific server name. <strong>Note:</strong> This is a partial match search - 'MyServer' will match 'MyServer', 'MyServer Production', and 'MyServer Test'. |         |

### List Webhooks

List all webhooks for a server

| Input                       | Comments                                                   | Default |
| --------------------------- | ---------------------------------------------------------- | ------- |
| Connection                  | The Postmark connection to use.                            |         |
| Show Only Instance Webhooks | When true, show only webhooks that point to this instance. | true    |

### Raw Request

Send raw HTTP request to Postmark

| Input                   | Comments                                                                                                                                                                                                                        | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Postmark connection to use.                                                                                                                                                                                                 |         |
| URL                     | Input the path only (/servers/9363760), The base URL is already included (https://api.postmarkapp.com). For example, to connect to https://api.postmarkapp.com/servers/9363760, only /servers/9363760 is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                         |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                       |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                            |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                          |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                             |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                     |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                        | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                             |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                            | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                             | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                             | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                   | false   |

### Send Email

Send an email using Postmark

| Input        | Comments                                                                                                                        | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Postmark connection to use.                                                                                                 |         |
| From Address | The sender email address. Must be a verified sender signature in Postmark.                                                      |         |
| To Address   | The recipient email address(es). Multiple addresses can be comma-separated. Maximum of 50 recipients per message.               |         |
| Cc           | Carbon copy recipient email address(es). Multiple addresses can be comma-separated. Maximum of 50 recipients per message.       |         |
| Bcc          | Blind carbon copy recipient email address(es). Multiple addresses can be comma-separated. Maximum of 50 recipients per message. |         |
| Subject      | The subject line of the email message.                                                                                          |         |
| Tag          | A tag to categorize the email for tracking and filtering purposes.                                                              |         |
| Html Body    | The HTML content of the email message.                                                                                          |         |
| Text Body    | The plain text content of the email message.                                                                                    |         |
| Reply To     | Reply-to email address override. Defaults to the Reply To address set in the sender signature.                                  |         |
| Track Opens  | When true, activate open tracking for this email.                                                                               | true    |
| Headers      | List of custom headers to include.                                                                                              |         |
| Metadata     | Custom metadata key/value pairs.                                                                                                |         |
| Attachments  | List of attachments                                                                                                             |         |

### Send Email Batch

Send a batch of emails using Postmark

| Input      | Comments                                                                                           | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection | The Postmark connection to use.                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Emails     | Provide a JSON array of email objects. Each object should include the necessary email information. | <code>[<br /> {<br /> "fromAddress": "test@example.com",<br /> "toAddress": "user@example.com",<br /> "ccAddress": "cc@example.com",<br /> "bccAddress": "bcc@example.com",<br /> "subject": "Hello, world!",<br /> "tag": "tag-example",<br /> "htmlBody": "<p>Hello, world!</p>",<br /> "textBody": "Hello, world!",<br /> "replyTo": "reply@example.com",<br /> "headers": [<br /> {<br /> "Name": "CUSTOM-HEADER",<br /> "Value": "value"<br /> }<br /> ],<br /> "metadata": {<br /> "color": "green",<br /> "client-id": "12345"<br /> },<br /> "attachments": [<br /> {<br /> "Name": "readme.txt",<br /> "Content": "dGVzdCBjb250ZW50",<br /> "ContentType": "text/plain"<br /> },<br /> {<br /> "Name": "report.pdf",<br /> "Content": "dGVzdCBjb250ZW50",<br /> "ContentType": "application/octet-stream"<br /> }<br /> ]<br /> },<br /> {}<br />]</code> |

### Send Email Batch With Template

Send a batch of emails using a Postmark template

| Input      | Comments                                                                                   | Default                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection | The Postmark connection to use.                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Messages   | The list of templates to send. Please note that we accept up to 500 messages per API call. | <code>{<br /> "Messages": [<br /> {<br /> "From": "sender@example.com",<br /> "To": "receiver@example.com",<br /> "TemplateId": 31941508,<br /> "TemplateModel": {<br /> "fizz": "buzz"<br /> }<br /> },<br /> {<br /> "From": "sender@example.com",<br /> "To": "receiver@example.com",<br /> "TemplateAlias": "code-your-own",<br /> "TemplateModel": {<br /> "fizz": "buzz"<br /> }<br /> }<br /> ]<br />}</code> |

### Send Email With Template

Send an email with a Postmark template

| Input          | Comments                                                                                                                        | Default                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Connection     | The Postmark connection to use.                                                                                                 |                                                                  |
| From Address   | The sender email address. Must be a verified sender signature in Postmark.                                                      |                                                                  |
| To Address     | The recipient email address(es). Multiple addresses can be comma-separated. Maximum of 50 recipients per message.               |                                                                  |
| Cc             | Carbon copy recipient email address(es). Multiple addresses can be comma-separated. Maximum of 50 recipients per message.       |                                                                  |
| Bcc            | Blind carbon copy recipient email address(es). Multiple addresses can be comma-separated. Maximum of 50 recipients per message. |                                                                  |
| Subject        | The subject line of the email message.                                                                                          |                                                                  |
| Tag            | A tag to categorize the email for tracking and filtering purposes.                                                              |                                                                  |
| Html Body      | The HTML content of the email message.                                                                                          |                                                                  |
| Text Body      | The plain text content of the email message.                                                                                    |                                                                  |
| Reply To       | Reply-to email address override. Defaults to the Reply To address set in the sender signature.                                  |                                                                  |
| Track Opens    | When true, activate open tracking for this email.                                                                               | true                                                             |
| Headers        | List of custom headers to include.                                                                                              |                                                                  |
| Metadata       | Custom metadata key/value pairs.                                                                                                |                                                                  |
| Attachments    | List of attachments                                                                                                             |                                                                  |
| Template ID    | The numeric ID of the Postmark template to use for sending the email.                                                           |                                                                  |
| Template Model | The template data to use with the email template                                                                                | <code>{<br /> "fizz": "buzz",<br /> "test": "case"<br />}</code> |
| Template Alias | The alias of a template to use when sending this message. Required if Template ID is not specified.                             |                                                                  |
| Inline Css     | When true, CSS style blocks in the template will be applied as inline attributes to the rendered HTML content.                  | true                                                             |
