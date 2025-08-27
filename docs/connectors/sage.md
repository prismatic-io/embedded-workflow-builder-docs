---
title: Sage Accounting Connector
sidebar_label: Sage Accounting
description: Manage contacts and others connected to your Sage account.
---

![Sage Accounting](./assets/sage.png#connector-icon)
Manage contacts and others connected to your Sage account.

## Connections

### OAuth 2.0

OAuth 2.0 Connection for Sage

You will first need to create and configure a [Connected App](https://developer.sage.com/api/accounting/guides/client_app_registration/) within Sage Accounting.
Be sure to enter the OAuth callback URL - `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` - as a **Callback URL**.
Select **Require Secret for Web Server Flow** and **Require Secret for Refresh Token Flow**:

Once the app has been created, you will be provided with a **Client Id** and **Client Secret**.

Create a new connection for the Sage component and use the following values:

- For **Client ID** and **Client Secret** enter the values that you received previously.
- For **Scopes** enter either `full_access` or `readonly`. [Sage Authentication Documentation](https://developer.sage.com/api/accounting/guides/authentication/)

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                             | Default     |
| ------------- | ---------------------------------------------------- | ----------- |
| Scopes        | Space separated OAuth 2.0 permission scopes for Sage | full_access |
| Client ID     | Client Identifier of your app for Sage               |             |
| Client Secret | Client Secret of your app for Sage                   |             |

## Actions

### Create Contact

Create a new contact

| Input                            | Comments                                                                             | Default |
| -------------------------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection                       |                                                                                      |         |
| Name                             | Provide a string value for a name.                                                   |         |
| Contact Type Ids                 | For each list item, provide an Id of a contact type                                  |         |
| Reference                        | Provide a string value for the reference of the contact.                             |         |
| Default Sales Ledger Id          | Provide the unique identifier of the default sales ledger.                           |         |
| Default Sales Tax Rate Id        | Provide the unique identifier of the sales tax rate for the contact.                 |         |
| Default Purchase Ledger Id       | Provide the unique identifier of the default purchase ledger for the contact.        |         |
| Tax Number                       | Provide a string value for the VAT registration number for the contact.              |         |
| Notes                            | Provide a string value for notes.                                                    |         |
| Credit Limit                     | Provide a number value for the credit limit of the contact.                          |         |
| Credit Days                      | Provide a number value for the credit days of the contact.                           |         |
| Source GUID                      | Provide a valid GUID, used for importing/exporting contacts from 3rd party services. |         |
| Currency Id                      | Provide the unique identifier of the currency type.                                  |         |
| Address Name                     | Provide a string value for a name.                                                   |         |
| Address Line 1                   | Provide a valid street address                                                       |         |
| Address Line 2                   | Provide a string value for the 2nd address line.                                     |         |
| City                             | Provide a string value for the city of the address.                                  |         |
| Country Id                       | Provide a unique identifier for the contact's country.                               |         |
| Postal Code                      | Provide a value for the postal code.                                                 |         |
| Bank Account Id                  | Provide a value for the postal code.                                                 |         |
| Address Type Id                  | Provide a unique identifier for the address type                                     |         |
| Region                           | Provide a valid region for the contact.                                              |         |
| Delivery Address Name            | Provide a string value for a name.                                                   |         |
| Delivery Address Region          | Provide a valid region for the contact.                                              |         |
| Is Main Address                  | This flag will determine if this is the contacts main address.                       | false   |
| Delivery Address Line 1          | Provide a valid street address                                                       |         |
| Delivery Address Line 2          | Provide a string value for the 2nd address line.                                     |         |
| Delivery Address City            | Provide a string value for the city of the address.                                  |         |
| Delivery Address Postal Code     | Provide a value for the postal code.                                                 |         |
| Delivery Address Country Id      | Provide a unique identifier for the contact's country.                               |         |
| Delivery Address Bank Account Id | Provide a value for the postal code.                                                 |         |
| Delivery Address Type Id         | Provide a unique identifier for the address type                                     |         |
| Is Main Address                  | This flag will determine if this is the contacts main address.                       | false   |
| Account Name                     | Provide a string value for the name of the bank account.                             |         |
| Account Number                   | Provide a valid bank account number.                                                 |         |
| Sort Code                        | Provide a sort code for the bank account.                                            |         |
| BIC                              | Provide a valid BIC for the bank account.                                            |         |
| IBAN                             | Provide a valid IBAN for the bank account.                                           |         |

### Create Ledger Account

Create a new Ledger account

| Input                  | Comments                                                                       | Default |
| ---------------------- | ------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                |         |
| Ledger Account Type Id | Provide the unique identifier of a ledger account type.                        |         |
| Include In Chart       | This flag determines if the account will be included in the chart of accounts. | false   |
| Name                   | Provide a string value for a name.                                             |         |
| Display Name           | Provide a string value for the display name.                                   |         |
| Nominal Code           | Provide an unique integer value for the nominal code of the ledger account.    |         |
| Tax Rate Id            | Provide the unique identifier of a tax rate id.                                |         |

### Create Purchase Invoice

Create a new purchase invoice

| Input         | Comments                                                                                      | Default                                                                                                                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                                                               |                                                                                                                                                                                                                   |
| Contact Id    | Provide the unique identifier of a contact.                                                   |                                                                                                                                                                                                                   |
| Date          | Provide a valid date value.                                                                   |                                                                                                                                                                                                                   |
| Invoice Lines | Provide a list of javascript objects, each containing information of an an invoice line item. | <code>[<br /> {<br /> "description": "string",<br /> "ledger_account_id": "string",<br /> "unit_price": 0,<br /> "product_id": "string",<br /> "service_id": "string",<br /> "quantity": 0,<br /> }<br />]</code> |
| Total Amount  | Provide a total amount for the invoice.                                                       |                                                                                                                                                                                                                   |
| Due Date      | Provide a valid date value for the due date of the invoice.                                   |                                                                                                                                                                                                                   |

### Create Sales Invoice

Create a new sales invoice

| Input         | Comments                                                                                      | Default                                                                                                                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                                                               |                                                                                                                                                                                                                   |
| Contact Id    | Provide the unique identifier of a contact.                                                   |                                                                                                                                                                                                                   |
| Date          | Provide a valid date value.                                                                   |                                                                                                                                                                                                                   |
| Invoice Lines | Provide a list of javascript objects, each containing information of an an invoice line item. | <code>[<br /> {<br /> "description": "string",<br /> "ledger_account_id": "string",<br /> "unit_price": 0,<br /> "product_id": "string",<br /> "service_id": "string",<br /> "quantity": 0,<br /> }<br />]</code> |
| Total Amount  | Provide a total amount for the invoice.                                                       |                                                                                                                                                                                                                   |

### Delete Contact

Delete an existing contact by Id

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection |                                             |         |
| Contact Id | Provide the unique identifier of a contact. |         |

### Delete Contact Person

Delete an existing contact person by Id

| Input             | Comments                                           | Default |
| ----------------- | -------------------------------------------------- | ------- |
| Connection        |                                                    |         |
| Contact Person Id | Provide the unique identifier of a contact person. |         |

### Delete Purchase Invoice

Delete the information and metadata of a purchase invoice by Id

| Input               | Comments                                                | Default |
| ------------------- | ------------------------------------------------------- | ------- |
| Connection          |                                                         |         |
| Purchase Invoice Id | Provide the unique identifier of a purchase invoice id. |         |

### Delete Sales Invoice

Delete the information and metadata of a sales invoice by Id

| Input            | Comments                                             | Default |
| ---------------- | ---------------------------------------------------- | ------- |
| Connection       |                                                      |         |
| Sales Invoice Id | Provide the unique identifier of a sales invoice id. |         |

### Get Contact

Get the information and metadata of a contact by Id

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection |                                             |         |
| Contact Id | Provide the unique identifier of a contact. |         |

### Get Contact Person

Get the information and metadata of a contact person by Id

| Input             | Comments                                           | Default |
| ----------------- | -------------------------------------------------- | ------- |
| Connection        |                                                    |         |
| Contact Person Id | Provide the unique identifier of a contact person. |         |

### Get Ledger Account

Get the information and metadata of a Ledger account

| Input             | Comments                                           | Default |
| ----------------- | -------------------------------------------------- | ------- |
| Connection        |                                                    |         |
| Ledger Account Id | Provide the unique identifier of a ledger account. |         |

### Get Purchase Invoice

Get the information and metadata of a purchase invoice by Id

| Input               | Comments                                                | Default |
| ------------------- | ------------------------------------------------------- | ------- |
| Connection          |                                                         |         |
| Purchase Invoice Id | Provide the unique identifier of a purchase invoice id. |         |

### Get Sales Invoice

Get the information and metadata of a sales invoice by Id

| Input            | Comments                                             | Default |
| ---------------- | ---------------------------------------------------- | ------- |
| Connection       |                                                      |         |
| Sales Invoice Id | Provide the unique identifier of a sales invoice id. |         |

### List Address Types

List all address types

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Connection     |                                                                         |         |
| Items Per Page | Provide a value for the amount of items to be returned in the response. |         |
| Page           | Provide a value for the page of results you would like to be returned.  |         |

### List Contact People

List all contact people

| Input                   | Comments                                                                                     | Default                                              |
| ----------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------- | --- |
| Connection              |                                                                                              |                                                      |
| Items Per Page          | Provide a value for the amount of items to be returned in the response.                      |                                                      |
| Page                    | Provide a value for the page of results you would like to be returned.                       |                                                      |
| Update or Created Since | Use this to limit the response to Contacts changed since a given date (format: YYYY-MM-DDT(+ | -)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+ | -)hh:mm). Inclusive of the passed timestamp. |     |

### List Contacts

List all contacts

| Input                   | Comments                                                                                     | Default                                              |
| ----------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------- | --- |
| Connection              |                                                                                              |                                                      |
| Items Per Page          | Provide a value for the amount of items to be returned in the response.                      |                                                      |
| Page                    | Provide a value for the page of results you would like to be returned.                       |                                                      |
| Update or Created Since | Use this to limit the response to Contacts changed since a given date (format: YYYY-MM-DDT(+ | -)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+ | -)hh:mm). Inclusive of the passed timestamp. |     |

### List Contact Types

List all contact types

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Connection     |                                                                         |         |
| Items Per Page | Provide a value for the amount of items to be returned in the response. |         |
| Page           | Provide a value for the page of results you would like to be returned.  |         |

### List Countries

List all countries

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Connection     |                                                                         |         |
| Items Per Page | Provide a value for the amount of items to be returned in the response. |         |
| Page           | Provide a value for the page of results you would like to be returned.  |         |

### List Currencies

List all currencies

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Connection     |                                                                         |         |
| Items Per Page | Provide a value for the amount of items to be returned in the response. |         |
| Page           | Provide a value for the page of results you would like to be returned.  |         |

### List Ledger Accounts

List all Ledger accounts

| Input                   | Comments                                                                                     | Default                                              |
| ----------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------- | --- |
| Connection              |                                                                                              |                                                      |
| Items Per Page          | Provide a value for the amount of items to be returned in the response.                      |                                                      |
| Page                    | Provide a value for the page of results you would like to be returned.                       |                                                      |
| Update or Created Since | Use this to limit the response to Contacts changed since a given date (format: YYYY-MM-DDT(+ | -)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+ | -)hh:mm). Inclusive of the passed timestamp. |     |

