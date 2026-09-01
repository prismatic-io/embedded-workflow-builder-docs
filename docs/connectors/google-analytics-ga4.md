---
title: Google Analytics - GA4 Connector
sidebar_label: Google Analytics - GA4
description: Manage Google Analytics GA4 accounts and data
---

![Google Analytics - GA4](./assets/google-analytics-ga4.png#connector-icon)
[Google Analytics](https://analytics.google.com/) is Google's platform of analytics tooling.
This component allows managing accounts and properties, running reports, and sending Measurement Protocol events in Google Analytics GA4.

## Connections

### OAuth 2.0 {#oauth2}

OAuth 2.0 connection for Google Analytics GA4

The Google Analytics component authenticates requests through Google's OAuth 2.0 service.

To create a Google Analytics developer account and authenticate, follow their [Configure OAuth Consent guide](https://developers.google.com/workspace/guides/configure-oauth-consent)

Configure OAuth 2.0 settings. Create a new Google Analytics connection of type **OAuth 2.0**.

- Enter the **Client ID** and **Client Secret** obtained from the Google Cloud Platform auth settings.
- For **Scopes** choose from the list found on [Google's service scopes documentation](https://developers.google.com/identity/protocols/oauth2/scopes#analytics)

#### App Verification

Google requires OAuth apps that request access to user data to pass a verification review before being deployed at scale. This process ensures the app complies with Google's API Services User Data Policy, accurately represents its functionality, and handles user data responsibly.

Google OAuth apps pass through three stages before they are ready for production use.

**Testing (unpublished):** The app is only accessible to users manually added as test users in the OAuth consent screen. Up to 100 test users are allowed. All other users receive an error. This is the expected state during initial development.

**Published, unverified:** After publishing the app, all Google users can authenticate. However, for sensitive scopes, users see a **"This app isn't verified"** warning. Users can proceed by clicking **Advanced** → **Go to [app name] (unsafe)**, but this warning reduces trust and may be blocked by organizations with strict Google Workspace policies.

**Verified:** Google has reviewed and approved the app. No warning is shown. Verification is required before deploying to production users.

#### Publishing the App

Publishing is required before any users outside the test list can authenticate:

1. In the [Google Cloud Console](https://console.cloud.google.com/), navigate to **APIs & Services** → **OAuth consent screen**
2. Click **PUBLISH APP** and confirm

#### Requesting Verification

The scopes used by this component are classified as **sensitive** by Google. Submitting for verification removes the "This app isn't verified" warning:

1. On the **OAuth consent screen**, click **Prepare for verification**
2. Provide a privacy policy URL, authorized domain, and app logo
3. Submit for review. Google typically responds within several weeks

Refer to [Google's OAuth consent screen documentation](https://support.google.com/cloud/answer/10311615) for the full verification requirements.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default                                                                                                                                                                                            |
| ------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. | https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/analytics.manage.users https://www.googleapis.com/auth/analytics.edit https://www.googleapis.com/auth/analytics.readonly |
| Client ID     | Provide a string value for the client Id of your OAuth 2.0 application.             |                                                                                                                                                                                                    |
| Client Secret | Provide a string value for the client secret of your OAuth 2.0 application.         |                                                                                                                                                                                                    |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for new and updated records in Google Analytics GA4 on a configured schedule.

| Input                | Comments                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Google Analytics GA4 connection to use.                                                              |         |
| Resource Type        | The Google Analytics GA4 resource type to poll for new or updated records.                               |         |
| Account ID           | The unique identifier for the Google Analytics account. Required when the Resource Type is 'Properties'. |         |
| Show New Records     | When true, newly created records are included in the trigger output.                                     | true    |
| Show Updated Records | When true, records that were modified after the last poll are included in the trigger output.            | true    |

## Actions

### Get Property {#getproperty}

Get property by ID

| Input       | Comments                                                                                                                | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Account ID  | The unique identifier for the GA4 account that owns the properties, in accounts/NNNNNNNNN form.                         |         |
| Property ID | The unique identifier for the GA4 property, in properties/NNNNNNNNN form. A bare numeric ID is accepted and normalized. |         |
| Connection  |                                                                                                                         |         |

### List Accounts {#listaccounts}

Return a list of accounts accessible by the caller

| Input      | Comments                                                                                                                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All  | When true, retrieves all pages of results.                                                                                                                                                                                       | false   |
| Pagination | Page and page-size controls.                                                                                                                                                                                                     |         |
| Page Size  | The maximum number of resources contained in the underlying API response. The API may return fewer values in a page, even if there are additional values to return. If unspecified, 200 is requested, which is also the maximum. |         |
| Page Token | If a previous response was truncated, the response includes a `nextPageToken`. To retrieve the next page of results, set this parameter to the value of `nextPageToken` from the previous response.                              |         |
| Connection |                                                                                                                                                                                                                                  |         |

### List Properties {#listproperties}

List Google Analytics GA4 properties for an account

| Input      | Comments                                                                                                                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Account ID | The unique identifier for the GA4 account that owns the properties, in accounts/NNNNNNNNN form.                                                                                                                                  |         |
| Fetch All  | When true, retrieves all pages of results.                                                                                                                                                                                       | false   |
| Pagination | Page and page-size controls.                                                                                                                                                                                                     |         |
| Page Size  | The maximum number of resources contained in the underlying API response. The API may return fewer values in a page, even if there are additional values to return. If unspecified, 200 is requested, which is also the maximum. |         |
| Page Token | If a previous response was truncated, the response includes a `nextPageToken`. To retrieve the next page of results, set this parameter to the value of `nextPageToken` from the previous response.                              |         |
| Connection |                                                                                                                                                                                                                                  |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Google Analytics GA4

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
| Base URL                |                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/accounts), the base URL comes from the Base URL input. For example, to connect to the selected base URL followed by /accounts, only /accounts is entered in this field.    |         |
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

### Run Report {#runreport}

Run a customized report on Google Analytics event data.

| Input        | Comments                                                                                                                                                                                                        | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection   |                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Account ID   | The unique identifier for the GA4 account that owns the properties, in accounts/NNNNNNNNN form.                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Property ID  | The unique identifier for the GA4 property, in properties/NNNNNNNNN form. A bare numeric ID is accepted and normalized.                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Request Body | See [Google Analytics API documentation](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport) for details on what dimensions, metrics, etc., can be specified. | <code>{<br /> "dimensions": [<br /> {<br /> "name": "pageTitle"<br /> }<br /> ],<br /> "metrics": [<br /> {<br /> "name": "sessions"<br /> }<br /> ],<br /> "dateRanges": [<br /> {<br /> "startDate": "7daysAgo",<br /> "endDate": "yesterday"<br /> }<br /> ],<br /> "dimensionFilter": {<br /> "notExpression": {<br /> "filter": {<br /> "fieldName": "pageTitle",<br /> "stringFilter": {<br /> "value": "My Homepage"<br /> }<br /> }<br /> }<br /> }<br />}</code> |

### Send Measurement Protocol Events {#sendmeasurementprotocolevents}

Sends Measurement Protocol Events to the Google Analytics GA4 account.

| Input           | Comments                                                                                                                                    | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Firebase App ID | The Firebase App ID, found in the Firebase console under Project Settings > General > Your Apps > App ID                                    |         |
| App Instance ID | The unique identifier assigned to an app installation on a device. Sent as app_instance_id in the Measurement Protocol payload.             |         |
| API Secret      | The Measurement Protocol API secret. Generate one in the Google Analytics UI under Admin > Data Streams > Measurement Protocol API secrets. |         |
| Events To Send  | The events to send to Google Analytics                                                                                                      |         |
