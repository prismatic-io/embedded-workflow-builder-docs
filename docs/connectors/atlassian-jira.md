---
title: Jira Connector
sidebar_label: Jira
description: Manage issues, comments, projects, and users in Jira.
---

![Jira](./assets/atlassian-jira.png#connector-icon)
Manage issues, comments, projects, and users in Jira.

## Connections

### Basic Authentication {#basic}

Authenticate using username and API token.

| Input    | Comments                                                                                                                                                                           | Default |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Username | The Jira username or email address used for authentication.                                                                                                                        |         |
| API Key  | The Jira API token used for authentication. Cloud users must generate an API token from [Atlassian Account Settings](https://id.atlassian.com/manage-profile/security/api-tokens). |         |
| Host     | The hostname of the Jira instance (without https://).                                                                                                                              |         |
| Version  | Select the Jira API version to use for requests.                                                                                                                                   | 3       |

### OAuth 2.0 {#oauth2}

Authenticate using OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                                                             | Default                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Authorize URL       | The OAuth 2.0 Authorization URL for Jira.                                                                                                                                                            | https://auth.atlassian.com/authorize?audience=api.atlassian.com&prompt=consent                                                 |
| Token URL           | The OAuth 2.0 Token URL for Jira.                                                                                                                                                                    | https://auth.atlassian.com/oauth/token                                                                                         |
| Scopes              | Space-delimited list of OAuth scopes for Jira access. For more information, see [Jira OAuth 2.0 Scopes](https://developer.atlassian.com/cloud/jira/platform/scopes-for-oauth-2-3LO-and-forge-apps/). | read:jira-user read:jira-work write:jira-work manage:jira-project manage:jira-configuration manage:jira-webhook offline_access |
| Client ID           | The OAuth 2.0 Client ID from the Atlassian Developer Console.                                                                                                                                        |                                                                                                                                |
| Client Secret       | The OAuth 2.0 Client Secret from the Atlassian Developer Console.                                                                                                                                    |                                                                                                                                |
| Atlassian Site Name | Optional site name or URL to connect to. By default, connects to the first Jira site the user has access to. Use this if multiple Jira sites are available.                                          |                                                                                                                                |
| Version             | Select the Jira API version to use for requests.                                                                                                                                                     | 3                                                                                                                              |

### OAuth 2.0 Client Credentials {#jiraoauth2clientcredentials}

Authenticate using OAuth 2.0 Client Credentials.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                                                                                         | Default                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Scopes        | Space-delimited list of OAuth scopes for Jira access. These must match the scopes configured when creating the OAuth 2.0 credential in Admin Hub. For more information, see [Jira OAuth 2.0 Scopes](https://developer.atlassian.com/cloud/jira/platform/scopes-for-oauth-2-3LO-and-forge-apps/). | read:jira-user read:jira-work write:jira-work manage:jira-project manage:jira-configuration manage:jira-webhook |
| Client ID     | The OAuth 2.0 Client ID generated when creating the credential in Atlassian Admin Hub.                                                                                                                                                                                                           |                                                                                                                 |
| Client Secret | The OAuth 2.0 Client Secret generated when creating the credential in Atlassian Admin Hub.                                                                                                                                                                                                       |                                                                                                                 |
| Cloud ID      | The Cloud ID of the Jira site. See [How to Find Your Cloud ID](https://support.atlassian.com/jira/kb/retrieve-my-atlassian-sites-cloud-id/) for instructions.                                                                                                                                    |                                                                                                                 |
| Version       | Select the Jira API version to use for requests.                                                                                                                                                                                                                                                 | 3                                                                                                               |

## Triggers

### Issue Events {#issueeventstrigger}

Receive real-time notifications when Jira issues are created, updated, or deleted. Automatically creates and manages a webhook subscription for selected issue events when the instance is deployed, and removes the subscription when the instance is deleted.

| Input            | Comments                                                                                                                                                                                                                             | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection       | The Jira connection to use.                                                                                                                                                                                                          |         |
| Event Types      | One or more Jira issue events that will trigger this webhook.                                                                                                                                                                        |         |
| JQL Filter       | JQL (Jira Query Language) filter to limit which issues trigger the webhook. For more information, see [JQL Documentation](https://support.atlassian.com/jira-software-cloud/docs/use-advanced-search-with-jira-query-language-jql/). |         |
| Field IDs Filter | An optional list of field IDs to monitor. Only changes to these specific fields will trigger the webhook. Leave empty to monitor all field changes.                                                                                  |         |

### New and Updated Issues {#pollchangestrigger}

Checks for new and updated issues in Jira on a configured schedule, separated into new and updated buckets using JQL on /search/jql.

| Input                 | Comments                                                                                                                                           | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Jira connection to use.                                                                                                                        |         |
| Additional JQL Filter | Optional JQL clause appended (with AND) to the built-in `updated >= <lastPolledAt>` filter. Use to narrow results by project, type, assignee, etc. |         |
| Show New Issues       | When enabled, issues created since the last poll will be included in the trigger output.                                                           | true    |
| Show Updated Issues   | When enabled, issues updated since the last poll will be included in the trigger output.                                                           | true    |

## Actions

### Add Comment {#addcomment}

Add a comment to an existing issue.

| Input          | Comments                                                                                                                                                         | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Jira connection to use.                                                                                                                                      |         |
| Issue ID       | The unique identifier of the Jira issue.                                                                                                                         |         |
| Comment        | The plain-text body of the comment.                                                                                                                              |         |
| Dynamic Fields | Dynamic field key/value pairs supplied as JSON. Use a key/value config variable to configure these at deploy time. Each item must contain a `key` and a `value`. |         |
| Values         | Additional field names and their values to include when creating or updating the record. Each row is merged into the request payload.                            |         |

### Add Issue Attachment {#addissueattachment}

Add a file attachment to an issue.

| Input      | Comments                                                     | Default |
| ---------- | ------------------------------------------------------------ | ------- |
| Connection | The Jira connection to use.                                  |         |
| Issue ID   | The unique identifier of the Jira issue.                     |         |
| File       | The file to upload - either string contents or a binary file |         |
| File Name  | The name of the file to upload                               |         |

### Create Issue {#createissue}

Create an issue within a given project.

| Input               | Comments                                                                                                                                                                                                                                                | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Jira connection to use.                                                                                                                                                                                                                             |         |
| Project ID          | The unique identifier or name of the Jira project.                                                                                                                                                                                                      |         |
| Summary             | A short one-line title for the issue, shown in lists and search results.                                                                                                                                                                                |         |
| Description         | A detailed description of the issue.                                                                                                                                                                                                                    |         |
| ADF Description     | The Atlassian Document Format (ADF) JSON representation of the issue description. Provide this OR Description — not both. Use the [ADF playground](https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/) to generate the JSON. |         |
| Issue Type Name     | The human-readable name of the issue type to assign to the issue. Provide this field OR Issue Type ID — not both.                                                                                                                                       |         |
| Issue Type ID       | The unique identifier of the issue type to assign to the issue. Provide this field OR Issue Type Name — not both.                                                                                                                                       |         |
| Assignee Account ID | The Atlassian account ID of the user to assign the issue to.                                                                                                                                                                                            |         |
| Reporter Account ID | The Atlassian account ID of the user reporting the issue.                                                                                                                                                                                               |         |
| Due Date            | The date when the issue is due. Format: `YYYY-MM-DD`.                                                                                                                                                                                                   |         |
| Priority            | The priority to assign to the issue. Accepts the priority ID, key, or name of the desired record.                                                                                                                                                       |         |
| Labels              | A list of labels to attach to the issue. Each label must not contain spaces.                                                                                                                                                                            |         |
| Versions            | The affected version(s) for the issue as a JSON array of objects. Each object must contain an `id` referencing an existing version.                                                                                                                     |         |
| Fix Versions        | The fix version(s) for the issue as a JSON object containing an `id` property referencing an existing version.                                                                                                                                          |         |
| Dynamic Fields      | Dynamic field key/value pairs supplied as JSON. Use a key/value config variable to configure these at deploy time. Each item must contain a `key` and a `value`.                                                                                        |         |
| Values              | Additional field names and their values to include when creating or updating the record. Each row is merged into the request payload.                                                                                                                   |         |

### Create User {#createuser}

Create a new user record.

| Input          | Comments                                                                                                                                                         | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Jira connection to use.                                                                                                                                      |         |
| Email Address  | The email address of the user.                                                                                                                                   |         |
| Username       | The username for the Jira user account.                                                                                                                          |         |
| Password       | The password to assign to the new user account.                                                                                                                  |         |
| Notifications  | When true, the user will receive email notifications for relevant events.                                                                                        | false   |
| Display Name   | The display name for the user account.                                                                                                                           |         |
| Dynamic Fields | Dynamic field key/value pairs supplied as JSON. Use a key/value config variable to configure these at deploy time. Each item must contain a `key` and a `value`. |         |
| Values         | Additional field names and their values to include when creating or updating the record. Each row is merged into the request payload.                            |         |

### Create Version {#createversion}

Create a new version.

| Input          | Comments                                                                                                                                                         | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Jira connection to use.                                                                                                                                      |         |
| Description    | A detailed description of the issue.                                                                                                                             |         |
| Version Name   | The display name of the version (e.g., a release tag or date).                                                                                                   |         |
| Archived       | When true, marks the version as archived.                                                                                                                        | false   |
| Released       | When true, marks the version as released.                                                                                                                        | false   |
| Start Date     | The date when work on this version starts. Format: `YYYY-MM-DD`.                                                                                                 |         |
| Release Date   | The date when this version is released. Format: `YYYY-MM-DD`.                                                                                                    |         |
| Project Key    | The project key identifier (e.g., PROJ, ENG, SALES).                                                                                                             |         |
| Project ID     | The unique identifier or name of the Jira project.                                                                                                               |         |
| Dynamic Fields | Dynamic field key/value pairs supplied as JSON. Use a key/value config variable to configure these at deploy time. Each item must contain a `key` and a `value`. |         |
| Values         | Additional field names and their values to include when creating or updating the record. Each row is merged into the request payload.                            |         |

### Create Webhook {#createwebhook}

Create a webhook to send data from Jira to an instance URL.

| Input           | Comments                                                                                                                                                                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira connection to use.                                                                                                                                                                                                                                                                       |         |
| Webhook URL     | The URL that Jira will POST webhook events to. Typically reference a flow's URL from the trigger payload.                                                                                                                                                                                         |         |
| Webhook Details | The webhook details payload sent to Jira's OAuth2 Webhook API or REST API. Must match the structure of the `webhooks` property described in the [Register Dynamic Webhook endpoint](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-webhooks/#api-rest-api-3-webhook-post). |         |

### Delete Comment {#deletecomment}

Delete a comment from an issue.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |
| Comment ID | The unique identifier of the comment.    |         |

### Delete Issue {#deleteissue}

Delete an issue by ID.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |

### Delete Webhook {#deletewebhook}

Delete a webhook by ID.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Jira connection to use.           |         |
| Webhook ID | The unique identifier of the webhook. |         |

### Download Issue Attachments {#downloadattachment}

Download the attachment data connected to an issue.

| Input          | Comments                                                                                                                 | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Jira connection to use.                                                                                              |         |
| Issue ID       | Providing an Issue ID will return all attachments of an Issue.                                                           |         |
| Attachment IDs | A JSON array of attachments to download, each with an `id` and `mimeType`. When provided, the Issue ID input is ignored. |         |

### Find Issue {#findissue}

Find an issue by attribute.

| Input        | Comments                                                                                                                                                                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Jira connection to use.                                                                                                                                                                                                      |         |
| Search Type  | Attribute to search                                                                                                                                                                                                              |         |
| Search Value | Value to search for                                                                                                                                                                                                              |         |
| Fields       | A comma-separated list of fields to include in each returned issue. Defaults to common navigable fields (summary, status, assignee, reporter, priority, issuetype, project, created, updated). Use `*all` to return every field. |         |

### Find Project {#findproject}

Find a project by attribute.

| Input        | Comments                    | Default |
| ------------ | --------------------------- | ------- |
| Connection   | The Jira connection to use. |         |
| Search Type  | Attribute to search         |         |
| Search Value | Value to search for         |         |

### Find User {#finduser}

Find a user by attribute.

| Input        | Comments                    | Default |
| ------------ | --------------------------- | ------- |
| Connection   | The Jira connection to use. |         |
| Search Value | Value to search for         |         |

### Get Board {#getboard}

Get the information and metadata of a board by ID.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Board ID   | The unique identifier of the Jira board. |         |

### Get Comments {#getcomments}

Get all comments on a given issue.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |

### Get Current User {#getcurrentuser}

Get the information and metadata of the current user.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Jira connection to use. |         |

### Get Issue {#getissue}

Get the information and metadata of an issue.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |

### Get Project {#getproject}

Get the information and metadata of a project.

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Jira connection to use.                        |         |
| Project ID | The unique identifier or name of the Jira project. |         |

### Get Status List {#getstatuslist}

Return a list of statuses for a project.

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Project ID  | The unique identifier or name of the Jira project.                 |         |
| Max Results | The maximum number of results to return per page.                  |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |

### Get User {#getuser}

Get the information and metadata of a user by ID.

| Input      | Comments                                                                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Jira connection to use.                                                                                                          |         |
| Account ID | The unique Atlassian account ID of the user.                                                                                         |         |
| Expand     | A comma-separated list of additional fields to include in the response. Values come from the `_expandable` property of the resource. |         |

### Get Version {#getversion}

Get the information and metadata of an existing version.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Jira connection to use.           |         |
| Version ID | The unique identifier of the version. |         |

### List Assignable Users for Project {#listassignableusers}

Return a list of users assignable to the given project.

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Project Key | The project key identifier (e.g., PROJ, ENG, SALES).               |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |
| Max Results | The maximum number of results to return per page.                  |         |

### List Boards {#listboards}

Retrieve a list of existing boards.

| Input       | Comments                                                                                                                                                             | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Jira connection to use.                                                                                                                                          |         |
| Start At    | The index of the first item to return in the result set (0-based).                                                                                                   | 0       |
| Max Results | The maximum number of results to return per page.                                                                                                                    |         |
| Filter      | The scope used to limit returned dashboards. Common values are `my` (dashboards owned by the current user) and `favourite` (dashboards starred by the current user). | my      |

### List Board Sprints {#listboardssprints}

List all sprints within a board.

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Board ID    | The unique identifier of the Jira board.                           |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |
| Max Results | The maximum number of results to return per page.                  |         |

### List Issue Attachments {#listissueattachments}

Return a list of attachments for a given issue.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Issue ID   | The unique identifier of the Jira issue. |         |
| Connection | The Jira connection to use.              |         |

### List Issue Custom Fields {#listissuecustomfields}

List all configured custom issue fields.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Jira connection to use. |         |

### List Issue Fields {#listissuefields}

List all non-custom issue fields.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Jira connection to use. |         |

### List Issue Link Types {#listissuelinktypes}

List all available issue link types.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Jira connection to use. |         |

### List Issues by Project {#listissues}

Return a list of issues for a specific project.

| Input           | Comments                                                                                                                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira connection to use.                                                                                                                                                                                                      |         |
| Project ID      | The unique identifier or name of the Jira project.                                                                                                                                                                               |         |
| Next Page Token | The pagination cursor returned from a previous response. Use it to fetch the next page of results. Leave empty for the first page.                                                                                               |         |
| Max Results     | The maximum number of results to return per page.                                                                                                                                                                                |         |
| Fields          | A comma-separated list of fields to include in each returned issue. Defaults to common navigable fields (summary, status, assignee, reporter, priority, issuetype, project, created, updated). Use `*all` to return every field. |         |

### List Issue Transitions {#listissuetransitions}

Return a list of available transitions for an issue.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |

### List Issue Types {#listissuetypes}

Return a list of issue types.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Jira connection to use. |         |

### List Issue Worklogs {#listissueworklogs}

Return a list of worklogs for an issue.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |

### List Priorities {#listpriorities}

Return a list of all priorities.

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Max Results | The maximum number of results to return per page.                  |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |

### List Projects {#listprojects}

Retrieve a list of all projects.

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Max Results | The maximum number of results to return per page.                  |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |

### List Versions {#listversions}

Return a list of all versions for a project.

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Project ID  | The unique identifier or name of the Jira project.                 |         |
| Max Results | The maximum number of results to return per page.                  |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |

### List Webhooks {#listwebhooks}

List all configured webhooks, including those for other integrations.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Jira connection to use.                                             |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |

### Query {#queryv3}

Search the entire Jira site using a JQL query.

| Input       | Comments                                                                                                                             | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                                                                                          |         |
| Search      | The text to match against records when searching.                                                                                    |         |
| Expand      | A comma-separated list of additional fields to include in the response. Values come from the `_expandable` property of the resource. |         |
| Max Results | The maximum number of results to return per page.                                                                                    |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to Jira.

| Input                   | Comments                                                                                                                                                                                                                                                                                        | Default                    |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Connection              | The Jira connection to use.                                                                                                                                                                                                                                                                     |                            |
| URL                     | Input the path only (/rest/api/3/project/recent), The base URL is already included (https://api.atlassian.com/ex/jira/<CLOUD_ID>). For example, to connect to https://api.atlassian.com/ex/jira/<CLOUD_ID>/rest/api/3/project/recent, only /rest/api/3/project/recent is entered in this field. | /rest/api/3/project/recent |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                         |                            |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                       |                            |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                            |                            |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                |                            |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                          |                            |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                             |                            |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                     |                            |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                        | json                       |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                             |                            |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                             | 0                          |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                | false                      |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                             | 0                          |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                   | false                      |

### Refresh Webhook {#refreshwebhook}

Refresh a webhook expiration by ID.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The Jira connection to use.  |         |
| Webhook ID | ID of the webhook to refresh |         |

### Search Issues {#searchissues}

Return a list of issues that match the given string of text.

| Input       | Comments                                                                                                                                                                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Jira connection to use.                                                                                                                                                                                                      |         |
| Search      | The text to match against records when searching.                                                                                                                                                                                |         |
| Project Key | The project key identifier (e.g., PROJ, ENG, SALES).                                                                                                                                                                             |         |
| Fields      | A comma-separated list of fields to include in each returned issue. Defaults to common navigable fields (summary, status, assignee, reporter, priority, issuetype, project, created, updated). Use `*all` to return every field. |         |

### Search Projects {#searchprojects}

Return a list of projects that match the given string of text.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Jira connection to use.                       |         |
| Search     | The text to match against records when searching. |         |

### Search Users {#searchusers}

Return a single user that matches the given string of text.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Jira connection to use.                       |         |
| Search     | The text to match against records when searching. |         |

### Transition Issue {#transitionissue}

Transition an existing issue by ID.

| Input         | Comments                                       | Default |
| ------------- | ---------------------------------------------- | ------- |
| Connection    | The Jira connection to use.                    |         |
| Issue ID      | The unique identifier of the Jira issue.       |         |
| Transition ID | The unique identifier of the issue transition. |         |

### Update Comment {#updatecomment}

Update the contents and metadata of an existing comment.

| Input          | Comments                                                                                                                                                         | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Jira connection to use.                                                                                                                                      |         |
| Issue ID       | The unique identifier of the Jira issue.                                                                                                                         |         |
| Comment ID     | The unique identifier of the comment.                                                                                                                            |         |
| Comment        | The plain-text body of the comment.                                                                                                                              |         |
| Dynamic Fields | Dynamic field key/value pairs supplied as JSON. Use a key/value config variable to configure these at deploy time. Each item must contain a `key` and a `value`. |         |
| Values         | Additional field names and their values to include when creating or updating the record. Each row is merged into the request payload.                            |         |

### Update Issue {#updateissue}

Update an existing issue within a given project.

| Input               | Comments                                                                                                                                                                                                                                                | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Jira connection to use.                                                                                                                                                                                                                             |         |
| Issue ID            | The unique identifier of the Jira issue.                                                                                                                                                                                                                |         |
| Project ID          | The unique identifier or name of the Jira project.                                                                                                                                                                                                      |         |
| Summary             | A short one-line title for the issue, shown in lists and search results.                                                                                                                                                                                |         |
| Description         | A detailed description of the issue.                                                                                                                                                                                                                    |         |
| ADF Description     | The Atlassian Document Format (ADF) JSON representation of the issue description. Provide this OR Description — not both. Use the [ADF playground](https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/) to generate the JSON. |         |
| Issue Type Name     | The human-readable name of the issue type to assign to the issue. Provide this field OR Issue Type ID — not both.                                                                                                                                       |         |
| Issue Type ID       | The unique identifier of the issue type to assign to the issue. Provide this field OR Issue Type Name — not both.                                                                                                                                       |         |
| Assignee Account ID | The Atlassian account ID of the user to assign the issue to.                                                                                                                                                                                            |         |
| Reporter Account ID | The Atlassian account ID of the user reporting the issue.                                                                                                                                                                                               |         |
| Fix Versions        | The fix version(s) for the issue as a JSON object containing an `id` property referencing an existing version.                                                                                                                                          |         |
| Priority            | The priority to assign to the issue. Accepts the priority ID, key, or name of the desired record.                                                                                                                                                       |         |
| Labels              | A list of labels to attach to the issue. Each label must not contain spaces.                                                                                                                                                                            |         |
| Due Date            | The date when the issue is due. Format: `YYYY-MM-DD`.                                                                                                                                                                                                   |         |
| Versions            | The affected version(s) for the issue as a JSON array of objects. Each object must contain an `id` referencing an existing version.                                                                                                                     |         |
| Dynamic Fields      | Dynamic field key/value pairs supplied as JSON. Use a key/value config variable to configure these at deploy time. Each item must contain a `key` and a `value`.                                                                                        |         |
| Values              | Additional field names and their values to include when creating or updating the record. Each row is merged into the request payload.                                                                                                                   |         |

### Update Version {#updateversion}

Update an existing version by ID.

| Input          | Comments                                                                                                                                                         | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Jira connection to use.                                                                                                                                      |         |
| Version ID     | The unique identifier of the version.                                                                                                                            |         |
| Description    | A detailed description of the issue.                                                                                                                             |         |
| Version Name   | The display name of the version (e.g., a release tag or date).                                                                                                   |         |
| Archived       | When true, marks the version as archived.                                                                                                                        | false   |
| Released       | When true, marks the version as released.                                                                                                                        | false   |
| Start Date     | The date when work on this version starts. Format: `YYYY-MM-DD`.                                                                                                 |         |
| Release Date   | The date when this version is released. Format: `YYYY-MM-DD`.                                                                                                    |         |
| Project Key    | The project key identifier (e.g., PROJ, ENG, SALES).                                                                                                             |         |
| Project ID     | The unique identifier or name of the Jira project.                                                                                                               |         |
| Dynamic Fields | Dynamic field key/value pairs supplied as JSON. Use a key/value config variable to configure these at deploy time. Each item must contain a `key` and a `value`. |         |
| Values         | Additional field names and their values to include when creating or updating the record. Each row is merged into the request payload.                            |         |
