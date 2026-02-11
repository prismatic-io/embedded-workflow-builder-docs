---
title: Google Sheets Connector
sidebar_label: Google Sheets
description: Manage spreadsheets, sheets, and rows in Google Sheets.
---

![Google Sheets](./assets/google-sheets.png#connector-icon)
[Google Sheets](https://www.google.com/sheets/about/) is a cloud-based spreadsheet service from Google.
This component allows you to create and manage spreadsheets, manipulate sheets and rows, and read cell data within Google Drive.

## API Documentation

This component was built using the [Google Sheets API](https://developers.google.com/sheets/api/reference/rest) v4.
Additional information can be found in the [Google Sheets API Guides](https://developers.google.com/sheets/api/guides/concepts).

## Connections

### Google Sheets OAuth 2.0 {#oauth2}

Authenticate requests to Google Sheets using values obtained from the Google Cloud Platform.

The Google Sheets component authenticates requests through the Google Cloud Platform (GCP) OAuth 2.0 service.
A GCP OAuth 2.0 app is required for the integration to authenticate and perform Google Sheets tasks on behalf of users.

#### Prerequisites

- A Google Developer account (sign up at [https://console.cloud.google.com/](https://console.cloud.google.com/))

#### Setup Steps

To create a Google Sheets OAuth 2.0 app:

1. Open the Google Sheets API console at [https://console.cloud.google.com/apis/api/sheets.googleapis.com](https://console.cloud.google.com/apis/api/sheets.googleapis.com).
2. Click **CREATE PROJECT** to create a new GCP project, or select an existing project.
3. Enable the **Google Sheets API** for the project by clicking **ENABLE**.
4. On the sidebar, select **Credentials**.
5. Configure the OAuth 2.0 Consent Screen by clicking **CONFIGURE CONSENT SCREEN**.
   1. Choose a **User Type** of **External** so the app will be available to users outside the organization.
   2. Fill out the OAuth consent screen with an app name, support email, and other required information.
   3. On the Scopes page, add the necessary scopes (see scope configuration below).
   4. Enter **test users** for testing purposes. The app will only work for those testing users until it is published.
   5. When ready for production, click **PUBLISH APP** on the **OAuth consent screen** to allow users to authorize the integration.
6. Once the consent screen is configured, open the **Credentials** page from the sidebar.
7. Click **+CREATE CREDENTIALS** and select **OAuth client ID**.
   1. Under **Application type** select **Web application**.
   2. Under **Authorized redirect URIs** enter the OAuth 2.0 callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   3. Click **CREATE**.
8. Copy the **Client ID** and **Client Secret** that are generated.

:::info Publishing the OAuth App
Make sure to **publish** the OAuth 2.0 app after testing so users outside of the test users can authorize the integration to interact with Google Sheets on their behalf.
:::

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the OAuth app credentials.
- For **Scopes**, use the following value:

  ```
  https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly
  ```

  - The `spreadsheets` scope allows full access to Google Sheets.
  - The `drive.file` scope allows access to files created or opened by the integration.
  - The `drive.readonly` scope allows read-only access to Drive metadata.
  - Refer to [Google's OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes#sheets) for additional scope information.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                                  | Default                                                                                                                                |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Scopes        | Space-delimited list of OAuth scopes to request. Common scopes include spreadsheets (read/write), drive.file (create/edit files), and drive.readonly. [Learn more](https://developers.google.com/identity/protocols/oauth2/scopes#sheets) | https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly |
| Client ID     | Client ID from your Google Cloud Console OAuth credentials. [Learn more](https://developers.google.com/workspace/guides/create-credentials#oauth-client-id)                                                                               |                                                                                                                                        |
| Client Secret | Client Secret generated in your Google Cloud Console OAuth credentials. [Learn more](https://developers.google.com/workspace/guides/create-credentials#oauth-client-id)                                                                   |                                                                                                                                        |

## Triggers

### Spreadsheet Change Events {#spreadsheetchangeevents}

Receive change notifications for a Google Spreadsheet. Automatically creates and manages a Google Drive push notification subscription when the instance is deployed, and removes the subscription when the instance is deleted.

| Input          | Comments                                | Default |
| -------------- | --------------------------------------- | ------- |
| Connection     | The Google Sheets connection to use.    |         |
| Spreadsheet ID | The spreadsheet to monitor for changes. |         |

## Actions

### Add Worksheet {#addsheet}

Add a new Worksheet to a Google Sheet Document

| Input           | Comments                                                                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Spreadsheet ID  | The unique identifier of the spreadsheet. You can find the spreadsheet ID in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit |         |
| Worksheet Title | The title of the worksheet within the spreadsheet.                                                                                               |         |
| Column Headings | An array of strings representing the column header names.                                                                                        |         |
| Connection      | The Google Sheets connection to use.                                                                                                             |         |

### Append Rows {#appendrows}

Append new rows to a Worksheet

| Input            | Comments                                                                                                                                                                    | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Spreadsheet ID   | The unique identifier of the spreadsheet. You can find the spreadsheet ID in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit                            |         |
| Worksheet Title  | The title of the worksheet within the spreadsheet.                                                                                                                          |         |
| Rows             | An array of row data. Can be an array of arrays (e.g., [[1,2,3], [4,5,6]]) or an array of objects where keys are column headers (e.g., [{"Column 1": "a"}]).                |         |
| Store Raw Values | When true, stores values exactly as provided without conversion. When false, values are converted as if typed into the spreadsheet (e.g., "=SUM(A1:A5)" becomes a formula). | false   |
| Connection       | The Google Sheets connection to use.                                                                                                                                        |         |

### Clear Worksheet {#clearsheet}

Clear all data in the a Worksheet

| Input           | Comments                                                                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Spreadsheet ID  | The unique identifier of the spreadsheet. You can find the spreadsheet ID in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit |         |
| Worksheet Title | The title of the worksheet within the spreadsheet.                                                                                               |         |
| Connection      | The Google Sheets connection to use.                                                                                                             |         |

### Create Spreadsheet {#createdocument}

Create a new Google Sheet Document

| Input          | Comments                             | Default |
| -------------- | ------------------------------------ | ------- |
| Document Title | Specifies the title of the document. |         |
| Connection     | The Google Sheets connection to use. |         |

### List Columns {#listcolumns}

Get the headers of a Worksheet

| Input           | Comments                                                                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Spreadsheet ID  | The unique identifier of the spreadsheet. You can find the spreadsheet ID in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit |         |
| Worksheet Title | The title of the worksheet within the spreadsheet.                                                                                               |         |
| Connection      | The Google Sheets connection to use.                                                                                                             |         |

### List Rows {#getrows}

List the cell values of rows in a Worksheet

| Input           | Comments                                                                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Spreadsheet ID  | The unique identifier of the spreadsheet. You can find the spreadsheet ID in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit |         |
| Worksheet Title | The title of the worksheet within the spreadsheet.                                                                                               |         |
| Limit           | The maximum number of rows to retrieve.                                                                                                          | 100     |
| Offset          | The number of rows to skip from the top of the worksheet.                                                                                        | 0       |
| Connection      | The Google Sheets connection to use.                                                                                                             |         |

### List Worksheets {#listsheets}

List information about all Worksheets in a Google Sheet Document

| Input          | Comments                                                                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Spreadsheet ID | The unique identifier of the spreadsheet. You can find the spreadsheet ID in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit |         |
| Connection     | The Google Sheets connection to use.                                                                                                             |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Google Sheets

| Input                   | Comments                                                                                                                                                                                                                                                                            | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Google Sheets connection to use.                                                                                                                                                                                                                                                |         |
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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                 | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                    | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                 | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                       | false   |

### Remove Worksheet {#removesheet}

Remove a Worksheet from a Google Sheet Document

| Input           | Comments                                                                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Spreadsheet ID  | The unique identifier of the spreadsheet. You can find the spreadsheet ID in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit |         |
| Worksheet Title | The title of the worksheet within the spreadsheet.                                                                                               |         |
| Connection      | The Google Sheets connection to use.                                                                                                             |         |

### Set Header Row {#setheaderrow}

Set the column headings in a Worksheet

| Input           | Comments                                                                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Spreadsheet ID  | The unique identifier of the spreadsheet. You can find the spreadsheet ID in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit |         |
| Worksheet Title | The title of the worksheet within the spreadsheet.                                                                                               |         |
| Column Headings | An array of strings representing the column header names.                                                                                        |         |
| Connection      | The Google Sheets connection to use.                                                                                                             |         |

### Update Rows {#updaterows}

Update call values of rows in a Worksheet

| Input            | Comments                                                                                                                                                                    | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Spreadsheet ID   | The unique identifier of the spreadsheet. You can find the spreadsheet ID in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit                            |         |
| Worksheet Title  | The title of the worksheet within the spreadsheet.                                                                                                                          |         |
| Values           | An object where keys are row numbers and values are objects mapping column names to cell values.                                                                            |         |
| Store Raw Values | When true, stores values exactly as provided without conversion. When false, values are converted as if typed into the spreadsheet (e.g., "=SUM(A1:A5)" becomes a formula). | false   |
| Connection       | The Google Sheets connection to use.                                                                                                                                        |         |
