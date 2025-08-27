---
title: New Relic Connector
sidebar_label: New Relic
description: Easily manage metrics, logs, and events
---

![New Relic](./assets/new-relic.png#connector-icon)
Easily manage metrics, logs, and events

## Connections

### API Key

Authenticate requests to New Relic using an API key.

After you obtain an **API key** from your [New Relic Account Settings](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).
The New Relic **API key** can be put directly into a New Relic connection.

| Input   | Comments                                        | Default |
| ------- | ----------------------------------------------- | ------- |
| API Key | Provide the API key from the developer console. |         |

## Actions

### Raw Request

Send raw HTTP request to New Relic

| Input                   | Comments                                                                                                                                                                                                            | Default                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Connection              |                                                                                                                                                                                                                     |                             |
| Base URL                |                                                                                                                                                                                                                     | https://api.newrelic.com/v2 |
| URL                     | Input the path only (/labels.json), The base URL is already included (https://api.newrelic.com/v2). For example, to connect to https://api.newrelic.com/v2/labels.json, only /labels.json is entered in this field. |                             |
| Method                  | The HTTP method to use.                                                                                                                                                                                             |                             |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                           |                             |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                |                             |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                    |                             |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                              |                             |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                 |                             |
| Header                  | A list of headers to send with the request.                                                                                                                                                                         |                             |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                            | json                        |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                 |                             |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                | false                       |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                 | 0                           |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                    | false                       |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                 | 0                           |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                       | false                       |

### Send Detailed Logs

Use the Log API to send a detailed log using a custom request body to New Relic

| Input      | Comments                                                               | Default                                                                                                                                                                                                                                             |
| ---------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message    | Provide a JSON object containing the message of logs you want to send. | <code>{<br /> "timestamp": 1562767499238,<br /> "message": "{"service-name": "my-service", "user": {"id": 123, "name": "alice"}}",<br /> "service-name": "my-service",<br /> "user": {<br /> "id": 123,<br /> "name": "alice"<br /> }<br />}</code> |
| Connection |                                                                        |                                                                                                                                                                                                                                                     |

### Send Event Data

Use the Event API to send custom event data to New Relic

| Input                 | Comments                                                                 | Default |
| --------------------- | ------------------------------------------------------------------------ | ------- |
| Event Type            | Can be a combination of alphanumeric characters, underscores, and colons |         |
| Additional Attributes | Provide any key value pairs to pass with your request body.              |         |
| Account Id            | Provide the unique identifier of your New Relic Insights account.        |         |
| Connection            |                                                                          |         |

### Send Logs

Use the Log API to send log data to New Relic

| Input      | Comments                                                               | Default |
| ---------- | ---------------------------------------------------------------------- | ------- |
| Message    | Provide a JSON string containing the message of logs you want to send. |         |
| Timestamp  | Provide a valid UNIX timestamp to be passed alongside the logs.        |         |
| Connection |                                                                        |         |

### Send Metric Data

Use the Metric API to send custom metrics to the New Relic

| Input        | Comments                                                                                                                                                                                                                               | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Metric Name  | Provide the name of the metric you would like to report.                                                                                                                                                                               |         |
| Metric Type  | Provide a string value for the type of metric you would like to report. In order to correctly chose this value refer to the list of types here: https://docs.newrelic.com/docs/data-apis/understand-data/metric-data/metric-data-type/ |         |
| Metric Value | Provide a value to report.                                                                                                                                                                                                             |         |
| Attributes   | A map of key value pairs associated with this specific metric. Values can be strings, JSON numbers, or booleans. Keys are case-sensitive and must be less than 255 characters.                                                         |         |
| Timestamp    | Provide a valid UNIX timestamp to be passed alongside the logs.                                                                                                                                                                        |         |
| Connection   |                                                                                                                                                                                                                                        |         |
