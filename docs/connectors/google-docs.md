---
title: Google Docs Connector
sidebar_label: Google Docs
description: Create, retrieve, and update Google Docs documents.
---

![Google Docs](./assets/google-docs.png#connector-icon)
[Google Docs](https://workspace.google.com/products/docs/) is an online word processor included as part of the free, web-based Google Docs Editors suite.
This component allows creating, retrieving, updating, and collaborating on online documents.

## API Documentation

This component was built using the [Google Docs API Documentation](https://developers.google.com/workspace/docs).

## Connections

### OAuth 2.0 {#googledocsoauth2}

Authenticate using OAuth 2.0

All requests to the Google Docs API must be authorized by an authenticated user.

The details of the authorization process, or "flow," for OAuth 2.0 vary somewhat depending on the kind of application being built. The following general process applies to all application types.

#### Prerequisites

- A [Google Cloud](https://console.cloud.google.com/) account with access to create projects and credentials
- Permission to enable APIs and configure the OAuth consent screen

#### Setup Steps

1. Register the application in the [Google API Console](https://console.cloud.google.com/). Google then provides values needed later, such as a client ID and a client secret.
2. From **APIs & Services > Library**, enable the **Google Docs API**.
3. To create API credentials, navigate to **Enabled APIs & Services > Credentials**:
   1. Select **Create Credentials > OAuth Client ID**.
   2. Set the application type to **Web Application**.
   3. Fill out the OAuth consent screen with an app name (a company or product name), support email, app logo, domain, etc.
   4. Select **Add Or Remove Scopes** and check the boxes for the scopes the integration requires (see the [Google Docs API authorization documentation](https://developers.google.com/workspace/docs/api/auth) for available scopes).
4. Under **Authorized redirect URIs**, enter the OAuth 2.0 callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
5. Take note of the **Client ID** and **Client Secret** that are generated, as they are entered during authentication.

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the generated OAuth credentials.
- For **Scopes**, enter a space-delimited list of the required scopes. The default value is:
  ```
  https://www.googleapis.com/auth/documents
  ```
- Refer to the [Google Docs API authorization documentation](https://developers.google.com/workspace/docs/api/auth) for additional scope information.

#### App Verification

Google requires OAuth apps that request access to user data to pass a verification review before being deployed at scale. This process ensures the app complies with Google's API Services User Data Policy, accurately represents its functionality, and handles user data responsibly.

Google OAuth apps pass through three stages before they are ready for production use.

**Testing (unpublished):** The app is only accessible to users manually added as test users in the OAuth consent screen. Up to 100 test users are allowed. All other users receive an error. This is the expected state during initial development.

**Published, unverified:** After publishing the app, all Google users can authenticate. However, for sensitive or restricted scopes, users see a **"This app isn't verified"** warning. Users can proceed by clicking **Advanced** → **Go to [app name] (unsafe)**, but this warning reduces trust and may be blocked by organizations with strict Google Workspace policies.

**Verified:** Google has reviewed and approved the app. No warning is shown. Verification is required before deploying to production users.

#### Publishing the App

Publishing is required before any users outside the test list can authenticate:

1. In the [Google Cloud Console](https://console.cloud.google.com/), navigate to **APIs & Services** → **OAuth consent screen**.
2. Click **PUBLISH APP** and confirm.

#### Requesting Verification

The `https://www.googleapis.com/auth/documents` scope is a **sensitive scope** and requires verification. If the integration also requests **restricted scopes** (such as `https://www.googleapis.com/auth/drive`), a security assessment is required in addition to standard sensitive scope verification:

1. On the **OAuth consent screen**, click **Prepare for verification**.
2. Provide a privacy policy URL, authorized domain, and app logo.
3. For restricted scopes, arrange a **security assessment** with a [Google-approved assessor](https://support.google.com/cloud/answer/10311615).
4. Submit for review. Restricted scope reviews can take longer than sensitive scope reviews.

Refer to [Google's OAuth consent screen documentation](https://support.google.com/cloud/answer/10311615) for the full verification requirements.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                         | Default                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| Scopes        | Space delimited listing of scopes. See [Google Docs API documentation](https://developers.google.com/docs/api/auth#scopes) for available scopes. | https://www.googleapis.com/auth/documents |
| Client ID     | The Client ID for the Google Docs OAuth 2.0 application.                                                                                         |                                           |
| Client Secret | The Client Secret for the Google Docs OAuth 2.0 application.                                                                                     |                                           |

## Actions

### Batch Update Documents {#batchupdatedocuments}

Applies one or more updates to the document.

| Input                | Comments                                                                                                                                                                                                                                                                                              | Default                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Connection           | The Google Docs connection to use.                                                                                                                                                                                                                                                                    |                                                                              |
| Document ID          | The unique identifier for the document to update.                                                                                                                                                                                                                                                     |                                                                              |
| Requests             | A JSON array of updates to apply to the document. See the [Request object reference](https://developers.google.com/docs/api/reference/rest/v1/documents/request#request) for available request types.                                                                                                 | <code>[{"insertText":{"location":{"index":1},"text":"Example text"}}]</code> |
| Required Revision ID | The revision ID the write request is applied to. If this is not the latest revision of the document, the request is not processed and returns a 400 bad request error. See the [WriteControl reference](https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate#writecontrol). |                                                                              |
| Target Revision ID   | The target revision ID the write request is applied to, merging changes against any collaborator edits made after the document was read. See the [WriteControl reference](https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate#writecontrol).                               |                                                                              |

### Create Document {#createdocument}

Creates a blank document using the title given in the request.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Google Docs connection to use.     |         |
| Title      | The display name for the new document. |         |

### Get Document {#getdocument}

Gets the latest version of the specified document.

| Input                 | Comments                                                                          | Default                    |
| --------------------- | --------------------------------------------------------------------------------- | -------------------------- |
| Connection            | The Google Docs connection to use.                                                |                            |
| Document ID           | The unique identifier for the document to retrieve.                               |                            |
| Suggestions View Mode | The mode that controls how suggested edits are rendered in the returned document. | DEFAULT_FOR_CURRENT_ACCESS |

### Raw Request {#rawrequest}

Send raw HTTP request to Google Docs

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Google Docs connection to use.                                                                                                                                                               |         |
| URL                     | The path to append to the base URL. Enter the path only (for example, /v1/documents/{documentId}); the base URL (https://docs.googleapis.com) is added automatically.                            |         |
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
