---
title: Microsoft Graph API Connector
sidebar_label: Microsoft Graph API
description: Access Microsoft 365 services and data through the Microsoft Graph API.
---

![Microsoft Graph API](./assets/ms-graph-api.png#connector-icon)
[Microsoft Graph API](https://learn.microsoft.com/en-us/graph/use-the-api) is a unified REST API that provides access to data across Microsoft 365 services. This component allows interacting with many Microsoft products from a single API endpoint.

The Graph API can be explored using the [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer) tool.

## API Documentation

This component was built using [Microsoft Graph REST API v1.0](https://learn.microsoft.com/en-us/graph/api/overview).

## Connections

### OAuth 2.0 Authorization Code {#oauth}

OAuth 2.0 Authorization Code Connectivity for Microsoft Graph API

<Vimeo video="907604023" />

#### Prerequisites

- A Microsoft Azure account with admin access
- Access to the [Microsoft Azure Portal](https://portal.azure.com/#home)

#### Setup Steps

1. Navigate to **Azure Active Directory** > **App registrations** in the [Microsoft Azure Portal](https://portal.azure.com/#home).

2. Create a new application registration.

3. When prompted to select **Supported account types**, select **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** to allow users outside of the organization to authenticate.

4. Go to **Platforms** and add the **Web** platform.

5. Add the OAuth 2.0 callback URL as a **Redirect URI**: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`

6. Navigate to **Certificates & Secrets** and add a new **Client Secret**. Copy the **value** (not ID) for future use.

7. Locate the **Application (client) ID** on the **Overview** page.

#### Configure the Connection

Supply the following values to the **OAuth 2.0** connection:

- **Client ID**: The Application (client) ID from the Azure Portal.
- **Client Secret**: The secret value copied from Certificates & Secrets.
- **Scopes**: The OAuth permission scopes required by the integration. Scopes can be found in the [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference) or by making test calls in the [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer).
- **Authorize URL** and **Token URL**: For single-tenant applications, replace these with tenant-specific URLs. Multi-tenant applications can use the default `/common/` endpoints.

**Important**: Ensure the `offline_access` scope is included in the app registration. This scope is essential for receiving refresh tokens. Without it, users must re-authenticate every hour.

For more information on authenticating against the Microsoft Graph API, refer to the [Microsoft documentation](https://docs.microsoft.com/en-us/graph/auth-v2-user).

#### App Verification and Admin Consent

Microsoft requires Azure AD app registrations used in multi-tenant deployments to complete a publisher verification process. This review confirms the app developer's identity, giving end users confidence that they are authorizing a legitimate, verified application.

Azure AD app registrations have two distinct verification concepts that affect how users experience the authentication flow.

#### Publisher Verification

Without publisher verification, the Microsoft consent screen displays **"Unverified"** next to the app name. This can reduce user trust and may trigger security warnings in organizations with strict app access policies.

To verify the publisher:

1. Ensure the organization has a [Microsoft Partner Network (MPN) account](https://partner.microsoft.com/)
2. In the [Microsoft Entra Admin Center](https://entra.microsoft.com/), open the app registration
3. Under **Branding & properties**, click **Add a verified publisher**
4. Enter the MPN ID and confirm

Once verified, the consent screen displays the organization name with a verified badge instead of "Unverified."

#### Admin Consent

Apps requesting **application permissions** (permissions that act without a signed-in user) or high-privilege **delegated permissions** require admin consent before any user in a Microsoft 365 tenant can authenticate. Without admin consent, users see a **"Need admin approval"** error.

A tenant administrator can grant consent using either method:

**Method 1 — Admin Consent URL:**

Navigate to the following URL, replacing `{tenant}` with the Directory tenant ID and `{client_id}` with the Application client ID:

    https://login.microsoftonline.com/{tenant}/adminconsent?client_id={client_id}

**Method 2 — Microsoft Entra Admin Center:**

1. Navigate to [Microsoft Entra Admin Center](https://entra.microsoft.com/) → **Enterprise applications**
2. Select the app registration
3. Under **Permissions**, click **Grant admin consent for [organization name]**

:::note[Delegated vs. Application Permissions]
Delegated permissions (user-level) typically do not require admin consent unless they are classified as high privilege. Application permissions always require admin consent. Review the [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference) to identify which permissions require consent.
:::

<Vimeo video="907604023" />

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                   | Default                                                        |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Microsoft Graph API. For multi-tenant applications, use /common/ endpoints. For single-tenant apps, replace with tenant-specific URLs. | https://login.microsoftonline.com/common/oauth2/v2.0/authorize |
| Token URL     | The OAuth 2.0 Token URL for Microsoft Graph API. For multi-tenant applications, use /common/ endpoints. For single-tenant apps, replace with tenant-specific URLs.         | https://login.microsoftonline.com/common/oauth2/v2.0/token     |
| Scopes        | Space-separated list of OAuth permission scopes. Find available scopes at https://developer.microsoft.com/en-us/graph/graph-explorer                                       | https://graph.microsoft.com/User.Read.All offline_access       |
| Client ID     | The Client ID from the Azure AD application registration.                                                                                                                  |                                                                |
| Client Secret | This is the 'value' (not ID) of the client secret you generated in Azure Portal.                                                                                           |                                                                |

### OAuth 2.0 Client Credentials {#oauthclientcredentials}

Authenticates actions in all Microsoft's Graph API services.

The OAuth 2.0 Client Credentials flow is designed for service-to-service authentication where no user interaction is required. This flow is ideal for daemon services, background processes, and server-to-server integrations that need to access Microsoft Graph API resources using the application's own identity rather than on behalf of a user.

For more information on the Client Credentials flow, refer to the [Microsoft documentation](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow).

#### Prerequisites

- A Microsoft Azure account with admin access
- Access to the [Microsoft Azure Portal](https://portal.azure.com/#home)
- Administrative consent authority to grant Application permissions

#### Setup Steps

1. Navigate to **Azure Active Directory** > **App registrations** in the [Microsoft Azure Portal](https://portal.azure.com/#home).

2. Create a new application registration or select an existing application.

3. When prompted to select **Supported account types**, choose the appropriate option:
   - **Single tenant**: Select **Accounts in this organizational directory only** for tenant-specific access
   - **Multi-tenant**: Select **Accounts in any organizational directory** to allow access across multiple tenants

4. Navigate to **Certificates & Secrets** and add a new **Client Secret**. Copy the **value** (not ID) for future use.

5. Navigate to **API permissions** and add the required Microsoft Graph **Application permissions** (not Delegated permissions):
   - Click **Add a permission** > **Microsoft Graph** > **Application permissions**
   - Select the permissions required for the integration (e.g., `User.Read.All`, `Mail.Read`)
   - Click **Grant admin consent** to approve the permissions (admin consent is required for Application permissions)
   - Refer to the [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference) for available Application permissions

6. Locate the **Application (client) ID** on the **Overview** page.

7. Locate the **Directory (tenant) ID** on the **Overview** page. This value is required for tenant-specific endpoints.

#### Configure the Connection

Supply the following values to the **OAuth 2.0 Client Credentials** connection:

- **Client ID**: The Application (client) ID from the Azure Portal
- **Client Secret**: The secret value copied from Certificates & Secrets
- **Tenant ID**: The Directory (tenant) ID from the Overview page (not `/common/` - must be tenant-specific)

**Important Considerations**:

- **Application permissions only**: The Client Credentials flow requires Application permissions (app roles), not Delegated permissions. Application permissions must be granted by an administrator.
- **Tenant-specific authentication**: Unlike user-based OAuth flows, the Client Credentials flow requires tenant-specific endpoints and cannot use the `/common/` endpoint.
- **No user context**: Actions performed using this connection execute under the application's identity, not on behalf of any specific user.
- **Admin consent required**: An organization administrator must grant admin consent for all Application permissions before the connection can obtain tokens.

For more information on authenticating against the Microsoft Graph API using the Client Credentials flow, refer to the [Microsoft documentation](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow).

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

## Actions

### Raw Request {#rawrequest}

Send raw HTTP request to Microsoft Graph API.

| Input                   | Comments                                                                                                                                                                                                                               | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Microsoft Graph API connection to use.                                                                                                                                                                                             |         |
| URL                     | Input the path only (/me/joinedTeams), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/me/joinedTeams, only /me/joinedTeams is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                              |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                   |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                       |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                 |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                    |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                            |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                               | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                    |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                    | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                       | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                    | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                          | false   |
