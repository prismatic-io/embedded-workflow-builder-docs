---
title: Databricks Connector
sidebar_label: Databricks
description: Manage compute, workflow jobs, ML models, SQL queries and more within a Databricks workspace.
---

![Databricks](./assets/databricks.png#connector-icon)
Manage compute, workflow jobs, ML models, SQL queries and more within a Databricks workspace.

## Connections

### Databricks Personal Access Token

While service principal authentication is the recommended method for authenticating with the Databricks REST API, you can also use personal access tokens (which are tied to specific users).
To generate a personal access token:

1. Open https://accounts.cloud.databricks.com/workspaces and select your workspace. Open the URL for your workspace (e.g., `https://dbc-00000000-aaaa.cloud.databricks.com`) and log in.
1. From the top-right click your user icon and select **Settings**.
1. Under the **User > Developer** tab, select **Manage** under **Access tokens**.
1. Click the **Generate New Token** button. Enter a description for the token and click **Generate**. Omit _Lifetime (days)_ to create a token that never expires.

Your token will look similar to `dap000000000000000000000000000000000`. Copy this token and use it as the `token` input for the Databricks components.

When configuring an instance, enter the personal access token along with your workspace's endpoint (like `dbc-REPLACE-ME.cloud.databricks.com`).

See https://docs.databricks.com/en/dev-tools/auth/pat.html for more information on personal access token authentication.

| Input                 | Comments                                                                                                                         | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Host                  | The hostname of your Databricks instance. Include the entire domain name. For example, dbc-1234567890123456.cloud.databricks.com |         |
| Personal Access Token | From DataBricks, go to User Settings > Developer > Access Tokens > Manage > Generate New Token                                   |         |

### Databricks Workspace Service Principal

With service principal authentication, you create a service user within your account, grant the user permissions to a workspace, and then generate a client ID and secret pair for that service user.
This component uses that key pair to authenticate with workspaces that the service account has been granted permissions to.
This is the best practice for authenticating with the Databricks REST API.

To set up service principal authentication, you need to:

1. Create the service principal
   1. Open https://accounts.cloud.databricks.com/users. Under the **Service principals** tab select **Add service principal**.
   1. Give the service principal any name and click **Add**.
1. Grant the service principal permission to your workspace
   1. Navigate to https://accounts.cloud.databricks.com/workspaces and select your workspace
   1. Under the **Permissions** tab select **Add permissions**
   1. Search for the service principal you created and grant the permission **Admin**.
1. Generate a key pair for the service principal
   1. Navigate to the service principal and open the **Principal information** tab.
   2. Under **OAuth secrets** select **Generate secret**.
   3. Take note of the **Secret** (i.e. "Client Secret") and **Client ID** you receive. The client ID should be a UUID like `00000000-0000-0000-0000-000000000000`. The client secret will look like `dose00000000000000000000000000000000`.

When configuring an instance, enter the client ID and client secret along with your workspace's token URL endpoint (like `https://dbc-REPLACE-ME.cloud.databricks.com/oidc/v1/token`) if you need workspace-level API access.

If you need account-level access to the API (i.e. you need to manage workspaces using this service principal), you will need to grant the service principal administrative access to your account, and your token URL will look like `https://accounts.cloud.databricks.com/oidc/accounts/<my-account-id>/v1/token`.

See https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html for more information on service principal OAuth client credential authentication.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                           | Comments                                                                                                                                                                                                                                                                                       | Default                                                   |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Token URL                       | The OAuth 2.0 Token URL for your Databricks workspace. Replace REPLACE-ME in https://dbc-REPLACE-ME.cloud.databricks.com/oidc/v1/token to reflect your workspace's URL.                                                                                                                        | https://dbc-REPLACE-ME.cloud.databricks.com/oidc/v1/token |
| Scopes                          | OAuth scopes to request. Defaults to all-apis.                                                                                                                                                                                                                                                 | all-apis                                                  |
| Service Principal Client ID     | Client ID of your Service Principal. Make sure that your service principal has been granted the necessary permissions in your Databricks workspace. https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html#step-2-assign-workspace-level-permissions-to-the-databricks-service-principal |                                                           |
| Service Principal Client Secret | Client Secret of your Service Principal.                                                                                                                                                                                                                                                       |                                                           |

## Actions

### Create Execution Context

Create a Databricks execution context

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Cluster ID    | The unique identifier for the cluster                |         |
| Language      |                                                      | python  |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Cluster

Get a Databricks cluster by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Cluster ID    | The unique identifier for the cluster                |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Command Status

Gets the status of and, if available, the results from a currently executing command.

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                         |         |
| Cluster ID           | The unique identifier for the cluster                                                   |         |
| Execution Context ID | The ID of the execution context, likely created by the Create Execution Context action. |         |
| Command ID           | The ID of the command to get the status of                                              |         |
| Debug Request        | Enabling this flag will log out the current request.                                    | false   |

### Get Current User

Get the currently authenticated Databricks user or service principal.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get SQL Warehouse

Get an SQL Warehouse

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Warehouse ID  | The ID of an SQL warehouse                           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Clusters

Return information about all pinned clusters, active clusters, up to 200 of the most recently terminated all-purpose clusters in the past 30 days, and up to 30 of the most recently terminated job clusters in the past 30 days.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Node Types

Returns a list of supported Spark node types. These node types can be used to launch a cluster.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List SQL Warehouses

List all SQL Warehouses in the Databricks workspace

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Raw Request

Send raw HTTP request to the Databricks API.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                                    | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                                                                             |         |
| URL                     | The URL https://<WORKSPACE-URL>/api/ is prepended to the URL you provide here. For example, if you provide "/2.0/clusters/list", the full URL will be "https://${host}/api/2.0/clusters/list". You can also provide a full URL with protocol (i.e. "https://accounts.cloud.databricks.com/api/2.0/accounts/{account_id}/scim/v2/Groups" to override the prepended base URL. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                                                     |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                                                                   |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                        |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                            |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                                                                      |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                                                         |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                                                                 |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                                                                    | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                                                         |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                        | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                                                            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                                                               | false   |

### Restart Cluster

Restart a Databricks cluster by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Cluster ID    | The unique identifier for the cluster                |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Run Command

Run a command in a Databricks execution context

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                         |         |
| Cluster ID           | The unique identifier for the cluster                                                   |         |
| Execution Context ID | The ID of the execution context, likely created by the Create Execution Context action. |         |
| Language             |                                                                                         | python  |
| Command              | The executable code to run in the execution context                                     |         |
| Debug Request        | Enabling this flag will log out the current request.                                    | false   |

### SQL: Execute an SQL Statement

Run a SQL query in the Databricks workspace. You can choose to wait for the result or asynchronously issue the request and return the statement ID.

| Input          | Comments                                                                                                                                                                                      | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                                                               |         |
| Warehouse ID   | The ID of an SQL warehouse                                                                                                                                                                    |         |
| SQL Statement  | The SQL statement to run                                                                                                                                                                      |         |
| SQL Parameters | The parameters to use in the SQL statement. This should represent an array of objects, and each object should have a name and value. For example, [{ "name": "my_name", "value": "the name" } |         |
| Debug Request  | Enabling this flag will log out the current request.                                                                                                                                          | false   |

### Start SQL Warehouse

Start an SQL Warehouse

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Warehouse ID  | The ID of an SQL warehouse                           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Start Terminated Cluster

Start a terminated Databricks cluster by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Cluster ID    | The unique identifier for the cluster                |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Stop SQL Warehouse

Stop an SQL Warehouse

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Warehouse ID  | The ID of an SQL warehouse                           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Terminate Cluster

Terminate a Databricks cluster by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Cluster ID    | The unique identifier for the cluster                |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
