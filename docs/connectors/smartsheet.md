---
title: Smartsheet Connector
sidebar_label: Smartsheet
description: Manage sheets, rows, and workspaces in the Smartsheet platform
---

![Smartsheet](./assets/smartsheet.png#connector-icon)
[Smartsheet](https://www.smartsheet.com) is a software as a service offering for collaboration and work management, developed and marketed by Smartsheet Inc.
This component allows managing and interacting with Smartsheet sheets.

## API Documentation

This component was built using the [Smartsheet API Documentation](https://developers.smartsheet.com/api/smartsheet/introduction)

## Connections

### API Key {#apikey}

Authenticate requests to Smartsheet using an API key.

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

Authenticate requests to Smartsheet using OAuth 2.0.

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
| App Domain    | Select the Smartsheet application domain. This should match your API domain selection.                                                                                                                  | app.smartsheet.com                                                                                                                                                                                                                |
| Scopes        | A space-separated list of permissions to request. Remove any permissions not needed. See [available scopes](https://developers.smartsheet.com/api/smartsheet/guides/advanced-topics/oauth) for details. | ADMIN_SHEETS ADMIN_SIGHTS ADMIN_USERS ADMIN_WEBHOOKS ADMIN_WORKSPACES CREATE_SHEETS CREATE_SIGHTS DELETE_SHEETS DELETE_SIGHTS READ_CONTACTS READ_EVENTS READ_SHEETS READ_SIGHTS READ_USERS SHARE_SHEETS SHARE_SIGHTS WRITE_SHEETS |
| App Client ID | The client ID generated when creating an app within Smartsheet's Developer Tools.                                                                                                                       |                                                                                                                                                                                                                                   |
| App Secret    | The client secret generated when creating an app within Smartsheet's Developer Tools.                                                                                                                   |                                                                                                                                                                                                                                   |

### OAuth 2.0 (Deprecated) {#smartsheet oauth2}

Authenticate requests to Smartsheet using OAuth 2.0. Deprecated in favor of the templated OAuth 2.0 connection.

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

### Webhook {#smartsheetwebhook}

Receive and validate webhook requests from Smartsheet for manually configured webhook subscriptions.

## Actions

### Add Column to Sheet {#columnsaddtosheet}

Adds a column to a sheet.

| Input          | Comments                                                                              | Default |
| -------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection     | The Smartsheet connection to use.                                                     |         |
| Sheet ID       | The unique identifier for the sheet.                                                  |         |
| Title          | The display name for the column header.                                               |         |
| Type           | The data type for the column. Determines how cell values are displayed and validated. |         |
| Formula        | The formula for a column.                                                             |         |
| Hidden         | Indicates whether the column is hidden                                                | false   |
| Position Index | The 0-based position where the column should be inserted in the sheet.                | 0       |
| Description    | Additional context or instructions displayed below the column header.                 |         |
| Locked         | Indicates whether the column is locked                                                | false   |
| Options        | A list of options for picklists                                                       |         |
| Validation     | Indicates whether validation has been enabled for the column                          | false   |
| Width          | Display width of the column in pixels.                                                |         |

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

| Input                       | Comments                                                                              | Default  |
| --------------------------- | ------------------------------------------------------------------------------------- | -------- |
| Connection                  | The Smartsheet connection to use.                                                     |          |
| Sheet ID                    | The unique identifier for the sheet.                                                  |          |
| Row ID (Optional)           | An ID of a row to update. Omit to add a new row                                       |          |
| Dynamic Columns Values      | List of columns and their values                                                      |          |
| Column Values               | A list of columns to be updated with the specified value                              |          |
| Row Position (for new rows) | The position where new rows are added to the sheet.                                   | toBottom |
| Allow Partial Success       | When specified with a value of true, enables partial success for this bulk operation  | false    |
| Override Validation         | When true, allows cell values outside of the validation limits defined on the column. | false    |

### Copy Rows {#copyrows}

Copies rows to another sheet.

| Input                | Comments                                                      | Default |
| -------------------- | ------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                             |         |
| Source Sheet ID      | The unique identifier of the sheet to copy or move rows from. |         |
| Row IDs              | The IDs of the rows to move or copy from the source sheet     |         |
| Destination Sheet ID | The unique identifier of the sheet to move or copy rows into. |         |

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

| Input             | Comments                                                                    | Default |
| ----------------- | --------------------------------------------------------------------------- | ------- |
| Connection        | The Smartsheet connection to use.                                           |         |
| Sheet ID          | The unique identifier for the sheet.                                        |         |
| Row ID (Optional) | The unique identifier for the row. Leave empty to apply to the sheet level. |         |
| Comment           | The text content to post as a new discussion comment.                       |         |

### Create Folder {#createfolder}

Creates a new folder in a specified location.

| Input                   | Comments                                                                                                 | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Smartsheet connection to use.                                                                        |         |
| Folder ID               | Enter the ID of a folder to create a subfolder in, or omit this value to create a top-level home folder. |         |
| Workspace ID (Optional) | Create in this workspace. Optional.                                                                      |         |
| Folder Name             | The display name for the folder.                                                                         |         |

### Create Sheet {#createsheet}

Creates a new sheet with specified columns.

| Input                   | Comments                                                                                                                                            | Default                                                                                                                                                                                                                |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              | The Smartsheet connection to use.                                                                                                                   |                                                                                                                                                                                                                        |
| Folder ID               | Create sheet in this folder. Omit to create a top-level sheet.                                                                                      |                                                                                                                                                                                                                        |
| Workspace ID (Optional) | The unique identifier for the workspace. Leave empty to use the default context.                                                                    |                                                                                                                                                                                                                        |
| Sheet Name              | The display name for the new sheet.                                                                                                                 |                                                                                                                                                                                                                        |
| Columns                 | See [Smartsheet API documentation](https://developers.smartsheet.com/api/smartsheet/openapi/columns) for additional information about column types. | <code>[<br /> {<br /> "title": "Favorite",<br /> "type": "CHECKBOX",<br /> "symbol": "STAR"<br /> },<br /> {<br /> "title": "Primary Column",<br /> "primary": true,<br /> "type": "TEXT_NUMBER"<br /> }<br />]</code> |

### Create Webhook {#createwebhook}

Creates and enables a webhook for a specified resource.

| Input             | Comments                                                                                                                                                                                                              | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Smartsheet connection to use.                                                                                                                                                                                     |         |
| Callback URL      | The URL that Smartsheet sends webhook notifications to. This is usually a reference to another flow's webhook URL.                                                                                                    |         |
| Webhook Name      | A descriptive label to identify the webhook in the dashboard.                                                                                                                                                         |         |
| Sheet ID          | The unique identifier for the sheet.                                                                                                                                                                                  |         |
| Allow Duplicates? | By default this action checks if a webhook with this callback and sheet ID already exists. If it does, this action does not configure a new webhook. Toggle this to true to allow the creation of duplicate webhooks. | false   |

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
| Pagination Page Size | The maximum number of items to return per page. |         |
| Pagination Page      | The 1-based page number to return.              | 1       |

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
| Pagination Page Size | The maximum number of items to return per page. |         |
| Pagination Page      | The 1-based page number to return.              | 1       |

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

| Input      | Comments                                                              | Default |
| ---------- | --------------------------------------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.                                     |         |
| User ID    | The ID of a user to fetch. Enter 'me' to get currently logged in user |         |

### Get Webhook {#getwebhook}

Retrieves a webhook by its ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.      |         |
| Webhook ID | The unique identifier for the webhook. |         |

### Get Workspace {#getworkspace}

Retrieves a workspace by its ID.

| Input        | Comments                                                               | Default |
| ------------ | ---------------------------------------------------------------------- | ------- |
| Connection   | The Smartsheet connection to use.                                      |         |
| Workspace ID | The unique identifier for the workspace.                               |         |
| Load All     | When true, includes nested folders and their contents in the response. | false   |

### List Attachments on Row {#attachmentslistonrow}

Lists attachments on a row of a sheet.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Sheet ID             | The unique identifier for the sheet.                                                                    |         |
| Row ID               | The unique identifier for the row.                                                                      |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |

### List Attachments on Sheet {#attachmentslistonsheet}

Lists all attachments on a sheet.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Sheet ID             | The unique identifier for the sheet.                                                                    |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |

### List Columns {#columnslistonsheet}

Lists all columns on a sheet.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Sheet ID             | The unique identifier for the sheet.                                                                    |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |

### List Contacts {#listcontacts}

Lists all contacts for the authenticated user.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### List Discussion Attachments {#discussionlistattachments}

Lists all attachments on a discussion.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Sheet ID             | The unique identifier for the sheet.                                                                    |         |
| Discussion ID        | The unique identifier for the discussion.                                                               |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |

### List Discussions {#discussionslist}

Lists discussions on a sheet or row.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Sheet ID             | The unique identifier for the sheet.                                                                    |         |
| Row ID (Optional)    | The unique identifier for the row. Leave empty to apply to the sheet level.                             |         |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |

### List Events {#listevents}

Lists events occurring in the Smartsheet organization account.

| Input           | Comments                                                                                   | Default              |
| --------------- | ------------------------------------------------------------------------------------------ | -------------------- |
| Connection      | The Smartsheet connection to use.                                                          |                      |
| Since           | The starting timestamp for events to return. Format: ISO 8601 (e.g. 2010-01-01T00:00:00Z). | 2010-01-01T00:00:00Z |
| Stream Position | Indicates next set of events to return                                                     |                      |
| Max Count       | The maximum number of events to return as response to this call.                           |                      |

### List Favorites {#getfavorites}

Lists all favorite items for the authenticated user.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### List Folders {#listfolders}

Lists folders, subfolders, or workspace folders.

| Input                   | Comments                                                                                                | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Smartsheet connection to use.                                                                       |         |
| Folder ID               | Enter the ID of a folder to list subfolders, or omit this value to list top-level home folders.         |         |
| Workspace ID (Optional) | Create in this workspace. Optional.                                                                     |         |
| Fetch All               | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination Page         | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size    | The maximum number of items to return per page.                                                         |         |

### List Groups {#listgroups}

Lists all groups in the organization.

| Input                | Comments                                                                                                                                                                               | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                                                                                                      |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned.                                                                                | false   |
| Modified Since       | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified. Format: ISO 8601 (e.g. 2023-01-01T00:00:00Z). |         |
| Pagination Page      | The 1-based page number to return.                                                                                                                                                     | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                                                                                                        |         |

### List Home Contents {#listhomecontents}

Lists all Home objects, including dashboards, folders, reports, sheets, templates, and workspaces.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Smartsheet connection to use. |         |

### List Public Templates {#templateslistpublic}

Lists publicly available templates.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### List Reports {#getreports}

Lists all reports accessible to the authenticated user.

| Input          | Comments                                                                                                                                                                               | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Smartsheet connection to use.                                                                                                                                                      |         |
| Modified Since | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified. Format: ISO 8601 (e.g. 2023-01-01T00:00:00Z). |         |

### List Sheets {#listsheets}

Lists all sheets accessible to the authenticated user.

| Input                | Comments                                                                                                                                                                               | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                                                                                                      |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned.                                                                                | false   |
| Modified Since       | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified. Format: ISO 8601 (e.g. 2023-01-01T00:00:00Z). |         |
| Pagination Page      | The 1-based page number to return.                                                                                                                                                     | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                                                                                                        |         |

### List Users {#listusers}

Lists all users in the organization.

| Input                | Comments                                                                                                                                                                               | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                                                                                                      |         |
| Email                | The email address to filter users by.                                                                                                                                                  |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned.                                                                                | false   |
| Modified Since       | When specified with a date and time value, response only includes the objects that are modified on or after the date and time specified. Format: ISO 8601 (e.g. 2023-01-01T00:00:00Z). |         |
| Pagination Page      | The 1-based page number to return.                                                                                                                                                     | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                                                                                                        |         |

### List User Templates {#templateslist}

Lists user-created templates.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### List Webhooks {#listwebhooks}

Lists all webhooks owned by the authenticated user.

| Input      | Comments                                                                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.                                                                                                                                                  |         |
| Show All   | By default only webhooks whose callback URLs match a flow in the current instance are shown. Toggle this to 'true' to show all webhooks (even those for other apps and instances). | false   |

### List Workspaces {#listworkspaces}

Lists all workspaces accessible to the authenticated user.

| Input                | Comments                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                                                                       |         |
| Fetch All            | When true, automatically fetches all pages of results. When false, only the specified page is returned. | false   |
| Pagination Page      | The 1-based page number to return.                                                                      | 1       |
| Pagination Page Size | The maximum number of items to return per page.                                                         |         |

### Move Folder {#movefolder}

Moves a folder to a specified destination.

| Input                 | Comments                                                                                                         | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Smartsheet connection to use.                                                                                |         |
| Folder ID             | The unique identifier for the folder. Folders can contain sheets, sights, reports, templates, and other folders. |         |
| Destination Folder ID | The unique identifier for the folder. Folders can contain sheets, sights, reports, templates, and other folders. |         |

### Move Rows {#moverows}

Moves rows to another sheet.

| Input                | Comments                                                      | Default |
| -------------------- | ------------------------------------------------------------- | ------- |
| Connection           | The Smartsheet connection to use.                             |         |
| Sheet ID             | The unique identifier for the sheet.                          |         |
| Row IDs              | The IDs of the rows to move or copy from the source sheet     |         |
| Destination Sheet ID | The unique identifier of the sheet to move or copy rows into. |         |

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

| Input                   | Comments                                                                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Smartsheet connection to use.                                                                                                                                                                             |         |
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

Searches sheets for a specified phrase.

| Input               | Comments                                                  | Default |
| ------------------- | --------------------------------------------------------- | ------- |
| Connection          | The Smartsheet connection to use.                         |         |
| Sheet ID (Optional) | The ID of the sheet to search. Omit to search all sheets. |         |
| Search Query        | The text to search for across sheets, rows, and cells.    |         |

### Send Sheet {#sheetsend}

Sends a sheet via email to specified recipients.

| Input      | Comments                                                    | Default |
| ---------- | ----------------------------------------------------------- | ------- |
| Connection | The Smartsheet connection to use.                           |         |
| Sheet ID   | The unique identifier for the sheet.                        |         |
| Format     | The file format to use when sending the sheet.              | EXCEL   |
| Paper Size | The paper size to use when generating the PDF.              | LETTER  |
| Emails     | The email addresses of recipients to send the document to.  |         |
| Group IDs  | The group IDs of recipients to send the document to.        |         |
| CC Me      | Indicates whether to send a copy of the email to the sender | false   |
| Message    | The message of the email.                                   |         |
| Subject    | The subject line of the email.                              |         |

### Set Sheet Publish Status {#setsheetpublish}

Sets the publish status of a sheet.

| Input                        | Comments                                                                                                                   | Default  |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection                   | The Smartsheet connection to use.                                                                                          |          |
| Sheet ID                     | The unique identifier for the sheet.                                                                                       |          |
| iCal Enabled                 | If true, a webcal is available for the calendar in the sheet                                                               | false    |
| Read Only Full Accessible By | Indicates who can access the 'Read-Only Full' view of the published sheet:                                                 | ALL      |
| Read Only Full Default View  | Indicates which view the user has set for a read-only, default view of the published sheet                                 | CALENDAR |
| Read Only Full Enabled       | If true, a rich version of the sheet is published with the ability to download row attachments and discussions             | true     |
| Read Only Lite Enabled       | If true, a lightweight version of the sheet is published without row attachments and discussions                           | false    |
| Read Write Accessible By     | Indicates who can access the 'Edit by Anyone' view of the published sheet:                                                 | ALL      |
| Read Write Default View      | Indicates which view the user has set for a read-write, default view of the published sheet                                | CALENDAR |
| Read Write Enabled           | If **true**,a rich version of the sheet is published with the ability to edit cells and manage attachments and discussions | true     |

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
