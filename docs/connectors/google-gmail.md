---
title: Gmail Connector
sidebar_label: Gmail
description: Manage messages, labels, and drafts in Gmail.
---

![Gmail](./assets/google-gmail.png#connector-icon)
Manage messages, labels, and drafts in Gmail.

## Connections

### OAuth 2.0 {#oauth2}

OAuth2 Connection

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                    | Default                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Scopes        | Space-separated list of OAuth permission scopes. See <a href="https://developers.google.com/gmail/api/auth/scopes">Gmail API Scopes documentation</a> for available scopes. | https://mail.google.com/ https://www.googleapis.com/auth/pubsub |
| Client ID     | The Client ID from the Google Cloud Console. Navigate to APIs & Services > Credentials to find this value.                                                                  |                                                                 |
| Client Secret | The Client Secret from the Google Cloud Console. Navigate to APIs & Services > Credentials to find this value.                                                              |                                                                 |

### Service Account {#gmailserviceaccount}

Service Account Connection

| Input                    | Comments                                                                                                                                                                    | Default                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Service Account Key File | The JSON key file for the Google Service Account. Paste the entire contents of the downloaded JSON file including the BEGIN and END markers.                                |                                                                 |
| User                     | The Google Workspace user email address to impersonate. This must be a valid user in the Workspace domain.                                                                  |                                                                 |
| Scopes                   | Space-separated list of OAuth permission scopes. See <a href="https://developers.google.com/gmail/api/auth/scopes">Gmail API Scopes documentation</a> for available scopes. | https://mail.google.com/ https://www.googleapis.com/auth/pubsub |

## Triggers

### Managed Push Notification Events {#managedpushnotificationevents}

Receive mailbox event notifications from Gmail. Automatically creates and manages a Push Notifications subscription for mailbox events when the instance is deployed, and removes the subscription when the instance is deleted.

| Input           | Comments                                                                                                                                                                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The connection to use for Gmail authorization.                                                                                                                                                                                                                |         |
| Project ID      | The Google Cloud project ID containing the Pub/Sub resources.                                                                                                                                                                                                 |         |
| Topic ID        | The ID of the Pub/Sub topic to be created. Must be between 3 and 15 characters long, start with a letter, and contain only letters, numbers, dashes (-), periods (.), underscores (\_), tildes (~), percents (%) or plus signs (+). Cannot start with 'goog'. |         |
| Subscription ID | The ID of the subscription to be created. Must be between 3 and 15 characters long, start with a letter, and contain only letters, numbers, dashes (-), periods (.), underscores (\_), tildes (~), percents (%) or plus signs (+). Cannot start with 'goog'.  |         |
| Label ID        | Gmail labels to filter notifications. System labels (INBOX, SENT, DRAFT, etc.) correspond to pre-defined elements in the Gmail interface.                                                                                                                     |         |
| Gmail User ID   | The user ID or email address to query. Use 'me' for the currently authenticated user (default).                                                                                                                                                               | me      |

### Manual Push Notifications {#pushnotificationwebhook}

Receive and validate webhook requests from Gmail for manually configured Push Notification subscriptions.

### New and Updated Emails {#pollchangestrigger}

Checks for new and updated email messages on a configured schedule.

| Input               | Comments                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The connection to use for Gmail authorization.                                                    |         |
| Gmail User ID       | The user ID or email address to query. Use 'me' for the currently authenticated user (default).   | me      |
| Label ID            | The label ID to filter history messages by.                                                       |         |
| Get Message Details | When true, includes the message details in the response. <b>This will increase response time.</b> | false   |

## Actions

### Create Push Notification (Watch Request) {#createpushnotification}

Enables the ability to send update notifications like new messages received.

| Input         | Comments                                                                                                                                  | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The connection to use for Gmail authorization.                                                                                            |         |
| Gmail User ID | The user ID or email address to query. Use 'me' for the currently authenticated user (default).                                           | me      |
| Topic Name    | The full Pub/Sub topic name in the format: projects/{project-id}/topics/{topic-id}                                                        |         |
| Label ID      | Gmail labels to filter notifications. System labels (INBOX, SENT, DRAFT, etc.) correspond to pre-defined elements in the Gmail interface. |         |

### Delete Push Notification (Stop Mailbox Updates) {#deletepushnotification}

Calls a stop notification.

| Input         | Comments                                                                                        | Default |
| ------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection    | The connection to use for Gmail authorization.                                                  |         |
| Gmail User ID | The user ID or email address to query. Use 'me' for the currently authenticated user (default). | me      |

### Get Current User {#getcurrentuser}

Get metadata about the authenticated user

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The connection to use for Gmail authorization. |         |

### Get Event History {#geteventhistory}

Fetch events that have occurred in the mailbox since the specified startHistoryId.

| Input         | Comments                                                                                        | Default |
| ------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection    | The connection to use for Gmail authorization.                                                  |         |
| Gmail User ID | The user ID or email address to query. Use 'me' for the currently authenticated user (default). | me      |
| History ID    | The history ID to start retrieving history records from.                                        |         |
| Page Token    | Page token from the previous response when looping through paginated history results.           |         |
| Fetch All     | When true, fetches all pages of results using pagination.                                       | false   |
| Max Results   | The maximum number of results to return per page.                                               |         |

### Get Label by Name {#getlabelbyname}

Get a label (including ID) by its name

| Input         | Comments                                                                                        | Default |
| ------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection    | The connection to use for Gmail authorization.                                                  |         |
| Label Name    |                                                                                                 |         |
| Gmail User ID | The user ID or email address to query. Use 'me' for the currently authenticated user (default). | me      |

### Get Message {#getmessagebyid}

Get a message by ID

| Input         | Comments                                                                                        | Default |
| ------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection    | The connection to use for Gmail authorization.                                                  |         |
| Message ID    | The unique identifier of the Gmail message.                                                     |         |
| Gmail User ID | The user ID or email address to query. Use 'me' for the currently authenticated user (default). | me      |

### List Labels {#listlabels}

List all labels within this account

| Input         | Comments                                                                                        | Default |
| ------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection    | The connection to use for Gmail authorization.                                                  |         |
| Gmail User ID | The user ID or email address to query. Use 'me' for the currently authenticated user (default). | me      |

### List Messages {#listmessages}

Get a list of messages

| Input         | Comments                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The connection to use for Gmail authorization.                                                     |         |
| Gmail User ID | The user ID or email address to query. Use 'me' for the currently authenticated user (default).    | me      |
| Page Token    | Page token from the previous response when looping through paginated results.                      |         |
| Fetch All     | When true, fetches all pages of results using pagination.                                          | false   |
| Query String  | Filter messages using Gmail search syntax. Supports the same query format as the Gmail search box. |         |
| Max Results   | The maximum number of results to return per page.                                                  |         |
| Labels        | Filter messages by Gmail label IDs.                                                                |         |
| Add Metadata  | When true, includes additional metadata for each message. This will increase response time.        | false   |

### Raw Request {#rawrequest}

Send raw HTTP request to Google Gmail

| Input                   | Comments                                                                                                                                                                                                                                                                       | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The connection to use for Gmail authorization.                                                                                                                                                                                                                                 |         |
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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                            | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                               | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                            | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                  | false   |

### Send Message {#sendmessage}

Send a new message

| Input               | Comments                                                                                                                                                                                                                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The connection to use for Gmail authorization.                                                                                                                                                                                                                                                                       |         |
| To                  | Recipient email addresses.                                                                                                                                                                                                                                                                                           |         |
| From                | The sender email address or alias. This is the email address that will appear in the From field.                                                                                                                                                                                                                     |         |
| CC                  | Carbon copy (CC) email addresses.                                                                                                                                                                                                                                                                                    |         |
| BCC                 | Blind carbon copy (BCC) email addresses.                                                                                                                                                                                                                                                                             |         |
| Subject             | The subject line of the email.                                                                                                                                                                                                                                                                                       |         |
| Plain Text Body     | Plain text version of the email body. Used as fallback for email clients that do not support HTML.                                                                                                                                                                                                                   |         |
| HTML Body           | HTML version of the email body. For email clients that support HTML.                                                                                                                                                                                                                                                 |         |
| Attachments         | Email attachments as key-value pairs. The key is the file name (e.g., 'document.pdf') and the value is the file data.                                                                                                                                                                                                |         |
| Dynamic Attachments | An array of objects with 'key' and 'value' properties, where 'key' is the file name and 'value' is the binary file data. Typically used as a reference from a previous step. Ex. [{key: "my-attachment.pdf", value: <BINARY FILE DATA TO ATTACH>},{key: "another-attachment.xlsx", value: <BINARY EXCEL FILE DATA>}] |         |
| Gmail User ID       | The user ID or email address to query. Use 'me' for the currently authenticated user (default).                                                                                                                                                                                                                      | me      |

### Trash Message {#trashmessagebyid}

Send a message to the trash

| Input         | Comments                                                                                        | Default |
| ------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection    | The connection to use for Gmail authorization.                                                  |         |
| Message ID    | The unique identifier of the Gmail message.                                                     |         |
| Gmail User ID | The user ID or email address to query. Use 'me' for the currently authenticated user (default). | me      |

### Untrash Message {#untrashmessagebyid}

Remove a message from the trash

| Input         | Comments                                                                                        | Default |
| ------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection    | The connection to use for Gmail authorization.                                                  |         |
| Message ID    | The unique identifier of the Gmail message.                                                     |         |
| Gmail User ID | The user ID or email address to query. Use 'me' for the currently authenticated user (default). | me      |

### Update Message Labels {#updatelabels}

Add or remove labels from a message

| Input            | Comments                                                                                        | Default |
| ---------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection       | The connection to use for Gmail authorization.                                                  |         |
| Message ID       | The unique identifier of the Gmail message.                                                     |         |
| Gmail User ID    | The user ID or email address to query. Use 'me' for the currently authenticated user (default). | me      |
| Labels to Add    | Gmail labels to add to the message.                                                             |         |
| Labels to Remove | Gmail labels to remove from the message.                                                        |         |
