---
title: Contentful Connector
sidebar_label: Contentful
description: Use the Contentful component to manage Spaces, Environments, Organizations and more.
---

![Contentful](./assets/contentful.png#connector-icon)
Use the Contentful component to manage Spaces, Environments, Organizations and more.

## Connections

### OAuth 2.0

Connection to Contentful API using OAuth 2.0

Create a new OAuth App:

1. Login and navigate to the Developer [Account Settings](https://app.contentful.com/account/profile/developers/applications) for OAuth applications
2. Create a New Application
3. Enter the Redirect URI as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Additionally check the boxes for the applicable scopes: Content management read, Content management manage, Confidential
5. Upon saving the application note the Client ID and Client Secret and enter them in the connection configuration of the integration.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                | Default                                           |
| ------------- | ------------------------------------------------------- | ------------------------------------------------- |
| Scopes        | Space separated OAuth 2.0 permission scopes for the API | content_management_manage content_management_read |
| Client ID     | Client Identifier of your app for the API               |                                                   |
| Client Secret | Client Secret of your app for the API                   |                                                   |

## Triggers

### Events Based

Get notified when events occur in your space

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Space ID   | The ID of the space       |         |
| Events     | The events of the webhook |         |

### Webhook

Receive and validate webhook requests from Contentful for webhooks you configure.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

## Actions

### Create Asset

Create a new asset

| Input          | Comments                                             | Default                                                                                                                                                               |
| -------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection     |                                                      |                                                                                                                                                                       |
| Environment ID | The ID of the environment                            |                                                                                                                                                                       |
| Space ID       | The ID of the space                                  |                                                                                                                                                                       |
| Title          | The title of the asset                               | <code>{<br /> "en-US": "Example Asset"<br />}</code>                                                                                                                  |
| Description    | The description of the asset                         | <code>{<br /> "en-US": "Streamliner description"<br />}</code>                                                                                                        |
| File           | The file of the asset                                | <code>{<br /> "en-US": {<br /> "contentType": "image/jpeg",<br /> "fileName": "example.jpeg",<br /> "upload": "https://example.com/example.jpg"<br /> }<br />}</code> |
| Debug Request  | Enabling this flag will log out the current request. | false                                                                                                                                                                 |

### Create Content Type

Create a new content type

| Input               | Comments                                             | Default                                                                                                                                                                                                                                                                                  |
| ------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          |                                                      |                                                                                                                                                                                                                                                                                          |
| Space ID            | The ID of the space                                  |                                                                                                                                                                                                                                                                                          |
| Environment ID      | The ID of the environment                            |                                                                                                                                                                                                                                                                                          |
| Content Type Name   | The name of the content type                         |                                                                                                                                                                                                                                                                                          |
| Content Type Fields | The fields of the content type                       | <code>[<br /> {<br /> "id": "title",<br /> "name": "Title",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> },<br /> {<br /> "id": "body",<br /> "name": "Body",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> }<br />]</code> |
| Display Field       | Field used as the main display field for Entries     |                                                                                                                                                                                                                                                                                          |
| Description         | The description of the content type                  |                                                                                                                                                                                                                                                                                          |
| Debug Request       | Enabling this flag will log out the current request. | false                                                                                                                                                                                                                                                                                    |

### Create Environment

Create a new environment

| Input            | Comments                                             | Default |
| ---------------- | ---------------------------------------------------- | ------- |
| Connection       |                                                      |         |
| Space ID         | The ID of the space                                  |         |
| Environment ID   | The ID of the environment                            |         |
| Environment Name | The name of the environment                          |         |
| Debug Request    | Enabling this flag will log out the current request. | false   |

### Create Space

Create a new space

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      |                                                      |         |
| Organization ID | The ID of the organization                           |         |
| Space Name      | The name of the space                                |         |
| Default Locale  | The default locale                                   |         |
| Debug Request   | Enabling this flag will log out the current request. | false   |

### Create Webhook

Create a new webhook

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | The ID of the space                                  |         |
| Name          | The name of the webhook                              |         |
| URL           | The URL of the webhook                               |         |
| Events        | The events of the webhook                            |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Asset

Delete an existing asset

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Environment ID | The ID of the environment                            |         |
| Space ID       | The ID of the space                                  |         |
| Asset ID       | The ID of the asset                                  |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Delete Environment

Delete existing environment

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Space ID       | The ID of the space                                  |         |
| Environment ID | The ID of the environment                            |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Delete Instanced Webhooks

Delete all webhooks that point to a flow in this instance

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | The ID of the space                                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Space

Delete an existing space

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | The ID of the space                                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Upload

Deletes a file from temporary data storage

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Environment ID | The ID of the environment                            |         |
| Space ID       | The ID of the space                                  |         |
| Upload ID      | The ID of the upload                                 |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Delete Webhook

Delete a webhook

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | The ID of the space                                  |         |
| Webhook ID    | The ID of the webhook                                |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Asset

Retrieve a single asset

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Environment ID | The ID of the environment                            |         |
| Space ID       | The ID of the space                                  |         |
| Asset ID       | The ID of the asset                                  |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Bulk Action

Retrieve a bulk action

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Space ID       | The ID of the space                                  |         |
| Environment ID | The ID of the environment                            |         |
| Bulk Action ID | The ID of the bulk action                            |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Environment

Retrieve a single environment

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Space ID       | The ID of the space                                  |         |
| Environment ID | The ID of the environment                            |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Organization

Retrieve an organization by ID

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      |                                                      |         |
| Organization ID | The ID of the organization                           |         |
| Debug Request   | Enabling this flag will log out the current request. | false   |

### Get Space

Retrieve a single space

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | The ID of the space                                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Upload

Retrieves an unmodified image

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Environment ID | The ID of the environment                            |         |
| Space ID       | The ID of the space                                  |         |
| Upload ID      | The ID of the upload                                 |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Webhook

Retrieve a single webhook

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | The ID of the space                                  |         |
| Webhook ID    | The ID of the webhook                                |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Assets

Retrieve all assets of a space

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Environment ID | The ID of the environment                            |         |
| Space ID       | The ID of the space                                  |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### List Content Types

Retrieves all content types of a space

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Environment ID | The ID of the environment                            |         |
| Space ID       | The ID of the space                                  |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### List Environments

Retrieve all environments in a space

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | The ID of the space                                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Organizations

Retrieve all organizations an account has access to

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Spaces

Retrieve all spaces an account has access to

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Webhooks

Retrieves all webhooks of a space

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | The ID of the space                                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Process Asset

Process an asset

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Environment ID | The ID of the environment                            |         |
| Space ID       | The ID of the space                                  |         |
| Asset ID       | The ID of the asset                                  |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Publish an asset

Publishes an asset

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Environment ID | The ID of the environment                            |         |
| Space ID       | The ID of the space                                  |         |
| Asset ID       | The ID of the asset                                  |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Publish Bulk Action

Publish a bulk action

| Input          | Comments                                             | Default                                                                                                                                                                                                                                                                                          |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection     |                                                      |                                                                                                                                                                                                                                                                                                  |
| Space ID       | The ID of the space                                  |                                                                                                                                                                                                                                                                                                  |
| Environment ID | The ID of the environment                            |                                                                                                                                                                                                                                                                                                  |
| Items          | The items of the bulk action                         | <code>[<br /> {<br /> "sys": {<br /> "linkType": "Entry",<br /> "type": "Link",<br /> "id": "<entry_id>",<br /> "version": 2<br /> }<br /> },<br /> {<br /> "sys": {<br /> "linkType": "Asset",<br /> "type": "Link",<br /> "id": "<asset_id>",<br /> "version": 1<br /> }<br /> }<br />]</code> |
| Debug Request  | Enabling this flag will log out the current request. | false                                                                                                                                                                                                                                                                                            |

### Raw Request

Send raw HTTP request to Contentful

| Input                   | Comments                                                                                                                                                                                           | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                    |         |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                               | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.   | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                      | false   |

### Unpublish an asset

Unpublishes an asset

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Environment ID | The ID of the environment                            |         |
| Space ID       | The ID of the space                                  |         |
| Asset ID       | The ID of the asset                                  |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Unpublish Bulk Action

Unpublish a bulk action

| Input          | Comments                                             | Default                                                                                                                                                                                                                                                  |
| -------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection     |                                                      |                                                                                                                                                                                                                                                          |
| Space ID       | The ID of the space                                  |                                                                                                                                                                                                                                                          |
| Environment ID | The ID of the environment                            |                                                                                                                                                                                                                                                          |
| Items          | The items of the bulk action                         | <code>[<br /> {<br /> "sys": {<br /> "linkType": "Entry",<br /> "type": "Link",<br /> "id": "<entry_id>"<br /> }<br /> },<br /> {<br /> "sys": {<br /> "linkType": "Asset",<br /> "type": "Link",<br /> "id": "<asset_id>"<br /> }<br /> }<br />]</code> |
| Debug Request  | Enabling this flag will log out the current request. | false                                                                                                                                                                                                                                                    |

### Update Asset

Update an existing asset

| Input                 | Comments                                                                                                   | Default                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Connection            |                                                                                                            |                                                                |
| Environment ID        | The ID of the environment                                                                                  |                                                                |
| Space ID              | The ID of the space                                                                                        |                                                                |
| Asset ID              | The ID of the asset                                                                                        |                                                                |
| Title                 | The updated title of the asset. Locale key must match the original locale of the asset to be updated       | <code>{<br /> "en-US": "Example Asset"<br />}</code>           |
| New Asset Description | The updated description of the asset. Locale key must match the original locale of the asset to be updated | <code>{<br /> "en-US": "Streamliner description"<br />}</code> |
| Debug Request         | Enabling this flag will log out the current request.                                                       | false                                                          |

### Update Content Type

Update an existing content type

| Input               | Comments                                                     | Default                                                                                                                                                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          |                                                              |                                                                                                                                                                                                                                                                                          |
| Space ID            | The ID of the space                                          |                                                                                                                                                                                                                                                                                          |
| Environment ID      | The ID of the environment                                    |                                                                                                                                                                                                                                                                                          |
| Content Type ID     | The ID of the content type                                   |                                                                                                                                                                                                                                                                                          |
| Content Type Name   | The updated name for the content type                        |                                                                                                                                                                                                                                                                                          |
| Content Type Fields | The updated fields for the content type                      | <code>[<br /> {<br /> "id": "title",<br /> "name": "Title",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> },<br /> {<br /> "id": "body",<br /> "name": "Body",<br /> "required": true,<br /> "localized": true,<br /> "type": "Text"<br /> }<br />]</code> |
| Display Field       | The updated Field used as the main display field for Entries |                                                                                                                                                                                                                                                                                          |
| Description         | The updated description for the content type                 |                                                                                                                                                                                                                                                                                          |
| Debug Request       | Enabling this flag will log out the current request.         | false                                                                                                                                                                                                                                                                                    |

### Update Environment

Edit an existing environment

| Input            | Comments                                             | Default |
| ---------------- | ---------------------------------------------------- | ------- |
| Connection       |                                                      |         |
| Space ID         | The ID of the space                                  |         |
| Environment ID   | The ID of the environment                            |         |
| Environment Name | The updated name for the environment                 |         |
| Debug Request    | Enabling this flag will log out the current request. | false   |

### Update Organization

Update an organization security contact an admin or owner has access to

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      |                                                      |         |
| Organization ID | The ID of the organization                           |         |
| Security ID     | The ID of the security contact                       |         |
| Debug Request   | Enabling this flag will log out the current request. | false   |

### Update Space

Edit an existing Space

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | The ID of the space                                  |         |
| Space Name    | The updated name for the space                       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Webhook

Update an existing webhook

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | The ID of the space                                  |         |
| Name          | The updated name for the webhook                     |         |
| Webhook ID    | The ID of the webhook                                |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Upload File

Upload a file to temporary file storage

| Input         | Comments                                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                             |         |
| Space ID      | The ID of the space                                                                                                         |         |
| File Contents | The contents to write to a file. This can be a string of text, it can be binary data that was generated in a previous step. |         |
| Debug Request | Enabling this flag will log out the current request.                                                                        | false   |
