---
title: QuickBooks Connector
sidebar_label: QuickBooks
description: Create and manage customers and invoices within Intuit QuickBooks
---

![QuickBooks](./assets/quickbooks.png#connector-icon)
[QuickBooks](https://quickbooks.intuit.com/) is an accounting and payment platform for individuals and businesses.
This component allows you to generate invoices, manage customers, and more within the QuickBooks platform.

## API Documentation

This component was built using the [QuickBooks Online API Documentation](https://developer.intuit.com/app/developer/qbo/docs/get-started)

## Connections

### OAuth 2.0 {#oauth2}

Authenticate using OAuth 2.0.

QuickBooks uses OAuth 2.0 to authenticate requests against the QuickBooks Online API.

#### Prerequisites

- A QuickBooks account with access to the [Intuit Developer Portal](https://developer.intuit.com/)

#### Setup Steps

1. [Create an app](https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0-playground#get-the-access-token) within the Intuit developer portal.
1. When creating the app, enter the OAuth callback URL `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
   1. Consult [QuickBooks OAuth scopes documentation](https://developer.intuit.com/app/developer/qbo/docs/learn/scopes) to determine the proper OAuth Scopes to assign.
1. Once the app has been created, a **Client ID** and **Client Secret** will be provided.

#### Configure the Connection

Create a connection of type **QuickBooks OAuth 2.0** and enter:

- **Client ID** and **Client Secret** from the Intuit developer portal
- **Scopes**: Set to any of the values in [this list](https://developer.intuit.com/app/developer/qbo/docs/learn/scopes)
- **Use Sandbox**: Enable to connect to the [QuickBooks Sandbox](https://developer.intuit.com/app/developer/qbo/docs/develop/sandboxes) for testing without affecting real customer data

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                   | Default                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to request access to QuickBooks resources.                                     | com.intuit.quickbooks.accounting |
| Client ID     | The client ID from the QuickBooks developer console, used to identify the application during OAuth authentication.         |                                  |
| Client Secret | The client secret from the QuickBooks developer console, used to authenticate the application during OAuth token exchange. |                                  |
| Use Sandbox   | When true, requests are sent to the QuickBooks sandbox environment instead of production. Useful for integration testing.  | false                            |

## Triggers

### Entity Change Events {#webhook}

Receive webhook notifications from QuickBooks when entity changes occur.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The QuickBooks connection to use. |         |

## Actions

### Batch Request {#batchrequest}

Perform a batch request against the QuickBooks API.

| Input               | Comments                                                                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The QuickBooks connection to use.                                                                                                                                   |         |
| Batch Request Items | An array of batch request items to be executed; see https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/batch for detailed information. |         |

### Create Invoice {#createinvoice}

Create an Invoice with the specified data.

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.                                   |         |
| Data       | This is a string of JSON data that represents a QuickBooks invoice. |         |

### Create Item {#createnoninventoryitem}

Create a new non-inventory item in QuickBooks.

| Input                   | Comments                                                                                                                | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The QuickBooks connection to use.                                                                                       |         |
| Non-Inventory Item Data | The attributes of the non-inventory item to create                                                                      |         |
| API Minor Version       | The QuickBooks API minor version to use for this request. Controls which API features and response formats are applied. |         |

### Create Note Attachment {#createnoteattachment}

Attach a note to an object.

| Input                  | Comments                                                                                                                                                         | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The QuickBooks connection to use.                                                                                                                                |         |
| Entity Reference Value | Object reference to which this attachment is linked. Set this value with the ID of the target object as returned in its response body when queried.              |         |
| Entity Reference Type  | Object reference to which this attachment is linked. Set this value with the specific type of the target object (e.g., Invoice, Bill, Purchase).                 |         |
| Note                   | The note is either related to the attachment specified with the FileName attribute, or as a standalone note. Required for note attachments.                      |         |
| API Minor Version      | The QuickBooks API minor version to use for this request. Controls which API features and response formats are applied.                                          | 75      |
| Include on Send        | When true, the attachment is sent along with the transaction when the Save and Send button is clicked in the QuickBooks UI or when the Send endpoint is invoked. | false   |

### Create Purchase Order {#createpurchaseorder}

Create a new Purchase Order.

| Input           | Comments                                                                                                                                                                                                                                  | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The QuickBooks connection to use.                                                                                                                                                                                                         |         |
| AP Account ID   | The unique identifier of the accounts payable account to which the bill is credited.                                                                                                                                                      |         |
| Vendor ID       | The unique identifier of the vendor referenced in this transaction.                                                                                                                                                                       |         |
| Lines           | Data representing line items of Purchase Orders; see 'Line' in QuickBooks' docs at https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder#create-a-purchase-order                                  |         |
| Dynamic Fields  | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable.                                                                                                                             |         |
| Optional Values | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |

### Create Refund Receipt {#createrefundreceipt}

Create a new Refund Receipt in QuickBooks.

| Input              | Comments                                                                                                                                                                                                                                                                                                                                         | Default                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection         | The QuickBooks connection to use.                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                  |
| Line Items         | For each list item, provide a JavaScript Object that represents an individual line item. Please follow the shape provided in the example. For more information on the line item object refer to the QuickBooks documentation: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt | <code>[{<br /> "DetailType": "SalesItemLineDetail",<br /> "Amount": 400.0,<br /> "SalesItemLineDetail": {<br /> "ItemRef": {<br /> "value": "21"<br /> }<br /> }<br /> }]</code> |
| Custom Fields      | Specify any optional custom fields to be attached. A custom field is a JavaScript Object that consists of a DefinitionId: String, Type: String, and Name: String. If you don't want to supply any custom fields, simply provide an empty JavaScript Array []                                                                                     |                                                                                                                                                                                  |
| Optional Values    | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value.                                                                                                        |                                                                                                                                                                                  |
| Account Name       | The name of the account to which payment money is deposited. If not specified, payment is applied to the Undeposited Funds account.                                                                                                                                                                                                              |                                                                                                                                                                                  |
| Account ID         | The unique identifier of the account to which payment money is deposited. If not specified, payment is applied to the Undeposited Funds account.                                                                                                                                                                                                 |                                                                                                                                                                                  |
| Billing Line 4     | The fourth line of the billing address, typically used for city, state, and ZIP code.                                                                                                                                                                                                                                                            |                                                                                                                                                                                  |
| Billing Line 3     | The third line of the billing address, typically used for street address or suite information.                                                                                                                                                                                                                                                   |                                                                                                                                                                                  |
| Billing Line 2     | The second line of the billing address, typically used for a business or suite name.                                                                                                                                                                                                                                                             |                                                                                                                                                                                  |
| Billing Line 1     | The first line of the billing address, typically the name or primary address line.                                                                                                                                                                                                                                                               |                                                                                                                                                                                  |
| Billing Address ID | The unique identifier of the billing address.                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                  |
| Billing Latitude   | The latitude coordinate of the billing address.                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                  |
| Billing Longitude  | The longitude coordinate of the billing address.                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                  |

### Create Resource {#createresource}

Create a new resource in QuickBooks.

| Input               | Comments                                                                                                                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The QuickBooks connection to use.                                                                                                                                                     |         |
| Resource Attributes | A list of attributes used to create a resource in QuickBooks. For more information refer to https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer. |         |
| Resource Type       | The type of QuickBooks resource to operate on.                                                                                                                                        |         |

### Create Sales Receipt {#createreceipt}

Create a new Sales Receipt in QuickBooks.

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                         | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The QuickBooks connection to use.                                                                                                                                                                                                                                                                                                                |         |
| Line Items               | For each list item, provide a JavaScript Object that represents an individual line item. Please follow the shape provided in the example. For more information on the line item object refer to the QuickBooks documentation: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt |         |
| Custom Fields            | Specify any optional custom fields to be attached. A custom field is a JavaScript Object that consists of a DefinitionId: String, Type: String, and Name: String. If you don't want to supply any custom fields, simply provide an empty JavaScript Array []                                                                                     |         |
| Apply Tax After Discount | When true, tax is calculated on the discounted amount rather than the original amount.                                                                                                                                                                                                                                                           | false   |
| Create Time              | The date and time this record was created. Format: ISO 8601 (e.g., 2014-09-16T14:59:48-07:00).                                                                                                                                                                                                                                                   |         |
| Customer ID              | The unique identifier of the customer to attach to the receipt.                                                                                                                                                                                                                                                                                  |         |
| Customer Name            | The name of the customer that will appear on the receipt.                                                                                                                                                                                                                                                                                        |         |
| Account Name             | The name of the account to which payment money is deposited. If not specified, payment is applied to the Undeposited Funds account.                                                                                                                                                                                                              |         |
| Account ID               | The unique identifier of the account to which payment money is deposited. If not specified, payment is applied to the Undeposited Funds account.                                                                                                                                                                                                 |         |
| Payment Method ID        | The unique identifier of the payment method associated with this transaction.                                                                                                                                                                                                                                                                    |         |
| Payment Method Name      | The name of the payment method associated with this transaction.                                                                                                                                                                                                                                                                                 |         |

### Delete Attachable {#deleteattachable}

Delete an attachable object.

| Input              | Comments                                                                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The QuickBooks connection to use.                                                                                                                             |         |
| Attachable Payload | The full payload of the attachable as returned in a read response. Could be a reference from a previously executed "Read an Attachable" action response data. |         |
| API Minor Version  | The QuickBooks API minor version to use for this request. Controls which API features and response formats are applied.                                       | 75      |

### Delete Purchase Order {#deletepurchaseorder}

Delete an existing Purchase Order.

| Input             | Comments                                        | Default |
| ----------------- | ----------------------------------------------- | ------- |
| Connection        | The QuickBooks connection to use.               |         |
| Purchase Order ID | The id of the purchase order to delete.         |         |
| Sync Token        | The sync token of the purchase order to delete. |         |

### Delete Refund Receipt {#deleterefundreceipt}

Delete an existing Refund Receipt in QuickBooks.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The QuickBooks connection to use.                                                                |         |
| Sync Token | The sync token of a QuickBooks resource, used for optimistic concurrency control during updates. |         |
| Receipt ID | The unique identifier of the refund receipt.                                                     |         |

### Download Attachment {#downloadattachment}

Retrieves a temporary download URL to the specified attachableID.

| Input             | Comments                                                                                                                | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The QuickBooks connection to use.                                                                                       |         |
| Attachable ID     | The unique identifier of the attachment.                                                                                |         |
| API Minor Version | The QuickBooks API minor version to use for this request. Controls which API features and response formats are applied. | 75      |

### Find Resource by ID {#findresource}

Retrieve a resource by ID from QuickBooks.

| Input         | Comments                                                | Default |
| ------------- | ------------------------------------------------------- | ------- |
| Connection    | The QuickBooks connection to use.                       |         |
| Resource Type | The type of QuickBooks resource to operate on.          |         |
| ID            | The primary unique identifier of a QuickBooks resource. |         |

### Get Company Info {#getcompanyinfo}

Retrieve information about the company.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The QuickBooks connection to use. |         |

### Get Customer By Display Name {#getcustomerbydisplayname}

Retrieve information about the Customer which matches the given Display Name.

| Input                 | Comments                                                                  | Default |
| --------------------- | ------------------------------------------------------------------------- | ------- |
| Connection            | The QuickBooks connection to use.                                         |         |
| Customer Display Name | The name shown for the customer in the QuickBooks UI and on transactions. |         |

### Get Customer By ID {#getcustomerbyid}

Retrieve information about the Customer which matches the given ID.

| Input       | Comments                          | Default |
| ----------- | --------------------------------- | ------- |
| Connection  | The QuickBooks connection to use. |         |
| Customer ID | The id of the customer to get.    |         |

### Get Invoice By ID {#getinvoicebyid}

Retrieve information about the Invoice which matches the given ID.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The QuickBooks connection to use. |         |
| Invoice ID | The id of the invoice to get.     |         |

### Get Refund Receipt {#getrefundreceipt}

Retrieve an existing Refund Receipt from QuickBooks.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.            |         |
| Receipt ID | The unique identifier of the refund receipt. |         |

### Get Refund Receipt as PDF {#getrefundreceiptaspdf}

Retrieve an existing Refund Receipt from QuickBooks as a PDF.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.            |         |
| Receipt ID | The unique identifier of the refund receipt. |         |

### Get Sales Receipt {#getreceipt}

Retrieve the information and metadata of a Sales Receipt by ID.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.            |         |
| Receipt ID | The unique identifier of the refund receipt. |         |

### Get Vendor Expenses {#queryvendorexpenses}

Retrieve information about vendor expenses.

| Input        | Comments                                                                                                                                                                                                                                                                                      | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The QuickBooks connection to use.                                                                                                                                                                                                                                                             |         |
| Query Params | Customize the information returned in the report by specifying query parameters with the query. Listed here are the query parameters available for this report: customer, vendor, end_date, date_macro, class, sort_order, summarize_column_id, department, accounting_method, and start_date |         |

### List Accounts {#listaccounts}

Retrieve a list of all Accounts.

| Input          | Comments                                                                                   | Default |
| -------------- | ------------------------------------------------------------------------------------------ | ------- |
| Fetch All      | When true, automatically fetches all pages of results rather than returning a single page. | false   |
| Max Results    | The maximum number of results to return.                                                   |         |
| Start Position | The starting position (1-based) from which to return results in a paginated query.         |         |
| Connection     | The QuickBooks connection to use.                                                          |         |

### List Attachments {#listattachments}

Retrieve a list of all Attachments linked to an entity.

| Input                  | Comments                                                                                            | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Attachable Entity Type | The type of the QuickBooks entity that the attachment is linked to (e.g., purchase, invoice, bill). |         |
| Attachable Entity ID   | The unique identifier of the QuickBooks entity that the attachment is linked to.                    |         |
| Connection             | The QuickBooks connection to use.                                                                   |         |

### List Customers {#listcustomers}

Retrieve a list of all Customers.

| Input          | Comments                                                                                   | Default |
| -------------- | ------------------------------------------------------------------------------------------ | ------- |
| Fetch All      | When true, automatically fetches all pages of results rather than returning a single page. | false   |
| Max Results    | The maximum number of results to return.                                                   |         |
| Start Position | The starting position (1-based) from which to return results in a paginated query.         |         |
| Connection     | The QuickBooks connection to use.                                                          |         |

### List Invoices {#listinvoices}

Retrieve a list of all Invoices.

| Input          | Comments                                                                                   | Default |
| -------------- | ------------------------------------------------------------------------------------------ | ------- |
| Fetch All      | When true, automatically fetches all pages of results rather than returning a single page. | false   |
| Max Results    | The maximum number of results to return.                                                   |         |
| Start Position | The starting position (1-based) from which to return results in a paginated query.         |         |
| Connection     | The QuickBooks connection to use.                                                          |         |

### List Purchase Orders {#listpurchaseorders}

Retrieve a list of all Purchase Orders.

| Input          | Comments                                                                                   | Default |
| -------------- | ------------------------------------------------------------------------------------------ | ------- |
| Fetch All      | When true, automatically fetches all pages of results rather than returning a single page. | false   |
| Max Results    | The maximum number of results to return.                                                   |         |
| Start Position | The starting position (1-based) from which to return results in a paginated query.         |         |
| Connection     | The QuickBooks connection to use.                                                          |         |

### List Refund Receipts {#listrefundreceipts}

Retrieve a list of all Refund Receipts.

| Input          | Comments                                                                                   | Default |
| -------------- | ------------------------------------------------------------------------------------------ | ------- |
| Fetch All      | When true, automatically fetches all pages of results rather than returning a single page. | false   |
| Max Results    | The maximum number of results to return.                                                   |         |
| Start Position | The starting position (1-based) from which to return results in a paginated query.         |         |
| Connection     | The QuickBooks connection to use.                                                          |         |

### Query Resource {#queryresource}

Query a QuickBooks resource using their SQL-like data query language.

| Input             | Comments                                                                                                                | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The QuickBooks connection to use.                                                                                       |         |
| Query String      | Must be a valid query string as defined by the QuickBooks API. Single quotes must be escaped with a backslash.          |         |
| API Minor Version | The QuickBooks API minor version to use for this request. Controls which API features and response formats are applied. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to QuickBooks.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The QuickBooks connection to use.                                                                                                                                                                                                                                                                                                                             |         |
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

### Read Attachable {#readanattachable}

Read an attachable object.

| Input             | Comments                                                                                                                | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The QuickBooks connection to use.                                                                                       |         |
| Attachable ID     | The unique identifier of the attachment.                                                                                |         |
| API Minor Version | The QuickBooks API minor version to use for this request. Controls which API features and response formats are applied. | 75      |

### Send Refund Receipt {#sendrefundreceipt}

Send an existing Refund Receipt to the email saved in QuickBooks.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.            |         |
| Receipt ID | The unique identifier of the refund receipt. |         |

### Send Refund Receipt to Email {#sendrefundreceipttoemail}

Send an existing Refund Receipt in QuickBooks to any email.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.            |         |
| Receipt ID | The unique identifier of the refund receipt. |         |
| Email      | The email address to send the receipt to.    |         |

### Update Attachable {#updateattachable}

Update any of the writable fields of an existing attachable object.

| Input               | Comments                                                                                                                                                                                                                                 | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The QuickBooks connection to use.                                                                                                                                                                                                        |         |
| Update Request Body | The request body must include all writable fields of the existing object as returned in a read response. Writable fields omitted from the request body are set to NULL. The ID of the object to update is specified in the request body. |         |
| API Minor Version   | The QuickBooks API minor version to use for this request. Controls which API features and response formats are applied.                                                                                                                  | 75      |

### Update Purchase Order {#updatepurchaseorder}

Update an existing Purchase Order.

| Input             | Comments                                                                                                                                                                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The QuickBooks connection to use.                                                                                                                                                                                                         |         |
| Purchase Order ID | The id of the purchase order to update.                                                                                                                                                                                                   |         |
| Sync Token        | The sync token of a QuickBooks resource, used for optimistic concurrency control during updates.                                                                                                                                          |         |
| Base Record       | Reference the existing record (from 'Get Resource' or other action) or desired base record; QuickBooks only does 'full' updates and treats unspecified keys as clearing out that field.                                                   |         |
| AP Account ID     | The unique identifier of the accounts payable account to which the bill is credited.                                                                                                                                                      |         |
| Vendor ID         | The unique identifier of the vendor referenced in this transaction.                                                                                                                                                                       |         |
| Lines             | Data representing line items of Purchase Orders; see 'Line' in QuickBooks' docs at https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder#create-a-purchase-order                                  |         |
| Dynamic Fields    | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable.                                                                                                                             |         |
| Optional Values   | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |

### Update Refund Receipt {#updaterefundreceipt}

Update the contents of an existing Refund Receipt in QuickBooks.

| Input              | Comments                                                                                                                                                                                                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection         | The QuickBooks connection to use.                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Sync Token         | The sync token of a QuickBooks resource, used for optimistic concurrency control during updates.                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Total Amount       | The total monetary amount on the receipt.                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Receipt ID         | The unique identifier of the refund receipt.                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Line Items         | For each list item, provide a JavaScript Object that represents an individual line item. Please follow the shape provided in the example. For more information on the line item object refer to the QuickBooks documentation: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt | <code>[<br /> {<br /> Description: "Refund - Pest control was ineffective",<br /> DetailType: "SalesItemLineDetail",<br /> SalesItemLineDetail: {<br /> TaxCodeRef: {<br /> value: "NON",<br /> },<br /> Qty: 2.5,<br /> UnitPrice: 35,<br /> ItemRef: {<br /> name: "Pest Control",<br /> value: "10",<br /> },<br /> },<br /> LineNum: 1,<br /> Amount: 87.5,<br /> Id: "1",<br /> },<br /> {<br /> DetailType: "SubTotalLineDetail",<br /> Amount: 87.5,<br /> SubTotalLineDetail: {},<br /> },<br /> ]</code> |
| Billing Line 4     | The fourth line of the billing address, typically used for city, state, and ZIP code.                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 3     | The third line of the billing address, typically used for street address or suite information.                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 2     | The second line of the billing address, typically used for a business or suite name.                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 1     | The first line of the billing address, typically the name or primary address line.                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Address ID | The unique identifier of the billing address.                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Latitude   | The latitude coordinate of the billing address.                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Longitude  | The longitude coordinate of the billing address.                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Optional Values    | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value.                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Custom Fields      | Specify any optional custom fields to be attached. A custom field is a JavaScript Object that consists of a DefinitionId: String, Type: String, and Name: String. If you don't want to supply any custom fields, simply provide an empty JavaScript Array []                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Update Resource {#updateresource}

Update a resource in QuickBooks.

| Input               | Comments                                                                                                                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The QuickBooks connection to use.                                                                                                                                                     |         |
| Resource Attributes | A list of attributes used to create a resource in QuickBooks. For more information refer to https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer. |         |
| Resource Type       | The type of QuickBooks resource to operate on.                                                                                                                                        |         |
| Sync Token          | The sync token of a QuickBooks resource, used for optimistic concurrency control during updates.                                                                                      |         |
| ID                  | The primary unique identifier of a QuickBooks resource.                                                                                                                               |         |
| Resource Data       | An optional full map of the resource data.                                                                                                                                            |         |

### Upload Attachment {#uploadattachment}

Upload an attachment to an object.

| Input                  | Comments                                                                                                                                                         | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The QuickBooks connection to use.                                                                                                                                |         |
| File                   | The file to attach. This should be a reference to a previous step's output.                                                                                      |         |
| File Name              | The file name of the attachment.                                                                                                                                 |         |
| Entity Reference Value | Object reference to which this attachment is linked. Set this value with the ID of the target object as returned in its response body when queried.              |         |
| Entity Reference Type  | Object reference to which this attachment is linked. Set this value with the specific type of the target object (e.g., Invoice, Bill, Purchase).                 |         |
| Note                   | The note is either related to the attachment specified with the FileName attribute, or as a standalone note. Required for note attachments.                      |         |
| API Minor Version      | The QuickBooks API minor version to use for this request. Controls which API features and response formats are applied.                                          | 75      |
| File Type              | The MIME type of the attachment file.                                                                                                                            |         |
| Include on Send        | When true, the attachment is sent along with the transaction when the Save and Send button is clicked in the QuickBooks UI or when the Send endpoint is invoked. | false   |

### Void Invoice {#voidinvoice}

Void an Invoice.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The QuickBooks connection to use.                                                                |         |
| Invoice ID | The id of the invoice to void.                                                                   |         |
| Sync Token | The sync token of a QuickBooks resource, used for optimistic concurrency control during updates. |         |
