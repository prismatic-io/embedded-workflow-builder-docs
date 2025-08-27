---
title: Calendly Connector
sidebar_label: Calendly
description: Calendly is an industry leading scheduling solution for businesses. Use the Calendly component to manage the scheduling of events; attendee availability; and retrieve pertinent data on users and attendees.
---

![Calendly](./assets/calendly.png#connector-icon)
Calendly is an industry leading scheduling solution for businesses. Use the Calendly component to manage the scheduling of events; attendee availability; and retrieve pertinent data on users and attendees.

## Connections

### OAuth 2.0 Connection

OAuth 2.0 Connection

Calendly requires a Developer Account to create applications for OAuth. Refer to the following [guide](https://developer.calendly.com/create-a-developer-account) for more information.

To Set up OAuth App:

1. Login to your Calendly Developer Account and navigate to the [Apps Portal](https://developer.calendly.com/console/apps)
2. Follow the Steps and enter the following information:
   1. Kind of app - Web
   2. Environment type - Production or Sandbox. You will likely need separate apps for each.
   3. Redirect URI - `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
3. Continue and copy your Client ID, Client Secret, and Webhook signing key for the connection configuration of your Integration.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                             | Default                                   |
| --------------- | ---------------------------------------------------- | ----------------------------------------- |
| Authorize URL   | The OAuth 2.0 Authorization URL for the Calendly API | https://auth.calendly.com/oauth/authorize |
| Token URL       | The OAuth 2.0 Token URL for the Calendly API         | https://auth.calendly.com/oauth/token     |
| Scopes          | Set the desired scopes. Example: default             | default                                   |
| Client ID       | Client Identifier of your app for the Calendly API   |                                           |
| Client Secret   | Client Secret of your app for the Calendly API       |                                           |
| Use Live Server | Use the live or mock server                          | false                                     |

## Triggers

### Scheduled Event

Receive data from scheduled events in real time with webhook subscriptions.

| Input              | Comments                                                                                                                                                                      | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                                               |         |
| Organization       | The unique reference to the organization that the webhook will be tied to.                                                                                                    |         |
| User               | The unique reference to the user that the webhook will be tied to.                                                                                                            |         |
| Webhook Event Name |                                                                                                                                                                               |         |
| Scope              | Indicates if the webhook subscription scope will be 'organization' or 'user'.                                                                                                 |         |
| Signing Key        | Optional secret key shared between your application and Calendly. See https://developer.calendly.com/api-docs/ZG9jOjM2MzE2MDM4-webhook-signatures for additional information. |         |

## Actions

### Cancel Event

Cancels specified event.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection |                                    |         |
| UUID       |                                    |         |
| Reason     | The reason for canceling the event |         |

### Create Share

Allows you to create an endpoint for the Customize Once and Share feature.

| Input                   | Comments                                                                                                                         | Default                                                                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection              |                                                                                                                                  |                                                                                                                                                        |
| Event Type              | The uri associated with the event type                                                                                           |                                                                                                                                                        |
| Name                    |                                                                                                                                  |                                                                                                                                                        |
| Duration                |                                                                                                                                  |                                                                                                                                                        |
| Period Type             |                                                                                                                                  |                                                                                                                                                        |
| Start Date              | is required when period_type is 'fixed' Format: YYYY-MM-DD                                                                       |                                                                                                                                                        |
| End Date                | is required when period_type is 'fixed' Format: YYYY-MM-DD                                                                       |                                                                                                                                                        |
| Max Booking Time        | is required when period_type is 'moving' or 'available_moving'Required when period_type is 'moving' or 'available_moving'.       |                                                                                                                                                        |
| Hide Location           | Determines if a location is hidden until invitee books a spot, only respected when there is a single custom location configured. | false                                                                                                                                                  |
| Location Configurations |                                                                                                                                  | <code>[{"location":"123 Abc St.","additional_info":"Example additional info","phone_number":"+1 888-888-8888","position":0,"kind":"physical"}]</code>  |
| Availability Rule       |                                                                                                                                  | <code>{"rules":[{"type":"wday","wday":"friday","date":"2019-01-02","intervals":[{"from":"07:00","to":"11:00"}]}],"timezone":"America/New_York"}</code> |

### Create Single-Use Scheduling Link

Creates a single-use scheduling link.

| Input           | Comments                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                  |         |
| Max Event Count | The max number of events that can be scheduled using this scheduling link.                       |         |
| Owner           | A link to the resource that owns this Scheduling Link (currently, this is always an Event Type). |         |
| Owner Type      | Resource type (currently, this is always EventType).                                             |         |

### Create Webhook Subscription

Create a Webhook Subscription for an Organization or User.

| Input        | Comments                                                                                                                                                                      | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                               |         |
| Organization | The unique reference to the organization that the webhook will be tied to.                                                                                                    |         |
| User         | The unique reference to the user that the webhook will be tied to.                                                                                                            |         |
| URL          | The URL where you want to receive POST requests for events you are subscribed to.                                                                                             |         |
| Event        | Event to subscribe to.                                                                                                                                                        |         |
| Scope        | Indicates if the webhook subscription scope will be 'organization' or 'user'.                                                                                                 |         |
| Signing Key  | Optional secret key shared between your application and Calendly. See https://developer.calendly.com/api-docs/ZG9jOjM2MzE2MDM4-webhook-signatures for additional information. |         |

### Delete Instanced Webhooks

Delete all webhooks that point to a flow in this instance.

| Input        | Comments                                                        | Default |
| ------------ | --------------------------------------------------------------- | ------- |
| Connection   |                                                                 |         |
| Organization | Organization to delete webhooks from                            |         |
| Scope        | Organization or user webhooks to delete                         |         |
| User         | User to delete webhooks from. Required if scope is set to user. |         |

### Delete Invitee Data

To submit a request to remove invitee data from all previously booked events in your organization, use this endpoint.

| Input      | Comments                 | Default |
| ---------- | ------------------------ | ------- |
| Connection |                          |         |
| Email      | Invitee email to delete. |         |

### Delete Scheduled Event Data

To submit a request to remove scheduled events data within a time range for your organization, use this endpoint.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection |                                                                         |         |
| Start Time | The scheduled events UTC timestamp at which data deletion should begin. |         |
| End Time   | The scheduled events UTC timestamp at which data deletion should end.   |         |

### Delete Webhook Subscription

Delete a Webhook Subscription.

| Input        | Comments | Default |
| ------------ | -------- | ------- |
| Connection   |          |         |
| Webhook UUID |          |         |

### Get Current User

Returns basic information about your user account.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Event

Returns information about a specified Event.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| UUID       |          |         |

### Get Event Invitee

Returns information about a specified Invitee (person invited to an event).

| Input        | Comments                        | Default |
| ------------ | ------------------------------- | ------- |
| Connection   |                                 |         |
| Event UUID   | The event's unique identifier   |         |
| Invitee UUID | The invitee's unique identifier |         |

### Get Event Type

Returns information about a specified Event Type.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| UUID       |          |         |

### Get Organization Invitation

Returns an Organization Invitation that was sent to the organization's members.

| Input             | Comments                                         | Default |
| ----------------- | ------------------------------------------------ | ------- |
| Connection        |                                                  |         |
| UUID              | The organization invitation's unique identifier. |         |
| Organization UUID | The organization's unique identifier.            |         |

### Get Organization Membership

Returns information about a user's Organization Membership.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection |                                                  |         |
| UUID       | The organization membership's unique identifier. |         |

### Get Routing Form

Get a specified Routing Form.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| UUID       |          |         |

### Get Routing Form Submission

Get a specified Routing Form Submission.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| UUID       |          |         |

### Get User

Returns information about a specified User.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| UUID       |          |         |

### Get User Availability Schedule

This will return the availability schedule of the given UUID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection |                                        |         |
| UUID       | The UUID of the availability schedule. |         |

### Get Webhook Subscription

Get a specified Webhook Subscription.

| Input        | Comments | Default |
| ------------ | -------- | ------- |
| Connection   |          |         |
| Webhook UUID |          |         |

### Invite User to Organization

Invites a user to an organization.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection |                                          |         |
| UUID       | The UUID of the organization.            |         |
| Email      | The email address of the user to invite. |         |

### List Activity Log Entries

Returns a list of activity log entries.

| Input           | Comments                                                                                                                                  | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                           |         |
| Organization    | Return activity log entries from the organization associated with this URI                                                                |         |
| Action          | The action associated with the entries                                                                                                    |         |
| Actor           | Return entries from the user associated with the provided URI.                                                                            |         |
| Max Occurred At | Include entries that occurred prior to this time (sample time format: '2020-01-02T03:04:05.678Z'). This time should use the UTC timezone. |         |
| Min Occurred At | Include entries that occurred after this time (sample time format: '2020-01-02T03:04:05.678Z'). This time should use the UTC timezone.    |         |
| Namespace       | The category of the entry.                                                                                                                |         |
| Search Term     | Filters entries based on the search term.                                                                                                 |         |
| Sort            | Order results by the specified field and direction. {field}:{direction} value.                                                            |         |

### List Event Invitees

Returns a list of Invitees for an event.

| Input      | Comments                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                         |         |
| UUID       |                                                                                                         |         |
| Email      | Indicates if the results should be filtered by email address                                            |         |
| Sort       | Order results by the created_at field and direction specified: ascending ('asc') or descending ('desc') |         |
| Status     | Indicates if the invitee 'canceled' or still 'active'                                                   |         |

### List Events

Returns a list of Events.

| Input          | Comments                                                                                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                         |         |
| Invitee Email  | Return events scheduled with the invitee associated with this email address                             |         |
| Max Start Time | Include events with start times prior to this time                                                      |         |
| Min Start Time | Include events with start times after this time                                                         |         |
| Organization   | Return events scheduled with the organization associated with this URI                                  |         |
| Sort           | Order results by the created_at field and direction specified: ascending ('asc') or descending ('desc') |         |
| Status         | Indicates if the invitee 'canceled' or still 'active'                                                   |         |
| User           | Return events scheduled with the user associated with this URI                                          |         |

### List Event Type Available Times

Returns a list of available times for an event type within a specified date range.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection |                                                 |         |
| End Time   | End time of the requested availability range.   |         |
| Event Type | The uri associated with the event type          |         |
| Start Time | Start time of the requested availability range. |         |

### List Organization Invitations

Returns a list of Organization Invitations that were sent to the organization's members.

| Input      | Comments                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                         |         |
| UUID       |                                                                                                         |         |
| Email      | Indicates if the results should be filtered by email address                                            |         |
| Sort       | Order results by the created_at field and direction specified: ascending ('asc') or descending ('desc') |         |
| Status     | Indicates if the results should be filtered by status ("pending", "accepted", or "declined")            |         |

### List Organization Memberships

Use this to list the Organization Memberships for all users belonging to an organization.

| Input        | Comments                                                     | Default |
| ------------ | ------------------------------------------------------------ | ------- |
| Connection   |                                                              |         |
| Email        | Indicates if the results should be filtered by email address |         |
| Organization | Indicates if the results should be filtered by organization  |         |
| User         | Indicates if the results should be filtered by user          |         |

### List Routing Forms

Get a list of Routing Forms for a specified Organization.

| Input        | Comments                                                                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                              |         |
| Organization | View organization routing forms associated with the organization's URI.                                                                                                                      |         |
| Sort         | Order results by the specified field and direction. Accepts comma-separated list of {field}:{direction} values. Supported fields are: created_at. Sort direction is specified as: asc, desc. |         |

### List Routing Form Submissions

Get a list of Routing Form Submissions for a specified Routing Form.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                  |         |
| Form       | View routing form submissions associated with the routing form's URI.                                                            |         |
| Sort       | Order results by the specified field and direction. Supported fields are: created_at. Sort direction is specified as: asc, desc. |         |

### List User Availability Schedules

Returns the availability schedules of the given user.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| User       | A URI reference to a user |         |

### List User Busy Times

Returns an ascending list of user internal and external scheduled events within a specified date range.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection |                                                |         |
| User       | The uri associated with the user               |         |
| End Time   | End time of the requested availability range   |         |
| Start Time | Start time of the requested availability range |         |

### List User's Event Types

Returns all Event Types associated with a specified User.

| Input                      | Comments                                                                                                                                                                               | Default  |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection                 |                                                                                                                                                                                        |          |
| Admin Managed              | Return only admin managed event types if true, exclude admin managed event types if false, or include all event types if this parameter is omitted.                                    | false    |
| User Availability Schedule | Used in conjunction with user parameter, returns a filtered list of Event Types that use the given primary availability schedule.                                                      |          |
| Active                     | Return only active event types if true, only inactive if false, or all event types if this parameter is omitted.                                                                       | false    |
| Organization               | View available personal, team, and organization event types associated with the organization's URI.                                                                                    |          |
| User                       | View available personal, team, and organization event types associated with the user's URI.                                                                                            |          |
| Sort                       | Order results by the specified field and direction. Accepts comma-separated list of {field}:{direction} values. Supported fields are: name. Sort direction is specified as: asc, desc. | name:asc |

### List Webhook Subscription

Get a list of Webhook Subscriptions for a specified Organization or User.

| Input        | Comments                                                                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                              |         |
| Organization | Indicates if the results should be filtered by organization                                                                                                                                  |         |
| Scope        | Filter the list by organization or user                                                                                                                                                      |         |
| Sort         | Order results by the specified field and direction. Accepts comma-separated list of {field}:{direction} values. Supported fields are: created_at. Sort direction is specified as: asc, desc. |         |
| User         | Indicates if the results should be filtered by user. This parameter is only required if the scope parameter is set to user.                                                                  |         |

### Raw Request

Send raw HTTP request to Calendly

| Input                   | Comments                                                                                                                                                                                             | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                      |         |
| URL                     | Input the path only (/users/me), The base URL is already included (https://api.calendly.com). For example, to connect to https://api.calendly.com/users/me, only /users/me is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                  |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                 | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                        | false   |

### Remove User from Organization

Removes a user from an organization.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection |                                                 |         |
| UUID       | The organization membership's unique identifier |         |

### Revoke User's Organization Invitation

Use this to revoke an Organization Invitation to an organization.

| Input             | Comments                                         | Default |
| ----------------- | ------------------------------------------------ | ------- |
| Connection        |                                                  |         |
| UUID              | The organization invitation's unique identifier. |         |
| Organization UUID | The organization's unique identifier.            |         |
