---
title: Microsoft Outlook Connector
sidebar_label: Microsoft Outlook
description: Manage emails, calendar events, and subscriptions in Microsoft Outlook.
---

![Microsoft Outlook](./assets/ms-outlook.png#connector-icon)
Manage emails, calendar events, and subscriptions in Microsoft Outlook.

## Connections

### OAuth 2.0 Authorization Code

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

:::note Single-Tenant Applications
For single-tenant applications (not Multitenant), tenant-specific URLs are required. The connection will automatically handle tenant-specific configuration when a Tenant ID is provided.
:::

:::info Cloud Environments
The connection supports different Microsoft cloud environments (Commercial, Government, China). The Base URL will automatically adjust based on the selected cloud environment.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                                                                                                                                                 | Default                                                                                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Base URL            | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints).                                                     | https://graph.microsoft.com                                                                                                                                                           |
| Tenant URL          | The tenant URL for the Microsoft Graph API. This is the URL of the tenant that you are connecting to. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-national-cloud#microsoft-entra-authentication-endpoints). | login.microsoftonline.com/common                                                                                                                                                      |
| Scopes              | Microsoft Graph API permission scopes are set on the OAuth application.                                                                                                                                                                                                                  | https://graph.microsoft.com/User.Read https://graph.microsoft.com/Calendars.ReadWrite https://graph.microsoft.com/Mail.ReadWrite https://graph.microsoft.com/Mail.Send offline_access |
| Client ID           | Client Id of your Azure application.                                                                                                                                                                                                                                                     |                                                                                                                                                                                       |
| Client secret value | Client Secret generated under 'Certificates & Secrets' in your Azure application.                                                                                                                                                                                                        |                                                                                                                                                                                       |

### OAuth 2.0 Authorization Code (Deprecated)

OAuth 2.0 Authorization Code Connectivity for Microsoft Outlook

