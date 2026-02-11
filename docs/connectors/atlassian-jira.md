---
title: Jira Connector
sidebar_label: Jira
description: Manage issues, comments, projects, and users in Jira.
---

![Jira](./assets/atlassian-jira.png#connector-icon)
[Jira](https://www.atlassian.com/software/jira) is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.
This component allows you to manage issues, comments, projects, and users within Jira.

## API Documentation

This component was built using the [Jira Cloud REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/) (v3)

## Connections

### Basic Authentication {#basic}

Authenticate with Jira using username and API key

To authenticate with Atlassian Jira using Basic Authentication, an email address and either an API token (for Jira Cloud) or password (for self-hosted Jira) is required.

#### Prerequisites

- Access to a Jira Cloud or self-hosted Jira instance
- Administrative permissions to generate API tokens (for Jira Cloud)

#### Setup Steps

**For Jira Cloud:**

1. Navigate to [Atlassian Account API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Click **Create API token**
3. Enter a label for the token and click **Create**
4. Copy the generated API token value

**For Self-Hosted Jira:**

Use the standard account password for authentication. No additional setup is required.

#### Configure the Connection

- For **Username**, enter the email address associated with the Jira account
- For **API Key**:
  - **Jira Cloud**: Enter the API token generated in the previous step
  - **Self-Hosted Jira**: Enter the account password
- For **Host**, enter the Jira instance URL (e.g., `example.atlassian.net` for cloud or the self-hosted domain)
- For **Version**, select the API version (typically `3` for Jira Cloud, `2` for older instances)

For more information on generating API tokens from Jira Cloud, refer to the [Atlassian documentation](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).

:::note Self-Hosted vs Cloud Authentication
Jira Cloud requires an API token for Basic Authentication, while self-hosted instances can use the account password. For security reasons, it is recommended to use API tokens whenever possible.
:::

| Input    | Comments                                                                                                                                                                       | Default |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Username | Your Jira username or email address used for authentication.                                                                                                                   |         |
| API Key  | Your Jira API token for authentication. Cloud users must generate an API token from [Atlassian Account Settings](https://id.atlassian.com/manage-profile/security/api-tokens). |         |
| Host     | The hostname of your Jira instance (without https://).                                                                                                                         |         |
| Version  | Select the Jira API version to use for requests.                                                                                                                               | 3       |

### OAuth 2.0 {#oauth2}

Authenticate with Jira using OAuth 2.0 for secure access

To create an Atlassian Jira OAuth 2.0 connection, an OAuth 2.0 integration must be configured in the [Atlassian Developer Console](https://developer.atlassian.com/console).

Jira's Cloud API supports OAuth 2.0 (3LO) flows for secure authentication. For more information on OAuth 2.0 (3LO) apps, refer to [Jira's OAuth 2.0 documentation](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/#enabling-oauth-2-0--3lo-).

#### Prerequisites

- Access to the [Atlassian Developer Console](https://developer.atlassian.com/console)
- Administrative permissions to create OAuth 2.0 integrations

#### Setup Steps

1. Navigate to the [Atlassian Developer Console](https://developer.atlassian.com/console)
2. Click **Create** and select **OAuth 2.0 integration**
3. Enter a name for the integration
4. After creation, locate the **App details** section and copy the **Client ID** and **Client Secret** values
5. Under the **Authorization** section, click **Configure** next to **OAuth 2.0 (3LO)**
6. Enter the callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
7. Navigate to the **Permissions** tab
8. Add the required scopes based on the use case:
   - For basic issue management, the following scopes are recommended:
     ```
     read:jira-user read:jira-work write:jira-work manage:jira-project manage:jira-configuration manage:jira-webhook offline_access
     ```
   - Refer to [Jira OAuth 2.0 scopes documentation](https://developer.atlassian.com/cloud/jira/platform/scopes-for-oauth-2-3LO-and-forge-apps/) for a complete list of available scopes
9. Click **Save** to apply the configuration

:::warning Scope Consistency
The scopes configured in the Atlassian Developer Console must match the scopes entered in the connection configuration. Inconsistent scopes will cause authentication failures.
:::

#### Configure the Connection

- Enter the **Client ID** from the Atlassian Developer Console
- Enter the **Client Secret** from the Atlassian Developer Console
- For **Scopes**, use the following default value:

  ```
  read:jira-user read:jira-work write:jira-work manage:jira-project manage:jira-configuration manage:jira-webhook offline_access
  ```

  - The `offline_access` scope is required to obtain a refresh token
  - Customize the scopes to match the use case requirements
  - Ensure the scopes match those configured in the Atlassian Developer Console
  - Refer to [Jira scopes documentation](https://developer.atlassian.com/cloud/jira/platform/scopes-for-oauth-2-3LO-and-forge-apps/) for additional scope information

- For **Jira Site Name** (optional):
  - By default, the connection uses the first Jira site the authenticated user has access to
  - To specify a different site, enter the site name (e.g., `example`) or full URL (e.g., `example.atlassian.net`)
- For **Version**, select the API version (typically `3` for Jira Cloud)

For additional information on developing Jira applications and OAuth 2.0 configuration, refer to the [Jira OAuth 2.0 apps guide](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input          | Comments                                                                                                                                                                                             | Default                                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Authorize URL  | The OAuth 2.0 Authorization URL for Jira.                                                                                                                                                            | https://auth.atlassian.com/authorize?audience=api.atlassian.com&prompt=consent                                                 |
| Token URL      | The OAuth 2.0 Token URL for Jira.                                                                                                                                                                    | https://auth.atlassian.com/oauth/token                                                                                         |
| Scopes         | Space-delimited list of OAuth scopes for Jira access. For more information, see [Jira OAuth 2.0 Scopes](https://developer.atlassian.com/cloud/jira/platform/scopes-for-oauth-2-3LO-and-forge-apps/). | read:jira-user read:jira-work write:jira-work manage:jira-project manage:jira-configuration manage:jira-webhook offline_access |
| Client ID      | Your OAuth 2.0 Client ID from the Atlassian Developer Console.                                                                                                                                       |                                                                                                                                |
| Client Secret  | Your OAuth 2.0 Client Secret from the Atlassian Developer Console.                                                                                                                                   |                                                                                                                                |
| Jira Site Name | Optional site name or URL to connect to. By default, connects to the first Jira site the user has access to. Use this if you have multiple Jira sites.                                               |                                                                                                                                |
| Version        | Select the Jira API version to use for requests.                                                                                                                                                     | 3                                                                                                                              |

### OAuth 2.0 Client Credentials {#jiraoauth2clientcredentials}

Authenticate with Jira using OAuth 2.0 Client Credentials for service account access

To authenticate with Atlassian Jira using OAuth 2.0 Client Credentials, an OAuth 2.0 integration must be configured in the [Atlassian Admin Hub](https://admin.atlassian.com). This connection type enables service account (machine-to-machine) access without requiring user interaction.

For more information on OAuth 2.0 Client Credentials for Jira, refer to [Atlassian's OAuth 2.0 Client Credentials documentation](https://developer.atlassian.com/cloud/jira/platform/oauth-2-authorization-code-grants-3lo-for-apps/#oauth-2-0--client-credentials--grant).

#### Prerequisites

- Access to the [Atlassian Admin Hub](https://admin.atlassian.com) with organization administrator permissions
- A Jira Cloud site associated with the organization

#### Setup Steps

1. Navigate to the [Atlassian Admin Hub](https://admin.atlassian.com)
2. Select the organization that contains the Jira site
3. Navigate to **Security** > **API tokens** > **OAuth 2.0 credentials**
4. Click **Create OAuth credential**
5. Enter a name for the credential
6. Select **Client credentials** as the grant type
7. Configure the required scopes:
   - For basic issue management, the following scopes are recommended:
     ```
     read:jira-user read:jira-work write:jira-work manage:jira-project manage:jira-configuration manage:jira-webhook
     ```
   - Refer to [Jira OAuth 2.0 scopes documentation](https://developer.atlassian.com/cloud/jira/platform/scopes-for-oauth-2-3LO-and-forge-apps/) for a complete list of available scopes
8. Click **Create** to generate the credential
9. Copy the **Client ID** and **Client Secret** values (the secret is only shown once)
10. Obtain the **Cloud ID** for the Jira site:
    - The Cloud ID can be found by calling the Atlassian accessible resources endpoint with an access token
    - Alternatively, it can be extracted from API responses or the Atlassian Admin Hub

#### Configure the Connection

- Enter the **Client ID** from the OAuth 2.0 credential
- Enter the **Client Secret** from the OAuth 2.0 credential
- Enter the **Cloud ID** of the Jira site to connect to
- For **Scopes**, use the following default value:

  ```
  read:jira-user read:jira-work write:jira-work manage:jira-project manage:jira-configuration manage:jira-webhook
  ```

  - Ensure the scopes match those configured in the Atlassian Admin Hub credential
  - Refer to [Jira scopes documentation](https://developer.atlassian.com/cloud/jira/platform/scopes-for-oauth-2-3LO-and-forge-apps/) for additional scope information

- For **Version**, select the API version (typically `3` for Jira Cloud)

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                                                                                         | Default                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Scopes        | Space-delimited list of OAuth scopes for Jira access. These must match the scopes configured when creating the OAuth 2.0 credential in Admin Hub. For more information, see [Jira OAuth 2.0 Scopes](https://developer.atlassian.com/cloud/jira/platform/scopes-for-oauth-2-3LO-and-forge-apps/). | read:jira-user read:jira-work write:jira-work manage:jira-project manage:jira-configuration manage:jira-webhook |
| Client ID     | Your OAuth 2.0 Client ID generated when creating the credential in Atlassian Admin Hub.                                                                                                                                                                                                          |                                                                                                                 |
| Client Secret | Your OAuth 2.0 Client Secret generated when creating the credential in Atlassian Admin Hub.                                                                                                                                                                                                      |                                                                                                                 |
| Cloud ID      | The Cloud ID of your Jira site. You can find this by following the instructions [here](https://support.atlassian.com/jira/kb/retrieve-my-atlassian-sites-cloud-id/).                                                                                                                             |                                                                                                                 |
| Version       | Select the Jira API version to use for requests.                                                                                                                                                                                                                                                 | 3                                                                                                               |

## Triggers

### Issue Events {#issueeventstrigger}

Receive real-time notifications when Jira issues are created, updated, or deleted. Automatically creates and manages a webhook subscription for selected issue events when the instance is deployed, and removes the subscription when the instance is deleted.

| Input            | Comments                                                                                                                                                                                                                             | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection       | The Jira connection to use.                                                                                                                                                                                                          |         |
| Event Types      | Select the Jira events that will trigger this webhook.                                                                                                                                                                               |         |
| JQL Filter       | JQL (Jira Query Language) filter to limit which issues trigger the webhook. For more information, see [JQL Documentation](https://support.atlassian.com/jira-software-cloud/docs/use-advanced-search-with-jira-query-language-jql/). |         |
| Field IDs Filter | Optional list of field IDs to monitor. Only changes to these specific fields will trigger the webhook. Leave empty to monitor all field changes.                                                                                     |         |

## Actions

### Add Comment {#addcomment}

Add a comment to an existing issue

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Jira connection to use.                                                                                   |         |
| Issue ID       | The unique identifier of the Jira issue.                                                                      |         |
| Comment        | The text content of the comment to add or update.                                                             |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |

### Add Issue Attachment {#addissueattachment}

Add a file attachment to an issue

| Input      | Comments                                                     | Default |
| ---------- | ------------------------------------------------------------ | ------- |
| Connection | The Jira connection to use.                                  |         |
| Issue ID   | The unique identifier of the Jira issue.                     |         |
| File       | The file to upload - either string contents or a binary file |         |
| File Name  | The name of the file to upload                               |         |

### Create Issue {#createissue}

Create an issue within a given project

| Input               | Comments                                                                                                                                                                                                                                  | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Jira connection to use.                                                                                                                                                                                                               |         |
| Project ID          | The unique identifier or name of the Jira project.                                                                                                                                                                                        |         |
| Summary             | A brief summary or title for the issue.                                                                                                                                                                                                   |         |
| Description         | A detailed description of the issue.                                                                                                                                                                                                      |         |
| ADF Description     | The above json code will print: 'Some text' in the Jira Issue description, to get more info [click here](https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/) to get a JSON representation of your description. |         |
| Issue Type Name     | Provide a value for the name type of the issue. Use this field or the Issue Type ID field.                                                                                                                                                |         |
| Issue Type ID       | Provide the ID of the Issue Type. Use this field or the Issue Type Name field.                                                                                                                                                            |         |
| Assignee Account ID | The Atlassian account ID of the user to assign the issue to.                                                                                                                                                                              |         |
| Reporter Account ID | The Atlassian account ID of the user reporting the issue.                                                                                                                                                                                 |         |
| Due Date            | Provide due date for the issue.                                                                                                                                                                                                           |         |
| Priority            | Provide the unique identifier of the priority. This value can either be an Id, key, or name of the desired record.                                                                                                                        |         |
| Labels              | Provide a list of labels for the issue.                                                                                                                                                                                                   |         |
| Versions            | Provide JSON data for the versions. You must supply a JSON array with an object containing an Id.                                                                                                                                         |         |
| Fix Versions        | Provide JSON data for the fix versions. Your object must have a property 'id'                                                                                                                                                             |         |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                             |         |
| Values              | The names of the fields and their values to use when creating/updating a record                                                                                                                                                           |         |

### Create User {#createuser}

Create a new user record

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Jira connection to use.                                                                                   |         |
| Email Address  | Provide a string value for a valid email address.                                                             |         |
| Username       | The username for the Jira user account.                                                                       |         |
| Password       | The password to assign to the user account.                                                                   |         |
| Notifications  | When true, the user will receive email notifications for relevant events.                                     | false   |
| Display Name   | The display name for the user account.                                                                        |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |

### Create Version {#createversion}

Create a new version

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Jira connection to use.                                                                                   |         |
| Description    | A detailed description of the issue.                                                                          |         |
| Version Name   | Provide a string value for the name of the version.                                                           |         |
| Archived       | When true, marks the version as archived.                                                                     | false   |
| Released       | When true, marks the version as released.                                                                     | false   |
| Start Date     | Provide a value for the startDate.                                                                            |         |
| Release Date   | Provide a valid date for the release of the given version.                                                    |         |
| Project Key    | The project key identifier (e.g., PROJ, ENG, SALES).                                                          |         |
| Project ID     | The unique identifier or name of the Jira project.                                                            |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |

### Create Webhook {#createwebhook}

Create a webhook to send data from Jira to an instance URL

| Input           | Comments                                                                                                                                                                                                                                                                             | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The Jira connection to use.                                                                                                                                                                                                                                                          |         |
| Webhook URL     | Reference a flow's URL from the trigger payload                                                                                                                                                                                                                                      |         |
| Webhook Details | Webhook Details payload to be sent into Jira's OAuth2 Webhook API or Jira's REST API; must match structure of `webhooks` property for Register Dynamic Webhook endpoint: https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-webhooks/#api-rest-api-3-webhook-post |         |

### Delete Comment {#deletecomment}

Delete a comment from an issue

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |
| Comment ID | The unique identifier of the comment.    |         |

### Delete Issue {#deleteissue}

Delete an issue by id

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |

### Delete Webhook {#deletewebhook}

Delete a webhook by ID

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Jira connection to use.     |         |
| Webhook ID | The ID of the webhook to remove |         |

### Download Issue Attachments {#downloadattachment}

Download the attachments data connected to an issue

| Input          | Comments                                                                                               | Default |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Jira connection to use.                                                                            |         |
| Issue ID       | Providing an Issue ID will return all attachments of an Issue.                                         |         |
| Attachment IDs | The IDs of the attachments to download. If this field is provided, the issue id input will be ignored. |         |

### Find Issue {#findissue}

Find Issue by attribute

| Input        | Comments                                                                                                                                                                                                                           | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Jira connection to use.                                                                                                                                                                                                        |         |
| Search Type  | Attribute to search                                                                                                                                                                                                                |         |
| Search Value | Value to search for                                                                                                                                                                                                                |         |
| Fields       | Comma-separated list of fields to return. Defaults to common navigable fields (summary, status, assignee, reporter, priority, issuetype, project, created, updated). Use '\*all' for all fields or specify individual field names. |         |

### Find Project {#findproject}

Find Project by attribute

| Input        | Comments                    | Default |
| ------------ | --------------------------- | ------- |
| Connection   | The Jira connection to use. |         |
| Search Type  | Attribute to search         |         |
| Search Value | Value to search for         |         |

### Find User {#finduser}

Find User by attribute

| Input        | Comments                    | Default |
| ------------ | --------------------------- | ------- |
| Connection   | The Jira connection to use. |         |
| Search Value | Value to search for         |         |

### Get Board {#getboard}

Get information and metadata of a board by Id

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Board ID   | The unique identifier of the Jira board. |         |

### Get Comments {#getcomments}

Get all the comments on a given issue

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |

### Get Current User {#getcurrentuser}

Get the information and metadata of the current user

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Jira connection to use. |         |

### Get Issue {#getissue}

Get the information and metadata of an issue

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |

### Get Project {#getproject}

Get the information and metadata of a project

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Jira connection to use.                        |         |
| Project ID | The unique identifier or name of the Jira project. |         |

### Get Status List {#getstatuslist}

Returns a status list

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Project ID  | The unique identifier or name of the Jira project.                 |         |
| Max Results | The maximum number of results to return per page.                  |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |

### Get User {#getuser}

Get information and metadata about an user by id

| Input      | Comments                                                                                                                | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jira connection to use.                                                                                             |         |
| Account ID | The unique Atlassian account ID of the user.                                                                            |         |
| Expand     | The response may contain a list under the \_expandable property; you can specify any of its values separated by commas. |         |

### Get Version {#getversion}

Get the information and metadata of an existing version

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Jira connection to use.           |         |
| Version ID | The unique identifier of the version. |         |

### List Assignable Users for Project {#listassignableusers}

Returns a list of users assignable to the given project

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Project Key | The project key identifier (e.g., PROJ, ENG, SALES).               |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |
| Max Results | The maximum number of results to return per page.                  |         |

### List Boards {#listboards}

Retrieve a list of existing boards

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |
| Max Results | The maximum number of results to return per page.                  |         |
| Filter      | The filter applied to the list of dashboards.                      | my      |

### List Board Sprints {#listboardssprints}

List all sprints within a board

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Board ID    | The unique identifier of the Jira board.                           |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |
| Max Results | The maximum number of results to return per page.                  |         |

### List Issue Attachments {#listissueattachments}

Returns a list of issue attachments

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Issue ID   | The unique identifier of the Jira issue. |         |
| Connection | The Jira connection to use.              |         |

### List Issue Custom Fields {#listissuecustomfields}

List all configured issue fields

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Jira connection to use. |         |

### List Issue Fields {#listissuefields}

List all non-custom issue fields

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Jira connection to use. |         |

### List Issue Link Types {#listissuelinktypes}

List all available issue link types

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Jira connection to use. |         |

### List Issues by Project {#listissues}

Returns a list of issues for a specific project

| Input           | Comments                                                                                                                                                                                                                           | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira connection to use.                                                                                                                                                                                                        |         |
| Project ID      | The unique identifier or name of the Jira project.                                                                                                                                                                                 |         |
| Next Page Token | Token for cursor-based pagination. Use the token returned from the previous response to get the next page of results. Leave empty for the first page.                                                                              |         |
| Max Results     | The maximum number of results to return per page.                                                                                                                                                                                  |         |
| Fields          | Comma-separated list of fields to return. Defaults to common navigable fields (summary, status, assignee, reporter, priority, issuetype, project, created, updated). Use '\*all' for all fields or specify individual field names. |         |

### List Issue Transitions {#listissuetransitions}

Returns a list of issue transitions

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |

### List Issue Types {#listissuetypes}

Returns a list of issue types

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Jira connection to use. |         |

### List Issue Worklogs {#listissueworklogs}

Returns a list of issue worklogs

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Jira connection to use.              |         |
| Issue ID   | The unique identifier of the Jira issue. |         |

### List Priorities {#listpriorities}

Returns a list of all priorities

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Max Results | The maximum number of results to return per page.                  |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |

### List Projects {#listprojects}

Retrieve a list of all projects

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Max Results | The maximum number of results to return per page.                  |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |

### List Versions {#listversions}

Returns a list of all versions

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Jira connection to use.                                        |         |
| Project ID  | The unique identifier or name of the Jira project.                 |         |
| Max Results | The maximum number of results to return per page.                  |         |
| Start At    | The index of the first item to return in the result set (0-based). | 0       |

### List Webhooks {#listwebhooks}

List all webhooks configured, including those for other integrations

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Jira connection to use.                                             |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |

### Query {#queryv3}

Search your entire Jira site using a JQL query.

| Input       | Comments                                                                                                                | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Jira connection to use.                                                                                             |         |
| Search      | The search term to use when searching for records.                                                                      |         |
| Expand      | The response may contain a list under the \_expandable property; you can specify any of its values separated by commas. |         |
| Max Results | The maximum number of results to return per page.                                                                       |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Jira

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

Refresh webhook expiration by ID

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The Jira connection to use.  |         |
| Webhook ID | ID of the webhook to refresh |         |

### Search Issues {#searchissues}

Returns a list of issues that match the given string of text

| Input       | Comments                                                                                                                                                                                                                           | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Jira connection to use.                                                                                                                                                                                                        |         |
| Search      | The search term to use when searching for records.                                                                                                                                                                                 |         |
| Project Key | The project key identifier (e.g., PROJ, ENG, SALES).                                                                                                                                                                               |         |
| Fields      | Comma-separated list of fields to return. Defaults to common navigable fields (summary, status, assignee, reporter, priority, issuetype, project, created, updated). Use '\*all' for all fields or specify individual field names. |         |

### Search Projects {#searchprojects}

Returns a list of projects that match the given string of text

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Jira connection to use.                        |         |
| Search     | The search term to use when searching for records. |         |

### Search Users {#searchusers}

Returns a single user that matches the given string of text

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection | The Jira connection to use.                        |         |
| Search     | The search term to use when searching for records. |         |

### Transition Issue {#transitionissue}

Transition an existing issue by Id

| Input         | Comments                                       | Default |
| ------------- | ---------------------------------------------- | ------- |
| Connection    | The Jira connection to use.                    |         |
| Issue ID      | The unique identifier of the Jira issue.       |         |
| Transition ID | The unique identifier of the issue transition. |         |

### Update Comment {#updatecomment}

Update the contents and metadata of an existing comment.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Jira connection to use.                                                                                   |         |
| Issue ID       | The unique identifier of the Jira issue.                                                                      |         |
| Comment ID     | The unique identifier of the comment.                                                                         |         |
| Comment        | The text content of the comment to add or update.                                                             |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |

### Update Issue {#updateissue}

Update an existing issue within a given project

| Input               | Comments                                                                                                                                                                                                                                  | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Jira connection to use.                                                                                                                                                                                                               |         |
| Issue ID            | The unique identifier of the Jira issue.                                                                                                                                                                                                  |         |
| Project ID          | The unique identifier or name of the Jira project.                                                                                                                                                                                        |         |
| Summary             | A brief summary or title for the issue.                                                                                                                                                                                                   |         |
| Description         | A detailed description of the issue.                                                                                                                                                                                                      |         |
| ADF Description     | The above json code will print: 'Some text' in the Jira Issue description, to get more info [click here](https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/) to get a JSON representation of your description. |         |
| Issue Type Name     | Provide a value for the name type of the issue. Use this field or the Issue Type ID field.                                                                                                                                                |         |
| Issue Type ID       | Provide the ID of the Issue Type. Use this field or the Issue Type Name field.                                                                                                                                                            |         |
| Assignee Account ID | The Atlassian account ID of the user to assign the issue to.                                                                                                                                                                              |         |
| Reporter Account ID | The Atlassian account ID of the user reporting the issue.                                                                                                                                                                                 |         |
| Fix Versions        | Provide JSON data for the fix versions. Your object must have a property 'id'                                                                                                                                                             |         |
| Priority            | Provide the unique identifier of the priority. This value can either be an Id, key, or name of the desired record.                                                                                                                        |         |
| Labels              | Provide a list of labels for the issue.                                                                                                                                                                                                   |         |
| Due Date            | Provide due date for the issue.                                                                                                                                                                                                           |         |
| Versions            | Provide JSON data for the versions. You must supply a JSON array with an object containing an Id.                                                                                                                                         |         |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                             |         |
| Values              | The names of the fields and their values to use when creating/updating a record                                                                                                                                                           |         |

### Update Version {#updateversion}

Update an existing version by Id

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Jira connection to use.                                                                                   |         |
| Version ID     | The unique identifier of the version.                                                                         |         |
| Description    | A detailed description of the issue.                                                                          |         |
| Version Name   | Provide a string value for the name of the version.                                                           |         |
| Archived       | When true, marks the version as archived.                                                                     | false   |
| Released       | When true, marks the version as released.                                                                     | false   |
| Start Date     | Provide a value for the startDate.                                                                            |         |
| Release Date   | Provide a valid date for the release of the given version.                                                    |         |
| Project Key    | The project key identifier (e.g., PROJ, ENG, SALES).                                                          |         |
| Project ID     | The unique identifier or name of the Jira project.                                                            |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |
