---
title: Gmail Connector
sidebar_label: Gmail
description: Manage messages, labels, and drafts in Gmail.
---

![Gmail](./assets/google-gmail.png#connector-icon)
Manage messages, labels, and drafts in Gmail.

## Connections

### OAuth2

OAuth2 Connection

The Gmail component authenticates requests through the Google Cloud Platform (GCP) OAuth 2.0 service.

To create a Gmail OAuth 2.0 app, a Google Developer account is required. Sign up at [console.cloud.google.com](https://console.cloud.google.com/).

#### Prerequisites

- Google Cloud Platform account with billing enabled
- Access to create and configure GCP projects

#### Setup Steps

1. Open the [Gmail API console](https://console.cloud.google.com/marketplace/product/google/gmail.googleapis.com)
2. Click **ENABLE** to enable the Gmail API for the project
3. From the sidebar, select **APIs & Services** → **Credentials**
4. Configure the OAuth consent screen:
   1. Click **CONFIGURE CONSENT SCREEN**
   2. Select **External** as the **User Type** (for customer-facing integrations)
   3. Fill in the required fields:
      - App name (company or product name)
      - Support email
      - App logo (optional but recommended)
      - Application domain
   4. Click **Save and Continue**
   5. On the Scopes page, add required scopes for the integration:
      - `https://mail.google.com/` for full Gmail access, or
      - Specific scopes like `https://www.googleapis.com/auth/gmail.readonly` and `https://www.googleapis.com/auth/gmail.send`
   6. Click **Save and Continue**
   7. Add test users for testing purposes (required before publishing)
   8. Review the summary and click **Back to Dashboard**
5. Create OAuth 2.0 credentials:
   1. Navigate to **Credentials** from the sidebar
   2. Click **+ CREATE CREDENTIALS** → **OAuth Client ID**
   3. Select **Web application** as the **Application type**
   4. Under **Authorized redirect URIs**, add the OAuth callback URL: callback
   5. Click **CREATE**
6. Copy the **Client ID** and **Client Secret** that are generated

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the GCP Console
- For **Scopes**, use one of the following configurations:
  - Full access (default):
    ```
    https://mail.google.com/ https://www.googleapis.com/auth/pubsub
    ```
  - Limited access (example):
    ```
    https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/pubsub
    ```

:::note Pub/Sub Scope Requirement
The `https://www.googleapis.com/auth/pubsub` scope is required for push notification features. Include this scope if using the Push Notification Webhook trigger.
:::

- Refer to [Gmail API Scopes](https://developers.google.com/gmail/api/auth/scopes) for additional scope options

:::info Publishing the OAuth App
The OAuth app will initially only work for test users added during setup. To allow all users to authenticate:

1. Navigate to the **OAuth consent screen** in the GCP Console
2. Click **PUBLISH APP**
3. Follow Google's verification process if prompted (required for production use)

Without publishing, only test users will be able to authorize the integration.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                    | Default                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Scopes        | Space-separated list of OAuth permission scopes. See <a href="https://developers.google.com/gmail/api/auth/scopes">Gmail API Scopes documentation</a> for available scopes. | https://mail.google.com/ https://www.googleapis.com/auth/pubsub |
| Client ID     | The Client ID from the Google Cloud Console. Navigate to APIs & Services > Credentials to find this value.                                                                  |                                                                 |
| Client Secret | The Client Secret from the Google Cloud Console. Navigate to APIs & Services > Credentials to find this value.                                                              |                                                                 |

### Service Account

Service Account Connection

The **Service Account** authentication method allows Gmail actions to run on behalf of Google Workspace users without requiring individual user authorization. This method is ideal for serve to server integrations and automated workflows.

:::info When to Use Service Account
Service accounts are best suited for:

- Server-to-server integrations within a Google Workspace organization
- Automated workflows that need to access multiple users' Gmail accounts
- Scenarios where individual user OAuth consent is not feasible

For customer facing integrations where each end user needs to authorize access, the OAuth 2.0 connection is recommended.
:::

#### Prerequisites

- Google Cloud Platform (GCP) project with billing enabled
- Google Workspace administrator access
- Gmail API enabled in the GCP project

#### Setup Steps

**1. Create a Service Account**

1. Navigate to the [Google Cloud Platform Console](https://console.cloud.google.com/)
2. Go to **IAM & Admin** > **Service Accounts**
3. Click **Create Service Account**
4. Enter a name and description for the service account
5. Click **Create and Continue**
6. Click **Done** (no roles are required for Gmail API access)

**2. Generate a Service Account Key**

1. Click on the newly created service account
2. Navigate to the **Keys** tab
3. Click **Add Key** > **Create new key**
4. Select **JSON** as the key type
5. Click **Create**
6. A JSON file will be downloaded. This key **contains sensitive data** and should be stored securely
7. Take note of the **Client ID** from the JSON file (required for domain wide delegation)

**3. Enable Domain Wide Delegation**

Service accounts require domain wide delegation to access Gmail data. Without this configuration, authentication will fail

1. Login to the [Google Workspace](https://workspace.google.com/) domain's Admin console and navigate to **Main menu** > **Security** > **Access and data control** > **API Controls**
2. In the **Domain wide delegation** pane, select **Manage Domain Wide Delegation**
3. Click **Add new**
4. In the **Client ID** field, enter the service account's Client ID (found in the JSON key file)
5. In the **OAuth scopes (comma delimited)** field, enter the scopes the application needs:
   - For full Gmail access: `https://mail.google.com/`
   - For read only access: `https://www.googleapis.com/auth/gmail.readonly`
   - For multiple scopes: `https://www.googleapis.com/auth/gmail.readonly,https://www.googleapis.com/auth/gmail.send`
6. Click **Authorize**

For more information on Gmail API scopes, refer to the [Gmail API documentation](https://developers.google.com/gmail/api/auth/scopes).

#### Configure the Connection

1. Add a Gmail action to the integration that uses the **Service Account** connection
2. In the **Service Account Key File** field, paste the entire contents of the JSON file downloaded in the setup steps
3. In the **User** field, enter the email address of the Google Workspace user to impersonate (e.g., `support@company.com`)
4. (Optional) In the **Scopes** field, specify custom scopes if needed. The default is `https://mail.google.com/` which provides full Gmail API access

| Input                    | Comments                                                                                                                                                                    | Default                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Service Account Key File | The JSON key file for the Google Service Account. Paste the entire contents of the downloaded JSON file including the BEGIN and END markers.                                |                                                                 |
| User                     | The Google Workspace user email address to impersonate. This must be a valid user in the Workspace domain.                                                                  |                                                                 |
| Scopes                   | Space-separated list of OAuth permission scopes. See <a href="https://developers.google.com/gmail/api/auth/scopes">Gmail API Scopes documentation</a> for available scopes. | https://mail.google.com/ https://www.googleapis.com/auth/pubsub |

## Triggers

### New and Updated Emails

Checks for new and updated email messages on a configured schedule.

| Input                    | Comments                                                                                          | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                    |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default).   |         |
| Label ID                 | The label ID to filter history messages by.                                                       |         |
| Get Message Details      | When true, includes the message details in the response. <b>This will increase response time.</b> | false   |

### Push Notifications

Receive and validate webhook requests from Gmail for manually configured Push Notification subscriptions.

## Actions

### Create Push Notification (Watch Request)

Enables the ability to send update notifications like new messages received.

| Input                    | Comments                                                                                                                                  | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                                                            |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default).                                           |         |
| Topic Name               | The full Pub/Sub topic name in the format: projects/{project-id}/topics/{topic-id}                                                        |         |
| Label ID                 | Gmail labels to filter notifications. System labels (INBOX, SENT, DRAFT, etc.) correspond to pre-defined elements in the Gmail interface. |         |

### Delete Push Notification (Stop Mailbox Updates)

Calls a stop notification.

| Input                    | Comments                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                  |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default). |         |

### Get Current User

Get metadata about the authenticated user

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Connection to use for Gmail Authorization. |         |

### Get Event History

Fetch events that have occurred in the mailbox since the specified startHistoryId.

| Input                    | Comments                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                  |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default). |         |
| History ID               | The history ID to start retrieving history records from.                                        |         |
| Page Token               | Page token from the previous response when looping through paginated history results.           |         |
| Fetch All                | When true, fetches all pages of results using pagination.                                       | false   |
| Max Results              | The maximum number of results to return per page.                                               |         |

### Get Label by Name

Get a label (including ID) by its name

| Input                    | Comments                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                  |         |
| Label Name               |                                                                                                 |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default). |         |

### Get Message

Get a message by ID

| Input                    | Comments                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                  |         |
| Message ID               | The unique identifier of the Gmail message.                                                     |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default). |         |

### List Labels

List all labels within this account

| Input                    | Comments                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                  |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default). |         |

