---
title: Google Analytics - UA Connector
sidebar_label: Google Analytics - UA
description: Manage Google Analytics
---

![Google Analytics - UA](./assets/google-analytics.png#connector-icon)
[Google Analytics](https://analytics.google.com/) is Google's platform of analytics tooling.
This component provides actions related to the Universal Analytics (UA) API.

## Connections

### Google Analytics OAuth 2.0 {#oauth2}

Authenticate requests to Google Analytics using values obtained from the Google Cloud Platform.

The Google Analytics component authenticates requests through Google's OAuth 2.0 service.

To create a Google Analytics developer account and authenticate, follow their [Configure OAuth Consent guide](https://developers.google.com/workspace/guides/configure-oauth-consent)

Now, you will have to configure OAuth 2.0 settings. Create a new Google Analytics connection of type **OAuth 2.0**.

- For **Client ID** and **Client Secret** enter the values that you got from the Google Cloud Platform auth settings.
- For **Scopes** choose from the list found on [Google's service scopes documentation](https://developers.google.com/identity/protocols/oauth2/scopes#analytics)

#### App Verification

Google requires OAuth apps that request access to user data to pass a verification review before being deployed at scale. This process ensures the app complies with Google's API Services User Data Policy, accurately represents its functionality, and handles user data responsibly.

Google OAuth apps pass through three stages before they are ready for production use.

**Testing (unpublished):** The app is only accessible to users manually added as test users in the OAuth consent screen. Up to 100 test users are allowed — all other users receive an error. This is the expected state during initial development.

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
3. Submit for review — Google typically responds within several weeks

Refer to [Google's OAuth consent screen documentation](https://support.google.com/cloud/answer/10311615) for the full verification requirements.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default                                                                                                                                                                                            |
| ------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. | https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/analytics.manage.users https://www.googleapis.com/auth/analytics.edit https://www.googleapis.com/auth/analytics.readonly |
| Client ID     | Provide a string value for the client Id of your OAuth 2.0 application.             |                                                                                                                                                                                                    |
| Client Secret | Provide a string value for the client secret of your OAuth 2.0 application.         |                                                                                                                                                                                                    |

## Actions

### Get Custom Dimension {#getcustomdimension}

Get a Custom Dimensions

| Input               | Comments | Default |
| ------------------- | -------- | ------- |
| Connection          |          |         |
| Custom Dimension ID |          |         |
| Account ID          |          |         |
| Web Property ID     |          |         |

### Get Custom Metric {#getcustommetric}

Get a Custom Metric

| Input            | Comments | Default |
| ---------------- | -------- | ------- |
| Connection       |          |         |
| Custom Metric ID |          |         |
| Account ID       |          |         |
| Web Property ID  |          |         |

### Get Profile {#getprofile}

Get a Google Analytics Profile

| Input           | Comments | Default |
| --------------- | -------- | ------- |
| Connection      |          |         |
| Account ID      |          |         |
| Web Property ID |          |         |
| Profile ID      |          |         |

### Get View Data {#getdata}

Get Analytics data for a View (profile)

| Input                 | Comments                                                                 | Default |
| --------------------- | ------------------------------------------------------------------------ | ------- |
| Connection            |                                                                          |         |
| Start Date            |                                                                          |         |
| End Date              |                                                                          |         |
| Profile ID            |                                                                          |         |
| Standard Dimensions   |                                                                          |         |
| Standard Metrics      |                                                                          |         |
| Analytics Segment     |                                                                          |         |
| Additional Metrics    | Must be a comma seperated list of metrics i.e. 'ga:sesions,ga:pageviews' |         |
| Additional Dimensions | Must be a comma seperated list of dimensions i.e. 'ga:browser,ga:city'   |         |
| Filters               |                                                                          |         |
| Start Index           |                                                                          | 1       |
| Items Per Page        |                                                                          | 1000    |
| Include Empty Rows    |                                                                          | false   |

### Get Web Property {#getwebproperty}

Get Web Property

| Input           | Comments | Default |
| --------------- | -------- | ------- |
| Connection      |          |         |
| Account ID      |          |         |
| Web Property ID |          |         |

### Link User to Account {#adduser}

Link a User by email to specified Account

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Account ID |          |         |
| Email      |          |         |

### List Accounts {#listaccounts}

Paginated listing of Accounts

| Input          | Comments | Default |
| -------------- | -------- | ------- |
| Connection     |          |         |
| Start Index    |          | 1       |
| Items Per Page |          | 1000    |

### List Custom Dimensions {#listcustomdimensions}

List Custom Dimensions for the given Web Property

| Input           | Comments | Default |
| --------------- | -------- | ------- |
| Connection      |          |         |
| Web Property ID |          |         |
| Account ID      |          |         |
| Start Index     |          | 1       |
| Items Per Page  |          | 1000    |

### List Custom Metrics {#listcustommetrics}

List Custom Metrics for the given Web Property

| Input           | Comments | Default |
| --------------- | -------- | ------- |
| Connection      |          |         |
| Web Property ID |          |         |
| Account ID      |          |         |
| Start Index     |          | 1       |
| Items Per Page  |          | 1000    |

### List Profiles {#listprofiles}

List Profiles associated with the specified Account ID

| Input           | Comments | Default |
| --------------- | -------- | ------- |
| Connection      |          |         |
| Account ID      |          | ~all    |
| Web Property ID |          | ~all    |
| Start Index     |          | 1       |
| Items Per Page  |          | 1000    |

### List Web Properties {#listwebproperties}

List Web Properties associated with the specified Account ID

| Input          | Comments | Default |
| -------------- | -------- | ------- |
| Connection     |          |         |
| Account ID     |          |         |
| Start Index    |          | 1       |
| Items Per Page |          | 1000    |

### Raw Request {#rawrequest}

Send raw HTTP request to Google Analytics

| Input                   | Comments                                                                                                                                                                                                                                                            | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                     |         |
| URL                     | Input the path only (/management/accounts), The base URL is already included (https://www.googleapis.com/analytics/v3). For example, to connect to https://www.googleapis.com/analytics/v3/management/accounts, only /management/accounts is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                             |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                           |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                    |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                 |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                         |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                            | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                 |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                 | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                    | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                 | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                       | false   |
