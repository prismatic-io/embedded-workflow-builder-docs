---
title: Adobe I/O Events Connector
sidebar_label: Adobe I/O Events
description: Adobe I/O Events notifies you when changes occur. Use the Adobe I/O Events component to easily integrate events into your applications using Webhooks.
---

![Adobe I/O Events](./assets/adobe-io-events.png#connector-icon)
[Adobe I/O Events](https://developer.adobe.com/events/) trigger when changes to content and data on Adobe's Experience Platform occur; or when predefined rules or thresholds have been met.
Use the Adobe I/O Events Component to build reactive, near real-time event-driven applications with Adobe I/O Events.

## API Documentation

This component was built using the [Adobe I/O Events API](https://developer.adobe.com/events/docs/guides/api/).

## Connections

### Adobe I/O Connection {#adobeioconnection}

Adobe I/O Connection

To establish an OAuth connection for your Adobe integration, follow these steps:

1. Visit the Adobe Developer Console projects page by navigating to [https://developer.adobe.com/console/projects](https://developer.adobe.com/console/projects).

2. Create a new project by clicking the appropriate option.

3. Click on "Add to project" to start configuring your project.

4. Add the "I/O Management API" to your project. This API enables access to Adobe I/O services.

5. Select "OAuth Server-to-Server authentication" as your preferred authentication method.

6. Generate an access token from the connected credentials section. This step will also provide you with the Client ID required for your integration.

7. In the Project overview view, you can download the project configuration JSON file. This file contains various values such as Organization ID, Project ID, and Workspace ID, which are essential for using the actions within your integration.

With these steps, you'll have set up an OAuth connection and obtained the necessary credentials for your Adobe I/O Events Component.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                 | Default                                          |
| ------------- | ------------------------------------------------------------------------ | ------------------------------------------------ |
| Token URL     | The OAuth 2.0 Token URL for the Adobe I/O Connection                     | https://ims-na1.adobelogin.com/ims/token/v3      |
| Scopes        | Space separated OAuth 2.0 permission scopes for the Adobe I/O Connection | adobeio_api, openid, AdobeID, read_organizations |
| Client ID     | Client Identifier of your app for the Adobe I/O Connection               |                                                  |
| Client Secret | Client Secret of your app for the Adobe I/O Connection                   |                                                  |

## Triggers

### Webhook {#adobeioeventwebhook}

Receive and validate webhook requests from Adobe I/O for webhooks you configure

## Actions

### Create Events Provider {#createeventsprovider}

Create an Adobe I/O Events Provider

| Input                      | Comments                                                                               | Default |
| -------------------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection                 |                                                                                        |         |
| Consumer Organization ID   | Your consumer organization Id                                                          |         |
| Project ID                 | The project Id                                                                         |         |
| Workspace ID               | The workspace Id                                                                       |         |
| Provider Label             | The label of this Events Provider, as shown on the Adobe Developer Console             |         |
| Provider Description       | The description of this Events Provider, as shown on the Adobe Developer Console       |         |
| Provider Documentation URL | The documentation url of this Events Provider, as shown on the Adobe Developer Console |         |

### Create Webhook/Journal Registration {#createwebhook}

Create a Webhook/Journal registration for given workspace

| Input                    | Comments                                                                                                                                                                                                                 | Default                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Connection               |                                                                                                                                                                                                                          |                                                                                   |
| Consumer Organization ID | Your consumer organization Id                                                                                                                                                                                            |                                                                                   |
| Project ID               | The project Id                                                                                                                                                                                                           |                                                                                   |
| Workspace ID             | The workspace Id                                                                                                                                                                                                         |                                                                                   |
| Registration Name        | The name of the webhook registration which will be displayed on Developer Console                                                                                                                                        |                                                                                   |
| Registration Description | The description of this registration                                                                                                                                                                                     |                                                                                   |
| Webhook URL              | The URL where the events will be delivered                                                                                                                                                                               |                                                                                   |
| Events of Interest       | The events of interest for this registration. You can get the provider_id (provider not required) and event_code from the list of registrations available for your workspace by using the List All Registrations action. | <code>[{"provider":"string","event_code":"string","provider_id":"string"}]</code> |
| Delivery Type            | The delivery type of this registration.                                                                                                                                                                                  | webhook                                                                           |
| Runtime Action           | Runtime action to be invoked by the published events                                                                                                                                                                     |                                                                                   |
| Enabled                  | Enable or disable the registration                                                                                                                                                                                       | true                                                                              |

### Delete Events Provider {#deleteeventsprovider}

Delete an Adobe I/O Events Provider by ID

| Input                    | Comments                      | Default |
| ------------------------ | ----------------------------- | ------- |
| Connection               |                               |         |
| Consumer Organization ID | Your consumer organization Id |         |
| Project ID               | The project Id                |         |
| Workspace ID             | The workspace Id              |         |
| Provider ID              | The requested provider Id     |         |

### Delete Instanced Webhooks {#deleteinstancedwebhooks}

Delete all Adobe I/O Webhook Registrations entitled to the provided Workspace ID

| Input                    | Comments                      | Default |
| ------------------------ | ----------------------------- | ------- |
| Connection               |                               |         |
| Consumer Organization ID | Your consumer organization Id |         |
| Project ID               | The project Id                |         |
| Workspace ID             | The workspace Id              |         |

### Delete Registration (Webhook/Journal) {#deleteregistration}

Delete Registration by Registration ID (Webhook/Journal)

| Input                    | Comments                                             | Default |
| ------------------------ | ---------------------------------------------------- | ------- |
| Connection               |                                                      |         |
| Consumer Organization ID | Your consumer organization Id                        |         |
| Project ID               | The project Id                                       |         |
| Workspace ID             | The workspace Id                                     |         |
| Registration ID          | The registration Id associated with the registration |         |

### Get Events Provider {#geteventsprovider}

View Adobe I/O Events Provider by ID

| Input          | Comments                                                            | Default |
| -------------- | ------------------------------------------------------------------- | ------- |
| Connection     |                                                                     |         |
| Provider ID    | The requested provider Id                                           |         |
| Event Metadata | The optional boolean to fetch or not this provider's event metadata | false   |

### List All Registrations {#listallregistrations}

List all Adobe I/O Events Registrations entitled to the provided Workspace ID

| Input                    | Comments                      | Default |
| ------------------------ | ----------------------------- | ------- |
| Connection               |                               |         |
| Consumer Organization ID | Your consumer organization Id |         |
| Project ID               | The project Id                |         |
| Workspace ID             | The workspace Id              |         |

### List Events Providers {#listeventsproviders}

List all Adobe I/O Events Providers entitled to the provided Organization ID

| Input                    | Comments                      | Default |
| ------------------------ | ----------------------------- | ------- |
| Connection               |                               |         |
| Consumer Organization ID | Your consumer organization Id |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Adobe I/O Events

| Input                   | Comments                                                                                                                                                                                                                                                                                                                      | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                               |         |
| URL                     | Input the path only (/{consumer_org_id}/providers), The base URL is already included (https://api.adobe.io/events), Authorization and x-api-key headers are already included. For example, to connect to https://api.adobe.io/events/{consumer_org_id}/providers, only /{consumer_org_id}/providers is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                       |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                     |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                          |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                              |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                        |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                           |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                   |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                      | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                           |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                          | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                                                                                                                                    | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                                                                                                                               | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                                                                                                                                     | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                                                                                                                              | false   |

### Update Events Provider {#updateeventsprovider}

Update an Adobe I/O Events Provider

| Input                      | Comments                                                                               | Default |
| -------------------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection                 |                                                                                        |         |
| Consumer Organization ID   | Your consumer organization Id                                                          |         |
| Project ID                 | The project Id                                                                         |         |
| Workspace ID               | The workspace Id                                                                       |         |
| Provider Label             | The label of this Events Provider, as shown on the Adobe Developer Console             |         |
| Provider Description       | The description of this Events Provider, as shown on the Adobe Developer Console       |         |
| Provider Documentation URL | The documentation url of this Events Provider, as shown on the Adobe Developer Console |         |
| Provider ID                | The requested provider Id                                                              |         |
