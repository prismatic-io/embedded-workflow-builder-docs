---
title: Azure OpenAI Service Connector
sidebar_label: Azure OpenAI Service
description: Generate completions and images using Azure OpenAI Service or OpenAI API.
---

![Azure OpenAI Service](./assets/azure-openai-service.png#connector-icon)
Generate completions and images using Azure OpenAI Service or OpenAI API.

## Connections

### API Key {#apikey}

Connect using an OpenAI or Azure OpenAI API key

| Input                              | Comments                                                                                                                                                                                                                                                                                                      | Default            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| API Key                            | [OpenAI API key](https://platform.openai.com/account/api-keys) or Azure OpenAI API key.                                                                                                                                                                                                                       |                    |
| Organization / Azure Resource Name | For Azure OpenAI: Enter your Azure resource name (the subdomain from your endpoint URL). For example, if your endpoint is https://my-resource.openai.azure.com/, enter 'my-resource'. For OpenAI: Enter your OpenAI organization ID (e.g. org-abc123). Only required if you belong to multiple organizations. |                    |
| Is OpenAI Key                      | When true, uses the OpenAI API directly. When false, uses Azure OpenAI Service.                                                                                                                                                                                                                               | false              |
| API Version                        | The Azure OpenAI API version to use. Only applies when using Azure OpenAI Service (not direct OpenAI).                                                                                                                                                                                                        | 2025-01-01-preview |

## Actions

### Create Chat Completion {#createchatcompletion}

Create a chat completion for a sequence of messages

| Input                   | Comments                                                                                                                                                                                                                                    | Default                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              | The Azure OpenAI Service or OpenAI API connection to use.                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                               |
| Model / Deployment Name | Specifies either the model deployment name (when using Azure OpenAI) or model name (when using OpenAI). See available models at https://platform.openai.com/docs/models.                                                                    | gpt-4o-mini                                                                                                                                                                                                                                                                                                                                                                                                   |
| Messages                | An array of message objects with 'role' (system, user, or assistant) and 'content' properties.                                                                                                                                              | <code>[<br /> {<br /> "role": "system",<br /> "content": "You are a helpful assistant."<br /> },<br /> {<br /> "role": "user",<br /> "content": "Who won the world series in 2020?"<br /> },<br /> {<br /> "role": "assistant",<br /> "content": "The Los Angeles Dodgers won the World Series in 2020."<br /> },<br /> {<br /> "role": "user",<br /> "content": "Where was it played?"<br /> }<br />]</code> |
| Temperature             | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.                                                        | 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| Top P                   | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. | 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| Number of Choices       | How many chat completion choices to generate for each input message.                                                                                                                                                                        | 1                                                                                                                                                                                                                                                                                                                                                                                                             |

### Create Image {#createimage}

Generate one or more images from a text prompt

| Input                   | Comments                                                                                                                                                                 | Default   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| Connection              | The Azure OpenAI Service or OpenAI API connection to use.                                                                                                                |           |
| Model / Deployment Name | Specifies either the model deployment name (when using Azure OpenAI) or model name (when using OpenAI). See available models at https://platform.openai.com/docs/models. | dall-e-3  |
| Prompt                  | A text description of the desired image(s). The maximum length is 1000 characters.                                                                                       |           |
| Number of Images        | The number of images to generate. Must be between 1 and 10.                                                                                                              | 1         |
| Image Size              | The size of the generated images. Must be one of 1792x1024, 1024x1792, or 1024x1024.                                                                                     | 1024x1024 |

### Create Multiple Chat Completions {#createcompletions}

Generate multiple completions for a set of prompts

| Input                   | Comments                                                                                                                                                                 | Default                                                                                                                                                                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              | The Azure OpenAI Service or OpenAI API connection to use.                                                                                                                |                                                                                                                                                                                                                                                                           |
| Model / Deployment Name | Specifies either the model deployment name (when using Azure OpenAI) or model name (when using OpenAI). See available models at https://platform.openai.com/docs/models. | gpt-4o-mini                                                                                                                                                                                                                                                               |
| Messages                | An array of message objects with 'role' (system, user, or assistant) and 'content' properties.                                                                           | <code>[<br /> "How are you today?",<br /> "What is Azure OpenAI?",<br /> "Why do children love dinosaurs?",<br /> "Generate a proof of Euler's identity",<br /> "Describe in single words only the good things that come into your mind about your mother."<br />]</code> |

### Raw Request {#rawrequest}

Send a raw HTTP request to the Azure OpenAI Service or OpenAI API

| Input                   | Comments                                                                                                                                                                                                                                | Default    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Connection              | The Azure OpenAI Service or OpenAI API connection to use.                                                                                                                                                                               |            |
| URL                     | Input the path only (/v1/images/generations), The base URL is already included (https://api.openai.com). For example, to connect to https://api.openai.com/v1/images/generations, only /v1/images/generations is entered in this field. | /v1/models |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                 |            |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                               |            |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                    |            |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                        |            |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                  |            |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                     |            |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                             |            |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                | json       |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                     |            |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                     | 0          |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                        | false      |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                     | 0          |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                           | false      |

### Summarize Text {#summarizetext}

Summarize a given text

| Input                   | Comments                                                                                                                                                                 | Default     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| Connection              | The Azure OpenAI Service or OpenAI API connection to use.                                                                                                                |             |
| Model / Deployment Name | Specifies either the model deployment name (when using Azure OpenAI) or model name (when using OpenAI). See available models at https://platform.openai.com/docs/models. | gpt-4o-mini |
| Text to Summarize       |                                                                                                                                                                          |             |
