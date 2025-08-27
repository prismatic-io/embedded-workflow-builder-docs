---
title: Gong Connector
sidebar_label: Gong
description: Captures customer interactions then delivers insights at scale, empowering teams to make decisions based on data instead of opinions. Use the Gong Component to manage calls, users, libraries, and more.
---

![Gong](./assets/gong.png#connector-icon)
Captures customer interactions then delivers insights at scale, empowering teams to make decisions based on data instead of opinions. Use the Gong Component to manage calls, users, libraries, and more.

## Connections

### API Key

Generate by visiting Company Settings > Ecosystem > API.

To generate a Gong API key manually:

1. Log in to Gong and click **Company Settings** > **Ecosystem** > **API**.
1. Click **Create** to generate an access key and the access key secret.
1. Take note of the API Base URL that is displayed next to the access key and access key secret.

| Input             | Comments | Default |
| ----------------- | -------- | ------- |
| Base URL          |          |         |
| Access Key        |          |         |
| Access Key Secret |          |         |

### Gong OAuth 2.0

Authenticate using oauth flow.

To Create an [OAuth app](https://help.gong.io/hc/en-us/articles/13944551222157-Create-an-app-for-Gong) for Gong:

1. In your company's **Settings** page, click **API** and click the **Integrations** tab.
2. Click **Create Integration**.
3. In the **Integration details** area, enter your integration name and a description.
4. In the **Required authorization scopes** area, select the scopes that your app needs.
   You can check our [API documentation](https://app.gong.io/settings/api/documentation#overview) to see which APIs use which scopes.
5. Add **Redirect URI** as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
6. Click **Save**.

A new row appears in the table of apps, containing the **Client ID** and the **Client Secret**. Copy and paste these into the connection configuration of your workflow.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input      | Comments                                                                                                                                                                         | Default                               |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Scopes     | A space-delimited set of one or more scopes to get the user's permission to access. A list of all scopes is available at https://app.gong.io/settings/api/documentation#overview | api:calls:create api:calls:read:basic |
| API Key    | Obtain this by creating an app at your Gong Dashboard                                                                                                                            |                                       |
| API Secret | Obtain this by creating an app at your Gong Dashboard                                                                                                                            |                                       |

## Triggers

### Process Automation Trigger

Trigger for handling process automations from Gong

| Input            | Comments | Default |
| ---------------- | -------- | ------- |
| Automation Rules |          |         |

## Actions

### Add Call Media

Adds a call media, recorded by a telephony system (PBX) or other media recording facility.

| Input      | Comments                                                                   | Default |
| ---------- | -------------------------------------------------------------------------- | ------- |
| Connection |                                                                            |         |
| Call Id    | callId returned from 'Add New Call' request                                |         |
| File       | The media file of the recording. You may attach files up to 1.5GB in size. |         |
| File Name  | The name of the file                                                       |         |

### Create New Call

When using this endpoint, either provide a downloadMediaUrl or use the returned callId in a follow-up request to /v2/calls/[id]/media to upload the media file.

| Input              | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Client Unique Id   | A call's unique identifier in the PBX or the recording system. Gong uses this identifier to prevent repeated attempts to upload the same recording.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |         |
| Primary User       | The Gong internal user ID of the team member who hosted the call.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Parties            | A list of the call's participants. A party must be provided for the primaryUser.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| Direction          | Whether the call is inbound (someone called the company), outbound (a rep dialed someone outside the company), or a conference call.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Actual Start       | The actual date and time when the call started in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Scheduled Start    | The date and time the call was scheduled to begin in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |         |
| Scheduled End      | The date and time the call was scheduled to end in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Title              | The title of the call. This title is available in the Gong system for indexing and search.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Purpose            | The purpose of the call. This optional field is a free text of up to 255 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Duration           | The actual call duration in seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Disposition        | The disposition of the call. The disposition is free text of up to 255 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |         |
| Context            | A list of references to external systems such as CRM, Telephony System, Case Management, etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Custom Data        | Optional metadata associated with the call (represented as text). Gong stores this metadata and it can be used for troubleshooting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |         |
| Speakers Timeline  | The audio recording speech segments (who spoke when). Note that speakersTimeline and mediaChannelId are mutually exclusive, when providing speakersTimeline - mediaChannelId will not be used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |         |
| Meeting URL        | The URL of the conference call by which users join the meeting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |         |
| Call Provider Code | The code identifies the provider conferencing or telephony system. For example: zoom, clearslide, gotomeeting, ringcentral, outreach, insidesales, etc. These values are predefined by Gong, please contact help@gong.io to find the proper value for your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |         |
| Download Media URL | The URL from which Gong can download the media file. The URL must be unique, the audio or video file must be a maximum of 1.5GB. If you provide this URL, you should not perform the 'Add call media' step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Workspace Id       | Optional Workspace identifier, if supplied the API will return only the calls belonging to this workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Language Code      | The language code the call should be transcribed to. This field is optional as Gong automatically detects the language spoken in the call and transcribes it accordingly. Set this field only if you are sure of the language the call is in. Valid values are: af-ZA, am-ET, ar-AE, ar-BH, ar-DZ, ar-EG, ar-IL, ar-IQ, ar-JO, ar-KW, ar-LB, ar-MA, ar-MR, ar-OM, ar-PS, ar-QA, ar-SA, ar-TN, ar-YE, az-AZ, bg-BG, bn-BD, bn-IN, bs-BA, ca-ES, cs-CZ, da-DK, de-AT, de-CH, de-DE, el-GR, en-AB, en-AU, en-CA, en-GB, en-IE, en-IN, en-NZ, en-PH, en-SG, en-US, en-WL, en-ZA, es-AR, es-BO, es-CL, es-CO, es-CR, es-DO, es-EC, es-ES, es-GT, es-HN, es-MX, es-NI, es-PA, es-PE, es-PR, es-PY, es-SV, es-US, es-UY, et-EE, eu-ES, fa-IR, fi-FI, fil-PH, fr-BE, fr-CA, fr-CH, fr-FR, gl-ES, gu-IN, he-IL, hi-IN, hr-HR, hu-HU, hy-AM, id-ID, is-IS, it-CH, it-IT, ja-JP, jv-ID, ka-GE, kk-KZ, km-KH, kn-IN, ko-KR, lo-LA, lt-LT, lv-LV, mk-MK, ml-IN, mn-MN, mr-IN, ms-MY, my-MM, ne-NP, nl-BE, nl-NL, no-NO, pa-Guru-IN, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, si-LK, sk-SK, sl-SI, sq-AL, sr-RS, su-ID, sv-SE, sw-KE, sw-TZ, ta-IN, ta-LK, ta-MY, ta-SG, te-IN, th-TH, tr-TR, uk-UA, ur-IN, ur-PK, uz-UZ, vi-VN, yue-Hant-HK, zh-CN, zh-TW, zu-ZA |         |

### Create New Gong Meeting

Creates a new Gong Meeting

| Input           | Comments                                                                                                                            | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                     |         |
| Start Time      | The meeting start time in ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).    |         |
| End Time        | The meeting end time in ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).      |         |
| Organizer Email | The email address of the user creating the meeting, the Gong consent page link will be used according to the settings of this user. |         |
| Invitees        | A list of email addresses of invitees to the event (not including the organizer).                                                   |         |
| External ID     | The ID as it is formed on the external system.                                                                                      |         |
| Title           | The title of the call. This title is available in the Gong system for indexing and search.                                          |         |

### Custom Action Event

Push engagement events into Gong and display them as events in Gong's activity timeline, when a content is engaged by an external participant (for example, a contract was 'signed' by the prospect)

| Input                    | Comments                                                                                                                                                | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               |                                                                                                                                                         |         |
| Reporting System         | The unique identifier of the reporting system. It is the same value in all events originating from the same system.                                     |         |
| Event Timestamp          | The date and time when the event happened in the ISO-8601 format (e.g., '2021-08-01T02:30:00+05:00' or '2021-08-01T08:00:00Z', where Z stands for UTC); |         |
| Event Id                 | The original id of the event as designated in the reporting system.                                                                                     |         |
| Content Id               | The id of the content that was viewed in the reporting system.                                                                                          |         |
| Content Url              | The url of the content that was viewed in the reporting system. This is the url that is was accessed by the viewer.                                     |         |
| Content Title            | Human readable title of the content.                                                                                                                    |         |
| Action Name              | The name of the action like 'Document Viewed' or 'Presentation Opened'.                                                                                 |         |
| Event Info Url           | The link to a page that presents additional information about this event.                                                                               |         |
| Actor                    |                                                                                                                                                         |         |
| CRM Context              |                                                                                                                                                         |         |
| Content Properties       |                                                                                                                                                         |         |
| Event Properties         |                                                                                                                                                         |         |
| User Agent               | 'User-Agent' header value for browser based interaction                                                                                                 |         |
| Mobile App Id            | The application identification string in case of interaction via mobile application (bundle identifier or package name).                                |         |
| Agent Platform           | Platform on which the interaction was made                                                                                                              |         |
| Workspace Id             | Optional Workspace identifier, if supplied the API will return only the calls belonging to this workspace.                                              |         |
| Non Company Participants |                                                                                                                                                         |         |
| More Info Url            |                                                                                                                                                         |         |
| Share Id                 |                                                                                                                                                         |         |
| Sharer                   |                                                                                                                                                         |         |
| Sharing Message Subject  | The subject of share email / message.                                                                                                                   |         |
| Sharing Message Body     | The share message body. Can contain HTML and will be cleaned when it is presented.                                                                      |         |

### Custom Shared Event

Push engagement events into Gong and display them as events in Gong’s activity timeline, when a Gong user shares content with external participants (for example, a contract was “shared” by the account executive with his prospects)

| Input                    | Comments                                                                                                                                                | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               |                                                                                                                                                         |         |
| Reporting System         | The unique identifier of the reporting system. It is the same value in all events originating from the same system.                                     |         |
| Event Timestamp          | The date and time when the event happened in the ISO-8601 format (e.g., '2021-08-01T02:30:00+05:00' or '2021-08-01T08:00:00Z', where Z stands for UTC); |         |
| Event Id                 | The original id of the event as designated in the reporting system.                                                                                     |         |
| Content Id               | The id of the content that was shared in the reporting system.                                                                                          |         |
| Content Url              | The url of the content that was shared in the reporting system. This is the url that is was accessed by the viewer.                                     |         |
| Content Title            | Human readable title of the content.                                                                                                                    |         |
| Share Id                 |                                                                                                                                                         |         |
| Share Info Url           | The link to a page that presents additional information about this event.                                                                               |         |
| Sharing Message Subject  | The subject of share email / message.                                                                                                                   |         |
| Sharing Message Body     | The share message body. Can contain HTML and will be cleaned when it is presented.                                                                      |         |
| Sharer                   |                                                                                                                                                         |         |
| Recipients               |                                                                                                                                                         |         |
| CRM Context              |                                                                                                                                                         |         |
| Content Properties       |                                                                                                                                                         |         |
| Event Properties         |                                                                                                                                                         |         |
| Workspace Id             | Optional Workspace identifier, if supplied the API will return only the calls belonging to this workspace.                                              |         |
| Action Name              | The name of the action like 'Document Viewed' or 'Presentation Opened'.                                                                                 |         |
| Non Company Participants |                                                                                                                                                         |         |
| More Info Url            |                                                                                                                                                         |         |
| Mobile App Id            | The application identification string in case of interaction via mobile application (bundle identifier or package name).                                |         |
| Agent Platform           | Platform on which the interaction was made                                                                                                              |         |
| User Agent               | 'User-Agent' header value for browser based interaction                                                                                                 |         |

### Custom Viewed Event

Push engagement events into Gong and display them as events in Gong's activity timeline, when a Gong user shares content with external participants (for example, a contract was “shared” by the account executive with his prospects)

| Input                    | Comments                                                                                                                                                | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               |                                                                                                                                                         |         |
| Reporting System         | The unique identifier of the reporting system. It is the same value in all events originating from the same system.                                     |         |
| Event Timestamp          | The date and time when the event happened in the ISO-8601 format (e.g., '2021-08-01T02:30:00+05:00' or '2021-08-01T08:00:00Z', where Z stands for UTC); |         |
| Event Id                 | The original id of the event as designated in the reporting system.                                                                                     |         |
| Content Id               | The id of the content that was shared in the reporting system.                                                                                          |         |
| Content Url              | The url of the content that was shared in the reporting system. This is the url that is was accessed by the viewer.                                     |         |
| Content Title            | Human readable title of the content.                                                                                                                    |         |
| View Action Title        | The name of the action like 'Document Viewed' or 'Presentation Opened'.                                                                                 |         |
| Share Id                 |                                                                                                                                                         |         |
| View Info URL            | The link to a page that presents additional information about this event.                                                                               |         |
| Viewer                   |                                                                                                                                                         |         |
| CRM Context              |                                                                                                                                                         |         |
| Content Properties       |                                                                                                                                                         |         |
| Event Properties         |                                                                                                                                                         |         |
| User Agent               | 'User-Agent' header value for browser based interaction                                                                                                 |         |
| Mobile App Id            | The application identification string in case of interaction via mobile application (bundle identifier or package name).                                |         |
| Agent Platform           | Platform on which the interaction was made                                                                                                              |         |
| Workspace Id             | Optional Workspace identifier, if supplied the API will return only the calls belonging to this workspace.                                              |         |
| Non Company Participants |                                                                                                                                                         |         |
| More Info Url            |                                                                                                                                                         |         |
| Action Name              | The name of the action like 'Document Viewed' or 'Presentation Opened'.                                                                                 |         |
| Sharer                   |                                                                                                                                                         |         |
| Sharing Message Subject  | The subject of share email / message.                                                                                                                   |         |
| Sharing Message Body     | The share message body. Can contain HTML and will be cleaned when it is presented.                                                                      |         |

### Delete Email Address and Associated Elements

Given an email address, this endpoint deletes from the Gong system any calls or email messages that reference this address.

| Input         | Comments           | Default |
| ------------- | ------------------ | ------- |
| Connection    |                    |         |
| Email Address | The email address. |         |

### Delete Gong Meeting

Deletes an existing Gong Meeting

| Input      | Comments                                                    | Default |
| ---------- | ----------------------------------------------------------- | ------- |
| Connection |                                                             |         |
| Meeting ID | Gong's unique identifier for the meeting (up to 20 digits). |         |

### Delete Phone Number and Associated Elements

Given a phone number, this endpoint deletes from the Gong system any leads or contacts with a matching phone number or mobile phone number.

| Input        | Comments                                                                                                                                                                                                                                                                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                                                                  |         |
| Phone Number | The phone number. This number must start with a + (plus) sign followed by the country code, area code, and local phone number. All other non-digits are ignored. The following are examples of permitted phone numbers: +1 425 555 2671, +1-425-555-2671, +1 425 5552671, +14255552671, +1 425 555 26 71, +1(425) 555-2671, etc. |         |

### Get Call

Retrieve data for a specific call (/v2/calls/[id])

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| Connection |                                                                 |         |
| Call Id    | Gong's unique numeric identifier for the call (up to 20 digits) |         |

### Get Call Transcript

Returns transcripts for calls that took place during the specified date period.

| Input          | Comments                                                                                                                                                                                                                                                                                                                                                                                                     | Default                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Connection     |                                                                                                                                                                                                                                                                                                                                                                                                              |                         |
| Cursor         | When paging is needed, provide the value supplied by the previous API call to bring the following page of records.                                                                                                                                                                                                                                                                                           |                         |
| From Date Time | Date and time (in ISO-8601 format: '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC) from which to list recorded calls. Returns calls that started on or after the specified date and time. If not provided, list starts with earliest call. For web-conference calls recorded by Gong, the date denotes its scheduled time, otherwise, it denotes its actual start time.       |                         |
| To Date Time   | Date and time (in ISO-8601 format: '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC) until which to list recorded calls. Returns calls that started up to but excluding specified date and time. If not provided, list ends with most recent call. For web-conference calls recorded by Gong, the date denotes its scheduled time, otherwise, it denotes its actual start time. |                         |
| Workspace Id   | Optional Workspace identifier, if supplied the API will return only the calls belonging to this workspace.                                                                                                                                                                                                                                                                                                   |                         |
| Call Ids       | List of calls Ids to be filtered. If not supplied, returns all calls between fromDateTime and toDateTime.                                                                                                                                                                                                                                                                                                    | <code>["000xxx"]</code> |

### Get Logs Data by Type and Time Range

List log entries that took place during a specified time range.

| Input          | Comments                                                                                                                                                                                                                                                                                                                                                                                               | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                                                                                                                                                                                                                                                                                                                        |         |
| Cursor         | When paging is needed, provide the value supplied by the previous API call to bring the following page of records.                                                                                                                                                                                                                                                                                     |         |
| Log Type       | Type of logs requested.                                                                                                                                                                                                                                                                                                                                                                                |         |
| From Date Time | Date and time (in ISO-8601 format: '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC) from which to list recorded calls. Returns calls that started on or after the specified date and time. If not provided, list starts with earliest call. For web-conference calls recorded by Gong, the date denotes its scheduled time, otherwise, it denotes its actual start time. |         |
| To Date Time   | The time until which to retrieve log records, in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC); if not specified, the logs end with the latest recorded log.                                                                                                                                                                               |         |

### Get User

Retrieve a specific user.

| Input      | Comments                                                         | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| Connection |                                                                  |         |
| User Id    | Gong's unique numeric identifier for the user (up to 20 digits). |         |

### List Calls

Retrieve call data by date range (/v2/calls)

| Input          | Comments                                                                                                                                                                                                                                                                                                                                                                                                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| Cursor         | When paging is needed, provide the value supplied by the previous API call to bring the following page of records.                                                                                                                                                                                                                                                                                           |         |
| From Date Time | Date and time (in ISO-8601 format: '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC) from which to list recorded calls. Returns calls that started on or after the specified date and time. If not provided, list starts with earliest call. For web-conference calls recorded by Gong, the date denotes its scheduled time, otherwise, it denotes its actual start time.       |         |
| To Date Time   | Date and time (in ISO-8601 format: '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC) until which to list recorded calls. Returns calls that started up to but excluding specified date and time. If not provided, list ends with most recent call. For web-conference calls recorded by Gong, the date denotes its scheduled time, otherwise, it denotes its actual start time. |         |
| Workspace Id   | Optional Workspace identifier, if supplied the API will return only the calls belonging to this workspace.                                                                                                                                                                                                                                                                                                   |         |

### List Calls in Folder

Given a folder id, this endpoint retrieves a list of calls in it.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Connection |                                                                    |         |
| Folder Id  | Gong's unique numeric identifier for the folder (up to 20 digits). |         |

### List Library Folders

Use this endpoint to retrieve a list of public library folders.

| Input        | Comments                                                                                                   | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                            |         |
| Workspace Id | Optional Workspace identifier, if supplied the API will return only the calls belonging to this workspace. |         |

### List References to an Email Address

Shows the elements in the Gong system that reference the given email address.

| Input         | Comments           | Default |
| ------------- | ------------------ | ------- |
| Connection    |                    |         |
| Email Address | The email address. |         |

### List References to a Phone Number

Shows the elements in the Gong system that reference the given phone number.

| Input        | Comments                                                                                                                                                                                                                                                                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                                                                  |         |
| Phone Number | The phone number. This number must start with a + (plus) sign followed by the country code, area code, and local phone number. All other non-digits are ignored. The following are examples of permitted phone numbers: +1 425 555 2671, +1-425-555-2671, +1 425 5552671, +14255552671, +1 425 555 26 71, +1(425) 555-2671, etc. |         |

### List Users

List all of the company's users.

| Input           | Comments                                                                                                                                                                                                                                                                                     | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                                                                                                                                              |         |
| Cursor          | When paging is needed, provide the value supplied by the previous API call to bring the following page of records.                                                                                                                                                                           |         |
| Include Avatars | Avatars are synthetic users representing Gong employees (CSMs and support providers) when they access your instance. References to avatars' IDs may be found in the outputs of other API endpoints. This parameter is optional, if not provided avatars will not be included in the results. | false   |

### List Workspaces

Returns a list of all workspaces including their details.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send raw HTTP request to Gong

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

### Update Gong Meeting

Updates an existing Gong Meeting

| Input           | Comments                                                                                                                            | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                     |         |
| Meeting ID      | Gong's unique identifier for the meeting (up to 20 digits).                                                                         |         |
| Start Time      | The meeting start time in ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).    |         |
| End Time        | The meeting end time in ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).      |         |
| Organizer Email | The email address of the user creating the meeting, the Gong consent page link will be used according to the settings of this user. |         |
| Invitees        | A list of email addresses of invitees to the event (not including the organizer).                                                   |         |
| External ID     | The ID as it is formed on the external system.                                                                                      |         |
| Title           | The title of the call. This title is available in the Gong system for indexing and search.                                          |         |
