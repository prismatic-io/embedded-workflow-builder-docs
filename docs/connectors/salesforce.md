---
title: Salesforce Connector
sidebar_label: Salesforce
description: Query, create, update, or delete Salesforce records.
---

![Salesforce](./assets/salesforce.png#connector-icon)
[Salesforce](https://www.salesforce.com/) is a customer relationship management (CRM) platform.
This component provides the ability to manage sales leads and records within the Salesforce platform.

## API Documentation

This component was built using the following API References currently utilizing v63.0 by default.

- [Salesforce REST API Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)
- [Salesforce Bulk API Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm)

## Connections

### Basic Authentication {#basic}

Authenticate requests using Basic Authentication.

#### Prerequisites

- A Salesforce account with API access enabled
- The account's security token (if security tokens are enabled)

#### Setup Steps

When using Basic Auth, supply a Salesforce username and password.
Depending on the Salesforce setup, the password may have a security token attached to it.
If security tokens in the Salesforce account are _disabled_, the password to supply is simply the Salesforce password.
If security tokens are _enabled_ in the Salesforce account, then the password to enter is the concatenation of the password and the security token.

For example, if the Salesforce password is `p@$sw0rD` and the security token that Salesforce provides is `ExAmPlE0000000000ExAmPlE`, then enter `p@$sw0rDExAmPlE0000000000ExAmPlE` as the password.
Manage security tokens by clicking the profile picture on the top-right of _Salesforce_, selecting **My Settings**, and then opening **Personal** -> **Reset My Security Token**.

#### Configure the Connection

Create a connection of type **Basic Authentication** and enter:

- **Username**: Enter the Salesforce account username
- **Password**: Enter the Salesforce password, or the password concatenated with the security token if security tokens are enabled
- **Login URL**: Enter the Salesforce My Domain URL (e.g., `https://my-company.my.salesforce.com/`)

| Input     | Comments                                                                                                          | Default |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Username  | The username of the Salesforce account                                                                            |         |
| Password  | The password of the Salesforce account                                                                            |         |
| Login URL | The Salesforce Login URL for Basic Authentication (e.g., https://login.salesforce.com or a custom My Domain URL). |         |

### OAuth 2.0 {#oauth2}

Authenticate requests using OAuth 2.0.

OAuth 2.0 provides a simple way for users to authorize applications.
To use OAuth 2.0, create and configure a [Connected App](https://help.salesforce.com/s/articleView?id=xcloud.connected_app_create.htm&type=5) within Salesforce.

#### Prerequisites

- A Salesforce account with Administrator access
- Permission to create Connected Apps in the Salesforce org

#### Setup Steps

1. Log in to the Salesforce account
1. Navigate to **Setup** by clicking the gear icon in the upper right corner
1. Open **Apps** > **External Client Apps** > **Settings**
1. Enable **Allow creation of connected apps** if it is not already enabled
1. Select **New Connected App**
   - When creating the "Connected App" be sure to check **Enable OAuth Settings**, and enter the OAuth callback URL `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as a **Callback URL**.
   - Consult Salesforce to determine the proper OAuth Scopes to assign.
     To grant integrations the same permissions that the user authenticating through OAuth has, select **Full access (full)**.
     Also select **Perform requests at any time (refresh_token, offline_access)**.
     Select **Require Secret for Web Server Flow** and **Require Secret for Refresh Token Flow**:

Next select **Save** and **Continue**.
Then, get the app's **Consumer Key** and **Consumer Secret** by selecting **Manage Consumer Details**.
Take note of these keys:

To return to this screen, select **Apps** > **App Manager**, click the dropdown menu to the right of the app and select **Edit**.
From there, manage callback URLs.

#### Configure the Connection

Create a connection of type **OAuth 2.0** and enter:

- **Consumer Key**: Enter the Consumer Key from the Connected App
- **Consumer Secret**: Enter the Consumer Secret from the Connected App
- **Authorize URL**: Defaults to `https://login.salesforce.com/services/oauth2/authorize`
- **Token URL**: Defaults to `https://login.salesforce.com/services/oauth2/token`
- **Revoke URL**: Defaults to `https://login.salesforce.com/services/oauth2/revoke`

:::note Connecting to a Salesforce Sandbox Account
To connect to a Salesforce sandbox organization for testing purposes, edit the connection's **Authorize URL**, **Token URL** and **Revoke URL** to read `test.salesforce.com` instead of `login.salesforce.com`.
Be sure to change these values back when testing is done.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                               | Default                                                |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| Authorize URL   | The OAuth 2.0 Authorization URL for Salesforce         | https://login.salesforce.com/services/oauth2/authorize |
| Token URL       | The OAuth 2.0 Token URL for Salesforce                 | https://login.salesforce.com/services/oauth2/token     |
| Revoke URL      | The OAuth 2.0 Revocation URL for Salesforce            | https://login.salesforce.com/services/oauth2/revoke    |
| Consumer Key    | The Consumer Key from the Salesforce Connected App.    |                                                        |
| Consumer Secret | The Consumer Secret from the Salesforce Connected App. |                                                        |

### OAuth 2.0 Client Credentials {#salesforceclientcredentials}

Authenticate using OAuth 2.0 Client Credentials for server-to-server integration.

OAuth 2.0 Client Credentials provides server-to-server authentication without user interaction. Use this connection type for integrations that run in the background without a user context.

#### Prerequisites

- A Salesforce account with Administrator access
- A Connected App configured for OAuth 2.0 (see [OAuth 2.0 connection documentation](#oauth2)), or permission to create a new one

#### Setup Steps

This connection requires a Connected App configured for Client Credentials. If a Connected App already exists for OAuth 2.0, enable Client Credentials on that app. Otherwise, create a new Connected App following the OAuth 2.0 setup steps first.

1. **Enable Client Credentials Flow**:
   1. Navigate to **Setup** > **Apps** > **App Manager**
   2. Find the Connected App and select **Edit** from the dropdown menu
   3. Under **API (Enable OAuth Settings)**, check **Enable Client Credentials Flow**
   4. Click **Save**

2. **Configure Run As User** — the Client Credentials flow requires specifying which user the integration will authenticate as:
   1. From the Connected App, select **Manage** from the dropdown menu
   2. Click **Edit Policies**
   3. Under **Client Credentials Flow**, select a user from the **Run As** dropdown
   4. Click **Save**

The selected user's permissions determine what the integration can access.

#### Configure the Connection

- **Instance URL**: Enter the Salesforce My Domain URL (e.g., `https://acme-corp.my.salesforce.com`)
- **Consumer Key**: Enter the Consumer Key from the Connected App
- **Consumer Secret**: Enter the Consumer Secret from the Connected App
- **Scopes**: Scopes are configured in the Salesforce Connected App settings

:::note Connecting to a Salesforce Sandbox
For sandbox environments, use the sandbox My Domain URL format: `https://your-company--sandbox.sandbox.my.salesforce.com`
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                                                                                                                               | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Instance URL    | The Salesforce My Domain URL (e.g., https://your-company.my.salesforce.com). For sandbox, use https://your-company--sandbox.sandbox.my.salesforce.com. |         |
| Consumer Key    | The Consumer Key from the Salesforce Connected App.                                                                                                    |         |
| Consumer Secret | The Consumer Secret from the Salesforce Connected App.                                                                                                 |         |
| Scopes          | Scopes are configured in the Salesforce Connected App settings.                                                                                        |         |

## Triggers

### Flow Outbound Message Webhook {#flowoutboundmessagetrigger}

Receive Flow-based outbound messages from Salesforce.

| Input               | Comments                                                                                                                                                         | Default         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Version             | The Salesforce API version number to use for requests.                                                                                                           | 63.0            |
| Prefix              | Sets a prefix to the Flow Name and Outbound Messages created. Must start with a letter, can contain letters, numbers, underscores, and be at most 15 characters. |                 |
| Trigger Record Type | The Salesforce object API name (e.g., Account, Contact) whose record changes will trigger this flow.                                                             |                 |
| Trigger On          | When to trigger the flow (record creation, update, or both).                                                                                                     | CreateAndUpdate |
| Fields              | Fields to include in the Outbound Message.                                                                                                                       |                 |
| Flow Metadata       | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                                  |                 |
| Filter Formula      | Optional formula to filter which records trigger the flow.                                                                                                       |                 |
| Connection          | The Salesforce connection to use.                                                                                                                                |                 |

### New and Updated Records {#pollchangestrigger}

Checks for new, updated, and optionally deleted records in Salesforce on a recurring schedule.

| Input                | Comments                                                                                                                                                                   | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Salesforce connection to use.                                                                                                                                          |         |
| Record Type          | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                                                            |         |
| Show New Records     | When true, newly created records are included in the polling results.                                                                                                      | true    |
| Show Updated Records | When true, recently modified records are included in the polling results.                                                                                                  | true    |
| Show Deleted Records | When true, recently deleted records are included in the polling results.                                                                                                   | false   |
| Selected Fields      | Specific field API names to include in results. Leave empty to return all fields. Id, CreatedDate, and LastModifiedDate are always included automatically.                 |         |
| Return IDs Only      | When true, only record IDs and date fields are returned (Id, CreatedDate, LastModifiedDate). Overrides Selected Fields. Use this to minimize data returned by the trigger. | false   |
| Version              | The Salesforce API version number to use for requests.                                                                                                                     | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                              |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                     |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                    |         |
| Max Records To Fetch | The maximum number of records the trigger will fetch. Defaults to 20,000 records.                                                                                          | 20000   |

### Webhook {#webhook}

Receive and validate webhook requests from Salesforce for manually configured webhook subscriptions.

### Workflow Outbound Message Webhook (Deprecated) {#workflowtrigger}

Receive workflow rule outbound messages from Salesforce.

| Input                 | Comments                                                                                                                                                                                                                                                                                | Default      |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection            | The Salesforce connection to use.                                                                                                                                                                                                                                                       |              |
| Record Type           | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                                                                                                                                                                         |              |
| Trigger Type          | Conditions in which the trigger fires. On All Changes: The workflow rule is considered on all changes. On Create Only: Considered on creation. On Create or Meets Rule Criteria: Considered on create and when it is updated to meet any Rule Criteria configured to the workflow rule. | onAllChanges |
| Outbound Message Name | The name of the outbound message to be used.                                                                                                                                                                                                                                            |              |
| Workflow Rule Name    | The name of the workflow rule to be used.                                                                                                                                                                                                                                               |              |
| Description           | A text description of the object.                                                                                                                                                                                                                                                       |              |
| Fields                | Fields to include in the Outbound Message.                                                                                                                                                                                                                                              |              |
| Version               | The Salesforce API version number to use for requests.                                                                                                                                                                                                                                  | 63.0         |

## Actions

### Abort Bulk Job {#abortbulkjob}

Abort a bulk ingest job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Abort Bulk Query Job {#abortbulkqueryjob}

Abort a bulk query job.

| Input        | Comments                                               | Default |
| ------------ | ------------------------------------------------------ | ------- |
| Connection   | The Salesforce connection to use.                      |         |
| Version      | The Salesforce API version number to use for requests. | 63.0    |
| Query Job ID | The ID of the query job to abort                       |         |

### Activate Flow {#activateflow}

Activate a Flow in Salesforce by name.

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | The Salesforce API version number to use for requests.                                                                                                    | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Add Attachment {#addattachment}

Attach a file to a parent record object (Account, Opportunity, etc.).

| Input         | Comments                                                         | Default |
| ------------- | ---------------------------------------------------------------- | ------- |
| Connection    | The Salesforce connection to use.                                |         |
| Version       | The Salesforce API version number to use for requests.           | 63.0    |
| Record ID     | The unique identifier for a Salesforce record.                   |         |
| File Name     | The name of the file to upload, including the file extension.    |         |
| File Contents | Reference a file from a previous step, or enter plain text here. |         |

### Add User Permission Set {#adduserpermissionset}

Add a permission set to the specified user.

| Input          | Comments                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                          | 63.0    |
| User Name      | The username of the Salesforce user to reference.                               |         |
| Permission Set | The name of the Salesforce Permission Set to assign to or remove from the user. |         |
| Connection     | The Salesforce connection to use.                                               |         |

### Bulk Insert Records {#bulkinsertrecords}

Create new Salesforce records in bulk.

| Input                  | Comments                                                                        | Default |
| ---------------------- | ------------------------------------------------------------------------------- | ------- |
| Version                | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type            | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| External ID Field Name | The name of the column that refers to the External ID Field                     |         |
| File                   | The binary file data to upload as a Salesforce Content Version.                 |         |
| Connection             | The Salesforce connection to use.                                               |         |

### Bulk Upsert Records {#bulkupsertrecords}

Update Salesforce records if they exist, otherwise create new Salesforce records.

| Input                  | Comments                                                                        | Default |
| ---------------------- | ------------------------------------------------------------------------------- | ------- |
| Version                | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type            | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| External ID Field Name | The name of the column that refers to the External ID Field                     |         |
| File                   | The binary file data to upload as a Salesforce Content Version.                 |         |
| Connection             | The Salesforce connection to use.                                               |         |

### Complete Upload Bulk Job {#completeuploadbulkjob}

Notify Salesforce that the upload of job data is complete and ready for processing. No additional job data can be added after this call.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Create Account {#createaccount}

Create a Salesforce account record.

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version                | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Phone                  | The primary phone number for the object.                                                                      |         |
| Website                | The website URL associated with the record.                                                                   |         |
| Account Type           | The type of account record.                                                                                   |         |
| Industry               | The industry of the account record.                                                                           |         |
| Description            | A text description of the object.                                                                             |         |
| Number of Employees    | The number of employees associated with the object.                                                           |         |
| Annual Revenue         | The estimated annual revenue of the account, in the organization's default currency.                          |         |
| Billing City           | The city of the object's billing address.                                                                     |         |
| Billing Postal Code    | The zip code of the object's billing address.                                                                 |         |
| Billing State          | The state of the object's billing address.                                                                    |         |
| Billing Street Address | The street address of the billing object.                                                                     |         |
| Billing Country        | The country of the object's billing address.                                                                  |         |
| Street Address         | The street address of the object.                                                                             |         |
| State                  | The state of the object's address.                                                                            |         |
| Country                | The country of the object's address.                                                                          |         |
| Name                   | The name assigned to the Salesforce record.                                                                   |         |
| City                   | The city of the object's address.                                                                             |         |
| Postal Code            | The zip code of the object's address.                                                                         |         |
| Connection             | The Salesforce connection to use.                                                                             |         |

### Create Bulk Job {#createbulkjob}

Create a bulk ingest job representing an operation and its associated data for asynchronous processing in Salesforce.

| Input                  | Comments                                                                                                                            | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Salesforce connection to use.                                                                                                   |         |
| Version                | The Salesforce API version number to use for requests.                                                                              | 63.0    |
| Object                 | The object type for the data being processed. Use only a single object type per job.                                                |         |
| Operation              | The data manipulation operation for the bulk job (e.g., insert, update, upsert, delete, or hardDelete).                             | insert  |
| External ID Field Name | The external ID field in the object being updated. Only needed for upsert operations. Field values must also exist in CSV job data. |         |
| Assignment Rule ID     | The ID of an assignment rule to run for a Case or a Lead. The assignment rule can be active or inactive.                            |         |
| Column Delimiter       | The character delimiter used to separate column values in the bulk query results file.                                              | COMMA   |
| Line Ending            | The line ending character sequence used in the bulk query results file.                                                             | LF      |

### Create Bulk Query Job {#createbulkqueryjob}

Create a bulk query job.

| Input            | Comments                                                                                                                        | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Salesforce connection to use.                                                                                               |         |
| Version          | The Salesforce API version number to use for requests.                                                                          | 63.0    |
| Operation        | The Salesforce Bulk API operation type. Use 'query' for standard queries and 'queryAll' to include deleted or archived records. | query   |
| Query            | The SOQL query to execute against the Salesforce Bulk API.                                                                      |         |
| Column Delimiter | The character delimiter used to separate column values in the bulk query results file.                                          | COMMA   |
| Line Ending      | The line ending character sequence used in the bulk query results file.                                                         | LF      |

### Create Contact {#createcontact}

Create a Salesforce contact.

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Email Address          | The email address for the object.                                                                             |         |
| Version                | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Phone                  | The primary phone number for the object.                                                                      |         |
| First Name             | The first name of the contact at the company                                                                  |         |
| Last Name              | The last name of the contact at the company                                                                   |         |
| Department             | The department name associated with the contact.                                                              |         |
| Birthdate              | The birthdate of the contact. Format: YYYY-MM-DD.                                                             |         |
| Fax                    | The fax number associated with the record.                                                                    |         |
| Title                  | The job title or professional title associated with the contact or lead.                                      |         |
| Mobile Phone           | The mobile phone number for the object.                                                                       |         |
| Assistant              | The name of the contact's assistant.                                                                          |         |
| Assistant's Phone      | The phone number of the contact's assistant.                                                                  |         |
| Description            | A text description of the object.                                                                             |         |
| Billing City           | The city of the object's billing address.                                                                     |         |
| Billing Postal Code    | The zip code of the object's billing address.                                                                 |         |
| Billing State          | The state of the object's billing address.                                                                    |         |
| Billing Street Address | The street address of the billing object.                                                                     |         |
| Billing Country        | The country of the object's billing address.                                                                  |         |
| Street Address         | The street address of the object.                                                                             |         |
| State                  | The state of the object's address.                                                                            |         |
| Country                | The country of the object's address.                                                                          |         |
| City                   | The city of the object's address.                                                                             |         |
| Postal Code            | The zip code of the object's address.                                                                         |         |
| Connection             | The Salesforce connection to use.                                                                             |         |

### Create Customer {#createcustomer}

Create a Salesforce customer.

| Input                | Comments                                                                                                                                                                   | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                     | 63.0    |
| Name                 | Name of this customer.                                                                                                                                                     |         |
| Party ID             | The unique identifier of the individual object related to this customer record.                                                                                            |         |
| Customer Status Type | The status of the customer account.                                                                                                                                        | Active  |
| Last Reference Date  | The timestamp for when the current user last viewed a record related to this record.                                                                                       |         |
| Last Viewed Date     | The timestamp for when the current user last viewed this record. If this value is null, it's possible that this record was referenced (LastReferencedDate) and not viewed. |         |
| Owner ID             | The ID of the user who owns the record.                                                                                                                                    |         |
| Total Lifetime Value | The total revenue amount gained from this customer.                                                                                                                        |         |
| Connection           | The Salesforce connection to use.                                                                                                                                          |         |

### Create Flow {#createflow}

Create a draft Flow in Salesforce.

| Input         | Comments                                                                                                                                                                              | Default     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Version       | The Salesforce API version number to use for requests.                                                                                                                                | 63.0        |
| Flow Name     | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is.                             |             |
| Description   | A text description of the object.                                                                                                                                                     |             |
| Run In Mode   | The context user mode the Flow runs as. DefaultMode respects user permissions and sharing rules. SystemModeWithoutSharing grants broad data access but may lead to security warnings. | DefaultMode |
| Flow Metadata | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                                                       |             |
| Connection    | The Salesforce connection to use.                                                                                                                                                     |             |

### Create Lead {#createlead}

Create a Salesforce lead record.

| Input               | Comments                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Version             | The Salesforce API version number to use for requests.                                                               | 63.0    |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.        |         |
| Field Values        | Key-value pairs mapping Salesforce field API names to the values to set on the record.                               |         |
| First Name          | The first name of the contact at the company                                                                         |         |
| Last Name           | The last name of the contact at the company                                                                          |         |
| Company             | The name of the company associated with the record.                                                                  |         |
| Title               | The job title or professional title associated with the contact or lead.                                             |         |
| Phone               | The primary phone number for the object.                                                                             |         |
| Email Address       | The email address for the object.                                                                                    |         |
| Lead Source         | The origin or channel from which the lead was generated (e.g., Web, Phone, Email).                                   |         |
| Rating              | The rating for the lead.                                                                                             |         |
| Website             | The website URL associated with the record.                                                                          |         |
| Street Address      | The street address of the object.                                                                                    |         |
| State               | The state of the object's address.                                                                                   |         |
| City                | The city of the object's address.                                                                                    |         |
| Postal Code         | The zip code of the object's address.                                                                                |         |
| Number of Employees | The number of employees associated with the object.                                                                  |         |
| Description         | A text description of the object.                                                                                    |         |
| Annual Revenue      | The estimated annual revenue of the account, in the organization's default currency.                                 |         |
| Lead Status         | The status of the lead. Examples of valid values include: Open, Working, Closed - Converted, Closed - Not Converted. |         |
| Connection          | The Salesforce connection to use.                                                                                    |         |

### Create Metadata {#createobjectsfrommetadata}

Create new metadata components.

| Input         | Comments                                                                                                                 | Default                                                                                                                                                                                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    | The Salesforce connection to use.                                                                                        |                                                                                                                                                                                                                                                                                                               |
| Version       | The Salesforce API version number to use for requests.                                                                   | 63.0                                                                                                                                                                                                                                                                                                          |
| Metadata Type | The type of metadata to act upon.                                                                                        | CustomObject                                                                                                                                                                                                                                                                                                  |
| Metadata      | See [JSforce Metadata API documentation](https://jsforce.github.io/document/#create-metadata) for related documentation. | <code>[<br /> {<br /> "fullName": "TestObject1__c",<br /> "label": "Test Object 1",<br /> "pluralLabel": "Test Object 1",<br /> "nameField": {<br /> "type": "Text",<br /> "label": "Test Object Name"<br /> },<br /> "deploymentStatus": "Deployed",<br /> "sharingModel": "ReadWrite"<br /> }<br />]</code> |

### Create Metadata Fields {#createfieldsfrommetadata}

Create custom fields from metadata.

| Input         | Comments                                                                                                                 | Default                                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    | The Salesforce connection to use.                                                                                        |                                                                                                                                                                                                                                 |
| Version       | The Salesforce API version number to use for requests.                                                                   | 63.0                                                                                                                                                                                                                            |
| Metadata Type | The type of metadata to act upon.                                                                                        | CustomField                                                                                                                                                                                                                     |
| Metadata      | See [JSforce Metadata API documentation](https://jsforce.github.io/document/#create-metadata) for related documentation. | <code>[<br /> {<br /> "fullName": "Contact.FieldName1__c",<br /> "label": "Field Name 1",<br /> "type": "Text",<br /> "length": 80,<br /> "inlineHelpText": "Text that appears in the ? next to a field."<br /> }<br />]</code> |

### Create Opportunity {#createopportunity}

Create a Salesforce opportunity record representing a sale or pending deal.

| Input            | Comments                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version          | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Next Step        | A description of the next action or milestone for the opportunity.                                            |         |
| Dynamic Fields   | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values     | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Amount           | The monetary amount associated with the opportunity.                                                          |         |
| Account ID       | The ID of the account to reference.                                                                           |         |
| Stage            | The stage the sale is currently in.                                                                           |         |
| Opportunity Type | The category of the opportunity, indicating whether it is for a new or existing customer.                     |         |
| Close Date       | The date the sale is expected to close. Format: YYYY-MM-DD.                                                   |         |
| Lead Source      | The origin or channel from which the lead was generated (e.g., Web, Phone, Email).                            |         |
| Probability      | The probability of the success of the sale.                                                                   |         |
| Description      | A text description of the object.                                                                             |         |
| Name             | The name assigned to the Salesforce record.                                                                   |         |
| Connection       | The Salesforce connection to use.                                                                             |         |

### Create Outbound Message {#createworkflowoutboundmessage}

Create an Outbound Message in Salesforce.

| Input                  | Comments                                                                                              | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Version                | The Salesforce API version number to use for requests.                                                | 63.0    |
| Record Type            | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                       |         |
| Outbound Message Name  | The name of the Salesforce Outbound Message to create or reference.                                   |         |
| Description            | A text description of the object.                                                                     |         |
| Endpoint URL           | The endpoint URL to send the outbound message / webhook to                                            |         |
| Integration User Email | The email of the user under which the payload is sent. If not provided, the current user will be used |         |
| Fields                 | Fields to include in the Outbound Message.                                                            |         |
| Dynamic Fields         | Dynamic Fields, provided by value collection config variable, to include in the Outbound Message      |         |
| Connection             | The Salesforce connection to use.                                                                     |         |

### Create Profile {#createprofile}

Create a Salesforce profile.

| Input        | Comments                                                                                                                                                                            | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version      | The Salesforce API version number to use for requests.                                                                                                                              | 63.0    |
| Name         | The name of the profile.                                                                                                                                                            |         |
| Description  | Description of the profile.                                                                                                                                                         |         |
| Permissions  | Key/value object with permission name keys and boolean value indicating if a permission is granted or not. Use 'Describe Permissions' to retrieve the permissions of a Record Type. |         |
| User License | Identifier for associated UserLicense.                                                                                                                                              |         |
| Connection   | The Salesforce connection to use.                                                                                                                                                   |         |

### Create Record {#createrecord}

Create a Salesforce record.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Record Type    | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                               |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Create User {#createuser}

Create a Salesforce user.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Profile        | The name of the Salesforce User Profile that defines the user's permissions and settings.                     |         |
| User Name      | The username of the Salesforce user to reference.                                                             |         |
| First Name     | The first name of the contact at the company                                                                  |         |
| Last Name      | The last name of the contact at the company                                                                   |         |
| Time Zone      | The time zone for the user. Uses IANA format (e.g., America/New_York).                                        |         |
| Alias          | A short identifier for the Salesforce user, typically used in reports and list views.                         |         |
| Email Address  | The email address for the object.                                                                             |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Create Workflow Rule {#createworkflowrule}

Create a Workflow Rule. Workflow Rules are deprecated by Salesforce; migrate to Flow-based actions.

| Input                    | Comments                                                                                                                                                                                                                                                                                | Default      |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Version                  | The Salesforce API version number to use for requests.                                                                                                                                                                                                                                  | 63.0         |
| Record Type              | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                                                                                                                                                                         |              |
| Rule Name                | The name of the Salesforce Workflow Rule to create or reference.                                                                                                                                                                                                                        |              |
| Trigger Type             | Conditions in which the trigger fires. On All Changes: The workflow rule is considered on all changes. On Create Only: Considered on creation. On Create or Meets Rule Criteria: Considered on create and when it is updated to meet any Rule Criteria configured to the workflow rule. | onAllChanges |
| Active                   | When true, the workflow rule is active and will fire when its criteria are met.                                                                                                                                                                                                         | true         |
| Description              | A text description of the object.                                                                                                                                                                                                                                                       |              |
| Rule Criteria Filter     | Filter criteria data structure to use with the rule, use this or Formula. See [Salesforce Metadata API - FilterItem](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customfield.htm#filteritem) for the expected structure.                                   |              |
| Formula                  | Formula to evaluate. Use this input or Filter Criteria                                                                                                                                                                                                                                  |              |
| Outbound Message Actions | Full Names of the Outbound Message Actions for this Rule to fire.                                                                                                                                                                                                                       |              |
| Connection               | The Salesforce connection to use.                                                                                                                                                                                                                                                       |              |

### Deactivate Flow {#deactivateflow}

Deactivate a Flow in Salesforce by name.

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | The Salesforce API version number to use for requests.                                                                                                    | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Delete Account {#deleteaccount}

Delete an existing account record.

| Input        | Comments                                                                               | Default |
| ------------ | -------------------------------------------------------------------------------------- | ------- |
| Version      | The Salesforce API version number to use for requests.                                 | 63.0    |
| Field Values | Key-value pairs mapping Salesforce field API names to the values to set on the record. |         |
| Record ID    | The unique identifier for a Salesforce record.                                         |         |
| Connection   | The Salesforce connection to use.                                                      |         |

### Delete Bulk Job {#deletebulkjob}

Delete a bulk ingest job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Delete Bulk Query Job {#deletebulkqueryjob}

Delete a bulk query job.

| Input        | Comments                                               | Default |
| ------------ | ------------------------------------------------------ | ------- |
| Connection   | The Salesforce connection to use.                      |         |
| Version      | The Salesforce API version number to use for requests. | 63.0    |
| Query Job ID | The ID of the query job to delete                      |         |

### Delete Contact {#deletecontact}

Delete an existing contact record.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Delete Customer {#deletecustomer}

Delete an existing customer record.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Delete Flow {#deleteflow}

Delete a Flow from Salesforce by name.

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | The Salesforce API version number to use for requests.                                                                                                    | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Delete Instanced Flows and Outbound Messages {#deleteinstancedflowsandoutboundmessages}

Delete all instanced flows and outbound messages for a given endpoint URL.

| Input        | Comments                                                                  | Default |
| ------------ | ------------------------------------------------------------------------- | ------- |
| Version      | The Salesforce API version number to use for requests.                    | 63.0    |
| Endpoint URL | The endpoint URL to delete the instanced flows and outbound messages for. |         |
| Connection   | The Salesforce connection to use.                                         |         |

### Delete Lead {#deletelead}

Delete a Salesforce lead record.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Delete Metadata {#deletemetadata}

Delete one or more metadata components.

| Input             | Comments                                                                                  | Default      |
| ----------------- | ----------------------------------------------------------------------------------------- | ------------ |
| Connection        | The Salesforce connection to use.                                                         |              |
| Metadata Type     | The type of metadata to act upon.                                                         | CustomObject |
| Version           | The Salesforce API version number to use for requests.                                    | 63.0         |
| Object Full Names | The full API names of the Salesforce metadata objects to act on (e.g., TestObject1\_\_c). |              |

### Delete Opportunity {#deleteopportunity}

Delete an existing opportunity record.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Delete Profile {#deleteprofile}

Delete a Salesforce profile.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Delete Record {#deleterecord}

Delete an existing Salesforce record.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| Record ID   | The unique identifier for a Salesforce record.                                  |         |
| Connection  | The Salesforce connection to use.                                               |         |

### Delete Workflow Outbound Message {#deleteworkflowoutboundmessage}

Delete a Workflow Outbound Message.

| Input                | Comments                                                                                       | Default |
| -------------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                         | 63.0    |
| Full Name Identifier | The unique full name identifier for Salesforce Metadata objects (e.g., CustomObject API name). |         |
| Connection           | The Salesforce connection to use.                                                              |         |

### Delete Workflow Rule {#deleteworkflowrule}

Delete a Workflow Rule. Workflow Rules are deprecated by Salesforce; migrate to Flow-based actions.

| Input                | Comments                                                                                       | Default |
| -------------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                         | 63.0    |
| Full Name Identifier | The unique full name identifier for Salesforce Metadata objects (e.g., CustomObject API name). |         |
| Connection           | The Salesforce connection to use.                                                              |         |

### Describe Customer SObject {#describecustomersobject}

Describe metadata attributes of a Salesforce Customer object.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |

### Describe Object {#describeobject}

Describe attributes of a Salesforce record type.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| Connection  | The Salesforce connection to use.                                               |         |

### Describe Permissions {#describepermissions}

Describe permissions of a Salesforce record type.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| Connection  | The Salesforce connection to use.                                               |         |

### Find Record {#findrecord}

Find a single Salesforce record.

| Input             | Comments                                                                                                                                | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version           | The Salesforce API version number to use for requests.                                                                                  | 63.0    |
| Record Type       | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                         |         |
| Dynamic Fields    | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                           |         |
| Field Values      | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                  |         |
| Field Value Types | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String. |         |
| Connection        | The Salesforce connection to use.                                                                                                       |         |

### Find Records {#findrecords}

Find and fetch Salesforce records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Record Type          | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                                                                                                                                 |         |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### Get Attachment {#getattachment}

Get a file attachment from an account, opportunity, or contact.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection | The Salesforce connection to use.                      |         |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| File ID    | The unique identifier of the file to retrieve.         |         |

### Get Bulk Job Failed Record Results {#getjobfailedrecordresults}

Retrieve a list of failed records for a completed insert, delete, update, or upsert bulk job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Get Bulk Job Information {#getbulkjob}

Retrieve information about a bulk ingest job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Get Bulk Job Successful Record Results {#getjobsuccessfulrecordresults}

Retrieve the successful record results for a bulk ingest job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Get Bulk Query Job Information {#getqueryjobinformation}

Get information about a single bulk query job.

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Salesforce connection to use.                                                           |         |
| Version      | The Salesforce API version number to use for requests.                                      | 63.0    |
| Query Job ID | The unique identifier of the bulk query job returned from the Create Bulk Query Job action. |         |

### Get Bulk Query Job Results {#getqueryjobresults}

Retrieve the results for a completed bulk query job.

| Input        | Comments                                                                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Salesforce connection to use.                                                                                                |         |
| Version      | The Salesforce API version number to use for requests.                                                                           | 63.0    |
| Query Job ID | The unique identifier of the bulk query job returned from the Create Bulk Query Job action.                                      |         |
| Locator      | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results. |         |
| Max Records  | The maximum number of records to retrieve per set of results for the query. The request is still subject to the size limits.     |         |

### Get Current User {#getcurrentuser}

Retrieve information about the currently authenticated user.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |

### Get Customer {#getcustomer}

Retrieve a customer record by ID.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Get File {#getfile}

Retrieve a file from Salesforce ContentVersion.

| Input              | Comments                                                                     | Default |
| ------------------ | ---------------------------------------------------------------------------- | ------- |
| Content Version ID | The unique identifier of the ContentVersion record for the file to retrieve. |         |
| Version            | The Salesforce API version number to use for requests.                       | 63.0    |
| Connection         | The Salesforce connection to use.                                            |         |

### Get Flow {#getflow}

Get details of a specific Flow by name.

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | The Salesforce API version number to use for requests.                                                                                                    | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Get Object Metadata {#getobjectmetadatabyname}

Get the metadata of an object by full name.

| Input            | Comments                                                               | Default      |
| ---------------- | ---------------------------------------------------------------------- | ------------ |
| Connection       | The Salesforce connection to use.                                      |              |
| Metadata Type    | The type of metadata to act upon.                                      | CustomObject |
| Version          | The Salesforce API version number to use for requests.                 | 63.0         |
| Object Full Name | The full API name of the Salesforce custom object (e.g., Widget\_\_c). |              |

### Get Record {#getrecord}

Get a single Salesforce record by ID.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| Record ID   | The unique identifier for a Salesforce record.                                  |         |
| Connection  | The Salesforce connection to use.                                               |         |

### List All Bulk Query Job Information {#getallqueryjobinformation}

Retrieve information about all bulk query jobs in the org.

| Input                  | Comments                                                                                                                                        | Default  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection             | The Salesforce connection to use.                                                                                                               |          |
| Version                | The Salesforce API version number to use for requests.                                                                                          | 63.0     |
| Is PK Chunking Enabled | When true, the request only returns information about jobs where PK Chunking is enabled. This only applies to Bulk API (not Bulk API 2.0) jobs. | false    |
| Job Type               | Gets information only about jobs matching the specified job type.                                                                               |          |
| Concurrency Mode       | For future use. Gets information only about jobs matching the specified concurrency mode.                                                       | parallel |
| Query Locator          | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results.                |          |

### List Bulk Jobs {#listbulkjobs}

List all bulk ingest jobs in the org.

| Input                  | Comments                                                                                                                                        | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Salesforce connection to use.                                                                                                               |         |
| Version                | The Salesforce API version number to use for requests.                                                                                          | 63.0    |
| Is PK Chunking Enabled | When true, the request only returns information about jobs where PK Chunking is enabled. This only applies to Bulk API (not Bulk API 2.0) jobs. | false   |
| Job Type               | Gets information only about jobs matching the specified job type.                                                                               |         |
| Locator                | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results.                |         |

### List Composite Resources {#listcompositeresources}

Retrieve a list of URIs for available composite resources.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection | The Salesforce connection to use.                      |         |
| Version    | The Salesforce API version number to use for requests. | 63.0    |

### List Contacts {#listcontacts}

List all contact records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Customers {#listcustomers}

List all customer records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Flows {#listflows}

List all Flows in the Salesforce org.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |

### List Leads {#listleads}

List all lead records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Metadata {#listobjectmetadata}

List all metadata components in Salesforce.

| Input         | Comments                                               | Default      |
| ------------- | ------------------------------------------------------ | ------------ |
| Connection    | The Salesforce connection to use.                      |              |
| Metadata Type | The type of metadata to act upon.                      | CustomObject |
| Version       | The Salesforce API version number to use for requests. | 63.0         |

### List Opportunities {#listopportunities}

List all opportunity records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Outbound Messages {#listworkflowoutboundmessages}

Retrieve all Outbound Messages in the Salesforce org.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |

### List Profiles {#listprofiles}

List all profile records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Users {#listusers}

List all user records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Workflow Rules {#listworkflowrules}

List all Workflow Rules. Workflow Rules are deprecated by Salesforce; migrate to Flow-based actions.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |

### Query {#query}

Run an SOQL query against Salesforce.

| Input      | Comments                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------- | ------- |
| Version    | The Salesforce API version number to use for requests.                                 | 63.0    |
| SOQL Query | A Salesforce Object Query Language (SOQL) query to execute against the Salesforce API. |         |
| Connection | The Salesforce connection to use.                                                      |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Salesforce.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                   | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Salesforce connection to use.                                                                                                                                                                                                                                                                                          |         |
| Version                 | The Salesforce API version number to use for requests.                                                                                                                                                                                                                                                                     | 63.0    |
| URL                     | Input the path only (/chatter/feeds/record/), The base URL is already included (https://<YOUR_INSTANCE_URL_COMING_FROM_CONNECTION>/services/data/v<YOUR_INPUT_VERSION>). For example, to connect to https://instance_name/services/data/v58.0/chatter/feeds/record/, only /chatter/feeds/record/ is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                    |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                  |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                       |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                           |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                     |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                        |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                   | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                        |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                        | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                           | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                        | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                              | false   |

### Remove User Permission Set {#removeuserpermissionset}

Remove a permission set from the specified user.

| Input          | Comments                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                          | 63.0    |
| User Name      | The username of the Salesforce user to reference.                               |         |
| Permission Set | The name of the Salesforce Permission Set to assign to or remove from the user. |         |
| Connection     | The Salesforce connection to use.                                               |         |

### Send Composite Request {#compositerequests}

Send multiple requests in a single HTTP call.

| Input               | Comments                                                                                                                                                                       | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          | The Salesforce connection to use.                                                                                                                                              |         |
| Version             | The Salesforce API version number to use for requests.                                                                                                                         | 63.0    |
| All Or None         | When true, any error in a subrequest causes the entire composite request to be rolled back. The top-level request returns HTTP 200 and includes responses for each subrequest. | true    |
| Collate Subrequests | When true, the API collates unrelated subrequests to bulkify them for improved performance.                                                                                    | false   |
| Composite Request   | The JSON array of subrequests to execute in a single Composite API call. Each entry must include method, url, referenceId, and optionally body.                                |         |

### Send Transactional Email {#sendtransactionalemail}

Send a transactional email message to a single recipient via Salesforce.

| Input                 | Comments                                                                           | Default |
| --------------------- | ---------------------------------------------------------------------------------- | ------- |
| Message Key           | The unique key identifying the transactional message template to send.             |         |
| Definition Key        | The unique key of the message template definition used for the transactional send. |         |
| Recipient Contact Key | The unique key identifying the recipient contact in Salesforce Marketing Cloud.    |         |
| Recipient Email       | The email address of the recipient for the transactional send.                     |         |
| Recipient Attributes  | Key-value pairs to personalize the message.                                        |         |
| Connection            | The Salesforce connection to use.                                                  |         |
| Version               | The Salesforce API version number to use for requests.                             | 63.0    |

### Subscribe to Record Change {#subscribetorecordchange}

Create a Workflow Rule to subscribe to record changes in Salesforce. Workflow Rules are deprecated by Salesforce; migrate to Flow-based actions.

| Input                  | Comments                                                                                                                                                                                                                                              | Default      |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Version                | The Salesforce API version number to use for requests.                                                                                                                                                                                                | 63.0         |
| Outbound Message Name  | The name of the Salesforce Outbound Message to create or reference.                                                                                                                                                                                   |              |
| Record Type            | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                                                                                                                                       |              |
| Trigger Event          | The event condition that causes this workflow rule to fire.                                                                                                                                                                                           | onAllChanges |
| Endpoint URL           | The endpoint URL to send the outbound message / webhook to                                                                                                                                                                                            |              |
| Rule Criteria Filter   | Filter criteria data structure to use with the rule, use this or Formula. See [Salesforce Metadata API - FilterItem](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customfield.htm#filteritem) for the expected structure. |              |
| Formula                | Formula to evaluate. Use this input or Filter Criteria                                                                                                                                                                                                |              |
| Integration User Email | The email of the user under which the payload is sent. If not provided, the current user will be used                                                                                                                                                 |              |
| Description            | A text description of the object.                                                                                                                                                                                                                     |              |
| Fields                 | Fields to include in the Outbound Message.                                                                                                                                                                                                            |              |
| Dynamic Fields         | Dynamic Fields, provided by value collection config variable, to include in the Outbound Message                                                                                                                                                      |              |
| Connection             | The Salesforce connection to use.                                                                                                                                                                                                                     |              |

### Subscribe to Record Changes {#subscribetorecordchanges}

Subscribe to Record Changes in Salesforce using an outbound message action.

| Input               | Comments                                                                                                                                                         | Default         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Version             | The Salesforce API version number to use for requests.                                                                                                           | 63.0            |
| Prefix              | Sets a prefix to the Flow Name and Outbound Messages created. Must start with a letter, can contain letters, numbers, underscores, and be at most 15 characters. |                 |
| Endpoint URL        | The endpoint URL to send the outbound message / webhook to                                                                                                       |                 |
| Trigger Record Type | The Salesforce object API name (e.g., Account, Contact) whose record changes will trigger this flow.                                                             |                 |
| Trigger On          | When to trigger the flow (record creation, update, or both).                                                                                                     | CreateAndUpdate |
| Fields              | Fields to include in the Outbound Message.                                                                                                                       |                 |
| Dynamic Fields      | Dynamic Fields, provided by value collection config variable, to include in the Outbound Message                                                                 |                 |
| Flow Metadata       | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                                  |                 |
| Filter Formula      | Optional formula to filter which records trigger the flow.                                                                                                       |                 |
| Connection          | The Salesforce connection to use.                                                                                                                                |                 |

### Update Account {#updateaccount}

Update an existing account record.

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID              | The unique identifier for a Salesforce record.                                                                |         |
| Version                | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Phone                  | The primary phone number for the object.                                                                      |         |
| Website                | The website URL associated with the record.                                                                   |         |
| Account Type           | The type of account record.                                                                                   |         |
| Industry               | The industry of the account record.                                                                           |         |
| Description            | A text description of the object.                                                                             |         |
| Number of Employees    | The number of employees associated with the object.                                                           |         |
| Annual Revenue         | The estimated annual revenue of the account, in the organization's default currency.                          |         |
| Billing City           | The city of the object's billing address.                                                                     |         |
| Billing Postal Code    | The zip code of the object's billing address.                                                                 |         |
| Billing State          | The state of the object's billing address.                                                                    |         |
| Billing Street Address | The street address of the billing object.                                                                     |         |
| Billing Country        | The country of the object's billing address.                                                                  |         |
| Street Address         | The street address of the object.                                                                             |         |
| State                  | The state of the object's address.                                                                            |         |
| Country                | The country of the object's address.                                                                          |         |
| Name                   | The name assigned to the Salesforce record.                                                                   |         |
| City                   | The city of the object's address.                                                                             |         |
| Postal Code            | The zip code of the object's address.                                                                         |         |
| Connection             | The Salesforce connection to use.                                                                             |         |

### Update Contact {#updatecontact}

Update an existing contact record.

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID              | The unique identifier for a Salesforce record.                                                                |         |
| Email Address          | The email address for the object.                                                                             |         |
| Version                | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Phone                  | The primary phone number for the object.                                                                      |         |
| First Name             | The first name of the contact at the company                                                                  |         |
| Last Name              | The last name of the contact at the company                                                                   |         |
| Department             | The department name associated with the contact.                                                              |         |
| Birthdate              | The birthdate of the contact. Format: YYYY-MM-DD.                                                             |         |
| Fax                    | The fax number associated with the record.                                                                    |         |
| Title                  | The job title or professional title associated with the contact or lead.                                      |         |
| Mobile Phone           | The mobile phone number for the object.                                                                       |         |
| Assistant              | The name of the contact's assistant.                                                                          |         |
| Assistant's Phone      | The phone number of the contact's assistant.                                                                  |         |
| Description            | A text description of the object.                                                                             |         |
| Billing City           | The city of the object's billing address.                                                                     |         |
| Billing Postal Code    | The zip code of the object's billing address.                                                                 |         |
| Billing State          | The state of the object's billing address.                                                                    |         |
| Billing Street Address | The street address of the billing object.                                                                     |         |
| Billing Country        | The country of the object's billing address.                                                                  |         |
| Street Address         | The street address of the object.                                                                             |         |
| State                  | The state of the object's address.                                                                            |         |
| Country                | The country of the object's address.                                                                          |         |
| City                   | The city of the object's address.                                                                             |         |
| Postal Code            | The zip code of the object's address.                                                                         |         |
| Connection             | The Salesforce connection to use.                                                                             |         |

### Update Customer {#updatecustomer}

Update an existing customer record.

| Input                | Comments                                                                                                                                                                   | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID            | The unique identifier for a Salesforce record.                                                                                                                             |         |
| Version              | The Salesforce API version number to use for requests.                                                                                                                     | 63.0    |
| Name                 | Name of this customer.                                                                                                                                                     |         |
| Party ID             | The unique identifier of the individual object related to this customer record.                                                                                            |         |
| Customer Status Type | The status of the customer account.                                                                                                                                        | Active  |
| Last Reference Date  | The timestamp for when the current user last viewed a record related to this record.                                                                                       |         |
| Last Viewed Date     | The timestamp for when the current user last viewed this record. If this value is null, it's possible that this record was referenced (LastReferencedDate) and not viewed. |         |
| Owner ID             | The ID of the user who owns the record.                                                                                                                                    |         |
| Total Lifetime Value | The total revenue amount gained from this customer.                                                                                                                        |         |
| Connection           | The Salesforce connection to use.                                                                                                                                          |         |

### Update Flow {#updateflow}

Update an existing Flow in Salesforce by name.

| Input         | Comments                                                                                                                                                  | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version       | The Salesforce API version number to use for requests.                                                                                                    | 63.0    |
| Flow Name     | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Description   | Updated description for the Flow.                                                                                                                         |         |
| Flow Status   | The publication status of the Flow. Active flows execute when triggered; Draft and Obsolete flows do not.                                                 |         |
| Flow Metadata | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                           |         |
| Connection    | The Salesforce connection to use.                                                                                                                         |         |

### Update Lead {#updatelead}

Update a Salesforce lead record.

| Input               | Comments                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID           | The unique identifier for a Salesforce record.                                                                       |         |
| Version             | The Salesforce API version number to use for requests.                                                               | 63.0    |
| Company             | The name of the company associated with the record.                                                                  |         |
| Email Address       | The email address for the object.                                                                                    |         |
| Lead Status         | The status of the lead. Examples of valid values include: Open, Working, Closed - Converted, Closed - Not Converted. |         |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.        |         |
| Field Values        | Key-value pairs mapping Salesforce field API names to the values to set on the record.                               |         |
| First Name          | The first name of the contact at the company                                                                         |         |
| Last Name           | The last name of the contact at the company                                                                          |         |
| Title               | The job title or professional title associated with the contact or lead.                                             |         |
| Phone               | The primary phone number for the object.                                                                             |         |
| Lead Source         | The origin or channel from which the lead was generated (e.g., Web, Phone, Email).                                   |         |
| Rating              | The rating for the lead.                                                                                             |         |
| Website             | The website URL associated with the record.                                                                          |         |
| Street Address      | The street address of the object.                                                                                    |         |
| State               | The state of the object's address.                                                                                   |         |
| City                | The city of the object's address.                                                                                    |         |
| Postal Code         | The zip code of the object's address.                                                                                |         |
| Number of Employees | The number of employees associated with the object.                                                                  |         |
| Description         | A text description of the object.                                                                                    |         |
| Annual Revenue      | The estimated annual revenue of the account, in the organization's default currency.                                 |         |
| Connection          | The Salesforce connection to use.                                                                                    |         |

### Update Metadata {#updatemetadata}

Update one or more metadata components.

| Input         | Comments                                                                            | Default     |
| ------------- | ----------------------------------------------------------------------------------- | ----------- |
| Connection    | The Salesforce connection to use.                                                   |             |
| Version       | The Salesforce API version number to use for requests.                              | 63.0        |
| Metadata Type | The type of metadata to act upon.                                                   | CustomField |
| Metadata      | Check https://jsforce.github.io/document/#update-metadata for related documentation |             |

### Update Opportunity {#updateopportunity}

Update an existing opportunity record.

| Input            | Comments                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID        | The unique identifier for a Salesforce record.                                                                |         |
| Next Step        | A description of the next action or milestone for the opportunity.                                            |         |
| Version          | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Dynamic Fields   | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values     | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Amount           | The monetary amount associated with the opportunity.                                                          |         |
| Stage            | The stage the sale is currently in.                                                                           |         |
| Account ID       | The ID of the account to reference.                                                                           |         |
| Opportunity Type | The category of the opportunity, indicating whether it is for a new or existing customer.                     |         |
| Close Date       | The date the sale is expected to close. Format: YYYY-MM-DD.                                                   |         |
| Lead Source      | The origin or channel from which the lead was generated (e.g., Web, Phone, Email).                            |         |
| Probability      | The probability of the success of the sale.                                                                   |         |
| Description      | A text description of the object.                                                                             |         |
| Name             | The name assigned to the Salesforce record.                                                                   |         |
| Connection       | The Salesforce connection to use.                                                                             |         |

### Update Profile {#updateprofile}

Update a Salesforce profile.

| Input       | Comments                                                                                                                                                                            | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version     | The Salesforce API version number to use for requests.                                                                                                                              | 63.0    |
| Record ID   | The unique identifier for a Salesforce record.                                                                                                                                      |         |
| Name        | The name of the profile.                                                                                                                                                            |         |
| Description | Description of the profile.                                                                                                                                                         |         |
| Permissions | Key/value object with permission name keys and boolean value indicating if a permission is granted or not. Use 'Describe Permissions' to retrieve the permissions of a Record Type. |         |
| Connection  | The Salesforce connection to use.                                                                                                                                                   |         |

### Update Record {#updaterecord}

Update an existing Salesforce record.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Record Type    | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                               |         |
| Record ID      | The unique identifier for a Salesforce record.                                                                |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Update User {#updateuser}

Update a Salesforce user.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                                                        | 63.0    |
| User Name      | The username of the Salesforce user to reference.                                                             |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Upload Bulk Job Data {#uploadjobdata}

Upload CSV data for a bulk ingest job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |
| File        | The binary file data to upload as a Salesforce Content Version.                 |         |

### Upload File {#uploadfile}

Upload a file to Salesforce ContentVersion.

| Input          | Comments                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                                                                                                                                              | 63.0    |
| Connection     | The Salesforce connection to use.                                                                                                                                                                   |         |
| File           | The binary file data to upload as a Salesforce Content Version.                                                                                                                                     |         |
| Path On Client | The complete path of the document. One of the fields that determines the FileType. Specify a complete path including the path extension in order for the document to be visible in the Preview tab. |         |

### Upsert Record {#upsertrecord}

Update a Salesforce record if it exists, otherwise create a new Salesforce record.

| Input                  | Comments                                                                                  | Default |
| ---------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Version                | The Salesforce API version number to use for requests.                                    | 63.0    |
| Record Type            | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).           |         |
| External ID Field Name | The name of the column that refers to the External ID Field                               |         |
| Records                | The JSON array of records to be upserted. Each record must include the external ID field. |         |
| Connection             | The Salesforce connection to use.                                                         |         |

### Validate Connection {#validateconnection}

Validate the provided connection and return whether it is valid.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |
