---
title: First Resonance ION Connector
sidebar_label: First Resonance ION
description: Manage purchase orders and manufacturing data in First Resonance ION.
---

![First Resonance ION](./assets/first-resonance.png#connector-icon)
[First Resonance ION](https://www.firstresonance.io) is a factory operating system (also known as a manufacturing execution system or MES) designed for discrete manufacturers in aerospace, robotics, and other hardware industries. This component allows you to manage purchase orders and manufacturing data within the ION platform.

## API Documentation

This component was built using the [ION GraphQL API](https://manual.firstresonance.io).

## Connections

### OAuth Client Credentials {#firstresonanceoauthclientcredentials}

Get an access token for the ION API

To connect to First Resonance ION using OAuth 2.0 Client Credentials, an API key consisting of a Client ID and Client Secret is required.

For detailed information about ION API authentication, refer to the [First Resonance ION API Access Tokens documentation](https://manual.firstresonance.io/api/access-tokens).

#### Prerequisites

- An active First Resonance ION account
- Permissions to create API keys in the ION platform
- Knowledge of which environment to connect to (Production, Sandbox, Gov Cloud, or Australia)

#### Setup Steps

To generate OAuth Client Credentials:

1. Log in to the First Resonance ION platform.
2. Navigate to **Settings** > **API Keys**.
3. Create a new API key following the [ION API documentation](https://manual.firstresonance.io/api/api-keys).
4. Copy both the **Client ID** and **Client Secret** values that are generated.

:::note Environment Selection
First Resonance ION supports multiple deployment environments. Select the appropriate **Auth Endpoint** based on the target environment:

- **Production** - Standard production environment (`auth.buildwithion.com`)
- **Sandbox** - Staging/testing environment (`staging-auth.buildwithion.com`)
- **Production (Gov Cloud)** - Government cloud production (`auth.ion-gov.com`)
- **Sandbox (Gov Cloud)** - Government cloud staging (`staging-auth.ion-gov.com`)
- **Australia** - Australia region production (`auth.ion-aus.com`)
- **Australia (Staging)** - Australia region staging (`staging-auth.ion-aus.com`)
  :::

#### Configure the Connection

1. Select the appropriate **Auth Endpoint** from the dropdown based on the target environment.
2. Enter the **Client ID** from the generated API key.
3. Enter the **Client Secret** from the generated API key.

The **Token URL** is automatically constructed based on the selected **Auth Endpoint**.

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
