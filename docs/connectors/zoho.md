---
title: Zoho Connector
sidebar_label: Zoho
description: Manage records, contacts, and transactions in Zoho CRM and Books
---

![Zoho](./assets/zoho.png#connector-icon)
Manage records, contacts, and transactions in Zoho CRM and Books

## Connections

### OAuth 2.0

OAuth 2.0 Connection

To connect to Zoho CRM or Zoho Books, create a Client application in the [Zoho Developer Console](https://api-console.zoho.com/).

Zoho supports OAuth 2.0 authentication for both [Zoho CRM](https://www.zoho.com/crm/developer/docs/api/v3/oauth-overview.html) and [Zoho Books](https://www.zoho.com/books/api/v3/oauth/#overview) APIs. The same OAuth client can be configured to access multiple Zoho services by combining their scopes.

#### Prerequisites

- Access to the [Zoho Developer Console](https://api-console.zoho.com/)
- A Zoho account with appropriate permissions to create OAuth clients
- Knowledge of which Zoho region the account is hosted in (see [Zoho region information](https://accounts.zoho.com/oauth/serverinfo))

#### Setup Steps

1. Log in to the [Zoho Developer Console](https://api-console.zoho.com/)
2. Click **ADD CLIENT**
3. Select **Server-based Applications** as the client type
4. Configure the client application:
   - Enter a descriptive name in the **Client Name** field
   - Enter the application homepage URL in the **Homepage URL** field
   - Under **Authorized Redirect URIs**, add: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
5. Click **CREATE** to generate the client
6. Copy the **Client ID** and **Client Secret** values displayed on the confirmation page

For detailed information about creating OAuth clients, refer to the [Zoho OAuth client registration documentation](https://www.zoho.com/crm/developer/docs/api/v3/register-client.html).

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the Zoho Developer Console
- Select the appropriate **Region URL** for the Zoho account's data center location:
  - **United States**: `https://accounts.zoho.com`
  - **Europe**: `https://accounts.zoho.eu`
  - **India**: `https://accounts.zoho.in`
  - **Australia**: `https://accounts.zoho.com.au`
  - **Japan**: `https://accounts.zoho.jp`
  - **United Kingdom**: `https://accounts.zoho.uk`
  - **Canada**: `https://accounts.zohocloud.ca`
  - **United Arab Emirates**: `https://accounts.zoho.ae`
  - **Saudi Arabia**: `https://accounts.zoho.sa`

  Refer to [Zoho's server information page](https://accounts.zoho.com/oauth/serverinfo) to determine the correct region URL.

- Configure the **Scopes** field with the required permissions:
  - For Zoho CRM access, refer to the [Zoho CRM scopes documentation](https://www.zoho.com/crm/developer/docs/api/v8/scopes.html)
  - For Zoho Books access, refer to the [Zoho Books scopes documentation](https://www.zoho.com/books/api/v3/oauth/#overview)
  - Multiple scopes can be combined by separating them with spaces
  - Example for both CRM and Books access:
    ```
    ZohoCRM.modules.ALL ZohoCRM.settings.ALL ZohoBooks.fullaccess.all
    ```

:::note Multi Region Deployments
For integrations that will be deployed to users in multiple Zoho regions, configure the **Region URL** field to be visible to instance deployers. This allows end users to select their appropriate region during instance configuration.

To make the Region URL field visible to deployers, enable the field visibility in the connection configuration:

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
| Client ID     | Client Identifier of your app for the Zoho API. Generate this in the [Zoho API Console](https://api-console.zoho.com/).                                                                                                      |                                                                                                                                                                  |
| Client Secret | Client Secret of your app for the Zoho API. Generate this in the [Zoho API Console](https://api-console.zoho.com/).                                                                                                          |                                                                                                                                                                  |

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
| Client ID                | Client Identifier of your app for the Zoho API. Generate this in the [Zoho API Console](https://api-console.zoho.com/).                                                                                                      |                                                                                                                                                                  |
| Client Secret            | Client Secret of your app for the Zoho API. Generate this in the [Zoho API Console](https://api-console.zoho.com/).                                                                                                          |                                                                                                                                                                  |

## Triggers

### CRM Notifications

Receive CRM event notifications from Zoho CRM. Automatically creates and manages a notification channel subscription for selected event types when the instance is deployed, and removes the subscription when the instance is deleted.

| Input                        | Comments                                                                                           | Default |
| ---------------------------- | -------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The Zoho connection to use.                                                                        |         |
| Channel ID                   | User-defined unique identifier for the notification channel. Leave empty and we will generate one. |         |
| Events                       | Subscribed operations in format "{module}.{operation}". Operations: create, edit, delete, all.     |         |
| Token                        | Verification token (max 50 chars) sent in callbacks to verify notifications are from Zoho CRM.     |         |
| Channel Expiry               | ISO datetime for expiry. Maximum 1 week from now. Default is 1 hour.                               |         |
| Return Affected Field Values | When true, includes updated field values in the notification callback.                             | false   |
| Notify On Related Action     | When true, triggers notifications when associated record actions occur.                            | true    |
| Notification Condition       | Filter notifications by specific field changes. Provide field API names to watch.                  |         |

### New and Updated Books Contacts

Checks for new and updated contacts in Zoho Books on a configured schedule.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Zoho connection to use. |         |

### New and Updated CRM Contacts

Checks for new and updated contacts in Zoho CRM on a configured schedule.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Zoho connection to use. |         |

### New and Updated CRM Leads

Checks for new and updated leads in Zoho CRM on a configured schedule.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Zoho connection to use. |         |

## Actions

### Books - Create Record

Create a Zoho Books Record

| Input              | Comments                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Zoho connection to use.                                                                                   |         |
| Record Type        | The type of Books record to operate on. See [Zoho Books API](https://www.zoho.com/books/api/v3/) for details. |         |
| Parent Record Type | The type of Books record to operate on. See [Zoho Books API](https://www.zoho.com/books/api/v3/) for details. |         |
| Parent Record ID   | The unique identifier of the parent record under which other records are grouped.                             |         |
| Dynamic Fields     | Dynamic input fields that can be configured at deploy time using key-value config variables.                  |         |
| Values             | Key-value pairs representing field names and their values for creating or updating records.                   |         |

### Books - Get Record

Get a single Zoho Books Record

| Input              | Comments                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Zoho connection to use.                                                                                   |         |
| Record Type        | The type of Books record to operate on. See [Zoho Books API](https://www.zoho.com/books/api/v3/) for details. |         |
| Record ID          | The unique identifier of the record in Zoho.                                                                  |         |
| Parent Record Type | The type of Books record to operate on. See [Zoho Books API](https://www.zoho.com/books/api/v3/) for details. |         |
| Parent Record ID   | The unique identifier of the parent record under which other records are grouped.                             |         |

### Books - Get Records

Get a collection of Zoho Books Records

| Input              | Comments                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Zoho connection to use.                                                                                   |         |
| Record Type        | The type of Books record to operate on. See [Zoho Books API](https://www.zoho.com/books/api/v3/) for details. |         |
| Parent Record Type | The type of Books record to operate on. See [Zoho Books API](https://www.zoho.com/books/api/v3/) for details. |         |
| Parent Record ID   | The unique identifier of the parent record under which other records are grouped.                             |         |
| Search Fields      | Key-value pairs for filtering search results. Keys are field names, values are search criteria.               |         |
| Page               | The page number to start at. First page is 1.                                                                 | 1       |
| Per Page           | The number of records to fetch per page. Maximum is 200.                                                      | 200     |
| Fetch All          | When true, automatically fetches all pages of results using pagination.                                       | false   |

### Books - Raw Request

Send raw HTTP request to Zoho Books

| Input                   | Comments                                                                                                                                                                                                                                                | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Zoho connection to use.                                                                                                                                                                                                                             |         |
| URL                     | Input the path only (/organizations), The base URL is already included (https://www.zohoapis.{api_domain}/books/v3). For example, to connect to https://www.zohoapis.{api_domain}/books/v3/organizations, only /organizations is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                 |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                               |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                    |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                        |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                  |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                     |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                             |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                     |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                     | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                        | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                     | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                           | false   |

### Books - Remove Record

Remove a Zoho Books Record

| Input              | Comments                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Zoho connection to use.                                                                                   |         |
| Record Type        | The type of Books record to operate on. See [Zoho Books API](https://www.zoho.com/books/api/v3/) for details. |         |
| Record ID          | The unique identifier of the record in Zoho.                                                                  |         |
| Parent Record Type | The type of Books record to operate on. See [Zoho Books API](https://www.zoho.com/books/api/v3/) for details. |         |
| Parent Record ID   | The unique identifier of the parent record under which other records are grouped.                             |         |

### Books - Update Record

Update a Zoho Books Record

| Input              | Comments                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Zoho connection to use.                                                                                   |         |
| Record Type        | The type of Books record to operate on. See [Zoho Books API](https://www.zoho.com/books/api/v3/) for details. |         |
| Record ID          | The unique identifier of the record in Zoho.                                                                  |         |
| Parent Record Type | The type of Books record to operate on. See [Zoho Books API](https://www.zoho.com/books/api/v3/) for details. |         |
| Parent Record ID   | The unique identifier of the parent record under which other records are grouped.                             |         |
| Dynamic Fields     | Dynamic input fields that can be configured at deploy time using key-value config variables.                  |         |
| Values             | Key-value pairs representing field names and their values for creating or updating records.                   |         |

### CRM - Add attachment

Add an attachment to a Zoho CRM record (Lead, etc).

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Connection  | The Zoho connection to use.                                  |         |
| Record Type | Type of record to attach a file to                           | Leads   |
| Record ID   | The unique identifier of the record in Zoho.                 |         |
| File        | The file to upload - either string contents or a binary file |         |
| File Name   | The name of the file to upload, including extension.         |         |

### CRM - COQL Query

Run a COQL Query for Zoho CRM

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zoho connection to use.                                                                                                |         |
| Query      | COQL query to execute. See [Zoho COQL documentation](https://www.zoho.com/crm/developer/docs/api/v8/COQL.html) for syntax. |         |

### CRM - Create Record

Create a Zoho CRM Record

| Input          | Comments                                                                                                                                   | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Zoho connection to use.                                                                                                                |         |
| Record Type    | The type of CRM record to operate on. See [Zoho CRM Modules](https://www.zoho.com/crm/developer/docs/api/v8/modules-api.html) for details. |         |
| Dynamic Fields | Dynamic input fields that can be configured at deploy time using key-value config variables.                                               |         |
| Values         | Key-value pairs representing field names and their values for creating or updating records.                                                |         |

### CRM - Disable Notification

Stop all instant notifications enabled for the specified channels.

| Input       | Comments                                                                                                        | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Zoho connection to use.                                                                                     |         |
| Channel IDs | Comma-separated channel IDs to disable. These are the IDs you provided when enabling the notification channels. |         |

### CRM - Disable Specific Notification

Disable notifications for specific events in a channel without disabling the entire channel.

| Input                    | Comments                                                                                                                                                                                            | Default |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Zoho connection to use.                                                                                                                                                                         |         |
| Channel ID               | User-defined unique numeric identifier for the notification channel. You create this ID when enabling notifications and use it to reference the channel in subsequent operations. Must be a number. |         |
| Events                   | Subscribed operations in format "{module}.{operation}". Operations: create, edit, delete, all.                                                                                                      |         |
| Notify On Related Action | When true, triggers notifications when associated record actions occur.                                                                                                                             | true    |

### CRM - Enable Notification

Enable instant notifications for actions on a Zoho CRM module.

| Input                        | Comments                                                                                                                                                                                            | Default |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The Zoho connection to use.                                                                                                                                                                         |         |
| Channel ID                   | User-defined unique numeric identifier for the notification channel. You create this ID when enabling notifications and use it to reference the channel in subsequent operations. Must be a number. |         |
| Events                       | Subscribed operations in format "{module}.{operation}". Operations: create, edit, delete, all.                                                                                                      |         |
| Notify URL                   | The URL that will receive POST notifications about the actions.                                                                                                                                     |         |
| Token                        | Verification token (max 50 chars) sent in callbacks to verify notifications are from Zoho CRM.                                                                                                      |         |
| Channel Expiry               | ISO datetime for expiry. Maximum 1 week from now. Default is 1 hour.                                                                                                                                |         |
| Return Affected Field Values | When true, includes updated field values in the notification callback.                                                                                                                              | false   |
| Notify On Related Action     | When true, triggers notifications when associated record actions occur.                                                                                                                             | true    |
| Notification Condition       | Filter notifications by specific field changes. Provide field API names to watch.                                                                                                                   |         |

### CRM - Get Notification Details

Retrieve the details of notifications enabled for a specific channel.

| Input      | Comments                                                                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Channel ID | User-defined unique numeric identifier for the notification channel. You create this ID when enabling notifications and use it to reference the channel in subsequent operations. Must be a number. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                                                                             | false   |
| Module     | API name of the module (e.g., Leads, Deals, Contacts). Leave empty to get all modules.                                                                                                              |         |
| Page       | The page number to start at. First page is 1.                                                                                                                                                       | 1       |
| Per Page   | The number of records to fetch per page. Maximum is 200.                                                                                                                                            | 200     |
| Connection | The Zoho connection to use.                                                                                                                                                                         |         |

### CRM - Get Record

Get a single Zoho CRM Record

| Input       | Comments                                                                                                                                   | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The Zoho connection to use.                                                                                                                |         |
| Record Type | The type of CRM record to operate on. See [Zoho CRM Modules](https://www.zoho.com/crm/developer/docs/api/v8/modules-api.html) for details. |         |
| Record ID   | The unique identifier of the record in Zoho.                                                                                               |         |
| Fields      | The field names to retrieve. Leave empty to retrieve all fields.                                                                           |         |

### CRM - Get Records

Get a collection of Zoho CRM Records

| Input       | Comments                                                                                                                                   | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The Zoho connection to use.                                                                                                                |         |
| Record Type | The type of CRM record to operate on. See [Zoho CRM Modules](https://www.zoho.com/crm/developer/docs/api/v8/modules-api.html) for details. |         |
| Fields      | The field names to retrieve. Leave empty to retrieve all fields.                                                                           |         |
| Page        | The page number to start at. First page is 1.                                                                                              | 1       |
| Per Page    | The number of records to fetch per page. Maximum is 200.                                                                                   | 200     |
| Page Token  | Token used for cursor based pagination. Obtained from previous response.                                                                   |         |
| Sort Order  | The order in which to sort the results.                                                                                                    |         |
| Sort By     | The field to sort results by.                                                                                                              |         |
| Fetch All   | When true, automatically fetches all pages of results using pagination.                                                                    | false   |

### CRM - Raw Request

Send raw HTTP request to Zoho CRM

| Input                   | Comments                                                                                                                                                                                                                                                                                                     | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Zoho connection to use.                                                                                                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/Leads/1234567890/actions/convert), The base URL is already included (https://www.zohoapis.{api_domain}/crm/v8). For example, to connect to https://www.zohoapis.{api_domain}/crm/v8/Leads/1234567890/actions/convert, only /Leads/1234567890/actions/convert is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                      |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                    |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                         |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                             |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                       |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                          |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                  |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                     | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                          |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                             | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                          | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                | false   |

### CRM - Remove Record

Remove a Zoho CRM Record

| Input       | Comments                                                                                                                                   | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The Zoho connection to use.                                                                                                                |         |
| Record Type | The type of CRM record to operate on. See [Zoho CRM Modules](https://www.zoho.com/crm/developer/docs/api/v8/modules-api.html) for details. |         |
| Record ID   | The unique identifier of the record in Zoho.                                                                                               |         |

### CRM - Update Notification

Update specific information of a notification enabled for a channel.

| Input                  | Comments                                                                                                                                                                                            | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Zoho connection to use.                                                                                                                                                                         |         |
| Channel ID             | User-defined unique numeric identifier for the notification channel. You create this ID when enabling notifications and use it to reference the channel in subsequent operations. Must be a number. |         |
| Events                 | Subscribed operations in format "{module}.{operation}". Operations: create, edit, delete, all.                                                                                                      |         |
| Notify URL             | The URL that will receive POST notifications about the actions.                                                                                                                                     |         |
| Token                  | Verification token (max 50 chars) sent in callbacks to verify notifications are from Zoho CRM.                                                                                                      |         |
| Channel Expiry         | ISO datetime for expiry. Maximum 1 week from now. Default is 1 hour.                                                                                                                                |         |
| Notification Condition | Filter notifications by specific field changes. Provide field API names to watch.                                                                                                                   |         |

### CRM - Update Record

Update a Zoho CRM Record

| Input          | Comments                                                                                                                                   | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Zoho connection to use.                                                                                                                |         |
| Record Type    | The type of CRM record to operate on. See [Zoho CRM Modules](https://www.zoho.com/crm/developer/docs/api/v8/modules-api.html) for details. |         |
| Record ID      | The unique identifier of the record in Zoho.                                                                                               |         |
| Dynamic Fields | Dynamic input fields that can be configured at deploy time using key-value config variables.                                               |         |
| Values         | Key-value pairs representing field names and their values for creating or updating records.                                                |         |
