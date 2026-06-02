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

### Google Docs OAuth2 {#googledocsoauth2}

Google Docs OAuth2 Connection

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                         | Default                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| Scopes        | Space delimited listing of scopes. See [Google Docs API documentation](https://developers.google.com/docs/api/auth#scopes) for available scopes. | https://www.googleapis.com/auth/documents |
| Client ID     | Your Google Docs App's Client ID                                                                                                                 |                                           |
| Client Secret | Your Google Docs App's Client Secret                                                                                                             |                                           |

## Actions

### Batch Update Documents {#batchupdatedocuments}

Applies one or more updates to the document.

| Input                | Comments                                                                                                                                                                                        | Default                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Connection           |                                                                                                                                                                                                 |                                                                              |
| Document ID          | The ID of the document to update.                                                                                                                                                               |                                                                              |
| Requests             | A list of updates to apply to the document.                                                                                                                                                     | <code>[{"insertText":{"location":{"index":1},"text":"Example text"}}]</code> |
| Required Revision ID | The optional revision ID of the document the write request is applied to. If this is not the latest revision of the document, the request is not processed and returns a 400 bad request error. |                                                                              |
| Target Revision ID   | The optional target revision ID of the document the write request is applied to.                                                                                                                |                                                                              |

### Create Document {#createdocument}

Creates a blank document using the title given in the request.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection |                                      |         |
| Title      | The title of the document to create. |         |

### Get Document {#getdocument}

Gets the latest version of the specified document.

| Input                 | Comments                                            | Default                    |
| --------------------- | --------------------------------------------------- | -------------------------- |
| Connection            |                                                     |                            |
| Document ID           | The ID of the document to retrieve.                 |                            |
| Suggestions View Mode | The suggestions view mode to apply to the document. | DEFAULT_FOR_CURRENT_ACCESS |

### Raw Request {#rawrequest}

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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                           | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                              | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                 | false   |
