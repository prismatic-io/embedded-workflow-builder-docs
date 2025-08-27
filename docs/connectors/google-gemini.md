---
title: Google Gemini Connector
sidebar_label: Google Gemini
description: Google Gemini is an offering of advanced AI models developed by Google's DeepMind. Use the component to generate chats, images, and videos.
---

![Google Gemini](./assets/google-gemini.png#connector-icon)
Google Gemini is an offering of advanced AI models developed by Google&#x27;s DeepMind. Use the component to generate chats, images, and videos.

## Connections

### Google Gemini API

Connect to Google Generative AI (Gemini) using an API key.

Navigate to [Google AI Studio](https://aistudio.google.com/app/apikey?authuser=1) and generate an API key.
Enter the key value into the connection configuration of the integration.

| Input   | Comments                                                                                           | Default |
| ------- | -------------------------------------------------------------------------------------------------- | ------- |
| API Key | Your Google AI Studio API key. Generate API keys [here](https://makersuite.google.com/app/apikey). |         |

### Vertex AI API

Connect to Google Generative AI (Gemini) using Vertex AI.

In order to Authenticate using **Vertex**:

1. A **Service Account** is needed. One may be created in the [Google Cloud Platform GCP Console](https://console.cloud.google.com/) from the **IAM & Admin** section.
   1. From the Service Account, use the **Email** value as the **Client Email** input value in the connection configuration.
1. Add the following roles to the Service Account:
   1. Vertex AI User or Vertex AI Administrator
   1. Storage Object Viewer
1. Once a Service Account is created, you will need to generate a **Service Account Key**
   1. Select the Service Account's options, navigate to the **Key** tab, and select **Add Key** to create a new key.
   1. After creating the key, you will be able to download a JSON file that contains the key information. This key **contains sensible data** and should be used with caution.
   1. Use the key downloaded in the previous step as the **Private Key** input value in the connection configuration.
1. The top section of the console will show the current project. Select this to display all projects and \*Project IDs\*\*.
1. Regions will be listed [here](https://cloud.google.com/vertex-ai/docs/general/locations) or by navigating to **Vertex AI Dashboard** from the console.
1. Enable the **Vertex API** by navigating to the **Library** section of **APIs & Services**. Search 'Vertex' and select enable for the **Vertex AI API**.

| Input        | Comments                                                                                                                           | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Project ID   | Your Google Cloud project ID.                                                                                                      |         |
| Region       | The region to use for API requests. [Get your region here](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/locations). |         |
| Client Email | The email address of the client you would like to connect to.                                                                      |         |
| Private Key  | The private key of the client you would like to connect to.                                                                        |         |

## Actions

### Conversation

Sends a message to the chat. Optionally, historical messages can be provided to continue the chat.

| Input             | Comments                                                                                                                                               | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Prompt            | The prompt you want to ask to the model.                                                                                                               |         |
| Chat History      | JSON string containing the chat history, you can use this parameter to give the model a context of the conversation.                                   |         |
| Model Name        | The name of the model to get information about (e.g., 'gemini-pro', 'gemini-pro-vision').                                                              |         |
| Temperature       | Controls randomness in the output. Higher values (e.g., 0.8) make output more random, lower values (e.g., 0.2) make it more focused and deterministic. |         |
| Max Output Tokens | Maximum number of tokens to generate in the response.                                                                                                  |         |
| Top K             | Limits token selection to the K most likely next tokens.                                                                                               |         |
| Top P             | Limits token selection to tokens with cumulative probability less than P.                                                                              |         |
| Safety Settings   | JSON string defining safety settings for content generation.                                                                                           |         |
| Extra Parameters  | Extra parameters to pass to the API.                                                                                                                   |         |
| Connection        | Select a Google Gemini connection.                                                                                                                     |         |

### Delete File

Deletes a file from the service.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| File Name  | The name of the file to delete.    |         |
| Connection | Select a Google Gemini connection. |         |

### Generate Image

Generates an image using the Google Generative AI (Gemini) model.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Model Name       | The name of the model to get information about (e.g., 'gemini-pro', 'gemini-pro-vision'). |         |
| Prompt           | Text prompt that typically describes the images to output.                                |         |
| Number of Images | Number of images to generate.                                                             |         |
| Language         | Language of the generated content.                                                        |         |
| Aspect Ratio     | Aspect ratio of the generated media.                                                      |         |
| Extra Parameters | Extra parameters to pass to the API.                                                      |         |
| Connection       | Select a Google Gemini connection.                                                        |         |

### Generate Video

Generates a video using the Google Generative AI (Gemini) model.

| Input             | Comments                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------- | ------- |
| Model Name        | The name of the model to get information about (e.g., 'gemini-pro', 'gemini-pro-vision'). |         |
| Prompt            | Text prompt that typically describes the video to output.                                 |         |
| FPS               | FPS of the generated video.                                                               |         |
| Number of Videos  | Number of videos to generate.                                                             |         |
| Person Generation | Whether allow to generate person videos, and restrict to specific ages.                   |         |
| Resolution        | Resolution of the generated video.                                                        |         |
| Aspect Ratio      | Aspect ratio of the generated media.                                                      |         |
| Duration Seconds  | Duration of the clip for video generation in seconds.                                     |         |
| Extra Parameters  | Extra parameters to pass to the API.                                                      |         |
| Connection        | Select a Google Gemini connection.                                                        |         |

### Get File

Retrieves the file information from the service.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| File Name  | The name of the file to get.       |         |
| Connection | Select a Google Gemini connection. |         |

### Get Model Info

Retrieves detailed information about a specific model from the Google Generative AI API.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | Select a Google Gemini connection.                                                        |         |
| Model Name | The name of the model to get information about (e.g., 'gemini-pro', 'gemini-pro-vision'). |         |

### List Files

Lists all current project files from the service.

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Fetch All  | If true, fetch all items.               | false   |
| Page Size  | The number of items to return per page. |         |
| Page Token | The page token to return.               |         |
| Connection | Select a Google Gemini connection.      |         |

### List Models

Retrieves a list of available models from the Google Generative AI API.

| Input            | Comments                                | Default |
| ---------------- | --------------------------------------- | ------- |
| Fetch All        | If true, fetch all items.               | false   |
| Page Size        | The number of items to return per page. |         |
| Page Token       | The page token to return.               |         |
| Filter           | The filter to apply to the list.        |         |
| Extra Parameters | Extra parameters to pass to the API.    |         |
| Connection       | Select a Google Gemini connection.      |         |

### Send Prompt

Send a prompt to the chat and provides a response.

| Input             | Comments                                                                                                                                               | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Prompt            | The text prompt to generate a response for.                                                                                                            |         |
| Model Name        | The name of the model to get information about (e.g., 'gemini-pro', 'gemini-pro-vision').                                                              |         |
| Temperature       | Controls randomness in the output. Higher values (e.g., 0.8) make output more random, lower values (e.g., 0.2) make it more focused and deterministic. |         |
| Max Output Tokens | Maximum number of tokens to generate in the response.                                                                                                  |         |
| Top K             | Limits token selection to the K most likely next tokens.                                                                                               |         |
| Top P             | Limits token selection to tokens with cumulative probability less than P.                                                                              |         |
| Safety Settings   | JSON string defining safety settings for content generation.                                                                                           |         |
| Extra Parameters  | Extra parameters to pass to the API.                                                                                                                   |         |
| Connection        | Select a Google Gemini connection.                                                                                                                     |         |

### Upload File

Uploads a file asynchronously to the Gemini API.

| Input        | Comments                           | Default |
| ------------ | ---------------------------------- | ------- |
| File         | The file to upload.                |         |
| File Name    | The name of the file to get.       |         |
| Display Name | The display name of the file.      |         |
| Connection   | Select a Google Gemini connection. |         |
