---
title: DeepSeek Connector
sidebar_label: DeepSeek
description: DeepSeek is an AI developer of large language models (LLM) focused on providing high performance models.
---

![DeepSeek](./assets/deepseek.png#connector-icon)
DeepSeek is an AI developer of large language models (LLM) focused on providing high performance models.

## Connections

### API Key

The DeepSeek API Key to use in order to authenticate with the DeepSeek API.

1. Login to [DeepSeek](https://www.deepseek.com/) and navigate to the [API Keys](https://platform.deepseek.com/api_keys) section.
2. Select **Create New API Key** and enter into the connection configuration of the integration.

| Input   | Comments          | Default |
| ------- | ----------------- | ------- |
| API Key | DeepSeek API Key. |         |

## Actions

### Create Chat Completion

Creates a model response for the given chat conversation.

| Input                           | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |         |
| Messages                        | A list of messages comprising the conversation so far.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Model                           | The model to use in order to generate the chat completion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |         |
| Frequency Penalty               | Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.                                                                                                                                                                                                                                                                                                                                |         |
| Max Tokens                      | Integer between 1 and 8192. The maximum number of tokens that can be generated in the chat completion.The total length of input tokens and generated tokens is limited by the model's context length. If max_tokens is not specified, the default value 4096 is used.                                                                                                                                                                                                                                                     |         |
| Presence Penalty                | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.                                                                                                                                                                                                                                                                                                                                             |         |
| Response Format                 | The format of the response. The response format can be either 'json_object' or 'text'.                                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Stop Sequence(s)                | The stop sequence(s) to use in order to generate the chat completion.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |         |
| Stream                          | If set, partial message deltas will be sent. Tokens will be sent as data-only server-sent events (SSE) as they become available, with the stream terminated by a data: [DONE] message.                                                                                                                                                                                                                                                                                                                                    | false   |
| Include Usage                   | Only set this when you set stream: When true, an additional chunk will be streamed before the data: [DONE] message. The usage field on this chunk shows the token usage statistics for the entire request, and the choices field will always be an empty array. All other chunks will also include a usage field, but with a null value.                                                                                                                                                                                  | false   |
| Temperature                     | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. [We generally recommend altering this or top_p but not both].                                                                                                                                                                                                                                                                        |         |
| Top P                           | Number between 0 and 1. Higher values like 0.95 will make the output more random, while lower values like 0.05 will make it more focused and deterministic. [We generally recommend altering this or temperature but not both].                                                                                                                                                                                                                                                                                           |         |
| Tools                           | The tools to use in order to generate the chat completion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |         |
| Tool Choice                     | Controls which (if any) tool is called by the model. using 'none' means the model will not call any tool and instead generates a message. using 'auto' means the model can pick between generating a message or calling one or more tools. using 'required' means the model must call one or more tools. Specifying a particular tool via {type: "function", function: {name: "my_function"}} forces the model to call that tool.none is the default when no tools are present. auto is the default if tools are present. |         |
| Should return Log Probabilities | Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the content of message.                                                                                                                                                                                                                                                                                                                                                          | false   |
| Top Log Probabilities           | An integer between 0 and 20 specifying the number of most likely tokens to return at each token position, each with an associated log probability. logprobs must be set to true if this parameter is used.                                                                                                                                                                                                                                                                                                                |         |

### List Models

Retrieves the currently available models, and provides basic information about each one such as the owner and availability.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send a Raw Request to the DeepSeek API.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
| URL                     | This is the URL to call.                                                                                                                                                                         |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |
