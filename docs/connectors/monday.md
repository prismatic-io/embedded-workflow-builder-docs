---
title: Monday Connector
sidebar_label: Monday
description: Manage boards, tasks and workflows within Monday.
---

![Monday](./assets/monday.png#connector-icon)
Manage boards, tasks and workflows within Monday.

## Connections

### API Key {#apikey}

Authenticate requests using an API key.

| Input   | Comments                                                                                           | Default |
| ------- | -------------------------------------------------------------------------------------------------- | ------- |
| API Key | The Monday.com API key used for authentication. Generate one from the Monday.com account settings. |         |

### OAuth 2.0 {#oauth}

Authenticate using OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                              | Default                                                                                                                                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Scopes        | Space-separated list of OAuth 2.0 permission scopes for Monday. See [Monday.com OAuth scopes](https://developer.monday.com/apps/docs/oauth#set-up-permission-scopes). | account:read assets:read boards:read boards:write me:read notifications:write tags:read teams:read updates:read updates:write users:read users:write webhooks:read webhooks:write workspaces:read workspaces:write |
| Client ID     | The Client ID from the Monday.com OAuth application credentials.                                                                                                      |                                                                                                                                                                                                                    |
| Client Secret | The Client Secret from the Monday.com OAuth application credentials.                                                                                                  |                                                                                                                                                                                                                    |

## Triggers

### New and Updated Items {#pollchangestrigger}

Polls a Monday.com board for items created or updated since the last execution, separated into new and updated buckets.

| Input                | Comments                                                                         | Default |
| -------------------- | -------------------------------------------------------------------------------- | ------- |
| Connection           | The Monday.com connection to use.                                                |         |
| Board ID             | The unique identifier for the Monday.com board that the action targets.          |         |
| Show New Records     | When true, newly created items are included in the trigger output.               | true    |
| Show Updated Records | When true, items updated since the last poll are included in the trigger output. | true    |

### Webhook {#webhook}

Receive webhook events from Monday. Automatically creates and manages webhook subscriptions on instance deploy and removes them on instance delete.

| Input          | Comments                                                                                                                                                                                                                                              | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Monday.com connection to use.                                                                                                                                                                                                                     |         |
| Board ID       | The unique identifier for the Monday.com board that the action targets.                                                                                                                                                                               |         |
| Event          | The type of board event to subscribe to.                                                                                                                                                                                                              |         |
| Config         | Optional event-specific configuration as a JSON object. For example, {"columnId": "status"} for change_specific_column_value events.                                                                                                                  |         |
| Signing Secret | The Signing Secret from the Monday.com app. When provided, webhook payloads are verified against this secret. See [Monday.com Authorization docs](https://developer.monday.com/apps/docs/integration-authorization#authorization-header) for details. |         |

## Actions

### Archive Board {#archiveboard}

Archives a board by ID.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Monday.com connection to use.                                       |         |
| Board ID   | The unique identifier for the Monday.com board that the action targets. |         |

### Create Board {#createboard}

Creates a new board in Monday.

| Input        | Comments                                                                                                                                                                        | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Monday.com connection to use.                                                                                                                                               |         |
| Board Name   | The display name of the Monday.com board to create.                                                                                                                             |         |
| Board Kind   | The visibility level of the board. Public boards are visible to all team members; private boards are restricted to invited members; shareable boards can be shared with guests. |         |
| Folder ID    | The unique identifier of the folder in which the board will be created.                                                                                                         |         |
| Workspace ID | The unique identifier of the workspace where the board will be created.                                                                                                         |         |
| Template ID  | The unique identifier of the Monday.com template the board is based on.                                                                                                         |         |

### Create Webhook {#createwebhook}

Creates a webhook subscription for a board event.

| Input       | Comments                                                                                                                             | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The Monday.com connection to use.                                                                                                    |         |
| Board ID    | The unique identifier for the Monday.com board that the action targets.                                                              |         |
| Webhook URL | The URL to receive webhook events. Must be a publicly accessible HTTPS endpoint (255 character limit).                               |         |
| Event       | The type of board event to subscribe to.                                                                                             |         |
| Config      | Optional event-specific configuration as a JSON object. For example, {"columnId": "status"} for change_specific_column_value events. |         |

### Delete Webhook {#deletewebhook}

Deletes an existing webhook subscription by ID.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Monday.com connection to use.                                       |         |
| Board ID   | The unique identifier for the Monday.com board that the action targets. |         |
| Webhook ID | The unique identifier of the Monday.com webhook.                        |         |

### Generic GraphQL Request {#genericrequest}

Issues any GraphQL query or mutation with variables.

| Input             | Comments                                                                                                     | Default                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| Connection        | The Monday.com connection to use.                                                                            |                                                           |
| Query or Mutation | The GraphQL query or mutation to execute against the Monday.com API.                                         | <code>{<br />me {<br />id<br />email<br />}<br />}</code> |
| Variables         | Key-value pairs of variables to pass to the GraphQL query or mutation. Use this for simple variable input.   |                                                           |
| Variables Object  | A JSON object of variables to pass to the GraphQL query or mutation. Use this for structured variable input. |                                                           |
| API Version       | The Monday.com API version to use. If not provided, the default 2026-01 version will be used.                |                                                           |

### Get Board {#getboard}

Gets the information and metadata of a board by ID.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Monday.com connection to use.                                       |         |
| Board ID   | The unique identifier for the Monday.com board that the action targets. |         |

### Get Items By Column Value {#getitemsbycolumnvaluenew}

Fetches items that have a certain column value.

| Input         | Comments                                                                                                                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Monday.com connection to use.                                                                                                                                                                  |         |
| Board ID      | The unique identifier for the Monday.com board that the action targets.                                                                                                                            |         |
| Column ID     | The ID of the column to filter by. For possible values see the [Monday.com column types reference](https://developer.monday.com/api-reference/reference/column-types-reference#supported-columns). |         |
| Column Value  | The value to match against the specified column when searching for items.                                                                                                                          |         |
| Get All Items | When true, automatically fetches all pages of items matching the column value. When false, a maximum of 500 items will be returned.                                                                | false   |

### Get Items By Column Value (Deprecated) {#getitemsbycolumnvalue}

Fetches items that have a certain column value. This version of the action is deprecated. Please use Get Items By Column Value instead.

| Input        | Comments                                                                                                                                                                                           | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Monday.com connection to use.                                                                                                                                                                  |         |
| Board ID     | The unique identifier for the Monday.com board that the action targets.                                                                                                                            |         |
| Column ID    | The ID of the column to filter by. For possible values see the [Monday.com column types reference](https://developer.monday.com/api-reference/reference/column-types-reference#supported-columns). |         |
| Column Value | The value to match against the specified column when searching for items.                                                                                                                          |         |

### List Boards {#listboards}

Lists all available boards in the Monday account.

| Input        | Comments                                                                                                                 | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection   | The Monday.com connection to use.                                                                                        |         |
| Fetch All    | When true, automatically fetches all pages of results using pagination. Ignores the Result Limit and Page Offset inputs. | false   |
| Result Limit | The maximum number of results to return. Accepts a value from 1 to 500.                                                  |         |
| Page Offset  | The page number to retrieve from paginated results. Uses 1-based indexing.                                               |         |

### List Webhooks {#listwebhooks}

Lists all webhook subscriptions for a board.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Monday.com connection to use.                                       |         |
| Board ID   | The unique identifier for the Monday.com board that the action targets. |         |
