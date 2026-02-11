---
title: Box Connector
sidebar_label: Box
description: Manage files stored in Box
---

![Box](./assets/box.png#connector-icon)
[Box](https://www.box.com/) is a file sharing platform that allows teams to collaborate and share files with one another.
The Box component allows you to create, list, fetch, move, or delete files and folders in a customer's Box account.

## API Documentation

This component was built using the [Box REST API](https://developer.box.com/reference/)

## Connections

### Box Developer Token {#apikey}

Box Developer Token

A **Developer Token** is a short-lived (60-minute) token that can be used for testing purposes. Developer tokens allow access to the Box API for a personal Box account only.

:::note Production Authentication
When an integration is ready for production, an [OAuth 2.0](#oauth2) connection is required to authenticate customer Box accounts. Testing can also be performed with OAuth 2.0.
:::

#### Prerequisites

- A [Box account](https://www.box.com/)
- Access to the [Box Developer Console](https://app.box.com/developers/console)

#### Setup Steps

To generate a developer token:

1. Navigate to the [Box Developer Console](https://app.box.com/developers/console)
2. Select **Create New App**
3. Choose **Custom App** and click **Next**
4. Select **User Authentication (OAuth 2.0)** and click **Next**
5. Enter an app name and click **Create App**
6. In the app's **Configuration** tab, scroll to the **Developer Token** section
7. Click **Generate Developer Token**
8. Copy the generated token (valid for 60 minutes)

For more information, refer to the [Box Developer Token documentation](https://developer.box.com/guides/authentication/tokens/developer-tokens/).

#### Configure the Connection

- Enter the developer token value into the **Developer Token** field of the connection configuration

:::warning Token Expiration
Developer tokens expire after 60 minutes. Generate a new token if authentication fails due to expiration.
:::

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Developer Token | A short-lived developer token for testing purposes. Obtain from [Box Developer Console](https://app.box.com/developers/console). |         |

### Box OAuth 2.0 Connection {#oauth2}

Box OAuth 2.0 Connection

To connect to Box using OAuth 2.0, create a Box OAuth 2.0 app to authorize the integration to access customer Box accounts.

Refer to the [Box OAuth 2.0 setup guide](https://developer.box.com/guides/authentication/oauth2/oauth2-setup/) for detailed information.

#### Prerequisites

- A [Box account](https://www.box.com/)
- Access to the [Box Developer Console](https://app.box.com/developers/console)

#### Setup Steps

1. Navigate to the [Box Developer Console](https://app.box.com/developers/console)
2. Click **Create New App**
3. Select **Custom App** and click **Next**
4. Select **User Authentication (OAuth 2.0)** and click **Next**
5. Enter an app name and click **Create App**
6. In the app's **Configuration** tab, configure the OAuth settings:
   - Copy the **Client ID** and **Client Secret** values
   - Under **OAuth 2.0 Redirect URI**, add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - Under **Application Scopes**, select the appropriate permissions:
     - For full access, select **Write all files and folders stored in Box**
     - For read-only access, select **Read all files and folders stored in Box**
     - Refer to [Box scopes documentation](https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/) for more granular permissions
   - Leave **CORS Domains** blank
7. Click **Save Changes**

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the Box app configuration
- For **Scopes**, either:
  - Leave blank to use the **Application Scopes** configured in the Box app
  - Enter specific scopes as a space-separated list (e.g., `root_readwrite manage_webhook`)
  - Refer to [Box scopes documentation](https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/) for available scopes

:::note Box Enterprise Features
Some Box features require an Enterprise account. Ensure the Box account has appropriate subscription level for the required functionality.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                       | Default                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| Scopes        | A space-delimited set of one or more scopes. Leave blank to use your app's configured default scopes. See [Box OAuth Scopes](https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/) for available options. | root_readwrite manage_webhook |
| Client ID     | The OAuth 2.0 client ID from your Box app configuration. Obtain from [Box Developer Console](https://app.box.com/developers/console).                                                                                          |                               |
| Client Secret | The OAuth 2.0 client secret from your Box app configuration. Obtain from [Box Developer Console](https://app.box.com/developers/console).                                                                                      |                               |

## Triggers

### Managed Webhook {#managedwebhook}

Receive and validate webhook requests from Box. Automatically creates and manages a webhook subscription when the instance is deployed, and removes the subscription when the instance is deleted.

| Input                   | Comments                                                                                                                                               | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Box connection to use.                                                                                                                             |         |
| Target ID               | The unique identifier of the file or folder that will trigger the webhook.                                                                             |         |
| Target Type             | The type of item that will trigger the webhook (file or folder).                                                                                       |         |
| Trigger Type            | Select which event types will trigger this webhook. See [Box Events](https://developer.box.com/guides/webhooks/v2/events/) for available options.      |         |
| Primary Signature Key   | A signature key used to validate webhook requests. See [Box Webhook Signatures](https://developer.box.com/guides/webhooks/handle/verify/) for details. |         |
| Secondary Signature Key | A signature key used to validate webhook requests. See [Box Webhook Signatures](https://developer.box.com/guides/webhooks/handle/verify/) for details. |         |

### Manual Webhook {#webhook}

Receive and validate webhook requests from Box for manually configured webhook subscriptions.

### New and Updated Files {#neworupdatedfile}

Checks for new and updated files in a specified folder on a configured schedule.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Box connection to use.           |         |
| Folder ID  | The unique identifier of the folder. |         |

### New File Comments {#newfilecomments}

Checks for new comments on a specified file on a configured schedule.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The Box connection to use.         |         |
| File ID    | The unique identifier of the file. |         |

### New Folders {#newfolder}

Checks for new folders in a specified folder on a configured schedule.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Box connection to use.           |         |
| Folder ID  | The unique identifier of the folder. |         |

## Actions

### Add Shared Link to File {#addsharedlinktofile}

Adds a shared link to a file

| Input                   | Comments                                                                                                                                                                                      | Default                                                                                             |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| File ID                 | The unique identifier of the file.                                                                                                                                                            |                                                                                                     |
| Shared Link             | The URL of the shared link.                                                                                                                                                                   |                                                                                                     |
| Shared Link Access      | The level of access for the shared link. Values: open, company, collaborators. See [Box Shared Links](https://developer.box.com/guides/shared-links/) for details.                            |                                                                                                     |
| Shared Link Password    | The password for the shared link, if one is set.                                                                                                                                              |                                                                                                     |
| Shared Link Permissions | The permissions for the shared link (file). Specify which actions are allowed. See [Box Shared Link Permissions](https://developer.box.com/reference/put-files-id/#request-body) for details. | <code>{<br /> "can_download": true,<br /> "can_edit": true,<br /> "can_preview": true<br />}</code> |
| Shared Link Vanity Name | The custom vanity name for the shared link URL. Creates a URL like https://app.box.com/v/your-vanity-name.                                                                                    |                                                                                                     |
| Connection              | The Box connection to use.                                                                                                                                                                    |                                                                                                     |

### Add Shared Link to Folder {#addsharedlinktofolder}

Adds a shared link to a folder

| Input                          | Comments                                                                                                                                                                                          | Default                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Folder ID                      | The unique identifier of the folder.                                                                                                                                                              |                                                                             |
| Shared Link                    | The URL of the shared link.                                                                                                                                                                       |                                                                             |
| Shared Link Access             | The level of access for the shared link. Values: open, company, collaborators. See [Box Shared Links](https://developer.box.com/guides/shared-links/) for details.                                |                                                                             |
| Shared Link Password           | The password for the shared link, if one is set.                                                                                                                                                  |                                                                             |
| Shared Link Permissions Folder | The permissions for the shared link (folder). Specify which actions are allowed. See [Box Shared Link Permissions](https://developer.box.com/reference/put-folders-id/#request-body) for details. | <code>{<br /> "can_download": true,<br /> "can_preview": true<br />}</code> |
| Shared Link Vanity Name        | The custom vanity name for the shared link URL. Creates a URL like https://app.box.com/v/your-vanity-name.                                                                                        |                                                                             |
| Connection                     | The Box connection to use.                                                                                                                                                                        |                                                                             |

### Copy Object {#copyobject}

Copy a Folder or File from one path to another

| Input      | Comments                                                                                                        | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| From Path  | The full path to the source file or folder. Must include a leading forward slash (/).                           |         |
| To Path    | The full path to the destination location including the new filename. Must include a leading forward slash (/). |         |
| Connection | The Box connection to use.                                                                                      |         |

### Create Folder {#createfolder}

Create a Folder at the specified path

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Path       | The full path to the file or folder. Must include a leading forward slash (/). |         |
| Connection | The Box connection to use.                                                     |         |

### Create Webhook {#createwebhook}

Create a webhook to send data from Box to an instance URL

| Input                   | Comments                                                                                                                                               | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Webhook URL             | The URL where webhook events will be sent. Reference a flow's URL from the trigger payload.                                                            |         |
| Target ID               | The unique identifier of the file or folder that will trigger the webhook.                                                                             |         |
| Target Type             | The type of item that will trigger the webhook (file or folder).                                                                                       |         |
| Trigger Type            | Select which event types will trigger this webhook. See [Box Events](https://developer.box.com/guides/webhooks/v2/events/) for available options.      |         |
| Primary Signature Key   | A signature key used to validate webhook requests. See [Box Webhook Signatures](https://developer.box.com/guides/webhooks/handle/verify/) for details. |         |
| Secondary Signature Key | A signature key used to validate webhook requests. See [Box Webhook Signatures](https://developer.box.com/guides/webhooks/handle/verify/) for details. |         |
| Connection              | The Box connection to use.                                                                                                                             |         |

### Delete Instance Webhooks {#deleteinstancewebhooks}

Delete all Box webhooks that point to a flow in this instance

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection | The Box connection to use. |         |

### Delete Object {#deleteobject}

Delete a Folder or File at the specified path

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Path       | The full path to the file or folder. Must include a leading forward slash (/). |         |
| Connection | The Box connection to use.                                                     |         |

### Delete Webhook {#deletewebhook}

Delete a webhook by ID

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Box connection to use.            |         |
| Webhook ID | The unique identifier of the webhook. |         |

### Download File {#downloadfile}

Download the file at the specified path

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Path       | The full path to the file or folder. Must include a leading forward slash (/). |         |
| Connection | The Box connection to use.                                                     |         |

### Find File For Shared Link {#findfileforsharedlink}

Returns the file represented by a shared link

| Input                | Comments                                                                                                                                                           | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Shared Link          | The URL of the shared link.                                                                                                                                        |         |
| Shared Link Password | The password for the shared link, if one is set.                                                                                                                   |         |
| Fields               | A comma-separated list of attributes to include in the response. See [Box File Fields](https://developer.box.com/reference/resources/file/) for available options. |         |
| Connection           | The Box connection to use.                                                                                                                                         |         |

### Find Folder For Shared Link {#findfolderforsharedlink}

Returns the folder represented by a shared link

| Input                | Comments                                                                                                                                                           | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Shared Link          | The URL of the shared link.                                                                                                                                        |         |
| Shared Link Password | The password for the shared link, if one is set.                                                                                                                   |         |
| Fields               | A comma-separated list of attributes to include in the response. See [Box File Fields](https://developer.box.com/reference/resources/file/) for available options. |         |
| Connection           | The Box connection to use.                                                                                                                                         |         |

### Get Current User {#getcurrentuser}

Get the information and metadata of the user that is currently logged in

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection | The Box connection to use. |         |

### Get File Download URL {#getfiledownloadurl}

Get a URL to download the file at the specified path

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Path       | The full path to the file or folder. Must include a leading forward slash (/). |         |
| Connection | The Box connection to use.                                                     |         |

### Get Shared Link For File {#getsharedlinkforfile}

Gets the shared link for a file

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| File ID    | The unique identifier of the file. |         |
| Connection | The Box connection to use.         |         |

### Get Shared Link For Folder {#getsharedlinkforfolder}

Gets the shared link for a folder

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Folder ID  | The unique identifier of the folder. |         |
| Connection | The Box connection to use.           |         |

### List Folder {#listfolderwithpagination}

List Folder contents at the specified path.

| Input           | Comments                                                                                                                                                                                                                                    | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All       | When true, retrieves all results using automatic pagination.                                                                                                                                                                                | false   |
| Path            | The full path to the file or folder. Must include a leading forward slash (/).                                                                                                                                                              |         |
| Fields/Metadata | Comma-separated attributes to include in the response. Supports metadata queries (e.g., metadata.enterprise_12345.contractTemplate). See [Box File Fields](https://developer.box.com/reference/resources/file--full) for available options. |         |
| Limit           | The maximum number of items to return (1-1000).                                                                                                                                                                                             |         |
| Marker          | The pagination marker returned by a previous request to retrieve the next page of results.                                                                                                                                                  |         |
| Offset          | The position to start returning results from (zero-based index).                                                                                                                                                                            |         |
| Connection      | The Box connection to use.                                                                                                                                                                                                                  |         |

### List Folder (Deprecated) {#listfolder}

List Folder contents at the specified path. This version of the action is being deprecated. Please replace action with List Folder.

| Input      | Comments                                                                                   | Default |
| ---------- | ------------------------------------------------------------------------------------------ | ------- |
| Path       | The full path to the file or folder. Must include a leading forward slash (/).             |         |
| Limit      | The maximum number of items to return (1-1000).                                            |         |
| Marker     | The pagination marker returned by a previous request to retrieve the next page of results. |         |
| Offset     | The position to start returning results from (zero-based index).                           |         |
| Connection | The Box connection to use.                                                                 |         |

### List Webhooks {#listwebhooks}

List all webhooks configured in Box, including those for other integrations

| Input                       | Comments                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection                  | The Box connection to use.                                                                 |         |
| Limit                       | The maximum number of items to return (1-1000).                                            |         |
| Marker                      | The pagination marker returned by a previous request to retrieve the next page of results. |         |
| Fetch All                   | When true, retrieves all results using automatic pagination.                               | false   |
| Show Only Instance Webhooks | Show only webhooks that point to this instance                                             | true    |

### Move Object {#moveobject}

Move a Folder or File from one path to another

| Input      | Comments                                                                                                        | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| From Path  | The full path to the source file or folder. Must include a leading forward slash (/).                           |         |
| To Path    | The full path to the destination location including the new filename. Must include a leading forward slash (/). |         |
| Connection | The Box connection to use.                                                                                      |         |

### Path Details {#pathdetails}

Get detailed information about folders/files in the specified path

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Path       | The full path to the file or folder. Must include a leading forward slash (/). |         |
| Connection | The Box connection to use.                                                     |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Box

| Input                   | Comments                                                                                                                                                                                            | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Box connection to use.                                                                                                                                                                          |         |
| URL                     | Input the path only (/2.0/folders), The base URL is already included (https://api.box.com). For example, to connect to https://api.box.com/2.0/folders, only /2.0/folders is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                             |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                           |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                    |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                 |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                         |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                            | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                 |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                 | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.    | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                 | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                       | false   |

### Remove Shared Link from File {#removesharedlinkfromfile}

Removes a shared link from a file

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| File ID    | The unique identifier of the file. |         |
| Connection | The Box connection to use.         |         |

### Remove Shared Link from Folder {#removesharedlinkfromfolder}

Removes a shared link from a folder

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Folder ID  | The unique identifier of the folder. |         |
| Connection | The Box connection to use.           |         |

### Update Shared Link on File {#updatesharedlinktofile}

Updates a shared link on a file

| Input                   | Comments                                                                                                                                                                                      | Default                                                                                             |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| File ID                 | The unique identifier of the file.                                                                                                                                                            |                                                                                                     |
| Shared Link             | The URL of the shared link.                                                                                                                                                                   |                                                                                                     |
| Shared Link Access      | The level of access for the shared link. Values: open, company, collaborators. See [Box Shared Links](https://developer.box.com/guides/shared-links/) for details.                            |                                                                                                     |
| Shared Link Password    | The password for the shared link, if one is set.                                                                                                                                              |                                                                                                     |
| Shared Link Permissions | The permissions for the shared link (file). Specify which actions are allowed. See [Box Shared Link Permissions](https://developer.box.com/reference/put-files-id/#request-body) for details. | <code>{<br /> "can_download": true,<br /> "can_edit": true,<br /> "can_preview": true<br />}</code> |
| Shared Link Vanity Name | The custom vanity name for the shared link URL. Creates a URL like https://app.box.com/v/your-vanity-name.                                                                                    |                                                                                                     |
| Connection              | The Box connection to use.                                                                                                                                                                    |                                                                                                     |

### Update Shared Link on Folder {#updatesharedlinkonfolder}

Updates a shared link on a folder

| Input                          | Comments                                                                                                                                                                                          | Default                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Folder ID                      | The unique identifier of the folder.                                                                                                                                                              |                                                                             |
| Shared Link                    | The URL of the shared link.                                                                                                                                                                       |                                                                             |
| Shared Link Access             | The level of access for the shared link. Values: open, company, collaborators. See [Box Shared Links](https://developer.box.com/guides/shared-links/) for details.                                |                                                                             |
| Shared Link Password           | The password for the shared link, if one is set.                                                                                                                                                  |                                                                             |
| Shared Link Permissions Folder | The permissions for the shared link (folder). Specify which actions are allowed. See [Box Shared Link Permissions](https://developer.box.com/reference/put-folders-id/#request-body) for details. | <code>{<br /> "can_download": true,<br /> "can_preview": true<br />}</code> |
| Shared Link Vanity Name        | The custom vanity name for the shared link URL. Creates a URL like https://app.box.com/v/your-vanity-name.                                                                                        |                                                                             |
| Connection                     | The Box connection to use.                                                                                                                                                                        |                                                                             |

### Upload File {#uploadfile}

Upload a file to the specified path

| Input         | Comments                                                                                              | Default |
| ------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Path          | The full path to the file or folder. Must include a leading forward slash (/).                        |         |
| File Contents | The file content to upload. Accepts text, binary data (images, PDFs), or output from a previous step. |         |
| Connection    | The Box connection to use.                                                                            |         |
