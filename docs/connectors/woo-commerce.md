---
title: WooCommerce Connector
sidebar_label: WooCommerce
description: Easily manage your customers, orders, and products in your WooCommerce platform
---

![WooCommerce](./assets/woo-commerce.png#connector-icon)
Easily manage your customers, orders, and products in your WooCommerce platform

## Connections

### WooCommerce Basic Auth

Authenticate requests to Woo Commerce with values obtained from your wordpress site.

WooCommerce operates through your Wordpress site's built in API.
To get started with WooCommerce, install the WooCommerce plugin on your Wordpress site.

Once installed, you will see a navigation item for the plugin in your [Wordpress Admin Dashboard](https://wordpress.com/log-in?redirect_to=https%3A%2F%2Fwordpress.com%2Fwp-admin%2F)
Under the settings tab, navigate to advanced and you will see a section on "page setup".
Click into REST API, and you will be greeted with a screen to generate API keys.
Add a new key and give it a description, make sure to take note of the **Consumer Key**, and the **Consumer Secret**.

When you add a WooCommerce step to an integration, a connection config variable will be created automatically for you:

Enter the **Consumer Key** and **Consumer Secret** that you previously noted, and you should be ready to start creating WooCommerce integrations.

For additional information regarding authentication, please refer to the [WooCommerce docs](https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication).

| Input           | Comments                                                      | Default |
| --------------- | ------------------------------------------------------------- | ------- |
| Consumer Key    |                                                               |         |
| Consumer Secret |                                                               |         |
| Domain          | Provide a string value for the domain of your wordpress site. |         |

## Actions

### Create Customer

Create a new customer record

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The connection to be used.                                                              |         |
| Email Address        | Provide a valid email address.                                                          |         |
| Phone                | Provide a string value for the phone number of the billing address.                     |         |
| Username             | Provide a string value for the username.                                                |         |
| First Name           | Provide a string value for the first name.                                              |         |
| Last Name            | Provide a string value for the last name.                                               |         |
| Company              | Provide a string value for the company name.                                            |         |
| Billing Address 1    | Provide a string value for the address 1 of the billing address.                        |         |
| Billing Address 2    | Provide a string value for the address 2 of the billing address.                        |         |
| Billing City         | Provide a string value for the city of the billing address.                             |         |
| State                | Provide a string value for the state of the billing address.                            |         |
| Country              | Provide a string value for the country of the billing address.                          |         |
| Postal Code          | Provide a string value for the postal code of the billing address.                      |         |
| Shipping Address 1   | Provide a string value for the address 1 of the shipping address.                       |         |
| Shipping Address 2   | Provide a string value for the address 2 of the shipping address.                       |         |
| Shipping City        | Provide a string value for the city of the billing address.                             |         |
| Shipping State       | Provide a string value for the state of the billing address.                            |         |
| Shipping Country     | Provide a string value for the country of the billing address.                          |         |
| Shipping Postal Code | Provide a string value for the postal code of the billing address.                      |         |
| Optional Values      | For each item, provide an optional key value pair to be injected into the request body. |         |

### Create Order

Create a new order record

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The connection to be used.                                                              |         |
| Line Items           | Provide a JSON array, with objects each specifying details of the line item.            |         |
| Shipping Lines       | Provide a JSON array, with objects each specifying details                              |         |
| Payment Method Key   | Provide the unique identifier of the payment method.                                    |         |
| Payment Method Title | Provide the unique identifier of the payment method.                                    |         |
| Is Paid              | Determines if the order has been paid for.                                              | false   |
| Email Address        | Provide a valid email address.                                                          |         |
| Phone                | Provide a string value for the phone number of the billing address.                     |         |
| First Name           | Provide a string value for the first name.                                              |         |
| Last Name            | Provide a string value for the last name.                                               |         |
| Billing Address 1    | Provide a string value for the address 1 of the billing address.                        |         |
| Billing Address 2    | Provide a string value for the address 2 of the billing address.                        |         |
| Billing City         | Provide a string value for the city of the billing address.                             |         |
| Billing State        | Provide a string value for the state of the billing address.                            |         |
| Billing Postal Code  | Provide a string value for the postal code of the billing address.                      |         |
| Billing Country      | Provide a string value for the country of the billing address.                          |         |
| Shipping Address 1   | Provide a string value for the address 1 of the shipping address.                       |         |
| Shipping Address 2   | Provide a string value for the address 2 of the shipping address.                       |         |
| Shipping City        | Provide a string value for the city of the billing address.                             |         |
| Shipping State       | Provide a string value for the state of the billing address.                            |         |
| Shipping Country     | Provide a string value for the country of the billing address.                          |         |
| Shipping Postal Code | Provide a string value for the postal code of the billing address.                      |         |
| Optional Values      | For each item, provide an optional key value pair to be injected into the request body. |         |

### Create Product

Create a new product record

| Input           | Comments                                                                                | Default |
| --------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection      | The connection to be used.                                                              |         |
| Product Name    | Provide a string value for the name of the product.                                     |         |
| Product Type    | Provide a string value for the name of the product.                                     |         |
| Price           | Provide a number for the price of the product.                                          |         |
| Description     | Provide a description for the product.                                                  |         |
| Summary         | Provide a short summary for the product details.                                        |         |
| Categories      | For each item, provide an id of a category that the product belongs to.                 |         |
| Images          | For each item, provide a link to the image stored in your                               |         |
| Optional Values | For each item, provide an optional key value pair to be injected into the request body. |         |

### Create Product Category

Create a new product category record

| Input         | Comments                                               | Default |
| ------------- | ------------------------------------------------------ | ------- |
| Connection    | The connection to be used.                             |         |
| Category Name | Provide a name for the category.                       |         |
| Image Link    | Provide a link to an image to represent your category. |         |
| Description   | Provide a description for the product.                 |         |

### Create Refund

Create a refund on an existing order

| Input         | Comments                                                                     | Default |
| ------------- | ---------------------------------------------------------------------------- | ------- |
| Connection    | The connection to be used.                                                   |         |
| Order Id      | Provide the unique identifier of the order.                                  |         |
| Refund Amount | Provide a value for the refund amount.                                       |         |
| Line Items    | Provide a JSON array, with objects each specifying details of the line item. |         |

### Delete Customer

Delete the information and metadata of the given user

| Input      | Comments                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------- | ------- |
| Connection | The connection to be used.                                                       |         |
| Customer   | Provide a unique identifier for the desired customer. This value should be an id |         |

### Delete Order

Delete the information and metadata of an order

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The connection to be used.                  |         |
| Order Id   | Provide the unique identifier of the order. |         |

### Delete Product

Delete the information and metadata of a given product

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The connection to be used.                        |         |
| Product Id | Provide a unique identifier of the given product. |         |

### Delete Product Category

Delete Product Category

| Input       | Comments                                             | Default |
| ----------- | ---------------------------------------------------- | ------- |
| Connection  | The connection to be used.                           |         |
| Category Id | Provide a unique identifier of an existing category. |         |

### Delete Refund

Delete the information and metadata of a refund

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The connection to be used.                         |         |
| Order Id   | Provide the unique identifier of the order.        |         |
| Refund Id  | Provide a unique identifier of an existing refund. |         |

### Get Coupon Totals Report

Returns the information and metadata of a Coupon Totals Report

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection | The connection to be used.                                                            |         |
| Period     | Provide a value for the sales period. Default is today's date.                        |         |
| Start Date | Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. |         |
| End Date   | Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.   |         |

### Get Customer

Returns the information and metadata of the given user

| Input      | Comments                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------- | ------- |
| Connection | The connection to be used.                                                       |         |
| Customer   | Provide a unique identifier for the desired customer. This value should be an id |         |

### Get Customer Totals Report

Returns the information and metadata of a Customer Totals Report

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection | The connection to be used.                                                            |         |
| Period     | Provide a value for the sales period. Default is today's date.                        |         |
| End Date   | Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.   |         |
| Start Date | Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. |         |

### Get Order

Returns the information and metadata of an order

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The connection to be used.                  |         |
| Order Id   | Provide the unique identifier of the order. |         |

### Get Order Totals Report

Returns the information and metadata of a Order Totals Report

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection | The connection to be used. |         |

### Get Product

Returns the information and metadata of a given product

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The connection to be used.                        |         |
| Product Id | Provide a unique identifier of the given product. |         |

### Get Product Category

Returns the information and metadata of the product category

| Input       | Comments                                             | Default |
| ----------- | ---------------------------------------------------- | ------- |
| Connection  | The connection to be used.                           |         |
| Category Id | Provide a unique identifier of an existing category. |         |

### Get Product Totals Report

Returns the information and metadata of a Product Totals Report

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection | The connection to be used. |         |

### Get Refund

Returns the information and metadata of a refund

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The connection to be used.                         |         |
| Order Id   | Provide the unique identifier of the order.        |         |
| Refund Id  | Provide a unique identifier of an existing refund. |         |

### Get Review Totals Report

Returns the information and metadata of a Review Totals Report

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection | The connection to be used. |         |

### Get Sales Report

Returns the information and metadata of a Sales Report

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection | The connection to be used.                                                            |         |
| Period     | Provide a value for the sales period. Default is today's date.                        |         |
| Start Date | Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. |         |
| End Date   | Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.   |         |

### Get Top Sellers Report

Returns the information and metadata of a Sales Report

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection | The connection to be used.                                                            |         |
| Period     | Provide a value for the sales period. Default is today's date.                        |         |
| Start Date | Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. |         |
| End Date   | Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.   |         |

### List Customers

Returns a list of all active customers

| Input            | Comments                                                                     | Default |
| ---------------- | ---------------------------------------------------------------------------- | ------- |
| Connection       | The connection to be used.                                                   |         |
| Fetch All        | If true, all pages will be fetched.                                          | false   |
| Results Per Page | Provide an integer for the amount of items to be returned.                   |         |
| Page Number      | Provide an integer for the page number.                                      |         |
| Page Offset      | Provide an integer for the page offset since the first page.                 |         |
| Search           | Search for a specific string.                                                |         |
| Before           | Limit response to resources published before a given ISO8601 compliant date. |         |
| After            | Limit response to resources published after a given ISO8601 compliant date.  |         |
| Extra Parameters | Extra parameters to be passed to the request.                                |         |

### List Orders

Returns a list of all orders

| Input            | Comments                                                                     | Default |
| ---------------- | ---------------------------------------------------------------------------- | ------- |
| Connection       | The connection to be used.                                                   |         |
| Results Per Page | Provide an integer for the amount of items to be returned.                   |         |
| Page Number      | Provide an integer for the page number.                                      |         |
| Page Offset      | Provide an integer for the page offset since the first page.                 |         |
| Search           | Search for a specific string.                                                |         |
| Before           | Limit response to resources published before a given ISO8601 compliant date. |         |
| After            | Limit response to resources published after a given ISO8601 compliant date.  |         |
| Extra Parameters | Extra parameters to be passed to the request.                                |         |
| Fetch All        | If true, all pages will be fetched.                                          | false   |

### List Product Categories

Returns a list of all product categories

| Input            | Comments                                                                     | Default |
| ---------------- | ---------------------------------------------------------------------------- | ------- |
| Connection       | The connection to be used.                                                   |         |
| Fetch All        | If true, all pages will be fetched.                                          | false   |
| Results Per Page | Provide an integer for the amount of items to be returned.                   |         |
| Page Number      | Provide an integer for the page number.                                      |         |
| Page Offset      | Provide an integer for the page offset since the first page.                 |         |
| Search           | Search for a specific string.                                                |         |
| Before           | Limit response to resources published before a given ISO8601 compliant date. |         |
| After            | Limit response to resources published after a given ISO8601 compliant date.  |         |
| Extra Parameters | Extra parameters to be passed to the request.                                |         |

### List Products

Returns a list of all active products

| Input            | Comments                                                                     | Default |
| ---------------- | ---------------------------------------------------------------------------- | ------- |
| Connection       | The connection to be used.                                                   |         |
| Results Per Page | Provide an integer for the amount of items to be returned.                   |         |
| Page Number      | Provide an integer for the page number.                                      |         |
| Page Offset      | Provide an integer for the page offset since the first page.                 |         |
| Search           | Search for a specific string.                                                |         |
| Before           | Limit response to resources published before a given ISO8601 compliant date. |         |
| After            | Limit response to resources published after a given ISO8601 compliant date.  |         |
| Extra Parameters | Extra parameters to be passed to the request.                                |         |
| Fetch All        | If true, all pages will be fetched.                                          | false   |

### List Refunds

Returns a list of all refunds on an existing order

| Input            | Comments                                                                     | Default |
| ---------------- | ---------------------------------------------------------------------------- | ------- |
| Connection       | The connection to be used.                                                   |         |
| Order Id         | Provide the unique identifier of the order.                                  |         |
| Results Per Page | Provide an integer for the amount of items to be returned.                   |         |
| Page Number      | Provide an integer for the page number.                                      |         |
| Page Offset      | Provide an integer for the page offset since the first page.                 |         |
| Search           | Search for a specific string.                                                |         |
| Before           | Limit response to resources published before a given ISO8601 compliant date. |         |
| After            | Limit response to resources published after a given ISO8601 compliant date.  |         |
| Extra Parameters | Extra parameters to be passed to the request.                                |         |
| Fetch All        | If true, all pages will be fetched.                                          | false   |

### List Reports

Returns a list of all reports

| Input            | Comments                                                                     | Default |
| ---------------- | ---------------------------------------------------------------------------- | ------- |
| Connection       | The connection to be used.                                                   |         |
| Fetch All        | If true, all pages will be fetched.                                          | false   |
| After            | Limit response to resources published after a given ISO8601 compliant date.  |         |
| Before           | Limit response to resources published before a given ISO8601 compliant date. |         |
| Page Number      | Provide an integer for the page number.                                      |         |
| Results Per Page | Provide an integer for the amount of items to be returned.                   |         |
| Page Offset      | Provide an integer for the page offset since the first page.                 |         |
| Search           | Search for a specific string.                                                |         |
| Extra Parameters | Extra parameters to be passed to the request.                                |         |

### Raw Request

Send raw HTTP request to WooCommerce

| Input                   | Comments                                                                                                                                                                                                                  | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The connection to be used.                                                                                                                                                                                                |         |
| URL                     | Input the path only (/reports), The base URL is already included (https://{input_domain}/wp-json/wc/v3). For example, to connect to https://{input_domain}/wp-json/wc/v3/reports, only /reports is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                   |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                 |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                      |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                          |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                    |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                       |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                               |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                  | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                       |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                      | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                       | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                          | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                             | false   |

### Update Customer

Update an existing customer record

| Input                | Comments                                                                         | Default |
| -------------------- | -------------------------------------------------------------------------------- | ------- |
| Connection           | The connection to be used.                                                       |         |
| Customer             | Provide a unique identifier for the desired customer. This value should be an id |         |
| Email Address        | Provide a valid email address.                                                   |         |
| Phone                | Provide a string value for the phone number of the billing address.              |         |
| Username             | Provide a string value for the username.                                         |         |
| First Name           | Provide a string value for the first name.                                       |         |
| Last Name            | Provide a string value for the last name.                                        |         |
| Company              | Provide a string value for the company name.                                     |         |
| Billing Address 1    | Provide a string value for the address 1 of the billing address.                 |         |
| Billing Address 2    | Provide a string value for the address 2 of the billing address.                 |         |
| Billing City         | Provide a string value for the city of the billing address.                      |         |
| Billing State        | Provide a string value for the state of the billing address.                     |         |
| Billing Postal Code  | Provide a string value for the postal code of the billing address.               |         |
| Billing Tigers       | Provide a string value for the country of the billing address.                   |         |
| Shipping Address 1   | Provide a string value for the address 1 of the shipping address.                |         |
| Shipping Address 2   | Provide a string value for the address 2 of the shipping address.                |         |
| Shipping City        | Provide a string value for the city of the billing address.                      |         |
| Shipping State       | Provide a string value for the state of the billing address.                     |         |
| Shipping Country     | Provide a string value for the country of the billing address.                   |         |
| Shipping Postal Code | Provide a string value for the postal code of the billing address.               |         |

### Update Product

Create a new product record

| Input           | Comments                                                                                | Default |
| --------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection      | The connection to be used.                                                              |         |
| Product Id      | Provide a unique identifier of the given product.                                       |         |
| Product Name    | Provide a string value for the name of the product.                                     |         |
| Product Type    | Provide a string value for the name of the product.                                     |         |
| Price           | Provide a number for the price of the product.                                          |         |
| Description     | Provide a description for the product.                                                  |         |
| Summary         | Provide a short summary for the product details.                                        |         |
| Categories      | For each item, provide an id of a category that the product belongs to.                 |         |
| Images          | For each item, provide a link to the image stored in your                               |         |
| Optional Values | For each item, provide an optional key value pair to be injected into the request body. |         |
