---
title: Shopify Connector
sidebar_label: Shopify
description: Manage customers, products, and orders in Shopify.
---

![Shopify](./assets/shopify.png#connector-icon)
[Shopify](https://www.shopify.com/) is a multinational e-commerce company. They offer a subscription-based software that allows anyone to set up an online store and sell their products.
This component allows you to manage the products and customers connected to your Shopify account.

## API Documentation

This component was built using the [Shopify GraphQL Admin API Reference](https://shopify.dev/docs/api/admin-graphql).

## Connections

### Access Token {#adminapiaccesstoken}

Authenticate requests to Shopify using an Admin API access token.

An **admin API access token** can be used for testing purposes during integration development.

Personal access tokens are recommended for testing only. For production integrations, use OAuth 2.0 to allow users to authenticate with their own credentials.

#### Prerequisites

- A Shopify store (for testing purposes)

#### Setup Steps

To generate an admin API access token:

1. Log in to the Shopify admin dashboard.
2. Navigate to **Settings** > **Apps and sales channels**.
3. Click **Develop apps for your store**.
4. If prompted, click **Allow custom app development**.
5. Click **Create an app** and provide a name for the app.
6. Click **Configure Admin API scopes** and select the required scopes for the integration.
7. Click **Save**.
8. Navigate to the **API credentials** tab.
9. Under **Admin API access token**, click **Install app** to generate the token.
10. Copy the **Admin API access token** value.

The token will have a format similar to `shpat_00000000000000000000000000000000`.

Refer to [Shopify's Admin API access token documentation](https://shopify.dev/docs/apps/auth/admin-app-access-tokens) for more information.

#### Configure the Connection

- Enter the **Admin API access token** into the connection configuration.
- Enter the **Host** (the Shopify domain, e.g., `YOUR-SHOPIFY-DOMAIN.myshopify.com`).
- Optionally configure the **API Version** (defaults to latest version).

:::warning[Production Use]
Admin API access tokens are tied to custom apps and recommended for testing only. For production integrations, OAuth 2.0 authentication provides a better user experience and allows users to authenticate with their own credentials.
:::

| Input                  | Comments                                                                                                                                                     | Default                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| Admin API Access Token | Generate from the 'API credentials' tab of a private Shopify app. Learn more at [Shopify Admin API](https://shopify.dev/docs/api/admin-rest#authentication). |                                   |
| Host                   | The domain of the Shopify store without https:// (e.g., my-store.myshopify.com).                                                                             | YOUR-SHOPIFY-DOMAIN.myshopify.com |
| API Version            | Shopify API version to use. See [Shopify API versioning](https://shopify.dev/docs/api/usage/versioning) for available versions.                              | 2026-01                           |

### OAuth 2.0 {#oauth2-dynamic-inputs}

Authenticate requests to Shopify using values obtained from the Developer Console. Allows for using a single domain input instead of entering separate authorization URLs.

The Shopify component authenticates requests through OAuth 2.0.

Shopify uses OAuth 2.0 for app authentication. This connection type simplifies configuration by using a single **Shop Name** input to automatically construct the authorization and token URLs.

#### Prerequisites

- A [Shopify Partners account](https://partners.shopify.com/)
- Access to create apps in the Shopify Partner Dashboard

#### Setup Steps

To create an OAuth 2.0 app for Shopify:

1. Log in to the [Shopify Partner Dashboard](https://partners.shopify.com/).
2. Click **Apps** in the left sidebar.
3. Click **Create app**.
4. Select **Create app manually** and provide an app name.
5. Navigate to the **Configuration** section of the created app.
6. Under **App URL**, enter a valid URL (this is required but can be a placeholder).
7. Under **Allowed redirection URL(s)**, enter: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
8. Click **Save**.
9. Scroll to the **Client credentials** section.
10. Copy the **Client ID** (labeled as **API key** in Shopify).
11. Copy the **Client secret** (labeled as **API secret key** in Shopify).

Refer to [Shopify's OAuth documentation](https://shopify.dev/apps/auth/oauth) for detailed information on OAuth app creation.

#### Configure the Connection

- Enter the **API Key** (Client ID) from the Shopify app into the **Client ID** field.
- Enter the **API Secret** (Client Secret) from the Shopify app into the **Client Secret** field.
- Enter the **Shop Name** (the Shopify domain without `.myshopify.com`, e.g., `example-store`).
- Configure **Scopes** based on the required permissions.
  - Default scopes include: `read_customers read_draft_orders read_fulfillments read_inventory read_orders read_products read_locations write_customers write_draft_orders write_fulfillments write_inventory write_orders write_products write_locations`
  - Refer to [Shopify's access scopes documentation](https://shopify.dev/api/usage/access-scopes#authenticated-access-scopes) for a complete list of available scopes.
- Optionally configure the **API Version** (defaults to latest version).

Save the integration to connect and authenticate to Shopify.

:::info[Shop Name Format]
The **Shop Name** should be the subdomain portion of the Shopify store URL. For example, if the store URL is `example-store.myshopify.com`, enter `example-store` as the Shop Name.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                      | Comments                                                                                                                                                                        | Default                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shop Name                  | The Shopify shop name without the .myshopify.com suffix (e.g., my-store).                                                                                                       |                                                                                                                                                                                                                              |
| Scopes                     | Space-separated list of OAuth permission scopes. See [Shopify access scopes](https://shopify.dev/api/usage/access-scopes#authenticated-access-scopes) for all available scopes. | read_customers read_draft_orders read_fulfillments read_inventory read_orders read_products read_locations write_customers write_draft_orders write_fulfillments write_inventory write_orders write_products write_locations |
| Client ID (API Key)        | The Client ID (also called API Key) from the Shopify app credentials.                                                                                                           |                                                                                                                                                                                                                              |
| Client Secret (API Secret) | The Client Secret (also called API Secret) from the Shopify app credentials.                                                                                                    |                                                                                                                                                                                                                              |
| API Version                | Shopify API version to use. See [Shopify API versioning](https://shopify.dev/docs/api/usage/versioning) for available versions.                                                 | 2026-01                                                                                                                                                                                                                      |

### OAuth 2.0 (Deprecated) {#oauth2}

Authenticate requests to Shopify using values obtained from the Developer Console.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                      | Comments                                                                                                                                                                        | Default                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL              | The OAuth 2.0 Authorization URL for Shopify.                                                                                                                                    | https://YOUR-SHOPIFY-DOMAIN.myshopify.com/admin/oauth/authorize                                                                                                                                                              |
| Token URL                  | The OAuth 2.0 Token URL for Shopify.                                                                                                                                            | https://YOUR-SHOPIFY-DOMAIN.myshopify.com/admin/oauth/access_token                                                                                                                                                           |
| Scopes                     | Space-separated list of OAuth permission scopes. See [Shopify access scopes](https://shopify.dev/api/usage/access-scopes#authenticated-access-scopes) for all available scopes. | read_customers read_draft_orders read_fulfillments read_inventory read_orders read_products read_locations write_customers write_draft_orders write_fulfillments write_inventory write_orders write_products write_locations |
| Client ID (API Key)        | The Client ID (also called API Key) from the Shopify app credentials.                                                                                                           |                                                                                                                                                                                                                              |
| Client Secret (API Secret) | The Client Secret (also called API Secret) from the Shopify app credentials.                                                                                                    |                                                                                                                                                                                                                              |
| Host                       | The domain of the Shopify store without https:// (e.g., my-store.myshopify.com).                                                                                                | YOUR-SHOPIFY-DOMAIN.myshopify.com                                                                                                                                                                                            |
| API Version                | Shopify API version to use. See [Shopify API versioning](https://shopify.dev/docs/api/usage/versioning) for available versions.                                                 | 2026-01                                                                                                                                                                                                                      |

## Triggers

### Event Topic Subscription {#eventtopicwebhookgql}

Receive event notifications from Shopify. Automatically creates and manages a webhook subscription for selected event topics when the instance is deployed, and removes the subscription when the instance is deleted.

| Input         | Comments                                                                    | Default |
| ------------- | --------------------------------------------------------------------------- | ------- |
| Connection    | The Shopify connection to use.                                              |         |
| Secret Key    | The Shopify app's client secret, viewable from the Partner Dashboard.       |         |
| Webhook Topic | The topic for the webhook. This is the event that will trigger the webhook. |         |

### Event Topic Webhook (Deprecated) {#eventtopicwebhook}

Set event based webhooks and get notified when these event types are created, updated, or deleted. This version of the trigger is being deprecated. Please replace trigger with Event Topic Webhook.

| Input            | Comments                                                              | Default |
| ---------------- | --------------------------------------------------------------------- | ------- |
| Secret Key       | The Shopify app's client secret, viewable from the Partner Dashboard. |         |
| Connection       | The Shopify connection to use.                                        |         |
| Event Topic Name | Event that triggers the webhook.                                      |         |

### New and Updated Customers {#customerspollingtrigger}

Checks for new and updated customers in Shopify on a configured schedule.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### New and Updated Orders {#orderspollingtrigger}

Checks for new and updated orders in Shopify on a configured schedule.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### New and Updated Products {#productspollingtrigger}

Checks for new and updated products in Shopify on a configured schedule.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Webhook {#webhook}

Receive and validate webhook requests from Shopify for manually configured webhook subscriptions.

| Input      | Comments                                                              | Default |
| ---------- | --------------------------------------------------------------------- | ------- |
| Secret Key | The Shopify app's client secret, viewable from the Partner Dashboard. |         |

## Actions

### Cancel Order {#cancelordergql}

Cancels an existing order.

| Input           | Comments                                                                               | Default |
| --------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection      | The Shopify connection to use.                                                         |         |
| Order ID        | The unique identifier for the order.                                                   |         |
| Reason          | The reason for the cancellation.                                                       |         |
| Refund          | Whether to refund the amount paid by the customer.                                     | false   |
| Restock         | Whether to restock the inventory committed to the order.                               | false   |
| Notify Customer | Whether the customer should be notified of the cancellation.                           | false   |
| Staff Note      | A staff-facing note about the order cancellation. This is not visible to the customer. |         |

### Close Order {#closeordergql}

Closes an existing order.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Shopify connection to use.       |         |
| Order ID   | The unique identifier for the order. |         |

### Complete Draft Order {#completedraftordergql}

Marks a draft order as complete.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Shopify connection to use.             |         |
| Draft Order Id | The unique identifier for the draft order. |         |

### Connect Inventory Item To Location {#connectinventorylevelgql}

Connects an existing inventory item to a location.

| Input             | Comments                                                    | Default |
| ----------------- | ----------------------------------------------------------- | ------- |
| Connection        | The Shopify connection to use.                              |         |
| Location ID       | The ID of the location that the inventory level belongs to. |         |
| Inventory Item Id | The unique identifier for the inventory item.               |         |

### Count Collections {#countcollectionsgql}

Returns a count of all collections.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Count Customers {#countcustomersgql}

Returns a count of all customers.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Count Draft Orders {#countdraftordersgql}

Returns a count of all draft orders. Note: this action currently utilizes an unstable version of the Shopify Admin GraphQL API and is subject to change.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Count Locations {#countlocationsgql}

Returns a count of all locations.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Count Orders {#countordersgql}

Returns a count of all orders.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Count Product Images {#countproductimagesgql}

Returns a count of all product images for the specified product.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Shopify connection to use.         |         |
| Product ID | The unique identifier for the product. |         |

### Count Products {#countproducts}

Returns a count of all products.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Count Variants {#countvariantsgql}

Returns a count of all product variants.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Create Account Activation URL {#createaccountactivationurlgql}

Creates an account activation URL for an existing customer.

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection | The Shopify connection to use.          |         |
| Customer   | The unique identifier for the customer. |         |

### Create Customer {#createcustomer}

Creates a new customer.

| Input           | Comments                                                                                                                             | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The Shopify connection to use.                                                                                                       |         |
| First Name      | The first name of the customer.                                                                                                      |         |
| Last Name       | The last name of the customer.                                                                                                       |         |
| Email           | The email address of the customer.                                                                                                   |         |
| Phone           | The phone number of the customer in E.164 format.                                                                                    |         |
| Notes           | Additional notes about the customer.                                                                                                 |         |
| Verified Email  | When true, emails will be sent to the customer.                                                                                      | false   |
| Address List    | A JSON array of address objects for the customer. Each object should include fields like address1, city, province, country, and zip. |         |
| Values          | Key-value pairs for creating or updating a record. Specify any property key and value.                                               |         |
| Currency Format | The currency format code.                                                                                                            |         |
| Tags            | Tags for the product. Each list item is a tag string.                                                                                |         |
| Tax Exempt      | When true, the customer is tax exempt.                                                                                               | false   |
| Metafields      | JSON array containing metadata objects.                                                                                              |         |

### Create Draft Order {#createdraftordergql}

Creates a new draft order.

| Input                | Comments                                                                                   | Default |
| -------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection           | The Shopify connection to use.                                                             |         |
| Customer             | The unique identifier for the customer.                                                    |         |
| Line items           | Provide a JSON array containing line item objects.                                         |         |
| Use Customer Address | This flag determines if the order will use the customers default address.                  | true    |
| Note                 | A note on the draft order.                                                                 |         |
| Tax Exempt           | Whether or not taxes are exempt for the draft order.                                       | false   |
| Tags                 | Provide a list of tags for the draft order.                                                |         |
| Additional Fields    | Additional fields that might not be covered by the standard inputs. This is a JSON object. |         |

### Create Fulfillment Service {#createfulfillmentservicegql}

Creates a new fulfillment service.

| Input                    | Comments                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Shopify connection to use.                                                             |         |
| Fulfillment Service Name | The name of the fulfillment service.                                                       |         |
| Callback URL             | The callback URL that the fulfillment service has registered for request.                  |         |
| Inventory Management     | Whether the fulfillment services tracks product inventory and provides updates to Shopify. | false   |
| Tracking Support         | Whether the fulfillment service supports tracking numbers for packages.                    | false   |

### Create Order {#createordergql}

Creates a new order.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection | The Shopify connection to use.             |         |
| Order Data | JSON data to be sent as the Order payload. |         |

### Create Product {#createproductgql}

Creates a new product.

| Input             | Comments                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Shopify connection to use.                                                             |         |
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

Creates a new image for an existing product.

| Input          | Comments                               | Default |
| -------------- | -------------------------------------- | ------- |
| Connection     | The Shopify connection to use.         |         |
| Product ID     | The unique identifier for the product. |         |
| Image URL      | Provide the URL of the image.          |         |
| Image Alt Text | Provide the alt text for the image.    |         |

### Create Variant {#createvariantgql}

Creates a new variant for the specified product.

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Shopify connection to use.                     |         |
| Product ID | The unique identifier for the product.             |         |
| Variant    | Provide a JSON object containing the variant data. |         |

### Create Webhook {#createwebhook}

Creates a webhook for the specified topic.

| Input          | Comments                                                                                                                                                                | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Shopify connection to use.                                                                                                                                          |         |
| Webhook Topic  | The event topic for the webhook. See [Shopify webhook topics](https://shopify.dev/docs/api/admin-rest/2023-04/resources/webhook#event-topics) for all available topics. |         |
| Post URL       | The URL where the newly created webhook will post to. Used to configure the Shopify trigger.                                                                            |         |
| Webhook Format | The format for the webhook response.                                                                                                                                    | json    |

### Delete Collection {#deletecollectiongql}

Deletes a collection by ID.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    | The Shopify connection to use.            |         |
| Collection ID | The unique identifier for the collection. |         |

### Delete Customer {#deletecustomergql}

Deletes an existing customer.

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection | The Shopify connection to use.          |         |
| Customer   | The unique identifier for the customer. |         |

### Delete Draft Order {#deletedraftordergql}

Deletes an existing draft order.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Shopify connection to use.             |         |
| Draft Order Id | The unique identifier for the draft order. |         |

### Delete Fulfillment Service {#deletefulfillmentservicegql}

Deletes an existing fulfillment service.

| Input                  | Comments                                           | Default |
| ---------------------- | -------------------------------------------------- | ------- |
| Connection             | The Shopify connection to use.                     |         |
| Fulfillment Service ID | The unique identifier for the fulfillment service. |         |

### Delete Instance Webhooks {#deleteinstancewebhooks}

Deletes all webhooks related to the current instance.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Delete Inventory Levels {#deleteinventorylevelsgql}

Deletes an inventory level.

| Input              | Comments                                       | Default |
| ------------------ | ---------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                 |         |
| Inventory Level Id | The unique identifier for the inventory level. |         |

### Delete Metafield {#deletemetafieldgql}

Deletes a resource metafield. Note: This action currently utilizes an unstable version of the Shopify Admin GraphQL API and is subject to change.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Shopify connection to use.                    |         |
| Key        | Provide the key of the metafield to delete.       |         |
| Owner ID   | Provide the owner ID of the metafield to delete.  |         |
| Namespace  | Provide the namespace of the metafield to delete. |         |

### Delete Order {#deleteordergql}

Deletes an existing order by ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Shopify connection to use.       |         |
| Order ID   | The unique identifier for the order. |         |

### Delete Product {#deleteproductgql}

Deletes an existing product.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Shopify connection to use.         |         |
| Product ID | The unique identifier for the product. |         |

### Delete Product Image {#deleteproductimagegql}

Deletes a product image.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Shopify connection to use.               |         |
| Product ID | The unique identifier for the product.       |         |
| Image ID   | The unique identifier for the product image. |         |

### Delete Variant {#deletevariantgql}

Deletes an existing variant by ID.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Shopify connection to use.                 |         |
| Product ID | The unique identifier for the product.         |         |
| Variant ID | The unique identifier for the product variant. |         |

### Delete Webhook {#deletewebhook}

Deletes a webhook by ID.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |
| Webhook ID | The ID of an existing webhook. |         |

### Get Collection {#getcollectiongql}

Retrieves a collection by ID.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    | The Shopify connection to use.            |         |
| Collection ID | The unique identifier for the collection. |         |

### Get Customer {#getcustomer}

Retrieves a customer by ID.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Customer   | The unique ID of the customer. |         |
| Connection | The Shopify connection to use. |         |

### Get Draft Order {#getdraftordergql}

Retrieves a draft order by ID.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Shopify connection to use.             |         |
| Draft Order Id | The unique identifier for the draft order. |         |

### Get Fulfillment {#getfulfillmentgql}

Retrieves a fulfillment by ID.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Shopify connection to use.             |         |
| Fulfillment Id | The unique identifier for the fulfillment. |         |

### Get Fulfillment Order {#getfulfillmentorder}

Retrieves a specific fulfillment order by ID.

| Input                | Comments                                         | Default |
| -------------------- | ------------------------------------------------ | ------- |
| Connection           | The Shopify connection to use.                   |         |
| Fulfillment Order ID | The unique identifier for the fulfillment order. |         |

### Get Fulfillment Service {#getfulfillmentservicegql}

Retrieves a fulfillment service by ID.

| Input                  | Comments                                           | Default |
| ---------------------- | -------------------------------------------------- | ------- |
| Connection             | The Shopify connection to use.                     |         |
| Fulfillment Service ID | The unique identifier for the fulfillment service. |         |

### Get Inventory Item {#getinventoryitemsgql}

Retrieves an inventory item by ID.

| Input             | Comments                                      | Default |
| ----------------- | --------------------------------------------- | ------- |
| Inventory Item Id | The unique identifier for the inventory item. |         |
| Connection        | The Shopify connection to use.                |         |

### Get Inventory Levels {#getinventorylevelsgql}

Retrieves an inventory level by ID.

| Input              | Comments                                       | Default |
| ------------------ | ---------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                 |         |
| Inventory Level Id | The unique identifier for the inventory level. |         |

### Get Location {#getlocationsgql}

Retrieves a location by ID.

| Input       | Comments                                                    | Default |
| ----------- | ----------------------------------------------------------- | ------- |
| Connection  | The Shopify connection to use.                              |         |
| Location ID | The ID of the location that the inventory level belongs to. |         |

### Get Order {#getordergql}

Retrieves an order by ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Shopify connection to use.       |         |
| Order ID   | The unique identifier for the order. |         |

### Get Order (Deprecated) {#getorder}

Get the information and metadata about an order. This version of the action is being deprecated. Please replace action with Get Order.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Order ID   | The unique ID of the order.    |         |
| Connection | The Shopify connection to use. |         |

### Get Product {#getproduct}

Retrieves a product by ID.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Product ID | The unique ID of the product.  |         |
| Connection | The Shopify connection to use. |         |

### Get Product Image {#getproductimagegql}

Retrieves a product image by ID.

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| Connection | The Shopify connection to use.                                  |         |
| Product ID | The unique identifier for the product.                          |         |
| Image ID   | Provide a unique ID of a product image. Use only the ID number. |         |

### Get Shop Configuration {#getshopconfig}

Retrieves the shop configuration.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### Get Variant {#getvariantgql}

Retrieves a product variant by ID.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Shopify connection to use.                 |         |
| Variant ID | The unique identifier for the product variant. |         |

### List Collections {#listcollectionsgql}

Lists all collections.

| Input              | Comments                                                                                                                | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                                                                                          |         |
| Limit              | The maximum number of results to return per page. Maximum: 250.                                                         |         |
| Fetch All          | When true, automatically fetches all pages of results using pagination. The API is limited to 250 records per page max. | false   |
| Page Offset Cursor | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                   |         |

### List Currencies {#listcurrenciesgql}

Lists all enabled currencies.

| Input              | Comments                                                                                                                | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                                                                                          |         |
| Limit              | The maximum number of results to return per page. Maximum: 250.                                                         |         |
| Fetch All          | When true, automatically fetches all pages of results using pagination. The API is limited to 250 records per page max. | false   |
| Page Offset Cursor | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                   |         |

### List Customers {#listcustomers}

Lists all customers.

| Input             | Comments                                                                                                                               | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Get All Data      | When true, fetches all data from all pages (API is limited to 250 records per page max). The limit input will be ignored when enabled. | false   |
| Limit             | The maximum number of results to return per page. Maximum: 250.                                                                        |         |
| Page Offset Token | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                                  |         |
| Connection        | The Shopify connection to use.                                                                                                         |         |

### List Draft Orders {#listdraftorders}

Lists all draft orders.

| Input             | Comments                                                                                                                               | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Get All Data      | When true, fetches all data from all pages (API is limited to 250 records per page max). The limit input will be ignored when enabled. | false   |
| Limit             | The maximum number of results to return per page. Maximum: 250.                                                                        |         |
| Page Offset Token | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                                  |         |
| Connection        | The Shopify connection to use.                                                                                                         |         |

### List Fulfillment Orders {#listfulfillmentorders}

Lists all fulfillment orders for a specific order.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |
| Order ID   | The unique ID of the order.    |         |

### List Fulfillments {#listfulfillments}

Lists all fulfillments for a specified order.

| Input             | Comments                                                                                                                               | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Order ID          | The unique ID of the order.                                                                                                            |         |
| Get All Data      | When true, fetches all data from all pages (API is limited to 250 records per page max). The limit input will be ignored when enabled. | false   |
| Limit             | The maximum number of results to return per page. Maximum: 250.                                                                        |         |
| Page Offset Token | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                                  |         |
| Connection        | The Shopify connection to use.                                                                                                         |         |

### List Fulfillment Services {#listfulfillmentservicesgql}

Lists all fulfillment services.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Shopify connection to use. |         |

### List Inventory Items {#listinventoryitemsgql}

Lists all inventory items.

| Input              | Comments                                                                                                                | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                                                                                          |         |
| Query              | The query to filter the inventory items.                                                                                |         |
| Fetch All          | When true, automatically fetches all pages of results using pagination. The API is limited to 250 records per page max. | false   |
| Limit              | The maximum number of results to return per page. Maximum: 250.                                                         |         |
| Page Offset Cursor | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                   |         |

### List Inventory Levels At Location {#listinventorylevelsgql}

Lists all inventory levels at a specified location.

| Input              | Comments                                                                                                                | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                                                                                          |         |
| Location ID        | The ID of the location that the inventory level belongs to.                                                             |         |
| Fetch All          | When true, automatically fetches all pages of results using pagination. The API is limited to 250 records per page max. | false   |
| Limit              | The maximum number of results to return per page. Maximum: 250.                                                         |         |
| Page Offset Cursor | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                   |         |

### List Locations {#listlocationsgql}

Lists all locations.

| Input              | Comments                                                                                                                | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                                                                                          |         |
| Limit              | The maximum number of results to return per page. Maximum: 250.                                                         |         |
| Fetch All          | When true, automatically fetches all pages of results using pagination. The API is limited to 250 records per page max. | false   |
| Page Offset Cursor | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                   |         |

### List Metafields {#listmetafieldsgql}

Lists resource metafields. Note: This action currently utilizes an unstable version of the Shopify Admin GraphQL API and is subject to change.

| Input              | Comments                                                                                                                | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                                                                                          |         |
| Resource           | The unique identifier for the resource.                                                                                 |         |
| Limit              | The maximum number of results to return per page. Maximum: 250.                                                         |         |
| Fetch All          | When true, automatically fetches all pages of results using pagination. The API is limited to 250 records per page max. | false   |
| Page Offset Cursor | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                   |         |

### List Orders {#listordersgql}

Lists all orders.

| Input              | Comments                                                                                                                | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                                                                                          |         |
| Query              | The query to filter the orders.                                                                                         |         |
| Fetch All          | When true, automatically fetches all pages of results using pagination. The API is limited to 250 records per page max. | false   |
| Limit              | The maximum number of results to return per page. Maximum: 250.                                                         |         |
| Page Offset Cursor | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                   |         |

### List Orders (Deprecated) {#listorders}

List all orders. This version of the action is being deprecated. Please replace action with List Orders.

| Input              | Comments                                                                                                                               | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                                                                                                         |         |
| Get All Data       | When true, fetches all data from all pages (API is limited to 250 records per page max). The limit input will be ignored when enabled. | false   |
| Page Offset Token  | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                                  |         |
| Limit              | The maximum number of results to return per page. Maximum: 250.                                                                        |         |
| Attribution App ID | Show orders attributed to a certain app, specified by the app ID.                                                                      |         |
| Created At Max     | Show orders created at or before date. ISO 8601 format like 2021-10-01 or 2021-10-01T00:00:00-04:00 for exact time.                    |         |
| Created At Min     | Show orders created at or after this date. Use ISO 8601 format (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss-HH:mm).                              |         |
| Fields             | Retrieve only certain fields, specified by a comma-separated list of fields names.                                                     |         |
| Financial Status   | Filter orders by their financial status.                                                                                               |         |
| Fulfillment Status | Filter orders by their fulfillment status.                                                                                             |         |
| IDs                | Retrieve only orders specified by a comma-separated list of order IDs.                                                                 |         |
| Processed At Max   | Show orders imported at or before date. ISO 8601 format like 2021-10-01 or 2021-10-01T00:00:00-04:00 for exact time.                   |         |
| Processed At Min   | Show orders imported at or after date. ISO 8601 format like 2021-10-01 or 2021-10-01T00:00:00-04:00 for exact time.                    |         |
| Since ID           | Show orders after the specified ID.                                                                                                    |         |
| Status             | Filter orders by their status.                                                                                                         |         |
| Updated At Max     | Show orders last updated at or before date. ISO 8601 format like 2021-10-01 or 2021-10-01T00:00:00-04:00 for exact time.               |         |
| Updated At Min     | Show orders last updated at or after date. ISO 8601 format like 2021-10-01 or 2021-10-01T00:00:00-04:00 for exact time.                |         |

### List Product Images {#listproductimages}

Lists all product images for the specified product.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Product ID | The unique ID of the product.  |         |
| Connection | The Shopify connection to use. |         |

### List Products {#listproducts}

Lists all products.

| Input             | Comments                                                                                                                               | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Limit             | The maximum number of results to return per page. Maximum: 250.                                                                        |         |
| Get All Data      | When true, fetches all data from all pages (API is limited to 250 records per page max). The limit input will be ignored when enabled. | false   |
| Page Offset Token | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                                  |         |
| Connection        | The Shopify connection to use.                                                                                                         |         |

### List Variants {#listvariantsgql}

Lists all variants for the specified product.

| Input              | Comments                                                                                                                | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Shopify connection to use.                                                                                          |         |
| Product ID         | The unique identifier for the product.                                                                                  |         |
| Fetch All          | When true, automatically fetches all pages of results using pagination. The API is limited to 250 records per page max. | false   |
| Limit              | The maximum number of results to return per page. Maximum: 250.                                                         |         |
| Page Offset Cursor | Cursor for pagination. Use the value from the previous response to retrieve the next page of results.                   |         |

### List Webhooks {#listwebhooks}

Lists all webhooks or webhooks for the current instance.

| Input                       | Comments                                                           | Default |
| --------------------------- | ------------------------------------------------------------------ | ------- |
| Connection                  | The Shopify connection to use.                                     |         |
| Show Only Instance Webhooks | When true, only webhooks that point to this instance are returned. | true    |

### Raw Request {#graphqlrawrequest}

Sends a raw GraphQL request to Shopify.

| Input             | Comments                                                                                                                                | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Shopify connection to use.                                                                                                          |         |
| API Version       | Shopify versions its API. See [Shopify API release notes](https://shopify.dev/docs/api/release-notes) for a list of available versions. | 2026-01 |
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
| API Version             | Shopify versions its API. See [Shopify API release notes](https://shopify.dev/docs/api/release-notes) for a list of available versions.                                                                                                                                                          | 2026-01 |
| Return Headers          | When true, response headers will be included in the output object.                                                                                                                                                                                                                               | false   |

### Set Metafield {#setmetafieldgql}

Sets a resource metafield. Note: This action currently utilizes an unstable version of the Shopify Admin GraphQL API and is subject to change.

| Input      | Comments                                                                                                                                    | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Shopify connection to use.                                                                                                              |         |
| Key        | The key for the metafield.                                                                                                                  |         |
| Value      | The value for the metafield.                                                                                                                |         |
| Owner ID   | The unique ID of the owner of the metafield.                                                                                                |         |
| Type       | Provide a type for the metafield. Required when there is no corresponding definition for the given namespace, key, and owner resource type. |         |
| Namespace  | The namespace for the metafield.                                                                                                            |         |

### Update Customer {#updatecustomergql}

Updates an existing customer by ID.

| Input             | Comments                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Shopify connection to use.                                                             |         |
| Customer          | The unique identifier for the customer.                                                    |         |
| First Name        | The first name of the customer.                                                            |         |
| Last Name         | The last name of the customer.                                                             |         |
| Email             | The email address of the customer.                                                         |         |
| Address List      | Provide a JSON array containing address objects.                                           |         |
| Phone             | The phone number of the customer.                                                          |         |
| Notes             | A note about the customer.                                                                 |         |
| Tags              | For each list item, provide a string you would like to tag the product with.               |         |
| Tax Exempt        | Determines if the customer is tax exempt.                                                  |         |
| Metafields        | Provide a JSON array containing metadata objects.                                          |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. |         |

### Update Fulfillment Service {#updatefulfillmentservicegql}

Updates an existing fulfillment service.

| Input                    | Comments                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Shopify connection to use.                                                             |         |
| Fulfillment Service ID   | The unique identifier for the fulfillment service.                                         |         |
| Fulfillment Service Name | The name of the fulfillment service.                                                       |         |
| Callback URL             | The callback URL that the fulfillment service has registered for request.                  |         |
| Inventory Management     | Whether the fulfillment services tracks product inventory and provides updates to Shopify. |         |
| Tracking Support         | Whether the fulfillment service supports tracking numbers for packages.                    |         |

### Update Inventory Item {#updateinventoryitemsgql}

Updates an existing inventory item.

| Input             | Comments                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Shopify connection to use.                                                             |         |
| Inventory Item Id | The unique identifier for the inventory item.                                              |         |
| SKU               | The SKU (stock keeping unit) of the inventory item.                                        |         |
| Cost              | Unit cost associated with the inventory item, the currency is the shop's default currency. |         |
| Tracked           | Whether the inventory item is tracked.                                                     |         |

### Update Product {#updateproductgql}

Updates an existing product by ID.

| Input             | Comments                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Shopify connection to use.                                                             |         |
| Product ID        | The unique identifier for the product.                                                     |         |
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

Updates an existing product variant by ID.

| Input          | Comments                                                     | Default |
| -------------- | ------------------------------------------------------------ | ------- |
| Connection     | The Shopify connection to use.                               |         |
| Product ID     | The unique identifier for the product.                       |         |
| Update Variant | Provide a JSON object containing the variant data to update. |         |
