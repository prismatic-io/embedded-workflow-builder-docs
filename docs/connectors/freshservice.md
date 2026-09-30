---
title: Freshservice Connector
sidebar_label: Freshservice
description: Manage tickets, problems, agents, and assets in Freshservice.
---

![Freshservice](./assets/freshservice.png#connector-icon)
[Freshservice](https://www.freshworks.com/freshservice/) is a cloud-based IT service management platform that streamlines IT operations, automates workflows, and improves service delivery for organizations.
This component allows managing tickets, problems, agents, assets, and other IT service resources.

## API Documentation

This component was built using the [Freshservice API v2.0](https://api.freshservice.com/#intro).

## Connections

### API Key {#freshservice-api-key-connection}

Authenticate requests using an API key.

To authenticate with Freshservice, an API key is required.

#### Prerequisites

- A Freshservice account with API access enabled
- The Freshservice domain name (e.g., if the Freshservice URL is `https://example.freshservice.com`, the domain is `example`)

#### Setup Steps

1. Log in to the [Freshservice Support Portal](https://support.freshservice.com/)
2. Click the profile picture in the top-right corner of the portal
3. Navigate to **Profile Settings**
4. The API key is available below the **Delegate Approvals** section on the right side of the page
5. Copy the **API Key**

For more details, refer to the [Freshservice API key documentation](https://support.freshservice.com/support/solutions/articles/50000000306-where-do-i-find-my-api-key-).

#### Configure the Connection

Create a connection of type **API Key** and configure the following fields:

- **Freshservice Domain**: Enter only the domain name of the Freshservice account. For example, if the Freshservice URL is `https://example.freshservice.com`, enter `example`.
- **API Key**: Enter the API key obtained from the profile settings page.

| Input               | Comments                                                                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Freshservice Domain | The domain name of the Freshservice account. For example, if the Freshservice URL is https://example.freshservice.com, enter example. |         |
| API Key             | The Freshservice API key for authentication.                                                                                          |         |

## Triggers

### New and Updated Tickets {#pollnewandupdatedticketstrigger}

Retrieves existing and ongoing tickets from Freshservice. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                                                         | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Freshservice connection to use.                                                                                                                                                                                                                                              |         |
| Show New Records     | When true, includes newly created tickets in the results.                                                                                                                                                                                                                        | true    |
| Show Updated Records | When true, includes updated tickets in the results.                                                                                                                                                                                                                              | true    |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to sync the last 7 days. When set, the first recurrence seeds each ticket updated on or after this date once, applying the same record filters every later recurrence applies. |         |

## Actions

### Create Agent {#createagent}

Creates a new agent in Freshservice.

| Input                                           | Comments                                                                                                                                                                          | Default |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                                      | The Freshservice connection to use.                                                                                                                                               |         |
| First Name                                      | The given name of the agent.                                                                                                                                                      |         |
| Last Name                                       | The family name of the agent.                                                                                                                                                     |         |
| Email                                           | The primary email address used to identify the agent.                                                                                                                             |         |
| Roles                                           | Roles of the agent. An array of hashes. See [Freshservice API documentation](https://api.freshservice.com/#agent_attributes) for more information.                                |         |
| Contact Information                             | Email, phone, and other contact channel details.                                                                                                                                  |         |
| Work Phone Number                               | The office or desk phone number for the agent.                                                                                                                                    |         |
| Mobile Phone Number                             | The cell phone number for the agent.                                                                                                                                              |         |
| Address                                         | The physical or mailing address of the agent.                                                                                                                                     |         |
| Occasional                                      | When true, marks the agent as an occasional (part-time) agent rather than full-time.                                                                                              | false   |
| Job Title                                       | The role or position held by the agent.                                                                                                                                           |         |
| Department IDs                                  | Unique IDs of the departments associated with the agent.                                                                                                                          |         |
| Can See All Tickets From Associated Departments | When true, allows the agent to view tickets filed by other members of associated departments.                                                                                     | false   |
| Extra Body                                      | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#agent_attributes) for more information. |         |

### Create Asset (Deprecated) {#createasset}

Creates a new asset in Freshservice. Applies to Freshservice accounts created before the March 31, 2026 IT Asset Management release.

| Input             | Comments                                                                                                                                                                          | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Freshservice connection to use.                                                                                                                                               |         |
| Name              | The display name used to identify the asset.                                                                                                                                      |         |
| Asset Type ID     | The unique identifier for the asset type classification.                                                                                                                          |         |
| Additional Fields | Additional optional fields: includes Asset Tag, Impact, Usage Type, and Description.                                                                                              |         |
| Asset Tag         | The tracking label assigned to the asset for inventory purposes.                                                                                                                  |         |
| Impact            | The business impact level if the asset becomes unavailable.                                                                                                                       |         |
| Usage Type        | Whether the asset is permanently assigned or a loaner.                                                                                                                            |         |
| Description       | A detailed summary of the asset specifications or purpose.                                                                                                                        |         |
| Location ID       | The unique identifier for the location where the asset is assigned.                                                                                                               |         |
| Agent ID          | The unique identifier for the agent managing the asset.                                                                                                                           |         |
| Department ID     | The unique identifier for the department assigned to the asset.                                                                                                                   |         |
| Group ID          | The unique identifier for the agent group managing the asset.                                                                                                                     |         |
| Workspace ID      | The unique identifier for the workspace the asset belongs to. Defaults to the primary workspace if not provided. Applicable only to accounts on Employee Support Mode.            |         |
| Extra Body        | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#asset_attributes) for more information. |         |

### Create or Update Asset (ITAM) {#createorupdateitamasset}

Creates an asset, or updates the existing asset that matches the supplied name.

| Input                | Comments                                                                                                                                                                                                                                                                       | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection           | The Freshservice connection to use.                                                                                                                                                                                                                                            |         |
| Type                 | The specific type of the asset.                                                                                                                                                                                                                                                |         |
| Name                 | The name of the asset.                                                                                                                                                                                                                                                         |         |
| Serial Number        | The serial number of the asset. Set to d42null to clear the stored value.                                                                                                                                                                                                      |         |
| Asset Number         | The asset number of the asset.                                                                                                                                                                                                                                                 |         |
| Service Level        | The operational status of the asset. Freshservice predefines In Service, Spare and Not in Service, and also accepts a custom value.                                                                                                                                            |         |
| In Service           | Whether the asset is currently in service. Freshservice expects the strings "yes" or "no" here rather than a boolean.                                                                                                                                                          |         |
| Device Name          | The name of the device this asset is associated with.                                                                                                                                                                                                                          |         |
| Back Connection Type | The type of back connection used by the asset.                                                                                                                                                                                                                                 |         |
| Vendor               | The name of the vendor that supplied the asset.                                                                                                                                                                                                                                |         |
| Object Category      | The existing category used to control access when multitenancy is enabled.                                                                                                                                                                                                     |         |
| Tags                 | A comma-separated list of tags to apply to the asset.                                                                                                                                                                                                                          |         |
| Notes                | Free-text notes about the asset.                                                                                                                                                                                                                                               |         |
| Rack Placement       | Rack, starting unit, size, orientation, horizontal position, and mounting depth. Supplying a rack makes Start At and Size mandatory.                                                                                                                                           |         |
| Rack                 | The name of the rack the asset is mounted in.                                                                                                                                                                                                                                  |         |
| Rack ID              | The unique identifier for the rack the asset is mounted in.                                                                                                                                                                                                                    |         |
| Start At             | The starting Rack Unit (U) location for the asset. Required when the asset is added to a rack.                                                                                                                                                                                 |         |
| Size                 | The height of the asset in Rack Units (U). Required when the asset is added to a rack.                                                                                                                                                                                         |         |
| Orientation          | The mounting orientation. Only "back" has an effect; any other value is ignored by Freshservice.                                                                                                                                                                               |         |
| Where                | The specific mounting location within the rack.                                                                                                                                                                                                                                |         |
| Horizontal Position  | The horizontal position within a Rack Unit, from 0 to 2520 in increments of 252. Each increment is one tenth of the rack width, so 0 is flush-left and 1260 centers the left edge of the asset. Freshservice names this attribute x_pos on the way in and xpos on the way out. |         |
| Depth                | The mounting depth of the asset. Freshservice defaults to half.                                                                                                                                                                                                                |         |
| Extra Body           | A JSON object of additional fields not covered by the standard inputs. See [Freshservice IT Asset Management API documentation](https://api.freshservice.com/) for more information.                                                                                           |         |

### Create or Update Device (ITAM) {#createorupdateitamdevice}

Creates a device, or updates the existing device that matches the supplied identifier.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                                  | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Freshservice connection to use.                                                                                                                                                                                                                                                                                                                                       |         |
| Name                | The name of the device. Required when creating a device. If a device with this name already exists, that record is updated instead.                                                                                                                                                                                                                                       |         |
| Device ID           | The unique identifier of an existing device to update. Supply this, Serial Number or UUID to update; supply Name instead to create.                                                                                                                                                                                                                                       |         |
| Serial Number       | The serial number of the device. Values shorter than three characters, and generic values such as 123456789, are silently ignored by Freshservice rather than rejected. Set to d42null to clear the stored value.                                                                                                                                                         |         |
| UUID                | The universally unique identifier of the device. When a matching UUID is found, that record is updated.                                                                                                                                                                                                                                                                   |         |
| Asset Number        | The asset number of the device.                                                                                                                                                                                                                                                                                                                                           |         |
| Type                | The device type.                                                                                                                                                                                                                                                                                                                                                          |         |
| Physical Subtype ID | The unique identifier for the hardware subtype. Applies only when Type is physical or unknown. System-defined values are 1 (Generic), 2 (Rackable), 3 (Blade), 4 (PDU), 5 (Access Point), 6 (CRAC), 7 (UPS), 8 (TAP), 9 (Branch Circuit Power Meter), 10 (Power Unit), 11 (WorkStation), 12 (ThinClient), 13 (Network Printer), 14 (Laptop) and 15 (Environment Monitor). |         |
| In Service          | Whether the device is currently in service. Freshservice expects the strings "yes" or "no" here rather than a boolean.                                                                                                                                                                                                                                                    |         |
| Network Device      | Whether the device is a network switch. Freshservice expects the strings "yes" or "no" here rather than a boolean.                                                                                                                                                                                                                                                        |         |
| Virtual Host        | Whether the device is a virtual host. Freshservice expects the strings "yes" or "no" here rather than a boolean.                                                                                                                                                                                                                                                          |         |
| Data Center         | The name of the data center housing the device.                                                                                                                                                                                                                                                                                                                           |         |
| Cost Centers        | A comma-separated list of cost center names to associate with the device. These records must already exist. Freshservice names this attribute `customers` in the API and Cost Centers in the user interface.                                                                                                                                                              |         |
| Extra Body          | A JSON object of additional fields not covered by the standard inputs. See [Freshservice IT Asset Management API documentation](https://api.freshservice.com/) for more information.                                                                                                                                                                                      |         |

### Create Problem {#createproblem}

Creates a new problem in Freshservice.

| Input          | Comments                                                                                                                                                                            | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Freshservice connection to use.                                                                                                                                                 |         |
| Subject        | The brief summary line describing the problem.                                                                                                                                      |         |
| Email          | The email address of the person who reported the problem.                                                                                                                           |         |
| Description    | The HTML body content with details about the problem.                                                                                                                               |         |
| Due By         | The timestamp when the problem resolution is expected. Format: ISO 8601 (e.g., 2020-07-20T16:18:46Z).                                                                               |         |
| Priority       | The urgency level that determines the problem's resolution order.                                                                                                                   |         |
| Status         | The current lifecycle stage of the problem.                                                                                                                                         |         |
| Impact         | The scope of business disruption caused by the problem.                                                                                                                             |         |
| Categorization | Category, sub-category, and item-category for the record.                                                                                                                           |         |
| Category       | The classification group for the problem (e.g., Hardware, Software).                                                                                                                |         |
| Sub Category   | The secondary classification within the problem's category.                                                                                                                         |         |
| Item Category  | The specific item type within the sub-category.                                                                                                                                     |         |
| Extra Body     | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#problem_attributes) for more information. |         |

### Create Requester {#createrequester}

Creates a new requester in Freshservice.

| Input                | Comments                                                                                                                                                                              | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Freshservice connection to use.                                                                                                                                                   |         |
| First Name           | The given name of the requester.                                                                                                                                                      |         |
| Last Name            | The family name of the requester.                                                                                                                                                     |         |
| Primary Email        | The main email address used to contact the requester.                                                                                                                                 |         |
| Job Title            | The role or position held by the requester.                                                                                                                                           |         |
| Contact Information  | Email, phone, and other contact channel details.                                                                                                                                      |         |
| Secondary Emails     | Additional/secondary emails associated with the requester. Array of email addresses.                                                                                                  |         |
| Work Phone Number    | The office or desk phone number for the requester.                                                                                                                                    |         |
| Mobile Phone Number  | The cell phone number for the requester.                                                                                                                                              |         |
| Address              | The physical or mailing address of the requester.                                                                                                                                     |         |
| Reporting Manager ID | The unique identifier for the supervisor of the requester.                                                                                                                            |         |
| Department IDs       | Unique IDs of the departments associated with the requester. Array of ID numbers.                                                                                                     |         |
| Extra Body           | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#requester_attributes) for more information. |         |

### Create Service Request {#createservicerequest}

Creates a new service request in Freshservice.

| Input                   | Comments                                                                                                                                                                         | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Freshservice connection to use.                                                                                                                                              |         |
| Service Item Display ID | The unique identifier for the service catalog item to request.                                                                                                                   |         |
| Quantity                | The number of items to include in the service request.                                                                                                                           |         |
| Email                   | The email address of the requester. If omitted, the request is created on behalf of the authenticated agent.                                                                     |         |
| Requested For           | The email address of the person on whose behalf the service request is created.                                                                                                  |         |
| Extra Body              | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#service_request) for more information. |         |

### Create Software {#createsoftware}

Creates a new software application in Freshservice.

| Input             | Comments                                                                                                                                                                             | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Freshservice connection to use.                                                                                                                                                  |         |
| Name              | The display name used to identify the software application.                                                                                                                          |         |
| Description       | A summary of the software's purpose and capabilities.                                                                                                                                |         |
| Application Type  | The deployment model of the software (Desktop, SaaS, or Mobile).                                                                                                                     |         |
| Managed By ID     | ID of the user managing the software (must be a user in Freshservice).                                                                                                               |         |
| Additional Fields | Additional optional fields: includes Status, Notes, Category, and Source.                                                                                                            |         |
| Status            | The current lifecycle stage of the software in the organization.                                                                                                                     |         |
| Notes             | Free-text remarks or additional context about the software.                                                                                                                          |         |
| Category          | The classification group for the software (e.g., service desk application).                                                                                                          |         |
| Source            | The origin system from where the software details were imported or updated.                                                                                                          |         |
| Workspace ID      | The unique identifier for the workspace the software belongs to. Defaults to the primary workspace if not provided. Applicable only to accounts on Employee Support Mode.            |         |
| Extra Body        | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#software_attributes) for more information. |         |

### Create Ticket {#createticket}

Creates a new ticket in Freshservice.

| Input        | Comments                                                                                                                                                                           | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Freshservice connection to use.                                                                                                                                                |         |
| Description  | The HTML body content displayed in the ticket detail view.                                                                                                                         |         |
| Subject      | The brief summary line shown in ticket listings.                                                                                                                                   |         |
| Email        | The email address of the person who submitted the ticket.                                                                                                                          |         |
| Priority     | The urgency level that determines the ticket's resolution order.                                                                                                                   |         |
| Status       | The current lifecycle stage of the ticket.                                                                                                                                         |         |
| CC Emails    | Email addresses added in the 'cc' field of the incoming ticket email. The value should be an array of strings.                                                                     |         |
| Workspace ID | The unique identifier for the workspace the ticket belongs to.                                                                                                                     |         |
| Extra Body   | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#ticket_attributes) for more information. |         |

### Deactivate Agent {#deactivateagent}

Deactivates an agent by ID.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Freshservice connection to use.   |         |
| Agent ID   | Unique ID of the agent to deactivate. |         |

### Deactivate Requester {#deactivaterequester}

Deactivates a requester by ID.

| Input        | Comments                                  | Default |
| ------------ | ----------------------------------------- | ------- |
| Connection   | The Freshservice connection to use.       |         |
| Requester ID | Unique ID of the requester to deactivate. |         |

### Delete Asset (Deprecated) {#deleteasset}

Deletes an asset by display ID. Applies to Freshservice accounts created before the March 31, 2026 IT Asset Management release.

| Input            | Comments                            | Default |
| ---------------- | ----------------------------------- | ------- |
| Connection       | The Freshservice connection to use. |         |
| Asset Display ID | Display ID of the asset to delete.  |         |

### Delete Asset (ITAM) {#deleteitamasset}

Deletes an asset by its unique identifier.

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Freshservice connection to use.           |         |
| Asset ID   | The unique identifier of the asset to delete. |         |

### Delete Device (ITAM) {#deleteitamdevice}

Deletes a device by its unique identifier.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Freshservice connection to use.            |         |
| Device ID  | The unique identifier of the device to delete. |         |

### Delete Problem {#deleteproblem}

Deletes a problem by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Freshservice connection to use. |         |
| Problem ID | ID of the Problem to delete.        |         |

### Delete Software {#deletesoftware}

Deletes a software application by ID.

| Input          | Comments                             | Default |
| -------------- | ------------------------------------ | ------- |
| Connection     | The Freshservice connection to use.  |         |
| Application ID | Unique ID of the software to delete. |         |

### Delete Ticket {#deleteticket}

Deletes a ticket by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Freshservice connection to use. |         |
| Ticket ID  | ID of the ticket to delete.         |         |

### Forget Agent {#forgetagent}

Permanently removes an agent and associated data.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Freshservice connection to use. |         |
| Agent ID   | Unique ID of the agent to forget.   |         |

### Get Agent {#getagent}

Retrieves details of an agent by ID.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Freshservice connection to use.  |         |
| Agent ID   | The unique identifier for the agent. |         |

### Get Asset (Deprecated) {#getasset}

Retrieves details of an asset by display ID. Applies to Freshservice accounts created before the March 31, 2026 IT Asset Management release.

| Input            | Comments                             | Default |
| ---------------- | ------------------------------------ | ------- |
| Connection       | The Freshservice connection to use.  |         |
| Asset Display ID | Display ID of the asset to retrieve. |         |

### Get Asset (ITAM) {#getitamasset}

Retrieves details of an asset by its unique identifier.

| Input           | Comments                                                                                                                                               | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The Freshservice connection to use.                                                                                                                    |         |
| Asset ID        | The unique identifier of the asset to retrieve.                                                                                                        |         |
| Include Columns | A comma-separated list of attributes to return for each asset. Freshservice ITAM supports only Include Columns, page and page size as list parameters. |         |

### Get Device (ITAM) {#getitamdevice}

Retrieves details of a device by its unique identifier.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Freshservice connection to use.              |         |
| Device ID  | The unique identifier of the device to retrieve. |         |

### Get Problem {#getproblem}

Retrieves details of a problem by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Freshservice connection to use.    |         |
| Problem ID | The unique identifier for the problem. |         |

### Get Requester {#getrequester}

Retrieves details of a requester by ID.

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The Freshservice connection to use.      |         |
| Requester ID | The unique identifier for the requester. |         |

### Get Software {#getsoftware}

Retrieves details of a software application by ID.

| Input          | Comments                               | Default |
| -------------- | -------------------------------------- | ------- |
| Connection     | The Freshservice connection to use.    |         |
| Application ID | Unique ID of the software to retrieve. |         |

### Get Ticket {#getticket}

Retrieves details of a ticket by ID.

| Input                       | Comments                                                                        | Default |
| --------------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection                  | The Freshservice connection to use.                                             |         |
| Ticket ID                   | ID of the ticket to retrieve.                                                   |         |
| Additional Query Parameters | Key-value pairs appended to the request URL for filtering or other API options. |         |

### Get Workspace {#getworkspace}

Retrieves details of a workspace by ID.

| Input                       | Comments                                                                        | Default |
| --------------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection                  | The Freshservice connection to use.                                             |         |
| Workspace ID                | ID of the workspace to retrieve.                                                |         |
| Additional Query Parameters | Key-value pairs appended to the request URL for filtering or other API options. |         |

### List Agents {#listagents}

Returns a list of all agents.

| Input                       | Comments                                                                        | Default |
| --------------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection                  | The Freshservice connection to use.                                             |         |
| Fetch All                   | When true, automatically fetches all pages of results.                          | false   |
| Pagination                  | Page and page-size controls.                                                    |         |
| Items Per Page              | The maximum number of results to return per page. Maximum is 100.               |         |
| Page Number                 | The 1-based page number to return.                                              |         |
| Additional Query Parameters | Key-value pairs appended to the request URL for filtering or other API options. |         |

### List Assets (Deprecated) {#listassets}

Returns a list of all assets. Applies to Freshservice accounts created before the March 31, 2026 IT Asset Management release.

| Input                       | Comments                                                                        | Default |
| --------------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection                  | The Freshservice connection to use.                                             |         |
| Fetch All                   | When true, automatically fetches all pages of results.                          | false   |
| Pagination                  | Page and page-size controls.                                                    |         |
| Items Per Page              | The maximum number of results to return per page. Maximum is 100.               |         |
| Page Number                 | The 1-based page number to return.                                              |         |
| Additional Query Parameters | Key-value pairs appended to the request URL for filtering or other API options. |         |

### List Assets (ITAM) {#listitamassets}

Returns a list of assets.

| Input           | Comments                                                                                                                                               | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The Freshservice connection to use.                                                                                                                    |         |
| Fetch All       | When true, automatically fetches all pages of results.                                                                                                 | false   |
| Pagination      | Page and page-size controls.                                                                                                                           |         |
| Items Per Page  | The maximum number of results to return per page. Maximum is 100.                                                                                      |         |
| Page Number     | The 1-based page number to return.                                                                                                                     |         |
| Include Columns | A comma-separated list of attributes to return for each asset. Freshservice ITAM supports only Include Columns, page and page size as list parameters. |         |

### List Devices (ITAM) {#listitamdevices}

Returns a list of devices.

| Input           | Comments                                                                                                                                                | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Freshservice connection to use.                                                                                                                     |         |
| Fetch All       | When true, automatically fetches all pages of results.                                                                                                  | false   |
| Pagination      | Page and page-size controls.                                                                                                                            |         |
| Items Per Page  | The maximum number of results to return per page. Maximum is 100.                                                                                       |         |
| Page Number     | The 1-based page number to return.                                                                                                                      |         |
| Include Columns | A comma-separated list of attributes to return for each device. Freshservice ITAM supports only Include Columns, page and page size as list parameters. |         |

### List Problems {#listproblems}

Returns a list of all problems.

| Input                       | Comments                                                                        | Default |
| --------------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection                  | The Freshservice connection to use.                                             |         |
| Fetch All                   | When true, automatically fetches all pages of results.                          | false   |
| Pagination                  | Page and page-size controls.                                                    |         |
| Items Per Page              | The maximum number of results to return per page. Maximum is 100.               |         |
| Page Number                 | The 1-based page number to return.                                              |         |
| Additional Query Parameters | Key-value pairs appended to the request URL for filtering or other API options. |         |

### List Requesters {#listrequesters}

Returns a list of all requesters.

| Input                       | Comments                                                                        | Default |
| --------------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection                  | The Freshservice connection to use.                                             |         |
| Fetch All                   | When true, automatically fetches all pages of results.                          | false   |
| Pagination                  | Page and page-size controls.                                                    |         |
| Items Per Page              | The maximum number of results to return per page. Maximum is 100.               |         |
| Page Number                 | The 1-based page number to return.                                              |         |
| Additional Query Parameters | Key-value pairs appended to the request URL for filtering or other API options. |         |

### List Software {#listsoftware}

Returns a list of all software applications.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Freshservice connection to use. |         |

### List Tickets {#listtickets}

Returns a list of all tickets.

| Input                       | Comments                                                                        | Default |
| --------------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection                  | The Freshservice connection to use.                                             |         |
| Fetch All                   | When true, automatically fetches all pages of results.                          | false   |
| Pagination                  | Page and page-size controls.                                                    |         |
| Items Per Page              | The maximum number of results to return per page. Maximum is 100.               |         |
| Page Number                 | The 1-based page number to return.                                              |         |
| Filter                      | The predefined view used to narrow down the ticket list.                        |         |
| Additional Query Parameters | Key-value pairs appended to the request URL for filtering or other API options. |         |

### List Workspaces {#listworkspaces}

Returns a list of all workspaces.

| Input                       | Comments                                                                        | Default |
| --------------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection                  | The Freshservice connection to use.                                             |         |
| Fetch All                   | When true, automatically fetches all pages of results.                          | false   |
| Pagination                  | Page and page-size controls.                                                    |         |
| Items Per Page              | The maximum number of results to return per page. Maximum is 100.               |         |
| Page Number                 | The 1-based page number to return.                                              |         |
| Additional Query Parameters | Key-value pairs appended to the request URL for filtering or other API options. |         |

### Move Asset (Deprecated) {#moveasset}

Moves an asset to a different workspace. Applies to Freshservice accounts created before the March 31, 2026 IT Asset Management release.

| Input            | Comments                                  | Default |
| ---------------- | ----------------------------------------- | ------- |
| Connection       | The Freshservice connection to use.       |         |
| Asset Display ID | Display ID of the asset to move.          |         |
| Workspace ID     | ID of the workspace to move the asset to. |         |
| Group ID         | ID of the new asset group.                |         |
| Agent ID         | ID of the new asset agent.                |         |

### Move Problem {#moveproblem}

Moves a problem to a different workspace.

| Input        | Comments                                                            | Default |
| ------------ | ------------------------------------------------------------------- | ------- |
| Connection   | The Freshservice connection to use.                                 |         |
| Problem ID   | ID of the Problem to move.                                          |         |
| Workspace ID | The unique identifier for the target workspace.                     |         |
| Group ID     | The unique identifier for the agent group to assign the problem to. |         |
| Owner ID     | The unique identifier for the agent to assign as the problem owner. |         |

### Move Software {#movesoftware}

Moves a software application to a different workspace.

| Input          | Comments                                     | Default |
| -------------- | -------------------------------------------- | ------- |
| Connection     | The Freshservice connection to use.          |         |
| Application ID | Unique ID of the software to move.           |         |
| Workspace ID   | ID of the workspace to move the software to. |         |

### Move Ticket {#moveticket}

Moves a ticket to a different workspace.

| Input        | Comments                                                               | Default |
| ------------ | ---------------------------------------------------------------------- | ------- |
| Connection   | The Freshservice connection to use.                                    |         |
| Ticket ID    | ID of the ticket to move.                                              |         |
| Workspace ID | ID of the workspace to move the ticket to.                             |         |
| Group ID     | The unique identifier for the agent group to assign the ticket to.     |         |
| Responder ID | The unique identifier for the agent to assign as the ticket responder. |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the Freshservice API.

| Input                   | Comments                                                                                                                                                                                                 | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Freshservice connection to use.                                                                                                                                                                      |         |
| URL                     | The path to append to the base URL. The base URL (https://example.freshservice.com/api/v2) is already included. For example, to reach https://example.freshservice.com/api/v2/problems, enter /problems. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                  |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                     |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                         |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                   |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                      |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                              |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                 | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                      |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                      | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.         | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                      | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                            | false   |

### Search Asset (Deprecated) {#searchasset}

Searches for assets matching a query. Applies to Freshservice accounts created before the March 31, 2026 IT Asset Management release.

| Input                       | Comments                                                                                         | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection                  | The Freshservice connection to use.                                                              |         |
| Search Query                | The filter expression to search assets. Supported fields are name, asset_tag, and serial_number. |         |
| Additional Query Parameters | Key-value pairs appended to the request URL for filtering or other API options.                  |         |

### Update Agent {#updateagent}

Updates an existing agent.

| Input                                           | Comments                                                                                                                                                                          | Default |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                                      | The Freshservice connection to use.                                                                                                                                               |         |
| Agent ID                                        | Unique ID of the agent to update.                                                                                                                                                 |         |
| Roles                                           | Roles of the agent. An array of hashes. See [Freshservice API documentation](https://api.freshservice.com/#agent_attributes) for more information.                                |         |
| Scoreboard Level ID                             | The Arcade gamification level assigned to the agent.                                                                                                                              |         |
| Department IDs                                  | Unique IDs of the departments associated with the agent.                                                                                                                          |         |
| Additional Fields                               | Additional optional fields: includes Email, Address, Occasional, Signature, and Can See All Tickets From Associated Departments.                                                  |         |
| Email                                           | The primary email address used to identify the agent.                                                                                                                             |         |
| Address                                         | The physical or mailing address of the agent.                                                                                                                                     |         |
| Occasional                                      | When true, marks the agent as an occasional (part-time) agent rather than full-time.                                                                                              |         |
| Signature                                       | Signature of the agent in HTML format.                                                                                                                                            |         |
| Can See All Tickets From Associated Departments | When true, allows the agent to view tickets filed by other members of associated departments.                                                                                     |         |
| Extra Body                                      | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#agent_attributes) for more information. |         |

### Update Asset (Deprecated) {#updateasset}

Updates an existing asset. Applies to Freshservice accounts created before the March 31, 2026 IT Asset Management release.

| Input             | Comments                                                                                                                                                                          | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Freshservice connection to use.                                                                                                                                               |         |
| Asset Display ID  | The unique display identifier for the asset.                                                                                                                                      |         |
| Asset Type ID     | The unique identifier for the asset type classification.                                                                                                                          |         |
| Location ID       | The unique identifier for the location where the asset is assigned.                                                                                                               |         |
| Agent ID          | The unique identifier for the agent managing the asset.                                                                                                                           |         |
| Department ID     | The unique identifier for the department assigned to the asset.                                                                                                                   |         |
| Group ID          | The unique identifier for the agent group managing the asset.                                                                                                                     |         |
| Additional Fields | Additional optional fields: includes Name, Asset Tag, Impact, Usage Type, and Description.                                                                                        |         |
| Name              | The display name used to identify the asset.                                                                                                                                      |         |
| Asset Tag         | The tracking label assigned to the asset for inventory purposes.                                                                                                                  |         |
| Impact            | The business impact level if the asset becomes unavailable.                                                                                                                       |         |
| Usage Type        | Whether the asset is permanently assigned or a loaner.                                                                                                                            |         |
| Description       | A detailed summary of the asset specifications or purpose.                                                                                                                        |         |
| Extra Body        | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#asset_attributes) for more information. |         |

### Update Asset (ITAM) {#updateitamasset}

Updates an existing asset by its unique identifier.

| Input                | Comments                                                                                                                                                                                                                                                                       | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection           | The Freshservice connection to use.                                                                                                                                                                                                                                            |         |
| Asset ID             | The unique identifier of the asset to update.                                                                                                                                                                                                                                  |         |
| Type                 | The specific type of the asset.                                                                                                                                                                                                                                                |         |
| Name                 | The name of the asset.                                                                                                                                                                                                                                                         |         |
| Serial Number        | The serial number of the asset. Set to d42null to clear the stored value.                                                                                                                                                                                                      |         |
| Asset Number         | The asset number of the asset.                                                                                                                                                                                                                                                 |         |
| Service Level        | The operational status of the asset. Freshservice predefines In Service, Spare and Not in Service, and also accepts a custom value.                                                                                                                                            |         |
| In Service           | Whether the asset is currently in service. Freshservice expects the strings "yes" or "no" here rather than a boolean.                                                                                                                                                          |         |
| Device Name          | The name of the device this asset is associated with.                                                                                                                                                                                                                          |         |
| Back Connection Type | The type of back connection used by the asset.                                                                                                                                                                                                                                 |         |
| Vendor               | The name of the vendor that supplied the asset.                                                                                                                                                                                                                                |         |
| Object Category      | The existing category used to control access when multitenancy is enabled.                                                                                                                                                                                                     |         |
| Tags                 | A comma-separated list of tags to apply to the asset.                                                                                                                                                                                                                          |         |
| Notes                | Free-text notes about the asset.                                                                                                                                                                                                                                               |         |
| Rack Placement       | Rack, starting unit, size, orientation, horizontal position, and mounting depth. Supplying a rack makes Start At and Size mandatory.                                                                                                                                           |         |
| Rack                 | The name of the rack the asset is mounted in.                                                                                                                                                                                                                                  |         |
| Rack ID              | The unique identifier for the rack the asset is mounted in.                                                                                                                                                                                                                    |         |
| Start At             | The starting Rack Unit (U) location for the asset. Required when the asset is added to a rack.                                                                                                                                                                                 |         |
| Size                 | The height of the asset in Rack Units (U). Required when the asset is added to a rack.                                                                                                                                                                                         |         |
| Orientation          | The mounting orientation. Only "back" has an effect; any other value is ignored by Freshservice.                                                                                                                                                                               |         |
| Where                | The specific mounting location within the rack.                                                                                                                                                                                                                                |         |
| Horizontal Position  | The horizontal position within a Rack Unit, from 0 to 2520 in increments of 252. Each increment is one tenth of the rack width, so 0 is flush-left and 1260 centers the left edge of the asset. Freshservice names this attribute x_pos on the way in and xpos on the way out. |         |
| Depth                | The mounting depth of the asset. Freshservice defaults to half.                                                                                                                                                                                                                |         |
| Extra Body           | A JSON object of additional fields not covered by the standard inputs. See [Freshservice IT Asset Management API documentation](https://api.freshservice.com/) for more information.                                                                                           |         |

### Update Device (ITAM) {#updateitamdevice}

Updates an existing device by its unique identifier.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                                  | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Freshservice connection to use.                                                                                                                                                                                                                                                                                                                                       |         |
| Device ID           | The unique identifier of the device to update.                                                                                                                                                                                                                                                                                                                            |         |
| Name                | The name of the device. Required when creating a device. If a device with this name already exists, that record is updated instead.                                                                                                                                                                                                                                       |         |
| Asset Number        | The asset number of the device.                                                                                                                                                                                                                                                                                                                                           |         |
| Type                | The device type.                                                                                                                                                                                                                                                                                                                                                          |         |
| Physical Subtype ID | The unique identifier for the hardware subtype. Applies only when Type is physical or unknown. System-defined values are 1 (Generic), 2 (Rackable), 3 (Blade), 4 (PDU), 5 (Access Point), 6 (CRAC), 7 (UPS), 8 (TAP), 9 (Branch Circuit Power Meter), 10 (Power Unit), 11 (WorkStation), 12 (ThinClient), 13 (Network Printer), 14 (Laptop) and 15 (Environment Monitor). |         |
| In Service          | Whether the device is currently in service. Freshservice expects the strings "yes" or "no" here rather than a boolean.                                                                                                                                                                                                                                                    |         |
| Network Device      | Whether the device is a network switch. Freshservice expects the strings "yes" or "no" here rather than a boolean.                                                                                                                                                                                                                                                        |         |
| Virtual Host        | Whether the device is a virtual host. Freshservice expects the strings "yes" or "no" here rather than a boolean.                                                                                                                                                                                                                                                          |         |
| Data Center         | The name of the data center housing the device.                                                                                                                                                                                                                                                                                                                           |         |
| Cost Centers        | A comma-separated list of cost center names to associate with the device. These records must already exist. Freshservice names this attribute `customers` in the API and Cost Centers in the user interface.                                                                                                                                                              |         |
| Extra Body          | A JSON object of additional fields not covered by the standard inputs. See [Freshservice IT Asset Management API documentation](https://api.freshservice.com/) for more information.                                                                                                                                                                                      |         |

### Update Problem {#updateproblem}

Updates an existing problem.

| Input             | Comments                                                                                                                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Freshservice connection to use.                                                                                                                                                 |         |
| Problem ID        | ID of the Problem to update.                                                                                                                                                        |         |
| Categorization    | Category, sub-category, and item-category for the record.                                                                                                                           |         |
| Category          | The classification group for the problem (e.g., Hardware, Software).                                                                                                                |         |
| Sub Category      | The secondary classification within the problem's category.                                                                                                                         |         |
| Item Category     | The specific item type within the sub-category.                                                                                                                                     |         |
| Additional Fields | Additional optional fields: includes Subject, Email, Description, Due By, Priority, Status, and Impact.                                                                             |         |
| Subject           | The brief summary line describing the problem.                                                                                                                                      |         |
| Email             | The email address of the person who reported the problem.                                                                                                                           |         |
| Description       | The HTML body content with details about the problem.                                                                                                                               |         |
| Due By            | The timestamp when the problem resolution is expected. Format: ISO 8601 (e.g., 2020-07-20T16:18:46Z).                                                                               |         |
| Priority          | The urgency level that determines the problem's resolution order.                                                                                                                   |         |
| Status            | The current lifecycle stage of the problem.                                                                                                                                         |         |
| Impact            | The scope of business disruption caused by the problem.                                                                                                                             |         |
| Extra Body        | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#problem_attributes) for more information. |         |

### Update Requester {#updaterequester}

Updates an existing requester.

| Input                | Comments                                                                                                                                                                              | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Freshservice connection to use.                                                                                                                                                   |         |
| Requester ID         | Unique ID of the requester to update.                                                                                                                                                 |         |
| Job Title            | The role or position held by the requester.                                                                                                                                           |         |
| First Name           | The given name of the requester.                                                                                                                                                      |         |
| Last Name            | The family name of the requester.                                                                                                                                                     |         |
| Contact Information  | Email, phone, and other contact channel details.                                                                                                                                      |         |
| Primary Email        | The main email address used to contact the requester.                                                                                                                                 |         |
| Secondary Emails     | Additional/secondary emails associated with the requester. Array of email addresses.                                                                                                  |         |
| Work Phone Number    | The office or desk phone number for the requester.                                                                                                                                    |         |
| Mobile Phone Number  | The cell phone number for the requester.                                                                                                                                              |         |
| Address              | The physical or mailing address of the requester.                                                                                                                                     |         |
| Reporting Manager ID | The unique identifier for the supervisor of the requester.                                                                                                                            |         |
| Department IDs       | Unique IDs of the departments associated with the requester. Array of ID numbers.                                                                                                     |         |
| Extra Body           | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#requester_attributes) for more information. |         |

### Update Software {#updatesoftware}

Updates an existing software application.

| Input             | Comments                                                                                                                                                                             | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Freshservice connection to use.                                                                                                                                                  |         |
| Application ID    | The unique identifier for the software application.                                                                                                                                  |         |
| Managed By ID     | ID of the user managing the software (must be a user in Freshservice).                                                                                                               |         |
| Additional Fields | Additional optional fields: includes Name, Description, Application Type, Status, Notes, Category, and Source.                                                                       |         |
| Name              | The display name used to identify the software application.                                                                                                                          |         |
| Description       | A summary of the software's purpose and capabilities.                                                                                                                                |         |
| Application Type  | The deployment model of the software (Desktop, SaaS, or Mobile).                                                                                                                     |         |
| Status            | The current lifecycle stage of the software in the organization.                                                                                                                     |         |
| Notes             | Free-text remarks or additional context about the software.                                                                                                                          |         |
| Category          | The classification group for the software (e.g., service desk application).                                                                                                          |         |
| Source            | The origin system from where the software details were imported or updated.                                                                                                          |         |
| Extra Body        | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#software_attributes) for more information. |         |

### Update Ticket {#updateticket}

Updates an existing ticket.

| Input             | Comments                                                                                                                                                                                                                                                                                                                       | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Freshservice connection to use.                                                                                                                                                                                                                                                                                            |         |
| Ticket ID         | ID of the ticket to update.                                                                                                                                                                                                                                                                                                    |         |
| Additional Fields | Additional optional fields: includes Priority, Status, Source, and Bypass Mandatory.                                                                                                                                                                                                                                           |         |
| Priority          | The urgency level that determines the ticket's resolution order.                                                                                                                                                                                                                                                               |         |
| Status            | The current lifecycle stage of the ticket.                                                                                                                                                                                                                                                                                     |         |
| Source            | The channel through which the ticket was created.                                                                                                                                                                                                                                                                              |         |
| Bypass Mandatory  | To bypass mandatory fields check while updating the ticket except for requester_id, source. Any business rules trying to mandate certain fields will also be bypassed. All fields configured as mandatory upon closing or resolving the ticket will be skipped while updating the ticket. This can only be passed by an admin. |         |
| Extra Body        | A JSON object of additional fields not covered by the standard inputs. See [Freshservice API documentation](https://api.freshservice.com/#ticket_attributes) for more information.                                                                                                                                             |         |
