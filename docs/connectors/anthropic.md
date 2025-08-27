---
title: Anthropic Connector
sidebar_label: Anthropic
description: Interact with Anthropic's Claude models
---

![Anthropic](./assets/anthropic.png#connector-icon)
Interact with Anthropic&#x27;s Claude models

## Connections

### Anthropic API

Connection to Anthropic's Claude API

To generate an API key:

1. Navigate to [API Keys](https://console.anthropic.com/settings/keys) and select **create key**
2. Enter the API key value into the connection configuration of the integration.

| Input   | Comments                | Default |
| ------- | ----------------------- | ------- |
| API Key | Your Anthropic API key. |         |

## Actions

### Chat

Start a new conversation with Claude

| Input         | Comments                                                             | Default                  |
| ------------- | -------------------------------------------------------------------- | ------------------------ |
| Connection    | Anthropic API connection.                                            |                          |
| Model         | The Claude model to use.                                             | claude-3-5-sonnet-latest |
| Message       | The message to send in the conversation.                             |                          |
| System Prompt | Optional system prompt to set the context and behavior for the chat. |                          |
| Max Tokens    | Maximum number of tokens to generate (default: 4096).                | 4096                     |
| Temperature   | Randomness of the output (0-1, default: 1).                          | 1                        |

### Count Tokens

Count the number of tokens in a message or conversation

| Input      | Comments                                 | Default                  |
| ---------- | ---------------------------------------- | ------------------------ |
| Connection | Anthropic API connection.                |                          |
| Model      | The Claude model to use.                 | claude-3-5-sonnet-latest |
| Message    | The message to send in the conversation. |                          |

### Get Model

Get details of a specific Claude model

| Input      | Comments                  | Default                  |
| ---------- | ------------------------- | ------------------------ |
| Connection | Anthropic API connection. |                          |
| Model      | The Claude model to use.  | claude-3-5-sonnet-latest |

### List Models

List all available Claude models

| Input      | Comments                                                                                                        | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | Anthropic API connection.                                                                                       |         |
| Fetch All  | Fetch all paginated results. Turning this On will ignore the Limit, After ID, and Before ID inputs.             | false   |
| Before ID  | ID of the object to use as a cursor for pagination. Returns the page of results immediately before this object. |         |
| After ID   | ID of the object to use as a cursor for pagination. Returns the page of results immediately after this object.  |         |
| Limit      | Number of items to return per page. Defaults to 20. Range: 1-3.                                                 | 20      |

### Raw Request

Send raw HTTP request to Anthropic

| Input                   | Comments                                                                                                                                                                                               | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | Anthropic API connection.                                                                                                                                                                              |         |
| URL                     | Input the path only (/models), The base URL is already included (https://api.anthropic.com/v1). For example, to connect to https://api.anthropic.com/v1/models, only /models is entered in this field. | /models |
| Method                  | The HTTP method to use.                                                                                                                                                                                |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                              |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                   |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                       |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                 |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                    |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                            |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                               | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                    |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                    | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.       | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                    | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                          | false   |