### List Ledger Account Types

List all Ledger account types

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Connection     |                                                                         |         |
| Items Per Page | Provide a value for the amount of items to be returned in the response. |         |
| Page           | Provide a value for the page of results you would like to be returned.  |         |

### List Purchase Invoices

List all purchase invoices

| Input                   | Comments                                                                                     | Default                                              |
| ----------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------- | --- |
| Connection              |                                                                                              |                                                      |
| Items Per Page          | Provide a value for the amount of items to be returned in the response.                      |                                                      |
| Page                    | Provide a value for the page of results you would like to be returned.                       |                                                      |
| Update or Created Since | Use this to limit the response to Contacts changed since a given date (format: YYYY-MM-DDT(+ | -)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+ | -)hh:mm). Inclusive of the passed timestamp. |     |

### List Sales Invoices

List all sales invoices

| Input                   | Comments                                                                                     | Default                                              |
| ----------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------- | --- |
| Connection              |                                                                                              |                                                      |
| Items Per Page          | Provide a value for the amount of items to be returned in the response.                      |                                                      |
| Page                    | Provide a value for the page of results you would like to be returned.                       |                                                      |
| Update or Created Since | Use this to limit the response to Contacts changed since a given date (format: YYYY-MM-DDT(+ | -)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+ | -)hh:mm). Inclusive of the passed timestamp. |     |

