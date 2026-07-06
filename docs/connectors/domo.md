---
title: Domo Connector
sidebar_label: Domo
description: Manage datasets, streams, users, groups, pages, and projects in Domo.
---

![Domo](./assets/domo.png#connector-icon)
Manage datasets, streams, users, groups, pages, and projects in Domo.

## Connections

### OAuth 2.0 Client Credentials {#oauth}

Authenticate against the Domo API using OAuth 2.0 client credentials.

Create a connection of type **OAuth 2.0 Client Credentials** to authenticate with the Domo API.

To [generate a Client ID and Client Secret](https://developer.domo.com/portal/8ba9aedad3679-ap-is#step-1-create-client-id-and-secret), follow the steps below.

#### Prerequisites

- A Domo account with access to the Developer Portal
- The Domo instance name (the part of the URL preceding `domo.com` -- for example, if the Domo URL is `acmecompany.domo.com`, the instance name is `acmecompany`)

#### Setup Steps

1. Navigate to the [Domo Developer Portal login page](https://developer.domo.com/login)
2. Enter the Domo instance name and user credentials when prompted
3. After logging in, click on the **My Account** dropdown and select **Manage Clients**
4. Click **Create a New Client** from the **Manage Clients** page
5. Submit the required information -- a newly provisioned **Client ID** and **Client Secret** will be generated and displayed on the **Manage Clients** page
6. Copy the **Client ID** and **Client Secret** values

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** obtained from the Developer Portal
- For **Scopes**, enter the required OAuth permission scopes separated by spaces (e.g., `data workflow audit buzz user account dashboard`)
  - Refer to the [Domo API documentation](https://developer.domo.com/portal/8ba9aedad3679-ap-is) for available scope information

| Input         | Comments                                                      | Default |
| ------------- | ------------------------------------------------------------- | ------- |
| Client ID     | The Client Identifier of the Domo app for API authentication. |         |
| Client Secret | The Client Secret of the Domo app for API authentication.     |         |
| Scopes        | The space-separated OAuth permission scopes for the API.      |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for new and updated records in a selected Domo resource type on a configured schedule.

| Input                | Comments                                                                                                                                       | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Domo connection to use.                                                                                                                    |         |
| Resource Type        | The type of resource to monitor for changes.                                                                                                   |         |
| Show New Records     | When true, includes newly created records in the results.                                                                                      | true    |
| Show Updated Records | When true, includes updated records in the results. Only available for resource types that support update tracking (DataSets, Streams, Users). | true    |

## Actions

### Abort Stream Execution {#abortstreamexecution}

Aborts an entire stream execution in progress.

| Input        | Comments                                                                                                       | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Domo connection to use.                                                                                    |         |
| Stream ID    | The ID of the Stream of data being imported into a DataSet.                                                    |         |
| Execution ID | The unique identifier for the Stream execution. If not provided, the current Stream execution will be aborted. |         |

### Add Attachment {#addattachment}

Adds a multipart form file to a task item as an attachment.

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                               |         |
| Project ID | The unique identifier for the project.                    |         |
| List ID    | The unique identifier for the project list.               |         |
| Task ID    | The unique identifier for the task within a project list. |         |

### Add User To Group {#addusertogroup}

Adds a user to a group in a Domo instance.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Domo connection to use.              |         |
| Group ID   | The unique identifier for the group.     |         |
| User ID    | The unique identifier for the Domo user. |         |

### Commit Stream Execution {#commitstreamexecution}

Commits a stream execution to import the combined set of data parts that have been successfully uploaded.

| Input        | Comments                                                    | Default |
| ------------ | ----------------------------------------------------------- | ------- |
| Connection   | The Domo connection to use.                                 |         |
| Stream ID    | The ID of the Stream of data being imported into a DataSet. |         |
| Execution ID | The ID of the Stream execution within the Stream            |         |

### Create Account {#createaccount}

Creates a new account in a Domo instance with the specified account type properties.

| Input           | Comments                                                             | Default |
| --------------- | -------------------------------------------------------------------- | ------- |
| Connection      | The Domo connection to use.                                          |         |
| Name            | The display name for the resource.                                   |         |
| ID              | The unique identifier for the resource.                              |         |
| Password        | The password used for account authentication.                        |         |
| Authenticate By | The authentication method used for the account (e.g., basic, token). |         |
| URL             | The URL of the account endpoint.                                     |         |
| Username        | The username for account authentication.                             |         |

### Create Data Set {#createdataset}

Creates a new DataSet in a Domo instance.

| Input       | Comments                                                                                          | Default |
| ----------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Domo connection to use.                                                                       |         |
| Name        | Name of the DataSet to create                                                                     |         |
| Description | A summary of the DataSet contents and purpose.                                                    |         |
| Rows        | The total number of rows to include in the DataSet.                                               |         |
| Columns     | A JSON array defining the column schema for the DataSet, including type and name for each column. |         |

### Create Group {#creategroup}

Creates a new group in a Domo instance.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Domo connection to use. |         |
| Name       | The name of the group.      |         |

### Create List {#createlist}

Creates a new list within a given project.

| Input      | Comments                                                                                                                                                          | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                                                                                                                                       |         |
| Name       | The name of the list.                                                                                                                                             |         |
| Type       | The workflow status category for the list (e.g., TODO, WORKING_ON, COMPLETED).                                                                                    |         |
| Index      | The ordered position of the list within the project. Setting this property will re-order other lists to maintain sequential order. Defaults to 1 if not provided. |         |
| Project ID | The unique identifier for the project.                                                                                                                            |         |

### Create Page {#createpage}

Creates a new page in a Domo instance.

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                                                                   |         |
| Name       | The name of the page.                                                                         |         |
| Parent ID  | The unique identifier of the parent page. If provided, the page will be created as a subpage. |         |
| Locked     | When true, restricts other users the ability to make edits to page or its content.            |         |
| Card ID    | The ID of the card to add to the page.                                                        |         |
| User ID    | The ID of the user that will be given access to view the page.                                |         |
| Group ID   | The ID of the group that will be given access to view the page.                               |         |

### Create Project {#createproject}

Creates a new project in a Domo instance.

| Input       | Comments                                                               | Default |
| ----------- | ---------------------------------------------------------------------- | ------- |
| Connection  | The Domo connection to use.                                            |         |
| Members     | Array of user IDs that will be assigned as members of the project.     |         |
| Name        | The name of the project.                                               |         |
| Public      | When true, the project will be publicly available to other Domo users. | true    |
| Description | The description of the project.                                        |         |
| Due Date    | The due date for the project. Format: ISO 8601.                        |         |
| Member ID   | User IDs of members to include in the project.                         |         |
| Public Body | When true, makes the resource publicly visible to other Domo users.    |         |
| Name        | Body name                                                              |         |

### Create Stream {#createstream}

Creates a new stream and its associated DataSet in Domo.

| Input          | Comments                                                                                          | Default |
| -------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Domo connection to use.                                                                       |         |
| DataSet Object | The DataSet object associated with this Stream.                                                   |         |
| Update Method  | The data import behavior.                                                                         |         |
| Name           | The display name for the resource.                                                                |         |
| Description    | A summary of the stream DataSet contents and purpose.                                             |         |
| Columns        | The column schema definition for the stream DataSet, specified as a JSON array of column objects. |         |
| Update Method  | Update method for body.                                                                           |         |

### Create Stream Execution {#createstreamexecution}

Creates a new stream execution to begin uploading data to a DataSet via a stream.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Domo connection to use. |         |
| Stream ID  | The ID of the Stream.       |         |

### Create Task {#createtask}

Adds a task to a project list.

| Input        | Comments                                                                                                                                                    | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Domo connection to use.                                                                                                                                 |         |
| Project ID   | The ID of the project that the task belongs to.                                                                                                             |         |
| List ID      | The ID of the list within a project that the task belongs to.                                                                                               |         |
| Task Name    | A descriptive label for the task within the project list.                                                                                                   |         |
| Task Details | Additional task attributes.                                                                                                                                 |         |
| Contributors | A JSON array of user IDs assigned as contributors to the task.                                                                                              |         |
| Description  | An optional description of the task.                                                                                                                        |         |
| Due Date     | The date the task is expected to be completed.                                                                                                              |         |
| Owned By     | The unique identifier of the Domo user that owns the task.                                                                                                  |         |
| Priority     | The priority position of the task within the list. Setting this property re-orders other tasks to maintain sequential order. Defaults to 1 if not provided. |         |
| Tags         | A JSON array of tag labels to assign to the task for categorization.                                                                                        |         |
| Task Object  | The task object to create or update.                                                                                                                        |         |

### Create User {#createuser}

Creates a new user in a Domo instance.

| Input               | Comments                                                                                   | Default |
| ------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection          | The Domo connection to use.                                                                |         |
| Email               | The primary email address associated with the Domo user profile.                           |         |
| Role                | The permission level assigned to the user (Admin, Privileged, or Participant).             | Admin   |
| Name                | The display name for the resource.                                                         |         |
| Send Invite         | When true, sends an email invitation to the newly created user.                            |         |
| Contact Information | Additional user profile details.                                                           |         |
| Alternate Email     | The secondary email address associated with the Domo user profile.                         |         |
| Employee Number     | The employee identification number within the organization.                                |         |
| Locale              | The locale code used to display system settings throughout the Domo application.           |         |
| Location            | The office location or geographic area for the user profile.                               |         |
| Phone               | The primary phone number for the Domo user profile.                                        |         |
| Timezone            | The IANA timezone identifier used to display system times throughout the Domo application. |         |
| Title               | The job title for the Domo user profile.                                                   |         |
| User Body           | The user object to create.                                                                 |         |

### Delete Account {#deleteaccount}

Deletes an account from a Domo instance.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Domo connection to use.                 |         |
| Account ID | The unique identifier for the Domo account. |         |

### Delete Attachment {#deleteattachment}

Permanently deletes an attachment from a task.

| Input         | Comments                                              | Default |
| ------------- | ----------------------------------------------------- | ------- |
| Connection    | The Domo connection to use.                           |         |
| Project ID    | The ID of the project that the attachment belongs to. |         |
| Task ID       | The ID of the task that the attachment belongs to.    |         |
| Attachment ID | The unique identifier for the project attachment.     |         |

### Delete Data Set {#deletedataset}

Permanently deletes a DataSet from a Domo instance.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Domo connection to use.                 |         |
| DataSet ID | The unique identifier for the Domo DataSet. |         |

### Delete Group {#deletegroup}

Permanently deletes a group from a Domo instance.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Domo connection to use.    |         |
| Group ID   | The ID of the group to delete. |         |

### Delete List {#deletelist}

Permanently deletes a list from a Domo instance.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Domo connection to use.                 |         |
| Project ID | The unique identifier for the project.      |         |
| List ID    | The unique identifier for the project list. |         |

### Delete Page {#deletepage}

Permanently deletes a page from a Domo instance.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Domo connection to use.              |         |
| Page ID    | The unique identifier for the Domo page. |         |

### Delete Project {#deleteproject}

Permanently deletes a project from a Domo instance.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Domo connection to use.            |         |
| Project ID | The unique identifier for the project. |         |

### Delete Stream {#deletestream}

Deletes a stream from a Domo instance without deleting the associated DataSet.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Domo connection to use.     |         |
| Stream ID  | The ID of the Stream to delete. |         |

### Delete User {#deleteuser}

Permanently deletes a user from a Domo instance.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Domo connection to use.              |         |
| User ID    | The unique identifier for the Domo user. |         |

### Download Attachment {#downloadattachment}

Downloads an individual attachment by ID.

| Input         | Comments                                                  | Default |
| ------------- | --------------------------------------------------------- | ------- |
| Connection    | The Domo connection to use.                               |         |
| List ID       | The unique identifier for the project list.               |         |
| Project ID    | The unique identifier for the project.                    |         |
| Task ID       | The unique identifier for the task within a project list. |         |
| Attachment ID | The unique identifier for the project attachment.         |         |

### Export Data From DataSet {#exportdatafromdataset}

Exports data from a DataSet in a Domo instance.

| Input          | Comments                                       | Default |
| -------------- | ---------------------------------------------- | ------- |
| Connection     | The Domo connection to use.                    |         |
| DataSet ID     | The unique identifier for the Domo DataSet.    |         |
| File Name      | The output filename for the exported CSV data. |         |
| Include Header | When true, includes table header in export.    |         |

### Get Accounts {#getaccounts}

Retrieves the details of an account type.

| Input           | Comments                                         | Default |
| --------------- | ------------------------------------------------ | ------- |
| Connection      | The Domo connection to use.                      |         |
| Account Type ID | The unique identifier for the Domo account type. |         |

### Get Activity Log Entries {#getactivitylogentries}

Retrieves activity log entries.

| Input      | Comments                                                                  | Default |
| ---------- | ------------------------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                                               |         |
| Start      | The start time in milliseconds for the activity log query range.          |         |
| End        | The end time in milliseconds for the activity log query range.            |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.   | false   |
| User       | The unique identifier for the user to filter activity log entries by.     |         |
| Pagination | Page and page-size controls.                                              |         |
| Limit      | The maximum number of results to return (default is 50, maximum of 1000). |         |
| Offset     | The 0-based offset position to begin retrieving results from.             |         |

### Get Data Set {#getdataset}

Retrieves the details of an existing DataSet.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Domo connection to use.                 |         |
| DataSet ID | The unique identifier for the Domo DataSet. |         |

### Get Group {#getgroup}

Retrieves the details of an existing group.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Domo connection to use.          |         |
| Group ID   | The unique identifier for the group. |         |

### Get List {#getlist}

Retrieves the details of an individual list given a project id and a list id.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Domo connection to use.                 |         |
| Project ID | The unique identifier for the project.      |         |
| List ID    | The unique identifier for the project list. |         |

### Get List Of Attachments {#getlistofattachments}

Retrieves all attachments belonging to a particular task.

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                               |         |
| Project ID | The unique identifier for the project.                    |         |
| List ID    | The unique identifier for the project list.               |         |
| Task ID    | The unique identifier for the task within a project list. |         |

### Get Page {#getpage}

Retrieves the details of an existing page.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Domo connection to use.              |         |
| Page ID    | The unique identifier for the Domo page. |         |

### Get Project {#getproject}

Retrieves the details of an existing project by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Domo connection to use.            |         |
| Project ID | The unique identifier for the project. |         |

### Get Project Members {#getprojectmembers}

Retrieves the member user IDs for a given project.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Domo connection to use.            |         |
| Project ID | The unique identifier for the project. |         |

### Get Stream {#getstream}

Retrieves the details of an existing stream.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Domo connection to use.                                                                      |         |
| Stream ID  | The id of the stream.                                                                            |         |
| Fields     | The fields to include in the response: all, id, dataset, updateMethod, createdAt, or modifiedAt. |         |

### Get Stream Execution {#getstreamexecution}

Retrieves the details of an existing stream execution.

| Input        | Comments                                                    | Default |
| ------------ | ----------------------------------------------------------- | ------- |
| Connection   | The Domo connection to use.                                 |         |
| Stream ID    | The ID of the Stream of data being imported into a DataSet. |         |
| Execution ID | The ID of the Stream execution within the Stream.           |         |

### Get Task {#gettask}

Retrieves an individual task from a given project id and list id.

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                               |         |
| List ID    | The unique identifier for the project list.               |         |
| Project ID | The unique identifier for the project.                    |         |
| Task ID    | The unique identifier for the task within a project list. |         |

### Get User {#getuser}

Retrieves the details of an existing user.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Domo connection to use.              |         |
| User ID    | The unique identifier for the Domo user. |         |

### Import Data Into DataSet {#importdataintodataset}

Imports data into a DataSet in a Domo instance, replacing the existing data.

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                        |         |
| DataSet ID | The unique identifier for the Domo DataSet.        |         |
| CSV Body   | The CSV-formatted data to import into the DataSet. |         |

### List Accounts {#listaccounts}

Lists all accounts the authenticated user has permissions for.

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                                                             |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                 | false   |
| Pagination | Page and page-size controls.                                                            |         |
| Limit      | The number of Accounts to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of Accounts to begin the list of Accounts within the response.               |         |

### List DataSets {#listdatasets}

Lists all DataSets in a Domo instance.

| Input      | Comments                                                                                       | Default |
| ---------- | ---------------------------------------------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                                                                    |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                        | false   |
| Name Like  | A case-insensitive filter that limits the list to DataSets with names containing this string.  |         |
| Sort       | The DataSet field to sort by. Prefix with a negative sign to reverse the sort (e.g., '-name'). |         |
| Pagination | Page and page-size controls.                                                                   |         |
| Limit      | The amount of DataSets to return in the list. The default is 50 and the maximum is 50.         |         |
| Offset     | The offset of the DataSet ID to begin list of users within the response.                       |         |

### List Groups {#listgroups}

Lists all groups in a Domo instance.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                                                           |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.               | false   |
| Pagination | Page and page-size controls.                                                          |         |
| Limit      | The amount of groups to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the group ID to begin list of groups within the response.               |         |

### List Pages {#listpages}

Lists all pages in a Domo instance.

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| Connection | The Domo connection to use.                                                          |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.              | false   |
| Pagination | Page and page-size controls.                                                         |         |
| Limit      | The amount of pages to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the page ID to begin list of pages within the response.                |         |

### List Project Lists {#listprojectlists}

Retrieves all lists available within a given project.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Domo connection to use.            |         |
| Project ID | The unique identifier for the project. |         |

### List Project List Tasks {#listprojectlisttasks}

Retrieves all tasks from a given project list.

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| Connection | The Domo connection to use.                                                          |         |
| Project ID | The unique identifier for the project.                                               |         |
| List ID    | The unique identifier for the project list.                                          |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.              | false   |
| Pagination | Page and page-size controls.                                                         |         |
| Limit      | The maximum number of results to return (defaults to 10 with a maximum of 50).       |         |
| Offset     | The number of records to skip from the beginning of the result list (defaults to 0). |         |

### List Projects {#listprojects}

Retrieves a list of all accessible projects.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Domo connection to use. |         |

### List Stream Execution {#liststreamexecution}

Lists all stream executions that match the specified criteria.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                                                           |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.               | false   |
| Stream ID  | The ID of the Stream                                                                  |         |
| Pagination | Page and page-size controls.                                                          |         |
| Limit      | The amount of Stream to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the Stream ID to begin list of users within the response.               |         |

### List Streams {#liststreams}

Lists all streams the authenticated user has view permissions for.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                                                           |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.               | false   |
| Pagination | Page and page-size controls.                                                          |         |
| Limit      | The amount of Stream to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the Stream ID to begin list of users within the response.               |         |

### List Users {#listusers}

Lists all users in a Domo instance.

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| Connection | The Domo connection to use.                                                          |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.              | false   |
| Pagination | Page and page-size controls.                                                         |         |
| Limit      | The amount of users to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the user ID to begin list of users within the response.                |         |

### List Users In Group {#listusersingroup}

Lists the users in a group in a Domo instance.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection | The Domo connection to use.                                                           |         |
| Group ID   | The unique identifier for the group.                                                  |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.               | false   |
| Pagination | Page and page-size controls.                                                          |         |
| Limit      | The amount of groups to return in the list. The default is 50 and the maximum is 500. |         |
| Offset     | The offset of the group ID to begin list of groups within the response.               |         |

### Query Data Set {#querydataset}

Queries the data in an existing Domo DataSet.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Domo connection to use.                 |         |
| DataSet ID | The unique identifier for the Domo DataSet. |         |
| SQL        | The SQL query to run against the DataSet.   |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the Domo API.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Domo connection to use.                                                                                                                                                                      |         |
| URL                     | This is the URL to call.                                                                                                                                                                         |         |
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

### Remove User From Group {#removeuserfromgroup}

Removes a user from a group in a Domo instance.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Domo connection to use.              |         |
| Group ID   | The unique identifier for the group.     |         |
| User ID    | The unique identifier for the Domo user. |         |

### Search Stream {#searchstream}

Searches for streams that match the specified criteria.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Domo connection to use.                                                                      |         |
| Qualifiers | The search qualifier expression to filter streams (e.g., dataSource.id or dataSource.owner.id).  |         |
| Fields     | The fields to include in the response: all, id, dataset, updateMethod, createdAt, or modifiedAt. |         |

### Share Account {#shareaccount}

Shares an account with one or more users.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Domo connection to use.         |         |
| User       | The User to share the Account with. |         |
| Account ID | The ID of the Account.              |         |

### Update Account {#updateaccount}

Updates the specified account's metadata and type properties.

| Input               | Comments                         | Default |
| ------------------- | -------------------------------- | ------- |
| Connection          | The Domo connection to use.      |         |
| Account ID          | The ID of the account to update. |         |
| Update Account Body | The account object to update.    |         |

### Update Data Set {#updatedataset}

Updates the specified DataSet's metadata.

| Input               | Comments                                    | Default |
| ------------------- | ------------------------------------------- | ------- |
| Connection          | The Domo connection to use.                 |         |
| DataSet ID          | The unique identifier for the Domo DataSet. |         |
| Update DataSet Body | The DataSet object to update.               |         |

### Update Group {#updategroup}

Updates the specified group's attributes in a Domo instance.

| Input             | Comments                             | Default |
| ----------------- | ------------------------------------ | ------- |
| Connection        | The Domo connection to use.          |         |
| Group ID          | The unique identifier for the group. |         |
| Update Group Body | The group object to update.          |         |

### Update List {#updatelist}

Updates the details of a list within a project.

| Input            | Comments                                                                                                                                                         | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Domo connection to use.                                                                                                                                      |         |
| List ID          | The unique identifier for the project list.                                                                                                                      |         |
| Project ID       | The unique identifier for the project.                                                                                                                           |         |
| Index            | The updated index of the list within the project. Updating the index of a list may also change the order of the other lists in the project to remain sequential. |         |
| Name             | The updated name of the list.                                                                                                                                    |         |
| Type             | The workflow status category for the list (e.g., TODO, WORKING_ON, COMPLETED).                                                                                   |         |
| Update List Body | The list object to update.                                                                                                                                       |         |

### Update Page {#updatepage}

Updates the specified page's attributes in a Domo instance.

| Input            | Comments                                 | Default |
| ---------------- | ---------------------------------------- | ------- |
| Connection       | The Domo connection to use.              |         |
| Page ID          | The unique identifier for the Domo page. |         |
| Update Page Body | The page object to update.               |         |

### Update Project {#updateproject}

Updates attributes of an existing project in a Domo instance.

| Input               | Comments                                                                | Default |
| ------------------- | ----------------------------------------------------------------------- | ------- |
| Connection          | The Domo connection to use.                                             |         |
| Project ID          | The unique identifier for the project.                                  |         |
| Project Details     | Project attributes to update.                                           |         |
| Description         | Updates the description of the project.                                 |         |
| Due Date            | Updates the due date of the project.                                    |         |
| Name                | Updates the name of the project.                                        |         |
| Public              | Updates whether or not the project is publicly available to Domo users. |         |
| Update Project Body | The project object to update.                                           |         |

### Update Project Members {#updateprojectmembers}

Updates the members of a given project.

| Input                       | Comments                                               | Default |
| --------------------------- | ------------------------------------------------------ | ------- |
| Connection                  | The Domo connection to use.                            |         |
| Project ID                  | The unique identifier for the project.                 |         |
| Update Project Members Body | Array of user IDs to assign as members of the project. |         |

### Update Stream {#updatestream}

Updates the specified stream's metadata.

| Input              | Comments                         | Default |
| ------------------ | -------------------------------- | ------- |
| Connection         | The Domo connection to use.      |         |
| Stream ID          | The ID of the stream to update.  |         |
| Update Method      | The data import behavior.        |         |
| Update Method Body | The update method configuration. |         |

### Update Task {#updatetask}

Updates the details of a task within a project list.

| Input            | Comments                                                                                                                                                    | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Domo connection to use.                                                                                                                                 |         |
| Task ID          | The unique identifier for the task within a project list.                                                                                                   |         |
| List ID          | The unique identifier for the project list.                                                                                                                 |         |
| Project ID       | The unique identifier for the project.                                                                                                                      |         |
| Task Name        | A descriptive label for the task within the project list.                                                                                                   |         |
| Task Details     | Additional task attributes.                                                                                                                                 |         |
| Description      | A summary of the DataSet contents and purpose.                                                                                                              |         |
| Contributors     | A JSON array of user IDs assigned as contributors to the task.                                                                                              |         |
| Due Date         | The due date for the project. Format: ISO 8601.                                                                                                             |         |
| Owned By         | The unique identifier of the Domo user that owns the task.                                                                                                  |         |
| Priority         | The priority position of the task within the list. Setting this property re-orders other tasks to maintain sequential order. Defaults to 1 if not provided. |         |
| Tags             | A JSON array of tag labels to assign to the task for categorization.                                                                                        |         |
| Update Task Body | The task object to update.                                                                                                                                  |         |

### Update User {#updateuser}

Updates the specified user's attributes in a Domo instance.

| Input               | Comments                                                                                   | Default |
| ------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection          | The Domo connection to use.                                                                |         |
| User ID             | The unique identifier for the Domo user.                                                   |         |
| Email               | The primary email address associated with the Domo user profile.                           |         |
| Name                | User's full name                                                                           |         |
| Role                | The system role of the user                                                                | Admin   |
| Role Id             | The unique identifier for the custom or system role assigned to the user.                  |         |
| Contact Information | Additional user profile details.                                                           |         |
| Alternate Email     | The secondary email address associated with the Domo user profile.                         |         |
| Employee Number     | The employee identification number within the organization.                                |         |
| Locale              | The locale code used to display system settings throughout the Domo application.           |         |
| Location            | The office location or geographic area for the user profile.                               |         |
| Phone               | The primary phone number for the Domo user profile.                                        |         |
| Timezone            | The IANA timezone identifier used to display system times throughout the Domo application. |         |
| Title               | The job title for the Domo user profile.                                                   |         |
| Update User Body    | The user object to update.                                                                 |         |

### Upload Data Part {#uploaddatapart}

Uploads a data part within a stream execution to add rows to the DataSet.

| Input        | Comments                                                                                   | Default |
| ------------ | ------------------------------------------------------------------------------------------ | ------- |
| Connection   | The Domo connection to use.                                                                |         |
| Stream ID    | The ID of the Stream of data being imported into a DataSet.                                |         |
| Execution ID | The ID of the Stream execution within the Stream.                                          |         |
| Part ID      | The ID of the data part being used to upload a subset of data within the Stream execution. |         |
