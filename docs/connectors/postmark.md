---
title: Postmark Connector
sidebar_label: Postmark
description: The Postmark component is used as a developer friendly email delivery service
---

![Postmark](./assets/postmark.png#connector-icon)
The Postmark component is used as a developer friendly email delivery service

## Connections

### Postmark Token Authentication

Authenticate requests to Postmark using values obtained from the developer console.

**Access Tokens** are necessary for interacting with the Postmark API. Access tokens are unique to each server you create in Postmark.

To generate an **Access Token**, you should log in to Postmark and navigate to your server page. Within the server settings, you can find your access tokens.

Postmark provides two types of access tokens:

1. **Server Token**: This token is used to send emails and perform other server-related actions in Postmark.

2. **Account Token**: This token is used to perform account-level actions, such as creating and managing servers.

For your integration, you will need both the Server Token and the Account Token.

For more information about access tokens, refer to the [Postmark Docs](https://postmarkapp.com/developer/user-guide/getting-started/api-overview).

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Account Token |          |         |
| Server Token  |          |         |

## Triggers

### Webhook

Receive and validate webhook requests from Postmark for webhooks you configure.

## Actions

### Create Server

Create a new server

| Input              | Comments                                                                                                                                                                         | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The connection to use                                                                                                                                                            |         |
| Server Name        | Filter by a specific server name. Note that this is a string search, so 'MyServer' will match 'MyServer', 'MyServer Production', and 'MyServer Test'.                            |         |
| Server Color       |                                                                                                                                                                                  |         |
| SMTP API Activated | Specifies whether or not SMTP is enabled on this server.                                                                                                                         | false   |
| Raw Email Enabled  | When enabled, the raw email content will be included with inbound webhook payloads under the RawEmail key.                                                                       | false   |
| Delivery Type      | Specifies the type of environment for your server. Possible options: Live, Sandbox. Defaults to Live if not specified. This cannot be changed after the server has been created. | Live    |
| Inbound Hook URL   | URL to POST to every time an inbound event occurs.                                                                                                                               |         |

### Create Webhook

Create a new webhook

| Input       | Comments                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection  | The connection to use                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Webhook URL | Your webhook URL.                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Triggers    | A JSON object specifying the triggers for the webhook. Use the default structure as a guideline. | <code>{<br /> "Open": {<br /> "Enabled": true,<br /> "PostFirstOpenOnly": false<br /> },<br /> "Click": {<br /> "Enabled": true<br /> },<br /> "Delivery": {<br /> "Enabled": true<br /> },<br /> "Bounce": {<br /> "Enabled": false,<br /> "IncludeContent": false<br /> },<br /> "SpamComplaint": {<br /> "Enabled": false,<br /> "IncludeContent": false<br /> },<br /> "SubscriptionChange": {<br /> "Enabled": false<br /> }<br />}</code> |

### Delete Instanced Webhooks

Delete all webhooks that point to this instance

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection | The connection to use |         |

### Delete Server

Delete an existing server

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection | The connection to use |         |
| Server ID  |                       |         |

### Delete Webhook

Delete a specific webhook

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The connection to use              |         |
| Webhook ID | The ID of the webhook to retrieve. |         |

### Edit Server

Edit an existing server

| Input                       | Comments                                                                                                                                              | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The connection to use                                                                                                                                 |         |
| Server ID                   |                                                                                                                                                       |         |
| Server Name                 | Filter by a specific server name. Note that this is a string search, so 'MyServer' will match 'MyServer', 'MyServer Production', and 'MyServer Test'. |         |
| Server Color                |                                                                                                                                                       |         |
| SMTP API Activated          | Specifies whether or not SMTP is enabled on this server.                                                                                              | false   |
| Raw Email Enabled           | When enabled, the raw email content will be included with inbound webhook payloads under the RawEmail key.                                            | false   |
| Inbound Hook URL            | URL to POST to every time an inbound event occurs.                                                                                                    |         |
| Enable SMTP API Error Hooks |                                                                                                                                                       | false   |

### Edit Server Using Server Token Account

Edit an existing server

| Input        | Comments                                                                                                                                              | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The connection to use                                                                                                                                 |         |
| Server Name  | Filter by a specific server name. Note that this is a string search, so 'MyServer' will match 'MyServer', 'MyServer Production', and 'MyServer Test'. |         |
| Server Color |                                                                                                                                                       |         |

### Edit Webhook

Edit an existing webhook

| Input       | Comments                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection  | The connection to use                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Webhook ID  | The ID of the webhook to retrieve.                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Webhook URL | Your webhook URL.                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Triggers    | A JSON object specifying the triggers for the webhook. Use the default structure as a guideline. | <code>{<br /> "Open": {<br /> "Enabled": true,<br /> "PostFirstOpenOnly": false<br /> },<br /> "Click": {<br /> "Enabled": true<br /> },<br /> "Delivery": {<br /> "Enabled": true<br /> },<br /> "Bounce": {<br /> "Enabled": false,<br /> "IncludeContent": false<br /> },<br /> "SpamComplaint": {<br /> "Enabled": false,<br /> "IncludeContent": false<br /> },<br /> "SubscriptionChange": {<br /> "Enabled": false<br /> }<br />}</code> |

### Get Server

Get an existing server by ID

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Server ID  |                       |         |
| Connection | The connection to use |         |

### Get Server

Get server information

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection | The connection to use |         |

### Get Webhook

Retrieve a specific webhook

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The connection to use              |         |
| Webhook ID | The ID of the webhook to retrieve. |         |

### List Servers

Get a list of all servers associated with the account

| Input       | Comments                                                                                                                                              | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The connection to use                                                                                                                                 |         |
| Count       | Number of servers to return per request                                                                                                               |         |
| Offset      | Number of servers to skip                                                                                                                             |         |
| Server Name | Filter by a specific server name. Note that this is a string search, so 'MyServer' will match 'MyServer', 'MyServer Production', and 'MyServer Test'. |         |

### List Webhooks

List all webhooks for a server

| Input                       | Comments                                        | Default |
| --------------------------- | ----------------------------------------------- | ------- |
| Connection                  | The connection to use                           |         |
| Show Only Instance Webhooks | Show only webhooks that point to this instance. | true    |

### Raw Request

Send raw HTTP request to Postmark

| Input                   | Comments                                                                                                                                                                                                                        | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The connection to use                                                                                                                                                                                                           |         |
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

| Input        | Comments                                                                                                                                         | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection   | The connection to use                                                                                                                            |         |
| From Address | Provide a string value for the sender email address.                                                                                             |         |
| To Address   | Provide a string value for the recipient(s) email address. Can pass multiple as comma separated. Maximum of 50 recipients per message            |         |
| Cc           | Provide a string value for any carbon copied email address(es). Can pass multiple as comma separated. Maximum of 50 recipients per message       |         |
| Bcc          | Provide a string value for any blind carbon copied email address(es). Can pass multiple as comma separated. Maximum of 50 recipients per message |         |
| Subject      | Provide string value for the subject of the outgoing message                                                                                     |         |
| Tag          | Provide a string to categorize outgoing message                                                                                                  |         |
| Html Body    | Provide specified HTML email message                                                                                                             |         |
| Text Body    | Provide a string for the body of the outgoing message                                                                                            |         |
| Reply To     | Reply To override email address. Defaults to the Reply To set in the sender signature.                                                           |         |
| Track Opens  | Activate open tracking for this email.                                                                                                           | true    |
| Headers      | List of custom headers to include.                                                                                                               |         |
| Metadata     | Custom metadata key/value pairs.                                                                                                                 |         |
| Attachments  | List of attachments                                                                                                                              |         |

### Send Email Batch

Send a batch of emails using Postmark

| Input      | Comments                                                                                           | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection | The connection to use                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Emails     | Provide a JSON array of email objects. Each object should include the necessary email information. | <code>[<br /> {<br /> "fromAddress": "test@example.com",<br /> "toAddress": "user@example.com",<br /> "ccAddress": "cc@example.com",<br /> "bccAddress": "bcc@example.com",<br /> "subject": "Hello, world!",<br /> "tag": "tag-example",<br /> "htmlBody": "<p>Hello, world!</p>",<br /> "textBody": "Hello, world!",<br /> "replyTo": "reply@example.com",<br /> "headers": [<br /> {<br /> "Name": "CUSTOM-HEADER",<br /> "Value": "value"<br /> }<br /> ],<br /> "metadata": {<br /> "color": "green",<br /> "client-id": "12345"<br /> },<br /> "attachments": [<br /> {<br /> "Name": "readme.txt",<br /> "Content": "dGVzdCBjb250ZW50",<br /> "ContentType": "text/plain"<br /> },<br /> {<br /> "Name": "report.pdf",<br /> "Content": "dGVzdCBjb250ZW50",<br /> "ContentType": "application/octet-stream"<br /> }<br /> ]<br /> },<br /> {}<br />]</code> |

### Send Email Batch With Template

Send a batch of emails using a Postmark template

| Input      | Comments                                                                                   | Default                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection | The connection to use                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Messages   | The list of templates to send. Please note that we accept up to 500 messages per API call. | <code>{<br /> "Messages": [<br /> {<br /> "From": "sender@example.com",<br /> "To": "receiver@example.com",<br /> "TemplateId": 31941508,<br /> "TemplateModel": {<br /> "fizz": "buzz"<br /> }<br /> },<br /> {<br /> "From": "sender@example.com",<br /> "To": "receiver@example.com",<br /> "TemplateAlias": "code-your-own",<br /> "TemplateModel": {<br /> "fizz": "buzz"<br /> }<br /> }<br /> ]<br />}</code> |

### Send Email With Template

Send an email with a Postmark template

| Input          | Comments                                                                                                                                                                                                                | Default                                                          |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Connection     | The connection to use                                                                                                                                                                                                   |                                                                  |
| From Address   | Provide a string value for the sender email address.                                                                                                                                                                    |                                                                  |
| To Address     | Provide a string value for the recipient(s) email address. Can pass multiple as comma separated. Maximum of 50 recipients per message                                                                                   |                                                                  |
| Cc             | Provide a string value for any carbon copied email address(es). Can pass multiple as comma separated. Maximum of 50 recipients per message                                                                              |                                                                  |
| Bcc            | Provide a string value for any blind carbon copied email address(es). Can pass multiple as comma separated. Maximum of 50 recipients per message                                                                        |                                                                  |
| Subject        | Provide string value for the subject of the outgoing message                                                                                                                                                            |                                                                  |
| Tag            | Provide a string to categorize outgoing message                                                                                                                                                                         |                                                                  |
| Html Body      | Provide specified HTML email message                                                                                                                                                                                    |                                                                  |
| Text Body      | Provide a string for the body of the outgoing message                                                                                                                                                                   |                                                                  |
| Reply To       | Reply To override email address. Defaults to the Reply To set in the sender signature.                                                                                                                                  |                                                                  |
| Track Opens    | Activate open tracking for this email.                                                                                                                                                                                  | true                                                             |
| Headers        | List of custom headers to include.                                                                                                                                                                                      |                                                                  |
| Metadata       | Custom metadata key/value pairs.                                                                                                                                                                                        |                                                                  |
| Attachments    | List of attachments                                                                                                                                                                                                     |                                                                  |
| Template ID    | ID of the template to use to send the email.                                                                                                                                                                            |                                                                  |
| Template Model | The template data to use with the email template                                                                                                                                                                        | <code>{<br /> "fizz": "buzz",<br /> "test": "case"<br />}</code> |
| Template Alias | The alias of a template to use when sending this message. Required if TemplateId is not specified.                                                                                                                      |                                                                  |
| Inline Css     | By default, if the specified template contains an HTMLBody, we will apply the style blocks as inline attributes to the rendered HTML content. You may opt-out of this behavior by passing false for this request field. | true                                                             |
