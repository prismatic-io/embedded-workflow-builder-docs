---
title: Workday (Beta) Connector
sidebar_label: Workday (Beta)
description: Workday HCM is a single, cloud-based solution for workforce planning, talent management, and payroll processes.
---

![Workday (Beta)](./assets/workday.png#connector-icon)
:::note[This component is currently in BETA.]
BETA component connections and actions may not always work as expected. Please report any feedback through the support channel.
:::

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

#### Setup Steps

The API client is registered in the Workday portal based on the category. This process also surfaces the information required to set up the Workday REST Access Token account.

1. **Log into the Workday Portal**
   - Use valid Workday Org admin credentials.
   - Format: `https://impl.workday.com/wday/authgwy/<tenant_name>/login.htmld`

2. **Search and Register**
   - From the Search menu for the Workday categories, select **Register API Client** and click **Register**.

3. **Provide Mandatory Details**
   - **Client Name**: Specify a name for the API Client.
   - **Client Grant Type**: Select `Authorization Code Grant`.
   - **Enforce 60 Minutes Access Token Expiry**: Ensure this is selected so the auto-refresh token works correctly in the Workday REST OAuth2 Account.
   - **Access Token Type**: Select `Bearer`.
   - **Redirect URL**: Enter the redirect URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - **Scope**: Select the required services from the dropdown list.

4. **Complete Registration**
   - Click **Done**.

After the API client is registered in the Workday portal, note the **Client ID**, **Client Secret**, and **Endpoints** to be used in the integration workflow.

#### Configure the Connection

Create a connection of type **OAuth 2.0** and provide the following inputs:

- **Authorize URL** (required) — The OAuth 2.0 Authorization URL for Workday. Replace `<tenant_id>` with the Workday tenant ID.
- **Token URL** (required) — The OAuth 2.0 Token URL for Workday. Replace `<tenant_id>` with the Workday tenant ID.
- **Scopes** (optional) — Space-separated list of OAuth 2.0 scopes, if any are required.
- **Client ID** (required) — The OAuth 2.0 client ID issued by Workday for the registered API client.
- **Client secret** (required) — The OAuth 2.0 client secret paired with the Workday client ID.
- **API URL** (required) — The base URL for the Workday API. Replace `<domain>` with the Workday domain.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                             | Default                                                             |
| ------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Workday. Replace <tenant_id> with the tenant ID. | https://impl.workday.com/<tenant_id>/authorize                      |
| Token URL     | The OAuth 2.0 Token URL for Workday. Replace <tenant_id> with the tenant ID.         | https://wd2-impl-services1.workday.com/ccx/oauth2/<tenant_id>/token |
| Scopes        | Space-separated list of OAuth 2.0 scopes, if any are required.                       |                                                                     |
| Client ID     | The OAuth 2.0 client ID issued by Workday for the registered API client.             |                                                                     |
| Client secret | The OAuth 2.0 client secret paired with the Workday client ID.                       |                                                                     |
| API URL       | The base URL for the Workday API. Replace <domain> with the Workday domain.          | https://<domain>/ccx                                                |

## Actions

### Create File Container {#postfilecontainers}

Creates a new file container.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Tenant     | The Workday tenant name used in API paths. |         |

### Create Job Change {#postjobchanges}

Creates a job change instance with the specified data.

| Input                       | Comments                                                                                 | Default |
| --------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                          |         |
| Worker ID                   | Unique identifier for the Workday worker record.                                         |         |
| Supervisory Organization ID | Supervisory organization assigned to the worker as of the effective date.                |         |
| Job Change Reason ID        | Identifies the reason used in a Change Job business process.                             |         |
| Move Managers Team          | When true, also moves subordinate teams to the new manager.                              | false   |
| Effective Date              | The date this business process takes effect.                                             |         |
| Proposed Organizations      | Organizations with staffing behavior assigned to the position as a result of this event. |         |
| Instance ID                 | Identifies the Workday instance being referenced.                                        |         |
| Instance Href               | Direct API link pointing to the referenced instance.                                     |         |
| Instance Descriptor         | Human-readable preview label for the referenced instance.                                |         |

### Create Message Template {#postmessagetemplates}

Creates a new message template.

| Input                 | Comments                                                                                                                                                                                                                                       | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                                                                |         |
| Created By ID         | Identifies the user who created the record.                                                                                                                                                                                                    |         |
| Email Detail          | Details for the email.                                                                                                                                                                                                                         |         |
| Push Detail           | Details for the push notification.                                                                                                                                                                                                             |         |
| Message Template Name | Display name given to the message template.                                                                                                                                                                                                    |         |
| Reference ID          | Reference ID used for lookups within Workday Web Services.                                                                                                                                                                                     |         |
| Template Inactive     | When true, marks the template as inactive.                                                                                                                                                                                                     | true    |
| Template Descriptor   | Human-readable descriptor for the template.                                                                                                                                                                                                    |         |
| Template ID           | Identifies the message template record.                                                                                                                                                                                                        |         |
| Additional Fields     | Additional fields that might not be covered by the standard inputs. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#connect/v2/post-/messageTemplates) for more information. |         |

### Create Payment {#postpayment}

Creates a single customer invoice payment header instance with the specified data.

| Input                  | Comments                                                         | Default |
| ---------------------- | ---------------------------------------------------------------- | ------- |
| Connection             |                                                                  |         |
| Remit From Customer ID | Identifies the customer remitting the payment.                   |         |
| Ready to Auto Apply    | When true, flags the payment as ready for automatic application. | true    |
| Reference              | External reference string associated with the payment.           |         |
| Transaction Number     | Bank transaction number associated with the payment.             |         |
| Amount                 | Monetary amount for the payment.                                 |         |
| Type ID                | Identifies the payment type.                                     |         |
| Payment Date           | Date the payment was made.                                       |         |
| Company ID             | Identifies the Workday company.                                  |         |
| Memo                   | Free-text memo attached to the transaction.                      |         |
| Payment Descriptor     | Human-readable descriptor for the payment.                       |         |
| Payment ID             | Optional identifier to assign to the payment on creation.        |         |

### Create Supplier Invoice Request {#postsupplierinvoicerequests}

Creates a supplier invoice request with the specified data.

| Input                       | Comments                                                                                                                                                                                                                                                      | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                                               |         |
| Currency ID                 | Identifies the currency used for the invoice.                                                                                                                                                                                                                 |         |
| Company ID                  | Identifies the Workday company.                                                                                                                                                                                                                               |         |
| Tax Amount                  | Total tax amount applied to the invoice.                                                                                                                                                                                                                      |         |
| Requester ID                | Identifies the worker who requested the invoice.                                                                                                                                                                                                              |         |
| Control Total Amount        | Expected total amount used to validate invoice line totals.                                                                                                                                                                                                   |         |
| Payment Terms ID            | Identifies the payment terms that apply to the invoice.                                                                                                                                                                                                       |         |
| Reference Type ID           | Identifies the reference type for the invoice.                                                                                                                                                                                                                |         |
| Memo                        | Free-text memo attached to the transaction.                                                                                                                                                                                                                   |         |
| Supplier Invoice ID         | Identifies the supplier invoice.                                                                                                                                                                                                                              |         |
| Supplier Invoice Descriptor | Human-readable descriptor for the supplier invoice.                                                                                                                                                                                                           |         |
| Additional Fields           | Additional fields that might not be covered by the standard inputs. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#accountsPayable/v1/post-/supplierInvoiceRequests) for more information. |         |

### Create Supplier Invoice Request Attachment {#postsupplierinvoicerequestsattachments}

Creates attachments for the specified supplier invoice.

| Input                                          | Comments                                                   | Default |
| ---------------------------------------------- | ---------------------------------------------------------- | ------- |
| Connection                                     |                                                            |         |
| Supplier Invoice Request ID                    | Identifies the supplier invoice request.                   |         |
| File Length                                    | Size of the attached file in bytes.                        |         |
| Content Type ID                                | Identifies the MIME content type of the attachment.        |         |
| File Name                                      | Display name of the attached file.                         |         |
| Supplier Invoice Request Attachment Descriptor | Human-readable descriptor for the attachment.              |         |
| Supplier Invoice Request Attachment ID         | Identifies the attachment on the supplier invoice request. |         |

### Create Table {#posttable}

Creates a new table with the specified name.

| Input               | Comments                                                                                                                                                                                                              | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                       |         |
| Tenant              | The Workday tenant name used in API paths.                                                                                                                                                                            |         |
| Display Name        | User-facing display name shown in Prism Analytics.                                                                                                                                                                    |         |
| Description         | Short description shown alongside the table.                                                                                                                                                                          |         |
| Documentation       | Long-form documentation describing how the table is used.                                                                                                                                                             |         |
| Enable For Analysis | When true, enables the table for Prism Analytics.                                                                                                                                                                     | false   |
| Name                | Internal name used to reference the table via API.                                                                                                                                                                    |         |
| Tags                | The tags of the table. An array of objects with id and name.                                                                                                                                                          |         |
| Fields              | The fields of the table. An array of objects. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/post-/tables) for more information. |         |

