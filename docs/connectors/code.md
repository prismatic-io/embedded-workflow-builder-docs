---
title: Code Connector
sidebar_label: Code
description: Author and run your own code
---

![Code](./assets/code.png#connector-icon)
Author and run your own code

## Connections

### API Key {#apikey}

API Key connection

| Input   | Comments | Default |
| ------- | -------- | ------- |
| API Key | API Key  |         |

### API Key Secret {#apikeysecret}

API Key Secret connection

| Input      | Comments   | Default |
| ---------- | ---------- | ------- |
| API Key    | API Key    |         |
| API Secret | API Secret |         |

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

### Private Key {#privatekey}

Private key connection

| Input       | Comments    | Default |
| ----------- | ----------- | ------- |
| Username    | Username    |         |
| Private Key | Private Key |         |

## Triggers

### Code Block Trigger {#runcodetrigger}

Author and run your own code as a trigger

| Input | Comments                | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code  | The code to be executed | /\*<br /> Access config variables by name through the configVars object. e.g.<br /> const apiEndpoint = `${configVars["App Base URL"]}/api`;<br /><br /> Access the trigger payload using the payload argument. This includes<br /> headers, the body of the request, and more information about the request.<br /><br /> You can return string, number or complex object data. e.g.<br /> return { payload: { foo: "Hello", bar: 123.45, baz: true } };<br /><br /> You are also able to return an optional response to the webhook caller.<br /> For example, you can respond with a CSV response like the following:<br /> return {<br /> payload: { foo: "Hello", bar: 123.45, baz: true },<br /> response: { statusCode: 200, contentType: "text/csv", body: "hello,world" },<br /> }<br />\*/<br /><br />module.exports = async ({ logger, configVars }, payload) => {<br /> const response = {<br /> statusCode: 200,<br /> contentType: "text/plain",<br /> body: "hello",<br /> };<br /> return { payload, response };<br />}; |

## Actions

### Code Block {#runcode}

Author and run your own code

| Input | Comments                | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code  | The code to be executed | /\*<br /> Access config variables by name through the configVars object. e.g.<br /> const apiEndpoint = `${configVars["App Base URL"]}/api`;<br /><br /> Access previous steps' results through the stepResults object. Trigger<br /> and step names are camelCased. If the step "Get Data from API" returned<br /> {"foo": "bar", "baz": 123}, you could destructure that data with:<br /> const { foo, baz } = stepResults.getDataFromApi.results;<br /><br /> You can return string, number or complex object data. e.g.<br /> return { data: { foo: "Hello", bar: 123.45, baz: true } };<br />\*/<br /><br />module.exports = async ({ logger, configVars }, stepResults) => {<br /> return { data: null };<br />};<br /> |
