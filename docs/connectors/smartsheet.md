---
title: Smartsheet Connector
sidebar_label: Smartsheet
description: Manage sheets, rows, and workspaces in the Smartsheet platform.
---

![Smartsheet](./assets/smartsheet.png#connector-icon)
[Smartsheet](https://www.smartsheet.com) is a software as a service offering for collaboration and work management, developed and marketed by Smartsheet Inc.
This component allows managing and interacting with Smartsheet sheets.

## API Documentation

This component was built using the [Smartsheet API Documentation](https://developers.smartsheet.com/api/smartsheet/introduction).

## Connections

### API Key {#apikey}

Authenticate requests using an API key.

API keys can be used for development purposes, though an OAuth 2.0 connection is recommended for production integrations.

Refer to the [Smartsheet API key documentation](https://help.smartsheet.com/articles/2482389-generate-API-key) for instructions on generating an API key.

#### Configure the Connection

Create a connection of type **API Key** and configure the following fields:

- **Base URL**: Select the Smartsheet API base URL. Most applications use the commercial endpoint. Government entities should select the government endpoint.
- **API Key**: Enter the API key generated from the Smartsheet account settings.

| Input    | Comments                                                                                                | Default                         |
| -------- | ------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Base URL | Most applications use Smartsheet commercial. Government entities should select the government endpoint. | https://api.smartsheet.com/2.0/ |
| API Key  | The API key generated from the Smartsheet account settings.                                             |                                 |

### OAuth 2.0 {#templatedoauth}

Authenticate requests using OAuth 2.0.

To authenticate with Smartsheet through OAuth 2.0, create and configure an app within the Smartsheet account.

#### Prerequisites

- A Smartsheet account with access to Developer Tools
- A developer profile created in Smartsheet

#### Setup Steps

1. Log in to [Smartsheet](https://app.smartsheet.com)
2. Navigate to the profile icon (bottom left) and select **Developer Tools**
3. Create a developer profile if one does not already exist
4. Click **Create New App**
5. Configure the app:
   - **App Name**: Enter the application name
   - **App Description**: Add a brief description
   - **App Logo**: Optional
   - **Publish App**: Leave unchecked (not required)
   - **App Redirect URL**: Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
6. Save the app and note the generated credentials:
   - **App Client ID**
   - **App Secret**

#### Configure the Connection

Create a connection of type **OAuth 2.0** and configure the following fields:

- **API Domain**: Select the Smartsheet API domain. Most applications use the commercial domain (`api.smartsheet.com`). Government entities should select the government endpoint (`api.smartsheetgov.com`).
- **App Domain**: Select the Smartsheet application domain. This should match the API domain selection.
- **Scopes**: A space-separated list of permissions to request. Remove any permissions not needed. Refer to the [available scopes](https://developers.smartsheet.com/api/smartsheet/guides/advanced-topics/oauth) documentation for details.
- **App Client ID**: Enter the client ID generated from the Smartsheet app.
- **App Secret**: Enter the client secret generated from the Smartsheet app.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                | Default                                                                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Domain    | Select the Smartsheet API domain. Most applications use commercial, but government entities should use the government endpoint.                                                                         | api.smartsheet.com                                                                                                                                                                                                                |
| App Domain    | Select the Smartsheet application domain. This should match the API domain selection.                                                                                                                   | app.smartsheet.com                                                                                                                                                                                                                |
| Scopes        | A space-separated list of permissions to request. Remove any permissions not needed. See [available scopes](https://developers.smartsheet.com/api/smartsheet/guides/advanced-topics/oauth) for details. | ADMIN_SHEETS ADMIN_SIGHTS ADMIN_USERS ADMIN_WEBHOOKS ADMIN_WORKSPACES CREATE_SHEETS CREATE_SIGHTS DELETE_SHEETS DELETE_SIGHTS READ_CONTACTS READ_EVENTS READ_SHEETS READ_SIGHTS READ_USERS SHARE_SHEETS SHARE_SIGHTS WRITE_SHEETS |
| App Client ID | The client ID generated when creating an app within Smartsheet's Developer Tools.                                                                                                                       |                                                                                                                                                                                                                                   |
| App Secret    | The client secret generated when creating an app within Smartsheet's Developer Tools.                                                                                                                   |                                                                                                                                                                                                                                   |

### OAuth 2.0 (Deprecated) {#smartsheet oauth2}

Authenticate requests using OAuth 2.0. Deprecated in favor of the templated OAuth 2.0 connection.

:::warning[Deprecation Notice]
This connection type is deprecated. Use the **OAuth 2.0** connection instead, which provides a simplified configuration with templated URLs.
:::

To authenticate with Smartsheet through OAuth 2.0, create and configure an app within the Smartsheet account.

#### Prerequisites

- A Smartsheet account with access to Developer Tools
- A developer profile created in Smartsheet

#### Setup Steps

1. Log in to [Smartsheet](https://app.smartsheet.com)
2. Navigate to the profile icon (bottom left) and select **Developer Tools**
3. Create a developer profile if one does not already exist
4. Click **Create New App**
5. Configure the app:
   - **App Name**: Enter the application name
   - **App Description**: Add a brief description
   - **App Logo**: Optional
   - **Publish App**: Leave unchecked (not required)
   - **App Redirect URL**: Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
6. Save the app and note the generated credentials:
   - **App Client ID**
   - **App Secret**

#### Configure the Connection

Create a connection of type **OAuth 2.0 (Deprecated)** and configure the following fields:

- **Base URL**: Select the Smartsheet API base URL. Most applications use the commercial endpoint. Government entities should select the government endpoint.
- **Authorization URL**: Select the OAuth 2.0 authorization endpoint for Smartsheet.
- **Token URL**: Select the OAuth 2.0 token exchange endpoint for Smartsheet.
- **Scopes**: A space-separated list of permissions to request. Remove any permissions not needed. Refer to the [available scopes](https://developers.smartsheet.com/api/smartsheet/guides/advanced-topics/oauth) documentation for details.
- **App Client ID**: Enter the client ID generated from the Smartsheet app.
- **App Secret**: Enter the client secret generated from the Smartsheet app.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                                                                                                                                                                                | Default                                                                                                                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Base URL          | Most applications use Smartsheet commercial. Government entities should select the government endpoint.                                                                                                 | https://api.smartsheet.com/2.0/                                                                                                                                                                                                   |
| Authorization URL | The OAuth 2.0 authorization endpoint for Smartsheet.                                                                                                                                                    | https://app.smartsheet.com/b/authorize                                                                                                                                                                                            |
| Token URL         | The OAuth 2.0 token exchange endpoint for Smartsheet.                                                                                                                                                   | https://api.smartsheet.com/2.0/token                                                                                                                                                                                              |
| Scopes            | A space-separated list of permissions to request. Remove any permissions not needed. See [available scopes](https://developers.smartsheet.com/api/smartsheet/guides/advanced-topics/oauth) for details. | ADMIN_SHEETS ADMIN_SIGHTS ADMIN_USERS ADMIN_WEBHOOKS ADMIN_WORKSPACES CREATE_SHEETS CREATE_SIGHTS DELETE_SHEETS DELETE_SIGHTS READ_CONTACTS READ_EVENTS READ_SHEETS READ_SIGHTS READ_USERS SHARE_SHEETS SHARE_SIGHTS WRITE_SHEETS |
| App Client ID     | The client ID generated when creating an app within Smartsheet's Developer Tools.                                                                                                                       |                                                                                                                                                                                                                                   |
| App Secret        | The client secret generated when creating an app within Smartsheet's Developer Tools.                                                                                                                   |                                                                                                                                                                                                                                   |

## Triggers

### New and Updated Sheets {#pollchangestrigger}

Polls Smartsheet for sheets created or modified since the last execution, separated into new and updated buckets.

| Input                | Comments                                                                            | Default |
| -------------------- | ----------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                   |         |
| Show New Records     | When true, sheets created since the last poll are returned in the trigger payload.  | true    |
| Show Updated Records | When true, sheets modified since the last poll are returned in the trigger payload. | true    |

### Webhook {#smartsheetwebhook}

Receive and validate webhook requests from Smartsheet for manually configured webhook subscriptions.

## Actions

### Add Column to Sheet {#columnsaddtosheet}

Adds a column to a sheet.

| Input          | Comments                                                                                       | Default |
| -------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Smartsheet connection to use.                                                              |         |
| Sheet ID       | The unique identifier for the sheet.                                                           |         |
| Title          | The display name for the column header.                                                        |         |
| Type           | The data type for the column. Determines how cell values are displayed and validated.          |         |
| Formula        | The formula for a column.                                                                      |         |
| Hidden         | When true, the column is hidden from view in the sheet.                                        | false   |
| Position Index | The 0-based position where the column should be inserted in the sheet.                         | 0       |
| Description    | Additional context or instructions displayed below the column header.                          |         |
| Locked         | When true, the column is locked and cannot be edited by users without appropriate permissions. | false   |
| Options        | A JSON array of selectable values for picklist or multi-picklist columns.                      |         |
| Validation     | When true, cell value validation rules are enforced for the column.                            | false   |
| Width          | Display width of the column in pixels.                                                         |         |

### Add Comment {#commentscreate}

Adds a comment to a discussion.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    | The Smartsheet connection to use.         |         |
| Sheet ID      | The unique identifier for the sheet.      |         |
| Discussion ID | The unique identifier for the discussion. |         |
| Text          | The text content of the comment.          |         |

### Add/Update Row {#rowsaddtosheet}

Adds or updates a row on a sheet.

| Input                       | Comments                                                                                                                                       | Default  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection                  | The Smartsheet connection to use.                                                                                                              |          |
| Sheet ID                    | The unique identifier for the sheet.                                                                                                           |          |
| Row ID                      | The unique identifier of an existing row to update. Omit to add a new row instead.                                                             |          |
| Dynamic Columns Values      | A JSON array of objects mapping column titles to cell values for the row. Use this when column titles are easier to reference than column IDs. |          |
| Column Values               | A list of column names mapped to the values to write into them.                                                                                |          |
| Row Position (for new rows) | The position where new rows are added to the sheet.                                                                                            | toBottom |
| Allow Partial Success       | When true, allows the bulk operation to partially succeed if some rows fail validation rather than failing the entire request.                 | false    |
| Override Validation         | When true, allows cell values outside of the validation limits defined on the column.                                                          | false    |

### Copy Rows {#copyrows}

Copies rows to another sheet.

| Input                | Comments                                                                  | Default |
| -------------------- | ------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                         |         |
| Source Sheet ID      | The unique identifier of the sheet to copy or move rows from.             |         |
| Row IDs              | The unique identifiers of the rows to move or copy from the source sheet. |         |
| Destination Sheet ID | The unique identifier of the sheet to move or copy rows into.             |         |

### Copy Sheet {#copysheet}

Copies a sheet to a specified destination.

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Connection       | The Smartsheet connection to use.                                                 |         |
| Sheet ID         | The unique identifier for the sheet.                                              |         |
| Destination ID   | The ID of the destination container (when copying or moving a sheet or a folder). |         |
| Destination Type | The type of container to copy or move the resource into.                          | home    |
| New Name         | The display name to assign to the copied resource.                                |         |

### Create Discussion {#discussionscreate}

Creates a discussion on a sheet or row.

| Input      | Comments                                                                    | Default |
| ---------- | --------------------------------------------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.                                           |         |
| Sheet ID   | The unique identifier for the sheet.                                        |         |
| Row ID     | The unique identifier for the row. Leave empty to apply to the sheet level. |         |
| Comment    | The text content to post as a new discussion comment.                       |         |

### Create Folder {#createfolder}

Creates a new folder in a specified location.

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Smartsheet connection to use.                                                                                 |         |
| Folder ID    | The unique identifier of the parent folder to create a subfolder within. Omit to create a top-level home folder.  |         |
| Workspace ID | The unique identifier of the workspace to create the folder in. Omit to create the folder outside of a workspace. |         |
| Folder Name  | The display name for the folder.                                                                                  |         |

### Create Sheet {#createsheet}

Creates a new sheet with specified columns.

| Input        | Comments                                                                                                                                            | Default                                                                                                                                                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection   | The Smartsheet connection to use.                                                                                                                   |                                                                                                                                                                                                                        |
| Folder ID    | The unique identifier of the folder to create the sheet in. Omit to create a top-level sheet.                                                       |                                                                                                                                                                                                                        |
| Workspace ID | The unique identifier for the workspace. Leave empty to use the default context.                                                                    |                                                                                                                                                                                                                        |
| Sheet Name   | The display name for the new sheet.                                                                                                                 |                                                                                                                                                                                                                        |
| Columns      | See [Smartsheet API documentation](https://developers.smartsheet.com/api/smartsheet/openapi/columns) for additional information about column types. | <code>[<br /> {<br /> "title": "Favorite",<br /> "type": "CHECKBOX",<br /> "symbol": "STAR"<br /> },<br /> {<br /> "title": "Primary Column",<br /> "primary": true,<br /> "type": "TEXT_NUMBER"<br /> }<br />]</code> |

### Create Webhook {#createwebhook}

Creates and enables a webhook for a specified resource.

| Input               | Comments                                                                                                                                                                                       | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Smartsheet connection to use.                                                                                                                                                              |         |
| Callback URL        | The URL that Smartsheet sends webhook notifications to. This is usually a reference to another flow's webhook URL.                                                                             |         |
| Webhook Name        | A descriptive label to identify the webhook in the dashboard.                                                                                                                                  |         |
| Sheet ID            | The unique identifier for the sheet.                                                                                                                                                           |         |
| Subscope Column IDs | When provided, the webhook only fires when these specific columns are modified. Leave empty to trigger on any change to the sheet. Use the List Columns action to find column IDs for a sheet. |         |
| Allow Duplicates    | When true, allows the creation of duplicate webhooks. By default the action checks if a webhook with this callback and sheet ID already exists and skips creation if one is found.             | false   |

### Create Workspace {#createworkspace}

Creates a new workspace.

| Input          | Comments                            | Default |
| -------------- | ----------------------------------- | ------- |
| Connection     | The Smartsheet connection to use.   |         |
| Workspace Name | The display name for the workspace. |         |

### Delete Column {#columndelete}

Deletes a column from a sheet.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.     |         |
| Sheet ID   | The unique identifier for the sheet.  |         |
| Column ID  | The unique identifier for the column. |         |

### Delete Comment {#commentdelete}

Deletes a comment by its ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.      |         |
| Sheet ID   | The unique identifier for the sheet.   |         |
| Comment ID | The unique identifier for the comment. |         |

### Delete Discussion {#discussiondelete}

Deletes a discussion from a sheet or row.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    | The Smartsheet connection to use.         |         |
| Sheet ID      | The unique identifier for the sheet.      |         |
| Discussion ID | The unique identifier for the discussion. |         |

### Delete Folder {#deletefolder}

Deletes a folder by its ID.

| Input      | Comments                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.                                                                                |         |
| Folder ID  | The unique identifier for the folder. Folders can contain sheets, sights, reports, templates, and other folders. |         |

### Delete Instance Webhooks {#deleteinstancewebhooks}

Deletes all Smartsheet webhooks that point to a flow in this instance.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Smartsheet connection to use. |         |

### Delete Row {#deleterow}

Deletes a row from a sheet.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Smartsheet connection to use.    |         |
| Sheet ID   | The unique identifier for the sheet. |         |
| Row ID     | The unique identifier for the row.   |         |

### Delete Sheet {#deletesheet}

Deletes a sheet by its ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Smartsheet connection to use.    |         |
| Sheet ID   | The unique identifier for the sheet. |         |

### Delete Webhook {#deletewebhook}

Deletes a webhook by its ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.      |         |
| Webhook ID | The unique identifier for the webhook. |         |

### Delete Workspace {#deleteworkspace}

Deletes a workspace by its ID.

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The Smartsheet connection to use.        |         |
| Workspace ID | The unique identifier for the workspace. |         |

### Edit Comment {#commentedit}

Edits a comment by its ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.      |         |
| Sheet ID   | The unique identifier for the sheet.   |         |
| Comment ID | The unique identifier for the comment. |         |
| Text       | The text content of the comment.       |         |

### Get Column {#columnget}

Retrieves a column by its ID.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.     |         |
| Sheet ID   | The unique identifier for the sheet.  |         |
| Column ID  | The unique identifier for the column. |         |

### Get Comment {#commentget}

Retrieves a comment by its ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.      |         |
| Sheet ID   | The unique identifier for the sheet.   |         |
| Comment ID | The unique identifier for the comment. |         |

### Get Contact {#getcontact}

Retrieves a contact by its ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.      |         |
| Contact ID | The unique identifier for the contact. |         |

### Get Discussion {#discussionget}

Retrieves a discussion by its ID.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    | The Smartsheet connection to use.         |         |
| Sheet ID      | The unique identifier for the sheet.      |         |
| Discussion ID | The unique identifier for the discussion. |         |

### Get Folder {#getfolder}

Retrieves a folder by its ID.

| Input      | Comments                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.                                                                                |         |
| Folder ID  | The unique identifier for the folder. Folders can contain sheets, sights, reports, templates, and other folders. |         |

### Get Group {#getgroup}

Retrieves a group by its ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Smartsheet connection to use.    |         |
| Group ID   | The unique identifier for the group. |         |

### Get Report {#getreport}

Retrieves a report including one page of rows, attachments, discussions, and source sheets.

| Input                | Comments                                        | Default |
| -------------------- | ----------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.               |         |
| Report ID            | The unique identifier for the report.           |         |
| Pagination           | Page and page-size controls.                    |         |
| Pagination Page      | The 1-based page number to return.              | 1       |
| Pagination Page Size | The maximum number of items to return per page. |         |

### Get Row {#rowget}

Retrieves the contents of a row by its ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Smartsheet connection to use.    |         |
| Sheet ID   | The unique identifier for the sheet. |         |
| Row ID     | The unique identifier for the row.   |         |

### Get Sheet {#getsheet}

Retrieves a sheet by its ID.

| Input                | Comments                                        | Default |
| -------------------- | ----------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.               |         |
| Sheet ID             | The unique identifier for the sheet.            |         |
| Pagination           | Page and page-size controls.                    |         |
| Pagination Page      | The 1-based page number to return.              | 1       |
| Pagination Page Size | The maximum number of items to return per page. |         |

### Get Sheet Attachment {#attachmentsget}

Retrieves metadata for an attachment on a sheet.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    | The Smartsheet connection to use.         |         |
| Sheet ID      | The unique identifier for the sheet.      |         |
| Attachment ID | The unique identifier for the attachment. |         |

### Get Sheet Publish Status {#getsheetpublish}

Retrieves the publish status of a sheet.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Smartsheet connection to use.    |         |
| Sheet ID   | The unique identifier for the sheet. |         |

### Get Sheet Version {#getsheetversion}

Retrieves the version number of a sheet.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Smartsheet connection to use.    |         |
| Sheet ID   | The unique identifier for the sheet. |         |

### Get User {#getuser}

Retrieves a user by their ID.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.                                                                    |         |
| User ID    | The unique identifier of the user to fetch. Enter "me" to retrieve the currently authenticated user. |         |

### Get Webhook {#getwebhook}

Retrieves a webhook by its ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.      |         |
| Webhook ID | The unique identifier for the webhook. |         |

### Get Workspace {#getworkspace}

Retrieves a workspace by its ID.

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The Smartsheet connection to use.        |         |
| Workspace ID | The unique identifier for the workspace. |         |

### List Attachments on Row {#attachmentslistonrow}

Lists attachments on a row of a sheet.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Sheet ID             | The unique identifier for the sheet.                                                                    |         |
| Row ID               | The unique identifier for the row.                                                                      |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination           | Page and page-size controls.                                                                            |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### List Attachments on Sheet {#attachmentslistonsheet}

Lists all attachments on a sheet.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Sheet ID             | The unique identifier for the sheet.                                                                    |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination           | Page and page-size controls.                                                                            |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### List Columns {#columnslistonsheet}

Lists all columns on a sheet.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Sheet ID             | The unique identifier for the sheet.                                                                    |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination           | Page and page-size controls.                                                                            |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### List Contacts {#listcontacts}

Lists all contacts for the authenticated user.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination           | Page and page-size controls.                                                                            |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### List Discussion Attachments {#discussionlistattachments}

Lists all attachments on a discussion.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Sheet ID             | The unique identifier for the sheet.                                                                    |         |
| Discussion ID        | The unique identifier for the discussion.                                                               |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination           | Page and page-size controls.                                                                            |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### List Discussions {#discussionslist}

Lists discussions on a sheet or row.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Sheet ID             | The unique identifier for the sheet.                                                                    |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination           | Page and page-size controls.                                                                            |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |
| Row ID               | The unique identifier for the row. Leave empty to apply to the sheet level.                             |         |

### List Events {#listevents}

Lists events occurring in the Smartsheet organization account.

| Input           | Comments                                                                                       | Default              |
| --------------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| Connection      | The Smartsheet connection to use.                                                              |                      |
| Since           | The starting timestamp for events to return. Format: ISO 8601 (e.g. 2010-01-01T00:00:00Z).     | 2010-01-01T00:00:00Z |
| Pagination      | Cursor and result-count controls for paging through results.                                   |                      |
| Stream Position | The pagination cursor used to retrieve the next set of events. Returned by a previous request. |                      |
| Max Count       | The maximum number of events to return in a single response.                                   |                      |

### List Favorites {#getfavorites}

Lists all favorite items for the authenticated user.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination           | Page and page-size controls.                                                                            |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### List Folders {#listfolders}

Lists folders, subfolders, or workspace folders.

| Input        | Comments                                                                                                            | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Smartsheet connection to use.                                                                                   |         |
| Folder ID    | The unique identifier of the parent folder whose subfolders should be listed. Omit to list top-level home folders.  |         |
| Workspace ID | The unique identifier of the workspace whose folders should be listed. Omit to list folders outside of a workspace. |         |

### List Groups {#listgroups}

Lists all groups in the organization.

| Input                | Comments                                                                                                                                  | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                                                         |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned.                                   | false   |
| Pagination           | Page and page-size controls.                                                                                                              |         |
| Pagination Page      | The 1-based page number to return.                                                                                                        | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                                                           |         |
| Modified Since       | When specified, the response only includes objects modified on or after this date and time. Format: ISO 8601 (e.g. 2023-01-01T00:00:00Z). |         |

### List Home Contents {#listhomecontents}

Lists all Home objects, including dashboards, folders, reports, sheets, templates, and workspaces.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Smartsheet connection to use. |         |

### List Public Templates (Deprecated) {#templateslistpublic}

This action is deprecated. Smartsheet removed the GET /templates/public endpoint with no replacement. Use the "List User Templates" action with a Workspace ID instead.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination           | Page and page-size controls.                                                                            |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### List Reports {#getreports}

Lists all reports accessible to the authenticated user.

| Input          | Comments                                                                                                                                  | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Smartsheet connection to use.                                                                                                         |         |
| Modified Since | When specified, the response only includes objects modified on or after this date and time. Format: ISO 8601 (e.g. 2023-01-01T00:00:00Z). |         |

### List Sheets {#listsheets}

Lists all sheets accessible to the authenticated user.

| Input                | Comments                                                                                                                                  | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                                                         |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned.                                   | false   |
| Pagination           | Page and page-size controls.                                                                                                              |         |
| Pagination Page      | The 1-based page number to return.                                                                                                        | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                                                           |         |
| Modified Since       | When specified, the response only includes objects modified on or after this date and time. Format: ISO 8601 (e.g. 2023-01-01T00:00:00Z). |         |

### List Users {#listusers}

Lists all users in the organization.

| Input                | Comments                                                                                                                                  | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                                                         |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned.                                   | false   |
| Pagination           | Page and page-size controls.                                                                                                              |         |
| Pagination Page      | The 1-based page number to return.                                                                                                        | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                                                           |         |
| Email                | The email address to filter users by.                                                                                                     |         |
| Modified Since       | When specified, the response only includes objects modified on or after this date and time. Format: ISO 8601 (e.g. 2023-01-01T00:00:00Z). |         |

### List User Templates {#templateslist}

Lists user-created templates.

| Input        | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Smartsheet connection to use.                                                                                                                                                                                                                                                                                                                                                                                                        |         |
| Workspace ID | When supplied, fetches templates from this single workspace only: fast, single API call. When omitted, the action paginates ALL workspaces and aggregates templates from each; this preserves backwards compatibility with the legacy GET /templates response shape but may be slow and rate-limit-sensitive on accounts with many workspaces (chunked-parallel concurrency 5). Recommend supplying a workspace ID for production flows. |         |

### List Webhooks {#listwebhooks}

Lists all webhooks owned by the authenticated user.

| Input      | Comments                                                                                                                                                                                    | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.                                                                                                                                                           |         |
| Show All   | When true, returns all webhooks for the account (including those for other apps and instances). When false, returns only webhooks whose callback URLs match a flow in the current instance. | false   |

### List Workspaces {#listworkspaces}

Lists all workspaces accessible to the authenticated user.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Smartsheet connection to use. |         |

### Move Folder {#movefolder}

Moves a folder to a specified destination.

| Input                 | Comments                                                                                                         | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Smartsheet connection to use.                                                                                |         |
| Folder ID             | The unique identifier for the folder. Folders can contain sheets, sights, reports, templates, and other folders. |         |
| Destination Folder ID | The unique identifier for the folder. Folders can contain sheets, sights, reports, templates, and other folders. |         |

### Move Rows {#moverows}

Moves rows to another sheet.

| Input                | Comments                                                                  | Default |
| -------------------- | ------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                         |         |
| Sheet ID             | The unique identifier for the sheet.                                      |         |
| Row IDs              | The unique identifiers of the rows to move or copy from the source sheet. |         |
| Destination Sheet ID | The unique identifier of the sheet to move or copy rows into.             |         |

### Move Sheet {#movesheet}

Moves a sheet to a specified destination.

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Connection       | The Smartsheet connection to use.                                                 |         |
| Sheet ID         | The unique identifier for the sheet.                                              |         |
| Destination ID   | The ID of the destination container (when copying or moving a sheet or a folder). |         |
| Destination Type | The type of container to copy or move the resource into.                          | home    |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the Smartsheet API.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Smartsheet connection to use.                                                                                                                                                                |         |
| URL                     | The path to append to the Smartsheet API base URL (https://api.smartsheet.com/2.0). For example, to reach https://api.smartsheet.com/2.0/reports, enter /reports.                                |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Search Sheets {#searchsheet}

Searches sheets for a specified phrase.

| Input        | Comments                                                                               | Default |
| ------------ | -------------------------------------------------------------------------------------- | ------- |
| Connection   | The Smartsheet connection to use.                                                      |         |
| Sheet ID     | The unique identifier of the sheet to search within. Omit to search across all sheets. |         |
| Search Query | The text to search for across sheets, rows, and cells.                                 |         |

### Send Sheet {#sheetsend}

Sends a sheet via email to specified recipients.

| Input      | Comments                                                   | Default |
| ---------- | ---------------------------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.                          |         |
| Sheet ID   | The unique identifier for the sheet.                       |         |
| Format     | The file format to use when sending the sheet.             | EXCEL   |
| Paper Size | The paper size to use when generating the PDF.             | LETTER  |
| Emails     | The email addresses of recipients to send the document to. |         |
| Group IDs  | The group IDs of recipients to send the document to.       |         |
| CC Me      | When true, sends a copy of the email to the sender.        | false   |
| Message    | The message of the email.                                  |         |
| Subject    | The subject line of the email.                             |         |

### Set Sheet Publish Status {#setsheetpublish}

Sets the publish status of a sheet.

| Input                        | Comments                                                                                                                                                | Default  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection                   | The Smartsheet connection to use.                                                                                                                       |          |
| Sheet ID                     | The unique identifier for the sheet.                                                                                                                    |          |
| iCal Enabled                 | When true, a webcal feed is published for the calendar in the sheet.                                                                                    | false    |
| Read Only Full Accessible By | The audience that can access the read-only full view of the published sheet. ALL allows anyone with the link; ORG restricts access to the organization. | ALL      |
| Read Only Full Default View  | The default layout shown when viewers open the read-only full published sheet.                                                                          | CALENDAR |
| Read Only Full Enabled       | When true, publishes a rich read-only version of the sheet that allows viewers to download row attachments and discussions.                             | true     |
| Read Only Lite Enabled       | When true, publishes a lightweight read-only version of the sheet without row attachments or discussions.                                               | false    |
| Read Write Accessible By     | The audience that can edit the published sheet. ALL allows anyone with the link; ORG restricts access to the organization.                              | ALL      |
| Read Write Default View      | The default layout shown when editors open the read-write published sheet.                                                                              | CALENDAR |
| Read Write Enabled           | When true, publishes a rich version of the sheet that allows editors to modify cells and manage attachments and discussions.                            | true     |

### Update Folder {#updatefolder}

Updates the name of a folder.

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Smartsheet connection to use.                                                                                |         |
| Folder ID   | The unique identifier for the folder. Folders can contain sheets, sights, reports, templates, and other folders. |         |
| Folder Name | The display name for the folder.                                                                                 |         |

### Update Sheet {#updatesheet}

Updates the properties of a sheet.

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.       |         |
| Sheet ID   | The unique identifier for the sheet.    |         |
| New Name   | The updated display name for the sheet. |         |

### Update Workspace {#updateworkspace}

Updates the properties of a workspace.

| Input        | Comments                                    | Default |
| ------------ | ------------------------------------------- | ------- |
| Connection   | The Smartsheet connection to use.           |         |
| Workspace ID | The unique identifier for the workspace.    |         |
| Name         | The updated display name for the workspace. |         |
