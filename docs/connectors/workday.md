---
title: Workday Connector
sidebar_label: Workday
description: Manage Workday workers, people, organizations, job changes, time off, supplier invoices, and payments, run RaaS reports and WQL queries, and react to data changes.
---

![Workday](./assets/workday.png#connector-icon)
[Workday HCM](https://www.workday.com/) is a single, cloud-based solution for workforce planning, talent management, and payroll processes.

The Workday component allows managing Organizations, People, Workers, and more.

## API Documentation

This component was built using the [Workday REST Services](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html) API reference.

## Connections

### OAuth 2.0 {#workdayoauth2connection}

Authenticate using OAuth 2.0.

#### Prerequisites

Before configuring the connection, the following are required:

- A Workday tenant ID.
- Administrator access to the Workday tenant to register an API client.
- The Workday domain used by the tenant (for building the API base URL).
- For **Run WQL Query** and the **Changed WQL Query Rows** trigger: the **System** scope on the API client, and, for the Workday account that authorizes the connection, access to the **Workday Query Language** security domain and security access to the data sources and fields the query reads. See Workday's [WQL overview](https://doc.workday.com/admin-guide/en-us/reporting-and-analytics/custom-reports-and-analytics/workday-query-language-wql-/aht1611188422513.html).

#### Setup Steps

The API client is registered in the Workday portal. Registration also displays the values required to configure the connection.

1. **Log into the Workday Portal**

   - Use valid Workday Org admin credentials.
   - Format: `https://impl.workday.com/wday/authgwy/<tenant_name>/login.htmld`

2. **Search and Register**

   - From the Search menu for the Workday categories, select **Register API Client** and click **Register**.

3. **Provide Mandatory Details**

   - **Client Name**: Specify a name for the API Client.
   - **Client Grant Type**: Select `Authorization Code Grant`.
   - **Enforce 60 Minutes Access Token Expiry**: Ensure this is selected.
   - **Access Token Type**: Select `Bearer`.
   - **Redirect URL**: Enter the redirect URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - **Scope**: Select the required services from the dropdown list. Include **System** to run WQL queries.

4. **Complete Registration**

   - Click **Done**.

After the API client is registered in the Workday portal, note the **Client ID**, **Client Secret**, and **Endpoints** to be used in the integration workflow.

#### Configure the Connection

Create a connection of type **OAuth 2.0** and provide the following inputs:

- **API URL** (required): The host of the **Workday REST API Endpoint** shown in **View API Clients**, followed by `/ccx`, such as `https://wd2-impl-services1.workday.com/ccx`.
- **Authorize URL** (required): The **Authorization Endpoint** shown in **View API Clients**, in the form `https://{host}/{tenant}/authorize`.
- **Token URL** (required): The **Token Endpoint** shown in **View API Clients**, in the form `https://{host}/ccx/oauth2/{tenant}/token`. API requests use the tenant from this URL.
- **Client ID** (required): The client ID shown after registering the API client.
- **Client Secret** (required): The client secret paired with the client ID, shown once at registration.
- **Scopes** (optional): Space-separated OAuth 2.0 scopes. Leave blank to use the functional areas selected when the API client was registered.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                          | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| API URL       | The Workday API base URL: the host of the Workday REST API Endpoint shown in View API Clients, followed by /ccx, in the form https://{host}/ccx.                  |         |
| Authorize URL | The Authorization Endpoint shown for the API client in View API Clients, in the form https://{host}/{tenant}/authorize.                                           |         |
| Token URL     | The Token Endpoint shown for the API client in View API Clients, in the form https://{host}/ccx/oauth2/{tenant}/token. API requests use the tenant from this URL. |         |
| Client ID     | The client ID shown after registering the API client with the Register API Client task in Workday.                                                                |         |
| Client Secret | The client secret paired with the client ID, shown once when the API client is registered.                                                                        |         |
| Scopes        | Space-separated OAuth 2.0 scopes to request. Leave blank to use the functional areas selected when the API client was registered.                                 |         |

### Refresh Token {#workdayrefreshtokenconnection}

Authenticate using an API Client for Integrations and a refresh token generated in Workday, without browser sign-in.

The Refresh Token connection authenticates with an API Client for Integrations and a refresh token generated by a Workday administrator for an Integration System User (ISU). No browser sign-in is needed, and access tokens are requested and renewed automatically.

#### Prerequisites

Before configuring the connection, the following are required:

- Administrator access to the Workday tenant to register an API Client for Integrations and generate refresh tokens.
- An Integration System User (ISU) with access to the data the integration reads, including any custom reports run through **Get RaaS Report**.
- For **Get RaaS Report**: the **Report as a Service** scope on the API client, and the report shared with the ISU. See Workday's [RaaS Python client](https://github.com/Workday/raas-python) for the same setup.
- For **Run WQL Query** and the **Changed WQL Query Rows** trigger: the **System** scope on the API client, access to the **Workday Query Language** security domain for the ISU, and security access to the data sources and fields the query reads. See Workday's [WQL overview](https://doc.workday.com/admin-guide/en-us/reporting-and-analytics/custom-reports-and-analytics/workday-query-language-wql-/aht1611188422513.html).

#### Setup Steps

1. **Register the API client**

   - In Workday, search for the **Register API Client for Integrations** task.
   - Enter a **Client Name**.
   - Under **Scope (Functional Areas)**, select the functional areas the integration reads. Include **Report as a Service** to run RaaS reports and **System** to run WQL queries.
   - Review the refresh-token expiry setting against the tenant's security policy.
   - Click **OK** and note the **Client ID** and **Client Secret**. The client secret is shown only once.

2. **Generate a refresh token**

   - From the API client's related actions, select **API Client > Manage Refresh Tokens for Integrations**.
   - Select the ISU in **Workday Account** and click **OK**.
   - Select **Generate New Refresh Token**, click **OK**, and copy the **Refresh Token**.

3. **Find the REST API Endpoint**

   - Run the **View API Clients** task.
   - Note the **Workday REST API Endpoint**, in the form `https://<host>/ccx/api/v1/<tenant>`, and the **Token Endpoint**.

#### Configure the Connection

Create a connection of type **Refresh Token** and provide the following inputs:

- **REST API Endpoint** (required): The **Workday REST API Endpoint** from **View API Clients**, such as `https://wd2-impl-services1.workday.com/ccx/api/v1/acme`. The API base URL, tenant and token URL are derived from it.
- **Client ID** (required): The client ID of the API Client for Integrations.
- **Client Secret** (required): The client secret paired with the client ID.
- **Refresh Token** (required): The refresh token generated for the ISU. The connection never updates the stored value. If Workday returns a different refresh token, it is used for later token requests in the same running process and a warning is logged; if later executions then fail to authenticate, generate a new refresh token and update the connection.
- **Token URL** (optional): Leave blank to use `https://<host>/ccx/oauth2/<tenant>/token`. Enter the **Token Endpoint** from **View API Clients** only if it differs.

#### Verify Connection

Run the **Verify Connection** action with the connection. It requests a new access token and, when a **Report URL** is entered, reads that report to confirm the ISU can access it.

| Input             | Comments                                                                                                                                                                                | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| REST API Endpoint | The Workday REST API Endpoint shown for the API client in View API Clients, in the form https://{host}/ccx/api/v1/{tenant}. The API base URL, tenant and token URL are derived from it. |         |
| Client ID         | The client ID of the API Client for Integrations, shown after registering it in Workday.                                                                                                |         |
| Client Secret     | The client secret paired with the client ID, shown once when the API Client for Integrations is registered.                                                                             |         |
| Refresh Token     | The refresh token generated for the Integration System User with the Manage Refresh Tokens for Integrations task in Workday.                                                            |         |
| Token URL         | Overrides the token URL derived from the REST API Endpoint. Leave blank unless the Token Endpoint in View API Clients differs from https://{host}/ccx/oauth2/{tenant}/token.            |         |

## Triggers

### Changed RaaS Report Rows {#raasreportpollingtrigger}

Retrieves existing and ongoing rows for a specified Workday RaaS report. Load history once, check for changes on a schedule, or both.

| Input            | Comments                                                                                                                                                                                                                                            | Default         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                      |                 |
| Report URL       | The report URL from Web Services > View URLs for the report in Workday. Must be on the same host as the connection. The trigger always requests format=json.                                                                                        |                 |
| Watermark Prompt | The XML alias of the report prompt that receives the window start. Build the report so this prompt keeps only rows entered or changed on or after that time.                                                                                        |                 |
| Watermark Format | The format of the value sent to the Watermark Prompt. Match the prompt's type in the report.                                                                                                                                                        | dateTime        |
| Record Key Field | The Report_Entry column, by XML alias, that identifies a row, such as an employee ID. Used to detect rows already delivered.                                                                                                                        |                 |
| Look-back Date   | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record from that date on once, with no inputs ignored. |                 |
| Prompts          | Static prompt values for the report as key-value pairs, sent on every recurrence. Keys are the prompt XML aliases. Do not include the Watermark Prompt.                                                                                             | <code>[]</code> |

### Changed WQL Query Rows {#wqlquerypollingtrigger}

Retrieves existing and ongoing rows for a specified Workday WQL query. Load history once, check for changes on a schedule, or both.

| Input            | Comments                                                                                                                                                                                                                                                                                                                                                                            | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                                                                                                                      |         |
| Query            | The WQL query to run. Must contain {{lastPolledAt}}, which is replaced with the window start as a quoted UTC date-time literal. Compare it against a date-time field that moves when a row is entered or changed, following the pattern WHERE dateTimeField >= {{lastPolledAt}}, where dateTimeField is that field. Which fields exist, and their types, depend on the data source. |         |
| Record Key Field | The field that identifies a row, such as workdayID. Must be selected in the query. Used to detect rows already delivered.                                                                                                                                                                                                                                                           |         |
| Date Field       | The name of the date or date-time column in each returned row that the query compares to {{lastPolledAt}}, such as approvalDate. Must be selected in the query and must be the same field the WHERE clause compares to {{lastPolledAt}} with >=. The trigger continues from the newest value of this field it has seen.                                                             |         |
| Tenant           | The Workday tenant to query. Leave blank to use the tenant from the connection: the REST API Endpoint of a Refresh Token connection, or the Token URL of an OAuth 2.0 connection.                                                                                                                                                                                                   |         |
| Look-back Date   | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record from that date on once, with no inputs ignored.                                                                                                                                 |         |
| Overlap Minutes  | The number of minutes each recurrence starts before the newest Date Field value already seen, to catch rows saved late with an older date, such as backdated transactions. Leave empty when the Date Field is a value Workday sets when the row is saved or changed. Rows already delivered are skipped.                                                                            |         |

### New Event Steps {#neweventstepspollingtrigger}

Retrieves existing and newly created business process event steps from Workday, emitting new event steps only and never changes to existing ones. Load history once, check for new event steps on a schedule, or both.

| Input            | Comments                                                                                                                                                                                                                                            | Default         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                      |                 |
| Look-back Date   | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record from that date on once, with no inputs ignored. |                 |
| Business Process | Workday IDs of the business process types whose event steps are included. Leave empty to include all.                                                                                                                                               | <code>[]</code> |
| Step Type        | Workday IDs of the step types to include. Leave empty to include all.                                                                                                                                                                               | <code>[]</code> |

## Actions

### Create File Container {#postfilecontainers}

Creates a new file container.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection | The Workday connection to use.             |         |
| Tenant     | The Workday tenant name used in API paths. |         |

### Create Job Change {#postjobchanges}

Creates a job change instance with the specified data.

| Input                       | Comments                                                                                                                       | Default         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection                  | The Workday connection to use.                                                                                                 |                 |
| Worker ID                   | Unique identifier for the Workday worker record.                                                                               |                 |
| Supervisory Organization ID | Supervisory organization assigned to the worker as of the effective date.                                                      |                 |
| Job Change Reason ID        | Identifies the reason used in a Change Job business process.                                                                   |                 |
| Move Managers Team          | When true, also moves subordinate teams to the new manager.                                                                    | false           |
| Effective Date              | The date this business process takes effect. Format: YYYY-MM-DD.                                                               |                 |
| Proposed Organizations      | Organizations with staffing behavior assigned to the position as a result of this event. Each row identifies one organization. | <code>[]</code> |
| Organization ID             | Identifies the Workday organization.                                                                                           |                 |
| Descriptor                  | Display name of the organization.                                                                                              |                 |
| Instance Reference          | ID, href, and descriptor of the referenced instance.                                                                           |                 |
| Instance ID                 | Identifies the Workday instance being referenced.                                                                              |                 |
| Instance Href               | Direct API link pointing to the referenced instance.                                                                           |                 |
| Instance Descriptor         | Human-readable preview label for the referenced instance.                                                                      |                 |

### Create Message Template {#postmessagetemplates}

Creates a new message template.

| Input                 | Comments                                                                                                                                                                                                                                      | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Workday connection to use.                                                                                                                                                                                                                |         |
| Message Template Name | Display name given to the message template.                                                                                                                                                                                                   |         |
| Notification Type ID  | Identifies the notification type, which determines where the template can be used.                                                                                                                                                            |         |
| Created By ID         | Identifies the user who created the record.                                                                                                                                                                                                   |         |
| Email Detail          | Email content for the message: Name, Subject, Body, and Reply To.                                                                                                                                                                             |         |
| Name                  | The name of the email content, such as Benefits Enrollment Reminder.                                                                                                                                                                          |         |
| Subject               | Subject line of the email.                                                                                                                                                                                                                    |         |
| Body                  | Body text of the email.                                                                                                                                                                                                                       |         |
| Reply To              | Email address that replies are sent to.                                                                                                                                                                                                       |         |
| Push Detail           | Mobile push notification content for the message: Message, Redirect URL, and Push Detail ID.                                                                                                                                                  |         |
| Message               | Text of the mobile push notification.                                                                                                                                                                                                         |         |
| Redirect URL          | URL the push notification opens when selected.                                                                                                                                                                                                |         |
| Push Detail ID        | Identifies the push notification detail.                                                                                                                                                                                                      |         |
| Reference ID          | Reference ID used for lookups within Workday Web Services.                                                                                                                                                                                    |         |
| Template Inactive     | When true, marks the template as inactive.                                                                                                                                                                                                    | true    |
| Template Descriptor   | Human-readable descriptor for the template.                                                                                                                                                                                                   |         |
| Template ID           | Optional identifier to assign to the template, sent as its id in the request body.                                                                                                                                                            |         |
| Extra Body            | Additional body fields to include in the request as a JSON object. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#connect/v2/post-/messageTemplates) for more information. |         |

### Create Payment {#postpayment}

Creates a single customer invoice payment header instance with the specified data.

| Input                  | Comments                                                                                                               | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Workday connection to use.                                                                                         |         |
| Remit From Customer ID | Identifies the customer remitting the payment.                                                                         |         |
| Amount                 | Monetary amount for the payment.                                                                                       |         |
| Currency               | ISO 4217 code of the currency the Amount is in, such as USD. Required when Amount is set.                              |         |
| Type ID                | Identifies the payment type.                                                                                           |         |
| Payment Date           | Date the payment was made. Format: YYYY-MM-DD.                                                                         |         |
| Company ID             | Identifies the Workday company.                                                                                        |         |
| Payment ID             | Optional identifier to assign to the payment on creation.                                                              |         |
| Additional Fields      | Additional optional fields: includes Ready to Auto Apply, Reference, Transaction Number, Memo, and Payment Descriptor. |         |
| Ready to Auto Apply    | When true, flags the payment as ready for automatic application.                                                       | true    |
| Reference              | External reference string associated with the payment.                                                                 |         |
| Transaction Number     | Bank transaction number associated with the payment.                                                                   |         |
| Memo                   | Free-text memo attached to the transaction.                                                                            |         |
| Payment Descriptor     | Human-readable descriptor for the payment.                                                                             |         |

### Create Supplier Invoice Request {#postsupplierinvoicerequests}

Creates a supplier invoice request with the specified data.

| Input                       | Comments                                                                                                                                                                                                                                                                                                                                                                      | Default         |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection                  | The Workday connection to use.                                                                                                                                                                                                                                                                                                                                                |                 |
| Company ID                  | Identifies the Workday company for the supplier invoice request.                                                                                                                                                                                                                                                                                                              |                 |
| Supplier ID                 | Identifies the supplier for the supplier invoice request.                                                                                                                                                                                                                                                                                                                     |                 |
| Invoice Date                | The date the supplier invoice request is created. Accepts an ISO 8601 date (YYYY-MM-DD) or date-time.                                                                                                                                                                                                                                                                         |                 |
| Amount                      | Currency, tax amount, and control total amount.                                                                                                                                                                                                                                                                                                                               |                 |
| Currency ID                 | Identifies the currency used for the invoice.                                                                                                                                                                                                                                                                                                                                 |                 |
| Tax Amount                  | Total tax amount applied to the invoice.                                                                                                                                                                                                                                                                                                                                      |                 |
| Control Total Amount        | Expected total amount used to validate invoice line totals.                                                                                                                                                                                                                                                                                                                   |                 |
| Lines                       | The line items; each row is one line. At least one line is required, here or in Extra Body. Lines set in Extra Body replace these rows; use Extra Body for line worktags and splits. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#accountsPayable/v1/post-/supplierInvoiceRequests) for the line fields. | <code>[]</code> |
| Item Description            | Text description of the item on the line.                                                                                                                                                                                                                                                                                                                                     |                 |
| Quantity                    | Quantity on the line, as a number.                                                                                                                                                                                                                                                                                                                                            |                 |
| Unit Cost                   | Unit cost for the line as a decimal; Workday applies the invoice currency.                                                                                                                                                                                                                                                                                                    |                 |
| Extended Amount             | Extended amount for the line as a decimal; Workday applies the invoice currency.                                                                                                                                                                                                                                                                                              |                 |
| Memo                        | A free-text memo for the invoice line, such as a note on what was purchased.                                                                                                                                                                                                                                                                                                  |                 |
| Internal Memo               | A free-text memo for the invoice line kept for internal reference, such as an approval note.                                                                                                                                                                                                                                                                                  |                 |
| Billable                    | When true, marks the line as billable.                                                                                                                                                                                                                                                                                                                                        | false           |
| Spend Category ID           | Identifies the spend category for the line.                                                                                                                                                                                                                                                                                                                                   |                 |
| Item ID                     | Identifies the purchase item on the line.                                                                                                                                                                                                                                                                                                                                     |                 |
| Unit of Measure ID          | Identifies the unit of measure for the quantity.                                                                                                                                                                                                                                                                                                                              |                 |
| Assignment IDs              | Requester, payment terms, and reference type for the supplier invoice request.                                                                                                                                                                                                                                                                                                |                 |
| Requester ID                | Identifies the worker who requested the invoice.                                                                                                                                                                                                                                                                                                                              |                 |
| Payment Terms ID            | Identifies the payment terms that apply to the invoice.                                                                                                                                                                                                                                                                                                                       |                 |
| Reference Type ID           | Identifies the reference type for the invoice.                                                                                                                                                                                                                                                                                                                                |                 |
| Memo                        | Free-text memo attached to the transaction.                                                                                                                                                                                                                                                                                                                                   |                 |
| Supplier Invoice ID         | Identifies the supplier invoice.                                                                                                                                                                                                                                                                                                                                              |                 |
| Supplier Invoice Descriptor | Human-readable descriptor for the supplier invoice.                                                                                                                                                                                                                                                                                                                           |                 |
| Extra Body                  | Additional body fields to include in the request as a JSON object. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#accountsPayable/v1/post-/supplierInvoiceRequests) for more information.                                                                                                                  |                 |

### Create Supplier Invoice Request Attachment {#postsupplierinvoicerequestsattachments}

Creates attachments for the specified supplier invoice.

| Input                                  | Comments                                                                                                                                                                 | Default |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                             | The Workday connection to use.                                                                                                                                           |         |
| Supplier Invoice Request ID            | Identifies the supplier invoice request.                                                                                                                                 |         |
| File                                   | The file to attach to the supplier invoice request. Binary data generated from a previous step.                                                                          |         |
| Attachment Details                     | File length, file name, and descriptor for the attachment.                                                                                                               |         |
| File Length                            | Size of the attached file in bytes. Defaults to the size of the File input.                                                                                              |         |
| File Name                              | Display name of the attached file, including its extension; Workday rejects a name without one. Defaults to "attachment" with an extension from the file's content type. |         |
| Descriptor                             | Human-readable descriptor for the attachment.                                                                                                                            |         |
| Content Type ID                        | Identifies the MIME content type of the attachment.                                                                                                                      |         |
| Supplier Invoice Request Attachment ID | Identifies the attachment on the supplier invoice request.                                                                                                               |         |

### Create Table {#posttable}

Creates a new table with the specified name.

| Input               | Comments                                                                                                                                                                                                              | Default         |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection          | The Workday connection to use.                                                                                                                                                                                        |                 |
| Tenant              | The Workday tenant name used in API paths.                                                                                                                                                                            |                 |
| Display Name        | User-facing display name shown in Prism Analytics.                                                                                                                                                                    |                 |
| Name                | Internal name used to reference the table via API.                                                                                                                                                                    |                 |
| Fields              | The fields of the table. An array of objects. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/post-/tables) for more information. |                 |
| Tags                | Labels used to categorize and find the table. Each row identifies one tag.                                                                                                                                            | <code>[]</code> |
| Tag ID              | Identifies the tag.                                                                                                                                                                                                   |                 |
| Name                | The display name of the tag, such as Headcount.                                                                                                                                                                       |                 |
| Additional Fields   | Additional optional fields: includes Description, Documentation, and Enable for Analysis.                                                                                                                             |                 |
| Description         | Short description shown alongside the table.                                                                                                                                                                          |                 |
| Documentation       | Long-form documentation describing how the table is used.                                                                                                                                                             |                 |
| Enable for Analysis | When true, enables the table for Prism Analytics.                                                                                                                                                                     | false           |

### Create Time Off Request {#posttimeoffrequest}

Creates a time off request for the specified worker ID and initiates the Request Time Off business process.

| Input                       | Comments                                                                                                                                                                                                                                                                                    | Default         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection                  | The Workday connection to use.                                                                                                                                                                                                                                                              |                 |
| Worker ID                   | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                            |                 |
| Days                        | The days to request off; each row is one day. Each row needs a Date and a Time Off Type ID. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#absenceManagement/v5/post-/workers/-ID-/requestTimeOff) for more information. | <code>[]</code> |
| Date                        | The date of the time off entry, in ISO 8601 format.                                                                                                                                                                                                                                         |                 |
| Start                       | The start time of the time off entry, as an ISO 8601 date-time.                                                                                                                                                                                                                             |                 |
| End                         | The end time of the time off entry, as an ISO 8601 date-time.                                                                                                                                                                                                                               |                 |
| Daily Quantity              | The number of days or hours for this time off entry, as a number.                                                                                                                                                                                                                           |                 |
| Comment                     | The comment on the time off entry.                                                                                                                                                                                                                                                          |                 |
| Time Off Type ID            | Identifies the time off type, such as vacation or sick time.                                                                                                                                                                                                                                |                 |
| Reason ID                   | Identifies the reason for the time off entry.                                                                                                                                                                                                                                               |                 |
| Position ID                 | Identifies the worker position the time off entry applies to.                                                                                                                                                                                                                               |                 |
| Business Process Parameters | Action, parent process, transaction status, comment, attachments, and target instance for the business process.                                                                                                                                                                             |                 |
| Action ID                   | Identifies the action to take on the business process.                                                                                                                                                                                                                                      |                 |
| Overall Business Process ID | Identifies the parent business process instance.                                                                                                                                                                                                                                            |                 |
| Time Off Comment            | Free-text comment attached to the time-off entry.                                                                                                                                                                                                                                           |                 |
| Transaction Status ID       | Identifies the current status of the transaction.                                                                                                                                                                                                                                           |                 |
| Time Off Attachments        | Supporting files for the time off request, such as a doctor's note. A JSON array of attachment objects with file name, content type, and category.                                                                                                                                          |                 |
| Time Off For ID             | Target instance the time-off entry applies to; may be another business process ID when used as a sub-process.                                                                                                                                                                               |                 |

### Create Worker Business Title Change {#postworkerbusinesstitlechange}

Creates a new business title change for the specified worker.

| Input                   | Comments                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Workday connection to use.                                                                                                                                |         |
| Worker ID               | Unique identifier for the Workday worker record.                                                                                                              |         |
| Proposed Business Title | New business title for the worker as of the effective date. If there is no business title override, this field defaults to the job title or job profile name. |         |
| Instance Reference      | ID, href, and descriptor of the referenced instance.                                                                                                          |         |
| Instance ID             | Identifies the Workday instance being referenced.                                                                                                             |         |
| Instance Href           | Direct API link pointing to the referenced instance.                                                                                                          |         |
| Instance Descriptor     | Human-readable preview label for the referenced instance.                                                                                                     |         |

### Create Worker Time Block {#postworkertimeblock}

Creates a worker time block for the specified worker.

| Input               | Comments                                                                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Workday connection to use.                                                                                                                                                                                                                                 |         |
| Worker ID           | Unique identifier for the Workday worker record.                                                                                                                                                                                                               |         |
| Calendar Date       | The date of the reported time block. Accepts an ISO 8601 date (YYYY-MM-DD) or date-time; only the date is sent. Workday requires it when creating a time block.                                                                                                |         |
| Reported Quantity   | The hours or units reported for the time block. Workday requires it when creating a time block.                                                                                                                                                                |         |
| Time Entry Code ID  | Identifies the time entry code (time type) for the time block. Workday requires it when creating a time block.                                                                                                                                                 |         |
| Do Not Bill         | When true, marks the time block as non-billable.                                                                                                                                                                                                               | false   |
| Comment             | Free-text comment attached to the reported time block.                                                                                                                                                                                                         |         |
| Instance ID         | Identifies the Workday instance being referenced.                                                                                                                                                                                                              |         |
| Instance Descriptor | Human-readable preview label for the referenced instance.                                                                                                                                                                                                      |         |
| Extra Body          | Additional body fields to include in the request as a JSON object. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v7/post-/workers/-ID-/workerTimeBlock) for more information. |         |

