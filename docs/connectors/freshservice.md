---
title: Freshservice Connector
sidebar_label: Freshservice
description: Use the Freshservice component to manage tickets, problems, agents, and more.
---

![Freshservice](./assets/freshservice.png#connector-icon)
**Freshservice** is a cloud based IT service management software that streamlines IT operations, automates workflows, and improves service delivery for organizations.

Use the component to manage tickets, problems, agents, and more.

## API Documentation:

The component was built using the [Freshservice v2.0 API Reference](https://api.freshservice.com/#intro).

## Connections

### API Key {#freshservice-api-key-connection}

Connect to Freshservice using an API key.

1. Login to your Support Portal
2. Click on your profile picture on the top right corner of your portal
3. Go to Profile settings Page
4. Your API key will be available below the change password section to your right

| Input               | Comments                                                                                                                                         | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Freshservice Domain | Add only the domain name of your Freshservice account. For example, if your Freshservice URL is https://example.freshservice.com, enter example. |         |
| API Key             | Your Freshservice API key.                                                                                                                       |         |

## Actions

### Create Agent {#createagent}

Create a new agent.

| Input                                           | Comments                                                                                                                                                                                              | Default |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                                      |                                                                                                                                                                                                       |         |
| First Name                                      | First name of the agent.                                                                                                                                                                              |         |
| Email                                           | Email address of the agent.                                                                                                                                                                           |         |
| Roles                                           | Roles of the agent. An array of hashes. See [Freshservice API documentation](https://api.freshservice.com/#agent_attributes) for more information.                                                    |         |
| Last Name                                       | Last name of the agent.                                                                                                                                                                               |         |
| Address                                         | Address of the agent.                                                                                                                                                                                 |         |
| Occasional                                      | True if the agent is an occasional agent, and false if full-time agent.                                                                                                                               | false   |
| Job Title                                       | Job title of the agent.                                                                                                                                                                               |         |
| Work Phone Number                               | Work phone number of the agent.                                                                                                                                                                       |         |
| Mobile Phone Number                             | Mobile phone number of the agent.                                                                                                                                                                     |         |
| Department IDs                                  | Unique IDs of the departments associated with the agent.                                                                                                                                              |         |
| Can See All Tickets From Associated Departments | Set to true if the agent must be allowed to view tickets filed by other members of the department, and false otherwise.                                                                               | false   |
| Additional Fields                               | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#agent_attributes) for more information. |         |

### Create Asset {#createasset}

Create a new asset.

| Input             | Comments                                                                                                                                                                                              | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                       |         |
| Name              | Name of the asset.                                                                                                                                                                                    |         |
| Asset Type ID     | ID of the asset type.                                                                                                                                                                                 |         |
| Asset Tag         | Asset tag of the asset.                                                                                                                                                                               |         |
| Impact            | Impact of the asset.                                                                                                                                                                                  |         |
| Usage Type        | Usage type of the asset.                                                                                                                                                                              |         |
| Description       | Description of the asset.                                                                                                                                                                             |         |
| Location ID       | ID of the associated location.                                                                                                                                                                        |         |
| Agent ID          | ID of the associated agent (Managed By).                                                                                                                                                              |         |
| Department ID     | ID of the associated department.                                                                                                                                                                      |         |
| Group ID          | ID of the associated agent group (Managed By Group).                                                                                                                                                  |         |
| Workspace ID      | ID of the workspace that the asset belongs to. If not provided, the ID of the primary workspace will be defaulted. Applicable only to accounts on the Employee Support Mode.                          |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#asset_attributes) for more information. |         |

### Create Problem {#createproblem}

Create a new problem.

| Input             | Comments                                                                                                                                                                                                | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                         |         |
| Subject           | Subject of the Problem.                                                                                                                                                                                 |         |
| Email             | Email of the initiator of the problem.                                                                                                                                                                  |         |
| Description       | HTML content of the problem.                                                                                                                                                                            |         |
| Due By            | Timestamp at which Problem due ends.                                                                                                                                                                    |         |
| Priority          | Priority of the Problem.                                                                                                                                                                                |         |
| Status            | Status identifier of the Problem.                                                                                                                                                                       |         |
| Impact            | Impact of the Problem.                                                                                                                                                                                  |         |
| Category          | Category of the Problem.                                                                                                                                                                                |         |
| Sub Category      | Sub-category of the Problem.                                                                                                                                                                            |         |
| Item Category     | Item of the Problem.                                                                                                                                                                                    |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#problem_attributes) for more information. |         |

### Create Requester {#createrequester}

Create a new requester.

| Input                | Comments                                                                                                                                                                                                  | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                           |         |
| First Name           | First name of the requester.                                                                                                                                                                              |         |
| Primary Email        | Primary email address of the requester.                                                                                                                                                                   |         |
| Last Name            | Last name of the requester.                                                                                                                                                                               |         |
| Job Title            | Job title of the requester.                                                                                                                                                                               |         |
| Work Phone Number    | Work phone number of the requester.                                                                                                                                                                       |         |
| Mobile Phone Number  | Mobile phone number of the requester.                                                                                                                                                                     |         |
| Reporting Manager ID | User ID of the requester’s reporting manager.                                                                                                                                                             |         |
| Secondary Emails     | Additional/secondary emails associated with the requester. Array of email addresses.                                                                                                                      |         |
| Department IDs       | Unique IDs of the departments associated with the requester. Array of ID numbers.                                                                                                                         |         |
| Address              | Address of the requester.                                                                                                                                                                                 |         |
| Additional Fields    | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#requester_attributes) for more information. |         |

### Create Service Request {#createservicerequest}

Create a new service request.

| Input             | Comments                                                                                                                                                                                             | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                      |         |
| Display ID        | The ID of the display to place a request for.                                                                                                                                                        |         |
| Quantity          | Quantity needed by the requester.                                                                                                                                                                    |         |
| Email             | Email id of the requester. If no email is provided, the request is created on behalf of the agent.                                                                                                   |         |
| Requested For     | Email id of the requester on whose behalf the service request is created.                                                                                                                            |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#service_request) for more information. |         |

### Create Software {#createsoftware}

Create a new software application.

| Input             | Comments                                                                                                                                                                                                 | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                          |         |
| Name              | Name of the software.                                                                                                                                                                                    |         |
| Description       | Description of the software.                                                                                                                                                                             |         |
| Application Type  | Type of the software.                                                                                                                                                                                    |         |
| Status            | Status of the software.                                                                                                                                                                                  |         |
| Managed By ID     | ID of the user managing the software (must be a user in Freshservice).                                                                                                                                   |         |
| Notes             | Notes about the software.                                                                                                                                                                                |         |
| Category          | Category of the software.                                                                                                                                                                                |         |
| Source            | Name of the source from where the software details are updated.                                                                                                                                          |         |
| Workspace ID      | ID of the workspace that the software belongs to. If not provided, the ID of the primary workspace will be defaulted. Applicable only to accounts on the Employee Support Mode.                          |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#software_attributes) for more information. |         |

### Create Ticket {#createticket}

Create a new ticket.

| Input             | Comments                                                                                                                                                                                               | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                                                                                                                                        |         |
| Description       | HTML content of the ticket.                                                                                                                                                                            |         |
| Subject           | Subject of the ticket.                                                                                                                                                                                 |         |
| Email             | Email address of the requester.                                                                                                                                                                        |         |
| Priority          | Priority of the ticket.                                                                                                                                                                                |         |
| Status            | Status of the ticket.                                                                                                                                                                                  |         |
| CC Emails         | Email addresses added in the 'cc' field of the incoming ticket email. The value should be an array of strings.                                                                                         |         |
| Workspace ID      | ID of the workspace that the ticket belongs to.                                                                                                                                                        |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#ticket_attributes) for more information. |         |

### Deactivate Agent {#deactivateagent}

Deactivate an agent.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Agent ID   | Unique ID of the agent to deactivate. |         |

### Deactivate Requester {#deactivaterequester}

Deactivate a requester.

| Input        | Comments                                  | Default |
| ------------ | ----------------------------------------- | ------- |
| Connection   |                                           |         |
| Requester ID | Unique ID of the requester to deactivate. |         |

### Delete Asset {#deleteasset}

Delete an asset.

| Input            | Comments                           | Default |
| ---------------- | ---------------------------------- | ------- |
| Connection       |                                    |         |
| Asset Display ID | Display ID of the asset to delete. |         |

### Delete Problem {#deleteproblem}

Delete a Problem.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection |                              |         |
| Problem ID | ID of the Problem to delete. |         |

### Delete Software {#deletesoftware}

Delete a software application.

| Input          | Comments                             | Default |
| -------------- | ------------------------------------ | ------- |
| Connection     |                                      |         |
| Application ID | Unique ID of the software to delete. |         |

### Delete Ticket {#deleteticket}

Delete a Ticket.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection |                             |         |
| Ticket ID  | ID of the ticket to delete. |         |

### Forget Agent {#forgetagent}

Forget an agent.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection |                                   |         |
| Agent ID   | Unique ID of the agent to forget. |         |

### Get Agent {#getagent}

View an agent.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Agent ID   | Unique ID of the agent to retrieve. |         |

### Get Asset {#getasset}

View an Asset.

| Input            | Comments                             | Default |
| ---------------- | ------------------------------------ | ------- |
| Connection       |                                      |         |
| Asset Display ID | Display ID of the asset to retrieve. |         |

### Get Problem {#getproblem}

View a Problem.

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Problem ID | ID of the Problem. |         |

### Get Requester {#getrequester}

View information about a requester.

| Input        | Comments                                | Default |
| ------------ | --------------------------------------- | ------- |
| Connection   |                                         |         |
| Requester ID | Unique ID of the requester to retrieve. |         |

### Get Software {#getsoftware}

View a software application.

| Input          | Comments                               | Default |
| -------------- | -------------------------------------- | ------- |
| Connection     |                                        |         |
| Application ID | Unique ID of the software to retrieve. |         |

### Get Ticket {#getticket}

View a Ticket.

| Input                       | Comments                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection                  |                                                                                            |         |
| Ticket ID                   | ID of the ticket to retrieve.                                                              |         |
| Additional Query Parameters | Additional query parameters that might not be covered by the standard inputs like filters. |         |

### Get Workspace {#getworkspace}

View a Workspace.

| Input                       | Comments                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection                  |                                                                                            |         |
| Workspace ID                | ID of the workspace to retrieve.                                                           |         |
| Additional Query Parameters | Additional query parameters that might not be covered by the standard inputs like filters. |         |

### List Agents {#listagents}

View List of Agents.

| Input                       | Comments                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection                  |                                                                                            |         |
| Fetch All                   | Set to true to retrieve all results.                                                       | true    |
| Items Per Page              | Number of items to return per page. Default is 30. Maximum is 100.                         | 30      |
| Page Number                 | Page number to return.                                                                     |         |
| Additional Query Parameters | Additional query parameters that might not be covered by the standard inputs like filters. |         |

### List Assets {#listassets}

View List of Assets.

| Input                       | Comments                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection                  |                                                                                            |         |
| Fetch All                   | Set to true to retrieve all results.                                                       | true    |
| Items Per Page              | Number of items to return per page. Default is 30. Maximum is 100.                         | 30      |
| Page Number                 | Page number to return.                                                                     |         |
| Additional Query Parameters | Additional query parameters that might not be covered by the standard inputs like filters. |         |

### List Problems {#listproblems}

View List of Problems.

| Input                       | Comments                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection                  |                                                                                            |         |
| Fetch All                   | Set to true to retrieve all results.                                                       | true    |
| Items Per Page              | Number of items to return per page. Default is 30. Maximum is 100.                         | 30      |
| Page Number                 | Page number to return.                                                                     |         |
| Additional Query Parameters | Additional query parameters that might not be covered by the standard inputs like filters. |         |

### List Requesters {#listrequesters}

View List of Requesters.

| Input                       | Comments                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection                  |                                                                                            |         |
| Fetch All                   | Set to true to retrieve all results.                                                       | true    |
| Items Per Page              | Number of items to return per page. Default is 30. Maximum is 100.                         | 30      |
| Page Number                 | Page number to return.                                                                     |         |
| Additional Query Parameters | Additional query parameters that might not be covered by the standard inputs like filters. |         |

### List Software {#listsoftware}

List all software applications.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Tickets {#listtickets}

View List of Tickets.

| Input                       | Comments                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection                  |                                                                                            |         |
| Filter                      | Filter the tickets.                                                                        |         |
| Fetch All                   | Set to true to retrieve all results.                                                       | true    |
| Items Per Page              | Number of items to return per page. Default is 30. Maximum is 100.                         | 30      |
| Page Number                 | Page number to return.                                                                     |         |
| Additional Query Parameters | Additional query parameters that might not be covered by the standard inputs like filters. |         |

### List Workspaces {#listworkspaces}

View List of Workspaces.

| Input                       | Comments                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection                  |                                                                                            |         |
| Fetch All                   | Set to true to retrieve all results.                                                       | true    |
| Items Per Page              | Number of items to return per page. Default is 30. Maximum is 100.                         | 30      |
| Page Number                 | Page number to return.                                                                     |         |
| Additional Query Parameters | Additional query parameters that might not be covered by the standard inputs like filters. |         |

### Move Asset {#moveasset}

Move an asset to a different workspace.

| Input            | Comments                                  | Default |
| ---------------- | ----------------------------------------- | ------- |
| Connection       |                                           |         |
| Asset Display ID | Display ID of the asset to move.          |         |
| Workspace ID     | ID of the workspace to move the asset to. |         |
| Group ID         | ID of the new asset group.                |         |
| Agent ID         | ID of the new asset agent.                |         |

### Move Problem {#moveproblem}

Move a Problem to a different workspace.

| Input        | Comments                                    | Default |
| ------------ | ------------------------------------------- | ------- |
| Connection   |                                             |         |
| Problem ID   | ID of the Problem to move.                  |         |
| Workspace ID | ID of the workspace to move the Problem to. |         |
| Group ID     | New assigned group ID for the Problem.      |         |
| Owner ID     | New assigned owner ID for the Problem.      |         |

### Move Software {#movesoftware}

Move a software application to a different workspace.

| Input          | Comments                                     | Default |
| -------------- | -------------------------------------------- | ------- |
| Connection     |                                              |         |
| Application ID | Unique ID of the software to move.           |         |
| Workspace ID   | ID of the workspace to move the software to. |         |

### Move Ticket {#moveticket}

Move a Ticket to a different workspace.

| Input        | Comments                                   | Default |
| ------------ | ------------------------------------------ | ------- |
| Connection   |                                            |         |
| Ticket ID    | ID of the ticket to move.                  |         |
| Workspace ID | ID of the workspace to move the ticket to. |         |
| Group ID     | New group ID to assign the ticket to.      |         |
| Responder ID | New responder ID to assign the ticket to.  |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Freshservice.

| Input                   | Comments                                                                                                                                                                                                                                 | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                          |         |
| URL                     | Input the path only (/problems), The base URL is already included (https://yourdomain.freshservice.com/api/v2). For example, to connect to https://yourdomain.freshservice.com/api/v2/problems, only /problems is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                  |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                     |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                         |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                   |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                      |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                              |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                 | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                      |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                     | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                      | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                         | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                      | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                            | false   |

### Search Asset {#searchasset}

Search for assets.

| Input                       | Comments                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection                  |                                                                                            |         |
| Search Query                | Search query to filter assets. Supported fields are name, asset_tag, and serial_number.    |         |
| Additional Query Parameters | Additional query parameters that might not be covered by the standard inputs like filters. |         |

### Update Agent {#updateagent}

Update an existing agent.

| Input                                           | Comments                                                                                                                                                                                              | Default |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                                      |                                                                                                                                                                                                       |         |
| Agent ID                                        | Unique ID of the agent to update.                                                                                                                                                                     |         |
| Email                                           | Email address of the agent.                                                                                                                                                                           |         |
| Roles                                           | Roles of the agent. An array of hashes. See [Freshservice API documentation](https://api.freshservice.com/#agent_attributes) for more information.                                                    |         |
| Scoreboard Level ID                             | Unique ID of the level of the agent in the Arcade.                                                                                                                                                    |         |
| Address                                         | Address of the agent.                                                                                                                                                                                 |         |
| Occasional                                      | True if the agent is an occasional agent, and false if full-time agent.                                                                                                                               |         |
| Signature                                       | Signature of the agent in HTML format.                                                                                                                                                                |         |
| Department IDs                                  | Unique IDs of the departments associated with the agent.                                                                                                                                              |         |
| Can See All Tickets From Associated Departments | Set to true if the agent must be allowed to view tickets filed by other members of the department, and false otherwise.                                                                               |         |
| Additional Fields                               | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#agent_attributes) for more information. |         |

### Update Asset {#updateasset}

Update an asset.

| Input             | Comments                                                                                                                                                                                              | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                       |         |
| Asset Display ID  | Display ID of the asset to update.                                                                                                                                                                    |         |
| Name              | Name of the asset.                                                                                                                                                                                    |         |
| Asset Type ID     | ID of the asset type.                                                                                                                                                                                 |         |
| Asset Tag         | Asset tag of the asset.                                                                                                                                                                               |         |
| Impact            | Impact of the asset.                                                                                                                                                                                  |         |
| Usage Type        | Usage type of the asset.                                                                                                                                                                              |         |
| Description       | Description of the asset.                                                                                                                                                                             |         |
| Location ID       | ID of the associated location.                                                                                                                                                                        |         |
| Agent ID          | ID of the associated agent (Managed By).                                                                                                                                                              |         |
| Department ID     | ID of the associated department.                                                                                                                                                                      |         |
| Group ID          | ID of the associated agent group (Managed By Group).                                                                                                                                                  |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#asset_attributes) for more information. |         |

### Update Problem {#updateproblem}

Update a Problem.

| Input             | Comments                                                                                                                                                                                                | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                         |         |
| Problem ID        | ID of the Problem to update.                                                                                                                                                                            |         |
| Subject           | Subject of the Problem.                                                                                                                                                                                 |         |
| Email             | Email of the initiator of the problem.                                                                                                                                                                  |         |
| Description       | HTML content of the problem.                                                                                                                                                                            |         |
| Due By            | Timestamp at which Problem due ends.                                                                                                                                                                    |         |
| Priority          | Priority of the Problem.                                                                                                                                                                                |         |
| Status            | Status identifier of the Problem.                                                                                                                                                                       |         |
| Impact            | Impact of the Problem.                                                                                                                                                                                  |         |
| Category          | Category of the Problem.                                                                                                                                                                                |         |
| Sub Category      | Sub-category of the Problem.                                                                                                                                                                            |         |
| Item Category     | Item of the Problem.                                                                                                                                                                                    |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#problem_attributes) for more information. |         |

### Update Requester {#updaterequester}

Update a requester.

| Input                | Comments                                                                                                                                                                                                  | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                           |         |
| Requester ID         | Unique ID of the requester to update.                                                                                                                                                                     |         |
| First Name           | First name of the requester.                                                                                                                                                                              |         |
| Primary Email        | Primary email address of the requester.                                                                                                                                                                   |         |
| Last Name            | Last name of the requester.                                                                                                                                                                               |         |
| Job Title            | Job title of the requester.                                                                                                                                                                               |         |
| Work Phone Number    | Work phone number of the requester.                                                                                                                                                                       |         |
| Mobile Phone Number  | Mobile phone number of the requester.                                                                                                                                                                     |         |
| Reporting Manager ID | User ID of the requester’s reporting manager.                                                                                                                                                             |         |
| Secondary Emails     | Additional/secondary emails associated with the requester. Array of email addresses.                                                                                                                      |         |
| Department IDs       | Unique IDs of the departments associated with the requester. Array of ID numbers.                                                                                                                         |         |
| Address              | Address of the requester.                                                                                                                                                                                 |         |
| Additional Fields    | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#requester_attributes) for more information. |         |

### Update Software {#updatesoftware}

Update an existing software application.

| Input             | Comments                                                                                                                                                                                                 | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                          |         |
| Application ID    | Unique ID of the software to update.                                                                                                                                                                     |         |
| Name              | Name of the software.                                                                                                                                                                                    |         |
| Description       | Description of the software.                                                                                                                                                                             |         |
| Application Type  | Type of the software.                                                                                                                                                                                    |         |
| Status            | Status of the software.                                                                                                                                                                                  |         |
| Managed By ID     | ID of the user managing the software (must be a user in Freshservice).                                                                                                                                   |         |
| Notes             | Notes about the software.                                                                                                                                                                                |         |
| Category          | Category of the software.                                                                                                                                                                                |         |
| Source            | Name of the source from where the software details are updated.                                                                                                                                          |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#software_attributes) for more information. |         |

### Update Ticket {#updateticket}

Update a Ticket.

| Input             | Comments                                                                                                                                                                                                                                                                                                                       | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                                                                                                                                                                                                                                                                |         |
| Ticket ID         | ID of the ticket to update.                                                                                                                                                                                                                                                                                                    |         |
| Priority          | Priority of the ticket.                                                                                                                                                                                                                                                                                                        |         |
| Status            | Status of the ticket.                                                                                                                                                                                                                                                                                                          |         |
| Source            | The channel through which the ticket was created.                                                                                                                                                                                                                                                                              |         |
| Bypass Mandatory  | To bypass mandatory fields check while updating the ticket except for requester_id, source. Any business rules trying to mandate certain fields will also be bypassed. All fields configured as mandatory upon closing or resolving the ticket will be skipped while updating the ticket. This can only be passed by an admin. |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. This is a JSON object. See [Freshservice API documentation](https://api.freshservice.com/#ticket_attributes) for more information.                                                                                                                         |         |