### Create Worker Business Title Change {#postworkerbusinesstitlechange}

Creates a new business title change for the specified worker.

| Input                   | Comments                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                               |         |
| Worker ID               | Unique identifier for the Workday worker record.                                                                                                              |         |
| Proposed Business Title | New business title for the worker as of the effective date. If there is no business title override, this field defaults to the job title or job profile name. |         |
| Instance ID             | Identifies the Workday instance being referenced.                                                                                                             |         |
| Instance Href           | Direct API link pointing to the referenced instance.                                                                                                          |         |
| Instance Descriptor     | Human-readable preview label for the referenced instance.                                                                                                     |         |

### Create Worker Time Block {#postworkertimeblock}

Creates a worker time block for the specified worker.

| Input               | Comments                                                                                                                                                                                                                                                        | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                                 |         |
| Worker ID           | Unique identifier for the Workday worker record.                                                                                                                                                                                                                |         |
| Do Not Bill         | When true, marks the time block as non-billable.                                                                                                                                                                                                                | false   |
| Comment             | Free-text comment attached to the reported time block.                                                                                                                                                                                                          |         |
| Instance ID         | Identifies the Workday instance being referenced.                                                                                                                                                                                                               |         |
| Instance Descriptor | Human-readable preview label for the referenced instance.                                                                                                                                                                                                       |         |
| Additional Fields   | Additional fields that might not be covered by the standard inputs. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v5/post-/workers/-ID-/workerTimeBlock) for more information. |         |