You will first need to create and configure a new "App Registration" within your [Azure Active Directory tenant](https://portal.azure.com/#home).
When creating the application you will be prompted to select the 'Supported account types'. Under this section, be sure to select 'Accounts in any organizational directory (Any Azure AD directory - Multitenant)'.

You will need to go to "Platforms" and add the "Web" platform. In that section you should add the OAuth 2.0 callback URL - `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` - as a **Redirect URI**.

Next, go to "Certificates & Secrets" for the app and add a new **Client Secret**. Note this value as you will need to supply it to the connection.

You will also need the **Application (client) ID** from the "Overview" page.

Now, configure the OAuth 2.0 connection.
Add an Microsoft Outlook OAuth 2.0 connection config variable:

- Use the **Application (client) ID** value for the **Client ID** field.
- Use the **Client Secret** for the same named field.
- If you didn't select Multitenant when creating the Azure application, you will need to replace the **Authorize URL** and **Token URL** with ones specific to your tenant.
- The default scopes are as follows. You can remove scopes that you don't need:
  - `https://graph.microsoft.com/User.Read` for reading basic user data
  - `https://graph.microsoft.com/Calendars.ReadWrite` for managing Outlook calendar
  - `https://graph.microsoft.com/Mail.ReadWrite` for managing email
  - `https://graph.microsoft.com/Mail.Send` for sending email
  - Ensure the `offline_access` scope is included in your app registration. It is essential to maintain your OAuth connection and receive refresh tokens. Without it, users will need to re-authenticate every hour.

Save your integration and you should be able to authenticate a user with OAuth 2.0 to access their Microsoft Outlook data.

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

### OAuth 2.0 Client Credentials

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

:::note Client Credentials vs Authorization Code
The Client Credentials flow uses application permissions and does not require user login. This is ideal for background services and automated processes. For user-delegated permissions, use the **OAuth 2.0 Authorization Code** connection instead.
:::

:::warning User ID Required
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

### Calendar Event Webhook

Receive calendar event notifications from Outlook. Automatically creates and manages a webhook subscription for calendar events when the instance is deployed, and removes the subscription when the instance is deleted.

| Input                | Comments                                                                                                                                                                                          | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Outlook connection to use.                                                                                                                                                                    |         |
| Expiration Date/Time | Expiration date and time for the webhook subscription in ISO 8601 format. If unspecified, defaults to the current date/time plus 10070 minutes (close to the maximum permitted by the Graph API). |         |
| Allow Duplicates     | When true, allows more than one webhook subscription per endpoint.                                                                                                                                | false   |

### Webhook

Receive and validate webhook requests from Outlook for manually configured webhook subscriptions.

## Actions

### Cancel Event

Cancel an Event

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Connection | The Outlook connection to use.                       |         |
| Event ID   | Unique identifier of the calendar event.             |         |
| Comment    | Comment about the cancellation sent to all attendees |         |

### Create Calendar

Create a new Calendar

| Input      | Comments                                                                                                                                                                                               | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Outlook connection to use.                                                                                                                                                                         |         |
| Name       | The name of the calendar.                                                                                                                                                                              |         |
| Color      | Color of the calendar; see 'color' in the [Microsoft Graph calendar resource documentation](https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0#properties) for details | auto    |

### Create Event

Create an Event on a Calendar

| Input                     | Comments                                                                                                                                       | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The Outlook connection to use.                                                                                                                 |         |
| Calendar ID               | Unique identifier of the calendar to list events from. Lists all events for the current user if unspecified.                                   |         |
| Location Name             | Name of the event location.                                                                                                                    |         |
| Subject                   | Subject of the calendar event.                                                                                                                 |         |
| Body (HTML)               | HTML body content of the event.                                                                                                                |         |
| Attendees Data Collection | Reference to data structures representing attendees. Will be merged with Attendees if both are specified.                                      |         |
| Type                      | Event attendees as key-value pairs. Specify the email address as the key and the attendee type (required, optional, or resource) as the value. |         |
| Start At                  | ISO 8601 formatted timestamp without timezone information.                                                                                     |         |
| Start Timezone            | Timezone for the start time of the event. Use the List Supported Timezones action for details on valid aliases/values for this user.           | UTC     |
| End At                    | ISO 8601 formatted timestamp without timezone information.                                                                                     |         |
| End Timezone              | Timezone for the end time of the event. Use the List Supported Timezones action for details on valid aliases/values for this user.             | UTC     |

### Create Event Subscription

Create an Event subscription for Microsoft Outlook

| Input                | Comments                                                                                                                                                                                          | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Outlook connection to use.                                                                                                                                                                    |         |
| Notification URL     | URL where notification events will be sent.                                                                                                                                                       |         |
| Expiration Date/Time | Expiration date and time for the webhook subscription in ISO 8601 format. If unspecified, defaults to the current date/time plus 10070 minutes (close to the maximum permitted by the Graph API). |         |
| Allow Duplicates     | When true, allows more than one webhook subscription per endpoint.                                                                                                                                | false   |

### Create Mail Folder

Create a new mail folder

| Input            | Comments                                                                      | Default |
| ---------------- | ----------------------------------------------------------------------------- | ------- |
| Connection       | The Outlook connection to use.                                                |         |
| Parent Folder ID | Create a folder under this parent folder. Omit to create a root-level folder. |         |
| Display name     | The display name of the folder.                                               |         |

### Create Mail Folder Subscription

Create a Mail Folder subscription for Microsoft Outlook

| Input                | Comments                                                                                                                                                                                          | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Outlook connection to use.                                                                                                                                                                    |         |
| Mail Change Types    | Types of changes to listen for on mail messages.                                                                                                                                                  |         |
| Notification URL     | URL where notification events will be sent.                                                                                                                                                       |         |
| Expiration Date/Time | Expiration date and time for the webhook subscription in ISO 8601 format. If unspecified, defaults to the current date/time plus 10070 minutes (close to the maximum permitted by the Graph API). |         |

### Delete All Instance Subscriptions

Delete all subscriptions pointed at this instance

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Outlook connection to use. |         |

### Delete Calendar

Delete an existing Calendar

| Input       | Comments                                         | Default |
| ----------- | ------------------------------------------------ | ------- |
| Connection  | The Outlook connection to use.                   |         |
| Calendar ID | The unique identifier of the calendar to modify. |         |

### Delete Event

Delete an Event

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Outlook connection to use.           |         |
| Event ID   | Unique identifier of the calendar event. |         |

### Delete Mail Folder

Delete the specified mail folder

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Outlook connection to use.       |         |
| Folder ID  | The unique identifier of the folder. |         |

### Delete Message

Delete message by ID

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Outlook connection to use.    |         |
| Message ID | Unique identifier of the message. |         |

### Delete Subscription

Delete existing subscription for Microsoft Outlook

| Input           | Comments                                       | Default |
| --------------- | ---------------------------------------------- | ------- |
| Connection      | The Outlook connection to use.                 |         |
| Subscription ID | Unique identifier of the webhook subscription. |         |

### Get Calendar Event

Gets information about a specific calendar event

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Outlook connection to use.           |         |
| Event ID   | Unique identifier of the calendar event. |         |

### Get Current User

Get the information and metadata of the user that is currently logged in

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Outlook connection to use. |         |

### Get Mail Message

Fetch and parse a raw message by ID

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Outlook connection to use.    |         |
| Message ID | Unique identifier of the message. |         |

### Get Schedule Availability

Get the free/busy availability information for a collection of users

| Input                      | Comments                                                                                                                             | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                 | The Outlook connection to use.                                                                                                       |         |
| Availability View Interval | Duration of time slot to check availability for in minutes                                                                           | 30      |
| Schedules                  | Collection of SMTP addresses of users, distribution lists, or resources to get availability information for                          |         |
| Start At                   | ISO 8601 formatted timestamp without timezone information.                                                                           |         |
| Start Timezone             | Timezone for the start time of the event. Use the List Supported Timezones action for details on valid aliases/values for this user. | UTC     |
| End At                     | ISO 8601 formatted timestamp without timezone information.                                                                           |         |
| End Timezone               | Timezone for the end time of the event. Use the List Supported Timezones action for details on valid aliases/values for this user.   | UTC     |

### List Calendars

List all Calendars for the user

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The Outlook connection to use.                            |         |
| Page Limit | Maximum number of results to return per page.             |         |
| Page Skip  | Number of records to skip before returning results.       |         |
| Fetch All  | When true, fetches all pages of results using pagination. | false   |

### List Events

List all Events for the user

| Input       | Comments                                                                                                     | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The Outlook connection to use.                                                                               |         |
| Calendar ID | Unique identifier of the calendar to list events from. Lists all events for the current user if unspecified. |         |
| Page Limit  | Maximum number of results to return per page.                                                                |         |
| Page Skip   | Number of records to skip before returning results.                                                          |         |
| Fetch All   | When true, fetches all pages of results using pagination.                                                    | false   |

### List Mail Folders

Get the mail folder collection directly under the root folder of the signed-in user, or under the specified parent folder.

| Input            | Comments                                                                        | Default |
| ---------------- | ------------------------------------------------------------------------------- | ------- |
| Connection       | The Outlook connection to use.                                                  |         |
| Parent Folder ID | List all folders contained within this folder. Omit to list root-level folders. |         |
| Page Limit       | Maximum number of results to return per page.                                   |         |
| Page Skip        | Number of records to skip before returning results.                             |         |
| Fetch All        | When true, fetches all pages of results using pagination.                       | false   |

### List Mail Messages

List mail messages in a user's mailbox

| Input      | Comments                                                                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Outlook connection to use.                                                                                                                                                                                             |         |
| Folder ID  | Unique identifier of the folder. Omit to list all messages.                                                                                                                                                                |         |
| Search     | Search query to filter messages. Cannot be used with Filter. Refer to [Microsoft Graph search parameter documentation](https://learn.microsoft.com/en-us/graph/search-query-parameter) for query syntax.                   |         |
| Filter     | OData filter expression to apply to the messages. Cannot be used with Search. Refer to [Microsoft Graph filter parameter documentation](https://learn.microsoft.com/en-us/graph/filter-query-parameter) for filter syntax. |         |
| Page Limit | Maximum number of results to return per page.                                                                                                                                                                              |         |
| Page Skip  | Number of records to skip before returning results.                                                                                                                                                                        |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                                                                                                                                                  | false   |

### List Subscriptions

List all subscriptions for Microsoft Outlook

| Input                  | Comments                                              | Default |
| ---------------------- | ----------------------------------------------------- | ------- |
| Connection             | The Outlook connection to use.                        |         |
| Show Instance Webhooks | Show only subscriptions for this instance's webhooks. | true    |
| Fetch All              | Turn on to fetch all pages of results.                | true    |

### List Supported Languages

List supported languages for current user

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Outlook connection to use. |         |

### List Supported Timezones

List supported timezones for current user

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Outlook connection to use. |         |

### Raw Request

Send raw HTTP request to Microsoft Outlook

| Input                   | Comments                                                                                                                                                                                                                         | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/me/calendars), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/me/calendars, only /me/calendars is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                 | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                    | false   |

### Send Message

Send a new message

| Input               | Comments                                                                                                                                                                  | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Outlook connection to use.                                                                                                                                            |         |
| To                  | Recipient email addresses. Multiple addresses can be specified as a comma-separated list.                                                                                 |         |
| CC                  | Carbon copy email addresses. Multiple addresses can be specified as a comma-separated list.                                                                               |         |
| BCC                 | Blind carbon copy email addresses. Multiple addresses can be specified as a comma-separated list.                                                                         |         |
| Subject             | Subject line of the email message.                                                                                                                                        |         |
| Message Body        | Plain text or HTML body content of the email message.                                                                                                                     |         |
| Body Content Type   | Format of the message body content.                                                                                                                                       | html    |
| Attachments         | File attachments as key-value pairs. Specify the file name as the key (e.g., my-file.pdf) and the file data as the value.                                                 |         |
| Dynamic Attachments | Array of objects with "key" and "value" properties, where "key" is the file name and "value" is the binary file data. Typically used as a reference from a previous step. |         |

### Update Calendar

Update an existing Calendar

| Input       | Comments                                                                                                                                                                                               | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The Outlook connection to use.                                                                                                                                                                         |         |
| Calendar ID | The unique identifier of the calendar to modify.                                                                                                                                                       |         |
| Name        | The name of the calendar.                                                                                                                                                                              |         |
| Color       | Color of the calendar; see 'color' in the [Microsoft Graph calendar resource documentation](https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0#properties) for details | auto    |

### Update Event

Update an existing Event

| Input                     | Comments                                                                                                                                       | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The Outlook connection to use.                                                                                                                 |         |
| Event ID                  | Unique identifier of the calendar event.                                                                                                       |         |
| Location Name             | Name of the event location.                                                                                                                    |         |
| Subject                   | Subject of the calendar event.                                                                                                                 |         |
| Body (HTML)               | HTML body content of the event.                                                                                                                |         |
| Attendees Data Collection | Reference to data structures representing attendees. Will be merged with Attendees if both are specified.                                      |         |
| Type                      | Event attendees as key-value pairs. Specify the email address as the key and the attendee type (required, optional, or resource) as the value. |         |
| Start At                  | ISO 8601 formatted timestamp without timezone information.                                                                                     |         |
| Start Timezone            | Timezone for the start time of the event. Use the List Supported Timezones action for details on valid aliases/values for this user.           | UTC     |
| End At                    | ISO 8601 formatted timestamp without timezone information.                                                                                     |         |
| End Timezone              | Timezone for the end time of the event. Use the List Supported Timezones action for details on valid aliases/values for this user.             | UTC     |

### Update Event Subscription Expiration

Update existing Event subscription expiration for Microsoft Outlook

| Input                | Comments                                                                                                                                                                                          | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Outlook connection to use.                                                                                                                                                                    |         |
| Subscription ID      | Unique identifier of the webhook subscription.                                                                                                                                                    |         |
| Expiration Date/Time | Expiration date and time for the webhook subscription in ISO 8601 format. If unspecified, defaults to the current date/time plus 10070 minutes (close to the maximum permitted by the Graph API). |         |
