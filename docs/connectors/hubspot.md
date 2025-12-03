---
title: HubSpot Connector
sidebar_label: HubSpot
description: Manage records and associations in the HubSpot CRM platform
---

![HubSpot](./assets/hubspot.png#connector-icon)
Manage records and associations in the HubSpot CRM platform

## Connections

### OAuth 2.0

Authenticate requests to Hubspot using OAuth 2.0.

### Creating an App via the CLI

To connect to HubSpot using OAuth 2.0, create an app in the HubSpot developer platform. HubSpot offers two approaches: the latest app creation via CLI (recommended), or creating a legacy app through the web interface.

Refer to the [HubSpot app creation guide](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app) and [quick reference guide](https://developers.hubspot.com/docs/getting-started/quickstart) for detailed information.

#### Prerequisites

- A [HubSpot developer account](https://developers.hubspot.com/)
- Node.js and npm installed (for CLI-based app creation)
- HubSpot CLI version 7.6.0 or higher (for CLI-based app creation)

#### Setup Steps

1. Install the HubSpot CLI:

   ```bash
   npm install -g @hubspot/cli
   ```

2. Authenticate the CLI with the HubSpot developer account:

   ```bash
   hs account auth
   ```

3. Create a new app project:

   ```bash
   hs project create
   ```

   - Select **App** as the project template
   - Choose the distribution type (marketplace or private/specific accounts)
   - Select **OAuth** as the authentication method
   - Optionally select app features (Card, App Function, Settings, Webhooks, Custom Workflow Action)

4. Configure the app by editing the generated `app-hsmeta.json` file:
   - Update app name, description, and required scopes
   - Add redirect URLs for OAuth authentication

5. Upload the app project to HubSpot:

   ```bash
   hs project upload
   ```

   :::note Directory Error
   If the error `[ERROR] Unable to locate a project configuration file` appears, change to the project folder where the app was created and run the command again.
   :::

6. Open the project in the HubSpot developer portal:

   ```bash
   hs project open
   ```

7. Navigate to the **Auth** tab in the developer portal
8. Copy the **Client ID** and **Client Secret** from the Auth page

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the app's Auth page
- For **Scopes**, choose from the available scopes based on integration needs
  - Refer to [HubSpot OAuth documentation](https://developers.hubspot.com/docs/api/working-with-oauth) for scope details
- Under **Redirect URLs**, ensure `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` has been added to the app configuration

#### Recommended Scopes

The following scopes provide comprehensive access to HubSpot CRM functionality that this component supports:

**Essential Scopes:**

- `oauth` - Required for all OAuth apps (cannot be removed)
- `crm.objects.owners.read` - Read owner information

**CRM Objects:**

- `crm.objects.contacts.read` `crm.objects.contacts.write` - Contacts management
- `crm.objects.companies.read` `crm.objects.companies.write` - Companies management
- `crm.objects.deals.read` `crm.objects.deals.write` - Deals management
- `crm.objects.custom.read` `crm.objects.custom.write` - Custom objects management

**Additional CRM Objects:**

- `crm.objects.line_items.read` `crm.objects.line_items.write` - Line items management
- `crm.objects.quotes.read` `crm.objects.quotes.write` - Quotes management
- `tickets` - Ticket management (legacy scope covers read/write)

**Engagement Types:**

- `crm.schemas.contacts.read` - Contact property definitions
- `crm.schemas.companies.read` - Company property definitions
- `crm.schemas.deals.read` - Deal property definitions

**Webhooks:**

- `webhooks` - Create and manage webhook subscriptions (requires App ID and Developer API Key)

**Example minimal scope configuration:**

```
crm.objects.contacts.read crm.objects.contacts.write crm.objects.deals.read crm.objects.deals.write crm.objects.owners.read
```

For a complete list of available scopes, refer to the [HubSpot OAuth scopes documentation](https://developers.hubspot.com/docs/api/oauth/scopes).

### Creating a Legacy App

:::warning Legacy Apps
Legacy apps will continue to work, but they won't receive new features or platform improvements from HubSpot. The CLI-based approach is recommended for new integrations.
:::

#### Setup Steps

1. Navigate to the [HubSpot developer account portal](https://app.hubspot.com/developer)
2. Click **Create app** to create a new public app
3. Fill in the app details (name, description, etc.)
4. Navigate to the **Auth** tab of the newly created app
5. Copy the **Client ID** and **Client Secret** from this page
6. Under **Redirect URLs**, add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
7. Configure the required scopes for the integration in the **Scopes** section

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                                                                                                  | Default                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Authorize URL     | The OAuth 2.0 Authorization URL for HubSpot. You can include optional scopes here.                                        | https://app.hubspot.com/oauth/authorize |
| Scopes            | OAuth permission scopes. See [HubSpot scopes](https://developers.hubspot.com/docs/api/oauth/scopes) for available scopes. |                                         |
| Client ID         | The Client ID from your HubSpot app. Find this in HubSpot Developer Account > Apps > Auth.                                |                                         |
| Client Secret     | The Client Secret from your HubSpot app. Keep this value secure.                                                          |                                         |
| App ID            | The App ID from the HubSpot Developer Console. Required for Webhooks.                                                     |                                         |
| Developer API Key | The Developer API Key from the HubSpot Developer Console. Required for Webhooks.                                          |                                         |

### Private App Access Token

Authenticate requests to Hubspot using a private app access token.

Private app access tokens are recommended for testing purposes only. For production integrations, OAuth 2.0 should be used to allow users to authenticate with their own credentials.

Private app access tokens do not expire but can be revoked at any time from the HubSpot account settings.

#### Prerequisites

- Access to a [HubSpot account](https://app.hubspot.com)
- Appropriate permissions to create private apps

#### Setup Steps

To generate a private app access token:

1. Navigate to [HubSpot](https://app.hubspot.com) and log in
2. Navigate to **Settings > Integrations > Private Apps**
3. Click **Create a private app**
4. Enter a name for the app
5. Configure the required scopes for the integration
6. After creating the app, navigate to the **Auth** tab
7. Copy the **Access Token** displayed

#### Configure the Connection

- Enter the **Access Token** from the HubSpot private app settings into the connection configuration

| Input        | Comments                                                                                                                        | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Access Token | An access token generated when you create a private app. For testing purposes only - use OAuth 2.0 for production integrations. |         |

### Webhook Authentication

Authenticate HubSpot webhooks using Client Secret for signature verification only.

The Webhook Authentication connection is used specifically for verifying HubSpot webhook signatures to ensure webhook requests are legitimate.

This connection is only used for webhook triggers and does not grant API access. It solely validates that incoming webhooks are from HubSpot by verifying the request signature.

#### Prerequisites

- Access to a [HubSpot account](https://app.hubspot.com)
- Appropriate permissions to create private apps or manage existing apps
- A configured HubSpot app with webhook capabilities

#### Setup Steps

1. Navigate to [HubSpot](https://app.hubspot.com) and log in
2. Navigate to **Settings > Integrations > Private Apps**
3. To create a new app:
   - Click **Create a private app** or **Create an app**
   - Configure the required webhook subscriptions
4. Navigate to the **Auth** or **App Credentials** section
5. Copy the **Client Secret** value

#### Configure the Connection

- Enter the **Client Secret** from the HubSpot app into the connection configuration
- The client secret is used to verify webhook signatures
- Ensure the trigger is configured to use the Webhook Authentication connection

#### Webhook Subscriptions

After configuring the connection, webhook subscriptions must be set up:

1. In the app settings, navigate to the **Webhooks** section
2. Click **Configure** or **Set up webhooks**
3. Provide the following:
   - **Target URL**: The webhook endpoint URL where HubSpot will send webhook events (found in **Test Configuration > Trigger Payload** section of the integration)
   - **Events to subscribe to**: Select the specific events to monitor (e.g., contact created, deal updated, company deleted)

| Input         | Comments                                                                    | Default |
| ------------- | --------------------------------------------------------------------------- | ------- |
| Client Secret | The Client Secret from your HubSpot app, used to verify webhook signatures. |         |

## Triggers

### Event Type Subscription

Receive CRM event notifications from HubSpot. Automatically creates and manages a webhook subscription for selected event types when the instance is deployed, and removes the subscription when the instance is deleted.

| Input                      | Comments                                                                                         | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection                 | The connection to use for authenticating requests to HubSpot.                                    |         |
| Event Types                | Events to listen for. Make sure to have the right permissions.                                   |         |
| Overwrite Webhook Settings | When true, overwrites existing webhook settings. HubSpot only permits one Target URL per App ID. | false   |

### New and Updated Custom Records

Checks for new and updated records in a specified custom object type on a configured schedule.

| Input                | Comments                                                                                                                                                                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Show New Records     | When true, includes new records in the results.                                                                                                                                                                                                         | true    |
| Show Updated Records | When true, includes updated records in the results.                                                                                                                                                                                                     | true    |
| Connection           | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                           |         |
| Object Type          | The type of custom object to search for.                                                                                                                                                                                                                |         |
| Search Properties    | Include properties such as filters and sorts, or specify the properties to be returned. If empty, only the default properties will be returned. For more information, see [HubSpot CRM Search API](https://developers.hubspot.com/docs/api/crm/search). |         |

### New and Updated Records

Checks for new and updated records in a selected HubSpot object type on a configured schedule.

| Input                | Comments                                                                                                                                                                                                                                                | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Show New Records     | When true, includes new records in the results.                                                                                                                                                                                                         | true    |
| Show Updated Records | When true, includes updated records in the results.                                                                                                                                                                                                     | true    |
| Connection           | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                           |         |
| Search Endpoint      | The endpoint to search for objects or engagements. For Custom objects don't forget to fill the Object Type input.                                                                                                                                       |         |
| Search Properties    | Include properties such as filters and sorts, or specify the properties to be returned. If empty, only the default properties will be returned. For more information, see [HubSpot CRM Search API](https://developers.hubspot.com/docs/api/crm/search). |         |

### Webhook

Receive and validate webhook requests from HubSpot for manually configured webhook subscriptions.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

## Actions

### Archive Association

Remove the associations between two provided objects

| Input               | Comments                                                                                                                                                                                                      | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| From Object Type    | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined. |         |
| To Object Type      | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined.   |         |
| From Id             | The unique identifier of the first object                                                                                                                                                                     |         |
| To Id               | The unique identifier of the second object                                                                                                                                                                    |         |
| Type Of Association | Provide a value for the type of association to perform. You can get the set of available values for this input by making a step using the "List Association Types"                                            |         |
| Timeout             | The maximum time a client will await a request                                                                                                                                                                |         |
| Connection          | The connection to use for authenticating requests to HubSpot.                                                                                                                                                 |         |

### Archive Batch Contacts

Archive a batch of contacts by ID

| Input       | Comments                                                      | Default |
| ----------- | ------------------------------------------------------------- | ------- |
| Contact Ids | A list of contact IDs.                                        |         |
| Timeout     | The maximum time a client will await a request                |         |
| Connection  | The connection to use for authenticating requests to HubSpot. |         |

### Archive Batch Engagement

Archives a batch of selected engagements by their IDs.

| Input             | Comments                                                      | Default |
| ----------------- | ------------------------------------------------------------- | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot. |         |
| Engagement Object | Select an engagement object.                                  |         |
| Engagement Ids    | A list of engagement IDs.                                     |         |
| Timeout           | The maximum time a client will await a request                |         |

### Cancel Import

Cancels an active import.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
| Import Id  | The unique identifier of the import.                          |         |
| Timeout    | The maximum time a client will await a request                |         |

### Create Association

Create an association between the objects identified in the step

| Input               | Comments                                                                                                                                                                                                      | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| From Object Type    | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined. |         |
| To Object Type      | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined.   |         |
| From Id             | The unique identifier of the first object                                                                                                                                                                     |         |
| To Id               | The unique identifier of the second object                                                                                                                                                                    |         |
| Type Of Association | Provide a value for the type of association to perform. You can get the set of available values for this input by making a step using the "List Association Types"                                            |         |
| Timeout             | The maximum time a client will await a request                                                                                                                                                                |         |
| Connection          | The connection to use for authenticating requests to HubSpot.                                                                                                                                                 |         |

### Create Batch Contacts

Create a batch of contacts

| Input          | Comments                                                                                                                                | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                                           |         |
| Batch Contacts | An array of contact objects to create. See [HubSpot Contacts API](https://developers.hubspot.com/docs/api/crm/contacts) for properties. |         |
| Timeout        | The maximum time a client will await a request                                                                                          |         |

### Create Batch Engagement

Creates a batch of selected engagements.

| Input             | Comments                                                      | Default |
| ----------------- | ------------------------------------------------------------- | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot. |         |
| Engagement Object | Select an engagement object.                                  |         |
| Batch Engagements | An array of engagements.                                      |         |
| Timeout           | The maximum time a client will await a request                |         |

### Create Company

Create a new company

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Company Name   | The name of the company                                                                                       |         |
| Industry       | The industry of the company                                                                                   |         |
| Phone          | The phone number of the company.                                                                              |         |
| Description    | The description of the object.                                                                                |         |
| Domain         | The domain of the company                                                                                     |         |
| City           | The city of the company                                                                                       |         |
| State          | The state of the company                                                                                      |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                              |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Timeout        | The maximum time a client will await a request                                                                |         |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                 |         |

### Create Contact

Create a new contact

| Input          | Comments                                                                                                                                           | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| First Name     | The first name of the contact.                                                                                                                     |         |
| Last Name      | The last name of the contact.                                                                                                                      |         |
| Phone          | The phone number.                                                                                                                                  |         |
| Company        | The company of the contact.                                                                                                                        |         |
| Email          | The email of the contact. Getting contacts by email performs a search function and will return a successful output even when no results are found. |         |
| Website        | The website URL.                                                                                                                                   |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                                                                   |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                      |         |
| Timeout        | The maximum time a client will await a request                                                                                                     |         |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                                                      |         |

### Create Custom Object

Creates new custom object schema

| Input                        | Comments                                                                                                                                 | Default                 |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection                   | The connection to use for authenticating requests to HubSpot.                                                                            |                         |
| Singular Label               | The word for one object. (There's no way to change this later.)                                                                          |                         |
| Plural Label                 | The word for multiple objects. (There's no way to change this later.)                                                                    |                         |
| Required Properties          | The names of properties that should be required when creating an object of this type.                                                    | <code>["000xxx"]</code> |
| Searchable Properties        | Names of properties that will be indexed for this object type in by HubSpot's product search.                                            | <code>["000xxx"]</code> |
| Secondary Display Properties | The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type. | <code>["000xxx"]</code> |
| Properties                   | Properties defined for this object type.                                                                                                 |                         |
| Associated Objects           | Associations defined for this object type.                                                                                               | <code>["000xxx"]</code> |
| Name                         | A unique name for this object. For internal use only.                                                                                    |                         |
| Timeout                      | The maximum time a client will await a request                                                                                           |                         |
| Values                       | The names of the fields and their values to use when creating/updating a record.                                                         |                         |
| Dynamic Fields               | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                            |                         |

### Create Deal

Create a new deal

| Input          | Comments                                                                                                                                                                  | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Amount         | The amount value for the deal.                                                                                                                                            |         |
| Close Date     | The date when the sale will close.                                                                                                                                        |         |
| Deal Name      | The name of the deal.                                                                                                                                                     |         |
| Owner Id       | The owner ID of the resource.                                                                                                                                             |         |
| Pipeline       | The pipeline to interact with.                                                                                                                                            |         |
| Deal Stage     | The stage of the deal. Deal stages allow you to categorize and track the progress of the deals.                                                                           |         |
| Priority       | The priority of the deal.                                                                                                                                                 |         |
| Deal Type      | The type of deal. By default, categorize your deal as either New Business or Existing Business. The picklist of values for this property is configurable through HubSpot. |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                                                                                          |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                             |         |
| Timeout        | The maximum time a client will await a request                                                                                                                            |         |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                                                                             |         |

### Create Engagement

Create a communication, email, call, meeting, note, postal mail or task engagement in HubSpot CRM.

| Input             | Comments                                                                                                                                                                                               | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot.                                                                                                                                          |         |
| Engagement Object | Select an engagement object.                                                                                                                                                                           |         |
| Associations      | To create and associate a task with existing records.                                                                                                                                                  |         |
| Properties        | A properties object, attributes depend on the engagement type. For possible properties for each engagement type refer to [HubSpot Engagements API](https://developers.hubspot.com/docs/api/crm/tasks). |         |
| Timeout           | The maximum time a client will await a request                                                                                                                                                         |         |

### Create Line Item

Create a new line item

| Input                          | Comments                                                                                                                              | Default |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Name                           | The name of the line item.                                                                                                            |         |
| Product Id                     | The unique identifier of the product.                                                                                                 |         |
| Recurring Billing Frequency    | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Recurring Billing Monthly Rate | The quantity of product in the line item.                                                                                             |         |
| Quantity                       | The quantity of product in the line item.                                                                                             |         |
| Price                          | The price of the product.                                                                                                             |         |
| Values                         | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields                 | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                        | The maximum time a client will await a request                                                                                        |         |
| Connection                     | The connection to use for authenticating requests to HubSpot.                                                                         |         |

### Create Product

Create a new product

| Input                       | Comments                                                                                                                              | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Name                | The name of the product.                                                                                                              |         |
| Description                 | The description of the object.                                                                                                        |         |
| Product SKU                 | The SKU of the product.                                                                                                               |         |
| Price                       | The price of the product.                                                                                                             |         |
| Recurring Billing Frequency | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Unit Cost                   | The unit cost of the product.                                                                                                         |         |
| Values                      | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields              | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                     | The maximum time a client will await a request                                                                                        |         |
| Connection                  | The connection to use for authenticating requests to HubSpot.                                                                         |         |

### Create Webhook

Create a webhook in HubSpot

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The connection to use for authenticating requests to HubSpot.                                            |         |
| Event Type    | Type of event to listen for. Can be one of create, delete, deletedForPrivacy, or propertyChange.         |         |
| Property Name | The internal name of the property to monitor for changes. Only applies when eventType is propertyChange. |         |
| Active        | When true, the subscription is active. When false, the subscription is paused.                           | false   |
| Timeout       | The maximum time a client will await a request                                                           |         |

### Delete all Instanced Webhooks

Delete all webhooks created by this instance in HubSpot

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
| Timeout    | The maximum time a client will await a request                |         |

### Delete Company

Delete an existing company by Id

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Company Id | The unique identifier of the company.                         |         |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

### Delete Contact

Delete a contact by Id

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Contact Id | The unique identifier of the contact.                         |         |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

### Delete Custom Object

Removes custom object schema

| Input                   | Comments                                                      | Default |
| ----------------------- | ------------------------------------------------------------- | ------- |
| Connection              | The connection to use for authenticating requests to HubSpot. |         |
| Object Type             | The type of object.                                           |         |
| Timeout                 | The maximum time a client will await a request                |         |
| Return Archived Results | When true, returns only results that have been archived.      | false   |

### Delete Deal

Delete a deal by its Id

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Deal Id    | The unique identifier of the deal.                            |         |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

### Delete Engagement

Deletes an engagement by its ID.

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot.      |         |
| Engagement Object | Select an engagement object.                                       |         |
| Engagement Id     | The unique identifier of the engagement. A taskId, meetingId, etc. |         |
| Timeout           | The maximum time a client will await a request                     |         |

### Delete Line Item

Delete an existing line item by Id

| Input        | Comments                                                      | Default |
| ------------ | ------------------------------------------------------------- | ------- |
| Line Item Id | The unique identifier of the line item.                       |         |
| Timeout      | The maximum time a client will await a request                |         |
| Connection   | The connection to use for authenticating requests to HubSpot. |         |

### Delete Product

Delete a product by Id

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Product Id | The unique identifier of the product.                         |         |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

### Delete Webhook

Delete a webhook by ID in HubSpot

| Input           | Comments                                                      | Default |
| --------------- | ------------------------------------------------------------- | ------- |
| Connection      | The connection to use for authenticating requests to HubSpot. |         |
| Subscription ID | The ID of the subscription to delete                          |         |
| Timeout         | The maximum time a client will await a request                |         |

### Export CRM Data

Begins exporting CRM data for the portal as specified in the request body.

| Input                                                        | Comments                                                                                                                                                                                                                                                    | Default |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                                                   | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                               |         |
| Schema Type                                                  | Schema type for the export.                                                                                                                                                                                                                                 | VIEW    |
| Format                                                       | The format of the export file.                                                                                                                                                                                                                              | CSV     |
| Export Name                                                  | The name of the export.                                                                                                                                                                                                                                     |         |
| Object Properties                                            | A list of the properties you want included in your export.                                                                                                                                                                                                  |         |
| Object Type                                                  | The name or ID of the object you're exporting. For standard objects, you can use the object's name (e.g., CONTACT), but for custom objects, you must use the objectTypeId value, you can find this value in the response of the List Custom Objects action. |         |
| Language                                                     | The language of the export file.                                                                                                                                                                                                                            |         |
| List Id (Only and required for PublicExportListRequest)      | The ILS List ID of the list to export.                                                                                                                                                                                                                      |         |
| Public CRM Search Request (Only for PublicExportViewRequest) | Indicates which data should be exported based on certain property values and search queries.                                                                                                                                                                |         |
| Associated Object Type                                       | The name or ID of an associated object to include in the export. If you include an associated object, the export will contain the associated record IDs of that object and the records' primary display property value.                                     |         |
| Timeout                                                      | The maximum time a client will await a request                                                                                                                                                                                                              |         |

### Get an Import

Get a complete summary of an import record, including any updates.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
| Import Id  | The unique identifier of the import.                          |         |
| Timeout    | The maximum time a client will await a request                |         |

### Get Batch Contacts

Read a batch of contacts by internal ID, or unique property values.

| Input                   | Comments                                                      | Default |
| ----------------------- | ------------------------------------------------------------- | ------- |
| Connection              | The connection to use for authenticating requests to HubSpot. |         |
| Properties With History | A list of properties to read by.                              |         |
| Property                | A list of properties to read by.                              |         |
| Id Property             | An ID property to search by                                   |         |
| Contact Ids             | A list of contact IDs.                                        |         |
| Return Archived Results | When true, returns only results that have been archived.      | false   |
| Timeout                 | The maximum time a client will await a request                |         |

### Get Company

Retrieve the information or metadata of a company by Id, domain, or name

| Input                           | Comments                                                                         | Default |
| ------------------------------- | -------------------------------------------------------------------------------- | ------- |
| Company Id                      | The unique identifier of the company.                                            |         |
| Company Name                    | The name of the company                                                          |         |
| Domain                          | The domain of the company                                                        |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response. |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.        |         |
| Return Archived Results         | When true, returns only results that have been archived.                         | false   |
| Timeout                         | The maximum time a client will await a request                                   |         |
| Connection                      | The connection to use for authenticating requests to HubSpot.                    |         |

### Get Contact

Get the information and metadata of a contact by Id or Email

| Input                           | Comments                                                                                                                                           | Default |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Contact Id                      | The unique identifier of the contact.                                                                                                              |         |
| Email                           | The email of the contact. Getting contacts by email performs a search function and will return a successful output even when no results are found. |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                                                                   |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                                                                          |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                                                           | false   |
| Timeout                         | The maximum time a client will await a request                                                                                                     |         |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                                                                      |         |

### Get Current User

Return information about the current session's user.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

### Get Custom Object

Retrieves a specific custom object

| Input       | Comments                                                      | Default |
| ----------- | ------------------------------------------------------------- | ------- |
| Connection  | The connection to use for authenticating requests to HubSpot. |         |
| Timeout     | The maximum time a client will await a request                |         |
| Object Type | The type of object.                                           |         |

### Get Deal

Retrieve information and metadata about a deal by its Id or name

| Input                           | Comments                                                                         | Default |
| ------------------------------- | -------------------------------------------------------------------------------- | ------- |
| Deal Id                         | The unique identifier of the deal.                                               |         |
| Deal Name                       | The name of the deal.                                                            |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response. |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.        |         |
| Return Archived Results         | When true, returns only results that have been archived.                         | false   |
| Timeout                         | The maximum time a client will await a request                                   |         |
| Connection                      | The connection to use for authenticating requests to HubSpot.                    |         |

### Get Engagement

Get a communication, email, call, meeting, note, postal mail or task engagement object from HubSpot CRM.

| Input                           | Comments                                                                                                                                                    | Default |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                                                                               |         |
| Engagement Object               | Select an engagement object.                                                                                                                                |         |
| Engagement Id                   | The unique identifier of the engagement. A taskId, meetingId, etc.                                                                                          |         |
| Properties To Return            | Properties to be returned in the response. If the specified property is not present on the requested object, it will be ignored.                            |         |
| Property With History To Return | A property to be returned along with it's history of previous values. If the specified property is not present on the requested object, it will be ignored. |         |
| Associations                    | List of object types to retrieve associated IDs for. If the specified association do not exist, it will be ignored.                                         |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                                                                    | false   |
| Id Property                     | The name of a property whose values are unique for this object type.                                                                                        |         |
| Timeout                         | The maximum time a client will await a request                                                                                                              |         |

### Get Line Item

Retrieve the information and metadata of a line item by Id

| Input                           | Comments                                                                         | Default |
| ------------------------------- | -------------------------------------------------------------------------------- | ------- |
| Line Item Id                    | The unique identifier of the line item.                                          |         |
| Name                            | The name of the line item.                                                       |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response. |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.        |         |
| Return Archived Results         | When true, returns only results that have been archived.                         | false   |
| Timeout                         | The maximum time a client will await a request                                   |         |
| Connection                      | The connection to use for authenticating requests to HubSpot.                    |         |

### Get Product

Retrieve the information and metadata of a product by Id or name

| Input                           | Comments                                                                         | Default |
| ------------------------------- | -------------------------------------------------------------------------------- | ------- |
| Product Id                      | The unique identifier of the product.                                            |         |
| Product Name                    | The name of the product.                                                         |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response. |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.        |         |
| Return Archived Results         | When true, returns only results that have been archived.                         | false   |
| Timeout                         | The maximum time a client will await a request                                   |         |
| Connection                      | The connection to use for authenticating requests to HubSpot.                    |         |

### Import CRM Data

Import CRM records and activities into your HubSpot account, such as contacts, companies, and notes.

| Input                           | Comments                                                                                                                                                                                                                                                                                                                                                                                                | Default        |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                                                                                                                                                                           |                |
| Name                            | The name of the import.                                                                                                                                                                                                                                                                                                                                                                                 |                |
| Files                           | An array containing the import file information. For more information, see [HubSpot CRM Imports API](https://developers.hubspot.com/docs/api/crm/imports).                                                                                                                                                                                                                                              |                |
| Data CSV File                   | The CSV file to import, this should be binary data from a previous step. Key name should be the file name and the value should be the binary data.                                                                                                                                                                                                                                                      |                |
| Import Operations               | Indicates whether the import should create and update, only create, or only update records for a certain object or activity. Include the objectTypeId for the object/activity and whether you want to UPSERT (create and update), CREATE, or UPDATE records. For objectTypeId's, check [HubSpot CRM Object Type IDs](https://developers.hubspot.com/docs/api/crm/understanding-the-crm#object-type-id). |                |
| Date Format                     | The format for dates included in the file. By default, this is set to MONTH_DAY_YEAR, but you can also use DAY_MONTH_YEAR or YEAR_MONTH_DAY.                                                                                                                                                                                                                                                            | MONTH_DAY_YEAR |
| Marketable Contact Import       | When true, the contacts being imported are marketable.                                                                                                                                                                                                                                                                                                                                                  | true           |
| Create Contact List From Import | When true, creates a static list of the contacts from your import.                                                                                                                                                                                                                                                                                                                                      | false          |
| Timeout                         | The maximum time a client will await a request                                                                                                                                                                                                                                                                                                                                                          |                |

### List Active Imports

Returns a paged list of active imports for this account.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
| Timeout    | The maximum time a client will await a request                |         |

### List Association Types

Retrieve a list of all association types available between two objects

| Input            | Comments                                                                                                                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The connection to use for authenticating requests to HubSpot.                                                                                                                                                 |         |
| From Object Type | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined. |         |
| To Object Type   | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined.   |         |
| Timeout          | The maximum time a client will await a request                                                                                                                                                                |         |

### List Companies

Retrieve a list of all companies

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                           |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                        |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                | false   |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | When true, fetches all pages of results using pagination.                                               | false   |
| Limit                           | The maximum number of items that will be returned by the search.                                        |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Contacts

Retrieve a list of all contacts

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                           |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                        |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                | false   |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | When true, fetches all pages of results using pagination.                                               | false   |
| Limit                           | The maximum number of items that will be returned by the search.                                        |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Custom Objects

Retrieve all custom objects

| Input                           | Comments                                                                         | Default |
| ------------------------------- | -------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                    |         |
| Timeout                         | The maximum time a client will await a request                                   |         |
| Return Archived Results         | When true, returns only results that have been archived.                         | false   |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response. |         |

### List Deals

Retrieve a list of all deals

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                           |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                | false   |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                        |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | When true, fetches all pages of results using pagination.                                               | false   |
| Limit                           | The maximum number of items that will be returned by the search.                                        |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Engagements

List engagement objects from HubSpot CRM, including communications, emails, calls, meetings, notes, postal mail, and tasks.

| Input                | Comments                                                                                                                         | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The connection to use for authenticating requests to HubSpot.                                                                    |         |
| Engagement Object    | Select an engagement object.                                                                                                     |         |
| Properties To Return | Properties to be returned in the response. If the specified property is not present on the requested object, it will be ignored. |         |
| Timeout              | The maximum time a client will await a request                                                                                   |         |

### List Line Items

Retrieve a list of all line items

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                           |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                | false   |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                        |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | When true, fetches all pages of results using pagination.                                               | false   |
| Limit                           | The maximum number of items that will be returned by the search.                                        |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Products

Retrieve a list of all products

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                           |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                        |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                | false   |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | When true, fetches all pages of results using pagination.                                               | false   |
| Limit                           | The maximum number of items that will be returned by the search.                                        |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Properties

Retrieve a list of all configured object properties.

| Input       | Comments                                                      | Default |
| ----------- | ------------------------------------------------------------- | ------- |
| Connection  | The connection to use for authenticating requests to HubSpot. |         |
| Object Type | The type of object.                                           |         |
| Timeout     | The maximum time a client will await a request                |         |

### List Webhooks

List all webhooks for a server

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
| Timeout    | The maximum time a client will await a request                |         |

### Raw Request

Send raw HTTP request to HubSpot

| Input                   | Comments                                                                                                                                                                                                                                   | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                              |         |
| URL                     | Input the path only (/crm/v3/objects/deals). The base URL is already included (`https://api.hubapi.com`). For example, to connect to `https://api.hubapi.com/crm/v3/objects/deals`, only `/crm/v3/objects/deals` is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                    |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                  |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                       |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                           |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                     |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                        |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                   | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                        |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                        | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                           | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                        | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                              | false   |

### Read Association

Get the Ids of the objects associated with those specified in the step

| Input            | Comments                                                                                                                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| From Object Type | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined. |         |
| To Object Type   | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined.   |         |
| To Id            | The unique identifier of the second object                                                                                                                                                                    |         |
| Timeout          | The maximum time a client will await a request                                                                                                                                                                |         |
| Connection       | The connection to use for authenticating requests to HubSpot.                                                                                                                                                 |         |

### Search

Use the search endpoints to filter, sort, and search objects, records, and engagements across your CRM.

| Input             | Comments                                                                                                                                                                                                                                                | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                           |         |
| Search Endpoint   | The endpoint to search for objects or engagements. For Custom objects don't forget to fill the Object Type input.                                                                                                                                       |         |
| Search Properties | Include properties such as filters and sorts, or specify the properties to be returned. If empty, only the default properties will be returned. For more information, see [HubSpot CRM Search API](https://developers.hubspot.com/docs/api/crm/search). |         |
| Object Type       | The type of custom object to search for. Required for the Custom objects search endpoint.                                                                                                                                                               |         |
| Search Limit      | The number of records to return. The maximum value is 200.                                                                                                                                                                                              | 10      |
| Fetch All         | Turn this ON to get more than 200 results. Note that this can be a large amount of data.                                                                                                                                                                | false   |
| Timeout           | The maximum time a client will await a request                                                                                                                                                                                                          |         |

### Search Deals

Returns a list of deals that match the given properties

| Input         | Comments                                                                                                        | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Property Name | The property to search on. Ensure the spelling and capitalization are correct for the property you want to use. |         |
| Value         | The value corresponding to the given property name.                                                             |         |
| Operator      | The operator used to search on.                                                                                 |         |
| Limit         | The maximum number of items that will be returned by the search.                                                |         |
| Start After   | Specify the pagination token that's returned by a previous request to retrieve the next page of results         |         |
| Timeout       | The maximum time a client will await a request                                                                  |         |
| Connection    | The connection to use for authenticating requests to HubSpot.                                                   |         |

### Update Batch Contacts

Update a batch of contacts

| Input          | Comments                                                                                                                                | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                                           |         |
| Batch Contacts | An array of contact objects to update. See [HubSpot Contacts API](https://developers.hubspot.com/docs/api/crm/contacts) for properties. |         |
| Timeout        | The maximum time a client will await a request                                                                                          |         |

### Update Batch Engagement

Updates a batch of selected engagements.

| Input             | Comments                                                                                                                                                                                                                                        | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                   |         |
| Engagement Object | Select an engagement object.                                                                                                                                                                                                                    |         |
| Batch Engagements | An array of engagement objects to update. Each engagement object must contain the required properties for the specified engagement type. See [HubSpot Engagements API](https://developers.hubspot.com/docs/api/crm/tasks) for more information. |         |
| Timeout           | The maximum time a client will await a request                                                                                                                                                                                                  |         |

### Update Company

Update the information and metadata of an existing company

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Company Id     | The unique identifier of the company.                                                                         |         |
| Company Name   | The name of the company                                                                                       |         |
| Industry       | The industry of the company                                                                                   |         |
| Description    | The description of the object.                                                                                |         |
| Phone          | The phone number of the company.                                                                              |         |
| Domain         | The domain of the company                                                                                     |         |
| City           | The city of the company                                                                                       |         |
| State          | The state of the company                                                                                      |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                              |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Timeout        | The maximum time a client will await a request                                                                |         |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                 |         |

### Update Contact

Update the information and metadata of an existing contact

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Contact Id     | The unique identifier of the contact.                                                                         |         |
| First Name     | The first name of the contact                                                                                 |         |
| Last Name      | The last name of the contact                                                                                  |         |
| Company        | The company of the contact                                                                                    |         |
| Email          | The email of the contact                                                                                      |         |
| Phone          | The phone number of the contact                                                                               |         |
| Website        | The website of the contact                                                                                    |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                              |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Timeout        | The maximum time a client will await a request                                                                |         |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                 |         |

### Update Custom Object

Updates an object's schema

| Input                                                  | Comments                                                                                                      | Default                 |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection                                             | The connection to use for authenticating requests to HubSpot.                                                 |                         |
| Fully qualified name or object type ID of your schema. | The type of object.                                                                                           |                         |
| Singular Label                                         | The word for one object. (There's no way to change this later.)                                               |                         |
| Plural Label                                           | The word for multiple objects. (There's no way to change this later.)                                         |                         |
| Required Properties                                    | The names of properties that should be required when creating an object of this type.                         | <code>["000xxx"]</code> |
| Searchable Properties                                  | Names of properties that will be indexed for this object type in by HubSpot's product search.                 | <code>["000xxx"]</code> |
| Timeout                                                | The maximum time a client will await a request                                                                |                         |
| Values                                                 | The names of the fields and their values to use when creating/updating a record.                              |                         |
| Dynamic Fields                                         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |                         |

### Update Deal

Update the information or metadata of an existing deal

| Input          | Comments                                                                                                                                                                  | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Deal Id        | The unique identifier of the deal.                                                                                                                                        |         |
| Amount         | The amount value for the deal.                                                                                                                                            |         |
| Close Date     | The date when the sale will close.                                                                                                                                        |         |
| Deal Name      | The name of the deal.                                                                                                                                                     |         |
| Owner Id       | The owner ID of the resource.                                                                                                                                             |         |
| Pipeline       | The pipeline to interact with.                                                                                                                                            |         |
| Deal Stage     | The stage of the deal. Deal stages allow you to categorize and track the progress of the deals.                                                                           |         |
| Priority       | The priority of the deal.                                                                                                                                                 |         |
| Deal Type      | The type of deal. By default, categorize your deal as either New Business or Existing Business. The picklist of values for this property is configurable through HubSpot. |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                                                                                          |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                             |         |
| Timeout        | The maximum time a client will await a request                                                                                                                            |         |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                                                                             |         |

### Update Engagement

Update a communication, email, call, meeting, note, postal mail or task engagement in HubSpot CRM.

| Input             | Comments                                                                                                                                                                                                         | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot.                                                                                                                                                    |         |
| Engagement Object | Select an engagement object.                                                                                                                                                                                     |         |
| Engagement Id     | The unique identifier of the engagement. A taskId, meetingId, etc.                                                                                                                                               |         |
| Properties        | A properties object to update, attributes depend on the engagement type. For possible properties for each engagement type refer to [HubSpot Engagements API](https://developers.hubspot.com/docs/api/crm/tasks). |         |
| Id Property       | The name of a property whose values are unique for this object type.                                                                                                                                             |         |
| Timeout           | The maximum time a client will await a request                                                                                                                                                                   |         |

### Update Line Item

Update an the information and metadata of an existing line item

| Input                          | Comments                                                                                                                              | Default |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Line Item Id                   | The unique identifier of the line item.                                                                                               |         |
| Name                           | The name of the line item.                                                                                                            |         |
| Product Id                     | The unique identifier of the product.                                                                                                 |         |
| Recurring Billing Frequency    | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Recurring Billing Monthly Rate | The quantity of product in the line item.                                                                                             |         |
| Quantity                       | The quantity of product in the line item.                                                                                             |         |
| Price                          | The price of the product.                                                                                                             |         |
| Values                         | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields                 | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                        | The maximum time a client will await a request                                                                                        |         |
| Connection                     | The connection to use for authenticating requests to HubSpot.                                                                         |         |

### Update Product

Update the information and metadata of an existing product

| Input                       | Comments                                                                                                                              | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Id                  | The unique identifier of the product.                                                                                                 |         |
| Product Name                | The name of the product.                                                                                                              |         |
| Description                 | The description of the object.                                                                                                        |         |
| Product SKU                 | The SKU of the product.                                                                                                               |         |
| Price                       | The price of the product.                                                                                                             |         |
| Recurring Billing Frequency | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Unit Cost                   | The unit cost of the product.                                                                                                         |         |
| Values                      | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields              | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                     | The maximum time a client will await a request                                                                                        |         |
| Connection                  | The connection to use for authenticating requests to HubSpot.                                                                         |         |

### Validate Connection

Returns a boolean value that specifies whether the provided Connection is valid

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
