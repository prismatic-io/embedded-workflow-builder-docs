---
title: Calendly Connector
sidebar_label: Calendly
description: Calendly is an industry leading scheduling solution for businesses. Use the Calendly component to manage the scheduling of events; attendee availability; and retrieve pertinent data on users and attendees.
---

![Calendly](./assets/calendly.png#connector-icon)
[Calendly](https://calendly.com/) is an industry leading scheduling solution for businesses.

The Calendly component allows managing the scheduling of events, attendee availability, and retrieving pertinent data on users and attendees.

## API Documentation

This component was built using the [Calendly API Documentation](https://developer.calendly.com/api-docs)

## Connections

### OAuth 2.0 {#calendlyoauth2connection}

Authenticate using OAuth 2.0

A Calendly Developer Account is required to create applications for OAuth. Refer to the following [guide](https://developer.calendly.com/create-a-developer-account) for more information.

#### Prerequisites

- A Calendly Developer Account

#### Setup Steps

1. Log in to the Calendly Developer Account and navigate to the [Apps Portal](https://developer.calendly.com/console/apps)
2. Follow the steps and enter the following information:
   1. **Kind of app** - Web
   2. **Environment type** - Production or Sandbox. Separate apps will be needed for each environment.
   3. **Redirect URI** - `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
3. Continue and copy the **Client ID**, **Client Secret**, and **Webhook signing key**

#### Configure the Connection

Create a connection of type **OAuth 2.0** and enter:

- **Authorize URL**: The OAuth 2.0 Authorization URL (default: `https://auth.calendly.com/oauth/authorize`)
- **Token URL**: The OAuth 2.0 Token URL (default: `https://auth.calendly.com/oauth/token`)
- **Scopes**: Set the desired scopes (default: `default`)
- **Client ID**: Enter the Client ID from the Calendly application
- **Client Secret**: Enter the Client Secret from the Calendly application

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                                           | Default                                   |
| --------------- | ------------------------------------------------------------------ | ----------------------------------------- |
| Authorize URL   | The OAuth 2.0 Authorization URL for the Calendly API.              | https://auth.calendly.com/oauth/authorize |
| Token URL       | The OAuth 2.0 Token URL for the Calendly API.                      | https://auth.calendly.com/oauth/token     |
| Scopes          | Space-separated list of OAuth permission scopes.                   | default                                   |
| Client ID       | The Client ID from the OAuth application credentials.              |                                           |
| Client Secret   | The Client Secret from the OAuth application credentials.          |                                           |
| Use Live Server | When true, uses the live server. When false, uses the mock server. | false                                     |

## Triggers

### Scheduled Event {#calendlytrigger}

Receive data from scheduled events in real time with webhook subscriptions.

| Input              | Comments                                                                                                                                                                                                    | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Calendly connection to use.                                                                                                                                                                             |         |
| Organization       | The unique reference to the organization that the webhook will be tied to.                                                                                                                                  |         |
| User               | The unique reference to the user that the webhook will be tied to.                                                                                                                                          |         |
| Webhook Event Name | The webhook event types to subscribe to.                                                                                                                                                                    |         |
| Scope              | Indicates if the webhook subscription scope will be 'organization' or 'user'.                                                                                                                               |         |
| Signing Key        | Optional secret key shared between your application and Calendly. See [Calendly API documentation](https://developer.calendly.com/api-docs/ZG9jOjM2MzE2MDM4-webhook-signatures) for additional information. |         |

## Actions

### Cancel Event {#cancelevent}

Cancels specified event.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Calendly connection to use.       |         |
| UUID       | The unique identifier in UUID format. |         |
| Reason     | The reason for canceling the event.   |         |

### Create Share {#createshare}

Allows you to create an endpoint for the Customize Once and Share feature.

| Input                   | Comments                                                                                                                            | Default                                                                                                                                                |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection              | The Calendly connection to use.                                                                                                     |                                                                                                                                                        |
| Event Type              | The URI associated with the event type.                                                                                             |                                                                                                                                                        |
| Name                    | The name of the resource.                                                                                                           |                                                                                                                                                        |
| Duration                | The duration of the event in minutes.                                                                                               |                                                                                                                                                        |
| Period Type             | The type of scheduling period for the event type.                                                                                   |                                                                                                                                                        |
| Start Date              | Required when period_type is 'fixed'. Format: YYYY-MM-DD.                                                                           |                                                                                                                                                        |
| End Date                | Required when period_type is 'fixed'. Format: YYYY-MM-DD.                                                                           |                                                                                                                                                        |
| Max Booking Time        | Required when period_type is 'moving' or 'available_moving'.                                                                        |                                                                                                                                                        |
| Hide Location           | When true, the location is hidden until the invitee books a spot. Only respected when there is a single custom location configured. | false                                                                                                                                                  |
| Location Configurations | Array of location configurations for the event type.                                                                                | <code>[{"location":"123 Abc St.","additional_info":"Example additional info","phone_number":"+1 888-888-8888","position":0,"kind":"physical"}]</code>  |
| Availability Rule       | Availability rules defining when the event type can be scheduled.                                                                   | <code>{"rules":[{"type":"wday","wday":"friday","date":"2019-01-02","intervals":[{"from":"07:00","to":"11:00"}]}],"timezone":"America/New_York"}</code> |

### Create Single-Use Scheduling Link {#createsingleuseschedulinglink}

Creates a single-use scheduling link.

| Input           | Comments                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The Calendly connection to use.                                                                  |         |
| Max Event Count | The max number of events that can be scheduled using this scheduling link.                       |         |
| Owner           | A link to the resource that owns this Scheduling Link (currently, this is always an Event Type). |         |
| Owner Type      | Resource type (currently, this is always EventType).                                             |         |

### Create Webhook Subscription {#createwebhooksubscription}

Create a Webhook Subscription for an Organization or User.

| Input        | Comments                                                                                                                                                                                                    | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Calendly connection to use.                                                                                                                                                                             |         |
| Organization | The unique reference to the organization that the webhook will be tied to.                                                                                                                                  |         |
| User         | The unique reference to the user that the webhook will be tied to.                                                                                                                                          |         |
| URL          | The URL where you want to receive POST requests for events you are subscribed to.                                                                                                                           |         |
| Event        | Event to subscribe to.                                                                                                                                                                                      |         |
| Scope        | Indicates if the webhook subscription scope will be 'organization' or 'user'.                                                                                                                               |         |
| Signing Key  | Optional secret key shared between your application and Calendly. See [Calendly API documentation](https://developer.calendly.com/api-docs/ZG9jOjM2MzE2MDM4-webhook-signatures) for additional information. |         |

### Delete Instanced Webhooks {#deleteinstancedwebhooks}

Delete all webhooks that point to a flow in this instance.

| Input        | Comments                                                        | Default |
| ------------ | --------------------------------------------------------------- | ------- |
| Connection   | The Calendly connection to use.                                 |         |
| Organization | Organization to delete webhooks from                            |         |
| Scope        | Organization or user webhooks to delete                         |         |
| User         | User to delete webhooks from. Required if scope is set to user. |         |

### Delete Invitee Data {#deleteinviteedata}

To submit a request to remove invitee data from all previously booked events in your organization, use this endpoint.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Calendly connection to use. |         |
| Email      | Invitee email to delete.        |         |

### Delete Scheduled Event Data {#deletescheduledeventdata}

To submit a request to remove scheduled events data within a time range for your organization, use this endpoint.

| Input      | Comments                                                                                           | Default |
| ---------- | -------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Calendly connection to use.                                                                    |         |
| Start Time | The scheduled events UTC timestamp at which data deletion should begin. Format: ISO 8601 datetime. |         |
| End Time   | The scheduled events UTC timestamp at which data deletion should end. Format: ISO 8601 datetime.   |         |

### Delete Webhook Subscription {#deletewebhooksubscription}

Delete a Webhook Subscription.

| Input        | Comments                         | Default |
| ------------ | -------------------------------- | ------- |
| Connection   | The Calendly connection to use.  |         |
| Webhook UUID | The webhook's unique identifier. |         |

### Get Current User {#getcurrentuser}

Returns basic information about your user account.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Calendly connection to use. |         |

### Get Event {#getevent}

Returns information about a specified Event.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Calendly connection to use.       |         |
| UUID       | The unique identifier in UUID format. |         |

### Get Event Invitee {#geteventinvitee}

Returns information about a specified Invitee (person invited to an event).

| Input        | Comments                         | Default |
| ------------ | -------------------------------- | ------- |
| Connection   | The Calendly connection to use.  |         |
| Event UUID   | The event's unique identifier.   |         |
| Invitee UUID | The invitee's unique identifier. |         |

### Get Event Type {#geteventtype}

Returns information about a specified Event Type.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Calendly connection to use.       |         |
| UUID       | The unique identifier in UUID format. |         |

### Get Organization Invitation {#getorganizationinvitation}

Returns an Organization Invitation that was sent to the organization's members.

| Input             | Comments                                         | Default |
| ----------------- | ------------------------------------------------ | ------- |
| Connection        | The Calendly connection to use.                  |         |
| UUID              | The organization invitation's unique identifier. |         |
| Organization UUID | The organization's unique identifier.            |         |

### Get Organization Membership {#getorganizationmembership}

Returns information about a user's Organization Membership.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Calendly connection to use.                  |         |
| UUID       | The organization membership's unique identifier. |         |

### Get Routing Form {#getroutingform}

Get a specified Routing Form.

| Input        | Comments                                                                | Default |
| ------------ | ----------------------------------------------------------------------- | ------- |
| Connection   | The Calendly connection to use.                                         |         |
| Organization | Return events scheduled with the organization associated with this URI. |         |
| UUID         | The unique identifier in UUID format.                                   |         |

### Get Routing Form Submission {#getroutingformsubmission}

Get a specified Routing Form Submission.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Calendly connection to use.       |         |
| UUID       | The unique identifier in UUID format. |         |

### Get User {#getuser}

Returns information about a specified User.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Calendly connection to use.       |         |
| UUID       | The unique identifier in UUID format. |         |

### Get User Availability Schedule {#getuseravailabilityschedule}

This will return the availability schedule of the given UUID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Calendly connection to use.        |         |
| UUID       | The UUID of the availability schedule. |         |

### Get Webhook Subscription {#getwebhooksubscription}

Get a specified Webhook Subscription.

| Input        | Comments                         | Default |
| ------------ | -------------------------------- | ------- |
| Connection   | The Calendly connection to use.  |         |
| Webhook UUID | The webhook's unique identifier. |         |

### Invite User to Organization {#inviteusertoorganization}

Invites a user to an organization.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Calendly connection to use.          |         |
| UUID       | The UUID of the organization.            |         |
| Email      | The email address of the user to invite. |         |

### List Activity Log Entries {#listactivitylogentries}

Returns a list of activity log entries.

| Input           | Comments                                                                                                            | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Calendly connection to use.                                                                                     |         |
| Organization    | Return activity log entries from the organization associated with this URI                                          |         |
| Action          | The action associated with the entries.                                                                             |         |
| Actor           | Return entries from the user associated with the provided URI.                                                      |         |
| Max Occurred At | Include entries that occurred prior to this time. This time should use the UTC timezone. Format: ISO 8601 datetime. |         |
| Min Occurred At | Include entries that occurred after this time. This time should use the UTC timezone. Format: ISO 8601 datetime.    |         |
| Namespace       | The category of the entry.                                                                                          |         |
| Search Term     | Filters entries based on the search term.                                                                           |         |
| Sort            | Order results by the specified field and direction. {field}:{direction} value.                                      |         |

### List Event Invitees {#listeventinvitees}

Returns a list of Invitees for an event.

| Input      | Comments                                                                                                 | Default |
| ---------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Calendly connection to use.                                                                          |         |
| UUID       | The unique identifier in UUID format.                                                                    |         |
| Email      | Indicates if the results should be filtered by email address.                                            |         |
| Sort       | Order results by the created_at field and direction specified: ascending ('asc') or descending ('desc'). |         |
| Status     | Indicates if the invitee 'canceled' or still 'active'.                                                   |         |

### List Events {#listevents}

Returns a list of Events.

| Input          | Comments                                                                                                 | Default |
| -------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Calendly connection to use.                                                                          |         |
| Invitee Email  | Return events scheduled with the invitee associated with this email address.                             |         |
| Max Start Time | Include events with start times prior to this time. Format: ISO 8601 datetime.                           |         |
| Min Start Time | Include events with start times after this time. Format: ISO 8601 datetime.                              |         |
| Organization   | Return events scheduled with the organization associated with this URI.                                  |         |
| Sort           | Order results by the created_at field and direction specified: ascending ('asc') or descending ('desc'). |         |
| Status         | Indicates if the invitee 'canceled' or still 'active'.                                                   |         |
| User           | Return events scheduled with the user associated with this URI.                                          |         |

### List Event Type Available Times {#listeventtypeavailabletimes}

Returns a list of available times for an event type within a specified date range.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Calendly connection to use.                 |         |
| End Time   | End time of the requested availability range.   |         |
| Event Type | The URI associated with the event type.         |         |
| Start Time | Start time of the requested availability range. |         |

### List Organization Invitations {#listorganizationinvitations}

Returns a list of Organization Invitations that were sent to the organization's members.

| Input      | Comments                                                                                                 | Default |
| ---------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Calendly connection to use.                                                                          |         |
| UUID       | The unique identifier in UUID format.                                                                    |         |
| Email      | Indicates if the results should be filtered by email address                                             |         |
| Sort       | Order results by the created_at field and direction specified: ascending ('asc') or descending ('desc'). |         |
| Status     | Indicates if the results should be filtered by status ("pending", "accepted", or "declined")             |         |

### List Organization Memberships {#listorganizationmemberships}

Use this to list the Organization Memberships for all users belonging to an organization.

| Input        | Comments                                                     | Default |
| ------------ | ------------------------------------------------------------ | ------- |
| Connection   | The Calendly connection to use.                              |         |
| Email        | Indicates if the results should be filtered by email address |         |
| Organization | Indicates if the results should be filtered by organization  |         |
| User         | Indicates if the results should be filtered by user          |         |

### List Routing Forms {#listroutingforms}

Get a list of Routing Forms for a specified Organization.

| Input        | Comments                                                                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Calendly connection to use.                                                                                                                                                              |         |
| Organization | View organization routing forms associated with the organization's URI.                                                                                                                      |         |
| Sort         | Order results by the specified field and direction. Accepts comma-separated list of {field}:{direction} values. Supported fields are: created_at. Sort direction is specified as: asc, desc. |         |

### List Routing Form Submissions {#listroutingformsubmissions}

Get a list of Routing Form Submissions for a specified Routing Form.

| Input        | Comments                                                                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Calendly connection to use.                                                                                                  |         |
| Organization | Return events scheduled with the organization associated with this URI.                                                          |         |
| Form         | View routing form submissions associated with the routing form's URI.                                                            |         |
| Sort         | Order results by the specified field and direction. Supported fields are: created_at. Sort direction is specified as: asc, desc. |         |

### List User Availability Schedules {#listuseravailabilityschedules}

Returns the availability schedules of the given user.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Calendly connection to use. |         |
| User       | A URI reference to a user       |         |

### List User Busy Times {#listuserbusytimes}

Returns an ascending list of user internal and external scheduled events within a specified date range.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Calendly connection to use.                |         |
| User       | The uri associated with the user               |         |
| End Time   | End time of the requested availability range   |         |
| Start Time | Start time of the requested availability range |         |

### List User's Event Types {#listusereventtypes}

Returns all Event Types associated with a specified User.

| Input                      | Comments                                                                                                                                                                               | Default  |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection                 | The Calendly connection to use.                                                                                                                                                        |          |
| Admin Managed              | When true, returns only admin managed event types. When false, excludes admin managed event types.                                                                                     | false    |
| User Availability Schedule | Used in conjunction with user parameter, returns a filtered list of Event Types that use the given primary availability schedule.                                                      |          |
| Active                     | When true, returns only active event types. When false, returns only inactive event types.                                                                                             | false    |
| Organization               | View available personal, team, and organization event types associated with the organization's URI.                                                                                    |          |
| User                       | View available personal, team, and organization event types associated with the user's URI.                                                                                            |          |
| Sort                       | Order results by the specified field and direction. Accepts comma-separated list of {field}:{direction} values. Supported fields are: name. Sort direction is specified as: asc, desc. | name:asc |

### List Webhook Subscription {#listwebhooksubscription}

Get a list of Webhook Subscriptions for a specified Organization or User.

| Input        | Comments                                                                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Calendly connection to use.                                                                                                                                                              |         |
| Organization | Indicates if the results should be filtered by organization                                                                                                                                  |         |
| Scope        | Filter the list by organization or user                                                                                                                                                      |         |
| Sort         | Order results by the specified field and direction. Accepts comma-separated list of {field}:{direction} values. Supported fields are: created_at. Sort direction is specified as: asc, desc. |         |
| User         | Indicates if the results should be filtered by user. This parameter is only required if the scope parameter is set to user.                                                                  |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Calendly

| Input                   | Comments                                                                                                                                                                                             | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Calendly connection to use.                                                                                                                                                                      |         |
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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                        | false   |

### Remove User from Organization {#removeuserfromorganization}

Removes a user from an organization.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Calendly connection to use.                 |         |
| UUID       | The organization membership's unique identifier |         |

### Revoke User's Organization Invitation {#revokeuserorganizationinvitation}

Use this to revoke an Organization Invitation to an organization.

| Input             | Comments                                         | Default |
| ----------------- | ------------------------------------------------ | ------- |
| Connection        | The Calendly connection to use.                  |         |
| UUID              | The organization invitation's unique identifier. |         |
| Organization UUID | The organization's unique identifier.            |         |
