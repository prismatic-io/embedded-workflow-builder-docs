---
title: Customer.io Connector
sidebar_label: Customer.io
description: Manage customers on the Customer.io platform.
---

![Customer.io](./assets/customer-io.png#connector-icon)
[Customer.io](https://customer.io/) is an automated messaging platform for marketing departments.
This component allows creating, deleting, and tracking customers on the Customer.io platform through the Track API.

## API Documentation

This component was built using the [Customer.io Track API Reference](https://docs.customer.io/integrations/api/track/).

## Connections

### API Key {#apikey}

Authenticate requests to Customer.io using an API key and secret.

To authenticate with Customer.io, both an API Key and a Site ID are required.
The Customer.io **API Key** serves as the API Key, and the **Site ID** serves as the API Secret.

#### Prerequisites

- A Customer.io account with the **Manage API credentials** permission

#### Setup Steps

1. Sign in to [Customer.io](https://customer.io/) and open the **Integrations** area for the workspace
2. Select the **Customer.io API** settings
3. Open the **Track API Keys** page to view the **Site ID** and **API Key**
4. Copy the **Site ID** and **API Key** values

Refer to the [Customer.io Track API Reference](https://docs.customer.io/integrations/api/track/) for additional details on authentication.

#### Configure the Connection

- Enter the **API Key** from the developer console into the **API Key** field
- Enter the **Site Id** from the developer console into the **Site Id** field

| Input   | Comments                                                 | Default |
| ------- | -------------------------------------------------------- | ------- |
| API Key | Provide the API key from the developer console.          |         |
| Site Id | Provide the Site Id obtained from the developer console. |         |

## Actions

### Destroy {#destroy}

Delete a customer by unique ID.

| Input      | Comments                                                       | Default |
| ---------- | -------------------------------------------------------------- | ------- |
| ID         | The unique identifier that targets a specific customer record. |         |
| Region     | The region in which the account is configured.                 |         |
| Connection | The Customer.io connection to use.                             |         |

### Identify {#identify}

Create or update a customer.

| Input         | Comments                                                                                                                                   | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| ID            | The unique identifier that targets a specific customer record.                                                                             |         |
| Region        | The region in which the account is configured.                                                                                             |         |
| Customer Data | The key and value pairs that make up a customer record. The key must be a string, and the value can be a string, number, array, or object. |         |
| Connection    | The Customer.io connection to use.                                                                                                         |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Customer.io.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Customer.io connection to use.                                                                                                                                                               |         |
| Region                  | The region in which the account is configured.                                                                                                                                                   |         |
| URL                     | The path to append to the base URL. Enter the path only (for example, /v1/accounts/region); the base URL (https://track.customer.io/api) is already included.                                    |         |
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

### Track {#track}

Track customer events.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| ID         | The unique identifier that targets a specific customer record.          |         |
| Region     | The region in which the account is configured.                          |         |
| Event Data | The key and value pairs that describe the event the customer performed. |         |
| Event Name | The identifier recorded for the tracked event.                          |         |
| Connection | The Customer.io connection to use.                                      |         |

### Track Page View {#trackpageview}

Track a customer page view.

| Input      | Comments                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| ID         | The unique identifier that targets a specific customer record.                                                   |         |
| Region     | The region in which the account is configured.                                                                   |         |
| URL        | The page path to track. Enter the full path to track a specific page, or use the asterisk '*' to track any page. |         |
| Connection | The Customer.io connection to use.                                                                               |         |
