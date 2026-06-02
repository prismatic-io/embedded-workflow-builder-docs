---
title: QuickBooks Connector
sidebar_label: QuickBooks
description: Create and manage customers and invoices within Intuit QuickBooks
---

![QuickBooks](./assets/quickbooks.png#connector-icon)
[QuickBooks](https://quickbooks.intuit.com/) is an accounting and payment platform for individuals and businesses.
This component allows generating invoices, managing customers, and more within the QuickBooks platform.

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

### New and Updated Records {#pollchangestrigger}

Polls QuickBooks Online's Query API for entity records modified at or after the last poll. Records with `Metadata.CreateTime` after the last poll go to the `created` bucket; older records modified since the last poll go to `updated`.

| Input                | Comments                                                                                                       | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The QuickBooks connection to use.                                                                              |         |
| Resource Type        | The QuickBooks entity type to poll for changes.                                                                |         |
| Show New Records     | When enabled, records with `Metadata.CreateTime` after the last poll are included in the `created` bucket.     | true    |
| Show Updated Records | When enabled, records modified after the last poll (but created earlier) are included in the `updated` bucket. | true    |

## Actions

### Batch Request {#batchrequest}

Perform a batch request against the QuickBooks API.

| Input               | Comments                                                                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The QuickBooks connection to use.                                                                                                                                   |         |
| Batch Request Items | An array of batch request items to be executed; see https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/batch for detailed information. |         |

### Create Invoice {#createinvoicev2}

Create a new invoice using individual field inputs.

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Default |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The QuickBooks connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Customer ID              | The ID of the customer to attach to the receipt.                                                                                                                                                                                                                                                                                                                                                                                                                           |         |
| Line Items               | A JSON array of line item objects. Each line item requires a DetailType, Amount, and a detail object matching the type. The most common type is "SalesItemLineDetail" with ItemRef (value is the item ID), Qty, and UnitPrice. Add multiple objects to the array for multiple line items. See [QuickBooks documentation](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt) for all supported line types. |         |
| Customer Name            | The name of the customer that will show on the receipt.                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Custom Fields            | A JSON array of custom field objects. Each object requires DefinitionId (the custom field ID), Type (e.g., "StringType"), and Name (the field label). Leave empty if no custom fields are needed.                                                                                                                                                                                                                                                                          |         |
| Bill Email               | The email address to send the invoice to.                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Bill Email CC            | The CC email address for the invoice.                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| Bill Email BCC           | The BCC email address for the invoice.                                                                                                                                                                                                                                                                                                                                                                                                                                     |         |
| Due Date                 | The due date of the invoice in YYYY-MM-DD format.                                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Invoice Date             | The transaction date of the invoice in YYYY-MM-DD format.                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Document Number          | The reference number for the invoice.                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| Customer Memo            | A memo that appears on the invoice sent to the customer.                                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Private Note             | An internal note that is not visible to the customer.                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| Sales Term ID            | The ID of the sales term (e.g., Net 30) to apply to the invoice.                                                                                                                                                                                                                                                                                                                                                                                                           |         |
| Apply Tax After Discount | When true, applies tax after discount is calculated.                                                                                                                                                                                                                                                                                                                                                                                                                       | false   |
| Billing Address Line 1   | Line 1 of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Billing Address Line 2   | Line 2 of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Billing City             | The city of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                           |         |
| Billing State            | The state or province of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| Billing Postal Code      | The postal code of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Shipping Address Line 1  | Line 1 of the shipping address.                                                                                                                                                                                                                                                                                                                                                                                                                                            |         |
| Shipping Address Line 2  | Line 2 of the shipping address.                                                                                                                                                                                                                                                                                                                                                                                                                                            |         |
| Shipping City            | The city of the shipping address.                                                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Shipping State           | The state or province of the shipping address.                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Shipping Postal Code     | The postal code of the shipping address.                                                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Dynamic Fields           | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable.                                                                                                                                                                                                                                                                                                                                                              |         |
| Optional Values          | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value.                                                                                                                                                                                                                                  |         |

### Create Invoice (JSON) {#createinvoice}

Create an invoice by providing a raw JSON payload matching the QuickBooks API schema.

| Input      | Comments                                                    | Default |
| ---------- | ----------------------------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.                           |         |
| Data       | A string of JSON data that represents a QuickBooks invoice. |         |

### Create Item {#createnoninventoryitem}

Create a new non-inventory item in QuickBooks.

| Input                   | Comments                                           | Default |
| ----------------------- | -------------------------------------------------- | ------- |
| Connection              | The QuickBooks connection to use.                  |         |
| Non-Inventory Item Data | The attributes of the non-inventory item to create |         |
| API Minor Version       | The minor version of the QuickBooks API to use.    |         |

### Create Note Attachment {#createnoteattachment}

Attach a note to an object.

| Input                  | Comments                                                                                                                                                                                                                                                        | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The QuickBooks connection to use.                                                                                                                                                                                                                               |         |
| Entity Reference Value | Object reference to which this attachment is linked. Set this value with the ID of the target object as returned in its response body when queried.                                                                                                             |         |
| Entity Reference Type  | Object reference to which this attachment is linked. Set this value with the specific type of the target object.                                                                                                                                                |         |
| Note                   | The note is either related to the attachment specified with the FileName attribute, or as a standalone note. Required for note attachments.                                                                                                                     |         |
| API Minor Version      | The minor version of the QuickBooks API to use.                                                                                                                                                                                                                 | 75      |
| Include on Send        | Used when Entity Reference Type references a transaction object. This field indicates whether or not the attachment is sent with the transaction when Save and Send button is clicked in the QuickBooks UI or when the Send endpoint is invoked for the object. | false   |

### Create Purchase Order {#createpurchaseorder}

Create a new Purchase Order.

| Input           | Comments                                                                                                                                                                                                                                  | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The QuickBooks connection to use.                                                                                                                                                                                                         |         |
| AP Account ID   | The AP account to which the bill is credited.                                                                                                                                                                                             |         |
| Vendor ID       | The vendor referenced in this transaction.                                                                                                                                                                                                |         |
| Lines           | Data representing line items of purchase orders. See 'Line' in QuickBooks' docs at https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder#create-a-purchase-order.                                 |         |
| Dynamic Fields  | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable.                                                                                                                             |         |
| Optional Values | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |

### Create Refund Receipt {#createrefundreceipt}

Create a new Refund Receipt in QuickBooks.

| Input              | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Default                                                                                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection         | The QuickBooks connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                  |
| Line Items         | A JSON array of line item objects. Each line item requires a DetailType, Amount, and a detail object matching the type. The most common type is "SalesItemLineDetail" with ItemRef (value is the item ID), Qty, and UnitPrice. Add multiple objects to the array for multiple line items. See [QuickBooks documentation](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt) for all supported line types. | <code>[{<br /> "DetailType": "SalesItemLineDetail",<br /> "Amount": 400.0,<br /> "SalesItemLineDetail": {<br /> "ItemRef": {<br /> "value": "21"<br /> }<br /> }<br /> }]</code> |
| Custom Fields      | A JSON array of custom field objects. Each object requires DefinitionId (the custom field ID), Type (e.g., "StringType"), and Name (the field label). Leave empty if no custom fields are needed.                                                                                                                                                                                                                                                                          |                                                                                                                                                                                  |
| Optional Values    | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value.                                                                                                                                                                                                                                  |                                                                                                                                                                                  |
| Account Name       | The name of the account to which payment money is deposited. If not specified, payment is applied to the Undeposited Funds account.                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                  |
| Account ID         | The ID of the account to which payment money is deposited. If not specified, payment is applied to the Undeposited Funds account.                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                  |
| Billing Line 4     | Line 4 of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                  |
| Billing Line 3     | Line 3 of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                  |
| Billing Line 2     | Line 2 of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                  |
| Billing Line 1     | Line 1 of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                  |
| Billing Address ID | The unique identifier of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                  |
| Billing Latitude   | The latitude of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                  |
| Billing Longitude  | The longitude of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                  |

### Create Resource {#createresource}

Create a new resource in QuickBooks.

| Input               | Comments                                                                                                                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The QuickBooks connection to use.                                                                                                                                                     |         |
| Resource Attributes | A list of attributes used to create a resource in QuickBooks. For more information refer to https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer. |         |
| Resource Type       | The type of QuickBooks resource to operate on.                                                                                                                                        |         |

### Create Sales Receipt {#createreceipt}

Create a new Sales Receipt in QuickBooks.

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Default |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The QuickBooks connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Line Items               | A JSON array of line item objects. Each line item requires a DetailType, Amount, and a detail object matching the type. The most common type is "SalesItemLineDetail" with ItemRef (value is the item ID), Qty, and UnitPrice. Add multiple objects to the array for multiple line items. See [QuickBooks documentation](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt) for all supported line types. |         |
| Custom Fields            | A JSON array of custom field objects. Each object requires DefinitionId (the custom field ID), Type (e.g., "StringType"), and Name (the field label). Leave empty if no custom fields are needed.                                                                                                                                                                                                                                                                          |         |
| Apply Tax After Discount | When true, applies tax after discount is calculated.                                                                                                                                                                                                                                                                                                                                                                                                                       | false   |
| Create Time              | The date and time when the record was created in ISO 8601 format.                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Customer ID              | The ID of the customer to attach to the receipt.                                                                                                                                                                                                                                                                                                                                                                                                                           |         |
| Customer Name            | The name of the customer that will show on the receipt.                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Account Name             | The name of the account to which payment money is deposited. If not specified, payment is applied to the Undeposited Funds account.                                                                                                                                                                                                                                                                                                                                        |         |
| Account ID               | The ID of the account to which payment money is deposited. If not specified, payment is applied to the Undeposited Funds account.                                                                                                                                                                                                                                                                                                                                          |         |
| Payment Method ID        | The ID of the payment method associated with this transaction.                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Payment Method Name      | The name of the payment method associated with this transaction.                                                                                                                                                                                                                                                                                                                                                                                                           |         |

### Delete Attachable {#deleteattachable}

Delete an attachable object.

| Input              | Comments                                                                                                                                                   | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The QuickBooks connection to use.                                                                                                                          |         |
| Attachable Payload | The full payload of the attachable as returned in a read response. Could be a reference from a previously executed "Read Attachable" action response data. |         |
| API Minor Version  | The minor version of the QuickBooks API to use.                                                                                                            | 75      |

### Delete Purchase Order {#deletepurchaseorder}

Delete an existing Purchase Order.

| Input             | Comments                                        | Default |
| ----------------- | ----------------------------------------------- | ------- |
| Connection        | The QuickBooks connection to use.               |         |
| Purchase Order ID | The id of the purchase order to delete.         |         |
| Sync Token        | The sync token of the purchase order to delete. |         |

### Delete Refund Receipt {#deleterefundreceipt}

Delete an existing Refund Receipt in QuickBooks.

| Input      | Comments                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.                                                                   |         |
| Sync Token | The sync token of the resource, used for optimistic locking to prevent concurrent update conflicts. |         |
| Receipt ID | The unique identifier of the receipt.                                                               |         |

### Download Attachment {#downloadattachment}

Retrieves a temporary download URL to the specified attachableID.

| Input             | Comments                                        | Default |
| ----------------- | ----------------------------------------------- | ------- |
| Connection        | The QuickBooks connection to use.               |         |
| Attachable ID     | The unique identifier of the attachment.        |         |
| API Minor Version | The minor version of the QuickBooks API to use. | 75      |

### Find Resource by ID {#findresource}

Retrieve a resource by ID from QuickBooks.

| Input         | Comments                                       | Default |
| ------------- | ---------------------------------------------- | ------- |
| Connection    | The QuickBooks connection to use.              |         |
| Resource Type | The type of QuickBooks resource to operate on. |         |
| Resource ID   | The primary ID of a resource in QuickBooks.    |         |

### Get Company Info {#getcompanyinfo}

Retrieve information about the company.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The QuickBooks connection to use. |         |

### Get Customer By Display Name {#getcustomerbydisplayname}

Retrieve information about the Customer which matches the given Display Name.

| Input                 | Comments                                        | Default |
| --------------------- | ----------------------------------------------- | ------- |
| Connection            | The QuickBooks connection to use.               |         |
| Customer Display Name | The display name of the customer in QuickBooks. |         |

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

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.     |         |
| Receipt ID | The unique identifier of the receipt. |         |

### Get Refund Receipt as PDF {#getrefundreceiptaspdf}

Retrieve an existing Refund Receipt from QuickBooks as a PDF.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.     |         |
| Receipt ID | The unique identifier of the receipt. |         |

### Get Sales Receipt {#getreceipt}

Retrieve the information and metadata of a Sales Receipt by ID.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.     |         |
| Receipt ID | The unique identifier of the receipt. |         |

### Get Vendor Expenses {#queryvendorexpenses}

Retrieve information about vendor expenses.

| Input        | Comments                                                                                                                                                                                        | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The QuickBooks connection to use.                                                                                                                                                               |         |
| Query Params | Query parameters to filter report results. Available parameters: customer, vendor, end_date, date_macro, class, sort_order, summarize_column_id, department, accounting_method, and start_date. |         |

### List Accounts {#listaccounts}

Retrieve a list of all Accounts.

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Fetch All      | When true, automatically fetches all pages of results using pagination. | false   |
| Max Results    | The maximum number of results to return.                                |         |
| Start Position | The starting position to return results from.                           |         |
| Connection     | The QuickBooks connection to use.                                       |         |

### List Attachments {#listattachments}

Retrieve a list of all Attachments linked to an entity.

| Input                  | Comments                                                 | Default |
| ---------------------- | -------------------------------------------------------- | ------- |
| Attachable Entity Type | The type of the entity that the attachable is linked to. |         |
| Attachable Entity ID   | The ID of the entity that the attachable is linked to.   |         |
| Connection             | The QuickBooks connection to use.                        |         |

### List Customers {#listcustomers}

Retrieve a list of all Customers.

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Fetch All      | When true, automatically fetches all pages of results using pagination. | false   |
| Max Results    | The maximum number of results to return.                                |         |
| Start Position | The starting position to return results from.                           |         |
| Connection     | The QuickBooks connection to use.                                       |         |

### List Invoices {#listinvoices}

Retrieve a list of all Invoices.

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Fetch All      | When true, automatically fetches all pages of results using pagination. | false   |
| Max Results    | The maximum number of results to return.                                |         |
| Start Position | The starting position to return results from.                           |         |
| Connection     | The QuickBooks connection to use.                                       |         |

### List Purchase Orders {#listpurchaseorders}

Retrieve a list of all Purchase Orders.

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Fetch All      | When true, automatically fetches all pages of results using pagination. | false   |
| Max Results    | The maximum number of results to return.                                |         |
| Start Position | The starting position to return results from.                           |         |
| Connection     | The QuickBooks connection to use.                                       |         |

### List Refund Receipts {#listrefundreceipts}

Retrieve a list of all Refund Receipts.

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Fetch All      | When true, automatically fetches all pages of results using pagination. | false   |
| Max Results    | The maximum number of results to return.                                |         |
| Start Position | The starting position to return results from.                           |         |
| Connection     | The QuickBooks connection to use.                                       |         |

### Query Resource {#queryresource}

Query a QuickBooks resource using their SQL-like data query language.

| Input             | Comments                                                                                                       | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The QuickBooks connection to use.                                                                              |         |
| Query String      | Must be a valid query string as defined by the QuickBooks API. Single quotes must be escaped with a backslash. |         |
| API Minor Version | The minor version of the QuickBooks API to use.                                                                |         |

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

| Input             | Comments                                        | Default |
| ----------------- | ----------------------------------------------- | ------- |
| Connection        | The QuickBooks connection to use.               |         |
| Attachable ID     | The unique identifier of the attachment.        |         |
| API Minor Version | The minor version of the QuickBooks API to use. | 75      |

### Send Refund Receipt {#sendrefundreceipt}

Send an existing Refund Receipt to the email saved in QuickBooks.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.     |         |
| Receipt ID | The unique identifier of the receipt. |         |

### Send Refund Receipt to Email {#sendrefundreceipttoemail}

Send an existing Refund Receipt in QuickBooks to any email.

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.             |         |
| Receipt ID | The unique identifier of the receipt.         |         |
| Email      | A valid email address to send the receipt to. |         |

### Update Attachable {#updateattachable}

Update any of the writable fields of an existing attachable object.

| Input               | Comments                                                                                                                                                                                                                                 | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The QuickBooks connection to use.                                                                                                                                                                                                        |         |
| Update Request Body | The request body must include all writable fields of the existing object as returned in a read response. Writable fields omitted from the request body are set to NULL. The ID of the object to update is specified in the request body. |         |
| API Minor Version   | The minor version of the QuickBooks API to use.                                                                                                                                                                                          | 75      |

### Update Purchase Order {#updatepurchaseorder}

Update an existing Purchase Order.

| Input             | Comments                                                                                                                                                                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The QuickBooks connection to use.                                                                                                                                                                                                         |         |
| Purchase Order ID | The id of the purchase order to update.                                                                                                                                                                                                   |         |
| Sync Token        | The sync token of the resource, used for optimistic locking to prevent concurrent update conflicts.                                                                                                                                       |         |
| Base Record       | Reference the existing record (from 'Get Resource' or other action) or desired base record. QuickBooks only does full updates and treats unspecified keys as clearing out that field.                                                     |         |
| AP Account ID     | The AP account to which the bill is credited.                                                                                                                                                                                             |         |
| Vendor ID         | The vendor referenced in this transaction.                                                                                                                                                                                                |         |
| Lines             | Data representing line items of purchase orders. See 'Line' in QuickBooks' docs at https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder#create-a-purchase-order.                                 |         |
| Dynamic Fields    | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable.                                                                                                                             |         |
| Optional Values   | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |

### Update Refund Receipt {#updaterefundreceipt}

Update the contents of an existing Refund Receipt in QuickBooks.

| Input              | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection         | The QuickBooks connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Sync Token         | The sync token of the resource, used for optimistic locking to prevent concurrent update conflicts.                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Total Amount       | The total amount on the receipt.                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Receipt ID         | The unique identifier of the receipt.                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Line Items         | A JSON array of line item objects. Each line item requires a DetailType, Amount, and a detail object matching the type. The most common type is "SalesItemLineDetail" with ItemRef (value is the item ID), Qty, and UnitPrice. Add multiple objects to the array for multiple line items. See [QuickBooks documentation](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt) for all supported line types. | <code>[<br /> {<br /> Description: "Refund - Pest control was ineffective",<br /> DetailType: "SalesItemLineDetail",<br /> SalesItemLineDetail: {<br /> TaxCodeRef: {<br /> value: "NON",<br /> },<br /> Qty: 2.5,<br /> UnitPrice: 35,<br /> ItemRef: {<br /> name: "Pest Control",<br /> value: "10",<br /> },<br /> },<br /> LineNum: 1,<br /> Amount: 87.5,<br /> Id: "1",<br /> },<br /> {<br /> DetailType: "SubTotalLineDetail",<br /> Amount: 87.5,<br /> SubTotalLineDetail: {},<br /> },<br /> ]</code> |
| Billing Line 4     | Line 4 of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 3     | Line 3 of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 2     | Line 2 of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 1     | Line 1 of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Address ID | The unique identifier of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Latitude   | The latitude of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Longitude  | The longitude of the billing address.                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Optional Values    | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value.                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Custom Fields      | A JSON array of custom field objects. Each object requires DefinitionId (the custom field ID), Type (e.g., "StringType"), and Name (the field label). Leave empty if no custom fields are needed.                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Update Resource {#updateresource}

Update a resource in QuickBooks.

| Input               | Comments                                                                                                                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The QuickBooks connection to use.                                                                                                                                                     |         |
| Resource Attributes | A list of attributes used to create a resource in QuickBooks. For more information refer to https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer. |         |
| Resource Type       | The type of QuickBooks resource to operate on.                                                                                                                                        |         |
| Sync Token          | The sync token of the resource, used for optimistic locking to prevent concurrent update conflicts.                                                                                   |         |
| Resource ID         | The primary ID of a resource in QuickBooks.                                                                                                                                           |         |
| Resource Data       | A full map of the resource data to create or update.                                                                                                                                  |         |

### Upload Attachment {#uploadattachment}

Upload an attachment to an object.

| Input                  | Comments                                                                                                                                                                                                                                                        | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The QuickBooks connection to use.                                                                                                                                                                                                                               |         |
| File                   | File to attach. This should be a reference to a previous step.                                                                                                                                                                                                  |         |
| File Name              | The file name of the attachment.                                                                                                                                                                                                                                |         |
| Entity Reference Value | Object reference to which this attachment is linked. Set this value with the ID of the target object as returned in its response body when queried.                                                                                                             |         |
| Entity Reference Type  | Object reference to which this attachment is linked. Set this value with the specific type of the target object.                                                                                                                                                |         |
| Note                   | The note is either related to the attachment specified with the FileName attribute, or as a standalone note. Required for note attachments.                                                                                                                     |         |
| API Minor Version      | The minor version of the QuickBooks API to use.                                                                                                                                                                                                                 | 75      |
| File Type              | The file type of the attachment.                                                                                                                                                                                                                                |         |
| Include on Send        | Used when Entity Reference Type references a transaction object. This field indicates whether or not the attachment is sent with the transaction when Save and Send button is clicked in the QuickBooks UI or when the Send endpoint is invoked for the object. | false   |

### Void Invoice {#voidinvoice}

Void an Invoice.

| Input      | Comments                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection | The QuickBooks connection to use.                                                                   |         |
| Invoice ID | The id of the invoice to void.                                                                      |         |
| Sync Token | The sync token of the resource, used for optimistic locking to prevent concurrent update conflicts. |         |
