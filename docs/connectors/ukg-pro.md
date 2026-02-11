---
title: UKG Pro Connector
sidebar_label: UKG Pro
description: Manage employees, payroll, and talent onboarding in UKG Pro.
---

![UKG Pro](./assets/ukg-pro.png#connector-icon)
[UKG Pro](https://www.ukg.com/products/ukg-pro) is a human capital management (HCM) platform. This component allows you to manage employees, organizational structures, payroll data, and talent onboarding processes within UKG Pro.

## API Documentation

This component is built using the [UKG Pro REST APIs](https://developer.ukg.com/), including the Personnel API, Talent Onboarding API, and Configuration API.

## Connections

### Basic Authentication {#ukgprobasicauth}

Authenticate using username and password

#### UKG Pro Basic Auth (Web Service Account)

This connection method uses a Web Service Account to authenticate with UKG Pro's Personnel and Configuration APIs.

#### Prerequisites

Obtain the following items before configuring this connection:

1. **Web Service Account credentials** from the UKG Pro administrator
2. **Customer API Key** from the UKG Pro account
3. **Base URL** for the UKG Pro environment

For more information about UKG Pro API authentication, see the [UKG Pro API documentation](https://developer.ukg.com/hcm/docs).

#### Configure the Connection

Create a connection of type **Basic Authentication** and enter the following values:

- **API Base URL**: The UKG Pro API base URL (e.g., `https://service5.ultipro.com`)
- **Customer API Key**: The organization's unique Customer API Key
- **Service Account Username**: Web Service Account username
- **Service Account Password**: Web Service Account password

#### Obtain Web Service Account Credentials

Follow these steps to create and retrieve Web Service Account credentials:

1. Log into the UKG Pro administration portal
2. Navigate to **System Configuration** > **Web Services**
3. Select **Create Web Service Account** or locate an existing account
4. Copy the following values:
   - **Username**: The Web Service Account username
   - **Password**: The Web Service Account password
   - **Customer API Key**: Located in **Web Services** configuration

For detailed instructions, refer to the [UKG Pro Web Services configuration guide](https://developer.ukg.com/hcm/docs).

#### Supported APIs

This connection type is used for:

- Personnel API endpoints (employee demographics, employment details, changes)
- Configuration API endpoints (companies, locations, jobs, positions)

| Input                    | Comments                                                                                                                                                                                                                                                     | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| API Base URL             | The base URL for the UKG Pro API environment. Common values: https://service5.ultipro.com (US), https://service4.ultipro.ca (Canada). See [Environment Configuration](https://developer.ukg.com/hcm/docs/web-service-account#service-endpoints) for details. |         |
| Customer API Key         | The UKG Pro Customer API Key. Found in <strong>System Configuration > Security > Web Service Accounts</strong>. See [Authentication Overview](https://developer.ukg.com/hcm/docs/web-service-account#service-endpoints) for details.                         |         |
| Service Account Username | The username for the Web Service Account configured in UKG Pro.                                                                                                                                                                                              |         |
| Service Account Password | The password for the Web Service Account.                                                                                                                                                                                                                    |         |

## Triggers

### Employee Changes {#pollemployeechanges}

Checks for new and updated employee records (hires, terminations, transfers, promotions) on a configured schedule.

| Input      | Comments                                                              | Default |
| ---------- | --------------------------------------------------------------------- | ------- |
| Connection | Select your UKG Pro connection.                                       |         |
| Company ID | Optional company ID to filter changes. Leave empty for all companies. |         |

### Employee Lifecycle Events {#webhookemployeelifecycle}

Receive and validate webhook requests from UKG Pro for manually configured employee lifecycle event subscriptions.

| Input                    | Comments                                                                                                                       | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | Select your UKG Pro connection.                                                                                                |         |
| Webhook Secret           | The shared secret used to verify webhook signatures. Configure this in UKG Pro webhook settings and enter the same value here. |         |
| Verify Webhook Signature | When true, validates the HMAC-SHA256 webhook signature using the webhook secret. Requires Webhook Secret to be configured.     | false   |

### New Hire Status {#pollnewhirestatus}

Checks for new and updated new hire onboarding records on a configured schedule.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | Select your UKG Pro connection. |         |

## Actions

### Get All Employment Contract Details {#getemploymentcontractdetails}

Retrieve contract details for all employees.

| Input             | Comments                                                                                                                                                | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | Select your UKG Pro connection.                                                                                                                         |         |
| Company ID        | The 5-digit company identifier in UKG Pro. See [Company Access Code documentation](https://developer.ukg.com/hcm/docs/company-access-code) for details. |         |
| Page              | The page number to retrieve (1-indexed). Defaults to 1.                                                                                                 |         |
| Per Page          | Number of records to return per page. Defaults to API default (usually 100).                                                                            |         |
| Fetch All         | When true, automatically fetches all pages of results using pagination.                                                                                 | false   |
| Filter Parameters | Additional filter parameters as key-value pairs.                                                                                                        |         |

### Get All Employment Details by Company {#getallemploymentdetailsbycompany}

Retrieve employment details for all employees within a specific company.

| Input             | Comments                                                                                                                                                | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | Select your UKG Pro connection.                                                                                                                         |         |
| Company ID        | The 5-digit company identifier in UKG Pro. See [Company Access Code documentation](https://developer.ukg.com/hcm/docs/company-access-code) for details. |         |
| Page              | The page number to retrieve (1-indexed). Defaults to 1.                                                                                                 |         |
| Per Page          | Number of records to return per page. Defaults to API default (usually 100).                                                                            |         |
| Fetch All         | When true, automatically fetches all pages of results using pagination.                                                                                 | false   |
| Filter Parameters | Additional filter parameters as key-value pairs.                                                                                                        |         |

### Get All Person Details {#getallpersondetails}

Retrieve person details for all employees across all companies.

| Input             | Comments                                                                                                                                                | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | Select your UKG Pro connection.                                                                                                                         |         |
| Company ID        | The 5-digit company identifier in UKG Pro. See [Company Access Code documentation](https://developer.ukg.com/hcm/docs/company-access-code) for details. |         |
| Page              | The page number to retrieve (1-indexed). Defaults to 1.                                                                                                 |         |
| Per Page          | Number of records to return per page. Defaults to API default (usually 100).                                                                            |         |
| Fetch All         | When true, automatically fetches all pages of results using pagination.                                                                                 | false   |
| Filter Parameters | Additional filter parameters as key-value pairs.                                                                                                        |         |

### Get Employee Changes by Date {#getemployeechangesbydate}

Retrieve employees with changes since a specified date. Note: Date must be at least 3 hours ago.

| Input      | Comments                                                                     | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- |
| Connection | Select your UKG Pro connection.                                              |         |
| Start Date | Start date for filtering results. Format: YYYY-MM-DD                         |         |
| End Date   | End date for filtering results. Format: YYYY-MM-DD                           |         |
| Page       | The page number to retrieve (1-indexed). Defaults to 1.                      |         |
| Per Page   | Number of records to return per page. Defaults to API default (usually 100). |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.      | false   |

### Get Employee Changes by ID {#getemployeechangesbyid}

Retrieve change history for a specific employee.

| Input       | Comments                                           | Default |
| ----------- | -------------------------------------------------- | ------- |
| Connection  | Select your UKG Pro connection.                    |         |
| Employee ID | The unique identifier for the employee in UKG Pro. |         |

### Get Employee Demographic Details {#getemployeedemographicdetails}

Retrieve demographic details for employees, optionally filtered by date range.

| Input             | Comments                                                                                                                                                | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | Select your UKG Pro connection.                                                                                                                         |         |
| Company ID        | The 5-digit company identifier in UKG Pro. See [Company Access Code documentation](https://developer.ukg.com/hcm/docs/company-access-code) for details. |         |
| Page              | The page number to retrieve (1-indexed). Defaults to 1.                                                                                                 |         |
| Per Page          | Number of records to return per page. Defaults to API default (usually 100).                                                                            |         |
| Fetch All         | When true, automatically fetches all pages of results using pagination.                                                                                 | false   |
| Filter Parameters | Additional filter parameters as key-value pairs.                                                                                                        |         |

### Get Employee Employment Details {#getemployeeemploymentdetails}

Retrieve employee's employment details according to the specified query parameters.

| Input                      | Comments                                                                                                                                                | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | Select your UKG Pro connection.                                                                                                                         |         |
| Company ID                 | The 5-digit company identifier in UKG Pro. See [Company Access Code documentation](https://developer.ukg.com/hcm/docs/company-access-code) for details. |         |
| Employee ID                | The unique identifier for the employee in UKG Pro.                                                                                                      |         |
| Primary Job Code           | Filter by one or more primary job codes (comma-separated). Example: SW-ENG,MKT-MGR                                                                      |         |
| Primary Work Location Code | Filter by one or more work location codes (comma-separated). Example: ATL-HQ,SF-WEST                                                                    |         |
| Primary Project Code       | Filter by one or more project codes (comma-separated). Example: PROJ-001,PROJ-002                                                                       |         |
| Deduction Group Code       | Filter by one or more deduction group codes (comma-separated).                                                                                          |         |
| Earning Group Code         | Filter by one or more earning group codes (comma-separated).                                                                                            |         |
| Page                       | The page number to retrieve (1-indexed). Defaults to 1.                                                                                                 |         |
| Per Page                   | Number of records to return per page. Defaults to API default (usually 100).                                                                            |         |
| Fetch All                  | When true, automatically fetches all pages of results using pagination.                                                                                 | false   |
| Filter Parameters          | Additional filter parameters as key-value pairs.                                                                                                        |         |

### Get Employee Employment Details by Employee ID and Company ID {#getemployeeemploymentdetailsbyemployeeidandcompanyid}

Retrieve employment details for a specific employee by company and employee ID.

| Input             | Comments                                                                                                                                                | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | Select your UKG Pro connection.                                                                                                                         |         |
| Company ID        | The 5-digit company identifier in UKG Pro. See [Company Access Code documentation](https://developer.ukg.com/hcm/docs/company-access-code) for details. |         |
| Employee ID       | The unique identifier for the employee in UKG Pro.                                                                                                      |         |
| Page              | The page number to retrieve (1-indexed). Defaults to 1.                                                                                                 |         |
| Per Page          | Number of records to return per page. Defaults to API default (usually 100).                                                                            |         |
| Fetch All         | When true, automatically fetches all pages of results using pagination.                                                                                 | false   |
| Filter Parameters | Additional filter parameters as key-value pairs.                                                                                                        |         |

### Get Employee Job History {#getemployeejobhistory}

Retrieve the complete job history for a specific employee.

| Input       | Comments                                                                     | Default |
| ----------- | ---------------------------------------------------------------------------- | ------- |
| Connection  | Select your UKG Pro connection.                                              |         |
| Employee ID | The unique identifier for the employee in UKG Pro.                           |         |
| Page        | The page number to retrieve (1-indexed). Defaults to 1.                      |         |
| Per Page    | Number of records to return per page. Defaults to API default (usually 100). |         |
| Fetch All   | When true, automatically fetches all pages of results using pagination.      | false   |

### Get File Status {#getimportfilestatus}

Fetch the status of a file submitted to the import tool.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection | Select your UKG Pro connection.                        |         |
| File ID    | The unique identifier for the file in the Import Tool. |         |

### Get File Summary {#getimportfilesummary}

Fetch a summary of a file submitted to the import tool.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection | Select your UKG Pro connection.                        |         |
| File ID    | The unique identifier for the file in the Import Tool. |         |

### Get Import Status {#getimportstatus}

Retrieve the status of an import tool transaction using the staging ID.

| Input      | Comments                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------- | ------- |
| Connection | Select your UKG Pro connection.                                                                           |         |
| Staging ID | The unique staging identifier returned from the Import XML Data action. Used to track transaction status. |         |

### Get Job {#getjob}

Retrieve detailed information for a specific job definition.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | Select your UKG Pro connection.    |         |
| Job ID     | The unique identifier for the job. |         |

### Get Person Details by Company {#getpersondetailsbycompany}

Retrieve person details for all employees within a specific company.

| Input             | Comments                                                                                                                                                | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | Select your UKG Pro connection.                                                                                                                         |         |
| Company ID        | The 5-digit company identifier in UKG Pro. See [Company Access Code documentation](https://developer.ukg.com/hcm/docs/company-access-code) for details. |         |
| Page              | The page number to retrieve (1-indexed). Defaults to 1.                                                                                                 |         |
| Per Page          | Number of records to return per page. Defaults to API default (usually 100).                                                                            |         |
| Fetch All         | When true, automatically fetches all pages of results using pagination.                                                                                 | false   |
| Filter Parameters | Additional filter parameters as key-value pairs.                                                                                                        |         |

### Get Single Location {#getsinglelocation}

Retrieve detailed information for a specific work location.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | Select your UKG Pro connection.         |         |
| Location ID | The unique identifier for the location. |         |

### Get Transaction Status {#getimporttransactionstatus}

Fetch the transaction name and status for an import tool transaction.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | Select your UKG Pro connection. |         |

### Import XML Data {#importxmldata}

Submit an encoded XML transaction to the UKG Pro Import Tool for processing employee data imports.

| Input            | Comments                                                                                                                                                                                                        | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | Select your UKG Pro connection.                                                                                                                                                                                 |         |
| XML Transaction  | The encoded XML transaction to submit to the Import Tool. See the [Import Tool XML and Configuration Settings Guide](https://developer.ukg.com/hcm/reference/importtool_importsxmldata) for transaction format. |         |
| Unique File Name | Optional unique file name for the import transaction. Must end with .xml extension.                                                                                                                             |         |

### List Companies {#listcompanies}

Retrieve a list of all companies defined in the organization.

| Input             | Comments                                                                                                                                                | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | Select your UKG Pro connection.                                                                                                                         |         |
| Company ID        | The 5-digit company identifier in UKG Pro. See [Company Access Code documentation](https://developer.ukg.com/hcm/docs/company-access-code) for details. |         |
| Master Company ID | Filter by master company ID.                                                                                                                            |         |
| Company Code      | Filter by company code.                                                                                                                                 |         |
| Is Master Company | When true, filters to only master companies.                                                                                                            | false   |
| Page              | The page number to retrieve (1-indexed). Defaults to 1.                                                                                                 |         |
| Per Page          | Number of records to return per page. Defaults to API default (usually 100).                                                                            |         |
| Fetch All         | When true, automatically fetches all pages of results using pagination.                                                                                 | false   |

### List Jobs {#listjobs}

Retrieve a list of job definitions in the organization.

| Input      | Comments                                                                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | Select your UKG Pro connection.                                                                                                                         |         |
| Company ID | The 5-digit company identifier in UKG Pro. See [Company Access Code documentation](https://developer.ukg.com/hcm/docs/company-access-code) for details. |         |
| Page       | The page number to retrieve (1-indexed). Defaults to 1.                                                                                                 |         |
| Per Page   | Number of records to return per page. Defaults to API default (usually 100).                                                                            |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                                 | false   |

### List Locations {#listlocations}

Retrieve a list of work locations defined in the organization.

| Input        | Comments                                             | Default |
| ------------ | ---------------------------------------------------- | ------- |
| Connection   | Select your UKG Pro connection.                      |         |
| Country Code | Filter locations by country code (e.g., US, CA, GB). |         |
| Is Active    | When true, filters to only active jobs.              | false   |

### List Positions {#listpositions}

Retrieve a list of positions defined in the organization.

| Input                    | Comments                                                                                                                                                | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Company ID               | The 5-digit company identifier in UKG Pro. See [Company Access Code documentation](https://developer.ukg.com/hcm/docs/company-access-code) for details. |         |
| Employee Type            | Filter by employee type (Full-Time, Part-Time, Contractor, Temporary).                                                                                  |         |
| Pay Group Code           | Filter by pay group code (e.g., WEEKLY, BIWEEKLY, MONTHLY).                                                                                             |         |
| Status Code              | Filter by employee status code (Active, Inactive, Terminated, Leave of Absence).                                                                        |         |
| Position Code            | Filter positions by position code.                                                                                                                      |         |
| Project Code             | Filter by project code.                                                                                                                                 |         |
| Shift Group Code         | Filter by shift group code (e.g., DAY, NIGHT, SWING).                                                                                                   |         |
| Is Prorated              | When true, filters to only prorated employee positions.                                                                                                 | false   |
| Is Approved              | When true, filters to only approved employee positions.                                                                                                 | false   |
| Is Eligible For Benefits | When true, filters to only employee positions eligible for benefits.                                                                                    | false   |
| Page                     | The page number to retrieve (1-indexed). Defaults to 1.                                                                                                 |         |
| Per Page                 | Number of records to return per page. Defaults to API default (usually 100).                                                                            |         |
| Fetch All                | When true, automatically fetches all pages of results using pagination.                                                                                 | false   |
| Connection               | Select your UKG Pro connection.                                                                                                                         |         |

### Raw Request {#rawrequest}

Send raw HTTP request to UKG Pro API.

| Input                   | Comments                                                                                                                                                                                                | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | Select your UKG Pro connection.                                                                                                                                                                         |         |
| URL                     | Input the path only (/personnel/v1/employee-changes). The base URL is already included from the connection. For example, to call the employee changes endpoint, enter `/personnel/v1/employee-changes`. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                 |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                               |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                    |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                        |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                  |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                     |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                             |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                     |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                     | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.        | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                     | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                           | false   |
