---
title: Microsoft Planner Connector
sidebar_label: Microsoft Planner
description: Manage plans, buckets, tasks, and task details in Microsoft Planner.
---

![Microsoft Planner](./assets/ms-planner.png#connector-icon)
[Microsoft Planner](https://www.microsoft.com/en-us/microsoft-365/planner/planner-app) is a task and work management service for Microsoft 365 teams, organizing work into plans, buckets, and tasks.
This component allows creating, reading, updating, and deleting plans, buckets, and tasks, managing task descriptions, checklists, and links, assigning work to people, and detecting newly created tasks on a schedule.

## API Documentation

This component was built using the [Microsoft Graph Planner API](https://learn.microsoft.com/en-us/graph/api/resources/planner-overview?view=graph-rest-1.0) currently utilizing v1.0

## Change Detection

Planner does not publish change notifications, and its plans, buckets, and tasks carry no modification timestamp.
The **New Tasks** trigger therefore detects tasks that are added to a plan, and cannot detect tasks that are edited, completed, or deleted.
Flows that need to react to those events should poll with the **List Tasks in Plan** action and compare against their own records.

## Migrating from Microsoft Project

Microsoft retired Project Online, including Project Web App, on September 30, 2026.
Its REST and OData reporting endpoints are no longer available, so integrations built on the **Microsoft Project** component no longer return data.
Microsoft lists Planner as one destination, alongside Project desktop, Project Server Subscription Edition, and Dynamics 365 Project Operations; see [Prepare for Project Online retirement](https://learn.microsoft.com/en-us/planner/prepare-for-project-online-retirement).

To move an integration from the **Microsoft Project** component to this component:

1. Confirm the destination plans are basic plans. Work moved into premium plans is not reachable through this component.
2. Map Project records to Planner resources: projects to plans, phases or summary tasks to buckets, tasks to tasks, and assignments to task assignees.
3. Replace Project reporting queries with the list actions, such as **List Plans in Group**, **List Buckets in Plan**, and **List Tasks in Plan**.
4. Replace scheduled checks for new work with the **New Tasks** trigger, within the change detection limits described above.
5. Store Project data that has no Planner equivalent, such as custom fields, baselines, dependencies, timesheets, and resource data, in another system before migrating.

## Connections

### OAuth 2.0 Authorization Code {#templatedoauth}

Authenticates actions in all Microsoft's Graph API services.

To connect to Microsoft Planner with a connection of type **OAuth 2.0 Authorization Code**, create an App Registration in Microsoft Entra (formerly Azure Active Directory).

This is the recommended connection. Planner operations that act on "the signed-in user" (listing the plans shared with a user, or the tasks assigned to them) require a user to authorize, and are only available through this flow.

#### Prerequisites

- Access to the [Microsoft Entra admin center](https://entra.microsoft.com/) or the [Azure Portal](https://portal.azure.com/#home)
- Permissions to create App Registrations
- A Microsoft 365 group that contains the plans to work with
- A work or school account to authorize with. Planner is unavailable to personal Microsoft accounts

#### Setup Steps

1. Navigate to [Microsoft Entra](https://entra.microsoft.com/) **Identity** > **Applications** > **App registrations** and select **New registration**
2. Set **Supported account types**:
   - Choose **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** to allow users from other organizations to authenticate
3. Under **Platforms**, add the **Web** platform:
   - Add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as a **Redirect URI**
4. Navigate to **Certificates & Secrets** and create a new **Client Secret**:
   - Copy the **Value** of the client secret (this is only shown once)
5. Navigate to the **Overview** page and copy the **Application (client) ID**

#### Configure the Connection

- **Base URL** defaults to `https://graph.microsoft.com`. Change it only for a national cloud deployment
- Set the **Tenant URL** to `login.microsoftonline.com/organizations` rather than the default `login.microsoftonline.com/common`, so that a personal account cannot complete an authorization that would then fail on every action
- Enter the **Application (client) ID** value into the **Client ID** field
- Enter the client secret **Value** into the **Client secret value** field
- The default **Scopes** are pre-configured:
  ```
  https://graph.microsoft.com/Tasks.ReadWrite https://graph.microsoft.com/User.Read https://graph.microsoft.com/User.ReadBasic.All offline_access
  ```
  - `https://graph.microsoft.com/Tasks.ReadWrite` - Read and write plans, buckets, and tasks
  - `https://graph.microsoft.com/User.Read` - Sign in, and read the groups the signed-in user belongs to, which is how the **Group ID** dropdown is populated
  - `https://graph.microsoft.com/User.ReadBasic.All` - List the organization's users, which is how the **Select User** dropdown is populated
  - `offline_access` - Maintain the connection and receive refresh tokens
  - To list every group in the organization in the **Group ID** dropdown, rather than only the signed-in user's groups, add `https://graph.microsoft.com/Group.Read.All`. That scope requires admin consent
  - Refer to the [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference) for additional scope information
- **Additional Authorization Parameters** (optional) - Query string parameters appended to the OAuth authorization URL:
  - Use `prompt=consent` to force the consent screen, which is useful when the requested scopes have changed
  - Use `login_hint=user@example.com` to pre-fill the sign-in page

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                               | Comments                                                                                                                                                                                                                                                                                 | Default                                                                                                                                         |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Base URL                            | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints).                                                     | https://graph.microsoft.com                                                                                                                     |
| Tenant URL                          | The tenant URL for the Microsoft Graph API. This is the URL of the tenant that you are connecting to. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-national-cloud#microsoft-entra-authentication-endpoints). | login.microsoftonline.com/common                                                                                                                |
| Scopes                              | Space-separated Microsoft Graph scopes. Tasks.ReadWrite covers all Planner reads and writes and offline_access is required to receive a refresh token. Add Group.Read.All to list every group in the tenant rather than only the groups the signed-in user belongs to.                   | https://graph.microsoft.com/Tasks.ReadWrite https://graph.microsoft.com/User.Read https://graph.microsoft.com/User.ReadBasic.All offline_access |
| Client ID                           | Client Id of your Azure application.                                                                                                                                                                                                                                                     |                                                                                                                                                 |
| Client secret value                 | Client Secret generated under 'Certificates & Secrets' in your Azure application.                                                                                                                                                                                                        |                                                                                                                                                 |
| Additional Authorization Parameters | Query string parameters to append to the OAuth authorization URL. Common parameters include `prompt=consent` to force the consent screen or `login_hint=user@example.com` to pre-fill the login email.                                                                                   |                                                                                                                                                 |

### OAuth 2.0 Client Credentials {#oauthclientcredentials}

Authenticates actions in all Microsoft's Graph API services.

To connect to Microsoft Planner without a signed-in user, create a connection of type **OAuth 2.0 Client Credentials** backed by an App Registration with application permissions in Microsoft Entra.

The Client Credentials flow is used for unattended server-to-server synchronization. Because no user signs in, every request is made on behalf of the application and a **User ID** must be supplied to stand in for "the current user".

Listing the plans shared with a user does not accept application permissions, so the **List Plans for User** action works only with the **OAuth 2.0 Authorization Code** connection. Use **List Plans in Group** instead. **List Tasks for User** works with either connection.

#### Prerequisites

- Access to the [Microsoft Entra admin center](https://entra.microsoft.com/)
- Permissions to create App Registrations and grant admin consent
- The Tenant ID for the organization

#### Setup Steps

1. Navigate to [Microsoft Entra](https://entra.microsoft.com/) **Identity** > **Applications** > **App registrations** and select **New registration**
2. From the App menu, navigate to **Certificates & Secrets** and add a new **Client Secret**:
   - Copy the **Value** of the client secret (this is only shown once)
3. Navigate to the **Overview** page and copy the **Application (client) ID**
4. Navigate to **API Permissions** and configure application permissions:
   - Select **Add Permission** > **Microsoft Graph** > **Application permissions**
   - Add `Tasks.Read.All` for read-only access, or `Tasks.ReadWrite.All` to create and modify plans, buckets, and tasks
   - Add `Group.Read.All` to populate the **Group ID** dropdown
   - Add `User.Read.All` to populate the **Select User** dropdown used for task assignment
5. Select **Grant Admin Consent** to authorize the application permissions

#### Configure the Connection

- **Base URL** defaults to `https://graph.microsoft.com` and **Microsoft Entra ID Endpoint** defaults to `https://login.microsoftonline.com`. Change them only for a national cloud deployment
- Enter the Tenant ID for the organization being accessed into the **Tenant** field. A client credentials token cannot be issued against the `common` endpoint, so a specific tenant is required
- Enter the **Application (client) ID** value into the **Client ID** field
- Enter the **Client Secret** value into the same named field
- Enter the **User ID** (object ID or user principal name) of the user whose Planner data is accessed. Requests for "my plans" or "my tasks" target this user
- The default **Scopes** value `https://graph.microsoft.com/.default` is pre-configured

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                       | Comments                                                                                                                                                                                                                                                   | Default                              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Base URL                    | The base URL for the Microsoft Graph API. Depending on your cloud environment, you can choose the correct one [here](https://learn.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints).                       | https://graph.microsoft.com          |
| Microsoft Entra ID Endpoint | The Microsoft Entra ID endpoint for the Microsoft Graph API. You can find this in the Azure portal or [here](https://learn.microsoft.com/en-us/graph/deployments#app-registration-and-token-service-root-endpoints).                                       | https://login.microsoftonline.com    |
| Tenant                      | Tenant ID or primary domain, found on the Overview page of the Microsoft Entra admin center. A client credentials token cannot be issued against the 'common' endpoint, so a specific tenant is required here.                                             |                                      |
| Client ID                   | Client Id of your Azure application.                                                                                                                                                                                                                       |                                      |
| Client Secret               | Client Secret generated under 'Certificates & Secrets' in your Azure application.                                                                                                                                                                          |                                      |
| Scopes                      | Microsoft Graph API Scopes.                                                                                                                                                                                                                                | https://graph.microsoft.com/.default |
| User ID                     | Object ID or user principal name of the user whose Planner data is accessed, found in the Microsoft Entra admin center under Users. Required because a client credentials token has no signed-in user, so every /me path is rewritten to /users/{User ID}. |                                      |

## Triggers

### New Tasks {#pollchangestrigger}

Retrieves existing and newly created tasks for a specified Microsoft Planner plan. Load history once, check for new tasks on a schedule, or both.

| Input          | Comments                                                                                                                                                                                                                              | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Microsoft Planner connection to use.                                                                                                                                                                                              |         |
| Group ID       | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.                                         |         |
| Plan ID        | The unique identifier of the plan.                                                                                                                                                                                                    |         |
| Look-back Date | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each task created on or after this date once. |         |

## Actions

### Assign Task {#assigntask}

Add or remove the users assigned to a task.

| Input      | Comments                                                                                                                                                                                                                                         | Default         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                                                                         |                 |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.                                                    |                 |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                                                                               |                 |
| Task ID    | The unique identifier of the task.                                                                                                                                                                                                               |                 |
| Assignment | Users to assign or unassign. At least one of Assign To or Unassign is required.                                                                                                                                                                  |                 |
| Assign To  | Users to assign to the task, identified by object ID. Existing assignees that are not listed here are left in place.                                                                                                                             | <code>[]</code> |
| Unassign   | Users to remove from the task, identified by object ID.                                                                                                                                                                                          | <code>[]</code> |
| ETag       | The last known ETag of the resource being changed. Leave blank to let the action read the current ETag before writing. Supply a value to make the change conditional on that exact version, which fails with a conflict if the resource changed. |                 |

### Complete Task {#completetask}

Mark a task as complete.

| Input      | Comments                                                                                                                                                                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                                                                         |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.                                                    |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                                                                               |         |
| Task ID    | The unique identifier of the task.                                                                                                                                                                                                               |         |
| ETag       | The last known ETag of the resource being changed. Leave blank to let the action read the current ETag before writing. Supply a value to make the change conditional on that exact version, which fails with a conflict if the resource changed. |         |

### Create Bucket {#createbucket}

Create a bucket in a plan.

| Input      | Comments                                                                                                                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                      |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead. |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                            |         |
| Name       | The name of the bucket, shown as a column heading on the plan's board.                                                                                                                        |         |

### Create Plan {#createplan}

Create a plan inside a Microsoft 365 group. The caller must already be a member of that group; creating a group does not add its creator as a member, which is a common cause of a permissions error here.

| Input      | Comments                                                                                          | Default |
| ---------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use.                                                          |         |
| Group ID   | The Microsoft 365 group that holds the plan. Only Microsoft 365 groups can contain Planner plans. |         |
| Title      | The title of the plan, shown wherever the plan is listed.                                         |         |

### Create Task {#createtask}

Create a task in a plan. Supplying a description performs a second write, because a task's description is stored on its details resource and cannot be set when the task is created.

| Input            | Comments                                                                                                                                                                                      | Default         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Microsoft Planner connection to use.                                                                                                                                                      |                 |
| Group ID         | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead. |                 |
| Plan ID          | The unique identifier of the plan.                                                                                                                                                            |                 |
| Title            | The title of the task, shown on its card in the Planner board.                                                                                                                                |                 |
| Bucket ID        | The unique identifier of the bucket to create the task in. Leave blank to create the task without assigning it to a bucket.                                                                   |                 |
| Assignment       | Users to assign or unassign.                                                                                                                                                                  |                 |
| Assign To        | Users to assign to the task, identified by object ID. Existing assignees that are not listed here are left in place.                                                                          | <code>[]</code> |
| Unassign         | Users to remove from the task, identified by object ID.                                                                                                                                       | <code>[]</code> |
| Schedule         | Start and due timestamps.                                                                                                                                                                     |                 |
| Start At         | The timestamp the task starts, in ISO 8601 format.                                                                                                                                            |                 |
| Due At           | The timestamp the task is due, in ISO 8601 format.                                                                                                                                            |                 |
| Priority         | The priority of the task. Planner stores priority as a number from 0 to 10 and displays it in four bands, so these four values are the ones the Planner interface itself uses.                |                 |
| Percent Complete | How complete the task is, from 0 to 100. Planner has no separate completed flag: setting this to 100 completes the task, and the service fills in who completed it and when.                  |                 |
| Categories       | Colored categories to apply or remove.                                                                                                                                                        |                 |
| Apply            | Colored categories to apply to the task. The label shown for each category is configured on the plan.                                                                                         | <code>[]</code> |
| Remove           | Colored categories to remove from the task.                                                                                                                                                   | <code>[]</code> |
| Description      | The description of the task. Descriptions live on the task's details resource rather than the task itself, so setting one is a separate write.                                                |                 |

### Delete Bucket {#deletebucket}

Delete a bucket and the tasks it contains.

| Input      | Comments                                                                                                                                                                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                                                                         |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.                                                    |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                                                                               |         |
| Bucket ID  | The unique identifier of the bucket.                                                                                                                                                                                                             |         |
| ETag       | The last known ETag of the resource being changed. Leave blank to let the action read the current ETag before writing. Supply a value to make the change conditional on that exact version, which fails with a conflict if the resource changed. |         |

### Delete Plan {#deleteplan}

Delete a plan and everything it contains.

| Input      | Comments                                                                                                                                                                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                                                                         |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.                                                    |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                                                                               |         |
| ETag       | The last known ETag of the resource being changed. Leave blank to let the action read the current ETag before writing. Supply a value to make the change conditional on that exact version, which fails with a conflict if the resource changed. |         |

### Delete Task {#deletetask}

Delete a task.

| Input      | Comments                                                                                                                                                                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                                                                         |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.                                                    |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                                                                               |         |
| Task ID    | The unique identifier of the task.                                                                                                                                                                                                               |         |
| ETag       | The last known ETag of the resource being changed. Leave blank to let the action read the current ETag before writing. Supply a value to make the change conditional on that exact version, which fails with a conflict if the resource changed. |         |

### Get Bucket {#getbucket}

Retrieve a single bucket by its ID.

| Input      | Comments                                                                                                                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                      |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead. |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                            |         |
| Bucket ID  | The unique identifier of the bucket.                                                                                                                                                          |         |

### Get Plan {#getplan}

Retrieve a single plan by its ID.

| Input      | Comments                                                                                                                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                      |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead. |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                            |         |

### Get Plan Details {#getplandetails}

Retrieve a plan's category labels and shared-with list.

| Input      | Comments                                                                                                                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                      |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead. |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                            |         |

### Get Task {#gettask}

Retrieve a single task by its ID.

| Input      | Comments                                                                                                                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                      |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead. |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                            |         |
| Task ID    | The unique identifier of the task.                                                                                                                                                            |         |

### Get Task Details {#gettaskdetails}

Retrieve a task's description, checklist, and links.

| Input      | Comments                                                                                                                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                      |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead. |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                            |         |
| Task ID    | The unique identifier of the task.                                                                                                                                                            |         |

### List Buckets in Plan {#listbucketsinplan}

List every bucket in a plan.

| Input      | Comments                                                                                                                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                      |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead. |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                            |         |

### List Plans for User {#listplansforuser}

List the plans shared with the user.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use. |         |

### List Plans in Group {#listplansingroup}

List every plan contained by a Microsoft 365 group.

| Input      | Comments                                                                                          | Default |
| ---------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use.                                                          |         |
| Group ID   | The Microsoft 365 group that holds the plan. Only Microsoft 365 groups can contain Planner plans. |         |

### List Tasks for User {#listtasksforuser}

List every task assigned to the user, across every plan.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use. |         |

### List Tasks in Bucket {#listtasksinbucket}

List every task in a single bucket.

| Input      | Comments                                                                                                                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                      |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead. |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                            |         |
| Bucket ID  | The unique identifier of the bucket.                                                                                                                                                          |         |

### List Tasks in Plan {#listtasksinplan}

List every task in a plan, across all of its buckets.

| Input      | Comments                                                                                                                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                      |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead. |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                            |         |

### Move Task to Bucket {#movetasktobucket}

Move a task into a different bucket. The destination bucket must belong to the same plan as the task.

| Input      | Comments                                                                                                                                                                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                                                                         |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.                                                    |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                                                                               |         |
| Task ID    | The unique identifier of the task.                                                                                                                                                                                                               |         |
| Bucket ID  | The unique identifier of the bucket.                                                                                                                                                                                                             |         |
| ETag       | The last known ETag of the resource being changed. Leave blank to let the action read the current ETag before writing. Supply a value to make the change conditional on that exact version, which fails with a conflict if the resource changed. |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to the Microsoft Graph API.

| Input                   | Comments                                                                                                                                                                                                                                                                 | Default         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection              | The Microsoft Planner connection to use.                                                                                                                                                                                                                                 |                 |
| URL                     | The path of the Microsoft Graph endpoint to call (e.g., `/planner/plans`). The base URL `https://graph.microsoft.com/v1.0` is added automatically. Planner endpoints that modify or delete a resource require an `If-Match` header carrying the resource's current ETag. |                 |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                  |                 |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                |                 |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                     | <code>[]</code> |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                         | <code>[]</code> |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                   | <code>[]</code> |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                      | <code>[]</code> |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                              | <code>[]</code> |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                 | json            |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                      |                 |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                      | 0               |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                         | false           |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                      | 0               |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                            | false           |

### Update Bucket {#updatebucket}

Rename a bucket. A bucket cannot be moved to a different plan.

| Input      | Comments                                                                                                                                                                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                                                                         |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.                                                    |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                                                                               |         |
| Bucket ID  | The unique identifier of the bucket.                                                                                                                                                                                                             |         |
| Name       | The name of the bucket, shown as a column heading on the plan's board.                                                                                                                                                                           |         |
| ETag       | The last known ETag of the resource being changed. Leave blank to let the action read the current ETag before writing. Supply a value to make the change conditional on that exact version, which fails with a conflict if the resource changed. |         |

### Update Plan {#updateplan}

Rename a plan. The title is the only property a plan allows changing.

| Input      | Comments                                                                                                                                                                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Planner connection to use.                                                                                                                                                                                                         |         |
| Group ID   | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.                                                    |         |
| Plan ID    | The unique identifier of the plan.                                                                                                                                                                                                               |         |
| Title      | The title of the plan, shown wherever the plan is listed.                                                                                                                                                                                        |         |
| ETag       | The last known ETag of the resource being changed. Leave blank to let the action read the current ETag before writing. Supply a value to make the change conditional on that exact version, which fails with a conflict if the resource changed. |         |

### Update Plan Details {#updateplandetails}

Set a plan's category labels and adjust who it is shared with.

| Input             | Comments                                                                                                                                                                                        | Default         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection        | The Microsoft Planner connection to use.                                                                                                                                                        |                 |
| Group ID          | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.   |                 |
| Plan ID           | The unique identifier of the plan.                                                                                                                                                              |                 |
| Category Labels   | Labels for the plan's colored categories, keyed by category1 through category25. Only the categories listed here change; leave a category out to keep its current label.                        | <code>[]</code> |
| Sharing           | Users to add to or remove from the shared-with list.                                                                                                                                            |                 |
| Share With        | Users to add to the plan's shared-with list, identified by object ID. For a plan contained by a Microsoft 365 group, managing group membership is usually preferable to sharing individually.   | <code>[]</code> |
| Unshare With      | Users to remove from the plan's shared-with list, identified by object ID.                                                                                                                      | <code>[]</code> |
| Plan Details ETag | The last known ETag of the plan details. Plan details carry their own ETag, separate from the plan's, so a plan ETag cannot be used here. Leave blank to read the current value before writing. |                 |

### Update Task {#updatetask}

Update a task's properties. Only the fields supplied are changed; everything else keeps its current value.

| Input                  | Comments                                                                                                                                                                                                                                         | Default         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection             | The Microsoft Planner connection to use.                                                                                                                                                                                                         |                 |
| Group ID               | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.                                                    |                 |
| Plan ID                | The unique identifier of the plan.                                                                                                                                                                                                               |                 |
| Task ID                | The unique identifier of the task.                                                                                                                                                                                                               |                 |
| Title                  | A new title for the task. Leave blank to keep the current title.                                                                                                                                                                                 |                 |
| Bucket ID              | The unique identifier of the bucket. Leave blank to leave the task in its current bucket.                                                                                                                                                        |                 |
| Assignment             | Users to assign or unassign.                                                                                                                                                                                                                     |                 |
| Assign To              | Users to assign to the task, identified by object ID. Existing assignees that are not listed here are left in place.                                                                                                                             | <code>[]</code> |
| Unassign               | Users to remove from the task, identified by object ID.                                                                                                                                                                                          | <code>[]</code> |
| Schedule               | Start and due timestamps.                                                                                                                                                                                                                        |                 |
| Start At               | The timestamp the task starts, in ISO 8601 format.                                                                                                                                                                                               |                 |
| Due At                 | The timestamp the task is due, in ISO 8601 format.                                                                                                                                                                                               |                 |
| Priority               | The priority of the task. Planner stores priority as a number from 0 to 10 and displays it in four bands, so these four values are the ones the Planner interface itself uses.                                                                   |                 |
| Percent Complete       | How complete the task is, from 0 to 100. Planner has no separate completed flag: setting this to 100 completes the task, and the service fills in who completed it and when.                                                                     |                 |
| Categories             | Colored categories to apply or remove.                                                                                                                                                                                                           |                 |
| Apply                  | Colored categories to apply to the task. The label shown for each category is configured on the plan.                                                                                                                                            | <code>[]</code> |
| Remove                 | Colored categories to remove from the task.                                                                                                                                                                                                      | <code>[]</code> |
| Conversation Thread ID | The identifier of the group conversation thread associated with the task.                                                                                                                                                                        |                 |
| ETag                   | The last known ETag of the resource being changed. Leave blank to let the action read the current ETag before writing. Supply a value to make the change conditional on that exact version, which fails with a conflict if the resource changed. |                 |

### Update Task Details {#updatetaskdetails}

Set a task's description, checklist items, and external links.

| Input             | Comments                                                                                                                                                                                        | Default         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection        | The Microsoft Planner connection to use.                                                                                                                                                        |                 |
| Group ID          | The Microsoft 365 group whose plans populate the Plan ID dropdown. Only Microsoft 365 groups can hold Planner plans. Leave blank to list the plans shared with the connection's user instead.   |                 |
| Plan ID           | The unique identifier of the plan.                                                                                                                                                              |                 |
| Task ID           | The unique identifier of the task.                                                                                                                                                              |                 |
| Description       | The description of the task. Descriptions live on the task's details resource rather than the task itself, so setting one is a separate write.                                                  |                 |
| Checklist         | Checklist items to add or remove.                                                                                                                                                               |                 |
| Add Items         | Checklist items to add, where the key is the item title and the value is true if the item starts checked.                                                                                       | <code>[]</code> |
| Remove Items      | Identifiers of checklist items to remove. Use the Get Task Details action to read the current item identifiers.                                                                                 | <code>[]</code> |
| Links             | External links to attach or remove.                                                                                                                                                             |                 |
| Add               | External links to attach to the task, where the key is the URL and the value is the display name shown in Planner.                                                                              | <code>[]</code> |
| Remove            | URLs of external links to remove from the task.                                                                                                                                                 | <code>[]</code> |
| Preview Type      | Which part of the task details is shown on the task's card in the Planner board.                                                                                                                |                 |
| Task Details ETag | The last known ETag of the task details. Task details carry their own ETag, separate from the task's, so a task ETag cannot be used here. Leave blank to read the current value before writing. |                 |
