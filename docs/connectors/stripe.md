---
title: Stripe Connector
sidebar_label: Stripe
description: Manage objects connected to your Stripe platform
---

![Stripe](./assets/stripe.png#connector-icon)
The **Stripe** component provides functionality for interacting with the Stripe API.

## API Documentation

This component was built using the [Stripe REST API Reference](https://docs.stripe.com/api)

## Connections

### API Key {#apikey}

API Key connection for Stripe

The **Stripe** component uses API keys to authenticate requests. You can view and manage your API keys in the Stripe Dashboard. For information on obtaining an API key from Stripe, refer to the [docs](https://stripe.com/docs/api/authentication)

| Input   | Comments                                                                                                                                                                         | Default |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| API Key | Stripe API Key from the Stripe Dashboard. Use a test key (sk*test*...) for development and a live key (sk*live*...) for production. Find at https://dashboard.stripe.com/apikeys |         |

## Triggers

### Instance Webhooks {#instancedeploywebhook}

Automatically manages Stripe webhook subscriptions for your instance. On instance deploy, this trigger creates a webhook endpoint in Stripe (or reuses an existing one with matching URL and events). On instance deletion, it removes the webhook. The trigger validates incoming webhook signatures and handles all webhook lifecycle management automatically. Note: Webhooks are created/updated each time an instance is deployed or reconfigured.

| Input                      | Comments                                                                                                                                                 | Default |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Webhook Events             | For each item, provide a string value that represents which event you want to track. For more information, see https://docs.stripe.com/api/events/types. |         |
| Connection                 |                                                                                                                                                          |         |
| Disable Webhook Validation | When true, webhook signature validation will be skipped. This is useful for manually testing the trigger without needing a signed request.               | false   |

### Webhook (Deprecated) {#webhook}

Receive and validate webhook requests from Stripe for webhooks you configure.

## Actions

### Attach Card {#attachcard}

Attach a card to a customer

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Payment Method Id | The unique identifier of the payment method.                       |         |
| Customer Id       | The unique identifier of the customer.                             |         |
| Timeout           | The maximum time a client will await a response (in milliseconds). |         |
| Connection        |                                                                    |         |

### Cancel Payment Intent {#cancelpaymentintent}

A PaymentIntent object can be canceled when it is in one of these statuses: requires_payment_method, requires_capture, requires_confirmation, requires_action or, in rare cases, processing.

| Input               | Comments                                                           | Default |
| ------------------- | ------------------------------------------------------------------ | ------- |
| Timeout             | The maximum time a client will await a response (in milliseconds). |         |
| Connection          |                                                                    |         |
| Payment Intent ID   | The ID of the Payment Intent.                                      |         |
| Cancellation Reason | The reason for cancelling the Payment Intent.                      |         |

### Capture Payment Intent {#capturepaymentintent}

Capture the funds of an existing uncaptured PaymentIntent when its status is requires_capture.

| Input                       | Comments                                                                                                                                                                                                                | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout                     | The maximum time a client will await a response (in milliseconds).                                                                                                                                                      |         |
| Connection                  |                                                                                                                                                                                                                         |         |
| Payment Intent ID           | The ID of the Payment Intent.                                                                                                                                                                                           |         |
| Amount to Capture           | The amount to capture from the PaymentIntent, which must be less than or equal to the original amount.                                                                                                                  |         |
| Metadata                    | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Application Fee Amount      | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner’s Stripe account.                                                               |         |
| Statement Descriptor        | For non-card charges, you can use this value as the complete description that appears on your customers’ statements.                                                                                                    |         |
| Statement Descriptor Suffix | Provides information about a card payment that customers see on their statements.                                                                                                                                       |         |
| Transfer Data               | The parameters used to automatically create a Transfer when the payment is captured.                                                                                                                                    |         |

### Close Dispute {#closedispute}

Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |
| Dispute ID | The unique identifier of the dispute.                              |         |

### Confirm Payment Intent {#confirmpaymentintent}

Confirm that your customer intends to pay with current or provided payment method.

| Input                    | Comments                                                                                                                                                            | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout                  | The maximum time a client will await a response (in milliseconds).                                                                                                  |         |
| Connection               |                                                                                                                                                                     |         |
| Payment Intent ID        | The ID of the Payment Intent.                                                                                                                                       |         |
| Payment Method           | ID of the payment method (a PaymentMethod, Card, or compatible Source object) to attach to this PaymentIntent.                                                      |         |
| Receipt Email            | This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address. |         |
| Setup Future Usage       | Indicates that you intend to make future payments with this PaymentIntent’s payment method.                                                                         |         |
| Capture Method           | Controls when the funds will be captured from the customer’s account.                                                                                               |         |
| Error On Requires Action | Set to true to fail the payment attempt if the PaymentIntent transitions into requires_action.                                                                      |         |
| Mandate                  | ID of the mandate to be used for this payment.                                                                                                                      |         |
| Mandate Data             | This hash contains details about the Mandate to create.                                                                                                             |         |
| Off Session              | Set to true to indicate that the customer is not in your checkout flow during this payment attempt, and therefore is unable to authenticate.                        |         |
| Payment Method Data      | If provided, this hash will be used to create a PaymentMethod.                                                                                                      |         |
| Payment Method Options   | Payment-method-specific configuration for this PaymentIntent.                                                                                                       |         |
| Radar Options            | Options to configure Radar.                                                                                                                                         |         |
| Return Url               | The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method’s app or site.                                      |         |
| Use Stripe SDK           | Set to true when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.                                           |         |

### Create Card {#createcard}

Create a new card

| Input                  | Comments                                                                                                                                                                                                                | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer Id            | The unique identifier of the customer.                                                                                                                                                                                  |         |
| Card Number            | The card number.                                                                                                                                                                                                        |         |
| Expiration Month       | The expiration month of the card.                                                                                                                                                                                       |         |
| Expiration Year        | The expiration year of the card.                                                                                                                                                                                        |         |
| CVC                    | The CVC security code on the back of the card.                                                                                                                                                                          |         |
| Billing Street Address | The street address for the billing information.                                                                                                                                                                         |         |
| Billing Address 2      | Additional address information for the billing address (optional).                                                                                                                                                      |         |
| Billing City           | The city for the billing address.                                                                                                                                                                                       |         |
| Billing Country        | The country for the billing address (two-letter ISO country code).                                                                                                                                                      |         |
| Billing Postal Code    | The postal code for the billing address.                                                                                                                                                                                |         |
| Billing State          | The state for the billing address.                                                                                                                                                                                      |         |
| Billing Email          | The email address for the billing contact.                                                                                                                                                                              |         |
| Full Name              | The full name for the billing contact.                                                                                                                                                                                  |         |
| Billing Phone          | The phone number for the billing contact.                                                                                                                                                                               |         |
| Metadata               | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Timeout                | The maximum time a client will await a response (in milliseconds).                                                                                                                                                      |         |
| Connection             |                                                                                                                                                                                                                         |         |

### Create Checkout Session {#createcheckoutsession}

Create a new Stripe Checkout Session

| Input               | Comments                                                                                                                                                                  | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Mode                | The mode of the Checkout Session.                                                                                                                                         | payment |
| Line Items          | JSON array of line items to be purchased.                                                                                                                                 |         |
| Email               | The email of the customer to create the checkout session for.                                                                                                             |         |
| Customer Id         | The ID of the customer to create the checkout session for.                                                                                                                |         |
| Client Reference ID | A unique string to reference the Checkout Session. This can be a customer ID, a cart ID, or similar, and can be used to reconcile the session with your internal systems. |         |
| Success URL         | The URL the customer will be directed to after the payment is successful.                                                                                                 |         |
| Cancel URL          | The URL the customer will be directed to if they decide to cancel payment.                                                                                                |         |
| Body Params         | More parameters to pass to the request.                                                                                                                                   |         |
| Timeout             | The maximum time a client will await a response (in milliseconds).                                                                                                        |         |
| Connection          |                                                                                                                                                                           |         |

### Create Customer {#createcustomer}

Create a new customer object

| Input                     | Comments                                                                                                                                                | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Name                      | The name of the customer.                                                                                                                               |         |
| Phone                     | The phone number of the customer.                                                                                                                       |         |
| Address Line 1            | The street address of the customer.                                                                                                                     |         |
| Address Line 2            | Additional address information for the customer (optional).                                                                                             |         |
| City                      | The city of the customer.                                                                                                                               |         |
| Country                   | The country of the customer (two-letter ISO country code).                                                                                              |         |
| Postal Code               | The postal code of the customer.                                                                                                                        |         |
| State                     | The state of the customer.                                                                                                                              |         |
| Balance                   | The balance of the customer in cents (e.g., 5000 = $50.00).                                                                                             |         |
| Default Payment Method Id | The unique identifier of the customer's default payment method.                                                                                         |         |
| Description               | A description of the customer.                                                                                                                          |         |
| Email                     | The email address of the customer.                                                                                                                      |         |
| Metadata                  | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |         |
| Timeout                   | The maximum time a client will await a response (in milliseconds).                                                                                      |         |
| Connection                |                                                                                                                                                         |         |

### Create Invoice {#createinvoice}

Create a new invoice

| Input             | Comments                                                                                                                                                                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout           | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                        |         |
| Customer Id       | The unique identifier of the customer.                                                                                                                                                                                                    |         |
| Collection Method | The collection method for the invoice.                                                                                                                                                                                                    |         |
| Payment Method Id | The unique identifier of the payment method.                                                                                                                                                                                              |         |
| Auto Advance      | When true, Stripe will automatically attempt collection of the invoice.                                                                                                                                                                   | false   |
| Values            | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Subscription Id   | The unique identifier of the subscription.                                                                                                                                                                                                |         |
| Description       | A description of the invoice.                                                                                                                                                                                                             |         |
| Metadata          | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Due Date          | The due date of the invoice as a Unix timestamp.                                                                                                                                                                                          |         |
| Connection        |                                                                                                                                                                                                                                           |         |

### Create Payment Intent {#createpaymentintent}

Creates a PaymentIntent object.

| Input                       | Comments                                                                                                                                                                                                                | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout                     | The maximum time a client will await a response (in milliseconds).                                                                                                                                                      |         |
| Connection                  |                                                                                                                                                                                                                         |         |
| Amount                      | Amount intended to be collected in cents (e.g., 2000 = $20.00).                                                                                                                                                         |         |
| Currency                    | Three-letter ISO currency code in lowercase (e.g., usd, eur, gbp).                                                                                                                                                      |         |
| Automatic Payment Methods   | When enabled, this PaymentIntent will accept payment methods that you have enabled in the Dashboard and are compatible with this PaymentIntent’s other parameters.                                                      |         |
| Confirm                     | When true, attempts to confirm this PaymentIntent immediately.                                                                                                                                                          | false   |
| Customer                    | ID of the Customer this PaymentIntent belongs to, if one exists.                                                                                                                                                        |         |
| Description                 | An arbitrary string attached to the object. Often useful for displaying to users.                                                                                                                                       |         |
| Metadata                    | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Off Session                 | Set to true to indicate that the customer is not in your checkout flow during this payment attempt, and therefore is unable to authenticate.                                                                            |         |
| Payment Method              | ID of the payment method (a PaymentMethod, Card, or compatible Source object) to attach to this PaymentIntent.                                                                                                          |         |
| Receipt Email               | Email address that the receipt for the resulting payment will be sent to.                                                                                                                                               |         |
| Setup Future Usage          | Indicates that you intend to make future payments with this PaymentIntent’s payment method.                                                                                                                             |         |
| Shipping                    | Shipping information for this PaymentIntent.                                                                                                                                                                            |         |
| Statement Descriptor        | For non-card charges, you can use this value as the complete description that appears on your customers’ statements.                                                                                                    |         |
| Statement Descriptor Suffix | Provides information about a card payment that customers see on their statements.                                                                                                                                       |         |
| Application Fee Amount      | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner’s Stripe account.                                                               |         |
| Capture Method              | Controls when the funds will be captured from the customer’s account.                                                                                                                                                   |         |
| Confirmation Method         |                                                                                                                                                                                                                         |         |
| Error On Requires Action    | Set to true to fail the payment attempt if the PaymentIntent transitions into requires_action.                                                                                                                          |         |
| Mandate                     | ID of the mandate to be used for this payment.                                                                                                                                                                          |         |
| Mandate Data                | This hash contains details about the Mandate to create.                                                                                                                                                                 |         |
| On Behalf Of                | The Stripe account ID for which these funds are intended                                                                                                                                                                |         |
| Payment Method Data         | If provided, this hash will be used to create a PaymentMethod.                                                                                                                                                          |         |
| Payment Method Options      | Payment-method-specific configuration for this PaymentIntent.                                                                                                                                                           |         |
| Payment Method Types        | The list of payment method types that this PaymentIntent is allowed to use.                                                                                                                                             |         |
| Radar Options               | Options to configure Radar.                                                                                                                                                                                             |         |
| Return Url                  | The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method’s app or site.                                                                                          |         |
| Transfer Data               | The parameters used to automatically create a Transfer when the payment succeeds.                                                                                                                                       |         |
| Transfer Group              | A string that identifies the resulting payment as part of a group.                                                                                                                                                      |         |
| Use Stripe SDK              | Set to true when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.                                                                                               |         |

### Create Price {#createprice}

Create a new price

| Input             | Comments                                                                                                                                                                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Id        | The unique identifier of the product.                                                                                                                                                                                                     |         |
| Currency          | Three-letter ISO currency code in lowercase (e.g., usd, eur, gbp).                                                                                                                                                                        |         |
| Unit Price        | The price per unit in cents.                                                                                                                                                                                                              |         |
| Active            | When true, the object is currently active in your platform.                                                                                                                                                                               | false   |
| Nickname          | A brief description of the price, hidden from customers.                                                                                                                                                                                  |         |
| RecurringInterval | The billing frequency for recurring charges.                                                                                                                                                                                              |         |
| Values            | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Metadata          | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Timeout           | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                        |         |
| Connection        |                                                                                                                                                                                                                                           |         |

### Create Product {#createproduct}

Create a new product

| Input           | Comments                                                                                                                                                                                                                                  | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Name    | The name of the product.                                                                                                                                                                                                                  |         |
| Product Type    | The type of the product.                                                                                                                                                                                                                  |         |
| Product URL     | A URL of a publicly-accessible webpage for this product. May only be set if type=good.                                                                                                                                                    |         |
| Shippable       | When true, this product can be shipped (i.e., physical goods).                                                                                                                                                                            | false   |
| Active          | When true, the object is currently active in your platform.                                                                                                                                                                               | false   |
| Description     | A description of the invoice.                                                                                                                                                                                                             |         |
| Product Images  | For each list item, provide a URL for the image of the product.                                                                                                                                                                           |         |
| Metadata        | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Values          | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Product Caption | (DEPRECATED) A short one-line description of the product, meant to be displayable to the customer. May only be set if type=good.                                                                                                          |         |
| Timeout         | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                        |         |
| Connection      |                                                                                                                                                                                                                                           |         |

### Create Subscription {#createsubscription}

Create a new subscription

| Input             | Comments                                                                                                                                                                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer Id       | The unique identifier of the customer.                                                                                                                                                                                                    |         |
| Price Id          | The unique identifier of the price.                                                                                                                                                                                                       |         |
| Collection Method | The collection method for the invoice.                                                                                                                                                                                                    |         |
| Quantity          | The quantity of items in the subscription.                                                                                                                                                                                                |         |
| Payment Method Id | The unique identifier of the payment method.                                                                                                                                                                                              |         |
| Cancel At         | A Unix timestamp at which the subscription should cancel. If set before the current period ends, this may cause a proration if enabled.                                                                                                   |         |
| Days Until Due    | The number of days until the payment is due.                                                                                                                                                                                              |         |
| Values            | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Metadata          | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Coupon            | (DEPRECATED) The unique identifier of the coupon to apply to the invoice.                                                                                                                                                                 |         |
| Timeout           | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                        |         |
| Connection        |                                                                                                                                                                                                                                           |         |

### Create Webhook {#createwebhook}

Create a new webhook

| Input          | Comments                                                                                                                                                 | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Webhook URL    | The URL where webhook events will be sent.                                                                                                               |         |
| Webhook Events | For each item, provide a string value that represents which event you want to track. For more information, see https://docs.stripe.com/api/events/types. |         |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                       |         |
| Connection     |                                                                                                                                                          |         |

### Delete All Instanced Webhooks {#deletewebhooks}

Delete all the webhooks associated to each flow of the instance.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |

### Delete Customer {#deletecustomer}

Permanently deletes a customer, Also immediately cancels any active subscriptions on the customer.

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Customer Id | The unique identifier of the customer.                             |         |
| Timeout     | The maximum time a client will await a response (in milliseconds). |         |
| Connection  |                                                                    |         |

### Delete Invoice {#deleteinvoice}

Delete an existing invoice

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Invoice ID | The unique identifier of the invoice.                              |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |

### Delete Product {#deleteproduct}

Delete an existing product by Id

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Product Id | The unique identifier of the product.                              |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |

### Delete Subscription {#deletesubscription}

Delete a subscription by Id

| Input           | Comments                                                           | Default |
| --------------- | ------------------------------------------------------------------ | ------- |
| Subscription Id | The unique identifier of the subscription.                         |         |
| Timeout         | The maximum time a client will await a response (in milliseconds). |         |
| Connection      |                                                                    |         |

### Delete Webhook {#deletewebhook}

Deletes a webhook by ID

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Webhook ID | The ID of the webhook to delete                                    |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |

### Detach Card {#detachcard}

Detach a card from a customer

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Timeout           | The maximum time a client will await a response (in milliseconds). |         |
| Customer Id       | The unique identifier of the customer.                             |         |
| Payment Method Id | The unique identifier of the payment method.                       |         |
| Connection        |                                                                    |         |

### Expire Checkout Session {#expirecheckoutsession}

Expire a Stripe Checkout Session

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Session ID | The ID of the checkout session to expire.                          |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |

### Get Balance Transaction {#getbalancetransaction}

Retrieves the balance transaction with the given ID.

| Input                  | Comments                                                           | Default |
| ---------------------- | ------------------------------------------------------------------ | ------- |
| Timeout                | The maximum time a client will await a response (in milliseconds). |         |
| Connection             |                                                                    |         |
| Balance Transaction ID | The unique identifier of the balance transaction.                  |         |

### Get Card {#getcard}

Get the information and metadata of a card by Id

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Timeout           | The maximum time a client will await a response (in milliseconds). |         |
| Customer Id       | The unique identifier of the customer.                             |         |
| Payment Method Id | The unique identifier of the payment method.                       |         |
| Connection        |                                                                    |         |

### Get Charge {#getcharge}

Retrieves the details of a charge that has previously been created.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |
| Charge ID  | The unique identifier of the charge.                               |         |

### Get Checkout Session {#getcheckoutsession}

Retrieve a Stripe Checkout Session

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Session ID | The ID of the checkout session to expire.                          |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |

### Get Customer {#getcustomer}

Retrieve the information and metadata of a customer by Id

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Customer Id | The unique identifier of the customer.                             |         |
| Timeout     | The maximum time a client will await a response (in milliseconds). |         |
| Connection  |                                                                    |         |

### Get Dispute {#getdispute}

Retrieves the dispute with the given ID.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |
| Dispute ID | The unique identifier of the dispute.                              |         |

### Get Invoice {#getinvoice}

Get the information and metadata of an invoice by Id

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Invoice ID | The unique identifier of the invoice.                              |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |

### Get Payment Intent {#getpaymentintent}

Retrieves the details of a PaymentIntent that has previously been created.

| Input         | Comments                                                                                              | Default |
| ------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Timeout       | The maximum time a client will await a response (in milliseconds).                                    |         |
| Connection    |                                                                                                       |         |
| Payment ID    | The ID of the PaymentIntent to retrieve.                                                              |         |
| Client Secret | The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source. |         |

### Get Price {#getprice}

Get the information and metadata of a price by Id

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Price Id   | The unique identifier of the price.                                |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |

### Get Product {#getproduct}

Get the information and metadata of a product by Id

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Product Id | The unique identifier of the product.                              |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |

### Get Subscriptions {#getsubscription}

Get the information and metadata of a subscription by Id

| Input           | Comments                                                           | Default |
| --------------- | ------------------------------------------------------------------ | ------- |
| Subscription Id | The unique identifier of the subscription.                         |         |
| Timeout         | The maximum time a client will await a response (in milliseconds). |         |
| Connection      |                                                                    |         |

### Get Webhook {#getwebhook}

Retrieves a webhook by ID

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Webhook ID | The unique identifier of the webhook.                              |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection |                                                                    |         |

### List Accounts {#listaccounts}

Returns a list of accounts connected to your platform

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                        |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Balance Transactions {#listbalancetransactions}

Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth).

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                                  |         |
| Created        | A filter on the list based on the object created field.                                                                                                                                                                                                                                             |         |
| Currency       | Only return transactions in a certain currency. Three-letter ISO currency code, in lowercase. Must be a supported currency.                                                                                                                                                                         |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                            |         |
| Source         | Only returns the original transaction.                                                                                                                                                                                                                                                              |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |

### List Cards {#listcards}

Returns a list of cards connected to your platform

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                                  |         |
| Customer Id    | The unique identifier of the customer.                                                                                                                                                                                                                                                              |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                            |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |

### List Charges {#listcharges}

Returns a list of all charges

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                        |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Checkout Session Line Items {#listcheckoutsessionlineitems}

List all Stripe Checkout Session Line Items

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Session ID     | The ID of the checkout session to expire.                                                                                                                                                                                                                                                           |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                            |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                                  |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |

### List Checkout Sessions {#listcheckoutsessions}

List all Stripe Checkout Sessions

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All      | When true, will retrieve all results.                                                                                                                                                                                                                                                               | false   |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                            |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                                  |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |

### List Customers {#listcustomers}

Returns a list of customers

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                        |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Disputes {#listdisputes}

Returns a list of your disputes.

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                                  |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                            |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Charge         | Only return disputes associated to the charge specified by this charge ID.                                                                                                                                                                                                                          |         |
| Payment Intent | Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.                                                                                                                                                                                                      |         |
| Created        | A filter on the list based on the object created field.                                                                                                                                                                                                                                             |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |

### List Invoices {#listinvoices}

Returns a list of invoices connected to your platform

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                        |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Payment Intents {#listpaymentintents}

Returns a list of PaymentIntents.

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                                  |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |
| Customer       | Only return PaymentIntents for the customer specified by this customer ID.                                                                                                                                                                                                                          |         |
| Created        | A filter on the list based on the object created field.                                                                                                                                                                                                                                             |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                            |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |

### List Prices {#listprices}

Returns a list of all available prices

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                        |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Products {#listproducts}

Returns a list of products connected to your platform

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                        |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Subscriptions {#listsubscriptions}

Returns a list of subscriptions

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                        |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Webhooks {#listwebhooks}

List all webhooks

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All      | When true, will retrieve all results.                                                                                                                                                                                                                                                               | false   |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                                            |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                                  |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Stripe

| Input                   | Comments                                                                                                                                                                                               | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                        |         |
| URL                     | Input the path only (/products), The base URL is already included (https://api.stripe.com/v1). For example, to connect to https://api.stripe.com/v1/products, only /products is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                              |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                   |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                       |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                 |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                    |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                            |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                               | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                    |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                   | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                    | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.       | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                    | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                          | false   |

### Search Charges {#searchcharges}

Search for charges you've previously created using Stripe's Search Query Language.

| Input      | Comments                                                                                                                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds).                                                                                                                               |         |
| Connection |                                                                                                                                                                                                  |         |
| Query      | The search query string.                                                                                                                                                                         |         |
| Limit      | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.                                                                                       |         |
| Page       | A cursor for pagination across multiple pages of results. Don’t include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results. |         |

### Search Payment Intent {#searchpaymentintent}

Search for PaymentIntents you’ve previously created using Stripe’s Search Query Language.

| Input      | Comments                                                                                                                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds).                                                                                                                               |         |
| Connection |                                                                                                                                                                                                  |         |
| Query      | The search query string.                                                                                                                                                                         |         |
| Limit      | The maximum number of results to return.                                                                                                                                                         |         |
| Page       | A cursor for pagination across multiple pages of results. Don’t include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results. |         |

### Update Card {#updatecard}

Create a new card by Id

| Input                  | Comments                                                                                                                                                                                                                | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer Id            | The unique identifier of the customer.                                                                                                                                                                                  |         |
| Card Number            | The card number.                                                                                                                                                                                                        |         |
| Expiration Month       | The expiration month of the card.                                                                                                                                                                                       |         |
| Expiration Year        | The expiration year of the card.                                                                                                                                                                                        |         |
| CVC                    | The CVC security code on the back of the card.                                                                                                                                                                          |         |
| Billing Street Address | The street address for the billing information.                                                                                                                                                                         |         |
| Billing Address 2      | Additional address information for the billing address (optional).                                                                                                                                                      |         |
| Billing City           | The city for the billing address.                                                                                                                                                                                       |         |
| Billing Country        | The country for the billing address (two-letter ISO country code).                                                                                                                                                      |         |
| Billing Postal Code    | The postal code for the billing address.                                                                                                                                                                                |         |
| Billing State          | The state for the billing address.                                                                                                                                                                                      |         |
| Billing Email          | The email address for the billing contact.                                                                                                                                                                              |         |
| Full Name              | The full name for the billing contact.                                                                                                                                                                                  |         |
| Billing Phone          | The phone number for the billing contact.                                                                                                                                                                               |         |
| Metadata               | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Connection             |                                                                                                                                                                                                                         |         |
| Timeout                | The maximum time a client will await a response (in milliseconds).                                                                                                                                                      |         |

### Update Charge {#updatecharge}

Updates the specified charge by setting the values of the parameters passed.

| Input          | Comments                                                                                                                                                                                                                | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                      |         |
| Connection     |                                                                                                                                                                                                                         |         |
| Charge ID      | The unique identifier of the charge.                                                                                                                                                                                    |         |
| Customer       | The ID of an existing customer that will be associated with this request.                                                                                                                                               |         |
| Description    | An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge                                                                                             |         |
| Metadata       | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Receipt Email  | This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.                                                     |         |
| Shipping       | Shipping information for the charge. Helps prevent fraud on charges for physical goods.                                                                                                                                 |         |
| Fraud Details  | A set of key-value pairs you can attach to a charge giving information about its riskiness.                                                                                                                             |         |
| Transfer Group | A string that identifies this transaction as part of a group.                                                                                                                                                           |         |

### Update Checkout Session {#updatecheckoutsession}

Update a Stripe Checkout Session

| Input      | Comments                                                                                                                                                                                                                | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Session ID | The ID of the checkout session to expire.                                                                                                                                                                               |         |
| Metadata   | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Timeout    | The maximum time a client will await a response (in milliseconds).                                                                                                                                                      |         |
| Connection |                                                                                                                                                                                                                         |         |

### Update Customer {#updatecustomer}

Create a new customer object

| Input          | Comments                                                                                                                                                                                                                                  | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer Id    | The unique identifier of the customer.                                                                                                                                                                                                    |         |
| Name           | The name of the customer.                                                                                                                                                                                                                 |         |
| Phone          | The phone number of the customer.                                                                                                                                                                                                         |         |
| Address Line 1 | The street address of the customer.                                                                                                                                                                                                       |         |
| Address Line 2 | Additional address information for the customer (optional).                                                                                                                                                                               |         |
| City           | The city of the customer.                                                                                                                                                                                                                 |         |
| Country        | The country of the customer (two-letter ISO country code).                                                                                                                                                                                |         |
| Postal Code    | The postal code of the customer.                                                                                                                                                                                                          |         |
| State          | The state of the customer.                                                                                                                                                                                                                |         |
| Balance        | The balance of the customer in cents (e.g., 5000 = $50.00).                                                                                                                                                                               |         |
| Description    | A description of the customer.                                                                                                                                                                                                            |         |
| Email          | The email address of the customer.                                                                                                                                                                                                        |         |
| Values         | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Metadata       | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.                                                                                   |         |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                        |         |
| Connection     |                                                                                                                                                                                                                                           |         |

### Update Dispute {#updatedispute}

When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence to help us resolve the dispute in your favor.

| Input      | Comments                                                                                                                                                                                                                | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds).                                                                                                                                                      |         |
| Connection |                                                                                                                                                                                                                         |         |
| Dispute ID | The unique identifier of the dispute.                                                                                                                                                                                   |         |
| Evidence   | Evidence to upload to respond to a dispute.                                                                                                                                                                             |         |
| Metadata   | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Submit     | Whether to immediately submit evidence to the bank.                                                                                                                                                                     |         |

### Update Invoice {#updateinvoice}

Update an existing invoice

| Input                  | Comments                                                                                                                                                                                                                                  | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Invoice ID             | The unique identifier of the invoice.                                                                                                                                                                                                     |         |
| Customer Id            | The unique identifier of the customer.                                                                                                                                                                                                    |         |
| Payment Method Id      | The unique identifier of the payment method.                                                                                                                                                                                              |         |
| Auto Advance           | When true, Stripe will automatically attempt collection of the invoice.                                                                                                                                                                   | false   |
| Application Fee Amount | The application fee amount in cents. Only applicable when collection method is 'Charge Automatically'.                                                                                                                                    |         |
| Collection Method      | The collection method for the invoice.                                                                                                                                                                                                    |         |
| Coupon                 | The unique identifier of the coupon to apply to the invoice.                                                                                                                                                                              |         |
| Discount               | The discount ID to apply to the invoice.                                                                                                                                                                                                  |         |
| Description            | A description of the invoice.                                                                                                                                                                                                             |         |
| Due Date               | The due date of the invoice as a Unix timestamp.                                                                                                                                                                                          |         |
| Values                 | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Metadata               | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Timeout                | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                        |         |
| Connection             |                                                                                                                                                                                                                                           |         |

### Update Payment Intent {#updatepaymentintent}

Updates properties on a PaymentIntent object without confirming.

| Input                       | Comments                                                                                                                                                                                                                | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Payment Intent ID           | The ID of the Payment Intent.                                                                                                                                                                                           |         |
| Timeout                     | The maximum time a client will await a response (in milliseconds).                                                                                                                                                      |         |
| Connection                  |                                                                                                                                                                                                                         |         |
| Amount                      | Amount intended to be collected in cents (e.g., 2000 = $20.00).                                                                                                                                                         |         |
| Currency                    | Three-letter ISO currency code in lowercase (e.g., usd, eur, gbp).                                                                                                                                                      |         |
| Customer                    | ID of the Customer this PaymentIntent belongs to, if one exists.                                                                                                                                                        |         |
| Description                 | An arbitrary string attached to the object. Often useful for displaying to users.                                                                                                                                       |         |
| Metadata                    | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Payment Method              | ID of the payment method (a PaymentMethod, Card, or compatible Source object) to attach to this PaymentIntent.                                                                                                          |         |
| Receipt Email               | Email address that the receipt for the resulting payment will be sent to.                                                                                                                                               |         |
| Setup Future Usage          | Indicates that you intend to make future payments with this PaymentIntent’s payment method.                                                                                                                             |         |
| Shipping                    | Shipping information for this PaymentIntent.                                                                                                                                                                            |         |
| Statement Descriptor        | For non-card charges, you can use this value as the complete description that appears on your customers’ statements.                                                                                                    |         |
| Statement Descriptor Suffix | Provides information about a card payment that customers see on their statements.                                                                                                                                       |         |
| Application Fee Amount      | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner’s Stripe account.                                                               |         |
| Capture Method              | Controls when the funds will be captured from the customer’s account.                                                                                                                                                   |         |
| Payment Method Data         | If provided, this hash will be used to create a PaymentMethod.                                                                                                                                                          |         |
| Payment Method Options      | Payment-method-specific configuration for this PaymentIntent.                                                                                                                                                           |         |
| Payment Method Types        | The list of payment method types that this PaymentIntent is allowed to use.                                                                                                                                             |         |
| Transfer Data               | The parameters used to automatically create a Transfer when the payment succeeds.                                                                                                                                       |         |
| Transfer Group              | A string that identifies the resulting payment as part of a group.                                                                                                                                                      |         |

### Update Price {#updateprice}

Update an existing price by Id

| Input      | Comments                                                                                                                                                                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Price Id   | The unique identifier of the price.                                                                                                                                                                                                       |         |
| Active     | When true, the object is currently active in your platform.                                                                                                                                                                               | false   |
| Nickname   | A brief description of the price, hidden from customers.                                                                                                                                                                                  |         |
| Values     | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Metadata   | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Timeout    | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                        |         |
| Connection |                                                                                                                                                                                                                                           |         |

### Update Product {#updateproduct}

Update an existing product

| Input           | Comments                                                                                                                                                                                                                                  | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Id      | The unique identifier of the product.                                                                                                                                                                                                     |         |
| Product Name    | The name of the product.                                                                                                                                                                                                                  |         |
| Product URL     | A URL of a publicly-accessible webpage for this product. May only be set if type=good.                                                                                                                                                    |         |
| Shippable       | When true, this product can be shipped (i.e., physical goods).                                                                                                                                                                            | false   |
| Active          | When true, the object is currently active in your platform.                                                                                                                                                                               | false   |
| Description     | A description of the invoice.                                                                                                                                                                                                             |         |
| Product Images  | For each list item, provide a URL for the image of the product.                                                                                                                                                                           |         |
| Metadata        | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Values          | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Product Caption | (DEPRECATED) A short one-line description of the product, meant to be displayable to the customer. May only be set if type=good.                                                                                                          |         |
| Timeout         | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                        |         |
| Connection      |                                                                                                                                                                                                                                           |         |

### Update Subscription {#updatesubscription}

Update an existing subscription

| Input             | Comments                                                                                                                                                                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Subscription Id   | The unique identifier of the subscription.                                                                                                                                                                                                |         |
| Price Id          | The unique identifier of the price.                                                                                                                                                                                                       |         |
| Quantity          | The quantity of items in the subscription.                                                                                                                                                                                                |         |
| Collection Method | The collection method for the invoice.                                                                                                                                                                                                    |         |
| Cancel At         | A Unix timestamp at which the subscription should cancel. If set before the current period ends, this may cause a proration if enabled.                                                                                                   |         |
| Values            | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Metadata          | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Coupon            | (DEPRECATED) The unique identifier of the coupon to apply to the invoice.                                                                                                                                                                 |         |
| Timeout           | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                        |         |
| Connection        |                                                                                                                                                                                                                                           |         |

### Update Webhook {#updatewebhook}

Update a webhook by ID

| Input          | Comments                                                           | Default |
| -------------- | ------------------------------------------------------------------ | ------- |
| Webhook ID     | The ID of the webhook to update                                    |         |
| Webhook URL    | The URL the webhook will send requests to                          |         |
| Webhook Events | The events the webhook will listen for                             |         |
| Timeout        | The maximum time a client will await a response (in milliseconds). |         |
| Connection     |                                                                    |         |
