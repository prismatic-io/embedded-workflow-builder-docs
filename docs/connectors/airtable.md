---
title: Airtable Connector
sidebar_label: Airtable
description: Manage records, tables, and bases in Airtable.
---

![Airtable](./assets/airtable.png#connector-icon)
Manage records, tables, and bases in Airtable.

## Connections

### API Key and Base ID (Deprecated) {#apikey}

Authenticate requests to Airtable using an API key and base ID. This connection is deprecated as of February 1, 2024.

| Input            | Comments                                                                                                        | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Airtable Base ID | Visit https://airtable.com/api and select your workspace. The ID of your base will be printed for you in green. |         |
| API Key          | You can generate an API key from https://airtable.com/account.                                                  |         |

### OAuth 2.0 {#oauth}

Authenticate requests to Airtable using OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default                                                                                                                                     |
| ------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. | data.records:read data.records:write data.recordComments:read data.recordComments:write schema.bases:read schema.bases:write webhook:manage |
| Client ID     | Provide the Client ID you received from https://airtable.com/create/oauth.          |                                                                                                                                             |
| Client Secret | Provide the Client Secret you received from https://airtable.com/create/oauth.      |                                                                                                                                             |

### Personal Access Token {#personalaccesstoken}

Authenticate requests to Airtable using a personal access token.

| Input   | Comments                                                            | Default |
| ------- | ------------------------------------------------------------------- | ------- |
| API Key | You can generate an API key from https://airtable.com/create/tokens |         |

## Triggers

### Base Change Notifications {#basechanges}

Receive base change notifications from Airtable. Automatically creates and manages a webhook subscription when the instance is deployed, and removes the subscription when the instance is deleted.

| Input               | Comments                                                                                                         | Default                    |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Connection          | The Airtable connection to use.                                                                                  |                            |
| Base ID             | The ID of the base to interact with.                                                                             |                            |
| Data Types          | Types of changes to monitor.                                                                                     | <code>["tableData"]</code> |
| Record Change Scope | Optional table ID or view ID to limit webhook to specific table/view. Leave empty to monitor all tables in base. |                            |

### New and Updated Records {#pollchangestrigger}

Checks an Airtable table for new and updated records on a configured schedule, using `LAST_MODIFIED_TIME()` as the server-side filter. Records are partitioned by `createdTime` versus `lastPolledAt`: records whose `createdTime` is after `lastPolledAt` go to the `created` bucket, while older records modified since `lastPolledAt` go to the `updated` bucket.

| Input                     | Comments                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The Airtable connection to use.                                                                            |         |
| Base ID                   | The ID of the base containing the table to poll.                                                           |         |
| Table Name                | The name of the table to access.                                                                           |         |
| View                      | Optional view (name or ID) to scope the poll to. When set, only records in that view are considered.       |         |
| Additional Filter Formula | Optional Airtable formula combined (AND) with the modification-time filter applied by the trigger.         |         |
| Show New Records          | When true, records with a `createdTime` after the last poll are included in the trigger results.           | true    |
| Show Updated Records      | When true, records modified after the last poll (but created earlier) are included in the trigger results. | true    |

### Webhook {#webhook}

Receive and validate webhook requests from Airtable for manually configured webhook subscriptions.

## Actions

### Create Record {#createrecord}

Create a new record in the specified table.

| Input          | Comments                                                                                                                                                             | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Airtable connection to use.                                                                                                                                      |         |
| Base ID        | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection.                  |         |
| Table Name     | The name of the table to access.                                                                                                                                     |         |
| Record Fields  | The key-value pairs to set on the record. Each key maps to a column name in the table.                                                                               |         |
| Dynamic Fields | A JSON array of key-value pairs that can be configured at deploy time with a key-value config variable. When provided, the default 'Record Fields' input is ignored. |         |

### Create Webhook {#createwebhook}

Create a new webhook subscription for a base.

| Input            | Comments                                                                                                                                            | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Airtable connection to use.                                                                                                                     |         |
| Base ID          | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |
| Notification URL | The URL that receives notification pings when the webhook fires.                                                                                    |         |
| Specification    | A JSON object describing the types of changes the webhook listens for.                                                                              |         |

### Delete Record {#deleterecord}

Delete a record from the specified table.

| Input      | Comments                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Airtable connection to use.                                                                                                                     |         |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |
| Table Name | The name of the table to access.                                                                                                                    |         |
| Record ID  | The unique identifier for the record. Functions as the primary key for the row in the table.                                                        |         |

### Delete Webhook {#deletewebhook}

Delete a webhook subscription from a base.

| Input      | Comments                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Airtable connection to use.                                                                                                                     |         |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |
| Webhook ID | The unique identifier for the webhook.                                                                                                              |         |

### Get Base Schema {#getbaseschema}

Retrieve the schema of all tables within a base.

| Input      | Comments                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Airtable connection to use.                                                                                                                     |         |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |

### Get Current User {#getcurrentuser}

Retrieve the user ID and OAuth scopes for the current user.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Airtable connection to use. |         |

### Get Record {#getrecord}

Retrieve a record by ID from the specified table.

| Input      | Comments                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Airtable connection to use.                                                                                                                     |         |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |
| Table Name | The name of the table to access.                                                                                                                    |         |
| Record ID  | The unique identifier for the record. Functions as the primary key for the row in the table.                                                        |         |

### List Bases {#listbases}

List all bases within the Airtable account.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Airtable connection to use. |         |

### List Records {#listrecords}

List all records within the specified table.

| Input             | Comments                                                                                                                                            | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Airtable connection to use.                                                                                                                     |         |
| Base ID           | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |
| Table Name        | The name of the table to access.                                                                                                                    |         |
| View              | The name or ID of a view in the table. When set, only records in that view are returned, sorted in the order defined by the view.                   |         |
| Fields            | The names (or IDs) of the fields to return. When omitted, all fields are returned.                                                                  |         |
| Filter By Formula | An Airtable formula used to limit results to records matching specific criteria.                                                                    |         |

### List Webhooks {#listwebhooks}

List all webhook subscriptions registered for a base.

| Input      | Comments                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Airtable connection to use.                                                                                                                     |         |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to Airtable.

| Input                   | Comments                                                                                                                                                                                                                                                                                            | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Airtable connection to use.                                                                                                                                                                                                                                                                     |         |
| URL                     | The request path only (e.g., `/v0/meta/bases/{BASE_ID}/tables`). The base URL [https://api.airtable.com](https://api.airtable.com) is already included. For example, to call `https://api.airtable.com/v0/meta/bases/{BASE_ID}/tables`, enter only `/v0/meta/bases/{BASE_ID}/tables` in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                             |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                           |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                    |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                 |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                         |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                            | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                 |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                 | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                    | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                 | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                       | false   |

### Refresh Webhook {#refreshwebhook}

Extend the expiration of an existing webhook subscription.

| Input      | Comments                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Airtable connection to use.                                                                                                                     |         |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |
| Webhook ID | The unique identifier for the webhook.                                                                                                              |         |

### Update Record {#updaterecord}

Update the field values of a record in the specified table.

| Input          | Comments                                                                                                                                                             | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Airtable connection to use.                                                                                                                                      |         |
| Base ID        | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection.                  |         |
| Table Name     | The name of the table to access.                                                                                                                                     |         |
| Record ID      | The unique identifier for the record. Functions as the primary key for the row in the table.                                                                         |         |
| Record Fields  | The key-value pairs to set on the record. Each key maps to a column name in the table.                                                                               |         |
| Dynamic Fields | A JSON array of key-value pairs that can be configured at deploy time with a key-value config variable. When provided, the default 'Record Fields' input is ignored. |         |