### Delete Time Clock Event by ID {#deletetimeclockeventsbyid}

Deletes a time clock event with the specified ID.

| Input               | Comments                                | Default |
| ------------------- | --------------------------------------- | ------- |
| Connection          |                                         |         |
| Time Clock Event ID | Identifies the time clock event record. |         |

### Delete Worker Time Block {#deleteworkertimeblock}

Deletes a worker time block with the specified ID for the specified worker.

| Input                | Comments                                         | Default |
| -------------------- | ------------------------------------------------ | ------- |
| Connection           |                                                  |         |
| Worker ID            | Unique identifier for the Workday worker record. |         |
| Worker Time Block ID | Identifies the worker's reported time block.     |         |

### Get Customer by ID {#getcustomerbyid}

Retrieves customer by ID.

| Input       | Comments                         | Default |
| ----------- | -------------------------------- | ------- |
| Connection  |                                  |         |
| Customer ID | Identifies the customer account. |         |

### Get Data Change by ID {#getdatachangesbyid}

Data change is a Prism artifact that gives users the ability to easily load data into a Prism table so that they can use the table for analysis in downstream applications (Discovery Board, Reports, apps like Accounting Center/People Analytics) Data from multiple sources.

| Input          | Comments                                                | Default |
| -------------- | ------------------------------------------------------- | ------- |
| Connection     |                                                         |         |
| Tenant         | The Workday tenant name used in API paths.              |         |
| Data Change ID | Identifies the Prism Analytics data change transaction. |         |

