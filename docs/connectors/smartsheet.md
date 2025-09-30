---
title: Smartsheet Connector
sidebar_label: Smartsheet
description: Manage sheets, rows, and workspaces in the Smartsheet platform
---

![Smartsheet](./assets/smartsheet.png#connector-icon)
Manage sheets, rows, and workspaces in the Smartsheet platform

## Connections

### API Key

Authenticate requests to Smartsheet using an API Key

API keys can be used for development purposes, though you should use an OAuth 2.0 connection for production integrations.
Information about getting started and creating API keys with [Smartsheet](https://help.smartsheet.com/articles/2482389-generate-API-key) can be found on their developer documentation site.

| Input    | Comments                                                                                                                                | Default                         |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Base URL | Most applications use Smartsheet commercial, but you can choose to use a government endpoint if your customers are government entities. | https://api.smartsheet.com/2.0/ |
| API Key  | Provide a string value for the API Key.                                                                                                 |                                 |

### OAuth 2.0

Authenticate requests to Smartsheet using OAuth 2.0.

To authenticate Smartsheet users through OAuth 2.0, you will need to create and configure an app within your Smartsheet account.

1. Log in to [Smartsheet](https://app.smartsheet.com)
2. Navigate to your profile icon (bottom left) and select **Developer Tools**
3. Create a developer profile if you haven't already
4. Click **Create New App**
5. Configure your app:
   - **App Name**: Enter your application name
   - **App Description**: Add a brief description
   - **App Logo**: Optional - add a logo for your app
   - **Publish App**: Leave unchecked (not required)
   - **App Redirect URL**: Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
6. Save your app and note the generated credentials:
   - **App Client ID**
   - **App Secret**

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                   | Default                                                                                                                                                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Domain    | Select the Smartsheet API domain. Most applications use commercial, but government entities should use the government endpoint.                                                                            | api.smartsheet.com                                                                                                                                                                                                                |
| App Domain    | Select the Smartsheet application domain. This should match your API domain selection.                                                                                                                     | app.smartsheet.com                                                                                                                                                                                                                |
| Scopes        | A space-separated list of permissions to request. You can remove any permissions that you do not use. Descriptions of each permission is available at https://smartsheet.redoc.ly/#section/Authentication. | ADMIN_SHEETS ADMIN_SIGHTS ADMIN_USERS ADMIN_WEBHOOKS ADMIN_WORKSPACES CREATE_SHEETS CREATE_SIGHTS DELETE_SHEETS DELETE_SIGHTS READ_CONTACTS READ_EVENTS READ_SHEETS READ_SIGHTS READ_USERS SHARE_SHEETS SHARE_SIGHTS WRITE_SHEETS |
| App client id | This is generated when you create an app within Smartsheet's 'Developer Tools'                                                                                                                             |                                                                                                                                                                                                                                   |
| App secret    | This is generated when you create an app within Smartsheet's 'Developer Tools'                                                                                                                             |                                                                                                                                                                                                                                   |

### OAuth 2.0 (Deprecated)

Authenticate requests to Smartsheet using OAuth 2.0. Please replace this with the latest OAuth 2.0 connection.

To authenticate Smartsheet users through OAuth 2.0, you will need to create and configure an app within your Smartsheet account.

1. Log in to [Smartsheet](https://app.smartsheet.com)
2. Navigate to your profile icon (bottom left) and select **Developer Tools**
3. Create a developer profile if you haven't already
4. Click **Create New App**
5. Configure your app:
   - **App Name**: Enter your application name
   - **App Description**: Add a brief description
   - **App Logo**: Optional - add a logo for your app
   - **Publish App**: Leave unchecked (not required)
   - **App Redirect URL**: Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
6. Save your app and note the generated credentials:
   - **App Client ID**
   - **App Secret**

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                                                                                                                                                                                   | Default                                                                                                                                                                                                                           |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Base URL          | Most applications use Smartsheet commercial, but you can choose to use a government endpoint if your customers are government entities.                                                                    | https://api.smartsheet.com/2.0/                                                                                                                                                                                                   |
| Authorization URL | Authorization URL                                                                                                                                                                                          | https://app.smartsheet.com/b/authorize                                                                                                                                                                                            |
| Token URL         | Token URL                                                                                                                                                                                                  | https://api.smartsheet.com/2.0/token                                                                                                                                                                                              |
| Scopes            | A space separated list of permissions to request. You can remove any permissions that you do not use. Descriptions of each permission is available at https://smartsheet.redoc.ly/#section/Authentication. | ADMIN_SHEETS ADMIN_SIGHTS ADMIN_USERS ADMIN_WEBHOOKS ADMIN_WORKSPACES CREATE_SHEETS CREATE_SIGHTS DELETE_SHEETS DELETE_SIGHTS READ_CONTACTS READ_EVENTS READ_SHEETS READ_SIGHTS READ_USERS SHARE_SHEETS SHARE_SIGHTS WRITE_SHEETS |
| App client id     | This is generated when you create an app within Smartsheet's 'Developer Tools'                                                                                                                             |                                                                                                                                                                                                                                   |
| App secret        | This is generated when you create an app within Smartsheet's 'Developer Tools'                                                                                                                             |                                                                                                                                                                                                                                   |

## Triggers

### Webhook

Receive and validate webhook requests from Smartsheet for webhooks you configure.

## Actions

### Add Column to Sheet

Add column to sheet

| Input          | Comments                                                     | Default |
| -------------- | ------------------------------------------------------------ | ------- |
| Connection     |                                                              |         |
| Sheet ID       |                                                              |         |
| Title          | Column title                                                 |         |
| Type           |                                                              |         |
| Formula        | The formula for a column                                     |         |
| Hidden         | Indicates whether the column is hidden                       | false   |
| Position Index | Column index or position                                     | 0       |
| Description    | Column description                                           |         |
| Locked         | Indicates whether the column is locked                       | false   |
| Options        | A list of options for picklists                              |         |
| Validation     | Indicates whether validation has been enabled for the column | false   |
| Width          | Display width of the column in pixels                        |         |

### Add Comment

Add a comment to a discussion

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Sheet ID      |          |         |
| Discussion ID |          |         |
| Text          |          |         |

### Add/Update Row

Add or update a row on a sheet

| Input                       | Comments                                                                                                                                      | Default  |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection                  |                                                                                                                                               |          |
| Sheet ID                    |                                                                                                                                               |          |
| Row ID (Optional)           | An ID of a row to update. Omit to add a new row                                                                                               |          |
| Dynamic Columns Values      | List of columns and their values                                                                                                              |          |
| Column Values               | A list of columns to be updated with the specified value                                                                                      |          |
| Row Position (for new rows) |                                                                                                                                               | toBottom |
| Allow Partial Success       | When specified with a value of true, enables partial success for this bulk operation                                                          | false    |
| Override Validation         | You may use the query string parameter **overrideValidation** with a value of **true** to allow a cell value outside of the validation limits | false    |

### Copy Rows

Copy Rows to Another Sheet

| Input                | Comments                                                  | Default |
| -------------------- | --------------------------------------------------------- | ------- |
| Connection           |                                                           |         |
| Source Sheet ID      |                                                           |         |
| Row Ids              | The IDs of the rows to move or copy from the source sheet |         |
| Destination Sheet ID |                                                           |         |

### Copy Sheet

Copy Sheet

| Input            | Comments                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                  |         |
| Sheet ID         |                                                                                  |         |
| Destination ID   | The ID of the destination container (when copying or moving a sheet or a folder) |         |
| Destination Type | Type of the destination container                                                | home    |
| New Name         | Name of the new copy                                                             |         |

### Create Discussion

Create a discussion in a sheet or on a row

| Input             | Comments | Default |
| ----------------- | -------- | ------- |
| Connection        |          |         |
| Sheet ID          |          |         |
| Row ID (Optional) |          |         |
| Comment           | Comment  |         |

### Create Folder

Create Folder

| Input                   | Comments                                                                                                 | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                          |         |
| Folder ID               | Enter the ID of a folder to create a subfolder in, or omit this value to create a top-level home folder. |         |
| Workspace ID (Optional) | Create in this workspace. Optional.                                                                      |         |
| Folder Name             |                                                                                                          |         |

### Create Sheet

Create a new sheet

| Input                   | Comments                                                                                                              | Default                                                                                                                                                                                                                |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              |                                                                                                                       |                                                                                                                                                                                                                        |
| Folder ID               | Create sheet in this folder. Omit to create a top-level sheet.                                                        |                                                                                                                                                                                                                        |
| Workspace ID (Optional) |                                                                                                                       |                                                                                                                                                                                                                        |
| Sheet Name              |                                                                                                                       |                                                                                                                                                                                                                        |
| Columns                 | See https://smartsheet-platform.github.io/api-docs/?shell#column-types for additional information about column types. | <code>[<br /> {<br /> "title": "Favorite",<br /> "type": "CHECKBOX",<br /> "symbol": "STAR"<br /> },<br /> {<br /> "title": "Primary Column",<br /> "primary": true,<br /> "type": "TEXT_NUMBER"<br /> }<br />]</code> |

### Create Webhook

Create and enable a webhook

| Input             | Comments                                                                                                                                                                                                              | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                                       |         |
| Callback URL      | This is usually a reference to another flow's webhook URL                                                                                                                                                             |         |
| Webhook Name      |                                                                                                                                                                                                                       |         |
| Sheet ID          |                                                                                                                                                                                                                       |         |
| Allow Duplicates? | By default this action checks if a webhook with this callback and sheet ID already exists. If it does, this action does not configure a new webhook. Toggle this to true to allow the creation of duplicate webhooks. | false   |

### Create Workspace

Create Workspace

| Input          | Comments | Default |
| -------------- | -------- | ------- |
| Connection     |          |         |
| Workspace Name |          |         |

### Delete Column

Delete column from a sheet

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Column ID  |          |         |

### Delete Comment

Delete a comment by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Comment ID |          |         |

### Delete Discussion

Delete a discussion from a sheet or row

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Sheet ID      |          |         |
| Discussion ID |          |         |

### Delete Folder

Delete Folder

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                      |         |
| Folder ID  | Folder ID where you can create sheets, sights, reports, templates, and other folders |         |

### Delete Instance Webhooks

Delete all Smartsheet webhooks that point to a flow in this instance

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete Row

Delete Row

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Row ID     |          |         |

### Delete Sheet

Delete Sheet

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |

### Delete Webhook

Delete webhook

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webhook ID |          |         |

### Delete Workspace

Delete Workspace

| Input        | Comments | Default |
| ------------ | -------- | ------- |
| Connection   |          |         |
| Workspace ID |          |         |

### Edit Comment

Edit a comment by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Comment ID |          |         |
| Text       |          |         |

### Get column

Get Column by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Column ID  |          |         |

### Get Comment

Get a comment by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Comment ID |          |         |

### Get Contact

Get Contact

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection |                                         |         |
| Contact ID | contactId of the contact being accessed |         |

### Get Discussion

Get discussion by ID

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Sheet ID      |          |         |
| Discussion ID |          |         |

### Get Folder

Get Folder

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                      |         |
| Folder ID  | Folder ID where you can create sheets, sights, reports, templates, and other folders |         |

### Get Group

Get Group

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Group ID   |          |         |

### Get Report

Get report including one page of rows, attachments, discussions and source sheets

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Report ID            |                                                |         |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Pagination Page      | Which page to return                           | 1       |

### Get Reports

Get Reports

| Input          | Comments                                                                                                                                | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                         |         |
| Modified Since | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified |         |

### Get Row

Get the contents of a row by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Row ID     |          |         |

### Get Sheet

Get sheet by sheet ID

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Pagination Page      | Which page to return                           | 1       |

### Get Sheet Attachment

Get metadata about an attachment on a sheet

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Sheet ID      |          |         |
| Attachment ID |          |         |

### Get Sheet Publish Status

Get Sheet Publish Status

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |

### Get Sheet Version

Get Sheet Version

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |

### Get User

Get User

| Input      | Comments                                                              | Default |
| ---------- | --------------------------------------------------------------------- | ------- |
| Connection |                                                                       |         |
| User ID    | The ID of a user to fetch. Enter 'me' to get currently logged in user |         |

### Get Webhook

Get webhook by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webhook ID |          |         |

### Get Workspace

Get Workspace

| Input        | Comments                          | Default |
| ------------ | --------------------------------- | ------- |
| Connection   |                                   |         |
| Workspace ID |                                   |         |
| Load All     | Set to true to see nested folders | false   |

### List Attachments on Row

List attachments on a row of a sheet

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Row ID               |                                                |         |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Fetch All            | Turn on to fetch all results using pagination  | true    |

### List Attachments on Sheet

List attachments on a sheet

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Fetch All            | Turn on to fetch all results using pagination  | true    |

### List Columns

List the columns of a sheet

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Fetch All            | Turn on to fetch all results using pagination  | true    |

### List Contacts

List Contacts

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Fetch All            | Turn on to fetch all results using pagination  | true    |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |

### List Discussion Attachments

List Discussion Attachments

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Discussion ID        |                                                |         |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Fetch All            | Turn on to fetch all results using pagination  | true    |

### List Discussions

List discussions on a sheet or row

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Row ID (Optional)    |                                                |         |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Fetch All            | Turn on to fetch all results using pagination  | true    |

### List Events

Gets events that are occurring in your Smartsheet organization account

| Input           | Comments                                                    | Default              |
| --------------- | ----------------------------------------------------------- | -------------------- |
| Connection      |                                                             |                      |
| Since           | Starting time for events to return                          | 2010-01-01T00:00:00Z |
| Stream Position | Indicates next set of events to return                      |                      |
| Max Count       | Maximum number of events to return as response to this call | 1000                 |

### List Favorites

List Favorites

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Fetch All            | Turn on to fetch all results using pagination  | true    |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |

### List Folders

List folders, subfolders or workspace folders

| Input                   | Comments                                                                                        | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                 |         |
| Folder ID               | Enter the ID of a folder to list subfolders, or omit this value to list top-level home folders. |         |
| Workspace ID (Optional) | Create in this workspace. Optional.                                                             |         |
| Fetch All               | Turn on to fetch all results using pagination                                                   | true    |
| Pagination Page         | Which page to return                                                                            | 1       |
| Pagination Page Size    | The maximum number of items to return per page                                                  | 100     |

### List Groups

List Org Groups

| Input                | Comments                                                                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                         |         |
| Fetch All            | Turn on to fetch all results using pagination                                                                                           | true    |
| Modified Since       | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified |         |
| Pagination Page      | Which page to return                                                                                                                    | 1       |
| Pagination Page Size | The maximum number of items to return per page                                                                                          | 100     |

### List Home Contents

Get a nested list of all Home objects, including dashboards, folders, reports, sheets, templates, and workspaces, as shown on the "Home" tab.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Sheets

List Sheets

| Input                | Comments                                                                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                         |         |
| Fetch All            | Turn on to fetch all results using pagination                                                                                           | true    |
| Modified Since       | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified |         |
| Pagination Page      | Which page to return                                                                                                                    | 1       |
| Pagination Page Size | The maximum number of items to return per page                                                                                          | 100     |

### List Users

List Users

| Input                | Comments                                                                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                         |         |
| Email                | Find a user with this email address                                                                                                     |         |
| Fetch All            | Turn on to fetch all results using pagination                                                                                           | true    |
| Modified Since       | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified |         |
| Pagination Page      | Which page to return                                                                                                                    | 1       |
| Pagination Page Size | The maximum number of items to return per page                                                                                          | 100     |

### List Webhooks

List Webhooks

| Input      | Comments                                                                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                    |         |
| Show All   | By default only webhooks whose callback URLs match a flow in the current instance are shown. Toggle this to 'true' to show all webhooks (even those for other apps and instances). | false   |

### List Workspaces

List Workspaces

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Fetch All            | Turn on to fetch all results using pagination  | true    |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |

### Move Folder

Move Folder

| Input                 | Comments                                                                             | Default |
| --------------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection            |                                                                                      |         |
| Folder ID             | Folder ID where you can create sheets, sights, reports, templates, and other folders |         |
| Destination Folder ID | Folder ID where you can create sheets, sights, reports, templates, and other folders |         |

### Move Rows

Move Rows to Another Sheet

| Input                | Comments                                                  | Default |
| -------------------- | --------------------------------------------------------- | ------- |
| Connection           |                                                           |         |
| Sheet ID             |                                                           |         |
| Row IDs              | The Ids of the rows to move or copy from the source sheet |         |
| Destination Sheet ID |                                                           |         |

### Move Sheet

Move Sheet

| Input            | Comments                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                  |         |
| Sheet ID         |                                                                                  |         |
| Destination ID   | The ID of the destination container (when copying or moving a sheet or a folder) |         |
| Destination Type | Type of the destination container                                                | home    |

### Raw Request

Send raw HTTP request to Smartsheet

| Input                   | Comments                                                                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                               |         |
| URL                     | Input the path only (/reports), The base URL is already included (https://api.smartsheet.com/2.0). For example, to connect to https://api.smartsheet.com/2.0/reports, only /reports is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                       |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                     |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                          |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                              |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                        |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                           |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                   |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                      | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                           |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                          | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                           | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.              | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                 | false   |

### Search Sheets

Search sheets for a particular phrase

| Input               | Comments                                                  | Default |
| ------------------- | --------------------------------------------------------- | ------- |
| Connection          |                                                           |         |
| Sheet ID (Optional) | The ID of the sheet to search. Omit to search all sheets. |         |
| Text to search for  | Text with which to perform the search                     |         |

### Send Sheet

Send Sheet via Email

| Input      | Comments                                                    | Default |
| ---------- | ----------------------------------------------------------- | ------- |
| Connection |                                                             |         |
| Sheet ID   |                                                             |         |
| Format     |                                                             | EXCEL   |
| Paper Size |                                                             | LETTER  |
| Emails     | Send the document to these email addresses                  |         |
| Group IDs  | Send the document to these groups by group ID               |         |
| CC Me      | Indicates whether to send a copy of the email to the sender | false   |
| Message    | The message of the email                                    |         |
| Subject    | The subject of the email                                    |         |

### Set Sheet Publish

Set Sheet Publish Status

| Input                        | Comments                                                                                                                   | Default  |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection                   |                                                                                                                            |          |
| Sheet ID                     |                                                                                                                            |          |
| Ical Enabled                 | If true, a webcal is available for the calendar in the sheet                                                               | false    |
| Read Only Full Accessible By | Indicates who can access the 'Read-Only Full' view of the published sheet:                                                 | ALL      |
| Read Only Full Default View  | Indicates which view the user has set for a read-only, default view of the published sheet                                 | CALENDAR |
| Read Only Full Enabled       | If true, a rich version of the sheet is published with the ability to download row attachments and discussions             | true     |
| Read Only Lite Enabled       | If true, a lightweight version of the sheet is published without row attachments and discussions                           | false    |
| Read Write Accessible By     | Indicates who can access the 'Edit by Anyone' view of the published sheet:                                                 | ALL      |
| Read Write Default View      | Indicates which view the user has set for a read-write, default view of the published sheet                                | CALENDAR |
| Read Write Enabled           | If **true**,a rich version of the sheet is published with the ability to edit cells and manage attachments and discussions | true     |

### Templates List

List User-Created Templates

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Fetch All            | Turn on to fetch all results using pagination  | true    |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |

### Templates List Public

List Public Templates

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Fetch All            | Turn on to fetch all results using pagination  | true    |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |

### Update Folder

Update folder name

| Input       | Comments                                                                             | Default |
| ----------- | ------------------------------------------------------------------------------------ | ------- |
| Connection  |                                                                                      |         |
| Folder ID   | Folder ID where you can create sheets, sights, reports, templates, and other folders |         |
| Folder Name |                                                                                      |         |

### Update Sheet

Update Sheet

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| New Name   |          |         |

### Update Workspace

Update Workspace

| Input        | Comments       | Default |
| ------------ | -------------- | ------- |
| Connection   |                |         |
| Workspace ID |                |         |
| Name         | Workspace name |         |
