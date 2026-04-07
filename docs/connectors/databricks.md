---
title: Databricks Connector
sidebar_label: Databricks
description: Manage compute, workflow jobs, ML models, SQL queries and more within a Databricks workspace.
---

![Databricks](./assets/databricks.png#connector-icon)
[Databricks](https://www.databricks.com/) is an analytics and artificial intelligence platform for building, scaling, and governing data and AI, including generative AI and other machine learning models.
This component allows interacting with the Databricks REST API to manage clusters, jobs, libraries, and other resources.

## API Documentation

This component was built using the [Databricks REST API Reference](https://docs.databricks.com/api/workspace/introduction).

## Connections

### OAuth 2.0 Client Credentials {#workspaceserviceprincipal}

Authenticate using OAuth 2.0 Client Credentials

With service principal authentication, a service user is created within the account, the user is granted permissions to a workspace, and then a client ID and secret pair is generated for that service user.
This component uses that key pair to authenticate with workspaces that the service account has been granted permissions to.
This is the best practice for authenticating with the Databricks REST API.

#### Prerequisites

- A Databricks account with administrator access
- Access to [Databricks Account Console](https://accounts.cloud.databricks.com)

#### Setup Steps

1. Create the service principal
   1. Open [Databricks Users](https://accounts.cloud.databricks.com/users). Under the **Service principals** tab select **Add service principal**.
   1. Give the service principal any name and click **Add**.
1. Grant the service principal permission to the workspace
   1. Navigate to [Databricks Workspaces](https://accounts.cloud.databricks.com/workspaces) and select the workspace.
   1. Under the **Permissions** tab select **Add permissions**.
   1. Search for the service principal created above and grant the permission **Admin**.
1. Generate a key pair for the service principal
   1. Navigate to the service principal and open the **Principal information** tab.
   2. Under **OAuth secrets** select **Generate secret**.
   3. Take note of the **Secret** (i.e. "Client Secret") and **Client ID** received. The client ID should be a UUID like `00000000-0000-0000-0000-000000000000`. The client secret will look like `dose00000000000000000000000000000000`.

#### Configure the Connection

Create a connection of type **Databricks Workspace Service Principal** and enter:

- **Token URL**: The OAuth 2.0 Token URL for the Databricks workspace. Replace `REPLACE-ME` in `https://dbc-REPLACE-ME.cloud.databricks.com/oidc/v1/token` to reflect the workspace URL. For account-level API access, use `https://accounts.cloud.databricks.com/oidc/accounts/<my-account-id>/v1/token` instead.
- **Scopes**: OAuth scopes to request (defaults to `all-apis`)
- **Service Principal Client ID**: The Client ID from the generated key pair
- **Service Principal Client Secret**: The Client Secret from the generated key pair

:::note[Account-Level API Access]
For account-level access (e.g., managing workspaces using the service principal), grant the service principal administrative access to the account and use the account-level token URL format: `https://accounts.cloud.databricks.com/oidc/accounts/<my-account-id>/v1/token`.
:::

See [Databricks OAuth machine-to-machine authentication](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html) for more information on service principal OAuth client credential authentication.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                           | Comments                                                                                                                                                                                                                                                                                   | Default                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| Token URL                       | The OAuth 2.0 Token URL for the Databricks workspace. Replace REPLACE-ME in https://dbc-REPLACE-ME.cloud.databricks.com/oidc/v1/token to reflect the workspace URL.                                                                                                                        | https://dbc-REPLACE-ME.cloud.databricks.com/oidc/v1/token |
| Scopes                          | The OAuth scopes to request. Defaults to all-apis.                                                                                                                                                                                                                                         | all-apis                                                  |
| Service Principal Client ID     | The client ID of the Databricks Service Principal. The service principal must be granted the necessary permissions in the Databricks workspace. https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html#step-2-assign-workspace-level-permissions-to-the-databricks-service-principal |                                                           |
| Service Principal Client Secret | The client secret of the Databricks Service Principal.                                                                                                                                                                                                                                     |                                                           |

### Personal Access Token {#personalaccesstoken}

Authenticate using a personal access token

While service principal authentication is the recommended method for authenticating with the Databricks REST API, personal access tokens (which are tied to specific users) can also be used.

#### Prerequisites

- A Databricks workspace account

#### Setup Steps

1. Open [Databricks Workspaces](https://accounts.cloud.databricks.com/workspaces) and select the workspace. Open the URL for the workspace (e.g., `https://dbc-00000000-aaaa.cloud.databricks.com`) and log in.
1. From the top-right, click the user icon and select **Settings**.
1. Under the **User > Developer** tab, select **Manage** under **Access tokens**.
1. Click the **Generate New Token** button. Enter a description for the token and click **Generate**. Omit _Lifetime (days)_ to create a token that never expires.

The token will look similar to `dap000000000000000000000000000000000`. Copy this token for use in the connection configuration.

#### Configure the Connection

Create a connection of type **Databricks Personal Access Token** and enter:

- **Host**: The workspace endpoint (e.g., `dbc-REPLACE-ME.cloud.databricks.com`)
- **Personal Access Token**: The token generated above

See [Databricks personal access token authentication](https://docs.databricks.com/en/dev-tools/auth/pat.html) for more information.

| Input                 | Comments                                                                                                                        | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Host                  | The hostname of the Databricks instance. Include the entire domain name. For example, dbc-1234567890123456.cloud.databricks.com |         |
| Personal Access Token | From Databricks, go to User Settings > Developer > Access Tokens > Manage > Generate New Token                                  |         |

## Actions

### Create Execution Context {#createexecutioncontext}

Create a Databricks execution context

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The Databricks connection to use.                         |         |
| Cluster ID | The unique identifier for the Databricks cluster.         |         |
| Language   | The programming language to use in the execution context. | python  |

### Execute SQL Statement {#runsql}

Run a SQL query in the Databricks workspace. You can choose to wait for the result or asynchronously issue the request and return the statement ID.

| Input          | Comments                                                                                                                                                                                      | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Databricks connection to use.                                                                                                                                                             |         |
| Warehouse ID   | The unique identifier for the Databricks SQL warehouse.                                                                                                                                       |         |
| SQL Statement  | The SQL statement to execute against the Databricks SQL warehouse.                                                                                                                            |         |
| SQL Parameters | The parameters to use in the SQL statement. This should represent an array of objects, and each object should have a name and value. For example, [{ "name": "my_name", "value": "the name" } |         |

### Get Cluster {#getcluster}

Get a Databricks cluster by ID

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Databricks connection to use.                 |         |
| Cluster ID | The unique identifier for the Databricks cluster. |         |

### Get Command Status {#getcommandstatus}

Gets the status of and, if available, the results from a currently executing command.

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The Databricks connection to use.                                                       |         |
| Cluster ID           | The unique identifier for the Databricks cluster.                                       |         |
| Execution Context ID | The ID of the execution context, likely created by the Create Execution Context action. |         |
| Command ID           | The unique identifier of the command whose status will be retrieved.                    |         |

### Get Current User {#getcurrentuser}

Get the currently authenticated Databricks user or service principal.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Databricks connection to use. |         |

### Get SQL Warehouse {#getwarehouse}

Get a SQL Warehouse by ID.

| Input        | Comments                                                | Default |
| ------------ | ------------------------------------------------------- | ------- |
| Connection   | The Databricks connection to use.                       |         |
| Warehouse ID | The unique identifier for the Databricks SQL warehouse. |         |

### List Clusters {#listclusters}

Return information about all pinned clusters, active clusters, up to 200 of the most recently terminated all-purpose clusters in the past 30 days, and up to 30 of the most recently terminated job clusters in the past 30 days.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Databricks connection to use. |         |

### List Node Types {#listnodetypes}

Returns a list of supported Spark node types. These node types can be used to launch a cluster.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Databricks connection to use. |         |

### List SQL Warehouses {#listwarehouses}

List all SQL Warehouses in the Databricks workspace

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Databricks connection to use. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to the Databricks API.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                                    | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Databricks connection to use.                                                                                                                                                                                                                                                                                                                                           |         |
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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                                                            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                                                               | false   |

### Restart Cluster {#restartcluster}

Restart a Databricks cluster by ID

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Databricks connection to use.                 |         |
| Cluster ID | The unique identifier for the Databricks cluster. |         |

### Run Command {#runcommand}

Run a command in a Databricks execution context

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The Databricks connection to use.                                                       |         |
| Cluster ID           | The unique identifier for the Databricks cluster.                                       |         |
| Execution Context ID | The ID of the execution context, likely created by the Create Execution Context action. |         |
| Language             | The programming language to use in the execution context.                               | python  |
| Command              | The executable code to run in the execution context.                                    |         |

### Start SQL Warehouse {#startwarehouse}

Start a SQL Warehouse.

| Input        | Comments                                                | Default |
| ------------ | ------------------------------------------------------- | ------- |
| Connection   | The Databricks connection to use.                       |         |
| Warehouse ID | The unique identifier for the Databricks SQL warehouse. |         |

### Start Terminated Cluster {#startterminatedcluster}

Start a terminated Databricks cluster by ID

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Databricks connection to use.                 |         |
| Cluster ID | The unique identifier for the Databricks cluster. |         |

### Stop SQL Warehouse {#stopwarehouse}

Stop a SQL Warehouse.

| Input        | Comments                                                | Default |
| ------------ | ------------------------------------------------------- | ------- |
| Connection   | The Databricks connection to use.                       |         |
| Warehouse ID | The unique identifier for the Databricks SQL warehouse. |         |

### Terminate Cluster {#terminatecluster}

Terminate a Databricks cluster by ID

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Databricks connection to use.                 |         |
| Cluster ID | The unique identifier for the Databricks cluster. |         |
