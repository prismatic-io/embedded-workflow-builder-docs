---
title: Monday Connector
sidebar_label: Monday
description: Manage boards, tasks and workflows within Monday.
---

![Monday](./assets/monday.png#connector-icon)
Manage boards, tasks and workflows within Monday.

## Connections

### API Key

API Key connection

For testing purposes, you can use an **API key** to authenticate requests to the Monday GraphQL API.
You can configure a Monday Personal API token from your user admin settings.
For more information refer to the [Monday documentation](https://developer.monday.com/apps/docs/choosing-auth).
We recommend using OAuth when you deploy your integration to customers.

| Input   | Comments | Default |
| ------- | -------- | ------- |
| API Key | API Key  |         |

### OAuth 2.0

OAuth 2.0 connection

To configure OAuth 2.0 you will first need to [register a Monday app](https://developer.monday.com/apps/docs/oauth).
Ensure that the callback URL is added to the app in Monday.

Now you will need to add the Monday component's **OAuth 2.0** connection to your integration and configure it with:

- For **Client ID** and **Client Secret** enter the values that you got from your Monday app.
- For **Scopes** refer to [Monday's OAuth 2.0 documentation](https://developer.monday.com/apps/docs/oauth#set-up-permission-scopes).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                           | Default                                                                                                                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scopes        | Space separated OAuth 2.0 permission scopes for Monday. See https://developer.monday.com/apps/docs/oauth#set-up-permission-scopes. | account:read assets:read boards:read boards:write me:read notifications:write tags:read teams:read updates:read updates:write users:read users:write webhooks:write workspaces:read workspaces:write |
| Client ID     | Client Identifier of your app for Monday                                                                                           |                                                                                                                                                                                                      |
| Client Secret | Client Secret of your app for Monday                                                                                               |                                                                                                                                                                                                      |

## Actions

### Archive Board

Delete the information and metadata of a board by Id

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Board ID   | Provide the unique identifier of the board |         |

### Create Board

Create a new board inside your Monday account

| Input        | Comments                                                               | Default |
| ------------ | ---------------------------------------------------------------------- | ------- |
| Connection   |                                                                        |         |
| Board Name   | Provide a string value for the name of the board.                      |         |
| Board Kind   | Provide a string value for the kind of board.                          |         |
| Folder ID    | Provide the unique identifier of the folder.                           |         |
| Workspace ID | Provide the unique identifier of the workspace.                        |         |
| Template ID  | Provide the unique identifier of the template that your board extends. |         |

### Generic GraphQL Request

Issue any GraphQL query or mutation with variables

| Input             | Comments                                                                                                    | Default                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Connection        |                                                                                                             |                                                           |
| Query or Mutation |                                                                                                             | <code>{<br />me {<br />id<br />email<br />}<br />}</code> |
| Variables         |                                                                                                             |                                                           |
| Variables Object  |                                                                                                             |                                                           |
| API Version       | Provide the version of the API you want to use. If none provided, the default 2025-07 version will be used. |                                                           |

### Get Board

Get the information and metadata of a board by ID

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Board ID   | Provide the unique identifier of the board |         |

### Get Items By Column Value

Fetch items that have a certain column value.

| Input         | Comments                                                                                                                                             | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                      |         |
| Board ID      | Provide the unique identifier of the board                                                                                                           |         |
| Column ID     | Provide the ID of the column. For possible values see https://developer.monday.com/api-reference/reference/column-types-reference#supported-columns. |         |
| Column Value  | The column's value to search items by                                                                                                                |         |
| Get All Items | If turned off, a maximum of 500 items will be returned.                                                                                              | false   |

### Get Items By Column Value (Deprecated)

Fetch items that have a certain column value. This version of the action is being deprecated. Please replace action with Get Items By Column Value.

| Input        | Comments                                                                                                                                             | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                      |         |
| Board ID     | Provide the unique identifier of the board                                                                                                           |         |
| Column ID    | Provide the ID of the column. For possible values see https://developer.monday.com/api-reference/reference/column-types-reference#supported-columns. |         |
| Column Value | The column's value to search items by                                                                                                                |         |

### List Boards

List all available boards in your Monday account

| Input        | Comments                                                                                                         | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                  |         |
| Result Limit | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 500. |         |
| Page Offset  | Provide an integer value for the page offset for the given object's results.                                     |         |
| Fetch All    | Turn on to fetch all items from the board. This will ignore the Result Limit and Page Offset inputs.             | false   |
