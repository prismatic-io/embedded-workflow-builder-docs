---
title: Microsoft SharePoint Connector
sidebar_label: Microsoft SharePoint
description: Interact with sites, drives, and items connected to your instance of Microsoft SharePoint.
---

![Microsoft SharePoint](./assets/ms-sharepoint.png#connector-icon)
Interact with sites, drives, and items connected to your instance of Microsoft SharePoint.

## Connections

### Client Credentials

Authenticates actions in the Microsoft SharePoint component.

This Connection will require an App Registration:

1. Navigate to the [Microsoft Entra](https://entra.microsoft.com/) **Identity** > **Applications** > **App registrations** and select **New registration**.
   1. Set the Supported Account types to **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** so that users outside of your organization (i.e. your customers) can authenticate.
   2. Set the Redirect URI dropdown as a "Web" platform. In that section add the OAuth callback URL `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` - as a **Redirect URI**.
   3. Select Register to complete.
2. From the App menu navigate to **Certificates & Secrets** for the app and add a new **Client Secret**. Save the **Value** for the **Client Secret** in the connection's configuration.
3. Navigate to the **Overview** page save the value listed as the **Application (client) ID**. This will be your **Client ID** for the connection configuration.
4. Navigate to **API Permissions** and select **Add Permission**, select the square labeled **Microsoft Graph**, and then **Application permissions**.
5. After applying all permissions relevant for your use-case, click on **Grant Admin Consent** in order to transfer permissions the client credentials flow after a successful connection.

To configure the OAuth 2.0 connection:

1. Add an OAuth 2.0 connection configuration variable:
   1. All actions for the client credentials flow require authentication with your Tenant ID.
   2. Use the **Application (client) ID** value for the **Client ID** field.
   3. Use the **Client Secret** for the same named field.
   4. Use the default scope that comes set up with the connection.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                       | Comments                                                                                                                                                                                                                             | Default                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| Base URL                    | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints). | https://graph.microsoft.com          |
| Microsoft Entra ID Endpoint | The Microsoft Entra ID endpoint for the Microsoft Graph API. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/graph/deployments#app-registration-and-token-service-root-endpoints).                 | https://login.microsoftonline.com    |
| Tenant                      | The tenant ID or name for the Microsoft Graph API. This is the ID or name of the tenant that you are connecting to.                                                                                                                  |                                      |
| Client ID                   | Client Id of your Azure application.                                                                                                                                                                                                 |                                      |
| Client Secret               | Client Secret generated under 'Certificates & Secrets' in your Azure application.                                                                                                                                                    |                                      |
| Scopes                      | Microsoft SharePoint Scopes.                                                                                                                                                                                                         | https://graph.microsoft.com/.default |

### Microsoft SharePoint OAuth 2.0 (Deprecated)

Authenticates actions in the Microsoft SharePoint component.

Once you have an instance of Microsoft SharePoint licensed to your account, you will need to create and configure a new "App Registration" within your [Azure Active Directory tenant](https://portal.azure.com/#home).
When creating the application you will be prompted to select the 'Supported account types'. Under this section, be sure to select 'Accounts in any organizational directory (Any Azure AD directory - Multitenant)'.

You will need to go to "Platforms" and add the "Web" platform. In that section you should add the OAuth 2.0 callback URL - `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` - as a **Redirect URI**.

Next, go to "Certificates & Secrets" for the app and add a new **Client Secret**. Note this value as you will need to supply it to the connection.

You will also need the **Application (client) ID** from the "Overview" page.

The last step of configuring the "App Registration" is assigning "App Permissions". Click "Add Permission", click on the square labeled "SharePoint", and then "Delegated permissions". You should select all permissions that are required for your desired integration.

- Additionally, ensure the `offline_access` scope is included in your app registration. It is essential to maintain your OAuth connection and receive refresh tokens. Without it, users will need to re-authenticate every hour.

Now, configure the OAuth 2.0 connection.
Add an MS SharePoint OAuth 2.0 connection config variable:

- Use the **Application (client) ID** value for the **Client ID** field.
- Use the **Client Secret** for the same named field.
- If you didn't select Multitenant when creating the Azure application, you will need to replace the **Authorize URL** and **Token URL** with ones specific to your tenant.

Save your integration and you should be able to authenticate a user through MS SharePoint with OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                             | Default                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| Base URL      | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints). | https://graph.microsoft.com                                    |
| Authorize URL | Provide a tenant specific OAuth 2.0 authorize endpoint.                                                                                                                                                                              | https://login.microsoftonline.com/common/oauth2/v2.0/authorize |
| Token URL     | Provide a tenant specific OAuth 2.0 token endpoint.                                                                                                                                                                                  | https://login.microsoftonline.com/common/oauth2/v2.0/token     |
| Scopes        | Space separated OAuth 2.0 permission scopes.                                                                                                                                                                                         | Sites.ReadWrite.All Sites.Manage.All offline_access            |
| Client ID     | Client Id of your Azure application.                                                                                                                                                                                                 |                                                                |
| Client Secret | Client Secret generated under 'Certificates & Secrets' in your Azure application.                                                                                                                                                    |                                                                |

### OAuth 2.0 Authorization Code

OAuth 2.0 Authorization Code Connectivity for Microsoft Outlook.

The OAuth 2.0 templated flow allows your user to authenticate with SharePoint to access their data on their behalf.
Setting up a templated OAuth connection is a single-step process:

To create an "App Registration" in Azure:

1. Log in to [Azure Portal](https://portal.azure.com/)
1. Select **App registrations**
1. Click **+ New registration**
   - **Name**: Give your application a descriptive name
   - **Supported account types**: Select **Accounts in any organizational directory (Any Azure AD directory - Multitenant)**
   - **Redirect URI**: Select **Web** and enter the OAuth 2.0 callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - Click **Register**
1. Under **API permissions** click **+ Add a permission**
   - Select **SharePoint**
   - Click **Delegated permissions**
   - Select all permissions that are required for your desired integration
   - Click **Add permissions**
1. Under **API permissions** click **Grant admin consent for (your org)**
1. Under **Certificates & secrets** click **+ New client secret**
   - Give your client secret a description and expiration date
   - Take note of the **Value** (not the Secret ID) of the client secret
1. Returning to the **Overview** page, take note of **Application (client) ID**

You will use the **Client Secret Value** and **Client ID** in the connection configuration.

- Enter the **Client ID** you noted above
- Enter the **Client Secret Value** you noted above
- If you didn't select Multitenant when creating the Azure application, you will need to replace the **Authorize URL** and **Token URL** with ones specific to your tenant

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                                                                                                                                                 | Default                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Base URL            | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints).                                                     | https://graph.microsoft.com                         |
| Tenant URL          | The tenant URL for the Microsoft Graph API. This is the URL of the tenant that you are connecting to. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-national-cloud#microsoft-entra-authentication-endpoints). | login.microsoftonline.com/common                    |
| Scopes              | Microsoft SharePoint permission scopes are set on the OAuth application.                                                                                                                                                                                                                 | Sites.ReadWrite.All Sites.Manage.All offline_access |
| Client ID           | Client Id of your Azure application.                                                                                                                                                                                                                                                     |                                                     |
| Client secret value | Client Secret generated under 'Certificates & Secrets' in your Azure application.                                                                                                                                                                                                        |                                                     |

## Triggers

### Site Changes

Periodically retrieves changes from all drives of a site on a configured schedule.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| Site Id    | Provide the unique identifier of a SharePoint site. |         |

### Webhook

Receive and validate webhook requests from Sharepoint for webhooks you configure.

## Actions

### Check Item Exists

Check if a file or folder exists in a SharePoint drive

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection |                                                                     |         |
| Site Id    | Provide the id of the site to check the item in.                    |         |
| Drive      | Provide the id of the drive to check the item in.                   |         |
| Item Path  | Provide the path to the file or folder, relative to the drive root. |         |

### Create a Folder

Create a Folder in a Drive

| Input          | Comments                                                      | Default |
| -------------- | ------------------------------------------------------------- | ------- |
| Connection     |                                                               |         |
| Site Id        | Provide the id of the site to create the folder in.           |         |
| Drive          | Provide the id of the drive to create the folder in.          |         |
| Parent Item Id | Provide the id of the parent element to create the folder in. |         |
| Folder Name    | Provide the name of the new folder.                           |         |

### Create a Subscription

Create a Subscription to notify you of changes to a resource

| Input                | Comments                                                                                                      | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                               |         |
| Change Type          | The type of changes that should generate notifications for this subscription. OneDrive only supports updated. | updated |
| Notification URL     | The URL that notifications should be delivered to, if required for the specified notificationType.            |         |
| Resource             | The relative path of the subscription within the drive. Read-only.                                            |         |
| Expiration Date Time | The date and time when the subscription will expire if not updated or renewed.                                |         |
| Client State         | An optional string value that is passed back in the notification message for this subscription.               |         |
| Allow Duplicates     | Enable to allow more than one subscription per endpoint                                                       | false   |

### Create Item in Site List

Create a new item inside the given site list

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                         |         |
| Site Id    | Provide the unique identifier of a SharePoint site.                                     |         |
| List Id    | Provide the unique identifier of a SharePoint site list.                                |         |
| Fields     | For each item, provide a key value pair to be added to the new drive item's properties. |         |

### Create Site List Subscription

Create a Site List subscription for Microsoft SharePoint

| Input                | Comments                                                                                                                                                        | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                 |         |
| Site Id              | Provide the unique identifier of a SharePoint site.                                                                                                             |         |
| List Id              | Provide the unique identifier of a SharePoint site list.                                                                                                        |         |
| Notification URL     | URL to send events of this Subscription to                                                                                                                      |         |
| Expiration Date/Time | Expiration date/time for subscription. If unspecified the default will be the current date/time plus 29 days (close to the maximum permitted by the Graph API). |         |
| Allow Duplicates     | Enable to allow more than one webhook per endpoint                                                                                                              | false   |

### Delete All Instance Subscriptions

Delete all subscriptions pointed at this instance

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete a Subscription

Delete a Subscription by ID

| Input           | Comments                          | Default |
| --------------- | --------------------------------- | ------- |
| Connection      |                                   |         |
| Subscription Id | The Id the subscription to delete |         |

### Download File

Download a file from the specified drive

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection |                                                        |         |
| Drive      | Provide the unique identifier of a SharePoint drive.   |         |
| Item Id    | Provide the unique identifier of a SharePoint item Id. |         |

### Get Current User

Get the information and metadata of the user that is currently logged in

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Drive

Returns the information and metadata of a SharePoint drive

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Connection |                                                      |         |
| Drive      | Provide the unique identifier of a SharePoint drive. |         |

### Get File

Get a file from a Drive

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection |                                                        |         |
| Drive      | Provide the unique identifier of a SharePoint drive.   |         |
| Item Id    | Provide the unique identifier of a SharePoint item Id. |         |

### Get Item from Site List

Returns the information and metadata of the given item

| Input         | Comments                                                                      | Default |
| ------------- | ----------------------------------------------------------------------------- | ------- |
| Connection    |                                                                               |         |
| Site Id       | Provide the unique identifier of a SharePoint site.                           |         |
| List Id       | Provide the unique identifier of a SharePoint site list.                      |         |
| Item Id       | Provide the unique identifier of a SharePoint item Id.                        |         |
| Opt In Fields | Provide a comma separated list of fields to overwrite the default result set. |         |

### Get Root Site

Returns the information and metadata of the root SharePoint site in your tenant

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Site

Returns the information and metadata of the given SharePoint site

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| Site Id    | Provide the unique identifier of a SharePoint site. |         |

### Get Site List

Returns the information and metadata of an existing site list

| Input      | Comments                                                 | Default |
| ---------- | -------------------------------------------------------- | ------- |
| Connection |                                                          |         |
| Site Id    | Provide the unique identifier of a SharePoint site.      |         |
| List Id    | Provide the unique identifier of a SharePoint site list. |         |

### List Changes

Track changes in a driveItem and its children over time.

| Input                  | Comments                                                                                                                                                                                 | Default                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Connection             |                                                                                                                                                                                          |                               |
| URL to fetch for delta | The URL to track changes in a driveItem and its children over time. You can also paste here the @odata.nextLink or @odata.deltaLink from a previous response to resume tracking changes. | /drives/{drive-id}/root/delta |
| $select Parameter      | Filters properties (columns). https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#select-parameter                                                                        |                               |
| $expand Parameter      | Retrieves related resources. https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#expand-parameter                                                                         |                               |
| $top Parameter         | Sets the page size of results. https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#top-parameter                                                                          |                               |
| Fetch All              | Set to true to retrieve all results.                                                                                                                                                     | false                         |

### List Drives

List all drives within any given SharePoint site

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| Site Id    | Provide the unique identifier of a SharePoint site. |         |
| Page Limit | Enter a number amount for the page size.            |         |
| Page Token | Enter the token for the desired page.               |         |
| Fetch All  | Set to true to retrieve all results.                | false   |

### List Files in Drive

List all the files from a Drive

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| Connection |                                                                 |         |
| Drive      | Provide the unique identifier of a SharePoint drive.            |         |
| Page Limit | Enter a number amount for the page size.                        |         |
| Page Token | Enter the token for the desired page.                           |         |
| Fetch All  | Set to true to retrieve all results.                            | false   |
| Recursive  | If true, it will also return all the files from the subfolders. | false   |

### List Files in Drive (Deprecated)

List all the files from a Drive. This version of the action is being deprecated. Please replace action with List Files In Drive.

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Connection |                                                      |         |
| Drive      | Provide the unique identifier of a SharePoint drive. |         |

### List Folder Files in Drive

List all the files inside of a folder from a Drive

| Input      | Comments                                                 | Default |
| ---------- | -------------------------------------------------------- | ------- |
| Connection |                                                          |         |
| Drive      | Provide the unique identifier of a SharePoint drive.     |         |
| Folder ID  | Provide the unique identifier of a Sharepoint folder Id. |         |
| Page Limit | Enter a number amount for the page size.                 |         |
| Page Token | Enter the token for the desired page.                    |         |
| Fetch All  | Set to true to retrieve all results.                     | false   |

### List Folder Files in Drive (Deprecated)

List all the files inside of a folder from a Drive. This version of the action is being deprecated. Please replace action with List Folder Files In Drive.

| Input      | Comments                                                 | Default |
| ---------- | -------------------------------------------------------- | ------- |
| Connection |                                                          |         |
| Drive      | Provide the unique identifier of a SharePoint drive.     |         |
| Folder ID  | Provide the unique identifier of a Sharepoint folder Id. |         |

### List Followed Sites

List all Followed Sites

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection |                                          |         |
| Page Limit | Enter a number amount for the page size. |         |
| Page Token | Enter the token for the desired page.    |         |
| Fetch All  | Set to true to retrieve all results.     | false   |

### List Items

List Items in a Folder

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Drive      | Provide the id of the drive to list the items in.  |         |
| Folder ID  | Provide the id of the folder to list the items in. |         |

### List Items in Site List

Return all items inside the given site list

| Input         | Comments                                                                      | Default |
| ------------- | ----------------------------------------------------------------------------- | ------- |
| Connection    |                                                                               |         |
| Site Id       | Provide the unique identifier of a SharePoint site.                           |         |
| List Id       | Provide the unique identifier of a SharePoint site list.                      |         |
| Page Limit    | Enter a number amount for the page size.                                      |         |
| Page Token    | Enter the token for the desired page.                                         |         |
| Opt In Fields | Provide a comma separated list of fields to overwrite the default result set. |         |

### List Shared Documents

Lists documents shared with the user.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Site Lists

List all Site Lists

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| Site Id    | Provide the unique identifier of a SharePoint site. |         |
| Fetch All  | Set to true to retrieve all results.                | false   |

### List Sites

List all SharePoint sites

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection |                                          |         |
| Page Limit | Enter a number amount for the page size. |         |
| Page Token | Enter the token for the desired page.    |         |
| Fetch All  | Set to true to retrieve all results.     | false   |

### List Subscriptions

List all available Subscriptions

| Input                       | Comments                                                  | Default |
| --------------------------- | --------------------------------------------------------- | ------- |
| Connection                  |                                                           |         |
| Show Instance Subscriptions | Show only subscriptions for this Instance's Subscriptions | true    |

### Move a File

Move a File in a Drive

| Input                 | Comments                                                          | Default |
| --------------------- | ----------------------------------------------------------------- | ------- |
| Connection            |                                                                   |         |
| Drive                 | Provide the id of the drive to move the file in.                  |         |
| Item Id               | Provide the id of the file to move.                               |         |
| Destination Parent Id | Provide the Id of the destination parent element to move file to. |         |

### Raw Request

Send raw HTTP request to Microsoft Sharepoint

| Input                   | Comments                                                                                                                                                                                                                                     | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                              |         |
| URL                     | Input the path only (/me/followedSites), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/me/followedSites, only /me/followedSites is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                      |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                    |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                         |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                             |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                       |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                          |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                  |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                     | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                          |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                             | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                          | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                | false   |

### Rename a Folder

Rename a Folder in a Drive

| Input       | Comments                                             | Default |
| ----------- | ---------------------------------------------------- | ------- |
| Connection  |                                                      |         |
| Site Id     | Provide the id of the site to rename the folder in.  |         |
| Drive       | Provide the id of the drive to rename the folder in. |         |
| Folder ID   | Provide the id of the folder to rename.              |         |
| Folder Name | Provide the new name of the folder.                  |         |

### Search Items

Search for items across all drives in a SharePoint site

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Site Id    | Provide the id of the site to search the items in. |         |
| Query      | Provide the query to search for items by name.     |         |

### Update File

Update a file to the specified drive

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection |                                                               |         |
| Drive      | Provide the unique identifier of a SharePoint drive.          |         |
| Item Id    | Provide the unique identifier of a SharePoint item Id.        |         |
| File Data  | Provide data to be uploaded to your desired SharePoint drive. |         |

### Update Site List Subscription Expiration

Update existing Site List subscription expiration for Microsoft SharePoint

| Input                | Comments                                                                                                                                                        | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                 |         |
| Subscription ID      | Subscription ID to manage                                                                                                                                       |         |
| Expiration Date/Time | Expiration date/time for subscription. If unspecified the default will be the current date/time plus 29 days (close to the maximum permitted by the Graph API). |         |

### Upload File

Upload a file to the specified drive or folder's drive

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection |                                                               |         |
| Drive      | Provide the unique identifier of a SharePoint drive.          |         |
| File Name  | Provide a string value for the name of the new file.          |         |
| File Data  | Provide data to be uploaded to your desired SharePoint drive. |         |
| Folder ID  | Provide the unique identifier of a Sharepoint folder Id.      |         |
