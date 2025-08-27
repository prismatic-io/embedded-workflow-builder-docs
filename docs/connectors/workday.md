---
title: Workday (Beta) Connector
sidebar_label: Workday (Beta)
description: Workday HCM is a single, cloud-based solution for workforce planning, talent management, and payroll processes.
---

![Workday (Beta)](./assets/workday.png#connector-icon)
Workday HCM is a single, cloud-based solution for workforce planning, talent management, and payroll processes.

## Connections

### Workday OAuth 2.0 Connection

# Register an API Client

You can register the API client in the Workday portal based on the category and locate all the necessary information for setting up the Workday REST Access Token account.

## Steps to Register

1. **Log into the Workday Portal**
   - Use valid Workday Org admin credentials.
   - Format: `https://impl.workday.com/wday/authgwy/<your_tenant_name>/login.htmld`

2. **Search and Register**
   - From the Search menu for the Workday categories, select **Register API Client** and click **Register**.

3. **Provide Mandatory Details**
   - **Client Name**: Specify a name for the API Client.
   - **Client Grant Type**: Select `Authorization Code Grant`.
   - **Enforce 60 Minutes Access Token Expiry**: Ensure this is selected for the Auto-refresh token to work correctly in the Workday REST OAuth2 Account.
   - **Access Token Type**: Select `Bearer`.
   - **Redirect URL**: Enter the redirect URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - **Scope**: Select all the services you need to access from the dropdown list.

4. **Complete Registration**
   - Click on **Done**.

After the API client is registered in the Workday portal, note down the **Client ID**, **Client Secret**, and **Endpoints** to be used in your workflow.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                              | Default                                                             |
| ------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Workday. Replace <tenant_id> with your tenant ID. | https://impl.workday.com/<tenant_id>/authorize                      |
| Token URL     | The OAuth 2.0 Token URL for Workday. Replace <tenant_id> with your tenant ID.         | https://wd2-impl-services1.workday.com/ccx/oauth2/<tenant_id>/token |
| Scopes        | Space separated list of scopes if needed                                              |                                                                     |
| Client ID     |                                                                                       |                                                                     |
| Client secret |                                                                                       |                                                                     |
| API URL       | The base URL for the Workday API. Replace <domain> with your domain.                  | https://<domain>/ccx                                                |

## Actions

### Delete Time Clock Events By ID

Deletes a time clock event with the specified ID.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Connection          |                                                      |         |
| Time Clock Event Id | Id of the time clock event                           |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Delete Worker Time Block

Deletes a worker time block with the specified ID for the specified worker.

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Connection           |                                                      |         |
| Worker Id            | Id of the worker                                     |         |
| Worker Time Block Id | Id of the worker time block                          |         |
| Debug Request        | Enabling this flag will log out the current request. | false   |

### Get Customer by ID

Retrieves customer by ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Customer ID   | The ID of the customer to retrieve                   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Data Changes By ID

Data change is a Prism artifact that gives users the ability to easily load data into a Prism table so that they can use the table for analysis in downstream applications (Discovery Board, Reports, apps like Accounting Center/People Analytics) Data from multiple sources.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Tenant         | The tenant.                                          |         |
| Data Change ID | The ID of the data change to retrieve                |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Event Attachments

Retrieves attachments on the specified business process event that the processing user has permission to view.

| Input         | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                        |         |
| Event ID      | The ID of the event.                                                                                                                                                                                                                                                                   |         |
| Limit         | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset        | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                                   | false   |

### Get Event By ID

Retrieves the business process event with the specified ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Event ID      | The ID of the event.                                 |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Files By Container ID

This resource returns all files for a file container. Returns file metadata about each file such as file name, size, checksum, and state. Possible file states are Timed Out, Uploading, Failed and Success. Files with a state of "Success" are ready for upload.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        |                                                      |         |
| Tenant            | The tenant.                                          |         |
| File Container ID | The ID of the file container to retrieve files for   |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Get Invoice By ID

Retrieves a customer invoice or adjustment with the specified ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Invoice ID    | The ID of the invoice.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Invoice PDF

Retrieves printed customer invoice PDF documents.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Invoice PDF ID | The ID of the invoice PDF to retrieve.               |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Message Template By ID

Get a Message Template by ID

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Connection          |                                                      |         |
| Message Template ID | The ID of the message template                       |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Get Organization by ID

Retrieves an Organization by ID.

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      |                                                      |         |
| Organization ID | The ID of the organization.                          |         |
| Debug Request   | Enabling this flag will log out the current request. | false   |

### Get Payment By ID

Retrieves a customer invoice payment with the specified ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Payment ID    | The ID of the payment.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Person By ID

Retrieves a person with the specified ID. You can use a returned ID from 'List People' or 'Get Workers' to get more information about a specific person.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Person Id     | Id of the person                                     |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Supplier Invoice Request Attachments

Retrieves all attachments associated with supplier invoices.

| Input                       | Comments                                                                                                                                                                                                                                                                               | Default |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                                                                        |         |
| Supplier Invoice Request ID | The ID of the supplier invoice request.                                                                                                                                                                                                                                                |         |
| Limit                       | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset                      | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Debug Request               | Enabling this flag will log out the current request.                                                                                                                                                                                                                                   | false   |

### Get Supplier Invoice Requests by ID

Retrieves the supplier invoice with the specified ID.

| Input                       | Comments                                             | Default |
| --------------------------- | ---------------------------------------------------- | ------- |
| Connection                  |                                                      |         |
| Supplier Invoice Request ID | The ID of the supplier invoice request.              |         |
| Debug Request               | Enabling this flag will log out the current request. | false   |

### Get Table By ID

This resource exposes the description of a table or dataset that the current user has permission on.

| Input         | Comments                                                                                                                                                                                                                                                                         | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                  |         |
| Tenant        | The tenant.                                                                                                                                                                                                                                                                      |         |
| Table ID      | The ID of the table.                                                                                                                                                                                                                                                             |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/get-/tables/-id- |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                             | false   |

### Get Time Clock Events

Retrieves a collection of time clock events. You can filter by the time clock events by worker and date range.

| Input         | Comments                                                                                                          | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                   |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 |         |
| Debug Request | Enabling this flag will log out the current request.                                                              | false   |

### Get Time Clock Events By ID

Retrieves a time clock event with the specified ID.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Connection          |                                                      |         |
| Time Clock Event Id | Id of the time clock event                           |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Get Time Off Balance By ID

Retrieves the specified balance of all absence plan and leave of absence types for the specified balance ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Balance ID    | The ID of the balance.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Time Off Details

Retrieves the Time Off Entries for the specified worker ID. You can filter by date range, status, and type. If you don't specify query parameters, this method returns all Time Off Entries.

| Input         | Comments                                                                                                                                                                                                                                                                                            | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                                     |         |
| Worker Id     | Id of the worker                                                                                                                                                                                                                                                                                    |         |
| Limit         | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                                          |         |
| Offset        | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object.              |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#absenceManagement/v1/get-/workers/-ID-/timeOffDetails |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                | false   |

### Get Worker Business Title Changes

Retrieves a collection of workers and current staffing information.

| Input         | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                        |         |
| Worker Id     | Id of the worker                                                                                                                                                                                                                                                                       |         |
| Limit         | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset        | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                                   | false   |

### Get Worker By ID

Retrieves a collection of workers and current staffing information.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Worker Id     | Id of the worker                                     |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Workers

Retrieves a collection of workers and current staffing information.

| Input         | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                        |         |
| Limit         | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset        | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v3/get-/workers             |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                                   | false   |

### List Data Changes

Returns collection of data changes accessible by a user. User can pass offset and limit query params to get the list of data changes. The type of responses is based on "type" query parameter. The user gets a default response containing: id, name, displayName.

| Input         | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                        |         |
| Tenant        | The tenant.                                                                                                                                                                                                                                                                            |         |
| Limit         | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset        | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/get-/dataChanges       |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                                   | false   |

### List Events

Retrieves a collection of business process events based on the specified parameters. You must specify exactly one worker parameter. If a worker parameter is not specified, returns a blank response.

| Input         | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                        |         |
| Limit         | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset        | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#businessProcess/v1/get-/events           |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                                   | false   |

### List Invoices

Retrieves all customer invoices and adjustments.

| Input         | Comments                                                                                                          | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                   |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 |         |
| Debug Request | Enabling this flag will log out the current request.                                                              | false   |

### List Message Templates

Get Message Templates.

| Input         | Comments                                                                                                          | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                   |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 |         |
| Debug Request | Enabling this flag will log out the current request.                                                              | false   |

### List Organizations

Retrieves list of Organizations.

| Input         | Comments                                                                                                          | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                   |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 |         |
| Debug Request | Enabling this flag will log out the current request.                                                              | false   |

### List People

List all people in the Workday tenant. This action returns a list of all people in the Workday tenant.

| Input         | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                        |         |
| Limit         | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset        | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#person/v3/get-/people                    |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                                   | false   |

### List Supplier Invoice Requests

Retrieves all supplier invoices.

| Input         | Comments                                                                                                                                                                                                                                                                                      | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                               |         |
| Limit         | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                                    |         |
| Offset        | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object.        |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#accountsPayable/v1/get-/supplierInvoiceRequests |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                                          | false   |

### List Tables

The Tables resource represents a collection of tables created by the Workday REST API. You can only view the tables or datasets permitted by the security profile of the current user.

| Input         | Comments                                                                                                                                                                                                                                                                               | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                        |         |
| Tenant        | The tenant.                                                                                                                                                                                                                                                                            |         |
| Limit         | The maximum number of objects in a single response. The default is 20. The maximum is 100.                                                                                                                                                                                             |         |
| Offset        | The zero-based index of the first object in a response collection. The default is 0. Use Offset with the Limit input to control paging of a response collection. Example: If Limit is 5 and Offset is 9, the response returns a collection of 5 objects starting with the 10th object. |         |
| Query Params  | Query parameters to be used in the request. This should be a list of key-value pairs. Ex. Key: worker, Value: 123 See optional (QUERY-STRING PARAMETERS) at https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/get-/tables            |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                                   | false   |

### Post File Containers

Use this method to create a new fileContainer.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Tenant        | The tenant.                                          |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Post Files By Container ID

This resource loads the file into a file container. Creates temporary location to store file, and saves file metadata like size, checksum.

| Input             | Comments                                                                     | Default |
| ----------------- | ---------------------------------------------------------------------------- | ------- |
| Connection        |                                                                              |         |
| Tenant            | The tenant.                                                                  |         |
| File Container ID | The ID of a Prism Analytics File Container                                   |         |
| File              | The contents to write to a file. Binary data generated from a previous step. |         |
| Debug Request     | Enabling this flag will log out the current request.                         | false   |

### Post Job Changes

Creates a job change instance with the specified data.

| Input                       | Comments                                                                                      | Default |
| --------------------------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                               |         |
| Worker Id                   | Id of the worker                                                                              |         |
| Supervisory Organization Id | The supervisory organization for the worker as of the effective date.                         |         |
| Job Change Reason Id        | Id of the reason used in a Change Job business process.                                       |         |
| Move Managers Team          | Indicates whether teams reporting to the Manager moved with them during the Change Job Event. | false   |
| Effective Date              | The date this business process takes effect.                                                  |         |
| Proposed Organizations      | Organizations with staffing behavior assigned to the position as a result of this event.      |         |
| Instance Id                 | Id of the instance                                                                            |         |
| Instance Href               | A link to the instance                                                                        |         |
| Instance Descriptor         | A preview of the instance                                                                     |         |
| Debug Request               | Enabling this flag will log out the current request.                                          | false   |

### Post Message Templates

Create a new message template.

| Input                 | Comments                                                                                                                                                                                    | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                             |         |
| Created By ID         | Creator ID                                                                                                                                                                                  |         |
| Email Detail          | Details for the email.                                                                                                                                                                      |         |
| Push Detail           | Details for the push notification.                                                                                                                                                          |         |
| Message Template Name | Name of the message template.                                                                                                                                                               |         |
| Reference Id          | The Reference ID to use for lookups within our Workday Web Services                                                                                                                         |         |
| Template Inactive     | Whether the template is inactive.                                                                                                                                                           | true    |
| Template Descriptor   | Descriptor for the template.                                                                                                                                                                |         |
| Template Id           | Id for the template.                                                                                                                                                                        |         |
| Additional Fields     | Additional fields that might not be covered by the standard inputs. See https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#connect/v2/post-/messageTemplates |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                                        | false   |

### Post Payment

Creates a single customer invoice payment header instance with the specified data.

| Input                  | Comments                                                            | Default |
| ---------------------- | ------------------------------------------------------------------- | ------- |
| Connection             |                                                                     |         |
| Remit From Customer ID | The ID of the customer from which the payment is being remitted.    |         |
| Ready to Auto Apply    | Indicates whether the payment is ready to be automatically applied. | true    |
| Reference              | A reference for the payment.                                        |         |
| Transaction Number     | The transaction number for the payment.                             |         |
| Amount                 | The amount of the payment.                                          |         |
| Type ID                | The ID of the payment type.                                         |         |
| Payment Date           | The date of the payment.                                            |         |
| Company ID             | The ID of the company.                                              |         |
| Memo                   | The memo.                                                           |         |
| Payment Descriptor     | A descriptor for the payment.                                       |         |
| Payment ID             | The ID of the payment.                                              |         |
| Debug Request          | Enabling this flag will log out the current request.                | false   |

### Post Supplier Invoice Requests

Request Supplier Invoice Requests.

| Input                       | Comments                                                                                                                                                                                                                         | Default |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                  |         |
| Currency ID                 | The ID of the currency.                                                                                                                                                                                                          |         |
| Company ID                  | The ID of the company.                                                                                                                                                                                                           |         |
| Tax Amount                  | The tax amount.                                                                                                                                                                                                                  |         |
| Requester ID                | The ID of the requester.                                                                                                                                                                                                         |         |
| Control Total Amount        | The control total amount.                                                                                                                                                                                                        |         |
| Payment Terms ID            | The ID of the payment terms.                                                                                                                                                                                                     |         |
| Reference Type ID           | The ID of the reference type.                                                                                                                                                                                                    |         |
| Memo                        | The memo.                                                                                                                                                                                                                        |         |
| Supplier Invoice ID         | The ID of the supplier invoice.                                                                                                                                                                                                  |         |
| Supplier Invoice Descriptor | The descriptor of the supplier invoice.                                                                                                                                                                                          |         |
| Additional Fields           | Additional fields that might not be covered by the standard inputs. See https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#accountsPayable/v1/post-/supplierInvoiceRequests for more information. |         |
| Debug Request               | Enabling this flag will log out the current request.                                                                                                                                                                             | false   |

### Post Supplier Invoice Requests Attachments

Creates attachments for the specified supplier invoice.

| Input                                          | Comments                                             | Default |
| ---------------------------------------------- | ---------------------------------------------------- | ------- |
| Connection                                     |                                                      |         |
| Supplier Invoice Request ID                    | The ID of the supplier invoice request.              |         |
| File Length                                    | File length of the attachment.                       |         |
| Content Type ID                                | ID of the content type.                              |         |
| File Name                                      | Name of the file.                                    |         |
| Supplier Invoice Request Attachment Descriptor | Descriptor of the attachment.                        |         |
| Supplier Invoice Request Attachment ID         | ID of the attachment.                                |         |
| Debug Request                                  | Enabling this flag will log out the current request. | false   |

### Post Table

Use this method to create a new table with the specified name.

| Input               | Comments                                                                                                                                                                                 | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                          |         |
| Tenant              | The tenant.                                                                                                                                                                              |         |
| Display Name        | The display name of the table.                                                                                                                                                           |         |
| Description         | The description of the table.                                                                                                                                                            |         |
| Documentation       | The documentation of the table.                                                                                                                                                          |         |
| Enable For Analysis | Whether the table is enabled for analysis.                                                                                                                                               | false   |
| Name                | The name of the table.                                                                                                                                                                   |         |
| Tags                | The tags of the table. An array of objects with id and name.                                                                                                                             |         |
| Fields              | The fields of the table. An array of objects. See https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/post-/tables for more information. |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                                     | false   |

### Post Time Off Request

Creates a time off request for the specified worker ID and initiates the Request Time Off business process.

| Input                       | Comments                                                                                                                                                                                                                                       | Default |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                                |         |
| Worker Id                   | Id of the worker                                                                                                                                                                                                                               |         |
| Action ID                   | The ID of the action.                                                                                                                                                                                                                          |         |
| Overall Business Process ID | The ID of the overall business process.                                                                                                                                                                                                        |         |
| Days                        | The days for which the time off request is being made. An array of objects. See https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#absenceManagement/v1/post-/workers/-ID-/requestTimeOff for more information. |         |
| Time Off Comment            | The comment on the time off entry.                                                                                                                                                                                                             |         |
| Transaction Status Id       | The id of the transaction status.                                                                                                                                                                                                              |         |
| Time Off Attachments        | The attachments for the time off request.                                                                                                                                                                                                      |         |
| Time Off For Id             | The Id of the time off for. It could be another business process Id if this is a sub-process                                                                                                                                                   |         |
| Debug Request               | Enabling this flag will log out the current request.                                                                                                                                                                                           | false   |

### Post Worker Business Title Change

Create a new business title change for the specified worker.

| Input                   | Comments                                                                                                                                                            | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                     |         |
| Worker Id               | Id of the worker                                                                                                                                                    |         |
| Proposed Business Title | The new business title for the ~worker~ as of the effective date. If there is no business title override, this field defaults to the job title or job profile name. |         |
| Instance Id             | Id of the instance                                                                                                                                                  |         |
| Instance Href           | A link to the instance                                                                                                                                              |         |
| Instance Descriptor     | A preview of the instance                                                                                                                                           |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                | false   |

### Post Worker Time Block

Creates a worker time block for the specified worker.

| Input               | Comments                                                                                                                                                                                                     | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          |                                                                                                                                                                                                              |         |
| Worker Id           | Id of the worker                                                                                                                                                                                             |         |
| Do Not Bill         | The non-billable flag for a reported time block.                                                                                                                                                             | false   |
| Comment             | The comment associated with the reported time block.                                                                                                                                                         |         |
| Instance Id         | Id of the instance                                                                                                                                                                                           |         |
| Instance Descriptor | A preview of the instance                                                                                                                                                                                    |         |
| Additional Fields   | Additional fields that might not be covered by the standard inputs. See https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v3/post-/workers/-ID-/workerTimeBlock |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                                                         | false   |

### Raw Request

Send raw HTTP request to Workday

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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                               | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                   | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                      | false   |

### Send Message

Send a message.

| Input                | Comments                                                              | Default |
| -------------------- | --------------------------------------------------------------------- | ------- |
| Connection           |                                                                       |         |
| Sender Override ID   | An ID to override the sender displayed Icon.                          |         |
| Communication ID     | Group communication ID                                                |         |
| Email Detail         | Details for the email.                                                |         |
| Contacts             | Contacts to send the message to. This should be an array of contacts. |         |
| Message Template ID  | The ID of the message template                                        |         |
| Notification Type ID | The ID of the notification type.                                      |         |
| Push Detail          | Details for the push notification.                                    |         |
| Debug Request        | Enabling this flag will log out the current request.                  | false   |

### Submit Supplier Invoice Request

Submits a supplier invoice instance with the specified ID for approval.

| Input                                | Comments                                                                | Default |
| ------------------------------------ | ----------------------------------------------------------------------- | ------- |
| Connection                           |                                                                         |         |
| Supplier Invoice Request ID          | The ID of the supplier invoice request.                                 |         |
| Supplier Invoice Instance ID         | The ID of the supplier invoice instance to submit for approval.         |         |
| Supplier Invoice Instance Descriptor | The descriptor of the supplier invoice instance to submit for approval. |         |
| Debug Request                        | Enabling this flag will log out the current request.                    | false   |

### Update Message Template By ID

Update a Message Template by ID.

| Input                 | Comments                                                                                                                                                                                    | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Message Template ID   | The ID of the message template                                                                                                                                                              |         |
| Connection            |                                                                                                                                                                                             |         |
| Created By ID         | Creator ID                                                                                                                                                                                  |         |
| Email Detail          | Details for the email.                                                                                                                                                                      |         |
| Push Detail           | Details for the push notification.                                                                                                                                                          |         |
| Message Template Name | Name of the message template.                                                                                                                                                               |         |
| Reference Id          | The Reference ID to use for lookups within our Workday Web Services                                                                                                                         |         |
| Template Inactive     | Whether the template is inactive.                                                                                                                                                           |         |
| Template Descriptor   | Descriptor for the template.                                                                                                                                                                |         |
| Template Id           | Id for the template.                                                                                                                                                                        |         |
| Additional Fields     | Additional fields that might not be covered by the standard inputs. See https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#connect/v2/post-/messageTemplates |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                                        | false   |

### Update Table By ID

Use this method to edit an existing table with the specified name.

| Input               | Comments                                                                                                                                                                                     | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Table ID            | The ID of the table.                                                                                                                                                                         |         |
| Connection          |                                                                                                                                                                                              |         |
| Tenant              | The tenant.                                                                                                                                                                                  |         |
| Display Name        | The display name of the table.                                                                                                                                                               |         |
| Description         | The description of the table.                                                                                                                                                                |         |
| Documentation       | The documentation of the table.                                                                                                                                                              |         |
| Enable For Analysis | Whether the table is enabled for analysis.                                                                                                                                                   |         |
| Name                | The name of the table.                                                                                                                                                                       |         |
| Tags                | The tags of the table. An array of objects with id and name.                                                                                                                                 |         |
| Fields              | The fields of the table. An array of objects. See https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#prismAnalytics/v3/put-/tables/-id- for more information. |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                                         | false   |

### Update Time Clock Events By ID

Updates the time clock event for the specified ID. Replaces the existing time clock event with the specified data (proceed with caution).

| Input                            | Comments                                                                                                                                                                                            | Default |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                       |                                                                                                                                                                                                     |         |
| Time Clock Event Id              | Id of the time clock event                                                                                                                                                                          |         |
| Clock Event Date Time            | The date time for a time clock event                                                                                                                                                                |         |
| Clock Event Time Zone Id         | The time zone id for a time clock event                                                                                                                                                             |         |
| Clock Event Override Rate        | The override rate for a time clock event                                                                                                                                                            |         |
| Reference Id                     | The Reference ID to use for lookups within our Workday Web Services                                                                                                                                 |         |
| Clock Event Time Entry Code Id   | The time entry code id for a time clock event                                                                                                                                                       |         |
| Clock Event Project Plan Task Id | The project plan task id for a time clock event                                                                                                                                                     |         |
| Clock Event Project Id           | The project id for a time clock event                                                                                                                                                               |         |
| Clock Event Comment              | The comment associated with the time clock event                                                                                                                                                    |         |
| Additional Fields                | Additional fields that might not be covered by the standard inputs. See https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v3/put-/timeClockEvents/-ID- |         |
| Instance Descriptor              | A preview of the instance                                                                                                                                                                           |         |
| Instance Href                    | A link to the instance                                                                                                                                                                              |         |
| Instance Id                      | Id of the instance                                                                                                                                                                                  |         |
| Debug Request                    | Enabling this flag will log out the current request.                                                                                                                                                | false   |

### Update Worker Time Block

Updates the worker time block for the specified worker with the specified data in the request body.

| Input                | Comments                                                                                                                                                                                                                                                                                                                                                               | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Worker Time Block Id | Id of the worker time block                                                                                                                                                                                                                                                                                                                                            |         |
| Connection           |                                                                                                                                                                                                                                                                                                                                                                        |         |
| Worker Id            | Id of the worker                                                                                                                                                                                                                                                                                                                                                       |         |
| Do Not Bill          | The non-billable flag for a reported time block.                                                                                                                                                                                                                                                                                                                       |         |
| Comment              | The comment associated with the reported time block.                                                                                                                                                                                                                                                                                                                   |         |
| Instance Id          | Id of the instance                                                                                                                                                                                                                                                                                                                                                     |         |
| Instance Descriptor  | A preview of the instance                                                                                                                                                                                                                                                                                                                                              |         |
| Additional Fields    | Additional fields that might not be covered by the standard inputs. See https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v3/post-/workers/-ID-/workerTimeBlock See https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#timeTracking/v3/patch-/workers/-ID-/workerTimeBlock/-subresourceID- |         |
| Debug Request        | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                   | false   |
