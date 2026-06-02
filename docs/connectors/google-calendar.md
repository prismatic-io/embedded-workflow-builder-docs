---
title: Google Calendar Connector
sidebar_label: Google Calendar
description: Manage calendars and events in Google Calendar
---

![Google Calendar](./assets/google-calendar.png#connector-icon)
Manage calendars and events in Google Calendar

## Connections

### OAuth 2.0 {#oauth2}

OAuth 2.0 connection for Google Calendar

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                           | Default                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Scopes        | Space-delimited list of OAuth 2.0 scopes. See [Google Calendar API scopes](https://developers.google.com/calendar/api/auth) for available options. | https://www.googleapis.com/auth/calendar |
| Client ID     | Client ID from your Google Cloud Platform OAuth 2.0 credentials.                                                                                   |                                          |
| Client Secret | Client Secret from your Google Cloud Platform OAuth 2.0 credentials.                                                                               |                                          |

## Triggers

### Calendar Change Events {#calendarchangeevents}

Receive change notifications for a Google Calendar. Automatically creates and manages a Google Calendar push notification subscription when the instance is deployed, and removes the subscription when the instance is deleted.

| Input       | Comments                               | Default |
| ----------- | -------------------------------------- | ------- |
| Connection  | The Google Calendar connection to use. |         |
| Calendar ID | The calendar to monitor for changes.   |         |

### New and Updated Events {#polleventstrigger}

Checks for new and updated calendar events on a configured schedule.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Google Calendar connection to use.  |         |
| Calendar ID | The calendar to poll for event changes. |         |

## Actions

### Create Calendar {#createcalendar}

Create a new calendar

| Input       | Comments                                                                                                                | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Summary     | The title or summary of the event.                                                                                      |         |
| Description | A detailed description of the event.                                                                                    |         |
| Time Zone   | The timezone of the event in IANA Time Zone Database format. See [IANA timezone list](https://www.iana.org/time-zones). |         |
| Connection  | The Google Calendar connection to use.                                                                                  |         |

### Create Event {#createevent}

Create a new event in a given calendar

| Input                   | Comments                                                                                                                                                                                    | Default                                                                                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Calendar ID             | The unique identifier of the calendar. Use 'primary' for the user's primary calendar.                                                                                                       |                                                                                                                                                                                       |
| Summary                 | The title or summary of the event.                                                                                                                                                          |                                                                                                                                                                                       |
| Description             | A detailed description of the event.                                                                                                                                                        |                                                                                                                                                                                       |
| Time Zone               | The timezone of the event in IANA Time Zone Database format. See [IANA timezone list](https://www.iana.org/time-zones).                                                                     |                                                                                                                                                                                       |
| Start Time              | The start time of the event in ISO 8601 format with timezone offset.                                                                                                                        |                                                                                                                                                                                       |
| End Time                | The end time of the event in ISO 8601 format with timezone offset.                                                                                                                          |                                                                                                                                                                                       |
| Event Location          | The physical or virtual location of the event.                                                                                                                                              |                                                                                                                                                                                       |
| Attendees               | Array of attendee objects with email addresses and optional flags. See [Google Calendar Events API](https://developers.google.com/calendar/api/v3/reference/events/insert) for full schema. | <code>[<br /> {<br /> "email": "john.doe@example.com",<br /> "optional": false<br /> },<br /> {<br /> "email": "jane.smith@example.com",<br /> "optional": true<br /> }<br />]</code> |
| Remind Method           | How to send the event reminder. Only used when 'Default Reminder' is false.                                                                                                                 |                                                                                                                                                                                       |
| Default Reminder        | When true, the event uses the default reminder settings from the calendar.                                                                                                                  | false                                                                                                                                                                                 |
| Remind Before (minutes) | Number of minutes before the event to send the reminder. Only used when 'Default Reminder' is false.                                                                                        |                                                                                                                                                                                       |
| Add Conference Event    | When true, creates a Google Meet conference link for the event.                                                                                                                             | false                                                                                                                                                                                 |
| Connection              | The Google Calendar connection to use.                                                                                                                                                      |                                                                                                                                                                                       |
| Send Updates            | Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false.                                                         |                                                                                                                                                                                       |

### Delete Calendar {#deletecalendar}

Delete an existing calendar by Id

| Input       | Comments                                                                              | Default |
| ----------- | ------------------------------------------------------------------------------------- | ------- |
| Calendar ID | The unique identifier of the calendar. Use 'primary' for the user's primary calendar. |         |
| Connection  | The Google Calendar connection to use.                                                |         |

### Delete Event {#deleteevent}

Delete an event by an Id

| Input        | Comments                                                                              | Default |
| ------------ | ------------------------------------------------------------------------------------- | ------- |
| Calendar ID  | The unique identifier of the calendar. Use 'primary' for the user's primary calendar. |         |
| Event ID     | The unique identifier of the event.                                                   |         |
| Connection   | The Google Calendar connection to use.                                                |         |
| Send Updates | Guests who should receive notifications about the deletion of the event.              |         |

### Get Calendar {#getcalendar}

Get the information and metadata of a calendar by Id

| Input       | Comments                                                                              | Default |
| ----------- | ------------------------------------------------------------------------------------- | ------- |
| Connection  | The Google Calendar connection to use.                                                |         |
| Calendar ID | The unique identifier of the calendar. Use 'primary' for the user's primary calendar. |         |

### Get Event {#getevent}

Get the information and metadata of an event by Id

| Input       | Comments                                                                              | Default |
| ----------- | ------------------------------------------------------------------------------------- | ------- |
| Calendar ID | The unique identifier of the calendar. Use 'primary' for the user's primary calendar. |         |
| Event ID    | The unique identifier of the event.                                                   |         |
| Connection  | The Google Calendar connection to use.                                                |         |

### List Calendars {#listcalendar}

List all calendars

| Input       | Comments                                                                                     | Default |
| ----------- | -------------------------------------------------------------------------------------------- | ------- |
| Page Token  | Pagination token returned from a previous request to retrieve the next page of results.      |         |
| Max Results | Maximum number of results to return (1-250).                                                 |         |
| Connection  | The Google Calendar connection to use.                                                       |         |
| Fetch All   | When true, fetches all pages of results, ignoring the 'Max Results' and 'Page Token' inputs. | false   |

### List Events {#listevents}

List all events in a given calendar

| Input                   | Comments                                                                                                                                                         | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Google Calendar connection to use.                                                                                                                           |         |
| Calendar ID             | The unique identifier of the calendar. Use 'primary' for the user's primary calendar.                                                                            |         |
| Fetch All               | When true, fetches all pages of results, ignoring the 'Max Results' and 'Page Token' inputs.                                                                     | false   |
| Max Results             | Maximum number of results to return (1-250).                                                                                                                     |         |
| Page Token              | Pagination token returned from a previous request to retrieve the next page of results.                                                                          |         |
| Sync Token              | Token for retrieving only resources modified since the last sync request.                                                                                        |         |
| Max Attendees           | Maximum number of attendees to include in the response. If there are more attendees, only the participant is returned.                                           |         |
| Order By                | The order of events returned in the result. Default is an unspecified, stable order.                                                                             |         |
| Query                   | Free text search terms to find events matching in summary, description, location, or attendee fields.                                                            |         |
| Show Deleted            | When true, includes deleted events in the response.                                                                                                              | false   |
| Show Hidden Invitations | When true, includes hidden invitations in the response.                                                                                                          | false   |
| Single Events           | When true, expands recurring events into instances and returns only single one-off events and instances, not the underlying recurring events.                    | false   |
| Time Min                | Lower bound for filtering events by end time. Must be in ISO 8601 format with timezone offset.                                                                   |         |
| Time Max                | Upper bound for filtering events by start time. Must be in ISO 8601 format with timezone offset.                                                                 |         |
| Updated Min             | Lower bound for filtering by last modification time (RFC 3339 format). Deleted entries since this time are always included regardless of 'Show Deleted' setting. |         |
| Time Zone               | Time zone used in the response.                                                                                                                                  |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Google Calendar

| Input                   | Comments                                                                                                                                                                                                                   | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Google Calendar connection to use.                                                                                                                                                                                     |         |
| URL                     | Input the path only (/colors), The base URL is already included (https://www.googleapis.com/calendar/v3). For example, to connect to https://www.googleapis.com/calendar/v3/colors, only /colors is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                    |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                  |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                       |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                           |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                     |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                        |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                   | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                        |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                        | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                           | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                        | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                              | false   |

### Update Event {#updateevent}

Update the information and metadata of an existing event

| Input                   | Comments                                                                                                                                                                                    | Default                                                                                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Calendar ID             | The unique identifier of the calendar. Use 'primary' for the user's primary calendar.                                                                                                       |                                                                                                                                                                                       |
| Event ID                | The unique identifier of the event.                                                                                                                                                         |                                                                                                                                                                                       |
| Summary                 | The title or summary of the event.                                                                                                                                                          |                                                                                                                                                                                       |
| Description             | A detailed description of the event.                                                                                                                                                        |                                                                                                                                                                                       |
| Time Zone               | The timezone of the event in IANA Time Zone Database format. See [IANA timezone list](https://www.iana.org/time-zones).                                                                     |                                                                                                                                                                                       |
| Start Time              | The start time of the event in ISO 8601 format with timezone offset.                                                                                                                        |                                                                                                                                                                                       |
| End Time                | The end time of the event in ISO 8601 format with timezone offset.                                                                                                                          |                                                                                                                                                                                       |
| Event Location          | The physical or virtual location of the event.                                                                                                                                              |                                                                                                                                                                                       |
| Attendees               | Array of attendee objects with email addresses and optional flags. See [Google Calendar Events API](https://developers.google.com/calendar/api/v3/reference/events/insert) for full schema. | <code>[<br /> {<br /> "email": "john.doe@example.com",<br /> "optional": false<br /> },<br /> {<br /> "email": "jane.smith@example.com",<br /> "optional": true<br /> }<br />]</code> |
| Default Reminder        | When true, the event uses the default reminder settings from the calendar.                                                                                                                  | false                                                                                                                                                                                 |
| Remind Method           | How to send the event reminder. Only used when 'Default Reminder' is false.                                                                                                                 |                                                                                                                                                                                       |
| Remind Before (minutes) | Number of minutes before the event to send the reminder. Only used when 'Default Reminder' is false.                                                                                        |                                                                                                                                                                                       |
| Connection              | The Google Calendar connection to use.                                                                                                                                                      |                                                                                                                                                                                       |
| Send Updates            | Guests who should receive notifications about the event update (for example, title changes, etc.).                                                                                          |                                                                                                                                                                                       |
