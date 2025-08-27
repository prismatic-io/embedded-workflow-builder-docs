---
title: Sage HR Connector
sidebar_label: Sage HR
description: Sage HR is all inclusive Human Resource management solution. Use the Sage HR component to manage Employees, Teams, Projects, and more.
---

![Sage HR](./assets/sage-hr.png#connector-icon)
Sage HR is all inclusive Human Resource management solution. Use the Sage HR component to manage Employees, Teams, Projects, and more.

## Connections

### API Key

Sage HR uses an activated API key for Authentication.

To activate API:

1. Sign into Sage HR, click on your name on the top right, then click **Settings**.
2. On the settings menu, click **INTEGRATIONS**, then click **API**.
3. Click ENABLE API ACCESS to activate access to API and provide you with your unique API key.
4. Save the API Key and paste into your connection's configuration.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| API Key        | API Key for your Sage HR User              |         |
| Subdomain Name | The subdomain name of your Sage HR account |         |

## Actions

### Close Project

Close a project.

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection |                            |         |
| Project ID | ID of project to be closed |         |

### Create Document

Creates a document only visible to the employee themselves.

| Input                         | Comments                                                                                 | Default                 |
| ----------------------------- | ---------------------------------------------------------------------------------------- | ----------------------- |
| Connection                    |                                                                                          |                         |
| File                          | The file to upload.                                                                      |                         |
| File Name                     | The name of the file                                                                     |                         |
| Employee IDs                  | Employee Identifier; also accepts and array of integers to share with multiple employees | <code>["000xxx"]</code> |
| Category ID                   | Optional ID of the document category to filter by.                                       |                         |
| Description                   | Document description.                                                                    |                         |
| Notify                        | 'true' to notify employee by email                                                       | false                   |
| Source                        | Source of the document                                                                   | API                     |
| Shared With Everyone          | 'true' to share with all employees                                                       | false                   |
| Shared With Team Manager      | 'true' to share with all team managers                                                   | false                   |
| Shared With Direct Manager    | 'true' to share with all direct manager                                                  | false                   |
| Status                        | Status of the document                                                                   |                         |
| Right to Work Document Type   | Right to work document type                                                              |                         |
| Right to Work Document Number | Right to work document number                                                            |                         |
| Expires                       | if 'true' expiration_date is also required                                               | false                   |
| Expiration Date               | Expiration date of the document, format: YYYY-MM-DD                                      |                         |

### Create Employee

Create new employee

| Input                          | Comments                                                                                               | Default |
| ------------------------------ | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection                     |                                                                                                        |         |
| Email                          | Email address of the employee                                                                          |         |
| First Name                     | First name of the employee                                                                             |         |
| Last Name                      | Last name of the employee                                                                              |         |
| Work Start Date                | Employees work start date, format: YYYY-MM-DD, leave empty to use todays date                          |         |
| Send Email                     | 'true' to send welcome email to employee                                                               | false   |
| Date of Birth                  | Employees date of birth, format: YYYY-MM-DD                                                            |         |
| Gender                         | Employees gender, Must be one of: Male, Female, Other                                                  |         |
| Marital Status                 | Employees marital status, Must be one of: Married, Single, Divorced, Widower, In a relationship, Other |         |
| Nationality                    | Employees nationalty in long form, example: Canadian                                                   |         |
| Country                        | Employees country two character ISO code                                                               |         |
| State                          | Employees address: state                                                                               |         |
| Post Code                      | Employees address: zip or postal code                                                                  |         |
| Street First                   | Employees address first line                                                                           |         |
| Street Second                  | Employees address second line                                                                          |         |
| City                           | Employees address city                                                                                 |         |
| Position Title                 | Employees position                                                                                     |         |
| Home Phone                     | Home phone number                                                                                      |         |
| Work Phone                     | Work phone number                                                                                      |         |
| Mobile Phone                   | Mobile phone number                                                                                    |         |
| Personal Identification Number | Personal identification number                                                                         |         |
| Tax Number                     | Tax Number                                                                                             |         |

### Create Project

Create a new project.

| Input                 | Comments                             | Default |
| --------------------- | ------------------------------------ | ------- |
| Connection            |                                      |         |
| Project Name          | Name of the project                  |         |
| Project Code          | Code of the project                  |         |
| Start Date            | Last working day; format: YYYY-MM-DD |         |
| End Date              | Last working day; format: YYYY-MM-DD |         |
| Limit Total Hours     | Activate the limit of hours          | false   |
| Max Limit Total Hours | The limit number of hours            |         |

### Create Projects

Create a batch of projects.

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection |                       |         |
| Projects   | An array of projects. |         |

### Create Time Off Requests

Create new time off request

| Input              | Comments                                                                            | Default |
| ------------------ | ----------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                     |         |
| Type               | Time off request type                                                               |         |
| Time Off Policy ID | Time off policy ID                                                                  |         |
| Employee ID        | The ID of the employee                                                              |         |
| Replacement ID     | Time off policy ID                                                                  |         |
| Last Working Day   | format: YYYY-MM-DD; required if type is single                                      |         |
| Last Working Day   | format: YYYY-MM-DD; required if type is multi                                       |         |
| Last Working Day   | format: YYYY-MM-DD; required if type is multi                                       |         |
| Part of Day        | Part of day                                                                         |         |
| Hours              | required if type is single & part_of_day is first_part_of_day or second_part_of_day |         |
| Last Working Day   | format: H:M; required if part_of_day is specific_timespan                           |         |
| Last Working Day   | format: H:M; required if part_of_day is specific_timespan                           |         |
| Details            | required based on policy settings                                                   |         |

### Delete Document

Allows admin to delete document.

| Input       | Comments                     | Default |
| ----------- | ---------------------------- | ------- |
| Connection  |                              |         |
| Document ID | ID of document to be deleted |         |

### Get Document

View Document Details.

| Input       | Comments    | Default |
| ----------- | ----------- | ------- |
| Connection  |             |         |
| Document ID | Document ID |         |

### Get Employee

Retrieve single active employee in company.

| Input                     | Comments                                        | Default |
| ------------------------- | ----------------------------------------------- | ------- |
| Connection                |                                                 |         |
| Employee ID               | The ID of the employee                          |         |
| Team History              | Whether to return the team history              | false   |
| Employment Status History | Whether to return the employment status history | false   |
| Position History          | Whether to return the position history          | false   |

### Get Employee Compensations

Retrieve single employee's compensation details

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Employee ID | The ID of the employee |         |

### Get Employee Custom Fields

Get employee custom fields

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Employee ID | The ID of the employee |         |

### Get Terminated Employee

Retrieve single terminated employee

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Employee ID | The ID of the employee |         |

### List Documents

View all documents for company

| Input       | Comments                                           | Default |
| ----------- | -------------------------------------------------- | ------- |
| Connection  |                                                    |         |
| Category ID | Optional ID of the document category to filter by. |         |
| Employee ID | Optional id of employee to filter documents.       |         |

### List Employees

List active employees in company.

| Input                     | Comments                                        | Default |
| ------------------------- | ----------------------------------------------- | ------- |
| Connection                |                                                 |         |
| Page                      | The page number to return                       |         |
| Team History              | Whether to return the team history              | false   |
| Employment Status History | Whether to return the employment status history | false   |
| Position History          | Whether to return the position history          | false   |

### List Positions

List positions in company

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Page       | The page number to return |         |

### List Projects

List projects

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Teams

List teams in company

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Page       | The page number to return |         |

### List Terminated Employees

Retrieve a list of terminated employees

| Input                     | Comments                                        | Default |
| ------------------------- | ----------------------------------------------- | ------- |
| Connection                |                                                 |         |
| Page                      | The page number to return                       |         |
| Team History              | Whether to return the team history              | false   |
| Employment Status History | Whether to return the employment status history | false   |
| Position History          | Whether to return the position history          | false   |

### List Time Off Balances

Lists employee time off balances

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Employee ID | The ID of the employee |         |

### List Time Off Requests

Lists employee time off Requests

| Input      | Comments                                                                                                                                                                                          | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                   |         |
| Page       | The page number to return                                                                                                                                                                         |         |
| From Date  | If not specified defaults to beginning of current month. Format: YYYY-MM-DD                                                                                                                       |         |
| To Date    | If not specified defaults to end of current month. Days between from date and to date must be less than 65. If you need info for larger period of time make multiple requests. Format: YYYY-MM-DD |         |

### Raw Request

Send raw HTTP request to Sage HR

| Input                   | Comments                                                                                                                                                                                                           | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                                    |         |
| URL                     | Input the path only (/employees), The base URL is already included (https://subdomain.sage.hr/api/). For example, to connect to https://subdomain.sage.hr/api/employees, only /employees is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                            |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                          |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                               |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                   |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                             |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                        |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                           | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                               | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                    | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                          | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                   | false   |

### Rehire Employee

Rehire Employee.

| Input                 | Comments                                                                                            | Default |
| --------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                     |         |
| Employee ID           | The ID of the employee                                                                              |         |
| New start working day | format: YYYY-MM-DD                                                                                  |         |
| Comments              | Comments                                                                                            |         |
| Start Fresh           | This parameter is used to start the employee record clean, resetting the employee's leave balances. | false   |

### Terminate Employee

Terminate Employee.

| Input                 | Comments                             | Default |
| --------------------- | ------------------------------------ | ------- |
| Connection            |                                      |         |
| Employee ID           | The ID of the employee               |         |
| Last Working Day      | Last working day; format: YYYY-MM-DD |         |
| Termination Reason ID | Termination reason ID                |         |
| Comments              | Comments                             |         |

### Time Clocking In and Out

Clock in and out employees on specific days

| Input        | Comments                                                                                        | Default |
| ------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                 |         |
| Override     | 'true' if override provided days clocked entries                                                | false   |
| Clocked Time | Clocked time entries for the day. If override is true, this will override the existing entries. |         |

### Update Document

Document will only be visible to employee themselves.

| Input                         | Comments                                                                                 | Default                 |
| ----------------------------- | ---------------------------------------------------------------------------------------- | ----------------------- |
| Connection                    |                                                                                          |                         |
| Document ID                   | ID of document to be updated                                                             |                         |
| File                          | The file to upload.                                                                      |                         |
| File Name                     | The name of the file                                                                     |                         |
| Employee IDs                  | Employee Identifier; also accepts and array of integers to share with multiple employees | <code>["000xxx"]</code> |
| Category ID                   | Optional ID of the document category to filter by.                                       |                         |
| Description                   | Document description.                                                                    |                         |
| Notify                        | 'true' to notify employee by email                                                       | false                   |
| Source                        | Source of the document                                                                   | API                     |
| Shared With Everyone          | 'true' to share with all employees                                                       | false                   |
| Shared With Team Manager      | 'true' to share with all team managers                                                   | false                   |
| Shared With Direct Manager    | 'true' to share with all direct manager                                                  | false                   |
| Status                        | Status of the document                                                                   |                         |
| Right to Work Document Type   | Right to work document type                                                              |                         |
| Right to Work Document Number | Right to work document number                                                            |                         |
| Expires                       | if 'true' expiration_date is also required                                               | false                   |
| Expiration Date               | Expiration date of the document, format: YYYY-MM-DD                                      |                         |

### Update Employee

Update employee

| Input                          | Comments                                                                                               | Default                 |
| ------------------------------ | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| Connection                     |                                                                                                        |                         |
| Employee ID                    | The ID of the employee                                                                                 |                         |
| First Name                     | First name of the employee                                                                             |                         |
| Last Name                      | Last name of the employee                                                                              |                         |
| Work Start Date                | Employees work start date, format: YYYY-MM-DD, leave empty to use todays date                          |                         |
| Location ID                    | The ID of the location                                                                                 |                         |
| Team ID                        | The ID of the team                                                                                     |                         |
| Leader ID                      | The ID of the leader                                                                                   |                         |
| Date of Birth                  | Employees date of birth, format: YYYY-MM-DD                                                            |                         |
| Gender                         | Employees gender, Must be one of: Male, Female, Other                                                  |                         |
| Marital Status                 | Employees marital status, Must be one of: Married, Single, Divorced, Widower, In a relationship, Other |                         |
| Nationality                    | Employees nationalty in long form, example: Canadian                                                   |                         |
| Country                        | Employees country two character ISO code                                                               |                         |
| State                          | Employees address: state                                                                               |                         |
| Post Code                      | Employees address: zip or postal code                                                                  |                         |
| Street First                   | Employees address first line                                                                           |                         |
| Street Second                  | Employees address second line                                                                          |                         |
| City                           | Employees address city                                                                                 |                         |
| Position ID                    | The ID of the position                                                                                 |                         |
| Employee Number                | The employee number                                                                                    |                         |
| Home Phone                     | Home phone number                                                                                      |                         |
| Work Phone                     | Work phone number                                                                                      |                         |
| Mobile Phone                   | Mobile phone number                                                                                    |                         |
| Personal Identification Number | Personal identification number                                                                         |                         |
| Tax Number                     | Tax Number                                                                                             |                         |
| Approver IDs                   | List of approver IDs.                                                                                  | <code>["000xxx"]</code> |
| Selected Leave Types           | Selected leave types.                                                                                  | <code>["000xxx"]</code> |

### Update Employee Custom Field

Update employee custom field

| Input              | Comments               | Default |
| ------------------ | ---------------------- | ------- |
| Connection         |                        |         |
| Employee ID        | The ID of the employee |         |
| Custom Field ID    | Custom field ID        |         |
| Custom Field Value | Custom field Value     |         |

### Update Project

Update a project.

| Input                 | Comments                             | Default |
| --------------------- | ------------------------------------ | ------- |
| Connection            |                                      |         |
| Project ID            | Id of the project                    |         |
| Project Name          | Name of the project                  |         |
| Project Code          | Code of the project                  |         |
| Start Date            | Last working day; format: YYYY-MM-DD |         |
| End Date              | Last working day; format: YYYY-MM-DD |         |
| Limit Total Hours     | Activate the limit of hours          | false   |
| Max Limit Total Hours | The limit number of hours            |         |

### Update Projects

Update a batch of projects.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection |                                 |         |
| Projects   | Array of projects to be updated |         |
