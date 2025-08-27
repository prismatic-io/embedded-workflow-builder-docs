---
title: ShipBob Connector
sidebar_label: ShipBob
description: Shipbob offers an end to end fulfillment services for Ecommerce vendors.
---

![ShipBob](./assets/shipbob.png#connector-icon)
Shipbob offers an end to end fulfillment services for Ecommerce vendors.

## Connections

### ShipBob Personal Access Token

If you're building a single-user custom integration, you can use the Personal Access Token (PAT) method. This generates a ready-to-use bearer-type token with full access to the merchant's account.

You can generate credentials from the ShipBob dashboard.

For Production Environment, [click here](https://web.shipbob.com/app/merchant/#/Integrations/token-management).
For Sandbox Environment, [click here](https://webstage.shipbob.com/app/merchant/#/Integrations/token-management).

When you request your first PAT, ShipBob automatically generates an application (called "SMA" or single-merchant application) and [channel](https://developer.shipbob.com/api-docs/#tag/Channels) to house all your future PATs. You can request as many as you like, and revoke them at any time.

`NOTE: These tokens do not expire, so be extremely cautious when sharing them.`

Your PAT should automatically have read and write access to the entire ShipBob account.

To use your PAT, just provide the token as an Authorization header formatted like this:

`bearer [your_api_token]`

First you should use your PAT to hit the [GET Channel](https://developer.shipbob.com/api-docs#tag/Channels) endpoint, so you can use your channel ID in the headers of subsequent API calls. Your response will look like this:

| Input                 | Comments                                                                                                                                 | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Personal Access Token | Log in to https://web.shipbob.com/app/merchant/#/Integrations/token-management to fetch a personal access token for development purposes |         |

## Triggers

### Event Topic Subscription

Get notified when a specific event occurs

| Input                      | Comments                                                                                 | Default |
| -------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection                 |                                                                                          |         |
| Version                    | The version of the ShipBob API to use                                                    | 1.0     |
| Topics to Subscribe        | Topics to subscribe to                                                                   |         |
| Overwrite Webhook Settings | True to delete existing webhook settings pointing to this flow's URL and create new ones | false   |

### Webhook

Receive and validate webhook requests from ShipBob for webhooks you configure.

## Actions

### Cancel Order

Cancel an existing Order by Order ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         |                                       |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Order ID           | The order ID to retrieve              |         |
| ShipBob Channel ID | Channel Id for Operation              |         |

### Cancel Shipments

Cancel multiple Shipments by Shipment ID

| Input              | Comments                              | Default                 |
| ------------------ | ------------------------------------- | ----------------------- |
| Connection         |                                       |                         |
| Version            | The version of the ShipBob API to use | 1.0                     |
| ShipBob Channel ID | Channel Id for Operation              |                         |
| Shipment IDs       | Shipment IDs to cancel                | <code>["000xxx"]</code> |

### Cancel Warehouse Receiving Order

Cancels a Warehouse Receiving Order by Order ID

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Connection   |                                       |         |
| Version      | The version of the ShipBob API to use | 2.0     |
| Receiving ID | Id of the receiving order             |         |

### Create Order

Create a new Order

| Input                 | Comments                                                                                                                                                                                                                               | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                                                        |         |
| Version               | The version of the ShipBob API to use                                                                                                                                                                                                  | 1.0     |
| ShipBob Channel ID    | Channel Id for Operation                                                                                                                                                                                                               |         |
| Shipping Method       | Client-defined shipping method matching what the user has listed as the shipping method on the Ship Option Mapping setup page in the ShipBob Merchant Portal. If they don’t match, we will create a new one and default it to Standard |         |
| Recipient             | Information about the recipient of an order                                                                                                                                                                                            |         |
| Products              | Products included in the order. Products identified by reference_id must also include the product name if there is no matching ShipBob product.                                                                                        |         |
| Reference ID          | Unique and immutable order identifier from your upstream system                                                                                                                                                                        |         |
| Shipping Terms        | Contains shipping properties that need to be used for fulfilling an order.                                                                                                                                                             |         |
| Retailer Program Data | Contains shipping properties that need to be used for fulfilling an order.                                                                                                                                                             |         |
| Financials            | Sum of all line item prices, discounts, and taxes in USD                                                                                                                                                                               |         |
| Order Number          | User friendly orderId or store order number that will be shown on the Orders Page. If not provided, referenceId will be used                                                                                                           |         |
| Type                  | Defaults to Direct to Consumer (DTC) if not provided. Note: B2B is not supported at this time. One of DTC, B2B, DropShip                                                                                                               |         |
| Tags                  | Key value pair array to store extra information at the order level for API purposes. ShipBob won't display the info in the ShipBob Merchant Portal or react based on this data.                                                        |         |
| Purchase Date         | Date this order was purchase by the end user                                                                                                                                                                                           |         |
| Location ID           | Desired Fulfillment Center Location ID. If not specified, ShipBob will determine the location that fulfills this order.                                                                                                                |         |
| Gift Message          | Gift message associated with the order                                                                                                                                                                                                 |         |

### Create Warehouse Receiving Order

Create a new Warehouse Receiving Order

| Input                 | Comments                                                                                                                                                                                                    | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                             |         |
| Version               | The version of the ShipBob API to use                                                                                                                                                                       | 2.0     |
| Fulfillment Center    | Model containing information that assigns a receiving order to a fulfillment center. If the fulfillment center provided is in a receiving hub region, then the response will be the receiving hub location. |         |
| Package Type          |                                                                                                                                                                                                             |         |
| Box Packaging Type    |                                                                                                                                                                                                             |         |
| Boxes                 | Box shipments to be added to this receiving order                                                                                                                                                           |         |
| Expected Arrival Date | Expected arrival date of all the box shipments in this receiving order                                                                                                                                      |         |
| Purchase Order Number | Purchase order number for this receiving order                                                                                                                                                              |         |

### Create Webhook

Creates a new Webhook

| Input              | Comments                                                                                                                                                               | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                                        |         |
| Version            | The version of the ShipBob API to use                                                                                                                                  | 1.0     |
| Topic              | Topic of the webhooks requested                                                                                                                                        |         |
| Subscription URL   | URL we will call when an event matching the subscription topic is raised. Must have ssl enabled (https) and accept POST requests with content type of application/json |         |
| ShipBob Channel ID | Channel Id for Operation                                                                                                                                               |         |

### Delete All Instanced Webhooks

Delete all webhooks that point to a flow in this instance

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Version    | The version of the ShipBob API to use | 1.0     |

### Delete Webhook

Delete a Webhook by Webhook ID

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Version    | The version of the ShipBob API to use | 1.0     |
| Webhook ID | Id of the webhook                     |         |

### Get a list of Inventory Items by Product ID

Retrieve a list of Inventory Items by their Product ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         |                                       |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| ShipBob Channel ID | Channel Id for Operation              |         |
| Product ID         | The product ID to retrieve            |         |

### Get All Shipments for Order

Retrieve all Shipments on an Order by Order ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         |                                       |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Order ID           | The order ID to retrieve              |         |
| ShipBob Channel ID | Channel Id for Operation              |         |

### Get Inventory Item

Get single inventory item by Inventory ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         |                                       |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Inventory ID       | The inventory ID to retrieve          |         |
| ShipBob Channel ID | Channel Id for Operation              |         |

### Get Logs for Shipment

Retrieve logs for a Shipment by Shipment ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         |                                       |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Shipment ID        | The shipment ID to retrieve           |         |
| ShipBob Channel ID | Channel Id for Operation              |         |

### Get Multiple Products

Retrieve a list of several Products

| Input              | Comments                                                                                               | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                        |         |
| Version            | The version of the ShipBob API to use                                                                  | 1.0     |
| ShipBob Channel ID | Channel Id for Operation                                                                               |         |
| Page               | Page of orders to get                                                                                  |         |
| Limit              | Amount of orders per page to request                                                                   |         |
| Order IDs          | Comma separated list of product ids to filter by                                                       |         |
| Reference IDs      | Reference ids to filter by, comma separated                                                            |         |
| Search             | Search is available for 2 fields of the inventory record related to the product: Inventory ID and Name |         |
| Active Status      |                                                                                                        |         |
| Bundle Status      |                                                                                                        |         |

### Get Order

Retrieve an order by Order ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         |                                       |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Order ID           | The order ID to retrieve              |         |
| ShipBob Channel ID | Channel Id for Operation              |         |

### Get Shipment

Retrieve a Shipment by Shipment ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         |                                       |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Shipment ID        | The shipment ID to retrieve           |         |
| ShipBob Channel ID | Channel Id for Operation              |         |

### Get Single Product

Retrieve a single product by Product ID

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         |                                       |         |
| Version            | The version of the ShipBob API to use | 1.0     |
| Product ID         | The product ID to retrieve            |         |
| ShipBob Channel ID | Channel Id for Operation              |         |

### Get Warehouse Receiving Order Box Labels

Retrieves Receiving Order Box Labels by Order ID

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Connection   |                                       |         |
| Version      | The version of the ShipBob API to use | 2.0     |
| Receiving ID | Id of the receiving order             |         |

### Get Warehouse Receiving Orders

Receive a Warehouse Receiving Order by ID

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Connection   |                                       |         |
| Version      | The version of the ShipBob API to use | 2.0     |
| Receiving ID | Id of the receiving order             |         |

### List Channels

List user-authorized channels info

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Version    | The version of the ShipBob API to use | 1.0     |

### List Fulfillment Centers

Retrieves a list of Fulfillment Centers

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Version    | The version of the ShipBob API to use | 1.0     |

### List Inventory Items

Retrieve a list of Inventory Items

| Input              | Comments                                                                                                                                                                                       | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                                                                |         |
| Version            | The version of the ShipBob API to use                                                                                                                                                          | 1.0     |
| ShipBob Channel ID | Channel Id for Operation                                                                                                                                                                       |         |
| Page               | Page of orders to get                                                                                                                                                                          |         |
| Limit              | Amount of orders per page to request                                                                                                                                                           |         |
| IsActive           | Whether the inventory should be active or not                                                                                                                                                  | false   |
| IsDigital          | Whether the inventory is digital or not                                                                                                                                                        | false   |
| Order IDs          | Order ids to filter by, comma separated                                                                                                                                                        |         |
| Sort               | Sort will default to ascending order for each field. To sort in descending order please pass a ' - ' in front of the field name. For example, Sort=-onHand,name will sort by onHand descending |         |
| Search             | Search is available for 2 fields of the inventory record related to the product: Inventory ID and Name                                                                                         |         |
| Location Type      | LocationType is valid for hub, spoke, or lts. LocationType will default to all locations.                                                                                                      |         |

### List Locations

Receives a list of the physical locations across a fulfillment network

| Input             | Comments                                                 | Default |
| ----------------- | -------------------------------------------------------- | ------- |
| Connection        |                                                          |         |
| Version           | The version of the ShipBob API to use                    | 1.0     |
| Include Inactive  | Whether the inactive locations should be included or not | false   |
| Receiving Enabled | Return all the receiving enabled locations               | false   |
| Access Granted    | Return all the access granted locations                  | false   |

### List Orders

Retrieve all Orders

| Input                           | Comments                                                                                                                               | Default |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      |                                                                                                                                        |         |
| Version                         | The version of the ShipBob API to use                                                                                                  | 1.0     |
| ShipBob Channel ID              | Channel Id for Operation                                                                                                               |         |
| Page                            | Page of orders to get                                                                                                                  |         |
| Limit                           | Amount of orders per page to request                                                                                                   |         |
| Order IDs                       | Order ids to filter by, comma separated                                                                                                |         |
| Reference IDs                   | Reference ids to filter by, comma separated                                                                                            |         |
| Start Date                      | Start date to filter orders inserted later than                                                                                        |         |
| End Date                        | End date to filter orders inserted earlier than                                                                                        |         |
| Sort Order                      | Order to sort results in. One Of Newest, Oldest                                                                                        |         |
| Has Tracking                    | Has any portion of this order been assigned a tracking number                                                                          | false   |
| Last Update Start Date          | Start date to filter orders updated later than                                                                                         |         |
| Last Update End Date            | End date to filter orders updated earlier than                                                                                         |         |
| Is Tracking Uploaded            | Filter orders that their tracking information was fully uploaded                                                                       | false   |
| Last Tracking Update Start Date | Start date to filter orders with tracking updates later than the supplied date. Will only return orders that have tracking information |         |
| Last Tracking Update End Date   | End date to filter orders updated later than the supplied date. Will only return orders that have tracking information                 |         |
| Delivery Start Date             | Start date to filter orders with delivery date later than the supplied date. Will only return orders that have tracking information    |         |
| Delivery En Date                | End date to filter orders with delivery date earlier than the supplied date. Will only return orders that have tracking information    |         |
| Fulfillment Start Date          | Start date to filter orders with fulfillment date later than the supplied date. Will only return orders that have tracking information |         |
| Fulfillment End Date            | End date to filter orders fulfillment date later than the supplied date. Will only return orders that have tracking information        |         |

### List Warehouse Receiving Orders

Retrieve all Warehouse Receiving Orders

| Input                  | Comments                                                                                                                                                | Default                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection             |                                                                                                                                                         |                         |
| Version                | The version of the ShipBob API to use                                                                                                                   | 2.0                     |
| Page                   | Page of WROs to get                                                                                                                                     |                         |
| Limit                  | Number of WROs per page to request                                                                                                                      |                         |
| Order IDs              | Order ids to filter by, comma separated                                                                                                                 |                         |
| Statuses               | Items Enum: 'Awaiting' 'Processing' 'Completed' 'Cancelled' 'Incomplete' 'Arrived' 'PartiallyArrived' Comma separated list of WRO statuses to filter by | <code>["000xxx"]</code> |
| Insert Start Date      | Earliest date that a WRO was created                                                                                                                    |                         |
| Insert End Date        | Latest date that a WRO was created                                                                                                                      |                         |
| Fulfillment Center IDs | Comma separated list of WRO fulfillment center IDs to filter by                                                                                         | <code>["000xxx"]</code> |
| Purchase Order Numbers | Comma separated list of WRO PO numbers to filter by                                                                                                     | <code>["000xxx"]</code> |

### List Webhooks

Get a list of active Webhooks

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection |                                        |         |
| Version    | The version of the ShipBob API to use  | 1.0     |
| Topic      | Topic of the webhooks requested        |         |
| Page       | Page of Webhooks to get                |         |
| Limit      | Amount of Webhooks per page to request |         |

### Raw Request

Send raw HTTP request to ShipBob

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Update Product

Update information on a single Product

| Input              | Comments                                                                                                     | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                              |         |
| Version            | The version of the ShipBob API to use                                                                        | 1.0     |
| Product ID         | The product ID to retrieve                                                                                   |         |
| ShipBob Channel ID | Channel Id for Operation                                                                                     |         |
| Name               | The name of the product                                                                                      |         |
| Sku                | The stock keeping unit of the product                                                                        |         |
| Barcode            | Barcode for the product                                                                                      |         |
| GTIN               | Global Trade Item Number - unique and internationally recognized identifier assigned to item by company GS1. |         |
| UPC                | Universal Product Code - Unique external identifier                                                          |         |
| Unit Price         | The price of one unit                                                                                        |         |
