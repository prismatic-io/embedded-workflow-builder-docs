---
title: HTTP Connector
sidebar_label: HTTP
description: Make HTTP requests to URLs such as REST APIs, Webhooks, etc
---

![HTTP](./assets/http.png#connector-icon)
Make HTTP requests to URLs such as REST APIs, Webhooks, etc

## Connections

### API Key

API Key connection

If an API Key Connection is supplied, an `Authorization: Basic ${APIKEY}` header is used in the HTTP request.

| Input                 | Comments | Default |
| --------------------- | -------- | ------- |
| API Key               | API Key  |         |
| Authentication Scheme |          | Basic   |

### Basic Username/Password

Basic Username and Password connection

If a Basic Auth Connection is supplied, an `Authorization: Basic ${base64(USERNAME:PASSWORD)}` header is used in the HTTP request.

| Input    | Comments | Default |
| -------- | -------- | ------- |
| Username | Username |         |
| Password | Password |         |

### OAuth 2.0 Authorization Code

OAuth 2.0 Authorization Code flow

If an **OAuth 2.0 Connection** is supplied, an `Authorization: Bearer ${KEY}` header is used in the HTTP request, where `KEY` is the client key that is fetched from the OAuth provider.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                | Default |
| ------------- | ------------------------------------------------------- | ------- |
| Authorize URL | The OAuth 2.0 Authorization URL for the API             |         |
| Token URL     | The OAuth 2.0 Token URL for the API                     |         |
| Refresh URL   | The OAuth 2.0 Refresh URL for the API                   |         |
| Scopes        | Space separated OAuth 2.0 permission scopes for the API |         |
| Client ID     | Client Identifier of your app for the API               |         |
| Client Secret | Client Secret of your app for the API                   |         |
| Headers       | Additional header to supply to authorization requests   |         |

### OAuth 2.0 Client Credentials

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

### DELETE request

Issue a HTTP DELETE request

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | This is the URL to call.                                                                                                                                                                         |         |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, 'Retry Delay (ms)' is ignored.                                                          | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Timeout                             | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |

### GET Request

Issue a HTTP GET request

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | This is the URL to call.                                                                                                                                                                         |         |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, 'Retry Delay (ms)' is ignored.                                                          | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Timeout                             | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |

### PATCH request

Issue a HTTP PATCH request

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | This is the URL to call.                                                                                                                                                                         |         |
| Data                                | The HTTP body payload to send to the URL. Must be a string or a reference to output from a previous step.                                                                                        |         |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, 'Retry Delay (ms)' is ignored.                                                          | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Timeout                             | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |

### POST/PUT Form Data Request

POST/PUT data as multipart/form-data. Often useful for uploading binary data.

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | This is the URL to call.                                                                                                                                                                         |         |
| HTTP Method                         |                                                                                                                                                                                                  | post    |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, 'Retry Delay (ms)' is ignored.                                                          | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Form Data                           | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data                           | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names                | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Timeout                             | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |

### POST Request

Issue a HTTP POST request

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | This is the URL to call.                                                                                                                                                                         |         |
| Data                                | The HTTP body payload to send to the URL. Must be a string or a reference to output from a previous step.                                                                                        |         |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, 'Retry Delay (ms)' is ignored.                                                          | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Timeout                             | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |

### PUT request

Issue a HTTP PUT request

| Input                               | Comments                                                                                                                                                                                         | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                          |                                                                                                                                                                                                  |         |
| URL                                 | This is the URL to call.                                                                                                                                                                         |         |
| Data                                | The HTTP body payload to send to the URL. Must be a string or a reference to output from a previous step.                                                                                        |         |
| Response Type                       | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Header                              | A list of headers to send with the request.                                                                                                                                                      |         |
| Query Parameter                     | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Max Retry Count                     | The maximum number of retries to attempt.                                                                                                                                                        | 0       |
| Retry Delay (ms)                    | The delay in milliseconds between retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff             | Specifies whether to use a pre-defined exponential backoff strategy for retries. If this is set to true, 'Retry Delay (ms)' is ignored.                                                          | false   |
| Retry On All Errors                 | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Timeout                             | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Include Full Response               | Enabling this flag will include the full response instead of only the returned data.                                                                                                             | false   |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Ignore SSL Errors (Not Recommended) | When this flag is enabled, SSL certificate errors will be ignored. Use this flag with caution - ignoring SSL errors presents security issues. This should only be used for testing purposes.     | false   |
| Max Redirects                       | The maximum number of redirects to follow.                                                                                                                                                       | 5       |
