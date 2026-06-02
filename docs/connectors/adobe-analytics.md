---
title: Adobe Analytics Connector
sidebar_label: Adobe Analytics
description: Manage companies, report suites, metrics, dimensions and more within Adobe Analytics.
---

![Adobe Analytics](./assets/adobe-analytics.png#connector-icon)
Manage companies, report suites, metrics, dimensions and more within Adobe Analytics.

## Connections

### OAuth 2.0 {#adobeanalyticsoauth}

Authenticate using OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                   | Default                                                                                                |
| ------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Authorize URL | The OAuth 2.0 authorization URL for Adobe.                 | https://ims-na1.adobelogin.com/ims/authorize/v2                                                        |
| Token URL     | The OAuth 2.0 token URL for Adobe.                         | https://ims-na1.adobelogin.com/ims/token/v3                                                            |
| Scopes        | The space-delimited OAuth scopes required for API access.  | openid AdobeID read_organizations additional_info.projectedProductContext additional_info.job_function |
| Client ID     | The client ID for the Adobe Developer Console project.     |                                                                                                        |
| Client Secret | The client secret for the Adobe Developer Console project. |                                                                                                        |

## Triggers

### New Records {#pollchangestrigger}

Checks for new report suites or companies in Adobe Analytics on a configured schedule.

| Input             | Comments                                          | Default |
| ----------------- | ------------------------------------------------- | ------- |
| Connection        | The Adobe Analytics connection to use.            |         |
| Global Company ID | The unique identifier for the analytics company.  |         |
| Resource Type     | The type of resource to poll for new records.     |         |
| Show New Records  | Include newly created records in trigger results. | true    |

## Actions

### Get Current User {#getcurrentuser}

Retrieves the authenticated user and associated organizations and companies.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Adobe Analytics connection to use. |         |

### Get Report Suite {#getreportsuite}

Retrieves a report suite by ID.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        | The Adobe Analytics connection to use.               |         |
| Global Company ID | The unique identifier for the analytics company.     |         |
| Report Suite ID   | The unique identifier for the report suite to query. |         |

### List Companies {#listcompanies}

Lists all companies the authenticated user can access.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Adobe Analytics connection to use. |         |

### List Dimensions for Report Suite {#listreportsuitedimensions}

Retrieves a list of dimensions for a given report suite.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        | The Adobe Analytics connection to use.               |         |
| Global Company ID | The unique identifier for the analytics company.     |         |
| Report Suite ID   | The unique identifier for the report suite to query. |         |

### List Metrics for Report Suite {#listreportsuitemetrics}

Retrieves a list of metrics for a given report suite.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        | The Adobe Analytics connection to use.               |         |
| Global Company ID | The unique identifier for the analytics company.     |         |
| Report Suite ID   | The unique identifier for the report suite to query. |         |

### List Report Suites {#listreportsuites}

Retrieves a list of report suites.

| Input             | Comments                                         | Default |
| ----------------- | ------------------------------------------------ | ------- |
| Connection        | The Adobe Analytics connection to use.           |         |
| Global Company ID | The unique identifier for the analytics company. |         |

### List Virtual Report Suites {#listvirtualreportsuites}

Retrieves a list of virtual report suites.

| Input             | Comments                                         | Default |
| ----------------- | ------------------------------------------------ | ------- |
| Connection        | The Adobe Analytics connection to use.           |         |
| Global Company ID | The unique identifier for the analytics company. |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to Adobe Analytics.

| Input                   | Comments                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Adobe Analytics connection to use.                                                                                                                                                                               |         |
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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                        | false   |

### Run Report {#runreport}

Runs a report against a specified report suite.

| Input               | Comments                                                                                                                                       | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Adobe Analytics connection to use.                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Global Company ID   | The unique identifier for the analytics company.                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Report Suite ID     | The unique identifier for the report suite to query.                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Dimension           | The analytics dimension to break down the report by. Use the format variables/dimensionname.                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Report Request Body | The JSON request body for the report. Specify all fields besides dimension and report suite ID here, including filters, metrics, and settings. | <code>{<br /> "globalFilters": [<br /> {<br /> "type": "dateRange",<br /> "dateRange": "YYYY-12-31T00:00:00.000/YYYY-01-31T23:59:59.999"<br /> }<br /> ],<br /> "metricContainer": {<br /> "metrics": [<br /> {<br /> "columnId": "0",<br /> "id": "metrics/pageviews",<br /> "filters": [<br /> "0"<br /> ]<br /> }<br /> ],<br /> "metricFilters": [<br /> {<br /> "id": "0",<br /> "type": "dateRange",<br /> "dateRange": "YYYY-12-31T00:00:00.000/YYYY-01-31T23:59:59.999"<br /> }<br /> ]<br /> },<br /> "settings": {<br /> "dimensionSort": "asc",<br /> "limit": "10",<br /> "page": "2"<br /> }<br />}</code> |
