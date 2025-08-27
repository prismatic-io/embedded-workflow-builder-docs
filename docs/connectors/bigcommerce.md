---
title: BigCommerce Connector
sidebar_label: BigCommerce
description: BigCommerce is a SaaS ecommerce platform. Use the Bigcommerce component to manage your Products, Brands, Categories and more.
---

![BigCommerce](./assets/bigcommerce.png#connector-icon)
BigCommerce is a SaaS ecommerce platform. Use the Bigcommerce component to manage your Products, Brands, Categories and more.

## Connections

### BigCommerce OAuth 2.0

BigCommerce OAuth 2.0

1. To create an OAuth 2.0 app in BigCommerce, sign up for a BigCommerce developer account at https://developer.bigcommerce.com/ and create a new BigCommerce application.
2. Take note of your application's Client ID and Secret and enter those values when you add a BigCommerce connection to your integration.
3. Under Redirect URI, add the callback URL, `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default          |
| ------------- | ----------------------------------------------------------------------------------- | ---------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. | store_v2_default |
| Client ID     |                                                                                     |                  |
| Client Secret |                                                                                     |                  |

## Triggers

### Webhook

Receive and validate webhook requests from BigCommerce for webhooks you configure.

## Actions

### Create a Category Image

Upload an image for a specific category.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Category ID            | The ID of the category to retrieve.              |         |
| Image File             | The image file to be uploaded.                   |         |

### Create a Category Tree

Creates a new category tree in BigCommerce.

| Input                  | Comments                                                                          | Default |
| ---------------------- | --------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                                   |         |
| Store Hash             | The unique identifier for the BigCommerce store.                                  |         |
| Parent ID              | Set to 0 for top level category. Otherwise, set to the ID of the parent category. |         |
| Category Name          | The name displayed for the category.                                              |         |

### Create a Product Modifier

Creates a Product Modifier.

| Input                  | Comments                                                          | Default |
| ---------------------- | ----------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                   |         |
| Store Hash             | The unique identifier for the BigCommerce store.                  |         |
| Product ID             | The ID of the Product to which the modifier will be added.        |         |
| Modifier Type          | The type of the modifier. Acceptable values: date, checkbox, etc. |         |
| Required               | Whether or not this modifier is required at checkout.             | false   |
| Sort Order             | The order the modifiers display on the product detail page.       |         |
| Configuration          | The configuration values for the modifier.                        |         |
| Option Values          | The option values for the modifier.                               |         |
| Display Name           | The name of the option shown on the storefront.                   |         |

### Create a Product Variant

Creates a new product variant in BigCommerce.

| Input                  | Comments                                                         | Default |
| ---------------------- | ---------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store.                 |         |
| Product ID             | The ID of the Product to which the resource belongs.             |         |
| Variant SKU            | SKU for the variant. Must be between 1 and 255 characters.       |         |
| Option Values          | Array of option and option values IDs that make up this variant. |         |
| Variant Price          | This variants base price on the storefront.                      |         |
| Variant Weight         | This variants base weight on the storefront.                     |         |
| Variant Width          | Width of the variant.                                            |         |
| Variant Height         | Height of the variant.                                           |         |
| Variant Depth          | Depth of the variant.                                            |         |

### Create a Variant Image

Creates or updates an image for a specific product variant.

| Input                  | Comments                                                               | Default |
| ---------------------- | ---------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                        |         |
| Store Hash             | The unique identifier for the BigCommerce store.                       |         |
| Product ID             | The ID of the Product to which the resource belongs.                   |         |
| Variant ID             | ID of the variant on a product, or on an associated Price List Record. |         |
| Image URL              |                                                                        |         |

### Create a Webhook

Creates a new webhook in BigCommerce.

| Input                               | Comments                                         | Default |
| ----------------------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection              |                                                  |         |
| Store Hash                          | The unique identifier for the BigCommerce store. |         |
| Scope                               |                                                  |         |
| Destination                         |                                                  |         |
| Is Active                           |                                                  | false   |
| Events History Enabled (Deprecated) |                                                  | false   |
| Headers                             |                                                  |         |

### Create Brand

Create a new brand in the store.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Brand Name             | The unique name for the new Brand to be created. |         |
| Page Title             |                                                  |         |
| Meta Keywords          | Comma-separated list of meta keywords.           |         |
| Meta Description       |                                                  |         |
| Search Keywords        |                                                  |         |
| Image URL              |                                                  |         |

### Create Brand Image

Upload an image for a brand.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Brand ID               | Filter brands by ID.                             |         |
| Image File             | The image file to be uploaded.                   |         |

### Create Category

Creates a new category in BigCommerce.

| Input                  | Comments                                                        | Default |
| ---------------------- | --------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                 |         |
| Store Hash             | The unique identifier for the BigCommerce store.                |         |
| Parent ID              | ID of the parent category. Set to 0 for top-level category.     |         |
| Category Name          | Name of the category. It should be unique among its siblings.   |         |
| Category Description   | Description for the category, can include HTML.                 |         |
| Views                  | Number of views the category has on the storefront.             |         |
| Sort Order             | Priority of this category in the menu and category pages.       |         |
| Page Title             |                                                                 |         |
| Search Keywords        |                                                                 |         |
| Meta Keywords          | Comma-separated list of meta keywords.                          |         |
| Meta Description       |                                                                 |         |
| Layout File            | Layout file for the category. Relevant for Blueprint themes.    |         |
| Is Visible             | Flag to determine if the category is visible on the storefront. | false   |
| Default Product Sort   | Determines how products are sorted on category page load.       |         |
| Image URL              |                                                                 |         |
| Custom URL             | Custom URL for the category on the storefront.                  |         |

### Create Custom Field

Creates a custom field for a product.

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| BigCommerce Connection |                                                      |         |
| Store Hash             | The unique identifier for the BigCommerce store.     |         |
| Product ID             | The ID of the Product to retrieve custom fields for. |         |
| Custom Field Name      | The name of the custom field.                        |         |
| Custom Field Value     | The value of the custom field.                       |         |

### Create Modifier Image

Creates an image for a product modifier value.

| Input                  | Comments                                                   | Default |
| ---------------------- | ---------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store.           |         |
| Product ID             | The ID of the Product to which the modifier will be added. |         |
| Modifier ID            | The ID of the Modifier.                                    |         |
| Modifier Value ID      | The ID of the Modifier Value.                              |         |
| Modifier Image File    | The image file to upload for the modifier.                 |         |

### Create Product

Creates a new product in the store.

| Input                  | Comments                                                                                                         | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store.                                                                 |         |
| Product Name           | A unique product name. Length between 1 to 250 characters.                                                       |         |
| Product Type           | The product type. Either 'physical' or 'digital'.                                                                |         |
| Product Price          | The price of the product. The price should include or exclude tax, based on the store settings.                  |         |
| Product SKU            | A unique user-defined alphanumeric product code/stock keeping unit (SKU). Length between 0 to 255 characters.    |         |
| Product Description    | The product description, which can include HTML formatting.                                                      |         |
| Product Weight         | Weight of the product. This is based on the unit set on the store.                                               |         |
| Product Width          | Width of the product, which can be used when calculating shipping costs.                                         |         |
| Product Depth          | Depth of the product, which can be used when calculating shipping costs.                                         |         |
| Product Height         | Height of the product, which can be used when calculating shipping costs.                                        |         |
| Cost Price             | The cost price of the product. Stored for reference only.                                                        |         |
| Retail Price           | The retail cost of the product. If entered, the retail cost price will be shown on the product page.             |         |
| Sale Price             | If entered, the sale price will be used instead of value in the price field when calculating the product's cost. |         |

### Create Product Image

Creates a Product Image.

| Input                  | Comments                                                                                             | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                                                      |         |
| Store Hash             | The unique identifier for the BigCommerce store.                                                     |         |
| Product ID             | The unique numeric identifier for the product with which the image is associated.                    |         |
| Image File             | The local path to the original image file uploaded to BigCommerce. A multipart/form-data media type. |         |
| Image URL              | The fully qualified URL path of the image. Limit of 8MB per file.                                    |         |

### Delete a Category Image

Deletes an image associated with a given category.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Category ID            | The ID of the category to retrieve.              |         |

### Delete a Custom Field

Deletes a product custom field.

| Input                     | Comments                                             | Default |
| ------------------------- | ---------------------------------------------------- | ------- |
| BigCommerce Connection    |                                                      |         |
| Store Hash                | The unique identifier for the BigCommerce store.     |         |
| Product ID                | The ID of the Product to retrieve custom fields for. |         |
| Custom Field ID to Delete | The ID of the custom field to delete.                |         |

### Delete a Modifier

Deletes a Product Modifier.

| Input                  | Comments                                                   | Default |
| ---------------------- | ---------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store.           |         |
| Product ID             | The ID of the Product to which the modifier will be added. |         |
| Modifier ID            | The ID of the Modifier.                                    |         |

### Delete a Product

Deletes a Product.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Product ID to Delete   | The ID of the Product to delete.                 |         |

### Delete a Product Variant

Deletes a specific product Variant.

| Input                  | Comments                                                               | Default |
| ---------------------- | ---------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                        |         |
| Store Hash             | The unique identifier for the BigCommerce store.                       |         |
| Product ID             | The ID of the Product to which the resource belongs.                   |         |
| Variant ID             | ID of the variant on a product, or on an associated Price List Record. |         |

### Delete a Webhook

Deletes a specific webhook from BigCommerce.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Webhook ID             |                                                  |         |

### Delete Brand

Delete a brand by ID.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Brand ID to Delete     | The ID of the brand to delete.                   |         |

### Delete Brand Image

Delete an image for a brand by ID.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Brand ID               | Filter brands by ID.                             |         |

### Delete Categories

Deletes categories based on provided filters.

| Input                  | Comments                                                           | Default |
| ---------------------- | ------------------------------------------------------------------ | ------- |
| BigCommerce Connection |                                                                    |         |
| Store Hash             | The unique identifier for the BigCommerce store.                   |         |
| ID                     | Filter items by ID.                                                |         |
| ID In                  | Filter items by multiple IDs.                                      |         |
| ID Not In              | Exclude items by multiple IDs.                                     |         |
| ID Min                 | Filter items by minimum ID value.                                  |         |
| ID Max                 | Filter items by maximum ID value.                                  |         |
| ID Greater Than        | Filter items by ID values greater than the specified value.        |         |
| ID Less Than           | Filter items by ID values less than the specified value.           |         |
| Name                   | Filter items by name.                                              |         |
| Parent ID              | ID of the parent category. Set to 0 for top-level category.        |         |
| Page Title             |                                                                    |         |
| Keyword                | Filter items by keywords.                                          |         |
| Is Visible             | Flag to determine if the category is visible on the storefront.    | false   |
| Name Contains          | Filter items by names that contain the specified string.           |         |
| Parent ID In           | Filter items by multiple parent IDs.                               |         |
| Parent ID Min          | Filter items by minimum Parent ID value.                           |         |
| Parent ID Max          | Filter items by maximum Parent ID value.                           |         |
| Parent ID Greater Than | Filter items by Parent ID values greater than the specified value. |         |
| Parent ID Less Than    | Filter items by Parent ID values less than the specified value.    |         |
| Page Title Like        | Filter categories by page titles that contain this substring.      |         |

### Delete Category Trees

Deletes specific Category Trees.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| ID In                  | Filter by specific IDs.                          |         |

### Delete Instanced Webhooks

Deletes all webhooks that point to a flow in this instance.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Instance URL Pattern   |                                                  |         |
| Page Number            |                                                  |         |
| Items Per Page         |                                                  |         |
| Is Active              |                                                  | false   |
| Scope                  |                                                  |         |
| Destination            |                                                  |         |

### Delete Product Image

Deletes a Product Image.

| Input                  | Comments                                                | Default |
| ---------------------- | ------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                         |         |
| Store Hash             | The unique identifier for the BigCommerce store.        |         |
| Product ID             | The ID of the Product to which the image is associated. |         |
| Image ID to Delete     | The ID of the Image that is being operated on.          |         |

### Delete Tree Categories

Deletes specified categories in a tree in BigCommerce.

| Input                  | Comments                                                                                    | Default |
| ---------------------- | ------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                                             |         |
| Store Hash             | The unique identifier for the BigCommerce store.                                            |         |
| Category UUID          | Unique identifier for the category. Use this to specify a specific category using its UUID. |         |
| Category ID            | Identifier for the category. Use this to specify a specific category using its ID.          |         |
| Tree ID                | ID of the category tree.                                                                    |         |
| Parent ID              | Filter items by parent ID.                                                                  |         |

### Get a Category

Returns a single Category.

| Input                  | Comments                                                                                        | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                                                 |         |
| Store Hash             | The unique identifier for the BigCommerce store.                                                |         |
| Category ID            | The ID of the category to retrieve.                                                             |         |
| Include Fields         | Fields to include, in a comma-separated list. The ID and the specified fields will be returned. |         |
| Exclude Fields         | Fields to exclude, in a comma-separated list. The ID cannot be excluded.                        |         |

### Get a Category Tree

Returns a Category Tree.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Tree ID                | ID of the category tree.                         |         |
| Depth                  | Max depth for a tree of categories.              |         |

### Get All Product Variants

Returns a list of product Variants.

| Input                  | Comments                                                                         | Default |
| ---------------------- | -------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store.                                 |         |
| Product ID             | The ID of the Product to which the modifier will be added.                       |         |
| Page Number            | Specifies the page number in a limited (paginated) list of products.             |         |
| Limit                  | Controls the number of items per page in a limited (paginated) list of products. |         |
| Include Fields         | Fields to include, in a comma-separated list.                                    |         |
| Exclude Fields         | Fields to exclude, in a comma-separated list.                                    |         |

### Get a Modifier

Returns a single Product Modifier.

| Input                  | Comments                                                                 | Default |
| ---------------------- | ------------------------------------------------------------------------ | ------- |
| BigCommerce Connection |                                                                          |         |
| Store Hash             | The unique identifier for the BigCommerce store.                         |         |
| Product ID             | The ID of the Product to which the modifier belongs.                     |         |
| Modifier ID            | The ID of the Modifier.                                                  |         |
| Include Fields         | Fields to include, in a comma-separated list.                            |         |
| Exclude Fields         | Fields to exclude, in a comma-separated list. The ID cannot be excluded. |         |

### Get a Product Variant

Returns a specific product Variant.

| Input                  | Comments                                                               | Default |
| ---------------------- | ---------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                        |         |
| Store Hash             | The unique identifier for the BigCommerce store.                       |         |
| Product ID             | The ID of the Product to which the modifier will be added.             |         |
| Variant ID             | ID of the variant on a product, or on an associated Price List Record. |         |
| Include Fields         | Fields to include, in a comma-separated list.                          |         |
| Exclude Fields         | Fields to exclude, in a comma-separated list.                          |         |

### Get Brand

Retrieve details of a specific brand.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Brand ID               | Filter brands by ID.                             |         |

### Get Catalog Summary

Returns a lightweight inventory summary from the BigCommerce Catalog.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |

### Get Product Custom Fields

Returns a list of product custom fields.

| Input                  | Comments                                                 | Default |
| ---------------------- | -------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                          |         |
| Store Hash             | The unique identifier for the BigCommerce store.         |         |
| Product ID             | The ID of the Product to retrieve custom fields for.     |         |
| Page                   | Specifies the page number in a limited list of products. |         |
| Limit                  | Controls the number of items per page.                   |         |

### Get Product Image

Returns a single Product Image.

| Input                  | Comments                                          | Default |
| ---------------------- | ------------------------------------------------- | ------- |
| BigCommerce Connection |                                                   |         |
| Store Hash             | The unique identifier for the BigCommerce store.  |         |
| Product ID for Image   | ID of the product for which to retrieve an image. |         |
| Image ID               | ID of the image to retrieve.                      |         |

### Get Webhooks

Returns a list of all webhooks on a store.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Page Number            |                                                  |         |
| Items Per Page         |                                                  |         |
| Is Active              |                                                  | false   |
| Scope                  |                                                  |         |
| Destination            |                                                  |         |

### List Brands

List all of the store's brands.

| Input                  | Comments                                                                         | Default |
| ---------------------- | -------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store.                                 |         |
| Brand Name             | Filter brands by name.                                                           |         |
| Limit                  | Controls the number of items per page in a limited (paginated) list of products. |         |

### List Categories

Retrieve a list of categories with optional filters.

| Input                  | Comments                                                           | Default |
| ---------------------- | ------------------------------------------------------------------ | ------- |
| BigCommerce Connection |                                                                    |         |
| Store Hash             | The unique identifier for the BigCommerce store.                   |         |
| ID                     | Filter items by ID.                                                |         |
| ID In                  | Filter items by multiple IDs.                                      |         |
| ID Not In              | Exclude items by multiple IDs.                                     |         |
| ID Min                 | Filter items by minimum ID value.                                  |         |
| ID Max                 | Filter items by maximum ID value.                                  |         |
| ID Greater Than        | Filter items by ID values greater than the specified value.        |         |
| ID Less Than           | Filter items by ID values less than the specified value.           |         |
| Name                   | Filter items by name.                                              |         |
| Name Contains          | Filter items by names that contain the specified string.           |         |
| Parent ID              | Filter items by parent ID.                                         |         |
| Parent ID In           | Filter items by multiple parent IDs.                               |         |
| Parent ID Min          | Filter items by minimum Parent ID value.                           |         |
| Parent ID Max          | Filter items by maximum Parent ID value.                           |         |
| Parent ID Greater Than | Filter items by Parent ID values greater than the specified value. |         |
| Parent ID Less Than    | Filter items by Parent ID values less than the specified value.    |         |
| Page Title             | Filter items by page title.                                        |         |
| Page Title Contains    | Filter items by page titles that contain the specified string.     |         |
| Keyword                | Filter items by keywords.                                          |         |
| Is Visible             | Filter items by if visible on the storefront.                      | false   |
| Page                   | Specifies the page number in a limited list of products.           |         |
| Limit                  | Controls the number of items per page.                             |         |
| Include Fields         | Fields to include, in a comma-separated list.                      |         |
| Exclude Fields         | Fields to exclude, in a comma-separated list.                      |         |

### List Categories (Simplified)

Returns a list of categories.

| Input                  | Comments                                                 | Default |
| ---------------------- | -------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                          |         |
| Store Hash             | The unique identifier for the BigCommerce store.         |         |
| ID In                  | Filter by specific IDs.                                  |         |
| Limit                  | Controls the number of items per page.                   |         |
| Page                   | Specifies the page number in a limited list of products. |         |

### List Category Trees

Returns a list of Category Trees.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| ID In                  | Filter by specific IDs.                          |         |
| Channel ID In          | Filter by Channel IDs.                           |         |

### List Product Images

Returns a list of product images with optional filter parameters.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Product ID for Images  | ID of the product for which to retrieve images.  |         |

### List Product Modifiers

Returns a list of all Product Modifiers.

| Input                  | Comments                                                                         | Default |
| ---------------------- | -------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store.                                 |         |
| Product ID             | The ID of the Product to which the modifiers belong.                             |         |
| Page                   | Specifies the page number in a limited (paginated) list of products.             |         |
| Limit                  | Controls the number of items per page in a limited (paginated) list of products. |         |
| Include Fields         | Fields to include, in a comma-separated list.                                    |         |
| Exclude Fields         | Fields to exclude, in a comma-separated list. The ID cannot be excluded.         |         |

### List Products

Returns a list of products with optional filter parameters.

| Input                  | Comments                                                                         | Default |
| ---------------------- | -------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store.                                 |         |
| Product ID             | Filter items by product ID.                                                      |         |
| Product Name           | Filter items by product name.                                                    |         |
| Product Price          | Filter items by product price.                                                   |         |
| Brand ID               | Filter items by brand ID.                                                        |         |
| Product Type           | Filter items by product type.                                                    |         |
| Page                   | Specifies the page number in a limited (paginated) list of products.             |         |
| Limit                  | Controls the number of items per page in a limited (paginated) list of products. |         |

### Raw Request

Send raw HTTP request to BigCommerce

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
| BigCommerce Connection  |                                                                                                                                                                                                  |         |
| Store Hash              | The unique identifier for the BigCommerce store.                                                                                                                                                 |         |

### Update a Modifier

Updates a Product Modifier.

| Input                  | Comments                                                          | Default |
| ---------------------- | ----------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                   |         |
| Store Hash             | The unique identifier for the BigCommerce store.                  |         |
| Product ID             | The ID of the Product to which the modifier will be added.        |         |
| Modifier ID            | The ID of the Modifier.                                           |         |
| Modifier Type          | The type of the modifier. Acceptable values: date, checkbox, etc. |         |
| Required               | Whether or not this modifier is required at checkout.             | false   |
| Sort Order             | The order the modifiers display on the product detail page.       |         |
| Configuration          | The configuration values for the modifier.                        |         |
| Option Values          | The option values for the modifier.                               |         |
| Display Name           | The name of the option shown on the storefront.                   |         |

### Update a Product

Updates a product in the catalog.

| Input                  | Comments                                                                                                         | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store.                                                                 |         |
| Product ID             | Filter items by product ID.                                                                                      |         |
| Product Name           | A unique product name. Length between 1 to 250 characters.                                                       |         |
| Product Type           | The product type. Either 'physical' or 'digital'.                                                                |         |
| Product Weight         | Weight of the product. This is based on the unit set on the store.                                               |         |
| Product Width          | Width of the product, which can be used when calculating shipping costs.                                         |         |
| Product Depth          | Depth of the product, which can be used when calculating shipping costs.                                         |         |
| Product Height         | Height of the product, which can be used when calculating shipping costs.                                        |         |
| Product Price          | The price of the product. The price should include or exclude tax, based on the store settings.                  |         |
| Cost Price             | The cost price of the product. Stored for reference only.                                                        |         |
| Retail Price           | The retail cost of the product. If entered, the retail cost price will be shown on the product page.             |         |
| Sale Price             | If entered, the sale price will be used instead of value in the price field when calculating the product's cost. |         |

### Update a Product Variant

Updates a specific product Variant.

| Input                  | Comments                                                               | Default |
| ---------------------- | ---------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                        |         |
| Store Hash             | The unique identifier for the BigCommerce store.                       |         |
| Product ID             | The ID of the Product to which the resource belongs.                   |         |
| Variant ID             | ID of the variant on a product, or on an associated Price List Record. |         |
| Variant SKU            | SKU for the variant. Must be between 1 and 255 characters.             |         |
| Option Values          | Array of option and option values IDs that make up this variant.       |         |
| Variant Price          | This variants base price on the storefront.                            |         |
| Variant Weight         | This variants base weight on the storefront.                           |         |
| Variant Width          | Width of the variant.                                                  |         |
| Variant Height         | Height of the variant.                                                 |         |
| Variant Depth          | Depth of the variant.                                                  |         |

### Update a Webhook

Updates an existing webhook in BigCommerce.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Webhook ID             |                                                  |         |
| Scope                  |                                                  |         |
| Destination            |                                                  |         |
| Is Active              |                                                  | false   |
| Headers                |                                                  |         |

### Update Brand

Update a brand's details.

| Input                  | Comments                                                        | Default |
| ---------------------- | --------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                 |         |
| Store Hash             | The unique identifier for the BigCommerce store.                |         |
| Brand ID to Update     | The ID of the brand to update.                                  |         |
| New Brand Name         | The updated name for the brand.                                 |         |
| New Page Title         | The updated title shown in the browser while viewing the brand. |         |
| New Image URL          | The updated image URL for the brand.                            |         |

### Update Categories

Updates existing categories in BigCommerce.

| Input                  | Comments                                         | Default |
| ---------------------- | ------------------------------------------------ | ------- |
| BigCommerce Connection |                                                  |         |
| Store Hash             | The unique identifier for the BigCommerce store. |         |
| Tree ID                | Unique ID of the tree.                           |         |
| Category ID            | Unique ID of the category to update.             |         |

### Update Category

Updates an existing category in BigCommerce.

| Input                  | Comments                                                        | Default |
| ---------------------- | --------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                 |         |
| Store Hash             | The unique identifier for the BigCommerce store.                |         |
| Category ID            | The ID of the category to retrieve.                             |         |
| Parent ID              | ID of the parent category. Set to 0 for top-level category.     |         |
| Category Name          | Name of the category. It should be unique among its siblings.   |         |
| Category Description   | Description for the category, can include HTML.                 |         |
| Views                  | Number of views the category has on the storefront.             |         |
| Sort Order             | Priority of this category in the menu and category pages.       |         |
| Page Title             |                                                                 |         |
| Search Keywords        |                                                                 |         |
| Meta Keywords          | Comma-separated list of meta keywords.                          |         |
| Meta Description       |                                                                 |         |
| Layout File            | Layout file for the category. Relevant for Blueprint themes.    |         |
| Is Visible             | Flag to determine if the category is visible on the storefront. | false   |
| Default Product Sort   | Determines how products are sorted on category page load.       |         |
| Image URL              |                                                                 |         |
| Custom URL             | Custom URL for the category on the storefront.                  |         |

### Update Custom Field

Updates a custom field for a product.

| Input                     | Comments                                             | Default |
| ------------------------- | ---------------------------------------------------- | ------- |
| BigCommerce Connection    |                                                      |         |
| Store Hash                | The unique identifier for the BigCommerce store.     |         |
| Product ID                | The ID of the Product to retrieve custom fields for. |         |
| Custom Field ID to Update | The ID of the custom field to update.                |         |
| Custom Field Name         | The name of the custom field.                        |         |
| Custom Field Value        | The value of the custom field.                       |         |

### Update Product Image

Updates a Product Image.

| Input                  | Comments                                                                   | Default |
| ---------------------- | -------------------------------------------------------------------------- | ------- |
| BigCommerce Connection |                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store.                           |         |
| Product ID for Image   | The ID of the Product for which the image is associated.                   |         |
| Image ID to Update     | The ID of the Image that is being operated on.                             |         |
| Image File             | The local path to the original image file uploaded to BigCommerce.         |         |
| Image URL              | Must be a fully qualified URL path, including protocol.                    |         |
| Zoom Image URL         | The zoom URL for this image.                                               |         |
| Standard Image URL     | The standard URL for this image.                                           |         |
| Thumbnail Image URL    | The thumbnail URL for this image.                                          |         |
| Tiny Image URL         | The tiny URL for this image.                                               |         |
| Is Thumbnail           | Flag for identifying whether the image is used as the product's thumbnail. | false   |
| Sort Order             | The order in which the image will be displayed on the product page.        |         |
| Image Description      | The description for the image.                                             |         |

### Update Products (Batch)

Updates products in batches.

| Input                  | Comments                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BigCommerce Connection |                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Store Hash             | The unique identifier for the BigCommerce store. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Products (Batch)       | Array of products to update in batches.          | <code>[<br /> {<br /> "id": 0,<br /> "name": "string",<br /> "type": "physical",<br /> "sku": "string",<br /> "description": "string",<br /> "weight": 0,<br /> "width": 0,<br /> "depth": 0,<br /> "height": 0,<br /> "price": 0,<br /> "cost_price": 0,<br /> "retail_price": 0,<br /> "sale_price": 0,<br /> "map_price": 0,<br /> "tax_class_id": 0,<br /> "product_tax_code": "string",<br /> "categories": [],<br /> "brand_id": 0,<br /> "brand_name": "string",<br /> "inventory_level": 0,<br /> "inventory_warning_level": 0<br /> }<br />]</code> |

### Upsert Category Trees

Upserts Category Trees. This single endpoint updates and creates category trees.

| Input                  | Comments                                                                           | Default                                                                                             |
| ---------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| BigCommerce Connection |                                                                                    |                                                                                                     |
| Store Hash             | The unique identifier for the BigCommerce store.                                   |                                                                                                     |
| Category Tree Data     | Data to upsert for category trees. Should be a JSON array containing tree objects. | <code>{<br /> "id": 0,<br /> "name": "string",<br /> "channel_ids": [<br /> 0<br /> ]<br />}</code> |
