---
title: Google Analytics - UA Connector
sidebar_label: Google Analytics - UA
description: Manage Google Analytics
---

![Google Analytics - UA](./assets/google-analytics.png#connector-icon)
Manage Google Analytics

## Connections

### Google Analytics OAuth 2.0 {#oauth2}

Authenticate requests to Google Analytics using values obtained from the Google Cloud Platform.

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
