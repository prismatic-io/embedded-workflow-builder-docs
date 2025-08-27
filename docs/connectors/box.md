---
title: Box Connector
sidebar_label: Box
description: Manage files stored in Box
---

![Box](./assets/box.png#connector-icon)
Manage files stored in Box

## Connections

### Box Developer Token

Box Developer Token

A **Developer Token** is a short-lived (60-minute) token that you can use for testing purposes.
A developer token allows you to use the Box API to access your personal Box account only.

:::note
When your integration is ready for production, you'll need an [OAuth 2.0](#box-oauth-20-connection) connection to authenticate your customers' Box accounts.
You can also do your testing with OAuth.
:::

| Input           | Comments                                           | Default |
| --------------- | -------------------------------------------------- | ------- |
| Developer Token | A short-lived developer token for testing purposes |         |

### Box OAuth 2.0 Connection

Box OAuth 2.0 Connection

This component authenticates with Box using OAuth 2.0.
You will need to create a Box OAuth 2.0 app in order to authorize your integration to access your customers' Box accounts.

You can follow along with Box's OAuth 2.0 setup documentation [here](https://developer.box.com/guides/authentication/oauth2/oauth2-setup/). Note:

- Be sure to select **User Authentication (OAuth 2.0)** when creating a **Custom App**
- Take note of your **Client ID** and **Client Secret** - you'll enter those in a moment
- Under **OAuth 2.0 Redirect URI**, enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
- Under **Application Scopes**, select **Write all files and folders stored in Box**
- Leave **CORS Domains** blank

When you add a Box step to an integration, a Box OAuth 2.0 connection will be created for you.
Enter the **Client ID** and **Client Secret** that you noted earlier.
You can leave **Scopes** blank to use the **Application Scopes** that you set up previously.
Or, you can pare down scopes as desired (reference Box's [scopes documentation](https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/)).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                   | Default                       |
| ------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Scopes        | A space-delimited set of one or more scopes. Leave this blank to use your app's configured default scopes. | root_readwrite manage_webhook |
| Client ID     |                                                                                                            |                               |
| Client Secret |                                                                                                            |                               |

## Triggers

### Webhook

Receive and validate webhook requests from Box for webhooks you configure.

## Actions

### Add Shared Link to File

Adds a shared link to a file

| Input                   | Comments                                                                      | Default                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| File ID                 | The unique identifier of the file                                             |                                                                                                     |
| Shared Link             | The URL of the shared link                                                    |                                                                                                     |
| Shared Link Access      | The level of access for the shared link. Values: open, company, collaborators |                                                                                                     |
| Shared Link Password    | The password for the shared link, if any                                      |                                                                                                     |
| Shared Link Permissions | The permissions for the shared link                                           | <code>{<br /> "can_download": true,<br /> "can_edit": true,<br /> "can_preview": true<br />}</code> |
| Shared Link Vanity Name | The custom vanity name for the shared link                                    |                                                                                                     |
| Connection              |                                                                               |                                                                                                     |

### Add Shared Link to Folder

Adds a shared link to a folder

| Input                          | Comments                                                                      | Default                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Folder ID                      | The unique identifier that represents a folder                                |                                                                             |
| Shared Link                    | The URL of the shared link                                                    |                                                                             |
| Shared Link Access             | The level of access for the shared link. Values: open, company, collaborators |                                                                             |
| Shared Link Password           | The password for the shared link, if any                                      |                                                                             |
| Shared Link Permissions Folder | The permissions for the shared link folder                                    | <code>{<br /> "can_download": true,<br /> "can_preview": true<br />}</code> |
| Shared Link Vanity Name        | The custom vanity name for the shared link                                    |                                                                             |
| Connection                     |                                                                               |                                                                             |

### Copy Object

Copy a Folder or File from one path to another

| Input      | Comments                                                          | Default |
| ---------- | ----------------------------------------------------------------- | ------- |
| From Path  | This represents the source files's path. Include a leading /      |         |
| To Path    | This represents the destination files's path. Include a leading / |         |
| Connection |                                                                   |         |

### Create Folder

Create a Folder at the specified path

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Path       | This represents the files's path. Include a leading / |         |
| Connection |                                                       |         |

### Create Webhook

Create a webhook to send data from Box to an instance URL

| Input                   | Comments                                                 | Default |
| ----------------------- | -------------------------------------------------------- | ------- |
| Webhook URL             | Reference a flow's URL from the trigger payload          |         |
| Target ID               | The ID of the item that will trigger the webhook         |         |
| Target Type             | The type of item that will trigger the webhook           |         |
| Trigger Type            | Names of events that this webhook will be triggered for. |         |
| Primary Signature Key   | A signature key used to validate webhook requests        |         |
| Secondary Signature Key | A signature key used to validate webhook requests        |         |
| Connection              |                                                          |         |

### Delete Instance Webhooks

Delete all Box webhooks that point to a flow in this instance

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete Object

Delete a Folder or File at the specified path

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Path       | This represents the files's path. Include a leading / |         |
| Connection |                                                       |         |

### Delete Webhook

Delete a webhook by ID

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection |                       |         |
| Webhook ID | The ID of the webhook |         |

### Download File

Download the file at the specified path

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Path       | This represents the files's path. Include a leading / |         |
| Connection |                                                       |         |

### Find File For Shared Link

Returns the file represented by a shared link

| Input                | Comments                                                         | Default |
| -------------------- | ---------------------------------------------------------------- | ------- |
| Shared Link          | The URL of the shared link                                       |         |
| Shared Link Password | The password for the shared link, if any                         |         |
| Fields               | A comma-separated list of attributes to include in the response. |         |
| Connection           |                                                                  |         |

### Find Folder For Shared Link

Returns the folder represented by a shared link

| Input                | Comments                                                         | Default |
| -------------------- | ---------------------------------------------------------------- | ------- |
| Shared Link          | The URL of the shared link                                       |         |
| Shared Link Password | The password for the shared link, if any                         |         |
| Fields               | A comma-separated list of attributes to include in the response. |         |
| Connection           |                                                                  |         |

### Get Current User

Get the information and metadata of the user that is currently logged in

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get File Download URL

Get a URL to download the file at the specified path

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Path       | This represents the files's path. Include a leading / |         |
| Connection |                                                       |         |

### Get Shared Link For File

Gets the shared link for a file

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| File ID    | The unique identifier of the file |         |
| Connection |                                   |         |

### Get Shared Link For Folder

Gets the shared link for a folder

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Folder ID  | The unique identifier that represents a folder |         |
| Connection |                                                |         |

### List Folder

List Folder contents at the specified path.

| Input           | Comments                                                                                                                                                                                                                        | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All       | Set to true to retrieve all results.                                                                                                                                                                                            | false   |
| Path            | This represents the files's path. Include a leading /                                                                                                                                                                           |         |
| Fields/Metadata | Specify comma-separated attributes to include in the response. Supports metadata queries (e.g., metadata.enterprise_12345.contractTemplate). See https://developer.box.com/reference/resources/file--full for available fields. |         |
| Limit           | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 1000.                                                                                                                 |         |
| Marker          | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                                                                                         |         |
| Offset          | The offset of the item at which to begin the response.                                                                                                                                                                          |         |
| Connection      |                                                                                                                                                                                                                                 |         |

### List Folder (Deprecated)

List Folder contents at the specified path. This version of the action is being deprecated. Please replace action with List Folder.

| Input      | Comments                                                                                                        | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Path       | This represents the files's path. Include a leading /                                                           |         |
| Limit      | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 1000. |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results         |         |
| Offset     | The offset of the item at which to begin the response.                                                          |         |
| Connection |                                                                                                                 |         |

### List Webhooks

List all webhooks configured in Box, including those for other integrations

| Input                       | Comments                                                                                                        | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                 |         |
| Limit                       | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 1000. |         |
| Marker                      | Specify the pagination token that's returned by a previous request to retrieve the next page of results         |         |
| Fetch All                   | Set to true to retrieve all results.                                                                            | false   |
| Show Only Instance Webhooks | Show only webhooks that point to this instance                                                                  | true    |

### Move Object

Move a Folder or File from one path to another

| Input      | Comments                                                          | Default |
| ---------- | ----------------------------------------------------------------- | ------- |
| From Path  | This represents the source files's path. Include a leading /      |         |
| To Path    | This represents the destination files's path. Include a leading / |         |
| Connection |                                                                   |         |

### Path Details

Get detailed information about folders/files in the specified path

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Path       | This represents the files's path. Include a leading / |         |
| Connection |                                                       |         |

### Raw Request

Send raw HTTP request to Box

| Input                   | Comments                                                                                                                                                                                            | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                     |         |
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

### Remove Shared Link from File

Removes a shared link from a file

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| File ID    | The unique identifier of the file |         |
| Connection |                                   |         |

### Remove Shared Link from Folder

Removes a shared link from a folder

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Folder ID  | The unique identifier that represents a folder |         |
| Connection |                                                |         |

### Update Shared Link on File

Updates a shared link on a file

| Input                   | Comments                                                                      | Default                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| File ID                 | The unique identifier of the file                                             |                                                                                                     |
| Shared Link             | The URL of the shared link                                                    |                                                                                                     |
| Shared Link Access      | The level of access for the shared link. Values: open, company, collaborators |                                                                                                     |
| Shared Link Password    | The password for the shared link, if any                                      |                                                                                                     |
| Shared Link Permissions | The permissions for the shared link                                           | <code>{<br /> "can_download": true,<br /> "can_edit": true,<br /> "can_preview": true<br />}</code> |
| Shared Link Vanity Name | The custom vanity name for the shared link                                    |                                                                                                     |
| Connection              |                                                                               |                                                                                                     |

### Update Shared Link on Folder

Updates a shared link on a folder

| Input                          | Comments                                                                      | Default                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Folder ID                      | The unique identifier that represents a folder                                |                                                                             |
| Shared Link                    | The URL of the shared link                                                    |                                                                             |
| Shared Link Access             | The level of access for the shared link. Values: open, company, collaborators |                                                                             |
| Shared Link Password           | The password for the shared link, if any                                      |                                                                             |
| Shared Link Permissions Folder | The permissions for the shared link folder                                    | <code>{<br /> "can_download": true,<br /> "can_preview": true<br />}</code> |
| Shared Link Vanity Name        | The custom vanity name for the shared link                                    |                                                                             |
| Connection                     |                                                                               |                                                                             |

### Upload File

Upload a file to the specified path

| Input         | Comments                                                                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Path          | This represents the files's path. Include a leading /                                                                                              |         |
| File Contents | The contents to write to a file. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step. |         |
| Connection    |                                                                                                                                                    |         |
