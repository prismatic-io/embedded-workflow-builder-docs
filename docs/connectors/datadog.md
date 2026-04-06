---
title: Datadog Connector
sidebar_label: Datadog
description: Interact with the Datadog API to submit metrics, manage webhooks, and monitor your infrastructure and application performance.
---

![Datadog](./assets/datadog.png#connector-icon)
[Datadog](https://www.datadoghq.com/) is a monitoring and analytics platform for cloud-scale infrastructure, applications, and logs.
This component allows submitting metrics, managing webhook integrations, and receiving monitor alert notifications from Datadog.

## API Documentation

This component was built using the [Datadog API Reference](https://docs.datadoghq.com/api/latest/) utilizing the v2 Metrics API and v1 Webhooks Integration API.

- [Metrics API (v2)](https://docs.datadoghq.com/api/latest/metrics/)
- [Webhooks Integration API (v1)](https://docs.datadoghq.com/api/latest/webhooks-integration/)
- [Authentication](https://docs.datadoghq.com/api/latest/authentication/)

## Connections

### API Key + Application Key {#apikey}

Authenticate using a Datadog API Key and Application Key. The API Key authenticates your organization, and the Application Key authorizes management operations.

#### Prerequisites

To configure this connection, the following are required:

- A Datadog account with appropriate permissions
- A Datadog API Key (created under Organization Settings > API Keys)
- A Datadog Application Key (created under Organization Settings > Application Keys)

#### Setup Steps

1. Log in to the [Datadog account](https://app.datadoghq.com/).
2. Navigate to **Organization Settings** > **API Keys**.
3. Click **+ New Key** to create an API Key. Copy the key value.
4. Navigate to **Organization Settings** > **Application Keys**.
5. Click **+ New Key** to create an Application Key. Copy the key value.
6. Note the Datadog site/region (e.g., US1, EU, US3).

#### Configure the Connection

Create a connection of type **API Key + Application Key** and enter:

| Field               | Description                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| **Datadog Site**    | Select the Datadog site that matches the organization (US1, US3, US5, EU, AP1, AP2, or US1-FED). |
| **API Key**         | The Datadog API Key. Identifies the organization.                                                |
| **Application Key** | The Datadog Application Key. Authorizes management and read operations.                          |

| Input           | Comments                                                                                                                                    | Default                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| Datadog Site    | Select the Datadog site that matches your organization. This determines the API base URL.                                                   | https://api.datadoghq.com |
| API Key         | The Datadog API Key. Create one at Organization Settings > API Keys in Datadog.                                                             |                           |
| Application Key | The Datadog Application Key. Required for management and read endpoints. Create one at Organization Settings > Application Keys in Datadog. |                           |

### OAuth 2.0 Authorization Code {#oauth2}

Authenticate using OAuth 2.0 Authorization Code flow. Primarily used for Datadog integration partners and marketplace apps.

#### Prerequisites

To configure this connection, the following are required:

- A Datadog account with organization admin permissions
- A registered OAuth application with Datadog (typically for marketplace/partner integrations)
- The Client ID and Client Secret from the OAuth application

#### Setup Steps

1. Register the application with Datadog as an integration partner.
2. Obtain the Client ID and Client Secret from the Datadog Developer Platform.
3. Configure the required OAuth scopes for the use case (e.g., metrics_read, create_webhooks).
4. Note the Datadog site/region (e.g., US1, EU, US3).

#### Configure the Connection

Create a connection of type **OAuth 2.0 Authorization Code** and enter:

| Field             | Description                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------- |
| **Datadog Site**  | Select the Datadog site that matches the organization.                                                        |
| **Scopes**        | Space-separated OAuth scopes. Available: metrics_read, timeseries_query, metric_tags_manage, create_webhooks. |
| **Client ID**     | The Client ID from the Datadog OAuth application.                                                             |
| **Client Secret** | The Client Secret from the Datadog OAuth application.                                                         |

The Authorize URL and Token URL are pre-configured for the standard Datadog OAuth endpoints.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                  | Default                   |
| ------------- | ----------------------------------------------------------------------------------------- | ------------------------- |
| Datadog Site  | Select the Datadog site that matches your organization. This determines the API base URL. | https://api.datadoghq.com |
| Client ID     | The Client ID from your Datadog OAuth application.                                        |                           |
| Client Secret | The Client Secret from your Datadog OAuth application.                                    |                           |

## Triggers

### Alert Notification Events {#webhook}

Receive Datadog monitor alert notifications via webhook. Automatically registers a webhook in Datadog on deploy and removes it on delete.

| Input          | Comments                                                                                                                                              | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Datadog connection to use for authentication.                                                                                                     |         |
| Webhook Name   | The name of the webhook. Used in Datadog monitor notifications as @webhook-NAME.                                                                      |         |
| Payload        | Custom JSON payload for the webhook. If not provided, uses the default Datadog payload with standard variables like $ALERT_TITLE, $ALERT_STATUS, etc. |         |
| Custom Headers | Custom headers to attach to webhook requests as a JSON string. Useful for authentication headers.                                                     |         |

## Actions

### Create Webhook {#createwebhook}

Create a new webhook integration endpoint in Datadog. The webhook can then be referenced in monitor notifications as @webhook-NAME.

| Input          | Comments                                                                                                                                              | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Datadog connection to use for authentication.                                                                                                     |         |
| Webhook Name   | The name of the webhook. Used in Datadog monitor notifications as @webhook-NAME.                                                                      |         |
| Webhook URL    | The URL of the webhook endpoint that will receive the data.                                                                                           |         |
| Custom Headers | Custom headers to attach to webhook requests as a JSON string. Useful for authentication headers.                                                     |         |
| Encode As      | Encoding type for the webhook payload. Defaults to "json".                                                                                            |         |
| Payload        | Custom JSON payload for the webhook. If not provided, uses the default Datadog payload with standard variables like $ALERT_TITLE, $ALERT_STATUS, etc. |         |

### Delete Webhook {#deletewebhook}

Delete a Datadog webhook integration by name. This action cannot be undone.

| Input        | Comments                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------- | ------- |
| Connection   | The Datadog connection to use for authentication.                                |         |
| Webhook Name | The name of the webhook. Used in Datadog monitor notifications as @webhook-NAME. |         |

### Get Webhook {#getwebhook}

Retrieve the configuration of a specific Datadog webhook integration by name.

| Input        | Comments                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------- | ------- |
| Connection   | The Datadog connection to use for authentication.                                |         |
| Webhook Name | The name of the webhook. Used in Datadog monitor notifications as @webhook-NAME. |         |

### List Metrics {#listmetrics}

List active metric names that have reported data since a given timestamp, with optional host and tag filtering.

| Input      | Comments                                                                                                   | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Datadog connection to use for authentication.                                                          |         |
| From       | Unix timestamp (seconds) from which to list active metrics. Metrics reported after this time are returned. |         |
| Host       | Hostname to filter the list of active metrics. Only metrics reported by this host are returned.            |         |
| Tag Filter | Filter metrics by tag. Supports boolean expressions (e.g., "env:production AND role:web").                 |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to any Datadog API endpoint.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Datadog connection to use for authentication.                                                                                                                                                |         |
| URL                     | The URL path to send the request to. The base URL is determined by the Datadog Site configured in the connection. For example, to call the Submit Metrics endpoint, enter /api/v2/series.        |         |
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

### Search Metrics {#searchmetrics}

Search for Datadog metrics by name prefix. Returns matching metric names.

| Input      | Comments                                                                                   | Default |
| ---------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection | The Datadog connection to use for authentication.                                          |         |
| Query      | Search query to find metrics by name prefix. The "metrics:" prefix is added automatically. |         |

### Submit Metrics {#submitmetrics}

Submit time-series metric data to Datadog for graphing on dashboards. Uses the v2 API endpoint.

| Input         | Comments                                                                                                                                                                            | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Datadog connection to use for authentication.                                                                                                                                   |         |
| Metric Series | JSON array of metric series to submit. Each series must include "metric" (name) and "points" (array of {timestamp, value}). Optional fields: type, interval, unit, tags, resources. |         |

### Submit Single Metric {#submitsinglemetric}

Submit a single metric data point to Datadog. For bulk submissions, use the Submit Metrics action.

| Input         | Comments                                                                                                                                | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Datadog connection to use for authentication.                                                                                       |         |
| Metric Name   | The name of the timeseries metric (e.g., system.load.1, custom.my_metric).                                                              |         |
| Value         | The numeric value for the metric data point (64-bit float).                                                                             |         |
| Timestamp     | Unix timestamp in seconds. Defaults to the current time if not provided. Must be within 10 minutes in the future or 1 hour in the past. |         |
| Metric Type   | The type of metric. Gauge is the default if unspecified. Count and Rate types require an interval.                                      |         |
| Tags          | Tags associated with the metric. Each tag is a string in "key:value" format.                                                            |         |
| Unit          | The unit of the metric value (e.g., byte, second, request).                                                                             |         |
| Interval      | The interval in seconds. Required if the metric type is rate or count.                                                                  |         |
| Resource Name | The name of the resource to associate with this metric (e.g., hostname).                                                                |         |
| Resource Type | The type of resource (e.g., "host").                                                                                                    |         |

### Update Webhook {#updatewebhook}

Update the configuration of an existing Datadog webhook integration.

| Input          | Comments                                                                                                                                              | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Datadog connection to use for authentication.                                                                                                     |         |
| Webhook Name   | The name of the webhook. Used in Datadog monitor notifications as @webhook-NAME.                                                                      |         |
| Webhook URL    | The URL of the webhook endpoint that will receive the data.                                                                                           |         |
| Custom Headers | Custom headers to attach to webhook requests as a JSON string. Useful for authentication headers.                                                     |         |
| Encode As      | Encoding type for the webhook payload. Defaults to "json".                                                                                            |         |
| Payload        | Custom JSON payload for the webhook. If not provided, uses the default Datadog payload with standard variables like $ALERT_TITLE, $ALERT_STATUS, etc. |         |
