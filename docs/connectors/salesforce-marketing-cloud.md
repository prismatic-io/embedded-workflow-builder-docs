---
title: Salesforce Marketing Cloud Connector
sidebar_label: Salesforce Marketing Cloud
description: Manage assets, contacts, journeys, campaigns, transactional messaging, data extensions, automations, and event notifications in Salesforce Marketing Cloud.
---

![Salesforce Marketing Cloud](./assets/salesforce-marketing-cloud.png#connector-icon)
Manage assets, contacts, journeys, campaigns, transactional messaging, data extensions, automations, and event notifications in Salesforce Marketing Cloud.

## Connections

### OAuth 2.0 {#sfmcoauth2authorizationcode}

Authenticate using OAuth 2.0 Authorization Code flow with refresh tokens.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                        | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subdomain     | The Marketing Cloud subdomain (28-character string starting with 'mc'). Found in Setup > Apps > Installed Packages > API Integration component. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Scopes        | Space-separated OAuth 2.0 permission scopes. Include 'offline' to enable persistent refresh tokens. Remove scopes for features you do not use.  | offline documents_and_images_read documents_and_images_write saved_content_write list_and_subscribers_read list_and_subscribers_write journeys_read campaign_read campaign_write data_extensions_read data_extensions_write automations_read email_read email_write email_send sms_read sms_write sms_send event_notification_callback_create event_notification_callback_read event_notification_callback_update event_notification_callback_delete event_notification_subscription_create event_notification_subscription_read event_notification_subscription_update event_notification_subscription_delete |
| Client ID     | Client ID from Setup > Apps > Installed Packages > API Integration component.                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Client Secret | Client Secret from Setup > Apps > Installed Packages > API Integration component.                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### OAuth 2.0 Client Credentials {#sfmcoauth2clientcredentials}

Authenticate using OAuth 2.0 Client Credentials for server-to-server integrations.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                        | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Subdomain     | The Marketing Cloud subdomain (28-character string starting with 'mc'). Found in Setup > Apps > Installed Packages > API Integration component. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Scopes        | Space-separated OAuth 2.0 permission scopes. Remove scopes for features you do not use.                                                         | documents_and_images_read documents_and_images_write saved_content_write list_and_subscribers_read list_and_subscribers_write journeys_read campaign_read campaign_write data_extensions_read data_extensions_write automations_read email_read email_write email_send sms_read sms_write sms_send event_notification_callback_create event_notification_callback_read event_notification_callback_update event_notification_callback_delete event_notification_subscription_create event_notification_subscription_read event_notification_subscription_update event_notification_subscription_delete |
| Client ID     | Client ID from Setup > Apps > Installed Packages > API Integration component.                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Client Secret | Client Secret from Setup > Apps > Installed Packages > API Integration component.                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Triggers

### ENS Webhook {#enswebhook}

Receive event notifications from Salesforce Marketing Cloud Event Notification Service (ENS). Requires manual setup of ENS callback and subscription using the provided actions.

| Input         | Comments                                                                                                                                                                       | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Signature Key | The base64-encoded signature key provided when creating the ENS callback. Copy this value exactly as returned by Salesforce. Used to validate webhook signatures for security. |         |

## Actions

### Async Upsert Data Extension Rows {#asyncupsertrows}

Asynchronously insert or update multiple rows in a data extension.

| Input              | Comments                                                                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Data Extension Key | The external key (customer key) of the data extension. Found in the data extension properties.                                    |         |
| Batch Rows         | An array of row objects to upsert asynchronously. Each object's keys should match data extension column names.                    |         |

### Create Asset {#createasset}

Create a new Content Builder asset.

| Input             | Comments                                                                                                                          | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Asset Name        | The display name shown for the asset in Content Builder.                                                                          |         |
| Asset Type ID     | The numeric asset type identifier (e.g., 208 for HTML email, 196 for text-only email).                                            |         |
| Asset Description | Optional description providing details about the asset's purpose and usage.                                                       |         |
| Category ID       | The ID of the Content Builder folder/category for the asset.                                                                      |         |
| Content           | The HTML or text content of the asset.                                                                                            |         |
| Extra Body        | Additional properties to include in the asset creation or update request.                                                         |         |

### Create Automation {#createautomation}

Create a new automation in Automation Studio.

| Input                  | Comments                                                                                                                          | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Automation Name        | The display name for the automation.                                                                                              |         |
| Automation Description | A description of the automation.                                                                                                  |         |
| Extra Body             | Additional properties to include in the automation request body (e.g., steps, schedule).                                          |         |

### Create Campaign {#createcampaign}

Create a new campaign in Marketing Cloud.

| Input                | Comments                                                                                                                          | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Campaign Name        | The display name for the campaign shown in Marketing Cloud.                                                                       |         |
| Campaign Description | Optional description providing details about the campaign's purpose and content.                                                  |         |
| Campaign Code        | An optional campaign code for tracking.                                                                                           |         |
| Color                | The display color for the campaign in the Marketing Cloud UI (hex format).                                                        |         |
| Extra Body           | Additional properties to include in the campaign request body.                                                                    |         |

### Create Category {#createcategory}

Create a new Content Builder category (folder).

| Input              | Comments                                                                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Category Name      | The display name for the Content Builder folder/category.                                                                         |         |
| Parent Category ID | The ID of the parent category. Omit to create a top-level category.                                                               |         |

### Create Contact {#createcontact}

Create a new contact in Marketing Cloud.

| Input          | Comments                                                                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Contact Key    | The unique identifier (subscriber key) for the contact in Marketing Cloud.                                                        |         |
| Attribute Sets | An array of attribute set objects containing contact data to create or update.                                                    |         |

### Create Data Extension {#createdataextension}

Create a new data extension with the specified fields and configuration.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Data Extension Name | The display name for the data extension.                                                                                          |         |
| Data Extension Key  | A unique external key for the data extension. Used to reference it in API calls.                                                  |         |
| Fields              | An array of field definitions for the data extension. Each field must include name and fieldType.                                 |         |
| Is Sendable         | Whether this data extension can be used as a sendable data source for email sends.                                                | false   |

### Create Email Definition {#createemaildefinition}

Create a new transactional email send definition.

| Input                  | Comments                                                                                                                          | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Definition Key         | The unique key identifying the transactional email definition.                                                                    |         |
| Definition Name        | The display name for the transactional email definition.                                                                          |         |
| Content Customer Key   | The customer key of the Content Builder asset to use as email content.                                                            |         |
| Definition Description | A description of the transactional email definition.                                                                              |         |
| Extra Body             | Additional properties to include in the email definition creation request.                                                        |         |

### Create ENS Callback {#createcallback}

Register a new Event Notification Service (ENS) callback endpoint.

| Input          | Comments                                                                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Callback Name  | A descriptive name for the ENS callback endpoint registration.                                                                    |         |
| Callback URL   | The URL where Marketing Cloud will send event notifications.                                                                      |         |
| Max Batch Size | The maximum number of events to include in a single callback batch (1-100). Defaults to 100.                                      |         |

### Create ENS Subscription {#createsubscription}

Create a new Event Notification Service (ENS) subscription for specific event types.

| Input             | Comments                                                                                                                          | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Subscription Name | A descriptive name for the ENS event subscription.                                                                                |         |
| Callback ID       | The unique identifier of the ENS callback registration.                                                                           |         |
| Event Types       | The event types to subscribe to. Select one or more Marketing Cloud event categories.                                             |         |

### Create Journey {#createjourney}

Create a new journey (interaction) in Marketing Cloud.

| Input                | Comments                                                                                                                          | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Journey Key          | The customer key as a GUID (UUID) to be used while referencing this journey.                                                      |         |
| Journey Name         | The name of this journey.                                                                                                         |         |
| Journey Description  | A description of this journey.                                                                                                    |         |
| Workflow API Version | The Journey Spec version to use for this journey. Possible values: 0.5, 1.0.                                                      | 1.0     |
| Extra Body           | Additional properties to include in the request body.                                                                             |         |

### Create SMS Definition {#createsmsdefinition}

Create a new transactional SMS send definition.

| Input                  | Comments                                                                                                                          | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Definition Key         | The unique key identifying the transactional SMS definition.                                                                      |         |
| Definition Name        | The display name for the transactional SMS definition.                                                                            |         |
| Definition Description | A description of the transactional SMS definition.                                                                                |         |
| Extra Body             | Additional properties to include in the SMS definition creation request.                                                          |         |

### Delete Asset {#deleteasset}

Delete a Content Builder asset by ID.

| Input      | Comments                                                                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Asset ID   | The unique identifier for the Content Builder asset in Marketing Cloud.                                                           |         |

### Delete Campaign {#deletecampaign}

Delete a campaign by ID.

| Input       | Comments                                                                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Campaign ID | The unique identifier for the campaign in Marketing Cloud.                                                                        |         |

### Delete Category {#deletecategory}

Delete a Content Builder category (folder) by ID.

| Input       | Comments                                                                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Category ID | The unique identifier of the Content Builder category (folder).                                                                   |         |

### Delete Contact {#deletecontact}

Delete one or more contacts by contact key. This operation is asynchronous and may take time to complete. Returns an operation ID for status tracking.

| Input        | Comments                                                                                                                          | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Contact Keys | One or more contact keys (subscriber keys) to delete. Deletion is asynchronous and may take time to complete.                     |         |

### Delete Email Definition {#deleteemaildefinition}

Delete a transactional email send definition by key. Deleted definitions are archived and cannot be restored.

| Input          | Comments                                                                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Definition Key | The unique key identifying the transactional email definition.                                                                    |         |

### Delete ENS Callback {#deletecallback}

Delete an ENS callback endpoint registration.

| Input       | Comments                                                                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Callback ID | The unique identifier of the ENS callback registration.                                                                           |         |

### Delete ENS Subscription {#deletesubscription}

Delete an ENS event subscription.

| Input           | Comments                                                                                                                          | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Subscription ID | The unique identifier of the ENS event subscription.                                                                              |         |

### Delete Journey {#deletejourney}

Delete a journey (interaction) by ID. Deletes all versions of the journey. This action cannot be undone.

| Input      | Comments                                                                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Journey ID | The unique identifier of the journey (interaction).                                                                               |         |

### Delete SMS Definition {#deletesmsdefinition}

Delete a transactional SMS send definition by key. Deleted definitions are archived and the key can be reused.

| Input          | Comments                                                                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Definition Key | The unique key identifying the transactional SMS definition.                                                                      |         |

### Execute Automation Activities {#executeautomationactivities}

Execute automation activities by running all activities once.

| Input         | Comments                                                                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Automation ID | The unique identifier for the automation in Marketing Cloud.                                                                      |         |

### Exit Contact from Journey {#exitcontactfromjourney}

Remove a contact from a running journey by contact key and definition key. Can remove from specific versions or all versions.

| Input          | Comments                                                                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server).                    |         |
| Contact Key    | The contact key of the contact to exit from the journey.                                                                                             |         |
| Definition Key | Customer Key that uniquely identifies the journey. This key is the same for all versions of the journey.                                             |         |
| Versions       | One or more versions of a journey from which to remove a contact. Comma-separated list (e.g., '1,2,3'). If not specified, removes from all versions. |         |