### Delete Time Clock Event by ID {#deletetimeclockeventsbyid}

Deletes a time clock event with the specified ID.

| Input               | Comments                                | Default |
| ------------------- | --------------------------------------- | ------- |
| Connection          | The Workday connection to use.          |         |
| Time Clock Event ID | Identifies the time clock event record. |         |

### Delete Worker Time Block {#deleteworkertimeblock}

Deletes a worker time block with the specified ID for the specified worker.

| Input                | Comments                                         | Default |
| -------------------- | ------------------------------------------------ | ------- |
| Connection           | The Workday connection to use.                   |         |
| Worker ID            | Unique identifier for the Workday worker record. |         |
| Worker Time Block ID | Identifies the worker's reported time block.     |         |

### Get Customer by ID {#getcustomerbyid}

Retrieves a customer by ID.

| Input       | Comments                         | Default |
| ----------- | -------------------------------- | ------- |
| Connection  | The Workday connection to use.   |         |
| Customer ID | Identifies the customer account. |         |

### Get Data Change by ID {#getdatachangesbyid}

Retrieves the data change with the specified ID. A data change is a Prism artifact used to load data into a Prism table for analysis in downstream applications such as Discovery Board, Reports, Accounting Center, and People Analytics.

| Input          | Comments                                                | Default |
| -------------- | ------------------------------------------------------- | ------- |
| Connection     | The Workday connection to use.                          |         |
| Tenant         | The Workday tenant name used in API paths.              |         |
| Data Change ID | Identifies the Prism Analytics data change transaction. |         |