### List Messages

Get a list of messages

| Input                    | Comments                                                                                           | Default |
| ------------------------ | -------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                     |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default).    |         |
| Page Token               | Page token from the previous response when looping through paginated results.                      |         |
| Fetch All                | When true, fetches all pages of results using pagination.                                          | false   |
| Query String             | Filter messages using Gmail search syntax. Supports the same query format as the Gmail search box. |         |
| Max Results              | The maximum number of results to return per page.                                                  |         |
| Labels                   | Filter messages by Gmail label IDs.                                                                |         |
| Add Metadata             | When true, includes additional metadata for each message. This will increase response time.        | false   |

### Raw Request

Send raw HTTP request to Google Gmail

| Input                   | Comments                                                                                                                                                                                                                                                                       | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Connection to use for Gmail Authorization.                                                                                                                                                                                                                                 |         |
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

### Send Message

Send a new message

| Input                    | Comments                                                                                                                                                                                                                                                                                                             | Default |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                                                                                                                                                                                                                                       |         |
| To                       | Recipient email addresses.                                                                                                                                                                                                                                                                                           |         |
| From                     | The sender email address or alias. This is the email address that will appear in the From field.                                                                                                                                                                                                                     |         |
| CC                       | Carbon copy (CC) email addresses.                                                                                                                                                                                                                                                                                    |         |
| BCC                      | Blind carbon copy (BCC) email addresses.                                                                                                                                                                                                                                                                             |         |
| Subject                  | The subject line of the email.                                                                                                                                                                                                                                                                                       |         |
| Plain Text Body          | Plain text version of the email body. Used as fallback for email clients that do not support HTML.                                                                                                                                                                                                                   |         |
| HTML Body                | HTML version of the email body. For email clients that support HTML.                                                                                                                                                                                                                                                 |         |
| Attachments              | Email attachments as key-value pairs. The key is the file name (e.g., 'document.pdf') and the value is the file data.                                                                                                                                                                                                |         |
| Dynamic Attachments      | An array of objects with 'key' and 'value' properties, where 'key' is the file name and 'value' is the binary file data. Typically used as a reference from a previous step. Ex. [{key: "my-attachment.pdf", value: <BINARY FILE DATA TO ATTACH>},{key: "another-attachment.xlsx", value: <BINARY EXCEL FILE DATA>}] |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default).                                                                                                                                                                                                                      |         |

### Trash Message

Send a message to the trash

| Input                    | Comments                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                  |         |
| Message ID               | The unique identifier of the Gmail message.                                                     |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default). |         |

### Untrash Message

Remove a message from the trash

| Input                    | Comments                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                  |         |
| Message ID               | The unique identifier of the Gmail message.                                                     |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default). |         |

### Update Message Labels

Add or remove labels from a message

| Input                    | Comments                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Connection to use for Gmail Authorization.                                                  |         |
| Message ID               | The unique identifier of the Gmail message.                                                     |         |
| Gmail User ID (optional) | The user ID or email address to query. Use 'me' for the currently authenticated user (default). |         |
| Labels to Add            | Gmail labels to add to the message.                                                             |         |
| Labels to Remove         | Gmail labels to remove from the message.                                                        |         |
