---
title: BambooHR Connector
sidebar_label: BambooHR
description: Manage employees and HR data in BambooHR.
---

![BambooHR](./assets/bamboohr.png#connector-icon)
Manage employees and HR data in BambooHR.

## Connections

### API Key {#apikey}

Authenticate requests using an API key.

| Input          | Comments                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------- | ------- |
| API Key        | The BambooHR API key used to authenticate requests. Generate this in the BambooHR account settings. |         |
| Company Domain | The MYCOMPANY portion of the https://MYCOMPANY.bamboohr.com instance URL.                           |         |

## Triggers

### Changed Employees {#pollchangestrigger}

Checks for new, updated, and deleted employees in BambooHR on a configured schedule.

| Input                  | Comments                                                                                                                                                                         | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The BambooHR connection to use.                                                                                                                                                  |         |
| Show New Employees     | When true, employees inserted since the last poll are included in the trigger output.                                                                                            | true    |
| Show Updated Employees | When true, employees updated or deleted since the last poll are included in the trigger output. Inspect the `action` field on each record to distinguish updates from deletions. | true    |

### Webhook {#bamboohrtrigger}

Receive and validate webhook requests from BambooHR for manually configured webhook subscriptions.

## Actions

### Add Employee Table Row {#addemployeetablerow}

Add a row to the specified table for an employee.

| Input              | Comments                                                                                                                                                                         | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The BambooHR connection to use.                                                                                                                                                  |         |
| Employee ID        | The unique identifier for the employee.                                                                                                                                          |         |
| Table Name (Alias) | The alias of the BambooHR table to read or modify (for example, jobInfo, compensation, or employmentStatus).                                                                     |         |
| Table Fields       | The names of the fields and their values to use when creating/updating a row in a table. Use the "List Tabular Fields (Tables)" action to list possible field names for a table. |         |

### Create Company File Category {#addcompanyfilecategory}

Create a new company file category (folder).

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    | The BambooHR connection to use.                      |         |
| Category Name | The display name to assign to the new file category. |         |

### Create Employee {#addemployee}

Create a new employee.

| Input           | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The BambooHR connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| First Name      | The given name of the employee being created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |         |
| Last Name       | The family name of the employee being created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Employee Fields | The names of the fields and their values to use when creating/updating a record. Possible fields are: address1, address2, age, bestEmail, birthday, city, country, dateOfBirth, department, division, employeeNumber, employmentHistoryStatus, ethnicity, exempt, firstName, fullName1, fullName2, fullName3, fullName4, fullName5, displayName, gender, hireDate, originalHireDate, id, jobTitle, lastChanged, lastName, location, maritalStatus, middleName, mobilePhone, nationality, payGroup, payRate, payRateEffectiveDate, payType, paidPer, paySchedule, payFrequency, includeInPayroll, timeTrackingEnabled, ssn, sin, standardHoursPerWeek, state, stateCode, status, supervisor, supervisorEmail, terminationDate, workEmail, workPhone, zipcode. |         |

### Create Employee File Category {#addemployeefilecategory}

Create a new employee file category (folder).

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    | The BambooHR connection to use.                      |         |
| Category Name | The display name to assign to the new file category. |         |

### Create Webhook {#createwebhook}

Create a new webhook.

| Input                     | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The BambooHR connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |         |
| Webhook Name              | A descriptive label used to identify the webhook in BambooHR.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Callback URL              | The URL where BambooHR should send webhook payloads.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Fields to Monitor         | One or more fields to trigger this webhook on. This can be any of the following: firstName, lastName, hireDate, department, middleName, dateOfBirth, ssn, address1, address2, city, state, zipcode, mobilePhone, homePhone, workEmail, jobTitle, location, gender, maritalStatus, payType, eeo, status, workPhone, workPhoneExtension, employeeNumber, ethnicity, division, homeEmail, preferredName, employeeStatusDate, country, payChangeReason, payRateEffectiveDate, exempt, twitterFeed, facebook, linkedIn, pinterest, acaStatus, payPer, originalHireDate, paySchedule, instagram, allergies, dietaryRestrictions, hoursPerPayCycle.                           |         |
| Fields to Send to Webhook | The list of fields to include in the payload posted to the callback URL. This can be any of the following: firstName, lastName, hireDate, department, middleName, dateOfBirth, ssn, address1, address2, city, state, zipcode, mobilePhone, homePhone, workEmail, jobTitle, location, gender, maritalStatus, payType, eeo, status, workPhone, workPhoneExtension, employeeNumber, ethnicity, division, homeEmail, preferredName, employeeStatusDate, country, payChangeReason, payRateEffectiveDate, exempt, twitterFeed, facebook, linkedIn, pinterest, acaStatus, payPer, originalHireDate, paySchedule, instagram, allergies, dietaryRestrictions, hoursPerPayCycle. |         |
| Allow Duplicates          | When true, allows the creation of duplicate webhooks. By default this action checks if a webhook with this callback and sheet ID already exists and, if so, skips configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | false   |

### Delete Company File {#deletecompanyfile}

Delete a company file.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The BambooHR connection to use.             |         |
| File ID    | The unique identifier for the company file. |         |

### Delete Employee File {#deleteemployeefile}

Delete an employee file.

| Input            | Comments                                     | Default |
| ---------------- | -------------------------------------------- | ------- |
| Connection       | The BambooHR connection to use.              |         |
| Employee ID      | The unique identifier for the employee.      |         |
| Employee File ID | The unique identifier for the employee file. |         |

### Delete Instance Webhooks {#deleteinstancewebhooks}

Delete all BambooHR webhooks that point to a flow in this instance.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The BambooHR connection to use. |         |

### Delete Webhook {#deletewebhookbyid}

Delete a webhook by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The BambooHR connection to use.        |         |
| Webhook ID | The unique identifier for the webhook. |         |

### Get Company File {#getcompanyfile}

Retrieve a company file.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The BambooHR connection to use.             |         |
| File ID    | The unique identifier for the company file. |         |

### Get Employee {#getemployee}

Retrieve an employee by ID.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The BambooHR connection to use.         |         |
| Employee ID | The unique identifier for the employee. |         |

### Get Employee File {#getemployeefile}

Retrieve an employee file.

| Input            | Comments                                     | Default |
| ---------------- | -------------------------------------------- | ------- |
| Connection       | The BambooHR connection to use.              |         |
| Employee ID      | The unique identifier for the employee.      |         |
| Employee File ID | The unique identifier for the employee file. |         |

### Get Employee Table {#getemployeetable}

Retrieve a specific table associated with an employee.

| Input              | Comments                                                                                                     | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         | The BambooHR connection to use.                                                                              |         |
| Employee ID        | The unique identifier for the employee.                                                                      |         |
| Table Name (Alias) | The alias of the BambooHR table to read or modify (for example, jobInfo, compensation, or employmentStatus). |         |

### List Company Files {#listcompanyfiles}

List all company file categories and files.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The BambooHR connection to use. |         |

### List Employee Files {#listemployeefiles}

List all employee file categories and files.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The BambooHR connection to use.         |         |
| Employee ID | The unique identifier for the employee. |         |

### List Employees {#getemployeedirectory}

List all employees from the directory.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The BambooHR connection to use. |         |

### List Tabular Fields {#gettabularfields}

List all tables and their fields in the account.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The BambooHR connection to use. |         |

### List Time Off Requests {#gettimeoffrequests}

List employee time off requests for a given date range.

| Input              | Comments                                                                     | Default |
| ------------------ | ---------------------------------------------------------------------------- | ------- |
| Connection         | The BambooHR connection to use.                                              |         |
| Start Date         | The first date of the time off range to query or create. Format: YYYY-MM-DD. |         |
| End Date           | The last date of the time off range to query or create. Format: YYYY-MM-DD.  |         |
| Time Off Record ID | The unique identifier for a specific time off request record.                |         |
| Employee ID        | The unique identifier for the employee.                                      |         |
| Status             | The time off request status to filter by.                                    |         |

### List Webhooks {#listwebhooks}

List all existing webhooks.

| Input                       | Comments                                                           | Default |
| --------------------------- | ------------------------------------------------------------------ | ------- |
| Connection                  | The BambooHR connection to use.                                    |         |
| Show Only Instance Webhooks | When true, only webhooks that point to this instance are returned. | true    |

### List Who's Out {#whosout}

List all employees currently taking time off.

| Input      | Comments                                                                                                     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The BambooHR connection to use.                                                                              |         |
| Start Date | The first date of the range to query. Defaults to today's date if omitted. Format: YYYY-MM-DD.               |         |
| End Date   | The last date of the range to query. Defaults to 14 days from the start date if omitted. Format: YYYY-MM-DD. |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to BambooHR.

| Input                   | Comments                                                                                                                                                                                                                                                                                                     | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The BambooHR connection to use.                                                                                                                                                                                                                                                                              |         |
| URL                     | Input the path only (/v1/employees/directory), The base URL is already included (https://api.bamboohr.com/api/gateway.php/COMPANY_DOMAIN). For example, to connect to https://api.bamboohr.com/api/gateway.php/COMPANY_DOMAIN/v1/employees/directory, only /v1/employees/directory is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                      |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                    |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                         |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                             |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                       |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                          |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                  |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                     | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                          |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                             | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                          | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                | false   |

### Update Employee {#updateemployee}

Update an existing employee.

| Input           | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The BambooHR connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| Employee ID     | The unique identifier for the employee.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| Employee Fields | The names of the fields and their values to use when creating/updating a record. Possible fields are: address1, address2, age, bestEmail, birthday, city, country, dateOfBirth, department, division, employeeNumber, employmentHistoryStatus, ethnicity, exempt, firstName, fullName1, fullName2, fullName3, fullName4, fullName5, displayName, gender, hireDate, originalHireDate, id, jobTitle, lastChanged, lastName, location, maritalStatus, middleName, mobilePhone, nationality, payGroup, payRate, payRateEffectiveDate, payType, paidPer, paySchedule, payFrequency, includeInPayroll, timeTrackingEnabled, ssn, sin, standardHoursPerWeek, state, stateCode, status, supervisor, supervisorEmail, terminationDate, workEmail, workPhone, zipcode. |         |

### Update Employee Table Row {#updateemployeetablerow}

Update a specific row in an employee table.

| Input              | Comments                                                                                                                                                                         | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The BambooHR connection to use.                                                                                                                                                  |         |
| Employee ID        | The unique identifier for the employee.                                                                                                                                          |         |
| Table Name (Alias) | The alias of the BambooHR table to read or modify (for example, jobInfo, compensation, or employmentStatus).                                                                     |         |
| Row ID             | The unique identifier for the row in the table.                                                                                                                                  |         |
| Table Fields       | The names of the fields and their values to use when creating/updating a row in a table. Use the "List Tabular Fields (Tables)" action to list possible field names for a table. |         |

### Upload Company File {#uploadcompanyfile}

Upload a new company file.

| Input         | Comments                                                                              | Default |
| ------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection    | The BambooHR connection to use.                                                       |         |
| Category ID   | The unique identifier for the file category.                                          |         |
| File Name     | The name to assign to the uploaded file, including its extension.                     |         |
| File Contents | The binary contents of the file to upload, typically referenced from a previous step. |         |
| Share         | When true, the file is shared with the employee.                                      | false   |

### Upload Employee File {#uploademployeefile}

Upload a new employee file.

| Input         | Comments                                                                              | Default |
| ------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection    | The BambooHR connection to use.                                                       |         |
| Employee ID   | The unique identifier for the employee.                                               |         |
| Category ID   | The unique identifier for the file category.                                          |         |
| File Name     | The name to assign to the uploaded file, including its extension.                     |         |
| File Contents | The binary contents of the file to upload, typically referenced from a previous step. |         |
| Share         | When true, the file is shared with the employee.                                      | false   |