### Get Event Attachments {#geteventattachments}

Retrieves attachments on the specified business process event that the processing user has permission to view.

| Input      | Comments                                                                                                                                                                                                                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Workday connection to use.                                                                                                                                                                                                                                                         |         |
| Worker ID  | Optional worker used to filter the Event ID dropdown; Workday lists events for one worker at a time. Not sent with this request.                                                                                                                                                       |         |
| Event ID   | Identifies the business process event.                                                                                                                                                                                                                                                 |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false   |
| Pagination | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |         |
| Limit      | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset     | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |

### Get Event by ID {#geteventbyid}

Retrieves the business process event with the specified ID.

| Input      | Comments                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Workday connection to use.                                                                                                   |         |
| Worker ID  | Optional worker used to filter the Event ID dropdown; Workday lists events for one worker at a time. Not sent with this request. |         |
| Event ID   | Identifies the business process event.                                                                                           |         |

### Get Files by Container ID {#getfilesbycontainerid}

Retrieves all files for a file container. Returns file metadata such as file name, size, checksum, and state (Timed Out, Uploading, Failed, Success). Only files with state 'Success' are ready for upload.

| Input             | Comments                                                     | Default |
| ----------------- | ------------------------------------------------------------ | ------- |
| Connection        | The Workday connection to use.                               |         |
| Tenant            | The Workday tenant name used in API paths.                   |         |
| File Container ID | Identifies the file container whose files will be retrieved. |         |

