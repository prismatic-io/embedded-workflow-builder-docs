---
title: Asana Connector
sidebar_label: Asana
description: Manage users, projects, and teams in your Asana workspace.
---

![Asana](./assets/asana.png#connector-icon)
[Asana](https://app.asana.com/) is a web and mobile application designed to help teams organize, track, and manage their work.

Use the Asana component to manage users, projects, and teams in an Asana workspace.

## Connections

### OAuth 2.0 {#oauth2}

Authenticate using OAuth 2.0.

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

| Input         | Comments                                                                                                                                                                                                                                      | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Scopes        | A space-separated list of OAuth scopes using the format `<resource>:<action>` (e.g., tasks:read, projects:write). Leave blank for full access. See [Asana OAuth scopes](https://developers.asana.com/docs/oauth-scopes) for available values. |         |
| Client ID     | The OAuth 2.0 client ID. Generate one from the [Asana Developer Portal](https://app.asana.com/0/my-apps).                                                                                                                                     |         |
| Client Secret | The OAuth 2.0 client secret. Generate one from the [Asana Developer Portal](https://app.asana.com/0/my-apps).                                                                                                                                 |         |

### Personal Access Token {#apikey}

Authenticate requests using an Asana Personal Access Token.

A personal access token can be used for development and testing purposes. For production deployments, use the OAuth 2.0 connection to allow users to authenticate with their own Asana credentials.

#### Prerequisites

- An active Asana account with permissions to create personal access tokens

#### Setup Steps

To generate a personal access token:

1. Log in to Asana and navigate to [app.asana.com/0/my-apps](https://app.asana.com/0/my-apps)
2. Click **+ Create new token**
3. Enter a description for the token and click **Create token**
4. Copy the generated token value

:::warning[Security Note]
Personal access tokens are tied to the user account that created them and inherit that user's permissions. Store tokens securely and rotate them regularly.
:::

#### Configure the Connection

- Enter the **Personal Access Token** value into the connection configuration

For more information on personal access tokens, refer to the [Asana Docs](https://developers.asana.com/docs/personal-access-token).

| Input                 | Comments                                                                                                          | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Personal Access Token | The Asana Personal Access Token. Generate one from the [Asana Developer Portal](https://app.asana.com/0/my-apps). |         |

## Triggers

### Comments and Activity {#storiestrigger}

Receive comment and activity notifications from Asana. Automatically creates and manages a webhook subscription for story events in the selected project.

| Input                  | Comments                                                                        | Default |
| ---------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection             | The Asana connection to use.                                                    |         |
| Project ID             | The unique identifier for the project.                                          |         |
| Trigger When Added     | Determines if the webhook will trigger when a comment or activity is added.     | true    |
| Trigger When Changed   | Determines if the webhook will trigger when a comment or activity is changed.   | true    |
| Trigger When Deleted   | Determines if the webhook will trigger when a comment or activity is deleted.   | true    |
| Trigger When Removed   | Determines if the webhook will trigger when a comment or activity is removed.   | true    |
| Trigger When Undeleted | Determines if the webhook will trigger when a comment or activity is undeleted. | true    |

### New and Updated Tasks {#pollchangestrigger}

Checks for new and updated tasks in a selected Asana project on a configured schedule.

| Input                | Comments                                                                           | Default |
| -------------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection           | The Asana connection to use.                                                       |         |
| Project ID           | The unique identifier for the project.                                             |         |
| Show New Records     | When true, tasks created since the last poll are returned in the trigger payload.  | true    |
| Show Updated Records | When true, tasks modified since the last poll are returned in the trigger payload. | true    |

### Project Tasks {#projecttaskstrigger}

Receive task notifications from Asana. Automatically creates and manages a webhook subscription for task events in the selected project.

| Input                  | Comments                                                         | Default |
| ---------------------- | ---------------------------------------------------------------- | ------- |
| Connection             | The Asana connection to use.                                     |         |
| Project ID             | The unique identifier for the project.                           |         |
| Trigger When Added     | Determines if the webhook will trigger when a task is added.     | true    |
| Trigger When Changed   | Determines if the webhook will trigger when a task is changed.   | true    |
| Trigger When Deleted   | Determines if the webhook will trigger when a task is deleted.   | true    |
| Trigger When Removed   | Determines if the webhook will trigger when a task is removed.   | true    |
| Trigger When Undeleted | Determines if the webhook will trigger when a task is undeleted. | true    |

### Webhook {#webhook}

Receive and validate webhook requests from Asana for manually configured webhook subscriptions.

### Workspace Projects {#workspaceprojectstrigger}

Receive project notifications from Asana. Automatically creates and manages a webhook subscription for project events in the selected workspace.

| Input                  | Comments                                                                                    | Default |
| ---------------------- | ------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Asana connection to use.                                                                |         |
| Workspace ID           | The unique identifier for the workspace. Required when the account has multiple workspaces. |         |
| Trigger When Added     | Determines if the webhook will trigger when a project is added.                             | true    |
| Trigger When Changed   | Determines if the webhook will trigger when a project is changed.                           | true    |
| Trigger When Deleted   | Determines if the webhook will trigger when a project is deleted.                           | true    |
| Trigger When Removed   | Determines if the webhook will trigger when a project is removed.                           | true    |
| Trigger When Undeleted | Determines if the webhook will trigger when a project is undeleted.                         | true    |

## Actions

### Add Custom Field to Portfolio {#addcustomfieldtoportfolio}

Add a custom field to an existing portfolio.

| Input         | Comments                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Asana connection to use.                                                                       |         |
| Field ID      | The unique identifier for the custom field.                                                        |         |
| Insert After  | The gid of a sibling field or section after which the new item will be inserted.                   |         |
| Insert Before | The gid of a sibling field or section before which the new item will be inserted.                  |         |
| Is Important  | When true, the custom field is highlighted as important and displayed prominently in the Asana UI. | true    |
| Portfolio ID  | The unique identifier for the portfolio.                                                           |         |

### Add Custom Field to Project {#addcustomfieldtoproject}

Add a new custom field to an existing project.

| Input         | Comments                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Asana connection to use.                                                                       |         |
| Field ID      | The unique identifier for the custom field.                                                        |         |
| Insert After  | The gid of a sibling field or section after which the new item will be inserted.                   |         |
| Insert Before | The gid of a sibling field or section before which the new item will be inserted.                  |         |
| Is Important  | When true, the custom field is highlighted as important and displayed prominently in the Asana UI. | true    |
| Project ID    | The unique identifier for the project.                                                             |         |

### Add Followers to Task {#addfollowerstotask}

Add followers to an existing task.

| Input               | Comments                                                                                                                                                         | Default                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                     |
| Followers List      | A list of user gids to add as followers. Provide one user ID per entry.                                                                                          |                                     |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,followers,name,workspace |
| Task ID             | The unique identifier for the task.                                                                                                                              |                                     |

### Add Tag to Task {#addtagtotask}

Add a tag to an existing task.

| Input               | Comments                                                                                                                                                         | Default                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                 |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,followers,name,color,workspace,notes |
| Tag ID              | The unique identifier for the tag.                                                                                                                               |                                                 |
| Task ID             | The unique identifier for the task.                                                                                                                              |                                                 |

### Add Task to Section {#addtasktosection}

Add an existing task to the given section of a project.

| Input         | Comments                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------- | ------- |
| Connection    | The Asana connection to use.                                                      |         |
| Insert After  | The gid of a sibling field or section after which the new item will be inserted.  |         |
| Insert Before | The gid of a sibling field or section before which the new item will be inserted. |         |
| Section ID    | The unique identifier for the section.                                            |         |
| Task ID       | The unique identifier for the task.                                               |         |

### Add Users to Portfolio {#addusertoportfolio}

Add existing users to the given portfolio.

| Input        | Comments                                                                                                      | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Asana connection to use.                                                                                  |         |
| Members      | A list of users to add as members. Each value can be the string 'me', an email address, or the gid of a user. |         |
| Portfolio ID | The unique identifier for the portfolio.                                                                      |         |

### Add Users to Project {#addusertoproject}

Add existing users to the given project.

| Input               | Comments                                                                                                                                                         | Default                                                                                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                                                                                                                                                       |
| Members             | A list of users to add as members. Each value can be the string 'me', an email address, or the gid of a user.                                                    |                                                                                                                                                                                       |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | team,workspace,html_notes,notes,color,custom_field_settings,custom_fields,followers,members,privacy_setting,archived,modified_at,created_at,start_on,due_on,current_status,owner,name |
| Project ID          | The unique identifier for the project.                                                                                                                           |                                                                                                                                                                                       |

### Add User to Team {#addusertoteam}

Add an existing user to the given team.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Asana connection to use.        |         |
| Team ID    | The unique identifier for the team. |         |
| User ID    | The unique identifier for the user. |         |

### Add User to Workspace {#adduser}

Add a new user to the given workspace.

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Asana connection to use.                                                                |         |
| User ID      | The unique identifier for the user.                                                         |         |
| Workspace ID | The unique identifier for the workspace. Required when the account has multiple workspaces. |         |

### Attach File to Task {#attachfiletotask}

Attach a file to a task.

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection | The Asana connection to use.                                  |         |
| File       | File to attach. This should be a reference to a previous step |         |
| File Name  | Name of the file to attach                                    |         |
| Task ID    | The unique identifier for the task.                           |         |

### Create Portfolio {#createportfolio}

Create a new portfolio.

| Input          | Comments                                                                                                      | Default     |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ----------- |
| Connection     | The Asana connection to use.                                                                                  |             |
| Color          | The display color associated with the object in the Asana UI.                                                 | light-green |
| Public         | When true, the resource is visible to every member of the team it belongs to.                                 | false       |
| Members        | A list of users to add as members. Each value can be the string 'me', an email address, or the gid of a user. |             |
| Portfolio Name | The display name for the portfolio.                                                                           |             |
| Workspace ID   | The unique identifier for the workspace. Required when the account has multiple workspaces.                   |             |

### Create Project {#createprojects}

Create a new project inside an existing team or organization.

| Input               | Comments                                                                                                                                                              | Default                                                                                                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                          |                                                                                                                                                                                              |
| Default View        | The default view to display when opening the project in Asana.                                                                                                        | list                                                                                                                                                                                         |
| Due On              | The date the project or task is due. Format: YYYY-MM-DD. Should not be used together with Due At.                                                                     |                                                                                                                                                                                              |
| Followers           | A comma-separated list of user gids to add as followers of the resource.                                                                                              |                                                                                                                                                                                              |
| HTML Notes          | The rich-text notes for the resource as HTML. See [Rich text in the Asana API](https://developers.asana.com/docs/rich-text) for supported markup.                     |                                                                                                                                                                                              |
| Name                | The display name of the resource. A short sentence fragment that fits on a single line in the UI for maximum readability.                                             |                                                                                                                                                                                              |
| Notes               | Free-form plain-text description associated with the resource. For rich formatting use HTML Notes instead.                                                            |                                                                                                                                                                                              |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed.      | team,workspace,html_notes,notes,color,custom_field_settings,custom_fields,followers,members,archived,modified_at,created_at,start_on,due_on,current_status,owner,name,completed,completed_at |
| Owner ID            | The unique identifier of the user who will own the project. The owner has full administrative rights over the project.                                                |                                                                                                                                                                                              |
| Project Settings    | Archived, Privacy Setting, and Project Color.                                                                                                                         |                                                                                                                                                                                              |
| Archived            | When true, the project is archived and hidden from the UI by default. Archived projects may be treated differently for queries.                                       | false                                                                                                                                                                                        |
| Privacy Setting     | The privacy setting of the project. Administrators in the organization may restrict these values.                                                                     |                                                                                                                                                                                              |
| Project Color       | The display color associated with the project in the Asana UI.                                                                                                        | light-green                                                                                                                                                                                  |
| Start On            | The date work for this project begins, or null if no start date is set. Format: YYYY-MM-DD.                                                                           |                                                                                                                                                                                              |
| Team ID             | The team that this project is shared with. Only exists for projects in organizations — including this field for non-organization projects causes the request to fail. |                                                                                                                                                                                              |
| Workspace ID        | Include this value if you would like this project to be included in a workspace.                                                                                      |                                                                                                                                                                                              |

### Create Section {#createsection}

Create a new section within a project.

| Input               | Comments                                                                                                                                                         | Default                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                         |
| Insert After        | The gid of a sibling field or section after which the new item will be inserted.                                                                                 |                         |
| Insert Before       | The gid of a sibling field or section before which the new item will be inserted.                                                                                |                         |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,project,name |
| Project ID          | The unique identifier for the project.                                                                                                                           |                         |
| Section Name        | The display name for the section.                                                                                                                                |                         |

### Create Status Update {#createstatusupdate}

Create a status update on a project, portfolio, or goal.

| Input                                           | Comments                                                                                       | Default  |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------- |
| Connection                                      | The Asana connection to use.                                                                   |          |
| Project, Portfolio, or Goal ID                  | The unique identifier for the parent project, portfolio, or goal the status update belongs to. |          |
| Status Title                                    | The title of the project status update.                                                        |          |
| Status Text                                     | The text content of the status update.                                                         |          |
| This represents the current state of the object |                                                                                                | on_track |
| Pagination                                      | Limit and offset for paginated results.                                                        |          |
| Limit                                           | The maximum number of items to return per page (between 1 and 100).                            |          |
| Offset                                          | The pagination offset token returned from a previous query that had a next_page property.      |          |

### Create Tag {#createtag}

Create a new tag in a workspace.

| Input               | Comments                                                                                                                                                         | Default                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                 |
| Color               | The display color associated with the object in the Asana UI.                                                                                                    | light-green                                     |
| Followers List      | A list of user gids to add as followers. Provide one user ID per entry.                                                                                          |                                                 |
| Name                | The display name of the resource. A short sentence fragment that fits on a single line in the UI for maximum readability.                                        |                                                 |
| Notes               | Free-form plain-text description associated with the resource. For rich formatting use HTML Notes instead.                                                       |                                                 |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,followers,name,color,workspace,notes |
| Workspace ID        | The unique identifier for the workspace. Required when the account has multiple workspaces.                                                                      |                                                 |

### Create Task {#createtask}

Create a new task inside a workspace or organization.

| Input               | Comments                                                                                                                                                                                                                | Default                                                                                                                                                                                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                               |
| Approval Status     | The approval status to set on the task.                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                               |
| Assignee ID         | The unique identifier of the user assigned to the task.                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                               |
| Assignee Section ID | The unique identifier for the section to assign the task to. The assignee section is a subdivision of a project that groups tasks together in the assignee's 'My Tasks' list.                                           |                                                                                                                                                                                                                                                                                                               |
| Followers List      | A list of user gids to add as followers. Provide one user ID per entry.                                                                                                                                                 |                                                                                                                                                                                                                                                                                                               |
| HTML Notes          | The rich-text notes for the resource as HTML. See [Rich text in the Asana API](https://developers.asana.com/docs/rich-text) for supported markup.                                                                       |                                                                                                                                                                                                                                                                                                               |
| Name                | The display name of the resource. A short sentence fragment that fits on a single line in the UI for maximum readability.                                                                                               |                                                                                                                                                                                                                                                                                                               |
| Notes               | Free-form plain-text description associated with the resource. For rich formatting use HTML Notes instead.                                                                                                              |                                                                                                                                                                                                                                                                                                               |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed.                                                        | projects,resource_subtype,assignee,assignee_status,created_at,completed,completed_at,dependencies,custom_fields,dependents,due_on,due_at,followers,external,is_rendered_as_separator,liked,likes,memberships,modified_at,name,notes,html_notes,num_likes,num_subtasks,parent,start_at,start_on,workspace,tags |
| Parent ID           | The unique identifier of the parent element.                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                               |
| Project List        | A list of project gids the task should belong to. Provide one project ID per entry.                                                                                                                                     |                                                                                                                                                                                                                                                                                                               |
| Resource Subtype    | The subtype of the resource (e.g., 'default_task', 'milestone'). See [Asana resource subtypes](https://developers.asana.com/docs/object-hierarchy) for valid values.                                                    |                                                                                                                                                                                                                                                                                                               |
| Scheduling          | Due date, due timestamp, start date, and start timestamp.                                                                                                                                                               |                                                                                                                                                                                                                                                                                                               |
| Due At              | The date and time the task is due. Format: ISO 8601 in UTC. Should not be used together with Due On.                                                                                                                    |                                                                                                                                                                                                                                                                                                               |
| Due On              | The date the project or task is due. Format: YYYY-MM-DD. Should not be used together with Due At.                                                                                                                       |                                                                                                                                                                                                                                                                                                               |
| Start At            | The date and time work begins for the task, or null if the task has no start time. Format: ISO 8601 in UTC. Should not be used together with Start On. Due At must be present when setting or unsetting this parameter. |                                                                                                                                                                                                                                                                                                               |
| Start On            | The date work for this project begins, or null if no start date is set. Format: YYYY-MM-DD.                                                                                                                             |                                                                                                                                                                                                                                                                                                               |
| Task Status         | Assignee Status, Completed By, Completed, and Is Liked.                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                               |
| Assignee Status     | The status the task has in relation to its assignee. This field is deprecated — it can still be used in requests but is not recommended for new records.                                                                |                                                                                                                                                                                                                                                                                                               |
| Completed By        | The name of the user who completed the task. A user gid or email address may also be provided to reference an existing Asana user.                                                                                      |                                                                                                                                                                                                                                                                                                               |
| Completed           | Whether the task is marked as complete. Select 'Do not change' to leave the existing value untouched.                                                                                                                   |                                                                                                                                                                                                                                                                                                               |
| Is Liked            | Whether the task is marked as 'liked' for the authenticated user. Select 'Do not change' to leave the existing value untouched.                                                                                         |                                                                                                                                                                                                                                                                                                               |
| Workspace ID        | The unique identifier for the workspace. Required when the account has multiple workspaces.                                                                                                                             |                                                                                                                                                                                                                                                                                                               |

### Create Team {#createteam}

Create a new team within an organization.

| Input                        | Comments                                                                      | Default |
| ---------------------------- | ----------------------------------------------------------------------------- | ------- |
| Connection                   | The Asana connection to use.                                                  |         |
| Organization or Workspace ID | The unique identifier for the organization or workspace.                      |         |
| Description                  | Free-form description of the team's purpose, shown on the team page in Asana. |         |
| Name                         | The display name for the team.                                                |         |

### Create Webhook {#createwebhook}

Create a webhook to send data from Asana to an instance URL.

| Input       | Comments                                                                                                                                                                        | Default                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Webhook URL | Reference a flow's URL from the trigger payload.                                                                                                                                |                                                                                                                                                                                                                       |
| Resource ID | The GID of a project, portfolio, goal, task, etc - the resource to listen for.                                                                                                  |                                                                                                                                                                                                                       |
| Filter      | The filter parameters for the webhook expressed as a JSON array. See the [Asana webhooks guide](https://developers.asana.com/docs/webhooks-guide) for available filter options. | <code>[<br /> {<br /> "action": "changed",<br /> "fields": [<br /> "due_at",<br /> "due_on",<br /> "dependencies"<br /> ],<br /> "resource_subtype": "milestone",<br /> "resource_type": "task"<br /> }<br />]</code> |
| Connection  | The Asana connection to use.                                                                                                                                                    |                                                                                                                                                                                                                       |

### Delete Attachment {#deleteattachment}

Delete an existing attachment.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    | The Asana connection to use.              |         |
| Attachment ID | The unique identifier for the attachment. |         |

### Delete Instance Webhooks {#deleteinstancewebhooks}

Delete all Asana webhooks that point to a flow in this instance.

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Asana connection to use.                                                                |         |
| Workspace ID | The unique identifier for the workspace. Required when the account has multiple workspaces. |         |

### Delete Portfolio {#deleteportfolio}

Delete an existing portfolio.

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The Asana connection to use.             |         |
| Portfolio ID | The unique identifier for the portfolio. |         |

### Delete Project {#deleteprojects}

Delete an existing project by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Asana connection to use.           |         |
| Project ID | The unique identifier for the project. |         |

### Delete Section {#deletesection}

Delete an existing section.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Asana connection to use.           |         |
| Section ID | The unique identifier for the section. |         |

### Delete Status Update {#deletestatus}

Delete an existing status update.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Asana connection to use.                 |         |
| Status ID  | The unique identifier for the status update. |         |

### Delete Tag {#deletetag}

Delete an existing tag.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | The Asana connection to use.                                                              |         |
| Pagination | Limit and offset for paginated results.                                                   |         |
| Limit      | The maximum number of items to return per page (between 1 and 100).                       |         |
| Offset     | The pagination offset token returned from a previous query that had a next_page property. |         |
| Tag ID     | The unique identifier for the tag.                                                        |         |

### Delete Task {#deletetask}

Delete an existing task.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Asana connection to use.        |         |
| Task ID    | The unique identifier for the task. |         |

### Delete Webhook {#deletewebhook}

Delete an existing webhook by ID.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The Asana connection to use. |         |
| Webhook ID | The gid of the workspace     |         |

### Find Tag by Name {#findtagbyname}

Find a tag by name within a workspace.

| Input               | Comments                                                                                                                                                         | Default                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                 |
| Tag Name            | Note: if multiple tags share a name, only one tag will be returned.                                                                                              |                                                 |
| Workspace ID        | The unique identifier for the workspace. Required when the account has multiple workspaces.                                                                      |                                                 |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,followers,name,color,workspace,notes |

### Find Team by Name {#findteambyname}

Find a team by name within a workspace.

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Asana connection to use.                                                                |         |
| Team Name    | Note: if multiple teams share a name, only one team will be returned.                       |         |
| Workspace ID | The unique identifier for the workspace. Required when the account has multiple workspaces. |         |

### Find User by Name or Email {#finduserbynameoremail}

Find a user by name or email address within a workspace.

| Input               | Comments                                                                                                                                                         | Default               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                       |
| User's Full Name    | Note: if multiple users share a name, only one user will be returned.                                                                                            |                       |
| User's Email        | Note: if multiple users share an email address, only one user will be returned.                                                                                  |                       |
| Workspace ID        | The unique identifier for the workspace. Required when the account has multiple workspaces.                                                                      |                       |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | name,email,workspaces |

### Find Workspace by Name {#findworkspacebyname}

Find a workspace by name.

| Input          | Comments                     | Default |
| -------------- | ---------------------------- | ------- |
| Connection     | The Asana connection to use. |         |
| Workspace Name |                              |         |

### Get Attachment {#getattachment}

Get the information and metadata of an attachment.

| Input               | Comments                                                                                                                                                         | Default                                           |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                   |
| Attachment ID       | The unique identifier for the attachment.                                                                                                                        |                                                   |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,download_url,host,name,parent,view_url |

### Get Current User {#getcurrentuser}

Get information about the currently authenticated user.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The Asana connection to use. |         |

### Get Custom Field {#getcustomfield}

Get the information and metadata of a custom field.

| Input               | Comments                                                                                                                                                         | Default                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                                     |
| Field ID            | The unique identifier for the custom field.                                                                                                                      |                                                                     |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | precision,enum_options,description,name,resource_subtype,text_value |

### Get Portfolio {#getportfolio}

Get the information and metadata of a portfolio.

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The Asana connection to use.             |         |
| Portfolio ID | The unique identifier for the portfolio. |         |

### Get Project {#getproject}

Get the information and metadata of a project by ID.

| Input               | Comments                                                                                                                                                         | Default                                                                                                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                                                                                                                                                              |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | team,workspace,html_notes,notes,color,custom_field_settings,custom_fields,followers,members,archived,modified_at,created_at,start_on,due_on,current_status,owner,name,completed,completed_at |
| Project ID          | The unique identifier for the project.                                                                                                                           |                                                                                                                                                                                              |

### Get Section {#getsection}

Get the information and metadata of a section.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Asana connection to use.           |         |
| Section ID | The unique identifier for the section. |         |

### Get Status Update {#getstatusupdate}

Get the information and metadata of a status update.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Asana connection to use.                 |         |
| Status ID  | The unique identifier for the status update. |         |

### Get Status Updates from Object {#getstatusesforobject}

Get status updates from a project, portfolio, or goal.

| Input                          | Comments                                                                                                                                                         | Default                                                   |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Connection                     | The Asana connection to use.                                                                                                                                     |                                                           |
| Optional Properties            | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | resource_subtype,title,text,status_type,parent,created_at |
| Pagination                     | Limit and offset for paginated results.                                                                                                                          |                                                           |
| Limit                          | The maximum number of items to return per page (between 1 and 100).                                                                                              |                                                           |
| Offset                         | The pagination offset token returned from a previous query that had a next_page property.                                                                        |                                                           |
| Project, Portfolio, or Goal ID | The unique identifier for the parent project, portfolio, or goal the status update belongs to.                                                                   |                                                           |

### Get Tag {#gettag}

Get the information and metadata of a tag.

| Input               | Comments                                                                                                                                                         | Default                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                 |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,followers,name,color,workspace,notes |
| Tag ID              | The unique identifier for the tag.                                                                                                                               |                                                 |

### Get Task {#gettask}

Get the information and metadata of a task.

| Input               | Comments                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                                                                                                                                                                                                                                                                               |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | projects,resource_subtype,assignee,assignee_status,created_at,completed,completed_at,dependencies,custom_fields,dependents,due_on,due_at,followers,external,is_rendered_as_separator,liked,likes,memberships,modified_at,name,notes,html_notes,num_likes,num_subtasks,parent,start_at,start_on,workspace,tags |
| Task ID             | The unique identifier for the task.                                                                                                                              |                                                                                                                                                                                                                                                                                                               |

### Get Team {#getteam}

Get the information and metadata of a team.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Asana connection to use.        |         |
| Team ID    | The unique identifier for the team. |         |

### Get User {#getusers}

Get the information and metadata of a user.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Asana connection to use.        |         |
| User ID    | The unique identifier for the user. |         |

### Get Workspace {#getworkspace}

Get the information and metadata of the given workspace.

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Asana connection to use.                                                                |         |
| Workspace ID | The unique identifier for the workspace. Required when the account has multiple workspaces. |         |

### List Custom Fields {#listcustomfields}

List all custom fields in a workspace.

| Input               | Comments                                                                                                                                                         | Default                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                                     |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | precision,enum_options,description,name,resource_subtype,text_value |
| Pagination          | Limit and offset for paginated results.                                                                                                                          |                                                                     |
| Limit               | The maximum number of items to return per page (between 1 and 100).                                                                                              |                                                                     |
| Offset              | The pagination offset token returned from a previous query that had a next_page property.                                                                        |                                                                     |
| Workspace ID        | The unique identifier for the workspace. Required when the account has multiple workspaces.                                                                      |                                                                     |

### List Portfolio Items {#listportfolioitems}

List all items in a given portfolio.

| Input        | Comments                                                                                  | Default |
| ------------ | ----------------------------------------------------------------------------------------- | ------- |
| Connection   | The Asana connection to use.                                                              |         |
| Pagination   | Limit and offset for paginated results.                                                   |         |
| Limit        | The maximum number of items to return per page (between 1 and 100).                       |         |
| Offset       | The pagination offset token returned from a previous query that had a next_page property. |         |
| Portfolio ID | The unique identifier for the portfolio.                                                  |         |

### List Portfolios {#listportfolios}

List portfolios that the authenticated user owns.

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Asana connection to use.                                                                |         |
| Pagination   | Limit and offset for paginated results.                                                     |         |
| Limit        | The maximum number of items to return per page (between 1 and 100).                         |         |
| Offset       | The pagination offset token returned from a previous query that had a next_page property.   |         |
| Workspace ID | The unique identifier for the workspace. Required when the account has multiple workspaces. |         |

### List Projects {#listprojects}

List all projects accessible to the authenticated user.

| Input               | Comments                                                                                                                                                         | Default                                                                                                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                                                                                                                                                              |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | team,workspace,html_notes,notes,color,custom_field_settings,custom_fields,followers,members,archived,modified_at,created_at,start_on,due_on,current_status,owner,name,completed,completed_at |
| Pagination          | Limit and offset for paginated results.                                                                                                                          |                                                                                                                                                                                              |
| Limit               | The maximum number of items to return per page (between 1 and 100).                                                                                              |                                                                                                                                                                                              |
| Offset              | The pagination offset token returned from a previous query that had a next_page property.                                                                        |                                                                                                                                                                                              |
| Workspace ID        | The unique identifier for the workspace. Required when the account has multiple workspaces.                                                                      |                                                                                                                                                                                              |

### List Sections {#listsections}

List all sections in a given project.

| Input               | Comments                                                                                                                                                         | Default                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                         |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,project,name |
| Pagination          | Limit and offset for paginated results.                                                                                                                          |                         |
| Limit               | The maximum number of items to return per page (between 1 and 100).                                                                                              |                         |
| Offset              | The pagination offset token returned from a previous query that had a next_page property.                                                                        |                         |
| Project ID          | The unique identifier for the project.                                                                                                                           |                         |

### List Subtasks {#listsubtasks}

List all subtasks within a given task.

| Input                    | Comments                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection               | The Asana connection to use.                                                                                                                                     |                                                                                                                                                                                                                                                                                                      |
| List All Nested Subtasks | When true, recursively lists subtasks of subtasks rather than only direct subtasks of the parent task.                                                           | false                                                                                                                                                                                                                                                                                                |
| Optional Properties      | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | projects,resource_subtype,assignee,assignee_status,created_at,completed,completed_at,dependencies,custom_fields,dependents,due_on,due_at,followers,external,is_rendered_as_separator,liked,likes,memberships,modified_at,name,notes,html_notes,num_likes,num_subtasks,parent,start_on,workspace,tags |
| Pagination               | Limit and offset for paginated results.                                                                                                                          |                                                                                                                                                                                                                                                                                                      |
| Limit                    | The maximum number of items to return per page (between 1 and 100).                                                                                              |                                                                                                                                                                                                                                                                                                      |
| Offset                   | The pagination offset token returned from a previous query that had a next_page property.                                                                        |                                                                                                                                                                                                                                                                                                      |
| Task ID                  | The unique identifier for the task.                                                                                                                              |                                                                                                                                                                                                                                                                                                      |

### List Tags {#listtags}

List all tags accessible to the authenticated user.

| Input               | Comments                                                                                                                                                         | Default                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                 |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,followers,name,color,workspace,notes |
| Pagination          | Limit and offset for paginated results.                                                                                                                          |                                                 |
| Limit               | The maximum number of items to return per page (between 1 and 100).                                                                                              |                                                 |
| Offset              | The pagination offset token returned from a previous query that had a next_page property.                                                                        |                                                 |
| Workspace ID        | The unique identifier for the workspace. Required when the account has multiple workspaces.                                                                      |                                                 |

### List Tags in Task {#listtagsintask}

List all tags applied to a given task.

| Input               | Comments                                                                                                                                                         | Default                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                 |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,followers,name,color,workspace,notes |
| Pagination          | Limit and offset for paginated results.                                                                                                                          |                                                 |
| Limit               | The maximum number of items to return per page (between 1 and 100).                                                                                              |                                                 |
| Offset              | The pagination offset token returned from a previous query that had a next_page property.                                                                        |                                                 |
| Task ID             | The unique identifier for the task.                                                                                                                              |                                                 |

### List Task Attachments {#listattachments}

List all attachments in a given task.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | The Asana connection to use.                                                              |         |
| Pagination | Limit and offset for paginated results.                                                   |         |
| Limit      | The maximum number of items to return per page (between 1 and 100).                       |         |
| Offset     | The pagination offset token returned from a previous query that had a next_page property. |         |
| Task ID    | The unique identifier for the task.                                                       |         |

### List Tasks {#listtasks}

List tasks within a workspace, project, or assignee scope.

| Input               | Comments                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                                                                                                                                                                                                                                                                               |
| Assignee ID         | The unique identifier of the user assigned to the task.                                                                                                          |                                                                                                                                                                                                                                                                                                               |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | projects,resource_subtype,assignee,assignee_status,created_at,completed,completed_at,dependencies,custom_fields,dependents,due_on,due_at,followers,external,is_rendered_as_separator,liked,likes,memberships,modified_at,name,notes,html_notes,num_likes,num_subtasks,parent,start_at,start_on,workspace,tags |
| Pagination          | Limit and offset for paginated results.                                                                                                                          |                                                                                                                                                                                                                                                                                                               |
| Limit               | The maximum number of items to return per page (between 1 and 100).                                                                                              |                                                                                                                                                                                                                                                                                                               |
| Offset              | The pagination offset token returned from a previous query that had a next_page property.                                                                        |                                                                                                                                                                                                                                                                                                               |
| Project ID          | The unique identifier for the project.                                                                                                                           |                                                                                                                                                                                                                                                                                                               |
| Workspace ID        | The unique identifier for the workspace. Required when the account has multiple workspaces.                                                                      |                                                                                                                                                                                                                                                                                                               |

### List Teams {#listteams}

List all teams within a given workspace.

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Asana connection to use.                                                                |         |
| Workspace ID | The unique identifier for the workspace. Required when the account has multiple workspaces. |         |

### List Users {#listusers}

List all users accessible to the authenticated user.

| Input               | Comments                                                                                                                                                         | Default               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                       |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | name,email,workspaces |
| Pagination          | Limit and offset for paginated results.                                                                                                                          |                       |
| Limit               | The maximum number of items to return per page (between 1 and 100).                                                                                              |                       |
| Offset              | The pagination offset token returned from a previous query that had a next_page property.                                                                        |                       |
| Workspace ID        | Optionally filter by workspace ID                                                                                                                                |                       |

### List Workspaces {#listworkspaces}

List all workspaces accessible to the authenticated user.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | The Asana connection to use.                                                              |         |
| Pagination | Limit and offset for paginated results.                                                   |         |
| Limit      | The maximum number of items to return per page (between 1 and 100).                       |         |
| Offset     | The pagination offset token returned from a previous query that had a next_page property. |         |

### List Workspace Webhooks {#listwebhooks}

List all webhooks configured in Asana, including those for other integrations.

| Input                       | Comments                                                                                    | Default |
| --------------------------- | ------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The Asana connection to use.                                                                |         |
| Workspace ID                | The unique identifier for the workspace. Required when the account has multiple workspaces. |         |
| Show only instance webhooks | Show only webhooks that point to this instance                                              | true    |
| Pagination                  | Limit and offset for paginated results.                                                     |         |
| Limit                       | The maximum number of items to return per page (between 1 and 100).                         |         |
| Offset                      | The pagination offset token returned from a previous query that had a next_page property.   |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to Asana.

| Input                   | Comments                                                                                                                                                                                              | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Asana connection to use.                                                                                                                                                                          |         |
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

### Remove Assignee from Task {#removeassigneefromtask}

Remove the assignee from the given task.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Asana connection to use.        |         |
| Task ID    | The unique identifier for the task. |         |

### Remove Custom Field from Portfolio {#removecustomfieldfromportfolio}

Remove a custom field from an existing portfolio.

| Input        | Comments                                    | Default |
| ------------ | ------------------------------------------- | ------- |
| Connection   | The Asana connection to use.                |         |
| Field ID     | The unique identifier for the custom field. |         |
| Portfolio ID | The unique identifier for the portfolio.    |         |

### Remove Custom Field from Project {#removecustomfieldfromproject}

Remove an existing custom field from an existing project.

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection | The Asana connection to use.                |         |
| Field ID   | The unique identifier for the custom field. |         |
| Project ID | The unique identifier for the project.      |         |

### Remove Followers from Task {#removefollowersfromtask}

Remove followers from the given task.

| Input               | Comments                                                                                                                                                         | Default                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                     |
| Followers List      | A list of user gids to add as followers. Provide one user ID per entry.                                                                                          |                                     |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,followers,name,workspace |
| Task ID             | The unique identifier for the task.                                                                                                                              |                                     |

### Remove Portfolio Item {#removeportfolioitem}

Remove an existing item from the given portfolio.

| Input        | Comments                                                     | Default |
| ------------ | ------------------------------------------------------------ | ------- |
| Connection   | The Asana connection to use.                                 |         |
| Item ID      | The unique identifier for the item (a project or portfolio). |         |
| Portfolio ID | The unique identifier for the portfolio.                     |         |

### Remove Tag from Task {#removetagfromtask}

Remove a tag from the given task.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Asana connection to use.        |         |
| Tag ID     | The unique identifier for the tag.  |         |
| Task ID    | The unique identifier for the task. |         |

### Remove Users from Portfolio {#removeuserfromportfolio}

Remove existing users from the given portfolio.

| Input               | Comments                                                                                                                                                         | Default                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                                          |
| Members             | A list of users to add as members. Each value can be the string 'me', an email address, or the gid of a user.                                                    |                                                                          |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | name,created_at,created_by,custom_field_settings,color,workspace,members |
| Portfolio ID        | The unique identifier for the portfolio.                                                                                                                         |                                                                          |

### Update Portfolio {#updateportfolio}

Update the information and metadata of the given portfolio.

| Input          | Comments                                                                                    | Default     |
| -------------- | ------------------------------------------------------------------------------------------- | ----------- |
| Connection     | The Asana connection to use.                                                                |             |
| Color          | The display color associated with the object in the Asana UI.                               | light-green |
| Public         | When true, the resource is visible to every member of the team it belongs to.               | false       |
| Portfolio ID   | The unique identifier for the portfolio.                                                    |             |
| Portfolio Name | The display name for the portfolio.                                                         |             |
| Workspace ID   | The unique identifier for the workspace. Required when the account has multiple workspaces. |             |

### Update Project {#updateproject}

Update the information and metadata of a project.

| Input            | Comments                                                                                                                                                              | Default     |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Connection       | The Asana connection to use.                                                                                                                                          |             |
| Due On           | The date the project or task is due. Format: YYYY-MM-DD. Should not be used together with Due At.                                                                     |             |
| Followers        | A comma-separated list of user gids to add as followers of the resource.                                                                                              |             |
| HTML Notes       | The rich-text notes for the resource as HTML. See [Rich text in the Asana API](https://developers.asana.com/docs/rich-text) for supported markup.                     |             |
| Name             | The display name of the resource. A short sentence fragment that fits on a single line in the UI for maximum readability.                                             |             |
| Notes            | Free-form plain-text description associated with the resource. For rich formatting use HTML Notes instead.                                                            |             |
| Owner ID         | The unique identifier of the user who will own the project. The owner has full administrative rights over the project.                                                |             |
| Project ID       | The unique identifier for the project.                                                                                                                                |             |
| Project Settings | Archived, Default View, Privacy Setting, and Project Color.                                                                                                           |             |
| Archived         | When true, the project is archived and hidden from the UI by default. Archived projects may be treated differently for queries.                                       | false       |
| Default View     | The default view to display when opening the project in Asana.                                                                                                        |             |
| Privacy Setting  | The privacy setting of the project. Administrators in the organization may restrict these values.                                                                     |             |
| Project Color    | The display color associated with the project in the Asana UI.                                                                                                        | light-green |
| Start On         | The date work for this project begins, or null if no start date is set. Format: YYYY-MM-DD.                                                                           |             |
| Team ID          | The team that this project is shared with. Only exists for projects in organizations — including this field for non-organization projects causes the request to fail. |             |

### Update Section {#updatesection}

Update the information and metadata of a project section.

| Input               | Comments                                                                                                                                                         | Default                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                         |
| Insert After        | The gid of a sibling field or section after which the new item will be inserted.                                                                                 |                         |
| Insert Before       | The gid of a sibling field or section before which the new item will be inserted.                                                                                |                         |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,project,name |
| Section ID          | The unique identifier for the section.                                                                                                                           |                         |
| Section Name        | The display name for the section.                                                                                                                                |                         |

### Update Tag {#updatetag}

Update the information and metadata of the given tag.

| Input               | Comments                                                                                                                                                         | Default                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                     |                                                 |
| Color               | The display color associated with the object in the Asana UI.                                                                                                    | light-green                                     |
| Name                | The display name of the resource. A short sentence fragment that fits on a single line in the UI for maximum readability.                                        |                                                 |
| Notes               | Free-form plain-text description associated with the resource. For rich formatting use HTML Notes instead.                                                       |                                                 |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed. | created_at,followers,name,color,workspace,notes |
| Tag ID              | The unique identifier for the tag.                                                                                                                               |                                                 |

### Update Task {#updatetask}

Update the information and metadata of the given task.

| Input               | Comments                                                                                                                                                                                                                | Default                                                                                                                                                                                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Asana connection to use.                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                               |
| Assignee ID         | The unique identifier of the user assigned to the task.                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                               |
| Assignee Section ID | The unique identifier for the section to assign the task to. The assignee section is a subdivision of a project that groups tasks together in the assignee's 'My Tasks' list.                                           |                                                                                                                                                                                                                                                                                                               |
| HTML Notes          | The rich-text notes for the resource as HTML. See [Rich text in the Asana API](https://developers.asana.com/docs/rich-text) for supported markup.                                                                       |                                                                                                                                                                                                                                                                                                               |
| Name                | The display name of the resource. A short sentence fragment that fits on a single line in the UI for maximum readability.                                                                                               |                                                                                                                                                                                                                                                                                                               |
| Notes               | Free-form plain-text description associated with the resource. For rich formatting use HTML Notes instead.                                                                                                              |                                                                                                                                                                                                                                                                                                               |
| Optional Properties | A comma-separated list of fields to include in the API response. The default value contains the standard fields for this action. Add or remove fields as needed.                                                        | projects,resource_subtype,assignee,assignee_status,created_at,completed,completed_at,dependencies,custom_fields,dependents,due_on,due_at,followers,external,is_rendered_as_separator,liked,likes,memberships,modified_at,name,notes,html_notes,num_likes,num_subtasks,parent,start_at,start_on,workspace,tags |
| Parent ID           | The unique identifier of the parent element.                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                               |
| Resource Subtype    | The subtype of the resource (e.g., 'default_task', 'milestone'). See [Asana resource subtypes](https://developers.asana.com/docs/object-hierarchy) for valid values.                                                    |                                                                                                                                                                                                                                                                                                               |
| Scheduling          | Due date, due timestamp, start date, and start timestamp.                                                                                                                                                               |                                                                                                                                                                                                                                                                                                               |
| Due At              | The date and time the task is due. Format: ISO 8601 in UTC. Should not be used together with Due On.                                                                                                                    |                                                                                                                                                                                                                                                                                                               |
| Due On              | The date the project or task is due. Format: YYYY-MM-DD. Should not be used together with Due At.                                                                                                                       |                                                                                                                                                                                                                                                                                                               |
| Start At            | The date and time work begins for the task, or null if the task has no start time. Format: ISO 8601 in UTC. Should not be used together with Start On. Due At must be present when setting or unsetting this parameter. |                                                                                                                                                                                                                                                                                                               |
| Start On            | The date work for this project begins, or null if no start date is set. Format: YYYY-MM-DD.                                                                                                                             |                                                                                                                                                                                                                                                                                                               |
| Task ID             | The unique identifier for the task.                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                               |
| Task Status         | Approval Status, Assignee Status, Completed By, Completed, and Is Liked.                                                                                                                                                |                                                                                                                                                                                                                                                                                                               |
| Approval Status     | The approval status to set on the task.                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                               |
| Assignee Status     | The status the task has in relation to its assignee. This field is deprecated — it can still be used in requests but is not recommended for new records.                                                                |                                                                                                                                                                                                                                                                                                               |
| Completed By        | The name of the user who completed the task. A user gid or email address may also be provided to reference an existing Asana user.                                                                                      |                                                                                                                                                                                                                                                                                                               |
| Completed           | Whether the task is marked as complete. Select 'Do not change' to leave the existing value untouched.                                                                                                                   |                                                                                                                                                                                                                                                                                                               |
| Is Liked            | Whether the task is marked as 'liked' for the authenticated user. Select 'Do not change' to leave the existing value untouched.                                                                                         |                                                                                                                                                                                                                                                                                                               |
| Workspace ID        | The unique identifier for the workspace. Required when the account has multiple workspaces.                                                                                                                             |                                                                                                                                                                                                                                                                                                               |
