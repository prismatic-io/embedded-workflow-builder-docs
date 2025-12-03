---
title: Asana Connector
sidebar_label: Asana
description: Manage users, projects, and teams in your Asana workspace
---

![Asana](./assets/asana.png#connector-icon)
Manage users, projects, and teams in your Asana workspace

## Connections

### Asana OAuth 2.0 Connection

Asana OAuth 2.0 Connection

To connect to Asana using OAuth 2.0, create an OAuth application within Asana's developer portal. This allows users to authenticate with their Asana credentials.

#### Prerequisites

- An active Asana account
- Permissions to create OAuth applications in Asana

#### Setup Steps

1. Log in to Asana and navigate to [app.asana.com/0/my-apps](https://app.asana.com/0/my-apps)
2. Click **Create new app**
3. Enter a name for the application and agree to Asana's terms and conditions
4. Open **OAuth** from the left-hand menu
5. Click **+ Add redirect URL** and enter the OAuth callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
6. Copy the generated **Client ID** and **Client secret** values

#### Configure the Connection

- Enter the **Client ID** and **Client secret** from the OAuth application
- For **Scopes**, specify the required permissions using the format `<resource>:<action>`:
  - Leave blank to request full access (all available scopes)
  - Refer to [Asana's OAuth scopes documentation](https://developers.asana.com/docs/oauth-scopes) for a complete list of available scopes

#### Recommended Scopes

| Scope               | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `default`           | Basic access to user identity and workspace membership |
| `tasks:read`        | Read tasks, subtasks, and task details                 |
| `tasks:write`       | Create, update, and delete tasks                       |
| `projects:read`     | Read projects and project details                      |
| `projects:write`    | Create, update, and delete projects                    |
| `users:read`        | Read user profiles and team membership                 |
| `workspaces:read`   | Read workspace and organization details                |
| `attachments:read`  | Read file attachments on tasks                         |
| `attachments:write` | Upload and manage attachments                          |
| `webhooks:read`     | Read webhook subscriptions                             |
| `webhooks:write`    | Create and manage webhooks                             |

**Example scope configurations:**

- **Read-only access**: `default tasks:read projects:read users:read workspaces:read`
- **Task management**: `default tasks:read tasks:write projects:read users:read`
- **Full project access**: `default tasks:read tasks:write projects:read projects:write users:read workspaces:read`
- **Webhook-enabled**: `default tasks:read projects:read webhooks:read webhooks:write`

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Scopes        | Space separated OAuth scopes using the format `<resource>:<action>` (e.g., tasks:read, projects:write). Leave blank for full access. See https://developers.asana.com/docs/oauth-scopes |         |
| Client ID     | Generate from https://app.asana.com/0/my-apps/                                                                                                                                          |         |
| Client secret | Generate from https://app.asana.com/0/my-apps/                                                                                                                                          |         |

### Asana Personal Access Token

Asana Personal Access Token

A personal access token can be used for development and testing purposes. For production deployments, use the OAuth 2.0 connection to allow users to authenticate with their own Asana credentials.

#### Prerequisites

- An active Asana account with permissions to create personal access tokens

#### Setup Steps

To generate a personal access token:

1. Log in to Asana and navigate to [app.asana.com/0/my-apps](https://app.asana.com/0/my-apps)
2. Click **+ Create new token**
3. Enter a description for the token and click **Create token**
4. Copy the generated token value

:::warning Security Note
Personal access tokens are tied to the user account that created them and inherit that user's permissions. Store tokens securely and rotate them regularly.
:::

#### Configure the Connection

- Enter the **Personal Access Token** value into the connection configuration

For more information on personal access tokens, refer to the [Asana Docs](https://developers.asana.com/docs/personal-access-token).

| Input                 | Comments                                                                                            | Default |
| --------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Personal Access Token | Log in to https://app.asana.com/0/my-apps to fetch a personal access token for development purposes |         |

## Triggers

### Comments & Activity Trigger

Get notified when a comment or activity (task updates, changes, etc.) is created, updated, or deleted in a project.

| Input                  | Comments                                                                        | Default |
| ---------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                 |         |
| Project ID             | Provide the unique identifier of the project.                                   |         |
| Trigger When Added     | Determines if the webhook will trigger when a comment or activity is added.     | true    |
| Trigger When Changed   | Determines if the webhook will trigger when a comment or activity is changed.   | true    |
| Trigger When Deleted   | Determines if the webhook will trigger when a comment or activity is deleted.   | true    |
| Trigger When Removed   | Determines if the webhook will trigger when a comment or activity is removed.   | true    |
| Trigger When Undeleted | Determines if the webhook will trigger when a comment or activity is undeleted. | true    |

### Project Tasks Trigger

Get notified when a task is created, updated, or deleted in a project.

| Input                  | Comments                                                         | Default |
| ---------------------- | ---------------------------------------------------------------- | ------- |
| Connection             |                                                                  |         |
| Project ID             | Provide the unique identifier of the project.                    |         |
| Trigger When Added     | Determines if the webhook will trigger when a task is added.     | true    |
| Trigger When Changed   | Determines if the webhook will trigger when a task is changed.   | true    |
| Trigger When Deleted   | Determines if the webhook will trigger when a task is deleted.   | true    |
| Trigger When Removed   | Determines if the webhook will trigger when a task is removed.   | true    |
| Trigger When Undeleted | Determines if the webhook will trigger when a task is undeleted. | true    |

### Webhook

Receive and validate webhook requests from Asana for webhooks you configure.

### Workspace Projects Trigger

Get notified when a project is created, updated, or deleted in a workspace.

| Input                  | Comments                                                                 | Default |
| ---------------------- | ------------------------------------------------------------------------ | ------- |
| Connection             |                                                                          |         |
| Workspace ID           | The gid of the workspace. Required when account has multiple workspaces. |         |
| Trigger When Added     | Determines if the webhook will trigger when a project is added.          | true    |
| Trigger When Changed   | Determines if the webhook will trigger when a project is changed.        | true    |
| Trigger When Deleted   | Determines if the webhook will trigger when a project is deleted.        | true    |
| Trigger When Removed   | Determines if the webhook will trigger when a project is removed.        | true    |
| Trigger When Undeleted | Determines if the webhook will trigger when a project is undeleted.      | true    |

## Actions

### Add Custom Field To Portfolio

Add a custom field to an existing portfolio

| Input         | Comments                                                       | Default |
| ------------- | -------------------------------------------------------------- | ------- |
| Connection    |                                                                |         |
| Portfolio ID  | Provide the unique identifier of the portfolio.                |         |
| Field ID      | The unique identifier of the field                             |         |
| Insert After  | The ID of the field or section to insert this one insert after |         |
| Insert before | The ID of the field or section to insert this one before       |         |
| Is Important  | Determines if the custom field will be marked as important     | true    |

### Add Custom Field To Project

Add a new Custom Field to an existing Project

| Input         | Comments                                                       | Default |
| ------------- | -------------------------------------------------------------- | ------- |
| Connection    |                                                                |         |
| Project ID    | Provide the unique identifier of the project.                  |         |
| Field ID      | The unique identifier of the field                             |         |
| Insert After  | The ID of the field or section to insert this one insert after |         |
| Insert before | The ID of the field or section to insert this one before       |         |
| Is Important  | Determines if the custom field will be marked as important     | true    |

### Add Followers To Task

Add followers to an existing task

| Input          | Comments                                                            | Default |
| -------------- | ------------------------------------------------------------------- | ------- |
| Connection     |                                                                     |         |
| Task ID        | Provide the unique identifier for the task.                         |         |
| Followers List | For each item, provide the unique identifier of an existing userId. |         |

### Add Tag To Task

Add a tag to an existing task

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection |                                             |         |
| Task ID    | Provide the unique identifier for the task. |         |
| Tag ID     | The unique identifier of the tag            |         |

### Add Task To Section

Add an existing task to the given section of a project

| Input         | Comments                                                       | Default |
| ------------- | -------------------------------------------------------------- | ------- |
| Connection    |                                                                |         |
| Section ID    | The unique identifier of the section                           |         |
| Task ID       | Provide the unique identifier for the task.                    |         |
| Insert After  | The ID of the field or section to insert this one insert after |         |
| Insert before | The ID of the field or section to insert this one before       |         |

### Add Users To Portfolio

Add existing users to the given portfolio

| Input        | Comments                                                                                                              | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                       |         |
| Portfolio ID | Provide the unique identifier of the portfolio.                                                                       |         |
| Members      | For each value, provide the user id of a member. These can either be the string 'me', an email, or the gid of a user. |         |

### Add Users To Project

Add an existing user to the given project

| Input      | Comments                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                       |         |
| Project ID | Provide the unique identifier of the project.                                                                         |         |
| Members    | For each value, provide the user id of a member. These can either be the string 'me', an email, or the gid of a user. |         |

### Add User To Team

Add an existing user to the given team

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Team ID    | Provide the unique identifier of the team. |         |
| User ID    | The global ID of a user                    |         |
| Connection |                                            |         |

### Add User To Workspace

Add a new user to the given workspace

| Input        | Comments                                                                 | Default |
| ------------ | ------------------------------------------------------------------------ | ------- |
| Workspace ID | The gid of the workspace. Required when account has multiple workspaces. |         |
| User ID      | The global ID of a user                                                  |         |
| Connection   |                                                                          |         |

### Attach File to Task

Attach a file to a task

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection |                                                               |         |
| File       | File to attach. This should be a reference to a previous step |         |
| File Name  | Name of the file to attach                                    |         |
| Task ID    | Provide the unique identifier for the task.                   |         |

### Create Portfolio

Create a new portfolio

| Input          | Comments                                                                                                              | Default     |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | ----------- |
| Connection     |                                                                                                                       |             |
| Color          | Provide a value for the color of the object.                                                                          | light-green |
| Members        | For each value, provide the user id of a member. These can either be the string 'me', an email, or the gid of a user. |             |
| Portfolio Name | Give a name to the portfolio                                                                                          |             |
| Workspace ID   | The gid of the workspace. Required when account has multiple workspaces.                                              |             |
| Public         | True if the object is public to its team.                                                                             | false       |

### Create Project

Create a new project inside of an existing team or organization

| Input           | Comments                                                                                                                                                                                    | Default     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Connection      |                                                                                                                                                                                             |             |
| Owner ID        | Provide the unique identifier of the owner of the project.                                                                                                                                  |             |
| Project Color   | The default color for your project                                                                                                                                                          | light-green |
| Default View    | The default view of the project.                                                                                                                                                            | list        |
| Privacy Setting | The privacy setting of the project. Note: Administrators in your organization may restrict these values.                                                                                    |             |
| Due On          | The date in which the project is due. This field takes a date with YYYY-MM-DD format and should not be used together with due_at.                                                           |             |
| Archived        | True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.                                               | false       |
| Followers       | Provide a comma separated string of users.                                                                                                                                                  |             |
| Name            | Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability.                                                                     |             |
| HTML Notes      | The notes of the text with formatting as HTML.                                                                                                                                              |             |
| Notes           | Free-form textual information associated with the object (ie., its description).                                                                                                            |             |
| Start On        | The day on which work for this project begins, or null if the project has no start date. This takes a date with YYYY-MM-DD format                                                           |             |
| Workspace ID    | Include this value if you would like this project to be included in a workspace.                                                                                                            |             |
| Team ID         | The team that this project is shared with. This field only exists for projects in organizations. Including this field if you do not meet those conditions could cause your request to fail. |             |

### Create Section

Create a new section of a project

| Input         | Comments                                                       | Default |
| ------------- | -------------------------------------------------------------- | ------- |
| Connection    |                                                                |         |
| Project ID    | Provide the unique identifier of the project.                  |         |
| Connection    |                                                                |         |
| Insert After  | The ID of the field or section to insert this one insert after |         |
| Insert before | The ID of the field or section to insert this one before       |         |
| Section Name  | Provide a value for the name of the section                    |         |

### Create Status Update

Create a status update from a project, portfolio, or goal

| Input                                           | Comments                                                                     | Default  |
| ----------------------------------------------- | ---------------------------------------------------------------------------- | -------- |
| Connection                                      |                                                                              |          |
| Project, portfolio, or goal ID                  | The GID for a project, portfolio, or goal                                    |          |
| Status Title                                    | The title of the project status update.                                      |          |
| Status Text                                     | The text content of the status update.                                       |          |
| This represents the current state of the object |                                                                              | on_track |
| Limit                                           | The maximum number of items you would like returned (between 1 and 100)      |          |
| Offset                                          | An offset token returned from a previous query that had a next_page property |          |

### Create Tag

Create a new tag

| Input          | Comments                                                                                                                | Default     |
| -------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------- |
| Connection     |                                                                                                                         |             |
| Workspace ID   | The gid of the workspace. Required when account has multiple workspaces.                                                |             |
| Followers List | For each item, provide the unique identifier of an existing userId.                                                     |             |
| Color          | Provide a value for the color of the object.                                                                            | light-green |
| Name           | Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. |             |
| Notes          | Free-form textual information associated with the object (ie., its description).                                        |             |

### Create Task

Create a new task inside a workspace or organization

| Input                                                                                         | Comments                                                                                                                                                                                                     | Default |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                                                                                    |                                                                                                                                                                                                              |         |
| Approval Status                                                                               | Provide a string value for the approval status of the task.                                                                                                                                                  |         |
| Completed                                                                                     | True if the task is completed, false if not. Select 'Do not change' to avoid updating this value.                                                                                                            |         |
| Completed By                                                                                  | Provide a string value for the name of the user who completed the task. You can also provide a userId, or email.                                                                                             |         |
| Assignee ID                                                                                   | Provide the unique identifier of the assignee.                                                                                                                                                               |         |
| Assignee Section ID                                                                           | Provide the unique identifier of the section to assign the task to. The assignee section is a subdivision of a project that groups tasks together in the assignee's 'My Tasks' list.                         |         |
| Assignee Status                                                                               | Provide a string value representing the status the task has in relation to its assignee. This field is deprecated, you can still use it to form requests but it is not recommended for creating new records. |         |
| Workspace ID                                                                                  | The gid of the workspace. Required when account has multiple workspaces.                                                                                                                                     |         |
| Start On                                                                                      | The day on which work for this project begins, or null if the project has no start date. This takes a date with YYYY-MM-DD format                                                                            |         |
| Start At                                                                                      | Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with start_on.                             |
| Note: due_at must be present in the request when setting or unsetting the start_at parameter. |                                                                                                                                                                                                              |
| HTML Notes                                                                                    | The notes of the text with formatting as HTML.                                                                                                                                                               |         |
| Resource Subtype                                                                              | Provide a string value for the type of object.                                                                                                                                                               |         |
| Project List                                                                                  | For each item, provide the unique identifier of the project.                                                                                                                                                 |         |
| Parent ID                                                                                     | Provide the unique identifier of the parent element.                                                                                                                                                         |         |
| Notes                                                                                         | Free-form textual information associated with the object (ie., its description).                                                                                                                             |         |
| Name                                                                                          | Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability.                                                                                      |         |
| Is Liked                                                                                      | This flag will mark the specified task as 'liked' in your Asana account.                                                                                                                                     |         |
| Followers List                                                                                | For each item, provide the unique identifier of an existing userId.                                                                                                                                          |         |
| Due At                                                                                        | Provide an ISO 8601 date string in UTC and should NOT be used together with Due On.                                                                                                                          |         |
| Due On                                                                                        | The date in which the project is due. This field takes a date with YYYY-MM-DD format and should not be used together with due_at.                                                                            |         |

### Create Team

Create a new team

| Input                        | Comments                                                       | Default |
| ---------------------------- | -------------------------------------------------------------- | ------- |
| Description                  | Provide a string value for the description of the team.        |         |
| Name                         | Provide a string value for the name of the team.               |         |
| Organization or Workspace ID | Provide the unique identifier of the organization or workspace |         |
| Connection                   |                                                                |         |

### Create Webhook

Create a webhook to send data from Asana to an instance URL

| Input       | Comments                                                                      | Default                                                                                                                                                                                                               |
| ----------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Webhook URL | Reference a flow's URL from the trigger payload                               |                                                                                                                                                                                                                       |
| Resource ID | The GID of a project, portfolio, goal, task, etc - the resource to listen for |                                                                                                                                                                                                                       |
| Filter      | Specify the filter parameters for the webhook in JSON format                  | <code>[<br /> {<br /> "action": "changed",<br /> "fields": [<br /> "due_at",<br /> "due_on",<br /> "dependencies"<br /> ],<br /> "resource_subtype": "milestone",<br /> "resource_type": "task"<br /> }<br />]</code> |
| Connection  |                                                                               |                                                                                                                                                                                                                       |

### Delete Attachment

Delete an existing attachment

| Input         | Comments                               | Default |
| ------------- | -------------------------------------- | ------- |
| Connection    |                                        |         |
| Attachment ID | Provide an id for the given attachment |         |

### Delete Instance Webhooks

Delete all Asana webhooks that point to a flow in this instance

| Input        | Comments                                                                 | Default |
| ------------ | ------------------------------------------------------------------------ | ------- |
| Connection   |                                                                          |         |
| Workspace ID | The gid of the workspace. Required when account has multiple workspaces. |         |

### Delete Portfolio

Delete the information and metadata of a portfolio

| Input        | Comments                                        | Default |
| ------------ | ----------------------------------------------- | ------- |
| Connection   |                                                 |         |
| Portfolio ID | Provide the unique identifier of the portfolio. |         |

### Delete Project

Delete the information and metadata of a project by Id

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Project ID | Provide the unique identifier of the project. |         |
| Connection |                                               |         |

### Delete Section

Delete the information and metadata of a section

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection |                                      |         |
| Section ID | The unique identifier of the section |         |

### Delete Status

Delete a status update

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection |                              |         |
| Status ID  | The gid of the status update |         |

### Delete Tag

Delete the information and metadata of the given tag

| Input      | Comments                                                                     | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- |
| Connection |                                                                              |         |
| Limit      | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset     | An offset token returned from a previous query that had a next_page property |         |
| Tag ID     | The unique identifier of the tag                                             |         |

### Delete Task

Delete the information and metadata of an existing task

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection |                                             |         |
| Task ID    | Provide the unique identifier for the task. |         |

### Delete Webhook

Delete a webhook by ID

| Input      | Comments                 | Default |
| ---------- | ------------------------ | ------- |
| Connection |                          |         |
| Webhook ID | The gid of the workspace |         |

### Find Tag by Name

Find a tag of a given name within a workspace

| Input        | Comments                                                                 | Default |
| ------------ | ------------------------------------------------------------------------ | ------- |
| Connection   |                                                                          |         |
| Tag Name     | Note: if multiple tags share a name, only one tag will be returned.      |         |
| Workspace ID | The gid of the workspace. Required when account has multiple workspaces. |         |

### Find Team by Name

Find a team of a given name within a workspace

| Input        | Comments                                                                 | Default |
| ------------ | ------------------------------------------------------------------------ | ------- |
| Connection   |                                                                          |         |
| Team Name    | Note: if multiple teams share a name, only one team will be returned.    |         |
| Workspace ID | The gid of the workspace. Required when account has multiple workspaces. |         |

### Find User by Name or Email

Find a user with the given name or email address in your workspace

| Input            | Comments                                                                        | Default |
| ---------------- | ------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                 |         |
| User's Full Name | Note: if multiple users share a name, only one user will be returned.           |         |
| User's Email     | Note: if multiple users share an email address, only one user will be returned. |         |
| Workspace ID     | The gid of the workspace. Required when account has multiple workspaces.        |         |

### Find Workspace by Name

Find a workspace of a given name

| Input          | Comments | Default |
| -------------- | -------- | ------- |
| Connection     |          |         |
| Workspace Name |          |         |

### Get Attachments

Get the information and metadata of an attachment

| Input         | Comments                               | Default |
| ------------- | -------------------------------------- | ------- |
| Connection    |                                        |         |
| Attachment ID | Provide an id for the given attachment |         |

### Get Current User

Get information about the currently authenticated user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Custom Field

Get the information and metadata of a custom field

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection |                                    |         |
| Field ID   | The unique identifier of the field |         |

### Get Portfolio

Get the information and metadata of a portfolio

| Input        | Comments                                        | Default |
| ------------ | ----------------------------------------------- | ------- |
| Connection   |                                                 |         |
| Portfolio ID | Provide the unique identifier of the portfolio. |         |

### Get Project

Get the information and metadata of a project by Id

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Project ID | Provide the unique identifier of the project. |         |
| Connection |                                               |         |

### Get Section

Get the information and metadata of a section

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection |                                      |         |
| Section ID | The unique identifier of the section |         |

### Get Status Update

Get a status update

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection |                              |         |
| Status ID  | The gid of the status update |         |

### Get Status Updates from Object

Get status updates from a project, portfolio, or goal

| Input                          | Comments                                                                     | Default |
| ------------------------------ | ---------------------------------------------------------------------------- | ------- |
| Connection                     |                                                                              |         |
| Project, portfolio, or goal ID | The GID for a project, portfolio, or goal                                    |         |
| Limit                          | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset                         | An offset token returned from a previous query that had a next_page property |         |

### Get Tag

Get the information and metadata of the given tag

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection |                                  |         |
| Tag ID     | The unique identifier of the tag |         |

### Get Task

Get the information and metadata of a task

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection |                                             |         |
| Task ID    | Provide the unique identifier for the task. |         |

### Get Team

Get the information and metadata of a team

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Team ID    | Provide the unique identifier of the team. |         |

### Get User

Get the information and metadata of a user

| Input      | Comments                | Default |
| ---------- | ----------------------- | ------- |
| User ID    | The global ID of a user |         |
| Connection |                         |         |

### Get Workspace

Get the information and metadata of the given Workspace

| Input        | Comments                                                                 | Default |
| ------------ | ------------------------------------------------------------------------ | ------- |
| Workspace ID | The gid of the workspace. Required when account has multiple workspaces. |         |
| Connection   |                                                                          |         |

### List Custom Fields

List all custom fields in a workspace

| Input        | Comments                                                                     | Default |
| ------------ | ---------------------------------------------------------------------------- | ------- |
| Connection   |                                                                              |         |
| Workspace ID | The gid of the workspace. Required when account has multiple workspaces.     |         |
| Limit        | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset       | An offset token returned from a previous query that had a next_page property |         |

### List Portfolio Items

List all items in a given portfolio

| Input        | Comments                                                                     | Default |
| ------------ | ---------------------------------------------------------------------------- | ------- |
| Connection   |                                                                              |         |
| Portfolio ID | Provide the unique identifier of the portfolio.                              |         |
| Offset       | An offset token returned from a previous query that had a next_page property |         |
| Limit        | The maximum number of items you would like returned (between 1 and 100)      |         |

### List Portfolios

List portfolios that the authenticated user owns

| Input        | Comments                                                                     | Default |
| ------------ | ---------------------------------------------------------------------------- | ------- |
| Connection   |                                                                              |         |
| Workspace ID | The gid of the workspace. Required when account has multiple workspaces.     |         |
| Limit        | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset       | An offset token returned from a previous query that had a next_page property |         |

### List Projects

Return a list of all projects connected to your account

| Input        | Comments                                                                     | Default |
| ------------ | ---------------------------------------------------------------------------- | ------- |
| Connection   |                                                                              |         |
| Offset       | An offset token returned from a previous query that had a next_page property |         |
| Limit        | The maximum number of items you would like returned (between 1 and 100)      |         |
| Workspace ID | The gid of the workspace. Required when account has multiple workspaces.     |         |

### List Sections

List all sections of the given project

| Input      | Comments                                                                     | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- |
| Connection |                                                                              |         |
| Project ID | Provide the unique identifier of the project.                                |         |
| Offset     | An offset token returned from a previous query that had a next_page property |         |
| Limit      | The maximum number of items you would like returned (between 1 and 100)      |         |

### List Subtasks

Return a list of all subtasks in a given task

| Input                     | Comments                                                                     | Default |
| ------------------------- | ---------------------------------------------------------------------------- | ------- |
| Connection                |                                                                              |         |
| Task ID                   | Provide the unique identifier for the task.                                  |         |
| Limit                     | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset                    | An offset token returned from a previous query that had a next_page property |         |
| List All Nested Subtasks? |                                                                              | false   |

### List Tags

List all tags in your account

| Input        | Comments                                                                     | Default |
| ------------ | ---------------------------------------------------------------------------- | ------- |
| Connection   |                                                                              |         |
| Workspace ID | The gid of the workspace. Required when account has multiple workspaces.     |         |
| Limit        | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset       | An offset token returned from a previous query that had a next_page property |         |

### List Tags In Task

List all tags in a given task

| Input      | Comments                                                                     | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- |
| Connection |                                                                              |         |
| Task ID    | Provide the unique identifier for the task.                                  |         |
| Limit      | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset     | An offset token returned from a previous query that had a next_page property |         |

### List task attachments

List all attachments in a given task

| Input      | Comments                                                                     | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- |
| Connection |                                                                              |         |
| Task ID    | Provide the unique identifier for the task.                                  |         |
| Limit      | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset     | An offset token returned from a previous query that had a next_page property |         |

### List Tasks

Return a list of tasks

| Input        | Comments                                                                     | Default |
| ------------ | ---------------------------------------------------------------------------- | ------- |
| Workspace ID | The gid of the workspace. Required when account has multiple workspaces.     |         |
| Assignee ID  | Provide the unique identifier of the assignee.                               |         |
| Project ID   | Provide the unique identifier of the project.                                |         |
| Limit        | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset       | An offset token returned from a previous query that had a next_page property |         |
| Connection   |                                                                              |         |

### List Teams

List all teams in the given workspace

| Input        | Comments                                                                 | Default |
| ------------ | ------------------------------------------------------------------------ | ------- |
| Connection   |                                                                          |         |
| Workspace ID | The gid of the workspace. Required when account has multiple workspaces. |         |

### List Users

List all users in your account

| Input        | Comments                                                                     | Default |
| ------------ | ---------------------------------------------------------------------------- | ------- |
| Workspace ID | Optionally filter by workspace ID                                            |         |
| Limit        | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset       | An offset token returned from a previous query that had a next_page property |         |
| Connection   |                                                                              |         |

### List Workspaces

List of all workspaces connected to your account

| Input      | Comments                                                                     | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- |
| Connection |                                                                              |         |
| Limit      | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset     | An offset token returned from a previous query that had a next_page property |         |

### List Workspace Webhooks

List all webhooks configured in Asana, including those for other integrations

| Input                       | Comments                                                                     | Default |
| --------------------------- | ---------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                              |         |
| Workspace ID                | The gid of the workspace. Required when account has multiple workspaces.     |         |
| Show only instance webhooks | Show only webhooks that point to this instance                               | true    |
| Limit                       | The maximum number of items you would like returned (between 1 and 100)      |         |
| Offset                      | An offset token returned from a previous query that had a next_page property |         |

### Raw Request

Send raw HTTP request to Asana

| Input                   | Comments                                                                                                                                                                                              | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                       |         |
| URL                     | Input the path only (/goals), The base URL is already included (https://app.asana.com/api/1.0). For example, to connect to https://app.asana.com/api/1.0/goals, only /goals is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                               |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                             |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                  |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                      |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                   |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                           |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                              | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                   |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                   | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.      | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                   | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                         | false   |

### Remove Assignee From Task

Remove the assignee from the given task

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection |                                             |         |
| Task ID    | Provide the unique identifier for the task. |         |

### Remove Custom Field From Portfolio

Remove a custom field from an existing portfolio

| Input        | Comments                                        | Default |
| ------------ | ----------------------------------------------- | ------- |
| Connection   |                                                 |         |
| Portfolio ID | Provide the unique identifier of the portfolio. |         |
| Field ID     | The unique identifier of the field              |         |

### Remove Custom Field From Project

Remove an existing Custom Field from an existing Project

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection |                                               |         |
| Project ID | Provide the unique identifier of the project. |         |
| Field ID   | The unique identifier of the field            |         |

### Remove Followers From Task

Remove followers from the given task

| Input          | Comments                                                            | Default |
| -------------- | ------------------------------------------------------------------- | ------- |
| Connection     |                                                                     |         |
| Task ID        | Provide the unique identifier for the task.                         |         |
| Followers List | For each item, provide the unique identifier of an existing userId. |         |

### Remove Portfolio Item

Remove an existing item from the given portfolio

| Input        | Comments                                        | Default |
| ------------ | ----------------------------------------------- | ------- |
| Connection   |                                                 |         |
| Portfolio ID | Provide the unique identifier of the portfolio. |         |
| Item ID      | Provide the unique identifier of the Item.      |         |

### Remove Tag From Task

Remove a tag from the given task

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection |                                             |         |
| Task ID    | Provide the unique identifier for the task. |         |
| Tag ID     | The unique identifier of the tag            |         |

### Remove Users From Portfolio

Remove existing users from the given portfolio

| Input        | Comments                                                                                                              | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                       |         |
| Portfolio ID | Provide the unique identifier of the portfolio.                                                                       |         |
| Members      | For each value, provide the user id of a member. These can either be the string 'me', an email, or the gid of a user. |         |

### Update Portfolio

Update the information and metadata of the given portfolio

| Input          | Comments                                                                 | Default     |
| -------------- | ------------------------------------------------------------------------ | ----------- |
| Connection     |                                                                          |             |
| Portfolio ID   | Provide the unique identifier of the portfolio.                          |             |
| Color          | Provide a value for the color of the object.                             | light-green |
| Portfolio Name | Give a name to the portfolio                                             |             |
| Workspace ID   | The gid of the workspace. Required when account has multiple workspaces. |             |
| Public         | True if the object is public to its team.                                | false       |

### Update Project

Update the information and metadata of a project

| Input           | Comments                                                                                                                                                                                    | Default     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Connection      |                                                                                                                                                                                             |             |
| Project ID      | Provide the unique identifier of the project.                                                                                                                                               |             |
| Project Color   | The default color for your project                                                                                                                                                          | light-green |
| Default View    | The default view of the project.                                                                                                                                                            |             |
| Privacy Setting | The privacy setting of the project. Note: Administrators in your organization may restrict these values.                                                                                    |             |
| Due On          | The date in which the project is due. This field takes a date with YYYY-MM-DD format and should not be used together with due_at.                                                           |             |
| Archived        | True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.                                               | false       |
| Followers       | Provide a comma separated string of users.                                                                                                                                                  |             |
| Name            | Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability.                                                                     |             |
| Notes           | Free-form textual information associated with the object (ie., its description).                                                                                                            |             |
| HTML Notes      | The notes of the text with formatting as HTML.                                                                                                                                              |             |
| Owner ID        | Provide the unique identifier of the owner of the project.                                                                                                                                  |             |
| Start On        | The day on which work for this project begins, or null if the project has no start date. This takes a date with YYYY-MM-DD format                                                           |             |
| Team ID         | The team that this project is shared with. This field only exists for projects in organizations. Including this field if you do not meet those conditions could cause your request to fail. |             |

### Update Section

Update the information and metadata of a project section

| Input         | Comments                                                       | Default |
| ------------- | -------------------------------------------------------------- | ------- |
| Connection    |                                                                |         |
| Section ID    | The unique identifier of the section                           |         |
| Section Name  | Provide a value for the name of the section                    |         |
| Insert After  | The ID of the field or section to insert this one insert after |         |
| Insert before | The ID of the field or section to insert this one before       |         |

### Update Tag

Update the information and metadata of the given tag

| Input      | Comments                                                                                                                | Default     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ----------- |
| Connection |                                                                                                                         |             |
| Tag ID     | The unique identifier of the tag                                                                                        |             |
| Color      | Provide a value for the color of the object.                                                                            | light-green |
| Name       | Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. |             |
| Notes      | Free-form textual information associated with the object (ie., its description).                                        |             |

### Update Task

Update the information and metadata of the given task

| Input                                                                                         | Comments                                                                                                                                                                                                     | Default |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                                                                                    |                                                                                                                                                                                                              |         |
| Task ID                                                                                       | Provide the unique identifier for the task.                                                                                                                                                                  |         |
| Approval Status                                                                               | Provide a string value for the approval status of the task.                                                                                                                                                  |         |
| Completed                                                                                     | True if the task is completed, false if not. Select 'Do not change' to avoid updating this value.                                                                                                            |         |
| Completed By                                                                                  | Provide a string value for the name of the user who completed the task. You can also provide a userId, or email.                                                                                             |         |
| Assignee ID                                                                                   | Provide the unique identifier of the assignee.                                                                                                                                                               |         |
| Assignee Section ID                                                                           | Provide the unique identifier of the section to assign the task to. The assignee section is a subdivision of a project that groups tasks together in the assignee's 'My Tasks' list.                         |         |
| Assignee Status                                                                               | Provide a string value representing the status the task has in relation to its assignee. This field is deprecated, you can still use it to form requests but it is not recommended for creating new records. |         |
| Workspace ID                                                                                  | The gid of the workspace. Required when account has multiple workspaces.                                                                                                                                     |         |
| Start At                                                                                      | Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with start_on.                             |
| Note: due_at must be present in the request when setting or unsetting the start_at parameter. |                                                                                                                                                                                                              |
| Start On                                                                                      | The day on which work for this project begins, or null if the project has no start date. This takes a date with YYYY-MM-DD format                                                                            |         |
| Resource Subtype                                                                              | Provide a string value for the type of object.                                                                                                                                                               |         |
| Parent ID                                                                                     | Provide the unique identifier of the parent element.                                                                                                                                                         |         |
| HTML Notes                                                                                    | The notes of the text with formatting as HTML.                                                                                                                                                               |         |
| Notes                                                                                         | Free-form textual information associated with the object (ie., its description).                                                                                                                             |         |
| Name                                                                                          | Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability.                                                                                      |         |
| Is Liked                                                                                      | This flag will mark the specified task as 'liked' in your Asana account.                                                                                                                                     |         |
| Due At                                                                                        | Provide an ISO 8601 date string in UTC and should NOT be used together with Due On.                                                                                                                          |         |
| Due On                                                                                        | The date in which the project is due. This field takes a date with YYYY-MM-DD format and should not be used together with due_at.                                                                            |         |
