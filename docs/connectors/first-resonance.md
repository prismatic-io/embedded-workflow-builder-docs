---
title: First Resonance ION Connector
sidebar_label: First Resonance ION
description: Manage purchase orders and manufacturing data in First Resonance ION.
---

![First Resonance ION](./assets/first-resonance.png#connector-icon)
Manage purchase orders and manufacturing data in First Resonance ION.

## Connections

### OAuth Client Credentials {#firstresonanceoauthclientcredentials}

Get an access token for the ION API

You can get your OAuth Client Credentials from the ION API following the instructions [here](https://manual.firstresonance.io/api/access-tokens).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                     | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Auth Endpoint | The ION Auth Endpoint URL. Select your environment based on region and whether you're using production or sandbox.                                                                           |         |
| Client ID     | The OAuth 2.0 Client ID for ION. Find this in your ION account under Settings > API Keys. [Learn more](https://manual.firstresonance.io/api/api-keys)                                        |         |
| Client Secret | The OAuth 2.0 Client Secret for ION. This is generated when you create an API key in your ION account under Settings > API Keys. [Learn more](https://manual.firstresonance.io/api/api-keys) |         |

## Triggers

### Trigger {#firstresonancetrigger}

Receive a webhook from ION

## Actions

### Import Purchase Order from Quickbooks {#importpurchaseorderfromquickbooks}

Creates a Purchase Order from Quickbooks

| Input             | Comments                                                                                                                        | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The First Resonance ION connection to use.                                                                                      |         |
| GraphQL Variables | Optional variables to pass to the GraphQL query. Variables allow you to parameterize your queries for reusability and security. |         |
| Query             | The GraphQL mutation to create a purchase order in ION. This uses the createPurchaseOrder mutation from the ION API.            |         |

### Run GraphQL Query {#rawrequest}

Performs a generic GraphQL query against the API

| Input             | Comments                                                                                                                                                        | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The First Resonance ION connection to use.                                                                                                                      |         |
| GraphQL Query     | The GraphQL query to execute against the ION API. Use the [ION GraphQL Explorer](https://manual.firstresonance.io/api/about-graphql) to build and test queries. |         |
| GraphQL Variables | Optional variables to pass to the GraphQL query. Variables allow you to parameterize your queries for reusability and security.                                 |         |
