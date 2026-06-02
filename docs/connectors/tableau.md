---
title: Tableau Connector
sidebar_label: Tableau
description: Manage projects and workbooks in your Tableau site
---

![Tableau](./assets/tableau.png#connector-icon)
Manage projects and workbooks in your Tableau site

## Connections

### Personal Access Token {#privatekey}

Personal Access Token connection for Tableau

| Input        | Comments                                                                                                           | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Token Secret | Provide a string value for the Tableau Token. This value can be created from your Tableau account.                 |         |
| Token Name   | Provide a string value for the name of the Tableau Token.                                                          |         |
| Host Name    | Provide a string value for the host name of the Tableau server, without the https://                               |         |
| Site ID      | The ID of your Tableau site (MarketingTeam part of https://10ay.online.tableau.com/#/site/MarketingTeam/workbooks) |         |

## Triggers

### Scheduled Event {#tableautrigger}

Receive data from scheduled events in real time with webhook subscriptions.

| Input          | Comments                                                     | Default |
| -------------- | ------------------------------------------------------------ | ------- |
| Connection     |                                                              |         |
| API Event Name | The events to subscribe to.                                  |         |
| API Version    | The version of the Tableau API to use                        | 3.6     |
| Timeout        | The maximum amount of time the client will await a response. |         |

## Actions

### Create Project {#createproject}

Create a new project inside your Tableau site

| Input               | Comments                                                                                                                                                                         | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Parent Project Id   | Provide a string value for the id of the parent project.                                                                                                                         |         |
| Project Name        | Provide a string value for the name of the project.                                                                                                                              |         |
| Content Permissions | This value controls user permissions in a project. However, if the project is nested within a project, it will inherit those permissions and these settings will have no effect. |         |
| Description         | Provide a string value for the description of the project.                                                                                                                       |         |
| Timeout             | The maximum amount of time the client will await a response.                                                                                                                     |         |
| Connection          |                                                                                                                                                                                  |         |

### Create User {#createuser}

Create a new user in your tableau site

| Input        | Comments                                                                                                 | Default |
| ------------ | -------------------------------------------------------------------------------------------------------- | ------- |
| Username     | Provide a string value for the username of the user. For Tableau Online, this value is an email address. |         |
| Site Role    | Provide a value for the role of the user.                                                                |         |
| Auth Setting | Provide a string value for the username of the user.                                                     |         |
| Timeout      | The maximum amount of time the client will await a response.                                             |         |
| Connection   |                                                                                                          |         |

### Create Webhook {#createwebhook}

Creates a new webhook for a site.

| Input           | Comments                                                                                                     | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                              |         |
| Webhook Name    | A name for the webhook.                                                                                      |         |
| API Event Name  | The name of the Tableau event that triggers your webhook                                                     |         |
| Webhook URL     | The destination URL for the webhook. The webhook destination URL must be https and have a valid certificate. |         |
| Webhook Enabled | If true (default), the newly created webhook is enabled. If false then the webhook will be disabled.         | true    |
| Timeout         | The maximum amount of time the client will await a response.                                                 |         |
| API Version     | The version of the Tableau API to use                                                                        | 3.6     |

### Delete Projects {#deleteprojects}

Delete an existing project by Id

| Input      | Comments                                                     | Default |
| ---------- | ------------------------------------------------------------ | ------- |
| Project Id | Provide a string value for the Id of your Tableau Project.   |         |
| Timeout    | The maximum amount of time the client will await a response. |         |
| Connection |                                                              |         |

### Delete User {#deleteuser}

Delete an existing user by Id

| Input      | Comments                                                     | Default |
| ---------- | ------------------------------------------------------------ | ------- |
| UserId     | Provide a value for the unique identifier of the user.       |         |
| Timeout    | The maximum amount of time the client will await a response. |         |
| Connection |                                                              |         |

### Delete Webhook {#deletewebhook}

Deletes the specified webhook.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Connection  |                                                              |         |
| Webhook Id  | The ID of the webhook.                                       |         |
| Timeout     | The maximum amount of time the client will await a response. |         |
| API Version | The version of the Tableau API to use                        | 3.6     |

### Delete Workbooks {#deleteworkbook}

Delete an existing workbook by Id

| Input       | Comments                                                          | Default |
| ----------- | ----------------------------------------------------------------- | ------- |
| Workbook Id | Provide a string value for the unique identifier of the workbook. |         |
| Timeout     | The maximum amount of time the client will await a response.      |         |
| Connection  |                                                                   |         |

### Get Project {#getproject}

Get an existing project

| Input        | Comments                                                     | Default |
| ------------ | ------------------------------------------------------------ | ------- |
| Project Name | Provide a string value for the name of the project.          |         |
| Timeout      | The maximum amount of time the client will await a response. |         |
| Connection   |                                                              |         |

### Get User {#getuser}

Get an existing user by Id

| Input      | Comments                                                     | Default |
| ---------- | ------------------------------------------------------------ | ------- |
| UserId     | Provide a value for the unique identifier of the user.       |         |
| Timeout    | The maximum amount of time the client will await a response. |         |
| Connection |                                                              |         |

### Get Webhook {#getwebhook}

Returns information about the specified webhook.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Connection  |                                                              |         |
| Webhook Id  | The ID of the webhook.                                       |         |
| Timeout     | The maximum amount of time the client will await a response. |         |
| API Version | The version of the Tableau API to use                        | 3.6     |

### Get Workbooks {#getworkbook}

Get an existing workbook by Id

| Input       | Comments                                                          | Default |
| ----------- | ----------------------------------------------------------------- | ------- |
| Workbook Id | Provide a string value for the unique identifier of the workbook. |         |
| Timeout     | The maximum amount of time the client will await a response.      |         |
| Connection  |                                                                   |         |

### List Connections {#listconnections}

Retrieve a list of connections connected to your Tableau site

| Input       | Comments                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------- | ------- |
| Workbook Id | Provide a string value for the unique identifier of the workbook.                 |         |
| Timeout     | The maximum amount of time the client will await a response.                      |         |
| Page Size   | Provide an integer value for the maximum amount of results that will be returned. |         |
| Page Number | Provide an integer value for the page offset for the given object's results.      |         |
| Connection  |                                                                                   |         |

### List Projects {#listprojects}

Retrieve a list of projects connected to your Tableau site

| Input       | Comments                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------- | ------- |
| Timeout     | The maximum amount of time the client will await a response.                      |         |
| Page Size   | Provide an integer value for the maximum amount of results that will be returned. |         |
| Page Number | Provide an integer value for the page offset for the given object's results.      |         |
| Connection  |                                                                                   |         |

### List users {#listusers}

Retrieve a list of users connected to your Tableau site

| Input       | Comments                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------- | ------- |
| Timeout     | The maximum amount of time the client will await a response.                      |         |
| Page Size   | Provide an integer value for the maximum amount of results that will be returned. |         |
| Page Number | Provide an integer value for the page offset for the given object's results.      |         |
| Connection  |                                                                                   |         |

### List Webhooks {#listwebhooks}

Returns a list of all the webhooks on the specified site.

| Input       | Comments                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------- | ------- |
| Timeout     | The maximum amount of time the client will await a response.                      |         |
| Page Size   | Provide an integer value for the maximum amount of results that will be returned. |         |
| Page Number | Provide an integer value for the page offset for the given object's results.      |         |
| Connection  |                                                                                   |         |
| API Version | The version of the Tableau API to use                                             | 3.6     |

### List Workbooks {#listworkbooks}

Retrieve a list of workbooks connected to your Tableau site

| Input       | Comments                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------- | ------- |
| Timeout     | The maximum amount of time the client will await a response.                      |         |
| Page Size   | Provide an integer value for the maximum amount of results that will be returned. |         |
| Page Number | Provide an integer value for the page offset for the given object's results.      |         |
| Connection  |                                                                                   |         |

### Publish Workbook {#publishworkbook}

Publishes a workbook on the specified site.

| Input                  | Comments                                                                                                                                                                                                                                                                                           | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timeout                | The maximum amount of time the client will await a response.                                                                                                                                                                                                                                       |         |
| Connection             |                                                                                                                                                                                                                                                                                                    |         |
| Upload Session Id      | If you are calling this method to commit a file that was uploaded in parts, this value contains the upload session ID that was generated by a call to Initiate File Upload.                                                                                                                        |         |
| Workbook Type          | twb or twbx to indicate whether you have uploaded a workbook file (twb) or a packaged workbook file (twbx).                                                                                                                                                                                        |         |
| Overwrite              | True to overwrite a workbook that has the same name, or false to fail if the specified workbook already exists.                                                                                                                                                                                    | false   |
| As Job                 | If false, the workbook publishing process runs as a synchronous process. If a workbook is very large, the process might time out before it finishes. If you set this value to true, the process runs asynchronously, and a job will start to perform the publishing process and return the job ID. | false   |
| Skip Connection Check  | If true, then the Tableau server will not check if a non-published connection of a workbook is reachable.                                                                                                                                                                                          | false   |
| Workbook XML           |                                                                                                                                                                                                                                                                                                    |         |
| Workbook File Contents | The twbx file to upload as binary data.                                                                                                                                                                                                                                                            |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Tableau

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/projects); the base URL is already included (https://{inputHostName}/api/{inputApiVersion}/sites/{siteId}). For example, to connect to https://{inputHostName}/api/{inputApiVersion}/sites/{siteId}/projects, enter only /projects in this field. Note: {inputHostName} is derived from the Host Name input in the connection configuration, {inputApiVersion} is based on the API Version input (default is 3.3), and {siteId} is automatically appended. |         |
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
| API Version             | The version of the Tableau API to use                                                                                                                                                                                                                                                                                                                                                                                                                                            | 3.6     |

### Search Connections {#searchconnections}

Search for a specific Connection in a Workbook

| Input        | Comments                                                                          | Default |
| ------------ | --------------------------------------------------------------------------------- | ------- |
| Workbook Id  | Provide a string value for the unique identifier of the workbook.                 |         |
| Search       | Provide a string value to search on.                                              |         |
| Search Field |                                                                                   |         |
| Timeout      | The maximum amount of time the client will await a response.                      |         |
| Connection   |                                                                                   |         |
| Page Number  | Provide an integer value for the page offset for the given object's results.      |         |
| Page Size    | Provide an integer value for the maximum amount of results that will be returned. |         |

### Search Projects {#searchprojects}

Search for a specific project by a string of text

| Input        | Comments                                                                          | Default |
| ------------ | --------------------------------------------------------------------------------- | ------- |
| Search       | Provide a string value to search on.                                              |         |
| Search Field | The field to search. Dates should follow the ISO format: 2016-05-04T21:24:49Z     |         |
| Timeout      | The maximum amount of time the client will await a response.                      |         |
| Connection   |                                                                                   |         |
| Page Number  | Provide an integer value for the page offset for the given object's results.      |         |
| Page Size    | Provide an integer value for the maximum amount of results that will be returned. |         |

### Search Users {#searchusers}

Search for a specific User by a string of text

| Input        | Comments                                                                          | Default |
| ------------ | --------------------------------------------------------------------------------- | ------- |
| Search Field | The field to search. Dates should follow the ISO format: 2016-05-04T21:24:49Z     |         |
| Search       | Provide a string value to search on.                                              |         |
| Timeout      | The maximum amount of time the client will await a response.                      |         |
| Connection   |                                                                                   |         |
| Page Number  | Provide an integer value for the page offset for the given object's results.      |         |
| Page Size    | Provide an integer value for the maximum amount of results that will be returned. |         |

### Search Workbooks {#searchworkbooks}

Search for a specific Workbook by a string of text

| Input           | Comments                                                                          | Default |
| --------------- | --------------------------------------------------------------------------------- | ------- |
| Search Field    | The field to search                                                               |         |
| Filter Operator | The operator to use in searching                                                  |         |
| Search          | Provide a string value to search on.                                              |         |
| Timeout         | The maximum amount of time the client will await a response.                      |         |
| Connection      |                                                                                   |         |
| Page Number     | Provide an integer value for the page offset for the given object's results.      |         |
| Page Size       | Provide an integer value for the maximum amount of results that will be returned. |         |

### Test Webhook {#testwebhook}

Tests the specified webhook. Sends an empty payload to the configured destination URL of the webhook and returns the response from the server.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Connection  |                                                              |         |
| Webhook Id  | The ID of the webhook.                                       |         |
| Timeout     | The maximum amount of time the client will await a response. |         |
| API Version | The version of the Tableau API to use                        | 3.6     |

### Update Connection {#updateconnection}

Update the information and metadata of an existing connection by Id

| Input                 | Comments                                                                                    | Default |
| --------------------- | ------------------------------------------------------------------------------------------- | ------- |
| Workbook Id           | Provide a string value for the unique identifier of the workbook.                           |         |
| Connection Id         | Provide a value for the unique identifier of the connection.                                |         |
| Server Address        | Provide a string value for the address of the server you want to connect.                   |         |
| Server Port           | Provide a string value for the port of the server you want to connect.                      |         |
| Connection Username   | Provide a string value for the username used to authenticate the connection.                |         |
| Connection Password   | Provide a value for the password used to authenticate the connection.                       |         |
| Embed Password        | Enable this flag to embed the password for the connection.                                  | false   |
| Query Tagging Enabled | Associates a specific server log query event with the Tableau resource that made the query. | false   |
| Timeout               | The maximum amount of time the client will await a response.                                |         |
| Connection            |                                                                                             |         |

### Update Project {#updateproject}

Update the contents and metadata of an existing project by Id

| Input               | Comments                                                                                                                                                                         | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Project Id          | Provide a string value for the Id of your Tableau Project.                                                                                                                       |         |
| Parent Project Id   | Provide a string value for the id of the parent project.                                                                                                                         |         |
| Project Name        | Provide a string value for the name of the project.                                                                                                                              |         |
| Content Permissions | This value controls user permissions in a project. However, if the project is nested within a project, it will inherit those permissions and these settings will have no effect. |         |
| Description         | Provide a string value for the description of the project.                                                                                                                       |         |
| Timeout             | The maximum amount of time the client will await a response.                                                                                                                     |         |
| Connection          |                                                                                                                                                                                  |         |

### Update User {#updateuser}

Update the information and metadata of an existing user

| Input        | Comments                                                                                                 | Default |
| ------------ | -------------------------------------------------------------------------------------------------------- | ------- |
| UserId       | Provide a value for the unique identifier of the user.                                                   |         |
| Username     | Provide a string value for the username of the user. For Tableau Online, this value is an email address. |         |
| Site Role    | Provide a value for the role of the user.                                                                |         |
| Auth Setting | Provide a string value for the username of the user.                                                     |         |
| Timeout      | The maximum amount of time the client will await a response.                                             |         |
| Connection   |                                                                                                          |         |

### Update Webhook {#updatewebhook}

Modify the properties of an existing webhook.

| Input                  | Comments                                                                                                     | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                                              |         |
| Webhook Id             | The ID of the webhook.                                                                                       |         |
| Webhook Name           | A name for the webhook.                                                                                      |         |
| API Event Name         | The name of the Tableau event that triggers your webhook                                                     |         |
| Webhook URL            | The destination URL for the webhook. The webhook destination URL must be https and have a valid certificate. |         |
| Webhook Enabled        | If true (default), the newly created webhook is enabled. If false then the webhook will be disabled.         | true    |
| Webhook Disable Reason | The reason a webhook is disabled.                                                                            |         |
| Timeout                | The maximum amount of time the client will await a response.                                                 |         |
| API Version            | The version of the Tableau API to use                                                                        | 3.6     |

### Update Workbook {#updateworkbook}

Update the information and metadata of an existing workbook by Id

| Input         | Comments                                                          | Default |
| ------------- | ----------------------------------------------------------------- | ------- |
| Workbook Id   | Provide a string value for the unique identifier of the workbook. |         |
| Workbook Name | Provide a string value for the name of the workbook.              |         |
| Project Id    | Provide a string value for the Id of your Tableau Project.        |         |
| UserId        | Provide a value for the unique identifier of the user.            |         |
| Show Tabs     | Specify true to have the updated workbook show views in tabs.     | false   |
| Timeout       | The maximum amount of time the client will await a response.      |         |
| Connection    |                                                                   |         |
