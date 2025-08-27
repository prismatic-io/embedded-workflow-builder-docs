---
title: xAI Grok Connector
sidebar_label: xAI Grok
description: xAI Grok is an AI-powered component that provides advanced chat and image generation capabilities.
---

![xAI Grok](./assets/xai-grok.png#connector-icon)
xAI Grok is an AI-powered component that provides advanced chat and image generation capabilities.

## Connections

### xAI Grok Connection

Connection to xAI Grok API using API key authentication

Navigate to [xAI Grok API](https://x.ai/api) and generate an API key.
Enter the key value into the connection configuration of the integration.

| Input   | Comments               | Default |
| ------- | ---------------------- | ------- |
| API Key | Your xAI Grok API key. |         |

## Actions

### Create Chat Completion

Create a chat completion using xAI Grok

| Input             | Comments                                                                                                                                                                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                                                     |         |
| Model             | Model name for the model to use. Obtainable [here](https://docs.x.ai/docs/models).                                                                                                                                                  |         |
| Messages          | A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.                                                                                                |         |
| Temperature       | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.                                                | 1       |
| Top P             | An alternative to sampling with `Temperature`, called nucleus sampling, where the model considers the results of the tokens with `Top P` probability mass. It is generally recommended to alter this or `Temperature` but not both. | 1       |
| Stream            | If set, partial message deltas will be sent.                                                                                                                                                                                        | false   |
| Additional Fields | Additional fields that are not supported by the action inputs. See [xAI API docs](https://docs.x.ai/docs/api-reference#chat-completions) for possible values.                                                                       |         |

### Create Message

Create a message using the Anthropic-compatible messages API endpoint

| Input             | Comments                                                                                                                                                                   | Default            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Connection        |                                                                                                                                                                            |                    |
| Messages          | Input messages. See [xAI API docs](https://docs.x.ai/docs/api-reference#messages-anthropic-compatible) for possible values.                                                |                    |
| Model             | Model name for the model to use. Obtainable [here](https://docs.x.ai/docs/models).                                                                                         | grok-3-fast-latest |
| Max Tokens        | The maximum number of tokens to generate before stopping. The model may stop before the max_tokens when it reaches the stop sequence.                                      | 100                |
| Additional Fields | Additional fields that are not supported by the action inputs. See [xAI API docs](https://docs.x.ai/docs/api-reference#messages-anthropic-compatible) for possible values. |                    |

### Generate Image

Generate an image using xAI's image generation API

| Input             | Comments                                                                                                                                                       | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                |         |
| Prompt            | The text prompt to generate an image from.                                                                                                                     |         |
| Model             | Model to be used.                                                                                                                                              |         |
| Number of Images  | Number of images to generate.                                                                                                                                  |         |
| Additional Fields | Additional fields that are not supported by the action inputs. See [xAI API docs](https://docs.x.ai/docs/api-reference#image-generations) for possible values. |         |

### Get Model

Get details about a specific model

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection |                                  |         |
| Model ID   | The ID of the model to retrieve. |         |

### List Models

List all available models from xAI

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send raw HTTP request to xAI

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/models), The base URL is already included (https://api.x.ai/v1). For example, to connect to https://api.x.ai/v1/models, only /models is entered in this field.             |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |
