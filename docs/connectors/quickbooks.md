---
title: QuickBooks Connector
sidebar_label: QuickBooks
description: Create and manage customers and invoices within Intuit QuickBooks
---

![QuickBooks](./assets/quickbooks.png#connector-icon)
Create and manage customers and invoices within Intuit QuickBooks

## Connections

### QuickBooks OAuth 2.0

Authenticate requests to QuickBooks using values obtained from the Developer Console.

QuickBooks uses OAuth 2.0 to authenticate requests against the QuickBooks Online API.

1. To configure an OAuth 2.0 credential through QuickBooks, you will need to [create an app](https://www.developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0-playground#get-the-access-token) within the Intuit developer portal.
1. When you create your app, be sure to enter the OAuth callback URL `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
   1. Consult QuickBooks to determine the proper OAuth Scopes to assign.
1. Once the app has been created, you will be provided with a **Client ID** and **Client Secret**.
1. Now, configure OAuth 2.0 settings.
1. Create a new credential of type **OAuth 2.0 - Authorization Code**.
1. Enter the **Client ID** and **Client Secret** that you received from the Intuit developer portal.
1. Set **Scopes** to any of the values in [this list.](https://developer.intuit.com/app/developer/qbo/docs/learn/scopes)

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                   | Default                          |
| ------------- | ------------------------------------------------------------------------------------------ | -------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access.        | com.intuit.quickbooks.accounting |
| Client ID     |                                                                                            |                                  |
| Client Secret |                                                                                            |                                  |
| Use Sandbox   | Choose whether or not to use QuickBooks' sandbox. This is helpful for integration testing. | false                            |

## Actions

### Batch Request

Perform a batch request

| Input               | Comments                                                                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                     |         |
| Batch Request Items | An array of batch request items to be executed; see https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/batch for detailed information. |         |

### Create a refund receipt

Create a new Refund Receipt in QuickBooks

| Input              | Comments                                                                                                                                                                                                                                                                                                                                         | Default                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection         |                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                  |
| Line Items         | For each list item, provide a JavaScript Object that represents an individual line item. Please follow the shape provided in the example. For more information on the line item object refer to the QuickBooks documentation: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt | <code>[{<br /> "DetailType": "SalesItemLineDetail",<br /> "Amount": 400.0,<br /> "SalesItemLineDetail": {<br /> "ItemRef": {<br /> "value": "21"<br /> }<br /> }<br /> }]</code> |
| Custom Fields      | Specify any optional custom fields to be attached. A custom field is a JavaScript Object that consists of a DefinitionId: String, Type: String, and Name: String. If you don't want to supply any custom fields, simply provide an empty JavaScript Array []                                                                                     |                                                                                                                                                                                  |
| Optional Values    | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value.                                                                                                        |                                                                                                                                                                                  |
| Account Name       | Provide a value for the name of the account to which payment money is deposited. If you do not specify this account, payment is applied to the Undeposited Funds account.                                                                                                                                                                        |                                                                                                                                                                                  |
| Account Id         | Provide a value for the Id of the account to which payment money is deposited. If you do not specify this account, payment is applied to the Undeposited Funds account.                                                                                                                                                                          |                                                                                                                                                                                  |
| Billing Line 4     | Provide a value for line 4 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                  |
| Billing Line 3     | Provide a value for line 3 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                  |
| Billing Line 2     | Provide a value for line 2 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                  |
| Billing Line 1     | Provide a value for line 1 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                  |
| Billing Address Id | Provide the unique identifier of the billing address.                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                  |
| Billing Latitude   | Provide a value for the latitude of the billing address.                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                  |
| Billing Longitude  | Provide a value for the longitude of the billing address.                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                  |

### Create a sales receipt

Create a new Sales Receipt in QuickBooks

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                         | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               |                                                                                                                                                                                                                                                                                                                                                  |         |
| Line Items               | For each list item, provide a JavaScript Object that represents an individual line item. Please follow the shape provided in the example. For more information on the line item object refer to the QuickBooks documentation: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt |         |
| Custom Fields            | Specify any optional custom fields to be attached. A custom field is a JavaScript Object that consists of a DefinitionId: String, Type: String, and Name: String. If you don't want to supply any custom fields, simply provide an empty JavaScript Array []                                                                                     |         |
| Apply Tax After Discount | Specify whether or not to apply tax after discount.                                                                                                                                                                                                                                                                                              | false   |
| Create Time              | Provide a date time value for the point in time this record was created                                                                                                                                                                                                                                                                          |         |
| Customer Id              | Provide a value for the Id of the customer you would like to attach to the receipt.                                                                                                                                                                                                                                                              |         |
| Customer Name            | Provide a value for the name of the customer that will show on the receipt.                                                                                                                                                                                                                                                                      |         |
| Account Name             | Provide a value for the name of the account to which payment money is deposited. If you do not specify this account, payment is applied to the Undeposited Funds account.                                                                                                                                                                        |         |
| Account Id               | Provide a value for the Id of the account to which payment money is deposited. If you do not specify this account, payment is applied to the Undeposited Funds account.                                                                                                                                                                          |         |
| Payment Method Id        | Provide a value for the id of a payment method associated with this transaction.                                                                                                                                                                                                                                                                 |         |
| Payment Method Name      | Provide a value for the name of a payment method associated with this transaction.                                                                                                                                                                                                                                                               |         |

### Create Invoice

Create an Invoice with the specified data

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection |                                                                     |         |
| Data       | This is a string of JSON data that represents a QuickBooks invoice. |         |

### Create Item

Create a new non-inventory item in QuickBooks

| Input                   | Comments                                              | Default |
| ----------------------- | ----------------------------------------------------- | ------- |
| Connection              |                                                       |         |
| Non-Inventory Item Data | The attributes of the non-inventory item to create    |         |
| API Minor Version       | Provide the version of the API you would like to use. |         |

### Create Note Attachment

Use this endpoint to attach a note to an object.

| Input                  | Comments                                                                                                                                                                                                                                                                     | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                                                                                              |         |
| Entity Reference Value | Object reference to which this attachment is linked. Set this value with the Id of the target object as returned in its response body when queried.                                                                                                                          |         |
| Entity Reference Type  | Object reference to which this attachment is linked. Set this value with the specific type of the target object.                                                                                                                                                             |         |
| Note                   | The note is either related to the attachment specified with the FileName attribute, or as a standalone note. Required for note attachments.                                                                                                                                  |         |
| API Minor Version      | Provide the version of the API you would like to use.                                                                                                                                                                                                                        | 75      |
| Include on Send        | Used when Entity Reference Type references a transaction object. This field indicates whether or not the attachment is sent with the transaction when Save and Send button is clicked in the QuickBooks UI or when the Send endpoint (send email) is invoked for the object. | false   |

### Create Purchase Order

Create a new Purchase Order

| Input           | Comments                                                                                                                                                                                                                                  | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                                                                                           |         |
| AP Account ID   | The AP account to which the bill is credited                                                                                                                                                                                              |         |
| Vendor ID       | The Vendor referenced in this transaction                                                                                                                                                                                                 |         |
| Lines           | Data representing line items of Purchase Orders; see 'Line' in QuickBooks' docs at https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder#create-a-purchase-order                                  |         |
| Dynamic Fields  | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable.                                                                                                                             |         |
| Optional Values | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |

### Create Resource

Create a new resource in QuickBooks

| Input               | Comments                                                                                                                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                       |         |
| Resource Attributes | A list of attributes used to create a resource in QuickBooks. For more information refer to https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer. |         |
| Resource Type       |                                                                                                                                                                                       |         |

### Delete a refund receipt

Delete an existing Refund Receipt in QuickBooks

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Sync Token | The Sync Token of a resource in QuickBooks |         |
| Receipt Id | Provide a value for the Id of the receipt. |         |

### Delete Attachable

This operation deletes an attachable object.

| Input              | Comments                                                                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                               |         |
| Attachable Payload | The full payload of the attachable as returned in a read response. Could be a reference from a previously executed "Read an Attachable" action response data. |         |
| API Minor Version  | Provide the version of the API you would like to use.                                                                                                         | 75      |

### Delete Purchase Order

Delete an existing Purchase Order

| Input             | Comments                                        | Default |
| ----------------- | ----------------------------------------------- | ------- |
| Connection        |                                                 |         |
| Purchase Order Id | The id of the purchase order to delete.         |         |
| Sync Token        | The sync token of the purchase order to delete. |         |

### Download Attachment

Retrieves a temporary download URL to the specified attachableID.

| Input             | Comments                                              | Default |
| ----------------- | ----------------------------------------------------- | ------- |
| Connection        |                                                       |         |
| Attachable Id     | The unique identifier of the attachment               |         |
| API Minor Version | Provide the version of the API you would like to use. | 75      |

### Find Resource by Id

Returns a full Resource in QuickBooks

| Input         | Comments                                   | Default |
| ------------- | ------------------------------------------ | ------- |
| Connection    |                                            |         |
| Resource Type |                                            |         |
| Id            | The Primary ID of a resource in QuickBooks |         |

### Get a refund receipt

Get the value of an existing Refund Receipt in QuickBooks

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Receipt Id | Provide a value for the Id of the receipt. |         |

### Get a refund receipt as PDF

Get the value of an existing Refund Receipt in QuickBooks as a PDF

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Receipt Id | Provide a value for the Id of the receipt. |         |

### Get Company Info

Retrieve information about the company

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Customer By Display Name

Retrieve information about the Customer which matches the given Display Name

| Input                 | Comments                                    | Default |
| --------------------- | ------------------------------------------- | ------- |
| Connection            |                                             |         |
| Customer Display Name | This represents the customer's display name |         |

### Get Customer By Id

Retrieve information about the Customer which matches the given id

| Input       | Comments                       | Default |
| ----------- | ------------------------------ | ------- |
| Connection  |                                |         |
| Customer Id | The id of the customer to get. |         |

### Get Invoice By Id

Retrieve information about the Invoice which matches the given id

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection |                               |         |
| Invoice Id | The id of the invoice to get. |         |

### Get Sales Receipt

Get the information and metadata of a Sales Receipt by Id

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Receipt Id | Provide a value for the Id of the receipt. |         |

### Get Vendor Expenses

Retrieve information about vendor expenses

| Input        | Comments                                                                                                                                                                                                                                                                                      | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                               |         |
| Query Params | Customize the information returned in the report by specifying query parameters with the query. Listed here are the query parameters available for this report: customer, vendor, end_date, date_macro, class, sort_order, summarize_column_id, department, accounting_method, and start_date |         |

### List Accounts

Retrieve a list of all Accounts

| Input          | Comments                                      | Default |
| -------------- | --------------------------------------------- | ------- |
| Fetch All      | Whether to fetch all results or not.          | false   |
| Max Results    | The maximum number of results to return.      |         |
| Start Position | The starting position to return results from. |         |
| Connection     |                                               |         |

### List Attachments

Retrieve a list of all Attachments linked to an entity.

| Input                  | Comments                                                 | Default |
| ---------------------- | -------------------------------------------------------- | ------- |
| Attachable Entity Type | The type of the entity that the attachable is linked to. |         |
| Attachable Entity Id   | The id of the entity that the attachable is linked to.   |         |
| Connection             |                                                          |         |

### List Customers

Retrieve a list of all Customers.

| Input          | Comments                                      | Default |
| -------------- | --------------------------------------------- | ------- |
| Fetch All      | Whether to fetch all results or not.          | false   |
| Max Results    | The maximum number of results to return.      |         |
| Start Position | The starting position to return results from. |         |
| Connection     |                                               |         |

### List Invoices

Retrieve a list of all Invoices

| Input          | Comments                                      | Default |
| -------------- | --------------------------------------------- | ------- |
| Fetch All      | Whether to fetch all results or not.          | false   |
| Max Results    | The maximum number of results to return.      |         |
| Start Position | The starting position to return results from. |         |
| Connection     |                                               |         |

### List Purchase Orders

Retrieve a list of all Purchase Orders

| Input          | Comments                                      | Default |
| -------------- | --------------------------------------------- | ------- |
| Fetch All      | Whether to fetch all results or not.          | false   |
| Max Results    | The maximum number of results to return.      |         |
| Start Position | The starting position to return results from. |         |
| Connection     |                                               |         |

### List Refund Receipts

Retrieve a list of all Refund Receipts

| Input          | Comments                                      | Default |
| -------------- | --------------------------------------------- | ------- |
| Fetch All      | Whether to fetch all results or not.          | false   |
| Max Results    | The maximum number of results to return.      |         |
| Start Position | The starting position to return results from. |         |
| Connection     |                                               |         |

### Query Resource

Query a QuickBooks resource using their SQL-like data query language

| Input             | Comments                                                                                                       | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                |         |
| Query String      | Must be a valid query string as defined by the QuickBooks API. Single quotes must be escaped with a backslash. |         |
| API Minor Version | Provide the version of the API you would like to use.                                                          |         |

### Raw Request

Send raw HTTP request to QuickBooks

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                                                               |         |
| URL                     | Input the path only (/invoice), The base URL is already included (https://quickbooks.api.intuit.com/v3/company/1234567890 for production or https://sandbox-quickbooks.api.intuit.com/v3/company/1234567890 for sandbox). For example, to connect to https://quickbooks.api.intuit.com/v3/company/1234567890/invoice, only /invoice is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                                       |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                                                     |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                          |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                              |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                                                        |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                                           |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                                                   |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                                                      | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                                           |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                                           | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                                              | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                                                 | false   |

### Read an Attachable

Read one attachable

| Input             | Comments                                              | Default |
| ----------------- | ----------------------------------------------------- | ------- |
| Connection        |                                                       |         |
| Attachable Id     | The unique identifier of the attachment               |         |
| API Minor Version | Provide the version of the API you would like to use. | 75      |

### Send a refund receipt

send an existing Refund Receipt to the email saved in QuickBooks

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Receipt Id | Provide a value for the Id of the receipt. |         |

### Send a refund receipt

Send an existing Refund Receipt in QuickBooks to any email

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection |                                               |         |
| Receipt Id | Provide a value for the Id of the receipt.    |         |
| Email      | Provide a valid email to send the receipt to. |         |

### Update Attachable

Update any of the writable fields of an existing attachable object.

| Input               | Comments                                                                                                                                                                                                                                 | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                          |         |
| Update Request Body | The request body must include all writable fields of the existing object as returned in a read response. Writable fields omitted from the request body are set to NULL. The ID of the object to update is specified in the request body. |         |
| API Minor Version   | Provide the version of the API you would like to use.                                                                                                                                                                                    | 75      |

### Update Purchase Order

Update an existing Purchase Order

| Input             | Comments                                                                                                                                                                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                                                           |         |
| Purchase Order Id | The id of the purchase order to update.                                                                                                                                                                                                   |         |
| Sync Token        | The Sync Token of a resource in QuickBooks                                                                                                                                                                                                |         |
| Base Record       | Reference the existing record (from 'Get Resource' or other action) or desired base record; QuickBooks only does 'full' updates and treats unspecified keys as clearing out that field                                                    |         |
| AP Account ID     | The AP account to which the bill is credited                                                                                                                                                                                              |         |
| Vendor ID         | The Vendor referenced in this transaction                                                                                                                                                                                                 |         |
| Lines             | Data representing line items of Purchase Orders; see 'Line' in QuickBooks' docs at https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder#create-a-purchase-order                                  |         |
| Dynamic Fields    | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable.                                                                                                                             |         |
| Optional Values   | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |

### Update refund receipt

Update the contents of an existing Refund Receipt in QuickBooks

| Input              | Comments                                                                                                                                                                                                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection         |                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Sync Token         | The Sync Token of a resource in QuickBooks                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Total Amount       | Provide a value for the total amount on the receipt.                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Receipt Id         | Provide a value for the Id of the receipt.                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Line Items         | For each list item, provide a JavaScript Object that represents an individual line item. Please follow the shape provided in the example. For more information on the line item object refer to the QuickBooks documentation: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt | <code>[<br /> {<br /> Description: "Refund - Pest control was ineffective",<br /> DetailType: "SalesItemLineDetail",<br /> SalesItemLineDetail: {<br /> TaxCodeRef: {<br /> value: "NON",<br /> },<br /> Qty: 2.5,<br /> UnitPrice: 35,<br /> ItemRef: {<br /> name: "Pest Control",<br /> value: "10",<br /> },<br /> },<br /> LineNum: 1,<br /> Amount: 87.5,<br /> Id: "1",<br /> },<br /> {<br /> DetailType: "SubTotalLineDetail",<br /> Amount: 87.5,<br /> SubTotalLineDetail: {},<br /> },<br /> ]</code> |
| Billing Line 4     | Provide a value for line 4 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 3     | Provide a value for line 3 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 2     | Provide a value for line 2 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 1     | Provide a value for line 1 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Address Id | Provide the unique identifier of the billing address.                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Latitude   | Provide a value for the latitude of the billing address.                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Longitude  | Provide a value for the longitude of the billing address.                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Optional Values    | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value.                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Custom Fields      | Specify any optional custom fields to be attached. A custom field is a JavaScript Object that consists of a DefinitionId: String, Type: String, and Name: String. If you don't want to supply any custom fields, simply provide an empty JavaScript Array []                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Update Resource

Updates a Resource in QuickBooks

| Input               | Comments                                                                                                                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                       |         |
| Resource Attributes | A list of attributes used to create a resource in QuickBooks. For more information refer to https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer. |         |
| Resource Type       |                                                                                                                                                                                       |         |
| Sync Token          | The Sync Token of a resource in QuickBooks                                                                                                                                            |         |
| Id                  | The Primary ID of a resource in QuickBooks                                                                                                                                            |         |
| Resource Data       | An optional full map of the resource data                                                                                                                                             |         |

### Upload Attachment

Upload one attachment

| Input                  | Comments                                                                                                                                                                                                                                                                     | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                                                                                              |         |
| File                   | File to attach. This should be a reference to a previous step                                                                                                                                                                                                                |         |
| File Name              | FileName of the attachment                                                                                                                                                                                                                                                   |         |
| Entity Reference Value | Object reference to which this attachment is linked. Set this value with the Id of the target object as returned in its response body when queried.                                                                                                                          |         |
| Entity Reference Type  | Object reference to which this attachment is linked. Set this value with the specific type of the target object.                                                                                                                                                             |         |
| Note                   | The note is either related to the attachment specified with the FileName attribute, or as a standalone note. Required for note attachments.                                                                                                                                  |         |
| API Minor Version      | Provide the version of the API you would like to use.                                                                                                                                                                                                                        | 75      |
| File Type              | The file type of the attachment                                                                                                                                                                                                                                              |         |
| Include on Send        | Used when Entity Reference Type references a transaction object. This field indicates whether or not the attachment is sent with the transaction when Save and Send button is clicked in the QuickBooks UI or when the Send endpoint (send email) is invoked for the object. | false   |

### Void Invoice

Voids an Invoice

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Invoice Id | The id of the invoice to void.             |         |
| Sync Token | The Sync Token of a resource in QuickBooks |         |
