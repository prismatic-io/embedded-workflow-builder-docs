---
title: Microsoft OneDrive Connector
sidebar_label: Microsoft OneDrive
description: Manage drives, files, shared content, and monitor changes in Microsoft OneDrive.
---

![Microsoft OneDrive](./assets/ms-onedrive.png#connector-icon)
[Microsoft OneDrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage) is a cloud storage service from Microsoft that enables storing, syncing, and sharing files across devices.
This component enables managing drives, uploading and downloading files, searching content, and monitoring changes in a Microsoft OneDrive account.

## API Documentation

This component was built using the [Microsoft Graph Rest API v1.0](https://learn.microsoft.com/en-us/graph/api/resources/onedrive?view=graph-rest-1.0)

## Connections

### OAuth 2.0 {#oauth}

Authenticate requests to Microsoft OneDrive using OAuth 2.0.

<Vimeo video="907604023" />

This connection authenticates to Microsoft OneDrive with OAuth 2.0 through an Azure app registration.

#### Prerequisites

- A Microsoft Entra ID (Azure AD) tenant with an account licensed for Microsoft OneDrive
- Permission to create an app registration in that tenant

#### Setup Steps

1. In the [Azure portal](https://portal.azure.com/#home), create a new **App registration**. Under **Supported account types**, select **Any Entra ID tenant + Personal Microsoft accounts** so both work and school and personal OneDrive accounts can authenticate.
2. Open **Authentication**, add the **Web** platform, and add the OAuth 2.0 callback URL `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as a **Redirect URI**.
3. Open **Certificates & secrets** and add a new **Client secret**. Copy the secret value; it is shown only once.
4. Copy the **Application (client) ID** from the **Overview** page.
5. Open **API permissions**, click **Add a permission**, choose **Microsoft Graph**, then **Delegated permissions**, and select the permissions the integration requires. Include `offline_access`; without it refresh tokens are not issued and users must re-authenticate every hour.

#### Configure the Connection

Create a connection of type **OAuth 2.0**:

- **Client ID**: the Application (client) ID
- **Client Secret**: the client secret value
- **Scopes**: the default scopes cover files, sites and refresh tokens; add others the integration requires
- **Authorize URL** and **Token URL**: keep the defaults for a multitenant app. For a single-tenant app registration, replace both with the tenant-specific URLs.

Save the integration. Users can then authenticate through Microsoft OneDrive with OAuth 2.0.

#### App Verification and Admin Consent

Microsoft requires Azure AD app registrations used in multi-tenant deployments to complete a publisher verification process. This review confirms the app developer's identity, giving end users confidence that they are authorizing a legitimate, verified application.

Azure AD app registrations have two distinct verification concepts that affect how users experience the authentication flow.

#### Publisher Verification

**Complete publisher verification before deploying to end users.** Without it, the Microsoft consent screen displays **"Unverified"** next to the app name. This reduces user trust and may prevent users in organizations with strict Azure AD policies from being able to authorize the app at all.

To verify the publisher:

1. Ensure the organization has a [Microsoft Partner Network (MPN) account](https://partner.microsoft.com/en-US/)
2. In the [Microsoft Entra Admin Center](https://entra.microsoft.com/), open the app registration
3. Under **Branding & properties**, click **Add a verified publisher**
4. Enter the MPN ID and confirm

Once verified, the consent screen displays the organization name with a verified badge instead of "Unverified."

#### Admin Consent

Apps requesting **application permissions** (permissions that act without a signed-in user) or high-privilege **delegated permissions** require admin consent before any user in a Microsoft 365 tenant can authenticate. Without admin consent, users see a **"Need admin approval"** error. Delegated permissions rarely need admin consent unless classified as high privilege; see the [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference) to check which do.

A tenant administrator can grant consent using either method:

**Method 1: Admin Consent URL**

Navigate to the following URL, replacing `{tenant}` with the Directory tenant ID and `{client_id}` with the Application client ID:

    https://login.microsoftonline.com/{tenant}/adminconsent?client_id={client_id}

**Method 2: Microsoft Entra Admin Center**

1. Navigate to [Microsoft Entra Admin Center](https://entra.microsoft.com/) → **Enterprise applications**
2. Select the app registration
3. Under **Permissions**, click **Grant admin consent for [organization name]**

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                | Default                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Microsoft OneDrive.                                                                                                                                                 | https://login.microsoftonline.com/common/oauth2/v2.0/authorize                                                                                    |
| Token URL     | The OAuth 2.0 Token URL for Microsoft OneDrive.                                                                                                                                                         | https://login.microsoftonline.com/common/oauth2/v2.0/token                                                                                        |
| Scopes        | Space-separated list of Microsoft Graph permission scopes. Scopes are configured on the Azure AD application registration. [Learn more](https://learn.microsoft.com/en-us/graph/permissions-reference). | https://graph.microsoft.com/Files.Read https://graph.microsoft.com/Files.ReadWrite https://graph.microsoft.com/Sites.ReadWrite.All offline_access |
| Client ID     | The Application (client) ID from the Azure AD app registration. [Learn more](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app).                                        |                                                                                                                                                   |
| Client Secret | The client secret value generated in the Azure AD app registration. [Learn more](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app).                                    |                                                                                                                                                   |

## Triggers

### Drive Subscription {#instancedeploywebhook}

Receive webhook notifications from OneDrive drives. Automatically creates and manages a webhook subscription when the instance is deployed, and removes the subscription when the instance is deleted. Supports scheduled renewal to keep the subscription active.

| Input                | Comments                                                                                                                                                                                                                                                  | Default        |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection           | The Microsoft OneDrive connection to use.                                                                                                                                                                                                                 |                |
| Resource             | The Microsoft Graph resource path to monitor. Examples: /me/drive/root, /drives/{drive-id}/root                                                                                                                                                           | /me/drive/root |
| Change Type          | The type of changes to monitor. OneDrive primarily supports 'updated'.                                                                                                                                                                                    | updated        |
| Client State         | Optional validation token sent with each notification. Use to verify notifications originate from Microsoft Graph.                                                                                                                                        |                |
| Expiration Date Time | Optional expiration date/time for the subscription. If not provided, defaults to about 7 days from now. Set a schedule on the trigger to renew the subscription before it expires. Maximum is just under 30 days (42,300 minutes) for OneDrive resources. |                |

### Webhook {#webhook}

Receive and validate webhook requests from OneDrive for manually configured webhook subscriptions.

## Actions

### Create Subscription {#createsubscription}

Creates a subscription to receive notifications about changes to a resource.

| Input                | Comments                                                                                                                                                                                                        | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft OneDrive connection to use.                                                                                                                                                                       |         |
| Change Type          | The type of changes that should generate notifications for this subscription. OneDrive only supports 'updated'.                                                                                                 | updated |
| Notification URL     | The URL where webhook notifications will be delivered. Must be accessible from Microsoft Graph.                                                                                                                 |         |
| Resource             | The Microsoft Graph resource path to monitor for changes. See [Microsoft Graph documentation](https://learn.microsoft.com/en-us/graph/api/resources/subscription?view=graph-rest-1.0) for valid resource paths. |         |
| Expiration Date Time | The date and time when the subscription expires in ISO 8601 format. Maximum is just under 30 days (42,300 minutes) from now for OneDrive resources.                                                             |         |
| Client State         | An optional validation token that is passed back in each notification for verification purposes.                                                                                                                |         |
| Allow Duplicates     | When true, allows multiple subscriptions for the same endpoint.                                                                                                                                                 | false   |

### Delete All Instanced Subscriptions {#deletesubscriptions}

Deletes all existing subscriptions for this instance.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use. |         |

### Delete File {#deletefile}

Deletes a file by drive ID and item ID.

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.                 |         |
| Drive ID   | The unique identifier of the drive.                       |         |
| Item ID    | The unique identifier of the drive item (file or folder). |         |

### Delete Subscription {#deletesubscription}

Deletes a subscription by ID.

| Input           | Comments                                   | Default |
| --------------- | ------------------------------------------ | ------- |
| Connection      | The Microsoft OneDrive connection to use.  |         |
| Subscription ID | The unique identifier of the subscription. |         |

### Download File {#downloadfile}

Downloads a file from the current user's drive.

| Input         | Comments                                                                                      | Default |
| ------------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Microsoft OneDrive connection to use.                                                     |         |
| File Location | Provide a leading slash followed by the location of the file within the current user's drive. |         |
| Timeout       | The maximum time in milliseconds to wait for a response.                                      |         |

### Get Drive {#getdrive}

Gets the information and metadata of a drive.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use. |         |
| Drive ID   | The unique identifier of the drive.       |         |

### Get Item {#getitembyid}

Returns the information and metadata of an existing item.

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.                 |         |
| Drive ID   | The unique identifier of the drive.                       |         |
| Item ID    | The unique identifier of the drive item (file or folder). |         |

### Get Item by Path {#getitem}

Gets the information and metadata of an item by its path in the current user's OneDrive.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Connection    | The Microsoft OneDrive connection to use.                               |         |
| File Location | Provide a leading slash, followed by the location and name of the file. |         |

### Get Site {#getsite}

Gets the information and metadata of a given site.

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use.     |         |
| Site ID    | The unique identifier of the SharePoint site. |         |

### List Changes {#listchanges}

Tracks changes in a driveItem and its children over time.

| Input            | Comments                                                                                                                                                                                                                                                                                         | Default                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| Connection       | The Microsoft OneDrive connection to use.                                                                                                                                                                                                                                                        |                               |
| Delta URL        | The URL to track changes in a driveItem and its children over time. The @odata.nextLink or @odata.deltaLink from a previous response can also be used to resume tracking changes. See [Microsoft Graph delta query documentation](https://learn.microsoft.com/en-us/graph/delta-query-overview). | /drives/{drive-id}/root/delta |
| Query Parameters | OData system query options to shape the delta query results.                                                                                                                                                                                                                                     |                               |
| Select           | Comma-separated list of properties to include in the response. See [Microsoft Graph $select documentation](https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#select).                                                                                                           |                               |
| Expand           | Comma-separated list of related resources to include in the response. See [Microsoft Graph $expand documentation](https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#expand).                                                                                                    |                               |
| Top              | The maximum number of results to return per page. See [Microsoft Graph $top documentation](https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#top).                                                                                                                              |                               |

### List Children {#listchildren}

Returns all child elements on a given drive item.

| Input      | Comments                                                                                                                                               | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft OneDrive connection to use.                                                                                                              |         |
| Drive ID   | The unique identifier of the drive.                                                                                                                    |         |
| Item ID    | The unique identifier of the drive item (file or folder).                                                                                              |         |
| Fetch All  | When true, automatically fetches all pages of results by following @odata.nextLink. Page Limit and Page Token inputs are ignored when this is enabled. | false   |
| Pagination | Page-size and page-token controls for paging through results.                                                                                          |         |
| Page Limit | The maximum number of results to return per page.                                                                                                      |         |
| Page Token | The $skiptoken value from the @odata.nextLink of a previous response, used to retrieve the next page of results.                                       |         |

### List Drives By Group {#listdrivesbygroup}

Returns a list of all drives available to the given group.

| Input      | Comments                                                                                                                                               | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft OneDrive connection to use.                                                                                                              |         |
| Group ID   | The unique identifier of the Microsoft 365 group.                                                                                                      |         |
| Fetch All  | When true, automatically fetches all pages of results by following @odata.nextLink. Page Limit and Page Token inputs are ignored when this is enabled. | false   |
| Pagination | Page-size and page-token controls for paging through results.                                                                                          |         |
| Page Limit | The maximum number of results to return per page.                                                                                                      |         |
| Page Token | The $skiptoken value from the @odata.nextLink of a previous response, used to retrieve the next page of results.                                       |         |

### List Drives By Site {#listdrivesbysite}

Returns a list of all drives available to the given site.

| Input      | Comments                                                                                                                                               | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft OneDrive connection to use.                                                                                                              |         |
| Site ID    | The unique identifier of the SharePoint site.                                                                                                          |         |
| Fetch All  | When true, automatically fetches all pages of results by following @odata.nextLink. Page Limit and Page Token inputs are ignored when this is enabled. | false   |
| Pagination | Page-size and page-token controls for paging through results.                                                                                          |         |
| Page Limit | The maximum number of results to return per page.                                                                                                      |         |
| Page Token | The $skiptoken value from the @odata.nextLink of a previous response, used to retrieve the next page of results.                                       |         |

### List Drives By User {#listdrivesbyuser}

Returns a list of all drives available to the given user.

| Input            | Comments                                                                                                                                               | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection       | The Microsoft OneDrive connection to use.                                                                                                              |         |
| User ID or Email | The unique identifier or email address of the user.                                                                                                    |         |
| Fetch All        | When true, automatically fetches all pages of results by following @odata.nextLink. Page Limit and Page Token inputs are ignored when this is enabled. | false   |
| Pagination       | Page-size and page-token controls for paging through results.                                                                                          |         |
| Page Limit       | The maximum number of results to return per page.                                                                                                      |         |
| Page Token       | The $skiptoken value from the @odata.nextLink of a previous response, used to retrieve the next page of results.                                       |         |

### List Files Shared With Me (Deprecation Notice) {#listsharedfiles}

Returns all files shared with the current account. Deprecated: the underlying Microsoft Graph endpoint is degraded and scheduled for removal around November 2026, and may return incomplete results. Use the "List Shared" action instead.

| Input      | Comments                                                                                                                                               | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft OneDrive connection to use.                                                                                                              |         |
| Fetch All  | When true, automatically fetches all pages of results by following @odata.nextLink. Page Limit and Page Token inputs are ignored when this is enabled. | false   |
| Pagination | Page-size and page-token controls for paging through results.                                                                                          |         |
| Page Limit | The maximum number of results to return per page.                                                                                                      |         |
| Page Token | The $skiptoken value from the @odata.nextLink of a previous response, used to retrieve the next page of results.                                       |         |

### List Groups {#listgroups}

Returns a list of all groups the user has access to.

| Input      | Comments                                                                                                                                               | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft OneDrive connection to use.                                                                                                              |         |
| Fetch All  | When true, automatically fetches all pages of results by following @odata.nextLink. Page Limit and Page Token inputs are ignored when this is enabled. | false   |
| Pagination | Page-size and page-token controls for paging through results.                                                                                          |         |
| Page Limit | The maximum number of results to return per page.                                                                                                      |         |
| Page Token | The $skiptoken value from the @odata.nextLink of a previous response, used to retrieve the next page of results.                                       |         |

### List Items In Directory {#listdriveitems}

Returns a list of all items in the given directory.

| Input      | Comments                                                                                                                                               | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft OneDrive connection to use.                                                                                                              |         |
| Directory  | The directory path of the file. Use a forward slash (/) to access the root directory.                                                                  |         |
| Fetch All  | When true, automatically fetches all pages of results by following @odata.nextLink. Page Limit and Page Token inputs are ignored when this is enabled. | false   |
| Pagination | Page-size and page-token controls for paging through results.                                                                                          |         |
| Page Limit | The maximum number of results to return per page.                                                                                                      |         |
| Page Token | The $skiptoken value from the @odata.nextLink of a previous response, used to retrieve the next page of results.                                       |         |

### List My Drives {#listdrives}

Returns a list of all drives available to the current user.

| Input      | Comments                                                                                                                                               | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft OneDrive connection to use.                                                                                                              |         |
| Fetch All  | When true, automatically fetches all pages of results by following @odata.nextLink. Page Limit and Page Token inputs are ignored when this is enabled. | false   |
| Pagination | Page-size and page-token controls for paging through results.                                                                                          |         |
| Page Limit | The maximum number of results to return per page.                                                                                                      |         |
| Page Token | The $skiptoken value from the @odata.nextLink of a previous response, used to retrieve the next page of results.                                       |         |

### List Shared {#listshared}

Lists shared items in SharePoint or OneDrive.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Microsoft OneDrive connection to use. |         |

### List Sites {#listsites}

Returns a list of all sites available to the current user.

| Input      | Comments                                                                                                                                               | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft OneDrive connection to use.                                                                                                              |         |
| Fetch All  | When true, automatically fetches all pages of results by following @odata.nextLink. Page Limit and Page Token inputs are ignored when this is enabled. | false   |
| Pagination | Page-size and page-token controls for paging through results.                                                                                          |         |
| Page Limit | The maximum number of results to return per page.                                                                                                      |         |
| Page Token | The $skiptoken value from the @odata.nextLink of a previous response, used to retrieve the next page of results.                                       |         |

### List Subscriptions {#listsubscriptions}

Lists all available subscriptions.

| Input                       | Comments                                                           | Default |
| --------------------------- | ------------------------------------------------------------------ | ------- |
| Connection                  | The Microsoft OneDrive connection to use.                          |         |
| Show Instance Subscriptions | When true, shows only subscriptions associated with this instance. | true    |

### Move File {#movefile}

Moves the given file to a new location.

| Input            | Comments                                                               | Default |
| ---------------- | ---------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft OneDrive connection to use.                              |         |
| Current Location | Provide a leading slash, followed by the location and name of the file |         |
| New Location     | Provide a leading slash, followed by the new location of the file.     |         |
| New File Name    | The new name for the file.                                             |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to Microsoft OneDrive.

| Input                   | Comments                                                                                                                                                                                                             | Default         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection              | The Microsoft OneDrive connection to use.                                                                                                                                                                            |                 |
| URL                     | Input the path only (/me/drive), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/me/drive, only /me/drive is entered in this field. |                 |
| Method                  | The HTTP method to use.                                                                                                                                                                                              |                 |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                            |                 |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                 | <code>[]</code> |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                     | <code>[]</code> |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                               | <code>[]</code> |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                  | <code>[]</code> |
| Header                  | A list of headers to send with the request.                                                                                                                                                                          | <code>[]</code> |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                             | json            |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                  |                 |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                  | 0               |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                     | false           |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                  | 0               |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                        | false           |

### Renew Subscription {#renewsubscription}

Extends the expiration date of an existing OneDrive subscription.

| Input           | Comments                                                                                                                                      | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Microsoft OneDrive connection to use.                                                                                                     |         |
| Subscription ID | The unique identifier of the subscription.                                                                                                    |         |
| Expiration Days | Number of days to extend the subscription (1-30). Renewals are capped at the Microsoft Graph maximum for drive resources, just under 30 days. | 3       |

### Search Drive {#searchdrive}

Searches the current drive for a string of text.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Microsoft OneDrive connection to use.        |         |
| Search     | The text to search for within the current drive. |         |

### Search Users {#searchuser}

Finds the information and metadata of an existing user.

| Input            | Comments                                            | Default |
| ---------------- | --------------------------------------------------- | ------- |
| Connection       | The Microsoft OneDrive connection to use.           |         |
| User ID or Email | The unique identifier or email address of the user. |         |

### Update File {#updatefile}

Updates the information and metadata of a given file.

| Input           | Comments                                                                                      | Default         |
| --------------- | --------------------------------------------------------------------------------------------- | --------------- |
| Connection      | The Microsoft OneDrive connection to use.                                                     |                 |
| File Location   | Provide a leading slash, followed by the location and name of the file.                       |                 |
| New File Name   | The new name for the file.                                                                    |                 |
| New File Path   | The path to the desired SharePoint resource. The root directory does not need to be included. |                 |
| Optional Values | Optional key-value pairs to include in the request body.                                      | <code>[]</code> |

### Upload File {#uploadfile}

Uploads a file to the connected drive.

| Input         | Comments                                                                    | Default |
| ------------- | --------------------------------------------------------------------------- | ------- |
| Connection    | The Microsoft OneDrive connection to use.                                   |         |
| File Location | Provide a leading slash, followed by the location and name of the new file. |         |
| File Data     | The binary content of the file to upload.                                   |         |
| Timeout       | The maximum time in milliseconds to wait for a response.                    |         |
