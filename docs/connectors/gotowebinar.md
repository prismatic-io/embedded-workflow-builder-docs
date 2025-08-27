---
title: GoTo Webinar Connector
sidebar_label: GoTo Webinar
description: GoTo Webinar is a platform for hosting, managing, and attending live or pre-recorded webinars.
---

![GoTo Webinar](./assets/gotowebinar.png#connector-icon)
GoTo Webinar is a platform for hosting, managing, and attending live or pre-recorded webinars.

## Connections

### OAuth 2.0

GoTo Webinar OAuth2 Connection

Creating an [OAuth](https://developer.goto.com/Authentication) Client:

1. In the GoTo Developer portal, navigate to [**OAuth Clients**](https://developer.logmeininc.com/clients) . Choose **Create a client** to create a new client.
2. If you already have clients, they are listed here. Scroll to the bottom of this listing and select **Create a New Client**.
3. On the Details page, enter a Client name, an optional Description, and enter the Redirect URI as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
4. On the next page, select the proper scopes needed for a Goto Webinar integration.
5. The next page will provide the Client ID and Client Secret. Along with the assigned scopes from the previous page, enter these into the connection configuration of the integration.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                | Default                  |
| ------------- | ------------------------------------------------------- | ------------------------ |
| Scopes        | Space separated list of OAuth2 scopes for GoTo Webinar. | identity:scim.me collab: |
| Client ID     | The OAuth2 Client ID for GoTo Webinar.                  |                          |
| Client Secret | The OAuth2 Client Secret for GoTo Webinar.              |                          |
| Organizer Key | The GoTo Webinar Organizer Key.                         |                          |

## Triggers

### User Subscription

Triggers when a user subscribes to a plan

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    |                                           |         |
| Event Name    | The name of the event to subscribe to.    |         |
| Event Version | The version of the event to subscribe to. | 1.0.0   |

## Actions

### Cancel Webinar

Cancels a specific webinar.

| Input                   | Comments                                                                                                                 | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                          |         |
| Webinar Key             | The key identifier of the webinar.                                                                                       |         |
| Send Cancellation Email | Indicates whether cancellation notice emails should be sent. Default behavior is false.                                  |         |
| Delete All              | Specifies whether all scheduled sessions should be deleted if the webinar is part of a series. Default behavior is true. | false   |

### Create Registrant

Register an attendee for a scheduled webinar.

| Input                  | Comments                                                                                                          | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                   |         |
| Webinar Key            | The key identifier of the webinar.                                                                                |         |
| First Name             | The first name of the registrant.                                                                                 |         |
| Last Name              | The last name of the registrant.                                                                                  |         |
| Email                  | The email address of the registrant.                                                                              |         |
| Source                 | The source that led to the registration. This can be any string like 'Newsletter 123' or 'Marketing campaign ABC' |         |
| Address                | The address of the registrant.                                                                                    |         |
| City                   | The city of the registrant.                                                                                       |         |
| State                  | The state of the registrant.                                                                                      |         |
| Zip Code               | The zip code of the registrant.                                                                                   |         |
| Country                | The country of the registrant.                                                                                    |         |
| Phone                  | The phone number of the registrant.                                                                               |         |
| Organization           | The organization of the registrant.                                                                               |         |
| Job Title              | The job title of the registrant.                                                                                  |         |
| Questions and Comments | Any questions or comments the registrant has.                                                                     |         |
| Industry               | The industry of the registrant.                                                                                   |         |
| Number of Employees    | The number of employees in the organization.                                                                      |         |
| Purchasing Time Frame  | The time frame within which the product will be purchased.                                                        |         |
| Purchasing Role        | The role of the registrant in the purchasing process.                                                             |         |
| Responses              | The responses to the custom questions.                                                                            |         |

### Create User Subscription

A new user subscriptions will be created as a webhook.

| Input         | Comments                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                      |         |
| Webhook URL   | A HTTPs url that can accept posted events. It should return 200 OK for GET requests. |         |
| Event Name    | The name of the event to subscribe to.                                               |         |
| Event Version | The version of the event to subscribe to.                                            | 1.0.0   |

### Create Webinar

Creates a single session webinar, a sequence of webinars, or a series of webinars.

| Input                                | Comments                                                                                                                                                                                                                                               | Default |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                           |                                                                                                                                                                                                                                                        |         |
| Subject                              | The subject of the webinar                                                                                                                                                                                                                             |         |
| Description                          | The description of the webinar                                                                                                                                                                                                                         |         |
| Webinar Type                         | The type of the webinar. if 'Single Session' is selected, the webinar will be a single session. if 'Series' is selected, the webinar will be a series. if 'Sequence' is selected, the webinar will be a sequence.                                      |         |
| Experience Type                      | The experience type of the webinar.                                                                                                                                                                                                                    | CLASSIC |
| Time Range for Webinar               | Time Range Array for the webinar. Please note that the examples provided describe the expected payload given all webinar types. Only one array should be used based on the webinar type.                                                               |         |
| Timezone                             | The time zone where the webinar is taking place (must be a valid time zone ID). If this parameter is not passed, the timezone of the organizer's profile will be used.                                                                                 |         |
| Locale                               | The locale to use.                                                                                                                                                                                                                                     |         |
| Recording Asset Key                  | The recording asset with which the simulive webinar should be created from. In case the recordingasset was created as an online recording the simulive webinar settings, poll and surveys would be copied from the webinar whose session was recorded. |         |
| Is On Demand                         | A boolean flag indicating if the webinar should be On-Demand.                                                                                                                                                                                          | false   |
| Is Breakout                          | A boolean flag indicating if the webinar should be breakout.                                                                                                                                                                                           | false   |
| Is Password Protected                | Indicates if the webinar is password protected.                                                                                                                                                                                                        | false   |
| Should Send Confirmation Email       | Whether or not to send a confirmation email to the registrants.                                                                                                                                                                                        |         |
| Should Send Seminder Email           | Whether or not to send a reminder email to the registrants.                                                                                                                                                                                            |         |
| Should Send Absentee Follow Up Email | Whether or not to send an absentee follow up email to the registrants.                                                                                                                                                                                 |         |
| Should Send Attendee Follow Up Email | Whether or not to send an attendee follow up email to the registrants.                                                                                                                                                                                 |         |

### Delete Instanced Subscriptions

Deletes all subscriptions that point to a flow in this instance

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete Registrant

Removes a webinar registrant from current registrations for the specified webinar. The webinar must be a scheduled, future webinar.

| Input          | Comments                           | Default |
| -------------- | ---------------------------------- | ------- |
| Connection     |                                    |         |
| Webinar Key    | The key identifier of the webinar. |         |
| Registrant Key | The key of the registrant.         |         |

### Delete User Subscriptions

Deletes one or more user subscriptions.

| Input                  | Comments                                                                                                                                                                                           | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                    |         |
| User Subscription Keys | The subscription keys to act upon.                                                                                                                                                                 |         |
| Delete Webhooks        | Set to true if you want the affiliated webhook deleted with the user subscription. Note, deleting the webhook will also delete any other user subscriptions tied to the corresponding webhook key. | false   |

### Get Attendee

Retrieve registration details for a particular attendee of a specific webinar session

| Input          | Comments                           | Default |
| -------------- | ---------------------------------- | ------- |
| Connection     |                                    |         |
| Webinar Key    | The key identifier of the webinar. |         |
| Session Key    | The key of the webinar session.    |         |
| Registrant Key | The key of the registrant.         |         |

### Get Registrant

Retrieve registration details for a specific registrant.

| Input          | Comments                           | Default |
| -------------- | ---------------------------------- | ------- |
| Connection     |                                    |         |
| Webinar Key    | The key identifier of the webinar. |         |
| Registrant Key | The key of the registrant.         |         |

### Get User Subscription

Retrieve a user subscription by User Subscription Key.

| Input                 | Comments                                        | Default |
| --------------------- | ----------------------------------------------- | ------- |
| Connection            |                                                 |         |
| User Subscription Key | The unique identifier of the user subscription. |         |

### Get Webinars

Returns upcoming and past webinars for the currently authenticated organizer that are scheduled within the specified date/time range.

| Input       | Comments                                                                                                                       | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  |                                                                                                                                |         |
| Fetch All   | If true, all pages will be fetched. If false, only the first page will be fetched.                                             | false   |
| Account Key | The key of the account. If using this input instead of the organizer key, the action will retrieve the webinars by Account Key |         |
| From Time   | Start of the datetime range in ISO8601 UTC format.                                                                             |         |
| From Time   | End of the datetime range in ISO8601 UTC format.                                                                               |         |
| Page Number | The page number to be displayed. The first page is 0.                                                                          |         |
| Page Size   | The page size to use in pagination, Maximum value is 200.                                                                      |         |

### List All Attendees for all Webinar Sessions

Returns all attendees for all sessions of the specified webinar.

| Input       | Comments                                                                           | Default |
| ----------- | ---------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                    |         |
| Fetch All   | If true, all pages will be fetched. If false, only the first page will be fetched. | false   |
| Webinar Key | The key identifier of the webinar.                                                 |         |

### List Registrants

Retrieve registration details for all registrants of a specific webinar.

| Input       | Comments                                                  | Default |
| ----------- | --------------------------------------------------------- | ------- |
| Connection  |                                                           |         |
| Webinar Key | The key identifier of the webinar.                        |         |
| Page Number | The page number to be displayed. The first page is 0.     |         |
| Page Size   | The page size to use in pagination, Maximum value is 200. |         |

### List Session Attendees

Retrieve details for all attendees of a specific webinar session.

| Input       | Comments                           | Default |
| ----------- | ---------------------------------- | ------- |
| Connection  |                                    |         |
| Webinar Key | The key identifier of the webinar. |         |
| Session Key | The key of the webinar session.    |         |

### List User Subscriptions

Retrieve a list of user subscriptions.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Update User Subscription

Updates an existing user subscription.

| Input                   | Comments                                                                             | Default |
| ----------------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                      |         |
| Webhook Key             | The key of the webhook to update                                                     |         |
| User Subscription Key   | The key of the user subscription to update                                           |         |
| User Subscription State | The state of the user subscription                                                   |         |
| Webhook URL             | A HTTPs url that can accept posted events. It should return 200 OK for GET requests. |         |

### Update Webinar

Updates a specific webinar.

| Input                                | Comments                                                                                                                                                               | Default |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                           |                                                                                                                                                                        |         |
| Webinar Key                          | The key identifier of the webinar.                                                                                                                                     |         |
| Notify Participants                  | Notify participants of the webinar.                                                                                                                                    | false   |
| Subject                              | The subject of the webinar                                                                                                                                             |         |
| Description                          | The description of the webinar                                                                                                                                         |         |
| Time Range for Webinar               | The time range of the webinar.                                                                                                                                         |         |
| Timezone                             | The time zone where the webinar is taking place (must be a valid time zone ID). If this parameter is not passed, the timezone of the organizer's profile will be used. |         |
| Locale                               | The locale to use.                                                                                                                                                     |         |
| Should Send Confirmation Email       | Whether or not to send a confirmation email to the registrants.                                                                                                        |         |
| Should Send Seminder Email           | Whether or not to send a reminder email to the registrants.                                                                                                            |         |
| Should Send Absentee Follow Up Email | Whether or not to send an absentee follow up email to the registrants.                                                                                                 |         |
| Should Send Attendee Follow Up Email | Whether or not to send an attendee follow up email to the registrants.                                                                                                 |         |
