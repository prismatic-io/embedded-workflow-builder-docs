---
title: Airtable Connector
sidebar_label: Airtable
description: Manage records, tables and bases in Airtable
---

![Airtable](./assets/airtable.png#connector-icon)
Manage records, tables and bases in Airtable

## Connections

### API Key and Base ID (Deprecated)

Airtable API Key and Base ID. Will be deprecated on Feb 1, 2024

Airtable API keys will be [deprecated on Feb 1, 2024](https://support.airtable.com/docs/airtable-api-key-deprecation-notice).
Please elect to use OAuth 2.0 or personal access tokens instead.

| Input            | Comments                                                                                                        | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Airtable Base ID | Visit https://airtable.com/api and select your workspace. The ID of your base will be printed for you in green. |         |
| API Key          | You can generate an API key from https://airtable.com/account.                                                  |         |

### OAuth 2.0

Connect your Airtable account using OAuth 2.0

To create an OAuth 2.0 app in Airtable, first log in to Airtable and then visit [airtable.com/create/oauth](https://airtable.com/create/oauth).

Register a new OAuth integration, and enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as the OAuth redirect URL.

Under **Scopes**, select all scopes that you'll need.
Note which scopes you selected, along with the **Client ID** and **Client secret** that Airtable provides you.
Enter scopes, client ID and client secret into the config wizard designer.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default                                                                                                                                     |
| ------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. | data.records:read data.records:write data.recordComments:read data.recordComments:write schema.bases:read schema.bases:write webhook:manage |
| Client ID     | Provide the Client ID you received from https://airtable.com/create/oauth.          |                                                                                                                                             |
| Client Secret | Provide the Client Secret you received from https://airtable.com/create/oauth.      |                                                                                                                                             |

### Personal Access Token

Connect your Airtable account using a personal access token

A **personal access token** can be used for testing an Airtable integration.
You can create a personal access token at [airtable.com/create/tokens](https://airtable.com/create/tokens).

| Input   | Comments                                                            | Default |
| ------- | ------------------------------------------------------------------- | ------- |
| API Key | You can generate an API key from https://airtable.com/create/tokens |         |

## Triggers

### Webhook

Receive and validate webhook requests from Airtable for webhooks you configure.

## Actions

### Create Record

Create a new record in the given table

| Input          | Comments                                                                                                                                                                                                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Base ID        | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection.                                                          |         |
| Table Name     | Provide the name of the table you would like to access.                                                                                                                                                      |         |
| Record Fields  | A record is the base equivalent of a row in a spreadsheet.                                                                                                                                                   |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. Please note that if this input is used, then the default 'Record Fields' inputwill be ignored. |         |
| Connection     |                                                                                                                                                                                                              |         |

### Create Webhook

Create a new webhook for a base

| Input            | Comments                                                                                                                                            | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Base ID          | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |
| Connection       |                                                                                                                                                     |         |
| Notification URL | An optional URL that can receive notification pings.                                                                                                |         |
| Specification    | A JSON object that describe the types of changes the webhook is interested in.                                                                      |         |

### Delete Record

Delete a record inside of the given table

| Input      | Comments                                                                                                                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection.                                    |         |
| Table Name | Provide the name of the table you would like to access.                                                                                                                                |         |
| Record ID  | Within Airtable, each record has a unique identifier known as a Record ID. If you are familiar with Entity-Relationship Diagrams or ERDs, then the record id would be the primary key. |         |
| Connection |                                                                                                                                                                                        |         |

### Delete Webhook

Delete a webhook

| Input      | Comments                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |
| Webhook ID | The ID of the webhook to be deleted.                                                                                                                |         |
| Connection |                                                                                                                                                     |         |

### Get Base Schema

Get all tables schema within a base

| Input      | Comments                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                     |         |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |

### Get Current User

Get user ID and OAuth scopes for the current user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Record

Retrieve a record by ID from the given table

| Input      | Comments                                                                                                                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection.                                    |         |
| Table Name | Provide the name of the table you would like to access.                                                                                                                                |         |
| Record ID  | Within Airtable, each record has a unique identifier known as a Record ID. If you are familiar with Entity-Relationship Diagrams or ERDs, then the record id would be the primary key. |         |
| Connection |                                                                                                                                                                                        |         |

### List Bases

List all bases within the Airtable account

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Records

List all records inside of the given table

| Input             | Comments                                                                                                                                            | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Base ID           | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |
| Table Name        | Provide the name of the table you would like to access.                                                                                             |         |
| Connection        |                                                                                                                                                     |         |
| View              | The name or ID of a view in your table. If set, only records in that view will be returned, sorted in the way that the view is sorted.              |         |
| Fields            | Enter the names (or IDs) of the fields you would like returned. If you omit this list, all fields will be returned.                                 |         |
| Filter By Formula | Filter results to only records that meet some particular criteria.                                                                                  |         |

### List Webhooks

List all webhooks registered for a base

| Input      | Comments                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |
| Connection |                                                                                                                                                     |         |

### Raw Request

Send raw HTTP request to Airtable

| Input                   | Comments                                                                                                                                                                                                                                                               | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                        |         |
| URL                     | Input the path only (/v0/meta/bases/{BASE_ID}/tables), The base URL is already included (https://api.airtable.com). For example, to connect to https://api.airtable.com/v0/meta/bases/{BASE_ID}/tables, only /v0/meta/bases/{BASE_ID}/tables is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                              |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                   |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                       |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                 |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                    |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                            |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                               | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                    |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                    | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                       | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                    | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                          | false   |

### Refresh Webhook

Extend the life of a webhook

| Input      | Comments                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Base ID    | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection. |         |
| Webhook ID | The ID of the webhook to be deleted.                                                                                                                |         |
| Connection |                                                                                                                                                     |         |

### Update Record

Update a record's content inside a given table

| Input          | Comments                                                                                                                                                                                                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Base ID        | The ID of the base to interact with. Required if you use an OAuth connection, and optional if you specify base ID with a legacy API Key connection.                                                          |         |
| Table Name     | Provide the name of the table you would like to access.                                                                                                                                                      |         |
| Record ID      | Within Airtable, each record has a unique identifier known as a Record ID. If you are familiar with Entity-Relationship Diagrams or ERDs, then the record id would be the primary key.                       |         |
| Record Fields  | A record is the base equivalent of a row in a spreadsheet.                                                                                                                                                   |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. Please note that if this input is used, then the default 'Record Fields' inputwill be ignored. |         |
| Connection     |                                                                                                                                                                                                              |         |
