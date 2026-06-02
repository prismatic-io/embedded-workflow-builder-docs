---
title: Google Gemini Connector
sidebar_label: Google Gemini
description: Interact with Google Gemini AI models to generate text, images, videos, and manage chat conversations.
---

![Google Gemini](./assets/google-gemini.png#connector-icon)
Interact with Google Gemini AI models to generate text, images, videos, and manage chat conversations.

## Connections

### API Key {#apikeyconnection}

Authenticate requests to Google Gemini using an API key.

| Input   | Comments                                                                                                           | Default |
| ------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| API Key | The Google AI Studio API key for authentication. Generate API keys [here](https://aistudio.google.com/app/apikey). |         |

### Service Account {#vertexaiconnection}

Authenticate requests to Google Gemini via Vertex AI using a service account.

| Input        | Comments                                                                                                                                 | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Project ID   | The Google Cloud project ID associated with the Vertex AI API.                                                                           |         |
| Region       | The region to use for API requests. See [available regions](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/locations). |         |
| Client Email | The service account email address used to authenticate with Google Cloud.                                                                |         |
| Private Key  | The private key from the service account credentials used for authentication.                                                            |         |

## Actions

### Delete File {#deletefile}

Deletes a file from Google Gemini.

| Input      | Comments                                                         | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| File Name  | The unique resource name of the file to delete from the service. |         |
| Connection | The Google Gemini connection to use.                             |         |

### Generate Image {#generateimage}

Generates an image using the Google Generative AI (Gemini) model.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Model Name       | The name of the model to get information about (e.g., 'gemini-pro', 'gemini-pro-vision'). |         |
| Prompt           | Text prompt that typically describes the images to output.                                |         |
| Number of Images | The total count of images the model should produce per request.                           |         |
| Language         | The locale used to interpret the prompt and generate content.                             |         |
| Aspect Ratio     | The width-to-height proportion for the generated media output (e.g., 16:9, 1:1).          |         |
| Extra Parameters | Additional parameters to include in the request as key-value pairs.                       |         |
| Connection       | The Google Gemini connection to use.                                                      |         |

### Generate Text {#generatetext}

Sends a prompt to the model and returns a generated text response.

| Input             | Comments                                                                                                                                               | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Prompt            | The text prompt to generate a response for.                                                                                                            |         |
| Model Name        | The name of the model to get information about (e.g., 'gemini-pro', 'gemini-pro-vision').                                                              |         |
| Temperature       | Controls randomness in the output. Higher values (e.g., 0.8) make output more random, lower values (e.g., 0.2) make it more focused and deterministic. |         |
| Max Output Tokens | Maximum number of tokens to generate in the response.                                                                                                  |         |
| Top K             | Limits token selection to the K most likely next tokens.                                                                                               |         |
| Top P             | Limits token selection to tokens with cumulative probability less than P.                                                                              |         |
| Safety Settings   | The safety threshold configuration for content generation. Each entry specifies a harm category and its blocking threshold.                            |         |
| Extra Parameters  | Additional parameters to include in the request as key-value pairs.                                                                                    |         |
| Connection        | The Google Gemini connection to use.                                                                                                                   |         |

### Generate Video {#generatevideo}

Generates a video using the Google Generative AI (Gemini) model.

| Input             | Comments                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------ | ------- |
| Model Name        | The name of the model to get information about (e.g., 'gemini-pro', 'gemini-pro-vision').  |         |
| Prompt            | Text prompt that typically describes the video to output.                                  |         |
| FPS               | The frames per second for the generated video output.                                      |         |
| Number of Videos  | The total count of videos the model should produce per request.                            |         |
| Person Generation | Controls whether the model can generate videos containing people and restricts age groups. |         |
| Resolution        | The pixel dimensions (width x height) for the generated video output.                      |         |
| Aspect Ratio      | The width-to-height proportion for the generated media output (e.g., 16:9, 1:1).           |         |
| Duration Seconds  | The length of the generated video clip in seconds.                                         |         |
| Extra Parameters  | Additional parameters to include in the request as key-value pairs.                        |         |
| Connection        | The Google Gemini connection to use.                                                       |         |

### Get File {#getfile}

Retrieves file information from Google Gemini.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| File Name  | The unique resource name assigned by the API to identify the file. |         |
| Connection | The Google Gemini connection to use.                               |         |

### Get Model Info {#getmodelinfo}

Retrieves detailed information about a specific model from the Google Generative AI API.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | The Google Gemini connection to use.                                                      |         |
| Model Name | The name of the model to get information about (e.g., 'gemini-pro', 'gemini-pro-vision'). |         |

### List Files {#listfiles}

Lists all files in the current project from Google Gemini.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Page Size  | The maximum number of results to return per page.                       |         |
| Page Token | The pagination token from a previous request.                           |         |
| Connection | The Google Gemini connection to use.                                    |         |

### List Models {#listmodels}

Retrieves a list of available models from the Google Generative AI API.

| Input            | Comments                                                                | Default |
| ---------------- | ----------------------------------------------------------------------- | ------- |
| Fetch All        | When true, automatically fetches all pages of results using pagination. | false   |
| Page Size        | The maximum number of results to return per page.                       |         |
| Page Token       | The pagination token from a previous request.                           |         |
| Filter           | A filter expression to narrow down the results returned by the API.     |         |
| Extra Parameters | Additional parameters to include in the request as key-value pairs.     |         |
| Connection       | The Google Gemini connection to use.                                    |         |

### Send Message {#sendmessage}

Sends a message to the chat. Supports providing historical messages to continue a conversation.

| Input             | Comments                                                                                                                                               | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Prompt            | The text prompt to send as a message to the model.                                                                                                     |         |
| Chat History      | The previous messages in the conversation, used to provide context to the model for continuity.                                                        |         |
| Model Name        | The name of the model to get information about (e.g., 'gemini-pro', 'gemini-pro-vision').                                                              |         |
| Temperature       | Controls randomness in the output. Higher values (e.g., 0.8) make output more random, lower values (e.g., 0.2) make it more focused and deterministic. |         |
| Max Output Tokens | Maximum number of tokens to generate in the response.                                                                                                  |         |
| Top K             | Limits token selection to the K most likely next tokens.                                                                                               |         |
| Top P             | Limits token selection to tokens with cumulative probability less than P.                                                                              |         |
| Safety Settings   | The safety threshold configuration for content generation. Each entry specifies a harm category and its blocking threshold.                            |         |
| Extra Parameters  | Additional parameters to include in the request as key-value pairs.                                                                                    |         |
| Connection        | The Google Gemini connection to use.                                                                                                                   |         |

### Upload File {#uploadfile}

Uploads a file asynchronously to the Gemini API.

| Input        | Comments                                                                       | Default |
| ------------ | ------------------------------------------------------------------------------ | ------- |
| File         | The file content to upload. This can be a file reference from a previous step. |         |
| File Name    | The unique resource name assigned by the API to identify the file.             |         |
| Display Name | A human-readable label for the file shown in the Google AI interface.          |         |
| Connection   | The Google Gemini connection to use.                                           |         |
