---
title: Zoho Connector
sidebar_label: Zoho
description: Manage records, users, and more in your Zoho CRM and Books apps
---

![Zoho](./assets/zoho.png#connector-icon)
Manage records, users, and more in your Zoho CRM and Books apps

## Connections

### OAuth 2.0

OAuth 2.0 Connection

To make API requests of Zoho CRM or Zoho Books on behalf of your customers you need to create a Client using the [Zoho Developer Console](https://api-console.zoho.com/).

- Log in to the [Zoho Developer Console](https://api-console.zoho.com/)
- Click **ADD CLIENT**
- Choose `Server-based Applications` as the type of client
- Fill out the Client Name and Homepage URL fields with the relevant details
- Add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` under **Authorized Redirect URIs**
- Note the Client ID and Client Secret values, as these will be important when using the Zoho Connection as part of your Integration

For more information please see the [Zoho documentation](https://www.zoho.com/crm/developer/docs/api/v3/register-client.html) for creating a new Client.

#### Zoho in Multiple Regions

Zoho offers data centers in various locations:
If you develop an integration for users in a single region, you can set the [Region URL](https://accounts.zoho.com/oauth/serverinfo) to a specified region.
If you plan to deploy your integration to users in multiple regions, be sure that your app is set up to support multiple data centers.
Then, configure your connection's **Region URL** to be visible to customer deployers, so they can update those values to the region they use.

<Screenshot
  filename="components/zoho/visible.png"
  maxWidth="500px"
/>

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                     | Default                                                                                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Region URL    | The [URL](https://accounts.zoho.com/oauth/serverinfo) of the Zoho region you want to connect to.                                                                                                                             |                                                                                                                                                                  |
| Scopes        | Space-separated OAuth 2.0 permission scopes for the Zoho API. Can combine [Zoho CRM](https://www.zoho.com/crm/developer/docs/api/v8/scopes.html) and [Zoho Books](https://www.zoho.com/books/api/v3/oauth/#overview) scopes. | ZohoCRM.coql.READ ZohoCRM.notifications.ALL ZohoCRM.users.ALL ZohoCRM.org.ALL ZohoCRM.settings.ALL ZohoCRM.modules.ALL ZohoCRM.bulk.ALL ZohoBooks.fullaccess.all |
| Client ID     | Client Identifier of your app for the Zoho API                                                                                                                                                                               |                                                                                                                                                                  |
| Client Secret | Client Secret of your app for the Zoho API                                                                                                                                                                                   |                                                                                                                                                                  |

### Zoho OAuth 2.0 (Deprecated)

Zoho OAuth 2.0 Connection (Deprecated)

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                    | Comments                                                                                                                                                                                                                     | Default                                                                                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL            | The OAuth 2.0 Authorization URL for your Zoho region                                                                                                                                                                         |                                                                                                                                                                  |
| Token URL                | The OAuth 2.0 Token URL for your Zoho region                                                                                                                                                                                 |                                                                                                                                                                  |
| Scopes                   | Space-separated OAuth 2.0 permission scopes for the Zoho API. Can combine [Zoho CRM](https://www.zoho.com/crm/developer/docs/api/v8/scopes.html) and [Zoho Books](https://www.zoho.com/books/api/v3/oauth/#overview) scopes. | ZohoCRM.coql.READ ZohoCRM.notifications.ALL ZohoCRM.users.ALL ZohoCRM.org.ALL ZohoCRM.settings.ALL ZohoCRM.modules.ALL ZohoCRM.bulk.ALL ZohoBooks.fullaccess.all |
| Refresh Token Revoke URL | The OAuth 2.0 Token Revocation URL for your Zoho region                                                                                                                                                                      |                                                                                                                                                                  |
| Client ID                | Client Identifier of your app for the Zoho API                                                                                                                                                                               |                                                                                                                                                                  |
| Client Secret            | Client Secret of your app for the Zoho API                                                                                                                                                                                   |                                                                                                                                                                  |

## Actions

### Books - Create Record

Create a Zoho Books Record

| Input              | Comments                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                               |         |
| Record Type        | The type of record to operate on                                                                              |         |
| Parent Record Type | The type of record to operate on                                                                              |         |
| Parent Record Id   | Id that identifies a specific parent record under which other records are grouped                             |         |
| Dynamic Fields     | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable. |         |
| Values             | The names of the fields and their values to use when creating/updating a record                               |         |
| Debug Request      | Enabling this flag will log out the current request.                                                          | false   |

### Books - Get Record

Get a single Zoho Books Record

| Input              | Comments                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                   |         |
| Record Type        | The type of record to operate on                                                  |         |
| Record ID          | ID that identifies a specific record                                              |         |
| Parent Record Type | The type of record to operate on                                                  |         |
| Parent Record Id   | Id that identifies a specific parent record under which other records are grouped |         |
| Debug Request      | Enabling this flag will log out the current request.                              | false   |

### Books - Get Records

Get a collection of Zoho Books Records

| Input              | Comments                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                   |         |
| Record Type        | The type of record to operate on                                                  |         |
| Parent Record Type | The type of record to operate on                                                  |         |
| Parent Record Id   | Id that identifies a specific parent record under which other records are grouped |         |
| Search Fields      | The names and values of the fields to use for searching                           |         |
| Page               | The page number to start at                                                       |         |
| Per Page           | The records to fetch per page                                                     | 200     |
| Debug Request      | Enabling this flag will log out the current request.                              | false   |

### Books - Raw Request

Send raw HTTP request to Zoho Books

| Input                   | Comments                                                                                                                                                                                                                                        | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                 |         |
| URL                     | Input the path only (/organizations), The base URL is already included (https://books.zoho.{api_domain}/api/v3). For example, to connect to https://books.zoho.{api_domain}/api/v3/organizations, only /organizations is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                         |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                       |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                            |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                          |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                             |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                     |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                        | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                             |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                            | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                             | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                             | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                   | false   |

### Books - Remove Record

Remove a Zoho Books Record

| Input              | Comments                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                   |         |
| Record Type        | The type of record to operate on                                                  |         |
| Record ID          | ID that identifies a specific record                                              |         |
| Parent Record Type | The type of record to operate on                                                  |         |
| Parent Record Id   | Id that identifies a specific parent record under which other records are grouped |         |
| Debug Request      | Enabling this flag will log out the current request.                              | false   |

### Books - Update Record

Update a Zoho Books Record

| Input              | Comments                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                               |         |
| Record Type        | The type of record to operate on                                                                              |         |
| Record ID          | ID that identifies a specific record                                                                          |         |
| Parent Record Type | The type of record to operate on                                                                              |         |
| Parent Record Id   | Id that identifies a specific parent record under which other records are grouped                             |         |
| Dynamic Fields     | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable. |         |
| Values             | The names of the fields and their values to use when creating/updating a record                               |         |
| Debug Request      | Enabling this flag will log out the current request.                                                          | false   |

### CRM - Add attachment

Add an attachment to a Zoho CRM record (Lead, etc).

| Input         | Comments                                                     | Default |
| ------------- | ------------------------------------------------------------ | ------- |
| Connection    |                                                              |         |
| Record Type   | Type of record to attach a file to                           | Leads   |
| Record ID     | ID that identifies a specific record                         |         |
| File          | The file to upload - either string contents or a binary file |         |
| File Name     | The name of the file to upload                               |         |
| Debug Request | Enabling this flag will log out the current request.         | false   |

### CRM - COQL Query

Run a COQL Query for Zoho CRM

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Query         | COQL Query to execute                                |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### CRM - Create Record

Create a Zoho CRM Record

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                               |         |
| Record Type    | The type of record to operate on                                                                              |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |
| Debug Request  | Enabling this flag will log out the current request.                                                          | false   |

### CRM - Get Record

Get a single Zoho CRM Record

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Record Type   | The type of record to operate on                     |         |
| Record ID     | ID that identifies a specific record                 |         |
| Fields        | The names of the fields to retrieve                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### CRM - Get Records

Get a collection of Zoho CRM Records

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Record Type   | The type of record to operate on                     |         |
| Fields        | The names of the fields to retrieve                  |         |
| Page          | The page number to start at                          |         |
| Per Page      | The records to fetch per page                        | 200     |
| Page Token    | Token used for pagination                            |         |
| Sort Order    | The order in which to sort the results               |         |
| Sort By       | The field to sort by                                 |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### CRM - Raw Request

Send raw HTTP request to Zoho CRM

| Input                   | Comments                                                                                                                                                                                                                                                                                                     | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                              |         |
| URL                     | Input the path only (/Leads/1234567890/actions/convert), The base URL is already included (https://www.zohoapis.{api_domain}/crm/v3). For example, to connect to https://www.zohoapis.{api_domain}/crm/v3/Leads/1234567890/actions/convert, only /Leads/1234567890/actions/convert is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                      |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                    |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                         |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                             |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                       |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                          |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                  |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                     | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                          |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                         | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                             | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                          | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                | false   |

### CRM - Remove Record

Remove a Zoho CRM Record

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Record Type   | The type of record to operate on                     |         |
| Record ID     | ID that identifies a specific record                 |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### CRM - Update Record

Update a Zoho CRM Record

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                               |         |
| Record Type    | The type of record to operate on                                                                              |         |
| Record ID      | ID that identifies a specific record                                                                          |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |
| Debug Request  | Enabling this flag will log out the current request.                                                          | false   |
