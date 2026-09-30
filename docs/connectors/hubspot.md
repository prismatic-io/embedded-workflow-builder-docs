---
title: HubSpot Connector
sidebar_label: HubSpot
description: Manage records and associations in the HubSpot CRM platform
---

![HubSpot](./assets/hubspot.png#connector-icon)
[HubSpot](https://www.hubspot.com/) is a Customer Relationship Management software for inbound marketing, sales, and customer service.
Manage contacts, companies, deals, products, engagements, and custom objects in HubSpot.

## API Documentation

This component was built using the [HubSpot API Documentation](https://developers.hubspot.com/docs/api-reference/latest/overview) currently utilizing v3

## Connections

### OAuth 2.0 {#oauth2}

Authenticate requests to HubSpot using OAuth 2.0.

To connect to HubSpot using OAuth 2.0, create an app in the HubSpot developer platform using the HubSpot CLI. An existing legacy app created through the web interface can also be used, though legacy public apps can no longer be created.

Refer to the [HubSpot app creation guide](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app) and [quick reference guide](https://developers.hubspot.com/docs/getting-started/quickstart) for detailed information.

### Creating an App via the CLI

The CLI-based approach is recommended for new HubSpot OAuth integrations as it provides access to the latest features and platform improvements.

#### Prerequisites

- A [HubSpot developer account](https://developers.hubspot.com/) is required
- Node.js v20 or higher and npm installed (for CLI-based app creation)
- HubSpot CLI version 7.6.0 or higher (installing the latest version is recommended)

#### Setup Steps

1. Install the HubSpot CLI:

   ```bash
   npm install -g @hubspot/cli
   ```

2. Authenticate the CLI with a HubSpot developer account:

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
   - Optionally select app features (**Card**, **App Function**, **Settings**, **Webhooks**, **Custom Workflow Action**)

4. Configure the app by editing the generated `app-hsmeta.json` file (located at `src/app/app-hsmeta.json` within the project directory):
   - Update the **name** and **description** fields
   - In the **auth** section, add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` to the **redirectUrls** array
   - Update the **requiredScopes** array with the OAuth permissions the integration needs. Permissions a user may decline belong in **optionalScopes**, and those required only for particular features belong in **conditionallyRequiredScopes**

5. Upload the app project to HubSpot:

   ```bash
   hs project upload
   ```

   :::note[Directory Error]
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
  - Refer to the [HubSpot scopes reference](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/scopes) for scope details

<details>
<summary>Recommended Scopes</summary>

The following scopes provide comprehensive access to HubSpot CRM functionality that this component supports:

| Category               | Scope                          | Description                                     |
| ---------------------- | ------------------------------ | ----------------------------------------------- |
| **Essential**          | `oauth`                        | Required for all OAuth apps (cannot be removed) |
| **Essential**          | `crm.objects.owners.read`      | Read owner information                          |
| **CRM Objects**        | `crm.objects.contacts.read`    | Read contacts                                   |
| **CRM Objects**        | `crm.objects.contacts.write`   | Create/update contacts                          |
| **CRM Objects**        | `crm.objects.companies.read`   | Read companies                                  |
| **CRM Objects**        | `crm.objects.companies.write`  | Create/update companies                         |
| **CRM Objects**        | `crm.objects.deals.read`       | Read deals                                      |
| **CRM Objects**        | `crm.objects.deals.write`      | Create/update deals                             |
| **CRM Objects**        | `crm.objects.custom.read`      | Read custom objects                             |
| **CRM Objects**        | `crm.objects.custom.write`     | Create/update custom objects                    |
| **Additional Objects** | `crm.objects.line_items.read`  | Read line items                                 |
| **Additional Objects** | `crm.objects.line_items.write` | Create/update line items                        |
| **Additional Objects** | `crm.objects.quotes.read`      | Read quotes                                     |
| **Additional Objects** | `crm.objects.quotes.write`     | Create/update quotes                            |
| **Additional Objects** | `tickets`                      | Ticket management                               |
| **Schemas**            | `crm.schemas.contacts.read`    | Contact property definitions                    |
| **Schemas**            | `crm.schemas.companies.read`   | Company property definitions                    |
| **Schemas**            | `crm.schemas.deals.read`       | Deal property definitions                       |

**Example minimal scope configuration:**

```
crm.objects.contacts.read crm.objects.contacts.write crm.objects.deals.read crm.objects.deals.write crm.objects.owners.read
```

For a complete list of available scopes, refer to the [HubSpot OAuth scopes documentation](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/scopes).

</details>

### Using an Existing Legacy App

:::warning[Legacy App Creation Has Ended]
As of **June 23, 2026**, legacy public apps can no longer be created. HubSpot disabled creation for developer accounts created on or after **May 26, 2026** first, then for all remaining accounts on **June 23, 2026**. See the [legacy public app creation sunset](https://developers.hubspot.com/changelog/legacy-public-app-creation-sunset) announcement.

Existing legacy public apps continue to be supported and can still be used with this connection. New apps must be created with the CLI-based approach described above.
:::

An app created before HubSpot's `2025.2` platform release is a legacy app. To use one with this connection:

1. In the HubSpot developer account, navigate to **Apps**, then click the name of the app
2. Navigate to the app's **Auth** tab
3. Under **Redirect URLs**, add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Configure the required scopes for the integration in the **Scopes** section
5. Copy the **Client ID**, **Client Secret**, and **App ID** from the Auth page

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the app's Auth page
- Configure scopes as needed (see Recommended Scopes above)

### Webhook Support

The **App ID** and **Developer API Key** fields are optional and are used only by the webhook actions and the **Event Type Subscription** trigger. Leave them empty for an integration that does not manage webhook subscriptions.

- **App ID** appears below the app name in the developer account's _Apps_ dashboard, and on the app's **Auth** tab
- **Developer API Key** is available in the developer overview of the HubSpot developer account

:::warning[Webhook subscription management requires a legacy public app]
The webhook actions and the **Event Type Subscription** trigger call HubSpot's [webhooks v3 subscription API](https://developers.hubspot.com/docs/api-reference/legacy/webhooks/guide), which HubSpot supports **only for legacy public apps**. Since legacy public apps can no longer be created, an app created with the CLI cannot use them.

A CLI-created app configures webhooks [declaratively in the project](https://developers.hubspot.com/docs/apps/developer-platform/add-features/configure-webhooks), or through the [webhooks journal and management APIs](https://developers.hubspot.com/docs/api-reference/latest/webhooks-journal/guide), which authenticate with a client credentials token rather than a developer API key. This component does not use either mechanism.

The **Webhook** trigger is unaffected, because it only receives and verifies incoming requests rather than creating subscriptions. It pairs with the **Webhook Authentication** connection and works with any app that can deliver webhooks to a URL. The **New and Updated Records** and **New and Updated Custom Records** polling triggers are also unaffected and need no app-level webhook configuration.
:::

### App Distribution

HubSpot OAuth apps declare a distribution type that determines who can install the integration and whether a formal HubSpot review is required. Choosing the right one before building the app avoids reworking its configuration and, for a marketplace app, a second review.

The distribution type selected during `hs project create` determines who can install the app and whether a review process applies.

**Private or specific accounts** (no review required):
The app is accessible only to HubSpot accounts explicitly added. Users from other HubSpot accounts cannot install it. To add accounts, navigate to the app's **Distribution** settings in the developer portal and enter each account's hub ID. This is the appropriate option for single-customer integrations or internal tools.

**HubSpot App Marketplace** (HubSpot review required):
The app is publicly listed in the [HubSpot App Marketplace](https://ecosystem.hubspot.com/marketplace/apps) and any HubSpot customer can install it. HubSpot reviews marketplace submissions for quality, security, and functionality before listing.

For integrations deployed to multiple customers, each with their own HubSpot account, the marketplace path is the scalable option. For single-organization deployments, the private/specific accounts path avoids the review process entirely.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                                                                                                                                          | Default                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Authorize URL     | The OAuth 2.0 Authorization URL for HubSpot. Optional scopes can be appended to the URL.                                                                          | https://app.hubspot.com/oauth/authorize |
| Scopes            | OAuth permission scopes. See [HubSpot scopes](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/scopes) for available scopes. |                                         |
| Client ID         | The Client ID from the HubSpot app. Found in HubSpot Developer Account > Apps > Auth.                                                                             |                                         |
| Client Secret     | The Client Secret from the HubSpot app. Keep this value secure.                                                                                                   |                                         |
| App ID            | The App ID from the HubSpot Developer Console. Required for Webhooks.                                                                                             |                                         |
| Developer API Key | The Developer API Key from the HubSpot Developer Console. Required for Webhooks.                                                                                  |                                         |

### Private App Access Token or Service Key {#privateappaccesstoken}

Authenticate requests to HubSpot using a private app access token or an account service key.

This connection authenticates with either a **private app access token** or an **account service key**. Both are entered in the same field and are sent as bearer tokens, so either credential works for every action in this component.

[Service keys](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/account-service-keys) are HubSpot's recommended credential for new system-to-system integrations. Private app access tokens remain supported for integrations already built against them.

:::note[Webhook Triggers Require OAuth 2.0]
Neither credential can configure webhook subscriptions over the API. The **Event Type Subscription** trigger needs the App ID and Developer API Key carried by the OAuth 2.0 connection, and will fail at runtime if given this connection instead.
:::

Neither credential expires. A private app access token can be revoked at any time from the HubSpot account settings, and a service key can be rotated or deleted from its details page.

:::warning[Legacy Private App Creation Is Ending]
HubSpot is retiring the ability to create new legacy private apps. Which deadline applies depends on when the HubSpot account was created:

- **Accounts created before September 28, 2026** can still create a legacy private app, but only until **October 26, 2026**.
- **Accounts created on or after September 28, 2026** cannot create one at all.

Existing legacy private apps and their access tokens keep working. See the [legacy private app creation sunset](https://developers.hubspot.com/changelog/legacy-private-app-creation-sunset) announcement.

Use a service key for new integrations, following the steps below.
:::

#### Prerequisites

- Access to a [HubSpot account](https://app.hubspot.com)
- A [super admin](https://knowledge.hubspot.com/user-management/hubspot-user-permissions-guide) user, which HubSpot requires for access to private apps. A service key can also be created by a user with the **Developer tools access** permission.

#### Setup Steps

Follow whichever set of steps matches the credential being used.

##### Create a Service Key

1. Navigate to [HubSpot](https://app.hubspot.com) and log in
2. Navigate to **Development**, then click **Keys**, then **Service keys** in the left sidebar menu
3. In the top right, click **Create service key**
4. Enter a **name** for the key
5. Click **Add new scope**, select each scope the integration requires, then click **Update**
6. Click **Create** in the top right, then confirm
7. Click the **name** of the new service key, click **Show**, then click **Copy**

##### Create a Legacy Private App Access Token

To generate a private app access token:

1. Navigate to [HubSpot](https://app.hubspot.com) and log in
2. Navigate to **Development**, then click **Legacy apps** in the left sidebar menu
3. In the top right, click **Create legacy app**, then select **Private** in the dialog box
4. On the _Basic Info_ tab, enter a **name** for the app
5. Click the **Scopes** tab, click **Add new scope**, then select each scope the integration requires
6. Click **Create app** in the top right, then click **Continue creating**
7. On the app details page, click the **Auth** tab, click **Show token**, then click **Copy**

#### Configure the Connection

Enter the copied service key or private app access token into **Access Token or Service Key**.

| Input                       | Comments                                                                                                                                                                                                                                                                                              | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Access Token or Service Key | A private app access token or an account service key. Service keys are HubSpot's recommended credential for new system-to-system integrations. Neither credential can configure webhook subscriptions over the API, so the Event Type Subscription trigger requires the OAuth 2.0 connection instead. |         |

### Webhook Authentication {#hubspotoauthtrigger}

Authenticate HubSpot webhooks using Client Secret for signature verification only.

The Webhook Authentication connection is used specifically for verifying HubSpot webhook signatures to ensure webhook requests are legitimate.

This connection is only used for webhook triggers and does not grant API access. It solely validates that incoming webhooks are from HubSpot by verifying the request signature.

#### Prerequisites

- Access to a [HubSpot account](https://app.hubspot.com)
- A [super admin](https://knowledge.hubspot.com/user-management/hubspot-user-permissions-guide) user, which HubSpot requires for access to private apps
- A HubSpot app configured to deliver webhooks

Both private apps and public apps have a client secret, and HubSpot signs each app's webhook requests with that app's own secret. Use the secret belonging to whichever app delivers the webhooks.

#### Setup Steps

To copy the client secret from a legacy private app:

1. Navigate to [HubSpot](https://app.hubspot.com) and log in
2. Navigate to **Development**, then click **Legacy apps** in the left sidebar menu
3. Click the name of the app, or click **Create legacy app** in the top right and select **Private** to create one
4. Click the **Auth** tab
5. Next to _Client secret_, click **Show secret**, then copy the value

For a legacy public app, open the app from the **Apps** dashboard in the HubSpot developer account and copy the **Client Secret** from its **Auth** tab.

#### Configure the Connection

- Enter the **Client Secret** from the HubSpot app into the connection configuration
- The client secret is used to verify webhook signatures
- Ensure the trigger is configured to use the Webhook Authentication connection

#### Webhook Subscriptions

After configuring the connection, webhook subscriptions must be set up. In a legacy private app, subscriptions are managed in the app settings and [cannot be edited through an API](https://developers.hubspot.com/docs/apps/legacy-apps/private-apps/create-and-edit-webhook-subscriptions-in-private-apps):

1. On the app details page, click the **Webhooks** tab
2. Under _Target URL_, enter the URL that HubSpot will send webhook events to (found in the **Test Configuration > Trigger Payload** section of the integration)
3. Click **Create subscription**
4. In the right panel, select the **object types** to subscribe to, then select the **events** for those objects (for example created, merged, or deleted)
5. If **Property changed** is selected, also select the properties to watch for changes
6. Click **Subscribe**

Selecting an object type that needs a scope the app has not authorized prompts for that scope to be added.

| Input         | Comments                                                                   | Default |
| ------------- | -------------------------------------------------------------------------- | ------- |
| Client Secret | The Client Secret from the HubSpot app, used to verify webhook signatures. |         |

## Triggers

### Event Type Subscription {#eventtypesubscription}

Receive CRM event notifications from HubSpot. Automatically creates and manages a webhook subscription for selected event types when the instance is deployed, and removes the subscription when the instance is deleted.

| Input                      | Comments                                                                                                                                                                                                        | Default |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The connection to use for authenticating requests to HubSpot.                                                                                                                                                   |         |
| Event Types                | Events to listen for. Make sure to have the right permissions.                                                                                                                                                  |         |
| Property Change Properties | Add one key-value pair per property change event type. The key is the event type (e.g. contact.propertyChange) and the value is a comma-separated list of the property names to monitor (e.g. email,firstname). |         |
| Overwrite Webhook Settings | When true, overwrites existing webhook settings. HubSpot only permits one Target URL per App ID.                                                                                                                | false   |

### New and Updated Custom Records {#pollchangescustomobjectstrigger}

Retrieves existing and ongoing records for a specified HubSpot custom object type. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record created on or after this date once, ignoring the visibility toggles.                                                                                                                                                                                                      |         |
| Show New Records     | When true, includes new records in the results.                                                                                                                                                                                                                                                                                                                                                                                                                               | true    |
| Show Updated Records | When true, includes updated records in the results.                                                                                                                                                                                                                                                                                                                                                                                                                           | true    |
| Connection           | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Object Type          | The type of custom object to search for.                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| Search Properties    | Include properties such as filters and sorts, or specify the properties to be returned. If empty, only the default properties will be returned. On the polling triggers, `sorts` is ignored (they sort by the object's last-modified property ascending so polling can resume) and `filters`/`filterGroups` are combined with the recurrence's date window using AND. For more information, see [HubSpot CRM Search API](https://developers.hubspot.com/docs/api/crm/search). |         |

### New and Updated Records {#pollchangestrigger}

Retrieves existing and ongoing records for a specified HubSpot object type. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record created on or after this date once, ignoring the visibility toggles.                                                                                                                                                                                                      |         |
| Show New Records     | When true, includes new records in the results.                                                                                                                                                                                                                                                                                                                                                                                                                               | true    |
| Show Updated Records | When true, includes updated records in the results.                                                                                                                                                                                                                                                                                                                                                                                                                           | true    |
| Connection           | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Search Endpoint      | The endpoint to search for objects or engagements. For Custom objects don't forget to fill the Object Type input.                                                                                                                                                                                                                                                                                                                                                             |         |
| Search Properties    | Include properties such as filters and sorts, or specify the properties to be returned. If empty, only the default properties will be returned. On the polling triggers, `sorts` is ignored (they sort by the object's last-modified property ascending so polling can resume) and `filters`/`filterGroups` are combined with the recurrence's date window using AND. For more information, see [HubSpot CRM Search API](https://developers.hubspot.com/docs/api/crm/search). |         |

### Webhook {#webhook}

Receive and validate webhook requests from HubSpot for manually configured webhook subscriptions.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

## Actions

### Archive Association {#archiveassociations}

Remove the associations between two provided objects.

| Input               | Comments                                                                                                                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| From Object Type    | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object defined in the account. |         |
| To Object Type      | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object defined in the account.   |         |
| From ID             | The unique identifier of the first object                                                                                                                                                                           |         |
| To ID               | The unique identifier of the second object                                                                                                                                                                          |         |
| Type Of Association | Provide a value for the type of association to perform. You can get the set of available values for this input by making a step using the "List Association Types"                                                  |         |
| Timeout             | The maximum time a client will await a request                                                                                                                                                                      |         |
| Connection          | The connection to use for authenticating requests to HubSpot.                                                                                                                                                       |         |

### Archive Batch Contacts {#archivebatchcontacts}

Archive a batch of contacts by ID.

| Input       | Comments                                                      | Default |
| ----------- | ------------------------------------------------------------- | ------- |
| Contact Ids | A list of contact IDs.                                        |         |
| Timeout     | The maximum time a client will await a request                |         |
| Connection  | The connection to use for authenticating requests to HubSpot. |         |

### Archive Batch Engagement {#archivebatchengagement}

Archives a batch of selected engagements by their IDs.

| Input             | Comments                                                      | Default |
| ----------------- | ------------------------------------------------------------- | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot. |         |
| Engagement Object | Select an engagement object.                                  |         |
| Engagement Ids    | A list of engagement IDs.                                     |         |
| Timeout           | The maximum time a client will await a request                |         |

### Cancel Import {#cancelimport}

Cancels an active import.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
| Import ID  | The unique identifier of the import.                          |         |
| Timeout    | The maximum time a client will await a request                |         |

### Create Association {#createassociations}

Create an association between the objects identified in the step.

| Input               | Comments                                                                                                                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| From Object Type    | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object defined in the account. |         |
| To Object Type      | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object defined in the account.   |         |
| From ID             | The unique identifier of the first object                                                                                                                                                                           |         |
| To ID               | The unique identifier of the second object                                                                                                                                                                          |         |
| Type Of Association | Provide a value for the type of association to perform. You can get the set of available values for this input by making a step using the "List Association Types"                                                  |         |
| Timeout             | The maximum time a client will await a request                                                                                                                                                                      |         |
| Connection          | The connection to use for authenticating requests to HubSpot.                                                                                                                                                       |         |

### Create Batch Contacts {#createbatchcontacts}

Create a batch of contacts.

| Input          | Comments                                                                                                                                | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                                           |         |
| Batch Contacts | An array of contact objects to create. See [HubSpot Contacts API](https://developers.hubspot.com/docs/api/crm/contacts) for properties. |         |
| Timeout        | The maximum time a client will await a request                                                                                          |         |

### Create Batch Engagement {#createbatchengagement}

Creates a batch of selected engagements.

| Input             | Comments                                                      | Default |
| ----------------- | ------------------------------------------------------------- | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot. |         |
| Engagement Object | Select an engagement object.                                  |         |
| Batch Engagements | An array of engagements.                                      |         |
| Timeout           | The maximum time a client will await a request                |         |

### Create Company {#createcompany}

Create a new company.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Company Name   | The display name for the company record.                                                                      |         |
| Industry       | The company's industry classification, such as Software or Manufacturing.                                     |         |
| Phone          | The primary contact phone number for the company.                                                             |         |
| Description    | An optional text description providing additional detail about the record.                                    |         |
| Domain         | The company's web domain, used for deduplication and enrichment (e.g. example.com).                           |         |
| City           | The city where the company is headquartered.                                                                  |         |
| State          | The state or region where the company is located.                                                             |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                              |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Timeout        | The maximum time a client will await a request                                                                |         |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                 |         |

### Create Contact {#createcontact}

Create a new contact.

| Input               | Comments                                                                                                                                           | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| First Name          | The contact's given name, mapped to the firstname property.                                                                                        |         |
| Last Name           | The contact's family name, mapped to the lastname property.                                                                                        |         |
| Company             | The name of the company the contact is associated with.                                                                                            |         |
| Contact Information | Optional contact channel fields: email, phone, and website.                                                                                        |         |
| Phone               | The primary phone number for the contact.                                                                                                          |         |
| Email               | The email of the contact. Getting contacts by email performs a search function and will return a successful output even when no results are found. |         |
| Website             | The contact's website, such as a company or personal homepage.                                                                                     |         |
| Values              | The names of the fields and their values to use when creating/updating a record.                                                                   |         |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                      |         |
| Timeout             | The maximum time a client will await a request                                                                                                     |         |
| Connection          | The connection to use for authenticating requests to HubSpot.                                                                                      |         |

### Create Custom Object {#createcustomobject}

Creates new custom object schema.

| Input                        | Comments                                                                                                                                 | Default                 |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection                   | The connection to use for authenticating requests to HubSpot.                                                                            |                         |
| Name                         | A unique name for this object. For internal use only.                                                                                    |                         |
| Singular Label               | The word for one object. (There's no way to change this later.)                                                                          |                         |
| Properties                   | Properties defined for this object type.                                                                                                 |                         |
| Plural Label                 | The word for multiple objects. (There's no way to change this later.)                                                                    |                         |
| Required Properties          | The names of properties that should be required when creating an object of this type.                                                    | <code>["000xxx"]</code> |
| Searchable Properties        | Names of properties that will be indexed for this object type in by HubSpot's product search.                                            | <code>["000xxx"]</code> |
| Secondary Display Properties | The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type. | <code>["000xxx"]</code> |
| Associated Objects           | Associations defined for this object type.                                                                                               | <code>["000xxx"]</code> |
| Timeout                      | The maximum time a client will await a request                                                                                           |                         |
| Values                       | The names of the fields and their values to use when creating/updating a record.                                                         |                         |
| Dynamic Fields               | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                            |                         |

### Create Deal {#createdeal}

Create a new deal.

| Input          | Comments                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Amount         | The amount value for the deal.                                                                                                                                             |         |
| Close Date     | The date when the sale will close.                                                                                                                                         |         |
| Deal Name      | The display name for the deal, visible in the deals pipeline.                                                                                                              |         |
| Owner ID       | The HubSpot user ID of the record owner, used to assign responsibility.                                                                                                    |         |
| Pipeline       | The pipeline to interact with.                                                                                                                                             |         |
| Deal Stage     | The stage of the deal. Deal stages categorize deals and track their progress.                                                                                              |         |
| Priority       | The priority level assigned to the deal: low, medium, or high.                                                                                                             |         |
| Deal Type      | The type of deal. By default, a deal is categorized as either New Business or Existing Business. The picklist of values for this property is configurable through HubSpot. |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                                                                                           |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                              |         |
| Timeout        | The maximum time a client will await a request                                                                                                                             |         |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                                                                              |         |

### Create Engagement {#createengagement}

Create a communication, email, call, meeting, note, postal mail or task engagement in HubSpot CRM.

| Input             | Comments                                                                                                                                                                                               | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot.                                                                                                                                          |         |
| Engagement Object | Select an engagement object.                                                                                                                                                                           |         |
| Associations      | To create and associate a task with existing records.                                                                                                                                                  |         |
| Properties        | A properties object, attributes depend on the engagement type. For possible properties for each engagement type refer to [HubSpot Engagements API](https://developers.hubspot.com/docs/api/crm/tasks). |         |
| Timeout           | The maximum time a client will await a request                                                                                                                                                         |         |

### Create Line Item {#createlineitem}

Create a new line item.

| Input                          | Comments                                                                                                                              | Default |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Name                           | A descriptive name for the line item, displayed on quotes and invoices.                                                               |         |
| Product ID                     | The unique identifier of the product.                                                                                                 |         |
| Recurring Billing Frequency    | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Recurring Billing Monthly Rate | How often the line item is billed: monthly, quarterly, semi-annually, annually, or every two or three years.                          |         |
| Quantity                       | The quantity of product in the line item.                                                                                             |         |
| Price                          | The unit price of the product, in the account's default currency.                                                                     |         |
| Values                         | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields                 | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                        | The maximum time a client will await a request                                                                                        |         |
| Connection                     | The connection to use for authenticating requests to HubSpot.                                                                         |         |

### Create Product {#createproduct}

Create a new product.

| Input                       | Comments                                                                                                                              | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Name                | The display name for the product in the product library.                                                                              |         |
| Description                 | An optional text description providing additional detail about the record.                                                            |         |
| Product SKU                 | The stock-keeping unit code used to track the product in inventory systems.                                                           |         |
| Price                       | The unit price of the product, in the account's default currency.                                                                     |         |
| Recurring Billing Frequency | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Unit Cost                   | The cost per unit used to calculate margin and profitability.                                                                         |         |
| Values                      | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields              | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                     | The maximum time a client will await a request                                                                                        |         |
| Connection                  | The connection to use for authenticating requests to HubSpot.                                                                         |         |

### Create Webhook {#createwebhook}

Create a webhook in HubSpot.

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The connection to use for authenticating requests to HubSpot.                                            |         |
| Event Type    | Type of event to listen for. Can be one of create, delete, deletedForPrivacy, or propertyChange.         |         |
| Property Name | The internal name of the property to monitor for changes. Only applies when eventType is propertyChange. |         |
| Active        | When true, the subscription is active. When false, the subscription is paused.                           | false   |
| Timeout       | The maximum time a client will await a request                                                           |         |

### Delete All Instanced Webhooks {#deleteallwebhooks}

Delete all webhooks created by this instance in HubSpot.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
| Timeout    | The maximum time a client will await a request                |         |

### Delete Company {#deletecompany}

Delete an existing company by Id.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Company ID | The unique identifier of the company.                         |         |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

### Delete Contact {#deletecontact}

Delete a contact by Id.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Contact ID | The unique identifier of the contact.                         |         |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

### Delete Custom Object {#deletecustomobject}

Removes custom object schema.

| Input                   | Comments                                                      | Default |
| ----------------------- | ------------------------------------------------------------- | ------- |
| Connection              | The connection to use for authenticating requests to HubSpot. |         |
| Object Type             | The type of object.                                           |         |
| Timeout                 | The maximum time a client will await a request                |         |
| Return Archived Results | When true, returns only results that have been archived.      | false   |

### Delete Deal {#deletedeal}

Delete a deal by its Id.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Deal ID    | The unique identifier of the deal.                            |         |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

### Delete Engagement {#deleteengagement}

Deletes an engagement by its ID.

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot.      |         |
| Engagement Object | Select an engagement object.                                       |         |
| Engagement ID     | The unique identifier of the engagement. A taskId, meetingId, etc. |         |
| Timeout           | The maximum time a client will await a request                     |         |

### Delete Line Item {#deletelineitem}

Delete an existing line item by Id.

| Input        | Comments                                                      | Default |
| ------------ | ------------------------------------------------------------- | ------- |
| Line Item ID | The unique identifier of the line item.                       |         |
| Timeout      | The maximum time a client will await a request                |         |
| Connection   | The connection to use for authenticating requests to HubSpot. |         |

### Delete Product {#deleteproduct}

Delete a product by Id.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Product ID | The unique identifier of the product.                         |         |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

### Delete Webhook {#deletewebhook}

Delete a webhook by ID in HubSpot.

| Input           | Comments                                                      | Default |
| --------------- | ------------------------------------------------------------- | ------- |
| Connection      | The connection to use for authenticating requests to HubSpot. |         |
| Subscription ID | The unique identifier of the webhook subscription.            |         |
| Timeout         | The maximum time a client will await a request                |         |

### Export CRM Data {#exportcrmdata}

Begins exporting CRM data for the portal as specified in the request body.

| Input                                                        | Comments                                                                                                                                                                                                                                                    | Default |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                                                   | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                               |         |
| Schema Type                                                  | The export schema to use: VIEW for filtered exports, or LIST for list-based exports.                                                                                                                                                                        | VIEW    |
| Format                                                       | The file format for the exported data: CSV, XLSX, or XLS.                                                                                                                                                                                                   | CSV     |
| Export Name                                                  | A descriptive name used to identify the export in the HubSpot UI.                                                                                                                                                                                           |         |
| Object Properties                                            | A list of the properties to include in the export.                                                                                                                                                                                                          |         |
| Object Type                                                  | The name or ID of the object you're exporting. For standard objects, you can use the object's name (e.g., CONTACT), but for custom objects, you must use the objectTypeId value, you can find this value in the response of the List Custom Objects action. |         |
| Language                                                     | The language code for header labels and system-generated text in the export.                                                                                                                                                                                |         |
| List Id (Only and required for PublicExportListRequest)      | The ILS List ID of the list to export.                                                                                                                                                                                                                      |         |
| Public CRM Search Request (Only for PublicExportViewRequest) | Indicates which data should be exported based on certain property values and search queries.                                                                                                                                                                |         |
| Associated Object Type                                       | The name or ID of an associated object to include in the export. When an associated object is included, the export contains the associated record IDs of that object and the records' primary display property value.                                       |         |
| Timeout                                                      | The maximum time a client will await a request                                                                                                                                                                                                              |         |

### Get Batch Contacts {#getbatchcontacts}

Read a batch of contacts by internal ID, or unique property values.

| Input                   | Comments                                                      | Default |
| ----------------------- | ------------------------------------------------------------- | ------- |
| Connection              | The connection to use for authenticating requests to HubSpot. |         |
| Properties With History | A list of properties to read by.                              |         |
| Property                | A list of properties to read by.                              |         |
| ID Property             | An ID property to search by                                   |         |
| Contact Ids             | A list of contact IDs.                                        |         |
| Return Archived Results | When true, returns only results that have been archived.      | false   |
| Timeout                 | The maximum time a client will await a request                |         |

### Get Company {#getcompany}

Retrieve the information or metadata of a company by Id, domain, or name.

| Input                           | Comments                                                                            | Default |
| ------------------------------- | ----------------------------------------------------------------------------------- | ------- |
| Company ID                      | The unique identifier of the company.                                               |         |
| Company Name                    | The display name for the company record.                                            |         |
| Domain                          | The company's web domain, used for deduplication and enrichment (e.g. example.com). |         |
| Additional Properties To Return | For each item, provide a property to return in the response.                        |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.           |         |
| Return Archived Results         | When true, returns only results that have been archived.                            | false   |
| Timeout                         | The maximum time a client will await a request                                      |         |
| Connection                      | The connection to use for authenticating requests to HubSpot.                       |         |

### Get Contact {#getcontact}

Get the information and metadata of a contact by Id or Email.

| Input                           | Comments                                                                                                                                           | Default |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Contact ID                      | The unique identifier of the contact.                                                                                                              |         |
| Email                           | The email of the contact. Getting contacts by email performs a search function and will return a successful output even when no results are found. |         |
| Additional Properties To Return | For each item, provide a property to return in the response.                                                                                       |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                                                                          |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                                                           | false   |
| Timeout                         | The maximum time a client will await a request                                                                                                     |         |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                                                                      |         |

### Get Current User {#getcurrentuser}

Return information about the current session's user.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |

### Get Custom Object {#getcustomobject}

Retrieves a specific custom object.

| Input       | Comments                                                      | Default |
| ----------- | ------------------------------------------------------------- | ------- |
| Connection  | The connection to use for authenticating requests to HubSpot. |         |
| Timeout     | The maximum time a client will await a request                |         |
| Object Type | The type of object.                                           |         |

### Get Deal {#getdealbyid}

Retrieve information and metadata about a deal by its Id or name.

| Input                           | Comments                                                                  | Default |
| ------------------------------- | ------------------------------------------------------------------------- | ------- |
| Deal ID                         | The unique identifier of the deal.                                        |         |
| Deal Name                       | The display name for the deal, visible in the deals pipeline.             |         |
| Additional Properties To Return | For each item, provide a property to return in the response.              |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for. |         |
| Return Archived Results         | When true, returns only results that have been archived.                  | false   |
| Timeout                         | The maximum time a client will await a request                            |         |
| Connection                      | The connection to use for authenticating requests to HubSpot.             |         |

### Get Engagement {#getengagement}

Get a communication, email, call, meeting, note, postal mail or task engagement object from HubSpot CRM.

| Input                           | Comments                                                                                                                                                    | Default |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                                                                               |         |
| Engagement Object               | Select an engagement object.                                                                                                                                |         |
| Engagement ID                   | The unique identifier of the engagement. A taskId, meetingId, etc.                                                                                          |         |
| Properties To Return            | Properties to be returned in the response. If the specified property is not present on the requested object, it will be ignored.                            |         |
| Property With History To Return | A property to be returned along with it's history of previous values. If the specified property is not present on the requested object, it will be ignored. |         |
| Associations                    | List of object types to retrieve associated IDs for. If the specified association do not exist, it will be ignored.                                         |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                                                                    | false   |
| ID Property                     | The name of a property whose values are unique for this object type.                                                                                        |         |
| Timeout                         | The maximum time a client will await a request                                                                                                              |         |

### Get Import {#getanimport}

Get a complete summary of an import record, including any updates.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
| Import ID  | The unique identifier of the import.                          |         |
| Timeout    | The maximum time a client will await a request                |         |

### Get Line Item {#getlineitem}

Retrieve the information and metadata of a line item by Id.

| Input                           | Comments                                                                  | Default |
| ------------------------------- | ------------------------------------------------------------------------- | ------- |
| Line Item ID                    | The unique identifier of the line item.                                   |         |
| Name                            | A descriptive name for the line item, displayed on quotes and invoices.   |         |
| Additional Properties To Return | For each item, provide a property to return in the response.              |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for. |         |
| Return Archived Results         | When true, returns only results that have been archived.                  | false   |
| Timeout                         | The maximum time a client will await a request                            |         |
| Connection                      | The connection to use for authenticating requests to HubSpot.             |         |

### Get Product {#getproduct}

Retrieve the information and metadata of a product by Id or name.

| Input                           | Comments                                                                  | Default |
| ------------------------------- | ------------------------------------------------------------------------- | ------- |
| Product ID                      | The unique identifier of the product.                                     |         |
| Product Name                    | The display name for the product in the product library.                  |         |
| Additional Properties To Return | For each item, provide a property to return in the response.              |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for. |         |
| Return Archived Results         | When true, returns only results that have been archived.                  | false   |
| Timeout                         | The maximum time a client will await a request                            |         |
| Connection                      | The connection to use for authenticating requests to HubSpot.             |         |

### Import CRM Data {#importcrmdata}

Import CRM records and activities into the HubSpot account, such as contacts, companies, and notes.

| Input                           | Comments                                                                                                                                                                                                                                                                                                                                                                                       | Default        |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                                                                                                                                                                  |                |
| Name                            | The name of the import.                                                                                                                                                                                                                                                                                                                                                                        |                |
| Files                           | An array containing the import file information. For more information, see [HubSpot CRM Imports API](https://developers.hubspot.com/docs/api/crm/imports).                                                                                                                                                                                                                                     |                |
| Data CSV File                   | The CSV file to import, this should be binary data from a previous step. Key name should be the file name and the value should be the binary data.                                                                                                                                                                                                                                             |                |
| Import Operations               | Indicates whether the import should create and update, only create, or only update records for a certain object or activity. Include the objectTypeId for the object/activity and whether to UPSERT (create and update), CREATE, or UPDATE records. For objectTypeId's, check [HubSpot CRM Object Type IDs](https://developers.hubspot.com/docs/api/crm/understanding-the-crm#object-type-id). |                |
| Date Format                     | The format for dates included in the file. Defaults to MONTH_DAY_YEAR; DAY_MONTH_YEAR and YEAR_MONTH_DAY are also accepted.                                                                                                                                                                                                                                                                    | MONTH_DAY_YEAR |
| Marketable Contact Import       | When true, the contacts being imported are marketable.                                                                                                                                                                                                                                                                                                                                         | true           |
| Create Contact List From Import | When true, creates a static list of the contacts from the import.                                                                                                                                                                                                                                                                                                                              | false          |
| Timeout                         | The maximum time a client will await a request                                                                                                                                                                                                                                                                                                                                                 |                |

### List Active Imports {#listactiveimports}

Returns a paged list of active imports for this account.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
| Timeout    | The maximum time a client will await a request                |         |

### List Association Types {#listassociationtypes}

Retrieve a list of all association types available between two objects.

| Input            | Comments                                                                                                                                                                                                            | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The connection to use for authenticating requests to HubSpot.                                                                                                                                                       |         |
| From Object Type | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object defined in the account. |         |
| To Object Type   | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object defined in the account.   |         |
| Timeout          | The maximum time a client will await a request                                                                                                                                                                      |         |

### List Companies {#listcompanies}

Retrieve a list of all companies.

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                           |         |
| Additional Properties To Return | For each item, provide a property to return in the response.                                            |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                | false   |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | When true, automatically fetches all pages of results using pagination.                                 | false   |
| Pagination                      | Cursor-based pagination: page size and cursor token.                                                    |         |
| Limit                           | The maximum number of items that will be returned by the search.                                        |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Contacts {#listcontacts}

Retrieve a list of all contacts.

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                           |         |
| Additional Properties To Return | For each item, provide a property to return in the response.                                            |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                | false   |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | When true, automatically fetches all pages of results using pagination.                                 | false   |
| Pagination                      | Cursor-based pagination: page size and cursor token.                                                    |         |
| Limit                           | The maximum number of items that will be returned by the search.                                        |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Custom Objects {#listcustomobjects}

Retrieve all custom objects.

| Input                           | Comments                                                      | Default |
| ------------------------------- | ------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot. |         |
| Timeout                         | The maximum time a client will await a request                |         |
| Return Archived Results         | When true, returns only results that have been archived.      | false   |
| Additional Properties To Return | For each item, provide a property to return in the response.  |         |

### List Deals {#listdeals}

Retrieve a list of all deals.

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                           |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                | false   |
| Additional Properties To Return | For each item, provide a property to return in the response.                                            |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | When true, automatically fetches all pages of results using pagination.                                 | false   |
| Pagination                      | Cursor-based pagination: page size and cursor token.                                                    |         |
| Limit                           | The maximum number of items that will be returned by the search.                                        |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Engagements {#listengagements}

List engagement objects from HubSpot CRM, including communications, emails, calls, meetings, notes, postal mail, and tasks.

| Input                | Comments                                                                                                                         | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The connection to use for authenticating requests to HubSpot.                                                                    |         |
| Engagement Object    | Select an engagement object.                                                                                                     |         |
| Properties To Return | Properties to be returned in the response. If the specified property is not present on the requested object, it will be ignored. |         |
| Timeout              | The maximum time a client will await a request                                                                                   |         |

### List Line Items {#listlineitems}

Retrieve a list of all line items.

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                           |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                | false   |
| Additional Properties To Return | For each item, provide a property to return in the response.                                            |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | When true, automatically fetches all pages of results using pagination.                                 | false   |
| Pagination                      | Cursor-based pagination: page size and cursor token.                                                    |         |
| Limit                           | The maximum number of items that will be returned by the search.                                        |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Products {#listproducts}

Retrieve a list of all products.

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The connection to use for authenticating requests to HubSpot.                                           |         |
| Additional Properties To Return | For each item, provide a property to return in the response.                                            |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Return Archived Results         | When true, returns only results that have been archived.                                                | false   |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | When true, automatically fetches all pages of results using pagination.                                 | false   |
| Pagination                      | Cursor-based pagination: page size and cursor token.                                                    |         |
| Limit                           | The maximum number of items that will be returned by the search.                                        |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Properties {#listproperties}

Retrieve a list of all configured object properties.

| Input       | Comments                                                      | Default |
| ----------- | ------------------------------------------------------------- | ------- |
| Connection  | The connection to use for authenticating requests to HubSpot. |         |
| Object Type | The type of object.                                           |         |
| Timeout     | The maximum time a client will await a request                |         |

### List Webhooks {#listwebhooks}

Retrieve a list of all webhook subscriptions for the HubSpot app.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
| Timeout    | The maximum time a client will await a request                |         |

### Raw Request {#rawrequest}

Send raw HTTP request to HubSpot.

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

### Read Association {#readassociations}

Get the Ids of the objects associated with those specified in the step.

| Input            | Comments                                                                                                                                                                                                            | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| From Object Type | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object defined in the account. |         |
| To Object Type   | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object defined in the account.   |         |
| From ID          | The unique identifier of the first object                                                                                                                                                                           |         |
| Timeout          | The maximum time a client will await a request                                                                                                                                                                      |         |
| Connection       | The connection to use for authenticating requests to HubSpot.                                                                                                                                                       |         |

### Search Deals {#searchdeals}

Returns a list of deals that match the given properties.

| Input         | Comments                                                                                                | Default |
| ------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Property Name | The property to search on. Ensure the spelling and capitalization match the property exactly.           |         |
| Value         | The value corresponding to the given property name.                                                     |         |
| Operator      | The comparison operator applied to the property value in the search filter.                             |         |
| Pagination    | Cursor-based pagination: page size and cursor token.                                                    |         |
| Limit         | The maximum number of items that will be returned by the search.                                        | 100     |
| Start After   | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |
| Timeout       | The maximum time a client will await a request                                                          |         |
| Connection    | The connection to use for authenticating requests to HubSpot.                                           |         |

### Search Records {#search}

Filter, sort, and search objects, records, and engagements across the CRM.

| Input             | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Search Endpoint   | The endpoint to search for objects or engagements. For Custom objects don't forget to fill the Object Type input.                                                                                                                                                                                                                                                                                                                                                             |         |
| Search Properties | Include properties such as filters and sorts, or specify the properties to be returned. If empty, only the default properties will be returned. On the polling triggers, `sorts` is ignored (they sort by the object's last-modified property ascending so polling can resume) and `filters`/`filterGroups` are combined with the recurrence's date window using AND. For more information, see [HubSpot CRM Search API](https://developers.hubspot.com/docs/api/crm/search). |         |
| Object Type       | The type of custom object to search for. Required for the Custom objects search endpoint.                                                                                                                                                                                                                                                                                                                                                                                     |         |
| Search Limit      | The number of records to return. The maximum value is 200.                                                                                                                                                                                                                                                                                                                                                                                                                    | 10      |
| Fetch All         | Turn this ON to get more than 200 results. Note that this can be a large amount of data.                                                                                                                                                                                                                                                                                                                                                                                      | false   |
| Timeout           | The maximum time a client will await a request                                                                                                                                                                                                                                                                                                                                                                                                                                |         |

### Update Batch Contacts {#updatebatchcontacts}

Update a batch of contacts.

| Input          | Comments                                                                                                                                | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                                           |         |
| Batch Contacts | An array of contact objects to update. See [HubSpot Contacts API](https://developers.hubspot.com/docs/api/crm/contacts) for properties. |         |
| Timeout        | The maximum time a client will await a request                                                                                          |         |

### Update Batch Engagement {#updatebatchengagement}

Updates a batch of selected engagements.

| Input             | Comments                                                                                                                                                                                                                                        | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot.                                                                                                                                                                                   |         |
| Engagement Object | Select an engagement object.                                                                                                                                                                                                                    |         |
| Batch Engagements | An array of engagement objects to update. Each engagement object must contain the required properties for the specified engagement type. See [HubSpot Engagements API](https://developers.hubspot.com/docs/api/crm/tasks) for more information. |         |
| Timeout           | The maximum time a client will await a request                                                                                                                                                                                                  |         |

### Update Company {#updatecompany}

Update the information and metadata of an existing company.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Company ID     | The unique identifier of the company.                                                                         |         |
| Company Name   | The updated display name for the company.                                                                     |         |
| Industry       | The company's industry classification, such as Software or Manufacturing.                                     |         |
| Description    | An optional text description providing additional detail about the record.                                    |         |
| Phone          | The primary contact phone number for the company.                                                             |         |
| Domain         | The updated web domain for the company.                                                                       |         |
| City           | The city where the company is headquartered.                                                                  |         |
| State          | The state or region where the company is located.                                                             |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                              |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Timeout        | The maximum time a client will await a request                                                                |         |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                 |         |

### Update Contact {#updatecontact}

Update the information and metadata of an existing contact.

| Input               | Comments                                                                                                      | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Contact ID          | The unique identifier of the contact.                                                                         |         |
| First Name          | The updated given name for the contact.                                                                       |         |
| Last Name           | The updated family name for the contact.                                                                      |         |
| Company             | The updated company association for the contact.                                                              |         |
| Contact Information | Updated contact channel fields: email, phone, and website.                                                    |         |
| Email               | The updated email address for the contact.                                                                    |         |
| Phone               | The updated primary phone number for the contact.                                                             |         |
| Website             | The updated website URL for the contact.                                                                      |         |
| Values              | The names of the fields and their values to use when creating/updating a record.                              |         |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Timeout             | The maximum time a client will await a request                                                                |         |
| Connection          | The connection to use for authenticating requests to HubSpot.                                                 |         |

### Update Custom Object {#updatecustomobject}

Updates an object's schema.

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

### Update Deal {#updatedeal}

Update the information or metadata of an existing deal.

| Input          | Comments                                                                                                                                                                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Deal ID        | The unique identifier of the deal.                                                                                                                                         |         |
| Amount         | The amount value for the deal.                                                                                                                                             |         |
| Close Date     | The date when the sale will close.                                                                                                                                         |         |
| Deal Name      | The updated display name for the deal.                                                                                                                                     |         |
| Owner ID       | The HubSpot user ID of the record owner, used to assign responsibility.                                                                                                    |         |
| Pipeline       | The pipeline to interact with.                                                                                                                                             |         |
| Deal Stage     | The stage of the deal. Deal stages categorize deals and track their progress.                                                                                              |         |
| Priority       | The priority level assigned to the deal: low, medium, or high.                                                                                                             |         |
| Deal Type      | The type of deal. By default, a deal is categorized as either New Business or Existing Business. The picklist of values for this property is configurable through HubSpot. |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                                                                                           |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                              |         |
| Timeout        | The maximum time a client will await a request                                                                                                                             |         |
| Connection     | The connection to use for authenticating requests to HubSpot.                                                                                                              |         |

### Update Engagement {#updateengagement}

Update a communication, email, call, meeting, note, postal mail or task engagement in HubSpot CRM.

| Input             | Comments                                                                                                                                                                                                         | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The connection to use for authenticating requests to HubSpot.                                                                                                                                                    |         |
| Engagement Object | Select an engagement object.                                                                                                                                                                                     |         |
| Engagement ID     | The unique identifier of the engagement. A taskId, meetingId, etc.                                                                                                                                               |         |
| Properties        | A properties object to update, attributes depend on the engagement type. For possible properties for each engagement type refer to [HubSpot Engagements API](https://developers.hubspot.com/docs/api/crm/tasks). |         |
| ID Property       | The name of a property whose values are unique for this object type.                                                                                                                                             |         |
| Timeout           | The maximum time a client will await a request                                                                                                                                                                   |         |

### Update Line Item {#updatelineitem}

Update the information and metadata of an existing line item.

| Input                          | Comments                                                                                                                              | Default |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Line Item ID                   | The unique identifier of the line item.                                                                                               |         |
| Name                           | The updated name for the line item.                                                                                                   |         |
| Product ID                     | The unique identifier of the product.                                                                                                 |         |
| Recurring Billing Frequency    | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Recurring Billing Monthly Rate | How often the line item is billed: monthly, quarterly, semi-annually, annually, or every two or three years.                          |         |
| Quantity                       | The quantity of product in the line item.                                                                                             |         |
| Price                          | The updated unit price for the product.                                                                                               |         |
| Values                         | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields                 | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                        | The maximum time a client will await a request                                                                                        |         |
| Connection                     | The connection to use for authenticating requests to HubSpot.                                                                         |         |

### Update Product {#updateproduct}

Update the information and metadata of an existing product.

| Input                       | Comments                                                                                                                              | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product ID                  | The unique identifier of the product.                                                                                                 |         |
| Product Name                | The updated display name for the product.                                                                                             |         |
| Description                 | An optional text description providing additional detail about the record.                                                            |         |
| Product SKU                 | The updated stock-keeping unit code for the product.                                                                                  |         |
| Price                       | The updated unit price for the product.                                                                                               |         |
| Recurring Billing Frequency | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Unit Cost                   | The cost per unit used to calculate margin and profitability.                                                                         |         |
| Values                      | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields              | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                     | The maximum time a client will await a request                                                                                        |         |
| Connection                  | The connection to use for authenticating requests to HubSpot.                                                                         |         |

### Validate Connection {#validateconnection}

Returns a boolean value that specifies whether the provided Connection is valid.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Timeout    | The maximum time a client will await a request                |         |
| Connection | The connection to use for authenticating requests to HubSpot. |         |
