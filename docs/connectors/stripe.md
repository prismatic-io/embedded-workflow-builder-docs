---
title: Stripe Connector
sidebar_label: Stripe
description: Manage payments, customers, subscriptions, and other objects in the connected Stripe account.
---

![Stripe](./assets/stripe.png#connector-icon)
[Stripe](https://stripe.com/) is a payment processing platform for online businesses.
The **Stripe** component provides functionality for interacting with the Stripe API, including managing customers, payment intents, charges, invoices, products, prices, subscriptions, checkout sessions, disputes, and webhooks.

## API Documentation

This component was built using the [Stripe REST API Reference](https://docs.stripe.com/api).

## Connections

### API Key {#apikey}

Authenticate requests to Stripe using an API key.

To authenticate requests with Stripe, an API key is required. API keys are managed in the Stripe Dashboard. For background, refer to the [Stripe authentication documentation](https://docs.stripe.com/keys).

#### Prerequisites

- A Stripe account with access to the [API keys dashboard](https://dashboard.stripe.com/apikeys)

#### Setup Steps

1. Sign in to the [Stripe Dashboard](https://dashboard.stripe.com/) and navigate to **Developers > API keys**
2. Locate the desired secret key:
   - Use a test mode key (prefix `sk_test_`) for development and testing
   - Use a live mode key (prefix `sk_live_`) for production traffic
3. Click **Reveal test key** (or create a new restricted key as needed) and copy the key value

:::warning[Security Note]
Secret API keys grant full access to the Stripe account. Store them securely and never expose them in client-side code or version control.
:::

#### Configure the Connection

- Enter the secret key value into the **API Key** field

#### Verify Connection

Save the integration and run any Stripe action (such as **List Customers**) to confirm that the API key is valid.

| Input   | Comments                                                                                                                                                                                                                           | Default |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| API Key | The Stripe API Key from the Stripe Dashboard. Use a test key (sk_test_...) for development and a live key (sk_live_...) for production. Find the API key in the [Stripe API keys dashboard](https://dashboard.stripe.com/apikeys). |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for new and updated records in Stripe on a configured schedule. Events with a type ending in `.created` are partitioned into the `created` bucket; all other event types (such as `.updated`, `.deleted`, or `.succeeded`) are partitioned into the `updated` bucket.

| Input                | Comments                                                                                                                                                                               | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Stripe connection to use.                                                                                                                                                          |         |
| Event Types          | Stripe event types to poll for (e.g., `customer.created`, `invoice.paid`). Leave empty to include all event types. See [Stripe event types](https://docs.stripe.com/api/events/types). |         |
| Show New Records     | When enabled, events with type ending in `.created` are emitted in the `created` bucket of the payload.                                                                                | true    |
| Show Updated Records | When enabled, all other change events (e.g., `.updated`, `.deleted`, `.succeeded`) are emitted in the `updated` bucket of the payload.                                                 | true    |

### Webhook (Deprecated) {#webhook}

Receive and validate webhook requests from Stripe for configured webhooks.

### Webhook Events {#instancedeploywebhook}

Receive event notifications from Stripe. Automatically creates and manages a webhook subscription for the selected events when the instance is deployed, and removes the subscription when the instance is deleted. Incoming webhook signatures are validated by default.

| Input                      | Comments                                                                                                                                                                                                                                                                                                                                                        | Default |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Webhook Events             | For each item, provide a string value representing the event type to track. For more information, see [Stripe event types](https://docs.stripe.com/api/events/types).                                                                                                                                                                                           |         |
| Connection                 | The Stripe connection to use.                                                                                                                                                                                                                                                                                                                                   |         |
| Disable Webhook Validation | When true, webhook signature validation will be skipped. This is useful for manually testing the trigger without needing a signed request.                                                                                                                                                                                                                      | false   |
| Webhook Secret             | The signing secret used to verify incoming signatures. Leave empty to use the secret of the endpoint created when the instance was deployed. Supply it only when the deployment reused a pre-existing endpoint, since Stripe returns a signing secret only when an endpoint is created. The secret is available on the endpoint's page in the Stripe dashboard. |         |

## Actions

### Attach Card {#attachcard}

Attach a card to a customer.

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Customer ID       | The unique identifier for the customer.                            |         |
| Payment Method ID | The unique identifier for the payment method.                      |         |
| Timeout           | The maximum time a client will await a response (in milliseconds). |         |
| Connection        | The Stripe connection to use.                                      |         |

### Cancel Payment Intent {#cancelpaymentintent}

Cancel a payment intent. A payment intent can be canceled when it is in one of these statuses: requires_payment_method, requires_capture, requires_confirmation, requires_action, or, in rare cases, processing.

| Input               | Comments                                                           | Default |
| ------------------- | ------------------------------------------------------------------ | ------- |
| Timeout             | The maximum time a client will await a response (in milliseconds). |         |
| Connection          | The Stripe connection to use.                                      |         |
| Payment Intent ID   | The unique identifier for the Payment Intent.                      |         |
| Cancellation Reason | The reason for cancelling the Payment Intent.                      |         |

### Capture Payment Intent {#capturepaymentintent}

Capture the funds of an existing uncaptured payment intent when its status is requires_capture.

| Input                       | Comments                                                                                                                                                                                                                                           | Default |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout                     | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                 |         |
| Connection                  | The Stripe connection to use.                                                                                                                                                                                                                      |         |
| Payment Intent ID           | The unique identifier for the Payment Intent.                                                                                                                                                                                                      |         |
| Amount to Capture           | The amount to capture from the PaymentIntent, which must be less than or equal to the original amount. Enter a whole number in the currency's smallest unit (1000 is $10.00 in USD, ¥1000 in JPY).                                                 |         |
| Metadata                    | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                           |         |
| Additional Fields           | Additional optional fields: includes Application Fee Amount, Statement Descriptor, Statement Descriptor Suffix, and Transfer Data.                                                                                                                 |         |
| Application Fee Amount      | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner’s Stripe account. Enter a whole number in the currency's smallest unit (500 is $5.00 in USD, ¥500 in JPY). |         |
| Statement Descriptor        | For non-card charges, the complete description that appears on customer statements. Must be 5-22 characters and cannot use special characters `<`, `>`, `\`, `'`, `"`.                                                                             |         |
| Statement Descriptor Suffix | Information about a card payment that customers see on their statements, concatenated with the prefix (the account name) to form the full statement descriptor.                                                                                    |         |
| Transfer Data               | The parameters used to automatically create a Transfer when the payment is captured.                                                                                                                                                               |         |

### Close Dispute {#closedispute}

Close a dispute for a charge. Closing a dispute indicates that no evidence will be submitted and acknowledges the dispute as lost.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |
| Dispute ID | The unique identifier for the dispute.                             |         |

### Confirm Payment Intent {#confirmpaymentintent}

Confirm that the customer intends to pay with the current or provided payment method.

| Input                    | Comments                                                                                                                                                                                                           | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Timeout                  | The maximum time a client will await a response (in milliseconds).                                                                                                                                                 |         |
| Connection               | The Stripe connection to use.                                                                                                                                                                                      |         |
| Payment Intent ID        | The unique identifier for the Payment Intent.                                                                                                                                                                      |         |
| Payment Method           | ID of the payment method (a PaymentMethod, Card, or compatible Source object) to attach to this PaymentIntent.                                                                                                     |         |
| Receipt Email            | The email address that the receipt for the charge will be sent to. Updating this field triggers a new email receipt to the updated address.                                                                        |         |
| Capture Method           | Controls when the funds will be captured from the customer's account.                                                                                                                                              |         |
| Additional Fields        | Additional optional fields: includes Setup Future Usage, Error On Requires Action, Mandate, Mandate Data, Off Session, Payment Method Data, Payment Method Options, Radar Options, Return URL, and Use Stripe SDK. |         |
| Setup Future Usage       | Indicates the intent to make future payments with this PaymentIntent's payment method. Use `on_session` if the customer is present during the future payment, or `off_session` if not.                             |         |
| Error On Requires Action | Set to true to fail the payment attempt if the PaymentIntent transitions into requires_action.                                                                                                                     |         |
| Mandate                  | ID of the mandate to be used for this payment.                                                                                                                                                                     |         |
| Mandate Data             | This hash contains details about the Mandate to create.                                                                                                                                                            |         |
| Off Session              | Set to true to indicate that the customer is not in the checkout flow during this payment attempt and is therefore unable to authenticate.                                                                         |         |
| Payment Method Data      | If provided, this hash will be used to create a PaymentMethod.                                                                                                                                                     |         |
| Payment Method Options   | Payment-method-specific configuration for this PaymentIntent.                                                                                                                                                      |         |
| Radar Options            | Options to configure Radar.                                                                                                                                                                                        |         |
| Return URL               | The URL to redirect the customer back to after authenticating or cancelling payment on the payment method's app or site.                                                                                           |         |
| Use Stripe SDK           | Set to true when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.                                                                                          |         |

### Create Card {#createcard}

Create a new card for a customer.

| Input                      | Comments                                                                                                                                                                                                                 | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Customer ID                | The unique identifier for the customer.                                                                                                                                                                                  |         |
| Card Number                | The full credit or debit card number, with no spaces or dashes.                                                                                                                                                          |         |
| Expiration Month           | The two-digit expiration month of the card (01-12).                                                                                                                                                                      |         |
| Expiration Year            | The four-digit expiration year of the card.                                                                                                                                                                              |         |
| CVC                        | The card security code printed on the back of the card.                                                                                                                                                                  |         |
| Billing Address            | Billing street, city, state, postal code, and country.                                                                                                                                                                   |         |
| Street Address             | The first line of the card's billing address, typically the street number and name.                                                                                                                                      |         |
| Street Address Line 2      | Additional address information for the billing address (optional).                                                                                                                                                       |         |
| City                       | The city portion of the card's billing address, used for address verification.                                                                                                                                           |         |
| State/Province             | The state or province code for the billing address.                                                                                                                                                                      |         |
| Zip/Postal Code            | The postal or ZIP code portion of the card's billing address, used for address verification.                                                                                                                             |         |
| Country                    | The two-letter ISO country code for the billing address.                                                                                                                                                                 |         |
| Name & Contact Information | Full name, email, and phone contact details.                                                                                                                                                                             |         |
| Full Name                  | The cardholder name as it appears on the card, used for verification.                                                                                                                                                    |         |
| Email                      | The email address Stripe uses for billing receipts and correspondence about this card.                                                                                                                                   |         |
| Phone                      | The phone number associated with the billing contact, including country code.                                                                                                                                            |         |
| Metadata                   | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Timeout                    | The maximum time a client will await a response (in milliseconds).                                                                                                                                                       |         |
| Connection                 | The Stripe connection to use.                                                                                                                                                                                            |         |

### Create Checkout Session {#createcheckoutsession}

Create a new Stripe Checkout session.

| Input               | Comments                                                                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Mode                | The behavior of the Checkout Session: `payment` for one-time charges, `setup` to collect a payment method for future use, or `subscription` for recurring billing.   | payment |
| Line Items          | JSON array of line items to be purchased.                                                                                                                            |         |
| Email               | The email of the customer to create the checkout session for.                                                                                                        |         |
| Customer ID         | The ID of the customer to create the checkout session for.                                                                                                           |         |
| Client Reference ID | A unique string to reference the Checkout Session. This can be a customer ID, a cart ID, or similar, and can be used to reconcile the session with internal systems. |         |
| Success URL         | The URL the customer will be directed to after the payment is successful.                                                                                            |         |
| Cancel URL          | The URL the customer will be directed to if they decide to cancel payment.                                                                                           |         |
| Body Params         | More parameters to pass to the request.                                                                                                                              |         |
| Timeout             | The maximum time a client will await a response (in milliseconds).                                                                                                   |         |
| Connection          | The Stripe connection to use.                                                                                                                                        |         |

### Create Customer {#createcustomer}

Create a new customer.

| Input                      | Comments                                                                                                                                                    | Default |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Name & Contact Information | Full name, email, and phone contact details.                                                                                                                |         |
| Full Name                  | The customer's full name, displayed in the Stripe Dashboard and on receipts.                                                                                |         |
| Email                      | The customer's email address. Used for receipts, invoices, and other Stripe communications.                                                                 |         |
| Phone                      | The customer's phone number in E.164 format. Used for SMS receipts and Strong Customer Authentication.                                                      |         |
| Address                    | Street, city, state, postal code, and country.                                                                                                              |         |
| Street Address             | The first line of the customer's billing address, typically the street number and name.                                                                     |         |
| Street Address Line 2      | The second line of the customer's billing address, used for apartment, suite, or unit numbers.                                                              |         |
| City                       | The city portion of the customer's billing address.                                                                                                         |         |
| State/Province             | The state, province, or region code for the customer's billing address (e.g., `CA` for California).                                                         |         |
| Zip/Postal Code            | The postal or ZIP code portion of the customer's billing address.                                                                                           |         |
| Country                    | The two-letter ISO 3166-1 alpha-2 country code for the customer's billing address.                                                                          |         |
| Balance                    | The starting balance of the customer, as a whole number in the currency's smallest unit (5000 is $50.00 in USD, ¥5000 in JPY).                              |         |
| Default Payment Method ID  | The unique identifier of the customer's default payment method.                                                                                             |         |
| Description                | An arbitrary description of the customer for internal reference.                                                                                            |         |
| Metadata                   | Set of key-value pairs that can be attached to the customer. This can be useful for storing additional information about the object in a structured format. |         |
| Timeout                    | The maximum time a client will await a response (in milliseconds).                                                                                          |         |
| Connection                 | The Stripe connection to use.                                                                                                                               |         |

### Create Invoice {#createinvoice}

Create a new invoice.

| Input             | Comments                                                                                                                                                                                                                    | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout           | The maximum time a client will await a response (in milliseconds).                                                                                                                                                          |         |
| Customer ID       | The unique identifier for the customer.                                                                                                                                                                                     |         |
| Collection Method | The method used to collect payment for the invoice.                                                                                                                                                                         |         |
| Payment Method ID | The unique identifier for the payment method.                                                                                                                                                                               |         |
| Auto Advance      | When true, Stripe will automatically attempt collection of the invoice.                                                                                                                                                     | false   |
| Values            | The names of optional fields and their values to use when creating/updating a record. For example, if a custom configured field is not represented as an input, here its key can be specified along with an assigned value. |         |
| Subscription ID   | The unique identifier for the subscription.                                                                                                                                                                                 |         |
| Description       | An arbitrary description for the object, displayed in the Stripe Dashboard.                                                                                                                                                 |         |
| Metadata          | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.    |         |
| Due Date          | The due date of the invoice as a Unix timestamp.                                                                                                                                                                            |         |
| Connection        | The Stripe connection to use.                                                                                                                                                                                               |         |

### Create Payment Intent {#createpaymentintent}

Create a new payment intent.

| Input                       | Comments                                                                                                                                                                                                                                                                                                             | Default |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout                     | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                                                                   |         |
| Connection                  | The Stripe connection to use.                                                                                                                                                                                                                                                                                        |         |
| Amount                      | The amount intended to be collected, as a whole number in the currency's smallest unit (2000 is $20.00 in USD, ¥2000 in JPY).                                                                                                                                                                                        |         |
| Currency                    | The three-letter ISO currency code in lowercase (e.g., usd, eur, gbp).                                                                                                                                                                                                                                               |         |
| Automatic Payment Methods   | When enabled, the PaymentIntent will accept payment methods enabled in the Stripe Dashboard that are compatible with the PaymentIntent's other parameters.                                                                                                                                                           |         |
| Confirm                     | When true, attempts to confirm this PaymentIntent immediately.                                                                                                                                                                                                                                                       | false   |
| Customer ID                 | ID of the Customer this PaymentIntent belongs to, if one exists.                                                                                                                                                                                                                                                     |         |
| Description                 | An arbitrary string attached to the object. Often useful for displaying to users.                                                                                                                                                                                                                                    |         |
| Metadata                    | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                                                                                             |         |
| Payment Method              | ID of the payment method (a PaymentMethod, Card, or compatible Source object) to attach to this PaymentIntent.                                                                                                                                                                                                       |         |
| Receipt Email               | Email address that the receipt for the resulting payment will be sent to.                                                                                                                                                                                                                                            |         |
| Payment Method Types        | The list of payment method types that this PaymentIntent is allowed to use.                                                                                                                                                                                                                                          |         |
| Transfer Options            | Application fee, settlement account, transfer data, and transfer group for routing funds to connected accounts.                                                                                                                                                                                                      |         |
| Application Fee Amount      | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner’s Stripe account. Enter a whole number in the currency's smallest unit (500 is $5.00 in USD, ¥500 in JPY).                                                                   |         |
| On Behalf Of                | The Stripe account ID for which these funds are intended.                                                                                                                                                                                                                                                            |         |
| Transfer Data               | The parameters used to automatically create a Transfer when the payment succeeds.                                                                                                                                                                                                                                    |         |
| Transfer Group              | A string that identifies the resulting payment as part of a group.                                                                                                                                                                                                                                                   |         |
| Additional Fields           | Additional optional fields: includes Setup Future Usage, Shipping, Statement Descriptor, Statement Descriptor Suffix, Capture Method, Confirmation Method, Error On Requires Action, Mandate, Mandate Data, Off Session, Payment Method Data, Payment Method Options, Radar Options, Return URL, and Use Stripe SDK. |         |
| Setup Future Usage          | Indicates the intent to make future payments with this PaymentIntent's payment method. Use `on_session` if the customer is present during the future payment, or `off_session` if not.                                                                                                                               |         |
| Shipping                    | Shipping information for this PaymentIntent.                                                                                                                                                                                                                                                                         |         |
| Statement Descriptor        | For non-card charges, the complete description that appears on customer statements. Must be 5-22 characters and cannot use special characters `<`, `>`, `\`, `'`, `"`.                                                                                                                                               |         |
| Statement Descriptor Suffix | Information about a card payment that customers see on their statements, concatenated with the prefix (the account name) to form the full statement descriptor.                                                                                                                                                      |         |
| Capture Method              | Controls when the funds will be captured from the customer's account.                                                                                                                                                                                                                                                |         |
| Confirmation Method         | Controls how the PaymentIntent is confirmed: `automatic` confirms on the server immediately, `manual` requires explicit client-side confirmation.                                                                                                                                                                    |         |
| Error On Requires Action    | Set to true to fail the payment attempt if the PaymentIntent transitions into requires_action.                                                                                                                                                                                                                       |         |
| Mandate                     | ID of the mandate to be used for this payment.                                                                                                                                                                                                                                                                       |         |
| Mandate Data                | This hash contains details about the Mandate to create.                                                                                                                                                                                                                                                              |         |
| Off Session                 | Set to true to indicate that the customer is not in the checkout flow during this payment attempt and is therefore unable to authenticate.                                                                                                                                                                           |         |
| Payment Method Data         | If provided, this hash will be used to create a PaymentMethod.                                                                                                                                                                                                                                                       |         |
| Payment Method Options      | Payment-method-specific configuration for this PaymentIntent.                                                                                                                                                                                                                                                        |         |
| Radar Options               | Options to configure Radar.                                                                                                                                                                                                                                                                                          |         |
| Return URL                  | The URL to redirect the customer back to after authenticating or cancelling payment on the payment method's app or site.                                                                                                                                                                                             |         |
| Use Stripe SDK              | Set to true when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.                                                                                                                                                                                            |         |

### Create Price {#createprice}

Create a new price.

| Input              | Comments                                                                                                                                                                                                                    | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product ID         | The unique identifier for the product.                                                                                                                                                                                      |         |
| Currency           | The three-letter ISO currency code in lowercase (e.g., usd, eur, gbp).                                                                                                                                                      |         |
| Unit Price         | The price per unit, as a whole number in the currency's smallest unit (2000 is $20.00 in USD, ¥2000 in JPY).                                                                                                                |         |
| Active             | When true, the object is currently active and available on the platform.                                                                                                                                                    | false   |
| Nickname           | A brief description of the price, hidden from customers.                                                                                                                                                                    |         |
| Recurring Interval | The billing frequency for recurring charges.                                                                                                                                                                                |         |
| Values             | The names of optional fields and their values to use when creating/updating a record. For example, if a custom configured field is not represented as an input, here its key can be specified along with an assigned value. |         |
| Metadata           | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.    |         |
| Timeout            | The maximum time a client will await a response (in milliseconds).                                                                                                                                                          |         |
| Connection         | The Stripe connection to use.                                                                                                                                                                                               |         |

### Create Product {#createproduct}

Create a new product.

| Input          | Comments                                                                                                                                                                                                                    | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Name   | The display name shown to customers for the product.                                                                                                                                                                        |         |
| Product Type   | The category that classifies the product.                                                                                                                                                                                   |         |
| Product URL    | The URL of a publicly-accessible webpage for this product. May only be set if type=good.                                                                                                                                    |         |
| Shippable      | When true, this product can be shipped (i.e., physical goods).                                                                                                                                                              | false   |
| Active         | When true, the object is currently active and available on the platform.                                                                                                                                                    | false   |
| Description    | An arbitrary description for the object, displayed in the Stripe Dashboard.                                                                                                                                                 |         |
| Product Images | For each list item, provide a URL for the image of the product.                                                                                                                                                             |         |
| Metadata       | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.    |         |
| Values         | The names of optional fields and their values to use when creating/updating a record. For example, if a custom configured field is not represented as an input, here its key can be specified along with an assigned value. |         |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                          |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                               |         |

### Create Subscription {#createsubscription}

Create a new subscription.

| Input             | Comments                                                                                                                                                                                                                    | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer ID       | The unique identifier for the customer.                                                                                                                                                                                     |         |
| Price ID          | The unique identifier for the price.                                                                                                                                                                                        |         |
| Collection Method | The method used to collect payment for the invoice.                                                                                                                                                                         |         |
| Quantity          | The number of units to include in the subscription.                                                                                                                                                                         |         |
| Payment Method ID | The unique identifier for the payment method.                                                                                                                                                                               |         |
| Cancel At         | A Unix timestamp at which the subscription should cancel. If set before the current period ends, this may cause a proration if enabled.                                                                                     |         |
| Days Until Due    | The number of days until the payment is due.                                                                                                                                                                                |         |
| Values            | The names of optional fields and their values to use when creating/updating a record. For example, if a custom configured field is not represented as an input, here its key can be specified along with an assigned value. |         |
| Metadata          | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.    |         |
| Timeout           | The maximum time a client will await a response (in milliseconds).                                                                                                                                                          |         |
| Connection        | The Stripe connection to use.                                                                                                                                                                                               |         |

### Create Webhook {#createwebhook}

Create a new webhook endpoint.

| Input          | Comments                                                                                                                                                              | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Webhook URL    | The URL where webhook events will be sent.                                                                                                                            |         |
| Webhook Events | For each item, provide a string value representing the event type to track. For more information, see [Stripe event types](https://docs.stripe.com/api/events/types). |         |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                    |         |
| Connection     | The Stripe connection to use.                                                                                                                                         |         |

### Delete All Instance Webhooks {#deletewebhooks}

Delete all webhook endpoints associated with each flow of the current instance.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |

### Delete Customer {#deletecustomer}

Permanently delete a customer and immediately cancel any active subscriptions on the customer.

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Customer ID | The unique identifier for the customer.                            |         |
| Timeout     | The maximum time a client will await a response (in milliseconds). |         |
| Connection  | The Stripe connection to use.                                      |         |

### Delete Invoice {#deleteinvoice}

Delete an existing invoice.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Invoice ID | The unique identifier for the invoice.                             |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |

### Delete Product {#deleteproduct}

Delete an existing product by ID.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Product ID | The unique identifier for the product.                             |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |

### Delete Subscription {#deletesubscription}

Cancel a subscription by ID.

| Input           | Comments                                                           | Default |
| --------------- | ------------------------------------------------------------------ | ------- |
| Subscription ID | The unique identifier for the subscription.                        |         |
| Timeout         | The maximum time a client will await a response (in milliseconds). |         |
| Connection      | The Stripe connection to use.                                      |         |

### Delete Webhook {#deletewebhook}

Delete a webhook endpoint by ID.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Webhook ID | The ID of the webhook to delete                                    |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |

### Detach Card {#detachcard}

Detach a card from a customer.

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Timeout           | The maximum time a client will await a response (in milliseconds). |         |
| Customer ID       | The unique identifier for the customer.                            |         |
| Payment Method ID | The unique identifier for the payment method.                      |         |
| Connection        | The Stripe connection to use.                                      |         |

### Expire Checkout Session {#expirecheckoutsession}

Expire a Stripe Checkout session.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Session ID | The unique identifier for the Checkout Session.                    |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |

### Get Balance Transaction {#getbalancetransaction}

Retrieve a balance transaction by ID.

| Input                  | Comments                                                           | Default |
| ---------------------- | ------------------------------------------------------------------ | ------- |
| Timeout                | The maximum time a client will await a response (in milliseconds). |         |
| Connection             | The Stripe connection to use.                                      |         |
| Balance Transaction ID | The unique identifier for the balance transaction.                 |         |

### Get Card {#getcard}

Retrieve the information and metadata of a card by ID.

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Timeout           | The maximum time a client will await a response (in milliseconds). |         |
| Customer ID       | The unique identifier for the customer.                            |         |
| Payment Method ID | The unique identifier for the payment method.                      |         |
| Connection        | The Stripe connection to use.                                      |         |

### Get Charge {#getcharge}

Retrieve the details of a charge that has previously been created.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |
| Charge ID  | The unique identifier for the charge.                              |         |

### Get Checkout Session {#getcheckoutsession}

Retrieve a Stripe Checkout session by ID.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Session ID | The unique identifier for the Checkout Session.                    |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |

### Get Customer {#getcustomer}

Retrieve the information and metadata of a customer by ID.

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Customer ID | The unique identifier for the customer.                            |         |
| Timeout     | The maximum time a client will await a response (in milliseconds). |         |
| Connection  | The Stripe connection to use.                                      |         |

### Get Dispute {#getdispute}

Retrieve a dispute by ID.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |
| Dispute ID | The unique identifier for the dispute.                             |         |

### Get Invoice {#getinvoice}

Retrieve the information and metadata of an invoice by ID.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Invoice ID | The unique identifier for the invoice.                             |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |

### Get Payment Intent {#getpaymentintent}

Retrieve the details of a payment intent that has previously been created.

| Input             | Comments                                                                                              | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Timeout           | The maximum time a client will await a response (in milliseconds).                                    |         |
| Connection        | The Stripe connection to use.                                                                         |         |
| Payment Intent ID | The ID of the PaymentIntent to retrieve.                                                              |         |
| Client Secret     | The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source. |         |

### Get Price {#getprice}

Retrieve the information and metadata of a price by ID.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Price ID   | The unique identifier for the price.                               |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |

### Get Product {#getproduct}

Retrieve the information and metadata of a product by ID.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Product ID | The unique identifier for the product.                             |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |

### Get Subscription {#getsubscription}

Retrieve the information and metadata of a subscription by ID.

| Input           | Comments                                                           | Default |
| --------------- | ------------------------------------------------------------------ | ------- |
| Subscription ID | The unique identifier for the subscription.                        |         |
| Timeout         | The maximum time a client will await a response (in milliseconds). |         |
| Connection      | The Stripe connection to use.                                      |         |

### Get Webhook {#getwebhook}

Retrieve a webhook endpoint by ID.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Webhook ID | The unique identifier for the webhook.                             |         |
| Timeout    | The maximum time a client will await a response (in milliseconds). |         |
| Connection | The Stripe connection to use.                                      |         |

### List Accounts {#listaccounts}

Return a list of accounts connected to the platform.

| Input          | Comments                                                                                                                                                                                                                                                               | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                     |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list. |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                          |         |

### List Balance Transactions {#listbalancetransactions}

Return a list of transactions that have contributed to the Stripe account balance (such as charges, transfers, and so forth).

| Input          | Comments                                                                                                                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                         |         |
| Created        | A filter on the list based on the object created field.                                                                                                                                                                                                                    |         |
| Currency       | Only return transactions in a certain currency. Three-letter ISO currency code, in lowercase. Must be a supported currency.                                                                                                                                                |         |
| Source         | Filters results to only include transactions originating from the specified Stripe source ID (e.g., a charge or payout ID).                                                                                                                                                |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                                  |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. `ending_before` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects starting with `obj_bar`, the next call can include `ending_before=obj_bar` to fetch the previous page of the list. |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                              |         |

### List Cards {#listcards}

Return a list of cards for a customer.

| Input          | Comments                                                                                                                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                         |         |
| Customer ID    | The unique identifier for the customer.                                                                                                                                                                                                                                    |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                                  |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. `ending_before` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects starting with `obj_bar`, the next call can include `ending_before=obj_bar` to fetch the previous page of the list. |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                              |         |

### List Charges {#listcharges}

Return a list of all charges.

| Input          | Comments                                                                                                                                                                                                                                                               | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                     |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list. |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                          |         |

### List Checkout Session Line Items {#listcheckoutsessionlineitems}

Return a list of line items for a Stripe Checkout session.

| Input          | Comments                                                                                                                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Session ID     | The unique identifier for the Checkout Session.                                                                                                                                                                                                                            |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                                  |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. `ending_before` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects starting with `obj_bar`, the next call can include `ending_before=obj_bar` to fetch the previous page of the list. |         |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                         |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                              |         |

### List Checkout Sessions {#listcheckoutsessions}

Return a list of Stripe Checkout sessions.

| Input          | Comments                                                                                                                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All      | When true, automatically fetches all pages of results using pagination.                                                                                                                                                                                                    | false   |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                                  |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. `ending_before` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects starting with `obj_bar`, the next call can include `ending_before=obj_bar` to fetch the previous page of the list. |         |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                         |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                              |         |

### List Customers {#listcustomers}

Return a list of customers.

| Input          | Comments                                                                                                                                                                                                                                                               | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                     |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list. |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                          |         |

### List Disputes {#listdisputes}

Return a list of disputes.

| Input          | Comments                                                                                                                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                         |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                              |         |
| Charge ID      | Only return disputes associated to the charge specified by this charge ID.                                                                                                                                                                                                 |         |
| Payment Intent | Filters results to only charges created by the specified Payment Intent. Provide the Payment Intent ID to scope the query.                                                                                                                                                 |         |
| Created        | A filter on the list based on the object created field.                                                                                                                                                                                                                    |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                                  |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. `ending_before` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects starting with `obj_bar`, the next call can include `ending_before=obj_bar` to fetch the previous page of the list. |         |

### List Invoices {#listinvoices}

Return a list of invoices.

| Input          | Comments                                                                                                                                                                                                                                                               | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                     |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list. |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                          |         |

### List Payment Intents {#listpaymentintents}

Return a list of payment intents.

| Input          | Comments                                                                                                                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                         |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                              |         |
| Customer ID    | Only return PaymentIntents for the customer specified by this customer ID.                                                                                                                                                                                                 |         |
| Created        | A filter on the list based on the object created field.                                                                                                                                                                                                                    |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                                  |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. `ending_before` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects starting with `obj_bar`, the next call can include `ending_before=obj_bar` to fetch the previous page of the list. |         |

### List Prices {#listprices}

Return a list of all available prices.

| Input          | Comments                                                                                                                                                                                                                                                               | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                     |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list. |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                          |         |

### List Products {#listproducts}

Return a list of products.

| Input          | Comments                                                                                                                                                                                                                                                               | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                     |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list. |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                          |         |

### List Subscriptions {#listsubscriptions}

Return a list of subscriptions.

| Input          | Comments                                                                                                                                                                                                                                                               | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                     |         |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                              |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                               |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list. |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                          |         |

### List Webhooks {#listwebhooks}

Return a list of all webhook endpoints.

| Input          | Comments                                                                                                                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All      | When true, automatically fetches all pages of results using pagination.                                                                                                                                                                                                    | false   |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                                                  |         |
| Limit          | The maximum number of results to return.                                                                                                                                                                                                                                   |         |
| Starting After | A cursor for use in pagination. `starting_after` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects ending with `obj_foo`, the next call can include `starting_after=obj_foo` to fetch the next page of the list.     |         |
| Ending Before  | A cursor for use in pagination. `ending_before` is an object ID that defines the place in the list. For instance, if a list request returns 100 objects starting with `obj_bar`, the next call can include `ending_before=obj_bar` to fetch the previous page of the list. |         |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                                         |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                                                                              |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to the Stripe API.

| Input                   | Comments                                                                                                                                                                                               | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Stripe connection to use.                                                                                                                                                                          |         |
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

Search for charges previously created using Stripe's Search Query Language.

| Input      | Comments                                                                                                                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds).                                                                                                                |         |
| Connection | The Stripe connection to use.                                                                                                                                                     |         |
| Query      | The search query string used to filter results. Supports Stripe's search query language with field-based filters and operators.                                                   |         |
| Pagination | Cursor and page-size controls for paging through results.                                                                                                                         |         |
| Limit      | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.                                                                        |         |
| Page       | A cursor for pagination across multiple pages of results. Leave empty on the first call. Use the `next_page` value returned in a previous response to request subsequent results. |         |

### Search Payment Intents {#searchpaymentintent}

Search for payment intents previously created using Stripe's Search Query Language.

| Input      | Comments                                                                                                                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds).                                                                                                                |         |
| Connection | The Stripe connection to use.                                                                                                                                                     |         |
| Query      | The search query string used to filter results. Supports Stripe's search query language with field-based filters and operators.                                                   |         |
| Pagination | Cursor and page-size controls for paging through results.                                                                                                                         |         |
| Limit      | The maximum number of results to return.                                                                                                                                          |         |
| Page       | A cursor for pagination across multiple pages of results. Leave empty on the first call. Use the `next_page` value returned in a previous response to request subsequent results. |         |

### Update Card {#updatecard}

Update an existing card by ID.

| Input                      | Comments                                                                                                                                                                                                                 | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Customer ID                | The unique identifier for the customer.                                                                                                                                                                                  |         |
| Payment Method ID          | The unique identifier for the payment method.                                                                                                                                                                            |         |
| Expiration Month           | The two-digit expiration month of the card (01-12).                                                                                                                                                                      |         |
| Expiration Year            | The four-digit expiration year of the card.                                                                                                                                                                              |         |
| Billing Address            | Billing street, city, state, postal code, and country.                                                                                                                                                                   |         |
| Street Address             | The first line of the card's billing address, typically the street number and name.                                                                                                                                      |         |
| Street Address Line 2      | Additional address information for the billing address (optional).                                                                                                                                                       |         |
| City                       | The city portion of the card's billing address, used for address verification.                                                                                                                                           |         |
| State/Province             | The state or province code for the billing address.                                                                                                                                                                      |         |
| Zip/Postal Code            | The postal or ZIP code portion of the card's billing address, used for address verification.                                                                                                                             |         |
| Country                    | The two-letter ISO country code for the billing address.                                                                                                                                                                 |         |
| Name & Contact Information | Full name, email, and phone contact details.                                                                                                                                                                             |         |
| Full Name                  | The cardholder name as it appears on the card, used for verification.                                                                                                                                                    |         |
| Email                      | The email address Stripe uses for billing receipts and correspondence about this card.                                                                                                                                   |         |
| Phone                      | The phone number associated with the billing contact, including country code.                                                                                                                                            |         |
| Metadata                   | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Connection                 | The Stripe connection to use.                                                                                                                                                                                            |         |
| Timeout                    | The maximum time a client will await a response (in milliseconds).                                                                                                                                                       |         |

### Update Charge {#updatecharge}

Update a specified charge by setting the values of the parameters passed.

| Input          | Comments                                                                                                                                                                                                                 | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                       |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                            |         |
| Charge ID      | The unique identifier for the charge.                                                                                                                                                                                    |         |
| Customer ID    | The ID of an existing customer that will be associated with this request.                                                                                                                                                |         |
| Description    | An arbitrary string that can be attached to a charge object. It is displayed in the web interface alongside the charge.                                                                                                  |         |
| Metadata       | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Receipt Email  | The email address that the receipt for the charge will be sent to. Updating this field triggers a new email receipt to the updated address.                                                                              |         |
| Shipping       | Shipping information for the charge. Helps prevent fraud on charges for physical goods.                                                                                                                                  |         |
| Fraud Details  | A set of key-value pairs that can be attached to a charge giving information about its riskiness.                                                                                                                        |         |
| Transfer Group | A string that identifies this transaction as part of a group. Used with Stripe Connect to associate related charges, transfers, and refunds.                                                                             |         |

### Update Checkout Session {#updatecheckoutsession}

Update an existing Stripe Checkout session.

| Input      | Comments                                                                                                                                                                                                                 | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Session ID | The unique identifier for the Checkout Session.                                                                                                                                                                          |         |
| Metadata   | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Timeout    | The maximum time a client will await a response (in milliseconds).                                                                                                                                                       |         |
| Connection | The Stripe connection to use.                                                                                                                                                                                            |         |

### Update Customer {#updatecustomer}

Update an existing customer.

| Input                      | Comments                                                                                                                                                                                                                    | Default |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer ID                | The unique identifier for the customer.                                                                                                                                                                                     |         |
| Name & Contact Information | Full name, email, and phone contact details.                                                                                                                                                                                |         |
| Full Name                  | The customer's full name, displayed in the Stripe Dashboard and on receipts.                                                                                                                                                |         |
| Email                      | The customer's email address. Used for receipts, invoices, and other Stripe communications.                                                                                                                                 |         |
| Phone                      | The customer's phone number in E.164 format. Used for SMS receipts and Strong Customer Authentication.                                                                                                                      |         |
| Address                    | Street, city, state, postal code, and country.                                                                                                                                                                              |         |
| Street Address             | The first line of the customer's billing address, typically the street number and name.                                                                                                                                     |         |
| Street Address Line 2      | The second line of the customer's billing address, used for apartment, suite, or unit numbers.                                                                                                                              |         |
| City                       | The city portion of the customer's billing address.                                                                                                                                                                         |         |
| State/Province             | The state, province, or region code for the customer's billing address (e.g., `CA` for California).                                                                                                                         |         |
| Zip/Postal Code            | The postal or ZIP code portion of the customer's billing address.                                                                                                                                                           |         |
| Country                    | The two-letter ISO 3166-1 alpha-2 country code for the customer's billing address.                                                                                                                                          |         |
| Balance                    | The starting balance of the customer, as a whole number in the currency's smallest unit (5000 is $50.00 in USD, ¥5000 in JPY).                                                                                              |         |
| Description                | An arbitrary description of the customer for internal reference.                                                                                                                                                            |         |
| Values                     | The names of optional fields and their values to use when creating/updating a record. For example, if a custom configured field is not represented as an input, here its key can be specified along with an assigned value. |         |
| Metadata                   | Set of key-value pairs that can be attached to the customer. This can be useful for storing additional information about the object in a structured format.                                                                 |         |
| Timeout                    | The maximum time a client will await a response (in milliseconds).                                                                                                                                                          |         |
| Connection                 | The Stripe connection to use.                                                                                                                                                                                               |         |

### Update Dispute {#updatedispute}

Update a dispute by submitting evidence or metadata. Use this action to provide evidence that helps Stripe resolve the dispute in the merchant's favor.

| Input      | Comments                                                                                                                                                                                                                 | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Timeout    | The maximum time a client will await a response (in milliseconds).                                                                                                                                                       |         |
| Connection | The Stripe connection to use.                                                                                                                                                                                            |         |
| Dispute ID | The unique identifier for the dispute.                                                                                                                                                                                   |         |
| Evidence   | Evidence to upload to respond to a dispute.                                                                                                                                                                              |         |
| Metadata   | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |         |
| Submit     | Whether to immediately submit evidence to the bank.                                                                                                                                                                      |         |

### Update Invoice {#updateinvoice}

Update an existing invoice.

| Input                  | Comments                                                                                                                                                                                                                    | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Invoice ID             | The unique identifier for the invoice.                                                                                                                                                                                      |         |
| Customer ID            | The unique identifier for the customer.                                                                                                                                                                                     |         |
| Payment Method ID      | The unique identifier for the payment method.                                                                                                                                                                               |         |
| Collection Method      | The method used to collect payment for the invoice.                                                                                                                                                                         |         |
| Description            | An arbitrary description for the object, displayed in the Stripe Dashboard.                                                                                                                                                 |         |
| Due Date               | The due date of the invoice as a Unix timestamp.                                                                                                                                                                            |         |
| Values                 | The names of optional fields and their values to use when creating/updating a record. For example, if a custom configured field is not represented as an input, here its key can be specified along with an assigned value. |         |
| Metadata               | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.    |         |
| Additional Fields      | Additional optional fields: includes Auto Advance, Application Fee Amount, Coupon, and Discount.                                                                                                                            |         |
| Auto Advance           | When true, Stripe will automatically attempt collection of the invoice.                                                                                                                                                     | false   |
| Application Fee Amount | The application fee amount, as a whole number in the currency's smallest unit (500 is $5.00 in USD, ¥500 in JPY). Only applicable when collection method is 'Charge Automatically'.                                         |         |
| Coupon                 | The unique identifier of the coupon to apply to the invoice.                                                                                                                                                                |         |
| Discount               | The discount ID to apply to the invoice.                                                                                                                                                                                    |         |
| Timeout                | The maximum time a client will await a response (in milliseconds).                                                                                                                                                          |         |
| Connection             | The Stripe connection to use.                                                                                                                                                                                               |         |

### Update Payment Intent {#updatepaymentintent}

Update properties on a payment intent without confirming.

| Input                       | Comments                                                                                                                                                                                                                                           | Default |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Payment Intent ID           | The unique identifier for the Payment Intent.                                                                                                                                                                                                      |         |
| Timeout                     | The maximum time a client will await a response (in milliseconds).                                                                                                                                                                                 |         |
| Connection                  | The Stripe connection to use.                                                                                                                                                                                                                      |         |
| Amount                      | The amount intended to be collected, as a whole number in the currency's smallest unit (2000 is $20.00 in USD, ¥2000 in JPY).                                                                                                                      |         |
| Currency                    | The three-letter ISO currency code in lowercase (e.g., usd, eur, gbp).                                                                                                                                                                             |         |
| Customer ID                 | ID of the Customer this PaymentIntent belongs to, if one exists.                                                                                                                                                                                   |         |
| Description                 | An arbitrary string attached to the object. Often useful for displaying to users.                                                                                                                                                                  |         |
| Metadata                    | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.                           |         |
| Payment Method              | ID of the payment method (a PaymentMethod, Card, or compatible Source object) to attach to this PaymentIntent.                                                                                                                                     |         |
| Receipt Email               | Email address that the receipt for the resulting payment will be sent to.                                                                                                                                                                          |         |
| Payment Method Types        | The list of payment method types that this PaymentIntent is allowed to use.                                                                                                                                                                        |         |
| Transfer Options            | Application fee, transfer data, and transfer group for routing funds to connected accounts.                                                                                                                                                        |         |
| Application Fee Amount      | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner’s Stripe account. Enter a whole number in the currency's smallest unit (500 is $5.00 in USD, ¥500 in JPY). |         |
| Transfer Data               | The parameters used to automatically create a Transfer when the payment succeeds.                                                                                                                                                                  |         |
| Transfer Group              | A string that identifies the resulting payment as part of a group.                                                                                                                                                                                 |         |
| Additional Fields           | Additional optional fields: includes Setup Future Usage, Shipping, Statement Descriptor, Statement Descriptor Suffix, Capture Method, Payment Method Data, and Payment Method Options.                                                             |         |
| Setup Future Usage          | Indicates the intent to make future payments with this PaymentIntent's payment method. Use `on_session` if the customer is present during the future payment, or `off_session` if not.                                                             |         |
| Shipping                    | Shipping information for this PaymentIntent.                                                                                                                                                                                                       |         |
| Statement Descriptor        | For non-card charges, the complete description that appears on customer statements. Must be 5-22 characters and cannot use special characters `<`, `>`, `\`, `'`, `"`.                                                                             |         |
| Statement Descriptor Suffix | Information about a card payment that customers see on their statements, concatenated with the prefix (the account name) to form the full statement descriptor.                                                                                    |         |
| Capture Method              | Controls when the funds will be captured from the customer's account.                                                                                                                                                                              |         |
| Payment Method Data         | If provided, this hash will be used to create a PaymentMethod.                                                                                                                                                                                     |         |
| Payment Method Options      | Payment-method-specific configuration for this PaymentIntent.                                                                                                                                                                                      |         |

### Update Price {#updateprice}

Update an existing price by ID.

| Input      | Comments                                                                                                                                                                                                                    | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Price ID   | The unique identifier for the price.                                                                                                                                                                                        |         |
| Active     | When true, the object is currently active and available on the platform.                                                                                                                                                    | false   |
| Nickname   | A brief description of the price, hidden from customers.                                                                                                                                                                    |         |
| Values     | The names of optional fields and their values to use when creating/updating a record. For example, if a custom configured field is not represented as an input, here its key can be specified along with an assigned value. |         |
| Metadata   | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.    |         |
| Timeout    | The maximum time a client will await a response (in milliseconds).                                                                                                                                                          |         |
| Connection | The Stripe connection to use.                                                                                                                                                                                               |         |

### Update Product {#updateproduct}

Update an existing product.

| Input          | Comments                                                                                                                                                                                                                    | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product ID     | The unique identifier for the product.                                                                                                                                                                                      |         |
| Product Name   | The display name shown to customers for the product.                                                                                                                                                                        |         |
| Product URL    | The URL of a publicly-accessible webpage for this product. May only be set if type=good.                                                                                                                                    |         |
| Shippable      | When true, this product can be shipped (i.e., physical goods).                                                                                                                                                              | false   |
| Active         | When true, the object is currently active and available on the platform.                                                                                                                                                    | false   |
| Description    | An arbitrary description for the object, displayed in the Stripe Dashboard.                                                                                                                                                 |         |
| Product Images | For each list item, provide a URL for the image of the product.                                                                                                                                                             |         |
| Metadata       | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.    |         |
| Values         | The names of optional fields and their values to use when creating/updating a record. For example, if a custom configured field is not represented as an input, here its key can be specified along with an assigned value. |         |
| Timeout        | The maximum time a client will await a response (in milliseconds).                                                                                                                                                          |         |
| Connection     | The Stripe connection to use.                                                                                                                                                                                               |         |

### Update Subscription {#updatesubscription}

Update an existing subscription.

| Input             | Comments                                                                                                                                                                                                                    | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Subscription ID   | The unique identifier for the subscription.                                                                                                                                                                                 |         |
| Price ID          | The unique identifier for the price.                                                                                                                                                                                        |         |
| Quantity          | The number of units to include in the subscription.                                                                                                                                                                         |         |
| Collection Method | The method used to collect payment for the invoice.                                                                                                                                                                         |         |
| Payment Method ID | The unique identifier for the payment method.                                                                                                                                                                               |         |
| Cancel At         | A Unix timestamp at which the subscription should cancel. If set before the current period ends, this may cause a proration if enabled.                                                                                     |         |
| Values            | The names of optional fields and their values to use when creating/updating a record. For example, if a custom configured field is not represented as an input, here its key can be specified along with an assigned value. |         |
| Metadata          | Set of key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them.    |         |
| Timeout           | The maximum time a client will await a response (in milliseconds).                                                                                                                                                          |         |
| Connection        | The Stripe connection to use.                                                                                                                                                                                               |         |

### Update Webhook {#updatewebhook}

Update an existing webhook endpoint by ID.

| Input          | Comments                                                           | Default |
| -------------- | ------------------------------------------------------------------ | ------- |
| Webhook ID     | The ID of the webhook to update                                    |         |
| Webhook URL    | The URL the webhook will send requests to                          |         |
| Webhook Events | The events the webhook will listen for                             |         |
| Timeout        | The maximum time a client will await a response (in milliseconds). |         |
| Connection     | The Stripe connection to use.                                      |         |
