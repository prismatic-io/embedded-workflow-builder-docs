---
title: Amazon Seller Central Connector
sidebar_label: Amazon Seller Central
description: Manage product listings, orders, inventory, and fulfillment in Amazon Seller Central.
---

![Amazon Seller Central](./assets/amazon-seller-central.png#connector-icon)
[Amazon Seller Central](https://sellercentral.amazon.com/) is Amazon's platform for managing third-party seller businesses on the Amazon marketplace. This component allows you to retrieve and update product listings, process orders, manage inventory, and handle fulfillment information.

## API Documentation

This component was built using the [Amazon Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/welcome).

## Connections

### Amazon Seller Central OAuth 2.0 {#oauth2}

Authenticate requests to Amazon Seller Central.

To connect to Amazon Seller Central, register an application in the Developer Central console and configure OAuth 2.0 authentication.

For detailed information, refer to the [Amazon Selling Partner API documentation](https://developer-docs.amazon.com/sp-api/docs/connecting-to-the-selling-partner-api).

#### Prerequisites

- An Amazon Seller Central account with developer access
- Access to the [Developer Central console](https://sellercentral.amazon.com/sellingpartner/developerconsole)

#### Setup Steps

To register the application for public or private seller use:

1. Sign into Seller Central using developer credentials and navigate to [Developer Central](https://sellercentral.amazon.com/sellingpartner/developerconsole).
2. On the **Developer Central** page, select **Add new app client**.
3. Enter the OAuth Redirect URI: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Save the application configuration.
5. View the **LWA Credentials** section to access the **Client ID** and **Client Secret**.

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the LWA Credentials section
- Select the appropriate **Region** for the Seller Central account
- Configure the **Authorize URL** based on the Seller Central region:
  - For the Seller Central URL, refer to [Amazon's region URLs](https://developer-docs.amazon.com/sp-api/docs/seller-central-urls)
  - Replace `{YOUR_APPLICATION_ID}` with the application ID from the Developer Central page
  - For applications not yet in production, add `version=beta` to the URL parameter
- If connecting to a Sandbox environment, select **Yes** for the **Is Sandbox Environment** field

For information on required scopes and permissions, refer to the [SP-API authorization documentation](https://developer-docs.amazon.com/sp-api/docs/authorizing-selling-partner-api-applications).

:::note Amazon Seller Central Sandbox Environment
When connecting to the Sandbox environment, some fields require different value formats than Production to succeed. The expected values can be referenced in the [Selling Partner API Models](https://github.com/amzn/selling-partner-api-models/tree/f3b0bc6c3949f791589b079e78b341f13f954b41/models).

**Orders Example** ([Model Reference](https://github.com/amzn/selling-partner-api-models/blob/f3b0bc6c3949f791589b079e78b341f13f954b41/models/orders-api-model/ordersV0.json)):

- **Created After**: `TEST_CASE_200` or `TEST_CASE_200_NEXT_TOKEN`
- **Created Before**: `TEST_CASE_200` or `TEST_CASE_200_NEXT_TOKEN`
- **Order ID**: `TEST_CASE_200`

**Notifications Example** ([Model Reference](https://github.com/amzn/selling-partner-api-models/blob/f3b0bc6c3949f791589b079e78b341f13f954b41/models/notifications-api-model/notifications.json)):

- **Subscription ID**: `TEST_CASE_200_SUBSCRIPTION_ID`
- **Created Before**: `TEST_CASE_200_DESTINATION_ID`
  :::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                  | Comments                                                                                                                                                                                                                                                                                                                                                                                | Default                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Authorize URL          | The OAuth 2.0 Authorization URL for Amazon Seller Central. For the {Seller Central URL} use one of the [Seller Central URLs](https://developer-docs.amazon.com/sp-api/docs/seller-central-urls). Replace {YOUR_APPLICATION_ID} with the application ID you received from the Developer Central page. If your app is still not in production, add the version=beta parameter to the URL. | <code>{Seller Central URL}/apps/authorize/consent?application_id={YOUR_APPLICATION_ID}</code> |
| Client ID              | Client ID from your Amazon Seller Central application. Find this on the [Developer Central](https://developer-docs.amazon.com/sp-api/docs/registering-your-application) page.                                                                                                                                                                                                           |                                                                                               |
| Client Secret          | Client Secret from your Amazon Seller Central application. Find this on the [Developer Central](https://developer-docs.amazon.com/sp-api/docs/registering-your-application) page.                                                                                                                                                                                                       |                                                                                               |
| SP-API Endpoint        | Selling Partner API endpoints are associated with a particular AWS Region. The AWS Region is important because it is part of the credential scope, which is required for calculating a signature when calling the Selling Partner API. [Learn more](https://developer-docs.amazon.com/sp-api/docs/sp-api-endpoints)                                                                     | sellingpartnerapi-na.amazon.com                                                               |
| Is Sandbox Environment | When set to Yes, the connection will use the Amazon SP-API sandbox environment for testing. Leave blank or select No for production use.                                                                                                                                                                                                                                                |                                                                                               |

### Amazon Seller Central OAuth 2.0 Client Credentials {#clientcredentials}

Authenticate requests to Amazon Seller Central using client credentials.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                  | Comments                                                                                                                                                                                                                                                                                                                                                                                | Default                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Authorize URL          | The OAuth 2.0 Authorization URL for Amazon Seller Central. For the {Seller Central URL} use one of the [Seller Central URLs](https://developer-docs.amazon.com/sp-api/docs/seller-central-urls). Replace {YOUR_APPLICATION_ID} with the application ID you received from the Developer Central page. If your app is still not in production, add the version=beta parameter to the URL. | <code>{Seller Central URL}/apps/authorize/consent?application_id={YOUR_APPLICATION_ID}</code> |
| Scopes                 | Space-delimited set of one or more scopes to get the user's permission to access.                                                                                                                                                                                                                                                                                                       |                                                                                               |
| Client ID              | Client ID from your Amazon Seller Central application. Find this on the [Developer Central](https://developer-docs.amazon.com/sp-api/docs/registering-your-application) page.                                                                                                                                                                                                           |                                                                                               |
| Client Secret          | Client Secret from your Amazon Seller Central application. Find this on the [Developer Central](https://developer-docs.amazon.com/sp-api/docs/registering-your-application) page.                                                                                                                                                                                                       |                                                                                               |
| SP-API Endpoint        | Selling Partner API endpoints are associated with a particular AWS Region. The AWS Region is important because it is part of the credential scope, which is required for calculating a signature when calling the Selling Partner API. [Learn more](https://developer-docs.amazon.com/sp-api/docs/sp-api-endpoints)                                                                     | sellingpartnerapi-na.amazon.com                                                               |
| Is Sandbox Environment | When set to Yes, the connection will use the Amazon SP-API sandbox environment for testing. Leave blank or select No for production use.                                                                                                                                                                                                                                                |                                                                                               |

## Actions

### Cancel Feed {#cancelfeed}

Cancels the feed that you specify.

| Input      | Comments                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection | The Amazon Seller Central connection to use.                                                 |         |
| Feed Id    | The identifier for the feed. This identifier is unique only in combination with a seller ID. |         |

### Cancel Shipment {#cancelshipment}

Cancel the shipment indicated by the specified shipment identifier.

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Amazon Seller Central connection to use.                       |         |
| Shipment Id | The Amazon-defined shipment identifier for the shipment to cancel. |         |

### Confirm Order Shipment {#confirmordershipment}

Updates the shipment confirmation status for a specified order.

| Input                      | Comments                                                                                                                                                       | Default                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection                 | The Amazon Seller Central connection to use.                                                                                                                   |                                                                                                                                                                     |
| Order Id                   | An Amazon-defined order identifier in 3-7-7 format.                                                                                                            |                                                                                                                                                                     |
| Marketplace Id             | The marketplace identifier. See the [Marketplace IDs documentation](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for available marketplaces. |                                                                                                                                                                     |
| Package Reference Id       | A seller-supplied identifier that uniquely identifies a package within the scope of an order. Only positive numeric values are supported.                      |                                                                                                                                                                     |
| Carrier Code               | Identifies the carrier that will deliver the package.                                                                                                          |                                                                                                                                                                     |
| Tracking Number            | The tracking number used to obtain tracking and delivery information.                                                                                          |                                                                                                                                                                     |
| Ship Date                  | The shipping date for the package in ISO 8601 date/time format.                                                                                                |                                                                                                                                                                     |
| Order Items                | The list of order items and quantities to be updated.                                                                                                          | <code>[<br /> {<br /> "orderItemId": "79039765272157",<br /> "quantity": 1,<br /> "transparencyCodes": [<br /> "09876543211234567890"<br /> ]<br /> }<br />]</code> |
| Carrier Name               | Carrier name that will deliver the package. <strong>Important:</strong> Required when carrierCode is 'Others'.                                                 |                                                                                                                                                                     |
| Shipping Method            | Ship method to be used for shipping the order.                                                                                                                 |                                                                                                                                                                     |
| Ship From Supply Source Id | The unique identifier of the supply source.                                                                                                                    |                                                                                                                                                                     |
| COD Collection Method      | The COD collection method. Supported in Japan marketplace only.                                                                                                |                                                                                                                                                                     |

### Create Destination {#createdestination}

Creates a destination resource to receive notifications.

| Input      | Comments                                                                                               | Default |
| ---------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Amazon Seller Central connection to use.                                                           |         |
| Name       | A developer-defined name to help identify this destination.                                            |         |
| ARN        | The Amazon Resource Name (ARN) associated with the SQS queue.                                          |         |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                |         |
| Account Id | The identifier for the AWS account that is responsible for charges related to receiving notifications. |         |

### Create Feed {#createfeed}

Creates a feed. Upload the contents of the feed document before calling this operation.

| Input                  | Comments                                                                                                                                                                                                                                                | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Amazon Seller Central connection to use.                                                                                                                                                                                                            |         |
| Feed Type              | The feed type. See the [Feeds API documentation](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) for available feed types.                                                                                               |         |
| Marketplace Ids        | List of MarketplaceId values. Used to select orders that were placed in the specified marketplaces. See the [Marketplace IDs documentation](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of marketplaceId values. |         |
| Input Feed Document Id | The document identifier returned by the createFeedDocument operation. Upload the feed document contents before calling the createFeed operation.                                                                                                        |         |
| Feed Options           | Additional options to control the feed. These vary by feed type.                                                                                                                                                                                        |         |

### Create Feed Document {#createfeeddocument}

Creates a feed document for the feed type that you specify.

| Input        | Comments                                     | Default |
| ------------ | -------------------------------------------- | ------- |
| Connection   | The Amazon Seller Central connection to use. |         |
| Content Type | The content type of the feed.                |         |

### Create Listings Item {#createlistingsitem}

Creates a new or fully-updates an existing listings item for a selling partner.

| Input                    | Comments                                                                                                                                                                                                                                                     | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Amazon Seller Central connection to use.                                                                                                                                                                                                                 |         |
| Seller Id                | A selling partner identifier, such as a seller account or vendor code. <strong>Important:</strong> Required when identifiersType is SKU.                                                                                                                     |         |
| Stock Keeping Unit (SKU) | A selling partner provided identifier for an Amazon listing.                                                                                                                                                                                                 |         |
| Marketplace Ids          | List of MarketplaceId values. Used to select orders that were placed in the specified marketplaces. See the [Marketplace IDs documentation](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of marketplaceId values.      |         |
| Product Type             | The Amazon product type of the listings item.                                                                                                                                                                                                                |         |
| Requirements             | The name of the requirements set for the provided data.                                                                                                                                                                                                      |         |
| Attributes               | JSON object containing structured listings item attribute data keyed by attribute name.                                                                                                                                                                      |         |
| Issue Locale             | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: 'en_US', 'fr_CA', 'fr_FR'. Localized messages default to 'en_US' when a localization is not available in the specified locale. |         |

### Create Shipment {#createshipment}

Create a shipment with the information provided.

| Input                             | Comments                                                                                                                                                                                                                   | Default |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                        | The Amazon Seller Central connection to use.                                                                                                                                                                               |         |
| Amazon Order Id                   | An Amazon-defined order identifier in 3-7-7 format.                                                                                                                                                                        |         |
| Seller Order Id                   | A seller-defined order identifier.                                                                                                                                                                                         |         |
| Item List                         | The list of items to be included in a shipment.                                                                                                                                                                            |         |
| Ship From Address                 | The address of the sender.                                                                                                                                                                                                 |         |
| Package Dimensions                | The package dimensions.                                                                                                                                                                                                    |         |
| Weight                            | The package weight unit.                                                                                                                                                                                                   |         |
| Must Arrive By Date               | The date by which the package must arrive to keep the promise to the customer in ISO 8601 datetime format. If MustArriveByDate is specified, only shipping service offers that can be delivered by that date are returned. |         |
| Ship Date                         | The shipping date for the package in ISO 8601 date/time format.                                                                                                                                                            |         |
| Shipping Service Options          | Extra services offered by the carrier.                                                                                                                                                                                     |         |
| Label Customization               | Label customization options.                                                                                                                                                                                               |         |
| Shipping Service Id               | An Amazon-defined shipping service identifier.                                                                                                                                                                             |         |
| Shipping Service Offer Id         | Identifies a shipping service order made by a carrier.                                                                                                                                                                     |         |
| Hazmat Type                       | Hazardous materials options for a package. Consult the terms and conditions for each carrier for more information about hazardous materials.                                                                               |         |
| Include Packing Slip With Label   | When true, include a packing slip with the label.                                                                                                                                                                          | false   |
| Shipment Level Seller Inputs List | Additional seller-provided inputs for the shipment.                                                                                                                                                                        |         |

### Create Subscription {#createsubscription}

Creates a subscription for the specified notification type to be delivered to the specified destination.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                                       | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Amazon Seller Central connection to use.                                                                                                                                                                                                                                                                                                                                   |         |
| Notification Type       | The type of notification. See the [Notifications API documentation](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-reference) for available notification types.                                                                                                                                                                                            |         |
| Payload Version         | The version of the payload object to be used in the notification.                                                                                                                                                                                                                                                                                                              |         |
| Destination Id          | The identifier for the destination where notifications will be delivered.                                                                                                                                                                                                                                                                                                      |         |
| Aggregation Time Period | The supported aggregation time periods. For example, if FiveMinutes is the value chosen, and 50 price updates occur for an ASIN within 5 minutes, Amazon will send only two notifications; one for the first event, and then a subsequent notification 5 minutes later with the final end state of the data. The 48 interim events will be dropped.                            |         |
| Marketplace Ids         | A list of marketplace identifiers to subscribe to (e.g. ATVPDKIKX0DER). To receive notifications in every marketplace, do not provide this list.                                                                                                                                                                                                                               |         |
| Order Change Types      | List of order change types to subscribe to (e.g. BuyerRequestedChange). To receive notifications of all change types, do not provide this list.                                                                                                                                                                                                                                |         |
| Event Filter Type       | An eventFilterType value that is supported by the specific notificationType. This is used by the subscription service to determine the type of event filter. Refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide) for the specific notificationType to determine if an eventFilterType is supported. |         |

### Delete Destination {#deletedestination}

Deletes the destination that you specify.

| Input          | Comments                                                    | Default |
| -------------- | ----------------------------------------------------------- | ------- |
| Connection     | The Amazon Seller Central connection to use.                |         |
| Destination Id | The identifier for the destination that you want to delete. |         |

### Delete Listings Item {#deletelistingsitem}

Delete a listings item for a selling partner.

| Input                    | Comments                                                                                                                                                                                                                                                     | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Amazon Seller Central connection to use.                                                                                                                                                                                                                 |         |
| Seller Id                | A selling partner identifier, such as a seller account or vendor code. <strong>Important:</strong> Required when identifiersType is SKU.                                                                                                                     |         |
| Stock Keeping Unit (SKU) | A selling partner provided identifier for an Amazon listing.                                                                                                                                                                                                 |         |
| Marketplace Ids          | List of MarketplaceId values. Used to select orders that were placed in the specified marketplaces. See the [Marketplace IDs documentation](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of marketplaceId values.      |         |
| Issue Locale             | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: 'en_US', 'fr_CA', 'fr_FR'. Localized messages default to 'en_US' when a localization is not available in the specified locale. |         |

### Delete Subscription By ID {#deletesubscription}

Deletes the subscription indicated by the subscription identifier and notification type that you specify.

| Input             | Comments                                                                                                                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Amazon Seller Central connection to use.                                                                                                                                        |         |
| Subscription Id   | The identifier for the subscription that you want to delete.                                                                                                                        |         |
| Notification Type | The type of notification. See the [Notifications API documentation](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-reference) for available notification types. |         |

### Get Catalog Item {#getcatalogitem}

Retrieves details for an item in the Amazon catalog.

| Input                                        | Comments                                                                                                                                                                                                                                                | Default |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                                   | The Amazon Seller Central connection to use.                                                                                                                                                                                                            |         |
| Amazon Standard Identification Number (ASIN) | The Amazon Standard Identification Number (ASIN) of the item.                                                                                                                                                                                           |         |
| Marketplace Ids                              | List of MarketplaceId values. Used to select orders that were placed in the specified marketplaces. See the [Marketplace IDs documentation](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of marketplaceId values. |         |
| Included Data                                | List of data sets to include in the response. Default: summaries.                                                                                                                                                                                       |         |
| Locale                                       | Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.                                                                                                                                                           |         |

### Get Destination {#getdestination}

Returns information about the destination that you specify.

| Input          | Comments                                                   | Default |
| -------------- | ---------------------------------------------------------- | ------- |
| Connection     | The Amazon Seller Central connection to use.               |         |
| Destination Id | The identifier generated when you created the destination. |         |

### Get Feed {#getfeed}

Returns feed details (including the resultDocumentId, if available) for the feed that you specify.

| Input      | Comments                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection | The Amazon Seller Central connection to use.                                                 |         |
| Feed Id    | The identifier for the feed. This identifier is unique only in combination with a seller ID. |         |

### Get Feed Document {#getfeeddocument}

Returns the information required for retrieving a feed document's contents.

| Input            | Comments                                     | Default |
| ---------------- | -------------------------------------------- | ------- |
| Connection       | The Amazon Seller Central connection to use. |         |
| Feed Document Id | The identifier of the feed document.         |         |

### Get Listings Item {#getlistingsitem}

Returns details about a listings item for a selling partner.

| Input                    | Comments                                                                                                                                                                                                                                                     | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Amazon Seller Central connection to use.                                                                                                                                                                                                                 |         |
| Seller Id                | A selling partner identifier, such as a merchant account or vendor code.                                                                                                                                                                                     |         |
| Stock Keeping Unit (SKU) | A selling partner provided identifier for an Amazon listing.                                                                                                                                                                                                 |         |
| Marketplace Ids          | List of MarketplaceId values. Used to select orders that were placed in the specified marketplaces. See the [Marketplace IDs documentation](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of marketplaceId values.      |         |
| Issue Locale             | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: 'en_US', 'fr_CA', 'fr_FR'. Localized messages default to 'en_US' when a localization is not available in the specified locale. |         |
| Included Data            | List of data sets to include in the response. Default: summaries.                                                                                                                                                                                            |         |

### Get Order {#getorder}

Returns the order that you specify.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The Amazon Seller Central connection to use.        |         |
| Order Id   | An Amazon-defined order identifier in 3-7-7 format. |         |

### Get Order Address {#getorderaddress}

Returns the shipping address for the order that you specify.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The Amazon Seller Central connection to use.        |         |
| Order Id   | An Amazon-defined order identifier in 3-7-7 format. |         |

### Get Order Buyer Info {#getorderbuyerinfo}

Returns buyer information for the order that you specify.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The Amazon Seller Central connection to use.        |         |
| Order Id   | An Amazon-defined order identifier in 3-7-7 format. |         |

### Get Order Items {#getorderitems}

Returns detailed order item information for the order that you specify.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Amazon Seller Central connection to use.                                   |         |
| Order Id   | An Amazon-defined order identifier in 3-7-7 format.                            |         |
| Next Token | String token returned in the response of your previous request for pagination. |         |

### Get Order Items Buyer Info {#getorderitemsbuyerinfo}

Returns buyer information for the order items in the order that you specify.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The Amazon Seller Central connection to use.        |         |
| Order Id   | An Amazon-defined order identifier in 3-7-7 format. |         |

### Get Shipment {#getshipment}

Returns the shipment information for an existing shipment.

| Input       | Comments                                                 | Default |
| ----------- | -------------------------------------------------------- | ------- |
| Connection  | The Amazon Seller Central connection to use.             |         |
| Shipment Id | The Amazon-defined shipment identifier for the shipment. |         |

### Get Subscription By ID {#getsubscriptionbyid}

Returns information about a subscription for the specified notification type. The getSubscriptionById API is grantless. For more information, see Grantless operations in the Selling Partner API Developer Guide.

| Input             | Comments                                                                                                                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Amazon Seller Central connection to use.                                                                                                                                        |         |
| Subscription Id   | The identifier for the subscription that you want to get.                                                                                                                           |         |
| Notification Type | The type of notification. See the [Notifications API documentation](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-reference) for available notification types. |         |

### List Destinations {#listdestinations}

Returns information about all destinations.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Amazon Seller Central connection to use. |         |

### List Feeds {#listfeeds}

Returns feed details for the feeds that match the filters that you specify.

| Input               | Comments                                                                                                                                                                                                                                                                    | Default                  |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Connection          | The Amazon Seller Central connection to use.                                                                                                                                                                                                                                |                          |
| Feed Types          | List of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. <strong>Important:</strong> Either feedTypes or nextToken is required. |                          |
| Marketplace Ids     | List of MarketplaceId values. Used to select orders that were placed in the specified marketplaces. See the [Marketplace IDs documentation](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of marketplaceId values.                     |                          |
| Page Size           | The maximum number of feeds to return in a single call.                                                                                                                                                                                                                     | 10                       |
| Processing Statuses | List of processing statuses used to filter feeds.                                                                                                                                                                                                                           |                          |
| Created Since       | The earliest feed creation date and time for feeds included in the response in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.                                                                                                    | 2025-11-29T20:24:42.546Z |
| Created Until       | The latest feed creation date and time for feeds included in the response in ISO 8601 format. The default is now.                                                                                                                                                           | 2026-02-27T20:24:42.547Z |
| Next Token          | String token returned in the response of your previous request for pagination.                                                                                                                                                                                              |                          |

### List Orders {#listorders}

Returns orders created or updated during the time frame indicated by the specified parameters.

| Input                               | Comments                                                                                                                                                                                                                                                                                                         | Default |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                          | The Amazon Seller Central connection to use.                                                                                                                                                                                                                                                                     |         |
| Marketplace Ids                     | List of MarketplaceId values. Used to select orders that were placed in the specified marketplaces. See the [Marketplace IDs documentation](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of marketplaceId values.                                                          |         |
| Created After                       | Date used for selecting orders created after (or at) a specified time in ISO 8601 format. Only orders placed after the specified time are returned. Either the CreatedAfter parameter or the LastUpdatedAfter parameter is required.                                                                             |         |
| Created Before                      | Date used for selecting orders created before (or at) a specified time in ISO 8601 format. Only orders placed before the specified time are returned.                                                                                                                                                            |         |
| Last Updated After                  | Date used for selecting orders that were last updated after (or at) a specified time in ISO 8601 format. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller.                                                           |         |
| Last Updated Before                 | Date used for selecting orders that were last updated before (or at) a specified time in ISO 8601 format. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller.                                                          |         |
| Order Statuses                      | List of OrderStatus values used to filter the results. Select one or more of: PendingAvailability, Pending, Unshipped, PartiallyShipped, Shipped, Canceled, Unfulfillable, or InvoiceUnconfirmed.                                                                                                                |         |
| Fulfillment Channels                | List that indicates how an order was fulfilled. Filters the results by fulfillment channel. Possible values: AFN (Fulfillment by Amazon); MFN (Fulfilled by the seller).                                                                                                                                         |         |
| Payment Methods                     | List of payment method values. Used to select orders paid using the specified payment methods. Possible values: COD (Cash on delivery); CVS (Convenience store payment); Other (Any payment method other than COD or CVS).                                                                                       |         |
| Buyer Email                         | The email address of a buyer. Used to select orders that contain the specified email address.                                                                                                                                                                                                                    |         |
| Seller Order Id                     | An order identifier that is specified by the seller. Used to select only the orders that match the order identifier. <strong>Important:</strong> If SellerOrderId is specified, then FulfillmentChannels, OrderStatuses, PaymentMethod, LastUpdatedAfter, LastUpdatedBefore, and BuyerEmail cannot be specified. |         |
| Max Results Per Page                | Maximum number of orders that can be returned per page. Value must be 1 - 100. Default 100.                                                                                                                                                                                                                      | 100     |
| Easy Ship Shipment Statuses         | List of EasyShipShipmentStatus values. Used to select Easy Ship orders with statuses that match the specified values. If EasyShipShipmentStatus is specified, only Amazon Easy Ship orders are returned.                                                                                                         |         |
| Electronic Invoice Statuses         | List of ElectronicInvoiceStatus values. Used to select orders with electronic invoice statuses that match the specified values.                                                                                                                                                                                  |         |
| Next Token                          | String token returned in the response of your previous request for pagination.                                                                                                                                                                                                                                   |         |
| Amazon Order Ids                    | List of AmazonOrderId values. An AmazonOrderId is an Amazon-defined order identifier in 3-7-7 format.                                                                                                                                                                                                            |         |
| Actual Fulfillment Supply Source Id | Denotes the recommended sourceId where the order should be fulfilled from.                                                                                                                                                                                                                                       |         |
| Is ISPU                             | When true, this order is marked to be picked up from a store rather than delivered.                                                                                                                                                                                                                              | false   |
| Store Chain Store Id                | The store chain store identifier. Linked to a specific store in a store chain.                                                                                                                                                                                                                                   |         |

### List Subscription {#listsubscriptions}

Returns information about subscriptions of the specified notification type.

| Input             | Comments                                                                                                                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Amazon Seller Central connection to use.                                                                                                                                        |         |
| Notification Type | The type of notification. See the [Notifications API documentation](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-reference) for available notification types. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Amazon Seller Central

| Input                   | Comments                                                                                                                                                                                                                                                    | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Amazon Seller Central connection to use.                                                                                                                                                                                                                |         |
| URL                     | Input the path only (/orders/v0/orders), The base URL is already included (https://sellingpartnerapi-na.amazon.com/). For example, to connect to https://sellingpartnerapi-na.amazon.com/orders/v0/orders, only /orders/v0/orders is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                     |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                   |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                        |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                            |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                      |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                         |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                 |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                    | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                         |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                        | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                               | false   |

### Search Catalog Item {#searchcatalogitem}

Search for and return a list of Amazon catalog items and associated information either by identifier or by keywords.

| Input              | Comments                                                                                                                                                                                                                                                | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Amazon Seller Central connection to use.                                                                                                                                                                                                            |         |
| Marketplace Ids    | List of MarketplaceId values. Used to select orders that were placed in the specified marketplaces. See the [Marketplace IDs documentation](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of marketplaceId values. |         |
| Identifiers        | List of product identifiers to search the Amazon catalog for. <strong>Important:</strong> Cannot be used with keywords.                                                                                                                                 |         |
| Identifiers Type   | Type of product identifiers to search the Amazon catalog for. <strong>Important:</strong> Required when identifiers are provided.                                                                                                                       |         |
| Included Data      | List of data sets to include in the response. Default: summaries.                                                                                                                                                                                       |         |
| Locale             | Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.                                                                                                                                                           |         |
| Seller Id          | A selling partner identifier, such as a seller account or vendor code. <strong>Important:</strong> Required when identifiersType is SKU.                                                                                                                |         |
| Keywords           | List of words to search the Amazon catalog for. <strong>Important:</strong> Cannot be used with identifiers.                                                                                                                                            |         |
| Brand Names        | List of brand names to limit the search for keywords-based queries. <strong>Important:</strong> Cannot be used with identifiers.                                                                                                                        |         |
| Classification Ids | List of classification identifiers to limit the search for keywords-based queries. <strong>Important:</strong> Cannot be used with identifiers.                                                                                                         |         |
| Page Size          | The maximum number of feeds to return in a single call.                                                                                                                                                                                                 | 10      |
| Page Token         | Token to fetch a certain page when there are multiple pages worth of results.                                                                                                                                                                           |         |
| Keywords Locale    | The language of the keywords provided for keywords-based queries. Defaults to the primary locale of the marketplace. <strong>Important:</strong> Cannot be used with identifiers.                                                                       |         |

### Update Listings Item {#updatelistingsitem}

Partially update (patch) a listings item for a selling partner.

| Input                    | Comments                                                                                                                                                                                                                                                     | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Amazon Seller Central connection to use.                                                                                                                                                                                                                 |         |
| Seller Id                | A selling partner identifier, such as a seller account or vendor code. <strong>Important:</strong> Required when identifiersType is SKU.                                                                                                                     |         |
| Stock Keeping Unit (SKU) | A selling partner provided identifier for an Amazon listing.                                                                                                                                                                                                 |         |
| Marketplace Ids          | List of MarketplaceId values. Used to select orders that were placed in the specified marketplaces. See the [Marketplace IDs documentation](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of marketplaceId values.      |         |
| Product Type             | The Amazon product type of the listings item.                                                                                                                                                                                                                |         |
| Issue Locale             | A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: 'en_US', 'fr_CA', 'fr_FR'. Localized messages default to 'en_US' when a localization is not available in the specified locale. |         |
| Patches                  | One or more JSON Patch operations to perform on the listings item.                                                                                                                                                                                           |         |
