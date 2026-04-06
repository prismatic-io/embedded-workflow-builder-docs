---
title: Mailchimp Connector
sidebar_label: Mailchimp
description: Interact with email campaign lists and e-commerce resources.
---

![Mailchimp](./assets/mailchimp.png#connector-icon)
[Mailchimp](https://www.mailchimp.com/) is a marketing automation platform and email marketing service.
The Mailchimp component allows you to interact with your mailchimp email campaigns and your e-commerce site.

## Connections

### API Key {#apikey}

API Key connection for Mailchimp

To authenticate with Mailchimp using an API Key, generate a key from the Mailchimp account settings.

For detailed information about API key authentication, refer to [Mailchimp's API quickstart guide](https://mailchimp.com/developer/marketing/guides/quick-start/).

#### Prerequisites

- A [Mailchimp account](https://mailchimp.com/) with admin access
- Access to the [API Keys](https://admin.mailchimp.com/account/api/) settings page

#### Setup Steps

To generate an API key:

1. Navigate to the [API Keys](https://admin.mailchimp.com/account/api/) page in the Mailchimp account settings.
2. Scroll to the **Your API keys** section.
3. Click **Create A Key** to generate a new API key.
4. Enter a descriptive name for the key (e.g., "Integration API Key").
5. Copy the generated API key value.

:::warning API Key Format
Mailchimp API keys include a data center suffix (e.g., `abc123def456-us21`). The suffix after the hyphen indicates the data center where the account is hosted. This suffix is required for the API to route requests correctly.
:::

#### Configure the Connection

- Enter the full **API Key** (including the data center suffix) into the connection configuration.

| Input         | Comments                                                                                                                                                                         | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| API Key       | The Mailchimp API Key. Generate one in your Mailchimp account at [Account > Extras > API Keys](https://admin.mailchimp.com/account/api/). The key includes a data center suffix. |         |
| Debug Request | When true, the component will log the request and response to the console.                                                                                                       | false   |

### OAuth 2.0 {#oauth2}

OAuth 2.0 connection for Mailchimp

To connect to Mailchimp using OAuth 2.0, an OAuth application must be registered in the Mailchimp account.

For detailed information about Mailchimp OAuth, refer to the [Mailchimp OAuth 2.0 documentation](https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/).

#### Prerequisites

- A [Mailchimp account](https://mailchimp.com/) with admin access
- Access to the [Mailchimp OAuth Apps](https://admin.mailchimp.com/account/oauth2/) settings page

#### Setup Steps

1. Navigate to the [Mailchimp OAuth Apps](https://admin.mailchimp.com/account/oauth2/) page in the Mailchimp account settings.
2. Click **Register an App** to create a new OAuth application.
3. Fill in the required fields:
   - **App Name**: A descriptive name for the application
   - **App Description**: A brief description of what the application does
   - **Redirect URL**: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Click **Create** to register the application.
5. Once created, copy the **Client ID** and **Client Secret** values displayed on the app details page.

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the registered OAuth application.
- The **Authorize URL** and **Token URL** are pre-configured with the correct Mailchimp endpoints.

The connection is now ready to authenticate with Mailchimp.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Client ID     | The Client ID from your Mailchimp OAuth app. Find this in your Mailchimp account at [Account > Extras > API Keys > OAuth 2.0](https://admin.mailchimp.com/account/oauth2/). |         |
| Client Secret | The Client Secret from your Mailchimp OAuth app. Keep this value secure and never share it.                                                                                 |         |
| Debug Request | When true, the component will log the request and response to the console.                                                                                                  | false   |

## Triggers

### List Events Webhook {#listeventswebhook}

Receive list event notifications from Mailchimp. Automatically creates and manages a webhook subscription for selected event types when the instance is deployed, and removes the subscription when the instance is deleted.

| Input      | Comments                                                                                                                                                                                                        | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Mailchimp connection to use.                                                                                                                                                                                |         |
| List Id    | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults.                                                                        |         |
| Events     | Select the events that will trigger the webhook (e.g., subscribe, unsubscribe, profile update).                                                                                                                 |         |
| Sources    | Select the sources that should trigger the webhook. <strong>User:</strong> changes made by subscribers, <strong>Admin:</strong> changes made by account admins, <strong>API:</strong> changes made via the API. |         |

### Webhook {#webhook}

Receive webhook requests from Mailchimp for manually configured webhooks. Use this trigger when you want to configure webhooks directly in Mailchimp rather than having them auto-managed.

## Actions

### Add Customer {#addcustomer}

Add a new customer to a store

| Input         | Comments                                                                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id      | The unique identifier for the e-commerce store.                                                                                                                                                                                                                                          |         |
| Customer Id   | The unique identifier for the customer.                                                                                                                                                                                                                                                  |         |
| Email         | The email address of the subscriber.                                                                                                                                                                                                                                                     |         |
| Opt In Status | When true, the customer is opted-in to receive marketing communications. This value will not overwrite the opt-in status of pre-existing list members but will apply to new members added through the e-commerce API. Customers who don't opt in will be added as Transactional members. | false   |
| Company       | The company name.                                                                                                                                                                                                                                                                        |         |
| First Name    | The first name of the contact.                                                                                                                                                                                                                                                           |         |
| Last Name     | The last name of the contact.                                                                                                                                                                                                                                                            |         |
| Address 1     | The first line of the street address.                                                                                                                                                                                                                                                    |         |
| Address 2     | The second line of the street address (apartment, suite, etc.).                                                                                                                                                                                                                          |         |
| City          | The city name.                                                                                                                                                                                                                                                                           |         |
| Country Code  | The two-letter ISO country code (e.g., US, CA, GB).                                                                                                                                                                                                                                      |         |
| Province Code | The province code (primarily for Canadian addresses).                                                                                                                                                                                                                                    |         |
| Postal Code   | The postal or ZIP code.                                                                                                                                                                                                                                                                  |         |
| Province      | The province name (primarily for Canadian addresses).                                                                                                                                                                                                                                    |         |
| Country       | The country name.                                                                                                                                                                                                                                                                        |         |
| Connection    | The Mailchimp connection to use.                                                                                                                                                                                                                                                         |         |

### Add List {#addlist}

Create a new list in your Mailchimp account

| Input                 | Comments                                                                                                                                                                                                 | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Company               | The company name.                                                                                                                                                                                        |         |
| Address 1             | The first line of the street address.                                                                                                                                                                    |         |
| Address 2             | The second line of the street address (apartment, suite, etc.).                                                                                                                                          |         |
| City                  | The city name.                                                                                                                                                                                           |         |
| State                 | The state or region code.                                                                                                                                                                                |         |
| Postal Code           | The postal or ZIP code.                                                                                                                                                                                  |         |
| Phone                 | The phone number in E.164 format or local format.                                                                                                                                                        |         |
| Country               | The country name.                                                                                                                                                                                        |         |
| Name                  | The name of the audience list.                                                                                                                                                                           |         |
| From Email            | The 'from' email address for the campaign.                                                                                                                                                               |         |
| From Name             | The default 'from' name displayed for campaigns sent to this list.                                                                                                                                       |         |
| Subject               | The subject line of the email.                                                                                                                                                                           |         |
| Language              | The default language for this list's forms (use ISO 639-1 language code).                                                                                                                                |         |
| Marketing Permissions | When true, the list has marketing permissions (e.g., GDPR) enabled.                                                                                                                                      | false   |
| Email Type Option     | When true, the list supports multiple email formats and subscribers can choose between HTML or plain-text emails. When false, subscribers will receive HTML emails with a plain-text alternative backup. | false   |
| Permission reminder   | The permission reminder text explaining why subscribers are receiving emails.                                                                                                                            |         |
| Connection            | The Mailchimp connection to use.                                                                                                                                                                         |         |

### Add Member {#addmember}

Add a new member to a list

| Input        | Comments                                                                                                                                                                                      | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id      | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults.                                                      |         |
| Email        | The email address of the subscriber.                                                                                                                                                          |         |
| Language     | The default language for this list's forms (use ISO 639-1 language code).                                                                                                                     |         |
| Status       | The subscriber's current status. Possible values: "subscribed", "unsubscribed", "cleaned", "pending", or "transactional".                                                                     |         |
| Email Type   | The type of email format the member prefers: 'html' or 'text'.                                                                                                                                |         |
| Merge Fields | Merge fields (audience fields) as key-value pairs where the key is the merge tag. See [Mailchimp's merge fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/). |         |
| Tags         | Tags associated with the member. Provide a list of tag names.                                                                                                                                 |         |
| Interests    | Interest categories as key-value pairs where the key is the interest ID and the value is true/false.                                                                                          |         |
| VIP          | When true, marks the subscriber as a VIP member with priority status.                                                                                                                         | false   |
| Connection   | The Mailchimp connection to use.                                                                                                                                                              |         |

### Add Webhook {#addwebhook}

Create a new webhook for a specific list/audience.

| Input       | Comments                                                                                                                                                                                                        | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Mailchimp connection to use.                                                                                                                                                                                |         |
| List Id     | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults.                                                                        |         |
| Webhook URL | The URL where the webhook will send requests. You can use this input to configure a component trigger.                                                                                                          |         |
| Events      | Select the events that will trigger the webhook (e.g., subscribe, unsubscribe, profile update).                                                                                                                 |         |
| Sources     | Select the sources that should trigger the webhook. <strong>User:</strong> changes made by subscribers, <strong>Admin:</strong> changes made by account admins, <strong>API:</strong> changes made via the API. |         |

### Archive Member {#archivemember}

Archive a list member

| Input          | Comments                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id        | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults.                                   |         |
| SubscriberHash | The MD5 hash of the lowercase version of the list member's email address (32-character hex string). This endpoint also accepts plain email addresses in place of the hash. |         |
| Connection     | The Mailchimp connection to use.                                                                                                                                           |         |

### Delete Cart {#deletecart}

Delete a specific cart

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Store Id   | The unique identifier for the e-commerce store. |         |
| Cart Id    | The unique identifier for the cart.             |         |
| Connection | The Mailchimp connection to use.                |         |

### Delete Cart Line Items {#deletecartlineitem}

Get information about a cart's line items.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Store Id   | The unique identifier for the e-commerce store. |         |
| Cart Id    | The unique identifier for the cart.             |         |
| Line Id    | The unique identifier for the cart line item.   |         |
| Connection | The Mailchimp connection to use.                |         |

### Delete Customer {#deletecustomer}

Delete a customer from a store

| Input       | Comments                                        | Default |
| ----------- | ----------------------------------------------- | ------- |
| Store Id    | The unique identifier for the e-commerce store. |         |
| Customer Id | The unique identifier for the customer.         |         |
| Connection  | The Mailchimp connection to use.                |         |

### Delete List {#deletelist}

Delete a list from your Mailchimp account

| Input      | Comments                                                                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id    | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults. |         |
| Connection | The Mailchimp connection to use.                                                                                                         |         |

### Delete Member {#deletemember}

Delete all personally identifiable information related to a list member, and remove them from a list. This will make it impossible to re-import the list member

| Input          | Comments                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id        | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults.                                   |         |
| SubscriberHash | The MD5 hash of the lowercase version of the list member's email address (32-character hex string). This endpoint also accepts plain email addresses in place of the hash. |         |
| Connection     | The Mailchimp connection to use.                                                                                                                                           |         |

### Delete Order {#deleteorder}

Delete an order

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Order Id   | The unique identifier for the order in the store. |         |
| Store Id   | The unique identifier for the e-commerce store.   |         |
| Connection | The Mailchimp connection to use.                  |         |

### Delete Order Line Item {#deleteorderlineitem}

Delete an order Line Item

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Order Id   | The unique identifier for the order in the store. |         |
| Store Id   | The unique identifier for the e-commerce store.   |         |
| Line Id    | The unique identifier for the cart line item.     |         |
| Connection | The Mailchimp connection to use.                  |         |

### Delete Product {#deleteproduct}

Delete a product from a store

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Store Id   | The unique identifier for the e-commerce store. |         |
| Product Id | The unique identifier for the product.          |         |
| Connection | The Mailchimp connection to use.                |         |

### Delete Webhook {#deletewebhook}

Delete a webhook from a specific list/audience.

| Input      | Comments                                                                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Mailchimp connection to use.                                                                                                         |         |
| List Id    | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults. |         |
| Webhook ID | The unique identifier for the webhook (10-character alphanumeric string).                                                                |         |

### Get Cart {#getcart}

Get information about a specific cart

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Store Id   | The unique identifier for the e-commerce store. |         |
| Cart Id    | The unique identifier for the cart.             |         |
| Connection | The Mailchimp connection to use.                |         |

### Get Cart Line Item {#getcartlineitem}

Get information about a cart's specific line item

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Store Id   | The unique identifier for the e-commerce store. |         |
| Cart Id    | The unique identifier for the cart.             |         |
| Line Id    | The unique identifier for the cart line item.   |         |
| Connection | The Mailchimp connection to use.                |         |

### Get Customer {#getcustomerinfo}

Get information about a store's specific customer

| Input       | Comments                                        | Default |
| ----------- | ----------------------------------------------- | ------- |
| Store Id    | The unique identifier for the e-commerce store. |         |
| Customer Id | The unique identifier for the customer.         |         |
| Connection  | The Mailchimp connection to use.                |         |

### Get List {#getlist}

Get information about a specific list in your Mailchimp account. Results include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned.

| Input      | Comments                                                                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id    | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults. |         |
| Connection | The Mailchimp connection to use.                                                                                                         |         |

### Get Lists Info {#getlistsinfo}

Get information about all lists in the account

| Input        | Comments                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Offset       | The number of records to skip before returning results. Use with Count for pagination (e.g., offset 10 with count 50 returns records 11-60). |         |
| Result Count | The maximum number of results to return per page (1-1000). Defaults to 10 if not specified.                                                  |         |
| Fetch All    | When true, automatically paginates through all results to fetch all records. The Count and Offset inputs are ignored when this is enabled.   | false   |
| Connection   | The Mailchimp connection to use.                                                                                                             |         |

### Get Member {#getmember}

Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member

| Input          | Comments                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id        | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults.                                   |         |
| SubscriberHash | The MD5 hash of the lowercase version of the list member's email address (32-character hex string). This endpoint also accepts plain email addresses in place of the hash. |         |
| Connection     | The Mailchimp connection to use.                                                                                                                                           |         |

### Get Order {#getorderinfo}

Get information about a specific order

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Store Id   | The unique identifier for the e-commerce store.   |         |
| Order Id   | The unique identifier for the order in the store. |         |
| Connection | The Mailchimp connection to use.                  |         |

### Get Order Line Item {#getorderlineitem}

Get an order Line Item

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Order Id   | The unique identifier for the order in the store. |         |
| Store Id   | The unique identifier for the e-commerce store.   |         |
| Line Id    | The unique identifier for the cart line item.     |         |
| Connection | The Mailchimp connection to use.                  |         |

### Get Product {#getproductinfo}

Get information about a specific product

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Store Id   | The unique identifier for the e-commerce store. |         |
| Product Id | The unique identifier for the product.          |         |
| Connection | The Mailchimp connection to use.                |         |

### Get Store {#getstore}

Get information about a specific store

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Store Id   | The unique identifier for the e-commerce store. |         |
| Connection | The Mailchimp connection to use.                |         |

### Get Webhook {#getwebhook}

Get information about a specific webhook for a list/audience.

| Input      | Comments                                                                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Mailchimp connection to use.                                                                                                         |         |
| List Id    | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults. |         |
| Webhook ID | The unique identifier for the webhook (10-character alphanumeric string).                                                                |         |

### List Account Orders {#listaccountorders}

Get information about an account's orders

| Input        | Comments                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Mailchimp connection to use.                                                                                                             |         |
| Result Count | The maximum number of results to return per page (1-1000). Defaults to 10 if not specified.                                                  |         |
| Offset       | The number of records to skip before returning results. Use with Count for pagination (e.g., offset 10 with count 50 returns records 11-60). |         |
| Fetch All    | When true, automatically paginates through all results to fetch all records. The Count and Offset inputs are ignored when this is enabled.   | false   |

### List Campaigns {#listcampaigns}

Get all campaigns in an account

| Input        | Comments                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Result Count | The maximum number of results to return per page (1-1000). Defaults to 10 if not specified.                                                  |         |
| Offset       | The number of records to skip before returning results. Use with Count for pagination (e.g., offset 10 with count 50 returns records 11-60). |         |
| Fetch All    | When true, automatically paginates through all results to fetch all records. The Count and Offset inputs are ignored when this is enabled.   | false   |
| Connection   | The Mailchimp connection to use.                                                                                                             |         |

### List Cart Line Items {#listcartlineitem}

Get information about a cart's line items.

| Input        | Comments                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | The unique identifier for the e-commerce store.                                                                                              |         |
| Cart Id      | The unique identifier for the cart.                                                                                                          |         |
| Result Count | The maximum number of results to return per page (1-1000). Defaults to 10 if not specified.                                                  |         |
| Offset       | The number of records to skip before returning results. Use with Count for pagination (e.g., offset 10 with count 50 returns records 11-60). |         |
| Fetch All    | When true, automatically paginates through all results to fetch all records. The Count and Offset inputs are ignored when this is enabled.   | false   |
| Connection   | The Mailchimp connection to use.                                                                                                             |         |

### List Carts {#listcarts}

Get information about a store's carts

| Input        | Comments                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | The unique identifier for the e-commerce store.                                                                                              |         |
| Offset       | The number of records to skip before returning results. Use with Count for pagination (e.g., offset 10 with count 50 returns records 11-60). |         |
| Result Count | The maximum number of results to return per page (1-1000). Defaults to 10 if not specified.                                                  |         |
| Fetch All    | When true, automatically paginates through all results to fetch all records. The Count and Offset inputs are ignored when this is enabled.   | false   |
| Connection   | The Mailchimp connection to use.                                                                                                             |         |

### List Customers {#listcustomers}

Get information about a store's customers

| Input        | Comments                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | The unique identifier for the e-commerce store.                                                                                              |         |
| Result Count | The maximum number of results to return per page (1-1000). Defaults to 10 if not specified.                                                  |         |
| Offset       | The number of records to skip before returning results. Use with Count for pagination (e.g., offset 10 with count 50 returns records 11-60). |         |
| Fetch All    | When true, automatically paginates through all results to fetch all records. The Count and Offset inputs are ignored when this is enabled.   | false   |
| Connection   | The Mailchimp connection to use.                                                                                                             |         |

### List Members {#listmembers}

Get information about members in a specific Mailchimp list

| Input        | Comments                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id      | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults.     |         |
| Result Count | The maximum number of results to return per page (1-1000). Defaults to 10 if not specified.                                                  |         |
| Offset       | The number of records to skip before returning results. Use with Count for pagination (e.g., offset 10 with count 50 returns records 11-60). |         |
| Fetch All    | When true, automatically paginates through all results to fetch all records. The Count and Offset inputs are ignored when this is enabled.   | false   |
| Connection   | The Mailchimp connection to use.                                                                                                             |         |

### List Order Line Items {#listorderlineitems}

List Order Line items

| Input        | Comments                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | The unique identifier for the e-commerce store.                                                                                              |         |
| Order Id     | The unique identifier for the order in the store.                                                                                            |         |
| Result Count | The maximum number of results to return per page (1-1000). Defaults to 10 if not specified.                                                  |         |
| Offset       | The number of records to skip before returning results. Use with Count for pagination (e.g., offset 10 with count 50 returns records 11-60). |         |
| Fetch All    | When true, automatically paginates through all results to fetch all records. The Count and Offset inputs are ignored when this is enabled.   | false   |
| Connection   | The Mailchimp connection to use.                                                                                                             |         |

### List Orders {#listorders}

List all the orders in a store

| Input        | Comments                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | The unique identifier for the e-commerce store.                                                                                              |         |
| Result Count | The maximum number of results to return per page (1-1000). Defaults to 10 if not specified.                                                  |         |
| Offset       | The number of records to skip before returning results. Use with Count for pagination (e.g., offset 10 with count 50 returns records 11-60). |         |
| Fetch All    | When true, automatically paginates through all results to fetch all records. The Count and Offset inputs are ignored when this is enabled.   | false   |
| Connection   | The Mailchimp connection to use.                                                                                                             |         |

### List Products {#listproducts}

List all products from a store

| Input        | Comments                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | The unique identifier for the e-commerce store.                                                                                              |         |
| Result Count | The maximum number of results to return per page (1-1000). Defaults to 10 if not specified.                                                  |         |
| Offset       | The number of records to skip before returning results. Use with Count for pagination (e.g., offset 10 with count 50 returns records 11-60). |         |
| Fetch All    | When true, automatically paginates through all results to fetch all records. The Count and Offset inputs are ignored when this is enabled.   | false   |
| Connection   | The Mailchimp connection to use.                                                                                                             |         |

### List Stores {#liststores}

Get information about all stores in the account

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Mailchimp connection to use. |         |

### List Webhooks {#listwebhooks}

List all webhooks configured for a specific list/audience.

| Input      | Comments                                                                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Mailchimp connection to use.                                                                                                         |         |
| List Id    | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults. |         |

### Ping {#ping}

Send a ping to determine the status of the Mailchimp servers

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Mailchimp connection to use. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Mailchimp

| Input                   | Comments                                                                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Mailchimp connection to use.                                                                                                                                                                                                                                     |         |
| URL                     | Input the path only (/reporting/facebook-ads), The base URL is already included (https://${dc}.api.mailchimp.com/3.0). For example, to connect to https://${dc}.api.mailchimp.com/3.0/reporting/facebook-ads, only /reporting/facebook-ads is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                  |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                        | false   |

### Send Campaign {#sendcampaign}

Send a Mailchimp campaign. For RSS Campaigns, the campaign will send according to its schedule. All other campaigns will send immediately.

| Input       | Comments                                                                   | Default |
| ----------- | -------------------------------------------------------------------------- | ------- |
| Campaign Id | The unique identifier for the campaign (10-character alphanumeric string). |         |
| Connection  | The Mailchimp connection to use.                                           |         |

### Update Customer {#updatecustomer}

Update a specific customer's information

| Input         | Comments                                                                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id      | The unique identifier for the e-commerce store.                                                                                                                                                                                                                                          |         |
| Customer Id   | The unique identifier for the customer.                                                                                                                                                                                                                                                  |         |
| Opt In Status | When true, the customer is opted-in to receive marketing communications. This value will not overwrite the opt-in status of pre-existing list members but will apply to new members added through the e-commerce API. Customers who don't opt in will be added as Transactional members. | false   |
| Company       | The company name.                                                                                                                                                                                                                                                                        |         |
| First Name    | The first name of the contact.                                                                                                                                                                                                                                                           |         |
| Last Name     | The last name of the contact.                                                                                                                                                                                                                                                            |         |
| Address 1     | The first line of the street address.                                                                                                                                                                                                                                                    |         |
| Address 2     | The second line of the street address (apartment, suite, etc.).                                                                                                                                                                                                                          |         |
| City          | The city name.                                                                                                                                                                                                                                                                           |         |
| Province      | The province name (primarily for Canadian addresses).                                                                                                                                                                                                                                    |         |
| Province Code | The province code (primarily for Canadian addresses).                                                                                                                                                                                                                                    |         |
| Postal Code   | The postal or ZIP code.                                                                                                                                                                                                                                                                  |         |
| Country       | The country name.                                                                                                                                                                                                                                                                        |         |
| Country Code  | The two-letter ISO country code (e.g., US, CA, GB).                                                                                                                                                                                                                                      |         |
| Connection    | The Mailchimp connection to use.                                                                                                                                                                                                                                                         |         |

### Update List {#updatelist}

Update the information or metadata of a list

| Input                 | Comments                                                                                                                                                                                                 | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id               | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults.                                                                 |         |
| Company               | The company name.                                                                                                                                                                                        |         |
| Address 1             | The first line of the street address.                                                                                                                                                                    |         |
| Address 2             | The second line of the street address (apartment, suite, etc.).                                                                                                                                          |         |
| City                  | The city name.                                                                                                                                                                                           |         |
| State                 | The state or region code.                                                                                                                                                                                |         |
| Postal Code           | The postal or ZIP code.                                                                                                                                                                                  |         |
| Phone                 | The phone number in E.164 format or local format.                                                                                                                                                        |         |
| Country               | The country name.                                                                                                                                                                                        |         |
| Name                  | The name of the audience list.                                                                                                                                                                           |         |
| From Email            | The 'from' email address for the campaign.                                                                                                                                                               |         |
| From Name             | The default 'from' name displayed for campaigns sent to this list.                                                                                                                                       |         |
| Subject               | The subject line of the email.                                                                                                                                                                           |         |
| Language              | The default language for this list's forms (use ISO 639-1 language code).                                                                                                                                |         |
| Marketing Permissions | When true, the list has marketing permissions (e.g., GDPR) enabled.                                                                                                                                      | false   |
| Email Type Option     | When true, the list supports multiple email formats and subscribers can choose between HTML or plain-text emails. When false, subscribers will receive HTML emails with a plain-text alternative backup. | false   |
| Permission reminder   | The permission reminder text explaining why subscribers are receiving emails.                                                                                                                            |         |
| Connection            | The Mailchimp connection to use.                                                                                                                                                                         |         |

### Update Member {#updatemember}

Update a specific member in a given list

| Input                 | Comments                                                                                                                                                                                      | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Skip Merge Fields     | When true, member data will be accepted without merge field values, even if the merge field is usually required.                                                                              | false   |
| List Id               | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults.                                                      |         |
| SubscriberHash        | The MD5 hash of the lowercase version of the list member's email address (32-character hex string). This endpoint also accepts plain email addresses in place of the hash.                    |         |
| Email                 | The email address of the subscriber.                                                                                                                                                          |         |
| Language              | The default language for this list's forms (use ISO 639-1 language code).                                                                                                                     |         |
| Status                | The subscriber's current status. Possible values: "subscribed", "unsubscribed", "cleaned", "pending", or "transactional".                                                                     |         |
| Email Type            | The type of email format the member prefers: 'html' or 'text'.                                                                                                                                |         |
| Merge Fields          | Merge fields (audience fields) as key-value pairs where the key is the merge tag. See [Mailchimp's merge fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/). |         |
| Interests             | Interest categories as key-value pairs where the key is the interest ID and the value is true/false.                                                                                          |         |
| VIP                   | When true, marks the subscriber as a VIP member with priority status.                                                                                                                         | false   |
| Marketing Permissions | The marketing permissions for the subscriber as an array of objects. Each object should contain 'marketing_permission_id' and 'enabled' fields.                                               |         |
| Connection            | The Mailchimp connection to use.                                                                                                                                                              |         |

### Update Webhook {#updatewebhook}

Update an existing webhook for a specific list/audience.

| Input       | Comments                                                                                                                                                                                                        | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Mailchimp connection to use.                                                                                                                                                                                |         |
| List Id     | The unique identifier for the audience list. Find this in your Mailchimp account under Audience > Settings > Audience name and defaults.                                                                        |         |
| Webhook ID  | The unique identifier for the webhook (10-character alphanumeric string).                                                                                                                                       |         |
| Webhook URL | The URL where the webhook will send requests. You can use this input to configure a component trigger.                                                                                                          |         |
| Events      | Select the events that will trigger the webhook (e.g., subscribe, unsubscribe, profile update).                                                                                                                 |         |
| Sources     | Select the sources that should trigger the webhook. <strong>User:</strong> changes made by subscribers, <strong>Admin:</strong> changes made by account admins, <strong>API:</strong> changes made via the API. |         |
