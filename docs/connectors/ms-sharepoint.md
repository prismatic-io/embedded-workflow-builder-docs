---
title: Microsoft SharePoint Connector
sidebar_label: Microsoft SharePoint
description: Manage sites, drives, files, and lists in Microsoft SharePoint.
---

![Microsoft SharePoint](./assets/ms-sharepoint.png#connector-icon)
Manage sites, drives, files, and lists in Microsoft SharePoint.

## Connections

### Certificate Credentials {#certificatecredentials}

Authenticates actions in all Microsoft's Graph API services.

| Input                       | Comments                                                                                                                                                                                                                             | Default                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| Base URL                    | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints). | https://graph.microsoft.com          |
| Microsoft Entra ID Endpoint | The Microsoft Entra ID endpoint for the Microsoft Graph API. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/graph/deployments#app-registration-and-token-service-root-endpoints).                 | https://login.microsoftonline.com    |
| Tenant                      | The tenant ID or name for the Microsoft Graph API. This is the ID or name of the tenant that you are connecting to.                                                                                                                  |                                      |
| Client ID                   | Client Id of your Azure application.                                                                                                                                                                                                 |                                      |
| Private Certificate         | Your X.509 private certificate.                                                                                                                                                                                                      |                                      |
| Certificate Thumbprint      | Thumbprint of the certificate.                                                                                                                                                                                                       |                                      |
| Scopes                      | Microsoft Graph API Scopes.                                                                                                                                                                                                          | https://graph.microsoft.com/.default |

### Microsoft SharePoint OAuth 2.0 (Deprecated) {#oauth}

Authenticates actions in the Microsoft SharePoint component.

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

### OAuth 2.0 Authorization Code {#sharepointtemplatedoauth}

Authenticates actions in all Microsoft's Graph API services.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                               | Comments                                                                                                                                                                                                                                                                                 | Default                                             |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Base URL                            | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints).                                                     | https://graph.microsoft.com                         |
| Tenant URL                          | The tenant URL for the Microsoft Graph API. This is the URL of the tenant that you are connecting to. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-national-cloud#microsoft-entra-authentication-endpoints). | login.microsoftonline.com/common                    |
| Scopes                              | Microsoft Graph API permission scopes are set on the OAuth application.                                                                                                                                                                                                                  | Sites.ReadWrite.All Sites.Manage.All offline_access |
| Client ID                           | Client Id of your Azure application.                                                                                                                                                                                                                                                     |                                                     |
| Client secret value                 | Client Secret generated under 'Certificates & Secrets' in your Azure application.                                                                                                                                                                                                        |                                                     |
| Additional Authorization Parameters | Query string parameters to append to the OAuth authorization URL. Common parameters include `prompt=consent` to force the consent screen or `login_hint=user@example.com` to pre-fill the login email.                                                                                   |                                                     |

### OAuth 2.0 Client Credentials {#oauthclientcredentials}

Authenticates actions in all Microsoft's Graph API services.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                       | Comments                                                                                                                                                                                                                             | Default                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| Base URL                    | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints). | https://graph.microsoft.com          |
| Microsoft Entra ID Endpoint | The Microsoft Entra ID endpoint for the Microsoft Graph API. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/graph/deployments#app-registration-and-token-service-root-endpoints).                 | https://login.microsoftonline.com    |
| Tenant                      | The tenant ID or name for the Microsoft Graph API. This is the ID or name of the tenant that you are connecting to.                                                                                                                  |                                      |
| Client ID                   | Client Id of your Azure application.                                                                                                                                                                                                 |                                      |
| Client Secret               | Client Secret generated under 'Certificates & Secrets' in your Azure application.                                                                                                                                                    |                                      |
| Scopes                      | Microsoft Graph API Scopes.                                                                                                                                                                                                          | https://graph.microsoft.com/.default |

## Triggers

### Drive Subscription {#instancedeploywebhook}

Receive webhook notifications from SharePoint drives. Automatically creates and manages a webhook subscription when the instance is deployed, and removes the subscription when the instance is deleted.

| Input                | Comments                                                                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft SharePoint connection to use.                                                                                                             |         |
| Resource             | The Microsoft Graph resource path to monitor. Examples: /me/drive/root, /sites/{site-id}/drive/root, /drives/{drive-id}/root                            |         |
| Change Type          | The type of changes that should generate notifications. Common values: updated, created, deleted.                                                       | updated |
| Client State         | Optional validation token sent with each notification. Use to verify notifications originate from Microsoft Graph.                                      |         |
| Expiration Date Time | Optional expiration date/time for the subscription. If not provided, defaults to 3 days from now. Maximum is 30 days for SharePoint/OneDrive resources. |         |

### New and Updated Drive Items {#drivepollingtrigger}

