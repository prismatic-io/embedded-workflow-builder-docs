---
title: SendGrid Connector
sidebar_label: SendGrid
description: Manage email delivery and contacts in SendGrid.
---

![SendGrid](./assets/sendgrid.png#connector-icon)
Manage email delivery and contacts in SendGrid.

## Connections

### API Key {#apikey}

API Key connection for SendGrid

| Input   | Comments                                                                                                                                          | Default |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| API Key | API Key from your SendGrid account. Generate one in Settings > API Keys. [Learn more](https://docs.sendgrid.com/ui/account-and-settings/api-keys) |         |

## Triggers

### Managed Webhook Events {#eventwebhook}

Receive event webhook notifications from SendGrid. Automatically creates and manages a webhook subscription when the instance is deployed, and removes the subscription when the instance is deleted.

| Input         | Comments                                                         | Default                    |
| ------------- | ---------------------------------------------------------------- | -------------------------- |
| Connection    | The SendGrid connection to use.                                  |                            |
| Friendly Name | A friendly name to help differentiate between multiple webhooks. |                            |
| Events        | The events to track.                                             | <code>["delivered"]</code> |

### Manual Webhook {#webhook}

Receive and validate webhook requests from SendGrid for manually configured webhooks.

## Actions

### Add or Update Contact {#addorupdatecontact}

Add or update a contact. This can also be used to add contacts to a list.

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                                                               |         |
| List IDs   | Comma-separated IDs of the lists to add the contact to. These lists must already exist.       |         |
| Contacts   | An array of contact objects to add or update. See SendGrid docs for contact object structure. |         |

### Create List {#createlist}

Create a new contact list

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The SendGrid connection to use. |         |
| List Name  | The name of the list to create. |         |

### Create Webhook {#createwebhook}

Create a new Event Webhook configuration to receive email event data.

| Input         | Comments                                                         | Default                    |
| ------------- | ---------------------------------------------------------------- | -------------------------- |
| Connection    | The SendGrid connection to use.                                  |                            |
| Webhook URL   | The URL where SendGrid will send event data.                     |                            |
| Friendly Name | A friendly name to help differentiate between multiple webhooks. |                            |
| Enabled       | When true, enables the Event Webhook.                            | true                       |
| Events        | The events to track.                                             | <code>["delivered"]</code> |

### Delete Webhook {#deletewebhook}

Delete an Event Webhook configuration.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The SendGrid connection to use. |         |
| Webhook ID | The ID of the webhook.          |         |

### Get All Field Definitions {#getallfielddefinitions}

Retrieve all custom field definitions with pagination support

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                           |         |
| Page Size  | Number of results to return per page (max 100).           |         |
| Page Token | Token for fetching the next or previous page of results.  |         |
| Fetch All  | When true, fetches all pages of results using pagination. | false   |

### Get All Lists {#getalllists}

Retrieve all contact lists with pagination support

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                           |         |
| Page Size  | Number of results to return per page (max 100).           |         |
| Page Token | Token for fetching the next or previous page of results.  |         |
| Fetch All  | When true, fetches all pages of results using pagination. | false   |

### Get Contacts by Emails {#getcontactsbyemails}

Retrieve contacts by their email addresses.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                |         |
| Emails     | Comma-separated email addresses to search for. |         |

### Get Import Status {#getimportstatus}

Check the status of a contact import job

| Input      | Comments                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                                                              |         |
| Job ID     | The job ID returned from Import Contacts, Add/Update Contact, or Delete Contacts operations. |         |

### Get List by ID {#getlistbyid}

Retrieve a specific contact list by its ID

| Input                   | Comments                                                  | Default |
| ----------------------- | --------------------------------------------------------- | ------- |
| Connection              | The SendGrid connection to use.                           |         |
| List ID                 | The ID of the list to retrieve.                           |         |
| Include Sample Contacts | When true, includes a sample of contacts in the response. | false   |

### Get Webhook {#getwebhook}

Retrieve an Event Webhook configuration by ID.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The SendGrid connection to use. |         |
| Webhook ID | The ID of the webhook.          |         |

### Initiate Contacts Import {#initiatecontactsimport}

Initiates a CSV contact import. Returns a URL and headers for uploading the CSV file.

| Input          | Comments                                                                                                                                      | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The SendGrid connection to use.                                                                                                               |         |
| List IDs       | Comma-separated IDs of the lists to add the contact to. These lists must already exist.                                                       |         |
| Field Mappings | An array of field definition IDs to map the uploaded CSV columns. Use null to skip a column. Get IDs from 'Get All Field Definitions' action. |         |
| Is Compressed  | When true, indicates that the CSV file will be gzip-compressed.                                                                               | false   |

### List Webhooks {#listwebhooks}

List all Event Webhook configurations.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The SendGrid connection to use. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to SendGrid

| Input                   | Comments                                                                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The SendGrid connection to use.                                                                                                                                                                               |         |
| URL                     | Input the path only (/templates), The base URL is already included (https://api.sendgrid.com/v3). For example, to connect to https://api.sendgrid.com/v3/templates, only /templates is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                       |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                     |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                          |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                              |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                        |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                           |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                   |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                      | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                           |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                           | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.              | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                 | false   |

### Send Email {#sendemail}

Send a single email to one or more recipients

| Input                 | Comments                                                                                                                                                                                                           | Default         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection            | The SendGrid connection to use.                                                                                                                                                                                    |                 |
| To                    | The recipient's email address, or a comma-separated list of recipient email addresses.                                                                                                                             |                 |
| From Email            | The sender's email address.                                                                                                                                                                                        |                 |
| Subject               | The email subject line.                                                                                                                                                                                            |                 |
| Text                  | The text body of the email.                                                                                                                                                                                        |                 |
| CC                    | The recipient's email address, or a comma-separated list of recipient email addresses to CC.                                                                                                                       |                 |
| BCC                   | The recipient's email address, or a comma-separated list of recipient email addresses to BCC.                                                                                                                      |                 |
| From Name             | The sender's name.                                                                                                                                                                                                 |                 |
| Reply To Email        | Email To Reply To.                                                                                                                                                                                                 |                 |
| Reply To Name         | Name to reply to. This field is only required when you provide a value for Reply To Email.                                                                                                                         |                 |
| HTML                  | The optional HTML body of the email.                                                                                                                                                                               |                 |
| Personalizations      | You can use this field to overwrite multiple properties of the email. For examples of which properties to use, checkout the SendGrid docs: https://docs.sendgrid.com/for-developers/sending-email/personalizations | <code>[]</code> |
| Attachment Content    | Provide attachment data to send with the email. The 'File Name' field is required when using this input and should reference the data output from a previous action.                                               |                 |
| Disposition           | Specifies how you would like the attachment to be displayed.                                                                                                                                                       |                 |
| File Name             | Provide a name for the file to attach. The 'Attachment Content' field is required when using this input.                                                                                                           |                 |
| File Type             | The MIME type of the content you are attaching.                                                                                                                                                                    |                 |
| Content Id            | Provide the content Id of the attachment. This value is only required when you select 'inline'.                                                                                                                    |                 |
| Multiple Attachments  | Provide an array of attachments to send with the email. See [SendGrid API documentation](https://www.twilio.com/docs/sendgrid/api-reference/mail-send/mail-send#request-body) for more information.                |                 |
| Subscription Tracking | When true, inserts a subscription management link at the bottom of the text and HTML bodies of your email.                                                                                                         | false           |

### Send Email with Dynamic Template {#sendemailwithdynamictemplate}

Send an email using a SendGrid dynamic template with complex nested JSON data

| Input                 | Comments                                                                                                                                                                                                                                    | Default         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection            | The SendGrid connection to use.                                                                                                                                                                                                             |                 |
| Template ID           | The ID of the dynamic template to use.                                                                                                                                                                                                      |                 |
| Dynamic Template Data | The data to be used for the dynamic template. Supports complex nested JSON structures including arrays and objects for order confirmations, customer data, and more.                                                                        |                 |
| From Email            | The sender's email address.                                                                                                                                                                                                                 |                 |
| To                    | The recipient's email address, or a comma-separated list of recipient email addresses. Required if 'Personalizations' is not provided. Will be ignored if 'Personalizations' is provided.                                                   |                 |
| From Name             | The sender's name.                                                                                                                                                                                                                          |                 |
| CC                    | The recipient's email address, or a comma-separated list of recipient email addresses to CC. Will be ignored if 'Personalizations' is provided.                                                                                             |                 |
| BCC                   | The recipient's email address, or a comma-separated list of recipient email addresses to BCC. Will be ignored if 'Personalizations' is provided.                                                                                            |                 |
| Reply To Email        | Email To Reply To.                                                                                                                                                                                                                          |                 |
| Reply To Name         | Name to reply to. This field is only required when you provide a value for Reply To Email.                                                                                                                                                  |                 |
| Personalizations      | Advanced: Provide a personalizations array to send different variations to different recipients. When provided, this will override 'To', 'CC', and 'BCC' inputs. Each personalization will automatically include the dynamic template data. | <code>[]</code> |

### Send Multiple Emails {#sendmultipleemails}

Send a separate email to each recipient

| Input                | Comments                                                                                                                                                                                                           | Default         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection           | The SendGrid connection to use.                                                                                                                                                                                    |                 |
| To                   | The recipient's email address, or a comma-separated list of recipient email addresses.                                                                                                                             |                 |
| From Email           | The sender's email address.                                                                                                                                                                                        |                 |
| Subject              | The email subject line.                                                                                                                                                                                            |                 |
| Text                 | The text body of the email.                                                                                                                                                                                        |                 |
| CC                   | The recipient's email address, or a comma-separated list of recipient email addresses to CC.                                                                                                                       |                 |
| BCC                  | The recipient's email address, or a comma-separated list of recipient email addresses to BCC.                                                                                                                      |                 |
| From Name            | The sender's name.                                                                                                                                                                                                 |                 |
| Reply To Email       | Email To Reply To.                                                                                                                                                                                                 |                 |
| Reply To Name        | Name to reply to. This field is only required when you provide a value for Reply To Email.                                                                                                                         |                 |
| HTML                 | The optional HTML body of the email.                                                                                                                                                                               |                 |
| Personalizations     | You can use this field to overwrite multiple properties of the email. For examples of which properties to use, checkout the SendGrid docs: https://docs.sendgrid.com/for-developers/sending-email/personalizations | <code>[]</code> |
| Attachment Content   | Provide attachment data to send with the email. The 'File Name' field is required when using this input and should reference the data output from a previous action.                                               |                 |
| Disposition          | Specifies how you would like the attachment to be displayed.                                                                                                                                                       |                 |
| File Name            | Provide a name for the file to attach. The 'Attachment Content' field is required when using this input.                                                                                                           |                 |
| File Type            | The MIME type of the content you are attaching.                                                                                                                                                                    |                 |
| Content Id           | Provide the content Id of the attachment. This value is only required when you select 'inline'.                                                                                                                    |                 |
| Multiple Attachments | Provide an array of attachments to send with the email. See [SendGrid API documentation](https://www.twilio.com/docs/sendgrid/api-reference/mail-send/mail-send#request-body) for more information.                |                 |

### Test Webhook {#testwebhook}

Test an Event Webhook by sending a fake event notification.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection | The SendGrid connection to use.            |         |
| Test URL   | The URL where the test event will be sent. |         |

### Toggle Signature Verification {#togglesignatureverification}

Enable or disable signature verification for an Event Webhook.

| Input                         | Comments                                                        | Default |
| ----------------------------- | --------------------------------------------------------------- | ------- |
| Connection                    | The SendGrid connection to use.                                 |         |
| Webhook ID                    | The ID of the webhook.                                          |         |
| Enable Signature Verification | When true, enables signature verification for webhook requests. | true    |

### Update Webhook {#updatewebhook}

Update an existing Event Webhook configuration.

| Input         | Comments                                                         | Default                    |
| ------------- | ---------------------------------------------------------------- | -------------------------- |
| Connection    | The SendGrid connection to use.                                  |                            |
| Webhook ID    | The ID of the webhook.                                           |                            |
| Webhook URL   | The URL where SendGrid will send event data.                     |                            |
| Friendly Name | A friendly name to help differentiate between multiple webhooks. |                            |
| Enabled       | When true, enables the Event Webhook.                            | true                       |
| Events        | The events to track.                                             | <code>["delivered"]</code> |
