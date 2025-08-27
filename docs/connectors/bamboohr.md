---
title: BambooHR Connector
sidebar_label: BambooHR
description: Manage Employees in BambooHR
---

![BambooHR](./assets/bamboohr.png#connector-icon)
Manage Employees in BambooHR

## Connections

### Bamboo API Key

Bamboo API Key

Bamboo HR API keys can be used for testing an integration, but for production integrations, please use OAuth 2.0.

To generate an API key, log in to Bamboo HR, click your user profile image on the upper-right and then click **API Keys**.
Click **Add New Key**, and take note of the API key that is generated - it will be a ~40 character alphanumeric string.

| Input          | Comments                                                              | Default |
| -------------- | --------------------------------------------------------------------- | ------- |
| API Key        | Bamboo API Key                                                        |         |
| Company Domain | The MYCOMPANY portion of your https://MYCOMPANY.bamboohr.com instance |         |

## Triggers

### Webhook

Receive and validate webhook requests from BambooHR for webhooks you configure.

## Actions

### Add Employee

Add a new employee

| Input           | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| First Name      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Last Name       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Employee Fields | The names of the fields and their values to use when creating/updating a record. Possible fields are: address1, address2, age, bestEmail, birthday, city, country, dateOfBirth, department, division, employeeNumber, employmentHistoryStatus, ethnicity, exempt, firstName, fullName1, fullName2, fullName3, fullName4, fullName5, displayName, gender, hireDate, originalHireDate, id, jobTitle, lastChanged, lastName, location, maritalStatus, middleName, mobilePhone, nationality, payGroup, payRate, payRateEffectiveDate, payType, paidPer, paySchedule, payFrequency, includeInPayroll, timeTrackingEnabled, ssn, sin, standardHoursPerWeek, state, stateCode, status, supervisor, supervisorEmail, terminationDate, workEmail, workPhone, zipcode |         |

### Add Table Row

Adds a row to the specified table for an employee

| Input              | Comments                                                                                                                                                                         | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                                                  |         |
| Employee ID        |                                                                                                                                                                                  |         |
| Table Name (Alias) |                                                                                                                                                                                  |         |
| Table Fields       | The names of the fields and their values to use when creating/updating a row in a table. Use the "List Tabular Fields (Tables)" action to list possible field names for a table. |         |

### Create Company File Category

Create a new company file category (folder)

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Category Name |          |         |

### Create Employee File Category

Create a new employee file category (folder)

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Category Name |          |         |

### Create Webhook

Create a new webhook

| Input                     | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Webhook Name              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Callback URL              | Where the data should be sent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| Fields to Monitor         | Select one or more fields to trigger this webhook on. This can be any of the following: firstName, lastName, hireDate, department, middleName, dateOfBirth, ssn, address1, address2, city, state, zipcode, mobilePhone, homePhone, workEmail, jobTitle, location, gender, maritalStatus, payType, eeo, status, workPhone, workPhoneExtension, employeeNumber, ethnicity, division, homeEmail, preferredName, employeeStatusDate, country, payChangeReason, payRateEffectiveDate, exempt, twitterFeed, facebook, linkedIn, pinterest, acaStatus, payPer, originalHireDate, paySchedule, instagram, allergies, dietaryRestrictions, hoursPerPayCycle |         |
| Fields to send to Webhook | A list of fields to post to the webhook url. This can be any of the following: firstName, lastName, hireDate, department, middleName, dateOfBirth, ssn, address1, address2, city, state, zipcode, mobilePhone, homePhone, workEmail, jobTitle, location, gender, maritalStatus, payType, eeo, status, workPhone, workPhoneExtension, employeeNumber, ethnicity, division, homeEmail, preferredName, employeeStatusDate, country, payChangeReason, payRateEffectiveDate, exempt, twitterFeed, facebook, linkedIn, pinterest, acaStatus, payPer, originalHireDate, paySchedule, instagram, allergies, dietaryRestrictions, hoursPerPayCycle          |         |
| Allow Duplicates?         | By default this action checks if a webhook with this callback and sheet ID already exists. If it does, this action does not configure a new webhook. Toggle this to true to allow the creation of duplicate webhooks.                                                                                                                                                                                                                                                                                                                                                                                                                              | false   |

### Delete Company File

Delete an company file

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| File ID    |          |         |

### Delete Employee File

Delete an employee file

| Input       | Comments | Default |
| ----------- | -------- | ------- |
| Connection  |          |         |
| Employee ID |          |         |
| File ID     |          |         |

### Delete Instance Webhooks

Delete all BambooHR webhooks that point to a flow in this instance

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete Webhook

Delete a webhook by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webhook ID |          |         |

### Get an Employee's Table

Get a specific table associated with an employee

| Input              | Comments | Default |
| ------------------ | -------- | ------- |
| Connection         |          |         |
| Employee ID        |          |         |
| Table Name (Alias) |          |         |

### Get Company File

Get an company file

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| File ID    |          |         |

### Get Employee

Get an Employee

| Input       | Comments | Default |
| ----------- | -------- | ------- |
| Connection  |          |         |
| Employee ID |          |         |

### Get Employee File

Get an employee file

| Input       | Comments | Default |
| ----------- | -------- | ------- |
| Connection  |          |         |
| Employee ID |          |         |
| File ID     |          |         |

### Get Time Off Requests

Gets Employee Time Off Requests for a given date range.

| Input              | Comments | Default |
| ------------------ | -------- | ------- |
| Connection         |          |         |
| Time Off Record ID |          |         |
| Employee ID        |          |         |
| Start Date         |          |         |
| End Date           |          |         |
| Status             |          |         |

### List Company Files

List all company categories and files

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Employee Files

List all employee categories and files

| Input       | Comments | Default |
| ----------- | -------- | ------- |
| Connection  |          |         |
| Employee ID |          |         |

### List Employees

Get the employee directory

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Tabular Fields (Tables)

List all tables and their fields in the account

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Webhooks

Get a list of existing webhooks

| Input                       | Comments                                       | Default |
| --------------------------- | ---------------------------------------------- | ------- |
| Connection                  |                                                |         |
| Show only instance webhooks | Show only webhooks that point to this instance | true    |

### List Who's Out

Get a list of all employees currently taking time off

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection |                                                |         |
| Start Date | Defaults to today's date if omitted            |         |
| End Date   | Defaults to 14 days from start date if omitted |         |

### Raw Request

Send raw HTTP request to BambooHR

| Input                   | Comments                                                                                                                                                                                                                                                                                                     | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                              |         |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                         | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                             | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                          | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                | false   |

### Update Employee

Update an existing employee

| Input           | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Employee ID     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Employee Fields | The names of the fields and their values to use when creating/updating a record. Possible fields are: address1, address2, age, bestEmail, birthday, city, country, dateOfBirth, department, division, employeeNumber, employmentHistoryStatus, ethnicity, exempt, firstName, fullName1, fullName2, fullName3, fullName4, fullName5, displayName, gender, hireDate, originalHireDate, id, jobTitle, lastChanged, lastName, location, maritalStatus, middleName, mobilePhone, nationality, payGroup, payRate, payRateEffectiveDate, payType, paidPer, paySchedule, payFrequency, includeInPayroll, timeTrackingEnabled, ssn, sin, standardHoursPerWeek, state, stateCode, status, supervisor, supervisorEmail, terminationDate, workEmail, workPhone, zipcode |         |

### Update Employee Table Row

Updates a specific row in an Employee Table

| Input              | Comments                                                                                                                                                                         | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                                                  |         |
| Employee ID        |                                                                                                                                                                                  |         |
| Table Name (Alias) |                                                                                                                                                                                  |         |
| Row ID             |                                                                                                                                                                                  |         |
| Table Fields       | The names of the fields and their values to use when creating/updating a row in a table. Use the "List Tabular Fields (Tables)" action to list possible field names for a table. |         |

### Upload Company File

Upload a new company file

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Category ID   |          |         |
| File Name     |          |         |
| Share?        |          | false   |
| File contents |          |         |

### Upload Employee File

Upload a new employee file

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Employee ID   |          |         |
| Category ID   |          |         |
| File Name     |          |         |
| Share?        |          | false   |
| File contents |          |         |
