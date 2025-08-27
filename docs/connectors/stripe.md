---
title: Stripe Connector
sidebar_label: Stripe
description: Manage objects connected to your Stripe platform
---

![Stripe](./assets/stripe.png#connector-icon)
Manage objects connected to your Stripe platform

## Connections

### Stripe Connection

Authenticate requests to Stripe using an API Key

The **Stripe** component uses API keys to authenticate requests. You can view and manage your API keys in the Stripe Dashboard. For information on obtaining an API key from Stripe, refer to the [docs](https://stripe.com/docs/api/authentication)

| Input   | Comments                                | Default |
| ------- | --------------------------------------- | ------- |
| API Key | Provide a string value for the API Key. |         |

## Triggers

### Instance Webhooks

Automatically manages Stripe webhook subscriptions for your instance. On instance deploy, this trigger creates a webhook endpoint in Stripe (or reuses an existing one with matching URL and events). On instance deletion, it removes the webhook. The trigger validates incoming webhook signatures and handles all webhook lifecycle management automatically. Note: Webhooks are created/updated each time an instance is deployed or reconfigured.

| Input                      | Comments                                                                                                                                                 | Default |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Webhook Events             | For each item, provide a string value that represents which event you want to track. For more information, see https://docs.stripe.com/api/events/types. |         |
| Connection                 |                                                                                                                                                          |         |
| Disable Webhook Validation | When set to true, webhook signature validation will be skipped. This is useful for manually testing the trigger without needing a signed request.        | false   |

### Webhook (Deprecated)

Receive and validate webhook requests from Stripe for webhooks you configure.

## Actions

### Attach Card

Attach a card to a customer

| Input             | Comments                                                      | Default |
| ----------------- | ------------------------------------------------------------- | ------- |
| Payment Method Id | Provide a value for the unique identifier of the payment.     |         |
| Customer Id       | Provide a string value for unique identifier of the customer. |         |
| Timeout           | The maximum time a client will await a response.              |         |
| Connection        |                                                               |         |

### Cancel Payment Intent

A PaymentIntent object can be canceled when it is in one of these statuses: requires_payment_method, requires_capture, requires_confirmation, requires_action or, in rare cases, processing.

| Input               | Comments                                         | Default |
| ------------------- | ------------------------------------------------ | ------- |
| Timeout             | The maximum time a client will await a response. |         |
| Connection          |                                                  |         |
| Payment Intent ID   | The ID of the Payment Intent.                    |         |
| Cancellation Reason | The reason for cancelling the Payment Intent.    |         |

### Capture Payment Intent

Capture the funds of an existing uncaptured PaymentIntent when its status is requires_capture.

| Input                       | Comments                                                                                                                                                                                                                | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout                     | The maximum time a client will await a response.                                                                                                                                                                        |         |
| Connection                  |                                                                                                                                                                                                                         |         |
| Payment Intent ID           | The ID of the Payment Intent.                                                                                                                                                                                           |         |
| Amount to Capture           | The amount to capture from the PaymentIntent, which must be less than or equal to the original amount.                                                                                                                  |         |
| Metadata                    | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Application Fee Amount      | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner’s Stripe account.                                                               |         |
| Statement Descriptor        | For non-card charges, you can use this value as the complete description that appears on your customers’ statements.                                                                                                    |         |
| Statement Descriptor Suffix | Provides information about a card payment that customers see on their statements.                                                                                                                                       |         |
| Transfer Data               | The parameters used to automatically create a Transfer when the payment is captured.                                                                                                                                    |         |

### Close Dispute

Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response. |         |
| Connection |                                                  |         |
| Dispute ID | The ID of the dispute.                           |         |

### Confirm Payment Intent

Confirm that your customer intends to pay with current or provided payment method.

| Input                    | Comments                                                                                                                                                            | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout                  | The maximum time a client will await a response.                                                                                                                    |         |
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

### Create Card

Create a new card

| Input                  | Comments                                                                                                                                                                                                                | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer Id            | Provide a string value for unique identifier of the customer.                                                                                                                                                           |         |
| Card Number            | Provide a value for the number of the card.                                                                                                                                                                             |         |
| Expiration Month       | Provide a value for the expiration month of the card.                                                                                                                                                                   |         |
| Expiration Year        | Provide a value for the expiration year of the card.                                                                                                                                                                    |         |
| CVC                    | Provide a value for the CVC on the back of the card.                                                                                                                                                                    |         |
| Billing Street Address | Provide a value for the street address of the billing information                                                                                                                                                       |         |
| Billing Address 2      | Provide a value for the optional second address field of the billing information                                                                                                                                        |         |
| Billing City           | Provide a value for the city of the billing information                                                                                                                                                                 |         |
| Billing Country        | Provide a value for the country of the billing information                                                                                                                                                              |         |
| Billing Postal Code    | Provide a value for the postal code of the billing information                                                                                                                                                          |         |
| Billing State          | Provide a value for the state of the billing information                                                                                                                                                                |         |
| Billing State          | Provide a value for the email of the billing information                                                                                                                                                                |         |
| Full Name              | Provide a value for the name of the billing information                                                                                                                                                                 |         |
| Billing State          | Provide a value for the phone of the billing information                                                                                                                                                                |         |
| Metadata               | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Timeout                | The maximum time a client will await a response.                                                                                                                                                                        |         |
| Connection             |                                                                                                                                                                                                                         |         |

### Create Checkout Session

Create a new Stripe Checkout Session

| Input               | Comments                                                                                                                                                                  | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Mode                | The mode of the Checkout Session                                                                                                                                          | payment |
| Line Items          | JSON array of line items to be purchased.                                                                                                                                 |         |
| Email               | The email of the customer to create the checkout session for.                                                                                                             |         |
| Customer Id         | The ID of the customer to create the checkout session for.                                                                                                                |         |
| Client Reference ID | A unique string to reference the Checkout Session. This can be a customer ID, a cart ID, or similar, and can be used to reconcile the session with your internal systems. |         |
| Success URL         | The URL the customer will be directed to after the payment is successful                                                                                                  |         |
| Cancel URL          | The URL the customer will be directed to if they decide to cancel payment                                                                                                 |         |
| Body Params         | More parameters to pass to the request.                                                                                                                                   |         |
| Timeout             | The maximum time a client will await a response.                                                                                                                          |         |
| Connection          |                                                                                                                                                                           |         |

### Create Customer

Create a new customer object

| Input                     | Comments                                                                                                                                                | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Name                      | provide a string value for the name of the customer.                                                                                                    |         |
| Phone                     | The maximum time a client will await a response.                                                                                                        |         |
| Address Line 1            | Provide a string value for street address of the customer.                                                                                              |         |
| Address Line 2            | Provide a string value for street address of the customer.                                                                                              |         |
| City                      | Provide a string value for city of the customer.                                                                                                        |         |
| Country                   | Provide a string value for country of the customer.                                                                                                     |         |
| Postal Code               | Provide a string value for postal code of the customer.                                                                                                 |         |
| State                     | Provide a string value for state of the customer.                                                                                                       |         |
| Balance                   | Provide a number value for balance of the customer.                                                                                                     |         |
| Default Payment Method Id | Provide the unique identifier of the customer's default payment method.                                                                                 |         |
| Description               | Provide a string value for description of the customer.                                                                                                 |         |
| Email                     | Provide a string value for email of the customer.                                                                                                       |         |
| Metadata                  | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |         |
| Timeout                   | The maximum time a client will await a response.                                                                                                        |         |
| Connection                |                                                                                                                                                         |         |

### Create Invoice

Create a new invoice

| Input             | Comments                                                                                                                                                                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout           | The maximum time a client will await a response.                                                                                                                                                                                          |         |
| Customer Id       | Provide a string value for unique identifier of the customer.                                                                                                                                                                             |         |
| Collection Method | Provide a value for the collection method of the invoice.                                                                                                                                                                                 |         |
| Payment Method Id | Provide a value for the unique identifier of the payment.                                                                                                                                                                                 |         |
| Auto Advance      | Controls whether Stripe will perform automatic collection of the invoice.                                                                                                                                                                 | false   |
| Values            | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Subscription Id   | Provide a string value for unique identifier of the subscription.                                                                                                                                                                         |         |
| Description       | Provide a value for the description of the invoice.                                                                                                                                                                                       |         |
| Metadata          | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Due Date          | Provide a unix timestamp value for the due date of the invoice.                                                                                                                                                                           |         |
| Connection        |                                                                                                                                                                                                                                           |         |

### Create Payment Intent

Creates a PaymentIntent object.

| Input                       | Comments                                                                                                                                                                                                                | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout                     | The maximum time a client will await a response.                                                                                                                                                                        |         |
| Connection                  |                                                                                                                                                                                                                         |         |
| Amount                      | Amount intended to be collected by this PaymentIntent.                                                                                                                                                                  |         |
| Currency                    | Three-letter ISO currency code, in lowercase. Must be a supported currency.                                                                                                                                             |         |
| Automatic Payment Methods   | When enabled, this PaymentIntent will accept payment methods that you have enabled in the Dashboard and are compatible with this PaymentIntent’s other parameters.                                                      |         |
| Confirm                     | Set to true to attempt to confirm this PaymentIntent immediately.                                                                                                                                                       | false   |
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
| Transfer Data               | The parameters used to automatically create a Transfer when the payment succeeds                                                                                                                                        |         |
| Transfer Group              | A string that identifies the resulting payment as part of a group.                                                                                                                                                      |         |
| Use Stripe SDK              | Set to true when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.                                                                                               |         |

### Create Price

Create a new price

| Input             | Comments                                                                                                                                                                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Id        | Provide a string value for the unique identifier of the product                                                                                                                                                                           |         |
| Currency          | Three-letter ISO currency code, in lowercase. Must be a supported currency.                                                                                                                                                               |         |
| Unit Price        | Provide a value for the price per unit.                                                                                                                                                                                                   |         |
| Active            | This flag will specify if the object is currently active in your platform.                                                                                                                                                                | false   |
| Nickname          | A brief description of the price, hidden from customers.                                                                                                                                                                                  |         |
| RecurringInterval | Provide a value that specifies billing frequency.                                                                                                                                                                                         |         |
| Values            | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Metadata          | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Timeout           | The maximum time a client will await a response.                                                                                                                                                                                          |         |
| Connection        |                                                                                                                                                                                                                                           |         |

### Create Product

Create a new product

| Input           | Comments                                                                                                                                                                                                                                  | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Name    | Provide a string value for the name of the product                                                                                                                                                                                        |         |
| Product Type    | Provide a string value for the type of the product                                                                                                                                                                                        |         |
| Product URL     | A URL of a publicly-accessible webpage for this product. May only be set if type=good.                                                                                                                                                    |         |
| Shippable       | Whether this product is able to be shipped (i.e., physical goods).                                                                                                                                                                        | false   |
| Active          | This flag will specify if the object is currently active in your platform.                                                                                                                                                                | false   |
| Description     | Provide a value for the description of the invoice.                                                                                                                                                                                       |         |
| Product Images  | For each list item, provide a URL for the image of the product                                                                                                                                                                            |         |
| Metadata        | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Values          | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Product Caption | (DEPRECATED) A short one-line description of the product, meant to be displayable to the customer. May only be set if type=good.                                                                                                          |         |
| Timeout         | The maximum time a client will await a response.                                                                                                                                                                                          |         |
| Connection      |                                                                                                                                                                                                                                           |         |

### Create Subscription

Create a new subscription

| Input             | Comments                                                                                                                                                                                                                                                                       | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Customer Id       | Provide a string value for unique identifier of the customer.                                                                                                                                                                                                                  |         |
| Price Id          | Provide a value for the unique identifier of the price.                                                                                                                                                                                                                        |         |
| Collection Method | Provide a value for the collection method of the invoice.                                                                                                                                                                                                                      |         |
| Quantity          | Provide a string value for quantity of the items in the subscription.                                                                                                                                                                                                          |         |
| Payment Method Id | Provide a value for the unique identifier of the payment.                                                                                                                                                                                                                      |         |
| Cancel At         | A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using proration_behavior. If set during a future period, this will always cause a proration for that period. |         |
| Days Until Due    | Provide a value for the days until the payment is due                                                                                                                                                                                                                          |         |
| Values            | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value.                                      |         |
| Metadata          | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                                                        |         |
| Coupon            | (DEPRECATED) Provide a value for the unique identifier of the coupon for the invoice.                                                                                                                                                                                          |         |
| Timeout           | The maximum time a client will await a response.                                                                                                                                                                                                                               |         |
| Connection        |                                                                                                                                                                                                                                                                                |         |

### Create Webhook

Create a new webhook

| Input          | Comments                                                                                                                                                 | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Webhook URL    | Provide a valid URL representing where the request will be sent.                                                                                         |         |
| Webhook Events | For each item, provide a string value that represents which event you want to track. For more information, see https://docs.stripe.com/api/events/types. |         |
| Timeout        | The maximum time a client will await a response.                                                                                                         |         |
| Connection     |                                                                                                                                                          |         |

### Delete All Instanced Webhooks

Delete all the webhooks associated to each flow of the instance.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response. |         |
| Connection |                                                  |         |

### Delete Customer

Permanently deletes a customer, Also immediately cancels any active subscriptions on the customer.

| Input       | Comments                                                      | Default |
| ----------- | ------------------------------------------------------------- | ------- |
| Customer Id | Provide a string value for unique identifier of the customer. |         |
| Timeout     | The maximum time a client will await a response.              |         |
| Connection  |                                                               |         |

### Delete Invoice

Delete an existing invoice

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| invoiceId  | Provide a value for the unique identifier of the invoice. |         |
| Timeout    | The maximum time a client will await a response.          |         |
| Connection |                                                           |         |

### Delete Product

Delete an existing product by Id

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| Product Id | Provide a string value for the unique identifier of the product |         |
| Timeout    | The maximum time a client will await a response.                |         |
| Connection |                                                                 |         |

### Delete Subscription

Delete a subscription by Id

| Input           | Comments                                                          | Default |
| --------------- | ----------------------------------------------------------------- | ------- |
| Subscription Id | Provide a string value for unique identifier of the subscription. |         |
| Timeout         | The maximum time a client will await a response.                  |         |
| Connection      |                                                                   |         |

### Delete Webhook

Deletes a webhook by ID

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Webhook ID | The ID of the webhook to delete                  |         |
| Timeout    | The maximum time a client will await a response. |         |
| Connection |                                                  |         |

### Detach Card

Detach a card from a customer

| Input             | Comments                                                  | Default |
| ----------------- | --------------------------------------------------------- | ------- |
| Timeout           | The maximum time a client will await a response.          |         |
| Payment Method Id | Provide a value for the unique identifier of the payment. |         |
| Connection        |                                                           |         |

### Expire Checkout Session

Expire a Stripe Checkout Session

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Session ID | The ID of the checkout session to expire         |         |
| Timeout    | The maximum time a client will await a response. |         |
| Connection |                                                  |         |

### Get Balance Transaction

Retrieves the balance transaction with the given ID.

| Input                  | Comments                                                              | Default |
| ---------------------- | --------------------------------------------------------------------- | ------- |
| Timeout                | The maximum time a client will await a response.                      |         |
| Connection             |                                                                       |         |
| Balance Transaction ID | Provide a value for the unique identifier of the balance transaction. |         |

### Get Card

Get the information and metadata of a card by Id

| Input             | Comments                                                  | Default |
| ----------------- | --------------------------------------------------------- | ------- |
| Timeout           | The maximum time a client will await a response.          |         |
| Payment Method Id | Provide a value for the unique identifier of the payment. |         |
| Connection        |                                                           |         |

### Get Charge

Retrieves the details of a charge that has previously been created.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response. |         |
| Connection |                                                  |         |
| Charge ID  |                                                  |         |

### Get Checkout Session

Retrieve a Stripe Checkout Session

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Session ID | The ID of the checkout session to expire         |         |
| Timeout    | The maximum time a client will await a response. |         |
| Connection |                                                  |         |

### Get Customer

Retrieve the information and metadata of a customer by Id

| Input       | Comments                                                      | Default |
| ----------- | ------------------------------------------------------------- | ------- |
| Customer Id | Provide a string value for unique identifier of the customer. |         |
| Timeout     | The maximum time a client will await a response.              |         |
| Connection  |                                                               |         |

### Get Dispute

Retrieves the dispute with the given ID.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response. |         |
| Connection |                                                  |         |
| Dispute ID | The ID of the dispute.                           |         |

### Get Invoice

Get the information and metadata of an invoice by Id

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| invoiceId  | Provide a value for the unique identifier of the invoice. |         |
| Timeout    | The maximum time a client will await a response.          |         |
| Connection |                                                           |         |

### Get Payment Intent

Retrieves the details of a PaymentIntent that has previously been created.

| Input         | Comments                                                                                              | Default |
| ------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Timeout       | The maximum time a client will await a response.                                                      |         |
| Connection    |                                                                                                       |         |
| Payment ID    | The ID of the PaymentIntent to retrieve.                                                              |         |
| Client Secret | The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source. |         |

### Get Price

Get the information and metadata of a price by Id

| Input      | Comments                                                | Default |
| ---------- | ------------------------------------------------------- | ------- |
| Price Id   | Provide a value for the unique identifier of the price. |         |
| Timeout    | The maximum time a client will await a response.        |         |
| Connection |                                                         |         |

### Get Product

Get the information and metadata of a product by Id

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| Product Id | Provide a string value for the unique identifier of the product |         |
| Timeout    | The maximum time a client will await a response.                |         |
| Connection |                                                                 |         |

### Get Subscriptions

Get the information and metadata of a subscription by Id

| Input           | Comments                                                          | Default |
| --------------- | ----------------------------------------------------------------- | ------- |
| Subscription Id | Provide a string value for unique identifier of the subscription. |         |
| Timeout         | The maximum time a client will await a response.                  |         |
| Connection      |                                                                   |         |

### Get Webhook

Retrieves a webhook by ID

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Webhook ID | The ID of the webhook.                           |         |
| Timeout    | The maximum time a client will await a response. |         |
| Connection |                                                  |         |

### List Accounts

Returns a list of accounts connected to your platform

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Balance Transactions

Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth).

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                    |         |
| Created        | A filter on the list based on the object created field.                                                                                                                                                                                                                                             |         |
| Currency       | Only return transactions in a certain currency. Three-letter ISO currency code, in lowercase. Must be a supported currency.                                                                                                                                                                         |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                                   |         |
| Source         | Only returns the original transaction.                                                                                                                                                                                                                                                              |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |

### List Cards

Returns a list of cards connected to your platform

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                    |         |
| Customer Id    | Provide a string value for unique identifier of the customer.                                                                                                                                                                                                                                       |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                                   |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |

### List Charges

Returns a list of all charges

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Checkout Session Line Items

List all Stripe Checkout Session Line Items

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Session ID     | The ID of the checkout session to expire                                                                                                                                                                                                                                                            |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                    |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |

### List Checkout Sessions

List all Stripe Checkout Sessions

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All      | When true, will retrieve all results.                                                                                                                                                                                                                                                               | false   |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                    |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |

### List Customers

Returns a list of customers

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Disputes

Returns a list of your disputes.

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                    |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Charge         | Only return disputes associated to the charge specified by this charge ID.                                                                                                                                                                                                                          |         |
| Payment Intent | Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.                                                                                                                                                                                                      |         |
| Created        | A filter on the list based on the object created field.                                                                                                                                                                                                                                             |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |

### List Invoices

Returns a list of invoices connected to your platform

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Payment Intents

Returns a list of PaymentIntents.

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                    |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |
| Customer       | Only return PaymentIntents for the customer specified by this customer ID.                                                                                                                                                                                                                          |         |
| Created        | A filter on the list based on the object created field.                                                                                                                                                                                                                                             |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |

### List Prices

Returns a list of all available prices

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Products

Returns a list of products connected to your platform

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Subscriptions

Returns a list of subscriptions

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                |         |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |         |
| Connection     |                                                                                                                                                                                                                                                                                                 |         |

### List Webhooks

List all webhooks

| Input          | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All      | When true, will retrieve all results.                                                                                                                                                                                                                                                               | false   |
| Limit          | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |         |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                                                                                    |         |
| Connection     |                                                                                                                                                                                                                                                                                                     |         |

### Raw Request

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

### Search Charges

Search for charges you've previously created using Stripe's Search Query Language.

| Input      | Comments                                                                                                                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response.                                                                                                                                                 |         |
| Connection |                                                                                                                                                                                                  |         |
| Query      | The search query string.                                                                                                                                                                         |         |
| Limit      | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.                                                                                       |         |
| Page       | A cursor for pagination across multiple pages of results. Don’t include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results. |         |

### Search Payment Intent

Search for PaymentIntents you’ve previously created using Stripe’s Search Query Language.

| Input      | Comments                                                                                                                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response.                                                                                                                                                 |         |
| Connection |                                                                                                                                                                                                  |         |
| Query      | The search query string.                                                                                                                                                                         |         |
| Limit      | Provide an integer value for the maximum amount of results that will be returned.                                                                                                                |         |
| Page       | A cursor for pagination across multiple pages of results. Don’t include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results. |         |

### Update Card

Create a new card by Id

| Input                  | Comments                                                                                                                                                                                                                | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer Id            | Provide a string value for unique identifier of the customer.                                                                                                                                                           |         |
| Card Number            | Provide a value for the number of the card.                                                                                                                                                                             |         |
| Expiration Month       | Provide a value for the expiration month of the card.                                                                                                                                                                   |         |
| Expiration Year        | Provide a value for the expiration year of the card.                                                                                                                                                                    |         |
| CVC                    | Provide a value for the CVC on the back of the card.                                                                                                                                                                    |         |
| Billing Street Address | Provide a value for the street address of the billing information                                                                                                                                                       |         |
| Billing Address 2      | Provide a value for the optional second address field of the billing information                                                                                                                                        |         |
| Billing City           | Provide a value for the city of the billing information                                                                                                                                                                 |         |
| Billing Country        | Provide a value for the country of the billing information                                                                                                                                                              |         |
| Billing Postal Code    | Provide a value for the postal code of the billing information                                                                                                                                                          |         |
| Billing State          | Provide a value for the state of the billing information                                                                                                                                                                |         |
| Billing State          | Provide a value for the email of the billing information                                                                                                                                                                |         |
| Full Name              | Provide a value for the name of the billing information                                                                                                                                                                 |         |
| Billing State          | Provide a value for the phone of the billing information                                                                                                                                                                |         |
| Metadata               | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Connection             |                                                                                                                                                                                                                         |         |
| Timeout                | The maximum time a client will await a response.                                                                                                                                                                        |         |

### Update Charge

Updates the specified charge by setting the values of the parameters passed.

| Input          | Comments                                                                                                                                                                                                                | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                        |         |
| Connection     |                                                                                                                                                                                                                         |         |
| Charge ID      |                                                                                                                                                                                                                         |         |
| Customer       | The ID of an existing customer that will be associated with this request.                                                                                                                                               |         |
| Description    | An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge                                                                                             |         |
| Metadata       | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Receipt Email  | This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.                                                     |         |
| Shipping       | Shipping information for the charge. Helps prevent fraud on charges for physical goods.                                                                                                                                 |         |
| Fraud Details  | A set of key-value pairs you can attach to a charge giving information about its riskiness.                                                                                                                             |         |
| Transfer Group | A string that identifies this transaction as part of a group.                                                                                                                                                           |         |

### Update Checkout Session

Update a Stripe Checkout Session

| Input      | Comments                                                                                                                                                                                                                | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Session ID | The ID of the checkout session to expire                                                                                                                                                                                |         |
| Metadata   | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Timeout    | The maximum time a client will await a response.                                                                                                                                                                        |         |
| Connection |                                                                                                                                                                                                                         |         |

### Update Customer

Create a new customer object

| Input          | Comments                                                                                                                                                                                                                                  | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer Id    | Provide a string value for unique identifier of the customer.                                                                                                                                                                             |         |
| Name           | provide a string value for the name of the customer.                                                                                                                                                                                      |         |
| Phone          | The maximum time a client will await a response.                                                                                                                                                                                          |         |
| Address Line 1 | Provide a string value for street address of the customer.                                                                                                                                                                                |         |
| Address Line 2 | Provide a string value for street address of the customer.                                                                                                                                                                                |         |
| City           | Provide a string value for city of the customer.                                                                                                                                                                                          |         |
| Country        | Provide a string value for country of the customer.                                                                                                                                                                                       |         |
| Postal Code    | Provide a string value for postal code of the customer.                                                                                                                                                                                   |         |
| State          | Provide a string value for state of the customer.                                                                                                                                                                                         |         |
| Balance        | Provide a number value for balance of the customer.                                                                                                                                                                                       |         |
| Description    | Provide a string value for description of the customer.                                                                                                                                                                                   |         |
| Email          | Provide a string value for email of the customer.                                                                                                                                                                                         |         |
| Values         | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Metadata       | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.                                                                                   |         |
| Timeout        | The maximum time a client will await a response.                                                                                                                                                                                          |         |
| Connection     |                                                                                                                                                                                                                                           |         |

### Update Dispute

When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence to help us resolve the dispute in your favor.

| Input      | Comments                                                                                                                                                                                                                | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout    | The maximum time a client will await a response.                                                                                                                                                                        |         |
| Connection |                                                                                                                                                                                                                         |         |
| Dispute ID | The ID of the dispute.                                                                                                                                                                                                  |         |
| Evidence   | Evidence to upload to respond to a dispute.                                                                                                                                                                             |         |
| Metadata   | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Submit     | Whether to immediately submit evidence to the bank.                                                                                                                                                                     |         |

### Update Invoice

Update an existing invoice

| Input                  | Comments                                                                                                                                                                                                                                  | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| invoiceId              | Provide a value for the unique identifier of the invoice.                                                                                                                                                                                 |         |
| Payment Method Id      | Provide a value for the unique identifier of the payment.                                                                                                                                                                                 |         |
| Auto Advance           | Controls whether Stripe will perform automatic collection of the invoice.                                                                                                                                                                 | false   |
| Application Fee Amount | Provide a value for the application fee of the invoice. You should only provide this value if you selected 'Charge Automatically' in the collection method input.                                                                         |         |
| Collection Method      | Provide a value for the collection method of the invoice.                                                                                                                                                                                 |         |
| Coupon                 | Provide a value for the unique identifier of the coupon for the invoice.                                                                                                                                                                  |         |
| Discount               | Provide a value for the discount of the invoice.                                                                                                                                                                                          |         |
| Description            | Provide a value for the description of the invoice.                                                                                                                                                                                       |         |
| Due Date               | Provide a unix timestamp value for the due date of the invoice.                                                                                                                                                                           |         |
| Values                 | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Metadata               | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Timeout                | The maximum time a client will await a response.                                                                                                                                                                                          |         |
| Connection             |                                                                                                                                                                                                                                           |         |

### Update Payment Intent

Updates properties on a PaymentIntent object without confirming.

| Input                       | Comments                                                                                                                                                                                                                | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Payment Intent ID           | The ID of the Payment Intent.                                                                                                                                                                                           |         |
| Timeout                     | The maximum time a client will await a response.                                                                                                                                                                        |         |
| Connection                  |                                                                                                                                                                                                                         |         |
| Amount                      | Amount intended to be collected by this PaymentIntent.                                                                                                                                                                  |         |
| Currency                    | Three-letter ISO currency code, in lowercase. Must be a supported currency.                                                                                                                                             |         |
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
| Transfer Data               | The parameters used to automatically create a Transfer when the payment succeeds                                                                                                                                        |         |
| Transfer Group              | A string that identifies the resulting payment as part of a group.                                                                                                                                                      |         |

### Update Price

Update an existing price by Id

| Input      | Comments                                                                                                                                                                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Price Id   | Provide a value for the unique identifier of the price.                                                                                                                                                                                   |         |
| Active     | This flag will specify if the object is currently active in your platform.                                                                                                                                                                | false   |
| Nickname   | A brief description of the price, hidden from customers.                                                                                                                                                                                  |         |
| Values     | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Metadata   | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Timeout    | The maximum time a client will await a response.                                                                                                                                                                                          |         |
| Connection |                                                                                                                                                                                                                                           |         |

### Update Product

Update an existing product

| Input           | Comments                                                                                                                                                                                                                                  | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Id      | Provide a string value for the unique identifier of the product                                                                                                                                                                           |         |
| Product Name    | Provide a string value for the name of the product                                                                                                                                                                                        |         |
| Product URL     | A URL of a publicly-accessible webpage for this product. May only be set if type=good.                                                                                                                                                    |         |
| Shippable       | Whether this product is able to be shipped (i.e., physical goods).                                                                                                                                                                        | false   |
| Active          | This flag will specify if the object is currently active in your platform.                                                                                                                                                                | false   |
| Description     | Provide a value for the description of the invoice.                                                                                                                                                                                       |         |
| Product Images  | For each list item, provide a URL for the image of the product                                                                                                                                                                            |         |
| Metadata        | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                   |         |
| Values          | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Product Caption | (DEPRECATED) A short one-line description of the product, meant to be displayable to the customer. May only be set if type=good.                                                                                                          |         |
| Timeout         | The maximum time a client will await a response.                                                                                                                                                                                          |         |
| Connection      |                                                                                                                                                                                                                                           |         |

### Update Subscription

Update an existing subscription

| Input             | Comments                                                                                                                                                                                                                                                                       | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Subscription Id   | Provide a string value for unique identifier of the subscription.                                                                                                                                                                                                              |         |
| Price Id          | Provide a value for the unique identifier of the price.                                                                                                                                                                                                                        |         |
| Quantity          | Provide a string value for quantity of the items in the subscription.                                                                                                                                                                                                          |         |
| Collection Method | Provide a value for the collection method of the invoice.                                                                                                                                                                                                                      |         |
| Cancel At         | A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using proration_behavior. If set during a future period, this will always cause a proration for that period. |         |
| Values            | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value.                                      |         |
| Metadata          | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                                                        |         |
| Coupon            | (DEPRECATED) Provide a value for the unique identifier of the coupon for the invoice.                                                                                                                                                                                          |         |
| Timeout           | The maximum time a client will await a response.                                                                                                                                                                                                                               |         |
| Connection        |                                                                                                                                                                                                                                                                                |         |

### Update Webhook

Update a webhook by ID

| Input          | Comments                                         | Default |
| -------------- | ------------------------------------------------ | ------- |
| Webhook ID     | The ID of the webhook to update                  |         |
| Webhook URL    | The URL the webhook will send requests to        |         |
| Webhook Events | The events the webhook will listen for           |         |
| Timeout        | The maximum time a client will await a response. |         |
| Connection     |                                                  |         |
