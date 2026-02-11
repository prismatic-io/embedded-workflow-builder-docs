---
title: ClickUp Connector
sidebar_label: ClickUp
description: Use the ClickUp component to manage users, projects, and teams in your ClickUp workspace.
---

![ClickUp](./assets/click-up.png#connector-icon)
[ClickUp](https://clickup.com/) ClickUp is a CRM, collaboration, knowledge base, and project management tool.

Use the Clickup component to manage users, projects, and teams in your Clickup workspace.

## Connections

### ClickUp OAuth 2.0 {#clickupoauth2connection}

ClickUp OAuth 2.0

Oauth Configuration Instructions

To make API requests of Clickup on behalf of your customers you will need to create an "App" within Clickup. https://clickup.com/api/developer-portal/authentication/#step-1-create-an-oauth-app

1. Log into ClickUp.
2. Click on your avatar in the lower-left corner and select
   **Integrations.**
3. Click on **ClickUp API.**
4. Click **Create an App.**
5. Give your app a name and provide the redirect URL as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
6. Once your app is created, you'll be provided with a client ID and Secret that may be entered in the connection

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                         | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Client ID     | Follow this step to generate https://clickup.com/api/developer-portal/authentication/#step-1-create-an-oauth-app |         |
| Client Secret | Follow this step to generate https://clickup.com/api/developer-portal/authentication/#step-1-create-an-oauth-app |         |

### ClickUp Personal Access Token {#apikey}

ClickUp Personal Access Token

Personal API token Configuration Instructions

To make API requests to ClickUp using a personal API token you may generate one using the following Personal API token [steps](https://help.clickup.com/hc/en-us/articles/6303426241687-Getting-Started-with-the-ClickUp-API#personal-api-key).

1. Log into ClickUp.
2. Click on your avatar in the lower-left corner and select **Apps.**
3. Under API Token, click **Generate.**
4. You can copy and paste your personal API token.

| Input                 | Comments                                                                                                                                               | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Personal Access Token | Follow the next steps to get an API key https://help.clickup.com/hc/en-us/articles/6303426241687-Getting-Started-with-the-ClickUp-API#personal-api-key |         |

## Triggers

### Webhook {#webhook}

Receive and validate webhook requests from ClickUp for webhooks you configure.

## Actions

### Add Guest to Folder {#addguesttofolder}

Share a Folder with a guest.

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                   |         |
| Folder ID        | Folder ID                                                                         |         |
| Guest ID         | Guest ID                                                                          |         |
| Include Shared   | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Permission Level | Can be read (view only), comment, edit, or create (full).                         | create  |

### Add Guest to List {#addguesttolist}

Share a List with a guest.

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                   |         |
| List ID          | List ID                                                                           |         |
| Guest ID         | Guest ID                                                                          |         |
| Include Shared   | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Permission Level | Can be read (view only), comment, edit, or create (full).                         | create  |

### Add Guest to Task {#addguesttotask}

Share a task with a guest.

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                   |         |
| Task ID          | Task ID                                                                           |         |
| Guest ID         | Guest ID                                                                          |         |
| Include Shared   | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Custom Task ID   | If you want to reference a task by its Custom Task ID, this value must be true.   | true    |
| Team ID          | Only used when the custom_task_ids parameter is set to true                       |         |
| Permission Level | Can be read (view only), comment, edit, or create (full).                         |         |

### Add Task to List {#addtasktolist}

Add a new task to an additional List.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| List ID    | List ID  |         |
| Task ID    | Task ID  |         |

### Create Folder {#createfolder}

Add a new Folder to a Space.

| Input      | Comments        | Default |
| ---------- | --------------- | ------- |
| Connection |                 |         |
| Space ID   | Space ID value. |         |
| Name       | Folder Name     |         |

### Create List {#createlist}

Add a new list to a folder.

| Input         | Comments                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                      |         |
| Folder ID     | Folder ID                                                                            |         |
| Name          | Name of the new list                                                                 |         |
| Content       | Content                                                                              |         |
| Due Date      | Initial due date of the new list                                                     |         |
| Due Date Time | Due Date Time                                                                        | false   |
| Priority      | Initial priority of the new list                                                     |         |
| Assignee      | Include a user_id to assign this List.                                               |         |
| Status        | Status refers to the List color rather than the task Statuses available in the List. |         |
| Name          | Name of the new list                                                                 |         |

### Create Space {#createspace}

Add a new Space to a Workspace.

| Input                     | Comments                                 | Default |
| ------------------------- | ---------------------------------------- | ------- |
| Connection                |                                          |         |
| Team ID                   | Team ID (Workspace) value                |         |
| Space Name                | Space Name                               |         |
| Multiple Assignees        | Will this Space have multiple assignees? | true    |
| Enable Due Dates          | Enable Due Dates?                        | true    |
| Use Start Date            | Use Start Date?                          | true    |
| Remap Due Dates           | Remap Due Dates?                         | true    |
| Remap closed Due Dates    | Remap closed Due Dates?                  | false   |
| Enable Time Tracking      | Enable Time Tracking?                    | true    |
| Enable Tags               | Enable Tags?                             | true    |
| Enable Time Estimates     | Enable Time Estimates?                   | true    |
| Enable Checklists         | Enable Checklists?                       | true    |
| Enable Custom Fields      | Enable Custom Fields?                    | true    |
| Enable Remap Dependencies | Enable Remap Dependencies?               | true    |
| Enable Dependency Warning | Enable Dependency Warning?               | true    |
| Enable Portfolios         | Enable Portfolios?                       | true    |

### Create Task {#createtask}

Create a new Task

| Input                        | Comments                                                                                                                                                                     | Default |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   |                                                                                                                                                                              |         |
| List ID                      | List ID                                                                                                                                                                      |         |
| Custom Task ID               | If you want to reference a task by it's custom task id, this value must be true.                                                                                             | false   |
| Team ID                      | Only used when the custom_task_ids parameter is set to true.                                                                                                                 |         |
| Name                         | Task Name                                                                                                                                                                    |         |
| Description                  | Task Description                                                                                                                                                             |         |
| Markdown Description         | Markdown formatted description.                                                                                                                                              |         |
| Assignee                     | Task Assignees                                                                                                                                                               |         |
| Tag                          | Task Tags                                                                                                                                                                    |         |
| Status                       | Task Status                                                                                                                                                                  |         |
| Priority                     | Task Priority                                                                                                                                                                |         |
| Due Date                     | Task Due Date                                                                                                                                                                |         |
| Due Date Time                | Task Due Date Time                                                                                                                                                           | false   |
| Time Estimate                | Task Time Estimate                                                                                                                                                           |         |
| Start Date                   | Task Start Date                                                                                                                                                              |         |
| Start Date Time              | Task Start Date Time                                                                                                                                                         | false   |
| Notify All                   | If notify_all is true, notifications will be sent to everyone including the creator of the comment.                                                                          | true    |
| Parent                       | You can create a subtask by including an existing task ID. The parent task ID you include cannot be a subtask, and must be in the same List specified in the path parameter. |         |
| Links To                     | Include a task ID to create a linked dependency with your new task.                                                                                                          |         |
| Check Required Custom Fields | When creating a task via API any required Custom Fields are ignored by default (false).                                                                                      | false   |
| Custom Fields                |                                                                                                                                                                              |         |

### Create Task Attachment {#createtaskattachment}

Upload a file to a task as an attachment.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                  |         |
| Task ID        | Task ID                                                                          |         |
| Custom Task ID | If you want to reference a task by it's custom task id, this value must be true. | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true.                     |         |
| File           | File to attach.                                                                  |         |
| File Name      | Name of the file to attach.                                                      |         |

### Create Task Comment {#createtaskcomment}

Add a new comment to a task.

| Input          | Comments                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                     |         |
| Task ID        | Task ID                                                                                             |         |
| Custom Task ID | If you want to reference a task by it's custom task id, this value must be true.                    | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true.                                        |         |
| Comment Text   | Comment Text                                                                                        |         |
| Notify All     | If notify_all is true, notifications will be sent to everyone including the creator of the comment. | true    |
| Assignee       | Assignee by ID                                                                                      |         |

### Create Team {#createteam}

This endpoint is used to create Teams: user groups which are groups of users you can assign items to in your Workspace.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Team ID    | Team ID (Workspace) value |         |
| Name       | Desired Team Name         |         |
| Member     | Add user by ID            |         |

### Create Time Entry {#createtimeentry}

Create a time entry.

| Input            | Comments                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                |         |
| Team ID          | Team ID (Workspace) value                                                                                      |         |
| Custom Task ID   | If you want to reference a task by it's custom task id, this value must be true.                               | false   |
| Custom Team ID   | Only used when the custom_task_ids parameter is set to true.                                                   |         |
| Description      | Description                                                                                                    |         |
| Start            | Start time                                                                                                     |         |
| Include Subtasks | Billable                                                                                                       | false   |
| Duration         | Duration                                                                                                       |         |
| Assignee         | Workspace owners and admins can include unknown user id. Workspace members can only include their own user id. |         |
| Task ID          | Associate a time entry with a task by ID                                                                       |         |
| Tags             | Code should have this format                                                                                   |         |

### Create Webhook {#createwebhook}

Create a new webhook for a specific List.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection |                                    |         |
| Team ID    | Team ID (Workspace)                |         |
| Endpoint   | URL of the webhook endpoint.       |         |
| Space ID   | Space ID                           |         |
| Event      | Event type to trigger the webhook. |         |
| Folder ID  | Folder ID                          |         |
| List ID    | List ID                            |         |
| Task ID    | Task ID                            |         |

### Delete Comment {#deletecomment}

Delete a task comment.

| Input      | Comments   | Default |
| ---------- | ---------- | ------- |
| Connection |            |         |
| Comment ID | Comment ID |         |

### Delete Folder {#deletefolder}

Delete a Folder from your Workspace.

| Input      | Comments  | Default |
| ---------- | --------- | ------- |
| Connection |           |         |
| Folder ID  | Folder ID |         |

### Delete List {#deletelist}

Delete a List from your Workspace.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| List ID    | List ID  |         |

### Delete Space {#deletespace}

Delete a Space from your Workspace.

| Input      | Comments        | Default |
| ---------- | --------------- | ------- |
| Connection |                 |         |
| Space ID   | Space ID value. |         |

### Delete Task {#deletetask}

Delete a task from your Workspace.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                  |         |
| Task ID        | Task ID                                                                          |         |
| Custom Task ID | If you want to reference a task by it's custom task id, this value must be true. | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true.                     |         |

### Delete Team {#deleteteam}

This endpoint is used to remove a Team: user group from your Workspace.

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection |                       |         |
| Group ID   | Team ID (user group). |         |

### Delete Time Entry {#deletetimeentry}

Delete a time entry from a Workspace.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Team ID    | Team ID (Workspace) value |         |
| Timer ID   | The ID of a time entry.   |         |

### Delete Webhook {#deletewebhook}

Delete a webhook.

| Input      | Comments   | Default |
| ---------- | ---------- | ------- |
| Connection |            |         |
| Webhook ID | Webhook ID |         |

### Edit Guest on Workspace {#editguestonworkspace}

Rename and configure options for a guest.

| Input                  | Comments                  | Default |
| ---------------------- | ------------------------- | ------- |
| Connection             |                           |         |
| Team ID                | Team ID (Workspace) value |         |
| Username               |                           |         |
| Can Edit Tags          |                           | true    |
| Can See Time Spent     |                           | true    |
| Can See Time Estimated |                           | true    |
| Can Create Views       |                           | true    |
| Custom Role ID         | Custom Role ID value      |         |
| Guest ID               | Guest ID                  |         |

### Edit User On Workspace {#edituseronworkspace}

Update a user's name and role.

| Input          | Comments                  | Default |
| -------------- | ------------------------- | ------- |
| Team ID        | Team ID (Workspace) value |         |
| Connection     |                           |         |
| Admin          | Make an admin?            | true    |
| Custom Role ID | Custom Role ID value      |         |
| User ID        | User ID value             |         |

### Get Accessible Custom Fields {#getaccessiblecustomfields}

View the Custom Fields available on tasks in a specific List.

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection |                                                                     |         |
| List ID    | Only include time entries associated with tasks in a specific List. |         |

### Get Authorized Teams (Workspaces) {#getauthorizedteams}

View the Workspaces available to the authenticated user.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Folder {#getfolder}

View the Lists within a Folder.

| Input      | Comments  | Default |
| ---------- | --------- | ------- |
| Connection |           |         |
| Folder ID  | Folder ID |         |

### Get Guest {#getguest}

View information about a guest in a Workspace.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Team ID    | Team ID (Workspace) value |         |
| Guest ID   | Guest ID                  |         |

### Get List {#getlist}

View details for a specific List.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| List ID    | List ID  |         |

### Get List Members {#getlistmembers}

View the people who have access to a List.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| List ID    | List ID  |         |

### Get Singular Time Entry {#getsingulartimeentry}

View a single time entry.

| Input                  | Comments                                                                                         | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                                  |         |
| Team ID                | Team ID (Workspace) value                                                                        |         |
| Timer ID               | The ID of a time entry.                                                                          |         |
| Include Task Tags      | Include task tags in the response for time entries associated with tasks.                        | true    |
| Include Location Names | Include the names of the List, Folder, and Space along with the list_id,folder_id, and space_id. | true    |

### Get Space {#getspace}

View the Spaces available in a Workspace by ID.

| Input      | Comments        | Default |
| ---------- | --------------- | ------- |
| Connection |                 |         |
| Space ID   | Space ID value. |         |

### Get Task {#gettask}

View information about a task.

| Input            | Comments                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                  |         |
| Task ID          | Task ID                                                                          |         |
| Custom Task ID   | If you want to reference a task by it's custom task id, this value must be true. | false   |
| Team ID          | Only used when the custom_task_ids parameter is set to true.                     |         |
| Include Subtasks | Include or exclude subtasks. By default, subtasks are excluded.                  | false   |

### Get Task Comments {#gettaskcomments}

View task comments.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                  |         |
| Task ID        | Task ID                                                                          |         |
| Custom Task ID | If you want to reference a task by it's custom task id, this value must be true. | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true.                     |         |
| Start ID       | Enter the Comment id of a task comment.                                          |         |
| Start Date     | Unix time in milliseconds                                                        |         |

### Get Task Members {#gettaskmembers}

View the members assigned to a task.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Task ID    | Task ID  |         |

### Get Team {#getteam}

This endpoint is used to view Teams: user groups in your Workspace.

| Input      | Comments                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                        |         |
| Team ID    | Team ID (Workspace) value                                                              |         |
| Group IDs  | Enter one or more Team ids (user groups) to retrieve information about specific Teams. |         |

### Get Time Entries Within a Date Range {#gettimeentrieswithindaterange}

View time entries filtered by start and end date. By default, this endpoint returns time entries from the last 30 days created by the authenticated user.

| Input                  | Comments                                                                                         | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                                  |         |
| Team ID                | Team ID (Workspace) value                                                                        |         |
| Start Date             | Unix time in milliseconds                                                                        |         |
| End Date               | Unix time in milliseconds                                                                        |         |
| Assignee               | Filter by User ID                                                                                |         |
| Include Task Tags      | Include task tags in the response for time entries associated with tasks.                        | true    |
| Include Location Names | Include the names of the List, Folder, and Space along with the list_id,folder_id, and space_id. | true    |
| Space ID               | Only include time entries associated with tasks in a specific Space.                             |         |
| Folder ID              | Only include time entries associated with tasks in a specific Folder.                            |         |
| List ID                | Only include time entries associated with tasks in a specific List.                              |         |
| Task ID                | Only include time entries associated with a specific task.                                       |         |
| Custom Task ID         | If you want to reference a task by it's custom task id, this value must be true.                 | false   |
| Custom Team ID         | Only used when the custom_task_ids parameter is set to true.                                     |         |

### Get User {#getuser}

View information about a user in a Workspace.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Team ID    | Team ID (Workspace) value |         |
| User ID    | User ID value             |         |
| Connection |                           |         |

### Get Webhooks {#getwebhooks}

View all webhooks for a list.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Team ID    | Team ID (Workspace) value |         |

### Get Workspace Plan {#getworkspaceplan}

View the current Plan for the specified Workspace.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Team ID    | Team ID (Workspace) value |         |

### Get Workspace Seats {#getworkspaceseats}

View the used, total, and available member and guest seats for a Workspace.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Team ID    | Team ID (Workspace) value |         |

### Invite Guest to Workspace {#inviteguesttoworkspace}

Invite a new guest to a workspace.

| Input                  | Comments                           | Default |
| ---------------------- | ---------------------------------- | ------- |
| Connection             |                                    |         |
| Team ID                | Team ID (Workspace) value          |         |
| Email                  | Email address of the invited guest |         |
| Can Edit Tags          |                                    | true    |
| Can See Time Spent     |                                    | true    |
| Can See Time Estimated |                                    | true    |
| Can Create Views       |                                    | true    |
| Custom Role ID         | Custom Role ID value               |         |

### Invite User To Workspace {#inviteusertoworkspace}

Invite someone to join your Workspace as a member.

| Input          | Comments                          | Default |
| -------------- | --------------------------------- | ------- |
| Team ID        | Team ID (Workspace) value         |         |
| Connection     |                                   |         |
| Email          | Email address of User being added |         |
| Admin          | Make an admin?                    | true    |
| Custom Role ID | Custom Role ID value              |         |

### List Folders {#listfolders}

View all folders in a space.

| Input      | Comments        | Default |
| ---------- | --------------- | ------- |
| Connection |                 |         |
| Space ID   | Space ID value. |         |
| Archived   | Archived?       | false   |

### List Lists {#getlists}

View the Lists within a Folder.

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection |                            |         |
| Folder ID  | Folder ID                  |         |
| Archived   | Filter for archived Lists? | false   |

### List Spaces {#listspaces}

View the Spaces available in a Workspace.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Team ID    | Team ID (Workspace) value |         |

### List Tasks {#listtasks}

View the tasks in a List.

| Input                     | Comments                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------- | ------- |
| Connection                |                                                                        |         |
| List ID                   | Team ID (Workspace)                                                    |         |
| Archived                  | Archived?                                                              | false   |
| Page                      |                                                                        | 0       |
| Order By                  | Order by a particular field. By default, tasks are ordered by created. |         |
| Reverse                   | Tasks are displayed in reverse order.                                  | false   |
| Include Subtasks          | Include or exclude subtasks. By default, subtasks are excluded.        | false   |
| Include Closed            | Include or excluse closed tasks. By default, they are excluded.        | false   |
| Assignee                  | Filter by Assignees. Add Assingee                                      |         |
| Tag                       | Filter by tags. Add a tag to filter.                                   |         |
| Due Date Greater Than     | Filter by due date greater than Unix time in milliseconds.             |         |
| Due Date Less Than        | Filter by due date less than Unix time in milliseconds.                |         |
| Date Created Greater Than | Filter by date created greater than Unix time in milliseconds.         |         |
| Date Created Less Than    | Filter by date created less than Unix time in milliseconds.            |         |
| Date Updated Greater Than | Filter by date updated greater than Unix time in milliseconds.         |         |
| Date Updated Less Than    | Filter by date updated less than Unix time in milliseconds.            |         |
| Date Done Greater Than    | Filter by date done greater than Unix time in milliseconds.            |         |
| Date Done Less Than       | Filter by date done less than Unix time in milliseconds.               |         |
| Custom Fields             | Code should have this format                                           |         |

### Raw Request {#rawrequest}

Send raw HTTP request to ClickUp

| Input                   | Comments                                                                                                                                                                                                                                             | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                      |         |
| URL                     | Input the path only (/space/${spaceId}/tag), The base URL is already included (https://api.clickup.com/api/v2). For example, to connect to https://api.clickup.com/api/v2/space/${spaceId}/tag, only /space/${spaceId}/tag is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                  |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                        | false   |

### Remove Custom Field Value {#removecustomfieldvalue}

Remove the data from a Custom Field on a task. This does not delete the option from the Custom Field.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                   |         |
| Task ID        | Enter the task ID of the task you want to update.                                 |         |
| Field ID       | Enter the universal unique identifier (UUID) of the Custom Field you want to set. |         |
| Custom Task ID | If you want to reference a task by its Custom Task ID, this value must be true.   | true    |
| Team ID        | Only used when the custom_task_ids parameter is set to true                       |         |

### Remove Guest From Folder {#removeguestfromfolder}

Revoke a guest's access to a Folder.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                   |         |
| Folder ID      | Folder ID                                                                         |         |
| Guest ID       | Guest ID                                                                          |         |
| Include Shared | Exclude details of items shared with the guest by setting this parameter to false | true    |

### Remove Guest From List {#removeguestfromlist}

Revoke a guest's access to a List.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                   |         |
| List ID        | List ID                                                                           |         |
| Guest ID       | Guest ID                                                                          |         |
| Include Shared | Exclude details of items shared with the guest by setting this parameter to false | true    |

### Remove Guest From Task {#removeguestfromtask}

Revoke a guest's access to a task.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                   |         |
| Task ID        | Task ID                                                                           |         |
| Guest ID       | Guest ID                                                                          |         |
| Include Shared | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Custom Task ID | If you want to reference a task by its Custom Task ID, this value must be true.   | true    |
| Team ID        | Only used when the custom_task_ids parameter is set to true                       |         |

### Remove Guest From Workspace {#removeguestfromworkspace}

Revoke a guest's access to a Workspace.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Team ID    | Team ID (Workspace) value |         |
| Guest ID   | Guest ID                  |         |

### Remove Task From List {#removetaskfromlist}

Remove a task from an additional List. You can't remove a task from its home List.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| List ID    | List ID  |         |
| Task ID    | Task ID  |         |

### Remove User From Workspace {#removeuserfromworkspace}

Deactivate a user from a Workspace.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Team ID    | Team ID (Workspace) value |         |
| Connection |                           |         |
| User ID    | User ID value             |         |

### Set Custom Field Value {#setcustomfieldvalue}

Update the value of a Custom Field on a task.

| Input       | Comments                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                   |         |
| Task ID     | Enter the task ID of the task you want to update.                                 |         |
| Field ID    | Enter the universal unique identifier (UUID) of the Custom Field you want to set. |         |
| Field Value |                                                                                   |         |
| Value Type  |                                                                                   |         |

### Start a Time Entry {#starttimeentry}

Start a timer for the authenticated user.

| Input            | Comments                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                  |         |
| Team ID          | Team ID (Workspace) value                                                        |         |
| Custom Task ID   | If you want to reference a task by it's custom task id, this value must be true. | false   |
| Custom Team ID   | Only used when the custom_task_ids parameter is set to true.                     |         |
| Description      | Description                                                                      |         |
| Include Subtasks | Billable                                                                         | false   |
| Task ID          | Associate a time entry with a task by ID                                         |         |
| Tag name         | Add a tag name                                                                   |         |

### Stop a Time Entry {#stoptimeentry}

Stop a timer that's currently running for the authenticated user.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Team ID    | Team ID (Workspace) value |         |

### Update Comment {#updatecomment}

Replace the content of a task comment, assign a comment, and mark a comment as resolved.

| Input        | Comments       | Default |
| ------------ | -------------- | ------- |
| Connection   |                |         |
| Comment ID   | Comment ID     |         |
| Comment Text | Comment Text   |         |
| Resolved     | Resolved?      | false   |
| Assignee     | Assignee by ID |         |

### Update Folder {#updatefolder}

Rename a Folder

| Input      | Comments    | Default |
| ---------- | ----------- | ------- |
| Connection |             |         |
| Folder ID  | Folder ID   |         |
| Name       | Folder Name |         |

### Update List {#updatelist}

Rename a List, update the List Info description, set a due date/time, set the List's priority, set an assignee, set or remove the List color.

| Input         | Comments                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                      |         |
| List ID       | List ID                                                                              |         |
| Name          | Name of the list                                                                     |         |
| Content       | Content                                                                              |         |
| Due Date      | Due date of the list                                                                 |         |
| Due Date Time | Set to true if due date has a time                                                   | false   |
| Priority      | Priority of the list                                                                 |         |
| Assignee      | User ID of the list assignee                                                         |         |
| Status        | Status refers to the List color rather than the task Statuses available in the List. |         |
| Unset Status  | By default, this is false. To remove the List color use unset_status: true.          | false   |

### Update Space {#updatespace}

Rename, set the Space color, and enable ClickApps for a Space.

| Input                     | Comments                                 | Default |
| ------------------------- | ---------------------------------------- | ------- |
| Connection                |                                          |         |
| Space ID                  | Space ID value.                          |         |
| Space Name                | Space Name                               |         |
| Multiple Assignees        | Will this Space have multiple assignees? | true    |
| Enable Due Dates          | Enable Due Dates?                        | true    |
| Use Start Date            | Use Start Date?                          | true    |
| Remap Due Dates           | Remap Due Dates?                         | true    |
| Remap closed Due Dates    | Remap closed Due Dates?                  | false   |
| Enable Time Tracking      | Enable Time Tracking?                    | true    |
| Enable Tags               | Enable Tags?                             | true    |
| Enable Time Estimates     | Enable Time Estimates?                   | true    |
| Enable Checklists         | Enable Checklists?                       | true    |
| Enable Custom Fields      | Enable Custom Fields?                    | true    |
| Enable Remap Dependencies | Enable Remap Dependencies?               | true    |
| Enable Dependency Warning | Enable Dependency Warning?               | true    |
| Enable Portfolios         | Enable Portfolios?                       | true    |
| Color                     | Hex Color Number                         |         |
| Private                   | Private?                                 | true    |
| Admin Can Manage          | Admin Can Manage?                        | true    |

### Update Task {#updatetask}

Update a task

| Input                | Comments                                                                                  | Default |
| -------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                           |         |
| Task ID              | Task ID                                                                                   |         |
| Custom Task ID       | If you want to reference a task by it's custom task id, this value must be true.          | false   |
| Team ID              | Only used when the custom_task_ids parameter is set to true.                              |         |
| Name                 | Task Name                                                                                 |         |
| Description          | Task Description                                                                          |         |
| Markdown Description | Markdown formatted description.                                                           |         |
| Status               | Task Status                                                                               |         |
| Priority             | Task Priority                                                                             |         |
| Due Date             | Task Due Date                                                                             |         |
| Due Date Time        | Task Due Date Time                                                                        | false   |
| Parent               | You can move a subtask to another parent task by including "parent" with a valid task id. |         |
| Time Estimate        | Task Time Estimate                                                                        |         |
| Start Date           | Task Start Date                                                                           |         |
| Start Date Time      | Task Start Date Time                                                                      | false   |
| Add Assignee         | Add Assignee                                                                              |         |
| Remove Assignee      | Remove Assignee                                                                           |         |
| Archived             | Include Archived?                                                                         | false   |

### Update Team {#updateteam}

This endpoint is used to manage Teams: user groups which are groups of users you can assign items to in your Workspace

| Input         | Comments                                                                                        | Default |
| ------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                 |         |
| Group ID      | Team ID (user group).                                                                           |         |
| Team Name     | Desired Team Name                                                                               |         |
| Team Handle   | You may update the team handle which is used to @mention a Team (user group) in your Workspace. |         |
| Add Member    | Add members by ID. Comma separate each user ID.                                                 |         |
| Remove Member | Remove members by ID. Comma separate each user ID.                                              |         |

### Update Time Entry {#updatetimeentry}

Update the details of a time entry.

| Input            | Comments                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                |         |
| Team ID          | Team ID (Workspace) value                                                                                      |         |
| Custom Task ID   | If you want to reference a task by it's custom task id, this value must be true.                               | false   |
| Custom Team ID   | Only used when the custom_task_ids parameter is set to true.                                                   |         |
| Description      | Description                                                                                                    |         |
| Start            | Start time                                                                                                     |         |
| Include Subtasks | Billable                                                                                                       | false   |
| Duration         | Duration                                                                                                       |         |
| Assignee         | Workspace owners and admins can include unknown user id. Workspace members can only include their own user id. |         |
| Task ID          | Associate a time entry with a task by ID                                                                       |         |
| Timer ID         | The ID of a time entry.                                                                                        |         |
| Tag Action       | Tag Action (use replace, add or remove)                                                                        |         |
| End              | End time                                                                                                       |         |
| Tags             | Code should have this format                                                                                   |         |

### Update Webhook {#updatewebhook}

Update the configuration of a webhook.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection |                                                                         |         |
| Webhook ID | Webhook ID                                                              |         |
| Endpoint   | URL of the webhook endpoint.                                            |         |
| All Events | Subscribe to all events, when set to true it overrides the event inputs | false   |
| Event      | Event type to trigger the webhook.                                      |         |
| Status     | Status                                                                  |         |
