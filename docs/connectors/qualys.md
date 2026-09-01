---
title: Qualys Connector
sidebar_label: Qualys
description: Interact with the Qualys VMDR API to read and push assets, pull TruRisk scores and vulnerability counts, manage tags, launch and track VM scans, and manage remediation tickets.
---

![Qualys](./assets/qualys.png#connector-icon)
[Qualys](https://www.qualys.com/) is a cloud-based security and compliance platform that provides vulnerability management, asset inventory, and risk scoring through its VMDR (Vulnerability Management, Detection, and Response) solution.
This component allows managing assets, tags, VM scans, TruRisk scores, and remediation tickets across the Qualys Gateway and Classic APIs.

## API Documentation

This component was built using the following API references:

- [Qualys VMDR API](https://docs.qualys.com/en/vm/qweb-all-api/) for the Classic API surface
- [Qualys CSAM Asset Search API](https://docs.qualys.com/en/csam/api/asset_host_data/get_host_details_of_all_assets.htm) for the Gateway API surface

## Connections

### Basic Authentication {#qualys}

Authenticate requests to Qualys using username and password.

To authenticate with Qualys, a platform username and password are required along with the API base URLs for the account's assigned pod.

#### Prerequisites

- A Qualys subscription with API access enabled
- A user account with the appropriate role (e.g., Manager, Unit Manager, or Reader depending on the actions used)
- The Gateway and Classic API base URLs for the assigned Qualys platform pod

#### Setup Steps

1. Log in to the Qualys platform
2. Confirm that API access is enabled for the account. API access is controlled by the Qualys subscription administrator
3. Identify the platform pod by visiting the [Platform Identification](https://www.qualys.com/platform-identification) page. Each pod has distinct Gateway and Classic API base URLs
4. Note the **Gateway API URL** (e.g., `https://gateway.qg1.apps.qualys.com`) and the **Classic API URL** (e.g., `https://qualysapi.qg1.apps.qualys.com`) for the assigned pod

#### Configure the Connection

- Enter the **Username** for the Qualys platform account
- Enter the **Password** for that account
- Enter the **Gateway API URL**, the base URL for the Qualys Gateway (CSAM/GAV) API on the assigned pod
- Enter the **Classic API URL**, the base URL for the Qualys Classic (VM/PC) API on the assigned pod

| Input           | Comments                                                                                                                                       | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Username        | Qualys platform username.                                                                                                                      |         |
| Password        | Qualys platform password.                                                                                                                      |         |
| Gateway API URL | Base URL for the Qualys Gateway (CSAM/GAV) API. Find the pod URL at [Platform Identification](https://www.qualys.com/platform-identification). |         |
| Classic API URL | Base URL for the Qualys Classic (VM/PC) API. Find the pod URL at [Platform Identification](https://www.qualys.com/platform-identification).    |         |

## Triggers

### Changed Assets {#changedassets}

Checks for assets that have changed since the last execution on a configured schedule. Uses the Gateway asset search with a last-modified filter and persists the watermark via polling state. Note: echo suppression is NOT built into this trigger. If the flow pushes assets back to Qualys, those writes will re-appear as changes on the next poll. Implement echo suppression at the flow level using outbound push timestamps.

| Input                | Comments                                                                              | Default |
| -------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection           | The Qualys connection to use.                                                         |         |
| Show New Records     | When enabled, assets created since the last poll are included in the trigger output.  | true    |
| Show Updated Records | When enabled, assets modified since the last poll are included in the trigger output. | true    |

## Actions

### Create Tag {#createtag}

Create a new tag in Qualys using the Asset Management & Tagging (QPS) API.

| Input             | Comments                                                                                                 | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Qualys connection to use.                                                                            |         |
| Tag Name          | A descriptive label for the tag, such as 'LS:Environment=Production'.                                    |         |
| Parent Tag ID     | Filter tags by parent tag ID, or set the parent when creating a tag.                                     |         |
| Color             | A hex color code (e.g. #FF5733) used to visually distinguish the tag in the Qualys UI.                   |         |
| Criticality Score | Tag criticality score (1-5). Qualys derives an asset's criticality as the maximum score across its tags. |         |
| Rule Type         | Tag rule type (e.g., STATIC, GROOVY, OS_REGEX, NETWORK_RANGE).                                           |         |
| Rule Text         | Tag rule expression. Required for dynamic rule types (GROOVY, OS_REGEX, etc.).                           |         |

### Delete Remediation Tickets {#deleteremediationtickets}

Bulk-delete remediation tickets by filter. Defaults to dry-run mode — set Dry Run to false to perform the actual deletion. Up to 20,000 tickets per call. Requires Manager or Unit Manager role. There is no undo.

| Input          | Comments                                                                                                                                               | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Qualys connection to use.                                                                                                                          |         |
| Ticket Numbers | Specific ticket numbers to retrieve or act on.                                                                                                         |         |
| Assignee       | Filter tickets assigned to this user's email address.                                                                                                  |         |
| Ticket State   | Filter tickets by their current workflow state.                                                                                                        |         |
| Severity       | Filter tickets by vulnerability severity (1-5).                                                                                                        |         |
| Dry Run        | When true (default), returns the tickets that would be deleted without actually deleting them. Set to false to perform the deletion. There is no undo. | true    |

### Edit Remediation Tickets {#editremediationtickets}

Bulk-edit remediation tickets: reassign, change state, or add comments. Up to 20,000 tickets per call. Requires Manager or Unit Manager role — Scanner or Reader credentials silently fail to act on tickets outside the caller's own account.

| Input          | Comments                                                                                                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Qualys connection to use.                                                                                |         |
| Ticket Numbers | Specific ticket numbers to retrieve or act on.                                                               |         |
| New Assignee   | Reassign selected tickets to this user.                                                                      |         |
| New State      | Change the state of selected tickets. A Closed/Fixed or Closed/Ignored ticket cannot be changed to Resolved. |         |
| Comment        | Add a comment to the selected tickets.                                                                       |         |

### Get Asset {#getasset}

Retrieve a single asset by ID from the Qualys inventory using the Gateway asset search API.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Qualys connection to use.                  |         |
| Asset ID   | The unique identifier for the asset in Qualys. |         |

### Get Remediation Ticket Info {#getremediationticketinfo}

Retrieve detailed information for specific remediation tickets by ticket number or by last-modified timestamp.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Connection     | The Qualys connection to use.                                                    |         |
| Ticket Numbers | Specific ticket numbers to retrieve or act on.                                   |         |
| Since          | Return tickets updated on or after this date/time. Format: YYYY-MM-DDTHH:MM:SSZ. |         |

### Launch VM Scan {#launchscan}

Launch a vulnerability management scan against asset groups or tags. Asynchronous — returns a scan reference immediately, not results. Use List Scans to track status. Requires an existing scan option profile and at least one online scanner appliance or Cloud Agent scoped to the targets.

| Input             | Comments                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Qualys connection to use.                                                              |         |
| Scan Title        | A descriptive name to identify the scan in Qualys.                                         |         |
| Option Profile ID | ID of the scan option profile to use. Select from the Option Profile data source.          |         |
| Scanner Appliance | Name or ID of the scanner appliance. Required when targets are not covered by Cloud Agent. |         |
| Target Tag IDs    | Tag IDs identifying the assets to scan.                                                    |         |
| Asset Group IDs   | Asset group IDs identifying the assets to scan.                                            |         |

### List Asset Risk Data {#listassetriskdata}

Retrieve TruRisk scores, vulnerability counts, and derived risk bands from the Classic VM host list API. This is the only source for TruRisk data — the modern Gateway asset API does not return vulnerability information. Returns the VM (Classic) TruRisk score, not the CSAM figure.

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection | The Qualys connection to use.                                                           |         |
| Fetch All  | When true, automatically fetches all pages of results.                                  | false   |
| Page Size  | The maximum number of results to return per page. The API default applies when omitted. |         |

### List Assets {#listassets}

Search for assets in the Qualys inventory using the Gateway asset search API. Supports keyset cursor pagination and field selection.

| Input               | Comments                                                                                                              | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Qualys connection to use.                                                                                         |         |
| Fetch All           | When true, automatically fetches all pages of results.                                                                | false   |
| Pagination          | Page size and cursor controls for keyset pagination.                                                                  |         |
| Page Size           | The maximum number of results to return per page. The API default applies when omitted.                               |         |
| Last ID             | Start results after this asset ID (keyset cursor). Returned in the previous response when more results are available. |         |
| Last Modified Since | Filter assets modified after this date/time (ISO 8601). Used as an incremental sync watermark.                        |         |
| Include Fields      | Fields to include in the response. When set, only these fields are returned.                                          |         |
| Exclude Fields      | Field names to omit from the response payload, reducing response size.                                                |         |

### List Remediation Tickets {#listremediationtickets}

List remediation tickets from the Classic API. Maximum 1,000 tickets per call — the API truncates silently beyond that limit. The response includes a truncation flag so callers can detect incomplete results.

| Input          | Comments                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Qualys connection to use.                                                                   |         |
| Assignee       | Filter tickets assigned to this user's email address.                                           |         |
| Ticket State   | Filter tickets by their current workflow state.                                                 |         |
| Severity       | Filter tickets by vulnerability severity (1-5).                                                 |         |
| Modified Since | Return tickets modified on or after this date/time. Format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ. |         |

### List Scans {#listscans}

List VM scans from the Classic API. This is the only way to check a launched scan's status — there is no dedicated status endpoint.

| Input          | Comments                                                           | Default |
| -------------- | ------------------------------------------------------------------ | ------- |
| Connection     | The Qualys connection to use.                                      |         |
| Scan Reference | Filter scans by reference ID (e.g., scan/1234567890.12345).        |         |
| Scan State     | Filter scans by execution state. Use Running to find active scans. |         |
| Launched After | Filter scans launched after this date (YYYY-MM-DD).                |         |

### List Tags {#listtags}

Search for tags in Qualys using the Asset Management & Tagging (QPS) API.

| Input         | Comments                                                                                | Default |
| ------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection    | The Qualys connection to use.                                                           |         |
| Fetch All     | When true, automatically fetches all pages of results.                                  | false   |
| Page Size     | The maximum number of results to return per page. The API default applies when omitted. |         |
| Tag Name      | Filter tags by name (contains match).                                                   |         |
| Parent Tag ID | Filter tags by parent tag ID, or set the parent when creating a tag.                    |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to the Qualys API. Select the API plane (Gateway or Classic) since they differ in host, authentication, and content type.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Qualys connection to use.                                                                                                                                                                    |         |
| API Plane               | Select which Qualys API plane to send the request to. Gateway uses JWT auth and JSON. Classic uses Basic auth with X-Requested-With and may return XML.                                          |         |
| URL                     | Input the path only (e.g., /rest/2.0/search/am/asset). The base URL is determined by the selected API plane.                                                                                     |         |
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

### Sync Asset {#syncasset}

Import third-party assets into Qualys by pushing data through the Gateway connector sync endpoint. Provide the connector metadata (including the Connector UUID from the Qualys Connectors UI) and an array of asset objects with identity and core attributes. Qualys runs identification rules to match or create each asset.

| Input              | Comments                                                                                                                                                                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         | The Qualys connection to use.                                                                                                                                                                                                  |         |
| Connector Metadata | Connector identifier, source, request tracking, and asset count details.                                                                                                                                                       |         |
| Connector UUID     | The connector UUID from the Qualys Connectors UI.                                                                                                                                                                              |         |
| Source             | The source identifier for the sync request.                                                                                                                                                                                    |         |
| Request ID         | An optional request identifier for tracking the sync operation.                                                                                                                                                                |         |
| Asset Count        | An optional count of assets being synced.                                                                                                                                                                                      |         |
| Asset Data         | JSON array of asset objects to push to Qualys. Each object should contain identityAttributes (hostName, ipAddress, macAddress, serialNumber, etc.) and coreAttributes (address, biosInfo, softwares, networkInterfaces, etc.). |         |

### Update Asset Tags {#updateassettags}

Add or remove tags on an asset. Consolidates assign and remove into one action. Static tags only — Qualys rejects dynamic tags. When changing a value-bearing tag (e.g., LS:DomainRole=X), remove the old tag before adding the new one to avoid stale entries.

| Input          | Comments                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------- | ------- |
| Connection     | The Qualys connection to use.                                                   |         |
| Asset ID       | The unique identifier for the asset in Qualys.                                  |         |
| Tags to Add    | Tag IDs to assign to the asset. Static tags only — Qualys rejects dynamic tags. |         |
| Tags to Remove | Tag IDs to remove from the asset.                                               |         |

### Update Tag {#updatetag}

Update an existing tag in Qualys. This is a partial update — only provided fields are changed; omitted fields are left untouched.

| Input             | Comments                                                                                                 | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Qualys connection to use.                                                                            |         |
| Tag ID            | The unique identifier for the tag.                                                                       |         |
| Tag Name          | Updated tag name. Omitted fields are left untouched.                                                     |         |
| Color             | A hex color code (e.g. #FF5733) used to visually distinguish the tag in the Qualys UI.                   |         |
| Criticality Score | Tag criticality score (1-5). Qualys derives an asset's criticality as the maximum score across its tags. |         |
