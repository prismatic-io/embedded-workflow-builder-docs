---
title: PagerDuty Connector
sidebar_label: PagerDuty
description: PagerDuty is a platform for managing on-call operations. This component supports PagerDuty REST API V2.
---

![PagerDuty](./assets/pagerduty.png#connector-icon)
[PagerDuty](https://www.pagerduty.com/) is an industry leading incident management tool.

This component allows the creation and management of Incidents, events, and more.

## API Documentation

This component was built using the [PagerDuty REST API](https://developer.pagerduty.com/api-reference/e65c5833eeb07-pager-duty-api).

## Connections

### API Key {#pagerduty-api-key}

Authenticate requests using an API key.

To create a PagerDuty API Key connection, generate a REST API key from the PagerDuty account.

#### Prerequisites

- A PagerDuty account with administrative permissions to create API access keys
- Access to the [PagerDuty web app](https://app.pagerduty.com/)

#### Setup Steps

1. [Log in to PagerDuty](https://app.pagerduty.com/) and navigate to [Integrations | API Access Keys](https://support.pagerduty.com/main/docs/api-access-keys#section-generate-a-user-token-rest-api-key).
2. Click **Create New API Key**.
3. Enter a description for the API key. Check **Read-only API Key** if read-only behavior is desired.
4. Click **Create Key**.
5. Copy the provided API Key for use in the connection configuration.

#### Configure the Connection

- Create a connection of type **API Key**.
- Enter the **Token** copied from PagerDuty. This is the API token used to authenticate requests.

| Input | Comments                                               | Default |
| ----- | ------------------------------------------------------ | ------- |
| Token | The PagerDuty API token used to authenticate requests. |         |

### OAuth 2.0 {#pagerduty-oauth}

Authenticate requests using OAuth 2.0.

To create a PagerDuty OAuth 2.0 connection, register an app in PagerDuty to obtain a Client ID and Client Secret. For background, refer to [OAuth 2.0 for PagerDuty](https://developer.pagerduty.com/docs/b2a19cce2867a-classic-user-o-auth).

#### Prerequisites

- A PagerDuty account with permissions to register apps
- Access to the [PagerDuty App Registration page](https://developer.pagerduty.com/docs/dd91fbd09a1a1-register-an-app)

#### Setup Steps

1. [Log in to PagerDuty](https://app.pagerduty.com/) and navigate to [Integrations | App Registration](https://developer.pagerduty.com/docs/dd91fbd09a1a1-register-an-app).
2. From the top menu, select **Integrations**.
3. Select **App Registration** from the menu to navigate to the **My Apps** page.
4. On the **My Apps** page, select **New App**. Enter a name for the app and a brief description.
5. Check the box next to **OAuth 2.0** and/or **Events Integration**.
6. For Authorization select one of the following:
   1. [**Scoped OAuth**](https://developer.pagerduty.com/docs/f59fdbd94ceab-o-auth-functionality#scoped-oauth) - New OAuth client that allows granular read or write access to PagerDuty resources like incidents, services, users, with other benefits.
      1. Use the table to select Read or Write access to each Resource the integration requires.
   2. [**Classic User OAuth**](https://developer.pagerduty.com/docs/f59fdbd94ceab-o-auth-functionality#scoped-oauth) - Existing OAuth client that allows apps to act on behalf of users, with read or write to all PagerDuty resources.
      1. Assign a permission scope of **Read** or **Read and Write**.
7. In the **Redirect URL** field, enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
8. Select **Register App**.
9. Copy and save the Client ID and Client Secret for use in the connection configuration.

#### Configure the Connection

- Create a connection of type **OAuth 2.0**.
- Enter the **Scopes** granted to the app. Use `write` for read/write access or `read` for read-only access to all resources (Classic User OAuth).
- Enter the **Client ID** copied from the PagerDuty OAuth application.
- Enter the **Client Secret** copied from the PagerDuty OAuth application.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------- | ------- |
| Scopes        | The Classic User OAuth scope granting read or read/write access to all resources. | write   |
| Client ID     | The client ID of the PagerDuty OAuth application.                                 |         |
| Client Secret | The client secret of the PagerDuty OAuth application.                             |         |

## Triggers

### Incident Webhook {#incidentstrigger}

Receive incident webhook notifications from PagerDuty when a selected incident event occurs.

| Input               | Comments                                                | Default |
| ------------------- | ------------------------------------------------------- | ------- |
| Connection          | The PagerDuty connection to use.                        |         |
| Incident Events     | The incident events that trigger the webhook.           |         |
| Webhook Description | A descriptive label used to identify the webhook.       |         |
| Filter ID           | The unique identifier of the object used as the filter. |         |
| Filter Type         | The type of object used as the filter.                  |         |

### New Incidents {#pollchangestrigger}

Fetches incidents created since the last execution on a recurring schedule.

| Input              | Comments                                                                      | Default |
| ------------------ | ----------------------------------------------------------------------------- | ------- |
| Connection         | The PagerDuty connection to use.                                              |         |
| Show New Incidents | When enabled, newly created incidents will be included in the trigger output. | true    |

### Service Webhook {#servicetrigger}

Receive service webhook notifications from PagerDuty when a selected service event occurs.

| Input               | Comments                                                | Default |
| ------------------- | ------------------------------------------------------- | ------- |
| Connection          | The PagerDuty connection to use.                        |         |
| Service Events      | The service events that trigger the webhook.            |         |
| Webhook Description | A descriptive label used to identify the webhook.       |         |
| Filter ID           | The unique identifier of the object used as the filter. |         |
| Filter Type         | The type of object used as the filter.                  |         |

## Actions

### Create Incident {#createincident}

Create a new incident.

| Input      | Comments                                                | Default |
| ---------- | ------------------------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.                        |         |
| Incident   | The JSON object body describing the incident to create. |         |

### Create Incident Note {#createincidentnote}

Create a note on an incident.

| Input       | Comments                                                               | Default |
| ----------- | ---------------------------------------------------------------------- | ------- |
| Connection  | The PagerDuty connection to use.                                       |         |
| Incident ID | The unique identifier for the incident.                                |         |
| Note        | The JSON object containing the note content to attach to the incident. |         |

### Create Service {#createservice}

Create a new service.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection | The PagerDuty connection to use.                       |         |
| Service    | The JSON object body describing the service to create. |         |

### Create Template {#createtemplate}

Create a new template.

| Input           | Comments                                                | Default |
| --------------- | ------------------------------------------------------- | ------- |
| Connection      | The PagerDuty connection to use.                        |         |
| Template Object | The JSON object body describing the template to create. |         |

### Create User {#createuser}

Create a new user.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.                    |         |
| User       | The JSON object body describing the user to create. |         |

### Create Webhook Subscription {#createwebhooksubscription}

Create a new webhook subscription.

| Input                | Comments                                                            | Default |
| -------------------- | ------------------------------------------------------------------- | ------- |
| Connection           | The PagerDuty connection to use.                                    |         |
| Webhook Subscription | The JSON object body describing the webhook subscription to create. |         |

### Delete All Instance Webhooks {#deleteallinstancewebhooks}

Delete all webhook subscriptions associated with this instance.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The PagerDuty connection to use. |         |

### Delete Service {#deleteservice}

Delete a service by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.       |         |
| Service ID | The unique identifier for the service. |         |

### Delete Template {#deletetemplate}

Delete a template by ID.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The PagerDuty connection to use.        |         |
| Template ID | The unique identifier for the template. |         |

### Delete User {#deleteuser}

Delete a user by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The PagerDuty connection to use.    |         |
| User ID    | The unique identifier for the user. |         |

### Delete Webhook Subscription {#deletewebhooksubscription}

Delete a webhook subscription by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.       |         |
| Webhook ID | The unique identifier for the webhook. |         |

### Enable Webhook Subscription {#enablewebhooksubscription}

Enable a disabled webhook subscription.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.       |         |
| Webhook ID | The unique identifier for the webhook. |         |

### Get Change Event {#getchangeevent}

Retrieve a change event by ID.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.            |         |
| Event ID   | The unique identifier for the change event. |         |

### Get Incident {#getincident}

Retrieve an incident by ID.

| Input       | Comments                                           | Default |
| ----------- | -------------------------------------------------- | ------- |
| Connection  | The PagerDuty connection to use.                   |         |
| Incident ID | The unique identifier for the incident.            |         |
| Include     | The additional details to include in the response. |         |

### Get Incident Alert {#getincidentalert}

Retrieve a single alert from an incident.

| Input             | Comments                                      | Default |
| ----------------- | --------------------------------------------- | ------- |
| Connection        | The PagerDuty connection to use.              |         |
| Incident ID       | The unique identifier for the incident.       |         |
| Incident Alert ID | The unique identifier for the incident alert. |         |

### Get Service {#getservice}

Retrieve a service by ID.

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.                   |         |
| Service ID | The unique identifier for the service.             |         |
| Include    | The additional details to include in the response. |         |

### Get Template {#gettemplate}

Retrieve a template by ID.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The PagerDuty connection to use.        |         |
| Template ID | The unique identifier for the template. |         |

### Get User {#getuser}

Retrieve a user by ID.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.                  |         |
| User ID    | The unique identifier for the user.               |         |
| Include    | The additional models to include in the response. |         |

### Get Webhook Subscription {#getwebhooksubscription}

Retrieve a webhook subscription by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.       |         |
| Webhook ID | The unique identifier for the webhook. |         |

### List Change Events {#listchangeevents}

List change events with optional filters.

| Input           | Comments                                                                                                                                       | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The PagerDuty connection to use.                                                                                                               |         |
| Fetch All       | When true, automatically fetches all pages of results. When false, only the first page is returned.                                            | false   |
| Limit           | The maximum number of results to return per page.                                                                                              |         |
| Offset          | The number of results to skip before starting to return results. Used for pagination.                                                          |         |
| Total           | When true, the total field in pagination responses is populated. By default this field is null to provide the fastest possible response times. | false   |
| Team IDs        | The unique identifiers of the teams to filter results by.                                                                                      |         |
| Integration IDs | The unique identifiers of the integrations to filter results by.                                                                               |         |
| Since           | The start of the date range over which to search, as a UTC ISO 8601 datetime string.                                                           |         |
| Until           | The end of the date range over which to search, as a UTC ISO 8601 datetime string.                                                             |         |

### List Incident Alerts {#listincidentalerts}

List alerts for an incident.

| Input       | Comments                                                                                                                                       | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The PagerDuty connection to use.                                                                                                               |         |
| Incident ID | The unique identifier for the incident.                                                                                                        |         |
| Fetch All   | When true, automatically fetches all pages of results. When false, only the first page is returned.                                            | false   |
| Limit       | The maximum number of results to return per page.                                                                                              |         |
| Offset      | The number of results to skip before starting to return results. Used for pagination.                                                          |         |
| Total       | When true, the total field in pagination responses is populated. By default this field is null to provide the fastest possible response times. | false   |
| Alert Key   | The de-duplication key used to prevent duplicate alerts from being created.                                                                    |         |
| Statuses    | The statuses to filter incidents by.                                                                                                           |         |
| Sort By     | The field and direction used to sort results. Field options: created_at, resolved_at. Direction: asc or desc.                                  |         |
| Include     | The additional details to include in the response.                                                                                             |         |

### List Incident Notes {#listincidentnotes}

List notes for an incident.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The PagerDuty connection to use.        |         |
| Incident ID | The unique identifier for the incident. |         |

### List Incidents {#listincidents}

List incidents with optional filters.

| Input        | Comments                                                                                                                                                                 | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection   | The PagerDuty connection to use.                                                                                                                                         |         |
| Fetch All    | When true, automatically fetches all pages of results. When false, only the first page is returned.                                                                      | false   |
| Limit        | The maximum number of results to return per page.                                                                                                                        |         |
| Offset       | The number of results to skip before starting to return results. Used for pagination.                                                                                    |         |
| Total        | When true, the total field in pagination responses is populated. By default this field is null to provide the fastest possible response times.                           | false   |
| Date Range   | When set to 'all', the since and until parameters and defaults are ignored.                                                                                              |         |
| Incident Key | The de-duplication key used to prevent duplicate incidents from being created.                                                                                           |         |
| Service IDs  | The unique identifiers of the services to filter incidents by. Only incidents associated with the listed services are returned.                                          |         |
| Team IDs     | The unique identifiers of the teams to filter results by.                                                                                                                |         |
| User IDs     | The unique identifiers of the users currently assigned to the incidents to return.                                                                                       |         |
| Urgencies    | The urgency levels to filter incidents by.                                                                                                                               |         |
| Time Zone    | The TZInfo-formatted time zone in which results are rendered. Example: 'America/Los_Angeles'.                                                                            |         |
| Statuses     | The statuses to filter incidents by.                                                                                                                                     |         |
| Sort By      | The field and direction used to sort results. Field options: incident_number, created_at, resolved_at, urgency. Direction: asc or desc. Example: 'incident_number:desc'. |         |
| Include      | The additional details to include in the response.                                                                                                                       |         |
| Since        | The start of the date range over which to search, as a UTC ISO 8601 datetime string.                                                                                     |         |
| Until        | The end of the date range over which to search, as a UTC ISO 8601 datetime string.                                                                                       |         |

### List Notifications {#listnotifications}

List notifications sent within a specified time range.

| Input      | Comments                                                                                                                                       | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.                                                                                                               |         |
| Fetch All  | When true, automatically fetches all pages of results. When false, only the first page is returned.                                            | false   |
| Since      | The start of the date range over which to search, as a UTC ISO 8601 datetime string.                                                           |         |
| Until      | The end of the date range over which to search, as a UTC ISO 8601 datetime string.                                                             |         |
| Limit      | The maximum number of results to return per page.                                                                                              |         |
| Offset     | The number of results to skip before starting to return results. Used for pagination.                                                          |         |
| Total      | When true, the total field in pagination responses is populated. By default this field is null to provide the fastest possible response times. | false   |
| Time Zone  | The TZInfo-formatted time zone in which results are rendered. Example: 'America/Los_Angeles'.                                                  |         |
| Filter     | The notification type to filter results by.                                                                                                    |         |
| Include    | The additional details to include in the response.                                                                                             |         |

### List Priorities {#listpriorities}

List available incident priorities.

| Input      | Comments                                                                                                                                       | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.                                                                                                               |         |
| Fetch All  | When true, automatically fetches all pages of results. When false, only the first page is returned.                                            | false   |
| Limit      | The maximum number of results to return per page.                                                                                              |         |
| Offset     | The number of results to skip before starting to return results. Used for pagination.                                                          |         |
| Total      | When true, the total field in pagination responses is populated. By default this field is null to provide the fastest possible response times. | false   |

### List Services {#listservices}

List services with optional filters.

| Input      | Comments                                                                                                                                       | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.                                                                                                               |         |
| Fetch All  | When true, automatically fetches all pages of results. When false, only the first page is returned.                                            | false   |
| Query      | The search query used to filter results. Only records whose name matches the query are returned.                                               |         |
| Limit      | The maximum number of results to return per page.                                                                                              |         |
| Offset     | The number of results to skip before starting to return results. Used for pagination.                                                          |         |
| Total      | When true, the total field in pagination responses is populated. By default this field is null to provide the fastest possible response times. | false   |
| Team IDs   | The unique identifiers of the teams to filter results by.                                                                                      |         |
| Time Zone  | The TZInfo-formatted time zone in which results are rendered. Example: 'America/Los_Angeles'.                                                  |         |
| Sort By    | The field used to sort the results.                                                                                                            |         |
| Include    | The additional details to include in the response.                                                                                             |         |
| Name       | The name to filter results by. Only services with the specified name are returned.                                                             |         |

### List Templates {#gettemplates}

List all templates with optional filters.

| Input         | Comments                                                                                                                                       | Default        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection    | The PagerDuty connection to use.                                                                                                               |                |
| Fetch All     | When true, automatically fetches all pages of results. When false, only the first page is returned.                                            | false          |
| Limit         | The maximum number of results to return per page.                                                                                              |                |
| Offset        | The number of results to skip before starting to return results. Used for pagination.                                                          |                |
| Total         | When true, the total field in pagination responses is populated. By default this field is null to provide the fastest possible response times. | false          |
| Query         | The template name or description to search for.                                                                                                |                |
| Template Type | The template type used to filter results.                                                                                                      |                |
| Sort By       | The field and direction used to sort results. Field options: name, created_at. Direction: asc or desc.                                         | created_at:asc |

### List Users {#listusers}

List all users with optional filters.

| Input      | Comments                                                                                                                                       | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.                                                                                                               |         |
| Fetch All  | When true, automatically fetches all pages of results. When false, only the first page is returned.                                            | false   |
| Query      | The search query used to filter results. Only records whose name matches the query are returned.                                               |         |
| Team IDs   | The unique identifiers of the teams to filter results by.                                                                                      |         |
| Limit      | The maximum number of results to return per page.                                                                                              |         |
| Offset     | The number of results to skip before starting to return results. Used for pagination.                                                          |         |
| Total      | When true, the total field in pagination responses is populated. By default this field is null to provide the fastest possible response times. | false   |
| Include    | The additional models to include in the response.                                                                                              |         |

### List Webhook Subscriptions {#listwebhooksubscriptions}

List webhook subscriptions with optional filters.

| Input       | Comments                                                                                                                                       | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The PagerDuty connection to use.                                                                                                               |         |
| Fetch All   | When true, automatically fetches all pages of results. When false, only the first page is returned.                                            | false   |
| Limit       | The maximum number of results to return per page.                                                                                              |         |
| Offset      | The number of results to skip before starting to return results. Used for pagination.                                                          |         |
| Total       | When true, the total field in pagination responses is populated. By default this field is null to provide the fastest possible response times. | false   |
| Filter Type | The type of resource to filter results upon.                                                                                                   |         |
| Filter ID   | The unique identifier of the resource to filter results upon.                                                                                  |         |

### Manage Incident Alerts {#updateincidentalerts}

Update multiple alerts on an incident in bulk.

| Input       | Comments                                                                                                                                       | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The PagerDuty connection to use.                                                                                                               |         |
| Incident ID | The unique identifier for the incident.                                                                                                        |         |
| Limit       | The maximum number of results to return per page.                                                                                              |         |
| Offset      | The number of results to skip before starting to return results. Used for pagination.                                                          |         |
| Total       | When true, the total field in pagination responses is populated. By default this field is null to provide the fastest possible response times. | false   |
| Alerts      | The JSON array of alert objects, including the parameters to update for each alert.                                                            |         |

### Manage Incidents {#updateincidents}

Acknowledge, resolve, or update multiple incidents in bulk.

| Input      | Comments                                                                                                                                       | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.                                                                                                               |         |
| Limit      | The maximum number of results to return per page.                                                                                              |         |
| Offset     | The number of results to skip before starting to return results. Used for pagination.                                                          |         |
| Total      | When true, the total field in pagination responses is populated. By default this field is null to provide the fastest possible response times. | false   |
| Incidents  | The JSON array of incidents to manage, including the parameters to update.                                                                     |         |

### Raw Request {#rawrequest}

Issue a raw HTTP request

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
| URL                     | This is the URL to call.                                                                                                                                                                         |         |
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

### Render Template {#rendertemplate}

Render a template for a given incident.

| Input          | Comments                                                                 | Default |
| -------------- | ------------------------------------------------------------------------ | ------- |
| Connection     | The PagerDuty connection to use.                                         |         |
| Incident ID    | The unique identifier for the incident.                                  |         |
| Template ID    | The unique identifier for the template.                                  |         |
| Update Message | An optional status update message sent along with the rendered template. |         |

### Send Change Event {#sendchangeevent}

Send a change event to the Events API.

| Input                | Comments                                              | Default |
| -------------------- | ----------------------------------------------------- | ------- |
| Change Event To Send | The JSON object describing the event payload to send. |         |

### Send Event {#sendevent}

Send a trigger event to the Events API to report a new event.

| Input         | Comments                                              | Default |
| ------------- | ----------------------------------------------------- | ------- |
| Event to Send | The JSON object describing the event payload to send. |         |

### Test Webhook Subscription {#testwebhooksubscription}

Send a test ping to a webhook subscription.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.       |         |
| Webhook ID | The unique identifier for the webhook. |         |

### Update Change Event {#updatechangeevent}

Update an existing change event.

| Input                  | Comments                                              | Default |
| ---------------------- | ----------------------------------------------------- | ------- |
| Connection             | The PagerDuty connection to use.                      |         |
| Event ID               | The unique identifier for the change event.           |         |
| Change Event to Update | The JSON object describing the event payload to send. |         |

### Update Incident {#updateincident}

Update an existing incident.

| Input       | Comments                                                             | Default |
| ----------- | -------------------------------------------------------------------- | ------- |
| Connection  | The PagerDuty connection to use.                                     |         |
| Incident ID | The unique identifier for the incident.                              |         |
| Incident    | The JSON object containing the parameters of the incident to update. |         |

### Update Incident Alert {#updateincidentalert}

Update a single alert on an incident.

| Input             | Comments                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------------------- | ------- |
| Connection        | The PagerDuty connection to use.                                                    |         |
| Incident ID       | The unique identifier for the incident.                                             |         |
| Incident Alert ID | The unique identifier for the incident alert.                                       |         |
| Alerts            | The JSON array of alert objects, including the parameters to update for each alert. |         |

### Update Service {#updateservice}

Update an existing service.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection | The PagerDuty connection to use.                       |         |
| Service ID | The unique identifier for the service.                 |         |
| Service    | The JSON object body describing the service to update. |         |

### Update Template {#updatetemplate}

Update an existing template.

| Input       | Comments                                                | Default |
| ----------- | ------------------------------------------------------- | ------- |
| Connection  | The PagerDuty connection to use.                        |         |
| Template ID | The unique identifier for the template.                 |         |
| Template    | The JSON object body describing the template to update. |         |

### Update User {#updateuser}

Update an existing user.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The PagerDuty connection to use.                    |         |
| User ID    | The unique identifier for the user.                 |         |
| User       | The JSON object body describing the user to create. |         |

### Update Webhook Subscription {#updatewebhooksubscription}

Update an existing webhook subscription.

| Input                  | Comments                                                          | Default |
| ---------------------- | ----------------------------------------------------------------- | ------- |
| Connection             | The PagerDuty connection to use.                                  |         |
| Webhook ID             | The unique identifier for the webhook.                            |         |
| Update Webhook Payload | The JSON object body describing the updated webhook subscription. |         |
