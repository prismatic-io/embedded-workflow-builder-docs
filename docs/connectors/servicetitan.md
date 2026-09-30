---
title: ServiceTitan Connector
sidebar_label: ServiceTitan
description: Manage jobs, customers, invoices, and technicians in ServiceTitan.
---

![ServiceTitan](./assets/servicetitan.png#connector-icon)
[ServiceTitan](https://www.servicetitan.com/) is a comprehensive field service management solution that helps businesses manage their operations, workforce, and customer service.

Use the ServiceTitan component to manage Technicians, Jobs, Appointments, and more.

## API Documentation

This component was built using the [ServiceTitan API Reference](https://developer.servicetitan.io/api/docs/apis) currently utilizing the V2 API.

## Connections

### OAuth 2.0 Client Credentials {#servicetitanconnection}

Authenticate using OAuth 2.0 client credentials.

Authenticating with ServiceTitan using OAuth 2.0 Client Credentials requires a developer account and an application configured in the [ServiceTitan Developer Portal](https://developer.servicetitan.io/).

#### Prerequisites

- A ServiceTitan developer account
- Access to the [ServiceTitan Developer Portal](https://developer.servicetitan.io/)

#### Setup Steps

**Creating a new app:**

1. Log in to the [Developer Portal](https://developer.servicetitan.io/)
2. Select **My Apps** at the top of the page
3. Select **+ New App**
4. Fill in all required fields and scopes
5. Under **Client Credentials Management**, select **I, the app developer, will configure the credentials on behalf of each tenant**
6. Click **Create App**

**For existing apps:**

1. Log in to the [Developer Portal](https://developer.servicetitan.io/)
2. Select **My Apps** at the top of the page
3. Click **Edit** on the application
4. Under **Client Credentials Management**, select **I, the app developer, will configure the credentials on behalf of each tenant**
5. Click **Save**

**Obtaining a Client Secret and Client ID:**

Add the client’s Tenant ID to the application. Once the Tenant Admin has allowed access and connected to the application through their **API Application Access** settings, obtain the tenant’s Client ID and Client Secret from the developer portal:

1. Log in to the [Developer Portal](https://developer.servicetitan.io/)
2. Select **My Apps** at the top of the page
3. Click **View Connections** for the app
4. Click **Generate** under Client Secret to create a new **Client Secret**
5. Reference the tenant’s **Client ID** on this page as well

#### Configure the Connection

Create a connection of type **OAuth 2.0 Client Credentials** and configure the following fields:

- **Token URL**: Select the appropriate environment token URL (Production or Integration)
- **Client ID**: Enter the Client ID obtained from the developer portal
- **Client Secret**: Enter the Client Secret generated in the developer portal
- **Tenant**: Enter the Tenant ID used to scope API requests to a specific account
- **Application Key**: Enter the application key found in the developer portal
- **Environment**: Select **Production** for live data or **Integration** for testing

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                                                                                                                                               | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Token URL       | The OAuth 2.0 token URL for the API. Select the appropriate environment.                                                                                               |         |
| Client ID       | The client identifier for the application, found in the ServiceTitan developer portal.                                                                                 |         |
| Client Secret   | The client secret for the application, found in the ServiceTitan developer portal.                                                                                     |         |
| Tenant          | The numeric tenant ID for the ServiceTitan account, found in the ServiceTitan developer portal alongside the application's details.                                    |         |
| Application Key | The application key for the integration, found in the ServiceTitan developer portal under the application's details. Sent with every request as the ST-App-Key header. |         |
| Environment     | The ServiceTitan environment to connect to. Production uses api.servicetitan.io; Integration uses the api-integration host for sandbox testing.                        |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Retrieves existing and ongoing records for a selected ServiceTitan resource type. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                                                             | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection           | The ServiceTitan connection to use.                                                                                                                                                                                                                                                  |         |
| Resource Type        | The type of resource to poll for new and updated records.                                                                                                                                                                                                                            |         |
| Show New Records     | When true, includes newly created records in the trigger results.                                                                                                                                                                                                                    | true    |
| Show Updated Records | When true, includes updated records in the trigger results.                                                                                                                                                                                                                          | true    |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record created or modified on or after this date once, ignoring the visibility toggles. |         |

## Actions

### Assign Technicians to Appointment {#assigntechnicians}

Assigns the list of technicians to the appointment.

| Input              | Comments                                     | Default |
| ------------------ | -------------------------------------------- | ------- |
| Connection         | The ServiceTitan connection to use.          |         |
| Job Appointment ID | ID of the job appointment                    |         |
| Technician IDs     | Assign these technicians to the appointment. |         |

### Cancel Job {#canceljob}

Cancels a job.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The ServiceTitan connection to use. |         |
| Job ID     | The job ID.                         |         |
| Reason ID  | ID of job cancel reason             |         |
| Job Memo   | Memo of job cancel reason           |         |

### Create Appointment {#createappointment}

Adds a new appointment to an existing job.

| Input                | Comments                                           | Default |
| -------------------- | -------------------------------------------------- | ------- |
| Connection           | The ServiceTitan connection to use.                |         |
| Job ID               | The job ID.                                        |         |
| Start                | Start date/time (in UTC)                           |         |
| End                  | End date/time (in UTC)                             |         |
| Arrival Window Start | Arrival window start date/time (in UTC)            |         |
| Arrival Window End   | Arrival window end date/time (in UTC)              |         |
| Technician ID        | The ID of the technician.                          |         |
| Special Instructions | Special instructions associated to the appointment |         |

### Create Booking by Provider {#createbookingbyprovider}

Create a booking for a booking provider.

| Input                   | Comments                                                                                               | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The ServiceTitan connection to use.                                                                    |         |
| Booking Provider ID     | The ID of the booking provider that submitted the booking.                                             |         |
| Summary                 | A short summary describing the booking.                                                                |         |
| Is First Time Client    | When true, marks the booking's customer as a first-time client.                                        |         |
| External ID             | The booking's identifier in the originating external system.                                           |         |
| Source                  | The lead source that generated this booking.                                                           |         |
| Name                    | Booking name                                                                                           |         |
| Address                 | The street address, including unit, city, state, ZIP code, and country.                                |         |
| Contacts                | The contact methods to attach, each with a type such as Phone or Email, a value, and an optional memo. |         |
| Customer Type           | Whether the customer is Residential or Commercial.                                                     |         |
| Start                   | Start date/time (in UTC)                                                                               |         |
| Campaign ID             | The ID of the marketing campaign that generated the record.                                            |         |
| Business Unit ID        | The ID of the business unit.                                                                           |         |
| Job Type ID             | The ID of the job type to assign.                                                                      |         |
| Priority                | Booking priority                                                                                       |         |
| Uploaded Images         | The images to attach to the booking, one entry per image.                                              |         |
| Send Confirmation Email | When true, sends a booking confirmation email to the customer.                                         |         |

### Create Customer {#createcustomer}

Create a new customer.

| Input          | Comments                                                                                               | Default |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The ServiceTitan connection to use.                                                                    |         |
| Name           | The full name of the customer or business.                                                             |         |
| Location       | Locations for the customer                                                                             |         |
| Address        | Bill-To address of the customer record                                                                 |         |
| Customer Type  | Whether the customer is Residential or Commercial.                                                     |         |
| Do Not Mail    | Customer has been flagged as “do not mail”                                                             |         |
| Do Not Service | Customer has been flagged as “do not service”                                                          |         |
| Contacts       | The contact methods to attach, each with a type such as Phone or Email, a value, and an optional memo. |         |
| Custom Fields  | Custom field values to set, as an array of type ID and value pairs.                                    |         |
| Tag Type IDs   | The IDs of the tag types to apply.                                                                     |         |
| External Data  | External data to attach to the request.                                                                |         |

### Create Customer Contact {#createcustomercontact}

Create a contact for a customer.

| Input                       | Comments                                                                                  | Default |
| --------------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection                  | The ServiceTitan connection to use.                                                       |         |
| Customer ID                 | The customer ID.                                                                          |         |
| Customer Contact Type       | Type of the customer contact                                                              |         |
| Customer Contact Type Value | The email, phone number, or fax number for the contact                                    |         |
| Memo                        | Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly” |         |

### Create Installed Equipment {#createinstalledequipment}

Create a new installed equipment record.

| Input                           | Comments                                                        | Default |
| ------------------------------- | --------------------------------------------------------------- | ------- |
| Connection                      | The ServiceTitan connection to use.                             |         |
| Location ID                     | The ID of the location of the installed equipment               |         |
| Name                            | The name of the installed equipment                             |         |
| Installed On                    | The date the equipment was installed                            |         |
| Serial Number                   | Serial number of the installed equipment                        |         |
| Memo                            | The memo of the installed equipment                             |         |
| Manufacturer                    | Manufacturer of the installed equipment                         |         |
| Model                           | Model of the installed equipment                                |         |
| Cost                            | Cost of the installed equipment                                 |         |
| Warranty Dates                  | Manufacturer and service provider warranty start and end dates. |         |
| Manufacturer Warranty Start     | Manufacturer warranty start date                                |         |
| Manufacturer Warranty End       | Manufacturer warranty end date                                  |         |
| Service Provider Warranty Start | Service Provider Warranty Start date                            |         |
| Service Provider Warranty End   | Service Provider Warranty End date                              |         |
| Custom Fields                   | The custom fields of the installed equipment                    |         |
| Attachments                     | List of attachments                                             |         |
| Tag Type IDs                    | The IDs of the tag types to apply.                              |         |

### Create Installed Equipment Attachment {#createinstalledequipmentattachment}

Create a new installed equipment attachment.

| Input           | Comments                                                   | Default |
| --------------- | ---------------------------------------------------------- | ------- |
| Connection      | The ServiceTitan connection to use.                        |         |
| Attachment File | Reference a file from another action. Must be a file type. |         |
| File Name       | Name of the file                                           |         |

### Create Invoices {#createinvoices}

Create an adjustment invoice.

| Input            | Comments                                                                                   | Default |
| ---------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection       | The ServiceTitan connection to use.                                                        |         |
| Adjustment To ID | The ID of the invoice the adjustment is for.                                               |         |
| Number           | The invoice number.                                                                        |         |
| Type ID          | The ID of the invoice or payment type to assign, as configured in the ServiceTitan tenant. |         |
| Invoiced On      | The date the invoice was invoiced on.                                                      |         |
| Subtotal         | The subtotal of the invoice.                                                               |         |
| Tax              | The tax of the invoice.                                                                    |         |
| Summary          | The summary of the invoice.                                                                |         |
| Royalty Details  | Royalty status, date, sent on, and memo.                                                   |         |
| Status           | The royalty status of the invoice.                                                         |         |
| Date             | The royalty date of the invoice.                                                           |         |
| Sent On          | The royalty sent date of the invoice.                                                      |         |
| Memo             | A free-form note stored with the invoice's royalty record.                                 |         |
| Export ID        | The identifier assigned to the record when it is exported to an external system.           |         |
| Review Status    | The review status of the invoice.                                                          |         |
| Assigned To ID   | The ID of the user the invoice is assigned to.                                             |         |
| Items            | The items of the invoice.                                                                  |         |

### Create Job {#createjob}

Create a job.

| Input                         | Comments                                                                                                                                              | Default                                                                                                                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection                    | The ServiceTitan connection to use.                                                                                                                   |                                                                                                                                                                                                          |
| Customer ID                   | The customer ID.                                                                                                                                      |                                                                                                                                                                                                          |
| Location ID                   | The ID of the location.                                                                                                                               |                                                                                                                                                                                                          |
| Business Unit ID              | ID of the job's business unit                                                                                                                         |                                                                                                                                                                                                          |
| Job Type ID                   | ID of the job's type                                                                                                                                  |                                                                                                                                                                                                          |
| Priority                      | Priority of the job                                                                                                                                   |                                                                                                                                                                                                          |
| Campaign ID                   | ID of the job's campaign                                                                                                                              |                                                                                                                                                                                                          |
| Appointments                  | List of appointment information                                                                                                                       | <code>[<br /> {<br /> "start": "string",<br /> "end": "string",<br /> "arrivalWindowStart": "string",<br /> "arrivalWindowEnd": "string",<br /> "technicianIds": [<br /> 0<br /> ]<br /> }<br />]</code> |
| Job Generated Lead Source     | The lead source that generated this job. Provide jobId (the job this one was generated from) and employeeId (the office user or technician credited). |                                                                                                                                                                                                          |
| Project ID                    | ID of the job's project                                                                                                                               |                                                                                                                                                                                                          |
| Summary                       | Job summary                                                                                                                                           |                                                                                                                                                                                                          |
| Custom Fields                 | Custom fields for the job                                                                                                                             |                                                                                                                                                                                                          |
| Tag Type IDs                  | Tag type IDs for the job                                                                                                                              |                                                                                                                                                                                                          |
| External Data                 | External data to attach to the request.                                                                                                               |                                                                                                                                                                                                          |
| Invoice Signature Is Required | When true, the invoice for this job requires a signature. When left empty, the location and job type rules apply.                                     |                                                                                                                                                                                                          |
| Customer PO                   | The customer's purchase order number to record on the job.                                                                                            |                                                                                                                                                                                                          |

### Create Location {#createlocation}

Creates a new location.

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    | The ServiceTitan connection to use.                                 |         |
| Name          | The name of the location                                            |         |
| Address       | The address of the location                                         |         |
| Customer ID   | The customer ID.                                                    |         |
| Contacts      | The contacts associated with the location                           |         |
| Custom Fields | Custom field values to set, as an array of type ID and value pairs. |         |
| Tag Type IDs  | The IDs of the tag types to apply.                                  |         |
| External Data | External data to attach to the request.                             |         |

### Create Payment (Deprecated) {#createpayment}

Deprecated: ServiceTitan removed the POST /payments endpoint from the V2 API. Payment creation is no longer supported via the API.

| Input        | Comments                                                                                   | Default                                                                       |
| ------------ | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Connection   | The ServiceTitan connection to use.                                                        |                                                                               |
| Type ID      | The ID of the invoice or payment type to assign, as configured in the ServiceTitan tenant. |                                                                               |
| Splits       | The splits of the payment.                                                                 | <code>[<br /> {<br /> "invoiceId": 0,<br /> "amount": 0<br /> }<br />]</code> |
| Memo         | A free-text note recorded against the payment.                                             |                                                                               |
| Paid On      | The date the payment was paid on.                                                          |                                                                               |
| Auth Code    | The authorization code for the payment.                                                    |                                                                               |
| Check Number | The check number for the payment.                                                          |                                                                               |
| Export ID    | The identifier assigned to the record when it is exported to an external system.           |                                                                               |
| Status       | The status of the payment.                                                                 |                                                                               |

### Create Project {#createproject}

Create a new project.

| Input                  | Comments                                                                         | Default |
| ---------------------- | -------------------------------------------------------------------------------- | ------- |
| Connection             | The ServiceTitan connection to use.                                              |         |
| Location ID            | The ID of the location.                                                          |         |
| Customer ID            | ID of the project's customer                                                     |         |
| Project Manager IDs    | IDs of the project's managers                                                    |         |
| Name                   | Name of the project                                                              |         |
| Summary                | Summary of the project                                                           |         |
| Status ID              | The ID of the project status to set.                                             |         |
| Sub Status ID          | The ID of the project sub-status to set.                                         |         |
| Start                  | Start date of the project                                                        |         |
| Target Completion Date | Target completion date of the project                                            |         |
| Actual Completion Date | Actual completion date of the project                                            |         |
| Custom Fields          | Custom fields for the project                                                    |         |
| External Data          | External data items to attach to the project, grouped under an application GUID. |         |

### Create Technician {#createtechnician}

Create a new technician.

| Input                          | Comments                                                                                                                | Default |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                     | The ServiceTitan connection to use.                                                                                     |         |
| Name                           | The name of the technician                                                                                              |         |
| Account Creation Method        | Determines how the technician's login is created: defer it, send an invite, or assign a username and password now.      |         |
| Role ID                        | The ID of the user role to assign to the technician.                                                                    |         |
| Positions                      | List of company positions                                                                                               |         |
| License Type                   | The type of ServiceTitan license to assign to the technician.                                                           |         |
| Phone Number                   | Technician's phone number                                                                                               |         |
| Email                          | Technician's email address                                                                                              |         |
| Login Username                 | Technician's username                                                                                                   |         |
| Password                       | The password to assign when the technician's login is created now rather than deferred or invited.                      |         |
| Business Unit ID               | The ID of the business unit to which the technician will be assigned                                                    |         |
| Azure Active Directory User ID | The GUID of the technician's user account in Azure Active Directory.                                                    |         |
| Memo                           | Memo for the technician                                                                                                 |         |
| Additional Fields              | Additional optional fields: includes Team, Daily Goal, Burden Rate, Biography, Job Filter, and Job History Date Filter. |         |
| Team                           | Team name                                                                                                               |         |
| Daily Goal                     | Daily revenue goal                                                                                                      |         |
| Burden Rate                    | Burden rate (hourly)                                                                                                    |         |
| Biography                      | Biography of the technician                                                                                             |         |
| Job Filter                     | Upcoming appointment visibility                                                                                         |         |
| Job History Date Filter        | Appointment history visibility                                                                                          |         |
| Address                        | The home address of the technician                                                                                      |         |
| Custom Fields                  | Custom fields for the technician                                                                                        |         |

### Delete Appointment {#deleteappointment}

Delete an appointment by ID.

| Input          | Comments                            | Default |
| -------------- | ----------------------------------- | ------- |
| Connection     | The ServiceTitan connection to use. |         |
| Appointment ID | The ID of the appointment.          |         |

### Delete Customer Contact {#deletcustomerscontact}

Removes a contact from a customer.

| Input               | Comments                            | Default |
| ------------------- | ----------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use. |         |
| Customer ID         | The customer ID.                    |         |
| Customer Contact ID | The customer contact ID.            |         |

### Delete Invoice Item {#deleteinvoiceitem}

Delete an invoice item.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The ServiceTitan connection to use. |         |
| Invoice ID | The ID of the invoice.              |         |
| Item ID    | The ID of the item.                 |         |

### Get Appointment {#getappointment}

Retrieve an appointment by ID.

| Input          | Comments                            | Default |
| -------------- | ----------------------------------- | ------- |
| Connection     | The ServiceTitan connection to use. |         |
| Appointment ID | The ID of the appointment.          |         |

### Get Booking by Provider {#getbookingbyprovider}

Retrieve a booking by ID for a booking provider.

| Input               | Comments                                                   | Default |
| ------------------- | ---------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                        |         |
| Booking Provider ID | The ID of the booking provider that submitted the booking. |         |
| Booking ID          | The ID of the booking to act on.                           |         |

### Get Booking by Tenant {#getbookingbytenant}

Retrieve a booking by ID for the tenant.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The ServiceTitan connection to use. |         |
| Booking ID | The ID of the booking to act on.    |         |

### Get Customer {#getcustomer}

Retrieve a customer by ID.

| Input       | Comments                            | Default |
| ----------- | ----------------------------------- | ------- |
| Connection  | The ServiceTitan connection to use. |         |
| Customer ID | The customer ID.                    |         |

### Get Installed Equipment {#getinstalledequipment}

Retrieve an installed equipment record by ID.

| Input                  | Comments                            | Default |
| ---------------------- | ----------------------------------- | ------- |
| Connection             | The ServiceTitan connection to use. |         |
| Installed Equipment ID | ID of the installed equipment       |         |

### Get Job {#getjob}

Retrieve a job by ID.

| Input                          | Comments                                                                                                        | Default |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                     | The ServiceTitan connection to use.                                                                             |         |
| Job ID                         | The job ID.                                                                                                     |         |
| External Data Application GUID | Format - guid. If this guid is provided, external data corresponding to this application guid will be returned. |         |

### Get Location {#getlocation}

Retrieve a location by ID.

| Input       | Comments                            | Default |
| ----------- | ----------------------------------- | ------- |
| Connection  | The ServiceTitan connection to use. |         |
| Location ID | The ID of the location to retrieve  |         |

### Get Project {#getproject}

Retrieve a project by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The ServiceTitan connection to use. |         |
| Project ID | The ID of the project to retrieve   |         |

### Get Technician {#gettechnician}

Retrieve a technician by ID.

| Input         | Comments                             | Default |
| ------------- | ------------------------------------ | ------- |
| Connection    | The ServiceTitan connection to use.  |         |
| Technician ID | The ID of the Technician to retrieve |         |

### List Appointment Assignments {#listappointmentsassignment}

Retrieve a list of appointment assignments.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Appointments {#listappointments}

Retrieve a list of appointments.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Bookings by Provider {#listbookingbyprovider}

Retrieves a list of bookings for a booking provider.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Booking Provider ID | The ID of the booking provider that submitted the booking.                                                                        |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Bookings by Tenant {#listbookingbytenant}

Retrieves a list of bookings for the tenant.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Business Units {#listbusinessunits}

Gets a list of business units.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Customer Contacts {#listcustomerscontact}

Gets a list of contacts for the specified customer.

| Input                | Comments                                                                                                                          | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The ServiceTitan connection to use.                                                                                               |         |
| Customer ID          | The customer ID.                                                                                                                  |         |
| Fetch All            | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination           | Page number and page size.                                                                                                        |         |
| Page                 | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size            | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total        | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Modified Before      | Return items modified before certain date/time (in UTC)                                                                           |         |
| Modified On Or After | Return items modified on or after certain date/time (in UTC)                                                                      |         |

### List Customers {#listcustomers}

Retrieve a list of customers.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Installed Equipment {#listinstalledequipment}

Retrieve a list of installed equipment.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Installed Equipment Attachments {#listinstalledequipmentattachments}

Retrieve installed equipment attachments.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The ServiceTitan connection to use. |         |
| Path       | Installed equipment attachment path |         |

### List Invoices {#listinvoices}

Retrieves a list of invoices.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Job Cancel Reasons {#listjobcancelreasons}

Retrieve a list of job cancel reasons.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Jobs {#listjobs}

Retrieve a list of jobs.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Locations {#listlocations}

Retrieve a list of locations.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Payments {#listpayments}

Retrieve a list of payments.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Projects {#listprojects}

Retrieve a list of projects.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List Technicians {#listtechnicians}

Retrieve a list of technicians.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### List User Roles {#listuserroles}

Gets a list of user roles.

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The ServiceTitan connection to use.                                                                                               |         |
| Fetch All           | When true, automatically fetches all pages of results and ignores the page and page size values.                                  | false   |
| Pagination          | Page number and page size.                                                                                                        |         |
| Page                | The page of results to return. Paging is 1-based, so the first page is 1.                                                         |         |
| Page Size           | The maximum number of records to return per page. A page never contains more than this many records. Defaults to 50 when omitted. |         |
| Include Total       | When true, includes the total count of matching records in the response. Ignored when Fetch All is true.                          | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order.            |         |
| Custom Query Params | Additional query-string parameters to append to the request, supplied as name and value pairs.                                    |         |

### Raw Request {#rawrequest}

Send raw HTTP request to ServiceTitan.

| Input                   | Comments                                                                                                                                                                                                                                                                                       | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The ServiceTitan connection to use.                                                                                                                                                                                                                                                            |         |
| URL Type                | The URL type to connect to. For example, jpm, crm, accounting, etc.                                                                                                                                                                                                                            |         |
| URL                     | Input the path only. The base URL is built from the connection environment and the URL Type above, in the form https://api.servicetitan.io/{URL Type}/v2/tenant/{tenant}. For example, with a URL Type of jpm, entering /jobs reaches https://api.servicetitan.io/jpm/v2/tenant/{tenant}/jobs. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                        |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                      |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                           |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                               |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                         |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                            |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                    |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                       | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                            |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                            | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                               | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                            | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                  | false   |

### Unassign Technicians from Appointment {#unassigntechnicians}

Un-assigns the list of technicians from the appointment.

| Input              | Comments                                         | Default |
| ------------------ | ------------------------------------------------ | ------- |
| Connection         | The ServiceTitan connection to use.              |         |
| Job Appointment ID | ID of the job appointment                        |         |
| Technician IDs     | Unassign these technicians from the appointment. |         |

### Update Booking {#updatebooking}

Update a booking.

| Input                | Comments                                                                | Default |
| -------------------- | ----------------------------------------------------------------------- | ------- |
| Connection           | The ServiceTitan connection to use.                                     |         |
| Booking Provider ID  | The ID of the booking provider that submitted the booking.              |         |
| Booking ID           | The ID of the booking to act on.                                        |         |
| Summary              | Summary of the booking                                                  |         |
| Is First Time Client | When true, marks the booking's customer as a first-time client.         |         |
| External ID          | The booking's identifier in the originating external system.            |         |
| Source               | The lead source that generated this booking.                            |         |
| Name                 | The full name of the customer or business.                              |         |
| Address              | The street address, including unit, city, state, ZIP code, and country. |         |
| Customer Type        | Whether the customer is Residential or Commercial.                      |         |
| Start                | Start date/time (in UTC)                                                |         |
| Campaign ID          | The ID of the marketing campaign that generated the record.             |         |
| Business Unit ID     | The ID of the business unit.                                            |         |
| Job Type ID          | The ID of the job type to assign.                                       |         |
| Priority             | Booking priority                                                        |         |
| Uploaded Images      | The images to attach to the booking, one entry per image.               |         |

### Update Customer {#updatecustomer}

Update a customer.

| Input          | Comments                                                                | Default |
| -------------- | ----------------------------------------------------------------------- | ------- |
| Connection     | The ServiceTitan connection to use.                                     |         |
| Customer ID    | The customer ID.                                                        |         |
| Name           | The full name of the customer or business.                              |         |
| Customer Type  | Whether the customer is Residential or Commercial.                      |         |
| Address        | The street address, including unit, city, state, ZIP code, and country. |         |
| Custom Fields  | Custom field values to set, as an array of type ID and value pairs.     |         |
| External Data  | External data to attach to the request.                                 |         |
| Do Not Mail    | Customer has been flagged as “do not mail”                              |         |
| Do Not Service | Customer has been flagged as “do not service”                           |         |
| Active         | Whether the customer is active                                          |         |
| Tag Type IDs   | The IDs of the tag types to apply.                                      |         |

### Update Customer Contact {#updatecustomercontact}

Updates a contact on a customer.

| Input                       | Comments                                                                                  | Default |
| --------------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection                  | The ServiceTitan connection to use.                                                       |         |
| Customer ID                 | The customer ID.                                                                          |         |
| Customer Contact ID         | The customer contact ID.                                                                  |         |
| Customer Contact Type       | Type of the customer contact                                                              |         |
| Customer Contact Type Value | The email, phone number, or fax number for the contact                                    |         |
| Memo                        | Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly” |         |

### Update Installed Equipment {#updateinstalledequipment}

Update installed equipment by ID.

| Input                           | Comments                                                        | Default |
| ------------------------------- | --------------------------------------------------------------- | ------- |
| Connection                      | The ServiceTitan connection to use.                             |         |
| Installed Equipment ID          | ID of the installed equipment                                   |         |
| Name                            | The name of the installed equipment                             |         |
| Installed On                    | The date the equipment was installed                            |         |
| Serial Number                   | Serial number of the installed equipment                        |         |
| Memo                            | The memo of the installed equipment                             |         |
| Manufacturer                    | Manufacturer of the installed equipment                         |         |
| Model                           | Model of the installed equipment                                |         |
| Cost                            | Cost of the installed equipment                                 |         |
| Warranty Dates                  | Manufacturer and service provider warranty start and end dates. |         |
| Manufacturer Warranty Start     | Manufacturer warranty start date                                |         |
| Manufacturer Warranty End       | Manufacturer warranty end date                                  |         |
| Service Provider Warranty Start | Service Provider Warranty Start date                            |         |
| Service Provider Warranty End   | Service Provider Warranty End date                              |         |
| Custom Fields                   | The custom fields of the installed equipment                    |         |
| Attachments                     | List of attachments                                             |         |
| Tag Type IDs                    | The IDs of the tag types to apply.                              |         |

### Update Invoice {#updateinvoice}

Update an invoice.

| Input           | Comments                                                                                   | Default |
| --------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection      | The ServiceTitan connection to use.                                                        |         |
| Invoice ID      | The ID of the invoice.                                                                     |         |
| Number          | The invoice number.                                                                        |         |
| Type ID         | The ID of the invoice or payment type to assign, as configured in the ServiceTitan tenant. |         |
| Invoiced On     | The date the invoice was invoiced on.                                                      |         |
| Subtotal        | The subtotal of the invoice.                                                               |         |
| Tax             | The tax of the invoice.                                                                    |         |
| Summary         | The summary of the invoice.                                                                |         |
| Royalty Details | Royalty status, date, sent on, and memo.                                                   |         |
| Status          | The royalty status of the invoice.                                                         |         |
| Date            | The royalty date of the invoice.                                                           |         |
| Sent On         | The royalty sent date of the invoice.                                                      |         |
| Memo            | A free-form note stored with the invoice's royalty record.                                 |         |
| Export ID       | The identifier assigned to the record when it is exported to an external system.           |         |
| Review Status   | The review status of the invoice.                                                          |         |
| Assigned To ID  | The ID of the user the invoice is assigned to.                                             |         |
| Items           | The items of the invoice.                                                                  |         |
| Payments        | The payments of the invoice.                                                               |         |

### Update Invoice Custom Fields {#updateinvoicecustomfields}

Update custom fields for specified invoices.

| Input      | Comments                                  | Default                                                                                                                                                    |
| ---------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection | The ServiceTitan connection to use.       |                                                                                                                                                            |
| Operations | The operations to perform on the invoice. | <code>[<br /> {<br /> "objectId": 0,<br /> "customFields": [<br /> {<br /> "name": "string",<br /> "value": "string"<br /> }<br /> ]<br /> }<br />]</code> |

### Update Invoice Items {#updateinvoiceitems}

Update invoice items.

| Input                                | Comments                                                                                                                                                                                                         | Default |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                           | The ServiceTitan connection to use.                                                                                                                                                                              |         |
| Invoice ID                           | The ID of the invoice.                                                                                                                                                                                           |         |
| Description                          | The description of the SKU.                                                                                                                                                                                      |         |
| Quantity                             | The quantity of the SKU.                                                                                                                                                                                         |         |
| SKU ID                               | The ID of the SKU.                                                                                                                                                                                               |         |
| SKU Name                             | The name of the SKU.                                                                                                                                                                                             |         |
| Technician ID                        | The ID of the technician.                                                                                                                                                                                        |         |
| Additional Fields                    | Additional optional fields: includes Unit Price, Cost, Is Add On, Signature, Technician Acknowledgement Signature, Installed On, Inventory Warehouse Name, Skip Updating Membership Prices, and Item Group Name. |         |
| Unit Price                           | The unit price of the SKU.                                                                                                                                                                                       |         |
| Cost                                 | The cost of the SKU.                                                                                                                                                                                             |         |
| Is Add On                            | Is the SKU an add on.                                                                                                                                                                                            |         |
| Signature                            | The signature of the SKU.                                                                                                                                                                                        |         |
| Technician Acknowledgement Signature | The technician acknowledgement signature of the SKU.                                                                                                                                                             |         |
| Installed On                         | The date the SKU was installed on.                                                                                                                                                                               |         |
| Inventory Warehouse Name             | The inventory warehouse name of the SKU.                                                                                                                                                                         |         |
| Skip Updating Membership Prices      | Skip updating membership prices.                                                                                                                                                                                 |         |
| Item Group Name                      | The item group name of the SKU.                                                                                                                                                                                  |         |
| Item Group Root ID                   | The item group root ID of the SKU.                                                                                                                                                                               |         |
| Inventory Location ID                | The inventory location ID of the SKU.                                                                                                                                                                            |         |
| Duration Billing ID                  | The duration billing ID of the SKU.                                                                                                                                                                              |         |
| Invoice Item ID                      | The unique identifier of the invoice item.                                                                                                                                                                       |         |

### Update Job {#updatejob}

Update a job.

| Input                       | Comments                                                                                                                                              | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The ServiceTitan connection to use.                                                                                                                   |         |
| Job ID                      | The job ID.                                                                                                                                           |         |
| Customer ID                 | The customer ID.                                                                                                                                      |         |
| Location ID                 | The ID of the location.                                                                                                                               |         |
| Business Unit ID            | ID of the job's business unit                                                                                                                         |         |
| Job Generated Lead Source   | The lead source that generated this job. Provide jobId (the job this one was generated from) and employeeId (the office user or technician credited). |         |
| Job Type ID                 | ID of the job's type                                                                                                                                  |         |
| Priority                    | Priority of the job                                                                                                                                   |         |
| Campaign ID                 | ID of the job's campaign                                                                                                                              |         |
| Summary                     | Job summary                                                                                                                                           |         |
| Should Update Invoice Items | If set to true, update the business unit of invoice items on job's invoice                                                                            |         |
| Custom Fields               | Custom fields for the job                                                                                                                             |         |
| Tag Type IDs                | Tag type IDs for the job                                                                                                                              |         |
| External Data               | External data to attach to the request.                                                                                                               |         |
| Customer PO                 | The customer's purchase order number to record on the job.                                                                                            |         |

### Update Location {#updatelocation}

Update a location.

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    | The ServiceTitan connection to use.                                 |         |
| Location ID   | The ID of the location.                                             |         |
| Customer ID   | The customer ID associated with the location                        |         |
| Name          | The name of the location                                            |         |
| Address       | The address of the location                                         |         |
| Active        | If false, the location will be marked as inactive                   |         |
| Tax Zone ID   | ID of the location tax zone                                         |         |
| Custom Fields | Custom field values to set, as an array of type ID and value pairs. |         |
| Tag Type IDs  | The IDs of the tag types to apply.                                  |         |
| External Data | External data to attach to the request.                             |         |

### Update Payment {#updatepayment}

Update a specified payment.

| Input        | Comments                                                                                   | Default                                                                       |
| ------------ | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Connection   | The ServiceTitan connection to use.                                                        |                                                                               |
| Payment ID   | The ID of the payment.                                                                     |                                                                               |
| Type ID      | The ID of the invoice or payment type to assign, as configured in the ServiceTitan tenant. |                                                                               |
| Splits       | The splits of the payment.                                                                 | <code>[<br /> {<br /> "invoiceId": 0,<br /> "amount": 0<br /> }<br />]</code> |
| Memo         | A free-text note recorded against the payment.                                             |                                                                               |
| Paid On      | The date the payment was paid on.                                                          |                                                                               |
| Auth Code    | The authorization code for the payment.                                                    |                                                                               |
| Check Number | The check number for the payment.                                                          |                                                                               |
| Export ID    | The identifier assigned to the record when it is exported to an external system.           |                                                                               |
| Status       | The status of the payment.                                                                 |                                                                               |

### Update Payment Custom Fields {#updatepaymentcustomfields}

Update custom fields for specified payments.

| Input      | Comments                                  | Default                                                                                                                                                    |
| ---------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection | The ServiceTitan connection to use.       |                                                                                                                                                            |
| Operations | The operations to perform on the payment. | <code>[<br /> {<br /> "objectId": 0,<br /> "customFields": [<br /> {<br /> "name": "string",<br /> "value": "string"<br /> }<br /> ]<br /> }<br />]</code> |

### Update Project {#updateproject}

Update a project.

| Input                  | Comments                                                                         | Default |
| ---------------------- | -------------------------------------------------------------------------------- | ------- |
| Connection             | The ServiceTitan connection to use.                                              |         |
| Project ID             | ID of the project to update                                                      |         |
| Project Manager IDs    | IDs of the project's managers                                                    |         |
| Job IDs                | IDs of the project's jobs                                                        |         |
| Name                   | Name of the project                                                              |         |
| Summary                | Summary of the project                                                           |         |
| Status ID              | The ID of the project status to set.                                             |         |
| Sub Status ID          | The ID of the project sub-status to set.                                         |         |
| Start                  | Start date of the project                                                        |         |
| Target Completion Date | Target completion date of the project                                            |         |
| Actual Completion Date | Actual completion date of the project                                            |         |
| Custom Fields          | Custom fields for the project                                                    |         |
| External Data          | External data items to attach to the project, grouped under an application GUID. |         |

### Update Technician {#updatetechnician}

Update a technician.

| Input                          | Comments                                                                                                                | Default |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                     | The ServiceTitan connection to use.                                                                                     |         |
| Technician ID                  | The ID of the technician to update                                                                                      |         |
| Name                           | The name of the technician                                                                                              |         |
| Phone Number                   | Technician's phone number                                                                                               |         |
| Email                          | Technician's email address                                                                                              |         |
| Login Username                 | Technician's username                                                                                                   |         |
| Business Unit ID               | The ID of the business unit to which the technician will be assigned                                                    |         |
| Role ID                        | The ID of the user role to assign to the technician.                                                                    |         |
| Positions                      | List of company positions                                                                                               |         |
| Azure Active Directory User ID | The GUID of the technician's user account in Azure Active Directory.                                                    |         |
| License Type                   | The type of ServiceTitan license to assign to the technician.                                                           |         |
| Memo                           | Memo for the technician                                                                                                 |         |
| Additional Fields              | Additional optional fields: includes Team, Daily Goal, Burden Rate, Biography, Job Filter, and Job History Date Filter. |         |
| Team                           | Team name                                                                                                               |         |
| Daily Goal                     | Daily revenue goal                                                                                                      |         |
| Burden Rate                    | Burden rate (hourly)                                                                                                    |         |
| Biography                      | Biography of the technician                                                                                             |         |
| Job Filter                     | Upcoming appointment visibility                                                                                         |         |
| Job History Date Filter        | Appointment history visibility                                                                                          |         |
| Address                        | The home address of the technician                                                                                      |         |
| Custom Fields                  | Custom fields for the technician                                                                                        |         |
