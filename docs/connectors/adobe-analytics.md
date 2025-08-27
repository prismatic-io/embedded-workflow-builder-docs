---
title: Adobe Analytics Connector
sidebar_label: Adobe Analytics
description: Manage companies, report suites, metrics, dimensions and more within Adobe Analytics.
---

![Adobe Analytics](./assets/adobe-analytics.png#connector-icon)
Manage companies, report suites, metrics, dimensions and more within Adobe Analytics.

## Connections

### Adobe Analytics OAuth 2.0 Connection

Connect to Adobe Analytics via OAuth 2.0

To create an Adobe Analytics OAuth 2.0 app, first visit the [Adobe Developer Console](https://developer.adobe.com/console/).

- Create a new project
- Add the Adobe Analytics API to the project
- Select **User Authentication, OAuth** for the type of authentication you need, and then select **Web** for the type of application you're trying to integrate with Adobe
- For **Redirect URI** enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
- For **Redirect URI Pattern** enter your OAuth 2.0's base URL (minus the `/callback` portion).
- Take note of your **Client ID** and **Client Secret**

Enter your client ID and client secret when you create an Adobe Analytics connection.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                              | Default                                                                                                |
| ------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Authorize URL | The OAuth 2.0 Authorization URL for Adobe                             | https://ims-na1.adobelogin.com/ims/authorize/v2                                                        |
| Token URL     | The OAuth 2.0 Token URL for Adobe                                     | https://ims-na1.adobelogin.com/ims/token/v3                                                            |
| Scopes        | Scopes required for your app                                          | openid AdobeID read_organizations additional_info.projectedProductContext additional_info.job_function |
| Client ID     | Client ID of your app for the API. Generate in the developer console. |                                                                                                        |
| Client Secret | Client Secret of your app for the API                                 |                                                                                                        |

## Actions

### Get Current User

Get authenticated user and associated organizations and companies

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Report Suite

Get a report suite by ID

| Input             | Comments | Default |
| ----------------- | -------- | ------- |
| Connection        |          |         |
| Global Company ID |          |         |
| Report Suite ID   |          |         |

### List Companies

List all companies the authenticate user can access

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Dimensions for Report Suite

Get a list of dimensions for a given report suite

| Input             | Comments | Default |
| ----------------- | -------- | ------- |
| Connection        |          |         |
| Global Company ID |          |         |
| Report Suite ID   |          |         |

### List Metrics for Report Suite

Get a list of metrics for a given report suite

| Input             | Comments | Default |
| ----------------- | -------- | ------- |
| Connection        |          |         |
| Global Company ID |          |         |
| Report Suite ID   |          |         |

### List Report Suites

Retrieve a list of report suites

| Input             | Comments | Default |
| ----------------- | -------- | ------- |
| Connection        |          |         |
| Global Company ID |          |         |

### List Virtual Report Suites

Retrieve a list of virtual report suites

| Input             | Comments | Default |
| ----------------- | -------- | ------- |
| Connection        |          |         |
| Global Company ID |          |         |

### Raw Request

Send raw HTTP request to Adobe Analytics

| Input                   | Comments                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                      |         |
| URL                     | Input the path only (/discovery/me), The base URL is already included (https://analytics.adobe.io). For example, to connect to https://analytics.adobe.io/discovery/me, only /discovery/me is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                  |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                 | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                           | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                      | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                            | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                     | false   |

### Run Report

Run a report

| Input               | Comments                                                                                 | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          |                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Global Company ID   |                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Report Suite ID     |                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Dimension           |                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Report Request Body | The body of the report request. Specify all fields besides dimension and report ID here. | <code>{<br /> "globalFilters": [<br /> {<br /> "type": "dateRange",<br /> "dateRange": "YYYY-12-31T00:00:00.000/YYYY-01-31T23:59:59.999"<br /> }<br /> ],<br /> "metricContainer": {<br /> "metrics": [<br /> {<br /> "columnId": "0",<br /> "id": "metrics/pageviews",<br /> "filters": [<br /> "0"<br /> ]<br /> }<br /> ],<br /> "metricFilters": [<br /> {<br /> "id": "0",<br /> "type": "dateRange",<br /> "dateRange": "YYYY-12-31T00:00:00.000/YYYY-01-31T23:59:59.999"<br /> }<br /> ]<br /> },<br /> "settings": {<br /> "dimensionSort": "asc",<br /> "limit": "10",<br /> "page": "2"<br /> }<br />}</code> |
