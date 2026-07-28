---
title: SendGrid Connector
sidebar_label: SendGrid
description: Manage email delivery and contacts in SendGrid.
---

![SendGrid](./assets/sendgrid.png#connector-icon)
[SendGrid](https://www.twilio.com/en-us/sendgrid) is a cloud-based email delivery platform owned by Twilio.
This component allows sending transactional and marketing emails, managing contacts, and tracking email analytics.

## API Documentation

This component was built using the [SendGrid API v3](https://www.twilio.com/docs/sendgrid/api-reference).

## Connections

### API Key {#apikey}

Authenticate using an API key.

To authenticate with SendGrid, an API key is required.

#### Prerequisites

- A SendGrid account

#### Setup Steps

To generate an API key:

1. Log in to the [SendGrid Console](https://app.sendgrid.com/)
2. Navigate to **Settings** > **API Keys**
3. Click **Create API Key**
4. Enter a name for the API key
5. Select the appropriate access level:
   - **Full Access** - Grants all permissions (recommended for integration use)
   - **Restricted Access** - Grants specific permissions based on requirements
6. Click **Create & View**
7. Copy the API key value (it will only be displayed once)

For more information about creating API keys, refer to the [SendGrid API Keys documentation](https://www.twilio.com/docs/sendgrid/ui/account-and-settings/api-keys).

#### Configure the Connection

- Enter the API key into the **API Key** field in the connection configuration

:::warning[API Key Security]
The API key is only displayed once upon creation. Store it securely. If the key is lost, a new one must be generated.
:::

| Input   | Comments                                                                                                                                                               | Default |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| API Key | The SendGrid API key used for authentication. Generate one in Settings > API Keys. [Learn more](https://www.twilio.com/docs/sendgrid/ui/account-and-settings/api-keys) |         |

## Triggers

### Managed Webhook Events {#eventwebhook}

Receive event webhook notifications from SendGrid. Automatically creates and manages a webhook subscription when the instance is deployed, and removes the subscription when the instance is deleted.

| Input         | Comments                                                                                              | Default                    |
| ------------- | ----------------------------------------------------------------------------------------------------- | -------------------------- |
| Connection    | The SendGrid connection to use.                                                                       |                            |
| Friendly Name | A friendly name to help differentiate between multiple webhooks.                                      |                            |
| Events        | The email event types to subscribe to. Selected events trigger webhook notifications when they occur. | <code>["delivered"]</code> |

### New and Updated Messages {#pollchangestrigger}

Checks for new and updated messages in SendGrid on a configured schedule.

| Input                | Comments                                                                                                                                                                                                                                                                  | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The SendGrid connection to use.                                                                                                                                                                                                                                           |         |
| Show New Records     | When true, newly created records (a `processed` event observed within the polling window) are included on the `created` branch. SendGrid surfaces a single `last_event_time` per message, so the `created` vs `updated` split is best-effort based on the event timeline. | true    |
| Show Updated Records | When true, records whose `last_event_time` falls within the polling window are included on the `updated` branch.                                                                                                                                                          | true    |

### Webhook {#webhook}

Receives and validates webhook requests from SendGrid for manually configured webhook subscriptions.

## Actions

### Add or Update Contact {#addorupdatecontact}

Adds or updates a contact. Can also be used to add contacts to a list.

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                                                               |         |
| List IDs   | Comma-separated IDs of the lists to add the contact to. These lists must already exist.       |         |
| Contacts   | An array of contact objects to add or update. See SendGrid docs for contact object structure. |         |

### Create List {#createlist}

Creates a new contact list.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection | The SendGrid connection to use.            |         |
| List Name  | The display name for the new contact list. |         |

### Create Webhook {#createwebhook}

Creates a new Event Webhook configuration to receive email event data.

| Input         | Comments                                                                                              | Default                    |
| ------------- | ----------------------------------------------------------------------------------------------------- | -------------------------- |
| Connection    | The SendGrid connection to use.                                                                       |                            |
| Webhook URL   | The URL where SendGrid will send event data.                                                          |                            |
| Friendly Name | A friendly name to help differentiate between multiple webhooks.                                      |                            |
| Enabled       | When true, enables the Event Webhook.                                                                 | true                       |
| Events        | The email event types to subscribe to. Selected events trigger webhook notifications when they occur. | <code>["delivered"]</code> |

### Delete Webhook {#deletewebhook}

Deletes an Event Webhook configuration.

| Input      | Comments                                                   | Default |
| ---------- | ---------------------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                            |         |
| Webhook ID | The unique identifier for the Event Webhook configuration. |         |

### Get All Field Definitions {#getallfielddefinitions}

Retrieves all custom field definitions with pagination support.

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                           |         |
| Fetch All  | When true, fetches all pages of results using pagination. | false   |
| Page Size  | Number of results to return per page (max 100).           |         |
| Page Token | Token for fetching the next or previous page of results.  |         |

### Get All Lists {#getalllists}

Retrieves all contact lists with pagination support.

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                           |         |
| Fetch All  | When true, fetches all pages of results using pagination. | false   |
| Page Size  | Number of results to return per page (max 100).           |         |
| Page Token | Token for fetching the next or previous page of results.  |         |

### Get Contacts by Emails {#getcontactsbyemails}

Retrieves contacts by their email addresses.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                |         |
| Emails     | Comma-separated email addresses to search for. |         |

### Get Import Status {#getimportstatus}

Checks the status of a contact import job.

| Input      | Comments                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                                                              |         |
| Job ID     | The job ID returned from Import Contacts, Add/Update Contact, or Delete Contacts operations. |         |

### Get List by ID {#getlistbyid}

Retrieves a specific contact list by its ID.

| Input                   | Comments                                                  | Default |
| ----------------------- | --------------------------------------------------------- | ------- |
| Connection              | The SendGrid connection to use.                           |         |
| List ID                 | The unique identifier for the contact list to retrieve.   |         |
| Include Sample Contacts | When true, includes a sample of contacts in the response. | false   |

### Get Webhook {#getwebhook}

Retrieves an Event Webhook configuration by ID.

| Input      | Comments                                                   | Default |
| ---------- | ---------------------------------------------------------- | ------- |
| Connection | The SendGrid connection to use.                            |         |
| Webhook ID | The unique identifier for the Event Webhook configuration. |         |

### Initiate Contacts Import {#initiatecontactsimport}

Initiates a CSV contact import. Returns a URL and headers for uploading the CSV file.

| Input          | Comments                                                                                                                                      | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The SendGrid connection to use.                                                                                                               |         |
| List IDs       | Comma-separated IDs of the lists to add the contact to. These lists must already exist.                                                       |         |
| Field Mappings | An array of field definition IDs to map the uploaded CSV columns. Use null to skip a column. Get IDs from 'Get All Field Definitions' action. |         |
| Is Compressed  | When true, indicates that the CSV file will be gzip-compressed.                                                                               | false   |

### List Webhooks {#listwebhooks}

Lists all Event Webhook configurations.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The SendGrid connection to use. |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to SendGrid.

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

Sends a single email to one or more recipients.

| Input                 | Comments                                                                                                                                                                                                                                             | Default         |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection            | The SendGrid connection to use.                                                                                                                                                                                                                      |                 |
| To                    | The recipient's email address, or a comma-separated list of recipient email addresses.                                                                                                                                                               |                 |
| From Email            | The verified sender email address that appears in the 'From' field. Must be a verified sender in SendGrid.                                                                                                                                           |                 |
| Subject               | The subject line displayed in the recipient's inbox. Supports UTF-8 encoding.                                                                                                                                                                        |                 |
| Text                  | The plain-text content of the email, used as a fallback when HTML is not supported by the recipient's email client.                                                                                                                                  |                 |
| CC                    | The recipient's email address, or a comma-separated list of recipient email addresses to CC.                                                                                                                                                         |                 |
| BCC                   | The recipient's email address, or a comma-separated list of recipient email addresses to BCC.                                                                                                                                                        |                 |
| From Name             | The display name that appears alongside the sender email address in the recipient's inbox.                                                                                                                                                           |                 |
| Reply To Email        | The email address recipients see when they reply. Only used when different from the sender address.                                                                                                                                                  |                 |
| Reply To Name         | Name to reply to. This field is only required when you provide a value for Reply To Email.                                                                                                                                                           |                 |
| HTML                  | The HTML-formatted content of the email. When provided, takes priority over the plain-text body in clients that support HTML rendering.                                                                                                              |                 |
| Personalizations      | Allows overwriting multiple properties of the email such as recipients, subject, and send time per recipient. See [SendGrid personalizations docs](https://www.twilio.com/docs/sendgrid/for-developers/sending-email/personalizations) for examples. | <code>[]</code> |
| Attachment Content    | Provide attachment data to send with the email. The 'File Name' field is required when using this input and should reference the data output from a previous action.                                                                                 |                 |
| Disposition           | Specifies how the attachment is displayed. Use 'inline' for embedded content or 'attachment' for a downloadable file.                                                                                                                                |                 |
| File Name             | Provide a name for the file to attach. The 'Attachment Content' field is required when using this input.                                                                                                                                             |                 |
| File Type             | The MIME type of the content you are attaching.                                                                                                                                                                                                      |                 |
| Content ID            | Provide the content Id of the attachment. This value is only required when you select 'inline'.                                                                                                                                                      |                 |
| Multiple Attachments  | Provide an array of attachments to send with the email. See [SendGrid API documentation](https://www.twilio.com/docs/sendgrid/api-reference/mail-send/mail-send#request-body) for more information.                                                  |                 |
| Subscription Tracking | When true, inserts a subscription management link at the bottom of the text and HTML bodies of your email.                                                                                                                                           | false           |

### Send Email with Dynamic Template {#sendemailwithdynamictemplate}

Sends an email using a SendGrid dynamic template with complex nested JSON data.

| Input                 | Comments                                                                                                                                                                                                                                    | Default         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection            | The SendGrid connection to use.                                                                                                                                                                                                             |                 |
| Template ID           | The unique identifier for the dynamic template. Found in the SendGrid dashboard under Email API > Dynamic Templates.                                                                                                                        |                 |
| Dynamic Template Data | The data to be used for the dynamic template. Supports complex nested JSON structures including arrays and objects for order confirmations, customer data, and more.                                                                        |                 |
| From Email            | The verified sender email address that appears in the 'From' field. Must be a verified sender in SendGrid.                                                                                                                                  |                 |
| To                    | The recipient's email address, or a comma-separated list of recipient email addresses. Required if 'Personalizations' is not provided. Will be ignored if 'Personalizations' is provided.                                                   |                 |
| From Name             | The display name that appears alongside the sender email address in the recipient's inbox.                                                                                                                                                  |                 |
| CC                    | The recipient's email address, or a comma-separated list of recipient email addresses to CC. Will be ignored if 'Personalizations' is provided.                                                                                             |                 |
| BCC                   | The recipient's email address, or a comma-separated list of recipient email addresses to BCC. Will be ignored if 'Personalizations' is provided.                                                                                            |                 |
| Reply To Email        | The email address recipients see when they reply. Only used when different from the sender address.                                                                                                                                         |                 |
| Reply To Name         | Name to reply to. This field is only required when you provide a value for Reply To Email.                                                                                                                                                  |                 |
| Personalizations      | Advanced: Provide a personalizations array to send different variations to different recipients. When provided, this will override 'To', 'CC', and 'BCC' inputs. Each personalization will automatically include the dynamic template data. | <code>[]</code> |

### Send Multiple Emails {#sendmultipleemails}

Sends a separate email to each recipient.

| Input                | Comments                                                                                                                                                                                                                                             | Default         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection           | The SendGrid connection to use.                                                                                                                                                                                                                      |                 |
| To                   | The recipient's email address, or a comma-separated list of recipient email addresses.                                                                                                                                                               |                 |
| From Email           | The verified sender email address that appears in the 'From' field. Must be a verified sender in SendGrid.                                                                                                                                           |                 |
| Subject              | The subject line displayed in the recipient's inbox. Supports UTF-8 encoding.                                                                                                                                                                        |                 |
| Text                 | The plain-text content of the email, used as a fallback when HTML is not supported by the recipient's email client.                                                                                                                                  |                 |
| CC                   | The recipient's email address, or a comma-separated list of recipient email addresses to CC.                                                                                                                                                         |                 |
| BCC                  | The recipient's email address, or a comma-separated list of recipient email addresses to BCC.                                                                                                                                                        |                 |
| From Name            | The display name that appears alongside the sender email address in the recipient's inbox.                                                                                                                                                           |                 |
| Reply To Email       | The email address recipients see when they reply. Only used when different from the sender address.                                                                                                                                                  |                 |
| Reply To Name        | Name to reply to. This field is only required when you provide a value for Reply To Email.                                                                                                                                                           |                 |
| HTML                 | The HTML-formatted content of the email. When provided, takes priority over the plain-text body in clients that support HTML rendering.                                                                                                              |                 |
| Personalizations     | Allows overwriting multiple properties of the email such as recipients, subject, and send time per recipient. See [SendGrid personalizations docs](https://www.twilio.com/docs/sendgrid/for-developers/sending-email/personalizations) for examples. | <code>[]</code> |
| Attachment Content   | Provide attachment data to send with the email. The 'File Name' field is required when using this input and should reference the data output from a previous action.                                                                                 |                 |
| Disposition          | Specifies how the attachment is displayed. Use 'inline' for embedded content or 'attachment' for a downloadable file.                                                                                                                                |                 |
| File Name            | Provide a name for the file to attach. The 'Attachment Content' field is required when using this input.                                                                                                                                             |                 |
| File Type            | The MIME type of the content you are attaching.                                                                                                                                                                                                      |                 |
| Content ID           | Provide the content Id of the attachment. This value is only required when you select 'inline'.                                                                                                                                                      |                 |
| Multiple Attachments | Provide an array of attachments to send with the email. See [SendGrid API documentation](https://www.twilio.com/docs/sendgrid/api-reference/mail-send/mail-send#request-body) for more information.                                                  |                 |

### Test Webhook {#testwebhook}

Tests an Event Webhook by sending a fake event notification.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection | The SendGrid connection to use.            |         |
| Test URL   | The URL where the test event will be sent. |         |

### Toggle Signature Verification {#togglesignatureverification}

Enables or disables signature verification for an Event Webhook.

| Input                         | Comments                                                        | Default |
| ----------------------------- | --------------------------------------------------------------- | ------- |
| Connection                    | The SendGrid connection to use.                                 |         |
| Webhook ID                    | The unique identifier for the Event Webhook configuration.      |         |
| Enable Signature Verification | When true, enables signature verification for webhook requests. | true    |

### Update Webhook {#updatewebhook}

Updates an existing Event Webhook configuration.

| Input         | Comments                                                                                              | Default                    |
| ------------- | ----------------------------------------------------------------------------------------------------- | -------------------------- |
| Connection    | The SendGrid connection to use.                                                                       |                            |
| Webhook ID    | The unique identifier for the Event Webhook configuration.                                            |                            |
| Webhook URL   | The URL where SendGrid will send event data.                                                          |                            |
| Friendly Name | A friendly name to help differentiate between multiple webhooks.                                      |                            |
| Enabled       | When true, enables the Event Webhook.                                                                 | true                       |
| Events        | The email event types to subscribe to. Selected events trigger webhook notifications when they occur. | <code>["delivered"]</code> |
