---
title: Microsoft Power BI Connector
sidebar_label: Microsoft Power BI
description: Interact with and modify Power BI datasets
---

![Microsoft Power BI](./assets/ms-power-bi.png#connector-icon)
Interact with and modify Power BI datasets

## Connections

### OAuth 2.0

OAuth 2.0 Connectivity for Microsoft Power BI

The Microsoft Power BI component authenticates requests through the Microsoft Graph API using OAuth 2.0.

#### Prerequisites

- A Microsoft Azure account with access to the Azure Portal
- Appropriate permissions to register applications in Azure Active Directory

#### Setup Steps

To create an OAuth 2.0 application for Power BI:

1. Navigate to the [Azure Portal](https://portal.azure.com/) and sign in
2. Select **Azure Active Directory** from the menu
3. Click **App registrations** and then **New registration**
4. Configure the application:
   - Enter a name for the application
   - Choose the appropriate **Supported account types** (single tenant or multi-tenant)
   - Under **Redirect URI**, select **Web** and enter: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
5. Click **Register** to create the application
6. After registration, locate and copy the **Application (client) ID** from the Overview page
7. Navigate to **Certificates & secrets** in the left menu
8. Click **New client secret**, provide a description and expiration period, then click **Add**
9. Copy the **Value** of the newly created client secret immediately (it will not be shown again)
10. Navigate to **API permissions** in the left menu
11. Click **Add a permission** and select **Power BI Service**
12. Select **Delegated permissions** and choose the appropriate scopes based on the integration requirements
13. Ensure the `offline_access` scope is included to maintain the OAuth connection and receive refresh tokens

For detailed instructions, refer to [Microsoft's documentation on registering Power BI apps](https://docs.microsoft.com/en-us/power-bi/developer/embedded/register-app?tabs=customers%2CAzure).

#### Configure the Connection

Configure the OAuth 2.0 connection with the following values:

- **Client ID**: Enter the **Application (client) ID** from the Azure Portal
- **Client Secret**: Enter the **Value** of the client secret created in step 9
- **Scopes**: Add the Power BI scopes configured in step 12. Refer to the [Microsoft Graph API permissions reference](https://docs.microsoft.com/en-us/graph/permissions-reference) for available options. The `offline_access` scope is essential for maintaining the connection
- **Authorize URL** and **Token URL**:
  - For single-tenant apps: Use the tenant-specific endpoints that include the Azure Tenant ID
  - For multi-tenant apps: Use the `common` endpoints (default configuration)

:::note Tenant Configuration
The OAuth endpoints depend on the tenant configuration. Single-tenant applications require the Azure Tenant ID in the authorization and token URLs. Multi-tenant applications can use the `common` endpoints. Consult [Microsoft's authentication documentation](https://docs.microsoft.com/en-us/power-bi/developer/automation/walkthrough-push-data-get-token) for details.
:::

:::warning Refresh Token Requirements
The `offline_access` scope must be included in the app registration. Without this scope, users will need to re-authenticate every hour when the access token expires.
:::

#### Verify Connection

After configuring the connection, test the authentication by executing a Power BI action. Refer to the [Microsoft Power BI REST API documentation](https://docs.microsoft.com/en-us/rest/api/power-bi/) for available API operations and endpoints.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                | Default                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL. Use tenant-specific endpoint for single-tenant apps: https://login.microsoftonline.com/{TENANT-ID}/oauth2/authorize                                    | https://login.microsoftonline.com/common/oauth2/authorize                     |
| Token URL     | The OAuth 2.0 Token URL. Use tenant-specific endpoint for single-tenant apps: https://login.microsoftonline.com/{TENANT-ID}/oauth2/v2.0/token                                           | https://login.microsoftonline.com/common/oauth2/v2.0/token                    |
| Scopes        | Space-separated list of Power BI OAuth scopes. Must include 'offline_access' for refresh tokens. See https://docs.microsoft.com/en-us/graph/permissions-reference for available scopes. | https://analysis.windows.net/powerbi/api/Dataset.ReadWrite.All offline_access |
| Client ID     | The Application (client) ID from the Azure Portal. Navigate to Azure Active Directory > App registrations to find this value.                                                           |                                                                               |
| Client Secret | The Client Secret from the Azure Portal. Navigate to Certificates & secrets to generate a new client secret.                                                                            |                                                                               |

## Actions

### Create Dataset

Creates a new dataset on 'My Workspace'

| Input        | Comments                                                                                                                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                  |         |
| Dataset Name | The name for the new dataset to create.                                                                                                                                          |         |
| Columns      | An array of column definitions that define the table schema. Each column must have a name and dataType. Supported data types: Int64, Double, Boolean, DateTime, String, Decimal. |         |
| Table Name   | The name of the table within the dataset.                                                                                                                                        |         |

### Create Rows

Adds new data rows to the specified table within the specified dataset from 'My Workspace'

| Input      | Comments                                                                                                                                                                                           | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                    |         |
| Dataset ID | The unique identifier of the dataset. A dataset is a collection of tables that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |         |
| Table Name | The name of the table within the dataset.                                                                                                                                                          |         |
| Rows       | An array of row objects to insert into the table. Each object should contain key-value pairs matching the table's column names.                                                                    |         |

### Delete Rows

Deletes all rows from the specified table within the specified dataset from 'My Workspace'

| Input      | Comments                                                                                                                                                                                           | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                    |         |
| Dataset ID | The unique identifier of the dataset. A dataset is a collection of tables that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |         |
| Table Name | The name of the table within the dataset.                                                                                                                                                          |         |

### List Datasets

Returns a list of datasets from 'My Workspace'

| Input       | Comments                                                                                      | Default |
| ----------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                               |         |
| Top         | The maximum number of results to return. Must be a value between 1 and 1000.                  |         |
| Page Offset | The number of entries to skip for pagination. Used to retrieve results beyond the first page. |         |

### List Groups

Returns a list of workspaces the user has access to

| Input       | Comments                                                                                      | Default |
| ----------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                               |         |
| Page Offset | The number of entries to skip for pagination. Used to retrieve results beyond the first page. |         |
| Top         | The maximum number of results to return. Must be a value between 1 and 1000.                  |         |

### List Reports

Returns a list of reports from 'My Workspace'

| Input       | Comments                                                                                      | Default |
| ----------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                               |         |
| Top         | The maximum number of results to return. Must be a value between 1 and 1000.                  |         |
| Page Offset | The number of entries to skip for pagination. Used to retrieve results beyond the first page. |         |

### List Tables

Returns a list of tables tables within the specified dataset from 'My Workspace'

| Input       | Comments                                                                                                                                                                                           | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                                                                                                    |         |
| Dataset ID  | The unique identifier of the dataset. A dataset is a collection of tables that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |         |
| Top         | The maximum number of results to return. Must be a value between 1 and 1000.                                                                                                                       |         |
| Page Offset | The number of entries to skip for pagination. Used to retrieve results beyond the first page.                                                                                                      |         |

### Raw Request

Send raw HTTP request to Microsoft Power BI

| Input                   | Comments                                                                                                                                                                                                                 | Default  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Connection              |                                                                                                                                                                                                                          |          |
| URL                     | Input the path only (/profiles), The base URL is already included (https://api.powerbi.com/v1.0/myorg). For example, to connect to https://api.powerbi.com/v1.0/myorg/profiles, only /profiles is entered in this field. | /imports |
| Method                  | The HTTP method to use.                                                                                                                                                                                                  |          |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                |          |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                     |          |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                         |          |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                   |          |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                      |          |
| Header                  | A list of headers to send with the request.                                                                                                                                                                              |          |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                 | json     |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                      |          |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                     | false    |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                      | 0        |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                         | false    |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                      | 0        |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                            | false    |

### Update Table

Updates the metadata and schema for the specified table within the specified dataset from 'My Workspace'

| Input      | Comments                                                                                                                                                                                           | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                    |         |
| Dataset ID | The unique identifier of the dataset. A dataset is a collection of tables that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |         |
| Table Name | The name of the table within the dataset.                                                                                                                                                          |         |
| Columns    | An array of column definitions that define the table schema. Each column must have a name and dataType. Supported data types: Int64, Double, Boolean, DateTime, String, Decimal.                   |         |