### Get Invoice by ID {#getinvoicebyid}

Retrieves a customer invoice or adjustment with the specified ID.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Workday connection to use.               |         |
| Invoice ID | Identifies the customer invoice to retrieve. |         |

### Get Invoice PDF {#getinvoicepdf}

Retrieves printed customer invoice PDF documents.

| Input          | Comments                                         | Default |
| -------------- | ------------------------------------------------ | ------- |
| Connection     | The Workday connection to use.                   |         |
| Invoice PDF ID | Identifies the invoice PDF resource to retrieve. |         |

### Get Message Template by ID {#getmessagetemplatebyid}

Retrieves a message template by ID.

| Input               | Comments                                 | Default |
| ------------------- | ---------------------------------------- | ------- |
| Connection          | The Workday connection to use.           |         |
| Message Template ID | Identifies the Connect message template. |         |

### Get Organization by ID {#getorganizationbyid}

Retrieves an organization by ID.

| Input                | Comments                                                                                            | Default |
| -------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Workday connection to use.                                                                      |         |
| Organization Type ID | Optional organization type used to filter the Organization ID dropdown. Not sent with this request. |         |
| Organization ID      | Identifies the Workday organization.                                                                |         |

### Get Payment by ID {#getpaymentbyid}

Retrieves a customer invoice payment with the specified ID.

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection | The Workday connection to use.          |         |
| Payment ID | Identifies the customer payment record. |         |

