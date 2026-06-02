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

| Input                 | Comments                                           | Default       |
| --------------------- | -------------------------------------------------- | ------------- |
| API Key               | The API key for authentication.                    |               |
| Header Key            | The key of the header to use for the API key.      | Authorization |
| Authentication Scheme | The authentication scheme to use with the API key. | Basic         |

### Basic Username/Password {#basic}

Basic username and password authentication.

| Input    | Comments                         | Default |
| -------- | -------------------------------- | ------- |
| Username | The username for authentication. |         |
| Password | The password for authentication. |         |

### OAuth 2.0 Authorization Code {#authorizationcode}

OAuth 2.0 Authorization Code flow.

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
