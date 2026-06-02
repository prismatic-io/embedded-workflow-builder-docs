---
title: Microsoft Graph API Connector
sidebar_label: Microsoft Graph API
description: Access Microsoft 365 services and data through the Microsoft Graph API.
---

![Microsoft Graph API](./assets/ms-graph-api.png#connector-icon)
Access Microsoft 365 services and data through the Microsoft Graph API.

## Connections

### OAuth 2.0 Authorization Code {#oauth}

OAuth 2.0 Authorization Code Connectivity for Microsoft Graph API

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
