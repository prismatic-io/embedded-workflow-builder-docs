---
title: GitHub Connector
sidebar_label: GitHub
description: Manage repositories, issues, pull requests, and workflows in GitHub.
---

![GitHub](./assets/github.png#connector-icon)
[GitHub](https://github.com) is a development platform that provides Git repository hosting, code collaboration, and project management tools.
This component allows managing repositories, issues, pull requests, workflows, and users within a GitHub organization.

## API Documentation

This component was built using the [GitHub REST API Documentation](https://docs.github.com/en/rest) currently utilizing version 2022-11-28.

## Connections

### OAuth 2.0 {#oauth2}

Authenticate using OAuth 2.0.

To connect to GitHub, [create a new OAuth 2.0 application](https://github.com/settings/applications/new).

#### Prerequisites

- A GitHub account with permission to create OAuth Apps for the user or organization that owns the repositories
- Access to the repositories or organizations the integration will work with

#### Setup Steps

1. Navigate to [GitHub Developer Settings](https://github.com/settings/applications/new) to create a new OAuth App.
2. Fill in the required fields:
   - **Application name**: A descriptive name for the application
   - **Homepage URL**: The organization or application website
   - **Authorization callback URL**: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
3. Click **Register application**.
4. Click **Generate a new client secret** to create a client secret.
5. Copy the **Client ID** and **Client Secret** values.

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the OAuth App.
- Determine [what scopes the use case requires](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) and add those to **Scopes**, separating each with a space.
  - Common scopes include: `repo`, `user`, `admin:org`, `workflow`
  - For full repository access and workflow permissions, use: `repo user admin:org workflow`

The connection is now ready to authenticate with GitHub.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                       | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Scopes        | Space-separated list of OAuth scopes. See [GitHub's documentation](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) for available scopes. |         |
| Client ID     | The Client ID from your GitHub OAuth App. Find this in GitHub Settings > Developer settings > OAuth Apps.                                                                      |         |
| Client Secret | The Client Secret from your GitHub OAuth App. Keep this value secure.                                                                                                          |         |

## Triggers

### Event Webhook {#eventwebhook}

Receive event notifications from GitHub. Automatically creates and manages a webhook subscription for the selected event types when the instance is deployed, and removes the subscription when the instance is deleted.

| Input           | Comments                                                                                                                  | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                           |         |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.      |         |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'. |         |
| Events          | The list of event types that will trigger the webhook.                                                                    |         |

### New and Updated Records {#pollchangestrigger}

Retrieves existing and ongoing issues (including pull requests) for a specified GitHub repository. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                                                  | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                                                                                           |         |
| Owner                | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.                                                                                                                                                      |         |
| Repository Name      | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'.                                                                                                                                                 |         |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record modified on or after this date once, ignoring the visibility filters. |         |
| Show New Records     | When true, issues created after the last poll are emitted on the `created` branch.                                                                                                                                                                                        | true    |
| Show Updated Records | When true, issues updated since the last poll but created earlier are emitted on the `updated` branch.                                                                                                                                                                    | true    |

### Webhook {#webhook}

Receive and validate webhook requests from GitHub for webhooks you configure.

| Input          | Comments                                                                                                                                                                            | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Webhook Secret | An optional secret used to verify webhook authenticity. See [GitHub's documentation](https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries) for details. |         |

## Actions

### Actions Create Workflow Dispatch {#actionscreateworkflowdispatch}

Create a workflow dispatch event

| Input           | Comments                                                                                                                                            | Default                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Connection      |                                                                                                                                                     |                                                              |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.                                |                                                              |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'.                           |                                                              |
| Workflow Id     | The ID of the workflow                                                                                                                              |                                                              |
| Ref             | The git reference for the workflow                                                                                                                  |                                                              |
| Inputs          | Input keys and values configured in the workflow file. This can be a JSON input mapping, or a reference to a previous step that returned an object. | <code>{"input1":"My Value","input2":"My Other Value"}</code> |

### Git Create Blob {#gitcreateblob}

Create a blob

| Input           | Comments                                                                                                                  | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                           |         |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.      |         |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'. |         |
| Content         | The content of the new blob                                                                                               |         |
| Encoding        | The encoding used for "content"                                                                                           | utf-8   |

### Git Create Ref {#gitcreateref}

Create a reference

| Input           | Comments                                                                                                                  | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                           |         |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.      |         |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'. |         |
| Ref             | The name of the fully qualified reference (ie: "refs/heads/master")                                                       |         |
| Sha             | The SHA1 value for this reference                                                                                         |         |
| Key             |                                                                                                                           |         |

### Git Create Tree {#gitcreatetree}

Create a tree

| Input           | Comments                                                                                                                                             | Default                                                                                                                   |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Connection      |                                                                                                                                                      |                                                                                                                           |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.                                 |                                                                                                                           |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'.                            |                                                                                                                           |
| Tree            | Objects (of "path", "mode", "type", and "content" or "sha") specifying a tree structure. See https://docs.github.com/en/rest/git/trees#create-a-tree | <code>[<br /> {<br /> "path": "test.txt",<br /> "mode": "100644",<br /> "content": "This is a test"<br /> }<br />]</code> |
| Base Tree       | The SHA1 of an existing Git tree object which will be used as the base for the new tree                                                              |                                                                                                                           |

### Git Get Ref {#gitgetref}

Get a reference

| Input           | Comments                                                                                                                  | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                           |         |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.      |         |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'. |         |
| Ref             | ref parameter                                                                                                             |         |

### Issues Create Comment {#issuescreatecomment}

Create an issue comment

| Input           | Comments                                                                                                                  | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                           |         |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.      |         |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'. |         |
| Issue Number    | The number that identifies the issue                                                                                      |         |
| Body            | The contents of the comment                                                                                               |         |

### Issues List Comments {#issueslistcomments}

List issue comments

| Input           | Comments                                                                                                                  | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                           |         |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.      |         |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'. |         |
| Issue Number    | The number that identifies the issue                                                                                      |         |
| Since           | Only show notifications updated after the given time                                                                      |         |
| Pagination      | Page number and results-per-page controls.                                                                                |         |
| Page            | Page number of the results to fetch                                                                                       | 1       |
| Per Page        | The number of results per page (max 100)                                                                                  | 30      |

### Issues List For Repo {#issueslistforrepo}

List repository issues

| Input           | Comments                                                                                                                  | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                           |         |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.      |         |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'. |         |
| Fetch All       | When true, automatically fetches all pages of results.                                                                    | false   |
| Milestone       | If an "integer" is passed, it should refer to a milestone by its "number" field                                           |         |
| State           | Indicates the state of the issues to return                                                                               | open    |
| Assignee        | The user that is assigned to the issue, use 'none' for issues with no assignee, or '*' for issues assigned to any user    |         |
| Creator         | The user that created the issue                                                                                           |         |
| Mentioned       | A user that is mentioned in the issue.                                                                                    |         |
| Labels          | A list of comma separated label names                                                                                     |         |
| Sort            | What to sort results by                                                                                                   | created |
| Direction       | The direction to sort the results by                                                                                      | asc     |
| Since           | Only show notifications updated after the given time                                                                      |         |
| Pagination      | Page number and results-per-page controls.                                                                                |         |
| Page            | Page number of the results to fetch                                                                                       | 1       |
| Per Page        | The number of results per page (max 100)                                                                                  | 30      |

### Orgs List For Authenticated User {#orgslistforauthenticateduser}

List organizations for the authenticated user

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Pagination | Page number and results-per-page controls. |         |
| Page       | Page number of the results to fetch        | 1       |
| Per Page   | The number of results per page (max 100)   | 30      |

### Pulls Create {#pullscreate}

Create a pull request

| Input                 | Comments                                                                                                                                                                                                                      | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                                               |         |
| Owner                 | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.                                                                                                          |         |
| Repository Name       | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'.                                                                                                     |         |
| Title                 | The title of the pull request. Required unless using the issue parameter.                                                                                                                                                     |         |
| Head                  | The name of the branch where the changes are implemented. For cross-repository pull requests, use the format 'username:branch'.                                                                                               |         |
| Base                  | The name of the branch the changes are pulled into. This should be an existing branch in the repository.                                                                                                                      |         |
| Body                  | The contents/description of the pull request. Supports markdown formatting.                                                                                                                                                   |         |
| Maintainer Can Modify | When true, maintainers can modify the pull request. See [GitHub's documentation](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) for details. | false   |
| Draft                 | When true, creates the pull request as a draft. Draft pull requests cannot be merged until marked as ready for review.                                                                                                        | false   |
| Issue Number          | The number that identifies the issue                                                                                                                                                                                          |         |

### Pulls List {#pullslist}

List pull requests

| Input           | Comments                                                                                                                    | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                             |         |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.        |         |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'.   |         |
| State           | Filters pull requests by their state (open, closed, or all).                                                                | open    |
| Head            | Filter pull requests by head user or organization and branch name in the format "user:ref-name" or "organization:ref-name". |         |
| Base            | Filter pull requests by base branch name.                                                                                   |         |
| Sort            | The field to sort results by.                                                                                               | created |
| Direction       | The direction to sort results (ascending or descending).                                                                    |         |
| Pagination      | Page number and results-per-page controls.                                                                                  |         |
| Page            | Page number of the results to fetch                                                                                         | 1       |
| Per Page        | The number of results per page (max 100)                                                                                    | 30      |

### Raw Request {#rawrequest}

Send raw HTTP request to GitHub.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/octocat), The base URL is already included (https://api.github.com). For example, to connect to https://api.github.com/octocat, only /octocat is entered in this field.    |         |
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

### Repos Create Webhook {#reposcreatewebhook}

Create a repository webhook

| Input           | Comments                                                                                                                                                                            | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                                     |         |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.                                                                |         |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'.                                                           |         |
| Callback URL    | The URL where webhook events will be sent.                                                                                                                                          |         |
| Events          | The list of event types that will trigger the webhook.                                                                                                                              |         |
| Webhook Secret  | An optional secret used to verify webhook authenticity. See [GitHub's documentation](https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries) for details. |         |

### Repos Delete Instance Webhooks {#reposdeleteinstancewebhooks}

Delete all webhooks pointed at this instance

| Input           | Comments                                                                                                                  | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                           |         |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.      |         |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'. |         |

### Repos Delete Webhook {#reposdeletewebhook}

Delete a repository webhook by ID

| Input           | Comments                                                                                                                  | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                           |         |
| Owner           | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.      |         |
| Repository Name | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'. |         |
| Hook ID         | The unique identifier of the webhook.                                                                                     |         |

### Repos List For Org {#reposlistfororg}

List organization repositories

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection |                                               |         |
| Org        | The organization name                         |         |
| Type       | Specifies the types of repositories to return |         |
| Sort       | The property to sort the results by           | created |
| Direction  | The order to sort by                          |         |
| Pagination | Page number and results-per-page controls.    |         |
| Page       | Page number of the results to fetch           | 1       |
| Per Page   | The number of results per page (max 100)      | 30      |

### Repos List Webhooks {#reposlistwebhooks}

List webhooks of a repository

| Input                       | Comments                                                                                                                  | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                           |         |
| Owner                       | The account owner of the repository. For example, in https://github.com/octocat/Hello-World, the owner is 'octocat'.      |         |
| Repository Name             | The name of the repository. For example, in https://github.com/octocat/Hello-World, the repository name is 'Hello-World'. |         |
| Show Only Instance Webhooks | When true, shows only webhooks that point to this instance.                                                               | true    |

### Users Get Authenticated {#usersgetauthenticated}

Get the authenticated user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Users Get By Username {#usersgetbyusername}

Get a user

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Username   | The GitHub username. |         |
