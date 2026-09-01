---
title: New Relic Connector
sidebar_label: New Relic
description: Send metrics, logs, and events to New Relic observability platform.
---

![New Relic](./assets/new-relic.png#connector-icon)
[New Relic](https://newrelic.com/) is an observability platform for monitoring application and infrastructure performance.
This component allows sending metrics, logs, and events to New Relic observability platform.

## API Documentation

This component was built using the [New Relic API](https://docs.newrelic.com/docs/apis/intro-apis/introduction-new-relic-apis/).

## Connections

### API Key {#apikey}

Authenticate requests to New Relic using an API key.

After obtaining an **API key** from the [New Relic Account Settings](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/),
the New Relic **API key** can be put directly into a New Relic connection.

| Input   | Comments                                                 | Default |
| ------- | -------------------------------------------------------- | ------- |
| API Key | Provide the API key from the developer console.          |         |
| Region  | Select the New Relic data center region for the account. | US      |

## Actions

### Raw Request {#rawrequest}

Send raw HTTP request to New Relic.

| Input                   | Comments                                                                                                                                                                                                            | Default                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Connection              | The New Relic connection to use.                                                                                                                                                                                    |                             |
| Base URL                | The base URL for the New Relic API.                                                                                                                                                                                 | https://api.newrelic.com/v2 |
| URL                     | Input the path only (/labels.json). The base URL is already included (https://api.newrelic.com/v2). For example, to connect to https://api.newrelic.com/v2/labels.json, only /labels.json is entered in this field. |                             |
| Method                  | The HTTP method to use.                                                                                                                                                                                             |                             |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                           |                             |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                |                             |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                    |                             |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                              |                             |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                 |                             |
| Header                  | A list of headers to send with the request.                                                                                                                                                                         |                             |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                            | json                        |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                 |                             |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                 | 0                           |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                    | false                       |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                 | 0                           |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                       | false                       |

### Send Detailed Logs {#senddetailedlogs}

Use the Log API to send a detailed log using a custom request body to New Relic.

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Message    | A JSON object containing the message of logs to send. |         |
| Connection | The New Relic connection to use.                      |         |

### Send Event Data {#sendeventdata}

Use the Event API to send custom event data to New Relic.

| Input                 | Comments                                                                                                             | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Event Type            | The event type name used to categorize the event in NRDB. Allowed characters: alphanumeric, underscores, and colons. |         |
| Additional Attributes | Key-value pairs to include in the request body.                                                                      |         |
| Account ID            | The unique identifier of the New Relic Insights account.                                                             |         |
| Connection            | The New Relic connection to use.                                                                                     |         |

### Send Logs {#sendlogs}

Use the Log API to send log data to New Relic.

| Input      | Comments                                                | Default |
| ---------- | ------------------------------------------------------- | ------- |
| Message    | A JSON string containing the message of logs to send.   |         |
| Timestamp  | A valid UNIX timestamp to be passed alongside the logs. |         |
| Connection | The New Relic connection to use.                        |         |

### Send Metric Data {#sendmetrics}

Use the Metric API to send custom metrics to New Relic.

| Input        | Comments                                                                                                                                                                       | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Metric Name  | The name of the metric to report.                                                                                                                                              |         |
| Metric Type  | The type of metric to report. See [metric data types](https://docs.newrelic.com/docs/data-apis/understand-data/metric-data/metric-data-type/) for details.                     |         |
| Metric Value | The numeric value to report for the metric.                                                                                                                                    |         |
| Attributes   | A map of key-value pairs associated with this specific metric. Values can be strings, JSON numbers, or booleans. Keys are case-sensitive and must be less than 255 characters. |         |
| Timestamp    | A valid UNIX timestamp to be passed alongside the logs.                                                                                                                        |         |
| Connection   | The New Relic connection to use.                                                                                                                                               |         |