### Get Event Attachments {#geteventattachments}

Retrieves attachments on the specified business process event that the processing user has permission to view.

| Input      | Comments                                                                                                                                                                                                                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                                                                                                        |         |
| Event ID   | Identifies the business process event.                                                                                                                                                                                                                                                 |         |
| Limit      | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset     | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |

### Get Event by ID {#geteventbyid}

Retrieves the business process event with the specified ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection |                                        |         |
| Event ID   | Identifies the business process event. |         |

### Get Files by Container ID {#getfilesbycontainerid}

Retrieves all files for a file container. Returns file metadata such as file name, size, checksum, and state (Timed Out, Uploading, Failed, Success). Only files with state 'Success' are ready for upload.

| Input             | Comments                                                     | Default |
| ----------------- | ------------------------------------------------------------ | ------- |
| Connection        |                                                              |         |
| Tenant            | The Workday tenant name used in API paths.                   |         |
| File Container ID | Identifies the file container whose files will be retrieved. |         |

### Get Invoice by ID {#getinvoicebyid}

Retrieves a customer invoice or adjustment with the specified ID.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection |                                              |         |
| Invoice ID | Identifies the customer invoice to retrieve. |         |

### Get Invoice PDF {#getinvoicepdf}

Retrieves printed customer invoice PDF documents.

| Input          | Comments                                         | Default |
| -------------- | ------------------------------------------------ | ------- |
| Connection     |                                                  |         |
| Invoice PDF ID | Identifies the invoice PDF resource to retrieve. |         |

### Get Message Template by ID {#getmessagetemplatebyid}

Retrieves a message template by ID.

| Input               | Comments                                 | Default |
| ------------------- | ---------------------------------------- | ------- |
| Connection          |                                          |         |
| Message Template ID | Identifies the Connect message template. |         |

### Get Organization by ID {#getorganizationbyid}

Retrieves an Organization by ID.

| Input           | Comments                             | Default |
| --------------- | ------------------------------------ | ------- |
| Connection      |                                      |         |
| Organization ID | Identifies the Workday organization. |         |

### Get Payment by ID {#getpaymentbyid}

Retrieves a customer invoice payment with the specified ID.

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection |                                         |         |
| Payment ID | Identifies the customer payment record. |         |

### Get Person by ID {#getpersonbyid}

Retrieves a person with the specified ID. IDs returned from 'List People' or 'List Workers' can be used to retrieve further information about a specific person.

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection |                                                       |         |
| Person ID  | Unique identifier for a person in the Workday tenant. |         |

### Get Staffing Worker By ID {#getstaffingworkerbyid}

Retrieves a worker with the specified ID and current staffing information from the Staffing service.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection |                                                  |         |
| Worker ID  | Unique identifier for the Workday worker record. |         |

### Get Staffing Workers {#getstaffingworkers}

Retrieves a collection of workers and current staffing information from the Staffing service.

| Input        | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                        |         |
| Limit        | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset       | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#staffing/v7/get-/workers                 |         |

### Get Supplier Invoice Request Attachments {#getsupplierinvoicerequestattachments}

Retrieves all attachments associated with supplier invoices.

| Input                       | Comments                                                                                                                                                                                                                                                                               | Default |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                                                                        |         |
| Supplier Invoice Request ID | Identifies the supplier invoice request.                                                                                                                                                                                                                                               |         |
| Limit                       | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset                      | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |

### Get Supplier Invoice Request by ID {#getsupplierinvoicerequestsbyid}

