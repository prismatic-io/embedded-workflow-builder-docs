---
title: GraphQL Connector
sidebar_label: GraphQL
description: Make GraphQL requests (queries and mutations) to a GraphQL-based API
---

![GraphQL](./assets/graphql.png#connector-icon)
Make GraphQL requests (queries and mutations) to a GraphQL-based API

## Connections

### API Key {#apikey}

API Key connection

| Input                 | Comments                         | Default |
| --------------------- | -------------------------------- | ------- |
| API Key               | API Key                          |         |
| Authentication Scheme | The authentication scheme to use | Basic   |

### Basic Username/Password {#basic}

Basic Username and Password connection

| Input    | Comments | Default |
| -------- | -------- | ------- |
| Username | Username |         |
| Password | Password |         |

### OAuth 2.0 Authorization Code {#authorizationcode}

OAuth 2.0 Authorization Code flow

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                | Default |
| ------------- | ------------------------------------------------------- | ------- |
| Authorize URL | The OAuth 2.0 Authorization URL for the API             |         |
| Token URL     | The OAuth 2.0 Token URL for the API                     |         |
| Scopes        | Space separated OAuth 2.0 permission scopes for the API |         |
| Client ID     | Client Identifier of your app for the API               |         |
| Client Secret | Client Secret of your app for the API                   |         |
| Headers       | Additional header to supply to authorization requests   |         |

### OAuth 2.0 Client Credentials {#clientcredentials}

OAuth 2.0 Client Credentials flow

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                | Default |
| ------------- | ------------------------------------------------------- | ------- |
| Token URL     | The OAuth 2.0 Token URL for the API                     |         |
| Scopes        | Space separated OAuth 2.0 permission scopes for the API |         |
| Client ID     | Client Identifier of your app for the API               |         |
| Client Secret | Client Secret of your app for the API                   |         |
| Headers       | Additional header to supply to token requests           |         |

## Actions

### GraphQL Request {#graphqlrequest}

Issue a generic GraphQL request

| Input             | Comments                                       | Default                                                                                                                                                                                             |
| ----------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        |                                                |                                                                                                                                                                                                     |
| GraphQL Endpoint  | The endpoint of the GraphQL API                |                                                                                                                                                                                                     |
| Query or Mutation |                                                | query ($customerName: String!) {<br /> customers(name: $customerName) {<br /> nodes {<br /> id<br /> labels<br /> users {<br /> nodes {<br /> id<br /> email<br /> }<br /> }<br /> }<br /> }<br />} |
| Variables         | Variables to pass in to your query or mutation |                                                                                                                                                                                                     |
| Headers           | Custom headers to send along with your request |                                                                                                                                                                                                     |
