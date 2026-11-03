---
title: ClickUp Connector
sidebar_label: ClickUp
description: Manage tasks, lists, spaces, time tracking, and team members in ClickUp.
---

![ClickUp](./assets/click-up.png#connector-icon)
[ClickUp](https://clickup.com/) is a CRM, collaboration, knowledge base, and project management tool.

This component allows managing tasks, lists, folders, and spaces in a ClickUp Workspace.

## API Documentation

This component was built using the [ClickUp API](https://developer.clickup.com/) currently utilizing v2.

## Connections

### OAuth 2.0 {#clickupoauth2connection}

Authenticate using OAuth 2.0.

To make API requests to ClickUp on behalf of end customers, an "App" must be created within ClickUp. See the [ClickUp Authentication documentation](https://developer.clickup.com/docs/authentication) for full details.

#### Prerequisites

- A ClickUp account with the Workspace owner or admin role

#### Setup Steps

1. Log into ClickUp.
2. Click the avatar in the upper-right corner and select **Settings**.
3. In the sidebar, click **Apps**.
4. Click **Create new app**.
5. Provide an app name and set the redirect URL to `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
6. Once the app is created, copy the **Client ID** and **Client Secret**.

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the ClickUp app.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Client ID     | The Client ID from the ClickUp OAuth app. Create an OAuth app via the [ClickUp Developer Portal](https://developer.clickup.com/docs/authentication).     |         |
| Client Secret | The Client Secret from the ClickUp OAuth app. Create an OAuth app via the [ClickUp Developer Portal](https://developer.clickup.com/docs/authentication). |         |

### Personal Access Token {#apikey}

Authenticate using a personal access token.

To make API requests to ClickUp using a personal access token, follow the steps below. For full details, see the [ClickUp Authentication documentation](https://developer.clickup.com/docs/authentication).

#### Prerequisites

- A ClickUp account

#### Setup Steps

1. Log into ClickUp.
2. Click the avatar in the upper-right corner and select **Settings**.
3. In the sidebar, click **Apps**.
4. Under **API Token**, click **Generate**.
5. Copy the personal access token.

#### Configure the Connection

- Enter the **Personal Access Token** into the connection configuration.

| Input                 | Comments                                                                                                                                                                                                                        | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Personal Access Token | The ClickUp Personal Access Token used to authenticate API requests. Generate one in ClickUp Settings > Apps > API Token. See the [ClickUp Authentication docs](https://developer.clickup.com/docs/authentication) for details. |         |

## Triggers

### New and Updated Tasks {#pollchangestrigger}

Retrieves existing and ongoing tasks for a specified ClickUp workspace or list. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                                                            | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The ClickUp connection to use.                                                                                                                                                                                                                                                      |         |
| Scope                | Whether to poll tasks across an entire Team (Workspace) or scoped to a single List.                                                                                                                                                                                                 |         |
| Scope ID             | The Team ID or List ID to monitor for changes, depending on the Scope selected above.                                                                                                                                                                                               |         |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record modified on or after this date once, ignoring the field and visibility filters. |         |
| Show New Records     | When true, tasks created since the last poll are returned in the trigger payload.                                                                                                                                                                                                   | true    |
| Show Updated Records | When true, tasks updated since the last poll are returned in the trigger payload.                                                                                                                                                                                                   | true    |

### Webhook {#webhook}

Receive and validate webhook requests from ClickUp for manually configured webhook subscriptions.

## Actions

### Add Guest to Folder {#addguesttofolder}

Share a folder with a guest.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The ClickUp connection to use.                                                            |         |
| Folder ID        | The unique identifier for the Folder.                                                     |         |
| Guest ID         | The unique identifier for the guest.                                                      |         |
| Permission Level | Can be read (view only), comment, edit, or create (full).                                 | create  |
| Include Shared   | When true, includes details of items shared with the guest. Set to false to exclude them. | true    |

### Add Guest to List {#addguesttolist}

Share a list with a guest.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The ClickUp connection to use.                                                            |         |
| List ID          | The unique identifier for the List.                                                       |         |
| Guest ID         | The unique identifier for the guest.                                                      |         |
| Permission Level | Can be read (view only), comment, edit, or create (full).                                 | create  |
| Include Shared   | When true, includes details of items shared with the guest. Set to false to exclude them. | true    |

### Add Guest to Task {#addguesttotask}

Share a task with a guest.

| Input            | Comments                                                                                  | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection       | The ClickUp connection to use.                                                            |         |
| Task ID          | The unique identifier for the task.                                                       |         |
| Guest ID         | The unique identifier for the guest.                                                      |         |
| Permission Level | Can be read (view only), comment, edit, or create (full).                                 |         |
| Include Shared   | When true, includes details of items shared with the guest. Set to false to exclude them. | true    |
| Custom Task ID   | When true, the Task ID is treated as a custom task ID. Requires Team ID.                  | true    |
| Team ID          | Only used when the custom_task_ids parameter is set to true                               |         |

### Add Task to List {#addtasktolist}

Add a task to an additional list.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The ClickUp connection to use.      |         |
| List ID    | The unique identifier for the List. |         |
| Task ID    | The unique identifier for the task. |         |

### Create Folder {#createfolder}

Add a new folder to a space.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The ClickUp connection to use.       |         |
| Space ID   | The unique identifier for the Space. |         |
| Name       | The name of the folder.              |         |

### Create List {#createlist}

Add a new list to a folder.

| Input         | Comments                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection    | The ClickUp connection to use.                                                       |         |
| Folder ID     | The unique identifier for the Folder.                                                |         |
| Name          | Name of the new list                                                                 |         |
| Content       | The description of the List, in plain text.                                          |         |
| Due Date      | Initial due date of the new list                                                     |         |
| Due Date Time | When true, the Due Date includes a time of day rather than only a date.              | false   |
| Priority      | Initial priority of the new list                                                     |         |
| Assignee      | Include a user_id to assign this List.                                               |         |
| Status        | Status refers to the List color rather than the task Statuses available in the List. |         |
| Name          | Name of the new list                                                                 |         |

### Create Space {#createspace}

Add a new space to a workspace.

| Input                     | Comments                                                      | Default |
| ------------------------- | ------------------------------------------------------------- | ------- |
| Connection                | The ClickUp connection to use.                                |         |
| Team ID                   | The unique identifier for the Team (Workspace).               |         |
| Space Name                | The display name of the Space.                                |         |
| Multiple Assignees        | When true, the Space allows multiple assignees on tasks.      | true    |
| Enable Due Dates          | When true, enables due dates for tasks in the Space.          | true    |
| Use Start Date            | When true, enables start dates for tasks in the Space.        | true    |
| Remap Due Dates           | When true, remaps due dates when tasks are moved.             | true    |
| Remap Closed Due Dates    | When true, remaps due dates for closed tasks when moved.      | false   |
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

| Input                        | Comments                                                                                                                                          | Default         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection                   | The ClickUp connection to use.                                                                                                                    |                 |
| List ID                      | The unique identifier for the List.                                                                                                               |                 |
| Name                         | The name of the task.                                                                                                                             |                 |
| Custom Task ID               | When true, task IDs in this request are treated as custom task IDs. Requires Team ID.                                                             | false           |
| Team ID                      | Only used when the custom_task_ids parameter is set to true.                                                                                      |                 |
| Description                  | The description of the task.                                                                                                                      |                 |
| Assignee                     | User IDs of the people to assign to the task.                                                                                                     | <code>[]</code> |
| Tag                          | Tag names to apply to the task.                                                                                                                   | <code>[]</code> |
| Status                       | The name of the status to apply to the task, as configured in the List.                                                                           |                 |
| Priority                     | The task priority: 1 (Urgent), 2 (High), 3 (Normal), or 4 (Low).                                                                                  |                 |
| Schedule                     | Start and due dates, whether each includes a time of day, and time estimate.                                                                      |                 |
| Start Date                   | The task start date as a Unix timestamp in milliseconds.                                                                                          |                 |
| Start Date Time              | When true, the Start Date includes a time of day rather than only a date.                                                                         | false           |
| Due Date                     | The task due date as a Unix timestamp in milliseconds.                                                                                            |                 |
| Due Date Time                | When true, the Due Date includes a time of day rather than only a date.                                                                           | false           |
| Time Estimate                | The time estimate for the task, in milliseconds.                                                                                                  |                 |
| Parent                       | An existing task ID to create this task as a subtask of. The parent task cannot itself be a subtask and must be in the List specified by List ID. |                 |
| Links To                     | A task ID to create a linked dependency with the new task.                                                                                        |                 |
| Additional Fields            | Additional optional fields: includes Markdown Description, Notify All, and Check Required Custom Fields.                                          |                 |
| Markdown Description         | Markdown formatted description.                                                                                                                   |                 |
| Notify All                   | When true, sends notifications to everyone, including the creator of the task.                                                                    | true            |
| Check Required Custom Fields | When true, enforces required Custom Fields when creating the task. By default, they are ignored.                                                  | false           |
| Custom Fields                | Custom field key-value pairs to set on the task.                                                                                                  | <code>[]</code> |

### Create Task Attachment {#createtaskattachment}

Upload a file to a task as an attachment.

| Input          | Comments                                                     | Default |
| -------------- | ------------------------------------------------------------ | ------- |
| Connection     | The ClickUp connection to use.                               |         |
| Task ID        | The unique identifier for the task.                          |         |
| File           | File to attach.                                              |         |
| File Name      | Name of the file to attach.                                  |         |
| Custom Task ID | When true, allows referencing a task by its custom task ID.  | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true. |         |

### Create Task Comment {#createtaskcomment}

Add a new comment to a task.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     | The ClickUp connection to use.                                                    |         |
| Task ID        | The unique identifier for the task.                                               |         |
| Comment Text   | The text content of the comment.                                                  |         |
| Notify All     | When true, sends notifications to everyone, including the creator of the comment. | true    |
| Custom Task ID | When true, allows referencing a task by its custom task ID.                       | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true.                      |         |
| Assignee       | The user ID of the person to assign the comment to.                               |         |

### Create Team {#createteam}

Create a user group (Team) of users that can be assigned to items in a workspace.

| Input      | Comments                                        | Default         |
| ---------- | ----------------------------------------------- | --------------- |
| Connection | The ClickUp connection to use.                  |                 |
| Team ID    | The unique identifier for the Team (Workspace). |                 |
| Name       | Desired Team Name.                              |                 |
| Member     | Add user by ID.                                 | <code>[]</code> |

### Create Time Entry {#createtimeentry}

Create a time entry.

| Input          | Comments                                                                                                                            | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The ClickUp connection to use.                                                                                                      |         |
| Team ID        | The unique identifier for the Team (Workspace).                                                                                     |         |
| Custom Task ID | When true, allows referencing a task by its custom task ID.                                                                         | false   |
| Custom Team ID | Only used when the custom_task_ids parameter is set to true.                                                                        |         |
| Description    | The description of the time entry.                                                                                                  |         |
| Start          | The start time of the time entry as a Unix timestamp in milliseconds.                                                               |         |
| Billable       | When true, marks the time entry as billable.                                                                                        | false   |
| Duration       | The duration of the time entry, in milliseconds.                                                                                    |         |
| Assignee       | The user ID to assign the time entry to. Workspace owners and admins can use any user ID; Workspace members can only use their own. |         |
| Task ID        | Associate a time entry with a task by ID                                                                                            |         |
| Tags           | JSON object containing an array of tag objects with name, background color (tag_bg), and foreground color (tag_fg) properties.      |         |

### Create Webhook {#createwebhook}

Create a new webhook for a workspace, space, folder, list, or task.

| Input      | Comments                                        | Default         |
| ---------- | ----------------------------------------------- | --------------- |
| Connection | The ClickUp connection to use.                  |                 |
| Team ID    | The unique identifier for the Team (Workspace). |                 |
| Space ID   | The unique identifier for the Space.            |                 |
| Folder ID  | The unique identifier for the Folder.           |                 |
| List ID    | The unique identifier for the List.             |                 |
| Endpoint   | URL of the webhook endpoint.                    |                 |
| Event      | Event type to trigger the webhook.              | <code>[]</code> |
| Task ID    | The unique identifier for the task.             |                 |

### Delete Comment {#deletecomment}

Delete a task comment.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The ClickUp connection to use.         |         |
| Comment ID | The unique identifier for the comment. |         |

### Delete Folder {#deletefolder}

Delete a folder from a workspace.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The ClickUp connection to use.        |         |
| Folder ID  | The unique identifier for the Folder. |         |

### Delete List {#deletelist}

Delete a list from a workspace.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The ClickUp connection to use.      |         |
| List ID    | The unique identifier for the List. |         |

### Delete Space {#deletespace}

Delete a space from a workspace.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The ClickUp connection to use.       |         |
| Space ID   | The unique identifier for the Space. |         |

### Delete Task {#deletetask}

Delete a task from a workspace.

| Input          | Comments                                                     | Default |
| -------------- | ------------------------------------------------------------ | ------- |
| Connection     | The ClickUp connection to use.                               |         |
| Task ID        | The unique identifier for the task.                          |         |
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

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                  |         |
| Team ID    | The unique identifier for the Team (Workspace). |         |
| Timer ID   | The ID of a time entry.                         |         |

### Delete Webhook {#deletewebhook}

Delete a webhook.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The ClickUp connection to use.         |         |
| Webhook ID | The unique identifier for the webhook. |         |

### Edit Guest on Workspace {#editguestonworkspace}

Rename and configure options for a guest.

| Input                  | Comments                                              | Default |
| ---------------------- | ----------------------------------------------------- | ------- |
| Connection             | The ClickUp connection to use.                        |         |
| Team ID                | The unique identifier for the Team (Workspace).       |         |
| Username               | The new username for the guest in the Workspace.      |         |
| Can Edit Tags          | When true, the guest can edit tags.                   | true    |
| Can See Time Spent     | When true, the guest can see time spent on tasks.     | true    |
| Can See Time Estimated | When true, the guest can see time estimates on tasks. | true    |
| Can Create Views       | When true, the guest can create views.                | true    |
| Custom Role ID         | The unique identifier for the custom role to assign.  |         |
| Guest ID               | The unique identifier for the guest.                  |         |

### Edit User on Workspace {#edituseronworkspace}

Update a user's name and role on a workspace.

| Input          | Comments                                                                     | Default |
| -------------- | ---------------------------------------------------------------------------- | ------- |
| Team ID        | The unique identifier for the Team (Workspace).                              |         |
| Connection     | The ClickUp connection to use.                                               |         |
| Admin          | When true, grants admin privileges to the user.                              | true    |
| Custom Role ID | The unique identifier for the custom role to assign.                         |         |
| User ID        | The unique identifier for the user.                                          |         |
| Username       | The new display name for the user. Leave empty to keep the current username. |         |

### Get Accessible Custom Fields {#getaccessiblecustomfields}

List the custom fields available on tasks in a specific list.

| Input      | Comments                                                             | Default |
| ---------- | -------------------------------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                                       |         |
| List ID    | The unique identifier for the List whose Custom Fields are returned. |         |

### Get Authorized Workspaces {#getauthorizedteams}

List the workspaces available to the authenticated user.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The ClickUp connection to use. |         |

### Get Folder {#getfolder}

Retrieve a folder and its lists.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The ClickUp connection to use.        |         |
| Folder ID  | The unique identifier for the Folder. |         |

### Get Guest {#getguest}

Retrieve information about a guest in a workspace.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                  |         |
| Team ID    | The unique identifier for the Team (Workspace). |         |
| Guest ID   | The unique identifier for the guest.            |         |

### Get List {#getlist}

Retrieve details for a specific list.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The ClickUp connection to use.      |         |
| List ID    | The unique identifier for the List. |         |

### Get List Members {#getlistmembers}

List the people who have access to a list.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The ClickUp connection to use.      |         |
| List ID    | The unique identifier for the List. |         |

### Get Space {#getspace}

Retrieve details for a specific space by ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The ClickUp connection to use.       |         |
| Space ID   | The unique identifier for the Space. |         |

### Get Task {#gettask}

Retrieve information about a task.

| Input            | Comments                                                                        | Default |
| ---------------- | ------------------------------------------------------------------------------- | ------- |
| Connection       | The ClickUp connection to use.                                                  |         |
| Task ID          | The unique identifier for the task.                                             |         |
| Team ID          | Only used when the custom_task_ids parameter is set to true.                    |         |
| Custom Task ID   | When true, allows referencing a task by its custom task ID.                     | false   |
| Include Subtasks | When true, includes subtasks in the results. By default, subtasks are excluded. | false   |

### Get Task Comments {#gettaskcomments}

List all comments on a task.

| Input          | Comments                                                                                                            | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The ClickUp connection to use.                                                                                      |         |
| Task ID        | The unique identifier for the task.                                                                                 |         |
| Custom Task ID | When true, allows referencing a task by its custom task ID.                                                         | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true.                                                        |         |
| Pagination     | Start timestamp and start ID cursor controls for paging through results.                                            |         |
| Start Date     | Unix time in milliseconds.                                                                                          |         |
| Start ID       | The ID of the oldest comment from the previous response. Use with Start Date to retrieve the next page of comments. |         |

### Get Task Members {#gettaskmembers}

List the members assigned to a task.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The ClickUp connection to use.      |         |
| Task ID    | The unique identifier for the task. |         |

### Get Team {#getteam}

Retrieve user groups (Teams) in a workspace.

| Input      | Comments                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                                                         |         |
| Team ID    | The unique identifier for the Team (Workspace).                                        |         |
| Group IDs  | Enter one or more Team IDs (user groups) to retrieve information about specific Teams. |         |

### Get Time Entries Within Date Range {#gettimeentrieswithindaterange}

List time entries filtered by start and end date. By default, returns entries from the last 30 days created by the authenticated user.

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The ClickUp connection to use.                                                                                |         |
| Team ID                | The unique identifier for the Team (Workspace).                                                               |         |
| Space ID               | Only include time entries associated with tasks in a specific Space.                                          |         |
| Folder ID              | Only include time entries associated with tasks in a specific Folder.                                         |         |
| List ID                | Only include time entries associated with tasks in a specific List.                                           |         |
| Start Date             | Unix time in milliseconds.                                                                                    |         |
| End Date               | Unix time in milliseconds.                                                                                    |         |
| Assignee               | Filter by User ID                                                                                             |         |
| Include Task Tags      | When true, includes task tags in the response for time entries associated with tasks.                         | true    |
| Include Location Names | When true, includes the names of the List, Folder, and Space along with the list_id, folder_id, and space_id. | true    |
| Task ID                | Only include time entries associated with a specific task.                                                    |         |
| Custom Task ID         | When true, allows referencing a task by its custom task ID.                                                   | false   |
| Custom Team ID         | Only used when the custom_task_ids parameter is set to true.                                                  |         |

### Get Time Entry {#getsingulartimeentry}

Retrieve a single time entry.

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The ClickUp connection to use.                                                                                |         |
| Team ID                | The unique identifier for the Team (Workspace).                                                               |         |
| Timer ID               | The ID of a time entry.                                                                                       |         |
| Include Task Tags      | When true, includes task tags in the response for time entries associated with tasks.                         | true    |
| Include Location Names | When true, includes the names of the List, Folder, and Space along with the list_id, folder_id, and space_id. | true    |

### Get User {#getuser}

Retrieve information about a user in a workspace.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Team ID    | The unique identifier for the Team (Workspace). |         |
| User ID    | The unique identifier for the user.             |         |
| Connection | The ClickUp connection to use.                  |         |

### Get Workspace Plan {#getworkspaceplan}

Retrieve the current plan for a specified workspace.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                  |         |
| Team ID    | The unique identifier for the Team (Workspace). |         |

### Get Workspace Seats {#getworkspaceseats}

Retrieve the used, total, and available member and guest seats for a workspace.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                  |         |
| Team ID    | The unique identifier for the Team (Workspace). |         |

### Invite Guest to Workspace {#inviteguesttoworkspace}

Invite a new guest to a workspace.

| Input                  | Comments                                              | Default |
| ---------------------- | ----------------------------------------------------- | ------- |
| Connection             | The ClickUp connection to use.                        |         |
| Team ID                | The unique identifier for the Team (Workspace).       |         |
| Email                  | Email address of the invited guest                    |         |
| Can Edit Tags          | When true, the guest can edit tags.                   | true    |
| Can See Time Spent     | When true, the guest can see time spent on tasks.     | true    |
| Can See Time Estimated | When true, the guest can see time estimates on tasks. | true    |
| Can Create Views       | When true, the guest can create views.                | true    |
| Custom Role ID         | The unique identifier for the custom role to assign.  |         |

### Invite User to Workspace {#inviteusertoworkspace}

Invite someone to join a workspace as a member.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Team ID        | The unique identifier for the Team (Workspace).      |         |
| Connection     | The ClickUp connection to use.                       |         |
| Email          | Email address of User being added                    |         |
| Admin          | When true, grants admin privileges to the user.      | true    |
| Custom Role ID | The unique identifier for the custom role to assign. |         |

### List Folders {#listfolders}

List all folders in a space.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The ClickUp connection to use.       |         |
| Space ID   | The unique identifier for the Space. |         |
| Archived   | When true, returns archived Folders. | false   |

### List Lists in Folder {#getlists}

List the lists within a folder.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The ClickUp connection to use.        |         |
| Folder ID  | The unique identifier for the Folder. |         |
| Archived   | When true, returns archived Lists.    | false   |

### List Spaces {#listspaces}

List the spaces available in a workspace.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                  |         |
| Team ID    | The unique identifier for the Team (Workspace). |         |

### List Tasks {#listtasks}

List the tasks in a list.

| Input                     | Comments                                                                                                                        | Default         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection                | The ClickUp connection to use.                                                                                                  |                 |
| List ID                   | The unique identifier for the List whose tasks are returned.                                                                    |                 |
| Page                      | The page number to retrieve (starts at 0).                                                                                      | 0               |
| Include Subtasks          | When true, includes subtasks in the results. By default, subtasks are excluded.                                                 | false           |
| Filters                   | Optional query controls to sort and refine the results.                                                                         |                 |
| Order By                  | Order by a particular field. By default, tasks are ordered by created.                                                          |                 |
| Reverse                   | When true, tasks are displayed in reverse order.                                                                                | false           |
| Archived                  | When true, returns archived tasks.                                                                                              | false           |
| Include Closed            | When true, includes closed tasks in the results. By default, they are excluded.                                                 | false           |
| Custom Fields             | JSON object containing an array of custom field filters. Each filter has a field_id, operator (=, <, >, <=, >=, !=), and value. |                 |
| Assignee                  | User IDs to filter tasks by assignee.                                                                                           | <code>[]</code> |
| Tag                       | Filter by tags. Add a tag to filter.                                                                                            | <code>[]</code> |
| Date Range Filters        | Optional date-range filters. Narrow results by when tasks are due, were created, were last updated, or were done.               |                 |
| Due Date Greater Than     | Filter by due date greater than Unix time in milliseconds.                                                                      |                 |
| Due Date Less Than        | Filter by due date less than Unix time in milliseconds.                                                                         |                 |
| Date Created Greater Than | Filter by date created greater than Unix time in milliseconds.                                                                  |                 |
| Date Created Less Than    | Filter by date created less than Unix time in milliseconds.                                                                     |                 |
| Date Updated Greater Than | Filter by date updated greater than Unix time in milliseconds.                                                                  |                 |
| Date Updated Less Than    | Filter by date updated less than Unix time in milliseconds.                                                                     |                 |
| Date Done Greater Than    | Filter by date done greater than Unix time in milliseconds.                                                                     |                 |
| Date Done Less Than       | Filter by date done less than Unix time in milliseconds.                                                                        |                 |

### List Webhooks {#getwebhooks}

List all webhooks for a workspace.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                  |         |
| Team ID    | The unique identifier for the Team (Workspace). |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to the ClickUp API.

| Input                   | Comments                                                                                                                                                                                                                                             | Default         |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection              | The ClickUp connection to use.                                                                                                                                                                                                                       |                 |
| URL                     | Input the path only (/space/${spaceId}/tag), The base URL is already included (https://api.clickup.com/api/v2). For example, to connect to https://api.clickup.com/api/v2/space/${spaceId}/tag, only /space/${spaceId}/tag is entered in this field. |                 |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                              |                 |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                            |                 |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                 | <code>[]</code> |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                     | <code>[]</code> |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                               | <code>[]</code> |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                  | <code>[]</code> |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                          | <code>[]</code> |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                             | json            |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                  |                 |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                  | 0               |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                     | false           |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                  | 0               |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                        | false           |

### Remove Custom Field Value {#removecustomfieldvalue}

Remove the data from a Custom Field on a task. This does not delete the option from the Custom Field.

| Input          | Comments                                                                 | Default |
| -------------- | ------------------------------------------------------------------------ | ------- |
| Connection     | The ClickUp connection to use.                                           |         |
| Task ID        | The unique identifier for the task to update.                            |         |
| Field ID       | The universal unique identifier (UUID) of the Custom Field.              |         |
| Custom Task ID | When true, the Task ID is treated as a custom task ID. Requires Team ID. | true    |
| Team ID        | Only used when the custom_task_ids parameter is set to true              |         |

### Remove Guest from Folder {#removeguestfromfolder}

Revoke a guest's access to a folder.

| Input          | Comments                                                                                  | Default |
| -------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection     | The ClickUp connection to use.                                                            |         |
| Folder ID      | The unique identifier for the Folder.                                                     |         |
| Guest ID       | The unique identifier for the guest.                                                      |         |
| Include Shared | When true, includes details of items shared with the guest. Set to false to exclude them. | true    |

### Remove Guest from List {#removeguestfromlist}

Revoke a guest's access to a list.

| Input          | Comments                                                                                  | Default |
| -------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection     | The ClickUp connection to use.                                                            |         |
| List ID        | The unique identifier for the List.                                                       |         |
| Guest ID       | The unique identifier for the guest.                                                      |         |
| Include Shared | When true, includes details of items shared with the guest. Set to false to exclude them. | true    |

### Remove Guest from Task {#removeguestfromtask}

Revoke a guest's access to a task.

| Input          | Comments                                                                                  | Default |
| -------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection     | The ClickUp connection to use.                                                            |         |
| Task ID        | The unique identifier for the task.                                                       |         |
| Guest ID       | The unique identifier for the guest.                                                      |         |
| Include Shared | When true, includes details of items shared with the guest. Set to false to exclude them. | true    |
| Custom Task ID | When true, the Task ID is treated as a custom task ID. Requires Team ID.                  | true    |
| Team ID        | Only used when the custom_task_ids parameter is set to true                               |         |

### Remove Guest from Workspace {#removeguestfromworkspace}

Revoke a guest's access to a workspace.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                  |         |
| Team ID    | The unique identifier for the Team (Workspace). |         |
| Guest ID   | The unique identifier for the guest.            |         |

### Remove Task from List {#removetaskfromlist}

Remove a task from an additional list. A task cannot be removed from its home list.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The ClickUp connection to use.      |         |
| List ID    | The unique identifier for the List. |         |
| Task ID    | The unique identifier for the task. |         |

### Remove User from Workspace {#removeuserfromworkspace}

Deactivate a user from a workspace.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Team ID    | The unique identifier for the Team (Workspace). |         |
| Connection | The ClickUp connection to use.                  |         |
| User ID    | The unique identifier for the user.             |         |

### Set Custom Field Value {#setcustomfieldvalue}

Update the value of a Custom Field on a task.

| Input       | Comments                                                                                                                      | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The ClickUp connection to use.                                                                                                |         |
| Task ID     | The unique identifier for the task to update.                                                                                 |         |
| Field ID    | The universal unique identifier (UUID) of the Custom Field.                                                                   |         |
| Field Value | The value to set for the custom field.                                                                                        |         |
| Value Type  | Set to date when Field Value is a date, so it is converted to a Unix timestamp in milliseconds. Leave empty for other values. |         |

### Start Time Entry {#starttimeentry}

Start a timer for the authenticated user.

| Input          | Comments                                                     | Default         |
| -------------- | ------------------------------------------------------------ | --------------- |
| Connection     | The ClickUp connection to use.                               |                 |
| Team ID        | The unique identifier for the Team (Workspace).              |                 |
| Description    | The description of the time entry.                           |                 |
| Billable       | When true, marks the time entry as billable.                 | false           |
| Task ID        | Associate a time entry with a task by ID                     |                 |
| Tag Name       | Add a tag name                                               | <code>[]</code> |
| Custom Task ID | When true, allows referencing a task by its custom task ID.  | false           |
| Custom Team ID | Only used when the custom_task_ids parameter is set to true. |                 |

### Stop Time Entry {#stoptimeentry}

Stop the timer that is currently running for the authenticated user.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The ClickUp connection to use.                  |         |
| Team ID    | The unique identifier for the Team (Workspace). |         |

### Update Comment {#updatecomment}

Replace the content of a task comment, assign a comment, and mark a comment as resolved.

| Input        | Comments                                            | Default |
| ------------ | --------------------------------------------------- | ------- |
| Connection   | The ClickUp connection to use.                      |         |
| Comment ID   | The unique identifier for the comment.              |         |
| Comment Text | The text content of the comment.                    |         |
| Resolved     | When true, marks the comment as resolved.           | false   |
| Assignee     | The user ID of the person to assign the comment to. |         |

### Update Folder {#updatefolder}

Rename a folder.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The ClickUp connection to use.        |         |
| Folder ID  | The unique identifier for the Folder. |         |
| Name       | The name of the folder.               |         |

### Update List {#updatelist}

Update a list's name, info description, due date/time, priority, assignee, and color.

| Input         | Comments                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection    | The ClickUp connection to use.                                                       |         |
| List ID       | The unique identifier for the List.                                                  |         |
| Name          | Name of the list                                                                     |         |
| Content       | The description of the List, in plain text.                                          |         |
| Due Date      | Due date of the list                                                                 |         |
| Due Date Time | When true, the Due Date includes a time of day rather than only a date.              | false   |
| Priority      | Priority of the list                                                                 |         |
| Assignee      | User ID of the list assignee                                                         |         |
| Status        | Status refers to the List color rather than the task Statuses available in the List. |         |
| Unset Status  | When true, removes the List color.                                                   | false   |

### Update Space {#updatespace}

Rename a space, set its color, and enable ClickApps for the space.

| Input                     | Comments                                                      | Default |
| ------------------------- | ------------------------------------------------------------- | ------- |
| Connection                | The ClickUp connection to use.                                |         |
| Space ID                  | The unique identifier for the Space.                          |         |
| Space Name                | The display name of the Space.                                |         |
| Multiple Assignees        | When true, the Space allows multiple assignees on tasks.      | true    |
| Enable Due Dates          | When true, enables due dates for tasks in the Space.          | true    |
| Use Start Date            | When true, enables start dates for tasks in the Space.        | true    |
| Remap Due Dates           | When true, remaps due dates when tasks are moved.             | true    |
| Remap Closed Due Dates    | When true, remaps due dates for closed tasks when moved.      | false   |
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

| Input                | Comments                                                                              | Default         |
| -------------------- | ------------------------------------------------------------------------------------- | --------------- |
| Connection           | The ClickUp connection to use.                                                        |                 |
| Task ID              | The unique identifier for the task.                                                   |                 |
| Custom Task ID       | When true, task IDs in this request are treated as custom task IDs. Requires Team ID. | false           |
| Team ID              | Only used when the custom_task_ids parameter is set to true.                          |                 |
| Name                 | The name of the task.                                                                 |                 |
| Description          | The description of the task.                                                          |                 |
| Markdown Description | Markdown formatted description.                                                       |                 |
| Status               | The name of the status to apply to the task, as configured in the List.               |                 |
| Priority             | The task priority: 1 (Urgent), 2 (High), 3 (Normal), or 4 (Low).                      |                 |
| Schedule             | Start and due dates, whether each includes a time of day, and time estimate.          |                 |
| Start Date           | The task start date as a Unix timestamp in milliseconds.                              |                 |
| Start Date Time      | When true, the Start Date includes a time of day rather than only a date.             | false           |
| Due Date             | The task due date as a Unix timestamp in milliseconds.                                |                 |
| Due Date Time        | When true, the Due Date includes a time of day rather than only a date.               | false           |
| Time Estimate        | The time estimate for the task, in milliseconds.                                      |                 |
| Parent               | A task ID to move this subtask under.                                                 |                 |
| Add Assignee         | User IDs to add as assignees on the task.                                             | <code>[]</code> |
| Remove Assignee      | User IDs to remove as assignees from the task.                                        | <code>[]</code> |
| Archived             | When true, archives the task. When false, the task is unarchived.                     | false           |

### Update Team {#updateteam}

Update a user group (Team) of users that can be assigned to items in a workspace.

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    | The ClickUp connection to use.                                      |         |
| Group ID      | Team ID (user group).                                               |         |
| Team Name     | Desired Team Name.                                                  |         |
| Team Handle   | The handle used to @mention the Team (user group) in the Workspace. |         |
| Add Member    | Add members by ID. Comma separate each user ID.                     |         |
| Remove Member | Remove members by ID. Comma separate each user ID.                  |         |

### Update Time Entry {#updatetimeentry}

Update the details of a time entry.

| Input          | Comments                                                                                                                            | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The ClickUp connection to use.                                                                                                      |         |
| Team ID        | The unique identifier for the Team (Workspace).                                                                                     |         |
| Custom Task ID | When true, allows referencing a task by its custom task ID.                                                                         | false   |
| Custom Team ID | Only used when the custom_task_ids parameter is set to true.                                                                        |         |
| Description    | The description of the time entry.                                                                                                  |         |
| Start          | The start time of the time entry as a Unix timestamp in milliseconds.                                                               |         |
| Billable       | When true, marks the time entry as billable.                                                                                        | false   |
| Duration       | The duration of the time entry, in milliseconds.                                                                                    |         |
| Assignee       | The user ID to assign the time entry to. Workspace owners and admins can use any user ID; Workspace members can only use their own. |         |
| Task ID        | Associate a time entry with a task by ID                                                                                            |         |
| Timer ID       | The ID of a time entry.                                                                                                             |         |
| Tag Action     | Tag Action (use replace, add or remove).                                                                                            |         |
| End            | The end time of the time entry as a Unix timestamp in milliseconds.                                                                 |         |
| Tags           | JSON object containing an array of tag objects with name, background color (tag_bg), and foreground color (tag_fg) properties.      |         |

### Update Webhook {#updatewebhook}

Update the configuration of a webhook.

| Input      | Comments                                                            | Default         |
| ---------- | ------------------------------------------------------------------- | --------------- |
| Connection | The ClickUp connection to use.                                      |                 |
| Webhook ID | The unique identifier for the webhook.                              |                 |
| Endpoint   | URL of the webhook endpoint.                                        |                 |
| All Events | When true, subscribes to all events and overrides the event inputs. | false           |
| Event      | Event type to trigger the webhook.                                  | <code>[]</code> |
| Status     | The status to set on the webhook, such as active.                   |                 |