Checks for new and updated items in a specified SharePoint drive on a configured schedule.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.  |         |
| Drive      | The unique identifier of a SharePoint drive. |         |

### New and Updated Folder Items {#folderpollingtrigger}

Checks for new and updated items in a specified folder within a SharePoint drive on a configured schedule.

| Input              | Comments                                                              | Default |
| ------------------ | --------------------------------------------------------------------- | ------- |
| Connection         | The Microsoft SharePoint connection to use.                           |         |
| Drive              | The unique identifier of a SharePoint drive.                          |         |
| Folder ID          | The ID of the folder to monitor for changes.                          |         |
| Include Subfolders | When enabled, changes in subfolders will also be tracked recursively. | false   |

### New and Updated Site Items {#pollsitechanges}

Checks for new and updated items across all drives in a SharePoint site on a configured schedule.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use. |         |
| Site Id    | The unique identifier of a SharePoint site. |         |

### Webhook {#webhook}

Receive and validate webhook requests from SharePoint for manually configured webhook subscriptions.

## Actions

### Check Item Exists {#checkitemexists}

Check if a file or folder exists in a SharePoint drive

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                         |         |
| Site Id    | Provide the id of the site to check the item in.                    |         |
| Drive      | Provide the id of the drive to check the item in.                   |         |
| Item Path  | Provide the path to the file or folder, relative to the drive root. |         |

### Create a Folder {#createfolder}

Create a Folder in a Drive

| Input          | Comments                                                      | Default |
| -------------- | ------------------------------------------------------------- | ------- |
| Connection     | The Microsoft SharePoint connection to use.                   |         |
| Site Id        | Provide the id of the site to create the folder in.           |         |
| Drive          | Provide the id of the drive to create the folder in.          |         |
| Parent Item Id | Provide the id of the parent element to create the folder in. |         |
| Folder Name    | Provide the name of the new folder.                           |         |

### Create a Subscription {#createsubscription}

Create a Subscription to notify you of changes to a resource

| Input                | Comments                                                                                          | Default |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft SharePoint connection to use.                                                       |         |
| Change Type          | The type of changes that should generate notifications. Common values: updated, created, deleted. | updated |
| Notification URL     | The URL where Microsoft Graph will deliver webhook notifications when changes occur.              |         |
| Resource             | The Microsoft Graph resource path to monitor for changes.                                         |         |
| Expiration Date Time | The date and time when the subscription will expire if not updated or renewed.                    |         |
| Client State         | An optional validation token included in each notification to verify the notification source.     |         |
| Allow Duplicates     | When true, allows creating multiple subscriptions for the same endpoint.                          | false   |

### Create Item in Site List {#createiteminsite}

Create a new item inside the given site list

| Input      | Comments                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                                                                           |         |
| Site Id    | The unique identifier of a SharePoint site.                                                                           |         |
| List Id    | The unique identifier of a SharePoint site list.                                                                      |         |
| Fields     | Key-value pairs to set as properties on the drive item. Each key represents a field name and its corresponding value. |         |

### Create Site List Subscription {#createsitelistsubscription}

Create a Site List subscription for Microsoft SharePoint

| Input                | Comments                                                                                                                                                        | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft SharePoint connection to use.                                                                                                                     |         |
| Site Id              | The unique identifier of a SharePoint site.                                                                                                                     |         |
| List Id              | The unique identifier of a SharePoint site list.                                                                                                                |         |
| Notification URL     | URL to send events of this Subscription to                                                                                                                      |         |
| Expiration Date/Time | Expiration date/time for subscription. If unspecified the default will be the current date/time plus 29 days (close to the maximum permitted by the Graph API). |         |
| Allow Duplicates     | Enable to allow more than one webhook per endpoint                                                                                                              | false   |

### Delete All Instance Subscriptions {#deleteallinstancesubscriptions}

Delete all SharePoint subscriptions pointed at this instance

| Input            | Comments                                                                                                                                                                                     | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft SharePoint connection to use.                                                                                                                                                  |         |
| Notification URL | The notification URL used when creating subscriptions for this instance. Only subscriptions with this URL will be deleted. If not provided, all subscriptions for this flow will be deleted. |         |

### Delete a Subscription {#deletesubscription}

Delete a Subscription by ID

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      | The Microsoft SharePoint connection to use.          |         |
| Subscription Id | The unique identifier of the subscription to manage. |         |

### Download File {#downloadfile}

Download a file from the specified drive

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.  |         |
| Drive      | The unique identifier of a SharePoint drive. |         |
| Item Id    | The unique identifier of a SharePoint item.  |         |

### Get Current User {#getcurrentuser}

Get the information and metadata of the user that is currently logged in

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use. |         |

### Get Drive {#getdrive}

