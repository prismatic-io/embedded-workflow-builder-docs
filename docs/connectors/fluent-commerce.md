---
title: Fluent Commerce Connector
sidebar_label: Fluent Commerce
description: Manage orders within Fluent Commerce
---

![Fluent Commerce](./assets/fluent-commerce.png#connector-icon)
[Fluent Commerce](https://fluentcommerce.com/) is an order management system for tracking customers, orders and inventory.

This component allows creating customers and products, looking up a customer by email address, retrieving the authenticated user, and sending custom GraphQL queries and mutations. A polling trigger reports new and updated orders on a schedule.

## API Documentation

This component was built using the [Fluent Commerce GraphQL API](https://docs.fluentcommerce.com/essential-knowledge/graphql-api).

## Connections

### Fluent Commerce OAuth 2.0 Password Grant {#fluent-password-grant}

Authenticate requests to Fluent Commerce using a username and password

Fluent uses OAuth 2.0 password grant type for authentication.
Authenticating with Fluent requires a **Client ID** and **Client Secret** from Fluent, and end users must enter their username and password.

#### Prerequisites

- A Fluent Commerce retailer account with a username and password
- The Fluent API host URL for the retailer
- An OAuth 2.0 **Client ID** and **Client Secret** issued by Fluent

#### Setup Steps

1. Contact Fluent support to request an OAuth 2.0 Client ID and Client Secret for the retailer.
2. Gather the Fluent API host URL, the retailer username, and the retailer password.

#### Configure the Connection

Create a connection of type **Fluent Commerce OAuth 2.0 Password Grant** and enter the following:

- **Fluent Host**: Enter the retailer's Fluent API endpoint, for example `https://REPLACE-ME.api.fluentretail.com`.
- **Retailer Username**: Enter the retailer's username.
- **Retailer Password**: Enter the retailer's password.
- **OAuth 2.0 Client ID**: Enter the client ID obtained from Fluent support.
- **OAuth 2.0 Client Secret**: Enter the client secret obtained from Fluent support.

| Input                   | Comments                                     | Default |
| ----------------------- | -------------------------------------------- | ------- |
| Fluent Host             | The retailer's Fluent API endpoint           |         |
| Retailer Username       | The retailer's username                      |         |
| Retailer Password       | The retailer's password                      |         |
| OAuth 2.0 Client ID     | A client ID obtained from Fluent support     |         |
| OAuth 2.0 Client Secret | A client secret obtained from Fluent support |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Retrieves existing and ongoing orders from Fluent Commerce. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                                                            | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Fluent Commerce connection to use.                                                                                                                                                                                                                                              |         |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record modified on or after this date once, ignoring the field and visibility filters. |         |
| Retailer ID          | Optional Fluent retailer ID to scope the polling query. When omitted, the connection's default tenant scope applies.                                                                                                                                                                |         |
| Show New Records     | When enabled, orders whose `createdOn` falls after the last poll will be emitted in the `created` array.                                                                                                                                                                            | true    |
| Show Updated Records | When enabled, orders whose `updatedOn` falls after the last poll but were created earlier will be emitted in the `updated` array.                                                                                                                                                   | true    |

## Actions

### Create Customer {#createcustomer}

Create a new customer

| Input            | Comments                                                                                                                         | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Fluent Commerce connection to use.                                                                                           |                 |
| Retailer ID      | The ID of the retailer (a number)                                                                                                |                 |
| Customer Email   | The email address of the customer                                                                                                |                 |
| First Name       | The first name of the customer (required)                                                                                        |                 |
| Promotion Opt In | When true, the customer is opted in to receive promotional communications.                                                       | false           |
| Last Name        | The last name of the customer                                                                                                    |                 |
| Phone Number     | The customer's phone number                                                                                                      |                 |
| Country          | The customer's country                                                                                                           |                 |
| Time Zone        | The customer's time zone                                                                                                         |                 |
| Attributes       | Custom attributes to apply to the customer. Each key becomes the attribute name, and each value is stored as a STRING attribute. | <code>[]</code> |

### Create Product {#createproduct}

Create a new standard product

| Input                           | Comments                                                             | Default  |
| ------------------------------- | -------------------------------------------------------------------- | -------- |
| Connection                      | The Fluent Commerce connection to use.                               |          |
| Product Catalogue Ref (ID)      | The reference ID (ref) of an existing product catalog                |          |
| Product Ref ID                  | The reference ID (ref) of the new product (must be unique)           |          |
| Product Type                    | The type of the product                                              | STANDARD |
| Product Name                    | The name of the product (not required to be unique)                  |          |
| Product Summary / Description   | A short description of the product, stored as the product's summary. |          |
| Global Trade Item Number (GTIN) | The global trade number of the product                               |          |
| Price Currency                  | Type of currency the price is in (USD, YEN, GBP, etc)                |          |
| Price Value                     | The price of the product (must be a floating-point number)           |          |

### Generic GraphQL Request {#genericrequest}

Issue any GraphQL query or mutation with variables

| Input             | Comments                                                                                                                      | Default                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Connection        | The Fluent Commerce connection to use.                                                                                        |                                                                                     |
| Query or Mutation | The GraphQL query or mutation to send to the Fluent Commerce API.                                                             | <code>{<br /> me {<br /> id<br /> username<br /> primaryEmail<br /> }<br />}</code> |
| Variables         | Key-value pairs passed to the query as GraphQL variables.                                                                     | <code>[]</code>                                                                     |
| Variables Object  | A JSON object of GraphQL variables, for values that are not strings. Merged with Variables; on a shared key, this value wins. |                                                                                     |

### Get Current User {#getcurrentuser}

Get information about the currently authenticated user

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Fluent Commerce connection to use. |         |

### Get Customer by Email {#getcustomerbyemailaddress}

Find a customer by their email address

| Input                  | Comments                               | Default |
| ---------------------- | -------------------------------------- | ------- |
| Connection             | The Fluent Commerce connection to use. |         |
| Customer Email Address | The customer's email address           |         |