### Get Person by ID {#getpersonbyid}

Retrieves a person with the specified ID. IDs returned from 'List People' or 'List Workers' can be used to retrieve further information about a specific person.

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | The Workday connection to use.                        |         |
| Person ID  | Unique identifier for a person in the Workday tenant. |         |

### Get RaaS Report {#getraasreport}

Retrieves the output of a Workday custom report exposed as a web service (RaaS).

| Input      | Comments                                                                                                                                                                                                      | Default         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection | The Workday connection to use.                                                                                                                                                                                |                 |
| Report URL | The report URL from Web Services > View URLs for the report in Workday. Must be on the same host as the connection. Any format parameter in the URL is replaced by the Format input.                          |                 |
| Format     | The output format Workday returns the report in.                                                                                                                                                              | json            |
| Prompts    | Prompt values for the report as key-value pairs. Keys are the prompt XML aliases, which can differ from the labels shown in Workday. For a single-instance prompt by WID, use a key such as Organization!WID. | <code>[]</code> |

### Get Staffing Worker by ID {#getstaffingworkerbyid}

Retrieves a worker with the specified ID and current staffing information from the Staffing service.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Workday connection to use.                   |         |
| Worker ID  | Unique identifier for the Workday worker record. |         |

### Get Staffing Workers {#getstaffingworkers}

Retrieves a collection of workers and current staffing information from the Staffing service.

| Input            | Comments                                                                                                                                                                                                                                                                               | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                         |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs. See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#staffing/v7/get-/workers).           | <code>[]</code> |

### Get Supplier Invoice Request Attachments {#getsupplierinvoicerequestattachments}

Retrieves all attachments for the specified supplier invoice request.

| Input                       | Comments                                                                                                                                                                                                                                                                               | Default |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The Workday connection to use.                                                                                                                                                                                                                                                         |         |
| Supplier Invoice Request ID | Identifies the supplier invoice request.                                                                                                                                                                                                                                               |         |
| Fetch All                   | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false   |
| Pagination                  | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |         |
| Limit                       | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset                      | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |

### Get Supplier Invoice Request by ID {#getsupplierinvoicerequestsbyid}

Retrieves the supplier invoice request with the specified ID.

| Input                       | Comments                                 | Default |
| --------------------------- | ---------------------------------------- | ------- |
| Connection                  | The Workday connection to use.           |         |
| Supplier Invoice Request ID | Identifies the supplier invoice request. |         |

### Get Table by ID {#gettablebyid}

Retrieves the description of a table or dataset the current user has permission to access.

| Input            | Comments                                                                                                                                                                                                                                                                               | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                         |                 |
| Tenant           | The Workday tenant name used in API paths.                                                                                                                                                                                                                                             |                 |
| Table ID         | Identifies the Prism Analytics table.                                                                                                                                                                                                                                                  |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs. See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/get-/tables/-id-). | <code>[]</code> |

### Get Time Clock Event by ID {#gettimeclockeventsbyid}

Retrieves a time clock event with the specified ID.

| Input               | Comments                                | Default |
| ------------------- | --------------------------------------- | ------- |
| Connection          | The Workday connection to use.          |         |
| Time Clock Event ID | Identifies the time clock event record. |         |

### Get Time Clock Events {#gettimeclockevents}

Retrieves a collection of time clock events. Supports filtering by worker and date range.

| Input            | Comments                                                                                                                                                                                                                                                                                 | Default         |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                           |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                    | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                      |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                               |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object.   |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs. See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v7/get-/timeClockEvents). | <code>[]</code> |

### Get Time Off Balance by ID {#gettimeoffbalancebyid}

