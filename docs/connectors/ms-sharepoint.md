---
title: Microsoft SharePoint Connector
sidebar_label: Microsoft SharePoint
description: Manage sites, drives, files, and lists in Microsoft SharePoint, and react to drive, folder, and site item changes with polling and webhook triggers.
---

![Microsoft SharePoint](./assets/ms-sharepoint.png#connector-icon)
[Microsoft SharePoint](https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration?ms.officeurl=sharepoint&rtc=1) is a web-based document management and collaboration platform that integrates with Microsoft 365.
This component enables managing sites, drives, files, and lists within SharePoint.

## API Documentation

This component was built using the [Microsoft Graph Rest API v1.0](https://learn.microsoft.com/en-us/graph/api/resources/sharepoint?view=graph-rest-1.0)

## Connections

### Certificate Credentials {#certificatecredentials}

Authenticates actions in all Microsoft's Graph API services.

#### Prerequisites

- A licensed instance of Microsoft SharePoint
- Permission to create an app registration and grant admin consent in the Microsoft Entra tenant
- A certificate that meets these requirements:
  - Issued by a Certificate Authority (CA) for production, or self-signed for development
  - RSA key size: minimum 2048 bits (4096 bits recommended)
  - X.509 format
  - Public key formats: .cer, .pem, or .crt
  - Private key in PEM or PKCS#12 format

#### Setup Steps

1. Create an app registration in Microsoft Entra by following the steps in the [OAuth 2.0 (Deprecated) connection guide](#oauth)
2. Configure the following **Microsoft Graph Application permissions**:

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

3. Grant admin consent for all configured permissions
4. Navigate to **Certificates & Secrets** in the app registration
5. Select the **Certificates** tab
6. Click **Upload certificate**
7. Select the public certificate file (.cer, .pem, or .crt)
8. Add an optional description
9. Click **Add** to upload

After upload, note these values:

- **Certificate Thumbprint** - SHA-1 hash (e.g., "931E8F84B98A4B5F93AD609FD5E8D0BA1AB90F87")
- **Start Date** and **Expiration Date**
- **Certificate ID** - Automatically generated

#### Configure the Connection

Create a connection of type **Certificate Credentials**:

- **Base URL**: Keep the default `https://graph.microsoft.com`, or enter the Microsoft Graph root endpoint for the national cloud the tenant uses
- **Microsoft Entra ID Endpoint**: Keep the default `https://login.microsoftonline.com`, or enter the token service endpoint for the national cloud the tenant uses
- **Tenant**: Directory (tenant) ID or tenant name from the app registration
- **Client ID**: Application ID from app registration
- **Private Certificate**: Certificate private key in PEM format
- **Certificate Thumbprint**: SHA-1 thumbprint from uploaded certificate (remove spaces)
- **Scopes**: `https://graph.microsoft.com/.default` for application permissions (the default)

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

### OAuth 2.0 Authorization Code {#sharepointtemplatedoauth}

Authenticates actions in all Microsoft's Graph API services.

<Vimeo video="907604023" />

The templated OAuth flow enables user authentication with SharePoint to access data on their behalf.

#### Prerequisites

- A licensed instance of Microsoft SharePoint
- Permission to create an app registration in the [Microsoft Entra admin center](https://entra.microsoft.com/)

#### Setup Steps

1. Create an app registration in Microsoft Entra by following the steps in the [OAuth 2.0 (Deprecated) connection guide](#oauth)
2. Configure **Microsoft Graph Delegated permissions** in the app registration:
   - Select all permissions required for the integration
   - Grant admin consent for the organization
   - Include `offline_access` scope for refresh token support
3. Navigate to **Certificates & Secrets** in the app registration
4. Click **New client secret**
5. Provide a description and select expiration period
6. Click **Add**
7. Copy the secret **Value** (not the Secret ID)

#### Configure the Connection

Create a connection of type **OAuth 2.0 Authorization Code**:

- **Base URL**: Keep the default `https://graph.microsoft.com`, or enter the Microsoft Graph root endpoint for the national cloud the tenant uses
- **Tenant URL**: For single-tenant apps, set **Tenant URL** to `login.microsoftonline.com/{tenant-id}` (default `login.microsoftonline.com/common`).
- **Scopes**: Space-separated permission scopes. The default is `Sites.ReadWrite.All Sites.Manage.All offline_access`
- **Client ID**: Application ID from app registration
- **Client secret value**: Secret value created above
- **Additional Authorization Parameters**: Optional query string parameters appended to the authorization URL, such as `prompt=consent`

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

<Vimeo video="907604023" />

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

#### Prerequisites

- A licensed instance of Microsoft SharePoint
- Permission to create an app registration and grant admin consent in the Microsoft Entra tenant

#### Setup Steps

1. Create an app registration in Microsoft Entra by following the steps in the [OAuth 2.0 (Deprecated) connection guide](#oauth)
2. Configure the following **Microsoft Graph Application permissions** for app only authentication:

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

3. Grant admin consent for all configured permissions
4. Navigate to **Certificates & Secrets** in the app registration
5. Select the **Client secrets** tab
6. Click **New client secret**
7. Provide a description and select expiration period
8. Click **Add**
9. Copy the secret **Value** immediately; it cannot be retrieved later

#### Configure the Connection

Create a connection of type **OAuth 2.0 Client Credentials**:

- **Base URL**: Keep the default `https://graph.microsoft.com`, or enter the Microsoft Graph root endpoint for the national cloud the tenant uses
- **Microsoft Entra ID Endpoint**: Keep the default `https://login.microsoftonline.com`, or enter the token service endpoint for the national cloud the tenant uses
- **Tenant**: Directory (tenant) ID or tenant name from the app registration
- **Client ID**: Application ID from app registration
- **Client Secret**: Secret value created above
- **Scopes**: `https://graph.microsoft.com/.default` for application permissions (the default)

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

### OAuth 2.0 (Deprecated) {#oauth}

Authenticate requests to Microsoft SharePoint using OAuth 2.0.

:::warning[Deprecated]
This connection is deprecated. Use the **OAuth 2.0 Authorization Code** connection instead.
:::

<Vimeo video="907604023" />

This connection authenticates to Microsoft SharePoint with OAuth 2.0 through a Microsoft Entra app registration.

#### Prerequisites

- A licensed instance of Microsoft SharePoint
- Permission to create an app registration in the [Microsoft Entra admin center](https://entra.microsoft.com/)

#### Setup Steps

1. Navigate to [Microsoft Entra](https://entra.microsoft.com/) **Identity** > **Applications** > **App registrations**
2. Select **New registration**
3. Configure the basic settings:
   - **Name**: Provide a descriptive name for the application
   - **Supported account types**: Select **Accounts in any organizational directory (Any Azure AD directory - Multitenant)**
   - **Redirect URI**: Select **Web** platform and add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Click **Register** to create the app registration
5. On the **Overview** page, copy the **Application (client) ID**. Note the **Directory (tenant) ID** as well; single-tenant apps and the client credentials and certificate connections require it.
6. Navigate to **API Permissions** and click **Add a permission**
7. Select **Microsoft Graph**, choose **Delegated permissions**, and select the permissions the integration requires (listed below)
8. Click **Add permissions**, then click **Grant admin consent** to activate the permissions
9. Navigate to **Certificates & Secrets**, select the **Client secrets** tab, and click **New client secret**
10. Provide a description, select an expiration period, and click **Add**
11. Copy the secret **Value** immediately; it cannot be retrieved later

**Essential Scopes:**

- `offline_access` - **Required** for refresh tokens (without this, users re-authenticate every hour)

**Site Operations:**

- `Sites.Read.All` - Read items in all site collections
- `Sites.ReadWrite.All` - Read and write items in all site collections
- `Sites.Manage.All` - Create, edit, and delete items and lists in all site collections
- `Sites.FullControl.All` - Full control of all site collections

**File Operations:**

- `Files.Read.All` - Read all files the signed-in user can access
- `Files.ReadWrite.All` - Read and write all files the signed-in user can access

**List Operations:**

- `Sites.ReadWrite.All` - Required for list item operations
- `Sites.Manage.All` - For creating and managing lists

**User Profile:**

- `User.Read.All` - Read all users' profiles
- `User.ReadBasic.All` - Read all users' basic profiles

#### Configure the Connection

Create a connection of type **OAuth 2.0 (Deprecated)**:

- **Base URL**: Keep the default `https://graph.microsoft.com`, or enter the Microsoft Graph root endpoint for the national cloud the tenant uses
- **Authorize URL** and **Token URL**: Keep the defaults for a multitenant app. For a single-tenant app registration, replace them with `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/authorize` and `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token`
- **Scopes**: Space-separated permission scopes. The default is `Sites.ReadWrite.All Sites.Manage.All offline_access`; add others the integration requires
- **Client ID**: The Application (client) ID from the app registration
- **Client Secret**: The client secret value created above

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

<Vimeo video="907604023" />

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                                                                                                                                           | Default                                                        |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Base URL      | The base URL for the Microsoft Graph API. National cloud deployments use a different root endpoint; see [Microsoft Graph national cloud deployments](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints).                                                                               | https://graph.microsoft.com                                    |
| Authorize URL | The OAuth 2.0 authorization endpoint of the Microsoft identity platform. Replace common with the directory (tenant) ID to restrict sign-in to one tenant. Find it on the app registration's Endpoints page in the Microsoft Entra admin center; see [Endpoints](https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols#endpoints). | https://login.microsoftonline.com/common/oauth2/v2.0/authorize |
| Token URL     | The OAuth 2.0 token endpoint of the Microsoft identity platform. Replace common with the directory (tenant) ID to restrict sign-in to one tenant. Find it on the app registration's Endpoints page in the Microsoft Entra admin center; see [Endpoints](https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols#endpoints).         | https://login.microsoftonline.com/common/oauth2/v2.0/token     |
| Scopes        | Space-separated Microsoft Graph permission scopes to request. Add each scope under API permissions on the app registration in the Microsoft Entra admin center; see the [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference).                                                                    | Sites.ReadWrite.All Sites.Manage.All offline_access            |
| Client ID     | The Application (client) ID shown on the app registration's Overview page in the Microsoft Entra admin center; see [Register an application](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app).                                                                                                                   |                                                                |
| Client Secret | The client secret value generated under Certificates & secrets on the app registration in the Microsoft Entra admin center; see [Add a client secret](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-credentials).                                                                                                           |                                                                |

## Triggers

### Drive Item Changes {#drivepollingtrigger}

Checks for new and updated items in a specified SharePoint drive on a configured schedule.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.  |         |
| Site ID    | The unique identifier of a SharePoint site.  |         |
| Drive ID   | The unique identifier of a SharePoint drive. |         |

### Drive Subscription {#instancedeploywebhook}

Receive webhook notifications from SharePoint drives. Automatically creates and manages a webhook subscription when the instance is deployed, and removes the subscription when the instance is deleted. Supports scheduled renewal to keep the subscription active.

| Input                | Comments                                                                                                                                                                                                                                                             | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft SharePoint connection to use.                                                                                                                                                                                                                          |         |
| Resource             | The Microsoft Graph resource path to monitor. Examples: /me/drive/root, /sites/{site-id}/drive/root, /drives/{drive-id}/root                                                                                                                                         |         |
| Change Type          | The type of changes that should generate notifications. Common values: updated, created, deleted.                                                                                                                                                                    | updated |
| Client State         | Optional validation token sent with each notification. Use to verify notifications originate from Microsoft Graph.                                                                                                                                                   |         |
| Expiration Date Time | Optional expiration date/time for the subscription. If not provided, defaults to about 7 days from now. Set a schedule on the trigger to renew the subscription before it expires. Maximum is just under 30 days (42,300 minutes) for SharePoint/OneDrive resources. |         |

### Folder Item Changes {#folderpollingtrigger}

Checks for new and updated items in a specified folder within a SharePoint drive on a configured schedule.

| Input              | Comments                                                           | Default |
| ------------------ | ------------------------------------------------------------------ | ------- |
| Connection         | The Microsoft SharePoint connection to use.                        |         |
| Site ID            | The unique identifier of a SharePoint site.                        |         |
| Drive ID           | The unique identifier of a SharePoint drive.                       |         |
| Folder ID          | The ID of the folder to monitor for changes.                       |         |
| Include Subfolders | When true, changes in subfolders will also be tracked recursively. | false   |

### Site Item Changes {#pollsitechanges}

Checks for new and updated items across all drives in a SharePoint site on a configured schedule.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use. |         |
| Site ID    | The unique identifier of a SharePoint site. |         |

### Webhook {#webhook}

Receive and validate webhook requests from SharePoint for manually configured webhook subscriptions.

## Actions

### Check Item Exists {#checkitemexists}

Check if a file or folder exists in a SharePoint drive.

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                         |         |
| Site ID    | Provide the id of the site to check the item in.                    |         |
| Drive ID   | Provide the id of the drive to check the item in.                   |         |
| Item Path  | Provide the path to the file or folder, relative to the drive root. |         |

### Create Folder {#createfolder}

Create a Folder in a Drive.

| Input          | Comments                                                      | Default |
| -------------- | ------------------------------------------------------------- | ------- |
| Connection     | The Microsoft SharePoint connection to use.                   |         |
| Site ID        | Provide the id of the site to create the folder in.           |         |
| Drive ID       | Provide the id of the drive to create the folder in.          |         |
| Parent Item ID | Provide the id of the parent element to create the folder in. |         |
| Folder Name    | Provide the name of the new folder.                           |         |

### Create Item in Site List {#createiteminsite}

Create a new item inside the given site list.

| Input      | Comments                                                                                                             | Default         |
| ---------- | -------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection | The Microsoft SharePoint connection to use.                                                                          |                 |
| Site ID    | The unique identifier of a SharePoint site.                                                                          |                 |
| List ID    | The unique identifier of a SharePoint site list.                                                                     |                 |
| Fields     | Key-value pairs to set as properties on the list item. Each key represents a field name and its corresponding value. | <code>[]</code> |

### Create Site List Subscription {#createsitelistsubscription}

Create a Site List subscription for Microsoft SharePoint.

| Input                | Comments                                                                                                                                                        | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft SharePoint connection to use.                                                                                                                     |         |
| Site ID              | The unique identifier of a SharePoint site.                                                                                                                     |         |
| List ID              | The unique identifier of a SharePoint site list.                                                                                                                |         |
| Notification URL     | The URL where Microsoft Graph will deliver webhook notifications when changes occur.                                                                            |         |
| Expiration Date/Time | Expiration date/time for subscription. If unspecified the default will be the current date/time plus 29 days (close to the maximum permitted by the Graph API). |         |
| Allow Duplicates     | When true, allows creating multiple subscriptions for the same endpoint.                                                                                        | false   |

### Create Subscription {#createsubscription}

Create a subscription that sends notifications of changes to a resource.

| Input                | Comments                                                                                          | Default |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft SharePoint connection to use.                                                       |         |
| Change Type          | The type of changes that should generate notifications. Common values: updated, created, deleted. | updated |
| Notification URL     | The URL where Microsoft Graph will deliver webhook notifications when changes occur.              |         |
| Resource             | The Microsoft Graph resource path to monitor for changes.                                         |         |
| Expiration Date Time | The date and time when the subscription will expire if not updated or renewed.                    |         |
| Client State         | An optional validation token included in each notification to verify the notification source.     |         |
| Allow Duplicates     | When true, allows creating multiple subscriptions for the same endpoint.                          | false   |

### Delete All Instance Subscriptions {#deleteallinstancesubscriptions}

Delete all SharePoint subscriptions pointed at this instance.

| Input            | Comments                                                                                                                                                                                     | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft SharePoint connection to use.                                                                                                                                                  |         |
| Notification URL | The notification URL used when creating subscriptions for this instance. Only subscriptions with this URL will be deleted. If not provided, all subscriptions for this flow will be deleted. |         |

### Delete Subscription {#deletesubscription}

Delete a Subscription by ID.

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      | The Microsoft SharePoint connection to use.          |         |
| Subscription ID | The unique identifier of the subscription to manage. |         |

### Download File {#downloadfile}

Download a file from the specified drive.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Microsoft SharePoint connection to use.      |         |
| Site ID    | The unique identifier of a SharePoint site.      |         |
| List ID    | The unique identifier of a SharePoint site list. |         |
| Drive ID   | The unique identifier of a SharePoint drive.     |         |
| Item ID    | The unique identifier of a SharePoint item.      |         |

### Get Current User {#getcurrentuser}

Get the information and metadata of the user that is currently logged in.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use. |         |

### Get Drive {#getdrive}

Returns the information and metadata of a SharePoint drive.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.  |         |
| Site ID    | The unique identifier of a SharePoint site.  |         |
| Drive ID   | The unique identifier of a SharePoint drive. |         |

### Get File {#getfile}

Get the content of a text or JSON file from a drive. For binary files, use the Download File action.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Microsoft SharePoint connection to use.      |         |
| Site ID    | The unique identifier of a SharePoint site.      |         |
| List ID    | The unique identifier of a SharePoint site list. |         |
| Drive ID   | The unique identifier of a SharePoint drive.     |         |
| Item ID    | The unique identifier of a SharePoint item.      |         |

### Get Item from Site List {#getiteminsite}

Returns the information and metadata of the given item.

| Input         | Comments                                                                    | Default |
| ------------- | --------------------------------------------------------------------------- | ------- |
| Connection    | The Microsoft SharePoint connection to use.                                 |         |
| Site ID       | The unique identifier of a SharePoint site.                                 |         |
| List ID       | The unique identifier of a SharePoint site list.                            |         |
| Item ID       | The unique identifier of a SharePoint item.                                 |         |
| Opt In Fields | Comma-separated list of fields to return. Overrides the default result set. |         |

### Get Root Site {#getrootsite}

Returns the information and metadata of the root SharePoint site in the tenant.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use. |         |

### Get Site {#getsite}

Returns the information and metadata of the given SharePoint site.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use. |         |
| Site ID    | The unique identifier of a SharePoint site. |         |

### Get Site List {#getlist}

Returns the information and metadata of an existing site list.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Microsoft SharePoint connection to use.      |         |
| Site ID    | The unique identifier of a SharePoint site.      |         |
| List ID    | The unique identifier of a SharePoint site list. |         |

### List Changes {#listchanges}

Track changes in a driveItem and its children over time.

| Input            | Comments                                                                                                                                                                                 | Default                       |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Connection       | The Microsoft SharePoint connection to use.                                                                                                                                              |                               |
| Delta URL        | The URL to track changes in a driveItem and its children over time. The @odata.nextLink or @odata.deltaLink from a previous response can also be pasted here to resume tracking changes. | /drives/{drive-id}/root/delta |
| Fetch All        | When true, automatically fetches all pages of results using pagination.                                                                                                                  | false                         |
| Query Parameters | OData system query options to shape the delta query results.                                                                                                                             |                               |
| Select           | Filters properties (columns). See [select parameter](https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#select).                                                         |                               |
| Expand           | Retrieves related resources. See [expand parameter](https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#expand).                                                          |                               |
| Top              | Sets the page size of results. See [top parameter](https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#top).                                                              |                               |

### List Drives {#listdrives}

List all drives within any given SharePoint site.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                             |         |
| Site ID    | The unique identifier of a SharePoint site.                             |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Pagination | Page-size and page-token controls for paging through results.           |         |
| Page Limit | The maximum number of results to return per page.                       |         |
| Page Token | The token for the desired page from a previous response.                |         |

### List Files in Drive {#getfilesfromdrivewithpagination}

List all the files from a Drive.

| Input      | Comments                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                                       |         |
| Site ID    | The unique identifier of a SharePoint site.                                       |         |
| Drive ID   | The unique identifier of a SharePoint drive.                                      |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.           | false   |
| Pagination | Page-size and page-token controls for paging through results.                     |         |
| Page Limit | The maximum number of results to return per page.                                 |         |
| Page Token | The token for the desired page from a previous response.                          |         |
| Recursive  | When true, returns files from all subfolders in addition to the specified folder. | false   |

### List Folder Files in Drive {#getfilesfromdrivefolderwithpagination}

List all the files inside of a folder from a Drive.

| Input      | Comments                                                                      | Default |
| ---------- | ----------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                                   |         |
| Site ID    | The unique identifier of a SharePoint site.                                   |         |
| Drive ID   | The unique identifier of a SharePoint drive.                                  |         |
| Folder ID  | The unique identifier of a SharePoint folder. Leave empty to use root folder. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.       | false   |
| Pagination | Page-size and page-token controls for paging through results.                 |         |
| Page Limit | The maximum number of results to return per page.                             |         |
| Page Token | The token for the desired page from a previous response.                      |         |

### List Followed Sites {#listfollowedsites}

List all Followed Sites.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                             |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Pagination | Page-size and page-token controls for paging through results.           |         |
| Page Limit | The maximum number of results to return per page.                       |         |
| Page Token | The token for the desired page from a previous response.                |         |

### List Items {#listitems}

List Items in a Folder.

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.        |         |
| Site ID    | The unique identifier of a SharePoint site.        |         |
| Drive ID   | Provide the id of the drive to list the items in.  |         |
| Folder ID  | Provide the id of the folder to list the items in. |         |

### List Items in Site List {#getlistitemsinsite}

Return all items inside the given site list.

| Input         | Comments                                                                    | Default |
| ------------- | --------------------------------------------------------------------------- | ------- |
| Connection    | The Microsoft SharePoint connection to use.                                 |         |
| Site ID       | The unique identifier of a SharePoint site.                                 |         |
| List ID       | The unique identifier of a SharePoint site list.                            |         |
| Pagination    | Page-size and page-token controls for paging through results.               |         |
| Page Limit    | The maximum number of results to return per page.                           |         |
| Page Token    | The token for the desired page from a previous response.                    |         |
| Opt In Fields | Comma-separated list of fields to return. Overrides the default result set. |         |

### List Shared Documents {#listshareddocuments}

Lists documents shared with the user.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use. |         |

### List Site Lists {#listsitelists}

List all Site Lists.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                             |         |
| Site ID    | The unique identifier of a SharePoint site.                             |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |

### List Sites {#listsites}

List all SharePoint sites.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                             |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Pagination | Page-size and page-token controls for paging through results.           |         |
| Page Limit | The maximum number of results to return per page.                       |         |
| Page Token | The token for the desired page from a previous response.                |         |

### List Subscriptions {#listsubscriptions}

List all available Subscriptions.

| Input                       | Comments                                                                        | Default |
| --------------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection                  | The Microsoft SharePoint connection to use.                                     |         |
| Show Instance Subscriptions | When true, filters results to show only subscriptions created by this instance. | true    |

### Move File {#movefile}

Move a File in a Drive.

| Input                 | Comments                                                          | Default |
| --------------------- | ----------------------------------------------------------------- | ------- |
| Connection            | The Microsoft SharePoint connection to use.                       |         |
| Site ID               | The unique identifier of a SharePoint site.                       |         |
| List ID               | The unique identifier of a SharePoint site list.                  |         |
| Drive ID              | Provide the id of the drive to move the file in.                  |         |
| Item ID               | Provide the id of the file to move.                               |         |
| Destination Parent ID | Provide the Id of the destination parent element to move file to. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Microsoft SharePoint.

| Input                   | Comments                                                                                                                                                                                                                                     | Default         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection              | The Microsoft SharePoint connection to use.                                                                                                                                                                                                  |                 |
| URL                     | Input the path only (/me/followedSites), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/me/followedSites, only /me/followedSites is entered in this field. |                 |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                      |                 |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                    |                 |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                         | <code>[]</code> |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                             | <code>[]</code> |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                       | <code>[]</code> |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                          | <code>[]</code> |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                  | <code>[]</code> |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                     | json            |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                          |                 |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                          | 0               |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                             | false           |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                          | 0               |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                | false           |

### Rename Folder {#renamefolder}

Rename a Folder in a Drive.

| Input       | Comments                                             | Default |
| ----------- | ---------------------------------------------------- | ------- |
| Connection  | The Microsoft SharePoint connection to use.          |         |
| Site ID     | Provide the id of the site to rename the folder in.  |         |
| Drive ID    | Provide the id of the drive to rename the folder in. |         |
| Folder ID   | Provide the id of the folder to rename.              |         |
| Folder Name | Provide the new name of the folder.                  |         |

### Renew Subscription {#renewsubscription}

Extend the expiration date of an existing SharePoint subscription.

| Input           | Comments                                                                                                                                           | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Microsoft SharePoint connection to use.                                                                                                        |         |
| Subscription ID | The unique identifier of the subscription to manage.                                                                                               |         |
| Expiration Days | Number of days to extend the subscription (1-30). Renewals are capped at the Microsoft Graph maximum for SharePoint resources, just under 30 days. | 3       |

### Search Items {#searchitems}

Search for items across all drives in a SharePoint site.

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.        |         |
| Site ID    | Provide the id of the site to search the items in. |         |
| Query      | Provide the query to search for items by name.     |         |

### Update File {#updatefile}

Update a file to the specified drive.

| Input      | Comments                                                                                              | Default |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                                                           |         |
| Site ID    | The unique identifier of a SharePoint site.                                                           |         |
| List ID    | The unique identifier of a SharePoint site list.                                                      |         |
| Drive ID   | The unique identifier of a SharePoint drive.                                                          |         |
| Item ID    | The unique identifier of a SharePoint item.                                                           |         |
| File Data  | The file content to upload to SharePoint. Reference a file from a previous step or provide file data. |         |

### Update Site List Subscription Expiration {#updatesitelistsubscriptionexpiration}

Update existing Site List subscription expiration for Microsoft SharePoint.

| Input                | Comments                                                                                                                                                        | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft SharePoint connection to use.                                                                                                                     |         |
| Subscription ID      | The unique identifier of the subscription to manage.                                                                                                            |         |
| Expiration Date/Time | Expiration date/time for subscription. If unspecified the default will be the current date/time plus 29 days (close to the maximum permitted by the Graph API). |         |

### Upload File {#uploadfile}

Upload a file to the specified drive or folder's drive.

| Input      | Comments                                                                                              | Default |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft SharePoint connection to use.                                                           |         |
| Site ID    | The unique identifier of a SharePoint site.                                                           |         |
| Drive ID   | The unique identifier of a SharePoint drive.                                                          |         |
| File Name  | The name of the file including extension.                                                             |         |
| File Data  | The file content to upload to SharePoint. Reference a file from a previous step or provide file data. |         |
| Folder ID  | The unique identifier of a SharePoint folder. Leave empty to use root folder.                         |         |
