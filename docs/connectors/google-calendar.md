---
title: Google Calendar Connector
sidebar_label: Google Calendar
description: Manage calendars and events in Google Calendar
---

![Google Calendar](./assets/google-calendar.png#connector-icon)
Manage calendars and events in Google Calendar

## Connections

### Google Calendar OAuth 2.0

Authenticate requests to Google Calendar using values obtained from the Google Cloud Platform.

The Google Calendar component authenticates requests through Google's OAuth service.
To create a Google Calendar developer account and authenticate using Google OAuth, follow the directions [here](https://developers.google.com/calendar/api/guides/auth)
Now, you will have to configure OAuth 2.0 settings.
Create a new Google Calendar connection of type **OAuth 2.0**.

- For **Client ID** and **Client Secret** enter the values that you got from the Google Cloud Platform auth settings.
- For **Scopes** choose from the list found on the [Google docs](https://developers.google.com/identity/protocols/oauth2/scopes)

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default                                  |
| ------------- | ----------------------------------------------------------------------------------- | ---------------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. | https://www.googleapis.com/auth/calendar |
| Client ID     | Provide a string value for the client Id of your OAuth 2.0 application.             |                                          |
| Client Secret | Provide a string value for the client secret of your OAuth 2.0 application.         |                                          |

## Actions

### Create Calendar

Create a new calendar

| Input       | Comments                                                                                                        | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Summary     | Provide a string value for the summary.                                                                         |         |
| Description | Provide a string value for the description.                                                                     |         |
| Time Zone   | Provide a valid value for the timezone of the event. For a complete list of timezones refer to the google docs. |         |
| Connection  |                                                                                                                 |         |

### Create Event

Create a new event in a given calendar

| Input                   | Comments                                                                                                                            | Default                                                                                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Calendar Id             | Provide a string value for the id of the calendar.                                                                                  |                                                                                                                                                                               |
| Summary                 | Provide a string value for the summary.                                                                                             |                                                                                                                                                                               |
| Description             | Provide a string value for the description.                                                                                         |                                                                                                                                                                               |
| Time Zone               | Provide a valid value for the timezone of the event. For a complete list of timezones refer to the google docs.                     |                                                                                                                                                                               |
| Start Time              | Provide a date time value for the starting time of the event.                                                                       |                                                                                                                                                                               |
| End Time                | Provide a date time value for the ending time of the event.                                                                         |                                                                                                                                                                               |
| Event Location          | Provide a string value for the location of the event.                                                                               |                                                                                                                                                                               |
| Attendees               | Provide an array of attendee objects as described at https://developers.google.com/calendar/api/v3/reference/events/insert          | <code>[<br /> {<br /> "email": "lpage@example.com",<br /> "optional": true<br /> },<br /> {<br /> "email": "sbrin@example.com",<br /> "optional": false<br /> }<br />]</code> |
| Remind Method           | This field is only required if useDefaultReminder is set to false.                                                                  |                                                                                                                                                                               |
| Default Reminder        | If this field is true, the event will use the default reminder settings.                                                            | false                                                                                                                                                                         |
| Remind Before (minutes) | This field is only required if useDefaultReminder is set to false.                                                                  |                                                                                                                                                                               |
| Add Conference Event    | Creates a Google Meet link when set to true.                                                                                        | false                                                                                                                                                                         |
| Connection              |                                                                                                                                     |                                                                                                                                                                               |
| Send Updates            | Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false. |                                                                                                                                                                               |

### Delete Calendar

Delete an existing calendar by Id

| Input       | Comments                                           | Default |
| ----------- | -------------------------------------------------- | ------- |
| Calendar Id | Provide a string value for the id of the calendar. |         |
| Connection  |                                                    |         |

### Delete Event

Delete an event by an Id

| Input        | Comments                                                                 | Default |
| ------------ | ------------------------------------------------------------------------ | ------- |
| Calendar Id  | Provide a string value for the id of the calendar.                       |         |
| Event Id     | Provide the unique identifier of the event.                              |         |
| Connection   |                                                                          |         |
| Send Updates | Guests who should receive notifications about the deletion of the event. |         |

### Get Calendar

Get the information and metadata of a calendar by Id

| Input       | Comments                                           | Default |
| ----------- | -------------------------------------------------- | ------- |
| Connection  |                                                    |         |
| Calendar Id | Provide a string value for the id of the calendar. |         |

### Get Event

Get the information and metadata of an event by Id

| Input       | Comments                                           | Default |
| ----------- | -------------------------------------------------- | ------- |
| Calendar Id | Provide a string value for the id of the calendar. |         |
| Event Id    | Provide the unique identifier of the event.        |         |
| Connection  |                                                    |         |

### List Calendars

List all calendars

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Page Token  | Specify the pagination token that's returned by a previous request to retrieve the next page of results          |         |
| Max Results | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 250. |         |
| Connection  |                                                                                                                  |         |
| Fetch All   | If true, fetches all pages of results, ignoring the 'Max Results' and 'Page Token' inputs.                       | false   |

### List Events

List all events in a given calendar

| Input                   | Comments                                                                                                                                                                                                                                                       | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                |         |
| Calendar Id             | Provide a string value for the id of the calendar.                                                                                                                                                                                                             |         |
| Fetch All               | If true, fetches all pages of results, ignoring the 'Max Results' and 'Page Token' inputs.                                                                                                                                                                     | false   |
| Max Results             | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 250.                                                                                                                                               |         |
| Page Token              | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                                                                                                                        |         |
| Sync Token              | Specify the token for syncing the latest resources that have been modified since the last sync request                                                                                                                                                         |         |
| Max Attendees           | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.                                                                                              |         |
| Order By                | The order of the events returned in the result. Optional. The default is an unspecified, stable order.                                                                                                                                                         |         |
| Query                   | Free text search terms to find events that match these terms in the following fields: summary, description, location, attendee's displayName, attendee's email                                                                                                 |         |
| Show Deleted            |                                                                                                                                                                                                                                                                | false   |
| Show Hidden Invitations |                                                                                                                                                                                                                                                                | false   |
| Single Events           | Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.                                                 | false   |
| Time Min                | Lower bound for an event's end time to filter by.                                                                                                                                                                                                              |         |
| Time Max                | Upper bound for an event's start time to filter by. Must be a timestamp with timezone offset, 2011-06-03T10:00:00-07:00                                                                                                                                        |         |
| Updated Min             | Lower bound for an event's last modification time (as a RFC 3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time. |         |
| Time Zone               | Time zone used in the response. Optional.                                                                                                                                                                                                                      |         |

### Raw Request

Send raw HTTP request to Google Calendar

| Input                   | Comments                                                                                                                                                                                                                   | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                            |         |
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

### Update Event

Update the information and metadata of an existing event

| Input                   | Comments                                                                                                                   | Default                                                                                                                                                                       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Calendar Id             | Provide a string value for the id of the calendar.                                                                         |                                                                                                                                                                               |
| Event Id                | Provide the unique identifier of the event.                                                                                |                                                                                                                                                                               |
| Summary                 | Provide a string value for the summary.                                                                                    |                                                                                                                                                                               |
| Description             | Provide a string value for the description.                                                                                |                                                                                                                                                                               |
| Time Zone               | Provide a valid value for the timezone of the event. For a complete list of timezones refer to the google docs.            |                                                                                                                                                                               |
| Start Time              | Provide a date time value for the starting time of the event.                                                              |                                                                                                                                                                               |
| End Time                | Provide a date time value for the ending time of the event.                                                                |                                                                                                                                                                               |
| Event Location          | Provide a string value for the location of the event.                                                                      |                                                                                                                                                                               |
| Attendees               | Provide an array of attendee objects as described at https://developers.google.com/calendar/api/v3/reference/events/insert | <code>[<br /> {<br /> "email": "lpage@example.com",<br /> "optional": true<br /> },<br /> {<br /> "email": "sbrin@example.com",<br /> "optional": false<br /> }<br />]</code> |
| Default Reminder        | If this field is true, the event will use the default reminder settings.                                                   | false                                                                                                                                                                         |
| Remind Method           | This field is only required if useDefaultReminder is set to false.                                                         |                                                                                                                                                                               |
| Remind Before (minutes) | This field is only required if useDefaultReminder is set to false.                                                         |                                                                                                                                                                               |
| Connection              |                                                                                                                            |                                                                                                                                                                               |
| Send Updates            | Guests who should receive notifications about the event update (for example, title changes, etc.).                         |                                                                                                                                                                               |
