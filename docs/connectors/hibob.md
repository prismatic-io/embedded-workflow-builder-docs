---
title: HiBob Connector
sidebar_label: HiBob
description: HiBob is an HR platform for people management, performance, and engagement.
---

![HiBob](./assets/hibob.png#connector-icon)
HiBob is an HR platform for people management, performance, and engagement.

## Connections

### Basic Authentication

HiBob Basic Authentication Connection

To use the HiBob component, you'll need to obtain API credentials (Service User ID and Token) from your HiBob account.

#### Obtaining API Credentials

1. **Access HiBob Admin Panel**
   - Log in to your HiBob account
   - Navigate to the Service Users configuration page

2. **Create a New Service User**
   - Create a new API service user
   - You'll receive a Service User ID and Token
   - Make sure to copy these credentials immediately as the token can only be viewed once

3. **Set Up Permissions**
   - Create a dedicated permission group for your service user
   - Add the service user to this group
   - Configure the necessary permissions based on the API operations you plan to perform
   - For basic employee data access, ensure you have the "Default Employee Fields" permissions enabled

> **Note**: If you don't have direct access to HiBob's admin panel, you'll need to contact your HiBob administrator to generate these credentials for you.

#### Required Permissions

For basic functionality, ensure your service user has the following permissions:

- View access to employee data sections
- Access to the specific features you plan to use via the API

| Input           | Comments                        | Default |
| --------------- | ------------------------------- | ------- |
| Service User ID | Your HiBob API Service User ID. |         |
| Token           | Your HiBob API token.           |         |
| Use Sandbox     | Use the sandbox environment.    | false   |

## Triggers

### Webhook

Receive and validate webhook requests from HiBob for webhooks you configure.

| Input      | Comments                                                       | Default |
| ---------- | -------------------------------------------------------------- | ------- |
| App Secret | The secret key used to validate webhook signatures from HiBob. |         |

## Actions

### Add List Item

Add a new item to an existing list.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection |                                          |         |
| List Name  | The name of the list to add the item to. |         |
| Item Name  | The name of the new list item.           |         |
| Parent ID  | ID of the new hierarchy parent node.     |         |

### Complete Task

Mark a task as completed.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection |                                 |         |
| Task ID    | The ID of the task to complete. |         |

### Create Custom Table Entry

Create a new entry in a custom table for an employee.

| Input           | Comments                                                     | Default |
| --------------- | ------------------------------------------------------------ | ------- |
| Connection      |                                                              |         |
| Employee ID     | The ID of the employee to create the custom table entry for. |         |
| Custom Table ID | The ID of the custom table to create an entry in.            |         |
| Entry Data      | The data for the custom table entry in JSON format.          |         |

### Create Employee

Create a new employee with the specified fields.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| First Name | Employee's first name.                |         |
| Surname    | Employee's surname.                   |         |
| Email      | Employee's email address.             |         |
| Site       | The employee's site.                  |         |
| Start Date | The employee's employment start date. |         |

### Create New Field

Create a new custom field in HiBob.

| Input       | Comments                                                                                               | Default |
| ----------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection  |                                                                                                        |         |
| Field Name  | The name of the new field to create.                                                                   |         |
| Category    | The category of the field.                                                                             |         |
| Field Type  | The data type of the new field.                                                                        |         |
| Description | A description of the field's purpose.                                                                  |         |
| Historical  | When true, this field keeps the history of its values, each being active starting from a certain date. | false   |

### Delete Custom Table Entry

Delete an existing entry from a custom table for an employee.

| Input           | Comments                                                         | Default |
| --------------- | ---------------------------------------------------------------- | ------- |
| Connection      |                                                                  |         |
| Employee ID     | The ID of the employee whose custom table entry will be deleted. |         |
| Custom Table ID | The ID of the custom table containing the entry to delete.       |         |
| Entry ID        | The ID of the custom table entry to delete.                      |         |

### Delete Field

Delete an existing custom field from HiBob.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection |                                |         |
| Field ID   | The ID of the field to delete. |         |

### Delete File From Folder

Delete a file from an employee's document folder.

| Input       | Comments                                                                              | Default |
| ----------- | ------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                       |         |
| Employee ID | The ID of the employee whose file to delete.                                          |         |
| Document ID | The ID of the document to delete.                                                     |         |
| Folder Type | The type of folder containing the file to delete.                                     |         |
| Folder ID   | Required if folder type is 'Custom'. The ID of the custom folder containing the file. |         |

### Delete List Item

Delete an existing item from a company list.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| List Name  | The name of the list containing the item to delete. |         |
| Item ID    | The ID of the list item to delete.                  |         |

### Download Employee Documents

Download list of documents of an employee.

| Input       | Comments                                            | Default |
| ----------- | --------------------------------------------------- | ------- |
| Connection  |                                                     |         |
| Employee ID | The ID of the employee whose documents to download. |         |

### Get Company List

Retrieve a specific named list from the company.

| Input            | Comments                                           | Default |
| ---------------- | -------------------------------------------------- | ------- |
| Connection       |                                                    |         |
| List Name        | The name of the list to retrieve.                  |         |
| Include Archived | Whether to include archived items in the response. | false   |

### Get Custom Table Metadata

Retrieve metadata for a specific custom table.

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      |                                                      |         |
| Custom Table ID | The ID of the custom table to retrieve metadata for. |         |

### Get Employee Tasks

Retrieve all tasks assigned to a specific employee.

| Input       | Comments                                                                                       | Default |
| ----------- | ---------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                |         |
| Employee ID | The Employee ID as pulled from the database, or from the URL In Bob when viewing the employee. |         |
| Task Status | Filter tasks by open / closed status. Not sending any value will return all tasks.             |         |

### List Company Lists

Retrieve all named lists in the company.

| Input            | Comments                                           | Default |
| ---------------- | -------------------------------------------------- | ------- |
| Connection       |                                                    |         |
| Include Archived | Whether to include archived items in the response. | false   |

### List Employee Fields

Retrieve a list of all employee fields in the company.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Folders

Retrieve a list of all document folders in the system.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Open Tasks

Retrieve a list of all open tasks in the system.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send raw HTTP request to HiBob.

| Input                   | Comments                                                                                                                                                                                                                                    | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                             |         |
| URL                     | Input the path only (/docs/folders/metadata), The base URL is already included (https://api.hibob.com/v1). For example, to connect to https://api.hibob.com/v1/docs/folders/metadata, only /docs/folders/metadata is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                     |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                   |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                        |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                            |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                      |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                         |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                 |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                    | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                         |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                               | false   |

### Read Employee Fields

Retrieve employee data for a specific employee by ID or email.

| Input               | Comments                                                                                                                                                                                      | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                               |         |
| Employee Identifier | The employee's ID or email address to retrieve data for.                                                                                                                                      |         |
| Fields              | An optional list of fields to be returned in the response. When not specified, a default set of fields and categories are returned.                                                           |         |
| Human Readable      | A flag that determines the data format to be returned in the response payload. Use this flag to convert "machine format" numeric IDs, such as "1644513820829" to the "human readable" values. |         |

### Revoke Employee Access

Revoke access to Bob for a specific employee.

| Input               | Comments                                                 | Default |
| ------------------- | -------------------------------------------------------- | ------- |
| Connection          |                                                          |         |
| Employee Identifier | The employee's ID or email address to revoke access for. |         |

### Search Employee

Retrieve employee data based on specified criteria.

| Input          | Comments                                                                                                                                                                                      | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                                                               |         |
| Fields         | An optional list of fields to be returned in the response. When not specified, a default set of fields and categories are returned.                                                           |         |
| Filters        | An optional filter based on a field and a condition to filter the results.                                                                                                                    |         |
| Show Inactive  | Defines whether response should include inactive employees.                                                                                                                                   | false   |
| Human Readable | A flag that determines the data format to be returned in the response payload. Use this flag to convert "machine format" numeric IDs, such as "1644513820829" to the "human readable" values. |         |

### Terminate Employee

Terminate a specific employee with a given termination date and reason.

| Input               | Comments                                                                         | Default |
| ------------------- | -------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                  |         |
| Employee Identifier | The backend-id of the Employee to terminate. Retrieve this ID from the database. |         |
| Termination Date    | The date when the employee's termination takes effect (YYYY-MM-DD format).       |         |
| Termination Reason  | The ID of the 'terminationReason' list entry.                                    |         |
| Reason              | The ID of the 'lifecycleReasonType' list entry.                                  |         |
| Notice Period       | Notice period length.                                                            |         |
| Last Day of Work    | The last day of work for the employee.                                           |         |

### Update Custom Table Entry

Update an existing entry in a custom table for an employee.

| Input           | Comments                                                         | Default |
| --------------- | ---------------------------------------------------------------- | ------- |
| Connection      |                                                                  |         |
| Employee ID     | The ID of the employee whose custom table entry will be updated. |         |
| Custom Table ID | The ID of the custom table containing the entry to update.       |         |
| Entry ID        | The ID of the custom table entry to update.                      |         |
| Entry Data      | The updated data for the custom table entry in JSON format.      |         |

### Update Employee

Update employee data for a specific employee by ID or email.

| Input               | Comments                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                      |         |
| Employee Identifier | The employee's ID to update.                                                                                         |         |
| Fields              | The fields to update for the employee. This should be a JSON object containing the field paths and their new values. |         |

### Update Employee Email

Update the email address for a specific employee.

| Input               | Comments                                           | Default |
| ------------------- | -------------------------------------------------- | ------- |
| Connection          |                                                    |         |
| Employee Identifier | The employee's ID to update the email address for. |         |
| New Email Address   | The new email address for the employee.            |         |

### Update Field

Update an existing custom field in HiBob.

| Input       | Comments                         | Default |
| ----------- | -------------------------------- | ------- |
| Connection  |                                  |         |
| Field ID    | The ID of the field to update.   |         |
| Field Name  | The new name for the field.      |         |
| Description | A new description for the field. |         |

### Update List Item

Update an existing item in a company list.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| List Name  | The name of the list containing the item to update. |         |
| Item ID    | The ID of the list item to update.                  |         |
| Item Name  | The new name for the list item.                     |         |
| Parent ID  | The ID of the new hierarchy parent node.            |         |

### Upload File From URL

Upload a file from a URL to an employee's document folder.

| Input         | Comments                                                                       | Default |
| ------------- | ------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                |         |
| Employee ID   | The ID of the employee to upload the file for.                                 |         |
| Folder Type   | The type of folder to upload the file to.                                      |         |
| Document Name | The name of the Document.                                                      |         |
| Document URL  | The URL pointing to the document to upload.                                    |         |
| Folder ID     | Required if folder type is 'Custom'. The ID of the custom folder to upload to. |         |
| Tags          | A array of tags that you want to attach to the document in Bob.                |         |

### Upload File To Folder

Upload a file directly to an employee's document folder.

| Input       | Comments                                                                                                       | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                |         |
| Employee ID | The ID of the employee to upload the file for.                                                                 |         |
| Folder Type | The type of folder to upload the file to.                                                                      |         |
| File Data   | The binary data of the file to upload. This should be a reference to a previous action that returns file data. |         |
| File Name   | The name of the file to upload.                                                                                |         |
| Folder ID   | Required if folder type is 'Custom'. The ID of the custom folder to upload to.                                 |         |