Retrieves the supplier invoice with the specified ID.

| Input                       | Comments                                 | Default |
| --------------------------- | ---------------------------------------- | ------- |
| Connection                  |                                          |         |
| Supplier Invoice Request ID | Identifies the supplier invoice request. |         |

### Get Table by ID {#gettablebyid}

Retrieves the description of a table or dataset the current user has permission to access.

| Input        | Comments                                                                                                                                                                                                                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                  |         |
| Tenant       | The Workday tenant name used in API paths.                                                                                                                                                                                                                                       |         |
| Table ID     | Identifies the Prism Analytics table.                                                                                                                                                                                                                                            |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/get-/tables/-id- |         |

### Get Time Clock Event by ID {#gettimeclockeventsbyid}

Retrieves a time clock event with the specified ID.

| Input               | Comments                                | Default |
| ------------------- | --------------------------------------- | ------- |
| Connection          |                                         |         |
| Time Clock Event ID | Identifies the time clock event record. |         |

### Get Time Clock Events {#gettimeclockevents}

Retrieves a collection of time clock events. You can filter by the time clock events by worker and date range.

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                   |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 |         |

### Get Time Off Balance by ID {#gettimeoffbalancebyid}

Retrieves the specified balance of all absence plan and leave of absence types for the specified balance ID.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection |                                              |         |
| Balance ID | Identifies the time-off balance to retrieve. |         |

### Get Time Off Details {#gettimeoffdetails}

Retrieves Time Off Entries for the specified worker ID. Supports filtering by date range, status, and type; returns all entries when no query parameters are specified.

| Input        | Comments                                                                                                                                                                                                                                                                                                                              | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                                                                       |         |
| Worker ID    | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                                                                      |         |
| Limit        | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                                                                            |         |
| Offset       | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object.                                                |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#absenceManagement/v5/get-/workers/-ID-/timeOffDetails). |         |

### Get Worker Business Title Changes {#getworkerbusinesstitlechanges}

Retrieves a collection of business title changes for the specified worker.

| Input      | Comments                                                                                                                                                                                                                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                                                                                                        |         |
| Worker ID  | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                       |         |
| Limit      | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset     | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |

### Get Worker by ID {#getworkerbyid}

Retrieves a worker and current staffing information by ID.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection |                                                  |         |
| Worker ID  | Unique identifier for the Workday worker record. |         |

### Get Worker Explicit Skills {#getworkerexplicitskills}

Retrieves explicit skills for the specified worker ID. Supports optional filtering by skill name or skill source.

| Input        | Comments                                                                                                                                                                                                                                                                                   | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection   |                                                                                                                                                                                                                                                                                            |         |
| Worker ID    | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                           |         |
| Limit        | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                                 |         |
| Offset       | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object.     |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#staffing/v7/get-/workers/-ID-/explicitSkills |         |

### Get Worker Service Dates {#getworkerservicedates}

Retrieves a collection of service dates (hire date, continuous service date, etc.) for the specified worker ID.

| Input      | Comments                                                                                                                                                                                                                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                                                                                                        |         |
| Worker ID  | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                       |         |
| Limit      | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset     | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |

### Initiate Job Change {#initiatejobchange}

Initiates a job change request for the specified worker. Returns a new job change ID that can be submitted with POST `/jobChanges/{ID}/submit`.

| Input                | Comments                                                                                                                                                                                                                                               | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection           |                                                                                                                                                                                                                                                        |         |
| Worker ID            | Unique identifier for the Workday worker record.                                                                                                                                                                                                       |         |
| Effective Date       | The effective date of the job change.                                                                                                                                                                                                                  |         |
| Change Job Worker ID | Workday ID of the worker whose job is being changed. Retrieve using GET /values/jobChangesGroup/workers.                                                                                                                                               |         |
| Job ID               | Workday ID of the target job or position. Retrieve using GET /values/jobChangesGroup/jobs with the worker query parameter.                                                                                                                             |         |
| Reason ID            | Workday ID of the change job reason. Retrieve using GET /values/jobChangesGroup/reason.                                                                                                                                                                |         |
| Additional Fields    | Additional fields that might not be covered by the standard inputs. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#staffing/v7/post-/workers/-ID-/jobChanges) for more information. |         |

