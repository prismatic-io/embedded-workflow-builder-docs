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

The Microsoft Power BI component authenticates requests through the Microsoft Graph API.
To configure OAuth 2.0 you must first [create an application](https://docs.microsoft.com/en-us/power-bi/developer/embedded/register-app?tabs=customers%2CAzure) through Active Directory in the Microsoft Azure portal.
For more information regarding authenticating against the Microsoft Graph API refer to [Microsoft's documentation](https://docs.microsoft.com/en-us/power-bi/developer/automation/walkthrough-push-data-get-token).

Next, supply the following values to the **OAuth 2.0** connection:

- For **Client ID** and **Client Secret** enter the values that you got from the Microsoft Azure Portal.
- For **Scopes** choose from the options found on the [Microsoft Graph API documentation](https://docs.microsoft.com/en-us/graph/permissions-reference).
- Additionally, ensure the `offline_access` scope is included in your app registration. It is essential to maintain your OAuth connection and receive refresh tokens. Without it, users will need to re-authenticate every hour.
- For **Authorize URL** and **Token URL** you will need to identify your Azure Tenant ID to include in the URLs or configure your app for multi-tenant which allows using the `common` endpoints.

Refer to the [Microsoft Power BI REST API documentation](https://docs.microsoft.com/en-us/rest/api/power-bi/) for more information.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                       | Default                                                        |
| ------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Microsoft Power BI                         | https://login.microsoftonline.com/common/oauth2/authorize      |
| Token URL     | The OAuth 2.0 Token URL for Microsoft Power BI                                 | https://login.microsoftonline.com/common/oauth2/v2.0/token     |
| Scopes        | Microsoft Power BI permission scopes must also be set on the OAuth application | https://analysis.windows.net/powerbi/api/Dataset.ReadWrite.All |
| Client ID     | Generate at https://dev.powerbi.com/apps                                       |                                                                |
| Client Secret | Generate at https://dev.powerbi.com/apps                                       |                                                                |

## Actions

### Create Dataset

Creates a new dataset on 'My Workspace'

| Input        | Comments                                                                       | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection   |                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Dataset Name | Provide a string value for the name of the database you want to interact with. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Columns      |                                                                                | <code>[<br /> {<br /> "name": "ProductID",<br /> "dataType": "Int64"<br /> },<br /> {<br /> "name": "Name",<br /> "dataType": "string"<br /> },<br /> {<br /> "name": "Category",<br /> "dataType": "string"<br /> },<br /> {<br /> "name": "IsCompete",<br /> "dataType": "bool"<br /> },<br /> {<br /> "name": "ManufacturedOn",<br /> "dataType": "DateTime"<br /> },<br /> {<br /> "name": "Sales",<br /> "dataType": "Int64",<br /> "formatString": "Currency"<br /> }<br />]</code> |
| Table Name   |                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Create Rows

Adds new data rows to the specified table within the specified dataset from 'My Workspace'

| Input      | Comments                                                                                                                                                          | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection |                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Dataset ID | A dataset is a spreadsheet like document that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Table Name |                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Rows       |                                                                                                                                                                   | <code>[<br /> {<br /> "ProductID": 1,<br /> "Name": "Adjustable Race",<br /> "Category": "Components",<br /> "IsCompete": true,<br /> "ManufacturedOn": "07/30/2014"<br /> },<br /> {<br /> "ProductID": 2,<br /> "Name": "LL Crankarm",<br /> "Category": "Components",<br /> "IsCompete": true,<br /> "ManufacturedOn": "07/30/2014"<br /> },<br /> {<br /> "ProductID": 3,<br /> "Name": "HL Mountain Frame - Silver",<br /> "Category": "Bikes",<br /> "IsCompete": true,<br /> "ManufacturedOn": "07/30/2014"<br /> }<br />]</code> |

### Delete Rows

Deletes all rows from the specified table within the specified dataset from 'My Workspace'

| Input      | Comments                                                                                                                                                          | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                   |         |
| Dataset ID | A dataset is a spreadsheet like document that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |         |
| Table Name |                                                                                                                                                                   |         |

### List Datasets

Returns a list of datasets from 'My Workspace'

| Input       | Comments                                                                                                          | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                   |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                      |         |

### List Groups

Returns a list of workspaces the user has access to

| Input       | Comments                                                                                                          | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                   |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                      |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |

### List Reports

Returns a list of reports from 'My Workspace'

| Input       | Comments                                                                                                          | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                   |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                      |         |

### List Tables

Returns a list of tables tables within the specified dataset from 'My Workspace'

| Input       | Comments                                                                                                                                                          | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                                                                   |         |
| Dataset ID  | A dataset is a spreadsheet like document that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |         |
| Top         | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000.                                                 |         |
| Page Offset | Provide an integer value for the page offset for the given object's results.                                                                                      |         |

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
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                      |          |
| Header                  | A list of headers to send with the request.                                                                                                                                                                              |          |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                 | json     |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                      |          |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                     | false    |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                               | 0        |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                          | false    |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                                | 0        |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                         | false    |

### Update Table

Updates the metadata and schema for the specified table within the specified dataset from 'My Workspace'

| Input      | Comments                                                                                                                                                          | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection |                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Dataset ID | A dataset is a spreadsheet like document that can be used to generate reports and visuals in Power BI. Datasets must be 'Push' datasets to be accessible via API. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Table Name |                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Columns    |                                                                                                                                                                   | <code>[<br /> {<br /> "name": "ProductID",<br /> "dataType": "Int64"<br /> },<br /> {<br /> "name": "Name",<br /> "dataType": "string"<br /> },<br /> {<br /> "name": "Category",<br /> "dataType": "string"<br /> },<br /> {<br /> "name": "IsCompete",<br /> "dataType": "bool"<br /> },<br /> {<br /> "name": "ManufacturedOn",<br /> "dataType": "DateTime"<br /> },<br /> {<br /> "name": "Sales",<br /> "dataType": "Int64",<br /> "formatString": "Currency"<br /> }<br />]</code> |
