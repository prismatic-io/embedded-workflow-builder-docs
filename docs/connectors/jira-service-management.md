---
title: Jira Service Management Connector
sidebar_label: Jira Service Management
description: Interact with the Jira Service Management API to manage service requests, issues, request types, queues, and approvals.
---

![Jira Service Management](./assets/jira-service-management.png#connector-icon)
Interact with the Jira Service Management API to manage service requests, issues, request types, queues, and approvals.

## Connections

### Basic Authentication {#jsmbasic}

Authenticate using an email address and API token.

| Input    | Comments                                                                                                                      | Default |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- | ------- |
| Username | The Atlassian account email address used for authentication.                                                                  |         |
| API Key  | The Atlassian API token. Generate one at [Atlassian API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens). |         |
| Host     | The Atlassian site hostname (without https://).                                                                               |         |

### OAuth 2.0 {#jsmoauth2}

Authenticate using OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL       | The OAuth 2.0 Authorization URL for Atlassian. The audience parameter is required for cloud APIs.                                                                                | https://auth.atlassian.com/authorize?audience=api.atlassian.com&prompt=consent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Token URL           | The OAuth 2.0 Token URL for Atlassian.                                                                                                                                           | https://auth.atlassian.com/oauth/token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Scopes              | Space-delimited list of OAuth 2.0 scopes for Jira Service Management access.                                                                                                     | read:servicedesk-request write:servicedesk-request manage:servicedesk-customer read:jira-user read:ops-alert:jira-service-management write:ops-alert:jira-service-management delete:ops-alert:jira-service-management read:ops-config:jira-service-management write:ops-config:jira-service-management delete:ops-config:jira-service-management read:cmdb-object:jira write:cmdb-object:jira delete:cmdb-object:jira read:cmdb-schema:jira write:cmdb-schema:jira delete:cmdb-schema:jira read:cmdb-type:jira write:cmdb-type:jira delete:cmdb-type:jira read:cmdb-attribute:jira offline_access |
| Client ID           | OAuth 2.0 Client ID from the Atlassian Developer Console.                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Client Secret       | OAuth 2.0 Client Secret from the Atlassian Developer Console.                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Atlassian Site Name | Optional Atlassian site name or URL to connect to. By default, connects to the first accessible site. Set this when the authenticated account has access to multiple Jira sites. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Ops Integration API Key {#jsmopsgeniekey}

Authenticate with the JSM Ops Integration Events API using a GenieKey integration API key.

| Input   | Comments                                                                                                                  | Default |
| ------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| API Key | GenieKey API key generated from a JSM Ops API integration. Find this under Operations > Integrations in your JSM project. |         |

## Triggers

### New Ops Alerts {#onnewopsalert}

Fetches new alerts created in Jira Service Management Ops on a recurring schedule.

| Input            | Comments                                                                                                  | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Jira Service Management connection to use.                                                            |         |
| Additional Query | Atlassian Ops query terms appended to the built-in createdAt filter. Uses OpsGenie query language syntax. |         |

### New Service Requests {#onnewrequest}

Fetches new service requests created in Jira Service Management on a recurring schedule.

| Input           | Comments                                                                                                               | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                         |         |
| Service Desk ID | Limits new requests to a specific service desk. When omitted, requests from all accessible service desks are returned. |         |

## Actions

### Acknowledge Integration Alert {#acknowledgeintegrationalert}

Acknowledges an alert via the integration API. Returns an asynchronous request ID.

| Input            | Comments                                                                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Jira Service Management connection to use.                                                                                   |         |
| Alert Identifier | The alert identifier — by default the alert ID. To use the tiny ID or alias, set Identifier Type accordingly.                    |         |
| Identifier Type  | Format of the alert identifier. Use `alias` only when the alert is in OPEN status — closed alerts cannot be referenced by alias. | id      |
| User             | Display name of the user performing the action. Used to attribute the alert action in audit history.                             |         |
| Source           | Source of the alert. Defaults to the IP address of the request when omitted.                                                     |         |
| Note             | Additional note posted alongside the alert action.                                                                               |         |

### Acknowledge Ops Alert {#acknowledgeopsalert}

Acknowledges an Ops alert.

| Input            | Comments                                       | Default |
| ---------------- | ---------------------------------------------- | ------- |
| Connection       | The Jira Service Management connection to use. |         |
| Alert Identifier | The identifier of the alert.                   |         |

### Add Attachment {#addattachment}

Attaches a previously uploaded temporary file to a service request.

| Input             | Comments                                                                                                                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key   | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Temporary File ID | The ID of the temporary file previously uploaded via the Upload Attachment action.                                                                |         |

### Add Comment {#addcomment}

Adds a comment to a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Comment Body    | The message to post on the request. Supports plain text and is rendered in the customer portal.                                                   |         |
| Public          | When true, the comment is visible to the customer. When false, the comment is internal only.                                                      | true    |

### Add Customers to Service Desk {#addcustomers}

Adds one or more existing customers to the specified service desk by accountId.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Account IDs     | The Atlassian accountIds to include in the request. Provide a JSON array of string identifiers.                                  |         |

### Add Integration Alert Note {#addintegrationalertnote}

Adds a note to an alert via the integration API. Returns an asynchronous request ID.

| Input            | Comments                                                                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Jira Service Management connection to use.                                                                                   |         |
| Alert Identifier | The alert identifier — by default the alert ID. To use the tiny ID or alias, set Identifier Type accordingly.                    |         |
| Identifier Type  | Format of the alert identifier. Use `alias` only when the alert is in OPEN status — closed alerts cannot be referenced by alias. | id      |
| Note             | The note content to add to the alert.                                                                                            |         |
| User             | Display name of the user performing the action. Used to attribute the alert action in audit history.                             |         |
| Source           | Source of the alert. Defaults to the IP address of the request when omitted.                                                     |         |

### Add Organization to Service Desk {#addservicedeskorganization}

Links an organization to the specified service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source.                    |         |

### Add Users to Organization {#addorganizationusers}

Adds users to an organization by accountId.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Account IDs     | The Atlassian accountIds to include in the request. Provide a JSON array of string identifiers.               |         |

### Approve or Decline Request {#approverequest}

Approves or declines a pending approval on a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Approval ID     | The ID of the approval to respond to. Use the List Approvals action or the Approval data source to find this value.                               |         |
| Decision        | Whether to approve or decline the request.                                                                                                        |         |

### Close Integration Alert {#closeintegrationalert}

Closes (resolves) an alert via the integration API. Returns an asynchronous request ID.

| Input            | Comments                                                                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Jira Service Management connection to use.                                                                                   |         |
| Alert Identifier | The alert identifier — by default the alert ID. To use the tiny ID or alias, set Identifier Type accordingly.                    |         |
| Identifier Type  | Format of the alert identifier. Use `alias` only when the alert is in OPEN status — closed alerts cannot be referenced by alias. | id      |
| User             | Display name of the user performing the action. Used to attribute the alert action in audit history.                             |         |
| Source           | Source of the alert. Defaults to the IP address of the request when omitted.                                                     |         |
| Note             | Additional note posted alongside the alert action.                                                                               |         |

### Close Ops Alert {#closeopsalert}

Closes (resolves) an Ops alert.

| Input            | Comments                                       | Default |
| ---------------- | ---------------------------------------------- | ------- |
| Connection       | The Jira Service Management connection to use. |         |
| Alert Identifier | The identifier of the alert.                   |         |

### Create Asset Object {#createassetobject}

Creates a new Assets/CMDB object of the specified object type with the provided attributes.

| Input             | Comments                                                                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Jira Service Management connection to use.                                                                                             |         |
| Schema ID         | ID of the Assets object schema. Use the Select Schema data source or List Schemas action.                                                  |         |
| Object Type ID    | ID of the object type. Use the Select Object Type data source after picking a schema.                                                      |         |
| Attributes        | JSON array of attribute payloads for this object. Each item has the shape `{ objectTypeAttributeId, objectAttributeValues: [{ value }] }`. |         |
| Additional Fields | Extra request body properties to merge into the payload alongside the standard inputs. Provide a JSON object keyed by field name.          |         |

### Create Customer {#createcustomer}

Creates a portal-only customer account, adds them to the specified service desk, and sends an invite email.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Email           | The email address of the new portal-only customer.                                                                               |         |
| Display Name    | The full name shown for the customer in the portal and on issues they raise.                                                     |         |

### Create Integration Alert {#createintegrationalert}

Ingests a new alert into JSM Ops via the integration API. Returns an asynchronous request ID; use Get Integration Alert Request to check processing status.

| Input       | Comments                                                                                                                                            | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Jira Service Management connection to use.                                                                                                      |         |
| Message     | The alert message that summarises what happened. Truncated to 130 characters by Atlassian.                                                          |         |
| Alias       | Client-defined identifier for deduplication. Subsequent alerts with the same alias and OPEN status are de-duplicated to the first one.              |         |
| Description | Detailed message body. Markdown is supported. Truncated to 15,000 characters by Atlassian.                                                          |         |
| Responders  | JSON array of responder objects to assign. Each item must include `type` (team, user, escalation, schedule) and one of `id`, `name`, or `username`. |         |
| Visible To  | JSON array restricting alert visibility to specific teams or users. Same shape as Responders.                                                       |         |
| Actions     | JSON array of custom action names that can later be invoked on the alert.                                                                           |         |
| Tags        | JSON array of string tags to attach to the alert.                                                                                                   |         |
| Details     | JSON object of arbitrary key/value pairs stored alongside the alert.                                                                                |         |
| Entity      | Optional entity field used to specify which domain the alert is related to (e.g. a server name).                                                    |         |
| Source      | Source of the alert. Defaults to the IP address of the request when omitted.                                                                        |         |
| Priority    | Priority level of the alert. Defaults to P3.                                                                                                        | P3      |
| User        | Display name of the user performing the action. Used to attribute the alert action in audit history.                                                |         |
| Note        | Additional note posted alongside the alert action.                                                                                                  |         |

### Create Ops Alert {#createopsalert}

Creates a new alert in JSM Ops. Returns an asynchronous request ID; use Get Ops Alert to fetch the resulting alert once processed.

| Input             | Comments                                                                                                                               | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Jira Service Management connection to use.                                                                                         |         |
| Message           | Brief alert summary. Truncated to 130 characters by Atlassian.                                                                         |         |
| Description       | Detailed message body. Markdown is supported. Truncated to 15,000 characters by Atlassian.                                             |         |
| Priority          | Priority level of the alert. Defaults to P3.                                                                                           | P3      |
| Alias             | Client-defined identifier for deduplication. Subsequent alerts with the same alias and OPEN status are de-duplicated to the first one. |         |
| Tags              | JSON array of string tags to attach to the alert.                                                                                      |         |
| Additional Fields | Extra request body properties to merge into the payload alongside the standard inputs. Provide a JSON object keyed by field name.      |         |

### Create Organization {#createorganization}

Creates a new organization.

| Input             | Comments                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection        | The Jira Service Management connection to use.                                            |         |
| Organization Name | A unique display label for the organization, shown to agents and customers in the portal. |         |

### Create Portal-Only Customer {#createportalonlycustomer}

Creates a portal-only customer account without linking them to a service desk.

| Input        | Comments                                                                     | Default |
| ------------ | ---------------------------------------------------------------------------- | ------- |
| Connection   | The Jira Service Management connection to use.                               |         |
| Email        | The email address of the new portal-only customer.                           |         |
| Display Name | The full name shown for the customer in the portal and on issues they raise. |         |

### Create Request {#createrequest}

Creates a new service request in the specified service desk.

| Input              | Comments                                                                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Jira Service Management connection to use.                                                                                    |         |
| Service Desk ID    | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value.  |         |
| Request Type ID    | The ID of the request type to create the request as. Use the List Request Types action or the Request Type data source.           |         |
| Summary            | A brief, one-line subject shown in the portal and issue list.                                                                     |         |
| Description        | Additional detail about the request. Displayed on the request view for agents and customers.                                      |         |
| Field Values       | JSON object of additional request field values required by the request type. Keys are field IDs.                                  |         |
| Raise On Behalf Of | The accountId of the customer to raise the request on behalf of. If omitted, the request is raised by the authenticated user.     |         |
| Additional Fields  | Extra request body properties to merge into the payload alongside the standard inputs. Provide a JSON object keyed by field name. |         |

### Delete Asset Object {#deleteassetobject}

Deletes an Assets/CMDB object by ID.

| Input      | Comments                                                                                                 | Default |
| ---------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jira Service Management connection to use.                                                           |         |
| Object ID  | Numeric ID of the Assets object (e.g. 425). Distinct from the human-readable object key (e.g. ITAM-425). |         |

### Delete Ops Alert {#deleteopsalert}

Deletes an Ops alert.

| Input            | Comments                                       | Default |
| ---------------- | ---------------------------------------------- | ------- |
| Connection       | The Jira Service Management connection to use. |         |
| Alert Identifier | The identifier of the alert.                   |         |

### Delete Organization {#deleteorganization}

Deletes an organization by ID.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |

### Delete Organization Property {#deleteorganizationproperty}

Removes a custom property from an organization by key.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Property Key    | The key identifying the custom property to store against the organization.                                    |         |

### Get Asset Object {#getassetobject}

Returns a single Assets/CMDB object by ID.

| Input      | Comments                                                                                                 | Default |
| ---------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jira Service Management connection to use.                                                           |         |
| Object ID  | Numeric ID of the Assets object (e.g. 425). Distinct from the human-readable object key (e.g. ITAM-425). |         |

### Get Asset Schema {#getassetschema}

Returns a single Assets/CMDB object schema by ID.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | The Jira Service Management connection to use.                                            |         |
| Schema ID  | ID of the Assets object schema. Use the Select Schema data source or List Schemas action. |         |

### Get Integration Alert Request {#getintegrationalertrequest}

Returns the processing status of an asynchronous Integration Events request by ID.

| Input      | Comments                                                                   | Default |
| ---------- | -------------------------------------------------------------------------- | ------- |
| Connection | The Jira Service Management connection to use.                             |         |
| Request ID | The async request ID returned by a previous Ops Integration Events action. |         |

### Get Ops Alert {#getopsalert}

Returns a single Ops alert by identifier.

| Input            | Comments                                       | Default |
| ---------------- | ---------------------------------------------- | ------- |
| Connection       | The Jira Service Management connection to use. |         |
| Alert Identifier | The identifier of the alert.                   |         |

### Get Ops On-Call {#getopsoncall}

Returns the recipients currently on-call for the specified Ops schedule.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Schedule        | The ID of the schedule.                                                                                       |         |
| Flatten On-Call | When true, returns only the user IDs of the on-call participants. When false, returns the full rotation tree. | false   |
| Reference Date  | ISO-8601 timestamp at which to evaluate the on-call list. Defaults to the current time.                       |         |

### Get Ops Schedule {#getopsschedule}

Returns a single Ops schedule by ID.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Jira Service Management connection to use. |         |
| Schedule   | The ID of the schedule.                        |         |

### Get Organization {#getorganization}

Returns a single organization by ID.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |

### Get Organization Property {#getorganizationproperty}

Returns the value of a single organization property.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Property Key    | The key identifying the custom property to store against the organization.                                    |         |

### Get Request {#getrequest}

Returns a single service request by issue ID or key.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |

### Get Request Type {#getrequesttype}

Returns a single request type for a service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Request Type ID | The ID of the request type to create the request as. Use the List Request Types action or the Request Type data source.          |         |

### Get Service Desk {#getservicedesk}

Returns a single service desk by ID.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |

### List Approvals {#listapprovals}

Returns the approvals for a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                                        | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                                        | 0       |
| Limit           | The maximum number of items to return per page.                                                                                                   |         |

### List Asset Schemas {#listassetschemas}

Returns all Assets/CMDB object schemas in the workspace.

| Input                       | Comments                                                                                                                                  | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The Jira Service Management connection to use.                                                                                            |         |
| Fetch All                   | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                                | false   |
| Start At                    | Index of the first result to return.                                                                                                      | 0       |
| Max Results                 | Maximum number of results per page.                                                                                                       | 50      |
| Additional Query Parameters | Extra query string parameters to merge into the request URL alongside the standard inputs. Provide a JSON object keyed by parameter name. |         |

### List Comments {#listcomments}

Returns comments for a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                                        | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                                        | 0       |
| Limit           | The maximum number of items to return per page.                                                                                                   |         |

### List Customers {#listcustomers}

Returns customers associated with a service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Ops Alerts {#listopsalerts}

Returns alerts in JSM Ops, optionally filtered by query.

| Input                       | Comments                                                                                                                                  | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The Jira Service Management connection to use.                                                                                            |         |
| Query                       | Atlassian Ops query string used to filter the alert list (e.g. `status: open AND priority: P1`).                                          |         |
| Sort                        | Field to sort the alerts by (e.g. `createdAt`, `priority`).                                                                               |         |
| Order                       | Sort order applied alongside the Sort field.                                                                                              | desc    |
| Fetch All                   | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                                | false   |
| Offset                      | Index of the first result to return.                                                                                                      | 0       |
| Size                        | Maximum number of results per page (Atlassian max: 100).                                                                                  | 20      |
| Additional Query Parameters | Extra query string parameters to merge into the request URL alongside the standard inputs. Provide a JSON object keyed by parameter name. |         |

### List Ops Schedules {#listopsschedules}

Returns all on-call schedules configured in JSM Ops.

| Input                       | Comments                                                                                                                                  | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The Jira Service Management connection to use.                                                                                            |         |
| Fetch All                   | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                                | false   |
| Query                       | Filters schedules by name (substring match).                                                                                              |         |
| Offset                      | Index of the first result to return.                                                                                                      | 0       |
| Size                        | Maximum number of results per page (Atlassian max: 50).                                                                                   | 25      |
| Additional Query Parameters | Extra query string parameters to merge into the request URL alongside the standard inputs. Provide a JSON object keyed by parameter name. |         |

### List Organization Properties {#listorganizationproperties}

Returns the property keys stored against an organization.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |

### List Organizations {#listorganizations}

Returns all organizations in the Jira Service Management instance.

| Input      | Comments                                                                                                   | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jira Service Management connection to use.                                                             |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true. | false   |
| Start      | The starting index of the returned items. First item is 0.                                                 | 0       |
| Limit      | The maximum number of items to return per page.                                                            |         |

### List Organization Users {#listorganizationusers}

Returns users associated with an organization.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.    | false   |
| Start           | The starting index of the returned items. First item is 0.                                                    | 0       |
| Limit           | The maximum number of items to return per page.                                                               |         |

### List Queue Issues {#listqueueissues}

Returns the issues in a service desk queue.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Queue ID        | The unique identifier of the queue. Use the List Queues action or the Queue data source.                                         |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Queues {#listqueues}

Returns queues for a service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Requests {#listrequests}

Returns service requests for the given service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Request Types {#listrequesttypes}

Returns all request types for a service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Schema Object Types {#listschemaobjecttypes}

Returns all object types defined in the specified Assets/CMDB object schema.

| Input                       | Comments                                                                                                                                  | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The Jira Service Management connection to use.                                                                                            |         |
| Schema ID                   | ID of the Assets object schema. Use the Select Schema data source or List Schemas action.                                                 |         |
| Additional Query Parameters | Extra query string parameters to merge into the request URL alongside the standard inputs. Provide a JSON object keyed by parameter name. |         |

### List Service Desk Organizations {#listservicedeskorganizations}

Returns organizations linked to a service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Service Desks {#listservicedesks}

Returns all service desks in the Jira Service Management instance.

| Input      | Comments                                                                                                   | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jira Service Management connection to use.                                                             |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true. | false   |
| Start      | The starting index of the returned items. First item is 0.                                                 | 0       |
| Limit      | The maximum number of items to return per page.                                                            |         |

### List SLA Information {#listsla}

Returns SLA information for a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                                        | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                                        | 0       |
| Limit           | The maximum number of items to return per page.                                                                                                   |         |

### List Transitions {#listtransitions}

Returns available status transitions for a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                                        | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                                        | 0       |
| Limit           | The maximum number of items to return per page.                                                                                                   |         |

### Raw Request {#rawrequest}

Send raw HTTP request to the Jira Service Management REST API.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Jira Service Management connection to use.                                                                                                                                                   |         |
| URL                     | Input the path only (e.g., /servicedesk). The base URL is resolved from the connection automatically.                                                                                            |         |
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

### Remove Customers from Service Desk {#removecustomers}

Removes one or more customers from the specified service desk by accountId.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Account IDs     | The Atlassian accountIds to include in the request. Provide a JSON array of string identifiers.                                  |         |

### Remove Organization from Service Desk {#removeservicedeskorganization}

Unlinks an organization from the specified service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source.                    |         |

### Remove Users from Organization {#removeorganizationusers}

Removes users from an organization by accountId.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Account IDs     | The Atlassian accountIds to include in the request. Provide a JSON array of string identifiers.               |         |

### Revoke Portal-Only Access {#revokeportalaccess}

Revokes a user's portal-only access so they can no longer log in as a portal customer.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Jira Service Management connection to use. |         |
| Account ID | The Atlassian accountId of the customer.       |         |

### Search Asset Objects {#searchassetobjects}

Searches Assets/CMDB objects using AQL (Asset Query Language).

| Input              | Comments                                                                                                       | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Jira Service Management connection to use.                                                                 |         |
| AQL Query          | Asset Query Language expression used to filter objects (e.g. `objectType = "Computer" AND Name LIKE "web-*"`). |         |
| Include Attributes | When true, full attribute values are returned for each object. Disable to reduce payload size.                 | true    |
| Start At           | Index of the first result to return.                                                                           | 0       |
| Max Results        | Maximum number of results per page.                                                                            | 50      |

### Set Organization Property {#setorganizationproperty}

Stores a custom JSON value against an organization under the specified property key.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Property Key    | The key identifying the custom property to store against the organization.                                    |         |
| Property Value  | JSON value to store for the property. Can be any valid JSON (object, array, string, number, or boolean).      |         |

### Snooze Ops Alert {#snoozeopsalert}

Snoozes an Ops alert until the supplied ISO-8601 timestamp.

| Input            | Comments                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- |
| Connection       | The Jira Service Management connection to use.                                   |         |
| Alert Identifier | The identifier of the alert.                                                     |         |
| Snooze Until     | ISO-8601 timestamp until which the alert is snoozed (e.g. 2026-05-04T18:30:00Z). |         |

### Transition Request {#transitionrequest}

Transitions a service request to a new status.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Transition ID   | The ID of the transition to apply. Use the List Transitions action or the Transition data source to find available transitions.                   |         |
| Comment         | A message posted on the request when the transition is executed. Visible to the customer by default.                                              |         |

### Update Asset Object {#updateassetobject}

Updates an existing Assets/CMDB object with the supplied attributes.

| Input             | Comments                                                                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Jira Service Management connection to use.                                                                                             |         |
| Object ID         | Numeric ID of the Assets object (e.g. 425). Distinct from the human-readable object key (e.g. ITAM-425).                                   |         |
| Object Type ID    | ID of the object type. Use the Select Object Type data source after picking a schema.                                                      |         |
| Attributes        | JSON array of attribute payloads for this object. Each item has the shape `{ objectTypeAttributeId, objectAttributeValues: [{ value }] }`. |         |
| Additional Fields | Extra request body properties to merge into the payload alongside the standard inputs. Provide a JSON object keyed by field name.          |         |

### Upload Temporary File {#uploadtemporaryfile}

Uploads a file as a temporary attachment for later use with Add Attachment.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| File Contents   | The contents of the file to upload. Can be a string or binary data (e.g., image or PDF) from a previous step.                    |         |
| File Name       | The filename to associate with the uploaded attachment, including the extension (e.g., report.pdf).                              |         |