### Initiate Organization Assignment Change {#initiateorganizationassignmentchange}

Initiates an organization assignment change for the specified worker. Returns a new change ID that can be submitted with POST `/organizationAssignmentChanges/{ID}/submit`.

| Input                | Comments                                                                                                                                                                                                                                                                  | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                                                                                           |         |
| Worker ID            | Unique identifier for the Workday worker record.                                                                                                                                                                                                                          |         |
| Effective Date       | The effective date of the organization assignment change.                                                                                                                                                                                                                 |         |
| Change Org Worker ID | Workday ID of the worker whose organization assignment is being changed. Retrieve using GET /values/organizationAssignmentChangesGroup/workers.                                                                                                                           |         |
| Job ID               | Workday ID of the worker's current position. Retrieve using GET /values/organizationAssignmentChangesGroup/jobs with the worker query parameter.                                                                                                                          |         |
| Additional Fields    | Additional fields that might not be covered by the standard inputs. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#staffing/v7/post-/workers/-ID-/organizationAssignmentChanges) for more information. |         |

### List Data Changes {#listdatachanges}

Returns the collection of data changes accessible to the authenticated user. Supports offset and limit query parameters. Response type is determined by the 'type' query parameter. The default response includes id, name, and displayName.

| Input        | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                        |         |
| Tenant       | The Workday tenant name used in API paths.                                                                                                                                                                                                                                             |         |
| Limit        | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset       | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/get-/dataChanges       |         |

### List Events {#listevents}

Retrieves a collection of business process events based on the specified parameters. Exactly one worker parameter must be specified; otherwise, a blank response is returned.

| Input        | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                        |         |
| Limit        | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset       | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#businessProcess/v1/get-/events           |         |

### List Invoices {#listinvoices}

Retrieves all customer invoices and adjustments.

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                   |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 |         |

### List Message Templates {#listmessagetemplates}

Retrieves message templates.

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                   |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 |         |

### List Organizations {#listorganizations}

Retrieves list of Organizations.

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                   |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 |         |

### List People {#listpeople}

Retrieves all people in the Workday tenant.

| Input        | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                        |         |
| Limit        | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset       | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#person/v4/get-/people                    |         |

### List Supplier Invoice Requests {#listsupplierinvoicerequests}

Retrieves all supplier invoices.

