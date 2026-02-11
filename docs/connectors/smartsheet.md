---
title: Smartsheet Connector
sidebar_label: Smartsheet
description: Manage sheets, rows, and workspaces in the Smartsheet platform
---

![Smartsheet](./assets/smartsheet.png#connector-icon)
[Smartsheet](https://www.smartsheet.com) is a software as a service offering for collaboration and work management, developed and marketed by Smartsheet Inc.
This component allows you to manage and interact with a Smartsheet sheets.

## API Documentation

This component was built using the [Smartsheet API Documentation](https://smartsheet.redoc.ly/)

## Connections

### API Key {#apikey}

Authenticate requests to Smartsheet using an API Key

API keys can be used for development purposes, though you should use an OAuth 2.0 connection for production integrations.
Information about getting started and creating API keys with [Smartsheet](https://help.smartsheet.com/articles/2482389-generate-API-key) can be found on their developer documentation site.

| Input    | Comments                                                                                                                                | Default                         |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Base URL | Most applications use Smartsheet commercial, but you can choose to use a government endpoint if your customers are government entities. | https://api.smartsheet.com/2.0/ |
| API Key  | Provide a string value for the API Key.                                                                                                 |                                 |

### OAuth 2.0 {#templatedoauth}

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

### OAuth 2.0 (Deprecated) {#smartsheet oauth2}

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

### Webhook {#smartsheetwebhook}

Receive and validate webhook requests from Smartsheet for webhooks you configure.

## Actions

### Add Column to Sheet {#columnsaddtosheet}

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

### Add Comment {#commentscreate}

Add a comment to a discussion

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Sheet ID      |          |         |
| Discussion ID |          |         |
| Text          |          |         |

### Add/Update Row {#rowsaddtosheet}

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

### Copy Rows {#copyrows}

Copy Rows to Another Sheet

| Input                | Comments                                                  | Default |
| -------------------- | --------------------------------------------------------- | ------- |
| Connection           |                                                           |         |
| Source Sheet ID      |                                                           |         |
| Row Ids              | The IDs of the rows to move or copy from the source sheet |         |
| Destination Sheet ID |                                                           |         |

### Copy Sheet {#copysheet}

Copy Sheet

| Input            | Comments                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                  |         |
| Sheet ID         |                                                                                  |         |
| Destination ID   | The ID of the destination container (when copying or moving a sheet or a folder) |         |
| Destination Type | Type of the destination container                                                | home    |
| New Name         | Name of the new copy                                                             |         |

### Create Discussion {#discussionscreate}

Create a discussion in a sheet or on a row

| Input             | Comments | Default |
| ----------------- | -------- | ------- |
| Connection        |          |         |
| Sheet ID          |          |         |
| Row ID (Optional) |          |         |
| Comment           | Comment  |         |

### Create Folder {#createfolder}

Create Folder

| Input                   | Comments                                                                                                 | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                          |         |
| Folder ID               | Enter the ID of a folder to create a subfolder in, or omit this value to create a top-level home folder. |         |
| Workspace ID (Optional) | Create in this workspace. Optional.                                                                      |         |
| Folder Name             |                                                                                                          |         |

### Create Sheet {#createsheet}

Create a new sheet

| Input                   | Comments                                                                                                              | Default                                                                                                                                                                                                                |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              |                                                                                                                       |                                                                                                                                                                                                                        |
| Folder ID               | Create sheet in this folder. Omit to create a top-level sheet.                                                        |                                                                                                                                                                                                                        |
| Workspace ID (Optional) |                                                                                                                       |                                                                                                                                                                                                                        |
| Sheet Name              |                                                                                                                       |                                                                                                                                                                                                                        |
| Columns                 | See https://smartsheet-platform.github.io/api-docs/?shell#column-types for additional information about column types. | <code>[<br /> {<br /> "title": "Favorite",<br /> "type": "CHECKBOX",<br /> "symbol": "STAR"<br /> },<br /> {<br /> "title": "Primary Column",<br /> "primary": true,<br /> "type": "TEXT_NUMBER"<br /> }<br />]</code> |

### Create Webhook {#createwebhook}

Create and enable a webhook

| Input             | Comments                                                                                                                                                                                                              | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                                       |         |
| Callback URL      | This is usually a reference to another flow's webhook URL                                                                                                                                                             |         |
| Webhook Name      |                                                                                                                                                                                                                       |         |
| Sheet ID          |                                                                                                                                                                                                                       |         |
| Allow Duplicates? | By default this action checks if a webhook with this callback and sheet ID already exists. If it does, this action does not configure a new webhook. Toggle this to true to allow the creation of duplicate webhooks. | false   |

### Create Workspace {#createworkspace}

Create Workspace

| Input          | Comments | Default |
| -------------- | -------- | ------- |
| Connection     |          |         |
| Workspace Name |          |         |

### Delete Column {#columndelete}

Delete column from a sheet

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Column ID  |          |         |

### Delete Comment {#commentdelete}

Delete a comment by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Comment ID |          |         |

### Delete Discussion {#discussiondelete}

Delete a discussion from a sheet or row

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Sheet ID      |          |         |
| Discussion ID |          |         |

### Delete Folder {#deletefolder}

Delete Folder

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                      |         |
| Folder ID  | Folder ID where you can create sheets, sights, reports, templates, and other folders |         |

### Delete Instance Webhooks {#deleteinstancewebhooks}

Delete all Smartsheet webhooks that point to a flow in this instance

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete Row {#deleterow}

Delete Row

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Row ID     |          |         |

### Delete Sheet {#deletesheet}

Delete Sheet

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |

### Delete Webhook {#deletewebhook}

Delete webhook

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webhook ID |          |         |

### Delete Workspace {#deleteworkspace}

Delete Workspace

| Input        | Comments | Default |
| ------------ | -------- | ------- |
| Connection   |          |         |
| Workspace ID |          |         |

### Edit Comment {#commentedit}

Edit a comment by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Comment ID |          |         |
| Text       |          |         |

### Get column {#columnget}

Get Column by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Column ID  |          |         |

### Get Comment {#commentget}

Get a comment by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Comment ID |          |         |

### Get Contact {#getcontact}

Get Contact

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection |                                         |         |
| Contact ID | contactId of the contact being accessed |         |

### Get Discussion {#discussionget}

Get discussion by ID

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Sheet ID      |          |         |
| Discussion ID |          |         |

### Get Folder {#getfolder}

Get Folder

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                      |         |
| Folder ID  | Folder ID where you can create sheets, sights, reports, templates, and other folders |         |

### Get Group {#getgroup}

Get Group

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Group ID   |          |         |

### Get Report {#getreport}

Get report including one page of rows, attachments, discussions and source sheets

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Report ID            |                                                |         |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Pagination Page      | Which page to return                           | 1       |

### Get Reports {#getreports}

Get Reports

| Input          | Comments                                                                                                                                | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                         |         |
| Modified Since | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified |         |

### Get Row {#rowget}

Get the contents of a row by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| Row ID     |          |         |

### Get Sheet {#getsheet}

Get sheet by sheet ID

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Pagination Page      | Which page to return                           | 1       |

### Get Sheet Attachment {#attachmentsget}

Get metadata about an attachment on a sheet

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Sheet ID      |          |         |
| Attachment ID |          |         |

### Get Sheet Publish Status {#getsheetpublish}

Get Sheet Publish Status

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |

### Get Sheet Version {#getsheetversion}

Get Sheet Version

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |

### Get User {#getuser}

Get User

| Input      | Comments                                                              | Default |
| ---------- | --------------------------------------------------------------------- | ------- |
| Connection |                                                                       |         |
| User ID    | The ID of a user to fetch. Enter 'me' to get currently logged in user |         |

### Get Webhook {#getwebhook}

Get webhook by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webhook ID |          |         |

### Get Workspace {#getworkspace}

Get Workspace

| Input        | Comments                          | Default |
| ------------ | --------------------------------- | ------- |
| Connection   |                                   |         |
| Workspace ID |                                   |         |
| Load All     | Set to true to see nested folders | false   |

### List Attachments on Row {#attachmentslistonrow}

List attachments on a row of a sheet

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Row ID               |                                                |         |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Fetch All            | Turn on to fetch all results using pagination  | true    |

### List Attachments on Sheet {#attachmentslistonsheet}

List attachments on a sheet

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Fetch All            | Turn on to fetch all results using pagination  | true    |

### List Columns {#columnslistonsheet}

List the columns of a sheet

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Fetch All            | Turn on to fetch all results using pagination  | true    |

### List Contacts {#listcontacts}

List Contacts

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Fetch All            | Turn on to fetch all results using pagination  | true    |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |

### List Discussion Attachments {#discussionlistattachments}

List Discussion Attachments

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Discussion ID        |                                                |         |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Fetch All            | Turn on to fetch all results using pagination  | true    |

### List Discussions {#discussionslist}

List discussions on a sheet or row

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Sheet ID             |                                                |         |
| Row ID (Optional)    |                                                |         |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |
| Fetch All            | Turn on to fetch all results using pagination  | true    |

### List Events {#listevents}

Gets events that are occurring in your Smartsheet organization account

| Input           | Comments                                                    | Default              |
| --------------- | ----------------------------------------------------------- | -------------------- |
| Connection      |                                                             |                      |
| Since           | Starting time for events to return                          | 2010-01-01T00:00:00Z |
| Stream Position | Indicates next set of events to return                      |                      |
| Max Count       | Maximum number of events to return as response to this call | 1000                 |

### List Favorites {#getfavorites}

List Favorites

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Fetch All            | Turn on to fetch all results using pagination  | true    |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |

### List Folders {#listfolders}

List folders, subfolders or workspace folders

| Input                   | Comments                                                                                        | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                 |         |
| Folder ID               | Enter the ID of a folder to list subfolders, or omit this value to list top-level home folders. |         |
| Workspace ID (Optional) | Create in this workspace. Optional.                                                             |         |
| Fetch All               | Turn on to fetch all results using pagination                                                   | true    |
| Pagination Page         | Which page to return                                                                            | 1       |
| Pagination Page Size    | The maximum number of items to return per page                                                  | 100     |

### List Groups {#listgroups}

List Org Groups

| Input                | Comments                                                                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                         |         |
| Fetch All            | Turn on to fetch all results using pagination                                                                                           | true    |
| Modified Since       | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified |         |
| Pagination Page      | Which page to return                                                                                                                    | 1       |
| Pagination Page Size | The maximum number of items to return per page                                                                                          | 100     |

### List Home Contents {#listhomecontents}

Get a nested list of all Home objects, including dashboards, folders, reports, sheets, templates, and workspaces, as shown on the "Home" tab.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Sheets {#listsheets}

List Sheets

| Input                | Comments                                                                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                         |         |
| Fetch All            | Turn on to fetch all results using pagination                                                                                           | true    |
| Modified Since       | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified |         |
| Pagination Page      | Which page to return                                                                                                                    | 1       |
| Pagination Page Size | The maximum number of items to return per page                                                                                          | 100     |

### List Users {#listusers}

List Users

| Input                | Comments                                                                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                         |         |
| Email                | Find a user with this email address                                                                                                     |         |
| Fetch All            | Turn on to fetch all results using pagination                                                                                           | true    |
| Modified Since       | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified |         |
| Pagination Page      | Which page to return                                                                                                                    | 1       |
| Pagination Page Size | The maximum number of items to return per page                                                                                          | 100     |

### List Webhooks {#listwebhooks}

List Webhooks

| Input      | Comments                                                                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                    |         |
| Show All   | By default only webhooks whose callback URLs match a flow in the current instance are shown. Toggle this to 'true' to show all webhooks (even those for other apps and instances). | false   |

### List Workspaces {#listworkspaces}

List Workspaces

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Fetch All            | Turn on to fetch all results using pagination  | true    |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |

### Move Folder {#movefolder}

Move Folder

| Input                 | Comments                                                                             | Default |
| --------------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection            |                                                                                      |         |
| Folder ID             | Folder ID where you can create sheets, sights, reports, templates, and other folders |         |
| Destination Folder ID | Folder ID where you can create sheets, sights, reports, templates, and other folders |         |

### Move Rows {#moverows}

Move Rows to Another Sheet

| Input                | Comments                                                  | Default |
| -------------------- | --------------------------------------------------------- | ------- |
| Connection           |                                                           |         |
| Sheet ID             |                                                           |         |
| Row IDs              | The Ids of the rows to move or copy from the source sheet |         |
| Destination Sheet ID |                                                           |         |

### Move Sheet {#movesheet}

Move Sheet

| Input            | Comments                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                  |         |
| Sheet ID         |                                                                                  |         |
| Destination ID   | The ID of the destination container (when copying or moving a sheet or a folder) |         |
| Destination Type | Type of the destination container                                                | home    |

### Raw Request {#rawrequest}

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

### Search Sheets {#searchsheet}

Search sheets for a particular phrase

| Input               | Comments                                                  | Default |
| ------------------- | --------------------------------------------------------- | ------- |
| Connection          |                                                           |         |
| Sheet ID (Optional) | The ID of the sheet to search. Omit to search all sheets. |         |
| Text to search for  | Text with which to perform the search                     |         |

### Send Sheet {#sheetsend}

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

### Set Sheet Publish {#setsheetpublish}

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

### Templates List {#templateslist}

List User-Created Templates

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Fetch All            | Turn on to fetch all results using pagination  | true    |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |

### Templates List Public {#templateslistpublic}

List Public Templates

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Fetch All            | Turn on to fetch all results using pagination  | true    |
| Pagination Page      | Which page to return                           | 1       |
| Pagination Page Size | The maximum number of items to return per page | 100     |

### Update Folder {#updatefolder}

Update folder name

| Input       | Comments                                                                             | Default |
| ----------- | ------------------------------------------------------------------------------------ | ------- |
| Connection  |                                                                                      |         |
| Folder ID   | Folder ID where you can create sheets, sights, reports, templates, and other folders |         |
| Folder Name |                                                                                      |         |

### Update Sheet {#updatesheet}

Update Sheet

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Sheet ID   |          |         |
| New Name   |          |         |

### Update Workspace {#updateworkspace}

Update Workspace

| Input        | Comments       | Default |
| ------------ | -------------- | ------- |
| Connection   |                |         |
| Workspace ID |                |         |
| Name         | Workspace name |         |