Retrieves the time off balance with the specified balance ID. List Time Off Balances returns no balance IDs; use it to read a worker's balances.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Workday connection to use.               |         |
| Balance ID | Identifies the time-off balance to retrieve. |         |

### Get Time Off Details {#gettimeoffdetails}

Retrieves Time Off Entries for the specified worker ID. Supports filtering by date range, status, and type; returns all entries when no query parameters are specified.

| Input            | Comments                                                                                                                                                                                                                                                                                                  | Default         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                                            |                 |
| Worker ID        | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                                          |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                                     | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                                       |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                                                |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object.                    |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs. See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#absenceManagement/v5/get-/workers/-ID-/timeOffDetails). | <code>[]</code> |

### Get Worker Business Title Changes {#getworkerbusinesstitlechanges}

Retrieves a collection of business title changes for the specified worker.

| Input      | Comments                                                                                                                                                                                                                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Workday connection to use.                                                                                                                                                                                                                                                         |         |
| Worker ID  | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                       |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false   |
| Pagination | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |         |
| Limit      | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset     | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |

### Get Worker by ID {#getworkerbyid}

Retrieves a worker and current staffing information by ID.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Workday connection to use.                   |         |
| Worker ID  | Unique identifier for the Workday worker record. |         |

### Get Worker Explicit Skills {#getworkerexplicitskills}

Retrieves explicit skills for the specified worker ID. Supports optional filtering by skill name or skill source.

| Input            | Comments                                                                                                                                                                                                                                                                                         | Default         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                                   |                 |
| Worker ID        | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                                 |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                            | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                              |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                                       |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object.           |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs. See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#staffing/v7/get-/workers/-ID-/explicitSkills). | <code>[]</code> |

### Get Worker Service Dates {#getworkerservicedates}

Retrieves a collection of service dates (hire date, continuous service date, etc.) for the specified worker ID.

| Input      | Comments                                                                                                                                                                                                                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Workday connection to use.                                                                                                                                                                                                                                                         |         |
| Worker ID  | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                       |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false   |
| Pagination | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |         |
| Limit      | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset     | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |

### Initiate Job Change {#initiatejobchange}

Initiates a job change request for the specified worker. Returns a new job change ID that can be submitted with POST `/jobChanges/{ID}/submit`.

| Input                       | Comments                                                                                                                                                                                                                                              | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The Workday connection to use.                                                                                                                                                                                                                        |         |
| Worker ID                   | Unique identifier for the Workday worker record.                                                                                                                                                                                                      |         |
| Effective Date              | The effective date of the job change. Format: ISO 8601 date-time (YYYY-MM-DDTHH:mm:ss.sssZ).                                                                                                                                                          |         |
| Job ID                      | Workday ID of the worker's position before the effective date. Retrieve using GET /values/jobChangesGroup/jobs with the worker query parameter.                                                                                                       |         |
| Reason ID                   | Workday ID of the change job reason. Retrieve using GET /values/jobChangesGroup/reason.                                                                                                                                                               |         |
| Supervisory Organization ID | Workday ID of the supervisory organization for the worker as of the effective date. Retrieve using GET /values/jobChangesGroup/supervisoryOrganization.                                                                                               |         |
| Location ID                 | Workday ID of the new location for the worker as of the effective date. Retrieve using GET /values/jobChangesGroup/locations.                                                                                                                         |         |
| Extra Body                  | Additional body fields to include in the request as a JSON object. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#staffing/v7/post-/workers/-ID-/jobChanges) for more information. |         |

### Initiate Organization Assignment Change {#initiateorganizationassignmentchange}

Initiates an organization assignment change for the specified worker. Returns a new change ID that can be submitted with POST `/organizationAssignmentChanges/{ID}/submit`.

| Input          | Comments                                                                                                                                                                                                                                                                                                                                                                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Workday connection to use.                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Worker ID      | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Effective Date | The effective date of the organization assignment change. Format: ISO 8601 date-time (YYYY-MM-DDTHH:mm:ss.sssZ).                                                                                                                                                                                                                                                                                                                  |         |
| Job ID         | Workday ID of the worker's job (position) to change. Retrieve using GET /values/organizationAssignmentChangesGroup/jobs with the worker query parameter.                                                                                                                                                                                                                                                                          |         |
| Position ID    | Workday ID of the worker's position as of the effective date. Retrieve using GET /values/organizationAssignmentChangesGroup/positions.                                                                                                                                                                                                                                                                                            |         |
| Extra Body     | Additional body fields to include in the request as a JSON object. Company, cost center, region, and other organizations are set after initiation with the PATCH /organizationAssignmentChanges/{ID} subresource endpoints. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#staffing/v7/post-/workers/-ID-/organizationAssignmentChanges) for more information. |         |

### List Data Changes {#listdatachanges}

Returns the collection of data changes accessible to the authenticated user. Supports offset and limit query parameters. Response type is determined by the 'type' query parameter. The default response includes id, name, and displayName.

| Input            | Comments                                                                                                                                                                                                                                                                               | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                         |                 |
| Tenant           | The Workday tenant name used in API paths.                                                                                                                                                                                                                                             |                 |
| Data Change Type | How much data change detail to return: Summary returns the data change summary, Full adds the description, application, categories, tags, and mappings. Either Data Change Type or Data Change Name must be set.                                                                       |                 |
| Data Change Name | The name of the data change to return. Either Data Change Type or Data Change Name must be set.                                                                                                                                                                                        |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs. See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/get-/dataChanges). | <code>[]</code> |

### List Events {#listevents}

Retrieves a collection of business process events for the specified worker.

| Input            | Comments                                                                                                                                                                                                                                                                               | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                         |                 |
| Worker ID        | Identifies the worker whose business process events to list. Workday returns events for exactly one worker.                                                                                                                                                                            |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs. See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#businessProcess/v1/get-/events).     | <code>[]</code> |

### List Invoices {#listinvoices}

Retrieves all customer invoices and adjustments.

| Input            | Comments                                                                                                                                                                                                                                                                               | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                         |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs.                                                                                                                                                                                                  | <code>[]</code> |

### List Message Templates {#listmessagetemplates}

Retrieves message templates.

| Input            | Comments                                                                                                                                                                                                                                                                               | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                         |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs.                                                                                                                                                                                                  | <code>[]</code> |

### List Organizations {#listorganizations}

Retrieves a list of organizations.

| Input                | Comments                                                                                                                                                                                                                                                                               | Default         |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection           | The Workday connection to use.                                                                                                                                                                                                                                                         |                 |
| Organization Type ID | Workday ID of the organization type to list, such as a supervisory or cost center organization type. Workday documents that organization requests must provide an organization type.                                                                                                   |                 |
| Fetch All            | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false           |
| Pagination           | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |                 |
| Limit                | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |                 |
| Offset               | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |                 |
| Extra Parameters     | Query parameters to be used in the request. This should be a list of key-value pairs.                                                                                                                                                                                                  | <code>[]</code> |

