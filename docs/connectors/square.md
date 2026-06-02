---
title: Square Connector
sidebar_label: Square
description: Manage payments, customers, orders, invoices, and team members in Square.
---

![Square](./assets/square.png#connector-icon)
Manage payments, customers, orders, invoices, and team members in Square.

## Connections

### OAuth 2.0 {#oauth2}

Authenticate using OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input              | Comments                                                                                                                                                                                                                             | Default                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| Authorize URL      | The OAuth 2.0 Authorization URL for Square. Select Sandbox for testing or Production for live transactions.                                                                                                                          | https://connect.squareup.com/oauth2/authorize      |
| Token URL          | The OAuth 2.0 Token URL for Square. This must match the environment selected in the Authorize URL.                                                                                                                                   | https://connect.squareup.com/oauth2/token          |
| Scopes             | A space-separated list of OAuth permission scopes. These scopes must be configured in the Square Application. See [Square OAuth Permissions](https://developer.squareup.com/docs/oauth-api/square-permissions) for available scopes. | MERCHANT_PROFILE_READ PAYMENTS_READ PAYMENTS_WRITE |
| Application ID     | The Application ID from the Square Developer Dashboard. Navigate to Applications > [App Name] > Credentials to find this value.                                                                                                      |                                                    |
| Application Secret | The Application Secret from the Square Developer Dashboard. Keep this value secure and never share it publicly.                                                                                                                      |                                                    |
| API Version        | Override the default Square API version (2025-08-20). Leave blank to use the default version. See [Square API Versioning](https://developer.squareup.com/docs/build-basics/versioning-overview) for version details.                 |                                                    |

## Triggers

### New and Updated Payments {#pollchangestrigger}

Fetches Square payments created or updated since the last execution, separated into new and updated buckets.

| Input                | Comments                                                                            | Default |
| -------------------- | ----------------------------------------------------------------------------------- | ------- |
| Connection           | The Square connection to use.                                                       |         |
| Show New Records     | When true, newly created payments are included in the trigger output.               | true    |
| Show Updated Records | When true, payments updated since the last poll are included in the trigger output. | true    |

### Webhook {#squarewebhooktrigger}

Receive and validate webhook requests from Square for manually configured webhook subscriptions.

## Actions

### Batch Change Inventory {#batchchangeinventory}

Applies adjustments and counts to the provided item quantities.

| Input                   | Comments                                                                                                                                                                | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection              | The Square connection to use.                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Idempotency Key         | A unique string that identifies this request to ensure idempotent operations.                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Inventory Changes       | An array of inventory changes in JSON format. See [Square Inventory Changes](https://developer.squareup.com/reference/square/objects/InventoryChange) for change types. | <code>[<br /> {<br /> "type": "PHYSICAL_COUNT",<br /> "physical_count": {<br /> "catalog_object_id": "W62UWFY35CWMYGVWK6TWJDNI",<br /> "state": "IN_STOCK",<br /> "quantity": "10",<br /> "location_id": "LH2G9VFHJRWKR",<br /> "occurred_at": "2024-07-01T00:00:00Z",<br /> "created_at": "2024-07-01T00:00:00Z"<br /> }<br /> },<br /> {<br /> "type": "ADJUSTMENT",<br /> "adjustment": {<br /> "catalog_object_id": "W62UWFY35CWMYGVWK6TWJDNI",<br /> "from_state": "IN_STOCK",<br /> "to_state": "SOLD",<br /> "quantity": "-1",<br /> "location_id": "LH2G9VFHJRWKR",<br /> "occurred_at": "2024-07-01T00:00:00Z",<br /> "created_at": "2024-07-01T00:00:00Z",<br /> "source": {<br /> "product": "SQUARE_POS",<br /> "application_id": "sandbox-sq0idb-example",<br /> "name": "Point of Sale",<br /> "type": "APPLICATION"<br /> }<br /> }<br /> }<br />]</code> |
| Ignore Unchanged Counts | When true, unchanged inventory counts are ignored.                                                                                                                      | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Batch Delete Catalog Objects {#batchdeletecatalogobjects}

Deletes a set of CatalogItems based on the provided list of target IDs and returns a set of successfully deleted IDs in the response.

| Input      | Comments                                                | Default                                                                                                                    |
| ---------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Connection | The Square connection to use.                           |                                                                                                                            |
| Object IDs | Array of catalog object IDs to retrieve in JSON format. | <code>[<br /> "W62UWFY35CWMYGVWK6TWJDNI",<br /> "X73VXGZ46DXNZHXWL7UXKENJ",<br /> "Y84WHHA57EYOAIYWM8VYLOFK"<br />]</code> |

### Batch Retrieve Catalog Objects {#batchretrievecatalogobjects}

Returns a set of objects based on the provided ID.

| Input                   | Comments                                                                                                                                                                                   | Default                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Connection              | The Square connection to use.                                                                                                                                                              |                                                                                                                            |
| Object IDs              | Array of catalog object IDs to retrieve in JSON format.                                                                                                                                    | <code>[<br /> "W62UWFY35CWMYGVWK6TWJDNI",<br /> "X73VXGZ46DXNZHXWL7UXKENJ",<br /> "Y84WHHA57EYOAIYWM8VYLOFK"<br />]</code> |
| Include Related Objects | When true, the response includes additional objects that are related to the requested objects.                                                                                             | false                                                                                                                      |
| Include Deleted Objects | When true, deleted objects are included in the results.                                                                                                                                    | false                                                                                                                      |
| Catalog Version         | The specific version of the catalog objects to include in the response. Used to retrieve historical versions of objects. The value is matched against the CatalogObject version attribute. |                                                                                                                            |

### Batch Retrieve Inventory Counts {#batchretrieveinventorycounts}

Returns current counts for the provided CatalogObjects at the requested Locations.

| Input              | Comments                                                                                                           | Default                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Connection         | The Square connection to use.                                                                                      |                                                                                          |
| Catalog Object IDs | An array of catalog object IDs in JSON format used to filter inventory results.                                    | <code>[<br /> "W62UWFY35CWMYGVWK6TWJDNI",<br /> "X73VXGZ46DXNZHXWL7UXKENJ"<br />]</code> |
| Location IDs       | An array of location IDs in JSON format used to filter results to specific locations.                              | <code>[<br /> "LH2G9VFHJRWKR",<br /> "LK3H8WGIKSMLA"<br />]</code>                       |
| Cursor             | The pagination cursor returned by a previous call to this endpoint.                                                |                                                                                          |
| Limit              | The maximum number of results to return in a single page.                                                          |                                                                                          |
| Updated After      | The timestamp filter used to return results whose calculated_at value is after the given time. Format: RFC 3339.   |                                                                                          |
| States             | An array of inventory states in JSON format used to filter results. Options: IN_STOCK, SOLD, RETURNED_BY_CUSTOMER. | <code>[<br /> "IN_STOCK",<br /> "SOLD"<br />]</code>                                     |

### Batch Retrieve Orders {#batchretrieveorders}

Retrieves a set of orders by their IDs.

| Input       | Comments                                                                                                | Default                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Connection  | The Square connection to use.                                                                           |                                                                                                      |
| Location ID | The unique identifier for the location.                                                                 |                                                                                                      |
| Order IDs   | An array of order IDs to retrieve in JSON format. A maximum of 100 orders can be retrieved per request. | <code>[<br /> "CAISEHUwyPjyk5QFnMR1k5axW5YgAQ",<br /> "CAISEHUwyPjyk5QFnMR1k5axW5YgAB"<br />]</code> |

### Batch Upsert Catalog Objects {#batchupsertcatalogobjects}

Creates or updates up to 10,000 target objects based on the provided list of objects.

| Input           | Comments                                                                                                                                                 | Default                                                                                                                                                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection      | The Square connection to use.                                                                                                                            |                                                                                                                                                                                                                                      |
| Idempotency Key | A unique string that identifies this request to ensure idempotent operations.                                                                            |                                                                                                                                                                                                                                      |
| Batches         | Array of batches containing catalog objects in JSON format. Each batch may contain up to 1,000 objects. Maximum 10,000 objects total across all batches. | <code>[<br /> {<br /> "objects": [<br /> {<br /> "type": "ITEM",<br /> "id": "#coffee-mug",<br /> "item_data": {<br /> "name": "Coffee Mug",<br /> "description": "Ceramic coffee mug"<br /> }<br /> }<br /> ]<br /> }<br />]</code> |

### Cancel Invoice {#cancelinvoice}

Cancels an invoice.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Square connection to use.          |         |
| Invoice ID | The unique identifier for the invoice. |         |

### Cancel Payment {#cancelpayment}

Cancels (voids) a payment.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Square connection to use.          |         |
| Payment ID | The unique identifier for the payment. |         |

### Clone Order {#cloneorder}

Creates a new order, in the DRAFT state, by duplicating an existing order.

| Input           | Comments                                                                      | Default |
| --------------- | ----------------------------------------------------------------------------- | ------- |
| Connection      | The Square connection to use.                                                 |         |
| Order ID        | The unique identifier for the order.                                          |         |
| Idempotency Key | A unique string that identifies this request to ensure idempotent operations. |         |

### Complete Payment {#completepayment}

Completes (captures) a payment.

| Input         | Comments                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Square connection to use.                                                                      |         |
| Payment ID    | The unique identifier for the payment.                                                             |         |
| Version Token | The version token used for optimistic concurrency control. Identifies the current payment version. |         |

### Create Customer {#createcustomer}

Creates a new customer profile.

| Input           | Comments                                                                                                                                                                                 | Default                                                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection      | The Square connection to use.                                                                                                                                                            |                                                                                                                                                                                                                                                                                                    |
| Address         | The customer's mailing address in JSON format. See [Square Address Object](https://developer.squareup.com/reference/square/objects/Address) for field details.                           | <code>{<br /> "address_line_1": "1234 Main Street",<br /> "address_line_2": "Suite 100",<br /> "locality": "San Francisco",<br /> "administrative_district_level_1": "CA",<br /> "postal_code": "94102",<br /> "country": "US",<br /> "first_name": "John",<br /> "last_name": "Doe"<br />}</code> |
| Birthday        | The customer's date of birth. Format: YYYY-MM-DD.                                                                                                                                        |                                                                                                                                                                                                                                                                                                    |
| Company Name    | The name of the company associated with the customer.                                                                                                                                    |                                                                                                                                                                                                                                                                                                    |
| Email Address   | The email address of the customer.                                                                                                                                                       |                                                                                                                                                                                                                                                                                                    |
| Family Name     | The last name of the customer.                                                                                                                                                           |                                                                                                                                                                                                                                                                                                    |
| Given Name      | The first name of the customer.                                                                                                                                                          |                                                                                                                                                                                                                                                                                                    |
| Nickname        | An informal name to associate with the customer.                                                                                                                                         |                                                                                                                                                                                                                                                                                                    |
| Note            | A free-form note to associate with the customer.                                                                                                                                         |                                                                                                                                                                                                                                                                                                    |
| Phone Number    | The phone number of the customer in E.164 format (e.g., +14155552671).                                                                                                                   |                                                                                                                                                                                                                                                                                                    |
| Reference ID    | An optional external reference ID to associate with the customer.                                                                                                                        |                                                                                                                                                                                                                                                                                                    |
| Tax IDs         | Tax identification numbers in JSON format. Only applicable for EU countries. See [Square Tax IDs](https://developer.squareup.com/reference/square/objects/TaxIds) for supported formats. | <code>{<br /> "eu_vat": "IE3426675K"<br />}</code>                                                                                                                                                                                                                                                 |
| Idempotency Key | A unique string that identifies this request to ensure idempotent operations.                                                                                                            |                                                                                                                                                                                                                                                                                                    |

### Create Job {#createjob}

Creates a job in a seller account with a title and tip eligibility.

| Input           | Comments                                                                  | Default |
| --------------- | ------------------------------------------------------------------------- | ------- |
| Connection      | The Square connection to use.                                             |         |
| Job Title       | The designation for the job role (for example, Cashier, Server, Manager). |         |
| Idempotency Key | A unique string that identifies this CreateJob request.                   |         |
| Is Tip Eligible | When true, employees in this job role are eligible to receive tips.       | true    |

### Create Order {#createorder}

Creates a new order.

| Input        | Comments                                                                                                                                              | Default                                                                                                                                                                                                                                                                                                                                  |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection   | The Square connection to use.                                                                                                                         |                                                                                                                                                                                                                                                                                                                                          |
| Location ID  | The unique identifier for the location.                                                                                                               |                                                                                                                                                                                                                                                                                                                                          |
| Order Object | The complete order object in JSON format. See [Square Order Object](https://developer.squareup.com/reference/square/objects/Order) for field details. | <code>{<br /> "idempotency_key": "a7c8e4b1-3f5d-4e2a-9c1b-7d3e5f8a2c6b",<br /> "order": {<br /> "location_id": "LH2G9VFHJRWKR",<br /> "line_items": [<br /> {<br /> "name": "Coffee Mug",<br /> "quantity": "1",<br /> "base_price_money": {<br /> "amount": 1500,<br /> "currency": "USD"<br /> }<br /> }<br /> ]<br /> }<br />}</code> |

### Create Payment {#createpayment}

Creates a payment using the provided source.

| Input        | Comments                                                                                                                                                                                   | Default                                                                                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection   | The Square connection to use.                                                                                                                                                              |                                                                                                                                                                                                                                                     |
| Payment Data | Payment data in JSON format. Amounts are in cents (smallest currency unit). See [Square Create Payment](https://developer.squareup.com/docs/payments-api/take-payments) for field details. | <code>{<br /> "source_id": "cnon:card-nonce-ok",<br /> "idempotency_key": "a7c8e4b1-3f5d-4e2a-9c1b-7d3e5f8a2c6b",<br /> "amount_money": {<br /> "amount": 1500,<br /> "currency": "USD"<br /> },<br /> "location_id": "LH2G9VFHJRWKR"<br />}</code> |

### Create Team Member {#createteammember}

Creates a new team member.

| Input           | Comments                                                                                                                                                   | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Square connection to use.                                                                                                                              |         |
| Team Member     | The team member data in JSON format. See [Square TeamMember Object](https://developer.squareup.com/reference/square/objects/TeamMember) for field details. |         |
| Idempotency Key | A unique string that identifies this request to ensure idempotent operations.                                                                              |         |

### Create Webhook Subscription {#createwebhooksubscription}

Creates a webhook subscription.

| Input                | Comments                                                                                                                                                                         | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Square connection to use.                                                                                                                                                    |         |
| Idempotency Key      | A unique string that identifies this request to ensure idempotent operations.                                                                                                    |         |
| Webhook Subscription | The webhook subscription data in JSON format. See [Square Webhook Subscription](https://developer.squareup.com/docs/webhooks-api/subscribe-to-events) for configuration details. |         |

### Delete Catalog Object {#deletecatalogobject}

Deletes a single CatalogObject based on the provided ID and returns the set of successfully deleted IDs in the response.

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Square connection to use.                 |         |
| Object ID  | The unique identifier for the catalog object. |         |

### Delete Customer {#deletecustomer}

Deletes a customer profile from a business.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Square connection to use.           |         |
| Customer ID | The unique identifier for the customer. |         |

### Delete Instance Webhooks {#deleteinstancewebhooks}

Deletes all webhooks that point to a flow in this instance.

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Square connection to use. |         |

### Delete Invoice {#deleteinvoice}

Deletes an invoice.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Square connection to use.          |         |
| Invoice ID | The unique identifier for the invoice. |         |

### Delete Webhook Subscription {#deletewebhooksubscription}

Deletes a webhook subscription.

| Input           | Comments                                                      | Default |
| --------------- | ------------------------------------------------------------- | ------- |
| Connection      | The Square connection to use.                                 |         |
| Subscription ID | The unique identifier for the webhook subscription to delete. |         |

### Get Invoice {#getinvoice}

Retrieves an invoice by its ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Square connection to use.          |         |
| Invoice ID | The unique identifier for the invoice. |         |

### Get Payment {#getpayment}

Retrieves details for a specific payment.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Square connection to use.          |         |
| Payment ID | The unique identifier for the payment. |         |

### Get Payment Refund {#getpaymentrefund}

Retrieves a specific refund using the refund_id.

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Square connection to use.                 |         |
| Refund ID  | The unique identifier for the payment refund. |         |

### List Catalog {#listcatalog}

Returns a list of all CatalogObjects of the specified types in the catalog.

| Input           | Comments                                                                                                                                                                                                                            | Default                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Connection      | The Square connection to use.                                                                                                                                                                                                       |                                                                               |
| Cursor          | The pagination cursor returned by a previous call to this endpoint.                                                                                                                                                                 |                                                                               |
| Types           | An optional case-insensitive, comma-separated list of object types to retrieve. Valid values are defined in the CatalogObjectType enum, for example, ITEM, ITEM_VARIATION, CATEGORY, DISCOUNT, TAX, MODIFIER, MODIFIER_LIST, IMAGE. | ITEM, ITEM_VARIATION, CATEGORY, DISCOUNT, TAX, MODIFIER, MODIFIER_LIST, IMAGE |
| Catalog Version | The specific version of the catalog objects to include in the response. Used to retrieve historical versions of objects. The value is matched against the CatalogObject version attribute.                                          |                                                                               |

### List Customers {#listcustomers}

Lists customer profiles associated with a Square account.

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The Square connection to use.                                       |         |
| Cursor     | The pagination cursor returned by a previous call to this endpoint. |         |
| Limit      | The maximum number of results to return in a single page.           |         |
| Sort Field | The field used to sort the results.                                 |         |
| Sort Order | The order in which results are sorted.                              |         |

### List Invoices {#listinvoices}

Returns a list of invoices for a given location.

| Input       | Comments                                                            | Default |
| ----------- | ------------------------------------------------------------------- | ------- |
| Connection  | The Square connection to use.                                       |         |
| Location ID | The unique identifier for the location.                             |         |
| Cursor      | The pagination cursor returned by a previous call to this endpoint. |         |
| Limit       | The maximum number of results to return in a single page.           |         |

### List Jobs {#listjobs}

Lists jobs in a seller account, sorted by title in ascending order.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Square connection to use.                                                  |         |
| Fetch All  | When true, automatically fetches all pages of results using cursor pagination. | false   |
| Cursor     | The pagination cursor returned by a previous call to this endpoint.            |         |

### List Locations {#listlocations}

Lists all of the seller's locations, including those with an inactive status.

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Square connection to use. |         |

### List Payment Refunds {#listpaymentrefunds}

Retrieves a list of refunds for the account making the request.

| Input       | Comments                                                                                                    | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Square connection to use.                                                                               |         |
| Begin Time  | The timestamp marking the start of the time range. Format: RFC 3339.                                        |         |
| Location ID | The unique identifier for the location.                                                                     |         |
| Cursor      | The pagination cursor returned by a previous call to this endpoint.                                         |         |
| Limit       | The maximum number of results to return in a single page.                                                   |         |
| End Time    | The end of the time range used to retrieve payments. Filtered using the created_at field. Format: RFC 3339. |         |
| Sort Order  | The order in which results are sorted.                                                                      |         |
| Status      | When provided, only refunds with the given status are returned.                                             |         |
| Source Type | When provided, only refunds whose payments have the indicated source type are returned.                     |         |

### List Payments {#listpayments}

Retrieves a list of payments taken by the account making the request.

| Input                 | Comments                                                                                                    | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Square connection to use.                                                                               |         |
| Begin Time            | The timestamp marking the start of the time range. Format: RFC 3339.                                        |         |
| Location ID           | The unique identifier for the location.                                                                     |         |
| Cursor                | The pagination cursor returned by a previous call to this endpoint.                                         |         |
| Limit                 | The maximum number of results to return in a single page.                                                   |         |
| End Time              | The end of the time range used to retrieve payments. Filtered using the created_at field. Format: RFC 3339. |         |
| Sort Order            | The order in which results are sorted.                                                                      |         |
| Total                 | The exact payment amount in cents (smallest currency unit). For example, 1500 for $15.00.                   |         |
| Last 4 Digits of Card | The last four digits of the payment card used.                                                              |         |
| Card Brand            | The brand of the payment card (for example, VISA, MASTERCARD, AMEX).                                        |         |

### List Webhook Subscriptions {#listwebhooksubscriptions}

Lists all webhook subscriptions owned by your application.

| Input            | Comments                                                                                                            | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Square connection to use.                                                                                       |         |
| Cursor           | The pagination cursor returned by a previous call to this endpoint.                                                 |         |
| Limit            | The maximum number of results to return in a single page.                                                           |         |
| Include Disabled | When true, disabled subscriptions are included in the results. By default, only enabled subscriptions are returned. | false   |
| Sort Order       | The sort order for subscriptions by creation date. Options: ASC (oldest first), DESC (newest first).                |         |

### Publish Invoice {#publishinvoice}

Publishes an invoice.

| Input           | Comments                                                                      | Default |
| --------------- | ----------------------------------------------------------------------------- | ------- |
| Connection      | The Square connection to use.                                                 |         |
| Invoice ID      | The unique identifier for the invoice.                                        |         |
| Idempotency Key | A unique string that identifies this request to ensure idempotent operations. |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the Square API.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| URL                     | This is the URL to call.                                                                                                                                                                         |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |
| Connection              | The Square connection to use.                                                                                                                                                                    |         |

### Refund Payment {#refundpayment}

Refunds a payment. You can refund the entire payment amount or a portion of it.

| Input           | Comments                                                                                                                               | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Square connection to use.                                                                                                          |         |
| Payment ID      | The unique identifier for the payment.                                                                                                 |         |
| Idempotency Key | A unique string that identifies this request to ensure idempotent operations.                                                          |         |
| Refund Amount   | The refund amount in JSON format. Amount is in cents (smallest currency unit). Cannot exceed the payment total minus previous refunds. |         |
| Reason          | A description of the reason for the refund.                                                                                            |         |

### Retrieve Catalog Object {#retrievecatalogobject}

Returns a single CatalogObject based on the provided ID.

| Input                   | Comments                                                                                                                                                                                   | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Square connection to use.                                                                                                                                                              |         |
| Object ID               | The unique identifier for the catalog object.                                                                                                                                              |         |
| Include Related Objects | When true, the response includes additional objects that are related to the requested objects.                                                                                             | false   |
| Catalog Version         | The specific version of the catalog objects to include in the response. Used to retrieve historical versions of objects. The value is matched against the CatalogObject version attribute. |         |

### Retrieve Customer {#retrievecustomer}

Retrieves details for a single customer.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Square connection to use.           |         |
| Customer ID | The unique identifier for the customer. |         |

### Retrieve Job {#retrievejob}

Retrieves a specified job by ID.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The Square connection to use.      |         |
| Job ID     | The unique identifier for the job. |         |

### Retrieve Location {#retrievelocation}

Retrieves details of a specific location.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Square connection to use.           |         |
| Location ID | The unique identifier for the location. |         |

### Retrieve Order {#retrieveorder}

Retrieves an Order by its ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Square connection to use.        |         |
| Order ID   | The unique identifier for the order. |         |

### Retrieve Team Member {#retrieveteammember}

Retrieves a team member based on the provided ID.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Square connection to use.              |         |
| Team Member ID | The unique identifier for the team member. |         |

### Retrieve Webhook Subscription {#retrievewebhooksubscription}

Retrieves a webhook subscription identified by its ID.

| Input           | Comments                                            | Default |
| --------------- | --------------------------------------------------- | ------- |
| Connection      | The Square connection to use.                       |         |
| Subscription ID | The unique identifier for the webhook subscription. |         |

### Search Catalog Items {#searchcatalogitems}

Searches for catalog items or item variations by matching supported search attribute values, including custom attribute values, against one or more of the specified query filters.

| Input                    | Comments                                                                                                 | Default                                                                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection               | The Square connection to use.                                                                            |                                                                                                                                                                                          |
| Cursor                   | The pagination cursor returned by a previous call to this endpoint.                                      |                                                                                                                                                                                          |
| Limit                    | The maximum number of results to return in a single page.                                                |                                                                                                                                                                                          |
| Text Filter              | The text filter expression used to return items or item variations containing the specified text.        |                                                                                                                                                                                          |
| Category IDs             | An array of category IDs in JSON format used to filter items by category.                                | <code>[<br /> "W62UWFY35CWMYGVWK6TWJDNI",<br /> "X73VXGZ46DXNZHXWL7UXKENJ"<br />]</code>                                                                                                 |
| Stock Levels             | An array of stock levels in JSON format used to filter items. Options: OUT, LOW.                         | <code>[<br /> "OUT",<br /> "LOW"<br />]</code>                                                                                                                                           |
| Enabled Location IDs     | An array of location IDs in JSON format used to filter items by enabled locations.                       | <code>[<br /> "LH2G9VFHJRWKR",<br /> "LK3H8WGIKSMLA"<br />]</code>                                                                                                                       |
| Sort Order               | The order in which results are sorted.                                                                   |                                                                                                                                                                                          |
| Product Types            | An array of product types in JSON format used to filter items. Options: REGULAR, APPOINTMENTS_SERVICE.   | <code>[<br /> "REGULAR",<br /> "APPOINTMENTS_SERVICE"<br />]</code>                                                                                                                      |
| Custom Attribute Filters | An array of custom attribute filters in JSON format used to match items with specific custom attributes. | <code>[<br /> {<br /> "custom_attribute_definition_id": "W62UWFY35CWMYGVWK6TWJDNI",<br /> "key": "color",<br /> "string_filter": "blue",<br /> "bool_filter": true<br /> }<br />]</code> |

### Search Catalog Objects {#searchcatalogobjects}

Searches for CatalogObject of any type by matching supported search attribute values, excluding custom attribute values on items or item variations, against one or more of the specified query filters.

| Input                   | Comments                                                                                                                                                                    | Default                                                                                                                                                                                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              | The Square connection to use.                                                                                                                                               |                                                                                                                                                                                                                                                                 |
| Object Types            | A comma-separated list of catalog object types to include in the search results. Options: ITEM, CATEGORY, TAX, DISCOUNT, MODIFIER_LIST.                                     |                                                                                                                                                                                                                                                                 |
| Include Deleted Objects | When true, deleted objects are included in the results.                                                                                                                     | false                                                                                                                                                                                                                                                           |
| Include Related Objects | When true, the response includes additional objects that are related to the requested objects.                                                                              | false                                                                                                                                                                                                                                                           |
| Begin Time              | The timestamp marking the start of the time range. Format: RFC 3339.                                                                                                        |                                                                                                                                                                                                                                                                 |
| Catalog Query           | Query to filter or sort catalog results in JSON format. See [Square Catalog Query](https://developer.squareup.com/reference/square/objects/CatalogQuery) for query options. | <code>{<br /> "sorted_attribute_query": {<br /> "attribute_name": "name",<br /> "initial_attribute_value": "A",<br /> "sort_order": "ASC"<br /> },<br /> "exact_query": {<br /> "attribute_name": "type",<br /> "attribute_value": "ITEM"<br /> }<br />}</code> |
| Cursor                  | The pagination cursor returned by a previous call to this endpoint.                                                                                                         |                                                                                                                                                                                                                                                                 |
| Limit                   | The maximum number of results to return in a single page.                                                                                                                   |                                                                                                                                                                                                                                                                 |

### Search Customers {#searchcustomers}

Searches for customer profiles.

| Input      | Comments                                                                                                                                                                      | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection | The Square connection to use.                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Query      | The query to search for customers. See [Square Search Customers](https://developer.squareup.com/docs/customers-api/use-the-api/search-customers) for filter and sort options. | <code>{<br /> "query": {<br /> "filter": {<br /> "creation_source": {<br /> "values": [<br /> "THIRD_PARTY"<br /> ],<br /> "rule": "INCLUDE"<br /> },<br /> "created_at": {<br /> "start_at": "2024-01-01T00:00:00-00:00",<br /> "end_at": "2024-02-01T00:00:00-00:00"<br /> },<br /> "email_address": {<br /> "fuzzy": "example.com"<br /> },<br /> "group_ids": {<br /> "all": [<br /> "JDKYHBWT1D4F8MFH63DBMEN8Y4"<br /> ]<br /> }<br /> },<br /> "sort": {<br /> "field": "CREATED_AT",<br /> "order": "ASC"<br /> }<br /> }<br />}</code> |
| Cursor     | The pagination cursor returned by a previous call to this endpoint.                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Limit      | The maximum number of results to return in a single page.                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Search Invoices {#searchinvoices}

Searches for invoices from a location specified in the filter.

| Input      | Comments                                                                                                                                                                  | Default                                                                                                                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection | The Square connection to use.                                                                                                                                             |                                                                                                                                                                                                                                                              |
| Query      | The query to search for invoices. See [Square Search Invoices](https://developer.squareup.com/reference/square/invoices-api/search-invoices) for filter and sort options. | <code>{<br /> "filter": {<br /> "location_ids": [<br /> "LH2G9VFHJRWKR"<br /> ],<br /> "customer_ids": [<br /> "JDKYHBWT1D4F8MFH63DBMEN8Y4"<br /> ]<br /> },<br /> "sort": {<br /> "field": "INVOICE_SORT_DATE",<br /> "order": "DESC"<br /> }<br />}</code> |
| Cursor     | The pagination cursor returned by a previous call to this endpoint.                                                                                                       |                                                                                                                                                                                                                                                              |
| Limit      | The maximum number of results to return in a single page.                                                                                                                 |                                                                                                                                                                                                                                                              |

### Search Orders {#searchorders}

Searches all orders for one or more locations.

| Input          | Comments                                                                                                                                                          | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection     | The Square connection to use.                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Location IDs   | An array of location IDs in JSON format used to filter results to specific locations.                                                                             | <code>[<br /> "LH2G9VFHJRWKR",<br /> "LK3H8WGIKSMLA"<br />]</code>                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Query          | The query to search for orders. See [Square Search Orders](https://developer.squareup.com/reference/square/orders-api/search-orders) for filter and sort options. | <code>{<br /> "filter": {<br /> "state_filter": {<br /> "states": [<br /> "COMPLETED"<br /> ]<br /> },<br /> "date_time_filter": {<br /> "closed_at": {<br /> "start_at": "2024-01-01T00:00:00+00:00",<br /> "end_at": "2024-12-31T23:59:59+00:00"<br /> }<br /> },<br /> "customer_filter": {<br /> "customer_ids": [<br /> "JDKYHBWT1D4F8MFH63DBMEN8Y4"<br /> ]<br /> }<br /> },<br /> "sort": {<br /> "sort_field": "CLOSED_AT",<br /> "sort_order": "DESC"<br /> }<br />}</code> |
| Return Entries | When true, the entries associated with the orders are returned.                                                                                                   | true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Cursor         | The pagination cursor returned by a previous call to this endpoint.                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Limit          | The maximum number of results to return in a single page.                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Search Team Members {#searchteammembers}

Searches for team members based on the given filters.

| Input        | Comments                                                                                                                                                                        | Default                                                                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection   | The Square connection to use.                                                                                                                                                   |                                                                                                                                                          |
| Search Query | The query parameters to filter team members. See [Square Search Team Members](https://developer.squareup.com/reference/square/team-api/search-team-members) for filter options. | <code>{<br /> "filter": {<br /> "location_ids": [<br /> "LH2G9VFHJRWKR"<br /> ],<br /> "status": "ACTIVE",<br /> "is_owner": false<br /> }<br />}</code> |
| Cursor       | The pagination cursor returned by a previous call to this endpoint.                                                                                                             |                                                                                                                                                          |
| Limit        | The maximum number of results to return in a single page.                                                                                                                       |                                                                                                                                                          |

### Update Customer {#updatecustomer}

Updates a customer profile.

| Input         | Comments                                                                                                                                                                                 | Default                                                                                                                                                                                                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    | The Square connection to use.                                                                                                                                                            |                                                                                                                                                                                                                                                                                                    |
| Customer ID   | The unique identifier for the customer.                                                                                                                                                  |                                                                                                                                                                                                                                                                                                    |
| Address       | The customer's mailing address in JSON format. See [Square Address Object](https://developer.squareup.com/reference/square/objects/Address) for field details.                           | <code>{<br /> "address_line_1": "1234 Main Street",<br /> "address_line_2": "Suite 100",<br /> "locality": "San Francisco",<br /> "administrative_district_level_1": "CA",<br /> "postal_code": "94102",<br /> "country": "US",<br /> "first_name": "John",<br /> "last_name": "Doe"<br />}</code> |
| Birthday      | The customer's date of birth. Format: YYYY-MM-DD.                                                                                                                                        |                                                                                                                                                                                                                                                                                                    |
| Company Name  | The name of the company associated with the customer.                                                                                                                                    |                                                                                                                                                                                                                                                                                                    |
| Email Address | The email address of the customer.                                                                                                                                                       |                                                                                                                                                                                                                                                                                                    |
| Family Name   | The last name of the customer.                                                                                                                                                           |                                                                                                                                                                                                                                                                                                    |
| Given Name    | The first name of the customer.                                                                                                                                                          |                                                                                                                                                                                                                                                                                                    |
| Nickname      | An informal name to associate with the customer.                                                                                                                                         |                                                                                                                                                                                                                                                                                                    |
| Note          | A free-form note to associate with the customer.                                                                                                                                         |                                                                                                                                                                                                                                                                                                    |
| Phone Number  | The phone number of the customer in E.164 format (e.g., +14155552671).                                                                                                                   |                                                                                                                                                                                                                                                                                                    |
| Reference ID  | An optional external reference ID to associate with the customer.                                                                                                                        |                                                                                                                                                                                                                                                                                                    |
| Tax IDs       | Tax identification numbers in JSON format. Only applicable for EU countries. See [Square Tax IDs](https://developer.squareup.com/reference/square/objects/TaxIds) for supported formats. | <code>{<br /> "eu_vat": "IE3426675K"<br />}</code>                                                                                                                                                                                                                                                 |

### Update Invoice {#updateinvoice}

Updates an invoice.

| Input          | Comments                                                                                                                                                    | Default                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection     | The Square connection to use.                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                            |
| Invoice ID     | The unique identifier for the invoice.                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                            |
| Update Invoice | The invoice data to update in JSON format. See [Square Update Invoice](https://developer.squareup.com/docs/invoices-api/update-invoices) for field details. | <code>{<br /> "invoice": {<br /> "version": 1,<br /> "payment_requests": [<br /> {<br /> "uid": "2da7964f-f3d2-4f43-81e8-5aa220bf3355",<br /> "tipping_enabled": false<br /> }<br /> ]<br /> },<br /> "idempotency_key": "4ee82288-0910-499e-ab4c-5d0071dad1be",<br /> "fields_to_clear": [<br /> "payment_requests[2da7964f-f3d2-4f43-81e8-5aa220bf3355].reminders"<br /> ]<br />}</code> |

### Update Job {#updatejob}

Updates the title or tip eligibility of a job. Changes propagate to all job assignments, shifts, and wage settings.

| Input           | Comments                                                                                                                 | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The Square connection to use.                                                                                            |         |
| Job ID          | The unique identifier for the job.                                                                                       |         |
| Job Title       | Updated job title. Only include if changing the title.                                                                   |         |
| Is Tip Eligible | When true, employees in this job role are eligible to receive tips. Only include if changing tip eligibility.            | true    |
| Version         | The version number used for optimistic concurrency control. Ensures the object has not been modified by another request. |         |

### Update Location {#updatelocation}

Updates a location associated with a Square account.

| Input           | Comments                                                                                                                                                      | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection      | The Square connection to use.                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Location ID     | The unique identifier for the location.                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Location Update | The location data to update in JSON format. See [Square Location Object](https://developer.squareup.com/reference/square/objects/Location) for field details. | <code>{<br /> "id": "LH2G9VFHJRWKR",<br /> "name": "Downtown Store",<br /> "address": {<br /> "address_line_1": "1234 Main Street",<br /> "locality": "San Francisco",<br /> "administrative_district_level_1": "CA",<br /> "postal_code": "94102"<br /> },<br /> "timezone": "America/Los_Angeles",<br /> "status": "ACTIVE",<br /> "country": "US",<br /> "language_code": "en-US",<br /> "currency": "USD",<br /> "type": "PHYSICAL",<br /> "description": "Main downtown retail location",<br /> "coordinates": {<br /> "latitude": 37.7749,<br /> "longitude": -122.4194<br /> },<br /> "business_hours": {<br /> "periods": [<br /> {<br /> "day_of_week": "MON",<br /> "start_local_time": "09:00",<br /> "end_local_time": "18:00"<br /> },<br /> {<br /> "day_of_week": "TUE",<br /> "start_local_time": "09:00",<br /> "end_local_time": "18:00"<br /> }<br /> ]<br /> },<br /> "business_name": "Example Business",<br /> "mcc": "5999"<br />}</code> |

### Update Order {#updateorder}

Updates an open order by adding, replacing, or deleting fields.

| Input           | Comments                                                                                                                                              | Default                                                                                                                                                                                                                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection      | The Square connection to use.                                                                                                                         |                                                                                                                                                                                                                                                                                                                                          |
| Order ID        | The unique identifier for the order.                                                                                                                  |                                                                                                                                                                                                                                                                                                                                          |
| Order Object    | The complete order object in JSON format. See [Square Order Object](https://developer.squareup.com/reference/square/objects/Order) for field details. | <code>{<br /> "idempotency_key": "a7c8e4b1-3f5d-4e2a-9c1b-7d3e5f8a2c6b",<br /> "order": {<br /> "location_id": "LH2G9VFHJRWKR",<br /> "line_items": [<br /> {<br /> "name": "Coffee Mug",<br /> "quantity": "1",<br /> "base_price_money": {<br /> "amount": 1500,<br /> "currency": "USD"<br /> }<br /> }<br /> ]<br /> }<br />}</code> |
| Fields to Clear | Array of dot notation paths for fields to clear in JSON format. For example: line_items[uid].note or discounts[uid].                                  | <code>[<br /> "line_items[uid].note",<br /> "discounts[uid]"<br />]</code>                                                                                                                                                                                                                                                               |
| Idempotency Key | A unique string that identifies this request to ensure idempotent operations.                                                                         |                                                                                                                                                                                                                                                                                                                                          |

### Update Payment {#updatepayment}

Updates a payment with the APPROVED status.

| Input      | Comments                                                                                                                                                                                    | Default                                                                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection | The Square connection to use.                                                                                                                                                               |                                                                                                                                                                                |
| Payment ID | The unique identifier for the payment.                                                                                                                                                      |                                                                                                                                                                                |
| Payment    | Payment data in JSON format. Amounts are in cents (smallest currency unit). See [Square Payment Object](https://developer.squareup.com/reference/square/objects/Payment) for field details. | <code>{<br /> "amount_money": {<br /> "amount": 1500,<br /> "currency": "USD"<br /> },<br /> "tip_money": {<br /> "amount": 300,<br /> "currency": "USD"<br /> }<br />}</code> |

### Update Team Member {#updateteammember}

Updates a team member.

| Input          | Comments                                                                                                                                                   | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Square connection to use.                                                                                                                              |         |
| Team Member ID | The unique identifier for the team member.                                                                                                                 |         |
| Team Member    | The team member data in JSON format. See [Square TeamMember Object](https://developer.squareup.com/reference/square/objects/TeamMember) for field details. |         |

### Update Webhook Subscription {#updatewebhooksubscription}

Updates a webhook subscription.

| Input                | Comments                                                                                 | Default                                                                                                                                                                                                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection           | The Square connection to use.                                                            |                                                                                                                                                                                                                                                                         |
| Subscription ID      | The unique identifier for the webhook subscription.                                      |                                                                                                                                                                                                                                                                         |
| Webhook Subscription | The updated webhook subscription data in JSON format. Include only the fields to modify. | <code>{<br /> "name": "Updated Order Webhook",<br /> "enabled": true,<br /> "event_types": [<br /> "order.created",<br /> "order.updated",<br /> "order.fulfilled"<br /> ],<br /> "notification_url": "https://your-webhook-endpoint.com/square/webhooks"<br />}</code> |

### Upsert Catalog Object {#upsertcatalogobject}

Creates a new or updates the specified CatalogObject.

| Input           | Comments                                                                                                                                                  | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection      | The Square connection to use.                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Idempotency Key | A unique string that identifies this request to ensure idempotent operations.                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Catalog Object  | Catalog object data in JSON format. See [Square Catalog Object](https://developer.squareup.com/reference/square/objects/CatalogObject) for field details. | <code>{<br /> "type": "ITEM",<br /> "id": "#temp-item-id",<br /> "item_data": {<br /> "name": "Coffee Mug",<br /> "description": "Ceramic coffee mug - 12oz capacity",<br /> "abbreviation": "MUG",<br /> "category_id": "W62UWFY35CWMYGVWK6TWJDNI",<br /> "variations": [<br /> {<br /> "type": "ITEM_VARIATION",<br /> "id": "#temp-variation-id",<br /> "item_variation_data": {<br /> "item_id": "#temp-item-id",<br /> "name": "Regular",<br /> "pricing_type": "FIXED_PRICING",<br /> "price_money": {<br /> "amount": 1500,<br /> "currency": "USD"<br /> }<br /> }<br /> }<br /> ]<br /> }<br />}</code> |
