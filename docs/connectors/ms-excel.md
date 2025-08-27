---
title: Microsoft Excel Connector
sidebar_label: Microsoft Excel
description: Parse and build .xlsx files (spreadsheets)
---

![Microsoft Excel](./assets/ms-excel.png#connector-icon)
Parse and build .xlsx files (spreadsheets)

## Connections

### Microsoft Excel OAuth 2.0

Connect to Microsoft Excel using OAuth 2.0

Once you have an instance of Microsoft SharePoint or OneDrive licensed to your account, you will need to create and configure a new "App Registration" within your [Azure Active Directory tenant](https://portal.azure.com/#home).
When creating the application you will be prompted to select the 'Supported account types'. Under this section, be sure to select 'Accounts in any organizational directory (Any Azure AD directory - Multitenant)'.

You will need to go to "Platforms" and add the "Web" platform. In that section you should add the OAuth 2.0 callback URL - `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` - as a **Redirect URI**.

Next, go to "Certificates & Secrets" for the app and add a new **Client Secret**. Note this value as you will need to supply it to the connection.

You will also need the **Application (client) ID** from the "Overview" page.

The last step of configuring the "App Registration" is assigning "App Permissions". Click "Add Permission", click on the square labeled "Microsoft Graph", and then "Delegated permissions". You should select all permissions that are required for your desired integration.

- Additionally, ensure the `offline_access` scope is included in your app registration. It is essential to maintain your OAuth connection and receive refresh tokens. Without it, users will need to re-authenticate every hour.

Now, configure the OAuth 2.0 connection.
Add an Microsoft Excel OAuth 2.0 connection config variable:

- Use the **Application (client) ID** value for the **Client ID** field.
- Use the **Client Secret** for the same named field.
- If you didn't select Multitenant when creating the Azure application, you will need to replace the **Authorize URL** and **Token URL** with ones specific to your tenant.

Save your integration and you should be able to authenticate a user through Microsoft Excel with OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                      | Default                                                               |
| ------------- | ------------------------------------------------------------- | --------------------------------------------------------------------- |
| Scopes        | Microsoft Excel Scopes.                                       | Files.ReadWrite.All Sites.Read.All Sites.ReadWrite.All offline_access |
| Client ID     | Get this value from your App Registration in the Azure Portal |                                                                       |
| Client Secret | Get this value from your App Registration in the Azure Portal |                                                                       |
| Source        | The source from which the workbooks will be listed.           |                                                                       |

## Actions

### Build Spreadsheet

Creates a buffer containing a spreadsheet made from a 2D JavaScript array,

| Input            | Comments                                                                                                                                                                                                                                                        | Default                                                                                                                                                                                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Spreadsheet Data | For each item, provide a list of items representing the items to be inserted.                                                                                                                                                                                   | <code>[<br /> [<br /> 1,<br /> 2,<br /> 3,<br /> 4,<br /> 5<br /> ],<br /> [<br /> "foo",<br /> "bar",<br /> "2014-02-19T14:30:00.000Z",<br /> "0.3"<br /> ],<br /> [<br /> true,<br /> false,<br /> null,<br /> "sheetjs"<br /> ]<br />]</code> |
| File Name        | Provide a string value for the name of the file.                                                                                                                                                                                                                |                                                                                                                                                                                                                                                  |
| Create Options   | Here you can provide several configuration options for turning the array into a spreadsheet. For more information on possible configurations, see the documentation for the node library this component was built with. https://www.npmjs.com/package/node-xlsx | <code>{<br /> "!cols": [<br /> {<br /> "wch": 6<br /> },<br /> {<br /> "wch": 7<br /> },<br /> {<br /> "wch": 10<br /> },<br /> {<br /> "wch": 20<br /> }<br /> ]<br />}</code>                                                                  |

### Build Spreadsheet with Multiple Sheets

Creates a buffer containing multiple spreadsheets made from a 3D JavaScript array.

| Input                  | Comments                                                                                                                                                                                                                                                        | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spreadsheet Data       | For each item, provide a list with a list items representing the cells to be inserted.                                                                                                                                                                          | <code>[<br /> [<br /> [<br /> 4,<br /> 5,<br /> 6<br /> ],<br /> [<br /> 7,<br /> 8,<br /> 9,<br /> 10<br /> ],<br /> [<br /> 11,<br /> 12,<br /> 13,<br /> 14<br /> ],<br /> [<br /> "baz",<br /> null,<br /> "qux"<br /> ]<br /> ],<br /> [<br /> [<br /> 1,<br /> 2,<br /> 3,<br /> 4,<br /> 5<br /> ],<br /> [<br /> "foo",<br /> "bar",<br /> "2014-02-19T14:30:00.000Z",<br /> "0.3"<br /> ],<br /> [<br /> true,<br /> false,<br /> null,<br /> "sheetjs"<br /> ]<br /> ]<br />]</code> |
| Sheet Names            | Provide a string value for the name of the file.                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Structured Sheet Names | Use this input if you want to provide a JSON Array of sheetNames instead of using the default sheetNames input. Please note that this input takes priority over the sheetNames input.                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Create Options         | Here you can provide several configuration options for turning the array into a spreadsheet. For more information on possible configurations, see the documentation for the node library this component was built with. https://www.npmjs.com/package/node-xlsx | <code>{<br /> "!cols": [<br /> {<br /> "wch": 6<br /> },<br /> {<br /> "wch": 7<br /> },<br /> {<br /> "wch": 10<br /> },<br /> {<br /> "wch": 20<br /> }<br /> ]<br />}</code>                                                                                                                                                                                                                                                                                                                |

### Clear Cell Range

Clear range values such as format, fill, and border.

| Input            | Comments                                                                | Default |
| ---------------- | ----------------------------------------------------------------------- | ------- |
| Connection       |                                                                         |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.       |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to clear cells from. |         |
| Worksheet ID     | The ID or name of the worksheet to clear cells from.                    |         |
| Address          | The address of the range to update.                                     |         |
| Apply To         | Determines the type of clear action.                                    |         |

### Create Column

Creates a Column object inside a worksheet table.

| Input            | Comments                                                                                                                                                                                                                                                                      | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                                                                                                               |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                                                                                                                                                             |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to create the column in.                                                                                                                                                                                                   |         |
| Worksheet ID     | The ID or name of the worksheet to create the column in.                                                                                                                                                                                                                      |         |
| Table ID         | The ID or name of the table to create the column in.                                                                                                                                                                                                                          |         |
| Values           | A two-dimensional array of unformatted values of the table column.                                                                                                                                                                                                            |         |
| Column Id        | Specifies the relative position of the new column. The previous column at this position is shifted to the right. The index value should be equal to or less than the last column's index value, so it can't be used to append a column at the end of the table. Zero-indexed. |         |

### Create Multiple Rows

Adds rows to the end of a table.

| Input            | Comments                                                                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                                              |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to create the row in.                                                                                       |         |
| Worksheet ID     | The ID or name of the worksheet to create the row in.                                                                                                          |         |
| Table ID         | The ID or name of the table to create the row in.                                                                                                              |         |
| Values           | The values to update in the row.                                                                                                                               |         |
| Row Index        | Specifies the relative position of the new row. If null, the addition happens at the end. Any rows below the inserted row are shifted downwards. Zero-indexed. |         |

### Create Row

Creates a row object inside a worksheet table.

| Input            | Comments                                                                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                                              |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to create the row in.                                                                                       |         |
| Worksheet ID     | The ID or name of the worksheet to create the row in.                                                                                                          |         |
| Table ID         | The ID or name of the table to create the row in.                                                                                                              |         |
| Values           | The values to update in the row.                                                                                                                               |         |
| Row Index        | Specifies the relative position of the new row. If null, the addition happens at the end. Any rows below the inserted row are shifted downwards. Zero-indexed. |         |

### Create Table

Creates a table object inside a worksheet.

| Input            | Comments                                                                                                                                                                                                           | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection       |                                                                                                                                                                                                                    |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                                                                                                  |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to create the table in.                                                                                                                                         |         |
| Worksheet ID     | The ID of the worksheet to create the table in.                                                                                                                                                                    |         |
| Address          | Address or name of the range object representing the data source. If the address doesn't contain a sheet name, the currently active sheet is used.                                                                 |         |
| Has Headers      | Boolean value that indicates whether the data being imported has column labels. If the source doesn't contain headers (when this property set to false), Excel generates header shifting the data down by one row. | false   |

### Create Worksheet

Creates a worksheet object inside a workbook.

| Input            | Comments                                                          | Default |
| ---------------- | ----------------------------------------------------------------- | ------- |
| Connection       |                                                                   |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from. |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to update.     |         |
| Worksheet Name   | The display name of the worksheet.                                |         |

### Delete Cell Range

Deletes the cells associated with the range.

| Input            | Comments                                                                 | Default |
| ---------------- | ------------------------------------------------------------------------ | ------- |
| Connection       |                                                                          |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.        |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to delete cells from. |         |
| Worksheet ID     | The ID or name of the worksheet to delete cells from.                    |         |
| Address          | The address of the range to update.                                      |         |
| Shift            | Specifies which way to shift the cells.                                  |         |

### Delete Column

Deletes a column object from a worksheet table.

| Input            | Comments                                                                      | Default |
| ---------------- | ----------------------------------------------------------------------------- | ------- |
| Connection       |                                                                               |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.             |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to delete the column from. |         |
| Worksheet ID     | The ID or name of the worksheet to delete the column from.                    |         |
| Table ID         | The ID or name of the table to delete the column from.                        |         |
| Column Id        | The id or name of the column to delete.                                       |         |

### Delete Table

Deletes a table object from a worksheet.

| Input            | Comments                                                                     | Default |
| ---------------- | ---------------------------------------------------------------------------- | ------- |
| Connection       |                                                                              |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.            |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to delete the table from. |         |
| Worksheet ID     | The ID or name of the worksheet to delete the table from.                    |         |
| Table ID         | The ID or name of the table to delete.                                       |         |

### Delete Worksheet

Deletes a worksheet from a workbook.

| Input            | Comments                                                          | Default |
| ---------------- | ----------------------------------------------------------------- | ------- |
| Connection       |                                                                   |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from. |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to delete.     |         |
| Worksheet ID     | The ID of the worksheet to delete.                                |         |

### Get Cell

Retrieves a cell from a worksheet.

| Input            | Comments                                                               | Default |
| ---------------- | ---------------------------------------------------------------------- | ------- |
| Connection       |                                                                        |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.      |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list cells from. |         |
| Worksheet ID     | The ID or name of the worksheet to list cells from.                    |         |
| Row Index        | The number of the row to retrieve.                                     |         |
| Column Index     | The number of the column to retrieve.                                  |         |

### Get Cell Range

Retrieve the properties and relationships of range object.

| Input            | Comments                                                               | Default |
| ---------------- | ---------------------------------------------------------------------- | ------- |
| Connection       |                                                                        |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.      |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list cells from. |         |
| Worksheet ID     | The ID or name of the worksheet to list cells from.                    |         |

### Get Column

Retrieves a column object from a worksheet table.

| Input            | Comments                                                                | Default |
| ---------------- | ----------------------------------------------------------------------- | ------- |
| Connection       |                                                                         |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.       |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list column from. |         |
| Worksheet ID     | The ID or name of the worksheet to list column from.                    |         |
| Table ID         | The ID or name of the table to list column from.                        |         |
| Column Id        | The id or name of the column to retrieve.                               |         |

### Get Table

Retrieves a table object from a worksheet.

| Input            | Comments                                                                  | Default |
| ---------------- | ------------------------------------------------------------------------- | ------- |
| Connection       |                                                                           |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.         |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to get the table from. |         |
| Worksheet ID     | The ID or name of the worksheet to get the table from.                    |         |
| Table ID         | The ID or name of the table to retrieve                                   |         |

### Get Worksheet

Retrieves a worksheet object from a workbook.

| Input            | Comments                                                          | Default |
| ---------------- | ----------------------------------------------------------------- | ------- |
| Connection       |                                                                   |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from. |         |
| Workbook ID      | The ID of the workbook to retrieve.                               |         |
| Worksheet ID     | The ID or name of the worksheet to retrieve.                      |         |

### List Columns

Retrieve a list of columns from a worksheet table.

| Input            | Comments                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                    |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                  |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list columns from.                                                           |         |
| Worksheet ID     | The ID or name of the worksheet to list columns from.                                                                              |         |
| Table ID         | The ID or name of the table to list columns from.                                                                                  |         |
| Fetch All        | Set to true to retrieve all results.                                                                                               | false   |
| Expand           | Retrieves related resources.                                                                                                       |         |
| Filter           | Filters results (rows).                                                                                                            |         |
| Format           | Returns the results in the specified media format.                                                                                 |         |
| Order By         | Orders results.                                                                                                                    |         |
| Search           | Returns results based on search criteria.                                                                                          |         |
| Select           | Filters properties (columns).                                                                                                      |         |
| Skip             | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Skip Token       | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Top              | Sets the page size of results.                                                                                                     |         |

### List Rows

Retrieve a list of rows from a worksheet table.

| Input            | Comments                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                    |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                  |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list rows from.                                                              |         |
| Worksheet ID     | The ID or name of the worksheet to list rows from.                                                                                 |         |
| Table ID         | The ID or name of the table to list rows from.                                                                                     |         |
| Fetch All        | Set to true to retrieve all results.                                                                                               | false   |
| Expand           | Retrieves related resources.                                                                                                       |         |
| Filter           | Filters results (rows).                                                                                                            |         |
| Format           | Returns the results in the specified media format.                                                                                 |         |
| Order By         | Orders results.                                                                                                                    |         |
| Search           | Returns results based on search criteria.                                                                                          |         |
| Select           | Filters properties (columns).                                                                                                      |         |
| Skip             | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Skip Token       | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Top              | Sets the page size of results.                                                                                                     |         |

### List Tables

Retrieve a list of tables from a worksheet.

| Input            | Comments                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                    |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                  |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to list tables from.                                                            |         |
| Worksheet ID     | The ID or name of the worksheet to list tables from.                                                                               |         |
| Fetch All        | Set to true to retrieve all results.                                                                                               | false   |
| Expand           | Retrieves related resources.                                                                                                       |         |
| Filter           | Filters results (rows).                                                                                                            |         |
| Format           | Returns the results in the specified media format.                                                                                 |         |
| Order By         | Orders results.                                                                                                                    |         |
| Search           | Returns results based on search criteria.                                                                                          |         |
| Select           | Filters properties (columns).                                                                                                      |         |
| Skip             | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Skip Token       | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Top              | Sets the page size of results.                                                                                                     |         |

### List Workbooks

Return a collection of Workbooks from either a OneDrive or SharePoint site.

| Input            | Comments                                                                            | Default |
| ---------------- | ----------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                     |         |
| Path             | The path to the file or folder. Use this or Drive Or Site Id.                       |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from. Use this or Path. |         |
| List or Item ID  | The ID of the list or item to retrieve.                                             |         |
| Fetch All        | Set to true to retrieve all results.                                                | false   |
| Expand           | Retrieves related resources.                                                        |         |
| Select           | Filters properties (columns).                                                       |         |
| Skip Token       | Retrieves the next page of results from result sets that span multiple pages.       |         |
| Top              | Sets the page size of results.                                                      |         |
| Order By         | Orders results.                                                                     |         |

### List Worksheets

Retrieve a list of worksheet objects.

| Input            | Comments                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                    |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                  |         |
| Workbook ID      | The ID of the workbook to retrieve.                                                                                                |         |
| Fetch All        | Set to true to retrieve all results.                                                                                               | false   |
| Expand           | Retrieves related resources.                                                                                                       |         |
| Filter           | Filters results (rows).                                                                                                            |         |
| Format           | Returns the results in the specified media format.                                                                                 |         |
| Order By         | Orders results.                                                                                                                    |         |
| Search           | Returns results based on search criteria.                                                                                          |         |
| Select           | Filters properties (columns).                                                                                                      |         |
| Skip             | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Skip Token       | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Top              | Sets the page size of results.                                                                                                     |         |

### Raw Request

Send raw HTTP request to Microsoft Excel API.

| Input                   | Comments                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                      |         |
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

### Read From Buffer

Parse an xlsx file from a Buffer, outputs an array of worksheets

| Input | Comments                                                            | Default |
| ----- | ------------------------------------------------------------------- | ------- |
| File  | Provide a Spreadsheet (file/buffer) to be parsed into array values. |         |

### Read From URL

Parse an xlsx file from a URL endpoint, outputs an array of worksheets

| Input    | Comments                         | Default |
| -------- | -------------------------------- | ------- |
| File URL | The URL of the file to be parsed |         |

### Update Cell Range

Update the properties of range object.

| Input            | Comments                                                                                                                                                                                     | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                              |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.                                                                                                                            |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to update cells from.                                                                                                                     |         |
| Worksheet ID     | The ID or name of the worksheet to update cells from.                                                                                                                                        |         |
| Address          | The address of the range to update.                                                                                                                                                          |         |
| Column Hidden    | Represents if all columns of the current range are hidden.                                                                                                                                   | false   |
| Row Hidden       | Represents if all rows of the current range are hidden.                                                                                                                                      | false   |
| Formulas         | Represents the formula in A1-style notation.                                                                                                                                                 |         |
| Formulas Local   | Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German. |         |
| Formulas R1C1    | Represents the formula in R1C1-style notation.                                                                                                                                               |         |
| Number Format    | Represents Excel's number format code for the given cell.                                                                                                                                    |         |
| Values           | Represents the raw values of the specified range. The data returned could be of type string, number, or a Boolean. Cell that contains an error returns the error string.                     |         |

### Update Column

Updates a column object from a worksheet table.

| Input            | Comments                                                                      | Default |
| ---------------- | ----------------------------------------------------------------------------- | ------- |
| Connection       |                                                                               |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.             |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to update the column from. |         |
| Worksheet ID     | The ID or name of the worksheet to update the column from.                    |         |
| Table ID         | The ID or name of the table to update the column from.                        |         |
| Column Id        | The id or name of the column to update.                                       |         |
| Values           | Represents the raw values of the specified range.                             |         |

### Update Table

Updates a table object from a worksheet.

| Input            | Comments                                                                     | Default |
| ---------------- | ---------------------------------------------------------------------------- | ------- |
| Connection       |                                                                              |         |
| Drive or Site ID | The ID of the OneDrive or SharePoint site to list workbooks from.            |         |
| Workbook ID      | The ID of the workbook that contains the worksheet to update the table from. |         |
| Worksheet ID     | The ID or name of the worksheet to update the table from.                    |         |
| Table ID         | The ID or name of the table to update.                                       |         |
| Name             | The name of the table.                                                       |         |
| Show Headers     | Whether to show the headers of the table.                                    | false   |
| Show Totals      | Whether to show the totals of the table.                                     | false   |
| Style            | The style of the table.                                                      |         |

### Update Worksheet

Updates a worksheet object from a workbook.

| Input                | Comments                                                          | Default |
| -------------------- | ----------------------------------------------------------------- | ------- |
| Connection           |                                                                   |         |
| Drive or Site ID     | The ID of the OneDrive or SharePoint site to list workbooks from. |         |
| Workbook ID          | The ID of the workbook that contains the worksheet to update.     |         |
| Worksheet ID         | The ID of the worksheet to update.                                |         |
| Worksheet Name       | The new display name of the worksheet.                            |         |
| Position             | The zero-based position of the worksheet within the workbook.     |         |
| Worksheet Visibility | The visibility of the worksheet.                                  |         |
