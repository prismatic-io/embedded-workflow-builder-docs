---
title: Microsoft OneDrive Connector
sidebar_label: Microsoft OneDrive
description: Interact with files and drives inside your Microsoft OneDrive tenant
---

![Microsoft OneDrive](./assets/ms-onedrive.png#connector-icon)
Interact with files and drives inside your Microsoft OneDrive tenant

## Connections

### OAuth 2.0

OAuth 2.0 Connectivity for Microsoft One Drive

Once you have an instance of Microsoft OneDrive licensed to your account, you will need to create and configure a new "App Registration" within your [Azure Active Directory tenant](https://portal.azure.com/#home).
When creating the application you will be prompted to select the 'Supported account types'. Under this section, be sure to select 'Accounts in any organizational directory (Any Azure AD directory - Multitenant)'.

You will need to go to "Platforms" and add the "Web" platform. In that section you should add the OAuth 2.0 callback URL - `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` - as a **Redirect URI**.

Next, go to "Certificates & Secrets" for the app and add a new **Client Secret**. Note this value as you will need to supply it to the connection.

You will also need the **Application (client) ID** from the "Overview" page.

The last step of configuring the "App Registration" is assigning "App Permissions". Click "Add Permission", click on the square labeled "Microsoft Graph", and then "Delegated permissions". You should select all permissions that are required for your desired integration.

- Additionally, ensure the `offline_access` scope is included in your app registration. It is essential to maintain your OAuth connection and receive refresh tokens. Without it, users will need to re-authenticate every hour.

Now, configure the OAuth 2.0 connection.
Add an MS OneDrive OAuth 2.0 connection config variable:

- Use the **Application (client) ID** value for the **Client ID** field.
- Use the **Client Secret** for the same named field.
- If you didn't select Multitenant when creating the Azure application, you will need to replace the **Authorize URL** and **Token URL** with ones specific to your tenant.

Save your integration and you should be able to authenticate a user through MS OneDrive with OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                      | Default                                                        |
| ------------- | ------------------------------------------------------------- | -------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Microsoft One Drive       | https://login.microsoftonline.com/common/oauth2/v2.0/authorize |
| Token URL     | The OAuth 2.0 Token URL for Microsoft One Drive               | https://login.microsoftonline.com/common/oauth2/v2.0/token     |
| Client ID     | Generate this value when you create your Active Directory App |                                                                |
| Client Secret | Generate this value when you create your Active Directory App |                                                                |

## Triggers

### Webhook

Receive and validate webhook requests from OneDrive for webhooks you configure.

## Actions

### Create a Subscription

Create a Subscription to notify you of changes to a resource

| Input                | Comments                                                                                                      | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | Supply the desired connection for Microsoft One Drive                                                         |         |
| Change Type          | The type of changes that should generate notifications for this subscription. OneDrive only supports updated. | updated |
| Notification URL     | The URL that notifications should be delivered to, if required for the specified notificationType.            |         |
| Resource             | The relative path of the subscription within the drive. Read-only.                                            |         |
| Expiration Date Time | The date and time when the subscription will expire if not updated or renewed.                                |         |
| Client State         | An optional string value that is passed back in the notification message for this subscription.               |         |
| Allow Duplicates     | Enable to allow more than one subscription per endpoint                                                       | false   |

### Delete all Instanced Subscriptions

Delete all existing subscriptions for this instance

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |

### Delete a Subscription

Delete a Subscription by ID

| Input           | Comments                                              | Default |
| --------------- | ----------------------------------------------------- | ------- |
| Connection      | Supply the desired connection for Microsoft One Drive |         |
| Subscription Id | The Id the subscription to delete                     |         |

### Delete File

Delete the information and metadata of a file by path

| Input      | Comments                                                         | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive            |         |
| Drive      | Provide an identifier for the drive. This value should be an Id. |         |
| Item Id    | Provide an Id for for the item.                                  |         |

### Download File

Download a file from the current user's drive

| Input         | Comments                                                                                       | Default |
| ------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Connection    | Supply the desired connection for Microsoft One Drive                                          |         |
| File Location | Provide a leading slash followed by the location of your file within the current user's drive. |         |
| Timeout       | The amount of time the client will await a response.                                           |         |

### Get Drive

Get the information and metadata of a drive

| Input      | Comments                                                         | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive            |         |
| Drive      | Provide an identifier for the drive. This value should be an Id. |         |

### Get Item

Returns the information and metadata of an existing item

| Input      | Comments                                                         | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive            |         |
| Drive      | Provide an identifier for the drive. This value should be an Id. |         |
| Item Id    | Provide an Id for for the item.                                  |         |

### Get Item by Path

Get the information and metadata of an item with your path in Sharepoint

| Input         | Comments                                                                 | Default |
| ------------- | ------------------------------------------------------------------------ | ------- |
| Connection    | Supply the desired connection for Microsoft One Drive                    |         |
| File Location | Provide a leading slash, followed by the location and name of your file. |         |

### Get Site

Get the information and metadata of a given Site

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |
| Site       | Provide an Id for the site.                           |         |

### List Changes

Track changes in a driveItem and its children over time.

| Input                  | Comments                                                                                                                                                                                 | Default                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Connection             | Supply the desired connection for Microsoft One Drive                                                                                                                                    |                               |
| URL to fetch for delta | The URL to track changes in a driveItem and its children over time. You can also paste here the @odata.nextLink or @odata.deltaLink from a previous response to resume tracking changes. | /drives/{drive-id}/root/delta |
| $select Parameter      | Filters properties (columns). https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#select-parameter                                                                        |                               |
| $expand Parameter      | Retrieves related resources. https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#expand-parameter                                                                         |                               |
| $top Parameter         | Sets the page size of results. https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#top-parameter                                                                          |                               |

### List Children

Returns all child elements on a given drive item

| Input      | Comments                                                         | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive            |         |
| Drive      | Provide an identifier for the drive. This value should be an Id. |         |
| Item Id    | Provide an Id for for the item.                                  |         |
| Page Limit | Enter a number amount for the page size.                         |         |
| Page Token | Enter the token for the desired page.                            |         |

### List Drives By Group

Returns a list of all drives available to the given group

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |
| Group      | Provide an Id for the group.                          |         |
| Page Limit | Enter a number amount for the page size.              |         |
| Page Token | Enter the token for the desired page.                 |         |

### List Drives By Site

Returns a list of all drives available to the given site

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |
| Site       | Provide an Id for the site.                           |         |
| Page Limit | Enter a number amount for the page size.              |         |
| Page Token | Enter the token for the desired page.                 |         |

### List Drives By User

Returns a list of all drives available to the given user

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |
| User       | Provide a user id.                                    |         |
| Page Limit | Enter a number amount for the page size.              |         |
| Page Token | Enter the token for the desired page.                 |         |

### List Files Shared With Me

Returns all files shared with your account

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |
| Page Limit | Enter a number amount for the page size.              |         |
| Page Token | Enter the token for the desired page.                 |         |

### List Groups

Returns a list of all groups the user has access to

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |
| Page Token | Enter the token for the desired page.                 |         |
| Page Limit | Enter a number amount for the page size.              |         |

### List Items In Directory

Returns a list of all items in the given directory

| Input      | Comments                                                                                        | Default |
| ---------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive                                           |         |
| Directory  | Provide the directory of the file. If you want to access the root, just supply a forward slash. |         |
| Page Limit | Enter a number amount for the page size.                                                        |         |
| Page Token | Enter the token for the desired page.                                                           |         |

### List My Drives

Returns a list of all drives available to the current user

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |
| Page Limit | Enter a number amount for the page size.              |         |
| Page Token | Enter the token for the desired page.                 |         |

### List Shared

List shared items in SharePoint or OneDrive

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |

### List Sites

Returns a list of all sites available to the current user

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |
| Page Limit | Enter a number amount for the page size.              |         |
| Page Token | Enter the token for the desired page.                 |         |

### List Subscriptions

List all available Subscriptions

| Input                       | Comments                                                  | Default |
| --------------------------- | --------------------------------------------------------- | ------- |
| Connection                  | Supply the desired connection for Microsoft One Drive     |         |
| Show Instance Subscriptions | Show only subscriptions for this Instance's Subscriptions | true    |

### Move File

Move the given file to a new location

| Input            | Comments                                                               | Default |
| ---------------- | ---------------------------------------------------------------------- | ------- |
| Connection       | Supply the desired connection for Microsoft One Drive                  |         |
| Current Location | Provide a leading slash, followed by the location and name of the file |         |
| New Location     | Provide a leading slash, followed by the new location of the file.     |         |
| New File Name    | Provide a new name for the given file.                                 |         |

### Raw Request

Send raw HTTP request to Microsoft Onedrive

| Input                   | Comments                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | Supply the desired connection for Microsoft One Drive                                                                                                                                                                |         |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                 | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                        | false   |

### Search Drive

Search the current drive for a string of text

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |
| Search     | Provide a text to search the current drive with.      |         |

### Search Users

Find the information and metadata of an existing user

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | Supply the desired connection for Microsoft One Drive |         |
| User       | Provide a user id.                                    |         |

### Update File

Update the information and metadata of a given file

| Input           | Comments                                                                                        | Default |
| --------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection      | Supply the desired connection for Microsoft One Drive                                           |         |
| File Location   | Provide a leading slash, followed by the location and name of the file.                         |         |
| New File Name   | Provide a new name for the given file.                                                          |         |
| New File Path   | Enter a path to the desired sharepoint resource. You do not need to include the root directory. |         |
| Optional Values | Provide optional key-value pairs to be used in the request body.                                |         |

### Upload File

Upload a file to the user's connected drive

| Input         | Comments                                                                    | Default |
| ------------- | --------------------------------------------------------------------------- | ------- |
| Connection    | Supply the desired connection for Microsoft One Drive                       |         |
| File Location | Provide a leading slash, followed by the location and name of the new file. |         |
| File Data     | Provide a value for the file.                                               |         |
| Timeout       | The amount of time the client will await a response.                        |         |
