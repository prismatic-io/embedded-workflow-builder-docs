---
title: Gusto Connector
sidebar_label: Gusto
description: Manage payroll, benefits, and human resource within Gusto
---

![Gusto](./assets/gusto.png#connector-icon)
Manage payroll, benefits, and human resource within Gusto

## Connections

### Gusto OAuth 2.0 Connection

Connect to Gusto via OAuth 2.0

To create an OAuth 2.0 app in Gusto, sign up for a Gusto developer account at [https://dev.gusto.com/](https://dev.gusto.com/) and create a new Gusto application.
Take note of your applications's **Client ID** and **Secret** and enter those values when you add a Gusto connection to your integration.
Under **Redirect URI**, add the callback URL, `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                  | Default                               |
| ------------- | ----------------------------------------- | ------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Gusto | https://api.gusto.com/oauth/authorize |
| Token URL     | The OAuth 2.0 Token URL for Gusto         | https://api.gusto.com/oauth/token     |
| Client ID     | Client Identifier of your app for the API |                                       |
| Client Secret | Client Secret of your app for the API     |                                       |

## Triggers

### Webhook

Receive and validate webhook requests from Gusto for webhooks you configure.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

## Actions

### Create Employee

Create an employee of a company

| Input                  | Comments                               | Default |
| ---------------------- | -------------------------------------- | ------- |
| Connection             |                                        |         |
| Company ID             | A UUID representing a company.         |         |
| First Name             | The employee's first name.             |         |
| Middle Initial         | The employee's middle initial.         |         |
| Last Name              | The employee's last name.              |         |
| Date of Birth          | The employee's date of birth.          |         |
| Email Address          | The employee's personal email address. |         |
| Social Security Number | The employee's social security number. |         |

### Create Webhook Subscription

Creates a Webhook Subscription to receive notifications when entities change for Gusto.

| Input              | Comments                                                                                 | Default |
| ------------------ | ---------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                          |         |
| Webhook URL        | The URL for the webhook subscription.                                                    |         |
| Subscription Types | Types of notifications to receive when entities change. Enter as comma-separated values. |         |

### Delete Webhook Subscription

Deletes the Webhook Subscription associated with the provided UUID for Gusto.

| Input                     | Comments                       | Default |
| ------------------------- | ------------------------------ | ------- |
| Connection                |                                |         |
| Webhook Subscription UUID | The webhook subscription UUID. |         |

### Find Employee by Email

Get an employee by personal email address.

| Input         | Comments                               | Default |
| ------------- | -------------------------------------- | ------- |
| Connection    |                                        |         |
| Company ID    | A UUID representing a company.         |         |
| Email Address | The employee's personal email address. |         |

### Get Company by ID

Get company metadata by ID

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection |                                |         |
| Company ID | A UUID representing a company. |         |

### Get Employee

Get an employee by ID

| Input       | Comments                        | Default |
| ----------- | ------------------------------- | ------- |
| Connection  |                                 |         |
| Employee ID | A UUID representing a employee. |         |

### Get Pay Schedule by ID

Get a pay schedules for a company by pay schedule ID

| Input           | Comments                            | Default |
| --------------- | ----------------------------------- | ------- |
| Connection      |                                     |         |
| Company ID      | A UUID representing a company.      |         |
| Pay Schedule ID | A UUID representing a pay schedule. |         |

### Get Webhook Events

Get webhook events based on the partner application's scopes for Gusto.

| Input                      | Comments                                                                                          | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection                 |                                                                                                   |         |
| Page                       | The page that is requested. When unspecified, will load the first page.                           |         |
| Number of Objects per Page | Number of objects per page. When unspecified, will default to 25.                                 |         |
| Starting After UUID        | Serves as a cursor, returns all events occurring after specified UUID (exclusive).                |         |
| Event Type                 | A string containing the exact event name or use a wildcard match to filter for a group of events. |         |

### Get Webhook Subscription

Returns the Webhook Subscription associated with the provided UUID for Gusto.

| Input                     | Comments                       | Default |
| ------------------------- | ------------------------------ | ------- |
| Connection                |                                |         |
| Webhook Subscription UUID | The webhook subscription UUID. |         |

### List Companies

List all companies that the currently authenticated user is a part of

| Input           | Comments                                                                                    | Default |
| --------------- | ------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                             |         |
| Pagination Page | Which page of results to fetch. See https://docs.gusto.com/app-integrations/docs/pagination |         |

### List Company Admins

List all admin users at a company

| Input           | Comments                                                                                    | Default |
| --------------- | ------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                             |         |
| Company ID      | A UUID representing a company.                                                              |         |
| Pagination Page | Which page of results to fetch. See https://docs.gusto.com/app-integrations/docs/pagination |         |

### List Employees

List employees of a company

| Input           | Comments                                                                                    | Default |
| --------------- | ------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                             |         |
| Company ID      | A UUID representing a company.                                                              |         |
| Pagination Page | Which page of results to fetch. See https://docs.gusto.com/app-integrations/docs/pagination |         |

### List Pay Schedules

List pay schedules for a company

| Input           | Comments                                                                                    | Default |
| --------------- | ------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                             |         |
| Company ID      | A UUID representing a company.                                                              |         |
| Pagination Page | Which page of results to fetch. See https://docs.gusto.com/app-integrations/docs/pagination |         |

### List Webhook Subscriptions

Returns all webhook subscriptions associated with the provided Partner API token for Gusto.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send raw HTTP request to Gusto

| Input                   | Comments                                                                                                                                                                                                | Default    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Connection              |                                                                                                                                                                                                         |            |
| API Version             | The API version to use.                                                                                                                                                                                 | 2025-06-15 |
| URL                     | Input the path only (/provision), The base URL is already included (https://api.gusto.com/v1). For example, to connect to https://api.gusto.com/v1/provision, only /provision is entered in this field. |            |
| Method                  | The HTTP method to use.                                                                                                                                                                                 |            |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                               |            |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                    |            |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                        |            |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                  |            |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                     |            |
| Header                  | A list of headers to send with the request.                                                                                                                                                             |            |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                | json       |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                     |            |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                     | 0          |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.        | false      |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                     | 0          |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                           | false      |

### Terminate Employee

End an employee's employment

| Input                    | Comments                                               | Default |
| ------------------------ | ------------------------------------------------------ | ------- |
| Connection               |                                                        |         |
| Employee ID              | A UUID representing a employee.                        |         |
| Termination Date         | The date the employee was terminated.                  |         |
| Run Termination Payroll? | Whether to run a termination payroll for the employee. | false   |

### Update Webhook Subscription

Updates the Webhook Subscription associated with the provided UUID for Gusto.

| Input                     | Comments                                                                                 | Default |
| ------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                          |         |
| Webhook Subscription UUID | The webhook subscription UUID.                                                           |         |
| Subscription Types        | Types of notifications to receive when entities change. Enter as comma-separated values. |         |
