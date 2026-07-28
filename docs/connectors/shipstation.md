---
title: ShipStation Connector
sidebar_label: ShipStation
description: Manage orders, shipments, and carriers in ShipStation.
---

![ShipStation](./assets/shipstation.png#connector-icon)
[ShipStation](https://www.shipstation.com/) is an e-commerce shipping and order fulfillment platform.
This component allows you to manage orders, shipments, and carriers in ShipStation.

## API Documentation

This component was built using the [ShipStation API](https://www.shipstation.com/docs/api/).

## Connections

### API Key {#shipstationapikey}

Authenticate using an API key and secret.

To authenticate with ShipStation, an API Key and API Secret are required.

#### Prerequisites

- A ShipStation account with API access enabled

#### Setup Steps

1. Navigate to the ShipStation account settings
2. Navigate to the **API Settings** section
3. Click **Generate New Keys** to create a new API Key and API Secret pair
4. Copy both the **API Key** and **API Secret** values

#### Configure the Connection

Create a connection of type **API Key** and enter:

- **API Key**: The API Key from the ShipStation account settings
- **API Secret**: The API Secret from the ShipStation account settings

The API key must have the correct permissions to interact with the ShipStation API resources being accessed.

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| API Key    | The API key from the ShipStation account settings.    |         |
| API Secret | The API secret from the ShipStation account settings. |         |

## Triggers

### Manual Webhook {#shipstationwebhooktrigger}

Receive and validate webhook requests from ShipStation for manually configured webhook subscriptions.

### New and Updated Orders {#pollorders}

Checks for new and updated orders in ShipStation on a configured schedule.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The ShipStation connection to use. |         |

### New and Updated Products {#pollproducts}

Checks for new and updated products in ShipStation on a configured schedule.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The ShipStation connection to use. |         |

### New and Updated Shipments {#pollshipments}

Checks for new and updated shipments in ShipStation on a configured schedule.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The ShipStation connection to use. |         |

### Webhook Event Subscription {#webhookeventsubscription}

Receive webhook event notifications from ShipStation. Automatically creates and manages a webhook subscription for the selected event type when the instance is deployed, and removes the subscription when the instance is deleted.

| Input         | Comments                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The ShipStation connection to use.                                                                 |         |
| Webhook Event | The event type to subscribe to for webhook notifications.                                          |         |
| Store ID      | The store ID to filter webhook triggers. When provided, webhooks will only trigger for this store. |         |
| Friendly Name | A descriptive label to identify the webhook in the dashboard.                                      |         |

## Actions

### Create Label for Order {#createlabelfororder}

Creates a shipping label for a specified order.

| Input             | Comments                                                                                             | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The ShipStation connection to use.                                                                   |         |
| Order ID          | The unique identifier for the order.                                                                 |         |
| Carrier Code      | The carrier code for the shipping label.                                                             |         |
| Service Code      | The shipping service code for the label.                                                             |         |
| Confirmation      | The delivery confirmation type (e.g., none, delivery, signature, adult_signature, direct_signature). |         |
| Ship Date         | The date the order should be shipped in YYYY-MM-DD format.                                           |         |
| Test Label        | When true, creates a test label.                                                                     | false   |
| Additional Fields | A list of additional fields to include in the label for order.                                       |         |

### Create or Update Multiple Orders {#createorupdatemultipleorders}

Creates or updates multiple orders in one request.

| Input        | Comments                                                               | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection   | The ShipStation connection to use.                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Orders Array | Provide an array of order objects to create or update multiple orders. | <code>[<br /> {<br /> "orderNumber": "TEST-ORDER-001",<br /> "orderDate": "2023-09-08T12:34:56.000Z",<br /> "orderStatus": "awaiting_shipment",<br /> "billTo": {<br /> "name": "John Doe",<br /> "street1": "123 Main St",<br /> "city": "Anytown",<br /> "state": "CA",<br /> "postalCode": "12345",<br /> "country": "US"<br /> },<br /> "shipTo": {<br /> "name": "John Doe",<br /> "street1": "123 Main St",<br /> "city": "Anytown",<br /> "state": "CA",<br /> "postalCode": "12345",<br /> "country": "US"<br /> }<br /> },<br /> {<br /> "orderNumber": "TEST-ORDER-002",<br /> "orderDate": "2023-09-09T12:34:56.000Z",<br /> "orderStatus": "awaiting_payment",<br /> "billTo": {<br /> "name": "Jane Doe",<br /> "street1": "456 Another St",<br /> "city": "Othertown",<br /> "state": "NY",<br /> "postalCode": "67890",<br /> "country": "US"<br /> },<br /> "shipTo": {<br /> "name": "Jane Doe",<br /> "street1": "456 Another St",<br /> "city": "Othertown",<br /> "state": "NY",<br /> "postalCode": "67890",<br /> "country": "US"<br /> }<br /> }<br />]</code> |

### Create or Update Order {#createorupdateorder}

Creates a new order or updates an existing one.

| Input             | Comments                                                                                                                                                  | Default                                                                                                                                                                                                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection        | The ShipStation connection to use.                                                                                                                        |                                                                                                                                                                                                                                                                          |
| Order Number      | The user-defined order number to identify the order.                                                                                                      |                                                                                                                                                                                                                                                                          |
| Order Date        | The date the order was placed. Format: ISO 8601 (e.g., 2023-09-08T12:34:56.000Z).                                                                         | 2023-09-08T12:34:56.000Z                                                                                                                                                                                                                                                 |
| Order Status      | The order status to filter results (e.g., awaiting_payment, awaiting_shipment, shipped).                                                                  |                                                                                                                                                                                                                                                                          |
| Order Key         | The unique order key. If provided, the create order method will either create a new order if the key is not found, or update the existing order if found. |                                                                                                                                                                                                                                                                          |
| Billing Address   | Provide the billing address in JSON format.                                                                                                               | <code>{<br /> "name": "John Doe",<br /> "company": "JD Company",<br /> "street1": "123 Main St",<br /> "city": "Austin",<br /> "state": "TX",<br /> "postalCode": "78701",<br /> "country": "US",<br /> "phone": "123-456-7890",<br /> "residential": true<br />}</code> |
| Shipping Address  | Provide the shipping address in JSON format.                                                                                                              | <code>{<br /> "name": "Jane Doe",<br /> "company": "JD Company",<br /> "street1": "123 Main St",<br /> "city": "Austin",<br /> "state": "TX",<br /> "postalCode": "78701",<br /> "country": "US",<br /> "phone": "123-456-7890",<br /> "residential": true<br />}</code> |
| Additional Fields | A list of additional fields to include in the order.                                                                                                      |                                                                                                                                                                                                                                                                          |

### Create Shipment Label {#createshipmentlabel}

Creates a shipping label.

| Input             | Comments                                                                                | Default                                                                                                                                                                                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        | The ShipStation connection to use.                                                      |                                                                                                                                                                                                                                                                                   |
| Carrier Code      | The carrier code for the shipping label.                                                |                                                                                                                                                                                                                                                                                   |
| Service Code      | The shipping service code for the label.                                                |                                                                                                                                                                                                                                                                                   |
| Package Code      | The package type code for the label.                                                    |                                                                                                                                                                                                                                                                                   |
| Ship Date         | The date the order should be shipped in YYYY-MM-DD format.                              |                                                                                                                                                                                                                                                                                   |
| Shipment's Weight | The weight of the shipment, following the Weight model. Note: WeightUnits is read-only. | <code>{<br /> "value": 3,<br /> "units": "ounces",<br /> "WeightUnits": 2<br />}</code>                                                                                                                                                                                           |
| Shipping Address  | Provide the shipping address in JSON format.                                            | <code>{<br /> "name": "Jane Doe",<br /> "company": "JD Company",<br /> "street1": "123 Main St",<br /> "city": "Austin",<br /> "state": "TX",<br /> "postalCode": "78701",<br /> "country": "US",<br /> "phone": "123-456-7890",<br /> "residential": true<br />}</code>          |
| Origin Address    | Provide the origin address in JSON format.                                              | <code>{<br /> "name": "John Smith",<br /> "company": "JS Company",<br /> "street1": "456 Elm St",<br /> "city": "San Francisco",<br /> "state": "CA",<br /> "postalCode": "94107",<br /> "country": "US",<br /> "phone": "987-654-3210",<br /> "residential": false<br />}</code> |
| Additional Fields | A list of additional fields to include in the shipment.                                 |                                                                                                                                                                                                                                                                                   |

### Create Warehouse {#createwarehouse}

Creates a Ship From Location (warehouse) in the ShipStation account.

| Input                | Comments                                                                 | Default |
| -------------------- | ------------------------------------------------------------------------ | ------- |
| Connection           | The ShipStation connection to use.                                       |         |
| Warehouse Name       | A descriptive label for the ship-from location.                          |         |
| Origin Address       | The origin address. Shipping rates will be calculated from this address. |         |
| Return Address       | The return address. If not specified, the origin address will be used.   |         |
| Is Default Warehouse | When true, sets this as the default ship from location.                  | false   |

### Deactivate Store {#deactivatestore}

Deactivates the specified store.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The ShipStation connection to use.   |         |
| Store ID   | The unique identifier for the store. |         |

### Delete Instanced Webhooks {#deleteinstancedwebhooks}

Deletes all webhooks that point to a flow in this instance.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The ShipStation connection to use. |         |

### Delete Order {#deleteorder}

Deletes an order from the database by setting it to inactive.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The ShipStation connection to use.   |         |
| Order ID   | The unique identifier for the order. |         |

### Delete Warehouse {#deletewarehouse}

Deletes a warehouse (Ship From Location) by setting it to inactive status.

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The ShipStation connection to use.       |         |
| Warehouse ID | The unique identifier for the warehouse. |         |

### Get Customer {#getcustomer}

Retrieves a specific customer by their system-generated identifier.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The ShipStation connection to use.      |         |
| Customer ID | The unique identifier for the customer. |         |

### Get Order {#getorder}

Retrieves a single order from the database.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The ShipStation connection to use.   |         |
| Order ID   | The unique identifier for the order. |         |

### Get Product {#getproduct}

Retrieves a specific product from the database by its ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The ShipStation connection to use.     |         |
| Product ID | The unique identifier for the product. |         |

### Get Store {#getstore}

Retrieves detailed information about a specific store.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The ShipStation connection to use.   |         |
| Store ID   | The unique identifier for the store. |         |

### Get Warehouse {#getwarehouse}

Retrieves detailed information about a specific Ship From Location (warehouse).

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The ShipStation connection to use.       |         |
| Warehouse ID | The unique identifier for the warehouse. |         |

### List Carriers {#listcarriers}

Lists all shipping providers connected to the ShipStation account.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The ShipStation connection to use. |         |

### List Customers {#listcustomers}

Retrieves a list of customers based on specified criteria.

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Connection     | The ShipStation connection to use.                                      |         |
| State Code     | The two-letter state or province abbreviation for the customer address. |         |
| Country Code   | The two-letter ISO country code to filter customers.                    |         |
| Marketplace ID | The unique identifier for the marketplace to filter results by.         |         |
| Tag ID         | The unique identifier for the tag to filter results by.                 |         |
| Sorting        | Field and direction to sort results by.                                 |         |
| Sort By        | The API field name used to sort the returned results.                   |         |
| Sort Direction | The direction to sort results (asc or desc).                            |         |
| Pagination     | Page number and page size controls for the returned results.            |         |
| Page           | The page number to retrieve (starts at 1).                              |         |
| Page Size      | The maximum number of results to return per page. Maximum: 500.         |         |

### List Fulfillments {#listfulfillments}

Retrieves a list of fulfillments based on specified criteria.

| Input          | Comments                                                        | Default |
| -------------- | --------------------------------------------------------------- | ------- |
| Connection     | The ShipStation connection to use.                              |         |
| Fulfillment ID | The unique identifier for the fulfillment.                      |         |
| Order ID       | The unique identifier for the order.                            |         |
| Page           | The page number to retrieve (starts at 1).                      |         |
| Page Size      | The maximum number of results to return per page. Maximum: 500. |         |

### List Orders {#listorders}

Retrieves a list of orders based on specified criteria.

| Input         | Comments                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection    | The ShipStation connection to use.                                                       |         |
| Customer Name | The full name associated with the customer record.                                       |         |
| Order Status  | The order status to filter results (e.g., awaiting_payment, awaiting_shipment, shipped). |         |
| Page          | The page number to retrieve (starts at 1).                                               |         |
| Page Size     | The maximum number of results to return per page. Maximum: 500.                          |         |

### List Packages {#listpackages}

Retrieves a list of packages for the specified carrier.

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The ShipStation connection to use.       |         |
| Carrier Code | The carrier code for the shipping label. |         |

### List Products {#listproducts}

Retrieves a list of products that match the specified criteria.

| Input               | Comments                                                                 | Default |
| ------------------- | ------------------------------------------------------------------------ | ------- |
| Connection          | The ShipStation connection to use.                                       |         |
| SKU                 | The stock keeping unit code assigned to the product.                     |         |
| Product Name        | The display name of the product to search for.                           |         |
| Product Category ID | The unique identifier for the category grouping the product.             |         |
| Product Type ID     | The unique identifier for the product type classification.               |         |
| Tag ID              | The unique identifier for the tag to filter results by.                  |         |
| Start Date          | The start date to filter products by creation date in YYYY-MM-DD format. |         |
| End Date            | The end date to filter products by creation date in YYYY-MM-DD format.   |         |
| Sorting             | Field and direction to sort results by.                                  |         |
| Sort By             | The API field name used to sort the returned results.                    |         |
| Sort Direction      | The direction to sort results (asc or desc).                             |         |
| Pagination          | Page number and page size controls for the returned results.             |         |
| Page                | The page number to retrieve (starts at 1).                               |         |
| Page Size           | The maximum number of results to return per page. Maximum: 500.          |         |
| Show Inactive       | When true, includes inactive stores in the results.                      | false   |

### List Services {#listservices}

Retrieves the list of available shipping services for the specified carrier.

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The ShipStation connection to use.       |         |
| Carrier Code | The carrier code for the shipping label. |         |

### List Shipments {#listshipments}

Retrieves a list of shipments that match the specified criteria.

| Input                  | Comments                                                                          | Default |
| ---------------------- | --------------------------------------------------------------------------------- | ------- |
| Connection             | The ShipStation connection to use.                                                |         |
| Shipment Filters       | Tracking number, recipient name, and recipient country code to filter results by. |         |
| Tracking Number        | The carrier-assigned tracking number for the shipment.                            |         |
| Recipient Name         | The name of the person or business receiving the shipment.                        |         |
| Recipient Country Code | The two-letter ISO country code to filter shipments by recipient country.         |         |
| Date Range Filters     | Create date and ship date ranges to filter results by.                            |         |
| Create Date Start      | The start date to filter shipments by creation date in YYYY-MM-DD format.         |         |
| Create Date End        | The end date to filter shipments by creation date in YYYY-MM-DD format.           |         |
| Ship Date Start        | The start date to filter shipments by ship date in YYYY-MM-DD format.             |         |
| Ship Date End          | The end date to filter shipments by ship date in YYYY-MM-DD format.               |         |
| Pagination             | Page number and page size controls for the returned results.                      |         |
| Page                   | The page number to retrieve (starts at 1).                                        |         |
| Page Size              | The maximum number of results to return per page. Maximum: 500.                   |         |

### List Stores {#liststores}

Retrieves the list of installed stores on the account.

| Input          | Comments                                            | Default |
| -------------- | --------------------------------------------------- | ------- |
| Connection     | The ShipStation connection to use.                  |         |
| Show Inactive  | When true, includes inactive stores in the results. | false   |
| Marketplace ID | The marketplace ID to filter stores.                |         |

### List Users {#listusers}

Retrieves the list of users on the account.

| Input               | Comments                                           | Default |
| ------------------- | -------------------------------------------------- | ------- |
| Connection          | The ShipStation connection to use.                 |         |
| Show Inactive Users | When true, includes inactive users in the results. | false   |

### List Warehouses {#listwarehouses}

Retrieves a list of Ship From Locations (warehouses) in the account.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The ShipStation connection to use. |         |

### List Webhooks {#listwebhooks}

Retrieves a list of registered webhooks for the account.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The ShipStation connection to use. |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the ShipStation API.

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
| Connection              | The ShipStation connection to use.                                                                                                                                                               |         |

### Subscribe to Webhook {#subscribetowebhook}

Subscribes to a specific type of webhook in ShipStation.

| Input         | Comments                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The ShipStation connection to use.                                                                 |         |
| Target URL    | The URL where webhook events will be sent.                                                         |         |
| Event         | The webhook event type to subscribe to.                                                            |         |
| Store ID      | The store ID to filter webhook triggers. When provided, webhooks will only trigger for this store. |         |
| Friendly Name | A descriptive label to identify the webhook in the dashboard.                                      |         |

### Unsubscribe from Webhook {#unsubscribetowebhook}

Unsubscribes from a specific type of webhook in ShipStation.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The ShipStation connection to use.     |         |
| Webhook ID | The unique identifier for the webhook. |         |

### Update Product {#updateproduct}

Updates an existing product.

| Input        | Comments                                                                                | Default                                                                                            |
| ------------ | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Connection   | The ShipStation connection to use.                                                      |                                                                                                    |
| Product ID   | The unique identifier for the product.                                                  |                                                                                                    |
| Product Data | The complete data for updating the product. This call does not support partial updates. | <code>{<br /> "aliases": null,<br /> "productId": 123456789,<br /> "sku": "BEAU-000"<br />}</code> |

### Update Store {#updatestore}

Updates an existing store.

| Input             | Comments                                                                           | Default                                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Connection        | The ShipStation connection to use.                                                 |                                                                                                                 |
| Store ID          | The unique identifier for the store.                                               |                                                                                                                 |
| Store Update Data | All the data needed to update an existing store. Must provide the entire resource. | <code>{<br /> "storeId": 12345,<br /> "storeName": "WooCommerce Store",<br /> "marketplaceId": 36<br />}</code> |

### Update Warehouse {#updatewarehouse}

Updates an existing Ship From Location (warehouse).

| Input                 | Comments                                                                                        | Default                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Connection            | The ShipStation connection to use.                                                              |                                                                                                   |
| Warehouse Update Data | All the data needed to update an existing Ship From Location. Must provide the entire resource. | <code>{<br /> "warehouseId": 12345,<br /> "warehouseName": "API Ship From Location"<br />}</code> |
