---
title: Salesforce Connector
sidebar_label: Salesforce
description: Query, create, update or delete Salesforce records
---

![Salesforce](./assets/salesforce.png#connector-icon)
[Salesforce](https://www.salesforce.com/) is a customer relationship management (CRM) platform.
This component gives you the ability to manage sales leads and records within the Salesforce platform.

## API Documentation

This component was built using the following API References currently utilizing v63.0 by default.

- [Salesforce REST API Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)
- [Salesforce Bulk API Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm)

## Connections

### Basic Authentication {#basic}

Authenticate requests to Salesforce using basic auth.

When using Basic Auth, supply a Salesforce username and password.
Depending on the Salesforce setup, the password may have a security token attached to it.
If security tokens in the Salesforce account are _disabled_, the password to supply is simply the Salesforce password.
If security tokens are _enabled_ in the Salesforce account, then the password to enter is the concatenation of the password and the security token.

For example, if the Salesforce password is `p@$sw0rD` and the security token that Salesforce provides is `ExAmPlE0000000000ExAmPlE`, then enter `p@$sw0rDExAmPlE0000000000ExAmPlE` as the password.
Manage security tokens by clicking the profile picture on the top-right of _Salesforce_, selecting **My Settings**, and then opening **Personal** -> **Reset My Security Token**.

| Input     | Comments                                            | Default |
| --------- | --------------------------------------------------- | ------- |
| Username  | The username of the Salesforce account              |         |
| Password  | The password of the Salesforce account              |         |
| Login URL | Your SalesForce Login URL - required for Basic Auth |         |

### OAuth 2.0 {#oauth2}

Authenticate requests to Salesforce using values obtained from the developer console.

OAuth 2.0 provides a simple way for users to authorize applications.
To use OAuth 2.0, create and configure a [Connected App](https://help.salesforce.com/s/articleView?id=xcloud.connected_app_create.htm&type=5) within Salesforce:

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

Now, add a Salesforce action to the integration.
This will automatically create a connection config variable for Salesforce.
Enter the **Consumer Key** and **Consumer Secret** noted previously.

Users should now be able to authenticate through Salesforce using OAuth 2.0.

:::note Connecting to a Salesforce Sandbox Account
To connect to a Salesforce sandbox organization for testing purposes, edit the connection's Authorize URL, Token URL and Revoke URLs to read `test.salesforce.com` instead of `login.salesforce.com`.
Be sure to change these values back when testing is done.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                       | Default                                                |
| --------------- | ---------------------------------------------- | ------------------------------------------------------ |
| Authorize URL   | The OAuth 2.0 Authorization URL for Salesforce | https://login.salesforce.com/services/oauth2/authorize |
| Token URL       | The OAuth 2.0 Token URL for Salesforce         | https://login.salesforce.com/services/oauth2/token     |
| Revoke URL      | The OAuth 2.0 Revocation URL for Salesforce    | https://login.salesforce.com/services/oauth2/revoke    |
| Consumer Key    |                                                |                                                        |
| Consumer Secret |                                                |                                                        |

### OAuth 2.0 Client Credentials {#salesforceclientcredentials}

Authenticate using OAuth 2.0 Client Credentials for server-to-server integration.

OAuth 2.0 Client Credentials provides server-to-server authentication without user interaction. Use this connection type for integrations that run in the background without a user context.

This connection requires a Connected App configured for Client Credentials. If a Connected App already exists for OAuth 2.0 (see [OAuth 2.0 connection documentation](#oauth2)), enable Client Credentials on that app. Otherwise, create a new Connected App following the OAuth 2.0 setup steps first.

#### Enable Client Credentials Flow

1. Navigate to **Setup** > **Apps** > **App Manager**
2. Find the Connected App and select **Edit** from the dropdown menu
3. Under **API (Enable OAuth Settings)**, check **Enable Client Credentials Flow**
4. Click **Save**

#### Configure Run As User

The Client Credentials flow requires specifying which user the integration will authenticate as:

1. From the Connected App, select **Manage** from the dropdown menu
2. Click **Edit Policies**
3. Under **Client Credentials Flow**, select a user from the **Run As** dropdown
4. Click **Save**

The selected user's permissions determine what the integration can access.

#### Configure the Connection

- **Instance URL**: Enter the Salesforce My Domain URL (e.g., `https://acme-corp.my.salesforce.com`)
- **Consumer Key**: Enter the Consumer Key from the Connected App
- **Consumer Secret**: Enter the Consumer Secret from the Connected App

:::note Connecting to a Salesforce Sandbox
For sandbox environments, use the sandbox My Domain URL format: `https://your-company--sandbox.sandbox.my.salesforce.com`
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                                                                                                                                | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Instance URL    | Your Salesforce My Domain URL (e.g., https://your-company.my.salesforce.com). For sandbox, use https://your-company--sandbox.sandbox.my.salesforce.com. |         |
| Consumer Key    | The Consumer Key from your Salesforce Connected App.                                                                                                    |         |
| Consumer Secret | The Consumer Secret from your Salesforce Connected App.                                                                                                 |         |
| Scopes          | Scopes are configured in the Salesforce Connected App settings.                                                                                         |         |

## Triggers

### Flow Outbound Message Webhook {#flowoutboundmessagetrigger}

Receive Flow-based outbound messages from Salesforce.

| Input               | Comments                                                                                                                                                         | Default         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Version             | Salesforce API Version Number.                                                                                                                                   | 63.0            |
| Prefix              | Sets a prefix to the Flow Name and Outbound Messages created. Must start with a letter, can contain letters, numbers, underscores, and be at most 15 characters. |                 |
| Trigger Record Type | The Record Type that will trigger this integration flow.                                                                                                         |                 |
| Trigger On          | When to trigger the flow (record creation, update, or both).                                                                                                     | CreateAndUpdate |
| Fields              | Fields to include in the Outbound Message.                                                                                                                       |                 |
| Flow Metadata       | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                                  |                 |
| Filter Formula      | Optional formula to filter which records trigger the flow.                                                                                                       |                 |
| Connection          | The Salesforce connection to use.                                                                                                                                |                 |

### New and Updated Records {#pollchangestrigger}

Checks for new and updated records in Salesforce on a recurring schedule.

| Input                | Comments                                                                                                                                                     | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection           | The Salesforce connection to use.                                                                                                                            |         |
| Show New Records     | Show new records.                                                                                                                                            | true    |
| Show Updated Records | Show updated records.                                                                                                                                        | true    |
| Version              | Salesforce API Version Number.                                                                                                                               | 63.0    |
| Record Type          | The type of Salesforce Record.                                                                                                                               |         |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                     |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String. |         |
| Max Records To Fetch | You can set the maximum number of records the trigger will fetch. By default, it will fetch up to 20,000 records.                                            | 20000   |

### Webhook {#webhook}

Trigger for handling webhook requests from the Salesforce platform. Returns the expected response to Salesforce and converts the XML payload to an object for more convenient use in the rest of the flow.

### Workflow Outbound Message Webhook (Deprecated) {#workflowtrigger}

Receive workflow rule outbound messages from Salesforce.

| Input                 | Comments                                                                                                                                                                                                                                                                                | Default      |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection            | The Salesforce connection to use.                                                                                                                                                                                                                                                       |              |
| Record Type           | The type of Salesforce Record.                                                                                                                                                                                                                                                          |              |
| Trigger Type          | Conditions in which the trigger fires. On All Changes: The workflow rule is considered on all changes. On Create Only: Considered on creation. On Create or Meets Rule Criteria: Considered on create and when it is updated to meet any Rule Criteria configured to the workflow rule. | onAllChanges |
| Outbound Message Name | The name of the outbound message to be used.                                                                                                                                                                                                                                            |              |
| Workflow Rule Name    | The name of the workflow rule to be used.                                                                                                                                                                                                                                               |              |
| Description           | Provide a string value for the description of the object.                                                                                                                                                                                                                               |              |
| Fields                | Fields to include in the Outbound Message.                                                                                                                                                                                                                                              |              |
| Version               | Salesforce API Version Number.                                                                                                                                                                                                                                                          | 63.0         |

## Actions

### Abort Bulk Job {#abortbulkjob}

Aborts a Job

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                                |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Abort Bulk Query Job {#abortbulkqueryjob}

Aborts a query job.

| Input        | Comments                          | Default |
| ------------ | --------------------------------- | ------- |
| Connection   | The Salesforce connection to use. |         |
| Version      | Salesforce API Version Number.    | 63.0    |
| Query Job Id | The ID of the query job to abort  |         |

### Activate Flow {#activateflow}

Activate a Flow in Salesforce by name

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | Salesforce API Version Number.                                                                                                                            | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Add Attachment {#addattachment}

Attach a file to a Parent record object (Account, Opportunity, etc.)

| Input         | Comments                                                         | Default |
| ------------- | ---------------------------------------------------------------- | ------- |
| Connection    | The Salesforce connection to use.                                |         |
| Version       | Salesforce API Version Number.                                   | 63.0    |
| Record ID     | The ID of a Salesforce Record                                    |         |
| File Name     | The name of the file you wish to upload                          |         |
| File Contents | Reference a file from a previous step, or enter plain text here. |         |

### Add User Permission Set {#adduserpermissionset}

Adds a Permission Set to the specified User

| Input          | Comments                                | Default |
| -------------- | --------------------------------------- | ------- |
| Version        | Salesforce API Version Number.          | 63.0    |
| User Name      | Provide a User Name.                    |         |
| Permission Set | Provide the name of the Permission Set. |         |
| Connection     | The Salesforce connection to use.       |         |

### Bulk Insert Records {#bulkinsertrecords}

Creates new Salesforce Records

| Input                  | Comments                                                    | Default |
| ---------------------- | ----------------------------------------------------------- | ------- |
| Version                | Salesforce API Version Number.                              | 63.0    |
| Record Type            | The type of Salesforce Record.                              |         |
| External ID Field Name | The name of the column that refers to the External ID Field |         |
| File                   | The file to be uploaded                                     |         |
| Connection             | The Salesforce connection to use.                           |         |

### Bulk Upsert Records {#bulkupsertrecords}

Updates Salesforce Records if they exists, otherwise creates new Salesforce Records

| Input                  | Comments                                                    | Default |
| ---------------------- | ----------------------------------------------------------- | ------- |
| Version                | Salesforce API Version Number.                              | 63.0    |
| Record Type            | The type of Salesforce Record.                              |         |
| External ID Field Name | The name of the column that refers to the External ID Field |         |
| File                   | The file to be uploaded                                     |         |
| Connection             | The Salesforce connection to use.                           |         |

### Complete Upload Bulk Job {#completeuploadbulkjob}

Notifies Salesforce servers that the upload of job data is complete and is ready for processing. You can’t add any more job data.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                                |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Composite Requests {#compositerequests}

Send multiple requests in a single HTTP call

| Input               | Comments                                                                                                                                                                                                                       | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          | The Salesforce connection to use.                                                                                                                                                                                              |         |
| Version             | Salesforce API Version Number.                                                                                                                                                                                                 | 63.0    |
| All Or None         | Specifies what to do when an error occurs while processing a subrequest. If the value is true, the entire composite request is rolled back. The top-level request returns HTTP 200 and includes responses for each subrequest. | true    |
| Collate Subrequests | Controls whether the API collates unrelated subrequests to bulkify them (true) or not (false).                                                                                                                                 | false   |
| Composite Request   | Collection of subrequests to execute.                                                                                                                                                                                          |         |

### Create Account {#createaccount}

Create a Salesforce Account Record

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version                | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Name of a record's fields and their corresponding values                                                      |         |
| Phone                  | The primary phone number for the object.                                                                      |         |
| Website                | Provide a valid URL for the website of the object.                                                            |         |
| Account Type           | The type of account record.                                                                                   |         |
| Industry               | The industry of the account record.                                                                           |         |
| Description            | Provide a string value for the description of the object.                                                     |         |
| Number of Employees    | The number of employees associated with the object.                                                           |         |
| Annual Revenue         | The estimated annual revenue of the object.                                                                   |         |
| Billing City           | The city of the object's billing address.                                                                     |         |
| Billing Postal Code    | The zip code of the object's billing address.                                                                 |         |
| Billing State          | The state of the object's billing address.                                                                    |         |
| Billing Street Address | The street address of the billing object.                                                                     |         |
| Billing Country        | The country of the object's billing address.                                                                  |         |
| Street Address         | The street address of the object.                                                                             |         |
| State                  | The state of the object's address.                                                                            |         |
| Country                | The country of the object's address.                                                                          |         |
| Name                   | The name of the object.                                                                                       |         |
| City                   | The city of the object's address.                                                                             |         |
| Postal Code            | The zip code of the object's address.                                                                         |         |
| Connection             | The Salesforce connection to use.                                                                             |         |

### Create Bulk Job {#createbulkjob}

Creates a job representing a bulk operation and its associated data that is sent to Salesforce for asynchronous processing.

| Input                  | Comments                                                                                                                            | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Salesforce connection to use.                                                                                                   |         |
| Version                | Salesforce API Version Number.                                                                                                      | 63.0    |
| Object                 | The object type for the data being processed. Use only a single object type per job.                                                |         |
| Operation              | The operation to execute                                                                                                            | insert  |
| External ID Field Name | The external ID field in the object being updated. Only needed for upsert operations. Field values must also exist in CSV job data. |         |
| Assignment Rule Id     | The ID of an assignment rule to run for a Case or a Lead. The assignment rule can be active or inactive.                            |         |
| Column Delimiter       | The delimiter to use for the columns                                                                                                | COMMA   |
| Line Ending            | The line ending to use for the file                                                                                                 | LF      |

### Create Bulk Query Job {#createbulkqueryjob}

Creates a query job.

| Input            | Comments                             | Default |
| ---------------- | ------------------------------------ | ------- |
| Connection       | The Salesforce connection to use.    |         |
| Version          | Salesforce API Version Number.       | 63.0    |
| Operation        | The operation to execute             | query   |
| Query            | The query to execute                 |         |
| Column Delimiter | The delimiter to use for the columns | COMMA   |
| Line Ending      | The line ending to use for the file  | LF      |

### Create Contact {#createcontact}

Create a Salesforce contact

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Email Address          | The email address for the object.                                                                             |         |
| Version                | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Name of a record's fields and their corresponding values                                                      |         |
| Phone                  | The primary phone number for the object.                                                                      |         |
| First Name             | The first name of the contact at the company                                                                  |         |
| Last Name              | The last name of the contact at the company                                                                   |         |
| Department             | Provide a string value that represents the name of the contact's department.                                  |         |
| Birthdate              | Provide a string value that represents the birthdate.                                                         |         |
| Fax                    | Provide a string value for the fax number.                                                                    |         |
| Title                  | The title of the object.                                                                                      |         |
| Mobile Phone           | The mobile phone number for the object.                                                                       |         |
| Assistant              | Provide a string value that represents the name of the contact's assistant.                                   |         |
| Assistant's Phone      | Provide a string value that represents the phone number of the contact's assistant.                           |         |
| Description            | Provide a string value for the description of the object.                                                     |         |
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

Create a Salesforce customer

| Input                | Comments                                                                                                                                                                   | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                             | 63.0    |
| Name                 | Name of this customer.                                                                                                                                                     |         |
| Party Id             | Represents the individual object related to this customer record.                                                                                                          |         |
| Customer Status Type | The status of the customer account.                                                                                                                                        | Active  |
| Last Reference Date  | The timestamp for when the current user last viewed a record related to this record.                                                                                       |         |
| Last Viewed Date     | The timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |         |
| Owner Id             | The ID of the user who owns the record.                                                                                                                                    |         |
| Total Lifetime Value | The total revenue amount gained from this customer.                                                                                                                        |         |
| Connection           | The Salesforce connection to use.                                                                                                                                          |         |

### Create Flow {#createflow}

Create a draft flow in Salesforce

| Input         | Comments                                                                                                                                                                              | Default     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Version       | Salesforce API Version Number.                                                                                                                                                        | 63.0        |
| Flow Name     | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is.                             |             |
| Description   | Provide a string value for the description of the object.                                                                                                                             |             |
| Run In Mode   | The context user mode the Flow runs as. DefaultMode respects user permissions and sharing rules. SystemModeWithoutSharing grants broad data access but may lead to security warnings. | DefaultMode |
| Flow Metadata | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                                                       |             |
| Connection    | The Salesforce connection to use.                                                                                                                                                     |             |

### Create Lead {#createlead}

Create a Salesforce Lead Record

| Input               | Comments                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Version             | Salesforce API Version Number.                                                                                       | 63.0    |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.        |         |
| Field Values        | Name of a record's fields and their corresponding values                                                             |         |
| First Name          | The first name of the contact at the company                                                                         |         |
| Last Name           | The last name of the contact at the company                                                                          |         |
| Company             | The name of the company                                                                                              |         |
| Title               | The title of the object.                                                                                             |         |
| Phone               | The primary phone number for the object.                                                                             |         |
| Email Address       | The email address for the object.                                                                                    |         |
| Lead Source         | Provide a value for the source of the lead.                                                                          |         |
| Rating              | The rating for the lead.                                                                                             |         |
| Website             | Provide a valid URL for the website of the object.                                                                   |         |
| Street Address      | The street address of the object.                                                                                    |         |
| State               | The state of the object's address.                                                                                   |         |
| City                | The city of the object's address.                                                                                    |         |
| Postal Code         | The zip code of the object's address.                                                                                |         |
| Number of Employees | The number of employees associated with the object.                                                                  |         |
| Description         | Provide a string value for the description of the object.                                                            |         |
| Annual Revenue      | The estimated annual revenue of the object.                                                                          |         |
| Lead Status         | The status of the lead. Examples of valid values include: Open, Working, Closed - Converted, Closed - Not Converted. |         |
| Connection          | The Salesforce connection to use.                                                                                    |         |

### Create Metadata {#createobjectsfrommetadata}

Create new metadata components.

| Input         | Comments                                                                           | Default                                                                                                                                                                                                                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    | The Salesforce connection to use.                                                  |                                                                                                                                                                                                                                                                                                               |
| Version       | Salesforce API Version Number.                                                     | 63.0                                                                                                                                                                                                                                                                                                          |
| Metadata Type | The type of metadata to act upon.                                                  | CustomObject                                                                                                                                                                                                                                                                                                  |
| Metadata      | See https://jsforce.github.io/document/#create-metadata for related documentation. | <code>[<br /> {<br /> "fullName": "TestObject1__c",<br /> "label": "Test Object 1",<br /> "pluralLabel": "Test Object 1",<br /> "nameField": {<br /> "type": "Text",<br /> "label": "Test Object Name"<br /> },<br /> "deploymentStatus": "Deployed",<br /> "sharingModel": "ReadWrite"<br /> }<br />]</code> |

### Create Metadata Fields {#createfieldsfrommetadata}

Create custom fields from metadata

| Input         | Comments                                                                           | Default                                                                                                                                                                                                                         |
| ------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    | The Salesforce connection to use.                                                  |                                                                                                                                                                                                                                 |
| Version       | Salesforce API Version Number.                                                     | 63.0                                                                                                                                                                                                                            |
| Metadata Type | The type of metadata to act upon.                                                  | CustomField                                                                                                                                                                                                                     |
| Metadata      | See https://jsforce.github.io/document/#create-metadata for related documentation. | <code>[<br /> {<br /> "fullName": "Contact.FieldName1__c",<br /> "label": "Field Name 1",<br /> "type": "Text",<br /> "length": 80,<br /> "inlineHelpText": "Text that appears in the ? next to a field."<br /> }<br />]</code> |

### Create Opportunity {#createopportunity}

Create a Salesforce Opportunity Record, which is a sale or pending deal

| Input            | Comments                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version          | Salesforce API Version Number.                                                                                | 63.0    |
| Next Step        | Provide a string value for the next step of the sale.                                                         |         |
| Dynamic Fields   | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values     | Name of a record's fields and their corresponding values                                                      |         |
| Amount           | Provide a number that represents the opportunity amount.                                                      |         |
| Account ID       | The ID of the account to reference.                                                                           |         |
| Stage            | The stage the sale is currently in.                                                                           |         |
| Opportunity Type | Provide a value for what type of opportunity this is.                                                         |         |
| Close Date       | The date the sale will close.                                                                                 |         |
| Lead Source      | Provide a value for the source of the lead.                                                                   |         |
| Probability      | The probability of the success of the sale.                                                                   |         |
| Description      | Provide a string value for the description of the object.                                                     |         |
| Name             | The name of the object.                                                                                       |         |
| Connection       | The Salesforce connection to use.                                                                             |         |

### Create Outbound Message {#createworkflowoutboundmessage}

Create a new Outbound Message.

| Input                  | Comments                                                                                              | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Version                | Salesforce API Version Number.                                                                        | 63.0    |
| Record Type            | The type of Salesforce Record.                                                                        |         |
| Outbound Message Name  | Name of the Outbound Message                                                                          |         |
| Description            | Provide a string value for the description of the object.                                             |         |
| Endpoint URL           | The endpoint URL to send the outbound message / webhook to                                            |         |
| Integration User Email | The email of the user under which the payload is sent. If not provided, the current user will be used |         |
| Fields                 | Fields to include in the Outbound Message.                                                            |         |
| Dynamic Fields         | Dynamic Fields, provided by value collection config variable, to include in the Outbound Message      |         |
| Connection             | The Salesforce connection to use.                                                                     |         |

### Create Profile {#createprofile}

Create a Salesforce Profile

| Input        | Comments                                                                                                                                                                            | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version      | Salesforce API Version Number.                                                                                                                                                      | 63.0    |
| Name         | The name of the profile.                                                                                                                                                            |         |
| Description  | Description of the profile.                                                                                                                                                         |         |
| Permissions  | Key/value object with permission name keys and boolean value indicating if a permission is granted or not. Use 'Describe Permissions' to retrieve the permissions of a Record Type. |         |
| User License | Identifier for associated UserLicense.                                                                                                                                              |         |
| Connection   | The Salesforce connection to use.                                                                                                                                                   |         |

### Create Record {#createrecord}

Create a Salesforce Record

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | Salesforce API Version Number.                                                                                | 63.0    |
| Record Type    | The type of Salesforce Record.                                                                                |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Name of a record's fields and their corresponding values                                                      |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Create User {#createuser}

Create a Salesforce User

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Name of a record's fields and their corresponding values                                                      |         |
| Profile        | Provide the name of the User Profile.                                                                         |         |
| User Name      | Provide a User Name.                                                                                          |         |
| First Name     | The first name of the contact at the company                                                                  |         |
| Last Name      | The last name of the contact at the company                                                                   |         |
| Time Zone      | Time Zone in the format of 'America/New_York'.                                                                |         |
| Alias          | Provide an Alias for the User.                                                                                |         |
| Email Address  | The email address for the object.                                                                             |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Create Workflow Rule (Deprecated) {#createworkflowrule}

Create a Workflow Rule. Workflow Rules are being deprecated by Salesforce. Please migrate to using Flow based actions

| Input                    | Comments                                                                                                                                                                                                                                                                                | Default      |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Version                  | Salesforce API Version Number.                                                                                                                                                                                                                                                          | 63.0         |
| Record Type              | The type of Salesforce Record.                                                                                                                                                                                                                                                          |              |
| Rule Name                | Name of the Workflow Rule                                                                                                                                                                                                                                                               |              |
| Trigger Type             | Conditions in which the trigger fires. On All Changes: The workflow rule is considered on all changes. On Create Only: Considered on creation. On Create or Meets Rule Criteria: Considered on create and when it is updated to meet any Rule Criteria configured to the workflow rule. | onAllChanges |
| Active                   | Determines if this Rule is active                                                                                                                                                                                                                                                       | true         |
| Description              | Provide a string value for the description of the object.                                                                                                                                                                                                                               |              |
| Rule Criteria Filter     | Filter criteria data structure to use with the rule, use this or Formula. See https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customfield.htm#filteritem                                                                                                       |              |
| Formula                  | Formula to evaluate. Use this input or Filter Criteria                                                                                                                                                                                                                                  |              |
| Outbound Message Actions | Full Names of the Outbound Message Actions for this Rule to fire.                                                                                                                                                                                                                       |              |
| Connection               | The Salesforce connection to use.                                                                                                                                                                                                                                                       |              |

### Deactivate Flow {#deactivateflow}

Deactivate a Flow in Salesforce by name

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | Salesforce API Version Number.                                                                                                                            | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Delete Account {#deleteaccount}

Delete an existing account record

| Input        | Comments                                                 | Default |
| ------------ | -------------------------------------------------------- | ------- |
| Version      | Salesforce API Version Number.                           | 63.0    |
| Field Values | Name of a record's fields and their corresponding values |         |
| Record ID    | The ID of a Salesforce Record                            |         |
| Connection   | The Salesforce connection to use.                        |         |

### Delete Bulk Job {#deletebulkjob}

Deletes a job.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                                |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Delete Bulk Query Job {#deletebulkqueryjob}

Deletes a query job.

| Input        | Comments                          | Default |
| ------------ | --------------------------------- | ------- |
| Connection   | The Salesforce connection to use. |         |
| Version      | Salesforce API Version Number.    | 63.0    |
| Query Job Id | The ID of the query job to delete |         |

### Delete Contact {#deletecontact}

Delete an existing contact record

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Record ID  | The ID of a Salesforce Record     |         |
| Connection | The Salesforce connection to use. |         |

### Delete Customer {#deletecustomer}

Delete an existing customer record

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Record ID  | The ID of a Salesforce Record     |         |
| Connection | The Salesforce connection to use. |         |

### Delete Flow {#deleteflow}

Delete a Flow from Salesforce by name

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | Salesforce API Version Number.                                                                                                                            | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Delete Instanced Flows and Outbound Messages {#deleteinstancedflowsandoutboundmessages}

Delete all instanced flows and outbound messages for a given endpoint URL

| Input        | Comments                                                                  | Default |
| ------------ | ------------------------------------------------------------------------- | ------- |
| Version      | Salesforce API Version Number.                                            | 63.0    |
| Endpoint URL | The endpoint URL to delete the instanced flows and outbound messages for. |         |
| Connection   | The Salesforce connection to use.                                         |         |

### Delete Lead {#deletelead}

Delete a Salesforce Lead Record

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Record ID  | The ID of a Salesforce Record     |         |
| Connection | The Salesforce connection to use. |         |

### Delete Metadata {#deletemetadata}

Delete one or more metadata components.

| Input             | Comments                                | Default      |
| ----------------- | --------------------------------------- | ------------ |
| Connection        | The Salesforce connection to use.       |              |
| Metadata Type     | The type of metadata to act upon.       | CustomObject |
| Version           | Salesforce API Version Number.          | 63.0         |
| Object Full Names | The full names of the objects to delete |              |

### Delete Opportunity {#deleteopportunity}

Delete an existing opportunity record

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Record ID  | The ID of a Salesforce Record     |         |
| Connection | The Salesforce connection to use. |         |

### Delete Profile {#deleteprofile}

Delete a Salesforce Profile

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Record ID  | The ID of a Salesforce Record     |         |
| Connection | The Salesforce connection to use. |         |

### Delete Record {#deleterecord}

Delete an existing Salesforce Record

| Input       | Comments                          | Default |
| ----------- | --------------------------------- | ------- |
| Version     | Salesforce API Version Number.    | 63.0    |
| Record Type | The type of Salesforce Record.    |         |
| Record ID   | The ID of a Salesforce Record     |         |
| Connection  | The Salesforce connection to use. |         |

### Delete Workflow Outbound Message {#deleteworkflowoutboundmessage}

Delete a Workflow Outbound Message

| Input                | Comments                               | Default |
| -------------------- | -------------------------------------- | ------- |
| Version              | Salesforce API Version Number.         | 63.0    |
| Full Name Identifier | Unique identifier for Metadata objects |         |
| Connection           | The Salesforce connection to use.      |         |

### Delete Workflow Rule (Deprecated) {#deleteworkflowrule}

Delete a Workflow Rule. Workflow Rules are being deprecated by Salesforce. Please migrate to using Flow based actions.

| Input                | Comments                               | Default |
| -------------------- | -------------------------------------- | ------- |
| Version              | Salesforce API Version Number.         | 63.0    |
| Full Name Identifier | Unique identifier for Metadata objects |         |
| Connection           | The Salesforce connection to use.      |         |

### Describe Customer SObject {#describecustomersobject}

Metadata description API for Salesforce object.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Connection | The Salesforce connection to use. |         |

### Describe Object {#describeobject}

Describe attributes of a Salesforce Record Type

| Input       | Comments                          | Default |
| ----------- | --------------------------------- | ------- |
| Version     | Salesforce API Version Number.    | 63.0    |
| Record Type | The type of Salesforce Record.    |         |
| Connection  | The Salesforce connection to use. |         |

### Describe Permissions {#describepermissions}

Describe permissions of a Salesforce Record Type

| Input       | Comments                          | Default |
| ----------- | --------------------------------- | ------- |
| Version     | Salesforce API Version Number.    | 63.0    |
| Record Type | The type of Salesforce Record.    |         |
| Connection  | The Salesforce connection to use. |         |

### Find Record {#findrecord}

Find a single Salesforce Record

| Input             | Comments                                                                                                                                                     | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Version           | Salesforce API Version Number.                                                                                                                               | 63.0    |
| Record Type       | The type of Salesforce Record.                                                                                                                               |         |
| Dynamic Fields    | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                |         |
| Field Values      | Name of a record's fields and their corresponding values                                                                                                     |         |
| Field Value Types | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String. |         |
| Connection        | The Salesforce connection to use.                                                                                                                            |         |

### Find Records {#findrecords}

Find and fetch Salesforce Records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Record Type          | The type of Salesforce Record.                                                                                                                                                                                                                           |         |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                                        |         |

### Get Attachment {#getattachment}

Get a file attachment from an account, opportunity or contact

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection | The Salesforce connection to use.       |         |
| Version    | Salesforce API Version Number.          | 63.0    |
| File Id    | The id of the file you wish to retrieve |         |

### Get Bulk Job Failed Record Results {#getjobfailedrecordresults}

Retrieves a list of failed records for a completed insert, delete, update or upsert job.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                                |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Get Bulk Job Info {#getbulkjob}

Retrieves detailed information about a job.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                                |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Get Bulk Job Successful Record Results {#getjobsuccessfulrecordresults}

Retrieves the successful record results for a job.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                                |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Get Bulk Query Job Information {#getqueryjobinformation}

Gets information about one query job.

| Input        | Comments                          | Default |
| ------------ | --------------------------------- | ------- |
| Connection   | The Salesforce connection to use. |         |
| Version      | Salesforce API Version Number.    | 63.0    |
| Query Job Id | The ID of the query job           |         |

### Get Current User {#getcurrentuser}

Return information about the current session's user

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Connection | The Salesforce connection to use. |         |

### Get Customer {#getcustomer}

Gets an existing customer record

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Record ID  | The ID of a Salesforce Record     |         |
| Connection | The Salesforce connection to use. |         |

### Get File {#getfile}

Retrieves a file from Salesforce ContentVersion

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Content Version Id | The ID of the ContentVersion of the file to retrieve |         |
| Version            | Salesforce API Version Number.                       | 63.0    |
| Connection         | The Salesforce connection to use.                    |         |

### Get Flow {#getflow}

Get details of a specific Flow by name

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | Salesforce API Version Number.                                                                                                                            | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Get Information About All Query Jobs {#getallqueryjobinformation}

Gets information about all query jobs in the org.

| Input                  | Comments                                                                                                                                             | Default  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection             | The Salesforce connection to use.                                                                                                                    |          |
| Version                | Salesforce API Version Number.                                                                                                                       | 63.0     |
| Is PK Chunking Enabled | If set to true, the request only returns information about jobs where PK Chunking is enabled. This only applies to Bulk API (not Bulk API 2.0) jobs. | false    |
| Job Type               | Gets information only about jobs matching the specified job type.                                                                                    |          |
| Concurrency Mode       | For future use. Gets information only about jobs matching the specified concurrency mode.                                                            | parallel |
| Query Locator          | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results.                     |          |

### Get Record {#getrecord}

Get a single Salesforce Record by Id

| Input       | Comments                          | Default |
| ----------- | --------------------------------- | ------- |
| Version     | Salesforce API Version Number.    | 63.0    |
| Record Type | The type of Salesforce Record.    |         |
| Record ID   | The ID of a Salesforce Record     |         |
| Connection  | The Salesforce connection to use. |         |

### Get Results for a Bulk Query Job {#getqueryjobresults}

Gets the results for a query job. The job must be in a Job Complete state

| Input        | Comments                                                                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Salesforce connection to use.                                                                                                |         |
| Version      | Salesforce API Version Number.                                                                                                   | 63.0    |
| Query Job Id | The ID of the query job                                                                                                          |         |
| Locator      | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results. |         |
| Max Records  | The maximum number of records to retrieve per set of results for the query. The request is still subject to the size limits.     |         |

### List Bulk Jobs {#listbulkjobs}

Retrieves all jobs in the org.

| Input                  | Comments                                                                                                                                             | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Salesforce connection to use.                                                                                                                    |         |
| Version                | Salesforce API Version Number.                                                                                                                       | 63.0    |
| Is PK Chunking Enabled | If set to true, the request only returns information about jobs where PK Chunking is enabled. This only applies to Bulk API (not Bulk API 2.0) jobs. | false   |
| Job Type               | Gets information only about jobs matching the specified job type.                                                                                    |         |
| Locator                | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results.                     |         |

### List Composite Resources {#listcompositeresources}

Gets a list of URIs for other composite resources.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Salesforce connection to use. |         |
| Version    | Salesforce API Version Number.    | 63.0    |

### List Contacts {#listcontacts}

List all contacts records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                                        |         |

### List Customers {#listcustomers}

List all customer records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                                        |         |

### List Flows {#listflows}

List all Flows in the Salesforce org

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Connection | The Salesforce connection to use. |         |

### List Leads {#listleads}

List all lead records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                                        |         |

### List Metadata {#listobjectmetadata}

Get all metadata components.

| Input         | Comments                          | Default      |
| ------------- | --------------------------------- | ------------ |
| Connection    | The Salesforce connection to use. |              |
| Metadata Type | The type of metadata to act upon. | CustomObject |
| Version       | Salesforce API Version Number.    | 63.0         |

### List Opportunities {#listopportunities}

List all opportunity records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                                        |         |

### List Outbound Messages {#listworkflowoutboundmessages}

Retrieve all Outbound Messages.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Connection | The Salesforce connection to use. |         |

### List Profiles {#listprofiles}

List all profile records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                                        |         |

### List Users {#listusers}

List all user records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                                        |         |

### List Workflow Rules (Deprecated) {#listworkflowrules}

List all Workflow Rules. Workflow Rules are being deprecated by Salesforce. Please migrate to using Flow based actions

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Connection | The Salesforce connection to use. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Salesforce

| Input                   | Comments                                                                                                                                                                                                                                                                                                                   | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Salesforce connection to use.                                                                                                                                                                                                                                                                                          |         |
| Version                 | Salesforce API Version Number.                                                                                                                                                                                                                                                                                             | 63.0    |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                       | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                        | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                           | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                        | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                              | false   |

### Read Metadata of Object {#getobjectmetadatabyname}

Get the metadata of an object by full name

| Input            | Comments                          | Default      |
| ---------------- | --------------------------------- | ------------ |
| Connection       | The Salesforce connection to use. |              |
| Metadata Type    | The type of metadata to act upon. | CustomObject |
| Version          | Salesforce API Version Number.    | 63.0         |
| Object Full Name |                                   |              |

### Remove User Permission Set {#removeuserpermissionset}

Removes a Permission Set from the specified User

| Input          | Comments                                | Default |
| -------------- | --------------------------------------- | ------- |
| Version        | Salesforce API Version Number.          | 63.0    |
| User Name      | Provide a User Name.                    |         |
| Permission Set | Provide the name of the Permission Set. |         |
| Connection     | The Salesforce connection to use.       |         |

### Salesforce Query {#query}

Run an SOQL Query Against SalesForce

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Version    | Salesforce API Version Number.                  | 63.0    |
| SOQL Query | A SalesForce Object Query Language (SOQL) query |         |
| Connection | The Salesforce connection to use.               |         |

### Send Transactional Email {#sendtransactionalemail}

Sends a message to a single recipient via Salesforce

| Input                 | Comments                                    | Default |
| --------------------- | ------------------------------------------- | ------- |
| Message Key           | The key of the message template             |         |
| Definition Key        | The key of the message template definition  |         |
| Recipient Contact Key | The key of the recipient contact            |         |
| Recipient Email       | The email of the recipient                  |         |
| Recipient Attributes  | Key-value pairs to personalize the message. |         |
| Connection            | The Salesforce connection to use.           |         |
| Version               | Salesforce API Version Number.              | 63.0    |

### Subscribe to Record Change (Deprecated) {#subscribetorecordchange}

Create a Workflow Rule to subscribe to Record Changes in Salesforce. Workflow Rules are being deprecated by Salesforce. Please migrate to using Flow based actions

| Input                  | Comments                                                                                                                                                                          | Default      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Version                | Salesforce API Version Number.                                                                                                                                                    | 63.0         |
| Outbound Message Name  | Name of the Outbound Message                                                                                                                                                      |              |
| Record Type            | The type of Salesforce Record.                                                                                                                                                    |              |
| Trigger Event          |                                                                                                                                                                                   | onAllChanges |
| Endpoint URL           | The endpoint URL to send the outbound message / webhook to                                                                                                                        |              |
| Rule Criteria Filter   | Filter criteria data structure to use with the rule, use this or Formula. See https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customfield.htm#filteritem |              |
| Formula                | Formula to evaluate. Use this input or Filter Criteria                                                                                                                            |              |
| Integration User Email | The email of the user under which the payload is sent. If not provided, the current user will be used                                                                             |              |
| Description            | Provide a string value for the description of the object.                                                                                                                         |              |
| Fields                 | Fields to include in the Outbound Message.                                                                                                                                        |              |
| Dynamic Fields         | Dynamic Fields, provided by value collection config variable, to include in the Outbound Message                                                                                  |              |
| Connection             | The Salesforce connection to use.                                                                                                                                                 |              |

### Subscribe to Record Changes {#subscribetorecordchanges}

Subscribe to Record Changes in Salesforce using an outbound message action.

| Input               | Comments                                                                                                                                                         | Default         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Version             | Salesforce API Version Number.                                                                                                                                   | 63.0            |
| Prefix              | Sets a prefix to the Flow Name and Outbound Messages created. Must start with a letter, can contain letters, numbers, underscores, and be at most 15 characters. |                 |
| Endpoint URL        | The endpoint URL to send the outbound message / webhook to                                                                                                       |                 |
| Trigger Record Type | The Record Type that will trigger this integration flow.                                                                                                         |                 |
| Trigger On          | When to trigger the flow (record creation, update, or both).                                                                                                     | CreateAndUpdate |
| Fields              | Fields to include in the Outbound Message.                                                                                                                       |                 |
| Dynamic Fields      | Dynamic Fields, provided by value collection config variable, to include in the Outbound Message                                                                 |                 |
| Flow Metadata       | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                                  |                 |
| Filter Formula      | Optional formula to filter which records trigger the flow.                                                                                                       |                 |
| Connection          | The Salesforce connection to use.                                                                                                                                |                 |

### Update Account {#updateaccount}

Update an existing account record

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID              | The ID of a Salesforce Record                                                                                 |         |
| Version                | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Name of a record's fields and their corresponding values                                                      |         |
| Phone                  | The primary phone number for the object.                                                                      |         |
| Website                | Provide a valid URL for the website of the object.                                                            |         |
| Account Type           | The type of account record.                                                                                   |         |
| Industry               | The industry of the account record.                                                                           |         |
| Description            | Provide a string value for the description of the object.                                                     |         |
| Number of Employees    | The number of employees associated with the object.                                                           |         |
| Annual Revenue         | The estimated annual revenue of the object.                                                                   |         |
| Billing City           | The city of the object's billing address.                                                                     |         |
| Billing Postal Code    | The zip code of the object's billing address.                                                                 |         |
| Billing State          | The state of the object's billing address.                                                                    |         |
| Billing Street Address | The street address of the billing object.                                                                     |         |
| Billing Country        | The country of the object's billing address.                                                                  |         |
| Street Address         | The street address of the object.                                                                             |         |
| State                  | The state of the object's address.                                                                            |         |
| Country                | The country of the object's address.                                                                          |         |
| Name                   | The name of the object.                                                                                       |         |
| City                   | The city of the object's address.                                                                             |         |
| Postal Code            | The zip code of the object's address.                                                                         |         |
| Connection             | The Salesforce connection to use.                                                                             |         |

### Update Contact {#updatecontact}

Update an existing contact record

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID              | The ID of a Salesforce Record                                                                                 |         |
| Email Address          | The email address for the object.                                                                             |         |
| Version                | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Name of a record's fields and their corresponding values                                                      |         |
| Phone                  | The primary phone number for the object.                                                                      |         |
| First Name             | The first name of the contact at the company                                                                  |         |
| Last Name              | The last name of the contact at the company                                                                   |         |
| Department             | Provide a string value that represents the name of the contact's department.                                  |         |
| Birthdate              | Provide a string value that represents the birthdate.                                                         |         |
| Fax                    | Provide a string value for the fax number.                                                                    |         |
| Title                  | The title of the object.                                                                                      |         |
| Mobile Phone           | The mobile phone number for the object.                                                                       |         |
| Assistant              | Provide a string value that represents the name of the contact's assistant.                                   |         |
| Assistant's Phone      | Provide a string value that represents the phone number of the contact's assistant.                           |         |
| Description            | Provide a string value for the description of the object.                                                     |         |
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

Update an existing customer record

| Input                | Comments                                                                                                                                                                   | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID            | The ID of a Salesforce Record                                                                                                                                              |         |
| Version              | Salesforce API Version Number.                                                                                                                                             | 63.0    |
| Name                 | Name of this customer.                                                                                                                                                     |         |
| Party Id             | Represents the individual object related to this customer record.                                                                                                          |         |
| Customer Status Type | The status of the customer account.                                                                                                                                        | Active  |
| Last Reference Date  | The timestamp for when the current user last viewed a record related to this record.                                                                                       |         |
| Last Viewed Date     | The timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |         |
| Owner Id             | The ID of the user who owns the record.                                                                                                                                    |         |
| Total Lifetime Value | The total revenue amount gained from this customer.                                                                                                                        |         |
| Connection           | The Salesforce connection to use.                                                                                                                                          |         |

### Update Flow {#updateflow}

Update an existing Flow in Salesforce by name

| Input         | Comments                                                                                                                                                  | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version       | Salesforce API Version Number.                                                                                                                            | 63.0    |
| Flow Name     | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Description   | Updated description for the Flow.                                                                                                                         |         |
| Flow Status   | The status of the Flow.                                                                                                                                   |         |
| Flow Metadata | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                           |         |
| Connection    | The Salesforce connection to use.                                                                                                                         |         |

### Update Lead {#updatelead}

Update a Salesforce Lead Record

| Input               | Comments                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID           | The ID of a Salesforce Record                                                                                        |         |
| Version             | Salesforce API Version Number.                                                                                       | 63.0    |
| Company             | The name of the company                                                                                              |         |
| Email Address       | The email address for the object.                                                                                    |         |
| Lead Status         | The status of the lead. Examples of valid values include: Open, Working, Closed - Converted, Closed - Not Converted. |         |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.        |         |
| Field Values        | Name of a record's fields and their corresponding values                                                             |         |
| First Name          | The first name of the contact at the company                                                                         |         |
| Last Name           | The last name of the contact at the company                                                                          |         |
| Title               | The title of the object.                                                                                             |         |
| Phone               | The primary phone number for the object.                                                                             |         |
| Lead Source         | Provide a value for the source of the lead.                                                                          |         |
| Rating              | The rating for the lead.                                                                                             |         |
| Website             | Provide a valid URL for the website of the object.                                                                   |         |
| Street Address      | The street address of the object.                                                                                    |         |
| State               | The state of the object's address.                                                                                   |         |
| City                | The city of the object's address.                                                                                    |         |
| Postal Code         | The zip code of the object's address.                                                                                |         |
| Number of Employees | The number of employees associated with the object.                                                                  |         |
| Description         | Provide a string value for the description of the object.                                                            |         |
| Annual Revenue      | The estimated annual revenue of the object.                                                                          |         |
| Connection          | The Salesforce connection to use.                                                                                    |         |

### Update Metadata {#updatemetadata}

Update one or more metadata components.

| Input         | Comments                                                                            | Default     |
| ------------- | ----------------------------------------------------------------------------------- | ----------- |
| Connection    | The Salesforce connection to use.                                                   |             |
| Version       | Salesforce API Version Number.                                                      | 63.0        |
| Metadata Type | The type of metadata to act upon.                                                   | CustomField |
| Metadata      | Check https://jsforce.github.io/document/#update-metadata for related documentation |             |

### Update Opportunity {#updateopportunity}

Update an existing opportunity record

| Input            | Comments                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID        | The ID of a Salesforce Record                                                                                 |         |
| Next Step        | Provide a string value for the next step of the sale.                                                         |         |
| Version          | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields   | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values     | Name of a record's fields and their corresponding values                                                      |         |
| Amount           | Provide a number that represents the opportunity amount.                                                      |         |
| Stage            | The stage the sale is currently in.                                                                           |         |
| Account ID       | The ID of the account to reference.                                                                           |         |
| Opportunity Type | Provide a value for what type of opportunity this is.                                                         |         |
| Close Date       | The date the sale will close.                                                                                 |         |
| Lead Source      | Provide a value for the source of the lead.                                                                   |         |
| Probability      | The probability of the success of the sale.                                                                   |         |
| Description      | Provide a string value for the description of the object.                                                     |         |
| Name             | The name of the object.                                                                                       |         |
| Connection       | The Salesforce connection to use.                                                                             |         |

### Update Profile {#updateprofile}

Update a Salesforce Profile

| Input       | Comments                                                                                                                                                                            | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version     | Salesforce API Version Number.                                                                                                                                                      | 63.0    |
| Record ID   | The ID of a Salesforce Record                                                                                                                                                       |         |
| Name        | The name of the profile.                                                                                                                                                            |         |
| Description | Description of the profile.                                                                                                                                                         |         |
| Permissions | Key/value object with permission name keys and boolean value indicating if a permission is granted or not. Use 'Describe Permissions' to retrieve the permissions of a Record Type. |         |
| Connection  | The Salesforce connection to use.                                                                                                                                                   |         |

### Update Record {#updaterecord}

Updates an existing Salesforce Record

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | Salesforce API Version Number.                                                                                | 63.0    |
| Record Type    | The type of Salesforce Record.                                                                                |         |
| Record ID      | The ID of a Salesforce Record                                                                                 |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Name of a record's fields and their corresponding values                                                      |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Update User {#updateuser}

Update a Salesforce User

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | Salesforce API Version Number.                                                                                | 63.0    |
| User Name      | Provide a User Name.                                                                                          |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Name of a record's fields and their corresponding values                                                      |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Upload Bulk Job Data {#uploadjobdata}

Uploads data for a job using CSV data you provide.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                                |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |
| File        | The file to be uploaded                                                          |         |

### Upload File {#uploadfile}

Uploads a file to Salesforce ContentVersion

| Input          | Comments                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | Salesforce API Version Number.                                                                                                                                                                      | 63.0    |
| Connection     | The Salesforce connection to use.                                                                                                                                                                   |         |
| File           | The file to be uploaded                                                                                                                                                                             |         |
| Path On Client | The complete path of the document. One of the fields that determines the FileType. Specify a complete path including the path extension in order for the document to be visible in the Preview tab. |         |

### Upsert Record {#upsertrecord}

Updates a Salesforce Record if it exists, otherwise creates a new Salesforce Record

| Input                  | Comments                                                    | Default |
| ---------------------- | ----------------------------------------------------------- | ------- |
| Version                | Salesforce API Version Number.                              | 63.0    |
| Record Type            | The type of Salesforce Record.                              |         |
| External ID Field Name | The name of the column that refers to the External ID Field |         |
| Records                | The records to be upserted                                  |         |
| Connection             | The Salesforce connection to use.                           |         |

### Validate Connection {#validateconnection}

Returns a boolean value that specifies whether the provided Connection is valid

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Version    | Salesforce API Version Number.    | 63.0    |
| Connection | The Salesforce connection to use. |         |
