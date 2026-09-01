---
title: Odoo Connector
sidebar_label: Odoo
description: Manage records in an Odoo database.
---

![Odoo](./assets/odoo.png#connector-icon)
[Odoo](https://www.odoo.com/) is a suite of open source business apps that include CRM, eCommerce, accounting, inventory, project management, etc.
This component allows querying and managing records in an Odoo database.

## API Documentation

This component was built using the [Odoo External API Documentation](https://www.odoo.com/documentation/19.0/developer/reference/external_api.html), currently utilizing the JSON-2 API on Odoo 19.0.

## Connections

### API Key {#odooapikey}

Authenticate requests to Odoo using an API key.

To authenticate with Odoo, an API key is required. This component calls Odoo's JSON-2 HTTP API and requires Odoo 19.0 or later. Earlier versions, which only support the soon to be deprecated XML-RPC transport, are not supported.

#### Prerequisites

- An Odoo 19.0 or later instance (Odoo Online, Odoo.sh, or self-hosted)
- An Odoo user account with permissions for the records the integration will manage
- Developer mode enabled in Odoo (required to access the API Keys interface)

#### Setup Steps

1. Log in to the Odoo instance
2. Click the user avatar in the top-right corner and select **My Profile**
3. Open the **Account Security** tab
4. Click **New API Key** and provide a descriptive name and expiration
5. Copy the generated API key immediately (it is shown only once)

For more details, refer to the [Odoo external API documentation](https://www.odoo.com/documentation/19.0/developer/reference/external_api.html).

:::note[Service Account Recommended]
Generate the API key from a dedicated service-account user (not a specific employee's account) so the integration is not tied to an individual's access.
:::

#### Configure the Connection

Create a connection of type **API Key** and configure the following fields:

- **Odoo Base URL**: Enter the URL used to log in to Odoo, for example `https://example-company.odoo.com`. Omit any trailing slash.
- **Server Port**: Leave blank for default HTTP (80) or HTTPS (443). Set only when a self-hosted Odoo instance listens on a non-standard port.
- **Odoo Database Name**: Click the user avatar in the top-right within Odoo and select **My Databases** to find the database name.
- **API Key**: Enter the API key copied in the previous section.

| Input              | Comments                                                                                                                                                 | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Odoo Base URL      | The URL used to log in to the Odoo instance.                                                                                                             |         |
| Server Port        | The port to connect on. Leave blank to use the default HTTP (80) or HTTPS (443) port.                                                                    |         |
| Odoo Database Name | The name of the Odoo database to connect to. Found in Odoo by clicking the user icon at the top-right and selecting 'My Databases'.                      |         |
| API Key            | The API key used to authenticate requests. In Odoo, open the profile menu, then Account Security, and create a new API Key. Requires Odoo 19.0 or later. |         |

### Basic Authentication (Deprecated) {#odoobasicauth}

Authenticate using a username and password against Odoo's XML-RPC API. Maintained for backwards compatibility with existing integrations. Odoo will drop XML-RPC support in 19.1 (mid-2026); use the API Key connection for new integrations.

The **Basic Authentication (Deprecated)** connection authenticates against Odoo's XML-RPC API with a username and password. It is maintained for backwards compatibility with integrations built against earlier versions of this component.

:::warning[Deprecated]
Odoo will drop XML-RPC support in 19.1 (mid-2026). Migrate existing integrations to the **API Key** connection before that release. New integrations should use the **API Key** connection instead.
:::

#### Prerequisites

- An Odoo instance that still exposes the XML-RPC endpoint
- An Odoo user account with permissions for the records the integration will manage

#### Configure the Connection

Create a connection of type **Basic Authentication (Deprecated)** and configure the following fields:

- **Odoo Base URL**: Enter the URL used to log in to Odoo, for example `https://example-company.odoo.com`. Omit any trailing slash.
- **Server Port**: Leave blank for default HTTP (80) or HTTPS (443). Set only when a self-hosted Odoo instance listens on a non-standard port.
- **Odoo Database Name**: Click the user avatar in the top-right within Odoo and select **My Databases** to find the database name.
- **Username**: The username (typically the email address) used to log in to Odoo.
- **Password or API Key**: The user's password, or an API key generated under **Account Security → New API Key**.

| Input               | Comments                                                                                                                            | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Odoo Base URL       | The URL used to log in to the Odoo instance.                                                                                        |         |
| Server Port         | The port to connect on. Leave blank to use the default HTTP (80) or HTTPS (443) port.                                               |         |
| Odoo Database Name  | The name of the Odoo database to connect to. Found in Odoo by clicking the user icon at the top-right and selecting 'My Databases'. |         |
| Username            | The username used to log in to the Odoo instance.                                                                                   |         |
| Password or API Key | The password or API key used to authenticate the user against the Odoo XML-RPC API.                                                 |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Polls an Odoo model on a configured schedule for records whose `write_date` is at or after the last poll. Records whose `create_date` is also after the last poll go to the `created` bucket; older records modified since the last poll go to `updated`.

| Input                | Comments                                                                                                                      | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Odoo connection to use.                                                                                                   |         |
| Model                | The type of record to query. Use the 'List Models' action for a list of available models.                                     |         |
| Show New Records     | When true, records whose `create_date` falls after the last poll are emitted in the `created` bucket.                         | true    |
| Show Updated Records | When true, records whose `write_date` falls after the last poll but were created earlier are emitted in the `updated` bucket. | true    |

## Actions

### Create Record {#createrecord}

Create a new record of a given type.

| Input       | Comments                                                                                                          | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Odoo connection to use.                                                                                       |         |
| Model       | The type of record to query. Use the 'List Models' action for a list of available models.                         |         |
| Parameters  | The field names and values to set on the record. Must be a JSON object keyed by Odoo field name.                  |         |
| External ID | A unique identifier that maps this record to its counterpart in an external system. Use the 'module.name' format. |         |

### Delete Record By ID {#deleterecordbyid}

Delete a record by its numerical ID.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | The Odoo connection to use.                                                               |         |
| Model      | The type of record to query. Use the 'List Models' action for a list of available models. |         |
| Record ID  | The numeric identifier of the target record assigned by Odoo.                             |         |

### Get Record by External ID {#getrecordbyexternalid}

Get a record by its external ID.

| Input       | Comments                                                                                                          | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Odoo connection to use.                                                                                       |         |
| External ID | A unique identifier that maps this record to its counterpart in an external system. Use the 'module.name' format. |         |

### Get Record By ID {#getrecordbyid}

Fetch a record by its numerical ID.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | The Odoo connection to use.                                                               |         |
| Model      | The type of record to query. Use the 'List Models' action for a list of available models. |         |
| Record ID  | The numeric identifier of the target record assigned by Odoo.                             |         |

### List Model Fields {#listmodelfields}

List all fields for a given model.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | The Odoo connection to use.                                                               |         |
| Model      | The type of record to query. Use the 'List Models' action for a list of available models. |         |

### List Models {#listmodels}

Fetch a list of models installed in the Odoo database.

| Input        | Comments                                                                                               | Default |
| ------------ | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection   | The Odoo connection to use.                                                                            |         |
| Fetch All    | When true, automatically fetches all pages of records. Overrides the Limit and Offset inputs.          | false   |
| Pagination   | Page size and starting offset for paging through results.                                              |         |
| Limit        | The maximum number of records to return per page.                                                      |         |
| Offset       | The number of records to skip before starting the page (0-based).                                      |         |
| Name Search  | Filter results to entries whose name contains this case-insensitive search term.                       |         |
| Model Search | Filter results to entries whose technical model identifier contains this case-insensitive search term. |         |

### List Records {#listrecords}

Fetch a list of records of a given type.

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection | The Odoo connection to use.                                                                   |         |
| Model      | The type of record to query. Use the 'List Models' action for a list of available models.     |         |
| Fetch All  | When true, automatically fetches all pages of records. Overrides the Limit and Offset inputs. | false   |
| Pagination | Page size and starting offset for paging through results.                                     |         |
| Limit      | The maximum number of records to return per page.                                             |         |
| Offset     | The number of records to skip before starting the page (0-based).                             |         |

### Raw Request (API Key) {#rawhttprequest}

Send a raw HTTP request to the Odoo JSON-2 API. Requires the API Key connection.

| Input                   | Comments                                                                                                                                                                                                                                                                 | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Odoo connection to use.                                                                                                                                                                                                                                              |         |
| URL                     | The path portion of the URL to call. The connection's base URL (for example, `https://yourdomain.odoo.com`) is prepended automatically. For example, to call `https://yourdomain.odoo.com/json/2/res.partner/search_read`, enter only `/json/2/res.partner/search_read`. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                  |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                     |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                         |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                   |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                      |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                              |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                 | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                      |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                      | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                         | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                      | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                            | false   |

### Raw Request (Basic Auth) {#rawrequest}

Issue any execute_kw action against the Odoo XML-RPC API. Requires the Basic Authentication (Deprecated) connection.

| Input      | Comments                                                                                                              | Default                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection | The Odoo connection to use.                                                                                           |                         |
| Model      | The type of record to query. Use the 'List Models' action for a list of available models.                             |                         |
| Method     | The Odoo model method to invoke via `execute_kw` (for example, `search_read`, `create`, `write`).                     |                         |
| Parameters | A JSON array of positional arguments to pass to `execute_kw`. See the Odoo XML-RPC documentation for argument shapes. | <code>[["read"]]</code> |

### Set External ID {#setexternalid}

Add an external ID to a record that does not have one.

| Input       | Comments                                                                                                          | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Odoo connection to use.                                                                                       |         |
| Model       | The type of record to query. Use the 'List Models' action for a list of available models.                         |         |
| Record ID   | The numeric identifier of the target record assigned by Odoo.                                                     |         |
| External ID | A unique identifier that maps this record to its counterpart in an external system. Use the 'module.name' format. |         |

### Update Record {#updaterecord}

Update an existing record of a given type.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Odoo connection to use.                                                                      |         |
| Model      | The type of record to query. Use the 'List Models' action for a list of available models.        |         |
| Record ID  | The numeric identifier of the target record assigned by Odoo.                                    |         |
| Parameters | The field names and values to set on the record. Must be a JSON object keyed by Odoo field name. |         |