### Fire Entry Event {#fireentryevent}

Fire a journey entry event to inject a contact into a journey.

| Input                | Comments                                                                                                                          | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Event Definition Key | The event definition key for the journey entry event. Found in the journey's entry source configuration.                          |         |
| Contact Key          | The contact key (subscriber key) of the contact entering the journey.                                                             |         |
| Event Data           | Additional data to pass to the journey entry event as key-value pairs.                                                            |         |

### Get Asset {#getasset}

Retrieve a Content Builder asset by ID.

| Input      | Comments                                                                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Asset ID   | The unique identifier for the Content Builder asset in Marketing Cloud.                                                           |         |

### Get Automation {#getautomation}

Retrieve an Automation Studio automation by ID.

| Input         | Comments                                                                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Automation ID | The unique identifier for the automation in Marketing Cloud.                                                                      |         |

### Get Campaign {#getcampaign}

Retrieve a campaign by ID.

| Input       | Comments                                                                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Campaign ID | The unique identifier for the campaign in Marketing Cloud.                                                                        |         |

### Get Category {#getcategory}

Retrieve a single Content Builder category (folder) by its ID.

| Input       | Comments                                                                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Category ID | The unique identifier of the Content Builder category (folder).                                                                   |         |

### Get Contact {#getcontact}