### List People {#listpeople}

Retrieves all people in the Workday tenant.

| Input            | Comments                                                                                                                                                                                                                                                                               | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                         |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs. See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#person/v4/get-/people).              | <code>[]</code> |

### List Supplier Invoice Requests {#listsupplierinvoicerequests}

Retrieves all supplier invoice requests.

| Input            | Comments                                                                                                                                                                                                                                                                                            | Default         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                                      |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                               | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                                 |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                                          |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object.              |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs. See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#accountsPayable/v1/get-/supplierInvoiceRequests). | <code>[]</code> |

### List Tables {#listtables}

Retrieves a collection of tables created by the Workday REST API. Only tables or datasets permitted by the current user's security profile are returned.

| Input            | Comments                                                                                                                                                                                                                                                                               | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                         |                 |
| Tenant           | The Workday tenant name used in API paths.                                                                                                                                                                                                                                             |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs. See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/get-/tables).      | <code>[]</code> |

### List Time Off Balances {#listtimeoffbalances}

Retrieves the balance of every absence plan and leave of absence type for the specified worker.

| Input          | Comments                                                                                                                                                                                                                                                                               | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Workday connection to use.                                                                                                                                                                                                                                                         |         |
| Worker ID      | Identifies the worker whose time off balances to list.                                                                                                                                                                                                                                 |         |
| Fetch All      | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false   |
| Pagination     | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |         |
| Limit          | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset         | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Category ID    | Workday ID of a time off type, leave of absence type, or absence table that limits the balances returned. Returns every category when empty.                                                                                                                                           |         |
| Effective Date | Returns balances as of this date. Accepts an ISO 8601 date (YYYY-MM-DD) or date-time; only the date is sent. Defaults to today in Workday.                                                                                                                                             |         |

### List Workers {#getworkers}

Retrieves a collection of workers and current staffing information.

| Input            | Comments                                                                                                                                                                                                                                                                               | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The Workday connection to use.                                                                                                                                                                                                                                                         |                 |
| Fetch All        | When true, automatically fetches all pages of results using pagination. Offset is ignored and Limit sets the page size (default 100).                                                                                                                                                  | false           |
| Pagination       | Page-size and starting-position controls for the result collection.                                                                                                                                                                                                                    |                 |
| Limit            | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |                 |
| Offset           | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |                 |
| Extra Parameters | Query parameters to be used in the request. This should be a list of key-value pairs. See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v7/get-/workers).       | <code>[]</code> |

### Raw Request {#rawrequest}

Sends a raw HTTP request to Workday.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                                               | Default         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection              | The Workday connection to use.                                                                                                                                                                                                                                                                                                                                                         |                 |
| URL                     | Input the path only, starting with /api and including the tenant name: /api/{service}/{version}/{tenant}/{resource}. The base URL is already included (https://{host}/ccx). For example, to connect to https://{host}/ccx/api/accountsPayable/v1/acme/supplierInvoiceRequests for the tenant acme, only /api/accountsPayable/v1/acme/supplierInvoiceRequests is entered in this field. |                 |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                                                                |                 |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                                                                              |                 |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                   | <code>[]</code> |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                       | <code>[]</code> |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                                                                                 | <code>[]</code> |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                                                                    | <code>[]</code> |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                                                                            | <code>[]</code> |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                                                                               | json            |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                                                                    |                 |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                                                                    | 0               |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                                                                       | false           |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                                                                    | 0               |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                                                                          | false           |

### Run WQL Query {#runwqlquery}

Runs a Workday Query Language (WQL) query and returns the matching rows.

| Input      | Comments                                                                                                                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Workday connection to use.                                                                                                                                                    |         |
| Query      | The WQL query to run. Use the LIMIT clause to cap the total rows returned.                                                                                                        |         |
| Tenant     | The Workday tenant to query. Leave blank to use the tenant from the connection: the REST API Endpoint of a Refresh Token connection, or the Token URL of an OAuth 2.0 connection. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. Reads up to the 10,000 rows Workday caches for a query; Offset is ignored and Limit sets the page size.   | false   |
| Pagination | Page-size and starting-row controls for the query results.                                                                                                                        |         |
| Limit      | The number of rows in one page of results, between 0 and 10,000. With Fetch All enabled, this sets the page size and defaults to 1,000.                                           |         |
| Offset     | The zero-based starting row of the results. Increase it by Limit to read the next page. Workday caches query results for up to 30 minutes and 10,000 rows.                        |         |

### Send Message {#sendmessage}

Sends a message.

| Input                    | Comments                                                                                        | Default         |
| ------------------------ | ----------------------------------------------------------------------------------------------- | --------------- |
| Connection               | The Workday connection to use.                                                                  |                 |
| Sender Override ID       | Overrides the icon displayed for the sender.                                                    |                 |
| Communication ID         | Identifier of the Workday communication group.                                                  |                 |
| Message Details          | Email, push notification, and recipient details for the message.                                |                 |
| Email Detail Name        | The name of the email content, such as Benefits Enrollment Reminder.                            |                 |
| Email Detail Subject     | Subject line of the email.                                                                      |                 |
| Email Detail Body        | Body text of the email.                                                                         |                 |
| Email Detail Reply To    | Email address that replies are sent to.                                                         |                 |
| Push Detail Message      | Text of the mobile push notification.                                                           |                 |
| Push Detail Redirect URL | URL the push notification opens when selected.                                                  |                 |
| Push Detail ID           | Identifies the push notification detail.                                                        |                 |
| Contacts                 | Workday IDs of the contacts to send the message to, such as workers. Each entry is one contact. | <code>[]</code> |
| Message Template ID      | Identifies the Connect message template.                                                        |                 |
| Notification Type ID     | Identifies the notification type used for delivery.                                             |                 |

### Submit Supplier Invoice Request {#submitsupplierinvoicerequest}

Submits a supplier invoice instance with the specified ID for approval.

| Input                                | Comments                                                                     | Default |
| ------------------------------------ | ---------------------------------------------------------------------------- | ------- |
| Connection                           | The Workday connection to use.                                               |         |
| Supplier Invoice Request ID          | Identifies the supplier invoice request.                                     |         |
| Supplier Invoice Instance ID         | Identifies the supplier invoice instance to submit for approval.             |         |
| Supplier Invoice Instance Descriptor | Human-readable descriptor for the supplier invoice instance being submitted. |         |

### Update Message Template by ID {#updatemessagetemplatebyid}

Updates a message template by ID.

| Input                 | Comments                                                                                                                                                                                                                                      | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Workday connection to use.                                                                                                                                                                                                                |         |
| Message Template ID   | Identifies the Connect message template.                                                                                                                                                                                                      |         |
| Message Template Name | Display name given to the message template.                                                                                                                                                                                                   |         |
| Notification Type ID  | Identifies the notification type, which determines where the template can be used.                                                                                                                                                            |         |
| Created By ID         | Identifies the user who created the record.                                                                                                                                                                                                   |         |
| Email Detail          | Email content for the message: Name, Subject, Body, and Reply To.                                                                                                                                                                             |         |
| Name                  | The name of the email content, such as Benefits Enrollment Reminder.                                                                                                                                                                          |         |
| Subject               | Subject line of the email.                                                                                                                                                                                                                    |         |
| Body                  | Body text of the email.                                                                                                                                                                                                                       |         |
| Reply To              | Email address that replies are sent to.                                                                                                                                                                                                       |         |
| Push Detail           | Mobile push notification content for the message: Message, Redirect URL, and Push Detail ID.                                                                                                                                                  |         |
| Message               | Text of the mobile push notification.                                                                                                                                                                                                         |         |
| Redirect URL          | URL the push notification opens when selected.                                                                                                                                                                                                |         |
| Push Detail ID        | Identifies the push notification detail.                                                                                                                                                                                                      |         |
| Reference ID          | Reference ID used for lookups within Workday Web Services.                                                                                                                                                                                    |         |
| Template Inactive     | When true, marks the template as inactive.                                                                                                                                                                                                    |         |
| Template Descriptor   | Human-readable descriptor for the template.                                                                                                                                                                                                   |         |
| Template ID           | Optional identifier to assign to the template, sent as its id in the request body.                                                                                                                                                            |         |
| Extra Body            | Additional body fields to include in the request as a JSON object. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#connect/v2/post-/messageTemplates) for more information. |         |

### Update Table by ID {#updatetablebyid}

Updates an existing table with the specified name.

| Input               | Comments                                                                                                                                                                                                                  | Default         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection          | The Workday connection to use.                                                                                                                                                                                            |                 |
| Tenant              | The Workday tenant name used in API paths.                                                                                                                                                                                |                 |
| Table ID            | Identifies the Prism Analytics table.                                                                                                                                                                                     |                 |
| Display Name        | User-facing display name shown in Prism Analytics.                                                                                                                                                                        |                 |
| Name                | Internal name used to reference the table via API.                                                                                                                                                                        |                 |
| Fields              | The fields of the table. An array of objects. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/put-/tables/-id-) for more information. |                 |
| Tags                | Labels used to categorize and find the table. Each row identifies one tag.                                                                                                                                                | <code>[]</code> |
| Tag ID              | Identifies the tag.                                                                                                                                                                                                       |                 |
| Name                | The display name of the tag, such as Headcount.                                                                                                                                                                           |                 |
| Additional Fields   | Additional optional fields: includes Description, Documentation, and Enable for Analysis.                                                                                                                                 |                 |
| Description         | Short description shown alongside the table.                                                                                                                                                                              |                 |
| Documentation       | Long-form documentation describing how the table is used.                                                                                                                                                                 |                 |
| Enable for Analysis | When true, enables the table for Prism Analytics.                                                                                                                                                                         |                 |

