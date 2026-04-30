---
title: ShipBob Connector
sidebar_label: ShipBob
description: Shipbob offers an end to end fulfillment services for Ecommerce vendors.
---

![ShipBob](./assets/shipbob.png#connector-icon)
[Shipbob](https://www.shipbob.com/) offers an end to end fulfillment services for Ecommerce vendors.

Use the Shipbob component to manage orders, shipments, labels, and more.

## Connections

### ShipBob Personal Access Token {#apitoken}

Authenticate with ShipBob using a Personal Access Token

If you're building a single-user custom integration, you can use the Personal Access Token (PAT) method. This generates a ready-to-use bearer-type token with full access to the merchant's account.

You can generate credentials from the ShipBob dashboard.

For Production Environment, [click here](https://web.shipbob.com/app/merchant/#/Integrations/token-management).
For Sandbox Environment, [click here](https://webstage.shipbob.dev/app/merchant/#/Integrations/token-management).

When you request your first PAT, ShipBob automatically generates an application (called "SMA" or single-merchant application) and [channel](https://developer.shipbob.com/api/channels/get-channels) to house all your future PATs. You can request as many as you like, and revoke them at any time.

`NOTE: These tokens do not expire, so be extremely cautious when sharing them.`

Your PAT should automatically have read and write access to the entire ShipBob account.

To use your PAT, just provide the token as an Authorization header formatted like this:

`bearer [your_api_token]`

First you should use your PAT to hit the [GET Channel](https://developer.shipbob.com/api/channels/get-channels) endpoint, so you can use your channel ID in the headers of subsequent API calls. Your response will look like this:

| Input                 | Comments                                                                                                                                 | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Personal Access Token | Log in to https://web.shipbob.com/app/merchant/#/Integrations/token-management to fetch a personal access token for development purposes |         |

## Triggers

### Event Topic Subscription {#eventtopicsubscription}

Get notified when a specific event occurs

| Input                      | Comments                                                                                      | Default |
| -------------------------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The ShipBob connection to use.                                                                |         |
| Version                    | The version of the ShipBob API to use                                                         | 1.0     |
| Topics to Subscribe        | List of webhook topics to subscribe to                                                        |         |
| Overwrite Webhook Settings | When true, deletes existing webhook settings pointing to this flow's URL and creates new ones | false   |

### Webhook {#webhook}

Receive and validate webhook requests from ShipBob for webhooks you configure.

## Actions

### Cancel Order {#cancelorder}

Cancel an existing Order by Order ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.        |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Order ID           | The order ID to retrieve              |         |
| ShipBob Channel ID | Channel ID for operation              |         |

### Cancel Shipments {#cancelshipment}

Cancel multiple Shipments by Shipment ID

| Input              | Comments                              | Default                 |
| ------------------ | ------------------------------------- | ----------------------- |
| Connection         | The ShipBob connection to use.        |                         |
| Version            | The version of the ShipBob API to use | 1.0                     |
| ShipBob Channel ID | Channel ID for operation              |                         |
| Shipment IDs       | List of shipment IDs to cancel        | <code>["000xxx"]</code> |

### Cancel Warehouse Receiving Order {#cancelwarehousereceivingorder}

Cancels a Warehouse Receiving Order by Order ID

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Connection   | The ShipBob connection to use.        |         |
| Version      | The version of the ShipBob API to use | 2.0     |
| Receiving ID | ID of the receiving order             |         |

### Create Order {#createorder}

Create a new Order

| Input                 | Comments                                                                                                                                                                                                                               | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The ShipBob connection to use.                                                                                                                                                                                                         |         |
| Version               | The version of the ShipBob API to use                                                                                                                                                                                                  | 1.0     |
| ShipBob Channel ID    | Channel ID for operation                                                                                                                                                                                                               |         |
| Shipping Method       | Client-defined shipping method matching what the user has listed as the shipping method on the Ship Option Mapping setup page in the ShipBob Merchant Portal. If they don't match, a new one will be created and defaulted to Standard |         |
| Recipient             | Information about the recipient of an order                                                                                                                                                                                            |         |
| Products              | Products included in the order. Products identified by reference_id must also include the product name if there is no matching ShipBob product                                                                                         |         |
| Reference ID          | Unique and immutable order identifier from your upstream system                                                                                                                                                                        |         |
| Shipping Terms        | Shipping properties to be used for fulfilling an order                                                                                                                                                                                 |         |
| Retailer Program Data | Retailer-specific program data for fulfilling orders                                                                                                                                                                                   |         |
| Financials            | Sum of all line item prices, discounts, and taxes in USD                                                                                                                                                                               |         |
| Order Number          | User-friendly order ID or store order number that will be shown on the Orders Page. If not provided, reference ID will be used                                                                                                         |         |
| Type                  | Order type. Options: DTC (Direct to Consumer), DropShip. Defaults to DTC if not provided. Note: B2B is not currently supported                                                                                                         |         |
| Tags                  | Key-value pairs to store extra information at the order level for API purposes. ShipBob won't display the info in the ShipBob Merchant Portal or react based on this data                                                              |         |
| Purchase Date         | Date this order was purchased by the end user (YYYY-MM-DD)                                                                                                                                                                             |         |
| Location ID           | Desired fulfillment center location ID. If not specified, ShipBob will determine the location that fulfills this order                                                                                                                 |         |
| Gift Message          | Gift message to include with the order                                                                                                                                                                                                 |         |

### Create Warehouse Receiving Order {#createwarehousereceivingorder}

Create a new Warehouse Receiving Order

| Input                 | Comments                                                                                                                                                                    | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The ShipBob connection to use.                                                                                                                                              |         |
| Version               | The version of the ShipBob API to use                                                                                                                                       | 2.0     |
| Fulfillment Center    | Information that assigns a receiving order to a fulfillment center. If the fulfillment center is in a receiving hub region, the response will be the receiving hub location |         |
| Package Type          | Type of package for the shipment                                                                                                                                            |         |
| Box Packaging Type    | How items are packaged in boxes                                                                                                                                             |         |
| Boxes                 | Box shipments to be added to this receiving order                                                                                                                           |         |
| Expected Arrival Date | Expected arrival date of all the box shipments in this receiving order (YYYY-MM-DD)                                                                                         |         |
| Purchase Order Number | Purchase order number for this receiving order                                                                                                                              |         |

### Create Webhook {#createwebhook}

Creates a new Webhook

| Input              | Comments                                                                                                                                                       | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.                                                                                                                                 |         |
| Version            | The version of the ShipBob API to use                                                                                                                          | 1.0     |
| Topic              | Topic of the webhook to subscribe to                                                                                                                           |         |
| Subscription URL   | URL to call when an event matching the subscription topic is raised. Must have SSL enabled (https) and accept POST requests with content type application/json |         |
| ShipBob Channel ID | Channel ID for operation                                                                                                                                       |         |

### Delete All Instanced Webhooks {#deleteallwebhooks}

Delete all webhooks that point to a flow in this instance

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The ShipBob connection to use.        |         |
| Version    | The version of the ShipBob API to use | 1.0     |

### Delete Webhook {#deletewebhook}

Delete a Webhook by Webhook ID

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The ShipBob connection to use.        |         |
| Version    | The version of the ShipBob API to use | 1.0     |
| Webhook ID | ID of the webhook                     |         |

### Get a list of Inventory Items by Product ID {#listbyproductid}

Retrieve a list of Inventory Items by their Product ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.        |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| ShipBob Channel ID | Channel ID for operation              |         |
| Product ID         | The product ID to retrieve            |         |

### Get All Shipments for Order {#getallshipmentsfororder}

Retrieve all Shipments on an Order by Order ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.        |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Order ID           | The order ID to retrieve              |         |
| ShipBob Channel ID | Channel ID for operation              |         |

### Get Inventory Item {#getinventoryitem}

Get single inventory item by Inventory ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.        |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Inventory ID       | The inventory ID to retrieve          |         |
| ShipBob Channel ID | Channel ID for operation              |         |

### Get Logs for Shipment {#getlogsshipment}

Retrieve logs for a Shipment by Shipment ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.        |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Shipment ID        | The shipment ID to retrieve           |         |
| ShipBob Channel ID | Channel ID for operation              |         |

### Get Multiple Products {#listproduct}

Retrieve a list of several Products

| Input              | Comments                                           | Default |
| ------------------ | -------------------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.                     |         |
| Version            | The version of the ShipBob API to use              | 1.0     |
| ShipBob Channel ID | Channel ID for operation                           |         |
| Page               | Page number of orders to retrieve                  |         |
| Limit              | Number of orders per page to retrieve              |         |
| Order IDs          | Comma separated list of product ids to filter by   |         |
| Reference IDs      | Comma-separated list of reference IDs to filter by |         |
| Search             | Search term to filter by Inventory ID or Name      |         |
| Active Status      | Filter by active status                            |         |
| Bundle Status      | Filter by bundle status                            |         |

### Get Order {#getorder}

Retrieve an order by Order ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.        |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Order ID           | The order ID to retrieve              |         |
| ShipBob Channel ID | Channel ID for operation              |         |

### Get Shipment {#getshipment}

Retrieve a Shipment by Shipment ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.        |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Shipment ID        | The shipment ID to retrieve           |         |
| ShipBob Channel ID | Channel ID for operation              |         |

### Get Single Product {#getproduct}

Retrieve a single product by Product ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.        |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Product ID         | The product ID to retrieve            |         |
| ShipBob Channel ID | Channel ID for operation              |         |

### Get Warehouse Receiving Order Box Labels {#getwarehousereceivingorderboxlabels}

Retrieves Receiving Order Box Labels by Order ID

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Connection   | The ShipBob connection to use.        |         |
| Version      | The version of the ShipBob API to use | 2.0     |
| Receiving ID | ID of the receiving order             |         |

### Get Warehouse Receiving Orders {#getwarehousereceivingorders}

Receive a Warehouse Receiving Order by ID

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Connection   | The ShipBob connection to use.        |         |
| Version      | The version of the ShipBob API to use | 2.0     |
| Receiving ID | ID of the receiving order             |         |

### List Channels {#listchannels}

List user-authorized channels info

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The ShipBob connection to use.        |         |
| Version    | The version of the ShipBob API to use | 1.0     |

### List Fulfillment Centers {#listfulfillmentcenters}

Retrieves a list of Fulfillment Centers

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The ShipBob connection to use.        |         |
| Version    | The version of the ShipBob API to use | 1.0     |

### List Inventory Items {#listinventoryitems}

Retrieve a list of Inventory Items

| Input              | Comments                                                                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.                                                                                                                                |         |
| Version            | The version of the ShipBob API to use                                                                                                                         | 1.0     |
| ShipBob Channel ID | Channel ID for operation                                                                                                                                      |         |
| Page               | Page number of orders to retrieve                                                                                                                             |         |
| Limit              | Number of orders per page to retrieve                                                                                                                         |         |
| IsActive           | When true, marks the inventory as active                                                                                                                      | false   |
| IsDigital          | When true, marks the inventory as digital (non-physical)                                                                                                      | false   |
| Order IDs          | Comma-separated list of order IDs to filter by                                                                                                                |         |
| Sort               | Sort field(s) in ascending order (default). Prefix field with '-' for descending order. Example: -onHand,name sorts by onHand descending, then name ascending |         |
| Search             | Search term to filter by Inventory ID or Name                                                                                                                 |         |
| Location Type      | Location type to filter by. Options: hub, spoke, lts. Defaults to all locations if not specified                                                              |         |

### List Locations {#listlocations}

Receives a list of the physical locations across a fulfillment network

| Input             | Comments                                              | Default |
| ----------------- | ----------------------------------------------------- | ------- |
| Connection        | The ShipBob connection to use.                        |         |
| Version           | The version of the ShipBob API to use                 | 1.0     |
| Include Inactive  | When true, includes inactive locations in the results | false   |
| Receiving Enabled | When true, returns only receiving-enabled locations   | false   |
| Access Granted    | When true, returns only locations with access granted | false   |

### List Orders {#listorders}

Retrieve all Orders

| Input                           | Comments                                                                                                                            | Default |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The ShipBob connection to use.                                                                                                      |         |
| Version                         | The version of the ShipBob API to use                                                                                               | 1.0     |
| ShipBob Channel ID              | Channel ID for operation                                                                                                            |         |
| Page                            | Page number of orders to retrieve                                                                                                   |         |
| Limit                           | Number of orders per page to retrieve                                                                                               |         |
| Order IDs                       | Comma-separated list of order IDs to filter by                                                                                      |         |
| Reference IDs                   | Comma-separated list of reference IDs to filter by                                                                                  |         |
| Start Date                      | Start date to filter orders inserted on or after this date (YYYY-MM-DD)                                                             |         |
| End Date                        | End date to filter orders inserted on or before this date (YYYY-MM-DD)                                                              |         |
| Sort Order                      | Order to sort results. Options: Newest, Oldest                                                                                      |         |
| Has Tracking                    | When true, filters to orders that have been assigned a tracking number                                                              | false   |
| Last Update Start Date          | Start date to filter orders updated on or after this date (YYYY-MM-DD)                                                              |         |
| Last Update End Date            | End date to filter orders updated on or before this date (YYYY-MM-DD)                                                               |         |
| Is Tracking Uploaded            | When true, filters to orders with tracking information fully uploaded                                                               | false   |
| Last Tracking Update Start Date | Start date to filter orders with tracking updates on or after this date (YYYY-MM-DD). Only returns orders with tracking information |         |
| Last Tracking Update End Date   | End date to filter orders with tracking updates on or before this date (YYYY-MM-DD). Only returns orders with tracking information  |         |
| Delivery Start Date             | Start date to filter orders with delivery date on or after this date (YYYY-MM-DD). Only returns orders with tracking information    |         |
| Delivery En Date                | End date to filter orders with delivery date on or before this date (YYYY-MM-DD). Only returns orders with tracking information     |         |
| Fulfillment Start Date          | Start date to filter orders with fulfillment date on or after this date (YYYY-MM-DD). Only returns orders with tracking information |         |
| Fulfillment End Date            | End date to filter orders with fulfillment date on or before this date (YYYY-MM-DD). Only returns orders with tracking information  |         |

### List Warehouse Receiving Orders {#listwarehousereceivingorders}

Retrieve all Warehouse Receiving Orders

| Input                  | Comments                                                                                                                      | Default                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection             | The ShipBob connection to use.                                                                                                |                         |
| Version                | The version of the ShipBob API to use                                                                                         | 2.0                     |
| Page                   | Page of WROs to get                                                                                                           |                         |
| Limit                  | Number of WROs per page to request                                                                                            |                         |
| Order IDs              | Comma-separated list of order IDs to filter by                                                                                |                         |
| Statuses               | List of WRO statuses to filter by. Options: Awaiting, Processing, Completed, Cancelled, Incomplete, Arrived, PartiallyArrived | <code>["000xxx"]</code> |
| Insert Start Date      | Earliest date that a WRO was created (YYYY-MM-DD)                                                                             |                         |
| Insert End Date        | Latest date that a WRO was created (YYYY-MM-DD)                                                                               |                         |
| Fulfillment Center IDs | List of WRO fulfillment center IDs to filter by                                                                               | <code>["000xxx"]</code> |
| Purchase Order Numbers | List of WRO purchase order numbers to filter by                                                                               | <code>["000xxx"]</code> |

### List Webhooks {#listwebhooks}

Get a list of active Webhooks

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The ShipBob connection to use.         |         |
| Version    | The version of the ShipBob API to use  | 1.0     |
| Topic      | Topic of the webhook to subscribe to   |         |
| Page       | Page of Webhooks to get                |         |
| Limit      | Amount of Webhooks per page to request |         |

### Raw Request {#rawrequest}

Send raw HTTP request to ShipBob

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The ShipBob connection to use.                                                                                                                                                                   |         |
| Version                 | The version of the ShipBob API to use                                                                                                                                                            | 1.0     |
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

### Update Product {#updateproduct}

Update information on a single Product

| Input              | Comments                                                                                                    | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The ShipBob connection to use.                                                                              |         |
| Version            | The version of the ShipBob API to use                                                                       | 1.0     |
| Product ID         | The product ID to retrieve                                                                                  |         |
| ShipBob Channel ID | Channel ID for operation                                                                                    |         |
| Name               | The name of the product                                                                                     |         |
| Sku                | The stock keeping unit (SKU) of the product                                                                 |         |
| Barcode            | Barcode for the product                                                                                     |         |
| GTIN               | Global Trade Item Number - unique and internationally recognized identifier assigned to item by company GS1 |         |
| UPC                | Universal Product Code (UPC) - unique external identifier                                                   |         |
| Unit Price         | The price of one unit in USD                                                                                |         |
