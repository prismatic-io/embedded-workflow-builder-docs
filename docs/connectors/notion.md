---
title: Notion Connector
sidebar_label: Notion
description: Manage Notion pages, databases, and users
---

![Notion](./assets/notion.png#connector-icon)
Manage Notion pages, databases, and users

## Connections

### Internal Integration Secret {#notioninternalintegration}

Connect to Notion using an Internal Integration Secret

| Input                       | Comments                                                                                                                                                            | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Internal Integration Secret | Your Notion Internal Integration Secret. Create an integration in your [Notion integrations settings](https://www.notion.com/my-integrations) to obtain this token. |         |

### OAuth 2.0 {#notionoauth}

Connect to Notion via OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Client ID     | Client ID of your Notion app. Find this in your [Notion integrations settings](https://www.notion.com/my-integrations).     |         |
| Client Secret | Client Secret of your Notion app. Find this in your [Notion integrations settings](https://www.notion.com/my-integrations). |         |

## Triggers

### New and Updated Database Items {#datasourceitemspollingtrigger}

Checks for new and updated items in a Notion database on a configured schedule.

| Input          | Comments                                                                                                                                                                                   | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Notion connection to use.                                                                                                                                                              |         |
| Data Source ID | The unique identifier of the data source. Find this in the Notion URL or database settings menu. See [Notion API Data Sources](https://developers.notion.com/docs/working-with-databases). |         |

### New and Updated Databases {#datasourcespollingtrigger}

Checks for new and updated databases in Notion on a configured schedule.

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Notion connection to use. |         |

### New and Updated Pages {#pagespollingtrigger}

Checks for new and updated pages in Notion on a configured schedule.

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Notion connection to use. |         |

## Actions

### Create Database {#updatedcreatedatabase}

Creates a database as a subpage in the specified parent page, with the specified properties schema set on its initial data source.

| Input                          | Comments                                                                                                                                                                                    | Default |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                     | The Notion connection to use.                                                                                                                                                               |         |
| Parent                         | The parent page where the database will be created. Format: {"type": "page_id", "page_id": "..."} or {"type": "workspace", "workspace": true} for workspace-level.                          |         |
| Title                          | The title of the database as it appears in Notion, formatted as a rich text array.                                                                                                          |         |
| Initial Data Source Properties | Property schema for the initial data source. The keys are the names of properties as they appear in Notion.                                                                                 |         |
| Icon                           | The icon of the new page. Either an [emoji object](https://developers.notion.com/reference/emoji-object) or an [external file object](https://developers.notion.com/reference/file-object). |         |
| Description                    | The description of the data source formatted as a rich text array. See [Notion Rich Text Reference](https://developers.notion.com/reference/rich-text).                                     |         |
| Cover Image                    | The cover image of the new page, represented as a [file object](https://developers.notion.com/reference/file-object).                                                                       |         |

### Create Database (Deprecated) {#createdatabase}

Creates a database as a subpage in the specified parent page, with the specified properties schema. Currently, the parent of a new database must be a Notion page or a wiki database.

| Input      | Comments                                                                                                                                                        | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Notion connection to use.                                                                                                                                   |         |
| Parent     | The parent page where the database will be created. Format: {"type": "page_id", "page_id": "..."}                                                               |         |
| Title      | The title of the database as it appears in Notion, formatted as a rich text array.                                                                              |         |
| Properties | Property schema of database. The keys are the names of properties as they appear in Notion. For relation properties, use data_source_id instead of database_id. |         |

### Create Database Item {#createdatabaseitem}

Creates an Item on a database.

| Input       | Comments                                                                                                                                                                                                                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Notion connection to use.                                                                                                                                                                                                                                                    |         |
| Parent      | The parent database where the new page is inserted. Recommended format: {"type": "data_source_id", "data_source_id": "..."}. Legacy format {"database_id": "..."} is supported for single-source databases.                                                                      |         |
| Properties  | The values of the page's properties. <strong>Important:</strong> If the parent is a database, the schema must match the parent database's properties. If the parent is a page, only 'title' is valid. [Learn more](https://developers.notion.com/reference/page-property-values) |         |
| Children    | The content to be rendered on the new page, represented as an array of block objects. [Block reference](https://developers.notion.com/reference/block)                                                                                                                           |         |
| Icon        | The icon of the new page. Either an [emoji object](https://developers.notion.com/reference/emoji-object) or an [external file object](https://developers.notion.com/reference/file-object).                                                                                      |         |
| Cover Image | The cover image of the new page, represented as a [file object](https://developers.notion.com/reference/file-object).                                                                                                                                                            |         |

### Create Data Source {#createdatasource}

Add an additional data source to an existing database. A standard table view is created alongside the new data source.

| Input       | Comments                                                                                                                                                                                                                                           | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Notion connection to use.                                                                                                                                                                                                                      |         |
| Database ID | The unique identifier of the database. For single-source databases, this is also the data source ID. Find this in the Notion URL or database settings menu. See [Notion API Database Reference](https://developers.notion.com/reference/database). |         |
| Properties  | Property schema of the data source. The keys are the names of properties as they appear in Notion.                                                                                                                                                 |         |
| Title       | The title of the database as it appears in Notion, formatted as a rich text array.                                                                                                                                                                 |         |
| Icon        | The icon of the new page. Either an [emoji object](https://developers.notion.com/reference/emoji-object) or an [external file object](https://developers.notion.com/reference/file-object).                                                        |         |

### Create Page {#createpage}

Creates a new page that is a child of an existing page or database.

| Input       | Comments                                                                                                                                                                                                                                                                                                      | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Notion connection to use.                                                                                                                                                                                                                                                                                 |         |
| Parent      | The parent where the new page is inserted. <strong>For page parents:</strong> {"type": "page_id", "page_id": "..."}. <strong>For database parents (recommended):</strong> {"type": "data_source_id", "data_source_id": "..."}. Legacy format {"database_id": "..."} is supported for single-source databases. |         |
| Properties  | The values of the page's properties. <strong>Important:</strong> If the parent is a database, the schema must match the parent database's properties. If the parent is a page, only 'title' is valid. [Learn more](https://developers.notion.com/reference/page-property-values)                              |         |
| Children    | The content to be rendered on the new page, represented as an array of block objects. [Block reference](https://developers.notion.com/reference/block)                                                                                                                                                        |         |
| Icon        | The icon of the new page. Either an [emoji object](https://developers.notion.com/reference/emoji-object) or an [external file object](https://developers.notion.com/reference/file-object).                                                                                                                   |         |
| Cover Image | The cover image of the new page, represented as a [file object](https://developers.notion.com/reference/file-object).                                                                                                                                                                                         |         |

### Get Current User {#getcurrentuser}

Get the currently logged in user

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Notion connection to use. |         |

### Get Database (Deprecated) {#getdatabase}

Retrieve a database by ID

| Input       | Comments                                                                                                                                                                                                                                           | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Notion connection to use.                                                                                                                                                                                                                      |         |
| Database ID | The unique identifier of the database. For single-source databases, this is also the data source ID. Find this in the Notion URL or database settings menu. See [Notion API Database Reference](https://developers.notion.com/reference/database). |         |

### Get Page {#getpage}

Retrieve a page by ID with optional property filters

| Input             | Comments                                                                                                                                               | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Notion connection to use.                                                                                                                          |         |
| Page ID           | The unique identifier of the page in Notion. Find this in the page URL. See [Notion API Page Reference](https://developers.notion.com/reference/page). |         |
| Filter Properties | Comma-separated list of page property IDs to include in the response. Use this to limit the response to specific page properties.                      |         |

### Get User by ID {#getuser}

Get a user by their ID

| Input      | Comments                                                                                                                    | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Notion connection to use.                                                                                               |         |
| User ID    | The unique identifier of the user in Notion. See [Notion API User Reference](https://developers.notion.com/reference/user). |         |

### List Databases (Deprecated) {#listdatabases}

List all databases or data sources

| Input        | Comments                                                                                                                                 | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Notion connection to use.                                                                                                            |         |
| Start Cursor | The start cursor returned from a previous list or query action when at least one more page of records is available. Used for pagination. |         |
| Fetch All    | When true, fetches all pages using pagination. This ignores the start cursor input.                                                      | false   |

### List Data Sources {#listdatasources}

List all data sources accessible to the integration.

| Input        | Comments                                                                                                                                 | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Notion connection to use.                                                                                                            |         |
| Start Cursor | The start cursor returned from a previous list or query action when at least one more page of records is available. Used for pagination. |         |
| Fetch All    | When true, fetches all pages using pagination. This ignores the start cursor input.                                                      | false   |

### List Pages {#listpages}

List all pages

| Input        | Comments                                                                                                                                 | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Notion connection to use.                                                                                                            |         |
| Start Cursor | The start cursor returned from a previous list or query action when at least one more page of records is available. Used for pagination. |         |
| Fetch All    | When true, fetches all pages using pagination. This ignores the start cursor input.                                                      | false   |

### List Users {#listusers}

List all users in the workspace with optional page size

| Input        | Comments                                                                                                                                 | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Notion connection to use.                                                                                                            |         |
| Start Cursor | The start cursor returned from a previous list or query action when at least one more page of records is available. Used for pagination. |         |
| Page Size    | The number of items to return per page. Maximum: 100.                                                                                    | 50      |
| Fetch All    | Turn this on to fetch all pages. This will ignore the start cursor and page size inputs.                                                 | false   |

### Query Database (Deprecated) {#querydatabase}

Query a Notion database or data source

| Input         | Comments                                                                                                                                                                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Notion connection to use.                                                                                                                                                                                                                      |         |
| Database ID   | The unique identifier of the database. For single-source databases, this is also the data source ID. Find this in the Notion URL or database settings menu. See [Notion API Database Reference](https://developers.notion.com/reference/database). |         |
| Filter Object | Filter conditions to apply to the database query. Supports compound filters using 'and' and 'or' operators. See [Notion API Filter Documentation](https://developers.notion.com/reference/post-database-query-filter).                             |         |

### Query Data Source {#querydatasource}

Query a data source to retrieve pages with optional filtering and sorting.

| Input             | Comments                                                                                                                                                                                                               | Default  |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection        | The Notion connection to use.                                                                                                                                                                                          |          |
| Data Source ID    | The unique identifier of the data source. Find this in the Notion URL or database settings menu. See [Notion API Data Sources](https://developers.notion.com/docs/working-with-databases).                             |          |
| Fetch All         | When true, fetches all pages using pagination. This ignores the start cursor input.                                                                                                                                    | false    |
| Sort              | Array of sort objects defining the order of query results. Earlier sorts take precedence. See [Notion API Sort Documentation](https://developers.notion.com/reference/post-database-query-sort).                       |          |
| Filter Object     | Filter conditions to apply to the database query. Supports compound filters using 'and' and 'or' operators. See [Notion API Filter Documentation](https://developers.notion.com/reference/post-database-query-filter). |          |
| Start Cursor      | The start cursor returned from a previous list or query action when at least one more page of records is available. Used for pagination.                                                                               |          |
| Page Size         | The number of items to return per page. Maximum: 100.                                                                                                                                                                  | 50       |
| Result Type       | Type of results to return. Use 'data_source' (recommended) for the new API or 'database' for legacy support.                                                                                                           | database |
| Filter Properties | Limit the properties included in the response. Provide an object where keys are property names and values are property values or arrays of values.                                                                     |          |

### Raw Request {#rawrequest}

Send raw HTTP request to Notion

| Input                   | Comments                                                                                                                                                                                               | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Notion connection to use.                                                                                                                                                                          |         |
| URL                     | Input the path only (/users/me), The base URL is already included (https://api.notion.com/v1). For example, to connect to https://api.notion.com/v1/users/me, only /users/me is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                              |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                   |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                       |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                 |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                    |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                            |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                               | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                    |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                    | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.       | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                    | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                          | false   |

### Retrieve Database {#retrievedatabase}

Retrieve a database object by ID. Returns database-level information including child data sources.

| Input       | Comments                                                                                                                                                                                                                                           | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Notion connection to use.                                                                                                                                                                                                                      |         |
| Database ID | The unique identifier of the database. For single-source databases, this is also the data source ID. Find this in the Notion URL or database settings menu. See [Notion API Database Reference](https://developers.notion.com/reference/database). |         |

### Retrieve Data Source {#retrievedatasource}

Retrieve a data source object containing structural information about columns and configuration.

| Input          | Comments                                                                                                                                                                                   | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Notion connection to use.                                                                                                                                                              |         |
| Data Source ID | The unique identifier of the data source. Find this in the Notion URL or database settings menu. See [Notion API Data Sources](https://developers.notion.com/docs/working-with-databases). |         |

### Update Database {#updatedupdatedatabase}

Update database-level attributes such as title, icon, cover, and inline status. To update data source properties, use the Update Data Source action.

| Input       | Comments                                                                                                                                                                                                                                           | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Notion connection to use.                                                                                                                                                                                                                      |         |
| Database ID | The unique identifier of the database. For single-source databases, this is also the data source ID. Find this in the Notion URL or database settings menu. See [Notion API Database Reference](https://developers.notion.com/reference/database). |         |
| Parent      | If provided, the parent of the database will be changed to the specified page ID or workspace.                                                                                                                                                     |         |
| Title       | The title of the database as it appears in Notion, formatted as a rich text array.                                                                                                                                                                 |         |
| Is Inline   | Whether the database should be displayed inline in the parent page. If not provided, the inline status will not be updated.                                                                                                                        |         |
| Icon        | The icon of the new page. Either an [emoji object](https://developers.notion.com/reference/emoji-object) or an [external file object](https://developers.notion.com/reference/file-object).                                                        |         |
| Cover Image | The cover image of the new page, represented as a [file object](https://developers.notion.com/reference/file-object).                                                                                                                              |         |

### Update Data Source {#updatedatasource}

Update a data source object including its properties (schema), title, description, and trash status.

| Input          | Comments                                                                                                                                                                                    | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Notion connection to use.                                                                                                                                                               |         |
| Data Source ID | The unique identifier of the data source. Find this in the Notion URL or database settings menu. See [Notion API Data Sources](https://developers.notion.com/docs/working-with-databases).  |         |
| Properties     | Property schema of the data source. The keys are the names of properties as they appear in Notion.                                                                                          |         |
| Title          | The title of the database as it appears in Notion, formatted as a rich text array.                                                                                                          |         |
| Icon           | The icon of the new page. Either an [emoji object](https://developers.notion.com/reference/emoji-object) or an [external file object](https://developers.notion.com/reference/file-object). |         |
| Database ID    | If provided, the parent of the data source will be changed to the specified database ID.                                                                                                    |         |
