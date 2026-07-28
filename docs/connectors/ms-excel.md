---
title: Microsoft Excel Connector
sidebar_label: Microsoft Excel
description: Parse and build .xlsx files (spreadsheets)
---

![Microsoft Excel](./assets/ms-excel.png#connector-icon)
[Microsoft Excel](https://www.microsoft.com/en-us/microsoft-365/excel) is a spreadsheet application developed by Microsoft. It features calculation, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications.
This component allows you to read and build .xlsx files. (spreadsheets)

## Connections

### OAuth 2.0 {#ms-excel-oauth}

Authenticate using OAuth 2.0

<Vimeo video="907604023" />

To connect Microsoft Excel, create and configure an App Registration in the [Microsoft Entra admin center](https://entra.microsoft.com/).

#### Prerequisites

- A Microsoft 365 account with access to SharePoint or OneDrive
- Administrator access to [Microsoft Entra](https://entra.microsoft.com/) (Azure Active Directory)

#### Setup Steps

1. Navigate to [Microsoft Entra](https://entra.microsoft.com/) > **Identity** > **Applications** > **App registrations**
2. Select **New registration**
3. Configure the basic settings:
   - **Name**: Provide a descriptive name for the application
   - **Supported account types**: Select **Accounts in any organizational directory (Any Azure AD directory - Multitenant)**
   - **Redirect URI**: Select **Web** platform and add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Click **Register** to create the app registration
5. From the **Overview** page, copy the **Application (client) ID**
6. Navigate to **Certificates & Secrets** > **Client secrets** tab
7. Click **New client secret**, provide a description, select an expiration period, and click **Add**
8. Copy the secret **Value** immediately -- it cannot be retrieved later
9. Navigate to **API Permissions** and click **Add a permission**
10. Select **Microsoft Graph** > **Delegated permissions** and select all permissions required for the integration

:::note[Refresh Token Support]
Include the `offline_access` scope in the app registration. It is essential for maintaining the OAuth connection and receiving refresh tokens. Without it, re-authentication is required every hour.
:::

#### Configure the Connection

Create a connection of type **Microsoft Excel OAuth 2.0**:

- **Client ID**: The **Application (client) ID** from the app registration **Overview** page
- **Client Secret**: The secret **Value** created above
- **Scopes**: Space-separated list of OAuth 2.0 permission scopes. The default value covers common file and site operations:
  ```
  Files.ReadWrite.All Sites.Read.All Sites.ReadWrite.All offline_access
  ```
  Refer to [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference) for additional scope information

For non-multitenant app registrations, replace the default **Authorize URL** and **Token URL** with tenant-specific values:

- **Authorize URL**: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/authorize`
- **Token URL**: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token`

#### App Verification and Admin Consent

Microsoft requires Azure AD app registrations used in multi-tenant deployments to complete a publisher verification process. This review confirms the app developer's identity, giving end users confidence that they are authorizing a legitimate, verified application.

Azure AD app registrations have two distinct verification concepts that affect how users experience the authentication flow.

#### Publisher Verification

**Complete publisher verification before deploying to end users.** Without it, the Microsoft consent screen displays **"Unverified"** next to the app name. This reduces user trust and may prevent users in organizations with strict Azure AD policies from being able to authorize the app at all.

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

| Input         | Comments                                                                          | Default                                                               |
| ------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Scopes        | Space-separated list of OAuth 2.0 permission scopes required for the integration. | Files.ReadWrite.All Sites.Read.All Sites.ReadWrite.All offline_access |
| Client ID     | The Client ID from the OAuth application registration in the Azure Portal.        |                                                                       |
| Client Secret | The Client Secret from the OAuth application registration in the Azure Portal.    |                                                                       |
| Source        | The source from which the workbooks will be listed.                               |                                                                       |

## Actions

### Build Spreadsheet {#build}

Creates a buffer containing a spreadsheet made from a 2D JavaScript array.

| Input            | Comments                                                                                                                          | Default                                                                                                                                                                                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Spreadsheet Data | A 2D array of cell values to insert into the spreadsheet. Each inner array represents a row.                                      | <code>[<br /> [<br /> 1,<br /> 2,<br /> 3,<br /> 4,<br /> 5<br /> ],<br /> [<br /> "foo",<br /> "bar",<br /> "2014-02-19T14:30:00.000Z",<br /> "0.3"<br /> ],<br /> [<br /> true,<br /> false,<br /> null,<br /> "sheetjs"<br /> ]<br />]</code> |
| File Name        | The name to assign to the generated spreadsheet file.                                                                             |                                                                                                                                                                                                                                                  |
| Create Options   | Configuration options for spreadsheet generation, such as column widths. Accepts a JSON object with node-xlsx compatible options. | <code>{<br /> "!cols": [<br /> {<br /> "wch": 6<br /> },<br /> {<br /> "wch": 7<br /> },<br /> {<br /> "wch": 10<br /> },<br /> {<br /> "wch": 20<br /> }<br /> ]<br />}</code>                                                                  |

### Build Spreadsheet with Multiple Sheets {#buildmultiple}

Creates a buffer containing multiple spreadsheets made from a 3D JavaScript array.

| Input                  | Comments                                                                                                                                  | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spreadsheet Data       | A 3D array of sheet data. Each top-level array is a sheet, containing rows of cell values.                                                | <code>[<br /> [<br /> [<br /> 4,<br /> 5,<br /> 6<br /> ],<br /> [<br /> 7,<br /> 8,<br /> 9,<br /> 10<br /> ],<br /> [<br /> 11,<br /> 12,<br /> 13,<br /> 14<br /> ],<br /> [<br /> "baz",<br /> null,<br /> "qux"<br /> ]<br /> ],<br /> [<br /> [<br /> 1,<br /> 2,<br /> 3,<br /> 4,<br /> 5<br /> ],<br /> [<br /> "foo",<br /> "bar",<br /> "2014-02-19T14:30:00.000Z",<br /> "0.3"<br /> ],<br /> [<br /> true,<br /> false,<br /> null,<br /> "sheetjs"<br /> ]<br /> ]<br />]</code> |
| Sheet Names            | The name to assign to each sheet in the spreadsheet.                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Structured Sheet Names | A JSON array of sheet names as an alternative to the Sheet Names input. Takes priority over the Sheet Names input when both are provided. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Create Options         | Configuration options for spreadsheet generation, such as column widths. Accepts a JSON object with node-xlsx compatible options.         | <code>{<br /> "!cols": [<br /> {<br /> "wch": 6<br /> },<br /> {<br /> "wch": 7<br /> },<br /> {<br /> "wch": 10<br /> },<br /> {<br /> "wch": 20<br /> }<br /> ]<br />}</code>                                                                                                                                                                                                                                                                                                                |

### Clear Cell Range {#clearcellrange}

Clear range values such as format, fill, and border.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to clear cells from.                   |         |
| Worksheet ID     | The ID or name of the worksheet to clear cells from.                                      |         |
| Address          | The address of the range to update.                                                       |         |
| Apply To         | Determines the type of clear action.                                                      |         |

### Create Column {#createcolumn}

Creates a column object inside a worksheet table.

| Input            | Comments                                                                                                                                                                                                                                                                      | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.                                                                                                                                                                                     |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                                                                                                                                                             |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to create the column in.                                                                                                                                                                                                   |         |
| Worksheet ID     | The ID or name of the worksheet to create the column in.                                                                                                                                                                                                                      |         |
| Table ID         | The ID or name of the table to create the column in.                                                                                                                                                                                                                          |         |
| Values           | A two-dimensional array of unformatted values of the table column.                                                                                                                                                                                                            |         |
| Column ID        | Specifies the relative position of the new column. The previous column at this position is shifted to the right. The index value should be equal to or less than the last column's index value, so it can't be used to append a column at the end of the table. Zero-indexed. |         |

### Create Multiple Rows {#createmultiplerows}

Adds rows to the end of a table.

| Input            | Comments                                                                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.                                                                      |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                                              |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to create the row in.                                                                                       |         |
| Worksheet ID     | The ID or name of the worksheet to create the row in.                                                                                                          |         |
| Table ID         | The ID or name of the table to create the row in.                                                                                                              |         |
| Values           | A 2D array of values for the row cells.                                                                                                                        |         |
| Row Index        | Specifies the relative position of the new row. If null, the addition happens at the end. Any rows below the inserted row are shifted downwards. Zero-indexed. |         |

### Create Row {#createrow}

Creates a row object inside a worksheet table.

| Input            | Comments                                                                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.                                                                      |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                                              |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to create the row in.                                                                                       |         |
| Worksheet ID     | The ID or name of the worksheet to create the row in.                                                                                                          |         |
| Table ID         | The ID or name of the table to create the row in.                                                                                                              |         |
| Values           | A 2D array of values for the row cells.                                                                                                                        |         |
| Row Index        | Specifies the relative position of the new row. If null, the addition happens at the end. Any rows below the inserted row are shifted downwards. Zero-indexed. |         |

### Create Table {#createtable}

Creates a table object inside a worksheet.

| Input            | Comments                                                                                                                                           | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.                                                          |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                                  |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to create the table in.                                                                         |         |
| Worksheet ID     | The ID of the worksheet to create the table in.                                                                                                    |         |
| Address          | Address or name of the range object representing the data source. If the address doesn't contain a sheet name, the currently active sheet is used. |         |
| Has Headers      | When true, indicates the data being imported has column labels. When false, Excel generates a header row and shifts data down by one row.          | false   |

### Create Worksheet {#createworksheet}

Creates a worksheet object inside a workbook.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to update.                             |         |
| Worksheet Name   | The name shown on the worksheet tab in the workbook. Must be unique within the workbook.  |         |

### Delete Cell Range {#deletecellrange}

Deletes the cells associated with the range.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to delete cells from.                  |         |
| Worksheet ID     | The ID or name of the worksheet to delete cells from.                                     |         |
| Address          | The address of the range to update.                                                       |         |
| Shift            | Specifies which way to shift the cells.                                                   |         |

### Delete Column {#deletecolumn}

Deletes a column object from a worksheet table.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to delete the column from.             |         |
| Worksheet ID     | The ID or name of the worksheet to delete the column from.                                |         |
| Table ID         | The ID or name of the table to delete the column from.                                    |         |
| Column ID        | The id or name of the column to delete.                                                   |         |

### Delete Table {#deletetable}

Deletes a table object from a worksheet.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to delete the table from.              |         |
| Worksheet ID     | The ID or name of the worksheet to delete the table from.                                 |         |
| Table ID         | The ID or name of the table to delete.                                                    |         |

### Delete Worksheet {#deleteworksheet}

Deletes a worksheet from a workbook.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to delete.                             |         |
| Worksheet ID     | The ID of the worksheet to delete.                                                        |         |

### Get Cell {#getcell}

Retrieves a cell from a worksheet.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list cells from.                    |         |
| Worksheet ID     | The ID or name of the worksheet to list cells from.                                       |         |
| Row Index        | The zero-based index of the row to access within the worksheet.                           |         |
| Column Index     | The zero-based index of the column to access within the worksheet.                        |         |

### Get Cell Range {#getcellrange}

Retrieve the properties and relationships of a range object.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list cells from.                    |         |
| Worksheet ID     | The ID or name of the worksheet to list cells from.                                       |         |

### Get Column {#getcolumn}

Retrieves a column object from a worksheet table.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list column from.                   |         |
| Worksheet ID     | The ID or name of the worksheet to list column from.                                      |         |
| Table ID         | The ID or name of the table to list column from.                                          |         |
| Column ID        | The ID or name of the column to retrieve.                                                 |         |

### Get Table {#gettable}

Retrieves a table object from a worksheet.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to get the table from.                 |         |
| Worksheet ID     | The ID or name of the worksheet to get the table from.                                    |         |
| Table ID         | The unique identifier or name of the table within the worksheet.                          |         |

### Get Worksheet {#getworksheet}

Retrieves a worksheet object from a workbook.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook to retrieve.                                                       |         |
| Worksheet ID     | The ID or name of the worksheet to retrieve.                                              |         |

### List Columns {#listcolumns}

Retrieve a list of columns from a worksheet table.

| Input            | Comments                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.                                          |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                  |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list columns from.                                                           |         |
| Worksheet ID     | The ID or name of the worksheet to list columns from.                                                                              |         |
| Table ID         | The ID or name of the table to list columns from.                                                                                  |         |
| Fetch All        | When true, automatically fetches all pages of results using pagination.                                                            | false   |
| Pagination       | Result paging controls: page size, number of items to skip, and next-page token.                                                   |         |
| Top              | The maximum number of results to return per page.                                                                                  |         |
| Skip             | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Skip Token       | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Filters          | Optional query controls to sort and refine the results.                                                                            |         |
| Filter           | An OData filter expression to narrow down results. For example: startswith(givenName,'J').                                         |         |
| Order By         | An OData orderBy expression to sort results. For example: displayName desc.                                                        |         |
| Search           | A search string to filter results by matching against indexed properties.                                                          |         |
| Select           | A comma-separated list of properties to include in the response. Reduces payload size.                                             |         |
| Expand           | A comma-separated list of related resources to expand and include in the response.                                                 |         |
| Format           | The media format for the response. For example: json.                                                                              |         |

### List Rows {#listrows}

Retrieve a list of rows from a worksheet table.

| Input            | Comments                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.                                          |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                  |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list rows from.                                                              |         |
| Worksheet ID     | The ID or name of the worksheet to list rows from.                                                                                 |         |
| Table ID         | The ID or name of the table to list rows from.                                                                                     |         |
| Fetch All        | When true, automatically fetches all pages of results using pagination.                                                            | false   |
| Pagination       | Result paging controls: page size, number of items to skip, and next-page token.                                                   |         |
| Top              | The maximum number of results to return per page.                                                                                  |         |
| Skip             | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Skip Token       | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Filters          | Optional query controls to sort and refine the results.                                                                            |         |
| Filter           | An OData filter expression to narrow down results. For example: startswith(givenName,'J').                                         |         |
| Order By         | An OData orderBy expression to sort results. For example: displayName desc.                                                        |         |
| Search           | A search string to filter results by matching against indexed properties.                                                          |         |
| Select           | A comma-separated list of properties to include in the response. Reduces payload size.                                             |         |
| Expand           | A comma-separated list of related resources to expand and include in the response.                                                 |         |
| Format           | The media format for the response. For example: json.                                                                              |         |

### List Tables {#listtables}

Retrieve a list of tables from a worksheet.

| Input            | Comments                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.                                          |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                  |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list tables from.                                                            |         |
| Worksheet ID     | The ID or name of the worksheet to list tables from.                                                                               |         |
| Fetch All        | When true, automatically fetches all pages of results using pagination.                                                            | false   |
| Pagination       | Result paging controls: page size, number of items to skip, and next-page token.                                                   |         |
| Top              | The maximum number of results to return per page.                                                                                  |         |
| Skip             | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Skip Token       | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Filters          | Optional query controls to sort and refine the results.                                                                            |         |
| Filter           | An OData filter expression to narrow down results. For example: startswith(givenName,'J').                                         |         |
| Order By         | An OData orderBy expression to sort results. For example: displayName desc.                                                        |         |
| Search           | A search string to filter results by matching against indexed properties.                                                          |         |
| Select           | A comma-separated list of properties to include in the response. Reduces payload size.                                             |         |
| Expand           | A comma-separated list of related resources to expand and include in the response.                                                 |         |
| Format           | The media format for the response. For example: json.                                                                              |         |

### List Workbooks {#listworkbooks}

Returns a collection of workbooks from either a OneDrive or SharePoint site.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Path             | The path to the file or folder within the drive. Use this or Drive or Site ID.            |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from. Use this or Path.       |         |
| List or Item ID  | The SharePoint list ID or OneDrive item ID used to scope the workbook search.             |         |
| Fetch All        | When true, automatically fetches all pages of results using pagination.                   | false   |
| Expand           | A comma-separated list of related resources to expand and include in the response.        |         |
| Select           | A comma-separated list of properties to include in the response. Reduces payload size.    |         |
| Skip Token       | Retrieves the next page of results from result sets that span multiple pages.             |         |
| Top              | The maximum number of results to return per page.                                         |         |
| Order By         | An OData orderBy expression to sort results. For example: displayName desc.               |         |

### List Worksheets {#listworksheets}

Retrieve a list of worksheet objects.

| Input            | Comments                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.                                          |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                  |         |
| Workbook ID      | The ID of the workbook to retrieve.                                                                                                |         |
| Fetch All        | When true, automatically fetches all pages of results using pagination.                                                            | false   |
| Pagination       | Result paging controls: page size, number of items to skip, and next-page token.                                                   |         |
| Top              | The maximum number of results to return per page.                                                                                  |         |
| Skip             | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Skip Token       | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Filters          | Optional query controls to sort and refine the results.                                                                            |         |
| Filter           | An OData filter expression to narrow down results. For example: startswith(givenName,'J').                                         |         |
| Order By         | An OData orderBy expression to sort results. For example: displayName desc.                                                        |         |
| Search           | A search string to filter results by matching against indexed properties.                                                          |         |
| Select           | A comma-separated list of properties to include in the response. Reduces payload size.                                             |         |
| Expand           | A comma-separated list of related resources to expand and include in the response.                                                 |         |
| Format           | The media format for the response. For example: json.                                                                              |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Microsoft Excel API.

| Input                   | Comments                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.                                                                                                                            |         |
| URL                     | Input the path only (/me/drive), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/me/drive, only /me/drive is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                  |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                        | false   |

### Read from Buffer {#parsebuffer}

Parses an xlsx file from a buffer and outputs an array of worksheets.

| Input | Comments                                                     | Default |
| ----- | ------------------------------------------------------------ | ------- |
| File  | A spreadsheet file or buffer to be parsed into array values. |         |

### Read from URL {#parse}

Parses an xlsx file from a URL endpoint and outputs an array of worksheets.

| Input    | Comments                                        | Default |
| -------- | ----------------------------------------------- | ------- |
| File URL | The URL of the xlsx file to download and parse. |         |

### Update Cell Range {#updatecellrange}

Update the properties of a range object.

| Input            | Comments                                                                                                                                                                                     | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.                                                                                                    |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                                                                            |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to update cells from.                                                                                                                     |         |
| Worksheet ID     | The ID or name of the worksheet to update cells from.                                                                                                                                        |         |
| Address          | The address of the range to update.                                                                                                                                                          |         |
| Column Hidden    | When true, all columns in the current range are hidden.                                                                                                                                      | false   |
| Row Hidden       | When true, all rows in the current range are hidden.                                                                                                                                         | false   |
| Formulas         | Represents the formula in A1-style notation.                                                                                                                                                 |         |
| Formulas Local   | Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German. |         |
| Formulas R1C1    | Represents the formula in R1C1-style notation.                                                                                                                                               |         |
| Number Format    | Represents Excel's number format code for the given cell.                                                                                                                                    |         |
| Values           | Represents the raw values of the specified range. The data returned could be of type string, number, or a Boolean. Cell that contains an error returns the error string.                     |         |

### Update Column {#updatecolumn}

Updates a column object from a worksheet table.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported. |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to update the column from.             |         |
| Worksheet ID     | The ID or name of the worksheet to update the column from.                                |         |
| Table ID         | The ID or name of the table to update the column from.                                    |         |
| Column ID        | The id or name of the column to update.                                                   |         |
| Values           | Represents the raw values of the specified range.                                         |         |

### Update Table {#updatetable}

Updates a table object from a worksheet.

| Input            | Comments                                                                                      | Default |
| ---------------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.     |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                             |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to update the table from.                  |         |
| Worksheet ID     | The ID or name of the worksheet to update the table from.                                     |         |
| Table ID         | The ID or name of the table to update.                                                        |         |
| Name             | The display name of the table within the worksheet.                                           |         |
| Show Headers     | When true, the header row of the table is visible.                                            | false   |
| Show Totals      | When true, the totals row of the table is visible.                                            | false   |
| Style            | The Excel table style to apply. Controls visual formatting such as banding and header colors. |         |

### Update Worksheet {#updateworksheet}

Updates a worksheet object from a workbook.

| Input                | Comments                                                                                                                                                                      | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft Excel connection to use. OneDrive and SharePoint connections are supported.                                                                                     |         |
| Drive or Site ID     | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                                                             |         |
| Workbook ID          | The ID of the workbook that contains the worksheet to update.                                                                                                                 |         |
| Worksheet ID         | The ID of the worksheet to update.                                                                                                                                            |         |
| Worksheet Name       | The new display name of the worksheet.                                                                                                                                        |         |
| Position             | The zero-based position of the worksheet within the workbook.                                                                                                                 |         |
| Worksheet Visibility | The visibility state of the worksheet. Visible worksheets appear in the tab bar. Hidden worksheets can be unhidden from the UI. VeryHidden worksheets require code to unhide. |         |