### Update Time Clock Event by ID {#updatetimeclockeventsbyid}

Updates the time clock event for the specified ID, replacing the existing time clock event with the specified data.

| Input                            | Comments                                                                                                                                                                                                                                              | Default |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                       | The Workday connection to use.                                                                                                                                                                                                                        |         |
| Time Clock Event ID              | Identifies the time clock event record.                                                                                                                                                                                                               |         |
| Instance Reference               | ID, href, and descriptor of the referenced instance.                                                                                                                                                                                                  |         |
| Instance ID                      | Identifies the Workday instance being referenced.                                                                                                                                                                                                     |         |
| Instance Href                    | Direct API link pointing to the referenced instance.                                                                                                                                                                                                  |         |
| Instance Descriptor              | Human-readable preview label for the referenced instance.                                                                                                                                                                                             |         |
| Clock Event Override Rate        | Optional rate that overrides the default pay rate for this event.                                                                                                                                                                                     |         |
| Reference ID                     | Reference ID used for lookups within Workday Web Services.                                                                                                                                                                                            |         |
| Assignment IDs                   | Time entry code, project, and project plan task for the clock event.                                                                                                                                                                                  |         |
| Clock Event Time Entry Code ID   | Identifies the time entry code applied to the clock event.                                                                                                                                                                                            |         |
| Clock Event Project ID           | Identifies the project associated with the clock event.                                                                                                                                                                                               |         |
| Clock Event Project Plan Task ID | Identifies the project plan task associated with the clock event.                                                                                                                                                                                     |         |
| Clock Event Comment              | Free-text comment attached to the time clock event.                                                                                                                                                                                                   |         |
| Extra Body                       | Additional body fields to include in the request as a JSON object. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v7/put-/timeClockEvents/-ID-) for more information. |         |

### Update Worker Time Block {#updateworkertimeblock}

Updates the worker time block for the specified worker with the specified data in the request body.

| Input                | Comments                                                                                                                                                                                                                                                                        | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Workday connection to use.                                                                                                                                                                                                                                                  |         |
| Worker ID            | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                |         |
| Worker Time Block ID | Identifies the worker's reported time block.                                                                                                                                                                                                                                    |         |
| Calendar Date        | The date of the reported time block. Accepts an ISO 8601 date (YYYY-MM-DD) or date-time; only the date is sent. Workday requires it when creating a time block.                                                                                                                 |         |
| Reported Quantity    | The hours or units reported for the time block. Workday requires it when creating a time block.                                                                                                                                                                                 |         |
| Time Entry Code ID   | Identifies the time entry code (time type) for the time block. Workday requires it when creating a time block.                                                                                                                                                                  |         |
| Do Not Bill          | When true, marks the time block as non-billable.                                                                                                                                                                                                                                |         |
| Comment              | Free-text comment attached to the reported time block.                                                                                                                                                                                                                          |         |
| Instance ID          | Identifies the Workday instance being referenced.                                                                                                                                                                                                                               |         |
| Instance Descriptor  | Human-readable preview label for the referenced instance.                                                                                                                                                                                                                       |         |
| Extra Body           | Additional body fields to include in the request as a JSON object. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v7/patch-/workers/-ID-/workerTimeBlock/-subresourceID-) for more information. |         |

### Upload Files by Container ID {#postfilesbycontainerid}

Loads a file into the specified file container. Creates a temporary location to store the file and saves file metadata such as size and checksum.

| Input             | Comments                                                                     | Default |
| ----------------- | ---------------------------------------------------------------------------- | ------- |
| Connection        | The Workday connection to use.                                               |         |
| Tenant            | The Workday tenant name used in API paths.                                   |         |
| File Container ID | Identifies the file container whose files will be retrieved.                 |         |
| File              | The contents to write to a file. Binary data generated from a previous step. |         |

### Verify Connection {#verifyconnection}

Verifies the connection by requesting a new access token and, optionally, reading a report.

| Input      | Comments                                                                                                                                                                        | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Workday connection to use.                                                                                                                                                  |         |
| Report URL | Optional report URL to read after authenticating, to confirm the account can access it. Leave blank to check authentication only. The whole report is read, so use a small one. |         |