### Raw Request

Send raw HTTP request to Sage Accounting

| Input                   | Comments                                                                                                                                                                                                                     | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                              |         |
| URL                     | Input the path only (/contacts), The base URL is already included (https://api.accounting.sage.com/v3.1). For example, to connect to https://api.accounting.sage.com/v3.1/contacts, only /contacts is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                      |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                    |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                         |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                             |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                       |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                          |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                  |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                     | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                          |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                         | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                             | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                          | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                | false   |

### Update Contact

Update the information and metadata of an existing contact by Id

| Input                            | Comments                                                                             | Default |
| -------------------------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection                       |                                                                                      |         |
| Contact Id                       | Provide the unique identifier of a contact.                                          |         |
| Name                             | Provide a string value for a name.                                                   |         |
| Contact Type Ids                 | For each list item, provide an Id of a contact type                                  |         |
| Reference                        | Provide a string value for the reference of the contact.                             |         |
| Default Sales Ledger Id          | Provide the unique identifier of the default sales ledger.                           |         |
| Default Sales Tax Rate Id        | Provide the unique identifier of the sales tax rate for the contact.                 |         |
| Default Purchase Ledger Id       | Provide the unique identifier of the default purchase ledger for the contact.        |         |
| Tax Number                       | Provide a string value for the VAT registration number for the contact.              |         |
| Notes                            | Provide a string value for notes.                                                    |         |
| Credit Limit                     | Provide a number value for the credit limit of the contact.                          |         |
| Credit Days                      | Provide a number value for the credit days of the contact.                           |         |
| Source GUID                      | Provide a valid GUID, used for importing/exporting contacts from 3rd party services. |         |
| Currency Id                      | Provide the unique identifier of the currency type.                                  |         |
| Address Name                     | Provide a string value for a name.                                                   |         |
| Address Line 1                   | Provide a valid street address                                                       |         |
| Address Line 2                   | Provide a string value for the 2nd address line.                                     |         |
| City                             | Provide a string value for the city of the address.                                  |         |
| Country Id                       | Provide a unique identifier for the contact's country.                               |         |
| Postal Code                      | Provide a value for the postal code.                                                 |         |
| Bank Account Id                  | Provide a value for the postal code.                                                 |         |
| Address Type Id                  | Provide a unique identifier for the address type                                     |         |
| Region                           | Provide a valid region for the contact.                                              |         |
| Delivery Address Name            | Provide a string value for a name.                                                   |         |
| Delivery Address Region          | Provide a valid region for the contact.                                              |         |
| Is Main Address                  | This flag will determine if this is the contacts main address.                       | false   |
| Delivery Address Line 1          | Provide a valid street address                                                       |         |
| Delivery Address Line 2          | Provide a string value for the 2nd address line.                                     |         |
| Delivery Address City            | Provide a string value for the city of the address.                                  |         |
| Delivery Address Postal Code     | Provide a value for the postal code.                                                 |         |
| Delivery Address Country Id      | Provide a unique identifier for the contact's country.                               |         |
| Delivery Address Bank Account Id | Provide a value for the postal code.                                                 |         |
| Delivery Address Type Id         | Provide a unique identifier for the address type                                     |         |
| Is Main Address                  | This flag will determine if this is the contacts main address.                       | false   |
| Account Name                     | Provide a string value for the name of the bank account.                             |         |
| Account Number                   | Provide a valid bank account number.                                                 |         |
| Sort Code                        | Provide a sort code for the bank account.                                            |         |
| BIC                              | Provide a valid BIC for the bank account.                                            |         |
| IBAN                             | Provide a valid IBAN for the bank account.                                           |         |

### Update Ledger Account

Update the information and metadata of a Ledger account by Id

| Input                  | Comments                                                                       | Default |
| ---------------------- | ------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                |         |
| Account Id             | Provide the unique identifier of the account Id.                               |         |
| Ledger Account Type Id | Provide the unique identifier of a ledger account type.                        |         |
| Include In Chart       | This flag determines if the account will be included in the chart of accounts. | false   |
| Name                   | Provide a string value for a name.                                             |         |
| Display Name           | Provide a string value for the display name.                                   |         |
| Nominal Code           | Provide an unique integer value for the nominal code of the ledger account.    |         |
| Tax Rate Id            | Provide the unique identifier of a tax rate id.                                |         |
| Gifi Code              | Provide a value for The General Index of Financial Information.                |         |

### Update Purchase Invoice

Update the information and metadata of a purchase invoice by Id

| Input               | Comments                                                                                      | Default                                                                                                                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          |                                                                                               |                                                                                                                                                                                                                   |
| Purchase Invoice Id | Provide the unique identifier of a purchase invoice id.                                       |                                                                                                                                                                                                                   |
| Contact Id          | Provide the unique identifier of a contact.                                                   |                                                                                                                                                                                                                   |
| Date                | Provide a valid date value.                                                                   |                                                                                                                                                                                                                   |
| Due Date            | Provide a valid date value for the due date of the invoice.                                   |                                                                                                                                                                                                                   |
| Contact Name        | Provide the name of a contact.                                                                |                                                                                                                                                                                                                   |
| Notes               | Provide a string value for notes.                                                             |                                                                                                                                                                                                                   |
| Total Quantity      | Provide a total quantity of the invoice.                                                      |                                                                                                                                                                                                                   |
| Net Amount          | Provide the net amount of the invoice.                                                        |                                                                                                                                                                                                                   |
| Tax Amount          | Provide a tax amount for the invoice.                                                         |                                                                                                                                                                                                                   |
| Currency Id         | Provide the unique identifier of the currency type.                                           |                                                                                                                                                                                                                   |
| Total Amount        | Provide a total amount for the invoice.                                                       |                                                                                                                                                                                                                   |
| Invoice Lines       | Provide a list of javascript objects, each containing information of an an invoice line item. | <code>[<br /> {<br /> "description": "string",<br /> "ledger_account_id": "string",<br /> "unit_price": 0,<br /> "product_id": "string",<br /> "service_id": "string",<br /> "quantity": 0,<br /> }<br />]</code> |

### Update Sales Invoice

Update the information and metadata of a sales invoice by Id

| Input            | Comments                                                                                      | Default                                                                                                                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection       |                                                                                               |                                                                                                                                                                                                                   |
| Sales Invoice Id | Provide the unique identifier of a sales invoice id.                                          |                                                                                                                                                                                                                   |
| Contact Id       | Provide the unique identifier of a contact.                                                   |                                                                                                                                                                                                                   |
| Date             | Provide a valid date value.                                                                   |                                                                                                                                                                                                                   |
| Due Date         | Provide a valid date value for the due date of the invoice.                                   |                                                                                                                                                                                                                   |
| Contact Name     | Provide the name of a contact.                                                                |                                                                                                                                                                                                                   |
| Notes            | Provide a string value for notes.                                                             |                                                                                                                                                                                                                   |
| Total Quantity   | Provide a total quantity of the invoice.                                                      |                                                                                                                                                                                                                   |
| Net Amount       | Provide the net amount of the invoice.                                                        |                                                                                                                                                                                                                   |
| Tax Amount       | Provide a tax amount for the invoice.                                                         |                                                                                                                                                                                                                   |
| Currency Id      | Provide the unique identifier of the currency type.                                           |                                                                                                                                                                                                                   |
| Total Amount     | Provide a total amount for the invoice.                                                       |                                                                                                                                                                                                                   |
| Invoice Lines    | Provide a list of javascript objects, each containing information of an an invoice line item. | <code>[<br /> {<br /> "description": "string",<br /> "ledger_account_id": "string",<br /> "unit_price": 0,<br /> "product_id": "string",<br /> "service_id": "string",<br /> "quantity": 0,<br /> }<br />]</code> |
