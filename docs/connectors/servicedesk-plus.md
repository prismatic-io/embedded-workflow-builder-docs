---
title: ServiceDesk Plus Connector
sidebar_label: ServiceDesk Plus
description: ServiceDesk Plus is a comprehensive service desk software that offers a suite of IT Service management, IT asset management, CBDM, and more.
---

![ServiceDesk Plus](./assets/servicedesk-plus.png#connector-icon)
ServiceDesk Plus is a comprehensive service desk software that offers a suite of IT Service management, IT asset management, CBDM, and more.

## Connections

### ServiceDesk Plus OAuth 2.0

This connection allows you to authenticate with ServiceDesk Plus using OAuth 2.0.

Self Client Applications are stand-alone applications that perform only back-end jobs (without any manual intervention) like data sync.

To register a new app as a Self Client Application for Configuration OAuth credential:

1. Navigate to [Zoho API Console](https://accounts.zoho.com/developerconsole) and select **GET STARTED.**
2. Find the Self Client Applications box and select **CREATE NOW.**
3. In the Generate Code tab enter the Scopes, Time Duration needed for the code, and a brief description and select CREATE
   1. Example scopes: SDPOnDemand.cmdb.READ,SDPOnDemand.assets.READ
4. When the Generated Code is provided, copy and/or download the code and enter in the connection configuration of the integration.
5. In the Client Secret tab, copy and enter the Client ID, and Client Secret into the connection configuration of the integration.

Additionally, Server Based Applications may be used for setting up applications running on a dedicated HTTP server.

To register a new app as a Server-based Application for configuring OAuth credentials:

1. Navigate to [Zoho API Console](https://accounts.zoho.com/developerconsole) and select **GET STARTED.**
2. Find the Server-based Applications box and select **CREATE NOW.**
3. Provide a Client Name, Homepage URL, and enter the Authorized Redirect URI as - `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Select **CREATE** and the Client ID and Client Secret credentials will be provided and can be entered into the connection configuration of the integration.

Please refer to the following [Client OAuth Setup Guide](https://www.zoho.com/accounts/protocol/oauth-setup.html) for further information on OAuth setup.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                           | Default                                                           |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for ServiceDesk Plus                                                                                                                                               | https://accounts.zoho.com/oauth/v2/auth?access_type=offline       |
| Scopes        | A comma-delimited set of one or more scopes to get the user's permission to access. Refer to https://www.manageengine.com/products/service-desk/sdpod-v3-api/getting-started/oauth-2.0.html#scopes | SDPOnDemand.assets.ALL SDPOnDemand.cmdb.ALL SDPOnDemand.setup.ALL |
| Client ID     |                                                                                                                                                                                                    |                                                                   |
| Client Secret |                                                                                                                                                                                                    |                                                                   |
| Data Center   |                                                                                                                                                                                                    |                                                                   |

## Actions

### Create Asset

Create a new asset

| Input                  | Comments                                                                  | Default                                                                           |
| ---------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Asset Name             | Unique name to identify the asset                                         |                                                                                   |
| State                  | Indicates the state of the asset. Remove the default value if not needed. | <code>{<br /> "name": "test-state",<br /> "id": "234567890123456"<br />}</code>   |
| Product                | Product of the asset. Remove the default value if not needed.             | <code>{<br /> "name": "test-product",<br /> "id": "234567890123456"<br />}</code> |
| Asset ID               | Unique identifier to identify the asset                                   |                                                                                   |
| Asset Tag              | Asset tag used to identify the asset                                      |                                                                                   |
| State History Comments | A text in a plain format. No rich text or new line characters allowed.    |                                                                                   |
| Bar Code               | Unique barcode used to identify the asset                                 |                                                                                   |
| Extra parameters       | Additional parameters to add to the request                               |                                                                                   |
| Connection             |                                                                           |                                                                                   |
| Debug Request          | Enabling this flag will log out the current request.                      | false                                                                             |

### Create Configuration Item

Create a new configuration item on the CMDB

| Input            | Comments                                               | Default                                                   |
| ---------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| CI Type API Name | Denotes the unique identifier used to identify the CI. |                                                           |
| Name             | Indicates the unique name used to identify the CI      |                                                           |
| Description      | Description of the CI                                  |                                                           |
| Attributes       | Other attributes to add to the payload                 | <code>{<br /> "txt_ip_address": "127.0.0.1"<br />}</code> |
| Connection       |                                                        |                                                           |
| Debug Request    | Enabling this flag will log out the current request.   | false                                                     |

### Create Problem

Create a new problem

| Input                 | Comments                                                                                                                                                                   | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                            |         |
| Problem Title         | Title of the problem.                                                                                                                                                      |         |
| Problem Description   | Description of the problem.                                                                                                                                                |         |
| Problem Reported Time | Indicates the reported time of the problem. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem.html for details.                         |         |
| Problem Due By Time   | Indicates the due by time of the problem. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem.html for details.                           |         |
| Problem Closed Time   | Indicates the closed time of the problem. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem.html for details.                           |         |
| Additional Fields     | Additional fields that might not be covered by the standard inputs. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem.html for details. |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                       | false   |

### Create Problem Note

Create a new problem note

| Input             | Comments                                                                                                                                                                                      | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                               |         |
| Problem ID        | ID of the problem.                                                                                                                                                                            |         |
| Note Description  | Contains description about the note.                                                                                                                                                          |         |
| Notify To         | Contains info on users or roles to be notified on add/edit operation of the note. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_note.html for details. |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_note.html for details.               |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                                                                          | false   |

### Create Problem Task

Create a problem task

| Input                    | Comments                                                                                                                                                                        | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               |                                                                                                                                                                                 |         |
| Problem ID               | ID of the problem.                                                                                                                                                              |         |
| Task Title               | Title of the task.                                                                                                                                                              |         |
| Task Description         | Contains description about the task.                                                                                                                                            |         |
| Task Type                | Used to categorize the tasks of similar cases. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_task.html for details.                      |         |
| Owner                    | The User assigned to the task. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_task.html for details.                                      |         |
| Estimated Effort Minutes | Estimated number of minutes to finish the task.                                                                                                                                 |         |
| Estimated Effort Hours   | Estimated number of hours to finish the task.                                                                                                                                   |         |
| Estimated Effort Days    | Estimated number of days to finish the task.                                                                                                                                    |         |
| Percentage Completion    | Indicates the progress of the task in percentage of completion.                                                                                                                 |         |
| Group                    | Indicates the assigned group of the task. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_task.html for details.                           |         |
| Additional Fields        | Additional fields that might not be covered by the standard inputs. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_task.html for details. |         |
| Debug Request            | Enabling this flag will log out the current request.                                                                                                                            | false   |

### Create Product

Create a new product

| Input         | Comments                                                             | Default                                                                                |
| ------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Product Type  | Product type of the product. Remove the default value if not needed. | <code>{<br /> "name": "test-product_type",<br /> "id": "234567890123456"<br />}</code> |
| Name          | Unique identifier to identify the resource                           |                                                                                        |
| ID            | Unique identifier to identify the resource                           |                                                                                        |
| Manufacturer  | Name to identify the product manufacturer.                           |                                                                                        |
| Is Laptop     | Boolean value indicating whether the product type is laptop or not.  |                                                                                        |
| Part No       | Part no of the productPart no of the product                         |                                                                                        |
| Attributes    | Other attributes to add to the payload                               |                                                                                        |
| Connection    |                                                                      |                                                                                        |
| Debug Request | Enabling this flag will log out the current request.                 | false                                                                                  |

### Create Product Type

Create a new product type

| Input         | Comments                                                              | Default                                                                     |
| ------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Name          | Unique identifier to identify the resource                            |                                                                             |
| Category      | Category of the product type. Remove the default value if not needed. | <code>{<br /> "name": "Non-IT",<br /> "id": "234567890123456"<br />}</code> |
| Asset Type    | Type of the product type. Remove the default value if not needed.     | <code>{<br /> "name": "Asset",<br /> "id": "234567890123456"<br />}</code>  |
| ID            | Unique identifier to identify the resource                            |                                                                             |
| Attributes    | Other attributes to add to the payload                                |                                                                             |
| Connection    |                                                                       |                                                                             |
| Debug Request | Enabling this flag will log out the current request.                  | false                                                                       |

### Create Request

Create a new request

| Input                     | Comments                                                                                                                                                                   | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                                                                                            |         |
| Request Subject           | Subject of this request.                                                                                                                                                   |         |
| Request Description       | Description of this request.                                                                                                                                               |         |
| Impact Details            | Description about the impact of this request.                                                                                                                              |         |
| Email IDs To Notify       | Email ids, which needs to be notified about the happenings of this request.                                                                                                |         |
| Delete Pre Template Tasks | Boolean value indicating whether the pre template tasks need to be deleted.                                                                                                | false   |
| Additional Fields         | Additional fields that might not be covered by the standard inputs. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/requests/request.html for details. |         |
| Debug Request             | Enabling this flag will log out the current request.                                                                                                                       | false   |

### Create Request Task

Create a new request task

| Input                               | Comments                                                                                                                                                                        | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                          |                                                                                                                                                                                 |         |
| Request ID                          | ID of the request.                                                                                                                                                              |         |
| Request Task Title                  | Title of the task.                                                                                                                                                              |         |
| Request Task Percentage Completion  | Indicates the progress of the task in percentage of completion.                                                                                                                 |         |
| Request Task Estimated Effort Hours | Estimated number of hours to finish the task.                                                                                                                                   |         |
| Request Task Description            | Contains description about the task.                                                                                                                                            |         |
| Request Task Owner                  | The User assigned to the task. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/requests/request_task.html for details.                                      |         |
| Request Task Additional Cost        | Cost spent other than the actual cost of the task.                                                                                                                              |         |
| Request Task Actual End Time        | Date and time at which the task actually got finished. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/requests/request_task.html for details.              |         |
| Request Task Actual Start Time      | Date and time at which the task actually got started. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/requests/request_task.html for details.               |         |
| Additional Fields                   | Additional fields that might not be covered by the standard inputs. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/requests/request_task.html for details. |         |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                            | false   |

### Delete Asset

Delete an existing asset

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Asset ID      | Unique identifier to identify the asset              |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Configuration Item

Delete an existing configuration item on the CMDB

| Input            | Comments                                               | Default |
| ---------------- | ------------------------------------------------------ | ------- |
| CI Type API Name | Denotes the unique identifier used to identify the CI. |         |
| CI IDs           | Unique identifier used to identify the CI.             |         |
| Connection       |                                                        |         |
| Debug Request    | Enabling this flag will log out the current request.   | false   |

### Delete Problem

Delete a problem by ID

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Connection           |                                                      |         |
| To Delete Problem ID | ID of the problem to be deleted.                     |         |
| Debug Request        | Enabling this flag will log out the current request. | false   |

### Delete Problem Note

Delete a problem note

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        |                                                      |         |
| Problem ID        | ID of the problem.                                   |         |
| To Delete Note ID | ID of the note to be deleted.                        |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Delete Problem Task

Delete a problem task

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        |                                                      |         |
| Problem ID        | ID of the problem.                                   |         |
| To Delete Task ID | ID of the task to be deleted.                        |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Delete Product

Delete a single product

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| ID            | Unique identifier to identify the resource           |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Product Type

Delete a single product type

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| ID            | Unique identifier to identify the resource           |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Request

Delete a request by ID

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Connection           |                                                      |         |
| To Delete Request ID | ID of the request to be deleted.                     |         |
| Debug Request        | Enabling this flag will log out the current request. | false   |

### Delete Request Task

Delete a request task by ID

| Input                     | Comments                                             | Default |
| ------------------------- | ---------------------------------------------------- | ------- |
| Connection                |                                                      |         |
| Request ID                | ID of the request.                                   |         |
| To Delete Request Task ID | ID of the task to be deleted.                        |         |
| Debug Request             | Enabling this flag will log out the current request. | false   |

### Get Asset

Retrieve a single asset

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Asset ID      | Unique identifier to identify the asset              |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Configuration Item

Retrieve a single configuration item on the CMDB

| Input            | Comments                                               | Default |
| ---------------- | ------------------------------------------------------ | ------- |
| CI Type API Name | Denotes the unique identifier used to identify the CI. |         |
| CI ID            | Denotes the unique identifier used to identify the CI. |         |
| Connection       |                                                        |         |
| Debug Request    | Enabling this flag will log out the current request.   | false   |

### Get Problem

Get a problem by ID

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        |                                                      |         |
| To Get Problem ID | ID of the problem to be retrieved.                   |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Get Problem Note

Get a problem note

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Problem ID     | ID of the problem.                                   |         |
| To Get Note ID | ID of the note to be retrieved.                      |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Problem Task

Get a problem task

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Problem ID     | ID of the problem.                                   |         |
| To Get Task ID | ID of the task to be retrieved.                      |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Product

Retrieve a single product

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| ID            | Unique identifier to identify the resource           |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Product Type

Retrieve a single product type

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| ID            | Unique identifier to identify the resource           |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Request

Get a request by ID

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        |                                                      |         |
| To Get Request ID | ID of the request to be retrieved.                   |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Get Request Task

Get a request task by ID

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| Connection             |                                                      |         |
| Request ID             | ID of the request.                                   |         |
| To Get Request Task ID | ID of the task to be retrieved.                      |         |
| Debug Request          | Enabling this flag will log out the current request. | false   |

### List Assets

Retrieve a list of assets

| Input                     | Comments                                                                                                 | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Conditions Criteria       | Conditions are the operators for criteria construction. Select the condition to be applied to the field. |         |
| Conditions Criteria Value | The value of the field to be compared.                                                                   |         |
| Row Count                 | Number of rows to be returned                                                                            | 100     |
| Page                      | Page number to be returned                                                                               | 1       |
| Fetch All                 | Fetch all the data. If true, it will ignore Row Count and Page inputs.                                   | true    |
| Debug Request             | Enabling this flag will log out the current request.                                                     | false   |
| Connection                |                                                                                                          |         |

### List Configuration Items

Retrieve a list of all configuration items on the CMDB

| Input                     | Comments                                                                                                 | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| CI Type API Name          | Denotes the unique identifier used to identify the CI.                                                   |         |
| Conditions Criteria       | Conditions are the operators for criteria construction. Select the condition to be applied to the field. |         |
| Conditions Criteria Value | The value of the field to be compared.                                                                   |         |
| Row Count                 | Number of rows to be returned                                                                            | 100     |
| Page                      | Page number to be returned                                                                               | 1       |
| Fetch All                 | Fetch all the data. If true, it will ignore Row Count and Page inputs.                                   | true    |
| Debug Request             | Enabling this flag will log out the current request.                                                     | false   |
| Connection                |                                                                                                          |         |

### List Problem Notes

Retrieve a list of problem notes

| Input                     | Comments                                                                                                 | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                          |         |
| Problem ID                | ID of the problem.                                                                                       |         |
| Fetch All                 | Fetch all the data. If true, it will ignore Row Count and Page inputs.                                   | true    |
| Page                      | Page number to be returned                                                                               | 1       |
| Row Count                 | Number of rows to be returned                                                                            | 100     |
| Conditions Criteria       | Conditions are the operators for criteria construction. Select the condition to be applied to the field. |         |
| Conditions Criteria Value | The value of the field to be compared.                                                                   |         |
| Debug Request             | Enabling this flag will log out the current request.                                                     | false   |

### List Problems

Retrieve a list of problems

| Input                     | Comments                                                                                                 | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                          |         |
| Fetch All                 | Fetch all the data. If true, it will ignore Row Count and Page inputs.                                   | true    |
| Row Count                 | Number of rows to be returned                                                                            | 100     |
| Page                      | Page number to be returned                                                                               | 1       |
| Conditions Criteria       | Conditions are the operators for criteria construction. Select the condition to be applied to the field. |         |
| Conditions Criteria Value | The value of the field to be compared.                                                                   |         |
| Debug Request             | Enabling this flag will log out the current request.                                                     | false   |

### List Problem Tasks

Retrieve a list of problem tasks

| Input                     | Comments                                                                                                 | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                          |         |
| Problem ID                | ID of the problem.                                                                                       |         |
| Fetch All                 | Fetch all the data. If true, it will ignore Row Count and Page inputs.                                   | true    |
| Page                      | Page number to be returned                                                                               | 1       |
| Row Count                 | Number of rows to be returned                                                                            | 100     |
| Conditions Criteria       | Conditions are the operators for criteria construction. Select the condition to be applied to the field. |         |
| Conditions Criteria Value | The value of the field to be compared.                                                                   |         |
| Debug Request             | Enabling this flag will log out the current request.                                                     | false   |

### List Products

Retrieve a list of products

| Input                     | Comments                                                                                                 | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Conditions Criteria       | Conditions are the operators for criteria construction. Select the condition to be applied to the field. |         |
| Conditions Criteria Value | The value of the field to be compared.                                                                   |         |
| Row Count                 | Number of rows to be returned                                                                            | 100     |
| Page                      | Page number to be returned                                                                               | 1       |
| Fetch All                 | Fetch all the data. If true, it will ignore Row Count and Page inputs.                                   | true    |
| Debug Request             | Enabling this flag will log out the current request.                                                     | false   |
| Connection                |                                                                                                          |         |

### List Product Types

Retrieve a list of product types

| Input                     | Comments                                                                                                 | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Conditions Criteria       | Conditions are the operators for criteria construction. Select the condition to be applied to the field. |         |
| Conditions Criteria Value | The value of the field to be compared.                                                                   |         |
| Row Count                 | Number of rows to be returned                                                                            | 100     |
| Page                      | Page number to be returned                                                                               | 1       |
| Fetch All                 | Fetch all the data. If true, it will ignore Row Count and Page inputs.                                   | true    |
| Debug Request             | Enabling this flag will log out the current request.                                                     | false   |
| Connection                |                                                                                                          |         |

### List Requests

Retrieve a list of requests

| Input                     | Comments                                                                                                 | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                          |         |
| Fetch All                 | Fetch all the data. If true, it will ignore Row Count and Page inputs.                                   | true    |
| Row Count                 | Number of rows to be returned                                                                            | 100     |
| Page                      | Page number to be returned                                                                               | 1       |
| Conditions Criteria       | Conditions are the operators for criteria construction. Select the condition to be applied to the field. |         |
| Conditions Criteria Value | The value of the field to be compared.                                                                   |         |
| Debug Request             | Enabling this flag will log out the current request.                                                     | false   |

### List Request Tasks

Retrieve a list of request tasks

| Input                     | Comments                                                                                                 | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                          |         |
| Request ID                | ID of the request.                                                                                       |         |
| Fetch All                 | Fetch all the data. If true, it will ignore Row Count and Page inputs.                                   | true    |
| Row Count                 | Number of rows to be returned                                                                            | 100     |
| Page                      | Page number to be returned                                                                               | 1       |
| Conditions Criteria       | Conditions are the operators for criteria construction. Select the condition to be applied to the field. |         |
| Conditions Criteria Value | The value of the field to be compared.                                                                   |         |
| Debug Request             | Enabling this flag will log out the current request.                                                     | false   |

### Raw Request

Send raw HTTP request to ServiceDesk Plus

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
| URL                     | This is the URL to call.                                                                                                                                                                         |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Debug Request           | Enable this to log the request and response                                                                                                                                                      | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Update Asset

Edit an existing asset

| Input                  | Comments                                                                  | Default                                                                           |
| ---------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Asset ID               | Unique identifier to identify the asset                                   |                                                                                   |
| Asset Name             | Unique name to identify the asset                                         |                                                                                   |
| State                  | Indicates the state of the asset. Remove the default value if not needed. | <code>{<br /> "name": "test-state",<br /> "id": "234567890123456"<br />}</code>   |
| Product                | Product of the asset. Remove the default value if not needed.             | <code>{<br /> "name": "test-product",<br /> "id": "234567890123456"<br />}</code> |
| Asset Tag              | Asset tag used to identify the asset                                      |                                                                                   |
| State History Comments | A text in a plain format. No rich text or new line characters allowed.    |                                                                                   |
| Bar Code               | Unique barcode used to identify the asset                                 |                                                                                   |
| Attributes             | Other attributes to add to the payload                                    |                                                                                   |
| Connection             |                                                                           |                                                                                   |
| Debug Request          | Enabling this flag will log out the current request.                      | false                                                                             |

### Update Configuration Item

Edit an existing configuration item on the CMDB

| Input            | Comments                                               | Default                                                   |
| ---------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| CI Type API Name | Denotes the unique identifier used to identify the CI. |                                                           |
| CI ID            | Denotes the unique identifier used to identify the CI. |                                                           |
| Description      | Description of the CI                                  |                                                           |
| Attributes       | Other attributes to add to the payload                 | <code>{<br /> "txt_ip_address": "127.0.0.1"<br />}</code> |
| Connection       |                                                        |                                                           |
| Debug Request    | Enabling this flag will log out the current request.   | false                                                     |

### Update Problem

Update an existing problem

| Input                 | Comments                                                                                                                                                                   | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                            |         |
| To Update Problem ID  | ID of the problem to be updated.                                                                                                                                           |         |
| Problem Title         | Title of the problem.                                                                                                                                                      |         |
| Problem Description   | Description of the problem.                                                                                                                                                |         |
| Problem Reported Time | Indicates the reported time of the problem. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem.html for details.                         |         |
| Problem Due By Time   | Indicates the due by time of the problem. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem.html for details.                           |         |
| Problem Closed Time   | Indicates the closed time of the problem. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem.html for details.                           |         |
| Additional Fields     | Additional fields that might not be covered by the standard inputs. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem.html for details. |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                       | false   |

### Update Problem Note

Update a problem note

| Input             | Comments                                                                                                                                                                                      | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                               |         |
| Problem ID        | ID of the problem.                                                                                                                                                                            |         |
| To Update Note ID | ID of the note to be updated.                                                                                                                                                                 |         |
| Note Description  | Contains description about the note.                                                                                                                                                          |         |
| Notify To         | Contains info on users or roles to be notified on add/edit operation of the note. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_note.html for details. |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_note.html for details.               |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                                                                          | false   |

### Update Problem Task

Update a problem task

| Input                    | Comments                                                                                                                                                                        | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               |                                                                                                                                                                                 |         |
| Problem ID               | ID of the problem.                                                                                                                                                              |         |
| To Update Task ID        | ID of the task to be updated.                                                                                                                                                   |         |
| Task Title               | Title of the task.                                                                                                                                                              |         |
| Task Description         | Contains description about the task.                                                                                                                                            |         |
| Task Type                | Used to categorize the tasks of similar cases. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_task.html for details.                      |         |
| Owner                    | The User assigned to the task. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_task.html for details.                                      |         |
| Estimated Effort Minutes | Estimated number of minutes to finish the task.                                                                                                                                 |         |
| Estimated Effort Hours   | Estimated number of hours to finish the task.                                                                                                                                   |         |
| Estimated Effort Days    | Estimated number of days to finish the task.                                                                                                                                    |         |
| Percentage Completion    | Indicates the progress of the task in percentage of completion.                                                                                                                 |         |
| Group                    | Indicates the assigned group of the task. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_task.html for details.                           |         |
| Additional Fields        | Additional fields that might not be covered by the standard inputs. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/problems/problem_task.html for details. |         |
| Debug Request            | Enabling this flag will log out the current request.                                                                                                                            | false   |

### Update Product

Updates an existing product

| Input         | Comments                                                             | Default                                                                                |
| ------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| ID            | Unique identifier to identify the resource                           |                                                                                        |
| Product Type  | Product type of the product. Remove the default value if not needed. | <code>{<br /> "name": "test-product_type",<br /> "id": "234567890123456"<br />}</code> |
| Name          | Unique identifier to identify the resource                           |                                                                                        |
| Manufacturer  | Name to identify the product manufacturer.                           |                                                                                        |
| Is Laptop     | Boolean value indicating whether the product type is laptop or not.  |                                                                                        |
| Part No       | Part no of the productPart no of the product                         |                                                                                        |
| Attributes    | Other attributes to add to the payload                               |                                                                                        |
| Connection    |                                                                      |                                                                                        |
| Debug Request | Enabling this flag will log out the current request.                 | false                                                                                  |

### Update Product Type

Updates an existing product type

| Input         | Comments                                                              | Default                                                                     |
| ------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| ID            | Unique identifier to identify the resource                            |                                                                             |
| Name          | Unique identifier to identify the resource                            |                                                                             |
| Category      | Category of the product type. Remove the default value if not needed. | <code>{<br /> "name": "Non-IT",<br /> "id": "234567890123456"<br />}</code> |
| Asset Type    | Type of the product type. Remove the default value if not needed.     | <code>{<br /> "name": "Asset",<br /> "id": "234567890123456"<br />}</code>  |
| Attributes    | Other attributes to add to the payload                                |                                                                             |
| Connection    |                                                                       |                                                                             |
| Debug Request | Enabling this flag will log out the current request.                  | false                                                                       |

### Update Request

Update a request

| Input                     | Comments                                                                                                                                                                   | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                                                                                            |         |
| To Update Request ID      | ID of the request to be updated.                                                                                                                                           |         |
| Request Subject           | Subject of this request.                                                                                                                                                   |         |
| Request Description       | Description of this request.                                                                                                                                               |         |
| Impact Details            | Description about the impact of this request.                                                                                                                              |         |
| Email IDs To Notify       | Email ids, which needs to be notified about the happenings of this request.                                                                                                |         |
| Delete Pre Template Tasks | Boolean value indicating whether the pre template tasks need to be deleted.                                                                                                | false   |
| Additional Fields         | Additional fields that might not be covered by the standard inputs. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/requests/request.html for details. |         |
| Debug Request             | Enabling this flag will log out the current request.                                                                                                                       | false   |

### Update Request Task

Update a request task

| Input                               | Comments                                                                                                                                                                        | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                          |                                                                                                                                                                                 |         |
| Request ID                          | ID of the request.                                                                                                                                                              |         |
| To Update Request Task ID           | ID of the task to be updated.                                                                                                                                                   |         |
| Request Task Title                  | Title of the task.                                                                                                                                                              |         |
| Request Task Percentage Completion  | Indicates the progress of the task in percentage of completion.                                                                                                                 |         |
| Request Task Estimated Effort Hours | Estimated number of hours to finish the task.                                                                                                                                   |         |
| Request Task Description            | Contains description about the task.                                                                                                                                            |         |
| Request Task Owner                  | The User assigned to the task. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/requests/request_task.html for details.                                      |         |
| Request Task Additional Cost        | Cost spent other than the actual cost of the task.                                                                                                                              |         |
| Request Task Actual End Time        | Date and time at which the task actually got finished. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/requests/request_task.html for details.              |         |
| Request Task Actual Start Time      | Date and time at which the task actually got started. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/requests/request_task.html for details.               |         |
| Additional Fields                   | Additional fields that might not be covered by the standard inputs. See https://www.manageengine.com/products/service-desk/sdpod-v3-api/requests/request_task.html for details. |         |
| Debug Request                       | Enabling this flag will log out the current request.                                                                                                                            | false   |
