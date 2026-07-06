---
title: GoTo Webinar Connector
sidebar_label: GoTo Webinar
description: GoTo Webinar is a platform for hosting, managing, and attending live or pre-recorded webinars.
---

![GoTo Webinar](./assets/gotowebinar.png#connector-icon)
[GoTo Webinar](https://www.goto.com/webinar) is a platform for hosting, managing, and attending live or pre-recorded webinars.
This component allows scheduling, managing, and subscribing to webinars, registrants, and attendees.

## API Documentation

This component was built using the [GoTo Webinar 2.0 REST API](https://developer.goto.com/GoToWebinarV2).

## Connections

### OAuth 2.0 {#gotowebinaroauth2connection}

Authenticate requests to GoTo Webinar using OAuth 2.0.

To connect to GoTo Webinar, create an [OAuth](https://developer.goto.com/Authentication) client in the GoTo Developer portal.

#### Prerequisites

- A GoTo Developer account
- An Organizer Key for the GoTo Webinar account

#### Setup Steps

1. In the GoTo Developer portal, navigate to [**OAuth Clients**](https://developer.logmeininc.com/clients) and choose **Create a client** to create a new client.
2. If clients already exist, they are listed here. Scroll to the bottom of this listing and select **Create a New Client**.
3. On the **Details** page, enter a **Client name**, an optional **Description**, and enter the Redirect URI as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
4. On the next page, select the proper scopes needed for a GoTo Webinar integration.
5. The next page provides the **Client ID** and **Client Secret**. Take note of these values along with the assigned scopes from the previous page.

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the OAuth client.
- For **Scopes**, enter the space-separated scopes assigned to the OAuth client.
- Enter the **Organizer Key** for the GoTo Webinar account.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                | Default                  |
| ------------- | ------------------------------------------------------- | ------------------------ |
| Scopes        | Space separated list of OAuth2 scopes for GoTo Webinar. | identity:scim.me collab: |
| Client ID     | The OAuth2 Client ID for GoTo Webinar.                  |                          |
| Client Secret | The OAuth2 Client Secret for GoTo Webinar.              |                          |
| Organizer Key | The GoTo Webinar Organizer Key.                         |                          |

## Triggers

### New Registrants {#pollchangestrigger}

Fetches new registrants added to a GoTo Webinar webinar on a configured schedule.

| Input       | Comments                               | Default |
| ----------- | -------------------------------------- | ------- |
| Connection  |                                        |         |
| Webinar Key | The unique identifier for the webinar. |         |

### User Subscription {#usersubscriptiontrigger}

Receive event notifications from GoTo Webinar. Automatically creates and manages a webhook subscription for the selected event when the instance is deployed, and removes the subscription when the instance is deleted.

| Input         | Comments                                            | Default |
| ------------- | --------------------------------------------------- | ------- |
| Connection    |                                                     |         |
| Event Name    | The event to subscribe to.                          |         |
| Event Version | The schema version of the event payload to receive. | 1.0.0   |

## Actions

### Cancel Webinar {#cancelwebinar}

Cancels a specific webinar.

| Input                   | Comments                                                                                                                 | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                          |         |
| Webinar Key             | The unique identifier for the webinar.                                                                                   |         |
| Send Cancellation Email | Indicates whether cancellation notice emails should be sent. Default behavior is false.                                  |         |
| Delete All              | Specifies whether all scheduled sessions should be deleted if the webinar is part of a series. Default behavior is true. | false   |

### Create Registrant {#createregistrant}

Register an attendee for a scheduled webinar.

| Input                  | Comments                                                                                                           | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                                                    |         |
| Webinar Key            | The unique identifier for the webinar.                                                                             |         |
| First Name             | The first name of the registrant.                                                                                  |         |
| Last Name              | The last name of the registrant.                                                                                   |         |
| Email                  | The email address of the registrant.                                                                               |         |
| Source                 | The source that led to the registration. This can be any string like 'Newsletter 123' or 'Marketing campaign ABC'. |         |
| Address                | The street address of the registrant.                                                                              |         |
| City                   | The city of the registrant.                                                                                        |         |
| State                  | The state or province of the registrant.                                                                           |         |
| Zip Code               | The postal code of the registrant.                                                                                 |         |
| Country                | The country of the registrant.                                                                                     |         |
| Phone                  | The phone number of the registrant.                                                                                |         |
| Organization           | The organization the registrant belongs to.                                                                        |         |
| Job Title              | The job title of the registrant.                                                                                   |         |
| Questions and Comments | Any questions or comments submitted by the registrant.                                                             |         |
| Industry               | The industry the registrant works in.                                                                              |         |
| Number of Employees    | The number of employees in the registrant's organization.                                                          |         |
| Purchasing Time Frame  | The time frame within which the product will be purchased.                                                         |         |
| Purchasing Role        | The role of the registrant in the purchasing process.                                                              |         |
| Responses              | The answers to the webinar's custom registration questions. Provide a JSON array of question/response objects.     |         |

### Create User Subscription {#createusersubscription}

Create a new user subscription as a webhook.

| Input         | Comments                                                                                             | Default |
| ------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                      |         |
| Webhook URL   | The HTTPS URL that receives posted webhook events. The endpoint must return 200 OK for GET requests. |         |
| Event Name    | The event to subscribe to.                                                                           |         |
| Event Version | The schema version of the event payload to receive.                                                  | 1.0.0   |

### Create Webinar {#createwebinar}

Creates a single session webinar, a sequence of webinars, or a series of webinars.

| Input                                | Comments                                                                                                                                                                                                                                               | Default |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                           |                                                                                                                                                                                                                                                        |         |
| Subject                              | The title displayed for the webinar.                                                                                                                                                                                                                   |         |
| Description                          | A summary of what the webinar covers.                                                                                                                                                                                                                  |         |
| Webinar Type                         | The scheduling format for the webinar. Select 'Single Session' for a one-time event, 'Series' for multiple related sessions, or 'Sequence' for an ordered set of sessions.                                                                             |         |
| Experience Type                      | The experience type of the webinar.                                                                                                                                                                                                                    | CLASSIC |
| Time Range for Webinar               | Time Range Array for the webinar. Please note that the examples provided describe the expected payload given all webinar types. Only one array should be used based on the webinar type.                                                               |         |
| Timezone                             | The time zone where the webinar is taking place (must be a valid time zone ID). If this parameter is not passed, the timezone of the organizer's profile will be used.                                                                                 |         |
| Locale                               | The language and region used for the webinar's display text.                                                                                                                                                                                           |         |
| Recording Asset Key                  | The recording asset with which the simulive webinar should be created from. In case the recordingasset was created as an online recording the simulive webinar settings, poll and surveys would be copied from the webinar whose session was recorded. |         |
| Is On Demand                         | A boolean flag indicating if the webinar should be On-Demand.                                                                                                                                                                                          | false   |
| Is Breakout                          | A boolean flag indicating if the webinar should be breakout.                                                                                                                                                                                           | false   |
| Is Password Protected                | Indicates if the webinar is password protected.                                                                                                                                                                                                        | false   |
| Should Send Confirmation Email       | Whether or not to send a confirmation email to the registrants.                                                                                                                                                                                        |         |
| Should Send Reminder Email           | Whether or not to send a reminder email to the registrants.                                                                                                                                                                                            |         |
| Should Send Absentee Follow Up Email | Whether or not to send an absentee follow up email to the registrants.                                                                                                                                                                                 |         |
| Should Send Attendee Follow Up Email | Whether or not to send an attendee follow up email to the registrants.                                                                                                                                                                                 |         |

### Delete Instanced Subscriptions {#deleteinstancedwebhooksaction}

Delete all subscriptions that point to a flow in this instance.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete Registrant {#deleteregistrant}

Removes a webinar registrant from current registrations for the specified webinar. The webinar must be a scheduled, future webinar.

| Input          | Comments                                  | Default |
| -------------- | ----------------------------------------- | ------- |
| Connection     |                                           |         |
| Webinar Key    | The unique identifier for the webinar.    |         |
| Registrant Key | The unique identifier for the registrant. |         |

### Delete User Subscriptions {#deleteusersubscription}

Deletes one or more user subscriptions.

| Input                  | Comments                                                                                                                                                                                           | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                    |         |
| User Subscription Keys | The user subscription keys to act upon. Provide a JSON array of key strings.                                                                                                                       |         |
| Delete Webhooks        | When true, the affiliated webhook is deleted along with the user subscription. Note that deleting the webhook will also delete any other user subscriptions tied to the corresponding webhook key. | false   |

### Get Attendee {#getattendee}

Retrieve registration details for a particular attendee of a specific webinar session.

| Input          | Comments                                       | Default |
| -------------- | ---------------------------------------------- | ------- |
| Connection     |                                                |         |
| Webinar Key    | The unique identifier for the webinar.         |         |
| Session Key    | The unique identifier for the webinar session. |         |
| Registrant Key | The unique identifier for the registrant.      |         |

### Get Registrant {#getregistrant}

Retrieve registration details for a specific registrant.

| Input          | Comments                                  | Default |
| -------------- | ----------------------------------------- | ------- |
| Connection     |                                           |         |
| Webinar Key    | The unique identifier for the webinar.    |         |
| Registrant Key | The unique identifier for the registrant. |         |

### Get User Subscription {#getusersubscription}

Retrieve a user subscription by User Subscription Key.

| Input                 | Comments                                         | Default |
| --------------------- | ------------------------------------------------ | ------- |
| Connection            |                                                  |         |
| User Subscription Key | The unique identifier for the user subscription. |         |

### Get Webinars {#getwebinars}

Returns upcoming and past webinars for the currently authenticated organizer that are scheduled within the specified date/time range.

| Input       | Comments                                                                                                                                 | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                                          |         |
| From Time   | The start of the date/time range to query, in ISO 8601 UTC format. Format: YYYY-MM-DDThh:mm:ssZ.                                         |         |
| To Time     | The end of the date/time range to query, in ISO 8601 UTC format. Format: YYYY-MM-DDThh:mm:ssZ.                                           |         |
| Fetch All   | When true, automatically fetches all pages of results using pagination. When false, only the first page is fetched.                      | false   |
| Page Number | The zero-based index of the page to return. The first page is 0.                                                                         |         |
| Page Size   | The maximum number of results to return per page. The maximum value is 200.                                                              |         |
| Account Key | The unique identifier for the account. When provided instead of the organizer key, the action retrieves webinars scoped to this account. |         |

### List Attendees {#listattendees}

Retrieve all attendees for all sessions of the specified webinar.

| Input       | Comments                                                                                                            | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                     |         |
| Webinar Key | The unique identifier for the webinar.                                                                              |         |
| Fetch All   | When true, automatically fetches all pages of results using pagination. When false, only the first page is fetched. | false   |

### List Registrants {#listregistrants}

Retrieve registration details for all registrants of a specific webinar.

| Input       | Comments                                                                    | Default |
| ----------- | --------------------------------------------------------------------------- | ------- |
| Connection  |                                                                             |         |
| Webinar Key | The unique identifier for the webinar.                                      |         |
| Page Number | The zero-based index of the page to return. The first page is 0.            |         |
| Page Size   | The maximum number of results to return per page. The maximum value is 200. |         |

### List Session Attendees {#listsessionattendees}

Retrieve details for all attendees of a specific webinar session.

| Input       | Comments                                       | Default |
| ----------- | ---------------------------------------------- | ------- |
| Connection  |                                                |         |
| Webinar Key | The unique identifier for the webinar.         |         |
| Session Key | The unique identifier for the webinar session. |         |

### List User Subscriptions {#listusersubscriptions}

Retrieve a list of user subscriptions.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to GoTo Webinar.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/organizers), The base URL is already included. For example, in order to send a webinar request, only /organizer/{organizerKey}/webinars is entered in this field.          |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Update User Subscription {#updateusersubscription}

Updates an existing user subscription.

| Input                   | Comments                                                                                             | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                      |         |
| Webhook Key             | The unique identifier for the webhook to update.                                                     |         |
| User Subscription Key   | The unique identifier for the user subscription to update.                                           |         |
| User Subscription State | The status to apply to the user subscription.                                                        |         |
| Webhook URL             | The HTTPS URL that receives posted webhook events. The endpoint must return 200 OK for GET requests. |         |

### Update Webinar {#updatewebinar}

Updates a specific webinar.

| Input                                | Comments                                                                                                                                                               | Default |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                           |                                                                                                                                                                        |         |
| Webinar Key                          | The unique identifier for the webinar.                                                                                                                                 |         |
| Notify Participants                  | Notify participants of the webinar.                                                                                                                                    | false   |
| Subject                              | The title displayed for the webinar.                                                                                                                                   |         |
| Description                          | A summary of what the webinar covers.                                                                                                                                  |         |
| Time Range for Webinar               | The time range of the webinar.                                                                                                                                         |         |
| Timezone                             | The time zone where the webinar is taking place (must be a valid time zone ID). If this parameter is not passed, the timezone of the organizer's profile will be used. |         |
| Locale                               | The language and region used for the webinar's display text.                                                                                                           |         |
| Should Send Confirmation Email       | Whether or not to send a confirmation email to the registrants.                                                                                                        |         |
| Should Send Reminder Email           | Whether or not to send a reminder email to the registrants.                                                                                                            |         |
| Should Send Absentee Follow Up Email | Whether or not to send an absentee follow up email to the registrants.                                                                                                 |         |
| Should Send Attendee Follow Up Email | Whether or not to send an attendee follow up email to the registrants.                                                                                                 |         |
