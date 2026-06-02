---
title: HiBob Connector
sidebar_label: HiBob
description: Manage employees, tasks, documents, and custom tables in HiBob.
---

![HiBob](./assets/hibob.png#connector-icon)
Manage employees, tasks, documents, and custom tables in HiBob.

## Connections

### Basic Authentication {#hibob-connection}

Authenticate using basic authentication.

| Input           | Comments                                                                    | Default |
| --------------- | --------------------------------------------------------------------------- | ------- |
| Service User ID | The HiBob API Service User ID.                                              |         |
| Token           | The HiBob API token.                                                        |         |
| Use Sandbox     | When true, connects to the HiBob sandbox environment instead of production. | false   |

### OAuth 2.0 {#hibob-oauth2}

Authenticate using OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                        | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Authorize URL | The App Installation URL from the HiBob Developer Portal. Navigate to the app's OAuth section to find this URL. |         |
| Scopes        | Space-separated OAuth 2.0 scopes. Configure in the HiBob Developer Portal under Manage Scopes.                  |         |
| Client ID     | The Client ID from the HiBob Developer Portal.                                                                  |         |
| Client Secret | The Client Secret from the HiBob Developer Portal.                                                              |         |
| Use Sandbox   | When true, connects to the HiBob sandbox environment instead of production.                                     | false   |

## Triggers

### Webhook {#webhook}

Receive and validate webhook requests from HiBob for manually configured webhook subscriptions.

| Input      | Comments                                                       | Default |
| ---------- | -------------------------------------------------------------- | ------- |
| App Secret | The secret key used to validate webhook signatures from HiBob. |         |

## Actions

### Add List Item {#addlistitem}

Adds a new item to an existing company list.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The HiBob connection to use.             |         |
| List Name  | The name of the list to add the item to. |         |
| Item Name  | The name of the new list item.           |         |
| Parent ID  | ID of the new hierarchy parent node.     |         |

### Complete Task {#completetask}

Marks a task as completed.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The HiBob connection to use.    |         |
| Task ID    | The ID of the task to complete. |         |

### Create Custom Table Entry {#createcustomtableentry}

Creates a new entry in a custom table for an employee.

| Input           | Comments                                                     | Default |
| --------------- | ------------------------------------------------------------ | ------- |
| Connection      | The HiBob connection to use.                                 |         |
| Employee ID     | The ID of the employee to create the custom table entry for. |         |
| Custom Table ID | The unique identifier for the custom table.                  |         |
| Entry Data      | The data for the custom table entry in JSON format.          |         |

### Create Employee {#createemployee}

Creates a new employee with the specified fields.

| Input      | Comments                                                          | Default |
| ---------- | ----------------------------------------------------------------- | ------- |
| Connection | The HiBob connection to use.                                      |         |
| First Name | The given name of the employee.                                   |         |
| Surname    | The last name or family name of the employee.                     |         |
| Email      | The work email address assigned to the employee.                  |         |
| Site       | The office location or branch assigned to the employee.           |         |
| Start Date | The date when the employee begins employment. Format: YYYY-MM-DD. |         |

### Create New Field {#createnewfield}

Creates a new custom field in HiBob.

| Input       | Comments                                                                                               | Default |
| ----------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The HiBob connection to use.                                                                           |         |
| Field Name  | The name of the new field to create.                                                                   |         |
| Category    | The grouping category under which the field is organized.                                              |         |
| Field Type  | The data type of the new field.                                                                        |         |
| Description | A description of the field's purpose.                                                                  |         |
| Historical  | When true, this field keeps the history of its values, each being active starting from a certain date. | false   |

### Delete Custom Table Entry {#deletecustomtableentry}

Deletes an existing entry from a custom table for an employee.

| Input           | Comments                                                         | Default |
| --------------- | ---------------------------------------------------------------- | ------- |
| Connection      | The HiBob connection to use.                                     |         |
| Employee ID     | The ID of the employee whose custom table entry will be deleted. |         |
| Custom Table ID | The ID of the custom table containing the entry to delete.       |         |
| Entry ID        | The ID of the custom table entry to delete.                      |         |

### Delete Field {#deletefield}

Deletes an existing custom field from HiBob.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The HiBob connection to use.   |         |
| Field ID   | The ID of the field to delete. |         |

### Delete File From Folder {#deletefilefromfolder}

Deletes a file from an employee's document folder.

| Input       | Comments                                                                              | Default |
| ----------- | ------------------------------------------------------------------------------------- | ------- |
| Connection  | The HiBob connection to use.                                                          |         |
| Employee ID | The ID of the employee whose file to delete.                                          |         |
| Document ID | The ID of the document to delete.                                                     |         |
| Folder Type | The type of folder containing the file to delete.                                     |         |
| Folder ID   | Required if folder type is 'Custom'. The ID of the custom folder containing the file. |         |

### Delete List Item {#deletelistitem}

Deletes an existing item from a company list.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The HiBob connection to use.                        |         |
| List Name  | The name of the list containing the item to delete. |         |
| Item ID    | The ID of the list item to delete.                  |         |

### Download Employee Documents {#downloademployeedocuments}

Downloads a list of documents for an employee.

| Input       | Comments                                            | Default |
| ----------- | --------------------------------------------------- | ------- |
| Connection  | The HiBob connection to use.                        |         |
| Employee ID | The ID of the employee whose documents to download. |         |

### Get Company List {#getcompanylist}

Retrieves a specific named list from the company.

| Input            | Comments                                            | Default |
| ---------------- | --------------------------------------------------- | ------- |
| Connection       | The HiBob connection to use.                        |         |
| List Name        | The name of the list to retrieve.                   |         |
| Include Archived | When true, includes archived items in the response. | false   |

### Get Custom Table Metadata {#getcustomtablemetadata}

Retrieves metadata for a specific custom table.

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      | The HiBob connection to use.                         |         |
| Custom Table ID | The ID of the custom table to retrieve metadata for. |         |

### Get Employee Tasks {#getemployeetasks}

Retrieves all tasks assigned to a specific employee.

| Input       | Comments                                                                                       | Default |
| ----------- | ---------------------------------------------------------------------------------------------- | ------- |
| Connection  | The HiBob connection to use.                                                                   |         |
| Employee ID | The Employee ID as pulled from the database, or from the URL In Bob when viewing the employee. |         |
| Task Status | Filter tasks by open / closed status. Not sending any value will return all tasks.             |         |

### List Company Lists {#listcompanylists}

Retrieves all named lists in the company.

| Input            | Comments                                            | Default |
| ---------------- | --------------------------------------------------- | ------- |
| Connection       | The HiBob connection to use.                        |         |
| Include Archived | When true, includes archived items in the response. | false   |

### List Employee Fields {#listemployeefields}

Retrieves a list of all employee fields in the company.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The HiBob connection to use. |         |

### List Folders {#listfolders}

Retrieves a list of all document folders in the system.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The HiBob connection to use. |         |

### List Open Tasks {#listopentasks}

Retrieves a list of all open tasks in the system.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The HiBob connection to use. |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the HiBob API.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                               | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The HiBob connection to use.                                                                                                                                                                                                                                                                                                           |         |
| URL                     | Input the path only (/docs/folders/metadata). The base URL is determined by the connection's sandbox setting (https://api.hibob.com/v1 for production, https://api.sandbox.hibob.com/v1 for sandbox). For example, to connect to https://api.hibob.com/v1/docs/folders/metadata, only /docs/folders/metadata is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                              |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                   |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                       |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                                 |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                    |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                            |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                               | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                    |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                    | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                       | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                    | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                          | false   |

### Read Employee Fields {#reademployeefields}

Retrieves employee data for a specific employee by ID or email.

| Input               | Comments                                                                                                                                                                                      | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The HiBob connection to use.                                                                                                                                                                  |         |
| Employee Identifier | The employee's ID or email address to retrieve data for.                                                                                                                                      |         |
| Fields              | An optional list of fields to be returned in the response. When not specified, a default set of fields and categories are returned.                                                           |         |
| Human Readable      | A flag that determines the data format to be returned in the response payload. Use this flag to convert "machine format" numeric IDs, such as "1644513820829" to the "human readable" values. |         |

### Revoke Employee Access {#revokeemployeeaccess}

Revokes access to HiBob for a specific employee.

| Input               | Comments                                                 | Default |
| ------------------- | -------------------------------------------------------- | ------- |
| Connection          | The HiBob connection to use.                             |         |
| Employee Identifier | The employee's ID or email address to revoke access for. |         |

### Search Employee {#searchemployee}

Searches for employees based on specified criteria.

| Input          | Comments                                                                                                                                                                                      | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The HiBob connection to use.                                                                                                                                                                  |         |
| Fields         | An optional list of fields to be returned in the response. When not specified, a default set of fields and categories are returned.                                                           |         |
| Filters        | An optional filter based on a field and a condition to filter the results.                                                                                                                    |         |
| Show Inactive  | When true, includes inactive employees in the response.                                                                                                                                       | false   |
| Human Readable | A flag that determines the data format to be returned in the response payload. Use this flag to convert "machine format" numeric IDs, such as "1644513820829" to the "human readable" values. |         |

### Terminate Employee {#terminateemployee}

Terminates a specific employee with a given termination date and reason.

| Input               | Comments                                                                                                                         | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The HiBob connection to use.                                                                                                     |         |
| Employee Identifier | The backend-id of the Employee to terminate. Retrieve this ID from the database.                                                 |         |
| Termination Date    | The date when the employee's termination takes effect (YYYY-MM-DD format).                                                       |         |
| Termination Reason  | The ID of the 'terminationReason' list entry.                                                                                    |         |
| Reason              | The ID of the 'lifecycleReasonType' list entry.                                                                                  |         |
| Notice Period       | The duration of the notice period before the employee's departure. Provide as a JSON object with 'length' and 'unit' properties. |         |
| Last Day of Work    | The final working date before the employee's departure. Format: YYYY-MM-DD.                                                      |         |

### Update Custom Table Entry {#updatecustomtableentry}

Updates an existing entry in a custom table for an employee.

| Input           | Comments                                                         | Default |
| --------------- | ---------------------------------------------------------------- | ------- |
| Connection      | The HiBob connection to use.                                     |         |
| Employee ID     | The ID of the employee whose custom table entry will be updated. |         |
| Custom Table ID | The ID of the custom table containing the entry to update.       |         |
| Entry ID        | The ID of the custom table entry to update.                      |         |
| Entry Data      | The updated data for the custom table entry in JSON format.      |         |

### Update Employee {#updateemployee}

Updates employee data for a specific employee by ID or email.

| Input               | Comments                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The HiBob connection to use.                                                                                         |         |
| Employee Identifier | The employee's ID to update.                                                                                         |         |
| Fields              | The fields to update for the employee. This should be a JSON object containing the field paths and their new values. |         |

### Update Employee Email {#updateemployeeemail}

Updates the email address for a specific employee.

| Input               | Comments                                           | Default |
| ------------------- | -------------------------------------------------- | ------- |
| Connection          | The HiBob connection to use.                       |         |
| Employee Identifier | The employee's ID to update the email address for. |         |
| New Email Address   | The new email address for the employee.            |         |

### Update Field {#updatefield}

Updates an existing custom field in HiBob.

| Input       | Comments                         | Default |
| ----------- | -------------------------------- | ------- |
| Connection  | The HiBob connection to use.     |         |
| Field ID    | The ID of the field to update.   |         |
| Field Name  | The new name for the field.      |         |
| Description | A new description for the field. |         |

### Update List Item {#updatelistitem}

Updates an existing item in a company list.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The HiBob connection to use.                        |         |
| List Name  | The name of the list containing the item to update. |         |
| Item ID    | The ID of the list item to update.                  |         |
| Item Name  | The new name for the list item.                     |         |
| Parent ID  | The ID of the new hierarchy parent node.            |         |

### Upload File From URL {#uploadfilefromurl}

Uploads a file from a URL to an employee's document folder.

| Input         | Comments                                                                       | Default |
| ------------- | ------------------------------------------------------------------------------ | ------- |
| Connection    | The HiBob connection to use.                                                   |         |
| Employee ID   | The ID of the employee to upload the file for.                                 |         |
| Folder Type   | The type of folder to upload the file to.                                      |         |
| Document Name | The display name for the uploaded document, including file extension.          |         |
| Document URL  | The URL pointing to the document to upload.                                    |         |
| Folder ID     | Required if folder type is 'Custom'. The ID of the custom folder to upload to. |         |
| Tags          | An array of tags to attach to the document in Bob.                             |         |

### Upload File To Folder {#uploadfiletofolder}

Uploads a file directly to an employee's document folder.

| Input       | Comments                                                                                                       | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The HiBob connection to use.                                                                                   |         |
| Employee ID | The ID of the employee to upload the file for.                                                                 |         |
| Folder Type | The type of folder to upload the file to.                                                                      |         |
| File Data   | The binary data of the file to upload. This should be a reference to a previous action that returns file data. |         |
| File Name   | The desired file name for the uploaded document, including extension.                                          |         |
| Folder ID   | Required if folder type is 'Custom'. The ID of the custom folder to upload to.                                 |         |
