---
title: Domo Connector
sidebar_label: Domo
description: The Domo platform includes a world class data warehouse, robust data pipeline functionality, and visualization engine.
---

![Domo](./assets/domo.png#connector-icon)
The Domo platform includes a world class data warehouse, robust data pipeline functionality, and visualization engine.

## Connections

### Domo OAuth Connection

OAuth Connectivity for Domo

[Generating Client ID and Client Secret](https://developer.domo.com/portal/8ba9aedad3679-ap-is#step-1-create-client-id-and-secret)

To generate a client ID and client secret for your Domo instance, follow these steps:

1. Obtain your Domo Instance Name:
   - Your Domo Instance Name is the part of the URL preceding "domo.com." For instance, if your Domo URL is `acmecompany.domo.com`, your instance name would be `acmecompany`.

2. Log in to the Developer Portal:
   - Click on the "Dev Portal Login" link to access the Developer Portal or follow this link [https://developer.domo.com/login](https://developer.domo.com/login).

3. Enter Instance Name and User Credentials:
   - Provide your Domo Instance Name and user credentials when prompted to log in.

4. Access "Manage Clients" Page:
   - After logging in successfully, you will be redirected to the Developer Portal's homepage.
   - Click on the "My Account" dropdown, and you will find options to manage clients, create a new one, or logout.

5. Create a New Client:
   - Choose the option to create a new client from the "Manage Clients" page.

6. Submit and Obtain Client ID and Secret:
   - After submitting the required information, a newly provisioned client ID and client secret will be generated and displayed on the "Manage Clients" page.

Now you have successfully generated a client ID and client secret for your Domo instance. These credentials will be used in the component's OAuth connection.

| Input         | Comments                                            | Default |
| ------------- | --------------------------------------------------- | ------- |
| Client ID     | Client Identifier of your Domo app for the API      |         |
| Client Secret | Client Secret of your Domo app for the API          |         |
| Scopes        | Space separated OAuth permission scopes for the API |         |

## Actions

### Abort Stream Execution

If needed during an execution, aborts an entire Stream execution.

| Input        | Comments                                                                                                                               | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                        |         |
| Stream ID    | The ID of the Stream of data being imported into a DataSet.                                                                            |         |
| Execution ID | The ID of the Stream execution within the Stream, if no Stream execution ID is provided, the current Stream execution will be aborted. |         |

### Add Attachment

Add a multipart form file to a task item as an attachment.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| Project ID | The ID of the project. |         |
| List ID    | The ID of the list.    |         |
| Task ID    | The ID of the task.    |         |

### Add User To Group

Add user to a group in your Domo instance.

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Group ID   | The ID of the group. |         |
| User ID    | The ID of the user.  |         |

### Commit Stream Execution

Commits stream execution to import combined set of data parts that have been successfully uploaded.

| Input        | Comments                                                    | Default |
| ------------ | ----------------------------------------------------------- | ------- |
| Connection   |                                                             |         |
| Stream ID    | The ID of the Stream of data being imported into a DataSet. |         |
| Execution ID | The ID of the Stream execution within the Stream            |         |

### Create Account

When creating an Account, you must specify the Account Type properties. The Account Type properties are different, depending on the type of Account you are trying to create.

| Input           | Comments | Default |
| --------------- | -------- | ------- |
| Connection      |          |         |
| Name            |          |         |
| ID              |          |         |
| Password        |          |         |
| Authenticate By |          |         |
| URL             |          |         |
| Username        |          |         |

### Create Data Set

Creates a new DataSet in your Domo instance. Once the DataSet has been created, data can then be imported into the DataSet.

| Input       | Comments                             | Default |
| ----------- | ------------------------------------ | ------- |
| Connection  |                                      |         |
| Name        | Name of the DataSet to create        |         |
| Description | Description of the DataSet to create |         |
| Rows        |                                      |         |
| Columns     | Array of columns in the DataSet      |         |

### Create Group

Creates a new group in your Domo instance.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| Name       | The name of the group. |         |

### Create List

Creates a new list within the given project id.

| Input      | Comments                                                                                                                                                                                                                                       | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                                                                |         |
| Name       | The name of the list.                                                                                                                                                                                                                          |         |
| Type       | The type of the list.                                                                                                                                                                                                                          |         |
| Index      | The ordered index of the list within the project. Setting this property will re-order other lists in the project to maintain sequential order. Leaving this property blank will default the index to 1 and shift the index of all other lists. |         |
| Project ID | The ID of the project.                                                                                                                                                                                                                         |         |

### Create Page

Creates a new page in your Domo instance.

| Input      | Comments                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                         |         |
| Name       | The name of the page.                                                                                   |         |
| Parent ID  | If provided, the page will be created as a subpage to the page provided                                 |         |
| Locked     | will restrict other users the ability to make edits to page or its content - the default value is false |         |
| Card ID    | The ID of the card to add to the page                                                                   |         |
| User ID    | The ID of the user that will be given access to view the page                                           |         |
| Group ID   | The ID of the group that will be given access to view the page                                          |         |

### Create Project

Create a new project in your Domo instance

| Input       | Comments                                                                    | Default |
| ----------- | --------------------------------------------------------------------------- | ------- |
| Connection  |                                                                             |         |
| Members     | Array of user ID's that will be assigned as members of the project          |         |
| Name        | The name of the project.                                                    |         |
| Public      | Whether or not the project should be publicly available to other Domo users | true    |
| Description | The description of the project.                                             |         |
| Due Date    | The due date of the project                                                 |         |
| Member ID   | Body member                                                                 |         |
| Public Body |                                                                             |         |
| Name        | Body name                                                                   |         |

### Create Stream

When creating a Stream, specify the DataSet properties (name and description) and as a convenience, the create Stream API will create a DataSet for you.

| Input          | Comments                                        | Default |
| -------------- | ----------------------------------------------- | ------- |
| Connection     |                                                 |         |
| DataSet object | The DataSet object associated with this Stream. |         |
| Update Method  | The data import behavior.                       |         |
| Name           |                                                 |         |
| Description    |                                                 |         |
| Columns        |                                                 |         |
| Update Method  | Update method for body.                         |         |

### Create Stream Execution

When you’re ready to upload data to your DataSet via a Stream, you first tell Domo that you’re ready to start sending data by creating an Execution.

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection |                       |         |
| Stream ID  | The ID of the Stream. |         |

### Create Task

Add a task to a project list.

| Input        | Comments                                                                                                                                                                                                                                         | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection   |                                                                                                                                                                                                                                                  |         |
| Project ID   | The ID of the project that the task belongs to.                                                                                                                                                                                                  |         |
| List ID      | The ID of the list within a project that the task belongs to.                                                                                                                                                                                    |         |
| Task Name    | The name of the task.                                                                                                                                                                                                                            |         |
| Contributors | An array of user IDs that are assigned as contributors to the task.                                                                                                                                                                              |         |
| Description  | An optional description of the task.                                                                                                                                                                                                             |         |
| Due Date     | The date the task is expected to be completed.                                                                                                                                                                                                   |         |
| Owned By     | The ID of the Domo user that owns the task.                                                                                                                                                                                                      |         |
| Priority     | Priority of task within a list. Setting this property will impact the index of other tasks in the list to maintain sequential order. If not provided the priority will default to 1 and the index of all the other tasks in the list will shift. |         |
| Tags         | An array of tags that have been assigned to the task.                                                                                                                                                                                            |         |
| Task Object  | The request body accepts a task object.                                                                                                                                                                                                          |         |

### Create User

Creates a new user in your Domo instance.

| Input           | Comments                                                                        | Default |
| --------------- | ------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                 |         |
| Email           | User's primary email used in profile.                                           |         |
| Name            |                                                                                 |         |
| Role            | The role of the user created.                                                   | Admin   |
| Alternate Email | User's secondary email in profile.                                              |         |
| Employee Number | Employee number within company.                                                 |         |
| Locale          | Locale used to display to user the system settings throughout Domo application. |         |
| Location        | Free text that can be used to define office location.                           |         |
| Phone           | Primary phone number of user.                                                   |         |
| Send Invite     | Send an email invite to created user.                                           |         |
| Timezone        | Time zone used to display to user the system times throughout Domo application. |         |
| Title           | User's job title.                                                               |         |
| User Body       |                                                                                 |         |

### Delete Account

Deletes an Account from your Domo instance.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection |                                  |         |
| Account ID | The ID of the account to delete. |         |

### Delete Attachment

Permanently deletes an attachment from your task.

| Input         | Comments                                              | Default |
| ------------- | ----------------------------------------------------- | ------- |
| Connection    |                                                       |         |
| Project ID    | The ID of the project that the attachment belongs to. |         |
| Task ID       | The ID of the task that the attachment belongs to.    |         |
| Attachment ID | The ID of the attachment.                             |         |

### Delete Data Set

Permanently deletes a DataSet from your Domo instance. This can be done for all DataSets, not just those created through the API.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| DataSet ID | The ID of the DataSet. |         |

### Delete Group

Permanently deletes a group from your Domo instance.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection |                                |         |
| Group ID   | The ID of the group to delete. |         |

### Delete List

Permanently deletes a list from your Domo instance.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| Project ID | The ID of the project. |         |
| List ID    | The ID of the list.    |         |

### Delete Page

Permanently deletes a page from your Domo instance.

| Input      | Comments            | Default |
| ---------- | ------------------- | ------- |
| Connection |                     |         |
| Page ID    | The ID of the page. |         |

### Delete Project

Permanently deletes a project from your Domo instance.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| Project ID | The ID of the project. |         |

### Delete Stream

Deletes a Stream from your Domo instance. This does not a delete the associated DataSet.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection |                                 |         |
| Stream ID  | The ID of the Stream to delete. |         |

### Delete User

Permanently deletes a user from your Domo instance.

| Input      | Comments            | Default |
| ---------- | ------------------- | ------- |
| Connection |                     |         |
| User ID    | The ID of the user. |         |

### Download Attachment

Downloads an individual attachment given an attachment id.

| Input         | Comments                  | Default |
| ------------- | ------------------------- | ------- |
| Connection    |                           |         |
| List ID       | The ID of the list.       |         |
| Project ID    | The ID of the project.    |         |
| Task ID       | The ID of the task.       |         |
| Attachment ID | The ID of the attachment. |         |

### Export Data From DataSet

Export data from a DataSet in your Domo instance.

| Input          | Comments                          | Default |
| -------------- | --------------------------------- | ------- |
| Connection     |                                   |         |
| File Name      | The filename of the exported csv. |         |
| Include Header | Include table header.             |         |

### Get Accounts

Retrieve the details of an account type. This includes information on the properties required to create an Account of this type.

| Input           | Comments                    | Default |
| --------------- | --------------------------- | ------- |
| Connection      |                             |         |
| Account Type ID | The ID of the account type. |         |

### Get Activity Log Entries

Retrieves activity log entries

| Input      | Comments                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                    |         |
| Start      | The start time(milliseconds) of when you want to receive log events.               |         |
| End        | The end time(milliseconds) of when you want to receive log events.                 |         |
| Limit      | The maximum number of events you want to retrieve(default is 50, maximum of 1000). |         |
| Offset     | The offset location of events you retrieve(default is 0).                          |         |
| User       | The Id of the user.                                                                |         |

### Get Data Set

Retrieves the details of an existing DataSet.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| DataSet ID | The ID of the DataSet. |         |

### Get Group

Retrieves the details of an existing group.

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Group ID   | The ID of the group. |         |

### Get List

Retrieves the details of an individual list given a project id and a list id.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| Project ID | The ID of the project. |         |
| List ID    | The ID of the list.    |         |

### Get List Of Attachments

Retrieve details about all of the attachments belonging to a particular task.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| Project ID | The ID of the project. |         |
| List ID    | The ID of the list.    |         |
| Task ID    | The ID of the task.    |         |

### Get Page

Retrieves the details of an existing page.

| Input      | Comments            | Default |
| ---------- | ------------------- | ------- |
| Connection |                     |         |
| Page ID    | The ID of the page. |         |

### Get Project

Retrieves the details of an individual existing project given a project id. Use the special project ID me to return your personal project.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| Project ID | The ID of the project. |         |

### Get Project Members

Retrieves a list of ids of the users that are members of the given project id.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| Project ID | The ID of the project. |         |

### Get Stream

Retrieves the details of an existing stream.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Stream ID  | The id of the stream.                                                                 |         |
| Fields     | Return desired fields: {all} or {id, dataset, updateMethod, createdAt, or modifiedAt} |         |

### Get Stream Execution

Import data into a DataSet in your Domo instance. This request will replace the data currently in the DataSet.

| Input        | Comments                                                    | Default |
| ------------ | ----------------------------------------------------------- | ------- |
| Connection   |                                                             |         |
| Stream ID    | The ID of the Stream of data being imported into a DataSet. |         |
| Execution ID | The ID of the Stream execution within the Stream.           |         |

### Get Task

Retrieves an individual task from a given project id and list id.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| List ID    | The ID of the list.    |         |
| Project ID | The ID of the project. |         |
| Task ID    | The ID of the task.    |         |

### Get User

Retrieves the details of an existing user.

| Input      | Comments            | Default |
| ---------- | ------------------- | ------- |
| Connection |                     |         |
| User ID    | The ID of the user. |         |

### Import Data Into DataSet

Import data into a DataSet in your Domo instance. This request will replace the data currently in the DataSet.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| DataSet ID | The ID of the DataSet. |         |
| CSV Body   |                        |         |

### List Accounts

Get a list of all Accounts for which the user has permissions.

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                         |         |
| Limit      | The number of Accounts to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of Accounts to begin the list of Accounts within the response.               |         |

### List DataSets

Get a list of all DataSets in your Domo instance.

| Input      | Comments                                                                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                      |         |
| Limit      | The amount of DataSets to return in the list. The default is 50 and the maximum is 50.                                                               |         |
| Name Like  | If included, will limit the list of DataSets to those with names that contain the string passed in. nameLike is case insensitive.                    |         |
| Offset     | The offset of the DataSet ID to begin list of users within the response.                                                                             |         |
| Sort       | The DataSet field to sort by. Fields prefixed with a negative sign reverses the sort (i.e. '-name' does a reverse sort by the name of the DataSets). |         |

### List Groups

Get a list of all groups in your Domo instance.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Limit      | The amount of groups to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the group ID to begin list of groups within the response.               |         |

### List Pages

Get a list of all pages in your Domo instance.

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                      |         |
| Limit      | The amount of pages to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the page ID to begin list of pages within the response.                |         |

### List Project Lists

Retrieves all lists available within a given project id.

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| Project ID | The ID of the project. |         |

### List Project List Tasks

Retrieves all tasks from a given project id and list id.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Project ID | The ID of the project.                                                                |         |
| List ID    | The ID of the list.                                                                   |         |
| Limit      | The number of records to offset from the beginning of the result list (defaults to 0) |         |
| Offset     | The maximum amount of results to return (defaults to 10 with a maximum of 50)         |         |

### List Projects

Retrieves a list of all projects that the client scope has access to.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Stream Execution

Returns all Stream Execution objects that meet argument criteria from original request.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Stream ID  | The ID of the Stream                                                                  |         |
| Limit      | The amount of Stream to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the Stream ID to begin list of users within the response.               |         |

### List Streams

Get a list of all Streams for which the user has view permissions.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Limit      | The amount of Stream to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the Stream ID to begin list of users within the response.               |         |

### List Users

Get a list of all users in your Domo instance.

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                      |         |
| Limit      | The amount of users to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the user ID to begin list of users within the response.                |         |

### List Users In Group

List the users in a group in your Domo instance.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Group ID   | The ID of the group.                                                                  |         |
| Limit      | The amount of groups to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the group ID to begin list of groups within the response.               |         |

### Query Data Set

Queries the data in an existing Domo DataSet

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| DataSet ID | The ID of the DataSet.    |         |
| SQL        | The SQL query to execute. |         |

### Raw Request

Send raw HTTP request to Domo.

| Input                   | Comments                                                                                                                            | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                     |         |
| URL                     | This is the URL to call.                                                                                                            |         |
| Method                  | The HTTP method to use.                                                                                                             |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                           |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                    |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2. |         |
| Header                  | A list of headers to send with the request.                                                                                         |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                            | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                 |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                    | false   |

### Remove User From Group

Remove a user from a group in your Domo instance.

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Group ID   | The ID of the group. |         |
| User ID    | The ID of the user.  |         |

### Search Stream

Returns all Stream objects that meet argument criteria from original request.

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                               |         |
| Qualifiers | The search qualifiers to search by available qualifiers: dataSource.id or dataSource.owner.id |         |
| Fields     | Return desired fields: {all} or {id, dataset, updateMethod, createdAt, or modifiedAt}         |         |

### Share Account

Share an Account with a User.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| User       | The User to share the Account with. |         |
| Account ID | The ID of the Account.              |         |

### Update Account

Updates the specified Account’s metadata as well as the Account’s Type properties.

| Input               | Comments                         | Default |
| ------------------- | -------------------------------- | ------- |
| Connection          |                                  |         |
| Account ID          | The ID of the account to update. |         |
| Update Account Body |                                  |         |

### Update Data Set

Updates the specified DataSet’s metadata by providing values to parameters passed.

| Input               | Comments               | Default |
| ------------------- | ---------------------- | ------- |
| Connection          |                        |         |
| DataSet ID          | The ID of the DataSet. |         |
| Update DataSet Body |                        |         |

### Update Group

Updates the specified group by providing values to parameters passed. Any parameter left out of the request will cause the specific group’s attribute to remain unchanged.

| Input             | Comments             | Default |
| ----------------- | -------------------- | ------- |
| Connection        |                      |         |
| Group ID          | The ID of the group. |         |
| Update Group Body |                      |         |

### Update List

Update the details of a list given an existing project id and list id.

| Input            | Comments                                                                                                                                                         | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                  |         |
| List ID          | The ID of the list.                                                                                                                                              |         |
| Project ID       | The ID of the project.                                                                                                                                           |         |
| Index            | The updated index of the list within the project. Updating the index of a list may also change the order of the other lists in the project to remain sequential. |         |
| Name             | The updated name of the list.                                                                                                                                    |         |
| Type             | The type of the list.                                                                                                                                            |         |
| Update List Body |                                                                                                                                                                  |         |

### Update Page

Updates the specified page by providing values to parameters passed. Any parameter left out of the request will cause the specific page’s attribute to remain unchanged.

| Input            | Comments            | Default |
| ---------------- | ------------------- | ------- |
| Connection       |                     |         |
| Page ID          | The ID of the page. |         |
| Update Page Body |                     |         |

### Update Project

Updates attributes of an existing project in your Domo instance. The following properties are read-only and cannot be updated with this request:id members createdBy createdDate

| Input               | Comments                                                                | Default |
| ------------------- | ----------------------------------------------------------------------- | ------- |
| Connection          |                                                                         |         |
| Project ID          | The ID of the project.                                                  |         |
| Update Project Body |                                                                         |         |
| Description         | Updates the description of the project.                                 |         |
| Due Date            | Updates the due date of the project.                                    |         |
| Name                | Updates the name of the project.                                        |         |
| Public              | Updates whether or not the project is publicly available to Domo users. |         |

### Update Project Members

Update the members of a given project id.

| Input                       | Comments               | Default |
| --------------------------- | ---------------------- | ------- |
| Connection                  |                        |         |
| Project ID                  | The ID of the project. |         |
| Update Project Members Body |                        |         |

### Update Stream

Updates the specified Stream’s metadata by providing values to parameters passed.

| Input              | Comments                        | Default |
| ------------------ | ------------------------------- | ------- |
| Connection         |                                 |         |
| Stream ID          | The ID of the stream to update. |         |
| Update Method      | The data import behavior.       |         |
| Update Method Body |                                 |         |

### Update Task

Update the details of a task given an existing project id, list id, and task id.

| Input            | Comments                                                                                                                                                                                                                                         | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection       |                                                                                                                                                                                                                                                  |         |
| Task ID          | The ID of the task.                                                                                                                                                                                                                              |         |
| List ID          | The ID of the list.                                                                                                                                                                                                                              |         |
| Project ID       | The ID of the project.                                                                                                                                                                                                                           |         |
| Contributors     | An array of user IDs that are assigned as contributors to the task.                                                                                                                                                                              |         |
| Description      | Description of the DataSet to create                                                                                                                                                                                                             |         |
| Due Date         | The due date of the project                                                                                                                                                                                                                      |         |
| Owned By         | The ID of the Domo user that owns the task.                                                                                                                                                                                                      |         |
| Priority         | Priority of task within a list. Setting this property will impact the index of other tasks in the list to maintain sequential order. If not provided the priority will default to 1 and the index of all the other tasks in the list will shift. |         |
| Tags             | An array of tags that have been assigned to the task.                                                                                                                                                                                            |         |
| Task Name        | The name of the task.                                                                                                                                                                                                                            |         |
| Update Task Body |                                                                                                                                                                                                                                                  |         |

### Update User

Updates the specified user by providing values to parameters passed. Any parameter left out of the request will cause the specific user’s attribute to remain unchanged.

| Input            | Comments                                                                        | Default |
| ---------------- | ------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                 |         |
| User ID          | The ID of the user.                                                             |         |
| Email            | User's primary email used in profile.                                           |         |
| Name             | User's full name                                                                |         |
| Role             | The system role of the user                                                     | Admin   |
| Alternate Email  | User's secondary email in profile.                                              |         |
| Employee Number  | Employee number within company.                                                 |         |
| Locale           | Locale used to display to user the system settings throughout Domo application. |         |
| Location         | Free text that can be used to define office location.                           |         |
| Phone            | Primary phone number of user.                                                   |         |
| Roled            | The ID of the custom or system role of the user.                                |         |
| Timezone         | Time zone used to display to user the system times throughout Domo application. |         |
| Title            | User's job title.                                                               |         |
| Update User Body |                                                                                 |         |

### Upload Data Part

Creates a data part within the Stream execution to upload chunks of rows to the DataSet. The calling client should keep track of parts and order them accordingly in an increasing sequence. If a part upload fails, retry the upload as all parts must be present before committing the stream execution.

| Input        | Comments                                                                                   | Default |
| ------------ | ------------------------------------------------------------------------------------------ | ------- |
| Connection   |                                                                                            |         |
| Stream ID    | The ID of the Stream of data being imported into a DataSet.                                |         |
| Execution ID | The ID of the Stream execution within the Stream.                                          |         |
| Part ID      | The ID of the data part being used to upload a subset of data within the Stream execution. |         |
