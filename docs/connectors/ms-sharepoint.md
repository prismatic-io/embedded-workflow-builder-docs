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

### Microsoft SharePoint OAuth 2.0 (Deprecated) {#oauth}

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

### OAuth 2.0 Authorization Code {#sharepointtemplatedoauth}

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
