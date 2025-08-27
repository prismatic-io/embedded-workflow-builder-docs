---
title: Fluent Commerce Connector
sidebar_label: Fluent Commerce
description: Manage orders within Fluent Commerce
---

![Fluent Commerce](./assets/fluent-commerce.png#connector-icon)
Manage orders within Fluent Commerce

## Connections

### Fluent Commerce OAuth 2.0 Password Grant

Authenticate requests to Fluent Commerce using a username and password

Fluent uses OAuth 2.0 password grant type for authentication.
To authenticate with Fluent, you will need a **Client ID** and **Client Secret** from Fluent, and your end users will need to enter their username and password.

| Input                   | Comments                                     | Default |
| ----------------------- | -------------------------------------------- | ------- |
| Fluent Host             | The retailer's Fluent API endpoint           |         |
| Retailer Username       | The retailer's username                      |         |
| Retailer Password       | The retailer's password                      |         |
| OAuth 2.0 Client ID     | A client ID obtained from Fluent support     |         |
| OAuth 2.0 Client Secret | A client secret obtained from Fluent support |         |

## Actions

### Create Customer

Create a new customer

| Input            | Comments                                                  | Default |
| ---------------- | --------------------------------------------------------- | ------- |
| Connection       | An OAuth 2.0 password grant type connection               |         |
| Retailer ID      | The ID of the retailer (a number)                         |         |
| Customer Email   | The email address of the customer                         |         |
| First Name       | The first name of the customer (required)                 |         |
| Last Name        | The last name of the customer                             |         |
| Phone Number     | The customer's phone number                               |         |
| Country          | The customer's country                                    |         |
| Time Zone        | The customer's time zone                                  |         |
| Promotion Opt In |                                                           | false   |
| Attributes       | Custom attributes you would like to apply to the customer |         |

### Create Product

Create a new standard product

| Input                           | Comments                                                   | Default  |
| ------------------------------- | ---------------------------------------------------------- | -------- |
| Connection                      | An OAuth 2.0 password grant type connection                |          |
| Product Catalogue Ref (ID)      | The reference ID (ref) of an existing product catalog      |          |
| Product Ref ID                  | The reference ID (ref) of the new product (must be unique) |          |
| Product Type                    | The type of the product                                    | STANDARD |
| Product Name                    | The name of the product (not required to be unique)        |          |
| Product Summary / Description   |                                                            |          |
| Global Trade Item Number (GTIN) | The global trade number of the product                     |          |
| Price Currency                  | Type of currency the price is in (USD, YEN, GBP, etc)      |          |
| Price Value                     | The price of the product (must be a floating-point number) |          |

### Generic GraphQL Request

Issue any GraphQL query or mutation with variables

| Input             | Comments                                    | Default                                                                             |
| ----------------- | ------------------------------------------- | ----------------------------------------------------------------------------------- |
| Connection        | An OAuth 2.0 password grant type connection |                                                                                     |
| Query or Mutation |                                             | <code>{<br /> me {<br /> id<br /> username<br /> primaryEmail<br /> }<br />}</code> |
| Variables         |                                             |                                                                                     |
| Variables Object  |                                             |                                                                                     |

### Get Current User

Get information about the currently authenticated user

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | An OAuth 2.0 password grant type connection |         |

### Get Customer by Email

Find a customer by their email address

| Input                  | Comments                                    | Default |
| ---------------------- | ------------------------------------------- | ------- |
| Connection             | An OAuth 2.0 password grant type connection |         |
| Customer Email Address | The customer's email address                |         |
