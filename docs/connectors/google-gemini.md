---
title: Google Gemini Connector
sidebar_label: Google Gemini
description: Google Gemini is an offering of advanced AI models developed by Google's DeepMind. Use the component to generate chats, images, and videos.
---

![Google Gemini](./assets/google-gemini.png#connector-icon)
[Google Gemini](https://gemini.google.com/) is a family of advanced multimodal AI models developed by Google DeepMind.

This component allows you to generate text, images, and videos, manage uploaded files, and list available models using the Google Generative AI API.

## API Documentation

This component was built using the [Google Generative AI API Reference](https://ai.google.dev/api/rest).

## Connections

### Google Gemini API {#apikeyconnection}

Connect to Google Generative AI (Gemini) using an API key.

Create a connection of type **API Key**.

To authenticate with Google Gemini using an API key, generate a key from Google AI Studio.

#### Prerequisites

- A Google account with access to [Google AI Studio](https://aistudio.google.com/)

#### Setup Steps

1. Navigate to [Google AI Studio API Keys](https://aistudio.google.com/app/apikey)
2. Click **Create API Key** and select a Google Cloud project
3. Copy the generated API key

#### Configure the Connection

- Enter the **API Key** value into the connection configuration

| Input   | Comments                                                                                           | Default |
| ------- | -------------------------------------------------------------------------------------------------- | ------- |
| API Key | Your Google AI Studio API key. Generate API keys [here](https://makersuite.google.com/app/apikey). |         |

### Vertex AI API {#vertexaiconnection}

Connect to Google Generative AI (Gemini) using Vertex AI.

Create a connection of type **Service Account**.

To authenticate with Google Gemini via Vertex AI, a Google Cloud service account with the appropriate roles is required.

#### Prerequisites

- A Google Cloud project with billing enabled
- Access to the [Google Cloud Console](https://console.cloud.google.com/)
- The Vertex AI API enabled in the project

#### Setup Steps

1. Navigate to the [Google Cloud Console](https://console.cloud.google.com/) and open the **IAM & Admin** section
2. Create a **Service Account** (or use an existing one)
3. Assign the following roles to the Service Account:
   - **Vertex AI User** or **Vertex AI Administrator**
   - **Storage Object Viewer**
4. Generate a **Service Account Key**:
   - Select the Service Account, navigate to the **Keys** tab, and click **Add Key** to create a new key
   - Download the JSON file containing the key information

   :::warning
   The downloaded key file contains sensitive credentials. Store it securely and do not expose it in version control.
   :::

5. Note the **Project ID** from the top section of the console (click the project selector to display all projects and their IDs)
6. Identify the target [region](https://docs.cloud.google.com/vertex-ai/docs/general/locations) by navigating to the **Vertex AI Dashboard** in the console
7. Enable the **Vertex AI API** by navigating to **APIs & Services > Library**, searching for "Vertex AI API", and clicking **Enable**

#### Configure the Connection

- Enter the **Client Email** using the Service Account email address
- Enter the **Private Key** from the downloaded JSON key file
- Enter the **Project ID** of the Google Cloud project
- Enter the **Region** for API requests (e.g., `us-central1`). Refer to the [available regions](https://docs.cloud.google.com/vertex-ai/docs/general/locations) for supported values

| Input        | Comments                                                                                                                           | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Project ID   | Your Google Cloud project ID.                                                                                                      |         |
| Region       | The region to use for API requests. [Get your region here](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/locations). |         |
| Client Email | The email address of the client you would like to connect to.                                                                      |         |
| Private Key  | The private key of the client you would like to connect to.                                                                        |         |

## Actions

### Delete File {#deletefile}

Deletes a file from the service.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| File Name  | The name of the file to delete.    |         |
| Connection | Select a Google Gemini connection. |         |

### Generate Image {#generateimage}

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

### Generate Text {#generatetext}

Send a prompt to the model and return a generated text response.

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

### Generate Video {#generatevideo}

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

### Get File {#getfile}

Retrieves the file information from the service.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| File Name  | The name of the file to get.       |         |
| Connection | Select a Google Gemini connection. |         |

### Get Model Info {#getmodelinfo}

Retrieves detailed information about a specific model from the Google Generative AI API.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | Select a Google Gemini connection.                                                        |         |
| Model Name | The name of the model to get information about (e.g., 'gemini-pro', 'gemini-pro-vision'). |         |

### List Files {#listfiles}

Lists all current project files from the service.

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Fetch All  | If true, fetch all items.               | false   |
| Page Size  | The number of items to return per page. |         |
| Page Token | The page token to return.               |         |
| Connection | Select a Google Gemini connection.      |         |

### List Models {#listmodels}

Retrieves a list of available models from the Google Generative AI API.

| Input            | Comments                                | Default |
| ---------------- | --------------------------------------- | ------- |
| Fetch All        | If true, fetch all items.               | false   |
| Page Size        | The number of items to return per page. |         |
| Page Token       | The page token to return.               |         |
| Filter           | The filter to apply to the list.        |         |
| Extra Parameters | Extra parameters to pass to the API.    |         |
| Connection       | Select a Google Gemini connection.      |         |

### Send Message {#sendmessage}

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

### Upload File {#uploadfile}

Uploads a file asynchronously to the Gemini API.

| Input        | Comments                           | Default |
| ------------ | ---------------------------------- | ------- |
| File         | The file to upload.                |         |
| File Name    | The name of the file to get.       |         |
| Display Name | The display name of the file.      |         |
| Connection   | Select a Google Gemini connection. |         |
