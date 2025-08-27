---
title: Google Sheets Connector
sidebar_label: Google Sheets
description: Create, read, and modify Google Spreadsheets
---

![Google Sheets](./assets/google-sheets.png#connector-icon)
Create, read, and modify Google Spreadsheets

## Connections

### Google Sheets OAuth 2.0

Authenticate requests to Google Sheets using values obtained from the Google Cloud Platform.

The Google Sheets component authenticates requests through Google's OAuth service.
To create a Google Sheets developer account and authenticate using Google OAuth, follow directions [here](https://developers.google.com/sheets/api/quickstart/quickstarts-overview?hl=en)
Now, you will have to configure OAuth 2.0 settings.
Create a new Google Sheets connection.

- For **Client ID** and **Client Secret** enter the values that you got from the Google Cloud Platform auth settings.
- For **Scopes** choose from the list found on the [Google docs](https://developers.google.com/identity/protocols/oauth2/scopes)

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default                                      |
| ------------- | ----------------------------------------------------------------------------------- | -------------------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. | https://www.googleapis.com/auth/spreadsheets |
| Client ID     |                                                                                     |                                              |
| Client Secret |                                                                                     |                                              |

## Actions

### Add Worksheet

Add a new Worksheet to a Google Sheet Document

| Input           | Comments                                                                                                                                                                                                       | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Spreadsheet ID  | Every spreadsheet is represented by a Spreadsheet resource and has a unique spreadsheetId value, containing letters, numbers, hyphens, or underscores. You can find the spreadsheet ID in a Google Sheets URL. |         |
| Worksheet Title | Specifies the title of the sheet.                                                                                                                                                                              |         |
| Column Headings | An array of strings that are the column headings.                                                                                                                                                              |         |
| Connection      |                                                                                                                                                                                                                |         |

### Append Rows

Append new rows to a Worksheet

| Input            | Comments                                                                                                                                                                                                                                                                   | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Spreadsheet ID   | Every spreadsheet is represented by a Spreadsheet resource and has a unique spreadsheetId value, containing letters, numbers, hyphens, or underscores. You can find the spreadsheet ID in a Google Sheets URL.                                                             |         |
| Worksheet Title  | Specifies the title of the sheet.                                                                                                                                                                                                                                          |         |
| Rows             | Can be an array of arrays, with the outer array items representing the rows and the inner array values being the cell values. Can also be an array of objects, where the object keys are the corresponding column header values and the object values are the cell values. |         |
| Store Raw Values | Specifies whether values should be converted as if they were typed into the spreadsheet or whether to store the raw values as provided.                                                                                                                                    | false   |
| Connection       |                                                                                                                                                                                                                                                                            |         |

### Clear Worksheet

Clear all data in the a Worksheet

| Input           | Comments                                                                                                                                                                                                       | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Spreadsheet ID  | Every spreadsheet is represented by a Spreadsheet resource and has a unique spreadsheetId value, containing letters, numbers, hyphens, or underscores. You can find the spreadsheet ID in a Google Sheets URL. |         |
| Worksheet Title | Specifies the title of the sheet.                                                                                                                                                                              |         |
| Connection      |                                                                                                                                                                                                                |         |

### Create Spreadsheet

Create a new Google Sheet Document

| Input          | Comments                             | Default |
| -------------- | ------------------------------------ | ------- |
| Document Title | Specifies the title of the document. |         |
| Connection     |                                      |         |

### List Columns

Get the headers of a Worksheet

| Input           | Comments                                                                                                                                                                                                       | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Spreadsheet ID  | Every spreadsheet is represented by a Spreadsheet resource and has a unique spreadsheetId value, containing letters, numbers, hyphens, or underscores. You can find the spreadsheet ID in a Google Sheets URL. |         |
| Worksheet Title | Specifies the title of the sheet.                                                                                                                                                                              |         |
| Connection      |                                                                                                                                                                                                                |         |

### List Rows

List the cell values of rows in a Worksheet

| Input           | Comments                                                                                                                                                                                                       | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Spreadsheet ID  | Every spreadsheet is represented by a Spreadsheet resource and has a unique spreadsheetId value, containing letters, numbers, hyphens, or underscores. You can find the spreadsheet ID in a Google Sheets URL. |         |
| Worksheet Title | Specifies the title of the sheet.                                                                                                                                                                              |         |
| Limit           | The number of rows to retrieve at once.                                                                                                                                                                        | 100     |
| Offset          | The number of rows to skip from the top.                                                                                                                                                                       | 0       |
| Connection      |                                                                                                                                                                                                                |         |

### List Worksheets

List information about all Worksheets in a Google Sheet Document

| Input          | Comments                                                                                                                                                                                                       | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Spreadsheet ID | Every spreadsheet is represented by a Spreadsheet resource and has a unique spreadsheetId value, containing letters, numbers, hyphens, or underscores. You can find the spreadsheet ID in a Google Sheets URL. |         |
| Connection     |                                                                                                                                                                                                                |         |

### Raw Request

Send raw HTTP request to Google Sheets

| Input                   | Comments                                                                                                                                                                                                                                                                            | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                     |         |
| URL                     | Input the path only (/v4/spreadsheets/{spreadsheetId}), The base URL is already included (https://sheets.googleapis.com). For example, to connect to https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}, only /v4/spreadsheets/{spreadsheetId} is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                             |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                           |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                    |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                 |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                         |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                            | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                 |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                 | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                    | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                 | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                       | false   |

### Remove Worksheet

Remove a Worksheet from a Google Sheet Document

| Input           | Comments                                                                                                                                                                                                       | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Spreadsheet ID  | Every spreadsheet is represented by a Spreadsheet resource and has a unique spreadsheetId value, containing letters, numbers, hyphens, or underscores. You can find the spreadsheet ID in a Google Sheets URL. |         |
| Worksheet Title | Specifies the title of the sheet.                                                                                                                                                                              |         |
| Connection      |                                                                                                                                                                                                                |         |

### Set Header Row

Set the column headings in a Worksheet

| Input           | Comments                                                                                                                                                                                                       | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Spreadsheet ID  | Every spreadsheet is represented by a Spreadsheet resource and has a unique spreadsheetId value, containing letters, numbers, hyphens, or underscores. You can find the spreadsheet ID in a Google Sheets URL. |         |
| Worksheet Title | Specifies the title of the sheet.                                                                                                                                                                              |         |
| Column Headings | An array of strings that are the column headings.                                                                                                                                                              |         |
| Connection      |                                                                                                                                                                                                                |         |

### Update Rows

Update call values of rows in a Worksheet

| Input            | Comments                                                                                                                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Spreadsheet ID   | Every spreadsheet is represented by a Spreadsheet resource and has a unique spreadsheetId value, containing letters, numbers, hyphens, or underscores. You can find the spreadsheet ID in a Google Sheets URL. |         |
| Worksheet Title  | Specifies the title of the sheet.                                                                                                                                                                              |         |
| Values           | An object where the keys are row numbers and the values are objects where their keys are column names and their values are cell values.                                                                        |         |
| Store Raw Values | Specifies whether values should be converted as if they were typed into the spreadsheet or whether to store the raw values as provided.                                                                        | false   |
| Connection       |                                                                                                                                                                                                                |         |
