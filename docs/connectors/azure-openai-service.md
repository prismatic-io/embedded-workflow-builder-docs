---
title: Azure OpenAI Service Connector
sidebar_label: Azure OpenAI Service
description: Generate completions and images using Azure OpenAI Service or OpenAI API.
---

![Azure OpenAI Service](./assets/azure-openai-service.png#connector-icon)
[Azure OpenAI Service](https://azure.microsoft.com/en-us/products/ai-services/openai-service) is Microsoft's cloud service that provides REST API access to OpenAI's language models including GPT-4, GPT-3.5-Turbo, and DALL·E.
This component allows you to create chat completions, generate images, and perform text completions using Azure-hosted OpenAI models or directly through the OpenAI API.

## API Documentation

This component supports both the [Azure OpenAI Service REST API](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference) and the [OpenAI Platform API](https://platform.openai.com/docs/api-reference).

## Connections

### API Key {#apikey}

Connect using an OpenAI or Azure OpenAI API key

This connection supports both Azure OpenAI Service and standard OpenAI API authentication using API keys.

#### Prerequisites

For **Azure OpenAI Service**:

- An active [Azure subscription](https://azure.microsoft.com/free/dotnet/)
- [Azure OpenAI access approval](https://learn.microsoft.com/azure/cognitive-services/openai/overview#how-do-i-get-access-to-azure-openai)
- An Azure OpenAI resource created in the Azure portal

For **OpenAI API**:

- An active OpenAI account at [platform.openai.com](https://platform.openai.com/)
- Access to API key generation

#### Setup For Azure OpenAI Service

To use Azure OpenAI Service, an Azure OpenAI resource and API key are required.

1. Follow the [Azure OpenAI quickstart guide](https://learn.microsoft.com/azure/cognitive-services/openai/quickstart) to create an Azure OpenAI resource
2. In the Azure portal, navigate to the Azure OpenAI resource
3. Select **Keys and Endpoint** from the resource menu
4. Copy one of the displayed API keys

For additional information on Azure OpenAI authentication, refer to [Azure OpenAI Service REST API reference](https://learn.microsoft.com/azure/ai-services/openai/reference).

#### Setup For OpenAI API

To use the standard OpenAI API, an API key from OpenAI is required.

1. Navigate to [API Keys](https://platform.openai.com/account/api-keys) in the OpenAI platform
2. Click **Create new secret key**
3. Enter a name for the key (optional) and click **Create secret key**
4. Copy the generated API key (it begins with `sk-`)

Note: If the user account belongs to multiple OpenAI organizations, the organization ID will also be required. The organization ID can be found in [Organization settings](https://platform.openai.com/account/org-settings).

#### Configure the Connection

When configuring the connection:

- Enter the **API Key** from either Azure OpenAI Service or OpenAI API
- Set **Is OpenAI Key** to:
  - `false` for Azure OpenAI Service (default)
  - `true` for standard OpenAI API
- For **Organization** (OpenAI only):
  - Leave blank if the account belongs to a single organization
  - Enter the organization ID if the account belongs to multiple organizations

The API key format differs between providers:

- **Azure OpenAI**: 32-character hexadecimal string
- **OpenAI API**: Begins with `sk-` followed by a random string

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
