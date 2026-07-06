---
title: ClickUp Connector
sidebar_label: ClickUp
description: Manage tasks, lists, spaces, time tracking, and team members in ClickUp.
---

![ClickUp](./assets/click-up.png#connector-icon)
[ClickUp](https://clickup.com/) is a CRM, collaboration, knowledge base, and project management tool.

Use the ClickUp component to manage users, projects, and teams in a ClickUp workspace.

## Connections

### OAuth 2.0 {#clickupoauth2connection}

Authenticate using OAuth 2.0.

OAuth 2.0 Configuration Instructions

To make API requests to ClickUp on behalf of end customers, an "App" must be created within ClickUp. See the [ClickUp Authentication documentation](https://developer.clickup.com/docs/authentication) for full details.

1. Log into ClickUp.
2. Click on the avatar in the lower-left corner and select **Integrations**.
3. Click on **ClickUp API**.
4. Click **Create an App**.
5. Provide an app name and set the redirect URL to `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
6. Once the app is created, a Client ID and Client Secret will be provided. Enter these values into the connection configuration.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Client ID     | The Client ID from the ClickUp OAuth app. Create an OAuth app via the [ClickUp Developer Portal](https://developer.clickup.com/docs/authentication).     |         |
| Client Secret | The Client Secret from the ClickUp OAuth app. Create an OAuth app via the [ClickUp Developer Portal](https://developer.clickup.com/docs/authentication). |         |

### Personal Access Token {#apikey}

Authenticate using a personal access token.

Personal Access Token Configuration Instructions

To make API requests to ClickUp using a personal access token, follow the steps below. For full details, see the [ClickUp Authentication documentation](https://developer.clickup.com/docs/authentication).

1. Log into ClickUp.
2. Click on the avatar in the lower-left corner and select **Apps**.
3. Under API Token, click **Generate**.
4. Copy the personal access token and paste it into the connection configuration in the integration.

| Input                 | Comments                                                                                                                                                                                                                        | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Personal Access Token | The ClickUp Personal Access Token used to authenticate API requests. Generate one in ClickUp Settings > Apps > API Token. See the [ClickUp Authentication docs](https://developer.clickup.com/docs/authentication) for details. |         |

## Triggers

### New and Updated Tasks {#pollchangestrigger}

Checks for new and updated tasks in ClickUp on a configured schedule.

| Input                | Comments                                                                              | Default |
| -------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection           | The ClickUp connection to use.                                                        |         |
| Scope                | Whether to poll tasks across an entire Team (Workspace) or scoped to a single List.   |         |
| Scope ID             | The Team ID or List ID to monitor for changes, depending on the Scope selected above. |         |
| Show New Records     | When enabled, tasks created since the last poll are returned in the trigger payload.  | true    |
| Show Updated Records | When enabled, tasks updated since the last poll are returned in the trigger payload.  | true    |

### Webhook {#webhook}

Receive and validate webhook requests from ClickUp for manually configured webhook subscriptions.

## Actions

### Add Guest to Folder {#addguesttofolder}

Share a folder with a guest.

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Connection       | The ClickUp connection to use.                                                    |         |
| Folder ID        | Folder ID                                                                         |         |
| Guest ID         | Guest ID                                                                          |         |
| Include Shared   | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Permission Level | Can be read (view only), comment, edit, or create (full).                         | create  |

### Add Guest to List {#addguesttolist}

Share a list with a guest.

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Connection       | The ClickUp connection to use.                                                    |         |
| List ID          | List ID                                                                           |         |
| Guest ID         | Guest ID                                                                          |         |
| Include Shared   | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Permission Level | Can be read (view only), comment, edit, or create (full).                         | create  |

### Add Guest to Task {#addguesttotask}

Share a task with a guest.

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Connection       | The ClickUp connection to use.                                                    |         |
| Task ID          | Task ID                                                                           |         |
| Guest ID         | Guest ID                                                                          |         |
| Include Shared   | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Custom Task ID   | If you want to reference a task by its Custom Task ID, this value must be true.   | true    |
| Team ID          | Only used when the custom_task_ids parameter is set to true                       |         |
| Permission Level | Can be read (view only), comment, edit, or create (full).                         |         |

### Add Task to List {#addtasktolist}

Add a task to an additional list.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| List ID    | List ID                        |         |
| Task ID    | Task ID                        |         |

### Create Folder {#createfolder}

Add a new folder to a space.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Space ID   | Space ID value.                |         |
| Name       | The name of the folder.        |         |

### Create List {#createlist}

Add a new list to a folder.

| Input         | Comments                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection    | The ClickUp connection to use.                                                       |         |
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

Add a new space to a workspace.

| Input                     | Comments                                                      | Default |
| ------------------------- | ------------------------------------------------------------- | ------- |
| Connection                | The ClickUp connection to use.                                |         |
| Team ID                   | Team ID (Workspace) value.                                    |         |
| Space Name                | Space Name.                                                   |         |
| Multiple Assignees        | When true, the Space allows multiple assignees on tasks.      | true    |
| Enable Due Dates          | When true, enables due dates for tasks in the Space.          | true    |
| Use Start Date            | When true, enables start dates for tasks in the Space.        | true    |
| Remap Due Dates           | When true, remaps due dates when tasks are moved.             | true    |
| Remap closed Due Dates    | When true, remaps due dates for closed tasks when moved.      | false   |
| Enable Time Tracking      | When true, enables time tracking for tasks in the Space.      | true    |
| Enable Tags               | When true, enables tags for tasks in the Space.               | true    |
| Enable Time Estimates     | When true, enables time estimates for tasks in the Space.     | true    |
| Enable Checklists         | When true, enables checklists for tasks in the Space.         | true    |
| Enable Custom Fields      | When true, enables custom fields for tasks in the Space.      | true    |
| Enable Remap Dependencies | When true, enables remapping of task dependencies when moved. | true    |
| Enable Dependency Warning | When true, enables warnings for task dependency conflicts.    | true    |
| Enable Portfolios         | When true, enables portfolios for the Space.                  | true    |

### Create Task {#createtask}

Create a new task in a list.

| Input                        | Comments                                                                                                                                                                     | Default |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The ClickUp connection to use.                                                                                                                                               |         |
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
| Custom Fields                | Custom field key-value pairs to set on the task.                                                                                                                             |         |

### Create Task Attachment {#createtaskattachment}

Upload a file to a task as an attachment.

| Input          | Comments                                                     | Default |
| -------------- | ------------------------------------------------------------ | ------- |
| Connection     | The ClickUp connection to use.                               |         |
| Task ID        | Task ID                                                      |         |
| Custom Task ID | When true, allows referencing a task by its custom task ID.  | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true. |         |
| File           | File to attach.                                              |         |
| File Name      | Name of the file to attach.                                  |         |

### Create Task Comment {#createtaskcomment}

Add a new comment to a task.

| Input          | Comments                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The ClickUp connection to use.                                                                      |         |
| Task ID        | Task ID                                                                                             |         |
| Custom Task ID | When true, allows referencing a task by its custom task ID.                                         | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true.                                        |         |
| Comment Text   | Comment Text                                                                                        |         |
| Notify All     | If notify_all is true, notifications will be sent to everyone including the creator of the comment. | true    |
| Assignee       | Assignee by ID.                                                                                     |         |

### Create Team {#createteam}

Create a user group (Team) of users that can be assigned to items in a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Team ID    | Team ID (Workspace) value.     |         |
| Name       | Desired Team Name.             |         |
| Member     | Add user by ID.                |         |

### Create Time Entry {#createtimeentry}

Create a time entry.

| Input          | Comments                                                                                                                       | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The ClickUp connection to use.                                                                                                 |         |
| Team ID        | Team ID (Workspace) value.                                                                                                     |         |
| Custom Task ID | When true, allows referencing a task by its custom task ID.                                                                    | false   |
| Custom Team ID | Only used when the custom_task_ids parameter is set to true.                                                                   |         |
| Description    | Description                                                                                                                    |         |
| Start          | Start time                                                                                                                     |         |
| Billable       | Billable                                                                                                                       | false   |
| Duration       | Duration                                                                                                                       |         |
| Assignee       | Workspace owners and admins can include unknown user id. Workspace members can only include their own user id.                 |         |
| Task ID        | Associate a time entry with a task by ID                                                                                       |         |
| Tags           | JSON object containing an array of tag objects with name, background color (tag_bg), and foreground color (tag_fg) properties. |         |

### Create Webhook {#createwebhook}

Create a new webhook for a workspace, space, folder, list, or task.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The ClickUp connection to use.     |         |
| Team ID    | Team ID (Workspace)                |         |
| Endpoint   | URL of the webhook endpoint.       |         |
| Space ID   | Space ID                           |         |
| Event      | Event type to trigger the webhook. |         |
| Folder ID  | Folder ID                          |         |
| List ID    | List ID                            |         |
| Task ID    | Task ID                            |         |

### Delete Comment {#deletecomment}

Delete a task comment.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Comment ID | Comment ID                     |         |

### Delete Folder {#deletefolder}

Delete a folder from a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Folder ID  | Folder ID                      |         |

### Delete List {#deletelist}

Delete a list from a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| List ID    | List ID                        |         |

### Delete Space {#deletespace}

Delete a space from a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Space ID   | Space ID value.                |         |

### Delete Task {#deletetask}

Delete a task from a workspace.

| Input          | Comments                                                     | Default |
| -------------- | ------------------------------------------------------------ | ------- |
| Connection     | The ClickUp connection to use.                               |         |
| Task ID        | Task ID                                                      |         |
| Custom Task ID | When true, allows referencing a task by its custom task ID.  | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true. |         |

### Delete Team {#deleteteam}

Remove a user group (Team) from a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Group ID   | Team ID (user group).          |         |

### Delete Time Entry {#deletetimeentry}

Delete a time entry from a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Team ID    | Team ID (Workspace) value.     |         |
| Timer ID   | The ID of a time entry.        |         |

### Delete Webhook {#deletewebhook}

Delete a webhook.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Webhook ID | Webhook ID                     |         |

### Edit Guest on Workspace {#editguestonworkspace}

Rename and configure options for a guest.

| Input                  | Comments                       | Default |
| ---------------------- | ------------------------------ | ------- |
| Connection             | The ClickUp connection to use. |         |
| Team ID                | Team ID (Workspace) value.     |         |
| Username               |                                |         |
| Can Edit Tags          |                                | true    |
| Can See Time Spent     |                                | true    |
| Can See Time Estimated |                                | true    |
| Can Create Views       |                                | true    |
| Custom Role ID         | Custom Role ID value.          |         |
| Guest ID               | Guest ID                       |         |

### Edit User on Workspace {#edituseronworkspace}

Update a user's name and role on a workspace.

| Input          | Comments                                        | Default |
| -------------- | ----------------------------------------------- | ------- |
| Team ID        | Team ID (Workspace) value.                      |         |
| Connection     | The ClickUp connection to use.                  |         |
| Admin          | When true, grants admin privileges to the user. | true    |
| Custom Role ID | Custom Role ID value.                           |         |
| User ID        | User ID value.                                  |         |

### Get Accessible Custom Fields {#getaccessiblecustomfields}

List the custom fields available on tasks in a specific list.

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                                      |         |
| List ID    | Only include time entries associated with tasks in a specific List. |         |

### Get Authorized Workspaces {#getauthorizedteams}

List the workspaces available to the authenticated user.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |

### Get Folder {#getfolder}

Retrieve a folder and its lists.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Folder ID  | Folder ID                      |         |

### Get Guest {#getguest}

Retrieve information about a guest in a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Team ID    | Team ID (Workspace) value.     |         |
| Guest ID   | Guest ID                       |         |

### Get List {#getlist}

Retrieve details for a specific list.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| List ID    | List ID                        |         |

### Get List Members {#getlistmembers}

List the people who have access to a list.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| List ID    | List ID                        |         |

### Get Space {#getspace}

Retrieve details for a specific space by ID.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Space ID   | Space ID value.                |         |

### Get Task {#gettask}

Retrieve information about a task.

| Input            | Comments                                                        | Default |
| ---------------- | --------------------------------------------------------------- | ------- |
| Connection       | The ClickUp connection to use.                                  |         |
| Task ID          | Task ID                                                         |         |
| Custom Task ID   | When true, allows referencing a task by its custom task ID.     | false   |
| Team ID          | Only used when the custom_task_ids parameter is set to true.    |         |
| Include Subtasks | Include or exclude subtasks. By default, subtasks are excluded. | false   |

### Get Task Comments {#gettaskcomments}

List all comments on a task.

| Input          | Comments                                                     | Default |
| -------------- | ------------------------------------------------------------ | ------- |
| Connection     | The ClickUp connection to use.                               |         |
| Task ID        | Task ID                                                      |         |
| Custom Task ID | When true, allows referencing a task by its custom task ID.  | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true. |         |
| Start ID       | Enter the Comment id of a task comment.                      |         |
| Start Date     | Unix time in milliseconds.                                   |         |

### Get Task Members {#gettaskmembers}

List the members assigned to a task.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Task ID    | Task ID                        |         |

### Get Team {#getteam}

Retrieve user groups (Teams) in a workspace.

| Input      | Comments                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                                                         |         |
| Team ID    | Team ID (Workspace) value.                                                             |         |
| Group IDs  | Enter one or more Team IDs (user groups) to retrieve information about specific Teams. |         |

### Get Time Entries Within Date Range {#gettimeentrieswithindaterange}

List time entries filtered by start and end date. By default, returns entries from the last 30 days created by the authenticated user.

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The ClickUp connection to use.                                                                                |         |
| Team ID                | Team ID (Workspace) value.                                                                                    |         |
| Start Date             | Unix time in milliseconds.                                                                                    |         |
| End Date               | Unix time in milliseconds.                                                                                    |         |
| Assignee               | Filter by User ID                                                                                             |         |
| Include Task Tags      | When true, includes task tags in the response for time entries associated with tasks.                         | true    |
| Include Location Names | When true, includes the names of the List, Folder, and Space along with the list_id, folder_id, and space_id. | true    |
| Space ID               | Only include time entries associated with tasks in a specific Space.                                          |         |
| Folder ID              | Only include time entries associated with tasks in a specific Folder.                                         |         |
| List ID                | Only include time entries associated with tasks in a specific List.                                           |         |
| Task ID                | Only include time entries associated with a specific task.                                                    |         |
| Custom Task ID         | When true, allows referencing a task by its custom task ID.                                                   | false   |
| Custom Team ID         | Only used when the custom_task_ids parameter is set to true.                                                  |         |

### Get Time Entry {#getsingulartimeentry}

Retrieve a single time entry.

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The ClickUp connection to use.                                                                                |         |
| Team ID                | Team ID (Workspace) value.                                                                                    |         |
| Timer ID               | The ID of a time entry.                                                                                       |         |
| Include Task Tags      | When true, includes task tags in the response for time entries associated with tasks.                         | true    |
| Include Location Names | When true, includes the names of the List, Folder, and Space along with the list_id, folder_id, and space_id. | true    |

### Get User {#getuser}

Retrieve information about a user in a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Team ID    | Team ID (Workspace) value.     |         |
| User ID    | User ID value.                 |         |
| Connection | The ClickUp connection to use. |         |

### Get Workspace Plan {#getworkspaceplan}

Retrieve the current plan for a specified workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Team ID    | Team ID (Workspace) value.     |         |

### Get Workspace Seats {#getworkspaceseats}

Retrieve the used, total, and available member and guest seats for a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Team ID    | Team ID (Workspace) value.     |         |

### Invite Guest to Workspace {#inviteguesttoworkspace}

Invite a new guest to a workspace.

| Input                  | Comments                           | Default |
| ---------------------- | ---------------------------------- | ------- |
| Connection             | The ClickUp connection to use.     |         |
| Team ID                | Team ID (Workspace) value.         |         |
| Email                  | Email address of the invited guest |         |
| Can Edit Tags          |                                    | true    |
| Can See Time Spent     |                                    | true    |
| Can See Time Estimated |                                    | true    |
| Can Create Views       |                                    | true    |
| Custom Role ID         | Custom Role ID value.              |         |

### Invite User to Workspace {#inviteusertoworkspace}

Invite someone to join a workspace as a member.

| Input          | Comments                                        | Default |
| -------------- | ----------------------------------------------- | ------- |
| Team ID        | Team ID (Workspace) value.                      |         |
| Connection     | The ClickUp connection to use.                  |         |
| Email          | Email address of User being added               |         |
| Admin          | When true, grants admin privileges to the user. | true    |
| Custom Role ID | Custom Role ID value.                           |         |

### List Folders {#listfolders}

List all folders in a space.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Space ID   | Space ID value.                |         |
| Archived   | Archived?                      | false   |

### List Lists in Folder {#getlists}

List the lists within a folder.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Folder ID  | Folder ID                      |         |
| Archived   | Filter for archived Lists?     | false   |

### List Spaces {#listspaces}

List the spaces available in a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Team ID    | Team ID (Workspace) value.     |         |

### List Tasks {#listtasks}

List the tasks in a list.

| Input                     | Comments                                                                                                                        | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The ClickUp connection to use.                                                                                                  |         |
| List ID                   | Team ID (Workspace)                                                                                                             |         |
| Archived                  | Archived?                                                                                                                       | false   |
| Page                      | The page number for pagination.                                                                                                 | 0       |
| Order By                  | Order by a particular field. By default, tasks are ordered by created.                                                          |         |
| Reverse                   | When true, tasks are displayed in reverse order.                                                                                | false   |
| Include Subtasks          | Include or exclude subtasks. By default, subtasks are excluded.                                                                 | false   |
| Include Closed            | When true, includes closed tasks in the results. By default, they are excluded.                                                 | false   |
| Assignee                  | Filter by Assignees. Add Assingee                                                                                               |         |
| Tag                       | Filter by tags. Add a tag to filter.                                                                                            |         |
| Due Date Greater Than     | Filter by due date greater than Unix time in milliseconds.                                                                      |         |
| Due Date Less Than        | Filter by due date less than Unix time in milliseconds.                                                                         |         |
| Date Created Greater Than | Filter by date created greater than Unix time in milliseconds.                                                                  |         |
| Date Created Less Than    | Filter by date created less than Unix time in milliseconds.                                                                     |         |
| Date Updated Greater Than | Filter by date updated greater than Unix time in milliseconds.                                                                  |         |
| Date Updated Less Than    | Filter by date updated less than Unix time in milliseconds.                                                                     |         |
| Date Done Greater Than    | Filter by date done greater than Unix time in milliseconds.                                                                     |         |
| Date Done Less Than       | Filter by date done less than Unix time in milliseconds.                                                                        |         |
| Custom Fields             | JSON object containing an array of custom field filters. Each filter has a field_id, operator (=, <, >, <=, >=, !=), and value. |         |

### List Webhooks {#getwebhooks}

List all webhooks for a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Team ID    | Team ID (Workspace) value.     |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to the ClickUp API.

| Input                   | Comments                                                                                                                                                                                                                                             | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The ClickUp connection to use.                                                                                                                                                                                                                       |         |
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
| Connection     | The ClickUp connection to use.                                                    |         |
| Task ID        | Enter the task ID of the task you want to update.                                 |         |
| Field ID       | Enter the universal unique identifier (UUID) of the Custom Field you want to set. |         |
| Custom Task ID | If you want to reference a task by its Custom Task ID, this value must be true.   | true    |
| Team ID        | Only used when the custom_task_ids parameter is set to true                       |         |

### Remove Guest from Folder {#removeguestfromfolder}

Revoke a guest's access to a folder.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     | The ClickUp connection to use.                                                    |         |
| Folder ID      | Folder ID                                                                         |         |
| Guest ID       | Guest ID                                                                          |         |
| Include Shared | Exclude details of items shared with the guest by setting this parameter to false | true    |

### Remove Guest from List {#removeguestfromlist}

Revoke a guest's access to a list.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     | The ClickUp connection to use.                                                    |         |
| List ID        | List ID                                                                           |         |
| Guest ID       | Guest ID                                                                          |         |
| Include Shared | Exclude details of items shared with the guest by setting this parameter to false | true    |

### Remove Guest from Task {#removeguestfromtask}

Revoke a guest's access to a task.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     | The ClickUp connection to use.                                                    |         |
| Task ID        | Task ID                                                                           |         |
| Guest ID       | Guest ID                                                                          |         |
| Include Shared | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Custom Task ID | If you want to reference a task by its Custom Task ID, this value must be true.   | true    |
| Team ID        | Only used when the custom_task_ids parameter is set to true                       |         |

### Remove Guest from Workspace {#removeguestfromworkspace}

Revoke a guest's access to a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Team ID    | Team ID (Workspace) value.     |         |
| Guest ID   | Guest ID                       |         |

### Remove Task from List {#removetaskfromlist}

Remove a task from an additional list. A task cannot be removed from its home list.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| List ID    | List ID                        |         |
| Task ID    | Task ID                        |         |

### Remove User from Workspace {#removeuserfromworkspace}

Deactivate a user from a workspace.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Team ID    | Team ID (Workspace) value.     |         |
| Connection | The ClickUp connection to use. |         |
| User ID    | User ID value.                 |         |

### Set Custom Field Value {#setcustomfieldvalue}

Update the value of a Custom Field on a task.

| Input       | Comments                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------- | ------- |
| Connection  | The ClickUp connection to use.                                                    |         |
| Task ID     | Enter the task ID of the task you want to update.                                 |         |
| Field ID    | Enter the universal unique identifier (UUID) of the Custom Field you want to set. |         |
| Field Value | The value to set for the custom field.                                            |         |
| Value Type  | The type of the value being set.                                                  |         |

### Start Time Entry {#starttimeentry}

Start a timer for the authenticated user.

| Input          | Comments                                                     | Default |
| -------------- | ------------------------------------------------------------ | ------- |
| Connection     | The ClickUp connection to use.                               |         |
| Team ID        | Team ID (Workspace) value.                                   |         |
| Custom Task ID | When true, allows referencing a task by its custom task ID.  | false   |
| Custom Team ID | Only used when the custom_task_ids parameter is set to true. |         |
| Description    | Description                                                  |         |
| Billable       | Billable                                                     | false   |
| Task ID        | Associate a time entry with a task by ID                     |         |
| Tag name       | Add a tag name                                               |         |

### Stop Time Entry {#stoptimeentry}

Stop the timer that is currently running for the authenticated user.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Team ID    | Team ID (Workspace) value.     |         |

### Update Comment {#updatecomment}

Replace the content of a task comment, assign a comment, and mark a comment as resolved.

| Input        | Comments                       | Default |
| ------------ | ------------------------------ | ------- |
| Connection   | The ClickUp connection to use. |         |
| Comment ID   | Comment ID                     |         |
| Comment Text | Comment Text                   |         |
| Resolved     | Resolved?                      | false   |
| Assignee     | Assignee by ID.                |         |

### Update Folder {#updatefolder}

Rename a folder.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |
| Folder ID  | Folder ID                      |         |
| Name       | The name of the folder.        |         |

### Update List {#updatelist}

Update a list's name, info description, due date/time, priority, assignee, and color.

| Input         | Comments                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection    | The ClickUp connection to use.                                                       |         |
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

Rename a space, set its color, and enable ClickApps for the space.

| Input                     | Comments                                                      | Default |
| ------------------------- | ------------------------------------------------------------- | ------- |
| Connection                | The ClickUp connection to use.                                |         |
| Space ID                  | Space ID value.                                               |         |
| Space Name                | Space Name.                                                   |         |
| Multiple Assignees        | When true, the Space allows multiple assignees on tasks.      | true    |
| Enable Due Dates          | When true, enables due dates for tasks in the Space.          | true    |
| Use Start Date            | When true, enables start dates for tasks in the Space.        | true    |
| Remap Due Dates           | When true, remaps due dates when tasks are moved.             | true    |
| Remap closed Due Dates    | When true, remaps due dates for closed tasks when moved.      | false   |
| Enable Time Tracking      | When true, enables time tracking for tasks in the Space.      | true    |
| Enable Tags               | When true, enables tags for tasks in the Space.               | true    |
| Enable Time Estimates     | When true, enables time estimates for tasks in the Space.     | true    |
| Enable Checklists         | When true, enables checklists for tasks in the Space.         | true    |
| Enable Custom Fields      | When true, enables custom fields for tasks in the Space.      | true    |
| Enable Remap Dependencies | When true, enables remapping of task dependencies when moved. | true    |
| Enable Dependency Warning | When true, enables warnings for task dependency conflicts.    | true    |
| Enable Portfolios         | When true, enables portfolios for the Space.                  | true    |
| Color                     | Hex color code.                                               |         |
| Private                   | When true, the Space is private.                              | true    |
| Admin Can Manage          | When true, admins can manage the Space.                       | true    |

### Update Task {#updatetask}

Update an existing task.

| Input                | Comments                                                                                  | Default |
| -------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection           | The ClickUp connection to use.                                                            |         |
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

Update a user group (Team) of users that can be assigned to items in a workspace.

| Input         | Comments                                                                                        | Default |
| ------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection    | The ClickUp connection to use.                                                                  |         |
| Group ID      | Team ID (user group).                                                                           |         |
| Team Name     | Desired Team Name.                                                                              |         |
| Team Handle   | You may update the team handle which is used to @mention a Team (user group) in your Workspace. |         |
| Add Member    | Add members by ID. Comma separate each user ID.                                                 |         |
| Remove Member | Remove members by ID. Comma separate each user ID.                                              |         |

### Update Time Entry {#updatetimeentry}

Update the details of a time entry.

| Input          | Comments                                                                                                                       | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The ClickUp connection to use.                                                                                                 |         |
| Team ID        | Team ID (Workspace) value.                                                                                                     |         |
| Custom Task ID | When true, allows referencing a task by its custom task ID.                                                                    | false   |
| Custom Team ID | Only used when the custom_task_ids parameter is set to true.                                                                   |         |
| Description    | Description                                                                                                                    |         |
| Start          | Start time                                                                                                                     |         |
| Billable       | Billable                                                                                                                       | false   |
| Duration       | Duration                                                                                                                       |         |
| Assignee       | Workspace owners and admins can include unknown user id. Workspace members can only include their own user id.                 |         |
| Task ID        | Associate a time entry with a task by ID                                                                                       |         |
| Timer ID       | The ID of a time entry.                                                                                                        |         |
| Tag Action     | Tag Action (use replace, add or remove).                                                                                       |         |
| End            | End time                                                                                                                       |         |
| Tags           | JSON object containing an array of tag objects with name, background color (tag_bg), and foreground color (tag_fg) properties. |         |

### Update Webhook {#updatewebhook}

Update the configuration of a webhook.

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                                      |         |
| Webhook ID | Webhook ID                                                          |         |
| Endpoint   | URL of the webhook endpoint.                                        |         |
| All Events | When true, subscribes to all events and overrides the event inputs. | false   |
| Event      | Event type to trigger the webhook.                                  |         |
| Status     | Status                                                              |         |
