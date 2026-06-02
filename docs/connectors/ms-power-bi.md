---
title: Microsoft Power BI Connector
sidebar_label: Microsoft Power BI
description: Interact with and modify Power BI datasets
---

![Microsoft Power BI](./assets/ms-power-bi.png#connector-icon)
Interact with and modify Power BI datasets

## Connections

### OAuth 2.0 {#oauth}

OAuth 2.0 Connectivity for Microsoft Power BI

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                         | Default                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL. Use tenant-specific endpoint for single-tenant apps: https://login.microsoftonline.com/{TENANT-ID}/oauth2/authorize                                                                             | https://login.microsoftonline.com/common/oauth2/authorize                     |
| Token URL     | The OAuth 2.0 Token URL. Use tenant-specific endpoint for single-tenant apps: https://login.microsoftonline.com/{TENANT-ID}/oauth2/v2.0/token                                                                                    | https://login.microsoftonline.com/common/oauth2/v2.0/token                    |
| Scopes        | Space-separated list of Power BI OAuth scopes. Must include 'offline_access' for refresh tokens. See [Microsoft Graph permissions reference](https://docs.microsoft.com/en-us/graph/permissions-reference) for available scopes. | https://analysis.windows.net/powerbi/api/Dataset.ReadWrite.All offline_access |
| Client ID     | The Application (client) ID from the Azure Portal. Navigate to Azure Active Directory > App registrations to find this value.                                                                                                    |                                                                               |
| Client Secret | The Client Secret from the Azure Portal. Navigate to Certificates & secrets to generate a new client secret.                                                                                                                     |                                                                               |

## Triggers

### New Records {#pollchangestrigger}

Checks for new records in a selected Power BI resource type on a configured schedule.

| Input            | Comments                                          | Default |
| ---------------- | ------------------------------------------------- | ------- |
| Connection       |                                                   |         |
| Resource Type    | The type of resource to poll for new records.     |         |
| Show New Records | Include newly created records in trigger results. | true    |

## Actions

### Create Dataset {#createdataset}

Creates a new dataset on 'My Workspace'

| Input        | Comments                                                                                                                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                  |         |
| Dataset Name | The name for the new dataset to create.                                                                                                                                          |         |
| Columns      | An array of column definitions that define the table schema. Each column must have a name and dataType. Supported data types: Int64, Double, Boolean, DateTime, String, Decimal. |         |
| Table Name   | The name of the table within the dataset.                                                                                                                                        |         |

### Create Rows {#createrow}

Adds new data rows to the specified table within the specified dataset from 'My Workspace'

| Input      | Comments                                                                                                                                                                                           | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                    |         |
| Dataset ID | The unique identifier of the dataset. A dataset is a collection of tables that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |         |
| Table Name | The name of the table within the dataset.                                                                                                                                                          |         |
| Rows       | An array of row objects to insert into the table. Each object should contain key-value pairs matching the table's column names.                                                                    |         |

### Delete Rows {#deleterows}

Deletes all rows from the specified table within the specified dataset from 'My Workspace'

| Input      | Comments                                                                                                                                                                                           | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                    |         |
| Dataset ID | The unique identifier of the dataset. A dataset is a collection of tables that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |         |
| Table Name | The name of the table within the dataset.                                                                                                                                                          |         |

### List Datasets {#listdatasets}

Returns a list of datasets from 'My Workspace'

| Input       | Comments                                                                                      | Default |
| ----------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                               |         |
| Top         | The maximum number of results to return. Must be a value between 1 and 1000.                  |         |
| Page Offset | The number of entries to skip for pagination. Used to retrieve results beyond the first page. |         |

### List Groups {#listgroups}

Returns a list of workspaces the user has access to

| Input       | Comments                                                                                      | Default |
| ----------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                               |         |
| Page Offset | The number of entries to skip for pagination. Used to retrieve results beyond the first page. |         |
| Top         | The maximum number of results to return. Must be a value between 1 and 1000.                  |         |

### List Reports {#listreports}

Returns a list of reports from 'My Workspace'

| Input       | Comments                                                                                      | Default |
| ----------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                               |         |
| Top         | The maximum number of results to return. Must be a value between 1 and 1000.                  |         |
| Page Offset | The number of entries to skip for pagination. Used to retrieve results beyond the first page. |         |

### List Tables {#listtables}

Returns a list of tables tables within the specified dataset from 'My Workspace'

| Input       | Comments                                                                                                                                                                                           | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                                                                                                    |         |
| Dataset ID  | The unique identifier of the dataset. A dataset is a collection of tables that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |         |
| Top         | The maximum number of results to return. Must be a value between 1 and 1000.                                                                                                                       |         |
| Page Offset | The number of entries to skip for pagination. Used to retrieve results beyond the first page.                                                                                                      |         |

### Raw Request {#rawrequest}

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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                      | 0        |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                         | false    |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                      | 0        |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                            | false    |

### Update Table {#updatetable}

Updates the metadata and schema for the specified table within the specified dataset from 'My Workspace'

| Input      | Comments                                                                                                                                                                                           | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                    |         |
| Dataset ID | The unique identifier of the dataset. A dataset is a collection of tables that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |         |
| Table Name | The name of the table within the dataset.                                                                                                                                                          |         |
| Columns    | An array of column definitions that define the table schema. Each column must have a name and dataType. Supported data types: Int64, Double, Boolean, DateTime, String, Decimal.                   |         |