Returns the information and metadata of a SharePoint drive

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.  |         |
| Drive      | The unique identifier of a SharePoint drive. |         |

### Get File {#getfile}

Get a file from a Drive

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.  |         |
| Drive      | The unique identifier of a SharePoint drive. |         |
| Item Id    | The unique identifier of a SharePoint item.  |         |

### Get Item from Site List {#getiteminsite}

Returns the information and metadata of the given item

| Input         | Comments                                                                    | Default |
| ------------- | --------------------------------------------------------------------------- | ------- |
| Connection    | The Microsoft SharePoint connection to use.                                 |         |
| Site Id       | The unique identifier of a SharePoint site.                                 |         |
| List Id       | The unique identifier of a SharePoint site list.                            |         |
| Item Id       | The unique identifier of a SharePoint item.                                 |         |
| Opt In Fields | Comma-separated list of fields to return. Overrides the default result set. |         |

### Get Root Site {#getrootsite}

Returns the information and metadata of the root SharePoint site in your tenant

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use. |         |

### Get Site {#getsite}

Returns the information and metadata of the given SharePoint site

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use. |         |
| Site Id    | The unique identifier of a SharePoint site. |         |

### Get Site List {#getlist}

Returns the information and metadata of an existing site list

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Microsoft SharePoint connection to use.      |         |
| Site Id    | The unique identifier of a SharePoint site.      |         |
| List Id    | The unique identifier of a SharePoint site list. |         |

### List Changes {#listchanges}

Track changes in a driveItem and its children over time.

| Input                  | Comments                                                                                                                                                                            | Default                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Connection             | The Microsoft SharePoint connection to use.                                                                                                                                         |                               |
| URL to fetch for delta | The URL to track changes in a driveItem and its children over time. You can also paste the @odata.nextLink or @odata.deltaLink from a previous response to resume tracking changes. | /drives/{drive-id}/root/delta |
| $select Parameter      | Filters properties (columns). https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#select-parameter                                                                   |                               |
| $expand Parameter      | Retrieves related resources. https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#expand-parameter                                                                    |                               |
| $top Parameter         | Sets the page size of results. https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#top-parameter                                                                     |                               |
| Fetch All              | When true, retrieves all results by automatically following pagination.                                                                                                             | false                         |

### List Drives {#listdrives}

List all drives within any given SharePoint site

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                             |         |
| Site Id    | The unique identifier of a SharePoint site.                             |         |
| Page Limit | The maximum number of results to return per page.                       |         |
| Page Token | The token for the desired page from a previous response.                |         |
| Fetch All  | When true, retrieves all results by automatically following pagination. | false   |

### List Files in Drive {#getfilesfromdrivewithpagination}

List all the files from a Drive

| Input      | Comments                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                                       |         |
| Drive      | The unique identifier of a SharePoint drive.                                      |         |
| Page Limit | The maximum number of results to return per page.                                 |         |
| Page Token | The token for the desired page from a previous response.                          |         |
| Fetch All  | When true, retrieves all results by automatically following pagination.           | false   |
| Recursive  | When true, returns files from all subfolders in addition to the specified folder. | false   |

### List Files in Drive (Deprecated) {#getfilesfromdrive}

List all the files from a Drive. This version of the action is being deprecated. Please replace action with List Files In Drive.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.  |         |
| Drive      | The unique identifier of a SharePoint drive. |         |

### List Folder Files in Drive {#getfilesfromdrivefolderwithpagination}

List all the files inside of a folder from a Drive

| Input      | Comments                                                                      | Default |
| ---------- | ----------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                                   |         |
| Drive      | The unique identifier of a SharePoint drive.                                  |         |
| Folder ID  | The unique identifier of a SharePoint folder. Leave empty to use root folder. |         |
| Page Limit | The maximum number of results to return per page.                             |         |
| Page Token | The token for the desired page from a previous response.                      |         |
| Fetch All  | When true, retrieves all results by automatically following pagination.       | false   |

### List Folder Files in Drive (Deprecated) {#getfilesfromdrivefolder}

List all the files inside of a folder from a Drive. This version of the action is being deprecated. Please replace action with List Folder Files In Drive.

| Input      | Comments                                                                      | Default |
| ---------- | ----------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                                   |         |
| Drive      | The unique identifier of a SharePoint drive.                                  |         |
| Folder ID  | The unique identifier of a SharePoint folder. Leave empty to use root folder. |         |

### List Followed Sites {#listfollowedsites}

List all Followed Sites

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                             |         |
| Page Limit | The maximum number of results to return per page.                       |         |
| Page Token | The token for the desired page from a previous response.                |         |
| Fetch All  | When true, retrieves all results by automatically following pagination. | false   |

### List Items {#listitems}

