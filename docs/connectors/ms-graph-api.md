---
title: Microsoft Graph API Connector
sidebar_label: Microsoft Graph API
description: Interact with the Microsoft Graph API
---

![Microsoft Graph API](./assets/ms-graph-api.png#connector-icon)
Interact with the Microsoft Graph API

## Connections

### OAuth 2.0 Authorization Code

OAuth 2.0 Authorization Code Connectivity for Microsoft Graph API

To use the Microsoft Graph API component, configure an OAuth 2.0 application through Active Directory in the [Microsoft Azure Portal](https://portal.azure.com/#home).

When creating the application you will be prompted to select the **Supported account types**.
Under this section, be sure to select **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** so that users outside of your organization (i.e. your customers) can authenticate.
You will need to go to **Platforms** and add the **Web** platform.
In that section you should add the OAuth 2.0 callback URL - `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` - as a **Redirect URI**.

Next, go to **Certificates & Secrets** for the app and add a new **Client Secret**.
Copy the **value** (not ID) of the secret for future use.

You will also need the **Application (client) ID** from the "Overview" page.

Next, supply the following values to the **OAuth 2.0** connection:

- For **Client ID** and **Client Secret** enter the values that you got from the Microsoft Azure Portal.
- The **Scopes** your integration requires.
  You can find scopes on [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference), or by making test calls in the [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer).
- Additionally, ensure the `offline_access` scope is included in your app registration. It is essential to maintain your OAuth connection and receive refresh tokens. Without it, users will need to re-authenticate every hour.
- If you didn't select Multi-tenant when creating the Azure application, you will need to replace the **Authorize URL** and **Token URL** with ones specific to your tenant.

For more information regarding authenticating against the Microsoft Graph API refer to the [Microsoft documentation](https://docs.microsoft.com/en-us/graph/auth-v2-user).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                                                                            | Default                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Authorize URL       | The OAuth 2.0 Authorization URL for Microsoft's Graph API. If you have a multi-tenant application, you can use /common/ endpoints. If you have a single-tenant app, change these URLs to your tenant-specific ones. | https://login.microsoftonline.com/common/oauth2/v2.0/authorize |
| Token URL           | The OAuth 2.0 Token URL for Microsoft's Graph API. If you have a multi-tenant application, you can use /common/ endpoints. If you have a single-tenant app, change these URLs to your tenant-specific ones.         | https://login.microsoftonline.com/common/oauth2/v2.0/token     |
| Scopes              | Add additional required scopes you identify on https://developer.microsoft.com/en-us/graph/graph-explorer to this list                                                                                              | https://graph.microsoft.com/User.Read.All offline_access       |
| Client ID           |                                                                                                                                                                                                                     |                                                                |
| Client secret value | This is the 'value' (not ID) of the client secret you generated in Azure Portal.                                                                                                                                    |                                                                |

## Actions

### Raw Request

Send raw HTTP request to Microsoft Graph API

| Input                   | Comments                                                                                                                                                                                                                               | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                        |         |
| URL                     | Input the path only (/me/joinedTeams), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/me/joinedTeams, only /me/joinedTeams is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                              |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                   |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                       |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                    |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                            |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                               | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                    |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                   | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                                             | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                                        | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                                       | false   |
