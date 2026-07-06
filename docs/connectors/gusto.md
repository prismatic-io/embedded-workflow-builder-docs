---
title: Gusto Connector
sidebar_label: Gusto
description: Manage payroll, benefits, and human resource within Gusto
---

![Gusto](./assets/gusto.png#connector-icon)
[Gusto](https://gusto.com) is a company that provides a cloud-based payroll, benefits, and human resource management software for businesses based in the United States.

## Connections

### OAuth 2.0 {#gustooauth}

OAuth 2.0 connection for Gusto

To create an OAuth 2.0 app for Gusto, sign up for a Gusto developer account and create a new application.

For detailed information, refer to the [Gusto Developer Documentation](https://docs.gusto.com/app-integrations/docs/introduction).

#### Prerequisites

- A Gusto developer account at [dev.gusto.com](https://dev.gusto.com/)

#### Setup Steps

1. Log in to the [Gusto Developer Portal](https://dev.gusto.com/) and create a new application
2. Enter a name and description for the application
3. Under **Redirect URI**, add the OAuth callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Save the application configuration

#### Configure the Connection

- Copy the **Client ID** and **Secret** from the application settings in the Gusto Developer Portal
- Enter the **Client ID** and **Client Secret** into the connection configuration

#### Production Access

Gusto restricts new app integrations to a demo environment until the app has been reviewed and approved for production access. This two-stage process evaluates the integration's security practices and intended use before granting access to real employee and payroll data.

Gusto apps pass through two states before they are ready for deployment.

**Demo environment (before production access):** Users can authenticate and the OAuth flow completes normally, but the integration connects to `api.gusto-demo.com`. Only demo payroll data is accessible. No real employee records, company data, or live payroll information can be reached. This is the expected state during development and testing.

**Production (after approval):** The integration connects to `api.gusto.com`. Real Gusto accounts and live payroll data become accessible.

**Complete the production access process before deploying to end users.** Gusto apps begin in the demo environment (`api.gusto-demo.com`) and can only access demo data. They cannot connect to real Gusto accounts until production access is granted. To gain production access, the integration must complete a two-stage approval process.

#### Production Pre-Approval

Submit a production access request through the Gusto Developer Portal. Gusto reviews the request and typically responds within 1–2 weeks, evaluating the integration's intended use case and data access requirements.

#### Security Review

In addition to the production access request, Gusto requires a security review. The integration must demonstrate compliance with industry security standards. Acceptable certifications include:

- SOC 2 Type II
- ISO 27001

Submit documentation demonstrating compliance as part of the production access process.

Once both the pre-approval and security review are complete, Gusto provides production credentials. Update the connection configuration with the production **Client ID** and **Client Secret** to connect to live Gusto accounts (`api.gusto.com`).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                  | Default                               |
| ------------- | ----------------------------------------- | ------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Gusto | https://api.gusto.com/oauth/authorize |
| Token URL     | The OAuth 2.0 Token URL for Gusto         | https://api.gusto.com/oauth/token     |
| Client ID     | Client Identifier of your app for the API |                                       |
| Client Secret | Client Secret of your app for the API     |                                       |

## Triggers

### Webhook {#gustowebhooktrigger}

Receive and validate webhook requests from Gusto for webhooks you configure.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

## Actions

### Create Employee {#createemployee}

Create an employee of a company

| Input                  | Comments                                                                                                                              | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                       |         |
| Company ID             | A UUID representing a company.                                                                                                        |         |
| First Name             | The employee's first name.                                                                                                            |         |
| Middle Initial         | The employee's middle initial.                                                                                                        |         |
| Last Name              | The employee's last name.                                                                                                             |         |
| Date of Birth          | The employee's date of birth.                                                                                                         |         |
| Email Address          | The employee's personal email address. Required if Self Onboarding is true.                                                           |         |
| Social Security Number | The employee's social security number.                                                                                                |         |
| Self Onboarding        | If true, employee is expected to self-onboard. If false, payroll admin is expected to enter in the employee's onboarding information. | false   |
| Additional Fields      | Additional fields that might not be covered by the standard inputs.                                                                   |         |

### Create Webhook Subscription {#createwebhooksubscription}

Creates a Webhook Subscription to receive notifications when entities change for Gusto.

| Input              | Comments                                                                                 | Default |
| ------------------ | ---------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                          |         |
| Webhook URL        | The URL for the webhook subscription.                                                    |         |
| Subscription Types | Types of notifications to receive when entities change. Enter as comma-separated values. |         |

### Delete Webhook Subscription {#deletewebhooksubscription}

Deletes the Webhook Subscription associated with the provided UUID for Gusto.

| Input                     | Comments                       | Default |
| ------------------------- | ------------------------------ | ------- |
| Connection                |                                |         |
| Webhook Subscription UUID | The webhook subscription UUID. |         |

### Find Employee by Email {#findemployeebyemail}

Get an employee by personal email address.

| Input         | Comments                               | Default |
| ------------- | -------------------------------------- | ------- |
| Connection    |                                        |         |
| Company ID    | A UUID representing a company.         |         |
| Email Address | The employee's personal email address. |         |

### Get Company by ID {#getcompany}

Get company metadata by ID

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection |                                |         |
| Company ID | A UUID representing a company. |         |

### Get Employee {#getemployee}

Get an employee by ID

| Input       | Comments                        | Default |
| ----------- | ------------------------------- | ------- |
| Connection  |                                 |         |
| Employee ID | A UUID representing a employee. |         |

### Get Pay Schedule by ID {#getpayschedule}

Get a pay schedules for a company by pay schedule ID

| Input           | Comments                            | Default |
| --------------- | ----------------------------------- | ------- |
| Connection      |                                     |         |
| Company ID      | A UUID representing a company.      |         |
| Pay Schedule ID | A UUID representing a pay schedule. |         |

### Get Webhook Events {#getwebhookevents}

Get webhook events based on the partner application's scopes for Gusto.

| Input               | Comments                                                                                                      | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                               |         |
| Resource UUID       | The UUID of the company. If not specified, will return all events for all companies.                          |         |
| Event Type          | A string containing the exact event name or use a wildcard match to filter for a group of events.             |         |
| Sort Order          | Sort resulting events in ascending (asc) or descending (desc) chronological order.                            |         |
| Fetch All           | When enabled, automatically fetches all pages of results. Pagination inputs are ignored when this is enabled. | false   |
| Starting After UUID | Serves as a cursor, returns all events occurring after specified UUID (exclusive).                            |         |
| Limit               | Limits the number of objects returned in a single response, between 1 and 100. Defaults to 25.                |         |

### Get Webhook Subscription {#getwebhooksubscription}

Returns the Webhook Subscription associated with the provided UUID for Gusto.

| Input                     | Comments                       | Default |
| ------------------------- | ------------------------------ | ------- |
| Connection                |                                |         |
| Webhook Subscription UUID | The webhook subscription UUID. |         |

### List Companies {#listcompanies}

List all companies that the currently authenticated user is a part of

| Input           | Comments                                                                                                                                     | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                              |         |
| Fetch All       | When enabled, automatically fetches all pages of results. Pagination inputs are ignored when this is enabled.                                | false   |
| Pagination Page | Which page of results to fetch. See [Gusto API documentation](https://docs.gusto.com/app-integrations/docs/pagination) for more information. |         |

### List Company Admins {#listcompanyadmins}

List all admin users at a company

| Input           | Comments                                                                                                                                     | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                              |         |
| Company ID      | A UUID representing a company.                                                                                                               |         |
| Fetch All       | When enabled, automatically fetches all pages of results. Pagination inputs are ignored when this is enabled.                                | false   |
| Pagination Page | Which page of results to fetch. See [Gusto API documentation](https://docs.gusto.com/app-integrations/docs/pagination) for more information. |         |

### List Employees {#listemployees}

List employees of a company

| Input           | Comments                                                                                                                                     | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                              |         |
| Company ID      | A UUID representing a company.                                                                                                               |         |
| Fetch All       | When enabled, automatically fetches all pages of results. Pagination inputs are ignored when this is enabled.                                | false   |
| Pagination Page | Which page of results to fetch. See [Gusto API documentation](https://docs.gusto.com/app-integrations/docs/pagination) for more information. |         |

### List Pay Schedules {#listpayschedules}

List pay schedules for a company

| Input           | Comments                                                                                                                                     | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                              |         |
| Company ID      | A UUID representing a company.                                                                                                               |         |
| Fetch All       | When enabled, automatically fetches all pages of results. Pagination inputs are ignored when this is enabled.                                | false   |
| Pagination Page | Which page of results to fetch. See [Gusto API documentation](https://docs.gusto.com/app-integrations/docs/pagination) for more information. |         |

### List Webhook Subscriptions {#listwebhooksubscriptions}

Returns all webhook subscriptions associated with the provided Partner API token for Gusto.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Gusto

| Input                   | Comments                                                                                                                                                                                                | Default    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Connection              |                                                                                                                                                                                                         |            |
| API Version             | The API version to use.                                                                                                                                                                                 | 2026-02-01 |
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

### Terminate Employee {#terminateemployee}

End an employee's employment

| Input                    | Comments                                               | Default |
| ------------------------ | ------------------------------------------------------ | ------- |
| Connection               |                                                        |         |
| Employee ID              | A UUID representing a employee.                        |         |
| Termination Date         | The date the employee was terminated.                  |         |
| Run Termination Payroll? | Whether to run a termination payroll for the employee. | false   |

### Update Webhook Subscription {#updatewebhooksubscription}

Updates the Webhook Subscription associated with the provided UUID for Gusto.

| Input                     | Comments                                                                                 | Default |
| ------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                          |         |
| Webhook Subscription UUID | The webhook subscription UUID.                                                           |         |
| Subscription Types        | Types of notifications to receive when entities change. Enter as comma-separated values. |         |
