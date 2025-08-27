---
title: Square Connector
sidebar_label: Square
description: Square offers a suite of commerce products for retail stores.
---

![Square](./assets/square.png#connector-icon)
Square offers a suite of commerce products for retail stores.

## Connections

### Square OAuth 2.0

Authenticate requests to Square using values obtained from the Developer Console.

Access Tokens are necessary for interacting with the Square API. Access tokens are unique to each application you create on Square.

To generate an access token, you should log in to Square and navigate to your application's page. Within the application settings, you can find your access tokens.

Square provides two types of access tokens:

1. Application Token: This token is used to send requests and perform other application-related actions in Square.
1. Personal Access Token: This token is used to perform account-level actions, such as creating and managing applications.

For your integration, you will need both the Application Token and the Personal Access Token.

For more information about access tokens, refer to the [Square Docs](https://developer.squareup.com/explorer/square).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input              | Comments                                                                            | Default                                            |
| ------------------ | ----------------------------------------------------------------------------------- | -------------------------------------------------- |
| Authorize URL      | The OAuth 2.0 Authorization URL for Square                                          | https://connect.squareup.com/oauth2/authorize      |
| Token URL          | The OAuth 2.0 Token URL for Square                                                  | https://connect.squareup.com/oauth2/token          |
| Scopes             | A space-delimited set of one or more scopes to get the user's permission to access. | MERCHANT_PROFILE_READ PAYMENTS_READ PAYMENTS_WRITE |
| Application ID     |                                                                                     |                                                    |
| Application Secret |                                                                                     |                                                    |

## Triggers

### Webhook

Receive and validate webhook requests from Square for webhooks you configure.

## Actions

### Batch Change Inventory

Applies adjustments and counts to the provided item quantities.

| Input                   | Comments                                                                                                                                                  | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Square Connection       |                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Idempotency Key         |                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Inventory Changes       | The set of physical counts and inventory adjustments to be made. Changes are applied based on the client-supplied timestamp and may be sent out of order. | <code>[<br /> {<br /> "type": "PHYSICAL_COUNT",<br /> "physical_count": {<br /> "catalog_object_id": "object_id",<br /> "state": "IN_STOCK",<br /> "quantity": "10",<br /> "location_id": "location_id",<br /> "occurred_at": "2023-07-01T00:00:00Z",<br /> "created_at": "2023-07-01T00:00:00Z"<br /> }<br /> },<br /> {<br /> "type": "ADJUSTMENT",<br /> "adjustment": {<br /> "catalog_object_id": "object_id",<br /> "from_state": "IN_STOCK",<br /> "to_state": "SOLD",<br /> "quantity": "-1",<br /> "location_id": "location_id",<br /> "occurred_at": "2023-07-01T00:00:00Z",<br /> "created_at": "2023-07-01T00:00:00Z",<br /> "source": {<br /> "product": "REGISTER",<br /> "application_id": "app_id",<br /> "name": "Register",<br /> "type": "APP"<br /> }<br /> }<br /> }<br />]</code> |
| Ignore Unchanged Counts |                                                                                                                                                           | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Batch Delete Catalog Objects

Deletes a set of CatalogItems based on the provided list of target IDs and returns a set of successfully deleted IDs in the response.

| Input             | Comments                                       | Default                                                        |
| ----------------- | ---------------------------------------------- | -------------------------------------------------------------- |
| Square Connection |                                                |                                                                |
| Object IDs        | The IDs of the CatalogObjects to be retrieved. | <code>[<br /> "obj1",<br /> "obj2",<br /> "obj3"<br />]</code> |

### Batch Retrieve Catalog Objects

Returns a set of objects based on the provided ID.

| Input                   | Comments                                                                                                                                                                                                                      | Default                                                        |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Square Connection       |                                                                                                                                                                                                                               |                                                                |
| Object IDs              | The IDs of the CatalogObjects to be retrieved.                                                                                                                                                                                | <code>[<br /> "obj1",<br /> "obj2",<br /> "obj3"<br />]</code> |
| Include Related Objects | If true, the response will include additional objects that are related to the requested objects.                                                                                                                              | false                                                          |
| Catalog Version         | The specific version of the catalog objects to be included in the response. This allows you to retrieve historical versions of objects. The specified version value is matched against the CatalogObjects' version attribute. |                                                                |
| Include Deleted Objects | If true, deleted objects will be included in the results.                                                                                                                                                                     | false                                                          |

### Batch Retrieve Inventory Counts

Returns current counts for the provided CatalogObjects at the requested Locations.

| Input              | Comments                                                                                                                | Default                                                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Square Connection  |                                                                                                                         |                                                                    |
| Catalog Object IDs | The filter to return results by CatalogObject ID.                                                                       | <code>[<br /> "object1",<br /> "object2"<br />]</code>             |
| Location IDs       | Array of location IDs. These IDs will be used to filter the results to specific locations.                              | <code>[<br /> "L2D9N2BTY6CDC",<br /> "L3K7N2BTY6CDE"<br />]</code> |
| Updated After      | The filter to return results with their calculated_at value after the given time as specified in an RFC 3339 timestamp. |                                                                    |
| Cursor             | A pagination cursor returned by a previous call to this endpoint.                                                       |                                                                    |
| States             | The filter to return results by InventoryState.                                                                         | <code>[<br /> "IN_STOCK",<br /> "SOLD"<br />]</code>               |
| Limit              | The maximum number of results to be returned in a single page.                                                          |                                                                    |

### Batch Retrieve Orders

Retrieves a set of orders by their IDs.

| Input             | Comments                                                                                 | Default                                                  |
| ----------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Square Connection |                                                                                          |                                                          |
| Location ID       | The ID of the location to retrieve details for.                                          |                                                          |
| Order IDs         | The IDs of the orders to retrieve. A maximum of 100 orders can be retrieved per request. | <code>[<br /> "OrderID1",<br /> "OrderID2"<br />]</code> |

### Batch Upsert Catalog Objects

Creates or updates up to 10,000 target objects based on the provided list of objects.

| Input             | Comments                                                                                                                                                                                                                                                                                                                   | Default                                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Square Connection |                                                                                                                                                                                                                                                                                                                            |                                                                                                                                        |
| Idempotency Key   |                                                                                                                                                                                                                                                                                                                            |                                                                                                                                        |
| Batches           | A list of batches of CatalogObjects to be inserted/updated atomically. Each batch may contain up to 1,000 objects. The total number of objects across all batches for a single request may not exceed 10,000. If either of these limits is violated, an error will be returned and no objects will be inserted or updated. | <code>[<br /> {<br /> "objects": [<br /> {<br /> "type": "exampleType",<br /> "id": "#exampleId"<br /> }<br /> ]<br /> }<br />]</code> |

### Cancel Invoice

Cancel an invoice.

| Input             | Comments                           | Default |
| ----------------- | ---------------------------------- | ------- |
| Square Connection |                                    |         |
| Invoice ID        | The ID of the invoice to retrieve. |         |
| Version           |                                    |         |

### Cancel Payment

Cancels (voids) a payment.

| Input             | Comments                             | Default |
| ----------------- | ------------------------------------ | ------- |
| Square Connection |                                      |         |
| Payment ID        | A unique ID for the desired payment. |         |

### Clone Order

Creates a new order, in the DRAFT state, by duplicating an existing order.

| Input             | Comments                         | Default |
| ----------------- | -------------------------------- | ------- |
| Square Connection |                                  |         |
| Order ID          | The ID of the order to retrieve. |         |
| Version           |                                  |         |
| Idempotency Key   |                                  |         |

### Complete Payment

Completes (captures) a payment.

| Input             | Comments                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------------------- | ------- |
| Square Connection |                                                                                     |         |
| Payment ID        | A unique ID for the desired payment.                                                |         |
| Version Token     | Used for optimistic concurrency. This token identifies the current Payment version. |         |

### Create Customer

Create a new customer profile.

| Input             | Comments               | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Address           | Address in JSON format | <code>{<br /> "address_line_1": "test",<br /> "address_line_2": "test1",<br /> "address_line_3": "test2",<br /> "locality": "madero",<br /> "sublocality": "one",<br /> "sublocality_2": "two",<br /> "sublocality_3": "three",<br /> "administrative_district_level_1": "test3",<br /> "administrative_district_level_2": "test3",<br /> "administrative_district_level_3": "test4",<br /> "postal_code": "89510",<br /> "country": "MX",<br /> "first_name": "Oscar",<br /> "last_name": "Antonio"<br />}</code> |
| Birthday          |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Company Name      |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Email Address     |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Family Name       |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Given Name        |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Nickname          |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Note              |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Phone Number      |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Reference Id      |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Tax IDs           | Tax IDs in JSON format | <code>{<br /> "eu_vat": "IE3426675K"<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Idempotency Key   |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Square Connection |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Create Order

Create a new order.

| Input             | Comments                                                                                                  | Default                                                                                                                                                                                                                                                                                                                            |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location ID       | The ID of the location to retrieve details for.                                                           |                                                                                                                                                                                                                                                                                                                                    |
| Order Object      | The complete order object. Please refer to the Square API documentation for the structure of this object. | <code>{<br /> "idempotency_key": "example_idempotency_key",<br /> "order": {<br /> "location_id": "example_location_id",<br /> "line_items": [<br /> {<br /> "name": "Example item",<br /> "quantity": "1",<br /> "base_price_money": {<br /> "amount": 100,<br /> "currency": "USD"<br /> }<br /> }<br /> ]<br /> }<br />}</code> |
| Square Connection |                                                                                                           |                                                                                                                                                                                                                                                                                                                                    |

### Create Payment

Creates a payment using the provided source.

| Input             | Comments                                                                               | Default                                                                                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Square Connection |                                                                                        |                                                                                                                                                                                |
| Payment Data      | The payment data object containing all necessary information for creating the payment. | <code>{<br /> "source_id": "SOURCE_ID",<br /> "idempotency_key": "IDEMPOTENCY_KEY",<br /> "amount_money": {<br /> "amount": 100,<br /> "currency": "USD"<br /> }<br />}</code> |

### Create Team Member

Create a new team member.

| Input             | Comments                                                     | Default                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Team Member       | The data which will be used to create the TeamMember object. | <code>{<br /> "reference_id": "reference_id_1",<br /> "status": "ACTIVE",<br /> "given_name": "John",<br /> "family_name": "Doe",<br /> "email_address": "john_doe@example.com",<br /> "phone_number": "+14155552671",<br /> "assigned_locations": {<br /> "assignment_type": "EXPLICIT_LOCATIONS",<br /> "location_ids": [<br /> "L2D9N2BTY6CDC"<br /> ]<br /> }<br />}</code> |
| Idempotency Key   |                                                              |                                                                                                                                                                                                                                                                                                                                                                                 |
| Square Connection |                                                              |                                                                                                                                                                                                                                                                                                                                                                                 |

### Create Webhook Subscription

Creates a webhook subscription.

| Input                | Comments                    | Default                                                                                                                                                                                                                  |
| -------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Square Connection    |                             |                                                                                                                                                                                                                          |
| Idempotency Key      |                             |                                                                                                                                                                                                                          |
| Webhook Subscription | The Subscription to create. | <code>{<br /> "name": "Subscription Name",<br /> "enabled": true,<br /> "event_types": [<br /> "event_type_1",<br /> "event_type_2"<br /> ],<br /> "notification_url": "https://example.com/notifications"<br />}</code> |

### Delete Catalog Object

Deletes a single CatalogObject based on the provided ID and returns the set of successfully deleted IDs in the response.

| Input             | Comments                                                      | Default |
| ----------------- | ------------------------------------------------------------- | ------- |
| Square Connection |                                                               |         |
| Object ID         | The object ID of any type of catalog objects to be retrieved. |         |

### Delete Customer

Delete a customer profile from a business.

| Input             | Comments                                        | Default |
| ----------------- | ----------------------------------------------- | ------- |
| Customer ID       | The ID of the customer to retrieve details for. |         |
| Version           |                                                 |         |
| Square Connection |                                                 |         |

### Delete Instance Webhooks

Delete all webhooks that point to a flow in this instance

| Input             | Comments | Default |
| ----------------- | -------- | ------- |
| Square Connection |          |         |

### Delete Invoice

Delete an invoice.

| Input             | Comments                           | Default |
| ----------------- | ---------------------------------- | ------- |
| Square Connection |                                    |         |
| Invoice ID        | The ID of the invoice to retrieve. |         |
| Version           |                                    |         |

### Delete Webhook Subscription

Deletes a webhook subscription.

| Input             | Comments                              | Default |
| ----------------- | ------------------------------------- | ------- |
| Square Connection |                                       |         |
| Subscription ID   | The ID of the Subscription to delete. |         |

### Get Invoice

Retrieve an invoice by its ID.

| Input             | Comments                           | Default |
| ----------------- | ---------------------------------- | ------- |
| Square Connection |                                    |         |
| Invoice ID        | The ID of the invoice to retrieve. |         |

### Get Payment

Retrieves details for a specific payment.

| Input             | Comments                             | Default |
| ----------------- | ------------------------------------ | ------- |
| Square Connection |                                      |         |
| Payment ID        | A unique ID for the desired payment. |         |

### Get Payment Refund

Retrieves a specific refund using the refund_id.

| Input             | Comments                                     | Default |
| ----------------- | -------------------------------------------- | ------- |
| Square Connection |                                              |         |
| Refund ID         | The unique ID for the desired PaymentRefund. |         |

### List Catalog

Returns a list of all CatalogObjects of the specified types in the catalog.

| Input             | Comments                                                                                                                                                                                                                                     | Default                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Square Connection |                                                                                                                                                                                                                                              |                                                                               |
| Cursor            | A pagination cursor returned by a previous call to this endpoint.                                                                                                                                                                            |                                                                               |
| Types             | An optional case-insensitive, comma-separated list of object types to retrieve. The valid values are defined in the CatalogObjectType enum, for example, ITEM, ITEM_VARIATION, CATEGORY, DISCOUNT, TAX, MODIFIER, MODIFIER_LIST, IMAGE, etc. | ITEM, ITEM_VARIATION, CATEGORY, DISCOUNT, TAX, MODIFIER, MODIFIER_LIST, IMAGE |
| Catalog Version   | The specific version of the catalog objects to be included in the response. This allows you to retrieve historical versions of objects. The specified version value is matched against the CatalogObjects' version attribute.                |                                                                               |

### List Customers

List customer profiles associated with a Square account.

| Input             | Comments                                                          | Default |
| ----------------- | ----------------------------------------------------------------- | ------- |
| Cursor            | A pagination cursor returned by a previous call to this endpoint. |         |
| Limit             | The maximum number of results to be returned in a single page.    |         |
| Sort Field        | Field to sort the customers on.                                   |         |
| Sort Order        | Order to sort the customers.                                      |         |
| Square Connection |                                                                   |         |

### List Invoices

Returns a list of invoices for a given location.

| Input             | Comments                                                          | Default |
| ----------------- | ----------------------------------------------------------------- | ------- |
| Location ID       | The ID of the location to retrieve details for.                   |         |
| Square Connection |                                                                   |         |
| Cursor            | A pagination cursor returned by a previous call to this endpoint. |         |
| Limit             | The maximum number of results to be returned in a single page.    |         |

### List Locations

List all of the seller's locations, including those with an inactive status.

| Input             | Comments | Default |
| ----------------- | -------- | ------- |
| Square Connection |          |         |

### List Payment Refunds

Retrieves a list of refunds for the account making the request.

| Input             | Comments                                                                                                                                               | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Square Connection |                                                                                                                                                        |         |
| Begin Time        | Return objects modified after this timestamp, in RFC 3339 format.                                                                                      |         |
| End Time          | Indicates the end of the time range to retrieve payments for, in RFC 3339 format. The range is determined using the created_at field for each Payment. |         |
| Sort Order        | Order to sort the customers.                                                                                                                           |         |
| Cursor            | A pagination cursor returned by a previous call to this endpoint.                                                                                      |         |
| Location ID       | The ID of the location to retrieve details for.                                                                                                        |         |
| Status            | If provided, only refunds with the given status are returned.                                                                                          |         |
| Source Type       | If provided, only returns refunds whose payments have the indicated source type.                                                                       |         |
| Limit             | The maximum number of results to be returned in a single page.                                                                                         |         |

### List Payments

Retrieves a list of payments taken by the account making the request.

| Input                 | Comments                                                                                                                                               | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Square Connection     |                                                                                                                                                        |         |
| Begin Time            | Return objects modified after this timestamp, in RFC 3339 format.                                                                                      |         |
| End Time              | Indicates the end of the time range to retrieve payments for, in RFC 3339 format. The range is determined using the created_at field for each Payment. |         |
| Sort Order            | Order to sort the customers.                                                                                                                           |         |
| Cursor                | A pagination cursor returned by a previous call to this endpoint.                                                                                      |         |
| Location ID           | The ID of the location to retrieve details for.                                                                                                        |         |
| Total                 | The exact amount in the total_money for a payment.                                                                                                     |         |
| Last 4 digits of Card | The last four digits of a payment card.                                                                                                                |         |
| Card Brand            | The brand of the payment card (for example, VISA).                                                                                                     |         |
| Limit                 | The maximum number of results to be returned in a single page.                                                                                         |         |

### List Webhook Subscriptions

Lists all webhook subscriptions owned by your application.

| Input             | Comments                                                                                                  | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ------- |
| Square Connection |                                                                                                           |         |
| Cursor            | A pagination cursor returned by a previous call to this endpoint.                                         |         |
| Include Disabled  | Includes disabled Subscriptions. By default, all enabled Subscriptions are returned.                      | false   |
| Sort Order        | Sorts the returned list by when the Subscription was created with the specified order. Options: ASC, DESC |         |
| Limit             | The maximum number of results to be returned in a single page.                                            |         |

### Publish Invoice

Publish an invoice.

| Input             | Comments                           | Default |
| ----------------- | ---------------------------------- | ------- |
| Square Connection |                                    |         |
| Invoice ID        | The ID of the invoice to retrieve. |         |
| Version           |                                    |         |
| Idempotency Key   |                                    |         |

### Raw Request

Send raw HTTP request to Square

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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |
| Square Connection       |                                                                                                                                                                                                  |         |

### Refund Payment

Refunds a payment. You can refund the entire payment amount or a portion of it.

| Input             | Comments                                                                                                                                                                         | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Square Connection |                                                                                                                                                                                  |         |
| Payment ID        | A unique ID for the desired payment.                                                                                                                                             |         |
| Idempotency Key   |                                                                                                                                                                                  |         |
| Refund Amount     | The amount of money to refund. This amount cannot be more than the total_money value of the payment minus the total amount of all previously completed refunds for this payment. |         |
| Reason            | A description of the reason for the refund.                                                                                                                                      |         |

### Retrieve Catalog Object

Returns a single CatalogObject based on the provided ID.

| Input                   | Comments                                                                                                                                                                                                                      | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Square Connection       |                                                                                                                                                                                                                               |         |
| Object ID               | The object ID of any type of catalog objects to be retrieved.                                                                                                                                                                 |         |
| Include Related Objects | If true, the response will include additional objects that are related to the requested objects.                                                                                                                              | false   |
| Catalog Version         | The specific version of the catalog objects to be included in the response. This allows you to retrieve historical versions of objects. The specified version value is matched against the CatalogObjects' version attribute. |         |

### Retrieve Customer

Retrieve details for a single customer.

| Input             | Comments                                        | Default |
| ----------------- | ----------------------------------------------- | ------- |
| Customer ID       | The ID of the customer to retrieve details for. |         |
| Square Connection |                                                 |         |

### Retrieve Location

Retrieves details of a specific location.

| Input             | Comments                                        | Default |
| ----------------- | ----------------------------------------------- | ------- |
| Location ID       | The ID of the location to retrieve details for. |         |
| Square Connection |                                                 |         |

### Retrieve Order

Retrieves an Order by its ID.

| Input             | Comments                         | Default |
| ----------------- | -------------------------------- | ------- |
| Square Connection |                                  |         |
| Order ID          | The ID of the order to retrieve. |         |

### Retrieve Team Member

Retrieve a team member based on the provided ID.

| Input             | Comments                                  | Default          |
| ----------------- | ----------------------------------------- | ---------------- |
| Team Member ID    | The ID of the TeamMember to be retrieved. | TMFnLDlvT9Nfwal7 |
| Square Connection |                                           |                  |

### Retrieve Webhook Subscription

Retrieves a webhook subscription identified by its ID.

| Input             | Comments                                | Default |
| ----------------- | --------------------------------------- | ------- |
| Square Connection |                                         |         |
| Subscription ID   | The ID of the Subscription to retrieve. |         |

### Search Catalog Items

Searches for catalog items or item variations by matching supported search attribute values, including custom attribute values, against one or more of the specified query filters.

| Input                    | Comments                                                                                                              | Default                                                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Square Connection        |                                                                                                                       |                                                                                                                                                                                           |
| Text Filter              | The text filter expression to return items or item variations containing specified text.                              |                                                                                                                                                                                           |
| Category IDs             | The category id query expression to return items containing the specified category IDs.                               | <code>[<br /> "categoryId1",<br /> "categoryId2"<br />]</code>                                                                                                                            |
| Stock Levels             | The stock-level query expression to return item variations with the specified stock levels.                           | <code>[<br /> "OUT",<br /> "LOW"<br />]</code>                                                                                                                                            |
| Enabled Location IDs     | The enabled-location query expression to return items and item variations having specified enabled locations.         | <code>[<br /> "locationId1",<br /> "locationId2"<br />]</code>                                                                                                                            |
| Cursor                   | A pagination cursor returned by a previous call to this endpoint.                                                     |                                                                                                                                                                                           |
| Limit                    | The maximum number of results to be returned in a single page.                                                        |                                                                                                                                                                                           |
| Sort Order               | Order to sort the customers.                                                                                          |                                                                                                                                                                                           |
| Product Types            | The product types query expression to return items or item variations having the specified product types.             | <code>[<br /> "REGULAR",<br /> "APPOINTMENTS_SERVICE"<br />]</code>                                                                                                                       |
| Custom Attribute Filters | The customer-attribute filter to return items or item variations matching the specified custom attribute expressions. | <code>[<br /> {<br /> "custom_attribute_definition_id": "attributeId",<br /> "key": "exampleKey",<br /> "string_filter": "exampleString",<br /> "bool_filter": true<br /> }<br />]</code> |

### Search Catalog Objects

Searches for CatalogObject of any type by matching supported search attribute values, excluding custom attribute values on items or item variations, against one or more of the specified query filters.

| Input                   | Comments                                                                                                         | Default                                                                                                                                                                                                                                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Square Connection       |                                                                                                                  |                                                                                                                                                                                                                                                                                                                                    |
| Cursor                  | A pagination cursor returned by a previous call to this endpoint.                                                |                                                                                                                                                                                                                                                                                                                                    |
| Object Types            | The desired set of object types to appear in the search results.                                                 |                                                                                                                                                                                                                                                                                                                                    |
| Include Deleted Objects | If true, deleted objects will be included in the results.                                                        | false                                                                                                                                                                                                                                                                                                                              |
| Include Related Objects | If true, the response will include additional objects that are related to the requested objects.                 | false                                                                                                                                                                                                                                                                                                                              |
| Begin Time              | Return objects modified after this timestamp, in RFC 3339 format.                                                |                                                                                                                                                                                                                                                                                                                                    |
| Catalog Query           | A query to be used to filter or sort the results. If no query is specified, the entire catalog will be returned. | <code>{<br /> "sorted_attribute_query": {<br /> "attribute_name": "exampleAttributeName",<br /> "initial_attribute_value": "exampleInitialValue",<br /> "sort_order": "ASC"<br /> },<br /> "exact_query": {<br /> "attribute_name": "exampleAttributeName",<br /> "attribute_value": "exampleAttributeValue"<br /> }<br />}</code> |
| Limit                   | The maximum number of results to be returned in a single page.                                                   |                                                                                                                                                                                                                                                                                                                                    |

### Search Customers

Search customer profiles.

| Input             | Comments                                                                                                                     | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Limit             | The maximum number of results to be returned in a single page.                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Query             | The query to search for customers. Please refer to the Square API documentation for the structure and options of this query. | <code>{<br /> "query": {<br /> "filter": {<br /> "creation_source": {<br /> "values": [<br /> "THIRD_PARTY"<br /> ],<br /> "rule": "INCLUDE"<br /> },<br /> "created_at": {<br /> "start_at": "2018-01-01T00:00:00-00:00",<br /> "end_at": "2018-02-01T00:00:00-00:00"<br /> },<br /> "email_address": {<br /> "fuzzy": "example.com"<br /> },<br /> "group_ids": {<br /> "all": [<br /> "545AXB44B4XXWMVQ4W8SBT3HHF"<br /> ]<br /> }<br /> },<br /> "sort": {<br /> "field": "CREATED_AT",<br /> "order": "ASC"<br /> }<br /> }<br />}</code> |
| Cursor            | A pagination cursor returned by a previous call to this endpoint.                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Square Connection |                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Search Invoices

Searches for invoices from a location specified in the filter.

| Input             | Comments                                                                                                                    | Default                                                                                                                                                                                                                                                      |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Limit             | The maximum number of results to be returned in a single page.                                                              |                                                                                                                                                                                                                                                              |
| Query             | The query to search for invoices. Please refer to the Square API documentation for the structure and options of this query. | <code>{<br /> "filter": {<br /> "location_ids": [<br /> "L2D9N2BTY6CDC"<br /> ],<br /> "customer_ids": [<br /> "SSRAQAX223WXC422K2443PS494"<br /> ]<br /> },<br /> "sort": {<br /> "field": "INVOICE_SORT_DATE",<br /> "order": "DESC"<br /> }<br />}</code> |
| Cursor            | A pagination cursor returned by a previous call to this endpoint.                                                           |                                                                                                                                                                                                                                                              |
| Square Connection |                                                                                                                             |                                                                                                                                                                                                                                                              |

### Search Orders

Search all orders for one or more locations.

| Input             | Comments                                                                                                                  | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Square Connection |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Location IDs      | Array of location IDs. These IDs will be used to filter the results to specific locations.                                | <code>[<br /> "L2D9N2BTY6CDC",<br /> "L3K7N2BTY6CDE"<br />]</code>                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Query             | The query to search for orders. Please refer to the Square API documentation for the structure and options of this query. | <code>{<br /> "filter": {<br /> "state_filter": {<br /> "states": [<br /> "COMPLETED"<br /> ]<br /> },<br /> "date_time_filter": {<br /> "closed_at": {<br /> "start_at": "2023-01-01T00:00:00+00:00",<br /> "end_at": "2023-12-31T23:59:59+00:00"<br /> }<br /> },<br /> "customer_filter": {<br /> "customer_ids": [<br /> "SSRAQAX223WXC422K2443PS494"<br /> ]<br /> }<br /> },<br /> "sort": {<br /> "sort_field": "CLOSED_AT",<br /> "sort_order": "DESC"<br /> }<br />}</code> |
| Limit             | The maximum number of results to be returned in a single page.                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Return Entries    | Flag that indicates whether the entries associated with the orders should be returned.                                    | true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Cursor            | A pagination cursor returned by a previous call to this endpoint.                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Search Team Members

Search for team members based on given filters.

| Input             | Comments                                                          | Default                                                                                                                                                 |
| ----------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Search Query      | The query parameters to filter the TeamMember objects.            | <code>{<br /> "filter": {<br /> "location_ids": [<br /> "L2D9N2BTY6CDC"<br /> ],<br /> "status": "ACTIVE",<br /> "is_owner": true<br /> }<br />}</code> |
| Square Connection |                                                                   |                                                                                                                                                         |
| Limit             | The maximum number of results to be returned in a single page.    |                                                                                                                                                         |
| Cursor            | A pagination cursor returned by a previous call to this endpoint. |                                                                                                                                                         |

### Update Customer

Update a customer profile.

| Input             | Comments                                        | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Square Connection |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Customer ID       | The ID of the customer to retrieve details for. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Address           | Address in JSON format                          | <code>{<br /> "address_line_1": "test",<br /> "address_line_2": "test1",<br /> "address_line_3": "test2",<br /> "locality": "madero",<br /> "sublocality": "one",<br /> "sublocality_2": "two",<br /> "sublocality_3": "three",<br /> "administrative_district_level_1": "test3",<br /> "administrative_district_level_2": "test3",<br /> "administrative_district_level_3": "test4",<br /> "postal_code": "89510",<br /> "country": "MX",<br /> "first_name": "Oscar",<br /> "last_name": "Antonio"<br />}</code> |
| Birthday          |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Company Name      |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Email Address     |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Family Name       |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Given Name        |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Nickname          |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Note              |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Phone Number      |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Reference Id      |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Tax IDs           | Tax IDs in JSON format                          | <code>{<br /> "eu_vat": "IE3426675K"<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Version           |                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Update Invoice

Update an invoice.

| Input             | Comments                                                                                                                  | Default                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Square Connection |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                        |
| Invoice ID        | The ID of the invoice to retrieve.                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                        |
| Update Invoice    | The data to update an invoice. Please refer to the Square API documentation for the structure and options of this update. | <code>{<br /> "invoice": {<br /> "version": 1,<br /> "paymentRequests": [<br /> {<br /> "uid": "2da7964f-f3d2-4f43-81e8-5aa220bf3355",<br /> "tippingEnabled": false<br /> }<br /> ]<br /> },<br /> "idempotencyKey": "4ee82288-0910-499e-ab4c-5d0071dad1be",<br /> "fieldsToClear": [<br /> "payments_requests[2da7964f-f3d2-4f43-81e8-5aa220bf3355].reminders"<br /> ]<br />}</code> |

### Update Location

Updates a location associated with a Square account.

| Input             | Comments                                                   | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location ID       | The ID of the location to retrieve details for.            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Location Update   | The data which will be used to update the Location object. | <code>{<br /> "id": "L2D9N2BTY6CDC",<br /> "name": "Acme",<br /> "address": {<br /> "address_line_1": "1234 Peachtree St. NE",<br /> "locality": "Atlanta",<br /> "administrative_district_level_1": "GA",<br /> "postal_code": "30309"<br /> },<br /> "timezone": "America/New_York",<br /> "status": "ACTIVE",<br /> "country": "US",<br /> "language_code": "en-US",<br /> "currency": "USD",<br /> "type": "PHYSICAL",<br /> "comments": "Midtown Atlanta store - Open weekends",<br /> "coordinates": {<br /> "latitude": 33.7889,<br /> "longitude": -84.3841<br /> },<br /> "business_hours": {<br /> "periods": [<br /> {<br /> "day_of_week": "FRI",<br /> "start_local_time": "07:00",<br /> "end_local_time": "18:00"<br /> },<br /> {<br /> "day_of_week": "SAT",<br /> "start_local_time": "07:00",<br /> "end_local_time": "18:00"<br /> },<br /> {<br /> "day_of_week": "SUN",<br /> "start_local_time": "09:00",<br /> "end_local_time": "15:00"<br /> }<br /> ]<br /> },<br /> "business_name": "Jet Fuel Coffee",<br /> "mcc": "7299"<br />}</code> |
| Square Connection |                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Update Order

Updates an open order by adding, replacing, or deleting fields.

| Input             | Comments                                                                                                  | Default                                                                                                                                                                                                                                                                                                                            |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Order ID          | The ID of the order to retrieve.                                                                          |                                                                                                                                                                                                                                                                                                                                    |
| Order Object      | The complete order object. Please refer to the Square API documentation for the structure of this object. | <code>{<br /> "idempotency_key": "example_idempotency_key",<br /> "order": {<br /> "location_id": "example_location_id",<br /> "line_items": [<br /> {<br /> "name": "Example item",<br /> "quantity": "1",<br /> "base_price_money": {<br /> "amount": 100,<br /> "currency": "USD"<br /> }<br /> }<br /> ]<br /> }<br />}</code> |
| Fields to Clear   | The dot notation paths of fields to clear. For example, line_items[uid].note. This is optional.           | <code>[<br /> "field1",<br /> "field2"<br />]</code>                                                                                                                                                                                                                                                                               |
| Idempotency Key   |                                                                                                           |                                                                                                                                                                                                                                                                                                                                    |
| Square Connection |                                                                                                           |                                                                                                                                                                                                                                                                                                                                    |

### Update Payment

Updates a payment with the APPROVED status.

| Input             | Comments                                                                                                                                                                                                             | Default                                                                                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Square Connection |                                                                                                                                                                                                                      |                                                                                                                                                                                |
| Payment ID        | A unique ID for the desired payment.                                                                                                                                                                                 |                                                                                                                                                                                |
| Payment           | The payment object containing the amount_money and tip_money to be updated. The amount is specified in the smallest denomination of the applicable currency (for example, US dollar amounts are specified in cents). | <code>{<br /> "amount_money": {<br /> "amount": 1000,<br /> "currency": "USD"<br /> },<br /> "tip_money": {<br /> "amount": 200,<br /> "currency": "USD"<br /> }<br />}</code> |

### Update Team Member

Update a team member.

| Input             | Comments                                                     | Default                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Team Member ID    | The ID of the TeamMember to be retrieved.                    | TMFnLDlvT9Nfwal7                                                                                                                                                                                                                                                                                                                                                                |
| Team Member       | The data which will be used to create the TeamMember object. | <code>{<br /> "reference_id": "reference_id_1",<br /> "status": "ACTIVE",<br /> "given_name": "John",<br /> "family_name": "Doe",<br /> "email_address": "john_doe@example.com",<br /> "phone_number": "+14155552671",<br /> "assigned_locations": {<br /> "assignment_type": "EXPLICIT_LOCATIONS",<br /> "location_ids": [<br /> "L2D9N2BTY6CDC"<br /> ]<br /> }<br />}</code> |
| Square Connection |                                                              |                                                                                                                                                                                                                                                                                                                                                                                 |

### Update Webhook Subscription

Updates a webhook subscription.

| Input                | Comments                                                                                       | Default                                                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Square Connection    |                                                                                                |                                                                                                                                                                                                                                  |
| Subscription ID      | The ID of the Subscription to retrieve.                                                        |                                                                                                                                                                                                                                  |
| Webhook Subscription | The updated webhook subscription object. It should include properties that you want to update. | <code>{<br /> "name": "Updated Subscription Name",<br /> "enabled": true,<br /> "event_types": [<br /> "event_type1",<br /> "event_type2"<br /> ],<br /> "notification_url": "http://example.com/notification-url"<br />}</code> |

### Upsert Catalog Object

Creates a new or updates the specified CatalogObject.

| Input             | Comments                                  | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Square Connection |                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Idempotency Key   |                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Catalog Object    | A CatalogObject to be created or updated. | <code>{<br /> "type": "ITEM",<br /> "id": "#temp-item-id",<br /> "item_data": {<br /> "name": "Example Item",<br /> "comments": "This is an example item.",<br /> "abbreviation": "E",<br /> "category_id": "example-category-id",<br /> "variations": [<br /> {<br /> "type": "ITEM_VARIATION",<br /> "id": "#temp-variation-id",<br /> "item_variation_data": {<br /> "item_id": "#temp-item-id",<br /> "name": "Example Variation",<br /> "pricing_type": "FIXED_PRICING",<br /> "price_money": {<br /> "amount": 100,<br /> "currency": "USD"<br /> }<br /> }<br /> }<br /> ]<br /> }<br />}</code> |
