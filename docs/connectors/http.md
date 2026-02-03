---
title: HTTP Connector
sidebar_label: HTTP
description: Make HTTP requests to APIs and endpoints.
---

![HTTP](./assets/http.png#connector-icon)
Make HTTP requests to APIs and endpoints.

## Connections

### API Key {#apikey}

API key authentication.

The API Key connection enables authentication with any API that accepts an API key via the `Authorization` header.

This connection supports two authentication schemes:

- **Basic**: Sends the API key as `Authorization: Basic {apiKey}`
- **Bearer**: Sends the API key as `Authorization: Bearer {apiKey}`

#### Prerequisites

- An API key from the target service
- Knowledge of which authentication scheme the target API requires (Basic or Bearer)

#### Setup Steps

Obtain an API key from the target service. Refer to the target service's documentation for instructions on generating an API key.

#### Configure the Connection

1. Enter the **API Key** value obtained from the target service
2. Select the appropriate **Authentication Scheme**:
   - Select **Basic** if the API requires `Authorization: Basic {apiKey}` format
   - Select **Bearer** if the API requires `Authorization: Bearer {apiKey}` format
3. (Optional) For on-premises installations, configure the **Host** and **Port** fields

Refer to the target API's authentication documentation to determine which scheme to use.

:::note Authentication Scheme Selection
Most modern APIs use Bearer token authentication. If unsure, consult the target API's documentation or try Bearer first.
:::

| Input                 | Comments                                           | Default       |
| --------------------- | -------------------------------------------------- | ------------- |
| API Key               | The API key for authentication.                    |               |
| Header Key            | The key of the header to use for the API key.      | Authorization |
| Authentication Scheme | The authentication scheme to use with the API key. | Basic         |

### Basic Username/Password {#basic}

Basic username and password authentication.

The Basic Auth connection enables authentication with any API that accepts HTTP Basic Authentication.

Basic Authentication uses a username and password combination, which is encoded and sent in the `Authorization` header as `Authorization: Basic {base64(username:password)}`.

#### Prerequisites

- Valid credentials (username and password) for the target service
- Knowledge of whether the target API requires a username/password or username/API token combination

#### Setup Steps

Obtain credentials from the target service:

1. Determine if the API requires a password or an API token
   - Many cloud-based APIs require an API token instead of a password for security reasons
   - Self-hosted or legacy APIs may accept passwords
2. Generate an API token (if required) or obtain the password from the target service
3. Note the username (often an email address or account identifier)

Refer to the target service's authentication documentation for specific credential requirements.

#### Configure the Connection

- **Username**: Enter the username, email, or account identifier for the target service
- **Password**: Enter the password or API token for authentication
- (Optional) For on-premises installations:
  - **Host**: Enter the server hostname or IP address
  - **Port**: Enter the server port number

:::note API Token vs Password
For security reasons, many services recommend using API tokens instead of passwords for Basic Authentication. Consult the target service's documentation to determine which credential type is required.
:::

| Input    | Comments                         | Default |
| -------- | -------------------------------- | ------- |
| Username | The username for authentication. |         |
| Password | The password for authentication. |         |

### OAuth 2.0 Authorization Code {#authorizationcode}

OAuth 2.0 Authorization Code flow.

The OAuth 2.0 Authorization Code connection enables authentication with any API that supports the OAuth 2.0 Authorization Code flow.

This connection type is used when the target API requires users to authenticate through their service's login page and grant permissions to the integration.

#### Prerequisites

- An account with the target OAuth provider
- Access to create an OAuth application or client in the provider's developer console
- Knowledge of the provider's OAuth 2.0 endpoints (Authorize URL, Token URL, and optionally Refresh URL)

#### Setup Steps

1. Log in to the target service's developer console or app management portal
2. Create a new OAuth application or OAuth client
3. Configure the OAuth application:
   - Add the callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - Note the **Client ID** and **Client Secret** provided by the service
4. (Optional) Configure the required OAuth scopes or permissions for the application
5. Copy the following values from the OAuth provider's documentation or developer console:
   - **Authorize URL** (e.g., `https://provider.com/oauth/authorize`)
   - **Token URL** (e.g., `https://provider.com/oauth/token`)
   - **Refresh URL** (optional, often the same as Token URL)

#### Configure the Connection

Enter the following values obtained from the OAuth provider:

- **Authorize URL**: The OAuth 2.0 authorization endpoint URL
- **Token URL**: The OAuth 2.0 token endpoint URL
- **Refresh URL**: (Optional) The OAuth 2.0 refresh endpoint URL. If not provided, the Token URL will be used for token refresh
- **Scopes**: (Optional) Space-separated OAuth scopes required for the integration (e.g., `read write profile`)
- **Client ID**: The client identifier from the OAuth application
- **Client Secret**: The client secret from the OAuth application
- **Headers**: (Optional) Additional headers to include in authorization requests

Refer to the target OAuth provider's documentation for the specific endpoint URLs and required scopes.

:::note Finding OAuth Endpoints
OAuth endpoint URLs are typically found in the OAuth provider's developer documentation under sections like "OAuth 2.0", "API Authentication", or "Getting Started". Look for terms like "authorization endpoint", "token endpoint", or "OAuth URLs".
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default |
| ------------- | ----------------------------------------------------------------------------------- | ------- |
| Authorize URL | The OAuth 2.0 authorization URL for the API.                                        |         |
| Token URL     | The OAuth 2.0 token URL for the API.                                                |         |
| Refresh URL   | The OAuth 2.0 refresh URL for the API. If not provided, the token URL will be used. |         |
| Scopes        | Space-separated OAuth 2.0 permission scopes for the API.                            |         |
| Client ID     | The client identifier for your application.                                         |         |
| Client Secret | The client secret for your application.                                             |         |
| Headers       | Additional headers to supply to authorization requests.                             |         |

### OAuth 2.0 Client Credentials {#clientcredentials}

OAuth 2.0 Client Credentials flow.

The OAuth 2.0 Client Credentials connection enables authentication with any API that supports the OAuth 2.0 Client Credentials flow.

This flow is used for server-to-server authentication where the application itself (not a user) needs to authenticate. Unlike the Authorization Code flow, this does not require user interaction or browser-based authentication.

#### Prerequisites

- An account with the target OAuth provider
- Access to create an OAuth application or client in the provider's developer console
- Knowledge of the provider's OAuth 2.0 token endpoint URL
- Appropriate permissions to use the Client Credentials flow (some providers restrict this to specific account types)

#### Setup Steps

1. Log in to the target service's developer console or app management portal
2. Create a new OAuth application or OAuth client
3. Configure the OAuth application:
   - Enable the **Client Credentials** grant type or flow
   - Note the **Client ID** and **Client Secret** provided by the service
4. (Optional) Configure the required OAuth scopes or permissions for the application
5. Copy the **Token URL** from the OAuth provider's documentation or developer console (e.g., `https://provider.com/oauth/token`)

:::note When to Use Client Credentials
Use this flow for machine-to-machine authentication where no user interaction is required. This is common for background processes, scheduled tasks, or service-to-service integrations. If user authentication is required, use the OAuth 2.0 Authorization Code connection instead.
:::

#### Configure the Connection

Enter the following values obtained from the OAuth provider:

- **Token URL**: The OAuth 2.0 token endpoint URL
- **Scopes**: (Optional) Space-separated OAuth scopes required for the integration (e.g., `read write`)
- **Client ID**: The client identifier from the OAuth application
- **Client Secret**: The client secret from the OAuth application
- **Headers**: (Optional) Additional headers to include in token requests

Refer to the target OAuth provider's documentation for the specific token endpoint URL and required scopes.

:::warning No User Context
The Client Credentials flow authenticates as the application itself, not as a specific user. Actions taken will appear to be performed by the application or service account, not by individual users. Ensure the application has appropriate permissions for the intended operations.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                 | Default |
| ------------- | -------------------------------------------------------- | ------- |
| Token URL     | The OAuth 2.0 token URL for the API.                     |         |
| Scopes        | Space-separated OAuth 2.0 permission scopes for the API. |         |
| Client ID     | The client identifier for your application.              |         |
| Client Secret | The client secret for your application.                  |         |
| Headers       | Additional headers to supply to token requests.          |         |

## Actions

### DELETE request {#httpdelete}

Issue a HTTP DELETE request

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | The URL to call.                                                                                                                                                                                 |         |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, Retry Delay (ms) is ignored.                                                            | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Timeout                             | The maximum time in milliseconds that a client will await a response to its request.                                                                                                             |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |

### GET Request {#httpget}

Issue a HTTP GET request

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | The URL to call.                                                                                                                                                                                 |         |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, Retry Delay (ms) is ignored.                                                            | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Timeout                             | The maximum time in milliseconds that a client will await a response to its request.                                                                                                             |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |

### PATCH request {#httppatch}

Issue a HTTP PATCH request

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | The URL to call.                                                                                                                                                                                 |         |
| Data                                | The HTTP body payload to send to the URL. Must be a string or a reference to output from a previous step.                                                                                        |         |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, Retry Delay (ms) is ignored.                                                            | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Timeout                             | The maximum time in milliseconds that a client will await a response to its request.                                                                                                             |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |

### POST/PUT Form Data Request {#httppostformdata}

POST/PUT data as multipart/form-data. Often useful for uploading binary data.

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | The URL to call.                                                                                                                                                                                 |         |
| HTTP Method                         |                                                                                                                                                                                                  | post    |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, Retry Delay (ms) is ignored.                                                            | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Form Data                           | The form data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data                           | File data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names                | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Timeout                             | The maximum time in milliseconds that a client will await a response to its request.                                                                                                             |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |

### POST Request {#httppost}

Issue a HTTP POST request

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | The URL to call.                                                                                                                                                                                 |         |
| Data                                | The HTTP body payload to send to the URL. Must be a string or a reference to output from a previous step.                                                                                        |         |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, Retry Delay (ms) is ignored.                                                            | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Timeout                             | The maximum time in milliseconds that a client will await a response to its request.                                                                                                             |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |

### PUT request {#httpput}

Issue a HTTP PUT request

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | The URL to call.                                                                                                                                                                                 |         |
| Data                                | The HTTP body payload to send to the URL. Must be a string or a reference to output from a previous step.                                                                                        |         |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, Retry Delay (ms) is ignored.                                                            | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Timeout                             | The maximum time in milliseconds that a client will await a response to its request.                                                                                                             |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |
