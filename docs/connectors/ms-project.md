---
title: Microsoft Project Connector
sidebar_label: Microsoft Project
description: Query reporting data from a Project Web App instance.
---

![Microsoft Project](./assets/ms-project.png#connector-icon)
Query reporting data from a Project Web App instance.

## Connections

### OAuth 2.0 {#oauth}

OAuth 2.0 Connectivity for Microsoft Project

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                 | Default                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Microsoft Project                                                                                                    | https://login.microsoftonline.com/common/oauth2/authorize |
| Token URL     | The OAuth 2.0 Token URL for Microsoft Project; replace `<pwaSite>` with the protocol and domain of the PWA Site. Example: https://example.sharepoint.com |                                                           |
| Client ID     | This value is obtained by creating a new app in Active Directory with the same tenant as your user with a Microsoft Project license                      |                                                           |
| Client Secret | This value can be generated inside your Active Directory application.                                                                                    |                                                           |
| PWA Site      | The Project Web App Sharepoint Site domain. This is the same value that is supplied for the resource argument of the Token URL.                          |                                                           |

## Triggers

### New and Updated Projects {#pollchangestrigger}

Checks for new and updated projects in Microsoft Project on a configured schedule.

| Input                | Comments                                                                           | Default |
| -------------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                    |         |
| Show New Records     | When true, newly created records are included in the trigger output.               | true    |
| Show Updated Records | When true, records updated after the last poll are included in the trigger output. | true    |

## Actions

### Check In Draft Project {#checkindraftproject}

Mark the status of an existing project to 'Checked In'

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Checkout Project {#checkoutproject}

Mark an existing project's status as 'Checked Out'

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Create Draft Assignment {#createdraftassignment}

Create a new assignment in a given draft product

| Input                 | Comments                                                              | Default |
| --------------------- | --------------------------------------------------------------------- | ------- |
| Connection            |                                                                       |         |
| Project GUID          | Provide a string value for the GUID                                   |         |
| Draft Task Id         | Provide a unique identifier for the draft task.                       |         |
| Resource Id           | Provide the unique identifier for the resource.                       |         |
| Assignment Start Date | Provide a valid date time value for the start date of the assignment  |         |
| Finish Date           | Provide a valid date time value for the finish date of the assignment |         |
| Notes                 | Provide a string value for notes.                                     |         |

### Create Draft Project Resources {#createdraftprojectresources}

Create a new Resource in an existing draft project

| Input        | Comments                                             | Default |
| ------------ | ---------------------------------------------------- | ------- |
| Connection   |                                                      |         |
| Project GUID | Provide a string value for the GUID                  |         |
| Notes        | Provide a string value for notes.                    |         |
| Email        | Provide a valid email address.                       |         |
| Account      | Provide the unique identifier of the account.        |         |
| Name         | Provide a string value for the name of the resource. |         |

### Create Draft Task {#createdrafttask}

Create a new task in a draft project

| Input           | Comments                                                        | Default |
| --------------- | --------------------------------------------------------------- | ------- |
| Connection      |                                                                 |         |
| Project GUID    | Provide a string value for the GUID                             |         |
| Task Name       | Provide a string value for the name of the task.                |         |
| Notes           | Provide a string value for notes.                               |         |
| Task Start Date | Provide a valid datetime value for the start date of a task.    |         |
| Parent Id       | Provide the unique identifier of the parent object.             |         |
| Finish Date     | Provide a valid datetime value for the finish date of the task. |         |

### Create Project {#createproject}

Create a new project

| Input               | Comments                                                                                             | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                      |         |
| Project Name        | Provide a string value for the name of the project. The name can NOT contain any special characters. |         |
| Project Description | Provide a string value for the description of the project.                                           |         |
| Project Start Date  | Provide a valid datetime value for the start date of the project.                                    |         |

### Delete Draft Task {#deletedrafttask}

Delete an existing task from a draft project

| Input         | Comments                                        | Default |
| ------------- | ----------------------------------------------- | ------- |
| Connection    |                                                 |         |
| Project GUID  | Provide a string value for the GUID             |         |
| Draft Task Id | Provide a unique identifier for the draft task. |         |

### Delete Project {#deleteproject}

Delete the contents and metadata of an existing project by Id

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Get Assignment {#getassignments}

Get the information and metadata of an assignment by Id

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Get Draft Task {#getdrafttask}

Get the information or metadata of a task inside a draft project

| Input         | Comments                                        | Default |
| ------------- | ----------------------------------------------- | ------- |
| Connection    |                                                 |         |
| Project GUID  | Provide a string value for the GUID             |         |
| Draft Task Id | Provide a unique identifier for the draft task. |         |

### Get Project {#getproject}

Get the information and metadata of a project by Id

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Get Project Resource {#getprojectresources}

Get the information and metadata of an existing Project Resource by Id

| Input        | Comments                                        | Default |
| ------------ | ----------------------------------------------- | ------- |
| Connection   |                                                 |         |
| Project GUID | Provide a string value for the GUID             |         |
| Resource Id  | Provide the unique identifier for the resource. |         |

### Get Task {#gettask}

Get the information and metadata of a task by Id

| Input        | Comments                                  | Default |
| ------------ | ----------------------------------------- | ------- |
| Connection   |                                           |         |
| Project GUID | Provide a string value for the GUID       |         |
| Task Id      | Provide a unique identifier for the task. |         |

### List Assignments {#listassignments}

List all the assignments in a given project

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                             |         |
| Project GUID | Provide a string value for the GUID                                                         |         |
| Page Size    | Provide an integer value for the maximum results returned per page when paginating results. |         |
| Page Number  | Provide an integer value for which page to return when paginating results.                  |         |

### List Draft Assignments {#listdraftassignments}

List all the assignments in a given draft project

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### list Draft Project Resources {#listdraftprojectresources}

List all resources in a draft project

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                             |         |
| Project GUID | Provide a string value for the GUID                                                         |         |
| Page Size    | Provide an integer value for the maximum results returned per page when paginating results. |         |
| Page Number  | Provide an integer value for which page to return when paginating results.                  |         |

### List Draft Tasks {#listdrafttasks}

List all tasks in a draft project

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                             |         |
| Project GUID | Provide a string value for the GUID                                                         |         |
| Page Size    | Provide an integer value for the maximum results returned per page when paginating results. |         |
| Page Number  | Provide an integer value for which page to return when paginating results.                  |         |

### list Project Resources {#listprojectresources}

List all resources in an existing project

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### List Projects {#listprojects}

List all the projects in a given sharepoint site

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                             |         |
| Query String | Provide a string value to query for a specific property.                                    |         |
| Page Size    | Provide an integer value for the maximum results returned per page when paginating results. |         |
| Page Number  | Provide an integer value for which page to return when paginating results.                  |         |

### List Tasks {#listtasks}

List all the tasks in a given project

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                             |         |
| Project GUID | Provide a string value for the GUID                                                         |         |
| Page Size    | Provide an integer value for the maximum results returned per page when paginating results. |         |
| Page Number  | Provide an integer value for which page to return when paginating results.                  |         |

### Publish Draft Project {#publishdraftproject}

Publish the draft of an existing project

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Microsoft Project

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                                             | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                                                                                      |         |
| URL                     | Input the path only (/ProjectServer/Projects(guid'9840c3b6-ac3d-ec11-bea0-00155d788e0a')), The base URL is already included ({pwaSite}/sites/pwa/\_api). For example, to connect to {pwaSite}/sites/pwa/\_api/ProjectServer/Projects(guid'9840c3b6-ac3d-ec11-bea0-00155d788e0a'), only /ProjectServer/Projects(guid'9840c3b6-ac3d-ec11-bea0-00155d788e0a') is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                                                                  |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                                                                        | false   |

### Remove Project {#removeproject}

Remove the contents and metadata of an existing project by Id

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Submit Product To Workflow {#submitproject}

Submit an existing project to a given workflow

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Update Draft {#updatedraft}

Update the draft of an existing project

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Verify Draft {#verifydraft}

Verify the draft of an existing project

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |
