---
title: Contentful Connector
sidebar_label: Contentful
description: Use the Contentful component to manage Spaces, Environments, Organizations and more.
---

![Contentful](./assets/contentful.png#connector-icon)
[Contentful](https://www.contentful.com/) is a content management system (CMS) that allows developers to manage and deliver content across multiple platforms and devices.

The Contentful component allows managing spaces, environments, content types, entries, assets, organizations, webhooks, and bulk actions.

## API Documentation

This component was built using the [Contentful Content Management API Reference](https://www.contentful.com/developers/docs/references/content-management-api/#/introduction).

## Connections

### OAuth 2.0 {#contentfuloauth2connection}

Authenticate using OAuth 2.0

To connect to Contentful, create a new OAuth application.

#### Prerequisites

- A Contentful account with developer access

#### Setup Steps

1. Navigate to the Developer [Account Settings](https://app.contentful.com/account/profile/developers/applications) for OAuth applications
2. Click **Create New Application**
3. Enter the **Redirect URI** as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Select **Confidential** for the client type
5. Select the applicable scope (e.g., **Content management manage**)
6. Save the application
7. Copy the **Client ID** and **Client Secret**

> **Important**: Contentful only accepts a single scope per authorization request. The `content_management_manage` scope includes read access, so a separate `content_management_read` scope is not needed.

#### Available Scopes

| Scope                       | Description                           |
| --------------------------- | ------------------------------------- |
| `content_management_manage` | Manage and read content in all Spaces |
| `content_management_read`   | Read content in all Spaces            |

#### Configure the Connection

Create a connection of type **OAuth 2.0** and enter:

- **Client ID**: Enter the Client ID from the OAuth application
- **Client Secret**: Enter the Client Secret from the OAuth application
- **Scopes**: Enter a single scope (e.g., `content_management_manage`)

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                           | Default                   |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| Scopes        | A single OAuth 2.0 scope. Contentful accepts one scope per authorization. Valid values: content_management_manage, content_management_read. The manage scope includes read access. | content_management_manage |
| Client ID     | The Client ID from the OAuth application credentials.                                                                                                                              |                           |
| Client Secret | The Client Secret from the OAuth application credentials.                                                                                                                          |                           |

## Triggers

### Event Subscription {#eventstrigger}

Receive event notifications from Contentful. Automatically creates and manages a webhook subscription for selected topics when the instance is deployed, and removes the subscription when the instance is deleted.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Contentful connection to use.                 |         |
| Space ID   | The unique identifier for the Contentful space.   |         |
| Events     | The event types to subscribe to for this webhook. |         |

### Webhook {#webhook}

Receive and validate webhook requests from Contentful for webhooks you configure.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Contentful connection to use. |         |

## Actions

### Create Asset {#createasset}

Create a new asset

| Input          | Comments                                                                              | Default                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection     | The Contentful connection to use.                                                     |                                                                                                                                                                       |
| Environment ID | The unique identifier for the Contentful environment.                                 |                                                                                                                                                                       |
| Space ID       | The unique identifier for the Contentful space.                                       |                                                                                                                                                                       |
| Title          | The title of the asset as a JSON object with locale keys.                             | <code>{<br /> "en-US": "Example Asset"<br />}</code>                                                                                                                  |
| Description    | The description of the asset as a JSON object with locale keys.                       | <code>{<br /> "en-US": "Streamliner description"<br />}</code>                                                                                                        |
| File           | The file metadata for the asset as a JSON object with locale keys and upload details. | <code>{<br /> "en-US": {<br /> "contentType": "image/jpeg",<br /> "fileName": "example.jpeg",<br /> "upload": "https://example.com/example.jpg"<br /> }<br />}</code> |

### Create Content Type {#createcontenttype}

Create a new content type

| Input               | Comments                                                                        | Default                                                                                                                                                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Contentful connection to use.                                               |                                                                                                                                                                                                                                                                                          |
| Space ID            | The unique identifier for the Contentful space.                                 |                                                                                                                                                                                                                                                                                          |
| Environment ID      | The unique identifier for the Contentful environment.                           |                                                                                                                                                                                                                                                                                          |
| Content Type Name   | The display name for the content type.                                          |                                                                                                                                                                                                                                                                                          |
| Content Type Fields | The field definitions for the content type as a JSON array of field objects.    | <code>[<br /> {<br /> "id": "title",<br /> "name": "Title",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> },<br /> {<br /> "id": "body",<br /> "name": "Body",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> }<br />]</code> |
| Display Field       | The field used as the main display field for entries of this content type.      |                                                                                                                                                                                                                                                                                          |
| Description         | A brief explanation of what this content type is used for in the content model. |                                                                                                                                                                                                                                                                                          |

### Create Environment {#createenvironment}

Create a new environment

| Input            | Comments                                              | Default |
| ---------------- | ----------------------------------------------------- | ------- |
| Connection       | The Contentful connection to use.                     |         |
| Space ID         | The unique identifier for the Contentful space.       |         |
| Environment ID   | The unique identifier for the Contentful environment. |         |
| Environment Name | The display name for the environment.                 |         |

### Create Space {#createspace}

Create a new space

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Contentful connection to use.           |         |
| Organization ID | The unique identifier for the organization. |         |
| Space Name      | The display name for the space.             |         |
| Default Locale  | The default locale code for the space.      |         |

### Create Webhook {#createwebhook}

Create a new webhook

| Input      | Comments                                                                 | Default |
| ---------- | ------------------------------------------------------------------------ | ------- |
| Connection | The Contentful connection to use.                                        |         |
| Space ID   | The unique identifier for the Contentful space.                          |         |
| Name       | A descriptive label to identify the webhook in the Contentful dashboard. |         |
| URL        | The URL where webhook events will be sent.                               |         |
| Events     | The event types to subscribe to for this webhook.                        |         |

### Delete Asset {#deleteasset}

Delete an existing asset

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Asset ID       | The unique identifier for the asset.                  |         |

### Delete Environment {#deleteenvironment}

Deletes an existing environment.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |

### Delete Instanced Webhooks {#deleteinstancedwebhooks}

Delete all webhooks that point to a flow in this instance

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |

### Delete Space {#deletespace}

Delete an existing space

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |

### Delete Upload {#deleteupload}

Deletes a file from temporary data storage

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Upload ID      | The unique identifier for the upload.                 |         |

### Delete Webhook {#deletewebhook}

Delete a webhook

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |
| Webhook ID | The unique identifier for the webhook.          |         |

### Get Asset {#getasset}

Retrieve a single asset

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Asset ID       | The unique identifier for the asset.                  |         |

### Get Bulk Action {#getbulkaction}

Retrieve a bulk action

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Bulk Action ID | The unique identifier for the bulk action.            |         |

### Get Environment {#getenvironment}

Retrieve a single environment

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |

### Get Organization {#getorganization}

Retrieve an organization by ID

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Contentful connection to use.           |         |
| Organization ID | The unique identifier for the organization. |         |

### Get Space {#getspace}

Retrieve a single space

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |

### Get Upload {#getupload}

Retrieves an unmodified image

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Upload ID      | The unique identifier for the upload.                 |         |

### Get Webhook {#getwebhook}

Retrieve a single webhook

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |
| Webhook ID | The unique identifier for the webhook.          |         |

### List Assets {#listassets}

Retrieve all assets of a space

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Space ID       | The unique identifier for the Contentful space.       |         |

### List Content Types {#listcontenttypes}

Retrieves all content types of a space

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Space ID       | The unique identifier for the Contentful space.       |         |

### List Environments {#listenvironments}

Retrieve all environments in a space

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |

### List Organizations {#listorganizations}

Retrieve all organizations an account has access to

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Contentful connection to use. |         |

### List Spaces {#listspaces}

Retrieve all spaces an account has access to

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Contentful connection to use. |         |

### List Webhooks {#listwebhooks}

Retrieves all webhooks of a space

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |

### Process Asset {#processasset}

Process an asset

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Asset ID       | The unique identifier for the asset.                  |         |

### Publish Asset {#publishanasset}

Publishes an asset.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Asset ID       | The unique identifier for the asset.                  |         |

### Publish Bulk Action {#publishbulkaction}

Publish a bulk action

| Input          | Comments                                                                                       | Default                                                                                                                                                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection     | The Contentful connection to use.                                                              |                                                                                                                                                                                                                                                                                                  |
| Space ID       | The unique identifier for the Contentful space.                                                |                                                                                                                                                                                                                                                                                                  |
| Environment ID | The unique identifier for the Contentful environment.                                          |                                                                                                                                                                                                                                                                                                  |
| Items          | The items to be processed in the bulk action as a JSON object containing entities and actions. | <code>[<br /> {<br /> "sys": {<br /> "linkType": "Entry",<br /> "type": "Link",<br /> "id": "<entry_id>",<br /> "version": 2<br /> }<br /> },<br /> {<br /> "sys": {<br /> "linkType": "Asset",<br /> "type": "Link",<br /> "id": "<asset_id>",<br /> "version": 1<br /> }<br /> }<br />]</code> |

### Raw Request {#rawrequest}

Send raw HTTP request to Contentful

| Input                   | Comments                                                                                                                                                                                           | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Contentful connection to use.                                                                                                                                                                  |         |
| URL                     | Input the path only (/spaces), The base URL is already included (https://api.contentful.com). For example, to connect to https://api.contentful.com/spaces, only /spaces is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                            |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                          |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                               |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                   |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                             |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                        |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                           | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.   | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                      | false   |

### Unpublish Asset {#unpublishanasset}

Unpublishes an asset.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Asset ID       | The unique identifier for the asset.                  |         |

### Unpublish Bulk Action {#unpublishbulkaction}

Unpublish a bulk action

| Input          | Comments                                                                                          | Default                                                                                                                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection     | The Contentful connection to use.                                                                 |                                                                                                                                                                                                                                                          |
| Space ID       | The unique identifier for the Contentful space.                                                   |                                                                                                                                                                                                                                                          |
| Environment ID | The unique identifier for the Contentful environment.                                             |                                                                                                                                                                                                                                                          |
| Items          | The items to be unpublished in the bulk action as a JSON object containing entities to unpublish. | <code>[<br /> {<br /> "sys": {<br /> "linkType": "Entry",<br /> "type": "Link",<br /> "id": "<entry_id>"<br /> }<br /> },<br /> {<br /> "sys": {<br /> "linkType": "Asset",<br /> "type": "Link",<br /> "id": "<asset_id>"<br /> }<br /> }<br />]</code> |

### Update Asset {#updateasset}

Update an existing asset

| Input                 | Comments                                                                                                   | Default                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Connection            | The Contentful connection to use.                                                                          |                                                                |
| Environment ID        | The unique identifier for the Contentful environment.                                                      |                                                                |
| Space ID              | The unique identifier for the Contentful space.                                                            |                                                                |
| Asset ID              | The unique identifier for the asset.                                                                       |                                                                |
| Title                 | The updated title of the asset. Locale key must match the original locale of the asset to be updated       | <code>{<br /> "en-US": "Example Asset"<br />}</code>           |
| New Asset Description | The updated description of the asset. Locale key must match the original locale of the asset to be updated | <code>{<br /> "en-US": "Streamliner description"<br />}</code> |

### Update Content Type {#updatecontenttype}

Update an existing content type

| Input               | Comments                                                     | Default                                                                                                                                                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Contentful connection to use.                            |                                                                                                                                                                                                                                                                                          |
| Space ID            | The unique identifier for the Contentful space.              |                                                                                                                                                                                                                                                                                          |
| Environment ID      | The unique identifier for the Contentful environment.        |                                                                                                                                                                                                                                                                                          |
| Content Type ID     | The unique identifier for the content type.                  |                                                                                                                                                                                                                                                                                          |
| Content Type Name   | The updated name for the content type                        |                                                                                                                                                                                                                                                                                          |
| Content Type Fields | The updated fields for the content type                      | <code>[<br /> {<br /> "id": "title",<br /> "name": "Title",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> },<br /> {<br /> "id": "body",<br /> "name": "Body",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> }<br />]</code> |
| Display Field       | The updated Field used as the main display field for Entries |                                                                                                                                                                                                                                                                                          |
| Description         | The updated description for the content type                 |                                                                                                                                                                                                                                                                                          |

### Update Environment {#updateenvironment}

Edit an existing environment

| Input            | Comments                                              | Default |
| ---------------- | ----------------------------------------------------- | ------- |
| Connection       | The Contentful connection to use.                     |         |
| Space ID         | The unique identifier for the Contentful space.       |         |
| Environment ID   | The unique identifier for the Contentful environment. |         |
| Environment Name | The updated name for the environment                  |         |

### Update Organization {#updateorganization}

Update an organization security contact an admin or owner has access to

| Input           | Comments                                        | Default |
| --------------- | ----------------------------------------------- | ------- |
| Connection      | The Contentful connection to use.               |         |
| Organization ID | The unique identifier for the organization.     |         |
| Security ID     | The unique identifier for the security contact. |         |

### Update Space {#updatespace}

Edit an existing Space

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |
| Space Name | The updated name for the space                  |         |

### Update Webhook {#updatewebhook}

Update an existing webhook

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |
| Name       | The updated name for the webhook                |         |
| Webhook ID | The unique identifier for the webhook.          |         |

### Upload File {#uploadfile}

Upload a file to temporary file storage

| Input         | Comments                                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Contentful connection to use.                                                                                           |         |
| Space ID      | The unique identifier for the Contentful space.                                                                             |         |
| File Contents | The contents to write to a file. This can be a string of text, it can be binary data that was generated in a previous step. |         |
