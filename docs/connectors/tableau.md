---
title: Tableau Connector
sidebar_label: Tableau
description: Manage projects and workbooks in your Tableau site.
---

![Tableau](./assets/tableau.png#connector-icon)
[Tableau](https://www.tableau.com/) is an interactive data visualization software company focused on business intelligence.
This component allows managing users, projects, workbooks, and connections through the Tableau REST API.

## API Documentation

This component was built using the [Tableau REST API Documentation](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api.htm).

## Connections

### Personal Access Token {#privatekey}

Authenticate requests to Tableau using a Personal Access Token.

This component uses Personal Access Token authentication to interact with the Tableau REST API.
Create a connection of type **Personal Access Token**.

#### Prerequisites

- A Tableau Cloud or Tableau Server account with permission to create Personal Access Tokens.

#### Setup Steps

1. Log in to **Tableau**.
2. Click the user icon in the top right, and click **My Account Settings**.
3. Under **Personal Access Tokens**, type in a **Token Name** and select **Create new token**.
   Take note of the **Token Name** and **Token Secret**. These are entered into the connection in a moment.
4. Locate the Tableau URL.
   It looks like `https://10ay.online.tableau.com/#/site/MarketingTeam/workbooks`.
   The `10ay.online.tableau.com` portion is the **Host Name**, and `MarketingTeam` is the **Site ID**.

#### Configure the Connection

- **Token Name**: The name of the Personal Access Token created above.
- **Token Secret**: The secret value of the Personal Access Token created above.
- **Host Name**: The Tableau server host, without the `https://` prefix (for example, `10ay.online.tableau.com`).
- **Site ID**: The Tableau site identifier (for example, `MarketingTeam`).

For additional information regarding authentication, refer to the [Tableau docs](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_auth.htm).

| Input        | Comments                                                                                                               | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Token Secret | The Tableau Personal Access Token secret. This value can be created from the Tableau account.                          |         |
| Token Name   | The name of the Tableau Personal Access Token.                                                                         |         |
| Host Name    | The host name of the Tableau server, without the https:// prefix.                                                      |         |
| Site ID      | The ID of the Tableau site (the MarketingTeam part of https://10ay.online.tableau.com/#/site/MarketingTeam/workbooks). |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for new and updated records in a selected Tableau resource type on a configured schedule.

| Input                | Comments                                                                                                                     | Default   |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------- |
| Connection           |                                                                                                                              |           |
| Resource Type        | The Tableau resource collection to poll for new and updated records.                                                         | workbooks |
| Show New Records     | When true, records whose `createdAt` falls after the last poll are emitted on the `created` branch.                          | true      |
| Show Updated Records | When true, records whose `updatedAt` falls after the last poll but were created earlier are emitted on the `updated` branch. | true      |

### Webhook Events {#tableautrigger}

Receive event notifications from Tableau. Automatically creates and manages a webhook subscription for the selected events when the instance is deployed, and removes the subscription when the instance is deleted.

| Input          | Comments                                                     | Default |
| -------------- | ------------------------------------------------------------ | ------- |
| Connection     |                                                              |         |
| API Event Name | The events to subscribe to.                                  |         |
| API Version    | The version of the Tableau API to use.                       | 3.6     |
| Timeout        | The maximum amount of time the client will await a response. |         |

## Actions

### Create Project {#createproject}

Create a new project in a Tableau site.

| Input               | Comments                                                                                                                   | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Parent Project ID   | The unique identifier for the parent project.                                                                              |         |
| Project Name        | The display name shown for the project in Tableau.                                                                         |         |
| Content Permissions | Controls user permissions in a project. A nested project inherits the parent's permissions and this setting has no effect. |         |
| Description         | A description of the project.                                                                                              |         |
| Timeout             | The maximum amount of time the client will await a response.                                                               |         |
| Connection          |                                                                                                                            |         |

### Create User {#createuser}

Create a new user in a Tableau site.

| Input        | Comments                                                                      | Default |
| ------------ | ----------------------------------------------------------------------------- | ------- |
| Username     | The username of the user. For Tableau Online, this value is an email address. |         |
| Site Role    | The role assigned to the user on the site.                                    |         |
| Auth Setting | The authentication method used to sign the user in.                           |         |
| Timeout      | The maximum amount of time the client will await a response.                  |         |
| Connection   |                                                                               |         |

### Create Webhook {#createwebhook}

Create a new webhook for a site.

| Input           | Comments                                                                                              | Default |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                       |         |
| Webhook Name    | A descriptive label to identify the webhook in Tableau.                                               |         |
| API Event Name  | The name of the Tableau event that triggers the webhook.                                              |         |
| Webhook URL     | The destination URL for the webhook. The destination URL must use HTTPS and have a valid certificate. |         |
| Webhook Enabled | When true, the newly created webhook is enabled. When false, the webhook is disabled.                 | true    |
| Timeout         | The maximum amount of time the client will await a response.                                          |         |
| API Version     | The version of the Tableau API to use.                                                                | 3.6     |

### Delete Project {#deleteprojects}

Delete an existing project by ID.

| Input      | Comments                                                     | Default |
| ---------- | ------------------------------------------------------------ | ------- |
| Project ID | The unique identifier for the project.                       |         |
| Timeout    | The maximum amount of time the client will await a response. |         |
| Connection |                                                              |         |

### Delete User {#deleteuser}

Delete an existing user by ID.

| Input      | Comments                                                     | Default |
| ---------- | ------------------------------------------------------------ | ------- |
| User ID    | The unique identifier for the user.                          |         |
| Timeout    | The maximum amount of time the client will await a response. |         |
| Connection |                                                              |         |

### Delete Webhook {#deletewebhook}

Delete the specified webhook.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Connection  |                                                              |         |
| Webhook ID  | The unique identifier for the webhook.                       |         |
| Timeout     | The maximum amount of time the client will await a response. |         |
| API Version | The version of the Tableau API to use.                       | 3.6     |

### Delete Workbook {#deleteworkbook}

Delete an existing workbook by ID.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Workbook ID | The unique identifier for the workbook.                      |         |
| Timeout     | The maximum amount of time the client will await a response. |         |
| Connection  |                                                              |         |

### Get Project {#getproject}

Retrieve an existing project by ID.

| Input        | Comments                                                     | Default |
| ------------ | ------------------------------------------------------------ | ------- |
| Project Name | The display name shown for the project in Tableau.           |         |
| Timeout      | The maximum amount of time the client will await a response. |         |
| Connection   |                                                              |         |

### Get User {#getuser}

Retrieve an existing user by ID.

| Input      | Comments                                                     | Default |
| ---------- | ------------------------------------------------------------ | ------- |
| User ID    | The unique identifier for the user.                          |         |
| Timeout    | The maximum amount of time the client will await a response. |         |
| Connection |                                                              |         |

### Get Webhook {#getwebhook}

Retrieve information about the specified webhook.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Connection  |                                                              |         |
| Webhook ID  | The unique identifier for the webhook.                       |         |
| Timeout     | The maximum amount of time the client will await a response. |         |
| API Version | The version of the Tableau API to use.                       | 3.6     |

### Get Workbook {#getworkbook}

Retrieve an existing workbook by ID.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Workbook ID | The unique identifier for the workbook.                      |         |
| Timeout     | The maximum amount of time the client will await a response. |         |
| Connection  |                                                              |         |

### List Connections {#listconnections}

Retrieve a list of connections from a Tableau workbook.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Workbook ID | The unique identifier for the workbook.                      |         |
| Timeout     | The maximum amount of time the client will await a response. |         |
| Page Size   | The maximum number of results to return.                     |         |
| Page Number | The page offset for the given object's results.              |         |
| Connection  |                                                              |         |

### List Projects {#listprojects}

Retrieve a list of projects from a Tableau site.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Timeout     | The maximum amount of time the client will await a response. |         |
| Page Size   | The maximum number of results to return.                     |         |
| Page Number | The page offset for the given object's results.              |         |
| Connection  |                                                              |         |

### List Users {#listusers}

Retrieve a list of users from a Tableau site.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Timeout     | The maximum amount of time the client will await a response. |         |
| Page Size   | The maximum number of results to return.                     |         |
| Page Number | The page offset for the given object's results.              |         |
| Connection  |                                                              |         |

### List Webhooks {#listwebhooks}

Retrieve a list of all the webhooks on the specified site.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Timeout     | The maximum amount of time the client will await a response. |         |
| Page Size   | The maximum number of results to return.                     |         |
| Page Number | The page offset for the given object's results.              |         |
| Connection  |                                                              |         |
| API Version | The version of the Tableau API to use.                       | 3.6     |

### List Workbooks {#listworkbooks}

Retrieve a list of workbooks from a Tableau site.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Timeout     | The maximum amount of time the client will await a response. |         |
| Page Size   | The maximum number of results to return.                     |         |
| Page Number | The page offset for the given object's results.              |         |
| Connection  |                                                              |         |

### Publish Workbook {#publishworkbook}

Publish a workbook on the specified site.

| Input                  | Comments                                                                                                                                                                                                                       | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Timeout                | The maximum amount of time the client will await a response.                                                                                                                                                                   |         |
| Connection             |                                                                                                                                                                                                                                |         |
| Upload Session ID      | When committing a file that was uploaded in parts, this value contains the upload session ID generated by a call to Initiate File Upload.                                                                                      |         |
| Workbook Type          | The file format of the uploaded workbook: twb for a workbook file or twbx for a packaged workbook file.                                                                                                                        |         |
| Overwrite              | When true, overwrites a workbook that has the same name. When false, the request fails if the specified workbook already exists.                                                                                               | false   |
| As Job                 | When false, the workbook publishing process runs synchronously and may time out for very large workbooks. When true, the process runs asynchronously and a job starts to perform the publishing process and return the job ID. | false   |
| Skip Connection Check  | When true, the Tableau server does not check whether a non-published connection of a workbook is reachable.                                                                                                                    | false   |
| Workbook XML           | The XML request body describing the workbook to publish. Must be a valid tsRequest document.                                                                                                                                   |         |
| Workbook File Contents | The twbx file to upload as binary data.                                                                                                                                                                                        |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Tableau.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/projects); the base URL is already included (https://{inputHostName}/api/{inputApiVersion}/sites/{siteId}). For example, to connect to https://{inputHostName}/api/{inputApiVersion}/sites/{siteId}/projects, enter only /projects in this field. Note: {inputHostName} is derived from the Host Name input in the connection configuration, {inputApiVersion} is based on the API Version input (default is 3.6), and {siteId} is automatically appended. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                                                                                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                                                                                                                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                                                                                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                                                                                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                                                                                                                                                                 | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                                                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                                                                                                                                                                    | false   |
| API Version             | The version of the Tableau API to use.                                                                                                                                                                                                                                                                                                                                                                                                                                           | 3.6     |

### Search Connections {#searchconnections}

Search for a specific connection in a workbook.

| Input        | Comments                                                     | Default |
| ------------ | ------------------------------------------------------------ | ------- |
| Workbook ID  | The unique identifier for the workbook.                      |         |
| Search       | The text value to search on.                                 |         |
| Search Field | The field to filter connections on.                          |         |
| Timeout      | The maximum amount of time the client will await a response. |         |
| Connection   |                                                              |         |
| Page Number  | The page offset for the given object's results.              |         |
| Page Size    | The maximum number of results to return.                     |         |

### Search Projects {#searchprojects}

Search for a specific project by a string of text.

| Input        | Comments                                                                      | Default |
| ------------ | ----------------------------------------------------------------------------- | ------- |
| Search       | The text value to search on.                                                  |         |
| Search Field | The field to search. Dates should follow the ISO format: 2016-05-04T21:24:49Z |         |
| Timeout      | The maximum amount of time the client will await a response.                  |         |
| Connection   |                                                                               |         |
| Page Number  | The page offset for the given object's results.                               |         |
| Page Size    | The maximum number of results to return.                                      |         |

### Search Users {#searchusers}

Search for a specific user by a string of text.

| Input        | Comments                                                                      | Default |
| ------------ | ----------------------------------------------------------------------------- | ------- |
| Search Field | The field to search. Dates should follow the ISO format: 2016-05-04T21:24:49Z |         |
| Search       | The text value to search on.                                                  |         |
| Timeout      | The maximum amount of time the client will await a response.                  |         |
| Connection   |                                                                               |         |
| Page Number  | The page offset for the given object's results.                               |         |
| Page Size    | The maximum number of results to return.                                      |         |

### Search Workbooks {#searchworkbooks}

Search for a specific workbook by a string of text.

| Input           | Comments                                                     | Default |
| --------------- | ------------------------------------------------------------ | ------- |
| Search Field    | The field to search.                                         |         |
| Filter Operator | The operator to use when searching.                          |         |
| Search          | The text value to search on.                                 |         |
| Timeout         | The maximum amount of time the client will await a response. |         |
| Connection      |                                                              |         |
| Page Number     | The page offset for the given object's results.              |         |
| Page Size       | The maximum number of results to return.                     |         |

### Test Webhook {#testwebhook}

Test the specified webhook by sending an empty payload to its configured destination URL and returning the server response.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Connection  |                                                              |         |
| Webhook ID  | The unique identifier for the webhook.                       |         |
| Timeout     | The maximum amount of time the client will await a response. |         |
| API Version | The version of the Tableau API to use.                       | 3.6     |

### Update Connection {#updateconnection}

Update the information and metadata of an existing connection by ID.

| Input                 | Comments                                                                                      | Default |
| --------------------- | --------------------------------------------------------------------------------------------- | ------- |
| Workbook ID           | The unique identifier for the workbook.                                                       |         |
| Connection ID         | The unique identifier for the connection.                                                     |         |
| Server Address        | The address of the server to connect to.                                                      |         |
| Server Port           | The port of the server to connect to.                                                         |         |
| Connection Username   | The username used to authenticate the connection.                                             |         |
| Connection Password   | The password used to authenticate the connection.                                             |         |
| Embed Password        | When true, embeds the password for the connection.                                            | false   |
| Query Tagging Enabled | When true, associates a server log query event with the Tableau resource that made the query. | false   |
| Timeout               | The maximum amount of time the client will await a response.                                  |         |
| Connection            |                                                                                               |         |

### Update Project {#updateproject}

Update the contents and metadata of an existing project by ID.

| Input               | Comments                                                                                                                   | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Project ID          | The unique identifier for the project.                                                                                     |         |
| Parent Project ID   | The unique identifier for the parent project.                                                                              |         |
| Project Name        | The display name shown for the project in Tableau.                                                                         |         |
| Content Permissions | Controls user permissions in a project. A nested project inherits the parent's permissions and this setting has no effect. |         |
| Description         | A description of the project.                                                                                              |         |
| Timeout             | The maximum amount of time the client will await a response.                                                               |         |
| Connection          |                                                                                                                            |         |

### Update User {#updateuser}

Update the information and metadata of an existing user.

| Input        | Comments                                                                      | Default |
| ------------ | ----------------------------------------------------------------------------- | ------- |
| User ID      | The unique identifier for the user.                                           |         |
| Username     | The username of the user. For Tableau Online, this value is an email address. |         |
| Site Role    | The role assigned to the user on the site.                                    |         |
| Auth Setting | The authentication method used to sign the user in.                           |         |
| Timeout      | The maximum amount of time the client will await a response.                  |         |
| Connection   |                                                                               |         |

### Update Webhook {#updatewebhook}

Update the properties of an existing webhook.

| Input                  | Comments                                                                                              | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                       |         |
| Webhook ID             | The unique identifier for the webhook.                                                                |         |
| Webhook Name           | A descriptive label to identify the webhook in Tableau.                                               |         |
| API Event Name         | The name of the Tableau event that triggers the webhook.                                              |         |
| Webhook URL            | The destination URL for the webhook. The destination URL must use HTTPS and have a valid certificate. |         |
| Webhook Enabled        | When true, the newly created webhook is enabled. When false, the webhook is disabled.                 | true    |
| Webhook Disable Reason | The reason a webhook is disabled.                                                                     |         |
| Timeout                | The maximum amount of time the client will await a response.                                          |         |
| API Version            | The version of the Tableau API to use.                                                                | 3.6     |

### Update Workbook {#updateworkbook}

Update the information and metadata of an existing workbook by ID.

| Input         | Comments                                                     | Default |
| ------------- | ------------------------------------------------------------ | ------- |
| Workbook ID   | The unique identifier for the workbook.                      |         |
| Workbook Name | The display name shown for the workbook in Tableau.          |         |
| Project ID    | The unique identifier for the project.                       |         |
| User ID       | The unique identifier for the user.                          |         |
| Show Tabs     | When true, the updated workbook shows views in tabs.         | false   |
| Timeout       | The maximum amount of time the client will await a response. |         |
| Connection    |                                                              |         |
