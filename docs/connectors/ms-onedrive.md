---
title: Microsoft OneDrive Connector
sidebar_label: Microsoft OneDrive
description: Manage drives, files, shared content, and monitor changes in Microsoft OneDrive.
---

![Microsoft OneDrive](./assets/ms-onedrive.png#connector-icon)
Manage drives, files, shared content, and monitor changes in Microsoft OneDrive.

## Connections

### OAuth 2.0 {#oauth}

OAuth 2.0 Connectivity for Microsoft One Drive

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                         | Default                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Microsoft OneDrive.                                                                                                                                          | https://login.microsoftonline.com/common/oauth2/v2.0/authorize |
| Token URL     | The OAuth 2.0 Token URL for Microsoft OneDrive.                                                                                                                                                  | https://login.microsoftonline.com/common/oauth2/v2.0/token     |
| Client ID     | The Application (client) ID from your Azure AD app registration. [Learn more](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app).                         |                                                                |
| Client Secret | The client secret value generated in your Azure AD app registration. [Learn more](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-a-client-secret). |                                                                |

## Triggers

### Drive Subscription {#instancedeploywebhook}

Receive webhook notifications from OneDrive drives. Automatically creates and manages a webhook subscription when the instance is deployed, and removes the subscription when the instance is deleted.

| Input                | Comments                                                                                                                                     | Default        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection           | The Microsoft OneDrive connection to use.                                                                                                    |                |
| Resource             | The Microsoft Graph resource path to monitor. Examples: /me/drive/root, /drives/{drive-id}/root                                              | /me/drive/root |
| Change Type          | The type of changes to monitor. OneDrive primarily supports 'updated'.                                                                       | updated        |
| Client State         | Optional validation token sent with each notification. Use to verify notifications originate from Microsoft Graph.                           |                |
| Expiration Date Time | Optional expiration date/time for the subscription. If not provided, defaults to 3 days from now. Maximum is 30 days for OneDrive resources. |                |

### Webhook {#webhook}

Receive and validate webhook requests from OneDrive for manually configured webhook subscriptions.

## Actions

### Create a Subscription {#createsubscription}

Create a Subscription to notify you of changes to a resource

| Input                | Comments                                                                                                                                                                                    | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft OneDrive connection to use.                                                                                                                                                   |         |
| Change Type          | The type of changes that should generate notifications for this subscription. OneDrive only supports 'updated'.                                                                             | updated |
| Notification URL     | The URL where webhook notifications will be delivered. Must be accessible from Microsoft Graph.                                                                                             |         |
| Resource             | The Microsoft Graph resource path to monitor for changes. See [Microsoft Graph documentation](https://learn.microsoft.com/en-us/graph/api/resources/subscription) for valid resource paths. |         |
| Expiration Date Time | The date and time when the subscription expires in ISO 8601 format. Maximum is 30 days from now for OneDrive resources.                                                                     |         |
| Client State         | An optional validation token that is passed back in each notification for verification purposes.                                                                                            |         |
| Allow Duplicates     | When true, allows multiple subscriptions for the same endpoint.                                                                                                                             | false   |

### Delete all Instanced Subscriptions {#deletesubscriptions}

Delete all existing subscriptions for this instance

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use. |         |

### Delete a Subscription {#deletesubscription}

Delete a Subscription by ID

| Input           | Comments                                   | Default |
| --------------- | ------------------------------------------ | ------- |
| Connection      | The Microsoft OneDrive connection to use.  |         |
| Subscription Id | The unique identifier of the subscription. |         |

### Delete File {#deletefile}

Delete the information and metadata of a file by path

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.                 |         |
| Drive      | The unique identifier of the drive.                       |         |
| Item Id    | The unique identifier of the drive item (file or folder). |         |

### Download File {#downloadfile}

Download a file from the current user's drive

| Input         | Comments                                                                                       | Default |
| ------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Microsoft OneDrive connection to use.                                                      |         |
| File Location | Provide a leading slash followed by the location of your file within the current user's drive. |         |
| Timeout       | The maximum time in milliseconds to wait for a response.                                       |         |

### Get Drive {#getdrive}

Get the information and metadata of a drive

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use. |         |
| Drive      | The unique identifier of the drive.       |         |

### Get Item {#getitembyid}

Returns the information and metadata of an existing item

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.                 |         |
| Drive      | The unique identifier of the drive.                       |         |
| Item Id    | The unique identifier of the drive item (file or folder). |         |

### Get Item by Path {#getitem}

Get the information and metadata of an item with your path in Sharepoint

| Input         | Comments                                                                 | Default |
| ------------- | ------------------------------------------------------------------------ | ------- |
| Connection    | The Microsoft OneDrive connection to use.                                |         |
| File Location | Provide a leading slash, followed by the location and name of your file. |         |

### Get Site {#getsite}

Get the information and metadata of a given Site

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.     |         |
| Site       | The unique identifier of the SharePoint site. |         |

### List Changes {#listchanges}

Track changes in a driveItem and its children over time.

| Input             | Comments                                                                                                                                                                                                                                                                                         | Default                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| Connection        | The Microsoft OneDrive connection to use.                                                                                                                                                                                                                                                        |                               |
| Delta URL         | The URL to track changes in a driveItem and its children over time. You can also use the @odata.nextLink or @odata.deltaLink from a previous response to resume tracking changes. See [Microsoft Graph delta query documentation](https://learn.microsoft.com/en-us/graph/delta-query-overview). | /drives/{drive-id}/root/delta |
| $select Parameter | Comma-separated list of properties to include in the response. See [Microsoft Graph $select documentation](https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#select-parameter).                                                                                                 |                               |
| $expand Parameter | Comma-separated list of related resources to include in the response. See [Microsoft Graph $expand documentation](https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#expand-parameter).                                                                                          |                               |
| $top Parameter    | The maximum number of results to return per page. See [Microsoft Graph $top documentation](https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#top-parameter).                                                                                                                    |                               |

### List Children {#listchildren}

Returns all child elements on a given drive item

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.                 |         |
| Drive      | The unique identifier of the drive.                       |         |
| Item Id    | The unique identifier of the drive item (file or folder). |         |
| Page Limit | The maximum number of results to return per page.         |         |
| Page Token | The token for retrieving the next page of results.        |         |

### List Drives By Group {#listdrivesbygroup}

Returns a list of all drives available to the given group

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.          |         |
| Group      | The unique identifier of the Microsoft 365 group.  |         |
| Page Limit | The maximum number of results to return per page.  |         |
| Page Token | The token for retrieving the next page of results. |         |

### List Drives By Site {#listdrivesbysite}

Returns a list of all drives available to the given site

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.          |         |
| Site       | The unique identifier of the SharePoint site.      |         |
| Page Limit | The maximum number of results to return per page.  |         |
| Page Token | The token for retrieving the next page of results. |         |

### List Drives By User {#listdrivesbyuser}

Returns a list of all drives available to the given user

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.           |         |
| User       | The unique identifier or email address of the user. |         |
| Page Limit | The maximum number of results to return per page.   |         |
| Page Token | The token for retrieving the next page of results.  |         |

### List Files Shared With Me {#listsharedfiles}

Returns all files shared with your account

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.          |         |
| Page Limit | The maximum number of results to return per page.  |         |
| Page Token | The token for retrieving the next page of results. |         |

### List Groups {#listgroups}

Returns a list of all groups the user has access to

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.          |         |
| Page Token | The token for retrieving the next page of results. |         |
| Page Limit | The maximum number of results to return per page.  |         |

### List Items In Directory {#listdriveitems}

Returns a list of all items in the given directory

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.                                             |         |
| Directory  | The directory path of the file. Use a forward slash (/) to access the root directory. |         |
| Page Limit | The maximum number of results to return per page.                                     |         |
| Page Token | The token for retrieving the next page of results.                                    |         |

### List My Drives {#listdrives}

Returns a list of all drives available to the current user

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.          |         |
| Page Limit | The maximum number of results to return per page.  |         |
| Page Token | The token for retrieving the next page of results. |         |

### List Shared {#listshared}

List shared items in SharePoint or OneDrive

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use. |         |

### List Sites {#listsites}

Returns a list of all sites available to the current user

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.          |         |
| Page Limit | The maximum number of results to return per page.  |         |
| Page Token | The token for retrieving the next page of results. |         |

### List Subscriptions {#listsubscriptions}

List all available Subscriptions

| Input                       | Comments                                                           | Default |
| --------------------------- | ------------------------------------------------------------------ | ------- |
| Connection                  | The Microsoft OneDrive connection to use.                          |         |
| Show Instance Subscriptions | When true, shows only subscriptions associated with this instance. | true    |

### Move File {#movefile}

Move the given file to a new location

| Input            | Comments                                                               | Default |
| ---------------- | ---------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft OneDrive connection to use.                              |         |
| Current Location | Provide a leading slash, followed by the location and name of the file |         |
| New Location     | Provide a leading slash, followed by the new location of the file.     |         |
| New File Name    | The new name for the file.                                             |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Microsoft Onedrive

| Input                   | Comments                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Microsoft OneDrive connection to use.                                                                                                                                                                            |         |
| URL                     | Input the path only (/me/drive), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/me/drive, only /me/drive is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                  |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                        | false   |

### Renew Subscription {#renewsubscription}

Extend the expiration date of an existing OneDrive subscription

| Input           | Comments                                                                                     | Default |
| --------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Microsoft OneDrive connection to use.                                                    |         |
| Subscription Id | The unique identifier of the subscription.                                                   |         |
| Expiration Days | Number of days to extend the subscription (1-30). Maximum is 30 days for OneDrive resources. | 3       |

### Search Drive {#searchdrive}

Search the current drive for a string of text

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Microsoft OneDrive connection to use.        |         |
| Search     | The text to search for within the current drive. |         |

### Search Users {#searchuser}

Find the information and metadata of an existing user

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.           |         |
| User       | The unique identifier or email address of the user. |         |

### Update File {#updatefile}

Update the information and metadata of a given file

| Input           | Comments                                                                                      | Default |
| --------------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Microsoft OneDrive connection to use.                                                     |         |
| File Location   | Provide a leading slash, followed by the location and name of the file.                       |         |
| New File Name   | The new name for the file.                                                                    |         |
| New File Path   | The path to the desired SharePoint resource. The root directory does not need to be included. |         |
| Optional Values | Optional key-value pairs to include in the request body.                                      |         |

### Upload File {#uploadfile}

Upload a file to the user's connected drive

| Input         | Comments                                                                    | Default |
| ------------- | --------------------------------------------------------------------------- | ------- |
| Connection    | The Microsoft OneDrive connection to use.                                   |         |
| File Location | Provide a leading slash, followed by the location and name of the new file. |         |
| File Data     | The binary content of the file to upload.                                   |         |
| Timeout       | The maximum time in milliseconds to wait for a response.                    |         |
