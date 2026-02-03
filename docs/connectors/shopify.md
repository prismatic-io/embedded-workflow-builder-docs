---
title: Shopify Connector
sidebar_label: Shopify
description: Manage customers, products, and orders in your Shopify platform
---

![Shopify](./assets/shopify.png#connector-icon)
Manage customers, products, and orders in your Shopify platform

## Connections

### Admin API Access Token {#adminapiaccesstoken}

Authenticate requests to Shopify using an access token.

An **admin API access token** can be used for testing purposes as you develop your integration.
You can create an access token from the **API credentials** tab of a private Shopify app that you create.

Before publishing an integration for customers, we recommend you switch to OAuth 2.0 authentication to give your users a single button-click experience.

| Input                  | Comments                                                                                                                                                     | Default                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| Admin API Access Token | Generate from the 'API credentials' tab of a private Shopify app. Learn more at [Shopify Admin API](https://shopify.dev/docs/api/admin-rest#authentication). |                                   |
| Host                   | The domain of your Shopify store without https:// (e.g., my-store.myshopify.com)                                                                             | YOUR-SHOPIFY-DOMAIN.myshopify.com |
| API Version            | Shopify API version to use. See [Shopify API versioning](https://shopify.dev/docs/api/usage/versioning) for available versions.                              | 2024-10                           |

### OAuth 2.0 {#oauth2-dynamic-inputs}

Authenticate requests to Shopify using values obtained from the Developer Console. Allows for using a single `domain` input instead of entering separate authorization URL's.

The Shopify component authenticates requests through OAuth 2.0.
Information on how to generate an OAuth 2.0 app with Shopify can be found [in their documentation](https://shopify.dev/apps/auth/oauth)

1. Navigate to the **Configuration** section of your created app. In the **Allowed redirection URL(s)** enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.

For information on what **Scopes** you should request, see the [Shopify documentation](https://shopify.dev/api/usage/access-scopes#authenticated-access-scopes).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input       | Comments                                                                                                                                                                            | Default                                                                                                                                                                                                                      |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shop Name   | The Shopify shop name (e.g., for my-store.myshopify.com, enter my-store)                                                                                                            |                                                                                                                                                                                                                              |
| Scopes      | Space-separated list of scopes for user permissions. See [Shopify access scopes](https://shopify.dev/api/usage/access-scopes#authenticated-access-scopes) for all available scopes. | read_customers read_draft_orders read_fulfillments read_inventory read_orders read_products read_locations write_customers write_draft_orders write_fulfillments write_inventory write_orders write_products write_locations |
| API Key     | API Key from your Shopify app. Obtain by creating an app at [Shopify Partners](https://partners.shopify.com/).                                                                      |                                                                                                                                                                                                                              |
| API Secret  | API Secret from your Shopify app. Obtain by creating an app at [Shopify Partners](https://partners.shopify.com/).                                                                   |                                                                                                                                                                                                                              |
| API Version | Shopify API version to use. See [Shopify API versioning](https://shopify.dev/docs/api/usage/versioning) for available versions.                                                     | 2024-10                                                                                                                                                                                                                      |

### OAuth 2.0 (Deprecated) {#oauth2}

Authenticate requests to Shopify using values obtained from the Developer Console.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                            | Default                                                                                                                                                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Shopify                                                                                                                                         | https://YOUR-SHOPIFY-DOMAIN.myshopify.com/admin/oauth/authorize                                                                                                                                                              |
| Token URL     | The OAuth 2.0 Token URL for Shopify                                                                                                                                                 | https://YOUR-SHOPIFY-DOMAIN.myshopify.com/admin/oauth/access_token                                                                                                                                                           |
| Scopes        | Space-separated list of scopes for user permissions. See [Shopify access scopes](https://shopify.dev/api/usage/access-scopes#authenticated-access-scopes) for all available scopes. | read_customers read_draft_orders read_fulfillments read_inventory read_orders read_products read_locations write_customers write_draft_orders write_fulfillments write_inventory write_orders write_products write_locations |
| API Key       | API Key from your Shopify app. Obtain by creating an app at [Shopify Partners](https://partners.shopify.com/).                                                                      |                                                                                                                                                                                                                              |
| API Secret    | API Secret from your Shopify app. Obtain by creating an app at [Shopify Partners](https://partners.shopify.com/).                                                                   |                                                                                                                                                                                                                              |
| Host          | The domain of your Shopify store without https:// (e.g., my-store.myshopify.com)                                                                                                    | YOUR-SHOPIFY-DOMAIN.myshopify.com                                                                                                                                                                                            |
| API Version   | Shopify API version to use. See [Shopify API versioning](https://shopify.dev/docs/api/usage/versioning) for available versions.                                                     | 2024-10                                                                                                                                                                                                                      |

## Triggers

### Event Topic Webhook {#eventtopicwebhookgql}

Receive event notifications from Shopify. Automatically creates and manages webhook subscriptions for selected event topics when the instance is deployed, and removes the subscription when the instance is deleted.

| Input         | Comments                                                                    | Default |
| ------------- | --------------------------------------------------------------------------- | ------- |
| Connection    |                                                                             |         |
| Secret Key    | The Shopify app's client secret, viewable from the Partner Dashboard.       |         |
| Webhook Topic | The topic for the webhook. This is the event that will trigger the webhook. |         |

### Event Topic Webhook (Deprecated) {#eventtopicwebhook}

Set event based webhooks and get notified when these event types are created, updated, or deleted. This version of the trigger is being deprecated. Please replace trigger with Event Topic Webhook.

| Input            | Comments                                                             | Default |
| ---------------- | -------------------------------------------------------------------- | ------- |
| Secret Key       | The Shopify app's client secret, viewable from the Partner Dashboard |         |
| Connection       | The Shopify connection to use.                                       |         |
| Event Topic Name | Event that triggers the webhook.                                     |         |

### New and Updated Customers {#customerspollingtrigger}

Checks for new and updated customers on a configured schedule. Returns all customers on first run.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### New and Updated Orders {#orderspollingtrigger}

Checks for new and updated orders on a configured schedule. Returns all orders on first run.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### New and Updated Products {#productspollingtrigger}

Checks for new and updated products on a configured schedule. Returns all products on first run.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Webhook {#webhook}

Receive and validate webhook requests from Shopify for webhooks you configure.

| Input      | Comments                                                             | Default |
| ---------- | -------------------------------------------------------------------- | ------- |
| Secret Key | The Shopify app's client secret, viewable from the Partner Dashboard |         |

## Actions

### Cancel Order {#cancelordergql}

Cancel an existing order.

| Input           | Comments                                                                               | Default |
| --------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                        |         |
| Order ID        | Provide the unique ID of the order.                                                    |         |
| Reason          | The reason for the cancellation.                                                       |         |
| Refund          | Whether to refund the amount paid by the customer.                                     | false   |
| Restock         | Whether to restock the inventory committed to the order.                               | false   |
| Notify Customer | Whether the customer should be notified of the cancellation.                           | false   |
| Staff Note      | A staff-facing note about the order cancellation. This is not visible to the customer. |         |

### Close Order {#closeordergql}

Closes a completed order.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Order ID   | Provide the unique ID of the order. |         |

### Complete Draft Order {#completedraftordergql}

Mark a draft order as complete.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     |                                                       |         |
| Draft Order Id | Provide a value for the unique ID of the draft order. |         |

### Connect Inventory Item To Location {#connectinventorylevelgql}

Connect an existing Inventory Item to an existing Location.

| Input             | Comments                                                    | Default |
| ----------------- | ----------------------------------------------------------- | ------- |
| Connection        |                                                             |         |
| Location ID       | The ID of the location that the inventory level belongs to. |         |
| Inventory Item Id | Provide a unique ID of a Inventory Item.                    |         |

### Count Collections {#countcollectionsgql}

Count all available collections.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Count Customers {#countcustomersgql}

Retrieve a count of all the customers connected to your platform.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Count Draft Orders {#countdraftordersgql}

Returns a count of all draft orders. Note: This action currently utilizes an unstable version of the Shopify Admin GraphQL API and is subject to change.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Count Location {#countlocationsgql}

Count the number of locations enabled on your platform.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Count Orders {#countordersgql}

Returns a count of all orders.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Count Product Images {#countproductimagesgql}

Count all product images connected to your platform.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Product ID | Provide a value for the product Id. |         |

### Count Products {#countproducts}

Count all Products in your account.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Count Variants {#countvariantsgql}

Count all product variants.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Create Account Activation URL {#createaccountactivationurlgql}

Create an account activation URL for an existing customer.

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Customer   | Provide a value for the unique ID of the customer. |         |

### Create Customer {#createcustomer}

Create a new customer.

| Input           | Comments                                                                               | Default |
| --------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection      | The Shopify connection to use.                                                         |         |
| First Name      | The first name of the customer.                                                        |         |
| Last Name       | The last name of the customer.                                                         |         |
| Email           | The email address of the customer.                                                     |         |
| Phone           | The phone number of the customer in E.164 format.                                      |         |
| Notes           | Additional notes about the customer.                                                   |         |
| Verified Email  | When true, emails will be sent to the customer.                                        | false   |
| Address List    | Provide a JSON array containing address objects                                        |         |
| Values          | Key-value pairs for creating or updating a record. Specify any property key and value. |         |
| Currency Format | The currency format code.                                                              |         |
| Tags            | Tags for the product. Each list item is a tag string.                                  |         |
| Tax Exempt      | When true, the customer is tax exempt.                                                 | false   |
| Metafields      | JSON array containing metadata objects.                                                |         |

### Create Draft Orders {#createdraftordergql}

Create a new draft order.

| Input                | Comments                                                                                   | Default |
| -------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection           |                                                                                            |         |
| Customer             | Provide a value for the unique ID of the customer.                                         |         |
| Line items           | Provide a JSON array containing line item objects.                                         |         |
| Use Customer Address | This flag determines if the order will use the customers default address.                  | true    |
| Note                 | Provide a value for the note on the draft order.                                           |         |
| Tax Exempt           | Whether or not taxes are exempt for the draft order.                                       | false   |
| Tags                 | Provide a list of tags for the draft order.                                                |         |
| Additional Fields    | Additional fields that might not be covered by the standard inputs. This is a JSON object. |         |

### Create Fulfillment Service {#createfulfillmentservicegql}

Create a fulfillment service.

| Input                    | Comments                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------ | ------- |
| Connection               |                                                                                            |         |
| Fulfillment Service Name | The name of the fulfillment service.                                                       |         |
| Callback URL             | The callback URL that the fulfillment service has registered for request.                  |         |
| Inventory Management     | Whether the fulfillment services tracks product inventory and provides updates to Shopify. | false   |
| Tracking Support         | Whether the fulfillment service supports tracking numbers for packages.                    | false   |

### Create Order {#createordergql}

Create a new order.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Order Data | JSON data to be sent as the Order payload. |         |

### Create Product {#createproductgql}

Create a new product.

| Input             | Comments                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                            |         |
| Title             | Provide a string value for the title of the product.                                       |         |
| Description HTML  | Provide an HTML string for the description of the product.                                 |         |
| Product Type      | Provide a value for the type of product.                                                   |         |
| Vendor            | Provide a value for the vendor of the product.                                             |         |
| Product Status    | Specify the status of the product.                                                         |         |
| Image URL         | Provide a URL for the image of the product.                                                |         |
| Image Alt Text    | Provide the alt text for the image of the product.                                         |         |
| Tags              | Provide a list of tags for the product.                                                    |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. |         |

### Create Product Image {#createproductimagegql}

Create a new image on an existing product.

| Input          | Comments                            | Default |
| -------------- | ----------------------------------- | ------- |
| Connection     |                                     |         |
| Product ID     | Provide a value for the product Id. |         |
| Image URL      | Provide the URL of the image.       |         |
| Image Alt Text | Provide the alt text for the image. |         |

### Create Variant {#createvariantgql}

Create a new variant of the provided product.

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Product ID | Provide a value for the product Id.                |         |
| Variant    | Provide a JSON object containing the variant data. |         |

### Create Webhook {#createwebhook}

Creates a webhook for the desired topic in your Shopify store.

| Input          | Comments                                                                                                                                                                | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Shopify connection to use.                                                                                                                                          |         |
| Webhook Topic  | The event topic for the webhook. See [Shopify webhook topics](https://shopify.dev/docs/api/admin-rest/2023-04/resources/webhook#event-topics) for all available topics. |         |
| Post URL       | The URL where the newly created webhook will post to. Used to configure your Shopify trigger.                                                                           |         |
| Webhook Format | The format for the webhook response.                                                                                                                                    | json    |

### Delete Collection {#deletecollectiongql}

Delete a collection by ID.

| Input         | Comments                             | Default |
| ------------- | ------------------------------------ | ------- |
| Connection    |                                      |         |
| Collection ID | Provide a unique ID of a collection. |         |

### Delete Customer {#deletecustomergql}

Delete an existing customer.

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Customer   | Provide a value for the unique ID of the customer. |         |

### Delete Draft Order {#deletedraftordergql}

Delete the information and metadata of a Draft Order.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     |                                                       |         |
| Draft Order Id | Provide a value for the unique ID of the draft order. |         |

### Delete Fulfillment Service {#deletefulfillmentservicegql}

Deletes an existing fulfillment service.

| Input                  | Comments                                          | Default |
| ---------------------- | ------------------------------------------------- | ------- |
| Connection             |                                                   |         |
| Fulfillment Service ID | Provide the unique ID of the fulfillment service. |         |

### Delete Instance Webhooks {#deleteinstancewebhooks}

Delete all webhooks related to this instance.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Delete Inventory Levels {#deleteinventorylevelsgql}

Delete the information and metadata of an Inventory Level.

| Input              | Comments                                   | Default |
| ------------------ | ------------------------------------------ | ------- |
| Connection         |                                            |         |
| Inventory Level Id | Provide a unique ID of an Inventory Level. |         |

### Delete Metafield {#deletemetafieldgql}

Delete a resource metafield. Note: This action currently utilizes an unstable version of the Shopify Admin GraphQL API and is subject to change.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection |                                                   |         |
| Key        | Provide the key of the metafield to delete.       |         |
| Owner ID   | Provide the owner ID of the metafield to delete.  |         |
| Namespace  | Provide the namespace of the metafield to delete. |         |

### Delete Order {#deleteordergql}

Delete an existing order by Id.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Order ID   | Provide the unique ID of the order. |         |

### Delete Product {#deleteproductgql}

Delete an existing product.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Product ID | Provide a value for the product Id. |         |

### Delete Product Image {#deleteproductimagegql}

Delete the information and metadata of a product image connected to your platform.

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection |                                         |         |
| Product ID | Provide a value for the product Id.     |         |
| Image ID   | Provide a unique ID of a product image. |         |

### Delete Variant {#deletevariantgql}

Delete an existing variant by Id.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Product ID | Provide a value for the product Id. |         |
| Variant ID | Provide a unique ID of a variant.   |         |

### Delete Webhook {#deletewebhook}

Delete a webhook by ID.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |
| Webhook ID | The ID of an existing webhook. |         |

### Get Collection {#getcollectiongql}

Get a collection by Id.

| Input         | Comments                             | Default |
| ------------- | ------------------------------------ | ------- |
| Connection    |                                      |         |
| Collection ID | Provide a unique ID of a collection. |         |

### Get Customer {#getcustomer}

Get a customers information and metadata by Id.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Customer   | The unique ID of the customer. |         |
| Connection | The Shopify connection to use. |         |

### Get Draft Order {#getdraftordergql}

Get the information and metadata of a Draft Order.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     |                                                       |         |
| Draft Order Id | Provide a value for the unique ID of the draft order. |         |

### Get Fulfillment {#getfulfillmentgql}

Get the information and metadata of a fulfillment enabled on your platform.

| Input          | Comments                              | Default |
| -------------- | ------------------------------------- | ------- |
| Connection     |                                       |         |
| Fulfillment Id | Provide a unique ID of a fulfillment. |         |

### Get Fulfillment Order {#getfulfillmentorder}

Retrieve a specific fulfillment order.

| Input                | Comments                                   | Default |
| -------------------- | ------------------------------------------ | ------- |
| Connection           | The Shopify connection to use.             |         |
| Fulfillment Order ID | Provide a unique ID of a fulfillment order |         |

### Get Fulfillment Service {#getfulfillmentservicegql}

Retrieve a fulfillment service enabled on your platform by its ID.

| Input                  | Comments                                          | Default |
| ---------------------- | ------------------------------------------------- | ------- |
| Connection             |                                                   |         |
| Fulfillment Service ID | Provide the unique ID of the fulfillment service. |         |

### Get Inventory Item {#getinventoryitemsgql}

Get the information and metadata of an Inventory Item enabled on your platform.

| Input             | Comments                                 | Default |
| ----------------- | ---------------------------------------- | ------- |
| Inventory Item Id | Provide a unique ID of a Inventory Item. |         |
| Connection        |                                          |         |

### Get Inventory Levels {#getinventorylevelsgql}

Get the information and metadata of an Inventory Level.

| Input              | Comments                                   | Default |
| ------------------ | ------------------------------------------ | ------- |
| Connection         |                                            |         |
| Inventory Level Id | Provide a unique ID of an Inventory Level. |         |

### Get Location {#getlocationsgql}

Get the information and metadata of a location enabled on your platform.

| Input       | Comments                                                    | Default |
| ----------- | ----------------------------------------------------------- | ------- |
| Connection  |                                                             |         |
| Location ID | The ID of the location that the inventory level belongs to. |         |

### Get Order {#getordergql}

Get the information and metadata about an order.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Order ID   | Provide the unique ID of the order. |         |

### Get Order (Deprecated) {#getorder}

Get the information and metadata about an order. This version of the action is being deprecated. Please replace action with Get Order.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Order ID   | The unique ID of the order.    |         |
| Connection | The Shopify connection to use. |         |

### Get Product {#getproduct}

Get the information and metadata of a product by Id.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Product ID | The unique ID of the product.  |         |
| Connection | The Shopify connection to use. |         |

### Get Product Image {#getproductimagegql}

Get the information and metadata of a product image connected to your platform.

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| Connection |                                                                 |         |
| Product ID | Provide a value for the product Id.                             |         |
| Image ID   | Provide a unique ID of a product image. Use only the ID number. |         |

### Get Shop Configuration {#getshopconfig}

Retrieve the shop's current configuration.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Get Variant {#getvariantgql}

Get the information or metadata of a variant by Id.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection |                                   |         |
| Variant ID | Provide a unique ID of a variant. |         |

### List Collections {#listcollectionsgql}

List all collections enabled on your platform.

| Input              | Comments                                                                                                                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                                                                                                |         |
| Limit              | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 250. To get more than 250 results, turn the 'Fetch All' toggle ON. | 50      |
| Fetch All          | API is limited to 250 records per page max, turn this ON to get all data from all pages. When turned ON, the 'Limit' and 'Page Offset Cursor' inputs are ignored.              | false   |
| Page Offset Cursor | Provide a cursor to offset the results. This is used to get the next page of results.                                                                                          |         |

### List Currencies {#listcurrenciesgql}

List all currencies enabled on your platform.

| Input              | Comments                                                                                                                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                                                                                                |         |
| Limit              | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 250. To get more than 250 results, turn the 'Fetch All' toggle ON. | 50      |
| Fetch All          | API is limited to 250 records per page max, turn this ON to get all data from all pages. When turned ON, the 'Limit' and 'Page Offset Cursor' inputs are ignored.              | false   |
| Page Offset Cursor | Provide a cursor to offset the results. This is used to get the next page of results.                                                                                          |         |

### List Customers {#listcustomers}

List all customers connected to your platform.

| Input             | Comments                                                                                                                               | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Get All Data      | When true, fetches all data from all pages (API is limited to 250 records per page max). The limit input will be ignored when enabled. | false   |
| Limit             | Maximum number of results to return (1-250). Default is 50. To retrieve more than 250 results, enable the 'Get All Data' option.       | 50      |
| Page Offset Token | Cursor for pagination to retrieve a specific page of results.                                                                          |         |
| Connection        | The Shopify connection to use.                                                                                                         |         |

### List Draft Orders {#listdraftorders}

List all draft orders.

| Input             | Comments                                                                                                                               | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Get All Data      | When true, fetches all data from all pages (API is limited to 250 records per page max). The limit input will be ignored when enabled. | false   |
| Limit             | Maximum number of results to return (1-250). Default is 50. To retrieve more than 250 results, enable the 'Get All Data' option.       | 50      |
| Page Offset Token | Cursor for pagination to retrieve a specific page of results.                                                                          |         |
| Connection        | The Shopify connection to use.                                                                                                         |         |

### List Fulfillment Orders {#listfulfillmentorders}

Retrieves a list of fulfillment orders for a specific order.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |
| Order ID   | The unique ID of the order.    |         |

### List Fulfillments {#listfulfillments}

List all fulfillments enabled on your platform.

| Input             | Comments                                                                                                                               | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Order ID          | The unique ID of the order.                                                                                                            |         |
| Get All Data      | When true, fetches all data from all pages (API is limited to 250 records per page max). The limit input will be ignored when enabled. | false   |
| Limit             | Maximum number of results to return (1-250). Default is 50. To retrieve more than 250 results, enable the 'Get All Data' option.       | 50      |
| Page Offset Token | Cursor for pagination to retrieve a specific page of results.                                                                          |         |
| Connection        | The Shopify connection to use.                                                                                                         |         |

### List Fulfillment Services {#listfulfillmentservicesgql}

List all fulfillment services enabled on your platform.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Inventory Items {#listinventoryitemsgql}

List all Inventory Items enabled on your platform.

| Input              | Comments                                                                                                                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                                                                                                |         |
| Query              | The query to filter the inventory items.                                                                                                                                       |         |
| Fetch All          | API is limited to 250 records per page max, turn this ON to get all data from all pages. When turned ON, the 'Limit' and 'Page Offset Cursor' inputs are ignored.              | false   |
| Limit              | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 250. To get more than 250 results, turn the 'Fetch All' toggle ON. | 50      |
| Page Offset Cursor | Provide a cursor to offset the results. This is used to get the next page of results.                                                                                          |         |

### List Inventory Levels At Location {#listinventorylevelsgql}

List all Inventory Levels.

| Input              | Comments                                                                                                                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                                                                                                |         |
| Location ID        | The ID of the location that the inventory level belongs to.                                                                                                                    |         |
| Fetch All          | API is limited to 250 records per page max, turn this ON to get all data from all pages. When turned ON, the 'Limit' and 'Page Offset Cursor' inputs are ignored.              | false   |
| Limit              | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 250. To get more than 250 results, turn the 'Fetch All' toggle ON. | 50      |
| Page Offset Cursor | Provide a cursor to offset the results. This is used to get the next page of results.                                                                                          |         |

### List Locations {#listlocationsgql}

List all locations enabled on your platform.

| Input              | Comments                                                                                                                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                                                                                                |         |
| Limit              | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 250. To get more than 250 results, turn the 'Fetch All' toggle ON. | 50      |
| Fetch All          | API is limited to 250 records per page max, turn this ON to get all data from all pages. When turned ON, the 'Limit' and 'Page Offset Cursor' inputs are ignored.              | false   |
| Page Offset Cursor | Provide a cursor to offset the results. This is used to get the next page of results.                                                                                          |         |

### List Metafields {#listmetafieldsgql}

List resource metafields. Note: This action currently utilizes an unstable version of the Shopify Admin GraphQL API and is subject to change.

| Input              | Comments                                                                                                                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                                                                                                |         |
| Resource           | Provide a unique ID of a resource.                                                                                                                                             |         |
| Limit              | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 250. To get more than 250 results, turn the 'Fetch All' toggle ON. | 50      |
| Fetch All          | API is limited to 250 records per page max, turn this ON to get all data from all pages. When turned ON, the 'Limit' and 'Page Offset Cursor' inputs are ignored.              | false   |
| Page Offset Cursor | Provide a cursor to offset the results. This is used to get the next page of results.                                                                                          |         |

### List Orders {#listordersgql}

List all orders.

| Input              | Comments                                                                                                                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                                                                                                |         |
| Query              | The query to filter the orders.                                                                                                                                                |         |
| Fetch All          | API is limited to 250 records per page max, turn this ON to get all data from all pages. When turned ON, the 'Limit' and 'Page Offset Cursor' inputs are ignored.              | false   |
| Limit              | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 250. To get more than 250 results, turn the 'Fetch All' toggle ON. | 50      |
| Page Offset Cursor | Provide a cursor to offset the results. This is used to get the next page of results.                                                                                          |         |

### List Orders (Deprecated) {#listorders}

List all orders. This version of the action is being deprecated. Please replace action with List Orders.

| Input              | Comments                                                                                                                               | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                                                                                                         |         |
| Get All Data       | When true, fetches all data from all pages (API is limited to 250 records per page max). The limit input will be ignored when enabled. | false   |
| Page Offset Token  | Cursor for pagination to retrieve a specific page of results.                                                                          |         |
| Limit              | Maximum number of results to return (1-250). Default is 50. To retrieve more than 250 results, enable the 'Get All Data' option.       | 50      |
| Attribution App ID | Show orders attributed to a certain app, specified by the app ID.                                                                      |         |
| Created At Max     | Show orders created at or before date. ISO 8601 format like 2021-10-01 or 2021-10-01T00:00:00-04:00 for exact time.                    |         |
| Created At Min     | Show orders created at or after this date. Use ISO 8601 format (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss-HH:mm).                              |         |
| Fields             | Retrieve only certain fields, specified by a comma-separated list of fields names.                                                     |         |
| Financial Status   | Filter orders by their financial status.                                                                                               |         |
| Fulfillment Status | Filter orders by their fulfillment status.                                                                                             |         |
| Ids                | Retrieve only orders specified by a comma-separated list of order IDs.                                                                 |         |
| Processed At Max   | Show orders imported at or before date. ISO 8601 format like 2021-10-01 or 2021-10-01T00:00:00-04:00 for exact time.                   |         |
| Processed At Min   | Show orders imported at or after date. ISO 8601 format like 2021-10-01 or 2021-10-01T00:00:00-04:00 for exact time.                    |         |
| Since Id           | Show orders after the specified ID.                                                                                                    |         |
| Status             | Filter orders by their status.                                                                                                         |         |
| Updated At Max     | Show orders last updated at or before date. ISO 8601 format like 2021-10-01 or 2021-10-01T00:00:00-04:00 for exact time.               |         |
| Updated At Min     | Show orders last updated at or after date. ISO 8601 format like 2021-10-01 or 2021-10-01T00:00:00-04:00 for exact time.                |         |

### List Product Images {#listproductimages}

List all product images connected to your platform.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Product ID | The unique ID of the product.  |         |
| Connection | The Shopify connection to use. |         |

### List Products {#listproducts}

List all products connected to your platform.

| Input             | Comments                                                                                                                               | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Limit             | Maximum number of results to return (1-250). Default is 50. To retrieve more than 250 results, enable the 'Get All Data' option.       | 50      |
| Get All Data      | When true, fetches all data from all pages (API is limited to 250 records per page max). The limit input will be ignored when enabled. | false   |
| Page Offset Token | Cursor for pagination to retrieve a specific page of results.                                                                          |         |
| Connection        | The Shopify connection to use.                                                                                                         |         |

### List Variants {#listvariantsgql}

List all variants connected to the provided product.

| Input              | Comments                                                                                                                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                                                                                                |         |
| Product ID         | Provide a value for the product Id.                                                                                                                                            |         |
| Fetch All          | API is limited to 250 records per page max, turn this ON to get all data from all pages. When turned ON, the 'Limit' and 'Page Offset Cursor' inputs are ignored.              | false   |
| Limit              | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 250. To get more than 250 results, turn the 'Fetch All' toggle ON. | 50      |
| Page Offset Cursor | Provide a cursor to offset the results. This is used to get the next page of results.                                                                                          |         |

### List Webhooks {#listwebhooks}

List all webhooks or webhooks for this instance.

| Input                       | Comments                                       | Default |
| --------------------------- | ---------------------------------------------- | ------- |
| Connection                  | The Shopify connection to use.                 |         |
| Show only instance webhooks | Show only webhooks that point to this instance | true    |

### Raw Request {#graphqlrawrequest}

Send raw GraphQL request to Shopify.

| Input             | Comments                                                                                                                                | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Shopify connection to use.                                                                                                          |         |
| API Version       | Shopify versions its API. See [Shopify API release notes](https://shopify.dev/docs/api/release-notes) for a list of available versions. | 2024-10 |
| Query or Mutation | GraphQL query or mutation. See Shopify's GraphQL API documentation for examples. Ex: { shop { name } }                                  |         |
| Variables         | Variables to pass to the query or mutation.                                                                                             |         |
| Variables Object  | Variables to pass to the query or mutation.                                                                                             |         |

### Raw Request (Deprecated) {#rawrequest}

Send raw HTTP request to Shopify. This version of the action uses REST and is being deprecated. Please replace action with the Raw Request utilizing GraphQL.

| Input                   | Comments                                                                                                                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Shopify connection to use.                                                                                                                                                                                                                                                                   |         |
| URL                     | Input the path only (/users/current.json), The base URL is already included (https://YOUR-DOMAIN.myshopify.com/admin/api/API-VERSION). For example, to connect to https://YOUR-DOMAIN.myshopify.com/admin/api/API-VERSION/users/current.json, only /users/current.json is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                              |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                 | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                    | false   |
| API Version             | Shopify versions its API. See [Shopify API release notes](https://shopify.dev/docs/api/release-notes) for a list of available versions.                                                                                                                                                          | 2024-10 |
| Return Headers          | When true, response headers will be included in the output object.                                                                                                                                                                                                                               | false   |

### Set Metafield {#setmetafieldgql}

Set a resource metafield. Note: This action currently utilizes an unstable version of the Shopify Admin GraphQL API and is subject to change.

| Input      | Comments                                                                                                                                    | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                             |         |
| Key        | Provide a key for the metafield.                                                                                                            |         |
| Value      | Provide a value for the metafield.                                                                                                          |         |
| Owner ID   | Provide a unique ID of the owner of the metafield.                                                                                          |         |
| Type       | Provide a type for the metafield. Required when there is no corresponding definition for the given namespace, key, and owner resource type. |         |
| Namespace  | Provide a namespace for the metafield.                                                                                                      |         |

### Update Customer {#updatecustomergql}

Update the information and metadata of an existing customer by Id.

| Input             | Comments                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                            |         |
| Customer          | Provide a value for the unique ID of the customer.                                         |         |
| First Name        | Provide a string value for the first name                                                  |         |
| Last Name         | Provide a string value for the last name of the customer.                                  |         |
| Email             | Provide a string value for the email of the customer.                                      |         |
| Address List      | Provide a JSON array containing address objects.                                           |         |
| Phone             | Provide a value for the phone number of the customer.                                      |         |
| Notes             | Provide a value for a note on the customer.                                                |         |
| Tags              | For each list item, provide a string you would like to tag the product with.               |         |
| Tax Exempt        | Determines if the customer is tax exempt.                                                  |         |
| Metafields        | Provide a JSON array containing metadata objects.                                          |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. |         |

### Update Fulfillment Service {#updatefulfillmentservicegql}

Modify an existing fulfillment service.

| Input                    | Comments                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------ | ------- |
| Connection               |                                                                                            |         |
| Fulfillment Service ID   | Provide the unique ID of the fulfillment service.                                          |         |
| Fulfillment Service Name | The name of the fulfillment service.                                                       |         |
| Callback URL             | The callback URL that the fulfillment service has registered for request.                  |         |
| Inventory Management     | Whether the fulfillment services tracks product inventory and provides updates to Shopify. |         |
| Tracking Support         | Whether the fulfillment service supports tracking numbers for packages.                    |         |

### Update Inventory Item {#updateinventoryitemsgql}

Update the information and metadata of an Inventory Item enabled on your platform.

| Input             | Comments                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                            |         |
| Inventory Item Id | Provide a unique ID of a Inventory Item.                                                   |         |
| SKU               | The SKU (stock keeping unit) of the inventory item.                                        |         |
| Cost              | Unit cost associated with the inventory item, the currency is the shop's default currency. |         |
| Tracked           | Whether the inventory item is tracked.                                                     |         |

### Update Product {#updateproductgql}

Update the information and metadata of an existing product by Id.

| Input             | Comments                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                            |         |
| Product ID        | Provide a value for the product Id.                                                        |         |
| Title             | Provide a string value for the title of the product.                                       |         |
| Description HTML  | Provide an HTML string for the description of the product.                                 |         |
| Product Type      | Provide a value for the type of product.                                                   |         |
| Vendor            | Provide a value for the vendor of the product.                                             |         |
| Product Status    | Specify the status of the product.                                                         |         |
| Image URL         | Provide a URL for the image of the product.                                                |         |
| Image Alt Text    | Provide the alt text for the image of the product.                                         |         |
| Tags              | For each list item, provide a string you would like to tag the product with.               |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. |         |

### Update Variant {#updatevariantgql}

Update the information and metadata of an existing product variant by Id.

| Input          | Comments                                                     | Default |
| -------------- | ------------------------------------------------------------ | ------- |
| Connection     |                                                              |         |
| Product ID     | Provide a value for the product Id.                          |         |
| Update Variant | Provide a JSON object containing the variant data to update. |         |