| Input        | Comments                                                                                                                                                                                                                                                                                                                        | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                                                                 |         |
| Limit        | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                                                                      |         |
| Offset       | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object.                                          |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) in the [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#accountsPayable/v1/get-/supplierInvoiceRequests). |         |

### List Tables {#listtables}

Retrieves a collection of tables created by the Workday REST API. Only tables or datasets permitted by the current user's security profile are returned.

| Input        | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                        |         |
| Tenant       | The Workday tenant name used in API paths.                                                                                                                                                                                                                                             |         |
| Limit        | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset       | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/get-/tables            |         |

### List Workers {#getworkers}

Retrieves a collection of workers and current staffing information.

| Input        | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                                                                                                        |         |
| Limit        | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset       | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Query Params | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v5/get-/workers             |         |

### Post Time Off Request {#posttimeoffrequest}

Creates a time off request for the specified worker ID and initiates the Request Time Off business process.

| Input                       | Comments                                                                                                                                                                                                                                                                    | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                                                             |         |
| Worker ID                   | Unique identifier for the Workday worker record.                                                                                                                                                                                                                            |         |
| Action ID                   | Identifies the action to take on the business process.                                                                                                                                                                                                                      |         |
| Overall Business Process ID | Identifies the parent business process instance.                                                                                                                                                                                                                            |         |
| Days                        | The days for which the time off request is being made. An array of objects. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#absenceManagement/v5/post-/workers/-ID-/requestTimeOff) for more information. |         |
| Time Off Comment            | Free-text comment attached to the time-off entry.                                                                                                                                                                                                                           |         |
| Transaction Status ID       | Identifies the current status of the transaction.                                                                                                                                                                                                                           |         |
| Time Off Attachments        | The attachments for the time off request.                                                                                                                                                                                                                                   |         |
| Time Off For ID             | Target instance the time-off entry applies to; may be another business process ID when used as a sub-process.                                                                                                                                                               |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to Workday.

| Input                   | Comments                                                                                                                                                                                                                                                                                           | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                    |         |
| URL                     | Input the path only (/accountsPayable/v1/supplierInvoiceRequests), The base URL is already included (https://<domain>/ccx). For example, to connect to https://<domain>/ccx/accountsPayable/v1/supplierInvoiceRequests, only /accountsPayable/v1/supplierInvoiceRequests is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                            |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                          |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                               |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                   |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                             |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                        |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                           | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                   | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                      | false   |

### Send Message {#sendmessage}

Sends a message.

| Input                | Comments                                                              | Default |
| -------------------- | --------------------------------------------------------------------- | ------- |
| Connection           |                                                                       |         |
| Sender Override ID   | Overrides the icon displayed for the sender.                          |         |
| Communication ID     | Identifier of the Workday communication group.                        |         |
| Email Detail         | Details for the email.                                                |         |
| Contacts             | Contacts to send the message to. This should be an array of contacts. |         |
| Message Template ID  | Identifies the Connect message template.                              |         |
| Notification Type ID | Identifies the notification type used for delivery.                   |         |
| Push Detail          | Details for the push notification.                                    |         |

### Submit Supplier Invoice Request {#submitsupplierinvoicerequest}

Submits a supplier invoice instance with the specified ID for approval.

| Input                                | Comments                                                                     | Default |
| ------------------------------------ | ---------------------------------------------------------------------------- | ------- |
| Connection                           |                                                                              |         |
| Supplier Invoice Request ID          | Identifies the supplier invoice request.                                     |         |
| Supplier Invoice Instance ID         | Identifies the supplier invoice instance to submit for approval.             |         |
| Supplier Invoice Instance Descriptor | Human-readable descriptor for the supplier invoice instance being submitted. |         |

### Update Message Template by ID {#updatemessagetemplatebyid}

Updates a message template by ID.

| Input                 | Comments                                                                                                                                                                                                                                       | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Message Template ID   | Identifies the Connect message template.                                                                                                                                                                                                       |         |
| Connection            |                                                                                                                                                                                                                                                |         |
| Created By ID         | Identifies the user who created the record.                                                                                                                                                                                                    |         |
| Email Detail          | Details for the email.                                                                                                                                                                                                                         |         |
| Push Detail           | Details for the push notification.                                                                                                                                                                                                             |         |
| Message Template Name | Display name given to the message template.                                                                                                                                                                                                    |         |
| Reference ID          | Reference ID used for lookups within Workday Web Services.                                                                                                                                                                                     |         |
| Template Inactive     | When true, marks the template as inactive.                                                                                                                                                                                                     |         |
| Template Descriptor   | Human-readable descriptor for the template.                                                                                                                                                                                                    |         |
| Template ID           | Identifies the message template record.                                                                                                                                                                                                        |         |
| Additional Fields     | Additional fields that might not be covered by the standard inputs. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#connect/v2/post-/messageTemplates) for more information. |         |

### Update Table by ID {#updatetablebyid}

Updates an existing table with the specified name.

| Input               | Comments                                                                                                                                                                                                                  | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Table ID            | Identifies the Prism Analytics table.                                                                                                                                                                                     |         |
| Connection          |                                                                                                                                                                                                                           |         |
| Tenant              | The Workday tenant name used in API paths.                                                                                                                                                                                |         |
| Display Name        | User-facing display name shown in Prism Analytics.                                                                                                                                                                        |         |
| Description         | Short description shown alongside the table.                                                                                                                                                                              |         |
| Documentation       | Long-form documentation describing how the table is used.                                                                                                                                                                 |         |
| Enable For Analysis | When true, enables the table for Prism Analytics.                                                                                                                                                                         |         |
| Name                | Internal name used to reference the table via API.                                                                                                                                                                        |         |
| Tags                | The tags of the table. An array of objects with id and name.                                                                                                                                                              |         |
| Fields              | The fields of the table. An array of objects. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/put-/tables/-id-) for more information. |         |

### Update Time Clock Event by ID {#updatetimeclockeventsbyid}

Updates the time clock event for the specified ID, replacing the existing time clock event with the specified data.

| Input                            | Comments                                                                                                                                                                                                                                               | Default |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                       |                                                                                                                                                                                                                                                        |         |
| Time Clock Event ID              | Identifies the time clock event record.                                                                                                                                                                                                                |         |
| Clock Event Date Time            | Timestamp when the time clock event occurred.                                                                                                                                                                                                          |         |
| Clock Event Time Zone ID         | Identifies the time zone applied to the clock event.                                                                                                                                                                                                   |         |
| Clock Event Override Rate        | Optional rate that overrides the default pay rate for this event.                                                                                                                                                                                      |         |
| Reference ID                     | Reference ID used for lookups within Workday Web Services.                                                                                                                                                                                             |         |
| Clock Event Time Entry Code ID   | Identifies the time entry code applied to the clock event.                                                                                                                                                                                             |         |
| Clock Event Project Plan Task ID | Identifies the project plan task associated with the clock event.                                                                                                                                                                                      |         |
| Clock Event Project ID           | Identifies the project associated with the clock event.                                                                                                                                                                                                |         |
| Clock Event Comment              | Free-text comment attached to the time clock event.                                                                                                                                                                                                    |         |
| Additional Fields                | Additional fields that might not be covered by the standard inputs. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v5/put-/timeClockEvents/-ID-) for more information. |         |
| Instance Descriptor              | Human-readable preview label for the referenced instance.                                                                                                                                                                                              |         |
| Instance Href                    | Direct API link pointing to the referenced instance.                                                                                                                                                                                                   |         |
| Instance ID                      | Identifies the Workday instance being referenced.                                                                                                                                                                                                      |         |

