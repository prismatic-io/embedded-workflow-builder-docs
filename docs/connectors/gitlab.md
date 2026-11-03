---
title: GitLab Connector
sidebar_label: GitLab
description: Manage projects, issues, merge requests, branches, and repository files in GitLab.com or a self-managed GitLab instance, including instances on a private network.
---

![GitLab](./assets/gitlab.png#connector-icon)
[GitLab](https://about.gitlab.com/) is a DevSecOps platform for source control, issue tracking, merge requests, and CI/CD, available as GitLab.com or as a self-managed instance.

Use the GitLab component to manage projects, issues, merge requests, branches, commits, repository files, and pipelines, and to react to GitLab events through webhooks or polling. The component also connects to self-managed instances on a private network through the on-prem agent, without exposing the instance to the internet.

## API Documentation

[GitLab REST API](https://docs.gitlab.com/api/rest/)

## Connections

### Access Token {#accesstoken}

Authenticate requests to GitLab using a personal, project, or group access token.

Use an access token to connect to GitLab.com or to a self-managed GitLab instance, including an instance on a private network reached through the on-prem agent (see **On-Prem Connections** below).

GitLab supports three kinds of access token, and all three work with this connection:

- A [personal access token](https://docs.gitlab.com/user/profile/personal_access_tokens/) acts as the user who created it. Use it for development and testing.
- A [project access token](https://docs.gitlab.com/user/project/settings/project_access_tokens/) or [group access token](https://docs.gitlab.com/user/group/settings/group_access_tokens/) acts as a bot user scoped to one project or group. Use one of these for production, so the integration does not depend on an individual's account.

#### Prerequisites

- A GitLab account with access to the projects the integration uses
- For project and group access tokens on GitLab.com, a Premium or Ultimate subscription (self-managed instances include them on every license)
- The Maintainer or Owner role on each project where the integration manages webhooks

#### Setup Steps

To create a personal access token:

1. In GitLab, select the avatar in the upper-right corner, then **Edit profile** > **Access** > **Personal access tokens**
2. Select **Generate token** > **Legacy token**, then enter a name

To create a project or group access token:

1. Open the project or group, then **Settings** > **Access tokens**
2. Select **Add new token** and enter a name, then select a role: **Developer** for issues, merge requests, and branches, or **Maintainer** to manage webhooks

For either kind of token:

1. Set an expiration date. Tokens expire after at most 365 days by default, so rotate the token and update the connection before that date
2. Select the **api** scope, or **read_api** for an integration that only reads data
3. Create the token (for example, **Create project access token**) and copy the token value

#### Configure the Connection

- Enter the GitLab instance's URL in **GitLab URL**: `https://gitlab.com` for GitLab.com, or the base URL of a self-managed instance
- Enter the token in **Access Token**
- If the instance's certificate is signed by an internal certificate authority, paste that authority's PEM-encoded certificate into **CA Certificate**. This applies to direct and on-prem connections alike

:::warning[Ignore SSL Errors Disables Certificate Validation]
**Ignore SSL Errors** turns off TLS certificate validation entirely. Use it only when a CA Certificate cannot be supplied, and supply one instead whenever possible.
:::

### On-Prem Connections

To reach a self-managed GitLab instance on a private network, route this connection through the on-prem agent. The agent runs inside the network and makes only outbound connections (ports 22 and 443), so no inbound firewall ports need to be opened and the instance does not need to be exposed to the internet.

1. Install the on-prem agent on a machine with Docker inside the private network that can reach the GitLab instance. Set **APP_HOST** to the instance's hostname or IP address and **APP_PORT** to its HTTPS port (usually `443`). `localhost` and `127.0.0.1` refer to the agent's own container, so for a service on the same machine use `host.docker.internal`
2. In the integration's config wizard, open this connection and select **Allow On-Prem Connections**
3. When configuring the instance, turn on **Use On-Prem Connection** and select the on-prem agent's connection
4. Enter the instance's own URL in **GitLab URL**, such as `https://gitlab.internal.example.com`, not the agent's address. Requests travel through the agent, but the TLS certificate is validated against this URL's hostname
5. If the instance's certificate is signed by an internal certificate authority, paste that authority's PEM-encoded certificate into **CA Certificate**

**GitLab URL** can use `http` only through the on-prem agent. A direct connection requires `https`.

| Input             | Comments                                                                                                                                                                                                                                                                                              | Default            |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| GitLab URL        | The base URL of the GitLab instance: https://gitlab.com for GitLab.com, or the URL of a self-managed instance. For an instance on a private network, use its internal URL; its hostname is used to validate the TLS certificate. The URL must use https unless requests go through the on-prem agent. | https://gitlab.com |
| Access Token      | A personal, project, or group access token with the api scope, or read_api for read-only use. Tokens expire after at most 365 days by default. See [Personal access tokens](https://docs.gitlab.com/user/profile/personal_access_tokens/).                                                            |                    |
| CA Certificate    | The PEM-encoded certificate of the authority that signed the instance's TLS certificate. Required when a self-managed instance uses an internal certificate authority.                                                                                                                                |                    |
| Ignore SSL Errors | When true, TLS certificate validation is disabled. Supply a CA Certificate instead whenever possible.                                                                                                                                                                                                 | false              |

### OAuth 2.0 {#oauth2}

Authenticate requests to GitLab using OAuth 2.0 authorization code flow.

To connect to GitLab using OAuth 2.0, register an OAuth application in GitLab. Each user then authorizes the integration with their own GitLab account. This works for GitLab.com and for self-managed instances; see [Configure GitLab as an OAuth 2.0 authentication identity provider](https://docs.gitlab.com/integration/oauth_provider/).

#### Prerequisites

- A GitLab account that can create OAuth applications (user-owned, group-owned, or, on self-managed, instance-wide as an administrator)

#### Setup Steps

1. In GitLab, open the application settings:
   - User-owned application: select the avatar in the upper-right corner, then **Edit profile** > **Access** > **Applications**
   - Group-owned application: open the group, then **Settings** > **Applications**
   - Instance-wide application (self-managed, administrator): select **Admin** in the upper-right corner, then **Applications**
2. Enter a name for the application
3. Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as the **Redirect URI**
4. Select the **api** scope, or **read_api** for an integration that only reads data
5. Select **Save application** and copy the **Application ID** and **Secret**

#### Configure the Connection

- Enter the **Application ID** as **Client ID** and the **Secret** as **Client Secret**
- For **Scopes**, use the same value selected in the application:
  ```
  api
  ```
- For a self-managed instance, replace `gitlab.com` with the instance's host in **GitLab URL**, **Authorize URL**, and **Token URL**
- If the instance's certificate is signed by an internal certificate authority, paste that authority's PEM-encoded certificate into **CA Certificate**. This applies to direct and on-prem connections alike

:::warning[Ignore SSL Errors Disables Certificate Validation]
**Ignore SSL Errors** turns off TLS certificate validation entirely. Use it only when a CA Certificate cannot be supplied, and supply one instead whenever possible.
:::

GitLab issues a new refresh token on every refresh and invalidates the old one. The connection stores the replacement automatically; see [OAuth 2.0 identity provider API](https://docs.gitlab.com/api/oauth2/).

### On-Prem Connections

To reach a self-managed GitLab instance on a private network, route this connection through the on-prem agent. The agent runs inside the network and makes only outbound connections (ports 22 and 443), so no inbound firewall ports need to be opened and the instance does not need to be exposed to the internet.

1. Install the on-prem agent on a machine with Docker inside the private network that can reach the GitLab instance. Set **APP_HOST** to the instance's hostname or IP address and **APP_PORT** to its HTTPS port (usually `443`). `localhost` and `127.0.0.1` refer to the agent's own container, so for a service on the same machine use `host.docker.internal`
2. In the integration's config wizard, open this connection and select **Allow On-Prem Connections**
3. When configuring the instance, turn on **Use On-Prem Connection** and select the on-prem agent's connection
4. Enter the instance's own URL in **GitLab URL**, such as `https://gitlab.internal.example.com`, not the agent's address. Requests travel through the agent, but the TLS certificate is validated against this URL's hostname
5. If the instance's certificate is signed by an internal certificate authority, paste that authority's PEM-encoded certificate into **CA Certificate**

Users who authorize the connection must be able to reach the **Authorize URL** from their browser, and **Token URL** must be reachable from the platform, which exchanges the authorization code and refreshes tokens.

**GitLab URL** can use `http` only through the on-prem agent. A direct connection requires `https`.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                                                                                                                                                                                                                                                                              | Default                            |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| GitLab URL        | The base URL of the GitLab instance: https://gitlab.com for GitLab.com, or the URL of a self-managed instance. For an instance on a private network, use its internal URL; its hostname is used to validate the TLS certificate. The URL must use https unless requests go through the on-prem agent. | https://gitlab.com                 |
| Authorize URL     | The OAuth 2.0 authorization URL. For a self-managed instance, replace gitlab.com with the instance's host. See [OAuth 2.0 identity provider API](https://docs.gitlab.com/api/oauth2/).                                                                                                                | https://gitlab.com/oauth/authorize |
| Token URL         | The OAuth 2.0 token URL. For a self-managed instance, replace gitlab.com with the instance's host.                                                                                                                                                                                                    | https://gitlab.com/oauth/token     |
| Scopes            | Space-separated OAuth scopes. Use api for read and write access, or read_api for read-only access.                                                                                                                                                                                                    | api                                |
| Client ID         | The Application ID of the OAuth application registered in GitLab. See [Configure GitLab as an OAuth 2.0 authentication identity provider](https://docs.gitlab.com/integration/oauth_provider/).                                                                                                       |                                    |
| Client Secret     | The Secret of the OAuth application registered in GitLab.                                                                                                                                                                                                                                             |                                    |
| CA Certificate    | The PEM-encoded certificate of the authority that signed the instance's TLS certificate. Required when a self-managed instance uses an internal certificate authority.                                                                                                                                |                                    |
| Ignore SSL Errors | When true, TLS certificate validation is disabled. Supply a CA Certificate instead whenever possible.                                                                                                                                                                                                 | false                              |

## Triggers

### New and Updated Records {#pollchangestrigger}

Retrieves existing and ongoing issues or merge requests for a specified GitLab project. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                                                  | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The GitLab connection to use.                                                                                                                                                                                                                                             |         |
| Project              | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root.                                                                                                                                          |         |
| Resource Type        | The kind of record to poll for changes.                                                                                                                                                                                                                                   | issues  |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record modified on or after this date once, ignoring the visibility filters. |         |
| Show New Records     | When true, records created since the last poll are returned in the trigger payload.                                                                                                                                                                                       | true    |
| Show Updated Records | When true, records updated since the last poll are returned in the trigger payload.                                                                                                                                                                                       | true    |

### Webhook {#webhook}

Receive events from a manually configured GitLab webhook, branching by event type.

| Input        | Comments                                                                                                                       | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Secret Token | The Secret token configured on the GitLab webhook. When set, requests whose X-Gitlab-Token header does not match are rejected. |         |

### Webhook Events {#webhookevents}

Receive project event notifications from GitLab. Automatically creates and manages a webhook in each selected project for the selected events when the instance is deployed, and removes the webhooks when the instance is deleted.

| Input         | Comments                                                                                                                                                                                                                           | Default         |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection    | The GitLab connection to use.                                                                                                                                                                                                      |                 |
| Projects      | The projects to receive events from, each as a numeric ID or full path, or a project URL from a GitLab instance at the domain root. A webhook is created in each project; managing webhooks requires the Maintainer or Owner role. | <code>[]</code> |
| Events        | The GitLab events that start this flow.                                                                                                                                                                                            | <code>[]</code> |
| Branch Filter | Limit push events to branches matching this name or wildcard pattern, such as main or release/*. Leave empty for all branches.                                                                                                     |                 |

## Actions

### Accept Merge Request {#acceptmergerequest}

Merge a merge request. Fails if the merge request is not mergeable or the SHA guard does not match.

| Input                | Comments                                                                                                                         | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The GitLab connection to use.                                                                                                    |         |
| Project              | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Merge Request IID    | The project-level number of the merge request, shown in GitLab as !17. This is the IID, not the global merge request ID.         |         |
| Merge Options        | Merge commit message, squash, source branch removal, and expected head SHA.                                                      |         |
| Merge Commit Message | A custom merge commit message. Leave empty for GitLab's default.                                                                 |         |
| Squash               | When True, squash the commits into one when merging. Leave unselected to use the project's squash setting.                       |         |
| Remove Source Branch | When True, delete the source branch after the merge request merges. Leave unselected to use GitLab's default.                    |         |
| SHA                  | When set, the merge succeeds only if the source branch's head is this commit, preventing a merge of unreviewed changes.          |         |

### Create Branch {#createbranch}

Create a branch from an existing branch, tag, or commit.

| Input       | Comments                                                                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The GitLab connection to use.                                                                                                    |         |
| Project     | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Branch Name | The name of the branch to create.                                                                                                |         |
| Ref         | The branch name, tag, or commit SHA to create the branch from.                                                                   |         |

### Create File {#createfile}

Create a file in a repository by committing it to a branch.

| Input          | Comments                                                                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The GitLab connection to use.                                                                                                    |         |
| Project        | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| File Path      | The path of the file in the repository, such as config/settings.json.                                                            |         |
| Branch         | The branch to commit the change to.                                                                                              |         |
| Content        | The file content. Use Base64 encoding for binary files.                                                                          |         |
| Commit Message | The message for the commit that writes the file.                                                                                 |         |
| Encoding       | How Content is encoded: text, or base64 for binary files.                                                                        | text    |

### Create Issue {#createissue}

Create an issue in a project.

| Input             | Comments                                                                                                                         | Default         |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection        | The GitLab connection to use.                                                                                                    |                 |
| Project           | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |                 |
| Title             | The title of the issue or merge request, shown in lists and notifications.                                                       |                 |
| Labels            | Label names to apply.                                                                                                            | <code>[]</code> |
| Assignee IDs      | The numeric IDs of the users to assign.                                                                                          | <code>[]</code> |
| Milestone ID      | The numeric global ID of the milestone.                                                                                          |                 |
| Additional Fields | Additional optional fields: includes Description, Due Date, and Confidential.                                                    |                 |
| Description       | The description, in Markdown.                                                                                                    |                 |
| Due Date          | The due date, in YYYY-MM-DD format.                                                                                              |                 |
| Confidential      | When True, the issue is confidential. Leave unselected to use GitLab's default on create or keep the current value on update.    |                 |

### Create Issue Note {#createissuenote}

Add a comment to an issue.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Issue IID  | The project-level number of the issue, shown in GitLab as #42. This is the IID, not the global issue ID.                         |         |
| Body       | The comment text, in Markdown.                                                                                                   |         |
| Internal   | When true, the note is internal and visible only to project members with at least the Reporter role.                             | false   |

### Create Merge Request {#createmergerequest}

Create a merge request between two branches.

| Input                | Comments                                                                                                                         | Default         |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection           | The GitLab connection to use.                                                                                                    |                 |
| Project              | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |                 |
| Source Branch        | The branch containing the changes.                                                                                               |                 |
| Target Branch        | The branch the changes merge into.                                                                                               |                 |
| Title                | The title of the issue or merge request, shown in lists and notifications.                                                       |                 |
| Labels               | Label names to apply.                                                                                                            | <code>[]</code> |
| Assignee IDs         | The numeric IDs of the users to assign.                                                                                          | <code>[]</code> |
| Additional Fields    | Additional optional fields: includes Description, Remove Source Branch, and Squash.                                              |                 |
| Description          | The description, in Markdown.                                                                                                    |                 |
| Remove Source Branch | When True, delete the source branch after the merge request merges. Leave unselected to use GitLab's default.                    |                 |
| Squash               | When True, squash the commits into one when merging. Leave unselected to use the project's squash setting.                       |                 |

### Create Merge Request Note {#createmergerequestnote}

Add a comment to a merge request.

| Input             | Comments                                                                                                                         | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The GitLab connection to use.                                                                                                    |         |
| Project           | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Merge Request IID | The project-level number of the merge request, shown in GitLab as !17. This is the IID, not the global merge request ID.         |         |
| Body              | The comment text, in Markdown.                                                                                                   |         |
| Internal          | When true, the note is internal and visible only to project members with at least the Reporter role.                             | false   |

### Delete Branch {#deletebranch}

Delete a branch. Protected branches cannot be deleted.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Branch     | The name of an existing branch, such as feature/ach-retry. Slashes and dots in the name are encoded automatically.               |         |

### Delete Instanced Webhooks {#deleteinstancedwebhooks}

Delete webhooks in the selected projects that point at any of this instance's flow URLs.

| Input      | Comments                                              | Default         |
| ---------- | ----------------------------------------------------- | --------------- |
| Connection | The GitLab connection to use.                         |                 |
| Projects   | The projects to remove this instance's webhooks from. | <code>[]</code> |

### Delete Issue {#deleteissue}

Delete an issue. Users with the Planner or Owner role can delete any issue; other project members can delete the issues they authored.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Issue IID  | The project-level number of the issue, shown in GitLab as #42. This is the IID, not the global issue ID.                         |         |

### Get Branch {#getbranch}

Retrieve a branch and its latest commit.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Branch     | The name of an existing branch, such as feature/ach-retry. Slashes and dots in the name are encoded automatically.               |         |

### Get Commit {#getcommit}

Retrieve a commit with its change statistics.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Commit SHA | The commit SHA, or a branch or tag name to resolve to its latest commit.                                                         |         |

### Get Current User {#getcurrentuser}

Retrieve the user the connection authenticates as. Useful for verifying a connection.

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The GitLab connection to use. |         |

### Get File {#getfile}

Retrieve a file from a repository. The content is returned Base64-encoded.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| File Path  | The path of the file in the repository, such as config/settings.json.                                                            |         |
| Ref        | The branch name, tag, or commit SHA to read the file from.                                                                       |         |

### Get Group {#getgroup}

Retrieve a group by ID or path.

| Input      | Comments                                                                                                             | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                        |         |
| Group      | The numeric ID or full path (group/subgroup) of the group, or a group URL from a GitLab instance at the domain root. |         |

### Get Issue {#getissue}

Retrieve an issue in a project by its IID.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Issue IID  | The project-level number of the issue, shown in GitLab as #42. This is the IID, not the global issue ID.                         |         |

### Get Merge Request {#getmergerequest}

Retrieve a merge request in a project by its IID.

| Input             | Comments                                                                                                                         | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The GitLab connection to use.                                                                                                    |         |
| Project           | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Merge Request IID | The project-level number of the merge request, shown in GitLab as !17. This is the IID, not the global merge request ID.         |         |

### Get Pipeline {#getpipeline}

Retrieve a CI/CD pipeline with its timing and triggering user.

| Input       | Comments                                                                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The GitLab connection to use.                                                                                                    |         |
| Project     | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Pipeline ID | The numeric ID of the pipeline.                                                                                                  |         |

### Get Project {#getproject}

Retrieve a project by ID or path.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |

### List Branches {#listbranches}

List the branches in a project's repository.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page.              | false   |
| Pagination | Page and page-size controls.                                                                                                     |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                                  |         |
| Page       | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                             |         |
| Search     | Return only results that match this text.                                                                                        |         |

### List Commits {#listcommits}

List commits in a project's repository, with optional filters.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page.              | false   |
| Pagination | Page and page-size controls.                                                                                                     |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                                  |         |
| Page       | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                             |         |
| Ref Name   | Return only results for this branch or tag. Defaults to the default branch where applicable.                                     |         |
| Since      | Return only commits after this date-time, in ISO 8601 format.                                                                    |         |
| Until      | Return only commits before this date-time, in ISO 8601 format.                                                                   |         |
| Path       | Return only commits that touch this file path.                                                                                   |         |

### List Groups {#listgroups}

List groups visible to the authenticated user.

| Input      | Comments                                                                                                                                                                                                                                           | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                                                                                                                                      |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page. GitLab caps offset pagination on this endpoint at 50,000 records by default, so Fetch All cannot retrieve results beyond that. | false   |
| Pagination | Page and page-size controls.                                                                                                                                                                                                                       |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                                                                                                                                                    |         |
| Page       | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                                                                                                                                               |         |
| Search     | Return only results that match this text.                                                                                                                                                                                                          |         |

### List Issue Notes {#listissuenotes}

List the comments and system notes on an issue.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Issue IID  | The project-level number of the issue, shown in GitLab as #42. This is the IID, not the global issue ID.                         |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page.              | false   |
| Pagination | Page and page-size controls.                                                                                                     |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                                  |         |
| Page       | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                             |         |

### List Issues {#listissues}

List issues in a project, with optional filters.

| Input         | Comments                                                                                                                                                                                                                                           | Default         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection    | The GitLab connection to use.                                                                                                                                                                                                                      |                 |
| Project       | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root.                                                                                                                   |                 |
| Fetch All     | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page. GitLab caps offset pagination on this endpoint at 50,000 records by default, so Fetch All cannot retrieve results beyond that. | false           |
| Pagination    | Page and page-size controls.                                                                                                                                                                                                                       |                 |
| Per Page      | The maximum number of results to return per page. Maximum: 100.                                                                                                                                                                                    |                 |
| Page          | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                                                                                                                                               |                 |
| State         | Return only issues in this state. Leave empty for all states.                                                                                                                                                                                      |                 |
| Labels        | Return only issues that have all of these labels.                                                                                                                                                                                                  | <code>[]</code> |
| Search        | Return only results that match this text.                                                                                                                                                                                                          |                 |
| Updated After | Return only results updated on or after this date-time, in ISO 8601 format.                                                                                                                                                                        |                 |

### List Labels {#listlabels}

List the labels available in a project, including inherited group labels.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page.              | false   |
| Pagination | Page and page-size controls.                                                                                                     |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                                  |         |
| Page       | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                             |         |
| Search     | Return only results that match this text.                                                                                        |         |

### List Merge Request Notes {#listmergerequestnotes}

List the comments and system notes on a merge request.

| Input             | Comments                                                                                                                         | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The GitLab connection to use.                                                                                                    |         |
| Project           | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Merge Request IID | The project-level number of the merge request, shown in GitLab as !17. This is the IID, not the global merge request ID.         |         |
| Fetch All         | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page.              | false   |
| Pagination        | Page and page-size controls.                                                                                                     |         |
| Per Page          | The maximum number of results to return per page. Maximum: 100.                                                                  |         |
| Page              | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                             |         |

### List Merge Requests {#listmergerequests}

List merge requests in a project, with optional filters.

| Input         | Comments                                                                                                                         | Default         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection    | The GitLab connection to use.                                                                                                    |                 |
| Project       | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |                 |
| Fetch All     | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page.              | false           |
| Pagination    | Page and page-size controls.                                                                                                     |                 |
| Per Page      | The maximum number of results to return per page. Maximum: 100.                                                                  |                 |
| Page          | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                             |                 |
| State         | Return only merge requests in this state. Leave empty for all states.                                                            |                 |
| Source Branch | Return only merge requests from this source branch.                                                                              |                 |
| Target Branch | Return only merge requests into this target branch.                                                                              |                 |
| Labels        | Return only merge requests that have all of these labels.                                                                        | <code>[]</code> |
| Search        | Return only results that match this text.                                                                                        |                 |
| Updated After | Return only results updated on or after this date-time, in ISO 8601 format.                                                      |                 |

### List Milestones {#listmilestones}

List the milestones in a project.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page.              | false   |
| Pagination | Page and page-size controls.                                                                                                     |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                                  |         |
| Page       | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                             |         |
| State      | Return only milestones in this state. Leave empty for all.                                                                       |         |

### List Pipelines {#listpipelines}

List CI/CD pipelines in a project, with optional filters.

| Input         | Comments                                                                                                                         | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The GitLab connection to use.                                                                                                    |         |
| Project       | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Fetch All     | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page.              | false   |
| Pagination    | Page and page-size controls.                                                                                                     |         |
| Per Page      | The maximum number of results to return per page. Maximum: 100.                                                                  |         |
| Page          | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                             |         |
| Ref Name      | Return only results for this branch or tag. Defaults to the default branch where applicable.                                     |         |
| Status        | Return only pipelines with this status.                                                                                          |         |
| Updated After | Return only results updated on or after this date-time, in ISO 8601 format.                                                      |         |

### List Project Members {#listprojectmembers}

List a project's members, including members inherited from its groups.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page.              | false   |
| Pagination | Page and page-size controls.                                                                                                     |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                                  |         |
| Page       | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                             |         |
| Query      | Return only members whose name, email, or username matches this text.                                                            |         |

### List Projects {#listprojects}

List projects visible to the authenticated user.

| Input      | Comments                                                                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                             |         |
| Fetch All  | When true, automatically fetches all pages of results using keyset pagination, ordered by ID. The API returns up to 100 results per page. | false   |
| Pagination | Page and page-size controls.                                                                                                              |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                                           |         |
| Page       | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                                      |         |
| Membership | When true, return only projects the authenticated user is a member of. On GitLab.com, false searches every public project.                | true    |
| Search     | Return only results that match this text.                                                                                                 |         |

### List Project Webhooks {#listprojectwebhooks}

List the webhooks configured on a project.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                    |         |
| Project    | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page.              | false   |
| Pagination | Page and page-size controls.                                                                                                     |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                                  |         |
| Page       | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                             |         |

### List Users {#listusers}

List or search users on the GitLab instance.

| Input      | Comments                                                                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The GitLab connection to use.                                                                                                             |         |
| Fetch All  | When true, automatically fetches all pages of results using keyset pagination, ordered by ID. The API returns up to 100 results per page. | false   |
| Pagination | Page and page-size controls.                                                                                                              |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                                           |         |
| Page       | The page number of results to return, starting at 1. Ignored when Fetch All is true.                                                      |         |
| Search     | Return only results that match this text.                                                                                                 |         |
| Username   | Return only the user with this exact username.                                                                                            |         |

### Raw Request {#rawrequest}

Send raw HTTP request to GitLab.

| Input           | Comments                                                                                                                                                                                                                                                                                        | Default         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection      | The GitLab connection to use.                                                                                                                                                                                                                                                                   |                 |
| URL             | Input the path only (/projects/278964/issues). The base URL, including /api/v4, is already included from the connection. For example, to call https://gitlab.com/api/v4/projects/278964/issues, enter only /projects/278964/issues. Full URLs (with a scheme or starting with //) are rejected. |                 |
| Method          | The HTTP method to use.                                                                                                                                                                                                                                                                         |                 |
| Data            | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                       |                 |
| Query Parameter | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                             | <code>[]</code> |
| Header          | A list of headers to send with the request.                                                                                                                                                                                                                                                     | <code>[]</code> |
| Response Type   | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                        | json            |
| Timeout         | The maximum time that a client will await a response to its request                                                                                                                                                                                                                             |                 |

### Update File {#updatefile}

Update an existing file in a repository by committing to a branch.

| Input          | Comments                                                                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The GitLab connection to use.                                                                                                    |         |
| Project        | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |         |
| File Path      | The path of the file in the repository, such as config/settings.json.                                                            |         |
| Branch         | The branch to commit the change to.                                                                                              |         |
| Content        | The file content. Use Base64 encoding for binary files.                                                                          |         |
| Commit Message | The message for the commit that writes the file.                                                                                 |         |
| Encoding       | How Content is encoded: text, or base64 for binary files.                                                                        | text    |

### Update Issue {#updateissue}

Update an issue's fields, or close or reopen it. Empty inputs leave the current values unchanged.

| Input             | Comments                                                                                                                         | Default         |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection        | The GitLab connection to use.                                                                                                    |                 |
| Project           | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |                 |
| Issue IID         | The project-level number of the issue, shown in GitLab as #42. This is the IID, not the global issue ID.                         |                 |
| Labels            | Label names to apply. Leave empty to keep the current labels unchanged.                                                          | <code>[]</code> |
| Assignee IDs      | The numeric IDs of the users to assign. Leave empty to keep the current assignees unchanged.                                     | <code>[]</code> |
| Milestone ID      | The numeric global ID of the milestone.                                                                                          |                 |
| Additional Fields | Additional optional fields: includes Title, Description, Due Date, State Event, and Confidential.                                |                 |
| Title             | The new title. Leave empty to keep the current title.                                                                            |                 |
| Description       | The description, in Markdown. Leave empty to keep it unchanged.                                                                  |                 |
| Due Date          | The due date, in YYYY-MM-DD format.                                                                                              |                 |
| State Event       | Close or reopen. Leave empty to keep the current state.                                                                          |                 |
| Confidential      | When True, the issue is confidential. Leave unselected to use GitLab's default on create or keep the current value on update.    |                 |

### Update Merge Request {#updatemergerequest}

Update a merge request's fields, or close or reopen it. Empty inputs leave the current values unchanged.

| Input             | Comments                                                                                                                         | Default         |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection        | The GitLab connection to use.                                                                                                    |                 |
| Project           | The numeric ID or full path (group/subgroup/project) of the project, or a project URL from a GitLab instance at the domain root. |                 |
| Merge Request IID | The project-level number of the merge request, shown in GitLab as !17. This is the IID, not the global merge request ID.         |                 |
| Labels            | Label names to apply. Leave empty to keep the current labels unchanged.                                                          | <code>[]</code> |
| Assignee IDs      | The numeric IDs of the users to assign. Leave empty to keep the current assignees unchanged.                                     | <code>[]</code> |
| Target Branch     | The new target branch. Leave empty to keep the current target.                                                                   |                 |
| Additional Fields | Additional optional fields: includes Title, Description, and State Event.                                                        |                 |
| Title             | The new title. Leave empty to keep the current title.                                                                            |                 |
| Description       | The description, in Markdown. Leave empty to keep it unchanged.                                                                  |                 |
| State Event       | Close or reopen. Leave empty to keep the current state.                                                                          |                 |