Retrieve a contact by contact key.

| Input       | Comments                                                                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Contact Key | The unique identifier (subscriber key) for the contact in Marketing Cloud.                                                        |         |

### Get Contact Schema {#getcontactschema}

Retrieve the contact schema definition, including attribute sets and field definitions.

| Input      | Comments                                                                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |

### Get Data Extension Fields {#getdataextensionfields}

Retrieve a list of fields in a data extension.

| Input             | Comments                                                                                                                          | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Data Extension ID | The unique ID of the data extension.                                                                                              |         |

### Get Email Definition {#getemaildefinition}

Retrieve a transactional email send definition by key.

| Input          | Comments                                                                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Definition Key | The unique key identifying the transactional email definition.                                                                    |         |

### Get Email Send Status {#getemailsendstatus}

Retrieve the delivery status of a sent transactional email.

| Input       | Comments                                                                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Message Key | The message key returned from a send email request.                                                                               |         |

### Get ENS Subscription {#getsubscription}

Retrieve an Event Notification Service (ENS) subscription by ID.

| Input           | Comments                                                                                                                          | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Subscription ID | The unique identifier of the ENS event subscription.                                                                              |         |

### Get Journey {#getjourney}

Retrieve a journey (interaction) by ID.

| Input      | Comments                                                                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Journey ID | The unique identifier of the journey (interaction).                                                                               |         |
| Version    | The version number of the journey. Defaults to the latest version.                                                                |         |

