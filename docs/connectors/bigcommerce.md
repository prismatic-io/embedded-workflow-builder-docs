---
title: BigCommerce Connector
sidebar_label: BigCommerce
description: Manage products, brands, categories, and more on the BigCommerce ecommerce platform.
---

![BigCommerce](./assets/bigcommerce.png#connector-icon)
[BigCommerce](https://www.bigcommerce.com/) is a leading SaaS eCommerce platform that allows businesses to build, innovate, and grow their online stores.
This component allows you to manage products, brands, categories, and other essential e-commerce features in a BigCommerce store.

## Connections

### OAuth 2.0 {#oauth2bigcommerce}

Authenticate using OAuth 2.0.

1. To create an OAuth 2.0 app in BigCommerce, sign up for a BigCommerce developer account at https://developer.bigcommerce.com/ and create a new BigCommerce application.
2. Take note of your application's Client ID and Secret and enter those values when you add a BigCommerce connection to your integration.
3. Under Redirect URI, add the callback URL, `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                                                                    | Default          |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Scopes        | Space-delimited list of OAuth scopes. Configure these in the BigCommerce app settings to match required permissions. See [BigCommerce OAuth scopes documentation](https://docs.bigcommerce.com/developer/docs/overview/api-fundamentals/api-accounts) for available scopes. | store_v2_default |
| Client ID     | The Client ID from the BigCommerce app. Find this in Developer Portal > My Apps > [App] > View Client ID.                                                                                                                                                                   |                  |
| Client Secret | The Client Secret from the BigCommerce app. Keep this value secure and never share it publicly.                                                                                                                                                                             |                  |

## Triggers

### New and Updated Orders {#pollchangestrigger}

Checks for new and updated orders in BigCommerce on a configured schedule.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Show New Orders        | When enabled, orders created since the last poll will be included in the trigger output.                                                                                      | true    |
| Show Updated Orders    | When enabled, orders updated since the last poll will be included in the trigger output.                                                                                      | true    |

### Webhook {#mytrigger}

Receive and validate webhook requests from BigCommerce for manually configured webhook subscriptions.

## Actions

### Create Brand {#createbrand}

Creates a new brand in the store.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Brand Name             | The unique name for the new Brand to be created.                                                                                                                              |         |
| Page Title             | The title shown in the browser tab and used as the storefront page heading.                                                                                                   |         |
| Meta Keywords          | A comma-separated list of meta keywords used in the brand's SEO metadata.                                                                                                     |         |
| Meta Description       | A short SEO summary displayed in search engine results for the brand.                                                                                                         |         |
| Search Keywords        | A comma-separated list of keywords used by the storefront search to match this brand.                                                                                         |         |
| Image URL              | The fully qualified URL of the image displayed for the brand on the storefront.                                                                                               |         |

### Create Brand Image {#createbrandimage}

Uploads an image for a brand.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Brand ID               | The unique identifier for the brand to retrieve.                                                                                                                              |         |
| Image File             | The image file to be uploaded. Must be a valid image format (GIF, JPEG, or PNG).                                                                                              |         |

### Create Category {#createcategory}

Creates a new category in BigCommerce.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Parent ID              | The unique identifier of the parent category. Use 0 to create a top-level category.                                                                                           |         |
| Category Name          | The display name for the category. Must be unique among its sibling categories.                                                                                               |         |
| Category Description   | The storefront description shown on the category landing page. May include HTML markup.                                                                                       |         |
| Views                  | The recorded number of storefront visits to the category page.                                                                                                                |         |
| Sort Order             | The display priority for the category in storefront menus. Lower values appear first.                                                                                         |         |
| Page Title             | The title shown in the browser tab and used as the storefront page heading.                                                                                                   |         |
| Search Keywords        | A comma-separated list of keywords used by the storefront search to match this brand.                                                                                         |         |
| Meta Keywords          | A comma-separated list of meta keywords used in the brand's SEO metadata.                                                                                                     |         |
| Meta Description       | A short SEO summary displayed in search engine results for the brand.                                                                                                         |         |
| Layout File            | The template filename used to render this category. Relevant for Blueprint themes only.                                                                                       |         |
| Is Visible             | When true, the category is visible on the storefront. When false, the category is hidden from customers.                                                                      | false   |
| Default Product Sort   | The default ordering applied to products when the category page loads (e.g. use_store_settings, featured, newest).                                                            |         |
| Image URL              | The fully qualified URL of the image displayed for the brand on the storefront.                                                                                               |         |
| Custom URL             | The storefront URL path for the category, relative to the store domain.                                                                                                       |         |

### Create Category Image {#createcategoryimage}

Uploads an image for a specific category.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Category ID            | The unique identifier for the category to operate on.                                                                                                                         |         |
| Image File             | The image file to be uploaded. Must be a valid image format (GIF, JPEG, or PNG).                                                                                              |         |

### Create Category Tree {#createcategorytree}

Creates a new category tree in BigCommerce.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Parent ID              | Set to 0 for top level category. Otherwise, set to the ID of the parent category.                                                                                             |         |
| Category Name          | The display name shown for the category on the storefront and admin panel.                                                                                                    |         |

### Create Custom Field {#createcustomfield}

Creates a custom field for a product.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the product whose custom fields will be retrieved.                                                                                                   |         |
| Custom Field Name      | The display name (key) for the custom field attached to the product.                                                                                                          |         |
| Custom Field Value     | The value stored under the custom field key on the product.                                                                                                                   |         |

### Create Modifier Image {#createmodifierimageaction}

Creates an image for a product modifier value.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the product the new modifier will be attached to.                                                                                                    |         |
| Modifier ID            | The unique identifier of the modifier record to retrieve.                                                                                                                     |         |
| Modifier Value ID      | The unique identifier of the modifier option value to attach the uploaded image to.                                                                                           |         |
| Modifier Image File    | The image file (GIF, JPEG, or PNG) to upload and associate with the modifier option value.                                                                                    |         |

### Create Product {#createproduct}

Creates a new product in the store.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product Name           | A unique storefront name for the product. Must be 1 to 250 characters.                                                                                                        |         |
| Product Type           | The fulfillment type for the product. Must be either 'physical' or 'digital'.                                                                                                 |         |
| Product Price          | The listed selling price of the product. Whether tax is included depends on the store's tax settings.                                                                         |         |
| Product SKU            | A user-defined alphanumeric stock-keeping unit code, unique within the store. Length 0 to 255 characters.                                                                     |         |
| Product Description    | The storefront description for the product. May include HTML markup for formatting.                                                                                           |         |
| Product Weight         | The shipping weight of the product, expressed in the store's configured weight unit.                                                                                          |         |
| Product Width          | The physical width used by shipping calculators, expressed in the store's configured length unit.                                                                             |         |
| Product Depth          | The physical depth used by shipping calculators, expressed in the store's configured length unit.                                                                             |         |
| Product Height         | The physical height used by shipping calculators, expressed in the store's configured length unit.                                                                            |         |
| Cost Price             | The merchant cost of acquiring the product. Stored for internal reporting only and not shown to customers.                                                                    |         |
| Retail Price           | The manufacturer's suggested retail price. When set, this value is displayed alongside the selling price on the product page.                                                 |         |
| Sale Price             | An override price used in place of the regular price for promotional pricing calculations.                                                                                    |         |

### Create Product Image {#createproductimageaction}

Creates a product image.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique numeric identifier for the product the new image will be attached to.                                                                                              |         |
| Image File             | The local path to the source image file to upload. Sent as multipart/form-data.                                                                                               |         |
| Image URL              | The fully qualified URL of a remote image file to fetch and attach to the product. Maximum file size is 8MB.                                                                  |         |

### Create Product Modifier {#createproductmodifieraction}

Creates a product modifier.

| Input                  | Comments                                                                                                                                                                                      | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}).                 |         |
| Product ID             | The unique identifier of the product the new modifier will be attached to.                                                                                                                    |         |
| Modifier Type          | The input control type for the modifier. Acceptable values include date, checkbox, dropdown, radio_buttons, rectangles, swatch, product_list, file, text, multi_line_text, numbers_only_text. |         |
| Required               | When true, the shopper must select or fill in this modifier before checkout is allowed.                                                                                                       | false   |
| Sort Order             | The display position for this modifier on the product detail page. Lower values appear first.                                                                                                 |         |
| Configuration          | A JSON object containing type-specific configuration values for the modifier (e.g. default values, min/max, format).                                                                          |         |
| Option Values          | A JSON array of selectable option values offered by this modifier. Used for dropdown, radio, rectangle, and swatch types.                                                                     |         |
| Display Name           | The label shown to shoppers on the storefront when this modifier is rendered.                                                                                                                 |         |

### Create Product Variant {#createproductvariantaction}

Creates a new product variant in BigCommerce.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the parent product that owns the resource being operated on.                                                                                         |         |
| Variant SKU            | The stock-keeping unit code for the variant. Must be between 1 and 255 characters and unique within the store.                                                                |         |
| Option Values          | A JSON array of option/option-value ID pairs that together define this variant's attribute combination.                                                                       |         |
| Variant Price          | The storefront selling price specific to this variant, overriding the parent product price.                                                                                   |         |
| Variant Weight         | The shipping weight specific to this variant, expressed in the store's configured weight unit.                                                                                |         |
| Variant Width          | The physical width specific to this variant, expressed in the store's configured length unit.                                                                                 |         |
| Variant Height         | The physical height specific to this variant, expressed in the store's configured length unit.                                                                                |         |
| Variant Depth          | The physical depth specific to this variant, expressed in the store's configured length unit.                                                                                 |         |

### Create Variant Image {#createvariantimageaction}

Creates or updates an image for a specific product variant.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the parent product that owns the resource being operated on.                                                                                         |         |
| Variant ID             | The unique identifier of the variant being retrieved, either on a product or an associated Price List Record.                                                                 |         |
| Image URL              | The fully qualified URL of a remote image (GIF, JPEG, or PNG) to assign to this variant.                                                                                      |         |

### Create Webhook {#createwebhookaction}

Creates a new webhook in BigCommerce.

| Input                               | Comments                                                                                                                                                                      | Default |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection              | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash                          | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Scope                               | The BigCommerce event scope that the webhook subscribes to (e.g. store/order/created).                                                                                        |         |
| Destination                         | The fully qualified HTTPS URL that BigCommerce will POST webhook events to.                                                                                                   |         |
| Is Active                           | When true, restricts the result to webhooks that are currently enabled. When false, restricts to disabled webhooks.                                                           | false   |
| Events History Enabled (Deprecated) | Deprecated: when true, events that fail to deliver are retained for later replay.                                                                                             | false   |
| Headers                             | A JSON object of custom HTTP headers that BigCommerce will include on every webhook delivery request.                                                                         |         |

### Delete Brand {#deletebrand}

Deletes a brand by ID.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Brand ID to Delete     | The unique identifier of the brand to permanently remove.                                                                                                                     |         |

### Delete Brand Image {#deletebrandimage}

Deletes an image for a brand by ID.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Brand ID               | The unique identifier for the brand to retrieve.                                                                                                                              |         |

### Delete Categories {#deletecategories}

Deletes categories based on provided filters.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| ID                     | Restrict results to the item that has this exact numeric ID.                                                                                                                  |         |
| ID In                  | Restrict results to items whose ID appears in this comma-separated list.                                                                                                      |         |
| ID Not In              | Exclude any item whose ID appears in this comma-separated list of values.                                                                                                     |         |
| ID Min                 | Lower bound (inclusive) on the item ID. Items with smaller IDs are excluded.                                                                                                  |         |
| ID Max                 | Upper bound (inclusive) on the item ID. Items with larger IDs are excluded.                                                                                                   |         |
| ID Greater Than        | Return only items whose ID is strictly greater than the specified value.                                                                                                      |         |
| ID Less Than           | Return only items whose ID is strictly less than the specified value.                                                                                                         |         |
| Name                   | Restrict results to items whose name matches this value exactly.                                                                                                              |         |
| Parent ID              | The unique identifier of the parent category. Use 0 to create a top-level category.                                                                                           |         |
| Page Title             | The title shown in the browser tab and used as the storefront page heading.                                                                                                   |         |
| Keyword                | Free-text search term matched against item names, descriptions, and search keywords.                                                                                          |         |
| Is Visible             | When true, the category is visible on the storefront. When false, the category is hidden from customers.                                                                      | false   |
| Name Contains          | Substring used to perform a partial, case-insensitive match against item names.                                                                                               |         |
| Parent ID In           | Restrict results to items whose parent ID appears in this comma-separated list.                                                                                               |         |
| Parent ID Min          | Lower bound (inclusive) on the parent ID. Items with smaller parent IDs are excluded.                                                                                         |         |
| Parent ID Max          | Upper bound (inclusive) on the parent ID. Items with larger parent IDs are excluded.                                                                                          |         |
| Parent ID Greater Than | Return only items whose parent ID is strictly greater than the specified value.                                                                                               |         |
| Parent ID Less Than    | Return only items whose parent ID is strictly less than the specified value.                                                                                                  |         |
| Page Title Like        | Substring used to perform a partial match against category page titles.                                                                                                       |         |

### Delete Categories from Tree {#deletecategoriestree}

Deletes specified categories from a category tree in BigCommerce.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Category UUID          | The UUID-formatted unique identifier for the category. Used as an alternative to numeric category IDs.                                                                        |         |
| Category ID            | The numeric identifier for the category targeted by this request.                                                                                                             |         |
| Tree ID                | The unique identifier of the category tree to operate on.                                                                                                                     |         |
| Parent ID              | Restrict results to items whose immediate parent has this numeric ID.                                                                                                         |         |

### Delete Category Image {#deletecategoryimage}

Deletes an image associated with a given category.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Category ID            | The unique identifier for the category to operate on.                                                                                                                         |         |

### Delete Category Trees {#deletecategorytrees}

Deletes specific category trees.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| ID In                  | A comma-separated list of category IDs to restrict the result set to.                                                                                                         |         |

### Delete Custom Field {#deletecustomfield}

Deletes a product custom field.

| Input                     | Comments                                                                                                                                                                      | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection    | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash                | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID                | The unique identifier of the product whose custom fields will be retrieved.                                                                                                   |         |
| Custom Field ID to Delete | The unique identifier of the custom field record to permanently remove.                                                                                                       |         |

### Delete Instanced Webhooks {#deleteinstancedwebhooksaction}

Deletes all webhooks that point to a flow in this instance.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Instance URL Pattern   | A substring or pattern compared against webhook destination URLs to select which webhooks to operate on.                                                                      |         |
| Page Number            | The 1-based index of the page to retrieve from the paginated webhook list.                                                                                                    |         |
| Items Per Page         | The maximum number of webhook records to return per page.                                                                                                                     |         |
| Is Active              | When true, restricts the result to webhooks that are currently enabled. When false, restricts to disabled webhooks.                                                           | false   |
| Scope                  | The BigCommerce event scope that the webhook subscribes to (e.g. store/order/created).                                                                                        |         |
| Destination            | The fully qualified HTTPS URL that BigCommerce will POST webhook events to.                                                                                                   |         |

### Delete Product {#deleteproduct}

Deletes a product.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID to Delete   | The unique identifier of the product to permanently remove.                                                                                                                   |         |

### Delete Product Image {#deleteproductimageaction}

Deletes a product image.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the product that owns the image being deleted.                                                                                                       |         |
| Image ID to Delete     | The unique identifier of the image record to permanently remove.                                                                                                              |         |

### Delete Product Modifier {#deleteproductmodifieraction}

Deletes a product modifier.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the product the new modifier will be attached to.                                                                                                    |         |
| Modifier ID            | The unique identifier of the modifier record to retrieve.                                                                                                                     |         |

### Delete Product Variant {#deleteproductvariantaction}

Deletes a specific product variant.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the parent product that owns the resource being operated on.                                                                                         |         |
| Variant ID             | The unique identifier of the variant being retrieved, either on a product or an associated Price List Record.                                                                 |         |

### Delete Webhook {#deletewebhookaction}

Deletes a specific webhook from BigCommerce.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Webhook ID             | The unique identifier of the webhook record being modified.                                                                                                                   |         |

### Get Brand {#getbrand}

Retrieves details of a specific brand.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Brand ID               | The unique identifier for the brand to retrieve.                                                                                                                              |         |

### Get Catalog Summary {#getcatalogsummaryaction}

Returns a lightweight inventory summary from the BigCommerce Catalog.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |

### Get Category {#getcategory}

Returns a single category.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Category ID            | The unique identifier for the category to operate on.                                                                                                                         |         |
| Include Fields         | A comma-separated list of response fields to keep. The ID is always returned.                                                                                                 |         |
| Exclude Fields         | A comma-separated list of response fields to omit. The ID cannot be excluded.                                                                                                 |         |

### Get Category Tree {#getcategorytree}

Returns a category tree.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Tree ID                | The unique identifier of the category tree to operate on.                                                                                                                     |         |
| Depth                  | The maximum number of nesting levels to traverse when fetching the category tree.                                                                                             |         |

### Get Product Custom Fields {#getproductcustomfields}

Returns a list of product custom fields.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the product whose custom fields will be retrieved.                                                                                                   |         |
| Page                   | The 1-based index of the page to retrieve from the paginated result set.                                                                                                      |         |
| Limit                  | The maximum number of results to return per page.                                                                                                                             |         |

### Get Product Image {#getproductimage}

Returns a single product image.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID for Image   | The unique identifier of the product that owns the image being retrieved.                                                                                                     |         |
| Image ID               | The unique identifier of the specific image record to retrieve.                                                                                                               |         |

### Get Product Modifier {#getmodifieraction}

Returns a single product modifier.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the product that owns the modifier being retrieved.                                                                                                  |         |
| Modifier ID            | The unique identifier of the modifier record to retrieve.                                                                                                                     |         |
| Include Fields         | A comma-separated list of response fields to keep on each modifier object.                                                                                                    |         |
| Exclude Fields         | A comma-separated list of response fields to omit. The ID cannot be excluded.                                                                                                 |         |

### Get Product Variant {#getproductvariantaction}

Returns a specific product variant.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the product the new modifier will be attached to.                                                                                                    |         |
| Variant ID             | The unique identifier of the variant being retrieved, either on a product or an associated Price List Record.                                                                 |         |
| Include Fields         | A comma-separated list of response fields to keep on each variant object.                                                                                                     |         |
| Exclude Fields         | A comma-separated list of response fields to omit from each variant object.                                                                                                   |         |

### List Brands {#listbrands}

Returns a list of all of the store's brands.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Brand Name             | Restrict the brand list to entries whose name matches this value.                                                                                                             |         |
| Limit                  | The maximum number of results to return per page.                                                                                                                             |         |

### List Categories {#getallcategories}

Returns a list of categories with optional filters.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| ID                     | Restrict results to the item that has this exact numeric ID.                                                                                                                  |         |
| ID In                  | Restrict results to items whose ID appears in this comma-separated list.                                                                                                      |         |
| ID Not In              | Exclude any item whose ID appears in this comma-separated list of values.                                                                                                     |         |
| ID Min                 | Lower bound (inclusive) on the item ID. Items with smaller IDs are excluded.                                                                                                  |         |
| ID Max                 | Upper bound (inclusive) on the item ID. Items with larger IDs are excluded.                                                                                                   |         |
| ID Greater Than        | Return only items whose ID is strictly greater than the specified value.                                                                                                      |         |
| ID Less Than           | Return only items whose ID is strictly less than the specified value.                                                                                                         |         |
| Name                   | Restrict results to items whose name matches this value exactly.                                                                                                              |         |
| Name Contains          | Substring used to perform a partial, case-insensitive match against item names.                                                                                               |         |
| Parent ID              | Restrict results to items whose immediate parent has this numeric ID.                                                                                                         |         |
| Parent ID In           | Restrict results to items whose parent ID appears in this comma-separated list.                                                                                               |         |
| Parent ID Min          | Lower bound (inclusive) on the parent ID. Items with smaller parent IDs are excluded.                                                                                         |         |
| Parent ID Max          | Upper bound (inclusive) on the parent ID. Items with larger parent IDs are excluded.                                                                                          |         |
| Parent ID Greater Than | Return only items whose parent ID is strictly greater than the specified value.                                                                                               |         |
| Parent ID Less Than    | Return only items whose parent ID is strictly less than the specified value.                                                                                                  |         |
| Page Title             | Restrict results to items whose storefront page title matches this value exactly.                                                                                             |         |
| Page Title Contains    | Substring used to perform a partial match against storefront page titles.                                                                                                     |         |
| Keyword                | Free-text search term matched against item names, descriptions, and search keywords.                                                                                          |         |
| Is Visible             | When true, returns only items visible on the storefront. When false, returns only hidden items.                                                                               | false   |
| Page                   | The 1-based index of the page to retrieve from the paginated result set.                                                                                                      |         |
| Limit                  | The maximum number of results to return per page.                                                                                                                             |         |
| Include Fields         | A comma-separated list of response fields to keep. The ID is always returned.                                                                                                 |         |
| Exclude Fields         | A comma-separated list of response fields to omit. The ID cannot be excluded.                                                                                                 |         |

### List Categories (Simplified) {#getallcategoriessimple}

Returns a list of categories.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| ID In                  | A comma-separated list of category IDs to restrict the result set to.                                                                                                         |         |
| Limit                  | The maximum number of results to return per page.                                                                                                                             |         |
| Page                   | The 1-based index of the page to retrieve from the paginated result set.                                                                                                      |         |

### List Category Trees {#getallcategorytrees}

Returns a list of category trees.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| ID In                  | A comma-separated list of category IDs to restrict the result set to.                                                                                                         |         |
| Channel ID In          | A comma-separated list of channel IDs used to restrict results to specific storefront channels.                                                                               |         |

### List Product Images {#getallproductimages}

Returns a list of product images with optional filter parameters.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID for Images  | The unique identifier of the product whose image collection will be retrieved.                                                                                                |         |

### List Product Modifiers {#getallproductmodifiersaction}

Returns a list of all product modifiers.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the product whose modifier list will be retrieved.                                                                                                   |         |
| Page                   | The 1-based index of the page to retrieve from the paginated modifier list.                                                                                                   |         |
| Limit                  | The maximum number of modifier records to return per page.                                                                                                                    |         |
| Include Fields         | A comma-separated list of response fields to keep on each modifier object.                                                                                                    |         |
| Exclude Fields         | A comma-separated list of response fields to omit. The ID cannot be excluded.                                                                                                 |         |

### List Products {#getallproducts}

Returns a list of products with optional filter parameters.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier for the product. When used as a filter, only matching products are returned.                                                                            |         |
| Product Name           | Restrict results to products whose name matches this value.                                                                                                                   |         |
| Product Price          | Restrict results to products whose listed price equals this value.                                                                                                            |         |
| Brand ID               | Restrict results to products belonging to the brand with this ID.                                                                                                             |         |
| Product Type           | Restrict results to products of the given type (e.g. physical or digital).                                                                                                    |         |
| Page                   | The 1-based index of the page to retrieve from the paginated product list.                                                                                                    |         |
| Limit                  | The maximum number of products to return per page.                                                                                                                            |         |

### List Product Variants {#getallproductvariantsaction}

Returns a list of product variants.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the product the new modifier will be attached to.                                                                                                    |         |
| Page Number            | The 1-based index of the page to retrieve from the paginated variant list.                                                                                                    |         |
| Limit                  | The maximum number of variant records to return per page.                                                                                                                     |         |
| Include Fields         | A comma-separated list of response fields to keep on each variant object.                                                                                                     |         |
| Exclude Fields         | A comma-separated list of response fields to omit from each variant object.                                                                                                   |         |

### List Webhooks {#getwebhooksaction}

Returns a list of all webhooks on a store.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Page Number            | The 1-based index of the page to retrieve from the paginated webhook list.                                                                                                    |         |
| Items Per Page         | The maximum number of webhook records to return per page.                                                                                                                     |         |
| Is Active              | When true, restricts the result to webhooks that are currently enabled. When false, restricts to disabled webhooks.                                                           | false   |
| Scope                  | The BigCommerce event scope that the webhook subscribes to (e.g. store/order/created).                                                                                        |         |
| Destination            | The fully qualified HTTPS URL that BigCommerce will POST webhook events to.                                                                                                   |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to BigCommerce.

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
| BigCommerce Connection  | The BigCommerce connection to use.                                                                                                                                                               |         |
| Store Hash              | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}).                    |         |

### Update Brand {#updatebrand}

Updates a brand's details.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Brand ID to Update     | The unique identifier of the brand being modified.                                                                                                                            |         |
| New Brand Name         | The replacement display name to assign to the brand.                                                                                                                          |         |
| New Page Title         | The replacement browser tab title and storefront heading for the brand page.                                                                                                  |         |
| New Image URL          | The replacement fully qualified URL of the image displayed for the brand.                                                                                                     |         |

### Update Categories {#updatecategories}

Updates existing categories in BigCommerce.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Tree ID                | The unique identifier of the category tree being updated.                                                                                                                     |         |
| Category ID            | The unique identifier of the category being updated.                                                                                                                          |         |

### Update Category {#updatecategory}

Updates an existing category in BigCommerce.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Category ID            | The unique identifier for the category to operate on.                                                                                                                         |         |
| Parent ID              | The unique identifier of the parent category. Use 0 to create a top-level category.                                                                                           |         |
| Category Name          | The display name for the category. Must be unique among its sibling categories.                                                                                               |         |
| Category Description   | The storefront description shown on the category landing page. May include HTML markup.                                                                                       |         |
| Views                  | The recorded number of storefront visits to the category page.                                                                                                                |         |
| Sort Order             | The display priority for the category in storefront menus. Lower values appear first.                                                                                         |         |
| Page Title             | The title shown in the browser tab and used as the storefront page heading.                                                                                                   |         |
| Search Keywords        | A comma-separated list of keywords used by the storefront search to match this brand.                                                                                         |         |
| Meta Keywords          | A comma-separated list of meta keywords used in the brand's SEO metadata.                                                                                                     |         |
| Meta Description       | A short SEO summary displayed in search engine results for the brand.                                                                                                         |         |
| Layout File            | The template filename used to render this category. Relevant for Blueprint themes only.                                                                                       |         |
| Is Visible             | When true, the category is visible on the storefront. When false, the category is hidden from customers.                                                                      | false   |
| Default Product Sort   | The default ordering applied to products when the category page loads (e.g. use_store_settings, featured, newest).                                                            |         |
| Image URL              | The fully qualified URL of the image displayed for the brand on the storefront.                                                                                               |         |
| Custom URL             | The storefront URL path for the category, relative to the store domain.                                                                                                       |         |

### Update Custom Field {#updatecustomfield}

Updates a custom field for a product.

| Input                     | Comments                                                                                                                                                                      | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection    | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash                | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID                | The unique identifier of the product whose custom fields will be retrieved.                                                                                                   |         |
| Custom Field ID to Update | The unique identifier of the custom field record being modified.                                                                                                              |         |
| Custom Field Name         | The display name (key) for the custom field attached to the product.                                                                                                          |         |
| Custom Field Value        | The value stored under the custom field key on the product.                                                                                                                   |         |

### Update Product {#updateproduct}

Updates a product in the catalog.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier for the product. When used as a filter, only matching products are returned.                                                                            |         |
| Product Name           | A unique storefront name for the product. Must be 1 to 250 characters.                                                                                                        |         |
| Product Type           | The fulfillment type for the product. Must be either 'physical' or 'digital'.                                                                                                 |         |
| Product Weight         | The shipping weight of the product, expressed in the store's configured weight unit.                                                                                          |         |
| Product Width          | The physical width used by shipping calculators, expressed in the store's configured length unit.                                                                             |         |
| Product Depth          | The physical depth used by shipping calculators, expressed in the store's configured length unit.                                                                             |         |
| Product Height         | The physical height used by shipping calculators, expressed in the store's configured length unit.                                                                            |         |
| Product Price          | The listed selling price of the product. Whether tax is included depends on the store's tax settings.                                                                         |         |
| Cost Price             | The merchant cost of acquiring the product. Stored for internal reporting only and not shown to customers.                                                                    |         |
| Retail Price           | The manufacturer's suggested retail price. When set, this value is displayed alongside the selling price on the product page.                                                 |         |
| Sale Price             | An override price used in place of the regular price for promotional pricing calculations.                                                                                    |         |

### Update Product Image {#updateproductimageaction}

Updates a product image.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID for Image   | The unique identifier of the product that owns the image being updated.                                                                                                       |         |
| Image ID to Update     | The unique identifier of the image record to modify.                                                                                                                          |         |
| Image File             | The local path to a replacement image file to upload via multipart/form-data.                                                                                                 |         |
| Image URL              | The fully qualified URL of a remote image to use as the new source for this image record. Must include protocol.                                                              |         |
| Zoom Image URL         | The fully qualified URL for the high-resolution zoom variant displayed on hover.                                                                                              |         |
| Standard Image URL     | The fully qualified URL for the standard-resolution image shown on product detail pages.                                                                                      |         |
| Thumbnail Image URL    | The fully qualified URL for the small thumbnail used in category and search listings.                                                                                         |         |
| Tiny Image URL         | The fully qualified URL for the tiny image used in cart and minimal-space contexts.                                                                                           |         |
| Is Thumbnail           | When true, marks this image as the product's primary thumbnail shown in listings.                                                                                             | false   |
| Sort Order             | The display position for this image within the product gallery. Lower values appear first.                                                                                    |         |
| Image Description      | Alternative text and caption used by the storefront and assistive technologies for this image.                                                                                |         |

### Update Product Modifier {#updateproductmodifieraction}

Updates a product modifier.

| Input                  | Comments                                                                                                                                                                                      | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}).                 |         |
| Product ID             | The unique identifier of the product the new modifier will be attached to.                                                                                                                    |         |
| Modifier ID            | The unique identifier of the modifier record to retrieve.                                                                                                                                     |         |
| Modifier Type          | The input control type for the modifier. Acceptable values include date, checkbox, dropdown, radio_buttons, rectangles, swatch, product_list, file, text, multi_line_text, numbers_only_text. |         |
| Required               | When true, the shopper must select or fill in this modifier before checkout is allowed.                                                                                                       | false   |
| Sort Order             | The display position for this modifier on the product detail page. Lower values appear first.                                                                                                 |         |
| Configuration          | A JSON object containing type-specific configuration values for the modifier (e.g. default values, min/max, format).                                                                          |         |
| Option Values          | A JSON array of selectable option values offered by this modifier. Used for dropdown, radio, rectangle, and swatch types.                                                                     |         |
| Display Name           | The label shown to shoppers on the storefront when this modifier is rendered.                                                                                                                 |         |

### Update Products (Batch) {#updateproductsbatch}

Updates products in batches.

| Input                  | Comments                                                                                                                                                                      | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Products (Batch)       | A JSON array of product objects to upsert in a single batch operation. Each object must include the product ID and any fields to update.                                      | <code>[<br /> {<br /> "id": 0,<br /> "name": "string",<br /> "type": "physical",<br /> "sku": "string",<br /> "description": "string",<br /> "weight": 0,<br /> "width": 0,<br /> "depth": 0,<br /> "height": 0,<br /> "price": 0,<br /> "cost_price": 0,<br /> "retail_price": 0,<br /> "sale_price": 0,<br /> "map_price": 0,<br /> "tax_class_id": 0,<br /> "product_tax_code": "string",<br /> "categories": [],<br /> "brand_id": 0,<br /> "brand_name": "string",<br /> "inventory_level": 0,<br /> "inventory_warning_level": 0<br /> }<br />]</code> |

### Update Product Variant {#updateproductvariantaction}

Updates a specific product variant.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Product ID             | The unique identifier of the parent product that owns the resource being operated on.                                                                                         |         |
| Variant ID             | The unique identifier of the variant being retrieved, either on a product or an associated Price List Record.                                                                 |         |
| Variant SKU            | The stock-keeping unit code for the variant. Must be between 1 and 255 characters and unique within the store.                                                                |         |
| Option Values          | A JSON array of option/option-value ID pairs that together define this variant's attribute combination.                                                                       |         |
| Variant Price          | The storefront selling price specific to this variant, overriding the parent product price.                                                                                   |         |
| Variant Weight         | The shipping weight specific to this variant, expressed in the store's configured weight unit.                                                                                |         |
| Variant Width          | The physical width specific to this variant, expressed in the store's configured length unit.                                                                                 |         |
| Variant Height         | The physical height specific to this variant, expressed in the store's configured length unit.                                                                                |         |
| Variant Depth          | The physical depth specific to this variant, expressed in the store's configured length unit.                                                                                 |         |

### Update Webhook {#updatewebhookaction}

Updates an existing webhook in BigCommerce.

| Input                  | Comments                                                                                                                                                                      | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |         |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |         |
| Webhook ID             | The unique identifier of the webhook record being modified.                                                                                                                   |         |
| Scope                  | The BigCommerce event scope that the webhook subscribes to (e.g. store/order/created).                                                                                        |         |
| Destination            | The fully qualified HTTPS URL that BigCommerce will POST webhook events to.                                                                                                   |         |
| Is Active              | When true, restricts the result to webhooks that are currently enabled. When false, restricts to disabled webhooks.                                                           | false   |
| Headers                | A JSON object of custom HTTP headers that BigCommerce will include on every webhook delivery request.                                                                         |         |

### Upsert Category Trees {#upsertcategorytrees}

Upserts Category Trees. This single endpoint updates and creates category trees.

| Input                  | Comments                                                                                                                                                                      | Default                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| BigCommerce Connection | The BigCommerce connection to use.                                                                                                                                            |                                                                                                     |
| Store Hash             | The unique identifier for the BigCommerce store. Find this in the store's API credentials or URL (e.g., the store hash from https://api.bigcommerce.com/stores/{store_hash}). |                                                                                                     |
| Category Tree Data     | A JSON array of category tree objects to upsert. Each object must include name and channel_ids.                                                                               | <code>{<br /> "id": 0,<br /> "name": "string",<br /> "channel_ids": [<br /> 0<br /> ]<br />}</code> |
