---
title: Google Docs Connector
sidebar_label: Google Docs
description:
  Google Docs is an online word processor included as part of the free, web-based Google Docs Editors suite.
  Use the Google Docs component to create, and collaborate on online documents.
---

![Google Docs](./assets/google-docs.png#connector-icon)
Google Docs is an online word processor included as part of the free, web-based Google Docs Editors suite.
Use the Google Docs component to create, and collaborate on online documents.

## Connections

### Google Docs OAuth2

Google Docs OAuth2 Connection

All requests to the Google Docs API must be authorized by an authenticated user.

The details of the authorization process, or "flow," for OAuth 2.0 vary somewhat depending on what kind of application you're writing. The following general process applies to all application types:

1. When you create your application, you register it using the [Google API Console](https://console.cloud.google.com/). Google then provides information you'll need later, such as a client ID and a client secret.
2. From APIs & Services > Library, enable the Google Docs API
3. To create API Credentials navigate to Enabled APIs & Services > Credentials
   1. Select Create Credentials > OAuth Client ID
   2. Set the application type to ‘Web Application’
   3. Fill out the OAuth consent screen with an app name (your company or product's name), support email, app logo, domain, etc.
   4. Select Add Or Remove scopes, search Content API for Shopping, and check the boxes for the following scopes
      1. /auth/documents
      2. /auth/drive
      3. /auth/drive.file
4. Under **Authorized redirect URIs** enter the OAuth 2.0 callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   1. Take note of the **Client ID** and **Client Secret** that are generated, as you will enter them for authentication.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                  | Default                                   |
| ------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------- |
| Scopes        | Space delimited listing of scopes. See https://developers.google.com/docs/api/auth#scopes | https://www.googleapis.com/auth/documents |
| Client ID     | Your Google Docs App's Client ID                                                          |                                           |
| Client Secret | Your Google Docs App's Client Secret                                                      |                                           |

## Actions

### Batch Update Documents

Applies one or more updates to the document.

| Input                | Comments                                                                                                                                                                                        | Default                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Connection           |                                                                                                                                                                                                 |                                                                              |
| Document ID          | The ID of the document to update.                                                                                                                                                               |                                                                              |
| Requests             | A list of updates to apply to the document.                                                                                                                                                     | <code>[{"insertText":{"location":{"index":1},"text":"Example text"}}]</code> |
| Required Revision ID | The optional revision ID of the document the write request is applied to. If this is not the latest revision of the document, the request is not processed and returns a 400 bad request error. |                                                                              |
| Target Revision ID   | The optional target revision ID of the document the write request is applied to.                                                                                                                |                                                                              |

### Create Document

Creates a blank document using the title given in the request.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection |                                      |         |
| Title      | The title of the document to create. |         |

### Get Document

Gets the latest version of the specified document.

| Input                 | Comments                                            | Default                    |
| --------------------- | --------------------------------------------------- | -------------------------- |
| Connection            |                                                     |                            |
| Document ID           | The ID of the document to retrieve.                 |                            |
| Suggestions View Mode | The suggestions view mode to apply to the document. | DEFAULT_FOR_CURRENT_ACCESS |

### Raw Request

Send raw HTTP request to Google Docs

| Input                   | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                               |         |
| URL                     | Input the path only (/v1/documents/{documentId}), The base URL is already included (https://docs.googleapis.com). For example, to connect to https://docs.googleapis.com/v1/documents/{documentId}, only /v1/documents/{documentId} is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                       |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                     |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                          |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                              |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                        |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                           |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                   |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                      | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                           |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                          | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                                                                    | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                                                               | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                                                                     | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                                                              | false   |
