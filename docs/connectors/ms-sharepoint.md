---
title: Microsoft SharePoint Connector
sidebar_label: Microsoft SharePoint
description: Interact with sites, drives, and items connected to your instance of Microsoft SharePoint.
---

![Microsoft SharePoint](./assets/ms-sharepoint.png#connector-icon)
Interact with sites, drives, and items connected to your instance of Microsoft SharePoint.

## Connections

### Certificate Credentials

Authenticates actions in all Microsoft's Graph API services.

#### App Registration Requirements

First, create an app registration in Microsoft Entra by following the steps in the [OAuth connection guide](#creating-an-app-registration). Then configure the following **Microsoft Graph Application permissions**:

**Site Operations:**

- `Sites.Read.All` - Read items in all site collections
- `Sites.ReadWrite.All` - Read and write items in all site collections
- `Sites.Manage.All` - Create, edit, and delete items and lists in all site collections
- `Sites.FullControl.All` - Full control of all site collections

**File Operations:**

- `Files.Read.All` - Read files in all site collections
- `Files.ReadWrite.All` - Read and write files in all site collections

**List Operations:**

- `Sites.ReadWrite.All` - Required for list operations
- `Sites.Manage.All` - For creating and managing lists

**User and Group Access:**

- `User.Read.All` - Read all users' profiles
- `Group.Read.All` - Read all groups

#### Certificate Requirements

Before configuring certificate credentials, ensure:

- Certificate issued by a Certificate Authority (CA) for production, or self-signed for development
- RSA key size: minimum 2048 bits (4096 bits recommended)
- Certificate in X.509 format
- Public key formats: .cer, .pem, or .crt
- Private key in PEM or PKCS#12 format

#### Registering Certificate with Azure

1. Ensure app registration is complete with required permissions
2. Navigate to **Certificates & Secrets** in the app registration
3. Select the **Certificates** tab
4. Click **Upload certificate**
5. Select the public certificate file (.cer, .pem, or .crt)
6. Add an optional description
7. Click **Add** to upload

After upload, note these values:

- **Certificate Thumbprint** - SHA-1 hash (e.g., "931E8F84B98A4B5F93AD609FD5E8D0BA1AB90F87")
- **Start Date** and **Expiration Date**
- **Certificate ID** - Automatically generated

#### Connection Configuration

Configure the following fields:

- **Tenant ID**: Azure AD Directory ID from app registration
- **Client ID**: Application ID from app registration
- **Certificate Thumbprint**: SHA-1 thumbprint from uploaded certificate (remove spaces)
- **Private Key**: Certificate private key in PEM format
- **Scope**: `https://graph.microsoft.com/.default` for application permissions

#### Private Key Format

The private key must be in PEM format with appropriate headers:

```
-----BEGIN PRIVATE KEY-----
[base64 encoded private key]
-----END PRIVATE KEY-----
```

Or for RSA keys:

```
-----BEGIN RSA PRIVATE KEY-----
[base64 encoded RSA private key]
-----END RSA PRIVATE KEY-----
```

| Input                       | Comments                                                                                                                                                                                                                             | Default                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| Base URL                    | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints). | https://graph.microsoft.com          |
| Microsoft Entra ID Endpoint | The Microsoft Entra ID endpoint for the Microsoft Graph API. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/graph/deployments#app-registration-and-token-service-root-endpoints).                 | https://login.microsoftonline.com    |
| Tenant                      | The tenant ID or name for the Microsoft Graph API. This is the ID or name of the tenant that you are connecting to.                                                                                                                  |                                      |
| Client ID                   | Client Id of your Azure application.                                                                                                                                                                                                 |                                      |
| Private Certificate         | Your X.509 private certificate.                                                                                                                                                                                                      |                                      |
| Certificate Thumbprint      | Thumbprint of the certificate.                                                                                                                                                                                                       |                                      |
| Scopes                      | Microsoft Graph API Scopes.                                                                                                                                                                                                          | https://graph.microsoft.com/.default |

### Microsoft SharePoint OAuth 2.0 (Deprecated)

Authenticates actions in the Microsoft SharePoint component.

#### Creating an App Registration

Once you have an instance of Microsoft SharePoint licensed to your account, you will need to create and configure a new "App Registration" within your [Azure Active Directory tenant](https://portal.azure.com/#home).

1. Navigate to [Microsoft Entra](https://entra.microsoft.com/) **Identity** > **Applications** > **App registrations**
2. Select **New registration**
3. Configure the basic settings:
   - **Name**: Provide a descriptive name for the application
   - **Supported account types**: Select **Accounts in any organizational directory (Any Azure AD directory - Multitenant)**
   - **Redirect URI**: Select **Web** platform and add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Click **Register** to create the app registration

#### Obtaining Application Credentials

After registration, navigate to the **Overview** page and note:

- **Application (client) ID** - This will be the Client ID
- **Directory (tenant) ID** - Required for certain connection types

#### API Permissions Configuration

1. Navigate to **API Permissions**
2. Click **Add a permission**
3. Select **SharePoint** for SharePoint-specific operations
4. Choose **Delegated permissions** for user-authenticated flows
5. Select the following permissions:

**Essential Scopes:**

- `offline_access` - **Required** for refresh tokens (without this, users re-authenticate every hour)

**Site Operations:**

- `AllSites.Read` - Read items in all site collections
- `AllSites.Write` - Edit or delete items in all site collections
- `AllSites.Manage` - Create, edit and delete items and lists in all site collections
- `AllSites.FullControl` - Full control of all site collections

**File Operations:**

- `MyFiles.Read` - Read user files
- `MyFiles.Write` - Read and write user files
- `AllSites.Read` - Read files in all sites
- `AllSites.Write` - Read and write files in all sites

**List Operations:**

- `AllSites.Write` - Required for list item operations
- `AllSites.Manage` - For creating and managing lists

**User Profile:**

- `User.Read.All` - Read all users' profiles
- `User.ReadBasic.All` - Read all users' basic profiles

6. Click **Add permissions**
7. **Important**: Click **Grant admin consent** to activate the permissions

#### Creating Client Secret

1. Navigate to **Certificates & Secrets** in the app registration
2. Select the **Client secrets** tab
3. Click **New client secret**
4. Provide a description and select expiration period
5. Click **Add**
6. **Important**: Copy the secret **Value** immediately - it cannot be retrieved later

#### Connection Configuration

Configure the following fields:

- **Client ID**: Application ID from app registration
- **Client Secret**: Secret value created above
- **Authorize URL**: Default provided, or tenant-specific URL if not using multitenant
- **Token URL**: Default provided, or tenant-specific URL if not using multitenant

#### Tenant-Specific URLs

If the app registration is not configured as multitenant, replace the default URLs with tenant-specific versions:

- **Authorize URL**: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/authorize`
- **Token URL**: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token`

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

Authenticates actions in all Microsoft's Graph API services.

The templated OAuth flow enables user authentication with SharePoint to access data on their behalf.

#### App Registration

First, create an app registration in Microsoft Entra by following the steps in the [OAuth connection guide](#creating-an-app-registration).

#### Permissions

Configure **SharePoint Delegated permissions** in the app registration:

- Select all permissions required for the integration
- Grant admin consent for the organization
- Include `offline_access` scope for refresh token support

#### Creating Client Secret

1. Navigate to **Certificates & Secrets** in the app registration
2. Click **New client secret**
3. Provide a description and select expiration period
4. Click **Add**
5. Copy the secret **Value** (not the Secret ID)

#### Connection Configuration

Configure the following fields:

- **Client ID**: Application ID from app registration
- **Client Secret**: Secret value created above

For non-multitenant applications, replace the default URLs:

- **Authorize URL**: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/authorize`
- **Token URL**: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token`

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                                                                                                                                                 | Default                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Base URL            | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints).                                                     | https://graph.microsoft.com                         |
| Tenant URL          | The tenant URL for the Microsoft Graph API. This is the URL of the tenant that you are connecting to. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-national-cloud#microsoft-entra-authentication-endpoints). | login.microsoftonline.com/common                    |
| Scopes              | Microsoft Graph API permission scopes are set on the OAuth application.                                                                                                                                                                                                                  | Sites.ReadWrite.All Sites.Manage.All offline_access |
| Client ID           | Client Id of your Azure application.                                                                                                                                                                                                                                                     |                                                     |
| Client secret value | Client Secret generated under 'Certificates & Secrets' in your Azure application.                                                                                                                                                                                                        |                                                     |

### OAuth 2.0 Client Credentials

Authenticates actions in all Microsoft's Graph API services.

#### App Registration

First, create an app registration in Microsoft Entra by following the steps in the [OAuth connection guide](#creating-an-app-registration). Then configure the following **Microsoft Graph Application permissions** for app only authentication:

**Site Operations:**

- `Sites.Read.All` - Read items in all site collections
- `Sites.ReadWrite.All` - Read and write items in all site collections
- `Sites.Manage.All` - Create, edit, and delete items and lists in all site collections
- `Sites.FullControl.All` - Full control of all site collections

**File Operations:**

- `Files.Read.All` - Read files in all site collections
- `Files.ReadWrite.All` - Read and write files in all site collections

**List Operations:**

- `Sites.ReadWrite.All` - Required for list operations
- `Sites.Manage.All` - For creating and managing lists

**User and Group Access:**

- `User.Read.All` - Read all users' profiles
- `Group.Read.All` - Read all groups

**Important**: Grant admin consent for all configured permissions.

#### Creating Client Secret

1. Navigate to **Certificates & Secrets** in the app registration
2. Select the **Client secrets** tab
3. Click **New client secret**
4. Provide a description and select expiration period
5. Click **Add**
6. **Important**: Copy the secret **Value** immediately - it cannot be retrieved later

#### Connection Configuration

Configure the following fields:

- **Tenant ID**: Azure AD Directory ID from app registration
- **Client ID**: Application ID from app registration
- **Client Secret**: Secret value created above
- **Scope**: `https://graph.microsoft.com/.default` for application permissions

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

### Drive Changes

Periodically retrieves changes from a specified drive of a site on a configured schedule.

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Connection |                                                      |         |
| Drive      | Provide the unique identifier of a SharePoint drive. |         |

### Folder Changes

Periodically retrieves changes from a specified folder of a drive on a configured schedule.

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Connection |                                                      |         |
| Drive      | Provide the unique identifier of a SharePoint drive. |         |
| Folder ID  | The ID of the folder to monitor for changes.         |         |

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
