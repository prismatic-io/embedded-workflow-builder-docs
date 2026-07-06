---
title: Jamf Connector
sidebar_label: Jamf
description: Manage Apple devices, policies, scripts, and users with Jamf Pro and Jamf School.
---

![Jamf](./assets/jamf.png#connector-icon)
[Jamf](https://www.jamf.com/) is an Apple device management and security platform.
This component allows managing computers, mobile devices, users, scripts, packages, categories, and departments in Jamf Pro, as well as polling for newly enrolled computers and mobile devices and receiving webhook notifications from Jamf Pro.

## API Documentation

This component was built using the following API References:

- [Jamf Pro API Reference](https://developer.jamf.com/jamf-pro/reference/jamf-pro-api)
- [Classic API Reference](https://developer.jamf.com/jamf-pro/reference/classic-api)

## Connections

### Basic Authentication {#jamfbearertoken}

Authenticate using username and password.

To authenticate with Jamf Pro using basic authentication, a local Jamf Pro user account with appropriate privileges is required.

#### Prerequisites

- A Jamf Pro instance
- A local (standard) Jamf Pro user account — SSO/federated accounts cannot be used for API authentication

#### Setup Steps

1. Log in to the Jamf Pro dashboard
2. Navigate to **Settings > System > User Accounts and Groups**
3. Click **New** and select **Create Standard Account**
4. Set the **Access Level** to Full Access and the **Privilege Set** to Administrator (or a custom set with the minimum required privileges)
5. Note the **username** and **password** for the account

:::warning[SSO and Federated Accounts Cannot Be Used]
Jamf Pro does not support API authentication for SSO or federated accounts (for example, accounts backed by Okta, Azure AD, or another identity provider). This applies even when the account has Full Access and Administrator privileges.

If your Jamf Pro instance uses an identity provider for web UI login, you must still create a **Standard Account** (step 3 above) specifically for API use. Standard accounts coexist with federated accounts in the same Jamf Pro instance. You can identify account type in **Settings > System > User Accounts and Groups** — the **Type** column shows **Local** for standard accounts and **Federated User** for IdP-backed accounts.
:::

#### Configure the Connection

Create a connection of type **Basic Authentication** and provide the following values:

- **Jamf Pro URL**: The base URL of the Jamf Pro instance (e.g., `https://acme.jamfcloud.com`)
- **Username**: The username of the local Jamf Pro account
- **Password**: The password of the local Jamf Pro account

:::note[Recommended Authentication Method]
OAuth 2.0 client credentials is the recommended authentication method for production integrations. Basic authentication (username and password) exchanges credentials for a bearer token, which expires after 20 minutes.
:::

| Input        | Comments                                                                                | Default |
| ------------ | --------------------------------------------------------------------------------------- | ------- |
| Jamf Pro URL | The base URL of the Jamf Pro instance (e.g., https://acme.jamfcloud.com).               |         |
| Username     | The Jamf Pro user account username. SSO accounts cannot be used for API authentication. |         |
| Password     | The Jamf Pro user account password.                                                     |         |

### OAuth 2.0 Client Credentials {#jamfclientcredentials}

Authenticate using OAuth 2.0 client credentials.

To authenticate with Jamf Pro using OAuth 2.0 client credentials, create an API client in the Jamf Pro dashboard.

#### Prerequisites

- A Jamf Pro instance with administrator access
- Access to **Settings > API Roles and Clients** in Jamf Pro

#### Setup Steps

1. Log in to the Jamf Pro dashboard
2. Navigate to **Settings > API Roles and Clients**
3. Create an API role with the required privileges for the integration
4. Click **New** under the **API Clients** tab to create a new API client
5. Assign the API role created in step 3 to the new client
6. Enable the API client and click **Save**
7. Click **Generate Client Secret** and copy the **Client Secret** immediately (it will not be shown again)
8. Copy the **Client ID** displayed on the API client details page

Refer to the [Jamf Pro API Roles and Clients documentation](https://learn.jamf.com/r/en-US/jamf-pro-documentation-current/API_Roles_and_Clients) for detailed instructions.

#### Configure the Connection

Create a connection of type **OAuth 2.0 Client Credentials** and provide the following values:

- **Jamf Pro URL**: The base URL of the Jamf Pro instance (e.g., `https://acme.jamfcloud.com`)
- **Client ID**: The API Client ID from the Jamf Pro API client
- **Client Secret**: The API Client Secret generated in the setup steps

| Input         | Comments                                                                  | Default |
| ------------- | ------------------------------------------------------------------------- | ------- |
| Jamf Pro URL  | The base URL of the Jamf Pro instance (e.g., https://acme.jamfcloud.com). |         |
| Client ID     | The API Client ID from Settings > API Roles and Clients in Jamf Pro.      |         |
| Client Secret | The API Client Secret from Settings > API Roles and Clients in Jamf Pro.  |         |

## Triggers

### Manual Webhook {#webhook}

Receive and validate webhook requests from Jamf Pro for manually configured webhook subscriptions.

| Input             | Comments                                                                                                                                               | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Auth Header Name  | Name of the header Jamf Pro sends for header authentication (must match the webhook's configured header). Leave blank to accept all incoming requests. |         |
| Auth Header Value | Expected value of the authentication header. Incoming requests whose header does not match are rejected. Required only if an Auth Header Name is set.  |         |

### New Computers {#pollnewcomputers}

Checks for newly enrolled computers in Jamf Pro on a configured schedule.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Jamf Pro connection to use. |         |

### New Mobile Devices {#pollnewmobiledevices}

Checks for newly enrolled mobile devices in Jamf Pro on a configured schedule.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Jamf Pro connection to use. |         |

### Webhook Events {#webhookevents}

Subscribe to Jamf Pro events. On deploy, this trigger creates a webhook in Jamf Pro for each selected event (secured with a generated authentication header) and removes them when the instance is deleted. Incoming requests are validated against that header.

| Input      | Comments                                                                        | Default                        |
| ---------- | ------------------------------------------------------------------------------- | ------------------------------ |
| Connection | The Jamf Pro connection to use.                                                 |                                |
| Events     | The Jamf Pro events to subscribe to. One webhook is created per selected event. | <code>["ComputerAdded"]</code> |

## Actions

### Create Category {#createcategory}

Create a new category.

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.                                     |         |
| Name       | The display name used to identify the category in Jamf Pro.         |         |
| Priority   | The sort order weight for the category. Lower numbers appear first. | 9       |

### Create Department {#createdepartment}

Create a new department.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.                               |         |
| Name       | The display name used to identify the department in Jamf Pro. |         |

### Create Package {#createpackage}

Create a new package record in Jamf Pro.

| Input                 | Comments                                                                                  | Default |
| --------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection            | The Jamf Pro connection to use.                                                           |         |
| Package Name          | The display name of the package as shown in Jamf Pro.                                     |         |
| File Name             | The filename of the package file on the Jamf distribution point (e.g., GoogleChrome.pkg). |         |
| Category ID           | The unique identifier of the category to assign to this package.                          |         |
| Priority              | Installation priority from 1 (highest) to 20 (lowest). Defaults to 10.                    |         |
| Info                  | A description of the package displayed to administrators in Jamf Pro.                     |         |
| Notes                 | Internal notes about the package visible only to administrators.                          |         |
| Reboot Required       | Whether the device must reboot after installing this package.                             | false   |
| OS Install            | Whether this package is an OS installer.                                                  | false   |
| Fill User Template    | Whether to fill the user template with the package contents.                              | false   |
| Suppress Updates      | Whether to suppress software updates during installation.                                 | false   |
| Suppress EULA         | Whether to suppress the End User License Agreement during installation.                   | false   |
| Suppress From Dock    | Whether to suppress the package icon from the Dock during installation.                   | false   |
| Suppress Registration | Whether to suppress the registration window during installation.                          | false   |

### Create Script {#createscript}

Create a new script.

| Input           | Comments                                                             | Default |
| --------------- | -------------------------------------------------------------------- | ------- |
| Connection      | The Jamf Pro connection to use.                                      |         |
| Name            | The display name used to identify the script in Jamf Pro.            |         |
| Script Contents | The shell script body. Include the shebang line (e.g., #!/bin/bash). |         |
| Category ID     | The unique identifier of the category to assign to this script.      |         |
| Priority        | When the script runs relative to the policy.                         | AFTER   |
| Info            | A description of the script displayed to administrators in Jamf Pro. |         |
| Notes           | Internal notes about the script visible only to administrators.      |         |

### Create Webhook {#createwebhook}

Create a new webhook subscription in Jamf Pro.

| Input               | Comments                                                                                                          | Default          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------- |
| Connection          | The Jamf Pro connection to use.                                                                                   |                  |
| Name                | The display name used to identify the webhook in Jamf Pro.                                                        |                  |
| Event               | The Jamf Pro event that triggers this webhook.                                                                    |                  |
| URL                 | The destination URL that Jamf Pro sends webhook events to.                                                        |                  |
| Content Type        | The payload format Jamf Pro delivers events in.                                                                   | application/json |
| Enabled             | Whether the webhook is active and delivering events.                                                              | true             |
| Authentication Type | How Jamf Pro authenticates to the destination URL. Header authentication sends a custom header with every event.  | NONE             |
| Auth Header Name    | Name of the header Jamf Pro sends when Authentication Type is Header. Required when using Header authentication.  |                  |
| Auth Header Value   | Value of the header Jamf Pro sends when Authentication Type is Header. Required when using Header authentication. |                  |

### Delete Category {#deletecategory}

Delete a category by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.        |         |
| Category   | The unique identifier of the category. |         |

### Delete Department {#deletedepartment}

Delete a department by ID.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.          |         |
| Department | The unique identifier of the department. |         |

### Delete Instanced Webhooks {#deleteinstancedwebhooks}

Delete all Jamf Pro webhooks that point to a flow in this instance.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Jamf Pro connection to use. |         |

### Delete Package {#deletepackage}

Delete a package record by ID.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.       |         |
| Package    | The unique identifier of the package. |         |

### Delete Script {#deletescript}

Delete a script by ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Jamf Pro connection to use.      |         |
| Script     | The unique identifier of the script. |         |

### Delete Webhook {#deletewebhook}

Delete a webhook subscription by ID.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.       |         |
| Webhook    | The unique identifier of the webhook. |         |

### Get Category {#getcategory}

Get a single category by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.        |         |
| Category   | The unique identifier of the category. |         |

### Get Computer {#getcomputer}

Get a single computer inventory record by ID.

| Input      | Comments                                                                                                    | Default                  |
| ---------- | ----------------------------------------------------------------------------------------------------------- | ------------------------ |
| Connection | The Jamf Pro connection to use.                                                                             |                          |
| Computer   | The unique identifier of the computer.                                                                      |                          |
| Section    | Section of computer details to include in the response. If not specified, General section data is returned. | <code>["GENERAL"]</code> |

### Get Department {#getdepartment}

Get a single department by ID.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.          |         |
| Department | The unique identifier of the department. |         |

### Get Mobile Device {#getmobiledevice}

Get a single mobile device record by ID.

| Input         | Comments                                    | Default |
| ------------- | ------------------------------------------- | ------- |
| Connection    | The Jamf Pro connection to use.             |         |
| Mobile Device | The unique identifier of the mobile device. |         |

### Get Package {#getpackage}

Get a single package record by ID.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.       |         |
| Package    | The unique identifier of the package. |         |

### Get Script {#getscript}

Get a single script by ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Jamf Pro connection to use.      |         |
| Script     | The unique identifier of the script. |         |

### Get Webhook {#getwebhook}

Get a single webhook subscription by ID.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.       |         |
| Webhook    | The unique identifier of the webhook. |         |

### List Categories {#listcategories}

List all categories with optional filtering and pagination.

| Input      | Comments                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.                                                                                  |         |
| Page       | The zero-indexed page number for paginated results. Page 0 is the first page.                                    | 0       |
| Page Size  | The maximum number of results to return per page. Maximum 1000.                                                  | 100     |
| Sort       | The sort criteria in the format property:asc or property:desc. Multiple criteria are comma-separated.            |         |
| Filter     | An RSQL filter expression to narrow results. Example: name=="Apps*" or id>=5. Leave blank to return all results. |         |
| Fetch All  | If true, fetch every page of results and ignore the Page and Page Size inputs. If false, return a single page.   | false   |

### List Computers {#listcomputers}

List computer inventory records with optional filtering and pagination.

| Input      | Comments                                                                                                         | Default                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Connection | The Jamf Pro connection to use.                                                                                  |                          |
| Page       | The zero-indexed page number for paginated results. Page 0 is the first page.                                    | 0                        |
| Page Size  | The maximum number of results to return per page. Maximum 1000.                                                  | 100                      |
| Sort       | The sort criteria in the format property:asc or property:desc. Multiple criteria are comma-separated.            |                          |
| Filter     | An RSQL filter expression to narrow results. Example: name=="Apps*" or id>=5. Leave blank to return all results. |                          |
| Section    | Section of computer details to include in the response. If not specified, General section data is returned.      | <code>["GENERAL"]</code> |
| Fetch All  | If true, fetch every page of results and ignore the Page and Page Size inputs. If false, return a single page.   | false                    |

### List Departments {#listdepartments}

List all departments with optional filtering and pagination.

| Input      | Comments                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.                                                                                  |         |
| Page       | The zero-indexed page number for paginated results. Page 0 is the first page.                                    | 0       |
| Page Size  | The maximum number of results to return per page. Maximum 1000.                                                  | 100     |
| Sort       | The sort criteria in the format property:asc or property:desc. Multiple criteria are comma-separated.            |         |
| Filter     | An RSQL filter expression to narrow results. Example: name=="Apps*" or id>=5. Leave blank to return all results. |         |
| Fetch All  | If true, fetch every page of results and ignore the Page and Page Size inputs. If false, return a single page.   | false   |

### List Mobile Devices {#listmobiledevices}

List mobile device inventory records with optional filtering and pagination.

| Input      | Comments                                                                                                         | Default                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Connection | The Jamf Pro connection to use.                                                                                  |                          |
| Page       | The zero-indexed page number for paginated results. Page 0 is the first page.                                    | 0                        |
| Page Size  | The maximum number of results to return per page. Maximum 1000.                                                  | 100                      |
| Sort       | The sort criteria in the format property:asc or property:desc. Multiple criteria are comma-separated.            |                          |
| Filter     | An RSQL filter expression to narrow results. Example: name=="Apps*" or id>=5. Leave blank to return all results. |                          |
| Section    | Section of mobile device details to include in the response. If not specified, General section data is returned. | <code>["GENERAL"]</code> |
| Fetch All  | If true, fetch every page of results and ignore the Page and Page Size inputs. If false, return a single page.   | false                    |

### List Packages {#listpackages}

List all packages with optional filtering and pagination.

| Input      | Comments                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.                                                                                  |         |
| Page       | The zero-indexed page number for paginated results. Page 0 is the first page.                                    | 0       |
| Page Size  | The maximum number of results to return per page. Maximum 1000.                                                  | 100     |
| Sort       | The sort criteria in the format property:asc or property:desc. Multiple criteria are comma-separated.            |         |
| Filter     | An RSQL filter expression to narrow results. Example: name=="Apps*" or id>=5. Leave blank to return all results. |         |
| Fetch All  | If true, fetch every page of results and ignore the Page and Page Size inputs. If false, return a single page.   | false   |

### List Scripts {#listscripts}

List all scripts with optional filtering and pagination.

| Input      | Comments                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.                                                                                  |         |
| Page       | The zero-indexed page number for paginated results. Page 0 is the first page.                                    | 0       |
| Page Size  | The maximum number of results to return per page. Maximum 1000.                                                  | 100     |
| Sort       | The sort criteria in the format property:asc or property:desc. Multiple criteria are comma-separated.            |         |
| Filter     | An RSQL filter expression to narrow results. Example: name=="Apps*" or id>=5. Leave blank to return all results. |         |
| Fetch All  | If true, fetch every page of results and ignore the Page and Page Size inputs. If false, return a single page.   | false   |

### List Users {#listusers}

List Jamf Pro user accounts with optional filtering and pagination.

| Input      | Comments                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.                                                                                  |         |
| Page       | The zero-indexed page number for paginated results. Page 0 is the first page.                                    | 0       |
| Page Size  | The maximum number of results to return per page. Maximum 1000.                                                  | 100     |
| Sort       | The sort criteria in the format property:asc or property:desc. Multiple criteria are comma-separated.            |         |
| Filter     | An RSQL filter expression to narrow results. Example: name=="Apps*" or id>=5. Leave blank to return all results. |         |
| Fetch All  | If true, fetch every page of results and ignore the Page and Page Size inputs. If false, return a single page.   | false   |

### List Webhooks {#listwebhooks}

List all webhook subscriptions configured in Jamf Pro.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Jamf Pro connection to use. |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to the Jamf Pro API or the Classic API.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Jamf Pro connection to use.                                                                                                                                                                  |         |
| API                     | Which Jamf Pro API to target. The Pro API uses the /api base path; the Classic API uses /JSSResource.                                                                                            | api     |
| URL                     | The API path only (e.g., /v1/computers-inventory for the Pro API, or /computers/id/1 for the Classic API). The base URL and selected API prefix are added automatically.                         |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Update Category {#updatecategory}

Update an existing category.

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.                                     |         |
| Category   | The unique identifier of the category.                              |         |
| Name       | The display name used to identify the category in Jamf Pro.         |         |
| Priority   | The sort order weight for the category. Lower numbers appear first. |         |

### Update Computer {#updatecomputer}

Update specific fields of a computer inventory record. Only the provided fields are modified.

| Input       | Comments                                                                                                               | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Jamf Pro connection to use.                                                                                        |         |
| Computer    | The unique identifier of the computer.                                                                                 |         |
| Update Data | JSON object with the computer inventory fields to update. Only the provided fields will be modified (PATCH semantics). |         |

### Update Department {#updatedepartment}

Update an existing department.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The Jamf Pro connection to use.                               |         |
| Department | The unique identifier of the department.                      |         |
| Name       | The display name used to identify the department in Jamf Pro. |         |

### Update Package {#updatepackage}

Update an existing package record.

| Input                 | Comments                                                                                  | Default |
| --------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection            | The Jamf Pro connection to use.                                                           |         |
| Package               | The unique identifier of the package.                                                     |         |
| Package Name          | The display name of the package as shown in Jamf Pro.                                     |         |
| File Name             | The filename of the package file on the Jamf distribution point (e.g., GoogleChrome.pkg). |         |
| Category ID           | The unique identifier of the category to assign to this package.                          |         |
| Priority              | Installation priority from 1 (highest) to 20 (lowest). Defaults to 10.                    |         |
| Info                  | A description of the package displayed to administrators in Jamf Pro.                     |         |
| Notes                 | Internal notes about the package visible only to administrators.                          |         |
| Reboot Required       | Whether the device must reboot after installing this package.                             |         |
| OS Install            | Whether this package is an OS installer.                                                  |         |
| Fill User Template    | Whether to fill the user template with the package contents.                              |         |
| Suppress Updates      | Whether to suppress software updates during installation.                                 |         |
| Suppress EULA         | Whether to suppress the End User License Agreement during installation.                   |         |
| Suppress From Dock    | Whether to suppress the package icon from the Dock during installation.                   |         |
| Suppress Registration | Whether to suppress the registration window during installation.                          |         |

### Update Script {#updatescript}

Update an existing script.

| Input           | Comments                                                             | Default |
| --------------- | -------------------------------------------------------------------- | ------- |
| Connection      | The Jamf Pro connection to use.                                      |         |
| Script          | The unique identifier of the script.                                 |         |
| Name            | The display name used to identify the script in Jamf Pro.            |         |
| Script Contents | The shell script body. Include the shebang line (e.g., #!/bin/bash). |         |
| Category ID     | The unique identifier of the category to assign to this script.      |         |
| Priority        | When the script runs relative to the policy.                         |         |
| Info            | A description of the script displayed to administrators in Jamf Pro. |         |
| Notes           | Internal notes about the script visible only to administrators.      |         |

### Update Webhook {#updatewebhook}

Update an existing webhook subscription.

| Input        | Comments                                                   | Default |
| ------------ | ---------------------------------------------------------- | ------- |
| Connection   | The Jamf Pro connection to use.                            |         |
| Webhook      | The unique identifier of the webhook.                      |         |
| Name         | The display name used to identify the webhook in Jamf Pro. |         |
| Event        | The Jamf Pro event that triggers this webhook.             |         |
| URL          | The destination URL that Jamf Pro sends webhook events to. |         |
| Content Type | The payload format Jamf Pro delivers events in.            |         |
| Enabled      | Whether the webhook is active and delivering events.       |         |