### Get SMS Definition {#getsmsdefinition}

Retrieve a transactional SMS send definition by key.

| Input          | Comments                                                                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Definition Key | The unique key identifying the transactional SMS definition.                                                                      |         |

### List Assets {#listassets}

List Content Builder assets with optional pagination.

| Input      | Comments                                                                                                                                                       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server).                              |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                                        | false   |
| Page Size  | The maximum number of results returned per page. The allowed maximum depends on the endpoint. A Page value must be provided for this parameter to take effect. |         |
| Page       | The page number to retrieve (starts at 1).                                                                                                                     |         |

### List Automations {#listautomations}

List Automation Studio automations with optional pagination.

| Input      | Comments                                                                                                                                                       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server).                              |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                                        | false   |
| Page Size  | The maximum number of results returned per page. The allowed maximum depends on the endpoint. A Page value must be provided for this parameter to take effect. |         |
| Page       | The page number to retrieve (starts at 1).                                                                                                                     |         |

### List Campaigns {#listcampaigns}

List campaigns with optional pagination.

| Input      | Comments                                                                                                                                                       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server).                              |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                                        | false   |
| Page Size  | The maximum number of results returned per page. The allowed maximum depends on the endpoint. A Page value must be provided for this parameter to take effect. |         |
| Page       | The page number to retrieve (starts at 1).                                                                                                                     |         |

### List Categories {#listcategories}

List Content Builder categories (folders).

| Input      | Comments                                                                                                                                                       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server).                              |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                                        | false   |
| Page Size  | The maximum number of results returned per page. The allowed maximum depends on the endpoint. A Page value must be provided for this parameter to take effect. |         |
| Page       | The page number to retrieve (starts at 1).                                                                                                                     |         |

### List Data Extensions {#listdataextensions}

Retrieve a list of data extensions that match a search string, with optional pagination.

| Input         | Comments                                                                                                                                                       | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server).                              |         |
| Search String | A string to search for in the name of the custom object.                                                                                                       |         |
| Fetch All     | When true, automatically fetches all pages of results using pagination.                                                                                        | false   |
| Page Size     | The maximum number of results returned per page. The allowed maximum depends on the endpoint. A Page value must be provided for this parameter to take effect. |         |
| Page          | The page number to retrieve (starts at 1).                                                                                                                     |         |

### List Email Definitions {#listemaildefinitions}

List transactional email send definitions with optional pagination.

| Input      | Comments                                                                                                                                                       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server).                              |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                                        | false   |
| Page Size  | The maximum number of results returned per page. The allowed maximum depends on the endpoint. A Page value must be provided for this parameter to take effect. |         |
| Page       | The page number to retrieve (starts at 1).                                                                                                                     |         |

### List ENS Callbacks {#listcallbacks}

List registered Event Notification Service (ENS) callback endpoints.

| Input      | Comments                                                                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |

### List ENS Subscriptions {#listsubscriptions}

List Event Notification Service (ENS) event subscriptions.

| Input      | Comments                                                                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |

### List Journeys {#listjourneys}

List journeys (interactions) with optional filtering.

| Input       | Comments                                                                                                                                                       | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server).                              |         |
| Status      | Filter journeys by status.                                                                                                                                     |         |
| Name Filter | Filter journeys by name (partial match).                                                                                                                       |         |
| Fetch All   | When true, automatically fetches all pages of results using pagination.                                                                                        | false   |
| Page Size   | The maximum number of results returned per page. The allowed maximum depends on the endpoint. A Page value must be provided for this parameter to take effect. |         |
| Page        | The page number to retrieve (starts at 1).                                                                                                                     |         |

### List SMS Definitions {#listsmsdefinitions}

