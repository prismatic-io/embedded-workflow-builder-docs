---
title: Microsoft Outlook Connector
sidebar_label: Microsoft Outlook
description: Manage emails, calendar events, and subscriptions in Microsoft Outlook.
---

![Microsoft Outlook](./assets/ms-outlook.png#connector-icon)
[Microsoft Outlook](https://outlook.live.com) is a productivity suite for managing email and calendar.
This component allows reading, sending, and managing emails, as well as creating, updating, and managing calendar events and subscriptions.

## API Documentation

This component was built using the [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/api/overview) currently utilizing v1.0

## Connections

### OAuth 2.0 Authorization Code {#templatedoauth}

Authenticates actions in all Microsoft's Graph API services.

To connect to Microsoft Outlook using OAuth 2.0, create an App Registration in Microsoft Entra (formerly Azure Active Directory).

#### Prerequisites

- Access to a [Microsoft Entra admin center](https://entra.microsoft.com/) or [Azure Portal](https://portal.azure.com/#home)
- Permissions to create App Registrations

#### Setup Steps

1. Navigate to [Azure Active Directory tenant](https://portal.azure.com/#home) and create a new **App Registration**
2. When creating the application, select **Supported account types**:
   - Choose **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** to allow users from other organizations to authenticate
3. Under **Platforms**, add the **Web** platform:
   - Add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as a **Redirect URI**
4. Navigate to **Certificates & Secrets** and create a new **Client Secret**:
   - Copy the **Value** of the client secret (this will only be shown once)
5. Navigate to the **Overview** page and copy the **Application (client) ID**

#### Configure the Connection

- Enter the **Application (client) ID** value into the **Client ID** field
- Enter the **Client Secret** value into the same named field
- The default scopes are pre-configured for common use cases:
  ```
  https://graph.microsoft.com/User.Read https://graph.microsoft.com/Calendars.ReadWrite https://graph.microsoft.com/Mail.ReadWrite https://graph.microsoft.com/Mail.Send offline_access
  ```
  - `https://graph.microsoft.com/User.Read` - Read basic user data
  - `https://graph.microsoft.com/Calendars.ReadWrite` - Manage Outlook calendar
  - `https://graph.microsoft.com/Mail.ReadWrite` - Manage email
  - `https://graph.microsoft.com/Mail.Send` - Send email
  - `offline_access` - Maintain OAuth connection and receive refresh tokens
  - Refer to [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference) for additional scope information
- **Additional Authorization Parameters** (optional) - Query string parameters appended to the OAuth authorization URL:
  - Use `prompt=consent` to force Microsoft to display the consent screen, which is useful when the requested scopes have changed and users need to re-authorize
  - Use `login_hint=user@example.com` to pre-fill the user's email address on the sign-in page
  - Multiple parameters can be combined with `&` (e.g., `prompt=consent&login_hint=user@example.com`)

:::note[Single-Tenant Applications]
For single-tenant applications (not Multitenant), tenant-specific URLs are required. The connection will automatically handle tenant-specific configuration when a Tenant ID is provided.
:::

:::info[Cloud Environments]
The connection supports different Microsoft cloud environments (Commercial, Government, China). The Base URL will automatically adjust based on the selected cloud environment.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                               | Comments                                                                                                                                                                                                                                                                                 | Default                                                                                                                                                                               |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Base URL                            | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints).                                                     | https://graph.microsoft.com                                                                                                                                                           |
| Tenant URL                          | The tenant URL for the Microsoft Graph API. This is the URL of the tenant that you are connecting to. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-national-cloud#microsoft-entra-authentication-endpoints). | login.microsoftonline.com/common                                                                                                                                                      |
| Scopes                              | Microsoft Graph API permission scopes are set on the OAuth application.                                                                                                                                                                                                                  | https://graph.microsoft.com/User.Read https://graph.microsoft.com/Calendars.ReadWrite https://graph.microsoft.com/Mail.ReadWrite https://graph.microsoft.com/Mail.Send offline_access |
| Client ID                           | Client Id of your Azure application.                                                                                                                                                                                                                                                     |                                                                                                                                                                                       |
| Client secret value                 | Client Secret generated under 'Certificates & Secrets' in your Azure application.                                                                                                                                                                                                        |                                                                                                                                                                                       |
| Additional Authorization Parameters | Query string parameters to append to the OAuth authorization URL. Common parameters include `prompt=consent` to force the consent screen or `login_hint=user@example.com` to pre-fill the login email.                                                                                   |                                                                                                                                                                                       |

### OAuth 2.0 Authorization Code (Deprecated) {#oauth}

Authenticate using OAuth 2.0 Authorization Code (Deprecated).

:::warning[Deprecated]
This connection type is deprecated. Use the **OAuth 2.0 Authorization Code** connection instead, which provides the same functionality with improved configuration.
:::

<Vimeo video="907604023" />

You will first need to create and configure a new "App Registration" within your [Azure Active Directory tenant](https://portal.azure.com/#home).
When creating the application you will be prompted to select the 'Supported account types'. Under this section, be sure to select 'Accounts in any organizational directory (Any Azure AD directory - Multitenant)'.

#### Prerequisites

- Access to an [Azure Active Directory tenant](https://portal.azure.com/#home)
- Permissions to create App Registrations

#### Setup Steps

1. Create and configure a new **App Registration** within the Azure Active Directory tenant
2. When creating the application, select **Supported account types**:
   - Choose **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** to allow access from other organizations
3. Under **Platforms**, add the **Web** platform:
   - Add the OAuth 2.0 callback URL — `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` — as a **Redirect URI**
4. Navigate to **Certificates & Secrets** and create a new **Client Secret**:
   - Copy the **Value** of the client secret (this will only be shown once)
5. Navigate to the **Overview** page and copy the **Application (client) ID**

#### Configure the Connection

- Enter the **Application (client) ID** value into the **Client ID** field
- Enter the **Client Secret** value into the same named field
- If Multitenant was not selected when creating the Azure application, replace the **Authorize URL** and **Token URL** with tenant-specific values
- The default scopes are pre-configured (any scopes not needed can be removed):
  - `https://graph.microsoft.com/User.Read` — reads basic user data
  - `https://graph.microsoft.com/Calendars.ReadWrite` — manages Outlook calendar
  - `https://graph.microsoft.com/Mail.ReadWrite` — manages email
  - `https://graph.microsoft.com/Mail.Send` — sends email
  - Ensure the `offline_access` scope is included in the app registration. It is essential to maintain the OAuth connection and receive refresh tokens. Without it, users will need to re-authenticate every hour.

After saving the integration, users can authenticate with OAuth 2.0 to access their Microsoft Outlook data.

#### App Verification and Admin Consent

Microsoft requires Azure AD app registrations used in multi-tenant deployments to complete a publisher verification process. This review confirms the app developer's identity, giving end users confidence that they are authorizing a legitimate, verified application.

Azure AD app registrations have two distinct verification concepts that affect how users experience the authentication flow.

#### Publisher Verification

**Complete publisher verification before deploying to end users.** Without it, the Microsoft consent screen displays **"Unverified"** next to the app name. This reduces user trust and may prevent users in organizations with strict Azure AD policies from being able to authorize the app at all.

To verify the publisher:

1. Ensure the organization has a [Microsoft Partner Network (MPN) account](https://partner.microsoft.com/)
2. In the [Microsoft Entra Admin Center](https://entra.microsoft.com/), open the app registration
3. Under **Branding & properties**, click **Add a verified publisher**
4. Enter the MPN ID and confirm

Once verified, the consent screen displays the organization name with a verified badge instead of "Unverified."

#### Admin Consent

Apps requesting **application permissions** (permissions that act without a signed-in user) or high-privilege **delegated permissions** require admin consent before any user in a Microsoft 365 tenant can authenticate. Without admin consent, users see a **"Need admin approval"** error.

A tenant administrator can grant consent using either method:

**Method 1 — Admin Consent URL:**

Navigate to the following URL, replacing `{tenant}` with the Directory tenant ID and `{client_id}` with the Application client ID:

    https://login.microsoftonline.com/{tenant}/adminconsent?client_id={client_id}

**Method 2 — Microsoft Entra Admin Center:**

1. Navigate to [Microsoft Entra Admin Center](https://entra.microsoft.com/) → **Enterprise applications**
2. Select the app registration
3. Under **Permissions**, click **Grant admin consent for [organization name]**

:::note[Delegated vs. Application Permissions]
Delegated permissions (user-level) typically do not require admin consent unless they are classified as high privilege. Application permissions always require admin consent. Review the [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference) to identify which permissions require consent.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                                                                                                                                   | Default                                                                                                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Base URL            | Base URL for the Microsoft Graph API. Depending on the cloud environment, choose the correct endpoint from the [Microsoft Graph deployments documentation](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints). | https://graph.microsoft.com                                                                                                                                                           |
| Authorize URL       | OAuth 2.0 Authorization URL for Microsoft Outlook authentication.                                                                                                                                                                                                          | https://login.microsoftonline.com/common/oauth2/v2.0/authorize?prompt=consent                                                                                                         |
| Token URL           | OAuth 2.0 Token URL for Microsoft Outlook authentication.                                                                                                                                                                                                                  | https://login.microsoftonline.com/common/oauth2/v2.0/token                                                                                                                            |
| Scopes              | List of OAuth permission scopes. These scopes should be configured in the Microsoft Entra App Registration.                                                                                                                                                                | https://graph.microsoft.com/User.Read https://graph.microsoft.com/Calendars.ReadWrite https://graph.microsoft.com/Mail.ReadWrite https://graph.microsoft.com/Mail.Send offline_access |
| Client ID           | Application (client) ID from the Microsoft Entra App Registration.                                                                                                                                                                                                         |                                                                                                                                                                                       |
| Client secret value | Client secret value from the Microsoft Entra App Registration. This value is only shown once when created.                                                                                                                                                                 |                                                                                                                                                                                       |

### OAuth 2.0 Client Credentials {#oauthclientcredentials}

Authenticates actions in all Microsoft's Graph API services.

To connect to Microsoft Outlook using OAuth 2.0 Client Credentials flow, create an App Registration with application permissions in Microsoft Entra.

The Client Credentials flow is used for server-to-server authentication without user interaction, requiring application-level permissions and admin consent.

#### Prerequisites

- Access to [Microsoft Entra admin center](https://entra.microsoft.com/)
- Permissions to create App Registrations and grant admin consent
- Tenant ID for the organization

#### Setup Steps

1. Navigate to [Microsoft Entra](https://entra.microsoft.com/) **Identity** > **Applications** > **App registrations** and select **New registration**:
   - Set **Supported Account types** to **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** to allow access from other organizations
   - Set the **Redirect URI** dropdown to **Web** platform and add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as a **Redirect URI**
   - Select **Register** to complete
2. From the App menu, navigate to **Certificates & Secrets** and add a new **Client Secret**:
   - Copy the **Value** for the **Client Secret** (this will only be shown once)
3. Navigate to the **Overview** page and copy the **Application (client) ID**
4. Navigate to **API Permissions** and configure application permissions:
   - Select **Add Permission** > **Microsoft Graph** > **Application permissions**
   - Add all permissions required for the use case (e.g., `Mail.ReadWrite`, `Calendars.ReadWrite`, `User.Read.All`)
   - Refer to [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference) for available permissions
5. After applying all relevant permissions, select **Grant Admin Consent** to authorize the application permissions

#### Configure the Connection

- Enter the **Tenant ID** for the organization being accessed
- Enter the **Application (client) ID** value into the **Client ID** field
- Enter the **Client Secret** value into the same named field
- Enter the **User ID** of the user whose data will be accessed (required for user-specific endpoints)
- The default scope `https://graph.microsoft.com/.default` is pre-configured for the connection

:::note[Client Credentials vs Authorization Code]
The Client Credentials flow uses application permissions and does not require user login. This is ideal for background services and automated processes. For user-delegated permissions, use the **OAuth 2.0 Authorization Code** connection instead.
:::

:::warning[User ID Required]
All actions using the client credentials flow require a **User ID** to specify which user's data to access. This is required because application permissions operate on behalf of the application, not a signed-in user.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                       | Comments                                                                                                                                                                                                                             | Default                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| Base URL                    | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints). | https://graph.microsoft.com          |
| Microsoft Entra ID Endpoint | The Microsoft Entra ID endpoint for the Microsoft Graph API. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/graph/deployments#app-registration-and-token-service-root-endpoints).                 | https://login.microsoftonline.com    |
| Tenant                      | The tenant ID or name for the Microsoft Graph API. This is the ID or name of the tenant that you are connecting to.                                                                                                                  |                                      |
| Client ID                   | Client Id of your Azure application.                                                                                                                                                                                                 |                                      |
| Client Secret               | Client Secret generated under 'Certificates & Secrets' in your Azure application.                                                                                                                                                    |                                      |
| Scopes                      | Microsoft Graph API Scopes.                                                                                                                                                                                                          | https://graph.microsoft.com/.default |
| User ID                     | Unique identifier of the user whose data will be accessed. Required for client credentials authentication to work with user-specific endpoints.                                                                                      |                                      |

## Triggers

### Calendar Event Webhook {#webhooklifecycle}

Receive calendar event notifications from Outlook. Automatically creates and manages a webhook subscription for calendar events when the instance is deployed, and removes the subscription when the instance is deleted. Supports scheduled renewal to keep the subscription active.

| Input                | Comments                                                                                                                                                                                      | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Outlook connection to use.                                                                                                                                                                |         |
| Expiration Date/Time | The expiration date and time for the webhook subscription in ISO 8601 format. If unspecified, defaults to the current date/time plus 10,070 minutes (the maximum permitted by the Graph API). |         |
| Allow Duplicates     | When true, allows more than one webhook subscription per endpoint.                                                                                                                            | false   |

### Mail Message Webhook {#mailfolderwebhook}

Receive mail message notifications from Outlook. Automatically creates and manages a webhook subscription for mail messages when the instance is deployed, and removes the subscription when the instance is deleted. Supports scheduled renewal to keep the subscription active.

| Input                | Comments                                                                                                                                                                                      | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Outlook connection to use.                                                                                                                                                                |         |
| Mail Change Types    | The types of changes to listen for on mail messages.                                                                                                                                          |         |
| Folder ID            | The unique identifier of the mail folder to monitor for changes. Leave empty to monitor the entire mailbox.                                                                                   |         |
| Expiration Date/Time | The expiration date and time for the webhook subscription in ISO 8601 format. If unspecified, defaults to the current date/time plus 10,070 minutes (the maximum permitted by the Graph API). |         |
| Allow Duplicates     | When true, allows more than one webhook subscription per endpoint.                                                                                                                            | false   |

### New and Updated Messages {#pollchangestrigger}

Checks for new and updated mail messages in Microsoft Outlook on a configured schedule.

| Input                 | Comments                                                                                                                  | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Outlook connection to use.                                                                                            |         |
| Mail Folder ID        | The unique identifier of a mail folder to limit polling to (e.g., Inbox). Leave empty to poll all folders in the mailbox. |         |
| Show New Messages     | When true, messages created since the last poll are included in the trigger output.                                       | true    |
| Show Updated Messages | When true, messages updated since the last poll are included in the trigger output.                                       | true    |

### Webhook {#webhook}

Receive and validate webhook requests from Outlook for manually configured webhook subscriptions.

## Actions

### Cancel Event {#cancelevent}

Cancels an event.

| Input      | Comments                                                          | Default |
| ---------- | ----------------------------------------------------------------- | ------- |
| Connection | The Outlook connection to use.                                    |         |
| Event ID   | The unique identifier of the calendar event.                      |         |
| Comment    | An optional comment about the cancellation sent to all attendees. |         |

### Create Calendar {#createcalendar}

Creates a new calendar.

| Input      | Comments                                                                                                                                                                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Outlook connection to use.                                                                                                                                                                                                        |         |
| Name       | The display name shown for the calendar.                                                                                                                                                                                              |         |
| Color      | The color of the calendar. See the `color` property in the [Microsoft Graph calendar resource documentation](https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0#properties) for the supported values. | auto    |

### Create Event {#createevent}

Creates an event on a calendar.

| Input                     | Comments                                                                                                                                           | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The Outlook connection to use.                                                                                                                     |         |
| Location Name             | The name of the event location.                                                                                                                    |         |
| Subject                   | The subject of the calendar event.                                                                                                                 |         |
| Body (HTML)               | The HTML body content of the event.                                                                                                                |         |
| Start At                  | The start timestamp in ISO 8601 format without timezone information. Format: YYYY-MM-DDTHH:mm:ss.                                                  |         |
| Start Timezone            | The timezone applied to the start time of the event. Use the List Supported Timezones action for valid aliases or values for this user.            | UTC     |
| End At                    | The end timestamp in ISO 8601 format without timezone information. Format: YYYY-MM-DDTHH:mm:ss.                                                    |         |
| End Timezone              | The timezone applied to the end time of the event. Use the List Supported Timezones action for valid aliases or values for this user.              | UTC     |
| Calendar ID               | The unique identifier of the calendar to list events from. Lists all events for the current user if unspecified.                                   |         |
| Attendees Data Collection | A reference to data structures representing attendees. Merged with Attendees if both are specified.                                                |         |
| Type                      | The event attendees as key-value pairs. Specify the email address as the key and the attendee type (required, optional, or resource) as the value. |         |

### Create Event Subscription {#createeventsubscription}

Creates an event subscription for Microsoft Outlook.

| Input                | Comments                                                                                                                                                                                      | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Outlook connection to use.                                                                                                                                                                |         |
| Notification URL     | The URL where notification events will be sent.                                                                                                                                               |         |
| Expiration Date/Time | The expiration date and time for the webhook subscription in ISO 8601 format. If unspecified, defaults to the current date/time plus 10,070 minutes (the maximum permitted by the Graph API). |         |
| Allow Duplicates     | When true, allows more than one webhook subscription per endpoint.                                                                                                                            | false   |

### Create Mail Folder {#createmailfolder}

Creates a new mail folder.

| Input            | Comments                                                                                                              | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Outlook connection to use.                                                                                        |         |
| Parent Folder ID | The unique identifier of the parent folder. Creates the folder under this parent. Omit to create a root-level folder. |         |
| Display Name     | The display name shown for the folder in the mailbox.                                                                 |         |

### Create Mail Folder Subscription {#createmailfoldersubscription}

Creates a mail folder subscription for Microsoft Outlook.

| Input                | Comments                                                                                                                                                                                      | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Outlook connection to use.                                                                                                                                                                |         |
| Mail Change Types    | The types of changes to listen for on mail messages.                                                                                                                                          |         |
| Notification URL     | The URL where notification events will be sent.                                                                                                                                               |         |
| Expiration Date/Time | The expiration date and time for the webhook subscription in ISO 8601 format. If unspecified, defaults to the current date/time plus 10,070 minutes (the maximum permitted by the Graph API). |         |

### Delete All Instance Subscriptions {#deleteallinstancesubscriptions}

Deletes all subscriptions pointed at this instance.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Outlook connection to use. |         |

### Delete Calendar {#deletecalendar}

Deletes an existing calendar.

| Input       | Comments                               | Default |
| ----------- | -------------------------------------- | ------- |
| Connection  | The Outlook connection to use.         |         |
| Calendar ID | The unique identifier of the calendar. |         |

### Delete Event {#deleteevent}

Deletes an event.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Outlook connection to use.               |         |
| Event ID   | The unique identifier of the calendar event. |         |

### Delete Mail Folder {#deletemailfolder}

Deletes the specified mail folder.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Outlook connection to use.            |         |
| Folder ID  | The unique identifier of the mail folder. |         |

### Delete Message {#deletemessage}

Deletes a message by ID.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Outlook connection to use.              |         |
| Message ID | The unique identifier of the email message. |         |

### Delete Subscription {#deletesubscription}

Deletes an existing subscription for Microsoft Outlook.

| Input           | Comments                                           | Default |
| --------------- | -------------------------------------------------- | ------- |
| Connection      | The Outlook connection to use.                     |         |
| Subscription ID | The unique identifier of the webhook subscription. |         |

### Get Calendar Event {#getcalendarevent}

Gets information about a specific calendar event.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Outlook connection to use.               |         |
| Event ID   | The unique identifier of the calendar event. |         |

### Get Current User {#getcurrentuser}

Gets the information and metadata of the user that is currently logged in.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Outlook connection to use. |         |

### Get Mail Message {#getmessagebyid}

Fetches and parses a raw message by ID.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Outlook connection to use.              |         |
| Message ID | The unique identifier of the email message. |         |

### Get Schedule Availability {#getschedule}

Gets the free/busy availability information for a collection of users.

| Input                      | Comments                                                                                                                                | Default |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The Outlook connection to use.                                                                                                          |         |
| Schedules                  | The collection of SMTP addresses of users, distribution lists, or resources to get availability information for.                        |         |
| Start At                   | The start timestamp in ISO 8601 format without timezone information. Format: YYYY-MM-DDTHH:mm:ss.                                       |         |
| Start Timezone             | The timezone applied to the start time of the event. Use the List Supported Timezones action for valid aliases or values for this user. | UTC     |
| End At                     | The end timestamp in ISO 8601 format without timezone information. Format: YYYY-MM-DDTHH:mm:ss.                                         |         |
| End Timezone               | The timezone applied to the end time of the event. Use the List Supported Timezones action for valid aliases or values for this user.   | UTC     |
| Availability View Interval | The duration of each time slot used to check availability, in minutes.                                                                  | 30      |

### List Calendars {#listcalendars}

Lists all calendars for the user.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Outlook connection to use.                                          |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Page Limit | The maximum number of results to return per page.                       |         |
| Page Skip  | The number of records to skip before returning results.                 |         |

### List Events {#listevents}

Lists all events for the user.

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Outlook connection to use.                                                                                   |         |
| Fetch All   | When true, automatically fetches all pages of results using pagination.                                          | false   |
| Page Limit  | The maximum number of results to return per page.                                                                |         |
| Page Skip   | The number of records to skip before returning results.                                                          |         |
| Calendar ID | The unique identifier of the calendar to list events from. Lists all events for the current user if unspecified. |         |

### List Mail Folders {#listmailfolders}

Gets the mail folder collection directly under the root folder of the signed-in user, or under the specified parent folder.

| Input            | Comments                                                                                                                     | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Outlook connection to use.                                                                                               |         |
| Fetch All        | When true, automatically fetches all pages of results using pagination.                                                      | false   |
| Page Limit       | The maximum number of results to return per page.                                                                            |         |
| Page Skip        | The number of records to skip before returning results.                                                                      |         |
| Parent Folder ID | The unique identifier of the parent folder. Lists all folders contained within this folder. Omit to list root-level folders. |         |

### List Mail Messages {#listmessages}

Lists mail messages in a user's mailbox.

| Input      | Comments                                                                                                                                                                                                                                    | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Outlook connection to use.                                                                                                                                                                                                              |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                                                                                                                     | false   |
| Page Limit | The maximum number of results to return per page.                                                                                                                                                                                           |         |
| Page Skip  | The number of records to skip before returning results.                                                                                                                                                                                     |         |
| Folder ID  | The unique identifier of the mail folder. Omit to list all messages.                                                                                                                                                                        |         |
| Search     | The search query to filter messages. Cannot be used together with Filter. Refer to the [Microsoft Graph search parameter documentation](https://learn.microsoft.com/en-us/graph/search-query-parameter) for query syntax.                   |         |
| Filter     | The OData filter expression to apply to the messages. Cannot be used together with Search. Refer to the [Microsoft Graph filter parameter documentation](https://learn.microsoft.com/en-us/graph/filter-query-parameter) for filter syntax. |         |

### List Subscriptions {#listsubscriptions}

Lists all subscriptions for Microsoft Outlook.

| Input                  | Comments                                                                | Default |
| ---------------------- | ----------------------------------------------------------------------- | ------- |
| Connection             | The Outlook connection to use.                                          |         |
| Show Instance Webhooks | When true, returns only subscriptions for this instance's webhooks.     | true    |
| Fetch All              | When true, automatically fetches all pages of results using pagination. | true    |

### List Supported Languages {#listsupportedlanguages}

Lists supported languages for the current user.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Outlook connection to use. |         |

### List Supported Timezones {#listsupportedtimezones}

Lists supported timezones for the current user.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Outlook connection to use. |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to Microsoft Outlook.

| Input                   | Comments                                                                                                                                                                                                                                       | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Microsoft Outlook connection to use.                                                                                                                                                                                                       |         |
| URL                     | The path of the Microsoft Graph endpoint to call (e.g., `/me/calendars`). The base URL `https://graph.microsoft.com/v1.0` is added automatically. For example, to call `https://graph.microsoft.com/v1.0/me/calendars`, enter `/me/calendars`. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                        |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                      |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                           |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                               |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                         |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                            |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                    |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                       | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                            |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                            | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                               | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                            | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                  | false   |

### Send Message {#sendmessage}

Sends a new message.

| Input               | Comments                                                                                                                                                                     | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Outlook connection to use.                                                                                                                                               |         |
| To                  | The recipient email addresses. Multiple addresses can be specified as a comma-separated list.                                                                                |         |
| Subject             | The subject line of the email message.                                                                                                                                       |         |
| Body Content Type   | The format of the message body content.                                                                                                                                      | html    |
| CC                  | The carbon copy email addresses. Multiple addresses can be specified as a comma-separated list.                                                                              |         |
| BCC                 | The blind carbon copy email addresses. Multiple addresses can be specified as a comma-separated list.                                                                        |         |
| Message Body        | The plain text or HTML body content of the email message.                                                                                                                    |         |
| Attachments         | The file attachments as key-value pairs. Specify the file name as the key (e.g., my-file.pdf) and the file data as the value.                                                |         |
| Dynamic Attachments | An array of objects with "key" and "value" properties, where "key" is the file name and "value" is the binary file data. Typically used as a reference from a previous step. |         |

### Update Calendar {#updatecalendar}

Updates an existing calendar.

| Input       | Comments                                                                                                                                                                                                                              | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Outlook connection to use.                                                                                                                                                                                                        |         |
| Calendar ID | The unique identifier of the calendar.                                                                                                                                                                                                |         |
| Name        | The display name shown for the calendar.                                                                                                                                                                                              |         |
| Color       | The color of the calendar. See the `color` property in the [Microsoft Graph calendar resource documentation](https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0#properties) for the supported values. | auto    |

### Update Event {#updateevent}

Updates an existing event.

| Input                     | Comments                                                                                                                                           | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The Outlook connection to use.                                                                                                                     |         |
| Event ID                  | The unique identifier of the calendar event.                                                                                                       |         |
| Location Name             | The name of the event location.                                                                                                                    |         |
| Subject                   | The subject of the calendar event.                                                                                                                 |         |
| Body (HTML)               | The HTML body content of the event.                                                                                                                |         |
| Start At                  | The start timestamp in ISO 8601 format without timezone information. Format: YYYY-MM-DDTHH:mm:ss.                                                  |         |
| Start Timezone            | The timezone applied to the start time of the event. Use the List Supported Timezones action for valid aliases or values for this user.            | UTC     |
| End At                    | The end timestamp in ISO 8601 format without timezone information. Format: YYYY-MM-DDTHH:mm:ss.                                                    |         |
| End Timezone              | The timezone applied to the end time of the event. Use the List Supported Timezones action for valid aliases or values for this user.              | UTC     |
| Attendees Data Collection | A reference to data structures representing attendees. Merged with Attendees if both are specified.                                                |         |
| Type                      | The event attendees as key-value pairs. Specify the email address as the key and the attendee type (required, optional, or resource) as the value. |         |

### Update Event Subscription Expiration {#updateeventsubscription}

Updates the expiration of an existing event subscription for Microsoft Outlook.

| Input                | Comments                                                                                                                                                                                      | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Outlook connection to use.                                                                                                                                                                |         |
| Subscription ID      | The unique identifier of the webhook subscription.                                                                                                                                            |         |
| Expiration Date/Time | The expiration date and time for the webhook subscription in ISO 8601 format. If unspecified, defaults to the current date/time plus 10,070 minutes (the maximum permitted by the Graph API). |         |
