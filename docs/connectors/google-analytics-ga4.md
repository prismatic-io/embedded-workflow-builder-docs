---
title: Google Analytics - GA4 Connector
sidebar_label: Google Analytics - GA4
description: Manage Google Analytics GA4 accounts and data
---

![Google Analytics - GA4](./assets/google-analytics-ga4.png#connector-icon)
Manage Google Analytics GA4 accounts and data

## Connections

### Google Analytics OAuth 2.0

Authenticate requests to Google Analytics using values obtained from the Google Cloud Platform.

The Google Analytics component authenticates requests through Google's OAuth 2.0 service.

To create a Google Analytics developer account and authenticate, follow their [Configure OAuth Consent guide](https://developers.google.com/workspace/guides/configure-oauth-consent)

Now, you will have to configure OAuth 2.0 settings. Create a new Google Analytics connection of type **OAuth 2.0**.

- For **Client ID** and **Client Secret** enter the values that you got from the Google Cloud Platform auth settings.
- For **Scopes** choose from the list found on [Google's service scopes documentation](https://developers.google.com/identity/protocols/oauth2/scopes#analytics)

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default                                                                                                                                                                                            |
| ------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. | https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/analytics.manage.users https://www.googleapis.com/auth/analytics.edit https://www.googleapis.com/auth/analytics.readonly |
| Client ID     | Provide a string value for the client Id of your OAuth 2.0 application.             |                                                                                                                                                                                                    |
| Client Secret | Provide a string value for the client secret of your OAuth 2.0 application.         |                                                                                                                                                                                                    |

## Actions

### Get Property

Get property by ID

| Input       | Comments | Default |
| ----------- | -------- | ------- |
| Connection  |          |         |
| Property ID |          |         |

### List Accounts

Return a list of accounts accessible by the caller

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Properties

List Google Analytics GA4 properties for an account

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Account ID |          |         |

### Raw Request

Send raw HTTP request to Google Analytics GA4

| Input                   | Comments                                                                                                                                                                    | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                             |         |
| Base URL                |                                                                                                                                                                             |         |
| URL                     | Input the path only (/accounts), the base URL comes from the Base URL input. For example, to connect to <INPUT_BASE_URL>/accounts, only /accounts is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                     |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                   |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                        |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                            |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                         |         |
| Header                  | A list of headers to send with the request.                                                                                                                                 |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                    | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                         |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                        | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                             | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                   | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                            | false   |

### Run Report

Run a customized report on your Google Analytics event data

| Input        | Comments                                                                                                                                                                 | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection   |                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Property ID  |                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Request Body | See https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport for details on what dimensions, metrics, etc., you can specify. | <code>{<br /> "dimensions": [<br /> {<br /> "name": "pageTitle"<br /> }<br /> ],<br /> "metrics": [<br /> {<br /> "name": "sessions"<br /> }<br /> ],<br /> "dateRanges": [<br /> {<br /> "startDate": "7daysAgo",<br /> "endDate": "yesterday"<br /> }<br /> ],<br /> "dimensionFilter": {<br /> "notExpression": {<br /> "filter": {<br /> "fieldName": "pageTitle",<br /> "stringFilter": {<br /> "value": "My Homepage"<br /> }<br /> }<br /> }<br /> }<br />}</code> |

### Send Measurement Protocol Events

Sends Measurement Protocol Events to your Google Analytics G4 Account

| Input           | Comments                                                                                                 | Default |
| --------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Firebase App ID | The Firebase App ID, found in the Firebase console under Project Settings > General > Your Apps > App ID |         |
| App Instance ID | Your App's instance ID.                                                                                  |         |
| API Secret      | The API secret for your Google Analytics G4. Generated in the Google Analytics UI                        |         |
| Events To Send  | The events to send to Google Analytics                                                                   |         |