List transactional SMS send definitions with optional pagination.

| Input      | Comments                                                                                                                                                       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server).                              |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                                        | false   |
| Page Size  | The maximum number of results returned per page. The allowed maximum depends on the endpoint. A Page value must be provided for this parameter to take effect. |         |
| Page       | The page number to retrieve (starts at 1).                                                                                                                     |         |

### Query Assets {#queryassets}

Search Content Builder assets using the query API with filters and sorting.

| Input      | Comments                                                                                                                                                       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server).                              |         |
| Query      | A query filter object for searching assets. Uses the Content Builder query syntax.                                                                             |         |
| Fields     | Comma-separated list of fields to include in the response. Reduces payload size.                                                                               |         |
| Page Size  | The maximum number of results returned per page. The allowed maximum depends on the endpoint. A Page value must be provided for this parameter to take effect. |         |
| Page       | The page number to retrieve (starts at 1).                                                                                                                     |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to the Salesforce Marketing Cloud REST API.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server).                                                                                                                                                                                       |         |
| URL                     | Input the path only (/interaction/v1/interactions). The base URL is already included (https://{your_subdomain}.rest.marketingcloudapis.com/). For example, to connect to https://{your_subdomain}.rest.marketingcloudapis.com//interaction/v1/interactions, only /interaction/v1/interactions is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                 |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                               |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                    |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                        |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                  |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                     |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                             |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                     |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                     | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                        | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                     | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                           | false   |

### Search Contacts {#searchcontacts}

Search contacts using filter criteria.

| Input         | Comments                                                                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Search Filter | A filter object to search contacts. Uses the Marketing Cloud Contacts search syntax.                                              |         |

### Search Contacts by Email {#searchcontactsbyemail}

Search for contacts by email address.

| Input         | Comments                                                                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Email Address | The email address associated with the contact.                                                                                    |         |

### Send Email {#sendemail}

Send a transactional email to a single recipient using a send definition.

| Input                 | Comments                                                                                                                          | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Message Key           | The unique identifier of the email definition you want to send.                                                                   |         |
| Definition Key        | The unique key identifying the transactional email definition.                                                                    |         |
| Recipient Contact Key | The contact key (subscriber key) of the email recipient.                                                                          |         |
| Recipient Email       | The email address to send to.                                                                                                     |         |
| Recipient Attributes  | Key-value pairs of personalization attributes for the email template.                                                             |         |

### Send Email Batch {#sendemailbatch}

Send a transactional email to multiple recipients in a single batch request.

| Input          | Comments                                                                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Definition Key | The unique key identifying the transactional email definition.                                                                    |         |
| Recipients     | An array of recipient objects for batch email sending. Each must include contactKey and to.                                       |         |

### Send SMS {#sendsms}

Send a transactional SMS to a single recipient using a send definition.

| Input                 | Comments                                                                                                                          | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Message Key           | A unique identifier that you can use to track the status of the message. The key can contain up to 100 characters.                |         |
| Definition Key        | The unique key identifying the transactional SMS definition.                                                                      |         |
| Recipient Contact Key | The contact key (subscriber key) of the SMS recipient.                                                                            |         |
| Recipient Phone       | The phone number to send the SMS to, including country code (e.g., +15551234567).                                                 |         |
| Recipient Attributes  | Key-value pairs of personalization attributes for the SMS.                                                                        |         |

### Send SMS Batch {#sendsmsbatch}

Send a transactional SMS to multiple recipients in a single batch request.

| Input          | Comments                                                                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Definition Key | The unique key identifying the transactional SMS definition.                                                                      |         |
| Recipients     | An array of recipient objects for batch SMS sending. Each must include contactKey and to (phone number).                          |         |

### Update Asset {#updateasset}

Update an existing Content Builder asset.

| Input             | Comments                                                                                                                          | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Asset ID          | The unique identifier for the Content Builder asset in Marketing Cloud.                                                           |         |
| Asset Name        | The display name shown for the asset in Content Builder.                                                                          |         |
| Asset Description | Optional description providing details about the asset's purpose and usage.                                                       |         |
| Category ID       | The ID of the Content Builder folder/category for the asset.                                                                      |         |
| Content           | The HTML or text content of the asset.                                                                                            |         |
| Extra Body        | Additional properties to include in the asset creation or update request.                                                         |         |

### Update Automation {#updateautomation}

Update an automation by ID. Use this to modify properties like name, description, or toggle isActive to pause/resume a scheduled automation.

| Input         | Comments                                                                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Automation ID | The unique identifier for the automation in Marketing Cloud.                                                                      |         |
| Extra Body    | A JSON object of properties to update on the automation (e.g., name, description, isActive, steps, schedule).                     |         |

### Update Category {#updatecategory}

Update a Content Builder category (folder) by ID. Provide only the fields you want to change.

| Input              | Comments                                                                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Category ID        | The unique identifier of the Content Builder category (folder).                                                                   |         |
| Category Name      | The display name for the Content Builder folder/category.                                                                         |         |
| Parent Category ID | The ID of the parent category. Omit to create a top-level category.                                                               |         |

### Update Contact {#updatecontact}

Update an existing contact's attributes in Marketing Cloud.

| Input          | Comments                                                                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Contact Key    | The unique identifier (subscriber key) for the contact in Marketing Cloud.                                                        |         |
| Attribute Sets | An array of attribute set objects containing contact data to create or update.                                                    |         |

### Update Email Definition {#updateemaildefinition}

Update a transactional email send definition by key. Changes are applied automatically.

| Input                  | Comments                                                                                                                          | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Definition Key         | The unique key identifying the transactional email definition.                                                                    |         |
| Definition Name        | The display name for the transactional email definition.                                                                          |         |
| Definition Description | A description of the transactional email definition.                                                                              |         |
| Extra Body             | Additional properties to include in the email definition creation request.                                                        |         |

### Update ENS Callback {#updatecallback}

Update an Event Notification Service (ENS) callback endpoint. Changes may take up to 2 minutes to become active.

| Input          | Comments                                                                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Callback ID    | The unique identifier of the ENS callback registration.                                                                           |         |
| Callback Name  | A descriptive name for the ENS callback endpoint registration.                                                                    |         |
| Callback URL   | The updated URL where Marketing Cloud will send event notifications.                                                              |         |
| Max Batch Size | The updated maximum number of events to include in a single callback batch (1-100).                                               |         |

### Update ENS Subscription {#updatesubscription}

Update an Event Notification Service (ENS) subscription. Can modify the subscription name, event types, or status.

| Input             | Comments                                                                                                                          | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Subscription ID   | The unique identifier of the ENS event subscription.                                                                              |         |
| Subscription Name | A descriptive name for the ENS event subscription.                                                                                |         |
| Event Types       | The event types to subscribe to. Select one or more Marketing Cloud event categories.                                             |         |

### Update Journey {#updatejourney}

Update an existing journey (interaction). This operation requires the full journey definition and replaces the existing configuration. Partial updates are not supported.

| Input                | Comments                                                                                                                          | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Journey ID           | The unique identifier of the journey (interaction).                                                                               |         |
| Journey Key          | The customer key as a GUID (UUID) to be used while referencing this journey.                                                      |         |
| Workflow API Version | The Journey Spec version to use for this journey. Possible values: 0.5, 1.0.                                                      | 1.0     |
| Version              | The version of this journey.                                                                                                      |         |
| Extra Body           | Additional properties to include in the request body.                                                                             |         |

### Update SMS Definition {#updatesmsdefinition}

Update a transactional SMS send definition by key. Changes may take up to two minutes to reflect in outbound messages.

| Input                  | Comments                                                                                                                          | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Definition Key         | The unique key identifying the transactional SMS definition.                                                                      |         |
| Definition Name        | The display name for the transactional SMS definition.                                                                            |         |
| Definition Description | A description of the transactional SMS definition.                                                                                |         |
| Extra Body             | Additional properties to include in the SMS definition creation request.                                                          |         |

### Upsert Data Extension Row {#upsertrow}

Insert or update a single row in a data extension by primary key.

| Input              | Comments                                                                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Data Extension Key | The external key (customer key) of the data extension. Found in the data extension properties.                                    |         |
| Primary Keys       | A JSON object of primary key column name/value pairs that identify the row.                                                       |         |
| Row Data           | A JSON object representing the row to upsert. Keys should match data extension column names.                                      |         |

### Verify ENS Callback {#verifycallback}

Verify ownership of an ENS callback endpoint using the verification key.

| Input            | Comments                                                                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Salesforce Marketing Cloud OAuth connection (Authorization Code for user context or Client Credentials for server-to-server). |         |
| Callback ID      | The unique identifier of the ENS callback registration.                                                                           |         |
| Verification Key | The verification key sent to the callback URL during registration. Must be returned to verify ownership.                          |         |
