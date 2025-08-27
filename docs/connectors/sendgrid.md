---
title: SendGrid Connector
sidebar_label: SendGrid
description: Send emails through SendGrid
---

![SendGrid](./assets/sendgrid.png#connector-icon)
Send emails through SendGrid

## Connections

### SendGrid API Key

Authenticate requests to SendGrid using values obtained from the SendGrid Developer Console.

Information about getting started and creating API keys with [SendGrid](https://sendgrid.com/docs/for-developers/sending-email/api-getting-started/) can be found on their developer documentation site.

| Input   | Comments                                                 | Default |
| ------- | -------------------------------------------------------- | ------- |
| API Key | Provide the API Key obtained from the developer console. |         |

## Triggers

### Webhook

Receive and validate webhook requests from SendGrid for webhooks you configure.

## Actions

### Add or Update Contact

Add or update a contact. This can also be used to add contacts to a list.

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                               |         |
| List IDs   | Comma-separated IDs of the lists to add the contact to. These lists must already exist.       |         |
| Contacts   | An array of contact objects to add or update. See SendGrid docs for contact object structure. |         |

### Create List

Create a new contact list

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection |                                 |         |
| List Name  | The name of the list to create. |         |

### Get All Field Definitions

Retrieve all custom field definitions with pagination support

| Input      | Comments                                                 | Default |
| ---------- | -------------------------------------------------------- | ------- |
| Connection |                                                          |         |
| Page Size  | Number of results to return per page (max 100).          |         |
| Page Token | Token for fetching the next or previous page of results. |         |

### Get All Lists

Retrieve all contact lists with pagination support

| Input      | Comments                                                 | Default |
| ---------- | -------------------------------------------------------- | ------- |
| Connection |                                                          |         |
| Page Size  | Number of results to return per page (max 100).          |         |
| Page Token | Token for fetching the next or previous page of results. |         |

### Get Contacts by Emails

Retrieve contacts by their email addresses.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection |                                                |         |
| Emails     | Comma-separated email addresses to search for. |         |

### Get Import Status

Check the status of a contact import job

| Input      | Comments                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                              |         |
| Job ID     | The job ID returned from Import Contacts, Add/Update Contact, or Delete Contacts operations. |         |

### Get List by ID

Retrieve a specific contact list by its ID

| Input                   | Comments                                                 | Default |
| ----------------------- | -------------------------------------------------------- | ------- |
| Connection              |                                                          |         |
| List ID                 | The ID of the list to retrieve.                          |         |
| Include Sample Contacts | Whether to include a sample of contacts in the response. | false   |

### Initiate Contacts Import

Initiates a CSV contact import. Returns a URL and headers for uploading the CSV file.

| Input          | Comments                                                                                                                                      | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                               |         |
| List IDs       | Comma-separated IDs of the lists to add the contact to. These lists must already exist.                                                       |         |
| Field Mappings | An array of field definition IDs to map the uploaded CSV columns. Use null to skip a column. Get IDs from 'Get All Field Definitions' action. |         |
| Is Compressed  | Set to true if the CSV file will be gzip-compressed.                                                                                          | false   |

### Raw Request

Send raw HTTP request to SendGrid

| Input                   | Comments                                                                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                               |         |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                          | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                           | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.              | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                 | false   |

### Send Email

Send a single email to one or more recipients

| Input                 | Comments                                                                                                                                                                                                           | Default         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection            |                                                                                                                                                                                                                    |                 |
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
| Multiple Attachments  | Provide an array of attachments to send with the email. See https://www.twilio.com/docs/sendgrid/api-reference/mail-send/mail-send#request-body for more information.                                              |                 |
| Subscription Tracking | When set to true, inserts a subscription management link at the bottom of the text and HTML bodies of your email                                                                                                   | false           |

### Send Multiple Emails

Send a separate email to each recipient

| Input                | Comments                                                                                                                                                                                                           | Default         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection           |                                                                                                                                                                                                                    |                 |
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
| Multiple Attachments | Provide an array of attachments to send with the email. See https://www.twilio.com/docs/sendgrid/api-reference/mail-send/mail-send#request-body for more information.                                              |                 |
