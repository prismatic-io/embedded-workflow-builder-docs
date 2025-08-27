---
title: ShipStation Connector
sidebar_label: ShipStation
description: ShipStation is an ecommerce shipping software solution.
---

![ShipStation](./assets/shipstation.png#connector-icon)
ShipStation is an ecommerce shipping software solution.

## Connections

### ShipStation API Key

Prerequisites
Before setting up a ShipStation connection, ensure you have:

ShipStation API Key
ShipStation API Secret
To acquire these, navigate to your ShipStation account dashboard and generate a new API Key and API Secret pair.

Setting up a ShipStation Connection in Your Application
To interface with ShipStation, an API Key and API Secret are required for authentication.

Assign the User with Correct Permissions
Make sure the API key you are using has the correct permissions to interact with the ShipStation API.

Generating API Credentials
Go to your ShipStation account settings.
Navigate to the 'API Settings' section.
Generate or note down your API Key and API Secret.
Adding API Credentials to Connection
Once you have the API Key and API Secret, add these to your application’s ShipStation connection settings.

This will enable authenticated requests to ShipStation.

| Input      | Comments                                                    | Default |
| ---------- | ----------------------------------------------------------- | ------- |
| API Key    | Get your API Key from your ShipStation account settings.    |         |
| API Secret | Get your API Secret from your ShipStation account settings. |         |

## Triggers

### Webhook

Receive and validate webhook requests from ShipStation for webhooks you configure.

## Actions

### Create Label for Order

Creates a shipping label for a specified order.

| Input        | Comments                                                                           | Default |
| ------------ | ---------------------------------------------------------------------------------- | ------- |
| Order ID     | The system generated identifier for the Order.                                     |         |
| Carrier Code | The code for the carrier that is to appear on the label.                           |         |
| Service Code | The code for the shipping service that is to appear on the label.                  |         |
| Confirmation | The type of delivery confirmation that is to be used once the shipment is created. |         |
| Ship Date    | The date the order should be shipped.                                              |         |
| Test Label   | Specifies whether or not to create a test label.                                   | false   |
| Connection   |                                                                                    |         |
| Fields       | A list of additional fields to include in the label for order.                     |         |

### Create or Update Multiple Orders

Create or update multiple orders in one request.

| Input        | Comments                                                               | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orders Array | Provide an array of order objects to create or update multiple orders. | <code>[<br /> {<br /> "orderNumber": "TEST-ORDER-001",<br /> "orderDate": "2023-09-08T12:34:56.000Z",<br /> "orderStatus": "awaiting_shipment",<br /> "billTo": {<br /> "name": "John Doe",<br /> "street1": "123 Main St",<br /> "city": "Anytown",<br /> "state": "CA",<br /> "postalCode": "12345",<br /> "country": "US"<br /> },<br /> "shipTo": {<br /> "name": "John Doe",<br /> "street1": "123 Main St",<br /> "city": "Anytown",<br /> "state": "CA",<br /> "postalCode": "12345",<br /> "country": "US"<br /> }<br /> },<br /> {<br /> "orderNumber": "TEST-ORDER-002",<br /> "orderDate": "2023-09-09T12:34:56.000Z",<br /> "orderStatus": "awaiting_payment",<br /> "billTo": {<br /> "name": "Jane Doe",<br /> "street1": "456 Another St",<br /> "city": "Othertown",<br /> "state": "NY",<br /> "postalCode": "67890",<br /> "country": "US"<br /> },<br /> "shipTo": {<br /> "name": "Jane Doe",<br /> "street1": "456 Another St",<br /> "city": "Othertown",<br /> "state": "NY",<br /> "postalCode": "67890",<br /> "country": "US"<br /> }<br /> }<br />]</code> |
| Connection   |                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Create or Update Order

Create a new order or update an existing one.

| Input            | Comments                                                                                                                                                                           | Default                                                                                                                                                                                                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Order Number     | User-defined order number to identify the order.                                                                                                                                   |                                                                                                                                                                                                                                                                          |
| Order Date       | The date the order was placed.                                                                                                                                                     | 2023-09-08T12:34:56.000Z                                                                                                                                                                                                                                                 |
| Order Status     | Filter orders by status.                                                                                                                                                           |                                                                                                                                                                                                                                                                          |
| Order Key        | If the orderKey is provided, the createorder method will either: create a new order if the provided orderKey is not found, or, update the existing order if the orderKey is found. |                                                                                                                                                                                                                                                                          |
| Billing Address  | Provide the billing address in JSON format.                                                                                                                                        | <code>{<br /> "name": "John Doe",<br /> "company": "JD Company",<br /> "street1": "123 Main St",<br /> "city": "Austin",<br /> "state": "TX",<br /> "postalCode": "78701",<br /> "country": "US",<br /> "phone": "123-456-7890",<br /> "residential": true<br />}</code> |
| Shipping Address | Provide the shipping address in JSON format.                                                                                                                                       | <code>{<br /> "name": "Jane Doe",<br /> "company": "JD Company",<br /> "street1": "123 Main St",<br /> "city": "Austin",<br /> "state": "TX",<br /> "postalCode": "78701",<br /> "country": "US",<br /> "phone": "123-456-7890",<br /> "residential": true<br />}</code> |
| Connection       |                                                                                                                                                                                    |                                                                                                                                                                                                                                                                          |
| Field            | A list of additional fields to include in the order.                                                                                                                               |                                                                                                                                                                                                                                                                          |
| Debug Request    | Enabling this flag will log out the current request.                                                                                                                               | false                                                                                                                                                                                                                                                                    |

### Create Shipment Label

Creates a shipping label.

| Input             | Comments                                                                                | Default                                                                                                                                                                                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        |                                                                                         |                                                                                                                                                                                                                                                                                   |
| Carrier Code      | The carrier's code                                                                      |                                                                                                                                                                                                                                                                                   |
| Service Code      | Identifies the shipping service to be used for this label.                              |                                                                                                                                                                                                                                                                                   |
| Package Code      | Identifies the packing type that should be used for this label.                         |                                                                                                                                                                                                                                                                                   |
| Ship Date         | The date the shipment will be shipped.                                                  |                                                                                                                                                                                                                                                                                   |
| Shipment's Weight | The weight of the shipment, following the Weight model. Note: WeightUnits is read-only. | <code>{<br /> "value": 3,<br /> "units": "ounces",<br /> "WeightUnits": 2<br />}</code>                                                                                                                                                                                           |
| Shipping Address  | Provide the shipping address in JSON format.                                            | <code>{<br /> "name": "Jane Doe",<br /> "company": "JD Company",<br /> "street1": "123 Main St",<br /> "city": "Austin",<br /> "state": "TX",<br /> "postalCode": "78701",<br /> "country": "US",<br /> "phone": "123-456-7890",<br /> "residential": true<br />}</code>          |
| Origin Address    | Provide the origin address in JSON format.                                              | <code>{<br /> "name": "John Smith",<br /> "company": "JS Company",<br /> "street1": "456 Elm St",<br /> "city": "San Francisco",<br /> "state": "CA",<br /> "postalCode": "94107",<br /> "country": "US",<br /> "phone": "987-654-3210",<br /> "residential": false<br />}</code> |
| Field             | A list of additional fields to include in the shipment.                                 |                                                                                                                                                                                                                                                                                   |

### Create Warehouse

Adds a Ship From Location (formerly known as warehouse) to your account.

| Input                | Comments                                                                 | Default |
| -------------------- | ------------------------------------------------------------------------ | ------- |
| Connection           |                                                                          |         |
| Warehouse Name       | Name of Ship From Location.                                              |         |
| Origin Address       | The origin address. Shipping rates will be calculated from this address. |         |
| Return Address       | The return address. If not specified, the origin address will be used.   |         |
| Is Default Warehouse | Specifies whether or not this will be your default Ship From Location.   | false   |

### Deactivate Store

Deactivates the specified store.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection |                                              |         |
| Store ID   | Unique identifier for the store to retrieve. |         |

### Delete Instanced Webhooks

Deletes all webhooks that point to a flow in this instance.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete Order

Soft delete an order from the database, setting it to inactive.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Order ID   | The system generated identifier for the Order. |         |
| Connection |                                                |         |

### Delete Warehouse

Removes a warehouse (or Ship From location) from ShipStation's UI. Sets it to Inactive status.

| Input        | Comments                                         | Default |
| ------------ | ------------------------------------------------ | ------- |
| Connection   |                                                  |         |
| Warehouse ID | Unique identifier for the warehouse to retrieve. |         |

### Get Customer

Retrieve a specific customer by their system generated identifier

| Input       | Comments                                      | Default |
| ----------- | --------------------------------------------- | ------- |
| Customer ID | System generated identifier for the Customer. |         |
| Connection  |                                               |         |

### Get Order

Retrieve a single order from the database.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Order ID   | The system generated identifier for the Order. |         |
| Connection |                                                |         |

### Get Product

Retrieve a specific product from the database by its ID.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Product ID | The system generated identifier for the Product. |         |
| Connection |                                                  |         |

### Get Store

Retrieve detailed information about a specific store.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection |                                              |         |
| Store ID   | Unique identifier for the store to retrieve. |         |

### Get Warehouse

Retrieve detailed information about a specific Ship From Location (formerly known as warehouse).

| Input        | Comments                                         | Default |
| ------------ | ------------------------------------------------ | ------- |
| Connection   |                                                  |         |
| Warehouse ID | Unique identifier for the warehouse to retrieve. |         |

### List Carriers

List all shipping providers connected to this ShipStation account.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Customers

Retrieve a list of customers based on specified criteria

| Input          | Comments                                                                                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| State Code     | Returns customers that reside in the specified stateCode.                                               |         |
| Country Code   | Returns customers that reside in the specified countryCode. Use the two-letter ISO Origin Country code. |         |
| Marketplace ID | Returns customers that purchased items from the specified marketplaceId.                                |         |
| Tag ID         | Returns customers that have been tagged with the specified tagId.                                       |         |
| Sort By        | Sorts the order of the response based off the specified value.                                          |         |
| Sort Direction | Sets the direction of the sort order.                                                                   |         |
| Page           | Page number.                                                                                            |         |
| Page Size      | Requested page size. Max value is 500.                                                                  |         |
| Connection     |                                                                                                         |         |

### List Fulfillments

Retrieve a list of fulfillments based on specified criteria

| Input          | Comments                                                                             | Default |
| -------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                      |         |
| Fulfillment ID | Provide the Fulfillment ID as a string. It will be converted to a number internally. |         |
| Order ID       | Provide the Order ID as a string. It will be converted to a number internally.       |         |
| Page           | Page number.                                                                         |         |
| Page Size      | Requested page size. Max value is 500.                                               |         |

### List Orders

Retrieve a list of orders based on specified criteria.

| Input         | Comments                               | Default |
| ------------- | -------------------------------------- | ------- |
| Customer Name | Filter orders by customer name.        |         |
| Order Status  | Filter orders by status.               |         |
| Page          | Page number.                           |         |
| Page Size     | Requested page size. Max value is 500. |         |
| Connection    |                                        |         |

### List Packages

Retrieves a list of packages for the specified carrier.

| Input        | Comments           | Default |
| ------------ | ------------------ | ------- |
| Carrier Code | The carrier's code |         |
| Connection   |                    |         |

### List Products

Obtains a list of products that match the specified criteria.

| Input               | Comments                                                                   | Default |
| ------------------- | -------------------------------------------------------------------------- | ------- |
| Connection          |                                                                            |         |
| SKU                 | Returns products that match the specified SKU.                             |         |
| Product Name        | Returns products that match the specified product name.                    |         |
| Product Category ID | Returns products that match the specified productCategoryId.               |         |
| Product Type ID     | Returns products that match the specified productTypeId.                   |         |
| Tag ID              | Returns customers that have been tagged with the specified tagId.          |         |
| Start Date          | Returns products that were created after the specified date.               |         |
| End Date            | Returns products that were created before the specified date.              |         |
| Sort By             | Sorts the order of the response based off the specified value.             |         |
| Sort Direction      | Sets the direction of the sort order.                                      |         |
| Page                | Page number.                                                               |         |
| Page Size           | Requested page size. Max value is 500.                                     |         |
| Show Inactive       | Determines whether inactive stores will be returned in the list of stores. | false   |

### List Services

Retrieves the list of available shipping services provided by the specified carrier.

| Input        | Comments           | Default |
| ------------ | ------------------ | ------- |
| Carrier Code | The carrier's code |         |
| Connection   |                    |         |

### List Shipments

Obtains a list of shipments that match the specified criteria.

| Input                  | Comments                                                                                                    | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                             |         |
| Tracking Number        | Returns shipments with the specified tracking number.                                                       |         |
| Create Date Start      | Returns shipments created on or after the specified date.                                                   |         |
| Create Date End        | Returns shipments created on or before the specified date.                                                  |         |
| Ship Date Start        | Returns shipments with the ship date on or after the specified date.                                        |         |
| Ship Date End          | Returns shipments with the ship date on or before the specified date.                                       |         |
| Recipient Name         | Returns shipments shipped to the specified recipient name.                                                  |         |
| Recipient Country Code | Returns shipments shipped to the specified country code. Please use the two-letter ISO Origin Country code. |         |
| Page                   | Page number.                                                                                                |         |
| Page Size              | Requested page size. Max value is 500.                                                                      |         |

### List Stores

Retrieve the list of installed stores on the account.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                               |         |
| Show Inactive  | Determines whether inactive stores will be returned in the list of stores.                                    | false   |
| Marketplace ID | Returns stores of this marketplace type. Provide as a string and it will be converted to a number internally. |         |

### List Users

Retrieve the list of users on the account.

| Input               | Comments                                                                 | Default |
| ------------------- | ------------------------------------------------------------------------ | ------- |
| Connection          |                                                                          |         |
| Show Inactive Users | Determines whether inactive users will be returned in the list of users. | false   |

### List Warehouses

Retrieves a list of your Ship From Locations (formerly known as warehouses).

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Webhooks

Retrieves a list of registered webhooks for the account.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send raw HTTP request to ShipStation

| Input                   | Comments                                                                                                                            | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| URL                     | This is the URL to call.                                                                                                            |         |
| Method                  | The HTTP method to use.                                                                                                             |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                           |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                    |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2. |         |
| Header                  | A list of headers to send with the request.                                                                                         |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                            | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                 |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                    | false   |
| Connection              |                                                                                                                                     |         |

### Subscribe to Webhook

Subscribes to a specific type of webhook in ShipStation.

| Input         | Comments                                                             | Default |
| ------------- | -------------------------------------------------------------------- | ------- |
| Connection    |                                                                      |         |
| Target URL    | The URL to send the webhooks to.                                     |         |
| Event         | The type of webhook to subscribe to.                                 |         |
| Store ID      | If passed in, the webhooks will only be triggered for this store_id. |         |
| Friendly Name | Display name for the webhook.                                        |         |

### Unsubscribe to Webhook

Unsubscribes from a specific type of webhook in ShipStation.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Connection |                                                                    |         |
| Webhook ID | A unique ID generated by ShipStation and assigned to each webhook. |         |

### Update Product

Updates an existing product.

| Input        | Comments                                                                                | Default                                                                                            |
| ------------ | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Product ID   | The system generated identifier for the Product.                                        |                                                                                                    |
| Product Data | The complete data for updating the product. This call does not support partial updates. | <code>{<br /> "aliases": null,<br /> "productId": 123456789,<br /> "sku": "BEAU-000"<br />}</code> |
| Connection   |                                                                                         |                                                                                                    |

### Update Store

Updates an existing store.

| Input             | Comments                                                                           | Default                                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Connection        |                                                                                    |                                                                                                                 |
| Store ID          | Unique identifier for the store to retrieve.                                       |                                                                                                                 |
| Store Update Data | All the data needed to update an existing store. Must provide the entire resource. | <code>{<br /> "storeId": 12345,<br /> "storeName": "WooCommerce Store",<br /> "marketplaceId": 36<br />}</code> |

### Update Warehouse

Updates an existing Ship From Location (formerly known as warehouse).

| Input                 | Comments                                                                                        | Default                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Connection            |                                                                                                 |                                                                                                   |
| Warehouse Update Data | All the data needed to update an existing Ship From Location. Must provide the entire resource. | <code>{<br /> "warehouseId": 12345,<br /> "warehouseName": "API Ship From Location"<br />}</code> |
