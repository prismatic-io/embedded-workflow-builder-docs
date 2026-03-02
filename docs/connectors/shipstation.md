---
title: ShipStation Connector
sidebar_label: ShipStation
description: ShipStation is an ecommerce shipping software solution.
---

![ShipStation](./assets/shipstation.png#connector-icon)
[ShipStation](https://www.shipstation.com/) is an e-commerce shipping solution that streamlines the order fulfillment process.
This component allows listing, creating, updating, and deleting orders and shipments in the ShipStation account.

## API Documentation

This component was built using the [ShipStation API Documentation](https://www.shipstation.com/docs/api/).

## Connections

### API Key {#shipstationapikey}

Authenticate requests using an API key and secret

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

### Webhook {#shipstationwebhooktrigger}

Receive and validate webhook requests from ShipStation for webhooks you configure.

## Actions

### Create Label for Order {#createlabelfororder}

Creates a shipping label for a specified order.

| Input        | Comments                                                                                             | Default |
| ------------ | ---------------------------------------------------------------------------------------------------- | ------- |
| Order ID     | The unique identifier for the order.                                                                 |         |
| Carrier Code | The carrier code for the shipping label.                                                             |         |
| Service Code | The shipping service code for the label.                                                             |         |
| Confirmation | The delivery confirmation type (e.g., none, delivery, signature, adult_signature, direct_signature). |         |
| Ship Date    | The date the order should be shipped in YYYY-MM-DD format.                                           |         |
| Test Label   | When true, creates a test label.                                                                     | false   |
| Connection   | The ShipStation connection to use.                                                                   |         |
| Fields       | A list of additional fields to include in the label for order.                                       |         |

### Create or Update Multiple Orders {#createorupdatemultipleorders}

Create or update multiple orders in one request.

| Input        | Comments                                                               | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orders Array | Provide an array of order objects to create or update multiple orders. | <code>[<br /> {<br /> "orderNumber": "TEST-ORDER-001",<br /> "orderDate": "2023-09-08T12:34:56.000Z",<br /> "orderStatus": "awaiting_shipment",<br /> "billTo": {<br /> "name": "John Doe",<br /> "street1": "123 Main St",<br /> "city": "Anytown",<br /> "state": "CA",<br /> "postalCode": "12345",<br /> "country": "US"<br /> },<br /> "shipTo": {<br /> "name": "John Doe",<br /> "street1": "123 Main St",<br /> "city": "Anytown",<br /> "state": "CA",<br /> "postalCode": "12345",<br /> "country": "US"<br /> }<br /> },<br /> {<br /> "orderNumber": "TEST-ORDER-002",<br /> "orderDate": "2023-09-09T12:34:56.000Z",<br /> "orderStatus": "awaiting_payment",<br /> "billTo": {<br /> "name": "Jane Doe",<br /> "street1": "456 Another St",<br /> "city": "Othertown",<br /> "state": "NY",<br /> "postalCode": "67890",<br /> "country": "US"<br /> },<br /> "shipTo": {<br /> "name": "Jane Doe",<br /> "street1": "456 Another St",<br /> "city": "Othertown",<br /> "state": "NY",<br /> "postalCode": "67890",<br /> "country": "US"<br /> }<br /> }<br />]</code> |
| Connection   | The ShipStation connection to use.                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Create or Update Order {#createorupdateorder}

Create a new order or update an existing one.

| Input            | Comments                                                                                                                                                  | Default                                                                                                                                                                                                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Order Number     | The user-defined order number to identify the order.                                                                                                      |                                                                                                                                                                                                                                                                          |
| Order Date       | The date the order was placed.                                                                                                                            | 2023-09-08T12:34:56.000Z                                                                                                                                                                                                                                                 |
| Order Status     | The order status to filter results (e.g., awaiting_payment, awaiting_shipment, shipped).                                                                  |                                                                                                                                                                                                                                                                          |
| Order Key        | The unique order key. If provided, the create order method will either create a new order if the key is not found, or update the existing order if found. |                                                                                                                                                                                                                                                                          |
| Billing Address  | Provide the billing address in JSON format.                                                                                                               | <code>{<br /> "name": "John Doe",<br /> "company": "JD Company",<br /> "street1": "123 Main St",<br /> "city": "Austin",<br /> "state": "TX",<br /> "postalCode": "78701",<br /> "country": "US",<br /> "phone": "123-456-7890",<br /> "residential": true<br />}</code> |
| Shipping Address | Provide the shipping address in JSON format.                                                                                                              | <code>{<br /> "name": "Jane Doe",<br /> "company": "JD Company",<br /> "street1": "123 Main St",<br /> "city": "Austin",<br /> "state": "TX",<br /> "postalCode": "78701",<br /> "country": "US",<br /> "phone": "123-456-7890",<br /> "residential": true<br />}</code> |
| Connection       | The ShipStation connection to use.                                                                                                                        |                                                                                                                                                                                                                                                                          |
| Field            | A list of additional fields to include in the order.                                                                                                      |                                                                                                                                                                                                                                                                          |
| Debug Request    | Enabling this flag will log out the current request.                                                                                                      | false                                                                                                                                                                                                                                                                    |

### Create Shipment Label {#createshipmentlabel}

Creates a shipping label.

| Input             | Comments                                                                                | Default                                                                                                                                                                                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        | The ShipStation connection to use.                                                      |                                                                                                                                                                                                                                                                                   |
| Carrier Code      | The carrier code for shipping.                                                          |                                                                                                                                                                                                                                                                                   |
| Service Code      | The shipping service code for the label.                                                |                                                                                                                                                                                                                                                                                   |
| Package Code      | The package type code for the label.                                                    |                                                                                                                                                                                                                                                                                   |
| Ship Date         | The date the shipment will be shipped in YYYY-MM-DD format.                             |                                                                                                                                                                                                                                                                                   |
| Shipment's Weight | The weight of the shipment, following the Weight model. Note: WeightUnits is read-only. | <code>{<br /> "value": 3,<br /> "units": "ounces",<br /> "WeightUnits": 2<br />}</code>                                                                                                                                                                                           |
| Shipping Address  | Provide the shipping address in JSON format.                                            | <code>{<br /> "name": "Jane Doe",<br /> "company": "JD Company",<br /> "street1": "123 Main St",<br /> "city": "Austin",<br /> "state": "TX",<br /> "postalCode": "78701",<br /> "country": "US",<br /> "phone": "123-456-7890",<br /> "residential": true<br />}</code>          |
| Origin Address    | Provide the origin address in JSON format.                                              | <code>{<br /> "name": "John Smith",<br /> "company": "JS Company",<br /> "street1": "456 Elm St",<br /> "city": "San Francisco",<br /> "state": "CA",<br /> "postalCode": "94107",<br /> "country": "US",<br /> "phone": "987-654-3210",<br /> "residential": false<br />}</code> |
| Field             | A list of additional fields to include in the shipment.                                 |                                                                                                                                                                                                                                                                                   |

### Create Warehouse {#createwarehouse}

Adds a Ship From Location (formerly known as warehouse) to your account.

| Input                | Comments                                                                 | Default |
| -------------------- | ------------------------------------------------------------------------ | ------- |
| Connection           | The ShipStation connection to use.                                       |         |
| Warehouse Name       | The name of the ship from location.                                      |         |
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

Soft delete an order from the database, setting it to inactive.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Order ID   | The unique identifier for the order. |         |
| Connection | The ShipStation connection to use.   |         |

### Delete Warehouse {#deletewarehouse}

Removes a warehouse (or Ship From location) from ShipStation's UI. Sets it to Inactive status.

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The ShipStation connection to use.       |         |
| Warehouse ID | The unique identifier for the warehouse. |         |

### Get Customer {#getcustomer}

Retrieve a specific customer by their system generated identifier

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Customer ID | The unique identifier for the customer. |         |
| Connection  | The ShipStation connection to use.      |         |

### Get Order {#getorder}

Retrieve a single order from the database.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Order ID   | The unique identifier for the order. |         |
| Connection | The ShipStation connection to use.   |         |

### Get Product {#getproduct}

Retrieve a specific product from the database by its ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Product ID | The unique identifier for the product. |         |
| Connection | The ShipStation connection to use.     |         |

### Get Store {#getstore}

Retrieve detailed information about a specific store.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The ShipStation connection to use.   |         |
| Store ID   | The unique identifier for the store. |         |

### Get Warehouse {#getwarehouse}

Retrieve detailed information about a specific Ship From Location (formerly known as warehouse).

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The ShipStation connection to use.       |         |
| Warehouse ID | The unique identifier for the warehouse. |         |

### List Carriers {#listcarriers}

List all shipping providers connected to this ShipStation account.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The ShipStation connection to use. |         |

### List Customers {#listcustomers}

Retrieve a list of customers based on specified criteria

| Input          | Comments                                                        | Default |
| -------------- | --------------------------------------------------------------- | ------- |
| State Code     | The state code to filter customers.                             |         |
| Country Code   | The two-letter ISO country code to filter customers.            |         |
| Marketplace ID | The marketplace ID to filter customers.                         |         |
| Tag ID         | The tag ID to filter customers.                                 |         |
| Sort By        | The field name to sort results by.                              |         |
| Sort Direction | The direction to sort results (asc or desc).                    |         |
| Page           | The page number to retrieve (starts at 1).                      |         |
| Page Size      | The maximum number of results to return per page. Maximum: 500. |         |
| Connection     | The ShipStation connection to use.                              |         |

### List Fulfillments {#listfulfillments}

Retrieve a list of fulfillments based on specified criteria.

| Input          | Comments                                                        | Default |
| -------------- | --------------------------------------------------------------- | ------- |
| Connection     | The ShipStation connection to use.                              |         |
| Fulfillment ID | The unique identifier for the fulfillment.                      |         |
| Order ID       | The unique identifier for the order.                            |         |
| Page           | The page number to retrieve (starts at 1).                      |         |
| Page Size      | The maximum number of results to return per page. Maximum: 500. |         |

### List Orders {#listorders}

Retrieve a list of orders based on specified criteria.

| Input         | Comments                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------- | ------- |
| Customer Name | The customer name to filter orders.                                                      |         |
| Order Status  | The order status to filter results (e.g., awaiting_payment, awaiting_shipment, shipped). |         |
| Page          | The page number to retrieve (starts at 1).                                               |         |
| Page Size     | The maximum number of results to return per page. Maximum: 500.                          |         |
| Connection    | The ShipStation connection to use.                                                       |         |

### List Packages {#listpackages}

Retrieves a list of packages for the specified carrier.

| Input        | Comments                           | Default |
| ------------ | ---------------------------------- | ------- |
| Carrier Code | The carrier code for shipping.     |         |
| Connection   | The ShipStation connection to use. |         |

### List Products {#listproducts}

Obtains a list of products that match the specified criteria.

| Input               | Comments                                                                 | Default |
| ------------------- | ------------------------------------------------------------------------ | ------- |
| Connection          | The ShipStation connection to use.                                       |         |
| SKU                 | The SKU to filter products.                                              |         |
| Product Name        | The product name to filter results.                                      |         |
| Product Category ID | The product category ID to filter results.                               |         |
| Product Type ID     | The product type ID to filter results.                                   |         |
| Tag ID              | The tag ID to filter customers.                                          |         |
| Start Date          | The start date to filter products by creation date in YYYY-MM-DD format. |         |
| End Date            | The end date to filter products by creation date in YYYY-MM-DD format.   |         |
| Sort By             | The field name to sort results by.                                       |         |
| Sort Direction      | The direction to sort results (asc or desc).                             |         |
| Page                | The page number to retrieve (starts at 1).                               |         |
| Page Size           | The maximum number of results to return per page. Maximum: 500.          |         |
| Show Inactive       | When true, includes inactive stores in the results.                      | false   |

### List Services {#listservices}

Retrieves the list of available shipping services provided by the specified carrier.

| Input        | Comments                           | Default |
| ------------ | ---------------------------------- | ------- |
| Carrier Code | The carrier code for shipping.     |         |
| Connection   | The ShipStation connection to use. |         |

### List Shipments {#listshipments}

Obtains a list of shipments that match the specified criteria.

| Input                  | Comments                                                                  | Default |
| ---------------------- | ------------------------------------------------------------------------- | ------- |
| Connection             | The ShipStation connection to use.                                        |         |
| Tracking Number        | The tracking number to filter shipments.                                  |         |
| Create Date Start      | The start date to filter shipments by creation date in YYYY-MM-DD format. |         |
| Create Date End        | The end date to filter shipments by creation date in YYYY-MM-DD format.   |         |
| Ship Date Start        | The start date to filter shipments by ship date in YYYY-MM-DD format.     |         |
| Ship Date End          | The end date to filter shipments by ship date in YYYY-MM-DD format.       |         |
| Recipient Name         | The recipient name to filter shipments.                                   |         |
| Recipient Country Code | The two-letter ISO country code to filter shipments by recipient country. |         |
| Page                   | The page number to retrieve (starts at 1).                                |         |
| Page Size              | The maximum number of results to return per page. Maximum: 500.           |         |

### List Stores {#liststores}

Retrieve the list of installed stores on the account.

| Input          | Comments                                            | Default |
| -------------- | --------------------------------------------------- | ------- |
| Connection     | The ShipStation connection to use.                  |         |
| Show Inactive  | When true, includes inactive stores in the results. | false   |
| Marketplace ID | The marketplace ID to filter stores.                |         |

### List Users {#listusers}

Retrieve the list of users on the account.

| Input               | Comments                                                                 | Default |
| ------------------- | ------------------------------------------------------------------------ | ------- |
| Connection          | The ShipStation connection to use.                                       |         |
| Show Inactive Users | Determines whether inactive users will be returned in the list of users. | false   |

### List Warehouses {#listwarehouses}

Retrieves a list of your Ship From Locations (formerly known as warehouses).

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The ShipStation connection to use. |         |

### List Webhooks {#listwebhooks}

Retrieves a list of registered webhooks for the account.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The ShipStation connection to use. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to ShipStation.

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
| Connection              | The ShipStation connection to use.                                                                                                                                                               |         |

### Subscribe to Webhook {#subscribetowebhook}

Subscribes to a specific type of webhook in ShipStation.

| Input         | Comments                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The ShipStation connection to use.                                                                 |         |
| Target URL    | The URL where webhook events will be sent.                                                         |         |
| Event         | The webhook event type to subscribe to.                                                            |         |
| Store ID      | The store ID to filter webhook triggers. When provided, webhooks will only trigger for this store. |         |
| Friendly Name | The display name for the webhook.                                                                  |         |

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
| Product ID   | The unique identifier for the product.                                                  |                                                                                                    |
| Product Data | The complete data for updating the product. This call does not support partial updates. | <code>{<br /> "aliases": null,<br /> "productId": 123456789,<br /> "sku": "BEAU-000"<br />}</code> |
| Connection   | The ShipStation connection to use.                                                      |                                                                                                    |

### Update Store {#updatestore}

Updates an existing store.

| Input             | Comments                                                                           | Default                                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Connection        | The ShipStation connection to use.                                                 |                                                                                                                 |
| Store ID          | The unique identifier for the store.                                               |                                                                                                                 |
| Store Update Data | All the data needed to update an existing store. Must provide the entire resource. | <code>{<br /> "storeId": 12345,<br /> "storeName": "WooCommerce Store",<br /> "marketplaceId": 36<br />}</code> |

### Update Warehouse {#updatewarehouse}

Updates an existing Ship From Location (formerly known as warehouse).

| Input                 | Comments                                                                                        | Default                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Connection            | The ShipStation connection to use.                                                              |                                                                                                   |
| Warehouse Update Data | All the data needed to update an existing Ship From Location. Must provide the entire resource. | <code>{<br /> "warehouseId": 12345,<br /> "warehouseName": "API Ship From Location"<br />}</code> |
