---
title: PagerDuty Connector
sidebar_label: PagerDuty
description: PagerDuty is a platform for managing on-call operations. This component supports PagerDuty REST API V2.
---

![PagerDuty](./assets/pagerduty.png#connector-icon)
PagerDuty is a platform for managing on-call operations. This component supports PagerDuty REST API V2.

## Connections

### Api Key

Your PagerDuty API Key

Steps to generate and use an API Key for PagerDuty:

1. [Log in to PagerDuty](https://app.pagerduty.com/) and navigate to [Integrations | API Access Keys](https://support.pagerduty.com/main/docs/api-access-keys#section-generate-a-user-token-rest-api-key).
2. Click the "Create New API Key" button.
3. Enter a description for the API key. Check "Read-only API Key" if read-only behavior is desired.
4. Click Create Key.
5. Copy the provided API Key into the connection's configuration.

| Input | Comments | Default |
| ----- | -------- | ------- |
| Token |          |         |

### OAuth 2.0

OAuth 2.0 flow

Steps to generate app credentials for [OAuth 2.0 for PagerDuty](https://developer.pagerduty.com/docs/b2a19cce2867a-classic-user-o-auth):

1. [Log in to PagerDuty](https://app.pagerduty.com/) and navigate to [Integrations | App Registration](https://developer.pagerduty.com/docs/dd91fbd09a1a1-register-an-app).
2. From the top menu, select **Integrations**.
3. Select **App Registration** from the menu to navigate to the **My Apps** page.
4. On the **My Apps** page, select **New App**. Enter a name for your app and a brief description.
5. Check the box next to **OAuth2.0** and/or **Events Integration.**
6. For Authorization select one of the following:
   1. [**Scoped OAuth**](https://developer.pagerduty.com/docs/f59fdbd94ceab-o-auth-functionality#scoped-oauth) - New OAuth client that allows granular read or write access to PagerDuty resources like incidents, services, users, with other benefits.
      1. Use the table below to select Read or Write access to each Resource your integration will need access to.
   2. [**Classic User OAuth**](https://developer.pagerduty.com/docs/f59fdbd94ceab-o-auth-functionality#scoped-oauth) - Existing OAuth client that allows apps to act on behalf of users, with read or write to all PagerDuty resources.
      1. Assign a permission scope of **Read** or **Read and Write**
7. In the Redirect URL field enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
8. Select **Register App**
9. Copy and save the Client ID and Client Secret into your integration.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                      | Default |
| ------------- | ----------------------------------------------------------------------------- | ------- |
| Scopes        | Classic User OAuth scope allowing read or read/write access to all resources. | write   |
| Client ID     | Client ID of your PagerDuty app                                               |         |
| Client Secret | Client Secret of your PagerDuty app                                           |         |

## Triggers

### Incidents Trigger

Handle Incident webhook notifications from PagerDuty.

| Input               | Comments                                       | Default |
| ------------------- | ---------------------------------------------- | ------- |
| Connection          |                                                |         |
| Incident Events     | The events that trigger the webhook.           |         |
| Webhook Description | The description of the webhook.                |         |
| Filter ID           | The ID of the object being used as the filter. |         |
| Filter Type         | The type of object being used as the filter.   |         |

### Service Trigger

Handle Service webhook notifications from PagerDuty.

| Input               | Comments                                       | Default |
| ------------------- | ---------------------------------------------- | ------- |
| Connection          |                                                |         |
| Service Events.     | The events that trigger the webhook.           |         |
| Webhook Description | The description of the webhook.                |         |
| Filter ID           | The ID of the object being used as the filter. |         |
| Filter Type         | The type of object being used as the filter.   |         |

## Actions

### Create Incident

Create an Incident

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Incident      | JSON object body of the incident to be created       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Incident Note

Create a note on an incident

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Incident ID   | The ID of the Incident                               |         |
| Note          | Note to create.                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Service

Create a service

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Service       | JSON object body of the Service to create            |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Template

Create a template in PagerDuty's API

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      |                                                      |         |
| Template Object | JSON object body of the new Template to be created   |         |
| Debug Request   | Enabling this flag will log out the current request. | false   |

### Create User

Create a user

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| User          | JSON object body of the User to create.              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Webhook Subscription

Create a webhook subscription

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Connection           |                                                      |         |
| Webhook Subscription |                                                      |         |
| Debug Request        | Enabling this flag will log out the current request. | false   |

### Delete All Instance Webhooks

Delete all webhooks associated with this instance

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete Service

Delete a service

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Service ID    | The ID of the Service.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Template

Delete a template

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Id            | The ID of the Template.                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete User

Delete a user

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Id            | The ID of the User to update.                        |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Webhook Subscription

Delete a webhook subscription

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Webhook ID.   | The ID of the webhook.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Enable Webhook Subscription

Enable a webhook subscription

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Webhook ID.   | The ID of the webhook.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Change Event

Get a Change Event

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Event Id      | The ID of the Change Event.                          |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Incident

Get an incident

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Incident ID   | The ID of the Incident                               |         |
| Include       | Array of additional details to include               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Incident Alert

Get an alert

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        |                                                      |         |
| Incident ID       | The ID of the Incident                               |         |
| Incident Alert ID | The ID of the Incident Alert                         |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Get Service

Get a service

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Service ID    | The ID of the Service.                               |         |
| Include       | Array of additional details to include.              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Template

Get a template

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Id            | The ID of the Template.                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get User

Get a user

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Id            | The ID of the User to update.                        |         |
| Include       | Array of additional Models to include in response.   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Webhook Subscription

Get a webhook subscription

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Webhook ID.   | The ID of the webhook.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Change Events

List Change Events

| Input           | Comments                                                                                                                                                              | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                       |         |
| Fetch All       | Performs pagination on this endpoint.                                                                                                                                 | false   |
| Limit           | The number of results per page.                                                                                                                                       |         |
| Offset          | Offset to start pagination search results.                                                                                                                            |         |
| Total           | By default the total field in pagination responses is set to null to provide the fastest possible response times. Set total to true for the response to be populated. | false   |
| Team Ids        | An array of team IDs.                                                                                                                                                 |         |
| Integration Ids | An array of integration IDs.                                                                                                                                          |         |
| Since           | The start of the date range over which you want to search, as a UTC ISO 8601 datetime string.                                                                         |         |
| Until           | The end of the date range over which you want to search, as a UTC ISO 8601 datetime string.                                                                           |         |
| Debug Request   | Enabling this flag will log out the current request.                                                                                                                  | false   |

### List Incident Alerts

List alerts for an incident

| Input         | Comments                                                                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                       |         |
| Incident ID   | The ID of the Incident                                                                                                                                                |         |
| Fetch All     | Performs pagination on this endpoint.                                                                                                                                 | false   |
| Limit         | The number of results per page.                                                                                                                                       |         |
| Offset        | Offset to start pagination search results.                                                                                                                            |         |
| Total         | By default the total field in pagination responses is set to null to provide the fastest possible response times. Set total to true for the response to be populated. | false   |
| Alert Key     | Alert de-duplication key                                                                                                                                              |         |
| Statuses      | Return only incidents with the given statuses                                                                                                                         |         |
| Sort By       | Used to specify both the field you wish to sort the results on (created_at/resolved_at), as well as the direction (asc/desc) of the results                           |         |
| Include       | Array of additional details to include                                                                                                                                |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                  | false   |

### List Incident Notes

List notes for an incident

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Incident ID   | The ID of the Incident                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Incidents

List incidents

| Input         | Comments                                                                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                       |         |
| Fetch All     | Performs pagination on this endpoint.                                                                                                                                 | false   |
| Limit         | The number of results per page.                                                                                                                                       |         |
| Offset        | Offset to start pagination search results.                                                                                                                            |         |
| Total         | By default the total field in pagination responses is set to null to provide the fastest possible response times. Set total to true for the response to be populated. | false   |
| Date Range    | When set to all, the since and until parameters and defaults are ignored                                                                                              |         |
| Incident Key  | Incident de-duplication key                                                                                                                                           |         |
| Service Ids   | Returns only the incidents associated with the passed service(s)                                                                                                      |         |
| Team Ids      | An array of team IDs.                                                                                                                                                 |         |
| User Ids      | Returns only the incidents currently assigned to the passed user(s)                                                                                                   |         |
| Urgencies     | Return only incidents with this urgency                                                                                                                               |         |
| Time Zone     | TZInfo-formatted time zone in which results will be rendered                                                                                                          |         |
| Statuses      | Return only incidents with the given statuses                                                                                                                         |         |
| Sort By       | Used to specify both the field you wish to sort the results on (incident_number/created_at/resolved_at/urgency), as well as the direction (asc/desc) of the results   |         |
| Include       | Array of additional details to include                                                                                                                                |         |
| Since         | The start of the date range over which you want to search, as a UTC ISO 8601 datetime string.                                                                         |         |
| Until         | The end of the date range over which you want to search, as a UTC ISO 8601 datetime string.                                                                           |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                  | false   |

### List Notifications

List notifications

| Input         | Comments                                                                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                       |         |
| Fetch All     | Performs pagination on this endpoint.                                                                                                                                 | false   |
| Since         | The start of the date range over which you want to search, as a UTC ISO 8601 datetime string.                                                                         |         |
| Until         | The end of the date range over which you want to search, as a UTC ISO 8601 datetime string.                                                                           |         |
| Limit         | The number of results per page.                                                                                                                                       |         |
| Offset        | Offset to start pagination search results.                                                                                                                            |         |
| Total         | By default the total field in pagination responses is set to null to provide the fastest possible response times. Set total to true for the response to be populated. | false   |
| Time Zone     | TZInfo-formatted time zone in which results will be rendered                                                                                                          |         |
| Filter        | Return notification of this type only                                                                                                                                 |         |
| Include       | Array of additional details to include                                                                                                                                |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                  | false   |

### List Priorities

List priorities

| Input         | Comments                                                                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                       |         |
| Fetch All     | Performs pagination on this endpoint.                                                                                                                                 | false   |
| Limit         | The number of results per page.                                                                                                                                       |         |
| Offset        | Offset to start pagination search results.                                                                                                                            |         |
| Total         | By default the total field in pagination responses is set to null to provide the fastest possible response times. Set total to true for the response to be populated. | false   |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                  | false   |

### List Services

List services

| Input         | Comments                                                                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                       |         |
| Fetch All     | Performs pagination on this endpoint.                                                                                                                                 | false   |
| Query         | Filters the result, showing only the records whose name matches the query.                                                                                            |         |
| Limit         | The number of results per page.                                                                                                                                       |         |
| Offset        | Offset to start pagination search results.                                                                                                                            |         |
| Total         | By default the total field in pagination responses is set to null to provide the fastest possible response times. Set total to true for the response to be populated. | false   |
| Team Ids      | An array of team IDs.                                                                                                                                                 |         |
| Time Zone     | TZInfo-formatted time zone in which results will be rendered                                                                                                          |         |
| Sort By       | Used to specify the field you wish to sort the results on.                                                                                                            |         |
| Include       | Array of additional details to include.                                                                                                                               |         |
| Name          | Filters the results, showing only services with the specified name                                                                                                    |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                  | false   |

### List Templates

List all templates

| Input         | Comments                                                                                                                                                              | Default        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection    |                                                                                                                                                                       |                |
| Fetch All     | Performs pagination on this endpoint.                                                                                                                                 | false          |
| Limit         | The number of results per page.                                                                                                                                       |                |
| Offset        | Offset to start pagination search results.                                                                                                                            |                |
| Total         | By default the total field in pagination responses is set to null to provide the fastest possible response times. Set total to true for the response to be populated. | false          |
| Query         | Template name or description to search                                                                                                                                |                |
| Template Type | Filters templates by type.                                                                                                                                            |                |
| Sort By       | Used to specify both the field you wish to sort the results on (name/created_at), as well as the direction (asc/desc) of the results                                  | created_at:asc |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                  | false          |

### List Users

List all users

| Input         | Comments                                                                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                       |         |
| Fetch All     | Performs pagination on this endpoint.                                                                                                                                 | false   |
| Query         | Filters the result, showing only the records whose name matches the query.                                                                                            |         |
| Team Ids      | An array of team IDs.                                                                                                                                                 |         |
| Limit         | The number of results per page.                                                                                                                                       |         |
| Offset        | Offset to start pagination search results.                                                                                                                            |         |
| Total         | By default the total field in pagination responses is set to null to provide the fastest possible response times. Set total to true for the response to be populated. | false   |
| Include       | Array of additional Models to include in response.                                                                                                                    |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                  | false   |

### List Webhook Subscriptions

List webhook subscriptions

| Input         | Comments                                                                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                       |         |
| Fetch All     | Performs pagination on this endpoint.                                                                                                                                 | false   |
| Limit         | The number of results per page.                                                                                                                                       |         |
| Offset        | Offset to start pagination search results.                                                                                                                            |         |
| Total         | By default the total field in pagination responses is set to null to provide the fastest possible response times. Set total to true for the response to be populated. | false   |
| Filter Type   | The type of resource to filter upon.                                                                                                                                  |         |
| Filter Id     | The ID of the resource to filter upon.                                                                                                                                |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                  | false   |

### Manage Incident Alerts

Manage alerts

| Input         | Comments                                                                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                       |         |
| Incident ID   | The ID of the Incident                                                                                                                                                |         |
| Limit         | The number of results per page.                                                                                                                                       |         |
| Offset        | Offset to start pagination search results.                                                                                                                            |         |
| Total         | By default the total field in pagination responses is set to null to provide the fastest possible response times. Set total to true for the response to be populated. | false   |
| Alerts        | An array of alert objects, including the parameters to update for each alert                                                                                          |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                  | false   |

### Manage Incidents

Manage Incidents

| Input         | Comments                                                                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                       |         |
| Limit         | The number of results per page.                                                                                                                                       |         |
| Offset        | Offset to start pagination search results.                                                                                                                            |         |
| Total         | By default the total field in pagination responses is set to null to provide the fastest possible response times. Set total to true for the response to be populated. | false   |
| Incidents     | An array of incidents, including the parameters to update.                                                                                                            |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                  | false   |

### Raw Request

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

### Render Template

Render a template

| Input          | Comments                                                             | Default |
| -------------- | -------------------------------------------------------------------- | ------- |
| Connection     |                                                                      |         |
| Incident ID    | The ID of the Incident                                               |         |
| Id             | The ID of the Template.                                              |         |
| Update Message | An optional status update message that will be sent to the template. |         |
| Debug Request  | Enabling this flag will log out the current request.                 | false   |

### Send Change Event

Send Change Event to Events API

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Change Event To Send | The JSON object body of the event.                   |         |
| Debug Request        | Enabling this flag will log out the current request. | false   |

### Send Event

Sends PagerDuty a trigger event to report a new event

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Event to Send | The JSON object body of the event.                   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Test Webhook Subscription

Test a webhook subscription

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Webhook ID.   | The ID of the webhook.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Change Event

Update a Change Event

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| Connection             |                                                      |         |
| Event Id               | The ID of the Change Event.                          |         |
| Change Event to Update | The JSON object body of the event.                   |         |
| Debug Request          | Enabling this flag will log out the current request. | false   |

### Update Incident

Update an incident

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Incident ID   | The ID of the Incident                               |         |
| Incident      | The parameters of the incident to update             |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Incident Alert

Update an incident alert

| Input             | Comments                                                                     | Default |
| ----------------- | ---------------------------------------------------------------------------- | ------- |
| Connection        |                                                                              |         |
| Incident ID       | The ID of the Incident                                                       |         |
| Incident Alert ID | The ID of the Incident Alert                                                 |         |
| Alerts            | An array of alert objects, including the parameters to update for each alert |         |
| Debug Request     | Enabling this flag will log out the current request.                         | false   |

### Update Service

Update a service

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Service ID    | The ID of the Service.                               |         |
| Service       | JSON object body of the Service to update            |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Template

Update a template

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Id            | The ID of the Template.                              |         |
| Template      | JSON object body of the Template to be updated       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update User

Update a user

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Id            | The ID of the User to update.                        |         |
| User          | JSON object body of the User to create.              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Webhook Subscription

Update a webhook subscription

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| Connection             |                                                      |         |
| Webhook ID.            | The ID of the webhook.                               |         |
| Update Webhook Payload | The updated webhook subscription object.             |         |
| Debug Request          | Enabling this flag will log out the current request. | false   |