List Items in a Folder

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.        |         |
| Drive      | Provide the id of the drive to list the items in.  |         |
| Folder ID  | Provide the id of the folder to list the items in. |         |

### List Items in Site List {#getlistitemsinsite}

Return all items inside the given site list

| Input         | Comments                                                                    | Default |
| ------------- | --------------------------------------------------------------------------- | ------- |
| Connection    | The Microsoft SharePoint connection to use.                                 |         |
| Site Id       | The unique identifier of a SharePoint site.                                 |         |
| List Id       | The unique identifier of a SharePoint site list.                            |         |
| Page Limit    | The maximum number of results to return per page.                           |         |
| Page Token    | The token for the desired page from a previous response.                    |         |
| Opt In Fields | Comma-separated list of fields to return. Overrides the default result set. |         |

### List Shared Documents {#listshareddocuments}

Lists documents shared with the user.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use. |         |

### List Site Lists {#listsitelists}

List all Site Lists

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                             |         |
| Site Id    | The unique identifier of a SharePoint site.                             |         |
| Fetch All  | When true, retrieves all results by automatically following pagination. | false   |

### List Sites {#listsites}

List all SharePoint sites

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                             |         |
| Page Limit | The maximum number of results to return per page.                       |         |
| Page Token | The token for the desired page from a previous response.                |         |
| Fetch All  | When true, retrieves all results by automatically following pagination. | false   |

### List Subscriptions {#listsubscriptions}

List all available Subscriptions

| Input                       | Comments                                                                        | Default |
| --------------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection                  | The Microsoft SharePoint connection to use.                                     |         |
| Show Instance Subscriptions | When true, filters results to show only subscriptions created by this instance. | true    |

### Move a File {#movefile}

Move a File in a Drive

| Input                 | Comments                                                          | Default |
| --------------------- | ----------------------------------------------------------------- | ------- |
| Connection            | The Microsoft SharePoint connection to use.                       |         |
| Drive                 | Provide the id of the drive to move the file in.                  |         |
| Item Id               | Provide the id of the file to move.                               |         |
| Destination Parent Id | Provide the Id of the destination parent element to move file to. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Microsoft Sharepoint

| Input                   | Comments                                                                                                                                                                                                                                     | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Microsoft SharePoint connection to use.                                                                                                                                                                                                  |         |
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

### Rename a Folder {#renamefolder}

Rename a Folder in a Drive

| Input       | Comments                                             | Default |
| ----------- | ---------------------------------------------------- | ------- |
| Connection  | The Microsoft SharePoint connection to use.          |         |
| Site Id     | Provide the id of the site to rename the folder in.  |         |
| Drive       | Provide the id of the drive to rename the folder in. |         |
| Folder ID   | Provide the id of the folder to rename.              |         |
| Folder Name | Provide the new name of the folder.                  |         |

### Renew Subscription {#renewsubscription}

Extend the expiration date of an existing SharePoint subscription

| Input           | Comments                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The Microsoft SharePoint connection to use.                                                      |         |
| Subscription Id | The unique identifier of the subscription to manage.                                             |         |
| Expiration Days | Number of days to extend the subscription. Maximum is 30 days for SharePoint/OneDrive resources. | 3       |

### Search Items {#searchitems}

Search for items across all drives in a SharePoint site

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.        |         |
| Site Id    | Provide the id of the site to search the items in. |         |
| Query      | Provide the query to search for items by name.     |         |

### Update File {#updatefile}

Update a file to the specified drive

| Input      | Comments                                                                                              | Default |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                                                           |         |
| Drive      | The unique identifier of a SharePoint drive.                                                          |         |
| Item Id    | The unique identifier of a SharePoint item.                                                           |         |
| File Data  | The file content to upload to SharePoint. Reference a file from a previous step or provide file data. |         |

### Update Site List Subscription Expiration {#updatesitelistsubscriptionexpiration}

Update existing Site List subscription expiration for Microsoft SharePoint

| Input                | Comments                                                                                                                                                        | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft SharePoint connection to use.                                                                                                                     |         |
| Subscription ID      | Subscription ID to manage                                                                                                                                       |         |
| Expiration Date/Time | Expiration date/time for subscription. If unspecified the default will be the current date/time plus 29 days (close to the maximum permitted by the Graph API). |         |

### Upload File {#uploadfile}

Upload a file to the specified drive or folder's drive

| Input      | Comments                                                                                              | Default |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                                                           |         |
| Drive      | The unique identifier of a SharePoint drive.                                                          |         |
| File Name  | The name of the file including extension.                                                             |         |
| File Data  | The file content to upload to SharePoint. Reference a file from a previous step or provide file data. |         |
| Folder ID  | The unique identifier of a SharePoint folder. Leave empty to use root folder.                         |         |
