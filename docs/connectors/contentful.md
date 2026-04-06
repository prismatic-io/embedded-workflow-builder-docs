---
title: Contentful Connector
sidebar_label: Contentful
description: Manage spaces, environments, entries, assets, and organizations in Contentful
---

![Contentful](./assets/contentful.png#connector-icon)
[Contentful](https://www.contentful.com/) is a content management system (CMS) that allows developers to manage and deliver content across multiple platforms and devices.

The Contentful component allows managing spaces, environments, content types, entries, assets, organizations, webhooks, and bulk actions.

## API Documentation

This component was built using the [Contentful Content Management API Reference](https://www.contentful.com/developers/docs/references/content-management-api/#/introduction).

## Connections

### OAuth 2.0 {#contentfuloauth2connection}

Authenticate using OAuth 2.0.

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

### Archive Entry {#archiveentry}

Archives an existing entry.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Entry ID       | The unique identifier for the entry.                  |         |

### Create Asset {#createasset}

Creates a new asset.

| Input          | Comments                                                                              | Default                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection     | The Contentful connection to use.                                                     |                                                                                                                                                                       |
| Space ID       | The unique identifier for the Contentful space.                                       |                                                                                                                                                                       |
| Environment ID | The unique identifier for the Contentful environment.                                 |                                                                                                                                                                       |
| Title          | The title of the asset as a JSON object with locale keys.                             | <code>{<br /> "en-US": "Example Asset"<br />}</code>                                                                                                                  |
| Description    | The description of the asset as a JSON object with locale keys.                       | <code>{<br /> "en-US": "Streamliner description"<br />}</code>                                                                                                        |
| File           | The file metadata for the asset as a JSON object with locale keys and upload details. | <code>{<br /> "en-US": {<br /> "contentType": "image/jpeg",<br /> "fileName": "example.jpeg",<br /> "upload": "https://example.com/example.jpg"<br /> }<br />}</code> |

### Create Content Type {#createcontenttype}

Creates a new content type.

| Input               | Comments                                                                        | Default                                                                                                                                                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Contentful connection to use.                                               |                                                                                                                                                                                                                                                                                          |
| Space ID            | The unique identifier for the Contentful space.                                 |                                                                                                                                                                                                                                                                                          |
| Environment ID      | The unique identifier for the Contentful environment.                           |                                                                                                                                                                                                                                                                                          |
| Content Type Name   | The display name for the content type.                                          |                                                                                                                                                                                                                                                                                          |
| Content Type Fields | The field definitions for the content type as a JSON array of field objects.    | <code>[<br /> {<br /> "id": "title",<br /> "name": "Title",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> },<br /> {<br /> "id": "body",<br /> "name": "Body",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> }<br />]</code> |
| Display Field       | The field used as the main display field for entries of this content type.      |                                                                                                                                                                                                                                                                                          |
| Description         | A brief explanation of what this content type is used for in the content model. |                                                                                                                                                                                                                                                                                          |

### Create Entry {#createentry}

Creates a new entry in a space.

| Input           | Comments                                                            | Default |
| --------------- | ------------------------------------------------------------------- | ------- |
| Connection      | The Contentful connection to use.                                   |         |
| Space ID        | The unique identifier for the Contentful space.                     |         |
| Environment ID  | The unique identifier for the Contentful environment.               |         |
| Content Type ID | The unique identifier for the content type.                         |         |
| Entry Data      | The entry data as a JSON object containing fields and their values. |         |

### Create Environment {#createenvironment}

Creates a new environment.

| Input            | Comments                                              | Default |
| ---------------- | ----------------------------------------------------- | ------- |
| Connection       | The Contentful connection to use.                     |         |
| Space ID         | The unique identifier for the Contentful space.       |         |
| Environment ID   | The unique identifier for the Contentful environment. |         |
| Environment Name | The display name for the environment.                 |         |

### Create Space {#createspace}

Creates a new space.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Contentful connection to use.           |         |
| Organization ID | The unique identifier for the organization. |         |
| Space Name      | The display name for the space.             |         |
| Default Locale  | The default locale code for the space.      |         |

### Create Webhook {#createwebhook}

Creates a new webhook.

| Input      | Comments                                                                 | Default |
| ---------- | ------------------------------------------------------------------------ | ------- |
| Connection | The Contentful connection to use.                                        |         |
| Space ID   | The unique identifier for the Contentful space.                          |         |
| Name       | A descriptive label to identify the webhook in the Contentful dashboard. |         |
| URL        | The URL where webhook events will be sent.                               |         |
| Events     | The event types to subscribe to for this webhook.                        |         |

### Delete Asset {#deleteasset}

Deletes an existing asset.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Asset ID       | The unique identifier for the asset.                  |         |

### Delete Entry {#deleteentry}

Deletes an existing entry.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Entry ID       | The unique identifier for the entry.                  |         |

### Delete Environment {#deleteenvironment}

Deletes an existing environment.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |

### Delete Instanced Webhooks {#deleteinstancedwebhooks}

Deletes all webhooks that point to a flow in the current instance.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |

### Delete Space {#deletespace}

Deletes an existing space.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |

### Delete Upload {#deleteupload}

Deletes a file from temporary data storage.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Upload ID      | The unique identifier for the upload.                 |         |

### Delete Webhook {#deletewebhook}

Deletes an existing webhook.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |
| Webhook ID | The unique identifier for the webhook.          |         |

### Get Asset {#getasset}

Retrieves a single asset by ID.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Asset ID       | The unique identifier for the asset.                  |         |

### Get Bulk Action {#getbulkaction}

Retrieves a bulk action by ID.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Bulk Action ID | The unique identifier for the bulk action.            |         |

### Get Entry {#getentry}

Retrieves a single entry by ID.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Entry ID       | The unique identifier for the entry.                  |         |

### Get Environment {#getenvironment}

Retrieves a single environment by ID.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |

### Get Organization {#getorganization}

Retrieves an organization by ID.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Contentful connection to use.           |         |
| Organization ID | The unique identifier for the organization. |         |

### Get Space {#getspace}

Retrieves a single space by ID.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |

### Get Upload {#getupload}

Retrieves an unmodified image.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Upload ID      | The unique identifier for the upload.                 |         |

### Get Webhook {#getwebhook}

Retrieves a single webhook by ID.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |
| Webhook ID | The unique identifier for the webhook.          |         |

### List Assets {#listassets}

Retrieves all assets of a space.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |

### List Content Types {#listcontenttypes}

Retrieves all content types of a space.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |

### List Entries {#listentries}

Retrieves all entries of a space.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |

### List Environments {#listenvironments}

Retrieves all environments in a space.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |

### List Organizations {#listorganizations}

Retrieves all organizations the account has access to.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Contentful connection to use. |         |

### List Published Entries {#listpublishedentries}

Retrieves all published entries of a space.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |

### List Spaces {#listspaces}

Retrieves all spaces the account has access to.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Contentful connection to use. |         |

### List Webhooks {#listwebhooks}

Retrieves all webhooks of a space.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |

### Patch Entry {#patchentry}

Applies partial updates to an entry using JSON Patch (RFC 6902) operations.

| Input            | Comments                                                                  | Default |
| ---------------- | ------------------------------------------------------------------------- | ------- |
| Connection       | The Contentful connection to use.                                         |         |
| Space ID         | The unique identifier for the Contentful space.                           |         |
| Environment ID   | The unique identifier for the Contentful environment.                     |         |
| Entry ID         | The unique identifier for the entry.                                      |         |
| Patch Operations | A JSON array of JSON Patch (RFC 6902) operations.                         |         |
| Entry Version    | The current version number of the entry. Required for optimistic locking. |         |

### Process Asset {#processasset}

Processes an asset for content delivery.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Asset ID       | The unique identifier for the asset.                  |         |

### Publish Asset {#publishanasset}

Publishes an asset.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Asset ID       | The unique identifier for the asset.                  |         |

### Publish Bulk Action {#publishbulkaction}

Publishes a bulk action.

| Input          | Comments                                                                                       | Default                                                                                                                                                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection     | The Contentful connection to use.                                                              |                                                                                                                                                                                                                                                                                                  |
| Space ID       | The unique identifier for the Contentful space.                                                |                                                                                                                                                                                                                                                                                                  |
| Environment ID | The unique identifier for the Contentful environment.                                          |                                                                                                                                                                                                                                                                                                  |
| Items          | The items to be processed in the bulk action as a JSON object containing entities and actions. | <code>[<br /> {<br /> "sys": {<br /> "linkType": "Entry",<br /> "type": "Link",<br /> "id": "<entry_id>",<br /> "version": 2<br /> }<br /> },<br /> {<br /> "sys": {<br /> "linkType": "Asset",<br /> "type": "Link",<br /> "id": "<asset_id>",<br /> "version": 1<br /> }<br /> }<br />]</code> |

### Publish Entry {#publishentry}

Publishes an entry.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Entry ID       | The unique identifier for the entry.                  |         |

### Put Entry {#putentry}

Replaces all fields of an existing entry with the provided data.

| Input          | Comments                                                                                           | Default |
| -------------- | -------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                                                                  |         |
| Space ID       | The unique identifier for the Contentful space.                                                    |         |
| Environment ID | The unique identifier for the Contentful environment.                                              |         |
| Entry ID       | The unique identifier for the entry.                                                               |         |
| Entry Data     | The full entry data as a JSON object. All existing fields will be replaced with the provided data. |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the Contentful API.

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

### Unarchive Entry {#unarchiveentry}

Unarchives an existing entry.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Entry ID       | The unique identifier for the entry.                  |         |

### Unpublish Asset {#unpublishanasset}

Unpublishes an asset.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Asset ID       | The unique identifier for the asset.                  |         |

### Unpublish Bulk Action {#unpublishbulkaction}

Unpublishes a bulk action.

| Input          | Comments                                                                                          | Default                                                                                                                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection     | The Contentful connection to use.                                                                 |                                                                                                                                                                                                                                                          |
| Space ID       | The unique identifier for the Contentful space.                                                   |                                                                                                                                                                                                                                                          |
| Environment ID | The unique identifier for the Contentful environment.                                             |                                                                                                                                                                                                                                                          |
| Items          | The items to be unpublished in the bulk action as a JSON object containing entities to unpublish. | <code>[<br /> {<br /> "sys": {<br /> "linkType": "Entry",<br /> "type": "Link",<br /> "id": "<entry_id>"<br /> }<br /> },<br /> {<br /> "sys": {<br /> "linkType": "Asset",<br /> "type": "Link",<br /> "id": "<asset_id>"<br /> }<br /> }<br />]</code> |

### Unpublish Entry {#unpublishentry}

Unpublishes an entry.

| Input          | Comments                                              | Default |
| -------------- | ----------------------------------------------------- | ------- |
| Connection     | The Contentful connection to use.                     |         |
| Space ID       | The unique identifier for the Contentful space.       |         |
| Environment ID | The unique identifier for the Contentful environment. |         |
| Entry ID       | The unique identifier for the entry.                  |         |

### Update Asset {#updateasset}

Updates an existing asset.

| Input             | Comments                                                                                                    | Default                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Connection        | The Contentful connection to use.                                                                           |                                                                |
| Space ID          | The unique identifier for the Contentful space.                                                             |                                                                |
| Environment ID    | The unique identifier for the Contentful environment.                                                       |                                                                |
| Asset ID          | The unique identifier for the asset.                                                                        |                                                                |
| Title             | The updated title of the asset. Locale key must match the original locale of the asset to be updated.       | <code>{<br /> "en-US": "Example Asset"<br />}</code>           |
| Asset Description | The updated description of the asset. Locale key must match the original locale of the asset to be updated. | <code>{<br /> "en-US": "Streamliner description"<br />}</code> |

### Update Content Type {#updatecontenttype}

Updates an existing content type.

| Input               | Comments                                                      | Default                                                                                                                                                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Contentful connection to use.                             |                                                                                                                                                                                                                                                                                          |
| Space ID            | The unique identifier for the Contentful space.               |                                                                                                                                                                                                                                                                                          |
| Environment ID      | The unique identifier for the Contentful environment.         |                                                                                                                                                                                                                                                                                          |
| Content Type ID     | The unique identifier for the content type.                   |                                                                                                                                                                                                                                                                                          |
| Content Type Name   | The updated name for the content type.                        |                                                                                                                                                                                                                                                                                          |
| Content Type Fields | The updated field definitions for the content type.           | <code>[<br /> {<br /> "id": "title",<br /> "name": "Title",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> },<br /> {<br /> "id": "body",<br /> "name": "Body",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> }<br />]</code> |
| Display Field       | The updated field used as the main display field for entries. |                                                                                                                                                                                                                                                                                          |
| Description         | The updated description for the content type.                 |                                                                                                                                                                                                                                                                                          |

### Update Environment {#updateenvironment}

Updates an existing environment.

| Input            | Comments                                              | Default |
| ---------------- | ----------------------------------------------------- | ------- |
| Connection       | The Contentful connection to use.                     |         |
| Space ID         | The unique identifier for the Contentful space.       |         |
| Environment ID   | The unique identifier for the Contentful environment. |         |
| Environment Name | The updated name for the environment.                 |         |

### Update Organization {#updateorganization}

Updates the security contact for an organization.

| Input           | Comments                                        | Default |
| --------------- | ----------------------------------------------- | ------- |
| Connection      | The Contentful connection to use.               |         |
| Organization ID | The unique identifier for the organization.     |         |
| Security ID     | The unique identifier for the security contact. |         |

### Update Space {#updatespace}

Updates an existing space.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |
| Space Name | The updated name for the space.                 |         |

### Update Webhook {#updatewebhook}

Updates an existing webhook.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Contentful connection to use.               |         |
| Space ID   | The unique identifier for the Contentful space. |         |
| Name       | The updated name for the webhook.               |         |
| Webhook ID | The unique identifier for the webhook.          |         |

### Upload File {#uploadfile}

Uploads a file to temporary file storage.

| Input         | Comments                                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Contentful connection to use.                                                                                           |         |
| Space ID      | The unique identifier for the Contentful space.                                                                             |         |
| File Contents | The contents to write to a file. This can be a string of text, it can be binary data that was generated in a previous step. |         |
