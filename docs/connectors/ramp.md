---
title: Ramp Connector
sidebar_label: Ramp
description: Ramp is a spend management platform focused on automating accounts payable and procurement processes. Use the Ramp component to manage transactions related to vendors, bills, reimbursements and more.
---

![Ramp](./assets/ramp.png#connector-icon)
Ramp is a spend management platform focused on automating accounts payable and procurement processes. Use the Ramp component to manage transactions related to vendors, bills, reimbursements and more.

## Connections

### OAuth 2.0

This connection allows you to authenticate with Ramp using OAuth 2.0.

Create an OAuth application:

Registering your application in the Ramp developer dashboard is the first step of building an integration based on Ramp API:

1. From the [Ramp developer](https://app.ramp.com/settings/ramp-developer) settings page, click on **Create new app** to register a new application.
2. Now you have registered a new application. Click into it and configure the following parameters:
   1. Client ID and client secret: Credentials for your application; store securely.
   2. App name and description
   3. Grant types: A list of grant types that the application may use to get access token. See [authorization guide](https://docs.ramp.com/developer-api/v1/authorization) for more information.
   4. Scopes: Defines [scopes](https://docs.ramp.com/developer-api/v1/authorization/scopes) that may be granted to access token.
   5. Redirect URIs: Enter`https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.

Supply the following values to the **OAuth 2.0** connection:

- **Client ID**
- **Client Secret**
- **Scopes**
  - Recommended Scopes (space delimited): `bills:read bills:write accounting:read accounting:write transactions:read reimbursements:read departments:read departments:write entities:read locations:read locations:write`

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                 | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Ramp                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Token URL     | The OAuth 2.0 Token URL for Ramp                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Scopes        | A comma-delimited set of one or more scopes to get the user's permission to access. Refer to https://docs.ramp.com/developer-api/v1/authorization/scopes | accounting:read accounting:write bills:read business:read cards:read cards:write cashbacks:read departments:read departments:write entities:read leads:read leads:write limits:read limits:write locations:read locations:write memos:read merchants:read receipt_integrations:read receipt_integrations:write receipts:read reimbursements:read spend_programs:read spend_programs:write statements:read transactions:read transfers:read users:read users:write |
| Client ID     |                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Client Secret |                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Actions

### Create Custom Accounting Field

Create a custom accounting field

| Input                      | Comments                                                                      | Default |
| -------------------------- | ----------------------------------------------------------------------------- | ------- |
| Custom Accounting Field ID | The ID of the custom accounting field to create                               |         |
| Name                       | The name of the custom accounting field to create                             |         |
| Input Type                 | The input type could be SINGLE_CHOICE, BOOLEAN or FREE_FORM_TEXT              |         |
| Is Splitable               | If set to True, the accounting field can be used to annotate split line items |         |
| Debug Request              | Enabling this flag will log out the current request.                          | false   |
| Connection                 |                                                                               |         |

### Create Department

Create a new department

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Name          | The name of the department                           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Create Location

Create a new location

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Name          | The name of the location                             |         |
| Entity ID     | The ID of the entity to create the location          |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Delete Custom Accounting Field

Delete a custom accounting field

| Input                      | Comments                                             | Default |
| -------------------------- | ---------------------------------------------------- | ------- |
| Custom Accounting Field ID | The ID of the custom accounting field to delete      |         |
| Debug Request              | Enabling this flag will log out the current request. | false   |
| Connection                 |                                                      |         |

### Delete Custom Accounting Field Option

Delete a custom accounting field option

| Input                             | Comments                                              | Default |
| --------------------------------- | ----------------------------------------------------- | ------- |
| Custom Accounting Field Option ID | The ID of the custom accouting field option to delete |         |
| Debug Request                     | Enabling this flag will log out the current request.  | false   |
| Connection                        |                                                       |         |

### Delete General Ledger Account

Delete a general ledger account

| Input                     | Comments                                             | Default |
| ------------------------- | ---------------------------------------------------- | ------- |
| General Ledger Account ID | The ID of the general ledger account to delete       |         |
| Debug Request             | Enabling this flag will log out the current request. | false   |
| Connection                |                                                      |         |

### Delete Vendor

Delete a vendor

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Vendor ID     | The ID of the vendor to delete                       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Bill

Retrieve a bill by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Bill ID       | The ID of the bill to retrieve                       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Business Entity

Retrieve a business entity by ID

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Business Entity ID | The ID of the business entity to retrieve            |         |
| Debug Request      | Enabling this flag will log out the current request. | false   |
| Connection         |                                                      |         |

### Get Custom Accounting Field

Retrieve a custom accounting field by ID

| Input                      | Comments                                             | Default |
| -------------------------- | ---------------------------------------------------- | ------- |
| Custom Accounting Field ID | The ID of the custom accounting field to retrieve    |         |
| Debug Request              | Enabling this flag will log out the current request. | false   |
| Connection                 |                                                      |         |

### Get Custom Accounting Field Option

Retrieve a custom accounting field option by ID

| Input                             | Comments                                             | Default |
| --------------------------------- | ---------------------------------------------------- | ------- |
| Custom Accounting Field Option ID | The ID of the custom field option to retrieve        |         |
| Debug Request                     | Enabling this flag will log out the current request. | false   |
| Connection                        |                                                      |         |

### Get Department

Retrieve a department by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Department ID | The ID of the department to retrieve                 |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get General Ledger Account

Retrieve a general ledger account by ID

| Input                     | Comments                                             | Default |
| ------------------------- | ---------------------------------------------------- | ------- |
| General Ledger Account ID | The ID of the general ledger account to retrieve     |         |
| Debug Request             | Enabling this flag will log out the current request. | false   |
| Connection                |                                                      |         |

### Get Location

Retrieve a location by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Location ID   | The ID of the location to retrieve                   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Reimbursement

Retrieve a reimbursement by ID

| Input            | Comments                                             | Default |
| ---------------- | ---------------------------------------------------- | ------- |
| Reimbursement ID | The ID of the reimbursement to retrieve              |         |
| Debug Request    | Enabling this flag will log out the current request. | false   |
| Connection       |                                                      |         |

### Get Transaction

Retrieve a transaction by ID

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Transaction ID | The ID of the transaction to retrieve                |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |
| Connection     |                                                      |         |

### Get Vendor

Retrieve a vendor by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Vendor ID     | The ID of the vendor to retrieve                     |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### List Bills

Retrieve a list of all bills

| Input               | Comments                                                                                     | Default |
| ------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                              |         |
| Fetch All           | If true, will fetch all results                                                              | false   |
| Start               | The starting point for the list of results. Is fetchAll is true, this option will be ignored |         |
| Page Size           | Number of results to retrieve per page. Default is 50                                        | 50      |
| Custom Query Params | Custom query parameters to be included in the request                                        |         |
| Debug Request       | Enabling this flag will log out the current request.                                         | false   |

### List Business Entities

Retrieve a list of all business entities

| Input               | Comments                                                                                     | Default |
| ------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                              |         |
| Fetch All           | If true, will fetch all results                                                              | false   |
| Start               | The starting point for the list of results. Is fetchAll is true, this option will be ignored |         |
| Page Size           | Number of results to retrieve per page. Default is 50                                        | 50      |
| Custom Query Params | Custom query parameters to be included in the request                                        |         |
| Debug Request       | Enabling this flag will log out the current request.                                         | false   |

### List Custom Accounting Field

List custom accounting fields

| Input               | Comments                                                                                     | Default |
| ------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                              |         |
| Fetch All           | If true, will fetch all results                                                              | false   |
| Start               | The starting point for the list of results. Is fetchAll is true, this option will be ignored |         |
| Page Size           | Number of results to retrieve per page. Default is 50                                        | 50      |
| Custom Query Params | Custom query parameters to be included in the request                                        |         |
| Debug Request       | Enabling this flag will log out the current request.                                         | false   |

### List Custom Accounting Field Options

List options for a given custom accounting field

| Input                      | Comments                                                                                     | Default |
| -------------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Custom Accounting Field ID | The ID of the custom accounting field to list options for                                    |         |
| Connection                 |                                                                                              |         |
| Fetch All                  | If true, will fetch all results                                                              | false   |
| Start                      | The starting point for the list of results. Is fetchAll is true, this option will be ignored |         |
| Page Size                  | Number of results to retrieve per page. Default is 50                                        | 50      |
| Custom Query Params        | Custom query parameters to be included in the request                                        |         |
| Debug Request              | Enabling this flag will log out the current request.                                         | false   |

### List Departments

Retrieve a list of all Departments

| Input               | Comments                                                                                     | Default |
| ------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                              |         |
| Fetch All           | If true, will fetch all results                                                              | false   |
| Start               | The starting point for the list of results. Is fetchAll is true, this option will be ignored |         |
| Page Size           | Number of results to retrieve per page. Default is 50                                        | 50      |
| Custom Query Params | Custom query parameters to be included in the request                                        |         |
| Debug Request       | Enabling this flag will log out the current request.                                         | false   |

### List General Ledger Accounts

Retrieve a list of all general ledger accounts

| Input               | Comments                                                                                     | Default |
| ------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                              |         |
| Fetch All           | If true, will fetch all results                                                              | false   |
| Start               | The starting point for the list of results. Is fetchAll is true, this option will be ignored |         |
| Page Size           | Number of results to retrieve per page. Default is 50                                        | 50      |
| Custom Query Params | Custom query parameters to be included in the request                                        |         |
| Debug Request       | Enabling this flag will log out the current request.                                         | false   |

### List Locations

Retrieve a list of all locations

| Input               | Comments                                                                                     | Default |
| ------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                              |         |
| Fetch All           | If true, will fetch all results                                                              | false   |
| Start               | The starting point for the list of results. Is fetchAll is true, this option will be ignored |         |
| Page Size           | Number of results to retrieve per page. Default is 50                                        | 50      |
| Custom Query Params | Custom query parameters to be included in the request                                        |         |
| Debug Request       | Enabling this flag will log out the current request.                                         | false   |

### List Reimbursements

Retrieve a list of all reimbursements

| Input               | Comments                                                                                     | Default |
| ------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                              |         |
| Fetch All           | If true, will fetch all results                                                              | false   |
| Start               | The starting point for the list of results. Is fetchAll is true, this option will be ignored |         |
| Page Size           | Number of results to retrieve per page. Default is 50                                        | 50      |
| Custom Query Params | Custom query parameters to be included in the request                                        |         |
| Debug Request       | Enabling this flag will log out the current request.                                         | false   |

### List Transactions

Retrieve a list of all transactions

| Input               | Comments                                                                                     | Default |
| ------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                              |         |
| Fetch All           | If true, will fetch all results                                                              | false   |
| Start               | The starting point for the list of results. Is fetchAll is true, this option will be ignored |         |
| Page Size           | Number of results to retrieve per page. Default is 50                                        | 50      |
| Custom Query Params | Custom query parameters to be included in the request                                        |         |
| Debug Request       | Enabling this flag will log out the current request.                                         | false   |

### List Vendors

Retrieve a list of all vendors

| Input               | Comments                                                                                     | Default |
| ------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                              |         |
| Fetch All           | If true, will fetch all results                                                              | false   |
| Start               | The starting point for the list of results. Is fetchAll is true, this option will be ignored |         |
| Page Size           | Number of results to retrieve per page. Default is 50                                        | 50      |
| Custom Query Params | Custom query parameters to be included in the request                                        |         |
| Debug Request       | Enabling this flag will log out the current request.                                         | false   |

### Post Sync Status

This endpoint allows customers to notify Ramp of a list of sync results

| Input            | Comments                                                                                                                                                                                                        | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Idempotency Key  | An idempotency key is a unique value generated by the client which the server uses to recognize subsequent retries of the same request. To avoid collisions, we encourage clients to use random generated UUIDs |         |
| Sync Type        | The type of object to sync                                                                                                                                                                                      |         |
| Failed Syncs     | A list of objects that failed to be synced                                                                                                                                                                      |         |
| Successful Syncs | A list of objects that failed to be synced                                                                                                                                                                      |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                                                                                            | false   |
| Connection       |                                                                                                                                                                                                                 |         |

### Raw Request

Send raw HTTP request to Ramp API

| Input                   | Comments                                                                                                                                                                                                                                           | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                    |         |
| URL                     | Input the path only (/departments), The base URL is already included (https://api.ramp.com/developer/v1/). For example, to connect to https://api.ramp.com/developer/v1/departments, only /departments is entered in this field. e.g. /departments |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                            |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                          |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                               |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                   |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                             |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                        |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                           | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                |         |
| Debug Request           | Enable this to log the request and response                                                                                                                                                                                                        | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                   | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                      | false   |

### Update Custom Accounting Field

Update an existing custom accounting field

| Input                      | Comments                                                                      | Default |
| -------------------------- | ----------------------------------------------------------------------------- | ------- |
| Custom Accounting Field ID | The ID of the custom accounting field to update                               |         |
| Name                       | The name of the custom accounting field                                       |         |
| Is Splitable               | If set to True, the accounting field can be used to annotate split line items |         |
| Debug Request              | Enabling this flag will log out the current request.                          | false   |
| Connection                 |                                                                               |         |

### Update Custom Accounting Field Option

Update an existing custom accounting field option

| Input                             | Comments                                               | Default |
| --------------------------------- | ------------------------------------------------------ | ------- |
| Custom Accounting Field Option ID | The ID of the custom accounting field option to update |         |
| Reactivate                        | Reactivate a deleted custom field option               |         |
| Value                             | The value of the custom accounting field option        |         |
| Debug Request                     | Enabling this flag will log out the current request.   | false   |
| Connection                        |                                                        |         |

### Update Department

Update a department by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Department ID | The ID of the department to update                   |         |
| Name          | The updated name of the department                   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Update General Ledger Account

Update an existing general ledger account

| Input                     | Comments                                                                                                                                                                                                                             | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| General Ledger Account ID | The ID of the general ledger account to update                                                                                                                                                                                       |         |
| Code                      | The code of the general ledger account; you could provide an empty string if you want to reset the remote code                                                                                                                       |         |
| Name                      | Name of the general ledger account                                                                                                                                                                                                   |         |
| Reactivate                | Reactivate a deleted general ledger account                                                                                                                                                                                          |         |
| Subsidiaries              | IDs of a list of subsidiaries which a general ledger account can be used with. The Ramp-assigned IDs should be used here. you could provide an empty list if you want to reset the subsidiaries list for this general ledger account |         |
| Debug Request             | Enabling this flag will log out the current request.                                                                                                                                                                                 | false   |
| Connection                |                                                                                                                                                                                                                                      |         |

### Update Location

Update an existing location

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Location ID   | The ID of the location to update                     |         |
| Name          | The updated name of the location                     |         |
| Entity ID     | The ID of the entity to update the location          |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Update Vendor

Update an existing vendor

| Input         | Comments                                                                                                                                                            | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Vendor ID     | The ID of the vendor to update                                                                                                                                      |         |
| Code          | Code of the vendor; you could provide an empty string to reset the remote code                                                                                      |         |
| Name          | Name of a vendor                                                                                                                                                    |         |
| Reactivate    | Reactivate a deleted vendor                                                                                                                                         |         |
| Subsidiaries  | IDs of a list of subsidiaries associated with the vendor. The Ramp-assigned IDs should be used here. You could provide an empty list to reset the subsidiaries list |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                | false   |
| Connection    |                                                                                                                                                                     |         |

### Upload Custom Accounting Field Option

Upload a new custom accounting field option

| Input                             | Comments                                                                 | Default |
| --------------------------------- | ------------------------------------------------------------------------ | ------- |
| Custom Accounting Field Option ID | The ID of the custom accounting field option for which to upload options |         |
| Options                           | A list of field options for a given custom accounting field              |         |
| Debug Request                     | Enabling this flag will log out the current request.                     | false   |
| Connection                        |                                                                          |         |