### Update Worker Time Block {#updateworkertimeblock}

Updates the worker time block for the specified worker with the specified data in the request body.

| Input                | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Worker Time Block ID | Identifies the worker's reported time block.                                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Connection           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| Worker ID            | Unique identifier for the Workday worker record.                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Do Not Bill          | When true, marks the time block as non-billable.                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Comment              | Free-text comment attached to the reported time block.                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| Instance ID          | Identifies the Workday instance being referenced.                                                                                                                                                                                                                                                                                                                                                                                                                            |         |
| Instance Descriptor  | Human-readable preview label for the referenced instance.                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Additional Fields    | Additional fields that might not be covered by the standard inputs. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v5/post-/workers/-ID-/workerTimeBlock) for more information. See [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v5/patch-/workers/-ID-/workerTimeBlock/-subresourceID-) for more information. |         |

### Upload Files by Container ID {#postfilesbycontainerid}

This resource loads the file into a file container. Creates temporary location to store file, and saves file metadata like size, checksum.

| Input             | Comments                                                                     | Default |
| ----------------- | ---------------------------------------------------------------------------- | ------- |
| Connection        |                                                                              |         |
| Tenant            | The Workday tenant name used in API paths.                                   |         |
| File Container ID | Identifies the file container whose files will be retrieved.                 |         |
| File              | The contents to write to a file. Binary data generated from a previous step. |         |
