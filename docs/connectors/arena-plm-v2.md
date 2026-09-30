---
title: Arena Solutions Connector
sidebar_label: Arena Solutions
description: Connect and sync data with Arena Solutions PLM system
---

![Arena Solutions](./assets/arena-plm-v2.png#connector-icon)
Arena, a PTC business, is a cloud-native product lifecycle management (PLM) and quality management system (QMS) platform that unifies product information, people, and processes to accelerate product design, development, and delivery. Learn more at [Arena Solutions](https://www.arenasolutions.com/).

This component provides the ability to manage items and their bills of materials, route change requests and engineering changes through review and approval, run quality processes and record step decisions, and work with the files, suppliers, and training records attached to product data in Arena.

## API Documentation

This component was built using the [Arena Developer & API Help Center](https://ptc-arena.github.io/arena-dev-help/).

## Connections

### API Key {#arenaapikey}

Authenticate requests using an API key.

Authenticate requests to Arena using an API session key.

#### Prerequisites

- An Arena account with API access enabled.
- An API session ID generated from the Arena instance.

#### Setup Steps

1. Contact `arena-sales@ptc.com` to activate REST API access for the account. Access is not enabled by default, and each account carries a request limit per 24-hour period.
2. Confirm the account used for the integration is an Employee or Partner user. Supplier users cannot access the Arena REST API.
3. Obtain an API session ID by sending the account's username and password to Arena's [Log In request](https://ptc-arena.github.io/arena-dev-help/get-started/connecting/). The response returns the session ID as `arena_session_id`.
4. Copy the `arena_session_id` value into the connection.

A session expires 90 minutes after its last action. This connection re-authenticates automatically when Arena rejects a request, so a long-running integration does not need the session refreshed by hand.

#### Configure the Connection

- **Arena Environment**: Select the regional Arena endpoint (North America, GovCloud, Europe, United Kingdom, or China), or choose Custom URL to supply a specific base URL.
- **Custom Arena URL**: The API base URL, used only when Arena Environment is set to Custom URL. Must use `https`.
- **API Key (arena_session_id)**: The Arena API session ID used to authenticate requests.
- **Request Timeout**: Optional request timeout in milliseconds.

| Input                      | Comments                                                                               | Default                        |
| -------------------------- | -------------------------------------------------------------------------------------- | ------------------------------ |
| Arena Environment          | Select the Arena environment region, or choose Custom URL to enter a custom URL.       | https://api.arenasolutions.com |
| Custom Arena URL           | The custom Arena API base URL, used only when 'Custom URL' is selected above.          |                                |
| API Key (arena_session_id) | The Arena API session ID for authentication. This is obtained from the Arena instance. |                                |
| Request Timeout            | The request timeout in milliseconds (default: 30 seconds).                             | 30000                          |

### OAuth 2.0 Client Credentials {#arenaoauth}

Authenticate using OAuth 2.0 Client Credentials.

Authenticate to Arena using the OAuth 2.0 Client Credentials grant. The token exchange is handled automatically: supply the token endpoint and credentials, and the access token is requested and refreshed without further configuration.

#### Prerequisites

- An Arena machine user with API access enabled.
- OAuth 2.0 client credentials (Client ID and Client Secret) issued by Arena for that machine user.
- The token endpoint URL supplied by Arena for the target environment.

#### Setup Steps

1. Contact `arena-sales@ptc.com` to activate REST API access for the account. Access is not enabled by default, and each account carries a request limit per 24-hour period.
2. Ask an Arena coach or Arena customer support to add a Machine User to the account. OAuth credentials are issued to that user, and the workspace it is granted when created is the workspace every request targets.
3. In Arena, go to **Workspace Settings > OAuth Applications** and click **New OAuth Application**. Refer to Arena's [OAuth2 guide](https://ptc-arena.github.io/arena-dev-help/oauth/oauth_guide/) for details.
4. Give the application a name and a description, then click **Create**.
5. Copy the generated **Client ID** and **Client Secret** into the connection, and store them in a secure vault.
6. Enter the token endpoint URL Arena supplies alongside those credentials as the **Token URL**.

Requests target the workspace the machine user was granted when it was created, so no workspace needs to be configured here. Arena recommends giving a machine user access to a single workspace.

No scopes are requested for this flow, so the Scopes field stays empty.

#### Configure the Connection

- **Arena Environment**: Select the regional Arena endpoint (North America, GovCloud, Europe, United Kingdom, or China), or choose Custom URL to supply a specific base URL.
- **Custom Arena URL**: The API base URL, used only when Arena Environment is set to Custom URL. Must use `https`.
- **Token URL**: The OAuth 2.0 token endpoint that issues the access token, supplied by Arena along with the client credentials.
- **Client ID**: The OAuth client identifier issued by Arena.
- **Client Secret**: The OAuth client secret issued by Arena.
- **Request Timeout**: The request timeout in milliseconds. Defaults to 30 seconds.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                                                                                                                   | Default                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| Arena Environment | Select the Arena environment region, or choose Custom URL to enter a custom URL.                                                           | https://api.arenasolutions.com |
| Custom Arena URL  | The custom Arena API base URL, used only when 'Custom URL' is selected above.                                                              |                                |
| Token URL         | The OAuth 2.0 token endpoint that issues the access token. Arena supplies this URL along with the client credentials for the machine user. |                                |
| Client ID         | The OAuth client ID issued by Arena for the machine user. The machine user's workspace determines which workspace requests target.         |                                |
| Client Secret     | The OAuth client secret issued by Arena for the machine user.                                                                              |                                |
| Request Timeout   | The request timeout in milliseconds (default: 30 seconds).                                                                                 | 30000                          |

### Username and Password {#arenausernamepassword}

Authenticate using a username, password, and workspace ID.

Authenticate to Arena using an account email and password, optionally scoped to a specific workspace. Creating a dedicated integration user is recommended.

#### Prerequisites

- An Arena account with API access enabled.
- The account email and password used to sign in.
- Optionally, the ID of the workspace to log into.

#### Setup Steps

1. Contact `arena-sales@ptc.com` to activate REST API access for the account. Access is not enabled by default, and each account carries a request limit per 24-hour period.
2. Create a dedicated integration user rather than reusing a person's login, so the integration keeps working when that person's password changes. The user must be an Employee or Partner; Supplier users cannot access the Arena REST API.
3. Note the email address and password of that user.
4. Optionally note the ID of the workspace the integration should target. When omitted, Arena logs into the account's current or last-used workspace.

Arena exchanges these credentials for a session that expires 90 minutes after its last action. This connection re-authenticates automatically, so no manual refresh is required.

#### Configure the Connection

- **Arena Environment**: Select the regional Arena endpoint (North America, GovCloud, Europe, United Kingdom, or China), or choose Custom URL to supply a specific base URL.
- **Custom Arena URL**: The API base URL, used only when Arena Environment is set to Custom URL. Must use `https`.
- **Email/Username**: The Arena account email or username used to sign in.
- **Password**: The Arena account password used to sign in.
- **Workspace ID**: Optional. The Arena workspace ID to log into. If omitted, the account's current or last-used workspace is used.
- **Request Timeout**: Optional request timeout in milliseconds.

| Input             | Comments                                                                                                       | Default                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Arena Environment | Select the Arena environment region, or choose Custom URL to enter a custom URL.                               | https://api.arenasolutions.com |
| Custom Arena URL  | The custom Arena API base URL, used only when 'Custom URL' is selected above.                                  |                                |
| Email/Username    | The Arena account email address or username for authentication.                                                |                                |
| Password          | The Arena account password for authentication.                                                                 |                                |
| Workspace ID      | The Arena workspace ID to log into. If not specified, will log into the user's current or last used workspace. |                                |
| Request Timeout   | The request timeout in milliseconds (default: 30 seconds).                                                     | 30000                          |

## Triggers

### New Events {#pollchangestrigger}

Checks an Arena outbound integration for events created since the last recurrence, delivering them as a single result or, with batching enabled, as one execution per event. Arena events are immutable, so only newly created events are reported.

| Input                 | Comments                                                                                                                                                                                                                                                 | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Arena connection to use.                                                                                                                                                                                                                             |         |
| Integration           | The outbound integration whose event feed is polled. Arena publishes events per integration, so one must be configured in Arena before this trigger can run.                                                                                             |         |
| Reconciliation Status | Restricts each recurrence to events in one reconciliation state. Leave unset to receive events regardless of whether Arena has marked them reconciled.                                                                                                   | any     |
| Look-back Date        | How far back the initial sync reaches, as an ISO 8601 date/time. Leave it unset and the first recurrence records its position without reporting anything, so only events created after that point are delivered. Consulted on the first recurrence only. |         |

## Actions

### Add Evaluation Issue Response {#addevaluationissueresponse}

Add a response to an evaluation issue in Arena PLM system.

| Input        | Comments                                             | Default |
| ------------ | ---------------------------------------------------- | ------- |
| Connection   | The Arena connection to use.                         |         |
| Request GUID | GUID of the request containing the evaluation issue. |         |
| Issue GUID   | GUID of the evaluation issue to respond to.          |         |
| Response     | Response to the evaluation issue.                    |         |

### Add File to Training Plan {#addfiletotrainingplan}

Add a file to a training plan.

| Input                      | Comments                                                   | Default |
| -------------------------- | ---------------------------------------------------------- | ------- |
| Connection                 | The Arena connection to use.                               |         |
| Training GUID              | GUID of the training plan.                                 |         |
| File GUID                  | GUID of the file to add to the training plan.              |         |
| Latest Edition Association | When true, the file is associated with its latest edition. | false   |

### Add Item to Change {#additemtochange}

Adds an item to a change with a specific GUID in Arena PLM system.

| Input                          | Comments                                                                                                     | Default |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                     | The Arena connection to use.                                                                                 |         |
| Change GUID                    | GUID of the change to update.                                                                                |         |
| New Item Revision GUID         | GUID of the working revision of the Item being added.                                                        |         |
| New Revision Number            | New revision number (can be omitted if a next revision is available in workspaces with Revision Sequences).  |         |
| New Lifecycle Phase GUID       | GUID of the new lifecycle phase.                                                                             |         |
| Material Effectivity Date Time | Material effectivity date and time (ISO format).                                                             |         |
| Retraining Required            | Whether retraining is required for this change.                                                              |         |
| Disposition Attribute JSON     | Provide disposition attributes as raw JSON array. Each attribute should have 'guid' and 'value' properties.  |         |
| Files View JSON                | Optional Files view control object with 'includedInThisChange' (boolean) and 'notes' (string) properties.    |         |
| Sourcing View JSON             | Optional Sourcing view control object with 'includedInThisChange' (boolean) and 'notes' (string) properties. |         |
| Specs View JSON                | Optional Specs view control object with 'includedInThisChange' (boolean) and 'notes' (string) properties.    |         |
| BOM View JSON                  | Optional BOM view control object with 'includedInThisChange' (boolean) and 'notes' (string) properties.      |         |

### Add Item to Request {#additemtorequest}

Add an item to a request in Arena PLM system.

| Input        | Comments                                              | Default |
| ------------ | ----------------------------------------------------- | ------- |
| Connection   | The Arena connection to use.                          |         |
| Request GUID | GUID of the request to add the item to.               |         |
| Item GUID    | GUID of the item to add to the request.               |         |
| Notes        | Optional notes about adding this item to the request. |         |

### Add Item to Training Plan {#additemtotrainingplan}

Add an item to a training plan.

| Input         | Comments                                      | Default |
| ------------- | --------------------------------------------- | ------- |
| Connection    | The Arena connection to use.                  |         |
| Training GUID | GUID of the training plan.                    |         |
| Item GUID     | GUID of the item to add to the training plan. |         |

### Add Quality Process to Training Plan {#addqualitytotrainingplan}

Add a quality process to a training plan.

| Input                | Comments                                                     | Default |
| -------------------- | ------------------------------------------------------------ | ------- |
| Connection           | The Arena connection to use.                                 |         |
| Training GUID        | GUID of the training plan.                                   |         |
| Quality Process GUID | GUID of the quality process to add.                          |         |
| Step GUID            | Optional GUID of a specific step within the quality process. |         |

### Add Quality Step Approver {#addqualitystepapprover}

Add decision makers to a quality process sign-off step.

| Input                | Comments                                                                       | Default |
| -------------------- | ------------------------------------------------------------------------------ | ------- |
| Connection           | The Arena connection to use.                                                   |         |
| Quality Process GUID | The GUID of the quality process containing the step.                           |         |
| Step GUID            | The GUID of the quality process sign-off step.                                 |         |
| Decision Type        | The type of decision requirement for the approver.                             |         |
| User GUID            | The GUID of the user to add as approver (either user or group required).       |         |
| Group GUID           | The GUID of the user group to add as approver (either user or group required). |         |

### Add Requirement Child {#addrequirementchild}

Add a child requirement to a requirement.

| Input                  | Comments                                  | Default |
| ---------------------- | ----------------------------------------- | ------- |
| Connection             | The Arena connection to use.              |         |
| Requirement GUID       | The unique identifier of the requirement. |         |
| Child Requirement GUID | The GUID of the child requirement.        |         |

### Add Requirement File {#addrequirementfile}

Attach a file to a requirement.

| Input            | Comments                                  | Default |
| ---------------- | ----------------------------------------- | ------- |
| Connection       | The Arena connection to use.              |         |
| Requirement GUID | The unique identifier of the requirement. |         |
| File GUID        | The unique identifier (GUID) of the file. |         |

### Add Requirement Quality {#addrequirementquality}

Link a quality process to a requirement.

| Input                | Comments                                                          | Default |
| -------------------- | ----------------------------------------------------------------- | ------- |
| Connection           | The Arena connection to use.                                      |         |
| Requirement GUID     | The unique identifier of the requirement.                         |         |
| Quality Process GUID | The GUID of the quality process to link.                          |         |
| Quality Step GUID    | The GUID of the specific quality step within the quality process. |         |

### Add Requirement Ticket {#addrequirementticket}

Link a ticket to a requirement.

| Input            | Comments                                           | Default |
| ---------------- | -------------------------------------------------- | ------- |
| Connection       | The Arena connection to use.                       |         |
| Requirement GUID | The unique identifier of the requirement.          |         |
| Ticket GUID      | The GUID of the ticket to link to the requirement. |         |

### Add Requirement Trace {#addrequirementtrace}

Add a new trace link to a requirement.

| Input                         | Comments                                                                        | Default |
| ----------------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection                    | The Arena connection to use.                                                    |         |
| Requirement GUID              | The unique identifier of the requirement.                                       |         |
| Trace Direction               | Direction of the trace link (UPSTREAM or DOWNSTREAM).                           |         |
| Trace Object Type             | The type of object being traced (ITEM or REQUIREMENT).                          |         |
| Relationship Type GUID        | The GUID of the trace relationship type.                                        |         |
| Trace Item GUID               | GUID of the item to link via trace (use when objectType is ITEM).               |         |
| Trace Target Requirement GUID | GUID of the requirement to link via trace (use when objectType is REQUIREMENT). |         |

### Add Ticket Change {#addticketchange}

Link a change to a ticket in Arena PLM system.

| Input       | Comments                        | Default |
| ----------- | ------------------------------- | ------- |
| Connection  | The Arena connection to use.    |         |
| Ticket GUID | The GUID of the ticket.         |         |
| Change GUID | The GUID of the change to link. |         |

### Add Ticket File {#addticketfile}

Link a file to a ticket in Arena PLM system.

| Input          | Comments                                        | Default |
| -------------- | ----------------------------------------------- | ------- |
| Connection     | The Arena connection to use.                    |         |
| Ticket GUID    | The GUID of the ticket.                         |         |
| File GUID      | The GUID of the file to link.                   |         |
| Edition Number | Specific edition number of the file (optional). |         |

### Add Ticket Item {#addticketitem}

Link an item to a ticket in Arena PLM system.

| Input                       | Comments                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection                  | The Arena connection to use.                                                               |         |
| Ticket GUID                 | The GUID of the ticket.                                                                    |         |
| Item GUID                   | The GUID of the item to link.                                                              |         |
| Latest Revision Association | When true, always associates the latest revision of the item rather than a fixed revision. | false   |

### Add Ticket Quality Process {#addticketqualityprocess}

Link a quality process to a ticket in Arena PLM system.

| Input                | Comments                                                     | Default |
| -------------------- | ------------------------------------------------------------ | ------- |
| Connection           | The Arena connection to use.                                 |         |
| Ticket GUID          | The GUID of the ticket.                                      |         |
| Quality Process GUID | The GUID of the quality process to link.                     |         |
| Step GUID            | Optional GUID of a specific step within the quality process. |         |

### Add Ticket Reference {#addticketreference}

Link another ticket as a reference to a ticket in Arena PLM system.

| Input                  | Comments                             | Default |
| ---------------------- | ------------------------------------ | ------- |
| Connection             | The Arena connection to use.         |         |
| Ticket GUID            | The GUID of the ticket.              |         |
| Referenced Ticket GUID | The GUID of the ticket to reference. |         |

### Add User to Training Plan {#addusertotrainingplan}

Add a user to a training plan.

| Input         | Comments                                                      | Default |
| ------------- | ------------------------------------------------------------- | ------- |
| Connection    | The Arena connection to use.                                  |         |
| Training GUID | GUID of the training plan.                                    |         |
| User GUID     | GUID of the user to add to the training plan.                 |         |
| Due Date      | Optional due date for the user to complete the training plan. |         |

### Attach File to Request {#attachfiletorequest}

Attach a new file to a request in Arena PLM system.

| Input        | Comments                                   | Default |
| ------------ | ------------------------------------------ | ------- |
| Connection   | The Arena connection to use.               |         |
| Request GUID | GUID of the request to attach the file to. |         |
| File GUID    | GUID of the file to attach to the request. |         |

### Change Evaluation Issue Status {#changeevaluationissuestatus}

Change the status of an evaluation issue in Arena PLM system.

| Input        | Comments                                             | Default |
| ------------ | ---------------------------------------------------- | ------- |
| Connection   | The Arena connection to use.                         |         |
| Request GUID | GUID of the request containing the evaluation issue. |         |
| Issue GUID   | GUID of the evaluation issue to change status for.   |         |
| Status       | New status for the evaluation issue.                 |         |
| Response     | Optional response when changing the issue status.    |         |

### Change File Checkout Status {#changefilecheckoutstatus}

Check a file edition in or out by changing its checkout status.

| Input              | Comments                                                                                 | Default |
| ------------------ | ---------------------------------------------------------------------------------------- | ------- |
| Connection         | The Arena connection to use.                                                             |         |
| File Checkout Data | File checkout data including file GUID, action (checkin/checkout), and optional content. |         |
| File Content       | The file content to upload during checkin (binary format).                               |         |

### Change Item Lifecycle Phase {#changeitemlifecyclephase}

Release a new revision of an item to a target lifecycle phase (Design or Production).

| Input                       | Comments                                                                                                        | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The Arena connection to use.                                                                                    |         |
| Item GUID                   | The GUID of the item.                                                                                           |         |
| Target Lifecycle Phase GUID | The GUID of the target lifecycle phase to transition the item to.                                               |         |
| Revision Number             | Optional revision number for the new revision (if not auto-generated).                                          |         |
| Notes                       | Optional notes for the lifecycle phase change.                                                                  |         |
| Proceed on Notice           | When true, the request proceeds even if it generates notices, which are warnings that do not prevent execution. | false   |

### Change Lifecycle Status {#changelifecyclestatus}

Move a change to a new lifecycle phase by updating its status in Arena PLM system.

| Input                              | Comments                                                              | Default |
| ---------------------------------- | --------------------------------------------------------------------- | ------- |
| Connection                         | The Arena connection to use.                                          |         |
| Change GUID                        | GUID of the change to update.                                         |         |
| Target Status                      | The target lifecycle status to move the change to.                    |         |
| From Status                        | The current lifecycle status of the change (for validation).          |         |
| Comment                            | Optional comment for the lifecycle status change.                     |         |
| Administrators                     | Array of user GUIDs to assign as administrators.                      |         |
| Administrator Configuration Needed | When true, administrator configuration is needed for this transition. | false   |
| Implementation Status              | Implementation status object with guid and value properties.          |         |

### Change Quality Process Status {#changequalityprocessstatus}

Change the status of a quality process or one of its steps in Arena PLM system. Supports both quality process level status changes and individual step status changes.

| Input                | Comments                                                                               | Default |
| -------------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection           | The Arena connection to use.                                                           |         |
| Request Type         | Choose whether to change the overall quality process status or a specific step status. |         |
| Quality Process GUID | The GUID of the quality process.                                                       |         |
| Status               | The new status for the quality process (required for Quality Process Status Change).   |         |
| Step GUID            | The GUID of the quality process step (required for Quality Step Workflow).             |         |
| Comment              | Optional comment for the status change.                                                |         |

### Change Request Status {#changerequeststatus}

Change the lifecycle status of a request in Arena PLM system.

| Input                    | Comments                                                         | Default |
| ------------------------ | ---------------------------------------------------------------- | ------- |
| Connection               | The Arena connection to use.                                     |         |
| Request GUID             | GUID of the request to change status for.                        |         |
| New Status               | New lifecycle status for the request.                            |         |
| From Status              | Current status of the request (optional).                        |         |
| Comment                  | Optional comment about the status change.                        |         |
| Resolution Notes         | Notes about the resolution (typically used when closing).        |         |
| Resolution Code          | Code indicating the type of resolution.                          |         |
| Deferral Code            | Code indicating the reason for deferral.                         |         |
| Defer Deadline Date Time | ISO 8601 datetime when the deferred request should be revisited. |         |

### Change Requirement Status {#changerequirementstatus}

Change the status of a requirement.

| Input            | Comments                                  | Default |
| ---------------- | ----------------------------------------- | ------- |
| Connection       | The Arena connection to use.              |         |
| Requirement GUID | The unique identifier of the requirement. |         |
| Status           | The new status value for the requirement. |         |

### Change Ticket Status {#changeticketstatus}

Change the status of a ticket in Arena PLM system.

| Input       | Comments                                                         | Default |
| ----------- | ---------------------------------------------------------------- | ------- |
| Connection  | The Arena connection to use.                                     |         |
| Ticket GUID | The GUID of the ticket.                                          |         |
| Status      | New status for the ticket (NOT_STARTED, IN_PROGRESS, COMPLETED). |         |
| Notes       | Optional notes for the status change.                            |         |

### Change Training Plan Status {#changetrainingplanstatus}

Change the status of a training plan (OPEN/CLOSED).

| Input         | Comments                                    | Default |
| ------------- | ------------------------------------------- | ------- |
| Connection    | The Arena connection to use.                |         |
| Training GUID | GUID of the training plan to update status. |         |
| Status        | New status for the training plan.           |         |
| Comment       | Optional comment for the status change.     |         |

### Create BOM Line {#createbomline}

Add a new BOM line (Bill of Materials line) to an item in Arena PLM system with the specified properties.

| Input                     | Comments                                                                                                                                                                                                                                                           | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                | The Arena connection to use.                                                                                                                                                                                                                                       |         |
| Item GUID                 | The GUID of the item.                                                                                                                                                                                                                                              |         |
| BOM Item GUID             | GUID of the item to add to the BOM.                                                                                                                                                                                                                                |         |
| Reference Designator      | Reference designator for the BOM line (e.g., R1, C2, U5).                                                                                                                                                                                                          |         |
| Quantity                  | Quantity of the item in the BOM.                                                                                                                                                                                                                                   | 1       |
| Notes                     | Additional notes for the BOM line.                                                                                                                                                                                                                                 |         |
| Additional Attributes     | Additional custom attributes for the object. Key should be the attribute GUID, value should be the attribute value.                                                                                                                                                |         |
| Attribute Definitions     | List of CategoryAttributeDefinitionVo objects that define the types and properties of attributes. This is required when creating additional attributes to ensure proper value type conversion (e.g., NUMBER/POSITIVE_DOUBLE/COST types will be parsed as numbers). |         |
| Additional Attribute JSON | Provide additional attributes as raw JSON. If provided, this will be used instead of additionalAttributes and attributeDefinitions.                                                                                                                                |         |

### Create BOM Substitute {#createbomsubstitute}

Add a new substitute component to a specific BOM line in Arena PLM system.

| Input           | Comments                                                            | Default |
| --------------- | ------------------------------------------------------------------- | ------- |
| Connection      | The Arena connection to use.                                        |         |
| Item GUID       | The GUID of the item.                                               |         |
| BOM Line GUID   | GUID of the BOM line to retrieve, update, or delete.                |         |
| BOM Item GUID   | GUID of the item to add to the BOM.                                 |         |
| Quantity        | Quantity of the item in the BOM.                                    | 1       |
| Notes           | Additional notes for the BOM line.                                  |         |
| Substitute Rank | Ranking order of the substitute (1 = primary, 2 = secondary, etc.). |         |

### Create Change {#createchange}

Create a new change in Arena PLM system with the specified properties.

| Input                         | Comments                                                                                                                                                                                                                                                           | Default |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                    | The Arena connection to use.                                                                                                                                                                                                                                       |         |
| Change Title                  | The title/name of the change to create.                                                                                                                                                                                                                            |         |
| Change Description            | Detailed description of the change.                                                                                                                                                                                                                                |         |
| Category GUID                 | GUID of the category to assign to this change.                                                                                                                                                                                                                     |         |
| Number Sequence Prefix        | Number sequence prefix for generating the change number.                                                                                                                                                                                                           |         |
| Routings                      | List of routing GUIDs for the change approval workflow. Select multiple routings from the available options for the specified category.                                                                                                                            |         |
| Approval Deadline             | Deadline for change approval in ISO format.                                                                                                                                                                                                                        |         |
| Enforce Approval Deadline     | When true, the approval deadline is enforced.                                                                                                                                                                                                                      | false   |
| Effectivity Type              | Type of effectivity for the change.                                                                                                                                                                                                                                |         |
| Expiration Date Time          | Expiration date time for the change in ISO format.                                                                                                                                                                                                                 |         |
| Effectivity Planned Date Time | Planned effectivity date time for the change in ISO format.                                                                                                                                                                                                        |         |
| Supplier Visibility           | When true, the change is visible to suppliers.                                                                                                                                                                                                                     | false   |
| Additional Attributes         | Additional custom attributes for the object. Key should be the attribute GUID, value should be the attribute value.                                                                                                                                                |         |
| Attribute Definitions         | List of CategoryAttributeDefinitionVo objects that define the types and properties of attributes. This is required when creating additional attributes to ensure proper value type conversion (e.g., NUMBER/POSITIVE_DOUBLE/COST types will be parsed as numbers). |         |
| Additional Attribute JSON     | Provide additional attributes as raw JSON. If provided, this will be used instead of additionalAttributes and attributeDefinitions.                                                                                                                                |         |

### Create Change File Association {#createchangefileassociation}

Create a new change file association in Arena PLM system.

| Input       | Comments                                                | Default |
| ----------- | ------------------------------------------------------- | ------- |
| Connection  | The Arena connection to use.                            |         |
| Change GUID | GUID of the change to update.                           |         |
| File GUID   | GUID of the existing file to associate with the change. |         |

### Create Change Implementation File {#createchangeimplementationfile}

Attach a new implementation file to a change.

| Input       | Comments                                                     | Default |
| ----------- | ------------------------------------------------------------ | ------- |
| Connection  | The Arena connection to use.                                 |         |
| Change GUID | The GUID of the change to attach the implementation file to. |         |
| File GUID   | The GUID of the file to attach as an implementation file.    |         |

### Create Change Implementation Task {#createchangeimplementationtask}

Create a new implementation task for a change.

| Input                    | Comments                                                                                                                | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Arena connection to use.                                                                                            |         |
| Change GUID              | The GUID of the change to create an implementation task for.                                                            |         |
| Task Name                | The name of the implementation task.                                                                                    |         |
| Assignee User GUID       | The GUID of the user to assign this task to. Use either Assignee User GUID or Assignee User Group GUID, not both.       |         |
| Assignee User Group GUID | The GUID of the user group to assign this task to. Use either Assignee User GUID or Assignee User Group GUID, not both. |         |
| Due Date                 | The due date for the task (ISO 8601 format).                                                                            |         |

### Create Change Implementation Task File {#createchangeimplementationtaskfile}

Attach a file to an implementation task.

| Input                    | Comments                                                   | Default |
| ------------------------ | ---------------------------------------------------------- | ------- |
| Connection               | The Arena connection to use.                               |         |
| Change GUID              | The GUID of the change.                                    |         |
| Implementation Task GUID | The GUID of the implementation task to attach the file to. |         |
| File GUID                | The GUID of the file to attach.                            |         |

### Create Change Implementation Task Note {#createchangeimplementationtasknote}

Create a new note for an implementation task.

| Input                    | Comments                                              | Default |
| ------------------------ | ----------------------------------------------------- | ------- |
| Connection               | The Arena connection to use.                          |         |
| Change GUID              | The GUID of the change.                               |         |
| Implementation Task GUID | The GUID of the implementation task to add a note to. |         |
| Note Content             | The content of the note to add.                       |         |
| Label                    | Optional label for the note.                          |         |
| Private                  | When true, the note is marked as private.             | false   |

### Create Change Markup File {#createchangemarkupfile}

Attach a new markup file to a change.

| Input       | Comments                                             | Default |
| ----------- | ---------------------------------------------------- | ------- |
| Connection  | The Arena connection to use.                         |         |
| Change GUID | The GUID of the change to attach the markup file to. |         |
| File GUID   | The GUID of the file to attach as a markup file.     |         |

### Create Export {#createexport}

Create a new export definition.

| Input       | Comments                                                 | Default |
| ----------- | -------------------------------------------------------- | ------- |
| Connection  | The Arena connection to use.                             |         |
| Export Data | Export definition data including name, description, etc. |         |

### Create Extract {#createextract}

Create a new extract definition.

| Input        | Comments                                                  | Default |
| ------------ | --------------------------------------------------------- | ------- |
| Connection   | The Arena connection to use.                              |         |
| Extract Data | Extract definition data including name, description, etc. |         |

### Create File Correction {#createfilecorrection}

Upload a corrected version of a file (multipart/form-data).

| Input                   | Comments                                                                                                                                        | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Arena connection to use.                                                                                                                    |         |
| File GUID               | The unique identifier (GUID) of the file.                                                                                                       |         |
| File                    | The file to upload to Arena. Supports files up to 2GB in size.                                                                                  |         |
| Comments                | Comment for the file correction.                                                                                                                |         |
| Storage Method          | Storage method for the file. Use 'FILE' to store on Arena servers, 'FTP' for FTP server, 'WEB' for web link, or 'PLACE_HOLDER' for placeholder. | FILE    |
| Remove Original Content | When true, the original content is removed.                                                                                                     | false   |
| Have Content            | When true, the cloud file content is downloaded.                                                                                                | false   |

### Create File Edition {#createfileedition}

Upload file to create next edition by file GUID.

| Input               | Comments                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------- | ------- |
| Connection          | The Arena connection to use.                                                      |         |
| File GUID           | The GUID of the file to create edition for.                                       |         |
| File Content        | The file content to upload (binary format). Optional for FTP/WEB storage methods. |         |
| Storage Method Name | Storage method: FILE (Arena servers), FTP (user FTP server), or WEB (web link).   |         |
| Location            | Web or FTP address where the file resides (for FTP/WEB storage methods).          |         |
| Title               | Title for the new file edition.                                                   |         |
| Description         | Description for the new file edition.                                             |         |
| Format              | The file format or extension recorded on the file edition.                        |         |

### Create File Markup {#createfilemarkup}

Upload a markup file for a file (multipart/form-data).

| Input                      | Comments                                                                                                | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The Arena connection to use.                                                                            |         |
| File GUID                  | The unique identifier (GUID) of the file.                                                               |         |
| File                       | The file to upload to Arena. Supports files up to 2GB in size.                                          |         |
| Reserved                   | When true, the markup file is reserved.                                                                 | false   |
| Markup Storage Method Name | Storage method for the markup file: FILE (Arena servers), FTP (user FTP server), or WEB (web link).     |         |
| File Category GUID         | GUID of the category to filter files by.                                                                |         |
| File Title                 | The title/name for the file in Arena.                                                                   |         |
| File Format                | File format/extension (e.g., 'pdf', 'docx', 'png'). If not specified, will be extracted from file name. |         |
| File Author Full Name      | Full name of the file author.                                                                           |         |

### Create File With Content {#createfilewithcontent}

Upload a file to Arena PLM system with specified metadata. Supports files up to 2GB.

| Input                 | Comments                                                                                                                                        | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Arena connection to use.                                                                                                                    |         |
| File                  | The file to upload to Arena. Supports files up to 2GB in size.                                                                                  |         |
| File Title            | The title/name for the file in Arena.                                                                                                           |         |
| File Description      | Optional description for the file.                                                                                                              |         |
| File Format           | File format/extension (e.g., 'pdf', 'docx', 'png'). If not specified, will be extracted from file name.                                         |         |
| Storage Method        | Storage method for the file. Use 'FILE' to store on Arena servers, 'FTP' for FTP server, 'WEB' for web link, or 'PLACE_HOLDER' for placeholder. | FILE    |
| File Category GUID    | GUID of the category to filter files by.                                                                                                        |         |
| File Author Full Name | Full name of the file author.                                                                                                                   |         |
| File Edition          | Edition of the file, which Arena increments each time new content is checked in.                                                                |         |
| File Private          | When true, the file is private.                                                                                                                 | false   |

### Create Import {#createimport}

Create a new import definition.

| Input       | Comments                                                 | Default |
| ----------- | -------------------------------------------------------- | ------- |
| Connection  | The Arena connection to use.                             |         |
| Import Data | Import definition data including name, description, etc. |         |

### Create Item {#createitem}

Create a new item in Arena PLM system with the specified properties.

| Input                     | Comments                                                                                                                                                                                                                                                           | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                | The Arena connection to use.                                                                                                                                                                                                                                       |         |
| Item Name                 | The name/title of the item to create.                                                                                                                                                                                                                              |         |
| Item Description          | Detailed description of the item.                                                                                                                                                                                                                                  |         |
| Revision Number           | Revision number for the item (if not auto-generated).                                                                                                                                                                                                              |         |
| Category GUID             | GUID of the category to assign to this item.                                                                                                                                                                                                                       |         |
| Shared Item               | When true, this item is shared across workspaces.                                                                                                                                                                                                                  | false   |
| Off The Shelf             | When true, this is an off-the-shelf item.                                                                                                                                                                                                                          | false   |
| Unit of Measure           | Unit of measure for the item (e.g., 'EA', 'LB', 'FT').                                                                                                                                                                                                             |         |
| Production Cost           | Production cost of the item.                                                                                                                                                                                                                                       |         |
| Prototype Cost            | Prototype cost of the item.                                                                                                                                                                                                                                        |         |
| Target Price              | Target selling price of the item.                                                                                                                                                                                                                                  |         |
| Target Cost               | Target cost of the item.                                                                                                                                                                                                                                           |         |
| Standard Cost             | Standard cost of the item.                                                                                                                                                                                                                                         |         |
| Owner Full Name           | Full name of the user who will own this item.                                                                                                                                                                                                                      |         |
| Number Format GUID        | GUID of the number format to use for generating the item number.                                                                                                                                                                                                   |         |
| Number Format Fields      | Fields for the number format. Key should be the field GUID, value should be the field value.                                                                                                                                                                       |         |
| Additional Attributes     | Additional custom attributes for the object. Key should be the attribute GUID, value should be the attribute value.                                                                                                                                                |         |
| Attribute Definitions     | List of CategoryAttributeDefinitionVo objects that define the types and properties of attributes. This is required when creating additional attributes to ensure proper value type conversion (e.g., NUMBER/POSITIVE_DOUBLE/COST types will be parsed as numbers). |         |
| Additional Attribute JSON | Provide additional attributes as raw JSON. If provided, this will be used instead of additionalAttributes and attributeDefinitions.                                                                                                                                |         |

### Create Item File Association {#createitemfileassociation}

Upload a new file and associate it with an item in Arena PLM system (multipart/form-data).

| Input                      | Comments                                                                                                | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The Arena connection to use.                                                                            |         |
| Item GUID                  | The GUID of the item.                                                                                   |         |
| File                       | The file to upload to Arena. Supports files up to 2GB in size.                                          |         |
| File Title                 | The title/name for the file in Arena.                                                                   |         |
| File Description           | Optional description for the file.                                                                      |         |
| File Format                | File format/extension (e.g., 'pdf', 'docx', 'png'). If not specified, will be extracted from file name. |         |
| File Private               | When true, the file is private.                                                                         | false   |
| File Author Full Name      | Full name of the file author.                                                                           |         |
| File Category GUID         | GUID of the category to filter files by.                                                                |         |
| File Storage Method Name   | Storage method holding the file: FILE, FTP, WEB or PLACE_HOLDER.                                        |         |
| File Edition               | Edition of the file, which Arena increments each time new content is checked in.                        |         |
| Latest Edition Association | When true, the file is associated with its latest edition.                                              | false   |
| Primary File               | When true, this is the primary file association.                                                        | false   |

### Create Item from JSON {#createitemfromjson}

Create a new item in Arena PLM using a JSON payload with optional core attribute overrides. Individual inputs take priority over JSON values.

| Input                | Comments                                                                                                      | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Arena connection to use.                                                                                  |         |
| Item JSON Payload    | Complete JSON payload for item creation. Core attribute inputs will override values in this JSON if provided. |         |
| Item Name            | The name/title of the item to create. If provided, overrides the name in JSON payload.                        |         |
| Item Description     | Detailed description of the item.                                                                             |         |
| Revision Number      | Revision number for the item (if not auto-generated).                                                         |         |
| Category GUID        | GUID of the category to assign to this item.                                                                  |         |
| Shared Item          | When true, this item is shared across workspaces.                                                             | false   |
| Off The Shelf        | When true, this is an off-the-shelf item.                                                                     | false   |
| Unit of Measure      | Unit of measure for the item (e.g., 'EA', 'LB', 'FT').                                                        |         |
| Production Cost      | Production cost of the item.                                                                                  |         |
| Prototype Cost       | Prototype cost of the item.                                                                                   |         |
| Target Price         | Target selling price of the item.                                                                             |         |
| Target Cost          | Target cost of the item.                                                                                      |         |
| Standard Cost        | Standard cost of the item.                                                                                    |         |
| Owner Full Name      | Full name of the user who will own this item.                                                                 |         |
| Number Format GUID   | GUID of the number format to use for generating the item number.                                              |         |
| Number Format Fields | Fields for the number format. Key should be the field GUID, value should be the field value.                  |         |

### Create Item Image {#createitemimage}

Upload and set an image as the thumbnail of an item.

| Input         | Comments                                            | Default |
| ------------- | --------------------------------------------------- | ------- |
| Connection    | The Arena connection to use.                        |         |
| Item GUID     | The GUID of the item to add an image to.            |         |
| Image Content | The image file content to upload, base64 encoded.   |         |
| Filename      | The filename for the image (e.g., 'thumbnail.jpg'). |         |

### Create Item Number Format Field {#createitemnumberformatfield}

Add a new field to a specific item number format in Arena PLM system.

| Input       | Comments                                            | Default |
| ----------- | --------------------------------------------------- | ------- |
| Connection  | The Arena connection to use.                        |         |
| Format GUID | The GUID of the item number format to add field to. |         |
| Field Data  | The field data to create (name, fieldType, etc.).   |         |

### Create Item Number Reservation {#createitemnumberreservation}

Create a new item number reservation in Arena PLM system.

| Input            | Comments                                               | Default |
| ---------------- | ------------------------------------------------------ | ------- |
| Connection       | The Arena connection to use.                           |         |
| Reservation Data | The reservation data to create (name, category, etc.). |         |

### Create Quality Process {#createqualityprocess}

Create a new Quality Process in Arena PLM system.

| Input                       | Comments                                               | Default |
| --------------------------- | ------------------------------------------------------ | ------- |
| Connection                  | The Arena connection to use.                           |         |
| Quality Process Name        | The name of the quality process.                       |         |
| Description                 | Description of the quality process.                    |         |
| Target Completion Date Time | Target completion date and time (ISO format).          |         |
| Owner GUID                  | The GUID of the quality process owner.                 |         |
| Template GUID               | The GUID of the quality process template.              |         |
| Number Format Prefix GUID   | The GUID of the number format prefix for the template. |         |
| Quality Process Type        | The type of quality process.                           |         |

### Create Quality Process Step Affected Object {#createqualityprocessstepaffected}

Adds an Affected Object in a step with a given GUID in a Quality Process with a given GUID. The type can be ITEM, REQUEST, CHANGE, SUPPLIER, SUPPLIER ITEM, or FILE from Arena PLM system.

| Input                | Comments                                                            | Default |
| -------------------- | ------------------------------------------------------------------- | ------- |
| Connection           | The Arena connection to use.                                        |         |
| Quality Process GUID | The GUID of the quality process containing the step.                |         |
| Step GUID            | The GUID of the quality process step to add the affected object to. |         |
| Affected Object GUID | The GUID of the object to be affected (item, change, file, etc.).   |         |
| Notes                | Optional notes for the affected object.                             |         |

### Create Quality Process Step Affected Quality {#createqualityprocessstepaffectedquality}

Adds a Quality Affected Object in a step with a given GUID in a Quality Process with a given GUID from Arena PLM system.

| Input                        | Comments                                                                    | Default |
| ---------------------------- | --------------------------------------------------------------------------- | ------- |
| Connection                   | The Arena connection to use.                                                |         |
| Quality Process GUID         | The GUID of the quality process containing the step.                        |         |
| Step GUID                    | The GUID of the quality process step to add the quality affected object to. |         |
| Affected Quality Object GUID | Optional GUID for the affected quality object.                              |         |
| Affected Step GUID           | The GUID of the quality process step to be affected.                        |         |

### Create Quality Process Step Affected URL {#createqualityprocessstepaffectedurl}

Adds a URL Affected Object in a step with a given GUID in a Quality Process with a given GUID from Arena PLM system.

| Input                    | Comments                                                                | Default |
| ------------------------ | ----------------------------------------------------------------------- | ------- |
| Connection               | The Arena connection to use.                                            |         |
| Quality Process GUID     | The GUID of the quality process containing the step.                    |         |
| Step GUID                | The GUID of the quality process step to add the URL affected object to. |         |
| Affected URL Object GUID | Optional GUID for the affected URL object.                              |         |
| URL Link                 | The URL link to be added as an affected object.                         |         |
| Display Name             | Display name for the URL.                                               |         |
| Description              | Description for the URL.                                                |         |

### Create Request {#createrequest}

Create a new request in Arena PLM system.

| Input                     | Comments                                                                                                                                                                                                                                                           | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                | The Arena connection to use.                                                                                                                                                                                                                                       |         |
| Request Title             | The title of the request.                                                                                                                                                                                                                                          |         |
| Problem Description       | Description of the problem that needs to be addressed.                                                                                                                                                                                                             |         |
| Requested Action          | Description of the action requested to solve the problem.                                                                                                                                                                                                          |         |
| Category GUID             | GUID of the category to assign to this request.                                                                                                                                                                                                                    |         |
| Number Sequence Prefix    | Prefix for the request number sequence.                                                                                                                                                                                                                            |         |
| Evaluator Group GUID      | GUID of the evaluator group for this request.                                                                                                                                                                                                                      |         |
| Request Code              | Code associated with the request.                                                                                                                                                                                                                                  |         |
| Creator Participation     | When true, the creator participates in the request evaluation.                                                                                                                                                                                                     | false   |
| Supplier Visibility       | When true, the request is visible to suppliers.                                                                                                                                                                                                                    | false   |
| Additional Attributes     | Additional custom attributes for the object. Key should be the attribute GUID, value should be the attribute value.                                                                                                                                                |         |
| Attribute Definitions     | List of CategoryAttributeDefinitionVo objects that define the types and properties of attributes. This is required when creating additional attributes to ensure proper value type conversion (e.g., NUMBER/POSITIVE_DOUBLE/COST types will be parsed as numbers). |         |
| Additional Attribute JSON | Provide additional attributes as raw JSON. If provided, this will be used instead of additionalAttributes and attributeDefinitions.                                                                                                                                |         |

### Create Request Evaluation Issue {#createrequestevaluationissue}

Create a new evaluation issue for a request in Arena PLM system.

| Input               | Comments                                                | Default |
| ------------------- | ------------------------------------------------------- | ------- |
| Connection          | The Arena connection to use.                            |         |
| Request GUID        | GUID of the request to create the evaluation issue for. |         |
| Issue Description   | Description of the evaluation issue to create.          |         |
| Supplier Visibility | When true, the issue is visible to suppliers.           | false   |

### Create Request Markup File {#createrequestmarkupfile}

Create a markup file for a request in Arena PLM system.

| Input        | Comments                                           | Default |
| ------------ | -------------------------------------------------- | ------- |
| Connection   | The Arena connection to use.                       |         |
| Request GUID | GUID of the request to create the markup file for. |         |
| Markup GUID  | GUID of the markup to associate with the request.  |         |

### Create Requirement {#createrequirement}

Create a new requirement in Arena PLM.

| Input                     | Comments                                                                                                                                                                                                                                                           | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                | The Arena connection to use.                                                                                                                                                                                                                                       |         |
| Requirement Template GUID | The GUID of the requirement template.                                                                                                                                                                                                                              |         |
| Title                     | The title of the requirement.                                                                                                                                                                                                                                      |         |
| Description               | The description of the requirement.                                                                                                                                                                                                                                |         |
| Priority                  | The priority of the requirement. The accepted values come from the priority attribute configured in Arena, for example High or Medium.                                                                                                                             |         |
| Assignee GUID             | GUID of the user to assign the requirement to.                                                                                                                                                                                                                     |         |
| Number                    | Custom requirement number (optional).                                                                                                                                                                                                                              |         |
| Number Sequence Prefix    | Number sequence prefix for auto-generating requirement number.                                                                                                                                                                                                     |         |
| Additional Attributes     | Additional custom attributes for the object. Key should be the attribute GUID, value should be the attribute value.                                                                                                                                                |         |
| Attribute Definitions     | List of CategoryAttributeDefinitionVo objects that define the types and properties of attributes. This is required when creating additional attributes to ensure proper value type conversion (e.g., NUMBER/POSITIVE_DOUBLE/COST types will be parsed as numbers). |         |
| Additional Attribute JSON | Provide additional attributes as raw JSON. If provided, this will be used instead of additionalAttributes and attributeDefinitions.                                                                                                                                |         |

### Create Sourcing Relationship {#createsourcingrelationship}

Create a new sourcing relationship for an item in Arena PLM system.

| Input                         | Comments                                                                                                                    | Default |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                    | The Arena connection to use.                                                                                                |         |
| Item GUID                     | The GUID of the item.                                                                                                       |         |
| AML Rank                      | Approved Manufacturer List rank (integer).                                                                                  |         |
| Approved                      | When true, the sourcing relationship is approved.                                                                           | false   |
| Make Item                     | When true, the relationship is a make item, meaning the part is manufactured in house rather than bought from the supplier. | false   |
| Manufacturer Item GUID        | GUID of the manufacturer item.                                                                                              |         |
| Notes                         | Additional notes for the sourcing relationship.                                                                             |         |
| Vendor Item GUID              | GUID of the vendor item.                                                                                                    |         |
| Vendor Item Conversion Factor | Conversion factor between vendor and manufacturer items.                                                                    |         |

### Create Supplier {#createsupplier}

Create a new supplier in Arena PLM system with the specified information.

| Input                 | Comments                                                                                                                                                                                                                                                           | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection            | The Arena connection to use.                                                                                                                                                                                                                                       |         |
| Supplier Name         | The name of the supplier.                                                                                                                                                                                                                                          |         |
| Supplier ID           | The unique identifier for the supplier.                                                                                                                                                                                                                            |         |
| Account Number        | Account number for the supplier.                                                                                                                                                                                                                                   |         |
| Description           | Description of the supplier.                                                                                                                                                                                                                                       |         |
| Website               | The supplier's public website, recorded for reference on the supplier record.                                                                                                                                                                                      |         |
| Approval Status GUID  | GUID of the approval status setting to assign to this supplier.                                                                                                                                                                                                    |         |
| Addresses             | JSON array of address objects to assign to the supplier.                                                                                                                                                                                                           |         |
| Phone Numbers         | JSON array of phone number objects to assign to the supplier.                                                                                                                                                                                                      |         |
| Additional Attributes | Additional custom attributes for the object. Key should be the attribute GUID, value should be the attribute value.                                                                                                                                                |         |
| Attribute Definitions | List of CategoryAttributeDefinitionVo objects that define the types and properties of attributes. This is required when creating additional attributes to ensure proper value type conversion (e.g., NUMBER/POSITIVE_DOUBLE/COST types will be parsed as numbers). |         |

### Create Supplier Address {#createsupplieraddress}

Add an address to a supplier in Arena PLM system.

| Input              | Comments                                                               | Default |
| ------------------ | ---------------------------------------------------------------------- | ------- |
| Connection         | The Arena connection to use.                                           |         |
| Supplier GUID      | GUID of the supplier that provides this item.                          |         |
| Address Label      | Label for the address (e.g., 'Main Office', 'Billing', 'Shipping').    |         |
| Address            | Street address lines, city, state, province, postal code, and country. |         |
| Address Line 1     | First line of the street address.                                      |         |
| Address Line 2     | Second line of the street address (optional).                          |         |
| City               | City name.                                                             |         |
| State              | State or region.                                                       |         |
| Province           | Province (typically used for international addresses).                 |         |
| Zip/Postal Code    | Postal or ZIP code.                                                    |         |
| Country            | Country name or code.                                                  |         |
| Is Primary Address | When true, this address is the primary address for the supplier.       | false   |

### Create Supplier File Association {#createsupplierfileassociation}

Associate an existing file with a supplier in Arena PLM system.

| Input         | Comments                                      | Default |
| ------------- | --------------------------------------------- | ------- |
| Connection    | The Arena connection to use.                  |         |
| Supplier GUID | GUID of the supplier that provides this item. |         |
| File GUID     | The unique identifier (GUID) of the file.     |         |

### Create Supplier Item {#createsupplieritem}

Create a new supplier item in Arena PLM system with the specified properties.

| Input                         | Comments                                                                                                                                                                                                                                                           | Default |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                    | The Arena connection to use.                                                                                                                                                                                                                                       |         |
| Supplier Item Name            | The name of the supplier item.                                                                                                                                                                                                                                     |         |
| Supplier Item Number          | The number/part number of the supplier item.                                                                                                                                                                                                                       |         |
| Supplier Item Description     | Detailed description of the supplier item.                                                                                                                                                                                                                         |         |
| Supplier Item Type            | The type/category of the supplier item.                                                                                                                                                                                                                            |         |
| Supplier GUID                 | GUID of the supplier that provides this item.                                                                                                                                                                                                                      |         |
| Supplier Item Unit of Measure | Unit of measure for the supplier item (e.g., 'EA', 'LB', 'FT').                                                                                                                                                                                                    |         |
| Off The Shelf                 | When true, this is an off-the-shelf supplier item.                                                                                                                                                                                                                 | false   |
| Procurement Type              | Procurement type for the supplier item.                                                                                                                                                                                                                            |         |
| Additional Attributes         | Additional custom attributes for the object. Key should be the attribute GUID, value should be the attribute value.                                                                                                                                                |         |
| Attribute Definitions         | List of CategoryAttributeDefinitionVo objects that define the types and properties of attributes. This is required when creating additional attributes to ensure proper value type conversion (e.g., NUMBER/POSITIVE_DOUBLE/COST types will be parsed as numbers). |         |
| Additional Attribute JSON     | Provide additional attributes as raw JSON. If provided, this will be used instead of additionalAttributes and attributeDefinitions.                                                                                                                                |         |

### Create Supplier Item File {#createsupplieritemfile}

Upload a file and associate it with a supplier item. Supports files up to 2GB with multipart form data upload.

| Input                      | Comments                                                                                                                                        | Default |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The Arena connection to use.                                                                                                                    |         |
| Supplier Item GUID         | The GUID of the supplier item.                                                                                                                  |         |
| File                       | The file to upload to Arena. Supports files up to 2GB in size.                                                                                  |         |
| File Title                 | The title/name for the file in Arena.                                                                                                           |         |
| File Description           | Optional description for the file.                                                                                                              |         |
| File Format                | File format/extension (e.g., 'pdf', 'docx', 'png'). If not specified, will be extracted from file name.                                         |         |
| Storage Method             | Storage method for the file. Use 'FILE' to store on Arena servers, 'FTP' for FTP server, 'WEB' for web link, or 'PLACE_HOLDER' for placeholder. | FILE    |
| File Category GUID         | GUID of the category to filter files by.                                                                                                        |         |
| File Author Full Name      | Full name of the file author.                                                                                                                   |         |
| File Edition               | Edition of the file, which Arena increments each time new content is checked in.                                                                |         |
| File Private               | When true, the file is private.                                                                                                                 | false   |
| Latest Edition Association | When true, the file is associated with its latest edition.                                                                                      | true    |
| Primary File               | When true, this is the primary file for the supplier item.                                                                                      | false   |

### Create Supplier Phone Number {#createsupplierphonenumber}

Add a phone number to a supplier in Arena PLM system.

| Input                  | Comments                                                    | Default |
| ---------------------- | ----------------------------------------------------------- | ------- |
| Connection             | The Arena connection to use.                                |         |
| Supplier GUID          | GUID of the supplier that provides this item.               |         |
| Phone Number Label     | Label for the phone number (e.g., 'Main', 'Fax', 'Mobile'). |         |
| Phone Number           | Phone number in the format the supplier record stores it.   |         |
| Phone Number Extension | Phone number extension if applicable.                       |         |
| Phone Number Comment   | Additional comment about the phone number.                  |         |

### Create Ticket {#createticket}

Create a new ticket in Arena PLM system.

| Input                     | Comments                                                                                                                                                                                                                                                           | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                | The Arena connection to use.                                                                                                                                                                                                                                       |         |
| Template GUID             | The GUID of the template.                                                                                                                                                                                                                                          |         |
| Title                     | The title of the ticket.                                                                                                                                                                                                                                           |         |
| Number                    | Custom ticket number (optional - will use template default if not provided).                                                                                                                                                                                       |         |
| Number Sequence Prefix    | Number sequence prefix for auto-generating ticket number.                                                                                                                                                                                                          |         |
| Additional Attributes     | Additional custom attributes for the object. Key should be the attribute GUID, value should be the attribute value.                                                                                                                                                |         |
| Attribute Definitions     | List of CategoryAttributeDefinitionVo objects that define the types and properties of attributes. This is required when creating additional attributes to ensure proper value type conversion (e.g., NUMBER/POSITIVE_DOUBLE/COST types will be parsed as numbers). |         |
| Additional Attribute JSON | Provide additional attributes as raw JSON. If provided, this will be used instead of additionalAttributes and attributeDefinitions.                                                                                                                                |         |

### Delete BOM Line {#deletebomline}

Delete a specific BOM line from an item in Arena PLM system.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    | The Arena connection to use.                         |         |
| Item GUID     | The GUID of the item.                                |         |
| BOM Line GUID | GUID of the BOM line to retrieve, update, or delete. |         |

### Delete BOM Substitute {#deletebomsubstitute}

Delete a specific BOM substitute from Arena PLM system.

| Input           | Comments                                                   | Default |
| --------------- | ---------------------------------------------------------- | ------- |
| Connection      | The Arena connection to use.                               |         |
| Item GUID       | The GUID of the item.                                      |         |
| BOM Line GUID   | GUID of the BOM line to retrieve, update, or delete.       |         |
| Substitute GUID | GUID of the BOM substitute to retrieve, update, or delete. |         |

### Delete Change {#deletechange}

Delete an existing change from Arena PLM system.

| Input       | Comments                      | Default |
| ----------- | ----------------------------- | ------- |
| Connection  | The Arena connection to use.  |         |
| Change GUID | GUID of the change to update. |         |

### Delete Change File Association {#deletechangefileassociation}

Delete a change file association from Arena PLM system.

| Input                        | Comments                             | Default |
| ---------------------------- | ------------------------------------ | ------- |
| Connection                   | The Arena connection to use.         |         |
| Change GUID                  | GUID of the change to update.        |         |
| Change File Association GUID | GUID of the change-file association. |         |

### Delete Change Item Association {#deletechangeitemassociation}

Removes an item with a given GUID from a change with a given GUID. Items can only be removed from changes in the Open and Unlocked lifecycle phase.

| Input                        | Comments                                       | Default |
| ---------------------------- | ---------------------------------------------- | ------- |
| Connection                   | The Arena connection to use.                   |         |
| Change GUID                  | GUID of the change to update.                  |         |
| Change Item Association GUID | GUID of the change-item association to update. |         |

### Delete Change Markup File {#deletechangemarkupfile}

Remove a markup file association from a change.

| Input                        | Comments                                           | Default |
| ---------------------------- | -------------------------------------------------- | ------- |
| Connection                   | The Arena connection to use.                       |         |
| Change GUID                  | The GUID of the change.                            |         |
| Change File Association GUID | The GUID of the change file association to delete. |         |

### Delete Extract {#deleteextract}

Delete an extract definition.

| Input        | Comments                                      | Default |
| ------------ | --------------------------------------------- | ------- |
| Connection   | The Arena connection to use.                  |         |
| Extract GUID | The GUID of the extract definition to delete. |         |

### Delete File {#deletefile}

Delete the latest edition of a file with the specified GUID. When a file has multiple editions, only the latest, unlocked edition can be deleted. To delete an entire file with multiple editions, repeat the request for all editions.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Arena connection to use.              |         |
| File GUID  | The unique identifier (GUID) of the file. |         |

### Delete Item {#deleteitem}

Delete an existing item from Arena PLM system with the specified GUID.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The Arena connection to use. |         |
| Item GUID  | The GUID of the item.        |         |

### Delete Item File Association {#deleteitemfileassociation}

Delete an item file association from Arena PLM system.

| Input                      | Comments                           | Default |
| -------------------------- | ---------------------------------- | ------- |
| Connection                 | The Arena connection to use.       |         |
| Item GUID                  | The GUID of the item.              |         |
| Item File Association GUID | GUID of the item file association. |         |

### Delete Item Image {#deleteitemimage}

Remove the thumbnail image from an item.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Arena connection to use.                   |         |
| Item GUID  | The GUID of the item to remove the image from. |         |

### Delete Quality Process {#deletequalityprocess}

Deletes a Quality Process with a given GUID from Arena PLM system. Note: Any full user can delete a Quality Process via the API.

| Input                | Comments                                   | Default |
| -------------------- | ------------------------------------------ | ------- |
| Connection           | The Arena connection to use.               |         |
| Quality Process GUID | The GUID of the quality process to delete. |         |

### Delete Quality Process Step Affected Object {#deletequalityprocessstepaffected}

Deletes an Affected Object with a given GUID from Quality Process step with a given GUID in a Quality Process with a given GUID from Arena PLM system.

| Input                | Comments                                                             | Default |
| -------------------- | -------------------------------------------------------------------- | ------- |
| Connection           | The Arena connection to use.                                         |         |
| Quality Process GUID | The GUID of the quality process containing the step.                 |         |
| Step GUID            | The GUID of the quality process step containing the affected object. |         |
| Affected Object GUID | The GUID of the affected object to delete.                           |         |

### Delete Request {#deleterequest}

Delete a specific request from Arena PLM system.

| Input        | Comments                       | Default |
| ------------ | ------------------------------ | ------- |
| Connection   | The Arena connection to use.   |         |
| Request GUID | GUID of the request to delete. |         |

### Delete Request Markup File {#deleterequestmarkupfile}

Delete a request markup file from Arena PLM system.

| Input                         | Comments                                               | Default |
| ----------------------------- | ------------------------------------------------------ | ------- |
| Connection                    | The Arena connection to use.                           |         |
| Request GUID                  | GUID of the request containing the markup file.        |         |
| Request File Association GUID | GUID of the request markup file association to delete. |         |

### Delete Requirement {#deleterequirement}

Delete a requirement.

| Input            | Comments                                  | Default |
| ---------------- | ----------------------------------------- | ------- |
| Connection       | The Arena connection to use.              |         |
| Requirement GUID | The unique identifier of the requirement. |         |

### Delete Requirement Trace {#deleterequirementtrace}

Delete a trace link from a requirement.

| Input            | Comments                                  | Default |
| ---------------- | ----------------------------------------- | ------- |
| Connection       | The Arena connection to use.              |         |
| Requirement GUID | The unique identifier of the requirement. |         |
| Trace Link GUID  | The unique identifier of the trace link.  |         |

### Delete Sourcing Relationship {#deletesourcingrelationship}

Delete a specified sourcing relationship for an item in Arena PLM system.

| Input                      | Comments                           | Default |
| -------------------------- | ---------------------------------- | ------- |
| Connection                 | The Arena connection to use.       |         |
| Item GUID                  | The GUID of the item.              |         |
| Sourcing Relationship GUID | GUID of the sourcing relationship. |         |

### Delete Supplier {#deletesupplier}

Delete a supplier from Arena PLM system. This action cannot be undone.

| Input         | Comments                                      | Default |
| ------------- | --------------------------------------------- | ------- |
| Connection    | The Arena connection to use.                  |         |
| Supplier GUID | GUID of the supplier that provides this item. |         |

### Delete Supplier Address {#deletesupplieraddress}

Delete an address from a supplier in Arena PLM system. This action cannot be undone.

| Input         | Comments                                      | Default |
| ------------- | --------------------------------------------- | ------- |
| Connection    | The Arena connection to use.                  |         |
| Supplier GUID | GUID of the supplier that provides this item. |         |
| Address GUID  | The unique identifier (GUID) of the address.  |         |

### Delete Supplier File Association {#deletesupplierfileassociation}

Delete a file association from a supplier in Arena PLM system. This action cannot be undone.

| Input                          | Comments                                                       | Default |
| ------------------------------ | -------------------------------------------------------------- | ------- |
| Connection                     | The Arena connection to use.                                   |         |
| Supplier GUID                  | GUID of the supplier that provides this item.                  |         |
| Supplier File Association GUID | The unique identifier (GUID) of the supplier file association. |         |

### Delete Supplier Item {#deletesupplieritem}

Delete a specific supplier item from Arena PLM system using its GUID.

| Input              | Comments                       | Default |
| ------------------ | ------------------------------ | ------- |
| Connection         | The Arena connection to use.   |         |
| Supplier Item GUID | The GUID of the supplier item. |         |

### Delete Supplier Phone Number {#deletesupplierphonenumber}

Delete a phone number from a supplier in Arena PLM system. This action cannot be undone.

| Input             | Comments                                          | Default |
| ----------------- | ------------------------------------------------- | ------- |
| Connection        | The Arena connection to use.                      |         |
| Supplier GUID     | GUID of the supplier that provides this item.     |         |
| Phone Number GUID | The unique identifier (GUID) of the phone number. |         |

### Delete Ticket {#deleteticket}

Delete a specific ticket from Arena PLM system.

| Input       | Comments                     | Default |
| ----------- | ---------------------------- | ------- |
| Connection  | The Arena connection to use. |         |
| Ticket GUID | The GUID of the ticket.      |         |

### Download Export Run File Content {#downloadexportrunfilecontent}

Download the actual content of a file from an export run.

| Input           | Comments                           | Default |
| --------------- | ---------------------------------- | ------- |
| Connection      | The Arena connection to use.       |         |
| Export GUID     | The GUID of the export definition. |         |
| Export Run GUID | The GUID of the export run.        |         |
| File GUID       | The GUID of the file to download.  |         |

### Download Extract Run File Content {#downloadextractrunfilecontent}

Download the actual file content from an extract run.

| Input                     | Comments                                          | Default |
| ------------------------- | ------------------------------------------------- | ------- |
| Connection                | The Arena connection to use.                      |         |
| Extract GUID              | The GUID of the extract definition.               |         |
| Extract Run GUID          | The GUID of the extract run.                      |         |
| Run File Association GUID | The GUID of the run file association to download. |         |

### Download File Content {#downloadfilecontent}

Download file content by its GUID.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Arena connection to use.      |         |
| File GUID  | The GUID of the file to download. |         |

### Force Complete Import {#forcecompleteimport}

Force an import run to complete, even if there are errors.

| Input           | Comments                                      | Default |
| --------------- | --------------------------------------------- | ------- |
| Connection      | The Arena connection to use.                  |         |
| Import GUID     | The GUID of the import definition.            |         |
| Import Run GUID | The GUID of the import run to force complete. |         |

### Get BOM Line {#getbomline}

Retrieve detailed information of a specific BOM line for an item in Arena PLM system.

| Input                               | Comments                                                                | Default |
| ----------------------------------- | ----------------------------------------------------------------------- | ------- |
| Connection                          | The Arena connection to use.                                            |         |
| Item GUID                           | The GUID of the item.                                                   |         |
| BOM Line GUID                       | GUID of the BOM line to retrieve, update, or delete.                    |         |
| Include Empty Additional Attributes | When true, empty additional attributes are included in the response.    | false   |
| Include BOM Substitutes             | When true, substitute components are included in the BOM line response. | false   |

### Get BOM Settings {#getbomsettings}

Retrieve BOM settings for an item in Arena PLM system.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The Arena connection to use. |         |
| Item GUID  | The GUID of the item.        |         |

### Get BOM Substitute {#getbomsubstitute}

Retrieve detailed information of a specific BOM substitute in Arena PLM system.

| Input           | Comments                                                   | Default |
| --------------- | ---------------------------------------------------------- | ------- |
| Connection      | The Arena connection to use.                               |         |
| Item GUID       | The GUID of the item.                                      |         |
| BOM Line GUID   | GUID of the BOM line to retrieve, update, or delete.       |         |
| Substitute GUID | GUID of the BOM substitute to retrieve, update, or delete. |         |

### Get Change by GUID {#getchangebyguid}

Retrieve detailed information of a specific change by its GUID from Arena PLM system.

| Input                               | Comments                                                                | Default |
| ----------------------------------- | ----------------------------------------------------------------------- | ------- |
| Connection                          | The Arena connection to use.                                            |         |
| Change GUID                         | The GUID of the object.                                                 |         |
| Include Empty Additional Attributes | When true, includes additional attributes even when they have no value. | false   |

### Get Change File Association {#getchangefileassociation}

Returns details of a specific file association with a change.

| Input                        | Comments                             | Default |
| ---------------------------- | ------------------------------------ | ------- |
| Connection                   | The Arena connection to use.         |         |
| Change GUID                  | GUID of the change to update.        |         |
| Change File Association GUID | GUID of the change-file association. |         |

### Get Change Implementation Task {#getchangeimplementationtask}

Get details of a specific implementation task.

| Input                    | Comments                                         | Default |
| ------------------------ | ------------------------------------------------ | ------- |
| Connection               | The Arena connection to use.                     |         |
| Change GUID              | The GUID of the change.                          |         |
| Implementation Task GUID | The GUID of the implementation task to retrieve. |         |
